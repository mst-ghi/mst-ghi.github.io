/** Runs before paint so lang/dir match the cookie on first render. */
export const langBootScript = `(function(){try{var m=document.cookie.match(/(?:^|; )lang=([^;]*)/);var lang=m?decodeURIComponent(m[1]):'en';if(lang!=='fa'&&lang!=='en')lang='en';var r=document.documentElement;r.lang=lang;r.dir=lang==='fa'?'rtl':'ltr';r.setAttribute('data-lang',lang);}catch(e){}})();`;
