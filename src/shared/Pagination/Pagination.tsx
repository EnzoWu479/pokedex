import { createStyles, makeStyles } from "@material-ui/styles";
import { Pagination, PaginationProps } from "@mui/material";
import { Container } from "./_pagination";

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      "& .Mui-selected": {
        backgroundColor: "#f36a10 !important",
        color: "#fff",
      },
      "& .MuiButtonBase-root": {
        borderRadius: "50px",
      },
    },
  })
);
interface Props extends PaginationProps {}
export default ({ ...rest }: Props) => {
  const classes = useStyles();
  return (
    <Container>
      <Pagination
        count={10}
        style={{
          color: "#f36a10",
        }}
        className={classes.root}
        {...rest}
      />
    </Container>
  );
};
