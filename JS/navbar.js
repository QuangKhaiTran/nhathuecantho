
  // Lắng nghe sự kiện nhấp chuột vào các liên kết
  document.addEventListener('DOMContentLoaded', function() {
    var links = document.querySelectorAll('.nav-link');
    links.forEach(function(link) {
      link.addEventListener('click', function(event) {
        event.preventDefault(); // Ngăn chặn hành vi mặc định của liên kết

        // Hiển thị cửa sổ popup
        showPopup(link.getAttribute('href'));
      });
    });
  });

  // Hiển thị cửa sổ popup
  function showPopup(url) {
    // Tạo cửa sổ popup
    var popup = window.open(url, 'popup', 'width=600,height=400');
    // Tùy chỉnh kích thước và vị trí cửa sổ popup
    popup.resizeTo(600, 400);
    popup.moveTo((window.innerWidth - 600) / 2, (window.innerHeight - 400) / 2);
  }
  
  // Lắng nghe sự kiện nhấp chuột vào liên kết "Tìm kiếm"
  document.addEventListener('DOMContentLoaded', function() {
    var searchLink = document.querySelector('.nav-link[href="timkiem.html"]');
    searchLink.addEventListener('click', function(event) {
      event.preventDefault(); // Ngăn chặn hành vi mặc định của liên kết

      // Hiển thị cửa sổ tìm kiếm popup
      showSearchPopup();
    });
  });

  // Hiển thị cửa sổ tìm kiếm popup
  function showSearchPopup() {
    // Tạo cửa sổ tìm kiếm popup
    var popup = window.open('timkiem.html', 'searchPopup', 'width=600,height=400');
    // Tùy chỉnh kích thước và vị trí cửa sổ tìm kiếm popup
    popup.resizeTo(600, 400);
    popup.moveTo((window.innerWidth - 600) / 2, (window.innerHeight - 400) / 2);
  }

