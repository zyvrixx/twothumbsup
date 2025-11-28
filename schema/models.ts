import * as z from "zod"


// export interface signUpFormSchema={
//   username : string
//   password : string
//   confirmPassword :  string
//
// }


export const signupschema = z.object({
  email: z.string().email("invalid email try again"),
  password : z.string().min(8, "password must be at least 8 characters long"),
  confirmPassword : z.string(),
}).refine(data => data.password === data.confirmPassword, {
  message : "password doesnt match",
  path : ["confirmPassword"],
})

export const loginschema = z.object({
  email : z.string().email("invalid email try again"),  
  password : z.string()
})


export const blogpostSchema = z.object({
  Title : z.string(),
  ContentUrl : z.url().optional(),
  Content :z.string(),
  Tags :z.array(z.string()),
})

export const quoteSchema = z.object({
  Title : z.string(),
  ContentUrl : z.url(),
  Tags : z.array(z.string()),
})

export const ImageFileUploadSchema = z.object({
  File : z.any().refine((file) => file?.length === 1, "please upload a file ")
  .refine((file) => file && file[0].size <= 5 * 1024 * 1024, "file must be less than 5mb" )
  .refine((file) => ["image/png", "image/jpeg"].includes(file[0].type), "file must be a Image"),
  Title : z.string(),
  Tags : z.string().transform((val) => val.split(/[, ]/).map((tag) => tag.trim().toLowerCase()).filter(Boolean) ).refine((arr) => arr.length > 0, "it require at least one tag" ).optional() 
})