const captureWebsite = require('capture-website');

(async () => {
	await captureWebsite.file('https://www.google.com/maps/@36.1523034,-86.7815208,13.8z/data=!5m1!1e1', 'nashtraffic.png', { 
    launchOptions: { args: ['--no-sandbox', '--disable-setuid-sandbox']},
    element: '#scene > div.widget-scene',
    hideElements: [
      '#omnibox-singlebox',
      '#passive-assist > div > div.widget-homescreen-card',
      '#passive-assist > div > button',
      '#minimap > div > div.widget-minimap',
      '#content-container > div.app-viewcard-strip > div.app-bottom-content-anchor.fade-enabled > div.app-center-widget-holder',
      '#gb',
      '#content-container > div.app-viewcard-strip > div.app-bottom-content-anchor.fade-enabled > div.app-vertical-widget-holder.noprint',
      '#content-container > div.app-viewcard-strip > div.app-bottom-content-anchor.fade-enabled > div.app-horizontal-widget-holder.noprint',
      '#searchbox',
      'input.tactile-searchbox-input'
    ],
    modules: [
			'watermark.js',
		]
  });
})();