export type SwotData = {
  strengths: string[];
  weaknesses: string[];
  opportunities: string[];
  threats: string[];
};

export const swotData: Record<'smb' | 'enterprise', SwotData> = {
  smb: {
    strengths: [
      'Accessible entry points (Scorecard, 30-min consult) reduce buyer friction.',
      'The "Bundle": One vendor for Process + Change + CX — SMB owners see these as one messy problem.',
      '"People-first" branding removes the fear of cold, corporate consultancy.',
      'Clear 3-phase approach supports mid-market buyers needing readiness and comms plans.',
    ],
    weaknesses: [
      'Public pricing is hourly/project-based (opaque). SMBs prefer "pick a package" clarity.',
      'Proof is generic testimonials, not "Problem → Solution → Result" case studies.',
      'Limited visible industry-specific case studies that SMB buyers can scan quickly.',
    ],
    opportunities: [
      '"Don\'t automate a broken process" — position as the essential pre-AI cleanup crew.',
      'Market size: vast majority of Australian businesses are < 20 employees.',
      'Productise the entry funnel: Scorecard → Workshop → Sprint with clear outcomes.',
    ],
    threats: [
      'Tech Implementers (Datacom, MS Partners) bundling "free" adoption with software deals.',
      'Cheap online courses and Lean training replacing consultants for budget-conscious SMBs.',
      'Local boutique coaches competing on personal relationship and low overhead.',
    ],
  },
  enterprise: {
    strengths: [
      'Founder-led credibility in Banking, Telco, Government, and Utilities.',
      '3-Phase approach maps well to corporate governance if explained formally.',
      'Agility and responsiveness compared to Big 4 bureaucracy and pricing.',
      'The "bundle" (Change + CI + CX) is a differentiator even at enterprise level.',
    ],
    weaknesses: [
      'Lack of visible governance assets (Risk frameworks, Privacy, Methodology details).',
      'No visible Panel or Standing Offer memberships (AusTender, government panels).',
      '"DIY" language on the site can scare off Risk Officers and procurement teams.',
      'Enterprise case studies with quantified outcomes are missing from public proof.',
    ],
    opportunities: [
      'Procurement Strategy: Target specific Government panels and AusTender opportunities.',
      '"Change Capability" positioning: Sell internal uplift (train-the-trainer), not just project delivery.',
      'AI adoption wave increasing demand for "human side of transformation" partners.',
      'Build an enterprise credibility stack: governance page, measurement section, reference cases.',
    ],
    threats: [
      'Boutique firms with scale signals (Changeworks\' 600+ consultants) winning on perceived capacity.',
      'Big 4 effectively owning the "Transformation" keyword and setting enterprise expectations.',
      'Well-funded CX firms (Customer Science) with ISO 27001 and panel listings blocking Xperia from shortlists.',
    ],
  },
};
