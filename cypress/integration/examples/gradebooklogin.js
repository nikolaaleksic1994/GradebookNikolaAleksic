import {newlogin} from '../../../pageObjects/login.js'
import {creating} from '../../../pageObjects/creating.js'


describe('login', () =>{
    it('login page',() =>{
        cy.visit ('https://gradebook.vivifyideas.com/login')
        newlogin.clickLoginBtn()
    })
    it('login with credentials',() =>{
        newlogin.login('aleksicn99@gmail.com', 'nidza1994')
        
    })

    
})

describe ('Creating Gradebook', () =>{

    it('new proff',() => {
        creating.clickAddProf()
        creating.clickAddImage()
        creating.create('Nikola','Aleksic','https://d92mrp7hetgfk.cloudfront.net/images/sites/H2B/professor/original.jpg?1532640576')
        creating.clickSubmitBtn()
    })
})
