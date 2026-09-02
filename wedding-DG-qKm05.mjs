//#region node_modules/.nitro/vite/services/ssr/assets/wedding-DG-qKm05.js
var WEDDING = {
	bride: "Bontu",
	groom: "Abdisa",
	names: "Bontu & Abdisa",
	dateLabel: "28 February 2027",
	dayLabel: "Sunday",
	ceremonyAt: "2027-02-28T17:00:00+07:00",
	rsvpBy: "2026-10-04T23:59:59+10:00",
	rsvpByLabel: "4 October 2026",
	venue: "The Shore Chapel",
	resort: "Katathani Collection",
	place: "Kata Noi, Phuket",
	country: "Thailand",
	address: "The Shore at Katathani, 14 Kata Noi Road, Karon, Phuket 83100, Thailand",
	mapQuery: "The Shore Chapel Katathani Phuket",
	mapLat: 7.8106,
	mapLng: 98.2991,
	capacity: 40,
	timezone: "Asia/Bangkok",
	contacts: [{
		name: "Abdisa",
		phoneDisplay: "0411 102 853",
		phone: "411102853"
	}, {
		name: "Bontu",
		phoneDisplay: "0466 618 420",
		phone: "466618420"
	}]
};
var SCHEDULE = [
	{
		time: "4:15 pm",
		title: "Arrival",
		detail: "Guests gather at The Shore, high above Kata Noi, with the Andaman opening below."
	},
	{
		time: "5:00 pm",
		title: "Ceremony",
		detail: "Vows in the glass chapel — an intimate exchange looking out to sea."
	},
	{
		time: "5:45 pm",
		title: "Sunset canapés",
		detail: "Champagne, coastal bites, and the last gold light on the water."
	},
	{
		time: "7:00 pm",
		title: "Dinner",
		detail: "A long table under the palms. Thai-Andaman courses, unhurried conversation."
	},
	{
		time: "9:00 pm",
		title: "Music & dancing",
		detail: "A small celebration — the people we love, the sea still close."
	},
	{
		time: "10:30 pm",
		title: "Send-off",
		detail: "Sparklers on the path, and a quiet walk back through the resort."
	}
];
var MEALS = [
	{
		id: "coastal",
		name: "Coastal feast",
		blurb: "Thai-Andaman tasting — reef fish, coconut, lemongrass, tropical fruit."
	},
	{
		id: "garden",
		name: "Garden vegetarian",
		blurb: "Herb, citrus and coconut courses — no fish or meat."
	},
	{
		id: "child",
		name: "Children’s plate",
		blurb: "A gentler plate for younger guests."
	}
];
var PARTY = [
	{
		initials: "HB",
		name: "Hana Bekele",
		role: "Maid of honour",
		note: "Bontu’s sister. She will speak after dinner — brief, and not dry-eyed."
	},
	{
		initials: "DL",
		name: "Dawit Lemma",
		role: "Best man",
		note: "Abdisa’s brother. Keeper of the rings, and of the playlist."
	},
	{
		initials: "LT",
		name: "Liya Tadesse",
		role: "Bridesmaid",
		note: "A lifetime of shared summers. She walks with Bontu to the chapel."
	},
	{
		initials: "SM",
		name: "Samuel Mekonnen",
		role: "Groomsman",
		note: "School friend, now family. He toasts the pair before the dancing starts."
	},
	{
		initials: "A & K",
		name: "Aster & Kedir",
		role: "Parents of the bride",
		note: "Who raised a daughter with a laugh that carries across water."
	},
	{
		initials: "C & T",
		name: "Chaltu & Tadesse",
		role: "Parents of the groom",
		note: "Who taught Abdisa how to hold a room, and a hand."
	}
];
function normalizePhone(input) {
	let rest = input.replace(/\D/g, "");
	if (rest.startsWith("61") && rest.length >= 11) rest = rest.slice(2);
	if (rest.startsWith("0") && rest.length >= 10) rest = rest.slice(1);
	if (/^4\d{8}$/.test(rest)) return rest;
	return null;
}
//#endregion
export { normalizePhone as a, WEDDING as i, PARTY as n, SCHEDULE as r, MEALS as t };
