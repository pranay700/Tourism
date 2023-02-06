import "./FooterStyles.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div>
          <marquee>
            {" "}
            <h3>Owner :- Pranay Sahare</h3>
          </marquee>
          <h1>Tours And Travels</h1>

          <p>Choose Your Favourite Destination.</p>
        </div>
        <div>
          <a href="/">
            <i className="fa-brands fa-facebook-square"></i>
          </a>
          <a href="/">
            <i className="fa-brands fa-instagram-square"></i>
          </a>
          <a href="/">
            <i className="fa-brands fa-behance-square"></i>
          </a>
          <a href="/">
            <i className="fa-brands fa-twitter-square"></i>
          </a>
        </div>
      </div>

      <div className="bottom">
        <div>
          <h4>Projects</h4>
          <a href="/">ChangeLogo</a>
          <a href="/"> Status</a>
          <a href="/"> License</a>
          <a href="/">All Versions</a>
        </div>
        <div>
          <h4>Community</h4>
          <a href="/">Git Hub</a>
          <a href="/"> Issue</a>
          <a href="/"> Project</a>
          <a href="/">Twitter</a>
        </div>
        <div>
          <h4>Support</h4>
          <a href="/">Github</a>
          <a href="/"> Issue</a>
          <a href="/"> Trouble Shooting</a>
          <a href="/">Contact us</a>
        </div>
        <div>
          <h4>Other</h4>
          <a href="/">Terms of Service</a>
          <a href="/"> Privacy of Policy</a>
          <a href="/"> License</a>
        </div>
      </div>
    </div>
  );
};
export default Footer;
