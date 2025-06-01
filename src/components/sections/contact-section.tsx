
import { contactDataInfo } from '@/data/mock';
import { SectionWrapper } from '@/components/shared/section-wrapper';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail, Phone } from 'lucide-react';

export function ContactSection() {
  return (
    <SectionWrapper id="contact" title="Get In Touch">
      <Card className="max-w-2xl mx-auto bg-card border-border shadow-xl p-6 md:p-8">
        <CardHeader className="text-center p-0 mb-6">
          <CardTitle className="font-headline text-2xl md:text-3xl text-primary-foreground">Let's Connect!</CardTitle>
          <p className="font-body text-muted-foreground mt-2">
            I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
          </p>
        </CardHeader>
        <CardContent className="p-0">
          <div className="space-y-6">
            <a href={`mailto:${contactDataInfo.email}`} className="flex items-center p-4 bg-muted/20 rounded-lg hover:bg-accent/20 transition-colors group">
              <Mail className="h-8 w-8 text-accent mr-4 group-hover:text-accent-foreground group-hover:scale-110 transition-transform duration-200" />
              <div>
                <h4 className="font-headline text-lg text-primary-foreground group-hover:text-accent-foreground">Email</h4>
                <p className="font-body text-muted-foreground group-hover:text-accent-foreground/80">{contactDataInfo.email}</p>
              </div>
            </a>
            
            {contactDataInfo.phone && (
              <a href={`tel:${contactDataInfo.phone.replace(/\s/g, '')}`} className="flex items-center p-4 bg-muted/20 rounded-lg hover:bg-accent/20 transition-colors group">
                <Phone className="h-8 w-8 text-accent mr-4 group-hover:text-accent-foreground group-hover:scale-110 transition-transform duration-200" />
                <div>
                  <h4 className="font-headline text-lg text-primary-foreground group-hover:text-accent-foreground">Phone</h4>
                  <p className="font-body text-muted-foreground group-hover:text-accent-foreground/80">{contactDataInfo.phone}</p>
                </div>
              </a>
            )}
          </div>

          <div className="mt-8 pt-6 border-t border-border/50 text-center">
            <h4 className="font-headline text-xl mb-4 text-primary-foreground">Find me on Social Media</h4>
            <div className="flex justify-center gap-4">
              {contactDataInfo.socials.map((social) => (
                <Button 
                  key={social.name} 
                  asChild 
                  variant="outline" 
                  size="icon" 
                  className="rounded-full w-12 h-12 hover:bg-accent hover:text-accent-foreground hover:border-accent hover:scale-125 hover:rotate-[-10deg] transition-all duration-300 ease-in-out"
                >
                  <Link href={social.url} target="_blank" rel="noopener noreferrer" aria-label={social.name}>
                    <social.icon className="h-6 w-6" />
                  </Link>
                </Button>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </SectionWrapper>
  );
}
