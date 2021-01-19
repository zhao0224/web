  window.onload = function () {
      //set up var for changeimg function
      var index = 0;
      var imgs = document.getElementsByClassName("img");
      var dots = document.getElementsByClassName("dots")[0];
      var dotss = dots.children;
      var len = imgs.length;
      var timer = null;
      dotss[0].className = "active";
      //change pictures
      function ChangeImg() {
          index++;
          if (index >= len) index = 0;
          for (var i = 0; i < len; i++) {
              imgs[i].style.display = 'none';
              dotss[i].className = "quiet";
          }
          imgs[index].style.display = 'block';
          dotss[index].className = "active";
      }
      for (var i = 0; i < len; i++) {
          dotss[i].index = i;
          dotss[i].onmouseover = function () {
              for (var j = 0; j < len; j++) {
                  imgs[j].style.display = 'none';
                  dotss[j].className = "quiet";
              }
              this.className = "active";
              index = this.index;
              imgs[index].style.display = 'block';
          }
      }
      wrapper.onmouseover = function () {
          clearInterval(timer);
      }
      wrapper.onmouseout = function () {
          timer = setInterval(ChangeImg, 2000);
      }
      timer = setInterval(ChangeImg, 2000);
      //funtion to display product description
      term = window.location.search.split('id=')[1];
      document.getElementById("sub").setAttribute("disabled", "disabled");
      document.getElementById("plus").addEventListener("click", plus);
      document.getElementById("sub").addEventListener("click", subs);
      if (term !== '') {
          products.forEach(function (product) {
              if (product.id == term) {
                  document.querySelector('#title').innerHTML = product.title;
                  document.querySelector('#price').innerHTML = product.price;
                  document.querySelector('#rating').innerHTML = product.rating;
                  document.querySelector('#description').innerHTML = product.description;
                  document.querySelector('#image').src = product.image;
                  document.querySelector('#image2').src = product.image2;
                  document.querySelector('#image3').src = product.image3;
                  document.querySelector('#image4').src = product.image4;
                  document.querySelector('#image5').src = product.image5;
                  document.querySelector('#image6').src = product.image6;
              }
          });
      }
  }
  //function to display the total price
  var totalPrice = 0;
  var valueCount = 0;
  //function to calculate the total price
  function priceTotal() {
      var unitPrice = document.querySelector('#price').innerHTML;
      var count = document.getElementsByClassName("inputNum")[0].value;
      totalPrice = Number(count) * unitPrice;
      document.getElementById("tPrice").value = totalPrice.toFixed(2);
  }
  //function for plus button
  function plus() {
      valueCount++;
      document.getElementById("textNum").value = valueCount;
      if (valueCount >= 1) {
          document.getElementById("sub").removeAttribute("disabled")
          document.getElementById("plus").classList.remove("disabled")
      }
      priceTotal();
  }
  // function for subs button
  function subs() {
      valueCount--;
      document.getElementById("textNum").value = valueCount;
      if (valueCount == 0) {
          document.getElementById("sub").setAttribute("disabled", "disabled")
      }
      priceTotal();
  }
