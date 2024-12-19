import { ReactNode } from 'react';

export function MainCard(props: IProps) {
  return <div className={`${props.className || ''} bg-white rounded-sm border`}>{props.children}</div>;
}

export function CardBody(props: IProps) {
  return <div className={`p-5 ${props.className || ''}`}>{props.children}</div>;
}

interface IProps {
  children: ReactNode;
  className?: string;
}
