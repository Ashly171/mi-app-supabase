import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://dewuayhyeovmzymkbjlj.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRld3VheWh5ZW92bXp5bWtiamxqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzcyNDkyMjMsImV4cCI6MjA5MjgyNTIyM30.1xM2iJ0BNdGLQ6J16XaqQnaAMtH2zkB5p7r2rFXTrJY'

const supabase = createClient(supabaseUrl, supabaseKey)

async function obtenerEstudiantes(){
    const {data,error}= await supabase
    .from('estudiantes')
    .select('*')

    if(error){
        console.log('Error:', error)
    }
    else{
        console.log('Datos:', data)
    }
}

obtenerEstudiantes()
