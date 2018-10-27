
var client = require('webdriverio');

class Driver {

    constructor (inClient) {
        this.client = inClient
    }
    getUrl(inUrl) {
        this.client.url(inUrl)
    }
    getTitle() {
        return this.client.getTitle()
    }

    getLinkTexts(callback) {
        let list = this.client.elements('a').value
        let returnList = []
        list.forEach (item =>returnList.push(item.element().getText()))
        callback(returnList)
    }
}
module.exports = Driver