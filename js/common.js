var debugTimes = !1;
document.addEventListener("DOMContentLoaded", (function (e) {
        initSmoothScrolling();
        var t = function (e) {
                var t = e.querySelector(".js-more-btn"),
                    o = e.querySelector(".js-service-text");
                (e.classList.add("is-hidden"), null !== o) && (o.innerHTML.length < 500 && (e.classList.add("is-button-hide"), e.classList.remove("is-hidden")));
                t.addEventListener("click", (function () {
                    e.classList.toggle("is-hidden"), "развернуть" === t.innerText.toLowerCase() ? t.innerText = "Свернуть" : t.innerText = "Развернуть"
                }))
            },
            o = document.querySelectorAll(".js-hidden-container");
        if (o.length)
            for (var n = 0; n < o.length; n += 1) t(o[n]);
        ! function () {
            var e, t, o = document.querySelectorAll(".product__tab-btn"),
                n = document.querySelectorAll(".characteristics"),
                s = document.querySelector(".js-popup-title"),
                i = document.querySelector(".js-product-button"),
                r = document.getElementById("product_title"),
                c = document.getElementById("product_id");

            function a() {
                if (this.classList.contains("is-active") || o.forEach((function (e) {
                        e.classList.remove("is-active")
                    })), this.classList.add("is-active"), screen.width < 768) {}
                var l;
                e = this.getAttribute("data-id"), t = this.getAttribute("data-text"), i.textContent = t, l = e, n.forEach((function (e) {
                    var t = e.getAttribute("id");
                    l == t ? e.classList.add("is-active") : e.classList.remove("is-active")
                })), r.setAttribute("value", t), c.setAttribute("value", "EcoWood " + e), s.textContent = "Получить предложение" == t ? "Получить КП на EcoWood " + e : "Узнать цену на EcoWood " + e
            }
            o.forEach((function (e) {
                e.addEventListener("click", a)
            }))
        }();
        var s = document.querySelector(".button-up");
        window.addEventListener("scroll", (function (e) {
            var t = window.pageYOffset,
                o = document.querySelector(".header");
            t >= o.clientHeight + 40 ? o.classList.add("is-fixed") : o.classList.remove("is-fixed"), (window.pageYOffset || document.documentElement.scrollTop) > 700 ? s.classList.add("is-show") : s.classList.remove("is-show")
        })), document.querySelectorAll(".button-more--element").forEach((function (e) {
            var t = e;
            t.addEventListener("click", (function (e) {
                var o = this.closest(".js-parent");
                if (o.classList.toggle("is-active"), "показать еще" === t.innerText.toLowerCase() || "другие модели" === t.innerText.toLowerCase() || "еще фото" === t.innerText.toLowerCase() || "другие преимущества" === t.innerText.toLowerCase()) t.innerText = "Скрыть";
                else {
                    var n = t.getAttribute("data-text-btn");
                    t.innerText = n, "Другие модели" !== n && window.scrollTo({
                        top: o.offsetTop
                    })
                }
            }))
        }));
        var i = document.querySelector(".js-burg"),
            r = document.querySelector(".header__wrapper"),
            c = document.querySelector(".wrapper"),
            a = document.querySelectorAll(".header__menu-link");
        i.addEventListener("click", (function () {
            var e = document.querySelector(".header__inner");
            this.classList.contains("active") ? (this.classList.remove("active"), e.classList.remove("is-color"), r.classList.remove("is-active"), body.classList.remove("is-hidden"), c.classList.remove("overlay")) : (this.classList.add("active"), e.classList.add("is-color"), r.classList.add("is-active"), body.classList.add("is-hidden"), c.classList.add("overlay"))
        }));
        for (n = 0; n < a.length; n++) {
            a[n].addEventListener("click", (function (e) {
                var t = document.querySelector(".header__inner");
                r.classList.contains("is-active") && (r.classList.remove("is-active"), i.classList.remove("active"), c.classList.remove("overlay"), body.classList.remove("is-hidden"), t.classList.remove("is-color"))
            }))
        }
        const l = window.matchMedia("(max-width:767px)");
        let d;
        const u = function () {
                if (!0 !== l.matches) return !1 === l.matches ? m() : void 0;
                void 0 !== d && d.destroy(!0, !0)
            },
            m = function () {
                d = new Swiper(".swiper-container", {
                    navigation: {
                        nextEl: ".project-button--next",
                        prevEl: ".project-button--prev"
                    },
                    autoplay: {
                        delay: 5e3,
                        disableOnInteraction: !0
                    },
                    simulateTouch: !1
                })
            };
        l.addListener(u), u();
        var p = document.querySelector(".swiper-container");
        p.addEventListener("mouseenter", (function () {
            d.autoplay.stop()
        })), p.addEventListener("mouseleave", (function () {
            d.autoplay.start()
        }));
        var h = document.querySelectorAll(".js-popup-show"),
            f = document.querySelectorAll(".js-close");
        if (body = document.querySelector("body"), lockPadding = document.querySelectorAll(".lock-padding"), unlock = !0, timeOut = 400, h.length > 0)
            for (n = 0; n < h.length; n++) {
                h[n].addEventListener("click", (function (e) {
                    var t = this.getAttribute("data-content"),
                        o = this.getAttribute("data-file");
                    switch (y(document.querySelector("" + t), o), e.preventDefault(), t) {
                        case ".js-popup-price":
                            return ym(69751027, "reachGoal", "Order"), !0;
                        case ".js-popup-leasing":
                            return ym(69751027, "reachGoal", "Leasing"), !0;
                        case ".js-popup-feedback":
                            return ym(69751027, "reachGoal", "question"), !0;
                        default:
                            console.log(".js-popup-show")
                    }
                }))
            }
        if (f.length > 0)
            for (n = 0; n < f.length; n++) {
                f[n].addEventListener("click", (function (e) {
                    v(this.closest(".popup"), !0), e.preventDefault()
                }))
            }

        function y(e, t) {
            if (e && unlock) {
                var o = document.querySelector(".popup.open");
                if (o ? v(o, !1) : function () {
                        var e = window.innerWidth - document.querySelector(".wrapper").offsetWidth + "px";
                        if (lockPadding.length > 0)
                            for (var t = 0; t < lockPadding.length; t++) {
                                lockPadding[t].style.paddingRight = e
                            }
                        body.style.paddingRight = e, body.classList.add("is-hidden"), s.style.opacity = 0, unlock = !1, setTimeout((function () {
                            unlock = !0
                        }), timeOut)
                    }(), e.classList.add("open"), t) {
                    var n = e.querySelector(".popup__content--project"),
                        i = document.createElement("img");
                    i.setAttribute("src", "assets/images/" + t + ".jpg"), n.append(i)
                }
                e.addEventListener("click", (function (e) {
                    e.target.closest(".popup__content") || v(e.target.closest(".popup"), !0)
                }))
            }
        }

        function v(e, t) {
            var o = e.getElementsByTagName("img");
            o.length && setTimeout((function () {
                o[0].remove()
            }), 400), unlock && (e.classList.remove("open"), t && (setTimeout((function () {
                for (var e = 0; e < lockPadding.length; e++) lockPadding[e].style.paddingRight = "0px";
                body.style.paddingRight = "0px", body.classList.remove("is-hidden"), s.style.opacity = 1
            }), timeOut), unlock = !1, setTimeout((function () {
                unlock = !0
            }), timeOut)))
        }
        IMask(document.getElementById("phone-mask-leasing"), {
            mask: "+{7}(000)000-00-00"
        }), IMask(document.getElementById("phone-mask-price"), {
            mask: "+{7}(000)000-00-00"
        }), IMask(document.getElementById("phone-mask-feedback"), {
            mask: "+{7}(000)000-00-00"
        });

        function g(e) {
            var t = e.getAttribute("data-id");
            return ym(69751027, "reachGoal", t), !0
        }
        new window.JustValidate(".js-form-leasing", {
            rules: {
                name: {
                    required: !0
                },
                email: {
                    required: !0,
                    email: !0
                },
                myField: {
                    required: !0,
                    minLength: 16,
                    maxLength: 16
                }
            },
            messages: {
                name: "Пожалуйста, введите ваше имя",
                email: "Пожалуйста, введите корректный адрес электронной почты",
                myField: "Пожалуйста, введите корректный номер телефона"
            },
            focusWrongField: !0,
            submitHandler: function (e, t, o) {
                g(e.querySelector(".js-send-button")), o({
                    url: "../ajax.php",
                    method: "POST",
                    data: t,
                    async: !0,
                    callback: function (e) {
                        if ("success" == JSON.parse(e).status) {
                            var t = document.querySelector(".popup.open"),
                                o = document.querySelector(".js-popup-success");
                            t.classList.remove("open"), o.classList.add("open")
                        }
                    }
                })
            }
        }), new window.JustValidate(".js-form-price", {
            rules: {
                name: {
                    required: !0
                },
                email: {
                    required: !0,
                    email: !0
                },
                myField: {
                    required: !0,
                    minLength: 16,
                    maxLength: 16
                }
            },
            messages: {
                name: "Пожалуйста, введите ваше имя",
                email: "Пожалуйста, введите корректный адрес электронной почты",
                myField: "Пожалуйста, введите корректный номер телефона"
            },
            focusWrongField: !0,
            submitHandler: function (e, t, o) {
                g(e.querySelector(".js-send-button")), o({
                    url: "../ajax.php",
                    method: "POST",
                    data: t,
                    async: !0,
                    callback: function (e) {
                        if ("success" == JSON.parse(e).status) {
                            var t = document.querySelector(".popup.open"),
                                o = document.querySelector(".js-popup-success");
                            t.classList.remove("open"), o.classList.add("open")
                        }
                    }
                })
            }
        }), new window.JustValidate(".js-form-feedback", {
            rules: {
                name: {
                    required: !0
                },
                email: {
                    required: !0,
                    email: !0
                },
                myField: {
                    required: !0,
                    minLength: 16,
                    maxLength: 16
                },
                text: {
                    required: !0,
                    minLength: 0,
                    maxLength: 300
                }
            },
            messages: {
                name: "Пожалуйста, введите ваше имя",
                email: "Пожалуйста, введите корректный адрес электронной почты",
                myField: "Пожалуйста, введите корректный номер телефона",
                text: "Пожалуйста, введите сообщение"
            },
            focusWrongField: !0,
            submitHandler: function (e, t, o) {
                g(e.querySelector(".js-send-button")), o({
                    url: "../ajax.php",
                    method: "POST",
                    data: t,
                    async: !0,
                    callback: function (e) {
                        if ("success" == JSON.parse(e).status) {
                            var t = document.querySelector(".popup.open"),
                                o = document.querySelector(".js-popup-success");
                            t.classList.remove("open"), o.classList.add("open")
                        }
                    }
                })
            }
        })

        function tabService() {
            var tabNav = document.querySelectorAll('.js-service-tab');
                // tabContent = document.querySelectorAll('.js-service-content'),
                // tabId
    
                tabNav.forEach(function(item){
                    item.addEventListener('click', selectTabNav);
                })
    
                function selectTabNav() {
    
                    if(!this.classList.contains('is-active')){
                        tabNav.forEach(function(item){
                            item.classList.remove('is-active');
                        });
                    }

                    if(screen.width < 768){
                        var tabOffsetTop = this.getBoundingClientRect().top
    
                        window.scrollBy({
                            top: tabOffsetTop
                        })
    
                        setTimeout(function(){
    
                            window.scrollBy({
                                top: -65
                            })
                        }, 0)
                    }
                    
                    this.classList.toggle('is-active');
    
                    // tabDataText = this.getAttribute('data-service-id');
                    // selectTabContent(tabDataText);
                }
    
                // function selectTabContent(tabName) {
                //     tabContent.forEach(function(item){
                //         var tabContentId = item.getAttribute('data-service-id');
    
                //         if(tabName == tabContentId){
                //             item.classList.add('is-active');
                //         }else{
                //             item.classList.remove('is-active');
                //         }
                //     });
                    
                // }
        };

        tabService();
    })),
    function (e) {
        Element.prototype.matches || (Element.prototype.matches = Element.prototype.matchesSelector || Element.prototype.webkitMatchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector), Element.prototype.closest || (Element.prototype.closest = function (e) {
            for (var t = this; t;) {
                if (t.matches(e)) return t;
                t = t.parentElement
            }
            return null
        }), "NodeList" in window && !NodeList.prototype.forEach && (console.info("polyfill for IE11"), NodeList.prototype.forEach = function (e, t) {
            t = t || window;
            for (var o = 0; o < this.length; o++) e.call(t, this[o], o, this)
        }), e.forEach((function (e) {
            e.hasOwnProperty("append") || Object.defineProperty(e, "append", {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                value: function () {
                    var e = Array.prototype.slice.call(arguments),
                        t = document.createDocumentFragment();
                    e.forEach((function (e) {
                        var o = e instanceof Node;
                        t.appendChild(o ? e : document.createTextNode(String(e)))
                    })), this.appendChild(t)
                }
            })
        }))
    }([Element.prototype, Document.prototype, DocumentFragment.prototype]);