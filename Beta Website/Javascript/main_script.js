//Menu page
//Menu toogle and filer functionality
//Changing the class of the menu_category links from active to inactive on the click event
function toggleClass(el) {
    //Declaring and initialising the menu_categories array with the anchor child elements
    var menu_categories = document.getElementById("menu_categories").children;

    //lopping through the menu_category links and making them inactive
    for (var i = 0; i < menu_categories.length; i++) {
        menu_categories[i].classList.remove("active");
    }

    //changing the currently clicked link to active
    el.classList.add("active");

    //display the respective menu items
    filter_items(el);

}

function filter_items(el) {

    //Declaring variables for the menu items
    var breakfast_items = document.getElementById("breakfast");
    var lunch_items = document.getElementById("lunch");
    var supper_items = document.getElementById("supper");
    var budget_meal_items = document.getElementById("budget_meal");
    var dessert_items = document.getElementById("dessert");

    //Changing the display property for the items to make them disappear
    breakfast_items.style.display = "none";
    lunch_items.style.display = "none";
    supper_items.style.display = "none";
    budget_meal_items.style.display = "none";
    dessert_items.style.display = "none";

    //Filtering items when the menu category link is clicked
    switch (el.innerHTML) {
        case "All":
            breakfast_items.style.display = "flex";
            lunch_items.style.display = "flex";
            supper_items.style.display = "flex";
            budget_meal_items.style.display = "flex";
            dessert_items.style.display = "flex";
            break;
        case "Breakfast":
            breakfast_items.style.display = "flex";
            break;
        case "Lunch":
            lunch_items.style.display = "flex";
            break;
        case "Supper":
            supper_items.style.display = "flex";
            break;
        case "Budget Meal":
            budget_meal_items.style.display = "flex";
            break;
        case "Dessert":
            dessert_items.style.display = "flex";
            break;
        default:
            alert("Error 'Unknown menu category'");
            break;
    }

}

//products array
var products = document.getElementsByClassName("col_30_product_card");

//Instantiating the shopping cart class
var shoppingCart = new ShoppingCart();

//Calling a function to retain the cart items
shoppingCart.getCartItems();

//Add items to cart
for (var i = 0; i < products.length - 1; i++) {
    var el = products[i].children[3].firstElementChild;

    el.addEventListener("click", function() {
        //Updating the cart
        shoppingCart.addToCart(products[i].children[1].children[1].innerHTML);

        //Storing the product inforamtion into the localStorage
        localStorage.setItem("Item image", JSON.stringify(products[i].children[0].getAttribute("src")));
        localStorage.setItem("Item name", JSON.stringify(products[i].children[1].children[0].innerHTML));
        localStorage.setItem("Item descrip", JSON.stringify(products[i].children[1].children[1].innerHTML));
        localStorage.setItem("Item price", JSON.stringify(products[i].children[2].innerHTML));
    });
}

//Shopping cart page
shoppingCart.getSelectedProducts();

//Checkout
if (document.getElementById("cardOption").checked === true) {
    document.getElementById("card_payment").style.display = "flex";
} else if (document.getElementById("paypalOption").checked === true) {
    document.getElementById("paypal_payment").style.display = "flex";

}

//Form validation
document.getElementsByClassName("web_form")[0].addEventListener("submit", function() {
    if (document.getElementsByClassName("textInput").value === "") {
        alert("Please fill in you details completelety");
    }
});