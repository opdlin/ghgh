export interface ExecutionSegment {
  id: string;
  index: string;
  title: string;
  subtitle: string;
  leadMetric: string;
  leadMetricLabel: string;
  summary: string;
  description: string;
  capabilities: string[];
  typicalClients: string[];
  image: string;
  featuredSpan?: 'wide' | 'standard';
}

export interface ComparisonRow {
  dimension: string;
  traditional: string;
  odplStandard: string;
}

export interface CapabilityCheck {
  capability: string;
  standardContractor: boolean;
  odplStandard: boolean;
}

export interface MethodologyStage {
  step: string;
  title: string;
  summary: string;
  deliverable: string;
}

export interface ServicePhase {
  id: string;
  phase: string;
  title: string;
  items: string[];
}

export interface TechModule {
  id: string;
  name: string;
  tagline: string;
  headlineMetric: string;
  description: string;
  features: string[];
}

export interface FeaturedProject {
  id: string;
  title: string;
  client: string;
  category: 'Transportation & Infra' | 'Corporate Fit-Outs' | 'Retail & QSR' | 'Establishments';
  metric: string;
  location: string;
  summary: string;
  scopeDetails: string[];
  image: string;
}

export interface ClientRecord {
  name: string;
  sector: string;
  engagement: string;
}

export const ODPL_PROFILE_PDF_URL =
  '/assets/aistudio/ODPl_Updated_profile_2026__1.pptx_20260908_135418_0000_c64113f4.pdf';

export const HERO_BANNER_IMAGE = '/src/assets/images/hero_reliance_campus_1795167757652.jpg';

export const SNAPSHOT_TABS = {
  scale: [
    { label: 'Flagship Infra Contract', value: '₹3 Cr+', detail: 'HSR Sabarmati Bullet Train Hub (NHSRCL)' },
    { label: 'Retail Network Rollout', value: '50+ Stores', detail: 'Reliance Fresh & Smart Hubs across UP' },
    { label: 'Turnkey Corporate Fit-Outs', value: '33,000+ Sq.Ft.', detail: 'Insecticide India & ION Exchange Delivered' },
    { label: 'Site Governance', value: '100% Digital', detail: 'PMS Portal & ODVIX AI Geo-Tagged Audits' },
  ],
  mantra: [
    { label: '01. Plan', value: 'Master Scheduling', detail: 'BOQ Finalization & Locked-In Rate Analysis' },
    { label: '02. Build', value: 'Site Execution', detail: 'Self-Governing Crews & Tier-1 EHS Safety' },
    { label: '03. Deliver', value: 'Zero-Rework', detail: 'Pre-Delivery Snag Audits & Formal Warranty' },
    { label: '24/7 Visibility', value: 'ODVIX AI + PMS', detail: 'Evening Photo-Verified DPRs & ESI/PF Proof' },
  ],
};

export const CONTRACTOR_COMPARISON: ComparisonRow[] = [
  {
    dimension: 'Site Supervision & Progress',
    traditional: 'Unpredictable progress requiring constant PM follow-ups and supervision.',
    odplStandard: 'Plug-and-play execution. Self-governing crews with daily micro-deliverables.',
  },
  {
    dimension: 'Commercials & BOQ Billing',
    traditional: 'Opaque lump-sum billing leading to commercial disputes and variation delays.',
    odplStandard: '100% Transparent, line-item BOQs with pre-agreed rate analysis and digital approvals.',
  },
  {
    dimension: 'Workforce Safety & Compliance',
    traditional: 'Lax adherence to site safety standards and frequent labor compliance risks.',
    odplStandard: 'Biometric/geo-verified attendance, statutory labor compliance, and full PPE protocols.',
  },
  {
    dimension: 'Progress Reporting',
    traditional: 'Lagging paper reports that obscure critical site bottlenecks.',
    odplStandard: 'Real-time PMS portal delivering time-stamped, photo-verified DPRs every evening.',
  },
];

export const CRITICAL_CAPABILITIES: CapabilityCheck[] = [
  {
    capability: 'Geo-Verified Labor Attendance & Statutory ESI/PF Compliance',
    standardContractor: false,
    odplStandard: true,
  },
  {
    capability: 'Tier-1 HSE & EHS Protocol Adherence on Site',
    standardContractor: false,
    odplStandard: true,
  },
  {
    capability: 'Itemized BOQs with Transparent Rate Analysis',
    standardContractor: false,
    odplStandard: true,
  },
  {
    capability: 'Pre-Delivery Snag Audits for Zero-Rework Handover',
    standardContractor: false,
    odplStandard: true,
  },
];

export const EXECUTION_METHODOLOGY: MethodologyStage[] = [
  {
    step: '01',
    title: 'Discovery & Scope',
    summary:
      'Site surveys, detailed scope finalization, and synchronization with the Principal Contractor’s EHS guidelines.',
    deliverable: 'Site Readiness & EHS Alignment Report',
  },
  {
    step: '02',
    title: 'Planning & BOQ',
    summary:
      'Creation of accurate RFIs, micro-schedules, approved shop drawings, and locked-in rate analyses.',
    deliverable: 'Itemized BOQ & Master Baseline Schedule',
  },
  {
    step: '03',
    title: 'Digital Execution',
    summary:
      'Rapid workforce mobilization, live resource tracking, and daily photo-verified progress reporting on PMS.',
    deliverable: 'Evening Geo-Tagged DPR & Quality Trail',
  },
  {
    step: '04',
    title: 'Testing & Handover',
    summary:
      'Comprehensive snag audit, MEP load testing, as-built documentation, and warranty package handover.',
    deliverable: 'Zero-Rework Handover & QA Dossier',
  },
];

export const END_TO_END_SERVICES: ServicePhase[] = [
  {
    id: 'coordination',
    phase: 'Phase 01',
    title: 'Construction Co-ordination',
    items: [
      'Tender Documents',
      'Project Schedules',
      'Council & Building Owner Approvals',
      'Site Meetings',
      'Site Inspections',
      'Move Co-ordination',
      'Defect Rectification',
    ],
  },
  {
    id: 'completion',
    phase: 'Phase 02',
    title: 'Completion',
    items: [
      'As-Built Drawings & Quality Assurance Manuals',
      'Relocation Co-ordination',
      'Defect Inspections & Rectification',
    ],
  },
  {
    id: 'post-construction',
    phase: 'Phase 03',
    title: 'Post Construction',
    items: [
      'Handover Documents & Manuals',
      'Post Contract Works & Services',
      'Satisfaction Survey',
    ],
  },
];

export const EXECUTION_SEGMENTS: ExecutionSegment[] = [
  {
    id: 'civil-infra',
    index: '01',
    title: 'Civil & Infra — Transportation Hubs',
    subtitle: 'High-stakes structural works, waterproofing, and commercial concrete builds',
    leadMetric: '₹3 Cr+ Contract',
    leadMetricLabel: 'HSR Sabarmati Bullet Train Corridor Hub (NHSRCL)',
    summary:
      'High-stakes structural works, specialized industrial waterproofing, substructures, and commercial concrete builds for airports, railway stations, mega building structures, and warehouses.',
    description:
      'ODPL partners with premier EPC contractors and infrastructure authorities to execute time-critical civil substructures, multi-layer structural waterproofing, and heavy-duty concrete packages under strict international QA benchmarks.',
    capabilities: [
      'Structural waterproofing & expansion joint treatment for transit hubs',
      'Substructure & RCC commercial concrete execution under NHSRCL-grade specs',
      'Multi-stage micro-scheduling synchronized with principal EPC timelines',
      'Material test certificate tracking and third-party lab audit readiness',
    ],
    typicalClients: ['NHSRCL (National High-Speed Rail)', 'Airports & Metro Concourses', 'Industrial Warehouses'],
    image: '/assets/odpl/slide_img_05_739x415.jpg',
    featuredSpan: 'wide',
  },
  {
    id: 'corporate-fitouts',
    index: '02',
    title: 'Corporate Fit-Outs',
    subtitle: 'Turnkey interiors for MNCs & GCCs with precision MEP and HVAC',
    leadMetric: '33,000+ Sq.Ft.',
    leadMetricLabel: 'Delivered for Insecticide India & ION Exchange',
    summary:
      'Turnkey interiors for MNCs & GCCs, integrating HVAC, precision MEP, fire safety, and acoustic partition systems.',
    description:
      'From bare-shell civil alterations to acoustic glass partitions, server rooms, lighting automation, and ergonomic workstation zones, ODPL delivers turnkey workspaces built for immediate occupancy.',
    capabilities: [
      'Complex structural civil alterations & acoustic dry-wall partitioning',
      'High-capacity HVAC ducting, VRF integration, and MEP load balancing',
      'Fire detection, suppression, access control, and structured IT networking',
      'Custom reception millwork, fluted wall paneling, and architectural lighting',
    ],
    typicalClients: ['Insecticide India Limited', 'ION Exchange Limited', 'Enterprise GCCs & Tech Offices'],
    image: '/assets/odpl/slide_img_06_1280x719.jpg',
    featuredSpan: 'standard',
  },
  {
    id: 'retail-qsr',
    index: '03',
    title: 'Retail & QSR',
    subtitle: 'Rapid multi-city store rollouts engineered for high durability',
    leadMetric: '50+ Stores',
    leadMetricLabel: 'Reliance Fresh & Smart Hubs Delivered Across UP',
    summary:
      'Rapid rollouts for high-traffic multinational retail and restaurant chains, engineered for high operational durability.',
    description:
      'Speed-to-market defines retail and QSR profitability. ODPL deploys standardized playbooks and self-governing crews to deliver parallel store launches across multiple cities without compromising finishes.',
    capabilities: [
      'Fast-track civil, flooring, cold-room prep, and storefront glazing',
      'Commercial kitchen exhaust, gas-bank safety, and heavy-duty MEP fit-out',
      'Brand-standard signage, racking base readiness, and checkout lighting',
      'Simultaneous multi-city execution across Tier 1, Tier 2, and Tier 3 hubs',
    ],
    typicalClients: ['Reliance Retail (Fresh & Smart)', 'Burger King', 'Multi-format Supermarket & QSR Chains'],
    image: '/assets/odpl/slide_img_08_1023x704.jpg',
    featuredSpan: 'standard',
  },
  {
    id: 'institutions',
    index: '04',
    title: 'Institutions — Schools & Colleges',
    subtitle: 'Campus upgrades, structural expansions, and statutory-compliant builds',
    leadMetric: '100% Statutory',
    leadMetricLabel: 'Fire, Accessibility & NBC Safety Adherence',
    summary:
      'Comprehensive institutional upgrades, structural expansions, and educational facilities adhering to statutory guidelines.',
    description:
      'We build safe, enduring academic campuses, auditoriums, laboratories, and multi-storey institutional blocks engineered for decades of high occupancy and strict statutory fire and structural compliance.',
    capabilities: [
      'Structural expansions, reinforced concrete frames, and facade elevations',
      'Acoustic classrooms, auditoriums, and specialized laboratory MEP',
      'Strict adherence to National Building Code (NBC) fire and life-safety norms',
      'Zero-disruption phased execution during active academic calendars',
    ],
    typicalClients: ['K-12 Schools & Academies', 'University Campuses', 'Institutional Training Centers'],
    image: '/assets/odpl/slide_img_15_1280x905.jpg',
    featuredSpan: 'standard',
  },
  {
    id: 'hospitality-establishments',
    index: '05',
    title: 'Hospitality & Bespoke Establishments',
    subtitle: 'Architectural interiors, acoustic lounges, and exterior facades',
    leadMetric: 'Zero-Rework',
    leadMetricLabel: 'Pre-Delivery Snag Audited Establishments',
    summary:
      'Custom hospitality lounges, executive suites, and multi-storey residential/commercial elevations executed with fine architectural detailing.',
    description:
      'Across signature lounges, dining environments, and luxury architectural facades, ODPL combines precision millwork, sculptural wall treatments, concealed linear lighting, and stone finishing.',
    capabilities: [
      'Custom CNC fluted wall paneling, mirrored archways, and warm ambient lighting',
      'Multi-storey architectural facade finishing and exterior linear LED detailing',
      'Italian marble / vitrified flooring, bespoke furniture installation, and audio integration',
      'Full As-Built documentation and post-handover maintenance support',
    ],
    typicalClients: ['Hospitality Lounges & Restaurants', 'Commercial Buildings', 'Enterprise Executive Floors'],
    image: '/assets/odpl/slide_img_02_1280x720.jpg',
    featuredSpan: 'standard',
  },
];

export const TECHNOLOGY_MODULES: TechModule[] = [
  {
    id: 'pms-platform',
    name: 'Proprietary PMS Platform',
    tagline: '24/7 Single Source of Truth for Principal Contractors',
    headlineMetric: 'Daily 6 PM DPRs',
    description:
      'We replace chaotic site communication with structured digital governance. Our custom cloud dashboard provides principal contractors and PMC engineers with real-time visibility from ground-break to handover.',
    features: [
      'Live Daily Progress Reports (DPRs) with time-stamped photographic verification',
      'Inventory stage-tracking across cement, steel, MEP fixtures, and finishing lots',
      'Digital material test certificate uploads and RFI / drawing revision logs',
      'Automated milestone verification mapped directly to itemized BOQ billing',
    ],
  },
  {
    id: 'odvix-ai',
    name: 'ODVIX AI Site Intelligence',
    tagline: 'Proactive Safety, Quality & Compliance Engine',
    headlineMetric: 'Zero Fraudulent Claims',
    description:
      'Equipped with our ODVIX AI engine, we systematically track site safety infractions, PPE adherence, and quality benchmarks before they impact your critical path.',
    features: [
      'AI-assisted detection of PPE compliance and site hazard zones in daily imagery',
      'Time-stamped and geo-tagged visual audit trail for client & consultant reviews',
      'Biometric & geo-verified workforce attendance tied to ESI/PF statutory filings',
      'Pre-delivery automated snag checklists ensuring zero-rework handover',
    ],
  },
];

export const FEATURED_PROJECTS: FeaturedProject[] = [
  {
    id: 'hsr-sabarmati',
    title: 'HSR Sabarmati Hub (Bullet Train)',
    client: 'NHSRCL / Primary EPC Partner',
    category: 'Transportation & Infra',
    metric: '₹3 Cr+ Contract Value',
    location: 'Sabarmati, Gujarat',
    summary:
      'Delivered critical civil contracting and extensive structural waterproofing for India’s first High-Speed Rail corridor hub at Sabarmati.',
    scopeDetails: [
      'Executed under strict adherence to multi-stage schedules and rigorous international quality standards specified by NHSRCL.',
      'Specialized industrial waterproofing across high-load substructure and concourse zones.',
      'Full compliance with Tier-1 EHS guidelines and daily digital DPR sign-offs.',
    ],
    image: '/assets/odpl/slide_img_05_739x415.jpg',
  },
  {
    id: 'insecticide-india',
    title: 'Insecticide India Limited — Corporate HQ',
    client: 'Insecticide India Limited',
    category: 'Corporate Fit-Outs',
    metric: '18,000 sq.ft.',
    location: 'New Delhi',
    summary:
      'Turnkey execution of an 18,000 sq.ft. corporate office facility including complex structural civil alterations and integrated MEP infrastructure.',
    scopeDetails: [
      'Complete bare-shell transformation with structural civil modifications and acoustic glass cabins.',
      'Integrated linear LED lighting, modular workstations, fire safety, and structured data cabling.',
      'Delivered on schedule with zero-rework snag closure.',
    ],
    image: '/assets/odpl/slide_img_06_1280x719.jpg',
  },
  {
    id: 'ion-exchange',
    title: 'ION Exchange Limited — Corporate Workspace',
    client: 'ION Exchange Limited',
    category: 'Corporate Fit-Outs',
    metric: '15,000 sq.ft.',
    location: 'NCR / Metro Hub',
    summary:
      'Delivered a 15,000 sq.ft. corporate workspace featuring high-capacity HVAC ducting, enterprise networking, and refined architectural finishes.',
    scopeDetails: [
      'High-capacity HVAC ducting and exposed architectural ceiling baffle systems.',
      'Fluted acoustic corridor wall cladding, frosted glass meeting suites, and ergonomic floorplates.',
      'End-to-end MEP load testing and As-Built QA handover.',
    ],
    image: '/assets/odpl/slide_img_07_1280x719.jpg',
  },
  {
    id: 'reliance-retail-up',
    title: 'Reliance Fresh & Reliance Smart Hubs',
    client: 'Reliance Retail',
    category: 'Retail & QSR',
    metric: '50 Stores Delivered',
    location: 'Uttar Pradesh',
    summary:
      'Executed rapid multi-city store rollouts for Reliance Fresh and Reliance Smart neighborhood hubs across Uttar Pradesh.',
    scopeDetails: [
      'Standardized civil, heavy-duty retail flooring, electrical distribution, and storefront glazing.',
      'Coordinated parallel mobilization across multiple UP cities to meet strict launch dates.',
      'Engineered for high daily footfall durability and cold-chain utility integration.',
    ],
    image: '/assets/odpl/slide_img_08_1023x704.jpg',
  },
  {
    id: 'mavenir-tech-hub',
    title: 'Enterprise Telecom & R&D Fit-Out',
    client: 'Mavenir / Enterprise Tech',
    category: 'Establishments',
    metric: 'Turnkey Fit-Out',
    location: 'Gurugram, Haryana',
    summary:
      'Modern cloud-native software workspace featuring curved illuminated reception desk, acoustic meeting rooms, and modular workstation bays.',
    scopeDetails: [
      'Custom illuminated reception counter, ceiling baffles, and branded environmental graphics.',
      'Double-glazed acoustic conference rooms and high-density workstation power/data grids.',
    ],
    image: '/assets/odpl/slide_img_14_1280x719.jpg',
  },
  {
    id: 'signature-lounge',
    title: 'Architectural Lounge & Dining Establishment',
    client: 'Hospitality Establishment',
    category: 'Establishments',
    metric: 'Bespoke Interior',
    location: 'Delhi NCR',
    summary:
      'Sculptural fluted wall finishes, backlit arched mirrors, ceiling cove lighting, and acoustic treatment for an upscale dining & lounge venue.',
    scopeDetails: [
      'Custom curved fluted gypsum & timber wall relief with concealed warm LED wash lighting.',
      'Stone flooring, acoustic ceiling baffles, and concealed HVAC diffusers.',
    ],
    image: '/assets/odpl/slide_img_02_1280x720.jpg',
  },
  {
    id: 'architectural-facade',
    title: 'Multi-Storey Facade & Structural Build',
    client: 'Commercial & Residential Establishment',
    category: 'Establishments',
    metric: 'Civil & Facade',
    location: 'New Delhi',
    summary:
      'Full civil construction and architectural exterior facade featuring stone cladding, ornate railings, and recessed linear warm illumination.',
    scopeDetails: [
      'RCC structural execution, exterior weather-shield cladding, and precision balcony waterproofing.',
      'Integrated architectural linear facade lighting and turnkey interior finishing.',
    ],
    image: '/assets/odpl/slide_img_15_1280x905.jpg',
  },
];

export const CLIENT_ROSTER: ClientRecord[] = [
  { name: 'NHSRCL', sector: 'High-Speed Rail Infra', engagement: 'HSR Sabarmati Bullet Train Hub (₹3 Cr+)' },
  { name: 'Reliance Retail', sector: 'Retail & Supermarket Hubs', engagement: '50+ Reliance Fresh & Smart Stores in UP' },
  { name: 'Insecticide India Ltd.', sector: 'Corporate HQ Fit-Out', engagement: '18,000 sq.ft. New Delhi Facility' },
  { name: 'ION Exchange Ltd.', sector: 'Engineering & Water Tech', engagement: '15,000 sq.ft. Corporate Workspace' },
  { name: 'Burger King', sector: 'QSR & Hospitality', engagement: 'Rapid High-Traffic QSR Rollouts' },
  { name: 'Jaybee Laminations Ltd.', sector: 'Industrial & Corporate', engagement: 'Civil & Facility Contracting' },
  { name: 'Aryan Foods', sector: 'Consumer & Organic Foods', engagement: 'Commercial & Operational Spaces' },
];
