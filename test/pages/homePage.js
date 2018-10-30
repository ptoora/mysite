const Driver = require('../driver/Driver.js');
AllPages = require('./allPages')

class HomePage extends AllPages {
    constructor (inClient,goHome) {
        super(inClient)
        if (goHome) {
            this.driver.getUrl(inClient.options.baseUrl)
        }
    }
}

module.exports=HomePage
