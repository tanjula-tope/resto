const menu = [
  { id: "pizza1", name: "ხორციანი პიცა", category: "pizza", price: 15, image: "images/pizza.jpg" },
  { id: "pizza2", name: "ვეფხისტყაოსანი პიცა", category: "pizza", price: 14, image: "images/pizza.jpg" },
  { id: "burger1", name: "ბურგერი", category: "burger", price: 12, image: "images/burger.jpg" },
  { id: "burger2", name: "ჩიზბურგერი", category: "burger", price: 13, image: "images/burger.jpg" },
  { id: "dessert1", name: "ნამცხვარი", category: "dessert", price: 5, image: "images/cake.jpg" },
  { id: "dessert2", name: "პირსინგის ტორტი", category: "dessert", price: 6, image: "images/cake.jpg" },
  { id: "drink1", name: "ყავა", category: "drink", price: 4, image: "images/coffee.jpg" },
  { id: "drink2", name: "ჩაი", category: "drink", price: 3, image: "images/coffee.jpg" }
];

const menuList = document.getElementById("menu-list");
const categoryButtons = document.querySelectorAll("#category-filters button");

function displayMenu(filteredMenu) {
  menuList.innerHTML = "";
  filteredMenu.forEach(item => {
    const card = document.createElement("div");
    card.className = "menu-card";
    card.innerHTML = `
      <img src="${item.image}" alt="${item.name}">
      <h3>${item.name}</h3>
      <p>${item.price} ₾</p>
    `;
    menuList.appendChild(card);
  });
}

// საწყისი — ყველა კატეგორია
displayMenu(menu);

// კატეგორიების კლიკი
categoryButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    categoryButtons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    const category = btn.dataset.category;
    if(category === "all") {
      displayMenu(menu);
    } else {
      displayMenu(menu.filter(item => item.category === category));
    }
  });
});
