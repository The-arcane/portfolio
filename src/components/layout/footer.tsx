import { userProfileData as globalUserProfileData } from '@/data/mock';

export function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="py-8 border-t border-border/40 bg-background">
      <div className="container max-w-5xl text-center text-sm text-muted-foreground">
        <p>&copy; {currentYear} FolioForge. All rights reserved. Crafted by {globalUserProfileData.name}.</p>
      </div>
    </footer>
  );
}
