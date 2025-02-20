import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Link as RouterLink, useNavigate } from 'react-router-dom';

import {
  Box,
  Typography,
  TextField,
  Button,
  Divider,
  Link,
  Modal,
  Grid2 as Grid,
  Backdrop,
} from '@mui/material';

import { schemaLogin } from '@/validations/schemaLogin';
import { ContentStyle } from '@/components/Auth/styles';
import { p } from 'node_modules/react-router/dist/development/fog-of-war-BALYJxf_.mjs';

type FormData = {
  email: string;
  password: string;
};

const CustomBackdrop = (props: any) => <Box {...props} />;

const Login: React.FC = () => {
  const [open, setOpen] = useState<boolean>(true);
  const navigate = useNavigate();

  const handleClose = () => setOpen(false);

  const handleGoogleSignIn = () => {
    console.log('Iniciar sesión con Google');
  };

  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schemaLogin),
    defaultValues: { email: '', password: '' },
  });

  const onSubmit = (data: FormData) => {
    console.log('Datos del formulario:', data);
    handleClose();
  };

  console.log(watch('email'));
  console.log(watch('password'));

  return (
    <ContentStyle>
      <Modal
        open={open}
        onClose={handleClose}
        disableEscapeKeyDown
        slots={{
          backdrop: CustomBackdrop,
        }}
      >
        <Box>
          <Typography id='modal-login-tittle' variant='h6' component='h2'>
            Iniciar Sesión
          </Typography>

          <Box
            sx={{ flexGrow: 1 }}
            component='form'
            noValidate
            autoComplete='off'
            onSubmit={handleSubmit(onSubmit)}
          >
            <Grid container spacing={2}>
              <Grid>
                <Controller
                  name='email'
                  control={control}
                  rules={{ required: true }}
                  render={({ field: { onChange, onBlur, value } }) => (
                    <TextField
                      fullWidth
                      id='email-input'
                      label='email'
                      variant='outlined'
                      onBlur={onBlur}
                      onChange={onChange}
                      value={value}
                      error={!!errors.email}
                      helperText={errors.email?.message}
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
                      label='password'
                      type='password'
                      variant='outlined'
                      onBlur={onBlur}
                      onChange={onChange}
                      value={value}
                      error={!!errors.password}
                      helperText={errors.password?.message}
                    />
                  )}
                />
              </Grid>
            </Grid>
            <Button
              id='login-button'
              disabled={!watch('email') || !watch('password')}
              fullWidth
              size='medium'
              variant='contained'
              type='submit'
              onClick={handleSubmit(onSubmit)}
              sx={{ mt: 2 }}
            >
              Login
            </Button>
          </Box>

          <Divider variant='middle' sx={{ my: 2 }} />

          <Button
            fullWidth
            variant='outlined'
            size='medium'
            onClick={handleGoogleSignIn}
          >
            Login with Google
          </Button>

          <Grid container justifyContent='center'>
            <Link component={RouterLink} to='/register' variant='body2'>
              ¿No tienes una cuenta? Regístrate
            </Link>
          </Grid>
        </Box>
      </Modal>
    </ContentStyle>
  );
};

export default Login;
