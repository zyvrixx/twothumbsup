// import {supabase } from "@/lib/supabase"
//
import { supabaseServer } from "@/lib/server";
import { NextResponse } from "next/server";
// import { quoteSchema } from "@/schema/models"
// import { supabaseServer } from "@/lib/server"
// import * as z from "zod"
// import { Quote } from "lucide-react"

// type Quote = z.infer<typeof quoteSchema>

//fetching quote post from the db
//import data from facebook then upsert 
//cause i will repeat this request everyday

/* 
export async function POST(req :  Request) {
   try {
    const pageUrl = `https://graph.facebook.com/v18.0/${pageid}?fields=name,picture.type(large)&access_token=${PAGE_ACCESS_TOKEN}`;
    const pageResp = await fetch(pageUrl);
    const pageData = await pageResp.json();
    pageData = quoteSchema.parse( await req.json())
    
    const {data, error} = await supabaseServer.from("post")
    .insert(body).select();
    
    //add custom handler for the error response from ther server
    } catch(error) {
        console.log(error)
    }
}



export async function PATCH(req : Request) {
    try {
        const body = quoteSchema.parse(await req.json())
        const {Title , Tags , ContentUrl } = body
    }

} */

export async function POST (req : Request) {
   const item = await req.formData() 

   const title = item.get("title")
    const tags = JSON.parse(item.get("tags") as string | "[]")
    const file = item.get("file") as File;
    
    const fileBuffer = Buffer.from(await file.arrayBuffer())
    const filePath = `twothumbsup/${Date.now()}-${file.name}`
    
   const {error} = await supabaseServer
   .storage.from("twothumbsup").upload(filePath, fileBuffer, {
    contentType : file.type
   }) 

    
   const {error :insertError, data} = await supabaseServer.from("posts")
   .insert({
    title,
    tags,
    ImagePath : filePath
   })

   if (error) return NextResponse.json(error.message)

    return NextResponse.json("upload successfull")
}


export async function GET() {
    const {error, data} = await supabaseServer.from("post").select("*")
    .order("created_at", {ascending : false})
}