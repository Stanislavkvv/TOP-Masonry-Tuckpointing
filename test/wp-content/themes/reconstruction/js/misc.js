"use strict";

window.addEventListener("pageshow", function(evt){
        if(evt.persisted){
        setTimeout(function(){
            window.location.reload();
        },10);
    }
}, false);

window.onunload = function(){};

(function( $ ) {

$( document ).ready(function() {

	var isTouchDevice = ( 'ontouchstart' in window ) || ( navigator.MaxTouchPoints > 0 ) || ( navigator.msMaxTouchPoints > 0 );

	if ( isTouchDevice ) {
		$( 'html' ).addClass( 'touch' );
		$( 'html' ).removeClass( 'no-touch' );
	} else {
		$( 'html' ).addClass( 'no-touch' );
		$( 'html' ).removeClass( 'touch' );
	}

	$('.btTestimonials').each(function(key, item) {

		var btTestimoniesPortName = '.btTestimoniesPort' + key;
		var testimonialClientsPortName = '.testimonialClientsPort' + key;
		var btTestimonyName = '.btTestimony' + key;
		var tClientName = '.tClient' + key;

		var numSlides = $(this).find('.tClient').length;


		$(this).find('.btTestimoniesPort').addClass('btTestimoniesPort' + key);
		$(this).find('.testimonialClientsPort').addClass('testimonialClientsPort' + key);
		$(this).find('.btTestimony').addClass('btTestimony' + key);
		$(this).find('.tClient').addClass('tClient' + key);

		$( btTestimoniesPortName ).slick({
			slide: btTestimonyName,
			slidesToShow: 2,
			slidesToScroll: 2,
			arrows: true,
			dots: false,
						responsive: [
                            {
                              breakpoint: 1200,
                              settings: {
                                slidesToShow: 2,
                                slidesToScroll: 1
                              }
                            },
                            {
                              breakpoint: 1008,
                              settings: {
                                slidesToShow: 1,
                                slidesToScroll: 1
                              }
                            }

                          ]
		});

		/*$( testimonialClientsPortName ).slick({
			slide: tClientName,
			slidesToShow: numSlides >= 5 ? 5 : numSlides,
			slidesToScroll: 2,
			asNavFor: btTestimoniesPortName,
			dots: false,
			arrows: false,
			infinite: true,
			centerMode: numSlides > 5 ? true : false,
			centerPadding: '0',
			focusOnSelect: true
		});*/

	});

	// SELECT
	$( 'select' ).fancySelect();

	if ( $( 'html' ).find( '.btNoInitGhost' ).length > 0 ) {
		$( 'html' ).addClass( 'removeGhost' );
		if ( window.bt_packery_tweak != undefined ) {
			bt_packery_tweak();
			setTimeout(function() {
				bt_packery_tweak();
			}, 150 );
		}
	}

	// ACCORDION
	$( '.tabsVertical .tabAccordionContent' ).hide();

	$( '.tabsVertical .tabAccordionTitle' ).on( 'click', function() {
		if ( $( this ).hasClass( 'on' ) ) {
			$( this ).removeClass( 'on' ).next().slideUp( 250 );
		} else {
			$( this ).closest( '.tabsVertical' ).find( '.tabAccordionTitle' ).removeClass( 'on' );
			$( this ).closest( '.tabsVertical' ).find( '.tabAccordionContent' ).delay( 250 ).slideUp( 250 );
			$( this ).addClass( 'on' ).next().slideDown( 250 );
		}
	});

	$( '.tabsVertical' ).each(function() {
		var open_first = $( this ).data( 'open-first' );
		if ( open_first == 'yes' ) {
			$( this ).find( '.tabAccordionTitle' ).first().trigger(  'click' );
		}
	});

	// TESTIMONIALS
	bt_testimonials_resize();

	// VIDEO
	bt_video_resize();

	// Input on focus...
	$('input[type="text"],input[type="email"]').addClass( 'untouched' );
	$.fn.ToggleInputValue = function() {
		return $( this ).each(function() {
			var Input = $( this );
			var default_value = Input.val();

			Input.focus(function() {
				if ( Input.val() == default_value ) Input.val( '' );
			}).blur(function() {
				if ( Input.val().length == 0 ) Input.val( default_value );
			});

			$( document ).on( 'change', 'input[type="text"]', function() {
				if ( ( Input.val() == default_value) || ( Input.val().length == 0 ) ) {
					$( Input ).removeClass( 'touched' ).addClass( 'untouched' );
				}
				else {
					$( Input ).removeClass( 'untouched' ).addClass( 'touched' );
				}
			});
		});
	}
	$('input[type="text"],input[type="email"]').ToggleInputValue();
	// /Input on focus...

    // Sets user agent in HTML tag
    var doc = document.documentElement;
    doc.setAttribute( 'data-useragent', navigator.userAgent);

    // Top Tools Trigger
    $( '.trigger' ).on( 'click', function() {
        if ( $( this ).hasClass( 'on' ) ) {
            $( this ).removeClass( 'on' ).next().removeClass( 'on' );
        } else {
            $( '.trtCompartment, .trigger' ).removeClass( 'on' );
            $( this ).addClass( 'on' ).next().addClass( 'on' );
        }
    });

    // Site search toggler

    $( '#btSearchIcon' ).on('click', function ( event ) {
        event.preventDefault();
        $( '.ssPort' ).addClass( 'open' );
    });

    $( '#btCloseSearch' ).on('click', function () {
        $( '.ssPort' ).removeClass( 'open' );
    });

	// basic functions

	if (!String.prototype.startsWith) {
	  String.prototype.startsWith = function(searchString, position) {
		position = position || 0;
		return this.lastIndexOf(searchString, position) === position;
	  };
	}

	if (!String.prototype.endsWith) {
	  String.prototype.endsWith = function(searchString, position) {
		  var subjectString = this.toString();
		  if (position === undefined || position > subjectString.length) {
			position = subjectString.length;
		  }
		  position -= searchString.length;
		  var lastIndex = subjectString.indexOf(searchString, position);
		  return lastIndex !== -1 && lastIndex === position;
	  };
	}


	$.fn.isOnScreen = function() {
		var element = this.get( 0 );
		if ( element == undefined ) return false;
		var bounds = element.getBoundingClientRect();
		return bounds.top + 100 < window.innerHeight && bounds.bottom > 0;
	}

	$.fn.pixelsOnScreen = function() {
		var element = this.get( 0 );
		if ( element == undefined ) return false;
		var bounds = element.getBoundingClientRect();
		return parseInt( window.innerHeight - bounds.top ) ;
	}

	$.fn.posOnScreen = function() {
		var element = this.get( 0 );
		if ( element == undefined ) return false;
		var bounds = element.getBoundingClientRect();
		return bounds.top;
	}

	function setCharAt(number,index,chr) {
		if(index > number.length-1) return number;
		return number.substr(0,index) + chr + number.substr(index+1);
	}

	function animateCounter(elm) {
		var number_length = elm.data( 'digit-length' );
		for ( var i = parseInt( number_length ); i > 0; i -- ) {
			var digit = elm.children( " .p" + i ).data( 'digit' );
			for ( var j = 0; j <= parseInt( digit ); j ++ ) {
				elm.children( ".p" + i ).children( ".n" + j ).css("transform","translateY(-" + parseInt( digit )*88 + "px)");
			}

		}
		return false;
	}

	function animateProgress(elm) {
		elm.find( '.btProgressAnim' ).css("transform","translateX(-" + ( 100 - elm.find( '.btProgressAnim' ).data('percentage') ) + "%)");
		return false;
	}

	// animate

	function animate_elements() {
		var winheight = $( window ).height();
		var fullheight = $( document ).height();
		var $elems = $( '.animate' );
		// classic animations
		$elems.each(function() {
			var $elm = $( this );
			if ( $elm.isOnScreen() ) {
				$elm.addClass( 'animated' ).removeClass( 'animate' );
				if ( $elm.hasClass( "btCounter" ) ) {
					animateCounter( $elm );
				}
				if ( $elm.hasClass( "btProgressBar" ) ) {
					animateProgress( $elm );
				}
			}
		});
	}

	// direction detection

	var getHoverDir = function( $element, x, y ) {
		var w = $element.width(),
			h = $element.height(),
			x = ( x - $element.offset().left - ( w/2 )) * ( w > h ? ( h/w ) : 1 ),
			y = ( y - $element.offset().top  - ( h/2 )) * ( h > w ? ( w/h ) : 1 ),
			direction = Math.round( ( ( ( Math.atan2(y, x) * (180 / Math.PI) ) + 180 ) / 90 ) + 3 ) % 4;
		return direction;
	}

	var bt_selected_gridItemEnter;
	var bt_selected_gridItemLeave;

	function initTilesGridHover () {

		$( '.pageWrap' ).on( 'mouseenter', '.bpgPhoto', function( event ) {

			$( '.bpgPhoto' ).removeClass( 'selectedGridItem' );
			bt_selected_gridItemEnter = $( this );
			var dir = getHoverDir( $( this ), event.pageX, event.pageY );
			bt_selected_gridItemEnter.find( '.captionPane' ).css({transition: 'none;'});

			switch(dir) {
				case 0:
					bt_selected_gridItemEnter.find( '.captionPane' ).css({
						transition: 'none',
						transform: 'translateY(-100%) translateX(0)',
						MozTransform: 'translateY(-100%) translateX(0)',
						WebkitTransform: 'translateY(-100%) translateX(0)',
						msTransform: 'translateY(-100%) translateX(0)'
					});
					break;
				case 1:
					bt_selected_gridItemEnter.find( '.captionPane' ).css({
						transition: 'none',
						transform: 'translateX(100%) translateY(0)',
						MozTransform: 'translateX(100%) translateY(0)',
						WebkitTransform: 'translateX(100%) translateY(0)',
						msTransform: 'translateX(100%) translateY(0)'
					});
					break;
				case 2:
					bt_selected_gridItemEnter.find( '.captionPane' ).css({
						transition: 'none',
						transform: 'translateY(100%) translateX(0)',
						MozTransform: 'translateY(100%) translateX(0)',
						WebkitTransform: 'translateY(100%) translateX(0)',
						msTransform: 'translateY(100%) translateX(0)'
					});
					break;
				case 3:
					bt_selected_gridItemEnter.find( '.captionPane' ).css({
						transition: 'none',
						transform: 'translateX(-100%) translateY(0)',
						MozTransform: 'translateX(-100%) translateY(0)',
						WebkitTransform: 'translateX(-100%) translateY(0)',
						msTransform: 'translateX(-100%) translateY(0)'
					});
					break;
				default:
					break;
			}

			bt_selected_gridItemEnter.addClass( 'selectedGridItem' );

			setTimeout(function() {
				bt_selected_gridItemEnter.find( '.captionPane' ).css({
					transition: 'all 300ms ease',
					transform: 'translateX(0) translateY(0)',
					MozTransform: 'translateX(0) translateY(0)',
					WebkitTransform: 'translateX(0) translateY(0)',
					msTransform: 'translateX(0) translateY(0)'
				});
			}, 20 );

		});

		$( '.pageWrap' ).on( 'mouseleave', '.bpgPhoto', function( event ) {
			bt_selected_gridItemLeave = $( this );
			var dir = getHoverDir( $( this ), event.pageX, event.pageY );
			$( '.bpgPhoto' ).removeClass( 'selectedGridItem' );
			switch(dir) {
				case 0:
					bt_selected_gridItemLeave.find( '.captionPane' ).css({
						transform: 'translateY(-100%) translateX(0)',
						MozTransform: 'translateY(-100%) translateX(0)',
						WebkitTransform: 'translateY(-100%) translateX(0)',
						msTransform: 'translateY(-100%) translateX(0)'
					});
					break;
				case 1:
					bt_selected_gridItemLeave.find( '.captionPane' ).css({
						transform: 'translateX(100%) translateY(0)',
						MozTransform: 'translateX(100%) translateY(0)',
						WebkitTransform: 'translateX(100%) translateY(0)',
						msTransform: 'translateX(100%) translateY(0)'
					});
					break;
				case 2:
					bt_selected_gridItemLeave.find( '.captionPane' ).css({
						transform: 'translateY(100%) translateX(0)',
						MozTransform: 'translateY(100%) translateX(0)',
						WebkitTransform: 'translateY(100%) translateX(0)',
						msTransform: 'translateY(100%) translateX(0)'
					});
					break;
				case 3:
					bt_selected_gridItemLeave.find( '.captionPane' ).css({
						transform: 'translateX(-100%) translateY(0)',
						MozTransform: 'translateX(-100%) translateY(0)',
						WebkitTransform: 'translateX(-100%) translateY(0)',
						msTransform: 'translateX(-100%) translateY(0)'
					});
					break;
				default:
					bt_selected_gridItemLeave.find( '.captionPane' ).css({transform: 'translateY(-100%)'});
					break;
			}

		});

	}

	// scroll handlers

	function scrollPage() {
		animate_elements();
		var fromTop = $( this ).scrollTop();
		if ( stickyEnabled ) {
			if ( fromTop > stickyOffset ) {
				if ( $('.duplicatedHeader').length == 0 && !responsiveMenuActive ) {
					$( '.pageWrap' ).addClass( 'stickyHeader' );
					$( '.mainHeader' ).clone( ).prependTo( '.pageWrap' ).addClass( 'duplicatedHeader' );
				}
			} else {
				$( '.pageWrap' ).removeClass( 'stickyHeader' );
				$( '.duplicatedHeader' ).detach( );
			}
		}

		if ( scrollDisabled ) return false;
	}

	function touchmove( e ) {
		e.preventDefault();
	}

	function scrollPageTo( val ) {
		val = parseInt( val );
		$( 'body, html' ).animate({ scrollTop: val + 'px' }, 500 );
	}

	function scrollPageToId(id) {
		var topOffset = $( id ).offset().top;
		if ( topOffset > stickyOffset && stickyEnabled && ! responsiveMenuActive ) {
			topOffset -= 77;
		}
		$( 'html, body' ).animate({ scrollTop: topOffset }, 500);
	}

	function mark_current_thumb() {
        if ( $( '.slidedVariable' ).length ) {
            slickCurrentSlide = $( '.slidedVariable' ).slick( 'slickCurrentSlide' );
        }
		if ( typeof slickCurrentSlide !== 'undefined' ) { // blog ghost = undefined
			thumbToSelect = $( '.boldPhotoBox img[data-order-num="' + slickCurrentSlide + '"]' );
			if ( thumbToSelect.length > 0 ) {
					if( ! thumbToSelect.isOnScreen() ) {
						$( 'body, html' ).animate({
							scrollTop: thumbToSelect.posOnScreen() + thumbToSelect.height() * 0.5 - window.innerHeight * 0.5
							}, 300, function() {
								thumbToSelect.addClass( 'markImage' );
						});
					} else {
						thumbToSelect.addClass( 'markImage' );
					}
					window.setTimeout( function() { thumbToSelect.removeClass( 'markImage' ); }, 2500 );
			}
		}
	}


	// ghost functions

	function show_ghost() {
		$( 'html' ).removeClass( 'removeGhost' );
	}

	function hide_ghost() {
		$( 'html' ).addClass( 'removeGhost' );
		if ( articleWithGhostGallery ) mark_current_thumb();
		if ( window.bt_packery_tweak != undefined ) {
			bt_packery_tweak();
			setTimeout(function() {
				bt_packery_tweak();
			}, 150 );
		}
	}

	// Central menu divider

	window.bt_divide_menu = function() {
		if ( ! hasCentralMenu ) return false;
		$( '.pageWrap' ).addClass( 'boldMenuCenter' );
		var logo_img = $( '.boldMenuCenter .mainHeader .btMainLogo' );
		var logoWidth = logo_img.height() * logo_img.data( 'w' ) / logo_img.data( 'h' );

		$( '.boldMenuCenter .menuPort nav' ).addClass( 'leftNav' );
		$( '.boldMenuCenter .menuPort' ).append( '<nav class="rightNav"><ul></ul></nav>' );
		var halfItems = Math.ceil( $( '.boldMenuCenter .mainHeader nav.leftNav ul>li:not(li li)' ).length * .5 );
		$( '.boldMenuCenter .mainHeader nav.rightNav ul' ).append( $( '.boldMenuCenter .mainHeader nav.leftNav ul li:not(li li)' ).slice ( halfItems ) );
		$( '.boldMenuCenter .mainHeader nav.leftNav ul li:not(li li)' ).slice ( halfItems ).remove();

		$( '.boldMenuCenter .mainHeader .logo' ).css( 'transform', 'translateX(' + Math.round( -logoWidth * .5 ) + 'px)' );
		$( '.boldMenuCenter .mainHeader nav.leftNav' ).css( 'margin-right', Math.round( logoWidth * .5 ) + 'px' );
		$( '.boldMenuCenter .mainHeader nav.rightNav' ).css( 'margin-left', Math.round( logoWidth * .5 ) + 'px' );
	}

	function undivide_menu() {
		if ( ! hasCentralMenu ) return false;
		$( '.boldMenuCenter .mainHeader nav.leftNav>ul:not(ul ul)' ).append( $( '.boldMenuCenter .mainHeader nav.rightNav ul>li:not(li li)' ) );
		$( '.boldMenuCenter .mainHeader nav.rightNav' ).remove();
		$( '.boldMenuCenter .mainHeader .leftNav' ).removeAttr( 'style' );
		$( '.boldMenuCenter .menuPort nav' ).removeClass( 'leftNav' );
		$( '.boldMenuCenter .mainHeader .logo' ).removeAttr( 'style' );
		$( '.pageWrap' ).removeClass( 'boldMenuCenter' );
	}

	// Initial setup

	// checking the status of the page

	var hasGhost = $( '.pageWrap section:eq(0)' ).hasClass( 'ghost' );
	var articleWithGhostGallery = $( 'article' ).hasClass( 'boldArticle' );
	var hasCentralMenu = $( '.pageWrap' ).hasClass( 'boldMenuCenter' );
	var stickyEnabled = $( '.pageWrap' ).hasClass( 'stickyEnabled' );
	var stickyOffset = 250;
	var stickyStarted = false;
	var scrollDisabled = false;
	var responsiveMenuActive = false;

	// delay click to allow on page leave screen

	$( document ).on( 'click', 'a', function() {
		if ( ! $( this ).hasClass( 'lightbox' ) && ! $( this ).hasClass( 'add_to_cart_button' ) ) {
			var href = $( this ).attr( 'href' );
			if ( href !== undefined ) {
				if ( location.href.split('#')[0] != href.split('#')[0] && ! href.startsWith( '#' ) && ! href.startsWith( 'mailto' ) && ! href.startsWith( 'callto' )  ) {
					if ( $( this ).attr( 'target' ) != '_blank' && ! href.endsWith( '#respond' )) {
						if ( $( '#boldPreloader' ).length ) {
							$( '#boldPreloader' ).removeClass( 'removePreloader' );
							setTimeout( function() { window.location = href }, 1500 );
							return false;
						}
					}
				} else if ( href != "#" && ! href.startsWith( 'mailto' ) ) {
					if( $(this).parent().parent().attr('class') != 'tabsHeader' ) scrollPageToId( href );
					return false;
				}
			}
		}
	});

	// if ghost section exists (must be first) we wrap other sections and hide it on scroll

	if ( hasGhost ) {
		$( 'html' ).addClass( 'hasGhost' );
		$( '.closeGhost a' ).on( 'click', function( e ) {
			hide_ghost();
			e.preventDefault();
		});
		$( '.ghost' ).appendTo( 'body' );
	}


	// show ghost in single post

	if ( articleWithGhostGallery ) {
		$( '.bpgPhoto:not(.lightbox)' ).on('click', function( e ) {
			$( '.slidedVariable' ).slick( 'slickGoTo', $( this ).find( '.bpbItem' ).find( 'img' ).data( 'order-num' ), false );
			bt_slider_preview( $( '.slidedVariable' ) );
			show_ghost();
			e.preventDefault();
			return false;
		});
	}


	window.addEventListener( 'scroll', scrollPage );

    // BlogList Footer icons pack
    $('.btFootSocialWrapToggler').on( 'click', function(){
        $(this).parent().toggleClass('shown');
    });

    // Gallery slider info bar toggler
    $( '.boldGetInfo .ico a' ).on('click', function (){
		$(this).parent().parent().toggleClass( 'on' ).next().toggleClass( 'open' );
		return false;
    });

	window.bt_set_mobile = function() {
		responsiveMenuActive = true;
		$( '.duplicatedHeader' ).detach( );
		$( '.pageWrap' ).removeClass( 'stickyHeader' );
		if ( hasCentralMenu ) undivide_menu();

		$( '.menuPort' ).prependTo( 'body' );

		// Call menu
		$('.menuTrigger').on( 'click', function(){
			$(this).toggleClass('on');
			$('body').toggleClass('menuOn');
			$( '.menuPort ul li a' ).on( 'click', function(){
				$('.menuTrigger').trigger( 'click' );
			});
		});

		// Set menu toggler
		$( '.menuPort ul ul' ).hide().parent().prepend( '<span class="subToggler"></span> ');
		$( '.subToggler' ).on( 'click', function(){
			$(this).toggleClass('on').next().next().slideToggle(250);
		});

		// Pack social icons
		$( '.ttRight > .ico:not(.ico.white,.ico.accent)' ).wrapAll( '<div class="socPack accents"></div>' );
		$( '.socPack.accents > .ico:not(.ico.white,.ico.accent)' ).wrapAll( '<div class="iconsPane"></div>' );
		$( '.socPack.accents' ).prepend( '<span class="iconsToggler social"></span>' );
		$( '.socPack.accents .iconsToggler' ).on( 'click', function(){
			$(this).parent().toggleClass( 'shown' );
		});
	}

	window.bt_unset_mobile = function() {
		responsiveMenuActive = false;
		$( '.menuPort' ).appendTo( ' .menuHolder .port' );
		if ( hasCentralMenu ) bt_divide_menu();

		// Recall menu
		$('.menuTrigger').removeClass('on').off('click');
		$('body').removeClass('menuOn');

		// Unset menu toggler
		$('.subToggler').off('click').removeClass('on').remove();
		$('.menuPort ul ul').show();

		// Unpack social icons
		$('.iconsPane .ico').unwrap();
		$('.iconsToggler').off('click').remove();
		$('.socPack .ico').unwrap();
	}

	if ( $( 'body' ).hasClass( 'btIsMobile' ) ) {
		window.bt_set_mobile();
	}

    // Centered Menu

	if ( hasCentralMenu ) bt_divide_menu();

	// Vertical alignment fix

	$( '.btMiddleVertical' ).parent().addClass( 'btTableRow' );

	// magnific-popup grid gallery
	$( '.tilesWall.lightbox' ).each(function() {
		$( this ).find( 'a' ).magnificPopup({
			type: 'image',
			// other options
			gallery:{
				enabled:true
			},
			closeMarkup:'<button class="mfp-close" type="button"><i class="mfp-close-icn">&times;</i></button>',
			image: {
				titleSrc: 'data-title'
			},
			closeBtnInside:false
		});
	});

	initTilesGridHover();

	window.setTimeout(function () {
		var startScroll = self['pageYOffset'] || document.documentElement.scrollTop;
		if( startScroll != 0 ) {
			hide_ghost();
		}
	} , 0);

	window.setTimeout( function() { animate_elements(); }, 600 );

	if ( window.location.href.indexOf( '/#' ) > -1 ) {
		scrollPage();
	}

	bt_enquire.handle();

});

function bt_video_resize() {
	$( 'iframe' ).not( '.twitter-tweet' ).each(function() {
		if ( ! $( this ).parent().hasClass( 'boldPhotoBox' ) ) {
			$( this ).css( 'width', '100%' );
			$( this ).css( 'height', $( this ).width() * 9 / 16 );
		}
	});

	$( 'embed' ).each(function() {
		if ( ! $( this ).parent().hasClass( 'boldPhotoBox' ) ) {
			$( this ).css( 'width', '100%' );
			$( this ).css( 'height', $( this ).width() * 9 / 16 );
		}
	});
}

function bt_testimonials_resize() {
	$( '.btTestimonies' ).each(function() {
		var c = $( this );
		var h = 0;
		var h_this = 0;
		$( this ).find( '.btTestimony' ).each(function() {
			h_this = $( this ).height();
			if ( h_this > h ) {
				h = h_this;
			}
		});
		$( this ).find( '.btTestimony' ).height( h );
	});
}

var bt_enquire = {};

bt_enquire.sizes = {};

bt_enquire.register = function( size, handler ) {
	size = parseInt( size.split( ':' )[1] );
	bt_enquire.sizes[ size ] = {};
	bt_enquire.sizes[ size ].handler = handler;
}

bt_enquire.handle = function() {
	var width = ( window.innerWidth > 0 ) ? window.innerWidth : screen.width;
	$.each( bt_enquire.sizes, function( size, obj ) {
		if ( width <= size ) {
			if ( obj.state != 'matched' ) {
				obj.handler.match();
				obj.state = 'matched';
			}
		} else {
			if ( obj.state == 'matched' ) {
				obj.handler.unmatch();
				obj.state = 'unmatched';
			}
		}
	});
}

bt_enquire.register( 'screen and (max-width:1200px)', {
	match: function() {
		if ( ! $( 'body' ).hasClass( 'btIsMobile' ) ) {
			window.bt_set_mobile();
		}
	},
	unmatch: function () {
		if ( ! $( 'body' ).hasClass( 'btIsMobile' ) ) {
			window.bt_unset_mobile();
		}
	}
});

bt_enquire.register( 'screen and (max-width:1024px)', {
	match: function() {
		$('.tabsHorizontal .tabAccordionContent').hide();
		$('.tabsHorizontal .tabAccordionTitle').on( 'click', function() {
			if($(this).hasClass('on')) {
				$(this).removeClass('on').next().slideUp(250);
			}
			else {
				$(this).closest('.tabsHorizontal').find('.tabAccordionTitle').removeClass('on');
				$(this).closest('.tabsHorizontal').find('.tabAccordionContent').slideUp(250);
				$(this).addClass('on').next().slideDown(250);
			}
		});
	},
	unmatch: function () {
		$('.tabsHorizontal .tabAccordionTitle').off('click').removeClass('on');
		$('.tabsHorizontal .tabAccordionContent').show();
	}
});

bt_enquire.register( 'screen and (max-width:960px)', {
	match: function() {
		// Pack contact icons
		$('.ttRight > .ico.white').wrapAll('<div class="socPack whities"></div>');
		$('.socPack.whities > .ico.white').wrapAll('<div class="iconsPane contactIcons"></div>');
		$('.socPack.whities').prepend('<span class="iconsToggler contactInfo"></span>');
		$('.socPack.whities .iconsToggler.contactInfo').on( 'click', function(){
			$(this).parent().toggleClass('shown');
		});
	},
	unmatch: function () {
		// Unpack contact icons
		$('.iconsPane.contactIcons .ico').unwrap();
		$('.iconsToggler.contactInfo').off('click').remove();
		$('.socPack.whities .ico').unwrap();
	}
});

bt_enquire.register( 'screen and (max-width:560px)', {
	match: function() {
		// Pack top menu
		$('.ttLeft > .ico').wrapAll('<div class="topMenuMobile"></div>');
		$('.topMenuMobile > .ico').wrapAll('<div class="tmmPane"></div>');
		$('.topMenuMobile').prepend('<span class="tmmToggler"></span>');
		$('.tmmToggler').on( 'click', function(){
			$(this).parent().toggleClass('shown');
		});

	},
	unmatch: function () {
		// Unpack top menu
		$('.ttLeft .ico').unwrap().unwrap();
		$('.tmmToggler').off('click').remove();
	}
});

$( window ).resize(function() {

	bt_video_resize();

	bt_testimonials_resize();

	bt_enquire.handle();

});

$( window ).load(function() {

	bt_video_resize();

	bt_testimonials_resize();

	var hasCentralMenu = $( '.pageWrap' ).hasClass( 'boldMenuCenter' );

	// will fade out the preloader DIV

	$( '#boldPreloader' ).addClass( 'removePreloader' );
	$( 'body' ).removeClass( 'bodyPreloader' );

});

$( document ).ready(function () {
	var index = 0;
	$( '.tabsHorizontal' ).each(function() {
		$( this ).find( '.tabPanesTabs' ).addClass( 'tabPanesTabs' + index );
		$( this ).find( '.tabPane' ).addClass( 'tabPane' + index );
		$( this ).find( '.tabsHeader' ).addClass( 'tabsHeader' + index );
		$( this ).find( '.bt_tab_li' ).addClass( 'bt_tab_li' + index );
		$( this ).find( '.tabPanesTabs' + index ).slick({
			slide: '.tabPane' + index,
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: false,
			dots: false,
			infinite: false,
			centerMode: false,
			adaptiveHeight: true,
			asNavFor: '.tabsHeader' + index
		});
		$( this ).find( '.tabsHeader' + index ).slick({
			slide: '.bt_tab_li' + index,
			slidesToScroll: 1,
			asNavFor: '.tabPanesTabs' + index,
			dots: false,
			arrows: false,
			infinite: false,
			centerMode: false,
			variableWidth: true,
			centerPadding: '0',
			focusOnSelect: true
		});
		index ++;
	});
});

})( jQuery );
