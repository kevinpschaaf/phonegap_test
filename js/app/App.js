enyo.kind({
	name: "pgt.App",
	kind: enyo.Control,
	classes:"enyo-fit",
	components: [
		{ kind:"FittableRows", components: [
			{ kind:"FittableColumns", style:"height:50px;", components: [
				{ kind:"onyx.Button", content:"Top Left" },
				{ fit:true },
				{ kind:"onyx.Button", content:"Top Right" }
			]},
			{ fit:true, style:"text-align:center;", content:"Hello Enyo!" },
			{ kind:"FittableColumns", style:"height:50px;", components: [
				{ kind:"onyx.Button", content:"Bot Left" },
				{ fit:true },
				{ kind:"onyx.Button", content:"Bot Right" }
			]}
		]}
	]
});
