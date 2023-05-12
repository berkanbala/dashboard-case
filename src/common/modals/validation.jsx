export const validate = (props) => {
  if (
    props.fname === "" ||
    props.email === "" ||
    props.phone === "" ||
    props.textarea === ""
  ) {
    return false;
  }
  return true;
};

export const validateLogin = (authname, authpasswords) => {
  if (authname === "" || authpasswords === "") {
    return false;
  }
  return true;
};
