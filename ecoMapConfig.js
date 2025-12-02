var ecoMapConfig = {        
	"centerCity": "贵阳市",	// 地图中心城市
	"centerCityLngLat": [106.626436, 26.651268],  // 地图中心经纬度
	"datasetName": "野外生态数据地图工作台",
	"clustererSize" : 16,	// 聚类分析点数
	"baiduAK":"你的百度地图AK",
	//"sampleImagePath": "C:/MyWork/SoftwareDep/sampleimg/",
	"baiduTraceId":"239711",
	"baiduTraceEntity":"测试员1",
	"kmlMarkerLabelColor": "ff00ffff",
	"kmlMarkerLabelColorModel": "normal",
	//"kmlMarkerIconHref": "http://files.2bulu.com/f/d1?downParams=s2An6%2B3%2BIWUr0OBxohfNOA%3D%3D%0A",
	"kmlMarkerIconHref": "https://www.icosky.com/icon/32/Art/Rave%20for%20every%20day/Forest%20mushroom.png",
	"kmlLineColor": "ff00ff00",
	"kmlLineWidth": 4,
	"popUpinfoImageMaxNumber": 6,
	"popUpinfoImageSep": ['',' ','-','_',[' (',')']],
	"popUpinfoImageFileExt": ['jpg','jpeg','png','webp'],
	"iconPic" : "pics/Fmushroom32.png",
	"iconPicList": {
			"0": "pics/OIP-C32-2.png",
			"1": "pics/Fmushroom32.png",
			"2": "pics/man02.png",
			"3": "pics/woman02.png",
			"4": "pics/bush32-2.png",
			"5": "pics/grass32.png",
			"6": "pics/tree32.png",
			"7": "pics/moss30.png",
			"8": "pics/duckweed30.png",
			"9": "pics/cave30.png",
			"10": "pics/ypointer.png",
			"11": "pics/point3211.png",
			"12": "pics/house32.png",
			"13": "pics/nlb32-2.png",
			"14": "pics/house232.png",
			"15": "pics/car232.png"
	},	
	"smtypeListSelect": {
		"配色": {
			"color": "colorPicker"
		},	
		"随机色": {
			"color": "colorPicker"
		},			
		"渐变色": {
			"startColor": "colorPicker",
			"endColor": "colorPicker"
		},	
		"线缺省": {
			"linecolor": "colorPicker",
			"linestyle": {
				"solid":"实线",
				"dashed":"虚线"
			},
			"lineopacity":{
				"0.0":"0.0",
				"0.1":"0.1",
				"0.2":"0.2",
				"0.3":"0.3",
				"0.4":"0.4",
				"0.5":"0.5",
				"0.6":"0.6",
				"0.7":"0.7",
				"0.8":"0.8",
				"0.9":"0.9",
				"1.0":"1.0"
			}
		},		
		"面缺省": {
			"linecolor": "colorPicker",
			"fillcolor": "colorPicker",
			"linestyle": {
				"solid":"实线",
				"dashed":"虚线"
			},
			"lineopacity":{
				"0.0":"0.0",
				"0.1":"0.1",
				"0.2":"0.2",
				"0.3":"0.3",
				"0.4":"0.4",
				"0.5":"0.5",
				"0.6":"0.6",
				"0.7":"0.7",
				"0.8":"0.8",
				"0.9":"0.9",
				"1.0":"1.0"
			},
			"fillopacity":{
				"0.0":"0.0",
				"0.1":"0.1",
				"0.2":"0.2",
				"0.3":"0.3",
				"0.4":"0.4",
				"0.5":"0.5",
				"0.6":"0.6",
				"0.7":"0.7",
				"0.8":"0.8",
				"0.9":"0.9",
				"1.0":"1.0"
			}
		},	
		"字缺省": {
			"fontcolor": "colorPicker",
			"fillcolor": "colorPicker",
			"linecolor": "colorPicker",
			"backgroundColor": {
				"none":"不透明",
				"transparent":"透明"
			},
			"fontWeight":{
				"light":"light",
				"normal":"normal",
				"bold":"bold"
			},
			"fontOpacity":{
				"0.0":"0.0",
				"0.1":"0.1",
				"0.2":"0.2",
				"0.3":"0.3",
				"0.4":"0.4",
				"0.5":"0.5",
				"0.6":"0.6",
				"0.7":"0.7",
				"0.8":"0.8",
				"0.9":"0.9",
				"1.0":"1.0"
			}
		},			
		"样点": {
			"ecoenv" : {
				"":"",
				"阔叶林": "阔叶林",
				"针叶林": "针叶林",
				"针阔混交林": "针阔混交林",
				"次生混交林": "次生混交林",
				"竹林": "竹林",
				"亚热带山顶矮林":"亚热带山顶矮林",
				"草地":"草地",
				"其它": "其它"
			},		
			"nutritype" : {
				"":"",
				"木生": "木生",
				"土生": "土生",
				"腐生": "腐生",
				"菌根菌":"菌根菌",
				"兼性寄生": "兼性寄生",
				"虫生": "虫生",
				"其它": "其它"
			}				
		},
		"区域": {
			"level" : {
				"":"",
				"省":"省",
				"地级市":"地级市",
				"县市":"县市",
				"乡镇":"乡镇"
			},	
			"type" : {
				"":"",
				"重点":"重点",
				"一般":"一般"
			}
		},
		"分析项": {
			"type" : {
				"":"",
				"柱状":"柱状",
				"水平柱状":"水平柱状",
				"折线":"折线",
				"饼图":"饼图"
			},
			"field" : {
				"":"",
				"zhname": "zhname:种名",
				"taxnm": "taxnm:拉丁名",  
				"loc": "loc:采样地点",				
				"ecoenv": "ecoenv:生境",
				"person": "person:采集人",
				"nutritype": "nutritype:营养类型"
			},
			"barcolor": "colorPicker"	
		},		
		"日期分析项": {
			"type" : {
				"柱状":"柱状",
				"水平柱状":"水平柱状",
				"折线":"折线",
				"饼图":"饼图"
			},
			"field" : {
				"dat":"dat:采样日期",
			},
			"interval" : {
				"日":"日",
				"周":"周",
				"旬":"旬",
				"半月":"半月",
				"月":"月",
				"季":"季",
				"年":"年"
			},	
			"barcolor": "colorPicker",
			"isStack": {
				"否": "否",
				"是": "是"
			}
		},	
		"海拔分析项": {
			"type" : {
				"柱状":"柱状",
				"水平柱状":"水平柱状",
				"折线":"折线",
				"饼图":"饼图"
			},
			"field" : {
				"alt":"alt:海拔高度"
			},
			"interval" : {				
				"50": "50米",
				"100": "100米",
				"200": "200米",
				"500": "500米"	
			},
			"barcolor": "colorPicker",
			"isStack": {
				"否": "否",
				"是": "是"
			}
		},
		"线面分析项": {
			"type" : {
				"柱状":"柱状",
				"水平柱状":"水平柱状",
				"折线":"折线",
				"饼图":"饼图"
			},
			"field" : {
				"line":"线面分析设置",
			},
			"barcolor": "colorPicker"		
		},		
		"景点": {
			"class" : {
				"":"",
				"城市":"城市",
				"道路":"道路",
				"设施":"设施",
				"自然景观":"自然景观",
				"人文景观":"人文景观",
				"民俗风情":"民俗风情",
				"文化资源":"文化资源",
				"饮食资源":"饮食资源"
			}
		}								
	},	
	"smtypeList": {
			"基本": {
				"list" : {
					  "rnum": "编号",
					  "lng": "经度",
					  "lat": "纬度", 
					  "loc": "地点"
				},
				"type" : "点",
				"icon" : 11,
				"size" : 40,
				"linecolor": "green",
				"lineopacity": "0.3",
				"linestyle": "solid",
				"linewide": "2",
				"fillcolor": "#1989fa",
				"fillopacity": "0.05",	
				"fontcolor" : "#0011ff",
				"fontSize" : "4mm"								
			},		
			"通用": {
				"list" : {
				  "rnum": "编号",
				  "spno": "标本号",
				  "zhname": "名称",
				  "taxnm": "学名",
				  "lng": "经度",
				  "lat": "纬度", 
				  "loc": "地点",
				  "dat": "日期"  
				},
				"type" : "点",
				"icon" : 10,
				"size" : 30 
			},
			"样点": {
				"list" : {
				  "rnum": "记录号",
				  "spno": "标本号",
				  "zhname": "种名",
				  "taxnm": "拉丁名",
				  "lng": "经度",
				  "lat": "纬度", 
				  "alt": "海拔",	  
				  "loc": "采样地点",
				  "dat": "采样日期",
				  "ecoenv": "生境",
				  "person": "采集人",
				  "nutritype": "营养类型"
				  //"linenum": "样线编号", 
				  //"rowid": "编号",
				  //"prowid": "父编号"
				},
				"type" : "点",
				"key": "taxnm",
				"icon" : 0,
				"colsty":"0"   //  在集合里的显示方式  null "0" - 聚合  "1" -- 单独  “2” -- 集合  “3”--热力   
			},
			"景点": {
				"list" : {
				  "rnum": "编号",
				  "zhname": "名称",
				  "loc": "地点",
				  "ownedby":"所在地",
				  "class":"类别",
				  "lng": "经度",
				  "lat": "纬度", 
				  "alt": "海拔",
				  "note": "备注"	 
				},
				"type" : "点",
				"key": "zhname",
				"size" : 36,
				"icon" : 10,
				"popwin" : 1	
			},			
			"样线": {
				"list" : {
				  "rnum": "记录号",
				  "rowid": "编号",
				  "zhname": "名称",
				  "lng": "起点经度",
				  "lat": "起点纬度", 
				  "endlng": "终点经度",
				  "endlat": "终点纬度", 
				  "linelength": "长度",	
				  "value":"统计值",
				  "loc": "地点",
				  "dat": "日期",
				  "linenum": "样线编号",
				  "note2": "说明",
				  "note": "备注"
				 },
				"type" : "线",
				"key": "zhname",
				"linecolor": "#1648b6",
				"lineopacity": "0.7",
				"linestyle": "solid",
				"linewide": "2"
			},
			"图框": {
				"list" : {
				  "rnum": "记录号",
				  "zhname": "名称",
				  "lng": "起点经度",
				  "lat": "起点纬度", 
				  "endlng": "终点经度",
				  "endlat": "终点纬度", 
				  "linelength": "长度",	
				  "loc": "地点",
				  "dat": "日期",
				  "note": "备注"
				 },
				"type" : "线",
				"linecolor": "black",
				"lineopacity": "0.8",
				"linestyle": "solid",
				"linewide": "2"
			},
			"网格": {
				"list" : {
				  "rnum": "网格编号",
				  "level": "级别",
				  "loc": "地点",
				  "note": "备注",
				  "points": "坐标点",
				  "wide": "宽度",
				  "height": "高度",
				  "zone": "投影带号",
				  "XNum": "横向编号",
				  "YNum": "纵向编号",
				  "XStep": "横向步长",
				  "YStep": "纵向步长"
				 },
				"type" : "面",
				"linecolor": "red",
				"lineopacity": "0.5",
				"linestyle": "solid",
				"linewide": "1",
				"fillcolor": "#fffff0",
				"fillopacity": "0.1"				
			},
			"图像": {
				"list" : {
				  "rnum": "编号",
				  "zhname": "名称",
				  "lng": "经度",
				  "lat": "纬度", 
				  "alt": "海拔",
				  "imgWidth": "宽度",
				  "imgHeight": "高度",
				  "dat": "日期",
				  "loc":"地点",
				  "orgWidth": "原宽",
				  "orgHeight": "原高",				  
				  //"fileName":"文件名",
				  //"loclng": "拍摄经度",
				  //"loclat": "拍摄纬度", 				  
				  //"zoom": "地图级别",
				  //"imgStr":"图像源",
				  "resize":"自动调整"			  
				},
				"type" : "图像",
				"fillopacity": "0.0",
				"zoom": 10			
			},
			"图标": {
				"list" : {
				  "rnum": "编号",
				  "zhname": "名称",
				  "imgWidth": "宽度",
				  "imgHeight": "高度",
				  "dat": "日期"				  
				},
				"type" : "图像"			
			},
			"渐变色": {
				"list" : {
					"startValue" : "起始值",
					"startColor" : "起始色",
					"endValue" : "结束值",
					"endColor" : "结束色",
					"unit"     : "单位"		  
				},
				"type" : "配置"			
			},	
			"线缺省": {
				"list" : {
					"linecolor": "颜色",
					"lineopacity": "透明度",
					"linestyle": "线型",
					"linewide": "线宽"		  
				},
				"type" : "配置"			
			},	
			"面缺省": {
				"list" : {
					"linecolor": "边界线颜色",
					"lineopacity": "边界线透明度",
					"linestyle": "边界线型",
					"linewide": "边界线宽",
					"fillcolor": "填充色",
					"fillopacity": "填充透明度"							  
				},
				"type" : "配置"			
			},
			"字缺省": {
				"list" : {
					"fontcolor" : "字体颜色",
					"fontSize" : "字体大小",
					"fontOpacity": "字体透明度",
					"fontFamily": "字体", //微软雅黑 仿宋
					"fontWeight": "字体粗细",   // light normal bold
					"linewide": "边界线宽",
					"linecolor": "边界线颜色",
					"fillcolor": "背景颜色",
					"backgroundColor":"背景透明"          //"transparent",

					/**
					"linecolor": "边界线颜色",
					"lineopacity": "边界线透明度",
					"linestyle": "边界线型",
					"linewide": "边界线宽",
					"fillcolor": "填充色",
					"fillopacity": "填充透明度"	
					*/	

				},
				"type" : "配置"			
			},
			"配色": {
				"list" : {
				  "rnum": "编号",
				  "lower": "下值",
				  "upper": "上值",
				  "color": "颜色",
				  "zhname": "显示"		  
				},
				"type" : "配置"			
			},
			"随机色": {
				"list" : {
				  "rnum": "编号",
				  "color": "颜色"
				},
				"type" : "配置"			
			},	
			"分析项": {
				"list" : {
				  "rnum": "编号",
				  "field": "项目",
				  "type": "图型", // 柱状、水平柱状、折线、饼图 
				  "maxitems": "最大项数",
				  "title": "标题",
				  "xlable": "X轴标签",
				  "ylable": "Y轴标签",
				  "wide": "宽度",
				  "height": "高度",  
				  "barcolor": "颜色"
				},
				"type" : "配置"			
			},	
			"日期分析项": {
				"list" : {
				  "field": "分析项",
				  "type": "图型", // 柱状、水平柱状、折线、饼图 
				  "title": "标题",
				  "interval": "日期间隔", // 日、周、旬、半月、月、季、年
				  "xlable": "X轴标签",
				  "ylable": "Y轴标签",
				  "wide": "宽度",
				  "height": "高度",
				  "barcolor": "颜色",
				  "opacity": "透明度",
				  "isStack": "是否堆叠"
				},
				"type" : "配置"			
			},			
			"海拔分析项": {
				"list" : {
				  "field": "分析项",
				  "type": "图型", // 柱状、水平柱状、折线、饼图 
				  "title": "标题",
				  "interval": "海拔间隔", // 海拔高度分段大小
				  "xlable": "X轴标签",
				  "ylable": "Y轴标签",
				  "wide": "宽度",
				  "height": "高度",
				  "barcolor": "颜色",
				  "opacity": "透明度",
				  "isStack": "是否堆叠"				  
				},
				"type" : "配置"			
			},
			"线面分析项": {
				"list" : {
				  "field": "分析项",
				  "type": "图型", // 柱状、水平柱状、折线、饼图 
				  "title": "标题",
				  "xlable": "X轴标签",
				  "ylable": "Y轴标签",
				  "wide": "宽度",
				  "height": "高度",
				  "barcolor": "颜色",	
				},
				"type" : "配置"			
			},				
			"描述": {
				"list" : {
				  "rnum": "编号",
				  "key": "关键字",
				  "zhname": "名称",
				  "note": "描述",
				  "dat": "日期"	
				},
				"type" : "字",
				"key": "key"
			},
			"区域": {
				"list" : {
				  "rnum": "编号",
				  "level": "级别",  //省、 地级市、县市、乡镇、
				  "type": "类别",	// 重点，一般
				  "zhname": "名称",
				  "lng": "经度",
				  "lat": "纬度", 
				  "area": "面积",
				  "value":"统计值",
				  "loc": "地点",
				  "dat": "日期"				  
				},
				"type" : "面",  
				"key" : "zhname",
				"linecolor": "#53d055",
				"lineopacity": "0.6",
				"linestyle": "solid",
				"linewide": "2",
				"fillcolor": "#1989fa",
				"fillopacity": "0.1"				
			},
			"轨迹": {
				"list" : {
				  "rnum": "编号",
				  "zhname": "名称",
				  "linelength": "长度",
				  "rnums": "样点"
				},
				"type" : "线",
				"linecolor": "#18a45b",
				"lineopacity": "0.8",
				"linestyle": "solid",
				"linewide": "4"
			},
			"标注": {
				"list" : {
				  "rnum": "编号",
				  "zhname": "名称",
				  "lng": "经度",
				  "lat": "纬度", 	  
				  "dat": "日期",
				  "fontSize" : "字体",	
				  //"zoom": "地图级别",
				  "resize":"自动调整"						  
				},
				"type" : "字",
				"fontcolor" : "#0f1011ff",
				"fontSize" : "4mm",
				"fontOpacity": "1.0",
				"fontFamily": "微软雅黑", //微软雅黑 仿宋
				"fontWeight":"normal",
				"linewide": "0",
				"zoom": 10,
				"linecolor": "#143ae0",
				"fillcolor": "#d45e2b",
				//"fillopacity": "0.8",
				"backgroundColor": "transparent"				
			},
      		"标记": {
				"list" : {
				  "rnum": "编号",
				  "zhname": "名称",
				  "lng": "经度",
				  "lat": "纬度", 	  
				  "loc": "地点"	
				},
				"type" : "点",
				"icon" : 11,
				"size" : 40,
				"colsty":"0"   //  在集合里的显示方式  null "0" - 聚合  "1" -- 单独  “2” -- 集合  “3”--热力    	
			},
			"人员": {
				"list" : {
				  "rnum": "编号",
				  "zhname": "姓名",
				  "organ": "单位",
				  "loc": "驻点乡镇",
				  "city": "所在地州",
				  "addre": "地址"
				},
				"type" : "点",
				"key": "zhname",
				"icon" : 2 
			},
			"蘑菇": {
				"list" : {
				  "rnum": "记录号",
				  "spno": "标本号",
				  "zhname": "种名",
				  "taxnm": "拉丁名",
				  "lng": "经度",
				  "lat": "纬度", 
				  "alt": "海拔",	  
				  "loc": "采样地点",
				  "dat": "采样日期",
				  "ecoenv": "生境",
				  "nutritype": "营养类型",
				  "linenum": "样线编号", 
				  "rowid": "编号",
				  "prowid": "父编号"
				},
				"type" : "点",
				"icon" : 1
			},
			"植物": {
				"list" : {
				  "rnum": "记录号",
				  "zhname": "物种名",
				   "vtype": "类型",		//乔木、灌木、草本
				  "lng": "经度",
				  "lat": "纬度", 
				  "alt": "海拔",	  
				  "loc": "地点",
				  "dat": "日期",
				  "rcount": "数量",
				  "quadno":"样方号"	
				},
				"type" : "点",
				"key": "zhname",
				"icon" : 6 
			},
			"苔藓": {
				"list" : {
				  "rnum": "标本编号",
				  "zhname": "物种名",
				  "lng": "经度",
				  "lat": "纬度", 
				  "alt": "海拔",	  
				  "loc": "采样地点",
				  "dat": "采样日期",
				  "ecoenv": "生境",
				  "rowid": "记录号"
				},
				"type" : "点",
				"icon" : 7	
			},
			"洞穴": {
				"list" : {
				  "rnum": "编号",
				  "zhname": "名称",
				  "loc": "地点",
				  "lng": "经度",
				  "lat": "纬度", 
				  "alt": "海拔"	 
				},
				"type" : "点",
				"key": "zhname",
				"icon" : 9,
				"popwin" : 1	
			},
			"浮游植物": {
				"list" : {
				  "rnum": "记录号",
				  "zhname": "中文名",
				  "taxnm": "学名",
				  "lng": "经度",
				  "lat": "纬度", 
				  "loc": "地点"	
				},
				"type" : "点",
				"icon" : 8,
				"popwin" : 2
			},  
			"居住地": {
				"list" : {
				  "rnum": "编号",
				  "zhname": "名称",
				  "ownedby":"所在地",
				  "loc": "地点",
				  "lng": "经度",
				  "lat": "纬度", 
				  "alt": "海拔"	 
				},
				"type" : "点",
				"icon" : 12,
				"size" : 36,
				"key": "zhname",
				"popwin" : 1	
			},
			"管理站": {
				"list" : {
				  "rnum": "编号",
				  "zhname": "名称",
				  "ownedby":"所在地",
				  "loc": "地点",
				  "lng": "经度",
				  "lat": "纬度", 
				  "alt": "海拔"	 
				},
				"type" : "点",
				"size" : 32,
				"icon" : 14,
				"key": "zhname",
				"popwin" : 1	
			},	
			"出发地": {
				"list" : {
				  "rnum": "编号",
				  "zhname": "名称",
				  "ownedby":"所在地",
				  "loc": "地点",
				  "lng": "经度",
				  "lat": "纬度", 
				  "alt": "海拔"	 
				},
				"type" : "点",
				"icon" : 15,
				"popwin" : 1	
			},				
			"聚类": {
				"list" : {
				  "rnum": "编号",
				  "zhname": "名称",
				  "count": "点数",
				  "lng": "经度",
				  "lat": "纬度", 
				  "alt": "海拔"	 
				},
				"type" : "点",
				"cluster":false,
				"icon" : 13,
				"size" : 42
			}			
	},
	"defaultList": {
		"点" : "基本",
		"线" : "样线",
		"面" : "区域",
		"字" : "标注" 	
			
	},
	"csvConfig": {
		"delimiter" : ",",
		"linebreak" : "\r\n",
		"quote":"\""
	},	
	"styleProperties": [
		"linewide_",
		"lineopacity_",
		"linecolor_",
		"fillcolor_",
		"fillopacity_",
		"fontcolor_",
		"fontSize_"
	],	
	"popWinOpts" : {
		"0" : ["详细信息",5,-20],
		"1" : ["相关信息",0,-20],
		"2" : ["信息",10,-15],
		"3" : ["信息",0,0],
		"4" : ["坐标信息",5,-20],
	},	
	"collectionPOptions" : {
		"size": BMAP_POINT_SIZE_NORMAL,
		"shape": BMAP_POINT_SHAPE_CIRCLE,
		"color": "#ea2a2a"
	},

	//"DataAnaDateInterval":"月", // '日','周','旬','半月', '月', '季', '年'
	//"DataAnaAltSize": "100", // 海拔高度分段大小

	"DataAnaByDate": {
		"1" : {"field": "dat","type":"柱状", "title":"采样日期分析","interval":"月","xlable":"采样日期","ylable":"样本数","wide":"800px","height":"400px","barcolor":"#0000ff","opacity":"0.8", "isStack":"否"}
	},
	"DataAnaByAlt": {
		"1" : {"field": "alt","type":"柱状", "title":"海拔高度分析","interval":"100","xlable":"海拔高度","ylable":"样本数","wide":"800px","height":"400px","barcolor":"#0000ff","opacity":"0.8", "isStack":"否"}
	},

	"DataAnaByFields": {
		"1" : {"field":"zhname","type":"柱状","maxitems":16, "title":"品种分析","xlable":"样本名称","ylable":"样本数","wide":"800px","height":"400px","barcolor":"#0000ff"},
		"2" : {"field":"ecoenv","type":"饼图","maxitems":8,"title":"生境分析","xlable":"","ylable":"","wide":"800px","height":"400px","barcolor":"#00ff00"},
		"3" : {"field":"nutritype","type":"饼图","maxitems":8,"title":"营养类型分析","xlable":"","ylable":"","wide":"800px","height":"400px","barcolor":"#0000ff"}
	},

	"DataAnaByFieldsMax": 10, // 最大分析项数

	"LineAnaByLine": {
		"1" : {"field": "line-area","type":"柱状", "title":"按样线统计","xlable":"样线","ylable":"样本数","wide":"800px","height":"400px","barcolor":"#0000ff"}
	},	

	"LineAnaByDate": {
		"1" : {"field": "dat","type":"柱状", "title":"采样日期分析","interval":"月","xlable":"采样日期","ylable":"样本数","wide":"800px","height":"400px","barcolor":"#0000ff","opacity":"0.8", "isStack":"否"}
	},
	"LineAnaByAlt": {
		"1" : {"field": "alt","type":"柱状", "title":"海拔高度分析","interval":"100","xlable":"海拔高度","ylable":"样本数","wide":"800px","height":"400px","barcolor":"#0000ff","opacity":"0.8", "isStack":"否"}
	},

	"AreaAnaByDate": {
		"1" : {"field": "dat","type":"柱状", "title":"采样日期分析","interval":"月","xlable":"采样日期","ylable":"样本数","wide":"800px","height":"400px","barcolor":"#0000ff","opacity":"0.8", "isStack":"否"}
	},
	"AreaAnaByAlt": {
		"1" : {"field": "alt","type":"柱状", "title":"海拔高度分析","interval":"100","xlable":"海拔高度","ylable":"样本数","wide":"800px","height":"400px","barcolor":"#0000ff","opacity":"0.8", "isStack":"否"}
	},
	"AreaAnaByArea": {
		"1" : {"field": "line-area","type":"柱状", "title":"按区域统计","interval":"100","xlable":"区域","ylable":"样本数","wide":"800px","height":"400px","barcolor":"#0000ff","opacity":"0.8", "isStack":"否"}
	},

	"DateAnaIntervalList": {
		"日": "日",
		"周": "周",
		"旬": "旬",
		"半月": "半月",
		"月": "月",
		"季": "季",
		"年": "年"
	},	
	"DataAnaAltSizeList":{
		"50": "50米",
		"100": "100米",
		"200": "200米",
		"500": "500米"	
	},

	"scaleLineLength": 5, 			// 经纬度刻度长度，单位 点
	"scaleLineInterval": 3,        // 经纬度刻度间隔，单位 分

	"drawingManagerFor": "area",  // or line  area
	"spStatisticsKey":"taxnm",	
	"spPatternLablelbStyle": "名称",  // "编号", ""
	"spPatternSetting" : "opts",    // opts or grad	 or rand
	"spPatternOpts" : {                     //区块色
		"1" : ["#fffacd",0,10,"<10种"],
		"2" : ["#ffd700",10,30,"10-30种"],
		"3" : ["#ffb5c5",30,50,"30-50种"],
		"4" : ["#ff7f00",50,70,"50-70种"],
		"5" : ["#ff3e96",70,90,"70-90种"],
		"6" : ["#ff00ff",90,9999,">90种"]
	},
	"spPatternGradient" : {					//渐变色
		"startColor" : "#fffacd",
		"endColor" : "#ff00ff",
		"startValue" : 0,
		"endValue" : 100,
		"unit"     : "种"
	},
	"spPatternRandom" : {                     //随机色
		"1" : ["#0072bc"],
		"2" : ["#d8531f"],
		"3" : ["#e9b021"],
		"4" : ["#7d2f6e"],
		"5" : ["#9f8484"],
		"6" : ["#07a807e1"]
	},
	"spPatternOpacity" : 0.8,
	"spPatternOptsMax" : 12,		
	"spLineColor" : '#4a86e8',
	"spLineOpacity" : 0.4,
	"spLineWidth" : 1,	
	"ImageSetting":{ // 图片文件设置
		"isCompress":["压缩","off"],
		"maxWidth": ["最宽",200],
		"maxHeight":["最高",200],
		"quality": ["质量",0.8],
		"imagePath": ["目录","C:/MyWork/SoftwareDep/sampleimg/"]
	},
	"pointCollectionShape":{
		BMAP_POINT_SHAPE_CIRCLE	: "圆形", //为默认形状
		BMAP_POINT_SHAPE_STAR	: "星形",
		BMAP_POINT_SHAPE_SQUARE	: "方形",
		BMAP_POINT_SHAPE_RHOMBUS : "菱形",
		BMAP_POINT_SHAPE_WATERDROP	: "水滴状" //该类型无size和color属性
	},
	"pointCollectionSize":{	
		BMAP_POINT_SIZE_TINY	: "超小", //,宽高为2px*2px
		BMAP_POINT_SIZE_SMALLER	: "很小", //,宽高为4px*4px
		BMAP_POINT_SIZE_SMALL	: "小", //,宽高为8px*8px
		BMAP_POINT_SIZE_NORMAL	: "正常", //,宽高为10px*10px,为海量点默认尺寸
		BMAP_POINT_SIZE_BIG	: "大", //,宽高为16px*16px
		BMAP_POINT_SIZE_BIGGER	: "很大", //,宽高为20px*20px
		BMAP_POINT_SIZE_HUGE	: "超大" //,宽高为30px*30px
	},	
	"pointCollectionColor":{	
		"pink":"粉红",	
		"fuchsia":"紫红",
		"purple":"紫色",
		"red":"红色",
		"Iidigo":"靛青",
		"blue":"纯蓝",
		"navy":"海蓝",
		"aqua":"水绿",
		"green":"纯绿",	
		"greenYellow":"绿黄",
		"yellow":"纯黄",
		"kaki":"卡其",	
		"gold":"金色",
		"orange":"橙色",
		"brown":"棕色",		
		"silver":"浅灰",
		"black":"黑色"
	},
	/**
	"spPatternOpts" : {
		"0" : ["#d9d9d9",0,2],
		"1" : ["#d9ead3",2,10],
		"2" : ["#b6d7a8",10,30],
		"3" : ["#a2c4c9",30,50],
		"4" : ["#bdfcc9",50,70],
		"5" : ["#32cd32",70,90],
		"6" : ["#00ff00",90,9999]

	},	
	
	海量点 Shape
	BMAP_POINT_SHAPE_CIRCLE	圆形,为默认形状
	BMAP_POINT_SHAPE_STAR	星形
	BMAP_POINT_SHAPE_SQUARE	方形
	BMAP_POINT_SHAPE_RHOMBUS	菱形
	BMAP_POINT_SHAPE_WATERDROP	水滴状,该类型无size和color属性
	
	海量点 Size
	BMAP_POINT_SIZE_TINY	定义点的尺寸为超小,宽高为2px*2px
	BMAP_POINT_SIZE_SMALLER	定义点的尺寸为很小,宽高为4px*4px
	BMAP_POINT_SIZE_SMALL	定义点的尺寸为小,宽高为8px*8px
	BMAP_POINT_SIZE_NORMAL	定义点的尺寸为正常,宽高为10px*10px,为海量点默认尺寸
	BMAP_POINT_SIZE_BIG	定义点的尺寸为大,宽高为16px*16px
	BMAP_POINT_SIZE_BIGGER	定义点的尺寸为很大,宽高为20px*20px
	BMAP_POINT_SIZE_HUGE	定义点的尺寸为超大,宽高为30px*30px
	**/	
	
	"heatmapOptions" : {
		"radius": 20,
		"countfld": "rcount",
		"maxcount":20
	},	
	"gridConfigure" : {
		"wide": 5000,   //网格宽度，单位 米
		"height": 5000, //网格高度，单位 米
		"XNum": 3100,     //横向网格起始编码
		"YNum": 2500,     //纵向网格起始编码
		"XStep": 100,       //横向网格编码步长
		"YStep": 100       //纵向网格编码步长
	},		

	"stylePropertyMapping_old":{
		"linecolor": "strokeColor",
		"lineopacity": "strokeOpacity",
		"linestyle": "strokeStyle",
		"linewide": "strokeWeight",	
		"fillcolor": "fillColor",
		"fillopacity": "fillOpacity",
		"fontcolor" : "color",
		"fontSize" : "fontSize",
		"fontOpacity": "opacity",
		"fontFamily": "fontFamily", //微软雅黑 仿宋
		"fontWeight": "fontWeight",   // light normal bold
		"backgroundColor":"backgroundColor" 
	},

	"stylePropertyMapping":{
		"线":{
			"linecolor": "strokeColor",
			"lineopacity": "strokeOpacity",
			"linestyle": "strokeStyle",
			"linewide": "strokeWeight"	
		},
		"面":{
			"linecolor": "strokeColor",
			"lineopacity": "strokeOpacity",
			"linestyle": "strokeStyle",
			"linewide": "strokeWeight",	
			"fillcolor": "fillColor",
			"fillopacity": "fillOpacity"
		},
		"字":{
			"fontcolor" : "color",
			"fontSize" : "fontSize",
			"fontOpacity": "opacity",
			"fontFamily": "fontFamily", //微软雅黑 仿宋
			"fontWeight": "fontWeight",   // light normal bold
			"linewide": "border",	
			"linecolor": "borderColor",
			"fillcolor": "fillColor",
			"backgroundColor":"backgroundColor" 
		} 
	},



	/**
	"heatmapOptions" : {
		"radius": 20,
		"gradient": 50,
		"opacity": 70,
		"countfld": "rcount"	
	},	
	**/
	
	"mapColorStyle" : "normal",
	  /**
        //默认地图样式(normal)
        //清新蓝风格(light)
        //黑夜风格(dark)
        //清新蓝绿风格(bluish)
        //高端灰风格(grayscale)
        //强边界风格(hardedge)
        //青春绿风格(darkgreen)
        //浪漫粉风格(pink)
        //午夜蓝风格(midnight)
        //自然绿风格(grassgreen)
        //精简风格(googlelite)
        //红色警戒风格(redalert)	
	  **/
	"mapColorStyles" :{
		"normal":"默认地图样式",
		"light": "清新蓝风格", 
        "dark": "黑夜风格", 
        "bluish": "清新蓝绿风格", 
        "grayscale": "高端灰风格", 
        "hardedge": "强边界风格", 
        "darkgreen": "青春绿风格", 
        "pink": "浪漫粉风格", 
        "midnight": "午夜蓝风格", 
        "grassgreen": "自然绿风格", 
        "googlelite": "精简风格", 
        "redalert": "红色警戒风格"		
	}, 
	"useMapShowStyle":false,
	"mapShowStyle" : [
			{
				"featureType": "manmade",
				"elementType": "all",
				"stylers": {
					"visibility": "off"
				}		
			},
			{
                'featureType': 'poi',
                'elementType': 'all',
                'stylers': {
                    'visibility': 'off'
                }
            }, 
			{
                'featureType': 'boundary',
                'elementType': 'all',
                'stylers': {
                    //'color': '#fefefe'
					//'color': '#ff0000ff'
					'color': 'red'
                }
            }, 
			{
                'featureType': 'highway',
                'elementType': 'all',
                'stylers': {
                   'visibility': 'off'
                }
            },
			{
                'featureType': 'railway',
                'elementType': 'all',
                'stylers': {
                    'visibility': 'off'
                }
            },
			{
				"featureType": "local",
				"elementType": "all",
				"stylers": {
					"visibility": "off"
				}
			},
			{
				"featureType": "land",
				"elementType": "geometry",
				"stylers": {
					"visibility": "on",
					"color": "#091220ff"
				}
			},
			{  
				"featureType": "poi", // POI兴趣点  
				"elementType": "labels", // 文字标签  
				"stylers": {  
					"color": "#ffffff", // 设置文字颜色为白色（假设地图背景色为深色）    
					"visibility": "off" // 直接尝试关闭文字可见性（注意：不是所有样式都支持visibility属性）  
					}  
			},
			{
               "featureType": "water",
                "elementType": "geometry.fill",
                "stylers": {
                     "color": "#ff0000ff",
                     "hue": "#ff0000",
                     "weight": "1",
                     "lightness": 1,
                     "saturation": 100,
                     "visibility": "on"
				}
			}
        ],
	"mapLineSmoothParameter": {
		"iterations": ["迭代数",3],
		"ratio": ["切割比",0.2]
	},
	"mapShowStyleVisibility" :	{
		"manmade": ["人造物","on"],
		"poi": ["兴趣点","on"],
		"boundary": ["边界","on"],
		"highway": ["高速路","on"],
		"railway": ["铁路","on"],
		"local": ["本地","on"],
		"land": ["陆地","on"],
		"water": ["水体","on"],
		"road": ["道路","on"],
		"transit": ["交通","on"],	
		"green": ["绿地","on"],			
	}	
}	