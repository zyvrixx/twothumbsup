"use client";

import { useState, useEffect } from "react";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "@/components/ui/select";

type Quote = {
  id?: number;
  tags?: string[];
  created_at?: string;
};

type Props = {
  quotes?: Quote[];
  onFilter?: (filtered: Quote[]) => void;
};

export default function FilterComponent({ quotes = [], onFilter = () => {} }: Props) {
  const [genre, setGenre] = useState<string | "all">("all");
  const [sort, setSort] = useState<"asc" | "desc">("desc");

  // automatically filter and sort whenever quotes, genre, or sort changes
  useEffect(() => {
    let filtered = [...quotes];

    if (genre !== "all") {
      filtered = filtered.filter((q) => q.tags?.includes(genre));
    }

    filtered.sort((a, b) => {
      const aTime = a.created_at ? new Date(a.created_at).getTime() : 0;
      const bTime = b.created_at ? new Date(b.created_at).getTime() : 0;
      return sort === "asc" ? aTime - bTime : bTime - aTime;
    });

    onFilter(filtered);
  }, [quotes, genre, sort, onFilter]);

  return (
    <div className="flex flex-col">

    <h1 className="text-lg mx-2 font-semibold">Quote</h1>
    <div className="flex gap-4 max-sm:flex-col mb-4 my-1">
      {/* Genre select */}
      <Select value={genre} onValueChange={(val) => setGenre(val as typeof genre)}>
        <SelectTrigger className="w-48">
          <SelectValue placeholder="Genre" />
        </SelectTrigger>
        <SelectContent>
          {["all", "inspirational", "faith", "motivational", "success"].map((g) => (
            <SelectItem key={g} value={g}>
              {g.charAt(0).toUpperCase() + g.slice(1)}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      {/* Sort select */}
      <Select value={sort} onValueChange={(val) => setSort(val as "asc" | "desc")}>
        <SelectTrigger className="w-48">
          <SelectValue placeholder="Sort" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="asc">Oldest → Newest</SelectItem>
          <SelectItem value="desc">Newest → Oldest</SelectItem>
        </SelectContent>
      </Select>
    </div>
    </div>
  );
}

