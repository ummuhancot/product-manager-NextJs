import React from "react";
import styles from "./PageHeader.module.scss";

export const PageHeader = ({ title }) => {
  return (
    <h1 className={styles.pageHeader}>
      <span>{title}</span>
    </h1>
  );
};
