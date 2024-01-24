import { Grid, GridProps } from "@mui/material";
import React from "react";

type ColumnProps = {
  children?: React.ReactNode;
  sx?: object;
  xs?: GridProps["xs"];
  justify?: "flex-start" | "center" | "flex-end" | "space-between" | "space-around" | "space-evenly";
  p?: GridProps["p"];
} & Omit<GridProps, "xs" | "justify" | "p">;

const Column: React.FC<ColumnProps> = ({
  children,
  sx = {},
  xs = 12,
  justify = "center",
  p = 2,
  ...rest
}) => {
  return (
    <Grid
      item
      p={p}
      xs={xs}
      sx={{
        justifyContent: justify,
        ...sx,
      }}
      {...rest}
    >
      {children}
    </Grid>
  );
};

export default Column;
