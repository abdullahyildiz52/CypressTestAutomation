describe("Swagger Petstore API Testleri ", () => {
  const payload = {
    id: 5252,
    username: "abdullahy",
    firstName: "Abdullah",
    lastName: "Yıldız",
    email: "test.abdullahy@gmail.com",
    password: "paspassword",
    phone: "05555555555",
    userStatus: 0,
  };


  it("GET - Kullanici bilgilerini getir", () => {
    cy.request("GET", "https://petstore.swagger.io/v2/user/abdullahy");
  });


  it("DELETE - Kullanici bilgilerini Sil", () => {
    cy.request("DELETE", "https://petstore.swagger.io/v2/user/abdullahy");
  });


  it("POST - Kullanici Oluştur", () => {
    cy.request({
      method: "POST",
      url: "https://petstore.swagger.io/v2/user/",
      body: payload,
     });

  })


  it("PUT - Kullanici Güncelle", () => {
    cy.request({
      method: "PUT",
      url: "https://petstore.swagger.io/v2/user/abdullahy",
      body: payload,
    });
  });
});







