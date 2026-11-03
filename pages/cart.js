export default class Cart{
    constructor(page){
        this.page=page
        this.placeorderButton=page.locator('//button[text()="Place Order"]')
        this.name =page.locator('#name')
        this.country = page.locator('#country')
        this.city = page.locator('#city')
        this.card =page.locator('#card')
        this.month = page.locator('#month')
        this.year = page.locator('#year')
        this.purchaseButton = page.locator('//button[text()="Purchase"]')
        this.messageLabel = this.page.locator('//h2[text()="Thank you for your purchase!"]')
        this.okButton = this.page.locator('//button[text()="OK"]')
    }

    async clickPlaceOrder(){
        await this.placeorderButton.click()
    }

    async fillName(nameVal){
        await this.name.fill(nameVal)
    }

    async fillCountry(countryVal){
        await this.country.fill(countryVal)
    }

     async fillCity(cityVal){
        await this.city.fill(cityVal)
    }

     async fillCard(cardVal){
        await this.card.fill(cardVal)
    }

    async fillMonth(monthVal){
        await this.month.fill(monthVal)
    }

    async fillYear(yearVal){
        await this.year.fill(yearVal)
    }

    async clickPurchaseButton(){
        await this.purchaseButton.click()
    }

    async message(){
        return await this.messageLabel
    }

    async clickOk(){
        await this.okButton.click()
    }
}