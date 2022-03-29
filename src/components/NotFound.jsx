import React from 'react'
import {
	faBan,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from "../styles/components/not-found.module.scss"

export default function NotFound() {
  return (
    <div className={styles.notFound}>
      < FontAwesomeIcon icon={faBan} />
    </div>
  )
}
