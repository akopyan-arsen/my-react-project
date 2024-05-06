import clsx from "clsx";
import css from "./Alert.module.css";
import { HiUser } from "react-icons/hi";

export const Alert = ({ variant, outlined, elevated, children }) => {
  return (
    <p
      className={clsx(css[variant], {
        [css.isOutlined]: outlined,
        [css.isElevated]: elevated,
      })}
    >
      <HiUser className="my-icon" size="24" />
      {children}
    </p>
  );
};
