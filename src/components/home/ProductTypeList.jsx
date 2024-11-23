import GenericSlider from "~/components/custom/slider/GenericSlider";
import { productTypeList } from "~/api/mock/barberData";

function ProductTypeList() {
  return (
    <GenericSlider
      title={productTypeList.product_type_title}
      items={productTypeList.product_type_data}
    />
  );
}

export default ProductTypeList;
