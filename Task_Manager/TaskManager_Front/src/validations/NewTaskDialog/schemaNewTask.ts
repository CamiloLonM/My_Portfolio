import * as yup from 'yup';
import { TASK_PRIORITYS, TaskPrioritys } from '@/constants/taskPrioritys';
import { TASK_STATUS, TaskStatus } from '@/constants/taskStatus';
import { customMessages } from '@/utils/yupCustomMessages';
import { messages } from './messages';

export const schemaNewTask = yup.object({
  title: yup
    .string()
    .required(customMessages.required)
    .min(3, messages.titleMinLength)
    .max(50, messages.titleMaxLength),
  description: yup
    .string()
    .required(customMessages.required)
    .min(10, messages.descriptionMinLength)
    .max(300, messages.descriptionMaxLength),
  priority: yup
    .mixed<TaskPrioritys>()
    .oneOf(Object.values(TASK_PRIORITYS) as TaskPrioritys[]),
  status: yup
    .mixed<TaskStatus>()
    .oneOf(Object.values(TASK_STATUS) as TaskStatus[]),
});
