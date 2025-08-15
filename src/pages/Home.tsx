import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, ArrowRight, MapPin, Users, Calendar } from "lucide-react";
import heroImage from "@/assets/hero-travel.jpg";
import mountainsImage from "@/assets/destination-mountains.jpg";
import cityImage from "@/assets/destination-city.jpg";
import tropicalImage from "@/assets/destination-tropical.jpg";

const Home = () => {
  const destinations = [
    {
      id: 1,
      name: "Swiss Alps Adventure",
      location: "Switzerland",
      image: mountainsImage,
      price: "$2,999",
      duration: "7 days",
      rating: 4.9,
      description: "Experience breathtaking mountain views and pristine alpine lakes in the heart of Switzerland.",
    },
    {
      id: 2,
      name: "Tuscan Heritage Tour",
      location: "Italy", 
      image: cityImage,
      price: "$1,899",
      duration: "5 days",
      rating: 4.8,
      description: "Discover ancient architecture, cobblestone streets, and rich cultural heritage in beautiful Tuscany.",
    },
    {
      id: 3,
      name: "Tropical Paradise Escape",
      location: "Maldives",
      image: tropicalImage,
      price: "$3,499",
      duration: "6 days",
      rating: 5.0,
      description: "Relax in overwater bungalows surrounded by crystal-clear lagoons and pristine coral reefs.",
    },
  ];

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      location: "New York, USA",
      rating: 5,
      text: "The Swiss Alps trip was absolutely incredible! The guides were knowledgeable and the scenery was breathtaking. I can't wait to book my next adventure.",
    },
    {
      id: 2,
      name: "Marco Rodriguez",
      location: "Barcelona, Spain",
      rating: 5,
      text: "Wanderlust Travel exceeded all my expectations. The attention to detail and personalized service made our Tuscan tour unforgettable.",
    },
    {
      id: 3,
      name: "Emily Chen",
      location: "Singapore",
      rating: 5,
      text: "The Maldives escape was pure paradise. From the moment we arrived until departure, everything was perfectly organized. Highly recommended!",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-hero" />
        
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="font-display text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Discover Your Next
            <span className="block text-sand">Adventure</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-2xl mx-auto leading-relaxed">
            Embark on extraordinary journeys to the world's most breathtaking destinations with our expert guides and curated experiences.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-sand text-accent-foreground hover:bg-sand/90 font-semibold px-8 py-3">
              Explore Destinations
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary font-semibold px-8 py-3">
              Watch Our Story
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Destinations */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4 text-ocean bg-sky">
              Featured Destinations
            </Badge>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4 text-foreground">
              Unforgettable Experiences Await
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              From majestic mountain peaks to pristine tropical beaches, discover our handpicked destinations that promise memories to last a lifetime.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {destinations.map((destination) => (
              <Card key={destination.id} className="group overflow-hidden shadow-medium hover:shadow-strong transition-all duration-300 border-0">
                <div className="relative overflow-hidden">
                  <img
                    src={destination.image}
                    alt={destination.name}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-sand text-accent-foreground">
                      {destination.duration}
                    </Badge>
                  </div>
                  <div className="absolute top-4 right-4">
                    <div className="flex items-center space-x-1 bg-white/90 rounded-full px-2 py-1">
                      <Star className="h-4 w-4 fill-sand text-sand" />
                      <span className="text-sm font-medium">{destination.rating}</span>
                    </div>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <div className="flex items-center text-sm text-muted-foreground mb-2">
                    <MapPin className="h-4 w-4 mr-1" />
                    {destination.location}
                  </div>
                  <h3 className="font-display text-xl font-semibold mb-3 group-hover:text-ocean transition-colors">
                    {destination.name}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {destination.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="text-2xl font-bold text-ocean">
                      {destination.price}
                    </div>
                    <Button variant="outline" size="sm" className="group-hover:bg-ocean group-hover:text-white transition-colors">
                      Learn More
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4 text-ocean bg-sky">
              What Our Travelers Say
            </Badge>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
              Stories from the Road
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Don't just take our word for it. Here's what our amazing travelers have to say about their adventures with us.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.id} className="shadow-soft hover:shadow-medium transition-shadow border-0">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-sand text-sand" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 italic">
                    "{testimonial.text}"
                  </p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full bg-gradient-ocean flex items-center justify-center text-white font-semibold mr-3">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <div className="font-semibold">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.location}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-ocean text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            Ready for Your Next Adventure?
          </h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Join thousands of travelers who have discovered the world with Wanderlust Travel. Your perfect journey is just one click away.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-sand text-accent-foreground hover:bg-sand/90 font-semibold px-8 py-3">
              Plan My Trip
              <Calendar className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary font-semibold px-8 py-3">
              <Users className="mr-2 h-5 w-5" />
              Join Our Community
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;