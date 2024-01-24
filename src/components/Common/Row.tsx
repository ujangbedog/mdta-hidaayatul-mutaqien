import { Grid, GridProps } from "@mui/material";
import React, { ReactNode } from "react";

type RowProps = {
  children: ReactNode;
  sx?: any;
  justify?: GridProps["justifyContent"];
  align?: GridProps["alignItems"];
  p?: GridProps["p"];
  py?: any; // Add py to RowProps
  px?: any; // Add px to RowProps
};


const Row: React.FC<RowProps> = ({
  children,
  sx = {},
  py = {},
  px = {},
  justify = "center",
  align = "center",
  p = 2,
  ...rest
}) => {
  return (
    <Grid
      container
      py={py}
      px={px}
      sx={{
        width: "100%",
        alignItems: align,
        justifyContent: justify,
        justifyItems: justify,
        ...sx,
      }}
      {...rest}
    >
      {children}
    </Grid>
  );
};

export default Row;
