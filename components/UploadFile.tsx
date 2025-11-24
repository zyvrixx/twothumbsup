import * as z from "zod"
import {useForm} from "react-hook-form"
import {zodResolver} from "@hookform/resolvers/zod"
import  {quoteschema} from "@/schema/models"

type Quote = z.infer<typeof quoteschema>

export default function UploadFile() {
  const form = useForm<Quote>({
    resolver: zodResolver(quoteschema)
  })
  return <div className="">

  </div>
}
