//importar el cliente para la conección a la base de datos
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://mocyzargxwwmjcppskkc.supabase.co'
const supabaseKey = process.env.SUPABASE_KEY
const supabase = createClient(supabaseUrl, supabaseKey)
module.exports = supabase