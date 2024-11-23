import { serviceTypeList } from "~/api/mock/barberData";
import GenericSlider from "~/components/custom/slider/GenericSlider";

function ServiceTypeList() {
  return (
    <GenericSlider
      title={serviceTypeList.service_type_title}
      items={serviceTypeList.service_type_data}
    />
  );
}

export default ServiceTypeList;
