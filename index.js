var selectedRow = null;

function onFormSubmit() {
    var formData = readFormData();
    if (selectedRow == null)
        insertNewRecord(formData);
    else
        updateRecord(formData);
    resetForm();

}
    

function readFormData() {
    var formData = {};
    formData["name"] = document.getElementById("name").value;
    formData["email"] = document.getElementById("email").value;
    formData["ID"] = document.getElementById("ID").value;
    formData["contact"] = document.getElementById("contact").value;
    return formData;
}

function insertNewRecord(data) {
    var table = document.getElementById("studentList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.name;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.email;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.clas;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.contact;
    cell5 = newRow.insertCell(4);
    cell5.innerHTML = `<a onclick="onEdit(this)"> Edit</a> <a onclick="onDelete(this)"> Delete</a>`; 
}

function resetForm() {
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("ID").value = "";
    document.getElementById("contact").value = "";
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("name").value = selectedRow.cells[0].innerHTML;
    document.getElementById("email").value = selectedRow.cells[1].innerHTML;
    document.getElementById("ID").value = selectedRow.cells[2].innerHTML;
    document.getElementById("contact").value = selectedRow.cells[3].innerHTML;
}

function onDelete(td) {
    if (confirm('Are you sure to delete this record ?')) {
        row = td.parentElement.parentElement;
        document.getElementById("studentList").deleteRow(row.rowIndex);
        resetForm();
    }
}       
document.getElementById("submit").addEventListener("click", function(event){
    event.preventDefault();
    onFormSubmit();
});     

function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.name;
    selectedRow.cells[1].innerHTML = formData.email;
    selectedRow.cells[2].innerHTML = formData.ID;
    selectedRow.cells[3].innerHTML = formData.contact;
}
