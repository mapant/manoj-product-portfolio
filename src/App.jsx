import { useEffect, useState } from "react";
import {
  ArrowRight,
  BarChart3,
  Brain,
  Building2,
  CheckCircle2,
  ChevronRight,
  CircleDollarSign,
  Cloud,
  Code2,
  Database,
  FileText,
  Gauge,
  GitBranch,
  Layers3,
  Lightbulb,
  Link2,
  Mail,
  MapPin,
  MessageSquare,
  Network,
  Palette,
  Rocket,
  Send,
  Settings2,
  ShieldCheck,
  Sparkles,
  Target,
  TrendingUp,
  Users,
  Workflow,
  Zap,
} from "lucide-react";
import "./App.css";
import profilePhoto from "./assets/profile.jpg";

const navItems = [
  ["overview", "Overview"],
  ["ecosystem", "Ecosystem"],
  ["challenge", "Challenge"],
  ["strategy", "Strategy"],
  ["scope", "PM Scope"],
  ["metrics", "Product Metrics"],
  ["portfolio", "Portfolio"],
  ["tech", "Tech & Data"],
  ["outcomes", "Outcomes"],
  ["connect", "Connect"],
];

const scrollTo = (id) => {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
};

function Header({ active }) {
  return (
    <header className="site-header">
      <div className="brand">
        <div className="avatar">
        <img src={profilePhoto} alt="Manoj Pant" />
      </div>
        <div>
          <div className="brand-name">Manoj Pant</div>
          <div className="brand-role">SENIOR PRODUCT MANAGER</div>
        </div>
      </div>

      <nav className="main-nav">
        {navItems.map(([id, label]) => (
          <button
            key={id}
            className={active === id ? "nav-btn active" : "nav-btn"}
            onClick={() => scrollTo(id)}
          >
            {label}
          </button>
        ))}
      </nav>

      <button className="projects-btn" onClick={() => scrollTo("portfolio")}>
        <Layers3 size={17} />
        View Projects
        <ArrowRight size={17} />
      </button>
    </header>
  );
}

function SectionTag({ children }) {
  return <div className="section-tag">{children}</div>;
}

function Check({ children }) {
  return (
    <li>
      <CheckCircle2 size={15} />
      <span>{children}</span>
    </li>
  );
}

function MetricCard({ icon: Icon, value, label, color = "blue" }) {
  return (
    <div className={`metric-card ${color}`}>
      <Icon size={22} />
      <strong>{value}</strong>
      <span>{label}</span>
    </div>
  );
}

function MiniCard({ icon: Icon, title, text, color = "blue" }) {
  return (
    <div className={`mini-card ${color}`}>
      <div className="mini-icon">
        <Icon size={20} />
      </div>
      <div>
        <h4>{title}</h4>
        <p>{text}</p>
      </div>
    </div>
  );
}

function ProcessCard({ number, title, eyebrow, text, bullets, icon: Icon, color }) {
  return (
    <div className={`process-card ${color}`}>
      <div className="process-top">
        <span className="number">{number}</span>
        <div>
          <h3>{title}</h3>
          <small>{eyebrow}</small>
        </div>
        <Icon size={27} />
      </div>

      {text && <p className="process-text">{text}</p>}

      <ul>
        {bullets.map((item) => (
          <Check key={item}>{item}</Check>
        ))}
      </ul>

      <div className="pm-focus">
        <b>PM FOCUS</b>
        <span>{title === "Problem framing and opportunity"
          ? "Define a sharp problem statement and opportunity thesis."
          : title === "User, process and data discovery"
          ? "Build a shared understanding with evidence."
          : title === "Translate to product strategy"
          ? "Prioritize solutions and define what to build and why."
          : title === "Balance value, risk and feasibility"
          ? "Create a transparent, data-driven prioritization framework."
          : title === "Plan and sequence delivery"
          ? "Build a feasible, outcome-driven roadmap."
          : title === "Execute and scale solutions"
          ? "Turn product vision into working solutions."
          : "Close the loop with data and drive continuous improvement."}</span>
      </div>
    </div>
  );
}

function App() {
  const [active, setActive] = useState("overview");

  const sections = navItems.filter(([id]) => id !== "overview").map(([id]) => id);

  useEffect(() => {
    const root = document.documentElement;
    const baseWidth = 1440;
    const baseHeight = 900;
    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)");

    const applyLayout = () => {
      const dpr = window.devicePixelRatio || 1;
      const physicalWidth = window.innerWidth * dpr;
      const physicalHeight = window.innerHeight * dpr;
      const desktop = finePointer.matches && Math.max(physicalWidth, physicalHeight) >= 1000;

      if (desktop) {
        const scale = Math.min(window.innerWidth / baseWidth, window.innerHeight / baseHeight);
        root.dataset.layout = "desktop";
        root.style.setProperty("--ds", String(Math.max(0.25, Math.min(scale, 4.5))));
      } else {
        root.dataset.layout = "responsive";
        root.style.removeProperty("--ds");
      }
    };

    applyLayout();
    window.addEventListener("resize", applyLayout);
    window.visualViewport?.addEventListener("resize", applyLayout);
    finePointer.addEventListener?.("change", applyLayout);

    return () => {
      window.removeEventListener("resize", applyLayout);
      window.visualViewport?.removeEventListener("resize", applyLayout);
      finePointer.removeEventListener?.("change", applyLayout);
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible) setActive(visible.target.id);
      },
      { threshold: [0.25, 0.5, 0.75] }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    const onScroll = () => {
      if (window.scrollY < 120) setActive("overview");
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <div className="scale-stage">
      <div className="portfolio-app">
        <Header active={active} />

        <main>
        <div id="overview" className="overview-anchor" aria-hidden="true" />

        {/* =========================================================
            01 ECOSYSTEM
        ========================================================= */}
        <section id="ecosystem" className="page-section ecosystem-section dark-section">
          <div className="dark-copy">
            <SectionTag>PRODUCT ECOSYSTEM</SectionTag>
            <h2>
              Product is the coordination
              <br />
              layer between business,
              <br />
              technology and operations.
            </h2>
            <p>
              My role spans enterprise products where a feature is only one part
              of the solution. I connect that to the user journey with workflows,
              data, integrations, controls, intelligence and operational readiness.
            </p>

            <ul className="check-list">
              <Check>Customer and business problem → measurable outcome</Check>
              <Check>Product journey and workflow across multiple systems</Check>
              <Check>AI / GenAI opportunity in real business processes</Check>
              <Check>Automation and integration behavior with enterprise platforms</Check>
              <Check>Data, operations, compliance and support readiness</Check>
            </ul>

            <div className="ecosystem-visual">
              <span>Business<br />Goals</span>
              <span>Customer<br />Experience</span>
              <span>Technology<br />& Data</span>
              <strong>Product</strong>
              <span>Operations<br />& Support</span>
              <span>Compliance<br />& Risk</span>
            </div>

            <small className="bottom-caption">
              ENTERPRISE PRODUCT THINKING — FROM PROBLEM FRAMING TO PRODUCTION READINESS
            </small>
          </div>

          <div className="ecosystem-right">
            <MiniCard icon={Building2} title="Business" text="Goals, economics and operating constraints." />
            <MiniCard icon={Users} title="Customer" text="Journeys, pain points and adoption." color="purple" />
            <MiniCard icon={Layers3} title="Product" text="Vision, roadmap, capabilities and experience." color="green" />
            <MiniCard icon={Brain} title="AI & GenAI" text="Decisioning, document and knowledge workflows." color="orange" />
            <MiniCard icon={Settings2} title="Automation" text="Rules, approvals, exceptions and reconciliation." color="purple" />
            <MiniCard icon={Database} title="Data" text="SQL, BI, KPIs and product intelligence." color="green" />
            <MiniCard icon={GitBranch} title="Operations" text="Controls, rollout, training and support." color="pink" />
            <MiniCard icon={ShieldCheck} title="Compliance" text="AML/KYC, audit, regulatory and risk controls." color="orange" />

            <div className="ecosystem-hub">
              <Layers3 />
              <b>Product<br />Ecosystem</b>
              <small>Business · Customer · Product · Technology</small>
            </div>

            <div className="ecosystem-bottom">
              <span><Users /> 100%<small>CROSS-FUNCTIONAL COLLABORATION</small></span>
              <span><Database /> MULTI-SYSTEM<small>INTEGRATIONS & DATA FLOWS</small></span>
              <span><ShieldCheck /> COMPLIANT<small>AND SECURE BY DESIGN</small></span>
              <span><Target /> MEASURABLE<small>BUSINESS OUTCOMES</small></span>
            </div>
          </div>
        </section>

        {/* =========================================================
            02 CHALLENGE
        ========================================================= */}
        <section id="challenge" className="page-section dark-section challenge-section">
          <div className="dark-copy">
            <SectionTag>THE CHALLENGE</SectionTag>
            <h2>
              Complex enterprise
              <br />
              products rarely have
              <br />
              <span>a single problem.</span>
            </h2>
            <p>
              The hard part is usually the coordination: multiple stakeholders,
              systems, data sources, business rules, exceptions, regulatory
              requirements and operational hand-offs have to behave as one
              product experience.
            </p>

            <ul className="check-list">
              <Check>Customer and business problem → measurable outcome</Check>
              <Check>Product journey and workflow across multiple systems</Check>
              <Check>AI / GenAI opportunity in real business processes</Check>
              <Check>Automation and integration behavior with enterprise platforms</Check>
              <Check>Data, operations, compliance and support readiness</Check>
            </ul>

            <div className="challenge-stack">
              <span>People &<br />Stakeholders</span>
              <span>Business<br />Rules</span>
              <span>External<br />Systems</span>
              <strong>Business Processes</strong>
              <strong>Technology & Integrations</strong>
              <strong>Data & Intelligence</strong>
              <strong>Compliance & Risk</strong>
              <span>Measurable<br />Outcomes</span>
              <span>Scalable<br />Growth</span>
            </div>

            <small className="bottom-caption">
              PROBLEM FRAMING BEFORE SOLUTION DESIGN
            </small>
          </div>

          <div className="process-grid challenge-grid">
            <ProcessCard
              number="01"
              title="Fragmented processes"
              eyebrow="WORKFLOW"
              icon={Workflow}
              color="blue"
              bullets={[
                "Multiple teams and systems",
                "Manual hand-offs and rework",
                "Lack of end-to-end visibility",
              ]}
            />
            <ProcessCard
              number="02"
              title="Integration dependency"
              eyebrow="INTEGRATION"
              icon={Network}
              color="purple"
              bullets={[
                "Multiple internal and external systems",
                "API failures, retries and timeouts",
                "Data inconsistencies and reconciliation",
              ]}
            />
            <ProcessCard
              number="03"
              title="Decision complexity"
              eyebrow="DECISION"
              icon={FileText}
              color="orange"
              bullets={[
                "Complex business rules and policies",
                "Risk signals and multiple data inputs",
                "Need for transparent audit trail",
              ]}
            />
            <ProcessCard
              number="04"
              title="Manual operations"
              eyebrow="AUTOMATION"
              icon={Settings2}
              color="blue"
              bullets={[
                "Manual data entry and processing",
                "Repetitive checks and approvals",
                "Slow turnaround for customers and teams",
              ]}
            />
            <ProcessCard
              number="05"
              title="Data ambiguity"
              eyebrow="DATA"
              icon={Database}
              color="purple"
              bullets={[
                "Multiple source systems and data models",
                "Inconsistent KPI definitions",
                "Data quality and reconciliation issues",
              ]}
            />
            <ProcessCard
              number="06"
              title="Enterprise alignment"
              eyebrow="ALIGNMENT"
              icon={Target}
              color="orange"
              bullets={[
                "Diverse stakeholder priorities",
                "Different success metrics across teams",
                "Regulatory and roadmap requirements",
              ]}
            />
          </div>
        </section>

        {/* =========================================================
            03 STRATEGY
        ========================================================= */}
        <section id="strategy" className="page-section strategy-section">
          <div className="strategy-copy">
            <SectionTag>PRODUCT STRATEGY</SectionTag>
            <h2>
              From problem framing
              <br />
              to measurable
              <br />
              <span>product delivery.</span>
            </h2>
            <p>
              A practical product strategy that keeps customer need,
              business value, feasibility, AI potential and measurable
              outcomes connected.
            </p>

            <ul className="check-list">
              <Check>Bridge customer needs with business outcomes</Check>
              <Check>Data-informed, opportunity-driven prioritization</Check>
              <Check>Scalable and compliant product roadmaps</Check>
              <Check>Continuous learning and iteration for impact</Check>
            </ul>

            <div className="strategy-stack">
              <span>Market &<br />Competition</span>
              <span>Customer<br />Needs</span>
              <span>Technology<br />& AI Opportunity</span>
              <span>Business<br />Goals & OKRs</span>
              <strong>STRATEGY & PRIORITIES</strong>
              <strong>PRODUCT ROADMAP</strong>
              <strong>EXECUTION & ENABLEMENT</strong>
              <strong>MEASUREMENT & OUTCOMES</strong>
            </div>

            <small className="bottom-caption">
              A REPEATABLE PRODUCT STRATEGY FOR ENTERPRISE IMPACT
            </small>
          </div>

          <div className="strategy-right">
            <div className="strategy-orbit">
              <div className="orbit-center">
                <Layers3 />
                <b>PRODUCT<br />STRATEGY</b>
                <small>VISION → ROADMAP<br />EXECUTION → OUTCOMES</small>
              </div>
              <span className="orbit-node n1">Customer<br />Value</span>
              <span className="orbit-node n2">Business<br />Impact</span>
              <span className="orbit-node n3">Feasibility</span>
              <span className="orbit-node n4">Execution<br />Readiness</span>
              <span className="orbit-node n5">Measurable<br />Outcomes</span>
              <span className="orbit-node n6">Continuous<br />Learning</span>
            </div>

            <div className="process-grid strategy-process">
              <ProcessCard
                number="01"
                title="Problem framing and opportunity"
                eyebrow="FRAME"
                icon={Target}
                color="blue"
                bullets={[
                  "Understand customer and market context",
                  "Define the problem, use cases and scope",
                  "Identify opportunities including AI/automation",
                ]}
              />
              <ProcessCard
                number="02"
                title="User, process and data discovery"
                eyebrow="DISCOVER"
                icon={Lightbulb}
                color="purple"
                bullets={[
                  "User research and journey mapping",
                  "Process analysis and pain points",
                  "Data analysis and system landscape",
                ]}
              />
              <ProcessCard
                number="03"
                title="Translate to product strategy"
                eyebrow="DEFINE"
                icon={FileText}
                color="green"
                bullets={[
                  "Convert insights into vision and capabilities",
                  "Define target user experience",
                  "Set product strategy and roadmap",
                ]}
              />
              <ProcessCard
                number="04"
                title="Balance value, risk and feasibility"
                eyebrow="PRIORITIZE"
                icon={BarChart3}
                color="orange"
                bullets={[
                  "Evaluate opportunities based on value",
                  "Balance business and feasibility",
                  "Risk and compliance assessment",
                ]}
              />
              <ProcessCard
                number="05"
                title="Plan and sequence delivery"
                eyebrow="ROADMAP"
                icon={Layers3}
                color="pink"
                bullets={[
                  "Sequence capabilities, dependencies and releases",
                  "Define product roadmap and milestones",
                  "Plan capacity, dependencies and adoption",
                ]}
              />
              <ProcessCard
                number="06"
                title="Execute and scale solutions"
                eyebrow="DELIVER"
                icon={Rocket}
                color="blue"
                bullets={[
                  "Execute design, engineering, QA and security",
                  "Drive execution and release readiness",
                  "Enable adoption and continuous improvement",
                ]}
              />
              <ProcessCard
                number="07"
                title="Measure impact and iterate"
                eyebrow="LEARN & MEASURE"
                icon={TrendingUp}
                color="green"
                bullets={[
                  "Use feedback, usage and operational signals",
                  "Track adoption and usage",
                  "Iterate, optimize and plan next cycle",
                ]}
              />
            </div>
          </div>
        </section>

        {/* =========================================================
            04 PM SCOPE
        ========================================================= */}
        <section id="scope" className="page-section scope-section">
          <div className="scope-copy">
            <SectionTag>PM SCOPE</SectionTag>
            <h2>
              Product management
              <br />
              across strategy,
              <br />
              <span>systems and execution.</span>
            </h2>
            <p>
              End-to-end ownership from problem discovery and requirements
              to solution design, build, deployment and continuous improvement,
              across multiple stakeholders, systems and regulated environments.
            </p>

            <div className="scope-wheel">
              <span className="wheel-node p1">01<br />Discover</span>
              <span className="wheel-node p2">02<br />Define</span>
              <span className="wheel-node p3">03<br />Design</span>
              <span className="wheel-node p4">04<br />Architect</span>
              <span className="wheel-node p5">05<br />Automate</span>
              <span className="wheel-node p6">06<br />AI / GenAI</span>
              <span className="wheel-node p7">07<br />Deliver</span>
              <span className="wheel-node p8">08<br />Scale & Adopt</span>
              <div className="wheel-center">
                <Layers3 />
                <b>Product<br />Management</b>
              </div>
            </div>

            <div className="scope-footer">
              <span><Users /> Cross-functional<br />Collaboration</span>
              <span><ShieldCheck /> Regulated &<br />Compliant Delivery</span>
              <span><BarChart3 /> Data-Driven<br />Decisions</span>
              <span><TrendingUp /> Continuous<br />Improvement</span>
            </div>
          </div>

          <div className="process-grid scope-grid">
            <ProcessCard number="01" title="Discover" eyebrow="INSIGHTS" icon={Lightbulb} color="blue"
              bullets={["Understand customer needs, business problems and opportunities", "Stakeholder interviews & workshops", "Process mapping & current state analysis", "Identify problem statements & opportunities"]} />
            <ProcessCard number="02" title="Define" eyebrow="REQUIREMENTS" icon={FileText} color="purple"
              bullets={["Translate insights into clear requirements", "BRD, FRD, FSD and user stories", "Functional & non-functional requirements", "Acceptance criteria and use cases"]} />
            <ProcessCard number="03" title="Design" eyebrow="SOLUTION DESIGN" icon={Palette} color="green"
              bullets={["Create user-centric designs and product flows", "User journeys and process flows", "Figma prototypes and UX/UI design", "Workflow and rules design"]} />
            <ProcessCard number="04" title="Architect" eyebrow="TECHNICAL ARCHITECTURE" icon={Code2} color="orange"
              bullets={["Design scalable, secure and integration-ready solutions", "System architecture and DFDs", "ER models and data mapping", "API contracts and integration"]} />
            <ProcessCard number="05" title="Automate" eyebrow="WORKFLOWS & CONTROLS" icon={Settings2} color="pink"
              bullets={["Implement automation, rules and controls", "Rules engine and approval workflows", "Exception handling and alerts", "Reconciliation and compliance automation"]} />
            <ProcessCard number="06" title="AI / GenAI" eyebrow="INTELLIGENCE" icon={Brain} color="blue"
              bullets={["Enable AI-driven decisioning and document intelligence", "AI-assisted decisioning and risk profiling", "Document intelligence (IDP)", "GenAI for knowledge search and summarization"]} />
            <ProcessCard number="07" title="Deliver" eyebrow="EXECUTION" icon={Rocket} color="purple"
              bullets={["Drive development, testing and deployment", "Backlog grooming and sprint planning", "JIRA and Agile execution", "QA, UAT, VAPT and release management"]} />
            <ProcessCard number="08" title="Scale & Adopt" eyebrow="ADOPTION & IMPACT" icon={TrendingUp} color="green"
              bullets={["Drive adoption, measure outcomes and continuously improve", "Production rollout and user training", "Change management and L1/L2 support", "Usage tracking and product metrics"]} />
          </div>
        </section>

        {/* =========================================================
            05 PRODUCT METRICS
        ========================================================= */}
        <section id="metrics" className="page-section metrics-section">
          <div className="metrics-copy">
            <SectionTag>PRODUCT METRICS</SectionTag>
            <h2>
              Measure the product,
              <br />
              <span>not just the release.</span>
            </h2>
            <p>
              I use product metrics to connect activity to adoption, efficiency,
              quality, control and business impact. Metrics help measure outcomes
              across the entire product lifecycle, from user adoption and workflow
              behavior to operational efficiency and business value.
            </p>

            <div className="metric-pill-row">
              <span><Users /> Users<br /><small>Who is using the product?</small></span>
              <span><BarChart3 /> Behavior<br /><small>How are they using it?</small></span>
              <span><Settings2 /> Efficiency<br /><small>Is it reducing effort?</small></span>
              <span><Target /> Business Impact<br /><small>Is it creating measurable value?</small></span>
            </div>

            <div className="chart">
              <div className="chart-bars">
                <i style={{ height: "35%" }} />
                <i style={{ height: "48%" }} />
                <i style={{ height: "43%" }} />
                <i style={{ height: "65%" }} />
                <i style={{ height: "58%" }} />
                <i style={{ height: "78%" }} />
                <i style={{ height: "71%" }} />
                <i style={{ height: "91%" }} />
              </div>
              <div className="chart-line line-one" />
              <div className="chart-line line-two" />
              <div className="chart-line line-three" />
            </div>

            <div className="north-star">
              <Target />
              <span><b>North-star metric</b><small>Adoption → Usage → Workflow Behavior → Business Outcome</small></span>
            </div>
          </div>

          <div className="metric-cards-six">
            <MetricCard icon={Users} value="78%" label="User Adoption" color="purple" />
            <MetricCard icon={Rocket} value="62%" label="Activation Rate" color="purple" />
            <MetricCard icon={Settings2} value="45%" label="Effort Reduction" color="green" />
            <MetricCard icon={ShieldCheck} value="90%" label="Process Accuracy" color="orange" />
            <MetricCard icon={Brain} value="68%" label="STP Rate" color="pink" />
            <MetricCard icon={TrendingUp} value="32%" label="Cost Reduction" color="green" />

            <div className="formula-row">
              <span><b>Adoption rate</b><small>Active eligible users ÷ Total eligible users</small></span>
              <span><b>Activation rate</b><small>Users reaching first value ÷ Eligible users</small></span>
              <span><b>Efficiency gain</b><small>Baseline effort − current effort</small></span>
              <span><b>Automation rate</b><small>Automated cases ÷ Total eligible cases</small></span>
              <span><b>Exception rate</b><small>Exception cases ÷ Total processed cases</small></span>
            </div>
            <div className="metric-categories">
              <span><Users /> <b>Adoption & Usage</b><small>Users, activation, journey</small></span>
              <span><Settings2 /> <b>Operational Efficiency</b><small>Time, effort, automation</small></span>
              <span><ShieldCheck /> <b>Quality & Risk</b><small>Control, performance, SLA</small></span>
              <span><BarChart3 /> <b>Business Impact</b><small>Cost, productivity, revenue</small></span>
              <span><Brain /> <b>AI & Automation</b><small>Intelligence, STP, accuracy</small></span>
            </div>
          </div>
        </section>

        {/* =========================================================
            06 PORTFOLIO
        ========================================================= */}
        <section id="portfolio" className="page-section portfolio-section">
          <div className="portfolio-heading">
            <div>
              <SectionTag>SELECTED PRODUCT PORTFOLIO</SectionTag>
              <h2>
                Real products. Real impact.
                <span>Across domains and platforms.</span>
              </h2>
              <p>
                Five representative case studies from my product journey. Each project
                highlights the problem, my ownership, solution, key metrics and the impact created.
              </p>
            </div>
            <div className="portfolio-lens">
              <div className="mini-icon"><Target size={18} /></div>
              <div>
                <b>Portfolio lens</b>
                <p>Problem → Ownership → Solution → Execution → Outcome. Click to explore detailed case study for each product.</p>
              </div>
            </div>
          </div>

          <div className="portfolio-cards">
            <PortfolioCard
              number="01"
              company="M2P FINTECH"
              title="Integrated Channels Suite"
              subtitle="Modular digital banking platform for Banks and NBFCs."
              color="blue"
              icon={Layers3}
              problem="Banks and NBFCs needed connected capabilities across lending, compliance, reconciliation, payments and operations."
              ownership="Product strategy, requirements, workflows, API integrations, DFD / ER mapping, roadmap and delivery."
              outcome="A modular multi-application platform designed for configurable workflows and integration-ready deployment."
              stats={["100+ Banks", "12 Domain apps", "Multi-tenant Architecture"]}
              tags={["Banking", "Lending", "Payments", "Compliance"]}
            />
            <PortfolioCard
              number="02"
              company="M2P FINTECH"
              title="AML & Compliance Automation"
              subtitle="RBI-aligned transaction monitoring and automated reporting platform."
              color="orange"
              icon={ShieldCheck}
              problem="Compliance teams needed structured transaction monitoring, risk profiling, alert handling and regulatory reporting."
              ownership="Risk logic, transaction monitoring, exception handling and reporting requirements."
              outcome="Reduced manual compliance effort by 25% while improving audit and reporting controls."
              stats={["25% Manual effort ↓", "99% Alert accuracy", "CTR/STR/NTR automated"]}
              tags={["AML / KYC", "Risk Monitoring", "Regulatory", "Automation"]}
            />
            <PortfolioCard
              number="03"
              company="AYU HEALTH"
              title="Ayu DocConnect"
              subtitle="Doctor onboarding and patient engagement platform."
              color="green"
              icon={Users}
              problem="Doctor acquisition and onboarding required a scalable digital experience with clear provider journeys."
              ownership="0→1 product definition, onboarding flows, engagement workflows, adoption analysis and cross-functional delivery."
              outcome="Doctor adoption increased from 40% to 75% with improved onboarding and engagement."
              stats={["40% → 75%", "3x Faster onboarding", "Higher provider engagement"]}
              tags={["Onboarding", "Provider Experience", "Engagement", "Healthcare"]}
            />
            <PortfolioCard
              number="04"
              company="PHONEME / AYU HEALTH"
              title="Provider Payout Automation"
              subtitle="Rules-based payout processing with approvals and reconciliation."
              color="purple"
              icon={CircleDollarSign}
              problem="Provider payout processing involved multiple rules, manual calculations, approval gates and operational hand-offs."
              ownership="Workflow design, approval states, exception handling and operational reporting."
              outcome="Provider payout turnaround reduced from 10 days to 2 days with higher process accuracy."
              stats={["10d → 2d", "80%+ Faster", "99% Reconciliation"]}
              tags={["Automation", "Rules", "Approvals", "Healthcare"]}
            />
            <PortfolioCard
              number="05"
              company="NOKIA NETWORKS"
              title="Telecom Analytics & Cost Optimization"
              subtitle="Data-driven analytics for network rollout and financial tracking."
              color="pink"
              icon={BarChart3}
              problem="Large operational datasets needed clearer financial visibility, KPI tracking and cost optimization."
              ownership="SQL analysis, Power BI / Tableau reporting, KPI frameworks, financial tracking and workflow automation."
              outcome="Delivered 15–20% cost savings through better visibility and data-driven decisions."
              stats={["15–20% Cost savings", "Real-time Network insights", "Scalable Reporting"]}
              tags={["SQL", "Power BI", "Telecom", "Cost Optimization"]}
            />
          </div>
        </section>

        {/* =========================================================
            07 TECH & DATA
        ========================================================= */}
        <section id="tech" className="page-section tech-section">
          <div className="tech-heading">
            <SectionTag>TECH & DATA</SectionTag>
            <h2>
              Where product meets technology,
              <br />
              <span>AI and data.</span>
            </h2>
            <p>
              Technical product management grounded in enterprise architecture,
              APIs, workflows, analytics, integrations and delivery collaboration.
            </p>
          </div>

          <div className="tech-layout">
            <div className="tech-list">
              <TechRow number="01" title="Business Intent" icon={Target} text="Strategy · Discovery · Roadmap · MVP · Prioritization · GTM · Adoption" />
              <TechRow number="02" title="Product & Journeys" icon={Users} text="Vision · Journeys · User personas · Capabilities · Requirements · Release planning" color="purple" />
              <TechRow number="03" title="AI / GenAI Intelligence" icon={Brain} text="AI-assisted decisioning · GenAI use cases · Document intelligence · Knowledge workflows" color="green" />
              <TechRow number="04" title="Workflow & Automation" icon={Settings2} text="Rules engines · Approvals · Exception handling · Reconciliation · Compliance automation" color="orange" />
              <TechRow number="05" title="APIs, Architecture & Data" icon={Database} text="API-first products · Modular platforms · Integrations · DFD · ER models · KPI frameworks" color="blue" />
              <TechRow number="06" title="Delivery & Measurable Outcomes" icon={TrendingUp} text="Agile · JIRA · Epics · Stories · QA · UAT · VAPT · Migration · Deployment · Training" color="pink" />
            </div>

            <div className="technology-model">
              <div className="model-title">PRODUCT TECHNOLOGY MODEL <small>FROM BUSINESS REQUIREMENTS TO REAL-WORLD IMPACT</small></div>

              <div className="tech-flow">
                {[
                  ["Business", "Goals, needs and constraints", Building2],
                  ["Customer", "Journeys, features and experience", Users],
                  ["Intelligence", "AI / GenAI decisioning", Brain],
                  ["Workflow", "Rules & automation", Workflow],
                  ["Technology", "APIs & integrations", Code2],
                  ["Outcome", "Adoption & business value", TrendingUp],
                ].map(([title, text, Icon], i) => (
                  <div className={`flow-box flow-${i}`} key={title}>
                    <Icon />
                    <b>{title}</b>
                    <small>{text}</small>
                  </div>
                ))}
              </div>

              <div className="data-sources">
                <div>
                  <b>Data Sources</b>
                  <span>Core Systems</span>
                  <span>External APIs</span>
                  <span>Partner Systems</span>
                  <span>Documents</span>
                  <span>Real-time Data</span>
                </div>

                <div className="api-layer">
                  <b>API Layer</b>
                  <small>REST APIs · Integrations · Security & Access Control</small>
                </div>

                <div className="api-layer purple-layer">
                  <b>Product Services</b>
                  <small>Business Logic · Workflows · AI/GenAI · Rules & Compliance</small>
                </div>

                <div className="api-layer green-layer">
                  <b>Data Layer</b>
                  <small>SQL · Data Models · DFD · ER Models · Analytics</small>
                </div>

                <div className="outputs">
                  <b>Outputs & Impact</b>
                  <span>Operational Efficiency</span>
                  <span>Regulatory Compliance</span>
                  <span>Better User Experience</span>
                  <span>Cost Optimization</span>
                  <span>Business Growth</span>
                </div>
              </div>

              <div className="tools-row">
                {["SQL", "Power BI", "Tableau", "Looker Studio", "Excel", "Figma", "JIRA", "APIs", "DFD / ER", "Data Mapping"].map((tool) => (
                  <span key={tool}>{tool}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            08 OUTCOMES
        ========================================================= */}
        <section id="outcomes" className="page-section outcomes-section">
          <div className="outcomes-heading">
            <div>
              <SectionTag>PRODUCT OUTCOMES</SectionTag>
              <h2>
                Outcomes that connect product work
                <br />
                <span>to real business performance.</span>
              </h2>
              <p>
                Measurable impact across adoption, efficiency, automation, compliance
                and cost optimization from my product work in fintech, healthcare and telecom.
              </p>
            </div>
            <div className="outcome-lens">
              <b>Outcome lens</b>
              <p>Each outcome maps to a business goal and is measured through clear metrics across adoption, efficiency, automation, cost and impact.</p>
            </div>
          </div>

          <div className="outcome-top-cards">
            <OutcomeCard value="40% → 75%" label="Doctor adoption" detail="AYU HEALTH · DOCCONNECT" change="↑ 88% Increase in adoption" icon={Users} color="green" />
            <OutcomeCard value="10 → 2 days" label="Provider payout turnaround" detail="PHONEME / AYU HEALTH" change="↓ 80% Turnaround time" icon={CircleDollarSign} color="purple" />
            <OutcomeCard value="25%" label="Manual compliance effort reduction" detail="M2P FINTECH · AML / KYC" change="↓ 25% Manual effort reduced" icon={ShieldCheck} color="orange" />
            <OutcomeCard value="20%" label="Manual reconciliation reduction" detail="M2P FINTECH · UPI COLLECTIONS" change="↓ 20% Operations effort reduced" icon={Database} color="blue" />
            <OutcomeCard value="30%" label="Manual claim processing reduction" detail="CLAIMS AUTOMATION" change="↓ 30% Processing effort reduced" icon={Zap} color="pink" />
            <OutcomeCard value="25%" label="Telecom operating-cost reduction" detail="NOKIA NETWORKS" change="↓ 25% Opex cost reduction" icon={BarChart3} color="purple" />
          </div>

          <div className="outcome-bottom">
            <div className="outcome-framework">
              <h3>Outcome Framework</h3>
              <p>I link product work to measurable outcomes across the full product lifecycle.</p>
              <div className="framework-flow">
                <span>Adoption</span>
                <span>Engagement</span>
                <span>Efficiency</span>
                <span>Compliance</span>
                <span>Business Impact</span>
              </div>
            </div>

            <div className="domain-outcomes">
              <h3>Key Outcomes by Domain</h3>
              <OutcomeBar label="Adoption & Engagement" value="+60%" width="82%" color="green" />
              <OutcomeBar label="Operational Efficiency" value="+35%" width="60%" color="blue" />
              <OutcomeBar label="Compliance & Risk Reduction" value="+25%" width="47%" color="orange" />
              <OutcomeBar label="Cost Optimization" value="+25%" width="47%" color="purple" />
            </div>

            <div className="business-impact">
              <h3>Business Impact</h3>
              <p>Delivering value for customers, internal teams and end users.</p>
              <div className="impact-grid">
                <span><TrendingUp /> Better Customer Experience<small>Higher adoption and usage</small></span>
                <span><CircleDollarSign /> Lower Operational Cost<small>Automation and efficiency</small></span>
                <span><ShieldCheck /> Stronger Compliance Posture<small>Reduced risk and audit effort</small></span>
                <span><Rocket /> Scalable Product Platforms<small>Multi-tenant, configurable and integration-ready</small></span>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            09 CONNECT
        ========================================================= */}
        <section id="connect" className="page-section connect-section">
          <div className="connect-left">
            <SectionTag>CONNECT</SectionTag>
            <h2>
              Building products where
              <br />
              business, technology and
              <br />
              <span>outcomes meet.</span>
            </h2>

            <div className="connect-copy">
              <MapPin size={17} />
              <b>Based in Noida, India</b>
              <span>|</span>
              <b>Open to Product Management, Technical Product</b>
              <br />
              <b>and Business Transformation opportunities.</b>
            </div>

            <p>
              My experience spans the journey from data and business analysis to
              0→1 product development and enterprise platform management, with a
              focus on AI / GenAI, workflow automation and data-driven product decisions.
            </p>

            <div className="connect-pill-grid">
              <MiniCard icon={Target} title="Product Strategy" text="From discovery to scalable products." />
              <MiniCard icon={Brain} title="AI & GenAI" text="Intelligent products and automation." color="purple" />
              <MiniCard icon={Workflow} title="Workflow Automation" text="Efficient and scalable operations." color="green" />
              <MiniCard icon={Layers3} title="Technical Product Management" text="Platforms, integrations and enterprise systems." color="orange" />
              <MiniCard icon={BarChart3} title="Data & Analytics" text="Insights that drive business outcomes." color="pink" />
            </div>

            <div className="connect-bottom">
              <div>
                <h4>Connect on professional platforms</h4>
                <p>Let's connect and stay in touch on professional networks.</p>
                <div className="socials">
                  <a href="https://www.linkedin.com/in/manoj-pant-35129495/" target="_blank" rel="noreferrer"><span>in</span> LinkedIn</a>
                  <a href="https://github.com/mapant" target="_blank" rel="noreferrer"><GitBranch /> GitHub</a>
                  <a href="#" onClick={(e) => e.preventDefault()}><span>𝕏</span> X (Twitter)</a>
                </div>
              </div>

              <div>
                <h4>Open to opportunities</h4>
                <p>Open to Product Management, Technical Product, Business Analysis and strategic roles.</p>
                <div className="availability">
                  <span>● Full-time</span>
                  <span>● Contract / Consulting</span>
                  <span>● Remote / Hybrid</span>
                </div>
              </div>

              <div className="location-card">
                <MapPin />
                <b>Based in Noida, India</b>
                <small>Available for opportunities across India and open to relocation for the right role.</small>
              </div>
            </div>
          </div>

          <div className="contact-card">
            <div className="contact-top">
              <span>LET'S CONNECT</span>
              <Send size={38} />
            </div>

            <h3>Have a product, platform or transformation opportunity?</h3>
            <p>
              I'm open to conversations around Product Management,
              Technical Product Management, Business Analysis and enterprise technology products.
            </p>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                const data = new FormData(e.currentTarget);
                const subject = encodeURIComponent(
                  `Portfolio enquiry from ${data.get("name") || "visitor"}`
                );
                const body = encodeURIComponent(
                  `${data.get("message") || ""}\n\nCompany: ${data.get("company") || ""}\nEmail: ${data.get("email") || ""}`
                );
                window.location.href = `mailto:manoj-pant@outlook.com?subject=${subject}&body=${body}`;
              }}
            >
              <div className="form-row">
                <input name="name" placeholder="Your name *" required />
                <input name="company" placeholder="Your company" />
              </div>
              <input name="email" type="email" placeholder="Your email *" required />
              <select name="reason" defaultValue="">
                <option value="" disabled>I'm reaching out for...</option>
                <option>Product Management opportunity</option>
                <option>Technical Product Management</option>
                <option>Business Analysis</option>
                <option>Product consulting</option>
                <option>Other</option>
              </select>
              <textarea name="message" placeholder="Your message (optional)" maxLength="500" />
              <button type="submit">
                <Send size={17} />
                Send Message
                <ArrowRight size={17} />
              </button>
            </form>

            <small className="mail-note">
              This will open your email client with the details filled in.
            </small>
          </div>
        </section>
      </main>

      <footer>
        <span>© {new Date().getFullYear()} Manoj Pant</span>
        <span>Senior Product Manager · Product Portfolio</span>
      </footer>
      </div>
    </div>
  );
}

function PortfolioCard({
  number,
  company,
  title,
  subtitle,
  color,
  icon: Icon,
  problem,
  ownership,
  outcome,
  stats,
  tags,
}) {
  return (
    <article className={`portfolio-card ${color}`}>
      <div className="portfolio-card-head">
        <span className="portfolio-number">{number}</span>
        <small>{company}</small>
      </div>

      <div className="portfolio-icon">
        <Icon />
      </div>

      <h3>{title}</h3>
      <p className="portfolio-subtitle">{subtitle}</p>

      <div className="portfolio-block">
        <b>Problem</b>
        <p>{problem}</p>
      </div>

      <div className="portfolio-block">
        <b>My Ownership</b>
        <p>{ownership}</p>
      </div>

      <div className="portfolio-block">
        <b>Outcome</b>
        <p>{outcome}</p>
      </div>

      <div className="portfolio-stats">
        {stats.map((stat) => <span key={stat}>{stat}</span>)}
      </div>

      <div className="portfolio-tags">
        {tags.map((tag) => <span key={tag}>{tag}</span>)}
      </div>

      <a className="case-study-btn" href={
        {
          "Integrated Channels Suite": "/projects/integrated-channels",
          "AML & Compliance Automation": "/projects/aml-compliance",
          "Ayu DocConnect": "/projects/ayu-docconnect",
          "Provider Payout Automation": "/projects/provider-payout",
          "Telecom Analytics & Cost Optimization": "/projects/telecom-cost-optimization",
        }[title] || "/portfolio"
      }>
        View Case Study <ArrowRight size={15} />
      </a>
    </article>
  );
}

function TechRow({ number, title, icon: Icon, text, color = "blue" }) {
  return (
    <div className={`tech-row ${color}`}>
      <span className="tech-number">{number}</span>
      <Icon />
      <div>
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
      <ChevronRight />
    </div>
  );
}

function OutcomeCard({ value, label, detail, change, icon: Icon, color }) {
  return (
    <div className={`outcome-card ${color}`}>
      <Icon />
      <strong>{value}</strong>
      <b>{label}</b>
      <small>{detail}</small>
      <span>{change}</span>
    </div>
  );
}

function OutcomeBar({ label, value, width, color }) {
  return (
    <div className="outcome-bar">
      <div>
        <span>{label}</span>
        <b>{value}</b>
      </div>
      <div className="bar-track">
        <i className={color} style={{ width }} />
      </div>
    </div>
  );
}

export default App;