var mini = true;
function toggleSidebar() {
if (mini) {
console.log("opening sidebar");
document.getElementById("Updates-Sidebar").style.width = "25%";
document.getElementById("home-container04").style.marginLeft = "25%";
this.mini = false;
} else {
console.log("closing sidebar");
document.getElementById("Updates-Sidebar").style.width = "5%";
document.getElementById("home-container04").style.marginLeft = "5%";
this.mini = true;
 }
}