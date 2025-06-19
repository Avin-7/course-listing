import fullStar from "../../assets/fullStar.svg";
import halfStar from "../../assets/fourPointFiveStar.svg";
import fourPointTwoStar from "../../assets/fourPointTwoStar.svg";
import fourPointThreeStar from "../../assets/fourPointThreeStar.svg";
import fourPointFourStar from "../../assets/fourPointFourStar.svg";
import fourPointSixStar from "../../assets/fourPointSixStar.svg";
import fourPointSevenStar from "../../assets/fourPointSevenStar.svg";
import fourPointEightStar from "../../assets/fourPointEightStar.svg";
import fourPointNineStar from "../../assets/fourPointNineStar.svg";


export const showRatings = (ratingInteger) => {
  if (ratingInteger == 4) {
    return (
      <span className=" flex gap-0.5 text-sm">
        <img src={fullStar} alt="" className="size-3" />
        <img src={fullStar} alt="" className="size-3" />
        <img src={fullStar} alt="" className="size-3" />
        <img src={fullStar} alt="" className="size-3" />
      </span>
    );
  } else if (ratingInteger == 4.1 || ratingInteger == 4.2) {
    return (
      <span className=" flex gap-0.5 text-sm">
        <img src={fullStar} alt="" className="size-3" />
        <img src={fullStar} alt="" className="size-3" />
        <img src={fullStar} alt="" className="size-3" />
        <img src={fullStar} alt="" className="size-3" />
        <img src={fourPointTwoStar} alt="" className="size-3" />
      </span>
    );
  } else if (ratingInteger == 4.3) {
    return (
      <span className=" flex gap-0.5 text-sm">
        <img src={fullStar} alt="" className="size-3" />
        <img src={fullStar} alt="" className="size-3" />
        <img src={fullStar} alt="" className="size-3" />
        <img src={fullStar} alt="" className="size-3" />
        <img src={fourPointThreeStar} alt="" className="size-3" />
      </span>
    );
  } else if (ratingInteger == 4.4) {
    return (
      <span className=" flex gap-0.5 text-sm">
        <img src={fullStar} alt="" className="size-3" />
        <img src={fullStar} alt="" className="size-3" />
        <img src={fullStar} alt="" className="size-3" />
        <img src={fullStar} alt="" className="size-3" />
        <img src={fourPointFourStar} alt="" className="size-3" />
      </span>
    );
  } else if (ratingInteger == 4.5) {
    return (
      <span className=" flex gap-0.5 text-sm">
        <img src={fullStar} alt="" className="size-3" />
        <img src={fullStar} alt="" className="size-3" />
        <img src={fullStar} alt="" className="size-3" />
        <img src={fullStar} alt="" className="size-3" />
        <img src={halfStar} alt="" className="size-3" />
      </span>
    );
  } else if (ratingInteger == 4.6) {
    return (
      <span className=" flex gap-0.5 text-sm">
        <img src={fullStar} alt="" className="size-3" />
        <img src={fullStar} alt="" className="size-3" />
        <img src={fullStar} alt="" className="size-3" />
        <img src={fullStar} alt="" className="size-3" />
        <img src={fourPointSixStar} alt="" className="size-3" />
      </span>
    );
  } else if (ratingInteger == 4.7) {
    return (
      <span className=" flex gap-0.5 text-sm">
        <img src={fullStar} alt="" className="size-3" />
        <img src={fullStar} alt="" className="size-3" />
        <img src={fullStar} alt="" className="size-3" />
        <img src={fullStar} alt="" className="size-3" />
        <img src={fourPointSevenStar} alt="" className="size-3" />
      </span>
    );
  } else if (ratingInteger == 4.8) {
    return (
      <span className=" flex gap-0.5 text-sm">
        <img src={fullStar} alt="" className="size-3" />
        <img src={fullStar} alt="" className="size-3" />
        <img src={fullStar} alt="" className="size-3" />
        <img src={fullStar} alt="" className="size-3" />
        <img src={fourPointEightStar} alt="" className="size-3" />
      </span>
    );
  } else if (ratingInteger == 4.9) {
    return (
      <span className=" flex gap-0.5 text-sm">
        <img src={fullStar} alt="" className="size-3" />
        <img src={fullStar} alt="" className="size-3" />
        <img src={fullStar} alt="" className="size-3" />
        <img src={fullStar} alt="" className="size-3" />
        <img src={fourPointNineStar} alt="" className="size-3" />
      </span>
    );
  } else if (ratingInteger == 5) {
    return (
      <span className=" flex gap-0.5 text-sm">
        <img src={fullStar} alt="" className="size-3" />
        <img src={fullStar} alt="" className="size-3" />
        <img src={fullStar} alt="" className="size-3" />
        <img src={fullStar} alt="" className="size-3" />
        <img src={fullStar} alt="" className="size-3" />
      </span>
    );
  }
};
