type PendingGoalsResponse = {
  id: string;
  title: string;
  desiredWeeklyFrequency: number;
  completionsCount: number;
}[];

export async function getPendingGoals(): Promise<PendingGoalsResponse> {
  const response = await fetch('http://localhost:3333/pending-goals');
  const data = await response.json();

  return data.pendingGoals;
}
