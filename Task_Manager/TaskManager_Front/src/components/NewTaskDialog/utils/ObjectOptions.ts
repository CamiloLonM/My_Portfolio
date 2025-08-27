import { TASK_PRIORITYS } from '@/constants/taskPrioritys';
import { TASK_STATUS } from '@/constants/taskStatus';

export const STATUS_OPTIONS = [
  { value: TASK_STATUS.PENDING, label: 'Pending' },
  { value: TASK_STATUS.PROGRESS, label: 'Progress' },
  { value: TASK_STATUS.COMPLETED, label: 'Completed' },
];

export const PRIORITY_OPTIONS = [
  { value: TASK_PRIORITYS.HIGH, label: 'High' },
  { value: TASK_PRIORITYS.MEDIUM, label: 'Medium' },
  { value: TASK_PRIORITYS.LOW, label: 'Low' },
];
