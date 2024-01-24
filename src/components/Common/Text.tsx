import theme from "@/styles/theme";
import { Typography, TypographyProps } from "@mui/material";

type TextProps = {
  variant?: "title" | "subtitle" | "cardtitle" | "p" | "sm" | "h6";
  color?: string;
  children?: React.ReactNode;
  center?: boolean;
  justify?: boolean;
  bold?: boolean;
  doubleHeight?: boolean;
  style?: React.CSSProperties;
} & Omit<TypographyProps, 'variant'>;


const Text = ({
  variant = "h6", // Default variant is set to "h6"
  color = theme.palette.basic.dark,
  children = "",
  center = false,
  justify = false,
  bold = false,
  doubleHeight = false,
  style = {},
  ...rest
}: TextProps) => {
  let textProps: TypographyProps = {};

  switch (variant.toLowerCase()) {
    case "title":
      textProps = { variant: "h3", fontWeight: "bold", lineHeight: 1.5, mb: 4 };
      break;
    case "subtitle":
      textProps = { variant: "h4", fontWeight: "bold", my: 2 };
      break;
    case "cardtitle":
      textProps = { variant: "h5", fontWeight: "bold", my: 2 };
      break;
    case "p":
      textProps = { variant: "body1", my: 4, lineHeight: 1.25 };
      break;
    case "sm":
      textProps = { variant: "body2", my: 2, lineHeight: 1 };
      break;
    default:
      textProps = { variant: "h6", my: 4 };
  }

  return (
    <Typography
      {...textProps}
      textAlign={justify ? "justify" : center ? "center" : "start"}
      color={color}
      fontWeight={bold ? "bold" : "normal"}
      style={{ lineHeight: doubleHeight ? 2 : 1, ...style }}
      {...rest}
    >
      {children}
    </Typography>
  );
};

export default Text;
