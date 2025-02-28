import React, { useState } from 'react';
import dayjs from 'dayjs';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Box, TextField, Button, Grid2 as Grid, MenuItem } from '@mui/material';
import { schemaRegister } from '@/validations/schema';
import {
  ContainerStyle,
  ContentStyle,
  TitleStyle,
} from '@/components/Register/styles';
import { useNavigate } from 'react-router';

const genres = [
  { value: 'male', label: 'Male' },
  { value: 'female', label: 'Female' },
  { value: 'other', label: 'Other' },
];

type FormData = {
  firstName: string;
  surname: string;
  email: string;
  password: string;
  birthDate: Date | null;
  gender: 'male' | 'female' | 'other';
};

const Register: React.FC = () => {
  const [open, setOpen] = useState<boolean>(true);
  const navigate = useNavigate();

  const handleClose = () => setOpen(false);

  const {
    handleSubmit,
    control,
    reset,
    formState: { errors, isValid, isDirty },
  } = useForm<FormData>({
    resolver: yupResolver(schemaRegister),
    defaultValues: {
      firstName: '',
      surname: '',
      email: '',
      password: '',
      birthDate: null,
      gender: 'other',
    },
  });

  const onSubmit = (data: FormData) => {
    console.log('🚀 ~ onSubmit ~ data:', data);
    reset();
    handleClose();
    navigate('/');
  };

  return (
    <ContainerStyle>
      <ContentStyle>
        <TitleStyle
          id='register-title'
          variant='h6'
          aria-label='Register title'
        >
          Create an account
        </TitleStyle>
        <Box
          sx={{ flexGrow: 1, mt: 2 }}
          component='form'
          noValidate
          autoComplete='off'
          onSubmit={handleSubmit(onSubmit)}
          aria-label='Register form'
        >
          <Grid container direction='column' spacing={2}>
            <Grid>
              <Controller
                name='firstName'
                control={control}
                rules={{ required: true }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextField
                    required
                    fullWidth
                    id='firstName-input'
                    label='First name'
                    variant='outlined'
                    onBlur={onBlur}
                    onChange={onChange}
                    value={value}
                    error={!!errors.firstName}
                    helperText={errors.firstName?.message}
                    aria-label='First Name input field'
                  />
                )}
              />
            </Grid>
            <Grid>
              <Controller
                name='surname'
                control={control}
                rules={{ required: true }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextField
                    required
                    fullWidth
                    id='surname-input'
                    label='Surname'
                    variant='outlined'
                    onBlur={onBlur}
                    onChange={onChange}
                    value={value}
                    error={!!errors.surname}
                    helperText={errors.surname?.message}
                    aria-label='Surname input field'
                  />
                )}
              />
            </Grid>
            <Grid>
              <Controller
                name='email'
                control={control}
                rules={{ required: true }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextField
                    required
                    fullWidth
                    id='email-input'
                    label='Email'
                    variant='outlined'
                    onBlur={onBlur}
                    onChange={onChange}
                    value={value}
                    error={!!errors.email}
                    helperText={errors.email?.message}
                    aria-label='Email input field'
                  />
                )}
              />
            </Grid>
            <Grid>
              <Controller
                name='password'
                control={control}
                rules={{ required: true }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextField
                    required
                    fullWidth
                    id='password-input'
                    label='Password'
                    type='password'
                    variant='outlined'
                    onBlur={onBlur}
                    onChange={onChange}
                    value={value}
                    error={!!errors.password}
                    helperText={errors.password?.message}
                    aria-label='Password input field'
                  />
                )}
              />
            </Grid>

            <Grid>
              <Controller
                name='gender'
                control={control}
                rules={{ required: true }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextField
                    required
                    fullWidth
                    select
                    id='gender-input'
                    label='Gender'
                    variant='outlined'
                    onBlur={onBlur}
                    onChange={onChange}
                    value={value}
                    error={!!errors.gender}
                    helperText={errors.gender?.message}
                    aria-label='Gender input field'
                  >
                    {genres.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </TextField>
                )}
              />
            </Grid>

            <Grid>
              <Controller
                name='birthDate'
                control={control}
                rules={{ required: true }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DemoContainer components={['DatePicker']}>
                      <DemoItem>
                        <DatePicker
                          showDaysOutsideCurrentMonth
                          disableFuture={true}
                          label='Date of birth'
                          onChange={onChange}
                          onClose={() => {
                            onBlur();
                          }}
                          value={value ? dayjs(value) : null}
                          aria-label='Date of birth input field'
                        />
                      </DemoItem>
                    </DemoContainer>
                  </LocalizationProvider>
                )}
              />
            </Grid>
          </Grid>

          <Box>
            <Button
              sx={{ mt: 2 }}
              id='register-button'
              disabled={!isValid || !isDirty}
              fullWidth
              size='medium'
              variant='contained'
              type='submit'
              onClick={handleSubmit(onSubmit)}
              aria-label='Register button'
            >
              Sign up
            </Button>
          </Box>
        </Box>
      </ContentStyle>
    </ContainerStyle>
  );
};

export default Register;
