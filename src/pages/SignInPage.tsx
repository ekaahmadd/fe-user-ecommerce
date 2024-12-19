import { Button, Checkbox, FormControlLabel } from '@mui/material';
import { InputText } from '../components/InputText';
import { BrandLogo } from '../components/BrandLogo';
import { CardBody, MainCard } from '../components/MainCard';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../routes/routes';
import { t } from 'i18next';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { IReqSignIn } from '../model/request/IReqSignIn';

export function SignIn() {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const initialValues: IReqSignIn = {
    email: '',
    password: '',
  };

  const validationSchema = yup.object().shape({
    email: yup
    .string()
    .required(t('validation.required', { name: t('email') }))
    .email(t('validation.email_not_valid')),
    password: yup.string().required(t('validation.required', { name: t('password') })),
  });

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values));
    },
  });

  return (
    <div className={'grid grid-cols-2'}>
      <div className={'bg-primary-main min-h-screen'}></div>
      <div className={'flex flex-col justify-between h-[80%] items-center w-full my-auto'}>
        <BrandLogo />
        <MainCard>
          <CardBody>
            <h3 className={'text-2xl font-semibold'}>{'Hello'}</h3>
            <p className={'italic text-slate-500'}>{'please insert your account information to sign in'}</p>
          </CardBody>
          <CardBody className={'grid gap-4'}>
            <InputText
              type={'email'}
              label={t('email')}
              placeholder={t('insertEmail')}
              required
              name={'email'}
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              errorMessage={formik.touched.email && formik.errors.email}
            />
            <InputText
              type={showPassword ? 'text' : 'password'}
              label={t('password')}
              placeholder={t('insertPassword')}
              required
              name={'password'}
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              errorMessage={formik.touched.password && formik.errors.password}
            />
            <FormControlLabel
              control={
                <Checkbox onChange={(_, e) => setShowPassword(e)} checked={showPassword} defaultChecked={false} />
              }
              label={t("showPassword")}
            />
            <p>
              {'dont have account ? '}{' '}
              <Link className={'text-primary-main hover: underline'} to={ROUTES.SignUp()}>
                sign up here
              </Link>
            </p>
            <Button onClick={() => formik.handleSubmit()} variant={'contained'}>sign in</Button>
          </CardBody>
        </MainCard>
        <div>CopyRight</div>
      </div>
    </div>
  );
}
