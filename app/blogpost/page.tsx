import Blogpost from "@/components/Blogpost"
import FilterComponent from "@/components/Filter"


export default function BlogPostPage() {
    return <div className="w-[80%] h-full mx-[10%] bg-slate-100">
            <div className="p-5">
               <FilterComponent /> 
               <Blogpost /> 
            </div>
    </div>
}