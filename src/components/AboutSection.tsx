import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Download, MapPin, Mail, Phone, Github, Linkedin } from 'lucide-react';
import profilePhoto from '@/assets/profile-photo.jpg';

export const AboutSection = () => {
  const skills = [
    'ML', 'AI', 'IOT', 'Data Science', 'RDBMS', 
    'OOPS',  'MongoDB'
  ];

  const stats = [
    { label: 'Years Experience', value: '1.5+' },
    { label: 'Projects Completed', value: '3+' },
    // { label: 'Happy Clients', value: '30+' },
    // { label: 'Code Commits', value: '1000+' }
  ];

  return (
    <section className="min-h-screen pt-24 pb-16 gradient-hero">
      <div className="container mx-auto px-6">
        {/* Hero Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-6 animate-fade-in">
            <div className="space-y-4">
              <Badge variant="secondary" className="mb-4">
                👋 Welcome to my portfolio
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight">
                Hi, I'm Pooja Barve
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                I am an Assistant Professor with a passion for teaching core computer science subjects such as 
                Object-Oriented Programming, Software Engineering, and Project Management. 
                I focus on blending theoretical knowledge with practical applications to help students build a strong foundation in 
                software development. My goal is to inspire future technologists through engaging and 
                industry-relevant learning experiences.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              {skills.slice(0, 5).map((skill) => (
                <Badge key={skill} variant="outline" className="transition-smooth hover:shadow-soft">
                  {skill}
                </Badge>
              ))}
            </div>

            {/*<div className="flex flex-wrap gap-4 pt-4">
              <Button className="gradient-primary shadow-glow transition-smooth hover:scale-105">
                <Download className="mr-2 h-4 w-4" />
                Download CV
              </Button>
              <Button variant="outline" className="transition-smooth hover:shadow-soft">
                <Mail className="mr-2 h-4 w-4" />
                Get in Touch
              </Button>
            </div>*/}

            {/* Contact Info */}
            <div className="flex flex-wrap gap-6 pt-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>Pune, MH</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span>pooja.tenjun@gmail.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span>+91 7378732634</span>
              </div>
            </div>
          </div>

          {/* Profile Image */}
          <div className="relative animate-fade-in lg:animate-scale-in">
            <div className="relative mx-auto lg:mx-0 w-80 h-80 lg:w-96 lg:h-96">
              <div className="absolute inset-0 gradient-primary rounded-full blur-3xl opacity-20 animate-pulse"></div>
              <img
                src={profilePhoto}
                alt="Profile"
                className="relative w-full h-full object-cover rounded-full shadow-glow ring-4 ring-primary/20 transition-smooth hover:scale-105"
              />
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => (
            <Card key={stat.label} className="p-6 text-center gradient-card shadow-soft transition-smooth hover:shadow-glow hover:scale-105" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
              <div className="text-sm text-muted-foreground font-medium">{stat.label}</div>
            </Card>
          ))}
        </div>

        {/* About Content */}
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main About Text */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">About Me</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  I am an Assistant Professor in Computer Engineering with a strong academic and professional interest in both 
                  foundational and emerging technologies. I have experience teaching a wide range of subjects including 
                  Object-Oriented Programming (OOP), Software Engineering, Database Management Systems (DBMS), 
                  and Project Management. Alongside these core areas, I am deeply interested in modern technological 
                  advancements such as Machine Learning (ML), Artificial Intelligence (AI), Internet of Things (IoT), 
                  and Data Science.
                </p>
                <p>
                  I strive to integrate these evolving fields into my teaching approach to provide students 
                  with a balanced understanding of theoretical concepts and practical, real-world applications. 
                  My goal is to foster critical thinking, innovation, and lifelong learning in the next generation of engineers.
                </p>
                <p>
                  Beyond academics, I am also passionate about drawing and view it as a creative outlet that complements 
                  my technical pursuits. I actively participate in art competitions and find joy in expressing ideas through visual storytelling. 
                  This artistic interest brings balance to my professional life and fuels my creativity in both teaching and personal growth.
                </p>
              </div>
            </div>

            {/* Core Values 
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-4">What I Believe In</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  { title: 'User-Centered Design', desc: 'Putting users first in every decision' },
                  { title: 'Clean Code', desc: 'Writing maintainable, scalable solutions' },
                  { title: 'Continuous Learning', desc: 'Staying updated with latest technologies' },
                  { title: 'Collaboration', desc: 'Working together to achieve great results' }
                ].map((value) => (
                  <div key={value.title} className="p-4 rounded-lg border border-border/50 transition-smooth hover:shadow-soft">
                    <h4 className="font-medium text-foreground mb-1">{value.title}</h4>
                    <p className="text-sm text-muted-foreground">{value.desc}</p>
                  </div>
                ))}
              </div>
            </div>*/}
          </div>

          {/* Skills Sidebar */}
          <div className="space-y-8">
            <Card className="p-6 gradient-card shadow-soft">
              <h3 className="text-xl font-semibold text-foreground mb-4">Technical Skills</h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <Badge key={skill} variant="secondary" className="transition-smooth hover:bg-primary hover:text-primary-foreground">
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>

            <Card className="p-6 gradient-card shadow-soft">
              <h3 className="text-xl font-semibold text-foreground mb-4">Connect With Me</h3>
              <div className="space-y-3">
                {[
                  { icon: Github, label: 'GitHub', href: 'https://search.brave.com/search?q=github&source=web' },
                  { icon: Linkedin, label: 'LinkedIn', href: 'https://search.brave.com/search?q=linkdin&source=web' },
                  { icon: Mail, label: 'Email : pooja.tenjun@gmail.com', href: 'https://search.brave.com/search?q=gmail&source=desktop'}
                ].map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank" 
                    className="flex items-center gap-3 p-2 rounded-md transition-smooth hover:bg-accent/50 group"
                  >
                    <social.icon className="h-5 w-5 text-muted-foreground group-hover:text-primary" />
                    <span className="text-sm font-medium">{social.label}</span>
                  </a>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};