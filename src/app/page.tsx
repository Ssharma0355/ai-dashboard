"use client"
import Image from "next/image";
import { Header } from "@/components/layout/Header";
import { FilterSidebar } from "@/components/forms/FilterSidebar";
import { DocumentGrid } from "@/components/ui/DocumentGrid";
import {useState, useEffect} from "react"
import { Document } from "@/types/document";

export default function Home() {
  const [documents, setDocuments] = useState<Document[]>([]);
  const [filteredDocs, setFilteredDocs] = useState<Document[]>([]);

  useEffect(() => {
    fetch("http://localhost:4000/documents")
      .then((res) => res.json())
      .then((data) => {
        setDocuments(data);
        setFilteredDocs(data);
      });
  }, []);

  const handleFilterChange = (filters: { type: string; category: string }) => {
    const { type, category } = filters;

    const filtered = documents.filter((doc) => {
      return (
        (type ? doc.type === type : true) &&
        (category ? doc.category === category : true)
      );
    });

    setFilteredDocs(filtered);
  };

  const handleDocumentClick = (doc: Document) => {
    alert(`Preview: ${doc.title}`);
    // You can open a modal for preview here.
  };

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      <Header />
      <div className="flex flex-1 flex-col md:flex-row overflow-hidden">
        <FilterSidebar onFilterChange={handleFilterChange} />
        <main className="flex-1 p-4 overflow-auto">
          <DocumentGrid
            documents={filteredDocs}
            onDocumentClick={handleDocumentClick}
          />
        </main>
      </div>
      <footer className="p-4 text-center text-xs text-gray-500 dark:text-gray-400 border-t border-gray-200 dark:border-gray-700">
        AI Document Dashboard © 2025 | Built with Next.js & Tailwind CSS
      </footer>
    </div>
  );
}
