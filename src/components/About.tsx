import { Award, Users, Clock, Target } from "lucide-react";
import { Card } from "./ui/card";

export function About() {
  const stats = [
    {
      icon: <Award className="h-8 w-8 text-primary" />,
      value: "50+",
      label: "Projects Completed"
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      value: "30+",
      label: "Happy Clients"
    },
    {
      icon: <Clock className="h-8 w-8 text-primary" />,
      value: "3+",
      label: "Years Experience"
    },
    {
      icon: <Target className="h-8 w-8 text-primary" />,
      value: "100%",
      label: "Dedication"
    }
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-medium">
                Hello, I'm Kurt Christian
              </h2>
              <div className="space-y-4">
                <p className="text-muted-foreground">
                  A passionate graphic designer with over 3 years of experience creating 
                  compelling visual identities and user experiences. I believe great design 
                  is not just about making things look beautiful – it's about solving problems 
                  and communicating messages effectively.
                </p>
                <p className="text-muted-foreground">
                  My approach combines strategic thinking with creative execution, ensuring 
                  every project not only looks stunning but also serves its intended purpose. 
                  I specialize in brand identity, digital design, and print materials.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-xl font-medium">My Design Philosophy</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                  <span>Simplicity is the ultimate sophistication</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                  <span>Every design decision should have a purpose</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                  <span>User experience drives visual choices</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                  <span>Collaboration leads to better outcomes</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <Card key={index} className="p-6 text-center space-y-4">
                <div className="flex justify-center">
                  {stat.icon}
                </div>
                <div className="space-y-2">
                  <div className="text-2xl font-medium">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}