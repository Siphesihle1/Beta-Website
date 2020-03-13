//Shopping cart class
function ShoppingCart() {
    //Declaring and initialialising variables
    this.storedCartItems = [];
    this.counter = document.getElementById("itemCount");

    this.getCartItems = function(items) {
        var cartItems = localStorage.getItem("cartItems");
        //Checking if the array has nothing
        if (cartItems === "undefined") {
            this.storeCartItems(items);
        } else {
            this.storedCartItems = JSON.parse(cartItems);
            this.updateCartNumValue();
        }

    };

    this.storeCartItems = function(items) {
        localStorage.setItem("cartItems", JSON.stringify(items));
        this.updateCartNumValue();
    };

    this.updateCartNumValue = function() {
        this.counter.innerHTML = this.storedCartItems.length;
    }


    this.addToCart = function(name) {
        //storing the product name into the cartItems array
        this.storedCartItems.push(name);
        this.storeCartItems(this.storedCartItems);
    };

    function populateProducts(image, name, description, price) {
        //Declaring variable for the parent element of the product array
        var productListHolder = document.getElementsByClassName("item_card_large_list")[0];

        //Product item
        var content = '<div class="item_card_large">' +
            '<img class="item_card_large_image" src="' + image + '" width="100" height="100">' +
            '<div class="item_card_info">' +
            '<p class="item_card_large_name">' + name + '</p>' +
            '<p class="item_card_large_descrip">' + description +
            '</p>' +
            ' </div>' +

            '<div class="item_card_large_links">' +
            '<a href="#">Remove</a>' +
            '<br>' +
            '<a href="#">Save for Later</a>' +
            '</div>' +
            '<div class="item_card_large_price">' +
            '<p>' + price + '</p>' +
            '<img src="logos/price-tag.png" width="30" height="30">' +
            ' </div>' +
            '</div>';

        //Appending on existing content
        productListHolder.innerHTML += content;

    }

    //Adding items to shopping cart


    this.getSelectedProducts = function() {
        //Retreiving the product information from the local storage

        for (var i = 1; i <= this.counter.innerHTML; i++) {
            var item_image = JSON.parse(localStorage.getItem("Item image"));
            var item_name = JSON.parse(localStorage.getItem("Item name"));
            var item_descrip = JSON.parse(localStorage.getItem("Item descrip"));
            var item_price = JSON.parse(localStorage.getItem("Item price"));

            //Populating the products
            populateProducts(item_image, item_name, item_descrip, item_price);
        }
    };

}