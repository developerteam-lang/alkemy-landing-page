import "./Header.css";
function Header({
  logoSrc="/logo.png",
  logoAlt = "Logo",
  onCallBack,
  onDownload,
}){
    return(
      <>
        <header className="site-header">
      <div className="site-header__inner">
        <a href="https://www.alkemyedtech.com" className="site-header__logo" aria-label="Home">
          {logoSrc ? (
            <>
            <img src={logoSrc} alt={logoAlt} />
            <h1 >Alkemy Edtech</h1>
            </>
          ) : (
            <span className="site-header__logo-placeholder">Your logo</span>
          )}
        </a>

        <div className="site-header__actions">
          <button
            type="button"
            className="site-header__btn"
            onClick={() => {
                if (onCallBack) {
                  onCallBack();
                } else {
                  window.location.href =
                    "https://www.alkemyedtech.com/enroll";
                }
              }}
          >
            Get a Call Back
          </button>
          <button
            type="button"
            className="site-header__btn"
            onClick={() => {
                if (onDownload) {
                  onDownload();
                } else {
                  window.location.href =
                    "https://www.alkemyedtech.com/courses";
                }
              }}
          >
            Download Brochure
          </button>
        </div>
      </div>
    </header>
    <div><hr/></div>
    </>
    )
}


export default Header;