'use client';

import { useState } from "react";
import Filter from "./Filter"
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
      prev.includes(id)
        ? prev.filter((x) => x !== id)
        : [...prev, id]
    );
  };

  return (
    <div className="flex max-sm:flex-col max-sm:overfow-y-auto max-sm:pt-35 max-sm:gap-y-4 hide-scrollbar pt-22 bg-slate-100 rounded-lg relative gap-x-6.5 p-4 overflow-x-auto items-center">

    
     <div className="absolute top-0  left-0 py-3 px-4">

    <Filter></Filter>
      </div> 
      {items.map((item) => (
        <Dialog key={item.id}>
          <DialogTrigger asChild>
            {/* IMPORTANT: button fixes the error */}
            <div
              className={`${item.color} w-70 h-90 relative flex-shrink-0 rounded-lg cursor-pointer flex items-center justify-center text-white font-bold`}
            >
              {item.title}
              <CardFooter className="flex absolute left-0 bottom-2 justify-between items-center">
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
            </div>
          </DialogTrigger>

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
  )}

