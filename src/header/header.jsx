import React, { Component } from "react";

export default class Header extends Component {
  render() {
    return (
      <header>
        <div className="header__content">
          <div className="hello">
              <h1>hihi </h1>
          </div>
          {/* HEADER LEFT */}
          <div className="header__left">
            <a href="./index.html" className="header__webLogo">
              <img src="../img/web-logo.png" alt="web-logo" />
            </a>
          </div>
          {/* HEADER CENTER */}
          <div className="header__center">
            <a href="#" className="header__text jumer" data-scroll="homeMovies">
              Lịch chiếu
            </a>
            <a href="#cinemaBlock" className="header__text jumper">
              Cụm rạp
            </a>
            <a href="#newsBlock" className="header__text jumper">
              Tin Tức
            </a>
            <a href="#homeApp" className="header__text jumper">
              Ứng dụng
            </a>
          </div>
          {/* HEADER RIGHT */}
          <div className="header__right">
            {/* ĐĂNG NHẬP */}
            <div className="header__account header__logIn">
              <img
                src="../img/avatar.png"
                className="header__avatar"
                alt="avatar"
              />
              <a href="#" className="header__sigIn">
                Đăng nhập
              </a>
            </div>
            {/* ĐỊA ĐIỂM HỒ CHÍ MINH */}
            {/* Phần này sử dụng bootstrap4 dropdown */}
            <div className="header__account dropdown header__location">
              <img
                className="place-header"
                src="../img/location-header.png"
                alt="location"
              />
              <div
                className="dropdown-toggle"
                data-toggle="dropdown"
                aria-expanded="false"
              >
                Hồ Chí Minh
              </div>
              <ul className="dropdown-menu selectScroll">
                <li className="ng-scope">
                  <a href="#" className="ng-bingding">
                    Hồ Chí Minh
                  </a>
                </li>
                <li className="ng-scope">
                  <a href="#" className="ng-bingding">
                    Hà Nội
                  </a>
                </li>
                <li className="ng-scope">
                  <a href="#" className="ng-bingding">
                    Đà Nẵng
                  </a>
                </li>
                <li className="ng-scope">
                  <a href="#" className="ng-bingding">
                    Hải Phòng
                  </a>
                </li>
                <li className="ng-scope">
                  <a href="#" className="ng-bingding">
                    Biên Hòa
                  </a>
                </li>
                <li className="ng-scope">
                  <a href="#" className="ng-bingding">
                    Nha Trang
                  </a>
                </li>
                <li className="ng-scope">
                  <a href="#" className="ng-bingding">
                    Bình Dương
                  </a>
                </li>
                <li className="ng-scope">
                  <a href="#" className="ng-bingding">
                    Phan Thiết
                  </a>
                </li>
                <li className="ng-scope">
                  <a href="#" className="ng-bingding">
                    Hạ Long
                  </a>
                </li>
                <li className="ng-scope">
                  <a href="#" className="ng-bingding">
                    Cần Thơ
                  </a>
                </li>
                <li className="ng-scope">
                  <a href="#" className="ng-bingding">
                    Vũng Tàu
                  </a>
                </li>
                <li className="ng-scope">
                  <a href="#" className="ng-bingding">
                    Quy Nhơn
                  </a>
                </li>
                <li className="ng-scope">
                  <a href="#" className="ng-bingding">
                    Huế
                  </a>
                </li>
                <li className="ng-scope">
                  <a href="#" className="ng-bingding">
                    Long Xuyên
                  </a>
                </li>
                <li className="ng-scope">
                  <a href="#" className="ng-bingding">
                    Thái Nguyên
                  </a>
                </li>
                <li className="ng-scope">
                  <a href="#" className="ng-bingding">
                    Buôn Ma Thuột
                  </a>
                </li>
                <li className="ng-scope">
                  <a href="#" className="ng-bingding">
                    Bắc Giang
                  </a>
                </li>
                <li className="ng-scope">
                  <a href="#" className="ng-bingding">
                    Bến Tre
                  </a>
                </li>
                <li className="ng-scope">
                  <a href="#" className="ng-bingding">
                    Việt Trì
                  </a>
                </li>
                <li className="ng-scope">
                  <a href="#" className="ng-bingding">
                    Ninh Bình
                  </a>
                </li>
                <li className="ng-scope">
                  <a href="#" className="ng-bingding">
                    Thái Bình
                  </a>
                </li>
                <li className="ng-scope">
                  <a href="#" className="ng-bingding">
                    Vinh
                  </a>
                </li>
                <li className="ng-scope">
                  <a href="#" className="ng-bingding">
                    Bảo Lộc
                  </a>
                </li>
                <li className="ng-scope">
                  <a href="#" className="ng-bingding">
                    Đà Lạt
                  </a>
                </li>
                <li className="ng-scope">
                  <a href="#" className="ng-bingding">
                    Trà Vinh
                  </a>
                </li>
                <li className="ng-scope">
                  <a href="#" className="ng-bingding">
                    Yên Bái
                  </a>
                </li>
                <li className="ng-scope">
                  <a href="#" className="ng-bingding">
                    Kiên Giang
                  </a>
                </li>
                <li className="ng-scope">
                  <a href="#" className="ng-bingding">
                    Vĩnh Long
                  </a>
                </li>
                <li className="ng-scope">
                  <a href="#" className="ng-bingding">
                    Cà Mau
                  </a>
                </li>
                <li className="ng-scope">
                  <a href="#" className="ng-bingding">
                    Hậu Giang
                  </a>
                </li>
                <li className="ng-scope">
                  <a href="#" className="ng-bingding">
                    Tây Ninh
                  </a>
                </li>
                <li className="ng-scope">
                  <a href="#" className="ng-bingding">
                    Tuyên Quang
                  </a>
                </li>
                <li className="ng-scope">
                  <a href="#" className="ng-bingding">
                    Thanh Hóa
                  </a>
                </li>
                <li className="ng-scope">
                  <a href="#" className="ng-bingding">
                    Nam Định
                  </a>
                </li>
                <li className="ng-scope">
                  <a href="#" className="ng-bingding">
                    Hải Dương
                  </a>
                </li>
                <li className="ng-scope">
                  <a href="#" className="ng-bingding">
                    Gia Lai
                  </a>
                </li>
                <li className="ng-scope">
                  <a href="#" className="ng-bingding">
                    Hà Tĩnh
                  </a>
                </li>
                <li className="ng-scope">
                  <a href="#" className="ng-bingding">
                    Phú Yên
                  </a>
                </li>
                <li className="ng-scope">
                  <a href="#" className="ng-bingding">
                    Bạc Liêu
                  </a>
                </li>
                <li className="ng-scope">
                  <a href="#" className="ng-bingding">
                    Long An
                  </a>
                </li>
                <li className="ng-scope">
                  <a href="#" className="ng-bingding">
                    Đồng Hới
                  </a>
                </li>
                <li className="ng-scope">
                  <a href="#" className="ng-bingding">
                    Hà Nam
                  </a>
                </li>
                <li className="ng-scope">
                  <a href="#" className="ng-bingding">
                    Bắc Ninh
                  </a>
                </li>
                <li className="ng-scope">
                  <a href="#" className="ng-bingding">
                    Quảng Trị
                  </a>
                </li>
                <li className="ng-scope">
                  <a href="#" className="ng-bingding">
                    Kon Tum
                  </a>
                </li>
                <li className="ng-scope">
                  <a href="#" className="ng-bingding">
                    Sóc Trăng
                  </a>
                </li>
                <li className="ng-scope">
                  <a href="#" className="ng-bingding">
                    Sơn La
                  </a>
                </li>
                <li className="ng-scope">
                  <a href="#" className="ng-bingding">
                    Lạng Sơn
                  </a>
                </li>
                <li className="ng-scope">
                  <a href="#" className="ng-bingding">
                    Quảng Ngãi
                  </a>
                </li>
                <li className="ng-scope">
                  <a href="#" className="ng-bingding">
                    Mỹ Tho
                  </a>
                </li>
                <li className="ng-scope">
                  <a href="#" className="ng-bingding">
                    Đồng Tháp
                  </a>
                </li>
                <li className="ng-scope">
                  <a href="#" className="ng-bingding">
                    Hưng Yên
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
    );
  }
}
