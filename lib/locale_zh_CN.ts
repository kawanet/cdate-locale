// Do NOT edit this file as generated by make-locale. 
import type {cdate} from "cdate";

const weekdayShort = ["周日", "周一", "周二", "周三", "周四", "周五", "周六"];
const weekdayLong = ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"];
const monthShort = ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"];
const monthLong = ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"];

export const locale_zh_CN: cdate.Handlers = {
    "%a": dt => weekdayShort[dt.getDay()],
    "%A": dt => weekdayLong[dt.getDay()],
    "%b": dt => monthShort[dt.getMonth()],
    "%B": dt => monthLong[dt.getMonth()],
    "%p": dt => (dt.getHours() < 12 ? "上午" : "下午"),

    // 2022年1月2日周日 03:04:05
    "%c": "%Y年%-m月%-d日%a %H:%M:%S",

    // 上午03:04:05
    "%r": "%p%H:%M:%S",

    // 2022/1/2
    "%x": "%Y/%-m/%-d",

    // 03:04:05
    "%X": "%H:%M:%S",
};
