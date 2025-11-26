import {MessageCircle} from "lucide-react"
import BlogPostComponents from "./BlogCardComponents"
import ButtonReactionComponents from "./ButtomReactionComponents"


export default function Blogpost() {
  // define 4 bloogpost or what just find a good proportion on how to make it good
  // add a transition to that automatically scroll
  
 return <div className="w-full border-1 h-[100vh] rounded-xl my-5  p-2 bg-gray-300">
    
    <p className=" px-5 w-full  font-semibold text-lg">Latest Blogpost </p>
    {/* map over all of the blogpost component*/} 
    <div className="w-full h-[95%] p-2 ">
      <BlogPostComponents />
      <ButtonReactionComponents />
    </div>
    </div>
  }

