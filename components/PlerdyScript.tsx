'use client';

import { useEffect } from 'react';

const PlerdyScript = () => {
  useEffect(() => {
    // Main Plerdy script
    const mainScript = document.createElement('script');
    mainScript.type = 'text/javascript';
    mainScript.defer = true;
    mainScript.dataset.plerdy_code = '1';

    mainScript.innerHTML = `
      var _protocol = document.location.protocol === "https:" ? "https://" : "http://";
      _site_hash_code = "836ebce148d97995baf59010921a99ba", _suid = 55358;
      var plerdyScript = document.createElement("script");
      plerdyScript.setAttribute("defer", "");
      plerdyScript.dataset.plerdymainscript = "plerdymainscript";
      plerdyScript.src = "https://a.plerdy.com/public/js/click/main.js?v=" + Math.random();
      var plerdymainscript = document.querySelector("[data-plerdymainscript='plerdymainscript']");
      if (plerdymainscript) {
        plerdymainscript.parentNode.removeChild(plerdymainscript);
      }
      try {
        document.head.appendChild(plerdyScript);
      } catch (t) {
        console.log(t, "unable to add script tag");
      }
    `;

    document.head.appendChild(mainScript);

    // A/B testing inline script
    const abTestingInlineScript = document.createElement('script');
    abTestingInlineScript.type = 'text/javascript';
    abTestingInlineScript.innerHTML = 'var _suid = 55358;';
    document.head.appendChild(abTestingInlineScript);

    // A/B testing external script
    const abTestingExternalScript = document.createElement('script');
    abTestingExternalScript.src = 'https://a.plerdy.com/public/js/click/plerdy_ab-min.js?v=cbe3416';
    abTestingExternalScript.async = true;
    document.head.appendChild(abTestingExternalScript);

    // Cleanup: remove scripts when the component unmounts
    return () => {
      if (mainScript.parentNode) {
        mainScript.parentNode.removeChild(mainScript);
      }
      if (abTestingInlineScript.parentNode) {
        abTestingInlineScript.parentNode.removeChild(abTestingInlineScript);
      }
      if (abTestingExternalScript.parentNode) {
        abTestingExternalScript.parentNode.removeChild(abTestingExternalScript);
      }
    };
  }, []);

  return null; // No UI rendered for this component
};

export default PlerdyScript;
