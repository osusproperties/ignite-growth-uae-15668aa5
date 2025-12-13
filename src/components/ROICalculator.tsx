import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Loader2, CheckCircle, XCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";

const roiSchema = z.object({
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
  companyName: z
    .string()
    .min(2, "Company name must be at least 2 characters")
    .max(100, "Company name must be less than 100 characters"),
  employeeCount: z.string().min(1, "Please select employee count"),
  industry: z.string().min(1, "Please select your industry"),
  monthlyRevenue: z.string().min(1, "Please select revenue range"),
  currentSystem: z.string().optional(),
});

type ROIFormData = z.infer<typeof roiSchema>;

const ROICalculator = () => {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm<ROIFormData>({
    resolver: zodResolver(roiSchema),
    mode: "onBlur",
  });

  const onSubmit = async (data: ROIFormData) => {
    setStatus("loading");
    
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000));
      
      console.log("ROI Form submitted:", data);
      setStatus("success");
      toast.success("Your ROI report has been sent to your email!");
      
      setTimeout(() => {
        reset();
        setStatus("idle");
      }, 3000);
    } catch {
      setStatus("error");
      toast.error("Something went wrong. Please try again.");
    }
  };

  return (
    <section id="roi-calculator" className="py-4xl relative">
      <div className="container max-w-2xl">
        <div className="text-center mb-3xl">
          <h2 className="text-gradient mb-lg">Calculate Your ROI</h2>
          <p className="text-foreground-muted text-lg">
            Discover how much you could save with AI-powered ERP implementation
          </p>
        </div>

        <div className="glass rounded-xl p-2xl">
          {status === "success" ? (
            <div className="text-center py-3xl animate-fade-in">
              <CheckCircle className="w-16 h-16 text-success mx-auto mb-lg" />
              <h3 className="text-2xl font-bold text-foreground mb-md">Success!</h3>
              <p className="text-foreground-muted">
                Your ROI report has been sent to your email. We'll contact you within 24 hours.
              </p>
            </div>
          ) : status === "error" ? (
            <div className="text-center py-3xl animate-fade-in">
              <XCircle className="w-16 h-16 text-destructive mx-auto mb-lg" />
              <h3 className="text-2xl font-bold text-foreground mb-md">Submission Failed</h3>
              <p className="text-foreground-muted mb-lg">
                Something went wrong. Please try again or contact us directly.
              </p>
              <Button onClick={() => setStatus("idle")} variant="outline">
                Try Again
              </Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-lg">
              {/* Honeypot for spam protection */}
              <input type="text" name="website" className="hidden" tabIndex={-1} autoComplete="off" />

              <div className="grid md:grid-cols-2 gap-lg">
                <div className="space-y-sm">
                  <Label htmlFor="fullName">Full Name *</Label>
                  <Input
                    id="fullName"
                    placeholder="John Smith"
                    {...register("fullName")}
                    className={errors.fullName ? "border-destructive" : ""}
                  />
                  {errors.fullName && (
                    <p className="text-sm text-destructive">{errors.fullName.message}</p>
                  )}
                </div>

                <div className="space-y-sm">
                  <Label htmlFor="email">Business Email *</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="john@company.com"
                    {...register("email")}
                    className={errors.email ? "border-destructive" : ""}
                  />
                  {errors.email && (
                    <p className="text-sm text-destructive">{errors.email.message}</p>
                  )}
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-lg">
                <div className="space-y-sm">
                  <Label htmlFor="phone">Phone Number *</Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+971 50 123 4567"
                    {...register("phone")}
                    className={errors.phone ? "border-destructive" : ""}
                  />
                  {errors.phone && (
                    <p className="text-sm text-destructive">{errors.phone.message}</p>
                  )}
                </div>

                <div className="space-y-sm">
                  <Label htmlFor="companyName">Company Name *</Label>
                  <Input
                    id="companyName"
                    placeholder="Your Company LLC"
                    {...register("companyName")}
                    className={errors.companyName ? "border-destructive" : ""}
                  />
                  {errors.companyName && (
                    <p className="text-sm text-destructive">{errors.companyName.message}</p>
                  )}
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-lg">
                <div className="space-y-sm">
                  <Label htmlFor="employeeCount">Number of Employees *</Label>
                  <Select onValueChange={(value) => setValue("employeeCount", value)}>
                    <SelectTrigger className={errors.employeeCount ? "border-destructive" : ""}>
                      <SelectValue placeholder="Select employee count" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1-10">1-10 employees</SelectItem>
                      <SelectItem value="11-50">11-50 employees</SelectItem>
                      <SelectItem value="51-100">51-100 employees</SelectItem>
                      <SelectItem value="101-500">101-500 employees</SelectItem>
                      <SelectItem value="500+">500+ employees</SelectItem>
                    </SelectContent>
                  </Select>
                  {errors.employeeCount && (
                    <p className="text-sm text-destructive">{errors.employeeCount.message}</p>
                  )}
                </div>

                <div className="space-y-sm">
                  <Label htmlFor="industry">Industry *</Label>
                  <Select onValueChange={(value) => setValue("industry", value)}>
                    <SelectTrigger className={errors.industry ? "border-destructive" : ""}>
                      <SelectValue placeholder="Select your industry" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="real-estate">Real Estate</SelectItem>
                      <SelectItem value="property-management">Property Management</SelectItem>
                      <SelectItem value="trading">Trading & Distribution</SelectItem>
                      <SelectItem value="manufacturing">Manufacturing</SelectItem>
                      <SelectItem value="retail">Retail</SelectItem>
                      <SelectItem value="professional-services">Professional Services</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                  {errors.industry && (
                    <p className="text-sm text-destructive">{errors.industry.message}</p>
                  )}
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-lg">
                <div className="space-y-sm">
                  <Label htmlFor="monthlyRevenue">Monthly Revenue (AED) *</Label>
                  <Select onValueChange={(value) => setValue("monthlyRevenue", value)}>
                    <SelectTrigger className={errors.monthlyRevenue ? "border-destructive" : ""}>
                      <SelectValue placeholder="Select revenue range" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="10k-50k">AED 10,000 - 50,000</SelectItem>
                      <SelectItem value="50k-100k">AED 50,000 - 100,000</SelectItem>
                      <SelectItem value="100k-500k">AED 100,000 - 500,000</SelectItem>
                      <SelectItem value="500k-1m">AED 500,000 - 1M</SelectItem>
                      <SelectItem value="1m+">AED 1M+</SelectItem>
                    </SelectContent>
                  </Select>
                  {errors.monthlyRevenue && (
                    <p className="text-sm text-destructive">{errors.monthlyRevenue.message}</p>
                  )}
                </div>

                <div className="space-y-sm">
                  <Label htmlFor="currentSystem">Current ERP System (Optional)</Label>
                  <Input
                    id="currentSystem"
                    placeholder="e.g., SAP, Oracle, Tally"
                    {...register("currentSystem")}
                  />
                </div>
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold pulse-glow"
                disabled={status === "loading"}
              >
                {status === "loading" ? (
                  <>
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                    Calculating...
                  </>
                ) : (
                  "Calculate My ROI"
                )}
              </Button>

              <p className="text-sm text-foreground-subtle text-center">
                By submitting this form, you agree to our Privacy Policy. We'll use your
                information to calculate ROI and send you relevant insights. No spam, ever.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default ROICalculator;
