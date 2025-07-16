"use client";
import { useState } from "react";

export const SearchBar = () => {
  const [query, setQuery] = useState("");

  // You can lift the state up later if needed

  return (
    <input
      type="text"
      placeholder="Search documents..."
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      className="p-2 border rounded w-64"
    />
  );
};
