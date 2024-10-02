import { Button } from "@/components/ui/button";
import {
  ChevronDown,
  Star,
  Users,
  Trophy,
  TrendingUp,
  CheckCircle,
} from "lucide-react";

export default function FitnessLandingPageFunnel() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section with Video */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <video
          className="absolute w-auto min-w-full min-h-full max-w-none"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/placeholder-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="relative z-10 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Transform Your Body, Transform Your Life
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Join thousands achieving their fitness goals with our revolutionary
            program
          </p>
          <Button size="lg">Start Your Fitness Journey</Button>
        </div>
        <ChevronDown
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce"
          size={32}
        />
      </section>

      {/* Social Proof Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Trusted by Fitness Enthusiasts
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <Users className="w-12 h-12 mx-auto mb-4 text-primary" />
              <p className="text-2xl font-bold">100,000+</p>
              <p className="text-gray-600">Active Members</p>
            </div>
            <div>
              <Trophy className="w-12 h-12 mx-auto mb-4 text-primary" />
              <p className="text-2xl font-bold">500+</p>
              <p className="text-gray-600">Fitness Challenges Completed</p>
            </div>
            <div>
              <TrendingUp className="w-12 h-12 mx-auto mb-4 text-primary" />
              <p className="text-2xl font-bold">2 Million+</p>
              <p className="text-gray-600">Pounds Lost</p>
            </div>
            <div>
              <Star className="w-12 h-12 mx-auto mb-4 text-primary" />
              <p className="text-2xl font-bold">4.9/5</p>
              <p className="text-gray-600">Average Rating</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Success Stories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                role: "Mother of 2",
                quote:
                  "I lost 30 pounds and gained so much confidence. This program changed my life!",
                image: "https://i.pravatar.cc/60?img=1",
              },
              {
                name: "Mike Thompson",
                role: "IT Professional",
                quote:
                  "The workouts are challenging but fun. I've never been in better shape!",
                image: "https://i.pravatar.cc/60?img=2",
              },
              {
                name: "Emily Chen",
                role: "College Student",
                quote:
                  "As a busy student, this program fits perfectly into my schedule. Love the results!",
                image: "https://i.pravatar.cc/60?img=3",
              },
              {
                name: "David Rodriguez",
                role: "Entrepreneur",
                quote:
                  "The nutrition guidance is top-notch. I've completely transformed my eating habits.",
                image: "https://i.pravatar.cc/60?img=4",
              },
              {
                name: "Lisa Patel",
                role: "Nurse",
                quote:
                  "I've tried many fitness programs, but this one actually helped me stick to my goals.",
                image: "https://i.pravatar.cc/60?img=5",
              },
              {
                name: "Tom Wilson",
                role: "Retiree",
                quote:
                  "It's never too late to start. At 65, I'm in the best shape of my life!",
                image: "https://i.pravatar.cc/60?img=6",
              },
            ].map((testimonial, i) => (
              <div key={i} className="bg-white p-6 rounded-lg shadow-md">
                <p className="text-gray-600 mb-4">"{testimonial.quote}"</p>
                <div className="flex items-center">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Why Choose Our Fitness Program?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Personalized Workouts",
                description:
                  "Tailored exercise plans based on your fitness level and goals",
              },
              {
                title: "Nutrition Guidance",
                description:
                  "Custom meal plans and recipes to fuel your fitness journey",
              },
              {
                title: "Expert Trainers",
                description:
                  "Access to certified fitness professionals for guidance and motivation",
              },
              {
                title: "Progress Tracking",
                description:
                  "Advanced tools to monitor your improvements and celebrate milestones",
              },
              {
                title: "Community Support",
                description:
                  "Connect with like-minded individuals for encouragement and accountability",
              },
              {
                title: "On-Demand Classes",
                description: "Stream workouts anytime, anywhere, on any device",
              },
            ].map((feature, i) => (
              <div key={i} className="flex items-start">
                <CheckCircle className="w-6 h-6 text-primary mr-2 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Q&A Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6 max-w-3xl mx-auto">
            {[
              {
                q: "How long are the workouts?",
                a: "Our workouts range from 15 to 45 minutes, designed to fit into any schedule.",
              },
              {
                q: "Do I need special equipment?",
                a: "Most workouts require minimal or no equipment, making it easy to exercise anywhere.",
              },
              {
                q: "Is this program suitable for beginners?",
                a: "We offer modifications for all fitness levels, from beginners to advanced.",
              },
              {
                q: "How soon can I expect to see results?",
                a: "While results vary, many members report noticeable changes within 4-6 weeks of consistent effort.",
              },
              {
                q: "Can I cancel my subscription at any time?",
                a: "Yes, you can cancel your subscription anytime with no hidden fees or obligations.",
              },
              {
                q: "Is there a meal plan included?",
                a: "Yes, we provide customizable meal plans to complement your fitness routine and goals.",
              },
              {
                q: "How do I track my progress?",
                a: "Our app includes tools for tracking workouts, measurements, and progress photos.",
              },
              {
                q: "Are the trainers certified?",
                a: "All our trainers are certified professionals with extensive experience in fitness and nutrition.",
              },
            ].map((item, i) => (
              <div key={i} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-2">{item.q}</h3>
                <p className="text-gray-600">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Before and After Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Real Results, Real People
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="text-center">
                <div className="relative">
                  <img
                    src={`/placeholder.svg?height=300&width=400`}
                    alt={`Before and After ${i}`}
                    className="w-full h-auto rounded-lg shadow-md"
                  />
                  <div className="absolute top-2 left-2 bg-primary text-white px-2 py-1 rounded">
                    12 Weeks
                  </div>
                </div>
                <p className="mt-4 font-semibold">
                  John D. lost 45 lbs and gained muscle
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-primary text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Transform Your Body?
          </h2>
          <p className="text-xl mb-8">
            Join thousands of satisfied members and start your fitness journey
            today!
          </p>
          <Button size="lg" variant="secondary">
            Start Your 7-Day Free Trial
          </Button>
          <p className="mt-4 text-sm">
            No credit card required. Cancel anytime.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">About Us</h3>
              <p className="text-sm">
                We're dedicated to helping you achieve your fitness goals with
                expert-designed programs and unwavering support.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="text-sm space-y-2">
                <li>
                  <a href="#" className="hover:underline">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Programs
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Testimonials
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    FAQ
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-primary">
                  Facebook
                </a>
                <a href="#" className="hover:text-primary">
                  Instagram
                </a>
                <a href="#" className="hover:text-primary">
                  Twitter
                </a>
                <a href="#" className="hover:text-primary">
                  YouTube
                </a>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-700 text-center text-sm">
            <p>
              &copy; {new Date().getFullYear()} Your Fitness Program. All rights
              reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
