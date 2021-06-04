class Login {
    get email() {
        return cy.get("input[id='email']")
    }

    get password() {
        return cy.get("input[id='userPassword']")
    }

    get LoginBtn() {
        return cy.get("button[class='btn btn-outline-primary']")
    }

    clickLoginBtn() {
        this.LoginBtn.click()
    }

    login(email, password) {
        this.email.type(email)
        this.password.type(password)
        this.LoginBtn.click()
    }
}

export const newlogin = new Login()


