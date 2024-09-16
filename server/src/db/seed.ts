import { client, db } from '.';
import { goalCompletions, goals } from './schema';
import dayjs from 'dayjs';

(async function seed() {
  await db.delete(goalCompletions);
  await db.delete(goals);

  const result = await db
    .insert(goals)
    .values([
      { title: 'Acordar cedo', desiredWeeklyFrequency: 5 },
      { title: 'Fazer exercícios', desiredWeeklyFrequency: 4 },
      { title: 'Meditar', desiredWeeklyFrequency: 1 },
      { title: 'Estudar', desiredWeeklyFrequency: 6 },
      { title: 'Me divertir', desiredWeeklyFrequency: 3 },
    ])
    .returning();

  const startOfweek = dayjs().startOf('week');

  await db.insert(goalCompletions).values([
    { goalId: result[0].id, createdAt: startOfweek.toDate() },
    { goalId: result[1].id, createdAt: startOfweek.add(1, 'day').toDate() },
    { goalId: result[2].id, createdAt: startOfweek.add(2, 'day').toDate() },
    { goalId: result[3].id, createdAt: startOfweek.add(4, 'day').toDate() },
    { goalId: result[4].id, createdAt: startOfweek.add(1, 'day').toDate() },
  ]);
})().finally(() => {
  client.end();
});
