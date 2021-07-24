!function (c) {

	c = document.querySelector(c);

	var dm = r(c, 600), p = 0, clr = '#407ff3', i;

	var rn = (f, t) => Math.floor(Math.random() * ((t || f) - (t && f || 0) + 1) + (t && f || 0)),
		choice = r => r[rn(r.length - 1)],
		hxcl = (to = 6) => {

			var r = [],
				dj = '0123456789abcdef';

			for (let i = 0; i < to; i++)
				r.push(choice(dj));

			return '#' + r.join('');

		};

	var rnd = () => {
		var j = [];
	};

	function r(c, s) {

		var o = c.width;

		return [c.width = s, c.height = s / (o / c.height)];

	}

	function rct(c, cg) {

		var l = cg.left || 0,
			t = dm[1] - cg.height - (cg.bottom || 0);

		l = cg.center ? dm[0] / 2 - cg.width / 2 : l;

		c.fillStyle = cg.color;
		c.fillRect(l, t, cg.width, cg.height);

		c.fill();

	}

	function hdl(c) {

		if (p > dm[0] - 20) {
			clearInterval(i);
			return;
		}

		if ((p + 1) % 50 == 0)
			clr = hxcl();

		rct(c, {
			width: p++,
			height: 10,
			bottom: 10,
			color: clr,
			center: true
		});
	}

	i = setInterval(hdl, 1, c.getContext('2d'));

}('canvas');