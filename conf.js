// solves `SyntaxError: Unexpected token import`
require("babel-register")({
    presets: [ 'es2015' ]
});

exports.config = {
    /**
     *  Uncomment ONE of the following to connect to: seleniumServerJar OR directConnect. Protractor
     *  will auto-start selenium if you uncomment the jar, or connect directly to chrome/firefox
     *  if you uncomment directConnect.
     */
    //seleniumServerJar: "node_modules/protractor/node_modules/webdriver-manager/selenium/selenium-server-standalone-3.4.0.jar",
    directConnect: true,
    SELENIUM_PROMISE_MANAGER: false,

    specs: ['specs/a*Spec.js'],
    baseUrl: 'http://computer-database.herokuapp.com/computers',
    framework: "mocha",

    onPrepare: () => {
        browser.ignoreSynchronization = true;
        browser.manage().window().setSize(1024, 600);
    },

    capabilities: {
        browserName: 'chrome',
        shardTestFiles: true,
        maxInstances: 1,
        chromeOptions: {
            args: [
                // disable chrome's wakiness
                '--disable-infobars',
                '--disable-extensions',
                'verbose',
                'log-path=/tmp/chromedriver.log'
            ],
            prefs: {
                // disable chrome's annoying password manager
                'profile.password_manager_enabled': false,
                'credentials_enable_service': false,
                'password_manager_enabled': false
            }
        }
    },
    mochaOpts:{
        slow: 30000,
        timeout: 30000000,
        verbose: true,
        exit: true
    }
};