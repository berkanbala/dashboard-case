import clsx from "clsx";
import styles from "./input.module.scss";

export const Input = (props: Props) => {
  const {
    name,
    type,
    icon,
    label,
    value,
    isIcon,
    onClick,
    onChange,
    className,
    placeholder,
    pattern,
    src,
  } = props;

  return (
    <div className={clsx(styles.container, className)}>
      {label && <label> {label} </label>}
      <input
        type={type}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
        pattern={pattern}
        onClick={onClick}
        src={src}
      />
      {isIcon && <img onClick={onClick} src={icon} alt="search icon" />}
    </div>
  );
};

interface Props {
  name?: string;
  type?: string;
  icon?: string;
  label?: any;
  value?: string;
  isIcon?: boolean;
  onClick?: any;
  onChange?: any;
  className?: string;
  placeholder?: string;
  pattern?: string;
  src?: any;
}
