
import React from "react";
const getViewBox = name => {
    switch (name) {

        case "instagram":
            return "0 0 14 14";

        case "facebook":
            return "0 0 20 19";

        case "pinterest":
            return "0 0 20 19";

        default:
            return "0 0 32 32";
    }
};
const getPath = (name, props) => {
    switch (name) {

        case "instagram":
            return (
                <path
                    {...props}
                    d="M11.4331 0H2.56661C1.15139 0 0 1.15139 0 2.56661V11.4331C0 12.8483 1.15139 14 2.56661 14H11.4331C12.8483 14 14 12.8486 14 11.4331V2.56661C14 1.15139 12.8486 0 11.4331 0ZM6.99984 11.6087C4.45875 11.6087 2.39128 9.54125 2.39128 6.99983C2.39128 4.45875 4.45875 2.39128 6.99984 2.39128C9.54125 2.39128 11.6087 4.45875 11.6087 6.99983C11.6087 9.54092 9.54092 11.6087 6.99984 11.6087 M11.7569 3.34414C11.1553 3.34414 10.6661 2.85495 10.6661 2.25373C10.6661 1.65252 11.1553 1.16332 11.7569 1.16332C12.3581 1.16332 12.8473 1.65252 12.8473 2.25373C12.8473 2.85495 12.3581 3.34414 11.7569 3.34414Z"
                />
            );

        case "facebook":
            return (
                <path
                    //fill-rule="evenodd"
                    {...props}
                    d="M9.52 18.6738C14.7778 18.6738 19.04 14.694 19.04 9.78461C19.04 4.87523 14.7778 0.895386 9.52 0.895386C4.26225 0.895386 0 4.87523 0 9.78461C0 14.694 4.26225 18.6738 9.52 18.6738 M11.9133 10.1326H10.2146V15.9436H7.64091V10.1326H6.41684V8.09042H7.64091V6.76888C7.64091 5.82383 8.12167 4.34399 10.2375 4.34399L12.144 4.35144V6.33375H10.7607C10.5338 6.33375 10.2148 6.4396 10.2148 6.89042V8.09232H12.1382L11.9133 10.1326Z"
                />
            );

        case "pinterest":
            return (
                <path
                    {...props}
                    d="M10.48 18.6738C15.7377 18.6738 20 14.694 20 9.78461C20 4.87523 15.7377 0.895386 10.48 0.895386C5.22224 0.895386 0.959991 4.87523 0.959991 9.78461C0.959991 14.694 5.22224 18.6738 10.48 18.6738 M11.2484 12.7988C10.5287 12.7468 10.2263 12.4136 9.66185 12.0936C9.35163 13.6134 8.97251 15.0702 7.84959 15.8313C7.50255 13.5343 8.35836 11.8091 8.7558 9.97778C8.07835 8.91296 8.83726 6.76969 10.2662 7.29782C12.0248 7.94717 8.74359 11.2572 10.9463 11.6706C13.246 12.1022 14.1848 7.94479 12.7586 6.59253C10.6981 4.6402 6.76077 6.54816 7.24494 9.34301C7.36288 10.0263 8.11908 10.2337 7.54701 11.1765C6.22825 10.9038 5.83487 9.93262 5.88545 8.63788C5.96707 6.51853 7.92494 5.03459 9.88874 4.82924C12.3723 4.56968 14.7034 5.68078 15.0251 7.86208C15.3871 10.324 13.9039 12.9902 11.2484 12.7988Z"
                />
            );


        default:
            return <path />;
    }
};
const SVGIcon = ({
    name = "",
    style = {},
    fill = "#764437",
    viewBox = "",
    width = "19",
    className = "",
    height = "19",
    fillOpacity = "0.95"
}) => (
        <svg
            width={width}
            style={style}
            height={height}
            className={className}
            xmlns="http://www.w3.org/2000/svg"
            viewBox={viewBox || getViewBox(name)}
            xmlnsXlink="http://www.w3.org/1999/xlink"
        >
            {getPath(name, { fill })}
        </svg>
    );


export default SVGIcon











// import React from 'react';
// import "./SocialMediaIcons.css"


// // This is a functional component - just sent up a little differently as an arrow function!
// const Button = (props) => {
//     let classList = "button"

//     let type = ['fb', 'ig', 'p']
//     if (type.includes(props.type)) {
//         classList += ` button-${props.type}`
//     }

//     return <button className={classList}></button>

// }

// export default Button;
