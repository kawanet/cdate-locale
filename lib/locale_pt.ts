// Do NOT edit this file as generated by make-locale. 
import type {cdate} from "cdate";

const weekdayShort = ["dom.", "seg.", "ter.", "qua.", "qui.", "sex.", "sáb."];
const weekdayLong = ["domingo", "segunda-feira", "terça-feira", "quarta-feira", "quinta-feira", "sexta-feira", "sábado"];
const monthShort = ["jan.", "fev.", "mar.", "abr.", "mai.", "jun.", "jul.", "ago.", "set.", "out.", "nov.", "dez."];
const monthLong = ["janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"];

export const locale_pt: cdate.Handlers = {
    "%a": dt => weekdayShort[dt.getDay()],
    "%A": dt => weekdayLong[dt.getDay()],
    "%b": dt => monthShort[dt.getMonth()],
    "%B": dt => monthLong[dt.getMonth()],
    "%p": dt => (dt.getHours() < 12 ? "AM" : "PM"),

    // dom., 2 de jan. de 2022 03:04:05
    "%c": "%a, %-d de %b de %Y %H:%M:%S",

    // 03:04:05 AM
    "%r": "%H:%M:%S %p",

    // 02/01/2022
    "%x": "%d/%m/%Y",

    // 03:04:05
    "%X": "%H:%M:%S",
};
