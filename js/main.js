(function ($) {

    var App = {

        /**
        * Init Function
        */
        init: function () {
            App.HomeOpacity();
            App.setHeight();
            App.ScrollToContact();
            App.ScrollBack();
            App.Preloader();
            App.Animations();
            App.Lightbox();
            App.Counter();
            App.VideoBG();
            App.Stellar();
            App.QTRotator();
            App.ContactForm();
            App.VideoFitVid();


        },

        /**
        * Home Opacity
        */


        HomeOpacity: function () {
            "use strict";
            var h = window.innerHeight;
            $(window).on('scroll', function () {
                var st = $(this).scrollTop();
                $('#home').css('opacity', (1 - st / h));                
            });
        },


        setHeight: function () {
            navbarheight = $("#nav_bar").outerHeight() + 1;
            width = window.innerWidth;
        },


        /**
        * Scroll To Contact
        */
        ScrollToContact: function () {            

            var lastId,
                topMenu = $('#navigation, #mobile_menu_content');
                menuItems = topMenu.find('a');
                scrollItems = menuItems.map(function () {
                var item = $($(this).attr("href"));
                if (item.length) { return item; }
            });

            menuItems.click(function (e) {
                $('#logo').on('click', 'a[href="#home"]', function (e) {                    
                    e.preventDefault();
                    $('html, body').stop().animate(
                        { scrollTop: 0 },
                        1000,
                        'easeInOutExpo',
                        function () {
                            // Run this after animation is finished
                            location.hash = '';
                            history.replaceState(null, document.title, location.pathname + location.search);
                        }
                    );                   
                });

                var href = $(this).attr("href");
                var $target = href === "#" ? $('body') : $(href);

                if (!$target.length) return; // safety
                e.preventDefault();

                // Special case: scroll to top if it's #home
                var targetTop = (href === "#home") ? 0 : ($target.offset().top - navbarheight + 2);
                if (targetTop < 0) targetTop = 0;

                $('html, body').stop().animate(
                    { scrollTop: targetTop },
                    1000,
                    'easeInOutExpo',
                    function () {
                        // ✅ update URL hash for other sections                        
                        if (href && href.charAt(0) === "#" && href !== "#home") {
                            try {
                                if (history.pushState) {
                                    history.pushState(null, null, href);
                                } else {
                                    window.location.hash = href;
                                }
                            } catch (_) {
                                window.location.hash = href;
                            }
                        }
                        // do nothing if it's #home → keeps URL clean
                        
                    }
                );
            });

            $(window).scroll(function () {
                // Get container scroll position
                var fromTop = $(this).scrollTop() + navbarheight;

                // Get id of current scroll item
                var cur = scrollItems.map(function () {
                    if ($(this).offset().top < fromTop)
                        return this;
                });
                // Get the id of the current element
                cur = cur[cur.length - 1];
                var id = cur && cur.length ? cur[0].id : "";

                if (lastId !== id) {
                    lastId = id;
                    // Set/remove active class
                    menuItems
                        .parent().removeClass("active")
                        .end().filter("[href=#" + id + "]").parent().addClass("active");
                }                
            });
        },



        /**
        * Scroll Back
        */
        ScrollBack: function () {
            "use strict";
            $('#arrow_back').click(function () {
                $.scrollTo('#home', 1500, { easing: 'easeInOutExpo', offset: 0, 'axis': 'y' });
            });
        },


        /**
        * Preloader
        */
        Preloader: function () {
            "use strict";
            $(window).load(function () {
                $('#status').delay(100).fadeOut('slow');
                $('#preloader').delay(500).fadeOut('slow');
                // $('body').delay(500).css({'overflow':'visible'});
            })
        },



        /**
        * Animations
        */
        Animations: function () {
            "use strict";
            var windowwidth = $(window).width();
            if (windowwidth > 1024) {

                $('#nav_bar').waypoint(function () {
                    setTimeout(function () { $('.logo').addClass('animated fadeInDown') }, 600);
                    setTimeout(function () { $('#navigation').addClass('animated fadeInDown') }, 800);
                    setTimeout(function () { $('#slogan_h1').addClass('animated fadeInDown') }, 1000);
                    setTimeout(function () { $('#slogan_h3').addClass('animated fadeInDown') }, 1200);
                }, { offset: 0 });

                $('#about').waypoint(function () {
                    setTimeout(function () { $('#about_intro').addClass('animated fadeInDown') }, 200);
                    setTimeout(function () { $('#about_icon1').addClass('animated fadeInDown') }, 200);
                    setTimeout(function () { $('#about_icon2').addClass('animated fadeInDown') }, 200);
                    setTimeout(function () { $('#about_icon3').addClass('animated fadeInDown') }, 200);
                    setTimeout(function () { $('#about_icon4').addClass('animated fadeInDown') }, 200);
                    setTimeout(function () { $('#about_icon5').addClass('animated fadeInDown') }, 200);
                    setTimeout(function () { $('#about_icon6').addClass('animated fadeInDown') }, 600);
                    setTimeout(function () { $('#about_icon7').addClass('animated fadeInDown') }, 600);
                    setTimeout(function () { $('#about_icon8').addClass('animated fadeInDown') }, 600);
                    setTimeout(function () { $('#about_icon9').addClass('animated fadeInDown') }, 600);
                    setTimeout(function () { $('#about_icon10').addClass('animated fadeInDown') }, 600);
                    setTimeout(function () { $('#about_icon11').addClass('animated fadeInDown') }, 600);
                    setTimeout(function () { $('#about_icon12').addClass('animated fadeInDown') }, 800);
                    setTimeout(function () { $('#about_icon13').addClass('animated fadeInDown') }, 800);
                    setTimeout(function () { $('#about_icon14').addClass('animated fadeInDown') }, 800);
                    setTimeout(function () { $('#about_icon15').addClass('animated fadeInDown') }, 800);
                }, { offset: '90%' });

                $('#numbers').waypoint(function () {
                    setTimeout(function () { $('#counter_box1').addClass('animated fadeInUp') }, 0);
                    setTimeout(function () { $('#counter_box2').addClass('animated fadeInUp') }, 200);
                    setTimeout(function () { $('#counter_box3').addClass('animated fadeInUp') }, 400);
                    setTimeout(function () { $('#counter_box4').addClass('animated fadeInUp') }, 600);
                }, { offset: '90%' });
                $('#about').waypoint(function () {
                    setTimeout(function () { $('#about_intro').addClass('animated fadeInUp') }, 0);
                    setTimeout(function () { $('#about_slider').addClass('animated fadeInUp') }, 200);
                }, { offset: '90%' });
                $('#gallery_heading').waypoint(function () {
                    setTimeout(function () { $('#gallery_intro').addClass('animated fadeInUp') }, 0);
                }, { offset: '90%' });
                $('#crew').waypoint(function () {
                    setTimeout(function () { $('#crew_intro').addClass('animated fadeInUp') }, 0);
                    setTimeout(function () { $('#crew_member1').addClass('animated fadeInUp') }, 300);
                    setTimeout(function () { $('#crew_member2').addClass('animated fadeInUp') }, 600);
                    setTimeout(function () { $('#crew_member3').addClass('animated fadeInUp') }, 900);
                    setTimeout(function () { $('#crew_member4').addClass('animated fadeInUp') }, 1200);
                }, { offset: '90%' });
                $('#portfolio').waypoint(function () {
                    setTimeout(function () { $('#portfolio_intro').addClass('animated fadeInUp') }, 0);
                    setTimeout(function () { $('#portfolio_1').addClass('animated fadeInUp') }, 200);
                    setTimeout(function () { $('#portfolio_2').addClass('animated fadeInUp') }, 400);
                    setTimeout(function () { $('#portfolio_3').addClass('animated fadeInUp') }, 600);
                    setTimeout(function () { $('#portfolio_4').addClass('animated fadeInUp') }, 800);
                    setTimeout(function () { $('#portfolio_5').addClass('animated fadeInUp') }, 1000);
                    setTimeout(function () { $('#portfolio_6').addClass('animated fadeInUp') }, 1200);
                    setTimeout(function () { $('#portfolio_7').addClass('animated fadeInUp') }, 1400);
                    setTimeout(function () { $('#portfolio_8').addClass('animated fadeInUp') }, 1600);
                    setTimeout(function () { $('#portfolio_9').addClass('animated fadeInUp') }, 1800);
                }, { offset: '90%' });
                $('#portfolio_subpage').waypoint(function () {
                    setTimeout(function () { $('#portfolio_item_icons_top').addClass('animated fadeInUp') }, 600);
                    setTimeout(function () { $('#portfolio_item_title').addClass('animated fadeInUp') }, 800);
                    setTimeout(function () { $('#portfolio_item_details').addClass('animated fadeInUp') }, 1000);
                    setTimeout(function () { $('#portfolio_item_icons_bottom').addClass('animated fadeInUp') }, 1200);
                }, { offset: 0 });
                $('#facilities').waypoint(function () {
                    setTimeout(function () { $('#facilities_intro').addClass('animated fadeInUp') }, 0);
                }, { offset: '90%' });
                $('#service1').waypoint(function () {
                    setTimeout(function () { $('#facilities_column_right').addClass('animated fadeInRight') }, 0);
                }, { offset: '90%' });
                $('#service1').waypoint(function () {
                    setTimeout(function () { $('#facilities_column_left').addClass('animated fadeInLeft') }, 0);
                }, { offset: '90%' });
                $('#testimonials').waypoint(function () {
                    setTimeout(function () { $('#testimonials').addClass('animated fadeInUp') }, 0);
                }, { offset: '70%' });
                $('#pricing').waypoint(function () {
                    setTimeout(function () { $('#pricing_intro').addClass('animated fadeInUp') }, 0);
                    setTimeout(function () { $('#pricing_box1').addClass('animated fadeInLeft') }, 200);
                    setTimeout(function () { $('#pricing_box2').addClass('animated fadeInLeft') }, 400);
                    setTimeout(function () { $('#pricing_box3').addClass('animated fadeInLeft') }, 600);
                }, { offset: '70%' });
                $('#blog').waypoint(function () {
                    setTimeout(function () { $('#blog_intro').addClass('animated fadeInUp') }, 0);
                    setTimeout(function () { $('#blog1').addClass('animated fadeInUp') }, 200);
                    setTimeout(function () { $('#blog2').addClass('animated fadeInUp') }, 400);
                    setTimeout(function () { $('#blog3').addClass('animated fadeInUp') }, 600);
                    setTimeout(function () { $('#more_posts').addClass('animated fadeInUp') }, 800);
                }, { offset: '70%' });
                $('#contact').waypoint(function () {
                    setTimeout(function () { $('#contact_form').addClass('animated fadeInLeft') }, 0);
                    setTimeout(function () { $('#contact_info').addClass('animated fadeInRight') }, 200);
                }, { offset: '70%' });
            }
        },


        /**
        * Carousel
        */
        Carousel: function () {
            "use strict";
            $('#owl-gallery').owlCarousel({
                items: 5,
                itemsDesktop: [1199, 5],
                itemsDesktopSmall: [980, 5],
                itemsTablet: [768, 5],
                itemsTabletSmall: [550, 2],
                itemsMobile: [480, 2],
            });
        },

        /**
        * Nivo Lightbox
        */
        Lightbox: function () {
            "use strict";
            $('.play_icon a').nivoLightbox({
                effect: 'fall',                             // The effect to use when showing the lightbox
            });
        },



        /**
        * Counter
        */
        Counter: function () {
            "use strict";
            $('.counter').counterUp({
                delay: 10,
                time: 2300
            });
        },

        /**
        * VideoBG
        */
        VideoBG: function () {
            'use strict';
            var windowwidth = $(window).width();
            if (windowwidth > 1024) {
                $('.player').mb_YTPlayer();
            }
        },

        /**
        * Parallax
        */
        Stellar: function () {
            "use strict";
            $.stellar();
        },

        /**
        * Testimonials Rotator
        */
        QTRotator: function () {
            "use strict";
            $('#cbp-qtrotator').cbpQTRotator({
                speed: 700,
                easing: 'ease',
                interval: 6000
            });
        },

        /**
        * Contact Form
        */
        ContactForm: function () {
            "use strict";
            var options = { target: "#alert" }
            $("#contact-form").ajaxForm(options);
        },

        /**
        * Video Fit Vid
        */
        VideoFitVid: function () {
            "use strict";
            $(".video").fitVids();
        },

    }

    $(function () {
        App.init();

        $(window).resize(App.setHeight);

    });








})(jQuery);