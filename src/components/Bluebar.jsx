import digital from '../assets/buy-comics-digital-comics.png';
import merch from '../assets/buy-comics-merchandise.png';
import subs from '../assets/buy-comics-subscriptions.png';
import locator from '../assets/buy-comics-shop-locator.png';
import visa from '../assets/buy-dc-power-visa.svg';


export default function Bluebar() {
    const blueBarItems = [
        { img: digital, label: "DIGITAL COMICS" },
        { img: merch, label: "DC MERCHANDISE" },
        { img: subs, label: "SUBSCRIPTION" },
        { img: locator, label: "COMIC SHOP LOCATOR" },
        { img: visa, label: "DC POWER VISA" }
    ];

    return (
    <div className="blue-bar">
      <div className="blue-bar-container">
        {blueBarItems.map(item => (
          <div className="blue-item" key={item.label}>
            <img src={item.img} alt={item.label} />
            <span>{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
