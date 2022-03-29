import styles from "../styles/components/paginationButton.module.scss";

// A Call to action component, which uses "path" and "content" props to render a link
const PaginationButton = ({ title, action, disabled }) => {

	return <button 
  className={styles.paginationButton}
  onClick={action}
  disabled = {disabled}
  >{title}
  </button>;
};

export default PaginationButton;
