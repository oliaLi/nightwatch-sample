// Importing nightwatch configuration file
var conf = require('../../nightwatch.conf.js');

module.exports = {
  'Navigation to Bing.com + search': function (browser) {
    browser
    // Navigationg to bing.come
      .url('https://www.bing.com')
    // Making sure all content is displayed
      .waitForElementVisible('body', 1000)
    // Performing search
      .setValue('#sb_form_q', 'sparkcentral')
    // Clicking search button
      .click('#sb_form_go')
      .pause(2000)

  },

  'Verifying first test result': function(browser) {
    browser
    // Verifying that first search result header is Sparkcentral - Official Site
      .assert.containsText('#b_results > li:nth-child(1) > h2 > a', 'Sparkcentral - Official Site')

  },
  'Verifying all test results': function(browser){
    browser

      //Looping through list of search result and verifying they all should display 'Sparkcentral'

       .elements('css selector', '.b_algo', function (res) {
        for(var i=0;i<res.value.length;i++){
        var elementCss = '#b_results > li:nth-child(' + (i+1) + ')> h2 > a > strong';
        browser.assert.containsText(elementCss,'Sparkcentral');
}
})
     },


  'Verifying product link' : function (browser) {

    browser
    // veriffying the value of link tag equals to https://www.sparkcentral.com/product/
      .getAttribute("#b_results > li:nth-child(1) > div.b_vlist2col.b_deep > ul:nth-child(1) > li:nth-child(1) > h3 > a", 'href', function(result){
        browser.assert.equal(result.value, "https://www.sparkcentral.com/product/")
    });

  },

  'Last' : function (browser) {
    //Closing browser
    browser
      .end()

}

};
