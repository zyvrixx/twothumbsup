import Link from "next/link"
import Image from "next/image"
import SearchBar from "./Search"

const NavigationItems = ["Quotes", "BlogPost", "About Us", "Contact Us"]

export default function Navigation() {
  return (
    <div className="py-3 px-5 w-[80%] my-2 mx-auto bg-slate-500 rounded-full flex items-center justify-between">
      
    {/* Logo */}
    <div className="flex items-center gap-5">
    <div className="w-16 h-16 rounded-full overflow-hidden ">
      <Image 
            className="w-full h-full "
            src="/twothumbs.png"
            alt="Two Thumbs Up logo"
            width={100}
            height={100}
        />
    </div>
    <p className ="text-white md-visible hidden font-semibold text-md lg:text-lg">Two Thumbs Up</p>
    </div>
    
{/*SearchBar */}
<div className="md:visible hidden">
<SearchBar />
</div>

    {/* Navigation */}
    <ul className="hidden lg:flex text-sm items-center gap-5">
    {NavigationItems.map((item, index) => (
        <li key={index}>
        <Link href={`/${item.replace(" ", "").toLowerCase()}`} className="text-white hover:text-gray-300 text-md hover:font-semibold ">
            {item}
        </Link>
        </li>
    ))}
    </ul>

</div>
  )
}
