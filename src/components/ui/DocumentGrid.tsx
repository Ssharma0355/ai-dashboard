"use client";
import { Document } from "@/types/document";
import { DocumentCard } from "./DocumentCard";

interface Props {
  documents: Document[];
  onDocumentClick: (doc: Document) => void;
}

export const DocumentGrid = ({ documents, onDocumentClick }: Props) => {
   if (documents.length === 0) {
     return (
       <div className="flex flex-col items-center justify-center h-full text-gray-500 dark:text-gray-400">
         <p className="text-lg font-medium">No documents found.</p>
         <p className="text-sm mt-1">
           Try changing the filter or search query.
         </p>
       </div>
     );
   }
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      {documents.map((doc) => (
        <DocumentCard
          key={doc.id}
          document={doc}
          onClick={() => onDocumentClick(doc)}
        />
      ))}
    </div>
  );
};
