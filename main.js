var fakeData = [
    {
        id: 1,
        name: "Məhsul 1",
        price: 10.99,
        image: "https://azerbaijan.az/uploads/news-files/melumatlar/medeniyyet/Kulinariya/%D0%9D%D0%BE%D0%B2%D0%B0%D1%8F%D0%9F%D0%B0%D0%BF%D0%BA%D0%B0/sufrem.az-99184.jpg"
    },
    {
        id: 2,
        name: "Məhsul 2",
        price: 15.99,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKlaaukc1odItqxab4WD9b-xeEQOHiSa5L4A&usqp=CAU"
    },
    {
        id: 3,
        name: "Məhsul 3",
        price: 12.49,
        image: "https://www.premierinn.com/content/dam/global/restaurants/THY/xpi-meal-deal.jpg.pagespeed.ic.E5fhN3Jsfw.jpg"
    },
    {
        id: 4,
        name: "Məhsul 4",
        price: 9.99,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1UFLEeX-EYmD1ek6x0edfQjNZY5OuEgcg5w&usqp=CAU"
    },
    {
        id: 5,
        name: "Məhsul 5",
        price: 14.99,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyEXedkMbtO6ezWMZKRM2gCvmDRdESzDaE4UiRQ_jmHijP3JKTVgL_MaI1BjMnaRNH2CQ&usqp=CAU"
    },
    {
        id: 6,
        name: "Məhsul 6",
        price: 8.99,
        image: "https://img.freepik.com/free-photo/grilled-steak-with-fresh-vegetable-sweet-pepper-tomatoes-red-onion-pink-pepper-spices-home-made-tasty-food-concept-tasty-healthy-meal-black-stone-surface-pork-steak-with-salad_1150-44973.jpg"
    },
    {
        id: 7,
        name: "Məhsul 7",
        price: 11.99,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbXM4XJ6rsLzUdtugS_YMitqyRnEE6ZuzZUY5ocouvfd5A4kiMpRYGqdZ8C8wYK8otf_k&usqp=CAU"
    },
    {
        id: 8,
        name: "Məhsul 8",
        price: 13.99,
        image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWVhbHxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80"
    },
    {
        id: 9,
        name: "Məhsul 9",
        price: 16.99,
        image: "https://assets-global.website-files.com/5d03b4e13011831ae4624b37/61ff6b8686c6708c070e7d41_production-meal-image-e4122aa8-0fe7-4854-b6f5-e27e0c5be918.jpeg"
    },
    {
        id: 10,
        name: "Məhsul 10",
        price: 7.99,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZitsS3wuUz0uQ1vjUDwWDgt1g6fYayCsHkw&usqp=CAU"
    },
    {
        id: 11,
        name: "Məhsul 11",
        price: 10.49,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTz8nlLyY8HeUfb-ScGSFeL13JaXSjiG5FAA&usqp=CAU"
    },
    {
        id: 12,
        name: "Məhsul 12",
        price: 14.99,
        image: "https://allnutritious.com/wp-content/uploads/2019/08/keto-meal-prep-1-720x540.jpg"
    },
    {
        id: 13,
        name: "Məhsul 13",
        price: 9.99,
        image: "https://cdn.pixabay.com/photo/2014/11/05/15/57/salmon-518032_1280.jpg"
    },
    {
        id: 14,
        name: "Məhsul 14",
        price: 11.99,
        image: "https://healthyfitnessmeals.com/wp-content/uploads/2021/02/Honey-garlic-chicken-meal-prep-9.jpg"
    },
    {
        id: 15,
        name: "Məhsul 15",
        price: 13.49,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbojCpvn0yM3vdG8tyrIxDC-sHMxfLFYE4ag3dI1zsPXJICWF5f0s5N1r2JuxvnhcBvXI&usqp=CAU"
    },
    {
        id: 16,
        name: "Məhsul 16",
        price: 12.99,
        image: "https://www.foodandwine.com/thmb/TXyr0Z0j_w_GAhhM-Xe7nKZQljg=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Web_4000-green-chef-spicy-sesame-shrimp-12-a12381247b724c3697e3777b5b19df56.jpg"
    },
    {
        id: 17,
        name: "Məhsul 17",
        price: 8.99,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpzK00krv8d3FjPnvAt3vMaFKYDlJn5hyK7g&usqp=CAU"
    },
    {
        id: 18,
        name: "Məhsul 18",
        price: 9.99,
        image: "https://images.everydayhealth.com/images/healthy-meal-tips-for-type-2-diabetes-00-722x406.jpg"
    },
    {
        id: 19,
        name: "Məhsul 19",
        price: 14.99,
        image: "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/600-calorie-meal-collection-main-image-b0e5d22.jpg?quality=90&webp=true&resize=300,272"
    },
    {
        id: 20,
        name: "Məhsul 20",
        price: 10.99,
        image: "https://kmph.com/resources/media2/16x9/full/1015/center/80/6b7a7c7c-3c44-489c-9880-4a17508cdc6d-large16x9_Postworkout_meal.jpg"
    }
];
let foods = document.querySelector("#foods");
fakeData.forEach(element => {
    foods.innerHTML += `
    <div class="col mb-5">
      <div class="card h-100" data-product-id="${element.id}">
        <!-- Sale badge-->
        <div class="badge bg-dark text-white position-absolute" style="top: 0.5rem; right: 0.5rem">Sale</div>
        <!-- Product image-->
        <img class="card-img-top" src="${element.image}" alt="..." />
        <!-- Product details-->
        <div class="card-body p-4">
          <div class="text-center">
            <!-- Product name-->
            <h5 class="fw-bolder">${element.name}</h5>
            <!-- Product price-->
            $
            <span>${element.price}</span>
          </div>
        </div>
        <!-- Product actions-->
        <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
          <div class="text-center">
            <a class="btn btn-outline-dark mt-auto" id="adder-${element.id}" href="#">Add to cart</a>
          </div>
        </div>
      </div>
    </div>
  `;
});



function addToCartClicked(event) {
    let productCard = event.target.closest('.card');
    let productId = productCard.dataset.productId;
    let productName = productCard.querySelector('.fw-bolder').innerText;
    let productPrice = productCard.querySelector('span').innerText;
    let productImage = productCard.querySelector('img').src;

    let product = {
        id: productId,
        name: productName,
        price: productPrice,
        image: productImage,
        quantity: 1
    };

    let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

    let existingProductIndex = cartItems.findIndex(item => item.id === productId);

    if (existingProductIndex !== -1) {
        cartItems[existingProductIndex].quantity++;
    } else {
        cartItems.push(product);
    }

    localStorage.setItem('cartItems', JSON.stringify(cartItems));

    displayCartItems();
}

let adderButtons = document.querySelectorAll('#foods .card [id^="adder-"]');
adderButtons.forEach(function (button) {
    button.addEventListener('click', addToCartClicked);
});
  
function displayCartItems() {
    let shoppingDiv = document.querySelector("#shopping");
    let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    shoppingDiv.innerHTML = ""; 
    let totalAmount = 0;
    let totalCoount = 0;
    cartItems.forEach(item => {
      let productImage = new Image();
      productImage.src = item.image;
      productImage.style.width = "30px";
      productImage.style.height = "30px";
  
      let productInfo = document.createElement('span');
      let price = parseFloat(item.price);
      let quantity = parseInt(item.quantity);
      let totalCost = price * quantity;
      totalAmount += totalCost;  
      totalCoount += item.quantity;
      productInfo.innerHTML = `${item.name} - $${price} - cəmi: $${totalCost} <span id="boot-icon" class="bi bi-plus-circle plus" style="font-size: 20px; color: rgb(0, 128, 55); -webkit-text-stroke-width: 1.5px;"></span>
      <input type="number" value="${quantity}"> <span id="boot-icon" class="bi bi-dash-circle minus" style="font-size: 20px; color: red; -webkit-text-stroke-width: 1.2px;"></span> <span id="boot-icon" class="bi bi-trash delete" style="font-size: 20px; color: red; -webkit-text-stroke-width: 1.2px;"></span>`;
      let productContainer = document.createElement('div');
      productContainer.style.display = "inline-block";
      productContainer.style.margin = "10px";
      productContainer.append(productImage);
      productContainer.append(productInfo);
      shoppingDiv.append(productContainer);
      plusBtn(productContainer.querySelector(".plus"), item);
      minusBtn(productContainer.querySelector(".minus"), item);
      deleteBtn(productContainer.querySelector(".delete"), item);

  
    });
  
    let amountInfo = document.createElement('span');
    amountInfo.innerText = `ümumi say: ${totalCoount} Ümumi cəm: $${totalAmount.toFixed(2)}`;
    shoppingDiv.append(amountInfo);
    let countDiv = document.querySelector(".totalCount");
    countDiv.innerText = totalCoount;
  }
  
  function plusBtn(plus, item) {
   
    plus.addEventListener("click", function() {
      item.quantity++;
      
      plus.parentElement.querySelector('input').value = item.quantity;
  
      let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
      let updatedCartItems = cartItems.map(cartItem => {
        if (cartItem.id === item.id) {
          return { ...cartItem, quantity: item.quantity };
        }
        return cartItem;
      });
      localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
      displayCartItems();
      
    });
    
  }
  function minusBtn(minus, item) {
    minus.addEventListener("click", function() {
      if (item.quantity > 1) {
        item.quantity--;
      }
  
      minus.parentElement.querySelector('input').value = item.quantity;
  
      let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
      let updatedCartItems = cartItems.map(cartItem => {
        if (cartItem.id === item.id) {
          return { ...cartItem, quantity: item.quantity };
        }
        return cartItem;
      });
      localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
      displayCartItems();
    });
  }
  function deleteBtn(deleteAll, item) {
    deleteAll.addEventListener("click", function() {
        let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
        let updatedCartItems = cartItems.filter(cartItem => cartItem.id !== item.id);
        localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
        displayCartItems();
    });
  }
  displayCartItems();

window.addEventListener('load', displayCartItems);
