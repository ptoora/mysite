
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

    getHeading() {
        return this.client.getText('h1')
    }

    click(selector) {
        this.client.isExisting(selector)
        this.client.moveToObject(selector)
        this.client.isVisible(selector)
        this.client.click(selector)
    }

    getLinkTexts(callback) {
        let list = this.client.elements('a').value
        let returnList = []
        list.forEach (item =>returnList.push(item.element().getText()))
        if (callback==undefined)
            return returnList
        else
            callback(returnList)
    }

    getText(selector) {
        return this.client.getText(selector)
    }
}
module.exports = Driver