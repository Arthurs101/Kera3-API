//importar el cliente para la conección a la base de datos
const {createClient} = require('@supabase/supabase-js')
const supabaseUrl = 'https://mocyzargxwwmjcppskkc.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1vY3l6YXJneHd3bWpjcHBza2tjIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODMyMjU0MzcsImV4cCI6MTk5ODgwMTQzN30._7r2cvTzNNcWVBkGoCf_OjOjK85QwG1UJSf_FUT_p2E'
const supabase = createClient(supabaseUrl, supabaseKey)
module.exports = supabase