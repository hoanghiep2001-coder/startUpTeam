// Lanh
const searchButton = document.querySelector('.header-with-search-icon');

function search() {
    const data = "haha , hihi, hehe, hoho , Mind, Blowing, Photograpy Web Template";
    const input = document.querySelector('.header-with-search-input').value;
    const location = data.indexOf(input, 0);

    if (location < 0) {
        alert("Data is not defind")
    } else {
        alert("Data is on the: " + location)
    }
}
// hết phần của Lanh

const sliders = document.querySelectorAll('.slider')
const NextButton = document.querySelector('.body-remote-icon')
const PrevButton = document.querySelector('.body-prev-icon')
const firstSlide = document.querySelector('.body-slide-show')
sliders.forEach((slider) => {
    NextButton.onclick = function() {

        let activeSlider = document.querySelector('.slider.active').classList.remove('active')

        slider.classList.add('active')
    }

    PrevButton.onclick = function() {

        let activedSlider = document.querySelector('.slider.active').classList.remove('active')
        firstSlide.classList.add('active')
    }
})  

searchButton.onclick = search;

const imgInstas = document.querySelectorAll('.body-instagram-img-col img')

for (var i = 0; i < imgInstas.length; ++i) {
    imgInstas[i].onclick = function(e) {
        alert("Yo bro! không có link đâu bro! =))")
    }
}


// Phương
// đặt biến submit gọi đến nút gửi tin nhắn (Send Message)
const submit = document.querySelector('.js-submit-button')
const mobileSubmit = document.querySelector('.js-submit-button-2')

// gắn sự kiện cho biến submit là khi kích vào gửi tin nhắn thì sẽ chạy 1 hàm
submit.addEventListener('click', function check() {
    // đặt tất cả các biến của các ô input (cái nhập thông tin ý)
    // và lấy dữ liệu người dùng nhập vào (.value)
    const nameInput = document.querySelector('.name-input').value
    const emailInput = document.querySelector('.email-input').value
    const subjectInput = document.querySelector('.subject-input').value
    const messInput = document.querySelector('.mess-input').value
    // tạo ra 1 biến rỗng
    let empty = '';

    // Nếu từng ô nhập vào = rỗng thì in ra câu lệnh như ở dưới
    if (nameInput == empty) {
        alert("You have not import your Name yet!")
    } else if (emailInput == empty) {
        alert("You have not import your Email yet!")
    } else if (subjectInput == empty) {
        alert("You have not import your Subject yet!")
    } else if (messInput == empty) {
        alert("You have not import your Message yet!")
    } else {
        // Gọi biến gửi tin nhắn lần nữa (send message)
        let sendMess = document.querySelector('.js-submit-button')
        // đặt biến cho thanh hiện ra thông báo gửi thành công
        let successBody = document.querySelector('.success-submit-js')
        // khi ấn vào send message thì sẽ chạy 1 hàm
        // Hàm này thêm 1 class là open , đóng class là none
        // Vì đang để ẩn(none) nên open thì sẽ bỏ none đi và thêm open vào là hiện ra
        sendMess.addEventListener('click', function openSuccess() {
            successBody.classList.remove('none')
            successBody.classList.add('open')
        })
        // Đặt biến đóng thông báo gửi tin nhắn thành công 
        // nút đóng thông báo này ở trong cái thông báo gửi thành công cơ
        let closeSuccess = document.querySelector('.success-submit-js button')
        // Khi ấn vào thằng đóng thông báo thì sẽ chạy 1 hàm 
        // hàm này ngược lại với hàm openSuccess ở trên là bỏ open đi và thêm none vào
        closeSuccess.addEventListener('click', function hideSuccess() {
            successBody.classList.remove('open')
            successBody.classList.add('none')
        })
    }
})

mobileSubmit.addEventListener('click', function checkout() {
    const nameInput = document.querySelector('.name-input').value
    const emailInput = document.querySelector('.email-input').value
    const subjectInput = document.querySelector('.subject-input').value
    const messInput = document.querySelector('.mess-input').value
    let empty = '';

    if (nameInput == empty) {
        alert("You have not import your Name yet!")
    } else if (emailInput == empty) {
        alert("You have not import your Email yet!")
    } else if (subjectInput == empty) {
        alert("You have not import your Subject yet!")
    } else if (messInput == empty) {
        alert("You have not import your Message yet!")
    } else {
        let sendMess = document.querySelector('.js-submit-button')
        let successBody = document.querySelector('.success-submit-js')
        sendMess.addEventListener('click', function openSuccess() {
            successBody.classList.remove('none')
            successBody.classList.add('open')
        })
        let closeSuccess = document.querySelector('.success-submit-js button')
        closeSuccess.addEventListener('click', function hideSuccess() {
            successBody.classList.remove('open')
            successBody.classList.add('none')
        })
    }
})

// Hết phần của phương

// Trọng
// Gọi đến ảnh Mess -> Gắn sự kiện (click) -> chạy 1 hàm là hiện ra thông báo
const messButton = document.querySelector('.mess-button').addEventListener('click', function openAlert() {
    alert("Nobody Here!! Sorry!")
})
// hết phần của trọng


