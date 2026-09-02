import { o as __toESM } from "../_runtime.mjs";
import { V as require_react, x as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as Menu, c as Check, i as Shirt, l as Calendar, n as Users, o as MapPin, s as Clock, t as X } from "../_libs/lucide-react.mjs";
import { a as submitRsvp, i as signOut, n as Route, o as verifyCode, r as requestCode } from "./router-D9o3VaVI.mjs";
import { i as WEDDING, n as PARTY, r as SCHEDULE, t as MEALS } from "./wedding-DG-qKm05.mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-COP-OMNq.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
function Band({ className, d, fill }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("absolute inset-x-0 bottom-0 h-full w-[220%]", className),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
			className: "h-full w-full",
			viewBox: "0 0 1440 320",
			preserveAspectRatio: "none",
			"aria-hidden": "true",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				fill,
				d
			})
		})
	});
}
function BeachOcean({ className, variant = "hero" }) {
	const sand = variant === "gate" ? "rgba(18, 54, 64, 0.55)" : "#f4efe6";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: cn("pointer-events-none absolute inset-x-0 bottom-0 overflow-hidden", className),
		"aria-hidden": "true",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-x-0 bottom-0 h-[28%] bg-[linear-gradient(180deg,transparent,rgba(212,196,168,0.55)_42%,rgba(196,174,138,0.9))]" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Band, {
				className: "wave-band-fast bottom-[38%] h-[46%] opacity-70",
				fill: "rgba(94, 138, 136, 0.45)",
				d: "M0 180c90 40 160-50 280-28 150 28 190 90 340 70 160-22 200-96 360-70 150 24 200 92 340 52 90-24 90-40 120-20v164H0Z"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Band, {
				className: "wave-band-slow bottom-[18%] h-[52%] opacity-85",
				fill: "rgba(26, 69, 84, 0.62)",
				d: "M0 150c110 36 190-44 320-20 170 32 210 86 370 64 150-20 210-88 350-60 150 28 190 80 300 48 70-18 80-36 100-18v166H0Z"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Band, {
				className: "wave-band bottom-0 h-[44%]",
				fill: sand,
				d: "M0 120c100 32 170-38 300-16 160 26 200 78 350 58 150-18 190-80 340-54 140 24 190 76 310 44 80-20 100-36 140-16v180H0Z"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "absolute inset-x-0 bottom-[30%] h-12",
				children: [[
					"8%",
					"22%",
					"37%",
					"51%",
					"66%",
					"81%",
					"93%"
				].map((left, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "foam-dot absolute bottom-0 size-2 rounded-full bg-foam/80",
					style: {
						left,
						animationDelay: `${i * .35}s`
					}
				}, left)), [
					"14%",
					"29%",
					"44%",
					"59%",
					"74%",
					"88%"
				].map((left, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "splash-dot absolute bottom-1 size-1.5 rounded-full bg-foam",
					style: {
						left,
						animationDelay: `${.2 + i * .28}s`
					}
				}, `s-${left}`))]
			})
		]
	});
}
var buttonVariants = cva("inline-flex items-center justify-center gap-2 rounded-pill font-medium transition-[opacity,transform,background-color,color,box-shadow] duration-150 ease-out focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ocean disabled:pointer-events-none disabled:opacity-40 active:not-disabled:scale-[0.96]", {
	variants: {
		variant: {
			primary: "bg-ocean text-ivory shadow-[0_1px_0_color-mix(in_oklab,white_16%,transparent)_inset] hover:bg-ocean-deep",
			secondary: "bg-paper text-ocean shadow-[0_0_0_1px_color-mix(in_oklab,var(--color-ocean)_16%,transparent)] hover:bg-ivory",
			ghost: "bg-transparent text-ivory hover:bg-ivory/10",
			wax: "bg-wax text-ivory hover:opacity-90"
		},
		size: {
			default: "h-11 min-h-11 px-5 text-sm",
			lg: "h-12 min-h-12 px-6 text-sm",
			sm: "h-10 min-h-10 px-4 text-sm"
		}
	},
	defaultVariants: {
		variant: "primary",
		size: "default"
	}
});
function Button({ className, variant, size, type = "button", ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		type,
		className: cn(buttonVariants({
			variant,
			size
		}), className),
		...props
	});
}
function Input({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
		className: cn("h-12 w-full min-h-12 rounded-md bg-paper px-4 text-base text-ink shadow-[0_0_0_1px_color-mix(in_oklab,var(--color-ocean)_16%,transparent)] outline-none transition-[box-shadow] duration-150 placeholder:text-muted focus-visible:shadow-[0_0_0_2px_var(--color-ocean)]", className),
		...props
	});
}
function Label({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
		className: cn("text-xs font-medium tracking-[0.16em] text-ocean/80 uppercase", className),
		...props
	});
}
function WaveLayer({ className, fill, durationClass }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("absolute bottom-0 left-0 h-[38%] w-[200%]", durationClass, className),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
			className: "h-full w-full",
			viewBox: "0 0 1440 180",
			preserveAspectRatio: "none",
			"aria-hidden": "true",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				fill,
				d: "M0 72c120 28 180-36 300-24 150 16 180 70 330 58 140-12 180-72 330-58 140 14 180 68 300 42 80-18 140-48 180-28v118H0Z"
			})
		})
	});
}
function Foam({ className }) {
	const dots = [
		{
			left: "8%",
			delay: "0s",
			size: "size-2"
		},
		{
			left: "18%",
			delay: "0.8s",
			size: "size-1.5"
		},
		{
			left: "27%",
			delay: "1.4s",
			size: "size-2.5"
		},
		{
			left: "41%",
			delay: "0.3s",
			size: "size-1.5"
		},
		{
			left: "53%",
			delay: "1.1s",
			size: "size-2"
		},
		{
			left: "62%",
			delay: "1.9s",
			size: "size-1.5"
		},
		{
			left: "74%",
			delay: "0.5s",
			size: "size-2.5"
		},
		{
			left: "86%",
			delay: "1.6s",
			size: "size-1.5"
		},
		{
			left: "93%",
			delay: "0.2s",
			size: "size-2"
		}
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: cn("pointer-events-none absolute inset-x-0 bottom-[22%] h-16", className),
		children: [dots.map((dot) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: cn("foam-dot absolute bottom-0 rounded-full bg-foam/80", dot.size),
			style: {
				left: dot.left,
				animationDelay: dot.delay
			}
		}, dot.left)), dots.slice(0, 6).map((dot) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "splash-dot absolute bottom-2 size-1 rounded-full bg-foam",
			style: {
				left: `calc(${dot.left} + 3%)`,
				animationDelay: `calc(${dot.delay} + 0.4s)`
			}
		}, `s-${dot.left}`))]
	});
}
function OceanWaves({ className, tone = "ivory" }) {
	const fills = tone === "ivory" ? [
		"color-mix(in oklab, #5e8a88 55%, #1a4554)",
		"color-mix(in oklab, #1a4554 72%, #5e8a88)",
		"#f4efe6"
	] : [
		"color-mix(in oklab, #5e8a88 40%, transparent)",
		"color-mix(in oklab, #123640 70%, #5e8a88)",
		"#123640"
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: cn("pointer-events-none absolute inset-x-0 bottom-0 h-40 overflow-hidden", className),
		"aria-hidden": "true",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WaveLayer, {
				fill: fills[0],
				durationClass: "wave-band-fast opacity-80",
				className: "bottom-[18%]"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WaveLayer, {
				fill: fills[1],
				durationClass: "wave-band-slow opacity-90",
				className: "bottom-[8%]"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WaveLayer, {
				fill: fills[2],
				durationClass: "wave-band"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Foam, {})
		]
	});
}
function LoginGate({ onAuthed }) {
	const [phone, setPhone] = (0, import_react.useState)("");
	const [code, setCode] = (0, import_react.useState)("");
	const [step, setStep] = (0, import_react.useState)("phone");
	const [delivered, setDelivered] = (0, import_react.useState)(null);
	const [error, setError] = (0, import_react.useState)(null);
	const [pending, setPending] = (0, import_react.useState)(false);
	async function sendCode() {
		setPending(true);
		setError(null);
		try {
			const result = await requestCode({ data: { phone } });
			if (!result.ok) {
				setError(result.error);
				return;
			}
			setDelivered({
				firstName: result.firstName,
				maskedPhone: result.maskedPhone,
				code: result.code
			});
			setStep("code");
		} catch {
			setError("Something went quiet on the line. Please try again.");
		} finally {
			setPending(false);
		}
	}
	async function confirm() {
		setPending(true);
		setError(null);
		try {
			const result = await verifyCode({ data: {
				phone,
				code
			} });
			if (!result.ok) {
				setError(result.error);
				return;
			}
			onAuthed(result.session);
		} catch {
			setError("We could not open the invitation. Please try again.");
		} finally {
			setPending(false);
		}
	}
	function onPhoneSubmit(event) {
		event.preventDefault();
		sendCode();
	}
	function onCodeSubmit(event) {
		event.preventDefault();
		confirm();
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative min-h-dvh overflow-hidden bg-ocean-deep text-ivory",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: "/images/dusk-sea.jpg",
				alt: "",
				className: "absolute inset-0 size-full object-cover outline-none"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-[linear-gradient(180deg,rgba(18,54,64,0.22)_0%,rgba(18,54,64,0.4)_42%,rgba(18,54,64,0.55)_100%)]" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BeachOcean, {
				variant: "gate",
				className: "h-[52%]"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(OceanWaves, {
				tone: "ocean",
				className: "h-36"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
				className: "relative z-10 mx-auto flex min-h-dvh w-full max-w-lg flex-col justify-center px-5 py-16",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "enter-letter mb-6 text-center text-xs tracking-[0.32em] text-sand uppercase",
						children: "Private invitation"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "enter-letter rounded-xl bg-paper/95 p-6 text-ink shadow-card sm:p-9",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-center text-xs tracking-[0.28em] text-sea uppercase",
								children: "The Shore Chapel · Phuket"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
								className: "mt-3 text-center font-display text-5xl leading-none text-ocean italic sm:text-6xl",
								children: WEDDING.names
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-center font-display text-xl text-sage",
								children: WEDDING.dateLabel
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "mx-auto my-6 h-px w-16 bg-sand" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-center text-sm leading-relaxed text-muted",
								children: "This page is only for invited guests. Enter the mobile number on our list — we will send a code to that number to verify you."
							}),
							step === "phone" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
								className: "mt-8 space-y-4",
								onSubmit: onPhoneSubmit,
								action: "#",
								method: "post",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "space-y-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
											htmlFor: "phone",
											children: "Mobile number"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
											id: "phone",
											name: "phone",
											inputMode: "tel",
											autoComplete: "tel",
											placeholder: "04xx xxx xxx",
											value: phone,
											onChange: (event) => setPhone(event.target.value),
											required: true
										})]
									}),
									error ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-sm text-wax",
										children: error
									}) : null,
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
										type: "submit",
										className: "w-full",
										disabled: pending,
										children: pending ? "Sending…" : "Send my code"
									})
								]
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
								className: "mt-8 space-y-4",
								onSubmit: onCodeSubmit,
								action: "#",
								method: "post",
								children: [
									delivered ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "enter-sms rounded-lg bg-ivory p-4 shadow-card",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
												className: "text-xs tracking-[0.18em] text-sea uppercase",
												children: ["Code sent to ", delivered.maskedPhone]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "mt-2 font-display text-2xl tracking-[0.28em] text-ocean",
												children: delivered.code
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
												className: "mt-2 text-sm text-muted",
												children: [
													"Hello ",
													delivered.firstName,
													" — enter this code to open your invitation. It expires in ten minutes."
												]
											})
										]
									}) : null,
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "space-y-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
											htmlFor: "code",
											children: "Six-digit code"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
											id: "code",
											name: "code",
											inputMode: "numeric",
											autoComplete: "one-time-code",
											placeholder: "••••••",
											value: code,
											onChange: (event) => setCode(event.target.value),
											required: true,
											className: "tracking-[0.4em]"
										})]
									}),
									error ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-sm text-wax",
										children: error
									}) : null,
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
										type: "submit",
										className: "w-full",
										disabled: pending,
										children: pending ? "Opening…" : "Open the invitation"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										className: "block w-full min-h-11 text-center text-sm text-muted underline-offset-4 hover:underline",
										onClick: () => {
											setStep("phone");
											setCode("");
											setError(null);
										},
										children: "Use a different number"
									})
								]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-8 text-center text-xs leading-relaxed text-sand/90",
						children: "Questions? Abdisa 0411 102 853 · Bontu 0466 618 420"
					})
				]
			})
		]
	});
}
var ITEMS = [
	{
		icon: Calendar,
		label: "The date",
		value: WEDDING.dateLabel,
		detail: "Sunday, late-dry-season Phuket"
	},
	{
		icon: Clock,
		label: "Ceremony",
		value: "5:00 pm",
		detail: "Please be seated by 4:50"
	},
	{
		icon: Users,
		label: "An intimate day",
		value: `${WEDDING.capacity} seats`,
		detail: "Family and close friends only"
	},
	{
		icon: Shirt,
		label: "Dress",
		value: "Island evening",
		detail: "Linen, sage, cream, sea-glass. Soft shoes for sand."
	}
];
function Details({ remaining }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "day",
		className: "relative bg-paper px-5 py-20",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-4",
			children: ITEMS.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
				className: "rounded-lg bg-ivory p-6 shadow-card",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(item.icon, {
						className: "size-5 text-sea",
						strokeWidth: 1.5
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-xs tracking-[0.2em] text-muted uppercase",
						children: item.label
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "mt-1 font-display text-2xl text-ocean",
						children: item.value
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm text-muted",
						children: item.detail
					})
				]
			}, item.label))
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
			className: "mx-auto mt-10 max-w-2xl text-center text-sm text-muted",
			children: [
				"The Shore Chapel holds forty. ",
				remaining,
				" place",
				remaining === 1 ? "" : "s",
				" remain on the list — kindly reply by ",
				WEDDING.rsvpByLabel,
				"."
			]
		})]
	});
}
function SiteFooter() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "relative overflow-hidden bg-ocean-deep px-5 pb-16 pt-20 text-ivory",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: "/images/ocean-aerial.jpg",
				alt: "",
				className: "absolute inset-0 size-full object-cover opacity-40 outline-none"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-ocean-deep/70" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(OceanWaves, {
				tone: "ocean",
				className: "h-36"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative z-10 mx-auto max-w-2xl text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs tracking-[0.3em] text-sand uppercase",
						children: "Questions"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-3 font-display text-3xl italic",
						children: "Find us on the phone"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-sm text-ivory/75",
						children: "Anything at all — travel, dress, the climb to the chapel."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center sm:gap-10",
						children: WEDDING.contacts.map((person) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: `tel:+61${person.phone}`,
							className: "min-h-11 font-display text-2xl text-ivory",
							children: [person.name, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "mt-1 block font-sans text-sm tracking-[0.12em] text-sand",
								children: person.phoneDisplay
							})]
						}, person.name))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-12 font-display text-xl italic",
						children: WEDDING.names
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-2 text-xs tracking-[0.2em] text-sand uppercase",
						children: [WEDDING.dateLabel, " · Phuket"]
					})
				]
			})
		]
	});
}
function split(target, now) {
	const delta = target - now;
	if (delta <= 0) return null;
	return {
		days: Math.floor(delta / 864e5),
		hours: Math.floor(delta % 864e5 / 36e5),
		minutes: Math.floor(delta % 36e5 / 6e4),
		seconds: Math.floor(delta % 6e4 / 1e3)
	};
}
var UNITS = [
	{
		key: "days",
		label: "Days"
	},
	{
		key: "hours",
		label: "Hours"
	},
	{
		key: "minutes",
		label: "Minutes"
	},
	{
		key: "seconds",
		label: "Seconds"
	}
];
function Countdown() {
	const target = new Date(WEDDING.ceremonyAt).getTime();
	const [parts, setParts] = (0, import_react.useState)(() => split(target, Date.now()));
	(0, import_react.useEffect)(() => {
		const id = window.setInterval(() => setParts(split(target, Date.now())), 1e3);
		return () => window.clearInterval(id);
	}, [target]);
	if (!parts) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "font-display text-3xl text-ocean italic",
		children: "The chapel doors are open."
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "grid grid-cols-4 gap-2 sm:gap-4",
		children: UNITS.map((unit) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "rounded-lg bg-paper/80 px-1 py-4 text-center shadow-card sm:px-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "font-display text-3xl tabular-nums text-ocean sm:text-5xl",
				children: String(parts[unit.key]).padStart(2, "0")
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-1 text-[0.65rem] tracking-[0.18em] text-muted uppercase sm:text-xs",
				children: unit.label
			})]
		}, unit.key))
	});
}
function Hero({ guestName }) {
	const first = guestName.split(" ")[0] ?? guestName;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "top",
		className: "relative min-h-dvh overflow-hidden bg-ocean-deep",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: "/images/chapel-hero.jpg",
				alt: "The Shore Chapel above Kata Noi, looking out over the Andaman Sea",
				className: "absolute inset-0 size-full object-cover outline-none"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-[linear-gradient(180deg,rgba(18,54,64,0.22)_0%,rgba(18,54,64,0.18)_38%,rgba(18,54,64,0.55)_72%,rgba(18,54,64,0.2)_100%)]" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BeachOcean, {
				variant: "hero",
				className: "h-[48%]"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(OceanWaves, {
				tone: "ivory",
				className: "h-36"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative z-10 mx-auto flex min-h-dvh max-w-4xl flex-col items-center justify-center px-5 pb-32 pt-28 text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-xs tracking-[0.34em] text-sand uppercase",
						children: ["Welcome, ", first]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
						className: "mt-5 font-display text-6xl leading-[0.9] text-ivory italic sm:text-8xl",
						children: [
							WEDDING.bride,
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "mx-3 font-sans text-2xl font-normal not-italic tracking-[0.2em] text-sand sm:text-3xl",
								children: "&"
							}),
							WEDDING.groom
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-6 max-w-lg font-display text-2xl text-ivory/90 sm:text-3xl",
						children: [guestName, ", we would be honoured by your company"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-4 text-sm tracking-[0.22em] text-sand uppercase",
						children: [
							WEDDING.dayLabel,
							" · ",
							WEDDING.dateLabel
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-2 text-sm text-ivory/80",
						children: ["Five o’clock in the afternoon · ", WEDDING.venue]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "#rsvp",
						className: "mt-8 inline-flex min-h-11 items-center rounded-pill bg-ivory px-5 text-sm text-ocean",
						children: "RSVP now"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-10 w-full max-w-lg",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Countdown, {})
					})
				]
			})
		]
	});
}
function Textarea({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
		className: cn("min-h-28 w-full rounded-md bg-paper px-4 py-3 text-base text-ink shadow-[0_0_0_1px_color-mix(in_oklab,var(--color-ocean)_16%,transparent)] outline-none transition-[box-shadow] duration-150 placeholder:text-muted focus-visible:shadow-[0_0_0_2px_var(--color-ocean)]", className),
		...props
	});
}
function Rsvp({ session, onUpdate, initialAttending }) {
	const existing = session.rsvp;
	const [attending, setAttending] = (0, import_react.useState)(existing ? existing.attending : initialAttending ?? null);
	const [partySize, setPartySize] = (0, import_react.useState)(existing?.partySize || 1);
	const [meal, setMeal] = (0, import_react.useState)(existing?.meal ?? "coastal");
	const [dietary, setDietary] = (0, import_react.useState)(existing?.dietary ?? "");
	const [note, setNote] = (0, import_react.useState)(existing?.note ?? "");
	const [pending, setPending] = (0, import_react.useState)(false);
	const [error, setError] = (0, import_react.useState)(null);
	const [justSaved, setJustSaved] = (0, import_react.useState)(Boolean(existing));
	const closed = !session.rsvpOpen;
	const maxParty = session.guest.maxParty;
	const first = session.guest.name.split(" ")[0] ?? session.guest.name;
	(0, import_react.useEffect)(() => {
		if (existing) return;
		if (initialAttending === true || initialAttending === false) {
			setAttending(initialAttending);
			setJustSaved(false);
		}
	}, [existing, initialAttending]);
	async function onSubmit(event) {
		event.preventDefault();
		if (attending === null) {
			setError("Please tell us if you can come.");
			return;
		}
		setPending(true);
		setError(null);
		try {
			const result = await submitRsvp({ data: {
				attending,
				partySize,
				meal: attending ? meal : null,
				dietary: dietary.trim() || null,
				note: note.trim() || null
			} });
			if (!result.ok) {
				setError(result.error);
				return;
			}
			onUpdate(result.session);
			setJustSaved(true);
		} catch {
			setError("Your reply did not send. Please try once more.");
		} finally {
			setPending(false);
		}
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "rsvp",
		className: "relative overflow-hidden px-4 py-24",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: "/images/letter-mail.jpg",
				alt: "",
				className: "absolute inset-0 size-full object-cover outline-none"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-[linear-gradient(180deg,rgba(244,239,230,0.18)_0%,rgba(244,239,230,0.55)_40%,rgba(244,239,230,0.72)_100%)]" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "relative mx-auto max-w-xl",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "enter-letter relative rounded-xl bg-paper/95 px-5 py-10 shadow-card sm:px-10",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: "/images/wax-seal.jpg",
							alt: "",
							className: "absolute -top-10 left-1/2 size-20 -translate-x-1/2 rounded-full object-cover shadow-card"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-6 text-center text-xs tracking-[0.3em] text-sea uppercase",
							children: "Kindly reply"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-2 text-center font-display text-4xl text-ocean italic",
							children: "RSVP"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-3 text-center text-sm text-muted",
							children: [
								first,
								", please reply by ",
								WEDDING.rsvpByLabel,
								". The chapel holds ",
								WEDDING.capacity,
								" —",
								" ",
								session.remaining,
								" place",
								session.remaining === 1 ? "" : "s",
								" still open."
							]
						}),
						justSaved && session.rsvp ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-8 rounded-lg bg-ivory p-6 text-center shadow-card",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "mx-auto flex size-11 items-center justify-center rounded-full bg-sage/20 text-sage",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
										className: "size-5",
										strokeWidth: 1.75
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-4 font-display text-2xl text-ocean",
									children: session.rsvp.attending ? "We have your yes." : "We have your reply."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-sm leading-relaxed text-muted",
									children: session.rsvp.attending ? `Thank you, ${first}. ${session.rsvp.partySize === 1 ? "A place is held for you" : `${session.rsvp.partySize} places are held`} at The Shore.` : `Thank you for letting us know, ${first}. You will be missed on the day — and still very much in the room.`
								}),
								closed ? null : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									className: "mt-4 min-h-11 text-sm text-ocean underline-offset-4 hover:underline",
									onClick: () => setJustSaved(false),
									children: "Amend reply"
								})
							]
						}) : closed ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-8 text-center text-sm text-muted",
							children: [
								"Replies closed on ",
								WEDDING.rsvpByLabel,
								". Please contact Bontu or Abdisa if your plans have changed."
							]
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
							className: "mt-8 space-y-6",
							onSubmit,
							action: "#",
							method: "post",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Label, { children: [
									"Will you join us, ",
									first,
									"?"
								] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-3 grid grid-cols-2 gap-3",
									children: [{
										value: true,
										label: "Accept"
									}, {
										value: false,
										label: "Decline"
									}].map((option) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										onClick: () => setAttending(option.value),
										className: cn("min-h-12 rounded-md px-3 py-3 font-display text-lg transition-colors duration-150", attending === option.value ? "bg-ocean text-ivory" : "bg-ivory text-ocean shadow-[0_0_0_1px_color-mix(in_oklab,var(--color-ocean)_16%,transparent)]"),
										children: option.label
									}, String(option.value)))
								})] }),
								attending ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
									maxParty > 1 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
											htmlFor: "partySize",
											children: "Number in your party"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "mt-3 flex gap-2",
											children: Array.from({ length: maxParty }, (_, i) => i + 1).map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
												type: "button",
												onClick: () => setPartySize(n),
												className: cn("size-12 rounded-md font-display text-xl", partySize === n ? "bg-ocean text-ivory" : "bg-ivory text-ocean shadow-[0_0_0_1px_color-mix(in_oklab,var(--color-ocean)_16%,transparent)]"),
												children: n
											}, n))
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-2 text-xs text-muted",
											children: "A plus-one is held for you, within the chapel’s forty seats."
										})
									] }) : null,
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Menu" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "mt-3 grid gap-2",
										children: MEALS.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
											type: "button",
											onClick: () => setMeal(item.id),
											className: cn("rounded-md px-4 py-3 text-left transition-colors duration-150", meal === item.id ? "bg-ocean text-ivory" : "bg-ivory text-ink shadow-[0_0_0_1px_color-mix(in_oklab,var(--color-ocean)_16%,transparent)]"),
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "block font-medium",
												children: item.name
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: cn("mt-1 block text-sm", meal === item.id ? "text-ivory/75" : "text-muted"),
												children: item.blurb
											})]
										}, item.id))
									})] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "space-y-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
											htmlFor: "dietary",
											children: "Dietary notes"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
											id: "dietary",
											value: dietary,
											onChange: (event) => setDietary(event.target.value),
											placeholder: "Allergies, or anything we should tell the kitchen."
										})]
									})
								] }) : null,
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "space-y-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
										htmlFor: "note",
										children: "A note for Bontu & Abdisa"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
										id: "note",
										value: note,
										onChange: (event) => setNote(event.target.value),
										placeholder: "Optional — a line we will keep."
									})]
								}),
								error ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm text-wax",
									children: error
								}) : null,
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									type: "submit",
									className: "w-full",
									variant: "wax",
									size: "lg",
									disabled: pending,
									children: pending ? "Sealing…" : "Seal and send"
								})
							]
						})
					]
				})
			})
		]
	});
}
function Schedule() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "schedule",
		className: "bg-ivory px-5 py-24",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-3xl",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-center text-xs tracking-[0.3em] text-sea uppercase",
					children: "The order of the day"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-3 text-center font-display text-4xl text-ocean italic sm:text-5xl",
					children: "Schedule"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mx-auto mt-4 max-w-lg text-center text-muted",
					children: "Sunday at The Shore. Times are in Phuket — seven hours ahead of Melbourne."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
					className: "mt-14",
					children: SCHEDULE.map((item, index) => {
						const last = index === SCHEDULE.length - 1;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "grid grid-cols-[5.5rem_1fr] gap-5 sm:grid-cols-[7rem_1fr]",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "pt-1 text-right",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-display text-lg text-sage",
									children: item.time
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: last ? "relative border-l border-sand pl-6" : "relative border-l border-sand pb-10 pl-6",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute top-2 -left-[5px] size-2.5 rounded-full bg-sea" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "font-display text-2xl text-ocean",
										children: item.title
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-1 text-sm leading-relaxed text-muted",
										children: item.detail
									}),
									index === 1 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "mt-2 text-xs tracking-[0.14em] text-wax uppercase",
										children: [
											"Chapel · ",
											WEDDING.capacity,
											" seats"
										]
									}) : null
								]
							})]
						}, item.title);
					})
				})
			]
		})
	});
}
var LINKS = [
	{
		href: "#day",
		label: "The day"
	},
	{
		href: "#schedule",
		label: "Schedule"
	},
	{
		href: "#party",
		label: "Speakers"
	},
	{
		href: "#venue",
		label: "Venue"
	},
	{
		href: "#rsvp",
		label: "RSVP"
	}
];
function StickyNav({ guestName, onSignOut }) {
	const [open, setOpen] = (0, import_react.useState)(false);
	const [scrolled, setScrolled] = (0, import_react.useState)(false);
	const [active, setActive] = (0, import_react.useState)("#day");
	(0, import_react.useEffect)(() => {
		const onScroll = () => setScrolled(window.scrollY > 24);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	(0, import_react.useEffect)(() => {
		const nodes = LINKS.map((link) => link.href.slice(1)).map((id) => document.getElementById(id)).filter((node) => Boolean(node));
		if (nodes.length === 0) return;
		const observer = new IntersectionObserver((entries) => {
			const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
			if (visible?.target.id) setActive(`#${visible.target.id}`);
		}, {
			rootMargin: "-35% 0px -50% 0px",
			threshold: [
				.1,
				.25,
				.5
			]
		});
		nodes.forEach((node) => observer.observe(node));
		return () => observer.disconnect();
	}, []);
	async function leave() {
		await signOut();
		onSignOut();
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: cn("fixed inset-x-0 top-0 z-40 transition-[background-color,box-shadow] duration-200", scrolled ? "bg-paper/92 shadow-card" : "bg-transparent"),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:h-[4.5rem] sm:px-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: "#top",
					className: cn("font-display text-xl italic tracking-tight sm:text-2xl", scrolled ? "text-ocean" : "text-ivory"),
					children: WEDDING.names
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
					className: "hidden items-center gap-1 lg:flex",
					children: [
						LINKS.map((link) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: link.href,
							className: cn("rounded-pill px-3 py-2 text-sm tracking-wide transition-colors duration-150", scrolled ? active === link.href ? "bg-ocean text-ivory" : "text-ocean/80 hover:text-ocean" : active === link.href ? "bg-ivory/15 text-ivory" : "text-ivory/80 hover:text-ivory"),
							children: link.label
						}, link.href)),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: cn("hidden text-xs tracking-[0.12em] lg:block", scrolled ? "text-muted" : "text-ivory/75"),
							children: ["Hello, ", guestName.split(" ")[0]]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => void leave(),
							className: cn("ml-2 text-xs tracking-[0.14em] uppercase", scrolled ? "text-muted" : "text-ivory/70"),
							children: "Sign out"
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: cn("relative size-11 rounded-pill lg:hidden", scrolled ? "text-ocean" : "text-ivory"),
					"aria-label": open ? "Close menu" : "Open menu",
					onClick: () => setOpen((value) => !value),
					children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "mx-auto size-5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "mx-auto size-5" })
				})
			]
		}), open ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "border-t border-sand/60 bg-paper px-4 py-4 lg:hidden",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mb-3 text-xs tracking-[0.16em] text-muted uppercase",
				children: ["Hello, ", guestName.split(" ")[0]]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col gap-1",
				children: [LINKS.map((link) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: link.href,
					onClick: () => setOpen(false),
					className: cn("rounded-md px-3 py-3 text-base text-ocean", active === link.href ? "bg-ivory" : ""),
					children: link.label
				}, link.href)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => void leave(),
					className: "rounded-md px-3 py-3 text-left text-muted",
					children: "Sign out"
				})]
			})]
		}) : null]
	});
}
var OSM = `https://www.openstreetmap.org/export/embed.html?bbox=${WEDDING.mapLng - .012}%2C${WEDDING.mapLat - .01}%2C${WEDDING.mapLng + .012}%2C${WEDDING.mapLat + .01}&layer=mapnik&marker=${WEDDING.mapLat}%2C${WEDDING.mapLng}`;
function Venue() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "venue",
		className: "bg-paper px-5 py-24",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-6xl items-stretch gap-8 lg:grid-cols-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs tracking-[0.3em] text-sea uppercase",
					children: "Kata Noi"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-3 font-display text-4xl text-ocean italic sm:text-5xl",
					children: "The Shore Chapel"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-5 max-w-md text-base leading-relaxed text-muted",
					children: "Glass and white steel, set in a tropical cove above Kata Noi, looking over the emerald Andaman. The chapel holds forty — which is exactly the size of this day."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-8 overflow-hidden rounded-lg shadow-card",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: "/images/chapel-interior.jpg",
						alt: "Glass chapel looking out to tropical sea and palms",
						className: "aspect-[3/2] w-full object-cover"
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex items-start gap-3 text-sm text-ink",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, {
						className: "mt-0.5 size-4 text-sea",
						strokeWidth: 1.5
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-medium text-ocean",
							children: WEDDING.resort
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-muted",
							children: WEDDING.address
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-muted",
							children: "About fifty-five minutes from Phuket International. Stay on the Kata Noi side if you can — the path to the chapel is short and steep with a view worth the climb."
						})
					] })]
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col gap-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "overflow-hidden rounded-lg shadow-card",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: "/images/dinner-table.jpg",
							alt: "Coastal dinner table at dusk overlooking the Andaman Sea",
							className: "aspect-[3/2] w-full object-cover"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "relative min-h-72 overflow-hidden rounded-lg shadow-card",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("iframe", {
							title: "Map of The Shore Chapel, Katathani Phuket",
							src: OSM,
							className: "absolute inset-0 size-full border-0",
							loading: "lazy"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(WEDDING.mapQuery)}`,
						className: "text-sm text-ocean underline-offset-4 hover:underline",
						target: "_blank",
						rel: "noreferrer",
						children: "Open in Google Maps"
					})
				]
			})]
		})
	});
}
function WeddingParty() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "party",
		className: "relative overflow-hidden bg-ocean px-5 py-24 text-ivory",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: "/images/botanicals.jpg",
				alt: "",
				className: "pointer-events-none absolute inset-0 size-full object-cover opacity-20 outline-none mix-blend-luminosity"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-ocean/80" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative mx-auto max-w-6xl",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-center text-xs tracking-[0.3em] text-sand uppercase",
						children: "Who will speak"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-3 text-center font-display text-4xl italic sm:text-5xl",
						children: "Wedding party"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mx-auto mt-4 max-w-lg text-center text-ivory/75",
						children: "A handful of voices after dinner. No long programmes — just the people who carried us here."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3",
						children: PARTY.map((person) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
							className: "rounded-lg bg-ivory/8 p-6 shadow-[0_0_0_1px_color-mix(in_oklab,white_12%,transparent)]",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "flex size-14 items-center justify-center rounded-full bg-ivory/10 font-display text-xl text-sand italic",
									children: person.initials
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-5 font-display text-2xl",
									children: person.name
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-xs tracking-[0.18em] text-sand uppercase",
									children: person.role
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-3 text-sm leading-relaxed text-ivory/75",
									children: person.note
								})
							]
						}, person.name))
					})
				]
			})
		]
	});
}
function WelcomeOverlay({ name, onAccept, onDecline, onLater }) {
	const first = name.split(" ")[0] ?? name;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "fixed inset-0 z-50 flex items-center justify-center bg-ocean-deep/55 px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			role: "dialog",
			"aria-labelledby": "welcome-title",
			className: "enter-letter relative w-full max-w-md rounded-xl bg-paper px-6 py-10 text-center shadow-card sm:px-10",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: "/images/wax-seal.jpg",
					alt: "",
					className: "mx-auto size-16 rounded-full object-cover shadow-card"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-5 text-xs tracking-[0.28em] text-sea uppercase",
					children: "The Shore Chapel"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					id: "welcome-title",
					className: "mt-3 font-display text-4xl text-ocean italic",
					children: ["Welcome, ", first]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-3 text-sm leading-relaxed text-muted",
					children: [
						name,
						", you are on the invitation list. Kindly tell us if you can join ",
						WEDDING.names,
						" ",
						"on ",
						WEDDING.dateLabel,
						"."
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-8 grid gap-3 sm:grid-cols-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						type: "button",
						className: "w-full",
						onClick: onAccept,
						children: "Accept invitation"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						type: "button",
						variant: "secondary",
						className: "w-full",
						onClick: onDecline,
						children: "Decline invitation"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: "mt-5 min-h-11 text-sm text-muted underline-offset-4 hover:underline",
					onClick: onLater,
					children: "Read the invitation first"
				})
			]
		})
	});
}
function WeddingPage({ session, onSession, onSignOut }) {
	const [welcomeOpen, setWelcomeOpen] = (0, import_react.useState)(!session.rsvp);
	const [rsvpChoice, setRsvpChoice] = (0, import_react.useState)(session.rsvp ? session.rsvp.attending : null);
	function goToRsvp(choice) {
		setRsvpChoice(choice);
		setWelcomeOpen(false);
		window.requestAnimationFrame(() => {
			document.getElementById("rsvp")?.scrollIntoView({
				behavior: "smooth",
				block: "start"
			});
		});
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "bg-ivory text-ink",
		children: [
			welcomeOpen ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WelcomeOverlay, {
				name: session.guest.name,
				onAccept: () => goToRsvp(true),
				onDecline: () => goToRsvp(false),
				onLater: () => setWelcomeOpen(false)
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StickyNav, {
				guestName: session.guest.name,
				onSignOut
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, { guestName: session.guest.name }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Details, { remaining: session.remaining }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Schedule, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WeddingParty, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Venue, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Rsvp, {
				session,
				onUpdate: onSession,
				initialAttending: rsvpChoice
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {})
		]
	});
}
function Home() {
	const initial = Route.useLoaderData();
	const [session, setSession] = (0, import_react.useState)(initial.ok ? initial.session : null);
	if (!session) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoginGate, { onAuthed: setSession });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WeddingPage, {
		session,
		onSession: setSession,
		onSignOut: () => setSession(null)
	});
}
//#endregion
export { Home as component };
