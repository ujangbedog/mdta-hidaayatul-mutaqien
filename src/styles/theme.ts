import { createTheme } from "@mui/material";

const theme = createTheme({
    palette: {
        primary: {
            main: "#129e00",
        },
        blue: { 
            main: "#129e00",
            light: "#17cc00", 
            dark: "#0c6600", 
        },
        basic: { 
            main: "lightgray",
            light: "#fff", 
            dark: "#000", 
        },
        orange: { main: "#a5ff99" },
        brown: { main: "#063300" },
    },
});

export default theme;
