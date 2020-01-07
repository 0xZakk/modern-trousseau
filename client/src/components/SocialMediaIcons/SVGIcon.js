
import React from "react";
const getViewBox = name => {
    switch (name) {

        case "instagram":
            return "0 0 14 14";

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
                    d="M11.4331 0H2.56661C1.15139 0 0 1.15139 0 2.56661V11.4331C0 12.8483 1.15139 14 2.56661 14H11.4331C12.8483 14 14 12.8486 14 11.4331V2.56661C14 1.15139 12.8486 0 11.4331 0ZM6.99984 11.6087C4.45875 11.6087 2.39128 9.54125 2.39128 6.99983C2.39128 4.45875 4.45875 2.39128 6.99984 2.39128C9.54125 2.39128 11.6087 4.45875 11.6087 6.99983C11.6087 9.54092 9.54092 11.6087 6.99984 11.6087ZM11.7569 3.34414C11.1553 3.34414 10.6661 2.85495 10.6661 2.25373C10.6661 1.65252 11.1553 1.16332 11.7569 1.16332C12.3581 1.16332 12.8473 1.65252 12.8473 2.25373C12.8473 2.85495 12.3581 3.34414 11.7569 3.34414Z"
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
