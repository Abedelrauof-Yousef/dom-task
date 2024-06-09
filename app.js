let unorderList = document.querySelector("ul");
let listItem = document.createElement("li");
let fruits = [listItem, listItem, listItem, listItem, listItem];
let imgSrcs = [
  "fruits-pictures/apple.webp",
  "fruits-pictures/bannana.avif",
  "fruits-pictures/mango.jpg",
  "fruits-pictures/Orange.jpg",
  "fruits-pictures/strawberry.avif",
];
unorderList.style.listStyle = "none";
unorderList.style.marginLeft = "600px";



for (let i = 0; i < fruits.length; i++) {
    let img = document.createElement("img");
    img.src = imgSrcs[i]
    img.style.display = "block";
    img.style.width ="200px";
    fruits[i].appendChild(img)  
    unorderList.appendChild(fruits[i])  
}


