import React, { useContext } from 'react'
import './Navbar.css'
import logo from '../../assets/logo_main.png'
import { CoinContext } from '../../context/CoinContext'
// import arrow_icon from '../../assets/arrow_icon.png'

const Navbar = () => {

  const {setCurrency} = useContext(CoinContext);
  const currencyHandler = (e)=>{
    switch (e.target.value){
      case "usd": {
        setCurrency({name: "usd", symbol: "$"});
        break;
      }
      case "eur": {
        setCurrency({name: "eur", symbol: "€"});
        break;
      }
      case "bdt": {
        setCurrency({name: "bdt", symbol: "৳"});
        break;
      }
      default: {
        setCurrency({name: "usd", symbol: "$"});
        break;
      }
    }
  }
  return (
    <div className='navbar'>
        <img className='logo' src={logo} alt=''/>
        <ul>
            <li>Home</li>
            <li>Feature</li>
            <li>Pricing</li>
            <li>Blog</li>
        </ul>
        <div className='nav-right'>
            <select onChange={currencyHandler}>
                <option value="usd">USD</option>
                <option value="eur">EUR</option>
                <option value="bdt">BDT</option>
            </select>
            <button>Sign Up</button>

        </div>
    </div>
  )
}

export default Navbar