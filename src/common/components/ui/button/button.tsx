import clsx from "clsx";
import styles from "./button.module.scss";

export const Button = (props: Props) => {
  const { type, onClick, className, text, disabled } = props;

  return (
    <button
      type={type}
      onClick={onClick}
      className={clsx(
        styles.container,
        className,
        disabled ? styles.disabled : ""
      )}
    >
      {text}
    </button>
  );
};

interface Props {
  type: "button" | "submit" | "reset";
  onClick: () => void;
  className: string;
  text: string;
  disabled: boolean;
}
