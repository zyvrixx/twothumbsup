import UploadFile from "@/components/UploadFile"

export default function AdminDashBoard() {
    return <div className="w-[80%] mx-[10%] h-full flex flex-col ">
       <p>this is the admin dashboard</p> 
        <div className="w-full h-full">
            <UploadFile />
        </div>
        </div>
}