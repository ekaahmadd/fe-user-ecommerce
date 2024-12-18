import { FunctionComponent } from "react";
import { PageTypeEnum } from "../enums/page-type-enum";
import { HomePage } from "../pages/HomePage";
import { ProductPage } from "../pages/ProductPage";
import { ROUTES } from "./routes.ts";

interface IRouteList {
    path: string;
    element: FunctionComponent,
    type : PageTypeEnum
}


export const routeList: IRouteList[] = [
  {
    element: HomePage,
    path: ROUTES.HomePage(),
    type: PageTypeEnum.PRIMARY,
  },
  {
    element: ProductPage,
    path: ROUTES.ProductPage(),
    type: PageTypeEnum.PRIMARY,
  },
];