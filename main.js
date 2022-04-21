document.getElementById("searchBtn").addEventListener("click", Search);

function Search(){
    let colum = "1";
    let filter, table, tr, td, th;
    filter = document.getElementById('bo_city_handler_nameFilter');
    filter = filter.value.toUpperCase();
    table = document.getElementById("bo_city_handler_table");
    th = document.getElementsByTagName("th");
    tr = document.getElementsByTagName("tr");

    for (let i = 0; i < tr.length; i++) {
    console.log('teste');

        td = tr[i].getElementsByTagName("td")[colum];
        if (td) {
            if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = ""
            }
            else {
                tr[i].style.display = "none"
            }
        }
    }
}