import "./header.css"

const Header = () => {
    return (
        <div className="header">
            <div className="headerContainer">
                <div className="headerList">
                    <div className="headerListItem active">
                        <span>Gym</span>
                    </div>
                    <div className="headerListItem">
                        <span>Parking Lot</span>
                    </div>
                    <div className="headerListItem">
                        <span>Classroom</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header