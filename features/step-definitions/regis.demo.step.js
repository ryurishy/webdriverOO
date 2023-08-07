const { Given, When, Then } = require('@wdio/cucumber-framework');


Given(/^user is register page$/, async  () => {
	await browser.url('https://sandbox-app.oexpress.co.id/register')
});

When(/^user filled form register$/, async () => {
	const randomStr = Math.random().toString(36).substr(2,5)
    const emailId = 'myemail_${randomStr}@gmail.com';
    const name  = 'sudjono muktafi'
    const password  =  'P@ssw0rd123'
    const phone = '085223439409'

    await $('input[name="name"]').setValue(name)
    await $('input[name="email"]').setValue(emailId)
    await $('input[name="password"]').setValue(password)
    await $('input[name="phone"]').setValue(phone)
});

When(/^click on register button$/, async () => {
	await $('button[type="submit"]').click()
});

Then(/^user see popup register success$/, () => {
	return true;
});
