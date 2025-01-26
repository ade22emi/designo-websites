// tests.js

QUnit.module("Sample Tests");

QUnit.test("Basic math test", function(assert) {
  assert.ok(1 + 1 === 2, "1 + 1 equals 2");
});

QUnit.test("String comparison test", function(assert) {
  assert.strictEqual("hello", "hello", "Strings are exactly the same");
});
