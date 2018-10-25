var assert = require('assert');
const HomePage = require('../pages/homePage.js');

describe('Home page', function() {
    it('should have the right title', function () {
        var homePage = new HomePage(browser);
        var title = homePage.getTitle();
        assert.equal(title, 'Parsh\'s Testing Wiki');
    });
});