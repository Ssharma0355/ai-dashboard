"use client";
import { useState } from "react";

interface Props {
  onFilterChange: (filters: { type: string; category: string }) => void;
}

export const FilterSidebar = ({ onFilterChange }: Props) => {
  const [type, setType] = useState("");
  const [category, setCategory] = useState("");

  const handleFilter = () => {
    onFilterChange({ type, category });
  };

  return (
    <aside className="w-full md:w-60 p-4 bg-gray-100 dark:bg-gray-800">
      <h3 className="font-semibold mb-2">Filters</h3>
      <select
        className="w-full p-2 mb-2 border rounded"
        value={type}
        onChange={(e) => setType(e.target.value)}
      >
        <option value="">All Types</option>
        <option value="document">Document</option>
        <option value="slide">Slide</option>
        <option value="spreadsheet">Spreadsheet</option>
      </select>
      <select
        className="w-full p-2 mb-4 border rounded"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option value="">All Categories</option>
        <option value="business">Business</option>
        <option value="personal">Personal</option>
        <option value="academic">Academic</option>
      </select>
      <button
        onClick={handleFilter}
        className="w-full p-2 bg-blue-500 text-white rounded cursor-pointer"
      >
        Apply Filters
      </button>
    </aside>
  );
};
