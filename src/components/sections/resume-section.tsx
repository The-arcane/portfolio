import { resumeData } from '@/data/mock';
import { SectionWrapper } from '@/components/shared/section-wrapper';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Briefcase, Download, GraduationCap, Cog, Award, Star } from 'lucide-react';

export function ResumeSection() {
  return (
    <SectionWrapper id="resume" title="My Resume">
      <div className="text-center mb-12">
        <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
          <a href="/resume.pdf" download="RaunaqAdlakha-Resume.pdf">
            <Download className="mr-2 h-5 w-5" />
            Download Resume
          </a>
        </Button>
        <p className="text-xs text-muted-foreground mt-2">(User: Please place your resume.pdf in the /public folder)</p>
      </div>

      <div className="space-y-12">
        {/* Experience Section */}
        <div>
          <h3 className="text-2xl font-headline font-semibold mb-6 flex items-center text-primary-foreground">
            <Briefcase className="mr-3 h-6 w-6 text-accent" />
            Work Experience
          </h3>
          <div className="space-y-8">
            {resumeData.experience.map((item) => (
              <Card key={item.id} className="bg-card border-border shadow-lg">
                <CardHeader>
                  <CardTitle className="font-headline text-xl text-primary-foreground">{item.role}</CardTitle>
                  <p className="text-md text-accent font-semibold">{item.company}</p>
                  <p className="text-sm text-muted-foreground">{item.dateRange}</p>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-outside ml-5 space-y-1 font-body text-muted-foreground">
                    {item.responsibilities.map((resp, index) => (
                      <li key={index}>{resp}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Education Section */}
        <div>
          <h3 className="text-2xl font-headline font-semibold mb-6 flex items-center text-primary-foreground">
            <GraduationCap className="mr-3 h-6 w-6 text-accent" />
            Education
          </h3>
          <div className="space-y-8">
            {resumeData.education.map((item) => (
              <Card key={item.id} className="bg-card border-border shadow-lg">
                <CardHeader>
                  <CardTitle className="font-headline text-xl text-primary-foreground">{item.degree}</CardTitle>
                  <p className="text-md text-accent font-semibold">{item.institution}</p>
                  <p className="text-sm text-muted-foreground">{item.dateRange}</p>
                </CardHeader>
                {item.details && (
                  <CardContent>
                    <p className="font-body text-muted-foreground">{item.details}</p>
                  </CardContent>
                )}
              </Card>
            ))}
          </div>
        </div>

        {/* Achievements Section */}
        {resumeData.achievements && resumeData.achievements.length > 0 && (
          <div>
            <h3 className="text-2xl font-headline font-semibold mb-6 flex items-center text-primary-foreground">
              <Award className="mr-3 h-6 w-6 text-accent" />
              Achievements & Highlights
            </h3>
            <Card className="bg-card border-border shadow-lg">
              <CardContent className="pt-6">
                <ul className="list-disc list-outside ml-5 space-y-2 font-body text-muted-foreground">
                  {resumeData.achievements.map((item) => (
                    <li key={item.id}>{item.description}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Skills Section */}
        <div>
          <h3 className="text-2xl font-headline font-semibold mb-6 flex items-center text-primary-foreground">
            <Cog className="mr-3 h-6 w-6 text-accent" />
            Notable Skills
          </h3>
          <Card className="bg-card border-border shadow-lg">
            <CardContent className="pt-6">
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                {resumeData.skills.map((skill) => (
                  <div key={skill.id} className="p-3 bg-muted/20 rounded-md text-center">
                    <p className="font-body text-sm text-primary-foreground">{skill.name}</p>
                    {skill.category && <p className="text-xs text-accent">{skill.category}</p>}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Certifications Section */}
        {resumeData.certifications && resumeData.certifications.length > 0 && (
          <div>
            <h3 className="text-2xl font-headline font-semibold mb-6 flex items-center text-primary-foreground">
              <Star className="mr-3 h-6 w-6 text-accent" />
              Certifications
            </h3>
            <Card className="bg-card border-border shadow-lg">
              <CardContent className="pt-6">
                <ul className="list-disc list-outside ml-5 space-y-2 font-body text-muted-foreground">
                  {resumeData.certifications.map((cert, index) => (
                    <li key={`cert-${index}`}>{cert}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </SectionWrapper>
  );
}
