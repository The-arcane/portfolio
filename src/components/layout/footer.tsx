export function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="py-8 border-t border-border/40 bg-background">
      <div className="container max-w-5xl text-center text-sm text-muted-foreground">
        <p>&copy; {currentYear} FolioForge. All rights reserved. Crafted by {userProfileData.name}.</p>
      </div>
    </footer>
  );
}

// Minimal data for footer, can be expanded
const userProfileData = {
  name: "Alex Johnson" // Replace with actual name or remove if not needed here
}
