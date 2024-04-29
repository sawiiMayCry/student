// LOGIN

function validateLogin() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
  
    if (username === "admin" && password === "admin") {
      window.location.href = "dashboard.html";
    } else {
      alert("Prijava nije bila uspješna! Provjerite korisničko ime i lozinku.");
    }
  }
  
  
  // DODAVANJE STUDENTA
  
  function addEntry() {
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
  
    var table = document.getElementById("dataTable").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.rows.length);
    var cellFirstName = newRow.insertCell(0);
    var cellLastName = newRow.insertCell(1);
    var cellActions = newRow.insertCell(2);
    cellFirstName.innerHTML = firstName;
    cellLastName.innerHTML = lastName;
    cellActions.innerHTML = '<button class="actions" onclick="editRow(this)"><img src="assets/Edit_fill.svg" alt=""></button>' + 
                      '<button class="actions" onclick="deleteRow(this)"><img src="assets/Trash.svg" alt=""></button>';
  }
  
  
  // UREĐIVANJE STUDENATA
  var selectedRow = null;
  
  function editRow(button) {
    selectedRow = button.parentNode.parentNode;
    document.getElementById("editFirstName").value = selectedRow.cells[0].innerHTML;
    document.getElementById("editLastName").value = selectedRow.cells[1].innerHTML;
    document.getElementById("editModal").style.display = "block";
  }
  
  function saveChanges() {
    selectedRow.cells[0].innerHTML = document.getElementById("editFirstName").value;
    selectedRow.cells[1].innerHTML = document.getElementById("editLastName").value;
    closeModal();
  }

  function closeModal() {
    document.getElementById("editModal").style.display = "none";
  }

  function deleteRow(button) {
    selectedRow = button.parentNode.parentNode;
    selectedRow.parentNode.removeChild(selectedRow);
  }
  
  
  // PRETRAGA TABLICE
  function search() {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("searchInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("dataTable");
    tr = table.getElementsByTagName("tr");
  
    for (i = 0; i < tr.length; i++) {
      if (tr[i].parentNode.tagName.toLowerCase() === 'thead') {
        continue;
      }
  
      td = tr[i].getElementsByTagName("td");
      var found = false;
      for (var j = 0; j < td.length; j++) {
        if (td[j]) {
          txtValue = td[j].textContent || td[j].innerText;
          if (txtValue.toUpperCase() == filter) { 
            found = true;
            break;
          }
        }
      }
      tr[i].style.display = found ? "" : "none";
    }
  }
