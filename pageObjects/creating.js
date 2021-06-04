class Creating {
    get addProf() {
        return cy.get(':nth-child(6) > .nav-link')
    }

    get ProfName() {
        return cy.get("input[id='input-default']")
    }

    get ProfLastName() {
        return cy.get("input[id='input-default1']")
    }

    get addImageBtn() {
        return cy.get("button[class='btn btn-image btn-primary']")
    }

    get insertImage() {
        return cy.get("input[id='__BVID__310']")
    }

    get submitBtn() {
        return cy.get("button[class='btn btn-secondary']")
    }

    clickSubmitBtn() {
        this.submitBtn.click()
    }

    clickAddImage() {
        this.addImageBtn.click()
    }
    clickAddProf() {
        this.addProf.click()
    }

    create(ProfName, ProfLastName, insertImage) {
        this.ProfName.type(ProfName)
        this.ProfLastName.type(ProfLastName)
        this.insertImage.type(insertImage)
        this.submitBtn.click()
        this.addImageBtn.click()
        this.addProf.click()
    }
}

export const creating = new Creating()