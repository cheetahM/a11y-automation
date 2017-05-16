const assert = require("chai").assert;
const axeBuilder = require("axe-webdriverjs");
const webDriver =  require("selenium-webdriver");

const driver = new webDriver.Builder()
    .forBrowser('phantomjs')
    .build();

describe('aXe test', () => {
    it('should check the main page of Consumer',  () => {
        // a Mocha test case can be treated as asynchronous
        // by returning a promise
        return driver.get('https://vbox132.secure.checkout.visa.com/')
            .then(() => {
                return new Promise((resolve) => {
                    axeBuilder(driver).analyze((results)=>{
                        assert.equal(results.violations.length, 0);

                        resolve();
                    });
                });
            })
            .then(() => driver.quit())
    })
    // The test might take some 5-10 seconds to execute,
    // so we'lldisable the timeout
    .timeout(5000);
});