"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import {
  FileText,
  Settings,
  Navigation,
  Square,
  RectangleHorizontal,
  Type,
  Image,
  Link,
  MessageSquare,
  Zap,
  MousePointer,
  Hand,
  Palette,
  Video,
  ExternalLink,
} from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface LayoutEditorToolbarProps {
  selectedTool: string;
  onToolSelect: (tool: string) => void;
  zoom: number;
  onZoomChange: (zoom: number) => void;
  gridSize: number;
  onGridSizeChange: (size: number) => void;
  canvasBackgroundColor: string;
  onCanvasBackgroundColorChange: (color: string) => void;
}

export function LayoutEditorToolbar({
  selectedTool,
  onToolSelect,
  zoom,
  onZoomChange,
  gridSize,
  onGridSizeChange,
  canvasBackgroundColor,
  onCanvasBackgroundColorChange,
}: LayoutEditorToolbarProps) {
  const [activeTab, setActiveTab] = useState("file");
  const [currentPage, setCurrentPage] = useState("Start page");

  const tools = [
    {
      id: "select",
      label: "Select",
      icon: MousePointer,
      description: "Select and move elements • Alt+drag to duplicate",
    },
    {
      id: "hand",
      label: "Pan",
      icon: Hand,
      description: "Pan around the canvas",
    },
  ];

  const components = [
    { id: "button", label: "Button", icon: RectangleHorizontal },
    { id: "extended-button", label: "Video", icon: Video },
    { id: "image", label: "Image", icon: Image },
    { id: "link", label: "Link", icon: Link },
    { id: "text", label: "Text", icon: Type },
    { id: "url", label: "URL", icon: ExternalLink },
    { id: "Message", label: "Message", icon: MessageSquare },
    { id: "widget", label: "Widget", icon: Zap },
  ];

  const presetColors = [
    "#ffffff", // White
    "#f8f9fa", // Light gray
    "#e9ecef", // Gray
    "#dee2e6", // Medium gray
    "#000000", // Black
    "#1a1a1a", // Dark gray
    "#3b82f6", // Blue
    "#10b981", // Green
    "#f59e0b", // Yellow
    "#ef4444", // Red
    "#8b5cf6", // Purple
    "#06b6d4", // Cyan
  ];

  return (
    <div className="w-64 bg-white border-r border-gray-200 flex flex-col text-gray-900 h-full overflow-hidden">
      {/* Header Tabs */}
      <div className="border-b border-gray-200 flex-shrink-0">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-3 bg-gray-100 rounded-none h-10">
            <TabsTrigger
              value="file"
              className="text-xs data-[state=active]:bg-white data-[state=active]:text-gray-900"
            >
              File
            </TabsTrigger>
            <TabsTrigger
              value="settings"
              className="text-xs data-[state=active]:bg-white data-[state=active]:text-gray-900"
            >
              Settings
            </TabsTrigger>
            <TabsTrigger
              value="navigation"
              className="text-xs data-[state=active]:bg-white data-[state=active]:text-gray-900"
            >
              Navigation
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </div>

      {/* Scrollable Content */}
      <div className="flex-1 overflow-y-auto">
        {/* Current Page Section */}
        <div className="p-4 border-b border-gray-200">
          <div className="bg-gray-50 p-2 rounded border border-gray-200">
            <h3 className="text-sm font-medium mb-2 text-center text-gray-900">
              Current page
            </h3>
            <div className="flex gap-2">
              <Input
                value={currentPage}
                onChange={(e) => setCurrentPage(e.target.value)}
                className="flex-1 bg-white text-gray-900 text-sm h-8 border-gray-300"
              />
              <Button
                variant="outline"
                size="sm"
                className="bg-white border-gray-300 text-gray-700 hover:bg-gray-50 h-8"
              >
                Pages
              </Button>
            </div>
          </div>
        </div>

        {/* Tools Section */}
        <div className="p-4 border-b border-gray-200">
          <div className="bg-gray-50 p-2 rounded border border-gray-200">
            <h3 className="text-sm font-medium mb-2 text-center text-gray-900">
              Tools
            </h3>
            <div className="grid grid-cols-2 gap-2">
              {tools.map((tool) => {
                const IconComponent = tool.icon;
                return (
                  <Button
                    key={tool.id}
                    variant={selectedTool === tool.id ? "default" : "outline"}
                    size="sm"
                    className={`h-8 text-xs ${
                      selectedTool === tool.id
                        ? "bg-blue-600 hover:bg-blue-700 text-white"
                        : "bg-white border-gray-300 text-gray-700 hover:bg-gray-50"
                    }`}
                    onClick={() => onToolSelect(tool.id)}
                    title={tool.description}
                  >
                    <IconComponent className="w-3 h-3 mr-1" />
                    {tool.label}
                  </Button>
                );
              })}
            </div>
            {selectedTool === "select" && (
              <div className="mt-2 p-2 bg-blue-50 border border-blue-200 rounded text-xs text-blue-700">
                💡 Click and drag elements to move them around
                <br />
                🔄 Hold Alt while dragging to duplicate
              </div>
            )}
            {selectedTool === "hand" && (
              <div className="mt-2 p-2 bg-green-50 border border-green-200 rounded text-xs text-green-700">
                💡 Drag to pan around the canvas
              </div>
            )}
          </div>
        </div>

        {/* Component Properties Section */}
        <div className="p-4 border-b border-gray-200">
          <div className="bg-gray-50 p-2 rounded border border-gray-200">
            <h3 className="text-sm font-medium mb-2 text-center text-gray-900">
              Component properties
            </h3>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <div className="text-center font-medium text-gray-700">
                Property
              </div>
              <div className="text-center font-medium text-gray-700">Value</div>
            </div>
            <div className="min-h-[100px] bg-white rounded mt-2 border border-gray-200">
              {/* Properties will be shown here when component is selected */}
            </div>
          </div>
        </div>

        {/* Components Section */}
        <div className="p-4 border-b border-gray-200">
          <div className="bg-gray-50 p-2 rounded border border-gray-200">
            <h3 className="text-sm font-medium mb-2 text-center text-gray-900">
              Components
            </h3>
            <div className="grid grid-cols-2 gap-2">
              {components.map((component) => {
                const IconComponent = component.icon;
                return (
                  <Button
                    key={component.id}
                    variant={
                      selectedTool === component.id ? "default" : "outline"
                    }
                    size="sm"
                    className={`h-8 text-xs cursor-grab active:cursor-grabbing ${
                      selectedTool === component.id
                        ? "bg-blue-600 hover:bg-blue-700 text-white"
                        : "bg-white border-gray-300 text-gray-700 hover:bg-gray-50"
                    }`}
                    onMouseDown={() => onToolSelect(component.id)}
                    draggable
                    onDragStart={(e) => {
                      e.dataTransfer.setData("text/plain", component.id);
                    }}
                  >
                    <IconComponent className="w-3 h-3 mr-1" />
                    {component.label}
                  </Button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Canvas Controls Section */}
        <div className="p-4">
          <div className="bg-gray-50 p-2 rounded border border-gray-200">
            <h3 className="text-sm font-medium mb-2 text-center text-gray-900">
              Canvas
            </h3>
            <div className="space-y-3">
              {/* Zoom Controls */}
              <div className="space-y-1">
                <Label className="text-xs text-gray-600">Zoom: {zoom}%</Label>
                <div className="flex gap-1">
                  <Button
                    variant="outline"
                    size="sm"
                    className="text-xs h-7 flex-1 bg-white border-gray-300 text-gray-700 hover:bg-gray-50"
                    onClick={() => onZoomChange(Math.max(25, zoom - 25))}
                  >
                    -
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="text-xs h-7 px-3 bg-white border-gray-300 text-gray-700 hover:bg-gray-50"
                    onClick={() => onZoomChange(100)}
                  >
                    100%
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="text-xs h-7 flex-1 bg-white border-gray-300 text-gray-700 hover:bg-gray-50"
                    onClick={() => onZoomChange(Math.min(400, zoom + 25))}
                  >
                    +
                  </Button>
                </div>
              </div>

              {/* Grid Size */}
              <div className="space-y-1">
                <Label className="text-xs text-gray-600">Grid Size</Label>
                <Input
                  type="number"
                  value={gridSize}
                  onChange={(e) =>
                    onGridSizeChange(parseInt(e.target.value) || 20)
                  }
                  className="h-7 text-xs bg-white border-gray-300"
                  min="5"
                  max="50"
                />
              </div>

              {/* Background Color */}
              <div className="space-y-2">
                <Label className="text-xs text-gray-600">Background</Label>
                <div className="flex items-center gap-2">
                  <div
                    className="w-8 h-7 rounded border border-gray-300 cursor-pointer"
                    style={{ backgroundColor: canvasBackgroundColor }}
                    onClick={() => {
                      const input = document.createElement("input");
                      input.type = "color";
                      input.value = canvasBackgroundColor;
                      input.addEventListener("change", (e) => {
                        onCanvasBackgroundColorChange(
                          (e.target as HTMLInputElement).value
                        );
                      });
                      input.click();
                    }}
                  />
                  <Input
                    type="text"
                    value={canvasBackgroundColor}
                    onChange={(e) =>
                      onCanvasBackgroundColorChange(e.target.value)
                    }
                    className="flex-1 h-7 text-xs bg-white border-gray-300"
                  />
                </div>
                <div className="grid grid-cols-6 gap-1 mt-2">
                  {presetColors.map((color) => (
                    <button
                      key={color}
                      className="w-6 h-6 rounded border border-gray-300 hover:scale-110 transition-transform"
                      style={{ backgroundColor: color }}
                      onClick={() => onCanvasBackgroundColorChange(color)}
                      title={color}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
