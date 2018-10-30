const Driver = require('../driver/Driver.js');

class AllPages {

    constructor (inClient) {
        this.client = inClient
        this.driver = new Driver(inClient)
    }

    getTitle() {
        return this.driver.getTitle()
    }

    getLinkTexts() {
        return this.driver.getLinkTexts()
    }

    getFooter() {
        return this.driver.getText("#footer")
    }


    getHeading() {
        return this.driver.getHeading()
    }
}

module.exports = AllPages