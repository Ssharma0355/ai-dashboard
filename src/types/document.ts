export type DocumentType = "document" | "slide" | "spreadsheet";

export type Category = "business" | "personal" | "academic";

export interface Document {
  id: string;
  title: string;
  type: DocumentType;
  category: Category;
  content: string;
  createdAt: string;
  aiGenerated: boolean;
  tags: string[];
}