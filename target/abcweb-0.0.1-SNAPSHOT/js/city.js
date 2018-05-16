// JavaScript Documentvar city_datas = new Array();
function init_city(city_datas,city_column_id,school_column_id){
	var city = $('#'+city_column_id);
	var school = $('#'+school_column_id);
	city.html("<option value=''>请选择城市</option>");
	school.html("<option value=''>请选择中心</option>");
	for(var city_key in city_datas){
		var city_option = "<option value='"+city_datas[city_key].title+"' city_key='"+city_key+"'>"+city_datas[city_key].title+"</option>";
		city.append(city_option);
	}
	city.change(function(){
		var choice_city_key = $(this).find('option:selected').attr('city_key');
		var school_datas = city_datas[choice_city_key].list;
		school.html("<option value=''>请选择中心</option>");
		for(var school_key in school_datas){
			var school_option = "<option value='"+school_datas[school_key].content+"'>"+school_datas[school_key].content+"</option>";
			school.append(school_option);
		}
	});

}

var city_datas = new Array();
var markerArr = new Array();
city_datas['bj'] = {list:
	[
	 {title:"",content:"ABC外语培训新中关校区",dianhua:"<br/><br/><strong>地址</strong>：海淀区中关村大街甲28号海淀文化艺术大厦B座三层 <br/><strong>电话</strong>：010-51905749",point:"116.319628|39.976689",isOpen:0,icon:{w:21,h:21,l:0,t:0,x:6,lb:5}},
	 {title:"",content:"ABC外语培训西单校区",dianhua:"<br/><br/><strong>地址</strong>：西城区菜市口枫桦树豪景A座底商2层<br/><strong>电话</strong>：010-67669668",point:"116.372130|39.888610",isOpen:0,icon:{w:21,h:21,l:0,t:0,x:6,lb:5}},
	 {title:"",content:"ABC外语培训方庄校区",dianhua:"<br/><br/><strong>地址</strong>：方庄芳古园一区28号楼方庄书店4层(必胜客楼上)<br/><strong>电话</strong>：010-67669668 67695190　",point:"116.425975|39.866005",isOpen:0,icon:{w:21,h:21,l:0,t:0,x:6,lb:5}},
	 {title:"",content:"ABC外语培训洋桥校区",dianhua:"<br/><br/><strong>地址</strong>：丰台马家堡东路106号自然新天地3A层(永辉超市楼上)<br/><strong>电话</strong>：010-87269999",point:"116.387542|39.841164",isOpen:0,icon:{w:21,h:21,l:0,t:0,x:6,lb:5}},
	 {title:"",content:"ABC外语培训安定门校区",dianhua:"<br/><br/><strong>地址</strong>：朝阳区外馆东街51号凯景铭座2层211-217<br/><strong>电话</strong>：010-87269999 ",point:"116.403867|39.962337",isOpen:0,icon:{w:21,h:21,l:0,t:0,x:6,lb:5}},
	 {title:"",content:"ABC外语培训翠微路校区",dianhua:"<br/><br/><strong>地址</strong>：海淀区翠微路26号双城大厦4-5层<br/><strong>电话</strong>：010-68695899",point:"116.302312|39.909208",isOpen:0,icon:{w:21,h:21,l:0,t:0,x:6,lb:5}},
	 {title:"",content:"ABC外语培训劲松校区",dianhua:"<br/><br/><strong>地址</strong>：朝阳区劲松桥东南角劲松大厦3层<br/><strong>电话</strong>：010-68695899",point:"116.462293|39.883962",isOpen:0,icon:{w:21,h:21,l:0,t:0,x:6,lb:5}},
	 {title:"",content:"ABC外语培训金源校区",dianhua:"<br/><br/><strong>地址</strong>：海淀区远大路1号世纪金源购物中心西北角6层（E22电梯直达）<br/><strong>电话</strong>：010-88866663",point:"116.288237|39.958573",isOpen:0,icon:{w:21,h:21,l:0,t:0,x:6,lb:5}},
	 {title:"",content:"ABC外语培训草桥校区",dianhua:"<br/><br/><strong>地址</strong>：丰台区草桥欣园二区9号楼C座3层<br/><strong>电话</strong>：010－87576998",point:"116.357275|39.847447",isOpen:0,icon:{w:21,h:21,l:0,t:0,x:6,lb:5}},
	 {title:"",content:"ABC外语培训亚运村校区",dianhua:"<br/><br/><strong>地址</strong>：朝阳区安慧北里逸园20号楼二层底商<br/><strong>电话</strong>：010-57172736",point:"116.413496|40.001922",isOpen:0,icon:{w:21,h:21,l:0,t:0,x:6,lb:5}},
	 {title:"",content:"ABC外语培训通州校区",dianhua:"<br/><br/><strong>地址</strong>：通州区新华大街171号世纪联华东侧三层<br/><strong>电话</strong>：010-89502036",point:"116.643820|39.908966",isOpen:0,icon:{w:21,h:21,l:0,t:0,x:6,lb:5}},
	 {title:"",content:"ABC外语培训回龙观校区",dianhua:"<br/><br/><strong>地址</strong>：昌平区回龙观西大街18号港龙商业中心1单元三层105<br/><strong>电话</strong>：010-81720079",point:"116.331223|40.078306",isOpen:0,icon:{w:21,h:21,l:0,t:0,x:6,lb:5}},
	 {title:"",content:"ABC外语培训三环新城校区",dianhua:"<br/><br/><strong>地址</strong>：丰台区三环新城小区8号院底商（超市发对面）<br/><strong>电话</strong>：010-83209005 83209025",point:"116.551759|39.947147",isOpen:0,icon:{w:21,h:21,l:0,t:0,x:6,lb:5}},
	 {title:"",content:"ABC外语培训马连道校区",dianhua:"<br/><br/><strong>地址</strong>：宣武区马连道南街16号院1号楼璟莲馨苑6层<br/><strong>电话</strong>：010-63313169　63312851",point:"116.323838|39.884164",isOpen:0,icon:{w:21,h:21,l:0,t:0,x:6,lb:5}},
	 {title:"",content:"ABC外语培训石景山校区",dianhua:"<br/><br/><strong>地址</strong>：石景山区杨庄东路八角西街北口星宇商贸大厦3层<br/><strong>电话</strong>：010-51620936",point:"116.198898|39.917651",isOpen:0,icon:{w:21,h:21,l:0,t:0,x:6,lb:5}},
	 {title:"",content:"ABC外语培训霍营校区",dianhua:"<br/><br/><strong>地址</strong>：北京市昌平区霍营良庄街2号楼2号<br/><strong>电话</strong>：010-51620936",point:"116.354341|40.076249",isOpen:0,icon:{w:21,h:21,l:0,t:0,x:6,lb:5}},
	 {title:"",content:"ABC外语培训大兴校区",dianhua:"<br/><br/><strong>地址</strong>：大兴区枣园中海国际港19号楼602 (4号线枣园地铁站B口)<br/><strong>电话</strong>：01061210966",point:"116.331646|39.750613",isOpen:0,icon:{w:21,h:21,l:0,t:0,x:6,lb:5}},
	 {title:"",content:"ABC外语培训大成路校区",dianhua:"<br/><br/><strong>地址</strong>：丰台区大成路25号二层贝可俐儿童活动中心（大成路西口公交车站）<br/><strong>电话</strong>：88233010",point:"116.255315|39.889729",isOpen:0,icon:{w:21,h:21,l:0,t:0,x:6,lb:5}}
	 ],
	title:"北京",
	posi : {x:116.244003,y:39.93725}
};

city_datas['heb'] = {list:
	[
	 {title:"",content:"南岗口语/综合中心",dianhua:"<br/><br/><strong>地址</strong>：南岗区东大直街副118号<br/><strong>电话</strong>：0451-82550221   82550998",point:"126.625469|45.742001",isOpen:0,icon:{w:21,h:21,l:0,t:0,x:6,lb:5}},
	 {title:"",content:"道里区综合中心",dianhua:"<br/><br/><strong>地址</strong>：道里区哈药路57号<br/><strong>电话</strong>：0451-84531946",point:"126.609722|45.749358",isOpen:0,icon:{w:21,h:21,l:0,t:0,x:6,lb:5}},
	 {title:"",content:"香坊区综合中心",dianhua:"<br/><br/><strong>地址</strong>：香坊区顺水街79号（剑桥三中对面）<br/><strong>电话</strong>：0451-82280196",point:"126.660006|45.702609",isOpen:0,icon:{w:21,h:21,l:0,t:0,x:6,lb:5}},
	],
	title:"哈尔滨",
	posi : {x:126.66006,y:45.702609}
};
city_datas['gz'] = {list:
	[{title:"",content:"广州市培训中心",dianhua:"<br/><br/><strong>地址</strong>：广州市天河区天河北路570号帝景苑商业中心五层503-505 <br/><strong>电话</strong>：020-38888885  38888112",point:"113.336039|23.141114",isOpen:0,icon:{w:21,h:21,l:0,t:0,x:6,lb:5}}
	],
	title:"广州",
	posi : {x:113.336039,y:23.141114}
};


city_datas['cs'] = {list:
	[{title:"",content:"长沙市培训中心",dianhua:"<br/><br/><strong>地址</strong>：长沙市黄兴中路9号世纪情珠宝大厦6层<br/><strong>电话</strong>：0731-83888888",point:"112.975788|28.192180",isOpen:0,icon:{w:21,h:21,l:0,t:0,x:6,lb:5}}
	],
	title:"长沙",
	posi : {x:112.975788,y:28.192180}
};
city_datas['yc'] = {list:
	[{title:"",content:"银川校区",dianhua:"<br/><br/><strong>地址</strong>：宁夏银川，金凤区，康平路，悦海新天地购物中心F3层F3-01A，F3-35<br/><strong>电话</strong>：0951-3808777",point:"106.245760|38.494887",isOpen:0,icon:{w:21,h:21,l:0,t:0,x:6,lb:5}}
	],
	title:"银川",
	posi : {x:106.245760,y:38.494887}
};


city_datas['nb'] = {list:
	[{title:"",content:"综合培训中心",dianhua:"<br/><br/><strong>地址</strong>：宁波市海曙区药行街31号灵桥广场写字楼12层<br/><strong>电话</strong>：0574-87315888",point:"121.556890|29.866610",isOpen:0,icon:{w:21,h:21,l:0,t:0,x:6,lb:5}},
	 {title:"",content:"口语中心",dianhua:"<br/><br/><strong>地址</strong>：宁波市海曙区碶闸58号都市仁和写字楼5楼5-12室<br/><strong>电话</strong>：0574-87317966",point:"121.554339|29.866571",isOpen:0,icon:{w:21,h:21,l:0,t:0,x:6,lb:5}},
	 {title:"",content:"一对一中心",dianhua:"<br/><br/><strong>地址</strong>：宁波市海曙区碶闸58号都市仁和写字楼3楼3-1室 <br/><strong>电话</strong>：0574-87307321",point:"121.554339|29.866571",isOpen:0,icon:{w:21,h:21,l:0,t:0,x:6,lb:5}},
	 {title:"",content:"ABC外语学校中心",dianhua:"<br/><br/><strong>地址</strong>：宁波市海曙区战船街2号影都附楼2&3楼  <br/><strong>电话</strong>：0574-87315888",point:"121.557765|29.872051",isOpen:0,icon:{w:21,h:21,l:0,t:0,x:6,lb:5}}	
	 ],
	title:"宁波",
	posi : {x:121.557765,y:29.872051}
};
city_datas['wh'] = {list:
	[{title:"",content:"武汉校区",dianhua:"<br/><br/><strong>地址</strong>：武汉市江岸区塔子湖东路越秀星汇君泊S2栋3层<br/>",point:"114.281575|30.648381",isOpen:0,icon:{w:21,h:21,l:0,t:0,x:6,lb:5}}
	],
	title:"武汉",
	posi : {x:114.281575,y:30.648381}
};


