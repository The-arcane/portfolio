
import { SectionWrapper } from '@/components/shared/section-wrapper';
import { Badge } from '@/components/ui/badge';
import { Laptop, Wind, Atom, GitFork, Database, Cloud, FileCode, Server, Network, CodeXml } from 'lucide-react'; // Added CodeXml

// Represents a simplified Leaf icon for MongoDB using SVG
const MongoDbIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10 text-green-500">
    <path d="M12 2C6.48 2 2 6.48 2 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zM12 6c-2.03 0-3.87.93-5.08 2.42.61.39 1.28.66 2.01.82C9.88 8.08 10.88 7.5 12 7.5s2.12.58 3.07 1.74c.73-.16 1.4-.43 2.01-.82C15.87 6.93 14.03 6 12 6zm0 11c-1.75 0-3.3-.96-4.13-2.4.53.29 1.1.49 1.7.61C10.62 16.18 11.88 16.5 12 16.5s1.38-.32 2.43-1.29c.6.12 1.17.32 1.7.61C15.3 16.04 13.75 17 12 17z"/>
  </svg>
);


const tools = [
  { name: 'JavaScript', icon: <Badge className="text-2xl p-3 bg-yellow-400 text-black hover:bg-yellow-500">JS</Badge> },
  { name: 'TailwindCSS', icon: <Wind className="w-10 h-10 text-sky-500" /> },
  { name: 'React (Beginner)', icon: <Atom className="w-10 h-10 text-sky-400" /> },
  { name: 'Next.js (Beginner)', icon: <div className="font-bold text-xl border-2 border-foreground rounded-md p-2 w-10 h-10 flex items-center justify-center bg-black">N</div> },
  { name: 'Node.js (Beginner)', icon: <Server className="w-10 h-10 text-green-600" /> },
  { name: 'Git', icon: <GitFork className="w-10 h-10 text-orange-600" /> },
  { name: 'Express.js', icon: <span className="text-3xl font-mono text-gray-400">ex</span> },
  { name: 'TypeScript', icon: <Badge className="text-2xl p-3 bg-blue-600 text-white hover:bg-blue-700">TS</Badge> },
  { name: 'PostgreSQL', icon: <Database className="w-10 h-10 text-blue-700" /> },
  { name: 'HTML', icon: <CodeXml className="w-10 h-10 text-orange-700" /> },
];

export function ToolbeltSection() {
  return (
    <SectionWrapper id="toolbelt" title="My Digital Toolbelt">
      <div className="grid md:grid-cols-5 gap-12 items-center">
        <div className="md:col-span-2 flex flex-col items-center md:items-start text-center md:text-left">
          <Laptop className="w-24 h-24 md:w-32 md:h-32 text-accent mb-6" />
          <h3 className="text-3xl lg:text-4xl font-headline font-semibold mb-4 text-primary-foreground leading-tight">
            I got the experience.
          </h3>
          <p className="text-xl lg:text-2xl font-headline text-muted-foreground">
            Here is my toolbelt for success.
          </p>
        </div>
        <div className="md:col-span-3">
          <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 gap-x-6 gap-y-8 justify-items-center">
            {tools.map((tool) => (
              <div key={tool.name} className="flex flex-col items-center group">
                <div className="p-3 rounded-lg bg-card/50 group-hover:bg-accent/20 group-hover:scale-110 transition-all duration-200 ease-in-out shadow-md group-hover:shadow-accent/30 w-20 h-20 flex items-center justify-center mb-2">
                  {tool.icon}
                </div>
                <p className="text-sm font-medium text-muted-foreground group-hover:text-accent-foreground">{tool.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
