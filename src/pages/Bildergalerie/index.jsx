import React, { useRef, useCallback } from "react";

import textPath from "./text.md";
import useMD from "../../hooks/useMD";
import Markdown from "../../components/Markdown";
import Icon from "../../components/Icon";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import src1 from "./slides/verlobung_0020.jpg";
import src2 from "./slides/verlobung_0068.jpg";
import src3 from "./slides/verlobung_0050.jpg";
import src4 from "./slides/verlobung_0102.jpg";
import src5 from "./slides/verlobung_0107.jpg";
import src6 from "./slides/verlobung_0019.jpg";
import src7 from "./slides/verlobung_0008.jpg";

const Bildergalerie = () => {
  const text = useMD(textPath);

  const sliderRef = useRef(null);

  const handleNextSlide = useCallback(() => {
    if (sliderRef.current === null) {
      return;
    }

    sliderRef.current.slickNext();
  }, [sliderRef]);

  const handlePrevSlide = useCallback(() => {
    if (sliderRef.current === null) {
      return;
    }

    sliderRef.current.slickPrev();
  }, [sliderRef]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };
  return (
    <>
      <Markdown children={text} />
      <div className="my-8 relative ">
        <div className="flex text-white justify-between absolute z-20 w-full top-[calc(50%-24px)]">
          <button className="m-2 p-1" type="button" onClick={handlePrevSlide}>
            <Icon>chevron_left</Icon>
          </button>
          <button className="m-2 p-1" type="button" onClick={handleNextSlide}>
            <Icon>chevron_right</Icon>
          </button>
        </div>
        <Slider {...settings} ref={sliderRef}>
          <img src={src1} alt="Meli und Silas" />
          <img src={src2} alt="Meli und Silas" />
          <img src={src3} alt="Meli und Silas" />
          <img src={src4} alt="Meli und Silas" />
          <img src={src5} alt="Meli und Silas" />
          <img src={src6} alt="Meli und Silas" />
          <img src={src7} alt="Meli und Silas" />
        </Slider>
      </div>
    </>
  );
};

export default Bildergalerie;
