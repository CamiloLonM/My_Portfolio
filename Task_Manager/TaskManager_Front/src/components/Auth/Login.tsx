import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Link as RouterLink, useNavigate } from 'react-router-dom';

import {
  Box,
  TextField,
  Button,
  Divider,
  Link,
  Grid2 as Grid,
} from '@mui/material';

import { schemaLogin } from '@/validations/schemaLogin';
import {
  ContenteStyle,
  ContentStyle,
  TitleStyle,
} from '@/components/Auth/styles';

type FormData = {
  email: string;
  password: string;
};

const Login: React.FC = () => {
  const [open, setOpen] = useState<boolean>(true);
  const navigate = useNavigate();

  const handleClose = () => setOpen(false);

  const handleGoogleSignIn = () => {
    console.log('Iniciar sesión con Google');
  };

  const {
    handleSubmit,
    watch,
    control,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schemaLogin),
    defaultValues: { email: '', password: '' },
  });

  const onSubmit = (data: FormData) => {
    console.log('🚀 ~ onSubmit ~ data:', data);
    handleClose();
  };

  return (
    <ContentStyle>
      <ContenteStyle>
        <TitleStyle id='login-title' variant='h6' aria-label='Login title'>
          Login
        </TitleStyle>

        <Box
          sx={{ flexGrow: 1, mt: 2 }}
          component='form'
          noValidate
          autoComplete='off'
          onSubmit={handleSubmit(onSubmit)}
          aria-label='Login form'
        >
          <Grid container direction='column' spacing={2}>
            <Grid>
              <Controller
                name='email'
                control={control}
                rules={{ required: true }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextField
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
          </Grid>

          <Box>
            <Button
              id='login-button'
              disabled={!watch('email') || !watch('password')}
              fullWidth
              size='medium'
              variant='contained'
              type='submit'
              onClick={handleSubmit(onSubmit)}
              sx={{ mt: 2 }}
              aria-label='Login button'
            >
              Login
            </Button>
          </Box>
        </Box>

        <Divider
          variant='middle'
          sx={{ my: 2 }}
          aria-label='Divider between login options'
        />

        <Button
          fullWidth
          variant='outlined'
          size='medium'
          onClick={handleGoogleSignIn}
          aria-label='Sign in with Google button'
        >
          Sign in with Google
        </Button>

        <Grid container direction='column' sx={{ mt: 2 }}>
          <Link
            component={RouterLink}
            to='/register'
            variant='body2'
            aria-label='Link to registration page'
          >
            Don't have an account? Sign up
          </Link>
        </Grid>
      </ContenteStyle>
    </ContentStyle>
  );
};

export default Login;
