export const TASK_STATUS = {
  COMPLETED: 'Completed',
  PROGRESS: 'Progress',
  PENDING: 'Pending',
  DELETED: 'Deleted',
} as const;

export type TaskStatus = (typeof TASK_STATUS)[keyof typeof TASK_STATUS];
