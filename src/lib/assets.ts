const spriteKeys = {
	house: "icon-house",
	"house-solid": "icon-house-solid",
	minus: "icon-minus",
	plus: "icon-plus",
	group: "icon-group",
	"user-round-pen": "icon-user-round-pen",
	settings: "icon-settings",
	menu: "icon-menu",
	"trash-2": "icon-trash-2",
	"square-x": "icon-square-x",
	eye: "icon-eye",
	"eye-off": "icon-eye-off",
	mail: "icon-mail",
	"lock-keyhole": "icon-lock-keyhole",
	check: "icon-check",
	google: "icon-google",
	discord: "icon-discord"
} as const;

export function getSpriteHref(key: keyof typeof spriteKeys) {
	return `/__spritemap#${spriteKeys[key]}`;
}

export default spriteKeys;
