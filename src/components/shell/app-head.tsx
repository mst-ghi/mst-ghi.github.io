import Script from 'next/script';
import { AppData } from '@/data';
import { personJsonLd, websiteJsonLd } from '@/utils/jsonld';

const AppHead = () => {
  return (
    <head>
      <title>Mostafa Gholami (mst-ghi)</title>
      <meta charSet='utf-8' />
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <meta name='theme-color' content='#0a0b0d' />
      {/* Set theme before paint to avoid flash of incorrect theme */}
      <script
        // biome-ignore lint/security/noDangerouslySetInnerHtml: inline theme bootstrap
        dangerouslySetInnerHTML={{
          __html: `(function(){try{var t=localStorage.getItem('theme');if(t!=='light'&&t!=='dark'){t='dark';}document.documentElement.setAttribute('data-theme',t);}catch(e){document.documentElement.setAttribute('data-theme','dark');}})();`,
        }}
      />
      <meta name='author' content={AppData.name} />
      <meta name='description' content={AppData.description} />
      <meta property='og:type' content='website' />
      <meta property='og:title' content={AppData.name} />
      <meta property='og:determiner' content={AppData.name} />
      <meta property='og:url' content='https://mst-ghi.github.io/' />
      <meta property='og:image' content='https://mst-ghi.github.io/preview.png' />
      <meta property='og:image:secure_url' content='https://mst-ghi.github.io/preview.png' />
      <meta property='og:image:alt' content={AppData.name} />
      <meta property='og:description' content={AppData.description} />
      <meta name='twitter:title' content={AppData.name} />
      <meta name='twitter:url' content='https://mst-ghi.github.io/' />
      <meta name='twitter:image' content='https://mst-ghi.github.io/preview.png' />
      <meta name='twitter:description' content={AppData.description} />
      <link rel='icon' href='/logo-circle.png' type='image/x-png' />
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
      {/* JSON-LD for WebSite */}
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
      />
      <Script src='/js/google-tags.js' />
      <Script src='/js/welcome.js' />
    </head>
  );
};

export default AppHead;
