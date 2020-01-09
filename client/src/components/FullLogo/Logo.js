import React from 'react'
import './Logo.css'

const Logo = (props) => {
    
    let classList = 'logo-tag'

    let types = ['logo','no-tag']

    if (types.includes(props.type)) {
        classList += ` ${props.type}`
    }

return <>
<div className="logo-tag">
    <div className="logo">
        <div className="modern">Modern</div>
        <div className="trouseau">trousseau</div>
    </div>
    <div className={classList}>designed & made with love in the usa</div>
</div>
</>
}
export default Logo