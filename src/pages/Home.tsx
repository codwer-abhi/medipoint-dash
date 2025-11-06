import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Clock, Shield, Stethoscope, Phone, Calendar, Heart } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import heroImage from "@/assets/hospital-hero.jpg";

const Home = () => {
  const services = [
    {
      icon: Clock,
      title: "24/7 Emergency Care",
      description: "Round-the-clock emergency medical services with expert doctors",
    },
    {
      icon: Stethoscope,
      title: "Expert Diagnostics",
      description: "Advanced diagnostic facilities with cutting-edge technology",
    },
    {
      icon: Calendar,
      title: "Easy Appointment Booking",
      description: "Book OPD appointments and tests online with just a few clicks",
    },
    {
      icon: Heart,
      title: "Specialized Departments",
      description: "Comprehensive care across multiple specialties",
    },
  ];

  const departments = [
    "Cardiology",
    "Neurology",
    "Orthopedics",
    "Pediatrics",
    "Oncology",
    "Radiology",
    "Pathology",
    "General Medicine",
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={heroImage}
            alt="Modern hospital building"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70" />
        </div>

        <div className="container mx-auto px-4 z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Your Health, Our Priority
          </h1>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Experience world-class healthcare services with compassionate care from our expert medical team
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/booking">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 shadow-lg">
                Book Appointment
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="bg-transparent text-white border-white hover:bg-white/10">
                <Phone className="mr-2 h-4 w-4" />
                Emergency: 1800-123-4567
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gradient-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Key Services
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Comprehensive healthcare solutions designed to meet all your medical needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card key={index} className="hover:shadow-primary transition-all duration-300">
                  <CardContent className="pt-6">
                    <div className="bg-primary-light rounded-full p-4 w-fit mb-4">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                    <p className="text-muted-foreground">{service.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Departments Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Departments
            </h2>
            <p className="text-muted-foreground">
              Expert care across multiple specialties
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {departments.map((dept, index) => (
              <Card key={index} className="text-center hover:shadow-md transition-all">
                <CardContent className="py-6">
                  <Shield className="h-8 w-8 text-primary mx-auto mb-2" />
                  <p className="font-medium">{dept}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Take Care of Your Health?
          </h2>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">
            Book your OPD appointment or diagnostic test online and get confirmation instantly
          </p>
          <Link to="/booking">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90">
              Book Now
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
