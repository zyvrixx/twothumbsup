import {supabase } from "@/lib/supabase"
import { quoteSchema } from "@/schema/models"
import { supabaseServer } from "@/lib/server"
import * as z from "zod"
import { Quote } from "lucide-react"

type Quote = z.infer<typeof quoteSchema>

//fetching quote post from the db
export async function GET (req : Request, res : Response) {
    try {
    const {data, error} = await supabase.from("posts").select("*")    
    return Response.json(data)
    } catch(error) {
    if (error) return Response.json(error)
    }
    //replace this with a custom middleware to check for errors
}

export async function POST(req :  Request) {
    try {
    const body = quoteSchema.parse( await req.json())
    
    const {data, error} = await supabaseServer.from("post")
    .insert(body).select();
    
    //add custom handler for the error response from ther server
    } catch(error) {
        console.log(error)
    }

    

}