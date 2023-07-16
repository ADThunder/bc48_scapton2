function QLSP() {
  this.arrSanPham = [];
  this.renderGiaoDien = function (arr) {
    if (arr == undefined) {
      arr = this.arrSanPham;
    }
    content = "";
    for (var i = 0; i < arr.length; i++) {
      var sanPham = new SanPham();
      Object.assign(sanPham, arr[i]);
      //   console.log(sanPham);
      content += `
      <div class= "col-12 col-sm-6 col-lg-4">
        <div class="card">
            <img src="${sanPham.image}" class="card-img-top" id="image" alt="...">
            <div class="card-body">
                <h5 class="card-title" id="name">${sanPham.name}</h5>
                <p id="description" class="card-text">${sanPham.shortDescription}</p>
                <div class="d-flex justify-content-between align-items-center">
                    <a onclick ="layThongTinSanPham('${sanPham.id}')" id="buttonCart"  class="btn btn-success">Add cart</a>
                    <a onclick="renderDetails('${sanPham.id}')" href="./details.html?productid=${sanPham.id}" class="btn btn-primary">Buy now</a>
                    <span class="fs-5 ">${sanPham.price}$</span>
                </div>
            </div>
        </div>
      </div>`;
    }
    document.querySelector(".product_content").innerHTML = content;
    // console.log(this.arrSanPham)
  };
  this.getAllSanPham = function () {
    var promise = axios({
      method: "GET",
      url: "https://shop.cyberlearn.vn/api/Product",
    });
    promise.then((result) => {
      console.log(result);
      this.arrSanPham = result.data.content;
      console.log(this.arrSanPham);
      this.renderGiaoDien();
    });
    promise.catch((error) => {
      console.log(error);
    });
  };
  this.thongTinSanPham = function (id) {
    var promise = axios({
      method: "GET",
      url: `https://shop.cyberlearn.vn/api/Product/getbyid?id=${id}`,
    });
    promise.then((result) => {
      console.log(result);
      this.arrSanPham = result.data.content;
      console.log(this.arrSanPham);
      // this.renderCart();
      var cartName = this.arrSanPham.name;
      var cartPrice = this.arrSanPham.price;
      var cartImage = this.arrSanPham.image;
      // console.log(this.arrSanPham.name)
      // console.log(result.data.content.image)
      // console.log(result.data.content.price)
      //render ra giao diện
      var addTr = document.createElement("tr");
      addTr.innerHTML = `
      <td>
                            <img src="${cartImage}" alt="" id="image">
                            <span id="name">${cartName}</span>
                        </td>
                        <td id="price">${cartPrice}</td>
                        <td><input class="inputValueCart" type="number" value="1" min="1"></td>
                        <td>xoá</td>
      `;
      document.getElementById("tBodyCart").innerHTML += addTr.innerHTML;
      console.log(addTr);
    });
    promise.catch((error) => {
      console.log(error);
    });
  };
}
