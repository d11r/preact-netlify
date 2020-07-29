import { h } from "preact";
import { useEffect } from "preact/hooks";
import { Suspense } from "preact/compat";
import { usePrerenderData } from "@preact/prerender-data-provider";
import Markdown from "markdown-to-jsx";
const parseMD = require("parse-md").default;
import script from "react-script-tag";
import $ from "jquery";

const getImgPath = (p) => {
  if (p.split("/").length === 2) {
    return `../..${p}`;
  } else {
    return `../../style/${p.split("/").slice(-2).join("/")}`;
  }
};

const Home = () => {
  // Static content injection
  const [data, isLoading] = usePrerenderData({ url: "/" });
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
  console.log(m);

  // Netlify admin redirect
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

  const brands = m.products.brand_pictures.map((p) => getImgPath(p));

  return (
    <div id="betty-page">
      <a href="#" class="js-betty-nav-toggle betty-nav-toggle">
        <i></i>
      </a>
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
        <aside id="betty-hero" class="js-fullheight">
          <div class="flexslider js-fullheight">
            <ul class="slides">
              <li
                style={`
                  background-image: url(${getImgPath(
                    m.frontpage.frontImageOne
                  )})
                `}
              >
                <div class="overlay"></div>
                <div class="container-fluid">
                  <div class="row">
                    <div class="col-md-12 js-fullheight slider-text">
                      <div class="slider-text-inner">
                        <div class="desc">
                          <h1>{m.frontpage.frontpageHeading}</h1>
                          <div class="btn btn-contact">
                            <a href={`tel:${m.contact.contact_phone}`}>
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
                style={`
                  background-image: url(${getImgPath(
                    m.frontpage.frontImageTwo
                  )})
                `}
              >
                <div class="overlay"></div>
                <div class="container-fluid">
                  <div class="row">
                    <div class="col-md-12 js-fullheight slider-text">
                      <div class="slider-text-inner">
                        <div class="desc">
                          <h1>{m.frontpage.frontpageHeading}</h1>
                          <div class="btn btn-contact">
                            <a href={`tel:${m.contact.contact_phone}`}>
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
                style={`
                  background-image: url(${getImgPath(
                    m.frontpage.frontImageThree
                  )})
                `}
              >
                <div class="overlay"></div>
                <div class="container-fluid">
                  <div class="row">
                    <div class="col-md-12 js-fullheight slider-text">
                      <div class="slider-text-inner">
                        <div class="desc">
                          <h1>{m.frontpage.frontpageHeading}</h1>
                          <div class="btn btn-contact">
                            <a href={`tel:${m.contact.contact_phone}`}>
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
                style={`
                  background-image: url(${getImgPath(
                    m.frontpage.frontImageFour
                  )})
                `}
              >
                <div class="overlay"></div>
                <div class="container-fluid">
                  <div class="row">
                    <div class="col-md-12 js-fullheight slider-text">
                      <div class="slider-text-inner">
                        <div class="desc">
                          <h1>{m.frontpage.frontpageHeading}</h1>
                          <div class="btn btn-contact">
                            <a href={`tel:${m.contact.contact_phone}`}>
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
                style={`
                  background-image: url(${getImgPath(
                    m.frontpage.frontImageFive
                  )})
                `}
              >
                <div class="overlay"></div>
                <div class="container-fluid">
                  <div class="row">
                    <div class="col-md-12 js-fullheight slider-text">
                      <div class="slider-text-inner">
                        <div class="desc">
                          <h1>{m.frontpage.frontpageHeading}</h1>
                          <div class="btn btn-contact">
                            <a href={`tel:${m.contact.contact_phone}`}>
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
                  src={getImgPath(m.about_us.ownerPhoto)}
                  class="img-fluid mb-30"
                  alt=""
                />
              </div>
              <div class="col-md-6">
                <Markdown>{parseMD(m.about_us.aboutUsText).content}</Markdown>
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
              {m.team.map((t) => (
                <div class="col-md-6">
                  <div class="item mb-30">
                    <div class="img">
                      <img
                        src={getImgPath(t.employeePicture)}
                        alt={`${t.employee_name} profile picture`}
                      />
                    </div>
                    <div class="info valign">
                      <div class="full-width">
                        <h6>{t.employee_name}</h6>
                        <span>{t.employee_profession_primary}</span>
                        {!["", "*"].includes(
                          t.employee_profession_secondary
                        ) && <p>{t.employee_profession_secondary}</p>}
                        <div class="social">
                          <div class="full-width">
                            <a href={m.sidebar.instagramURL} class="icon">
                              <i class="ti-instagram"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
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
                    <img
                      src={getImgPath(m.services.serviceOnePic)}
                      alt={m.services.serviceOne}
                    />
                  </div>
                  <div class="con">
                    <a href="services">
                      <h5>{m.services.serviceOne}</h5>
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
                    <img
                      src={getImgPath(m.services.serviceTwoPic)}
                      alt={m.services.serviceTwo}
                    />
                  </div>
                  <div class="con">
                    <a href="services">
                      <h5>{m.services.serviceTwo}</h5>
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
                    <img
                      src={getImgPath(m.services.serviceThreePic)}
                      alt={m.services.serviceThree}
                    />
                  </div>
                  <div class="con">
                    <a href="services">
                      <h5>{m.services.serviceThree}</h5>
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
                    <img
                      src={getImgPath(m.services.serviceFourPic)}
                      alt={m.services.serviceFour}
                    />
                  </div>
                  <div class="con">
                    <a href="services">
                      <h5>{m.services.serviceFour}</h5>
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
                      <h6>{m.contact.contact_phone}</h6>
                    </div>
                  </div>
                </div>
                <div class="betty-contact-info2">
                  <div class="feat-inner2">
                    <span class="icon et-map-pin"></span>
                    <div class="feat-info2">
                      <h5>Адрес</h5>
                      <h6>{m.contact.contact_address}</h6>
                    </div>
                  </div>
                </div>
                <div class="betty-contact-info2">
                  <div class="feat-inner2">
                    <span class="icon et-notebook"></span>
                    <div class="feat-info2">
                      <h5>E-Mail</h5>
                      <h6>{m.contact.contact_email}</h6>
                    </div>
                  </div>
                </div>
                <div class="betty-contact-info2">
                  <div class="feat-inner2">
                    <span class="icon et-clock"></span>
                    <div class="feat-info2">
                      <h5>{m.contact.contact_days}</h5>
                      <h6>{m.contact.contact_hours}</h6>
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
                {brands.map((b) => (
                  <div class="brand-logo">
                    <img src={b} />
                  </div>
                ))}
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
                    <span>{m.contact.contact_address}</span>
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
    </div>
  );
};

export default Home;
