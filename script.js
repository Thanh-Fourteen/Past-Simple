// script.js
document.addEventListener('DOMContentLoaded', function() {
    // Bài 1
    document.getElementById('kiem-tra-bai1').addEventListener('click', function() {
        let dapAnBai1 = ['i went to the park yesterday.', 'she played the piano last night.', 'they ate lunch at the restaurant.', 'he studied english at school.', 'we watched a movie last weekend.'];
        kiemTraDapAn('bai1', dapAnBai1);
    });

    document.getElementById('show-dap-an-bai1').addEventListener('click', function() {
        document.getElementById('dap-an-bai1').style.display = 'block';
    });

    // Bài 2
    document.getElementById('kiem-tra-bai2').addEventListener('click', function() {
        let dapAnBai2 = ['where did john go yesterday?', 'what did they buy last week?', 'when did she finish her homework?', 'who did he play soccer with?', 'what did you eat for dinner?'];
        kiemTraDapAn('bai2', dapAnBai2);
    });

    document.getElementById('show-dap-an-bai2').addEventListener('click', function() {
        document.getElementById('dap-an-bai2').style.display = 'block';
    });

    // Bài 3
    document.getElementById('kiem-tra-bai3').addEventListener('click', function() {
        let ketQuaBai3 = document.getElementById('ket-qua-bai3');
        ketQuaBai3.innerHTML = '<p style="color: green;">Bài làm của bạn đã được ghi nhận. Hãy tự đánh giá dựa vào kiến thức đã học.</p>';
    });

    // Bài 4
    document.getElementById('kiem-tra-bai4').addEventListener('click', function() {
        let dapAnBai4 = ['visited', 'fell', 'was', 'left', 'traveled', 'returned', 'found', 'lived'];
        kiemTraDapAn('bai4', dapAnBai4);
    });

    document.getElementById('show-dap-an-bai4').addEventListener('click', function() {
        document.getElementById('dap-an-bai4').style.display = 'block';
    });

    // Hàm kiểm tra đáp án
    function kiemTraDapAn(baiTap, dapAnBai) {
        let ketQua = document.getElementById('ket-qua-' + baiTap);
        let loiSai = document.getElementById('loi-sai-' + baiTap);
        loiSai.style.display = 'block';
        loiSai.innerHTML = '';
        let soCauDung = 0;
        let soCau = dapAnBai.length; // Lấy số lượng câu hỏi

        for (let i = 1; i <= soCau; i++) {
            let dapAn = document.getElementById(baiTap + '_' + i).value.trim().toLowerCase();
            if (dapAn === dapAnBai[i - 1]) {
                soCauDung++;
            } else {
                loiSai.innerHTML += `<p>Câu ${i}: Sai, đáp án đúng là "${dapAnBai[i - 1]}".</p>`;
            }
        }
        if (soCauDung === soCau) {
            ketQua.innerHTML = '<p style="color: green;">Bạn đã làm đúng tất cả!</p>';
            loiSai.style.display = 'none';
        } else {
            ketQua.innerHTML = `<p style="color: red;">Bạn đã sai! Hãy kiểm tra lại đáp án. (${soCauDung}/${soCau} câu đúng)</p>`;
        }
    }

    // Thêm ngày tháng năm vào footer
    let ngayThangNam = document.getElementById('ngay-thang-nam');
    let ngayHienTai = new Date();
    let ngay = ngayHienTai.getDate();
    let thang = ngayHienTai.getMonth() + 1;
    let nam = ngayHienTai.getFullYear();
    ngayThangNam.textContent = ngay + "/" + thang + "/" + nam;
});