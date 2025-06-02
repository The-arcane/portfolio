
import Link from 'next/link';
import { navItems } from '@/data/mock';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, Zap } from 'lucide-react';

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-5xl items-center">
        <Link href="/" className="mr-6 flex items-center space-x-2 group">
          <Zap className="h-6 w-6 text-primary transition-transform duration-300 ease-in-out group-hover:animate-wiggle-hover" />
          <span className="font-bold font-headline text-lg text-primary-foreground transition-all duration-300 ease-in-out group-hover:tracking-wider group-hover:text-accent group-hover:animate-pop">FolioForge</span>
        </Link>
        
        <nav className="hidden md:flex gap-6"> {/* Removed ml-auto here */}
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="animated-underline group text-sm font-medium text-muted-foreground transition-colors hover:text-accent-foreground focus:text-accent-foreground"
            >
              <span>{item.label}</span>
            </Link>
          ))}
        </nav>

        <div className="ml-auto md:hidden"> {/* This ml-auto pushes the mobile menu to the right */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6 text-primary-foreground" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-background">
              <nav className="flex flex-col gap-4 mt-8">
              <Link href="/" className="mb-4 flex items-center space-x-2 group">
                <Zap className="h-6 w-6 text-primary group-hover:animate-wiggle-hover transition-transform duration-300 ease-in-out" />
                <span className="font-bold font-headline text-lg text-primary-foreground group-hover:tracking-wider group-hover:text-accent group-hover:animate-pop transition-all duration-300 ease-in-out">FolioForge</span>
              </Link>
                {navItems.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="block px-2 py-1 text-lg font-medium text-primary-foreground hover:text-accent-foreground hover:animate-pop"
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
