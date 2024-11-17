import logo from "./assets/logo.png"

function ImageLogo() {

    return(
        <div className="logoImage">
            <img src={logo} alt="Girl in a jacket"/>
            <h1>Codeforces random problem generator</h1>
        </div>
    );
}


export default ImageLogo;
