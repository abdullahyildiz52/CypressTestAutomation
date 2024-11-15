
/// <reference types="cypress" />
import LoginPage from "./pages/loginPage";
import MainPage from "./pages/mainPage";
import RegisterPage from "./pages/registerPage";

describe('Opencart Register Login Logout Add-Cart Tests', () => {

  const loginPage= new LoginPage();
  const mainPage= new MainPage();
  const registerPage=new RegisterPage();

  beforeEach(() => {
    cy.wait(5000);
    cy.visit('https://demo.opencart.com/en-gb?route=common/home')
    cy.wait(5000); // Sayfanın tam yüklenmesi için bekle
  })

  it('Kullanici basarili kayit işlemi', () => {
    
    cy.get("[class='fa-solid fa-user']").click({ force: true })
    
    cy.get("#top > div > div.nav.float-end > ul > li:nth-child(2) > div > ul > li:nth-child(1) > a").click({ force: true })
    registerPage.fillFirstName()
    registerPage.fillLastName()
    registerPage.fillEmail()
    registerPage.fillPassword()
    registerPage.privacyPolicyButton()
    registerPage.continueButton()
    cy.wait(5000)
    // Kayıtlı kullanıcı ile test "Warning: E-Mail Address is already registered!" mesajını içeren öğeyi doğrulama
    cy.contains('Warning: E-Mail Address is already registered!').should('be.visible')
   
  })

  it('Kullanici basarili login işlemi', () => {
    //cy.allure().feature('kullanıcı giriş testi')
    //cy.allure().story('login-test')
    mainPage.clickMyAccount()
    cy.get("#top > div > div.nav.float-end > ul > li:nth-child(2) > div > ul > li:nth-child(2) > a").click()
    var mail="test.abdullahy1@gmail.com"
    loginPage.fillEmail(mail)
    var password="TestTest*52"
    loginPage.fillPassword(password)
    cy.get("[type='submit']").click()
    cy.wait(5000)
    // Hesaba giriş yapıldığını   "My Orders" mesajının sayfa da göründüğünü doğrulama
    cy.contains('My Orders').should('be.visible');

  })

  it('Kullanici login-logout işlemi', () => {
    mainPage.clickMyAccount()
    cy.get("#top > div > div.nav.float-end > ul > li:nth-child(2) > div > ul > li:nth-child(2) > a").click()
    var mail="test.abdullahy1@gmail.com"
    loginPage.fillEmail(mail)
    var password="TestTest*52"
    loginPage.fillPassword(password)
    cy.get("[type='submit']").click()
    cy.wait(5000)
  // Hesaba giriş yapıldığını   "My Orders" mesajının sayfa da göründüğünü doğrulama
    cy.contains('My Orders').should('be.visible');
    loginPage.clickMyAccount()
    loginPage.clickLogout()
  
    loginPage.clickAccountLogoutContinue()
    loginPage.clickMyAccount()
    cy.wait(5000)
    // Çıkış yapıldıktan sonra kontroletmek için My Acoount a tıklandığında Login metni var mı kontrol
    cy.contains('Login').should('be.visible');
   
  })

  it('Kullanici add cart işlemi', () => {

    mainPage.clickMyAccount()
    cy.get("#top > div > div.nav.float-end > ul > li:nth-child(2) > div > ul > li:nth-child(2) > a").click()
    var mail="test.abdullahy1@gmail.com"
    loginPage.fillEmail(mail)
    var password="TestTest*52"
    loginPage.fillPassword(password)
    cy.get("[type='submit']").click()
    cy.wait(5000)
    // Hesaba giriş yapıldığını   "My Orders" mesajının sayfa da göründüğünü doğrulama
    cy.contains('My Orders').should('be.visible');
    mainPage.clickLogo()
    mainPage.clickCartFirstProduct()
    cy.wait(5000)
    cy.contains("Success: You have added MacBook to your shopping cart!").should("be.visible")
   
   
  })



    
    
})
