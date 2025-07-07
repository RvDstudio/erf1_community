"use client";

import { useState } from "react";
import { CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { ChevronDown, ChevronRight } from "lucide-react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { CanvasElement } from "@/types/canvas";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface LayoutEditorPropertiesPanelProps {
  selectedElement: string | null;
  elements: CanvasElement[];
  onUpdateElement: (elementId: string, updates: Partial<CanvasElement>) => void;
}

export function LayoutEditorPropertiesPanel({
  selectedElement,
  elements,
  onUpdateElement,
}: LayoutEditorPropertiesPanelProps) {
  const [isPositionOpen, setIsPositionOpen] = useState(true);
  const [isSizeOpen, setIsSizeOpen] = useState(true);
  const [isStyleOpen, setIsStyleOpen] = useState(true);
  const [isTextOpen, setIsTextOpen] = useState(true);

  // Get the actual element data from the elements array
  const elementData = selectedElement
    ? elements.find((el) => el.id === selectedElement)
    : null;

  const updateElementStyle = (property: string, value: any) => {
    if (elementData) {
      onUpdateElement(elementData.id, {
        style: {
          ...elementData.style,
          [property]: value,
        },
      });
    }
  };

  const replaceElementType = (newType: string) => {
    if (elementData) {
      // Preserve compatible properties like the canvas replacement function
      const preservedStyle = { ...elementData.style };
      const newStyle = getElementStyle(newType);

      // Smart style preservation
      const smartStyle = {
        ...newStyle,
        // Preserve position and size styles
        position: preservedStyle.position,
        zIndex: preservedStyle.zIndex,
        // Preserve colors if they make sense
        backgroundColor:
          preservedStyle.backgroundColor || newStyle.backgroundColor,
        color: preservedStyle.color || newStyle.color,
        // Preserve borders if the new element supports them
        border:
          newType !== "text"
            ? preservedStyle.border || newStyle.border
            : newStyle.border,
        borderRadius: preservedStyle.borderRadius || newStyle.borderRadius,
        // Preserve opacity and transforms
        opacity: preservedStyle.opacity || 1,
        transform: preservedStyle.transform,
      };

      const newDimensions = getElementDimensions(newType);

      // Only resize if switching between very different component types
      const shouldResize = shouldResizeOnReplace(elementData.type, newType);

      onUpdateElement(elementData.id, {
        type: newType,
        style: smartStyle,
        content: getElementContent(newType),
        width: shouldResize ? newDimensions.width : elementData.width,
        height: shouldResize ? newDimensions.height : elementData.height,
      });
    }
  };

  const shouldResizeOnReplace = (oldType: string, newType: string) => {
    // Only resize if going from/to very different component types
    const textTypes = ["text", "url"];
    const buttonTypes = ["button", "extended-button"];
    const otherTypes = ["image", "widget", "Message"];

    const getTypeCategory = (type: string) => {
      if (textTypes.includes(type)) return "text";
      if (buttonTypes.includes(type)) return "button";
      if (otherTypes.includes(type)) return "other";
      return "unknown";
    };

    return getTypeCategory(oldType) !== getTypeCategory(newType);
  };

  const getElementStyle = (type: string) => {
    switch (type) {
      case "button":
      case "extended-button":
        return {
          backgroundColor: "#3b82f6",
          border: "1px solid #1d4ed8",
          borderRadius: "6px",
          color: "#ffffff",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "14px",
          fontWeight: "500",
        };
      case "text":
        return {
          color: "#1f2937",
          fontSize: "16px",
          display: "flex",
          alignItems: "center",
        };
      case "url":
        return {
          color: "#3b82f6",
          fontSize: "16px",
          textDecoration: "underline",
          display: "flex",
          alignItems: "center",
          cursor: "pointer",
        };
      case "image":
        return {
          backgroundColor: "#f3f4f6",
          border: "2px dashed #9ca3af",
          borderRadius: "4px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#6b7280",
          fontSize: "14px",
        };
      case "Message":
        return {
          backgroundColor: "#f9fafb",
          border: "1px solid #d1d5db",
          borderRadius: "8px",
          color: "#374151",
          padding: "12px",
          fontSize: "14px",
          writingMode: "vertical-rl",
          textAlign: "center",
        };
      case "widget":
        return {
          backgroundColor: "#7c3aed",
          border: "1px solid #5b21b6",
          borderRadius: "8px",
          color: "#ffffff",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "14px",
        };
      default:
        return {
          backgroundColor: "#3b82f6",
          borderRadius: "4px",
        };
    }
  };

  const getElementContent = (type: string) => {
    switch (type) {
      case "button":
        return "Button";
      case "extended-button":
        return "Video";
      case "text":
        return "Text Element";
      case "url":
        return "Link URL";
      case "image":
        return "Image";
      case "Message":
        return "Message";
      case "widget":
        return "Widget";
      default:
        return "Element";
    }
  };

  const getElementDimensions = (type: string) => {
    switch (type) {
      case "text":
      case "url":
        return { width: 200, height: 40 };
      case "button":
        return { width: 100, height: 40 };
      case "extended-button":
        return { width: 160, height: 40 };
      case "image":
        return { width: 200, height: 150 };
      case "Message":
        return { width: 60, height: 200 };
      case "widget":
        return { width: 120, height: 80 };
      default:
        return { width: 100, height: 100 };
    }
  };

  const PropertySection = ({
    title,
    isOpen,
    onToggle,
    children,
  }: {
    title: string;
    isOpen: boolean;
    onToggle: (open: boolean) => void;
    children: React.ReactNode;
  }) => (
    <Collapsible open={isOpen} onOpenChange={onToggle}>
      <CollapsibleTrigger asChild>
        <Button
          variant="ghost"
          className="w-full justify-between p-0 h-auto mb-2 text-gray-900 hover:bg-gray-50"
        >
          <span className="text-sm font-medium text-gray-900">{title}</span>
          {isOpen ? (
            <ChevronDown className="h-4 w-4 text-gray-600" />
          ) : (
            <ChevronRight className="h-4 w-4 text-gray-600" />
          )}
        </Button>
      </CollapsibleTrigger>
      <CollapsibleContent className="space-y-2 mb-4">
        {children}
      </CollapsibleContent>
    </Collapsible>
  );

  const InputGroup = ({
    label,
    value,
    onChange,
    type = "text",
    unit,
  }: {
    label: string;
    value: string | number;
    onChange: (value: string) => void;
    type?: string;
    unit?: string;
  }) => (
    <div className="space-y-1">
      <Label className="text-xs text-gray-600">{label}</Label>
      <div className="flex items-center gap-2">
        <Input
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="flex-1 h-7 text-xs bg-white border-gray-300 text-gray-900"
        />
        {unit && <span className="text-xs text-gray-500">{unit}</span>}
      </div>
    </div>
  );

  const ColorInput = ({
    label,
    value,
    onChange,
  }: {
    label: string;
    value: string;
    onChange: (value: string) => void;
  }) => (
    <div className="space-y-1">
      <Label className="text-xs text-gray-600">{label}</Label>
      <div className="flex items-center gap-2">
        <div
          className="w-8 h-7 rounded border border-gray-300 cursor-pointer"
          style={{ backgroundColor: value }}
          onClick={() => {
            const input = document.createElement("input");
            input.type = "color";
            input.value = value;
            input.addEventListener("change", (e) => {
              onChange((e.target as HTMLInputElement).value);
            });
            input.click();
          }}
        />
        <Input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="flex-1 h-7 text-xs bg-white border-gray-300 text-gray-900"
        />
      </div>
    </div>
  );

  return (
    <div className="w-full h-full flex flex-col">
      <CardHeader className="pb-2 flex-shrink-0">
        <CardTitle className="text-sm font-medium text-gray-900">
          Properties
        </CardTitle>
      </CardHeader>
      <CardContent className="flex-1 overflow-y-auto">
        <div className="space-y-4">
          {!elementData ? (
            <div className="text-center py-8 text-gray-500 text-sm">
              Select an element to edit properties
            </div>
          ) : (
            <>
              {/* Element Type Selector */}
              <div className="space-y-2">
                <Label className="text-xs text-gray-600">Element Type</Label>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="outline"
                      className="w-full justify-between text-xs h-8 bg-white border-gray-300 text-gray-900 hover:bg-gray-50"
                    >
                      {elementData.type}
                      <ChevronDown className="h-3 w-3" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-full bg-white border-gray-200">
                    {[
                      "button",
                      "extended-button",
                      "text",
                      "url",
                      "image",
                      "Message",
                      "widget",
                    ].map((type) => (
                      <DropdownMenuItem
                        key={type}
                        onClick={() => replaceElementType(type)}
                        className="text-xs hover:bg-gray-50 text-gray-900"
                      >
                        {type}
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>

              <Separator className="bg-gray-200" />

              {/* Position Properties */}
              <PropertySection
                title="Position"
                isOpen={isPositionOpen}
                onToggle={setIsPositionOpen}
              >
                <div className="grid grid-cols-2 gap-2">
                  <InputGroup
                    label="X"
                    value={elementData.x}
                    onChange={(value) =>
                      onUpdateElement(elementData.id, { x: Number(value) })
                    }
                    type="number"
                    unit="px"
                  />
                  <InputGroup
                    label="Y"
                    value={elementData.y}
                    onChange={(value) =>
                      onUpdateElement(elementData.id, { y: Number(value) })
                    }
                    type="number"
                    unit="px"
                  />
                </div>
                <InputGroup
                  label="Rotation"
                  value={elementData.rotation || 0}
                  onChange={(value) =>
                    onUpdateElement(elementData.id, { rotation: Number(value) })
                  }
                  type="number"
                  unit="°"
                />
              </PropertySection>

              {/* Size Properties */}
              <PropertySection
                title="Size"
                isOpen={isSizeOpen}
                onToggle={setIsSizeOpen}
              >
                <div className="grid grid-cols-2 gap-2">
                  <InputGroup
                    label="Width"
                    value={elementData.width}
                    onChange={(value) =>
                      onUpdateElement(elementData.id, { width: Number(value) })
                    }
                    type="number"
                    unit="px"
                  />
                  <InputGroup
                    label="Height"
                    value={elementData.height}
                    onChange={(value) =>
                      onUpdateElement(elementData.id, { height: Number(value) })
                    }
                    type="number"
                    unit="px"
                  />
                </div>
              </PropertySection>

              {/* Style Properties */}
              <PropertySection
                title="Style"
                isOpen={isStyleOpen}
                onToggle={setIsStyleOpen}
              >
                <ColorInput
                  label="Background Color"
                  value={elementData.style?.backgroundColor || "#ffffff"}
                  onChange={(value) =>
                    updateElementStyle("backgroundColor", value)
                  }
                />
                <ColorInput
                  label="Text Color"
                  value={elementData.style?.color || "#1f2937"}
                  onChange={(value) => updateElementStyle("color", value)}
                />
                <InputGroup
                  label="Border Radius"
                  value={
                    elementData.style?.borderRadius?.replace("px", "") || "0"
                  }
                  onChange={(value) =>
                    updateElementStyle("borderRadius", `${value}px`)
                  }
                  type="number"
                  unit="px"
                />
                <InputGroup
                  label="Font Size"
                  value={elementData.style?.fontSize?.replace("px", "") || "14"}
                  onChange={(value) =>
                    updateElementStyle("fontSize", `${value}px`)
                  }
                  type="number"
                  unit="px"
                />
              </PropertySection>

              {/* Text Content (for text elements) */}
              {(elementData.type === "text" ||
                elementData.type === "button" ||
                elementData.type === "extended-button" ||
                elementData.type === "url" ||
                elementData.type === "Message") && (
                <PropertySection
                  title="Content"
                  isOpen={isTextOpen}
                  onToggle={setIsTextOpen}
                >
                  <div className="space-y-1">
                    <Label className="text-xs text-gray-600">
                      Text Content
                    </Label>
                    <Input
                      value={elementData.content || ""}
                      onChange={(e) =>
                        onUpdateElement(elementData.id, {
                          content: e.target.value,
                        })
                      }
                      className="h-7 text-xs bg-white border-gray-300 text-gray-900"
                      placeholder="Enter text..."
                    />
                  </div>
                </PropertySection>
              )}
            </>
          )}
        </div>
      </CardContent>
    </div>
  );
}
