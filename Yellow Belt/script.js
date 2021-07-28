var mainImage = document.getElementById("mainImage")


function disappear(id) {
    document.getElementById(id).remove();
}

function changeImage() {
    mainImage.src="images/assets/succulents-2.jpg";
}

function revertImage() {
    mainImage.src="images/assets/succulents-1.jpg";
}

// function changeImage() {
//     document.getElementById("mainImage").src ="images/assets/succulents-2.jpg";
// }
// function revertImage() {
//     document.getElementById("mainImage").src ="images/assets/succulents-1.jpg";
// }