/**
 * Pure business logic and calculation helpers for MLH Hacktoberfest Hack Days Haldia '26
 */

export interface JudgingCriteriaScores {
  innovation: number; // Max 20
  technicalExecution: number; // Max 25
  aiUsage: number; // Max 20
  problemSolving: number; // Max 15
  workingPrototype: number; // Max 20
}

export interface MysteryRepoChallenge {
  id: string;
  title: string;
  category: 'AI Agents' | 'Developer Tools' | 'Web3 & Identity' | 'Distributed Systems' | 'Open Cloud';
  repoName: string;
  starterRepoUrl: string;
  stars: number;
  forks: number;
  license: string;
  challengeBrief: string;
  recommendedAiTools: string[];
  techStack: string[];
  sampleDeliverable: string;
}

export const SAMPLE_CHALLENGES: MysteryRepoChallenge[] = [
  {
    id: 'voyage-repo-01',
    title: 'Autonomous Multi-Agent Workflow Engine',
    category: 'AI Agents',
    repoName: 'open-agent-core/flow-orchestrator',
    starterRepoUrl: 'https://github.com/grid-hit/voyage-open-agent-core',
    stars: 1420,
    forks: 380,
    license: 'Apache-2.0',
    challengeBrief: 'Extend the baseline streaming agent loop to support human-in-the-loop tool approval with state rollback and local LLM fallback when network latency spikes.',
    recommendedAiTools: ['Cursor / Claude Code', 'Gemini 2.5 Pro', 'LangGraph Studio', 'Ollama Local'],
    techStack: ['TypeScript', 'Node.js', 'FastAPI', 'Redis'],
    sampleDeliverable: 'Working sandbox where an agent executes a multi-step data query, requests user permission via Slack/Webhook, and safely rolls back on failure.'
  },
  {
    id: 'voyage-repo-02',
    title: 'High-Throughput Open API Gateway with Rate-Limiting',
    category: 'Developer Tools',
    repoName: 'hyper-proxy/gateway-kernel',
    starterRepoUrl: 'https://github.com/grid-hit/hyper-proxy-gateway',
    stars: 2890,
    forks: 512,
    license: 'MIT',
    challengeBrief: 'Transform a bare HTTP proxy into an intelligent edge router that automatically instruments token usage per tenant and enforces adaptive sliding-window rate limiting.',
    recommendedAiTools: ['GitHub Copilot', 'DeepSeek Coder', 'Postman AI Assistant'],
    techStack: ['Go', 'Rust / WebAssembly', 'Docker', 'Prometheus'],
    sampleDeliverable: 'Benchmark suite showing sub-3ms routing latency under 10k RPS with live token telemetry dashboard.'
  },
  {
    id: 'voyage-repo-03',
    title: 'Decentralized Verifiable Credential Issuer for Student Hackers',
    category: 'Web3 & Identity',
    repoName: 'haldia-id/open-attestation',
    starterRepoUrl: 'https://github.com/grid-hit/haldia-open-attestation',
    stars: 870,
    forks: 195,
    license: 'MIT',
    challengeBrief: 'Implement a zero-knowledge student verification scheme allowing college attendees (HIT, IIT, NIT) to prove hackathon participation without exposing personal ID details.',
    recommendedAiTools: ['v0.dev', 'Solana Playground AI', 'Claude 3.7 Sonnet'],
    techStack: ['Solana Web3.js', 'Rust / Anchor', 'Next.js', 'SnarkJS'],
    sampleDeliverable: 'Live web dApp where attendee connects wallet, verifies college email via signed challenge, and mints an on-chain soulbound badge.'
  },
  {
    id: 'voyage-repo-04',
    title: 'Offline-First Real-Time Collaborative Canvas',
    category: 'Distributed Systems',
    repoName: 'sync-weave/crdt-canvas',
    starterRepoUrl: 'https://github.com/grid-hit/sync-weave-crdt',
    stars: 3450,
    forks: 640,
    license: 'MPL-2.0',
    challengeBrief: 'The open-source CRDT engine experiences state divergence when 3+ offline clients reconnect simultaneously. Fix the vector clock merge algorithm and integrate an AI diagram assistant.',
    recommendedAiTools: ['Gemini Code Assist', 'Cursor AI', 'Perplexity Pro'],
    techStack: ['TypeScript', 'Yjs', 'HTML5 Canvas', 'WebSockets'],
    sampleDeliverable: 'Multi-window browser test demonstrating real-time shape sync and offline reconnect resolution with 0 merge conflicts.'
  },
  {
    id: 'voyage-repo-05',
    title: 'Self-Healing Kubernetes Microservices Prober',
    category: 'Open Cloud',
    repoName: 'cloud-helm/auto-remedy',
    starterRepoUrl: 'https://github.com/grid-hit/cloud-helm-auto-remedy',
    stars: 1920,
    forks: 410,
    license: 'Apache-2.0',
    challengeBrief: 'Connect an open-source cluster prober to an automated LLM log-diagnosis loop that detects pod crash loops, formulates a helm values patch, and opens a verifiable PR.',
    recommendedAiTools: ['Aider', 'GitHub Copilot Workspace', 'Gemini Flash'],
    techStack: ['Python', 'Kubernetes Client', 'Docker', 'FastAPI'],
    sampleDeliverable: 'Simulated container failure trigger with automated terminal log capture, diagnosis synthesis, and auto-generated git patch.'
  }
];

/**
 * Calculates total judging score out of 100 based on official Hack4Haldia rubric
 */
export function calculateJudgingScore(scores: Partial<JudgingCriteriaScores>): {
  total: number;
  percentage: number;
  grade: 'Grand Champion' | 'First Runner Up' | 'Second Runner Up' | 'Honorable Mention' | 'Participant';
  breakdown: Record<keyof JudgingCriteriaScores, number>;
} {
  const breakdown: Record<keyof JudgingCriteriaScores, number> = {
    technicalExecution: Math.min(25, Math.max(0, scores.technicalExecution ?? 0)),
    innovation: Math.min(20, Math.max(0, scores.innovation ?? 0)),
    aiUsage: Math.min(20, Math.max(0, scores.aiUsage ?? 0)),
    workingPrototype: Math.min(20, Math.max(0, scores.workingPrototype ?? 0)),
    problemSolving: Math.min(15, Math.max(0, scores.problemSolving ?? 0)),
  };

  const total = 
    breakdown.technicalExecution + 
    breakdown.innovation + 
    breakdown.aiUsage + 
    breakdown.workingPrototype + 
    breakdown.problemSolving;

  let grade: 'Grand Champion' | 'First Runner Up' | 'Second Runner Up' | 'Honorable Mention' | 'Participant' = 'Participant';
  if (total >= 92) grade = 'Grand Champion';
  else if (total >= 82) grade = 'First Runner Up';
  else if (total >= 72) grade = 'Second Runner Up';
  else if (total >= 60) grade = 'Honorable Mention';

  return {
    total,
    percentage: Math.round((total / 100) * 100),
    grade,
    breakdown,
  };
}

/**
 * Validates registration form inputs for hackers
 */
export function validateTeamRegistration(data: {
  teamName: string;
  leadName: string;
  email: string;
  college: string;
  teamSize: number;
  eventId: string;
}): { valid: boolean; errors: string[] } {
  const errors: string[] = [];

  if (!data.teamName || data.teamName.trim().length < 2) {
    errors.push('Team name must be at least 2 characters.');
  }

  if (!data.leadName || data.leadName.trim().length < 2) {
    errors.push('Team leader name is required.');
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!data.email || !emailRegex.test(data.email)) {
    errors.push('A valid email address is required.');
  }

  if (!data.college || data.college.trim().length < 2) {
    errors.push('College or institution name is required.');
  }

  if (data.eventId === 'hack4haldia-voyage') {
    if (data.teamSize < 3 || data.teamSize > 4) {
      errors.push('Hack4Haldia x Voyage requires a team size of 3 to 4 members.');
    }
  } else {
    if (data.teamSize < 1 || data.teamSize > 4) {
      errors.push('Team size must be between 1 and 4 members.');
    }
  }

  return {
    valid: errors.length === 0,
    errors,
  };
}

/**
 * Returns a randomized challenge repo or filters by category
 */
export function getMysteryRepoChallenge(category?: string, seedIndex?: number): MysteryRepoChallenge {
  let list = SAMPLE_CHALLENGES;
  if (category && category !== 'All') {
    list = SAMPLE_CHALLENGES.filter(c => c.category === category);
    if (list.length === 0) list = SAMPLE_CHALLENGES;
  }

  const index = seedIndex !== undefined 
    ? Math.abs(seedIndex) % list.length 
    : Math.floor(Math.random() * list.length);

  return list[index];
}

/**
 * Computes remaining time until an ISO timestamp
 */
export function getTimeRemaining(targetDateStr: string, mockCurrentTime?: number): {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isPast: boolean;
} {
  const target = new Date(targetDateStr).getTime();
  const current = mockCurrentTime ?? Date.now();
  const diff = target - current;

  if (diff <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0, isPast: true };
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  return { days, hours, minutes, seconds, isPast: false };
}
