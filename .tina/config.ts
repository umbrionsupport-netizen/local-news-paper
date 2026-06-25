import { defineConfig } from "tinacms";

export default defineConfig({
  branch: "main",
  
  // Hardcode these dummy values. The --local flag in package.json will keep it local,
  // but these strings ensure the validation code doesn't try to look for real keys.
  clientId: "00000000-0000-0000-0000-000000000000", 
  token: "0000000000000000000000000000000000000000",
  
  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  // ... rest of your config stays the same
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