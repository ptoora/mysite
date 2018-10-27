var assert = require('assert');
const HomePage = require('../pages/homePage.js');

describe('Home page should exist', function() {
    it('should have the right title', function () {
        var homePage = new HomePage(browser);
        var title = homePage.getTitle();
        assert.equal(title, 'Parsh\'s Testing Wiki');
    });
});

describe('Home page should have expected links', function() {
    it('should have five links', function () {
        var homePage = new HomePage(browser);
        var title = homePage.getAllLinks();
        console.log(title)
    });
});