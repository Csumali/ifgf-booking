import "./footer.css"

const Footer = () => {
    return (
        <div className="footer">
            <div className="location">
                <img className="img" alt="Location on" src={require("../../images/location.png")} />
                <p className="international-full">
                    International Full Gospel Fellowship Seattle
                    <br />
                    12345 8th Ave NE
                    <br />
                    Seattle, WA 98125
                </p>
            </div>
            <div className="contact">
                <div className="location"> 
                    <img className="img" alt="Email" src={require("../../images/email.png")} />
                    <div className="text-wrapper-3">office@ifgfseattle.org</div>
                </div>
                <div className="location">
                    <img className="img" alt="Call" src={require("../../images/call2.png")} />
                    <div className="number">
                        <p className="text-wrapper-3">Phone (206) 363 – 4343</p>
                        <p className="p">Fax (206) 363 – 4343</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer