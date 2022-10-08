//waits for HTML to render
//window.onload = () => {
        
        let id = 0;
        let table = document.getElementById('table');
        let firstNameInput = document.getElementById('firstName');
        let lastNameInput = document.getElementById('lastName');
       
       
       /* let guestsInput = document.getElementById('guests');
        let timeInput = document.getElementById('time'); */

        console.log(guestsInput);

    document.getElementById('button').addEventListener('click', (event) => {
        event.preventDefault();
        if (firstNameInput.value == '' || lastNameInput.value == ''){
            return
        }
       
        let row = table.insertRow(1);
        row.setAttribute('id', `item-${id}`);

        row.insertCell(0).innerHTML = firstNameInput.value;
        row.insertCell(1).innerHTML = lastNameInput.value;

        /*row.insertCell(2).innterHTML = guestsInput.value;
        row.insertCell(3).innterHTML = time.Input.value;*/

        firstNameInput.value = '';
        lastNameInput.value = '';
        

        id++;
    });
//};

/* FROM:https://www.javatpoint.com/how-to-create-dropdown-list-using-javascript
        var mylist = document.getElementById("myList");  
        document.getElementById("favourite").value = mylist.options[mylist.selectedIndex].text; 
        */