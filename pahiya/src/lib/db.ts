import mongoose from "mongoose"
import dns from 'dns';
dns.setServers(['8.8.8.8', '8.8.4.4']);
const mongodbUrl = process.env.MONGODB_URL
if(!mongodbUrl){
    throw new Error("Db url not found ")
}
// Nomerous connection resolve krne ke liye cache me store krenge
let cached = global.mongooseConn
if(!cached){
    cached = global.mongooseConn={conn:null,promise:null}
}

const connectDb = async () =>{
    // Agar connection milgya to yahin se return yani purana connection hi
    if(cached.conn){
        return cached.conn
    }
    if(!cached.promise){
        // New connection banega yahan
        cached.promise = mongoose.connect(mongodbUrl).then(c=>c.connection)
    }
    // Connect ho rhe hain hue nhi hain
    try {
        const conn = await cached.promise
        return conn
    } catch (error) {
        console.log(error)
        throw error
        
    }



}

export default connectDb