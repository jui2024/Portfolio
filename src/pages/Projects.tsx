import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, Eye } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Car Rental system',
      description: 'The Car Rental System is a web-based application designed to simplify the process of booking rental cars. It allows users to browse available vehicles, check availability, make reservations, and manage bookings online. The system includes features for both customers and administrators, such as car listings, user authentication, rental history tracking, and payment management. It aims to streamline operations for rental agencies while providing a convenient and user-friendly experience for customers.',
      image: '/assets/image.png',
      technologies: ['C++', 'Java', 'MongoDB'],
      category: 'Begineer Friendly Project',
      links: {
        //demo: '#',
        //github: '#'
      },
      featured: true
    },
    {
      title: 'Prediction of sales & production for patients After covid-19 breakdown using ML',
      description: 'Prediction of Sales & Production for Patients After COVID-19 Breakdown Using Machine Learning. This project aims to analyze and predict the trends in sales and production of medical resources for patients in the post-COVID-19 period using Machine Learning techniques. By studying historical data related to medicine consumption, hospital supplies, and patient needs, the model forecasts future demands to help healthcare providers and pharmaceutical companies optimize their production and inventory. The goal is to ensure efficient resource planning and timely availability of essential medical products in response to fluctuating healthcare demands in the aftermath of the pandemic.',
      image: '/assets/a.png',
      technologies: ['React', 'ML', 'Firebase'],
      category: 'Full Stack',
      links: {
        //demo: '#',
        //github: '#'
      },
      featured: true
    },
    {
      title: 'Live Event Detection for public safety using sparse LSTM Networks In Hazard Monitoring Systems',
      description: 'Live Event Detection for Public Safety Using Sparse LSTM Networks in Hazard Monitoring Systems. This project focuses on real-time detection of hazardous events such as natural disasters, fires, or public safety threats using Sparse Long Short-Term Memory (LSTM) networks. The system processes continuous sensor data and surveillance inputs to identify unusual patterns or anomalies that indicate potential danger. ',
      image: '/assets/b.png',
      technologies: ['Vue.js', 'OpenWeather API', 'Chart.js', 'SCSS'],
      category: 'Frontend',
      links: {
        demo: '#',
        github: '#'
      },
      featured: true
    },
    
    
  ];

  const categories = ['All'];
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  const featuredProjects = projects.filter(project => project.featured);

  return (
    <div className="min-h-screen pt-24 pb-16 gradient-hero">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <Badge variant="secondary" className="mb-4">
            🚀 My Work
          </Badge>
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Featured Projects
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A showcase of my recent work, featuring web applications, APIs, and digital solutions I've built using modern technologies.
          </p>
        </div>

        {/* Featured Projects */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-foreground mb-8">🌟 Projects</h2>
          <div className="grid lg:grid-cols-2 gap-8">
            {featuredProjects.slice(0, 2).map((project, index) => (
              <Card 
                key={project.title} 
                className="overflow-hidden gradient-card shadow-soft transition-smooth hover:shadow-glow group animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover transition-smooth group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-smooth"></div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <Badge variant="outline">{project.category}</Badge>
                    <div className="flex gap-2">
                      <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
                        <ExternalLink className="h-4 w-4" />
                      </Button>
                      <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
                        <Github className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-foreground mb-3">{project.title}</h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12 animate-fade-in">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
              className="transition-smooth"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* All Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <Card 
              key={project.title} 
              className="overflow-hidden gradient-card shadow-soft transition-smooth hover:shadow-glow group animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-40 object-cover transition-smooth group-hover:scale-105"
                />
                <div className="absolute top-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-smooth">
                  <Button size="sm" variant="secondary" className="h-8 w-8 p-0">
                    <Eye className="h-4 w-4" />
                  </Button>
                  <Button size="sm" variant="secondary" className="h-8 w-8 p-0">
                    <Github className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <Badge variant="outline" className="text-xs">{project.category}</Badge>
                  {project.featured && (
                    <Badge variant="default" className="text-xs">Featured</Badge>
                  )}
                </div>
                
                <h3 className="text-lg font-bold text-foreground mb-2">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-1 mb-4">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                  {project.technologies.length > 3 && (
                    <Badge variant="secondary" className="text-xs">
                      +{project.technologies.length - 3}
                    </Badge>
                  )}
                </div>

                <div className="flex gap-2">
                  {/*<Button size="sm" variant="outline" className="flex-1">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Demo
                  </Button>
                  <Button size="sm" variant="ghost">
                    <Github className="h-4 w-4" />
                  </Button>*/}
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Call to Action 
        <div className="text-center mt-16 animate-fade-in">
          <Card className="p-8 gradient-card shadow-soft max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Have a Project in Mind?
            </h3>
            <p className="text-muted-foreground mb-6">
              I'm always excited to work on new and challenging projects. Let's discuss how we can bring your vision to life.
            </p>
            <Button className="gradient-primary shadow-glow">
              Start a Project
            </Button>
          </Card>
        </div> */}
      </div>
    </div>
  );
};

export default Projects;