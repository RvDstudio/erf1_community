import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { Sidebar } from './Sidebar';

interface MobileSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileSidebar({ isOpen, onClose }: MobileSidebarProps) {
  return (
    <div className="lg:hidden">
      <Sheet onOpenChange={onClose} open={isOpen}>
        <SheetTrigger asChild>
          <button
            className="fixed top-3 left-4 z-50 rounded-md p-2 text-gray-500"
            type="button"
          >
            ☰
          </button>
        </SheetTrigger>
        <SheetContent className="w-64 p-0" side="left">
          <SheetTitle className="sr-only">Menu</SheetTitle>
          <SheetHeader>
            <h2 className="px-4 py-2 font-bold text-lg">Menu</h2>
          </SheetHeader>
          <Sidebar isCollapsed={false} />
        </SheetContent>
      </Sheet>
    </div>
  );
}
