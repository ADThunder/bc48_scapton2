var qlsp = new QLSP();
qlsp.getAllSanPham();
// qlsp.renderCart()

var arrIdCart = ["image","name", "price"]
function layThongTinSanPham(id) {
    qlsp.thongTinSanPham(id)
    // console.log(thongTinSanPham)
    console.log(qlsp)
    trContent = "" ;
    for(var i = 0; i < arrIdCart.length; i++) {
        var sanPham = new SanPham()
        Object.assign(sanPham, arrIdCart[i])
        // document.getElementById(arrIdCart[i]).innerHTML = thongTinSanPham[arrIdCart[i]];
        trContent +=`
        <tr>
                        <td>
                            <img src="${sanPham.image}" alt="" id="image">
                            <span id="name">${sanPham.name}</span>
                        </td>
                        <td id="price">${sanPham.price}</td>
                        <td><input type="number" value="1" min="1"></td>
                        <td>xoá</td>
                    </tr>
        `
    }
    document.querySelector('.tBodyCart').innerHTML = content
    
};
