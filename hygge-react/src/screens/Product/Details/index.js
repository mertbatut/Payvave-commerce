import React from "react";
import cn from "classnames";
import styles from "./Details.module.sass";

function Details() {
  return (
    <div className={cn("section", styles.details)}>
      <div className={cn("center")}>
        <div className={styles.row}>
          <div className={styles.col}>
            <div className={cn("stage")}>- Product Features</div>
            <h1 className={cn("title")}>Explore the Features</h1>
          </div>
          <div className={styles.col}>
            <div className={styles.item}>
              <div className={styles.icon}>
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" stroke="#000" strokeWidth="2.5" strokeLinejoin="round">
                  <path
                    d="M15.993 2l7.783 8.203c1.54 1.62 2.587 3.687 3.012 5.937a12.18 12.18 0 0 1-.625 6.7c-.832 2.12-2.242 3.93-4.05 5.205S18.176 30 16 30s-4.303-.68-6.112-1.955-3.22-3.086-4.05-5.205a12.18 12.18 0 0 1-.625-6.7c.425-2.25 1.473-4.315 3.012-5.937L15.993 2z"
                    strokeLinecap="round"
                  ></path>
                </svg>
              </div>
              <div className={styles.box}>
                <div className={styles.category}>Natural</div>
                <div className={styles.text}>We are using natural ingredients only when creating our products.</div>
              </div>
            </div>
            <div className={styles.item}>
              <div className={styles.icon}>
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" stroke="#000" strokeWidth="2.5" strokeLinejoin="round">
                  <path d="M16 30s11-5.6 11-14V6.2L16 2 5 6.2V16c0 8.4 11 14 11 14z" strokeLinecap="round"></path>
                </svg>
              </div>
              <div className={styles.box}>
                <div className={styles.category}>Full Protection</div>
                <div className={styles.text}>This product provides broad spectrum SPF 50 and blue light protection.</div>
              </div>
            </div>
            <div className={styles.item}>
              <div className={styles.icon}>
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" stroke="#000" strokeWidth="2.5" strokeLinejoin="round">
                  <path d="M30 9L17.91 20.875l-6.364-6.25L2 24"></path>
                  <path d="M22 9h8v8"></path>
                </svg>
              </div>
              <div className={styles.box}>
                <div className={styles.category}>Trending</div>
                <div className={styles.text}>It is one of our most popular products that we have on offer.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Details;
