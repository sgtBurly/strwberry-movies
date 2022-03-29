import React from "react";
import Card from "./Card";
import styles from "../styles/components/grid.module.scss";

export default function Grid({ array }){
	return (
    <section className={styles.grid}>
        {array.map((item) => (
          <Card
            background={item.background}
            title={item.title}
            type={item.type}
            id={item.id}
          />
        ))}
    </section>
	);
}
