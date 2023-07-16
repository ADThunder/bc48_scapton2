//Phương thức đăng ký
postUser = (duLieu) => {
  let promise = axios({
    // method
    method: "POST",
    url: "https://shop.cyberlearn.vn/api/Users/signup",
    data: duLieu,
  });
  promise.then((result) => {
    // console.log(result.data.message);
    console.log(result)
    //dom gửi thông báo lên cho người dùng
    // document.querySelector(".toast-body").innerHTML = result.data.message;
    // const toastLiveExample = document.getElementById("liveToast");
    // const toast = new bootstrap.Toast(toastLiveExample);
    // toast.show();
  });
  promise.catch((err) => {
    // dom gửi thông báo lên cho người dùng
    console.log(err.response.data.message);
    document.querySelector(".toast-body").innerHTML = err.response.data.message;
    const toastLiveExample = document.getElementById("liveToast");
    const toast = new bootstrap.Toast(toastLiveExample);
    toast.show();
  });
};

signUp = () => {
  event.preventDefault();
  //tạo một một lớp đối tượng dữ liệu để lưu giá trị từ form
  let duLieu = {
    email: "email",
    password: "password",
    name: "name",
    gender: "",
    phone: "phone",
  };

  let arrIdInput = ["email", "password", "name", "phone"];
  let arrNoti = ["tbEmail", "tbPassword", "tbName", "tbPhone"];

  for (let i = 0; i < arrIdInput.length; i++) {
    var value = document.getElementById(arrIdInput[i]).value;
    duLieu[arrIdInput[i]] = value;
    valid = checkInputRong(arrIdInput[i], arrNoti[i]);
  }
  valid &=
    checkDinhDangEmail("email", "tbEmail") &
    checkDinhDangPass("password", "tbPassword") &
    checkPassWord("tbConfirmPass", "password", "ConfirmPass") &
    checkPhoneNumber("phone", "tbPhone") & checkDinhDangTen('name', 'tbName') ;

  // lấy dũ liệu từ input type radio
  let elements = document.getElementsByName("flexRadioDefault");
  let allChecked = false;
  for (let i = 0; i < elements.length; i++) {
    if (elements.item(i).checked) {
      duLieu.gender = elements.item(i).checked;
    }
  }
  console.log(duLieu);
  console.log(valid);

  if (valid) {
    postUser(duLieu);
  }
};
