import { barberList } from "~/api/mock/barberData";
import GenericSlider from "~/components/custom/slider/GenericSlider";

function BarberList() {
  return (
    <GenericSlider
      title={barberList.barber_title}
      items={barberList.barber_data}
    />
  );
}

export default BarberList;
