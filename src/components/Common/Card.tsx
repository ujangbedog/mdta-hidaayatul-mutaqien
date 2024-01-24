import { Card, CardContent, CardProps } from "@mui/material";
import React from "react";

type CardCompProps = {
  bg?: string;
  children?: React.ReactNode;
} & CardProps;

const CardComp: React.FC<CardCompProps> = ({ bg = "", children, ...rest }) => {
  return (
    <Card
      style={{
        backgroundColor: bg,
        borderRadius: "25px",
        textAlign: "center",
        justifyContent: "center",
        alignItems: "center",
      }}
      {...rest}
    >
      <CardContent
        style={{
          textAlign: "center",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {children}
      </CardContent>
    </Card>
  );
};

export default CardComp;
