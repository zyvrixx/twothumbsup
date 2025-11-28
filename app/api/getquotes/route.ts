import { supabaseServer } from "@/lib/server";
import { NextResponse } from "next/server";

export async function POST (req : Request) {
   const item = await req.formData() 

   const title = item.get("title")
    const tags = JSON.parse(item.get("tags") as string | "[]")
    const file = item.get("file") as File;
    
    const fileBuffer = Buffer.from(await file.arrayBuffer())
    const filePath = `twothumbsup/${Date.now()}-${file.name}`
    
   const {error : storageError} = await supabaseServer
   .storage.from("twothumbsup").upload(filePath, fileBuffer, {
    contentType : file.type
   }) 

    const token  = req.headers.get("authorization")?.replace("Bearer ", "")
   if (!token) console.log("no auth")

    const {data : {user}, error:InserError} = await supabaseServer.auth.getUser(token)
    
    const userid = user?.id
    
    const {data :PublicUrl} = await supabaseServer.storage.from("twothumbsup").getPublicUrl(filePath)
     
   const {error, data} = await supabaseServer.from("posts")
   .insert({
    title,
    tags,
    ImagePath : filePath,
    created_by : userid, 
    content_url : PublicUrl,
   })

   //chanage the ImagePath if it fails

   if (error) return NextResponse.json(error)

    return NextResponse.json({message : "upload success"} )
}


export async function GET() {
    const {error, data} = await supabaseServer.from("posts").select("*")
    .order("created_at", {ascending : false}) 
    return NextResponse.json(data)
    //get add middlware and error handler here
}