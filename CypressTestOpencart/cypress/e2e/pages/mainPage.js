class MainPage{

    clickMyAccount(){
        cy.get("[class='fa-solid fa-user']").click() ;
        return this;

    }

    clickLogo(){
        cy.get("[id='logo']").click();
        return this ;
    }
    clickRegister(){
        cy.get("#top > div > div.nav.float-end > ul > li:nth-child(2) > div > ul > li:nth-child(1) > a").click();
        return this;
    }

    clickLogin(){
        cy.get("#top > div > div.nav.float-end > ul > li:nth-child(2) > div > ul > li:nth-child(2) > a");
        return this;
    }
    clickCartFirstProduct(){
        cy.get('.fa-solid.fa-shopping-cart').eq(0).click(); // ilk öğeyi tıklamak için
        return this;

    }

}
export default MainPage;