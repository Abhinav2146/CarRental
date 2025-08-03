import Title from "./Title";
import assets from "../assets/assets";
import { motion } from "motion/react";

const Testimonial = () => {
  const testimonials = [
    {
      name: "Ravi M.",
      address: "Mumbai, India",
      image:
        "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200",
      review:
        "Super smooth experience! Booked a Swift for my weekend trip to Lonavala — the car was clean, well-maintained, and pickup was right on time. Will definitely rent again!",
    },
    {
      name: "Karan S.",
      address: "Bengaluru, India",
      image:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200",
      review:
        "Loved how easy the booking process was. The team was responsive on WhatsApp and even helped me choose the right car for hilly terrain. Zero hassles and great mileage!",
    },
    {
      name: "Aisha K.",
      address: "Delhi, India",
      image:
        "https://images.unsplash.com/photo-1701615004837-40d8573b6652?q=80&w=200",
      review:
        "Great service overall. The car was in excellent condition and the pricing was transparent. Just wish the pickup location was a bit closer to the metro station.",
    },
  ];

  return (
    <div className="py-28 px-6 md:px-16 lg:px-24 xl:px-44">
      <Title
        title="What Our Customers Are Saying"
        subtitle="Real reviews from real renters — discover why travelers trust us with their journeys."
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-18">
        {testimonials.map((testimonial, index) => (
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: index * 0.2, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
            key={index}
            className="bg-white p-6 rounded-xl shadow-lg max-w-xs hover:-translate-y-1 transition-all duration-500"
          >
            <div className="flex items-center gap-3">
              <img
                className="w-12 h-12 rounded-full"
                src={testimonial.image}
                alt={testimonial.name}
              />
              <div>
                <p className="text-xl">{testimonial.name}</p>
                <p className="text-gray-500">{testimonial.address}</p>
              </div>
            </div>
            <div className="flex items-center gap-1 mt-4">
              {Array(5)
                .fill(0)
                .map((_, index) => (
                  <img key={index} src={assets.star_icon} alt="star-icon" />
                ))}
            </div>
            <p className="text-gray-500 max-w-90 mt-4 font-light">
              "{testimonial.review}"
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
export default Testimonial;
