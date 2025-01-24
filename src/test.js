// Example tests.js file

QUnit.test("Basic math test", function (assert) {
    assert.equal(1 + 1, 2, "1 + 1 should equal 2");
  });
  
  QUnit.test("Check card title", function (assert) {
    assert.ok(document.querySelector(".card__title").textContent.includes("Award-winning custom designs"), "The card title should be correct");
  });
  
  QUnit.test("Learn more button existence", function (assert) {
    assert.ok(document.querySelector(".card__btn") !== null, "The Learn more button should exist");
  });
  
  QUnit.test("Navigation links count", function (assert) {
    assert.equal(document.querySelectorAll("nav .menu li").length, 3, "There should be 3 navigation links");
  });
  
  QUnit.test("Logo image source", function (assert) {
    assert.ok(document.querySelector(".logo img").src.includes("/assets/shared/desktop/logo-dark.png"), "The logo image source should be correct");
  });
  
  QUnit.test("Mobile hero image visibility", function (assert) {
    assert.ok(document.querySelector(".card__image") !== null, "The mobile hero image should exist");
  });
  
  QUnit.test("Footer links count", function (assert) {
    assert.equal(document.querySelectorAll("footer .footer__links").length, 3, "There should be 3 footer links");
  });
  
  QUnit.test("Footer contact details", function (assert) {
    assert.ok(document.querySelector(".footer__contact").textContent.includes("Designo Central Office"), "The footer contact details should be correct");
  });
  