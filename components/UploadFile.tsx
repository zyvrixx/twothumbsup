import * as z from "zod"
import {useForm} from "react-hook-form"
import {zodResolver} from "@hookform/resolvers/zod"
import { ImageFileUploadSchema } from "@/schema/models"

type Quote = z.infer<typeof ImageFileUploadSchema>

export default function UploadFile() {
  
  const {register, handleSubmit, formState : {
    isSubmitted, errors
  }} = useForm<Quote>({
    resolver : zodResolver(ImageFileUploadSchema)
  })
  
  const onSubmit = async (data : Quote) => {
    const formdata = new FormData()
    
    formdata.append("title", data.Title)
    formdata.append("tags", JSON.stringify(data.Tags))
    formdata.append("file", data.File[0])
    
    
  // add an better ui for tags that autodetects it to make it much better and show an option
    
    const sendData = await fetch("/api/getquote", {
      method :"POST",
      body : formdata
    })
    
    const json = sendData.json()
  }

  return <div className="w-full h-full bg-slate-200  ">

   <form onSubmit={handleSubmit(onSubmit)}>
     <div>
        <input type="text"
          placeholder="Title"
        {...register("Title")}
        />
      </div>
      <div>
    <input type="text"
    placeholder="tags"
      {...register("Tags")}
      
    />
      </div>
     <div>
      <input type="file"
      {...register("File")} 
      id="" />
      </div> 
      <button type="submit">Submit</button>
  </form> 


  </div>
}
