function applyFilters(){
    brandFilter();
}

function brandFilter(){
    var allBoxes = document.getElementsByClassName("brand");
    var allChecked = document.getElementsByClassName("brandAll");
    var checked = [];
    if (allChecked[0].checked){
        for (var j=0; j < allBoxes.length; j++){
            allBoxes[j].checked = true;
        }
    }
    for (var i=0; i < allBoxes.length; i++){ 
        if (allBoxes[i].checked){
            checked.push(allBoxes[i].value)
        }
    }
    console.log(checked)
}

function sidebarPop(){
    var wrap = document.getElementById("wrapper");
    wrap.classList.toggle("sidebar-displayed")
}

