import { useEffect, useState, useRef } from "react";
import { Avatar } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";

type Testimonial = {
  name: string;
  role: string;
  image: string;
  content: string;
};

const testimonials: Testimonial[] = [
  {
    name: "Rahul Sharma",
    role: "Startup Founder",
    image:
      "https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=400&h=400&q=80",
    content:
      "Pivot-Profit's strategic guidance helped me make informed investment decisions that aligned perfectly with my business goals.",
  },
  {
    name: "Priya Patel",
    role: "Tech Professional",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&q=80",
    content:
      "Their modern approach to investment consulting resonates with my generation. The digital tools and clear communication make investing accessible.",
  },
  {
    name: "Arun Kumar",
    role: "Digital Creator",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&q=80",
    content:
      "The team's expertise in emerging markets and digital assets has been invaluable for my portfolio diversification strategy.",
  },
  {
    name: "Samantha Lee",
    role: "Small Business Owner",
    image:
      "https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=400&h=400&q=80",
    content:
      "Pivot-Profit has completely changed the way I view financial planning. Their personalized solutions were exactly what I needed.",
  },
  {
    name: "Ankit Desai",
    role: "Freelance Consultant",
    image:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&h=400&q=80",
    content:
      "Thanks to their expert advice, I’ve seen remarkable growth in my savings and investments over the past year.",
  },
  {
    name: "Emily Clark",
    role: "Marketing Executive",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&q=80",
    content:
      "The team made complex financial concepts easy to understand and implement. I feel confident about my financial future now.",
  },
  {
    name: "Vikram Singh",
    role: "Entrepreneur",
    image:
      "https://images.unsplash.com/photo-1625845693670-68aa2b23421a?w=400&h=400&q=80",
    content:
      "The insights from Pivot-Profit have been instrumental in guiding the financial decisions for my startup.",
  },
  {
    name: "Sophia Brown",
    role: "Software Developer",
    image:
      "https://images.unsplash.com/photo-1542206395-9feb3edaa68d?w=400&h=400&q=80",
    content:
      "Their professional yet friendly approach made the process of financial planning a pleasure. I highly recommend them!",
  },
  {
    name: "Rohan Mehta",
    role: "Investor",
    image:
      "https://images.unsplash.com/photo-1502767089025-6572583495e4?w=400&h=400&q=80",
    content:
      "They introduced me to investment opportunities that I hadn’t even considered. My portfolio has never been more robust.",
  },
  {
    name: "Isabella Garcia",
    role: "Creative Designer",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&q=80",
    content:
      "Their tailored approach to consulting is exactly what I was looking for. They truly understand individual needs.",
  },
];

type TestimonialCardProps = {
  testimonial: Testimonial;
  style: React.CSSProperties;
  uniqueId: string;
};

const TestimonialCard = ({
  testimonial,
  style,
  uniqueId,
}: TestimonialCardProps) => (
  <Card
    key={uniqueId}
    className="testimonial-float group p-6 max-w-sm backdrop-blur-sm border border-white/10 bg-black/30 hover:border-white/20 transition-all duration-500"
    style={style}
  >
    <div className="flex items-center gap-4 mb-4">
      <Avatar className="h-12 w-12 border-2 border-primary ring-2 ring-primary/20">
        <img
          src={testimonial.image}
          alt={testimonial.name}
          className="object-cover"
        />
      </Avatar>
      <div>
        <h4 className="font-semibold text-white group-hover:text-primary transition-colors duration-300">
          {testimonial.name}
        </h4>
        <p className="text-sm text-white/60">{testimonial.role}</p>
      </div>
    </div>
    <p className="text-white/80 text-sm leading-relaxed group-hover:text-white transition-colors duration-300">
      {testimonial.content}
    </p>
    <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg" />
  </Card>
);

export function TestimonialsSection() {
  const [cards, setCards] = useState<JSX.Element[]>([]);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const cardIdCounter = useRef(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const generateUniqueId = () => {
    cardIdCounter.current += 1;
    return `testimonial-${cardIdCounter.current}`;
  };

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const createCard = () => {
      const testimonial =
        testimonials[Math.floor(Math.random() * testimonials.length)];
      const containerWidth = containerRef.current?.offsetWidth || screenWidth;
      const xOffset = Math.random() * (containerWidth - 200); // Adjust based on card width
      const uniqueId = generateUniqueId();

      return (
        <TestimonialCard
          key={uniqueId}
          uniqueId={uniqueId}
          testimonial={testimonial}
          style={
            {
              "--x-offset": `${xOffset}px`,
              "--delay": `${Math.random() * 2}s`,
              position: "absolute",
              left: 0,
              transform: `translateX(${xOffset}px)`,
              bottom: "-100px",
              opacity: 0,
              animation: "floatUp 15s ease-in-out forwards",
            } as React.CSSProperties
          }
        />
      );
    };

    // Initial cards spread across the bottom
    const initialCards = Array.from({ length: 3 }, createCard);
    setCards(initialCards);

    // Add new cards periodically
    const interval = setInterval(() => {
      setCards((prevCards) => {
        const newCards = [...prevCards, createCard()];
        // Keep last 8 cards to manage performance
        return newCards.slice(-8);
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [screenWidth]);

  return (
    <section
      id="testimonials"
      className="py-24 relative overflow-hidden bg-gradient-to-b from-muted/50 to-background"
    >
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 bg-clip-text text-transparent">
            Client Stories
          </h2>
          <p className="text-muted-foreground">
            Real experiences from our valued clients
          </p>
        </div>

        <div ref={containerRef} className="relative" style={{ height: "40vh" }}>
          {cards}
        </div>
      </div>
    </section>
  );
}
