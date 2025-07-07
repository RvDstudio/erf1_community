export interface CanvasElement {
  id: string;
  type: string;
  x: number;
  y: number;
  width: number;
  height: number;
  rotation: number;
  style: Record<string, any>;
  content?: string;
}

export interface CanvasState {
  elements: CanvasElement[];
  selectedElement: string | null;
  zoom: number;
  gridSize: number;
} 