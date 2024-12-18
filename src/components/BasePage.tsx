import { PageTypeEnum } from '../enums/page-type-enum.ts';
import { ReactNode } from 'react';

export function BasePage(props: IProps) {
  if (props.type === PageTypeEnum.FULL_PAGE) {
    return <>{props.children}</>;
  } else {
    return (
      <div>
        <div>NAVBAR</div>
        <div>{props.children}</div>
      </div>
    );
  }
}

interface IProps {
  children: ReactNode; // Fixed the typo here
  type: PageTypeEnum;
}
