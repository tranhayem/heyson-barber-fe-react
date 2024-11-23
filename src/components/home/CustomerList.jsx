import { customerList } from "~/api/mock/barberData";
import GenericSlider from "~/components/custom/slider/GenericSlider";

function CustomerList() {
  return (
    <GenericSlider
      title={customerList.customer_title}
      items={customerList.customer_data}
    />
  );
}

export default CustomerList;
