function checkInputRong(idInput, idNoti) {
  // gọi dom tới và check xem dữ liệu có rỗng không, nếu rỗng sẽ chặn người dùng thêm vào
  var valueInput = document.getElementById(idInput).value;
  if (valueInput.length === 0) {
    document.getElementById(idNoti).innerHTML = `Vui lòng không để trống`;
    return false;
  } else {
    document.getElementById(idNoti).innerHTML = ``;
    return true;
  }
}

function checkDinhDangEmail(idInput, idNoti) {
  //viết regex để check Email
  var reGexEmail =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  var valueInput = document.getElementById(idInput).value;
  if (!reGexEmail.test(valueInput) && valueInput !== ``) {
    document.getElementById(idNoti).innerHTML = `không đúng định dạng`;
    return false;
  } else if (reGexEmail.test(valueInput) && valueInput !== ``) {
    document.getElementById(idNoti).innerHTML = ``;
    return true;
  }
}

function checkPhoneNumber(idInput, idNoti) {
  const reGetPhone = /^[0-9\-\+]{9,15}$/;
  var valueInput = document.getElementById(idInput).value;
  if (!reGetPhone.test(valueInput) && valueInput !== ``) {
    document.getElementById(
      idNoti
    ).innerHTML = `Không đúng định dạng (vd: 0908789789)`;
    return false;
  } else if (reGetPhone.test(valueInput) && valueInput !== ``) {
    document.getElementById(idNoti).innerHTML = ``;
    return true;
  }
}

checkDinhDangPass = (idInput, idtb) => {
  var reGetPass =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{0,}$/;
  var valueInput = document.getElementById(idInput).value;
  if (!reGetPass.test(valueInput) && valueInput !== ``) {
    document.getElementById(
      idtb
    ).innerHTML = `Password không đúng định dạng, password gồm 6-10 ký tự 1 ký tự số, 1 ký tự in hoa, 1 ký tự đặc biệt `;
    return false;
  } else if (reGetPass.test(valueInput) && valueInput !== ``) {
    document.getElementById(idtb).innerHTML = ``;
    return true;
  }
};
checkPassWord = (idtb, password, passwordCf) => {
  var pw = document.getElementById(password).value;
  var checkPw = document.getElementById(passwordCf).value;
  if (pw !== checkPw) {
    document.getElementById(idtb).innerHTML = `Password chưa đúng`;
    return false;
  } else {
    document.getElementById(idtb).innerHTML = ``;
    return true;
  }
};
