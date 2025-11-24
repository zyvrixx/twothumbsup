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

export const QuoteSchema = z.object({
  id : z.string(),
  title :  z.string().optional(),
  tag :z.array(z.string),
  createdAt : z.date(),
  contentUrl : z.url().optional()
})
