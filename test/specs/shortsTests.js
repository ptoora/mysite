const ShortsPage = require('../pages/shortBlogsPage.js');
var chai = require('chai');
var chaiWebdriver = require('chai-webdriverio').default;
chai.use(chaiWebdriver(browser));

describe('Have blogs', function() {
    it('should have links', function () {
        var shortsPage = new ShortsPage(browser);
        var actualLinks = shortsPage.getLinkTexts()
        chai.expect(actualLinks).to.contain('QA Handover From Dev')
    });
});

describe('Navigate back to home', function() {
    it('go home', function () {
        var shortsPage = new ShortsPage(browser);
        var homePage = shortsPage.goHome();
        chai.expect(homePage.getHeading()).to.eql('Parsh\'s Testing Wiki');
    });
});