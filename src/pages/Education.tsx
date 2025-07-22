import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { GraduationCap, Award, BookOpen, Calendar, ExternalLink } from 'lucide-react';


const Education = () => {
  const education = [
    {
      institution: 'S. B. Patil College Of Engineering, Indapur',
      degree: 'Bachelor of Science in Computer Science',
      duration: '2017 - 2021',
      //grade: 'GPA: 3.8/4.0',
      description: 'Specialized in software engineering and web development with a focus on modern programming paradigms.',
      achievements: [
        'Certificate of Recognition by ICT Academy Lernathon 2020'
      ],
      courses: ['Data Structures', 'Algorithms', 'Database Systems', 'Software Engineering', 'Web Development']
    },
    {
      institution: 'Dattakala Group of Institutions, Bhigwan,Daund,',
      degree: 'Post Graduation',
      duration: 'Passout: 2025',
      //grade: 'Completed with Distinction',
      description: 'Completed post-graduation with a specialization in computer science, gaining advanced knowledge and skills in the field.',
      achievements: [
        'Gained my knowledge and skills.'
      ],
      courses: ['AI', 'ML', 'IOT', 'DBMS']
    }
  ];

  const certifications = [
  {
    name: 'Faculty Development Program',
    issuer: 'Amazon Web Services',
    date: '2022',
    url: '/assets/aws.pdf',
    icon: '☁️',
    skills: ['Cloud Architecture', 'AWS Services', 'Scalability', 'Security']
  },
  {
    name: 'C programming',
    issuer: 'Sololearn',
    date: '2019',
    url: '/assets/sololearn_C.pdf',
    icon: '🌐',
    skills: ['C language']
  },
  {
    name: 'C++ programming',
    issuer: 'Sololearn',
    date: '2019',
    url: '/assets/sololearn_C++.pdf',
    icon: '🌐',
    skills: ['C++ language']
  },
  {
    name: 'Java programming',
    issuer: 'Sololearn',
    date: '2019',
    url: '/assets/sololearn_Java.pdf',
    icon: '🌐',
    skills: ['Java language']
  },
  {
    name: 'HTML programming',
    issuer: 'Sololearn',
    date: '2019',
    url: '/assets/sololearn_HTML.jpg',
    icon: '🌐',
    skills: ['HTML5 language']
  },
  {
    name: 'Research in Computer and Communication Engineering ',
    issuer: 'IJIRCCE',
    date: '2021',
    url: '/assets/research.PDF',
    icon: '⚙️',
    skills: ['Paper Publishing ', 'Research Paper']
  },
  {
    name: 'Internship In Graphic Designing',
    issuer: 'Aashman Foundation',
    date: '2022',
    url: '/assets/intern.jpg',
    icon: '⚛️',
    skills: ['Graphic Designing']
  },
  {
    name: 'Faculty Orientation in ML',
    issuer: 'Sinhagad Institute of Technology',
    date: '2022',
    url: '/assets/ml.pdf',
    icon: '⚙️',
    skills: ['Artificial Intelligence ', 'Machine learning']
  }
];


  // const onlineCourses = [
  //   {
  //     title: 'Advanced TypeScript',
  //     provider: 'TypeScript Mastery',
  //     completed: '2023',
  //     duration: '40 hours',
  //     certificate: true
  //   },
  //   {
  //     title: 'System Design Interview',
  //     provider: 'Tech Interview Pro',
  //     completed: '2023',
  //     duration: '30 hours',
  //     certificate: true
  //   },
  //   {
  //     title: 'Machine Learning Fundamentals',
  //     provider: 'AI Academy',
  //     completed: '2022',
  //     duration: '60 hours',
  //     certificate: true
  //   }
  //];

  return (
    <div className="min-h-screen pt-24 pb-16 gradient-hero">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <Badge variant="secondary" className="mb-4">
            🎓 Learning Journey
          </Badge>
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Education & Certifications
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            My academic background and continuous learning path in technology, featuring formal education and professional certifications.
          </p>
        </div>

        {/* Formal Education */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <GraduationCap className="h-8 w-8 text-primary" />
            <h2 className="text-3xl font-bold text-foreground">Formal Education</h2>
          </div>
          
          <div className="space-y-8">
            {education.map((edu, index) => (
              <Card 
                key={edu.institution} 
                className="p-8 gradient-card shadow-soft transition-smooth hover:shadow-glow animate-fade-in border-l-4 border-l-primary"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="grid lg:grid-cols-3 gap-6">
                  <div className="lg:col-span-2">
                    <div className="mb-4">
                      <h3 className="text-2xl font-bold text-foreground mb-2">{edu.degree}</h3>
                      <div className="flex items-center gap-2 text-primary font-semibold mb-2">
                        <span>{edu.institution}</span>
                      </div>
                      <div className="flex items-center gap-4 text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4" />
                          <span className="text-sm">{edu.duration}</span>
                        </div>
                        
                      </div>
                    </div>

                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {edu.description}
                    </p>

                    <div className="mb-6">
                      <h4 className="font-semibold text-foreground mb-3">Key Achievements:</h4>
                      <ul className="space-y-2">
                        {edu.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start gap-3 text-muted-foreground">
                            <Award className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-foreground mb-3">Relevant Coursework:</h4>
                      <div className="flex flex-wrap gap-2">
                        {edu.courses.map((course) => (
                          <Badge key={course} variant="secondary" className="text-xs">
                            {course}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Professional Certifications */}
        <div className="grid md:grid-cols-2 gap-6">
  {certifications.map((cert, index) => (
    <Card 
      key={cert.name} 
      className="p-6 gradient-card shadow-soft transition-smooth hover:shadow-glow group animate-fade-in"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="flex items-start gap-4 mb-4">
        <div className="text-3xl">{cert.icon}</div>
        <div className="flex-1">
          <h3 className="text-lg font-bold text-foreground mb-1">{cert.name}</h3>
          <p className="text-primary font-medium mb-1">{cert.issuer}</p>
          <p className="text-sm text-muted-foreground">{cert.date}</p>
        </div>
        
        {cert.url && (
          <a
            href={cert.url}
            target="_blank"
            rel="noopener noreferrer"
            className="opacity-0 group-hover:opacity-100 transition-opacity"
          >
            <Button size="sm" variant="ghost">
              <ExternalLink className="h-4 w-4" />
            </Button>
          </a>
        )}
      </div>

      <div>
        <h4 className="font-medium text-foreground mb-2">Skills Validated:</h4>
        <div className="flex flex-wrap gap-1">
          {cert.skills.map((skill) => (
            <Badge key={skill} variant="secondary" className="text-xs">
              {skill}
            </Badge>
          ))}
        </div>
      </div>
    </Card>
  ))}
</div>


        {/* Online Learning */}
        {/*<div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <BookOpen className="h-8 w-8 text-primary" />
            <h2 className="text-3xl font-bold text-foreground">Continuous Learning</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {onlineCourses.map((course, index) => (
              <Card 
                key={course.title} 
                className="p-6 gradient-card shadow-soft transition-smooth hover:shadow-glow animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="mb-4">
                  <h3 className="text-lg font-bold text-foreground mb-2">{course.title}</h3>
                  <p className="text-primary font-medium mb-2">{course.provider}</p>
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <span>Completed: {course.completed}</span>
                    <Badge variant="outline" className="text-xs">
                      {course.duration}
                    </Badge>
                  </div>
                </div>
                
                {course.certificate && (
                  <div className="flex items-center gap-2 text-primary text-sm">
                    <Award className="h-4 w-4" />
                    <span>Certificate Earned</span>
                  </div>
                )}
              </Card>
            ))}
          </div>
        </div>*/}

        {/* Learning Philosophy */}
        {/*<div className="text-center animate-fade-in">
          <Card className="p-8 gradient-card shadow-soft max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Learning Philosophy
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              I believe in lifelong learning and staying current with evolving technologies. 
              My educational journey reflects a commitment to both formal education and continuous 
              skill development. Whether through structured programs, certifications, or hands-on projects, 
              I'm always seeking new challenges that expand my knowledge and capabilities.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button className="gradient-primary shadow-glow">
                View Certificates
              </Button>
              <Button variant="outline">
                Learning Goals
              </Button>
            </div>
          </Card>
        </div>*/}
      </div>
    </div>
  );
};

export default Education;