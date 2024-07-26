import React from "react";
import { Link } from "react-router-dom";
import cn from "classnames";
import styles from "./Products.module.sass";
import ProductItem from "../../../components/ProductItem";

import { products } from "../../../mocks/products";

function Products() {
  return (
    <div className={cn("section", styles.main)}>
      <div className={cn("center")}>
        <div className={cn("stage", styles.stage)}>- Ürünlerimiz</div>
        <h2 className={cn("title title_mb-lg", styles.title)}>Ürünlerimizi Keşfedin</h2>
        <div className={styles.list}>
          {products.map((x, i) => (
            <ProductItem className={styles.product} item={x} key={i} />
          ))}
        </div>
        <div className={styles.buttons}>
          <Link className={cn("button button-green")} to="/category">
            Hepsini Gör
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Products;
