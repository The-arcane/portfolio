
import { SectionWrapper } from '@/components/shared/section-wrapper';
import { Badge } from '@/components/ui/badge';
import { Laptop, Wind, Atom, GitFork, Database, Cloud, FileCode, Server, Network, CodeXml, Workflow, Container } from 'lucide-react';

const tools = [
  { name: 'JavaScript', icon: <Badge className="text-2xl p-3 bg-yellow-400 text-black hover:bg-yellow-500">JS</Badge> },
  { name: 'TypeScript', icon: <Badge className="text-2xl p-3 bg-blue-600 text-white hover:bg-blue-700">TS</Badge> },
  { name: 'Python', icon: <Badge className="text-xl p-3 bg-emerald-600 text-white hover:bg-emerald-700">PY</Badge> },
  { name: 'HTML/CSS', icon: <CodeXml className="w-10 h-10 text-orange-700" /> },
  { name: 'React', icon: <Atom className="w-10 h-10 text-sky-400" /> },
  { name: 'Next.js', icon: <div className="font-bold text-xl border-2 border-foreground rounded-md p-2 w-10 h-10 flex items-center justify-center bg-black">N</div> },
  { name: 'Node.js', icon: <Server className="w-10 h-10 text-green-600" /> },
  { name: 'Express.js', icon: <span className="text-3xl font-mono text-gray-400">ex</span> },
  { name: 'TailwindCSS', icon: <Wind className="w-10 h-10 text-sky-500" /> },
  { name: 'PostgreSQL', icon: <Database className="w-10 h-10 text-blue-700" /> },
  { name: 'NoSQL', icon: <Network className="w-10 h-10 text-teal-500" /> },
  { name: 'Google Cloud', icon: <Cloud className="w-10 h-10 text-blue-400" /> },
  { name: 'Gemini API', icon: <FileCode className="w-10 h-10 text-violet-400" /> },
  { name: 'n8n', icon: <Workflow className="w-10 h-10 text-red-500" /> },
  { name: 'Docker', icon: <Container className="w-10 h-10 text-cyan-500" /> },
  { name: 'Git', icon: <GitFork className="w-10 h-10 text-orange-600" /> },
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
