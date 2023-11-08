import EastOutLinedIcon    from "@mui/icons-material/EastOutlined"
import WestOutLinedIcon from "@mui/icons-material/WestOutlined";
import "./Slider.scss"
import { useState } from "react";

const obj = [
  "https://img.freepik.com/free-photo/young-woman-with-shopping-bags-beautiful-dress_1303-17551.jpg?size=626&ext=jpg&ga=GA1.1.2087555089.1694867847&semt=ais",
  "https://img.freepik.com/free-photo/young-woman-beautiful-red-dress_1303-17501.jpg?w=740&t=st=1694868124~exp=1694868724~hmac=b423dd1a0dfa527a8ad1c620ab7af3963f70f18c592bca4637ffbd4986fc4720",
  "https://img.freepik.com/free-photo/young-indian-guy-with-hands-up-dancing-white-wall-isolated_1157-47469.jpg?size=626&ext=jpg&ga=GA1.2.2087555089.1694867847&semt=ais",
  "https://img.freepik.com/free-photo/man-striped-shirt-looks-confused-thoughtful_144627-69716.jpg?size=626&ext=jpg&ga=GA1.1.2087555089.1694867847&semt=ais",
];

const Slider = () => {

  const[currentSlide,setcurrentSlide]=useState(0);
  const prevSlide = () => {
    setcurrentSlide(currentSlide===0 ? 3:(prev)=>prev-1)
  };
  const nextSlide= () => {
    setcurrentSlide(currentSlide === 3 ? 0: (prev) => prev + 1);
  };
  
  return (
    <div className="slider">
      <div className="container" style={{transform:`translateX(-${currentSlide * 100 }vw)`}}>
        <img src={obj[0]} alt="photo" />
        <img src={obj[1]} alt="photo" />
        <img src={obj[2]} alt="photo" />
        <img src={obj[3]} alt="photo" />
      </div>
      <div className="icons">
        <div className="icon" onClick={prevSlide}>
          <WestOutLinedIcon />
        </div>
        <div className="icon" onClick={nextSlide}>
          <EastOutLinedIcon />
        </div>
      </div>
    </div>
  );
}

export default Slider;

