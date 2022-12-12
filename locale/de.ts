// Do NOT edit this file as generated by make-locale. 
import type {cdate} from "cdate";

const weekdayShort = ["So", "Mo", "Di", "Mi", "Do", "Fr", "Sa"];
const weekdayLong = ["Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"];
const monthShort = ["Jan", "Feb", "Mär", "Apr", "Mai", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dez"];
const monthLong = ["Januar", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"];

export const locale_de: cdate.Handlers = {
    "%a": dt => weekdayShort[dt.getDay()],
    "%A": dt => weekdayLong[dt.getDay()],
    "%b": dt => monthShort[dt.getMonth()],
    "%B": dt => monthLong[dt.getMonth()],
    "%p": dt => (dt.getHours() < 12 ? "AM" : "PM"),

    // So., 2. Jan. 2022, 03:04:05
    "%c": "%a., %-d. %b. %Y, %H:%M:%S",

    // 03:04:05 AM
    "%r": "%H:%M:%S %p",

    // 02.01.22
    "%x": "%d.%m.%y",

    // 03:04:05
    "%X": "%H:%M:%S",
};