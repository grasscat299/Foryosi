function page(){
    console.log( "zoom", window.visualViewport.scale );
    console.log( "transform", $( "#btn5" ).css( "transform" ) );
    console.log( "zoom", $( "body" ).css( "zoom" ) );
    //$( "body" ).css( { "width": document.body.clientWidth, "height" : document.documentElement.clientHeight } );
    $( "body" ).css( { "width": screen.width, "height" : screen.height } );
    //$( "body" )[0].width = screen.width;
    //$( "body" )[0].width = screen.height;
    console.log( "page {" );
	log[log.length]='(page2.js)'+'page {';
    //tm
    //canvas数値設定
    scw = document.body.clientWidth;    //scw
    wi = document.body.clientWidth;
    console.log( "wi", wi );
    $( "#tm" ).css( {"width":wi} );
    wh = wi/116*16;
    wx = (wi-wh)/16;
    wy = wx*8;
    $( "#tm" ).css( {"height":wy*2} );
    bh = wh/2;
    hh = wy*2 - bh*2;
    dx = ( wh-2 )/4;
    dh = (hh-dx*4)/2+bh;
    tx = wi/116*46/5;
    ty = wy/2;
    font = wi/80*3;
    wi = wh+wx*96+tx*5;
    tmcvs.width = wi;
    tmcvs.height = wy*2;
    tmcvs.style.width = wi;
    tmcvs.style.height = wy*2;
    
    tmw = wy*2+2+wy/43*12;

    //page
    $( "#scrollbar" ).css( {"top":wx*2+wy*2,"width":document.body.clientWidth,"height":wx});
    scrollelm.width = document.body.clientWidth;
    scrollelm.height = wx;
    dsl = 0;
    haba = scw*scw/wi;


    console.log( "wx", wx, wx*2+wy*2+wx );
    home.style.height = wx*2+"px";
    btn5.height = wx*2;
    $( "#tm" ).css( {"top":wx*2} );
    $( "#pm" ).css( {"width":screen.width, "height":screen.height-wx*2-wy*2-wx } );
    $( "#pm" ).css( "top",wx*3+wy*2 );
    homemenu.style.width = wi/3+"px";
    homemenu.style.height = window.innerHeight+"px";

    btn9 = $( "#btn9" )[0];

    //pm
    pw = screen.width;
    pp = pw/78*9;
    pp2 = pw/78*18;
    py1 = pw/78*11;
    py2 = pw/78*12;
    py3 = pw/78*21;
    py4 = pw/78*7;

    px1 = pw/78*23;
    px2 = pw/78*88;
    px3 = pw/78*101;
    px4 = pw/78*3;
    px6 = py1/2;
    px5 = px1*12-px2-px3-px4*2-px6;
    console.log( "px5", px5 );
    px7 = px1/187*12;
    ph1 = pp+py3+py4;
    ppp = 5;
    pmcvs.style.top = ph1+"px";
    pmcvs.style.left = pp+"px";
    pmcvs.style.width = px1*12+"px";
    pmcvs.style.height = py2*13+"px";
    pmcvs.width = px1*12;
    pmcvs.height = py2*13;

    for( let a = 0; a < 158; a ++ ){
        let pmtextform = document.getElementById( a );
        if( a < 156 ){
            let x = Math.floor( a/13 );
            let y = a%13;
            pmtextform.style.top = ph1+py2*y+"px";
            pmtextform.style.left = pp+px1*x+"px";
            pmtextform.style.width = px1-12+"px";
            pmtextform.style.height = py2-12+"px";
        }else{
            if( a == 156 ){
                pmtextform.style.top = pp+"px";
                pmtextform.style.left = pp+"px";
                pmtextform.style.width = px2+"px";
                pmtextform.style.height = py3+"px";
            }else{
                pmtextform.style.top = pp+"px";
                pmtextform.style.left = pp+px2+px4+"px";
                pmtextform.style.width = px3+"px";
                pmtextform.style.height = py3+"px";
            }
        }
    }

    for( let a = 0; a < 5; a++ ){
        let btnelm = document.getElementById( "btn"+a );
        let t,l,w,h;
        if( a < 2 ){
            t = pw/78*93;
            w = pp;
            h = py2*3;
            if( a == 0 ){
                l = 0;
            }else{
                l = px1*12+pp;
            }
        }else if( a == 2 ){
            t = pp+py3*0.5+ppp+1;
            l = pp+px2+px3+px4*2;
            h = py3/2+ppp+1;
            w = h*2;
        }else if( a == 3 ){
            t = pp;
            l = pp+px2+px3+px4*2+px5;
            w = px6;
            h = py3/2;
        }else{
            t = pp+py3*0.5+ppp+1;
            l = pp+px2+px3+px4*3+(py3/2+ppp+1)*2
            h = py3/2+ppp+1;
            w = h*2;
        }
        console.log( "l", l );
        btnelm.style.top = t+"px";
        btnelm.style.left = l+"px";
        btnelm.style.width = w+"px";
        btnelm.style.height = h+"px";
    }

    pmtitle.style.top = pp+"px";
    pmtitle.style.left = pp+px2+px3+px4*2+"px";
    pmtitle.style.fontSize = py3/2+"px";
    console.log( "}" );
	log[log.length]='(page2.js)'+'}';
}

function pageaddE(){
    console.log( "pageaddE {" )
	log[log.length]='(page2.js)'+'pageaddE {';
    btn5.addEventListener( "touchstart",
    function(){
        console.log( "click btn5" );
		log[log.length]='(page2.js)'+'click btn5';
        homemenu.style.display = "block";
    },
    false );

    btn6.addEventListener( "touchstart",
    function(){
        console.log( "click btn6" );
		log[log.length]='(page2.js)'+'click btn6';
        homemenu.style.display = "none";
    },
    false );

    btn7.addEventListener( "touchstart",
    function(){
        console.log( "click btn7" );
		log[log.length]='(page2.js)'+'click btn7';
        tsnum = document.getElementById( "tsnum" );
        window.open( ajaxurl["tmsheet"]+"tmsheet5.html?"+Number( tsnum.value )+"&"+user, "_blank" );
    },
    false );
    console.log( "}" );
	log[log.length]='(page2.js)'+'}';

    $( "#btn8" ).on( "touchstart", 
        function(){
            let logs = $( "#logtext" ).val()+"/"; 
            for( let loop of log ){
                logs += loop+"/";
            }
            console.log( "logs", logs );
            $.ajax({
                type: "POST",
                url: ajaxurl["log"]+"createlog.php",
                data:{ "logs": logs },
                dataType : "text"
            }).done( function( data ){
                console.log( "data", data );
            })
        }
    )
    $( "#btn9" ).on( "touchstart",
    function(){
        if( tg2 == "tc"){
            btn9.value = "編集開始";
            tg2 = "n";
            scrollstart();
        }else{
            btn9.value = "編集終了";
            tg2 = "tc";
            scrollstop();
        }
    });
    $( "#scrollbar" ).on( "touchstart",
    function(){
        if( dsl < event.changedTouches[0].clientX && event.changedTouches[0].clientX < dsl+haba ){
            scrollc = "down";
        }
    });

    $( "#scrollbar" ).on( "touchmove",
    function(){
        if( scrollc == "down" ){
            dsl = event.changedTouches[0].clientX-haba/2;
            if( dsl < 0 ) dsl = 0;
            else if( dsl > scw-haba ) dsl = scw-haba;
            $( "#tm" )[0].scrollTo( dsl/scw*wi ,0);
            drowbar();
        }
    });

    $( "#scrollbar" ).on( "touchend",
    function(){
        scrollc = "up";
    });

    
}
function drowbar(){
    scrollbar.clearRect( 0,0,scw, wx );
    scrollbar.fillStyle = "rgba( 200, 200, 200, 1 )"
    scrollbar.fillRect( dsl, 0, haba, wx );
    scrollbar.strokeRect( dsl, 0, haba, wx );
}

function scrollstart(){
    console.log( "start" );
    
    tmcvs.removeEventListener( "touchstart", drowts, false );
    tmcvs.removeEventListener( "touchend", drowte, false );
    tmcvs.removeEventListener( "touchmove", drowtm, { passive: false } );
}
function scrollstop(){
    console.log( "stop" );
    tmcvs.addEventListener( "touchstart", drowts, false );
    tmcvs.addEventListener( "touchend", drowte, false );
    tmcvs.addEventListener( "touchmove", drowtm, { passive: false } );
}

function accheck(){
    $.ajax({
        type: "POST",
        url: ajaxurl["login"]+"ac2.php",
        data:{ "user": user, "pass": pass },
        dataType : "text"
    }).done( function( data ){
        console.log( "data", data );
        if( data == "t" ){
            rcvtm( nd, tcvs ); //データ取得
            rcvpmtitle( rcvpm );
        }
    })
}
