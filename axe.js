const axeBuilder = require("axe-webdriverjs");
const webDriver = require("selenium-webdriver");

// create a PhantomJS WebDriver instance
const driver = new webDriver.Builder()
    .forBrowser('phantomjs')
    .build();

// run the tests and output the results in the console
driver
    .get("http://sitepoint.com")
    .then(() => {
        axeBuilder(driver)
            .analyze((results) => {
                console.log(results);
            });
    });     