const navbar = () => {
    return(
        <nav className="menu mainNav flex-row" id="mainNavbar">
        <ul className="navbar flex-row">
            <li className="" id="formLi"><h4> Todo crypto </h4></li>
            <li className="menuNav" id="wall"><a href=""><h4> Wallets</h4></a></li>
            <li className="menuNav" id="rigs"><a href=""><h4>Rigs Mineros</h4></a> </li>
            <li className="menuNav" id="gpus"><a href=""><h4>GPU's</h4></a></li>
        </ul>
    </nav>
    )
}

export default navbar