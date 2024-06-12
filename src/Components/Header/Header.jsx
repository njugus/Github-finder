import './Header.css'
function Header() {
    return (
        <>
        <header className="main-header">
            <div className="main-heading">
                <h1>Github Finder</h1>
            </div>
            <div className="github-account">
                <a href="https://github.com/njugus" style={{color:'lightgray'}}>By Kelvin Njuguna</a>
            </div>
            <div className="input-div">
                <input type="text" placeholder="enter a username" style={{ width: '200px', height: '26px', padding: '10px'}}/>
                <button type="submit" style={{width: '80px', height : '50px', padding: '10px', borderRadius: '5px'}}>Search</button>
            </div>

        </header>
        </>
    )
}

export default Header;