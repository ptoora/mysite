
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
}
module.exports = Driver