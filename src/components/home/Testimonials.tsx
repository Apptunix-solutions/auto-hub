import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Michael Rodriguez",
      role: "Business Owner",
      content: "AutoCare Pro has transformed how I manage my fleet. The scheduling system is intuitive and the service quality is outstanding.",
      rating: 5,
      initials: "MR",
    },
    {
      name: "Sarah Chen",
      role: "Marketing Director",
      content: "I love the automated reminders! Never missed a maintenance appointment since I started using this platform.",
      rating: 5,
      initials: "SC",
    },
    {
      name: "James Wilson",
      role: "Freelancer",
      content: "The transparent pricing and detailed service history tracking give me complete peace of mind. Highly recommend!",
      rating: 5,
      initials: "JW",
    },
  ];

  return (
    <section className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">What Our Customers Say</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Join thousands of satisfied customers who trust us with their vehicles
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="border-2 hover:shadow-lg hover:border-accent/50 transition-smooth bg-card/50 backdrop-blur-sm"
            >
              <CardContent className="pt-6 space-y-4">
                <div className="flex gap-1">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-warning text-warning" />
                  ))}
                </div>
                <p className="text-muted-foreground italic">"{testimonial.content}"</p>
                <div className="flex items-center gap-3 pt-4 border-t">
                  <Avatar className="h-12 w-12 bg-gradient-primary">
                    <AvatarFallback className="text-primary-foreground font-semibold">
                      {testimonial.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
