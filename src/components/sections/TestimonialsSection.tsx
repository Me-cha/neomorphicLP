type CustomCardProps = {
  name: string;
  role: string;
  image: string;
  content: string;
};

const testimonials = [
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
];

const CustomCard = ({ name, role, image, content }: CustomCardProps) => {
  return (
    <div className="relative p-6 shadow-lg bg-black bg-opacity-20 rounded-full animate-float-up w-96">
      {/* Gradient Border */}
      <div
        className="absolute inset-0 rounded-full border-4 border-transparent"
        style={{
          background: "linear-gradient(to right, #a855f7, #ec4899, #3b82f6)",
          mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          WebkitMask:
            "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          maskComposite: "exclude",
          WebkitMaskComposite: "xor",
        }}
      />
      {/* Image */}
      <img
        src={image}
        alt="Profile"
        className="absolute top-0 left-2 w-16 h-16 rounded-full border-4 border-white shadow z-10"
      />
      {/* Card Content */}
      <div className="relative z-10 text-center">
        <h2 className="text-xl font-semibold text-white">{name}</h2>
        <p className="text-sm text-gray-300">{role}</p>
        <p className="mt-4 text-gray-300">{content}</p>
      </div>
    </div>
  );
};

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Stories</h2>
          <p className="text-muted-foreground">
            Hear from our satisfied clients
          </p>
        </div>
        <div className="space-y-4">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`animate-float-up`}
              style={{
                animationDelay: `${index * 0.5}s`, // Staggered delay
              }}
            >
              <CustomCard
                name={testimonial.name}
                role={testimonial.role}
                image={testimonial.image}
                content={testimonial.content}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
