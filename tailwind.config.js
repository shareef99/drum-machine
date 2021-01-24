module.exports = {
    purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            gridTemplateColumns: {
                threeColOf80px: "80px 80px 80px",
            },
            gridTemplateRows: {
                threeRowsOf70px: "70px 70px 70px",
            },
        },
        margin: {
            "2/10": "20%",
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
