import CarouselMockup from "@/components/Carousel";
import FilterComponent from "@/components/Filter";

export default function Quote() {
    // do here something different that the carousel maybe use it still i 
    

    return <div className="w-[80%] mx-[10%] p-2">
        <div >
            <FilterComponent />        
        </div>
        <div className="flex flex-col gap-y-5 w-full h-full">
           <div>
                <CarouselMockup />
            </div> 
            <div>
                <CarouselMockup/>
            </div>
        </div>
    </div>

}