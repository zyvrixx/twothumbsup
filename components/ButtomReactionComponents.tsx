import { MessageCircle, Heart, MoreHorizontal } from "lucide-react";

 enum TypeOfElement {
        heart,
        comment,
        more
        
    }

    interface ElementProp {
        Type : TypeOfElement
    }
    

export default function ButtonReactionComponents() {
   
    
    const onClickElement = (element : string) => {
        // do a parralell route to redirect do a pop up and parralel route
           //something went wrong th
        
        
    }

    return <div className="w-full flex py-2 gap-x-10 justify-between px-1 h-full">
        <div className="flex gap-x-5">
            <div>
            <MessageCircle />
            </div>
            <div>
            <Heart />
            </div>
        </div>
        <div className="">
            <MoreHorizontal />
        </div>
        
    </div>
}