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

    await driver.findElement(By.name("q")).sendKeys("Wireless Headphones", Key.ENTER);

    for (var i = 1; i <= 10; i++) {
      let firstResult = await driver.wait(
        until.elementLocated(
          By.xpath(
            `//*[@id="container"]/div/div[3]/div[1]/div[2]/div[2]/div/div[` +
              i +
              `]/div/a[1]/div[1]/div/div`
          )
        ),
        1000000
      );
      let secondResult = await driver.wait(
        until.elementLocated(
          By.xpath(
            `//*[@id="container"]/div/div[3]/div[1]/div[2]/div[3]/div/div[` +
              i +
              `]/div/a[1]/div[1]/div/div`
          )
        ),
        1000000
      );

      console.log(await firstResult.getAttribute("style"));
      firstResult.click();
      secondResult.click();
    }
  } catch (e) {
    console.error(e);
  } finally {
    // driver.quit();
  }
})();
