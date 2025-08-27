import * as yup from 'yup';
import { TASK_PRIORITYS, TaskPrioritys } from '@/constants/taskPrioritys';
import { TASK_STATUS, TaskStatus } from '@/constants/taskStatus';
import { customMessages } from '@/utils/yupCustomMessages';

export const schemaNewTask = yup.object({
  title: yup.string().required(customMessages.required),
  description: yup.string().required(customMessages.required),
  priority: yup
    .mixed<TaskPrioritys>()
    .oneOf(Object.values(TASK_PRIORITYS) as TaskPrioritys[])
    .required(customMessages.required),
  status: yup
    .mixed<TaskStatus>()
    .oneOf(Object.values(TASK_STATUS) as TaskStatus[])
    .required(customMessages.required),
});
