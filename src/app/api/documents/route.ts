export const dynamic = 'force-dynamic';

import { NextResponse } from 'next/server';
import path from 'path';
import { promises as fs } from 'fs';

const filePath = path.join(process.cwd(), 'db.json');

export async function GET() {
  const jsonData = await fs.readFile(filePath, 'utf-8');
  const data = JSON.parse(jsonData);
  return NextResponse.json(data.documents);
}

export async function POST(req: Request) {
  const body = await req.json();

  // Read current data
  const jsonData = await fs.readFile(filePath, 'utf-8');
  const data = JSON.parse(jsonData);

  // Push new document
  data.documents.push(body);

  // Write back to db.json
  await fs.writeFile(filePath, JSON.stringify(data, null, 2));

  return NextResponse.json({ message: "Document created", document: body });
}
