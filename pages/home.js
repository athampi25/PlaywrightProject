export default class Home{

    constructor (page){
        this.page =page
        this.signup =  page.locator('#signin2')
        this.login  =page.locator('#login2')
        this.nameofuser =page.locator('#nameofuser')
        this.randomItem = page.locator('//a[text()="Samsung galaxy s6"]')
        this.laptopLink= page.locator('//a[text()="Laptops"]')
        this.laptopItem = page.locator('//a[text()="Sony vaio i5"]')
        this.monitorLink=page.locator('//a[text()="Monitors"]')
        this.monitorItem=page.locator('//a[text()="Apple monitor 24"]')
        this.logout = page.locator('#logout2')
    }

    async clickSignUp(){
        await this.signup.click()
    }

    async clickLogin(){
        await this.login.click()
    }

    async nameOfUserText(){
        return await this.nameofuser
    }

    async clickRandomItem(){
        await this.randomItem.click()
    }

    async clicklaptopLink(){
        await this.laptopLink.click()
    }

    async clickLaptopItem(){
        await this.laptopItem.click()
    }
    async clickmonitorLink(){
        await this.monitorLink.click()
    }

    async clickmonitorItem(){
        await this.monitorItem.click()
    }

    async clickLogout(){
        await this.logout.click()
    }

    async signupIsVisible(){
        return await this.signup
    }
}