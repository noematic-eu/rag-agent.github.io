const fr = {
  // Nav
  nav_home: 'Accueil',
  nav_rag_agent: 'rag-agent',
  nav_rag_router: 'rag-router',
  nav_pricing: 'Tarifs',
  nav_contact: 'Contact',
  nav_lang_switch: 'English',

  // Home — hero
  hero_headline: 'Infrastructure RAG privée pour des réponses fiables',
  hero_subhead:
    'Gardez vos documents sur votre propre infrastructure. Retrouvez des preuves fiables. Générez des réponses avec des LLM locaux.',
  hero_cta_pilot: 'Démarrer un pilote',
  hero_cta_github: 'Voir sur GitHub',
  hero_trust: 'Recall@8 1,000 · MRR 0,875 sur jeu de référence public',

  // Home — pillars
  pillars_title: 'Pourquoi Noematic',
  pillar_1_title: 'Votre base de connaissance reste privée',
  pillar_1_body:
    'Les données et les index restent sur votre infrastructure. Aucun document ne quitte jamais votre réseau. Adapté aux secteurs réglementés et aux exigences de résidence des données en UE.',
  pillar_2_title: 'Séparez la preuve de la génération',
  pillar_2_body:
    "L'endpoint /retrieve retourne des extraits classés avant toute génération. Auditable, exploitable pour les citations, et entièrement transparent sur l'origine de chaque réponse.",
  pillar_3_title: 'Mesurez et affinez la qualité',
  pillar_3_body:
    "L'évaluation intégrée rapporte le Recall@k et le MRR. Ajustez les poids BM25, vectoriels et de fusion jusqu'à atteindre vos critères — sans boîte noire.",

  // Home — products
  products_title: 'La stack',
  product_agent_title: 'rag-agent',
  product_agent_desc:
    "Le moteur de récupération et de génération. Ingérez des corpus Markdown ou HTML, lancez une recherche hybride BM25 + vectorielle, et répondez avec n'importe quel endpoint LLM compatible OpenAI.",
  product_agent_cta: 'En savoir plus',
  product_router_title: 'rag-router',
  product_router_desc:
    "Orchestration multi-étagère. Route les questions vers le bon rag-agent, proxifie le streaming SSE, et expose des outils MCP pour l'IDE Cursor.",
  product_router_cta: 'En savoir plus',

  // rag-agent page
  agent_title: 'rag-agent',
  agent_tagline: 'Moteur RAG hybride local-first',
  agent_intro:
    "rag-agent est un service Go monoprocessus qui ingère vos documents, les indexe avec une récupération hybride BM25 et vectorielle, et génère des réponses fiables en utilisant des endpoints LLM locaux ou auto-hébergés.",
  agent_features_title: 'Fonctionnalités',
  agent_f1: 'Récupération hybride BM25 + vectorielle avec fusion réglable (bm25_k, vector_k, top_k)',
  agent_f2: 'Endpoint /retrieve pour des extraits de preuves auditables et exploitables',
  agent_f3: "Endpoint /search pour des réponses LLM ancrées dans les documents",
  agent_f4: "Ingestion Markdown et HTML avec découpage structuré",
  agent_f5: 'Ollama, LM Studio et tout endpoint LLM compatible OpenAI',
  agent_f6: 'Évaluation intégrée — Recall@k et MRR sur des jeux dorés',
  agent_f7: 'API file-tree 9P optionnelle pour les workflows Unix scriptables',
  agent_f8: 'Moteurs lexicaux modulaires : Bleve, Tantivy ou BM25 en mémoire',
  agent_usecases_title: "Cas d'usage",
  agent_uc1: 'Base de connaissances juridiques interne pour les politiques et contrats',
  agent_uc2: "Assistant wiki d'entreprise contrôlé pour la documentation technique",
  agent_uc3: "Couche de récupération on-prem intégrée dans un produit existant",
  agent_buyers_title: "Pour qui",
  agent_b1: "Équipes juridiques et conformité en France/UE ne pouvant pas utiliser les IA cloud",
  agent_b2: "Équipes plateforme et backend ayant besoin d'un sidecar RAG local",
  agent_b3: "Intégrateurs système livrant des projets d'IA souveraine",
  agent_benchmark_title: 'Benchmark',
  agent_benchmark_body:
    "Recall@8 1,000 · MRR 0,875 sur le jeu de référence public (baseline BM25 seul, reproductible avec les fixtures eval/).",
  agent_cta: 'Démarrer un pilote',

  // Live demo (rag-agent page)
  demo_title: 'Essayer en direct',
  demo_subtitle:
    "Posez une question à une instance rag-agent réelle. D'abord les extraits classés via /retrieve, puis une réponse fondée diffusée par /search.",
  demo_corpus_label: 'Corpus',
  demo_ask: 'Demander',
  demo_question_placeholder: 'Posez une question sur le corpus sélectionné…',
  demo_evidence: 'Preuves',
  demo_evidence_hint: 'Extraits classés via GET /retrieve (sans LLM).',
  demo_evidence_empty: 'Lancez une requête pour voir les résultats de récupération.',
  demo_answer: 'Réponse',
  demo_answer_hint: 'Réponse fondée diffusée via GET /search.',
  demo_answer_empty: 'La réponse générée apparaît ici.',
  demo_loading_evidence: 'Récupération des preuves…',
  demo_loading_answer: 'Génération de la réponse…',
  demo_no_results: 'Aucun extrait pertinent pour ce corpus.',
  demo_error: 'Échec de la requête',
  demo_powered_by: 'Propulsé par un rag-agent auto-hébergé et Ollama local.',
  demo_stats_link: 'Statistiques agent',
  demo_score: 'Score',
  demo_top_k: "Nombre d'extraits",

  // rag-router page
  router_title: 'rag-router',
  router_tagline: "Orchestration multi-étagère pour rag-agent",
  router_intro:
    "rag-router décide où chercher. Il route les questions des utilisateurs vers le bon rag-agent, découvre la santé des agents, et proxifie /search avec le streaming SSE — pour que vos utilisateurs interagissent avec un seul endpoint intelligent.",
  router_features_title: 'Fonctionnalités',
  router_f1: "Classifieur basé sur des règles : chevauchement de mots-clés, correspondance de titres, classes d'intention",
  router_f2: "Modes de routage : single, cascade (retry sur no_results), clarify",
  router_f3: "Service de découverte d'agents (ADS) — polling de santé, catalogue statique, actualisation à l'exécution",
  router_f4: "Proxy SSE vers /search de rag-agent avec réglage par agent (top_k, min_score)",
  router_f5: "Serveur MCP pour Cursor IDE : rag_search, rag_list_books, rag_route_preview",
  router_f6: "Configuration unique router.yaml, CLI routerctl pour déboguer les décisions de routage",
  router_arch_title: 'Architecture',
  router_arch_caption:
    "rag-router reçoit la question, classifie l'intention et proxifie vers le rag-agent correspondant.",
  router_rel_title: 'Relation avec rag-agent',
  router_rel_body:
    "rag-agent gère l'ingestion, l'indexation, la récupération et la génération. rag-router ajoute l'intelligence de routage par-dessus — sans Bleve, sans f4kvs, sans logique d'ingestion. Déployez un rag-agent par domaine (juridique, wiki, sécurité), pointez rag-router sur chacun, et laissez les utilisateurs poser leurs questions sans savoir quelle étagère répond.",
  router_cta: 'Nous contacter',

  // Pricing
  pricing_title: 'Tarifs',
  pricing_subtitle:
    'Le logiciel reste libre et open-source. Soutenez le projet si vous en tirez de la valeur — ou faites appel à nous pour un pilote.',
  pricing_section_individual: 'Pour les individus et petites équipes',
  pricing_section_services: 'Services professionnels',
  pricing_badge_popular: 'Populaire',
  pricing_badge_recommended: 'Recommandé',
  pricing_cta_contact: 'Nous contacter',
  pricing_tier_selfhosted_name: 'Self-hosted',
  pricing_tier_selfhosted_price: '0 €',
  pricing_tier_selfhosted_note: 'Apache 2.0 · sans abonnement',
  pricing_tier_selfhosted_f1: 'Code source complet de rag-agent sur GitHub',
  pricing_tier_selfhosted_f2: 'Code source complet de rag-router sur GitHub',
  pricing_tier_selfhosted_f3: 'Démarrage rapide Docker Compose',
  pricing_tier_selfhosted_f4: 'Support communautaire via GitHub Issues',
  pricing_tier_selfhosted_cta: 'Voir sur GitHub',
  pricing_tier_supporter_name: 'Soutien',
  pricing_tier_supporter_price: 'À partir de 2 €/mois',
  pricing_tier_supporter_note: 'Résiliable à tout moment',
  pricing_tier_supporter_f1: 'Finance le développement et la maintenance continue',
  pricing_tier_supporter_f2: 'Priorité sur les issues GitHub',
  pricing_tier_supporter_f3: 'Notes de version et actualités du projet',
  pricing_tier_supporter_f4: 'Reconnaissance optionnelle dans les remerciements',
  pricing_tier_supporter_cta: 'Devenir soutien',
  pricing_tier_donation_name: 'Payez ce que ça vaut',
  pricing_tier_donation_price: 'Montant libre',
  pricing_tier_donation_note: 'Ponctuel · sans engagement',
  pricing_tier_donation_f1: 'Contribuez selon la valeur que rag-agent vous apporte',
  pricing_tier_donation_f2: 'Soutient la doc, les démos et les releases open-source',
  pricing_tier_donation_f3: 'Sans compte ni abonnement',
  pricing_tier_donation_cta: 'Contribuer',
  pricing_tier_donation_cta_paypal: 'Donner via PayPal',
  pricing_tier_pilot_name: 'Pilote',
  pricing_tier_pilot_price: '8 000 € – 15 000 €',
  pricing_tier_pilot_note: '2–4 semaines · un corpus',
  pricing_tier_pilot_f1: 'Instance rag-agent déployée sur votre infrastructure',
  pricing_tier_pilot_f2: "Runbook d'ingestion pour votre corpus",
  pricing_tier_pilot_f3: 'Rapport de qualité de récupération (Recall@k, MRR)',
  pricing_tier_pilot_f4: 'Paramètres de requête et fusion optimisés',
  pricing_tier_pilot_f5: 'Runbook et checklist de passation',
  pricing_tier_pilot_f6: '50% à l\'engagement · 50% à la passation',
  pricing_tier_pilot_cta: 'Démarrer un pilote',
  pricing_tier_multishelf_name: 'Pilote Multi-étagère',
  pricing_tier_multishelf_price: 'Nous contacter',
  pricing_tier_multishelf_note: 'Tarif selon périmètre',
  pricing_tier_multishelf_f1: 'Configuration rag-agent + rag-router',
  pricing_tier_multishelf_f2: 'Plusieurs corpus de domaines',
  pricing_tier_multishelf_f3: 'Évaluation et optimisation du routage',
  pricing_tier_multishelf_f4: 'Intégration MCP / Cursor IDE',
  pricing_tier_multishelf_f5: 'Support mensuel disponible sur demande',
  pricing_tier_multishelf_cta: 'Nous contacter',
  pricing_tier_enterprise_name: 'Enterprise',
  pricing_tier_enterprise_price: 'Nous contacter',
  pricing_tier_enterprise_note: 'Roadmap payante',
  pricing_tier_enterprise_f1: 'Authentification multi-tenant',
  pricing_tier_enterprise_f2: 'Déploiement haute disponibilité',
  pricing_tier_enterprise_f3: 'SLA et support dédié',
  pricing_tier_enterprise_f4: 'Pipeline de corpus personnalisé',
  pricing_tier_enterprise_cta: 'Nous contacter',

  pricing_faq_title: 'Questions fréquentes',
  pricing_faq_q1: 'Le code reste-t-il gratuit ?',
  pricing_faq_a1:
    'Oui. rag-agent et rag-router restent sous licence Apache 2.0. Vous pouvez self-héberger sans rien payer.',
  pricing_faq_q2: 'Que se passe-t-il si je ne paie pas ?',
  pricing_faq_a2:
    'Rien ne change. Vous gardez l\'accès complet au code, au quickstart Docker et au support communautaire sur GitHub.',
  pricing_faq_q3: 'Puis-je annuler mon abonnement soutien ?',
  pricing_faq_a3:
    'Oui, à tout moment via votre compte Payhip. Sans engagement.',
  pricing_faq_q4: 'Proposez-vous des factures entreprise ?',
  pricing_faq_a4:
    'Pour les pilotes et engagements enterprise, oui — contactez-nous. Les paliers soutien et don passent par des checkout grand public.',

  // Home — support CTA band
  home_support_title: 'Soutenez le projet',
  home_support_body: 'À partir de 2 €/mois — aidez à maintenir et documenter rag-agent.',
  home_support_cta: 'Voir les tarifs',
  home_pilot_title: 'Besoin d\'un pilote ?',
  home_pilot_body: '2–4 semaines · un corpus · déployé sur votre infrastructure.',
  home_pilot_cta: 'Démarrer un pilote',

  // Contact
  contact_title: 'Contact',
  contact_subtitle: 'Prêt à lancer un pilote ou des questions ? Écrivez-nous.',
  contact_email_cta: 'Envoyer un email',
  contact_discovery_title: 'De bonnes questions pour commencer',
  contact_q1: 'Quelles données ne peuvent pas quitter votre infrastructure ?',
  contact_q2: 'Quel corpus devrait être indexé en premier ?',
  contact_q3: "Comment les utilisateurs vérifient-ils si une réponse est correcte ?",
  contact_q4: "Quel indicateur de succès compte le plus dans les 30 premiers jours ?",
  contact_github_title: 'Open source',
  contact_github_body: 'Les deux projets sont open-source. Parcourez le code, ouvrez des issues ou mettez les dépôts en favoris.',

  // Footer
  footer_copy: '© 2025 Noematic. Licence Apache 2.0.',
  footer_privacy: 'Vos données restent sur votre infrastructure.',
} as const;

export default fr;
