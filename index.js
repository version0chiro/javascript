const { Builder, By, Key, until } = require("selenium-webdriver");

(async function example() {
  let driver = await new Builder().forBrowser("MicrosoftEdge").build();
  try {
    await driver.get("http://www.google.com");
    await driver
      .findElement(By.name("q"))
      .sendKeys("oversized white jacket", Key.ENTER);

    let firstResult = await driver.wait(
      until.elementLocated(By.xpath(`//*[@id="hdtb-msb"]/div[1]/div/div[3]/a`)),
      10000
    );

    firstResult.click();

    console.log(await firstResult.getAttribute("textContent"));
  } finally {
    // driver.quit();
  }
})();
