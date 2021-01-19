window.onload = function () {
    show_products(products);
};
//function to show products
function show_products(product_list) {
    var search_term = '';
    tempArray = [];
    document.querySelector('#search_box').value = search_term;
    // Product template for search results
    var product_template = `
        <div class = "product">
            <h3><a class="productName" href="product.html?id=<ID>"><TITLE></a></h3>
            <a href="product.html?id=<ID>"><img class="productPic" src="<IMAGE>"/></a>
            <p class="productPrice">$<PRICE></p>
            <p><RATING></p>
        </div>`;
    //function to display stars
    var star1 = '<span class="fa fa-star checked"></span>';
    var star2 = '<span class="fa fa-star checked"></span>' +
        '<span class="fa fa-star checked"></span>';
    var star3 = '<span class="fa fa-star checked"></span>' +
        '<span class="fa fa-star checked"></span>' +
        '<span class="fa fa-star checked"></span>';
    var star4 = '<span class="fa fa-star checked"></span>' + '<span class="fa fa-star checked"></span>' + '<span class="fa fa-star checked"></span>' + '<span class="fa fa-star checked"></span>';
    var star5 = '<span class="fa fa-star checked"></span>' + '<span class="fa fa-star checked"></span>' + '<span class="fa fa-star checked"></span>' + '<span class="fa fa-star checked"></span>' + '<span class="fa fa-star checked"></span>';
    document.querySelector('#product-list').innerHTML = '';
    product_list.forEach(function (product) {
        if (product.title.toLowerCase().includes(search_term.toLowerCase())) {
            tempArray.push(product);
            var starValue;
            if (product.rating == 1) {
                starValue = star1;
            } else if (product.rating == 2) {
                starValue = star2;
            } else if (product.rating == 3) {
                starValue = star3;
            } else if (product.rating == 4) {
                starValue = star4;
            } else if (product.rating == 5) {
                starValue = star5;
            }
            //use product_template and append product to search results
            var product_html = product_template.replaceAll('<ID>', product.id);
            product_html = product_html.replace('<TITLE>', product.title);
            product_html = product_html.replace('<IMAGE>', product.image);
            product_html = product_html.replace('<PRICE>', product.price);
            product_html = product_html.replace('<RATING>', starValue);
            document.querySelector('#product-list').innerHTML += product_html;
        }
    });
}
//function to sort products
function sort(field, order) {
    if (field == 'price') {
        if (order == 'l2h') {
            show_products(products.sort(function (a, b) {
                return a.price - b.price;
            }));
        } else if (order == 'h2l') {
            show_products(products.sort(function (a, b) {
                return b.price - a.price;
            }));
        }
    } else if (field == 'rating') {
        if (order == 'l2h') {
            show_products(products.sort(function (a, b) {
                return a.rating - b.rating;
            }));
        } else if (order == 'h2l') {
            show_products(products.sort(function (a, b) {
                return b.rating - a.rating;
            }));
        }
    }
}
//function to filter products
function filter(field) {
    if (field == 'price') {
        var low = document.querySelector('#f-p-low').value || 0;
        var high = document.querySelector('#f-p-high').value || 9999999;
        show_products(products.filter(function (a) {
            if (a.price >= low && a.price <= high) {
                return true;
            } else {
                return false;
            }
        }));
    } else if (field == 'rating') {
        var low = document.querySelector('#f-r-low').value || 0;
        var high = document.querySelector('#f-r-high').value || 5;

        show_products(products.filter(function (a) {
            if (a.rating >= low && a.rating <= high) {
                return true;
            } else {
                return false;
            }
        }));
    }
}
