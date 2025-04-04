document.addEventListener('DOMContentLoaded', function () {
    // JavaScript cho phần 1 (ví dụ: hiệu ứng hoặc tương tác nếu có)
    // (Bạn có thể thêm code cho phần 1 ở đây nếu cần)

    // JavaScript cho phần 2
    // (Bạn có thể thêm code cho phần 2 ở đây nếu cần)

    // JavaScript cho phần 3
    // (Bạn có thể thêm code cho phần 3 ở đây nếu cần)

    // JavaScript cho phần 4
    // (Bạn có thể thêm code cho phần 4 ở đây nếu cần)

    // JavaScript cho phần 5
    const imagesSection5 = document.querySelectorAll('#advertising-formats-slider .advertising-image');
    let currentIndexSection5 = 0;

    // Ẩn tất cả các ảnh trừ ảnh đầu tiên khi trang tải
    for (let i = 1; i < imagesSection5.length; i++) {
        imagesSection5[i].style.display = 'none';
    }

    function nextImageSection5() {
        imagesSection5[currentIndexSection5].style.display = 'none';
        currentIndexSection5 = (currentIndexSection5 + 1) % imagesSection5.length;
        imagesSection5[currentIndexSection5].style.display = 'block';
    }

    // Thay đổi ảnh sau mỗi 3 giây (3000 milliseconds)
    setInterval(nextImageSection5, 3000);

    // JavaScript cho phần 6
    // (Bạn có thể thêm code cho phần 6 ở đây nếu cần)

    // JavaScript cho phần 7
    // (Bạn có thể thêm code cho phần 7 ở đây nếu cần)

    // JavaScript cho phần 8
    // (Bạn có thể thêm code cho phần 8 ở đây nếu cần)

    // JavaScript cho phần 9
    // (Bạn có thể thêm code cho phần 9 ở đây nếu cần)
    // JavaScript cho phần 9 (Quy trình làm việc)
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabContents = document.querySelectorAll('.tab-content');

    // Ẩn tất cả nội dung tab trừ tab đầu tiên
    tabContents.forEach((content, index) => {
        if (index > 0) {
            content.classList.remove('active');
        }
    });

    // Thêm sự kiện click cho mỗi nút tab
    tabButtons.forEach(button => {
        button.addEventListener('click', function () {
            const tabId = this.getAttribute('data-tab');

            // Ẩn tất cả nội dung tab
            tabContents.forEach(content => {
                content.classList.remove('active');
            });

            // Hiển thị nội dung tab được chọn
            const selectedTabContent = document.getElementById(tabId);
            if (selectedTabContent) {
                selectedTabContent.classList.add('active');
            }

            // Loại bỏ class 'active' khỏi tất cả các nút tab
            tabButtons.forEach(btn => {
                btn.classList.remove('active');
            });

            // Thêm class 'active' vào nút tab hiện tại
            this.classList.add('active');
        });
    });

    // JavaScript cho phần 10
    // (Bạn có thể thêm code cho phần 10 ở đây nếu cần)
    // Lấy tất cả các câu hỏi (hoặc tiêu đề của các ô) trong phần 10
    const section10Headers = document.querySelectorAll('#section10 .item-header');
    const section10Contents = document.querySelectorAll('#section10 .item-content');
    const section10Icons = document.querySelectorAll('#section10 .toggle-icon');
    const section10Image = document.getElementById('section10-image'); // Lấy thẻ img bằng ID

    // Đảm bảo tất cả các item-content đều đóng và icon là dấu "+" khi trang tải
    section10Contents.forEach(content => {
        content.style.display = 'none';
    });
    section10Icons.forEach(icon => {
        icon.textContent = '+';
    });

    // Mở mặc định ô "Minh bạch trong chi phí và triển khai" và hiển thị ảnh tương ứng
    if (section10Headers.length > 0 && section10Contents.length > 0 && section10Icons.length > 0) {
        const firstHeader = section10Headers[0];
        const firstContent = section10Contents[0];
        const firstIcon = section10Icons[0];

        firstContent.style.display = 'block';
        firstIcon.textContent = '-';
        section10Image.src = 'https://seongon.com/wp-content/uploads/2023/12/Screen-Shot-2023-12-03-at-21.47.07.png'; // Ảnh cho ô đầu tiên
    }

    section10Headers.forEach((header, index) => {
        header.addEventListener('click', function () {
            const content = this.nextElementSibling; // Lấy phần tử kế tiếp (item-content)
            const icon = this.querySelector('.toggle-icon'); // Lấy phần tử chứa dấu "+" hoặc "-"

            // Đóng tất cả các item-content đang mở khác trong phần 10
            section10Headers.forEach((otherHeader, otherIndex) => {
                if (otherIndex !== index) {
                    const otherContent = otherHeader.nextElementSibling;
                    const otherIcon = otherHeader.querySelector('.toggle-icon');
                    if (otherContent && otherContent.style.display === 'block') {
                        otherContent.style.display = 'none';
                        if (otherIcon) {
                            otherIcon.textContent = '+';
                        }
                    }
                }
            });

            // Mở hoặc đóng item-content hiện tại
            if (content.style.display === 'block') {
                content.style.display = 'none';
                if (icon) {
                    icon.textContent = '+';
                }
            } else {
                content.style.display = 'block';
                if (icon) {
                    icon.textContent = '-';
                }
            }

            // Thay đổi ảnh bên phải dựa trên ô được click
            if (index === 0) {
                section10Image.src = 'https://seongon.com/wp-content/uploads/2023/12/Screen-Shot-2023-12-03-at-21.47.07.png'; // Ảnh cho ô "Minh bạch..."
            } else if (index === 1) {
                section10Image.src = 'https://seongon.com/wp-content/uploads/2023/12/319123580_6212964675381728_5418687332446223482_n.jpeg'; // Ảnh cho ô "Cập nhật thị trường..." - **BẠN CẦN THAY THẾ 'UPLOADED_IMAGE_URL_2' BẰNG URL THỰC TẾ CỦA HÌNH ẢNH BẠN VỪA GỬI**
            } else if (index === 2) {
                // Thêm điều kiện cho ô "Chủ động đề xuất..." và URL ảnh tương ứng nếu cần
                section10Image.src = 'https://seongon.com/wp-content/uploads/2023/12/Screen-Shot-2023-12-03-at-21.55.19.png'; // **BẠN CẦN THAY THẾ 'URL_ANH_CHO_MUC_3' BẰNG URL THỰC TẾ**
            }
            // Thêm các điều kiện else if khác cho các ô tiếp theo nếu cần
        });
    });

    // JavaScript cho phần 11
    // (Bạn có thể thêm code cho phần 11 ở đây nếu cần)

    // JavaScript cho phần 12 (Testimonial Slider)
    const sliderWrapper = document.querySelector('#section12 .testimonial-slider-wrapper');
    const slides = document.querySelectorAll('#section12 .testimonial-slide');
    const dots = document.querySelectorAll('#section12 .slider-dots .dot');
    const prevButton = document.querySelector('#section12 .prev-arrow');
    const nextButton = document.querySelector('#section12 .next-arrow');
    const slideCount = slides.length;
    const slidesPerPage = 3;
    let slideIndex = 0;

    function updateDots() {
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === Math.floor(slideIndex / slidesPerPage));
        });
    }

    function goToSlide(index) {
        if (index < 0) {
            slideIndex = Math.floor((slideCount - 1) / slidesPerPage) * slidesPerPage;
        } else if (index >= slideCount) {
            slideIndex = 0;
        } else {
            slideIndex = index;
        }
        sliderWrapper.style.transform = `translateX(-${slideIndex * (100 / slidesPerPage)}%)`;
        updateDots();
    }

    if (prevButton) {
        prevButton.addEventListener('click', () => {
            goToSlide(slideIndex - slidesPerPage);
        });
    }

    if (nextButton) {
        nextButton.addEventListener('click', () => {
            goToSlide(slideIndex + slidesPerPage);
        });
    }

    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            goToSlide(index * slidesPerPage);
        });
    });

    // Hiển thị slide đầu tiên khi trang tải
    goToSlide(0);

    // JavaScript cho phần 13 (FAQ)
    const faqQuestions = document.querySelectorAll('.faq-question');
    const faqItems = document.querySelectorAll('.faq-item');

    faqQuestions.forEach((question, index) => {
        question.addEventListener('click', function () {
            const answer = this.nextElementSibling;
            const icon = this.querySelector('.toggle-icon');
            const isAnswerVisible = answer.style.display === 'block';

            // Đóng tất cả các câu trả lời đang mở khác
            faqItems.forEach((item, i) => {
                if (i !== index) {
                    const otherAnswer = item.querySelector('.faq-answer');
                    const otherIcon = item.querySelector('.toggle-icon');
                    if (otherAnswer.style.display === 'block') {
                        otherAnswer.style.display = 'none';
                        otherIcon.textContent = '+';
                    }
                }
            });

            // Mở hoặc đóng câu trả lời hiện tại
            if (isAnswerVisible) {
                answer.style.display = 'none';
                icon.textContent = '+';
            } else {
                answer.style.display = 'block';
                icon.textContent = '-';
            }
        });
    });

    // JavaScript cho phần 14 (ví dụ: xử lý form nếu có)
    // (Bạn có thể thêm code cho phần 14 ở đây nếu cần)
});