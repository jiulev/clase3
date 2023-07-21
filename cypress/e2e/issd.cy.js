describe('Cargar pagina ISSD', () => {
  it('Cargar pagina', () => {
    cy.visit('https://examenes.issd.edu.ar/')
  })

  it('Verificar que el botón de menú lateral esté presente', () => {

    cy.visit('https://examenes.issd.edu.ar/')+
  
    cy.get('.login > a').click()
    cy.get('#username').type("32934094")
    cy.get('#password').type("32934094")
    cy.get('#loginbtn').click()
  
    cy.get('.mr-3 > .btn > .icon').should('be.visible')

  
  
  })


  it('Verificar que se despliegue el menu lateral al hacer click', () => {

    cy.visit('https://examenes.issd.edu.ar/')+
  
    cy.get('.login > a').click()
    cy.get('#username').type("32934094")
    cy.get('#password').type("32934094")
    cy.get('#loginbtn').click()
  
    cy.get('.mr-3 > .btn > .icon').click()
    cy.get('#nav-drawer').should('be.visible')
  
  
  })

  
  





})