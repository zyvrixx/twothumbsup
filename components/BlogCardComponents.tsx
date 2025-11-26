import { MessageCircle } from "lucide-react"
import { Heart } from "lucide-react"
import { blogpostSchema } from "@/schema/models"
import * as z from "zod"

type blogpostSchema = z.infer<typeof blogpostSchema>

export default function BlogPostComponents() {
    return <div className="w-full roudned-lg h-full my-5 bg-green-300">


    </div>
}