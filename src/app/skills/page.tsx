import type { NextPage } from 'next';
import { Progress } from '@/components/ui/progress';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { skills, SkillData } from '@/lib/constants';
import { Award, Brain, Code, Database, Server, Settings, TerminalSquare, Palette } from 'lucide-react'; // Palette for Frontend

const getCategoryIcon = (category: SkillData['category']) => {
  switch (category) {
    case 'Frontend': return <Palette className="h-6 w-6 text-accent" />;
    case 'Backend': return <Server className="h-6 w-6 text-accent" />;
    case 'Database': return <Database className="h-6 w-6 text-accent" />;
    case 'Languages': return <Code className="h-6 w-6 text-accent" />;
    case 'Tools': return <Settings className="h-6 w-6 text-accent" />;
    default: return <TerminalSquare className="h-6 w-6 text-accent" />;
  }
};

const SkillsPage: NextPage = () => {
  const categorizedSkills: Record<string, SkillData[]> = skills.reduce((acc, skill) => {
    (acc[skill.category] = acc[skill.category] || []).push(skill);
    return acc;
  }, {} as Record<string, SkillData[]>);

  const categoryOrder: SkillData['category'][] = ['Languages', 'Frontend', 'Backend', 'Database', 'Tools'];


  return (
    <div className="min-h-screen bg-background py-16 px-4">
      <div className="container mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl text-primary">
            Technical Skills
          </h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of my proficiency in various technologies, with a strong emphasis on the MERN stack and modern web development practices.
          </p>
        </header>

        <div className="space-y-12">
          {categoryOrder.map(category => {
            const currentSkills = categorizedSkills[category];
            if (!currentSkills || currentSkills.length === 0) return null;

            return (
              <Card key={category} className="shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-xl">
                <CardHeader className="flex flex-row items-center space-x-3 pb-4">
                  {getCategoryIcon(category)}
                  <CardTitle className="text-2xl font-semibold text-primary">{category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                    {currentSkills.map((skill) => (
                      <div key={skill.id} className="space-y-1.5">
                        <div className="flex justify-between items-center">
                          <h3 className="text-md font-medium text-foreground">{skill.name}</h3>
                          <span className="text-sm text-accent font-semibold">{skill.level}%</span>
                        </div>
                        <Progress value={skill.level} aria-label={`${skill.name} proficiency: ${skill.level}%`} className="h-3 [&>div]:bg-accent" />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <h2 className="text-2xl font-semibold mb-4 text-primary">Continuous Learning</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            I am always eager to learn new technologies and improve my existing skill set to deliver cutting-edge solutions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SkillsPage;
