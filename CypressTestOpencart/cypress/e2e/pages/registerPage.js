class RegisterPage{

    fillFirstName(){
        cy.get("[id='input-firstname']").type(" Abdullah");
        return this;
    }

    fillLastName(){
        cy.get("[id='input-lastname']").type(" Yıldız");
         return this;
    }

    fillEmail(){
        cy.get("[id='input-email']").type("test.abdullahy1@gmail.com")
        return this;
    }

    fillPassword(){
        cy.get("[id='input-password']").type("TestTest*52");
        return this;
    }
    privacyPolicyButton(){
        cy.get("[name='agree']").click();
        return this;
    }
    continueButton(){
        cy.get("[type='submit']").click();
        return this;
    }

}
export default RegisterPage;