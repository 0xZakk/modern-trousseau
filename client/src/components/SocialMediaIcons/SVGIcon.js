
import React from "react";
const getViewBox = name => {
    switch (name) {

        case "instagram":
            return "0 0 20 19";

        case "facebook":
            return "0 0 20 19";

        case "pinterest":
            return "0 0 20 19";

        default:
            return "0 0 20 19";
    }
};
const getPath = (name, props) => {
    switch (name) {

        case "instagram":
            return (
                <path
                    {...props}
                    d="M12.8374 5.62549H7.16259C6.25682 5.62549 5.5199 6.31357 5.5199 7.1593V12.4579C5.5199 13.3037 6.25682 13.9919 7.16259 13.9919H12.8374C13.7431 13.9919 14.4803 13.3039 14.4803 12.4579V7.1593C14.4803 6.31357 13.7433 5.62549 12.8374 5.62549ZM9.99997 12.5629C8.37361 12.5629 7.05038 11.3274 7.05038 9.80862C7.05038 8.29005 8.37361 7.05453 9.99997 7.05453C11.6265 7.05453 12.9498 8.29005 12.9498 9.80862C12.9498 11.3272 11.6263 12.5629 9.99997 12.5629ZM13.0446 7.62396C12.6596 7.62396 12.3465 7.33162 12.3465 6.97233C12.3465 6.61304 12.6596 6.3207 13.0446 6.3207C13.4294 6.3207 13.7425 6.61304 13.7425 6.97233C13.7425 7.33162 13.4294 7.62396 13.0446 7.62396 
                    M10 8.21838C9.06114 8.21838 8.29663 8.93183 8.29663 9.80848C8.29663 
                    10.6855 9.06114 11.3992 10 11.3992C10.9393 11.3992 11.7032 10.6855 11.7032 
                    9.80848C11.7032 8.93203 10.9391 8.21838 10 8.21838 M9.99998 0.895386C4.74244 
                    0.895386 0.47998 4.87542 0.47998 9.78461C0.47998 14.6938 4.74244 18.6738 9.99998 
                    18.6738C15.2575 18.6738 19.52 14.6938 19.52 9.78461C19.52 4.87542 15.2575 0.895386 
                    9.99998 0.895386ZM15.7265 12.458C15.7265 13.9457 14.4307 15.1557 12.8374 15.1557H7.16259C5.56952 
                    15.1557 4.27343 13.9457 4.27343 12.458V7.15918C4.27343 5.67167 5.56952 4.46145 7.16259 
                    4.46145H12.8374C14.4307 4.46145 15.7265 5.67167 15.7265 7.15918V12.458Z"/>
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
