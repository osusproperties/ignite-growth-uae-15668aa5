import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Loader2, Download, TrendingUp, AlertTriangle, Clock, DollarSign, Users, BarChart3 } from "lucide-react";
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
import { Slider } from "@/components/ui/slider";
import { toast } from "sonner";
import { Link } from "react-router-dom";

const roiSchema = z.object({
  fullName: z.string().min(2, "Name is required"),
  email: z.string().email("Valid email required"),
  phone: z.string().min(8, "Valid phone required"),
  companyName: z.string().min(2, "Company name required"),
  employeeCount: z.string().min(1, "Select employee count"),
  industry: z.string().min(1, "Select industry"),
  monthlyRevenue: z.string().min(1, "Select revenue"),
  currentSystem: z.string().optional(),
});

type ROIFormData = z.infer<typeof roiSchema>;

interface ROIResults {
  totalSavings: number;
  timeSaved: number;
  errorReduction: number;
  costSavings: number;
  roi: number;
  paybackPeriod: number;
  score: number;
  level: "low" | "medium" | "high" | "critical";
  painPoints: string[];
  recommendations: string[];
  implementationCost: number;
  monthlySavings: number;
}

const ROICalculatorEnhanced = () => {
  const [step, setStep] = useState<"form" | "assessment" | "results">("form");
  const [roiResults, setRoiResults] = useState<ROIResults | null>(null);
  const [formData, setFormData] = useState<ROIFormData | null>(null);
  
  // Assessment inputs
  const [manualHours, setManualHours] = useState(40);
  const [errorRate, setErrorRate] = useState(15);
  const [itCosts, setITCosts] = useState(5000);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<ROIFormData>({
    resolver: zodResolver(roiSchema),
    mode: "onBlur",
  });

  const calculateROI = (data: ROIFormData, hours: number, errors: number, costs: number): ROIResults => {
    // Get employee count as number
    const empCount = parseInt(data.employeeCount.split("-")[0]);
    const avgSalary = 8000; // AED per month average in UAE
    
    // Calculate time savings (40-80 hours saved monthly)
    const hourlyRate = avgSalary / 160; // 160 working hours per month
    const timeSavingsValue = hours * 0.6 * hourlyRate; // 60% efficiency gain
    
    // Calculate error reduction savings
    const errorCostMultiplier = errors / 100;
    const revenueBase = parseInt(data.monthlyRevenue.split("-")[0].replace("k", "000").replace("m", "000000").replace("M", "000000").replace("+", ""));
    const errorSavings = revenueBase * errorCostMultiplier * 0.02; // 2% of revenue lost to errors
    
    // Calculate IT cost reduction
    const itSavings = costs * 0.30; // 30% reduction in IT costs
    
    // Total monthly savings
    const monthlySavings = timeSavingsValue + errorSavings + itSavings;
    
    // Implementation cost based on company size
    const baseCost = empCount < 50 ? 15187 : empCount < 100 ? 24187 : 39787;
    const setupFee = 4999;
    const implementationCost = baseCost + setupFee;
    
    // ROI calculations
    const annualSavings = monthlySavings * 12;
    const roi = ((annualSavings - implementationCost) / implementationCost) * 100;
    const paybackPeriod = implementationCost / monthlySavings;
    
    // Scoring system (0-100)
    let score = 0;
    score += Math.min((hours / 100) * 30, 30); // Manual hours weight: 30%
    score += Math.min((errors / 25) * 30, 30); // Error rate weight: 30%
    score += Math.min((costs / 10000) * 20, 20); // IT costs weight: 20%
    score += Math.min((roi / 200) * 20, 20); // ROI weight: 20%
    
    // Determine level
    let level: "low" | "medium" | "high" | "critical" = "low";
    if (score >= 75) level = "critical";
    else if (score >= 50) level = "high";
    else if (score >= 25) level = "medium";
    
    // Generic pain points based on industry and inputs
    const painPoints: string[] = [];
    if (hours > 50) painPoints.push("High manual process overhead consuming valuable time");
    if (hours > 30) painPoints.push("Limited automation leading to inefficiency");
    if (errors > 10) painPoints.push("Error rates impacting customer satisfaction and revenue");
    if (errors > 20) painPoints.push("Critical data accuracy issues requiring immediate attention");
    if (costs > 8000) painPoints.push("Excessive IT infrastructure and maintenance costs");
    if (!data.currentSystem || data.currentSystem === "") painPoints.push("No centralized system leading to data silos");
    if (empCount > 20 && !data.currentSystem) painPoints.push("Team collaboration challenges due to disconnected tools");
    
    // Add industry-specific pain points
    if (data.industry === "real-estate") {
      painPoints.push("Property management inefficiencies");
      painPoints.push("Manual tenant and lease tracking");
    } else if (data.industry === "trading") {
      painPoints.push("Inventory management challenges");
      painPoints.push("Supply chain visibility gaps");
    } else if (data.industry === "manufacturing") {
      painPoints.push("Production planning inefficiencies");
      painPoints.push("Quality control tracking limitations");
    }
    
    // Generic recommendations
    const recommendations: string[] = [];
    if (level === "critical" || level === "high") {
      recommendations.push("🚀 Immediate ERP Implementation - Your inefficiencies are costing you AED " + Math.round(monthlySavings).toLocaleString() + "/month");
      recommendations.push("⚡ AI-Powered Automation - Reduce manual tasks by 60-80%");
      recommendations.push("📊 Real-time Analytics Dashboard - Make data-driven decisions instantly");
    }
    
    if (hours > 40) {
      recommendations.push("🤖 Workflow Automation - Eliminate repetitive manual processes");
      recommendations.push("📱 Mobile Access - Enable your team to work from anywhere");
    }
    
    if (errors > 15) {
      recommendations.push("✅ Automated Validation - Reduce errors by 90%+");
      recommendations.push("🔄 Process Standardization - Ensure consistency across operations");
    }
    
    if (costs > 7000) {
      recommendations.push("☁️ Cloud Infrastructure - Reduce IT costs by 30-40%");
      recommendations.push("🔧 Integrated Systems - Eliminate redundant software subscriptions");
    }
    
    recommendations.push("📈 Scalability Planning - Prepare for growth without additional overhead");
    recommendations.push("🎓 Team Training - 14-day onboarding with AI assistance");
    recommendations.push("🛡️ Enterprise Security - Protect your business data with SOC 2 compliance");
    
    return {
      totalSavings: annualSavings,
      timeSaved: hours * 0.6,
      errorReduction: errors * 0.9,
      costSavings: itSavings,
      roi,
      paybackPeriod,
      score,
      level,
      painPoints: painPoints.slice(0, 6),
      recommendations: recommendations.slice(0, 8),
      implementationCost,
      monthlySavings,
    };
  };

  const onFormSubmit = (data: ROIFormData) => {
    setFormData(data);
    setStep("assessment");
  };

  const onAssessmentComplete = () => {
    if (!formData) return;
    
    const results = calculateROI(formData, manualHours, errorRate, itCosts);
    setRoiResults(results);
    setStep("results");
  };

  const generatePDF = () => {
    if (!roiResults || !formData) return;
    
    // Create printable HTML content
    const printWindow = window.open('', '_blank');
    if (!printWindow) return;
    
    const htmlContent = `
      <!DOCTYPE html>
      <html>
      <head>
        <title>ROI Assessment Report - ${formData.companyName}</title>
        <style>
          body { font-family: Arial, sans-serif; max-width: 800px; margin: 40px auto; padding: 20px; }
          .header { text-align: center; border-bottom: 3px solid #4fc3f7; padding-bottom: 20px; margin-bottom: 30px; }
          .logo { font-size: 24px; font-weight: bold; color: #0c1e3d; margin-bottom: 10px; }
          .section { margin: 30px 0; }
          .section-title { font-size: 18px; font-weight: bold; color: #0c1e3d; margin-bottom: 15px; border-left: 4px solid #4fc3f7; padding-left: 10px; }
          .metric { display: inline-block; width: 48%; margin: 10px 1%; padding: 15px; background: #f0f9ff; border-radius: 8px; }
          .metric-value { font-size: 24px; font-weight: bold; color: #4fc3f7; }
          .metric-label { font-size: 12px; color: #666; }
          .score-badge { display: inline-block; padding: 10px 20px; border-radius: 20px; font-weight: bold; margin: 10px 0; }
          .critical { background: #fee; color: #c00; }
          .high { background: #fff4e6; color: #e67700; }
          .medium { background: #fff8dc; color: #996600; }
          .low { background: #f0fff0; color: #006600; }
          ul { line-height: 1.8; }
          .footer { margin-top: 50px; padding-top: 20px; border-top: 1px solid #ddd; text-align: center; font-size: 12px; color: #666; }
          @media print { body { margin: 0; } }
        </style>
      </head>
      <body>
        <div class="header">
          <div class="logo">SGC TECH AI</div>
          <h1>ROI Assessment Report</h1>
          <p>${formData.companyName} | ${new Date().toLocaleDateString()}</p>
        </div>

        <div class="section">
          <div class="section-title">Assessment Score</div>
          <p>Your business scored <strong>${Math.round(roiResults.score)}/100</strong></p>
          <span class="score-badge ${roiResults.level}">${roiResults.level.toUpperCase()} PRIORITY</span>
          <p><em>This score indicates the urgency and potential impact of implementing our AI-powered ERP solution.</em></p>
        </div>

        <div class="section">
          <div class="section-title">Financial Impact Analysis</div>
          <div class="metric">
            <div class="metric-value">AED ${Math.round(roiResults.monthlySavings).toLocaleString()}</div>
            <div class="metric-label">Monthly Savings</div>
          </div>
          <div class="metric">
            <div class="metric-value">AED ${Math.round(roiResults.totalSavings).toLocaleString()}</div>
            <div class="metric-label">Annual Savings</div>
          </div>
          <div class="metric">
            <div class="metric-value">${Math.round(roiResults.roi)}%</div>
            <div class="metric-label">Return on Investment</div>
          </div>
          <div class="metric">
            <div class="metric-value">${Math.round(roiResults.paybackPeriod)} months</div>
            <div class="metric-label">Payback Period</div>
          </div>
        </div>

        <div class="section">
          <div class="section-title">Operational Improvements</div>
          <div class="metric">
            <div class="metric-value">${Math.round(roiResults.timeSaved)} hours</div>
            <div class="metric-label">Time Saved Monthly</div>
          </div>
          <div class="metric">
            <div class="metric-value">${Math.round(roiResults.errorReduction)}%</div>
            <div class="metric-label">Error Reduction</div>
          </div>
          <div class="metric">
            <div class="metric-value">AED ${Math.round(roiResults.costSavings).toLocaleString()}</div>
            <div class="metric-label">Monthly IT Cost Savings</div>
          </div>
          <div class="metric">
            <div class="metric-value">14 days</div>
            <div class="metric-label">Implementation Time</div>
          </div>
        </div>

        <div class="section">
          <div class="section-title">Identified Pain Points</div>
          <ul>
            ${roiResults.painPoints.map(point => `<li>${point}</li>`).join('')}
          </ul>
        </div>

        <div class="section">
          <div class="section-title">Our Recommendations</div>
          <ul>
            ${roiResults.recommendations.map(rec => `<li>${rec}</li>`).join('')}
          </ul>
        </div>

        <div class="section">
          <div class="section-title">Investment Required</div>
          <p><strong>Implementation Cost:</strong> AED ${roiResults.implementationCost.toLocaleString()}</p>
          <p><em>Includes: Complete system setup, data migration, AI configuration, team training, and 90-day support</em></p>
        </div>

        <div class="footer">
          <p><strong>SGC TECH AI</strong> - Intelligent Infrastructure. Instant Impact.</p>
          <p>Dubai, UAE | +971 50 967 5518 | info@sgctech.ai</p>
          <p>This assessment is based on the information provided and industry benchmarks. Results may vary.</p>
        </div>
      </body>
      </html>
    `;
    
    printWindow.document.write(htmlContent);
    printWindow.document.close();
    
    // Wait for content to load then trigger print
    setTimeout(() => {
      printWindow.print();
    }, 250);
    
    toast.success("PDF report generated! Print dialog opened.");
  };

  const getLevelColor = (level: string) => {
    switch (level) {
      case "critical": return "text-destructive";
      case "high": return "text-warning";
      case "medium": return "text-accent";
      default: return "text-success";
    }
  };

  const getLevelBg = (level: string) => {
    switch (level) {
      case "critical": return "bg-destructive/10 border-destructive/30";
      case "high": return "bg-warning/10 border-warning/30";
      case "medium": return "bg-accent/10 border-accent/30";
      default: return "bg-success/10 border-success/30";
    }
  };

  return (
    <section id="roi-calculator" className="py-24 relative">
      <div className="container max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-gradient mb-4">◆ UAE ROI CALCULATOR & IT ASSESSMENT ◆</h2>
          <p className="text-lg text-foreground-muted max-w-2xl mx-auto">
            Get your personalized ROI analysis, business assessment score, and implementation roadmap in minutes
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Form / Assessment / Results Column */}
          <div className="glass rounded-2xl p-8 shadow-2xl border border-accent/30">
            {step === "form" && (
              <div>
                <h3 className="text-2xl font-display font-bold text-foreground mb-6">
                  Step 1: Company Information
                </h3>
                <form onSubmit={handleSubmit(onFormSubmit)} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
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

                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
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

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone *</Label>
                      <Input
                        id="phone"
                        placeholder="+971 50 123 4567"
                        {...register("phone")}
                        className={errors.phone ? "border-destructive" : ""}
                      />
                      {errors.phone && (
                        <p className="text-sm text-destructive">{errors.phone.message}</p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="companyName">Company *</Label>
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

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label>Employees *</Label>
                      <Select onValueChange={(value) => setValue("employeeCount", value)}>
                        <SelectTrigger className={errors.employeeCount ? "border-destructive" : ""}>
                          <SelectValue placeholder="Select..." />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1-10">1-10</SelectItem>
                          <SelectItem value="11-50">11-50</SelectItem>
                          <SelectItem value="51-100">51-100</SelectItem>
                          <SelectItem value="101-500">101-500</SelectItem>
                          <SelectItem value="500+">500+</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label>Industry *</Label>
                      <Select onValueChange={(value) => setValue("industry", value)}>
                        <SelectTrigger className={errors.industry ? "border-destructive" : ""}>
                          <SelectValue placeholder="Select..." />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="real-estate">Real Estate</SelectItem>
                          <SelectItem value="trading">Trading</SelectItem>
                          <SelectItem value="manufacturing">Manufacturing</SelectItem>
                          <SelectItem value="retail">Retail</SelectItem>
                          <SelectItem value="services">Services</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label>Monthly Revenue (AED) *</Label>
                      <Select onValueChange={(value) => setValue("monthlyRevenue", value)}>
                        <SelectTrigger className={errors.monthlyRevenue ? "border-destructive" : ""}>
                          <SelectValue placeholder="Select..." />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="10k-50k">10K - 50K</SelectItem>
                          <SelectItem value="50k-100k">50K - 100K</SelectItem>
                          <SelectItem value="100k-500k">100K - 500K</SelectItem>
                          <SelectItem value="500k-1M">500K - 1M</SelectItem>
                          <SelectItem value="1M+">1M+</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label>Current ERP (Optional)</Label>
                      <Input
                        placeholder="SAP, Oracle, None..."
                        {...register("currentSystem")}
                      />
                    </div>
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-accent to-accent/80 hover:from-accent/90 hover:to-accent"
                    size="lg"
                  >
                    Continue to Assessment →
                  </Button>
                </form>
              </div>
            )}

            {step === "assessment" && (
              <div className="space-y-8">
                <h3 className="text-2xl font-display font-bold text-foreground mb-6">
                  Step 2: Business Assessment
                </h3>

                <div className="space-y-6">
                  <div className="space-y-3">
                    <Label className="flex items-center justify-between">
                      <span>Monthly Hours Spent on Manual Tasks</span>
                      <span className="text-accent font-bold">{manualHours} hours</span>
                    </Label>
                    <Slider
                      value={[manualHours]}
                      onValueChange={(value) => setManualHours(value[0])}
                      max={200}
                      min={10}
                      step={5}
                      className="py-4"
                    />
                    <p className="text-xs text-foreground-subtle">
                      Include data entry, reporting, invoicing, inventory management, etc.
                    </p>
                  </div>

                  <div className="space-y-3">
                    <Label className="flex items-center justify-between">
                      <span>Estimated Error Rate in Operations</span>
                      <span className="text-accent font-bold">{errorRate}%</span>
                    </Label>
                    <Slider
                      value={[errorRate]}
                      onValueChange={(value) => setErrorRate(value[0])}
                      max={50}
                      min={0}
                      step={1}
                      className="py-4"
                    />
                    <p className="text-xs text-foreground-subtle">
                      Mistakes in orders, invoices, inventory, customer data, etc.
                    </p>
                  </div>

                  <div className="space-y-3">
                    <Label className="flex items-center justify-between">
                      <span>Monthly IT & Software Costs (AED)</span>
                      <span className="text-accent font-bold">AED {itCosts.toLocaleString()}</span>
                    </Label>
                    <Slider
                      value={[itCosts]}
                      onValueChange={(value) => setITCosts(value[0])}
                      max={20000}
                      min={1000}
                      step={500}
                      className="py-4"
                    />
                    <p className="text-xs text-foreground-subtle">
                      Include all software subscriptions, IT support, hosting, etc.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Button
                    variant="outline"
                    onClick={() => setStep("form")}
                    className="flex-1"
                  >
                    ← Back
                  </Button>
                  <Button
                    onClick={onAssessmentComplete}
                    className="flex-1 bg-gradient-to-r from-accent to-accent/80"
                    size="lg"
                  >
                    Calculate ROI →
                  </Button>
                </div>
              </div>
            )}

            {step === "results" && roiResults && (
              <div className="space-y-6">
                <div className="text-center">
                  <h3 className="text-2xl font-display font-bold text-foreground mb-2">
                    Your Assessment Score
                  </h3>
                  <div className="text-6xl font-bold text-gradient my-4">
                    {Math.round(roiResults.score)}/100
                  </div>
                  <div className={`inline-block px-6 py-2 rounded-full font-bold border ${getLevelBg(roiResults.level)} ${getLevelColor(roiResults.level)}`}>
                    {roiResults.level.toUpperCase()} PRIORITY
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-background-secondary/40 rounded-xl p-4 border border-accent/20">
                    <div className="text-2xl font-bold text-accent">
                      AED {Math.round(roiResults.monthlySavings).toLocaleString()}
                    </div>
                    <div className="text-xs text-foreground-subtle">Monthly Savings</div>
                  </div>
                  <div className="bg-background-secondary/40 rounded-xl p-4 border border-accent/20">
                    <div className="text-2xl font-bold text-accent">
                      {Math.round(roiResults.roi)}%
                    </div>
                    <div className="text-xs text-foreground-subtle">ROI</div>
                  </div>
                  <div className="bg-background-secondary/40 rounded-xl p-4 border border-accent/20">
                    <div className="text-2xl font-bold text-accent">
                      {Math.round(roiResults.timeSaved)} hrs
                    </div>
                    <div className="text-xs text-foreground-subtle">Time Saved/Month</div>
                  </div>
                  <div className="bg-background-secondary/40 rounded-xl p-4 border border-accent/20">
                    <div className="text-2xl font-bold text-accent">
                      {Math.round(roiResults.paybackPeriod)} mo
                    </div>
                    <div className="text-xs text-foreground-subtle">Payback Period</div>
                  </div>
                </div>

                <div className="space-y-4">
                  <Button
                    onClick={generatePDF}
                    className="w-full bg-gradient-to-r from-accent to-accent/80"
                    size="lg"
                  >
                    <Download className="mr-2 h-5 w-5" />
                    Download Full PDF Report
                  </Button>

                  <div className="grid grid-cols-2 gap-3">
                    <Button
                      onClick={() => setStep("form")}
                      variant="outline"
                      className="w-full"
                    >
                      Start Over
                    </Button>
                    <Button
                      asChild
                      variant="outline"
                      className="w-full"
                    >
                      <Link to="/#contact">Contact Sales</Link>
                    </Button>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Info Column - Always Visible */}
          <div className="space-y-6">
            {!roiResults && (
              <div className="glass rounded-2xl p-8 border border-accent/30">
                <h3 className="text-xl font-display font-bold text-foreground mb-4 flex items-center gap-2">
                  <BarChart3 className="w-6 h-6 text-accent" />
                  What You'll Get
                </h3>
                <ul className="space-y-3 text-foreground-muted">
                  <li className="flex items-start gap-2">
                    <TrendingUp className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span>Detailed ROI calculation with exact savings potential</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-5 h-5 text-warning flex-shrink-0 mt-0.5" />
                    <span>Business health score (0-100) with priority level</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Clock className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span>Identified pain points specific to your business</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <DollarSign className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span>Customized IT recommendations and roadmap</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Download className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span>Printable PDF report for stakeholder presentation</span>
                  </li>
                </ul>
              </div>
            )}

            {roiResults && (
              <>
                <div className="glass rounded-2xl p-8 border border-warning/30">
                  <h3 className="text-xl font-display font-bold text-foreground mb-4 flex items-center gap-2">
                    <AlertTriangle className="w-6 h-6 text-warning" />
                    Identified Pain Points
                  </h3>
                  <ul className="space-y-2">
                    {roiResults.painPoints.map((point, idx) => (
                      <li key={idx} className="text-sm text-foreground-muted flex items-start gap-2">
                        <span className="text-warning flex-shrink-0">•</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="glass rounded-2xl p-8 border border-accent/30">
                  <h3 className="text-xl font-display font-bold text-foreground mb-4 flex items-center gap-2">
                    <TrendingUp className="w-6 h-6 text-accent" />
                    Our Recommendations
                  </h3>
                  <ul className="space-y-2">
                    {roiResults.recommendations.slice(0, 6).map((rec, idx) => (
                      <li key={idx} className="text-sm text-foreground-muted flex items-start gap-2">
                        <span className="text-accent flex-shrink-0">✓</span>
                        <span>{rec}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="glass rounded-2xl p-8 border border-accent/30 bg-gradient-to-br from-accent/5 to-primary/5">
                  <h3 className="text-xl font-display font-bold text-foreground mb-4">
                    Ready to Transform?
                  </h3>
                  <p className="text-foreground-muted mb-4 text-sm">
                    Start your 4-week free trial or speak with our AI consultants to create a custom implementation plan.
                  </p>
                  <div className="space-y-3">
                    <Button
                      asChild
                      className="w-full bg-gradient-to-r from-accent to-accent/80"
                      size="lg"
                    >
                      <Link to="#free-trial">Start Free Trial</Link>
                    </Button>
                    <Button
                      asChild
                      variant="outline"
                      className="w-full"
                    >
                      <Link to="/#contact">Schedule Consultation</Link>
                    </Button>
                  </div>
                </div>
              </>
            )}

            <div className="glass rounded-2xl p-6 border border-primary/30">
              <p className="text-sm text-foreground-subtle text-center">
                <span className="font-semibold text-foreground">100% Confidential</span> - Your data is encrypted and never shared. This assessment takes 2-3 minutes to complete.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ROICalculatorEnhanced;
