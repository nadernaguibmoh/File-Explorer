export interface FileItem {
    type: "file";
    meta: string;
    name: string;
  }
  
  export interface FolderItem {
    type: "folder";
    name: string;
    data: Array<FolderItem | FileItem>;
  }
  
  export type FileExplorerData = FolderItem;