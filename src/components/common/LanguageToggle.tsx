'use client';

import { useI18n } from '@/i18n';

const LanguageToggle = () => {
  const { locale, setLocale, t } = useI18n();

  return (
    <div className='lang-switch'>
      <button
        type='button'
        className={`lang-switch__btn ${locale === 'en' ? 'is-active' : ''}`}
        onClick={() => setLocale('en')}
        aria-label={t.lang.switchToEn}
        aria-pressed={locale === 'en'}
        lang='en'
      >
        {t.lang.en}
      </button>
      <button
        type='button'
        className={`lang-switch__btn ${locale === 'fa' ? 'is-active' : ''}`}
        onClick={() => setLocale('fa')}
        aria-label={t.lang.switchToFa}
        aria-pressed={locale === 'fa'}
        lang='fa'
      >
        {t.lang.fa}
      </button>
    </div>
  );
};

export default LanguageToggle;
