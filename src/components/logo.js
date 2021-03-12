import React from "react"
import logo from "../images/verdelogo.png" // Tell webpack this JS file uses this image
console.log(logo) // /logo.84287d09.png
function HeaderLogo() {
  // Import result is the URL of your image
  return <img src={logo} alt="Al Eka Fishworld Logo" placeholder="blurred" width={40} height={40}  />

}
export default HeaderLogo
