import { useState, useEffect } from "react";
import sgcLogo from "@/assets/sgc-logo.png";

const FreeTrialWidget = () => {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const utm_source = "sgctechai";
  const utm_campaign = "trial_widget";
  const default_product = "odoo_19";

  useEffect(() => {
    // Reset message after success
    if (status === "success") {
      const timer = setTimeout(() => {
        setStatus("idle");
        setMessage("");
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [status]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");
    setMessage("Submitting...");

    try {
      const formData = new FormData(e.currentTarget);
      
      // Add hidden fields
      formData.append("product", default_product);
      formData.append("utm_source", utm_source);
      formData.append("utm_campaign", utm_campaign);

      const response = await fetch(
        "https://002-001-5dd6e535-4d1c-46bc-9bd9-42ad4bc5f082.odoo4projects.com/webhook/47129739-e60b-4944-b6c2-d3fd5ce0991b",
        {
          method: "POST",
          body: formData,
        }
      );

      const text = await response.text();

      setStatus("success");
      setMessage(text || "✓ Success! Check your email for trial details.");
      
      // Reset form
      (e.target as HTMLFormElement).reset();
    } catch (err) {
      setStatus("error");
      setMessage("✗ Failed to submit. Please try again.");
      console.error("Trial signup error:", err);
    }
  };

  return (
    <div id="free-trial" className="h-full flex flex-col">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-display font-bold text-gradient mb-3">Try Odoo Free for 4 Weeks</h3>
        <p className="text-foreground-muted">
          Experience enterprise-grade Odoo ERP with AI automation. No credit card required.
        </p>
      </div>

      <div className="glass rounded-xl p-8 shadow-2xl border border-accent/30 relative overflow-hidden flex-1 flex flex-col">
        {/* Glow effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 pointer-events-none" />
          
<div className="relative z-10 flex-1 flex flex-col">
          {/* Header */}
          <div className="flex flex-col items-center gap-4 mb-6">
            <div className="w-20 h-20 rounded-xl bg-gradient-to-br from-accent/20 to-accent/30 flex items-center justify-center shadow-lg">
              <img
                src={sgcLogo}
                alt="SGC TECH AI Logo"
                className="w-14 h-14 object-contain filter drop-shadow-lg"
              />
            </div>
            <div className="text-center">
              <h4 className="text-xl font-display font-bold text-foreground mb-1">
                Managed ODOO Platform
              </h4>
              <p className="text-sm text-accent font-semibold">
                  4 Weeks Free • No Credit Card
                </p>
              </div>
            </div>

            {/* Form */}
            {status !== "success" ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="location"
                    className="block text-xs font-semibold text-foreground-muted uppercase tracking-wider mb-2"
                  >
                    Server Location
                  </label>
                  <select
                    id="location"
                    name="location"
                    required
                    disabled={status === "submitting"}
                    className="w-full bg-background-secondary/40 backdrop-blur-sm border border-accent/30 rounded-xl px-4 py-3 text-foreground focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all disabled:opacity-50 disabled:cursor-not-allowed appearance-none cursor-pointer"
                    style={{
                      backgroundImage: `url("data:image/svg+xml,%3Csvg width='12' height='8' viewBox='0 0 12 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1.5L6 6.5L11 1.5' stroke='%234fc3f7' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E")`,
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "right 16px center",
                      paddingRight: "40px",
                    }}
                  >
                    <option value="" disabled>
                      Select your region
                    </option>
                    <option value="manchester">🇬🇧 UK, Manchester</option>
                    <option value="boston">🇺🇸 US, Boston</option>
                    <option value="mumbai">🇮🇳 IN, Mumbai</option>
                    <option value="saopaulo">🇧🇷 BR, São Paulo</option>
                    <option value="Meppel">🇳🇱 NL, Meppel</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="trial-email"
                    className="block text-xs font-semibold text-foreground-muted uppercase tracking-wider mb-2"
                  >
                    Work Email
                  </label>
                  <input
                    id="trial-email"
                    name="email"
                    type="email"
                    required
                    disabled={status === "submitting"}
                    placeholder="you@company.com"
                    className="w-full bg-background-secondary/40 backdrop-blur-sm border border-accent/30 rounded-xl px-4 py-3 text-foreground placeholder:text-foreground-subtle focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="w-full bg-gradient-to-r from-accent to-accent/80 hover:from-accent/90 hover:to-accent text-background font-bold py-4 px-6 rounded-xl shadow-lg hover:shadow-accent/50 transition-all duration-300 hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none uppercase tracking-wider text-sm"
                >
                  {status === "submitting" ? "Submitting..." : "Start Free Trial Now"}
                </button>

                <p className="text-xs text-center text-foreground-subtle">
                  By submitting, you agree to the{" "}
                  <a
                    href="https://scholarixglobal.com/terms"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent hover:underline"
                  >
                    Terms & Conditions
                  </a>
                </p>

                {/* Status message during submission or error */}
                {(status === "submitting" || status === "error") && (
                  <div
                    className={`mt-4 p-4 rounded-xl text-center ${
                      status === "error"
                        ? "bg-destructive/10 border border-destructive/30 text-destructive"
                        : "bg-accent/10 border border-accent/30 text-accent"
                    }`}
                  >
                    {message}
                  </div>
                )}
              </form>
            ) : (
              // Success state
              <div className="py-8 text-center">
                <div className="w-16 h-16 bg-success/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-success"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <h4 className="text-xl font-bold text-foreground mb-2">Trial Activated!</h4>
                <p className="text-foreground-muted">{message}</p>
              </div>
            )}
          </div>
        </div>
      </div>
  );
};

export default FreeTrialWidget;
