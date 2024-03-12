import PropTypes from "prop-types";

const Button = ({ variant, onClick, children }) => {
  let style;
  switch (variant) {
    case "link":
      style =
        "font-semibold text-sm bg-transparent underline text-gray-400 m-1 hover:text-orange-600";
      break;
    case "outline":
      style =
        "font-semibold px-6 py-3 w-[100%] rounded-md text-sm bg-transparent active:scale-95 text-gray-600 border-2 border-gray-300";
      break;
    default:
      style =
        "bg-orange-600 hover:bg-orange-700 w-[100%] font-semibold rounded-md text-sm active:scale-95 text-white px-6 py-3";
      break;
  }

  return (
    <button className={style} onClick={onClick}>
      {children}
    </button>
  );
};

Button.propTypes = {
  variant: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
};

export default Button;
