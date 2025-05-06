import React from "react";
import styles from "./GetCatButton.module.scss";

const GetCatButton = ({ onClick, disabled }) => {
  return (
    <button 
      className={styles.button}
      onClick={onClick} 
      disabled={disabled}
    >
      Get cat
    </button>
  );
};

export default GetCatButton;
