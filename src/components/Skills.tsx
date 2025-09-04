import { Progress } from "./ui/progress";
import { Card } from "./ui/card";
import { Palette, Monitor, Printer, Zap, Users, Lightbulb } from "lucide-react";

export function Skills() {
  const technicalSkills = [
    { name: "Adobe Creative Suite", level: 95 },
    { name: "Figma", level: 90 },
    { name: "Blender", level: 85 },
    { name: "Adobe After Effects", level: 80 },
    { name: "HTML/CSS", level: 75 },
    { name: "Typography", level: 95 }
  ];

  const designAreas = [
    {
      icon: <Palette className="h-8 w-8 text-primary" />,
      title: "Brand Identity",
      description: "Creating cohesive visual identities that capture brand essence and resonate with target audiences."
    },
    {
      icon: <Monitor className="h-8 w-8 text-primary" />,
      title: "Digital Design",
      description: "Designing intuitive user interfaces and engaging digital experiences across web and mobile platforms."
    },
    {
      icon: <Printer className="h-8 w-8 text-primary" />,
      title: "Print Design",
      description: "Crafting impactful print materials from business cards to large format displays with attention to production details."
    },
    {
      icon: <Zap className="h-8 w-8 text-primary" />,
      title: "3D Modeling & Rendering",
      description: "Delivering realistic and visually engaging 3D models and renderings that bring concepts, products, and designs to life."
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "Client-Centered Design",
      description: "Creating tailored design solutions that align with each client’s vision, goals, and audience to ensure impactful results."
    },
    {
      icon: <Lightbulb className="h-8 w-8 text-primary" />,
      title: "Creative Strategy",
      description: "Developing creative concepts that align with business goals and effectively communicate brand messages."
    }
  ];

  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-6 mb-16">
          <h2 className="text-3xl md:text-4xl font-medium">Skills & Expertise</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive skill set spanning creative design, technical implementation, 
            and strategic thinking to deliver exceptional design solutions.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Technical Skills */}
          <div className="space-y-8">
            <h3 className="text-xl font-medium">Technical Proficiency</h3>
            <div className="space-y-6">
              {technicalSkills.map((skill) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-sm text-muted-foreground">{skill.level}%</span>
                  </div>
                  <Progress value={skill.level} className="h-2" />
                </div>
              ))}
            </div>
          </div>

          {/* Design Areas */}
          <div className="space-y-8">
            <h3 className="text-xl font-medium">Design Specializations</h3>
            <div className="grid gap-6">
              {designAreas.map((area, index) => (
                <Card key={index} className="p-6 border-0 shadow-sm">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      {area.icon}
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-medium">{area.title}</h4>
                      <p className="text-sm text-muted-foreground">{area.description}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Soft Skills */}
        <div className="mt-16 text-center">
          <h3 className="text-xl font-medium mb-8">Additional Strengths</h3>
          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {[
              "Creative Problem Solving",
              "Project Management",
              "Client Communication",
              "Team Collaboration",
              "Deadline Management",
              "Design Research",
              "Trend Analysis",
              "Quality Assurance"
            ].map((skill) => (
              <div key={skill} className="px-4 py-2 bg-accent rounded-full text-sm font-medium">
                {skill}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}