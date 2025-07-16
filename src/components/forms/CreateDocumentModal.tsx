"use client";
import { useState } from "react";
import { Button } from "../ui/Button";
import { v4 as uuidv4 } from "uuid"; // Use UUID for unique id generation

interface Props {
  onClose: () => void;
}

export const CreateDocumentModal = ({ onClose }: Props) => {
  const [title, setTitle] = useState("");
  const [type, setType] = useState("document");
  const [category, setCategory] = useState("business");
  const [prompt, setPrompt] = useState("");

  const handleSubmit = async () => {
    const newDocument = {
      id: uuidv4(), // Generate unique ID
      title,
      type,
      category,
      content: prompt || "Generated content based on AI prompt.",
      prompt,
      createdAt: new Date().toISOString(),
      aiGenerated: true,
      tags: [], // Optional: add tag input if needed
    };

   await fetch("/api/documents", {
     method: "POST",
     headers: { "Content-Type": "application/json" },
     body: JSON.stringify(newDocument),
   });


    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
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
          <option value="note">Note</option>{" "}
          {/* For "Growth Hacking Techniques" case */}
        </select>
        <select
          className="w-full p-2 mb-2 border rounded"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="business">Business</option>
          <option value="personal">Personal</option>
          <option value="academic">Academic</option>
          <option value="marketing">Marketing</option>{" "}
          {/* For "Growth Hacking Techniques" case */}
        </select>
        <textarea
          className="w-full p-2 mb-4 border rounded"
          placeholder="AI Prompt or Content"
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
