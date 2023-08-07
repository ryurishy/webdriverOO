const { Given, When, Then } = require('@wdio/cucumber-framework');

Given(/^user is login page$/, async () => {
	await browser.url('https://sandbox-app.oexpress.co.id/login') 
});

When(/^user enters (.*) and (.*)$/, async (email, password) => {

	await $('input[type="email"]').setValue(email)
    await $('input[type="password"]').setValue(password)
});

When(/^clicks on login button$/, async () => {
	await $('button[type="submit"]').click()
});

Then(/^user is navigated to the home page$/, async () => {
	
});


Then(/^user can see warning (.*)$/, async  (message) => {
    
	await expect($('div[role="alert"]')).toHaveTextContaining(message)
});

