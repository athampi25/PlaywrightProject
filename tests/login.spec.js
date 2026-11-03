import { test, expect } from '@playwright/test';
import Home from '../pages/home.js';
import ValidLogin from '../test-data/validlogin.json' with {type:'json'}
import InvalidLogin from '../test-data/invalidlogin.json' with {type:'json'}
import Login from '../pages/login.js';
test.beforeEach(async({page})=>{
   await page.goto('/') 
})
test('Verify valid Login', async({page})=>{
//await page.goto('https://demoblaze.com/')
//Login
const h = new Home(page)
await h.clickLogin()
const l = new Login(page)
await l.fillUsername(ValidLogin.username)
await l.fillPassword(ValidLogin.password)
await l.clickLogin()
//await page.pause()
const message =await h.nameOfUserText()
await expect(message).toContainText(`Welcome ${ValidLogin.username}`)

})

for(const data of InvalidLogin){
test(`Verify invalid login with ${data.username} and ${data.password}`, async({page})=>{
//await page.goto('https://demoblaze.com/')
//Login
const h = new Home(page)
await h.clickLogin()
const l = new Login(page)
await l.fillUsername(data.username)
await l.fillPassword(data.password)
await l.clickLogin()
await l.acceptDialog(page)
//await page.pause()
})
}

test('Verify successful Logout', async({page})=>{
//await page.goto('https://demoblaze.com/')
//Login
const h = new Home(page)
await h.clickLogin()
const l = new Login(page)
await l.fillUsername(ValidLogin.username)
await l.fillPassword(ValidLogin.password)
await l.clickLogin()
//await page.pause()
await h.clickLogout()
const signUp = await h.signupIsVisible()
await expect(signUp).toBeVisible()

})