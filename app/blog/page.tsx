import { Metadata } from "next" 
import { title } from "process"
export const metadata:Metadata={
    title:{
        absolute:"Blog",
    },
}

function Blog() {
  return (
    <div>Blog Page</div>
  )
}

export default Blog