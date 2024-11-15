class LoginPage{

    fillEmail(value) {
        cy.get("[id='input-email']").type(value);
        return this;

    }

    fillPassword(value){
        cy.get("[id='input-password']").type(value);
        return this;
    }
    loginButton(){
        cy.get("[type='submit']").click();
        return this;
    }
    clickMyAccount(){
        cy.get("[class='fa-solid fa-user']").click();
        return this;
    }

    clickLogout(){
        cy.get("#top > div > div.nav.float-end > ul > li:nth-child(2) > div > ul > li:nth-child(5) > a").click();
        return this;
    }
    clickAccountLogoutContinue(){
        cy.get("#content > div > a").click();
        return this;

    }


}
export default LoginPage;