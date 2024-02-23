document.getElementById("profile-pic").addEventListener("click", function () {
    var dropMenu = document.getElementById("drdmenu");
    if (dropMenu.style.display === "block") {
        dropMenu.style.display = "none";
    } else {
        dropMenu.style.display = "block";
    }
});

// 프로필 사진 이외의 다른 곳을 클릭하면 드롭다운 메뉴가 닫히도록 설정합니다.
document.addEventListener("click", function (event) {
    var dropMenu2 = document.getElementById("drdmenu");
    var profilePic = document.getElementById("profile-pic");
    if (event.target !== dropMenu2 && event.target !== profilePic) {
        dropMenu2.style.display = "none";
    }
});