import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Calendar } from 'lucide-react';

const Work = () => {
  const experiences = [
    {
      company: 'Jaywantrao Sawant College of Engineering, hadapsar',
      position: 'Assistant professor',
      duration: 'Jun 2025 - Present',
     // description: 'Leading development of scalable web applications using React, Node.js, and cloud technologies. Managed a team of 5 developers and delivered 15+ successful projects.',
      technologies: ['OOP', 'PPS','FPL', 'DSBDA','Software Project Management', 'ML'],
      achievements: [
        'Learining and Improving myself as well as enjoying working with nice people'
      ]
    },
    {
      company: 'Dattakala Group Of institutions Faculty Of Engineering, Bhigwan,Daund',
      position: 'Assistant Professor',
      duration: 'Oct 2023 - Jun 2025',
      //description: 'Developed responsive websites and web applications for various clients. Collaborated with designers to create pixel-perfect user interfaces.',
      technologies: ['Software Project Management', 'ML'],
      achievements: [
        'Improved my teaching Skills as well as practical skills'
      ]
    },
    {
      company: 'S. B. Patil College Of Engineering, Indapur.',
      position: ' Teaching Assistant',
      duration: 'Mar 2022 - Oct 2023',
      //description: 'Started my professional journey building features for a growing startup. Gained experience in full-stack development and agile methodologies.',
      technologies: ['OOPs', 'DBMS'],
      achievements: [
        'Learned alot from seniors ',
        'Contributed to community'
      ]
    }
  ];

  return (
    <div className="min-h-screen pt-24 pb-16 gradient-hero">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <Badge variant="secondary" className="mb-4">
            💼 Professional Experience
          </Badge>
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            My Work Journey
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A timeline of my professional growth, key achievements, and the technologies I've mastered along the way.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((experience, index) => (
            <Card 
              key={experience.company} 
              className="p-8 gradient-card shadow-soft transition-smooth hover:shadow-glow animate-fade-in border-l-4 border-l-primary"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                <div className="mb-4 lg:mb-0">
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    {experience.position}
                  </h3>
                  <div className="flex items-center gap-2 text-primary font-semibold mb-2">
                    <span>{experience.company}</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span className="text-sm">{experience.duration}</span>
                  </div>
                </div>
                
                {/*<Button variant="outline" size="sm" className="lg:mt-0 self-start">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  View Company
                </Button>*/}
              </div>

            

              <div className="mb-6">
                <h4 className="font-semibold text-foreground mb-3">Experiance:</h4>
                <ul className="space-y-2">
                  {experience.achievements.map((achievement, i) => (
                    <li key={i} className="flex items-start gap-3 text-muted-foreground">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-foreground mb-3">Subject thought:</h4>
                <div className="flex flex-wrap gap-2">
                  {experience.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary" className="transition-smooth hover:bg-primary hover:text-primary-foreground">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Call to Action 
        <div className="text-center mt-16 animate-fade-in">
          <Card className="p-8 gradient-card shadow-soft max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Ready to Work Together?
            </h3>
            <p className="text-muted-foreground mb-6">
              I'm always interested in new opportunities and exciting projects. Let's discuss how we can bring your ideas to life.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button className="gradient-primary shadow-glow">
                Get In Touch
              </Button>
              <Button variant="outline">
                View Projects
              </Button>
            </div>
          </Card>
        </div>*/}
      </div>
    </div>
  );
};

export default Work;