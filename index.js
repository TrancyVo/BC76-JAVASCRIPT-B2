/* JS DOM (DOCUMENT OBJECT MODEL): TỪ ĐOẠN CODE JS CÓ THỂ TƯƠNG TÁC VỚI TRANG WEB 
- GIÚP: THAY ĐỔI NỘI DUNG - THÊM CLASS - LẮNG NGHE TƯƠNG TÁC NGƯỜI DÙNG
- LỆNH DOM CÓ 02 CÁCH TƯƠNG TÁC VỚI PTỬ HTML: ID VÀ SELECTOR */

// TƯƠNG TÁC VỚI THẺ/CLASS TRONG HTML
// TRUY CẬP TỚI PTỬ HTML BẰNG ID (DOM id: .getElementById("tênid"))

// B1: TẠO ID CHO THẺ HTML
// B2: document.getElementById("tênid").

// THAY ĐỔI NỘI DUNG HTML (innerHTML):
// document.getElementById("tênId").innerHTML = "ND MỚI"
document.getElementById("demo").innerHTML = "Hôm nay trời mưa";

// THAY ĐỔI THUỘC TÍNH CSS CỦA THẺ HTML - INLINE STYLE (style):
// document.getElementById("tênId").style.tênThuộcTính = "Giá trị mới của thuộc tính"
document.getElementById("demo").style.backgroundColor = "orange";
document.getElementById("demo").style.textAlign = "center";

// LƯU TRỮ NỘI DUNG TRONG THẺ HTML (.innerHTML):
// TẠO BIẾN: let tenBien = document.getElementById("tênID").innerHTML
let theH1 = document.getElementById("demo");
let content = theH1.innerHTML;
console.log(content); //KQ: Hôm nay trời mưa
// GIỮ NỘI DUNG ĐANG CÓ & THÊM NỘI DUNG MỚI
// theH1.innerHTML = content + " Lớp được nghỉ học";
// theH1.innerHTML = theH1.innerHTML + " Lớp được nghỉ học";
theH1.innerHTML += " Lớp được nghỉ học";

// LƯU TRỮ ID CỦA THẺ HTML (.id):
// TẠO BIẾN: let tenBien = document.getElementById("tênID").id
let idTheH1 = theH1.id;
console.log(idTheH1);

// Tương tác với thẻ Img và thay đổi hình ảnh
let theImg = document.getElementById("hinhAnh");
theImg.src =
  "https://media-cdn-v2.laodong.vn/storage/newsportal/2024/6/9/1350733/447630596_8534031934.jpg";

//   Tương tác với thẻ title và thay đổi nội dung title trên tab trang web
// DOM: document.title ="ND TITLE MỚI"
document.title = "Trang của Minh Thư";

// BT1: TẠO THẺ p , DOM TỚI THẺ p: EDIT CHỮ VÀNG - NỀN ĐEN - ND CĂNG GIỮA
let theP = document.getElementById("bt1");
theP.style.color = "yellow";
theP.style.backgroundColor = "black";
theP.style.textAlign = "center";
/* LỖI: 
CANNOT READ PROPERTIES OF NULL: 90% VIẾT SAI TÊN ID
document.getelementById is not a function: VIẾT SAI CHÍNH TẢ, HÌNH THỨC TRÌNH BÀY SAI */

// TRUY CẬP PTỬ HTML BẰNG SELECTOR (DOM Selector: .querySelector)
// document.querySelector(".tênClass")
// document.querySelector(".tênClassCha .tênClassCom")
// NOTE: .querySelector KHÔNG CÓ NHẮC LỆNH THUỘC TÍNH CSS

//TẠO BIẾN LƯU TRỮ CL DOM SELECTOR
let theH3 = document.querySelector(".container .demo2");
console.log(theH3); // KQ: h3.demo2
theH3.style.fontSize = "50px";

// CÁC SỰ KIỆN USER TƯƠNG TÁC VỚI WEBSITE
// SK Onclick: DOM-Id/Selector.onclick = function () { };
// Lấy dữ liệu: DOM-Id/Selector.value

// BT1: Lấy dữ liệu từ TK-MK từ user (.value)
document.querySelector(".btn-dark").onclick = function () {
  //Xử lí các chức năng khi sự kiện Onclick được kích hoạt
  console.log("Tôi đã bị click");
  let taiKhoan = document.getElementById("taiKhoan").value;
  let matKhau = document.getElementById("matKhau").value;
  console.log(taiKhoan);
  console.log(matKhau);
};
// B1: TẠO THÔNG BÁO ĐÃ BỊ CLICK
// B2: TẠO BIẾN LƯU CL DOM-ID TỚI FORM TÀI KHOÀN VÀ FORM MẬT KHẨU SAU ĐÓ LẤY DỮ LIỆU 2 FORM BẰNG THUỘC TÍNH VALUE .value
// B3: TẠO KHAI BÁO TK-MK
/*NOTE: 
- ĐOẠN CODE JS TRONG FUNCTION CHỈ ĐƯỢC THỰC THI KHI FUNCTION ĐƯỢC KÍCH HOẠT
- NẾU CHỈ CHẠY CL DOM.value thì AUTO JS SẼ LẤY DATA USER NGAY LẬP TỨC
(NẾU CÓ SẴN SẼ LẤY LUÔN HOẶC USER CHƯA KỊP NHẬP NHƯNG CODE CHẠY TỪ TRÊN XUỐNG 
VÀ LẤY DỮ LIỆU NGAY KHI USER CHƯA NHẬP XONG => LẤY DỮ LIỆU TRỐNG)
- SỰ KIỆN ONLICK LÊN PTỬ ĐƯỢC DOM TỚI : ĐỂ LỆNH CHO JS LẤY DATA KỂ TỪ KHI USER BẮT ĐẦU CLICK CHUỘT VÀO NÚT BUTTON
 */
/* NOTE:
- TRONG TH NHIỀU PTỬ HTML CÓ CLASS TRÙNG NHAU: CODE HTML CHẠY TỪ TRÊN XUỐNG DƯỚI 
=> GẶP PTỬ NÀO CÓ CLASS ĐÓ ĐẦU TIÊN CODE JS CHỌN PTỬ ĐÓ
(querySelector sẽ tương tác với thẻ html đầu tiên thoã mãn điều kiện của selector bên trong 
nên lưu ý viết selectỏ để truy cập đúng và chính xác thẻ cần sử dụng) */

// BT2: CLICK VÀO NÚT BẬT ĐÈN => HIỆN BÓNG ĐÈN SÁNG VÀ NGƯỢC LẠI (GỚI Ý: SSK ONCLICK VÀ THAY ĐÔI SRC)
let hinhBongDen = document.getElementById("bongDen");
document.querySelector(".btn-success").onclick = function () {
  console.log("Tôi đã bị click");
  document.getElementById("bongDen").src = "./img/pic_bulbon.gif";
};
document.querySelector(".btn-danger").onclick = function () {
  console.log("Tôi đã bị click");
  hinhBongDen.src = "./img/pic_bulboff.gif";
};
/* NOTE: BIẾN ĐƯỢC TẠO RA TRONG FUNCTION - PHẠM VI HOẠT ĐỘNG TRONG FUNCTION ĐÓ 
=> NÊN TẠO BIẾN BÊN NGOÀI FUNCTION - PHẠM VI HOẠT ĐỘNG: GLOBAL */

// ONMOUSEENTER / ONMOUSELEAVE / ONMOUSEMOVE
/* Có 2 cách gọi sự kiện:
c1: DOM.id/selector.on + TÊN SỰ KIỆN  
=> DOM.id/selector.onclick | DOM.id/selector.onmouseenter
c2: DOM.id/selector.addEvenListener("TÊN SỰ KIỆN") 
=> DOM.id/selector.addEvenListener("click") | DOM.id/selector.addEvenListener("mouseenter")
*/

// ONMOUSEENTER: BẮT ĐƯỢC SỰ KIÊN TRỎ CHUỘT ĐƯỢC DI CHUYỂN VÀO PTỬ HTML NÀO ĐÓ (1 LẦN) -> TỪ ĐÓ ĐIÈU CHỈNH MỘT SỐ THAO TÁC MONG MUỐN
// ONMOUSELEAVE: BẮT ĐƯỢC SỰ KIÊN TRỎ CHUỘT ĐƯỢC DI CHUYỂN VÀO PTỬ HTML NÀO ĐÓ (NHIỀU LẦN) -> TỪ ĐÓ ĐIÈU CHỈNH MỘT SỐ THAO TÁC MONG MUỐN
// ONMOUSEMOVE: BẮT ĐƯỢC SỰ KIÊN TRỎ CHUỘT ĐƯỢC DI CHUYỂN RA KHỎI PTỬ HTML NÀO ĐÓ -> TỪ ĐÓ ĐIÈU CHỈNH MỘT SỐ THAO TÁC MONG MUỐN

// NOTE:
// MOUSEENTER/MOUSELEAVE : TƯƠNG TÁC 1 LẦN
// MOUSEMOVEMOVE: TƯƠNG TÁC LIÊN TỤC VỚI USER TRONG 1 PHẠM VI HTML NÀO ĐÓ

/*C1:
document.getElementById("bongDen").onmouseenter = function () {
  console.log("Tôi dã đi vào trong thẻ img bóng đèn");
};
document.getElementById("bongDen").onmouseleave = function () {
  console.log("Tôi dã đi vào trong thẻ img bóng đèn");
};
*/

// C2:
hinhBongDen.addEventListener("mouseenter", function () {
  console.log("Tôi dã đi vào trong thẻ img bóng đèn");
  hinhBongDen.src = "./img/pic_bulbon.gif";
});

hinhBongDen.addEventListener("mouseleave", function () {
  console.log("Tôi đã đi ra khỏi thẻ img bóng đèn");
  hinhBongDen.src = "./img/pic_bulboff.gif";
});

// TƯƠNG TÁC VỚI CLASS TRONG CSS
// I) TƯƠNG TÁC VỚI CLASS TRONG CSS - THÔNG QUA THUỘC TÍNH CLASSNAME
document.getElementById("demo_class").className = "text-green text-center";
document.getElementById("demo_class").className += " border border-primary";

document.querySelector(".btn-primary").onclick = function () {
  // document.getElementById("demo_class").className += " fs-1";
  // document.getElementById("demo_class").classList.add("fs-1");
  // document.getElementById("demo_class").classList.remove("border");
  document.querySelector("body").classList.toggle("dark");
};

// II) TƯƠNG TÁC VỚI CLASS TRONG CSS - THÔNG QUA THUỘC TÍNH CLASSLIST
// .className: onclick vào bút button => ptử html được dom tới sẽ được add class đó n lần = n lần bấm
// .classList.add("bộ class BT5 muốn thêm") -> chỉ khi nào ptử html được dom tới chưa có class đó thì khi onclick vào thẻ button còn đã có class đó rồi thì classList ko add vào nữa
// .classList.remove("bộ class BT5 muốn xoá")
// .classList.toggle("bộ class BT5 muốn thêm") -> click vào nút button, nếu thẻ được dom tới chưa có class này thì toggle sẽ add vào, click lần 2, toggle sẽ check nếu thẻ có class đó rồi sẽ tự động remove đi
// toggle = add + remoce

// HƯỚNG DẪN CÁCH TẠO HTML TỪ JS
// C1) Thêm thẻ html từ javascript bằng CHUỖI HTML:
// Step: xác định vị trí của thẻ html chuẩn bị thêm vào - .innerHTML - phép gáng = - chuối "thẻ html"
// Note: trong phần giá trị của phép gáng nếu có trên 2 nháy kép "" => JS hiểu là tách chuỗi nên nếu có thêm class vào thì giá trị của class đặt trong dấu nháy đơn '' (hoặc ngược lại: ngoài nháy đơn trong nháy kép)
document.querySelector(".demo_add_html").innerHTML +=
  "<p class='demo1'>Tôi đi học vào tối t6</p>";
// thêm biến vào chuỗi html
let hoTen = "Minh Thư";
document.querySelector(".demo_add_html").innerHTML +=
  "<p class=demo1>" + hoTen + "</p>";
// <p class="demo1">Minh Thư</p>

// C2) Thêm 1 or nhiều thẻ html bằng STRING TEMPLATE ``:
// Dữ liệu tĩnh (THẺ HTML): không thay đổi => đặt trong ``
// Dữ liệu động (BIẾN/PHÉP TÍNH): thay đổi tuỳ thuộc vào phép toán và data user nhập vào => đặt trong ${  }
// Note: STRING TEMPLATE thì không cần quan tâm việc đổi dấu nháy đơn/kép như CHUỖI HTML
// thêm thẻ html : `thẻ html`
document.querySelector(
  ".demo_add_html"
).innerHTML += `<p class="demo1">Tôi sinh năm 98</p>`;
// thêm biến: `${tenBien}`
document.querySelector(
  ".demo_add_html"
).innerHTML += `<p class="demo1"> Tôi tên là ${hoTen}</p>`;
// thêm phép tính: `${phép tính}`
document.querySelector(
  ".demo_add_html"
).innerHTML += `<p class="demo1"> Tôi có ${2 + 2} anh chị em</p>`;

// C3) Sử dụng phương thức CREATE ELEMENT (createElement) đẻ tạo chuỗi HTML
// B1: TẠO BIẾN CHỨA CL DOM CHỨA PHƯƠNG THỨC createElement ĐỂ TẠO PTỬ HTML
// let tenBien = document.createElement("tên loại thẻ html")
// B2: EDIT NỘI DUNG GIÁ TRỊ:
// tenBien.thuộc tính + phép gáng = + "giá trị của phép gáng";
// B3: THÊM CLASS CHO HTML:
// tenBien.classList.add("bộ class selector");
// tenBien.className ="bộ class selector";
// B4: VỊ TRÍ PTỬ HTML
// document.querySelector(".tên_class").appendChild(tenBien);

// VD1:
let theImg2 = document.createElement("img");
theImg2.src =
  "https://media-cdn-v2.laodong.vn/storage/newsportal/2024/6/9/1350733/447630596_8534031934.jpg";
theImg2.className = "demo2";
document.querySelector(".demo_add_html").appendChild(theImg2);

// VD2:
let theP2 = document.createElement("p");
theP2.innerHTML = "Tôi học chuyên ngành mới";
theP2.style.fontSize = "30px";
theP2.className = "demo2";
document.querySelector(".demo_add_html").appendChild(theP2);

// CHUỖI HTML / CREATE ELEMENT : TẠO THẺ ĐƠN GIẢN
// STRING TEMPLATE: TẠO LAYOUT DÀI, PHỨC TẠP
