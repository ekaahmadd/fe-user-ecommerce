import { Button, Checkbox, FormControlLabel } from '@mui/material';
import { InputText } from '../components/InputText';
import { BrandLogo } from '../components/BrandLogo';
import { CardBody, MainCard } from '../components/MainCard';
import { useState } from 'react';

export function SignIn() {
  const [showPassword, setShowPassword] = useState<boolean>(false);
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
            <InputText type={'email'} label={'Email'} placeholder={'insert email'} required />
            <InputText type={showPassword ? 'text' : 'password'} label={'Password'} placeholder={'insert password'} required />
            <FormControlLabel control={<Checkbox onChange={(_,e) => setShowPassword(e)} checked={showPassword} defaultChecked={false} />} label="show password" />
            <Button variant={'contained'}>sign in</Button>
          </CardBody>
        </MainCard>
        <div>CopyRight</div>
      </div>
    </div>
  );
}
