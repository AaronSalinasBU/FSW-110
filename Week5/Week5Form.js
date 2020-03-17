document.user.addEventListener("submit", function(e){
    e.preventDefault()

    const fName = document.user.firstname.value
    const lName = document.user.lastname.value
    const eMail = document.user.email.value

    alert(`
    First Name: ${fName}
    Last Name: ${lName}
    Email: ${eMail}`)
})