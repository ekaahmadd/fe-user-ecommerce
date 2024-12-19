import { FunctionComponent } from "react";
import { PageTypeEnum } from "../enums/page-type-enum";
import { HomePage } from "../pages/HomePage";
import { ProductPage } from "../pages/ProductPage";
import { ROUTES } from "./routes.ts";
import { SignIn } from "../pages/SignInPage.tsx";

interface IRouteList {
    path: string;
    element: FunctionComponent,
    type : PageTypeEnum
}


export const routeList: IRouteList[] = [
  {
    element: HomePage,
    path: ROUTES.HomePage(),
    type: PageTypeEnum.FULL_PAGE,
  },
  {
    element: ProductPage,
    path: ROUTES.ProductPage(),
    type: PageTypeEnum.PRIMARY,
  },
  {
    element: SignIn,
    path: ROUTES.SignIn(),
    type: PageTypeEnum.FULL_PAGE,
  },
];