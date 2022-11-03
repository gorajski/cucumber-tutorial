const { By, Builder } = require('selenium-webdriver')
// const { suite } = require('selenium-webdriver/testing')
const assert = require('assert')
const { Given, When, Then, BeforeAll, AfterAll } = require('@cucumber/cucumber')

const PAGES = {
	test: 'https://www.selenium.dev/selenium/web/web-form.html',
	prod: 'https://www.selenium.dev/selenium/web/web-form.html'
}

let driver

BeforeAll(async () => {
	driver = await new Builder().forBrowser('chrome').build()
})

AfterAll(async () => {
	await driver.quit()
})

////////////////////////////////
//  __          ___       __  //
// / _` | \  / |__  |\ | /__` //
// \__> |  \/  |___ | \| .__/ //
//														//
////////////////////////////////


Given('I am on the {string} page', async function (page) {
	await driver.get(PAGES[page])
	await driver.manage().setTimeouts({ implicit: 500 })
})

//////////////////////////////
//            ___       __  //
// |  | |__| |__  |\ | /__` //
// |/\| |  | |___ | \| .__/ //
//													//
//////////////////////////////



When('I enter {string} into the {string} textbox', async function (input, name) {
	let textBox = await driver.findElement(By.name(name))
	await textBox.sendKeys(input)
})

When('I click Submit', async function () {
	let submitButton = await driver.findElement(By.css('button'))
	await submitButton.click()
})


/////////////////////////////
// ___       ___       __  //
//  |  |__| |__  |\ | /__` //
//  |  |  | |___ | \| .__/ //
//												 //
/////////////////////////////

Then('the title is equal to {string}', async(expectedTitle) => {
	let title = await driver.getTitle()
	assert.strictEqual(title, expectedTitle)
})

Then('the message in the {string} element equals {string}', async function (id, expectedMessage) {
	let message = await driver.findElement(By.className(id))
	let value = await message.getText()

	assert.equal(expectedMessage, value)
})