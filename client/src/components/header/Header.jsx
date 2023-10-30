import "./header.css"

const Header = () => {
    return (
        <div className="header">
            <div className="logo">
                <img className="LOGO-IFGF-KAOS" alt="Logo IFGF KAOS" src={require("../../images/ifgflogo.png")} />
                <div className="text-wrapper">Seattle</div>
            </div>
            <div className="contact-us">
                <img className="img" alt="Call" src={require("../../images/call.png")} />
                <div className="text-wrapper-2">Contact us</div>
            </div>
        </div>
    )
}

export default Header