import  Carousel  from "@/components/Carousel"
import Blogpost from "@/components/Blogpost"

//if this became stable add a development branch to ensure there are no down time when updating features



export default function Home() {
  return <div className="w-full h-[100vh]">
    <div className="w-[80%] flex flex-col gap-y-10 mx-[10%] px-3">
      
    <Carousel />
    <Blogpost />
    </div>
    

  </div>

}
