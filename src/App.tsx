import React from "react";
import FileExplorer from "./components/FileExplorer/FileExplorer";
import { FolderItem } from "./components/FileExplorer/FileExplorer.types";

const Files: FolderItem = {
  type: "folder",
  name: "parent",
  data: [
    {
      type: "folder",
      name: "root",
      data: [
        {
          type: "folder",
          name: "src",
          data: [{ type: "file", meta: "js", name: "index.js" }],
        },
        {
          type: "folder",
          name: "public",
          data: [{ type: "file", meta: "ts", name: "index.ts" }],
        },
        { type: "file", meta: "html", name: "index.html" },
        {
          type: "folder",
          name: "data",
          data: [
            {
              type: "folder",
              name: "images",
              data: [
                { type: "file", meta: "img", name: "image.png" },
                { type: "file", meta: "img", name: "image2.webp" },
              ],
            },
            { type: "file", meta: "svg", name: "logo.svg" },
          ],
        },
      ],
    },
  ],
};

function App() {
  return <FileExplorer data={Files} />;
}

export default App;
