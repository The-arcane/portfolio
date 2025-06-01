
import { userProfileData } from '@/data/mock';
import { SectionWrapper } from '@/components/shared/section-wrapper';
import Image from 'next/image';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"


export function AboutSection() {
  return (
    <SectionWrapper id="about" title="About Me">
      <div className="grid md:grid-cols-3 gap-8 md:gap-12 items-center">
        <div className="md:col-span-1 flex justify-center md:justify-start">
           <Avatar className="w-48 h-48 md:w-64 md:h-64 border-4 border-accent shadow-lg">
            <AvatarImage src="/profile-pic.jpeg" alt={userProfileData.name} data-ai-hint="profile picture" />
            <AvatarFallback className="text-4xl bg-primary text-primary-foreground">{userProfileData.name.substring(0,2).toUpperCase()}</AvatarFallback>
          </Avatar>
        </div>
        <div className="md:col-span-2">
          <h3 className="text-2xl md:text-3xl font-headline font-semibold mb-4 text-primary-foreground">
            {userProfileData.name}
          </h3>
          <p className="text-lg md:text-xl font-headline text-accent mb-6">
            {userProfileData.title}
          </p>
          {userProfileData.bio.map((paragraph, index) => (
            <p key={index} className="font-body text-muted-foreground mb-4 leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
