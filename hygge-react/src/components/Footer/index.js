import React from "react";
import { Link } from "react-router-dom";
import cn from "classnames";
import styles from "./Footer.module.sass";
import SocialLinks from "../SocialLinks";
import Theme from "../Theme";
import Image from "../Image";

const nav = [
  {
    category: "Kategoriler",
    menu: [
      {
        url: "/category",
        title: "Satışta olan",
      },
      {
        url: "/category",
        title: "Öne çıkan",
      },
      {
        url: "/category",
        title: "Maskeler",
      },
      {
        url: "/category",
        title: "Göz Kremi",
      },
      {
        url: "/category",
        title: "Nemlendiriciler",
      },
      {
        url: "/category",
        title: "Tedaviler",
      },
      {
        url: "/category",
        title: "Gece Kremi",
      },
      {
        url: "/category",
        title: "Güneş Kremi",
      },
    ],
  },
  {
    category: "Yasal",
    menu: [
      {
        url: "/legal-page",
        title: "Kullanım Şartları",
      },
      {
        url: "/legal-page",
        title: "Gizlilik Politikası",
      },
      {
        url: "/legal-page",
        title: "İade Politikası",
      },
      {
        url: "/legal-page",
        title: "Nakliye",
      },
      {
        url: "/legal-page",
        title: "Veri koruması",
      },
    ],
  },
  {
    category: "Şirket",
    menu: [
      {
        url: "/about",
        title: "Hakkımızda",
      },
      {
        url: "/faq",
        title: "Faq",
      },
      {
        url: "/contacts",
        title: "İletişim",
      },
      {
        url: "/careers-page",
        title: "Kariyer",
      },
      {
        url: "/",
        title: "Vizyon",
      },
      {
        url: "/",
        title: "Kültür",
      },
    ],
  },
];

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={cn("center", styles.center)}>
        <div className={styles.row}>
          <div className={styles.col}>
            <Link className={styles.logo} to="/">
              <Image className={styles.logo_desktop} src="/images/logo.svg" srcDark="/images/logo-white.svg" />
              <Image className={styles.logo_mobile} src="/images/logo-mobile.svg" srcDark="/images/logo-mobile-white.svg" />
            </Link>

            <div className={styles.copyright}>© 2020 - All rights reserved</div>
            <SocialLinks position={"footer"} />

            <Theme />
          </div>

          {nav.map((x, i) => (
            <div className={styles.col} key={i}>
              <div className={styles.category}>{x.category}</div>
              <div className={styles.menu}>
                {x.menu.map((s, a) => (
                  <Link className={styles.link} to={s.url} key={a}>
                    {s.title}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
