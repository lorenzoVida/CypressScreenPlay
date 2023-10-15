class primeroPage{

    txtUsertxt="input[placeholder='Buscar productos']";

    ingresarUsuario(){
        cy.visit('https://simple.ripley.com.pe')
        cy.get(this.txtUser).type('macbook');
        cy.wait(9000)
  
    }
}
module.exports = new primeroPage();