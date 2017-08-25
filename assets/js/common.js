/*
 * Author: Hatim Disawala
 * URL: http://www.hatimdisawala.com
 * Template Name: Marcia
 * Version: 1.1
 */
 "use strict";
 (function($) {

 	$(document).ready(function () {
 		var $postContent = $(".post-content");
 		$postContent.fitVids();
 		mainSlider();
 	});

 	var $item = $('.main-slider.carousel .item');
 	var $wHeight = $(window).height();
 	$item.eq(0).addClass('active');
 	$item.height($wHeight);
 	$item.addClass('image-slider');
 	$('.main-slider.carousel img').each(function() {
 		var $src = $(this).attr('src');
 		var $color = $(this).attr('data-color');
 		$(this).parent().css({
 			'background-image': 'url(' + $src + ')',
 			'background-color': $color
 		});
 		$(this).remove();
 	});
 	$(window).on('resize', function() {
 		$wHeight = $(window).height();
 		$item.height($wHeight);
 	});

 	var setNavbar = function() {
 		if(typeof fixed_navbar != "undefined" && fixed_navbar == true) {
 			$('.base-header').addClass('fixed-header');
 			$('body').addClass('has-fixed-navbar');
 			$('#content').css({'margin-top':$('.base-header.fixed-header').height()});
 		}
 	};
 	var autoresizeInit = function() {
 		var container = autosize(document.querySelectorAll('textarea'));
 	};
 	var objectFitInit = function() {
 		if ($().objectFitPolyfill) {
 			$(".img-cover").objectFitPolyfill({
 				fit: "cover"
 			});
 		};
 	};
 	var collapseActiveInit = function() {
 		if ($().on) {
 			$('.panel-collapse').on('show.bs.collapse', function() {
 				$(this).siblings('.panel-heading').addClass('active');
 			});
 			$('.panel-collapse').on('hide.bs.collapse', function() {
 				$(this).siblings('.panel-heading').removeClass('active');
 			});
 		};
 	};
 	
 	var masonryInit = function() {
 		if ($().masonry) {
 			$('.blog-grid').masonry({
 				itemSelector: '.blog-item',
 				isFitWidth: true,
 				gutter: 30
 			});
 		};
 	};
 	var popupInit = function() {
 		if ($().magnificPopup) {
 			$('.popup').magnificPopup({
 				type: 'inline',
 				fixedContentPos: false,
 				fixedBgPos: true,
 				overflowY: 'hidden',
 				closeBtnInside: true,
 				preloader: false,
 				midClick: true,
 				removalDelay: 300,
 				mainClass: 'my-mfp-slide-bottom'
 			});
 		}
 	};
 	var progressbarInit = function() {
 		$(".progress div").each(function() {
 			var display = $(this),
 			currentValue = parseInt(display.text()),
 			nextValue = $(this).attr("aria-valuenow"),
 			diff = nextValue - currentValue,
 			step = (0 < diff ? 1 : -1);
 			if (nextValue == "0") {
 				$(display).css("padding", "0");
 			} else {
 				$(display).css("color", "#fff").animate({
 					"width": nextValue + "%"
 				}, "slow");
 			}
 			for (var i = 0; i < Math.abs(diff); ++i) {
 				setTimeout(function() {
 					currentValue += stepdisplay.html(currentValue + "%");
 				}, 20 * i);
 			}
 		})
 	};

 	var featuredMedia = function(){
 		if ($(".full-post").length > 0) {
 			$(".full-post").each(function() {
 				var thiseliment = $(this);
 				var media_wrapper = $(this).find('featured');
 				var media_content_embeded = media_wrapper.find('iframe');
 				var container = thiseliment.find('.featured-media');
 				container.find('.image-container').hide();
 				if (media_content_embeded.length > 0) {
 					container.find('.image-container').remove();
 					container.addClass('has-iframe');
 					container.prepend(media_content_embeded);
 				} else {
 					container.addClass('no-iframe');
 					thiseliment.find('.featured-media').find('.image-container').show();
 				}
 			});
 		}
 	};

 	var facebook = function() {
 		if ($('.fb').length) {
 			var facebook_sdk_script = '<div id="fb-root"></div><script>(function(d, s, id) {var js, fjs = d.getElementsByTagName(s)[0];if (d.getElementById(id)) return;js = d.createElement(s); js.id = id;js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.4";fjs.parentNode.insertBefore(js, fjs);}(document, \'script\', \'facebook-jssdk\'));</script>'
 			var fb_page = '<div class="fb-page" data-href="'+facebook_page_url+'" data-small-header="false" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true" data-show-posts="false"><div class="fb-xfbml-parse-ignore">Facebook</div></div>';
 			$('body').append(facebook_sdk_script);
 			$('.fb').append(fb_page);
 			$(".fb").fitVids();
 		}
 	};

 	var twitter = function() {
 		if ($('.tweets').length) {
 			var twitter_block = '<a class="twitter-timeline" href="'+twitter_url+'" data-widget-id="'+twitter_widget_id+'" data-link-color="#0062CC" data-chrome="nofooter noscrollbar" data-tweet-limit="'+number_of_tweet+'">Tweets</a>';
 			twitter_block += "<script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+\"://platform.twitter.com/widgets.js\";fjs.parentNode.insertBefore(js,fjs);}}(document,\"script\",\"twitter-wjs\");</script>";
 			$('.tweets').append(twitter_block);
 		}
 	};

 	var socialLinks = function() {
 		if ($('.social-facebook').length) {
 			$('.social-facebook a').attr('href',social_facebook);
 		}
 		if ($('.social-twitter').length) {
 			$('.social-twitter a').attr('href',social_twitter);
 		}
 		if ($('.social-google-plus').length) {
 			$('.social-google-plus a').attr('href',social_google_plus);
 		}
 		if ($('.social-instagram').length) {
 			$('.social-instagram a').attr('href',social_instagram);
 		}
 	};

 	var contactInfo = function() {
 		if ($('.contact_address').length) {
 			$('.contact_address').text(contact_address);
 		}
 		if ($('.contact_phone').length) {
 			$('.contact_phone').text(contact_phone);
 		}
 		if ($('.contact_email').length) {
 			$('.contact_email').text(contact_email);
 		}
 	};

 	var mailchimp = function() {
        function IsEmail(email) {
            var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
            return regex.test(email);
        }
        var form = $('#mc-embedded-subscribe-form');
        form.attr("action", mailchimp_form_url.replace('&amp;', '&'));
        var message = $('#mc-embedded-subscribe-form #message');
        var submit_button = $('#mc-embedded-subscribe');
        var email_input = $('#mce-EMAIL');
        form.submit(function(e){
            e.preventDefault();
            submit_button.attr('disabled','disabled');
            if(email_input.val() != '' && IsEmail(email_input.val())) {
                message.html('please wait...').fadeIn(1000);
                var url=form.attr('action');
                if(url=='' || url=='YOUR_MAILCHIMP_WEB_FORM_URL_HERE') {
                    alert('Please config your mailchimp form url for this widget');
                    return false;
                }
                else{
                    url=url.replace('&amp;', '&');

                    var data = {};
                    var dataArray = form.serializeArray();
                    $.each(dataArray, function (index, item) {
                        data[item.name] = item.value;
                    });
                    $.ajax({
                        url: url,
                        type: "POST",
                        data: data,
                        dataType: 'json',
                        success: function(response, text){
                            if (response.result === 'success') {
                                message.html(success_message).delay(10000).fadeOut(500).removeClass('hidden');
                                submit_button.removeAttr('disabled');
                                email_input.val('');
                            }
                            else{
                                message.html(response.result+ ": " + response.msg).delay(10000).fadeOut(500).removeClass('hidden');
                                console.log(response);
                                submit_button.removeAttr('disabled');
                                email_input.focus().select();
                            }
                        },
                        dataType: 'jsonp',
                        error: function (response, text) {
                            console.log('mailchimp ajax submit error: ' + text);
                            submit_button.removeAttr('disabled');
                            email_input.focus().select();
                        }
                    });
                    return false;
                }
            } else {
                message.html('Please provide valid email').fadeIn(1000).removeClass('hidden');
                submit_button.removeAttr('disabled');
                email_input.focus().select();
            }
        });
    };

 	var wResize = function(){
 		$(window).resize(function(){
 			mainSlider();
 		});
 	}

 	var mainSlider = function(){
 		$('.main-slider').height($(window).height()).css({'margin-top':-$('.base-header').outerHeight()});
 	}

 	var instafeed = function() {
		if ($('#instafeed').length > 0) {
			var userFeed = new Instafeed({
				limit: instagram_count,
                get: 'user', // Get your Instagram Photo. Use - 'user' or 'tagged'
                //tagName: 'awesome', // Use your tag, unmarked this if get photo with tag
                userId: instagram_user_id, //Your user ID
                accessToken: instagram_access_token, //Your Access token on Instagram
                resolution: 'standard_resolution',
                template: '<div class="instagram-photo"><figure class="hover-block"><img src="{{image}}" alt=""><figcaption><div class="link-container"><a class="link-title" href="{{link}}" target="_blank"></a></div></figcaption></figure></div>'
            });
			userFeed.run();
		}
	};

 	$(window).scroll(function() {
 		$('.section-stats').each(function() {
 			var imagePos = $(this).offset().top;
 			var topOfWindow = $(window).scrollTop();
 			if (imagePos < topOfWindow + 800) {
 				$(function() {
 					$(".digit").countimator();
 				});
 			}
 		});
 		$(function() {
 			if ($(this).scrollTop() > 50) {
 				$('.fixed-header').addClass("sticky");
 			} else {
 				$('.fixed-header').removeClass("sticky");
 			}
 		});
 	});
 	$('a[href^="!#"]').on('click', function(e) {
 		e.preventDefault();
 		var target = this.hash;
 		var $target = $(target);
 		$('html, body').stop().animate({
 			'scrollTop': $target.offset().top
 		}, 900, 'swing', function() {
 			window.location.hash = target;
 		});
 	});

 	$('#search-input').ghostHunter({
 		results: "#search-results ul",
 		zeroResultsInfo: false,
 		onKeyUp: true,
 		onComplete: function( results ){
            $("#search-results").css('display','block');
            console.log(results);
        },
 		info_template: "<li class=\"info\">Number of posts found: {{amount}}</li>",
 		result_template: '<li><a href="{{link}}">{{title}} <i class="fa fa-chevron-right fa-fw pull-right"></i></a></li>',
 	});

 	$(function() {
 		setNavbar();
 		autoresizeInit();
 		objectFitInit();
 		collapseActiveInit();
 		masonryInit();
 		popupInit();
 		progressbarInit();
 		featuredMedia();
 		facebook();
 		twitter();
 		socialLinks();
 		contactInfo();
 		wResize();
 		mainSlider();
        mailchimp();
 		instafeed();
 	});
 })(jQuery);
 document.documentElement.className += (("ontouchstart" in document.documentElement) ? ' touch' : ' no-touch');
 var s = skrollr.init({
 	forceHeight: false,
 	mobileCheck: function() {
 		return false;
 	}
 });