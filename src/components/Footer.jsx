import dcLogoBg from '../assets/dc-logo-bg.png'
import facebook from '../assets/footer-facebook.png'
import twitter from '../assets/footer-twitter.png'
import youtube from '../assets/footer-youtube.png'
import pinterest from '../assets/footer-pinterest.png'
import periscope from '../assets/footer-periscope.png'
import Bluebar from './Bluebar'

export default function Footer() {
  return (
    <>
      {/* BLUE BAR */}
      <Bluebar />

      <footer className="dc-footer">

        {/* CONTENITORE SUPERIORE */}
        <div className="footer-container">
          <div className="footer-top">

            {/* COLONNE */}
            <div className="footer-links">
              <div>
                <h3>DC COMICS</h3>
                <ul>
                  <li>Characters</li>
                  <li>Comics</li>
                  <li>Movies</li>
                  <li>TV</li>
                  <li>Games</li>
                  <li>Videos</li>
                  <li>News</li>
                </ul>

                <h3>SHOP</h3>
                <ul>
                  <li>Shop DC</li>
                  <li>Shop DC Collectibles</li>
                </ul>
              </div>

              <div>
                <h3>DC</h3>
                <ul>
                  <li>Terms Of Use</li>
                  <li>Privacy Policy</li>
                  <li>Ad Choices</li>
                  <li>Advertising</li>
                  <li>Jobs</li>
                  <li>Subscriptions</li>
                  <li>Talent Workshops</li>
                  <li>CPSC Certificates</li>
                  <li>Ratings</li>
                  <li>Shop Help</li>
                  <li>Contact Us</li>
                </ul>
              </div>

              <div>
                <h3>SITES</h3>
                <ul>
                  <li>DC</li>
                  <li>MAD Magazine</li>
                  <li>DC Kids</li>
                  <li>DC Universe</li>
                  <li>DC Power Visa</li>
                </ul>
              </div>
            </div>

            {/* LOGO A DESTRA */}
            <img src={dcLogoBg} className="footer-logo" alt="DC Logo" />

          </div>
        </div>

        {/* BARRA INFERIORE */}
        <div className="footer-bottom">
          <div className="footer-bottom-inner">

            <button className="sign-up">SIGN-UP NOW!</button>

            <div className="social">
              <span>FOLLOW US</span>
              <img src={facebook} alt="Facebook" />
              <img src={twitter} alt="Twitter" />
              <img src={youtube} alt="YouTube" />
              <img src={pinterest} alt="Pinterest" />
              <img src={periscope} alt="Periscope" />
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
