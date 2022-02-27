import classNames from "../utils/classNames";

export const Pill = ({ pillText, pillColour }) => {
  return (
    <div
      className={classNames(
        pillColour,
        "inline-flex items-baseline px-2.5 py-0.5 rounded-full text-xs font-normal md:mt-2 lg:mt-0"
      )}
    >
      {pillText}
    </div>
  );
};
