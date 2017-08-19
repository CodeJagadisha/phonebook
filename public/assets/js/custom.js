const btnAddPhone = document.querySelector(".btn-addphone");

btnAddPhone.addEventListener("click", () => {
    let form = new FormData(document.querySelector('#frmPhone'));
    let alertClasses = ['alert-dismissible', 'fade', 'show'];
    
    let msgStatus = "Phone couldn't be added";
    let msgGeneral = "An error occurred while adding phone";
    
    fetch('/create', {
        method: 'POST',
        body: form
    }).then(resp => {
        return resp.json();
    }).then(obj => {
        if(obj) {
            alertClasses.push('alert-success');
            msgStatus = "Congratulations!"
            msgGeneral = "Phone successfully added";
        } else {
            alertClasses.push('alert-danger');
        }

        document.querySelector("#msg-status").innerText = msgStatus;
        document.querySelector("#msg-general").innerText = msgGeneral;
        document.querySelector(".alert").classList.add(...alertClasses);
        document.querySelector(".alert").classList.remove('d-none');
        
    })
});