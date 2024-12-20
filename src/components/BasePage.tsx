import { PageTypeEnum } from '../enums/page-type-enum.ts';
import { ReactNode } from 'react';
import { Navbar } from './Navbar.tsx';

export function BasePage(props: IProps) {
  if (props.type === PageTypeEnum.FULL_PAGE) {
    return (<>{props.children}</>
  );
 } else {
    return (
      <div>
        <Navbar />
        <div>
          {props.children}
          </div>
      </div>
    );
  }
}

interface IProps {
  children: ReactNode; // Fixed the typo here
  type: PageTypeEnum;
}
