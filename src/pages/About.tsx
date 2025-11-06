import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Award, Users, Heart, Target } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: Award,
      title: "Excellence in Healthcare",
      description: "Accredited facilities with state-of-the-art medical equipment and technology",
    },
    {
      icon: Users,
      title: "Expert Medical Team",
      description: "Highly qualified doctors and healthcare professionals dedicated to your well-being",
    },
    {
      icon: Heart,
      title: "Patient-Centered Care",
      description: "Compassionate care tailored to each patient's unique needs",
    },
    {
      icon: Target,
      title: "Comprehensive Services",
      description: "Full spectrum of medical services from diagnostics to specialized treatments",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <div className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-primary py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              About HealthCare Plus
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Leading the way in healthcare excellence with compassion, innovation, and dedication
            </p>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-16 bg-gradient-light">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <Card className="shadow-lg">
                <CardContent className="pt-6">
                  <h2 className="text-2xl font-bold text-foreground mb-4">Our Mission</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    To provide world-class healthcare services that are accessible, affordable, and
                    compassionate. We strive to improve the health and well-being of our community
                    through excellence in medical care, education, and research.
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-lg">
                <CardContent className="pt-6">
                  <h2 className="text-2xl font-bold text-foreground mb-4">Our Vision</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    To be the most trusted healthcare provider, recognized for clinical excellence,
                    innovative treatments, and compassionate care. We envision a healthier community
                    where every individual has access to quality healthcare services.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Why Choose Us
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Committed to excellence in every aspect of healthcare delivery
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <Card key={index} className="text-center hover:shadow-primary transition-all">
                    <CardContent className="pt-6">
                      <div className="bg-primary-light rounded-full p-4 w-fit mx-auto mb-4">
                        <Icon className="h-8 w-8 text-primary" />
                      </div>
                      <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                      <p className="text-muted-foreground">{feature.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Facilities */}
        <section className="py-16 bg-secondary">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Our Facilities
              </h2>
              <p className="text-muted-foreground">
                Modern infrastructure designed for optimal patient care
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold mb-3">Advanced Diagnostics</h3>
                  <p className="text-muted-foreground">
                    Equipped with latest diagnostic equipment including MRI, CT Scan, Digital X-Ray,
                    and comprehensive laboratory services.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold mb-3">Specialized Departments</h3>
                  <p className="text-muted-foreground">
                    Multiple specialty departments including Cardiology, Neurology, Orthopedics,
                    Oncology, and more.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold mb-3">24/7 Emergency Care</h3>
                  <p className="text-muted-foreground">
                    Round-the-clock emergency services with fully equipped trauma center and
                    critical care units.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default About;
