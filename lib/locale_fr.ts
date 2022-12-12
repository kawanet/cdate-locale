// Do NOT edit this file as generated by make-locale. 
import type {cdate} from "cdate";

const weekdayShort = ["dim.", "lun.", "mar.", "mer.", "jeu.", "ven.", "sam."];
const weekdayLong = ["dimanche", "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi"];
const monthShort = ["janv.", "févr.", "mars", "avr.", "mai", "juin", "juil.", "août", "sept.", "oct.", "nov.", "déc."];
const monthLong = ["janvier", "février", "mars", "avril", "mai", "juin", "juillet", "août", "septembre", "octobre", "novembre", "décembre"];

export const locale_fr: cdate.Handlers = {
    "%a": dt => weekdayShort[dt.getDay()],
    "%A": dt => weekdayLong[dt.getDay()],
    "%b": dt => monthShort[dt.getMonth()],
    "%B": dt => monthLong[dt.getMonth()],
    "%p": dt => (dt.getHours() < 12 ? "AM" : "PM"),

    // dim. 2 janv. 2022, 03:04:05
    "%c": "%a %-d %b %Y, %H:%M:%S",

    // 03:04:05 AM
    "%r": "%H:%M:%S %p",

    // 02/01/2022
    "%x": "%d/%m/%Y",

    // 03:04:05
    "%X": "%H:%M:%S",
};
