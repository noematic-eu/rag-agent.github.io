const en = {
  // Nav
  nav_home: 'Home',
  nav_rag_agent: 'rag-agent',
  nav_rag_router: 'rag-router',
  nav_pricing: 'Pricing',
  nav_contact: 'Contact',
  nav_lang_switch: 'Français',

  // Home — hero
  hero_headline: 'Private RAG infrastructure for teams that need reliable answers',
  hero_subhead:
    'Keep your documents on your own infrastructure. Retrieve grounded evidence. Generate answers with local LLMs.',
  hero_cta_pilot: 'Book a pilot',
  hero_cta_github: 'View on GitHub',
  hero_trust: 'Recall@8 1.000 · MRR 0.875 on public gold set',

  // Home — pillars
  pillars_title: 'Why Noematic',
  pillar_1_title: 'Keep your knowledge base private',
  pillar_1_body:
    'Data and indexes stay on your infrastructure. No document ever leaves your network. Suitable for regulated industries and EU data-residency requirements.',
  pillar_2_title: 'Separate evidence from generation',
  pillar_2_body:
    'The /retrieve endpoint returns ranked excerpts before any generation. Auditable, citation-friendly, and fully transparent about where each answer comes from.',
  pillar_3_title: 'Tune and measure quality',
  pillar_3_body:
    'Built-in eval reports Recall@k and MRR. Adjust BM25, vector weights, and fusion settings until quality meets your standard — no black-box guessing.',

  // Home — products
  products_title: 'The stack',
  product_agent_title: 'rag-agent',
  product_agent_desc:
    'The retrieval and generation engine. Ingest Markdown or HTML corpora, run hybrid BM25 + vector search, and answer with any OpenAI-compatible LLM endpoint.',
  product_agent_cta: 'Learn more',
  product_router_title: 'rag-router',
  product_router_desc:
    'Multi-shelf orchestration. Routes questions to the right rag-agent instance, proxies SSE streaming, and exposes MCP tools for Cursor IDE.',
  product_router_cta: 'Learn more',

  // rag-agent page
  agent_title: 'rag-agent',
  agent_tagline: 'Local-first hybrid RAG engine',
  agent_intro:
    'rag-agent is a single-process Go service that ingests your documents, indexes them with hybrid BM25 and vector retrieval, and generates grounded answers using local or self-hosted LLM endpoints.',
  agent_features_title: 'Capabilities',
  agent_f1: 'Hybrid BM25 + vector retrieval with tunable fusion (bm25_k, vector_k, top_k)',
  agent_f2: '/retrieve endpoint for auditable, citation-ready evidence excerpts',
  agent_f3: '/search endpoint for grounded LLM-generated answers',
  agent_f4: 'Markdown and HTML ingestion with structure-aware chunking',
  agent_f5: 'Ollama, LM Studio, and any OpenAI-compatible LLM endpoint',
  agent_f6: 'Built-in eval — Recall@k and MRR against gold sets',
  agent_f7: 'Optional 9P file-tree API for scriptable Unix workflows',
  agent_f8: 'Pluggable lexical engines: Bleve, Tantivy, or in-memory BM25',
  agent_usecases_title: 'Use cases',
  agent_uc1: 'Internal legal knowledge shelf for policies and contracts',
  agent_uc2: 'Controlled enterprise wiki assistant for engineering docs',
  agent_uc3: 'On-prem retrieval layer embedded into an existing product',
  agent_buyers_title: 'Who it is for',
  agent_b1: 'Legal and compliance teams in France/EU that cannot use cloud AI vendors',
  agent_b2: 'Platform and backend teams that need a local RAG sidecar',
  agent_b3: 'System integrators delivering sovereign AI deployments',
  agent_benchmark_title: 'Benchmark',
  agent_benchmark_body:
    'Recall@8 1.000 · MRR 0.875 on the public gold set (BM25-only baseline, reproducible with eval/ fixtures).',
  agent_cta: 'Start a pilot',

  // Live demo (rag-agent page)
  demo_title: 'Try it live',
  demo_subtitle:
    'Ask a question against a real rag-agent instance. First see ranked evidence from /retrieve, then a grounded answer streamed from /search.',
  demo_corpus_label: 'Corpus',
  demo_ask: 'Ask',
  demo_question_placeholder: 'Ask a question about the selected corpus…',
  demo_evidence: 'Evidence',
  demo_evidence_hint: 'Ranked excerpts from GET /retrieve (no LLM).',
  demo_evidence_empty: 'Run a query to see retrieval hits.',
  demo_answer: 'Answer',
  demo_answer_hint: 'Grounded response streamed from GET /search.',
  demo_answer_empty: 'The generated answer appears here.',
  demo_loading_evidence: 'Retrieving evidence…',
  demo_loading_answer: 'Generating answer…',
  demo_no_results: 'No relevant excerpts found for this corpus.',
  demo_error: 'Request failed',
  demo_powered_by: 'Powered by a self-hosted rag-agent and local Ollama.',
  demo_stats_link: 'Agent stats',
  demo_score: 'Score',
  demo_top_k: 'Number of excerpts',
  demo_think_label: 'Reasoning',

  // rag-router page
  router_title: 'rag-router',
  router_tagline: 'Multi-shelf orchestration for rag-agent',
  router_intro:
    'rag-router decides where to look. It routes user questions to the right rag-agent shelf, discovers agent health, and proxies /search with SSE streaming — so your users interact with one intelligent endpoint instead of many.',
  router_features_title: 'Capabilities',
  router_f1: 'Rules-based classifier: keyword overlap, fuzzy title matching, intent classes',
  router_f2: 'Single, cascade (retry on no_results), and clarify routing modes',
  router_f3: 'Agent Discovery Service — health polling, static catalog, runtime refresh',
  router_f4: 'SSE proxy to rag-agent /search with per-agent tuning (top_k, min_score)',
  router_f5: 'MCP server for Cursor IDE: rag_search, rag_list_books, rag_route_preview',
  router_f6: 'Single router.yaml config, routerctl CLI for debugging routing decisions',
  router_arch_title: 'Architecture',
  router_arch_caption:
    'rag-router receives the question, classifies intent, and proxies to the matching rag-agent shelf.',
  router_rel_title: 'Relationship to rag-agent',
  router_rel_body:
    'rag-agent handles ingestion, indexing, retrieval, and generation. rag-router adds the routing intelligence on top — no Bleve, no f4kvs, no ingest logic. Deploy one rag-agent per domain (legal, wiki, security), point rag-router at all of them, and let users ask questions without knowing which shelf answers.',
  router_cta: 'Get in touch',

  // Pricing
  pricing_title: 'Pricing',
  pricing_subtitle:
    'The software stays free and open-source. Support the project if it brings you value — or work with us on a pilot.',
  pricing_section_individual: 'For individuals and small teams',
  pricing_section_services: 'Professional services',
  pricing_badge_popular: 'Popular',
  pricing_badge_recommended: 'Recommended',
  pricing_cta_contact: 'Contact us',
  pricing_tier_selfhosted_name: 'Self-hosted',
  pricing_tier_selfhosted_price: '€0',
  pricing_tier_selfhosted_note: 'Apache 2.0 · no subscription required',
  pricing_tier_selfhosted_f1: 'Full rag-agent source on GitHub',
  pricing_tier_selfhosted_f2: 'Full rag-router source on GitHub',
  pricing_tier_selfhosted_f3: 'Docker Compose quickstart',
  pricing_tier_selfhosted_f4: 'Community support via GitHub Issues',
  pricing_tier_selfhosted_cta: 'View on GitHub',
  pricing_tier_supporter_name: 'Supporter',
  pricing_tier_supporter_price: 'From €2/mo',
  pricing_tier_supporter_note: 'Cancel anytime',
  pricing_tier_supporter_f1: 'Funds ongoing development and maintenance',
  pricing_tier_supporter_f2: 'Priority on GitHub Issues',
  pricing_tier_supporter_f3: 'Release notes and project updates',
  pricing_tier_supporter_f4: 'Optional recognition in project acknowledgments',
  pricing_tier_supporter_cta: 'Become a supporter',
  pricing_tier_donation_name: 'Pay what it\'s worth',
  pricing_tier_donation_price: 'Your choice',
  pricing_tier_donation_note: 'One-time · no commitment',
  pricing_tier_donation_f1: 'Contribute based on the value rag-agent brings you',
  pricing_tier_donation_f2: 'Supports docs, demos, and open-source releases',
  pricing_tier_donation_f3: 'No account or subscription required',
  pricing_tier_donation_cta: 'Contribute',
  pricing_tier_donation_cta_paypal: 'Donate via PayPal',
  pricing_tier_pilot_name: 'Pilot',
  pricing_tier_pilot_price: '€8,000 – €15,000',
  pricing_tier_pilot_note: '2–4 weeks · one corpus',
  pricing_tier_pilot_f1: 'Deployed rag-agent instance on your infrastructure',
  pricing_tier_pilot_f2: 'Ingestion runbook for your corpus',
  pricing_tier_pilot_f3: 'Retrieval quality report (Recall@k, MRR)',
  pricing_tier_pilot_f4: 'Tuned query and fusion settings',
  pricing_tier_pilot_f5: 'Handoff runbook and checklist',
  pricing_tier_pilot_f6: '50% at kickoff · 50% at handoff',
  pricing_tier_pilot_cta: 'Book a pilot',
  pricing_tier_multishelf_name: 'Multi-shelf Pilot',
  pricing_tier_multishelf_price: 'Contact us',
  pricing_tier_multishelf_note: 'Scope-based',
  pricing_tier_multishelf_f1: 'rag-agent + rag-router setup',
  pricing_tier_multishelf_f2: 'Multiple domain corpora',
  pricing_tier_multishelf_f3: 'Routing eval and tuning',
  pricing_tier_multishelf_f4: 'MCP / Cursor IDE integration',
  pricing_tier_multishelf_f5: 'Monthly support available on request',
  pricing_tier_multishelf_cta: 'Get in touch',
  pricing_tier_enterprise_name: 'Enterprise',
  pricing_tier_enterprise_price: 'Contact us',
  pricing_tier_enterprise_note: 'Paid roadmap',
  pricing_tier_enterprise_f1: 'Multi-tenant authentication',
  pricing_tier_enterprise_f2: 'High-availability deployment',
  pricing_tier_enterprise_f3: 'SLA and dedicated support',
  pricing_tier_enterprise_f4: 'Custom corpus pipeline',
  pricing_tier_enterprise_cta: 'Get in touch',

  pricing_faq_title: 'Common questions',
  pricing_faq_q1: 'Does the code stay free?',
  pricing_faq_a1:
    'Yes. rag-agent and rag-router remain Apache 2.0 licensed. You can self-host without paying anything.',
  pricing_faq_q2: 'What happens if I don\'t pay?',
  pricing_faq_a2:
    'Nothing changes. You keep full access to the source, Docker quickstart, and community support on GitHub.',
  pricing_faq_q3: 'Can I cancel my supporter subscription?',
  pricing_faq_a3:
    'Yes, anytime through your Payhip account. No lock-in.',
  pricing_faq_q4: 'Do you issue invoices for companies?',
  pricing_faq_a4:
    'For pilots and enterprise engagements, yes — contact us. Supporter and donation tiers are consumer checkout flows.',

  // Home — support CTA band
  home_support_title: 'Support the project',
  home_support_body: 'From €2/month — help keep rag-agent maintained and documented.',
  home_support_cta: 'See pricing',
  home_pilot_title: 'Need a pilot?',
  home_pilot_body: '2–4 weeks · one corpus · deployed on your infrastructure.',
  home_pilot_cta: 'Book a pilot',

  // Contact
  contact_title: 'Contact',
  contact_subtitle: 'Ready to run a pilot or have questions? Reach out.',
  contact_email_cta: 'Send us an email',
  contact_discovery_title: 'Good questions to start with',
  contact_q1: 'What data cannot leave your infrastructure?',
  contact_q2: 'Which corpus should be indexed first?',
  contact_q3: 'How do users verify if an answer is correct?',
  contact_q4: 'What success metric matters most in 30 days?',
  contact_github_title: 'Open source',
  contact_github_body: 'Both projects are open-source. Browse code, open issues, or star the repos.',

  // Footer
  footer_copy: '© 2025 Noematic. Apache 2.0 licensed.',
  footer_privacy: 'Your data stays on your infrastructure.',
} as const;

export default en;
export type TranslationKey = keyof typeof en;
