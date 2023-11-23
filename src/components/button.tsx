import { FC } from "react";

interface ButtonProps {
  variant: string;
  label: string;
  btnFC: () => void;
}

const Button: FC = () => {
  return (
    <button className="bg-slate-900 text-white py-3 px-6 rounded-md font-medium hover:bg-slate-800">
      Button
    </button>
  );
};

export default Button;
