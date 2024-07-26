import React, { useState, useEffect } from "react";
import cn from "classnames";
import Breadcrumbs from "../../components/Breadcrumbs";
import styles from "./Category.module.sass";
import Filters from "../../components/Filters";
import DropdownMultiple from "../../components/DropdownMultiple";
import ProductItem from "../../components/ProductItem";
import Newsletter from "../../components/Newsletter";

import { products } from "../../mocks/products";

const breadcrumbs = [
  {
    title: "Ana Sayfa",
    url: "/",
  },
  {
    title: "Navigasyon",
    url: "/category",
  },
  {
    title: "Göz Sağlığı",
  },
];

const colorOptions = ["Red", "Green", "Blue", "Black"];
const categoryOptions = ["Tedaviler", "Nemlendiriciler", "Featured"];
const priceOptions = ["$0 - $10", "$10 - $50", "$50 +"];

function Category() {
  const [color, setColor] = useState([]);
  const [category, setCategory] = useState([]);
  const [price, setPrice] = useState([]);
  const [tags, setTags] = useState([]);

  useEffect(() => {
    setTags([...color, ...category, ...price]);
  }, [color, category, price]);

  return (
    <>
      <Breadcrumbs value={breadcrumbs} />
      <div className={cn("section", styles.category)}>
        <div className={cn("center")}>
          <div className={cn("stage")}>- Göz Sağlığı Ürünleri</div>
          <h2 className={cn("title title_mb-lg")}>
          Göz Bakımı Ürünlerini  <br />
          Keşfedin
          </h2>

          <Filters tags={tags} setTags={setTags}>
            <DropdownMultiple title="Renk" value={color} setValue={setColor} options={colorOptions} />
            <DropdownMultiple title="Kategori" value={category} setValue={setCategory} options={categoryOptions} />
            <DropdownMultiple title="Fiyat Sıralama" value={price} setValue={setPrice} options={priceOptions} />
          </Filters>

          <div className={styles.list}>
            {products.map((x, i) => (
              <ProductItem className={styles.product} item={x} key={i} />
            ))}
          </div>
        </div>
      </div>
      <Newsletter />
    </>
  );
}

export default Category;
