const Driver = require('../driver/Driver.js');
AllPages = require('./allPages')

class HomePage extends AllPages {
    constructor (inClient) {
        super(inClient)
        this.driver.getUrl("https://testing-strategy.herokuapp.com/")
    }
}

module.exports=HomePage
