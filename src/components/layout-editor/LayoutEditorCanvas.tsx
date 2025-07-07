"use client";

import { useState, useRef, useCallback } from "react";
import { CanvasElement } from "@/types/canvas";
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuSeparator,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuTrigger,
} from "@/components/ui/context-menu";
import {
  RectangleHorizontal,
  Video,
  Type,
  ExternalLink,
  Image,
  MessageSquare,
  Zap,
} from "lucide-react";

interface LayoutEditorCanvasProps {
  selectedTool: string;
  selectedElement: string | null;
  onElementSelect: (elementId: string | null) => void;
  zoom: number;
  gridSize: number;
  elements: CanvasElement[];
  onElementsChange: (elements: CanvasElement[]) => void;
  canvasBackgroundColor?: string;
}

export function LayoutEditorCanvas({
  selectedTool,
  selectedElement,
  onElementSelect,
  zoom,
  gridSize,
  elements,
  onElementsChange,
  canvasBackgroundColor = "#ffffff",
}: LayoutEditorCanvasProps) {
  const canvasRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [canvasOffset, setCanvasOffset] = useState({ x: 0, y: 0 });
  const [isDragOver, setIsDragOver] = useState(false);
  const [contextMenuElement, setContextMenuElement] = useState<string | null>(
    null
  );

  // Element dragging state
  const [draggedElement, setDraggedElement] = useState<string | null>(null);
  const [elementDragStart, setElementDragStart] = useState({ x: 0, y: 0 });
  const [elementStartPosition, setElementStartPosition] = useState({
    x: 0,
    y: 0,
  });
  const [isAltDragging, setIsAltDragging] = useState(false);
  const [duplicatedElement, setDuplicatedElement] = useState<string | null>(
    null
  );

  // Element resizing state
  const [resizingElement, setResizingElement] = useState<string | null>(null);
  const [resizeHandle, setResizeHandle] = useState<string | null>(null);
  const [resizeStart, setResizeStart] = useState({ x: 0, y: 0 });
  const [elementStartSize, setElementStartSize] = useState({
    width: 0,
    height: 0,
    x: 0,
    y: 0,
  });

  // Canvas/Artboard dimensions - smaller to fit viewport
  const CANVAS_WIDTH = 800;
  const CANVAS_HEIGHT = 600;

  // Component types for replacement
  const componentTypes = [
    { id: "button", label: "Button", icon: RectangleHorizontal },
    { id: "extended-button", label: "Video", icon: Video },
    { id: "text", label: "Text", icon: Type },
    { id: "url", label: "URL/Link", icon: ExternalLink },
    { id: "image", label: "Image", icon: Image },
    { id: "Message", label: "Message", icon: MessageSquare },
    { id: "widget", label: "Widget", icon: Zap },
  ];

  // Smart component replacement function
  const replaceComponent = useCallback(
    (elementId: string, newType: string) => {
      const elementToReplace = elements.find((el) => el.id === elementId);
      if (!elementToReplace) return;

      // Preserve compatible properties
      const preservedStyle = { ...elementToReplace.style };
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

      const newElement: CanvasElement = {
        ...elementToReplace,
        type: newType,
        style: smartStyle,
        content: getElementContent(newType),
        // Adjust dimensions if needed
        width: shouldResizeOnReplace(elementToReplace.type, newType)
          ? getElementDimensions(newType).width
          : elementToReplace.width,
        height: shouldResizeOnReplace(elementToReplace.type, newType)
          ? getElementDimensions(newType).height
          : elementToReplace.height,
      };

      // Update elements array
      const updatedElements = elements.map((el) =>
        el.id === elementId ? newElement : el
      );

      onElementsChange(updatedElements);

      // Keep the element selected
      onElementSelect(elementId);
    },
    [elements, onElementsChange, onElementSelect]
  );

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

  const handleCanvasClick = useCallback(
    (event: React.MouseEvent) => {
      const rect = canvasRef.current?.getBoundingClientRect();
      if (!rect) return;

      // Calculate position relative to the canvas center
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const x =
        (event.clientX - rect.left - centerX - canvasOffset.x) / (zoom / 100);
      const y =
        (event.clientY - rect.top - centerY - canvasOffset.y) / (zoom / 100);

      // Constrain to canvas bounds
      const constrainedX = Math.max(0, Math.min(x, CANVAS_WIDTH - 100));
      const constrainedY = Math.max(0, Math.min(y, CANVAS_HEIGHT - 100));

      // If a creation tool is selected, create a new element
      if (selectedTool !== "select" && selectedTool !== "hand") {
        const newElement: CanvasElement = {
          id: `${selectedTool}-${Date.now()}`,
          type: selectedTool,
          x: constrainedX,
          y: constrainedY,
          width: selectedTool === "text" ? 200 : 100,
          height: selectedTool === "text" ? 40 : 100,
          rotation: 0,
          style: getElementStyle(selectedTool),
          content: selectedTool === "text" ? "Double click to edit" : undefined,
        };
        onElementsChange([...elements, newElement]);
        onElementSelect(newElement.id);
      } else if (selectedTool === "select") {
        // Deselect current element when clicking on empty canvas
        onElementSelect(null);
      }
    },
    [
      selectedTool,
      zoom,
      canvasOffset,
      onElementSelect,
      elements,
      onElementsChange,
    ]
  );

  const handleElementClick = (elementId: string, event: React.MouseEvent) => {
    event.stopPropagation();
    onElementSelect(elementId);
  };

  const handleElementMouseDown = (
    elementId: string,
    event: React.MouseEvent
  ) => {
    event.stopPropagation();

    // Only allow dragging when select tool is active
    if (selectedTool !== "select") return;

    const element = elements.find((el) => el.id === elementId);
    if (!element) return;

    // Check if Alt key is pressed for duplication
    const isAltPressed = event.altKey;

    if (isAltPressed) {
      // Create a duplicate element for Alt+drag
      const duplicateId = `${element.type}-${Date.now()}-copy`;
      const duplicateElement: CanvasElement = {
        ...element,
        id: duplicateId,
        // Start at the same position, will be moved during drag
        x: element.x,
        y: element.y,
      };

      // Add the duplicate to the elements array
      const updatedElements = [...elements, duplicateElement];
      onElementsChange(updatedElements);

      // Set up dragging for the duplicate
      setDraggedElement(duplicateId);
      setDuplicatedElement(duplicateId);
      setIsAltDragging(true);
      onElementSelect(duplicateId);
    } else {
      // Regular drag - move the original element
      setDraggedElement(elementId);
      setIsAltDragging(false);
      setDuplicatedElement(null);
      onElementSelect(elementId);
    }

    setElementDragStart({ x: event.clientX, y: event.clientY });
    setElementStartPosition({ x: element.x, y: element.y });
  };

  const handleResizeMouseDown = (
    elementId: string,
    handle: string,
    event: React.MouseEvent
  ) => {
    event.stopPropagation();

    const element = elements.find((el) => el.id === elementId);
    if (!element) return;

    setResizingElement(elementId);
    setResizeHandle(handle);
    setResizeStart({ x: event.clientX, y: event.clientY });
    setElementStartSize({
      width: element.width,
      height: element.height,
      x: element.x,
      y: element.y,
    });
  };

  const handleElementRightClick = (
    elementId: string,
    event: React.MouseEvent
  ) => {
    event.preventDefault();
    event.stopPropagation();
    setContextMenuElement(elementId);
    onElementSelect(elementId);
  };

  const handleCanvasMouseDown = useCallback(
    (event: React.MouseEvent) => {
      if (selectedTool === "hand") {
        setIsDragging(true);
        setDragStart({ x: event.clientX, y: event.clientY });
      }
    },
    [selectedTool]
  );

  const handleCanvasMouseMove = useCallback(
    (event: React.MouseEvent) => {
      // Handle canvas panning
      if (isDragging && selectedTool === "hand") {
        const deltaX = event.clientX - dragStart.x;
        const deltaY = event.clientY - dragStart.y;
        setCanvasOffset((prev) => ({
          x: prev.x + deltaX,
          y: prev.y + deltaY,
        }));
        setDragStart({ x: event.clientX, y: event.clientY });
      }

      // Handle element dragging
      if (draggedElement && selectedTool === "select" && !resizingElement) {
        const deltaX = (event.clientX - elementDragStart.x) / (zoom / 100);
        const deltaY = (event.clientY - elementDragStart.y) / (zoom / 100);

        const newX = Math.max(
          0,
          Math.min(elementStartPosition.x + deltaX, CANVAS_WIDTH - 100)
        );
        const newY = Math.max(
          0,
          Math.min(elementStartPosition.y + deltaY, CANVAS_HEIGHT - 100)
        );

        // Update element position in real-time
        const updatedElements = elements.map((el) =>
          el.id === draggedElement ? { ...el, x: newX, y: newY } : el
        );
        onElementsChange(updatedElements);
      }

      // Handle element resizing
      if (resizingElement && resizeHandle) {
        const deltaX = (event.clientX - resizeStart.x) / (zoom / 100);
        const deltaY = (event.clientY - resizeStart.y) / (zoom / 100);

        const element = elements.find((el) => el.id === resizingElement);
        if (!element) return;

        let newWidth = elementStartSize.width;
        let newHeight = elementStartSize.height;
        let newX = elementStartSize.x;
        let newY = elementStartSize.y;

        switch (resizeHandle) {
          case "nw": // Top-left
            newWidth = Math.max(20, elementStartSize.width - deltaX);
            newHeight = Math.max(20, elementStartSize.height - deltaY);
            newX = elementStartSize.x + (elementStartSize.width - newWidth);
            newY = elementStartSize.y + (elementStartSize.height - newHeight);
            break;
          case "ne": // Top-right
            newWidth = Math.max(20, elementStartSize.width + deltaX);
            newHeight = Math.max(20, elementStartSize.height - deltaY);
            newY = elementStartSize.y + (elementStartSize.height - newHeight);
            break;
          case "sw": // Bottom-left
            newWidth = Math.max(20, elementStartSize.width - deltaX);
            newHeight = Math.max(20, elementStartSize.height + deltaY);
            newX = elementStartSize.x + (elementStartSize.width - newWidth);
            break;
          case "se": // Bottom-right
            newWidth = Math.max(20, elementStartSize.width + deltaX);
            newHeight = Math.max(20, elementStartSize.height + deltaY);
            break;
          case "n": // Top
            newHeight = Math.max(20, elementStartSize.height - deltaY);
            newY = elementStartSize.y + (elementStartSize.height - newHeight);
            break;
          case "s": // Bottom
            newHeight = Math.max(20, elementStartSize.height + deltaY);
            break;
          case "w": // Left
            newWidth = Math.max(20, elementStartSize.width - deltaX);
            newX = elementStartSize.x + (elementStartSize.width - newWidth);
            break;
          case "e": // Right
            newWidth = Math.max(20, elementStartSize.width + deltaX);
            break;
        }

        // Constrain to canvas bounds
        newX = Math.max(0, Math.min(newX, CANVAS_WIDTH - newWidth));
        newY = Math.max(0, Math.min(newY, CANVAS_HEIGHT - newHeight));
        newWidth = Math.min(newWidth, CANVAS_WIDTH - newX);
        newHeight = Math.min(newHeight, CANVAS_HEIGHT - newY);

        // Update element size in real-time
        const updatedElements = elements.map((el) =>
          el.id === resizingElement
            ? { ...el, width: newWidth, height: newHeight, x: newX, y: newY }
            : el
        );
        onElementsChange(updatedElements);
      }
    },
    [
      isDragging,
      selectedTool,
      dragStart,
      draggedElement,
      elementDragStart,
      elementStartPosition,
      zoom,
      elements,
      onElementsChange,
      resizingElement,
      resizeHandle,
      resizeStart,
      elementStartSize,
    ]
  );

  const handleCanvasMouseUp = useCallback(() => {
    setIsDragging(false);
    setDraggedElement(null);
    setElementDragStart({ x: 0, y: 0 });
    setElementStartPosition({ x: 0, y: 0 });
    setResizingElement(null);
    setResizeHandle(null);
    setResizeStart({ x: 0, y: 0 });
    setElementStartSize({ width: 0, height: 0, x: 0, y: 0 });
    setIsAltDragging(false);
    setDuplicatedElement(null);
  }, []);

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = "copy";
    setIsDragOver(true);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
  }, []);

  const handleDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      setIsDragOver(false);

      const componentType = e.dataTransfer.getData("text/plain");
      if (!componentType) return;

      const rect = canvasRef.current?.getBoundingClientRect();
      if (!rect) return;

      // Calculate position relative to the canvas center
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const x =
        (e.clientX - rect.left - centerX - canvasOffset.x) / (zoom / 100);
      const y =
        (e.clientY - rect.top - centerY - canvasOffset.y) / (zoom / 100);

      // Constrain to canvas bounds
      const constrainedX = Math.max(0, Math.min(x, CANVAS_WIDTH - 100));
      const constrainedY = Math.max(0, Math.min(y, CANVAS_HEIGHT - 100));

      const newElement: CanvasElement = {
        id: `${componentType}-${Date.now()}`,
        type: componentType,
        x: constrainedX,
        y: constrainedY,
        width: getElementWidth(componentType),
        height: getElementHeight(componentType),
        rotation: 0,
        style: getElementStyle(componentType),
        content: getElementContent(componentType),
      };

      onElementsChange([...elements, newElement]);
      onElementSelect(newElement.id);
    },
    [canvasOffset, zoom, onElementSelect, elements, onElementsChange]
  );

  const getElementWidth = (type: string) => {
    switch (type) {
      case "text":
      case "url":
        return 200;
      case "button":
      case "extended-button":
        return 120;
      case "Message":
        return 80;
      default:
        return 100;
    }
  };

  const getElementHeight = (type: string) => {
    switch (type) {
      case "text":
      case "url":
        return 40;
      case "button":
      case "extended-button":
        return 36;
      case "Message":
        return 200;
      default:
        return 100;
    }
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
          color: "#ffffff",
          fontSize: "16px",
          display: "flex",
          alignItems: "center",
          backgroundColor: "transparent",
        };
      case "url":
        return {
          color: "#3b82f6",
          fontSize: "16px",
          textDecoration: "underline",
          display: "flex",
          alignItems: "center",
          cursor: "pointer",
          backgroundColor: "transparent",
        };
      case "image":
        return {
          backgroundColor: "#374151",
          border: "2px dashed #6b7280",
          borderRadius: "4px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#9ca3af",
          fontSize: "14px",
        };
      case "Message":
        return {
          backgroundColor: "#1f2937",
          border: "1px solid #374151",
          borderRadius: "8px",
          color: "#ffffff",
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
      case "extended-button":
        return { width: 120, height: 36 };
      case "Message":
        return { width: 80, height: 200 };
      default:
        return { width: 100, height: 100 };
    }
  };

  // Render resize handles for selected element
  const renderResizeHandles = (element: CanvasElement) => {
    if (selectedElement !== element.id || selectedTool !== "select")
      return null;

    const handleSize = 8;
    const scale = zoom / 100;

    const handles = [
      { id: "nw", x: -handleSize / 2, y: -handleSize / 2, cursor: "nw-resize" },
      {
        id: "n",
        x: (element.width * scale) / 2 - handleSize / 2,
        y: -handleSize / 2,
        cursor: "n-resize",
      },
      {
        id: "ne",
        x: element.width * scale - handleSize / 2,
        y: -handleSize / 2,
        cursor: "ne-resize",
      },
      {
        id: "e",
        x: element.width * scale - handleSize / 2,
        y: (element.height * scale) / 2 - handleSize / 2,
        cursor: "e-resize",
      },
      {
        id: "se",
        x: element.width * scale - handleSize / 2,
        y: element.height * scale - handleSize / 2,
        cursor: "se-resize",
      },
      {
        id: "s",
        x: (element.width * scale) / 2 - handleSize / 2,
        y: element.height * scale - handleSize / 2,
        cursor: "s-resize",
      },
      {
        id: "sw",
        x: -handleSize / 2,
        y: element.height * scale - handleSize / 2,
        cursor: "sw-resize",
      },
      {
        id: "w",
        x: -handleSize / 2,
        y: (element.height * scale) / 2 - handleSize / 2,
        cursor: "w-resize",
      },
    ];

    return (
      <>
        {handles.map((handle) => (
          <div
            key={handle.id}
            className="absolute bg-white border-2 border-blue-500 hover:bg-blue-50 transition-colors"
            style={{
              left: `${element.x * scale + handle.x}px`,
              top: `${element.y * scale + handle.y}px`,
              width: `${handleSize}px`,
              height: `${handleSize}px`,
              cursor: handle.cursor,
              zIndex: 1000,
            }}
            onMouseDown={(e) => handleResizeMouseDown(element.id, handle.id, e)}
          />
        ))}
      </>
    );
  };

  return (
    <div className="flex-1 flex flex-col bg-gray-50 overflow-hidden">
      {/* Canvas Status */}
      <div className="flex items-center justify-between p-4 border-b border-gray-200">
        <div className="text-sm text-gray-600">Canvas - {zoom}% zoom</div>
        <div className="text-sm text-gray-600">
          {elements.length} element{elements.length !== 1 ? "s" : ""}
        </div>
      </div>

      {/* Canvas Area */}
      <div
        className={`flex-1 overflow-hidden bg-gray-100 relative transition-all duration-200 ${
          isDragOver ? "bg-blue-50 border-2 border-blue-400 border-dashed" : ""
        }`}
        style={{
          backgroundImage: `
            radial-gradient(circle, #d1d5db 1px, transparent 1px)
          `,
          backgroundSize: `${gridSize}px ${gridSize}px`,
          backgroundPosition: `${canvasOffset.x}px ${canvasOffset.y}px`,
        }}
      >
        <div
          ref={canvasRef}
          className="w-full h-full cursor-crosshair overflow-hidden"
          onClick={handleCanvasClick}
          onMouseDown={handleCanvasMouseDown}
          onMouseMove={handleCanvasMouseMove}
          onMouseUp={handleCanvasMouseUp}
          onMouseLeave={handleCanvasMouseUp}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          style={{
            cursor:
              selectedTool === "hand"
                ? "grab"
                : selectedTool === "select"
                  ? "default"
                  : "crosshair",
          }}
        >
          {/* Canvas Content */}
          <div
            className="relative w-full h-full flex items-center justify-center overflow-hidden"
            style={{
              transform: `translate(${canvasOffset.x}px, ${canvasOffset.y}px)`,
            }}
          >
            {/* Artboard/Canvas Boundary */}
            <div
              className="relative border border-gray-300 shadow-lg"
              style={{
                width: CANVAS_WIDTH,
                height: CANVAS_HEIGHT,
                transform: `scale(${zoom / 100})`,
                transformOrigin: "center center",
                maxWidth: "100%",
                maxHeight: "100%",
                backgroundColor: canvasBackgroundColor,
              }}
            >
              {/* Drop indicator overlay */}
              {isDragOver && (
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="bg-blue-100 border-2 border-blue-400 border-dashed rounded-lg p-8">
                    <div className="text-blue-700 text-lg font-medium">
                      Drop component here
                    </div>
                  </div>
                </div>
              )}

              {elements.map((element) => (
                <ContextMenu key={element.id}>
                  <ContextMenuTrigger>
                    <div
                      className={`absolute select-none transition-all duration-200 ${
                        selectedElement === element.id
                          ? "ring-2 ring-blue-500 ring-offset-2"
                          : "hover:ring-1 hover:ring-gray-400"
                      } ${
                        selectedTool === "select"
                          ? "cursor-move"
                          : "cursor-pointer"
                      } ${
                        draggedElement === element.id
                          ? "opacity-80 scale-105 shadow-lg z-50"
                          : ""
                      }`}
                      style={{
                        left: `${element.x * (zoom / 100)}px`,
                        top: `${element.y * (zoom / 100)}px`,
                        width: `${element.width * (zoom / 100)}px`,
                        height: `${element.height * (zoom / 100)}px`,
                        transform: `rotate(${element.rotation}deg)`,
                        ...element.style,
                      }}
                      onClick={(e) => handleElementClick(element.id, e)}
                      onMouseDown={(e) => handleElementMouseDown(element.id, e)}
                      onContextMenu={(e) =>
                        handleElementRightClick(element.id, e)
                      }
                    >
                      {element.content}
                    </div>
                  </ContextMenuTrigger>
                  <ContextMenuContent className="bg-white border-gray-200 text-gray-900">
                    <ContextMenuSub>
                      <ContextMenuSubTrigger className="hover:bg-gray-100">
                        Replace with
                      </ContextMenuSubTrigger>
                      <ContextMenuSubContent className="bg-white border-gray-200 text-gray-900">
                        {componentTypes
                          .filter((type) => type.id !== element.type)
                          .map((type) => {
                            const IconComponent = type.icon;
                            return (
                              <ContextMenuItem
                                key={type.id}
                                className="hover:bg-gray-100 cursor-pointer"
                                onClick={() =>
                                  replaceComponent(element.id, type.id)
                                }
                              >
                                <IconComponent className="mr-2 h-4 w-4" />
                                {type.label}
                              </ContextMenuItem>
                            );
                          })}
                      </ContextMenuSubContent>
                    </ContextMenuSub>
                    <ContextMenuSeparator className="bg-gray-200" />
                    <ContextMenuItem
                      className="hover:bg-gray-100 cursor-pointer"
                      onClick={() => {
                        const updatedElements = elements.filter(
                          (el) => el.id !== element.id
                        );
                        onElementsChange(updatedElements);
                        if (selectedElement === element.id) {
                          onElementSelect(null);
                        }
                      }}
                    >
                      Delete
                    </ContextMenuItem>
                    <ContextMenuItem
                      className="hover:bg-gray-100 cursor-pointer"
                      onClick={() => {
                        const elementToDuplicate = elements.find(
                          (el) => el.id === element.id
                        );
                        if (elementToDuplicate) {
                          const newElement = {
                            ...elementToDuplicate,
                            id: `${elementToDuplicate.type}-${Date.now()}`,
                            x: elementToDuplicate.x + 20,
                            y: elementToDuplicate.y + 20,
                          };
                          onElementsChange([...elements, newElement]);
                          onElementSelect(newElement.id);
                        }
                      }}
                    >
                      Duplicate
                    </ContextMenuItem>
                  </ContextMenuContent>
                </ContextMenu>
              ))}

              {/* Render resize handles for all elements */}
              {elements.map((element) => renderResizeHandles(element))}
            </div>
          </div>
        </div>
      </div>

      {/* Drag Guide */}
      {(draggedElement || resizingElement) && (
        <div className="absolute top-4 left-4 bg-gray-900 bg-opacity-90 text-white px-3 py-1 rounded-md text-sm pointer-events-none">
          {draggedElement && !isAltDragging && "Dragging element"}
          {draggedElement &&
            isAltDragging &&
            "🔄 Alt+drag: Duplicating element"}
          {resizingElement && "Resizing element"}
          {" • Use select tool to move/resize elements"}
        </div>
      )}
    </div>
  );
}
