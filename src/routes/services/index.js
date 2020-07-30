import { h } from "preact";
import { Link } from "preact-router/match";
import { usePrerenderData } from "@preact/prerender-data-provider";
import $ from "jquery";

import Markdown from "markdown-to-jsx";
const parseMD = require("parse-md").default;

const getImgPath = (p) => {
  if (p.split("/").length === 2) {
    return `../..${p}`;
  } else {
    return `../../${p.split("/").slice(-2).join("/")}`;
  }
};

const Services = () => {
  const [data, isLoading] = usePrerenderData({ url: "/services" });
  const content = data.data;
  const m = {};
  content.forEach((c) => {
    if (c.id === "team") {
      m[c.id] = [];
      for (let i = 0; i < c.edges.length; i++)
        m[c.id].push({ ...c.edges[i].details });
    } else {
      m[c.id] = { ...c.edges[0].details };
    }
  });

  const toggleNav = (e) => {
    var $this = $(this);
    if ($("body").hasClass("offcanvas")) {
      $this.removeClass("active");
      $("body").removeClass("offcanvas");
    } else {
      $this.addClass("active");
      $("body").addClass("offcanvas");
    }
  };

  return (
    <div id="betty-page">
      <span class="js-betty-nav-toggle betty-nav-toggle" onClick={toggleNav}>
        <i></i>
      </span>
      <aside id="betty-aside">
        <div class="betty-logo">
          <a href="/">
            <img src="../../images/logo.png" alt="Yes Nail Logo" />
          </a>
          <h1>
            <a href="/">{m.sidebar.salonName}</a>{" "}
            <span>{m.sidebar.address}</span>
          </h1>
        </div>

        <nav id="betty-main-menu">
          <ul>
            <li>
              <a href="/">Главная страница</a>
            </li>
            <li>
              <a href="/">О нас</a>
            </li>
            <li>
              <a href="/">Наши услуги</a>
            </li>
            <li>
              <a href="/">Контакты</a>
            </li>
          </ul>
        </nav>

        <div class="betty-contact-info">
          <div class="feat-inner">
            <span class="icon et-clock"></span>
            <div class="feat-info">
              <h5>{m.sidebar.workingDays}</h5>
              <h6>{m.sidebar.workingHours}</h6>
            </div>
          </div>
        </div>
        <div class="betty-contact-info">
          <div class="feat-inner">
            <span class="icon et-phone"></span>
            <div class="feat-info">
              <h5>Телефон</h5>
              <h6>{m.sidebar.contactTelephone}</h6>
            </div>
          </div>
        </div>

        <div class="betty-footer">
          <ul>
            <li>
              <a href={m.sidebar.instagramURL}>
                <i class="ti-instagram"></i>
              </a>
            </li>
            <li>
              <a href={m.sidebar.facebookURL}>
                <i class="ti-facebook"></i>
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
                    src={getImgPath(m.services.serviceOnePic)}
                    class="img-fluid mb-30"
                  />
                  <h3>Маникюр</h3>
                  <p>
                    <Markdown>
                      {parseMD(m.prices.manicure_title).content}
                    </Markdown>
                  </p>
                </div>

                <div class="row services-price mb-30">
                  <div class="col-md-12">
                    {m.prices.manicure_prices.map((p) => (
                      <div class="services-price-info">
                        <h5 class="title">
                          {p.manicure_key}
                          <span class="price">{p.manicure_value} ₽</span>
                          {p.manicure_description && (
                            <p>{p.manicure_description}</p>
                          )}
                        </h5>
                      </div>
                    ))}

                    <h5>Дополнительно</h5>
                    {m.prices.manicure_additional_prices.map((p) => (
                      <div class="services-price-info">
                        <h5 class="title">
                          {p.manicure_key}
                          <span class="price">{p.manicure_value} ₽</span>
                          {p.manicure_description && (
                            <p>{p.manicure_description}</p>
                          )}
                        </h5>
                      </div>
                    ))}

                    <h5>Лечебные Системы</h5>
                    {m.prices.manicure_healing_prices.map((p) => (
                      <div class="services-price-info">
                        <h5 class="title">
                          {p.manicure_key}
                          <span class="price">{p.manicure_value} ₽</span>
                          {p.manicure_description && (
                            <p>{p.manicure_description}</p>
                          )}
                        </h5>
                      </div>
                    ))}

                    {m.galleries.manicure_pictures && (
                      <div class="brands">
                        <div class="container-fluid">
                          <div class="row">
                            <div class="col-md-12 owl-carousel owl-theme">
                              {m.galleries.manicure_pictures.map((p) => (
                                <div class="brand-logo">
                                  <img src={getImgPath(p)} alt="" />
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    <h5>Дизайны</h5>
                    {m.prices.manicure_design_prices.map((p) => (
                      <div class="services-price-info">
                        <h5 class="title">
                          {p.manicure_key}
                          <span class="price">{p.manicure_value} ₽</span>
                          {p.manicure_description && (
                            <p>{p.manicure_description}</p>
                          )}
                        </h5>
                      </div>
                    ))}
                  </div>
                </div>

                <div class="mb-30" id="pedikir">
                  <img
                    src={getImgPath(m.services.serviceTwoPic)}
                    class="img-fluid mb-30"
                    alt=""
                  />
                  <h3>Педикюр</h3>
                  <Markdown>
                    {parseMD(m.prices.pedicure_title).content}
                  </Markdown>
                </div>
                <div class="row services-price mb-30">
                  <div class="col-md-12">
                    {m.prices.pedicure_prices.map((p) => (
                      <div class="services-price-info">
                        <h5 class="title">
                          {p.pedicure_key}
                          <span class="price">{p.pedicure_value} ₽</span>
                          {p.pedicure_description && (
                            <p>{p.pedicure_description}</p>
                          )}
                        </h5>
                      </div>
                    ))}
                    {m.galleries.pedicure_pictures && (
                      <div class="brands">
                        <div class="container-fluid">
                          <div class="row">
                            <div class="col-md-12 owl-carousel owl-theme">
                              {m.galleries.pedicure_pictures.map((p) => (
                                <div class="brand-logo">
                                  <img src={getImgPath(p)} alt="" />
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
                <div class="mb-30" id="brovi">
                  <img
                    src={getImgPath(m.services.serviceThreePic)}
                    class="img-fluid mb-30"
                    alt=""
                  />
                  <h3>Брови</h3>
                  <Markdown>{parseMD(m.prices.brovi_title).content}</Markdown>
                </div>

                <div class="row services-price mb-30">
                  <div class="col-md-12">
                    {m.prices.brovi_prices.map((p) => (
                      <div class="services-price-info">
                        <h5 class="title">
                          {p.brovi_key}
                          <span class="price">{p.brovi_value} ₽</span>
                          {p.brovi_description && <p>{p.brovi_description}</p>}
                        </h5>
                      </div>
                    ))}

                    {m.galleries.brovi_pictures && (
                      <div class="brands">
                        <div class="container-fluid">
                          <div class="row">
                            <div class="col-md-12 owl-carousel owl-theme">
                              {m.galleries.brovi_pictures.map((p) => (
                                <div class="brand-logo">
                                  <img src={getImgPath(p)} alt="" />
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                <div class="mb-30" id="uhodi">
                  <img
                    src={getImgPath(m.services.serviceFourPic)}
                    class="img-fluid mb-30"
                    alt=""
                  />
                  <h3>Уходы за волосами</h3>
                  <Markdown>{parseMD(m.prices.uhodi_title).content}</Markdown>
                </div>

                <div class="row services-price mb-30">
                  <div class="col-md-12">
                    {m.prices.uhodi_prices.map((p) => (
                      <div class="services-price-info">
                        <h5 class="title">
                          {p.uhodi_key}
                          <span class="price">{p.uhodi_value} ₽</span>
                          {p.uhodi_description && <p>{p.uhodi_description}</p>}
                        </h5>
                      </div>
                    ))}

                    {m.galleries.uhodi_pictures && (
                      <div class="brands">
                        <div class="container-fluid">
                          <div class="row">
                            <div class="col-md-12 owl-carousel owl-theme">
                              {m.galleries.uhodi_pictures.map((p) => (
                                <div class="brand-logo">
                                  <img src={getImgPath(p)} alt="" />
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    <h5>Дополнительные Услуги</h5>
                    {m.prices.uhodi_additional_prices.map((p) => (
                      <div class="services-price-info">
                        <h5 class="title">
                          {p.uhodi_key}
                          <span class="price">{p.uhodi_value} ₽</span>
                          {p.uhodi_description && <p>{p.uhodi_description}</p>}
                        </h5>
                      </div>
                    ))}
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

      <script src="/js/jquery.easing.1.3.js" />
      <script src="/js/jquery.waypoints.min.js" />
      <script src="/js/jquery.flexslider-min.js" />
      <script src="/js/sticky-kit.min.js" />
      <script src="/js/jquery.magnific-popup.min.js" />
      <script src="/js/main.js" />
      <link rel="stylesheet" href="/css/animate.css" type="text/css" />
      <link rel="stylesheet" href="/css/bootstrap.css" type="text/css" />
      <link rel="stylesheet" href="/css/et-lineicons.css" type="text/css" />
      <link rel="stylesheet" href="/css/flaticon.css" type="text/css" />
      <link rel="stylesheet" href="/css/flexslider.css" type="text/css" />
      <link rel="stylesheet" href="/css/magnific-popup.css" type="text/css" />
      <link rel="stylesheet" href="/css/owl.carousel.min.css" type="text/css" />
      <link
        rel="stylesheet"
        href="/css/owl.theme.default.min.css"
        type="text/css"
      />
      <link rel="stylesheet" href="/css/themify-icons.css" type="text/css" />
      <link rel="stylesheet" href="/css/style.css" type="text/css" />

      <script src="/js/main.js" />
    </div>
  );
};

export default Services;
