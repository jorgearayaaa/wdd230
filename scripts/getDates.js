document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("year").textContent = new Date().getFullYear();

    var lastModified = new Date(document.lastModified);
    var options = { year: 'numeric', month: 'long', day: 'numeric' };
    document.getElementById("lastModified").textContent = "Last Modified: " + lastModified.toLocaleDateString(undefined, options);
})
