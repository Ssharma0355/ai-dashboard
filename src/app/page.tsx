"use client";
import { Header } from "@/components/layout/Header";
import { FilterSidebar } from "@/components/forms/FilterSidebar";
import { DocumentGrid } from "@/components/ui/DocumentGrid";
import { useState, useEffect } from "react";
import { Document } from "@/types/document";
import { PreviewModal } from "@/components/ui/PreviewModal";
import { LoadingSpinner } from "@/components/ui/LoadingSpinner";
import { toast } from "react-hot-toast";

export default function Home() {
  const [documents, setDocuments] = useState<Document[]>([]);
  const [filteredDocs, setFilteredDocs] = useState<Document[]>([]);
  const [selectedDoc, setSelectedDoc] = useState<Document | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [filters, setFilters] = useState({ type: "", category: "" });
  const [searchQuery, setSearchQuery] = useState("");
  // const apiUrl = process.env.NEXT_PUBLIC_API_URL || "";



  useEffect(() => {
    const fetchDocuments = async () => {
      try {
        setIsLoading(true);
     const response = await fetch("/api/documents", {
       cache: "no-store",
     });


        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        setDocuments(data);
        setFilteredDocs(data);
      } catch (err) {
        console.error("Failed to fetch documents:", err);
        setError("Failed to load documents. Please try again later.");
        toast.error("Failed to load documents");
      } finally {
        setIsLoading(false);
      }
    };

    fetchDocuments();
  }, []);

  useEffect(() => {
    const filtered = documents.filter((doc) => {
      const matchesType = filters.type ? doc.type === filters.type : true;
      const matchesCategory = filters.category
        ? doc.category === filters.category
        : true;
      const matchesSearch = searchQuery
        ? doc.title.toLowerCase().includes(searchQuery.toLowerCase())
        : true;

      return matchesType && matchesCategory && matchesSearch;
    });

    setFilteredDocs(filtered);
  }, [documents, filters, searchQuery]);

  const handleFilterChange = (newFilters: {
    type: string;
    category: string;
  }) => {
    setFilters(newFilters);
  };

  const handleSearchChange = (query: string) => {
    setSearchQuery(query);
  };

  const handleDocumentClick = (doc: Document) => {
    setSelectedDoc(doc);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedDoc(null);
  };

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      <Header onSearchChange={handleSearchChange} />
      <div className="flex flex-1 flex-col md:flex-row overflow-hidden">
        <FilterSidebar onFilterChange={handleFilterChange} />
        <main className="flex-1 p-4 overflow-auto">
          {isLoading ? (
            <div className="flex items-center justify-center h-full">
              <LoadingSpinner size="lg" />
            </div>
          ) : error ? (
            <div className="flex items-center justify-center h-full">
              <p className="text-red-500 dark:text-red-400">{error}</p>
            </div>
          ) : (
            <DocumentGrid
              documents={filteredDocs}
              onDocumentClick={handleDocumentClick}
            />
          )}
        </main>
      </div>

      <footer className="p-4 text-center text-xs text-gray-500 dark:text-gray-400 border-t border-gray-200 dark:border-gray-700">
        AI Document Dashboard © 2025 | Built with Next.js & Tailwind CSS
      </footer>

      <PreviewModal
        isOpen={isModalOpen}
        onClose={closeModal}
        document={selectedDoc}
      />
    </div>
  );
}
