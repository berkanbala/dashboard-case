export const validate = (props: any) => {
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

export const validateLogin = (authname: any, authpasswords: any) => {
  if (authname === "" || authpasswords === "") {
    return false;
  }
  return true;
};
