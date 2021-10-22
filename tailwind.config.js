module.exports = {
    purge: [
        "./index.html",
    ],
    darkMode: false, // or 'media' or 'class'
    theme: {
        minHeight: {
        '0': '0',
        '1/4': '25%',
        '1/2': '50%',
        '3/4': '75%',
        'full': '100%',
        "300px": "300px",
        },
        extend: {
        backgroundImage: {
            "spider" : "url('/res/img/hero.jpg')",
            "drill" : "url('/res/img/drill1.jpg')",
            "wheel" : "url('/res/img/wheel.jpg')",
            "quotes" : "url('/res/img/quotes.svg')",
        },
        fontFamily: {
            "poppins": ["'Poppins'", "sans-serif"],
            "opensans": ["'open sans'", "sans-serif"],
            "quicksand": ["'Quicksand'", "sans-serif"],
            "cookie": ["'Cookie'", "cursive"],
        },
        spacing: {
            "250px": "250px",
            "yt-w": "420px",
            "yt-h": "236px",
            "512px": "512px",
        }
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}
