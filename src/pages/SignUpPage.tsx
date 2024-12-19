import { BrandLogo } from "../components/BrandLogo";
import { CardBody, MainCard } from "../components/MainCard";
import { Button, Checkbox, Divider, FormControlLabel, Link } from "@mui/material";
import { InputText } from "../components/InputText";
import { useState } from "react";
import { ROUTES } from "../routes/routes";
import { Link as RouterLink } from 'react-router-dom';
import { t } from "i18next";

export function SignUp() {
    const [showPassword, setShowPassword] = useState<boolean>(false);

    

    return (
      <div className={'flex'}>
        <div className={'flex flex-1 flex-col min-h-screen py-32 justify-between items-center'}>
          <BrandLogo />
          <MainCard>
            <CardBody>
              <h1 className={"text-2xl font-semibold"}>{t("signUp")}</h1>
            </CardBody>
            <Divider />
            <CardBody className={'grid gap-4'}>
              <div className={'grid grid-cols-2 gap-4'}>
                <InputText label={t('firstName')} placeholder={'insert first name'} required />
                <InputText label={t('lastName')} placeholder={'insert last name'} required />
              </div>
              <InputText label={t('email')} placeholder={t('insertEmail')} required />
              <InputText
                label={t('password')}
                placeholder={t('insertPassword')}
                required
                type={showPassword ? 'text' : 'password'}
              />
              <InputText
                label={t('confirmationPassword')}
                placeholder={t('insertConfirmationPassword')}
                required
                type={showPassword ? 'text' : 'password'}
              />
              <FormControlLabel
                control={
                  <Checkbox onChange={(_, e) => setShowPassword(e)} checked={showPassword} defaultChecked={false} />
                }
                label={t("showPassword")}
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