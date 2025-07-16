"use client";
import { useState } from "react";
import { SearchBar } from "../ui/SearchBar";
import { Button } from "../ui/Button";
import { CreateDocumentModal } from "../forms/CreateDocumentModal";

interface HeaderProps {
  onSearchChange: (query: string) => void;
}

export const Header = ({ onSearchChange }: HeaderProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <header className="w-full p-4 bg-white dark:bg-gray-800 shadow-md">
      <div className="flex flex-wrap justify-between items-center gap-4">
        <div className="text-2xl font-bold text-blue-600">AI Docs</div>

        <div className="flex items-center gap-2 w-full sm:w-auto">
          <SearchBar onSearchChange={onSearchChange} />
          <Button
            onClick={() => setIsModalOpen(true)}
          >
            Create Document
          </Button>
        </div>
      </div>

      {isModalOpen && (
        <CreateDocumentModal onClose={() => setIsModalOpen(false)} />
      )}
    </header>
  );
};
