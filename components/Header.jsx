import logo from "../images/chef-logo.png";

export default function Header() {
  return (
  <header>
<img src={logo} alt="Chef icon" className="header-logo" />
<div  className="header-title">
  <h1> You're The Chef </h1>
</div>
  </header>
  )
}