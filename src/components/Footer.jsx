import React from 'react'
import styles from '../styles/components/footer.scss';
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <section className={styles.footer}>
      <article>
        <h5>Attributing Vitaly Gorbachev at <a  href="https://www.flaticon.com/free-icons/strawberry">Flaticon</a> for the beautiful strawberry!</h5>
      </article>
    </section>
  )
}
