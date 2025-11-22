"use client"

import { cn } from "@/lib/utils"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import {loginschema} from "../schema/models"
import {zodResolver} from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import {supabase} from "@/lib/supabase"
type SignFormValues = z.infer<typeof loginschema>


export function LoginForm({
className,
...props
}: React.ComponentProps<"div">) {

const {
register,
handleSubmit,
formState : {errors, isSubmitting},
} = useForm<SignFormValues>({
  resolver: zodResolver(loginschema)
})

const onSubmit = async (data : SignFormValues) => {
  const {email, password} = data

  const {error} = await supabase.auth.signInWithPassword({
    email,
    password
  })

    if (error) {
      console.log(error.message) 
    } else {
    console.log("youre now login")}

    //add a better error handler to ensure that it wont be that easy for an attacker to guess password
    //dont rerturn the error for each username or password
    // add custom error handler for the user
    
    // add the forget password make this into a modals and not like this do a parallel routing as well
    // polish the login site and fix the rediection to ensure that it is good

  }
  const SignInWithGoogle = async() => {
    await supabase.auth.signInWithOAuth({
      provider : "google",
      options : {
      // insert a redirect maybe the one in the supabase google redirect find it
      redirectTo : "http:localhost:3000/home"
    },
    })
  }
  return (

    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader>
          <CardTitle>Login to your account</CardTitle>
          <CardDescription>
            Enter your email below to login to your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)}>
            <FieldGroup>
              <Field>
                <FieldLabel htmlFor="email">Email</FieldLabel>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  required
                  {...register("email")}
                />
              </Field>
              <Field>
                <div className="flex items-center">
                  <FieldLabel htmlFor="password">Password</FieldLabel>
                  <a
                    href="#"
                    className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                  >
                    Forgot your password?
                  </a>
                </div>
                <Input id="password" type="password" required {...register("password")} />
              </Field>
              <Field>
                <Button type="submit">Login</Button>
                <Button variant="outline" type="button">
                  Login with Google
                </Button>
                <FieldDescription className="text-center">
                  Don&apos;t have an account? <a href="#">Sign up</a>
                </FieldDescription>
              </Field>
            </FieldGroup>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
