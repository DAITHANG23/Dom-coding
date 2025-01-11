import { styled, Divider } from "@mui/material";

interface DividerProps {
  classes?: Record<string, string>;
}

export const StyledDivider = styled(Divider)(({ theme }) => ({
  ...theme.applyStyles("dark", {
    borderColor: theme.palette.primary.main,
  }),
}));

const DividerComponent = ({ classes }: DividerProps) => {
  return <StyledDivider variant="middle" classes={classes} />;
};

export default DividerComponent;
