var select_year,select_month,select_day,select_weekday;

! function(e, a) {
	"use strict";
	var t = t || {};
	t.namespace = function(e) {
		var a = e.split("."),
			n = t;
		"Calendar" === a[0] && (a = a.slice(1));
		for (var r = 0, i = a.length; i > r; r++) "undefined" == typeof n[a[r]] && (n[a[r]] = {}), n = n[a[r]];
		return n
	}, t.namespace("Calendar.core"), 
	t.core.getChinaDate = function(e) {
		var n = "";
		return n
	}, t.core.getChinaMonth = function(e) {
		var a = [];
		return a[e - 1]
	}, t.core.getLunarDay = function(e, a, n) {
		function r(e) {
			var a, t = 348;
			for (a = 32768; a > 8; a >>= 1) t += o[e - 1900] & a ? 1 : 0;
			return t + i(e)
		}

		function i(e) {
			return l(e) ? 65536 & o[e - 1900] ? 30 : 29 : 0
		}

		function l(e) {
			return 15 & o[e - 1900]
		}

		function d(e, a) {
			return o[e - 1900] & 65536 >> a ? 30 : 29
		}

		function s(e) {
			var a, t = 0,
				n = 0,
				s = new Date(1900, 0, 31),
				o = (e - s) / 864e5;
			for (this.dayCyl = o + 40, this.monCyl = 14, a = 1900; 2050 > a && o > 0; a++) n = r(a), o -= n, this.monCyl += 12;
			for (0 > o && (o += n, a--, this.monCyl -= 12), this.year = a, this.yearCyl = a - 1864, t = l(a), this.isLeap = !1, a = 1; 13 > a && o > 0; a++) t > 0 && a == t + 1 && 0 == this.isLeap ? (--a, this.isLeap = !0, n = i(this.year)) : n = d(this.year, a), 1 == this.isLeap && a == t + 1 && (this.isLeap = !1), o -= n, 0 == this.isLeap && this.monCyl++;
			0 == o && t > 0 && a == t + 1 ? this.isLeap && (this.isLeap = !1) : (this.isLeap = !0, --a, --this.monCyl), 0 > o && (o += n, --a, --this.monCyl), this.month = a, this.day = o + 1
		}
		var o = [19416, 19168, 42352, 21717, 53856, 55632, 91476, 22176, 39632, 21970, 19168, 42422, 42192, 53840, 119381, 46400, 54944, 44450, 38320, 84343, 18800, 42160, 46261, 27216, 27968, 109396, 11104, 38256, 21234, 18800, 25958, 54432, 59984, 28309, 23248, 11104, 100067, 37600, 116951, 51536, 54432, 120998, 46416, 22176, 107956, 9680, 37584, 53938, 43344, 46423, 27808, 46416, 86869, 19872, 42448, 83315, 21200, 43432, 59728, 27296, 44710, 43856, 19296, 43748, 42352, 21088, 62051, 55632, 23383, 22176, 38608, 19925, 19152, 42192, 54484, 53840, 54616, 46400, 46496, 103846, 38320, 18864, 43380, 42160, 45690, 27216, 27968, 44870, 43872, 38256, 19189, 18800, 25776, 29859, 59984, 27480, 21952, 43872, 38613, 37600, 51552, 55636, 54432, 55888, 30034, 22176, 43959, 9680, 37584, 51893, 43344, 46240, 47780, 44368, 21977, 19360, 42416, 86390, 21168, 43312, 31060, 27296, 44368, 23378, 19296, 42726, 42208, 53856, 60005, 54576, 23200, 30371, 38608, 19415, 19152, 42192, 118966, 53840, 54560, 56645, 46496, 22224, 21938, 18864, 42359, 42160, 43600, 111189, 27936, 44448],
			c = new Date(e, a - 1, n),
			u = new s(c),
			f = {
				month: t.core.getChinaMonth(u.month + 1),
				date: t.core.getChinaDate(u.day)
			};
		return f
	}, t.core.getFirstDayOfMonth = function(e, a) {
		var t = new Date(e, a - 1, 1);
		return parseInt(t.getDay())
	}, t.core.isLeapYear = function(e) {
		return e = parseInt(e, 10), e % 4 == 0 && (e % 100 != 0 || e % 400 == 0)
	}, t.core.getDateOfSolarTerm = function(e, a) 
	{
		var t = [""],
			n = [0, 21208, 42467, 63836, 85337, 107014, 128867, 150921, 173149, 195551, 218072, 240693, 263343, 285989, 308563, 331033, 353350, 375494, 397447, 419210, 440795, 462224, 483532, 504758],
			r = 2 * a - 2,
			i = 2 * a - 1,
			l = new Date(31556925974.7 * (e - 1900) + 6e4 * n[r] + Date.UTC(1900, 0, 6, 2, 5)),
			d = new Date(31556925974.7 * (e - 1900) + 6e4 * n[i] + Date.UTC(1900, 0, 6, 2, 5)),
			s = [];
		return s
	}, t.core.getSolarFestival = function() {
		var e = [];
		return e
	}, t.core.getLunarFestival = function() {
		var e = [];
		return e
	}, t.core.getDay = function(e) {
		var a = ["星期一", "星期二", "星期三", "星期四", "星期五", "星期六", "星期日"];
		return a[e % 7]
	},  e.Calendar = t
}(window),
function() {
	"use strict";
	Calendar.namespace("Calendar.tpl"), Calendar.tpl.replace = function(e, a) {
		var t, n = /\{\$[\w]+\}/g;
		return t = e.replace(n, function(e) {
			var t = e.slice(2, e.length - 1);
			return a[t]
		})
	}
}(),
function() {
	"use strict";
	Calendar.namespace("ui"), Calendar.ui.createFrame = function(e) {
		var a = '<div class="container"><div class="row"><div class="col-xs-12"><div class="row menu"><div id="pre-year" class="btn">&lt;</div><select id="select-year"></select><div id="next-year" class="btn">&gt;</div> <div id="pre-month" class="btn">&lt;</div><select id="select-month"></select><div id="next-month" class="btn">&gt;</div> <div id="back-today" class="btn"">今天</div> </div><div class="row week" id="week"><!-- 这里生成日历表 --></div></div></div></div>';
		e.innerHTML = a
	}, Calendar.ui.createWeekGrid = function(e) {
		var a = ["一", "二", "三", "四", "五", "六", "日"],
			t = 0,
			n = '<div class="col-xs-one-of-seven days">{$week}</div>',
			r = '<div class="col-xs-one-of-seven dates" data-index={$index}></div>',
			i = "";
		i += '<div class="row week-header">';
		for (var l = 0; 7 > l; l++) i += Calendar.tpl.replace(n, {
			week: a[l]
		});
		i += "</div>";
		for (var l = 0; 6 > l; l++) {
			i += '<div class="row week-content">';
			for (var d = 0; 7 > d; d++) i += Calendar.tpl.replace(r, {
				index: t++
			});
			i += "</div>"
		}
		i += '	<div class="row details" id="details"></div>', 
		e.innerHTML = i
	}, Calendar.ui.createOptions = function(e, a, t, n) {
		for (var r = "<option  value={$value}>{$name}{$unit}</option>", i = "", l = {
				unit: n || ""
			}, d = a; t >= d; d++) l.value = d, l.name = d, i += Calendar.tpl.replace(r, l);
		e.innerHTML = i
	}, Calendar.ui.fillDate = function(e, a) {
		function t(e, a, t, i, d, s) {
			for (var o, c, u = "", f = '<div class="solar-date">{$solarDate}</div><div class="lunar-date"></div>'; i > t; t++, d++) o = Calendar.core.getLunarDay(e, a, d), c = "初一" === o.date ? o.month : o.date, u = Calendar.tpl.replace(f, {
				solarDate: d,
				lunarDate: c
			}), l[t].classList.add(s), l[t].innerHTML = u, n[t] = a + "," + d, r[t] = o.month + "," + o.date
		}
		for (var n = new Array(42), r = new Array(42), i = ["current-month", "last-month", "next-month"], l = document.querySelectorAll(".week-content .dates"), d = Calendar.core.getFirstDayOfMonth(e, a) - 1, s = 0, o = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], c = 0, u = l.length; u > c; c++) l[c].innerHTML = "", l[c].className = "col-xs-one-of-seven dates";
		d = 0 > d ? 6 : d, o[1] = Calendar.core.isLeapYear(e) ? 29 : 28, s = o[a - 1] + d, t(e, a, d, s, 1, i[0]);
		var f = 1 === a ? 12 : a - 1,
			v = 1 === a ? e - 1 : e,
			m = o[f - 1] - d + 1;
		t(v, f, 0, d, m, i[1]);
		var h = 12 === a ? 1 : a + 1,
			C = 12 === a ? e + 1 : e,
			p = d + o[a - 1];
		t(C, h, p, 42, 1, i[2]), Calendar.ui.addTermStyle(n, e, a), Calendar.ui.addSolarFestival(n), Calendar.ui.addLunarFestival(r), Calendar.ui.addWeekFestival(n, a), Calendar.ui.setToday(e, a, n), Calendar.ui.addRestStyle(e, a)
	}, Calendar.ui.addTermStyle = function(e, a, t) {
		var n = 1 === t ? 12 : t - 1,
			r = 12 === t ? 1 : t + 1,
			i = 1 === t ? a - 1 : a,
			l = 12 === t ? a + 1 : a,
			d = [],
			s = document.querySelectorAll(".lunar-date");
		d = Calendar.core.getDateOfSolarTerm(a, t), d = d.concat(Calendar.core.getDateOfSolarTerm(i, n)), d = d.concat(Calendar.core.getDateOfSolarTerm(l, r));
		for (var o = 0, c = e.length; c > o; o++)
			for (var u = 0; u < d.length; u++) e[o] === d[u].date && (s[o].innerHTML = d[u].termName, s[o].classList.add("term-date"))
	}, Calendar.ui.addSolarFestival = function(e) {
		for (var a = document.querySelectorAll(".lunar-date"), t = Calendar.core.getSolarFestival(), n = 0; n < e.length; n++)
			for (var r = 0; r < t.length; r++) e[n] === t[r].date && (a[n].innerHTML = t[r].fName, a[n].classList.add("festival-date"))
	}, Calendar.ui.addLunarFestival = function(e) {
		for (var a = document.querySelectorAll(".lunar-date"), t = Calendar.core.getLunarFestival(), n = 0; n < e.length; n++)
			for (var r = 0; r < t.length; r++) e[n] === t[r].date && (a[n].innerHTML = t[r].fName, a[n].classList.add("festival-date"))
	}, Calendar.ui.addWeekFestival = function(e, a) {
		/*function t(t, n, r, i) {
			var l = 0,
				d = document.querySelectorAll(".lunar-date");
			if (a === t)
				for (; 42 > r;) {
					if (parseInt(e[r]) === t && ++l === n) {
						d[r].innerHTML = i, d[r].classList.add("festival-date");
						break
					}
					r += 7
				}
		}*/
		
	}
	, Calendar.ui.setToday = function(e, a, t) {
		var n = new Date,
			r = n.getYear() + 1900,
			i = n.getMonth() + 1,
			l = n.getDate(),
			d = document.querySelectorAll(".week-content .dates");
		if (e === r && a === i)
			for (var s = i + "," + l, o = 0; o < t.length; o++) t[o] === s && (d[o].classList.add("today"), Calendar.ui.showDetails(d[o], e, a))
	}, Calendar.ui.showDetails = function(e, a, t) {
		var n = Calendar.core.getDay(e.dataset.index),
			r = e.querySelector(".solar-date").innerHTML,
			//i = e.querySelector(".lunar-date").innerHTML,
			//l = Calendar.core.getAnimal(parseInt(a)),
			d = document.getElementById("details"),
			s = a + "年 " + t + "月 " + r + "日 " + n /*+  i*/;
			select_year=a;
			select_month=t;
			select_day=r;
			select_weekday=n;
		localStorage.setItem('selectdate',a.toString()+"-"+t.toString()+"-"+r.toString());
		var eventString = localStorage.getItem(a.toString()+"-"+t.toString()+"-"+r.toString());
		var arrayEvent=[];
		var i;
		if(eventString!=null)
		{
			arrayEvent=eventString.split("+");
			for(i=0;i<arrayEvent.length;i++)
				{
					var event=[];
					event=arrayEvent[i].split(".");
					if(event[0]!="")
						s+="<br>"+"<button class='btn btn-success' onclick='y(this.value)' style='width:60%;' value='"+arrayEvent[i]+"'>"+"時間:"+event[2]+"/事情:"+event[0]+"</button>";
				}
		}
			
		d.innerHTML = s
	}, Calendar.ui.addRestStyle = function(e, a) {
		if (2016 === e)
			for (var t = ["4,5,6,41", "6,7,8,9,10,11,12", "33,34,35", "5, 6,7,33,34,35", "5,6,7", "10,11,12", "", "", "17,18,19,33,34,35,36,37,38,39", "5,6,7,8,9,10,11", "", ""], n = t[a - 1].split(","), r = document.querySelectorAll("#week .dates"), i = 0; i < n.length && "" !== n[i]; i++) r[parseInt(n[i])].classList.add("rest-dates")
	}
}(),
function() {
	"use strict";
	Calendar.namespace("controller"), Calendar.controller.init = function(e) {
		function a(e, a, n) {
			var r = parseInt(a.value),
				i = parseInt(n.value),
				l = 0;
			e.classList.contains("dates") && (e.classList.contains("last-month") ? (1 === i ? (r -= 1, i = 12) : i -= 1, l = -1) : e.classList.contains("next-month") && (12 === i ? (r += 1, i = 1) : i += 1, l = 1), Calendar.ui.showDetails(e, r, i), 0 !== l && t(2, a, n, l))
		}

		function t(e, a, t, n, r) {
			var i = [].slice.call(arguments, 0),
				l = parseInt(i[e].value);
			if (!r || l !== r) {
				if (2 === e)
					if (1 === l && -1 === n) {
						if (1901 === parseInt(a.value)) return;
						i[1].value = parseInt(i[1].value) - 1, i[2].value = 12
					} else if (12 === l && 1 === n) {
					if (2050 === parseInt(a.value)) return;
					i[1].value = parseInt(i[1].value) + 1, i[2].value = 1
				} else i[e].value = l + n;
				else i[e].value = l + n;
				Calendar.ui.fillDate(parseInt(a.value), parseInt(t.value))
			}
		}

		function n(e, a) {
			var t = new Date,
				n = t.getFullYear(),
				r = t.getMonth() + 1;
			t.getDate();
			e.value = n, a.value = r, Calendar.ui.fillDate(n, r)
		}
		Calendar.ui.createFrame(e);
		var r = document.getElementById.bind(document),
			i = r("select-year"),
			l = r("select-month"),
			d = r("pre-year"),
			s = r("next-year"),
			o = r("pre-month"),
			c = r("next-month"),
			u = r("week"),
			f = r("back-today");
		Calendar.ui.createOptions(i, 1901, 2050, "年"), Calendar.ui.createOptions(l, 1, 12, "月"), Calendar.ui.createWeekGrid(u), n(i, l), i.addEventListener("change", function() {
			Calendar.ui.fillDate(parseInt(i.value), parseInt(l.value))
		}, !1), l.addEventListener("change", function() {
			Calendar.ui.fillDate(parseInt(i.value), parseInt(l.value))
		}, !1), d.addEventListener("click", function() {
			t(1, i, l, -1, 1901)
		}, !1), s.addEventListener("click", function() {
			t(1, i, l, 1, 2050)
		}, !1), o.addEventListener("click", function() {
			t(2, i, l, -1)
		}, !1), c.addEventListener("click", function() {
			t(2, i, l, 1)
		}, !1), u.addEventListener("click", function(e) {
			var t = e.target.parentNode;
			a(t, i, l)
		}, !1), f.addEventListener("click", function() {
			n(i, l)
		}, !1)
	}
}();