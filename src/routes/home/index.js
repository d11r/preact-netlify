import { h } from "preact";
import { useEffect } from "preact/hooks";

const Home = () => {
  /**
   * Netlify CMS's accept invite link land on home page.
   * This redirection takes it to the right place(/admin).
   */

  useEffect(() => {
    if (
      window !== undefined &&
      window.location.href.includes("#invite_token")
    ) {
      const { href } = window.location;
      window.location.href = `${href.substring(
        0,
        href.indexOf("#")
      )}admin${href.substring(href.indexOf("#"))}`;
    }
  }, []);

  return (
    <div id="betty-page">
      <a href="#" class="js-betty-nav-toggle betty-nav-toggle">
        <i></i>
      </a>

      <aside id="betty-aside">
        <div class="betty-logo">
          <a href="index.html">
            <img src="../../images/logo.png" alt="Yes Nail Logo" />
          </a>
          <h1>
            <a href="index.html">VUK Nails</a> <span>Ленинский проспект</span>
          </h1>
        </div>

        <nav id="betty-main-menu">
          <ul>
            <li>
              <a href="#">Главная страница</a>
            </li>
            <li>
              <a href="#about">О нас</a>
            </li>
            <li>
              <a href="#services">Наши услуги</a>
            </li>
            <li>
              <a href="#contact">Контакты</a>
            </li>
          </ul>
        </nav>

        <div class="betty-contact-info">
          <div class="feat-inner">
            <span class="icon et-clock"></span>
            <div class="feat-info">
              <h5>Пн-Вс</h5>
              <h6>10:00-20:00</h6>
            </div>
          </div>
        </div>
        <div class="betty-contact-info">
          <div class="feat-inner">
            <span class="icon et-phone"></span>
            <div class="feat-info">
              <h5>Телефон</h5>
              <h6>+7(929)924-34-37</h6>
            </div>
          </div>
        </div>

        <div class="betty-footer">
          <ul>
            <li>
              <a href="https://www.instagram.com/vuk_nails/">
                <i class="ti-instagram"></i>
              </a>
            </li>
          </ul>
        </div>
      </aside>

      <div id="betty-main">
        <aside id="betty-hero" class="js-fullheight">
          <div class="flexslider js-fullheight">
            <ul class="slides">
              <li
                style="
                  background-image: url(../../images/hero_1.jpg);
                "
              >
                <div class="overlay"></div>
                <div class="container-fluid">
                  <div class="row">
                    <div class="col-md-12 js-fullheight slider-text">
                      <div class="slider-text-inner">
                        <div class="desc">
                          <h1>Красота без фильтров в VUK Nails!</h1>
                          <div class="btn btn-contact">
                            <a href="tel:+7(929)924-34-37">
                              Связаться с администратором
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li
                style="
                  background-image: url(../../images/hero_2.jpg);
                "
              >
                <div class="overlay"></div>
                <div class="container-fluid">
                  <div class="row">
                    <div class="col-md-12 js-fullheight slider-text">
                      <div class="slider-text-inner">
                        <div class="desc">
                          <h1>Красота без фильтров в VUK Nails!</h1>
                          <div class="btn btn-contact">
                            <a href="tel:+7(929)924-34-37">
                              Связаться с администратором
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li
                style="
                  background-image: url(../../images/hero_3.jpg);
                "
              >
                <div class="overlay"></div>
                <div class="container-fluid">
                  <div class="row">
                    <div class="col-md-12 js-fullheight slider-text">
                      <div class="slider-text-inner">
                        <div class="desc">
                          <h1>Красота без фильтров в VUK Nails!</h1>
                          <div class="btn btn-contact">
                            <a href="tel:+7(929)924-34-37">
                              Связаться с администратором
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li
                style="
                  background-image: url(../../images/hero_4.jpg);
                "
              >
                <div class="overlay"></div>
                <div class="container-fluid">
                  <div class="row">
                    <div class="col-md-12 js-fullheight slider-text">
                      <div class="slider-text-inner">
                        <div class="desc">
                          <h1>Красота без фильтров в VUK Nails!</h1>
                          <div class="btn btn-contact">
                            <a href="tel:+7(929)924-34-37">
                              Связаться с администратором
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li
                style="
                  background-image: url(../../images/hero_5.jpg);
                "
              >
                <div class="overlay"></div>
                <div class="container-fluid">
                  <div class="row">
                    <div class="col-md-12 js-fullheight slider-text">
                      <div class="slider-text-inner">
                        <div class="desc">
                          <h1>Красота без фильтров в VUK Nails!</h1>
                          <div class="btn btn-contact">
                            <a href="tel:+7(929)924-34-37">
                              Связаться с администратором
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </aside>

        <div id="about" class="betty-about">
          <div class="container-fluid">
            <div class="row">
              <div
                class="col-md-12 animate-box"
                data-animate-effect="fadeInLeft"
              >
                <h2 class="betty-heading">О нас</h2>
                <span class="heading-meta">Мы за качественный сервис!</span>
              </div>
            </div>
            <div class="row">
              <div class="col-md-6">
                <img
                  src="../../images/olga.jpg"
                  class="img-fluid mb-30"
                  alt=""
                />
              </div>
              <div class="col-md-6">
                <p>
                  Небольшая светлая студия красоты VUK Nails открылась в новом
                  доме ЖК The MID по адресу Ленинский проспект 95Б в конце июня
                  2020 года.
                </p>
                <p>
                  Профессиональные мастера быстро и качественно окажут вам
                  следующие услуги:
                  <ul class="classic-list">
                    <li>маникюр</li>
                    <li>педикюр</li>
                    <li>уход за волосами</li>
                    <li>укладки</li>
                    <li>брови</li>
                  </ul>
                </p>
                <p>
                  Мы гарантируем вам безопасность и приятное времяпровождение.
                </p>
                <br />
                <h2 class="betty-about-heading">Ольга Вукович</h2>
              </div>
            </div>
          </div>
        </div>

        <div class="betty-team team">
          <div class="container-fluid">
            <div class="row">
              <div
                class="col-md-12 animate-box"
                data-animate-effect="fadeInLeft"
              >
                <h2 class="betty-heading">Наши мастера</h2>
                <span class="heading-meta">Мы выбрали лучших для Вас</span>
              </div>
            </div>
            <div class="row">
              <div class="col-md-6">
                <div class="item mb-30">
                  <div class="img">
                    <img src="../../images/nadezhda.jpg" alt="" />
                  </div>
                  <div class="info valign">
                    <div class="full-width">
                      <h6>Надежда</h6>
                      <span>Мастер маникюра/педикюра</span>
                      <p>Бровист</p>
                      <div class="social">
                        <div class="full-width">
                          <a
                            href="https://www.instagram.com/vuk_nails/"
                            class="icon"
                          >
                            <i class="ti-instagram"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="services" class="betty-home-services betty-services">
          <div class="container-fluid">
            <div class="row">
              <div
                class="col-md-12 animate-box"
                data-animate-effect="fadeInLeft"
              >
                <h2 class="betty-heading margin-bot">Наши услуги</h2>
              </div>
            </div>
            <div class="row">
              <div class="col-md-6">
                <div class="item">
                  <div class="position-re o-hidden">
                    <img src="../../images/services_2.jpg" alt="" />
                  </div>
                  <div class="con">
                    <a href="services">
                      <h5>Маникюр</h5>
                      <p>
                        <i class="ti-arrow-right"></i>
                      </p>
                    </a>
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="item">
                  <div class="position-re o-hidden">
                    <img src="../../images/services_4.jpg" alt="" />
                  </div>
                  <div class="con">
                    <a href="services">
                      <h5>Педикюр</h5>
                      <p>
                        <i class="ti-arrow-right"></i>
                      </p>
                    </a>
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="item">
                  <div class="position-re o-hidden">
                    <img src="../../images/services_3.jpg" alt="" />
                  </div>
                  <div class="con">
                    <a href="services">
                      <h5>Брови</h5>
                      <p>
                        <i class="ti-arrow-right"></i>
                      </p>
                    </a>
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="item">
                  <div class="position-re o-hidden">
                    <img src="../../images/services_1.jpg" alt="" />
                  </div>
                  <div class="con">
                    <a href="services">
                      <h5>Уход за волосами</h5>
                      <p>
                        <i class="ti-arrow-right"></i>
                      </p>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <hr />
        <div id="contact" class="betty-contact">
          <div class="container-fluid">
            <div class="row">
              <div
                class="col-md-12 animate-box"
                data-animate-effect="fadeInLeft"
              >
                <h2 class="betty-heading">Контакты</h2>
              </div>
            </div>
            <div class="row">
              <div class="col-md-5 mb-30">
                <div class="betty-contact-info2">
                  <div class="feat-inner2">
                    <span class="icon et-phone"></span>
                    <div class="feat-info2">
                      <h5>Телефон</h5>
                      <h6>+7(929)924-34-37</h6>
                    </div>
                  </div>
                </div>
                <div class="betty-contact-info2">
                  <div class="feat-inner2">
                    <span class="icon et-map-pin"></span>
                    <div class="feat-info2">
                      <h5>Адрес</h5>
                      <h6>ул. Ленинский проспект, д. 96 Б</h6>
                    </div>
                  </div>
                </div>
                <div class="betty-contact-info2">
                  <div class="feat-inner2">
                    <span class="icon et-notebook"></span>
                    <div class="feat-info2">
                      <h5>E-Mail</h5>
                      <h6>vuknailslp@gmail.com</h6>
                    </div>
                  </div>
                </div>
                <div class="betty-contact-info2">
                  <div class="feat-inner2">
                    <span class="icon et-clock"></span>
                    <div class="feat-info2">
                      <h5>Пн-Вс</h5>
                      <h6>10:00-20:00</h6>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-md-7">
                <form
                  method="post"
                  class="row"
                  action="https://formspree.io/mwkraepy"
                >
                  <div class="col-sm-6">
                    <div class="form-group">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Имя"
                        name="name"
                        required
                      />
                    </div>
                  </div>
                  <div class="col-sm-6">
                    <div class="form-group">
                      <input
                        type="text"
                        class="form-control"
                        name="phone"
                        placeholder="Телефон"
                      />
                    </div>
                  </div>
                  <div class="col-sm-12">
                    <div class="form-group">
                      <textarea
                        name="message"
                        id="message"
                        cols="30"
                        rows="7"
                        class="form-control"
                        placeholder="Сообщение"
                      ></textarea>
                    </div>
                  </div>
                  <div class="col-sm-12">
                    <div class="form-group">
                      <input
                        type="submit"
                        class="btn btn-contact"
                        value="Отправить"
                      />
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        <div class="betty-brands brands">
          <div class="container-fluid">
            <div class="row">
              <div
                class="col-md-12 animate-box"
                data-animate-effect="fadeInLeft"
              >
                <h2 class="betty-heading">Наши косметические средства</h2>
              </div>
            </div>
            <div class="row">
              <div class="col-md-12 owl-carousel owl-theme">
                <div class="brand-logo">
                  <img src="../../images/brand_1.jpg" alt="" />
                </div>
                <div class="brand-logo">
                  <img src="../../images/brand_2.jpg" alt="" />
                </div>
                <div class="brand-logo">
                  <img src="../../images/brand_3.jpg" alt="" />
                </div>
                <div class="brand-logo">
                  <img src="../../images/brand_4.jpg" alt="" />
                </div>
                <div class="brand-logo">
                  <img src="../../images/brand_5.jpg" alt="" />
                </div>
                <div class="brand-logo">
                  <img src="../../images/brand_6.jpg" alt="" />
                </div>
                <div class="brand-logo">
                  <img src="../../images/brand_7.jpg" alt="" />
                </div>
                <div class="brand-logo">
                  <img src="../../images/brand_8.jpg" alt="" />
                </div>
                <div class="brand-logo">
                  <img src="../../images/brand_9.jpg" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="betty-footer2">
          <div class="container-fluid">
            <div class="row">
              <div class="col-md-12 text-center">
                <div class="betty-logo">
                  <a href="index.html">
                    <img src="../../images/logo.png" alt="" />
                  </a>
                  <h2 class="text-center">
                    VUK Nails
                    <span>Ленинский проспект д. 96 Б</span>
                  </h2>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-12 text-left">
                <div class="betty-footer">
                  <p>Все права защищены</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <a href="https://wa.me/79299243437" target="_blank" rel="noopener">
        <i class="fa fa-whatsapp whatsapp-float"></i>
      </a>

      <script src="../../js/jquery.min.js"></script>
      <script src="../../js/modernizr-2.6.2.min.js"></script>
      <script src="../../js/jquery.easing.1.3.js"></script>
      <script src="../../js/bootstrap.min.js"></script>
      <script src="../../js/jquery.waypoints.min.js"></script>
      <script src="../../js/jquery.flexslider-min.js"></script>
      <script src="../../js/sticky-kit.min.js"></script>
      <script src="../../js/jquery.magnific-popup.min.js"></script>
      <script src="../../js/owl.carousel.min.js"></script>
      <script src="../../js/main.js"></script>
    </div>
  );
};

export default Home;
