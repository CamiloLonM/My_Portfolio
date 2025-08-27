import React from 'react';
import dayjs from 'dayjs';
import { useForm, Controller } from 'react-hook-form';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Box, TextField, Button, MenuItem, Grid2 as Grid } from '@mui/material';
import { useNavigate } from 'react-router';
import { yupResolver } from '@hookform/resolvers/yup';
import { USER_GENDER } from '@/constants/userGender';
import {
  ContainerStyle,
  ContentStyle,
  TitleStyle,
} from '@/components/Register/styles';
import { getUnixTimestamp, toUnixTimestamp } from '@/utils/date';
import { schemaRegister } from '@/validations/Register/schemaRegister';
import { RegisterFormUser } from '@/types/RegisterFormUser';

const defaultValues = {
  firstName: '',
  surname: '',
  email: '',
  password: '',
  birthDate: undefined,
  gender: USER_GENDER.OTHER,
};

const Register: React.FC = () => {
  const navigate = useNavigate();

  const {
    handleSubmit,
    control,
    reset,
    formState: { errors, isValid, isDirty },
  } = useForm<RegisterFormUser>({
    resolver: yupResolver(schemaRegister),
    mode: 'onChange',
    criteriaMode: 'all',
    defaultValues,
  });

  const onSubmit = (data: RegisterFormUser) => {
    const payload = {
      ...data,
      birthDate: data.birthDate ? toUnixTimestamp(data.birthDate) : null,
      createdAt: getUnixTimestamp(),
      updatedAt: getUnixTimestamp(),
    };
    console.log('🚀 ~ Payload enviado al backend:', payload);
    reset();
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
                render={({ field }) => (
                  <TextField
                    {...field}
                    required
                    fullWidth
                    id='firstName-input'
                    label='First name'
                    variant='outlined'
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
                render={({ field }) => (
                  <TextField
                    {...field}
                    required
                    fullWidth
                    id='surname-input'
                    label='Surname'
                    variant='outlined'
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
                render={({ field }) => (
                  <TextField
                    {...field}
                    required
                    fullWidth
                    id='email-input'
                    label='Email'
                    variant='outlined'
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
                render={({ field }) => (
                  <TextField
                    {...field}
                    required
                    fullWidth
                    id='password-input'
                    label='Password'
                    type='password'
                    variant='outlined'
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
                render={({ field }) => (
                  <TextField
                    {...field}
                    required
                    fullWidth
                    select
                    id='gender-input'
                    label='Gender'
                    variant='outlined'
                    error={!!errors.gender}
                    helperText={errors.gender?.message}
                    aria-label='Gender input field'
                  >
                    {Object.values(USER_GENDER).map((option) => (
                      <MenuItem key={option} value={option}>
                        {option.charAt(0).toUpperCase() + option.slice(1)}
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
                render={({ field: { onChange, value, onBlur } }) => (
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker
                      disableFuture
                      label='Date of birth'
                      value={value ? dayjs(value) : null}
                      onChange={(date) => onChange(date ? date.toDate() : null)}
                      onClose={onBlur}
                      slotProps={{
                        textField: {
                          fullWidth: true,
                          error: !!errors.birthDate,
                          helperText: errors.birthDate?.message,
                          id: 'birthDate-input',
                          'aria-label': 'Date of birth input field',
                        },
                      }}
                    />
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
