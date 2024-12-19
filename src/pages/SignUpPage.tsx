import { BrandLogo } from "../components/BrandLogo";
import { CardBody, MainCard } from "../components/MainCard";
import { Button, Checkbox, Divider, FormControlLabel, Link } from "@mui/material";
import { InputText } from "../components/InputText";
import { useState } from "react";
import { ROUTES } from "../routes/routes";
import { Link as RouterLink } from 'react-router-dom';

export function SignUp() {
    const [showPassword, setShowPassword] = useState<boolean>(false);

    return (
      <div className={'flex'}>
        <div className={'flex flex-1 flex-col min-h-screen py-32 justify-between items-center'}>
          <BrandLogo />
          <MainCard>
            <CardBody>
              <h1 className={"text-2xl font-semibold"}>SIGN UP</h1>
            </CardBody>
            <Divider />
            <CardBody className={'grid gap-4'}>
              <div className={'grid grid-cols-2 gap-4'}>
                <InputText label={'first name'} placeholder={'insert first name'} required />
                <InputText label={'last name'} placeholder={'insert last name'} required />
              </div>
              <InputText label={'email'} placeholder={'insert last email'} required />
              <InputText
                label={'password'}
                placeholder={'insert password'}
                required
                type={showPassword ? 'text' : 'password'}
              />
              <InputText
                label={'confirmation password'}
                placeholder={'insert confirmation password'}
                required
                type={showPassword ? 'text' : 'password'}
              />
              <FormControlLabel
                control={
                  <Checkbox onChange={(_, e) => setShowPassword(e)} checked={showPassword} defaultChecked={false} />
                }
                label="show password"
              />
              <p>
                {'already have account ? '}{' '}
                <Link
                  component={RouterLink} // Specify that this is a Router Link
                  to={ROUTES.SignIn()} // Use the to prop for routing
                  className={'text-primary-main hover:underline'}
                >
                  sign in here
                </Link>
              </p>

              <Button variant={'contained'}>Sign Up</Button>
            </CardBody>
          </MainCard>
          <div>{'COPYRIGHT'}</div>
        </div>
        <div className={'bg-primary-main min-h-screen w-[30%]'}></div>
      </div>
    );
}