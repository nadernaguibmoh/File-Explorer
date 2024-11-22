import React from "react";
import { FileItem } from "../FileExplorer/FileExplorer.types";
import { ContextMenu } from "../ContextMenu/ContextMenu";
import fileIcon from "../../assets/icons/file.svg";
import "./File.css";

export const File: React.FC<{
  file: FileItem;
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
}> = ({ file, level, contextMenu, setContextMenu }) => {
  const handleRightClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setContextMenu({
      visible: true,
      position: { x: e.clientX, y: e.clientY },
      fileName: file.name,
    });
  };

  const handleAction = (action: string) => {
    console.log(`${action} action for ${file.name}`);
    setContextMenu({ visible: false, position: { x: 0, y: 0 }, fileName: null });
  };

  return (
    <div
      className="file"
      style={{ paddingLeft: `${level * 16}px` }}
      onContextMenu={handleRightClick}
    >
      <img src={fileIcon} alt="File icon" className="icon" />
      {file.name}
      {contextMenu.visible && contextMenu.fileName === file.name && (
        <ContextMenu
          fileName={file.name}
          position={contextMenu.position}
          onClose={() =>
            setContextMenu({
              visible: false,
              position: { x: 0, y: 0 },
              fileName: null,
            })
          }
          onAction={handleAction}
        />
      )}
    </div>
  );
};
