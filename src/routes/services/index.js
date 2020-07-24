import { h } from "preact";
import { Link } from "preact-router/match";

const Services = () => {
  return (
    <div id="betty-page">
      <a href="#" class="js-betty-nav-toggle betty-nav-toggle">
        <i></i>
      </a>

      <aside id="betty-aside">
        <div class="betty-logo">
          <a href="index.html">
            <img src="../../images/logo.png" alt="" />
          </a>
          <h1>
            <a href="index.html">VUK Nails</a> <span>Center of Beauty</span>
          </h1>
        </div>

        <nav id="betty-main-menu">
          <ul>
            <li>
              <a href="/">Главная страница</a>
            </li>
            <li>
              <a href="/#about">О нас</a>
            </li>
            <li>
              <a href="/#services">Наши услуги</a>
            </li>
            <li>
              <a href="/#contact">Контакты</a>
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
              <a href="#">
                <i class="ti-instagram"></i>
              </a>
            </li>
          </ul>
        </div>
      </aside>

      <div id="betty-main">
        <div class="betty-services">
          <div class="container-fluid">
            <div class="row">
              <div
                class="col-md-8 animate-box"
                data-animate-effect="fadeInLeft"
              >
                <div class="mb-30" id="manikir">
                  <img
                    src="../../images/services_2.jpg"
                    class="img-fluid mb-30"
                    alt=""
                  />
                  <h3>Маникюр</h3>
                  <p>
                    Ухоженные руки – визитная карточка каждой уважающей себя
                    девушки и женщины, а красивый и главное правильный маникюр –
                    неотъемлемая часть имиджа, определяющего стиль.
                  </p>
                </div>

                <div class="row services-price mb-30">
                  <div class="col-md-12">
                    <div class="services-price-info">
                      <h5 class="title">
                        Маникюр без покрытия <span class="price">700 ₽ </span>
                      </h5>
                    </div>
                    <div class="services-price-info">
                      <h5 class="title">
                        Маникюр + лак обычный <span class="price">1200 ₽</span>
                      </h5>
                    </div>
                    <div class="services-price-info">
                      <h5 class="title">
                        Маникюр + гель-лак Vogue, Nail Republic
                        <span class="price">1350 ₽ </span>
                      </h5>
                    </div>
                    <div class="services-price-info">
                      <h5 class="title">
                        Маникюр + гель-лак Mistique
                        <span class="price">1450 ₽ </span>
                      </h5>
                    </div>
                    <div class="services-price-info">
                      <h5 class="title">
                        Комби (аппаратный ) маникюр без покрытия
                        <span class="price">800 ₽ </span>
                      </h5>
                    </div>
                    <div class="services-price-info">
                      <h5 class="title">
                        Комби (аппаратный) маникюр + гель-лак Vogue, Nail
                        Republic
                        <span class="price">1500 ₽ </span>
                      </h5>
                    </div>
                    <div class="services-price-info">
                      <h5 class="title">
                        Комбинированный (аппаратный) маникюр + гель-лак Mistique
                        <span class="price">1600 ₽ </span>
                      </h5>
                    </div>
                    <div class="services-price-info">
                      <h5 class="title">
                        Детский маникюр (до 13 лет)
                        <span class="price">350 ₽ </span>
                      </h5>
                    </div>
                    <div class="services-price-info">
                      <h5 class="title">
                        Наращивание ногтей
                        <span class="price">3200 ₽ </span>
                        <p>маникюр, наращивание, покрытие</p>
                      </h5>
                    </div>
                    <div class="services-price-info">
                      <h5 class="title">
                        Коррекция наращивание
                        <span class="price">2200 ₽ </span>
                        <p>снятие маникюр, укрепление гелем, покрытие</p>
                      </h5>
                    </div>

                    <h5>Дополнительно</h5>
                    <div class="services-price-info">
                      <h5 class="title">
                        Снятие нарощенных ногтей
                        <span class="price">900 ₽ </span>
                      </h5>
                    </div>

                    <div class="services-price-info">
                      <h5 class="title">
                        Снятие нарощенных ногтей
                        <span class="price">900 ₽ </span>
                      </h5>
                    </div>
                    <div class="services-price-info">
                      <h5 class="title">
                        Снятие укрепления
                        <span class="price">500 ₽ </span>
                      </h5>
                    </div>
                    <div class="services-price-info">
                      <h5 class="title">
                        Ремонт акриль/гель (1 пальчик)
                        <span class="price">150 ₽ </span>
                      </h5>
                    </div>

                    <h5>Лечебные Системы</h5>
                    <div class="services-price-info">
                      <h5 class="title">
                        Лечебное покрытие VITA GEL
                        <span class="price">500 ₽</span>
                      </h5>
                    </div>

                    <h5>Дизайны</h5>
                    <div class="services-price-info">
                      <h5 class="title">
                        Лунный, обратный френч, втирка, легкий
                        <span class="price">50 ₽ один пальчик </span>
                      </h5>
                    </div>
                    <div class="services-price-info">
                      <h5 class="title">
                        Омбре, френч, слайдер, сложный
                        <span class="price">100 ₽ один пальчик </span>
                      </h5>
                    </div>
                    <div class="services-price-info">
                      <h5 class="title">
                        French
                        <span class="price">400 ₽</span>
                      </h5>
                    </div>
                    <div class="services-price-info">
                      <h5 class="title">
                        Художественная роспись
                        <span class="price">350 ₽</span>
                      </h5>
                    </div>
                    <div class="services-price-info">
                      <h5 class="title">
                        Стразы
                        <span class="price">
                          200-500 ₽ (зависит от количества)
                        </span>
                      </h5>
                    </div>
                  </div>
                </div>

                <div class="mb-30" id="pedikir">
                  <img
                    src="../../images/services_4.jpg"
                    class="img-fluid mb-30"
                    alt=""
                  />
                  <h3>Педикюр</h3>
                  <p>
                    Неотъемлемый «аксессуар» современной девушки в любое время
                    года, а вот про педикюр, к сожалению, многие забывают с
                    наступлением холодов. Но наши ноги, как и руки, нуждаются в
                    круглогодичном уходе. Существует заблуждение, что педикюр —
                    это уход только за ногтями.
                  </p>
                  <p>
                    Однако на самом деле — это комплексный уход за ногтями и
                    кожей стоп, включающий в себя удаление огрубевших частиц,
                    мозолей, натоптышей и коррекцию формы ногтей. Кроме того,
                    педикюр способен решить не только эстетические проблемы, но
                    и медицинские: неприятный запах, грибок, глубокие трещины и
                    вросшие ногти могут исчезнуть, если вы будете посещать
                    нашего мастера хотя бы раз в месяц.
                  </p>
                </div>
                <div class="row services-price mb-30">
                  <div class="col-md-12">
                    <div class="services-price-info">
                      <h5 class="title">
                        Классический педикюр без покрытия
                        <span class="price">1150 ₽ </span>
                      </h5>
                    </div>
                    <div class="services-price-info">
                      <h5 class="title">
                        Классический педикюр + лак
                        <span class="price">1600 ₽</span>
                      </h5>
                    </div>
                    <div class="services-price-info">
                      <h5 class="title">
                        Классический педикюр + гель-лак Vogue, Nail Republic
                        <span class="price">1900 ₽ </span>
                      </h5>
                    </div>
                    <div class="services-price-info">
                      <h5 class="title">
                        Классический педикюр + гель-лак Mystique
                        <span class="price">2100 ₽ </span>
                      </h5>
                    </div>
                    <div class="services-price-info">
                      <h5 class="title">
                        Комбинированный (аппаратный) педикюр без покрытия
                        <span class="price">1450 ₽ </span>
                      </h5>
                    </div>
                    <div class="services-price-info">
                      <h5 class="title">
                        Комбинированный (аппаратный) + обычный лак
                        <span class="price">1900 ₽ </span>
                      </h5>
                    </div>
                    <div class="services-price-info">
                      <h5 class="title">
                        Комбинированный (аппаратный) + гель-лак Vogue, Nail
                        Republic
                        <span class="price">2200 ₽ </span>
                      </h5>
                    </div>
                    <div class="services-price-info">
                      <h5 class="title">
                        Комбинированный (аппаратный ) + гель-лак Mistique -
                        <span class="price">2400 ₽ </span>
                      </h5>
                    </div>
                    <div class="services-price-info">
                      <h5 class="title">
                        Детский педикюр (до 13 лет)
                        <span class="price">600 ₽ </span>
                      </h5>
                    </div>
                  </div>
                </div>
                <div class="mb-30" id="brovi">
                  <img
                    src="../../images/services_3.jpg"
                    class="img-fluid mb-30"
                    alt=""
                  />
                  <h3>Брови</h3>
                  <p>
                    Красивые, ухоженные брови имеют большое значение в создании
                    стильного и модного образа. Правильная форма бровей делает
                    взгляд более открытым и выразительным, а глаза при
                    подходящей вам форме бровей, кажутся больше.
                  </p>
                </div>

                <div class="row services-price mb-30">
                  <div class="col-md-12">
                    <div class="services-price-info">
                      <h5 class="title">
                        Форма бровей пинцет/нить
                        <span class="price">900-1000 ₽ </span>
                      </h5>
                    </div>
                    <div class="services-price-info">
                      <h5 class="title">
                        Коррекция + окрашивание бровей
                        <span class="price">1200 ₽</span>
                      </h5>
                    </div>
                    <div class="services-price-info">
                      <h5 class="title">
                        Окрашивание бровей краска/хна
                        <span class="price">700-800 ₽ </span>
                      </h5>
                    </div>
                    <div class="services-price-info">
                      <h5 class="title">
                        Коррекция бровей пинцет/нить
                        <span class="price">600-700 ₽ </span>
                      </h5>
                    </div>
                    <div class="services-price-info">
                      <h5 class="title">
                        Удаление усиков ниткой/воском
                        <span class="price">300 ₽ </span>
                      </h5>
                    </div>
                  </div>
                </div>
                <div class="mb-30" id="uhodi">
                  <img
                    src="../../images/services_1.jpg"
                    class="img-fluid mb-30"
                    alt=""
                  />
                  <h3>Уходы за волосами</h3>
                  <p>
                    Шикарные волосы как визитная карточка для каждой женщины.
                    Красота женских волос многогранна - великолепны волосы
                    прямые или вьющиеся, светлые или темные, гладкие и
                    шелковистые. Многообразие женских причесок объединяет одно -
                    волосы должны быть здоровыми, красивыми и блестящими.
                  </p>
                </div>

                <div class="row services-price mb-30">
                  <div class="col-md-12">
                    <div class="services-price-info">
                      <h5 class="title">
                        Без мытья /с мытьём
                        <span class="price">500/1000 ₽ </span>
                      </h5>
                    </div>
                    <div class="services-price-info">
                      <h5 class="title">
                        Брашинг, плойки, по форме
                        <span class="price">1500-2000 ₽</span>
                      </h5>
                    </div>
                    <div class="services-price-info">
                      <h5 class="title">
                        Вечерняя Прическа
                        <span class="price">1000-1500 ₽</span>
                      </h5>
                    </div>
                    <div class="services-price-info">
                      <h5 class="title">
                        Коррекция бровей пинцет/нить
                        <span class="price">600-700 ₽ </span>
                      </h5>
                    </div>
                    <div class="services-price-info">
                      <h5 class="title">
                        Удаление усиков ниткой/воском
                        <span class="price">300 ₽ </span>
                      </h5>
                    </div>

                    <h5>Дополнительные Услуги</h5>
                    <div class="services-price-info">
                      <h5 class="title">
                        Антивозрастной уход мгновенного действия
                        <span class="price">2100/2400/2700/3000 ₽ </span>
                        <p>ALTEREGO</p>
                      </h5>
                    </div>
                    <div class="services-price-info">
                      <h5 class="title">
                        Уход для увлажнения волос
                        <span class="price">900/1200/1500/1800 ₽ </span>
                        <p>HYDRATE</p>
                      </h5>
                    </div>
                    <div class="services-price-info">
                      <h5 class="title">
                        Дисциплинирующий уход для пушащихся волос
                        <span class="price">900/1200/1500/1800 ₽</span>
                        <p>EGOLISS</p>
                      </h5>
                    </div>
                  </div>
                </div>
              </div>

              <div
                class="col-md-4 animate-box"
                data-animate-effect="fadeInLeft"
              >
                <div class="betty-sidebar-part">
                  <div class="betty-sidebar-block betty-sidebar-block-categories">
                    <div class="betty-sidebar-block-title">Наши услуги</div>
                    <div class="betty-sidebar-block-content">
                      <ul class="ul1">
                        <li>
                          <a href="#manikir">Маникюр</a>
                        </li>
                        <li>
                          <a href="#pedikir">Педикюр</a>
                        </li>
                        <li>
                          <a href="#brovi">Брови</a>
                        </li>
                        <li>
                          <a href="#uhodi">Уход За Волосами</a>
                        </li>
                      </ul>
                    </div>
                  </div>
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

      <script src="../../style/js/jquery.min.js"></script>
      <script src="../../style/js/modernizr-2.6.2.min.js"></script>
      <script src="../../style/js/jquery.easing.1.3.js"></script>
      <script src="../../style/js/jquery.waypoints.min.js"></script>
      <script src="../../style/js/jquery.flexslider-min.js"></script>
      <script src="../../style/js/sticky-kit.min.js"></script>
      <script src="../../style/js/jquery.magnific-popup.min.js"></script>
      <script src="../../style/js/owl.carousel.min.js"></script>
      <script src="../../style/js/main.js"></script>
    </div>
  );
};

export default Services;
