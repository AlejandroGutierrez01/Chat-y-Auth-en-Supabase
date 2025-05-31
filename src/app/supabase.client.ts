import {createClient} from  '@supabase/supabase-js'

const supabaseUrl = "https:*tucodigo.supabase.co"
const supabaseKey = 'tuapikey';

export const supabase = createClient(supabaseUrl, supabaseKey)
