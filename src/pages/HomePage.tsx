import { Box, Container } from "@mui/material";
import { STYLE_VARIABLE } from "../constants/style-variable";
import { dummyDataListProduct, IResListProduct } from "../model/response/IResListProduct";
import { Fragment } from "react/jsx-runtime";
import { CardBody, MainCard } from "../components/MainCard";
import { NumberFormatHelper } from "../helper/NumberHelper";

export function HomePage() {
    const numberFormat = new NumberFormatHelper();


    function productCard(item: IResListProduct) {
        return (
          <MainCard className="hover:border-primary-main hover:shadow-lg hover:-translate-y-1 duration-200 cursor-pointer">
            <img className="aspect-square h-auto bg-slate-400 w-full" src={item.image} />
            <CardBody className="">
              <div className="">
                <div className="line-clamp-1">{item.name}</div>
                <div className="font-semibold mt-2 text-primary-main">{numberFormat.toRupiah(item.price)}</div>
              </div>
            </CardBody>
          </MainCard>
        );
    }


    return (
      <div>
        <Box sx={{ height: STYLE_VARIABLE.SIZE.NAVBAR_HEIGHT }} />
        <Container>
          <div className="grid gap-6 mt-6">
            <h3 className="font-semibold text-3xl">Product List</h3>
            <div className="grid grid-cols-5 gap-4">
              {dummyDataListProduct.map((item, i) => (
                <Fragment key={i}>{productCard(item)}</Fragment>
              ))}
            </div>
          </div>
        </Container>
      </div>
    );
}