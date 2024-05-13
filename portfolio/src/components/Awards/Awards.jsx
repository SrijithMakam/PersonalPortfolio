import React from "react";
import styles from "./Awards.module.css";
import az900 from "../../../assets/history/az-900.jpeg"
import pl900 from "../../../assets/history/pl900.jpeg"
import record from "../../../assets/history/record.jpeg"
import ace from "../../../assets/history/ace.jpeg"

export const Awards = () => {
  return (
    <>
      <h2 className={styles.title} id="Awards">Certifications and Recognitions</h2>
      <div className={styles.certificationContainer}>
        <div className={styles.certificationItem}>
          <h3>Microsoft Certified: Azure Fundamentals (AZ-900)</h3>
          <p>Demonstrate foundational knowledge of cloud concepts, core Azure services, plus Azure management and governance features and tools.</p>
          <img src={az900} alt="azure certificate" className={styles.image} />
        </div>
        <div className={styles.certificationItem}>
          <h3>Microsoft Certified: Power Platform Fundamentals (PL-900)</h3>
          <p>Demonstrate the business value and product capabilities of Microsoft Power Platform, such as Power Apps, data connections with Dataverse, and Power Automate.</p>
          <img src={pl900} alt="powerplatform certificate" className={styles.image} />
        </div>
        <div className={styles.certificationItem}>
          <h3>Participated in the Guinness world records for largest photo album of diplaying digital certificate</h3>
          <img src={record} alt="powerplatform certificate" className={styles.image} />
        </div>
        <div className={styles.certificationItem}>
          <h3>Accenture Celebrates excellence award</h3>
          <img src={ace} alt="powerplatform certificate" className={styles.image} />
        </div>
      </div>
    </>
  );
};
