describe("Shop CTA Button Async Test", function () {
  it("should link to the product page", function () {
    return browser.url('/')
    .getTitle()
    .then(function(title) {
       console.log('In _async');
       console.log('In _async;Title is: ' + title);
    })
    .click('.shop-callout a')
    .getTitle()
    .then(function(title) {
       console.log('Title is: ' + title);
    })
    .getUrl()
    .then(function(url) {
        console.log('Url is: ' + url);
    })
  });
});

