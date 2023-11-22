import { FC } from "react";

interface ButtonProps {
  variant: string;
  label: string;
  btnFC: () => void;
}

const Button: FC<ButtonProps> = ({ variant, label, btnFC }) => {
  return (
    <button className={variant} onClick={btnFC}>
      {label}
    </button>
  );
};

export default Button;
