import test from 'node:test';
import assert from 'node:assert/strict';
import { 
  calculateJudgingScore, 
  validateTeamRegistration, 
  getMysteryRepoChallenge,
  getTimeRemaining,
  SAMPLE_CHALLENGES 
} from './hackathon-logic';

test('calculateJudgingScore computes accurate total and grade', () => {
  const result = calculateJudgingScore({
    technicalExecution: 25,
    innovation: 20,
    aiUsage: 20,
    workingPrototype: 20,
    problemSolving: 15,
  });

  assert.equal(result.total, 100);
  assert.equal(result.grade, 'Grand Champion');
  assert.equal(result.percentage, 100);
});

test('calculateJudgingScore clamps scores within category bounds', () => {
  const result = calculateJudgingScore({
    technicalExecution: 50, // Max 25
    innovation: -5,        // Min 0
    aiUsage: 18,
    workingPrototype: 15,
    problemSolving: 12,
  });

  assert.equal(result.breakdown.technicalExecution, 25);
  assert.equal(result.breakdown.innovation, 0);
  assert.equal(result.total, 25 + 0 + 18 + 15 + 12); // 70 points
  assert.equal(result.grade, 'Honorable Mention');
});

test('validateTeamRegistration enforces team size 3-4 for Hack4Haldia Voyage', () => {
  const invalidSize = validateTeamRegistration({
    teamName: 'Voyage Hackers',
    leadName: 'Raj Anand',
    email: 'raj@hit.ac.in',
    college: 'HIT Haldia',
    teamSize: 2,
    eventId: 'hack4haldia-voyage',
  });

  assert.equal(invalidSize.valid, false);
  assert.ok(invalidSize.errors.some(e => e.includes('team size of 3 to 4')));

  const validTeam = validateTeamRegistration({
    teamName: 'Voyage Hackers',
    leadName: 'Raj Anand',
    email: 'raj@hit.ac.in',
    college: 'HIT Haldia',
    teamSize: 3,
    eventId: 'hack4haldia-voyage',
  });

  assert.equal(validTeam.valid, true);
  assert.equal(validTeam.errors.length, 0);
});

test('validateTeamRegistration catches missing required fields and invalid email', () => {
  const missingFields = validateTeamRegistration({
    teamName: '',
    leadName: '',
    email: 'not-an-email',
    college: '',
    teamSize: 4,
    eventId: 'hacktoberfest-grid',
  });

  assert.equal(missingFields.valid, false);
  assert.equal(missingFields.errors.length, 4);
});

test('getMysteryRepoChallenge retrieves deterministic challenge by seed and category', () => {
  const challenge0 = getMysteryRepoChallenge('All', 0);
  assert.equal(challenge0.id, SAMPLE_CHALLENGES[0].id);

  const aiChallenge = getMysteryRepoChallenge('AI Agents', 0);
  assert.equal(aiChallenge.category, 'AI Agents');
});

test('getTimeRemaining calculates duration countdown properly', () => {
  const now = new Date('2026-10-25T10:00:00Z').getTime();
  const target = '2026-10-29T09:00:00Z'; // 3 days, 23 hours later

  const rem = getTimeRemaining(target, now);
  assert.equal(rem.isPast, false);
  assert.equal(rem.days, 3);
  assert.equal(rem.hours, 23);
  assert.equal(rem.minutes, 0);
});
