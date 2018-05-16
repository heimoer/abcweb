
function form_yuyue(){
		var form_yuyue = "<iframe src='/form.html' frameborder='0' class='form_yuyue'></iframe><div class='black_wrap'></div>";
		$('body').append(form_yuyue);
		$('.black_wrap').click(function(){
		$("body",self.document).find('.form_yuyue').addClass('form_yuyue_close').next().removeClass('black_wrap');	
		})
	}
	//
	function getExplorer() {
	var explorer = window.navigator.userAgent ;
	//ie 
	if (explorer.indexOf("MSIE") >= 0) {
	form_yuyue();
	}
	//firefox 
	else if (explorer.indexOf("Firefox") >= 0) {
	form_yuyue();
	}
	//Chrome
	else if(explorer.indexOf("Chrome") >= 0){
	form_yuyue();
	}
	//Opera
	else if(explorer.indexOf("Opera") >= 0){
	form_yuyue();
	}
	//Safari
	else if(explorer.indexOf("Safari") >= 0){

	window.open(' http://www.firstleap.cn/form.html','_blank','height=390,width=840,top=200,left=300,toolbar=no,menubar=no,scrollbars=no, resizable=no,location=no, status=no');

}
}
	function getElementsByClassName(node,classname) {
		if (node.getElementsByClassName) { // use native implementation if available
			return node.getElementsByClassName(classname);
		} else {
			return (function getElementsByClass(searchClass,node) {
				if ( node == null )
					node = document;
				var classElements = [],
					els = node.getElementsByTagName("*"),
					elsLen = els.length,
					pattern = new RegExp("(^|\\s)"+searchClass+"(\\s|$)"), i, j;

				for (i = 0, j = 0; i < elsLen; i++) {
					if ( pattern.test(els[i].className) ) {
						classElements[j] = els[i];
						j++;
					}
				}
				return classElements;
			})(classname, node);
		}
	}
	function toggle_visibility(className) {
		var elements = getElementsByClassName(document, className),
			n = elements.length;
		for (var i = 0; i < n; i++) {
			var e = elements[i];

			e.addEventListener("touchstart", function(){			
				getExplorer();

			});
			e.addEventListener("click", function(){
				getExplorer();

			});
		}
	}
	//toggle_visibility("open_form");
	$('.open_form').click(function(){
		getExplorer();
	});
//var ad = getAd();
function yanzheng(){
      name = document.getElementById("name").value;
      if(name==""||name=="孩子姓名"){
        $('#name').next('.parsley-errors-list').css("display","block");
		 $('#name').addClass('error_border');
        return false;  
      }else{
		    $('#name').next('.parsley-errors-list').css("display","none");
		 $('#name').removeClass('error_border');
		
		} 
	  if($("#sex").val() == ""){
		 $('#sex').next('.parsley-errors-list').css("display","block");	
		 $('#sex').addClass('error_border');	
		return false;
	  }else{
		    $('#sex').next('.parsley-errors-list').css("display","none");
		 $('#sex').removeClass('error_border');
		 
		} 
	  if($("#year").val() == ""){
		 $('#year').next('.parsley-errors-list').css("display","block");	
		 $('#year').addClass('error_border');
		return false;
	  }else{
		    $('#year').next('.parsley-errors-list').css("display","none");
		 $('#year').removeClass('error_border');

		} 
      phone = document.getElementById("phone").value;
      if(!(/^1[3|4|5|6|7|8][0-9]\d{8}$/.test(phone))){
      // $("#btn_ques_phone").next().show();c
        $('#phone').next('.parsley-errors-list').css("display","block");
		$('#phone').addClass('error_border');
        return false;      
      }else{
		    $('#phone').next('.parsley-errors-list').css("display","none");
		 $('#phone').removeClass('error_border');
		 
		}     
	  if($("#province").val() == ""){
		 $('#province').next('.parsley-errors-list').css("display","block");
		 $('#province').addClass('error_border');	
		return false;
	   }else{
		    $('#province').next('.parsley-errors-list').css("display","none");
		 $('#province').removeClass('error_border');
		
		}  
	   if($("#city").val() == ""){
		 $('#city').next('.parsley-errors-list').css("display","block");
		 $('#city').addClass('error_border');
		return false;
	   }else{
		    $('#city').next('.parsley-errors-list').css("display","none");
		 $('#city').removeClass('error_border');
		
		}
		return true;
   //ajax�ύ
}
$('.modal2').find('input').each(function(index, element) {
	$(this).focus(function(){
		$(this).addClass('foucus_border');
	});
	   $(this).blur(function(){
		    $(this).removeClass('foucus_border');
		yanzheng();
	}); 
});
$('.modal2').find('select').each(function(index, element) {
	$(this).focus(function(){
		$(this).addClass('foucus_border');
	})
	   $(this).blur(function(){
		 $(this).removeClass('foucus_border');
		yanzheng();
	}); 
});
$('.modal3').find('input').each(function(index, element) {
	$(this).focus(function(){
		
		$(this).addClass('foucus_border');
	});
	   $(this).blur(function(){
		    $(this).removeClass('foucus_border');
			
		yanzheng();
	}); 
});
$('.modal3').find('select').each(function(index, element) {
	$(this).focus(function(){
		$(this).addClass('foucus_border');
	})
	   $(this).blur(function(){
		 $(this).removeClass('foucus_border');
		yanzheng();
	}); 
});

$('.submit').click(function(){
		if(yanzheng()==false){
			return false;
		}
		if (this.ajaxRequest_ != undefined && this.ajaxRequest_.readyState < 4) {
                    $(".submit").attr("disabled", "false").addClass('grey');
                    return false;
                }
		var aa = $("#test-drive-form").serialize();
		$.ajax({
			url: "../user/shitinginsert",
			data:$("#test-drive-form").serialize(),
			dataType: "json",
			type: "post",
			async:true,
			success: function(data) {
				alert(data);
				window.parent.location.href="landingPage.html";
			},
			error:function(data){
				alert(data);
			}
		});
		return false;
});

//checkbox

 $('.tab').click(function(){
		$(this).parents('#learn-more-flyout').addClass('active').css('height','410px');  
	});
	$('.close').click(function(){
		$(this).parents('#learn-more-flyout').removeClass('active').css('height','');  
	})
