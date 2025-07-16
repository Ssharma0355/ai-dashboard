"use client";
import { useState } from "react";

interface SearchBarProps {
  onSearchChange: (query: string) => void;
}

export const SearchBar = ({ onSearchChange }: SearchBarProps) => {
  const [query, setQuery] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
    onSearchChange(value);
  };

  return (
    <input
      type="text"
      placeholder="Search documents..."
      value={query}
      onChange={handleChange}
      className="p-2 border rounded w-64"
    />
  );
};
