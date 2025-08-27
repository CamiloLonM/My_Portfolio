export const TASK_STATUS = {
  COMPLETED: 'completed',
  PROGRESS: 'progress',
  PENDING: 'pending',
  DELETED: 'deleted',
} as const;

export type TaskStatus = (typeof TASK_STATUS)[keyof typeof TASK_STATUS];
