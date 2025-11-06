import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FileText } from "lucide-react";

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

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <div className="flex-1 py-12 bg-gradient-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-4">Tests & Services</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Browse our comprehensive range of diagnostic tests and medical services
            </p>
          </div>

          {isLoading ? (
            <div className="text-center py-12">
              <p className="text-muted-foreground">Loading tests...</p>
            </div>
          ) : (
            <div className="space-y-12">
              {Object.entries(groupedTests).map(([category, categoryTests]: [string, any[]]) => (
                <div key={category}>
                  <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center">
                    <FileText className="mr-2 h-6 w-6 text-primary" />
                    {category}
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {categoryTests.map((test) => (
                      <Card key={test.id} className="hover:shadow-primary transition-all">
                        <CardHeader>
                          <div className="flex items-start justify-between">
                            <CardTitle className="text-lg">{test.name}</CardTitle>
                            <Badge variant="secondary">{test.category}</Badge>
                          </div>
                          <CardDescription className="text-primary font-semibold">
                            {test.price_range}
                          </CardDescription>
                        </CardHeader>
                        <CardContent>
                          <p className="text-sm text-muted-foreground">{test.description}</p>
                        </CardContent>
                        <CardFooter>
                          <Button
                            onClick={() => navigate("/booking")}
                            className="w-full bg-gradient-primary"
                          >
                            Book This Test
                          </Button>
                        </CardFooter>
                      </Card>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}

          <div className="mt-12 text-center">
            <Card className="max-w-3xl mx-auto bg-primary-light">
              <CardContent className="py-8">
                <h3 className="text-xl font-semibold mb-4">Can't find what you're looking for?</h3>
                <p className="text-muted-foreground mb-6">
                  Contact us to inquire about additional tests and services
                </p>
                <Button onClick={() => navigate("/contact")} variant="outline">
                  Contact Us
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Tests;
