
---

# **AI Document Dashboard**

An AI-powered document management dashboard built with **Next.js 15**, allowing users to create, filter, and preview AI-generated documents in multiple formats like slides, notes, and spreadsheets.

---

## **Features**

* 📄 Create AI-generated documents with title, type, category, and prompt.
* 🔍 Filter and search documents by category and type.
* 🗂 View and manage a grid of documents with real-time updates.
* 🖥️ Responsive and accessible UI.
* ⚡ Uses `uuid` for unique document IDs.
* 🗄️ Local JSON file used as a mock database (for development only).

---

## **Tech Stack**

* **Next.js 15 (App Router)**
* **TypeScript**
* **Tailwind CSS** for styling
* **Lucide Icons** for UI elements
* **UUID** for unique IDs
* **Vercel Deployment**

---

## **Setup Instructions**

1. **Clone the repository**

```bash
git clone https://github.com/Ssharma0355/ai-dashboard.git
cd ai-dashboard
```

2. **Install dependencies**

```bash
npm install
```

3. **Run the development server**

```bash
npm run dev
```

4. **Open in browser**

Visit: [http://localhost:3000](http://localhost:3000)

---

## **Live Demo**

🌐 [AI Dashboard Live Demo](https://ai-dashboard-seven-eosin.vercel.app/)

---

## **Architecture Decisions**

* **Next.js App Router**: Built with the App Directory for modern routing and server components.
* **Local JSON File (Development Only)**: Uses `db.json` with the Node.js `fs` module to simulate a backend during development.
  **Note**: This is not suitable for production as serverless environments don’t support file system writes.
* **Component-Driven UI**: Includes modular components like `DocumentGrid`, `FilterSidebar`, `CreateDocumentModal`, etc.
* **Vercel Deployment**: The project is optimized for seamless deployment on Vercel.

