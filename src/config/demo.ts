export type DemoCorpus = 'legal-demo' | 'eval-public';

export interface DemoSuggestion {
  rq: string;
  q: string;
  label: string;
}

export interface DemoCorpusConfig {
  id: DemoCorpus;
  labelEn: string;
  labelFr: string;
}

export const DEMO_CORPORA: DemoCorpusConfig[] = [
  { id: 'legal-demo', labelEn: 'French Constitution', labelFr: 'Constitution française' },
  { id: 'eval-public', labelEn: 'RAG technical docs', labelFr: 'Documentation RAG' },
];

export const DEMO_SUGGESTIONS: Record<
  DemoCorpus,
  { en: DemoSuggestion[]; fr: DemoSuggestion[] }
> = {
  'legal-demo': {
    fr: [
      {
        rq: 'article premier republique indivisible laicite democratique sociale',
        q: "En 3 points, que dit l'article 1 sur la République ?",
        label: 'Article 1',
      },
      {
        rq: 'mandat president cinq ans',
        q: 'Quelle est la durée du mandat présidentiel ?',
        label: 'Mandat présidentiel',
      },
      {
        rq: 'article 16 pleins pouvoirs election presidentielle article 7 organisation scrutin',
        q: 'Comment le président prend les pleins pouvoirs et limite l\'organisation d\'une élection présidentielle ?',
        label: 'Pleins pouvoirs',
      },
    ],
    en: [
      {
        rq: 'article premier republique indivisible laicite democratique sociale',
        q: 'What does Article 1 say about the Republic? Summarize in 3 points.',
        label: 'Article 1',
      },
      {
        rq: 'mandat president cinq ans',
        q: 'How long is the presidential term?',
        label: 'Presidential term',
      },
      {
        rq: 'article 16 emergency powers presidential election article 7',
        q: 'How can the president take emergency powers and affect a presidential election?',
        label: 'Emergency powers',
      },
    ],
  },
  'eval-public': {
    en: [
      {
        rq: 'hybrid RAG keyword vector',
        q: 'Explain hybrid retrieval in 3 bullet points',
        label: 'Hybrid retrieval',
      },
      {
        rq: 'reciprocal rank fusion RRF',
        q: 'What is RRF and when would you use it?',
        label: 'RRF fusion',
      },
    ],
    fr: [
      {
        rq: 'hybrid RAG keyword vector',
        q: 'Expliquez la récupération hybride en 3 points',
        label: 'Récupération hybride',
      },
      {
        rq: 'reciprocal rank fusion RRF',
        q: "Qu'est-ce que la fusion RRF ?",
        label: 'Fusion RRF',
      },
    ],
  },
};

export function defaultCorpus(locale: string): DemoCorpus {
  return locale === 'fr' ? 'legal-demo' : 'eval-public';
}
