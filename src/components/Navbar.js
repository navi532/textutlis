import PropTypes from 'prop-types'



export default function Navbar({ name, aboutText, darkMode, toggleMode }) {

    return (
        <>
            <nav className={`navbar navbar-expand-lg navbar-${!darkMode ? 'light' : 'dark'} bg-${!darkMode ? 'light' : 'dark'}`}>
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">{name}</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">{aboutText}</a>
                            </li>
                        </ul>
                    </div>



                    <div className="form-check form-switch">
                        <input className="form-check-input" type="checkbox" role="switch" id="mode-switch" onChange={toggleMode} />
                        <label className={`form-check-label text-${darkMode ? 'light' : 'dark'}`} htmlFor="mode-switch">Enable Dark Mode</label>
                    </div>
                </div>
            </nav>

        </>
    );

}
Navbar.propTypes = {
    name: PropTypes.string.isRequired,
    aboutText: PropTypes.string.isRequired
}

Navbar.defaultProps = {
    name: "Your Brand Name",
    aboutText: "About"
}