import classNames from "../utils/ClassNames";

export const Badge = ({ text, textColour, bgColour }) => {
  const pillClassName = `${textColour} ${bgColour}`;
  return (
    <div
      className={classNames(
        pillClassName,
        "inline-flex items-baseline px-2.5 py-0.5 rounded-full text-xs font-normal md:mt-2 lg:mt-0"
      )}
    >
      {text}
    </div>
  );
};
