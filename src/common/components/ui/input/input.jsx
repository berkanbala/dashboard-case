import clsx from "clsx";
import styles from "./input.module.scss";

export const Input = (props) => {
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
  } = props;

  return (
    <div className={clsx(styles.container, className)}>
      {label && <label> {label} </label>}
      <input
        className={styles.input}
        type={type}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
      />
      {isIcon && <img onClick={onClick} src={icon} alt="search icon" />}
    </div>
  );
};
