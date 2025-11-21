'use client';

import { useState } from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
Dialog,
DialogContent,
DialogTrigger,
DialogHeader,
DialogTitle,
} from "@/components/ui/dialog";
import { Heart } from "lucide-react";

type CarouselItemType = {
id: number;
color: string;
title: string;
};

export default function CarouselMockup() {
const items: CarouselItemType[] = [
{ id: 1, color: "bg-red-400", title: "Item 1" },
{ id: 2, color: "bg-blue-400", title: "Item 2" },
{ id: 3, color: "bg-green-400", title: "Item 3" },
{ id: 4, color: "bg-yellow-400", title: "Item 4" },
];

const [liked, setLiked] = useState<number[]>([]);

const toggleLike = (id: number) => {
setLiked((prev) =>
prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
);
};

return ( <div className="flex gap-4 overflow-x-auto p-4">
{items.map((item) => ( <Dialog key={item.id}> <DialogTrigger asChild>
{/* Single child only! */}
<div
className={`${item.color} w-48 h-48 rounded-lg cursor-pointer flex items-center justify-center text-white font-bold`}
>
{item.title} </div> </DialogTrigger>

```
      <DialogContent className="sm:max-w-sm">
        <DialogHeader>
          <DialogTitle>{item.title}</DialogTitle>
        </DialogHeader>

        <Card className="mt-2">
          <CardContent>
            <p>This is a comment popup for {item.title}.</p>
          </CardContent>
          <CardFooter className="flex justify-between items-center">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => toggleLike(item.id)}
              className="flex items-center gap-1"
            >
              <Heart
                className={`transition-colors ${
                  liked.includes(item.id) ? "text-red-500" : ""
                }`}
              />
              {liked.includes(item.id) ? "Liked" : "Like"}
            </Button>
          </CardFooter>
        </Card>
      </DialogContent>
    </Dialog>
  ))}
</div>
);
}
