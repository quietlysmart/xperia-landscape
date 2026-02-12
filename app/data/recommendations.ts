export type Recommendation = {
  priority: 'high' | 'medium';
  title: string;
  why: string;
  action: string;
  proof?: string;
};

export type ProductisedOffer = {
  name: string;
  timeline: string;
  deliverables: string;
  rationale: string;
};

export const recommendations: Record<'smb' | 'enterprise', Recommendation[]> = {
  smb: [
    {
      priority: 'high',
      title: 'Productise the Entry Funnel',
      why: 'SMBs buy products, not hours. Clear packages reduce friction.',
      action: 'Define "Business Change Clarity Sprint" (2 weeks). Output: Readiness map + Comms plan + 90-day adoption plan.',
      proof: 'Leverages existing scorecard lead magnet success and template credibility.',
    },
    {
      priority: 'high',
      title: 'Productise "Streamline Then Automate"',
      why: 'This narrative is already strong on the blog — turn it into a paid diagnostic.',
      action: 'Create a "Process Clean-Up for Automation" sprint (3-4 weeks) with clear deliverables.',
    },
    {
      priority: 'medium',
      title: 'Publish 3-5 SMB Case Studies',
      why: 'Move beyond generic testimonials to scannable proof.',
      action: 'Follow format: Problem → What we did → What changed → Numbers (if allowed) → Tools/templates used.',
    },
  ],
  enterprise: [
    {
      priority: 'high',
      title: 'Build Enterprise Credibility Assets',
      why: 'Remove procurement blockers — enterprise buyers need governance proof.',
      action: 'Add a "Governance & Measurement" section to the site. List risk protocols, KPI frameworks, and sustainment methodologies explicitly.',
    },
    {
      priority: 'high',
      title: 'Procurement Mapping & AusTender Strategy',
      why: 'Government/enterprise procurement has well-defined channels.',
      action: 'Monitor AusTender opportunities. Map relevant panels for the next 12 months of refresh cycles.',
    },
    {
      priority: 'medium',
      title: 'Position "Change Capability" Prominently',
      why: 'Enterprise buyers increasingly want internal capability uplift, not just project delivery.',
      action: 'Reframe messaging from "we deliver change" to "we build your change muscle." Align with the FAQ\'s capability uplift language.',
    },
  ],
};

export const productisedOffers: Record<'smb' | 'enterprise', ProductisedOffer[]> = {
  smb: [
    {
      name: 'Business Change Clarity Sprint',
      timeline: '2 weeks',
      deliverables: 'Readiness & impact map, comms/training plan, 90-day adoption plan',
      rationale: 'Aligned to Xperia\'s 3-phase approach. Clear outcome, clear timeline, low friction.',
    },
    {
      name: 'Process Clean-Up for Automation',
      timeline: '3-4 weeks',
      deliverables: 'Documented current-state processes, waste removal, bottleneck fixes, "safe to automate" backlog',
      rationale: 'Built from Xperia\'s "don\'t automate broken processes" philosophy.',
    },
    {
      name: 'Customer Journey DIY Plus',
      timeline: 'Workshop + template pack',
      deliverables: 'Facilitated journey mapping, internal process alignment, staff enablement checklist',
      rationale: 'Leverages existing template credibility and testimonial proof.',
    },
  ],
  enterprise: [
    {
      name: 'Change Readiness & Risk Assessment',
      timeline: '4-6 weeks',
      deliverables: 'Stakeholder analysis, change saturation risks, readiness baseline, adoption risk register, governance cadence',
      rationale: 'Matches enterprise buying triggers: governance, measurement, risk controls.',
    },
    {
      name: 'Adoption & Benefits Realisation Layer',
      timeline: 'Retainer / per-tranche',
      deliverables: 'Adoption KPIs, operating rhythms, leadership alignment, sustainment, benefits tracking',
      rationale: 'Mirrors Xperia\'s "measure success by adoption rates and business KPIs" language.',
    },
    {
      name: 'Change Capability Build',
      timeline: '3-month pilot',
      deliverables: 'Internal change playbook, leader coaching, templates, train-the-trainer approach',
      rationale: 'Aligns to FAQ "capability uplift" language and the enterprise "change as muscle" narrative.',
    },
  ],
};
