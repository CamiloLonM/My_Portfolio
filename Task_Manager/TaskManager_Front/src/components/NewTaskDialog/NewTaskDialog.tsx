import * as yup from 'yup';
import React from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
  MenuItem,
} from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { TASK_STATUS } from '@/constants/taskStatus';
import { TASK_PRIORITYS } from '@/constants/taskPrioritys';
import { Task } from '@/types/Task';
import { schemaNewTask } from '@/validations/NewTaskDialog/schemaNewTask';

interface NewTaskDialogProps {
  open: boolean;
  onClose: () => void;
  onSave: (task: Task) => void;
}

const STATUS_OPTIONS = [
  { value: TASK_STATUS.PENDING, label: 'Pending' },
  { value: TASK_STATUS.PROGRESS, label: 'In Progress' },
  { value: TASK_STATUS.COMPLETED, label: 'Completed' },
];

const PRIORITY_OPTIONS = [
  { value: TASK_PRIORITYS.HIGH, label: 'High' },
  { value: TASK_PRIORITYS.MEDIUM, label: 'Medium' },
  { value: TASK_PRIORITYS.LOW, label: 'Low' },
];

type FormValues = yup.InferType<typeof schemaNewTask>;

const NewTaskDialog: React.FC<NewTaskDialogProps> = ({
  open,
  onClose,
  onSave,
}) => {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: yupResolver(schemaNewTask),
    defaultValues: {
      title: '',
      description: '',
      priority: TASK_PRIORITYS.LOW,
      status: TASK_STATUS.PENDING,
    },
  });

  const onSubmit = (data: FormValues) => {
    const newTask: Task = {
      ...data,
      date: new Date().toISOString(),
    };
    onSave(newTask);
    onClose();
    reset(); // reset al estado inicial
  };

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth='sm'>
      <DialogTitle>New Task</DialogTitle>
      <DialogContent
        sx={{ display: 'flex', flexDirection: 'column', gap: 2, mt: 1 }}
      >
        {/* Title */}
        <Controller
          name='title'
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              label='Title'
              error={!!errors.title}
              helperText={errors.title?.message}
              fullWidth
            />
          )}
        />

        {/* Description */}
        <Controller
          name='description'
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              label='Description'
              multiline
              rows={3}
              error={!!errors.description}
              helperText={errors.description?.message}
              fullWidth
            />
          )}
        />

        <Controller
          name='priority'
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              select
              label='Priority'
              error={!!errors.priority}
              helperText={errors.priority?.message}
              fullWidth
            >
              {PRIORITY_OPTIONS.map((opt) => (
                <MenuItem key={opt.value} value={opt.value}>
                  {opt.label}
                </MenuItem>
              ))}
            </TextField>
          )}
        />

        <Controller
          name='status'
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              select
              label='Status'
              error={!!errors.status}
              helperText={errors.status?.message}
              fullWidth
            >
              {STATUS_OPTIONS.map((opt) => (
                <MenuItem key={opt.value} value={opt.value}>
                  {opt.label}
                </MenuItem>
              ))}
            </TextField>
          )}
        />
      </DialogContent>

      <DialogActions>
        <Button onClick={onClose} variant='contained' color='secondary'>
          Cancel
        </Button>
        <Button
          onClick={handleSubmit(onSubmit)}
          variant='contained'
          color='primary'
        >
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default NewTaskDialog;
