import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Loader2, CheckCircle, XCircle, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

const contactSchema = z.object({
  fullName: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(100, "Name must be less than 100 characters")
    .regex(/^[a-zA-Z\s'-]+$/, "Please enter a valid name"),
  email: z
    .string()
    .email("Please enter a valid email address")
    .max(255, "Email must be less than 255 characters"),
  phone: z
    .string()
    .min(8, "Please enter a valid phone number")
    .regex(/^[\+]?[0-9\s\-]{8,20}$/, "Please enter a valid phone number"),
  message: z
    .string()
    .max(1000, "Message must be less than 1000 characters")
    .optional(),
});

type ContactFormData = z.infer<typeof contactSchema>;

const ContactForm = () => {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    mode: "onBlur",
  });

  const onSubmit = async (data: ContactFormData) => {
    setStatus("loading");
    
    try {
      const formData = new FormData();
      formData.append("access_key", "60d099bd-01f2-43df-8c03-514bc2331804");
      formData.append("name", data.fullName);
      formData.append("email", data.email);
      formData.append("phone", data.phone);
      formData.append("message", data.message || "No message provided");
      formData.append("subject", "New Contact Form Submission - SGC TECH AI");

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();

      if (result.success) {
        setStatus("success");
        toast.success("Message sent! We'll get back to you within 24 hours.");
        
        setTimeout(() => {
          reset();
          setStatus("idle");
        }, 3000);
      } else {
        throw new Error("Submission failed");
      }
    } catch {
      setStatus("error");
      toast.error("Something went wrong. Please try again.");
    }
  };

  return (
    <section id="contact" className="py-4xl relative">
      <div className="container max-w-xl">
        <div className="text-center mb-3xl">
          <h2 className="text-gradient mb-lg">Get In Touch</h2>
          <p className="text-foreground-muted text-lg">
            Ready to transform your business? Let's talk.
          </p>
        </div>

        <div className="glass rounded-xl p-2xl">
          {status === "success" ? (
            <div className="text-center py-3xl animate-fade-in">
              <CheckCircle className="w-16 h-16 text-success mx-auto mb-lg" />
              <h3 className="text-2xl font-bold text-foreground mb-md">Message Sent!</h3>
              <p className="text-foreground-muted">
                We'll get back to you within 24 hours.
              </p>
            </div>
          ) : status === "error" ? (
            <div className="text-center py-3xl animate-fade-in">
              <XCircle className="w-16 h-16 text-destructive mx-auto mb-lg" />
              <h3 className="text-2xl font-bold text-foreground mb-md">Submission Failed</h3>
              <p className="text-foreground-muted mb-lg">
                Please try again or contact us directly.
              </p>
              <Button onClick={() => setStatus("idle")} variant="outline">
                Try Again
              </Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-lg">
              {/* Honeypot for spam protection */}
              <input type="text" name="website" className="hidden" tabIndex={-1} autoComplete="off" />

              <div className="space-y-sm">
                <Label htmlFor="contact-fullName">Full Name *</Label>
                <Input
                  id="contact-fullName"
                  placeholder="John Smith"
                  {...register("fullName")}
                  className={errors.fullName ? "border-destructive" : ""}
                  aria-describedby={errors.fullName ? "fullName-error" : undefined}
                />
                {errors.fullName && (
                  <p id="fullName-error" className="text-sm text-destructive" role="alert">
                    {errors.fullName.message}
                  </p>
                )}
              </div>

              <div className="space-y-sm">
                <Label htmlFor="contact-email">Email *</Label>
                <Input
                  id="contact-email"
                  type="email"
                  placeholder="john@company.com"
                  {...register("email")}
                  className={errors.email ? "border-destructive" : ""}
                  aria-describedby={errors.email ? "email-error" : undefined}
                />
                {errors.email && (
                  <p id="email-error" className="text-sm text-destructive" role="alert">
                    {errors.email.message}
                  </p>
                )}
              </div>

              <div className="space-y-sm">
                <Label htmlFor="contact-phone">Phone *</Label>
                <Input
                  id="contact-phone"
                  type="tel"
                  placeholder="+971 50 967 5518"
                  {...register("phone")}
                  className={errors.phone ? "border-destructive" : ""}
                  aria-describedby={errors.phone ? "phone-error" : undefined}
                />
                {errors.phone && (
                  <p id="phone-error" className="text-sm text-destructive" role="alert">
                    {errors.phone.message}
                  </p>
                )}
              </div>

              <div className="space-y-sm">
                <Label htmlFor="contact-message">Message</Label>
                <Textarea
                  id="contact-message"
                  placeholder="Tell us about your project..."
                  rows={4}
                  {...register("message")}
                  className={errors.message ? "border-destructive" : ""}
                />
                {errors.message && (
                  <p className="text-sm text-destructive" role="alert">
                    {errors.message.message}
                  </p>
                )}
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold"
                disabled={status === "loading"}
              >
                {status === "loading" ? (
                  <>
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="mr-2 h-5 w-5" />
                    Send Message
                  </>
                )}
              </Button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
