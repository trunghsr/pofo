//Dathang 
var itemList = {
    "sp001": {
        "name": "Khoai tây chiên",
        "price": 50000,
        "photo": "images/sanpham/kv1.jpg"
    },
    "sp002": {
        "name": "Súp Bào Ngư",
        "price": 350000,
        "photo": "images/sanpham/kv.jpg"
    },
    "sp003": {
        "name": "Ốc Hương Sốt Trứng Muối",
        "price": 250000,
        "photo": "images/sanpham/mon1.jpg"
    },
    "sp004": {
        "name": "Tôm Alaska Hấp",
        "price": 2150000,
        "photo": "images/sanpham/tom3.jpg"
    },
    "sp005": {
        "name": "Cá Mặt Quỷ nướng muối ớt",
        "price": 1000000,
        "photo": "images/sanpham/ca2.jpg"
    },
    "sp006": {
        "name": "Mực Nang Nướng Sa Tế",
        "price": 250000,
        "photo": "images/sanpham/muc2.jpg"
    },
    "sp007": {
        "name": "Các Loại Bia",
        "price": 20000,
        "photo": "images/sanpham/nuoc1.jpg"
    },
    "sp008": {
        "name": "CUA Biển Việt Nam",
        "price": 420000,
        "photo": "images/sanpham/cua2.jpg"
    },
    "sp009": {
        "name": "Ghẹ",
        "price": 490000,
        "photo": "images/sanpham/cua3.jpg"
    }
	 
};
function handleSearchSubmit(e) {
    console.log(e.target.txtSearch.value)
    const trinh = e.target.txtSearch.value;
    if (trinh == '') {
		alert("Xin vui lòng nhập nội dung tìm kiếm");
        return false;
		
    }
    return true;
}

function frmValidate5(frm) {
    return frm.checkValidity()
}

function addCart(code) {
    number = parseInt(document.getElementById(code).value)

    if (number == 0) {
        alert("So luong khong duoc bang 0!")
    } else
    if (typeof localStorage[code] === "undefined") {

        if (number > 100) {
            alert(`Da dat thanh cong 100 san pham!`)
            window.localStorage.setItem(code, 100)
        } else {
            alert(`Da dat thanh cong ${number} san pham!`)
            window.localStorage.setItem(code, number)
        }

    } else {
        current = parseInt(window.localStorage.getItem(code))
        if (current + number >= 100) {
            window.localStorage.setItem(code, 100)
            alert("Da dat 100 san pham thanh cong!")
        } else {
            console.log(window.localStorage.setItem(code, current + number));
            alert(`Da dat thanh cong ${current+number} san pham!`)
        }
    }
}
function showCart() {
    let totalPreTax = 0;
    var cart = document.getElementById("cartDetail");
    var bodyCart = document.createElement('tbody');
    Object.keys(localStorage).forEach(function(key) {
        console.log(localStorage[key] + "->" + key);
        const item = itemList[key];
        console.log(item);
        const photo = item.photo;
        const name = item.name;
        const price = item.price;
        const orderNumber = localStorage[key];

        totalPreTax += item.price * orderNumber

        var photoBox = document.createElement('td');
        photoBox.innerHTML = "<img src='" + photo + "' class='round-figure' width='100px' />";

        var nameBox = document.createElement('td');
        nameBox.innerText = name;

        var priceBox = document.createElement('td');
        priceBox.innerText = price;

        var orderNumberBox = document.createElement('td');
        orderNumberBox.innerText = orderNumber;

        var total = document.createElement('td');
        total.innerText = orderNumber * price;

        var deleteBox = document.createElement('td');
        deleteBox.innerHTML = `<a href=# data-code=${key} onclick = removeCart(this.dataset.code) ><i class='fa fa-trash icon-pink' ></i></a>`;

        var tr = document.createElement('tr');
        tr.appendChild(photoBox);
        tr.appendChild(nameBox);
        tr.appendChild(orderNumberBox);
        tr.appendChild(priceBox);

        tr.appendChild(total);
        tr.appendChild(deleteBox);

        bodyCart.appendChild(tr);
    });
    cart.appendChild(bodyCart);

    var totalPreTaxBox = document.getElementById("totalPreTax");
    var discountBox = document.getElementById("discount");
    var taxBox = document.getElementById("tax");
    var totalBox = document.getElementById('total');

    totalPreTaxBox.innerText = Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(totalPreTax);
    var discount = 0.1 * totalPreTax;
    discountBox.innerText = Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(discount);
    var tax = 0.1 * (totalPreTax - 0.1 * totalPreTax);
    taxBox.innerText = Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(tax);
    var total = totalPreTax - discount + tax;
    totalBox.innerText = Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(total); 
    

}

showCart()

function removeCart(code) {
    console.log(code)
    if (typeof window.localStorage[code] !== "undefined") {
        console.log("xoasasdddddd")
        window.localStorage.removeItem(code)
        document.getElementById("cartDetail")
            .getElementsByTagName("tbody")[0].remove()
        showCart()
    }
}

function getDiscountRate() {
    var d = new Date()
    var weekday = d.getDay()
    var totalMins = d.getHours() * 60 + d.getMinutes()
    if (weekday >= 1 && weekday <= 3 && ((totalMins >= 420 && totalMins <= 660) || totalMins >= 780 && totalMins <= 1020)) {
        return 0.1
    }
    return 0
}
window.onstorage = () => {
    document.getElementById("cartDetail")
        .getElementsByTagName("tbody")[0].remove()
    showCart();
}

    function myForm(){
            alert("Cảm ơn những đóng góp của bạn về chúng tôi!");
                    }
                    