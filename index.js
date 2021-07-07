const { Builder, By, Key, until } = require("selenium-webdriver");

(async function example() {
  let driver = await new Builder().forBrowser('MicrosoftEdge').build();
  try {
    await driver.get("http://www.google.com");
    await driver.findElement(By.name("q")).sendKeys("cheese", Key.ENTER);

    let firstResult = await driver.wait(
      until.elementLocated(By.css("h3")),
      10000
    );

    console.log(await firstResult.getAttribute("textContent"));
  } finally {
    driver.quit();
  }
})();
