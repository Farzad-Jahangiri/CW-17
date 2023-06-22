import blogfalogo from "./img/blogfa.png";
import "./style.css";
function header() {
  return (
    <div className="original">
      <div className="logo-img">
        <img src={blogfalogo} alt="image" />
      </div>
      <div className="header">
        <div className="header-left">
          <p>
            بلاگفا به شما کمک میکند تا با سرعت و سهولت اطلاعات ، خاطرات و مطالب
            و مقالات خود را در اینترنت منتشر کنید
          </p>
          <button>ثبتنام و ایجاد وبلاگ جدید</button>
        </div>
        <div className="header-right">
          <input type="text" placeholder="نام کاربری" />
          <input type="password" placeholder="رمز ورود" />
          <button>ورود به بخش مدیریت وبلاگ</button>

          <a href="#">کلمه عبور خور را فراموش کردم</a>
        </div>
      </div>
    </div>
  );
}
export default header;
