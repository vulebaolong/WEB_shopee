const template = document.createElement('template');
template.innerHTML = `
<div class="footer ">
<div class="customer_care">
    <div class="grid wide ">
        <div class="row ">
            <div class="col l-2-4">
                <ul class="customer_care_list">
                    <li class="customer_care_label">Chăm sóc khách hàng</li>
                    <li class="customer_care_item"><a href="">Trung tâm trợ giúp</a></li>
                    <li class="customer_care_item"><a href="">Shopee Blog</a></li>
                    <li class="customer_care_item"><a href="">Shopee Mail</a></li>
                    <li class="customer_care_item"><a href="">Hướng dẫn mua hàng</a></li>
                    <li class="customer_care_item"><a href="">Hướng dẫn bán hàng</a></li>
                    <li class="customer_care_item"><a href="">Thanh toán</a></li>
                    <li class="customer_care_item"><a href="">Shopee xu</a></li>
                    <li class="customer_care_item"><a href="">Vận chuyển</a></li>
                    <li class="customer_care_item"><a href="">Trả hàng & hoàn tiền</a></li>
                    <li class="customer_care_item"><a href="">Chăm sóc khách hàng</a></li>
                    <li class="customer_care_item"><a href="">Chính sách bảo hành</a></li>                            
                </ul>
            </div>
            <div class="col l-2-4">
                <ul class="customer_care_list">
                    <li class="customer_care_label">Về shoppe</li>
                    <li class="customer_care_item"><a href="">Giới thiệu về shopee việt nam</a></li>
                    <li class="customer_care_item"><a href="">Tuyển Dụng</a></li>
                    <li class="customer_care_item"><a href="">Điều Khoản Shopee</a></li>
                    <li class="customer_care_item"><a href="">Chính Sách Bảo Mật</a></li>
                    <li class="customer_care_item"><a href="">Chính Hãng</a></li>
                    <li class="customer_care_item"><a href="">Kênh Người Bán</a></li>
                    <li class="customer_care_item"><a href="">Flash Sales</a></li>
                    <li class="customer_care_item"><a href="">Chương Trình Tiếp Thị Liên Kết Shopee</a></li>
                    <li class="customer_care_item"><a href="">Liên Hệ Với Truyền Thông</a></li>                      
                </ul>
            </div>
            <div class="col l-2-4">
                <ul class="customer_care_list">
                    <li class="customer_care_label">Thanh toán</li>
                    <li class="customer_care_item_img-payment">
                        <div class="row">
                            <div class="col l-4">
                                <div class="customer_care_item_img-payment-visa" style="background-image: url(./assets/img/payment/visa.png);"> </div>
                            </div>
                            <div class="col l-4">
                                <div class="customer_care_item_img-payment-visa" style="background-image: url(./assets/img/payment/mastercard.png);"> </div>
                            </div>
                            <div class="col l-4">
                                <div class="customer_care_item_img-payment-visa" style="background-image: url(./assets/img/payment/jcb.png);"> </div>
                            </div>
                            <div class="col l-4">
                                <div class="customer_care_item_img-payment-visa" style="background-image: url(./assets/img/payment/visa.png);"> </div>
                            </div>
                            <div class="col l-4">
                                <div class="customer_care_item_img-payment-visa" style="background-image: url(./assets/img/payment/mastercard.png);"> </div>
                            </div>
                            <div class="col l-4">
                                <div class="customer_care_item_img-payment-visa" style="background-image: url(./assets/img/payment/jcb.png);"> </div>
                            </div>
                            <div class="col l-4">
                                <div class="customer_care_item_img-payment-visa" style="background-image: url(./assets/img/payment/jcb.png);"> </div>
                            </div>
                        </div>
                    </li>
                    <li class="customer_care_label">Đơn vị vẩn chuyển</li>
                    <li class="customer_care_item-transport">
                        <div class="row">
                            <div class="col l-4">
                                <div class="customer_care_item_img-payment-visa" style="background-image: url(./assets/img/transport/shopeeexpress.png);"> </div>
                            </div>
                            <div class="col l-4">
                                <div class="customer_care_item_img-payment-visa" style="background-image: url(./assets/img/transport/giaohangtietkiem.png);"> </div>
                            </div>
                            <div class="col l-4">
                                <div class="customer_care_item_img-payment-visa" style="background-image: url(./assets/img/transport/giaohangnhanh.png);"> </div>
                            </div>
                            <div class="col l-4">
                                <div class="customer_care_item_img-payment-visa" style="background-image: url(./assets/img/transport/viettelpost.png);"> </div>
                            </div>
                            <div class="col l-4">
                                <div class="customer_care_item_img-payment-visa" style="background-image: url(./assets/img/transport/vietnampot.png);"> </div>
                            </div>
                            <div class="col l-4">
                                <div class="customer_care_item_img-payment-visa" style="background-image: url(./assets/img/transport/jandt.png);"> </div>
                            </div>
                            <div class="col l-4">
                                <div class="customer_care_item_img-payment-visa" style="background-image: url(./assets/img/transport/grab.png);"> </div>
                            </div>
                            <div class="col l-4">
                                <div class="customer_care_item_img-payment-visa" style="background-image: url(./assets/img/transport/nowship.jpg);"> </div>
                            </div>
                            <div class="col l-4">
                                <div class="customer_care_item_img-payment-visa" style="background-image: url(./assets/img/transport/ninjavan.png);"> </div>
                            </div>
                            <div class="col l-4">
                                <div class="customer_care_item_img-payment-visa" style="background-image: url(./assets/img/transport/BEST-Express-PNP.png);"> </div>
                            </div>
                        </div>
                    </li>                          
                </ul>
            </div>
            <div class="col l-2-4">
                <ul class="customer_care_list">
                    <li class="customer_care_label">THEO DÕI CHÚNG TÔI TRÊN</li>
                    <li class="customer_care_item">
                        <a class="customer_care_item_Social" href="">
                            <i class="fab fa-facebook"></i>
                            <span>
                                Facebook
                            </span>
                        </a>
                    </li>
                    <li class="customer_care_item">
                        <a class="customer_care_item_Social" href="">
                            <i class="fab fa-instagram-square"></i>
                            <span>
                                Instagram
                            </span>
                        </a>
                    </li>
                    <li class="customer_care_item">
                        <a class="customer_care_item_Social" href="">
                            <i class="fab fa-linkedin"></i>
                            LinkedIn
                        </a>
                    </li>                           
                </ul>
            </div>
            <div class="col l-2-4">
                <ul class="customer_care_list">
                    <li class="customer_care_label">Tải ứng dụng Shopee ngay thôi</li>
                    <li class="customer_care_item_img">
                        <a href="">
                            <img src="./assets/img/qr_code.png" alt="" class="customer_care_item_img-qr">                                    
                        </a>
                        <a href="">
                            <img src="./assets/img/app_store.png" alt="" class="customer_care_item_img-app">
                            <img src="./assets/img/google_play.png" alt="" class="customer_care_item_img-app">
                            <img src="./assets/img/app_gallery.png" alt="" class="customer_care_item_img-app">
                        </a>
                    </li>                           
                </ul>
            </div>
            <div class="country_region">
                <span class="country_region-left" >© 2021 Shopee. Tất cả các quyền được bảo lưu.</span>
                <span class="country_region-right">
                    <ul class="country_region_list">
                        <li class="country_region_label">
                            Quốc gia & Khu vực: 
                        </li>
                        <li class="country_region_item">
                            <a href="" class="country_region_item_link">Singapore</a>
                        </li>
                        <li class="country_region_item">
                            <a href="" class="country_region_item_link">Indonesia</a>
                        </li>
                        <li class="country_region_item">
                            <a href="" class="country_region_item_link">Đài loan</a>
                        </li>
                        <li class="country_region_item">
                            <a href="" class="country_region_item_link">Thái lan</a>
                        </li>
                        <li class="country_region_item">
                            <a href="" class="country_region_item_link">Malaysia</a>
                        </li>
                        <li class="country_region_item">
                            <a href="" class="country_region_item_link">Việt Nam</a>
                        </li>
                        <li class="country_region_item">
                            <a href="" class="country_region_item_link">Philippin</a>
                        </li>
                        <li class="country_region_item">
                            <a href="" class="country_region_item_link">Brazil</a>
                        </li>
                        <li class="country_region_item">
                            <a href="" class="country_region_item_link">México</a>
                        </li>
                        <li class="country_region_item">
                            <a href="" class="country_region_item_link">Colombia</a>
                        </li>
                        <li class="country_region_item">
                            <a href="" class="country_region_item_link">Chile</a>
                        </li>
                    </ul>
                </span>
            </div>
        </div>
    </div>
</div>
<div class="law">
    <div class="law_policy">
        <ul class="law_policy_list">
            <li class="law_policy_item">Chính sách bảo mật</li>
            <li class="law_policy_item">Quy chế hoạt động</li>
            <li class="law_policy_item">Chính sách vận chuyển</li>
            <li class="law_policy_item">Chính sách trả hàng và hoàn tiền</li>
        </ul>
    </div>
    <div class="law_moiat">
        <div class="law_moiat_img">
            <a href="">
                <img class="law_moiat_img-congthuong" src="./assets/img/footer/bocongthuong.png" alt="">
            </a>
            <a href="">
                <img class="law_moiat_img-congthuong" src="./assets/img/footer/bocongthuong.png" alt="">
            </a>
            <a href="">
                <img class="law_moiat_img-congthuong" src="./assets/img/footer/bocongthuong.png" alt="">
            </a>
        </div>
        <p class="law_moiat_label">Công ty TNHH Shopee</p>
    </div>
    <div class="law_location">
        <p class="law_location_label" >Địa chỉ: Tầng 4-5-6, Tòa nhà Capital Place, số 29 đường Liễu Giai, Phường Ngọc Khánh, Quận Ba Đình, Thành phố Hà Nội, Việt Nam. Tổng đài hỗ trợ: 19001221 - Email: cskh@hotro.shopee.vn</p>
        <p class="law_location_label" >Chịu Trách Nhiệm Quản Lý Nội Dung: Nguyễn Đức Trí - Điện thoại liên hệ: 024 73081221 (ext 4678)</p>
        <p class="law_location_label" >Mã số doanh nghiệp: 0106773786 do Sở Kế hoạch & Đầu tư TP Hà Nội cấp lần đầu ngày 10/02/2015</p>
        <p class="law_location_label" >© 2015 - Bản quyền thuộc về Công ty TNHH Shopee</p>
    </div>
</div>
</div>
`

document.body.appendChild(template.content);