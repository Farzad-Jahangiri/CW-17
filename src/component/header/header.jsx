// import React from 'react';
import blogfalogo from './../../icon/blogfa.png';
import './app-header.css';

function header(props) {
    return (
        <div className=''>
            <div className='logo-img'><img src={blogfalogo} alt="image" /></div>
            <div className='header'>
                <div className='header-left'>
                    <p>بلاگفا به شما کمک میکند تا با سرعت و سهولت اطلاعات ، خاطرات و مطالب و مقالات خود را در اینترنت منتشر کنید</p>
                    <button>ثبتنام و ایجاد وبلاگ جدید</button>
                </div>
                <div className='header-right'>
                    <input type="text" placeholder='نام کاربری' />
                    <input type="password" placeholder='رمز ورود' />
                    <button>ورود به بخش مدیریت وبلاگ</button>

                    <a href="#">کلمه عبور خور را فراموش کردم</a>
                </div>
            </div>

            <div className="line"><hr /><p>وبلاگهای بروز شده</p><hr /></div>

        </div>
    );
}

export default header;