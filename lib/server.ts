import {createClient} from "@supabase/supabase-js"

const supabaseUrl = proccess.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseRoleKey = proccess.env.SUPABASE_SERVICE_ROLE_KEY!

export supabaseServer = createClient(supabaseUrl, supabaseRoleKey, {
  auth : {
    persistSession : false
  }
})
