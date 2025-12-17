import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  FileText,
  Microscope,
  Heart,
  Droplets,
  Scan,
  Activity,
  Brain,
  Bone,
  Eye,
  Stethoscope,
  Clock,
  CheckCircle2,
  Home,
  Shield,
  Zap,
  ArrowRight,
} from "lucide-react";

const Tests = () => {
  const navigate = useNavigate();
  const [tests, setTests] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchTests = async () => {
      const { data, error } = await supabase.from("tests").select("*").order("category");

      if (error) {
        toast.error("Failed to load tests");
      } else {
        setTests(data || []);
      }
      setIsLoading(false);
    };

    fetchTests();
  }, []);

  const groupedTests = tests.reduce((acc, test) => {
    const category = test.category || "Other";
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(test);
    return acc;
  }, {} as Record<string, any[]>);

  const categoryIcons: Record<string, any> = {
    "Blood Tests": Droplets,
    "Imaging": Scan,
    "Cardiac": Heart,
    "Neurology": Brain,
    "Orthopedic": Bone,
    "Eye Care": Eye,
    "General": Stethoscope,
    "Other": FileText,
  };

  const popularPackages = [
    {
      name: "Full Body Checkup",
      tests: 75,
      price: "₹2,999",
      original: "₹5,999",
      discount: "50% OFF",
      includes: ["CBC", "Lipid Profile", "Liver Function", "Kidney Function", "Thyroid Profile", "Diabetes Panel"],
    },
    {
      name: "Cardiac Health Package",
      tests: 35,
      price: "₹1,999",
      original: "₹3,999",
      discount: "50% OFF",
      includes: ["ECG", "Lipid Profile", "2D Echo", "TMT", "Cardiac Enzymes"],
    },
    {
      name: "Diabetes Care Package",
      tests: 25,
      price: "₹999",
      original: "₹1,999",
      discount: "50% OFF",
      includes: ["Fasting Blood Sugar", "HbA1c", "Lipid Profile", "Kidney Function", "Urine Analysis"],
    },
  ];

  const features = [
    { icon: Clock, title: "Quick Results", desc: "Get reports within 24-48 hours" },
    { icon: Home, title: "Home Collection", desc: "Free sample collection at your doorstep" },
    { icon: Shield, title: "100% Accurate", desc: "NABL & ISO certified labs" },
    { icon: Zap, title: "Digital Reports", desc: "Access reports online anytime" },
  ];

  const organTests = [
    { icon: Heart, name: "Heart", tests: ["ECG", "2D Echo", "Lipid Profile"] },
    { icon: Brain, name: "Brain", tests: ["MRI Brain", "CT Scan", "EEG"] },
    { icon: Bone, name: "Bones", tests: ["X-Ray", "DEXA Scan", "Calcium Test"] },
    { icon: Eye, name: "Eyes", tests: ["Vision Test", "OCT", "Eye Pressure"] },
    { icon: Activity, name: "Liver", tests: ["LFT", "Liver Ultrasound", "Fibroscan"] },
    { icon: Droplets, name: "Kidney", tests: ["KFT", "Urine Analysis", "Creatinine"] },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-hero overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,hsl(211_100%_50%/0.2),transparent_50%)]" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center text-white">
            <Badge className="bg-white/20 text-white border-white/30 mb-4 animate-fade-in">
              🔬 Advanced Diagnostics
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in" style={{ animationDelay: "0.1s" }}>
              Tests & Diagnostic Services
            </h1>
            <p className="text-white/80 max-w-2xl mx-auto mb-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              Comprehensive range of diagnostic tests with accurate results. Book online and get doorstep sample collection.
            </p>
            <div className="flex flex-wrap justify-center gap-4 animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <Button
                size="lg"
                className="bg-white text-primary hover:bg-white/90"
                onClick={() => navigate("/booking")}
              >
                Book a Test Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-12 bg-background border-b">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex items-center gap-4 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Packages */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">Popular Packages</Badge>
            <h2 className="text-3xl font-bold text-foreground mb-4">Health Checkup Packages</h2>
            <p className="text-muted-foreground">Comprehensive health packages at discounted prices</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {popularPackages.map((pkg, index) => (
              <Card
                key={index}
                className="relative overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-2 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="absolute top-4 right-4">
                  <Badge className="bg-destructive text-destructive-foreground">{pkg.discount}</Badge>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{pkg.name}</CardTitle>
                  <CardDescription>Includes {pkg.tests} tests</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-baseline gap-2 mb-4">
                    <span className="text-3xl font-bold text-primary">{pkg.price}</span>
                    <span className="text-muted-foreground line-through">{pkg.original}</span>
                  </div>
                  <div className="space-y-2">
                    {pkg.includes.map((test, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm">
                        <CheckCircle2 className="h-4 w-4 text-success" />
                        <span>{test}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
                <CardFooter>
                  <Button
                    className="w-full bg-gradient-primary"
                    onClick={() => navigate("/booking")}
                  >
                    Book Package
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Organ-wise Tests */}
      <section className="py-16 bg-gradient-dark text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="bg-white/20 text-white border-white/30 mb-4">Organ Health</Badge>
            <h2 className="text-3xl font-bold mb-4">Tests by Organ</h2>
            <p className="text-white/70">Targeted diagnostic tests for specific organs</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {organTests.map((organ, index) => (
              <Card
                key={index}
                className="bg-white/10 border-white/20 hover:bg-white/20 transition-all cursor-pointer group animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => navigate("/booking")}
              >
                <CardContent className="p-6 text-center">
                  <div className="mx-auto w-14 h-14 rounded-full bg-white/20 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform animate-float" style={{ animationDelay: `${index * 0.2}s` }}>
                    <organ.icon className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="font-semibold text-white mb-2">{organ.name}</h3>
                  <div className="text-white/60 text-xs">
                    {organ.tests.slice(0, 2).join(", ")}...
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* All Tests */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">All Tests</Badge>
            <h2 className="text-3xl font-bold text-foreground mb-4">Browse All Diagnostic Tests</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Choose from our comprehensive range of diagnostic tests and services
            </p>
          </div>

          {isLoading ? (
            <div className="text-center py-12">
              <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-primary border-r-transparent" />
              <p className="text-muted-foreground mt-4">Loading tests...</p>
            </div>
          ) : (
            <div className="space-y-12">
              {Object.entries(groupedTests).map(([category, categoryTests]: [string, any[]], catIndex) => {
                const IconComponent = categoryIcons[category] || FileText;
                return (
                  <div key={category} className="animate-fade-in" style={{ animationDelay: `${catIndex * 0.1}s` }}>
                    <div className="flex items-center gap-3 mb-6">
                      <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                        <IconComponent className="h-5 w-5 text-primary" />
                      </div>
                      <h2 className="text-2xl font-bold text-foreground">{category}</h2>
                      <Badge variant="secondary">{categoryTests.length} tests</Badge>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {categoryTests.map((test, index) => (
                        <Card
                          key={test.id}
                          className="hover:shadow-primary transition-all duration-300 hover:-translate-y-1 animate-slide-up"
                          style={{ animationDelay: `${index * 0.05}s` }}
                        >
                          <CardHeader>
                            <div className="flex items-start justify-between">
                              <CardTitle className="text-lg">{test.name}</CardTitle>
                              <Badge variant="secondary">{test.category}</Badge>
                            </div>
                            <CardDescription className="text-primary font-semibold text-lg">
                              {test.price_range}
                            </CardDescription>
                          </CardHeader>
                          <CardContent>
                            <p className="text-sm text-muted-foreground">{test.description}</p>
                          </CardContent>
                          <CardFooter className="flex gap-2">
                            <Button
                              onClick={() => navigate("/booking")}
                              className="flex-1 bg-gradient-primary"
                            >
                              Book Now
                            </Button>
                            <Button variant="outline" size="icon">
                              <Home className="h-4 w-4" />
                            </Button>
                          </CardFooter>
                        </Card>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          {/* Contact Card */}
          <div className="mt-16">
            <Card className="bg-gradient-primary text-white border-0">
              <CardContent className="py-12 text-center">
                <Microscope className="h-16 w-16 mx-auto mb-6 animate-float" />
                <h3 className="text-2xl font-bold mb-4">Can't find what you're looking for?</h3>
                <p className="text-white/80 mb-6 max-w-md mx-auto">
                  Contact us to inquire about additional tests and services. Our team is here to help.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Button
                    size="lg"
                    className="bg-white text-primary hover:bg-white/90"
                    onClick={() => navigate("/contact")}
                  >
                    Contact Us
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-white/50 text-white hover:bg-white/10"
                    onClick={() => navigate("/booking")}
                  >
                    Book Custom Test
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Tests;
