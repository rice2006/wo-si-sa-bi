function openImg(img){
    document.getElementById("modal").style.display="flex";
    document.getElementById("modalImg").src=img.src;
}

function closeImg(){
    document.getElementById("modal").style.display="none";
}