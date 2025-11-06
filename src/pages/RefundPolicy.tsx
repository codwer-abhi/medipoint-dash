import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { AlertCircle, CheckCircle } from "lucide-react";

const RefundPolicy = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <div className="flex-1 py-12 bg-gradient-light">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-4">
              Refund & Cancellation Policy
            </h1>
            <p className="text-muted-foreground">
              Please read our refund policy carefully before booking
            </p>
          </div>

          <div className="space-y-6">
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start space-x-3 mb-4">
                  <CheckCircle className="h-6 w-6 text-success flex-shrink-0 mt-1" />
                  <div>
                    <h2 className="text-xl font-semibold mb-2">Cancellation Policy</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      Appointments can be cancelled up to 24 hours before the scheduled time for a
                      full refund. Cancellations made less than 24 hours before the appointment
                      will not be eligible for refund.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start space-x-3 mb-4">
                  <CheckCircle className="h-6 w-6 text-success flex-shrink-0 mt-1" />
                  <div>
                    <h2 className="text-xl font-semibold mb-2">Refund Processing Time</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      Refunds are processed within 5–7 business days for cancelled bookings. The
                      amount will be credited back to the original payment method used during
                      booking.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start space-x-3 mb-4">
                  <CheckCircle className="h-6 w-6 text-success flex-shrink-0 mt-1" />
                  <div>
                    <h2 className="text-xl font-semibold mb-2">Rescheduling Appointments</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      Appointments can be rescheduled free of charge up to 48 hours before the
                      scheduled time. After this period, rescheduling may incur additional charges
                      or require rebooking.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start space-x-3 mb-4">
                  <AlertCircle className="h-6 w-6 text-info flex-shrink-0 mt-1" />
                  <div>
                    <h2 className="text-xl font-semibold mb-2">No-Show Policy</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      If you fail to show up for your scheduled appointment without prior
                      cancellation, you will not be eligible for any refund. Please ensure to
                      notify us in case you cannot make it to your appointment.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start space-x-3 mb-4">
                  <CheckCircle className="h-6 w-6 text-success flex-shrink-0 mt-1" />
                  <div>
                    <h2 className="text-xl font-semibold mb-2">Emergency Cancellations</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      In case of medical emergencies or unforeseen circumstances, we will review
                      cancellation requests on a case-by-case basis. Please contact our support
                      team with relevant documentation.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start space-x-3 mb-4">
                  <AlertCircle className="h-6 w-6 text-info flex-shrink-0 mt-1" />
                  <div>
                    <h2 className="text-xl font-semibold mb-2">Partial Services</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      If you have received partial services (e.g., consultation completed but test
                      not conducted), refunds will be calculated proportionally based on the
                      services rendered.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-primary-light">
              <CardContent className="pt-6">
                <h2 className="text-xl font-semibold mb-3">Contact Us</h2>
                <p className="text-muted-foreground">
                  For any questions or concerns regarding refunds and cancellations, please contact
                  our support team:
                </p>
                <div className="mt-4 space-y-2">
                  <p className="text-foreground">
                    <strong>Phone:</strong> +91 1800-123-4567
                  </p>
                  <p className="text-foreground">
                    <strong>Email:</strong> support@healthcareplus.com
                  </p>
                  <p className="text-foreground">
                    <strong>Hours:</strong> Monday - Saturday, 9:00 AM - 6:00 PM
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default RefundPolicy;
