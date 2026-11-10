import {test,expect} from '@playwright/test';
import Home from '../pages/home.js';
import ValidLogin from '../test-data/validlogin.json' with {type:'json'}
import Login from '../pages/login.js'
import Product from '../pages/product.js';
import Cart from '../pages/cart.js';
import ExcelUtility from '../utilities/ExcelUtility.js';
test.beforeEach(async({page})=>{
   await page.goto('/') 
})
test('Verify random purchase', async({page})=>{
//await page.goto('https://demoblaze.com/')
//Login
const h = new Home(page)
await h.clickLogin()
const l = new Login(page)
await l.fillUsername(ValidLogin.username)
await l.fillPassword(ValidLogin.password)
await l.clickLogin()
await h.clickRandomItem()
const p = new Product(page)
await p.clickAddToCart()
//page.waitForTimeout(500)
await p.acceptDialog(page)

//await page.pause()



})

test('Verify laptop purchase', async({page})=>{
//await page.goto('https://demoblaze.com/')
//Login
const h = new Home(page)
await h.clickLogin()
const l = new Login(page)
await l.fillUsername(ValidLogin.username)
await l.fillPassword(ValidLogin.password)
await l.clickLogin()
await h.clicklaptopLink()
await h.clickLaptopItem()
const p = new Product(page)
await p.clickAddToCart()
 //page.waitForTimeout(500)
await p.acceptDialog(page)
await p.clickCart()
const c = new Cart(page)
await c.clickPlaceOrder()
const filePath ='C:\\Users\\prane\\eclipse-workspace\\aryaObsqura\\Playwright Project\\test-data\\PurchaseDetails.xlsx'
const name = await ExcelUtility.getStringData(2,1,"PurchaseDetails",filePath)
const country = await ExcelUtility.getStringData(2,2,"PurchaseDetails",filePath)
const city = await ExcelUtility.getStringData(2,3,"PurchaseDetails",filePath)
const creditcard = await ExcelUtility.getStringData(2,4,"PurchaseDetails",filePath)
const month = await ExcelUtility.getStringData(2,5,"PurchaseDetails",filePath)
const year = await ExcelUtility.getStringData(2,6,"PurchaseDetails",filePath)
await c.fillName(name)
await c.fillCountry(country)
await c.fillCity(city)
await c.fillCard(creditcard)
await c.fillMonth(month)
await c.fillYear(year)
await c.clickPurchaseButton()
const message = await c.message()
await expect(message).toHaveText('Thank you for your purchase!')
await c.clickOk()
//await page.pause()
})

test('Verify monitor purchase', async({page})=>{
//await page.goto('https://demoblaze.com/')
//Login
const h = new Home(page)
await h.clickLogin()
const l = new Login(page)
await l.fillUsername(ValidLogin.username)
await l.fillPassword(ValidLogin.password)
await l.clickLogin()
await h.clickmonitorLink()
await h.clickmonitorItem()
const p = new Product(page)
await p.clickAddToCart()
//page.waitForTimeout(500)
await p.acceptDialog(page)
await p.clickCart()
const c = new Cart(page)
await c.clickPlaceOrder()
const filePath ='C:\\Users\\prane\\eclipse-workspace\\aryaObsqura\\Playwright Project\\test-data\\PurchaseDetails.xlsx'
const name = await ExcelUtility.getStringData(2,1,"PurchaseDetails",filePath)
const country = await ExcelUtility.getStringData(2,2,"PurchaseDetails",filePath)
const city = await ExcelUtility.getStringData(2,3,"PurchaseDetails",filePath)
const creditcard = await ExcelUtility.getStringData(2,4,"PurchaseDetails",filePath)
const month = await ExcelUtility.getStringData(2,5,"PurchaseDetails",filePath)
const year = await ExcelUtility.getStringData(2,6,"PurchaseDetails",filePath)
await c.fillName(name)
await c.fillCountry(country)
await c.fillCity(city)
await c.fillCard(creditcard)
await c.fillMonth(month)
await c.fillYear(year)
await c.clickPurchaseButton()
const message = await c.message()
await expect(message).toHaveText('Thank you for your purchase!')
await c.clickOk()

})