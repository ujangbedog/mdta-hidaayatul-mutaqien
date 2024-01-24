import theme from "@/styles/theme";
import { Grid, GridProps } from "@mui/material";
import React from "react";

type PageSectionColumnProps = {
  bg?: string;
  children?: React.ReactNode;
  sx?: object;
  xs?: GridProps["xs"];
  justify?: GridProps["justifyContent"];
  align?: GridProps["alignItems"];
  p?: GridProps["p"];
} & Omit<GridProps, "bg" | "justifyContent" | "alignItems" | "p" | "xs">;

const PageSectionColumn: React.FC<PageSectionColumnProps> = ({
  bg = theme.palette.basic.light,
  children,
  sx = {},
  xs = 12,
  justify = "center",
  align = "center",
  p = 2,
  ...rest
}) => {
  return (
    <Grid
      item
      p={p}
      xs={xs}
      sx={{
        alignItems: align,
        justifyContent: justify,
        ...sx,
      }}
      {...rest}
    >
      {children}
    </Grid>
  );
};

export default PageSectionColumn;
