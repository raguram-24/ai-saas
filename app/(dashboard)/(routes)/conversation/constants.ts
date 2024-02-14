import * as z from "zod"

const formSchema = z.object({
    prompt : z.string().min(1,{
        message : "prompt is Required"
    }),
})
 
export default formSchema;