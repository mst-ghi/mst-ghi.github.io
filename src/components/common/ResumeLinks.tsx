'use client';

import { IconDownload } from '@tabler/icons-react';
import { AppData } from '@/data';
import { useI18n } from '@/i18n';

type Variant = 'split' | 'row' | 'stack';
type Size = 'sm' | 'md';

interface ResumeLinksProps {
  variant?: Variant;
  size?: Size;
  onNavigate?: () => void;
}

const ResumeLinks = ({ variant = 'row', size = 'md', onNavigate }: ResumeLinksProps) => {
  const { t } = useI18n();
  const labels = {
    en: { label: t.resume.en, aria: t.resume.enAria },
    fa: { label: t.resume.fa, aria: t.resume.faAria },
  };

  if (variant === 'split') {
    return (
      <div className='cv-split'>
        {AppData.resumes.map((cv, index) => (
          <a
            key={cv.lang}
            href={cv.href}
            download={cv.filename}
            className='cv-split__item'
            aria-label={labels[cv.lang].aria}
          >
            {index === 0 ? <IconDownload size={15} stroke={2.2} /> : null}
            {cv.shortLabel}
          </a>
        ))}
      </div>
    );
  }

  return (
    <div className={`cv-links cv-links--${variant}`}>
      {AppData.resumes.map((cv) => (
        <a
          key={cv.lang}
          href={cv.href}
          download={cv.filename}
          className={`btn ${size === 'sm' ? 'btn--sm' : ''}`.trim()}
          aria-label={labels[cv.lang].aria}
          onClick={onNavigate}
        >
          <IconDownload size={size === 'sm' ? 15 : 18} stroke={1.8} />
          {labels[cv.lang].label}
        </a>
      ))}
    </div>
  );
};

export default ResumeLinks;
