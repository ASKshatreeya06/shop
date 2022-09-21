import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <>
         <footer>
        <div>
            <img src="./Logo.png" alt=""/>
        </div>
        <div className="footer1">
            <ul>
                <li><a href="/">Products</a></li>
                <li><a href="/">Assets</a> </li>
                <li><a href="/">Pricing</a> </li>
                <li><a href="/">Renting</a> </li>
            </ul>
        </div>

        <div className="footer1">
            <ul>
                <li> <a href="/">Support</a></li>
                <li> <a href="/">Help</a></li>
                <li> <a href="/">About</a></li>
                <li> <a href="/">Report</a></li>
            </ul>
        </div>
        <div className="footer1">
            <ul>
                <li> <a href="/">&copy;Act Gallary</a></li>
                <li> <a href="/">2022</a> </li>
                <li> <a href="/">T&C</a></li>
                <li> <a href="/">Agreement</a></li>
            </ul>
        </div>
        <div className="footer1">
            <ul>
                <li> <a href="/"></a>Follow us on:</li>
                <li> <a href="/">Facebook</a></li>
                <li> <a href="/">Instagram</a></li>
                <li> <a href="/">Twitter</a></li>
            </ul>
        </div>


    </footer>
    </>
  )
}

export default Footer
