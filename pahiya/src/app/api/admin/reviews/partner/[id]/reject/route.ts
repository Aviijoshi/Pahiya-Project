import { auth } from "@/auth";
import { NextRequest } from "next/server";
import connectDb from "@/lib/db";
import User from "@/models/user.model";
import PartnerDocs from "@/models/partnerDocs.model";
import PartnerBank from "@/models/partnerBank.mode";

export async function POST(
  req: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  try {
    const session = await auth();

    if (!session || !session.user?.email || session.user.role !== "admin") {
      return Response.json(
        { message: "unauthorized" },
        { status: 400 }
      );
    }

    await connectDb();
    const{rejectionReason} = await req.json()

    const partnerId = (await context.params).id;

    const partner = await User.findById(partnerId);

    if (!partner || partner.role !== "partner") {
      return Response.json(
        { message: "Partner not found" },
        { status: 400 }
      );
    }

    

    

    partner.partnerStatus="rejected"
    partner.rejectionReason=rejectionReason
    await partner.save()

    return Response.json(
        {message:"Partner rejected succesfully"},{status:200}
    )
    

    


  } catch (error) {
     return Response.json(
        { message: `Partner rejected error ${error}` },
        { status:500 }
      );
    
  }
}