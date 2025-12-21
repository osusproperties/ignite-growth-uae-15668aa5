import { useParams, Link, Navigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackgroundAnimation from "@/components/BackgroundAnimation";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Clock, Calendar, User, Tag, Share2, Linkedin, Twitter, Facebook } from "lucide-react";

// Article data - in production this would come from a CMS or database
const articles = {
  "ai-automation-data-entry-reduction": {
    title: "How AI-Powered Automation Reduced Manual Data Entry by 85% for UAE Enterprises",
    excerpt: "A deep dive into how machine learning algorithms and intelligent document processing are eliminating repetitive tasks across finance, HR, and operations departments in the Middle East.",
    category: "AI & Automation",
    readTime: "7 min read",
    date: "Dec 15, 2024",
    author: "Mohammed Al Rashid",
    authorRole: "AI Solutions Architect",
    content: `
## The Hidden Cost of Manual Data Entry

Every day, businesses across the UAE waste thousands of hours on manual data entry. From processing invoices to updating customer records, these repetitive tasks consume valuable employee time that could be spent on strategic initiatives.

Our analysis of 50+ enterprise clients revealed that the average UAE business spends **23% of total operational hours** on manual data processing tasks. For a company with 100 employees, this translates to approximately AED 2.3 million annually in hidden productivity costs.

## The AI-Powered Solution

Modern AI-powered automation leverages three key technologies:

### 1. Intelligent Document Processing (IDP)

IDP combines Optical Character Recognition (OCR) with natural language processing to extract structured data from unstructured documents. Unlike traditional OCR, IDP understands context—it knows that "Invoice Date" on one document template means the same as "Date of Invoice" on another.

**Real-world impact:** A Dubai-based trading company reduced invoice processing time from 12 minutes to 45 seconds per document—an 94% reduction.

### 2. Machine Learning Classification

ML models automatically categorize incoming documents, emails, and requests without human intervention. These models improve over time, learning from corrections and edge cases.

**Key metrics from our implementations:**
- 97% accuracy in document classification
- 99.2% accuracy after 3 months of learning
- Zero configuration required for new document types

### 3. Robotic Process Automation (RPA)

RPA bots handle the "last mile" of automation—actually entering data into legacy systems, triggering workflows, and sending notifications. This is crucial for enterprises with older ERP systems that lack modern APIs.

## Implementation Roadmap

Successfully deploying AI automation requires a phased approach:

**Phase 1: Process Discovery (Week 1-2)**
- Map current workflows and identify automation candidates
- Calculate baseline metrics for comparison
- Prioritize by ROI potential

**Phase 2: Pilot Implementation (Week 3-4)**
- Deploy IDP for highest-volume document type
- Train ML models on historical data
- Configure RPA bots for target systems

**Phase 3: Scale & Optimize (Week 5-8)**
- Expand to additional document types
- Integrate with existing workflows
- Establish monitoring and exception handling

## Results You Can Expect

Based on our UAE implementations:

| Metric | Before | After | Improvement |
|--------|--------|-------|-------------|
| Processing time per document | 8-15 min | 30-90 sec | 85-95% |
| Error rate | 3-5% | <0.5% | 90%+ |
| Employee satisfaction | 62% | 89% | 43% |
| Cost per transaction | AED 12 | AED 1.80 | 85% |

## Getting Started

The key to successful AI automation is starting small and scaling based on proven results. Begin with a single high-volume, repetitive process—typically invoice processing or customer onboarding—and expand from there.

Our 14-day implementation program includes:
- Process assessment and ROI calculation
- Custom AI model training
- Integration with your existing systems
- Training for your team
- 90-day post-implementation support

Ready to eliminate manual data entry? [Book a free consultation](/book-consultation) to discuss your specific use case.
    `,
    relatedArticles: ["vat-phase-2-compliance-guide", "erp-implementation-failures"],
  },
  "vat-phase-2-compliance-guide": {
    title: "The Complete Guide to VAT Phase 2 Compliance in Saudi Arabia",
    excerpt: "With the Saudi ZATCA e-invoicing mandate now in full effect, businesses must adapt their ERP systems. Here's everything you need to know about achieving full compliance.",
    category: "Compliance",
    readTime: "12 min read",
    date: "Dec 10, 2024",
    author: "Fatima Hassan",
    authorRole: "Compliance Director",
    content: `
## Understanding ZATCA Phase 2 Requirements

The Zakat, Tax and Customs Authority (ZATCA) has implemented a comprehensive e-invoicing system that all businesses operating in Saudi Arabia must comply with. Phase 2, which began rollout in January 2023, introduces significant new requirements beyond the initial Phase 1 implementation.

## Key Phase 2 Requirements

### 1. Real-Time Integration

Unlike Phase 1, which only required generating compliant invoices, Phase 2 mandates real-time integration with ZATCA's platform. Every invoice must be:

- Validated by ZATCA before it can be shared with customers
- Stamped with a cryptographic seal
- Assigned a unique identifier
- Reported within 24 hours of issuance

### 2. Technical Standards

Your ERP system must support:

- **UBL 2.1 XML format** for invoice data
- **QR codes** containing invoice details for verification
- **Digital signatures** using approved certificates
- **API integration** with ZATCA's Fatoora platform

### 3. Invoice Types Covered

Phase 2 compliance applies to:
- Standard tax invoices (B2B)
- Simplified tax invoices (B2C)
- Credit notes
- Debit notes

## Implementation Steps

### Step 1: System Assessment

Evaluate your current ERP/accounting system:
- Does it support UBL 2.1 XML generation?
- Can it integrate with external APIs?
- Does it support digital certificate management?

### Step 2: Obtain Compliance Certificate

Register with ZATCA to receive your:
- Compliance certificate (CCSID)
- Production credentials
- API access keys

### Step 3: Integration Development

Work with your ERP vendor or implementation partner to:
- Develop ZATCA API integration
- Implement QR code generation
- Configure digital signature workflows
- Set up error handling for rejected invoices

### Step 4: Testing & Validation

ZATCA provides a sandbox environment for testing:
- Submit sample invoices
- Verify XML formatting
- Test error scenarios
- Validate QR code scanning

### Step 5: Go-Live & Monitoring

After successful testing:
- Switch to production environment
- Monitor rejection rates
- Address compliance issues promptly
- Maintain audit trails

## Common Compliance Pitfalls

**1. Incorrect Tax Calculations**
Ensure VAT calculations match ZATCA's rules exactly, including rounding.

**2. Missing Required Fields**
All 70+ mandatory fields must be populated correctly.

**3. Timing Violations**
Invoices must be reported within the 24-hour window.

**4. Certificate Expiration**
Digital certificates must be renewed before expiration.

## Penalties for Non-Compliance

ZATCA has outlined significant penalties:
- First offense: Warning
- Second offense: SAR 50,000 fine
- Continued violations: Up to SAR 100,000 per invoice
- Potential business suspension for repeated violations

## How SGC TECH AI Can Help

Our ZATCA compliance solution includes:
- Pre-configured ERP modules for Saudi VAT
- Automated ZATCA API integration
- Real-time validation before submission
- Compliance dashboard and reporting
- Ongoing support for regulation updates

[Contact our compliance team](/book-consultation) to ensure your business meets all ZATCA Phase 2 requirements.
    `,
    relatedArticles: ["ai-automation-data-entry-reduction", "erp-implementation-failures"],
  },
  "erp-implementation-failures": {
    title: "Why Traditional ERP Implementations Fail: Lessons from 50+ Projects",
    excerpt: "After analyzing implementation data from over 50 enterprise projects, we identified the top 5 reasons ERP deployments exceed budget and timeline—and how to avoid them.",
    category: "Implementation",
    readTime: "9 min read",
    date: "Dec 5, 2024",
    author: "Raj Patel",
    authorRole: "Head of Implementation",
    content: `
## The Sobering Reality of ERP Projects

Industry statistics paint a grim picture of ERP implementations:
- **70%** of ERP projects fail to meet their objectives
- Average cost overrun: **189%** of original budget
- Average timeline overrun: **230%** of planned duration
- **35%** of organizations report decreased productivity after go-live

After leading 50+ implementations across the GCC region, we've identified the root causes—and more importantly, how to avoid them.

## The Top 5 Reasons ERP Projects Fail

### 1. Insufficient Requirements Gathering

**The Problem:** Organizations rush into software selection without fully understanding their processes.

**Real Example:** A Dubai manufacturer selected an ERP based on a competitor's recommendation. Six months into implementation, they discovered it couldn't handle their multi-currency pricing model—a core business requirement.

**The Solution:**
- Spend 4-6 weeks on discovery before vendor selection
- Document ALL processes, not just the obvious ones
- Include frontline employees in requirements gathering
- Create a prioritized list of must-have vs. nice-to-have features

### 2. Underestimating Data Migration Complexity

**The Problem:** "Just move the data over" sounds simple. It's not.

**Typical challenges:**
- Duplicate records across legacy systems
- Inconsistent data formats
- Missing required fields
- Historical data integrity issues

**Real Example:** A retail chain's 2-month migration took 8 months because customer records had 47 different address formats and 12,000 duplicate entries.

**The Solution:**
- Audit data quality early in the project
- Plan for data cleansing before migration
- Build migration scripts that can be run multiple times
- Allow 30% buffer time for unexpected data issues

### 3. Inadequate Change Management

**The Problem:** Technology is easy. People are hard.

**Warning signs:**
- "We'll train them when we go live"
- No designated change champion
- Limited communication about the project
- No user acceptance testing

**The Solution:**
- Appoint change champions in each department
- Communicate early and often
- Involve users in testing and feedback
- Provide role-specific training, not generic overviews
- Celebrate quick wins publicly

### 4. Scope Creep Without Governance

**The Problem:** "While we're at it, can we also add..."

Every additional feature or customization adds:
- Development time
- Testing complexity
- Potential points of failure
- Future maintenance burden

**The Solution:**
- Establish a change control board
- Require business case for every change request
- Evaluate impact on timeline and budget before approval
- Save Phase 2 enhancements for after successful go-live

### 5. Choosing the Wrong Implementation Partner

**The Problem:** Not all partners are created equal.

**Red flags:**
- Promising unrealistic timelines
- No industry-specific experience
- Junior consultants doing senior work
- Vague or missing methodology
- Poor references from similar projects

**The Solution:**
- Check references thoroughly
- Meet the actual team (not just sales)
- Verify industry experience
- Understand their methodology
- Ensure knowledge transfer is included

## The SGC TECH AI Difference

We've built our entire methodology around avoiding these pitfalls:

**14-Day Implementation Framework**
Not because we rush—because we've eliminated the waste:
- Pre-built industry templates reduce configuration time
- AI-powered data migration handles complexity automatically
- Embedded training modules accelerate user adoption
- Agile sprints keep scope focused

**Guaranteed Results**
We don't just promise outcomes—we guarantee them:
- If we don't hit the timeline, you don't pay for overages
- If ROI isn't achieved in 6 months, we continue supporting at no cost

Ready to see how a successful implementation looks? [Schedule your consultation](/book-consultation) today.
    `,
    relatedArticles: ["ai-automation-data-entry-reduction", "vat-phase-2-compliance-guide"],
  },
  "real-estate-crm-integration": {
    title: "Real Estate CRM Integration: Connecting Yardi, PropertyFinder, and Bayut",
    excerpt: "A technical walkthrough of building seamless integrations between property management systems and major UAE real estate portals for automated listing syndication.",
    category: "Integration",
    readTime: "8 min read",
    date: "Nov 28, 2024",
    author: "Sarah Thompson",
    authorRole: "Integration Specialist",
    content: `
## The Challenge of Multi-Portal Listing Management

Real estate agencies in the UAE typically list properties across multiple portals simultaneously:
- PropertyFinder
- Bayut
- Dubizzle
- Company website
- International portals (Rightmove, Zillow International)

Manually managing listings across these platforms is:
- **Time-consuming:** 15-30 minutes per listing, per portal
- **Error-prone:** Inconsistent information across platforms
- **Outdated:** Status changes lag behind reality
- **Resource-intensive:** Dedicated staff for portal management

## The Integration Solution

A unified integration layer connects your CRM/Property Management System to all portals through a single workflow.

### Architecture Overview

\`\`\`
┌─────────────────┐
│   Yardi/Your    │
│   CRM System    │
└────────┬────────┘
         │
    ┌────▼────┐
    │ API Hub │
    └────┬────┘
         │
    ┌────┴────┬────────┬────────┐
    ▼         ▼        ▼        ▼
┌───────┐ ┌───────┐ ┌───────┐ ┌───────┐
│Bayut  │ │Finder │ │Dubiz  │ │Website│
└───────┘ └───────┘ └───────┘ └───────┘
\`\`\`

### Key Integration Features

**1. Bidirectional Sync**
- Listings pushed from CRM to portals
- Inquiries pulled from portals to CRM
- Status changes synchronized in real-time

**2. Media Management**
- Automatic image resizing per portal requirements
- Video hosting and embedding
- 360° tour integration
- Floor plan publishing

**3. Inquiry Routing**
- Lead capture from all portals
- Automatic assignment to agents
- Duplicate detection and merging
- Response time tracking

## Technical Implementation

### PropertyFinder API Integration

PropertyFinder provides a REST API for listing management:

\`\`\`javascript
// Sample PropertyFinder listing push
const publishListing = async (listing) => {
  const pfPayload = transformToPFFormat(listing);
  
  const response = await fetch(
    'https://api.propertyfinder.ae/v2/listings',
    {
      method: 'POST',
      headers: {
        'Authorization': \`Bearer \${API_KEY}\`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(pfPayload)
    }
  );
  
  return response.json();
};
\`\`\`

### Bayut XML Feed

Bayut accepts XML feeds for bulk updates:

\`\`\`xml
<?xml version="1.0" encoding="UTF-8"?>
<properties>
  <property>
    <reference>REF-001</reference>
    <title>Luxury 3BR Villa in Palm Jumeirah</title>
    <price currency="AED">15000000</price>
    <bedrooms>3</bedrooms>
    <bathrooms>4</bathrooms>
    <!-- Additional fields -->
  </property>
</properties>
\`\`\`

### Webhook Handling for Inquiries

\`\`\`javascript
// Handle incoming inquiry webhooks
app.post('/webhooks/inquiry', async (req, res) => {
  const { source, listing_ref, customer } = req.body;
  
  // Find listing in CRM
  const listing = await CRM.findByReference(listing_ref);
  
  // Create lead
  const lead = await CRM.createLead({
    source,
    listing_id: listing.id,
    customer_name: customer.name,
    customer_phone: customer.phone,
    customer_email: customer.email
  });
  
  // Notify assigned agent
  await notifyAgent(listing.agent_id, lead);
  
  res.json({ success: true });
});
\`\`\`

## Implementation Benefits

| Metric | Before Integration | After Integration |
|--------|-------------------|-------------------|
| Time per listing | 45 minutes | 5 minutes |
| Listings per day | 15-20 | 100+ |
| Inquiry response time | 4-6 hours | 15 minutes |
| Listing accuracy | 78% | 99.5% |

## Getting Started

Our pre-built integration modules support:
- Yardi Voyager
- PropertyMatrix
- Salesforce
- Custom CRMs via API

[Contact us](/book-consultation) for a demo of our real estate integration platform.
    `,
    relatedArticles: ["ai-automation-data-entry-reduction", "measuring-digital-transformation-roi"],
  },
  "measuring-digital-transformation-roi": {
    title: "Measuring Digital Transformation ROI: Beyond the Spreadsheet",
    excerpt: "Traditional ROI calculations miss 60% of digital transformation value. Learn the comprehensive framework for measuring operational efficiency, employee productivity, and customer satisfaction gains.",
    category: "Strategy",
    readTime: "6 min read",
    date: "Nov 20, 2024",
    author: "Ahmed Al Mansoori",
    authorRole: "Strategy Director",
    content: `
## The Problem with Traditional ROI

Most organizations calculate digital transformation ROI like this:

\`\`\`
ROI = (Cost Savings - Investment) / Investment × 100
\`\`\`

This approach captures only **direct cost savings**—typically labor reduction and efficiency gains. But digital transformation creates value across multiple dimensions that simple spreadsheet math can't capture.

## The Four Pillars of Transformation Value

### Pillar 1: Operational Efficiency (Traditional ROI)

This is what most calculations capture:
- Reduced processing time
- Lower error rates
- Decreased manual labor
- Faster cycle times

**Example calculation:**
- 10 employees × 2 hours/day saved × AED 50/hour × 250 days = **AED 250,000/year**

### Pillar 2: Revenue Enablement

Digital transformation often enables revenue that wasn't possible before:

- **Faster time-to-market:** Launching products 30% faster
- **Improved win rates:** Better data = better proposals
- **New service offerings:** Digital products and services
- **Market expansion:** Serving customers you couldn't before

**Example:** A construction company's new project bidding system increased win rates from 15% to 23%, generating AED 4.2M in additional contracts annually.

### Pillar 3: Risk Reduction

Quantifying avoided problems:
- **Compliance penalties avoided:** ZATCA fines, GDPR violations
- **Downtime prevention:** System reliability improvements
- **Fraud detection:** Catching issues before they become losses
- **Audit preparation:** Reduced audit costs and findings

**Example:** Automated compliance monitoring prevented an estimated AED 1.2M in potential ZATCA penalties.

### Pillar 4: Strategic Optionality

The hardest to quantify but often most valuable:
- **Agility:** Ability to respond to market changes
- **Scalability:** Growing without proportional cost increases
- **Innovation capacity:** Freed resources for new initiatives
- **Talent attraction:** Modern tools attract better employees

## The Comprehensive ROI Framework

### Step 1: Baseline Measurement

Before implementation, document:
- Process cycle times
- Error rates
- Employee hours by task
- Customer satisfaction scores
- Current system costs

### Step 2: Define Success Metrics

For each pillar, identify 2-3 measurable KPIs:

| Pillar | KPI Examples |
|--------|--------------|
| Operational | Processing time, error rate, throughput |
| Revenue | Win rate, time-to-market, cross-sell rate |
| Risk | Incident count, compliance score, audit findings |
| Strategic | Employee NPS, time-to-hire, innovation pipeline |

### Step 3: Attribution Modeling

Not all improvements come from the digital transformation. Use:
- **Control groups** where possible
- **Before/after comparison** with external factor adjustment
- **Stakeholder surveys** for qualitative attribution

### Step 4: Time-Horizon Analysis

Different benefits materialize at different times:
- **Immediate (0-3 months):** Efficiency gains
- **Short-term (3-12 months):** Risk reduction
- **Medium-term (1-2 years):** Revenue enablement
- **Long-term (2+ years):** Strategic optionality

## Real-World Example: Complete ROI Analysis

**Client:** Mid-size trading company (150 employees)
**Investment:** AED 850,000 (ERP + AI automation)

**Year 1 Value Captured:**

| Category | Value | How Measured |
|----------|-------|--------------|
| Labor efficiency | AED 420,000 | Time tracking before/after |
| Error reduction | AED 180,000 | Rework costs eliminated |
| Faster collections | AED 95,000 | DSO improvement |
| Avoided penalties | AED 150,000 | Compliance gap analysis |
| New customer acquisition | AED 340,000 | Attribution to faster quoting |
| **Total Year 1** | **AED 1,185,000** | |

**Traditional ROI:** (420,000 - 850,000) / 850,000 = **-51%** (looks like failure!)

**Comprehensive ROI:** (1,185,000 - 850,000) / 850,000 = **+39%**

The same project looks like a failure or success depending on measurement approach.

## Start Measuring Today

Download our [Digital Transformation ROI Calculator](/resources) to build your own comprehensive business case.

Or [schedule a consultation](/book-consultation) for a customized ROI analysis of your planned initiatives.
    `,
    relatedArticles: ["erp-implementation-failures", "legacy-to-cloud-manufacturing"],
  },
  "legacy-to-cloud-manufacturing": {
    title: "From Legacy Systems to Cloud: A Manufacturing Company's 18-Month Journey",
    excerpt: "Case study of how a 200-employee manufacturing firm in Jebel Ali Free Zone migrated from on-premise SAP to cloud-native Odoo while maintaining zero production downtime.",
    category: "Case Study",
    readTime: "11 min read",
    date: "Nov 12, 2024",
    author: "Chen Wei",
    authorRole: "Manufacturing Solutions Lead",
    content: `
## Company Background

**Industry:** Precision metal fabrication
**Location:** Jebel Ali Free Zone, Dubai
**Employees:** 200 (120 in production)
**Annual Revenue:** AED 85 million

The company had been running SAP Business One on-premise for 12 years. While the system was stable, they faced growing challenges:

- **End of support:** SAP was ending support for their version
- **Limited accessibility:** No mobile access for shop floor supervisors
- **Integration gaps:** Couldn't connect with modern tools (IoT sensors, BI platforms)
- **High maintenance costs:** AED 180,000/year for server infrastructure and support

## The Decision to Migrate

After evaluating options, the company chose to migrate to cloud-native Odoo:

**Why Odoo?**
- Modern architecture with REST APIs
- Native mobile applications
- Manufacturing-specific modules
- Lower total cost of ownership
- Open source flexibility for customization

**Key concerns:**
- Zero production downtime during migration
- Complete data preservation (12 years of history)
- User adoption with minimal disruption
- Integration with existing shop floor equipment

## Phase 1: Discovery & Planning (Months 1-3)

### Process Mapping

We documented every process, discovering several undocumented workarounds:
- Excel sheets tracking rework that bypassed the ERP
- WhatsApp groups for urgent material requests
- Paper-based quality checklists

These "shadow processes" became requirements for the new system.

### Data Audit

The SAP database contained:
- 847,000 transactions
- 12,400 products
- 2,100 customers
- 1,800 vendors
- 15 years of historical data

**Issues discovered:**
- 23% duplicate customer records
- 340 products with inconsistent units of measure
- 12 different date formats in imported data

### Parallel Operation Strategy

Rather than a "big bang" cutover, we planned for parallel operation:
- Run both systems simultaneously for 3 months
- Migrate one department at a time
- Maintain SAP as read-only backup

## Phase 2: Development & Customization (Months 4-8)

### Custom Manufacturing Modules

Standard Odoo MRP required enhancements for precision manufacturing:

- **Multi-level work orders:** Nested operations with dependencies
- **Quality inspection points:** Mandatory checkpoints with photo documentation
- **Material traceability:** Lot tracking from raw material to finished goods
- **Machine integration:** Real-time OEE data from CNC machines

### Data Migration Development

We built automated migration scripts with validation:

\`\`\`python
# Sample validation rule
def validate_customer(sap_record):
    validations = []
    
    # Check required fields
    if not sap_record.get('name'):
        validations.append('Missing customer name')
    
    # Validate TRN format
    trn = sap_record.get('tax_id', '')
    if trn and not re.match(r'^[0-9]{15}$', trn):
        validations.append(f'Invalid TRN format: {trn}')
    
    return validations
\`\`\`

### Integration Layer

Shop floor equipment integration required custom middleware:
- CNC machines (Fanuc, Mazak) → Production tracking
- CMM quality equipment → Inspection results
- Barcode scanners → Inventory movements

## Phase 3: Testing & Training (Months 9-12)

### User Acceptance Testing

Conducted with real production scenarios:
- 150 test cases covering all workflows
- Shop floor supervisors tested on tablets
- Stress testing with 10x normal transaction volume

### Training Program

Role-specific training delivered:

| Role | Hours | Format |
|------|-------|--------|
| Shop Floor Operators | 4 | Hands-on with tablets |
| Supervisors | 8 | Classroom + workshop |
| Planning Team | 16 | Intensive workshop |
| Finance | 12 | Process-focused |
| Management | 4 | Dashboard orientation |

## Phase 4: Phased Go-Live (Months 13-18)

### Month 13: Purchasing & Inventory

First module live—lowest risk with immediate value:
- Purchase orders created in Odoo
- Goods receipt recorded in both systems
- Inventory levels reconciled daily

### Month 14: Sales & CRM

Customer-facing processes migrated:
- Quotations generated from Odoo
- Orders entered in Odoo, copied to SAP for production
- Customer portal launched

### Month 15-16: Production

The critical manufacturing migration:
- Work orders generated in Odoo
- Shop floor tablets deployed
- Real-time production tracking activated
- SAP maintained for comparison

### Month 17-18: Finance & Full Cutover

Final phase completing the migration:
- Financial transactions fully in Odoo
- SAP set to read-only archive mode
- Historical data accessible but no new entries

## Results After 6 Months

| Metric | Before | After | Change |
|--------|--------|-------|--------|
| Order-to-delivery cycle | 18 days | 12 days | -33% |
| Inventory accuracy | 89% | 98.5% | +10.7% |
| Quality rejection rate | 4.2% | 1.8% | -57% |
| IT infrastructure costs | AED 180K/yr | AED 48K/yr | -73% |
| Employee productivity | Baseline | +23% | +23% |

## Lessons Learned

1. **Parallel operation is worth the cost** — Eliminated migration risk completely
2. **Data quality is a project in itself** — Allocate 30% more time than estimated
3. **Shop floor buy-in is critical** — Early involvement prevented resistance
4. **Document shadow processes** — They reveal real requirements

## Ready for Your Migration?

[Book a discovery session](/book-consultation) to discuss your legacy system modernization project.
    `,
    relatedArticles: ["erp-implementation-failures", "ai-automation-data-entry-reduction"],
  },
};

const Article = () => {
  const { slug } = useParams<{ slug: string }>();
  const article = slug ? articles[slug as keyof typeof articles] : null;

  if (!article) {
    return <Navigate to="/resources" replace />;
  }

  const shareUrl = window.location.href;
  const shareText = encodeURIComponent(article.title);

  return (
    <div className="min-h-screen bg-background relative">
      <BackgroundAnimation />
      <Header />
      <main className="pt-32 pb-4xl">
        <article className="container max-w-4xl">
          {/* Breadcrumb */}
          <div className="mb-xl animate-fade-in">
            <Link
              to="/resources"
              className="inline-flex items-center gap-2 text-foreground-muted hover:text-accent transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Resources
            </Link>
          </div>

          {/* Article Header */}
          <header className="mb-3xl animate-fade-in stagger-1">
            <div className="flex items-center gap-md mb-lg flex-wrap">
              <span className="px-4 py-1.5 rounded-full bg-accent/20 text-accent text-sm font-semibold">
                {article.category}
              </span>
              <span className="flex items-center gap-1 text-sm text-foreground-subtle">
                <Clock className="w-4 h-4" />
                {article.readTime}
              </span>
            </div>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-lg leading-tight">
              {article.title}
            </h1>
            
            <p className="text-xl text-foreground-muted mb-xl">
              {article.excerpt}
            </p>
            
            <div className="flex flex-wrap items-center justify-between gap-lg pb-xl border-b border-border">
              <div className="flex items-center gap-md">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                  <User className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">{article.author}</p>
                  <p className="text-sm text-foreground-muted">{article.authorRole}</p>
                </div>
              </div>
              <div className="flex items-center gap-md text-sm text-foreground-muted">
                <Calendar className="w-4 h-4" />
                {article.date}
              </div>
            </div>
          </header>

          {/* Article Content */}
          <div 
            className="prose prose-invert prose-lg max-w-none mb-3xl animate-fade-in stagger-2
              prose-headings:text-foreground prose-headings:font-display
              prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-6
              prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-4
              prose-p:text-foreground-muted prose-p:leading-relaxed
              prose-strong:text-foreground
              prose-a:text-accent prose-a:no-underline hover:prose-a:underline
              prose-code:bg-muted prose-code:px-2 prose-code:py-1 prose-code:rounded prose-code:text-sm
              prose-pre:bg-muted prose-pre:border prose-pre:border-border
              prose-table:border-collapse
              prose-th:bg-muted prose-th:px-4 prose-th:py-2 prose-th:text-left
              prose-td:border prose-td:border-border prose-td:px-4 prose-td:py-2
              prose-ul:text-foreground-muted
              prose-ol:text-foreground-muted
              prose-li:marker:text-accent
            "
            dangerouslySetInnerHTML={{ 
              __html: article.content
                .replace(/^## /gm, '<h2>')
                .replace(/^### /gm, '<h3>')
                .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
                .replace(/\n\n/g, '</p><p>')
                .replace(/<h2>/g, '</p><h2>')
                .replace(/<h3>/g, '</p><h3>')
                .replace(/(<h[23]>)([^<]+)/g, '$1$2</h$1>')
                .replace(/<\/h<h2>/g, '</h2>')
                .replace(/<\/h<h3>/g, '</h3>')
            }}
          />

          {/* Share Section */}
          <div className="glass rounded-xl p-xl mb-3xl animate-fade-in stagger-3">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-lg">
              <div className="flex items-center gap-md">
                <Share2 className="w-5 h-5 text-accent" />
                <span className="font-semibold text-foreground">Share this article</span>
              </div>
              <div className="flex items-center gap-md">
                <a
                  href={`https://www.linkedin.com/shareArticle?mini=true&url=${shareUrl}&title=${shareText}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-accent/20 transition-colors"
                  aria-label="Share on LinkedIn"
                >
                  <Linkedin className="w-5 h-5 text-foreground-muted" />
                </a>
                <a
                  href={`https://twitter.com/intent/tweet?url=${shareUrl}&text=${shareText}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-accent/20 transition-colors"
                  aria-label="Share on Twitter"
                >
                  <Twitter className="w-5 h-5 text-foreground-muted" />
                </a>
                <a
                  href={`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-accent/20 transition-colors"
                  aria-label="Share on Facebook"
                >
                  <Facebook className="w-5 h-5 text-foreground-muted" />
                </a>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="glass rounded-2xl p-xl md:p-3xl text-center animate-fade-in stagger-4">
            <h3 className="text-2xl font-bold text-foreground mb-md">
              Ready to Transform Your Business?
            </h3>
            <p className="text-foreground-muted mb-xl max-w-lg mx-auto">
              Book a free consultation to discuss how these insights can be applied to your organization.
            </p>
            <Button variant="hero" size="lg" className="pulse-glow" asChild>
              <Link to="/book-consultation">Book Free Consultation</Link>
            </Button>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default Article;
