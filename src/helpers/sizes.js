//Extra small devices media query
// @media (max-width: 599px)

// Small devices (landscape phone) media quiery
// @media (max-width: 767.98px) {}

//Medium devices (tablet) media quiry
// @media (max-width: 991.98px) {}

//Large devices (desktop) media quiry
// @media (max-width: 1199.98px) {}


// export default an object with methods up and down which returns the sizes

const sizes = {
    up() {

    },
    down(size) {
        const sizes = {
            xs: "37.4969em",
            sm: "60em",
            md: "79.9969em",
            lg: "119.9969em"
        }

        return `@media (max-width: ${sizes[size]})`
    }
}

export default sizes