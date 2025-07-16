"use client";
import { useState } from "react";
import { Button } from "../ui/Button";

interface Props {
  onClose: () => void;
}

export const CreateDocumentModal = ({ onClose }: Props) => {
  const [title, setTitle] = useState("");
  const [type, setType] = useState("document");
  const [category, setCategory] = useState("business");
  const [prompt, setPrompt] = useState("");

  const handleSubmit = async () => {
    await fetch("http://localhost:4000/documents", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, type, category, prompt }),
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center">
      <div className="bg-white dark:bg-gray-900 p-6 rounded-xl w-full max-w-md">
        <h2 className="text-xl font-bold mb-4">Create New Document</h2>
        <input
          className="w-full p-2 mb-2 border rounded"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <select
          className="w-full p-2 mb-2 border rounded"
          value={type}
          onChange={(e) => setType(e.target.value)}
        >
          <option value="document">Document</option>
          <option value="slide">Slide</option>
          <option value="spreadsheet">Spreadsheet</option>
        </select>
        <select
          className="w-full p-2 mb-2 border rounded"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="business">Business</option>
          <option value="personal">Personal</option>
          <option value="academic">Academic</option>
        </select>
        <textarea
          className="w-full p-2 mb-4 border rounded"
          placeholder="AI Prompt"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
        />
        <div className="flex justify-end gap-2">
          <Button onClick={onClose}>Cancel</Button>
          <Button onClick={handleSubmit}>Create</Button>
        </div>
      </div>
    </div>
  );
};
