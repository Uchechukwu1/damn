const jsdom = require("jsdom");
const { expect } = require("chai");
const fs = require("fs");
const path = require("path");
const { JSDOM } = jsdom;

describe("test if the numbers add up", function () {
  beforeEach(function () {
    const dom = new JSDOM(fs.readFileSync("./src/index.html"), {
      resources: "usable",
      url: "file://" + path.join(__dirname, "../src/"),
      runScripts: "dangerously",
    });
    this.dom = dom;
  });

  it("addition test ", function (resolve) {
    this.dom.window.addEventListener("DOMContentLoaded", () => {
      this.dom.window.eval("button.click();");
      expect(
        this.dom.window.document.getElementById("result").textContent
      ).to.be.equal("10");
      resolve();
    });
  });
});
