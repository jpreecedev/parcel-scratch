describe('The Main Page', () => {
  it('successfully loads', () => {
    cy.visit('/')
  })

  it('displays correctly', () => {
    cy.get('h1').should(
      'contain',
      'A bare bones Parcel.js, React, Jest, Babel 7 starter project'
    )

    cy.get('button').should('contain', 'Show me a message')
  })

  it('shows a message when button clicked', () => {
    const stub = cy.stub()

    cy.on('window:alert', stub)

    return cy
      .get('button')
      .click()
      .then(() => {
        expect(stub.getCall(0)).to.be.calledWith('Hello, World!')
      })
  })
})
