import { achievementList } from "~/api/mock/barberData";
import GenericSlider from "~/components/custom/slider/GenericSlider";

function AchievementList() {
  return (
    <GenericSlider
      title={achievementList.achievement_title}
      items={achievementList.achievement_data}
    />
  );
}

export default AchievementList;
