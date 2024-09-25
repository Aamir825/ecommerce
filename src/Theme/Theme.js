import { createTheme } from "@mui/material";

export const theme = createTheme({
    palette: {
        primary: {
            main: "#1760a5",
            light: "skyblue"
        },
        secondary: {
            main: "#15c630",
        },
        NavbarColor: {
            main: "#999"
        }
    },
    typography: {
        fontFamily: '"Poppins", sans-serif', // Apply Poppins font
    },
})