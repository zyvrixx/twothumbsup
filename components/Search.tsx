'use client';

import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import { Search } from "lucide-react";

export default function SearchBar() {
  return (
    <div className="grid  w-full max-w-sm gap-6 rounded-full">
      <InputGroup>
        <InputGroupInput placeholder="Search..." />
        <InputGroupAddon>
          <Search className="w-full h-full text-white" size={20}/>
        </InputGroupAddon>
      </InputGroup>
    </div>
  )
}
