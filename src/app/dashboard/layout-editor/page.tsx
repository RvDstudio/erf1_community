"use client";

import { useState } from "react";
import { Breadcrumbs } from "@/components/dashboard/Breadcrumbs";
import { LayoutEditorCanvas } from "@/components/layout-editor/LayoutEditorCanvas";
import { LayoutEditorToolbar } from "@/components/layout-editor/LayoutEditorToolbar";
import { LayoutEditorLayersPanel } from "@/components/layout-editor/LayoutEditorLayersPanel";
import { LayoutEditorPropertiesPanel } from "@/components/layout-editor/LayoutEditorPropertiesPanel";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Save, Download, Undo, Redo } from "lucide-react";
import { CanvasElement } from "@/types/canvas";

export default function LayoutEditorPage() {
  const [selectedTool, setSelectedTool] = useState<string>("select");
  const [selectedElement, setSelectedElement] = useState<string | null>(null);
  const [showLayersPanel, setShowLayersPanel] = useState(true);
  const [showPropertiesPanel, setShowPropertiesPanel] = useState(true);
  const [zoom, setZoom] = useState(100);
  const [gridSize, setGridSize] = useState(20);
  const [canvasBackgroundColor, setCanvasBackgroundColor] = useState("#ffffff");
  const [elements, setElements] = useState<CanvasElement[]>([]);

  const updateElement = (
    elementId: string,
    updates: Partial<CanvasElement>
  ) => {
    setElements((prev) =>
      prev.map((element) =>
        element.id === elementId ? { ...element, ...updates } : element
      )
    );
  };

  const breadcrumbItems = [
    { label: "Dashboard", href: "/dashboard" },
    { label: "Layout Editor", href: "/dashboard/layout-editor" },
  ];

  return (
    <div className="h-screen flex flex-col bg-white text-gray-900 overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-gray-200 bg-gray-50 flex-shrink-0">
        <div className="flex items-center gap-4">
          <Breadcrumbs items={breadcrumbItems} />
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="sm"
              className="text-gray-600 hover:text-gray-900 hover:bg-gray-100"
            >
              <Undo className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="text-gray-600 hover:text-gray-900 hover:bg-gray-100"
            >
              <Redo className="h-4 w-4" />
            </Button>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="sm"
            className="border-gray-300 text-gray-700 hover:bg-gray-50"
          >
            <Save className="h-4 w-4 mr-2" />
            Save
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="border-gray-300 text-gray-700 hover:bg-gray-50"
          >
            <Download className="h-4 w-4 mr-2" />
            Export
          </Button>
        </div>
      </div>

      {/* Main Editor Area */}
      <div className="flex-1 flex min-h-0">
        {/* Left Panel - Toolbar */}
        <div className="flex-shrink-0">
          <LayoutEditorToolbar
            selectedTool={selectedTool}
            onToolSelect={setSelectedTool}
            zoom={zoom}
            onZoomChange={setZoom}
            gridSize={gridSize}
            onGridSizeChange={setGridSize}
            canvasBackgroundColor={canvasBackgroundColor}
            onCanvasBackgroundColorChange={setCanvasBackgroundColor}
          />
        </div>

        {/* Center - Canvas */}
        <div className="flex-1 flex flex-col min-w-0">
          <LayoutEditorCanvas
            selectedTool={selectedTool}
            selectedElement={selectedElement}
            onElementSelect={setSelectedElement}
            zoom={zoom}
            gridSize={gridSize}
            elements={elements}
            onElementsChange={setElements}
            canvasBackgroundColor={canvasBackgroundColor}
          />
        </div>

        {/* Right Panel - Layers and Properties */}
        <div className="w-80 bg-gray-50 border-l border-gray-200 flex flex-col flex-shrink-0">
          {showLayersPanel && (
            <div className="flex-shrink-0">
              <Card className="bg-white border-gray-200 rounded-none border-b">
                <LayoutEditorLayersPanel
                  selectedElement={selectedElement}
                  onElementSelect={setSelectedElement}
                />
              </Card>
            </div>
          )}
          {showPropertiesPanel && (
            <div className="flex-1 min-h-0">
              <Card className="bg-white border-gray-200 rounded-none h-full">
                <LayoutEditorPropertiesPanel
                  selectedElement={selectedElement}
                  elements={elements}
                  onUpdateElement={updateElement}
                />
              </Card>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
