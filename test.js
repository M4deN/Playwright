const {chromium} = require('playwright');

(async() => {
    const browser = await chromium.launch({headless:false})
    // const context = await browser.newContext()
    // const page = await context.newPage()
    const page = await browser.newPage()
    await page.goto('https://todomvc.com/examples/react/dist/')
    await page.screenshot({path:`todo.png`})
    await browser.close()
}) ()