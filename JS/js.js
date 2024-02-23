document.addEventListener("DOMContentLoaded", function () {
    var profilePic = document.getElementById("profile-pic");
    var dropdownContent = document.getElementById("dropdown-content");

    // 프로필 이미지를 클릭할 때 드롭다운 메뉴를 토글합니다.
    profilePic.addEventListener("click", function () {
        dropdownContent.classList.toggle("show");
    });

    // 화면 어느 곳을 클릭하더라도 드롭다운 메뉴가 열려있다면 닫습니다.
    window.addEventListener("click", function (event) {
        if (!event.target.matches("#profile-pic")) {
            if (dropdownContent.classList.contains("show")) {
                dropdownContent.classList.remove("show");
            }
        }
    });
});