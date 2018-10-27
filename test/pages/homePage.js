const Driver = require('../driver/Driver.js');

class HomePage {
    constructor (inClient) {
        this.driver = new Driver(inClient)
        this.driver.getUrl("https://testing-strategy.herokuapp.com/")
    }
    getTitle() {
        return this.driver.getTitle()
    }

    getAllLinks() {
        return this.driver.getLinks()
    }
}

module.exports=HomePage
