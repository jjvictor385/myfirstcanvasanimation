!function () {

	var c = document.querySelector('canvas'),
		ctx = c.getContext('2d'), dm = rz({
			nwidth: 1200,
			width: c.width,
			height: c.height
		}, (w, h) => (c.width = w, c.height = h));

	var im = ['img/bf.png', 'img/2000.webp'].map(src => {
		var n = new Image;
		n.src = src;

		return n;
	}), p = 0, i;

	function rz(c, f) {

		var r = [c.nwidth, c.nwidth / (c.width / c.height)];

		typeof f === "function" && f(...r);

		return r;

	}

	function w(i, cfg) {

		var spn = cfg.spn || 5;

		if (p > spn - 1)
			p = 0;

		var dmn = rz(cfg).map(x => Math.floor(x));

		ctx.clearRect(0, 0, ...dm);
		ctx.drawImage(im[1], 0, 0, im[1].width, im[1].height, 0, 0, ...dm);
		ctx.drawImage(i, p++ * cfg.width, 0, cfg.width, cfg.height, dm[0] / 2 - cfg.nwidth / 2, 250, ...dmn);
		
	}

	im[0].addEventListener('load', function () {

		i = setInterval(w, 70, this, {
			width: 418,
			height: 441,
			nwidth: 230,
			spn: 5
		});

	});

}();