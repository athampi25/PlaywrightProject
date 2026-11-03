# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: purchase.spec.js >> Verify monitor purchase
- Location: tests\purchase.spec.js:70:1

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.click: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('//a[text()="Add to cart"]')

```

# Page snapshot

```yaml
- generic [active] [ref=f2e1]:
  - text:             
  - navigation [ref=f2e2]:
    - generic [ref=f2e3]:
      - link "PRODUCT STORE" [ref=f2e4] [cursor=pointer]:
        - /url: index.html
      - list [ref=f2e7]:
        - listitem [ref=f2e8]:
          - link "Home (current)" [ref=f2e9] [cursor=pointer]:
            - /url: index.html
            - text: Home
            - generic [ref=f2e10]: (current)
        - listitem [ref=f2e11]:
          - link "Contact" [ref=f2e12] [cursor=pointer]:
            - /url: "#"
        - listitem [ref=f2e13]:
          - link "About us" [ref=f2e14] [cursor=pointer]:
            - /url: "#"
        - listitem [ref=f2e15]:
          - link "Cart" [ref=f2e16] [cursor=pointer]:
            - /url: cart.html
        - listitem [ref=f2e17]:
          - link "Log in" [ref=f2e18] [cursor=pointer]:
            - /url: "#"
        - listitem
        - listitem
        - listitem [ref=f2e19]:
          - link "Sign up" [ref=f2e20] [cursor=pointer]:
            - /url: "#"
  - generic [ref=f2e24]:
    - generic:
      - list [ref=f2e25]:
        - listitem [ref=f2e26] [cursor=pointer]
        - listitem [ref=f2e27] [cursor=pointer]
        - listitem [ref=f2e28] [cursor=pointer]
      - link:
        - /url: "#myCarousel-2"
      - link:
        - /url: "#myCarousel-2"
  - generic [ref=f2e31]:
    - generic [ref=f2e34]:
      - heading "About Us" [level=4] [ref=f2e35]
      - paragraph [ref=f2e36]: We believe performance needs to be validated at every stage of the software development cycle and our open source compatible, massively scalable platform makes that a reality.
    - generic [ref=f2e39]:
      - heading "Get in Touch" [level=4] [ref=f2e40]
      - paragraph [ref=f2e41]: "Address: 2390 El Camino Real"
      - paragraph [ref=f2e42]: "Phone: +440 123456"
      - paragraph [ref=f2e43]: "Email: demo@blazemeter.com"
    - heading "PRODUCT STORE" [level=4] [ref=f2e47]
  - contentinfo [ref=f2e49]:
    - paragraph [ref=f2e50]: Copyright © Product Store
```

# Test source

```ts
  1  | export default class Product{
  2  | constructor (page){
  3  |     this.page=page
  4  |     this.addToCart = page.locator('//a[text()="Add to cart"]')
  5  |     this.cart = page.locator('//a[text()="Cart"]')
  6  | }
  7  | 
  8  | async clickAddToCart(){
> 9  |     await this.addToCart.click()
     |                          ^ Error: locator.click: Test timeout of 30000ms exceeded.
  10 | }
  11 | 
  12 | async clickCart(){
  13 |     await this.cart.click()
  14 | }
  15 |  async acceptDialog(page){
  16 |        this.page.on('dialog', async dialog =>{ await dialog.accept()});
  17 |     }
  18 | 
  19 | }
```