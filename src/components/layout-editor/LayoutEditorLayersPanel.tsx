"use client";

import { useState } from "react";
import { CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Eye,
  EyeOff,
  Lock,
  Unlock,
  Trash2,
  ChevronDown,
  ChevronRight,
  Type,
  Image,
  Square,
  Circle,
  Video,
  Frame,
  FileText,
} from "lucide-react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

interface LayerItem {
  id: string;
  name: string;
  type: string;
  visible: boolean;
  locked: boolean;
  children?: LayerItem[];
}

interface LayoutEditorLayersPanelProps {
  selectedElement: string | null;
  onElementSelect: (elementId: string | null) => void;
}

export function LayoutEditorLayersPanel({
  selectedElement,
  onElementSelect,
}: LayoutEditorLayersPanelProps) {
  const [isOpen, setIsOpen] = useState(true);
  const [layers, setLayers] = useState<LayerItem[]>([
    {
      id: "layer-1",
      name: "Background",
      type: "rectangle",
      visible: true,
      locked: false,
    },
    {
      id: "layer-2",
      name: "Text Layer",
      type: "text",
      visible: true,
      locked: false,
    },
    {
      id: "layer-3",
      name: "Image Layer",
      type: "image",
      visible: true,
      locked: false,
    },
  ]);

  const toggleVisibility = (layerId: string) => {
    setLayers((prev) =>
      prev.map((layer) =>
        layer.id === layerId ? { ...layer, visible: !layer.visible } : layer
      )
    );
  };

  const toggleLock = (layerId: string) => {
    setLayers((prev) =>
      prev.map((layer) =>
        layer.id === layerId ? { ...layer, locked: !layer.locked } : layer
      )
    );
  };

  const deleteLayer = (layerId: string) => {
    setLayers((prev) => prev.filter((layer) => layer.id !== layerId));
    if (selectedElement === layerId) {
      onElementSelect(null);
    }
  };

  const getLayerIcon = (type: string) => {
    switch (type) {
      case "text":
        return Type;
      case "image":
        return Image;
      case "rectangle":
        return Square;
      case "circle":
        return Circle;
      case "media":
        return Video;
      case "frame":
        return Frame;
      default:
        return FileText;
    }
  };

  return (
    <Collapsible open={isOpen} onOpenChange={setIsOpen} className="w-full">
      <CardHeader className="pb-2">
        <CollapsibleTrigger asChild>
          <Button
            variant="ghost"
            className="w-full justify-between p-0 h-auto text-gray-900 hover:bg-gray-50"
          >
            <CardTitle className="text-sm font-medium text-gray-900">
              Layers
            </CardTitle>
            {isOpen ? (
              <ChevronDown className="h-4 w-4 text-gray-600" />
            ) : (
              <ChevronRight className="h-4 w-4 text-gray-600" />
            )}
          </Button>
        </CollapsibleTrigger>
      </CardHeader>
      <CollapsibleContent>
        <CardContent className="space-y-1 p-4 pt-0">
          {layers.map((layer) => {
            const IconComponent = getLayerIcon(layer.type);
            return (
              <div
                key={layer.id}
                className={`flex items-center gap-2 p-2 rounded-md hover:bg-gray-50 transition-colors ${
                  selectedElement === layer.id
                    ? "bg-blue-50 border border-blue-200"
                    : "border border-transparent"
                }`}
              >
                <div className="flex items-center gap-2 flex-1 min-w-0">
                  <IconComponent className="h-3 w-3 text-gray-600" />
                  <span
                    className={`text-sm text-gray-900 truncate cursor-pointer ${
                      !layer.visible ? "opacity-50" : ""
                    }`}
                    onClick={() => onElementSelect(layer.id)}
                  >
                    {layer.name}
                  </span>
                </div>
                <div className="flex items-center gap-1 flex-shrink-0">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="h-6 w-6 p-0 text-gray-500 hover:text-gray-700 hover:bg-gray-100"
                    onClick={() => toggleVisibility(layer.id)}
                  >
                    {layer.visible ? (
                      <Eye className="h-3 w-3" />
                    ) : (
                      <EyeOff className="h-3 w-3" />
                    )}
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="h-6 w-6 p-0 text-gray-500 hover:text-gray-700 hover:bg-gray-100"
                    onClick={() => toggleLock(layer.id)}
                  >
                    {layer.locked ? (
                      <Lock className="h-3 w-3" />
                    ) : (
                      <Unlock className="h-3 w-3" />
                    )}
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="h-6 w-6 p-0 text-red-500 hover:text-red-700 hover:bg-red-50"
                    onClick={() => deleteLayer(layer.id)}
                  >
                    <Trash2 className="h-3 w-3" />
                  </Button>
                </div>
              </div>
            );
          })}
          {layers.length === 0 && (
            <div className="text-center py-8 text-gray-500 text-sm">
              No layers yet. Create some elements on the canvas!
            </div>
          )}
        </CardContent>
      </CollapsibleContent>
    </Collapsible>
  );
}
