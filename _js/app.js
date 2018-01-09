'use strict';
/*jshint globalstrict: true*/
/* globals $ */
function CSVToArray(strData, strDelimiter) {
    // Check to see if the delimiter is defined. If not,
    // then default to comma.
    strDelimiter = (strDelimiter || ",");
    // Create a regular expression to parse the CSV values.
    var objPattern = new RegExp((
    // Delimiters.
    "(\\" + strDelimiter + "|\\r?\\n|\\r|^)" +
    // Quoted fields.
    "(?:\"([^\"]*(?:\"\"[^\"]*)*)\"|" +
    // Standard fields.
    "([^\"\\" + strDelimiter + "\\r\\n]*))"), "gi");
    // Create an array to hold our data. Give the array
    // a default empty first row.
    var arrData = [[]];
    // Create an array to hold our individual pattern
    // matching groups.
    var arrMatches = null;
    // Keep looping over the regular expression matches
    // until we can no longer find a match.
    while (arrMatches = objPattern.exec(strData)) {
        // Get the delimiter that was found.
        var strMatchedDelimiter = arrMatches[1];
        // Check to see if the given delimiter has a length
        // (is not the start of string) and if it matches
        // field delimiter. If id does not, then we know
        // that this delimiter is a row delimiter.
        if (strMatchedDelimiter.length && (strMatchedDelimiter != strDelimiter)) {
            // Since we have reached a new row of data,
            // add an empty row to our data array.
            arrData.push([]);
        }
        // Now that we have our delimiter out of the way,
        // let's check to see which kind of value we
        // captured (quoted or unquoted).
        if (arrMatches[2]) {
            // We found a quoted value. When we capture
            // this value, unescape any double quotes.
            var strMatchedValue = arrMatches[2].replace(
            new RegExp("\"\"", "g"), "\"");
        } else {
            // We found a non-quoted value.
            var strMatchedValue = arrMatches[3];
        }
        // Now that we have our value string, let's add
        // it to the data array.
        arrData[arrData.length - 1].push(strMatchedValue);
    }
    // Return the parsed data.
    return (arrData);
  }
  
  function CSV2JSON(csv) {
    var array = CSVToArray(csv);
    var objArray = [];
    for (var i = 1; i < array.length; i++) {
        objArray[i - 1] = {};
        for (var k = 0; k < array[0].length && k < array[i].length; k++) {
            var key = array[0][k];
            objArray[i - 1][key] = array[i][k]
        }
    }
  
    var json = JSON.stringify(objArray);
    var str = json.replace(/},/g, "},\r\n");
  
    return str;
  }
  
// slide up header on scroll
function initScroll()
{
    var lastScrollTop = 0;
    window.addEventListener( 'scroll', function ()
    {
        var distanceY = window.pageYOffset || document.documentElement.scrollTop,
            shrinkOn = 300;

        if ( ( $( window ).width() < 960 ) && ( window.location.pathname !== '/building/test-fits/' ) ) { /* TABLET AND MOBILE */

            var st = $( this ).scrollTop();
            if ( st > lastScrollTop ) {
                $( 'nav' ).addClass( 'header-collapse' );
                $( '.logo-wrapper' ).addClass( 'header-logo-collapse' );
            } else {
                $( 'nav' ).removeClass( 'header-collapse' );
                $( '.logo-wrapper' ).removeClass( 'header-logo-collapse' );
            }
            lastScrollTop = st;

            if ( st < shrinkOn ) {
                $( 'nav' ).removeClass( 'header-collapse' );
                $( '.logo-wrapper' ).removeClass( 'header-logo-collapse' );
            }

        } else {

            if ( distanceY >= 5 ) { /* DESKTOP */
                $( 'nav' ).addClass( 'header-collapse' );
                $( '.logo-wrapper' ).addClass( 'header-logo-collapse' );
            } else {
                if ( $( 'nav' ).hasClass( 'header-collapse' ) ) {
                    $( 'nav' ).removeClass( 'header-collapse' );
                    $( '.logo-wrapper' ).removeClass( 'header-logo-collapse' );
                }
            }

        }
    });
}
// slide up header on scroll

//display desktop subpages navigation on hover
function hoverExpand()
{
    $( '.nav.navbar-nav li:not(.logo-wrapper), .drop-down-nav' ).on( 'mouseover', function ()
    {

        $( '.drop-down-mobile-bg' ).removeClass( 'hidden' );
        $( '.drop-down-nav' ).removeClass( 'slide-out-drop' ).addClass( 'slide-in-drop' );
    });

    $( '.drop-down-nav, .nav.navbar-nav' ).on( 'mouseout', function ()
    {
        $( '.drop-down-nav' ).removeClass( 'slide-in-drop' ).addClass( 'slide-out-drop' );
        $( '.drop-down-mobile-bg' ).addClass( 'hidden' );
    });
}

//scrollToElement
function onElement( trigger, element )
{
    var hT = $( trigger ).offset().top;
    var hH = $( element ).outerHeight();
    var wH = $( window ).height();
    var wS = $( window ).scrollTop();

    if ( wS > ( hT + hH - wH ) ) {
        return true;
    }
}

//updating the views modal
function viewModalUpdate( heightParam )
{
    switch ( heightParam ) {
        case 'high-rise':
            //test-fits needs these to hide the view icon on heights that have no panoramas with them
            $( '.view-icon' ).removeClass( 'hidden' );
            $( '.view-icon' ).attr( 'data-target', '#view' );

            //dynamic panorama content per specified floor
            $( '#view .modal-title' ).html( 'Floor 49 - Panorama' );
            $( '#view .pano-body  .panorama-iframe' ).attr( 'src', '/assets/panos/214/panorama.html' );
            break;
        case 'mid-high-rise':
            $( '.view-icon' ).removeClass( 'hidden' );
            $( '.view-icon' ).attr( 'data-target', '#view' );

            //dynamic panorama content per specified floor
            $( '#view .modal-title' ).html( 'Floor 40 - Panorama' );
            $( '#view .pano-body  .panorama-iframe' ).attr( 'src', '/assets/panos/175/panorama.html' );
            break;
        case 'mid-low-rise':
            $( '.view-icon' ).removeClass( 'hidden' );
            $( '.view-icon' ).attr( 'data-target', '#view' );
            //dynamic panorama content per specified floor
            $( '#view .modal-title' ).html( 'Floor 25 - Panorama' );
            $( '#view .pano-body  .panorama-iframe' ).attr( 'src', '/assets/panos/107/panorama.html' );
            break;
        case 'low-rise':
            $( '.view-icon' ).addClass( 'hidden' );
            break;
        case 'podium':
            $( '.view-icon' ).addClass( 'hidden' );
            break;
        default:
            $( '.view-icon' ).removeClass( 'hidden' );
            $( '.view-icon' ).attr( 'data-target', '#view' );

            //dynamic panorama content per specified floor
            $( '#view .modal-title' ).html( 'Floor 49 - Panorama' );
            $( '#view .pano-body  .panorama-iframe' ).attr( 'src', '/assets/panos/214/panorama.html' );
            break;
    }
}


$( document ).ready( function ()
{
    //redirecting http://bayparkcentre.com.s3-website-us-east-1.amazonaws.com/ to www.bayparkcentre.com
    var pathname = window.location.pathname;
    var hash = window.location.hash;
    if ( window.location.host === 'bayparkcentre.com.s3-website-us-east-1.amazonaws.com' ) {
        window.location.href = "www.bayparkcentre.com" + pathname + hash;
    }

    var $testFitsCont = $( '.test-fits-container' );
    var $testFitsWrapper = $testFitsCont.find( '.test-fits-wrapper' );
    var $testFitsPlates = $testFitsWrapper.find( '.test-fits-plates' );
    var $testFitsScrollableCont = $( '.test-fits-plates-screen .scrollable-content' );

    initScroll();

    //widow fix for page titles
    $( '.titlebox-wrapper h1' ).each( function ()
    {
        var string = $( this ).html();
        string = string.replace( / ([^ ]*)$/, '&nbsp;$1' );
        $( this ).html( string );
    });


    //allowing user to skip the white preloader, if page is taking too long
    $( '.preloader-skip' ).on( 'click', function ()
    {
        $( '.preloader' ).addClass( 'fadeOutPreloader' );
    });

    //when content loads, fade out white preloader and scroll down to section if hash present in url
    $( window ).load( function ()
    {
        $( '.preloader' ).addClass( 'fadeOutPreloader' );

        if ( window.location.hash ) {
            scroll( 0, 0 );
            setTimeout( function () { scroll( 0, 0 ); }, 1 );

            var url = window.location.hash;
            $( function ()
            {
                $( 'html, body' ).animate( {
                    scrollTop: $( url ).offset().top - 85
                }, 2000, 'swing' );
                return false;
            });
        }
    });

    // smooth scrolling to anchor tag and closing the header drop down
    $( '.drop-down-subpages .list-group a[href*="#"]' ).on( 'click', function ( e )
    {
        if ( $( this ).attr( 'href' ).indexOf( '/' ) < 0 ) {
            $( '.drop-down-nav' ).removeClass( 'slide-in-drop' ).addClass( 'slide-out-drop' );
            $( '.drop-down-mobile-bg' ).addClass( 'hidden' );

            e.preventDefault();
            $( 'html, body' ).animate( {
                scrollTop: $( $( this ).attr( 'href' ) ).offset().top - 85 + 'px'
            }, 1000, 'swing' );
        }
    });

    //loading in the looping video only if user is on desktop

    if ( ( $( window ).width() >= 960 ) && ( ( window.location.pathname !== '/building/views/' ) && ( window.location.pathname !== '/building/test-fits/' ) ) ) {
        var poster = $( '.looping-video-container video' ).attr( 'not-poster' );
        var src = $( '.looping-video-container video source' ).attr( 'not-src' );

        $( '.looping-video-container video' ).attr( 'poster', poster );
        $( '.looping-video-container video source' ).attr( 'src', src );

        $( '.looping-video-container video' ).get( 0 ).load();
        $( '.looping-video-container video' ).get( 0 ).play();

    }


    //making only the current slide be clickable
    $( '.slick-slider.page-slider' ).each( function ( index, value )
    {
        $( value ).on( 'init reInit afterChange', function ()
        {
            //clear all buttons
            $( '.slick-slide .slick-img-wrapper' ).removeClass( 'modal-slide-button' );
            $( '.slick-slide  .slick-img-wrapper' ).removeAttr( 'role' );

            //only current slide is clickable
            $( '.slick-active .slick-img-wrapper' ).addClass( 'modal-slide-button' );
            $( '.slick-active  .slick-img-wrapper' ).attr( 'role', 'button' );
        });

    });

    var slickOptions = {
        lazyLoad: 'ondemand',
        dots: false,
        speed: 300,
        slidesToShow: 2,
        slidesToScroll: -1,
        centerMode: true,
        mobileFirst: true,
        variableWidth: true,
        prevArrow: '<div class="swiper-button-prev"></div>',
        nextArrow: '<div class="swiper-button-next"></div>',
        responsive: [{
            breakpoint: 480,
            settings:
            {
                slidesToShow: 1,
                slidesToScroll: -1
            }
        }]
    };

    if ( window.location.pathname === '/team/' ) {
        $( '.slick-slider.page-slider#ivanhoe-slideshow' ).slick( slickOptions );
        $( '.slick-slider.page-slider#wilkinson-slideshow' ).slick( slickOptions );
        $( '.slick-slider.page-slider#hines-slideshow' ).slick( slickOptions );
    } else {
        $( '.slick-slider.page-slider' ).slick( slickOptions );
    }

    // header nav functionality
    var $window = $( window );
    if ( $window.width() >= 960 ) {
        hoverExpand();
    } else {
        $( '.nav.navbar-nav li:not(.logo-wrapper), .drop-down-nav' ).off( 'mouseover' );
        $( '.drop-down-nav, .nav.navbar-nav' ).off( 'mouseout' );
    }

    $( window ).on( 'resize', function ()
    {
        if ( $window.width() >= 960 ) {
            hoverExpand();
        } else {

            $( '.nav.navbar-nav li:not(.logo-wrapper), .drop-down-nav' ).off( 'mouseover' );
            $( '.drop-down-nav, .nav.navbar-nav' ).off( 'mouseout' );
        }
    });

    $( '.close-drop-down, .drop-down-mobile-bg' ).on( 'click', function ()
    {
        $( '.drop-down-nav' ).removeClass( 'slide-in-drop' ).addClass( 'slide-out-drop' );
        $( '.drop-down-mobile-bg' ).addClass( 'hidden' );
    });
    $( '.menu-icon' ).on( 'click', function ()
    {
        $( '.drop-down-mobile-bg' ).removeClass( 'hidden' );
        $( '.drop-down-nav' ).removeClass( 'slide-out-drop' ).addClass( 'slide-in-drop' );
    });

    //TEST FITS PAGE - DESKTOP

    //initialize on page load
    $testFitsWrapper.find( '.height-image img[name="high-rise"]' ).fadeIn( 350 );

    $.getJSON( '/_data/test-fits.json', function ( json )
    {

        //on desktop height picker click
        var height = 'high-rise';
        $testFitsWrapper.find( '.height-list button' ).on( 'click', function ()
        {
            height = $( this ).attr( 'name' );

            //highlighting the chosen floor
            $testFitsWrapper.find( '.height-list button' ).removeClass( 'active-floor' );
            $( this ).addClass( 'active-floor' );

            //changing the building stack image to the chosen highlighted floor
            $testFitsWrapper.find( '.test-fits-heights .heights-picker .height-image img' ).attr( 'src', json[height].buildingstackimg );

            //changing the height info below
            $testFitsWrapper.find( '.height-info .top-row .title h2' ).html( json[height].title );
            $testFitsWrapper.find( '.height-info .bottom-row .floors-info' ).html( json[height].floors );
            $testFitsWrapper.find( '.height-info .bottom-row .rsf-info' ).html( json[height].rsf );

            $testFitsPlates.find( '.plate-image img' ).attr( 'name', json[height].id );
            $testFitsPlates.find( '.plate-image img' ).attr( 'alt', json[height].id );
            //changing floorplate image
            if ( json[height].plates ) {
                $testFitsPlates.find( '.plate-image img' ).attr( 'src', json[height].plates[0].plateimg );
            } else {
                $testFitsPlates.find( '.plate-image img' ).attr( 'src', json[height].img );
            }

            if ( ( height === 'low-rise' ) || ( height === 'podium' ) ) {
                $( '.view-icon' ).addClass( 'hidden' );
            } else {
                $( '.view-icon' ).removeClass( 'hidden' );
            }

            if ( ( height === 'high-rise' ) || ( height === 'podium' ) ) {

                //changing the right-hand side floorplate buttons
                $testFitsPlates.find( '.plate-types-flex button' ).removeClass( 'active-plate' );
                $testFitsPlates.find( '.plate-types-flex button' ).first().addClass( 'active-plate' );
                $testFitsWrapper.find( '.plate-info' ).hide();

                $testFitsPlates.find( '.plate-types-flex' ).css( 'visibility', 'visible' );
                $testFitsPlates.find( '.plate-types-flex button[name="floorplate"]' ).addClass( 'active-plate' );

                //updating correct buttons for podium
                if ( height === 'podium' ) {
                    $testFitsPlates.find( '.plate-types-flex[name="podium-buttons"]' ).show();
                    $testFitsPlates.find( '.plate-types-flex[name="high-rise-buttons"]' ).hide();
                } else {
                    $testFitsPlates.find( '.plate-types-flex[name="podium-buttons"]' ).hide();
                    $testFitsPlates.find( '.plate-types-flex[name="high-rise-buttons"]' ).show();
                }
            } else {
                $testFitsPlates.find( '.plate-types-flex' ).css( 'visibility', 'hidden' );
                $testFitsWrapper.find( '.plate-info' ).hide();
            }
        });
        //changing the corresponding view panorama
        $testFitsWrapper.find( '.view-icon' ).on( 'click', function ()
        {
            console.log( 'hi' );
            viewModalUpdate( height );
        });


        var plate;
        //picking between plates on high-rise and podium
        $testFitsPlates.find( '.plate-types-flex button' ).on( 'click', function ()
        {
            plate = $( this ).attr( 'name' );

            $testFitsPlates.find( '.plate-types-flex button' ).removeClass( 'active-plate' );
            $( this ).addClass( 'active-plate' );
            //updating the plate image
            $testFitsPlates.find( '.plate-image img' ).attr( 'src', json[height][plate].plateimg );

            $testFitsWrapper.find( '.plate-info .top-row h3' ).html( '' );
            $testFitsWrapper.find( '.plate-info .bottom-row' ).html( '' );
            if ( ( plate !== 'floorplate' ) ) {
                //updating plate title
                $testFitsWrapper.find( '.plate-info' ).show();
                $testFitsWrapper.find( '.plate-info .top-row h3' ).html( json[height][plate].platetitle );

                //updating plate info
                $testFitsWrapper.find( '.plate-info .bottom-row' ).html( '' );
                $.each( json[height][plate], function ( index, value )
                {
                    if ( ( index !== 'platetitle' ) && ( index !== 'plateimg' ) && ( index !== 'plateid' ) ) {
                        $testFitsWrapper.find( '.plate-info .bottom-row' ).append( '<div class="label col-md-6 caption">' + index + '</div>' );
                        $testFitsWrapper.find( '.plate-info .bottom-row' ).append( '<div class="info col-md-6 caption">' + value + '</div>' );
                    }

                });
            }
        });

        //TEST FITS PAGE - SMALL SIZE
        var selectedHeight;
        $( '.heights-list-sm .button' ).on( 'click', function ()
        {
            $( '.flex-site' ).css( 'overflow-y', 'hidden' );
            selectedHeight = $( this ).attr( 'name' );

            $( '.test-fits-plates-screen' ).addClass( 'slideIn' );

            //changing the height info
            $testFitsScrollableCont.find( '.plate-info-wrapper .height-info .top-row .title h2' ).html( json[selectedHeight].title );
            $testFitsScrollableCont.find( '.plate-info-wrapper .height-info .bottom-row .floors-info' ).html( json[selectedHeight].floors );
            $testFitsScrollableCont.find( '.plate-info-wrapper .height-info .bottom-row .rsf-info' ).html( json[selectedHeight].rsf );


            $testFitsScrollableCont.find( '.plate-image img' ).attr( 'name', json[height].id );
            $testFitsScrollableCont.find( '.plate-image img' ).attr( 'alt', json[height].id );
            //changing floorplate image
            $testFitsScrollableCont.find( '.plate-image img' ).attr( 'src', json[selectedHeight].img );

            if ( ( selectedHeight === 'low-rise' ) || ( selectedHeight === 'podium' ) ) {
                $( '.view-icon' ).addClass( 'hidden' );
            } else {
                $( '.view-icon' ).removeClass( 'hidden' );
            }

            if ( ( selectedHeight === 'high-rise' ) || ( selectedHeight === 'podium' ) ) {

                //changing the floorplate buttons
                $testFitsScrollableCont.find( '.plate-buttons .plate-types-flex button' ).removeClass( 'active-plate' );
                $testFitsScrollableCont.find( '.plate-buttons .plate-types-flex button' ).first().addClass( 'active-plate' );
                $testFitsScrollableCont.find( '.plate-info-wrapper .plate-info' ).hide();

                $testFitsScrollableCont.find( '.plate-buttons .plate-types-flex button[name="floorplate"]' ).addClass( 'active-plate' );

                //updating correct buttons for podium
                if ( selectedHeight === 'podium' ) {
                    $testFitsScrollableCont.find( '.plate-buttons[name="podium-buttons"]' ).show();
                    $testFitsScrollableCont.find( '.plate-buttons[name="high-rise-buttons"]' ).hide();
                } else {
                    $testFitsScrollableCont.find( '.plate-buttons[name="podium-buttons"]' ).hide();
                    $testFitsScrollableCont.find( '.plate-buttons[name="high-rise-buttons"]' ).show();
                }
            } else {
                $testFitsScrollableCont.find( '.plate-buttons' ).hide();
                $testFitsScrollableCont.find( '.plate-info-wrapper .plate-info' ).hide();
            }

        });
        $testFitsScrollableCont.find( '.view-icon' ).on( 'click', function ()
        {
            viewModalUpdate( selectedHeight );
        });


        //test fits small screens selecting between individual plates
        var selectedPlate;
        $( '.test-fits-plates-screen .plate-buttons .plate-types-flex button' ).on( 'click', function ()
        {
            selectedPlate = $( this ).attr( 'name' );


            $( '.test-fits-plates-screen .plate-buttons .plate-types-flex button' ).removeClass( 'active-plate' );
            $( this ).addClass( 'active-plate' );

            //update the plate image
            $testFitsScrollableCont.find( '.plate-image img' ).attr( 'src', json[selectedHeight][selectedPlate].plateimg );

            $testFitsScrollableCont.find( '.plate-info-wrapper .plate-info .top-row h3' ).html( '' );
            $testFitsScrollableCont.find( '.plate-info-wrapper .plate-info .bottom-row' ).html( '' );
            if ( ( selectedPlate !== 'floorplate' ) ) {

                //updating plate title
                $testFitsScrollableCont.find( '.plate-info-wrapper .plate-info .top-row h3' ).html( json[selectedHeight][selectedPlate].platetitle );
                $testFitsScrollableCont.find( '.plate-info-wrapper .plate-info' ).fadeIn( 300 );

                //fade in and update text info
                $.each( json[selectedHeight][selectedPlate], function ( index, value )
                {
                    if ( ( index !== 'platetitle' ) && ( index !== 'plateimg' ) && ( index !== 'plateid' ) ) {
                        $testFitsScrollableCont.find( '.plate-info-wrapper .plate-info .bottom-row' ).append( '<div class="label col-xs-6 caption">' + index + '</div>' );
                        $testFitsScrollableCont.find( '.plate-info-wrapper .plate-info .bottom-row' ).append( '<div class="info col-xs-6 caption">' + value + '</div>' );
                    }

                });

            }
        });


        $( '.back-to-heights-arrow button' ).on( 'click orientationchange', function ()
        {
            $( '.flex-site' ).css( 'overflow-y', 'auto' );

            $( '.test-fits-plates-screen' ).removeClass( 'slideIn' );

            //plate image back to default 'floor plate'
            $( '.test-fits-plates-screen .plate-info-wrapper .plate-image img' ).hide();

            //hide plate info text
            $( '.test-fits-plates-screen[name="' + selectedHeight + '"] .plate-info-wrapper .plate-info' ).hide();
        });

    });

    //DIAGRAM INTERACTION
    var file;
    if ( window.location.pathname === '/' ) {
        file = '/_data/building-diagram.json';

        //auto play building diagram when scrolled to it
        $( window ).on( 'scroll', function ()
        {
            if ( onElement( '#efficiency', '.diagram' ) ) {
                $( '.diagram .media-section video' ).get( 0 ).currenttime = 0;

                if ( window.matchMedia( '(min-width: 768px)' ).matches ) {
                    $( '.diagram .media-section video' ).removeAttr( 'controls' );
                    $( '.diagram .media-section video' ).get( 0 ).play();
                } else if ( window.matchMedia( '(max-width: 767px)' ).matches ) {
                    $( '.diagram .media-section video' ).attr( 'controls', 'true' );
                }
            }
        });

    } else if ( window.location.pathname === '/location/' ) {
        file = '/_data/location-diagrams.json';

        //auto play diagram video when scrolled to it
        $( window ).on( 'scroll', function ()
        {
            if ( onElement( '#site-access', '.diagram[name="baystreetaccess"]' ) ) {
                $( '.diagram[name="baystreetaccess"] .media-section video' ).get( 0 ).currenttime = 0;

                if ( window.matchMedia( '(min-width: 768px)' ).matches ) {
                    $( '.diagram[name="baystreetaccess"] .media-section video' ).removeAttr( 'controls' );
                    $( '.diagram[name="baystreetaccess"] .media-section video' ).get( 0 ).play();
                } else if ( window.matchMedia( '(max-width: 767px)' ).matches ) {
                    $( '.diagram[name="baystreetaccess"] .media-section video' ).attr( 'controls', 'true' );
                }
            }
            if ( onElement( '#siteaccess-diagram', '.diagram[name="siteaccess"]' ) ) {
                $( '.diagram[name="siteaccess"] .media-section video' ).get( 0 ).currenttime = 0;

                if ( window.matchMedia( '(min-width: 768px)' ).matches ) {
                    $( '.diagram[name="siteaccess"] .media-section video' ).removeAttr( 'controls' );
                    $( '.diagram[name="siteaccess"] .media-section video' ).get( 0 ).play();
                } else if ( window.matchMedia( '(max-width: 767px)' ).matches ) {
                    $( '.diagram[name="siteaccess"] .media-section video' ).attr( 'controls', 'true' );
                }
            }
        });
    }
    var diagram;
    var diagramEff;
    var diagramNeigh;
    var diagramBay;
    var diagramSite;
    $.getJSON( file, function ( json )
    {

        if ( window.location.pathname === '/' ) {
            diagram = json;
            diagramEff = json.efficiency;
        } else if ( window.location.pathname === '/location/' ) {
            diagram = json;
            diagramNeigh = json.neighborhood;
            diagramBay = json.baystreetaccess;
            diagramSite = json.siteaccess;
        }

        var parent;
        var clickedId;
        $( '.diagram .button-section button' ).on( 'click', function ()
        {
            parent = $( this ).closest( '.diagram' ).attr( 'name' );
            clickedId = $( this ).attr( 'id' );

            //changing the json data per diff diagram
            switch ( parent ) {
                case 'efficiency':
                    diagram = diagramEff;
                    break;
                case 'neighborhood':
                    diagram = diagramNeigh;
                    break;
                case 'baystreetaccess':
                    diagram = diagramBay;
                    break;
                case 'siteaccess':
                    diagram = diagramSite;
                    break;
                default:
                    diagram = diagram;
            }


            $.each( diagram, function ( index, value )
            {

                if ( clickedId === value.id ) {

                    //change active button
                    $( '.diagram[name="' + parent + '"] .button-section button' ).removeClass( 'active' );
                    $( '.diagram[name="' + parent + '"] .button-section button[id="' + clickedId + '"]' ).addClass( 'active' );

                    //change the text blurb
                    $( '.diagram[name="' + parent + '"] .caption' ).html( value.caption );

                    //change the video and the video poster, and autoplay
                    if ( parent !== 'neighborhood' ) {
                        $( '.diagram[name="' + parent + '"] .media-section video' ).attr( 'poster', value.img );
                        $( '.diagram[name="' + parent + '"] .media-section video source' ).attr( 'src', value.video );
                        $( '.diagram[name="' + parent + '"] .media-section video' ).get( 0 ).load();
                        $( '.diagram[name="' + parent + '"] .media-section video' ).get( 0 ).currenttime = 0;

                        if ( window.matchMedia( '(min-width: 768px)' ).matches ) {
                            $( '.diagram[name="' + parent + '"] .media-section video' ).removeAttr( 'controls' );
                            $( '.diagram[name="' + parent + '"] .media-section video' ).get( 0 ).play();
                        } else if ( window.matchMedia( '(max-width: 767px)' ).matches ) {
                            $( '.diagram[name="' + parent + '"] .media-section video' ).attr( 'controls', 'true' );
                        }
                    } else {
                        $( '.diagram[name="' + parent + '"] .media-section img' ).attr( 'src', value.img );

                        var attractions = [];
                        if ( clickedId === 'attractions' ) {
                            attractions = $.map( value.attractions, function ( el ) { return el; });
                            $( '.attractions-slide .attraction button .circle' ).removeClass( 'active' );
                            $( '.attractions-slide .attraction:first-child button .circle' ).addClass( 'active' );
                            $( '.attractions-slide-sm, attractions-slide-lg, .attractions-slide' ).slideToggle( 300 );
                        } else {
                            $( '.attractions-slide .attraction button .circle' ).removeClass( 'active' );
                            $( '.attractions-slide-sm, attractions-slide-lg, .attractions-slide' ).slideUp( 300 );
                            $( '.attractions-slide-sm, attractions-slide-lg, .attractions-slide' ).css( 'display', 'none' );
                        }



                        //clicking between the attraction list items and changing image
                        $( '.attractions-slide .attraction' ).on( 'click', function ()
                        {
                            var id = $( this ).attr( 'id' );

                            $( '.attractions-slide .attraction button .circle' ).removeClass( 'active' );
                            $( '.attractions-slide .attraction[id="' + id + '"] button .circle' ).addClass( 'active' );

                            $.each( attractions, function ( index, val )
                            {

                                if ( id === val.id ) {
                                    $( '.diagram[name="' + parent + '"] .media-section img' ).attr( 'src', val.img );
                                }

                            });
                        });
                    }
                }
            });
        });

    });

    // MODALS whenever an overlay/modal is present, don't scroll the body content underneath
    var offset;
    $('.modal').on( 'show.bs.modal', function () {
        setTimeout( function ()
        {
            $( '.legal-body' ).focus();
        }, 500 );
        $( 'html, body' ).addClass( 'no-scroll' );

        //for mobile, documenting the Y position of the page b/c page tends to jump to the top
        offset = $( 'body' ).offset().top;

    });
    $('.modal').on( 'hide.bs.modal', function () {
        $( 'html, body' ).removeClass( 'no-scroll' );

        if ( $( window ).width() < 768 ) {
            $( 'body' ).scrollTop( offset );
        }

    });


    //VIEWS PAGE - panorama switching
    $( '.views-container .pano-button' ).on( 'click', function ()
    {
        var height = $( this ).attr( 'name' );
        viewModalUpdate( height );
    });

    //EXPAND Image
    $( '.image-button, .full-screen-icon' ).on( 'click', function ()
    {
        var src = $( this ).children( 'img' ).data( 'big' );
        var style = $( this ).children( 'img' ).attr( 'style' );
        var alt = $( this ).children( 'img' ).attr( 'alt' );

        var testfitssrc;
        var testfitsalt;
        if ( window.matchMedia( '(min-width: 960px)' ).matches ) {
            testfitssrc = $testFitsPlates.find( '.plate-image img' ).attr( 'src' );
            testfitsalt = $testFitsPlates.find( '.plate-image img' ).attr( 'alt' );

        } else {
            testfitssrc = $testFitsScrollableCont.find( '.plate-image img' ).attr( 'src' );
            testfitsalt = $testFitsScrollableCont.find( '.plate-image img' ).attr( 'alt' );
        }

        if ( window.location.pathname === '/building/test-fits/' ) {
            $( '#expand .expand-body .expanded-image' ).attr( 'src', testfitssrc );
            $( '#expand .expand-body .expanded-image' ).attr( 'alt', testfitsalt );
        } else {
            $( '#expand .expand-body .expanded-image' ).attr( 'src', src );
            $( '#expand .expand-body .expanded-image' ).attr( 'alt', alt );
            $( '#expand .expand-body .expanded-image' ).attr( 'style', style );
        }

    });

    //SLIDESHOW MODAL - dynamic json
    $( '.page-slider' ).on( 'click', '.modal-slide-button', function ()
    {
        $( '#slideshow' ).modal( 'show' );

        var slideID = $( this ).closest( '.page-slider' ).attr( 'id' );
        var currentImg = $( this ).find( 'img' ).attr( 'src' );
        var currentIndex = $( this ).closest( '.page-slider' ).slick( 'slickCurrentSlide' );
        var slidefile = '/_data/' + slideID + '.json';
        var captionCarouselID = slideID + '-caption-carousel';

        $( '.caption-carousel' ).attr( 'id', captionCarouselID );
        //get the correct JSON file based on selected slider's ID
        $.getJSON( slidefile, function ( json )
        {
            var $data = json.slideshow;

            //erase current items in modal's slideshow to make new one, do the same for caption slideshow
            $( '#modal-slideshow .carousel-inner' ).html( '' );
            $( '#' + captionCarouselID + ' .carousel-inner' ).html( '' );

            $.each( $data, function ( index, value )
            {
                //append new slideshow items from the selected json file
                $( '#modal-slideshow .carousel-inner' ).append( '<div class="item"><img src="' + value.url + '" alt="' + value.caption + '"></div>' );

                //if selected image equals one of the images in the modal slideshow I just created,
                //set it as the active slide
                $( '#modal-slideshow .carousel-inner .item' ).each( function ( index, value )
                {
                    if ( currentImg === $( value ).find( 'img' ).attr( 'src' ) ) {

                        $( value ).addClass( 'active' );

                    }
                });

                var trueIndex = index + 1;
                //append captions to caption slideshow from the same json file with index and slideshow length
                $( '#' + captionCarouselID + ' .carousel-inner' ).append( '<div class="item"><h5 class="white modal-title"><span class="white">' + trueIndex + ' of ' + $data.length + ' | </span><small class="sans white">' + value.caption + '</small></h5></div>' );

                //setting the active item for caption slideshow
                $( '#' + captionCarouselID + ' .carousel-inner .item' ).each( function ( index, value )
                {

                    if ( currentIndex === index ) {
                        $( value ).addClass( 'active' );
                    }
                });

            });
        });

        //making modal slideshow work with keyboard
        $( '#slideshow' ).on( 'keydown', function ( e )
        {
            if ( e.which === 39 ) { //next

                $( '#modal-slideshow' ).carousel( 'next' );

            } else if ( e.which === 37 ) { //prev
                $( '#modal-slideshow' ).carousel( 'prev' );
            }
        });

        $( '#modal-slideshow' ).swiperight( function ()
        {
            $( this ).carousel( 'prev' );
        });
        $( '#modal-slideshow' ).swipeleft( function ()
        {
            $( this ).carousel( 'next' );
        });

        //fade captions in and out as you scroll slideshow
        $( '#modal-slideshow' ).on( 'slide.bs.carousel', function ( e )
        {
            //direction in which the slide itself is moving
            if ( e.direction === 'left' ) {
                $( '#' + captionCarouselID ).carousel( 'next' );
            } else {
                $( '#' + captionCarouselID ).carousel( 'prev' );
            }

        });

    });

    $( '#view .modal-dialog .modal-content .modal-header .close' ).on( 'click', function ()
    {
        $( '.panorama-iframe' ).attr( 'src', '' );
        $( '#view' ).modal( 'hide' );
    });

    $( '#slideshow' ).on( 'hidden.bs.modal', function ()
    {
        $( '.caption-carousel' ).attr( 'id', 'caption-slideshow' );
    });

    //VIMEO Modal
    $( '#vimeo' ).on( 'shown.bs.modal', function ()
    {
        $( '#vimeo' ).find( 'iframe' ).attr( 'src', 'https://player.vimeo.com/video/144034979?autoplay=1' );
    });

    $( '#vimeo' ).on( 'hidden.bs.modal', function ()
    {
        $( '#vimeo' ).find( 'iframe' ).attr( 'src', '' );
    });

    //Press    
    var y;
    $.ajax( {
        type: "GET",
        url: "https://docs.google.com/spreadsheets/d/1pjbHTEipYCef1VgVvbZA2GWBgS1mNA6jFVwl0BJsMeQ/pubhtml",
        dataType: "tsv",
        crossDomain: true,
        success: function ( data ){
            console.log( 'success', data );
            var list = data.split('\n');
            for (var i = 1 ; i < list.length; i++) {
                y = list[i].split('\t');
                list[i] = y;
                $('.news-rack').append(
                    '<div class="news-article hover-area ">' +
                        '<a href="'+y[3]+'" target="_blank" style="transition:none;">' +
                            '<div class="bar bgclr-honey" style="margin-bottom:0.5em;margin-top:2em;"></div>' +
                                '<p class="link1 white">' + y[1] + '</p>'+
                                '<p class="link1 white" style="text-transform:uppercase;">' + y[2] + '</p>'+
                                '<h2 class="white">'+ y[0] + '</h2>' +
                                '<p class="honey link1">Read More' + 
                                    '<img src="/assets/images/icons/arrow-right-honey-link.png" style="width:1.5em;" class="jumping-arrow">' + 
                                '</p>'+
                            '</div>'+
                        '</a>'+
                    '</div>'
                );
            }
            /*
            Index:
            0 = snippet
            1 = Publisher
            2 = date
            3 = url
            */
        },
        error: function ( data ) {
            console.log( 'error', data);

            //If can't get to Google link, use the backup local tsv file in _data folder. 
            $.get('//'+window.location.host+'/_data/Press.tsv', function(tsv) {
                var list = tsv.split('\n');
                for (var i = 1 ; i < list.length; i++) {
                    y = list[i].split('\t');
                    list[i] = y;
                    $('.news-rack').append(
                        '<div class="news-article hover-area ">' +
                            '<a href="'+y[3]+'" target="_blank" style="transition:none;">' +
                                '<div class="bar bgclr-honey" style="margin-bottom:0.5em;margin-top:2em;"></div>' +
                                    '<p class="link1 white">' + y[1] + '</p>'+
                                    '<p class="link1 white" style="text-transform:uppercase;">' + y[2] + '</p>'+
                                    '<h2 class="white">'+ y[0] + '</h2>' +
                                    '<p class="honey link1">Read More' + 
                                        '<img src="/assets/images/icons/arrow-right-honey-link.png" style="width:1.5em;" class="jumping-arrow">' + 
                                    '</p>'+
                                '</div>'+
                            '</a>'+
                        '</div>'
                    );
                }
                /*
                Index:
                0 = snippet
                1 = Publisher
                2 = date
                3 = url
                */
            });
        }
    });

    // Community Blog: Read More Btn
    $('.post').find('.post-read-more').on('click', function (e) {
        e.preventDefault();
        this.expand = !this.expand;
        $(this).find('span').text(this.expand?"READ LESS":"READ MORE");
        $(this).closest('.post').find('.small, .big').toggleClass('small big');
    });

    // community blog: pushState history
    var oldtitle = document.title;
    $('.footer-pages .link1 button, .footer-wrapper .col-xs-3 .link1').on('click', function() {
        if (this.dataset.target === '#community' && location.hash !== '#community') {
            history.pushState({page: location.pathname}, '', location.href+this.dataset.target);
            document.title = "CIBC Square Community Updates";
        }
    });
    $('.modal .modal-dialog .modal-content .modal-header .close').on('click', function() {
        if (this.dataset.target === '#community') {
            history.pushState({page: location.pathname}, '', location.href.replace(location.hash, ''));
            document.title = oldtitle;
        }
    });
    if(location.hash === '#community') {
        $('#community').modal('show');
        document.title = "CIBC Square Community Updates";
    }

    window.onhashchange = function() {
        console.log(location.hash);
        if (location.hash === '#community') {
            $('#community').modal('show');
            document.title = "CIBC Square Community Updates";
        } else if (location.hash === '' && $('#community').hasClass('in')) {
            $('#community').modal('hide');
            var oldtitle = document.title;
        }
    }

});
