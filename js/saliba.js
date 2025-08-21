function showPopup() {
    document.getElementById("popup").style.display = "flex";
}

function closePopup() {
    document.getElementById("popup").style.display = "none";
}

document.getElementById("order-form").addEventListener("submit", function(e) {
    e.preventDefault();

    let name = document.getElementById("name").value.trim();
    let address = document.getElementById("address").value.trim();
    let phone = document.getElementById("phone").value.trim();

    if (name !== "" && address !== "" && phone !== "") {
    showPopup();
    } else {
    alert("Please fill in all fields.");
    }



});

