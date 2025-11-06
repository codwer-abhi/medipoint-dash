import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import { Calendar, Clock, CheckCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { z } from "zod";
import { Session } from "@supabase/supabase-js";

const bookingSchema = z.object({
  fullName: z.string().min(2, { message: "Name must be at least 2 characters" }).max(100),
  phoneNumber: z.string().min(10, { message: "Phone number must be at least 10 digits" }).max(15),
  testId: z.string().min(1, { message: "Please select a test or department" }),
  appointmentDate: z.string().min(1, { message: "Please select a date" }),
  appointmentTime: z.string().min(1, { message: "Please select a time slot" }),
});

const Booking = () => {
  const navigate = useNavigate();
  const [session, setSession] = useState<Session | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [tests, setTests] = useState<any[]>([]);
  const [bookingConfirmed, setBookingConfirmed] = useState(false);
  const [bookingDetails, setBookingDetails] = useState<any>(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (!session) {
        toast.error("Please login to book an appointment");
        navigate("/auth");
      } else {
        setSession(session);
      }
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      if (!session) {
        navigate("/auth");
      } else {
        setSession(session);
      }
    });

    return () => subscription.unsubscribe();
  }, [navigate]);

  useEffect(() => {
    const fetchTests = async () => {
      const { data, error } = await supabase.from("tests").select("*").order("category");

      if (error) {
        toast.error("Failed to load tests");
      } else {
        setTests(data || []);
      }
    };

    fetchTests();
  }, []);

  const timeSlots = [
    "09:00 AM - 10:00 AM",
    "10:00 AM - 11:00 AM",
    "11:00 AM - 12:00 PM",
    "12:00 PM - 01:00 PM",
    "02:00 PM - 03:00 PM",
    "03:00 PM - 04:00 PM",
    "04:00 PM - 05:00 PM",
    "05:00 PM - 06:00 PM",
  ];

  const handleBooking = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    const formData = new FormData(e.currentTarget);
    const fullName = formData.get("fullName") as string;
    const phoneNumber = formData.get("phoneNumber") as string;
    const testId = formData.get("testId") as string;
    const appointmentDate = formData.get("appointmentDate") as string;
    const appointmentTime = formData.get("appointmentTime") as string;

    try {
      bookingSchema.parse({ fullName, phoneNumber, testId, appointmentDate, appointmentTime });

      if (!session?.user?.id) {
        toast.error("Please login to book an appointment");
        navigate("/auth");
        return;
      }

      const selectedTest = tests.find((t) => t.id === testId);

      const { data, error } = await supabase
        .from("bookings")
        .insert({
          user_id: session.user.id,
          full_name: fullName,
          phone_number: phoneNumber,
          test_id: testId,
          appointment_date: appointmentDate,
          appointment_time: appointmentTime,
        })
        .select()
        .single();

      if (error) {
        toast.error("Failed to create booking");
        console.error(error);
      } else {
        setBookingDetails({
          ...data,
          test_name: selectedTest?.name,
        });
        setBookingConfirmed(true);
        toast.success("Booking confirmed!");
      }
    } catch (err) {
      if (err instanceof z.ZodError) {
        toast.error(err.errors[0].message);
      }
    } finally {
      setIsLoading(false);
    }
  };

  if (bookingConfirmed && bookingDetails) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-1 flex items-center justify-center p-4 bg-gradient-light">
          <Card className="max-w-2xl w-full shadow-lg">
            <CardHeader className="text-center">
              <div className="mx-auto mb-4 bg-success/10 rounded-full p-4 w-fit">
                <CheckCircle className="h-16 w-16 text-success" />
              </div>
              <CardTitle className="text-3xl">Booking Confirmed!</CardTitle>
              <CardDescription>Your appointment has been successfully scheduled</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-primary-light p-6 rounded-lg space-y-3">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Booking ID:</span>
                  <span className="font-semibold">{bookingDetails.booking_number}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Patient Name:</span>
                  <span className="font-semibold">{bookingDetails.full_name}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Phone:</span>
                  <span className="font-semibold">{bookingDetails.phone_number}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Test/Service:</span>
                  <span className="font-semibold">{bookingDetails.test_name}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Date:</span>
                  <span className="font-semibold">
                    {new Date(bookingDetails.appointment_date).toLocaleDateString()}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Time:</span>
                  <span className="font-semibold">{bookingDetails.appointment_time}</span>
                </div>
              </div>

              <div className="text-center space-y-4">
                <p className="text-sm text-muted-foreground">
                  A confirmation message has been sent. Please arrive 15 minutes before your scheduled time.
                </p>
                <div className="flex gap-4 justify-center">
                  <Button onClick={() => navigate("/")} variant="outline">
                    Go to Home
                  </Button>
                  <Button onClick={() => window.location.reload()} className="bg-gradient-primary">
                    Book Another
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <div className="flex-1 py-12 bg-gradient-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-4">Book Your Appointment</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Schedule your OPD appointment or diagnostic test with ease
            </p>
          </div>

          <Card className="max-w-2xl mx-auto shadow-lg">
            <CardHeader>
              <CardTitle>Appointment Details</CardTitle>
              <CardDescription>Fill in the details to book your appointment</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleBooking} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="fullName">Full Name *</Label>
                  <Input
                    id="fullName"
                    name="fullName"
                    placeholder="Enter your full name"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phoneNumber">Phone Number *</Label>
                  <Input
                    id="phoneNumber"
                    name="phoneNumber"
                    placeholder="Enter your phone number"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="testId">Select Test / Department *</Label>
                  <Select name="testId" required>
                    <SelectTrigger>
                      <SelectValue placeholder="Choose a test or service" />
                    </SelectTrigger>
                    <SelectContent>
                      {tests.map((test) => (
                        <SelectItem key={test.id} value={test.id}>
                          {test.name} - {test.price_range}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="appointmentDate">
                      <Calendar className="inline mr-2 h-4 w-4" />
                      Appointment Date *
                    </Label>
                    <Input
                      id="appointmentDate"
                      name="appointmentDate"
                      type="date"
                      min={new Date().toISOString().split("T")[0]}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="appointmentTime">
                      <Clock className="inline mr-2 h-4 w-4" />
                      Time Slot *
                    </Label>
                    <Select name="appointmentTime" required>
                      <SelectTrigger>
                        <SelectValue placeholder="Select time" />
                      </SelectTrigger>
                      <SelectContent>
                        {timeSlots.map((slot) => (
                          <SelectItem key={slot} value={slot}>
                            {slot}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <Button type="submit" className="w-full bg-gradient-primary" size="lg" disabled={isLoading}>
                  {isLoading ? "Booking..." : "Confirm Booking"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Booking;
