// ôn tập hiển thị lên giao diện
let arrMonAn = [
  {
    ten: "Mi Xao",
    soLuong: 5,
    gia: 10000,
    trangThai: true,
  },
  {
    ten: "Bun Bo",
    soLuong: 3,
    gia: 15000,
    trangThai: false,
  },
  {
    ten: "Sushi",
    soLuong: 50,
    gia: 100000,
    trangThai: true,
  },
  {
    ten: "Mi cay",
    soLuong: 12,
    gia: 30000,
    trangThai: false,
  },
];

let content = "";
for (let monAn of arrMonAn) {
  let { ten, soLuong, gia, trangThai } = monAn;
  if (trangThai) {
    content += `
        <div class="col-3">
       <!-- Chứa Tên Món -->
       <h3>${ten}</h3>
       <!-- chứa số lượng món -->
       <p>${soLuong}</p>
       <!-- chứa giá tiền -->
       <p>${gia}</p>
     </div> `;
  }
}

document.getElementById("baiTap1").innerHTML = content;

// function lấy dữ liệu từ BE
function getDataShoes() {
  let promise = axios({
    url: "https://shop.cyberlearn.vn/api/Product",
    method: "GET",
  });

  promise
    .then((res) => {
      console.log(res);
      // res.data.content
      renderData(res.data.content);
    })
    .catch((err) => {
      console.log(err);
    });
}
getDataShoes();

// render dữ liệu lên giao diện
function renderData(arrGiay, idTheCha = "baiTap2") {
  let content = "";
  for (let giay of arrGiay) {
    let { image, name, shortDescription, price } = giay;

    content += `
            <div class="col-4">
          <!-- chứa hình ảnh -->
          <img
            src="${image}"
            alt="vans-black-black"
            class="w-100"
          />
          <!-- Tên sản phẩm -->
          <h4>${name}</h4>
          <!-- mô tả ngắn -->
          <p>
            ${shortDescription}
          </p>
          <!-- số tiền -->
          <p>${price}</p>
          <!-- nút chức năng mua ngay -->
          <button class="btn btn-primary">Mua Ngay</button>
        </div>`;
  }
  document.getElementById(idTheCha).innerHTML = content;
}
