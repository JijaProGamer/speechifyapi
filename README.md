Module based on puppeteer to get free quality text to speech from azure

```javascript
/**
 * Creates a puppeteer-stream browser.
 *
 * @example
 * azureTTS.createBrowser()
 *
 * @example
 * azureTTS.createBrowser({headless: false})
 *
 *
 * @return a pupppeteeer-stream browser
 */


/**
 * Converts text to speach.
 * browser should be a puppeteer browser or a
 * ibmTTS.createBrowser browser
 *
 * @example
 * azureTTS.get(browser, {
 *  text: "Hello, world!",
 *  output: "./test.ogg" // Should be a path or a stream (The audio stream may need to be reprocessed after being saved)
 *  voice: "jacob" // Voice (Get it from azure.microsoft.com/en-us/services/cognitive-services/text-to-speech)
 *  language: "English (United States)" // Language index (Get it from azure.microsoft.com/en-us/services/cognitive-services/text-to-speech)
 * })
 *
 */
```