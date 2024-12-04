import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const testimonials = [
  {
    name: "Rahul Sharma",
    role: "Startup Founder",
    image: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=400&h=400&q=80",
    content: "Pivot-Profit's strategic guidance helped me make informed investment decisions that aligned perfectly with my business goals."
  },
  {
    name: "Priya Patel",
    role: "Tech Professional",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&q=80",
    content: "Their modern approach to investment consulting resonates with my generation. The digital tools and clear communication make investing accessible."
  },
  {
    name: "Arun Kumar",
    role: "Digital Creator",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&q=80",
    content: "The team's expertise in emerging markets and digital assets has been invaluable for my portfolio diversification strategy."
  }
];

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Client Success Stories</h2>
          <p className="text-muted-foreground">Hear from our satisfied clients</p>
        </div>

        <Carousel className="max-w-4xl mx-auto">
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index}>
                <Card className="bg-card/50 backdrop-blur">
                  <CardContent className="p-6">
                    <div className="flex flex-col items-center text-center">
                      <Avatar className="h-20 w-20 mb-4">
                        <AvatarImage src={testimonial.image} alt={testimonial.name} />
                        <AvatarFallback>{testimonial.name[0]}</AvatarFallback>
                      </Avatar>
                      <blockquote className="text-lg mb-4">{testimonial.content}</blockquote>
                      <div className="font-semibold">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
}