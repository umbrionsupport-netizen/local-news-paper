import { defineConfig } from "tinacms";

// Detect if we are building inside Netlify's production environment
const isProduction = process.env.NODE_ENV === "production";

export default defineConfig({
  branch: "main",
  
  // Provide dummy strings for production so the CLI passes validation checks cleanly
  clientId: isProduction ? "dummy-client-id" : "local-development-id", 
  token: isProduction ? "dummy-token-string" : "local-development-token",
  
  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "uploads",
      publicFolder: "public",
    },
  },
  schema: {
    collections: [
      {
        name: "article",
        label: "Articles",
        path: "src/content/articles",
        format: "md",
        fields: [
          { type: "string", name: "title", label: "Title", isTitle: true, required: true },
          { type: "datetime", name: "pubDate", label: "Publication Date", required: true },
          { type: "string", name: "description", label: "Excerpt/Summary", required: true },
          { 
            type: "string", 
            name: "neighborhood", 
            label: "Neighborhood/Submarket", 
            options: ["Downtown", "West Des Moines", "Waukee", "Clive", "Ankeny"],
            required: true 
          },
          { 
            type: "string", 
            name: "category", 
            label: "Category", 
            options: ["Civic Growth", "Food & Drink", "School Board", "Local Business", "Community Feed"] 
          },
          { type: "image", name: "heroImage", label: "Hero Image" },
          { type: "rich-text", name: "body", label: "Body", isBody: true },
        ],
      },
    ],
  },
});