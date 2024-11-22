import React from "react";
import { FolderItem } from "../FileExplorer/FileExplorer.types";
import { File } from "../File/File";
import folderOpenIcon from "../../assets/icons/folder-open.svg";
import folderClosedIcon from "../../assets/icons/folder-closed.svg";
import "./Folder.css";

export const Folder: React.FC<{
  folder: FolderItem;
  level: number;
  contextMenu: {
    visible: boolean;
    position: { x: number; y: number };
    fileName: string | null;
  };
  setContextMenu: React.Dispatch<
    React.SetStateAction<{
      visible: boolean;
      position: { x: number; y: number };
      fileName: string | null;
    }>
  >;
}> = ({ folder, level, contextMenu, setContextMenu }) => {
  const [isExpanded, setIsExpanded] = React.useState(false);

  const toggleExpand = () => setIsExpanded((prev) => !prev);

  return (
    <div>
      <div
        className="folder"
        style={{ paddingLeft: `${level * 16}px` }}
        onClick={toggleExpand}
      >
        <img
          src={isExpanded ? folderOpenIcon : folderClosedIcon}
          alt={isExpanded ? "Open folder" : "Closed folder"}
          className="icon"
        />
        {folder.name}
      </div>
      {isExpanded &&
        folder.data.map((item, index) =>
          item.type === "folder" ? (
            <Folder
              key={index}
              folder={item}
              level={level + 1}
              contextMenu={contextMenu}
              setContextMenu={setContextMenu}
            />
          ) : (
            <File
              key={index}
              file={item}
              level={level + 1}
              contextMenu={contextMenu}
              setContextMenu={setContextMenu}
            />
          )
        )}
    </div>
  );
};
