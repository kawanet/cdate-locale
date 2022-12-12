// Do NOT edit this file as generated by make-locale. 
import type {cdate} from "cdate";

const weekdayShort = ["週日", "週一", "週二", "週三", "週四", "週五", "週六"];
const weekdayLong = ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"];
const monthShort = ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"];
const monthLong = ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"];

export const locale_zh_TW: cdate.Handlers = {
    "%a": dt => weekdayShort[dt.getDay()],
    "%A": dt => weekdayLong[dt.getDay()],
    "%b": dt => monthShort[dt.getMonth()],
    "%B": dt => monthLong[dt.getMonth()],
    "%p": dt => (dt.getHours() < 12 ? "上午" : "下午"),

    // 2022年1月2日 週日 上午3:04:05
    "%c": "%Y年%-m月%-d日 %a %p%-I:%M:%S",

    // 上午3:04:05
    "%r": "%p%-I:%M:%S",

    // 2022/1/2
    "%x": "%Y/%-m/%-d",

    // 上午3:04:05
    "%X": "%p%-I:%M:%S",
};
