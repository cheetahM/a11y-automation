const axeBuilder = require("axe-webdriverjs");
const webDriver = require("selenium-webdriver");

// create a PhantomJS WebDriver instance
const driver = new webDriver.Builder()
 .forBrowser('firefox')
 .build();

// run the tests and output the results in the console
driver
 .get("https://vbox132.secure.checkout.visa.com/")
 .then(() => {
    axeBuilder(driver)
     .analyze((results) => {
        console.log("Results are: ", results);
    });
});