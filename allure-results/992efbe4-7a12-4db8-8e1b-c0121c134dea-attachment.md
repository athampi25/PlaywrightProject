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

# Page snapshot

```yaml
- generic [ref=f3e1]:
  - dialog [active] [ref=f3e2]:
    - document [ref=f3e3]:
      - generic [ref=f3e4]:
        - generic [ref=f3e5]:
          - heading "Place order" [level=5] [ref=f3e6]
          - button "Close" [ref=f3e7] [cursor=pointer]: ×
        - generic [ref=f3e9]:
          - generic [ref=f3e10]: "Total:"
          - generic [ref=f3e11]:
            - generic [ref=f3e12]: "Name:"
            - 'textbox "Total: Name:" [ref=f3e13]': Sani
          - generic [ref=f3e14]:
            - generic [ref=f3e15]: "Country:"
            - textbox "Country:" [ref=f3e16]: Canada
          - generic [ref=f3e17]:
            - generic [ref=f3e18]: "City:"
            - textbox "City:" [ref=f3e19]: Calgary
          - generic [ref=f3e20]:
            - generic [ref=f3e21]: "Credit card:"
            - textbox "Credit card:" [ref=f3e22]: "123456789"
          - generic [ref=f3e23]:
            - generic [ref=f3e24]: "Month:"
            - textbox "Month:" [ref=f3e25]: "12"
          - generic [ref=f3e26]:
            - generic [ref=f3e27]: "Year:"
            - textbox "Year:" [ref=f3e28]: "2028"
        - generic [ref=f3e30]:
          - button "Close" [ref=f3e31]
          - button "Purchase" [ref=f3e32]
  - text:             
  - navigation [ref=f3e33]:
    - generic [ref=f3e34]:
      - link "PRODUCT STORE" [ref=f3e35] [cursor=pointer]:
        - /url: index.html
      - list [ref=f3e38]:
        - listitem [ref=f3e39]:
          - link "Home (current)" [ref=f3e40] [cursor=pointer]:
            - /url: index.html
            - text: Home
            - generic [ref=f3e41]: (current)
        - listitem [ref=f3e42]:
          - link "Contact" [ref=f3e43] [cursor=pointer]:
            - /url: "#"
        - listitem [ref=f3e44]:
          - link "About us" [ref=f3e45] [cursor=pointer]:
            - /url: "#"
        - listitem [ref=f3e46]:
          - link "Cart" [ref=f3e47] [cursor=pointer]:
            - /url: "#"
        - listitem [ref=f3e48]:
          - link "Log in" [ref=f3e49] [cursor=pointer]:
            - /url: "#"
        - listitem
        - listitem
        - listitem [ref=f3e50]:
          - link "Sign up" [ref=f3e51] [cursor=pointer]:
            - /url: "#"
  - generic [ref=f3e53]:
    - generic [ref=f3e54]:
      - heading "Products" [level=2] [ref=f3e55]
      - table [ref=f3e57]:
        - rowgroup [ref=f3e58]:
          - row [ref=f3e59]:
            - columnheader "Pic" [ref=f3e60]
            - columnheader "Title" [ref=f3e61]
            - columnheader "Price" [ref=f3e62]
            - columnheader "x" [ref=f3e63]
        - rowgroup
    - generic [ref=f3e64]:
      - heading "Total" [level=2] [ref=f3e65]
      - generic:
        - generic:
          - heading [level=3]
      - button "Place Order" [ref=f3e66]
  - generic [ref=f3e68]:
    - generic [ref=f3e71]:
      - heading "About Us" [level=4] [ref=f3e72]
      - paragraph [ref=f3e73]: We believe performance needs to be validated at every stage of the software development cycle and our open source compatible, massively scalable platform makes that a reality.
    - generic [ref=f3e76]:
      - heading "Get in Touch" [level=4] [ref=f3e77]
      - paragraph [ref=f3e78]: "Address: 2390 El Camino Real"
      - paragraph [ref=f3e79]: "Phone: +440 123456"
      - paragraph [ref=f3e80]: "Email: demo@blazemeter.com"
    - heading "PRODUCT STORE" [level=4] [ref=f3e84]
  - contentinfo [ref=f3e86]:
    - paragraph [ref=f3e87]: Copyright © Product Store
  - generic [ref=f3e90]:
    - heading "Thank you for your purchase!" [level=2] [ref=f3e96]
    - paragraph [ref=f3e97]: "Id: 7896453Amount: 0 USDCard Number: 123456789Name: SaniDate: 3/10/2026"
    - button "OK" [ref=f3e100]
```