import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Globe, Award, Heart } from "lucide-react";

const About = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Alexandra Thompson",
      role: "Founder & CEO",
      bio: "With over 15 years in the travel industry, Alex founded Wanderlust Travel to share her passion for authentic, transformative journeys around the globe.",
      initials: "AT"
    },
    {
      id: 2,
      name: "Marcus Chen",
      role: "Head of Operations",
      bio: "Marcus ensures every detail of your journey is perfectly planned. His attention to detail and operational expertise guarantees seamless travel experiences.",
      initials: "MC"
    },
    {
      id: 3,
      name: "Sofia Rodriguez",
      role: "Lead Travel Curator",
      bio: "Sofia handpicks extraordinary destinations and creates unique itineraries that go beyond typical tourist experiences to reveal the true essence of each place.",
      initials: "SR"
    },
    {
      id: 4,
      name: "James Wilson",
      role: "Adventure Specialist",
      bio: "From mountain peaks to ocean depths, James designs thrilling adventures for those seeking excitement and unforgettable experiences in nature.",
      initials: "JW"
    }
  ];

  const values = [
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Global Perspective",
      description: "We believe travel broadens minds and creates global citizens who appreciate diverse cultures and perspectives."
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Authentic Experiences",
      description: "We focus on genuine, meaningful connections with local communities and authentic cultural immersion."
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Personal Service",
      description: "Every traveler is unique, and we tailor each journey to match individual interests, preferences, and dreams."
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "Excellence",
      description: "We maintain the highest standards in safety, comfort, and service to ensure every journey exceeds expectations."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-ocean text-white">
        <div className="container mx-auto px-4 text-center">
          <Badge variant="secondary" className="mb-4 bg-sand text-accent-foreground">
            About Wanderlust Travel
          </Badge>
          <h1 className="font-display text-4xl md:text-6xl font-bold mb-6">
            Crafting Extraordinary Journeys Since 2015
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            We're more than a travel company – we're your partners in discovery, dedicated to creating transformative experiences that connect you with the world's most incredible destinations and cultures.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">Our Story</h2>
              <p className="text-xl text-muted-foreground">
                Born from a passion for authentic travel experiences
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Wanderlust Travel was founded in 2015 with a simple yet profound mission: to create travel experiences that go beyond the ordinary. Our founder, Alexandra Thompson, recognized that modern travelers craved more than just sightseeing – they wanted genuine connections, cultural immersion, and transformative experiences.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  What started as a small boutique agency has grown into a trusted partner for discerning travelers worldwide. We've maintained our commitment to personalized service while expanding our reach to include some of the world's most extraordinary destinations.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Today, we're proud to have helped over 10,000 travelers discover the magic of authentic exploration, creating memories that last a lifetime and fostering a deeper understanding of our beautiful, diverse world.
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-6">
                <Card className="text-center p-6 shadow-soft border-0">
                  <CardContent className="p-0">
                    <div className="text-3xl font-bold text-ocean mb-2">10,000+</div>
                    <div className="text-muted-foreground">Happy Travelers</div>
                  </CardContent>
                </Card>
                <Card className="text-center p-6 shadow-soft border-0">
                  <CardContent className="p-0">
                    <div className="text-3xl font-bold text-ocean mb-2">50+</div>
                    <div className="text-muted-foreground">Destinations</div>
                  </CardContent>
                </Card>
                <Card className="text-center p-6 shadow-soft border-0">
                  <CardContent className="p-0">
                    <div className="text-3xl font-bold text-ocean mb-2">4.9/5</div>
                    <div className="text-muted-foreground">Average Rating</div>
                  </CardContent>
                </Card>
                <Card className="text-center p-6 shadow-soft border-0">
                  <CardContent className="p-0">
                    <div className="text-3xl font-bold text-ocean mb-2">9</div>
                    <div className="text-muted-foreground">Years Experience</div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <Card className="p-8 shadow-soft border-0">
                <CardContent className="p-0">
                  <h3 className="font-display text-2xl font-bold mb-4 text-ocean">Our Mission</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    To inspire and enable transformative travel experiences that broaden perspectives, create lasting memories, and foster meaningful connections between travelers and the diverse cultures, landscapes, and communities of our world.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="p-8 shadow-soft border-0">
                <CardContent className="p-0">
                  <h3 className="font-display text-2xl font-bold mb-4 text-ocean">Our Vision</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    To be the world's most trusted partner for authentic travel experiences, recognized for our commitment to sustainable tourism, cultural respect, and creating journeys that not only satisfy wanderlust but also contribute positively to the destinations we visit.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">Our Values</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The principles that guide every journey we create
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center p-6 shadow-soft hover:shadow-medium transition-shadow border-0">
                <CardContent className="p-0">
                  <div className="w-16 h-16 bg-gradient-ocean rounded-full flex items-center justify-center text-white mx-auto mb-4">
                    {value.icon}
                  </div>
                  <h3 className="font-display text-xl font-semibold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">Meet Our Team</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The passionate travel experts behind your extraordinary journeys
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member) => (
              <Card key={member.id} className="text-center shadow-soft hover:shadow-medium transition-shadow border-0">
                <CardContent className="p-6">
                  <div className="w-20 h-20 bg-gradient-ocean rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                    {member.initials}
                  </div>
                  <h3 className="font-display text-xl font-semibold mb-2">{member.name}</h3>
                  <p className="text-ocean font-medium mb-3">{member.role}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;