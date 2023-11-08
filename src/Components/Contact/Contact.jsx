import GoogleIcon from "@mui/icons-material/Google";
import TwitterIcon from "@mui/icons-material/Twitter";
import PinterestIcon from "@mui/icons-material/Pinterest";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import '../Contact/Contact.scss'




const Contact = () => {
  return (
    <div className="contact">
        <div className="wrapper">
            <span>BE IN TOUCH WITH US</span>
            <div className="mail">
                <input type="text" placeholder="Enter your E-mail..." />
                <button>JOIN US</button>
            </div>
            <div className="icons">
                <FacebookIcon />
                <InstagramIcon />
                <TwitterIcon />
                <GoogleIcon />
                <PinterestIcon />
            </div>
        </div>
    </div>
  );
}
export default Contact
