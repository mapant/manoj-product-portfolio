export const navItems = [
  ['overview', 'Overview'], ['ecosystem', 'Ecosystem'], ['challenge', 'Challenge'],
  ['strategy', 'Strategy'], ['scope', 'PM Scope'], ['metrics', 'Product Metrics'],
  ['portfolio', 'Portfolio'], ['tech', 'Tech & Data'], ['outcomes', 'Outcomes'], ['connect', 'Connect']
];

export const expertise = [
  ['Analytics', 'SQL · Power BI · Tableau · KPI Reporting'],
  ['Business Analysis', 'Requirements · Process Design · Stakeholder Discovery'],
  ['Technical Product', 'APIs · Workflows · Data Flows · Solution Collaboration'],
  ['Product Management', 'Strategy · Roadmap · Delivery · Adoption · Outcomes'],
  ['AI & GenAI', 'AI Strategy · Copilot · LLMs · Intelligent Workflows'],
  ['Automation & Integration', 'API-First · Microservices · Cloud · Enterprise Platforms']
];

export const ecosystemCards = [
  { title: 'Business', color: 'blue', intro: 'Goals, economics and operating constraints', bullets: ['Business strategy & OKRs', 'Revenue, cost and productivity', 'Operating model and constraints'] },
  { title: 'Customer', color: 'purple', intro: 'Journeys, pain points and adoption', bullets: ['User personas and segments', 'Journey mapping and NPS', 'Adoption and experience metrics'] },
  { title: 'Product', color: 'green', intro: 'Vision, roadmap, capabilities and experience', bullets: ['Product strategy and roadmap', 'Capabilities and features', 'Omnichannel experience'] },
  { title: 'AI & GenAI', color: 'orange', intro: 'Decisioning, document and knowledge workflows', bullets: ['AI-assisted decisioning', 'Document intelligence (IDP)', 'Knowledge and copilot workflows'] },
  { title: 'Automation', color: 'purple', intro: 'Rules, approvals, exceptions and reconciliation', bullets: ['Workflow automation', 'Approvals and exception handling', 'Reconciliation and straight-through'] },
  { title: 'Data', color: 'green', intro: 'SQL, BI, KPIs and product intelligence', bullets: ['Source systems and data model', 'KPI definitions and product analytics', 'Insights and data-driven decisions'] },
  { title: 'Operations', color: 'pink', intro: 'Controls, rollout, training and support', bullets: ['Operational processes and SLAs', 'Rollout, change and training', 'L1/L2/L3 support and continuous improvement'] },
  { title: 'Compliance', color: 'amber', intro: 'AML/KYC, audit, regulatory and risk controls', bullets: ['Regulatory and policy compliance', 'Risk controls and monitoring', 'Audit readiness and reporting'] }
];

export const challengeCards = [
  { n: '01', type: 'WORKFLOW', title: 'Fragmented processes', description: 'Turn business processes spread across teams and systems into one coherent product journey.', points: ['Multiple teams and systems', 'Inconsistent process variants', 'Manual hand-offs and rework', 'Lack of end-to-end visibility'], response: 'Map, standardize and streamline the end-to-end product workflow.' },
  { n: '02', type: 'INTEGRATION', title: 'Integration dependency', description: 'Design product behavior around APIs, external systems, failures, retries and reconciliation.', points: ['Multiple external and internal systems', 'API failures, retries and timeouts', 'Data inconsistencies and reconciliation', 'Dependency on third-party platforms'], response: 'Define integration patterns, failure handling and reconciliation logic.' },
  { n: '03', type: 'DECISION', title: 'Decision complexity', description: 'Convert rules, risk signals, exceptions and human judgment into clear decision workflows.', points: ['Complex business rules and policies', 'Risk signals and multiple data inputs', 'High exception and manual review', 'Need for transparent audit trail'], response: 'Design decision workflows with clear rules, thresholds and exception handling.' },
  { n: '04', type: 'AUTOMATION', title: 'Manual operations', description: 'Find opportunities to remove repetitive work through workflow automation and intelligent assistance.', points: ['Manual data entry and processing', 'Repetitive checks and approvals', 'High operational effort and errors', 'Slow turnaround for customers and teams'], response: 'Automate workflows, approvals and exception handling with appropriate controls.' },
  { n: '05', type: 'DATA', title: 'Data ambiguity', description: 'Create a reliable link between source data, KPI definitions, reporting and product decisions.', points: ['Multiple source systems and data models', 'Inconsistent KPI definitions', 'Data quality and reconciliation issues', 'Limited product and operational insights'], response: 'Define data model, KPI framework and reliable reporting for product decisions.' },
  { n: '06', type: 'ALIGNMENT', title: 'Enterprise alignment', description: 'Bring business, design, engineering, data, operations, compliance and clients around one outcome.', points: ['Diverse stakeholder priorities', 'Different success metrics across teams', 'Regulatory and compliance requirements', 'Need for shared roadmap and accountability'], response: 'Align stakeholders with a clear product vision, roadmap and measurable outcomes.' }
];

export const strategySteps = [
  ['01', 'FRAME', 'Problem framing and opportunity', 'Clarify the business problem, user pain points and measurable outcome.', ['Understand customer and market context', 'Define the problem, success criteria and scope', 'Identify opportunities (including AI/automation)', 'Assess constraints and dependencies'], 'Define a sharp problem statement and opportunity thesis.'],
  ['02', 'DISCOVER', 'User, process and data discovery', 'Map users, journeys, processes, data and system dependencies.', ['User research and journey mapping', 'Process analysis and pain points', 'Data analysis and system landscape', 'Identify automation and AI opportunities'], 'Build a shared understanding with evidence.'],
  ['03', 'DEFINE', 'Translate to product strategy', 'Convert insights into vision, capabilities, requirements and acceptance criteria.', ['Define target user experience & capabilities', 'Set product strategy and positioning', 'Write and validate clear requirements', 'Align on KPIs and success metrics'], 'Prioritize solutions and define what to build and why.'],
  ['04', 'PRIORITIZE', 'Balance value, risk and feasibility', 'Evaluate opportunities based on customer value, business impact, feasibility and AI potential.', ['Value vs. effort and impact analysis', 'Risk and compliance assessment', 'Technical and operational feasibility', 'Identify quick wins and strategic bets'], 'Create a transparent, data-driven prioritization framework.'],
  ['05', 'ROADMAP', 'Plan and sequence delivery', 'Sequence capabilities, dependencies, releases and adoption activities.', ['Define product roadmap and milestones', 'Identify cross-team dependencies', 'Plan for adoption, change management and training', 'Allocate resources and capacity'], 'Build a feasible, outcome-driven roadmap.'],
  ['06', 'DELIVER', 'Execute and scale solutions', 'Coordinate design, engineering, QA, UAT, security, migration and release readiness.', ['Drive execution and remove blockers', 'Ensure quality and compliance', 'Enable user adoption and training', 'Scale across teams and geographies'], 'Turn plans into working solutions with measurable outcomes.'],
  ['07', 'LEARN & MEASURE', 'Measure impact and iterate', 'Use feedback, usage, exceptions and operational signals to improve the product.', ['Track adoption and usage', 'Measure business outcomes (KPIs)', 'Capture user feedback and insights', 'Iterate, optimize and plan next cycle'], 'Close the loop with data and drive continuous improvement.']
];

export const scopeCards = [
  { n: '01', title: 'Discover', eyebrow: 'INSIGHTS', description: 'Understand customer needs, business problems and opportunities.', items: ['Stakeholder interviews & workshops', 'Process mapping & current state analysis', 'Market and user research', 'Identify problem statements & opportunities'], output: 'Problem statement, user insights, process maps, opportunity assessment' },
  { n: '02', title: 'Define', eyebrow: 'REQUIREMENTS', description: 'Translate insights into clear requirements and acceptance criteria.', items: ['BRD, FRD, FSD and user stories', 'Functional & non-functional requirements', 'Acceptance criteria and use cases', 'Stakeholder alignment & sign-offs'], output: 'BRD / FRD / FSD, user stories, acceptance criteria, prioritization (MoSCoW)' },
  { n: '03', title: 'Design', eyebrow: 'SOLUTION DESIGN', description: 'Create user-centric designs and product workflows aligned to business goals.', items: ['User journeys and process flows', 'Figma prototypes and UX design', 'Workflow and rules design', 'Feature specifications'], output: 'Figma designs, user journeys, workflow diagrams, feature specs' },
  { n: '04', title: 'Architect', eyebrow: 'TECHNICAL ARCHITECTURE', description: 'Design scalable, secure and integration-ready solutions.', items: ['System architecture and DFDs', 'ER models and data mapping', 'API contracts and integrations', 'Security, compliance and scalability'], output: 'Architecture diagrams, DFD, ER model, API specs, integration design, compliance controls' },
  { n: '05', title: 'Automate', eyebrow: 'WORKFLOWS & CONTROLS', description: 'Implement automation, rules and controls to reduce manual effort and improve accuracy.', items: ['Rules engine and approval workflows', 'Exception handling and alerts', 'Reconciliation and compliance automation', 'Operational dashboards'], output: 'Automated workflows, rules, alerts, reconciliation logic, operational dashboards' },
  { n: '06', title: 'AI / GenAI', eyebrow: 'INTELLIGENCE', description: 'Enable AI-driven decisioning, document intelligence and knowledge workflows.', items: ['AI-assisted decisioning and risk profiling', 'Document intelligence (IDP)', 'GenAI for knowledge search and summarization', 'Process intelligence and optimization'], output: 'AI models, document AI workflows, GenAI features, intelligent recommendations' },
  { n: '07', title: 'Deliver', eyebrow: 'EXECUTION', description: 'Drive development, testing and deployment across teams and environments.', items: ['Backlog grooming and sprint planning', 'JIRA and Agile execution', 'QA, UAT, VAPT and release management', 'Stakeholder demos and training'], output: 'Working product, UAT sign-off, release notes, training and handover' },
  { n: '08', title: 'Scale & Adopt', eyebrow: 'ADOPTION & IMPACT', description: 'Drive adoption, measure outcomes and continuously improve.', items: ['Production rollout and user training', 'Change management and L1/L2 support', 'Usage tracking and product metrics', 'Continuous feedback and enhancement'], output: 'Adoption metrics, business impact, feedback loop, roadmap for next phase' }
];

export const metricGroups = [
  { n: '01', title: 'Adoption', question: 'Are the intended users actually using the product?', color: 'blue', items: ['Eligible user adoption (%)', 'Active users (DAU / MAU)', 'Workflow completion rate', 'Feature adoption by module'], value: '78%', label: 'User Adoption', change: '↑ 12%' },
  { n: '02', title: 'Activation', question: 'How quickly does a user reach meaningful value?', color: 'purple', items: ['Time to first value', 'Onboarding completion rate', 'Feature activation rate', 'User journey drop-off rate'], value: '62%', label: 'Activation Rate', change: '↑ 18%' },
  { n: '03', title: 'Efficiency', question: 'Does the product remove time, effort or manual work?', color: 'green', items: ['Turnaround time reduction', 'Manual effort saved (hours)', 'Automation rate (%)', 'Cost per transaction/process'], value: '45%', label: 'Effort Reduction', change: '↑ 25%' },
  { n: '04', title: 'Quality & Risk', question: 'Does the product make the process more reliable and controlled?', color: 'amber', items: ['Error / exception rate', 'Reconciliation breaks (%)', 'SLA / TAT adherence', 'Audit readiness & control effectiveness'], value: '90%', label: 'Process Accuracy', change: '↑ 20%' },
  { n: '05', title: 'AI & Automation', question: 'Is intelligence improving the workflow without losing control?', color: 'pink', items: ['AI assist usage rate', 'Straight-through processing rate', 'Document processing accuracy', 'Human hand-off reduction'], value: '68%', label: 'STP Rate', change: '↑ 30%' },
  { n: '06', title: 'Business Impact', question: 'Did the product change a meaningful business outcome?', color: 'teal', items: ['Cost reduction (%)', 'Productivity gain (%)', 'Revenue / service impact', 'Customer / stakeholder satisfaction'], value: '32%', label: 'Cost Reduction', change: '↑ 40%' }
];

export const metricFormulas = [
  ['Adoption rate', 'Active eligible users ÷ Total eligible users × 100'],
  ['Activation rate', 'Users reaching first value ÷ Eligible users × 100'],
  ['Efficiency gain', '(Baseline effort − Current effort) ÷ Baseline effort × 100'],
  ['Automation rate', 'Automated cases ÷ Total eligible cases × 100'],
  ['Exception rate', 'Exception cases ÷ Total processed cases × 100']
];

export const products = [
  { number: '01', company: 'M2P FINTECH', title: 'Integrated Channels Suite', short: 'Digital banking platform for banks and NBFCs.', problem: 'Banks and NBFCs needed connected capabilities across lending, compliance, reconciliation, payments and operations.', ownership: 'Product strategy, requirements, workflows, API integrations, DFD / ER mapping, roadmap and delivery.', outcome: 'A modular multi-application platform designed for configurable workflows and integration-led deployment.', stats: [['100+', 'Banks deployed'], ['12', 'Domain apps'], ['Multi-tenant', 'Architecture']], tags: ['Banking', 'Lending', 'Payments', 'Compliance'], url: '/projects/integrated-channels', tint: 'blue' },
  { number: '02', company: 'AYU HEALTH', title: 'Ayu DocConnect', short: 'Doctor engagement, referral & patient journey platform.', problem: 'Doctor relationships and patient referrals needed a connected digital journey across the Ayu Health ecosystem.', ownership: 'Product-management workstreams spanning doctor journey, growth and engagement, service integration, and measurement.', outcome: 'Connected doctor referrals, patient journey visibility, engagement and healthcare services in one product experience.', stats: [['1,150+', 'Doctors installed / logged in'], ['400+', 'Monthly active users'], ['170+', 'Weekly active users']], tags: ['Doctor Engagement', 'Patient Journey', 'Referrals', 'Healthcare'], url: '/projects/ayu-docconnect', tint: 'green' },
  { number: '03', company: 'AYU HEALTH', title: 'Sales Intelligence & Field Force Optimization', short: 'Data-driven doctor acquisition, territory planning & field execution.', problem: 'BDMs needed structured prospect discovery, visit prioritisation and territory-aware field plans.', ownership: 'Business analytics review participation across prospect data, decision logic, field experience and measurement.', outcome: 'A two-BDM Bangalore manual pilot measured higher unique doctor visits and lower distance travelled per visit.', stats: [['+60%', 'Unique visits · BDM 1'], ['+166%', 'Unique visits · BDM 2'], ['−18% / −15%', 'Distance per visit · BDM 1 / 2']], tags: ['Sales Intelligence', 'Territory Planning', 'Field Execution', 'Healthcare'], url: '/projects/ayu-sales-intelligence', tint: 'purple' },
  { number: '04', company: 'NOKIA NETWORKS', title: 'Telecom Analytics & Cost Optimization', short: 'Enterprise network analytics & capital-efficiency platform.', problem: 'Large operational datasets needed clearer financial visibility, KPI tracking and cost optimization.', ownership: 'SQL analysis, Power BI / Tableau reporting, KPI frameworks, financial tracking and workflow automation.', outcome: 'Delivered 15–20% cost savings through better visibility and data-driven decisions.', stats: [['15–20%', 'Cost savings'], ['Real-time', 'Network insights'], ['Scalable', 'Reporting framework']], tags: ['SQL', 'Power BI', 'Telecom', 'Cost Optimization'], url: '/projects/telecom-cost-optimization', tint: 'pink' }
];

export const techLayers = [
  ['01', 'Business Intent', 'Strategy · Discovery · Roadmap · MVP · Prioritization · GTM · Adoption'],
  ['02', 'Product & Journeys', 'Vision · Journeys · User personas · Capabilities · Requirements · Release planning'],
  ['03', 'AI / GenAI Intelligence', 'AI-assisted decisioning · GenAI use cases · Document intelligence · Knowledge workflows'],
  ['04', 'Workflow & Automation', 'Rules engines · Approval orchestration · Exception handling · Reconciliation · Compliance automation'],
  ['05', 'APIs, Architecture & Data', 'API-first products · Modular platforms · Integrations · DFD · ER models · Field mapping'],
  ['06', 'Delivery & Measurable Outcomes', 'Agile · JIRA · Epics · Stories · QA · UAT · VAPT · Migration · Deployment · Training']
];

export const outcomes = [
  { value: '40% → 75%', title: 'Doctor adoption', source: 'AYU HEALTH · DOCONNECT', color: 'green', delta: '↑ 88%', detail: 'Increase in adoption' },
  { value: '10 → 2 days', title: 'Provider payout turnaround', source: 'PHONEME / AYU HEALTH', color: 'purple', delta: '↓ 80%', detail: 'Turnaround time' },
  { value: '25%', title: 'Manual compliance effort reduction', source: 'M2P FINTECH · AML / KYC', color: 'amber', delta: '↓ 25%', detail: 'Manual effort reduced' },
  { value: '20%', title: 'Manual reconciliation reduction', source: 'M2P FINTECH · UPI COLLECTIONS', color: 'blue', delta: '↓ 20%', detail: 'Operations effort reduced' },
  { value: '30%', title: 'Manual claim processing reduction', source: 'CLAIMS AUTOMATION', color: 'pink', delta: '↓ 30%', detail: 'Processing effort reduced' },
  { value: '25%', title: 'Telecom operating-cost reduction', source: 'NOKIA NETWORKS', color: 'purple', delta: '↓ 25%', detail: 'Opex cost reduction' }
];

export const connectFocus = [
  ['Product Strategy', 'From discovery to scalable products.', 'blue'],
  ['AI & GenAI', 'Intelligent products and automation.', 'purple'],
  ['Workflow Automation', 'Efficient and scalable operations.', 'green'],
  ['Technical Product Management', 'Platforms, integrations and enterprise systems.', 'amber'],
  ['Data & Analytics', 'Insights that drive business outcomes.', 'pink']
];
