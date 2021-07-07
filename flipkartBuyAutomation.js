const { Builder, By, Key, until } = require("selenium-webdriver");

(async function example() {
  let driver = await new Builder().forBrowser("MicrosoftEdge").build();
  try {
    await driver.get("https://www.flipkart.com/");

    try {
      await driver.findElement(By.className("_2KpZ6l _2doB4z")).click();
    } catch (e) {
      console.error(e);
      console.log("No pop up!");
    }

    await driver
      .findElement(By.name("q"))
      .sendKeys("Gaming Laptop", Key.ENTER);

    let firstResult = await driver.wait(
      until.elementLocated(
        By.xpath(
          `//*[@id="container"]/div/div[3]/div[1]/div[2]/div[2]/div/div[1]/div/a[1]`
        )
      ),
      1000000
    );

    console.log(await firstResult.getAttribute("href"));
    driver.get(await firstResult.getAttribute("href"));
    firstResult.click();

    let buyButton = await driver.wait(
      until.elementLocated(
        By.xpath(
          `//*[@id="container"]/div/div[3]/div[1]/div[1]/div[2]/div/ul/li[2]/form/button`
        )
      ),
      10000
    );

    buyButton.click();
  } catch (e) {
    console.error(e);
  } finally {
    // driver.quit();
  }
})();
