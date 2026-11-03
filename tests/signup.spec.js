import { test, expect } from '@playwright/test';
import TestDataGenerator from '../utilities/randomdatagenerator.js'
import Home from '../pages/home.js';
import Signup from '../pages/signup.js';
import {EXPECTED_URL} from '../utilities/constants.js'
test.beforeEach(async({page})=>{
   await page.goto('/') 
})
test('Validate successful signup', async({page})=>{
//await page.goto('https://demoblaze.com/')
//SignUp
const h = new Home(page)
await h.clickSignUp()
//await page.pause()

const t = new TestDataGenerator()
 const usernameValue =  t.generateUsername()
const passwordValue =  t.generatePassword()
const s = new Signup(page)
await s.fillUsername(usernameValue)
await s.fillPassword(passwordValue)
await s.clickSignupButton()
const url =await s.getURL()
await expect(url).toBe(EXPECTED_URL)



}),

test('Validate signup and close', async({page})=>{
//await page.goto('https://demoblaze.com/')
//SignUp
const h = new Home(page)
await h.clickSignUp()
//await page.pause()

const t = new TestDataGenerator()
 const usernameValue =  t.generateUsername()
const passwordValue =  t.generatePassword()
const s = new Signup(page)
await s.fillUsername(usernameValue)
await s.fillPassword(passwordValue)
await s.clickClose()
const url =await s.getURL()
await expect(url).toBe(EXPECTED_URL)


}
)