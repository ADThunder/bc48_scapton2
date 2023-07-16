var qlDetails = new QLDetails();
console.log(qlDetails);
window.onload = function () {
  const urlParams = new URLSearchParams(window.location.search);
  const myParam = urlParams.get("productid");
  console.log(myParam);
  layDetails(myParam);
};
//lấy chi tiết của sản phẩm bằng id
function layDetails(myParam) {
  var promise = axios({
    method: "GET",
    url: `https://shop.cyberlearn.vn/api/Product/getbyid?id=${myParam}`,
  });
  promise.then((result) => {
    console.log(result.data.content);
    //render details
    var nameDetail = result.data.content.name;
    var imageDetail = result.data.content.image;
    var descriptionDetail = result.data.content.description;
    var priceDetail = result.data.content.price;
    var sizeDetail = result.data.content.size;
    var relatedProductsDetail = result.data.content.relatedProducts;
    console.log(relatedProductsDetail);
    var addDiv = document.createElement("div");
    addDiv.innerHTML = `
    <div class="col-12  col-xl-6 ">
      <img id="image" src="${imageDetail}" alt="">
    </div>
    <div class="col-12  col-xl-6 ">
      <div class="product_detail_text">
        <h3 id="name">${nameDetail}</h3>
        <p id="decription">${descriptionDetail}</p>
        <span>Available Size</span>
        <div id="size" class="product_size">
          ${renderSize(sizeDetail)}
        </div>
        <span id="price">${priceDetail} $</span>
        <div class="product_number">
          <a onclick="adjustValue('quantityInput',-1); return false;" class="btn">-</a>
          <input  type="number" value="1" min="1" max="100" name="" id="quantityInput">
          <a onclick="adjustValue('quantityInput',1); return false;" class="btn">+</a>
        </div>
        <button class="btn btn-danger">Add to cart</button>
        </div>
    </div>`;
    document.getElementById("detailProducts").innerHTML = addDiv.innerHTML;
    //render relatedProduct
    var relatedContent = "";
    for (var z = 0; z < relatedProductsDetail.length; z++) {
      var relatedItem = relatedProductsDetail[z];
      console.log(relatedItem);
      var relatedItemImage = relatedItem.image;
      var relatedItemName = relatedItem.name;
      var relatedItemPrice = relatedItem.price;
      var relatedItemShortDescription = relatedItem.shortDescription;
      relatedContent += `
        <div class = "col-4">
        <div class="card ">
          <img src="${relatedItemImage}" class="card-img-top" id="image" alt="...">
          <div class="card-body">
            <h5 class="card-title" id="name">${relatedItemName}</h5>
            <p id="description" class="card-text">${relatedItemShortDescription}</p>
            <div class="d-flex justify-content-between align-items-center">
            <a href="#" class="btn btn-primary">Buy Now</a>
            <span class="text-end fs-3">${relatedItemPrice}$</span>
            </div>
          </div>
        </div>
        </div>`;
    }
    document.getElementById("relatedProductsRender").innerHTML = relatedContent;
  });
  promise.catch((error) => {
    console.log(error);
  });
}
//function renderSize
function renderSize(arrSize) {
  let contentSize = "";
  for (let size of arrSize) {
    contentSize += `
    <button class="button_size">${size}</button>
    `;
  }
  return contentSize;
}
//function tăng giảm số 
function adjustValue(inputId, adjustBy) {
  var input = document.getElementById(inputId);
  var currentValue = parseInt(input.value);
  var newValue = currentValue + adjustBy;

  if (newValue < parseInt(input.min)) {
    newValue = parseInt(input.min);
  } else if (newValue > parseInt(input.max)) {
    newValue = parseInt(input.max);
  }
  input.value = newValue;
}
