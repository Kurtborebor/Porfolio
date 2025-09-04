import { useState } from "react";
import { ExternalLink, Eye } from "lucide-react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Card } from "./ui/card";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Portfolio() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filters = ["All", "Branding", "Print", "Digital"];

  const projects = [
    {
      id: 1,
    title: "Modern Tech Startup Branding",
    category: "Branding",
    description: "Complete brand identity system for an innovative tech startup including logo, color palette, and brand guidelines.",
    image: "https://images.unsplash.com/photo-1757012737158-896447c3c4ba?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // 🔗 Replace with your Unsplash photo link
    tags: ["Logo Design", "Brand Identity", "Style Guide"],
    liveLink: "https://drive.google.com/drive/folders/1N0IiqlKLmNx1gVbAB6axldwQ96DvfSgV?usp=sharing"
    },
    {
      id: 2,
  title: "Creative Corporate Brochure",
  category: "Print",
  description: "A professional tri-fold brochure designed for a corporate business, combining clean layouts, compelling visuals, and concise content to effectively communicate services and brand identity.",
  image: "https://images.unsplash.com/photo-1757014110554-4b0bb8af3022?q=80&w=1121&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // replace with your brochure photo link
  tags: ["Print Design", "Layout", "Corporate Branding"],
  liveLink: "https://drive.google.com/drive/folders/1CgWvPoD_KgKVBjng3umgBsmzuSAxIJ48?usp=sharing"
    },
    {
      id: 3,
  title: "Creative Apparel Mockups",
  category: "Digital",
  description: "High-quality T-shirt mockups created to visualize branding applications in both casual and professional contexts.",
  image: "https://images.unsplash.com/photo-1757016039260-9652f62d8b96?q=80&w=1070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // replace with your T-shirt photo link
  tags: ["Apparel Design", "Mockups", "Brand Identity"],
  liveLink: "https://drive.google.com/drive/folders/13A7VJEHJcmCvv4o4dtWpndeK4rZT2Cuz?usp=sharing"
    },
    {
      id: 4,
  title: "Signature Business Logo",
  category: "Branding",
  description: "Crafted with simplicity and precision, this business logo communicates professionalism and adaptability for modern enterprises.",
  image: "https://images.unsplash.com/photo-1757015395951-f428f4b153ed?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  tags: ["Logo Design", "Brand Identity", "Corporate Branding"],
  liveLink: "https://drive.google.com/drive/folders/1z2djXzd_sqHSNNbXCjJINBZwm_SeTxBx?usp=sharing"
    },
    {
     id: 5,
  title: "Engaging Social Media Business Ad",
  category: "Digital",
  description: "A tailored social media advertisement designed to promote business services with eye-catching visuals and concise messaging.",
  image: "https://images.unsplash.com/photo-1757016927717-5ea8df772b35?q=80&w=715&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // replace with your social media ad photo link
  tags: ["Social Media", "Digital Marketing", "Ad Design"],
  liveLink: "https://drive.google.com/drive/folders/1P-COSDb52GhJGWIK9z6KTanM-qsjn_Dx?usp=sharing"
    },
    {
      id: 6,
  title: "Stylized Album Artwork",
  category: "Digital",
  description: "Album design focused on translating sound into visuals, creating a strong and memorable identity for the artist.",
  image: "https://images.unsplash.com/photo-1757016225390-a0a74d363ca8?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // replace with your album cover photo link
  tags: ["Album Art", "Graphic Design", "Visual Identity"],
  liveLink: "https://drive.google.com/file/d/1bylEIpuEgrRgMMbzTWTB2eBQ8x9SkhRO/view?usp=sharing"
    },
    {
  id: 7,
  title: "3D Rendered Product Design",
  category: "Digital",
  description: "High-quality 3D product renders showcasing realistic textures, lighting, and perspectives to help brands visualize their products before production.",
  image: "https://images.unsplash.com/photo-1757018201024-7ebdee03a3c4?q=80&w=1331&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // replace with your 3D render image link
  tags: ["3D Design", "Product Visualization", "Rendering"],
  liveLink: "https://drive.google.com/drive/folders/1s2vCgU9y0Thya9Rs-rSb4Ro_o7ReLHXN?usp=sharing"
}
  ];

  const filteredProjects = activeFilter === "All" 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="portfolio" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-6 mb-16">
          <h2 className="text-3xl md:text-4xl font-medium">Featured Work</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A curated selection of projects that showcase my design process, 
            problem-solving abilities, and attention to detail.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filters.map((filter) => (
            <Button
              key={filter}
              variant={activeFilter === filter ? "default" : "outline"}
              onClick={() => setActiveFilter(filter)}
              className="rounded-full"
            >
              {filter}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <Card key={project.id} className="group overflow-hidden border-0 shadow-sm hover:shadow-md transition-all duration-300">
              <div className="relative overflow-hidden">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
  <a 
    href={project.image} 
    target="_blank" 
    rel="noopener noreferrer"
  >
    <Button size="sm" variant="secondary">
      <Eye className="h-4 w-4 mr-2" />
      View
    </Button>
  </a>
 <a 
  href={project.liveLink} 
  target="_blank" 
  rel="noopener noreferrer"
>
  <Button size="sm" variant="secondary">
    <ExternalLink className="h-4 w-4 mr-2" />
    Live
  </Button>
</a>
</div>
              </div>
              
              <div className="p-6 space-y-4">
                <div>
                  <h3 className="font-medium mb-2">{project.title}</h3>
                  <p className="text-sm text-muted-foreground">{project.description}</p>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}