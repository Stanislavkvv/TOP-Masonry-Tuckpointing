"use strict";

(function( $ ) {

$( window ).ready(function() {

	window.bt_slider_preview = function( slider ) {
		var active = slider.find( '.slick-center' );
		if ( active.length == 0 ) active = slider.find( '.slick-active' );
		var next = active.next( '.slidedItem' );
		var prev = active.prev( '.slidedItem' );
		var next_img = next.data( 'thumb' );
		var prev_img = prev.data( 'thumb' );
		var next_text = next.find( '.h2content' ).first().html();
		var prev_text = prev.find( '.h2content' ).first().html();
		if ( next_text == undefined ) next_text = next.data( 'text' ); // articleWithGhostGallery
		if ( prev_text == undefined ) prev_text = prev.data( 'text' ); // articleWithGhostGallery

		if ( slider.slick( 'slickCurrentSlide' ) == 0 ) { // articleWithGhostGallery
			$( '.boldGetInfo' ).removeClass( 'on' );
			$( '.boldInfoBar' ).removeClass( 'open' );
			$( '.boldGetInfo' ).hide();
		} else {
			$( '.boldGetInfo' ).show();
		}
		
		if ( active.data( 'text' ) != '' ) {
			slider.parent().find( '.btPortfolioSliderCaption' ).parent().find( 'strong' ).show();
			slider.parent().find( '.btPortfolioSliderCaption' ).html( active.data( 'text' ) ); // articleWithGhostGallery
		} else {
			slider.parent().find( '.btPortfolioSliderCaption' ).parent().find( 'strong' ).hide();
			slider.parent().find( '.btPortfolioSliderCaption' ).html( '' );
		}

		if ( active.data( 'description' ) != '' ) {
			slider.parent().find( '.btPortfolioSliderDescription' ).parent().find( 'strong' ).show();
			slider.parent().find( '.btPortfolioSliderDescription' ).html( active.data( 'description' ) ); // articleWithGhostGallery
		} else {
			slider.parent().find( '.btPortfolioSliderDescription' ).parent().find( 'strong' ).hide();
			slider.parent().find( '.btPortfolioSliderDescription' ).html( '' );
		}		
		
		slider.find( '.nsNext .nbsTitle' ).html( next_text );
		slider.find( '.nsPrev .nbsTitle' ).html( prev_text );

		if ( next_img !== undefined ) slider.find( '.nsNext .nbsImgHolder' ).css( 'background-image', 'url(\'' + next_img + '\')' );
		if ( prev_img !== undefined ) slider.find( '.nsPrev .nbsImgHolder' ).css( 'background-image', 'url(\'' + prev_img + '\')' );
	}

	$( window ).resize(function() {
		$( '.slided' ).each(function() {
			$( this )[0].slick.setHeight();
		});
		$( '.slidedVariable' ).each(function() {
			$( this )[0].slick.setHeight();
		});
		$( '.boldPhotoSlide' ).each(function() {
			$( this )[0].slick.setHeight();
		});
	});

	$( '.slidedVariable' ).closest( '.boldSection' ).addClass( 'wVariable' );

    $( '.slided' ).closest( '.port' ).addClass( 'wSlider' );
	var prevArrowHtml = '<h4 class="nbs nsPrev"><a href="#"><span class="nbsImage"><span class="nbsImgHolder"></span></span><span class="nbsItem"><span class="nbsDir">' + window.bt_text.previous + '</span><span class="nbsTitle"></span></span></a></h4>';
	var nextArrowHtml = '<h4 class="nbs nsNext"><a href="#"><span class="nbsItem"><span class="nbsDir">' + window.bt_text.next + '</span><span class="nbsTitle"></span></span><span class="nbsImage"><span class="nbsImgHolder"></span></span></a></h4>';

	$( '.slided' ).each(function() {
	
		$( this ).slick({
			dots: true,
			infinite: false,
			speed: 900,
			slidesToShow: 1,
			adaptiveHeight: true,
			prevArrow: prevArrowHtml,
			nextArrow: nextArrowHtml,
			slide: '.slidedItem'
		});
		
		$( this ).on( 'afterChange', function( event, slick, currentSlide, nextSlide ) {
			bt_slider_preview( $( this ) );
		});
	
		bt_slider_preview( $( this ) );
	});
	
	$( '.slidedVariable' ).each(function() {
		var cmode = true;
		if ( $( this ).data( 'nocenter' ) == 'yes' ) {
			cmode = false;
		}
		$( this ).slick({
			autoplay: false,
			infinite: false,
			speed: 900,
			prevArrow: prevArrowHtml,
			nextArrow: nextArrowHtml,
			slide: '.slidedItem',
			centerMode: cmode,
			variableWidth: cmode
		});
		
		$( this ).on( 'afterChange', function( event, slick, currentSlide, nextSlide ) {
			bt_slider_preview( $( this ) );
		});	

		bt_slider_preview( $( this ) );
		
	});

	$( '.boldPhotoSlide' ).slick({
		dots: false,
		arrows: true,
		infinite: false,
		speed: 300,
		slide: '.bpbItem',
		slidesToShow: 1,
		nextArrow: '<button type="button" class="slick-next"></button>',
		prevArrow: '<button type="button" class="slick-prev"></button>',
		adaptiveHeight: true
	});
	
	// thumb cache
	$( '.slick-slide' ).each(function() {
		var url = $( this ).data( 'thumb' );
		if ( url != '' && url !== undefined ) {
			var img = new Image();
			img.src = url;
		}
	});	

	/*$( '.slided' ).on( 'beforeChange', function( event, slick, currentSlide, nextSlide ) {

	});*/

    $( '.slidedVariable .nsPrev' ).on( 'click', function(e) {
        //$( '.slided' ).slickPrev();
    });

    $( '.slidedVariable .nsNext' ).on( 'click', function(e) {
        //$( '.slided' ).slickNext();
    });

    // Clients slider
    if ( $( '.bclPort' ).length ) {

        $( '.bclPort' ).each( function() {
            var $this = $(this);
            if ( $this.find( '.bclItem' ).length > 0 ) {
                $( '.bclPort' ).slick({
                    dots: false,
                    infinite: false,
                    speed: 300,
                    slidesToShow: 6,
                    prevArrow: '<button type="button" class="slick-prev"></button>',
                    nextArrow: '<button type="button" class="slick-next"></button>',
                    responsive: [
                        {
                            breakpoint: 992,
                            settings: {
                                slidesToShow: 4
                            }
                        },
                        {
                            breakpoint: 768,
                            settings: {
                                slidesToShow: 2
                            }
                        },
                        {
                            breakpoint: 480,
                            settings: {
                                slidesToShow: 1
                            }
                        }
                    ]
                });
            }
        });

    }

    // Slick dots helper
    $( '.slick-dots' ).each(function() {
        $( this ).addClass( 'nol' + $( this ).find( 'li' ).length );
    });

});

})( jQuery );