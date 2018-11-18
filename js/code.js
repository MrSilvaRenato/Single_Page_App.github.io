//display none single page javascript.
function show(containers) {
    document.getElementById("container1").style.display = 'none';
    document.getElementById("container2").style.display = 'none';
    document.getElementById("container3").style.display = 'none';
    document.getElementById("container4").style.display = 'none';    
    document.getElementById(containers).style.display = 'block';

}
//border 0 when change menu, and 1px solid white to the active menu.
function border(menus) {
document.getElementById("menu1").style.borderBottom = '0'
document.getElementById("menu2").style.borderBottom = '0'    
document.getElementById("menu3").style.borderBottom = '0'
document.getElementById("menu4").style.borderBottom = '0'
document.getElementById(menus).style.borderBottom = '2px solid white'

}

