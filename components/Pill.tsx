import classNames from "../utils/ClassNames";

export const Pill = ({ pillText, pillColour }) => {
  const pillClassName = "bg-" + pillColour + "-100 text-" + pillColour + "-800";
  return (
    <div
      className={classNames(
        pillClassName,
        "inline-flex items-baseline px-2.5 py-0.5 rounded-full text-xs font-normal md:mt-2 lg:mt-0"
      )}
    >
      {pillText}
    </div>
  );
};
