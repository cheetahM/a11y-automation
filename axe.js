const axeBuilder = require("axe-webdriverjs");
const webDriver = require("selenium-webdriver");

// create a PhantomJS WebDriver instance
const driver = new webDriver.Builder()
 .forBrowser('chrome');

const browser = driver.build();

browser.manage().timeouts().setScriptTimeout(60000);

// run the tests and output the results in the console
/*browser
 .get("https://vbox132.secure.checkout.visa.com/")
 .then(() => {
    axeBuilder(driver)
     .analyze((results) => {
        console.log("Results are: ", results);
    });
});*/
browser
  .get("https://vbox132.secure.checkout.visa.com/")
  .then(() => {
      axeBuilder(browser)
     .analyze((results) => {
        //  const foo = JSON.stringify(results);
         console.log(results.violations[0]);
    });
  });

browser
 .quit();