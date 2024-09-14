import React from "react";
import { useTranslations } from 'next-intl';

import { Link } from '@/i18n/routing';

import styles from "./page.module.css";

export default function HomePage() {
  const t = useTranslations('HomePage');
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>{t('title')}</h1>
        <Link href="/about">{t('about')}</Link>
      </main>
    </div>
  );
}
