// JavaScript Document
 //创建和初始化地图函数：
 
 
 
 
function initMap(){
	if(markerArr.length == 0){
		markerArr =  city_datas['bj'];
	}
	createMap(markerArr);//创建地图
	//toolBar();

}
function createMap(markerArr){
  var position=new AMap.LngLat(markerArr.posi.x,markerArr.posi.y);
  var map=new AMap.Map("dituContent",{ 
  resizeEnable: true,
   zoomEnable:false,
  view: new AMap.View2D({//创建地图二维视口
  center:position,//创建中心点坐标
  zoom:11, //设置地图缩放级别
  rotation:0 //设置地图旋转角度
 }),
});
 window.map = map;//将map变量存储在全局
 
 addMarker(markerArr.list);
}//创建地图实例
   var markers = new Array();
   var iws = new Array();
       //创建marker
    function addMarker(markerArr){
        for(var i=0;i<markerArr.length;i++){
			//console.log(i);
            var json = markerArr[i];
			//console.log(json.point);
            var p0 = json.point.split("|")[0];
            var p1 = json.point.split("|")[1];
            var point = new AMap.LngLat(p0,p1);
			
            markers[i] = new AMap.Marker({ 					 
			   map: map,					 
			   //位置 
			   position:point, 
			   //复杂图标
			   icon: "http://www.firstleap.cn/demo/act01/images/n_jiaoying.png"    
		   }); 	
			//console.log(json.content);
			
			iws[i] = new AMap.InfoWindow({
				isCustom:true, 
				content:createInfoWindow(json.title,"<img src='../img/city.jpg' style='position:relative;float:left;margin:0 5px 5px 0;'>"+json.content+"<br/>"+json.dianhua+"<br/>"),
				offset:new AMap.Pixel(8, -43)//-113, -140
			});		
			
			//console.log(iw[1]);
			//console.log(iw.content.innerText
			var current_p = new Array();
			AMap.event.addListener(markers[i],'click',function(){ 
			//console.log(this);
				op_iw(this-1);
			},i+1);
		
			
        }
    }
	function op_iw(i){
		//console.log(markers);
		iws[i].open(map,markers[i].getPosition());	
	}
	function add_event(){
		
	}
	
	
	//实例化信息窗体
/*		var infoWindow = new AMap.InfoWindow({
				isCustom:true, 
				content:createInfo('方恒假日酒店&nbsp;&nbsp;<span style="font-size:11px;color:#F00;">价格:318</span>',"<img src='http://tpc.googlesyndication.com/simgad/5843493769827749134' style='position:relative;float:left;margin:0 5px 5px 0;'>地址：北京市朝阳区阜通东大街6号院3号楼 东北 8.3 公里<br/>电话：010 64733333<br/><a href='#'>详细信息</a>"),
				offset:new AMap.Pixel(5, -53)//-113, -140
			});*/
		
	function createInfo(i){
  		var json = markerArr[i];
		//var iw = 
        return iw;
    }
		
		//构建自定义信息窗体	
		function createInfoWindow(title,content){
			var info = document.createElement("div");
			info.className = "info";
		
			//可以通过下面的方式修改自定义窗体的宽高
			//info.style.width = "400px";
		
			// 定义顶部标题
			var top = document.createElement("div");
			var titleD = document.createElement("div");
			var closeX = document.createElement("img");
			top.className = "info-top"; 
			titleD.innerHTML = title; 
			closeX.src = "http://webapi.amap.com/images/close2.gif";
			closeX.onclick = closeInfoWindow;
			top.appendChild(titleD);
			top.appendChild(closeX);
			info.appendChild(top);
			
		    
			// 定义中部内容
			var middle = document.createElement("div");
			middle.className = "info-middle";
			middle.style.backgroundColor='white';
			middle.innerHTML = content;
			info.appendChild(middle);
			
			// 定义底部内容
			var bottom = document.createElement("div");
			bottom.className = "info-bottom";
			bottom.style.position = 'relative';
			bottom.style.top = '-10px';
			bottom.style.margin = '0 auto';
			var sharp = document.createElement("div");
			sharp.className = "leaflet-popup-tip";
			bottom.appendChild(sharp);	
			info.appendChild(bottom);
			return info;
		}
/*	function createIcon(json){
        var icon = new AMap.Icon("images/n_jiaoying.png", new AMap.Size(35, 50),{imageOffset: new AMap.Size(-json.l,-json.t),infoWindowOffset:new AMap.Size(json.lb+5,1),offset:new AMap.Size(json.x,json.h)})
        return icon;
    }*/
    
		//关闭信息窗体
		function closeInfoWindow(){
			map.clearInfoWindow();
		}
	//初始化地图对象，加载地图
	function toolBar(){
	var toolBar = null;
	//在地图中添加ToolBar插件
	map.plugin(["AMap.ToolBar"],function(){		
		toolBar = new AMap.ToolBar();
		map.addControl(toolBar);		
	});
	}
	 document.getElementById('enMapBtn').onclick = function(){
		map.setLang('en');
	};
	
	document.getElementById('zh_enMapBtn').onclick = function(){
		map.setLang('zh_en');
	};
	
	document.getElementById('zhMapBtn').onclick = function(){
		map.setLang('zh_cn');
	};

