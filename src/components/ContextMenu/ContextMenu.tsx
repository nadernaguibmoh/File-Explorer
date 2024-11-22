import React from "react";
import "./ContextMenu.css";

interface ContextMenuProps {
  fileName: string;
  position: { x: number; y: number };
  onClose: () => void;
  onAction: (action: string) => void;
}

export const ContextMenu: React.FC<ContextMenuProps> = ({
  fileName,
  position,
  onClose,
  onAction,
}) => {
  return (
    <div
      className="context-menu-tooltip"
      style={{ top: position.y, left: position.x }}
      onClick={(e) => e.stopPropagation()} 
    >
      <button onClick={() => onAction("Copy")}>Copy</button>
      <button onClick={() => onAction("Delete")}>Delete</button>
      <button onClick={() => onAction("Rename")}>Rename</button>
    </div>
  );
};
