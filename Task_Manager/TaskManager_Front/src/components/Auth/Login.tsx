import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import GoogleLogin from '@/components/Auth/GoogleLogin';
import { yupResolver } from '@hookform/resolvers/yup';
import { schemaLogin } from '@/validations/Login/schemaLogin';
import './Auth.scss';

type FormData = {
  email: string;
  password: string;
};

const Login: React.FC = () => {
  const navigate = useNavigate();

  const {
    handleSubmit,
    watch,
    control,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schemaLogin),
    defaultValues: { email: '', password: '' },
  });

  const onSubmit = async (data: any) => {
    try {
      // llamada al barcken d
      //       await login(data.email, data.password);
      // Aquí deberías redirigir a otra página si el login fue exitoso
      navigate('/home'); //
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className='login'>
      <div className='login__content'>
        <h1 className='login__title' aria-label='Login title'>
          Login
        </h1>
        <form
          className='login__form'
          noValidate
          onSubmit={handleSubmit(onSubmit)}
          aria-label='Login form'
        >
          <div className='form-group'>
            <Controller
              name='email'
              control={control}
              rules={{ required: 'Email es requerido' }}
              render={({ field }) => (
                <>
                  <label className='h2' htmlFor='email-input'>
                    Email
                  </label>
                  <input
                    {...field}
                    id='email-input'
                    type='email'
                    className='login__input'
                  />
                  {errors.email && (
                    <p className='error-text'>{errors.email.message}</p>
                  )}
                </>
              )}
            />
          </div>

          <div className='form-group'>
            <Controller
              name='password'
              control={control}
              rules={{ required: 'Contraseña es requerida' }}
              render={({ field }) => (
                <>
                  <label htmlFor='password-input'>Password</label>
                  <input
                    {...field}
                    id='password-input'
                    type='password'
                    className='login__input'
                  />
                  {errors.password && (
                    <p className='error'>{errors.password.message}</p>
                  )}
                </>
              )}
            />
          </div>

          <button
            id='login-button'
            className='login__button login__button--primary'
            disabled={!watch('email') || !watch('password')}
            type='submit'
            aria-label='Login button'
          >
            LOGIN
          </button>
        </form>

        <div
          className='divider'
          aria-label='Divider between login options'
        ></div>

        <GoogleLogin />

        <div className='login__link-container'>
          <RouterLink
            to='/register'
            className='login__link'
            aria-label='Link to registration page'
          >
            Don't have an account? Sign up
          </RouterLink>
        </div>
      </div>
    </div>
  );
};

export default Login;
