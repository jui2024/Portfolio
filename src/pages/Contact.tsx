import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter, MessageCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    toast({
      title: "Message sent!",
      description: "Thank you for your message. I'll get back to you soon.",
    });
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'your.email@example.com',
      href: 'mailto:your.email@example.com',
      description: 'Send me an email anytime'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+1 (555) 123-4567',
      href: 'tel:+15551234567',
      description: 'Call or text me directly'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'San Francisco, CA',
      href: '#',
      description: 'Available for local meetings'
    },
    {
      icon: MessageCircle,
      label: 'Response Time',
      value: 'Within 24 hours',
      href: '#',
      description: 'I respond to all inquiries quickly'
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      href: '#',
      username: '@yourusername',
      color: 'hover:text-gray-900'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: '#',
      username: '/in/yourprofile',
      color: 'hover:text-blue-600'
    },
    {
      icon: Twitter,
      label: 'Twitter',
      href: '#',
      username: '@yourusername',
      color: 'hover:text-blue-400'
    },
    {
      icon: Mail,
      label: 'Email',
      href: 'mailto:your.email@example.com',
      username: 'your.email@example.com',
      color: 'hover:text-red-500'
    }
  ];

  return (
    <div className="min-h-screen pt-24 pb-16 gradient-hero">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <Badge variant="secondary" className="mb-4">
            📧 Get In Touch
          </Badge>
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Let's Connect
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            I'm always interested in new opportunities, collaborations, and conversations. 
            Whether you have a project in mind or just want to say hello, I'd love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {/* Contact Form 
          <div className="lg:col-span-2 animate-fade-in">
            <Card className="p-8 gradient-card shadow-soft">
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-2">Send a Message</h2>
                <p className="text-muted-foreground">
                  Fill out the form below and I'll get back to you as soon as possible.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                      required
                      className="transition-smooth focus:shadow-soft"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your.email@example.com"
                      required
                      className="transition-smooth focus:shadow-soft"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="What's this about?"
                    required
                    className="transition-smooth focus:shadow-soft"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project or just say hello..."
                    rows={6}
                    required
                    className="transition-smooth focus:shadow-soft resize-none"
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full gradient-primary shadow-glow transition-smooth hover:scale-105"
                >
                  <Send className="mr-2 h-4 w-4" />
                  Send Message
                </Button>
              </form>
            </Card>
          </div>*/}

          {/* Contact Information */}
          <div className="space-y-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            {/* Contact Info */}
            <Card className="p-6 gradient-card shadow-soft">
              <h3 className="text-xl font-bold text-foreground mb-6">Contact Information</h3>
              <div className="space-y-4">
                {contactInfo.map((info) => (
                  <a
                    key={info.label}
                    href={info.href}
                    className="flex items-start gap-4 p-3 rounded-lg transition-smooth hover:bg-accent/50 group"
                  >
                    <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-smooth">
                      <info.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="font-medium text-foreground">{info.label}</div>
                      <div className="text-primary font-medium text-sm">{info.value}</div>
                      <div className="text-muted-foreground text-xs">{info.description}</div>
                    </div>
                  </a>
                ))}
              </div>
            </Card>

            {/* Social Links */}
            <Card className="p-6 gradient-card shadow-soft">
              <h3 className="text-xl font-bold text-foreground mb-6">Connect on Social</h3>
              <div className="space-y-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    className="flex items-center gap-4 p-3 rounded-lg transition-smooth hover:bg-accent/50 group"
                  >
                    <div className={`p-2 bg-muted rounded-lg transition-smooth ${social.color}`}>
                      <social.icon className="h-5 w-5" />
                    </div>
                    <div className="flex-1">
                      <div className="font-medium text-foreground">{social.label}</div>
                      <div className="text-muted-foreground text-sm">{social.username}</div>
                    </div>
                  </a>
                ))}
              </div>
            </Card>

            {/* Quick Response 
            <Card className="p-6 gradient-card shadow-soft">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-bold text-foreground mb-2">Quick Response</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  I typically respond to all inquiries within 24 hours. For urgent matters, 
                  feel free to call or text me directly.
                </p>
              </div>
            </Card>*/}
          </div>
        </div>

        {/* FAQ Section 
        <div className="mt-20 text-center animate-fade-in">
          <Card className="p-8 gradient-card shadow-soft max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-6">
              Frequently Asked Questions
            </h3>
            <div className="grid md:grid-cols-2 gap-6 text-left">
              {[
                {
                  question: "What's your typical response time?",
                  answer: "I respond to all inquiries within 24 hours, usually much sooner."
                },
                {
                  question: "Do you work on freelance projects?",
                  answer: "Yes! I'm open to freelance work and consulting opportunities."
                },
                {
                  question: "What's your preferred communication method?",
                  answer: "Email works best for detailed discussions, but I'm flexible."
                },
                {
                  question: "Are you available for full-time roles?",
                  answer: "I'm always open to discussing interesting full-time opportunities."
                }
              ].map((faq, index) => (
                <div key={index} className="p-4 rounded-lg border border-border/50">
                  <h4 className="font-semibold text-foreground mb-2">{faq.question}</h4>
                  <p className="text-muted-foreground text-sm">{faq.answer}</p>
                </div>
              ))}
            </div>
          </Card>
        </div>*/}
      </div>
    </div>
  );
};

export default Contact;