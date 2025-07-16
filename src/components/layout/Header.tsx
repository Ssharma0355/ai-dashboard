"use client";
import { useState } from "react";
import { SearchBar } from "../ui/SearchBar";
import { Button } from "../ui/Button";
import { CreateDocumentModal } from "../forms/CreateDocumentModal";

export const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <header className="w-full flex justify-between items-center p-4 bg-white dark:bg-gray-800 shadow-md">
      <div className="text-2xl font-bold text-blue-600">AI Docs</div>
      <SearchBar />
      <Button onClick={() => setIsModalOpen(true)}>Create Document</Button>
      {isModalOpen && (
        <CreateDocumentModal onClose={() => setIsModalOpen(false)} />
      )}
    </header>
  );
};
