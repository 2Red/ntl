// function createCookie() {
// 	var date = new Date();
// 	 var minutes = 15;
// 	 date.setTime(date.getTime() + (minutes * 60 * 1000));
// 	 console.log(date);
// 	 $.cookie("fly", "exist", { expires: date });
// 	 // var ca = document.cookie.split(';');
// 	 // console.log(ca);
// 	 // console.log($.cookie("fly"));
// }

function Fly(fid, type, color, sh, sw, x, y, fly_img, name, title) {

	if (typeof fly_img == "undefined" || fly_img == '') {
		var fly_img = "./js/images/ruoi.png";
	}

	if (typeof sh == "undefined" || sh == 0 || typeof sw == "undefined" || sw == 0) {
		if (typeof(window.innerWidth) == 'number') {
			var sw = window.innerWidth;
			var sh = window.innerHeight;
		} else if (document.documentElement && (document.documentElement.clientWidth || document.documentElement.clientHeight)) {
			var sw = document.documentElement.clientWidth;
			var sh = document.documentElement.clientHeight;
		} else if (document.body && (document.body.clientWidth || document.body.clientHeight)) {
			var sw = document.body.clientWidth;
			var sh = document.body.clientHeight;
		};
	}
	var f = document.createElement("DIV");
	var offset = 200;
	var offsetb = 250;
	var caminando = true;

	if (typeof x == "undefined" || x == 0 || typeof y == "undefined" || y == 0) {
		var x = 0;
		var y = 0;
		if (Math.random() < 0.5) {
			if (Math.random() < 0.5) {
				var x = 5;
			} else {
				var x = (sw - 50);
			}
			var y = Math.round(Math.random() * (sh - 50));
		} else {
			if (Math.random() < 0.5) {
				var y = 5;
			} else {
				var y = (sh - 50);
			}
			var x = Math.round(Math.random() * (sw - 50));
		}

	}
	this.x = x;
	this.y = y;
	if (typeof xx == "undefined" || xx == 0) {
		var xx = 3;
	}
	if (typeof yy == "undefined" || yy == 0) {
		var yy = 3;
	}
	if (typeof vv == "undefined" || vv == 0) {
		var vv = 4.5;
	}
	if (typeof hh == "undefined" || hh == 0) {
		var hh = 4.5;
	}
	this.movestep = 30;
	this.type = type;
	this.color = color;
	this.fid = fid;
	this.goaway = false;
	this.move_strange = false;
	this.name = name;
	this.title = title;
	this.move_v = false;
	this.move_h = false;
	this.hasstop = false;
	this.hasclick = false;

	if (Math.random() < 0.5) {
		this.gender = "?????c";
	} else {
		this.gender = "C??i";
	}



	var t = document.createElement("DIV");
	// $(t).html("<b> + this.name+</b><br><b>Type: </b>" + this.type + "<br><b>Color: </b>" + this.color + "<br><b>Gender: </b>" + this.gender);
	
	// $(t).html("He he he...");
	t.style.background = '#fff';
	t.style.color = '#222';
	t.style.position = "absolute";
	t.style.zIndex = 9998;
	t.style.minWidth = '120px';
	t.style.minHeight = '100px';
	t.style.margin = '25px 50px';
	t.style.padding = '10px';
	t.style.opacity = '0.95';
	t.style.borderRadius = '3px';
	t.style.boxShadow = '1px 1px 2px 1px #222222';
	t.style.display = 'none';
	if(this.name == 'Nh???c B???t Ru???i'){
		$(t).html(this.name + " n??i:\n"+'"T???ch t?? ki???m ph??p. Mu???n th??nh v?? c??ng ph???i xu???ng ki???m t??? cung."');
		this.gender = "?????c";
	} else if(this.name == 'L?? M???c Ru???i') {
		$(t).html(this.name + " n??i:\n"+'"H???i th??? gian t??nh l?? g??, m?? y??u th?? l???i ph???i ch???ch?"');
		this.gender = "C??i";
	} else if(this.name == '?????c C?? Ru???i') {
		$(t).html(this.name + " n??i:\n"+'"Tao ??ang ??i t??m th???ng D????ng Qu?? ????? ????i ki???m!"');
		this.gender = "?????c";
	} else {
		$(t).html(this.name + " n??i:\n"+'"Qu?? nhi ??! Ch??ng ??ang ??? ????u h???.."');
		this.gender = "C??i";
	}
	
	var timeFlySay = 0;
	var flySay = setInterval(function() {
		timeFlySay++;
		if(timeFlySay == 10) {
			t.style.display = 'block';
		}
		if(timeFlySay == 20) {
			t.style.display = 'none';
			timeFlySay = 0;
			clearInterval(flySay);
		}
	}, 1000);
	

	f.appendChild(t); 

	f.title = this.name + "\nLo???i: "+this.type+"\nM??u s???c: "+this.color+"\nGi???i t??nh: "+this.gender+"\nM??n ph??i: "+this.title;
	f.id = fid;
	f.style.width = "50px";
	f.style.height = "50px";
	f.style.backgroundImage = "url(" + fly_img + ")";
	f.style.backgroundPosition = "0px -" + offset + "px";
	f.style.position = "absolute";
	f.style.left = Math.round(x) + "px";
	f.style.top = Math.round(y) + "px";
	f.style.zIndex = 9999;
	f.style.cursor = 'pointer';
	var parent = this;

	var s = document.createElement("DIV");

	f.addEventListener('mousedown', function() {
		parent.hasclick = true;
		parent.stop();
		setTimeout(function(){
			var value_message = Math.floor(Math.random() * 10) + 1;
			switch (value_message) { 
				case 1: 
					$(t).html(parent.name + " n??i:\n"+'"i za..Huynh ??! Huynh ??ang ???? Mu???i ????, c?? bi???t kh??ng h??? !"')
					break;
				case 2: 
					// $(t).html(parent.name + " n??i:\n"+'"Ng????i ???? tuy???t t??nh, c??ng ?????ng tr??ch ta b???t ngh??a. Ng??y n??y n??m sau s??? l?? ng??y gi??? c???a ng????i"')
					$(t).html(parent.name + " n??i:\n"+'"Chung quy 16 n??m h???n ?????c.. T??nh n??y v???n tr???n theo th???i gian."')
					break;
				case 3: 
					$(t).html(parent.name + " n??i:\n"+'"Cho d?? ng????i chi???m ???????c th??n x??c ta nh??ng m??i c??ng kh??ng chi???m ???????c t??m h???n ta."')
					break;
				case 4: 
					// $(t).html(parent.name + " n??i:\n"+'"??a t??nh t??? c??? kh??ng d?? h???n... D?? h???n mi??n mi??n v?? tuy???t k???."')
					$(t).html(parent.name + " n??i:\n"+'"Ta ??? d?????i ????y Tuy???t t??nh c???c.."')
					break;
				case 5: 
					// $(t).html(parent.name + " n??i:\n"+'"???? em c??ng ???????c nh??ng nh??? bo nha a !"')
					$(t).html(parent.name + " n??i:\n"+'"Chung Nam S??n h???u. Ho???t T??? Nh??n m???. Th???n ??i??u Hi???p L???. Tuy???t t??ch giang h???."')
					break;
				case 6: 
					$(t).html(parent.name + " n??i:\n"+'"L???i l?? ng????i. Nh?? ng????i c?? bi???n th??nh tro ta c??ng nh???n ra."')
					break;
				case 7: 
					$(t).html(parent.name + " n??i:\n"+'"?????t c?? th??? c??ng, s??ng c?? h?? b??. ???????ng n??y do ta m???. Ta mu???n b?? ????u ta b??."')
					break;
				case 8: 
					$(t).html(parent.name + " n??i:\n"+'"Ph??ng h??? ????? ??ao, l???p ?????a th??nh ph???t. Ch??n l?? ????n gi???n v???y l??? n??o ?????i hi???p l???i ko hi???u."')
					break;
				case 9: 
					$(t).html(parent.name + " n??i:\n"+'"Bu??ng ta ra con ti???n t??? n??y !"')
					break;
				case 10: 
					$(t).html(parent.name + " n??i:\n"+'"?????ng m??. Thi???p ??ang mang trong m??nh c???t nh???c c???a ch??ng..."')
					break;																					
			}
			if(parent.hasclick){				
				$(t).fadeIn(200);				
			}
		}, 500);
		if(parent.died) {
			setTimeout(function(){
				if(parent.hasclick){
					$(f).fadeOut(200);				
					f.style.backgroundImage = "url(" + fly_img + ")";
					f.title = parent.name + "\nLo???i: " + parent.type + "\nM??u s???c: " + parent.color + "\nGi???i t??nh: " + parent.gender + "\nM??n ph??i: " + parent.title;
					$(f).fadeIn(500);
					setTimeout(function(){
						parent.flying();
					}, 500);					
					$(t).fadeOut(200);	
					parent.died = false;			
				}
			}, 5000);
		}		
	}, false);
	f.addEventListener('mouseup', function() {
		if(!parent.died){						
			parent.flying();
		}
		parent.hasclick = false;
		$(t).fadeOut(200);
		//parent.flying();
	}, false);
	f.addEventListener('mouseover', function() {
		if(!parent.died){
			parent.speedmove();
			if (Math.random() < 0.5) {
				f.style.cursor = 'url("./js/images/flyswatter.png"), pointer';
				$('html').css('cursor','url("./js/images/flyswatter.png"), default');			
				hasswatter = true;
								
			}
			setTimeout(function() {
				f.style.cursor = 'pointer';
				$('html').css('cursor','inherit');	
				hasswatter = false;				
			}, 2000);
		}
	}, false);
	f.addEventListener('mouseout', function() {
		if(!parent.died){
			$(t).fadeOut(200);
			if(parent.hasclick){
				parent.flying();
			} else {
				parent.speedmove();
			}
		}
				
	}, false);
	f.addEventListener('click', function() {	
		if(hasswatter){
			f.style.cursor = 'pointer';			
			f.style.backgroundImage = "url(./js/images/fly-swattered.png)";			
			setTimeout(function(){
				$(f).fadeOut(0);
				f.style.backgroundImage = 'url(./js/images/flies_die.png)';
				$(f).fadeIn();
			}, 1000);
			hasswatter = false;
			parent.stop();
			parent.died = true;
			f.title = "Click v??o gi??? 5s ????? h???i sinh em ??i anh...!";
		} else {
			if (Math.random() < 0.3) {
				f.style.cursor = 'url("./js/images/flyswatter.png"), auto';
				hasswatter = true;				
			}
			setTimeout(function() {
				f.style.cursor = 'pointer';
				hasswatter = false;
			}, 2000);
		}
	}, false);	
	document.body.appendChild(f);


	this.setmove = function(id) {

		var parent = this;
		if(!this.hasstop){
			if(!parent.move_h){
				if (!parent.move_strange) {
					if (y >= (sh - 50) || Math.random() < 0.005) {
						yy = -yy;
						c();
					} else if (y <= 0 || Math.random() < 0.005) {
						yy = -yy;
						c();
					}
					if (x >= (sw - 50) || Math.random() < 0.005) {
						xx = -xx;
						c();
					} else if (x <= 0 || Math.random() < 0.005) {
						xx = -xx;
						c();
					}
				} 		
				x = x + xx;
				y = y + yy;
			} else {			
				if (Math.random() < 0.025 && !parent.move_strange) {
					parent.move_v = !parent.move_v;
					c(true);				
				}	
				if (parent.move_v) {
					if (y >= (sh - 50)) {
						hh = -hh;						
						c(true);
					} else if (y <= 0) {
						hh = -hh;						
						c(true);
					}
					y = y + hh;
				} else {
					if (x >= (sw - 50)) {
						vv = -vv;						
						c(true);
					} else if (x <= 0) {
						vv = -vv;						
						c(true);
					}
					x = x + vv;
				}		
			}
		}
		f.style.left = Math.round(x) + "px";
		f.style.top = Math.round(y) + "px";			

		if (Math.random() < 0.015 && !parent.move_strange) {
			parent.move_h = !parent.move_h;
			if(parent.move_h == true){
				c(true);
			} else {
				c();
			}
		}

		if (Math.random() < 0.05) {
			clearInterval(id);
			id = setInterval(function() {
				parent.p(id)
			}, this.movestep);
			caminando = false;
			showOffset(offset);			
			
		} else {
			if (caminando) {
				caminando = false;
				showOffset(offset);
			} else {
				caminando = true;
				showOffset(offsetb);
			}
		}

	};
	this.p = function(id, movestep) {
		var parent = this;
		if (Math.random() < 0.075) {
			clearInterval(id);
			id = setInterval(function() {
				parent.setmove(id)
			}, parent.movestep);
		}
	};

	function c(vertival) {
		if(vertival){			
			if(parent.move_v){
				if(hh < 0){
					offset = 500;
					offsetb = 550;
				} else {
					offset = 600;
					offsetb = 650;
				}
			} else {
				if(vv < 0){
					offset = 700;
					offsetb = 750;
				} else {
					offset = 400;
					offsetb = 450;
				}
			}
		} else {		
			if (yy < 0) {
				if (xx < 0) {
					offset = 100;
					offsetb = 150;
				} else {
					offset = 0;
					offsetb = 50;
				}
			} else if (xx < 0) {
				offset = 300;
				offsetb = 350;
			} else {
				offset = 200;
				offsetb = 250;
			}
		}		
	};

	function showOffset(o) {
		f.style.backgroundPosition = "0px -" + o + "px";
	}
	this.move = function() {
		this.hasstop = false;
		var parent = this;
		var id = setInterval(function() {
			parent.setmove(id);
		}, parent.movestep);
	}
	this.flying = function() {
		this.hasstop = false;
		this.movestep = 0;
		var parent = this;
		timeout = Math.random() * (5000 - 2500) + 2500;

		setTimeout(function() {
			parent.movestep = 30;
		}, timeout);

	}
	this.speedmove = function() {
		this.hasstop = false;
		this.movestep = 0;
		var parent = this;
		timeout = Math.random() * (2500 - 1000) + 1000;

		setTimeout(function() {
			parent.movestep = 30;
		}, timeout);
	}
	this.stop = function() {
		this.hasstop = true;
	}

	function isEqualsHost(myhost){
		var hostName = window.location.hostname;
            if(hostName == myhost){
                return true;
            }else{
                return false;
            }

	}

	this.moveout = function() {
		if(!this.goaway){
			this.goaway = true;
			var parent = this;		
			parent.move_strange = true;
			var hide = setInterval(function() {
				if (y >= sh-50 || x >= sw-50 || y <= 0 || x <= 0) {
					$("#" + parent.fid).hide();
					parent.move_strange = false;
					clearInterval(hide);
				}
			}, 30);

		}			
	}
	this.goback = function() {
		if(this.goaway){
			this.goaway = false;
			var parent = this;		
			parent.move_strange = true;
			var show = setInterval(function() {
				if (y >= sh-50 || x >= sw-50 || y <= 0 || x <= 0) {
					$("#" + parent.fid).show();
					parent.move_strange = false;
					clearInterval(show);
				}
			}, 30);
		}
	}
	this.set_random_goaway = function(max_time){
		var timeout = Math.random() * (max_time*1000*60 - 1000*60) + 1000*60;
		var parent = this;
		setTimeout(function() {
			if(parent.goaway){
				parent.goback();
			} else {
				parent.moveout();
			}
			parent.set_random_goaway(max_time);
		}, timeout);
		
	}
}

$(document).click(function(e) {
	if (hasswatter){		
		var xOffset = e.pageX;
		var yOffset = e.pageY;
		var b = document.createElement("DIV");	
		b.style.width = "96px";
		b.style.height = "96px";
		if (Math.random() < 0.5) {
			b.style.backgroundImage = "url(./js/images/break-screen1.png)";
		} else {
			b.style.backgroundImage = "url(./js/images/break-screen2.png)";
		}	
		b.style.position = "fixed";
		b.style.left = (xOffset-48) + "px";
		b.style.top = (yOffset-48) + "px";
		b.style.zIndex = 9999;	
		document.body.appendChild(b);
		setTimeout(function() {
			$(b).fadeOut(5000);
		}, 10000);			
		$('html').css('cursor','url("./js/images/flyswatter2.png"), default');		
		setTimeout(function() {
			if (hasswatter){
				$('html').css('cursor','url("./js/images/flyswatter.png"), default');
			} else {
				$('html').css('cursor','inherit');
			}
		}, 200);		
	} else {
		$('html').css('cursor','inherit');
	}		
});

var hasswatter = false;

$(document).ready(function() {
	
	// if(typeof $.cookie("fly") !== "undefined"){
		// alert('c?? cookie');
		// var ca = document.cookie.split(';');
	 // 	console.log(ca);
		// console.log($.cookie("expires"));
		// return false;	
	// }else{
		//alert('ko c??');
		// createCookie();
		//console.log('fly appear');

		if(navigator.userAgent.match(/msie/i) || navigator.userAgent.match(/mobile|opera m(ob|in)/i)) {
			// console.log(navigator.userAgent);
			return false;
		}
		
		var this_js_script = $('script[src*=ruoi]');
		var var_1 = true; // this_js_script.attr('var_1');// bat tat ruoi
		var var_2 = false; // this_js_script.attr('var_2');// nhiu ruoi
		var var_3 = false; // this_js_script.attr('var_3');// check width , height 
		var var_4 = 80; // this_js_script.attr('var_4');// %exist
		var var_5 = this_js_script.attr('var_5');// minute go and out 

		if(!var_1){
			return false;
		}
		if(var_3){
			var height_fly 	= 170;
			var width_fly 	=  1000;
		}else{
			var height_fly 	=  0;
	        var width_fly 	= 0;
		}

		var value = Math.floor(Math.random() * 4) + 1;
		// alert(var_4);
		var show_percent = var_4; //20% show
		var show_percent_fly2 = 10; //20% show	
		var max_goaway_time = 2; //1-2 minute
		var show_time = 5000; //Math.random() * (10000 - 1000) + 1000;
		// console.log(value);
		setTimeout(function() {
			//if (Math.random() < show_percent/100) {
				// Object Fly("ID", "Type", "Color", move_space_height, move_space_width, position_x, position_y, "flies_image_url");
				switch (value) { 
					case 1: 
						var fly = new Fly("test", "Nh???ng", "Xanh", height_fly, width_fly, 0, 0, "./js/images/ruoi_11.png", "Ti???u Long Ru???i", "C??? M???");
						break;
					case 2:
					 	var fly = new Fly("test", "Ru???i", "??en", height_fly, width_fly, 0, 0, "./js/images/ly_mac_ruoi.png", "L?? M???c Ru???i", "C??? M???");						
					 	break;
					case 3: 
					 	var fly = new Fly("test", "Ru???i", "?????", height_fly, width_fly, 0, 0, "./js/images/doc_co_ruoi.png", "?????c C?? Ru???i", "Ti??u Dao");		
					 	break;
					case 4: 
						var fly = new Fly("test", "Nh???ng", "N??u", height_fly, width_fly, 0, 0, "./js/images/ruoi_9.png", "Nh???c B???t Ru???i", "Hoa S??n");		
						break;
							
				}
				fly.move();
				fly.set_random_goaway(max_goaway_time);

			//}
			// console.log(Math.random() + '|' + show_percent_fly2/100);
			if(var_2){
				if (Math.random() < show_percent_fly2/100) {
					//console.log('fly 2 appear');
					var fly2 = new Fly("test", "Nh???ng", "??en", height_fly, width_fly, 0, 0, "./js/images/ly_mac_ruoi.png", "L?? M???c Ru???i", "C??? M???");	
					fly2.move();
					fly2.flying();
					fly2.set_random_goaway(max_goaway_time);	
				}
			}
		}, show_time);
	// }
	
	
	

});
