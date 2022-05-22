import { useState, useEffect, useRef } from "react";
import { useHistory } from "react-router-dom";
import { slideData } from "../../constant/slideData";
import "./SlideShow.css";
const delay = 2500;
export default function SlideShow() {
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef(null);
  const history = useHistory();
  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === slideData.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);

  return (
    <div className="slideshow">
      <div
        className="slideshowSlider"
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
      >
        {slideData.map((item, index) => (
          <div
            className="slide"
            key={index}
            onClick={() => {
              history.push(`${item?.link}`);
            }}
            style={{
              backgroundImage: `url('${item?.backgroundImg}')`,
              backgroundSize: "cover",
              backgroundPosition: "50% 50%",
              backgroundRepeat: "no-repeat",
              postion: "relative",
              cursor: "pointer",
            }}
          >
            <div className="slide-description">
              <p>{item?.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="slideshowDots">
        {slideData.map((_, idx) => (
          <div
            key={idx}
            className={`slideshowDot${index === idx ? " active" : ""}`}
            onClick={() => {
              setIndex(idx);
            }}
          ></div>
        ))}
      </div>
    </div>
  );
}
