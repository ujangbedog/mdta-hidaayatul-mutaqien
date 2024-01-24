import theme from "@/styles/theme";
import { Grid, GridProps } from "@mui/material";
import React from "react";

type PageSectionProps = {
  bg?: string;
  children?: React.ReactNode;
  sx?: object;
  justify?: GridProps["justifyContent"];
  align?: GridProps["alignItems"];
  p?: GridProps["p"];
} & Omit<GridProps, "bg" | "justifyContent" | "alignItems" | "p">;

const PageSection: React.FC<PageSectionProps> = ({
  bg = theme.palette.basic.light,
  children,
  sx = {},
  justify = "center",
  align = "center",
  p = 7,
  ...rest
}) => {
  return (
    <Grid
      container
      p={p}
      px={5}
      bgcolor={bg}
      sx={{
        width: "100%",
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

export default PageSection;
