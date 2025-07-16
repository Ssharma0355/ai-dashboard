"use client";
import { Document } from "@/types/document";
import { DocumentCard } from "./DocumentCard";

interface Props {
  documents: Document[];
  onDocumentClick: (doc: Document) => void;
}

export const DocumentGrid = ({ documents, onDocumentClick }: Props) => {
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
