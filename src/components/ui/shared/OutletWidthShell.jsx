import PropTypes from "prop-types";

const OutletWidthShell = ({ children }) => {
  return <article className="w-auto ml-[17rem] mr-11 my-6">{children}</article>;
};

OutletWidthShell.propTypes = {
  children: PropTypes.node.isRequired,
};

export default OutletWidthShell;
