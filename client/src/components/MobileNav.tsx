import { Menu } from 'lucide-react';
import { SheetTrigger, Sheet, SheetContent, SheetTitle, SheetDescription } from './ui/sheet';
import { Separator } from './ui/separator';
import { Button } from './ui/button';

const MobileNav = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <Menu className="text-orange-500" />
      </SheetTrigger>
      <SheetContent style={{ '--sheet-content-padding': '16px' }}>
        <SheetTitle>
          <span>Welcome to Casa</span>
        </SheetTitle>
        <Separator />
        <SheetDescription className="flex">
          <Button className="flex-1 font-bold bg-orange-500">Login</Button>
        </SheetDescription>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;