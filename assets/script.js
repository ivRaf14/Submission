const list = document.querySelector(".berubah")

function ubah() {
	list.style.color = "#ff8906";
}

const kota = document.querySelector(".Kota");

kota.addEventListener('mouseenter', function(){
	kota.style.backgroundColor = "#f25f4c";
})

kota.addEventListener('mouseleave', function(){
	kota.style.backgroundColor = "#232946";
})

const box = document.querySelector(".bio");

box.addEventListener('mouseenter', function(){
	box.style.backgroundColor = "#f25f4c";
})

box.addEventListener('mouseleave', function(){
	box.style.backgroundColor = "#232946";
})