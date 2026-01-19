import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
{
  quote: "RMC transformed our research strategy with their strong expertise in data analysis and publication support. Their ethical and quality-focused approach helped our team publish in high-impact journals.",
  author: "Dr. Jonathan Miller",
  role: "Senior Research Scientist",
  organization: "Healthcare Innovation Lab, Boston, USA",
},
{
  quote: "As a PhD researcher, I struggled with thesis structure and data interpretation. RMC’s clear and structured guidance helped me gain complete clarity, and I successfully defended my dissertation with confidence.",
  author: "Emily Carter",
  role: "PhD Researcher",
  organization: "Department of Life Sciences, USA",
},
{
  quote: "Collaborating with RMC for our startup’s market research was a turning point. Their data-driven insights strengthened our investor pitch and played a key role in securing funding.",
  author: "Michael Thompson",
  role: "Founder & CEO",
  organization: "HealthTech Startup, San Francisco, USA",
},
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-secondary">
      <div className="container-custom">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-primary text-sm font-semibold uppercase tracking-wider mb-3">
            Testimonials
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
            What Our Clients Say
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-background rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Quote className="w-10 h-10 text-primary/20 mb-4" />
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                "{testimonial.quote}"
              </p>
              <div className="border-t border-foreground/10 pt-4">
                <p className="font-semibold text-foreground">{testimonial.author}</p>
                <p className="text-xs text-muted-foreground mt-1">{testimonial.role}</p>
                <p className="text-xs text-primary font-medium mt-1">
                  {testimonial.organization}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
