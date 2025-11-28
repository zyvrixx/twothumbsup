"use client"



import * as z from "zod"
import {SubmitHandler, useForm} from "react-hook-form"
import {zodResolver} from "@hookform/resolvers/zod"
import { ImageFileUploadSchema } from "@/schema/models"

type QuoteBefore = z.infer<typeof ImageFileUploadSchema>
type Quote = z.output<typeof ImageFileUploadSchema>

export default function UploadFile() {
  
  const {register, handleSubmit, formState : {
    isSubmitted, errors
  }} = useForm<QuoteBefore>({
    resolver : zodResolver(ImageFileUploadSchema)
  })
  
  const onSubmit :SubmitHandler<Quote> = async (data) => {
/*     const parseTags = ImageFileUploadSchema.safeParse(data)
    
    if (!parseTags.success) {
      console.log(parseTags.error.format())
      return errors.root
    }
  
    const ParseData : Quote = parseTags.data

  */   const formdata = new FormData()
    formdata.append("title", data.Title)
    formdata.append("tags", JSON.stringify(data.Tags))
    formdata.append("file", data.File[0])
    
    
  // add an better ui for tags that autodetects it to make it much better and show an option
    
/*     const sendData = await fetch("/api/getquotes", {
      method :"POST",
      body : formdata
    })
    
    const json = await sendData.json()
    console.log(isSubmitted)
  console.log("rawData.Tags:", ParseData.Tags, typeof ParseData.Tags);
   console.log(errors) 
  */
   try {
      const res = await fetch("/api/getquotes", {
        method: "POST",
        body: formdata,
      });
      const json = await res.json();
      console.log("response:", json);
    } catch (err) {
      console.error("Upload failed:", err);
    }

    console.log("isSubmitted:", isSubmitted);
    console.log("Tags array:", data.Tags);
  };

  
  
    

  return <div className="w-full h-full bg-slate-200  ">

   <form onSubmit={handleSubmit(onSubmit)}>
      {errors.File && <p>{errors.File.message?.toString()}</p>}
      {errors.Tags && <p>{errors.Tags.message?.toString()}</p>}
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
      {errors.Title && <p>{errors.Title.message?.toString()}</p>}
      <button type="submit">Submit</button>
  </form> 


  </div>
}
