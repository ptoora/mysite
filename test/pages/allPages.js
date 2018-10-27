const Driver = require('../driver/Driver.js');

class AllPages {

    constructor (inClient) {
        this.driver = new Driver(inClient)
    }

    getTitle() {
        return this.driver.getTitle()
    }

    getLinkTexts(callback) {
        return this.driver.getLinkTexts(callback)
    }
}

module.exports = AllPages