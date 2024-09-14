import React from "react";
import { useTranslations } from "next-intl";
import styles from "../page.module.css";

export default function AboutPage() {
  const t = useTranslations('AboutPage');
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>{t('ourMission')}</h1>
        <p>{t('ourTeam')}</p>
        <p>{t('careers')}</p>
      </main>
    </div>
  );
}
