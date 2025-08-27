import * as yup from 'yup';
import React from 'react';
import {
  Dialog,
  DialogTitle,
  TextField,
  MenuItem,
  Typography,
  Divider,
  Button,
} from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { TASK_STATUS } from '@/constants/taskStatus';
import { TASK_PRIORITYS } from '@/constants/taskPrioritys';
import { Task } from '@/types/Task';
import { schemaNewTask } from '@/validations/NewTaskDialog/schemaNewTask';
import { PRIORITY_OPTIONS, STATUS_OPTIONS } from './utils/ObjectOptions';
import { BoxTaskStyle, ContentTaskStyle, DialogTaskStyle } from './styles';

interface NewTaskDialogProps {
  open: boolean;
  onClose: () => void;
  onSave: (task: Task) => void;
}

type FormValues = yup.InferType<typeof schemaNewTask>;

const defaultValues = {
  title: '',
  description: '',
  priority: TASK_PRIORITYS.LOW,
  status: TASK_STATUS.PENDING,
};

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
    mode: 'onChange',
    criteriaMode: 'all',
    defaultValues,
  });

  const onSubmit = (data: FormValues) => {
    // const newTask: Task = { ...data, date: new Date().toISOString() };
    // onSave(newTask);
    onClose();
    reset();
  };

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth='sm'>
      <DialogTitle>
        <Typography variant='h2' component='span'>
          📝 New Task
        </Typography>
      </DialogTitle>
      <Divider />

      <ContentTaskStyle>
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
              variant='outlined'
              size='small'
            />
          )}
        />

        <Controller
          name='description'
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              label='Description'
              multiline
              rows={4}
              error={!!errors.description}
              helperText={errors.description?.message}
              fullWidth
              variant='outlined'
              size='small'
            />
          )}
        />

        <BoxTaskStyle>
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
                variant='outlined'
                size='small'
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
                variant='outlined'
                size='small'
              >
                {STATUS_OPTIONS.map((opt) => (
                  <MenuItem key={opt.value} value={opt.value}>
                    {opt.label}
                  </MenuItem>
                ))}
              </TextField>
            )}
          />
        </BoxTaskStyle>
      </ContentTaskStyle>

      <DialogTaskStyle>
        <Button
          onClick={() => {
            reset(defaultValues);
            onClose();
          }}
          variant='cancel'
        >
          Cancel
        </Button>
        <Button onClick={handleSubmit(onSubmit)} variant='save'>
          Save
        </Button>
      </DialogTaskStyle>
    </Dialog>
  );
};

export default NewTaskDialog;
