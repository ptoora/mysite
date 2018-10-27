
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

    getLinks() {
        return this.client.elements('a').value.map(function(elm){elm.getText()})
    }
}
module.exports = Driver