export default class Product{
constructor (page){
    this.page=page
    this.addToCart = page.locator('//a[text()="Add to cart"]')
    this.cart = page.locator('//a[text()="Cart"]')
}

async clickAddToCart(){
    await this.addToCart.click()
}

async clickCart(){
    await this.cart.click()
}
 async acceptDialog(page){
       this.page.on('dialog', async dialog =>{ await dialog.accept()});
    }

}