var assert = require('assert');
const HomePage = require('../pages/homePage.js');
var chai = require('chai');
var chaiWebdriver = require('chai-webdriverio').default;
chai.use(chaiWebdriver(browser));


describe('Home page should exist with expected links and footer', function() {
    var homePage = new HomePage(browser, true);
    it('should have the right title', function () {
        assert.equal(homePage.getTitle(), 'Parsh\'s Testing Wiki');
    });
    it('should have six links', function () {
        const expectedList=['Home', 'Contact', 'Bite Size Blogs', 'Blogs And Docs', 'Software Projects', 'Test Strategy Template']
        var actualList =  homePage.getLinkTexts()
        chai.expect(expectedList).to.eql(actualList)
    });
    it('should have footer', function () {
        chai.expect(homePage.getFooter()).to.match(/page views: \d/)
    });
});