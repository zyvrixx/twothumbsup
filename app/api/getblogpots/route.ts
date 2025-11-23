// import {supabase } from "@/lib/supabase"
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