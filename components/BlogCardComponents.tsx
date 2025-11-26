import { MessageCircle } from "lucide-react"
import { Heart } from "lucide-react"
import { blogpostSchema } from "@/schema/models"
import * as z from "zod"

type blogpostSchema = z.infer<typeof blogpostSchema>



export default function BlogPostComponents({}: blogpostschema) {
    return <div className="w-full roudned-xl h-full p-5   bg-green-300">

      <p>this is a test</p>

    </div>
}
