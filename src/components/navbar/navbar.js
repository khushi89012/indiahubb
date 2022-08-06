import './navbar.css';


// Navbar started here 

export const Navbar = () => {
  return (
    <nav>

      <div className="Logo">
        {/* Logo */}
        <a href="https://public.tableau.com/s/">
          <img src="data:image/png;base64,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" alt="IndiaHub Logo" width="125px" height="22px" />
        </a>
      </div>

      <div className="left-div">
        <div className="list-group">
          {/* navbar items */}
          <ul>
            <li><a class="active" href="#home">DISCOVER</a></li>
            <li><a href="#news">BLOG</a></li>
            <li><a href="#contact">RESOURCES</a></li>
            <li><a href="#about">ABOUT</a></li>
          </ul>
        </div>

        <div className="btn-group">
          <button className="button-sign" style={{ 'backgroundColor': "rgb(255,109,2)", "border": "none" }}>SIGN UP</button>
          <button className="button-sign">SIGN IN</button>
        </div>

        <div
          style={{
            color: "white",
            rotate: "90deg",
            marginRight: "10px",

          }}
        >
          {/* search icon */}

          <button type="submit"><a href="https://public.tableau.com/app/search/all"><i class="fa fa-search"></i></a></button>
          {/* <a href="https://public.tableau.com/app/search/all"><img src="https://img.icons8.com/doodle/2x/search.png" width="34px" height="36px" /></a> */}
        </div>
      </div>


    </nav>
  );
}


// Language: javascript

