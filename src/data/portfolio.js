export const navItems = [
  ['overview', 'Overview'],
  ['ecosystem', 'Ecosystem'],
  ['challenge', 'Challenge'],
  ['strategy', 'Strategy'],
  ['scope', 'PM Scope'],
  ['metrics', 'Product Metrics'],
  ['portfolio', 'Portfolio'],
  ['tech', 'Tech & Data'],
  ['outcomes', 'Outcomes'],
  ['connect', 'Connect']
];

export const focusAreas = ['FinTech', 'Health Tech', 'AI Strategy', 'Copilot', 'Product Development'];

export const careerArc = [
  ['01', 'Analytics', 'SQL · Power BI · Tableau · KPI reporting'],
  ['02', 'Business Analysis', 'Requirements · process design · stakeholder discovery'],
  ['03', 'Technical Product', 'APIs · workflows · data flows · solution collaboration'],
  ['04', 'Product Management', 'Strategy · roadmap · delivery · adoption · outcomes']
];

export const ecosystem = [
  ['Business', 'Goals, economics and operating constraints', 'Strategy · OKRs · revenue · cost'],
  ['Customer', 'Journeys, pain points and adoption', 'Personas · journeys · experience'],
  ['Product', 'Vision, roadmap, capabilities and experience', 'Strategy · roadmap · capabilities'],
  ['AI & GenAI', 'Decisioning, document and knowledge workflows', 'Decisioning · IDP · copilot'],
  ['Automation', 'Rules, approvals, exceptions and reconciliation', 'Rules · approvals · STP'],
  ['Data', 'SQL, BI, KPIs and product intelligence', 'Data model · KPIs · insights'],
  ['Operations', 'Controls, rollout, training and support', 'SLAs · rollout · support'],
  ['Compliance', 'AML/KYC, audit, regulatory and risk controls', 'Risk · monitoring · reporting']
];

export const challenges = [
  ['01', 'Fragmented processes', 'Processes spread across teams and systems create hand-offs, rework and poor end-to-end visibility.'],
  ['02', 'Integration dependency', 'Products must account for APIs, external systems, failures, retries, timeouts and reconciliation.'],
  ['03', 'Decision complexity', 'Rules, risk signals, exceptions and human judgment need transparent decision workflows.'],
  ['04', 'Manual operations', 'Repetitive checks, approvals and data entry increase effort, errors and turnaround time.'],
  ['05', 'Data ambiguity', 'Different source systems and KPI definitions make product decisions harder to trust.'],
  ['06', 'Enterprise alignment', 'Business, UX, engineering, data, operations and compliance need one measurable outcome.']
];

export const strategySteps = [
  ['01', 'Frame', 'Problem framing and opportunity', 'Clarify the business problem, user pain points and measurable outcome.'],
  ['02', 'Discover', 'User, process and data discovery', 'Map users, journeys, processes, data and system dependencies.'],
  ['03', 'Define', 'Translate to product strategy', 'Convert evidence into vision, capabilities, requirements and success criteria.'],
  ['04', 'Prioritize', 'Balance value, risk and feasibility', 'Evaluate customer value, business impact, risk, feasibility and effort.'],
  ['05', 'Roadmap', 'Plan and sequence delivery', 'Sequence capabilities, dependencies, releases and adoption activities.'],
  ['06', 'Deliver', 'Execute and scale solutions', 'Coordinate design, engineering, QA, security, migration and release readiness.'],
  ['07', 'Learn & Measure', 'Measure impact and iterate', 'Use usage, feedback, exceptions and outcomes to improve the product.']
];

export const pmScope = [
  ['01', 'Discover', 'Workshops, interviews, process mapping, use cases and problem framing.'],
  ['02', 'Define', 'BRD / FRD / FSD, journeys, capabilities, user stories and acceptance criteria.'],
  ['03', 'Design', 'Figma prototypes, journeys, workflows and solution concepts.'],
  ['04', 'Architect', 'API contracts, DFDs, ER models, field mappings and integration behavior.'],
  ['05', 'Automate', 'Rules, approvals, exception handling, reconciliation and compliance workflows.'],
  ['06', 'AI / GenAI', 'Decisioning, document intelligence, knowledge workflows and intelligent assistance.'],
  ['07', 'Deliver', 'Backlog, epics, sprint execution, QA, UAT, VAPT and release coordination.'],
  ['08', 'Scale & Adopt', 'Migration, deployment, training, support readiness, rollout and feedback loops.']
];

export const metricGroups = [
  ['Adoption', 'Are intended users actually using the product?', 'Eligible-user adoption · active users · workflow completion'],
  ['Activation', 'How quickly does a user reach meaningful value?', 'Time to first value · activation rate · onboarding completion'],
  ['Efficiency', 'Does the product remove time, effort or manual work?', 'Turnaround time · effort saved · automation rate'],
  ['Quality & Risk', 'Does the process become more reliable and controlled?', 'Error rate · reconciliation breaks · control effectiveness'],
  ['AI & Automation', 'Is intelligence improving the workflow without losing control?', 'Assist rate · straight-through rate · human hand-off'],
  ['Business Impact', 'Did the product change a meaningful business outcome?', 'Cost reduction · productivity gain · revenue / service impact']
];

export const products = [
  { number: '01', company: 'M2P FINTECH', title: 'Integrated Channels Suite', problem: 'Connected capabilities across lending, compliance, reconciliation, payments and operations.', ownership: 'Product strategy, requirements, workflows, API integrations, DFD / ER mapping, roadmap and delivery.', outcome: 'Modular multi-application platform designed for configurable workflows and integration-led deployment.', tags: ['Banking', 'Lending', 'Payments'], url: '/projects/integrated-channels', tone: 'blue' },
  { number: '02', company: 'M2P FINTECH', title: 'AML & Compliance Automation', problem: 'Structured transaction monitoring, risk profiling, alert handling and regulatory reporting.', ownership: 'Product flow, rules, risk logic, transaction monitoring, exceptions and reporting requirements.', outcome: 'Automation initiative focused on reducing manual compliance effort while preserving audit and regulatory controls.', tags: ['AML / KYC', 'Decisioning', 'Compliance'], url: '/projects/aml-compliance', tone: 'amber' },
  { number: '03', company: 'AYU HEALTH', title: 'Ayu DocConnect', problem: 'Scalable doctor acquisition and onboarding with clear provider journeys.', ownership: '0→1 product definition, onboarding, engagement workflows, adoption analysis and delivery.', outcome: 'Doctor adoption increased from 40% to 75% in the represented initiative.', tags: ['0→1', 'Healthcare', 'Adoption'], url: '/projects/ayu-docconnect', tone: 'mint' },
  { number: '04', company: 'PHONEME / AYU HEALTH', title: 'Provider Payout Automation', problem: 'Payout processing involved rules, approvals, calculations and operational hand-offs.', ownership: 'Workflow design, approval states, exception handling, reporting and automation.', outcome: 'Provider payout turnaround represented in the portfolio moved from 10 days to 2 days.', tags: ['Automation', 'Rules', 'Healthcare'], url: '/projects/provider-payout', tone: 'lav' },
  { number: '05', company: 'NOKIA NETWORKS', title: 'Telecom Analytics & Cost Optimization', problem: 'Large operational datasets needed clearer financial visibility and cost-control decisions.', ownership: 'SQL analysis, Power BI / Tableau reporting, KPI frameworks and workflow automation.', outcome: 'The represented initiative delivered a 25% telecom operating-cost reduction.', tags: ['SQL', 'Power BI', 'Telecom'], url: '/projects/telecom-cost-optimization', tone: 'teal' }
];

export const capabilityRows = [
  ['Product', 'Strategy · discovery · roadmap · MVP · prioritization · GTM · adoption'],
  ['AI & GenAI', 'AI-assisted decisioning · GenAI use cases · document intelligence · knowledge workflows'],
  ['Automation', 'Rules engines · approvals · exception handling · reconciliation · compliance automation'],
  ['Architecture', 'API-first products · modular platforms · integrations · DFD · ER · field mapping'],
  ['Data', 'SQL · Power BI · Tableau · Looker Studio · Excel · KPI frameworks · analytics'],
  ['Delivery', 'Agile · JIRA · epics · stories · QA · UAT · VAPT · migration · deployment'],
  ['Enterprise', 'Banking · lending · payments · healthcare · telecom · regulated platforms'],
  ['Stakeholders', 'Business · clients · engineering · UX · data · QA · operations · compliance']
];

export const techLayers = [
  ['01', 'Business', 'Goals · users · process · economics · constraints'],
  ['02', 'Product', 'Vision · journeys · roadmap · capabilities · requirements'],
  ['03', 'Intelligence', 'AI / GenAI · decisioning · document intelligence · analytics'],
  ['04', 'Workflow', 'Rules · approvals · exceptions · reconciliation · orchestration'],
  ['05', 'Technology', 'APIs · integrations · architecture · data flows · deployment'],
  ['06', 'Outcome', 'Adoption · efficiency · quality · risk · business impact']
];

export const outcomes = [
  ['40% → 75%', 'Doctor adoption', 'Ayu Health'],
  ['10 → 2 days', 'Provider payout turnaround', 'Provider Automation'],
  ['25%', 'Manual compliance effort reduction', 'M2P Fintech · AML / Compliance'],
  ['20%', 'Manual reconciliation reduction', 'M2P Fintech · UPI Collections'],
  ['30%', 'Manual claim processing reduction', 'Claims Automation'],
  ['25%', 'Telecom operating-cost reduction', 'Nokia Networks']
];
