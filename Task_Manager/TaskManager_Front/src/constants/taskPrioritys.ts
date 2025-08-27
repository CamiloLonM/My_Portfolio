export const TASK_PRIORITYS = {
  HIGH: 'High',
  MEDIUM: 'Medium',
  LOW: 'Low',
} as const;

export type TaskPrioritys =
  (typeof TASK_PRIORITYS)[keyof typeof TASK_PRIORITYS];
