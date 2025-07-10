import "./Footer.css";
function Footer() {
  return (
    <footer>
      <div className="footer">
        <div className="footer-logo">
          <a href="">
            <img src="/Group8626.svg" alt="" />
          </a>
          <p>
            With Mentor Token, every failure <br />
            transforms into an opportunity for <br /> growth.
          </p>
        </div>
        <div className="footer-pages">
            <h3 className="footer-title">Pages</h3>
              <a href="">Home</a>
              <a href="">Contact US</a>
        </div>
        <div className="footer-contact">
            <h3>Contact</h3>
              <a href="">info@mentortoken.com</a>
            <span>+(389)123 546 789</span>
        </div>
        <div className="follow-us">
          <h3>Follow Us</h3>
          <div className="follow-us-media">
            <a href="">
              <img src="linkedIn.svg" alt="" />
            </a>
            <a href="">
              <img src="twitter.svg" alt="" />
            </a>
            <a href="">
              <img src="facebook.png" alt="" />
            </a>
          </div>
        </div>
      </div>
      <hr />
      <br />
      <span>©2024 Mentor Token. All right reserved.</span>
    </footer>
  );
}
export default Footer;
