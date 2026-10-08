import nodemailer from 'nodemailer'
const transporter = nodemailer.createTransport({
    service:"gmail",
    auth:{
        user:process.env.EMAIL,
        pass:process.env.PASS
    }
})
// Jab email jayega hamare email se to wo uska design kesa hoga wo sab hai yahan
export const sendMail = async (to:string,subject:string,html:string) =>{
    await transporter.sendMail({
        from:`"Pahiya <${process.env.EMAIL}>`,
        to,
        subject,
        html
    })

}