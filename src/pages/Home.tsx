import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Stethoscope, Microscope, Ambulance, Clock, Phone, Calendar, HeartPulse, Brain, Bone, Eye, Baby, Pill, ShieldCheck, Users, Award, Building2, ArrowRight, CheckCircle2, Star } from "lucide-react";

const Home = () => {
  const navigate = useNavigate();
  const services = [
    { icon: Ambulance, title: "Emergency Care", desc: "24/7 emergency services", color: "text-destructive" },
    { icon: Microscope, title: "Diagnostics", desc: "Advanced lab tests", color: "text-primary" },
    { icon: Stethoscope, title: "OPD Services", desc: "Expert consultations", color: "text-success" },
    { icon: Phone, title: "Online Consultation", desc: "Connect from home", color: "text-info" },
  ];
  const departments = [
    { icon: HeartPulse, name: "Cardiology", doctors: 12 },
    { icon: Brain, name: "Neurology", doctors: 8 },
    { icon: Bone, name: "Orthopedics", doctors: 10 },
    { icon: Eye, name: "Ophthalmology", doctors: 6 },
    { icon: Baby, name: "Pediatrics", doctors: 9 },
    { icon: Pill, name: "General Medicine", doctors: 15 },
  ];
  const stats = [{ value: "50+", label: "Doctors" }, { value: "10K+", label: "Patients" }, { value: "15+", label: "Departments" }, { value: "24/7", label: "Emergency" }];
  const doctors = [
    { name: "Dr. Rajesh Kumar", specialty: "Cardiologist", exp: "15 years", rating: 4.9 },
    { name: "Dr. Priya Sharma", specialty: "Neurologist", exp: "12 years", rating: 4.8 },
    { name: "Dr. Amit Patel", specialty: "Orthopedic", exp: "18 years", rating: 4.9 },
    { name: "Dr. Neha Gupta", specialty: "Pediatrician", exp: "10 years", rating: 4.7 },
  ];
  const features = ["State-of-the-art equipment", "Certified doctors", "Affordable packages", "Quick booking", "Home collection", "Digital records"];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <section className="relative min-h-[90vh] flex items-center bg-gradient-hero overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,hsl(211_100%_50%/0.15),transparent_50%)]" />
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white space-y-6">
              <Badge className="bg-white/20 text-white border-white/30 animate-fade-in">🏥 Trusted Healthcare</Badge>
              <h1 className="text-4xl md:text-6xl font-bold leading-tight animate-fade-in" style={{ animationDelay: "0.2s" }}>Your Health Is Our <span className="block mt-2">Top Priority</span></h1>
              <p className="text-lg text-white/80 max-w-lg animate-fade-in" style={{ animationDelay: "0.3s" }}>Experience world-class healthcare with expert doctors and advanced facilities.</p>
              <div className="flex flex-wrap gap-4 animate-fade-in" style={{ animationDelay: "0.4s" }}>
                <Button size="lg" onClick={() => navigate("/booking")} className="bg-white text-primary hover:bg-white/90 shadow-glow animate-pulse-glow"><Calendar className="mr-2 h-5 w-5" />Book Appointment</Button>
                <Button size="lg" variant="outline" onClick={() => navigate("/tests")} className="border-white/50 text-white hover:bg-white/10">View Services<ArrowRight className="ml-2 h-5 w-5" /></Button>
              </div>
              <div className="grid grid-cols-4 gap-4 pt-8 animate-fade-in" style={{ animationDelay: "0.5s" }}>
                {stats.map((stat, i) => (<div key={i} className="text-center"><div className="text-2xl md:text-3xl font-bold">{stat.value}</div><div className="text-xs text-white/70">{stat.label}</div></div>))}
              </div>
            </div>
            <div className="hidden lg:block animate-fade-in-right" style={{ animationDelay: "0.3s" }}>
              <Card className="bg-white/10 backdrop-blur-lg border-white/20 p-6 animate-float">
                <div className="flex items-center gap-3"><div className="h-12 w-12 rounded-full bg-success flex items-center justify-center"><CheckCircle2 className="h-6 w-6 text-white" /></div><div><p className="text-white font-semibold">Appointment Confirmed</p><p className="text-white/60 text-sm">Dr. Rajesh Kumar - Cardiology</p></div></div>
              </Card>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12"><Badge variant="secondary" className="mb-4">Our Services</Badge><h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Comprehensive Healthcare Solutions</h2></div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s, i) => (<Card key={i} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-2 animate-slide-up cursor-pointer" style={{ animationDelay: `${i * 0.1}s` }} onClick={() => navigate("/booking")}><CardContent className="p-6 text-center"><div className={`mx-auto w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform ${s.color}`}><s.icon className="h-8 w-8" /></div><h3 className="text-xl font-semibold text-foreground mb-2">{s.title}</h3><p className="text-muted-foreground text-sm">{s.desc}</p></CardContent></Card>))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-dark text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12"><Badge className="bg-white/20 text-white border-white/30 mb-4">Departments</Badge><h2 className="text-3xl md:text-4xl font-bold mb-4">Specialized Departments</h2></div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {departments.map((d, i) => (<Card key={i} className="bg-white/10 border-white/20 hover:bg-white/20 transition-all cursor-pointer group animate-scale-in" style={{ animationDelay: `${i * 0.1}s` }} onClick={() => navigate("/booking")}><CardContent className="p-6 text-center"><div className="mx-auto w-14 h-14 rounded-full bg-white/20 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform"><d.icon className="h-7 w-7 text-white" /></div><h3 className="font-semibold text-white mb-1">{d.name}</h3><p className="text-white/60 text-sm">{d.doctors} Doctors</p></CardContent></Card>))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div><Badge variant="secondary" className="mb-4">Why Choose Us</Badge><h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Your Trusted Healthcare Partner</h2><div className="grid grid-cols-1 md:grid-cols-2 gap-4">{features.map((f, i) => (<div key={i} className="flex items-center gap-3 animate-fade-in" style={{ animationDelay: `${i * 0.1}s` }}><div className="h-8 w-8 rounded-full bg-success/20 flex items-center justify-center"><CheckCircle2 className="h-5 w-5 text-success" /></div><span className="text-foreground">{f}</span></div>))}</div><Button size="lg" className="mt-8 bg-gradient-primary" onClick={() => navigate("/about")}>Learn More<ArrowRight className="ml-2 h-5 w-5" /></Button></div>
            <div className="grid grid-cols-2 gap-4">
              <Card className="bg-primary text-white p-6 animate-float"><ShieldCheck className="h-10 w-10 mb-4" /><h3 className="text-xl font-bold mb-2">Certified</h3><p className="text-white/80 text-sm">ISO & NABH Certified</p></Card>
              <Card className="bg-success text-white p-6 mt-8 animate-float" style={{ animationDelay: "0.2s" }}><Users className="h-10 w-10 mb-4" /><h3 className="text-xl font-bold mb-2">Expert Team</h3><p className="text-white/80 text-sm">50+ Specialists</p></Card>
              <Card className="bg-info text-white p-6 animate-float" style={{ animationDelay: "0.4s" }}><Award className="h-10 w-10 mb-4" /><h3 className="text-xl font-bold mb-2">Award Winning</h3><p className="text-white/80 text-sm">Best Hospital 2024</p></Card>
              <Card className="bg-accent text-white p-6 mt-8 animate-float" style={{ animationDelay: "0.6s" }}><Building2 className="h-10 w-10 mb-4" /><h3 className="text-xl font-bold mb-2">Modern Facility</h3><p className="text-white/80 text-sm">Latest Equipment</p></Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12"><Badge variant="secondary" className="mb-4">Our Doctors</Badge><h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Meet Our Experts</h2></div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {doctors.map((doc, i) => (<Card key={i} className="group hover:shadow-lg transition-all overflow-hidden animate-slide-up" style={{ animationDelay: `${i * 0.1}s` }}><div className="h-48 bg-gradient-primary flex items-center justify-center"><div className="h-24 w-24 rounded-full bg-white/20 flex items-center justify-center"><Stethoscope className="h-12 w-12 text-white" /></div></div><CardContent className="p-4 text-center"><h3 className="font-semibold text-foreground">{doc.name}</h3><p className="text-primary text-sm mb-2">{doc.specialty}</p><div className="flex items-center justify-center gap-2 text-sm text-muted-foreground"><Clock className="h-4 w-4" /><span>{doc.exp}</span><Star className="h-4 w-4 text-yellow-500 ml-2" /><span>{doc.rating}</span></div><Button variant="outline" size="sm" className="mt-4 w-full" onClick={() => navigate("/booking")}>Book Appointment</Button></CardContent></Card>))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-hero text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-fade-in">Ready to Book Your Appointment?</h2>
          <p className="text-white/80 max-w-2xl mx-auto mb-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>Schedule your appointment today and take the first step towards better health.</p>
          <div className="flex flex-wrap justify-center gap-4 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <Button size="lg" className="bg-white text-primary hover:bg-white/90" onClick={() => navigate("/booking")}><Calendar className="mr-2 h-5 w-5" />Book OPD Appointment</Button>
            <Button size="lg" variant="outline" className="border-white/50 text-white hover:bg-white/10" onClick={() => navigate("/tests")}><Microscope className="mr-2 h-5 w-5" />Book Diagnostic Test</Button>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Home;
