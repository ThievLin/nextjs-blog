"use client";

import dynamic from 'next/dynamic';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css"; 

// Dynamically import the Slider component to disable SSR
const Slider = dynamic(() => import('react-slick'), { ssr: false });

const SliderComponent = () => {

  // Slider settings with autoplay enabled
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    centerMode: true,
    arrows: true,
    autoplay: true,  // Enable autoplay
    autoplaySpeed: 3000, // Slide transition speed (in milliseconds)
    prevArrow: (
      <button className="prev-arrow">
        <span className="prev-icon">{"<"}</span>
      </button>
    ),
    nextArrow: (
      <button className="next-arrow">
        <span className="next-icon">{">"}</span>
      </button>
    ),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true,
        },
      },
    ],
  };

  // Items for the carousel
  const items = [
    { src: 'https://dgc.gov.kh/_next/image?url=%2Fstatic%2Fimages%2Fprojects%2Fverify.png&w=1920&q=75', alt: 'Verify' },
    { src: 'https://dgc.gov.kh/_next/image?url=%2Fstatic%2Fimages%2Fprojects%2Fstopcovid.png&w=1920&q=75', alt: 'StopCovid' },
    { src: 'https://dgc.gov.kh/_next/image?url=%2Fstatic%2Fimages%2Fprojects%2Fvaccine.png&w=1920&q=75', alt: 'Vaccine' },
    { src: 'https://dgc.gov.kh/_next/image?url=%2Fstatic%2Fimages%2Fprojects%2Fflow.png&w=1920&q=75', alt: 'Flow' },
    { src: 'https://dgc.gov.kh/_next/image?url=%2Fstatic%2Fimages%2Fprojects%2Fsarika.png&w=1920&q=75', alt: 'Sarika' },
    { src: 'https://dgc.gov.kh/_next/image?url=%2Fstatic%2Fimages%2Fprojects%2Fdns.png&w=1920&q=75', alt: 'DNS' },
    { src: 'https://dgc.gov.kh/_next/image?url=%2Fstatic%2Fimages%2Fprojects%2Fform.png&w=1920&q=75', alt: 'Form' },
    { src: 'https://dgc.gov.kh/_next/image?url=%2Fstatic%2Fimages%2Fprojects%2Ffastype.png&w=1920&q=75', alt: 'Fastype' },
  ];

  return (
    <div className="noto-serif-khmer carousel-container mx-auto max-w-full px-4 py-16 bg-slate-100">
      <h2 className="text-center text-3xl font-extrabold mb-16 text-blue-800 mt-14">គម្រោងយើងមាន</h2>
      <Slider {...settings}>
        {items.map((item, index) => (
          <div key={index} className="carousel-item px-2">
            <img
              src={item.src}
              alt={item.alt}
              className="slider-image w-full h-[150px] object-contain rounded-lg"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SliderComponent;
