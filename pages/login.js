export default class Login{
    constructor(page){
        this.page=page
        this.username = page.locator('#loginusername')
        this.password = page.locator('#loginpassword')
        this.login = page.locator('//button[text()="Log in"]')
    }

    async fillUsername(loginusernameVal){
        await this.username.fill(loginusernameVal)
    }

     async fillPassword(loginpasswordVal){
        await this.password.fill(loginpasswordVal)
    }

    async clickLogin(){
        await this.login.click()
    }

    async acceptDialog(page){
         this.page.on('dialog', async dialog =>{ await dialog.accept()});
    }
}