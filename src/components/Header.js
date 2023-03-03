import { Typography } from "@mui/material";
import store from "../store/TodoStore";

const Header = () => {
  return (
    <>
      <Typography variant='h2'>Список задач</Typography>
      <Typography>{ store.report }</Typography>
    </>
  );
};

export default Header;
