# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: purchase.spec.js >> Verify random purchase
- Location: tests\purchase.spec.js:11:1

# Error details

```
Error: page.waitForTimeout: Test ended.
```

# Test source

```ts
  1   | import {test,expect} from '@playwright/test';
  2   | import Home from '../pages/home.js';
  3   | import ValidLogin from '../test-data/validlogin.json' with {type:'json'}
  4   | import Login from '../pages/login.js'
  5   | import Product from '../pages/product.js';
  6   | import Cart from '../pages/cart.js';
  7   | import ExcelUtility from '../utilities/ExcelUtility.js';
  8   | test.beforeEach(async({page})=>{
  9   |    await page.goto('/') 
  10  | })
  11  | test('Verify random purchase', async({page})=>{
  12  | //await page.goto('https://demoblaze.com/')
  13  | //Login
  14  | const h = new Home(page)
  15  | await h.clickLogin()
  16  | const l = new Login(page)
  17  | await l.fillUsername(ValidLogin.username)
  18  | await l.fillPassword(ValidLogin.password)
  19  | await l.clickLogin()
  20  | await h.clickRandomItem()
  21  | const p = new Product(page)
  22  | await p.clickAddToCart()
> 23  | page.waitForTimeout(500)
      |      ^ Error: page.waitForTimeout: Test ended.
  24  | await p.acceptDialog(page)
  25  | 
  26  | //await page.pause()
  27  | 
  28  | 
  29  | 
  30  | })
  31  | 
  32  | test('Verify laptop purchase', async({page})=>{
  33  | //await page.goto('https://demoblaze.com/')
  34  | //Login
  35  | const h = new Home(page)
  36  | await h.clickLogin()
  37  | const l = new Login(page)
  38  | await l.fillUsername(ValidLogin.username)
  39  | await l.fillPassword(ValidLogin.password)
  40  | await l.clickLogin()
  41  | await h.clicklaptopLink()
  42  | await h.clickLaptopItem()
  43  | const p = new Product(page)
  44  | await p.clickAddToCart()
  45  |  page.waitForTimeout(500)
  46  | await p.acceptDialog(page)
  47  | await p.clickCart()
  48  | const c = new Cart(page)
  49  | await c.clickPlaceOrder()
  50  | const filePath ='C:\\Users\\prane\\eclipse-workspace\\aryaObsqura\\Playwright Project\\test-data\\PurchaseDetails.xlsx'
  51  | const name = await ExcelUtility.getStringData(2,1,"PurchaseDetails",filePath)
  52  | const country = await ExcelUtility.getStringData(2,2,"PurchaseDetails",filePath)
  53  | const city = await ExcelUtility.getStringData(2,3,"PurchaseDetails",filePath)
  54  | const creditcard = await ExcelUtility.getStringData(2,4,"PurchaseDetails",filePath)
  55  | const month = await ExcelUtility.getStringData(2,5,"PurchaseDetails",filePath)
  56  | const year = await ExcelUtility.getStringData(2,6,"PurchaseDetails",filePath)
  57  | await c.fillName(name)
  58  | await c.fillCountry(country)
  59  | await c.fillCity(city)
  60  | await c.fillCard(creditcard)
  61  | await c.fillMonth(month)
  62  | await c.fillYear(year)
  63  | await c.clickPurchaseButton()
  64  | const message = await c.message()
  65  | await expect(message).toHaveText('Thank you for your purchase!')
  66  | await c.clickOk()
  67  | //await page.pause()
  68  | })
  69  | 
  70  | test('Verify monitor purchase', async({page})=>{
  71  | //await page.goto('https://demoblaze.com/')
  72  | //Login
  73  | const h = new Home(page)
  74  | await h.clickLogin()
  75  | const l = new Login(page)
  76  | await l.fillUsername(ValidLogin.username)
  77  | await l.fillPassword(ValidLogin.password)
  78  | await l.clickLogin()
  79  | await h.clickmonitorLink()
  80  | await h.clickmonitorItem()
  81  | const p = new Product(page)
  82  | await p.clickAddToCart()
  83  | page.waitForTimeout(500)
  84  | await p.acceptDialog(page)
  85  | await p.clickCart()
  86  | const c = new Cart(page)
  87  | await c.clickPlaceOrder()
  88  | const filePath ='C:\\Users\\prane\\eclipse-workspace\\aryaObsqura\\Playwright Project\\test-data\\PurchaseDetails.xlsx'
  89  | const name = await ExcelUtility.getStringData(2,1,"PurchaseDetails",filePath)
  90  | const country = await ExcelUtility.getStringData(2,2,"PurchaseDetails",filePath)
  91  | const city = await ExcelUtility.getStringData(2,3,"PurchaseDetails",filePath)
  92  | const creditcard = await ExcelUtility.getStringData(2,4,"PurchaseDetails",filePath)
  93  | const month = await ExcelUtility.getStringData(2,5,"PurchaseDetails",filePath)
  94  | const year = await ExcelUtility.getStringData(2,6,"PurchaseDetails",filePath)
  95  | await c.fillName(name)
  96  | await c.fillCountry(country)
  97  | await c.fillCity(city)
  98  | await c.fillCard(creditcard)
  99  | await c.fillMonth(month)
  100 | await c.fillYear(year)
  101 | await c.clickPurchaseButton()
  102 | const message = await c.message()
  103 | await expect(message).toHaveText('Thank you for your purchase!')
  104 | await c.clickOk()
  105 | //await page.pause()
  106 | 
  107 | })
```