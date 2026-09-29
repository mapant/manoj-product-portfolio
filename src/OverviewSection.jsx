import {
  BarChart3,
  Brain,
  Building2,
  Database,
  FileText,
  Layers3,
  Network,
  Rocket,
  Settings2,
  ShieldCheck,
  Sparkles,
  Target,
  TrendingUp,
  Users,
  Cloud,
} from "lucide-react";
import "./Overview.css";

function MetricCard({ icon: Icon, value, label, color = "blue" }) {
  return (
    <div className={`overview-metric ${color}`}>
      <Icon size={22} />
      <strong>{value}</strong>
      <span>{label}</span>
    </div>
  );
}

function MiniCard({ icon: Icon, title, text, color = "blue" }) {
  return (
    <div className={`overview-expertise-card ${color}`}>
      <div className="overview-mini-icon">
        <Icon size={20} />
      </div>
      <div>
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
    </div>
  );
}

export default function OverviewSection() {
  return (
    <section id="overview" className="page-section overview-section" aria-label="Portfolio overview">
      <div className="overview-left">
        <div className="overview-tag">PRODUCT STRATEGY · AI & GENAI · ENTERPRISE PLATFORMS</div>

        <h1>
          Building products
          <br />
          from <span>complex problems</span>
          <br />
          to measurable <em>impact.</em>
        </h1>

        <p className="overview-lead">
          Senior Product Manager with <b>10+ years of experience</b> across FinTech,
          Healthcare, Telecom and Enterprise IT — combining product strategy,
          business analysis, technology, data and execution to build scalable
          enterprise products.
        </p>

        <div className="overview-metrics">
          <MetricCard icon={ShieldCheck} value="10+" label="YEARS EXPERIENCE" />
          <MetricCard icon={Building2} value="12+" label="ENTERPRISE APPLICATIONS" color="green" />
          <MetricCard icon={Users} value="4" label="INDUSTRY ECOSYSTEMS" color="orange" />
          <MetricCard icon={Rocket} value="0→1" label="PRODUCT DEVELOPMENT" color="purple" />
        </div>

        <h2 className="overview-subheading">CORE EXPERTISE</h2>

        <div className="overview-expertise-grid">
          <MiniCard icon={BarChart3} title="Analytics" text="SQL · Power BI · Tableau · KPI Reporting" />
          <MiniCard icon={FileText} title="Business Analysis" text="Requirements · Process Design · Stakeholder Discovery" color="green" />
          <MiniCard icon={Settings2} title="Technical Product" text="APIs · Workflows · Data Flows · Solution Collaboration" color="purple" />
          <MiniCard icon={Target} title="Product Management" text="Strategy · Roadmap · Delivery · Adoption · Outcomes" color="purple" />
          <MiniCard icon={Brain} title="AI & GenAI" text="AI Strategy · Copilot · LLMs · Intelligent Workflows" color="purple" />
          <MiniCard icon={Network} title="Automation & Integration" text="API-First · Microservices · Cloud · Enterprise Platforms" color="blue" />
        </div>
      </div>

      <div className="overview-operating-model" aria-label="Product operating model">
        <div className="overview-model-header">
          <div>
            <span className="overview-cube-icon"><Layers3 size={19} /></span>
            <b>PRODUCT OPERATING MODEL</b>
          </div>
          <span>PROBLEM → PRODUCT → OUTCOME</span>
        </div>

        <div className="overview-model-grid">
          <div className="overview-model-box business">
            <Building2 />
            <h3>Business</h3>
            <p>FinTech | Health Tech | Telecom</p>
            <div className="overview-bar-chart"><i /><i /><i /></div>
          </div>

          <div className="overview-model-box ai">
            <Brain />
            <h3>AI & GenAI</h3>
            <p>AI Strategy | Copilot | LLMs</p>
            <Sparkles className="model-secondary-icon" />
          </div>

          <div className="overview-model-center">
            <Layers3 />
            <b>Product</b>
            <span>Manoj Pant – Technical Product Manager</span>
          </div>

          <div className="overview-model-box automation">
            <Settings2 />
            <h3>Automation</h3>
            <p>API-First | Microservices | Cloud</p>
            <Cloud className="model-secondary-icon" />
          </div>

          <div className="overview-model-box data">
            <Database />
            <h3>Data</h3>
            <p>SQL | Power BI | KPI Frameworks</p>
            <BarChart3 className="model-secondary-icon" />
          </div>
        </div>

        <div className="overview-model-footer">
          <span><Target /> <b>STRATEGY</b><small>Vision · Priorities · Roadmap</small></span>
          <span><Settings2 /> <b>DELIVERY</b><small>Build · Integrate · Deploy</small></span>
          <span><TrendingUp /> <b>ADOPTION & OUTCOMES</b><small>Scale · Measure · Impact</small></span>
        </div>
      </div>
    </section>
  );
}
