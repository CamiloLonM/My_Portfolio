import { taskPrioritys } from '@/constants/taskPrioritys';
import { UserStatus } from '@/constants/userStatus';

export interface Task {
  id?: string;
  title: string;
  description: string;
  priority: taskPrioritys;
  status: UserStatus;
  date?: string;
}
