import dcLogoBg from '../assets/dc-logo-bg.png'
import facebook from '../assets/footer-facebook.png'
import twitter from '../assets/footer-twitter.png'
import youtube from '../assets/footer-youtube.png'
import pinterest from '../assets/footer-pinterest.png'
import periscope from '../assets/footer-periscope.png'
import Bluebar from './Bluebar'
import FooterList from './FooterList'

export default function Footer() {

  const dcComics = ["Characters", "Comics", "Movies", "TV", "Games", "Videos", "News"]
  const shop = ["Shop DC", "Shop DC Collectibles"]
  const dc = ["Terms Of Use", "Privacy Policy", "Ad Choices", "Advertising", "Jobs", "Subscriptions", "Talent Workshops", "CPSC Certificates", "Ratings", "Shop Help", "Contact Us"]
  const sites = ["DC", "MAD Magazine", "DC Kids", "DC Universe", "DC Power Visa"]

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
                <FooterList
                  title={"DC COMICS"}
                  items={dcComics}
                />
                <FooterList
                  title={"SHOP"}
                  items={shop}
                />
              </div>

              <div>
                <FooterList
                  title={"DC"}
                  items={dc}
                />
              </div>

              <div>
                <FooterList
                  title={"SITE"}
                  items={sites}
                />
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
