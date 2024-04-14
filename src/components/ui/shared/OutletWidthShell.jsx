import PropTypes from "prop-types";

const OutletWidthShell = ({ children }) => {
  return <article className="w-[90%] mx-auto my-4">{children}</article>;
};

OutletWidthShell.propTypes = {
  children: PropTypes.node.isRequired,
};

export default OutletWidthShell;
