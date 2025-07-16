"use client";
import { Document } from "@/types/document";

interface Props {
  document: Document;
  onClick: () => void;
}

export const DocumentCard = ({ document, onClick }: Props) => {
  const previewText =
    document.content && document.content.length > 0
      ? document.content.slice(0, 50) + "..."
      : "No content available.";

  return (
    <div
      onClick={onClick}
      className="p-4 border rounded-lg shadow hover:shadow-md cursor-pointer transition flex flex-col justify-between bg-white dark:bg-gray-800"
    >
      <div>
        <h4 className="font-bold text-lg mb-2">{document.title}</h4>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          {previewText}
        </p>
      </div>

      <div className="flex justify-between items-center mt-4 text-xs text-gray-400">
        <span>{new Date(document.createdAt).toLocaleDateString()}</span>
        <span className="capitalize">{document.type}</span>
      </div>

      <div className="mt-2 flex gap-1 flex-wrap">
        {document.tags?.length > 0 ? (
          document.tags.map((tag) => (
            <span
              key={tag}
              className="bg-gray-200 dark:bg-gray-700 px-2 py-0.5 rounded-full text-xs"
            >
              {tag}
            </span>
          ))
        ) : (
          <span className="text-xs text-gray-400">No tags</span>
        )}
      </div>
    </div>
  );
};
