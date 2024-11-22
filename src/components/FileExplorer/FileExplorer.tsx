import React, { useState } from "react";
import { Folder } from "../Folder/Folder";
import { FolderItem } from "./FileExplorer.types";
import "./FileExplorer.css";

const FileExplorer: React.FC<{ data: FolderItem }> = ({ data }) => {
  const [contextMenu, setContextMenu] = useState<{
    visible: boolean;
    position: { x: number; y: number };
    fileName: string | null;
  }>({
    visible: false,
    position: { x: 0, y: 0 },
    fileName: null,
  });

  const closeContextMenu = () =>
    setContextMenu({ visible: false, position: { x: 0, y: 0 }, fileName: null });

  return (
    <div className="file-explorer" onClick={closeContextMenu}>
      <Folder
        folder={data}
        level={0}
        contextMenu={contextMenu}
        setContextMenu={setContextMenu}
      />
    </div>
  );
};

export default FileExplorer;
