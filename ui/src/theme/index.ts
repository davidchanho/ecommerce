export const colors = {
    primary: "#3e83d5",
    primaryHover: "#3e81ee",
    secondary: "#eee",
    danger: "#cc132a",
    success: "#82c43b",
    gray: "#ccc",
    white: "#fff",
    black: "#000",
    lightGray: "#eee",
    inherit: "inherit",
};

export const borders = {
    rounded: "0.2rem",
};

export const blue = {
    "100": "hsl(240, 38%, 20%)",
    "200": "hsla(240, 52%, 29%, 0.0991)",
    "300": "hsl(240, 19%, 60%)",
    "400": "hsl(240, 18%, 77%)",
};

export const white = {
    "100": "hsl(0, 100%, 100%)",
};

export const black = {
    "100": "hsl(0, 100%, 0%)",
};

export const purple = {
    "100": "hsl(228, 45%, 44%)",
};

export const breakpoints = {
    mobile: "25rem", // 375 px
    tablet: "51.2rem", // 768 px
    desktop: "96rem", // 1440 px
};

export const theme = {
    colors: {
        white: white["100"],
        black: black["100"],
        primary: blue["100"],
        secondary: blue["400"],
        muted: blue["300"],
        shadow: blue["200"],
        link: purple["100"],
    },
    borders,
    breakpoints,
};
