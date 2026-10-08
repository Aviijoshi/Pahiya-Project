import Image from "next/image";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import PublicHome from "@/components/PublicHome";
import { auth } from "@/auth";
import GeoUpdater from "@/components/GeoUpdater";
import PartnerDashboard from "@/components/PartnerDashboard";
import AdminDashboard from "@/components/AdminDashboard";
import connectDb from "@/lib/db";
import User from "@/models/user.model";
export default async function Home() {
const session = await auth()
  await connectDb()
  const user = await User.findOne({email:session?.user?.email})
  return (
    <div className="w-full min-h-screen bg-white ">
      {user && <GeoUpdater userId={user._id.toString()}/>}

      {user?.role=="partner"
      ?
      <>
       <Nav />
       <PartnerDashboard/>
      </>
      

    :
    (
      user?.role=="admin"
      ?
      <AdminDashboard/>
      :
      <>
<Nav />
       <PublicHome />
      </>
     
      
    )
    }
      
      <Footer />
      
    </div>
  );
}

