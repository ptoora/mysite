const Driver = require('../driver/Driver.js');
AllPages = require('./allPages')
HomePage = require('./homePage')

class ShortPage extends AllPages {
    constructor (inClient) {
        super(inClient)
        this.driver.getUrl(inClient.options.baseUrl)
        this.driver.click(".shorts")
    }

    goHome() {
        this.driver.click('.home')
        return new HomePage(this.client, false)
    }
}

module.exports=ShortPage
