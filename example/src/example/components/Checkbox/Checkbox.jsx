import React from "react";
import styles from "./Checkbox.module.scss";

const Checkbox = ({ label, checked, onChange, disabled = false }) => {
  return (
    <label className={styles.checkbox}>
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        disabled={disabled}
      />
      {label}
    </label>
  );
};

export default Checkbox;
