import React, { useEffect, useRef } from "react";
import cn from "classnames";
import $ from "jquery";
import "slick-slider";
import styles from "./Review.module.sass";

let items = [
  {
    img: "/images/content/ava-1.jpg",
    author: "Amy Smith",
    text: "Bu, bir şey sipariş ettiğim en iyi web sitesi. Kesinlikle tavsiye ederim.",
  },
  {
    img: "/images/content/ava-1.jpg",
    author: "Amy Smith",
    text: "Bu, bir şey sipariş ettiğim en iyi web sitesi. Kesinlikle tavsiye ederim.",
  },
  {
    img: "/images/content/ava-1.jpg",
    author: "Amy Smith",
    text: "Bu, bir şey sipariş ettiğim en iyi web sitesi. Kesinlikle tavsiye ederim.",
  },
];

function Review({ stage }) {
  const slider = useRef();

  const settings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    dots: true,
    speed: 600,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          adaptiveHeight: true,
        },
      },
    ],
  };

  useEffect(() => {
    const sliderReview = slider.current;
    $(sliderReview).slick(settings);
    return () => $(sliderReview).slick("unslick");
  });

  return (
    <div className={cn("section", styles.review)}>
      <div className={cn("center")}>
        <div className={styles.container}>
          <div className={styles.box}>
            <div className={cn("stage")}>{stage}</div>
            <h2 className={cn("title", styles.title)}>Müşterilerimizin Söyledikleri</h2>
          </div>
          <div className={styles.wrap}>
            <div ref={slider} className={cn("slider-review", styles.slider)}>
              {items.map((x, i) => (
                <div className={styles.item} key={i}>
                  <div className={styles.ava}>
                    <img className={styles.pic} src={x.img} alt="" />
                  </div>
                  <div className={styles.author}>{x.author}</div>
                  <div className={styles.text}>{x.text}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Review;
