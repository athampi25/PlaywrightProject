
export default class Signup{

constructor (page){
    this.page=page
    this.username= page.locator('#sign-username')
    this.password = page.locator('#sign-password')
    this.signupbutton = page.locator('//button[text()="Sign up"]')
    this.closeButton =page.locator('//button[text()="Close"]').nth(1)
}

async fillUsername(usernameVal){
    await this.username.fill(usernameVal)
}

async fillPassword(passwordVal){
    await this.password.fill(passwordVal)
}

async clickSignupButton(){
    await this.signupbutton.click()
}

async clickClose(){
    return this.closeButton.click()
}
async getURL(){
    return this.page.url()
}
}