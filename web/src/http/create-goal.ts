import { CreateGoalForm } from '../components/create-goal';

export async function createGoal({
  title,
  desiredWeeklyFrequency,
}: CreateGoalForm) {
  const response = await fetch('http://localhost:3333/goals', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      title,
      desiredWeeklyFrequency,
    }),
  });

  return response;
}
