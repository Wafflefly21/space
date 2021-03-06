! function() {
	"use strict";

	function t() {}
	const e = t => t;

	function n(t) {
		return t()
	}

	function i() {
		return Object.create(null)
	}

	function r(t) {
		t.forEach(n)
	}

	function s(t) {
		return "function" == typeof t
	}

	function o(t, e) {
		return t != t ? e == e : t !== e || t && "object" == typeof t || "function" == typeof t
	}

	function a(e, n, i) {
		e.$$.on_destroy.push(function(e, ...n) {
			if (null == e) return t;
			const i = e.subscribe(...n);
			return i.unsubscribe ? () => i.unsubscribe() : i
		}(n, i))
	}

	function c(t, e, n, i) {
		return t[1] && i ? function(t, e) {
			for (const n in e) t[n] = e[n];
			return t
		}(n.ctx.slice(), t[1](i(e))) : n.ctx
	}

	function l(t, e, n, i, r, s, o) {
		const a = function(t, e, n, i) {
			if (t[2] && i) {
				const r = t[2](i(n));
				if (void 0 === e.dirty) return r;
				if ("object" == typeof r) {
					const t = [],
						n = Math.max(e.dirty.length, r.length);
					for (let i = 0; i < n; i += 1) t[i] = e.dirty[i] | r[i];
					return t
				}
				return e.dirty | r
			}
			return e.dirty
		}(e, i, r, s);
		if (a) {
			const r = c(e, n, i, o);
			t.p(r, a)
		}
	}

	function h(t, e, n = e) {
		return t.set(n), e
	}
	const u = "undefined" != typeof window;
	let d = u ? () => window.performance.now() : () => Date.now(),
		p = u ? t => requestAnimationFrame(t) : t;
	const f = new Set;

	function m(t) {
		f.forEach((e => {
			e.c(t) || (f.delete(e), e.f())
		})), 0 !== f.size && p(m)
	}

	function g(t) {
		let e;
		return 0 === f.size && p(m), {
			promise: new Promise((n => {
				f.add(e = {
					c: t,
					f: n
				})
			})),
			abort() {
				f.delete(e)
			}
		}
	}

	function v(t, e) {
		t.appendChild(e)
	}

	function y(t, e, n) {
		t.insertBefore(e, n || null)
	}

	function x(t) {
		t.parentNode.removeChild(t)
	}

	function b(t, e) {
		for (let n = 0; n < t.length; n += 1) t[n] && t[n].d(e)
	}

	function _(t) {
		return document.createElement(t)
	}

	function w(t) {
		return document.createTextNode(t)
	}

	function M() {
		return w(" ")
	}

	function S() {
		return w("")
	}

	function T(t, e, n, i) {
		return t.addEventListener(e, n, i), () => t.removeEventListener(e, n, i)
	}

	function E(t, e, n) {
		null == n ? t.removeAttribute(e) : t.getAttribute(e) !== n && t.setAttribute(e, n)
	}

	function A(t, e) {
		e = "" + e, t.wholeText !== e && (t.data = e)
	}

	function L(t, e) {
		t.value = null == e ? "" : e
	}

	function C(t, e, n, i) {
		t.style.setProperty(e, n, i ? "important" : "")
	}

	function R(t, e) {
		for (let n = 0; n < t.options.length; n += 1) {
			const i = t.options[n];
			if (i.__value === e) return void(i.selected = !0)
		}
	}

	function P(t) {
		const e = t.querySelector(":checked") || t.options[0];
		return e && e.__value
	}

	function D(t, e, n) {
		t.classList[n ? "add" : "remove"](e)
	}
	const O = new Set;
	let I, N = 0;

	function z(t, e, n, i, r, s, o, a = 0) {
		const c = 16.666 / i;
		let l = "{\n";
		for (let t = 0; t <= 1; t += c) {
			const i = e + (n - e) * s(t);
			l += 100 * t + `%{${o(i,1-i)}}\n`
		}
		const h = l + `100% {${o(n,1-n)}}\n}`,
			u = `__svelte_${function(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}(h)}_${a}`,
			d = t.ownerDocument;
		O.add(d);
		const p = d.__svelte_stylesheet || (d.__svelte_stylesheet = d.head.appendChild(_("style")).sheet),
			f = d.__svelte_rules || (d.__svelte_rules = {});
		f[u] || (f[u] = !0, p.insertRule(`@keyframes ${u} ${h}`, p.cssRules.length));
		const m = t.style.animation || "";
		return t.style.animation = `${m?`${m}, `:""}${u} ${i}ms linear ${r}ms 1 both`, N += 1, u
	}

	function B(t, e) {
		const n = (t.style.animation || "").split(", "),
			i = n.filter(e ? t => t.indexOf(e) < 0 : t => -1 === t.indexOf("__svelte")),
			r = n.length - i.length;
		r && (t.style.animation = i.join(", "), N -= r, N || p((() => {
			N || (O.forEach((t => {
				const e = t.__svelte_stylesheet;
				let n = e.cssRules.length;
				for (; n--;) e.deleteRule(n);
				t.__svelte_rules = {}
			})), O.clear())
		})))
	}

	function U(n, i, r, s) {
		if (!i) return t;
		const o = n.getBoundingClientRect();
		if (i.left === o.left && i.right === o.right && i.top === o.top && i.bottom === o.bottom) return t;
		const {
			delay: a = 0,
			duration: c = 300,
			easing: l = e,
			start: h = d() + a,
			end: u = h + c,
			tick: p = t,
			css: f
		} = r(n, {
			from: i,
			to: o
		}, s);
		let m, v = !0,
			y = !1;

		function x() {
			f && B(n, m), v = !1
		}
		return g((t => {
			if (!y && t >= h && (y = !0), y && t >= u && (p(1, 0), x()), !v) return !1;
			if (y) {
				const e = 0 + 1 * l((t - h) / c);
				p(e, 1 - e)
			}
			return !0
		})), f && (m = z(n, 0, 1, c, a, l, f)), a || (y = !0), p(0, 1), x
	}

	function F(t) {
		const e = getComputedStyle(t);
		if ("absolute" !== e.position && "fixed" !== e.position) {
			const {
				width: n,
				height: i
			} = e, r = t.getBoundingClientRect();
			t.style.position = "absolute", t.style.width = n, t.style.height = i, H(t, r)
		}
	}

	function H(t, e) {
		const n = t.getBoundingClientRect();
		if (e.left !== n.left || e.top !== n.top) {
			const i = getComputedStyle(t),
				r = "none" === i.transform ? "" : i.transform;
			t.style.transform = `${r} translate(${e.left-n.left}px, ${e.top-n.top}px)`
		}
	}

	function k(t) {
		I = t
	}

	function G() {
		if (!I) throw new Error("Function called outside component initialization");
		return I
	}

	function j(t) {
		G().$$.on_mount.push(t)
	}

	function V(t) {
		G().$$.on_destroy.push(t)
	}
	const W = [],
		$ = [],
		q = [],
		X = [],
		Y = Promise.resolve();
	let Z = !1;

	function J(t) {
		q.push(t)
	}

	function Q(t) {
		X.push(t)
	}
	let K = !1;
	const tt = new Set;

	function et() {
		if (!K) {
			K = !0;
			do {
				for (let t = 0; t < W.length; t += 1) {
					const e = W[t];
					k(e), nt(e.$$)
				}
				for (k(null), W.length = 0; $.length;) $.pop()();
				for (let t = 0; t < q.length; t += 1) {
					const e = q[t];
					tt.has(e) || (tt.add(e), e())
				}
				q.length = 0
			} while (W.length);
			for (; X.length;) X.pop()();
			Z = !1, K = !1, tt.clear()
		}
	}

	function nt(t) {
		if (null !== t.fragment) {
			t.update(), r(t.before_update);
			const e = t.dirty;
			t.dirty = [-1], t.fragment && t.fragment.p(t.ctx, e), t.after_update.forEach(J)
		}
	}
	let it;

	function rt() {
		return it || (it = Promise.resolve(), it.then((() => {
			it = null
		}))), it
	}

	function st(t, e, n) {
		t.dispatchEvent(function(t, e) {
			const n = document.createEvent("CustomEvent");
			return n.initCustomEvent(t, !1, !1, e), n
		}(`${e?"intro":"outro"}${n}`))
	}
	const ot = new Set;
	let at;

	function ct() {
		at = {
			r: 0,
			c: [],
			p: at
		}
	}

	function lt() {
		at.r || r(at.c), at = at.p
	}

	function ht(t, e) {
		t && t.i && (ot.delete(t), t.i(e))
	}

	function ut(t, e, n, i) {
		if (t && t.o) {
			if (ot.has(t)) return;
			ot.add(t), at.c.push((() => {
				ot.delete(t), i && (n && t.d(1), i())
			})), t.o(e)
		}
	}
	const dt = {
		duration: 0
	};

	function pt(n, i, o, a) {
		let c = i(n, o),
			l = a ? 0 : 1,
			h = null,
			u = null,
			p = null;

		function f() {
			p && B(n, p)
		}

		function m(t, e) {
			const n = t.b - l;
			return e *= Math.abs(n), {
				a: l,
				b: t.b,
				d: n,
				duration: e,
				start: t.start,
				end: t.start + e,
				group: t.group
			}
		}

		function v(i) {
			const {
				delay: s = 0,
				duration: o = 300,
				easing: a = e,
				tick: v = t,
				css: y
			} = c || dt, x = {
				start: d() + s,
				b: i
			};
			i || (x.group = at, at.r += 1), h || u ? u = x : (y && (f(), p = z(n, l, i, o, s, a, y)), i && v(0, 1), h = m(x, o), J((() => st(n, i, "start"))), g((t => {
				if (u && t > u.start && (h = m(u, o), u = null, st(n, h.b, "start"), y && (f(), p = z(n, l, h.b, h.duration, 0, a, c.css))), h)
					if (t >= h.end) v(l = h.b, 1 - l), st(n, h.b, "end"), u || (h.b ? f() : --h.group.r || r(h.group.c)), h = null;
					else if (t >= h.start) {
					const e = t - h.start;
					l = h.a + h.d * a(e / h.duration), v(l, 1 - l)
				}
				return !(!h && !u)
			})))
		}
		return {
			run(t) {
				s(c) ? rt().then((() => {
					c = c(), v(t)
				})) : v(t)
			},
			end() {
				f(), h = u = null
			}
		}
	}

	function ft(t, e) {
		t.d(1), e.delete(t.key)
	}

	function mt(t, e) {
		ut(t, 1, 1, (() => {
			e.delete(t.key)
		}))
	}

	function gt(t, e) {
		t.f(), ft(t, e)
	}

	function vt(t, e) {
		t.f(), mt(t, e)
	}

	function yt(t, e, n, i, r, s, o, a, c, l, h, u) {
		let d = t.length,
			p = s.length,
			f = d;
		const m = {};
		for (; f--;) m[t[f].key] = f;
		const g = [],
			v = new Map,
			y = new Map;
		for (f = p; f--;) {
			const t = u(r, s, f),
				a = n(t);
			let c = o.get(a);
			c ? i && c.p(t, e) : (c = l(a, t), c.c()), v.set(a, g[f] = c), a in m && y.set(a, Math.abs(f - m[a]))
		}
		const x = new Set,
			b = new Set;

		function _(t) {
			ht(t, 1), t.m(a, h), o.set(t.key, t), h = t.first, p--
		}
		for (; d && p;) {
			const e = g[p - 1],
				n = t[d - 1],
				i = e.key,
				r = n.key;
			e === n ? (h = e.first, d--, p--) : v.has(r) ? !o.has(i) || x.has(i) ? _(e) : b.has(r) ? d-- : y.get(i) > y.get(r) ? (b.add(i), _(e)) : (x.add(r), d--) : (c(n, o), d--)
		}
		for (; d--;) {
			const e = t[d];
			v.has(e.key) || c(e, o)
		}
		for (; p;) _(g[p - 1]);
		return g
	}

	function xt(t, e, n) {
		const i = t.$$.props[e];
		void 0 !== i && (t.$$.bound[i] = n, n(t.$$.ctx[i]))
	}

	function bt(t) {
		t && t.c()
	}

	function _t(t, e, i) {
		const {
			fragment: o,
			on_mount: a,
			on_destroy: c,
			after_update: l
		} = t.$$;
		o && o.m(e, i), J((() => {
			const e = a.map(n).filter(s);
			c ? c.push(...e) : r(e), t.$$.on_mount = []
		})), l.forEach(J)
	}

	function wt(t, e) {
		const n = t.$$;
		null !== n.fragment && (r(n.on_destroy), n.fragment && n.fragment.d(e), n.on_destroy = n.fragment = null, n.ctx = [])
	}

	function Mt(t, e) {
		-1 === t.$$.dirty[0] && (W.push(t), Z || (Z = !0, Y.then(et)), t.$$.dirty.fill(0)), t.$$.dirty[e / 31 | 0] |= 1 << e % 31
	}

	function St(e, n, s, o, a, c, l = [-1]) {
		const h = I;
		k(e);
		const u = n.props || {},
			d = e.$$ = {
				fragment: null,
				ctx: null,
				props: c,
				update: t,
				not_equal: a,
				bound: i(),
				on_mount: [],
				on_destroy: [],
				before_update: [],
				after_update: [],
				context: new Map(h ? h.$$.context : []),
				callbacks: i(),
				dirty: l,
				skip_bound: !1
			};
		let p = !1;
		if (d.ctx = s ? s(e, u, ((t, n, ...i) => {
				const r = i.length ? i[0] : n;
				return d.ctx && a(d.ctx[t], d.ctx[t] = r) && (!d.skip_bound && d.bound[t] && d.bound[t](r), p && Mt(e, t)), n
			})) : [], d.update(), p = !0, r(d.before_update), d.fragment = !!o && o(d.ctx), n.target) {
			if (n.hydrate) {
				const t = function(t) {
					return Array.from(t.childNodes)
				}(n.target);
				d.fragment && d.fragment.l(t), t.forEach(x)
			} else d.fragment && d.fragment.c();
			n.intro && ht(e.$$.fragment), _t(e, n.target, n.anchor), et()
		}
		k(h)
	}
	class Tt {
		$destroy() {
			wt(this, 1), this.$destroy = t
		}
		$on(t, e) {
			const n = this.$$.callbacks[t] || (this.$$.callbacks[t] = []);
			return n.push(e), () => {
				const t = n.indexOf(e); - 1 !== t && n.splice(t, 1)
			}
		}
		$set(t) {
			var e;
			this.$$set && (e = t, 0 !== Object.keys(e).length) && (this.$$.skip_bound = !0, this.$$set(t), this.$$.skip_bound = !1)
		}
	}
	const Et = 0,
		At = 1,
		Lt = 2,
		Ct = 0,
		Rt = 1,
		Pt = 2,
		Dt = 3,
		Ot = 100,
		It = 1e3,
		Nt = 1001,
		zt = 1002,
		Bt = 1003,
		Ut = 1006,
		Ft = 1008,
		Ht = 1009,
		kt = 1012,
		Gt = 1014,
		jt = 1015,
		Vt = 1016,
		Wt = 1020,
		$t = 1022,
		qt = 1023,
		Xt = 1026,
		Yt = 1027,
		Zt = 2300,
		Jt = 2301,
		Qt = 2302,
		Kt = 2400,
		te = 2401,
		ee = 2402,
		ne = 2500,
		ie = 3e3,
		re = 7680,
		se = 35044,
		oe = 35048,
		ae = "300 es";

	function ce() {}
	Object.assign(ce.prototype, {
		addEventListener: function(t, e) {
			void 0 === this._listeners && (this._listeners = {});
			const n = this._listeners;
			void 0 === n[t] && (n[t] = []), -1 === n[t].indexOf(e) && n[t].push(e)
		},
		hasEventListener: function(t, e) {
			if (void 0 === this._listeners) return !1;
			const n = this._listeners;
			return void 0 !== n[t] && -1 !== n[t].indexOf(e)
		},
		removeEventListener: function(t, e) {
			if (void 0 === this._listeners) return;
			const n = this._listeners[t];
			if (void 0 !== n) {
				const t = n.indexOf(e); - 1 !== t && n.splice(t, 1)
			}
		},
		dispatchEvent: function(t) {
			if (void 0 === this._listeners) return;
			const e = this._listeners[t.type];
			if (void 0 !== e) {
				t.target = this;
				const n = e.slice(0);
				for (let e = 0, i = n.length; e < i; e++) n[e].call(this, t)
			}
		}
	});
	const le = [];
	for (let t = 0; t < 256; t++) le[t] = (t < 16 ? "0" : "") + t.toString(16);
	let he = 1234567;
	const ue = {
		DEG2RAD: Math.PI / 180,
		RAD2DEG: 180 / Math.PI,
		generateUUID: function() {
			const t = 4294967295 * Math.random() | 0,
				e = 4294967295 * Math.random() | 0,
				n = 4294967295 * Math.random() | 0,
				i = 4294967295 * Math.random() | 0;
			return (le[255 & t] + le[t >> 8 & 255] + le[t >> 16 & 255] + le[t >> 24 & 255] + "-" + le[255 & e] + le[e >> 8 & 255] + "-" + le[e >> 16 & 15 | 64] + le[e >> 24 & 255] + "-" + le[63 & n | 128] + le[n >> 8 & 255] + "-" + le[n >> 16 & 255] + le[n >> 24 & 255] + le[255 & i] + le[i >> 8 & 255] + le[i >> 16 & 255] + le[i >> 24 & 255]).toUpperCase()
		},
		clamp: function(t, e, n) {
			return Math.max(e, Math.min(n, t))
		},
		euclideanModulo: function(t, e) {
			return (t % e + e) % e
		},
		mapLinear: function(t, e, n, i, r) {
			return i + (t - e) * (r - i) / (n - e)
		},
		lerp: function(t, e, n) {
			return (1 - n) * t + n * e
		},
		damp: function(t, e, n, i) {
			return ue.lerp(t, e, 1 - Math.exp(-n * i))
		},
		pingpong: function(t, e = 1) {
			return e - Math.abs(ue.euclideanModulo(t, 2 * e) - e)
		},
		smoothstep: function(t, e, n) {
			return t <= e ? 0 : t >= n ? 1 : (t = (t - e) / (n - e)) * t * (3 - 2 * t)
		},
		smootherstep: function(t, e, n) {
			return t <= e ? 0 : t >= n ? 1 : (t = (t - e) / (n - e)) * t * t * (t * (6 * t - 15) + 10)
		},
		randInt: function(t, e) {
			return t + Math.floor(Math.random() * (e - t + 1))
		},
		randFloat: function(t, e) {
			return t + Math.random() * (e - t)
		},
		randFloatSpread: function(t) {
			return t * (.5 - Math.random())
		},
		seededRandom: function(t) {
			return void 0 !== t && (he = t % 2147483647), he = 16807 * he % 2147483647, (he - 1) / 2147483646
		},
		degToRad: function(t) {
			return t * ue.DEG2RAD
		},
		radToDeg: function(t) {
			return t * ue.RAD2DEG
		},
		isPowerOfTwo: function(t) {
			return 0 == (t & t - 1) && 0 !== t
		},
		ceilPowerOfTwo: function(t) {
			return Math.pow(2, Math.ceil(Math.log(t) / Math.LN2))
		},
		floorPowerOfTwo: function(t) {
			return Math.pow(2, Math.floor(Math.log(t) / Math.LN2))
		},
		setQuaternionFromProperEuler: function(t, e, n, i, r) {
			const s = Math.cos,
				o = Math.sin,
				a = s(n / 2),
				c = o(n / 2),
				l = s((e + i) / 2),
				h = o((e + i) / 2),
				u = s((e - i) / 2),
				d = o((e - i) / 2),
				p = s((i - e) / 2),
				f = o((i - e) / 2);
			switch (r) {
				case "XYX":
					t.set(a * h, c * u, c * d, a * l);
					break;
				case "YZY":
					t.set(c * d, a * h, c * u, a * l);
					break;
				case "ZXZ":
					t.set(c * u, c * d, a * h, a * l);
					break;
				case "XZX":
					t.set(a * h, c * f, c * p, a * l);
					break;
				case "YXY":
					t.set(c * p, a * h, c * f, a * l);
					break;
				case "ZYZ":
					t.set(c * f, c * p, a * h, a * l);
					break;
				default:
					console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: " + r)
			}
		}
	};
	class de {
		constructor(t = 0, e = 0) {
			Object.defineProperty(this, "isVector2", {
				value: !0
			}), this.x = t, this.y = e
		}
		get width() {
			return this.x
		}
		set width(t) {
			this.x = t
		}
		get height() {
			return this.y
		}
		set height(t) {
			this.y = t
		}
		set(t, e) {
			return this.x = t, this.y = e, this
		}
		setScalar(t) {
			return this.x = t, this.y = t, this
		}
		setX(t) {
			return this.x = t, this
		}
		setY(t) {
			return this.y = t, this
		}
		setComponent(t, e) {
			switch (t) {
				case 0:
					this.x = e;
					break;
				case 1:
					this.y = e;
					break;
				default:
					throw new Error("index is out of range: " + t)
			}
			return this
		}
		getComponent(t) {
			switch (t) {
				case 0:
					return this.x;
				case 1:
					return this.y;
				default:
					throw new Error("index is out of range: " + t)
			}
		}
		clone() {
			return new this.constructor(this.x, this.y)
		}
		copy(t) {
			return this.x = t.x, this.y = t.y, this
		}
		add(t, e) {
			return void 0 !== e ? (console.warn("THREE.Vector2: .add() now only accepts one argument. Use .addVectors( a, b ) instead."), this.addVectors(t, e)) : (this.x += t.x, this.y += t.y, this)
		}
		addScalar(t) {
			return this.x += t, this.y += t, this
		}
		addVectors(t, e) {
			return this.x = t.x + e.x, this.y = t.y + e.y, this
		}
		addScaledVector(t, e) {
			return this.x += t.x * e, this.y += t.y * e, this
		}
		sub(t, e) {
			return void 0 !== e ? (console.warn("THREE.Vector2: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."), this.subVectors(t, e)) : (this.x -= t.x, this.y -= t.y, this)
		}
		subScalar(t) {
			return this.x -= t, this.y -= t, this
		}
		subVectors(t, e) {
			return this.x = t.x - e.x, this.y = t.y - e.y, this
		}
		multiply(t) {
			return this.x *= t.x, this.y *= t.y, this
		}
		multiplyScalar(t) {
			return this.x *= t, this.y *= t, this
		}
		divide(t) {
			return this.x /= t.x, this.y /= t.y, this
		}
		divideScalar(t) {
			return this.multiplyScalar(1 / t)
		}
		applyMatrix3(t) {
			const e = this.x,
				n = this.y,
				i = t.elements;
			return this.x = i[0] * e + i[3] * n + i[6], this.y = i[1] * e + i[4] * n + i[7], this
		}
		min(t) {
			return this.x = Math.min(this.x, t.x), this.y = Math.min(this.y, t.y), this
		}
		max(t) {
			return this.x = Math.max(this.x, t.x), this.y = Math.max(this.y, t.y), this
		}
		clamp(t, e) {
			return this.x = Math.max(t.x, Math.min(e.x, this.x)), this.y = Math.max(t.y, Math.min(e.y, this.y)), this
		}
		clampScalar(t, e) {
			return this.x = Math.max(t, Math.min(e, this.x)), this.y = Math.max(t, Math.min(e, this.y)), this
		}
		clampLength(t, e) {
			const n = this.length();
			return this.divideScalar(n || 1).multiplyScalar(Math.max(t, Math.min(e, n)))
		}
		floor() {
			return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this
		}
		ceil() {
			return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this
		}
		round() {
			return this.x = Math.round(this.x), this.y = Math.round(this.y), this
		}
		roundToZero() {
			return this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x), this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y), this
		}
		negate() {
			return this.x = -this.x, this.y = -this.y, this
		}
		dot(t) {
			return this.x * t.x + this.y * t.y
		}
		cross(t) {
			return this.x * t.y - this.y * t.x
		}
		lengthSq() {
			return this.x * this.x + this.y * this.y
		}
		length() {
			return Math.sqrt(this.x * this.x + this.y * this.y)
		}
		manhattanLength() {
			return Math.abs(this.x) + Math.abs(this.y)
		}
		normalize() {
			return this.divideScalar(this.length() || 1)
		}
		angle() {
			return Math.atan2(-this.y, -this.x) + Math.PI
		}
		distanceTo(t) {
			return Math.sqrt(this.distanceToSquared(t))
		}
		distanceToSquared(t) {
			const e = this.x - t.x,
				n = this.y - t.y;
			return e * e + n * n
		}
		manhattanDistanceTo(t) {
			return Math.abs(this.x - t.x) + Math.abs(this.y - t.y)
		}
		setLength(t) {
			return this.normalize().multiplyScalar(t)
		}
		lerp(t, e) {
			return this.x += (t.x - this.x) * e, this.y += (t.y - this.y) * e, this
		}
		lerpVectors(t, e, n) {
			return this.x = t.x + (e.x - t.x) * n, this.y = t.y + (e.y - t.y) * n, this
		}
		equals(t) {
			return t.x === this.x && t.y === this.y
		}
		fromArray(t, e = 0) {
			return this.x = t[e], this.y = t[e + 1], this
		}
		toArray(t = [], e = 0) {
			return t[e] = this.x, t[e + 1] = this.y, t
		}
		fromBufferAttribute(t, e, n) {
			return void 0 !== n && console.warn("THREE.Vector2: offset has been removed from .fromBufferAttribute()."), this.x = t.getX(e), this.y = t.getY(e), this
		}
		rotateAround(t, e) {
			const n = Math.cos(e),
				i = Math.sin(e),
				r = this.x - t.x,
				s = this.y - t.y;
			return this.x = r * n - s * i + t.x, this.y = r * i + s * n + t.y, this
		}
		random() {
			return this.x = Math.random(), this.y = Math.random(), this
		}
	}
	class pe {
		constructor() {
			Object.defineProperty(this, "isMatrix3", {
				value: !0
			}), this.elements = [1, 0, 0, 0, 1, 0, 0, 0, 1], arguments.length > 0 && console.error("THREE.Matrix3: the constructor no longer reads arguments. use .set() instead.")
		}
		set(t, e, n, i, r, s, o, a, c) {
			const l = this.elements;
			return l[0] = t, l[1] = i, l[2] = o, l[3] = e, l[4] = r, l[5] = a, l[6] = n, l[7] = s, l[8] = c, this
		}
		identity() {
			return this.set(1, 0, 0, 0, 1, 0, 0, 0, 1), this
		}
		clone() {
			return (new this.constructor).fromArray(this.elements)
		}
		copy(t) {
			const e = this.elements,
				n = t.elements;
			return e[0] = n[0], e[1] = n[1], e[2] = n[2], e[3] = n[3], e[4] = n[4], e[5] = n[5], e[6] = n[6], e[7] = n[7], e[8] = n[8], this
		}
		extractBasis(t, e, n) {
			return t.setFromMatrix3Column(this, 0), e.setFromMatrix3Column(this, 1), n.setFromMatrix3Column(this, 2), this
		}
		setFromMatrix4(t) {
			const e = t.elements;
			return this.set(e[0], e[4], e[8], e[1], e[5], e[9], e[2], e[6], e[10]), this
		}
		multiply(t) {
			return this.multiplyMatrices(this, t)
		}
		premultiply(t) {
			return this.multiplyMatrices(t, this)
		}
		multiplyMatrices(t, e) {
			const n = t.elements,
				i = e.elements,
				r = this.elements,
				s = n[0],
				o = n[3],
				a = n[6],
				c = n[1],
				l = n[4],
				h = n[7],
				u = n[2],
				d = n[5],
				p = n[8],
				f = i[0],
				m = i[3],
				g = i[6],
				v = i[1],
				y = i[4],
				x = i[7],
				b = i[2],
				_ = i[5],
				w = i[8];
			return r[0] = s * f + o * v + a * b, r[3] = s * m + o * y + a * _, r[6] = s * g + o * x + a * w, r[1] = c * f + l * v + h * b, r[4] = c * m + l * y + h * _, r[7] = c * g + l * x + h * w, r[2] = u * f + d * v + p * b, r[5] = u * m + d * y + p * _, r[8] = u * g + d * x + p * w, this
		}
		multiplyScalar(t) {
			const e = this.elements;
			return e[0] *= t, e[3] *= t, e[6] *= t, e[1] *= t, e[4] *= t, e[7] *= t, e[2] *= t, e[5] *= t, e[8] *= t, this
		}
		determinant() {
			const t = this.elements,
				e = t[0],
				n = t[1],
				i = t[2],
				r = t[3],
				s = t[4],
				o = t[5],
				a = t[6],
				c = t[7],
				l = t[8];
			return e * s * l - e * o * c - n * r * l + n * o * a + i * r * c - i * s * a
		}
		invert() {
			const t = this.elements,
				e = t[0],
				n = t[1],
				i = t[2],
				r = t[3],
				s = t[4],
				o = t[5],
				a = t[6],
				c = t[7],
				l = t[8],
				h = l * s - o * c,
				u = o * a - l * r,
				d = c * r - s * a,
				p = e * h + n * u + i * d;
			if (0 === p) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0);
			const f = 1 / p;
			return t[0] = h * f, t[1] = (i * c - l * n) * f, t[2] = (o * n - i * s) * f, t[3] = u * f, t[4] = (l * e - i * a) * f, t[5] = (i * r - o * e) * f, t[6] = d * f, t[7] = (n * a - c * e) * f, t[8] = (s * e - n * r) * f, this
		}
		transpose() {
			let t;
			const e = this.elements;
			return t = e[1], e[1] = e[3], e[3] = t, t = e[2], e[2] = e[6], e[6] = t, t = e[5], e[5] = e[7], e[7] = t, this
		}
		getNormalMatrix(t) {
			return this.setFromMatrix4(t).copy(this).invert().transpose()
		}
		transposeIntoArray(t) {
			const e = this.elements;
			return t[0] = e[0], t[1] = e[3], t[2] = e[6], t[3] = e[1], t[4] = e[4], t[5] = e[7], t[6] = e[2], t[7] = e[5], t[8] = e[8], this
		}
		setUvTransform(t, e, n, i, r, s, o) {
			const a = Math.cos(r),
				c = Math.sin(r);
			return this.set(n * a, n * c, -n * (a * s + c * o) + s + t, -i * c, i * a, -i * (-c * s + a * o) + o + e, 0, 0, 1), this
		}
		scale(t, e) {
			const n = this.elements;
			return n[0] *= t, n[3] *= t, n[6] *= t, n[1] *= e, n[4] *= e, n[7] *= e, this
		}
		rotate(t) {
			const e = Math.cos(t),
				n = Math.sin(t),
				i = this.elements,
				r = i[0],
				s = i[3],
				o = i[6],
				a = i[1],
				c = i[4],
				l = i[7];
			return i[0] = e * r + n * a, i[3] = e * s + n * c, i[6] = e * o + n * l, i[1] = -n * r + e * a, i[4] = -n * s + e * c, i[7] = -n * o + e * l, this
		}
		translate(t, e) {
			const n = this.elements;
			return n[0] += t * n[2], n[3] += t * n[5], n[6] += t * n[8], n[1] += e * n[2], n[4] += e * n[5], n[7] += e * n[8], this
		}
		equals(t) {
			const e = this.elements,
				n = t.elements;
			for (let t = 0; t < 9; t++)
				if (e[t] !== n[t]) return !1;
			return !0
		}
		fromArray(t, e = 0) {
			for (let n = 0; n < 9; n++) this.elements[n] = t[n + e];
			return this
		}
		toArray(t = [], e = 0) {
			const n = this.elements;
			return t[e] = n[0], t[e + 1] = n[1], t[e + 2] = n[2], t[e + 3] = n[3], t[e + 4] = n[4], t[e + 5] = n[5], t[e + 6] = n[6], t[e + 7] = n[7], t[e + 8] = n[8], t
		}
	}
	let fe;
	const me = {
		getDataURL: function(t) {
			if (/^data:/i.test(t.src)) return t.src;
			if ("undefined" == typeof HTMLCanvasElement) return t.src;
			let e;
			if (t instanceof HTMLCanvasElement) e = t;
			else {
				void 0 === fe && (fe = document.createElementNS("http://www.w3.org/1999/xhtml", "canvas")), fe.width = t.width, fe.height = t.height;
				const n = fe.getContext("2d");
				t instanceof ImageData ? n.putImageData(t, 0, 0) : n.drawImage(t, 0, 0, t.width, t.height), e = fe
			}
			return e.width > 2048 || e.height > 2048 ? e.toDataURL("image/jpeg", .6) : e.toDataURL("image/png")
		}
	};
	let ge = 0;

	function ve(t = ve.DEFAULT_IMAGE, e = ve.DEFAULT_MAPPING, n = 1001, i = 1001, r = 1006, s = 1008, o = 1023, a = 1009, c = 1, l = 3e3) {
		Object.defineProperty(this, "id", {
			value: ge++
		}), this.uuid = ue.generateUUID(), this.name = "", this.image = t, this.mipmaps = [], this.mapping = e, this.wrapS = n, this.wrapT = i, this.magFilter = r, this.minFilter = s, this.anisotropy = c, this.format = o, this.internalFormat = null, this.type = a, this.offset = new de(0, 0), this.repeat = new de(1, 1), this.center = new de(0, 0), this.rotation = 0, this.matrixAutoUpdate = !0, this.matrix = new pe, this.generateMipmaps = !0, this.premultiplyAlpha = !1, this.flipY = !0, this.unpackAlignment = 4, this.encoding = l, this.version = 0, this.onUpdate = null
	}

	function ye(t) {
		return "undefined" != typeof HTMLImageElement && t instanceof HTMLImageElement || "undefined" != typeof HTMLCanvasElement && t instanceof HTMLCanvasElement || "undefined" != typeof ImageBitmap && t instanceof ImageBitmap ? me.getDataURL(t) : t.data ? {
			data: Array.prototype.slice.call(t.data),
			width: t.width,
			height: t.height,
			type: t.data.constructor.name
		} : (console.warn("THREE.Texture: Unable to serialize Texture."), {})
	}
	ve.DEFAULT_IMAGE = void 0, ve.DEFAULT_MAPPING = 300, ve.prototype = Object.assign(Object.create(ce.prototype), {
		constructor: ve,
		isTexture: !0,
		updateMatrix: function() {
			this.matrix.setUvTransform(this.offset.x, this.offset.y, this.repeat.x, this.repeat.y, this.rotation, this.center.x, this.center.y)
		},
		clone: function() {
			return (new this.constructor).copy(this)
		},
		copy: function(t) {
			return this.name = t.name, this.image = t.image, this.mipmaps = t.mipmaps.slice(0), this.mapping = t.mapping, this.wrapS = t.wrapS, this.wrapT = t.wrapT, this.magFilter = t.magFilter, this.minFilter = t.minFilter, this.anisotropy = t.anisotropy, this.format = t.format, this.internalFormat = t.internalFormat, this.type = t.type, this.offset.copy(t.offset), this.repeat.copy(t.repeat), this.center.copy(t.center), this.rotation = t.rotation, this.matrixAutoUpdate = t.matrixAutoUpdate, this.matrix.copy(t.matrix), this.generateMipmaps = t.generateMipmaps, this.premultiplyAlpha = t.premultiplyAlpha, this.flipY = t.flipY, this.unpackAlignment = t.unpackAlignment, this.encoding = t.encoding, this
		},
		toJSON: function(t) {
			const e = void 0 === t || "string" == typeof t;
			if (!e && void 0 !== t.textures[this.uuid]) return t.textures[this.uuid];
			const n = {
				metadata: {
					version: 4.5,
					type: "Texture",
					generator: "Texture.toJSON"
				},
				uuid: this.uuid,
				name: this.name,
				mapping: this.mapping,
				repeat: [this.repeat.x, this.repeat.y],
				offset: [this.offset.x, this.offset.y],
				center: [this.center.x, this.center.y],
				rotation: this.rotation,
				wrap: [this.wrapS, this.wrapT],
				format: this.format,
				type: this.type,
				encoding: this.encoding,
				minFilter: this.minFilter,
				magFilter: this.magFilter,
				anisotropy: this.anisotropy,
				flipY: this.flipY,
				premultiplyAlpha: this.premultiplyAlpha,
				unpackAlignment: this.unpackAlignment
			};
			if (void 0 !== this.image) {
				const i = this.image;
				if (void 0 === i.uuid && (i.uuid = ue.generateUUID()), !e && void 0 === t.images[i.uuid]) {
					let e;
					if (Array.isArray(i)) {
						e = [];
						for (let t = 0, n = i.length; t < n; t++) i[t].isDataTexture ? e.push(ye(i[t].image)) : e.push(ye(i[t]))
					} else e = ye(i);
					t.images[i.uuid] = {
						uuid: i.uuid,
						url: e
					}
				}
				n.image = i.uuid
			}
			return e || (t.textures[this.uuid] = n), n
		},
		dispose: function() {
			this.dispatchEvent({
				type: "dispose"
			})
		},
		transformUv: function(t) {
			if (300 !== this.mapping) return t;
			if (t.applyMatrix3(this.matrix), t.x < 0 || t.x > 1) switch (this.wrapS) {
				case It:
					t.x = t.x - Math.floor(t.x);
					break;
				case Nt:
					t.x = t.x < 0 ? 0 : 1;
					break;
				case zt:
					1 === Math.abs(Math.floor(t.x) % 2) ? t.x = Math.ceil(t.x) - t.x : t.x = t.x - Math.floor(t.x)
			}
			if (t.y < 0 || t.y > 1) switch (this.wrapT) {
				case It:
					t.y = t.y - Math.floor(t.y);
					break;
				case Nt:
					t.y = t.y < 0 ? 0 : 1;
					break;
				case zt:
					1 === Math.abs(Math.floor(t.y) % 2) ? t.y = Math.ceil(t.y) - t.y : t.y = t.y - Math.floor(t.y)
			}
			return this.flipY && (t.y = 1 - t.y), t
		}
	}), Object.defineProperty(ve.prototype, "needsUpdate", {
		set: function(t) {
			!0 === t && this.version++
		}
	});
	class xe {
		constructor(t = 0, e = 0, n = 0, i = 1) {
			Object.defineProperty(this, "isVector4", {
				value: !0
			}), this.x = t, this.y = e, this.z = n, this.w = i
		}
		get width() {
			return this.z
		}
		set width(t) {
			this.z = t
		}
		get height() {
			return this.w
		}
		set height(t) {
			this.w = t
		}
		set(t, e, n, i) {
			return this.x = t, this.y = e, this.z = n, this.w = i, this
		}
		setScalar(t) {
			return this.x = t, this.y = t, this.z = t, this.w = t, this
		}
		setX(t) {
			return this.x = t, this
		}
		setY(t) {
			return this.y = t, this
		}
		setZ(t) {
			return this.z = t, this
		}
		setW(t) {
			return this.w = t, this
		}
		setComponent(t, e) {
			switch (t) {
				case 0:
					this.x = e;
					break;
				case 1:
					this.y = e;
					break;
				case 2:
					this.z = e;
					break;
				case 3:
					this.w = e;
					break;
				default:
					throw new Error("index is out of range: " + t)
			}
			return this
		}
		getComponent(t) {
			switch (t) {
				case 0:
					return this.x;
				case 1:
					return this.y;
				case 2:
					return this.z;
				case 3:
					return this.w;
				default:
					throw new Error("index is out of range: " + t)
			}
		}
		clone() {
			return new this.constructor(this.x, this.y, this.z, this.w)
		}
		copy(t) {
			return this.x = t.x, this.y = t.y, this.z = t.z, this.w = void 0 !== t.w ? t.w : 1, this
		}
		add(t, e) {
			return void 0 !== e ? (console.warn("THREE.Vector4: .add() now only accepts one argument. Use .addVectors( a, b ) instead."), this.addVectors(t, e)) : (this.x += t.x, this.y += t.y, this.z += t.z, this.w += t.w, this)
		}
		addScalar(t) {
			return this.x += t, this.y += t, this.z += t, this.w += t, this
		}
		addVectors(t, e) {
			return this.x = t.x + e.x, this.y = t.y + e.y, this.z = t.z + e.z, this.w = t.w + e.w, this
		}
		addScaledVector(t, e) {
			return this.x += t.x * e, this.y += t.y * e, this.z += t.z * e, this.w += t.w * e, this
		}
		sub(t, e) {
			return void 0 !== e ? (console.warn("THREE.Vector4: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."), this.subVectors(t, e)) : (this.x -= t.x, this.y -= t.y, this.z -= t.z, this.w -= t.w, this)
		}
		subScalar(t) {
			return this.x -= t, this.y -= t, this.z -= t, this.w -= t, this
		}
		subVectors(t, e) {
			return this.x = t.x - e.x, this.y = t.y - e.y, this.z = t.z - e.z, this.w = t.w - e.w, this
		}
		multiply(t) {
			return this.x *= t.x, this.y *= t.y, this.z *= t.z, this.w *= t.w, this
		}
		multiplyScalar(t) {
			return this.x *= t, this.y *= t, this.z *= t, this.w *= t, this
		}
		applyMatrix4(t) {
			const e = this.x,
				n = this.y,
				i = this.z,
				r = this.w,
				s = t.elements;
			return this.x = s[0] * e + s[4] * n + s[8] * i + s[12] * r, this.y = s[1] * e + s[5] * n + s[9] * i + s[13] * r, this.z = s[2] * e + s[6] * n + s[10] * i + s[14] * r, this.w = s[3] * e + s[7] * n + s[11] * i + s[15] * r, this
		}
		divideScalar(t) {
			return this.multiplyScalar(1 / t)
		}
		setAxisAngleFromQuaternion(t) {
			this.w = 2 * Math.acos(t.w);
			const e = Math.sqrt(1 - t.w * t.w);
			return e < 1e-4 ? (this.x = 1, this.y = 0, this.z = 0) : (this.x = t.x / e, this.y = t.y / e, this.z = t.z / e), this
		}
		setAxisAngleFromRotationMatrix(t) {
			let e, n, i, r;
			const s = .01,
				o = .1,
				a = t.elements,
				c = a[0],
				l = a[4],
				h = a[8],
				u = a[1],
				d = a[5],
				p = a[9],
				f = a[2],
				m = a[6],
				g = a[10];
			if (Math.abs(l - u) < s && Math.abs(h - f) < s && Math.abs(p - m) < s) {
				if (Math.abs(l + u) < o && Math.abs(h + f) < o && Math.abs(p + m) < o && Math.abs(c + d + g - 3) < o) return this.set(1, 0, 0, 0), this;
				e = Math.PI;
				const t = (c + 1) / 2,
					a = (d + 1) / 2,
					v = (g + 1) / 2,
					y = (l + u) / 4,
					x = (h + f) / 4,
					b = (p + m) / 4;
				return t > a && t > v ? t < s ? (n = 0, i = .707106781, r = .707106781) : (n = Math.sqrt(t), i = y / n, r = x / n) : a > v ? a < s ? (n = .707106781, i = 0, r = .707106781) : (i = Math.sqrt(a), n = y / i, r = b / i) : v < s ? (n = .707106781, i = .707106781, r = 0) : (r = Math.sqrt(v), n = x / r, i = b / r), this.set(n, i, r, e), this
			}
			let v = Math.sqrt((m - p) * (m - p) + (h - f) * (h - f) + (u - l) * (u - l));
			return Math.abs(v) < .001 && (v = 1), this.x = (m - p) / v, this.y = (h - f) / v, this.z = (u - l) / v, this.w = Math.acos((c + d + g - 1) / 2), this
		}
		min(t) {
			return this.x = Math.min(this.x, t.x), this.y = Math.min(this.y, t.y), this.z = Math.min(this.z, t.z), this.w = Math.min(this.w, t.w), this
		}
		max(t) {
			return this.x = Math.max(this.x, t.x), this.y = Math.max(this.y, t.y), this.z = Math.max(this.z, t.z), this.w = Math.max(this.w, t.w), this
		}
		clamp(t, e) {
			return this.x = Math.max(t.x, Math.min(e.x, this.x)), this.y = Math.max(t.y, Math.min(e.y, this.y)), this.z = Math.max(t.z, Math.min(e.z, this.z)), this.w = Math.max(t.w, Math.min(e.w, this.w)), this
		}
		clampScalar(t, e) {
			return this.x = Math.max(t, Math.min(e, this.x)), this.y = Math.max(t, Math.min(e, this.y)), this.z = Math.max(t, Math.min(e, this.z)), this.w = Math.max(t, Math.min(e, this.w)), this
		}
		clampLength(t, e) {
			const n = this.length();
			return this.divideScalar(n || 1).multiplyScalar(Math.max(t, Math.min(e, n)))
		}
		floor() {
			return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this.w = Math.floor(this.w), this
		}
		ceil() {
			return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this.w = Math.ceil(this.w), this
		}
		round() {
			return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this.w = Math.round(this.w), this
		}
		roundToZero() {
			return this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x), this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y), this.z = this.z < 0 ? Math.ceil(this.z) : Math.floor(this.z), this.w = this.w < 0 ? Math.ceil(this.w) : Math.floor(this.w), this
		}
		negate() {
			return this.x = -this.x, this.y = -this.y, this.z = -this.z, this.w = -this.w, this
		}
		dot(t) {
			return this.x * t.x + this.y * t.y + this.z * t.z + this.w * t.w
		}
		lengthSq() {
			return this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w
		}
		length() {
			return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w)
		}
		manhattanLength() {
			return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z) + Math.abs(this.w)
		}
		normalize() {
			return this.divideScalar(this.length() || 1)
		}
		setLength(t) {
			return this.normalize().multiplyScalar(t)
		}
		lerp(t, e) {
			return this.x += (t.x - this.x) * e, this.y += (t.y - this.y) * e, this.z += (t.z - this.z) * e, this.w += (t.w - this.w) * e, this
		}
		lerpVectors(t, e, n) {
			return this.x = t.x + (e.x - t.x) * n, this.y = t.y + (e.y - t.y) * n, this.z = t.z + (e.z - t.z) * n, this.w = t.w + (e.w - t.w) * n, this
		}
		equals(t) {
			return t.x === this.x && t.y === this.y && t.z === this.z && t.w === this.w
		}
		fromArray(t, e = 0) {
			return this.x = t[e], this.y = t[e + 1], this.z = t[e + 2], this.w = t[e + 3], this
		}
		toArray(t = [], e = 0) {
			return t[e] = this.x, t[e + 1] = this.y, t[e + 2] = this.z, t[e + 3] = this.w, t
		}
		fromBufferAttribute(t, e, n) {
			return void 0 !== n && console.warn("THREE.Vector4: offset has been removed from .fromBufferAttribute()."), this.x = t.getX(e), this.y = t.getY(e), this.z = t.getZ(e), this.w = t.getW(e), this
		}
		random() {
			return this.x = Math.random(), this.y = Math.random(), this.z = Math.random(), this.w = Math.random(), this
		}
	}
	class be extends ce {
		constructor(t, e, n) {
			super(), Object.defineProperty(this, "isWebGLRenderTarget", {
				value: !0
			}), this.width = t, this.height = e, this.scissor = new xe(0, 0, t, e), this.scissorTest = !1, this.viewport = new xe(0, 0, t, e), n = n || {}, this.texture = new ve(void 0, n.mapping, n.wrapS, n.wrapT, n.magFilter, n.minFilter, n.format, n.type, n.anisotropy, n.encoding), this.texture.image = {}, this.texture.image.width = t, this.texture.image.height = e, this.texture.generateMipmaps = void 0 !== n.generateMipmaps && n.generateMipmaps, this.texture.minFilter = void 0 !== n.minFilter ? n.minFilter : Ut, this.depthBuffer = void 0 === n.depthBuffer || n.depthBuffer, this.stencilBuffer = void 0 !== n.stencilBuffer && n.stencilBuffer, this.depthTexture = void 0 !== n.depthTexture ? n.depthTexture : null
		}
		setSize(t, e) {
			this.width === t && this.height === e || (this.width = t, this.height = e, this.texture.image.width = t, this.texture.image.height = e, this.dispose()), this.viewport.set(0, 0, t, e), this.scissor.set(0, 0, t, e)
		}
		clone() {
			return (new this.constructor).copy(this)
		}
		copy(t) {
			return this.width = t.width, this.height = t.height, this.viewport.copy(t.viewport), this.texture = t.texture.clone(), this.depthBuffer = t.depthBuffer, this.stencilBuffer = t.stencilBuffer, this.depthTexture = t.depthTexture, this
		}
		dispose() {
			this.dispatchEvent({
				type: "dispose"
			})
		}
	}
	class _e {
		constructor(t = 0, e = 0, n = 0, i = 1) {
			Object.defineProperty(this, "isQuaternion", {
				value: !0
			}), this._x = t, this._y = e, this._z = n, this._w = i
		}
		static slerp(t, e, n, i) {
			return n.copy(t).slerp(e, i)
		}
		static slerpFlat(t, e, n, i, r, s, o) {
			let a = n[i + 0],
				c = n[i + 1],
				l = n[i + 2],
				h = n[i + 3];
			const u = r[s + 0],
				d = r[s + 1],
				p = r[s + 2],
				f = r[s + 3];
			if (h !== f || a !== u || c !== d || l !== p) {
				let t = 1 - o;
				const e = a * u + c * d + l * p + h * f,
					n = e >= 0 ? 1 : -1,
					i = 1 - e * e;
				if (i > Number.EPSILON) {
					const r = Math.sqrt(i),
						s = Math.atan2(r, e * n);
					t = Math.sin(t * s) / r, o = Math.sin(o * s) / r
				}
				const r = o * n;
				if (a = a * t + u * r, c = c * t + d * r, l = l * t + p * r, h = h * t + f * r, t === 1 - o) {
					const t = 1 / Math.sqrt(a * a + c * c + l * l + h * h);
					a *= t, c *= t, l *= t, h *= t
				}
			}
			t[e] = a, t[e + 1] = c, t[e + 2] = l, t[e + 3] = h
		}
		static multiplyQuaternionsFlat(t, e, n, i, r, s) {
			const o = n[i],
				a = n[i + 1],
				c = n[i + 2],
				l = n[i + 3],
				h = r[s],
				u = r[s + 1],
				d = r[s + 2],
				p = r[s + 3];
			return t[e] = o * p + l * h + a * d - c * u, t[e + 1] = a * p + l * u + c * h - o * d, t[e + 2] = c * p + l * d + o * u - a * h, t[e + 3] = l * p - o * h - a * u - c * d, t
		}
		get x() {
			return this._x
		}
		set x(t) {
			this._x = t, this._onChangeCallback()
		}
		get y() {
			return this._y
		}
		set y(t) {
			this._y = t, this._onChangeCallback()
		}
		get z() {
			return this._z
		}
		set z(t) {
			this._z = t, this._onChangeCallback()
		}
		get w() {
			return this._w
		}
		set w(t) {
			this._w = t, this._onChangeCallback()
		}
		set(t, e, n, i) {
			return this._x = t, this._y = e, this._z = n, this._w = i, this._onChangeCallback(), this
		}
		clone() {
			return new this.constructor(this._x, this._y, this._z, this._w)
		}
		copy(t) {
			return this._x = t.x, this._y = t.y, this._z = t.z, this._w = t.w, this._onChangeCallback(), this
		}
		setFromEuler(t, e) {
			if (!t || !t.isEuler) throw new Error("THREE.Quaternion: .setFromEuler() now expects an Euler rotation rather than a Vector3 and order.");
			const n = t._x,
				i = t._y,
				r = t._z,
				s = t._order,
				o = Math.cos,
				a = Math.sin,
				c = o(n / 2),
				l = o(i / 2),
				h = o(r / 2),
				u = a(n / 2),
				d = a(i / 2),
				p = a(r / 2);
			switch (s) {
				case "XYZ":
					this._x = u * l * h + c * d * p, this._y = c * d * h - u * l * p, this._z = c * l * p + u * d * h, this._w = c * l * h - u * d * p;
					break;
				case "YXZ":
					this._x = u * l * h + c * d * p, this._y = c * d * h - u * l * p, this._z = c * l * p - u * d * h, this._w = c * l * h + u * d * p;
					break;
				case "ZXY":
					this._x = u * l * h - c * d * p, this._y = c * d * h + u * l * p, this._z = c * l * p + u * d * h, this._w = c * l * h - u * d * p;
					break;
				case "ZYX":
					this._x = u * l * h - c * d * p, this._y = c * d * h + u * l * p, this._z = c * l * p - u * d * h, this._w = c * l * h + u * d * p;
					break;
				case "YZX":
					this._x = u * l * h + c * d * p, this._y = c * d * h + u * l * p, this._z = c * l * p - u * d * h, this._w = c * l * h - u * d * p;
					break;
				case "XZY":
					this._x = u * l * h - c * d * p, this._y = c * d * h - u * l * p, this._z = c * l * p + u * d * h, this._w = c * l * h + u * d * p;
					break;
				default:
					console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: " + s)
			}
			return !1 !== e && this._onChangeCallback(), this
		}
		setFromAxisAngle(t, e) {
			const n = e / 2,
				i = Math.sin(n);
			return this._x = t.x * i, this._y = t.y * i, this._z = t.z * i, this._w = Math.cos(n), this._onChangeCallback(), this
		}
		setFromRotationMatrix(t) {
			const e = t.elements,
				n = e[0],
				i = e[4],
				r = e[8],
				s = e[1],
				o = e[5],
				a = e[9],
				c = e[2],
				l = e[6],
				h = e[10],
				u = n + o + h;
			if (u > 0) {
				const t = .5 / Math.sqrt(u + 1);
				this._w = .25 / t, this._x = (l - a) * t, this._y = (r - c) * t, this._z = (s - i) * t
			} else if (n > o && n > h) {
				const t = 2 * Math.sqrt(1 + n - o - h);
				this._w = (l - a) / t, this._x = .25 * t, this._y = (i + s) / t, this._z = (r + c) / t
			} else if (o > h) {
				const t = 2 * Math.sqrt(1 + o - n - h);
				this._w = (r - c) / t, this._x = (i + s) / t, this._y = .25 * t, this._z = (a + l) / t
			} else {
				const t = 2 * Math.sqrt(1 + h - n - o);
				this._w = (s - i) / t, this._x = (r + c) / t, this._y = (a + l) / t, this._z = .25 * t
			}
			return this._onChangeCallback(), this
		}
		setFromUnitVectors(t, e) {
			let n = t.dot(e) + 1;
			return n < 1e-6 ? (n = 0, Math.abs(t.x) > Math.abs(t.z) ? (this._x = -t.y, this._y = t.x, this._z = 0, this._w = n) : (this._x = 0, this._y = -t.z, this._z = t.y, this._w = n)) : (this._x = t.y * e.z - t.z * e.y, this._y = t.z * e.x - t.x * e.z, this._z = t.x * e.y - t.y * e.x, this._w = n), this.normalize()
		}
		angleTo(t) {
			return 2 * Math.acos(Math.abs(ue.clamp(this.dot(t), -1, 1)))
		}
		rotateTowards(t, e) {
			const n = this.angleTo(t);
			if (0 === n) return this;
			const i = Math.min(1, e / n);
			return this.slerp(t, i), this
		}
		identity() {
			return this.set(0, 0, 0, 1)
		}
		invert() {
			return this.conjugate()
		}
		conjugate() {
			return this._x *= -1, this._y *= -1, this._z *= -1, this._onChangeCallback(), this
		}
		dot(t) {
			return this._x * t._x + this._y * t._y + this._z * t._z + this._w * t._w
		}
		lengthSq() {
			return this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w
		}
		length() {
			return Math.sqrt(this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w)
		}
		normalize() {
			let t = this.length();
			return 0 === t ? (this._x = 0, this._y = 0, this._z = 0, this._w = 1) : (t = 1 / t, this._x = this._x * t, this._y = this._y * t, this._z = this._z * t, this._w = this._w * t), this._onChangeCallback(), this
		}
		multiply(t, e) {
			return void 0 !== e ? (console.warn("THREE.Quaternion: .multiply() now only accepts one argument. Use .multiplyQuaternions( a, b ) instead."), this.multiplyQuaternions(t, e)) : this.multiplyQuaternions(this, t)
		}
		premultiply(t) {
			return this.multiplyQuaternions(t, this)
		}
		multiplyQuaternions(t, e) {
			const n = t._x,
				i = t._y,
				r = t._z,
				s = t._w,
				o = e._x,
				a = e._y,
				c = e._z,
				l = e._w;
			return this._x = n * l + s * o + i * c - r * a, this._y = i * l + s * a + r * o - n * c, this._z = r * l + s * c + n * a - i * o, this._w = s * l - n * o - i * a - r * c, this._onChangeCallback(), this
		}
		slerp(t, e) {
			if (0 === e) return this;
			if (1 === e) return this.copy(t);
			const n = this._x,
				i = this._y,
				r = this._z,
				s = this._w;
			let o = s * t._w + n * t._x + i * t._y + r * t._z;
			if (o < 0 ? (this._w = -t._w, this._x = -t._x, this._y = -t._y, this._z = -t._z, o = -o) : this.copy(t), o >= 1) return this._w = s, this._x = n, this._y = i, this._z = r, this;
			const a = 1 - o * o;
			if (a <= Number.EPSILON) {
				const t = 1 - e;
				return this._w = t * s + e * this._w, this._x = t * n + e * this._x, this._y = t * i + e * this._y, this._z = t * r + e * this._z, this.normalize(), this._onChangeCallback(), this
			}
			const c = Math.sqrt(a),
				l = Math.atan2(c, o),
				h = Math.sin((1 - e) * l) / c,
				u = Math.sin(e * l) / c;
			return this._w = s * h + this._w * u, this._x = n * h + this._x * u, this._y = i * h + this._y * u, this._z = r * h + this._z * u, this._onChangeCallback(), this
		}
		equals(t) {
			return t._x === this._x && t._y === this._y && t._z === this._z && t._w === this._w
		}
		fromArray(t, e = 0) {
			return this._x = t[e], this._y = t[e + 1], this._z = t[e + 2], this._w = t[e + 3], this._onChangeCallback(), this
		}
		toArray(t = [], e = 0) {
			return t[e] = this._x, t[e + 1] = this._y, t[e + 2] = this._z, t[e + 3] = this._w, t
		}
		fromBufferAttribute(t, e) {
			return this._x = t.getX(e), this._y = t.getY(e), this._z = t.getZ(e), this._w = t.getW(e), this
		}
		_onChange(t) {
			return this._onChangeCallback = t, this
		}
		_onChangeCallback() {}
	}
	class we {
		constructor(t = 0, e = 0, n = 0) {
			Object.defineProperty(this, "isVector3", {
				value: !0
			}), this.x = t, this.y = e, this.z = n
		}
		set(t, e, n) {
			return void 0 === n && (n = this.z), this.x = t, this.y = e, this.z = n, this
		}
		setScalar(t) {
			return this.x = t, this.y = t, this.z = t, this
		}
		setX(t) {
			return this.x = t, this
		}
		setY(t) {
			return this.y = t, this
		}
		setZ(t) {
			return this.z = t, this
		}
		setComponent(t, e) {
			switch (t) {
				case 0:
					this.x = e;
					break;
				case 1:
					this.y = e;
					break;
				case 2:
					this.z = e;
					break;
				default:
					throw new Error("index is out of range: " + t)
			}
			return this
		}
		getComponent(t) {
			switch (t) {
				case 0:
					return this.x;
				case 1:
					return this.y;
				case 2:
					return this.z;
				default:
					throw new Error("index is out of range: " + t)
			}
		}
		clone() {
			return new this.constructor(this.x, this.y, this.z)
		}
		copy(t) {
			return this.x = t.x, this.y = t.y, this.z = t.z, this
		}
		add(t, e) {
			return void 0 !== e ? (console.warn("THREE.Vector3: .add() now only accepts one argument. Use .addVectors( a, b ) instead."), this.addVectors(t, e)) : (this.x += t.x, this.y += t.y, this.z += t.z, this)
		}
		addScalar(t) {
			return this.x += t, this.y += t, this.z += t, this
		}
		addVectors(t, e) {
			return this.x = t.x + e.x, this.y = t.y + e.y, this.z = t.z + e.z, this
		}
		addScaledVector(t, e) {
			return this.x += t.x * e, this.y += t.y * e, this.z += t.z * e, this
		}
		sub(t, e) {
			return void 0 !== e ? (console.warn("THREE.Vector3: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."), this.subVectors(t, e)) : (this.x -= t.x, this.y -= t.y, this.z -= t.z, this)
		}
		subScalar(t) {
			return this.x -= t, this.y -= t, this.z -= t, this
		}
		subVectors(t, e) {
			return this.x = t.x - e.x, this.y = t.y - e.y, this.z = t.z - e.z, this
		}
		multiply(t, e) {
			return void 0 !== e ? (console.warn("THREE.Vector3: .multiply() now only accepts one argument. Use .multiplyVectors( a, b ) instead."), this.multiplyVectors(t, e)) : (this.x *= t.x, this.y *= t.y, this.z *= t.z, this)
		}
		multiplyScalar(t) {
			return this.x *= t, this.y *= t, this.z *= t, this
		}
		multiplyVectors(t, e) {
			return this.x = t.x * e.x, this.y = t.y * e.y, this.z = t.z * e.z, this
		}
		applyEuler(t) {
			return t && t.isEuler || console.error("THREE.Vector3: .applyEuler() now expects an Euler rotation rather than a Vector3 and order."), this.applyQuaternion(Se.setFromEuler(t))
		}
		applyAxisAngle(t, e) {
			return this.applyQuaternion(Se.setFromAxisAngle(t, e))
		}
		applyMatrix3(t) {
			const e = this.x,
				n = this.y,
				i = this.z,
				r = t.elements;
			return this.x = r[0] * e + r[3] * n + r[6] * i, this.y = r[1] * e + r[4] * n + r[7] * i, this.z = r[2] * e + r[5] * n + r[8] * i, this
		}
		applyNormalMatrix(t) {
			return this.applyMatrix3(t).normalize()
		}
		applyMatrix4(t) {
			const e = this.x,
				n = this.y,
				i = this.z,
				r = t.elements,
				s = 1 / (r[3] * e + r[7] * n + r[11] * i + r[15]);
			return this.x = (r[0] * e + r[4] * n + r[8] * i + r[12]) * s, this.y = (r[1] * e + r[5] * n + r[9] * i + r[13]) * s, this.z = (r[2] * e + r[6] * n + r[10] * i + r[14]) * s, this
		}
		applyQuaternion(t) {
			const e = this.x,
				n = this.y,
				i = this.z,
				r = t.x,
				s = t.y,
				o = t.z,
				a = t.w,
				c = a * e + s * i - o * n,
				l = a * n + o * e - r * i,
				h = a * i + r * n - s * e,
				u = -r * e - s * n - o * i;
			return this.x = c * a + u * -r + l * -o - h * -s, this.y = l * a + u * -s + h * -r - c * -o, this.z = h * a + u * -o + c * -s - l * -r, this
		}
		project(t) {
			return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)
		}
		unproject(t) {
			return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)
		}
		transformDirection(t) {
			const e = this.x,
				n = this.y,
				i = this.z,
				r = t.elements;
			return this.x = r[0] * e + r[4] * n + r[8] * i, this.y = r[1] * e + r[5] * n + r[9] * i, this.z = r[2] * e + r[6] * n + r[10] * i, this.normalize()
		}
		divide(t) {
			return this.x /= t.x, this.y /= t.y, this.z /= t.z, this
		}
		divideScalar(t) {
			return this.multiplyScalar(1 / t)
		}
		min(t) {
			return this.x = Math.min(this.x, t.x), this.y = Math.min(this.y, t.y), this.z = Math.min(this.z, t.z), this
		}
		max(t) {
			return this.x = Math.max(this.x, t.x), this.y = Math.max(this.y, t.y), this.z = Math.max(this.z, t.z), this
		}
		clamp(t, e) {
			return this.x = Math.max(t.x, Math.min(e.x, this.x)), this.y = Math.max(t.y, Math.min(e.y, this.y)), this.z = Math.max(t.z, Math.min(e.z, this.z)), this
		}
		clampScalar(t, e) {
			return this.x = Math.max(t, Math.min(e, this.x)), this.y = Math.max(t, Math.min(e, this.y)), this.z = Math.max(t, Math.min(e, this.z)), this
		}
		clampLength(t, e) {
			const n = this.length();
			return this.divideScalar(n || 1).multiplyScalar(Math.max(t, Math.min(e, n)))
		}
		floor() {
			return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this
		}
		ceil() {
			return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this
		}
		round() {
			return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this
		}
		roundToZero() {
			return this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x), this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y), this.z = this.z < 0 ? Math.ceil(this.z) : Math.floor(this.z), this
		}
		negate() {
			return this.x = -this.x, this.y = -this.y, this.z = -this.z, this
		}
		dot(t) {
			return this.x * t.x + this.y * t.y + this.z * t.z
		}
		lengthSq() {
			return this.x * this.x + this.y * this.y + this.z * this.z
		}
		length() {
			return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z)
		}
		manhattanLength() {
			return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z)
		}
		normalize() {
			return this.divideScalar(this.length() || 1)
		}
		setLength(t) {
			return this.normalize().multiplyScalar(t)
		}
		lerp(t, e) {
			return this.x += (t.x - this.x) * e, this.y += (t.y - this.y) * e, this.z += (t.z - this.z) * e, this
		}
		lerpVectors(t, e, n) {
			return this.x = t.x + (e.x - t.x) * n, this.y = t.y + (e.y - t.y) * n, this.z = t.z + (e.z - t.z) * n, this
		}
		cross(t, e) {
			return void 0 !== e ? (console.warn("THREE.Vector3: .cross() now only accepts one argument. Use .crossVectors( a, b ) instead."), this.crossVectors(t, e)) : this.crossVectors(this, t)
		}
		crossVectors(t, e) {
			const n = t.x,
				i = t.y,
				r = t.z,
				s = e.x,
				o = e.y,
				a = e.z;
			return this.x = i * a - r * o, this.y = r * s - n * a, this.z = n * o - i * s, this
		}
		projectOnVector(t) {
			const e = t.lengthSq();
			if (0 === e) return this.set(0, 0, 0);
			const n = t.dot(this) / e;
			return this.copy(t).multiplyScalar(n)
		}
		projectOnPlane(t) {
			return Me.copy(this).projectOnVector(t), this.sub(Me)
		}
		reflect(t) {
			return this.sub(Me.copy(t).multiplyScalar(2 * this.dot(t)))
		}
		angleTo(t) {
			const e = Math.sqrt(this.lengthSq() * t.lengthSq());
			if (0 === e) return Math.PI / 2;
			const n = this.dot(t) / e;
			return Math.acos(ue.clamp(n, -1, 1))
		}
		distanceTo(t) {
			return Math.sqrt(this.distanceToSquared(t))
		}
		distanceToSquared(t) {
			const e = this.x - t.x,
				n = this.y - t.y,
				i = this.z - t.z;
			return e * e + n * n + i * i
		}
		manhattanDistanceTo(t) {
			return Math.abs(this.x - t.x) + Math.abs(this.y - t.y) + Math.abs(this.z - t.z)
		}
		setFromSpherical(t) {
			return this.setFromSphericalCoords(t.radius, t.phi, t.theta)
		}
		setFromSphericalCoords(t, e, n) {
			const i = Math.sin(e) * t;
			return this.x = i * Math.sin(n), this.y = Math.cos(e) * t, this.z = i * Math.cos(n), this
		}
		setFromCylindrical(t) {
			return this.setFromCylindricalCoords(t.radius, t.theta, t.y)
		}
		setFromCylindricalCoords(t, e, n) {
			return this.x = t * Math.sin(e), this.y = n, this.z = t * Math.cos(e), this
		}
		setFromMatrixPosition(t) {
			const e = t.elements;
			return this.x = e[12], this.y = e[13], this.z = e[14], this
		}
		setFromMatrixScale(t) {
			const e = this.setFromMatrixColumn(t, 0).length(),
				n = this.setFromMatrixColumn(t, 1).length(),
				i = this.setFromMatrixColumn(t, 2).length();
			return this.x = e, this.y = n, this.z = i, this
		}
		setFromMatrixColumn(t, e) {
			return this.fromArray(t.elements, 4 * e)
		}
		setFromMatrix3Column(t, e) {
			return this.fromArray(t.elements, 3 * e)
		}
		equals(t) {
			return t.x === this.x && t.y === this.y && t.z === this.z
		}
		fromArray(t, e = 0) {
			return this.x = t[e], this.y = t[e + 1], this.z = t[e + 2], this
		}
		toArray(t = [], e = 0) {
			return t[e] = this.x, t[e + 1] = this.y, t[e + 2] = this.z, t
		}
		fromBufferAttribute(t, e, n) {
			return void 0 !== n && console.warn("THREE.Vector3: offset has been removed from .fromBufferAttribute()."), this.x = t.getX(e), this.y = t.getY(e), this.z = t.getZ(e), this
		}
		random() {
			return this.x = Math.random(), this.y = Math.random(), this.z = Math.random(), this
		}
	}
	const Me = new we,
		Se = new _e;
	class Te {
		constructor(t, e) {
			Object.defineProperty(this, "isBox3", {
				value: !0
			}), this.min = void 0 !== t ? t : new we(1 / 0, 1 / 0, 1 / 0), this.max = void 0 !== e ? e : new we(-1 / 0, -1 / 0, -1 / 0)
		}
		set(t, e) {
			return this.min.copy(t), this.max.copy(e), this
		}
		setFromArray(t) {
			let e = 1 / 0,
				n = 1 / 0,
				i = 1 / 0,
				r = -1 / 0,
				s = -1 / 0,
				o = -1 / 0;
			for (let a = 0, c = t.length; a < c; a += 3) {
				const c = t[a],
					l = t[a + 1],
					h = t[a + 2];
				c < e && (e = c), l < n && (n = l), h < i && (i = h), c > r && (r = c), l > s && (s = l), h > o && (o = h)
			}
			return this.min.set(e, n, i), this.max.set(r, s, o), this
		}
		setFromBufferAttribute(t) {
			let e = 1 / 0,
				n = 1 / 0,
				i = 1 / 0,
				r = -1 / 0,
				s = -1 / 0,
				o = -1 / 0;
			for (let a = 0, c = t.count; a < c; a++) {
				const c = t.getX(a),
					l = t.getY(a),
					h = t.getZ(a);
				c < e && (e = c), l < n && (n = l), h < i && (i = h), c > r && (r = c), l > s && (s = l), h > o && (o = h)
			}
			return this.min.set(e, n, i), this.max.set(r, s, o), this
		}
		setFromPoints(t) {
			this.makeEmpty();
			for (let e = 0, n = t.length; e < n; e++) this.expandByPoint(t[e]);
			return this
		}
		setFromCenterAndSize(t, e) {
			const n = Le.copy(e).multiplyScalar(.5);
			return this.min.copy(t).sub(n), this.max.copy(t).add(n), this
		}
		setFromObject(t) {
			return this.makeEmpty(), this.expandByObject(t)
		}
		clone() {
			return (new this.constructor).copy(this)
		}
		copy(t) {
			return this.min.copy(t.min), this.max.copy(t.max), this
		}
		makeEmpty() {
			return this.min.x = this.min.y = this.min.z = 1 / 0, this.max.x = this.max.y = this.max.z = -1 / 0, this
		}
		isEmpty() {
			return this.max.x < this.min.x || this.max.y < this.min.y || this.max.z < this.min.z
		}
		getCenter(t) {
			return void 0 === t && (console.warn("THREE.Box3: .getCenter() target is now required"), t = new we), this.isEmpty() ? t.set(0, 0, 0) : t.addVectors(this.min, this.max).multiplyScalar(.5)
		}
		getSize(t) {
			return void 0 === t && (console.warn("THREE.Box3: .getSize() target is now required"), t = new we), this.isEmpty() ? t.set(0, 0, 0) : t.subVectors(this.max, this.min)
		}
		expandByPoint(t) {
			return this.min.min(t), this.max.max(t), this
		}
		expandByVector(t) {
			return this.min.sub(t), this.max.add(t), this
		}
		expandByScalar(t) {
			return this.min.addScalar(-t), this.max.addScalar(t), this
		}
		expandByObject(t) {
			t.updateWorldMatrix(!1, !1);
			const e = t.geometry;
			void 0 !== e && (null === e.boundingBox && e.computeBoundingBox(), Ce.copy(e.boundingBox), Ce.applyMatrix4(t.matrixWorld), this.union(Ce));
			const n = t.children;
			for (let t = 0, e = n.length; t < e; t++) this.expandByObject(n[t]);
			return this
		}
		containsPoint(t) {
			return !(t.x < this.min.x || t.x > this.max.x || t.y < this.min.y || t.y > this.max.y || t.z < this.min.z || t.z > this.max.z)
		}
		containsBox(t) {
			return this.min.x <= t.min.x && t.max.x <= this.max.x && this.min.y <= t.min.y && t.max.y <= this.max.y && this.min.z <= t.min.z && t.max.z <= this.max.z
		}
		getParameter(t, e) {
			return void 0 === e && (console.warn("THREE.Box3: .getParameter() target is now required"), e = new we), e.set((t.x - this.min.x) / (this.max.x - this.min.x), (t.y - this.min.y) / (this.max.y - this.min.y), (t.z - this.min.z) / (this.max.z - this.min.z))
		}
		intersectsBox(t) {
			return !(t.max.x < this.min.x || t.min.x > this.max.x || t.max.y < this.min.y || t.min.y > this.max.y || t.max.z < this.min.z || t.min.z > this.max.z)
		}
		intersectsSphere(t) {
			return this.clampPoint(t.center, Le), Le.distanceToSquared(t.center) <= t.radius * t.radius
		}
		intersectsPlane(t) {
			let e, n;
			return t.normal.x > 0 ? (e = t.normal.x * this.min.x, n = t.normal.x * this.max.x) : (e = t.normal.x * this.max.x, n = t.normal.x * this.min.x), t.normal.y > 0 ? (e += t.normal.y * this.min.y, n += t.normal.y * this.max.y) : (e += t.normal.y * this.max.y, n += t.normal.y * this.min.y), t.normal.z > 0 ? (e += t.normal.z * this.min.z, n += t.normal.z * this.max.z) : (e += t.normal.z * this.max.z, n += t.normal.z * this.min.z), e <= -t.constant && n >= -t.constant
		}
		intersectsTriangle(t) {
			if (this.isEmpty()) return !1;
			this.getCenter(ze), Be.subVectors(this.max, ze), Re.subVectors(t.a, ze), Pe.subVectors(t.b, ze), De.subVectors(t.c, ze), Oe.subVectors(Pe, Re), Ie.subVectors(De, Pe), Ne.subVectors(Re, De);
			let e = [0, -Oe.z, Oe.y, 0, -Ie.z, Ie.y, 0, -Ne.z, Ne.y, Oe.z, 0, -Oe.x, Ie.z, 0, -Ie.x, Ne.z, 0, -Ne.x, -Oe.y, Oe.x, 0, -Ie.y, Ie.x, 0, -Ne.y, Ne.x, 0];
			return !!Ee(e, Re, Pe, De, Be) && (e = [1, 0, 0, 0, 1, 0, 0, 0, 1], !!Ee(e, Re, Pe, De, Be) && (Ue.crossVectors(Oe, Ie), e = [Ue.x, Ue.y, Ue.z], Ee(e, Re, Pe, De, Be)))
		}
		clampPoint(t, e) {
			return void 0 === e && (console.warn("THREE.Box3: .clampPoint() target is now required"), e = new we), e.copy(t).clamp(this.min, this.max)
		}
		distanceToPoint(t) {
			return Le.copy(t).clamp(this.min, this.max).sub(t).length()
		}
		getBoundingSphere(t) {
			return void 0 === t && console.error("THREE.Box3: .getBoundingSphere() target is now required"), this.getCenter(t.center), t.radius = .5 * this.getSize(Le).length(), t
		}
		intersect(t) {
			return this.min.max(t.min), this.max.min(t.max), this.isEmpty() && this.makeEmpty(), this
		}
		union(t) {
			return this.min.min(t.min), this.max.max(t.max), this
		}
		applyMatrix4(t) {
			return this.isEmpty() || (Ae[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(t), Ae[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(t), Ae[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(t), Ae[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(t), Ae[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(t), Ae[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(t), Ae[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(t), Ae[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(t), this.setFromPoints(Ae)), this
		}
		translate(t) {
			return this.min.add(t), this.max.add(t), this
		}
		equals(t) {
			return t.min.equals(this.min) && t.max.equals(this.max)
		}
	}

	function Ee(t, e, n, i, r) {
		for (let s = 0, o = t.length - 3; s <= o; s += 3) {
			Fe.fromArray(t, s);
			const o = r.x * Math.abs(Fe.x) + r.y * Math.abs(Fe.y) + r.z * Math.abs(Fe.z),
				a = e.dot(Fe),
				c = n.dot(Fe),
				l = i.dot(Fe);
			if (Math.max(-Math.max(a, c, l), Math.min(a, c, l)) > o) return !1
		}
		return !0
	}
	const Ae = [new we, new we, new we, new we, new we, new we, new we, new we],
		Le = new we,
		Ce = new Te,
		Re = new we,
		Pe = new we,
		De = new we,
		Oe = new we,
		Ie = new we,
		Ne = new we,
		ze = new we,
		Be = new we,
		Ue = new we,
		Fe = new we,
		He = new Te;
	class ke {
		constructor(t, e) {
			this.center = void 0 !== t ? t : new we, this.radius = void 0 !== e ? e : -1
		}
		set(t, e) {
			return this.center.copy(t), this.radius = e, this
		}
		setFromPoints(t, e) {
			const n = this.center;
			void 0 !== e ? n.copy(e) : He.setFromPoints(t).getCenter(n);
			let i = 0;
			for (let e = 0, r = t.length; e < r; e++) i = Math.max(i, n.distanceToSquared(t[e]));
			return this.radius = Math.sqrt(i), this
		}
		clone() {
			return (new this.constructor).copy(this)
		}
		copy(t) {
			return this.center.copy(t.center), this.radius = t.radius, this
		}
		isEmpty() {
			return this.radius < 0
		}
		makeEmpty() {
			return this.center.set(0, 0, 0), this.radius = -1, this
		}
		containsPoint(t) {
			return t.distanceToSquared(this.center) <= this.radius * this.radius
		}
		distanceToPoint(t) {
			return t.distanceTo(this.center) - this.radius
		}
		intersectsSphere(t) {
			const e = this.radius + t.radius;
			return t.center.distanceToSquared(this.center) <= e * e
		}
		intersectsBox(t) {
			return t.intersectsSphere(this)
		}
		intersectsPlane(t) {
			return Math.abs(t.distanceToPoint(this.center)) <= this.radius
		}
		clampPoint(t, e) {
			const n = this.center.distanceToSquared(t);
			return void 0 === e && (console.warn("THREE.Sphere: .clampPoint() target is now required"), e = new we), e.copy(t), n > this.radius * this.radius && (e.sub(this.center).normalize(), e.multiplyScalar(this.radius).add(this.center)), e
		}
		getBoundingBox(t) {
			return void 0 === t && (console.warn("THREE.Sphere: .getBoundingBox() target is now required"), t = new Te), this.isEmpty() ? (t.makeEmpty(), t) : (t.set(this.center, this.center), t.expandByScalar(this.radius), t)
		}
		applyMatrix4(t) {
			return this.center.applyMatrix4(t), this.radius = this.radius * t.getMaxScaleOnAxis(), this
		}
		translate(t) {
			return this.center.add(t), this
		}
		equals(t) {
			return t.center.equals(this.center) && t.radius === this.radius
		}
	}
	const Ge = new we,
		je = new we,
		Ve = new we,
		We = new we,
		$e = new we,
		qe = new we,
		Xe = new we;
	class Ye {
		constructor(t, e) {
			this.origin = void 0 !== t ? t : new we, this.direction = void 0 !== e ? e : new we(0, 0, -1)
		}
		set(t, e) {
			return this.origin.copy(t), this.direction.copy(e), this
		}
		clone() {
			return (new this.constructor).copy(this)
		}
		copy(t) {
			return this.origin.copy(t.origin), this.direction.copy(t.direction), this
		}
		at(t, e) {
			return void 0 === e && (console.warn("THREE.Ray: .at() target is now required"), e = new we), e.copy(this.direction).multiplyScalar(t).add(this.origin)
		}
		lookAt(t) {
			return this.direction.copy(t).sub(this.origin).normalize(), this
		}
		recast(t) {
			return this.origin.copy(this.at(t, Ge)), this
		}
		closestPointToPoint(t, e) {
			void 0 === e && (console.warn("THREE.Ray: .closestPointToPoint() target is now required"), e = new we), e.subVectors(t, this.origin);
			const n = e.dot(this.direction);
			return n < 0 ? e.copy(this.origin) : e.copy(this.direction).multiplyScalar(n).add(this.origin)
		}
		distanceToPoint(t) {
			return Math.sqrt(this.distanceSqToPoint(t))
		}
		distanceSqToPoint(t) {
			const e = Ge.subVectors(t, this.origin).dot(this.direction);
			return e < 0 ? this.origin.distanceToSquared(t) : (Ge.copy(this.direction).multiplyScalar(e).add(this.origin), Ge.distanceToSquared(t))
		}
		distanceSqToSegment(t, e, n, i) {
			je.copy(t).add(e).multiplyScalar(.5), Ve.copy(e).sub(t).normalize(), We.copy(this.origin).sub(je);
			const r = .5 * t.distanceTo(e),
				s = -this.direction.dot(Ve),
				o = We.dot(this.direction),
				a = -We.dot(Ve),
				c = We.lengthSq(),
				l = Math.abs(1 - s * s);
			let h, u, d, p;
			if (l > 0)
				if (h = s * a - o, u = s * o - a, p = r * l, h >= 0)
					if (u >= -p)
						if (u <= p) {
							const t = 1 / l;
							h *= t, u *= t, d = h * (h + s * u + 2 * o) + u * (s * h + u + 2 * a) + c
						} else u = r, h = Math.max(0, -(s * u + o)), d = -h * h + u * (u + 2 * a) + c;
			else u = -r, h = Math.max(0, -(s * u + o)), d = -h * h + u * (u + 2 * a) + c;
			else u <= -p ? (h = Math.max(0, -(-s * r + o)), u = h > 0 ? -r : Math.min(Math.max(-r, -a), r), d = -h * h + u * (u + 2 * a) + c) : u <= p ? (h = 0, u = Math.min(Math.max(-r, -a), r), d = u * (u + 2 * a) + c) : (h = Math.max(0, -(s * r + o)), u = h > 0 ? r : Math.min(Math.max(-r, -a), r), d = -h * h + u * (u + 2 * a) + c);
			else u = s > 0 ? -r : r, h = Math.max(0, -(s * u + o)), d = -h * h + u * (u + 2 * a) + c;
			return n && n.copy(this.direction).multiplyScalar(h).add(this.origin), i && i.copy(Ve).multiplyScalar(u).add(je), d
		}
		intersectSphere(t, e) {
			Ge.subVectors(t.center, this.origin);
			const n = Ge.dot(this.direction),
				i = Ge.dot(Ge) - n * n,
				r = t.radius * t.radius;
			if (i > r) return null;
			const s = Math.sqrt(r - i),
				o = n - s,
				a = n + s;
			return o < 0 && a < 0 ? null : o < 0 ? this.at(a, e) : this.at(o, e)
		}
		intersectsSphere(t) {
			return this.distanceSqToPoint(t.center) <= t.radius * t.radius
		}
		distanceToPlane(t) {
			const e = t.normal.dot(this.direction);
			if (0 === e) return 0 === t.distanceToPoint(this.origin) ? 0 : null;
			const n = -(this.origin.dot(t.normal) + t.constant) / e;
			return n >= 0 ? n : null
		}
		intersectPlane(t, e) {
			const n = this.distanceToPlane(t);
			return null === n ? null : this.at(n, e)
		}
		intersectsPlane(t) {
			const e = t.distanceToPoint(this.origin);
			if (0 === e) return !0;
			return t.normal.dot(this.direction) * e < 0
		}
		intersectBox(t, e) {
			let n, i, r, s, o, a;
			const c = 1 / this.direction.x,
				l = 1 / this.direction.y,
				h = 1 / this.direction.z,
				u = this.origin;
			return c >= 0 ? (n = (t.min.x - u.x) * c, i = (t.max.x - u.x) * c) : (n = (t.max.x - u.x) * c, i = (t.min.x - u.x) * c), l >= 0 ? (r = (t.min.y - u.y) * l, s = (t.max.y - u.y) * l) : (r = (t.max.y - u.y) * l, s = (t.min.y - u.y) * l), n > s || r > i ? null : ((r > n || n != n) && (n = r), (s < i || i != i) && (i = s), h >= 0 ? (o = (t.min.z - u.z) * h, a = (t.max.z - u.z) * h) : (o = (t.max.z - u.z) * h, a = (t.min.z - u.z) * h), n > a || o > i ? null : ((o > n || n != n) && (n = o), (a < i || i != i) && (i = a), i < 0 ? null : this.at(n >= 0 ? n : i, e)))
		}
		intersectsBox(t) {
			return null !== this.intersectBox(t, Ge)
		}
		intersectTriangle(t, e, n, i, r) {
			$e.subVectors(e, t), qe.subVectors(n, t), Xe.crossVectors($e, qe);
			let s, o = this.direction.dot(Xe);
			if (o > 0) {
				if (i) return null;
				s = 1
			} else {
				if (!(o < 0)) return null;
				s = -1, o = -o
			}
			We.subVectors(this.origin, t);
			const a = s * this.direction.dot(qe.crossVectors(We, qe));
			if (a < 0) return null;
			const c = s * this.direction.dot($e.cross(We));
			if (c < 0) return null;
			if (a + c > o) return null;
			const l = -s * We.dot(Xe);
			return l < 0 ? null : this.at(l / o, r)
		}
		applyMatrix4(t) {
			return this.origin.applyMatrix4(t), this.direction.transformDirection(t), this
		}
		equals(t) {
			return t.origin.equals(this.origin) && t.direction.equals(this.direction)
		}
	}
	class Ze {
		constructor() {
			Object.defineProperty(this, "isMatrix4", {
				value: !0
			}), this.elements = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1], arguments.length > 0 && console.error("THREE.Matrix4: the constructor no longer reads arguments. use .set() instead.")
		}
		set(t, e, n, i, r, s, o, a, c, l, h, u, d, p, f, m) {
			const g = this.elements;
			return g[0] = t, g[4] = e, g[8] = n, g[12] = i, g[1] = r, g[5] = s, g[9] = o, g[13] = a, g[2] = c, g[6] = l, g[10] = h, g[14] = u, g[3] = d, g[7] = p, g[11] = f, g[15] = m, this
		}
		identity() {
			return this.set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this
		}
		clone() {
			return (new Ze).fromArray(this.elements)
		}
		copy(t) {
			const e = this.elements,
				n = t.elements;
			return e[0] = n[0], e[1] = n[1], e[2] = n[2], e[3] = n[3], e[4] = n[4], e[5] = n[5], e[6] = n[6], e[7] = n[7], e[8] = n[8], e[9] = n[9], e[10] = n[10], e[11] = n[11], e[12] = n[12], e[13] = n[13], e[14] = n[14], e[15] = n[15], this
		}
		copyPosition(t) {
			const e = this.elements,
				n = t.elements;
			return e[12] = n[12], e[13] = n[13], e[14] = n[14], this
		}
		setFromMatrix3(t) {
			const e = t.elements;
			return this.set(e[0], e[3], e[6], 0, e[1], e[4], e[7], 0, e[2], e[5], e[8], 0, 0, 0, 0, 1), this
		}
		extractBasis(t, e, n) {
			return t.setFromMatrixColumn(this, 0), e.setFromMatrixColumn(this, 1), n.setFromMatrixColumn(this, 2), this
		}
		makeBasis(t, e, n) {
			return this.set(t.x, e.x, n.x, 0, t.y, e.y, n.y, 0, t.z, e.z, n.z, 0, 0, 0, 0, 1), this
		}
		extractRotation(t) {
			const e = this.elements,
				n = t.elements,
				i = 1 / Je.setFromMatrixColumn(t, 0).length(),
				r = 1 / Je.setFromMatrixColumn(t, 1).length(),
				s = 1 / Je.setFromMatrixColumn(t, 2).length();
			return e[0] = n[0] * i, e[1] = n[1] * i, e[2] = n[2] * i, e[3] = 0, e[4] = n[4] * r, e[5] = n[5] * r, e[6] = n[6] * r, e[7] = 0, e[8] = n[8] * s, e[9] = n[9] * s, e[10] = n[10] * s, e[11] = 0, e[12] = 0, e[13] = 0, e[14] = 0, e[15] = 1, this
		}
		makeRotationFromEuler(t) {
			t && t.isEuler || console.error("THREE.Matrix4: .makeRotationFromEuler() now expects a Euler rotation rather than a Vector3 and order.");
			const e = this.elements,
				n = t.x,
				i = t.y,
				r = t.z,
				s = Math.cos(n),
				o = Math.sin(n),
				a = Math.cos(i),
				c = Math.sin(i),
				l = Math.cos(r),
				h = Math.sin(r);
			if ("XYZ" === t.order) {
				const t = s * l,
					n = s * h,
					i = o * l,
					r = o * h;
				e[0] = a * l, e[4] = -a * h, e[8] = c, e[1] = n + i * c, e[5] = t - r * c, e[9] = -o * a, e[2] = r - t * c, e[6] = i + n * c, e[10] = s * a
			} else if ("YXZ" === t.order) {
				const t = a * l,
					n = a * h,
					i = c * l,
					r = c * h;
				e[0] = t + r * o, e[4] = i * o - n, e[8] = s * c, e[1] = s * h, e[5] = s * l, e[9] = -o, e[2] = n * o - i, e[6] = r + t * o, e[10] = s * a
			} else if ("ZXY" === t.order) {
				const t = a * l,
					n = a * h,
					i = c * l,
					r = c * h;
				e[0] = t - r * o, e[4] = -s * h, e[8] = i + n * o, e[1] = n + i * o, e[5] = s * l, e[9] = r - t * o, e[2] = -s * c, e[6] = o, e[10] = s * a
			} else if ("ZYX" === t.order) {
				const t = s * l,
					n = s * h,
					i = o * l,
					r = o * h;
				e[0] = a * l, e[4] = i * c - n, e[8] = t * c + r, e[1] = a * h, e[5] = r * c + t, e[9] = n * c - i, e[2] = -c, e[6] = o * a, e[10] = s * a
			} else if ("YZX" === t.order) {
				const t = s * a,
					n = s * c,
					i = o * a,
					r = o * c;
				e[0] = a * l, e[4] = r - t * h, e[8] = i * h + n, e[1] = h, e[5] = s * l, e[9] = -o * l, e[2] = -c * l, e[6] = n * h + i, e[10] = t - r * h
			} else if ("XZY" === t.order) {
				const t = s * a,
					n = s * c,
					i = o * a,
					r = o * c;
				e[0] = a * l, e[4] = -h, e[8] = c * l, e[1] = t * h + r, e[5] = s * l, e[9] = n * h - i, e[2] = i * h - n, e[6] = o * l, e[10] = r * h + t
			}
			return e[3] = 0, e[7] = 0, e[11] = 0, e[12] = 0, e[13] = 0, e[14] = 0, e[15] = 1, this
		}
		makeRotationFromQuaternion(t) {
			return this.compose(Ke, t, tn)
		}
		lookAt(t, e, n) {
			const i = this.elements;
			return rn.subVectors(t, e), 0 === rn.lengthSq() && (rn.z = 1), rn.normalize(), en.crossVectors(n, rn), 0 === en.lengthSq() && (1 === Math.abs(n.z) ? rn.x += 1e-4 : rn.z += 1e-4, rn.normalize(), en.crossVectors(n, rn)), en.normalize(), nn.crossVectors(rn, en), i[0] = en.x, i[4] = nn.x, i[8] = rn.x, i[1] = en.y, i[5] = nn.y, i[9] = rn.y, i[2] = en.z, i[6] = nn.z, i[10] = rn.z, this
		}
		multiply(t, e) {
			return void 0 !== e ? (console.warn("THREE.Matrix4: .multiply() now only accepts one argument. Use .multiplyMatrices( a, b ) instead."), this.multiplyMatrices(t, e)) : this.multiplyMatrices(this, t)
		}
		premultiply(t) {
			return this.multiplyMatrices(t, this)
		}
		multiplyMatrices(t, e) {
			const n = t.elements,
				i = e.elements,
				r = this.elements,
				s = n[0],
				o = n[4],
				a = n[8],
				c = n[12],
				l = n[1],
				h = n[5],
				u = n[9],
				d = n[13],
				p = n[2],
				f = n[6],
				m = n[10],
				g = n[14],
				v = n[3],
				y = n[7],
				x = n[11],
				b = n[15],
				_ = i[0],
				w = i[4],
				M = i[8],
				S = i[12],
				T = i[1],
				E = i[5],
				A = i[9],
				L = i[13],
				C = i[2],
				R = i[6],
				P = i[10],
				D = i[14],
				O = i[3],
				I = i[7],
				N = i[11],
				z = i[15];
			return r[0] = s * _ + o * T + a * C + c * O, r[4] = s * w + o * E + a * R + c * I, r[8] = s * M + o * A + a * P + c * N, r[12] = s * S + o * L + a * D + c * z, r[1] = l * _ + h * T + u * C + d * O, r[5] = l * w + h * E + u * R + d * I, r[9] = l * M + h * A + u * P + d * N, r[13] = l * S + h * L + u * D + d * z, r[2] = p * _ + f * T + m * C + g * O, r[6] = p * w + f * E + m * R + g * I, r[10] = p * M + f * A + m * P + g * N, r[14] = p * S + f * L + m * D + g * z, r[3] = v * _ + y * T + x * C + b * O, r[7] = v * w + y * E + x * R + b * I, r[11] = v * M + y * A + x * P + b * N, r[15] = v * S + y * L + x * D + b * z, this
		}
		multiplyScalar(t) {
			const e = this.elements;
			return e[0] *= t, e[4] *= t, e[8] *= t, e[12] *= t, e[1] *= t, e[5] *= t, e[9] *= t, e[13] *= t, e[2] *= t, e[6] *= t, e[10] *= t, e[14] *= t, e[3] *= t, e[7] *= t, e[11] *= t, e[15] *= t, this
		}
		determinant() {
			const t = this.elements,
				e = t[0],
				n = t[4],
				i = t[8],
				r = t[12],
				s = t[1],
				o = t[5],
				a = t[9],
				c = t[13],
				l = t[2],
				h = t[6],
				u = t[10],
				d = t[14];
			return t[3] * (+r * a * h - i * c * h - r * o * u + n * c * u + i * o * d - n * a * d) + t[7] * (+e * a * d - e * c * u + r * s * u - i * s * d + i * c * l - r * a * l) + t[11] * (+e * c * h - e * o * d - r * s * h + n * s * d + r * o * l - n * c * l) + t[15] * (-i * o * l - e * a * h + e * o * u + i * s * h - n * s * u + n * a * l)
		}
		transpose() {
			const t = this.elements;
			let e;
			return e = t[1], t[1] = t[4], t[4] = e, e = t[2], t[2] = t[8], t[8] = e, e = t[6], t[6] = t[9], t[9] = e, e = t[3], t[3] = t[12], t[12] = e, e = t[7], t[7] = t[13], t[13] = e, e = t[11], t[11] = t[14], t[14] = e, this
		}
		setPosition(t, e, n) {
			const i = this.elements;
			return t.isVector3 ? (i[12] = t.x, i[13] = t.y, i[14] = t.z) : (i[12] = t, i[13] = e, i[14] = n), this
		}
		invert() {
			const t = this.elements,
				e = t[0],
				n = t[1],
				i = t[2],
				r = t[3],
				s = t[4],
				o = t[5],
				a = t[6],
				c = t[7],
				l = t[8],
				h = t[9],
				u = t[10],
				d = t[11],
				p = t[12],
				f = t[13],
				m = t[14],
				g = t[15],
				v = h * m * c - f * u * c + f * a * d - o * m * d - h * a * g + o * u * g,
				y = p * u * c - l * m * c - p * a * d + s * m * d + l * a * g - s * u * g,
				x = l * f * c - p * h * c + p * o * d - s * f * d - l * o * g + s * h * g,
				b = p * h * a - l * f * a - p * o * u + s * f * u + l * o * m - s * h * m,
				_ = e * v + n * y + i * x + r * b;
			if (0 === _) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
			const w = 1 / _;
			return t[0] = v * w, t[1] = (f * u * r - h * m * r - f * i * d + n * m * d + h * i * g - n * u * g) * w, t[2] = (o * m * r - f * a * r + f * i * c - n * m * c - o * i * g + n * a * g) * w, t[3] = (h * a * r - o * u * r - h * i * c + n * u * c + o * i * d - n * a * d) * w, t[4] = y * w, t[5] = (l * m * r - p * u * r + p * i * d - e * m * d - l * i * g + e * u * g) * w, t[6] = (p * a * r - s * m * r - p * i * c + e * m * c + s * i * g - e * a * g) * w, t[7] = (s * u * r - l * a * r + l * i * c - e * u * c - s * i * d + e * a * d) * w, t[8] = x * w, t[9] = (p * h * r - l * f * r - p * n * d + e * f * d + l * n * g - e * h * g) * w, t[10] = (s * f * r - p * o * r + p * n * c - e * f * c - s * n * g + e * o * g) * w, t[11] = (l * o * r - s * h * r - l * n * c + e * h * c + s * n * d - e * o * d) * w, t[12] = b * w, t[13] = (l * f * i - p * h * i + p * n * u - e * f * u - l * n * m + e * h * m) * w, t[14] = (p * o * i - s * f * i - p * n * a + e * f * a + s * n * m - e * o * m) * w, t[15] = (s * h * i - l * o * i + l * n * a - e * h * a - s * n * u + e * o * u) * w, this
		}
		scale(t) {
			const e = this.elements,
				n = t.x,
				i = t.y,
				r = t.z;
			return e[0] *= n, e[4] *= i, e[8] *= r, e[1] *= n, e[5] *= i, e[9] *= r, e[2] *= n, e[6] *= i, e[10] *= r, e[3] *= n, e[7] *= i, e[11] *= r, this
		}
		getMaxScaleOnAxis() {
			const t = this.elements,
				e = t[0] * t[0] + t[1] * t[1] + t[2] * t[2],
				n = t[4] * t[4] + t[5] * t[5] + t[6] * t[6],
				i = t[8] * t[8] + t[9] * t[9] + t[10] * t[10];
			return Math.sqrt(Math.max(e, n, i))
		}
		makeTranslation(t, e, n) {
			return this.set(1, 0, 0, t, 0, 1, 0, e, 0, 0, 1, n, 0, 0, 0, 1), this
		}
		makeRotationX(t) {
			const e = Math.cos(t),
				n = Math.sin(t);
			return this.set(1, 0, 0, 0, 0, e, -n, 0, 0, n, e, 0, 0, 0, 0, 1), this
		}
		makeRotationY(t) {
			const e = Math.cos(t),
				n = Math.sin(t);
			return this.set(e, 0, n, 0, 0, 1, 0, 0, -n, 0, e, 0, 0, 0, 0, 1), this
		}
		makeRotationZ(t) {
			const e = Math.cos(t),
				n = Math.sin(t);
			return this.set(e, -n, 0, 0, n, e, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this
		}
		makeRotationAxis(t, e) {
			const n = Math.cos(e),
				i = Math.sin(e),
				r = 1 - n,
				s = t.x,
				o = t.y,
				a = t.z,
				c = r * s,
				l = r * o;
			return this.set(c * s + n, c * o - i * a, c * a + i * o, 0, c * o + i * a, l * o + n, l * a - i * s, 0, c * a - i * o, l * a + i * s, r * a * a + n, 0, 0, 0, 0, 1), this
		}
		makeScale(t, e, n) {
			return this.set(t, 0, 0, 0, 0, e, 0, 0, 0, 0, n, 0, 0, 0, 0, 1), this
		}
		makeShear(t, e, n) {
			return this.set(1, e, n, 0, t, 1, n, 0, t, e, 1, 0, 0, 0, 0, 1), this
		}
		compose(t, e, n) {
			const i = this.elements,
				r = e._x,
				s = e._y,
				o = e._z,
				a = e._w,
				c = r + r,
				l = s + s,
				h = o + o,
				u = r * c,
				d = r * l,
				p = r * h,
				f = s * l,
				m = s * h,
				g = o * h,
				v = a * c,
				y = a * l,
				x = a * h,
				b = n.x,
				_ = n.y,
				w = n.z;
			return i[0] = (1 - (f + g)) * b, i[1] = (d + x) * b, i[2] = (p - y) * b, i[3] = 0, i[4] = (d - x) * _, i[5] = (1 - (u + g)) * _, i[6] = (m + v) * _, i[7] = 0, i[8] = (p + y) * w, i[9] = (m - v) * w, i[10] = (1 - (u + f)) * w, i[11] = 0, i[12] = t.x, i[13] = t.y, i[14] = t.z, i[15] = 1, this
		}
		decompose(t, e, n) {
			const i = this.elements;
			let r = Je.set(i[0], i[1], i[2]).length();
			const s = Je.set(i[4], i[5], i[6]).length(),
				o = Je.set(i[8], i[9], i[10]).length();
			this.determinant() < 0 && (r = -r), t.x = i[12], t.y = i[13], t.z = i[14], Qe.copy(this);
			const a = 1 / r,
				c = 1 / s,
				l = 1 / o;
			return Qe.elements[0] *= a, Qe.elements[1] *= a, Qe.elements[2] *= a, Qe.elements[4] *= c, Qe.elements[5] *= c, Qe.elements[6] *= c, Qe.elements[8] *= l, Qe.elements[9] *= l, Qe.elements[10] *= l, e.setFromRotationMatrix(Qe), n.x = r, n.y = s, n.z = o, this
		}
		makePerspective(t, e, n, i, r, s) {
			void 0 === s && console.warn("THREE.Matrix4: .makePerspective() has been redefined and has a new signature. Please check the docs.");
			const o = this.elements,
				a = 2 * r / (e - t),
				c = 2 * r / (n - i),
				l = (e + t) / (e - t),
				h = (n + i) / (n - i),
				u = -(s + r) / (s - r),
				d = -2 * s * r / (s - r);
			return o[0] = a, o[4] = 0, o[8] = l, o[12] = 0, o[1] = 0, o[5] = c, o[9] = h, o[13] = 0, o[2] = 0, o[6] = 0, o[10] = u, o[14] = d, o[3] = 0, o[7] = 0, o[11] = -1, o[15] = 0, this
		}
		makeOrthographic(t, e, n, i, r, s) {
			const o = this.elements,
				a = 1 / (e - t),
				c = 1 / (n - i),
				l = 1 / (s - r),
				h = (e + t) * a,
				u = (n + i) * c,
				d = (s + r) * l;
			return o[0] = 2 * a, o[4] = 0, o[8] = 0, o[12] = -h, o[1] = 0, o[5] = 2 * c, o[9] = 0, o[13] = -u, o[2] = 0, o[6] = 0, o[10] = -2 * l, o[14] = -d, o[3] = 0, o[7] = 0, o[11] = 0, o[15] = 1, this
		}
		equals(t) {
			const e = this.elements,
				n = t.elements;
			for (let t = 0; t < 16; t++)
				if (e[t] !== n[t]) return !1;
			return !0
		}
		fromArray(t, e = 0) {
			for (let n = 0; n < 16; n++) this.elements[n] = t[n + e];
			return this
		}
		toArray(t = [], e = 0) {
			const n = this.elements;
			return t[e] = n[0], t[e + 1] = n[1], t[e + 2] = n[2], t[e + 3] = n[3], t[e + 4] = n[4], t[e + 5] = n[5], t[e + 6] = n[6], t[e + 7] = n[7], t[e + 8] = n[8], t[e + 9] = n[9], t[e + 10] = n[10], t[e + 11] = n[11], t[e + 12] = n[12], t[e + 13] = n[13], t[e + 14] = n[14], t[e + 15] = n[15], t
		}
	}
	const Je = new we,
		Qe = new Ze,
		Ke = new we(0, 0, 0),
		tn = new we(1, 1, 1),
		en = new we,
		nn = new we,
		rn = new we;
	class sn {
		constructor(t = 0, e = 0, n = 0, i = sn.DefaultOrder) {
			Object.defineProperty(this, "isEuler", {
				value: !0
			}), this._x = t, this._y = e, this._z = n, this._order = i
		}
		get x() {
			return this._x
		}
		set x(t) {
			this._x = t, this._onChangeCallback()
		}
		get y() {
			return this._y
		}
		set y(t) {
			this._y = t, this._onChangeCallback()
		}
		get z() {
			return this._z
		}
		set z(t) {
			this._z = t, this._onChangeCallback()
		}
		get order() {
			return this._order
		}
		set order(t) {
			this._order = t, this._onChangeCallback()
		}
		set(t, e, n, i) {
			return this._x = t, this._y = e, this._z = n, this._order = i || this._order, this._onChangeCallback(), this
		}
		clone() {
			return new this.constructor(this._x, this._y, this._z, this._order)
		}
		copy(t) {
			return this._x = t._x, this._y = t._y, this._z = t._z, this._order = t._order, this._onChangeCallback(), this
		}
		setFromRotationMatrix(t, e, n) {
			const i = ue.clamp,
				r = t.elements,
				s = r[0],
				o = r[4],
				a = r[8],
				c = r[1],
				l = r[5],
				h = r[9],
				u = r[2],
				d = r[6],
				p = r[10];
			switch (e = e || this._order) {
				case "XYZ":
					this._y = Math.asin(i(a, -1, 1)), Math.abs(a) < .9999999 ? (this._x = Math.atan2(-h, p), this._z = Math.atan2(-o, s)) : (this._x = Math.atan2(d, l), this._z = 0);
					break;
				case "YXZ":
					this._x = Math.asin(-i(h, -1, 1)), Math.abs(h) < .9999999 ? (this._y = Math.atan2(a, p), this._z = Math.atan2(c, l)) : (this._y = Math.atan2(-u, s), this._z = 0);
					break;
				case "ZXY":
					this._x = Math.asin(i(d, -1, 1)), Math.abs(d) < .9999999 ? (this._y = Math.atan2(-u, p), this._z = Math.atan2(-o, l)) : (this._y = 0, this._z = Math.atan2(c, s));
					break;
				case "ZYX":
					this._y = Math.asin(-i(u, -1, 1)), Math.abs(u) < .9999999 ? (this._x = Math.atan2(d, p), this._z = Math.atan2(c, s)) : (this._x = 0, this._z = Math.atan2(-o, l));
					break;
				case "YZX":
					this._z = Math.asin(i(c, -1, 1)), Math.abs(c) < .9999999 ? (this._x = Math.atan2(-h, l), this._y = Math.atan2(-u, s)) : (this._x = 0, this._y = Math.atan2(a, p));
					break;
				case "XZY":
					this._z = Math.asin(-i(o, -1, 1)), Math.abs(o) < .9999999 ? (this._x = Math.atan2(d, l), this._y = Math.atan2(a, s)) : (this._x = Math.atan2(-h, p), this._y = 0);
					break;
				default:
					console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: " + e)
			}
			return this._order = e, !1 !== n && this._onChangeCallback(), this
		}
		setFromQuaternion(t, e, n) {
			return on.makeRotationFromQuaternion(t), this.setFromRotationMatrix(on, e, n)
		}
		setFromVector3(t, e) {
			return this.set(t.x, t.y, t.z, e || this._order)
		}
		reorder(t) {
			return an.setFromEuler(this), this.setFromQuaternion(an, t)
		}
		equals(t) {
			return t._x === this._x && t._y === this._y && t._z === this._z && t._order === this._order
		}
		fromArray(t) {
			return this._x = t[0], this._y = t[1], this._z = t[2], void 0 !== t[3] && (this._order = t[3]), this._onChangeCallback(), this
		}
		toArray(t = [], e = 0) {
			return t[e] = this._x, t[e + 1] = this._y, t[e + 2] = this._z, t[e + 3] = this._order, t
		}
		toVector3(t) {
			return t ? t.set(this._x, this._y, this._z) : new we(this._x, this._y, this._z)
		}
		_onChange(t) {
			return this._onChangeCallback = t, this
		}
		_onChangeCallback() {}
	}
	sn.DefaultOrder = "XYZ", sn.RotationOrders = ["XYZ", "YZX", "ZXY", "XZY", "YXZ", "ZYX"];
	const on = new Ze,
		an = new _e;
	class cn {
		constructor() {
			this.mask = 1
		}
		set(t) {
			this.mask = 1 << t | 0
		}
		enable(t) {
			this.mask |= 1 << t | 0
		}
		enableAll() {
			this.mask = -1
		}
		toggle(t) {
			this.mask ^= 1 << t | 0
		}
		disable(t) {
			this.mask &= ~(1 << t | 0)
		}
		disableAll() {
			this.mask = 0
		}
		test(t) {
			return 0 != (this.mask & t.mask)
		}
	}
	let ln = 0;
	const hn = new we,
		un = new _e,
		dn = new Ze,
		pn = new we,
		fn = new we,
		mn = new we,
		gn = new _e,
		vn = new we(1, 0, 0),
		yn = new we(0, 1, 0),
		xn = new we(0, 0, 1),
		bn = {
			type: "added"
		},
		_n = {
			type: "removed"
		};

	function wn() {
		Object.defineProperty(this, "id", {
			value: ln++
		}), this.uuid = ue.generateUUID(), this.name = "", this.type = "Object3D", this.parent = null, this.children = [], this.up = wn.DefaultUp.clone();
		const t = new we,
			e = new sn,
			n = new _e,
			i = new we(1, 1, 1);
		e._onChange((function() {
			n.setFromEuler(e, !1)
		})), n._onChange((function() {
			e.setFromQuaternion(n, void 0, !1)
		})), Object.defineProperties(this, {
			position: {
				configurable: !0,
				enumerable: !0,
				value: t
			},
			rotation: {
				configurable: !0,
				enumerable: !0,
				value: e
			},
			quaternion: {
				configurable: !0,
				enumerable: !0,
				value: n
			},
			scale: {
				configurable: !0,
				enumerable: !0,
				value: i
			},
			modelViewMatrix: {
				value: new Ze
			},
			normalMatrix: {
				value: new pe
			}
		}), this.matrix = new Ze, this.matrixWorld = new Ze, this.matrixAutoUpdate = wn.DefaultMatrixAutoUpdate, this.matrixWorldNeedsUpdate = !1, this.layers = new cn, this.visible = !0, this.castShadow = !1, this.receiveShadow = !1, this.frustumCulled = !0, this.renderOrder = 0, this.animations = [], this.userData = {}
	}
	wn.DefaultUp = new we(0, 1, 0), wn.DefaultMatrixAutoUpdate = !0, wn.prototype = Object.assign(Object.create(ce.prototype), {
		constructor: wn,
		isObject3D: !0,
		onBeforeRender: function() {},
		onAfterRender: function() {},
		applyMatrix4: function(t) {
			this.matrixAutoUpdate && this.updateMatrix(), this.matrix.premultiply(t), this.matrix.decompose(this.position, this.quaternion, this.scale)
		},
		applyQuaternion: function(t) {
			return this.quaternion.premultiply(t), this
		},
		setRotationFromAxisAngle: function(t, e) {
			this.quaternion.setFromAxisAngle(t, e)
		},
		setRotationFromEuler: function(t) {
			this.quaternion.setFromEuler(t, !0)
		},
		setRotationFromMatrix: function(t) {
			this.quaternion.setFromRotationMatrix(t)
		},
		setRotationFromQuaternion: function(t) {
			this.quaternion.copy(t)
		},
		rotateOnAxis: function(t, e) {
			return un.setFromAxisAngle(t, e), this.quaternion.multiply(un), this
		},
		rotateOnWorldAxis: function(t, e) {
			return un.setFromAxisAngle(t, e), this.quaternion.premultiply(un), this
		},
		rotateX: function(t) {
			return this.rotateOnAxis(vn, t)
		},
		rotateY: function(t) {
			return this.rotateOnAxis(yn, t)
		},
		rotateZ: function(t) {
			return this.rotateOnAxis(xn, t)
		},
		translateOnAxis: function(t, e) {
			return hn.copy(t).applyQuaternion(this.quaternion), this.position.add(hn.multiplyScalar(e)), this
		},
		translateX: function(t) {
			return this.translateOnAxis(vn, t)
		},
		translateY: function(t) {
			return this.translateOnAxis(yn, t)
		},
		translateZ: function(t) {
			return this.translateOnAxis(xn, t)
		},
		localToWorld: function(t) {
			return t.applyMatrix4(this.matrixWorld)
		},
		worldToLocal: function(t) {
			return t.applyMatrix4(dn.copy(this.matrixWorld).invert())
		},
		lookAt: function(t, e, n) {
			t.isVector3 ? pn.copy(t) : pn.set(t, e, n);
			const i = this.parent;
			this.updateWorldMatrix(!0, !1), fn.setFromMatrixPosition(this.matrixWorld), this.isCamera || this.isLight ? dn.lookAt(fn, pn, this.up) : dn.lookAt(pn, fn, this.up), this.quaternion.setFromRotationMatrix(dn), i && (dn.extractRotation(i.matrixWorld), un.setFromRotationMatrix(dn), this.quaternion.premultiply(un.invert()))
		},
		add: function(t) {
			if (arguments.length > 1) {
				for (let t = 0; t < arguments.length; t++) this.add(arguments[t]);
				return this
			}
			return t === this ? (console.error("THREE.Object3D.add: object can't be added as a child of itself.", t), this) : (t && t.isObject3D ? (null !== t.parent && t.parent.remove(t), t.parent = this, this.children.push(t), t.dispatchEvent(bn)) : console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.", t), this)
		},
		remove: function(t) {
			if (arguments.length > 1) {
				for (let t = 0; t < arguments.length; t++) this.remove(arguments[t]);
				return this
			}
			const e = this.children.indexOf(t);
			return -1 !== e && (t.parent = null, this.children.splice(e, 1), t.dispatchEvent(_n)), this
		},
		clear: function() {
			for (let t = 0; t < this.children.length; t++) {
				const e = this.children[t];
				e.parent = null, e.dispatchEvent(_n)
			}
			return this.children.length = 0, this
		},
		attach: function(t) {
			return this.updateWorldMatrix(!0, !1), dn.copy(this.matrixWorld).invert(), null !== t.parent && (t.parent.updateWorldMatrix(!0, !1), dn.multiply(t.parent.matrixWorld)), t.applyMatrix4(dn), t.updateWorldMatrix(!1, !1), this.add(t), this
		},
		getObjectById: function(t) {
			return this.getObjectByProperty("id", t)
		},
		getObjectByName: function(t) {
			return this.getObjectByProperty("name", t)
		},
		getObjectByProperty: function(t, e) {
			if (this[t] === e) return this;
			for (let n = 0, i = this.children.length; n < i; n++) {
				const i = this.children[n].getObjectByProperty(t, e);
				if (void 0 !== i) return i
			}
		},
		getWorldPosition: function(t) {
			return void 0 === t && (console.warn("THREE.Object3D: .getWorldPosition() target is now required"), t = new we), this.updateWorldMatrix(!0, !1), t.setFromMatrixPosition(this.matrixWorld)
		},
		getWorldQuaternion: function(t) {
			return void 0 === t && (console.warn("THREE.Object3D: .getWorldQuaternion() target is now required"), t = new _e), this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(fn, t, mn), t
		},
		getWorldScale: function(t) {
			return void 0 === t && (console.warn("THREE.Object3D: .getWorldScale() target is now required"), t = new we), this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(fn, gn, t), t
		},
		getWorldDirection: function(t) {
			void 0 === t && (console.warn("THREE.Object3D: .getWorldDirection() target is now required"), t = new we), this.updateWorldMatrix(!0, !1);
			const e = this.matrixWorld.elements;
			return t.set(e[8], e[9], e[10]).normalize()
		},
		raycast: function() {},
		traverse: function(t) {
			t(this);
			const e = this.children;
			for (let n = 0, i = e.length; n < i; n++) e[n].traverse(t)
		},
		traverseVisible: function(t) {
			if (!1 === this.visible) return;
			t(this);
			const e = this.children;
			for (let n = 0, i = e.length; n < i; n++) e[n].traverseVisible(t)
		},
		traverseAncestors: function(t) {
			const e = this.parent;
			null !== e && (t(e), e.traverseAncestors(t))
		},
		updateMatrix: function() {
			this.matrix.compose(this.position, this.quaternion, this.scale), this.matrixWorldNeedsUpdate = !0
		},
		updateMatrixWorld: function(t) {
			this.matrixAutoUpdate && this.updateMatrix(), (this.matrixWorldNeedsUpdate || t) && (null === this.parent ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix), this.matrixWorldNeedsUpdate = !1, t = !0);
			const e = this.children;
			for (let n = 0, i = e.length; n < i; n++) e[n].updateMatrixWorld(t)
		},
		updateWorldMatrix: function(t, e) {
			const n = this.parent;
			if (!0 === t && null !== n && n.updateWorldMatrix(!0, !1), this.matrixAutoUpdate && this.updateMatrix(), null === this.parent ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix), !0 === e) {
				const t = this.children;
				for (let e = 0, n = t.length; e < n; e++) t[e].updateWorldMatrix(!1, !0)
			}
		},
		toJSON: function(t) {
			const e = void 0 === t || "string" == typeof t,
				n = {};
			e && (t = {
				geometries: {},
				materials: {},
				textures: {},
				images: {},
				shapes: {},
				skeletons: {},
				animations: {}
			}, n.metadata = {
				version: 4.5,
				type: "Object",
				generator: "Object3D.toJSON"
			});
			const i = {};

			function r(e, n) {
				return void 0 === e[n.uuid] && (e[n.uuid] = n.toJSON(t)), n.uuid
			}
			if (i.uuid = this.uuid, i.type = this.type, "" !== this.name && (i.name = this.name), !0 === this.castShadow && (i.castShadow = !0), !0 === this.receiveShadow && (i.receiveShadow = !0), !1 === this.visible && (i.visible = !1), !1 === this.frustumCulled && (i.frustumCulled = !1), 0 !== this.renderOrder && (i.renderOrder = this.renderOrder), "{}" !== JSON.stringify(this.userData) && (i.userData = this.userData), i.layers = this.layers.mask, i.matrix = this.matrix.toArray(), !1 === this.matrixAutoUpdate && (i.matrixAutoUpdate = !1), this.isInstancedMesh && (i.type = "InstancedMesh", i.count = this.count, i.instanceMatrix = this.instanceMatrix.toJSON()), this.isMesh || this.isLine || this.isPoints) {
				i.geometry = r(t.geometries, this.geometry);
				const e = this.geometry.parameters;
				if (void 0 !== e && void 0 !== e.shapes) {
					const n = e.shapes;
					if (Array.isArray(n))
						for (let e = 0, i = n.length; e < i; e++) {
							const i = n[e];
							r(t.shapes, i)
						} else r(t.shapes, n)
				}
			}
			if (this.isSkinnedMesh && (i.bindMode = this.bindMode, i.bindMatrix = this.bindMatrix.toArray(), void 0 !== this.skeleton && (r(t.skeletons, this.skeleton), i.skeleton = this.skeleton.uuid)), void 0 !== this.material)
				if (Array.isArray(this.material)) {
					const e = [];
					for (let n = 0, i = this.material.length; n < i; n++) e.push(r(t.materials, this.material[n]));
					i.material = e
				} else i.material = r(t.materials, this.material);
			if (this.children.length > 0) {
				i.children = [];
				for (let e = 0; e < this.children.length; e++) i.children.push(this.children[e].toJSON(t).object)
			}
			if (this.animations.length > 0) {
				i.animations = [];
				for (let e = 0; e < this.animations.length; e++) {
					const n = this.animations[e];
					i.animations.push(r(t.animations, n))
				}
			}
			if (e) {
				const e = s(t.geometries),
					i = s(t.materials),
					r = s(t.textures),
					o = s(t.images),
					a = s(t.shapes),
					c = s(t.skeletons),
					l = s(t.animations);
				e.length > 0 && (n.geometries = e), i.length > 0 && (n.materials = i), r.length > 0 && (n.textures = r), o.length > 0 && (n.images = o), a.length > 0 && (n.shapes = a), c.length > 0 && (n.skeletons = c), l.length > 0 && (n.animations = l)
			}
			return n.object = i, n;

			function s(t) {
				const e = [];
				for (const n in t) {
					const i = t[n];
					delete i.metadata, e.push(i)
				}
				return e
			}
		},
		clone: function(t) {
			return (new this.constructor).copy(this, t)
		},
		copy: function(t, e = !0) {
			if (this.name = t.name, this.up.copy(t.up), this.position.copy(t.position), this.rotation.order = t.rotation.order, this.quaternion.copy(t.quaternion), this.scale.copy(t.scale), this.matrix.copy(t.matrix), this.matrixWorld.copy(t.matrixWorld), this.matrixAutoUpdate = t.matrixAutoUpdate, this.matrixWorldNeedsUpdate = t.matrixWorldNeedsUpdate, this.layers.mask = t.layers.mask, this.visible = t.visible, this.castShadow = t.castShadow, this.receiveShadow = t.receiveShadow, this.frustumCulled = t.frustumCulled, this.renderOrder = t.renderOrder, this.userData = JSON.parse(JSON.stringify(t.userData)), !0 === e)
				for (let e = 0; e < t.children.length; e++) {
					const n = t.children[e];
					this.add(n.clone())
				}
			return this
		}
	});
	const Mn = new we,
		Sn = new we,
		Tn = new pe;
	class En {
		constructor(t, e) {
			Object.defineProperty(this, "isPlane", {
				value: !0
			}), this.normal = void 0 !== t ? t : new we(1, 0, 0), this.constant = void 0 !== e ? e : 0
		}
		set(t, e) {
			return this.normal.copy(t), this.constant = e, this
		}
		setComponents(t, e, n, i) {
			return this.normal.set(t, e, n), this.constant = i, this
		}
		setFromNormalAndCoplanarPoint(t, e) {
			return this.normal.copy(t), this.constant = -e.dot(this.normal), this
		}
		setFromCoplanarPoints(t, e, n) {
			const i = Mn.subVectors(n, e).cross(Sn.subVectors(t, e)).normalize();
			return this.setFromNormalAndCoplanarPoint(i, t), this
		}
		clone() {
			return (new this.constructor).copy(this)
		}
		copy(t) {
			return this.normal.copy(t.normal), this.constant = t.constant, this
		}
		normalize() {
			const t = 1 / this.normal.length();
			return this.normal.multiplyScalar(t), this.constant *= t, this
		}
		negate() {
			return this.constant *= -1, this.normal.negate(), this
		}
		distanceToPoint(t) {
			return this.normal.dot(t) + this.constant
		}
		distanceToSphere(t) {
			return this.distanceToPoint(t.center) - t.radius
		}
		projectPoint(t, e) {
			return void 0 === e && (console.warn("THREE.Plane: .projectPoint() target is now required"), e = new we), e.copy(this.normal).multiplyScalar(-this.distanceToPoint(t)).add(t)
		}
		intersectLine(t, e) {
			void 0 === e && (console.warn("THREE.Plane: .intersectLine() target is now required"), e = new we);
			const n = t.delta(Mn),
				i = this.normal.dot(n);
			if (0 === i) return 0 === this.distanceToPoint(t.start) ? e.copy(t.start) : void 0;
			const r = -(t.start.dot(this.normal) + this.constant) / i;
			return r < 0 || r > 1 ? void 0 : e.copy(n).multiplyScalar(r).add(t.start)
		}
		intersectsLine(t) {
			const e = this.distanceToPoint(t.start),
				n = this.distanceToPoint(t.end);
			return e < 0 && n > 0 || n < 0 && e > 0
		}
		intersectsBox(t) {
			return t.intersectsPlane(this)
		}
		intersectsSphere(t) {
			return t.intersectsPlane(this)
		}
		coplanarPoint(t) {
			return void 0 === t && (console.warn("THREE.Plane: .coplanarPoint() target is now required"), t = new we), t.copy(this.normal).multiplyScalar(-this.constant)
		}
		applyMatrix4(t, e) {
			const n = e || Tn.getNormalMatrix(t),
				i = this.coplanarPoint(Mn).applyMatrix4(t),
				r = this.normal.applyMatrix3(n).normalize();
			return this.constant = -i.dot(r), this
		}
		translate(t) {
			return this.constant -= t.dot(this.normal), this
		}
		equals(t) {
			return t.normal.equals(this.normal) && t.constant === this.constant
		}
	}
	const An = new we,
		Ln = new we,
		Cn = new we,
		Rn = new we,
		Pn = new we,
		Dn = new we,
		On = new we,
		In = new we,
		Nn = new we,
		zn = new we;
	class Bn {
		constructor(t, e, n) {
			this.a = void 0 !== t ? t : new we, this.b = void 0 !== e ? e : new we, this.c = void 0 !== n ? n : new we
		}
		static getNormal(t, e, n, i) {
			void 0 === i && (console.warn("THREE.Triangle: .getNormal() target is now required"), i = new we), i.subVectors(n, e), An.subVectors(t, e), i.cross(An);
			const r = i.lengthSq();
			return r > 0 ? i.multiplyScalar(1 / Math.sqrt(r)) : i.set(0, 0, 0)
		}
		static getBarycoord(t, e, n, i, r) {
			An.subVectors(i, e), Ln.subVectors(n, e), Cn.subVectors(t, e);
			const s = An.dot(An),
				o = An.dot(Ln),
				a = An.dot(Cn),
				c = Ln.dot(Ln),
				l = Ln.dot(Cn),
				h = s * c - o * o;
			if (void 0 === r && (console.warn("THREE.Triangle: .getBarycoord() target is now required"), r = new we), 0 === h) return r.set(-2, -1, -1);
			const u = 1 / h,
				d = (c * a - o * l) * u,
				p = (s * l - o * a) * u;
			return r.set(1 - d - p, p, d)
		}
		static containsPoint(t, e, n, i) {
			return this.getBarycoord(t, e, n, i, Rn), Rn.x >= 0 && Rn.y >= 0 && Rn.x + Rn.y <= 1
		}
		static getUV(t, e, n, i, r, s, o, a) {
			return this.getBarycoord(t, e, n, i, Rn), a.set(0, 0), a.addScaledVector(r, Rn.x), a.addScaledVector(s, Rn.y), a.addScaledVector(o, Rn.z), a
		}
		static isFrontFacing(t, e, n, i) {
			return An.subVectors(n, e), Ln.subVectors(t, e), An.cross(Ln).dot(i) < 0
		}
		set(t, e, n) {
			return this.a.copy(t), this.b.copy(e), this.c.copy(n), this
		}
		setFromPointsAndIndices(t, e, n, i) {
			return this.a.copy(t[e]), this.b.copy(t[n]), this.c.copy(t[i]), this
		}
		clone() {
			return (new this.constructor).copy(this)
		}
		copy(t) {
			return this.a.copy(t.a), this.b.copy(t.b), this.c.copy(t.c), this
		}
		getArea() {
			return An.subVectors(this.c, this.b), Ln.subVectors(this.a, this.b), .5 * An.cross(Ln).length()
		}
		getMidpoint(t) {
			return void 0 === t && (console.warn("THREE.Triangle: .getMidpoint() target is now required"), t = new we), t.addVectors(this.a, this.b).add(this.c).multiplyScalar(1 / 3)
		}
		getNormal(t) {
			return Bn.getNormal(this.a, this.b, this.c, t)
		}
		getPlane(t) {
			return void 0 === t && (console.warn("THREE.Triangle: .getPlane() target is now required"), t = new En), t.setFromCoplanarPoints(this.a, this.b, this.c)
		}
		getBarycoord(t, e) {
			return Bn.getBarycoord(t, this.a, this.b, this.c, e)
		}
		getUV(t, e, n, i, r) {
			return Bn.getUV(t, this.a, this.b, this.c, e, n, i, r)
		}
		containsPoint(t) {
			return Bn.containsPoint(t, this.a, this.b, this.c)
		}
		isFrontFacing(t) {
			return Bn.isFrontFacing(this.a, this.b, this.c, t)
		}
		intersectsBox(t) {
			return t.intersectsTriangle(this)
		}
		closestPointToPoint(t, e) {
			void 0 === e && (console.warn("THREE.Triangle: .closestPointToPoint() target is now required"), e = new we);
			const n = this.a,
				i = this.b,
				r = this.c;
			let s, o;
			Pn.subVectors(i, n), Dn.subVectors(r, n), In.subVectors(t, n);
			const a = Pn.dot(In),
				c = Dn.dot(In);
			if (a <= 0 && c <= 0) return e.copy(n);
			Nn.subVectors(t, i);
			const l = Pn.dot(Nn),
				h = Dn.dot(Nn);
			if (l >= 0 && h <= l) return e.copy(i);
			const u = a * h - l * c;
			if (u <= 0 && a >= 0 && l <= 0) return s = a / (a - l), e.copy(n).addScaledVector(Pn, s);
			zn.subVectors(t, r);
			const d = Pn.dot(zn),
				p = Dn.dot(zn);
			if (p >= 0 && d <= p) return e.copy(r);
			const f = d * c - a * p;
			if (f <= 0 && c >= 0 && p <= 0) return o = c / (c - p), e.copy(n).addScaledVector(Dn, o);
			const m = l * p - d * h;
			if (m <= 0 && h - l >= 0 && d - p >= 0) return On.subVectors(r, i), o = (h - l) / (h - l + (d - p)), e.copy(i).addScaledVector(On, o);
			const g = 1 / (m + f + u);
			return s = f * g, o = u * g, e.copy(n).addScaledVector(Pn, s).addScaledVector(Dn, o)
		}
		equals(t) {
			return t.a.equals(this.a) && t.b.equals(this.b) && t.c.equals(this.c)
		}
	}
	const Un = {
			aliceblue: 15792383,
			antiquewhite: 16444375,
			aqua: 65535,
			aquamarine: 8388564,
			azure: 15794175,
			beige: 16119260,
			bisque: 16770244,
			black: 0,
			blanchedalmond: 16772045,
			blue: 255,
			blueviolet: 9055202,
			brown: 10824234,
			burlywood: 14596231,
			cadetblue: 6266528,
			chartreuse: 8388352,
			chocolate: 13789470,
			coral: 16744272,
			cornflowerblue: 6591981,
			cornsilk: 16775388,
			crimson: 14423100,
			cyan: 65535,
			darkblue: 139,
			darkcyan: 35723,
			darkgoldenrod: 12092939,
			darkgray: 11119017,
			darkgreen: 25600,
			darkgrey: 11119017,
			darkkhaki: 12433259,
			darkmagenta: 9109643,
			darkolivegreen: 5597999,
			darkorange: 16747520,
			darkorchid: 10040012,
			darkred: 9109504,
			darksalmon: 15308410,
			darkseagreen: 9419919,
			darkslateblue: 4734347,
			darkslategray: 3100495,
			darkslategrey: 3100495,
			darkturquoise: 52945,
			darkviolet: 9699539,
			deeppink: 16716947,
			deepskyblue: 49151,
			dimgray: 6908265,
			dimgrey: 6908265,
			dodgerblue: 2003199,
			firebrick: 11674146,
			floralwhite: 16775920,
			forestgreen: 2263842,
			fuchsia: 16711935,
			gainsboro: 14474460,
			ghostwhite: 16316671,
			gold: 16766720,
			goldenrod: 14329120,
			gray: 8421504,
			green: 32768,
			greenyellow: 11403055,
			grey: 8421504,
			honeydew: 15794160,
			hotpink: 16738740,
			indianred: 13458524,
			indigo: 4915330,
			ivory: 16777200,
			khaki: 15787660,
			lavender: 15132410,
			lavenderblush: 16773365,
			lawngreen: 8190976,
			lemonchiffon: 16775885,
			lightblue: 11393254,
			lightcoral: 15761536,
			lightcyan: 14745599,
			lightgoldenrodyellow: 16448210,
			lightgray: 13882323,
			lightgreen: 9498256,
			lightgrey: 13882323,
			lightpink: 16758465,
			lightsalmon: 16752762,
			lightseagreen: 2142890,
			lightskyblue: 8900346,
			lightslategray: 7833753,
			lightslategrey: 7833753,
			lightsteelblue: 11584734,
			lightyellow: 16777184,
			lime: 65280,
			limegreen: 3329330,
			linen: 16445670,
			magenta: 16711935,
			maroon: 8388608,
			mediumaquamarine: 6737322,
			mediumblue: 205,
			mediumorchid: 12211667,
			mediumpurple: 9662683,
			mediumseagreen: 3978097,
			mediumslateblue: 8087790,
			mediumspringgreen: 64154,
			mediumturquoise: 4772300,
			mediumvioletred: 13047173,
			midnightblue: 1644912,
			mintcream: 16121850,
			mistyrose: 16770273,
			moccasin: 16770229,
			navajowhite: 16768685,
			navy: 128,
			oldlace: 16643558,
			olive: 8421376,
			olivedrab: 7048739,
			orange: 16753920,
			orangered: 16729344,
			orchid: 14315734,
			palegoldenrod: 15657130,
			palegreen: 10025880,
			paleturquoise: 11529966,
			palevioletred: 14381203,
			papayawhip: 16773077,
			peachpuff: 16767673,
			peru: 13468991,
			pink: 16761035,
			plum: 14524637,
			powderblue: 11591910,
			purple: 8388736,
			rebeccapurple: 6697881,
			red: 16711680,
			rosybrown: 12357519,
			royalblue: 4286945,
			saddlebrown: 9127187,
			salmon: 16416882,
			sandybrown: 16032864,
			seagreen: 3050327,
			seashell: 16774638,
			sienna: 10506797,
			silver: 12632256,
			skyblue: 8900331,
			slateblue: 6970061,
			slategray: 7372944,
			slategrey: 7372944,
			snow: 16775930,
			springgreen: 65407,
			steelblue: 4620980,
			tan: 13808780,
			teal: 32896,
			thistle: 14204888,
			tomato: 16737095,
			turquoise: 4251856,
			violet: 15631086,
			wheat: 16113331,
			white: 16777215,
			whitesmoke: 16119285,
			yellow: 16776960,
			yellowgreen: 10145074
		},
		Fn = {
			h: 0,
			s: 0,
			l: 0
		},
		Hn = {
			h: 0,
			s: 0,
			l: 0
		};

	function kn(t, e, n) {
		return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? t + 6 * (e - t) * n : n < .5 ? e : n < 2 / 3 ? t + 6 * (e - t) * (2 / 3 - n) : t
	}

	function Gn(t) {
		return t < .04045 ? .0773993808 * t : Math.pow(.9478672986 * t + .0521327014, 2.4)
	}

	function jn(t) {
		return t < .0031308 ? 12.92 * t : 1.055 * Math.pow(t, .41666) - .055
	}
	class Vn {
		constructor(t, e, n) {
			return Object.defineProperty(this, "isColor", {
				value: !0
			}), void 0 === e && void 0 === n ? this.set(t) : this.setRGB(t, e, n)
		}
		set(t) {
			return t && t.isColor ? this.copy(t) : "number" == typeof t ? this.setHex(t) : "string" == typeof t && this.setStyle(t), this
		}
		setScalar(t) {
			return this.r = t, this.g = t, this.b = t, this
		}
		setHex(t) {
			return t = Math.floor(t), this.r = (t >> 16 & 255) / 255, this.g = (t >> 8 & 255) / 255, this.b = (255 & t) / 255, this
		}
		setRGB(t, e, n) {
			return this.r = t, this.g = e, this.b = n, this
		}
		setHSL(t, e, n) {
			if (t = ue.euclideanModulo(t, 1), e = ue.clamp(e, 0, 1), n = ue.clamp(n, 0, 1), 0 === e) this.r = this.g = this.b = n;
			else {
				const i = n <= .5 ? n * (1 + e) : n + e - n * e,
					r = 2 * n - i;
				this.r = kn(r, i, t + 1 / 3), this.g = kn(r, i, t), this.b = kn(r, i, t - 1 / 3)
			}
			return this
		}
		setStyle(t) {
			function e(e) {
				void 0 !== e && parseFloat(e) < 1 && console.warn("THREE.Color: Alpha component of " + t + " will be ignored.")
			}
			let n;
			if (n = /^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(t)) {
				let t;
				const i = n[1],
					r = n[2];
				switch (i) {
					case "rgb":
					case "rgba":
						if (t = /^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(r)) return this.r = Math.min(255, parseInt(t[1], 10)) / 255, this.g = Math.min(255, parseInt(t[2], 10)) / 255, this.b = Math.min(255, parseInt(t[3], 10)) / 255, e(t[4]), this;
						if (t = /^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(r)) return this.r = Math.min(100, parseInt(t[1], 10)) / 100, this.g = Math.min(100, parseInt(t[2], 10)) / 100, this.b = Math.min(100, parseInt(t[3], 10)) / 100, e(t[4]), this;
						break;
					case "hsl":
					case "hsla":
						if (t = /^\s*(\d*\.?\d+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(r)) {
							const n = parseFloat(t[1]) / 360,
								i = parseInt(t[2], 10) / 100,
								r = parseInt(t[3], 10) / 100;
							return e(t[4]), this.setHSL(n, i, r)
						}
				}
			} else if (n = /^\#([A-Fa-f\d]+)$/.exec(t)) {
				const t = n[1],
					e = t.length;
				if (3 === e) return this.r = parseInt(t.charAt(0) + t.charAt(0), 16) / 255, this.g = parseInt(t.charAt(1) + t.charAt(1), 16) / 255, this.b = parseInt(t.charAt(2) + t.charAt(2), 16) / 255, this;
				if (6 === e) return this.r = parseInt(t.charAt(0) + t.charAt(1), 16) / 255, this.g = parseInt(t.charAt(2) + t.charAt(3), 16) / 255, this.b = parseInt(t.charAt(4) + t.charAt(5), 16) / 255, this
			}
			return t && t.length > 0 ? this.setColorName(t) : this
		}
		setColorName(t) {
			const e = Un[t];
			return void 0 !== e ? this.setHex(e) : console.warn("THREE.Color: Unknown color " + t), this
		}
		clone() {
			return new this.constructor(this.r, this.g, this.b)
		}
		copy(t) {
			return this.r = t.r, this.g = t.g, this.b = t.b, this
		}
		copyGammaToLinear(t, e = 2) {
			return this.r = Math.pow(t.r, e), this.g = Math.pow(t.g, e), this.b = Math.pow(t.b, e), this
		}
		copyLinearToGamma(t, e = 2) {
			const n = e > 0 ? 1 / e : 1;
			return this.r = Math.pow(t.r, n), this.g = Math.pow(t.g, n), this.b = Math.pow(t.b, n), this
		}
		convertGammaToLinear(t) {
			return this.copyGammaToLinear(this, t), this
		}
		convertLinearToGamma(t) {
			return this.copyLinearToGamma(this, t), this
		}
		copySRGBToLinear(t) {
			return this.r = Gn(t.r), this.g = Gn(t.g), this.b = Gn(t.b), this
		}
		copyLinearToSRGB(t) {
			return this.r = jn(t.r), this.g = jn(t.g), this.b = jn(t.b), this
		}
		convertSRGBToLinear() {
			return this.copySRGBToLinear(this), this
		}
		convertLinearToSRGB() {
			return this.copyLinearToSRGB(this), this
		}
		getHex() {
			return 255 * this.r << 16 ^ 255 * this.g << 8 ^ 255 * this.b << 0
		}
		getHexString() {
			return ("000000" + this.getHex().toString(16)).slice(-6)
		}
		getHSL(t) {
			void 0 === t && (console.warn("THREE.Color: .getHSL() target is now required"), t = {
				h: 0,
				s: 0,
				l: 0
			});
			const e = this.r,
				n = this.g,
				i = this.b,
				r = Math.max(e, n, i),
				s = Math.min(e, n, i);
			let o, a;
			const c = (s + r) / 2;
			if (s === r) o = 0, a = 0;
			else {
				const t = r - s;
				switch (a = c <= .5 ? t / (r + s) : t / (2 - r - s), r) {
					case e:
						o = (n - i) / t + (n < i ? 6 : 0);
						break;
					case n:
						o = (i - e) / t + 2;
						break;
					case i:
						o = (e - n) / t + 4
				}
				o /= 6
			}
			return t.h = o, t.s = a, t.l = c, t
		}
		getStyle() {
			return "rgb(" + (255 * this.r | 0) + "," + (255 * this.g | 0) + "," + (255 * this.b | 0) + ")"
		}
		offsetHSL(t, e, n) {
			return this.getHSL(Fn), Fn.h += t, Fn.s += e, Fn.l += n, this.setHSL(Fn.h, Fn.s, Fn.l), this
		}
		add(t) {
			return this.r += t.r, this.g += t.g, this.b += t.b, this
		}
		addColors(t, e) {
			return this.r = t.r + e.r, this.g = t.g + e.g, this.b = t.b + e.b, this
		}
		addScalar(t) {
			return this.r += t, this.g += t, this.b += t, this
		}
		sub(t) {
			return this.r = Math.max(0, this.r - t.r), this.g = Math.max(0, this.g - t.g), this.b = Math.max(0, this.b - t.b), this
		}
		multiply(t) {
			return this.r *= t.r, this.g *= t.g, this.b *= t.b, this
		}
		multiplyScalar(t) {
			return this.r *= t, this.g *= t, this.b *= t, this
		}
		lerp(t, e) {
			return this.r += (t.r - this.r) * e, this.g += (t.g - this.g) * e, this.b += (t.b - this.b) * e, this
		}
		lerpColors(t, e, n) {
			return this.r = t.r + (e.r - t.r) * n, this.g = t.g + (e.g - t.g) * n, this.b = t.b + (e.b - t.b) * n, this
		}
		lerpHSL(t, e) {
			this.getHSL(Fn), t.getHSL(Hn);
			const n = ue.lerp(Fn.h, Hn.h, e),
				i = ue.lerp(Fn.s, Hn.s, e),
				r = ue.lerp(Fn.l, Hn.l, e);
			return this.setHSL(n, i, r), this
		}
		equals(t) {
			return t.r === this.r && t.g === this.g && t.b === this.b
		}
		fromArray(t, e = 0) {
			return this.r = t[e], this.g = t[e + 1], this.b = t[e + 2], this
		}
		toArray(t = [], e = 0) {
			return t[e] = this.r, t[e + 1] = this.g, t[e + 2] = this.b, t
		}
		fromBufferAttribute(t, e) {
			return this.r = t.getX(e), this.g = t.getY(e), this.b = t.getZ(e), !0 === t.normalized && (this.r /= 255, this.g /= 255, this.b /= 255), this
		}
		toJSON() {
			return this.getHex()
		}
	}
	Vn.NAMES = Un, Vn.prototype.r = 1, Vn.prototype.g = 1, Vn.prototype.b = 1;
	class Wn {
		constructor(t, e, n, i, r, s = 0) {
			this.a = t, this.b = e, this.c = n, this.normal = i && i.isVector3 ? i : new we, this.vertexNormals = Array.isArray(i) ? i : [], this.color = r && r.isColor ? r : new Vn, this.vertexColors = Array.isArray(r) ? r : [], this.materialIndex = s
		}
		clone() {
			return (new this.constructor).copy(this)
		}
		copy(t) {
			this.a = t.a, this.b = t.b, this.c = t.c, this.normal.copy(t.normal), this.color.copy(t.color), this.materialIndex = t.materialIndex;
			for (let e = 0, n = t.vertexNormals.length; e < n; e++) this.vertexNormals[e] = t.vertexNormals[e].clone();
			for (let e = 0, n = t.vertexColors.length; e < n; e++) this.vertexColors[e] = t.vertexColors[e].clone();
			return this
		}
	}
	let $n = 0;

	function qn() {
		Object.defineProperty(this, "id", {
			value: $n++
		}), this.uuid = ue.generateUUID(), this.name = "", this.type = "Material", this.fog = !0, this.blending = 1, this.side = 0, this.flatShading = !1, this.vertexColors = !1, this.opacity = 1, this.transparent = !1, this.blendSrc = 204, this.blendDst = 205, this.blendEquation = Ot, this.blendSrcAlpha = null, this.blendDstAlpha = null, this.blendEquationAlpha = null, this.depthFunc = 3, this.depthTest = !0, this.depthWrite = !0, this.stencilWriteMask = 255, this.stencilFunc = 519, this.stencilRef = 0, this.stencilFuncMask = 255, this.stencilFail = re, this.stencilZFail = re, this.stencilZPass = re, this.stencilWrite = !1, this.clippingPlanes = null, this.clipIntersection = !1, this.clipShadows = !1, this.shadowSide = null, this.colorWrite = !0, this.precision = null, this.polygonOffset = !1, this.polygonOffsetFactor = 0, this.polygonOffsetUnits = 0, this.dithering = !1, this.alphaTest = 0, this.premultipliedAlpha = !1, this.visible = !0, this.toneMapped = !0, this.userData = {}, this.version = 0
	}

	function Xn(t) {
		qn.call(this), this.type = "MeshBasicMaterial", this.color = new Vn(16777215), this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.combine = 0, this.reflectivity = 1, this.refractionRatio = .98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.skinning = !1, this.morphTargets = !1, this.setValues(t)
	}
	qn.prototype = Object.assign(Object.create(ce.prototype), {
		constructor: qn,
		isMaterial: !0,
		onBeforeCompile: function() {},
		customProgramCacheKey: function() {
			return this.onBeforeCompile.toString()
		},
		setValues: function(t) {
			if (void 0 !== t)
				for (const e in t) {
					const n = t[e];
					if (void 0 === n) {
						console.warn("THREE.Material: '" + e + "' parameter is undefined.");
						continue
					}
					if ("shading" === e) {
						console.warn("THREE." + this.type + ": .shading has been removed. Use the boolean .flatShading instead."), this.flatShading = 1 === n;
						continue
					}
					const i = this[e];
					void 0 !== i ? i && i.isColor ? i.set(n) : i && i.isVector3 && n && n.isVector3 ? i.copy(n) : this[e] = n : console.warn("THREE." + this.type + ": '" + e + "' is not a property of this material.")
				}
		},
		toJSON: function(t) {
			const e = void 0 === t || "string" == typeof t;
			e && (t = {
				textures: {},
				images: {}
			});
			const n = {
				metadata: {
					version: 4.5,
					type: "Material",
					generator: "Material.toJSON"
				}
			};

			function i(t) {
				const e = [];
				for (const n in t) {
					const i = t[n];
					delete i.metadata, e.push(i)
				}
				return e
			}
			if (n.uuid = this.uuid, n.type = this.type, "" !== this.name && (n.name = this.name), this.color && this.color.isColor && (n.color = this.color.getHex()), void 0 !== this.roughness && (n.roughness = this.roughness), void 0 !== this.metalness && (n.metalness = this.metalness), this.sheen && this.sheen.isColor && (n.sheen = this.sheen.getHex()), this.emissive && this.emissive.isColor && (n.emissive = this.emissive.getHex()), this.emissiveIntensity && 1 !== this.emissiveIntensity && (n.emissiveIntensity = this.emissiveIntensity), this.specular && this.specular.isColor && (n.specular = this.specular.getHex()), void 0 !== this.shininess && (n.shininess = this.shininess), void 0 !== this.clearcoat && (n.clearcoat = this.clearcoat), void 0 !== this.clearcoatRoughness && (n.clearcoatRoughness = this.clearcoatRoughness), this.clearcoatMap && this.clearcoatMap.isTexture && (n.clearcoatMap = this.clearcoatMap.toJSON(t).uuid), this.clearcoatRoughnessMap && this.clearcoatRoughnessMap.isTexture && (n.clearcoatRoughnessMap = this.clearcoatRoughnessMap.toJSON(t).uuid), this.clearcoatNormalMap && this.clearcoatNormalMap.isTexture && (n.clearcoatNormalMap = this.clearcoatNormalMap.toJSON(t).uuid, n.clearcoatNormalScale = this.clearcoatNormalScale.toArray()), this.map && this.map.isTexture && (n.map = this.map.toJSON(t).uuid), this.matcap && this.matcap.isTexture && (n.matcap = this.matcap.toJSON(t).uuid), this.alphaMap && this.alphaMap.isTexture && (n.alphaMap = this.alphaMap.toJSON(t).uuid), this.lightMap && this.lightMap.isTexture && (n.lightMap = this.lightMap.toJSON(t).uuid), this.aoMap && this.aoMap.isTexture && (n.aoMap = this.aoMap.toJSON(t).uuid, n.aoMapIntensity = this.aoMapIntensity), this.bumpMap && this.bumpMap.isTexture && (n.bumpMap = this.bumpMap.toJSON(t).uuid, n.bumpScale = this.bumpScale), this.normalMap && this.normalMap.isTexture && (n.normalMap = this.normalMap.toJSON(t).uuid, n.normalMapType = this.normalMapType, n.normalScale = this.normalScale.toArray()), this.displacementMap && this.displacementMap.isTexture && (n.displacementMap = this.displacementMap.toJSON(t).uuid, n.displacementScale = this.displacementScale, n.displacementBias = this.displacementBias), this.roughnessMap && this.roughnessMap.isTexture && (n.roughnessMap = this.roughnessMap.toJSON(t).uuid), this.metalnessMap && this.metalnessMap.isTexture && (n.metalnessMap = this.metalnessMap.toJSON(t).uuid), this.emissiveMap && this.emissiveMap.isTexture && (n.emissiveMap = this.emissiveMap.toJSON(t).uuid), this.specularMap && this.specularMap.isTexture && (n.specularMap = this.specularMap.toJSON(t).uuid), this.envMap && this.envMap.isTexture && (n.envMap = this.envMap.toJSON(t).uuid, n.reflectivity = this.reflectivity, n.refractionRatio = this.refractionRatio, void 0 !== this.combine && (n.combine = this.combine), void 0 !== this.envMapIntensity && (n.envMapIntensity = this.envMapIntensity)), this.gradientMap && this.gradientMap.isTexture && (n.gradientMap = this.gradientMap.toJSON(t).uuid), void 0 !== this.size && (n.size = this.size), void 0 !== this.sizeAttenuation && (n.sizeAttenuation = this.sizeAttenuation), 1 !== this.blending && (n.blending = this.blending), !0 === this.flatShading && (n.flatShading = this.flatShading), 0 !== this.side && (n.side = this.side), this.vertexColors && (n.vertexColors = !0), this.opacity < 1 && (n.opacity = this.opacity), !0 === this.transparent && (n.transparent = this.transparent), n.depthFunc = this.depthFunc, n.depthTest = this.depthTest, n.depthWrite = this.depthWrite, n.stencilWrite = this.stencilWrite, n.stencilWriteMask = this.stencilWriteMask, n.stencilFunc = this.stencilFunc, n.stencilRef = this.stencilRef, n.stencilFuncMask = this.stencilFuncMask, n.stencilFail = this.stencilFail, n.stencilZFail = this.stencilZFail, n.stencilZPass = this.stencilZPass, this.rotation && 0 !== this.rotation && (n.rotation = this.rotation), !0 === this.polygonOffset && (n.polygonOffset = !0), 0 !== this.polygonOffsetFactor && (n.polygonOffsetFactor = this.polygonOffsetFactor), 0 !== this.polygonOffsetUnits && (n.polygonOffsetUnits = this.polygonOffsetUnits), this.linewidth && 1 !== this.linewidth && (n.linewidth = this.linewidth), void 0 !== this.dashSize && (n.dashSize = this.dashSize), void 0 !== this.gapSize && (n.gapSize = this.gapSize), void 0 !== this.scale && (n.scale = this.scale), !0 === this.dithering && (n.dithering = !0), this.alphaTest > 0 && (n.alphaTest = this.alphaTest), !0 === this.premultipliedAlpha && (n.premultipliedAlpha = this.premultipliedAlpha), !0 === this.wireframe && (n.wireframe = this.wireframe), this.wireframeLinewidth > 1 && (n.wireframeLinewidth = this.wireframeLinewidth), "round" !== this.wireframeLinecap && (n.wireframeLinecap = this.wireframeLinecap), "round" !== this.wireframeLinejoin && (n.wireframeLinejoin = this.wireframeLinejoin), !0 === this.morphTargets && (n.morphTargets = !0), !0 === this.morphNormals && (n.morphNormals = !0), !0 === this.skinning && (n.skinning = !0), !1 === this.visible && (n.visible = !1), !1 === this.toneMapped && (n.toneMapped = !1), "{}" !== JSON.stringify(this.userData) && (n.userData = this.userData), e) {
				const e = i(t.textures),
					r = i(t.images);
				e.length > 0 && (n.textures = e), r.length > 0 && (n.images = r)
			}
			return n
		},
		clone: function() {
			return (new this.constructor).copy(this)
		},
		copy: function(t) {
			this.name = t.name, this.fog = t.fog, this.blending = t.blending, this.side = t.side, this.flatShading = t.flatShading, this.vertexColors = t.vertexColors, this.opacity = t.opacity, this.transparent = t.transparent, this.blendSrc = t.blendSrc, this.blendDst = t.blendDst, this.blendEquation = t.blendEquation, this.blendSrcAlpha = t.blendSrcAlpha, this.blendDstAlpha = t.blendDstAlpha, this.blendEquationAlpha = t.blendEquationAlpha, this.depthFunc = t.depthFunc, this.depthTest = t.depthTest, this.depthWrite = t.depthWrite, this.stencilWriteMask = t.stencilWriteMask, this.stencilFunc = t.stencilFunc, this.stencilRef = t.stencilRef, this.stencilFuncMask = t.stencilFuncMask, this.stencilFail = t.stencilFail, this.stencilZFail = t.stencilZFail, this.stencilZPass = t.stencilZPass, this.stencilWrite = t.stencilWrite;
			const e = t.clippingPlanes;
			let n = null;
			if (null !== e) {
				const t = e.length;
				n = new Array(t);
				for (let i = 0; i !== t; ++i) n[i] = e[i].clone()
			}
			return this.clippingPlanes = n, this.clipIntersection = t.clipIntersection, this.clipShadows = t.clipShadows, this.shadowSide = t.shadowSide, this.colorWrite = t.colorWrite, this.precision = t.precision, this.polygonOffset = t.polygonOffset, this.polygonOffsetFactor = t.polygonOffsetFactor, this.polygonOffsetUnits = t.polygonOffsetUnits, this.dithering = t.dithering, this.alphaTest = t.alphaTest, this.premultipliedAlpha = t.premultipliedAlpha, this.visible = t.visible, this.toneMapped = t.toneMapped, this.userData = JSON.parse(JSON.stringify(t.userData)), this
		},
		dispose: function() {
			this.dispatchEvent({
				type: "dispose"
			})
		}
	}), Object.defineProperty(qn.prototype, "needsUpdate", {
		set: function(t) {
			!0 === t && this.version++
		}
	}), Xn.prototype = Object.create(qn.prototype), Xn.prototype.constructor = Xn, Xn.prototype.isMeshBasicMaterial = !0, Xn.prototype.copy = function(t) {
		return qn.prototype.copy.call(this, t), this.color.copy(t.color), this.map = t.map, this.lightMap = t.lightMap, this.lightMapIntensity = t.lightMapIntensity, this.aoMap = t.aoMap, this.aoMapIntensity = t.aoMapIntensity, this.specularMap = t.specularMap, this.alphaMap = t.alphaMap, this.envMap = t.envMap, this.combine = t.combine, this.reflectivity = t.reflectivity, this.refractionRatio = t.refractionRatio, this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this.wireframeLinecap = t.wireframeLinecap, this.wireframeLinejoin = t.wireframeLinejoin, this.skinning = t.skinning, this.morphTargets = t.morphTargets, this
	};
	const Yn = new we,
		Zn = new de;

	function Jn(t, e, n) {
		if (Array.isArray(t)) throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");
		this.name = "", this.array = t, this.itemSize = e, this.count = void 0 !== t ? t.length / e : 0, this.normalized = !0 === n, this.usage = se, this.updateRange = {
			offset: 0,
			count: -1
		}, this.version = 0
	}

	function Qn(t, e, n) {
		Jn.call(this, new Int8Array(t), e, n)
	}

	function Kn(t, e, n) {
		Jn.call(this, new Uint8Array(t), e, n)
	}

	function ti(t, e, n) {
		Jn.call(this, new Uint8ClampedArray(t), e, n)
	}

	function ei(t, e, n) {
		Jn.call(this, new Int16Array(t), e, n)
	}

	function ni(t, e, n) {
		Jn.call(this, new Uint16Array(t), e, n)
	}

	function ii(t, e, n) {
		Jn.call(this, new Int32Array(t), e, n)
	}

	function ri(t, e, n) {
		Jn.call(this, new Uint32Array(t), e, n)
	}

	function si(t, e, n) {
		Jn.call(this, new Uint16Array(t), e, n)
	}

	function oi(t, e, n) {
		Jn.call(this, new Float32Array(t), e, n)
	}

	function ai(t, e, n) {
		Jn.call(this, new Float64Array(t), e, n)
	}

	function ci(t) {
		if (0 === t.length) return -1 / 0;
		let e = t[0];
		for (let n = 1, i = t.length; n < i; ++n) t[n] > e && (e = t[n]);
		return e
	}
	Object.defineProperty(Jn.prototype, "needsUpdate", {
		set: function(t) {
			!0 === t && this.version++
		}
	}), Object.assign(Jn.prototype, {
		isBufferAttribute: !0,
		onUploadCallback: function() {},
		setUsage: function(t) {
			return this.usage = t, this
		},
		copy: function(t) {
			return this.name = t.name, this.array = new t.array.constructor(t.array), this.itemSize = t.itemSize, this.count = t.count, this.normalized = t.normalized, this.usage = t.usage, this
		},
		copyAt: function(t, e, n) {
			t *= this.itemSize, n *= e.itemSize;
			for (let i = 0, r = this.itemSize; i < r; i++) this.array[t + i] = e.array[n + i];
			return this
		},
		copyArray: function(t) {
			return this.array.set(t), this
		},
		copyColorsArray: function(t) {
			const e = this.array;
			let n = 0;
			for (let i = 0, r = t.length; i < r; i++) {
				let r = t[i];
				void 0 === r && (console.warn("THREE.BufferAttribute.copyColorsArray(): color is undefined", i), r = new Vn), e[n++] = r.r, e[n++] = r.g, e[n++] = r.b
			}
			return this
		},
		copyVector2sArray: function(t) {
			const e = this.array;
			let n = 0;
			for (let i = 0, r = t.length; i < r; i++) {
				let r = t[i];
				void 0 === r && (console.warn("THREE.BufferAttribute.copyVector2sArray(): vector is undefined", i), r = new de), e[n++] = r.x, e[n++] = r.y
			}
			return this
		},
		copyVector3sArray: function(t) {
			const e = this.array;
			let n = 0;
			for (let i = 0, r = t.length; i < r; i++) {
				let r = t[i];
				void 0 === r && (console.warn("THREE.BufferAttribute.copyVector3sArray(): vector is undefined", i), r = new we), e[n++] = r.x, e[n++] = r.y, e[n++] = r.z
			}
			return this
		},
		copyVector4sArray: function(t) {
			const e = this.array;
			let n = 0;
			for (let i = 0, r = t.length; i < r; i++) {
				let r = t[i];
				void 0 === r && (console.warn("THREE.BufferAttribute.copyVector4sArray(): vector is undefined", i), r = new xe), e[n++] = r.x, e[n++] = r.y, e[n++] = r.z, e[n++] = r.w
			}
			return this
		},
		applyMatrix3: function(t) {
			if (2 === this.itemSize)
				for (let e = 0, n = this.count; e < n; e++) Zn.fromBufferAttribute(this, e), Zn.applyMatrix3(t), this.setXY(e, Zn.x, Zn.y);
			else if (3 === this.itemSize)
				for (let e = 0, n = this.count; e < n; e++) Yn.fromBufferAttribute(this, e), Yn.applyMatrix3(t), this.setXYZ(e, Yn.x, Yn.y, Yn.z);
			return this
		},
		applyMatrix4: function(t) {
			for (let e = 0, n = this.count; e < n; e++) Yn.x = this.getX(e), Yn.y = this.getY(e), Yn.z = this.getZ(e), Yn.applyMatrix4(t), this.setXYZ(e, Yn.x, Yn.y, Yn.z);
			return this
		},
		applyNormalMatrix: function(t) {
			for (let e = 0, n = this.count; e < n; e++) Yn.x = this.getX(e), Yn.y = this.getY(e), Yn.z = this.getZ(e), Yn.applyNormalMatrix(t), this.setXYZ(e, Yn.x, Yn.y, Yn.z);
			return this
		},
		transformDirection: function(t) {
			for (let e = 0, n = this.count; e < n; e++) Yn.x = this.getX(e), Yn.y = this.getY(e), Yn.z = this.getZ(e), Yn.transformDirection(t), this.setXYZ(e, Yn.x, Yn.y, Yn.z);
			return this
		},
		set: function(t, e = 0) {
			return this.array.set(t, e), this
		},
		getX: function(t) {
			return this.array[t * this.itemSize]
		},
		setX: function(t, e) {
			return this.array[t * this.itemSize] = e, this
		},
		getY: function(t) {
			return this.array[t * this.itemSize + 1]
		},
		setY: function(t, e) {
			return this.array[t * this.itemSize + 1] = e, this
		},
		getZ: function(t) {
			return this.array[t * this.itemSize + 2]
		},
		setZ: function(t, e) {
			return this.array[t * this.itemSize + 2] = e, this
		},
		getW: function(t) {
			return this.array[t * this.itemSize + 3]
		},
		setW: function(t, e) {
			return this.array[t * this.itemSize + 3] = e, this
		},
		setXY: function(t, e, n) {
			return t *= this.itemSize, this.array[t + 0] = e, this.array[t + 1] = n, this
		},
		setXYZ: function(t, e, n, i) {
			return t *= this.itemSize, this.array[t + 0] = e, this.array[t + 1] = n, this.array[t + 2] = i, this
		},
		setXYZW: function(t, e, n, i, r) {
			return t *= this.itemSize, this.array[t + 0] = e, this.array[t + 1] = n, this.array[t + 2] = i, this.array[t + 3] = r, this
		},
		onUpload: function(t) {
			return this.onUploadCallback = t, this
		},
		clone: function() {
			return new this.constructor(this.array, this.itemSize).copy(this)
		},
		toJSON: function() {
			return {
				itemSize: this.itemSize,
				type: this.array.constructor.name,
				array: Array.prototype.slice.call(this.array),
				normalized: this.normalized
			}
		}
	}), Qn.prototype = Object.create(Jn.prototype), Qn.prototype.constructor = Qn, Kn.prototype = Object.create(Jn.prototype), Kn.prototype.constructor = Kn, ti.prototype = Object.create(Jn.prototype), ti.prototype.constructor = ti, ei.prototype = Object.create(Jn.prototype), ei.prototype.constructor = ei, ni.prototype = Object.create(Jn.prototype), ni.prototype.constructor = ni, ii.prototype = Object.create(Jn.prototype), ii.prototype.constructor = ii, ri.prototype = Object.create(Jn.prototype), ri.prototype.constructor = ri, si.prototype = Object.create(Jn.prototype), si.prototype.constructor = si, si.prototype.isFloat16BufferAttribute = !0, oi.prototype = Object.create(Jn.prototype), oi.prototype.constructor = oi, ai.prototype = Object.create(Jn.prototype), ai.prototype.constructor = ai;
	const li = {
		Int8Array: Int8Array,
		Uint8Array: Uint8Array,
		Uint8ClampedArray: "undefined" != typeof Uint8ClampedArray ? Uint8ClampedArray : Uint8Array,
		Int16Array: Int16Array,
		Uint16Array: Uint16Array,
		Int32Array: Int32Array,
		Uint32Array: Uint32Array,
		Float32Array: Float32Array,
		Float64Array: Float64Array
	};

	function hi(t, e) {
		return new li[t](e)
	}
	let ui = 0;
	const di = new Ze,
		pi = new wn,
		fi = new we,
		mi = new Te,
		gi = new Te,
		vi = new we;

	function yi() {
		Object.defineProperty(this, "id", {
			value: ui++
		}), this.uuid = ue.generateUUID(), this.name = "", this.type = "BufferGeometry", this.index = null, this.attributes = {}, this.morphAttributes = {}, this.morphTargetsRelative = !1, this.groups = [], this.boundingBox = null, this.boundingSphere = null, this.drawRange = {
			start: 0,
			count: 1 / 0
		}, this.userData = {}
	}
	yi.prototype = Object.assign(Object.create(ce.prototype), {
		constructor: yi,
		isBufferGeometry: !0,
		getIndex: function() {
			return this.index
		},
		setIndex: function(t) {
			return Array.isArray(t) ? this.index = new(ci(t) > 65535 ? ri : ni)(t, 1) : this.index = t, this
		},
		getAttribute: function(t) {
			return this.attributes[t]
		},
		setAttribute: function(t, e) {
			return this.attributes[t] = e, this
		},
		deleteAttribute: function(t) {
			return delete this.attributes[t], this
		},
		hasAttribute: function(t) {
			return void 0 !== this.attributes[t]
		},
		addGroup: function(t, e, n = 0) {
			this.groups.push({
				start: t,
				count: e,
				materialIndex: n
			})
		},
		clearGroups: function() {
			this.groups = []
		},
		setDrawRange: function(t, e) {
			this.drawRange.start = t, this.drawRange.count = e
		},
		applyMatrix4: function(t) {
			const e = this.attributes.position;
			void 0 !== e && (e.applyMatrix4(t), e.needsUpdate = !0);
			const n = this.attributes.normal;
			if (void 0 !== n) {
				const e = (new pe).getNormalMatrix(t);
				n.applyNormalMatrix(e), n.needsUpdate = !0
			}
			const i = this.attributes.tangent;
			return void 0 !== i && (i.transformDirection(t), i.needsUpdate = !0), null !== this.boundingBox && this.computeBoundingBox(), null !== this.boundingSphere && this.computeBoundingSphere(), this
		},
		rotateX: function(t) {
			return di.makeRotationX(t), this.applyMatrix4(di), this
		},
		rotateY: function(t) {
			return di.makeRotationY(t), this.applyMatrix4(di), this
		},
		rotateZ: function(t) {
			return di.makeRotationZ(t), this.applyMatrix4(di), this
		},
		translate: function(t, e, n) {
			return di.makeTranslation(t, e, n), this.applyMatrix4(di), this
		},
		scale: function(t, e, n) {
			return di.makeScale(t, e, n), this.applyMatrix4(di), this
		},
		lookAt: function(t) {
			return pi.lookAt(t), pi.updateMatrix(), this.applyMatrix4(pi.matrix), this
		},
		center: function() {
			return this.computeBoundingBox(), this.boundingBox.getCenter(fi).negate(), this.translate(fi.x, fi.y, fi.z), this
		},
		setFromPoints: function(t) {
			const e = [];
			for (let n = 0, i = t.length; n < i; n++) {
				const i = t[n];
				e.push(i.x, i.y, i.z || 0)
			}
			return this.setAttribute("position", new oi(e, 3)), this
		},
		computeBoundingBox: function() {
			null === this.boundingBox && (this.boundingBox = new Te);
			const t = this.attributes.position,
				e = this.morphAttributes.position;
			if (t && t.isGLBufferAttribute) return console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".', this), void this.boundingBox.set(new we(-1 / 0, -1 / 0, -1 / 0), new we(1 / 0, 1 / 0, 1 / 0));
			if (void 0 !== t) {
				if (this.boundingBox.setFromBufferAttribute(t), e)
					for (let t = 0, n = e.length; t < n; t++) {
						const n = e[t];
						mi.setFromBufferAttribute(n), this.morphTargetsRelative ? (vi.addVectors(this.boundingBox.min, mi.min), this.boundingBox.expandByPoint(vi), vi.addVectors(this.boundingBox.max, mi.max), this.boundingBox.expandByPoint(vi)) : (this.boundingBox.expandByPoint(mi.min), this.boundingBox.expandByPoint(mi.max))
					}
			} else this.boundingBox.makeEmpty();
			(isNaN(this.boundingBox.min.x) || isNaN(this.boundingBox.min.y) || isNaN(this.boundingBox.min.z)) && console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.', this)
		},
		computeBoundingSphere: function() {
			null === this.boundingSphere && (this.boundingSphere = new ke);
			const t = this.attributes.position,
				e = this.morphAttributes.position;
			if (t && t.isGLBufferAttribute) return console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".', this), void this.boundingSphere.set(new we, 1 / 0);
			if (t) {
				const n = this.boundingSphere.center;
				if (mi.setFromBufferAttribute(t), e)
					for (let t = 0, n = e.length; t < n; t++) {
						const n = e[t];
						gi.setFromBufferAttribute(n), this.morphTargetsRelative ? (vi.addVectors(mi.min, gi.min), mi.expandByPoint(vi), vi.addVectors(mi.max, gi.max), mi.expandByPoint(vi)) : (mi.expandByPoint(gi.min), mi.expandByPoint(gi.max))
					}
				mi.getCenter(n);
				let i = 0;
				for (let e = 0, r = t.count; e < r; e++) vi.fromBufferAttribute(t, e), i = Math.max(i, n.distanceToSquared(vi));
				if (e)
					for (let r = 0, s = e.length; r < s; r++) {
						const s = e[r],
							o = this.morphTargetsRelative;
						for (let e = 0, r = s.count; e < r; e++) vi.fromBufferAttribute(s, e), o && (fi.fromBufferAttribute(t, e), vi.add(fi)), i = Math.max(i, n.distanceToSquared(vi))
					}
				this.boundingSphere.radius = Math.sqrt(i), isNaN(this.boundingSphere.radius) && console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.', this)
			}
		},
		computeFaceNormals: function() {},
		computeTangents: function() {
			const t = this.index,
				e = this.attributes;
			if (null === t || void 0 === e.position || void 0 === e.normal || void 0 === e.uv) return void console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");
			const n = t.array,
				i = e.position.array,
				r = e.normal.array,
				s = e.uv.array,
				o = i.length / 3;
			void 0 === e.tangent && this.setAttribute("tangent", new Jn(new Float32Array(4 * o), 4));
			const a = e.tangent.array,
				c = [],
				l = [];
			for (let t = 0; t < o; t++) c[t] = new we, l[t] = new we;
			const h = new we,
				u = new we,
				d = new we,
				p = new de,
				f = new de,
				m = new de,
				g = new we,
				v = new we;

			function y(t, e, n) {
				h.fromArray(i, 3 * t), u.fromArray(i, 3 * e), d.fromArray(i, 3 * n), p.fromArray(s, 2 * t), f.fromArray(s, 2 * e), m.fromArray(s, 2 * n), u.sub(h), d.sub(h), f.sub(p), m.sub(p);
				const r = 1 / (f.x * m.y - m.x * f.y);
				isFinite(r) && (g.copy(u).multiplyScalar(m.y).addScaledVector(d, -f.y).multiplyScalar(r), v.copy(d).multiplyScalar(f.x).addScaledVector(u, -m.x).multiplyScalar(r), c[t].add(g), c[e].add(g), c[n].add(g), l[t].add(v), l[e].add(v), l[n].add(v))
			}
			let x = this.groups;
			0 === x.length && (x = [{
				start: 0,
				count: n.length
			}]);
			for (let t = 0, e = x.length; t < e; ++t) {
				const e = x[t],
					i = e.start;
				for (let t = i, r = i + e.count; t < r; t += 3) y(n[t + 0], n[t + 1], n[t + 2])
			}
			const b = new we,
				_ = new we,
				w = new we,
				M = new we;

			function S(t) {
				w.fromArray(r, 3 * t), M.copy(w);
				const e = c[t];
				b.copy(e), b.sub(w.multiplyScalar(w.dot(e))).normalize(), _.crossVectors(M, e);
				const n = _.dot(l[t]) < 0 ? -1 : 1;
				a[4 * t] = b.x, a[4 * t + 1] = b.y, a[4 * t + 2] = b.z, a[4 * t + 3] = n
			}
			for (let t = 0, e = x.length; t < e; ++t) {
				const e = x[t],
					i = e.start;
				for (let t = i, r = i + e.count; t < r; t += 3) S(n[t + 0]), S(n[t + 1]), S(n[t + 2])
			}
		},
		computeVertexNormals: function() {
			const t = this.index,
				e = this.getAttribute("position");
			if (void 0 !== e) {
				let n = this.getAttribute("normal");
				if (void 0 === n) n = new Jn(new Float32Array(3 * e.count), 3), this.setAttribute("normal", n);
				else
					for (let t = 0, e = n.count; t < e; t++) n.setXYZ(t, 0, 0, 0);
				const i = new we,
					r = new we,
					s = new we,
					o = new we,
					a = new we,
					c = new we,
					l = new we,
					h = new we;
				if (t)
					for (let u = 0, d = t.count; u < d; u += 3) {
						const d = t.getX(u + 0),
							p = t.getX(u + 1),
							f = t.getX(u + 2);
						i.fromBufferAttribute(e, d), r.fromBufferAttribute(e, p), s.fromBufferAttribute(e, f), l.subVectors(s, r), h.subVectors(i, r), l.cross(h), o.fromBufferAttribute(n, d), a.fromBufferAttribute(n, p), c.fromBufferAttribute(n, f), o.add(l), a.add(l), c.add(l), n.setXYZ(d, o.x, o.y, o.z), n.setXYZ(p, a.x, a.y, a.z), n.setXYZ(f, c.x, c.y, c.z)
					} else
						for (let t = 0, o = e.count; t < o; t += 3) i.fromBufferAttribute(e, t + 0), r.fromBufferAttribute(e, t + 1), s.fromBufferAttribute(e, t + 2), l.subVectors(s, r), h.subVectors(i, r), l.cross(h), n.setXYZ(t + 0, l.x, l.y, l.z), n.setXYZ(t + 1, l.x, l.y, l.z), n.setXYZ(t + 2, l.x, l.y, l.z);
				this.normalizeNormals(), n.needsUpdate = !0
			}
		},
		merge: function(t, e) {
			if (!t || !t.isBufferGeometry) return void console.error("THREE.BufferGeometry.merge(): geometry not an instance of THREE.BufferGeometry.", t);
			void 0 === e && (e = 0, console.warn("THREE.BufferGeometry.merge(): Overwriting original geometry, starting at offset=0. Use BufferGeometryUtils.mergeBufferGeometries() for lossless merge."));
			const n = this.attributes;
			for (const i in n) {
				if (void 0 === t.attributes[i]) continue;
				const r = n[i].array,
					s = t.attributes[i],
					o = s.array,
					a = s.itemSize * e,
					c = Math.min(o.length, r.length - a);
				for (let t = 0, e = a; t < c; t++, e++) r[e] = o[t]
			}
			return this
		},
		normalizeNormals: function() {
			const t = this.attributes.normal;
			for (let e = 0, n = t.count; e < n; e++) vi.fromBufferAttribute(t, e), vi.normalize(), t.setXYZ(e, vi.x, vi.y, vi.z)
		},
		toNonIndexed: function() {
			function t(t, e) {
				const n = t.array,
					i = t.itemSize,
					r = t.normalized,
					s = new n.constructor(e.length * i);
				let o = 0,
					a = 0;
				for (let t = 0, r = e.length; t < r; t++) {
					o = e[t] * i;
					for (let t = 0; t < i; t++) s[a++] = n[o++]
				}
				return new Jn(s, i, r)
			}
			if (null === this.index) return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."), this;
			const e = new yi,
				n = this.index.array,
				i = this.attributes;
			for (const r in i) {
				const s = t(i[r], n);
				e.setAttribute(r, s)
			}
			const r = this.morphAttributes;
			for (const i in r) {
				const s = [],
					o = r[i];
				for (let e = 0, i = o.length; e < i; e++) {
					const i = t(o[e], n);
					s.push(i)
				}
				e.morphAttributes[i] = s
			}
			e.morphTargetsRelative = this.morphTargetsRelative;
			const s = this.groups;
			for (let t = 0, n = s.length; t < n; t++) {
				const n = s[t];
				e.addGroup(n.start, n.count, n.materialIndex)
			}
			return e
		},
		toJSON: function() {
			const t = {
				metadata: {
					version: 4.5,
					type: "BufferGeometry",
					generator: "BufferGeometry.toJSON"
				}
			};
			if (t.uuid = this.uuid, t.type = this.type, "" !== this.name && (t.name = this.name), Object.keys(this.userData).length > 0 && (t.userData = this.userData), void 0 !== this.parameters) {
				const e = this.parameters;
				for (const n in e) void 0 !== e[n] && (t[n] = e[n]);
				return t
			}
			t.data = {
				attributes: {}
			};
			const e = this.index;
			null !== e && (t.data.index = {
				type: e.array.constructor.name,
				array: Array.prototype.slice.call(e.array)
			});
			const n = this.attributes;
			for (const e in n) {
				const i = n[e],
					r = i.toJSON(t.data);
				"" !== i.name && (r.name = i.name), t.data.attributes[e] = r
			}
			const i = {};
			let r = !1;
			for (const e in this.morphAttributes) {
				const n = this.morphAttributes[e],
					s = [];
				for (let e = 0, i = n.length; e < i; e++) {
					const i = n[e],
						r = i.toJSON(t.data);
					"" !== i.name && (r.name = i.name), s.push(r)
				}
				s.length > 0 && (i[e] = s, r = !0)
			}
			r && (t.data.morphAttributes = i, t.data.morphTargetsRelative = this.morphTargetsRelative);
			const s = this.groups;
			s.length > 0 && (t.data.groups = JSON.parse(JSON.stringify(s)));
			const o = this.boundingSphere;
			return null !== o && (t.data.boundingSphere = {
				center: o.center.toArray(),
				radius: o.radius
			}), t
		},
		clone: function() {
			return (new yi).copy(this)
		},
		copy: function(t) {
			this.index = null, this.attributes = {}, this.morphAttributes = {}, this.groups = [], this.boundingBox = null, this.boundingSphere = null;
			const e = {};
			this.name = t.name;
			const n = t.index;
			null !== n && this.setIndex(n.clone(e));
			const i = t.attributes;
			for (const t in i) {
				const n = i[t];
				this.setAttribute(t, n.clone(e))
			}
			const r = t.morphAttributes;
			for (const t in r) {
				const n = [],
					i = r[t];
				for (let t = 0, r = i.length; t < r; t++) n.push(i[t].clone(e));
				this.morphAttributes[t] = n
			}
			this.morphTargetsRelative = t.morphTargetsRelative;
			const s = t.groups;
			for (let t = 0, e = s.length; t < e; t++) {
				const e = s[t];
				this.addGroup(e.start, e.count, e.materialIndex)
			}
			const o = t.boundingBox;
			null !== o && (this.boundingBox = o.clone());
			const a = t.boundingSphere;
			return null !== a && (this.boundingSphere = a.clone()), this.drawRange.start = t.drawRange.start, this.drawRange.count = t.drawRange.count, this.userData = t.userData, this
		},
		dispose: function() {
			this.dispatchEvent({
				type: "dispose"
			})
		}
	});
	const xi = new Ze,
		bi = new Ye,
		_i = new ke,
		wi = new we,
		Mi = new we,
		Si = new we,
		Ti = new we,
		Ei = new we,
		Ai = new we,
		Li = new we,
		Ci = new we,
		Ri = new we,
		Pi = new de,
		Di = new de,
		Oi = new de,
		Ii = new we,
		Ni = new we;

	function zi(t = new yi, e = new Xn) {
		wn.call(this), this.type = "Mesh", this.geometry = t, this.material = e, this.updateMorphTargets()
	}

	function Bi(t, e, n, i, r, s, o, a, c, l, h, u) {
		wi.fromBufferAttribute(r, l), Mi.fromBufferAttribute(r, h), Si.fromBufferAttribute(r, u);
		const d = t.morphTargetInfluences;
		if (e.morphTargets && s && d) {
			Li.set(0, 0, 0), Ci.set(0, 0, 0), Ri.set(0, 0, 0);
			for (let t = 0, e = s.length; t < e; t++) {
				const e = d[t],
					n = s[t];
				0 !== e && (Ti.fromBufferAttribute(n, l), Ei.fromBufferAttribute(n, h), Ai.fromBufferAttribute(n, u), o ? (Li.addScaledVector(Ti, e), Ci.addScaledVector(Ei, e), Ri.addScaledVector(Ai, e)) : (Li.addScaledVector(Ti.sub(wi), e), Ci.addScaledVector(Ei.sub(Mi), e), Ri.addScaledVector(Ai.sub(Si), e)))
			}
			wi.add(Li), Mi.add(Ci), Si.add(Ri)
		}
		t.isSkinnedMesh && (t.boneTransform(l, wi), t.boneTransform(h, Mi), t.boneTransform(u, Si));
		const p = function(t, e, n, i, r, s, o, a) {
			let c;
			if (c = 1 === e.side ? i.intersectTriangle(o, s, r, !0, a) : i.intersectTriangle(r, s, o, 2 !== e.side, a), null === c) return null;
			Ni.copy(a), Ni.applyMatrix4(t.matrixWorld);
			const l = n.ray.origin.distanceTo(Ni);
			return l < n.near || l > n.far ? null : {
				distance: l,
				point: Ni.clone(),
				object: t
			}
		}(t, e, n, i, wi, Mi, Si, Ii);
		if (p) {
			a && (Pi.fromBufferAttribute(a, l), Di.fromBufferAttribute(a, h), Oi.fromBufferAttribute(a, u), p.uv = Bn.getUV(Ii, wi, Mi, Si, Pi, Di, Oi, new de)), c && (Pi.fromBufferAttribute(c, l), Di.fromBufferAttribute(c, h), Oi.fromBufferAttribute(c, u), p.uv2 = Bn.getUV(Ii, wi, Mi, Si, Pi, Di, Oi, new de));
			const t = new Wn(l, h, u);
			Bn.getNormal(wi, Mi, Si, t.normal), p.face = t
		}
		return p
	}
	zi.prototype = Object.assign(Object.create(wn.prototype), {
		constructor: zi,
		isMesh: !0,
		copy: function(t) {
			return wn.prototype.copy.call(this, t), void 0 !== t.morphTargetInfluences && (this.morphTargetInfluences = t.morphTargetInfluences.slice()), void 0 !== t.morphTargetDictionary && (this.morphTargetDictionary = Object.assign({}, t.morphTargetDictionary)), this.material = t.material, this.geometry = t.geometry, this
		},
		updateMorphTargets: function() {
			const t = this.geometry;
			if (t.isBufferGeometry) {
				const e = t.morphAttributes,
					n = Object.keys(e);
				if (n.length > 0) {
					const t = e[n[0]];
					if (void 0 !== t) {
						this.morphTargetInfluences = [], this.morphTargetDictionary = {};
						for (let e = 0, n = t.length; e < n; e++) {
							const n = t[e].name || String(e);
							this.morphTargetInfluences.push(0), this.morphTargetDictionary[n] = e
						}
					}
				}
			} else {
				const e = t.morphTargets;
				void 0 !== e && e.length > 0 && console.error("THREE.Mesh.updateMorphTargets() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")
			}
		},
		raycast: function(t, e) {
			const n = this.geometry,
				i = this.material,
				r = this.matrixWorld;
			if (void 0 === i) return;
			if (null === n.boundingSphere && n.computeBoundingSphere(), _i.copy(n.boundingSphere), _i.applyMatrix4(r), !1 === t.ray.intersectsSphere(_i)) return;
			if (xi.copy(r).invert(), bi.copy(t.ray).applyMatrix4(xi), null !== n.boundingBox && !1 === bi.intersectsBox(n.boundingBox)) return;
			let s;
			if (n.isBufferGeometry) {
				const r = n.index,
					o = n.attributes.position,
					a = n.morphAttributes.position,
					c = n.morphTargetsRelative,
					l = n.attributes.uv,
					h = n.attributes.uv2,
					u = n.groups,
					d = n.drawRange;
				if (null !== r)
					if (Array.isArray(i))
						for (let n = 0, p = u.length; n < p; n++) {
							const p = u[n],
								f = i[p.materialIndex];
							for (let n = Math.max(p.start, d.start), i = Math.min(p.start + p.count, d.start + d.count); n < i; n += 3) {
								const i = r.getX(n),
									u = r.getX(n + 1),
									d = r.getX(n + 2);
								s = Bi(this, f, t, bi, o, a, c, l, h, i, u, d), s && (s.faceIndex = Math.floor(n / 3), s.face.materialIndex = p.materialIndex, e.push(s))
							}
						} else {
							for (let n = Math.max(0, d.start), u = Math.min(r.count, d.start + d.count); n < u; n += 3) {
								const u = r.getX(n),
									d = r.getX(n + 1),
									p = r.getX(n + 2);
								s = Bi(this, i, t, bi, o, a, c, l, h, u, d, p), s && (s.faceIndex = Math.floor(n / 3), e.push(s))
							}
						} else if (void 0 !== o)
							if (Array.isArray(i))
								for (let n = 0, r = u.length; n < r; n++) {
									const r = u[n],
										p = i[r.materialIndex];
									for (let n = Math.max(r.start, d.start), i = Math.min(r.start + r.count, d.start + d.count); n < i; n += 3) {
										s = Bi(this, p, t, bi, o, a, c, l, h, n, n + 1, n + 2), s && (s.faceIndex = Math.floor(n / 3), s.face.materialIndex = r.materialIndex, e.push(s))
									}
								} else {
									for (let n = Math.max(0, d.start), r = Math.min(o.count, d.start + d.count); n < r; n += 3) {
										s = Bi(this, i, t, bi, o, a, c, l, h, n, n + 1, n + 2), s && (s.faceIndex = Math.floor(n / 3), e.push(s))
									}
								}
			} else n.isGeometry && console.error("THREE.Mesh.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")
		}
	});
	class Ui extends yi {
		constructor(t = 1, e = 1, n = 1, i = 1, r = 1, s = 1) {
			super(), this.type = "BoxGeometry", this.parameters = {
				width: t,
				height: e,
				depth: n,
				widthSegments: i,
				heightSegments: r,
				depthSegments: s
			};
			const o = this;
			i = Math.floor(i), r = Math.floor(r), s = Math.floor(s);
			const a = [],
				c = [],
				l = [],
				h = [];
			let u = 0,
				d = 0;

			function p(t, e, n, i, r, s, p, f, m, g, v) {
				const y = s / m,
					x = p / g,
					b = s / 2,
					_ = p / 2,
					w = f / 2,
					M = m + 1,
					S = g + 1;
				let T = 0,
					E = 0;
				const A = new we;
				for (let s = 0; s < S; s++) {
					const o = s * x - _;
					for (let a = 0; a < M; a++) {
						const u = a * y - b;
						A[t] = u * i, A[e] = o * r, A[n] = w, c.push(A.x, A.y, A.z), A[t] = 0, A[e] = 0, A[n] = f > 0 ? 1 : -1, l.push(A.x, A.y, A.z), h.push(a / m), h.push(1 - s / g), T += 1
					}
				}
				for (let t = 0; t < g; t++)
					for (let e = 0; e < m; e++) {
						const n = u + e + M * t,
							i = u + e + M * (t + 1),
							r = u + (e + 1) + M * (t + 1),
							s = u + (e + 1) + M * t;
						a.push(n, i, s), a.push(i, r, s), E += 6
					}
				o.addGroup(d, E, v), d += E, u += T
			}
			p("z", "y", "x", -1, -1, n, e, t, s, r, 0), p("z", "y", "x", 1, -1, n, e, -t, s, r, 1), p("x", "z", "y", 1, 1, t, n, e, i, s, 2), p("x", "z", "y", 1, -1, t, n, -e, i, s, 3), p("x", "y", "z", 1, -1, t, e, n, i, r, 4), p("x", "y", "z", -1, -1, t, e, -n, i, r, 5), this.setIndex(a), this.setAttribute("position", new oi(c, 3)), this.setAttribute("normal", new oi(l, 3)), this.setAttribute("uv", new oi(h, 2))
		}
	}

	function Fi(t) {
		const e = {};
		for (const n in t) {
			e[n] = {};
			for (const i in t[n]) {
				const r = t[n][i];
				r && (r.isColor || r.isMatrix3 || r.isMatrix4 || r.isVector2 || r.isVector3 || r.isVector4 || r.isTexture) ? e[n][i] = r.clone() : Array.isArray(r) ? e[n][i] = r.slice() : e[n][i] = r
			}
		}
		return e
	}

	function Hi(t) {
		const e = {};
		for (let n = 0; n < t.length; n++) {
			const i = Fi(t[n]);
			for (const t in i) e[t] = i[t]
		}
		return e
	}
	const ki = {
		clone: Fi,
		merge: Hi
	};

	function Gi(t) {
		qn.call(this), this.type = "ShaderMaterial", this.defines = {}, this.uniforms = {}, this.vertexShader = "void main() {\n\tgl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n}", this.fragmentShader = "void main() {\n\tgl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );\n}", this.linewidth = 1, this.wireframe = !1, this.wireframeLinewidth = 1, this.fog = !1, this.lights = !1, this.clipping = !1, this.skinning = !1, this.morphTargets = !1, this.morphNormals = !1, this.extensions = {
			derivatives: !1,
			fragDepth: !1,
			drawBuffers: !1,
			shaderTextureLOD: !1
		}, this.defaultAttributeValues = {
			color: [1, 1, 1],
			uv: [0, 0],
			uv2: [0, 0]
		}, this.index0AttributeName = void 0, this.uniformsNeedUpdate = !1, this.glslVersion = null, void 0 !== t && (void 0 !== t.attributes && console.error("THREE.ShaderMaterial: attributes should now be defined in THREE.BufferGeometry instead."), this.setValues(t))
	}

	function ji() {
		wn.call(this), this.type = "Camera", this.matrixWorldInverse = new Ze, this.projectionMatrix = new Ze, this.projectionMatrixInverse = new Ze
	}

	function Vi(t = 50, e = 1, n = .1, i = 2e3) {
		ji.call(this), this.type = "PerspectiveCamera", this.fov = t, this.zoom = 1, this.near = n, this.far = i, this.focus = 10, this.aspect = e, this.view = null, this.filmGauge = 35, this.filmOffset = 0, this.updateProjectionMatrix()
	}
	Gi.prototype = Object.create(qn.prototype), Gi.prototype.constructor = Gi, Gi.prototype.isShaderMaterial = !0, Gi.prototype.copy = function(t) {
		return qn.prototype.copy.call(this, t), this.fragmentShader = t.fragmentShader, this.vertexShader = t.vertexShader, this.uniforms = Fi(t.uniforms), this.defines = Object.assign({}, t.defines), this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this.lights = t.lights, this.clipping = t.clipping, this.skinning = t.skinning, this.morphTargets = t.morphTargets, this.morphNormals = t.morphNormals, this.extensions = Object.assign({}, t.extensions), this.glslVersion = t.glslVersion, this
	}, Gi.prototype.toJSON = function(t) {
		const e = qn.prototype.toJSON.call(this, t);
		e.glslVersion = this.glslVersion, e.uniforms = {};
		for (const n in this.uniforms) {
			const i = this.uniforms[n].value;
			i && i.isTexture ? e.uniforms[n] = {
				type: "t",
				value: i.toJSON(t).uuid
			} : i && i.isColor ? e.uniforms[n] = {
				type: "c",
				value: i.getHex()
			} : i && i.isVector2 ? e.uniforms[n] = {
				type: "v2",
				value: i.toArray()
			} : i && i.isVector3 ? e.uniforms[n] = {
				type: "v3",
				value: i.toArray()
			} : i && i.isVector4 ? e.uniforms[n] = {
				type: "v4",
				value: i.toArray()
			} : i && i.isMatrix3 ? e.uniforms[n] = {
				type: "m3",
				value: i.toArray()
			} : i && i.isMatrix4 ? e.uniforms[n] = {
				type: "m4",
				value: i.toArray()
			} : e.uniforms[n] = {
				value: i
			}
		}
		Object.keys(this.defines).length > 0 && (e.defines = this.defines), e.vertexShader = this.vertexShader, e.fragmentShader = this.fragmentShader;
		const n = {};
		for (const t in this.extensions) !0 === this.extensions[t] && (n[t] = !0);
		return Object.keys(n).length > 0 && (e.extensions = n), e
	}, ji.prototype = Object.assign(Object.create(wn.prototype), {
		constructor: ji,
		isCamera: !0,
		copy: function(t, e) {
			return wn.prototype.copy.call(this, t, e), this.matrixWorldInverse.copy(t.matrixWorldInverse), this.projectionMatrix.copy(t.projectionMatrix), this.projectionMatrixInverse.copy(t.projectionMatrixInverse), this
		},
		getWorldDirection: function(t) {
			void 0 === t && (console.warn("THREE.Camera: .getWorldDirection() target is now required"), t = new we), this.updateWorldMatrix(!0, !1);
			const e = this.matrixWorld.elements;
			return t.set(-e[8], -e[9], -e[10]).normalize()
		},
		updateMatrixWorld: function(t) {
			wn.prototype.updateMatrixWorld.call(this, t), this.matrixWorldInverse.copy(this.matrixWorld).invert()
		},
		updateWorldMatrix: function(t, e) {
			wn.prototype.updateWorldMatrix.call(this, t, e), this.matrixWorldInverse.copy(this.matrixWorld).invert()
		},
		clone: function() {
			return (new this.constructor).copy(this)
		}
	}), Vi.prototype = Object.assign(Object.create(ji.prototype), {
		constructor: Vi,
		isPerspectiveCamera: !0,
		copy: function(t, e) {
			return ji.prototype.copy.call(this, t, e), this.fov = t.fov, this.zoom = t.zoom, this.near = t.near, this.far = t.far, this.focus = t.focus, this.aspect = t.aspect, this.view = null === t.view ? null : Object.assign({}, t.view), this.filmGauge = t.filmGauge, this.filmOffset = t.filmOffset, this
		},
		setFocalLength: function(t) {
			const e = .5 * this.getFilmHeight() / t;
			this.fov = 2 * ue.RAD2DEG * Math.atan(e), this.updateProjectionMatrix()
		},
		getFocalLength: function() {
			const t = Math.tan(.5 * ue.DEG2RAD * this.fov);
			return .5 * this.getFilmHeight() / t
		},
		getEffectiveFOV: function() {
			return 2 * ue.RAD2DEG * Math.atan(Math.tan(.5 * ue.DEG2RAD * this.fov) / this.zoom)
		},
		getFilmWidth: function() {
			return this.filmGauge * Math.min(this.aspect, 1)
		},
		getFilmHeight: function() {
			return this.filmGauge / Math.max(this.aspect, 1)
		},
		setViewOffset: function(t, e, n, i, r, s) {
			this.aspect = t / e, null === this.view && (this.view = {
				enabled: !0,
				fullWidth: 1,
				fullHeight: 1,
				offsetX: 0,
				offsetY: 0,
				width: 1,
				height: 1
			}), this.view.enabled = !0, this.view.fullWidth = t, this.view.fullHeight = e, this.view.offsetX = n, this.view.offsetY = i, this.view.width = r, this.view.height = s, this.updateProjectionMatrix()
		},
		clearViewOffset: function() {
			null !== this.view && (this.view.enabled = !1), this.updateProjectionMatrix()
		},
		updateProjectionMatrix: function() {
			const t = this.near;
			let e = t * Math.tan(.5 * ue.DEG2RAD * this.fov) / this.zoom,
				n = 2 * e,
				i = this.aspect * n,
				r = -.5 * i;
			const s = this.view;
			if (null !== this.view && this.view.enabled) {
				const t = s.fullWidth,
					o = s.fullHeight;
				r += s.offsetX * i / t, e -= s.offsetY * n / o, i *= s.width / t, n *= s.height / o
			}
			const o = this.filmOffset;
			0 !== o && (r += t * o / this.getFilmWidth()), this.projectionMatrix.makePerspective(r, r + i, e, e - n, t, this.far), this.projectionMatrixInverse.copy(this.projectionMatrix).invert()
		},
		toJSON: function(t) {
			const e = wn.prototype.toJSON.call(this, t);
			return e.object.fov = this.fov, e.object.zoom = this.zoom, e.object.near = this.near, e.object.far = this.far, e.object.focus = this.focus, e.object.aspect = this.aspect, null !== this.view && (e.object.view = Object.assign({}, this.view)), e.object.filmGauge = this.filmGauge, e.object.filmOffset = this.filmOffset, e
		}
	});
	const Wi = 90;

	function $i(t, e, n) {
		if (wn.call(this), this.type = "CubeCamera", !0 !== n.isWebGLCubeRenderTarget) return void console.error("THREE.CubeCamera: The constructor now expects an instance of WebGLCubeRenderTarget as third parameter.");
		this.renderTarget = n;
		const i = new Vi(Wi, 1, t, e);
		i.layers = this.layers, i.up.set(0, -1, 0), i.lookAt(new we(1, 0, 0)), this.add(i);
		const r = new Vi(Wi, 1, t, e);
		r.layers = this.layers, r.up.set(0, -1, 0), r.lookAt(new we(-1, 0, 0)), this.add(r);
		const s = new Vi(Wi, 1, t, e);
		s.layers = this.layers, s.up.set(0, 0, 1), s.lookAt(new we(0, 1, 0)), this.add(s);
		const o = new Vi(Wi, 1, t, e);
		o.layers = this.layers, o.up.set(0, 0, -1), o.lookAt(new we(0, -1, 0)), this.add(o);
		const a = new Vi(Wi, 1, t, e);
		a.layers = this.layers, a.up.set(0, -1, 0), a.lookAt(new we(0, 0, 1)), this.add(a);
		const c = new Vi(Wi, 1, t, e);
		c.layers = this.layers, c.up.set(0, -1, 0), c.lookAt(new we(0, 0, -1)), this.add(c), this.update = function(t, e) {
			null === this.parent && this.updateMatrixWorld();
			const l = t.xr.enabled,
				h = t.getRenderTarget();
			t.xr.enabled = !1;
			const u = n.texture.generateMipmaps;
			n.texture.generateMipmaps = !1, t.setRenderTarget(n, 0), t.render(e, i), t.setRenderTarget(n, 1), t.render(e, r), t.setRenderTarget(n, 2), t.render(e, s), t.setRenderTarget(n, 3), t.render(e, o), t.setRenderTarget(n, 4), t.render(e, a), n.texture.generateMipmaps = u, t.setRenderTarget(n, 5), t.render(e, c), t.setRenderTarget(h), t.xr.enabled = l
		}
	}

	function qi(t, e, n, i, r, s, o, a, c, l) {
		t = void 0 !== t ? t : [], e = void 0 !== e ? e : 301, o = void 0 !== o ? o : $t, ve.call(this, t, e, n, i, r, s, o, a, c, l), this.flipY = !1, this._needsFlipEnvMap = !0
	}
	$i.prototype = Object.create(wn.prototype), $i.prototype.constructor = $i, qi.prototype = Object.create(ve.prototype), qi.prototype.constructor = qi, qi.prototype.isCubeTexture = !0, Object.defineProperty(qi.prototype, "images", {
		get: function() {
			return this.image
		},
		set: function(t) {
			this.image = t
		}
	});
	class Xi extends be {
		constructor(t, e, n) {
			Number.isInteger(e) && (console.warn("THREE.WebGLCubeRenderTarget: constructor signature is now WebGLCubeRenderTarget( size, options )"), e = n), super(t, t, e), Object.defineProperty(this, "isWebGLCubeRenderTarget", {
				value: !0
			}), e = e || {}, this.texture = new qi(void 0, e.mapping, e.wrapS, e.wrapT, e.magFilter, e.minFilter, e.format, e.type, e.anisotropy, e.encoding), this.texture._needsFlipEnvMap = !1
		}
		fromEquirectangularTexture(t, e) {
			this.texture.type = e.type, this.texture.format = qt, this.texture.encoding = e.encoding, this.texture.generateMipmaps = e.generateMipmaps, this.texture.minFilter = e.minFilter, this.texture.magFilter = e.magFilter;
			const n = {
					uniforms: {
						tEquirect: {
							value: null
						}
					},
					vertexShader: "\n\n\t\t\t\tvarying vec3 vWorldDirection;\n\n\t\t\t\tvec3 transformDirection( in vec3 dir, in mat4 matrix ) {\n\n\t\t\t\t\treturn normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );\n\n\t\t\t\t}\n\n\t\t\t\tvoid main() {\n\n\t\t\t\t\tvWorldDirection = transformDirection( position, modelMatrix );\n\n\t\t\t\t\t#include <begin_vertex>\n\t\t\t\t\t#include <project_vertex>\n\n\t\t\t\t}\n\t\t\t",
					fragmentShader: "\n\n\t\t\t\tuniform sampler2D tEquirect;\n\n\t\t\t\tvarying vec3 vWorldDirection;\n\n\t\t\t\t#include <common>\n\n\t\t\t\tvoid main() {\n\n\t\t\t\t\tvec3 direction = normalize( vWorldDirection );\n\n\t\t\t\t\tvec2 sampleUV = equirectUv( direction );\n\n\t\t\t\t\tgl_FragColor = texture2D( tEquirect, sampleUV );\n\n\t\t\t\t}\n\t\t\t"
				},
				i = new Ui(5, 5, 5),
				r = new Gi({
					name: "CubemapFromEquirect",
					uniforms: Fi(n.uniforms),
					vertexShader: n.vertexShader,
					fragmentShader: n.fragmentShader,
					side: 1,
					blending: 0
				});
			r.uniforms.tEquirect.value = e;
			const s = new zi(i, r),
				o = e.minFilter;
			e.minFilter === Ft && (e.minFilter = Ut);
			return new $i(1, 10, this).update(t, s), e.minFilter = o, s.geometry.dispose(), s.material.dispose(), this
		}
		clear(t, e, n, i) {
			const r = t.getRenderTarget();
			for (let r = 0; r < 6; r++) t.setRenderTarget(this, r), t.clear(e, n, i);
			t.setRenderTarget(r)
		}
	}

	function Yi(t, e, n, i, r, s, o, a, c, l, h, u) {
		ve.call(this, null, s, o, a, c, l, i, r, h, u), this.image = {
			data: t || null,
			width: e || 1,
			height: n || 1
		}, this.magFilter = void 0 !== c ? c : Bt, this.minFilter = void 0 !== l ? l : Bt, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1, this.needsUpdate = !0
	}
	Yi.prototype = Object.create(ve.prototype), Yi.prototype.constructor = Yi, Yi.prototype.isDataTexture = !0;
	const Zi = new ke,
		Ji = new we;
	class Qi {
		constructor(t, e, n, i, r, s) {
			this.planes = [void 0 !== t ? t : new En, void 0 !== e ? e : new En, void 0 !== n ? n : new En, void 0 !== i ? i : new En, void 0 !== r ? r : new En, void 0 !== s ? s : new En]
		}
		set(t, e, n, i, r, s) {
			const o = this.planes;
			return o[0].copy(t), o[1].copy(e), o[2].copy(n), o[3].copy(i), o[4].copy(r), o[5].copy(s), this
		}
		clone() {
			return (new this.constructor).copy(this)
		}
		copy(t) {
			const e = this.planes;
			for (let n = 0; n < 6; n++) e[n].copy(t.planes[n]);
			return this
		}
		setFromProjectionMatrix(t) {
			const e = this.planes,
				n = t.elements,
				i = n[0],
				r = n[1],
				s = n[2],
				o = n[3],
				a = n[4],
				c = n[5],
				l = n[6],
				h = n[7],
				u = n[8],
				d = n[9],
				p = n[10],
				f = n[11],
				m = n[12],
				g = n[13],
				v = n[14],
				y = n[15];
			return e[0].setComponents(o - i, h - a, f - u, y - m).normalize(), e[1].setComponents(o + i, h + a, f + u, y + m).normalize(), e[2].setComponents(o + r, h + c, f + d, y + g).normalize(), e[3].setComponents(o - r, h - c, f - d, y - g).normalize(), e[4].setComponents(o - s, h - l, f - p, y - v).normalize(), e[5].setComponents(o + s, h + l, f + p, y + v).normalize(), this
		}
		intersectsObject(t) {
			const e = t.geometry;
			return null === e.boundingSphere && e.computeBoundingSphere(), Zi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld), this.intersectsSphere(Zi)
		}
		intersectsSprite(t) {
			return Zi.center.set(0, 0, 0), Zi.radius = .7071067811865476, Zi.applyMatrix4(t.matrixWorld), this.intersectsSphere(Zi)
		}
		intersectsSphere(t) {
			const e = this.planes,
				n = t.center,
				i = -t.radius;
			for (let t = 0; t < 6; t++) {
				if (e[t].distanceToPoint(n) < i) return !1
			}
			return !0
		}
		intersectsBox(t) {
			const e = this.planes;
			for (let n = 0; n < 6; n++) {
				const i = e[n];
				if (Ji.x = i.normal.x > 0 ? t.max.x : t.min.x, Ji.y = i.normal.y > 0 ? t.max.y : t.min.y, Ji.z = i.normal.z > 0 ? t.max.z : t.min.z, i.distanceToPoint(Ji) < 0) return !1
			}
			return !0
		}
		containsPoint(t) {
			const e = this.planes;
			for (let n = 0; n < 6; n++)
				if (e[n].distanceToPoint(t) < 0) return !1;
			return !0
		}
	}

	function Ki() {
		let t = null,
			e = !1,
			n = null,
			i = null;

		function r(e, s) {
			n(e, s), i = t.requestAnimationFrame(r)
		}
		return {
			start: function() {
				!0 !== e && null !== n && (i = t.requestAnimationFrame(r), e = !0)
			},
			stop: function() {
				t.cancelAnimationFrame(i), e = !1
			},
			setAnimationLoop: function(t) {
				n = t
			},
			setContext: function(e) {
				t = e
			}
		}
	}

	function tr(t, e) {
		const n = e.isWebGL2,
			i = new WeakMap;
		return {
			get: function(t) {
				return t.isInterleavedBufferAttribute && (t = t.data), i.get(t)
			},
			remove: function(e) {
				e.isInterleavedBufferAttribute && (e = e.data);
				const n = i.get(e);
				n && (t.deleteBuffer(n.buffer), i.delete(e))
			},
			update: function(e, r) {
				if (e.isGLBufferAttribute) {
					const t = i.get(e);
					return void((!t || t.version < e.version) && i.set(e, {
						buffer: e.buffer,
						type: e.type,
						bytesPerElement: e.elementSize,
						version: e.version
					}))
				}
				e.isInterleavedBufferAttribute && (e = e.data);
				const s = i.get(e);
				void 0 === s ? i.set(e, function(e, i) {
					const r = e.array,
						s = e.usage,
						o = t.createBuffer();
					t.bindBuffer(i, o), t.bufferData(i, r, s), e.onUploadCallback();
					let a = 5126;
					return r instanceof Float32Array ? a = 5126 : r instanceof Float64Array ? console.warn("THREE.WebGLAttributes: Unsupported data buffer format: Float64Array.") : r instanceof Uint16Array ? e.isFloat16BufferAttribute ? n ? a = 5131 : console.warn("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.") : a = 5123 : r instanceof Int16Array ? a = 5122 : r instanceof Uint32Array ? a = 5125 : r instanceof Int32Array ? a = 5124 : r instanceof Int8Array ? a = 5120 : r instanceof Uint8Array && (a = 5121), {
						buffer: o,
						type: a,
						bytesPerElement: r.BYTES_PER_ELEMENT,
						version: e.version
					}
				}(e, r)) : s.version < e.version && (! function(e, i, r) {
					const s = i.array,
						o = i.updateRange;
					t.bindBuffer(r, e), -1 === o.count ? t.bufferSubData(r, 0, s) : (n ? t.bufferSubData(r, o.offset * s.BYTES_PER_ELEMENT, s, o.offset, o.count) : t.bufferSubData(r, o.offset * s.BYTES_PER_ELEMENT, s.subarray(o.offset, o.offset + o.count)), o.count = -1)
				}(s.buffer, e, r), s.version = e.version)
			}
		}
	}
	class er extends yi {
		constructor(t = 1, e = 1, n = 1, i = 1) {
			super(), this.type = "PlaneGeometry", this.parameters = {
				width: t,
				height: e,
				widthSegments: n,
				heightSegments: i
			};
			const r = t / 2,
				s = e / 2,
				o = Math.floor(n),
				a = Math.floor(i),
				c = o + 1,
				l = a + 1,
				h = t / o,
				u = e / a,
				d = [],
				p = [],
				f = [],
				m = [];
			for (let t = 0; t < l; t++) {
				const e = t * u - s;
				for (let n = 0; n < c; n++) {
					const i = n * h - r;
					p.push(i, -e, 0), f.push(0, 0, 1), m.push(n / o), m.push(1 - t / a)
				}
			}
			for (let t = 0; t < a; t++)
				for (let e = 0; e < o; e++) {
					const n = e + c * t,
						i = e + c * (t + 1),
						r = e + 1 + c * (t + 1),
						s = e + 1 + c * t;
					d.push(n, i, s), d.push(i, r, s)
				}
			this.setIndex(d), this.setAttribute("position", new oi(p, 3)), this.setAttribute("normal", new oi(f, 3)), this.setAttribute("uv", new oi(m, 2))
		}
	}
	const nr = {
			alphamap_fragment: "#ifdef USE_ALPHAMAP\n\tdiffuseColor.a *= texture2D( alphaMap, vUv ).g;\n#endif",
			alphamap_pars_fragment: "#ifdef USE_ALPHAMAP\n\tuniform sampler2D alphaMap;\n#endif",
			alphatest_fragment: "#ifdef ALPHATEST\n\tif ( diffuseColor.a < ALPHATEST ) discard;\n#endif",
			aomap_fragment: "#ifdef USE_AOMAP\n\tfloat ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;\n\treflectedLight.indirectDiffuse *= ambientOcclusion;\n\t#if defined( USE_ENVMAP ) && defined( STANDARD )\n\t\tfloat dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );\n\t\treflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.specularRoughness );\n\t#endif\n#endif",
			aomap_pars_fragment: "#ifdef USE_AOMAP\n\tuniform sampler2D aoMap;\n\tuniform float aoMapIntensity;\n#endif",
			begin_vertex: "vec3 transformed = vec3( position );",
			beginnormal_vertex: "vec3 objectNormal = vec3( normal );\n#ifdef USE_TANGENT\n\tvec3 objectTangent = vec3( tangent.xyz );\n#endif",
			bsdfs: "vec2 integrateSpecularBRDF( const in float dotNV, const in float roughness ) {\n\tconst vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );\n\tconst vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );\n\tvec4 r = roughness * c0 + c1;\n\tfloat a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;\n\treturn vec2( -1.04, 1.04 ) * a004 + r.zw;\n}\nfloat punctualLightIntensityToIrradianceFactor( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {\n#if defined ( PHYSICALLY_CORRECT_LIGHTS )\n\tfloat distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );\n\tif( cutoffDistance > 0.0 ) {\n\t\tdistanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );\n\t}\n\treturn distanceFalloff;\n#else\n\tif( cutoffDistance > 0.0 && decayExponent > 0.0 ) {\n\t\treturn pow( saturate( -lightDistance / cutoffDistance + 1.0 ), decayExponent );\n\t}\n\treturn 1.0;\n#endif\n}\nvec3 BRDF_Diffuse_Lambert( const in vec3 diffuseColor ) {\n\treturn RECIPROCAL_PI * diffuseColor;\n}\nvec3 F_Schlick( const in vec3 specularColor, const in float dotLH ) {\n\tfloat fresnel = exp2( ( -5.55473 * dotLH - 6.98316 ) * dotLH );\n\treturn ( 1.0 - specularColor ) * fresnel + specularColor;\n}\nvec3 F_Schlick_RoughnessDependent( const in vec3 F0, const in float dotNV, const in float roughness ) {\n\tfloat fresnel = exp2( ( -5.55473 * dotNV - 6.98316 ) * dotNV );\n\tvec3 Fr = max( vec3( 1.0 - roughness ), F0 ) - F0;\n\treturn Fr * fresnel + F0;\n}\nfloat G_GGX_Smith( const in float alpha, const in float dotNL, const in float dotNV ) {\n\tfloat a2 = pow2( alpha );\n\tfloat gl = dotNL + sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );\n\tfloat gv = dotNV + sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );\n\treturn 1.0 / ( gl * gv );\n}\nfloat G_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {\n\tfloat a2 = pow2( alpha );\n\tfloat gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );\n\tfloat gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );\n\treturn 0.5 / max( gv + gl, EPSILON );\n}\nfloat D_GGX( const in float alpha, const in float dotNH ) {\n\tfloat a2 = pow2( alpha );\n\tfloat denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;\n\treturn RECIPROCAL_PI * a2 / pow2( denom );\n}\nvec3 BRDF_Specular_GGX( const in IncidentLight incidentLight, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float roughness ) {\n\tfloat alpha = pow2( roughness );\n\tvec3 halfDir = normalize( incidentLight.direction + viewDir );\n\tfloat dotNL = saturate( dot( normal, incidentLight.direction ) );\n\tfloat dotNV = saturate( dot( normal, viewDir ) );\n\tfloat dotNH = saturate( dot( normal, halfDir ) );\n\tfloat dotLH = saturate( dot( incidentLight.direction, halfDir ) );\n\tvec3 F = F_Schlick( specularColor, dotLH );\n\tfloat G = G_GGX_SmithCorrelated( alpha, dotNL, dotNV );\n\tfloat D = D_GGX( alpha, dotNH );\n\treturn F * ( G * D );\n}\nvec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {\n\tconst float LUT_SIZE = 64.0;\n\tconst float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;\n\tconst float LUT_BIAS = 0.5 / LUT_SIZE;\n\tfloat dotNV = saturate( dot( N, V ) );\n\tvec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );\n\tuv = uv * LUT_SCALE + LUT_BIAS;\n\treturn uv;\n}\nfloat LTC_ClippedSphereFormFactor( const in vec3 f ) {\n\tfloat l = length( f );\n\treturn max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );\n}\nvec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {\n\tfloat x = dot( v1, v2 );\n\tfloat y = abs( x );\n\tfloat a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;\n\tfloat b = 3.4175940 + ( 4.1616724 + y ) * y;\n\tfloat v = a / b;\n\tfloat theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;\n\treturn cross( v1, v2 ) * theta_sintheta;\n}\nvec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {\n\tvec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];\n\tvec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];\n\tvec3 lightNormal = cross( v1, v2 );\n\tif( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );\n\tvec3 T1, T2;\n\tT1 = normalize( V - N * dot( V, N ) );\n\tT2 = - cross( N, T1 );\n\tmat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );\n\tvec3 coords[ 4 ];\n\tcoords[ 0 ] = mat * ( rectCoords[ 0 ] - P );\n\tcoords[ 1 ] = mat * ( rectCoords[ 1 ] - P );\n\tcoords[ 2 ] = mat * ( rectCoords[ 2 ] - P );\n\tcoords[ 3 ] = mat * ( rectCoords[ 3 ] - P );\n\tcoords[ 0 ] = normalize( coords[ 0 ] );\n\tcoords[ 1 ] = normalize( coords[ 1 ] );\n\tcoords[ 2 ] = normalize( coords[ 2 ] );\n\tcoords[ 3 ] = normalize( coords[ 3 ] );\n\tvec3 vectorFormFactor = vec3( 0.0 );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );\n\tfloat result = LTC_ClippedSphereFormFactor( vectorFormFactor );\n\treturn vec3( result );\n}\nvec3 BRDF_Specular_GGX_Environment( const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float roughness ) {\n\tfloat dotNV = saturate( dot( normal, viewDir ) );\n\tvec2 brdf = integrateSpecularBRDF( dotNV, roughness );\n\treturn specularColor * brdf.x + brdf.y;\n}\nvoid BRDF_Specular_Multiscattering_Environment( const in GeometricContext geometry, const in vec3 specularColor, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {\n\tfloat dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );\n\tvec3 F = F_Schlick_RoughnessDependent( specularColor, dotNV, roughness );\n\tvec2 brdf = integrateSpecularBRDF( dotNV, roughness );\n\tvec3 FssEss = F * brdf.x + brdf.y;\n\tfloat Ess = brdf.x + brdf.y;\n\tfloat Ems = 1.0 - Ess;\n\tvec3 Favg = specularColor + ( 1.0 - specularColor ) * 0.047619;\tvec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );\n\tsingleScatter += FssEss;\n\tmultiScatter += Fms * Ems;\n}\nfloat G_BlinnPhong_Implicit( ) {\n\treturn 0.25;\n}\nfloat D_BlinnPhong( const in float shininess, const in float dotNH ) {\n\treturn RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );\n}\nvec3 BRDF_Specular_BlinnPhong( const in IncidentLight incidentLight, const in GeometricContext geometry, const in vec3 specularColor, const in float shininess ) {\n\tvec3 halfDir = normalize( incidentLight.direction + geometry.viewDir );\n\tfloat dotNH = saturate( dot( geometry.normal, halfDir ) );\n\tfloat dotLH = saturate( dot( incidentLight.direction, halfDir ) );\n\tvec3 F = F_Schlick( specularColor, dotLH );\n\tfloat G = G_BlinnPhong_Implicit( );\n\tfloat D = D_BlinnPhong( shininess, dotNH );\n\treturn F * ( G * D );\n}\nfloat GGXRoughnessToBlinnExponent( const in float ggxRoughness ) {\n\treturn ( 2.0 / pow2( ggxRoughness + 0.0001 ) - 2.0 );\n}\nfloat BlinnExponentToGGXRoughness( const in float blinnExponent ) {\n\treturn sqrt( 2.0 / ( blinnExponent + 2.0 ) );\n}\n#if defined( USE_SHEEN )\nfloat D_Charlie(float roughness, float NoH) {\n\tfloat invAlpha = 1.0 / roughness;\n\tfloat cos2h = NoH * NoH;\n\tfloat sin2h = max(1.0 - cos2h, 0.0078125);\treturn (2.0 + invAlpha) * pow(sin2h, invAlpha * 0.5) / (2.0 * PI);\n}\nfloat V_Neubelt(float NoV, float NoL) {\n\treturn saturate(1.0 / (4.0 * (NoL + NoV - NoL * NoV)));\n}\nvec3 BRDF_Specular_Sheen( const in float roughness, const in vec3 L, const in GeometricContext geometry, vec3 specularColor ) {\n\tvec3 N = geometry.normal;\n\tvec3 V = geometry.viewDir;\n\tvec3 H = normalize( V + L );\n\tfloat dotNH = saturate( dot( N, H ) );\n\treturn specularColor * D_Charlie( roughness, dotNH ) * V_Neubelt( dot(N, V), dot(N, L) );\n}\n#endif",
			bumpmap_pars_fragment: "#ifdef USE_BUMPMAP\n\tuniform sampler2D bumpMap;\n\tuniform float bumpScale;\n\tvec2 dHdxy_fwd() {\n\t\tvec2 dSTdx = dFdx( vUv );\n\t\tvec2 dSTdy = dFdy( vUv );\n\t\tfloat Hll = bumpScale * texture2D( bumpMap, vUv ).x;\n\t\tfloat dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;\n\t\tfloat dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;\n\t\treturn vec2( dBx, dBy );\n\t}\n\tvec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy ) {\n\t\tvec3 vSigmaX = vec3( dFdx( surf_pos.x ), dFdx( surf_pos.y ), dFdx( surf_pos.z ) );\n\t\tvec3 vSigmaY = vec3( dFdy( surf_pos.x ), dFdy( surf_pos.y ), dFdy( surf_pos.z ) );\n\t\tvec3 vN = surf_norm;\n\t\tvec3 R1 = cross( vSigmaY, vN );\n\t\tvec3 R2 = cross( vN, vSigmaX );\n\t\tfloat fDet = dot( vSigmaX, R1 );\n\t\tfDet *= ( float( gl_FrontFacing ) * 2.0 - 1.0 );\n\t\tvec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );\n\t\treturn normalize( abs( fDet ) * surf_norm - vGrad );\n\t}\n#endif",
			clipping_planes_fragment: "#if NUM_CLIPPING_PLANES > 0\n\tvec4 plane;\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {\n\t\tplane = clippingPlanes[ i ];\n\t\tif ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;\n\t}\n\t#pragma unroll_loop_end\n\t#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES\n\t\tbool clipped = true;\n\t\t#pragma unroll_loop_start\n\t\tfor ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {\n\t\t\tplane = clippingPlanes[ i ];\n\t\t\tclipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;\n\t\t}\n\t\t#pragma unroll_loop_end\n\t\tif ( clipped ) discard;\n\t#endif\n#endif",
			clipping_planes_pars_fragment: "#if NUM_CLIPPING_PLANES > 0\n\tvarying vec3 vClipPosition;\n\tuniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];\n#endif",
			clipping_planes_pars_vertex: "#if NUM_CLIPPING_PLANES > 0\n\tvarying vec3 vClipPosition;\n#endif",
			clipping_planes_vertex: "#if NUM_CLIPPING_PLANES > 0\n\tvClipPosition = - mvPosition.xyz;\n#endif",
			color_fragment: "#ifdef USE_COLOR\n\tdiffuseColor.rgb *= vColor;\n#endif",
			color_pars_fragment: "#ifdef USE_COLOR\n\tvarying vec3 vColor;\n#endif",
			color_pars_vertex: "#if defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )\n\tvarying vec3 vColor;\n#endif",
			color_vertex: "#if defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )\n\tvColor = vec3( 1.0 );\n#endif\n#ifdef USE_COLOR\n\tvColor.xyz *= color.xyz;\n#endif\n#ifdef USE_INSTANCING_COLOR\n\tvColor.xyz *= instanceColor.xyz;\n#endif",
			common: "#define PI 3.141592653589793\n#define PI2 6.283185307179586\n#define PI_HALF 1.5707963267948966\n#define RECIPROCAL_PI 0.3183098861837907\n#define RECIPROCAL_PI2 0.15915494309189535\n#define EPSILON 1e-6\n#ifndef saturate\n#define saturate(a) clamp( a, 0.0, 1.0 )\n#endif\n#define whiteComplement(a) ( 1.0 - saturate( a ) )\nfloat pow2( const in float x ) { return x*x; }\nfloat pow3( const in float x ) { return x*x*x; }\nfloat pow4( const in float x ) { float x2 = x*x; return x2*x2; }\nfloat average( const in vec3 color ) { return dot( color, vec3( 0.3333 ) ); }\nhighp float rand( const in vec2 uv ) {\n\tconst highp float a = 12.9898, b = 78.233, c = 43758.5453;\n\thighp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );\n\treturn fract(sin(sn) * c);\n}\n#ifdef HIGH_PRECISION\n\tfloat precisionSafeLength( vec3 v ) { return length( v ); }\n#else\n\tfloat max3( vec3 v ) { return max( max( v.x, v.y ), v.z ); }\n\tfloat precisionSafeLength( vec3 v ) {\n\t\tfloat maxComponent = max3( abs( v ) );\n\t\treturn length( v / maxComponent ) * maxComponent;\n\t}\n#endif\nstruct IncidentLight {\n\tvec3 color;\n\tvec3 direction;\n\tbool visible;\n};\nstruct ReflectedLight {\n\tvec3 directDiffuse;\n\tvec3 directSpecular;\n\tvec3 indirectDiffuse;\n\tvec3 indirectSpecular;\n};\nstruct GeometricContext {\n\tvec3 position;\n\tvec3 normal;\n\tvec3 viewDir;\n#ifdef CLEARCOAT\n\tvec3 clearcoatNormal;\n#endif\n};\nvec3 transformDirection( in vec3 dir, in mat4 matrix ) {\n\treturn normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );\n}\nvec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {\n\treturn normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );\n}\nvec3 projectOnPlane(in vec3 point, in vec3 pointOnPlane, in vec3 planeNormal ) {\n\tfloat distance = dot( planeNormal, point - pointOnPlane );\n\treturn - distance * planeNormal + point;\n}\nfloat sideOfPlane( in vec3 point, in vec3 pointOnPlane, in vec3 planeNormal ) {\n\treturn sign( dot( point - pointOnPlane, planeNormal ) );\n}\nvec3 linePlaneIntersect( in vec3 pointOnLine, in vec3 lineDirection, in vec3 pointOnPlane, in vec3 planeNormal ) {\n\treturn lineDirection * ( dot( planeNormal, pointOnPlane - pointOnLine ) / dot( planeNormal, lineDirection ) ) + pointOnLine;\n}\nmat3 transposeMat3( const in mat3 m ) {\n\tmat3 tmp;\n\ttmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );\n\ttmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );\n\ttmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );\n\treturn tmp;\n}\nfloat linearToRelativeLuminance( const in vec3 color ) {\n\tvec3 weights = vec3( 0.2126, 0.7152, 0.0722 );\n\treturn dot( weights, color.rgb );\n}\nbool isPerspectiveMatrix( mat4 m ) {\n\treturn m[ 2 ][ 3 ] == - 1.0;\n}\nvec2 equirectUv( in vec3 dir ) {\n\tfloat u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;\n\tfloat v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;\n\treturn vec2( u, v );\n}",
			cube_uv_reflection_fragment: "#ifdef ENVMAP_TYPE_CUBE_UV\n\t#define cubeUV_maxMipLevel 8.0\n\t#define cubeUV_minMipLevel 4.0\n\t#define cubeUV_maxTileSize 256.0\n\t#define cubeUV_minTileSize 16.0\n\tfloat getFace( vec3 direction ) {\n\t\tvec3 absDirection = abs( direction );\n\t\tfloat face = - 1.0;\n\t\tif ( absDirection.x > absDirection.z ) {\n\t\t\tif ( absDirection.x > absDirection.y )\n\t\t\t\tface = direction.x > 0.0 ? 0.0 : 3.0;\n\t\t\telse\n\t\t\t\tface = direction.y > 0.0 ? 1.0 : 4.0;\n\t\t} else {\n\t\t\tif ( absDirection.z > absDirection.y )\n\t\t\t\tface = direction.z > 0.0 ? 2.0 : 5.0;\n\t\t\telse\n\t\t\t\tface = direction.y > 0.0 ? 1.0 : 4.0;\n\t\t}\n\t\treturn face;\n\t}\n\tvec2 getUV( vec3 direction, float face ) {\n\t\tvec2 uv;\n\t\tif ( face == 0.0 ) {\n\t\t\tuv = vec2( direction.z, direction.y ) / abs( direction.x );\n\t\t} else if ( face == 1.0 ) {\n\t\t\tuv = vec2( - direction.x, - direction.z ) / abs( direction.y );\n\t\t} else if ( face == 2.0 ) {\n\t\t\tuv = vec2( - direction.x, direction.y ) / abs( direction.z );\n\t\t} else if ( face == 3.0 ) {\n\t\t\tuv = vec2( - direction.z, direction.y ) / abs( direction.x );\n\t\t} else if ( face == 4.0 ) {\n\t\t\tuv = vec2( - direction.x, direction.z ) / abs( direction.y );\n\t\t} else {\n\t\t\tuv = vec2( direction.x, direction.y ) / abs( direction.z );\n\t\t}\n\t\treturn 0.5 * ( uv + 1.0 );\n\t}\n\tvec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {\n\t\tfloat face = getFace( direction );\n\t\tfloat filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );\n\t\tmipInt = max( mipInt, cubeUV_minMipLevel );\n\t\tfloat faceSize = exp2( mipInt );\n\t\tfloat texelSize = 1.0 / ( 3.0 * cubeUV_maxTileSize );\n\t\tvec2 uv = getUV( direction, face ) * ( faceSize - 1.0 );\n\t\tvec2 f = fract( uv );\n\t\tuv += 0.5 - f;\n\t\tif ( face > 2.0 ) {\n\t\t\tuv.y += faceSize;\n\t\t\tface -= 3.0;\n\t\t}\n\t\tuv.x += face * faceSize;\n\t\tif ( mipInt < cubeUV_maxMipLevel ) {\n\t\t\tuv.y += 2.0 * cubeUV_maxTileSize;\n\t\t}\n\t\tuv.y += filterInt * 2.0 * cubeUV_minTileSize;\n\t\tuv.x += 3.0 * max( 0.0, cubeUV_maxTileSize - 2.0 * faceSize );\n\t\tuv *= texelSize;\n\t\tvec3 tl = envMapTexelToLinear( texture2D( envMap, uv ) ).rgb;\n\t\tuv.x += texelSize;\n\t\tvec3 tr = envMapTexelToLinear( texture2D( envMap, uv ) ).rgb;\n\t\tuv.y += texelSize;\n\t\tvec3 br = envMapTexelToLinear( texture2D( envMap, uv ) ).rgb;\n\t\tuv.x -= texelSize;\n\t\tvec3 bl = envMapTexelToLinear( texture2D( envMap, uv ) ).rgb;\n\t\tvec3 tm = mix( tl, tr, f.x );\n\t\tvec3 bm = mix( bl, br, f.x );\n\t\treturn mix( tm, bm, f.y );\n\t}\n\t#define r0 1.0\n\t#define v0 0.339\n\t#define m0 - 2.0\n\t#define r1 0.8\n\t#define v1 0.276\n\t#define m1 - 1.0\n\t#define r4 0.4\n\t#define v4 0.046\n\t#define m4 2.0\n\t#define r5 0.305\n\t#define v5 0.016\n\t#define m5 3.0\n\t#define r6 0.21\n\t#define v6 0.0038\n\t#define m6 4.0\n\tfloat roughnessToMip( float roughness ) {\n\t\tfloat mip = 0.0;\n\t\tif ( roughness >= r1 ) {\n\t\t\tmip = ( r0 - roughness ) * ( m1 - m0 ) / ( r0 - r1 ) + m0;\n\t\t} else if ( roughness >= r4 ) {\n\t\t\tmip = ( r1 - roughness ) * ( m4 - m1 ) / ( r1 - r4 ) + m1;\n\t\t} else if ( roughness >= r5 ) {\n\t\t\tmip = ( r4 - roughness ) * ( m5 - m4 ) / ( r4 - r5 ) + m4;\n\t\t} else if ( roughness >= r6 ) {\n\t\t\tmip = ( r5 - roughness ) * ( m6 - m5 ) / ( r5 - r6 ) + m5;\n\t\t} else {\n\t\t\tmip = - 2.0 * log2( 1.16 * roughness );\t\t}\n\t\treturn mip;\n\t}\n\tvec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {\n\t\tfloat mip = clamp( roughnessToMip( roughness ), m0, cubeUV_maxMipLevel );\n\t\tfloat mipF = fract( mip );\n\t\tfloat mipInt = floor( mip );\n\t\tvec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );\n\t\tif ( mipF == 0.0 ) {\n\t\t\treturn vec4( color0, 1.0 );\n\t\t} else {\n\t\t\tvec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );\n\t\t\treturn vec4( mix( color0, color1, mipF ), 1.0 );\n\t\t}\n\t}\n#endif",
			defaultnormal_vertex: "vec3 transformedNormal = objectNormal;\n#ifdef USE_INSTANCING\n\tmat3 m = mat3( instanceMatrix );\n\ttransformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );\n\ttransformedNormal = m * transformedNormal;\n#endif\ntransformedNormal = normalMatrix * transformedNormal;\n#ifdef FLIP_SIDED\n\ttransformedNormal = - transformedNormal;\n#endif\n#ifdef USE_TANGENT\n\tvec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;\n\t#ifdef FLIP_SIDED\n\t\ttransformedTangent = - transformedTangent;\n\t#endif\n#endif",
			displacementmap_pars_vertex: "#ifdef USE_DISPLACEMENTMAP\n\tuniform sampler2D displacementMap;\n\tuniform float displacementScale;\n\tuniform float displacementBias;\n#endif",
			displacementmap_vertex: "#ifdef USE_DISPLACEMENTMAP\n\ttransformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );\n#endif",
			emissivemap_fragment: "#ifdef USE_EMISSIVEMAP\n\tvec4 emissiveColor = texture2D( emissiveMap, vUv );\n\temissiveColor.rgb = emissiveMapTexelToLinear( emissiveColor ).rgb;\n\ttotalEmissiveRadiance *= emissiveColor.rgb;\n#endif",
			emissivemap_pars_fragment: "#ifdef USE_EMISSIVEMAP\n\tuniform sampler2D emissiveMap;\n#endif",
			encodings_fragment: "gl_FragColor = linearToOutputTexel( gl_FragColor );",
			encodings_pars_fragment: "\nvec4 LinearToLinear( in vec4 value ) {\n\treturn value;\n}\nvec4 GammaToLinear( in vec4 value, in float gammaFactor ) {\n\treturn vec4( pow( value.rgb, vec3( gammaFactor ) ), value.a );\n}\nvec4 LinearToGamma( in vec4 value, in float gammaFactor ) {\n\treturn vec4( pow( value.rgb, vec3( 1.0 / gammaFactor ) ), value.a );\n}\nvec4 sRGBToLinear( in vec4 value ) {\n\treturn vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );\n}\nvec4 LinearTosRGB( in vec4 value ) {\n\treturn vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );\n}\nvec4 RGBEToLinear( in vec4 value ) {\n\treturn vec4( value.rgb * exp2( value.a * 255.0 - 128.0 ), 1.0 );\n}\nvec4 LinearToRGBE( in vec4 value ) {\n\tfloat maxComponent = max( max( value.r, value.g ), value.b );\n\tfloat fExp = clamp( ceil( log2( maxComponent ) ), -128.0, 127.0 );\n\treturn vec4( value.rgb / exp2( fExp ), ( fExp + 128.0 ) / 255.0 );\n}\nvec4 RGBMToLinear( in vec4 value, in float maxRange ) {\n\treturn vec4( value.rgb * value.a * maxRange, 1.0 );\n}\nvec4 LinearToRGBM( in vec4 value, in float maxRange ) {\n\tfloat maxRGB = max( value.r, max( value.g, value.b ) );\n\tfloat M = clamp( maxRGB / maxRange, 0.0, 1.0 );\n\tM = ceil( M * 255.0 ) / 255.0;\n\treturn vec4( value.rgb / ( M * maxRange ), M );\n}\nvec4 RGBDToLinear( in vec4 value, in float maxRange ) {\n\treturn vec4( value.rgb * ( ( maxRange / 255.0 ) / value.a ), 1.0 );\n}\nvec4 LinearToRGBD( in vec4 value, in float maxRange ) {\n\tfloat maxRGB = max( value.r, max( value.g, value.b ) );\n\tfloat D = max( maxRange / maxRGB, 1.0 );\n\tD = clamp( floor( D ) / 255.0, 0.0, 1.0 );\n\treturn vec4( value.rgb * ( D * ( 255.0 / maxRange ) ), D );\n}\nconst mat3 cLogLuvM = mat3( 0.2209, 0.3390, 0.4184, 0.1138, 0.6780, 0.7319, 0.0102, 0.1130, 0.2969 );\nvec4 LinearToLogLuv( in vec4 value ) {\n\tvec3 Xp_Y_XYZp = cLogLuvM * value.rgb;\n\tXp_Y_XYZp = max( Xp_Y_XYZp, vec3( 1e-6, 1e-6, 1e-6 ) );\n\tvec4 vResult;\n\tvResult.xy = Xp_Y_XYZp.xy / Xp_Y_XYZp.z;\n\tfloat Le = 2.0 * log2(Xp_Y_XYZp.y) + 127.0;\n\tvResult.w = fract( Le );\n\tvResult.z = ( Le - ( floor( vResult.w * 255.0 ) ) / 255.0 ) / 255.0;\n\treturn vResult;\n}\nconst mat3 cLogLuvInverseM = mat3( 6.0014, -2.7008, -1.7996, -1.3320, 3.1029, -5.7721, 0.3008, -1.0882, 5.6268 );\nvec4 LogLuvToLinear( in vec4 value ) {\n\tfloat Le = value.z * 255.0 + value.w;\n\tvec3 Xp_Y_XYZp;\n\tXp_Y_XYZp.y = exp2( ( Le - 127.0 ) / 2.0 );\n\tXp_Y_XYZp.z = Xp_Y_XYZp.y / value.y;\n\tXp_Y_XYZp.x = value.x * Xp_Y_XYZp.z;\n\tvec3 vRGB = cLogLuvInverseM * Xp_Y_XYZp.rgb;\n\treturn vec4( max( vRGB, 0.0 ), 1.0 );\n}",
			envmap_fragment: "#ifdef USE_ENVMAP\n\t#ifdef ENV_WORLDPOS\n\t\tvec3 cameraToFrag;\n\t\tif ( isOrthographic ) {\n\t\t\tcameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );\n\t\t} else {\n\t\t\tcameraToFrag = normalize( vWorldPosition - cameraPosition );\n\t\t}\n\t\tvec3 worldNormal = inverseTransformDirection( normal, viewMatrix );\n\t\t#ifdef ENVMAP_MODE_REFLECTION\n\t\t\tvec3 reflectVec = reflect( cameraToFrag, worldNormal );\n\t\t#else\n\t\t\tvec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );\n\t\t#endif\n\t#else\n\t\tvec3 reflectVec = vReflect;\n\t#endif\n\t#ifdef ENVMAP_TYPE_CUBE\n\t\tvec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );\n\t#elif defined( ENVMAP_TYPE_CUBE_UV )\n\t\tvec4 envColor = textureCubeUV( envMap, reflectVec, 0.0 );\n\t#else\n\t\tvec4 envColor = vec4( 0.0 );\n\t#endif\n\t#ifndef ENVMAP_TYPE_CUBE_UV\n\t\tenvColor = envMapTexelToLinear( envColor );\n\t#endif\n\t#ifdef ENVMAP_BLENDING_MULTIPLY\n\t\toutgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );\n\t#elif defined( ENVMAP_BLENDING_MIX )\n\t\toutgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );\n\t#elif defined( ENVMAP_BLENDING_ADD )\n\t\toutgoingLight += envColor.xyz * specularStrength * reflectivity;\n\t#endif\n#endif",
			envmap_common_pars_fragment: "#ifdef USE_ENVMAP\n\tuniform float envMapIntensity;\n\tuniform float flipEnvMap;\n\tuniform int maxMipLevel;\n\t#ifdef ENVMAP_TYPE_CUBE\n\t\tuniform samplerCube envMap;\n\t#else\n\t\tuniform sampler2D envMap;\n\t#endif\n\t\n#endif",
			envmap_pars_fragment: "#ifdef USE_ENVMAP\n\tuniform float reflectivity;\n\t#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )\n\t\t#define ENV_WORLDPOS\n\t#endif\n\t#ifdef ENV_WORLDPOS\n\t\tvarying vec3 vWorldPosition;\n\t\tuniform float refractionRatio;\n\t#else\n\t\tvarying vec3 vReflect;\n\t#endif\n#endif",
			envmap_pars_vertex: "#ifdef USE_ENVMAP\n\t#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) ||defined( PHONG )\n\t\t#define ENV_WORLDPOS\n\t#endif\n\t#ifdef ENV_WORLDPOS\n\t\t\n\t\tvarying vec3 vWorldPosition;\n\t#else\n\t\tvarying vec3 vReflect;\n\t\tuniform float refractionRatio;\n\t#endif\n#endif",
			envmap_physical_pars_fragment: "#if defined( USE_ENVMAP )\n\t#ifdef ENVMAP_MODE_REFRACTION\n\t\tuniform float refractionRatio;\n\t#endif\n\tvec3 getLightProbeIndirectIrradiance( const in GeometricContext geometry, const in int maxMIPLevel ) {\n\t\tvec3 worldNormal = inverseTransformDirection( geometry.normal, viewMatrix );\n\t\t#ifdef ENVMAP_TYPE_CUBE\n\t\t\tvec3 queryVec = vec3( flipEnvMap * worldNormal.x, worldNormal.yz );\n\t\t\t#ifdef TEXTURE_LOD_EXT\n\t\t\t\tvec4 envMapColor = textureCubeLodEXT( envMap, queryVec, float( maxMIPLevel ) );\n\t\t\t#else\n\t\t\t\tvec4 envMapColor = textureCube( envMap, queryVec, float( maxMIPLevel ) );\n\t\t\t#endif\n\t\t\tenvMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;\n\t\t#elif defined( ENVMAP_TYPE_CUBE_UV )\n\t\t\tvec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );\n\t\t#else\n\t\t\tvec4 envMapColor = vec4( 0.0 );\n\t\t#endif\n\t\treturn PI * envMapColor.rgb * envMapIntensity;\n\t}\n\tfloat getSpecularMIPLevel( const in float roughness, const in int maxMIPLevel ) {\n\t\tfloat maxMIPLevelScalar = float( maxMIPLevel );\n\t\tfloat sigma = PI * roughness * roughness / ( 1.0 + roughness );\n\t\tfloat desiredMIPLevel = maxMIPLevelScalar + log2( sigma );\n\t\treturn clamp( desiredMIPLevel, 0.0, maxMIPLevelScalar );\n\t}\n\tvec3 getLightProbeIndirectRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in int maxMIPLevel ) {\n\t\t#ifdef ENVMAP_MODE_REFLECTION\n\t\t\tvec3 reflectVec = reflect( -viewDir, normal );\n\t\t\treflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );\n\t\t#else\n\t\t\tvec3 reflectVec = refract( -viewDir, normal, refractionRatio );\n\t\t#endif\n\t\treflectVec = inverseTransformDirection( reflectVec, viewMatrix );\n\t\tfloat specularMIPLevel = getSpecularMIPLevel( roughness, maxMIPLevel );\n\t\t#ifdef ENVMAP_TYPE_CUBE\n\t\t\tvec3 queryReflectVec = vec3( flipEnvMap * reflectVec.x, reflectVec.yz );\n\t\t\t#ifdef TEXTURE_LOD_EXT\n\t\t\t\tvec4 envMapColor = textureCubeLodEXT( envMap, queryReflectVec, specularMIPLevel );\n\t\t\t#else\n\t\t\t\tvec4 envMapColor = textureCube( envMap, queryReflectVec, specularMIPLevel );\n\t\t\t#endif\n\t\t\tenvMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;\n\t\t#elif defined( ENVMAP_TYPE_CUBE_UV )\n\t\t\tvec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );\n\t\t#endif\n\t\treturn envMapColor.rgb * envMapIntensity;\n\t}\n#endif",
			envmap_vertex: "#ifdef USE_ENVMAP\n\t#ifdef ENV_WORLDPOS\n\t\tvWorldPosition = worldPosition.xyz;\n\t#else\n\t\tvec3 cameraToVertex;\n\t\tif ( isOrthographic ) {\n\t\t\tcameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );\n\t\t} else {\n\t\t\tcameraToVertex = normalize( worldPosition.xyz - cameraPosition );\n\t\t}\n\t\tvec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );\n\t\t#ifdef ENVMAP_MODE_REFLECTION\n\t\t\tvReflect = reflect( cameraToVertex, worldNormal );\n\t\t#else\n\t\t\tvReflect = refract( cameraToVertex, worldNormal, refractionRatio );\n\t\t#endif\n\t#endif\n#endif",
			fog_vertex: "#ifdef USE_FOG\n\tfogDepth = - mvPosition.z;\n#endif",
			fog_pars_vertex: "#ifdef USE_FOG\n\tvarying float fogDepth;\n#endif",
			fog_fragment: "#ifdef USE_FOG\n\t#ifdef FOG_EXP2\n\t\tfloat fogFactor = 1.0 - exp( - fogDensity * fogDensity * fogDepth * fogDepth );\n\t#else\n\t\tfloat fogFactor = smoothstep( fogNear, fogFar, fogDepth );\n\t#endif\n\tgl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );\n#endif",
			fog_pars_fragment: "#ifdef USE_FOG\n\tuniform vec3 fogColor;\n\tvarying float fogDepth;\n\t#ifdef FOG_EXP2\n\t\tuniform float fogDensity;\n\t#else\n\t\tuniform float fogNear;\n\t\tuniform float fogFar;\n\t#endif\n#endif",
			gradientmap_pars_fragment: "#ifdef USE_GRADIENTMAP\n\tuniform sampler2D gradientMap;\n#endif\nvec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {\n\tfloat dotNL = dot( normal, lightDirection );\n\tvec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );\n\t#ifdef USE_GRADIENTMAP\n\t\treturn texture2D( gradientMap, coord ).rgb;\n\t#else\n\t\treturn ( coord.x < 0.7 ) ? vec3( 0.7 ) : vec3( 1.0 );\n\t#endif\n}",
			lightmap_fragment: "#ifdef USE_LIGHTMAP\n\tvec4 lightMapTexel= texture2D( lightMap, vUv2 );\n\treflectedLight.indirectDiffuse += PI * lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity;\n#endif",
			lightmap_pars_fragment: "#ifdef USE_LIGHTMAP\n\tuniform sampler2D lightMap;\n\tuniform float lightMapIntensity;\n#endif",
			lights_lambert_vertex: "vec3 diffuse = vec3( 1.0 );\nGeometricContext geometry;\ngeometry.position = mvPosition.xyz;\ngeometry.normal = normalize( transformedNormal );\ngeometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( -mvPosition.xyz );\nGeometricContext backGeometry;\nbackGeometry.position = geometry.position;\nbackGeometry.normal = -geometry.normal;\nbackGeometry.viewDir = geometry.viewDir;\nvLightFront = vec3( 0.0 );\nvIndirectFront = vec3( 0.0 );\n#ifdef DOUBLE_SIDED\n\tvLightBack = vec3( 0.0 );\n\tvIndirectBack = vec3( 0.0 );\n#endif\nIncidentLight directLight;\nfloat dotNL;\nvec3 directLightColor_Diffuse;\nvIndirectFront += getAmbientLightIrradiance( ambientLightColor );\nvIndirectFront += getLightProbeIrradiance( lightProbe, geometry );\n#ifdef DOUBLE_SIDED\n\tvIndirectBack += getAmbientLightIrradiance( ambientLightColor );\n\tvIndirectBack += getLightProbeIrradiance( lightProbe, backGeometry );\n#endif\n#if NUM_POINT_LIGHTS > 0\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n\t\tgetPointDirectLightIrradiance( pointLights[ i ], geometry, directLight );\n\t\tdotNL = dot( geometry.normal, directLight.direction );\n\t\tdirectLightColor_Diffuse = PI * directLight.color;\n\t\tvLightFront += saturate( dotNL ) * directLightColor_Diffuse;\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tvLightBack += saturate( -dotNL ) * directLightColor_Diffuse;\n\t\t#endif\n\t}\n\t#pragma unroll_loop_end\n#endif\n#if NUM_SPOT_LIGHTS > 0\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n\t\tgetSpotDirectLightIrradiance( spotLights[ i ], geometry, directLight );\n\t\tdotNL = dot( geometry.normal, directLight.direction );\n\t\tdirectLightColor_Diffuse = PI * directLight.color;\n\t\tvLightFront += saturate( dotNL ) * directLightColor_Diffuse;\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tvLightBack += saturate( -dotNL ) * directLightColor_Diffuse;\n\t\t#endif\n\t}\n\t#pragma unroll_loop_end\n#endif\n#if NUM_DIR_LIGHTS > 0\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n\t\tgetDirectionalDirectLightIrradiance( directionalLights[ i ], geometry, directLight );\n\t\tdotNL = dot( geometry.normal, directLight.direction );\n\t\tdirectLightColor_Diffuse = PI * directLight.color;\n\t\tvLightFront += saturate( dotNL ) * directLightColor_Diffuse;\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tvLightBack += saturate( -dotNL ) * directLightColor_Diffuse;\n\t\t#endif\n\t}\n\t#pragma unroll_loop_end\n#endif\n#if NUM_HEMI_LIGHTS > 0\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {\n\t\tvIndirectFront += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry );\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tvIndirectBack += getHemisphereLightIrradiance( hemisphereLights[ i ], backGeometry );\n\t\t#endif\n\t}\n\t#pragma unroll_loop_end\n#endif",
			lights_pars_begin: "uniform bool receiveShadow;\nuniform vec3 ambientLightColor;\nuniform vec3 lightProbe[ 9 ];\nvec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {\n\tfloat x = normal.x, y = normal.y, z = normal.z;\n\tvec3 result = shCoefficients[ 0 ] * 0.886227;\n\tresult += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;\n\tresult += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;\n\tresult += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;\n\tresult += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;\n\tresult += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;\n\tresult += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );\n\tresult += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;\n\tresult += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );\n\treturn result;\n}\nvec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in GeometricContext geometry ) {\n\tvec3 worldNormal = inverseTransformDirection( geometry.normal, viewMatrix );\n\tvec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );\n\treturn irradiance;\n}\nvec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {\n\tvec3 irradiance = ambientLightColor;\n\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\tirradiance *= PI;\n\t#endif\n\treturn irradiance;\n}\n#if NUM_DIR_LIGHTS > 0\n\tstruct DirectionalLight {\n\t\tvec3 direction;\n\t\tvec3 color;\n\t};\n\tuniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];\n\tvoid getDirectionalDirectLightIrradiance( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight directLight ) {\n\t\tdirectLight.color = directionalLight.color;\n\t\tdirectLight.direction = directionalLight.direction;\n\t\tdirectLight.visible = true;\n\t}\n#endif\n#if NUM_POINT_LIGHTS > 0\n\tstruct PointLight {\n\t\tvec3 position;\n\t\tvec3 color;\n\t\tfloat distance;\n\t\tfloat decay;\n\t};\n\tuniform PointLight pointLights[ NUM_POINT_LIGHTS ];\n\tvoid getPointDirectLightIrradiance( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight directLight ) {\n\t\tvec3 lVector = pointLight.position - geometry.position;\n\t\tdirectLight.direction = normalize( lVector );\n\t\tfloat lightDistance = length( lVector );\n\t\tdirectLight.color = pointLight.color;\n\t\tdirectLight.color *= punctualLightIntensityToIrradianceFactor( lightDistance, pointLight.distance, pointLight.decay );\n\t\tdirectLight.visible = ( directLight.color != vec3( 0.0 ) );\n\t}\n#endif\n#if NUM_SPOT_LIGHTS > 0\n\tstruct SpotLight {\n\t\tvec3 position;\n\t\tvec3 direction;\n\t\tvec3 color;\n\t\tfloat distance;\n\t\tfloat decay;\n\t\tfloat coneCos;\n\t\tfloat penumbraCos;\n\t};\n\tuniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];\n\tvoid getSpotDirectLightIrradiance( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight directLight ) {\n\t\tvec3 lVector = spotLight.position - geometry.position;\n\t\tdirectLight.direction = normalize( lVector );\n\t\tfloat lightDistance = length( lVector );\n\t\tfloat angleCos = dot( directLight.direction, spotLight.direction );\n\t\tif ( angleCos > spotLight.coneCos ) {\n\t\t\tfloat spotEffect = smoothstep( spotLight.coneCos, spotLight.penumbraCos, angleCos );\n\t\t\tdirectLight.color = spotLight.color;\n\t\t\tdirectLight.color *= spotEffect * punctualLightIntensityToIrradianceFactor( lightDistance, spotLight.distance, spotLight.decay );\n\t\t\tdirectLight.visible = true;\n\t\t} else {\n\t\t\tdirectLight.color = vec3( 0.0 );\n\t\t\tdirectLight.visible = false;\n\t\t}\n\t}\n#endif\n#if NUM_RECT_AREA_LIGHTS > 0\n\tstruct RectAreaLight {\n\t\tvec3 color;\n\t\tvec3 position;\n\t\tvec3 halfWidth;\n\t\tvec3 halfHeight;\n\t};\n\tuniform sampler2D ltc_1;\tuniform sampler2D ltc_2;\n\tuniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];\n#endif\n#if NUM_HEMI_LIGHTS > 0\n\tstruct HemisphereLight {\n\t\tvec3 direction;\n\t\tvec3 skyColor;\n\t\tvec3 groundColor;\n\t};\n\tuniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];\n\tvec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in GeometricContext geometry ) {\n\t\tfloat dotNL = dot( geometry.normal, hemiLight.direction );\n\t\tfloat hemiDiffuseWeight = 0.5 * dotNL + 0.5;\n\t\tvec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );\n\t\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\t\tirradiance *= PI;\n\t\t#endif\n\t\treturn irradiance;\n\t}\n#endif",
			lights_toon_fragment: "ToonMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb;",
			lights_toon_pars_fragment: "varying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\nstruct ToonMaterial {\n\tvec3 diffuseColor;\n};\nvoid RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {\n\tvec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;\n\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\tirradiance *= PI;\n\t#endif\n\treflectedLight.directDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n}\nvoid RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {\n\treflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n}\n#define RE_Direct\t\t\t\tRE_Direct_Toon\n#define RE_IndirectDiffuse\t\tRE_IndirectDiffuse_Toon\n#define Material_LightProbeLOD( material )\t(0)",
			lights_phong_fragment: "BlinnPhongMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb;\nmaterial.specularColor = specular;\nmaterial.specularShininess = shininess;\nmaterial.specularStrength = specularStrength;",
			lights_phong_pars_fragment: "varying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\nstruct BlinnPhongMaterial {\n\tvec3 diffuseColor;\n\tvec3 specularColor;\n\tfloat specularShininess;\n\tfloat specularStrength;\n};\nvoid RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {\n\tfloat dotNL = saturate( dot( geometry.normal, directLight.direction ) );\n\tvec3 irradiance = dotNL * directLight.color;\n\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\tirradiance *= PI;\n\t#endif\n\treflectedLight.directDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n\treflectedLight.directSpecular += irradiance * BRDF_Specular_BlinnPhong( directLight, geometry, material.specularColor, material.specularShininess ) * material.specularStrength;\n}\nvoid RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {\n\treflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n}\n#define RE_Direct\t\t\t\tRE_Direct_BlinnPhong\n#define RE_IndirectDiffuse\t\tRE_IndirectDiffuse_BlinnPhong\n#define Material_LightProbeLOD( material )\t(0)",
			lights_physical_fragment: "PhysicalMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );\nvec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );\nfloat geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );\nmaterial.specularRoughness = max( roughnessFactor, 0.0525 );material.specularRoughness += geometryRoughness;\nmaterial.specularRoughness = min( material.specularRoughness, 1.0 );\n#ifdef REFLECTIVITY\n\tmaterial.specularColor = mix( vec3( MAXIMUM_SPECULAR_COEFFICIENT * pow2( reflectivity ) ), diffuseColor.rgb, metalnessFactor );\n#else\n\tmaterial.specularColor = mix( vec3( DEFAULT_SPECULAR_COEFFICIENT ), diffuseColor.rgb, metalnessFactor );\n#endif\n#ifdef CLEARCOAT\n\tmaterial.clearcoat = clearcoat;\n\tmaterial.clearcoatRoughness = clearcoatRoughness;\n\t#ifdef USE_CLEARCOATMAP\n\t\tmaterial.clearcoat *= texture2D( clearcoatMap, vUv ).x;\n\t#endif\n\t#ifdef USE_CLEARCOAT_ROUGHNESSMAP\n\t\tmaterial.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;\n\t#endif\n\tmaterial.clearcoat = saturate( material.clearcoat );\tmaterial.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );\n\tmaterial.clearcoatRoughness += geometryRoughness;\n\tmaterial.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );\n#endif\n#ifdef USE_SHEEN\n\tmaterial.sheenColor = sheen;\n#endif",
			lights_physical_pars_fragment: "struct PhysicalMaterial {\n\tvec3 diffuseColor;\n\tfloat specularRoughness;\n\tvec3 specularColor;\n#ifdef CLEARCOAT\n\tfloat clearcoat;\n\tfloat clearcoatRoughness;\n#endif\n#ifdef USE_SHEEN\n\tvec3 sheenColor;\n#endif\n};\n#define MAXIMUM_SPECULAR_COEFFICIENT 0.16\n#define DEFAULT_SPECULAR_COEFFICIENT 0.04\nfloat clearcoatDHRApprox( const in float roughness, const in float dotNL ) {\n\treturn DEFAULT_SPECULAR_COEFFICIENT + ( 1.0 - DEFAULT_SPECULAR_COEFFICIENT ) * ( pow( 1.0 - dotNL, 5.0 ) * pow( 1.0 - roughness, 2.0 ) );\n}\n#if NUM_RECT_AREA_LIGHTS > 0\n\tvoid RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\t\tvec3 normal = geometry.normal;\n\t\tvec3 viewDir = geometry.viewDir;\n\t\tvec3 position = geometry.position;\n\t\tvec3 lightPos = rectAreaLight.position;\n\t\tvec3 halfWidth = rectAreaLight.halfWidth;\n\t\tvec3 halfHeight = rectAreaLight.halfHeight;\n\t\tvec3 lightColor = rectAreaLight.color;\n\t\tfloat roughness = material.specularRoughness;\n\t\tvec3 rectCoords[ 4 ];\n\t\trectCoords[ 0 ] = lightPos + halfWidth - halfHeight;\t\trectCoords[ 1 ] = lightPos - halfWidth - halfHeight;\n\t\trectCoords[ 2 ] = lightPos - halfWidth + halfHeight;\n\t\trectCoords[ 3 ] = lightPos + halfWidth + halfHeight;\n\t\tvec2 uv = LTC_Uv( normal, viewDir, roughness );\n\t\tvec4 t1 = texture2D( ltc_1, uv );\n\t\tvec4 t2 = texture2D( ltc_2, uv );\n\t\tmat3 mInv = mat3(\n\t\t\tvec3( t1.x, 0, t1.y ),\n\t\t\tvec3(    0, 1,    0 ),\n\t\t\tvec3( t1.z, 0, t1.w )\n\t\t);\n\t\tvec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );\n\t\treflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );\n\t\treflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );\n\t}\n#endif\nvoid RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\tfloat dotNL = saturate( dot( geometry.normal, directLight.direction ) );\n\tvec3 irradiance = dotNL * directLight.color;\n\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\tirradiance *= PI;\n\t#endif\n\t#ifdef CLEARCOAT\n\t\tfloat ccDotNL = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );\n\t\tvec3 ccIrradiance = ccDotNL * directLight.color;\n\t\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\t\tccIrradiance *= PI;\n\t\t#endif\n\t\tfloat clearcoatDHR = material.clearcoat * clearcoatDHRApprox( material.clearcoatRoughness, ccDotNL );\n\t\treflectedLight.directSpecular += ccIrradiance * material.clearcoat * BRDF_Specular_GGX( directLight, geometry.viewDir, geometry.clearcoatNormal, vec3( DEFAULT_SPECULAR_COEFFICIENT ), material.clearcoatRoughness );\n\t#else\n\t\tfloat clearcoatDHR = 0.0;\n\t#endif\n\t#ifdef USE_SHEEN\n\t\treflectedLight.directSpecular += ( 1.0 - clearcoatDHR ) * irradiance * BRDF_Specular_Sheen(\n\t\t\tmaterial.specularRoughness,\n\t\t\tdirectLight.direction,\n\t\t\tgeometry,\n\t\t\tmaterial.sheenColor\n\t\t);\n\t#else\n\t\treflectedLight.directSpecular += ( 1.0 - clearcoatDHR ) * irradiance * BRDF_Specular_GGX( directLight, geometry.viewDir, geometry.normal, material.specularColor, material.specularRoughness);\n\t#endif\n\treflectedLight.directDiffuse += ( 1.0 - clearcoatDHR ) * irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n}\nvoid RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\treflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n}\nvoid RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {\n\t#ifdef CLEARCOAT\n\t\tfloat ccDotNV = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );\n\t\treflectedLight.indirectSpecular += clearcoatRadiance * material.clearcoat * BRDF_Specular_GGX_Environment( geometry.viewDir, geometry.clearcoatNormal, vec3( DEFAULT_SPECULAR_COEFFICIENT ), material.clearcoatRoughness );\n\t\tfloat ccDotNL = ccDotNV;\n\t\tfloat clearcoatDHR = material.clearcoat * clearcoatDHRApprox( material.clearcoatRoughness, ccDotNL );\n\t#else\n\t\tfloat clearcoatDHR = 0.0;\n\t#endif\n\tfloat clearcoatInv = 1.0 - clearcoatDHR;\n\tvec3 singleScattering = vec3( 0.0 );\n\tvec3 multiScattering = vec3( 0.0 );\n\tvec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;\n\tBRDF_Specular_Multiscattering_Environment( geometry, material.specularColor, material.specularRoughness, singleScattering, multiScattering );\n\tvec3 diffuse = material.diffuseColor * ( 1.0 - ( singleScattering + multiScattering ) );\n\treflectedLight.indirectSpecular += clearcoatInv * radiance * singleScattering;\n\treflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;\n\treflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;\n}\n#define RE_Direct\t\t\t\tRE_Direct_Physical\n#define RE_Direct_RectArea\t\tRE_Direct_RectArea_Physical\n#define RE_IndirectDiffuse\t\tRE_IndirectDiffuse_Physical\n#define RE_IndirectSpecular\t\tRE_IndirectSpecular_Physical\nfloat computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {\n\treturn saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );\n}",
			lights_fragment_begin: "\nGeometricContext geometry;\ngeometry.position = - vViewPosition;\ngeometry.normal = normal;\ngeometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );\n#ifdef CLEARCOAT\n\tgeometry.clearcoatNormal = clearcoatNormal;\n#endif\nIncidentLight directLight;\n#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )\n\tPointLight pointLight;\n\t#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0\n\tPointLightShadow pointLightShadow;\n\t#endif\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n\t\tpointLight = pointLights[ i ];\n\t\tgetPointDirectLightIrradiance( pointLight, geometry, directLight );\n\t\t#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )\n\t\tpointLightShadow = pointLightShadows[ i ];\n\t\tdirectLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;\n\t\t#endif\n\t\tRE_Direct( directLight, geometry, material, reflectedLight );\n\t}\n\t#pragma unroll_loop_end\n#endif\n#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )\n\tSpotLight spotLight;\n\t#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0\n\tSpotLightShadow spotLightShadow;\n\t#endif\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n\t\tspotLight = spotLights[ i ];\n\t\tgetSpotDirectLightIrradiance( spotLight, geometry, directLight );\n\t\t#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )\n\t\tspotLightShadow = spotLightShadows[ i ];\n\t\tdirectLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;\n\t\t#endif\n\t\tRE_Direct( directLight, geometry, material, reflectedLight );\n\t}\n\t#pragma unroll_loop_end\n#endif\n#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )\n\tDirectionalLight directionalLight;\n\t#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0\n\tDirectionalLightShadow directionalLightShadow;\n\t#endif\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n\t\tdirectionalLight = directionalLights[ i ];\n\t\tgetDirectionalDirectLightIrradiance( directionalLight, geometry, directLight );\n\t\t#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )\n\t\tdirectionalLightShadow = directionalLightShadows[ i ];\n\t\tdirectLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;\n\t\t#endif\n\t\tRE_Direct( directLight, geometry, material, reflectedLight );\n\t}\n\t#pragma unroll_loop_end\n#endif\n#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )\n\tRectAreaLight rectAreaLight;\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {\n\t\trectAreaLight = rectAreaLights[ i ];\n\t\tRE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );\n\t}\n\t#pragma unroll_loop_end\n#endif\n#if defined( RE_IndirectDiffuse )\n\tvec3 iblIrradiance = vec3( 0.0 );\n\tvec3 irradiance = getAmbientLightIrradiance( ambientLightColor );\n\tirradiance += getLightProbeIrradiance( lightProbe, geometry );\n\t#if ( NUM_HEMI_LIGHTS > 0 )\n\t\t#pragma unroll_loop_start\n\t\tfor ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {\n\t\t\tirradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry );\n\t\t}\n\t\t#pragma unroll_loop_end\n\t#endif\n#endif\n#if defined( RE_IndirectSpecular )\n\tvec3 radiance = vec3( 0.0 );\n\tvec3 clearcoatRadiance = vec3( 0.0 );\n#endif",
			lights_fragment_maps: "#if defined( RE_IndirectDiffuse )\n\t#ifdef USE_LIGHTMAP\n\t\tvec4 lightMapTexel= texture2D( lightMap, vUv2 );\n\t\tvec3 lightMapIrradiance = lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity;\n\t\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\t\tlightMapIrradiance *= PI;\n\t\t#endif\n\t\tirradiance += lightMapIrradiance;\n\t#endif\n\t#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )\n\t\tiblIrradiance += getLightProbeIndirectIrradiance( geometry, maxMipLevel );\n\t#endif\n#endif\n#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )\n\tradiance += getLightProbeIndirectRadiance( geometry.viewDir, geometry.normal, material.specularRoughness, maxMipLevel );\n\t#ifdef CLEARCOAT\n\t\tclearcoatRadiance += getLightProbeIndirectRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness, maxMipLevel );\n\t#endif\n#endif",
			lights_fragment_end: "#if defined( RE_IndirectDiffuse )\n\tRE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );\n#endif\n#if defined( RE_IndirectSpecular )\n\tRE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );\n#endif",
			logdepthbuf_fragment: "#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )\n\tgl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;\n#endif",
			logdepthbuf_pars_fragment: "#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )\n\tuniform float logDepthBufFC;\n\tvarying float vFragDepth;\n\tvarying float vIsPerspective;\n#endif",
			logdepthbuf_pars_vertex: "#ifdef USE_LOGDEPTHBUF\n\t#ifdef USE_LOGDEPTHBUF_EXT\n\t\tvarying float vFragDepth;\n\t\tvarying float vIsPerspective;\n\t#else\n\t\tuniform float logDepthBufFC;\n\t#endif\n#endif",
			logdepthbuf_vertex: "#ifdef USE_LOGDEPTHBUF\n\t#ifdef USE_LOGDEPTHBUF_EXT\n\t\tvFragDepth = 1.0 + gl_Position.w;\n\t\tvIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );\n\t#else\n\t\tif ( isPerspectiveMatrix( projectionMatrix ) ) {\n\t\t\tgl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;\n\t\t\tgl_Position.z *= gl_Position.w;\n\t\t}\n\t#endif\n#endif",
			map_fragment: "#ifdef USE_MAP\n\tvec4 texelColor = texture2D( map, vUv );\n\ttexelColor = mapTexelToLinear( texelColor );\n\tdiffuseColor *= texelColor;\n#endif",
			map_pars_fragment: "#ifdef USE_MAP\n\tuniform sampler2D map;\n#endif",
			map_particle_fragment: "#if defined( USE_MAP ) || defined( USE_ALPHAMAP )\n\tvec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;\n#endif\n#ifdef USE_MAP\n\tvec4 mapTexel = texture2D( map, uv );\n\tdiffuseColor *= mapTexelToLinear( mapTexel );\n#endif\n#ifdef USE_ALPHAMAP\n\tdiffuseColor.a *= texture2D( alphaMap, uv ).g;\n#endif",
			map_particle_pars_fragment: "#if defined( USE_MAP ) || defined( USE_ALPHAMAP )\n\tuniform mat3 uvTransform;\n#endif\n#ifdef USE_MAP\n\tuniform sampler2D map;\n#endif\n#ifdef USE_ALPHAMAP\n\tuniform sampler2D alphaMap;\n#endif",
			metalnessmap_fragment: "float metalnessFactor = metalness;\n#ifdef USE_METALNESSMAP\n\tvec4 texelMetalness = texture2D( metalnessMap, vUv );\n\tmetalnessFactor *= texelMetalness.b;\n#endif",
			metalnessmap_pars_fragment: "#ifdef USE_METALNESSMAP\n\tuniform sampler2D metalnessMap;\n#endif",
			morphnormal_vertex: "#ifdef USE_MORPHNORMALS\n\tobjectNormal *= morphTargetBaseInfluence;\n\tobjectNormal += morphNormal0 * morphTargetInfluences[ 0 ];\n\tobjectNormal += morphNormal1 * morphTargetInfluences[ 1 ];\n\tobjectNormal += morphNormal2 * morphTargetInfluences[ 2 ];\n\tobjectNormal += morphNormal3 * morphTargetInfluences[ 3 ];\n#endif",
			morphtarget_pars_vertex: "#ifdef USE_MORPHTARGETS\n\tuniform float morphTargetBaseInfluence;\n\t#ifndef USE_MORPHNORMALS\n\t\tuniform float morphTargetInfluences[ 8 ];\n\t#else\n\t\tuniform float morphTargetInfluences[ 4 ];\n\t#endif\n#endif",
			morphtarget_vertex: "#ifdef USE_MORPHTARGETS\n\ttransformed *= morphTargetBaseInfluence;\n\ttransformed += morphTarget0 * morphTargetInfluences[ 0 ];\n\ttransformed += morphTarget1 * morphTargetInfluences[ 1 ];\n\ttransformed += morphTarget2 * morphTargetInfluences[ 2 ];\n\ttransformed += morphTarget3 * morphTargetInfluences[ 3 ];\n\t#ifndef USE_MORPHNORMALS\n\t\ttransformed += morphTarget4 * morphTargetInfluences[ 4 ];\n\t\ttransformed += morphTarget5 * morphTargetInfluences[ 5 ];\n\t\ttransformed += morphTarget6 * morphTargetInfluences[ 6 ];\n\t\ttransformed += morphTarget7 * morphTargetInfluences[ 7 ];\n\t#endif\n#endif",
			normal_fragment_begin: "#ifdef FLAT_SHADED\n\tvec3 fdx = vec3( dFdx( vViewPosition.x ), dFdx( vViewPosition.y ), dFdx( vViewPosition.z ) );\n\tvec3 fdy = vec3( dFdy( vViewPosition.x ), dFdy( vViewPosition.y ), dFdy( vViewPosition.z ) );\n\tvec3 normal = normalize( cross( fdx, fdy ) );\n#else\n\tvec3 normal = normalize( vNormal );\n\t#ifdef DOUBLE_SIDED\n\t\tnormal = normal * ( float( gl_FrontFacing ) * 2.0 - 1.0 );\n\t#endif\n\t#ifdef USE_TANGENT\n\t\tvec3 tangent = normalize( vTangent );\n\t\tvec3 bitangent = normalize( vBitangent );\n\t\t#ifdef DOUBLE_SIDED\n\t\t\ttangent = tangent * ( float( gl_FrontFacing ) * 2.0 - 1.0 );\n\t\t\tbitangent = bitangent * ( float( gl_FrontFacing ) * 2.0 - 1.0 );\n\t\t#endif\n\t\t#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )\n\t\t\tmat3 vTBN = mat3( tangent, bitangent, normal );\n\t\t#endif\n\t#endif\n#endif\nvec3 geometryNormal = normal;",
			normal_fragment_maps: "#ifdef OBJECTSPACE_NORMALMAP\n\tnormal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;\n\t#ifdef FLIP_SIDED\n\t\tnormal = - normal;\n\t#endif\n\t#ifdef DOUBLE_SIDED\n\t\tnormal = normal * ( float( gl_FrontFacing ) * 2.0 - 1.0 );\n\t#endif\n\tnormal = normalize( normalMatrix * normal );\n#elif defined( TANGENTSPACE_NORMALMAP )\n\tvec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;\n\tmapN.xy *= normalScale;\n\t#ifdef USE_TANGENT\n\t\tnormal = normalize( vTBN * mapN );\n\t#else\n\t\tnormal = perturbNormal2Arb( -vViewPosition, normal, mapN );\n\t#endif\n#elif defined( USE_BUMPMAP )\n\tnormal = perturbNormalArb( -vViewPosition, normal, dHdxy_fwd() );\n#endif",
			normalmap_pars_fragment: "#ifdef USE_NORMALMAP\n\tuniform sampler2D normalMap;\n\tuniform vec2 normalScale;\n#endif\n#ifdef OBJECTSPACE_NORMALMAP\n\tuniform mat3 normalMatrix;\n#endif\n#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )\n\tvec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN ) {\n\t\tvec3 q0 = vec3( dFdx( eye_pos.x ), dFdx( eye_pos.y ), dFdx( eye_pos.z ) );\n\t\tvec3 q1 = vec3( dFdy( eye_pos.x ), dFdy( eye_pos.y ), dFdy( eye_pos.z ) );\n\t\tvec2 st0 = dFdx( vUv.st );\n\t\tvec2 st1 = dFdy( vUv.st );\n\t\tfloat scale = sign( st1.t * st0.s - st0.t * st1.s );\n\t\tvec3 S = normalize( ( q0 * st1.t - q1 * st0.t ) * scale );\n\t\tvec3 T = normalize( ( - q0 * st1.s + q1 * st0.s ) * scale );\n\t\tvec3 N = normalize( surf_norm );\n\t\tmat3 tsn = mat3( S, T, N );\n\t\tmapN.xy *= ( float( gl_FrontFacing ) * 2.0 - 1.0 );\n\t\treturn normalize( tsn * mapN );\n\t}\n#endif",
			clearcoat_normal_fragment_begin: "#ifdef CLEARCOAT\n\tvec3 clearcoatNormal = geometryNormal;\n#endif",
			clearcoat_normal_fragment_maps: "#ifdef USE_CLEARCOAT_NORMALMAP\n\tvec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;\n\tclearcoatMapN.xy *= clearcoatNormalScale;\n\t#ifdef USE_TANGENT\n\t\tclearcoatNormal = normalize( vTBN * clearcoatMapN );\n\t#else\n\t\tclearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN );\n\t#endif\n#endif",
			clearcoat_pars_fragment: "#ifdef USE_CLEARCOATMAP\n\tuniform sampler2D clearcoatMap;\n#endif\n#ifdef USE_CLEARCOAT_ROUGHNESSMAP\n\tuniform sampler2D clearcoatRoughnessMap;\n#endif\n#ifdef USE_CLEARCOAT_NORMALMAP\n\tuniform sampler2D clearcoatNormalMap;\n\tuniform vec2 clearcoatNormalScale;\n#endif",
			packing: "vec3 packNormalToRGB( const in vec3 normal ) {\n\treturn normalize( normal ) * 0.5 + 0.5;\n}\nvec3 unpackRGBToNormal( const in vec3 rgb ) {\n\treturn 2.0 * rgb.xyz - 1.0;\n}\nconst float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;\nconst vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );\nconst vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );\nconst float ShiftRight8 = 1. / 256.;\nvec4 packDepthToRGBA( const in float v ) {\n\tvec4 r = vec4( fract( v * PackFactors ), v );\n\tr.yzw -= r.xyz * ShiftRight8;\treturn r * PackUpscale;\n}\nfloat unpackRGBAToDepth( const in vec4 v ) {\n\treturn dot( v, UnpackFactors );\n}\nvec4 pack2HalfToRGBA( vec2 v ) {\n\tvec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ));\n\treturn vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w);\n}\nvec2 unpackRGBATo2Half( vec4 v ) {\n\treturn vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );\n}\nfloat viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {\n\treturn ( viewZ + near ) / ( near - far );\n}\nfloat orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {\n\treturn linearClipZ * ( near - far ) - near;\n}\nfloat viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {\n\treturn (( near + viewZ ) * far ) / (( far - near ) * viewZ );\n}\nfloat perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {\n\treturn ( near * far ) / ( ( far - near ) * invClipZ - far );\n}",
			premultiplied_alpha_fragment: "#ifdef PREMULTIPLIED_ALPHA\n\tgl_FragColor.rgb *= gl_FragColor.a;\n#endif",
			project_vertex: "vec4 mvPosition = vec4( transformed, 1.0 );\n#ifdef USE_INSTANCING\n\tmvPosition = instanceMatrix * mvPosition;\n#endif\nmvPosition = modelViewMatrix * mvPosition;\ngl_Position = projectionMatrix * mvPosition;",
			dithering_fragment: "#ifdef DITHERING\n\tgl_FragColor.rgb = dithering( gl_FragColor.rgb );\n#endif",
			dithering_pars_fragment: "#ifdef DITHERING\n\tvec3 dithering( vec3 color ) {\n\t\tfloat grid_position = rand( gl_FragCoord.xy );\n\t\tvec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );\n\t\tdither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );\n\t\treturn color + dither_shift_RGB;\n\t}\n#endif",
			roughnessmap_fragment: "float roughnessFactor = roughness;\n#ifdef USE_ROUGHNESSMAP\n\tvec4 texelRoughness = texture2D( roughnessMap, vUv );\n\troughnessFactor *= texelRoughness.g;\n#endif",
			roughnessmap_pars_fragment: "#ifdef USE_ROUGHNESSMAP\n\tuniform sampler2D roughnessMap;\n#endif",
			shadowmap_pars_fragment: "#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHT_SHADOWS > 0\n\t\tuniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];\n\t\tvarying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];\n\t\tstruct DirectionalLightShadow {\n\t\t\tfloat shadowBias;\n\t\t\tfloat shadowNormalBias;\n\t\t\tfloat shadowRadius;\n\t\t\tvec2 shadowMapSize;\n\t\t};\n\t\tuniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];\n\t#endif\n\t#if NUM_SPOT_LIGHT_SHADOWS > 0\n\t\tuniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];\n\t\tvarying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];\n\t\tstruct SpotLightShadow {\n\t\t\tfloat shadowBias;\n\t\t\tfloat shadowNormalBias;\n\t\t\tfloat shadowRadius;\n\t\t\tvec2 shadowMapSize;\n\t\t};\n\t\tuniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];\n\t#endif\n\t#if NUM_POINT_LIGHT_SHADOWS > 0\n\t\tuniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];\n\t\tvarying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];\n\t\tstruct PointLightShadow {\n\t\t\tfloat shadowBias;\n\t\t\tfloat shadowNormalBias;\n\t\t\tfloat shadowRadius;\n\t\t\tvec2 shadowMapSize;\n\t\t\tfloat shadowCameraNear;\n\t\t\tfloat shadowCameraFar;\n\t\t};\n\t\tuniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];\n\t#endif\n\tfloat texture2DCompare( sampler2D depths, vec2 uv, float compare ) {\n\t\treturn step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );\n\t}\n\tvec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {\n\t\treturn unpackRGBATo2Half( texture2D( shadow, uv ) );\n\t}\n\tfloat VSMShadow (sampler2D shadow, vec2 uv, float compare ){\n\t\tfloat occlusion = 1.0;\n\t\tvec2 distribution = texture2DDistribution( shadow, uv );\n\t\tfloat hard_shadow = step( compare , distribution.x );\n\t\tif (hard_shadow != 1.0 ) {\n\t\t\tfloat distance = compare - distribution.x ;\n\t\t\tfloat variance = max( 0.00000, distribution.y * distribution.y );\n\t\t\tfloat softness_probability = variance / (variance + distance * distance );\t\t\tsoftness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );\t\t\tocclusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );\n\t\t}\n\t\treturn occlusion;\n\t}\n\tfloat getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {\n\t\tfloat shadow = 1.0;\n\t\tshadowCoord.xyz /= shadowCoord.w;\n\t\tshadowCoord.z += shadowBias;\n\t\tbvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );\n\t\tbool inFrustum = all( inFrustumVec );\n\t\tbvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );\n\t\tbool frustumTest = all( frustumTestVec );\n\t\tif ( frustumTest ) {\n\t\t#if defined( SHADOWMAP_TYPE_PCF )\n\t\t\tvec2 texelSize = vec2( 1.0 ) / shadowMapSize;\n\t\t\tfloat dx0 = - texelSize.x * shadowRadius;\n\t\t\tfloat dy0 = - texelSize.y * shadowRadius;\n\t\t\tfloat dx1 = + texelSize.x * shadowRadius;\n\t\t\tfloat dy1 = + texelSize.y * shadowRadius;\n\t\t\tfloat dx2 = dx0 / 2.0;\n\t\t\tfloat dy2 = dy0 / 2.0;\n\t\t\tfloat dx3 = dx1 / 2.0;\n\t\t\tfloat dy3 = dy1 / 2.0;\n\t\t\tshadow = (\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )\n\t\t\t) * ( 1.0 / 17.0 );\n\t\t#elif defined( SHADOWMAP_TYPE_PCF_SOFT )\n\t\t\tvec2 texelSize = vec2( 1.0 ) / shadowMapSize;\n\t\t\tfloat dx = texelSize.x;\n\t\t\tfloat dy = texelSize.y;\n\t\t\tvec2 uv = shadowCoord.xy;\n\t\t\tvec2 f = fract( uv * shadowMapSize + 0.5 );\n\t\t\tuv -= f * texelSize;\n\t\t\tshadow = (\n\t\t\t\ttexture2DCompare( shadowMap, uv, shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +\n\t\t\t\tmix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ), \n\t\t\t\t\t texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),\n\t\t\t\t\t f.x ) +\n\t\t\t\tmix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ), \n\t\t\t\t\t texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),\n\t\t\t\t\t f.x ) +\n\t\t\t\tmix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ), \n\t\t\t\t\t texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),\n\t\t\t\t\t f.y ) +\n\t\t\t\tmix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ), \n\t\t\t\t\t texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),\n\t\t\t\t\t f.y ) +\n\t\t\t\tmix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ), \n\t\t\t\t\t\t  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),\n\t\t\t\t\t\t  f.x ),\n\t\t\t\t\t mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ), \n\t\t\t\t\t\t  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),\n\t\t\t\t\t\t  f.x ),\n\t\t\t\t\t f.y )\n\t\t\t) * ( 1.0 / 9.0 );\n\t\t#elif defined( SHADOWMAP_TYPE_VSM )\n\t\t\tshadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );\n\t\t#else\n\t\t\tshadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );\n\t\t#endif\n\t\t}\n\t\treturn shadow;\n\t}\n\tvec2 cubeToUV( vec3 v, float texelSizeY ) {\n\t\tvec3 absV = abs( v );\n\t\tfloat scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );\n\t\tabsV *= scaleToCube;\n\t\tv *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );\n\t\tvec2 planar = v.xy;\n\t\tfloat almostATexel = 1.5 * texelSizeY;\n\t\tfloat almostOne = 1.0 - almostATexel;\n\t\tif ( absV.z >= almostOne ) {\n\t\t\tif ( v.z > 0.0 )\n\t\t\t\tplanar.x = 4.0 - v.x;\n\t\t} else if ( absV.x >= almostOne ) {\n\t\t\tfloat signX = sign( v.x );\n\t\t\tplanar.x = v.z * signX + 2.0 * signX;\n\t\t} else if ( absV.y >= almostOne ) {\n\t\t\tfloat signY = sign( v.y );\n\t\t\tplanar.x = v.x + 2.0 * signY + 2.0;\n\t\t\tplanar.y = v.z * signY - 2.0;\n\t\t}\n\t\treturn vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );\n\t}\n\tfloat getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {\n\t\tvec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );\n\t\tvec3 lightToPosition = shadowCoord.xyz;\n\t\tfloat dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );\t\tdp += shadowBias;\n\t\tvec3 bd3D = normalize( lightToPosition );\n\t\t#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )\n\t\t\tvec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;\n\t\t\treturn (\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )\n\t\t\t) * ( 1.0 / 9.0 );\n\t\t#else\n\t\t\treturn texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );\n\t\t#endif\n\t}\n#endif",
			shadowmap_pars_vertex: "#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHT_SHADOWS > 0\n\t\tuniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];\n\t\tvarying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];\n\t\tstruct DirectionalLightShadow {\n\t\t\tfloat shadowBias;\n\t\t\tfloat shadowNormalBias;\n\t\t\tfloat shadowRadius;\n\t\t\tvec2 shadowMapSize;\n\t\t};\n\t\tuniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];\n\t#endif\n\t#if NUM_SPOT_LIGHT_SHADOWS > 0\n\t\tuniform mat4 spotShadowMatrix[ NUM_SPOT_LIGHT_SHADOWS ];\n\t\tvarying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];\n\t\tstruct SpotLightShadow {\n\t\t\tfloat shadowBias;\n\t\t\tfloat shadowNormalBias;\n\t\t\tfloat shadowRadius;\n\t\t\tvec2 shadowMapSize;\n\t\t};\n\t\tuniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];\n\t#endif\n\t#if NUM_POINT_LIGHT_SHADOWS > 0\n\t\tuniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];\n\t\tvarying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];\n\t\tstruct PointLightShadow {\n\t\t\tfloat shadowBias;\n\t\t\tfloat shadowNormalBias;\n\t\t\tfloat shadowRadius;\n\t\t\tvec2 shadowMapSize;\n\t\t\tfloat shadowCameraNear;\n\t\t\tfloat shadowCameraFar;\n\t\t};\n\t\tuniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];\n\t#endif\n#endif",
			shadowmap_vertex: "#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0\n\t\tvec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );\n\t\tvec4 shadowWorldPosition;\n\t#endif\n\t#if NUM_DIR_LIGHT_SHADOWS > 0\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {\n\t\tshadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );\n\t\tvDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;\n\t}\n\t#pragma unroll_loop_end\n\t#endif\n\t#if NUM_SPOT_LIGHT_SHADOWS > 0\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {\n\t\tshadowWorldPosition = worldPosition + vec4( shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias, 0 );\n\t\tvSpotShadowCoord[ i ] = spotShadowMatrix[ i ] * shadowWorldPosition;\n\t}\n\t#pragma unroll_loop_end\n\t#endif\n\t#if NUM_POINT_LIGHT_SHADOWS > 0\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {\n\t\tshadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );\n\t\tvPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;\n\t}\n\t#pragma unroll_loop_end\n\t#endif\n#endif",
			shadowmask_pars_fragment: "float getShadowMask() {\n\tfloat shadow = 1.0;\n\t#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHT_SHADOWS > 0\n\tDirectionalLightShadow directionalLight;\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {\n\t\tdirectionalLight = directionalLightShadows[ i ];\n\t\tshadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;\n\t}\n\t#pragma unroll_loop_end\n\t#endif\n\t#if NUM_SPOT_LIGHT_SHADOWS > 0\n\tSpotLightShadow spotLight;\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {\n\t\tspotLight = spotLightShadows[ i ];\n\t\tshadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;\n\t}\n\t#pragma unroll_loop_end\n\t#endif\n\t#if NUM_POINT_LIGHT_SHADOWS > 0\n\tPointLightShadow pointLight;\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {\n\t\tpointLight = pointLightShadows[ i ];\n\t\tshadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;\n\t}\n\t#pragma unroll_loop_end\n\t#endif\n\t#endif\n\treturn shadow;\n}",
			skinbase_vertex: "#ifdef USE_SKINNING\n\tmat4 boneMatX = getBoneMatrix( skinIndex.x );\n\tmat4 boneMatY = getBoneMatrix( skinIndex.y );\n\tmat4 boneMatZ = getBoneMatrix( skinIndex.z );\n\tmat4 boneMatW = getBoneMatrix( skinIndex.w );\n#endif",
			skinning_pars_vertex: "#ifdef USE_SKINNING\n\tuniform mat4 bindMatrix;\n\tuniform mat4 bindMatrixInverse;\n\t#ifdef BONE_TEXTURE\n\t\tuniform highp sampler2D boneTexture;\n\t\tuniform int boneTextureSize;\n\t\tmat4 getBoneMatrix( const in float i ) {\n\t\t\tfloat j = i * 4.0;\n\t\t\tfloat x = mod( j, float( boneTextureSize ) );\n\t\t\tfloat y = floor( j / float( boneTextureSize ) );\n\t\t\tfloat dx = 1.0 / float( boneTextureSize );\n\t\t\tfloat dy = 1.0 / float( boneTextureSize );\n\t\t\ty = dy * ( y + 0.5 );\n\t\t\tvec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );\n\t\t\tvec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );\n\t\t\tvec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );\n\t\t\tvec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );\n\t\t\tmat4 bone = mat4( v1, v2, v3, v4 );\n\t\t\treturn bone;\n\t\t}\n\t#else\n\t\tuniform mat4 boneMatrices[ MAX_BONES ];\n\t\tmat4 getBoneMatrix( const in float i ) {\n\t\t\tmat4 bone = boneMatrices[ int(i) ];\n\t\t\treturn bone;\n\t\t}\n\t#endif\n#endif",
			skinning_vertex: "#ifdef USE_SKINNING\n\tvec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );\n\tvec4 skinned = vec4( 0.0 );\n\tskinned += boneMatX * skinVertex * skinWeight.x;\n\tskinned += boneMatY * skinVertex * skinWeight.y;\n\tskinned += boneMatZ * skinVertex * skinWeight.z;\n\tskinned += boneMatW * skinVertex * skinWeight.w;\n\ttransformed = ( bindMatrixInverse * skinned ).xyz;\n#endif",
			skinnormal_vertex: "#ifdef USE_SKINNING\n\tmat4 skinMatrix = mat4( 0.0 );\n\tskinMatrix += skinWeight.x * boneMatX;\n\tskinMatrix += skinWeight.y * boneMatY;\n\tskinMatrix += skinWeight.z * boneMatZ;\n\tskinMatrix += skinWeight.w * boneMatW;\n\tskinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;\n\tobjectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;\n\t#ifdef USE_TANGENT\n\t\tobjectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;\n\t#endif\n#endif",
			specularmap_fragment: "float specularStrength;\n#ifdef USE_SPECULARMAP\n\tvec4 texelSpecular = texture2D( specularMap, vUv );\n\tspecularStrength = texelSpecular.r;\n#else\n\tspecularStrength = 1.0;\n#endif",
			specularmap_pars_fragment: "#ifdef USE_SPECULARMAP\n\tuniform sampler2D specularMap;\n#endif",
			tonemapping_fragment: "#if defined( TONE_MAPPING )\n\tgl_FragColor.rgb = toneMapping( gl_FragColor.rgb );\n#endif",
			tonemapping_pars_fragment: "#ifndef saturate\n#define saturate(a) clamp( a, 0.0, 1.0 )\n#endif\nuniform float toneMappingExposure;\nvec3 LinearToneMapping( vec3 color ) {\n\treturn toneMappingExposure * color;\n}\nvec3 ReinhardToneMapping( vec3 color ) {\n\tcolor *= toneMappingExposure;\n\treturn saturate( color / ( vec3( 1.0 ) + color ) );\n}\nvec3 OptimizedCineonToneMapping( vec3 color ) {\n\tcolor *= toneMappingExposure;\n\tcolor = max( vec3( 0.0 ), color - 0.004 );\n\treturn pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );\n}\nvec3 RRTAndODTFit( vec3 v ) {\n\tvec3 a = v * ( v + 0.0245786 ) - 0.000090537;\n\tvec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;\n\treturn a / b;\n}\nvec3 ACESFilmicToneMapping( vec3 color ) {\n\tconst mat3 ACESInputMat = mat3(\n\t\tvec3( 0.59719, 0.07600, 0.02840 ),\t\tvec3( 0.35458, 0.90834, 0.13383 ),\n\t\tvec3( 0.04823, 0.01566, 0.83777 )\n\t);\n\tconst mat3 ACESOutputMat = mat3(\n\t\tvec3(  1.60475, -0.10208, -0.00327 ),\t\tvec3( -0.53108,  1.10813, -0.07276 ),\n\t\tvec3( -0.07367, -0.00605,  1.07602 )\n\t);\n\tcolor *= toneMappingExposure / 0.6;\n\tcolor = ACESInputMat * color;\n\tcolor = RRTAndODTFit( color );\n\tcolor = ACESOutputMat * color;\n\treturn saturate( color );\n}\nvec3 CustomToneMapping( vec3 color ) { return color; }",
			transmissionmap_fragment: "#ifdef USE_TRANSMISSIONMAP\n\ttotalTransmission *= texture2D( transmissionMap, vUv ).r;\n#endif",
			transmissionmap_pars_fragment: "#ifdef USE_TRANSMISSIONMAP\n\tuniform sampler2D transmissionMap;\n#endif",
			uv_pars_fragment: "#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )\n\tvarying vec2 vUv;\n#endif",
			uv_pars_vertex: "#ifdef USE_UV\n\t#ifdef UVS_VERTEX_ONLY\n\t\tvec2 vUv;\n\t#else\n\t\tvarying vec2 vUv;\n\t#endif\n\tuniform mat3 uvTransform;\n#endif",
			uv_vertex: "#ifdef USE_UV\n\tvUv = ( uvTransform * vec3( uv, 1 ) ).xy;\n#endif",
			uv2_pars_fragment: "#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n\tvarying vec2 vUv2;\n#endif",
			uv2_pars_vertex: "#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n\tattribute vec2 uv2;\n\tvarying vec2 vUv2;\n\tuniform mat3 uv2Transform;\n#endif",
			uv2_vertex: "#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n\tvUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;\n#endif",
			worldpos_vertex: "#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP )\n\tvec4 worldPosition = vec4( transformed, 1.0 );\n\t#ifdef USE_INSTANCING\n\t\tworldPosition = instanceMatrix * worldPosition;\n\t#endif\n\tworldPosition = modelMatrix * worldPosition;\n#endif",
			background_frag: "uniform sampler2D t2D;\nvarying vec2 vUv;\nvoid main() {\n\tvec4 texColor = texture2D( t2D, vUv );\n\tgl_FragColor = mapTexelToLinear( texColor );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n}",
			background_vert: "varying vec2 vUv;\nuniform mat3 uvTransform;\nvoid main() {\n\tvUv = ( uvTransform * vec3( uv, 1 ) ).xy;\n\tgl_Position = vec4( position.xy, 1.0, 1.0 );\n}",
			cube_frag: "#include <envmap_common_pars_fragment>\nuniform float opacity;\nvarying vec3 vWorldDirection;\n#include <cube_uv_reflection_fragment>\nvoid main() {\n\tvec3 vReflect = vWorldDirection;\n\t#include <envmap_fragment>\n\tgl_FragColor = envColor;\n\tgl_FragColor.a *= opacity;\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n}",
			cube_vert: "varying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n\tvWorldDirection = transformDirection( position, modelMatrix );\n\t#include <begin_vertex>\n\t#include <project_vertex>\n\tgl_Position.z = gl_Position.w;\n}",
			depth_frag: "#if DEPTH_PACKING == 3200\n\tuniform float opacity;\n#endif\n#include <common>\n#include <packing>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvarying vec2 vHighPrecisionZW;\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( 1.0 );\n\t#if DEPTH_PACKING == 3200\n\t\tdiffuseColor.a = opacity;\n\t#endif\n\t#include <map_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <logdepthbuf_fragment>\n\tfloat fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;\n\t#if DEPTH_PACKING == 3200\n\t\tgl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );\n\t#elif DEPTH_PACKING == 3201\n\t\tgl_FragColor = packDepthToRGBA( fragCoordZ );\n\t#endif\n}",
			depth_vert: "#include <common>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvarying vec2 vHighPrecisionZW;\nvoid main() {\n\t#include <uv_vertex>\n\t#include <skinbase_vertex>\n\t#ifdef USE_DISPLACEMENTMAP\n\t\t#include <beginnormal_vertex>\n\t\t#include <morphnormal_vertex>\n\t\t#include <skinnormal_vertex>\n\t#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\tvHighPrecisionZW = gl_Position.zw;\n}",
			distanceRGBA_frag: "#define DISTANCE\nuniform vec3 referencePosition;\nuniform float nearDistance;\nuniform float farDistance;\nvarying vec3 vWorldPosition;\n#include <common>\n#include <packing>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main () {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( 1.0 );\n\t#include <map_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\tfloat dist = length( vWorldPosition - referencePosition );\n\tdist = ( dist - nearDistance ) / ( farDistance - nearDistance );\n\tdist = saturate( dist );\n\tgl_FragColor = packDepthToRGBA( dist );\n}",
			distanceRGBA_vert: "#define DISTANCE\nvarying vec3 vWorldPosition;\n#include <common>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <skinbase_vertex>\n\t#ifdef USE_DISPLACEMENTMAP\n\t\t#include <beginnormal_vertex>\n\t\t#include <morphnormal_vertex>\n\t\t#include <skinnormal_vertex>\n\t#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <worldpos_vertex>\n\t#include <clipping_planes_vertex>\n\tvWorldPosition = worldPosition.xyz;\n}",
			equirect_frag: "uniform sampler2D tEquirect;\nvarying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n\tvec3 direction = normalize( vWorldDirection );\n\tvec2 sampleUV = equirectUv( direction );\n\tvec4 texColor = texture2D( tEquirect, sampleUV );\n\tgl_FragColor = mapTexelToLinear( texColor );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n}",
			equirect_vert: "varying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n\tvWorldDirection = transformDirection( position, modelMatrix );\n\t#include <begin_vertex>\n\t#include <project_vertex>\n}",
			linedashed_frag: "uniform vec3 diffuse;\nuniform float opacity;\nuniform float dashSize;\nuniform float totalSize;\nvarying float vLineDistance;\n#include <common>\n#include <color_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tif ( mod( vLineDistance, totalSize ) > dashSize ) {\n\t\tdiscard;\n\t}\n\tvec3 outgoingLight = vec3( 0.0 );\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <color_fragment>\n\toutgoingLight = diffuseColor.rgb;\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n}",
			linedashed_vert: "uniform float scale;\nattribute float lineDistance;\nvarying float vLineDistance;\n#include <common>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\tvLineDistance = scale * lineDistance;\n\t#include <color_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <fog_vertex>\n}",
			meshbasic_frag: "uniform vec3 diffuse;\nuniform float opacity;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_pars_fragment>\n#include <cube_uv_reflection_fragment>\n#include <fog_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <specularmap_fragment>\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\t#ifdef USE_LIGHTMAP\n\t\n\t\tvec4 lightMapTexel= texture2D( lightMap, vUv2 );\n\t\treflectedLight.indirectDiffuse += lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity;\n\t#else\n\t\treflectedLight.indirectDiffuse += vec3( 1.0 );\n\t#endif\n\t#include <aomap_fragment>\n\treflectedLight.indirectDiffuse *= diffuseColor.rgb;\n\tvec3 outgoingLight = reflectedLight.indirectDiffuse;\n\t#include <envmap_fragment>\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}",
			meshbasic_vert: "#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <skinbase_vertex>\n\t#ifdef USE_ENVMAP\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <worldpos_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <envmap_vertex>\n\t#include <fog_vertex>\n}",
			meshlambert_frag: "uniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float opacity;\nvarying vec3 vLightFront;\nvarying vec3 vIndirectFront;\n#ifdef DOUBLE_SIDED\n\tvarying vec3 vLightBack;\n\tvarying vec3 vIndirectBack;\n#endif\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_pars_fragment>\n#include <cube_uv_reflection_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <fog_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <shadowmask_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <specularmap_fragment>\n\t#include <emissivemap_fragment>\n\t#ifdef DOUBLE_SIDED\n\t\treflectedLight.indirectDiffuse += ( gl_FrontFacing ) ? vIndirectFront : vIndirectBack;\n\t#else\n\t\treflectedLight.indirectDiffuse += vIndirectFront;\n\t#endif\n\t#include <lightmap_fragment>\n\treflectedLight.indirectDiffuse *= BRDF_Diffuse_Lambert( diffuseColor.rgb );\n\t#ifdef DOUBLE_SIDED\n\t\treflectedLight.directDiffuse = ( gl_FrontFacing ) ? vLightFront : vLightBack;\n\t#else\n\t\treflectedLight.directDiffuse = vLightFront;\n\t#endif\n\treflectedLight.directDiffuse *= BRDF_Diffuse_Lambert( diffuseColor.rgb ) * getShadowMask();\n\t#include <aomap_fragment>\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;\n\t#include <envmap_fragment>\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}",
			meshlambert_vert: "#define LAMBERT\nvarying vec3 vLightFront;\nvarying vec3 vIndirectFront;\n#ifdef DOUBLE_SIDED\n\tvarying vec3 vLightBack;\n\tvarying vec3 vIndirectBack;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <envmap_pars_vertex>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <worldpos_vertex>\n\t#include <envmap_vertex>\n\t#include <lights_lambert_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}",
			meshmatcap_frag: "#define MATCAP\nuniform vec3 diffuse;\nuniform float opacity;\nuniform sampler2D matcap;\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <fog_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\tvec3 viewDir = normalize( vViewPosition );\n\tvec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );\n\tvec3 y = cross( viewDir, x );\n\tvec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;\n\t#ifdef USE_MATCAP\n\t\tvec4 matcapColor = texture2D( matcap, uv );\n\t\tmatcapColor = matcapTexelToLinear( matcapColor );\n\t#else\n\t\tvec4 matcapColor = vec4( 1.0 );\n\t#endif\n\tvec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}",
			meshmatcap_vert: "#define MATCAP\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <color_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <color_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#ifndef FLAT_SHADED\n\t\tvNormal = normalize( transformedNormal );\n\t#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <fog_vertex>\n\tvViewPosition = - mvPosition.xyz;\n}",
			meshtoon_frag: "#define TOON\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <gradientmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <lights_toon_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\t#include <emissivemap_fragment>\n\t#include <lights_toon_fragment>\n\t#include <lights_fragment_begin>\n\t#include <lights_fragment_maps>\n\t#include <lights_fragment_end>\n\t#include <aomap_fragment>\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}",
			meshtoon_vert: "#define TOON\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n#ifndef FLAT_SHADED\n\tvNormal = normalize( transformedNormal );\n#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\tvViewPosition = - mvPosition.xyz;\n\t#include <worldpos_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}",
			meshphong_frag: "#define PHONG\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform vec3 specular;\nuniform float shininess;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_pars_fragment>\n#include <cube_uv_reflection_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <lights_phong_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <specularmap_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\t#include <emissivemap_fragment>\n\t#include <lights_phong_fragment>\n\t#include <lights_fragment_begin>\n\t#include <lights_fragment_maps>\n\t#include <lights_fragment_end>\n\t#include <aomap_fragment>\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;\n\t#include <envmap_fragment>\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}",
			meshphong_vert: "#define PHONG\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n#ifndef FLAT_SHADED\n\tvNormal = normalize( transformedNormal );\n#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\tvViewPosition = - mvPosition.xyz;\n\t#include <worldpos_vertex>\n\t#include <envmap_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}",
			meshphysical_frag: "#define STANDARD\n#ifdef PHYSICAL\n\t#define REFLECTIVITY\n\t#define CLEARCOAT\n\t#define TRANSMISSION\n#endif\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float roughness;\nuniform float metalness;\nuniform float opacity;\n#ifdef TRANSMISSION\n\tuniform float transmission;\n#endif\n#ifdef REFLECTIVITY\n\tuniform float reflectivity;\n#endif\n#ifdef CLEARCOAT\n\tuniform float clearcoat;\n\tuniform float clearcoatRoughness;\n#endif\n#ifdef USE_SHEEN\n\tuniform vec3 sheen;\n#endif\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n\t#ifdef USE_TANGENT\n\t\tvarying vec3 vTangent;\n\t\tvarying vec3 vBitangent;\n\t#endif\n#endif\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <transmissionmap_pars_fragment>\n#include <bsdfs>\n#include <cube_uv_reflection_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_physical_pars_fragment>\n#include <fog_pars_fragment>\n#include <lights_pars_begin>\n#include <lights_physical_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <clearcoat_pars_fragment>\n#include <roughnessmap_pars_fragment>\n#include <metalnessmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#ifdef TRANSMISSION\n\t\tfloat totalTransmission = transmission;\n\t#endif\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <roughnessmap_fragment>\n\t#include <metalnessmap_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\t#include <clearcoat_normal_fragment_begin>\n\t#include <clearcoat_normal_fragment_maps>\n\t#include <emissivemap_fragment>\n\t#include <transmissionmap_fragment>\n\t#include <lights_physical_fragment>\n\t#include <lights_fragment_begin>\n\t#include <lights_fragment_maps>\n\t#include <lights_fragment_end>\n\t#include <aomap_fragment>\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;\n\t#ifdef TRANSMISSION\n\t\tdiffuseColor.a *= mix( saturate( 1. - totalTransmission + linearToRelativeLuminance( reflectedLight.directSpecular + reflectedLight.indirectSpecular ) ), 1.0, metalness );\n\t#endif\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}",
			meshphysical_vert: "#define STANDARD\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n\t#ifdef USE_TANGENT\n\t\tvarying vec3 vTangent;\n\t\tvarying vec3 vBitangent;\n\t#endif\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n#ifndef FLAT_SHADED\n\tvNormal = normalize( transformedNormal );\n\t#ifdef USE_TANGENT\n\t\tvTangent = normalize( transformedTangent );\n\t\tvBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );\n\t#endif\n#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\tvViewPosition = - mvPosition.xyz;\n\t#include <worldpos_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}",
			normal_frag: "#define NORMAL\nuniform float opacity;\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )\n\tvarying vec3 vViewPosition;\n#endif\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n\t#ifdef USE_TANGENT\n\t\tvarying vec3 vTangent;\n\t\tvarying vec3 vBitangent;\n\t#endif\n#endif\n#include <packing>\n#include <uv_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\t#include <logdepthbuf_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\tgl_FragColor = vec4( packNormalToRGB( normal ), opacity );\n}",
			normal_vert: "#define NORMAL\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )\n\tvarying vec3 vViewPosition;\n#endif\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n\t#ifdef USE_TANGENT\n\t\tvarying vec3 vTangent;\n\t\tvarying vec3 vBitangent;\n\t#endif\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n#ifndef FLAT_SHADED\n\tvNormal = normalize( transformedNormal );\n\t#ifdef USE_TANGENT\n\t\tvTangent = normalize( transformedTangent );\n\t\tvBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );\n\t#endif\n#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )\n\tvViewPosition = - mvPosition.xyz;\n#endif\n}",
			points_frag: "uniform vec3 diffuse;\nuniform float opacity;\n#include <common>\n#include <color_pars_fragment>\n#include <map_particle_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec3 outgoingLight = vec3( 0.0 );\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <map_particle_fragment>\n\t#include <color_fragment>\n\t#include <alphatest_fragment>\n\toutgoingLight = diffuseColor.rgb;\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n}",
			points_vert: "uniform float size;\nuniform float scale;\n#include <common>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <color_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <project_vertex>\n\tgl_PointSize = size;\n\t#ifdef USE_SIZEATTENUATION\n\t\tbool isPerspective = isPerspectiveMatrix( projectionMatrix );\n\t\tif ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );\n\t#endif\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <worldpos_vertex>\n\t#include <fog_vertex>\n}",
			shadow_frag: "uniform vec3 color;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <shadowmap_pars_fragment>\n#include <shadowmask_pars_fragment>\nvoid main() {\n\tgl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n}",
			shadow_vert: "#include <common>\n#include <fog_pars_vertex>\n#include <shadowmap_pars_vertex>\nvoid main() {\n\t#include <begin_vertex>\n\t#include <project_vertex>\n\t#include <worldpos_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}",
			sprite_frag: "uniform vec3 diffuse;\nuniform float opacity;\n#include <common>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec3 outgoingLight = vec3( 0.0 );\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\toutgoingLight = diffuseColor.rgb;\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n}",
			sprite_vert: "uniform float rotation;\nuniform vec2 center;\n#include <common>\n#include <uv_pars_vertex>\n#include <fog_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\tvec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );\n\tvec2 scale;\n\tscale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );\n\tscale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );\n\t#ifndef USE_SIZEATTENUATION\n\t\tbool isPerspective = isPerspectiveMatrix( projectionMatrix );\n\t\tif ( isPerspective ) scale *= - mvPosition.z;\n\t#endif\n\tvec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;\n\tvec2 rotatedPosition;\n\trotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;\n\trotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;\n\tmvPosition.xy += rotatedPosition;\n\tgl_Position = projectionMatrix * mvPosition;\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <fog_vertex>\n}"
		},
		ir = {
			common: {
				diffuse: {
					value: new Vn(15658734)
				},
				opacity: {
					value: 1
				},
				map: {
					value: null
				},
				uvTransform: {
					value: new pe
				},
				uv2Transform: {
					value: new pe
				},
				alphaMap: {
					value: null
				}
			},
			specularmap: {
				specularMap: {
					value: null
				}
			},
			envmap: {
				envMap: {
					value: null
				},
				flipEnvMap: {
					value: -1
				},
				reflectivity: {
					value: 1
				},
				refractionRatio: {
					value: .98
				},
				maxMipLevel: {
					value: 0
				}
			},
			aomap: {
				aoMap: {
					value: null
				},
				aoMapIntensity: {
					value: 1
				}
			},
			lightmap: {
				lightMap: {
					value: null
				},
				lightMapIntensity: {
					value: 1
				}
			},
			emissivemap: {
				emissiveMap: {
					value: null
				}
			},
			bumpmap: {
				bumpMap: {
					value: null
				},
				bumpScale: {
					value: 1
				}
			},
			normalmap: {
				normalMap: {
					value: null
				},
				normalScale: {
					value: new de(1, 1)
				}
			},
			displacementmap: {
				displacementMap: {
					value: null
				},
				displacementScale: {
					value: 1
				},
				displacementBias: {
					value: 0
				}
			},
			roughnessmap: {
				roughnessMap: {
					value: null
				}
			},
			metalnessmap: {
				metalnessMap: {
					value: null
				}
			},
			gradientmap: {
				gradientMap: {
					value: null
				}
			},
			fog: {
				fogDensity: {
					value: 25e-5
				},
				fogNear: {
					value: 1
				},
				fogFar: {
					value: 2e3
				},
				fogColor: {
					value: new Vn(16777215)
				}
			},
			lights: {
				ambientLightColor: {
					value: []
				},
				lightProbe: {
					value: []
				},
				directionalLights: {
					value: [],
					properties: {
						direction: {},
						color: {}
					}
				},
				directionalLightShadows: {
					value: [],
					properties: {
						shadowBias: {},
						shadowNormalBias: {},
						shadowRadius: {},
						shadowMapSize: {}
					}
				},
				directionalShadowMap: {
					value: []
				},
				directionalShadowMatrix: {
					value: []
				},
				spotLights: {
					value: [],
					properties: {
						color: {},
						position: {},
						direction: {},
						distance: {},
						coneCos: {},
						penumbraCos: {},
						decay: {}
					}
				},
				spotLightShadows: {
					value: [],
					properties: {
						shadowBias: {},
						shadowNormalBias: {},
						shadowRadius: {},
						shadowMapSize: {}
					}
				},
				spotShadowMap: {
					value: []
				},
				spotShadowMatrix: {
					value: []
				},
				pointLights: {
					value: [],
					properties: {
						color: {},
						position: {},
						decay: {},
						distance: {}
					}
				},
				pointLightShadows: {
					value: [],
					properties: {
						shadowBias: {},
						shadowNormalBias: {},
						shadowRadius: {},
						shadowMapSize: {},
						shadowCameraNear: {},
						shadowCameraFar: {}
					}
				},
				pointShadowMap: {
					value: []
				},
				pointShadowMatrix: {
					value: []
				},
				hemisphereLights: {
					value: [],
					properties: {
						direction: {},
						skyColor: {},
						groundColor: {}
					}
				},
				rectAreaLights: {
					value: [],
					properties: {
						color: {},
						position: {},
						width: {},
						height: {}
					}
				},
				ltc_1: {
					value: null
				},
				ltc_2: {
					value: null
				}
			},
			points: {
				diffuse: {
					value: new Vn(15658734)
				},
				opacity: {
					value: 1
				},
				size: {
					value: 1
				},
				scale: {
					value: 1
				},
				map: {
					value: null
				},
				alphaMap: {
					value: null
				},
				uvTransform: {
					value: new pe
				}
			},
			sprite: {
				diffuse: {
					value: new Vn(15658734)
				},
				opacity: {
					value: 1
				},
				center: {
					value: new de(.5, .5)
				},
				rotation: {
					value: 0
				},
				map: {
					value: null
				},
				alphaMap: {
					value: null
				},
				uvTransform: {
					value: new pe
				}
			}
		},
		rr = {
			basic: {
				uniforms: Hi([ir.common, ir.specularmap, ir.envmap, ir.aomap, ir.lightmap, ir.fog]),
				vertexShader: nr.meshbasic_vert,
				fragmentShader: nr.meshbasic_frag
			},
			lambert: {
				uniforms: Hi([ir.common, ir.specularmap, ir.envmap, ir.aomap, ir.lightmap, ir.emissivemap, ir.fog, ir.lights, {
					emissive: {
						value: new Vn(0)
					}
				}]),
				vertexShader: nr.meshlambert_vert,
				fragmentShader: nr.meshlambert_frag
			},
			phong: {
				uniforms: Hi([ir.common, ir.specularmap, ir.envmap, ir.aomap, ir.lightmap, ir.emissivemap, ir.bumpmap, ir.normalmap, ir.displacementmap, ir.fog, ir.lights, {
					emissive: {
						value: new Vn(0)
					},
					specular: {
						value: new Vn(1118481)
					},
					shininess: {
						value: 30
					}
				}]),
				vertexShader: nr.meshphong_vert,
				fragmentShader: nr.meshphong_frag
			},
			standard: {
				uniforms: Hi([ir.common, ir.envmap, ir.aomap, ir.lightmap, ir.emissivemap, ir.bumpmap, ir.normalmap, ir.displacementmap, ir.roughnessmap, ir.metalnessmap, ir.fog, ir.lights, {
					emissive: {
						value: new Vn(0)
					},
					roughness: {
						value: 1
					},
					metalness: {
						value: 0
					},
					envMapIntensity: {
						value: 1
					}
				}]),
				vertexShader: nr.meshphysical_vert,
				fragmentShader: nr.meshphysical_frag
			},
			toon: {
				uniforms: Hi([ir.common, ir.aomap, ir.lightmap, ir.emissivemap, ir.bumpmap, ir.normalmap, ir.displacementmap, ir.gradientmap, ir.fog, ir.lights, {
					emissive: {
						value: new Vn(0)
					}
				}]),
				vertexShader: nr.meshtoon_vert,
				fragmentShader: nr.meshtoon_frag
			},
			matcap: {
				uniforms: Hi([ir.common, ir.bumpmap, ir.normalmap, ir.displacementmap, ir.fog, {
					matcap: {
						value: null
					}
				}]),
				vertexShader: nr.meshmatcap_vert,
				fragmentShader: nr.meshmatcap_frag
			},
			points: {
				uniforms: Hi([ir.points, ir.fog]),
				vertexShader: nr.points_vert,
				fragmentShader: nr.points_frag
			},
			dashed: {
				uniforms: Hi([ir.common, ir.fog, {
					scale: {
						value: 1
					},
					dashSize: {
						value: 1
					},
					totalSize: {
						value: 2
					}
				}]),
				vertexShader: nr.linedashed_vert,
				fragmentShader: nr.linedashed_frag
			},
			depth: {
				uniforms: Hi([ir.common, ir.displacementmap]),
				vertexShader: nr.depth_vert,
				fragmentShader: nr.depth_frag
			},
			normal: {
				uniforms: Hi([ir.common, ir.bumpmap, ir.normalmap, ir.displacementmap, {
					opacity: {
						value: 1
					}
				}]),
				vertexShader: nr.normal_vert,
				fragmentShader: nr.normal_frag
			},
			sprite: {
				uniforms: Hi([ir.sprite, ir.fog]),
				vertexShader: nr.sprite_vert,
				fragmentShader: nr.sprite_frag
			},
			background: {
				uniforms: {
					uvTransform: {
						value: new pe
					},
					t2D: {
						value: null
					}
				},
				vertexShader: nr.background_vert,
				fragmentShader: nr.background_frag
			},
			cube: {
				uniforms: Hi([ir.envmap, {
					opacity: {
						value: 1
					}
				}]),
				vertexShader: nr.cube_vert,
				fragmentShader: nr.cube_frag
			},
			equirect: {
				uniforms: {
					tEquirect: {
						value: null
					}
				},
				vertexShader: nr.equirect_vert,
				fragmentShader: nr.equirect_frag
			},
			distanceRGBA: {
				uniforms: Hi([ir.common, ir.displacementmap, {
					referencePosition: {
						value: new we
					},
					nearDistance: {
						value: 1
					},
					farDistance: {
						value: 1e3
					}
				}]),
				vertexShader: nr.distanceRGBA_vert,
				fragmentShader: nr.distanceRGBA_frag
			},
			shadow: {
				uniforms: Hi([ir.lights, ir.fog, {
					color: {
						value: new Vn(0)
					},
					opacity: {
						value: 1
					}
				}]),
				vertexShader: nr.shadow_vert,
				fragmentShader: nr.shadow_frag
			}
		};

	function sr(t, e, n, i, r) {
		const s = new Vn(0);
		let o, a, c = 0,
			l = null,
			h = 0,
			u = null;

		function d(t, e) {
			n.buffers.color.setClear(t.r, t.g, t.b, e, r)
		}
		return {
			getClearColor: function() {
				return s
			},
			setClearColor: function(t, e = 1) {
				s.set(t), c = e, d(s, c)
			},
			getClearAlpha: function() {
				return c
			},
			setClearAlpha: function(t) {
				c = t, d(s, c)
			},
			render: function(n, r, p, f) {
				let m = !0 === r.isScene ? r.background : null;
				m && m.isTexture && (m = e.get(m));
				const g = t.xr,
					v = g.getSession && g.getSession();
				v && "additive" === v.environmentBlendMode && (m = null), null === m ? d(s, c) : m && m.isColor && (d(m, 1), f = !0), (t.autoClear || f) && t.clear(t.autoClearColor, t.autoClearDepth, t.autoClearStencil), m && (m.isCubeTexture || m.isWebGLCubeRenderTarget || 306 === m.mapping) ? (void 0 === a && (a = new zi(new Ui(1, 1, 1), new Gi({
					name: "BackgroundCubeMaterial",
					uniforms: Fi(rr.cube.uniforms),
					vertexShader: rr.cube.vertexShader,
					fragmentShader: rr.cube.fragmentShader,
					side: 1,
					depthTest: !1,
					depthWrite: !1,
					fog: !1
				})), a.geometry.deleteAttribute("normal"), a.geometry.deleteAttribute("uv"), a.onBeforeRender = function(t, e, n) {
					this.matrixWorld.copyPosition(n.matrixWorld)
				}, Object.defineProperty(a.material, "envMap", {
					get: function() {
						return this.uniforms.envMap.value
					}
				}), i.update(a)), m.isWebGLCubeRenderTarget && (m = m.texture), a.material.uniforms.envMap.value = m, a.material.uniforms.flipEnvMap.value = m.isCubeTexture && m._needsFlipEnvMap ? -1 : 1, l === m && h === m.version && u === t.toneMapping || (a.material.needsUpdate = !0, l = m, h = m.version, u = t.toneMapping), n.unshift(a, a.geometry, a.material, 0, 0, null)) : m && m.isTexture && (void 0 === o && (o = new zi(new er(2, 2), new Gi({
					name: "BackgroundMaterial",
					uniforms: Fi(rr.background.uniforms),
					vertexShader: rr.background.vertexShader,
					fragmentShader: rr.background.fragmentShader,
					side: 0,
					depthTest: !1,
					depthWrite: !1,
					fog: !1
				})), o.geometry.deleteAttribute("normal"), Object.defineProperty(o.material, "map", {
					get: function() {
						return this.uniforms.t2D.value
					}
				}), i.update(o)), o.material.uniforms.t2D.value = m, !0 === m.matrixAutoUpdate && m.updateMatrix(), o.material.uniforms.uvTransform.value.copy(m.matrix), l === m && h === m.version && u === t.toneMapping || (o.material.needsUpdate = !0, l = m, h = m.version, u = t.toneMapping), n.unshift(o, o.geometry, o.material, 0, 0, null))
			}
		}
	}

	function or(t, e, n, i) {
		const r = t.getParameter(34921),
			s = i.isWebGL2 ? null : e.get("OES_vertex_array_object"),
			o = i.isWebGL2 || null !== s,
			a = {},
			c = d(null);
		let l = c;

		function h(e) {
			return i.isWebGL2 ? t.bindVertexArray(e) : s.bindVertexArrayOES(e)
		}

		function u(e) {
			return i.isWebGL2 ? t.deleteVertexArray(e) : s.deleteVertexArrayOES(e)
		}

		function d(t) {
			const e = [],
				n = [],
				i = [];
			for (let t = 0; t < r; t++) e[t] = 0, n[t] = 0, i[t] = 0;
			return {
				geometry: null,
				program: null,
				wireframe: !1,
				newAttributes: e,
				enabledAttributes: n,
				attributeDivisors: i,
				object: t,
				attributes: {},
				index: null
			}
		}

		function p() {
			const t = l.newAttributes;
			for (let e = 0, n = t.length; e < n; e++) t[e] = 0
		}

		function f(t) {
			m(t, 0)
		}

		function m(n, r) {
			const s = l.newAttributes,
				o = l.enabledAttributes,
				a = l.attributeDivisors;
			if (s[n] = 1, 0 === o[n] && (t.enableVertexAttribArray(n), o[n] = 1), a[n] !== r) {
				(i.isWebGL2 ? t : e.get("ANGLE_instanced_arrays"))[i.isWebGL2 ? "vertexAttribDivisor" : "vertexAttribDivisorANGLE"](n, r), a[n] = r
			}
		}

		function g() {
			const e = l.newAttributes,
				n = l.enabledAttributes;
			for (let i = 0, r = n.length; i < r; i++) n[i] !== e[i] && (t.disableVertexAttribArray(i), n[i] = 0)
		}

		function v(e, n, r, s, o, a) {
			!0 !== i.isWebGL2 || 5124 !== r && 5125 !== r ? t.vertexAttribPointer(e, n, r, s, o, a) : t.vertexAttribIPointer(e, n, r, o, a)
		}

		function y() {
			x(), l !== c && (l = c, h(l.object))
		}

		function x() {
			c.geometry = null, c.program = null, c.wireframe = !1
		}
		return {
			setup: function(r, c, u, y, x) {
				let b = !1;
				if (o) {
					const e = function(e, n, r) {
						const o = !0 === r.wireframe;
						let c = a[e.id];
						void 0 === c && (c = {}, a[e.id] = c);
						let l = c[n.id];
						void 0 === l && (l = {}, c[n.id] = l);
						let h = l[o];
						void 0 === h && (h = d(i.isWebGL2 ? t.createVertexArray() : s.createVertexArrayOES()), l[o] = h);
						return h
					}(y, u, c);
					l !== e && (l = e, h(l.object)), b = function(t, e) {
						const n = l.attributes,
							i = t.attributes;
						let r = 0;
						for (const t in i) {
							const e = n[t],
								s = i[t];
							if (void 0 === e) return !0;
							if (e.attribute !== s) return !0;
							if (e.data !== s.data) return !0;
							r++
						}
						return l.attributesNum !== r || l.index !== e
					}(y, x), b && function(t, e) {
						const n = {},
							i = t.attributes;
						let r = 0;
						for (const t in i) {
							const e = i[t],
								s = {};
							s.attribute = e, e.data && (s.data = e.data), n[t] = s, r++
						}
						l.attributes = n, l.attributesNum = r, l.index = e
					}(y, x)
				} else {
					const t = !0 === c.wireframe;
					l.geometry === y.id && l.program === u.id && l.wireframe === t || (l.geometry = y.id, l.program = u.id, l.wireframe = t, b = !0)
				}!0 === r.isInstancedMesh && (b = !0), null !== x && n.update(x, 34963), b && (! function(r, s, o, a) {
					if (!1 === i.isWebGL2 && (r.isInstancedMesh || a.isInstancedBufferGeometry) && null === e.get("ANGLE_instanced_arrays")) return;
					p();
					const c = a.attributes,
						l = o.getAttributes(),
						h = s.defaultAttributeValues;
					for (const e in l) {
						const i = l[e];
						if (i >= 0) {
							const s = c[e];
							if (void 0 !== s) {
								const e = s.normalized,
									r = s.itemSize,
									o = n.get(s);
								if (void 0 === o) continue;
								const c = o.buffer,
									l = o.type,
									h = o.bytesPerElement;
								if (s.isInterleavedBufferAttribute) {
									const n = s.data,
										o = n.stride,
										u = s.offset;
									n && n.isInstancedInterleavedBuffer ? (m(i, n.meshPerAttribute), void 0 === a._maxInstanceCount && (a._maxInstanceCount = n.meshPerAttribute * n.count)) : f(i), t.bindBuffer(34962, c), v(i, r, l, e, o * h, u * h)
								} else s.isInstancedBufferAttribute ? (m(i, s.meshPerAttribute), void 0 === a._maxInstanceCount && (a._maxInstanceCount = s.meshPerAttribute * s.count)) : f(i), t.bindBuffer(34962, c), v(i, r, l, e, 0, 0)
							} else if ("instanceMatrix" === e) {
								const e = n.get(r.instanceMatrix);
								if (void 0 === e) continue;
								const s = e.buffer,
									o = e.type;
								m(i + 0, 1), m(i + 1, 1), m(i + 2, 1), m(i + 3, 1), t.bindBuffer(34962, s), t.vertexAttribPointer(i + 0, 4, o, !1, 64, 0), t.vertexAttribPointer(i + 1, 4, o, !1, 64, 16), t.vertexAttribPointer(i + 2, 4, o, !1, 64, 32), t.vertexAttribPointer(i + 3, 4, o, !1, 64, 48)
							} else if ("instanceColor" === e) {
								const e = n.get(r.instanceColor);
								if (void 0 === e) continue;
								const s = e.buffer,
									o = e.type;
								m(i, 1), t.bindBuffer(34962, s), t.vertexAttribPointer(i, 3, o, !1, 12, 0)
							} else if (void 0 !== h) {
								const n = h[e];
								if (void 0 !== n) switch (n.length) {
									case 2:
										t.vertexAttrib2fv(i, n);
										break;
									case 3:
										t.vertexAttrib3fv(i, n);
										break;
									case 4:
										t.vertexAttrib4fv(i, n);
										break;
									default:
										t.vertexAttrib1fv(i, n)
								}
							}
						}
					}
					g()
				}(r, c, u, y), null !== x && t.bindBuffer(34963, n.get(x).buffer))
			},
			reset: y,
			resetDefaultState: x,
			dispose: function() {
				y();
				for (const t in a) {
					const e = a[t];
					for (const t in e) {
						const n = e[t];
						for (const t in n) u(n[t].object), delete n[t];
						delete e[t]
					}
					delete a[t]
				}
			},
			releaseStatesOfGeometry: function(t) {
				if (void 0 === a[t.id]) return;
				const e = a[t.id];
				for (const t in e) {
					const n = e[t];
					for (const t in n) u(n[t].object), delete n[t];
					delete e[t]
				}
				delete a[t.id]
			},
			releaseStatesOfProgram: function(t) {
				for (const e in a) {
					const n = a[e];
					if (void 0 === n[t.id]) continue;
					const i = n[t.id];
					for (const t in i) u(i[t].object), delete i[t];
					delete n[t.id]
				}
			},
			initAttributes: p,
			enableAttribute: f,
			disableUnusedAttributes: g
		}
	}

	function ar(t, e, n, i) {
		const r = i.isWebGL2;
		let s;
		this.setMode = function(t) {
			s = t
		}, this.render = function(e, i) {
			t.drawArrays(s, e, i), n.update(i, s, 1)
		}, this.renderInstances = function(i, o, a) {
			if (0 === a) return;
			let c, l;
			if (r) c = t, l = "drawArraysInstanced";
			else if (c = e.get("ANGLE_instanced_arrays"), l = "drawArraysInstancedANGLE", null === c) return void console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");
			c[l](s, i, o, a), n.update(o, s, a)
		}
	}

	function cr(t, e, n) {
		let i;

		function r(e) {
			if ("highp" === e) {
				if (t.getShaderPrecisionFormat(35633, 36338).precision > 0 && t.getShaderPrecisionFormat(35632, 36338).precision > 0) return "highp";
				e = "mediump"
			}
			return "mediump" === e && t.getShaderPrecisionFormat(35633, 36337).precision > 0 && t.getShaderPrecisionFormat(35632, 36337).precision > 0 ? "mediump" : "lowp"
		}
		const s = "undefined" != typeof WebGL2RenderingContext && t instanceof WebGL2RenderingContext || "undefined" != typeof WebGL2ComputeRenderingContext && t instanceof WebGL2ComputeRenderingContext;
		let o = void 0 !== n.precision ? n.precision : "highp";
		const a = r(o);
		a !== o && (console.warn("THREE.WebGLRenderer:", o, "not supported, using", a, "instead."), o = a);
		const c = !0 === n.logarithmicDepthBuffer,
			l = t.getParameter(34930),
			h = t.getParameter(35660),
			u = t.getParameter(3379),
			d = t.getParameter(34076),
			p = t.getParameter(34921),
			f = t.getParameter(36347),
			m = t.getParameter(36348),
			g = t.getParameter(36349),
			v = h > 0,
			y = s || !!e.get("OES_texture_float");
		return {
			isWebGL2: s,
			getMaxAnisotropy: function() {
				if (void 0 !== i) return i;
				const n = e.get("EXT_texture_filter_anisotropic");
				return i = null !== n ? t.getParameter(n.MAX_TEXTURE_MAX_ANISOTROPY_EXT) : 0, i
			},
			getMaxPrecision: r,
			precision: o,
			logarithmicDepthBuffer: c,
			maxTextures: l,
			maxVertexTextures: h,
			maxTextureSize: u,
			maxCubemapSize: d,
			maxAttributes: p,
			maxVertexUniforms: f,
			maxVaryings: m,
			maxFragmentUniforms: g,
			vertexTextures: v,
			floatFragmentTextures: y,
			floatVertexTextures: v && y,
			maxSamples: s ? t.getParameter(36183) : 0
		}
	}

	function lr(t) {
		const e = this;
		let n = null,
			i = 0,
			r = !1,
			s = !1;
		const o = new En,
			a = new pe,
			c = {
				value: null,
				needsUpdate: !1
			};

		function l() {
			c.value !== n && (c.value = n, c.needsUpdate = i > 0), e.numPlanes = i, e.numIntersection = 0
		}

		function h(t, n, i, r) {
			const s = null !== t ? t.length : 0;
			let l = null;
			if (0 !== s) {
				if (l = c.value, !0 !== r || null === l) {
					const e = i + 4 * s,
						r = n.matrixWorldInverse;
					a.getNormalMatrix(r), (null === l || l.length < e) && (l = new Float32Array(e));
					for (let e = 0, n = i; e !== s; ++e, n += 4) o.copy(t[e]).applyMatrix4(r, a), o.normal.toArray(l, n), l[n + 3] = o.constant
				}
				c.value = l, c.needsUpdate = !0
			}
			return e.numPlanes = s, e.numIntersection = 0, l
		}
		this.uniform = c, this.numPlanes = 0, this.numIntersection = 0, this.init = function(t, e, s) {
			const o = 0 !== t.length || e || 0 !== i || r;
			return r = e, n = h(t, s, 0), i = t.length, o
		}, this.beginShadows = function() {
			s = !0, h(null)
		}, this.endShadows = function() {
			s = !1, l()
		}, this.setState = function(e, o, a) {
			const u = e.clippingPlanes,
				d = e.clipIntersection,
				p = e.clipShadows,
				f = t.get(e);
			if (!r || null === u || 0 === u.length || s && !p) s ? h(null) : l();
			else {
				const t = s ? 0 : i,
					e = 4 * t;
				let r = f.clippingState || null;
				c.value = r, r = h(u, o, e, a);
				for (let t = 0; t !== e; ++t) r[t] = n[t];
				f.clippingState = r, this.numIntersection = d ? this.numPlanes : 0, this.numPlanes += t
			}
		}
	}

	function hr(t) {
		let e = new WeakMap;

		function n(t, e) {
			return 303 === e ? t.mapping = 301 : 304 === e && (t.mapping = 302), t
		}

		function i(t) {
			const n = t.target;
			n.removeEventListener("dispose", i);
			const r = e.get(n);
			void 0 !== r && (e.delete(n), r.dispose())
		}
		return {
			get: function(r) {
				if (r && r.isTexture) {
					const s = r.mapping;
					if (303 === s || 304 === s) {
						if (e.has(r)) {
							return n(e.get(r).texture, r.mapping)
						} {
							const s = r.image;
							if (s && s.height > 0) {
								const o = t.getRenderList(),
									a = t.getRenderTarget(),
									c = new Xi(s.height / 2);
								return c.fromEquirectangularTexture(t, r), e.set(r, c), t.setRenderTarget(a), t.setRenderList(o), r.addEventListener("dispose", i), n(c.texture, r.mapping)
							}
							return null
						}
					}
				}
				return r
			},
			dispose: function() {
				e = new WeakMap
			}
		}
	}

	function ur(t) {
		const e = {};

		function n(n) {
			if (void 0 !== e[n]) return e[n];
			let i;
			switch (n) {
				case "WEBGL_depth_texture":
					i = t.getExtension("WEBGL_depth_texture") || t.getExtension("MOZ_WEBGL_depth_texture") || t.getExtension("WEBKIT_WEBGL_depth_texture");
					break;
				case "EXT_texture_filter_anisotropic":
					i = t.getExtension("EXT_texture_filter_anisotropic") || t.getExtension("MOZ_EXT_texture_filter_anisotropic") || t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");
					break;
				case "WEBGL_compressed_texture_s3tc":
					i = t.getExtension("WEBGL_compressed_texture_s3tc") || t.getExtension("MOZ_WEBGL_compressed_texture_s3tc") || t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");
					break;
				case "WEBGL_compressed_texture_pvrtc":
					i = t.getExtension("WEBGL_compressed_texture_pvrtc") || t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");
					break;
				default:
					i = t.getExtension(n)
			}
			return e[n] = i, i
		}
		return {
			has: function(t) {
				return null !== n(t)
			},
			init: function(t) {
				t.isWebGL2 ? n("EXT_color_buffer_float") : (n("WEBGL_depth_texture"), n("OES_texture_float"), n("OES_texture_half_float"), n("OES_texture_half_float_linear"), n("OES_standard_derivatives"), n("OES_element_index_uint"), n("OES_vertex_array_object"), n("ANGLE_instanced_arrays")), n("OES_texture_float_linear"), n("EXT_color_buffer_half_float")
			},
			get: function(t) {
				const e = n(t);
				return null === e && console.warn("THREE.WebGLRenderer: " + t + " extension not supported."), e
			}
		}
	}

	function dr(t, e, n, i) {
		const r = {},
			s = new WeakMap;

		function o(t) {
			const a = t.target;
			null !== a.index && e.remove(a.index);
			for (const t in a.attributes) e.remove(a.attributes[t]);
			a.removeEventListener("dispose", o), delete r[a.id];
			const c = s.get(a);
			c && (e.remove(c), s.delete(a)), i.releaseStatesOfGeometry(a), !0 === a.isInstancedBufferGeometry && delete a._maxInstanceCount, n.memory.geometries--
		}

		function a(t) {
			const n = [],
				i = t.index,
				r = t.attributes.position;
			let o = 0;
			if (null !== i) {
				const t = i.array;
				o = i.version;
				for (let e = 0, i = t.length; e < i; e += 3) {
					const i = t[e + 0],
						r = t[e + 1],
						s = t[e + 2];
					n.push(i, r, r, s, s, i)
				}
			} else {
				const t = r.array;
				o = r.version;
				for (let e = 0, i = t.length / 3 - 1; e < i; e += 3) {
					const t = e + 0,
						i = e + 1,
						r = e + 2;
					n.push(t, i, i, r, r, t)
				}
			}
			const a = new(ci(n) > 65535 ? ri : ni)(n, 1);
			a.version = o;
			const c = s.get(t);
			c && e.remove(c), s.set(t, a)
		}
		return {
			get: function(t, e) {
				return !0 === r[e.id] || (e.addEventListener("dispose", o), r[e.id] = !0, n.memory.geometries++), e
			},
			update: function(t) {
				const n = t.attributes;
				for (const t in n) e.update(n[t], 34962);
				const i = t.morphAttributes;
				for (const t in i) {
					const n = i[t];
					for (let t = 0, i = n.length; t < i; t++) e.update(n[t], 34962)
				}
			},
			getWireframeAttribute: function(t) {
				const e = s.get(t);
				if (e) {
					const n = t.index;
					null !== n && e.version < n.version && a(t)
				} else a(t);
				return s.get(t)
			}
		}
	}

	function pr(t, e, n, i) {
		const r = i.isWebGL2;
		let s, o, a;
		this.setMode = function(t) {
			s = t
		}, this.setIndex = function(t) {
			o = t.type, a = t.bytesPerElement
		}, this.render = function(e, i) {
			t.drawElements(s, i, o, e * a), n.update(i, s, 1)
		}, this.renderInstances = function(i, c, l) {
			if (0 === l) return;
			let h, u;
			if (r) h = t, u = "drawElementsInstanced";
			else if (h = e.get("ANGLE_instanced_arrays"), u = "drawElementsInstancedANGLE", null === h) return void console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");
			h[u](s, c, o, i * a, l), n.update(c, s, l)
		}
	}

	function fr(t) {
		const e = {
			frame: 0,
			calls: 0,
			triangles: 0,
			points: 0,
			lines: 0
		};
		return {
			memory: {
				geometries: 0,
				textures: 0
			},
			render: e,
			programs: null,
			autoReset: !0,
			reset: function() {
				e.frame++, e.calls = 0, e.triangles = 0, e.points = 0, e.lines = 0
			},
			update: function(t, n, i) {
				switch (e.calls++, n) {
					case 4:
						e.triangles += i * (t / 3);
						break;
					case 1:
						e.lines += i * (t / 2);
						break;
					case 3:
						e.lines += i * (t - 1);
						break;
					case 2:
						e.lines += i * t;
						break;
					case 0:
						e.points += i * t;
						break;
					default:
						console.error("THREE.WebGLInfo: Unknown draw mode:", n)
				}
			}
		}
	}

	function mr(t, e) {
		return t[0] - e[0]
	}

	function gr(t, e) {
		return Math.abs(e[1]) - Math.abs(t[1])
	}

	function vr(t) {
		const e = {},
			n = new Float32Array(8),
			i = [];
		for (let t = 0; t < 8; t++) i[t] = [t, 0];
		return {
			update: function(r, s, o, a) {
				const c = r.morphTargetInfluences,
					l = void 0 === c ? 0 : c.length;
				let h = e[s.id];
				if (void 0 === h) {
					h = [];
					for (let t = 0; t < l; t++) h[t] = [t, 0];
					e[s.id] = h
				}
				for (let t = 0; t < l; t++) {
					const e = h[t];
					e[0] = t, e[1] = c[t]
				}
				h.sort(gr);
				for (let t = 0; t < 8; t++) t < l && h[t][1] ? (i[t][0] = h[t][0], i[t][1] = h[t][1]) : (i[t][0] = Number.MAX_SAFE_INTEGER, i[t][1] = 0);
				i.sort(mr);
				const u = o.morphTargets && s.morphAttributes.position,
					d = o.morphNormals && s.morphAttributes.normal;
				let p = 0;
				for (let t = 0; t < 8; t++) {
					const e = i[t],
						r = e[0],
						o = e[1];
					r !== Number.MAX_SAFE_INTEGER && o ? (u && s.getAttribute("morphTarget" + t) !== u[r] && s.setAttribute("morphTarget" + t, u[r]), d && s.getAttribute("morphNormal" + t) !== d[r] && s.setAttribute("morphNormal" + t, d[r]), n[t] = o, p += o) : (u && !0 === s.hasAttribute("morphTarget" + t) && s.deleteAttribute("morphTarget" + t), d && !0 === s.hasAttribute("morphNormal" + t) && s.deleteAttribute("morphNormal" + t), n[t] = 0)
				}
				const f = s.morphTargetsRelative ? 1 : 1 - p;
				a.getUniforms().setValue(t, "morphTargetBaseInfluence", f), a.getUniforms().setValue(t, "morphTargetInfluences", n)
			}
		}
	}

	function yr(t, e, n, i) {
		let r = new WeakMap;

		function s(t) {
			const e = t.target;
			e.removeEventListener("dispose", s), n.remove(e.instanceMatrix), null !== e.instanceColor && n.remove(e.instanceColor)
		}
		return {
			update: function(t) {
				const o = i.render.frame,
					a = t.geometry,
					c = e.get(t, a);
				return r.get(c) !== o && (e.update(c), r.set(c, o)), t.isInstancedMesh && (!1 === t.hasEventListener("dispose", s) && t.addEventListener("dispose", s), n.update(t.instanceMatrix, 34962), null !== t.instanceColor && n.update(t.instanceColor, 34962)), c
			},
			dispose: function() {
				r = new WeakMap
			}
		}
	}

	function xr(t = null, e = 1, n = 1, i = 1) {
		ve.call(this, null), this.image = {
			data: t,
			width: e,
			height: n,
			depth: i
		}, this.magFilter = Bt, this.minFilter = Bt, this.wrapR = Nt, this.generateMipmaps = !1, this.flipY = !1, this.needsUpdate = !0
	}

	function br(t = null, e = 1, n = 1, i = 1) {
		ve.call(this, null), this.image = {
			data: t,
			width: e,
			height: n,
			depth: i
		}, this.magFilter = Bt, this.minFilter = Bt, this.wrapR = Nt, this.generateMipmaps = !1, this.flipY = !1, this.needsUpdate = !0
	}
	rr.physical = {
		uniforms: Hi([rr.standard.uniforms, {
			clearcoat: {
				value: 0
			},
			clearcoatMap: {
				value: null
			},
			clearcoatRoughness: {
				value: 0
			},
			clearcoatRoughnessMap: {
				value: null
			},
			clearcoatNormalScale: {
				value: new de(1, 1)
			},
			clearcoatNormalMap: {
				value: null
			},
			sheen: {
				value: new Vn(0)
			},
			transmission: {
				value: 0
			},
			transmissionMap: {
				value: null
			}
		}]),
		vertexShader: nr.meshphysical_vert,
		fragmentShader: nr.meshphysical_frag
	}, xr.prototype = Object.create(ve.prototype), xr.prototype.constructor = xr, xr.prototype.isDataTexture2DArray = !0, br.prototype = Object.create(ve.prototype), br.prototype.constructor = br, br.prototype.isDataTexture3D = !0;
	const _r = new ve,
		wr = new xr,
		Mr = new br,
		Sr = new qi,
		Tr = [],
		Er = [],
		Ar = new Float32Array(16),
		Lr = new Float32Array(9),
		Cr = new Float32Array(4);

	function Rr(t, e, n) {
		const i = t[0];
		if (i <= 0 || i > 0) return t;
		const r = e * n;
		let s = Tr[r];
		if (void 0 === s && (s = new Float32Array(r), Tr[r] = s), 0 !== e) {
			i.toArray(s, 0);
			for (let i = 1, r = 0; i !== e; ++i) r += n, t[i].toArray(s, r)
		}
		return s
	}

	function Pr(t, e) {
		if (t.length !== e.length) return !1;
		for (let n = 0, i = t.length; n < i; n++)
			if (t[n] !== e[n]) return !1;
		return !0
	}

	function Dr(t, e) {
		for (let n = 0, i = e.length; n < i; n++) t[n] = e[n]
	}

	function Or(t, e) {
		let n = Er[e];
		void 0 === n && (n = new Int32Array(e), Er[e] = n);
		for (let i = 0; i !== e; ++i) n[i] = t.allocateTextureUnit();
		return n
	}

	function Ir(t, e) {
		const n = this.cache;
		n[0] !== e && (t.uniform1f(this.addr, e), n[0] = e)
	}

	function Nr(t, e) {
		const n = this.cache;
		if (void 0 !== e.x) n[0] === e.x && n[1] === e.y || (t.uniform2f(this.addr, e.x, e.y), n[0] = e.x, n[1] = e.y);
		else {
			if (Pr(n, e)) return;
			t.uniform2fv(this.addr, e), Dr(n, e)
		}
	}

	function zr(t, e) {
		const n = this.cache;
		if (void 0 !== e.x) n[0] === e.x && n[1] === e.y && n[2] === e.z || (t.uniform3f(this.addr, e.x, e.y, e.z), n[0] = e.x, n[1] = e.y, n[2] = e.z);
		else if (void 0 !== e.r) n[0] === e.r && n[1] === e.g && n[2] === e.b || (t.uniform3f(this.addr, e.r, e.g, e.b), n[0] = e.r, n[1] = e.g, n[2] = e.b);
		else {
			if (Pr(n, e)) return;
			t.uniform3fv(this.addr, e), Dr(n, e)
		}
	}

	function Br(t, e) {
		const n = this.cache;
		if (void 0 !== e.x) n[0] === e.x && n[1] === e.y && n[2] === e.z && n[3] === e.w || (t.uniform4f(this.addr, e.x, e.y, e.z, e.w), n[0] = e.x, n[1] = e.y, n[2] = e.z, n[3] = e.w);
		else {
			if (Pr(n, e)) return;
			t.uniform4fv(this.addr, e), Dr(n, e)
		}
	}

	function Ur(t, e) {
		const n = this.cache,
			i = e.elements;
		if (void 0 === i) {
			if (Pr(n, e)) return;
			t.uniformMatrix2fv(this.addr, !1, e), Dr(n, e)
		} else {
			if (Pr(n, i)) return;
			Cr.set(i), t.uniformMatrix2fv(this.addr, !1, Cr), Dr(n, i)
		}
	}

	function Fr(t, e) {
		const n = this.cache,
			i = e.elements;
		if (void 0 === i) {
			if (Pr(n, e)) return;
			t.uniformMatrix3fv(this.addr, !1, e), Dr(n, e)
		} else {
			if (Pr(n, i)) return;
			Lr.set(i), t.uniformMatrix3fv(this.addr, !1, Lr), Dr(n, i)
		}
	}

	function Hr(t, e) {
		const n = this.cache,
			i = e.elements;
		if (void 0 === i) {
			if (Pr(n, e)) return;
			t.uniformMatrix4fv(this.addr, !1, e), Dr(n, e)
		} else {
			if (Pr(n, i)) return;
			Ar.set(i), t.uniformMatrix4fv(this.addr, !1, Ar), Dr(n, i)
		}
	}

	function kr(t, e, n) {
		const i = this.cache,
			r = n.allocateTextureUnit();
		i[0] !== r && (t.uniform1i(this.addr, r), i[0] = r), n.safeSetTexture2D(e || _r, r)
	}

	function Gr(t, e, n) {
		const i = this.cache,
			r = n.allocateTextureUnit();
		i[0] !== r && (t.uniform1i(this.addr, r), i[0] = r), n.setTexture2DArray(e || wr, r)
	}

	function jr(t, e, n) {
		const i = this.cache,
			r = n.allocateTextureUnit();
		i[0] !== r && (t.uniform1i(this.addr, r), i[0] = r), n.setTexture3D(e || Mr, r)
	}

	function Vr(t, e, n) {
		const i = this.cache,
			r = n.allocateTextureUnit();
		i[0] !== r && (t.uniform1i(this.addr, r), i[0] = r), n.safeSetTextureCube(e || Sr, r)
	}

	function Wr(t, e) {
		const n = this.cache;
		n[0] !== e && (t.uniform1i(this.addr, e), n[0] = e)
	}

	function $r(t, e) {
		const n = this.cache;
		Pr(n, e) || (t.uniform2iv(this.addr, e), Dr(n, e))
	}

	function qr(t, e) {
		const n = this.cache;
		Pr(n, e) || (t.uniform3iv(this.addr, e), Dr(n, e))
	}

	function Xr(t, e) {
		const n = this.cache;
		Pr(n, e) || (t.uniform4iv(this.addr, e), Dr(n, e))
	}

	function Yr(t, e) {
		const n = this.cache;
		n[0] !== e && (t.uniform1ui(this.addr, e), n[0] = e)
	}

	function Zr(t, e) {
		t.uniform1fv(this.addr, e)
	}

	function Jr(t, e) {
		t.uniform1iv(this.addr, e)
	}

	function Qr(t, e) {
		t.uniform2iv(this.addr, e)
	}

	function Kr(t, e) {
		t.uniform3iv(this.addr, e)
	}

	function ts(t, e) {
		t.uniform4iv(this.addr, e)
	}

	function es(t, e) {
		const n = Rr(e, this.size, 2);
		t.uniform2fv(this.addr, n)
	}

	function ns(t, e) {
		const n = Rr(e, this.size, 3);
		t.uniform3fv(this.addr, n)
	}

	function is(t, e) {
		const n = Rr(e, this.size, 4);
		t.uniform4fv(this.addr, n)
	}

	function rs(t, e) {
		const n = Rr(e, this.size, 4);
		t.uniformMatrix2fv(this.addr, !1, n)
	}

	function ss(t, e) {
		const n = Rr(e, this.size, 9);
		t.uniformMatrix3fv(this.addr, !1, n)
	}

	function os(t, e) {
		const n = Rr(e, this.size, 16);
		t.uniformMatrix4fv(this.addr, !1, n)
	}

	function as(t, e, n) {
		const i = e.length,
			r = Or(n, i);
		t.uniform1iv(this.addr, r);
		for (let t = 0; t !== i; ++t) n.safeSetTexture2D(e[t] || _r, r[t])
	}

	function cs(t, e, n) {
		const i = e.length,
			r = Or(n, i);
		t.uniform1iv(this.addr, r);
		for (let t = 0; t !== i; ++t) n.safeSetTextureCube(e[t] || Sr, r[t])
	}

	function ls(t, e, n) {
		this.id = t, this.addr = n, this.cache = [], this.setValue = function(t) {
			switch (t) {
				case 5126:
					return Ir;
				case 35664:
					return Nr;
				case 35665:
					return zr;
				case 35666:
					return Br;
				case 35674:
					return Ur;
				case 35675:
					return Fr;
				case 35676:
					return Hr;
				case 5124:
				case 35670:
					return Wr;
				case 35667:
				case 35671:
					return $r;
				case 35668:
				case 35672:
					return qr;
				case 35669:
				case 35673:
					return Xr;
				case 5125:
					return Yr;
				case 35678:
				case 36198:
				case 36298:
				case 36306:
				case 35682:
					return kr;
				case 35679:
				case 36299:
				case 36307:
					return jr;
				case 35680:
				case 36300:
				case 36308:
				case 36293:
					return Vr;
				case 36289:
				case 36303:
				case 36311:
				case 36292:
					return Gr
			}
		}(e.type)
	}

	function hs(t, e, n) {
		this.id = t, this.addr = n, this.cache = [], this.size = e.size, this.setValue = function(t) {
			switch (t) {
				case 5126:
					return Zr;
				case 35664:
					return es;
				case 35665:
					return ns;
				case 35666:
					return is;
				case 35674:
					return rs;
				case 35675:
					return ss;
				case 35676:
					return os;
				case 5124:
				case 35670:
					return Jr;
				case 35667:
				case 35671:
					return Qr;
				case 35668:
				case 35672:
					return Kr;
				case 35669:
				case 35673:
					return ts;
				case 35678:
				case 36198:
				case 36298:
				case 36306:
				case 35682:
					return as;
				case 35680:
				case 36300:
				case 36308:
				case 36293:
					return cs
			}
		}(e.type)
	}

	function us(t) {
		this.id = t, this.seq = [], this.map = {}
	}
	hs.prototype.updateCache = function(t) {
		const e = this.cache;
		t instanceof Float32Array && e.length !== t.length && (this.cache = new Float32Array(t.length)), Dr(e, t)
	}, us.prototype.setValue = function(t, e, n) {
		const i = this.seq;
		for (let r = 0, s = i.length; r !== s; ++r) {
			const s = i[r];
			s.setValue(t, e[s.id], n)
		}
	};
	const ds = /(\w+)(\])?(\[|\.)?/g;

	function ps(t, e) {
		t.seq.push(e), t.map[e.id] = e
	}

	function fs(t, e, n) {
		const i = t.name,
			r = i.length;
		for (ds.lastIndex = 0;;) {
			const s = ds.exec(i),
				o = ds.lastIndex;
			let a = s[1];
			const c = "]" === s[2],
				l = s[3];
			if (c && (a |= 0), void 0 === l || "[" === l && o + 2 === r) {
				ps(n, void 0 === l ? new ls(a, t, e) : new hs(a, t, e));
				break
			} {
				let t = n.map[a];
				void 0 === t && (t = new us(a), ps(n, t)), n = t
			}
		}
	}

	function ms(t, e) {
		this.seq = [], this.map = {};
		const n = t.getProgramParameter(e, 35718);
		for (let i = 0; i < n; ++i) {
			const n = t.getActiveUniform(e, i);
			fs(n, t.getUniformLocation(e, n.name), this)
		}
	}

	function gs(t, e, n) {
		const i = t.createShader(e);
		return t.shaderSource(i, n), t.compileShader(i), i
	}
	ms.prototype.setValue = function(t, e, n, i) {
		const r = this.map[e];
		void 0 !== r && r.setValue(t, n, i)
	}, ms.prototype.setOptional = function(t, e, n) {
		const i = e[n];
		void 0 !== i && this.setValue(t, n, i)
	}, ms.upload = function(t, e, n, i) {
		for (let r = 0, s = e.length; r !== s; ++r) {
			const s = e[r],
				o = n[s.id];
			!1 !== o.needsUpdate && s.setValue(t, o.value, i)
		}
	}, ms.seqWithValue = function(t, e) {
		const n = [];
		for (let i = 0, r = t.length; i !== r; ++i) {
			const r = t[i];
			r.id in e && n.push(r)
		}
		return n
	};
	let vs = 0;

	function ys(t) {
		switch (t) {
			case ie:
				return ["Linear", "( value )"];
			case 3001:
				return ["sRGB", "( value )"];
			case 3002:
				return ["RGBE", "( value )"];
			case 3004:
				return ["RGBM", "( value, 7.0 )"];
			case 3005:
				return ["RGBM", "( value, 16.0 )"];
			case 3006:
				return ["RGBD", "( value, 256.0 )"];
			case 3007:
				return ["Gamma", "( value, float( GAMMA_FACTOR ) )"];
			case 3003:
				return ["LogLuv", "( value )"];
			default:
				return console.warn("THREE.WebGLProgram: Unsupported encoding:", t), ["Linear", "( value )"]
		}
	}

	function xs(t, e, n) {
		const i = t.getShaderParameter(e, 35713),
			r = t.getShaderInfoLog(e).trim();
		if (i && "" === r) return "";
		return "THREE.WebGLShader: gl.getShaderInfoLog() " + n + "\n" + r + function(t) {
			const e = t.split("\n");
			for (let t = 0; t < e.length; t++) e[t] = t + 1 + ": " + e[t];
			return e.join("\n")
		}(t.getShaderSource(e))
	}

	function bs(t, e) {
		const n = ys(e);
		return "vec4 " + t + "( vec4 value ) { return " + n[0] + "ToLinear" + n[1] + "; }"
	}

	function _s(t, e) {
		const n = ys(e);
		return "vec4 " + t + "( vec4 value ) { return LinearTo" + n[0] + n[1] + "; }"
	}

	function ws(t, e) {
		let n;
		switch (e) {
			case 1:
				n = "Linear";
				break;
			case 2:
				n = "Reinhard";
				break;
			case 3:
				n = "OptimizedCineon";
				break;
			case 4:
				n = "ACESFilmic";
				break;
			case 5:
				n = "Custom";
				break;
			default:
				console.warn("THREE.WebGLProgram: Unsupported toneMapping:", e), n = "Linear"
		}
		return "vec3 " + t + "( vec3 color ) { return " + n + "ToneMapping( color ); }"
	}

	function Ms(t) {
		return "" !== t
	}

	function Ss(t, e) {
		return t.replace(/NUM_DIR_LIGHTS/g, e.numDirLights).replace(/NUM_SPOT_LIGHTS/g, e.numSpotLights).replace(/NUM_RECT_AREA_LIGHTS/g, e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g, e.numPointLights).replace(/NUM_HEMI_LIGHTS/g, e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g, e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS/g, e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g, e.numPointLightShadows)
	}

	function Ts(t, e) {
		return t.replace(/NUM_CLIPPING_PLANES/g, e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g, e.numClippingPlanes - e.numClipIntersection)
	}
	const Es = /^[ \t]*#include +<([\w\d./]+)>/gm;

	function As(t) {
		return t.replace(Es, Ls)
	}

	function Ls(t, e) {
		const n = nr[e];
		if (void 0 === n) throw new Error("Can not resolve #include <" + e + ">");
		return As(n)
	}
	const Cs = /#pragma unroll_loop[\s]+?for \( int i \= (\d+)\; i < (\d+)\; i \+\+ \) \{([\s\S]+?)(?=\})\}/g,
		Rs = /#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;

	function Ps(t) {
		return t.replace(Rs, Os).replace(Cs, Ds)
	}

	function Ds(t, e, n, i) {
		return console.warn("WebGLProgram: #pragma unroll_loop shader syntax is deprecated. Please use #pragma unroll_loop_start syntax instead."), Os(t, e, n, i)
	}

	function Os(t, e, n, i) {
		let r = "";
		for (let t = parseInt(e); t < parseInt(n); t++) r += i.replace(/\[\s*i\s*\]/g, "[ " + t + " ]").replace(/UNROLLED_LOOP_INDEX/g, t);
		return r
	}

	function Is(t) {
		let e = "precision " + t.precision + " float;\nprecision " + t.precision + " int;";
		return "highp" === t.precision ? e += "\n#define HIGH_PRECISION" : "mediump" === t.precision ? e += "\n#define MEDIUM_PRECISION" : "lowp" === t.precision && (e += "\n#define LOW_PRECISION"), e
	}

	function Ns(t, e, n, i) {
		const r = t.getContext(),
			s = n.defines;
		let o = n.vertexShader,
			a = n.fragmentShader;
		const c = function(t) {
				let e = "SHADOWMAP_TYPE_BASIC";
				return 1 === t.shadowMapType ? e = "SHADOWMAP_TYPE_PCF" : 2 === t.shadowMapType ? e = "SHADOWMAP_TYPE_PCF_SOFT" : 3 === t.shadowMapType && (e = "SHADOWMAP_TYPE_VSM"), e
			}(n),
			l = function(t) {
				let e = "ENVMAP_TYPE_CUBE";
				if (t.envMap) switch (t.envMapMode) {
					case 301:
					case 302:
						e = "ENVMAP_TYPE_CUBE";
						break;
					case 306:
					case 307:
						e = "ENVMAP_TYPE_CUBE_UV"
				}
				return e
			}(n),
			h = function(t) {
				let e = "ENVMAP_MODE_REFLECTION";
				if (t.envMap) switch (t.envMapMode) {
					case 302:
					case 307:
						e = "ENVMAP_MODE_REFRACTION"
				}
				return e
			}(n),
			u = function(t) {
				let e = "ENVMAP_BLENDING_NONE";
				if (t.envMap) switch (t.combine) {
					case 0:
						e = "ENVMAP_BLENDING_MULTIPLY";
						break;
					case 1:
						e = "ENVMAP_BLENDING_MIX";
						break;
					case 2:
						e = "ENVMAP_BLENDING_ADD"
				}
				return e
			}(n),
			d = t.gammaFactor > 0 ? t.gammaFactor : 1,
			p = n.isWebGL2 ? "" : function(t) {
				return [t.extensionDerivatives || t.envMapCubeUV || t.bumpMap || t.tangentSpaceNormalMap || t.clearcoatNormalMap || t.flatShading || "physical" === t.shaderID ? "#extension GL_OES_standard_derivatives : enable" : "", (t.extensionFragDepth || t.logarithmicDepthBuffer) && t.rendererExtensionFragDepth ? "#extension GL_EXT_frag_depth : enable" : "", t.extensionDrawBuffers && t.rendererExtensionDrawBuffers ? "#extension GL_EXT_draw_buffers : require" : "", (t.extensionShaderTextureLOD || t.envMap) && t.rendererExtensionShaderTextureLod ? "#extension GL_EXT_shader_texture_lod : enable" : ""].filter(Ms).join("\n")
			}(n),
			f = function(t) {
				const e = [];
				for (const n in t) {
					const i = t[n];
					!1 !== i && e.push("#define " + n + " " + i)
				}
				return e.join("\n")
			}(s),
			m = r.createProgram();
		let g, v, y = n.glslVersion ? "#version " + n.glslVersion + "\n" : "";
		n.isRawShaderMaterial ? (g = [f].filter(Ms).join("\n"), g.length > 0 && (g += "\n"), v = [p, f].filter(Ms).join("\n"), v.length > 0 && (v += "\n")) : (g = [Is(n), "#define SHADER_NAME " + n.shaderName, f, n.instancing ? "#define USE_INSTANCING" : "", n.instancingColor ? "#define USE_INSTANCING_COLOR" : "", n.supportsVertexTextures ? "#define VERTEX_TEXTURES" : "", "#define GAMMA_FACTOR " + d, "#define MAX_BONES " + n.maxBones, n.useFog && n.fog ? "#define USE_FOG" : "", n.useFog && n.fogExp2 ? "#define FOG_EXP2" : "", n.map ? "#define USE_MAP" : "", n.envMap ? "#define USE_ENVMAP" : "", n.envMap ? "#define " + h : "", n.lightMap ? "#define USE_LIGHTMAP" : "", n.aoMap ? "#define USE_AOMAP" : "", n.emissiveMap ? "#define USE_EMISSIVEMAP" : "", n.bumpMap ? "#define USE_BUMPMAP" : "", n.normalMap ? "#define USE_NORMALMAP" : "", n.normalMap && n.objectSpaceNormalMap ? "#define OBJECTSPACE_NORMALMAP" : "", n.normalMap && n.tangentSpaceNormalMap ? "#define TANGENTSPACE_NORMALMAP" : "", n.clearcoatMap ? "#define USE_CLEARCOATMAP" : "", n.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "", n.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "", n.displacementMap && n.supportsVertexTextures ? "#define USE_DISPLACEMENTMAP" : "", n.specularMap ? "#define USE_SPECULARMAP" : "", n.roughnessMap ? "#define USE_ROUGHNESSMAP" : "", n.metalnessMap ? "#define USE_METALNESSMAP" : "", n.alphaMap ? "#define USE_ALPHAMAP" : "", n.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "", n.vertexTangents ? "#define USE_TANGENT" : "", n.vertexColors ? "#define USE_COLOR" : "", n.vertexUvs ? "#define USE_UV" : "", n.uvsVertexOnly ? "#define UVS_VERTEX_ONLY" : "", n.flatShading ? "#define FLAT_SHADED" : "", n.skinning ? "#define USE_SKINNING" : "", n.useVertexTexture ? "#define BONE_TEXTURE" : "", n.morphTargets ? "#define USE_MORPHTARGETS" : "", n.morphNormals && !1 === n.flatShading ? "#define USE_MORPHNORMALS" : "", n.doubleSided ? "#define DOUBLE_SIDED" : "", n.flipSided ? "#define FLIP_SIDED" : "", n.shadowMapEnabled ? "#define USE_SHADOWMAP" : "", n.shadowMapEnabled ? "#define " + c : "", n.sizeAttenuation ? "#define USE_SIZEATTENUATION" : "", n.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "", n.logarithmicDepthBuffer && n.rendererExtensionFragDepth ? "#define USE_LOGDEPTHBUF_EXT" : "", "uniform mat4 modelMatrix;", "uniform mat4 modelViewMatrix;", "uniform mat4 projectionMatrix;", "uniform mat4 viewMatrix;", "uniform mat3 normalMatrix;", "uniform vec3 cameraPosition;", "uniform bool isOrthographic;", "#ifdef USE_INSTANCING", "\tattribute mat4 instanceMatrix;", "#endif", "#ifdef USE_INSTANCING_COLOR", "\tattribute vec3 instanceColor;", "#endif", "attribute vec3 position;", "attribute vec3 normal;", "attribute vec2 uv;", "#ifdef USE_TANGENT", "\tattribute vec4 tangent;", "#endif", "#ifdef USE_COLOR", "\tattribute vec3 color;", "#endif", "#ifdef USE_MORPHTARGETS", "\tattribute vec3 morphTarget0;", "\tattribute vec3 morphTarget1;", "\tattribute vec3 morphTarget2;", "\tattribute vec3 morphTarget3;", "\t#ifdef USE_MORPHNORMALS", "\t\tattribute vec3 morphNormal0;", "\t\tattribute vec3 morphNormal1;", "\t\tattribute vec3 morphNormal2;", "\t\tattribute vec3 morphNormal3;", "\t#else", "\t\tattribute vec3 morphTarget4;", "\t\tattribute vec3 morphTarget5;", "\t\tattribute vec3 morphTarget6;", "\t\tattribute vec3 morphTarget7;", "\t#endif", "#endif", "#ifdef USE_SKINNING", "\tattribute vec4 skinIndex;", "\tattribute vec4 skinWeight;", "#endif", "\n"].filter(Ms).join("\n"), v = [p, Is(n), "#define SHADER_NAME " + n.shaderName, f, n.alphaTest ? "#define ALPHATEST " + n.alphaTest + (n.alphaTest % 1 ? "" : ".0") : "", "#define GAMMA_FACTOR " + d, n.useFog && n.fog ? "#define USE_FOG" : "", n.useFog && n.fogExp2 ? "#define FOG_EXP2" : "", n.map ? "#define USE_MAP" : "", n.matcap ? "#define USE_MATCAP" : "", n.envMap ? "#define USE_ENVMAP" : "", n.envMap ? "#define " + l : "", n.envMap ? "#define " + h : "", n.envMap ? "#define " + u : "", n.lightMap ? "#define USE_LIGHTMAP" : "", n.aoMap ? "#define USE_AOMAP" : "", n.emissiveMap ? "#define USE_EMISSIVEMAP" : "", n.bumpMap ? "#define USE_BUMPMAP" : "", n.normalMap ? "#define USE_NORMALMAP" : "", n.normalMap && n.objectSpaceNormalMap ? "#define OBJECTSPACE_NORMALMAP" : "", n.normalMap && n.tangentSpaceNormalMap ? "#define TANGENTSPACE_NORMALMAP" : "", n.clearcoatMap ? "#define USE_CLEARCOATMAP" : "", n.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "", n.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "", n.specularMap ? "#define USE_SPECULARMAP" : "", n.roughnessMap ? "#define USE_ROUGHNESSMAP" : "", n.metalnessMap ? "#define USE_METALNESSMAP" : "", n.alphaMap ? "#define USE_ALPHAMAP" : "", n.sheen ? "#define USE_SHEEN" : "", n.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "", n.vertexTangents ? "#define USE_TANGENT" : "", n.vertexColors || n.instancingColor ? "#define USE_COLOR" : "", n.vertexUvs ? "#define USE_UV" : "", n.uvsVertexOnly ? "#define UVS_VERTEX_ONLY" : "", n.gradientMap ? "#define USE_GRADIENTMAP" : "", n.flatShading ? "#define FLAT_SHADED" : "", n.doubleSided ? "#define DOUBLE_SIDED" : "", n.flipSided ? "#define FLIP_SIDED" : "", n.shadowMapEnabled ? "#define USE_SHADOWMAP" : "", n.shadowMapEnabled ? "#define " + c : "", n.premultipliedAlpha ? "#define PREMULTIPLIED_ALPHA" : "", n.physicallyCorrectLights ? "#define PHYSICALLY_CORRECT_LIGHTS" : "", n.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "", n.logarithmicDepthBuffer && n.rendererExtensionFragDepth ? "#define USE_LOGDEPTHBUF_EXT" : "", (n.extensionShaderTextureLOD || n.envMap) && n.rendererExtensionShaderTextureLod ? "#define TEXTURE_LOD_EXT" : "", "uniform mat4 viewMatrix;", "uniform vec3 cameraPosition;", "uniform bool isOrthographic;", 0 !== n.toneMapping ? "#define TONE_MAPPING" : "", 0 !== n.toneMapping ? nr.tonemapping_pars_fragment : "", 0 !== n.toneMapping ? ws("toneMapping", n.toneMapping) : "", n.dithering ? "#define DITHERING" : "", nr.encodings_pars_fragment, n.map ? bs("mapTexelToLinear", n.mapEncoding) : "", n.matcap ? bs("matcapTexelToLinear", n.matcapEncoding) : "", n.envMap ? bs("envMapTexelToLinear", n.envMapEncoding) : "", n.emissiveMap ? bs("emissiveMapTexelToLinear", n.emissiveMapEncoding) : "", n.lightMap ? bs("lightMapTexelToLinear", n.lightMapEncoding) : "", _s("linearToOutputTexel", n.outputEncoding), n.depthPacking ? "#define DEPTH_PACKING " + n.depthPacking : "", "\n"].filter(Ms).join("\n")), o = As(o), o = Ss(o, n), o = Ts(o, n), a = As(a), a = Ss(a, n), a = Ts(a, n), o = Ps(o), a = Ps(a), n.isWebGL2 && !0 !== n.isRawShaderMaterial && (y = "#version 300 es\n", g = ["#define attribute in", "#define varying out", "#define texture2D texture"].join("\n") + "\n" + g, v = ["#define varying in", n.glslVersion === ae ? "" : "out highp vec4 pc_fragColor;", n.glslVersion === ae ? "" : "#define gl_FragColor pc_fragColor", "#define gl_FragDepthEXT gl_FragDepth", "#define texture2D texture", "#define textureCube texture", "#define texture2DProj textureProj", "#define texture2DLodEXT textureLod", "#define texture2DProjLodEXT textureProjLod", "#define textureCubeLodEXT textureLod", "#define texture2DGradEXT textureGrad", "#define texture2DProjGradEXT textureProjGrad", "#define textureCubeGradEXT textureGrad"].join("\n") + "\n" + v);
		const x = y + v + a,
			b = gs(r, 35633, y + g + o),
			_ = gs(r, 35632, x);
		if (r.attachShader(m, b), r.attachShader(m, _), void 0 !== n.index0AttributeName ? r.bindAttribLocation(m, 0, n.index0AttributeName) : !0 === n.morphTargets && r.bindAttribLocation(m, 0, "position"), r.linkProgram(m), t.debug.checkShaderErrors) {
			const t = r.getProgramInfoLog(m).trim(),
				e = r.getShaderInfoLog(b).trim(),
				n = r.getShaderInfoLog(_).trim();
			let i = !0,
				s = !0;
			if (!1 === r.getProgramParameter(m, 35714)) {
				i = !1;
				const e = xs(r, b, "vertex"),
					n = xs(r, _, "fragment");
				console.error("THREE.WebGLProgram: shader error: ", r.getError(), "35715", r.getProgramParameter(m, 35715), "gl.getProgramInfoLog", t, e, n)
			} else "" !== t ? console.warn("THREE.WebGLProgram: gl.getProgramInfoLog()", t) : "" !== e && "" !== n || (s = !1);
			s && (this.diagnostics = {
				runnable: i,
				programLog: t,
				vertexShader: {
					log: e,
					prefix: g
				},
				fragmentShader: {
					log: n,
					prefix: v
				}
			})
		}
		let w, M;
		return r.deleteShader(b), r.deleteShader(_), this.getUniforms = function() {
			return void 0 === w && (w = new ms(r, m)), w
		}, this.getAttributes = function() {
			return void 0 === M && (M = function(t, e) {
				const n = {},
					i = t.getProgramParameter(e, 35721);
				for (let r = 0; r < i; r++) {
					const i = t.getActiveAttrib(e, r).name;
					n[i] = t.getAttribLocation(e, i)
				}
				return n
			}(r, m)), M
		}, this.destroy = function() {
			i.releaseStatesOfProgram(this), r.deleteProgram(m), this.program = void 0
		}, this.name = n.shaderName, this.id = vs++, this.cacheKey = e, this.usedTimes = 1, this.program = m, this.vertexShader = b, this.fragmentShader = _, this
	}

	function zs(t, e, n, i, r, s) {
		const o = [],
			a = i.isWebGL2,
			c = i.logarithmicDepthBuffer,
			l = i.floatVertexTextures,
			h = i.maxVertexUniforms,
			u = i.vertexTextures;
		let d = i.precision;
		const p = {
				MeshDepthMaterial: "depth",
				MeshDistanceMaterial: "distanceRGBA",
				MeshNormalMaterial: "normal",
				MeshBasicMaterial: "basic",
				MeshLambertMaterial: "lambert",
				MeshPhongMaterial: "phong",
				MeshToonMaterial: "toon",
				MeshStandardMaterial: "physical",
				MeshPhysicalMaterial: "physical",
				MeshMatcapMaterial: "matcap",
				LineBasicMaterial: "basic",
				LineDashedMaterial: "dashed",
				PointsMaterial: "points",
				ShadowMaterial: "shadow",
				SpriteMaterial: "sprite"
			},
			f = ["precision", "isWebGL2", "supportsVertexTextures", "outputEncoding", "instancing", "instancingColor", "map", "mapEncoding", "matcap", "matcapEncoding", "envMap", "envMapMode", "envMapEncoding", "envMapCubeUV", "lightMap", "lightMapEncoding", "aoMap", "emissiveMap", "emissiveMapEncoding", "bumpMap", "normalMap", "objectSpaceNormalMap", "tangentSpaceNormalMap", "clearcoatMap", "clearcoatRoughnessMap", "clearcoatNormalMap", "displacementMap", "specularMap", "roughnessMap", "metalnessMap", "gradientMap", "alphaMap", "combine", "vertexColors", "vertexTangents", "vertexUvs", "uvsVertexOnly", "fog", "useFog", "fogExp2", "flatShading", "sizeAttenuation", "logarithmicDepthBuffer", "skinning", "maxBones", "useVertexTexture", "morphTargets", "morphNormals", "maxMorphTargets", "maxMorphNormals", "premultipliedAlpha", "numDirLights", "numPointLights", "numSpotLights", "numHemiLights", "numRectAreaLights", "numDirLightShadows", "numPointLightShadows", "numSpotLightShadows", "shadowMapEnabled", "shadowMapType", "toneMapping", "physicallyCorrectLights", "alphaTest", "doubleSided", "flipSided", "numClippingPlanes", "numClipIntersection", "depthPacking", "dithering", "sheen", "transmissionMap"];

		function m(t) {
			let e;
			return t && t.isTexture ? e = t.encoding : t && t.isWebGLRenderTarget ? (console.warn("THREE.WebGLPrograms.getTextureEncodingFromMap: don't use render targets as textures. Use their .texture property instead."), e = t.texture.encoding) : e = ie, e
		}
		return {
			getParameters: function(r, o, f, g, v) {
				const y = g.fog,
					x = r.isMeshStandardMaterial ? g.environment : null,
					b = e.get(r.envMap || x),
					_ = p[r.type],
					w = v.isSkinnedMesh ? function(t) {
						const e = t.skeleton.bones;
						if (l) return 1024; {
							const t = h,
								n = Math.floor((t - 20) / 4),
								i = Math.min(n, e.length);
							return i < e.length ? (console.warn("THREE.WebGLRenderer: Skeleton has " + e.length + " bones. This GPU supports " + i + "."), 0) : i
						}
					}(v) : 0;
				let M, S;
				if (null !== r.precision && (d = i.getMaxPrecision(r.precision), d !== r.precision && console.warn("THREE.WebGLProgram.getParameters:", r.precision, "not supported, using", d, "instead.")), _) {
					const t = rr[_];
					M = t.vertexShader, S = t.fragmentShader
				} else M = r.vertexShader, S = r.fragmentShader;
				const T = t.getRenderTarget();
				return {
					isWebGL2: a,
					shaderID: _,
					shaderName: r.type,
					vertexShader: M,
					fragmentShader: S,
					defines: r.defines,
					isRawShaderMaterial: !0 === r.isRawShaderMaterial,
					glslVersion: r.glslVersion,
					precision: d,
					instancing: !0 === v.isInstancedMesh,
					instancingColor: !0 === v.isInstancedMesh && null !== v.instanceColor,
					supportsVertexTextures: u,
					outputEncoding: null !== T ? m(T.texture) : t.outputEncoding,
					map: !!r.map,
					mapEncoding: m(r.map),
					matcap: !!r.matcap,
					matcapEncoding: m(r.matcap),
					envMap: !!b,
					envMapMode: b && b.mapping,
					envMapEncoding: m(b),
					envMapCubeUV: !!b && (306 === b.mapping || 307 === b.mapping),
					lightMap: !!r.lightMap,
					lightMapEncoding: m(r.lightMap),
					aoMap: !!r.aoMap,
					emissiveMap: !!r.emissiveMap,
					emissiveMapEncoding: m(r.emissiveMap),
					bumpMap: !!r.bumpMap,
					normalMap: !!r.normalMap,
					objectSpaceNormalMap: 1 === r.normalMapType,
					tangentSpaceNormalMap: 0 === r.normalMapType,
					clearcoatMap: !!r.clearcoatMap,
					clearcoatRoughnessMap: !!r.clearcoatRoughnessMap,
					clearcoatNormalMap: !!r.clearcoatNormalMap,
					displacementMap: !!r.displacementMap,
					roughnessMap: !!r.roughnessMap,
					metalnessMap: !!r.metalnessMap,
					specularMap: !!r.specularMap,
					alphaMap: !!r.alphaMap,
					gradientMap: !!r.gradientMap,
					sheen: !!r.sheen,
					transmissionMap: !!r.transmissionMap,
					combine: r.combine,
					vertexTangents: r.normalMap && r.vertexTangents,
					vertexColors: r.vertexColors,
					vertexUvs: !!(r.map || r.bumpMap || r.normalMap || r.specularMap || r.alphaMap || r.emissiveMap || r.roughnessMap || r.metalnessMap || r.clearcoatMap || r.clearcoatRoughnessMap || r.clearcoatNormalMap || r.displacementMap || r.transmissionMap),
					uvsVertexOnly: !(r.map || r.bumpMap || r.normalMap || r.specularMap || r.alphaMap || r.emissiveMap || r.roughnessMap || r.metalnessMap || r.clearcoatNormalMap || r.transmissionMap || !r.displacementMap),
					fog: !!y,
					useFog: r.fog,
					fogExp2: y && y.isFogExp2,
					flatShading: r.flatShading,
					sizeAttenuation: r.sizeAttenuation,
					logarithmicDepthBuffer: c,
					skinning: r.skinning && w > 0,
					maxBones: w,
					useVertexTexture: l,
					morphTargets: r.morphTargets,
					morphNormals: r.morphNormals,
					maxMorphTargets: t.maxMorphTargets,
					maxMorphNormals: t.maxMorphNormals,
					numDirLights: o.directional.length,
					numPointLights: o.point.length,
					numSpotLights: o.spot.length,
					numRectAreaLights: o.rectArea.length,
					numHemiLights: o.hemi.length,
					numDirLightShadows: o.directionalShadowMap.length,
					numPointLightShadows: o.pointShadowMap.length,
					numSpotLightShadows: o.spotShadowMap.length,
					numClippingPlanes: s.numPlanes,
					numClipIntersection: s.numIntersection,
					dithering: r.dithering,
					shadowMapEnabled: t.shadowMap.enabled && f.length > 0,
					shadowMapType: t.shadowMap.type,
					toneMapping: r.toneMapped ? t.toneMapping : 0,
					physicallyCorrectLights: t.physicallyCorrectLights,
					premultipliedAlpha: r.premultipliedAlpha,
					alphaTest: r.alphaTest,
					doubleSided: 2 === r.side,
					flipSided: 1 === r.side,
					depthPacking: void 0 !== r.depthPacking && r.depthPacking,
					index0AttributeName: r.index0AttributeName,
					extensionDerivatives: r.extensions && r.extensions.derivatives,
					extensionFragDepth: r.extensions && r.extensions.fragDepth,
					extensionDrawBuffers: r.extensions && r.extensions.drawBuffers,
					extensionShaderTextureLOD: r.extensions && r.extensions.shaderTextureLOD,
					rendererExtensionFragDepth: a || n.has("EXT_frag_depth"),
					rendererExtensionDrawBuffers: a || n.has("WEBGL_draw_buffers"),
					rendererExtensionShaderTextureLod: a || n.has("EXT_shader_texture_lod"),
					customProgramCacheKey: r.customProgramCacheKey()
				}
			},
			getProgramCacheKey: function(e) {
				const n = [];
				if (e.shaderID ? n.push(e.shaderID) : (n.push(e.fragmentShader), n.push(e.vertexShader)), void 0 !== e.defines)
					for (const t in e.defines) n.push(t), n.push(e.defines[t]);
				if (!1 === e.isRawShaderMaterial) {
					for (let t = 0; t < f.length; t++) n.push(e[f[t]]);
					n.push(t.outputEncoding), n.push(t.gammaFactor)
				}
				return n.push(e.customProgramCacheKey), n.join()
			},
			getUniforms: function(t) {
				const e = p[t.type];
				let n;
				if (e) {
					const t = rr[e];
					n = ki.clone(t.uniforms)
				} else n = t.uniforms;
				return n
			},
			acquireProgram: function(e, n) {
				let i;
				for (let t = 0, e = o.length; t < e; t++) {
					const e = o[t];
					if (e.cacheKey === n) {
						i = e, ++i.usedTimes;
						break
					}
				}
				return void 0 === i && (i = new Ns(t, n, e, r), o.push(i)), i
			},
			releaseProgram: function(t) {
				if (0 == --t.usedTimes) {
					const e = o.indexOf(t);
					o[e] = o[o.length - 1], o.pop(), t.destroy()
				}
			},
			programs: o
		}
	}

	function Bs() {
		let t = new WeakMap;
		return {
			get: function(e) {
				let n = t.get(e);
				return void 0 === n && (n = {}, t.set(e, n)), n
			},
			remove: function(e) {
				t.delete(e)
			},
			update: function(e, n, i) {
				t.get(e)[n] = i
			},
			dispose: function() {
				t = new WeakMap
			}
		}
	}

	function Us(t, e) {
		return t.groupOrder !== e.groupOrder ? t.groupOrder - e.groupOrder : t.renderOrder !== e.renderOrder ? t.renderOrder - e.renderOrder : t.program !== e.program ? t.program.id - e.program.id : t.material.id !== e.material.id ? t.material.id - e.material.id : t.z !== e.z ? t.z - e.z : t.id - e.id
	}

	function Fs(t, e) {
		return t.groupOrder !== e.groupOrder ? t.groupOrder - e.groupOrder : t.renderOrder !== e.renderOrder ? t.renderOrder - e.renderOrder : t.z !== e.z ? e.z - t.z : t.id - e.id
	}

	function Hs(t) {
		const e = [];
		let n = 0;
		const i = [],
			r = [],
			s = {
				id: -1
			};

		function o(i, r, o, a, c, l) {
			let h = e[n];
			const u = t.get(o);
			return void 0 === h ? (h = {
				id: i.id,
				object: i,
				geometry: r,
				material: o,
				program: u.program || s,
				groupOrder: a,
				renderOrder: i.renderOrder,
				z: c,
				group: l
			}, e[n] = h) : (h.id = i.id, h.object = i, h.geometry = r, h.material = o, h.program = u.program || s, h.groupOrder = a, h.renderOrder = i.renderOrder, h.z = c, h.group = l), n++, h
		}
		return {
			opaque: i,
			transparent: r,
			init: function() {
				n = 0, i.length = 0, r.length = 0
			},
			push: function(t, e, n, s, a, c) {
				const l = o(t, e, n, s, a, c);
				(!0 === n.transparent ? r : i).push(l)
			},
			unshift: function(t, e, n, s, a, c) {
				const l = o(t, e, n, s, a, c);
				(!0 === n.transparent ? r : i).unshift(l)
			},
			finish: function() {
				for (let t = n, i = e.length; t < i; t++) {
					const n = e[t];
					if (null === n.id) break;
					n.id = null, n.object = null, n.geometry = null, n.material = null, n.program = null, n.group = null
				}
			},
			sort: function(t, e) {
				i.length > 1 && i.sort(t || Us), r.length > 1 && r.sort(e || Fs)
			}
		}
	}

	function ks(t) {
		let e = new WeakMap;
		return {
			get: function(n, i) {
				const r = e.get(n);
				let s;
				return void 0 === r ? (s = new Hs(t), e.set(n, new WeakMap), e.get(n).set(i, s)) : (s = r.get(i), void 0 === s && (s = new Hs(t), r.set(i, s))), s
			},
			dispose: function() {
				e = new WeakMap
			}
		}
	}

	function Gs() {
		const t = {};
		return {
			get: function(e) {
				if (void 0 !== t[e.id]) return t[e.id];
				let n;
				switch (e.type) {
					case "DirectionalLight":
						n = {
							direction: new we,
							color: new Vn
						};
						break;
					case "SpotLight":
						n = {
							position: new we,
							direction: new we,
							color: new Vn,
							distance: 0,
							coneCos: 0,
							penumbraCos: 0,
							decay: 0
						};
						break;
					case "PointLight":
						n = {
							position: new we,
							color: new Vn,
							distance: 0,
							decay: 0
						};
						break;
					case "HemisphereLight":
						n = {
							direction: new we,
							skyColor: new Vn,
							groundColor: new Vn
						};
						break;
					case "RectAreaLight":
						n = {
							color: new Vn,
							position: new we,
							halfWidth: new we,
							halfHeight: new we
						}
				}
				return t[e.id] = n, n
			}
		}
	}
	let js = 0;

	function Vs(t, e) {
		return (e.castShadow ? 1 : 0) - (t.castShadow ? 1 : 0)
	}

	function Ws(t, e) {
		const n = new Gs,
			i = function() {
				const t = {};
				return {
					get: function(e) {
						if (void 0 !== t[e.id]) return t[e.id];
						let n;
						switch (e.type) {
							case "DirectionalLight":
							case "SpotLight":
								n = {
									shadowBias: 0,
									shadowNormalBias: 0,
									shadowRadius: 1,
									shadowMapSize: new de
								};
								break;
							case "PointLight":
								n = {
									shadowBias: 0,
									shadowNormalBias: 0,
									shadowRadius: 1,
									shadowMapSize: new de,
									shadowCameraNear: 1,
									shadowCameraFar: 1e3
								}
						}
						return t[e.id] = n, n
					}
				}
			}(),
			r = {
				version: 0,
				hash: {
					directionalLength: -1,
					pointLength: -1,
					spotLength: -1,
					rectAreaLength: -1,
					hemiLength: -1,
					numDirectionalShadows: -1,
					numPointShadows: -1,
					numSpotShadows: -1
				},
				ambient: [0, 0, 0],
				probe: [],
				directional: [],
				directionalShadow: [],
				directionalShadowMap: [],
				directionalShadowMatrix: [],
				spot: [],
				spotShadow: [],
				spotShadowMap: [],
				spotShadowMatrix: [],
				rectArea: [],
				rectAreaLTC1: null,
				rectAreaLTC2: null,
				point: [],
				pointShadow: [],
				pointShadowMap: [],
				pointShadowMatrix: [],
				hemi: []
			};
		for (let t = 0; t < 9; t++) r.probe.push(new we);
		const s = new we,
			o = new Ze,
			a = new Ze;
		return {
			setup: function(s) {
				let o = 0,
					a = 0,
					c = 0;
				for (let t = 0; t < 9; t++) r.probe[t].set(0, 0, 0);
				let l = 0,
					h = 0,
					u = 0,
					d = 0,
					p = 0,
					f = 0,
					m = 0,
					g = 0;
				s.sort(Vs);
				for (let t = 0, e = s.length; t < e; t++) {
					const e = s[t],
						v = e.color,
						y = e.intensity,
						x = e.distance,
						b = e.shadow && e.shadow.map ? e.shadow.map.texture : null;
					if (e.isAmbientLight) o += v.r * y, a += v.g * y, c += v.b * y;
					else if (e.isLightProbe)
						for (let t = 0; t < 9; t++) r.probe[t].addScaledVector(e.sh.coefficients[t], y);
					else if (e.isDirectionalLight) {
						const t = n.get(e);
						if (t.color.copy(e.color).multiplyScalar(e.intensity), e.castShadow) {
							const t = e.shadow,
								n = i.get(e);
							n.shadowBias = t.bias, n.shadowNormalBias = t.normalBias, n.shadowRadius = t.radius, n.shadowMapSize = t.mapSize, r.directionalShadow[l] = n, r.directionalShadowMap[l] = b, r.directionalShadowMatrix[l] = e.shadow.matrix, f++
						}
						r.directional[l] = t, l++
					} else if (e.isSpotLight) {
						const t = n.get(e);
						if (t.position.setFromMatrixPosition(e.matrixWorld), t.color.copy(v).multiplyScalar(y), t.distance = x, t.coneCos = Math.cos(e.angle), t.penumbraCos = Math.cos(e.angle * (1 - e.penumbra)), t.decay = e.decay, e.castShadow) {
							const t = e.shadow,
								n = i.get(e);
							n.shadowBias = t.bias, n.shadowNormalBias = t.normalBias, n.shadowRadius = t.radius, n.shadowMapSize = t.mapSize, r.spotShadow[u] = n, r.spotShadowMap[u] = b, r.spotShadowMatrix[u] = e.shadow.matrix, g++
						}
						r.spot[u] = t, u++
					} else if (e.isRectAreaLight) {
						const t = n.get(e);
						t.color.copy(v).multiplyScalar(y), t.halfWidth.set(.5 * e.width, 0, 0), t.halfHeight.set(0, .5 * e.height, 0), r.rectArea[d] = t, d++
					} else if (e.isPointLight) {
						const t = n.get(e);
						if (t.color.copy(e.color).multiplyScalar(e.intensity), t.distance = e.distance, t.decay = e.decay, e.castShadow) {
							const t = e.shadow,
								n = i.get(e);
							n.shadowBias = t.bias, n.shadowNormalBias = t.normalBias, n.shadowRadius = t.radius, n.shadowMapSize = t.mapSize, n.shadowCameraNear = t.camera.near, n.shadowCameraFar = t.camera.far, r.pointShadow[h] = n, r.pointShadowMap[h] = b, r.pointShadowMatrix[h] = e.shadow.matrix, m++
						}
						r.point[h] = t, h++
					} else if (e.isHemisphereLight) {
						const t = n.get(e);
						t.skyColor.copy(e.color).multiplyScalar(y), t.groundColor.copy(e.groundColor).multiplyScalar(y), r.hemi[p] = t, p++
					}
				}
				d > 0 && (e.isWebGL2 || !0 === t.has("OES_texture_float_linear") ? (r.rectAreaLTC1 = ir.LTC_FLOAT_1, r.rectAreaLTC2 = ir.LTC_FLOAT_2) : !0 === t.has("OES_texture_half_float_linear") ? (r.rectAreaLTC1 = ir.LTC_HALF_1, r.rectAreaLTC2 = ir.LTC_HALF_2) : console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")), r.ambient[0] = o, r.ambient[1] = a, r.ambient[2] = c;
				const v = r.hash;
				v.directionalLength === l && v.pointLength === h && v.spotLength === u && v.rectAreaLength === d && v.hemiLength === p && v.numDirectionalShadows === f && v.numPointShadows === m && v.numSpotShadows === g || (r.directional.length = l, r.spot.length = u, r.rectArea.length = d, r.point.length = h, r.hemi.length = p, r.directionalShadow.length = f, r.directionalShadowMap.length = f, r.pointShadow.length = m, r.pointShadowMap.length = m, r.spotShadow.length = g, r.spotShadowMap.length = g, r.directionalShadowMatrix.length = f, r.pointShadowMatrix.length = m, r.spotShadowMatrix.length = g, v.directionalLength = l, v.pointLength = h, v.spotLength = u, v.rectAreaLength = d, v.hemiLength = p, v.numDirectionalShadows = f, v.numPointShadows = m, v.numSpotShadows = g, r.version = js++)
			},
			setupView: function(t, e) {
				let n = 0,
					i = 0,
					c = 0,
					l = 0,
					h = 0;
				const u = e.matrixWorldInverse;
				for (let e = 0, d = t.length; e < d; e++) {
					const d = t[e];
					if (d.isDirectionalLight) {
						const t = r.directional[n];
						t.direction.setFromMatrixPosition(d.matrixWorld), s.setFromMatrixPosition(d.target.matrixWorld), t.direction.sub(s), t.direction.transformDirection(u), n++
					} else if (d.isSpotLight) {
						const t = r.spot[c];
						t.position.setFromMatrixPosition(d.matrixWorld), t.position.applyMatrix4(u), t.direction.setFromMatrixPosition(d.matrixWorld), s.setFromMatrixPosition(d.target.matrixWorld), t.direction.sub(s), t.direction.transformDirection(u), c++
					} else if (d.isRectAreaLight) {
						const t = r.rectArea[l];
						t.position.setFromMatrixPosition(d.matrixWorld), t.position.applyMatrix4(u), a.identity(), o.copy(d.matrixWorld), o.premultiply(u), a.extractRotation(o), t.halfWidth.set(.5 * d.width, 0, 0), t.halfHeight.set(0, .5 * d.height, 0), t.halfWidth.applyMatrix4(a), t.halfHeight.applyMatrix4(a), l++
					} else if (d.isPointLight) {
						const t = r.point[i];
						t.position.setFromMatrixPosition(d.matrixWorld), t.position.applyMatrix4(u), i++
					} else if (d.isHemisphereLight) {
						const t = r.hemi[h];
						t.direction.setFromMatrixPosition(d.matrixWorld), t.direction.transformDirection(u), t.direction.normalize(), h++
					}
				}
			},
			state: r
		}
	}

	function $s(t, e) {
		const n = new Ws(t, e),
			i = [],
			r = [];
		return {
			init: function() {
				i.length = 0, r.length = 0
			},
			state: {
				lightsArray: i,
				shadowsArray: r,
				lights: n
			},
			setupLights: function() {
				n.setup(i)
			},
			setupLightsView: function(t) {
				n.setupView(i, t)
			},
			pushLight: function(t) {
				i.push(t)
			},
			pushShadow: function(t) {
				r.push(t)
			}
		}
	}

	function qs(t, e) {
		let n = new WeakMap;
		return {
			get: function(i, r = 0) {
				let s;
				return !1 === n.has(i) ? (s = new $s(t, e), n.set(i, []), n.get(i).push(s)) : r >= n.get(i).length ? (s = new $s(t, e), n.get(i).push(s)) : s = n.get(i)[r], s
			},
			dispose: function() {
				n = new WeakMap
			}
		}
	}

	function Xs(t) {
		qn.call(this), this.type = "MeshDepthMaterial", this.depthPacking = 3200, this.skinning = !1, this.morphTargets = !1, this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.wireframe = !1, this.wireframeLinewidth = 1, this.fog = !1, this.setValues(t)
	}

	function Ys(t) {
		qn.call(this), this.type = "MeshDistanceMaterial", this.referencePosition = new we, this.nearDistance = 1, this.farDistance = 1e3, this.skinning = !1, this.morphTargets = !1, this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.fog = !1, this.setValues(t)
	}
	Xs.prototype = Object.create(qn.prototype), Xs.prototype.constructor = Xs, Xs.prototype.isMeshDepthMaterial = !0, Xs.prototype.copy = function(t) {
		return qn.prototype.copy.call(this, t), this.depthPacking = t.depthPacking, this.skinning = t.skinning, this.morphTargets = t.morphTargets, this.map = t.map, this.alphaMap = t.alphaMap, this.displacementMap = t.displacementMap, this.displacementScale = t.displacementScale, this.displacementBias = t.displacementBias, this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this
	}, Ys.prototype = Object.create(qn.prototype), Ys.prototype.constructor = Ys, Ys.prototype.isMeshDistanceMaterial = !0, Ys.prototype.copy = function(t) {
		return qn.prototype.copy.call(this, t), this.referencePosition.copy(t.referencePosition), this.nearDistance = t.nearDistance, this.farDistance = t.farDistance, this.skinning = t.skinning, this.morphTargets = t.morphTargets, this.map = t.map, this.alphaMap = t.alphaMap, this.displacementMap = t.displacementMap, this.displacementScale = t.displacementScale, this.displacementBias = t.displacementBias, this
	};

	function Zs(t, e, n) {
		let i = new Qi;
		const r = new de,
			s = new de,
			o = new xe,
			a = [],
			c = [],
			l = {},
			h = {
				0: 1,
				1: 0,
				2: 2
			},
			u = new Gi({
				defines: {
					SAMPLE_RATE: 2 / 8,
					HALF_SAMPLE_RATE: 1 / 8
				},
				uniforms: {
					shadow_pass: {
						value: null
					},
					resolution: {
						value: new de
					},
					radius: {
						value: 4
					}
				},
				vertexShader: "void main() {\n\tgl_Position = vec4( position, 1.0 );\n}",
				fragmentShader: "uniform sampler2D shadow_pass;\nuniform vec2 resolution;\nuniform float radius;\n#include <packing>\nvoid main() {\n\tfloat mean = 0.0;\n\tfloat squared_mean = 0.0;\n\tfloat depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy ) / resolution ) );\n\tfor ( float i = -1.0; i < 1.0 ; i += SAMPLE_RATE) {\n\t\t#ifdef HORIZONTAL_PASS\n\t\t\tvec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( i, 0.0 ) * radius ) / resolution ) );\n\t\t\tmean += distribution.x;\n\t\t\tsquared_mean += distribution.y * distribution.y + distribution.x * distribution.x;\n\t\t#else\n\t\t\tfloat depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, i ) * radius ) / resolution ) );\n\t\t\tmean += depth;\n\t\t\tsquared_mean += depth * depth;\n\t\t#endif\n\t}\n\tmean = mean * HALF_SAMPLE_RATE;\n\tsquared_mean = squared_mean * HALF_SAMPLE_RATE;\n\tfloat std_dev = sqrt( squared_mean - mean * mean );\n\tgl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );\n}"
			}),
			d = u.clone();
		d.defines.HORIZONTAL_PASS = 1;
		const p = new yi;
		p.setAttribute("position", new Jn(new Float32Array([-1, -1, .5, 3, -1, .5, -1, 3, .5]), 3));
		const f = new zi(p, u),
			m = this;

		function g(n, i) {
			const r = e.update(f);
			u.uniforms.shadow_pass.value = n.map.texture, u.uniforms.resolution.value = n.mapSize, u.uniforms.radius.value = n.radius, t.setRenderTarget(n.mapPass), t.clear(), t.renderBufferDirect(i, null, r, u, f, null), d.uniforms.shadow_pass.value = n.mapPass.texture, d.uniforms.resolution.value = n.mapSize, d.uniforms.radius.value = n.radius, t.setRenderTarget(n.map), t.clear(), t.renderBufferDirect(i, null, r, d, f, null)
		}

		function v(t, e, n) {
			const i = t << 0 | e << 1 | n << 2;
			let r = a[i];
			return void 0 === r && (r = new Xs({
				depthPacking: 3201,
				morphTargets: t,
				skinning: e
			}), a[i] = r), r
		}

		function y(t, e, n) {
			const i = t << 0 | e << 1 | n << 2;
			let r = c[i];
			return void 0 === r && (r = new Ys({
				morphTargets: t,
				skinning: e
			}), c[i] = r), r
		}

		function x(e, n, i, r, s, o, a) {
			let c = null,
				u = v,
				d = e.customDepthMaterial;
			if (!0 === r.isPointLight && (u = y, d = e.customDistanceMaterial), void 0 === d) {
				let t = !1;
				!0 === i.morphTargets && (t = n.morphAttributes && n.morphAttributes.position && n.morphAttributes.position.length > 0);
				let r = !1;
				!0 === e.isSkinnedMesh && (!0 === i.skinning ? r = !0 : console.warn("THREE.WebGLShadowMap: THREE.SkinnedMesh with material.skinning set to false:", e));
				c = u(t, r, !0 === e.isInstancedMesh)
			} else c = d;
			if (t.localClippingEnabled && !0 === i.clipShadows && 0 !== i.clippingPlanes.length) {
				const t = c.uuid,
					e = i.uuid;
				let n = l[t];
				void 0 === n && (n = {}, l[t] = n);
				let r = n[e];
				void 0 === r && (r = c.clone(), n[e] = r), c = r
			}
			return c.visible = i.visible, c.wireframe = i.wireframe, c.side = 3 === a ? null !== i.shadowSide ? i.shadowSide : i.side : null !== i.shadowSide ? i.shadowSide : h[i.side], c.clipShadows = i.clipShadows, c.clippingPlanes = i.clippingPlanes, c.clipIntersection = i.clipIntersection, c.wireframeLinewidth = i.wireframeLinewidth, c.linewidth = i.linewidth, !0 === r.isPointLight && !0 === c.isMeshDistanceMaterial && (c.referencePosition.setFromMatrixPosition(r.matrixWorld), c.nearDistance = s, c.farDistance = o), c
		}

		function b(n, r, s, o, a) {
			if (!1 === n.visible) return;
			if (n.layers.test(r.layers) && (n.isMesh || n.isLine || n.isPoints) && (n.castShadow || n.receiveShadow && 3 === a) && (!n.frustumCulled || i.intersectsObject(n))) {
				n.modelViewMatrix.multiplyMatrices(s.matrixWorldInverse, n.matrixWorld);
				const i = e.update(n),
					r = n.material;
				if (Array.isArray(r)) {
					const e = i.groups;
					for (let c = 0, l = e.length; c < l; c++) {
						const l = e[c],
							h = r[l.materialIndex];
						if (h && h.visible) {
							const e = x(n, i, h, o, s.near, s.far, a);
							t.renderBufferDirect(s, null, i, e, n, l)
						}
					}
				} else if (r.visible) {
					const e = x(n, i, r, o, s.near, s.far, a);
					t.renderBufferDirect(s, null, i, e, n, null)
				}
			}
			const c = n.children;
			for (let t = 0, e = c.length; t < e; t++) b(c[t], r, s, o, a)
		}
		this.enabled = !1, this.autoUpdate = !0, this.needsUpdate = !1, this.type = 1, this.render = function(e, a, c) {
			if (!1 === m.enabled) return;
			if (!1 === m.autoUpdate && !1 === m.needsUpdate) return;
			if (0 === e.length) return;
			const l = t.getRenderTarget(),
				h = t.getActiveCubeFace(),
				u = t.getActiveMipmapLevel(),
				d = t.state;
			d.setBlending(0), d.buffers.color.setClear(1, 1, 1, 1), d.buffers.depth.setTest(!0), d.setScissorTest(!1);
			for (let l = 0, h = e.length; l < h; l++) {
				const h = e[l],
					u = h.shadow;
				if (void 0 === u) {
					console.warn("THREE.WebGLShadowMap:", h, "has no shadow.");
					continue
				}
				if (!1 === u.autoUpdate && !1 === u.needsUpdate) continue;
				r.copy(u.mapSize);
				const p = u.getFrameExtents();
				if (r.multiply(p), s.copy(u.mapSize), (r.x > n || r.y > n) && (r.x > n && (s.x = Math.floor(n / p.x), r.x = s.x * p.x, u.mapSize.x = s.x), r.y > n && (s.y = Math.floor(n / p.y), r.y = s.y * p.y, u.mapSize.y = s.y)), null === u.map && !u.isPointLightShadow && 3 === this.type) {
					const t = {
						minFilter: Ut,
						magFilter: Ut,
						format: qt
					};
					u.map = new be(r.x, r.y, t), u.map.texture.name = h.name + ".shadowMap", u.mapPass = new be(r.x, r.y, t), u.camera.updateProjectionMatrix()
				}
				if (null === u.map) {
					const t = {
						minFilter: Bt,
						magFilter: Bt,
						format: qt
					};
					u.map = new be(r.x, r.y, t), u.map.texture.name = h.name + ".shadowMap", u.camera.updateProjectionMatrix()
				}
				t.setRenderTarget(u.map), t.clear();
				const f = u.getViewportCount();
				for (let t = 0; t < f; t++) {
					const e = u.getViewport(t);
					o.set(s.x * e.x, s.y * e.y, s.x * e.z, s.y * e.w), d.viewport(o), u.updateMatrices(h, t), i = u.getFrustum(), b(a, c, u.camera, h, this.type)
				}
				u.isPointLightShadow || 3 !== this.type || g(u, c), u.needsUpdate = !1
			}
			m.needsUpdate = !1, t.setRenderTarget(l, h, u)
		}
	}

	function Js(t, e, n) {
		const i = n.isWebGL2;
		const r = new function() {
				let e = !1;
				const n = new xe;
				let i = null;
				const r = new xe(0, 0, 0, 0);
				return {
					setMask: function(n) {
						i === n || e || (t.colorMask(n, n, n, n), i = n)
					},
					setLocked: function(t) {
						e = t
					},
					setClear: function(e, i, s, o, a) {
						!0 === a && (e *= o, i *= o, s *= o), n.set(e, i, s, o), !1 === r.equals(n) && (t.clearColor(e, i, s, o), r.copy(n))
					},
					reset: function() {
						e = !1, i = null, r.set(-1, 0, 0, 0)
					}
				}
			},
			s = new function() {
				let e = !1,
					n = null,
					i = null,
					r = null;
				return {
					setTest: function(t) {
						t ? O(2929) : I(2929)
					},
					setMask: function(i) {
						n === i || e || (t.depthMask(i), n = i)
					},
					setFunc: function(e) {
						if (i !== e) {
							if (e) switch (e) {
								case 0:
									t.depthFunc(512);
									break;
								case 1:
									t.depthFunc(519);
									break;
								case 2:
									t.depthFunc(513);
									break;
								case 3:
									t.depthFunc(515);
									break;
								case 4:
									t.depthFunc(514);
									break;
								case 5:
									t.depthFunc(518);
									break;
								case 6:
									t.depthFunc(516);
									break;
								case 7:
									t.depthFunc(517);
									break;
								default:
									t.depthFunc(515)
							} else t.depthFunc(515);
							i = e
						}
					},
					setLocked: function(t) {
						e = t
					},
					setClear: function(e) {
						r !== e && (t.clearDepth(e), r = e)
					},
					reset: function() {
						e = !1, n = null, i = null, r = null
					}
				}
			},
			o = new function() {
				let e = !1,
					n = null,
					i = null,
					r = null,
					s = null,
					o = null,
					a = null,
					c = null,
					l = null;
				return {
					setTest: function(t) {
						e || (t ? O(2960) : I(2960))
					},
					setMask: function(i) {
						n === i || e || (t.stencilMask(i), n = i)
					},
					setFunc: function(e, n, o) {
						i === e && r === n && s === o || (t.stencilFunc(e, n, o), i = e, r = n, s = o)
					},
					setOp: function(e, n, i) {
						o === e && a === n && c === i || (t.stencilOp(e, n, i), o = e, a = n, c = i)
					},
					setLocked: function(t) {
						e = t
					},
					setClear: function(e) {
						l !== e && (t.clearStencil(e), l = e)
					},
					reset: function() {
						e = !1, n = null, i = null, r = null, s = null, o = null, a = null, c = null, l = null
					}
				}
			};
		let a = {},
			c = null,
			l = null,
			h = null,
			u = null,
			d = null,
			p = null,
			f = null,
			m = null,
			g = null,
			v = !1,
			y = null,
			x = null,
			b = null,
			_ = null,
			w = null;
		const M = t.getParameter(35661);
		let S = !1,
			T = 0;
		const E = t.getParameter(7938); - 1 !== E.indexOf("WebGL") ? (T = parseFloat(/^WebGL (\d)/.exec(E)[1]), S = T >= 1) : -1 !== E.indexOf("OpenGL ES") && (T = parseFloat(/^OpenGL ES (\d)/.exec(E)[1]), S = T >= 2);
		let A = null,
			L = {};
		const C = new xe,
			R = new xe;

		function P(e, n, i) {
			const r = new Uint8Array(4),
				s = t.createTexture();
			t.bindTexture(e, s), t.texParameteri(e, 10241, 9728), t.texParameteri(e, 10240, 9728);
			for (let e = 0; e < i; e++) t.texImage2D(n + e, 0, 6408, 1, 1, 0, 6408, 5121, r);
			return s
		}
		const D = {};

		function O(e) {
			!0 !== a[e] && (t.enable(e), a[e] = !0)
		}

		function I(e) {
			!1 !== a[e] && (t.disable(e), a[e] = !1)
		}
		D[3553] = P(3553, 3553, 1), D[34067] = P(34067, 34069, 6), r.setClear(0, 0, 0, 1), s.setClear(1), o.setClear(0), O(2929), s.setFunc(3), U(!1), F(1), O(2884), B(0);
		const N = {
			[Ot]: 32774,
			101: 32778,
			102: 32779
		};
		if (i) N[103] = 32775, N[104] = 32776;
		else {
			const t = e.get("EXT_blend_minmax");
			null !== t && (N[103] = t.MIN_EXT, N[104] = t.MAX_EXT)
		}
		const z = {
			200: 0,
			201: 1,
			202: 768,
			204: 770,
			210: 776,
			208: 774,
			206: 772,
			203: 769,
			205: 771,
			209: 775,
			207: 773
		};

		function B(e, n, i, r, s, o, a, c) {
			if (0 !== e) {
				if (l || (O(3042), l = !0), 5 === e) s = s || n, o = o || i, a = a || r, n === u && s === f || (t.blendEquationSeparate(N[n], N[s]), u = n, f = s), i === d && r === p && o === m && a === g || (t.blendFuncSeparate(z[i], z[r], z[o], z[a]), d = i, p = r, m = o, g = a), h = e, v = null;
				else if (e !== h || c !== v) {
					if (u === Ot && f === Ot || (t.blendEquation(32774), u = Ot, f = Ot), c) switch (e) {
						case 1:
							t.blendFuncSeparate(1, 771, 1, 771);
							break;
						case 2:
							t.blendFunc(1, 1);
							break;
						case 3:
							t.blendFuncSeparate(0, 0, 769, 771);
							break;
						case 4:
							t.blendFuncSeparate(0, 768, 0, 770);
							break;
						default:
							console.error("THREE.WebGLState: Invalid blending: ", e)
					} else switch (e) {
						case 1:
							t.blendFuncSeparate(770, 771, 1, 771);
							break;
						case 2:
							t.blendFunc(770, 1);
							break;
						case 3:
							t.blendFunc(0, 769);
							break;
						case 4:
							t.blendFunc(0, 768);
							break;
						default:
							console.error("THREE.WebGLState: Invalid blending: ", e)
					}
					d = null, p = null, m = null, g = null, h = e, v = c
				}
			} else l && (I(3042), l = !1)
		}

		function U(e) {
			y !== e && (e ? t.frontFace(2304) : t.frontFace(2305), y = e)
		}

		function F(e) {
			0 !== e ? (O(2884), e !== x && (1 === e ? t.cullFace(1029) : 2 === e ? t.cullFace(1028) : t.cullFace(1032))) : I(2884), x = e
		}

		function H(e, n, i) {
			e ? (O(32823), _ === n && w === i || (t.polygonOffset(n, i), _ = n, w = i)) : I(32823)
		}

		function k(e) {
			void 0 === e && (e = 33984 + M - 1), A !== e && (t.activeTexture(e), A = e)
		}
		return {
			buffers: {
				color: r,
				depth: s,
				stencil: o
			},
			enable: O,
			disable: I,
			useProgram: function(e) {
				return c !== e && (t.useProgram(e), c = e, !0)
			},
			setBlending: B,
			setMaterial: function(t, e) {
				2 === t.side ? I(2884) : O(2884);
				let n = 1 === t.side;
				e && (n = !n), U(n), 1 === t.blending && !1 === t.transparent ? B(0) : B(t.blending, t.blendEquation, t.blendSrc, t.blendDst, t.blendEquationAlpha, t.blendSrcAlpha, t.blendDstAlpha, t.premultipliedAlpha), s.setFunc(t.depthFunc), s.setTest(t.depthTest), s.setMask(t.depthWrite), r.setMask(t.colorWrite);
				const i = t.stencilWrite;
				o.setTest(i), i && (o.setMask(t.stencilWriteMask), o.setFunc(t.stencilFunc, t.stencilRef, t.stencilFuncMask), o.setOp(t.stencilFail, t.stencilZFail, t.stencilZPass)), H(t.polygonOffset, t.polygonOffsetFactor, t.polygonOffsetUnits)
			},
			setFlipSided: U,
			setCullFace: F,
			setLineWidth: function(e) {
				e !== b && (S && t.lineWidth(e), b = e)
			},
			setPolygonOffset: H,
			setScissorTest: function(t) {
				t ? O(3089) : I(3089)
			},
			activeTexture: k,
			bindTexture: function(e, n) {
				null === A && k();
				let i = L[A];
				void 0 === i && (i = {
					type: void 0,
					texture: void 0
				}, L[A] = i), i.type === e && i.texture === n || (t.bindTexture(e, n || D[e]), i.type = e, i.texture = n)
			},
			unbindTexture: function() {
				const e = L[A];
				void 0 !== e && void 0 !== e.type && (t.bindTexture(e.type, null), e.type = void 0, e.texture = void 0)
			},
			compressedTexImage2D: function() {
				try {
					t.compressedTexImage2D.apply(t, arguments)
				} catch (t) {
					console.error("THREE.WebGLState:", t)
				}
			},
			texImage2D: function() {
				try {
					t.texImage2D.apply(t, arguments)
				} catch (t) {
					console.error("THREE.WebGLState:", t)
				}
			},
			texImage3D: function() {
				try {
					t.texImage3D.apply(t, arguments)
				} catch (t) {
					console.error("THREE.WebGLState:", t)
				}
			},
			scissor: function(e) {
				!1 === C.equals(e) && (t.scissor(e.x, e.y, e.z, e.w), C.copy(e))
			},
			viewport: function(e) {
				!1 === R.equals(e) && (t.viewport(e.x, e.y, e.z, e.w), R.copy(e))
			},
			reset: function() {
				a = {}, A = null, L = {}, c = null, l = null, h = null, u = null, d = null, p = null, f = null, m = null, g = null, v = !1, y = null, x = null, b = null, _ = null, w = null, r.reset(), s.reset(), o.reset()
			}
		}
	}

	function Qs(t, e, n, i, r, s, o) {
		const a = r.isWebGL2,
			c = r.maxTextures,
			l = r.maxCubemapSize,
			h = r.maxTextureSize,
			u = r.maxSamples,
			d = new WeakMap;
		let p, f = !1;
		try {
			f = "undefined" != typeof OffscreenCanvas && null !== new OffscreenCanvas(1, 1).getContext("2d")
		} catch (t) {}

		function m(t, e) {
			return f ? new OffscreenCanvas(t, e) : document.createElementNS("http://www.w3.org/1999/xhtml", "canvas")
		}

		function g(t, e, n, i) {
			let r = 1;
			if ((t.width > i || t.height > i) && (r = i / Math.max(t.width, t.height)), r < 1 || !0 === e) {
				if ("undefined" != typeof HTMLImageElement && t instanceof HTMLImageElement || "undefined" != typeof HTMLCanvasElement && t instanceof HTMLCanvasElement || "undefined" != typeof ImageBitmap && t instanceof ImageBitmap) {
					const i = e ? ue.floorPowerOfTwo : Math.floor,
						s = i(r * t.width),
						o = i(r * t.height);
					void 0 === p && (p = m(s, o));
					const a = n ? m(s, o) : p;
					a.width = s, a.height = o;
					return a.getContext("2d").drawImage(t, 0, 0, s, o), console.warn("THREE.WebGLRenderer: Texture has been resized from (" + t.width + "x" + t.height + ") to (" + s + "x" + o + ")."), a
				}
				return "data" in t && console.warn("THREE.WebGLRenderer: Image in DataTexture is too big (" + t.width + "x" + t.height + ")."), t
			}
			return t
		}

		function v(t) {
			return ue.isPowerOfTwo(t.width) && ue.isPowerOfTwo(t.height)
		}

		function y(t, e) {
			return t.generateMipmaps && e && t.minFilter !== Bt && t.minFilter !== Ut
		}

		function x(e, n, r, s) {
			t.generateMipmap(e);
			i.get(n).__maxMipLevel = Math.log(Math.max(r, s)) * Math.LOG2E
		}

		function b(n, i, r) {
			if (!1 === a) return i;
			if (null !== n) {
				if (void 0 !== t[n]) return t[n];
				console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '" + n + "'")
			}
			let s = i;
			return 6403 === i && (5126 === r && (s = 33326), 5131 === r && (s = 33325), 5121 === r && (s = 33321)), 6407 === i && (5126 === r && (s = 34837), 5131 === r && (s = 34843), 5121 === r && (s = 32849)), 6408 === i && (5126 === r && (s = 34836), 5131 === r && (s = 34842), 5121 === r && (s = 32856)), 33325 !== s && 33326 !== s && 34842 !== s && 34836 !== s || e.get("EXT_color_buffer_float"), s
		}

		function _(t) {
			return t === Bt || 1004 === t || 1005 === t ? 9728 : 9729
		}

		function w(e) {
			const n = e.target;
			n.removeEventListener("dispose", w),
				function(e) {
					const n = i.get(e);
					if (void 0 === n.__webglInit) return;
					t.deleteTexture(n.__webglTexture), i.remove(e)
				}(n), n.isVideoTexture && d.delete(n), o.memory.textures--
		}

		function M(e) {
			const n = e.target;
			n.removeEventListener("dispose", M),
				function(e) {
					const n = i.get(e),
						r = i.get(e.texture);
					if (!e) return;
					void 0 !== r.__webglTexture && t.deleteTexture(r.__webglTexture);
					e.depthTexture && e.depthTexture.dispose();
					if (e.isWebGLCubeRenderTarget)
						for (let e = 0; e < 6; e++) t.deleteFramebuffer(n.__webglFramebuffer[e]), n.__webglDepthbuffer && t.deleteRenderbuffer(n.__webglDepthbuffer[e]);
					else t.deleteFramebuffer(n.__webglFramebuffer), n.__webglDepthbuffer && t.deleteRenderbuffer(n.__webglDepthbuffer), n.__webglMultisampledFramebuffer && t.deleteFramebuffer(n.__webglMultisampledFramebuffer), n.__webglColorRenderbuffer && t.deleteRenderbuffer(n.__webglColorRenderbuffer), n.__webglDepthRenderbuffer && t.deleteRenderbuffer(n.__webglDepthRenderbuffer);
					i.remove(e.texture), i.remove(e)
				}(n), o.memory.textures--
		}
		let S = 0;

		function T(t, e) {
			const r = i.get(t);
			if (t.isVideoTexture && function(t) {
					const e = o.render.frame;
					d.get(t) !== e && (d.set(t, e), t.update())
				}(t), t.version > 0 && r.__version !== t.version) {
				const n = t.image;
				if (void 0 === n) console.warn("THREE.WebGLRenderer: Texture marked for update but image is undefined");
				else {
					if (!1 !== n.complete) return void P(r, t, e);
					console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete")
				}
			}
			n.activeTexture(33984 + e), n.bindTexture(3553, r.__webglTexture)
		}

		function E(e, r) {
			const o = i.get(e);
			e.version > 0 && o.__version !== e.version ? function(e, i, r) {
				if (6 !== i.image.length) return;
				R(e, i), n.activeTexture(33984 + r), n.bindTexture(34067, e.__webglTexture), t.pixelStorei(37440, i.flipY), t.pixelStorei(37441, i.premultiplyAlpha), t.pixelStorei(3317, i.unpackAlignment);
				const o = i && (i.isCompressedTexture || i.image[0].isCompressedTexture),
					c = i.image[0] && i.image[0].isDataTexture,
					h = [];
				for (let t = 0; t < 6; t++) h[t] = o || c ? c ? i.image[t].image : i.image[t] : g(i.image[t], !1, !0, l);
				const u = h[0],
					d = v(u) || a,
					p = s.convert(i.format),
					f = s.convert(i.type),
					m = b(i.internalFormat, p, f);
				let _;
				if (C(34067, i, d), o) {
					for (let t = 0; t < 6; t++) {
						_ = h[t].mipmaps;
						for (let e = 0; e < _.length; e++) {
							const r = _[e];
							i.format !== qt && i.format !== $t ? null !== p ? n.compressedTexImage2D(34069 + t, e, m, r.width, r.height, 0, r.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()") : n.texImage2D(34069 + t, e, m, r.width, r.height, 0, p, f, r.data)
						}
					}
					e.__maxMipLevel = _.length - 1
				} else {
					_ = i.mipmaps;
					for (let t = 0; t < 6; t++)
						if (c) {
							n.texImage2D(34069 + t, 0, m, h[t].width, h[t].height, 0, p, f, h[t].data);
							for (let e = 0; e < _.length; e++) {
								const i = _[e].image[t].image;
								n.texImage2D(34069 + t, e + 1, m, i.width, i.height, 0, p, f, i.data)
							}
						} else {
							n.texImage2D(34069 + t, 0, m, p, f, h[t]);
							for (let e = 0; e < _.length; e++) {
								const i = _[e];
								n.texImage2D(34069 + t, e + 1, m, p, f, i.image[t])
							}
						} e.__maxMipLevel = _.length
				}
				y(i, d) && x(34067, i, u.width, u.height);
				e.__version = i.version, i.onUpdate && i.onUpdate(i)
			}(o, e, r) : (n.activeTexture(33984 + r), n.bindTexture(34067, o.__webglTexture))
		}
		const A = {
				[It]: 10497,
				[Nt]: 33071,
				[zt]: 33648
			},
			L = {
				[Bt]: 9728,
				1004: 9984,
				1005: 9986,
				[Ut]: 9729,
				1007: 9985,
				[Ft]: 9987
			};

		function C(n, s, o) {
			o ? (t.texParameteri(n, 10242, A[s.wrapS]), t.texParameteri(n, 10243, A[s.wrapT]), 32879 !== n && 35866 !== n || t.texParameteri(n, 32882, A[s.wrapR]), t.texParameteri(n, 10240, L[s.magFilter]), t.texParameteri(n, 10241, L[s.minFilter])) : (t.texParameteri(n, 10242, 33071), t.texParameteri(n, 10243, 33071), 32879 !== n && 35866 !== n || t.texParameteri(n, 32882, 33071), s.wrapS === Nt && s.wrapT === Nt || console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."), t.texParameteri(n, 10240, _(s.magFilter)), t.texParameteri(n, 10241, _(s.minFilter)), s.minFilter !== Bt && s.minFilter !== Ut && console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter."));
			const c = e.get("EXT_texture_filter_anisotropic");
			if (c) {
				if (s.type === jt && null === e.get("OES_texture_float_linear")) return;
				if (s.type === Vt && null === (a || e.get("OES_texture_half_float_linear"))) return;
				(s.anisotropy > 1 || i.get(s).__currentAnisotropy) && (t.texParameterf(n, c.TEXTURE_MAX_ANISOTROPY_EXT, Math.min(s.anisotropy, r.getMaxAnisotropy())), i.get(s).__currentAnisotropy = s.anisotropy)
			}
		}

		function R(e, n) {
			void 0 === e.__webglInit && (e.__webglInit = !0, n.addEventListener("dispose", w), e.__webglTexture = t.createTexture(), o.memory.textures++)
		}

		function P(e, i, r) {
			let o = 3553;
			i.isDataTexture2DArray && (o = 35866), i.isDataTexture3D && (o = 32879), R(e, i), n.activeTexture(33984 + r), n.bindTexture(o, e.__webglTexture), t.pixelStorei(37440, i.flipY), t.pixelStorei(37441, i.premultiplyAlpha), t.pixelStorei(3317, i.unpackAlignment);
			const c = function(t) {
					return !a && (t.wrapS !== Nt || t.wrapT !== Nt || t.minFilter !== Bt && t.minFilter !== Ut)
				}(i) && !1 === v(i.image),
				l = g(i.image, c, !1, h),
				u = v(l) || a,
				d = s.convert(i.format);
			let p, f = s.convert(i.type),
				m = b(i.internalFormat, d, f);
			C(o, i, u);
			const _ = i.mipmaps;
			if (i.isDepthTexture) m = 6402, a ? m = i.type === jt ? 36012 : i.type === Gt ? 33190 : i.type === Wt ? 35056 : 33189 : i.type === jt && console.error("WebGLRenderer: Floating point depth texture requires WebGL2."), i.format === Xt && 6402 === m && i.type !== kt && i.type !== Gt && (console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."), i.type = kt, f = s.convert(i.type)), i.format === Yt && 6402 === m && (m = 34041, i.type !== Wt && (console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."), i.type = Wt, f = s.convert(i.type))), n.texImage2D(3553, 0, m, l.width, l.height, 0, d, f, null);
			else if (i.isDataTexture)
				if (_.length > 0 && u) {
					for (let t = 0, e = _.length; t < e; t++) p = _[t], n.texImage2D(3553, t, m, p.width, p.height, 0, d, f, p.data);
					i.generateMipmaps = !1, e.__maxMipLevel = _.length - 1
				} else n.texImage2D(3553, 0, m, l.width, l.height, 0, d, f, l.data), e.__maxMipLevel = 0;
			else if (i.isCompressedTexture) {
				for (let t = 0, e = _.length; t < e; t++) p = _[t], i.format !== qt && i.format !== $t ? null !== d ? n.compressedTexImage2D(3553, t, m, p.width, p.height, 0, p.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()") : n.texImage2D(3553, t, m, p.width, p.height, 0, d, f, p.data);
				e.__maxMipLevel = _.length - 1
			} else if (i.isDataTexture2DArray) n.texImage3D(35866, 0, m, l.width, l.height, l.depth, 0, d, f, l.data), e.__maxMipLevel = 0;
			else if (i.isDataTexture3D) n.texImage3D(32879, 0, m, l.width, l.height, l.depth, 0, d, f, l.data), e.__maxMipLevel = 0;
			else if (_.length > 0 && u) {
				for (let t = 0, e = _.length; t < e; t++) p = _[t], n.texImage2D(3553, t, m, d, f, p);
				i.generateMipmaps = !1, e.__maxMipLevel = _.length - 1
			} else n.texImage2D(3553, 0, m, d, f, l), e.__maxMipLevel = 0;
			y(i, u) && x(o, i, l.width, l.height), e.__version = i.version, i.onUpdate && i.onUpdate(i)
		}

		function D(e, r, o, a) {
			const c = s.convert(r.texture.format),
				l = s.convert(r.texture.type),
				h = b(r.texture.internalFormat, c, l);
			n.texImage2D(a, 0, h, r.width, r.height, 0, c, l, null), t.bindFramebuffer(36160, e), t.framebufferTexture2D(36160, o, a, i.get(r.texture).__webglTexture, 0), t.bindFramebuffer(36160, null)
		}

		function O(e, n, i) {
			if (t.bindRenderbuffer(36161, e), n.depthBuffer && !n.stencilBuffer) {
				let r = 33189;
				if (i) {
					const e = n.depthTexture;
					e && e.isDepthTexture && (e.type === jt ? r = 36012 : e.type === Gt && (r = 33190));
					const i = N(n);
					t.renderbufferStorageMultisample(36161, i, r, n.width, n.height)
				} else t.renderbufferStorage(36161, r, n.width, n.height);
				t.framebufferRenderbuffer(36160, 36096, 36161, e)
			} else if (n.depthBuffer && n.stencilBuffer) {
				if (i) {
					const e = N(n);
					t.renderbufferStorageMultisample(36161, e, 35056, n.width, n.height)
				} else t.renderbufferStorage(36161, 34041, n.width, n.height);
				t.framebufferRenderbuffer(36160, 33306, 36161, e)
			} else {
				const e = s.convert(n.texture.format),
					r = s.convert(n.texture.type),
					o = b(n.texture.internalFormat, e, r);
				if (i) {
					const e = N(n);
					t.renderbufferStorageMultisample(36161, e, o, n.width, n.height)
				} else t.renderbufferStorage(36161, o, n.width, n.height)
			}
			t.bindRenderbuffer(36161, null)
		}

		function I(e) {
			const n = i.get(e),
				r = !0 === e.isWebGLCubeRenderTarget;
			if (e.depthTexture) {
				if (r) throw new Error("target.depthTexture not supported in Cube render targets");
				! function(e, n) {
					if (n && n.isWebGLCubeRenderTarget) throw new Error("Depth Texture with cube render targets is not supported");
					if (t.bindFramebuffer(36160, e), !n.depthTexture || !n.depthTexture.isDepthTexture) throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");
					i.get(n.depthTexture).__webglTexture && n.depthTexture.image.width === n.width && n.depthTexture.image.height === n.height || (n.depthTexture.image.width = n.width, n.depthTexture.image.height = n.height, n.depthTexture.needsUpdate = !0), T(n.depthTexture, 0);
					const r = i.get(n.depthTexture).__webglTexture;
					if (n.depthTexture.format === Xt) t.framebufferTexture2D(36160, 36096, 3553, r, 0);
					else {
						if (n.depthTexture.format !== Yt) throw new Error("Unknown depthTexture format");
						t.framebufferTexture2D(36160, 33306, 3553, r, 0)
					}
				}(n.__webglFramebuffer, e)
			} else if (r) {
				n.__webglDepthbuffer = [];
				for (let i = 0; i < 6; i++) t.bindFramebuffer(36160, n.__webglFramebuffer[i]), n.__webglDepthbuffer[i] = t.createRenderbuffer(), O(n.__webglDepthbuffer[i], e, !1)
			} else t.bindFramebuffer(36160, n.__webglFramebuffer), n.__webglDepthbuffer = t.createRenderbuffer(), O(n.__webglDepthbuffer, e, !1);
			t.bindFramebuffer(36160, null)
		}

		function N(t) {
			return a && t.isWebGLMultisampleRenderTarget ? Math.min(u, t.samples) : 0
		}
		let z = !1,
			B = !1;
		this.allocateTextureUnit = function() {
			const t = S;
			return t >= c && console.warn("THREE.WebGLTextures: Trying to use " + t + " texture units while this GPU supports only " + c), S += 1, t
		}, this.resetTextureUnits = function() {
			S = 0
		}, this.setTexture2D = T, this.setTexture2DArray = function(t, e) {
			const r = i.get(t);
			t.version > 0 && r.__version !== t.version ? P(r, t, e) : (n.activeTexture(33984 + e), n.bindTexture(35866, r.__webglTexture))
		}, this.setTexture3D = function(t, e) {
			const r = i.get(t);
			t.version > 0 && r.__version !== t.version ? P(r, t, e) : (n.activeTexture(33984 + e), n.bindTexture(32879, r.__webglTexture))
		}, this.setTextureCube = E, this.setupRenderTarget = function(e) {
			const r = i.get(e),
				c = i.get(e.texture);
			e.addEventListener("dispose", M), c.__webglTexture = t.createTexture(), o.memory.textures++;
			const l = !0 === e.isWebGLCubeRenderTarget,
				h = !0 === e.isWebGLMultisampleRenderTarget,
				u = v(e) || a;
			if (!a || e.texture.format !== $t || e.texture.type !== jt && e.texture.type !== Vt || (e.texture.format = qt, console.warn("THREE.WebGLRenderer: Rendering to textures with RGB format is not supported. Using RGBA format instead.")), l) {
				r.__webglFramebuffer = [];
				for (let e = 0; e < 6; e++) r.__webglFramebuffer[e] = t.createFramebuffer()
			} else if (r.__webglFramebuffer = t.createFramebuffer(), h)
				if (a) {
					r.__webglMultisampledFramebuffer = t.createFramebuffer(), r.__webglColorRenderbuffer = t.createRenderbuffer(), t.bindRenderbuffer(36161, r.__webglColorRenderbuffer);
					const n = s.convert(e.texture.format),
						i = s.convert(e.texture.type),
						o = b(e.texture.internalFormat, n, i),
						a = N(e);
					t.renderbufferStorageMultisample(36161, a, o, e.width, e.height), t.bindFramebuffer(36160, r.__webglMultisampledFramebuffer), t.framebufferRenderbuffer(36160, 36064, 36161, r.__webglColorRenderbuffer), t.bindRenderbuffer(36161, null), e.depthBuffer && (r.__webglDepthRenderbuffer = t.createRenderbuffer(), O(r.__webglDepthRenderbuffer, e, !0)), t.bindFramebuffer(36160, null)
				} else console.warn("THREE.WebGLRenderer: WebGLMultisampleRenderTarget can only be used with WebGL2.");
			if (l) {
				n.bindTexture(34067, c.__webglTexture), C(34067, e.texture, u);
				for (let t = 0; t < 6; t++) D(r.__webglFramebuffer[t], e, 36064, 34069 + t);
				y(e.texture, u) && x(34067, e.texture, e.width, e.height), n.bindTexture(34067, null)
			} else n.bindTexture(3553, c.__webglTexture), C(3553, e.texture, u), D(r.__webglFramebuffer, e, 36064, 3553), y(e.texture, u) && x(3553, e.texture, e.width, e.height), n.bindTexture(3553, null);
			e.depthBuffer && I(e)
		}, this.updateRenderTargetMipmap = function(t) {
			const e = t.texture;
			if (y(e, v(t) || a)) {
				const r = t.isWebGLCubeRenderTarget ? 34067 : 3553,
					s = i.get(e).__webglTexture;
				n.bindTexture(r, s), x(r, e, t.width, t.height), n.bindTexture(r, null)
			}
		}, this.updateMultisampleRenderTarget = function(e) {
			if (e.isWebGLMultisampleRenderTarget)
				if (a) {
					const n = i.get(e);
					t.bindFramebuffer(36008, n.__webglMultisampledFramebuffer), t.bindFramebuffer(36009, n.__webglFramebuffer);
					const r = e.width,
						s = e.height;
					let o = 16384;
					e.depthBuffer && (o |= 256), e.stencilBuffer && (o |= 1024), t.blitFramebuffer(0, 0, r, s, 0, 0, r, s, o, 9728), t.bindFramebuffer(36160, n.__webglMultisampledFramebuffer)
				} else console.warn("THREE.WebGLRenderer: WebGLMultisampleRenderTarget can only be used with WebGL2.")
		}, this.safeSetTexture2D = function(t, e) {
			t && t.isWebGLRenderTarget && (!1 === z && (console.warn("THREE.WebGLTextures.safeSetTexture2D: don't use render targets as textures. Use their .texture property instead."), z = !0), t = t.texture), T(t, e)
		}, this.safeSetTextureCube = function(t, e) {
			t && t.isWebGLCubeRenderTarget && (!1 === B && (console.warn("THREE.WebGLTextures.safeSetTextureCube: don't use cube render targets as textures. Use their .texture property instead."), B = !0), t = t.texture), E(t, e)
		}
	}

	function Ks(t, e, n) {
		const i = n.isWebGL2;
		return {
			convert: function(t) {
				let n;
				if (t === Ht) return 5121;
				if (1017 === t) return 32819;
				if (1018 === t) return 32820;
				if (1019 === t) return 33635;
				if (1010 === t) return 5120;
				if (1011 === t) return 5122;
				if (t === kt) return 5123;
				if (1013 === t) return 5124;
				if (t === Gt) return 5125;
				if (t === jt) return 5126;
				if (t === Vt) return i ? 5131 : (n = e.get("OES_texture_half_float"), null !== n ? n.HALF_FLOAT_OES : null);
				if (1021 === t) return 6406;
				if (t === $t) return 6407;
				if (t === qt) return 6408;
				if (1024 === t) return 6409;
				if (1025 === t) return 6410;
				if (t === Xt) return 6402;
				if (t === Yt) return 34041;
				if (1028 === t) return 6403;
				if (1029 === t) return 36244;
				if (1030 === t) return 33319;
				if (1031 === t) return 33320;
				if (1032 === t) return 36248;
				if (1033 === t) return 36249;
				if (33776 === t || 33777 === t || 33778 === t || 33779 === t) {
					if (n = e.get("WEBGL_compressed_texture_s3tc"), null === n) return null;
					if (33776 === t) return n.COMPRESSED_RGB_S3TC_DXT1_EXT;
					if (33777 === t) return n.COMPRESSED_RGBA_S3TC_DXT1_EXT;
					if (33778 === t) return n.COMPRESSED_RGBA_S3TC_DXT3_EXT;
					if (33779 === t) return n.COMPRESSED_RGBA_S3TC_DXT5_EXT
				}
				if (35840 === t || 35841 === t || 35842 === t || 35843 === t) {
					if (n = e.get("WEBGL_compressed_texture_pvrtc"), null === n) return null;
					if (35840 === t) return n.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;
					if (35841 === t) return n.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;
					if (35842 === t) return n.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;
					if (35843 === t) return n.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG
				}
				if (36196 === t) return n = e.get("WEBGL_compressed_texture_etc1"), null !== n ? n.COMPRESSED_RGB_ETC1_WEBGL : null;
				if ((37492 === t || 37496 === t) && (n = e.get("WEBGL_compressed_texture_etc"), null !== n)) {
					if (37492 === t) return n.COMPRESSED_RGB8_ETC2;
					if (37496 === t) return n.COMPRESSED_RGBA8_ETC2_EAC
				}
				return 37808 === t || 37809 === t || 37810 === t || 37811 === t || 37812 === t || 37813 === t || 37814 === t || 37815 === t || 37816 === t || 37817 === t || 37818 === t || 37819 === t || 37820 === t || 37821 === t || 37840 === t || 37841 === t || 37842 === t || 37843 === t || 37844 === t || 37845 === t || 37846 === t || 37847 === t || 37848 === t || 37849 === t || 37850 === t || 37851 === t || 37852 === t || 37853 === t ? (n = e.get("WEBGL_compressed_texture_astc"), null !== n ? t : null) : 36492 === t ? (n = e.get("EXT_texture_compression_bptc"), null !== n ? t : null) : t === Wt ? i ? 34042 : (n = e.get("WEBGL_depth_texture"), null !== n ? n.UNSIGNED_INT_24_8_WEBGL : null) : void 0
			}
		}
	}

	function to(t = []) {
		Vi.call(this), this.cameras = t
	}

	function eo() {
		wn.call(this), this.type = "Group"
	}

	function no() {
		this._targetRay = null, this._grip = null, this._hand = null
	}

	function io(t, e) {
		const n = this;
		let i = null,
			r = 1,
			s = null,
			o = "local-floor",
			a = null;
		const c = [],
			l = new Map,
			h = new Vi;
		h.layers.enable(1), h.viewport = new xe;
		const u = new Vi;
		u.layers.enable(2), u.viewport = new xe;
		const d = [h, u],
			p = new to;
		p.layers.enable(1), p.layers.enable(2);
		let f = null,
			m = null;

		function g(t) {
			const e = l.get(t.inputSource);
			e && e.dispatchEvent({
				type: t.type,
				data: t.inputSource
			})
		}

		function v() {
			l.forEach((function(t, e) {
				t.disconnect(e)
			})), l.clear(), f = null, m = null, t.setFramebuffer(null), t.setRenderTarget(t.getRenderTarget()), M.stop(), n.isPresenting = !1, n.dispatchEvent({
				type: "sessionend"
			})
		}

		function y(t) {
			const e = i.inputSources;
			for (let t = 0; t < c.length; t++) l.set(e[t], c[t]);
			for (let e = 0; e < t.removed.length; e++) {
				const n = t.removed[e],
					i = l.get(n);
				i && (i.dispatchEvent({
					type: "disconnected",
					data: n
				}), l.delete(n))
			}
			for (let e = 0; e < t.added.length; e++) {
				const n = t.added[e],
					i = l.get(n);
				i && i.dispatchEvent({
					type: "connected",
					data: n
				})
			}
		}
		this.enabled = !1, this.isPresenting = !1, this.getController = function(t) {
			let e = c[t];
			return void 0 === e && (e = new no, c[t] = e), e.getTargetRaySpace()
		}, this.getControllerGrip = function(t) {
			let e = c[t];
			return void 0 === e && (e = new no, c[t] = e), e.getGripSpace()
		}, this.getHand = function(t) {
			let e = c[t];
			return void 0 === e && (e = new no, c[t] = e), e.getHandSpace()
		}, this.setFramebufferScaleFactor = function(t) {
			r = t, !0 === n.isPresenting && console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")
		}, this.setReferenceSpaceType = function(t) {
			o = t, !0 === n.isPresenting && console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")
		}, this.getReferenceSpace = function() {
			return s
		}, this.getSession = function() {
			return i
		}, this.setSession = async function(t) {
			if (i = t, null !== i) {
				i.addEventListener("select", g), i.addEventListener("selectstart", g), i.addEventListener("selectend", g), i.addEventListener("squeeze", g), i.addEventListener("squeezestart", g), i.addEventListener("squeezeend", g), i.addEventListener("end", v), i.addEventListener("inputsourceschange", y);
				const t = e.getContextAttributes();
				!0 !== t.xrCompatible && await e.makeXRCompatible();
				const a = {
						antialias: t.antialias,
						alpha: t.alpha,
						depth: t.depth,
						stencil: t.stencil,
						framebufferScaleFactor: r
					},
					c = new XRWebGLLayer(i, e, a);
				i.updateRenderState({
					baseLayer: c
				}), s = await i.requestReferenceSpace(o), M.setContext(i), M.start(), n.isPresenting = !0, n.dispatchEvent({
					type: "sessionstart"
				})
			}
		};
		const x = new we,
			b = new we;

		function _(t, e) {
			null === e ? t.matrixWorld.copy(t.matrix) : t.matrixWorld.multiplyMatrices(e.matrixWorld, t.matrix), t.matrixWorldInverse.copy(t.matrixWorld).invert()
		}
		this.getCamera = function(t) {
			p.near = u.near = h.near = t.near, p.far = u.far = h.far = t.far, f === p.near && m === p.far || (i.updateRenderState({
				depthNear: p.near,
				depthFar: p.far
			}), f = p.near, m = p.far);
			const e = t.parent,
				n = p.cameras;
			_(p, e);
			for (let t = 0; t < n.length; t++) _(n[t], e);
			t.matrixWorld.copy(p.matrixWorld), t.matrix.copy(p.matrix), t.matrix.decompose(t.position, t.quaternion, t.scale);
			const r = t.children;
			for (let t = 0, e = r.length; t < e; t++) r[t].updateMatrixWorld(!0);
			return 2 === n.length ? function(t, e, n) {
				x.setFromMatrixPosition(e.matrixWorld), b.setFromMatrixPosition(n.matrixWorld);
				const i = x.distanceTo(b),
					r = e.projectionMatrix.elements,
					s = n.projectionMatrix.elements,
					o = r[14] / (r[10] - 1),
					a = r[14] / (r[10] + 1),
					c = (r[9] + 1) / r[5],
					l = (r[9] - 1) / r[5],
					h = (r[8] - 1) / r[0],
					u = (s[8] + 1) / s[0],
					d = o * h,
					p = o * u,
					f = i / (-h + u),
					m = f * -h;
				e.matrixWorld.decompose(t.position, t.quaternion, t.scale), t.translateX(m), t.translateZ(f), t.matrixWorld.compose(t.position, t.quaternion, t.scale), t.matrixWorldInverse.copy(t.matrixWorld).invert();
				const g = o + f,
					v = a + f,
					y = d - m,
					_ = p + (i - m),
					w = c * a / v * g,
					M = l * a / v * g;
				t.projectionMatrix.makePerspective(y, _, w, M, g, v)
			}(p, h, u) : p.projectionMatrix.copy(h.projectionMatrix), p
		};
		let w = null;
		const M = new Ki;
		M.setAnimationLoop((function(e, n) {
			if (a = n.getViewerPose(s), null !== a) {
				const e = a.views,
					n = i.renderState.baseLayer;
				t.setFramebuffer(n.framebuffer);
				let r = !1;
				e.length !== p.cameras.length && (p.cameras.length = 0, r = !0);
				for (let t = 0; t < e.length; t++) {
					const i = e[t],
						s = n.getViewport(i),
						o = d[t];
					o.matrix.fromArray(i.transform.matrix), o.projectionMatrix.fromArray(i.projectionMatrix), o.viewport.set(s.x, s.y, s.width, s.height), 0 === t && p.matrix.copy(o.matrix), !0 === r && p.cameras.push(o)
				}
			}
			const r = i.inputSources;
			for (let t = 0; t < c.length; t++) {
				const e = c[t],
					i = r[t];
				e.update(i, n, s)
			}
			w && w(e, n)
		})), this.setAnimationLoop = function(t) {
			w = t
		}, this.dispose = function() {}
	}

	function ro(t) {
		function e(e, n) {
			e.opacity.value = n.opacity, n.color && e.diffuse.value.copy(n.color), n.emissive && e.emissive.value.copy(n.emissive).multiplyScalar(n.emissiveIntensity), n.map && (e.map.value = n.map), n.alphaMap && (e.alphaMap.value = n.alphaMap), n.specularMap && (e.specularMap.value = n.specularMap);
			const i = t.get(n).envMap;
			if (i) {
				e.envMap.value = i, e.flipEnvMap.value = i.isCubeTexture && i._needsFlipEnvMap ? -1 : 1, e.reflectivity.value = n.reflectivity, e.refractionRatio.value = n.refractionRatio;
				const r = t.get(i).__maxMipLevel;
				void 0 !== r && (e.maxMipLevel.value = r)
			}
			let r, s;
			n.lightMap && (e.lightMap.value = n.lightMap, e.lightMapIntensity.value = n.lightMapIntensity), n.aoMap && (e.aoMap.value = n.aoMap, e.aoMapIntensity.value = n.aoMapIntensity), n.map ? r = n.map : n.specularMap ? r = n.specularMap : n.displacementMap ? r = n.displacementMap : n.normalMap ? r = n.normalMap : n.bumpMap ? r = n.bumpMap : n.roughnessMap ? r = n.roughnessMap : n.metalnessMap ? r = n.metalnessMap : n.alphaMap ? r = n.alphaMap : n.emissiveMap ? r = n.emissiveMap : n.clearcoatMap ? r = n.clearcoatMap : n.clearcoatNormalMap ? r = n.clearcoatNormalMap : n.clearcoatRoughnessMap && (r = n.clearcoatRoughnessMap), void 0 !== r && (r.isWebGLRenderTarget && (r = r.texture), !0 === r.matrixAutoUpdate && r.updateMatrix(), e.uvTransform.value.copy(r.matrix)), n.aoMap ? s = n.aoMap : n.lightMap && (s = n.lightMap), void 0 !== s && (s.isWebGLRenderTarget && (s = s.texture), !0 === s.matrixAutoUpdate && s.updateMatrix(), e.uv2Transform.value.copy(s.matrix))
		}

		function n(e, n) {
			e.roughness.value = n.roughness, e.metalness.value = n.metalness, n.roughnessMap && (e.roughnessMap.value = n.roughnessMap), n.metalnessMap && (e.metalnessMap.value = n.metalnessMap), n.emissiveMap && (e.emissiveMap.value = n.emissiveMap), n.bumpMap && (e.bumpMap.value = n.bumpMap, e.bumpScale.value = n.bumpScale, 1 === n.side && (e.bumpScale.value *= -1)), n.normalMap && (e.normalMap.value = n.normalMap, e.normalScale.value.copy(n.normalScale), 1 === n.side && e.normalScale.value.negate()), n.displacementMap && (e.displacementMap.value = n.displacementMap, e.displacementScale.value = n.displacementScale, e.displacementBias.value = n.displacementBias);
			t.get(n).envMap && (e.envMapIntensity.value = n.envMapIntensity)
		}
		return {
			refreshFogUniforms: function(t, e) {
				t.fogColor.value.copy(e.color), e.isFog ? (t.fogNear.value = e.near, t.fogFar.value = e.far) : e.isFogExp2 && (t.fogDensity.value = e.density)
			},
			refreshMaterialUniforms: function(t, i, r, s) {
				i.isMeshBasicMaterial ? e(t, i) : i.isMeshLambertMaterial ? (e(t, i), function(t, e) {
					e.emissiveMap && (t.emissiveMap.value = e.emissiveMap)
				}(t, i)) : i.isMeshToonMaterial ? (e(t, i), function(t, e) {
					e.gradientMap && (t.gradientMap.value = e.gradientMap);
					e.emissiveMap && (t.emissiveMap.value = e.emissiveMap);
					e.bumpMap && (t.bumpMap.value = e.bumpMap, t.bumpScale.value = e.bumpScale, 1 === e.side && (t.bumpScale.value *= -1));
					e.normalMap && (t.normalMap.value = e.normalMap, t.normalScale.value.copy(e.normalScale), 1 === e.side && t.normalScale.value.negate());
					e.displacementMap && (t.displacementMap.value = e.displacementMap, t.displacementScale.value = e.displacementScale, t.displacementBias.value = e.displacementBias)
				}(t, i)) : i.isMeshPhongMaterial ? (e(t, i), function(t, e) {
					t.specular.value.copy(e.specular), t.shininess.value = Math.max(e.shininess, 1e-4), e.emissiveMap && (t.emissiveMap.value = e.emissiveMap);
					e.bumpMap && (t.bumpMap.value = e.bumpMap, t.bumpScale.value = e.bumpScale, 1 === e.side && (t.bumpScale.value *= -1));
					e.normalMap && (t.normalMap.value = e.normalMap, t.normalScale.value.copy(e.normalScale), 1 === e.side && t.normalScale.value.negate());
					e.displacementMap && (t.displacementMap.value = e.displacementMap, t.displacementScale.value = e.displacementScale, t.displacementBias.value = e.displacementBias)
				}(t, i)) : i.isMeshStandardMaterial ? (e(t, i), i.isMeshPhysicalMaterial ? function(t, e) {
					n(t, e), t.reflectivity.value = e.reflectivity, t.clearcoat.value = e.clearcoat, t.clearcoatRoughness.value = e.clearcoatRoughness, e.sheen && t.sheen.value.copy(e.sheen);
					e.clearcoatMap && (t.clearcoatMap.value = e.clearcoatMap);
					e.clearcoatRoughnessMap && (t.clearcoatRoughnessMap.value = e.clearcoatRoughnessMap);
					e.clearcoatNormalMap && (t.clearcoatNormalScale.value.copy(e.clearcoatNormalScale), t.clearcoatNormalMap.value = e.clearcoatNormalMap, 1 === e.side && t.clearcoatNormalScale.value.negate());
					t.transmission.value = e.transmission, e.transmissionMap && (t.transmissionMap.value = e.transmissionMap)
				}(t, i) : n(t, i)) : i.isMeshMatcapMaterial ? (e(t, i), function(t, e) {
					e.matcap && (t.matcap.value = e.matcap);
					e.bumpMap && (t.bumpMap.value = e.bumpMap, t.bumpScale.value = e.bumpScale, 1 === e.side && (t.bumpScale.value *= -1));
					e.normalMap && (t.normalMap.value = e.normalMap, t.normalScale.value.copy(e.normalScale), 1 === e.side && t.normalScale.value.negate());
					e.displacementMap && (t.displacementMap.value = e.displacementMap, t.displacementScale.value = e.displacementScale, t.displacementBias.value = e.displacementBias)
				}(t, i)) : i.isMeshDepthMaterial ? (e(t, i), function(t, e) {
					e.displacementMap && (t.displacementMap.value = e.displacementMap, t.displacementScale.value = e.displacementScale, t.displacementBias.value = e.displacementBias)
				}(t, i)) : i.isMeshDistanceMaterial ? (e(t, i), function(t, e) {
					e.displacementMap && (t.displacementMap.value = e.displacementMap, t.displacementScale.value = e.displacementScale, t.displacementBias.value = e.displacementBias);
					t.referencePosition.value.copy(e.referencePosition), t.nearDistance.value = e.nearDistance, t.farDistance.value = e.farDistance
				}(t, i)) : i.isMeshNormalMaterial ? (e(t, i), function(t, e) {
					e.bumpMap && (t.bumpMap.value = e.bumpMap, t.bumpScale.value = e.bumpScale, 1 === e.side && (t.bumpScale.value *= -1));
					e.normalMap && (t.normalMap.value = e.normalMap, t.normalScale.value.copy(e.normalScale), 1 === e.side && t.normalScale.value.negate());
					e.displacementMap && (t.displacementMap.value = e.displacementMap, t.displacementScale.value = e.displacementScale, t.displacementBias.value = e.displacementBias)
				}(t, i)) : i.isLineBasicMaterial ? (function(t, e) {
					t.diffuse.value.copy(e.color), t.opacity.value = e.opacity
				}(t, i), i.isLineDashedMaterial && function(t, e) {
					t.dashSize.value = e.dashSize, t.totalSize.value = e.dashSize + e.gapSize, t.scale.value = e.scale
				}(t, i)) : i.isPointsMaterial ? function(t, e, n, i) {
					t.diffuse.value.copy(e.color), t.opacity.value = e.opacity, t.size.value = e.size * n, t.scale.value = .5 * i, e.map && (t.map.value = e.map);
					e.alphaMap && (t.alphaMap.value = e.alphaMap);
					let r;
					e.map ? r = e.map : e.alphaMap && (r = e.alphaMap);
					void 0 !== r && (!0 === r.matrixAutoUpdate && r.updateMatrix(), t.uvTransform.value.copy(r.matrix))
				}(t, i, r, s) : i.isSpriteMaterial ? function(t, e) {
					t.diffuse.value.copy(e.color), t.opacity.value = e.opacity, t.rotation.value = e.rotation, e.map && (t.map.value = e.map);
					e.alphaMap && (t.alphaMap.value = e.alphaMap);
					let n;
					e.map ? n = e.map : e.alphaMap && (n = e.alphaMap);
					void 0 !== n && (!0 === n.matrixAutoUpdate && n.updateMatrix(), t.uvTransform.value.copy(n.matrix))
				}(t, i) : i.isShadowMaterial ? (t.color.value.copy(i.color), t.opacity.value = i.opacity) : i.isShaderMaterial && (i.uniformsNeedUpdate = !1)
			}
		}
	}

	function so(t) {
		const e = void 0 !== (t = t || {}).canvas ? t.canvas : function() {
				const t = document.createElementNS("http://www.w3.org/1999/xhtml", "canvas");
				return t.style.display = "block", t
			}(),
			n = void 0 !== t.context ? t.context : null,
			i = void 0 !== t.alpha && t.alpha,
			r = void 0 === t.depth || t.depth,
			s = void 0 === t.stencil || t.stencil,
			o = void 0 !== t.antialias && t.antialias,
			a = void 0 === t.premultipliedAlpha || t.premultipliedAlpha,
			c = void 0 !== t.preserveDrawingBuffer && t.preserveDrawingBuffer,
			l = void 0 !== t.powerPreference ? t.powerPreference : "default",
			h = void 0 !== t.failIfMajorPerformanceCaveat && t.failIfMajorPerformanceCaveat;
		let u = null,
			d = null;
		const p = [];
		this.domElement = e, this.debug = {
			checkShaderErrors: !0
		}, this.autoClear = !0, this.autoClearColor = !0, this.autoClearDepth = !0, this.autoClearStencil = !0, this.sortObjects = !0, this.clippingPlanes = [], this.localClippingEnabled = !1, this.gammaFactor = 2, this.outputEncoding = ie, this.physicallyCorrectLights = !1, this.toneMapping = 0, this.toneMappingExposure = 1, this.maxMorphTargets = 8, this.maxMorphNormals = 4;
		const f = this;
		let m = !1,
			g = null,
			v = 0,
			y = 0,
			x = null,
			b = null,
			_ = -1,
			w = null;
		const M = new xe,
			S = new xe;
		let T = null,
			E = e.width,
			A = e.height,
			L = 1,
			C = null,
			R = null;
		const P = new xe(0, 0, E, A),
			D = new xe(0, 0, E, A);
		let O = !1;
		const I = new Qi;
		let N = !1,
			z = !1;
		const B = new Ze,
			U = new we,
			F = {
				background: null,
				fog: null,
				environment: null,
				overrideMaterial: null,
				isScene: !0
			};

		function H() {
			return null === x ? L : 1
		}
		let k, G, j, V, W, $, q, X, Y, Z, J, Q, K, tt, et, nt, it, rt, st, ot, at, ct = n;

		function lt(t, n) {
			for (let i = 0; i < t.length; i++) {
				const r = t[i],
					s = e.getContext(r, n);
				if (null !== s) return s
			}
			return null
		}
		try {
			const t = {
				alpha: i,
				depth: r,
				stencil: s,
				antialias: o,
				premultipliedAlpha: a,
				preserveDrawingBuffer: c,
				powerPreference: l,
				failIfMajorPerformanceCaveat: h
			};
			if (e.addEventListener("webglcontextlost", pt, !1), e.addEventListener("webglcontextrestored", ft, !1), null === ct) {
				const e = ["webgl2", "webgl", "experimental-webgl"];
				if (!0 === f.isWebGL1Renderer && e.shift(), ct = lt(e, t), null === ct) throw lt(e) ? new Error("Error creating WebGL context with your selected attributes.") : new Error("Error creating WebGL context.")
			}
			void 0 === ct.getShaderPrecisionFormat && (ct.getShaderPrecisionFormat = function() {
				return {
					rangeMin: 1,
					rangeMax: 1,
					precision: 1
				}
			})
		} catch (t) {
			throw console.error("THREE.WebGLRenderer: " + t.message), t
		}

		function ht() {
			k = new ur(ct), G = new cr(ct, k, t), k.init(G), ot = new Ks(ct, k, G), j = new Js(ct, k, G), j.scissor(S.copy(D).multiplyScalar(L).floor()), j.viewport(M.copy(P).multiplyScalar(L).floor()), V = new fr(ct), W = new Bs, $ = new Qs(ct, k, j, W, G, ot, V), q = new hr(f), X = new tr(ct, G), at = new or(ct, k, X, G), Y = new dr(ct, X, V, at), Z = new yr(ct, Y, X, V), it = new vr(ct), et = new lr(W), J = new zs(f, q, k, G, at, et), Q = new ro(W), K = new ks(W), tt = new qs(k, G), nt = new sr(f, q, j, Z, a), rt = new ar(ct, k, V, G), st = new pr(ct, k, V, G), V.programs = J.programs, f.capabilities = G, f.extensions = k, f.properties = W, f.renderLists = K, f.state = j, f.info = V
		}
		ht();
		const ut = new io(f, ct);
		this.xr = ut;
		const dt = new Zs(f, Z, G.maxTextureSize);

		function pt(t) {
			t.preventDefault(), console.log("THREE.WebGLRenderer: Context Lost."), m = !0
		}

		function ft() {
			console.log("THREE.WebGLRenderer: Context Restored."), m = !1, ht()
		}

		function mt(t) {
			const e = t.target;
			e.removeEventListener("dispose", mt),
				function(t) {
					gt(t), W.remove(t)
				}(e)
		}

		function gt(t) {
			const e = W.get(t).program;
			void 0 !== e && J.releaseProgram(e)
		}
		this.shadowMap = dt, this.getContext = function() {
			return ct
		}, this.getContextAttributes = function() {
			return ct.getContextAttributes()
		}, this.forceContextLoss = function() {
			const t = k.get("WEBGL_lose_context");
			t && t.loseContext()
		}, this.forceContextRestore = function() {
			const t = k.get("WEBGL_lose_context");
			t && t.restoreContext()
		}, this.getPixelRatio = function() {
			return L
		}, this.setPixelRatio = function(t) {
			void 0 !== t && (L = t, this.setSize(E, A, !1))
		}, this.getSize = function(t) {
			return void 0 === t && (console.warn("WebGLRenderer: .getsize() now requires a Vector2 as an argument"), t = new de), t.set(E, A)
		}, this.setSize = function(t, n, i) {
			ut.isPresenting ? console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.") : (E = t, A = n, e.width = Math.floor(t * L), e.height = Math.floor(n * L), !1 !== i && (e.style.width = t + "px", e.style.height = n + "px"), this.setViewport(0, 0, t, n))
		}, this.getDrawingBufferSize = function(t) {
			return void 0 === t && (console.warn("WebGLRenderer: .getdrawingBufferSize() now requires a Vector2 as an argument"), t = new de), t.set(E * L, A * L).floor()
		}, this.setDrawingBufferSize = function(t, n, i) {
			E = t, A = n, L = i, e.width = Math.floor(t * i), e.height = Math.floor(n * i), this.setViewport(0, 0, t, n)
		}, this.getCurrentViewport = function(t) {
			return void 0 === t && (console.warn("WebGLRenderer: .getCurrentViewport() now requires a Vector4 as an argument"), t = new xe), t.copy(M)
		}, this.getViewport = function(t) {
			return t.copy(P)
		}, this.setViewport = function(t, e, n, i) {
			t.isVector4 ? P.set(t.x, t.y, t.z, t.w) : P.set(t, e, n, i), j.viewport(M.copy(P).multiplyScalar(L).floor())
		}, this.getScissor = function(t) {
			return t.copy(D)
		}, this.setScissor = function(t, e, n, i) {
			t.isVector4 ? D.set(t.x, t.y, t.z, t.w) : D.set(t, e, n, i), j.scissor(S.copy(D).multiplyScalar(L).floor())
		}, this.getScissorTest = function() {
			return O
		}, this.setScissorTest = function(t) {
			j.setScissorTest(O = t)
		}, this.setOpaqueSort = function(t) {
			C = t
		}, this.setTransparentSort = function(t) {
			R = t
		}, this.getClearColor = function(t) {
			return void 0 === t && (console.warn("WebGLRenderer: .getClearColor() now requires a Color as an argument"), t = new Vn), t.copy(nt.getClearColor())
		}, this.setClearColor = function() {
			nt.setClearColor.apply(nt, arguments)
		}, this.getClearAlpha = function() {
			return nt.getClearAlpha()
		}, this.setClearAlpha = function() {
			nt.setClearAlpha.apply(nt, arguments)
		}, this.clear = function(t, e, n) {
			let i = 0;
			(void 0 === t || t) && (i |= 16384), (void 0 === e || e) && (i |= 256), (void 0 === n || n) && (i |= 1024), ct.clear(i)
		}, this.clearColor = function() {
			this.clear(!0, !1, !1)
		}, this.clearDepth = function() {
			this.clear(!1, !0, !1)
		}, this.clearStencil = function() {
			this.clear(!1, !1, !0)
		}, this.dispose = function() {
			e.removeEventListener("webglcontextlost", pt, !1), e.removeEventListener("webglcontextrestored", ft, !1), K.dispose(), tt.dispose(), W.dispose(), q.dispose(), Z.dispose(), at.dispose(), ut.dispose(), yt.stop()
		}, this.renderBufferImmediate = function(t, e) {
			at.initAttributes();
			const n = W.get(t);
			t.hasPositions && !n.position && (n.position = ct.createBuffer()), t.hasNormals && !n.normal && (n.normal = ct.createBuffer()), t.hasUvs && !n.uv && (n.uv = ct.createBuffer()), t.hasColors && !n.color && (n.color = ct.createBuffer());
			const i = e.getAttributes();
			t.hasPositions && (ct.bindBuffer(34962, n.position), ct.bufferData(34962, t.positionArray, 35048), at.enableAttribute(i.position), ct.vertexAttribPointer(i.position, 3, 5126, !1, 0, 0)), t.hasNormals && (ct.bindBuffer(34962, n.normal), ct.bufferData(34962, t.normalArray, 35048), at.enableAttribute(i.normal), ct.vertexAttribPointer(i.normal, 3, 5126, !1, 0, 0)), t.hasUvs && (ct.bindBuffer(34962, n.uv), ct.bufferData(34962, t.uvArray, 35048), at.enableAttribute(i.uv), ct.vertexAttribPointer(i.uv, 2, 5126, !1, 0, 0)), t.hasColors && (ct.bindBuffer(34962, n.color), ct.bufferData(34962, t.colorArray, 35048), at.enableAttribute(i.color), ct.vertexAttribPointer(i.color, 3, 5126, !1, 0, 0)), at.disableUnusedAttributes(), ct.drawArrays(4, 0, t.count), t.count = 0
		}, this.renderBufferDirect = function(t, e, n, i, r, s) {
			null === e && (e = F);
			const o = r.isMesh && r.matrixWorld.determinant() < 0,
				a = Mt(t, e, i, r);
			j.setMaterial(i, o);
			let c = n.index;
			const l = n.attributes.position;
			if (null === c) {
				if (void 0 === l || 0 === l.count) return
			} else if (0 === c.count) return;
			let h, u = 1;
			!0 === i.wireframe && (c = Y.getWireframeAttribute(n), u = 2), (i.morphTargets || i.morphNormals) && it.update(r, n, i, a), at.setup(r, i, a, n, c);
			let d = rt;
			null !== c && (h = X.get(c), d = st, d.setIndex(h));
			const p = null !== c ? c.count : l.count,
				f = n.drawRange.start * u,
				m = n.drawRange.count * u,
				g = null !== s ? s.start * u : 0,
				v = null !== s ? s.count * u : 1 / 0,
				y = Math.max(f, g),
				x = Math.min(p, f + m, g + v) - 1,
				b = Math.max(0, x - y + 1);
			if (0 !== b) {
				if (r.isMesh) !0 === i.wireframe ? (j.setLineWidth(i.wireframeLinewidth * H()), d.setMode(1)) : d.setMode(4);
				else if (r.isLine) {
					let t = i.linewidth;
					void 0 === t && (t = 1), j.setLineWidth(t * H()), r.isLineSegments ? d.setMode(1) : r.isLineLoop ? d.setMode(2) : d.setMode(3)
				} else r.isPoints ? d.setMode(0) : r.isSprite && d.setMode(4);
				if (r.isInstancedMesh) d.renderInstances(y, b, r.count);
				else if (n.isInstancedBufferGeometry) {
					const t = Math.min(n.instanceCount, n._maxInstanceCount);
					d.renderInstances(y, b, t)
				} else d.render(y, b)
			}
		}, this.compile = function(t, e) {
			d = tt.get(t), d.init(), t.traverseVisible((function(t) {
				t.isLight && t.layers.test(e.layers) && (d.pushLight(t), t.castShadow && d.pushShadow(t))
			})), d.setupLights();
			const n = new WeakMap;
			t.traverse((function(e) {
				const i = e.material;
				if (i)
					if (Array.isArray(i))
						for (let r = 0; r < i.length; r++) {
							const s = i[r];
							!1 === n.has(s) && (wt(s, t, e), n.set(s))
						} else !1 === n.has(i) && (wt(i, t, e), n.set(i))
			}))
		};
		let vt = null;
		const yt = new Ki;

		function xt(t, e, n, i) {
			if (!1 === t.visible) return;
			if (t.layers.test(e.layers))
				if (t.isGroup) n = t.renderOrder;
				else if (t.isLOD) !0 === t.autoUpdate && t.update(e);
			else if (t.isLight) d.pushLight(t), t.castShadow && d.pushShadow(t);
			else if (t.isSprite) {
				if (!t.frustumCulled || I.intersectsSprite(t)) {
					i && U.setFromMatrixPosition(t.matrixWorld).applyMatrix4(B);
					const e = Z.update(t),
						r = t.material;
					r.visible && u.push(t, e, r, n, U.z, null)
				}
			} else if (t.isImmediateRenderObject) i && U.setFromMatrixPosition(t.matrixWorld).applyMatrix4(B), u.push(t, null, t.material, n, U.z, null);
			else if ((t.isMesh || t.isLine || t.isPoints) && (t.isSkinnedMesh && t.skeleton.frame !== V.render.frame && (t.skeleton.update(), t.skeleton.frame = V.render.frame), !t.frustumCulled || I.intersectsObject(t))) {
				i && U.setFromMatrixPosition(t.matrixWorld).applyMatrix4(B);
				const e = Z.update(t),
					r = t.material;
				if (Array.isArray(r)) {
					const i = e.groups;
					for (let s = 0, o = i.length; s < o; s++) {
						const o = i[s],
							a = r[o.materialIndex];
						a && a.visible && u.push(t, e, a, n, U.z, o)
					}
				} else r.visible && u.push(t, e, r, n, U.z, null)
			}
			const r = t.children;
			for (let t = 0, s = r.length; t < s; t++) xt(r[t], e, n, i)
		}

		function bt(t, e, n) {
			const i = !0 === e.isScene ? e.overrideMaterial : null;
			for (let r = 0, s = t.length; r < s; r++) {
				const s = t[r],
					o = s.object,
					a = s.geometry,
					c = null === i ? s.material : i,
					l = s.group;
				if (n.isArrayCamera) {
					const t = n.cameras;
					for (let n = 0, i = t.length; n < i; n++) {
						const i = t[n];
						o.layers.test(i.layers) && (j.viewport(M.copy(i.viewport)), d.setupLightsView(i), _t(o, e, i, a, c, l))
					}
				} else _t(o, e, n, a, c, l)
			}
		}

		function _t(t, e, n, i, r, s) {
			if (t.onBeforeRender(f, e, n, i, r, s), t.modelViewMatrix.multiplyMatrices(n.matrixWorldInverse, t.matrixWorld), t.normalMatrix.getNormalMatrix(t.modelViewMatrix), t.isImmediateRenderObject) {
				const i = Mt(n, e, r, t);
				j.setMaterial(r), at.reset(),
					function(t, e) {
						t.render((function(t) {
							f.renderBufferImmediate(t, e)
						}))
					}(t, i)
			} else f.renderBufferDirect(n, e, i, r, t, s);
			t.onAfterRender(f, e, n, i, r, s)
		}

		function wt(t, e, n) {
			!0 !== e.isScene && (e = F);
			const i = W.get(t),
				r = d.state.lights,
				s = d.state.shadowsArray,
				o = r.state.version,
				a = J.getParameters(t, r.state, s, e, n),
				c = J.getProgramCacheKey(a);
			let l = i.program,
				h = !0;
			if (i.environment = t.isMeshStandardMaterial ? e.environment : null, i.fog = e.fog, i.envMap = q.get(t.envMap || i.environment), void 0 === l) t.addEventListener("dispose", mt);
			else if (l.cacheKey !== c) gt(t);
			else if (i.lightsStateVersion !== o) h = !1;
			else {
				if (void 0 !== a.shaderID) return;
				h = !1
			}
			h && (a.uniforms = J.getUniforms(t), t.onBeforeCompile(a, f), l = J.acquireProgram(a, c), i.program = l, i.uniforms = a.uniforms, i.outputEncoding = a.outputEncoding);
			const u = i.uniforms;
			(t.isShaderMaterial || t.isRawShaderMaterial) && !0 !== t.clipping || (i.numClippingPlanes = et.numPlanes, i.numIntersection = et.numIntersection, u.clippingPlanes = et.uniform), i.needsLights = function(t) {
				return t.isMeshLambertMaterial || t.isMeshToonMaterial || t.isMeshPhongMaterial || t.isMeshStandardMaterial || t.isShadowMaterial || t.isShaderMaterial && !0 === t.lights
			}(t), i.lightsStateVersion = o, i.needsLights && (u.ambientLightColor.value = r.state.ambient, u.lightProbe.value = r.state.probe, u.directionalLights.value = r.state.directional, u.directionalLightShadows.value = r.state.directionalShadow, u.spotLights.value = r.state.spot, u.spotLightShadows.value = r.state.spotShadow, u.rectAreaLights.value = r.state.rectArea, u.ltc_1.value = r.state.rectAreaLTC1, u.ltc_2.value = r.state.rectAreaLTC2, u.pointLights.value = r.state.point, u.pointLightShadows.value = r.state.pointShadow, u.hemisphereLights.value = r.state.hemi, u.directionalShadowMap.value = r.state.directionalShadowMap, u.directionalShadowMatrix.value = r.state.directionalShadowMatrix, u.spotShadowMap.value = r.state.spotShadowMap, u.spotShadowMatrix.value = r.state.spotShadowMatrix, u.pointShadowMap.value = r.state.pointShadowMap, u.pointShadowMatrix.value = r.state.pointShadowMatrix);
			const p = i.program.getUniforms(),
				m = ms.seqWithValue(p.seq, u);
			i.uniformsList = m
		}

		function Mt(t, e, n, i) {
			!0 !== e.isScene && (e = F), $.resetTextureUnits();
			const r = e.fog,
				s = n.isMeshStandardMaterial ? e.environment : null,
				o = null === x ? f.outputEncoding : x.texture.encoding,
				a = q.get(n.envMap || s),
				c = W.get(n),
				l = d.state.lights;
			if (!0 === N && (!0 === z || t !== w)) {
				const e = t === w && n.id === _;
				et.setState(n, t, e)
			}
			n.version === c.__version ? n.fog && c.fog !== r || c.environment !== s || c.needsLights && c.lightsStateVersion !== l.state.version ? wt(n, e, i) : void 0 === c.numClippingPlanes || c.numClippingPlanes === et.numPlanes && c.numIntersection === et.numIntersection ? (c.outputEncoding !== o || c.envMap !== a) && wt(n, e, i) : wt(n, e, i) : (wt(n, e, i), c.__version = n.version);
			let h = !1,
				u = !1,
				p = !1;
			const m = c.program,
				g = m.getUniforms(),
				v = c.uniforms;
			if (j.useProgram(m.program) && (h = !0, u = !0, p = !0), n.id !== _ && (_ = n.id, u = !0), h || w !== t) {
				if (g.setValue(ct, "projectionMatrix", t.projectionMatrix), G.logarithmicDepthBuffer && g.setValue(ct, "logDepthBufFC", 2 / (Math.log(t.far + 1) / Math.LN2)), w !== t && (w = t, u = !0, p = !0), n.isShaderMaterial || n.isMeshPhongMaterial || n.isMeshToonMaterial || n.isMeshStandardMaterial || n.envMap) {
					const e = g.map.cameraPosition;
					void 0 !== e && e.setValue(ct, U.setFromMatrixPosition(t.matrixWorld))
				}(n.isMeshPhongMaterial || n.isMeshToonMaterial || n.isMeshLambertMaterial || n.isMeshBasicMaterial || n.isMeshStandardMaterial || n.isShaderMaterial) && g.setValue(ct, "isOrthographic", !0 === t.isOrthographicCamera), (n.isMeshPhongMaterial || n.isMeshToonMaterial || n.isMeshLambertMaterial || n.isMeshBasicMaterial || n.isMeshStandardMaterial || n.isShaderMaterial || n.isShadowMaterial || n.skinning) && g.setValue(ct, "viewMatrix", t.matrixWorldInverse)
			}
			if (n.skinning) {
				g.setOptional(ct, i, "bindMatrix"), g.setOptional(ct, i, "bindMatrixInverse");
				const t = i.skeleton;
				if (t) {
					const e = t.bones;
					if (G.floatVertexTextures) {
						if (null === t.boneTexture) {
							let n = Math.sqrt(4 * e.length);
							n = ue.ceilPowerOfTwo(n), n = Math.max(n, 4);
							const i = new Float32Array(n * n * 4);
							i.set(t.boneMatrices);
							const r = new Yi(i, n, n, qt, jt);
							t.boneMatrices = i, t.boneTexture = r, t.boneTextureSize = n
						}
						g.setValue(ct, "boneTexture", t.boneTexture, $), g.setValue(ct, "boneTextureSize", t.boneTextureSize)
					} else g.setOptional(ct, t, "boneMatrices")
				}
			}
			var y, b;
			return (u || c.receiveShadow !== i.receiveShadow) && (c.receiveShadow = i.receiveShadow, g.setValue(ct, "receiveShadow", i.receiveShadow)), u && (g.setValue(ct, "toneMappingExposure", f.toneMappingExposure), c.needsLights && (b = p, (y = v).ambientLightColor.needsUpdate = b, y.lightProbe.needsUpdate = b, y.directionalLights.needsUpdate = b, y.directionalLightShadows.needsUpdate = b, y.pointLights.needsUpdate = b, y.pointLightShadows.needsUpdate = b, y.spotLights.needsUpdate = b, y.spotLightShadows.needsUpdate = b, y.rectAreaLights.needsUpdate = b, y.hemisphereLights.needsUpdate = b), r && n.fog && Q.refreshFogUniforms(v, r), Q.refreshMaterialUniforms(v, n, L, A), ms.upload(ct, c.uniformsList, v, $)), n.isShaderMaterial && !0 === n.uniformsNeedUpdate && (ms.upload(ct, c.uniformsList, v, $), n.uniformsNeedUpdate = !1), n.isSpriteMaterial && g.setValue(ct, "center", i.center), g.setValue(ct, "modelViewMatrix", i.modelViewMatrix), g.setValue(ct, "normalMatrix", i.normalMatrix), g.setValue(ct, "modelMatrix", i.matrixWorld), m
		}
		yt.setAnimationLoop((function(t) {
			ut.isPresenting || vt && vt(t)
		})), "undefined" != typeof window && yt.setContext(window), this.setAnimationLoop = function(t) {
			vt = t, ut.setAnimationLoop(t), null === t ? yt.stop() : yt.start()
		}, this.render = function(t, e) {
			let n, i;
			if (void 0 !== arguments[2] && (console.warn("THREE.WebGLRenderer.render(): the renderTarget argument has been removed. Use .setRenderTarget() instead."), n = arguments[2]), void 0 !== arguments[3] && (console.warn("THREE.WebGLRenderer.render(): the forceClear argument has been removed. Use .clear() instead."), i = arguments[3]), void 0 !== e && !0 !== e.isCamera) return void console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");
			if (!0 === m) return;
			at.resetDefaultState(), _ = -1, w = null, !0 === t.autoUpdate && t.updateMatrixWorld(), null === e.parent && e.updateMatrixWorld(), !0 === ut.enabled && !0 === ut.isPresenting && (e = ut.getCamera(e)), !0 === t.isScene && t.onBeforeRender(f, t, e, n || x), d = tt.get(t, p.length), d.init(), p.push(d), B.multiplyMatrices(e.projectionMatrix, e.matrixWorldInverse), I.setFromProjectionMatrix(B), z = this.localClippingEnabled, N = et.init(this.clippingPlanes, z, e), u = K.get(t, e), u.init(), xt(t, e, 0, f.sortObjects), u.finish(), !0 === f.sortObjects && u.sort(C, R), !0 === N && et.beginShadows();
			const r = d.state.shadowsArray;
			dt.render(r, t, e), d.setupLights(), d.setupLightsView(e), !0 === N && et.endShadows(), !0 === this.info.autoReset && this.info.reset(), void 0 !== n && this.setRenderTarget(n), nt.render(u, t, e, i);
			const s = u.opaque,
				o = u.transparent;
			s.length > 0 && bt(s, t, e), o.length > 0 && bt(o, t, e), !0 === t.isScene && t.onAfterRender(f, t, e), null !== x && ($.updateRenderTargetMipmap(x), $.updateMultisampleRenderTarget(x)), j.buffers.depth.setTest(!0), j.buffers.depth.setMask(!0), j.buffers.color.setMask(!0), j.setPolygonOffset(!1), p.pop(), d = p.length > 0 ? p[p.length - 1] : null, u = null
		}, this.setFramebuffer = function(t) {
			g !== t && null === x && ct.bindFramebuffer(36160, t), g = t
		}, this.getActiveCubeFace = function() {
			return v
		}, this.getActiveMipmapLevel = function() {
			return y
		}, this.getRenderList = function() {
			return u
		}, this.setRenderList = function(t) {
			u = t
		}, this.getRenderTarget = function() {
			return x
		}, this.setRenderTarget = function(t, e = 0, n = 0) {
			x = t, v = e, y = n, t && void 0 === W.get(t).__webglFramebuffer && $.setupRenderTarget(t);
			let i = g,
				r = !1;
			if (t) {
				const n = W.get(t).__webglFramebuffer;
				t.isWebGLCubeRenderTarget ? (i = n[e], r = !0) : i = t.isWebGLMultisampleRenderTarget ? W.get(t).__webglMultisampledFramebuffer : n, M.copy(t.viewport), S.copy(t.scissor), T = t.scissorTest
			} else M.copy(P).multiplyScalar(L).floor(), S.copy(D).multiplyScalar(L).floor(), T = O;
			if (b !== i && (ct.bindFramebuffer(36160, i), b = i), j.viewport(M), j.scissor(S), j.setScissorTest(T), r) {
				const i = W.get(t.texture);
				ct.framebufferTexture2D(36160, 36064, 34069 + e, i.__webglTexture, n)
			}
		}, this.readRenderTargetPixels = function(t, e, n, i, r, s, o) {
			if (!t || !t.isWebGLRenderTarget) return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");
			let a = W.get(t).__webglFramebuffer;
			if (t.isWebGLCubeRenderTarget && void 0 !== o && (a = a[o]), a) {
				let o = !1;
				a !== b && (ct.bindFramebuffer(36160, a), o = !0);
				try {
					const a = t.texture,
						c = a.format,
						l = a.type;
					if (c !== qt && ot.convert(c) !== ct.getParameter(35739)) return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");
					const h = l === Vt && (k.has("EXT_color_buffer_half_float") || G.isWebGL2 && k.has("EXT_color_buffer_float"));
					if (!(l === Ht || ot.convert(l) === ct.getParameter(35738) || l === jt && (G.isWebGL2 || k.has("OES_texture_float") || k.has("WEBGL_color_buffer_float")) || h)) return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");
					36053 === ct.checkFramebufferStatus(36160) ? e >= 0 && e <= t.width - i && n >= 0 && n <= t.height - r && ct.readPixels(e, n, i, r, ot.convert(c), ot.convert(l), s) : console.error("THREE.WebGLRenderer.readRenderTargetPixels: readPixels from renderTarget failed. Framebuffer not complete.")
				} finally {
					o && ct.bindFramebuffer(36160, b)
				}
			}
		}, this.copyFramebufferToTexture = function(t, e, n = 0) {
			const i = Math.pow(2, -n),
				r = Math.floor(e.image.width * i),
				s = Math.floor(e.image.height * i),
				o = ot.convert(e.format);
			$.setTexture2D(e, 0), ct.copyTexImage2D(3553, n, o, t.x, t.y, r, s, 0), j.unbindTexture()
		}, this.copyTextureToTexture = function(t, e, n, i = 0) {
			const r = e.image.width,
				s = e.image.height,
				o = ot.convert(n.format),
				a = ot.convert(n.type);
			$.setTexture2D(n, 0), ct.pixelStorei(37440, n.flipY), ct.pixelStorei(37441, n.premultiplyAlpha), ct.pixelStorei(3317, n.unpackAlignment), e.isDataTexture ? ct.texSubImage2D(3553, i, t.x, t.y, r, s, o, a, e.image.data) : e.isCompressedTexture ? ct.compressedTexSubImage2D(3553, i, t.x, t.y, e.mipmaps[0].width, e.mipmaps[0].height, o, e.mipmaps[0].data) : ct.texSubImage2D(3553, i, t.x, t.y, o, a, e.image), 0 === i && n.generateMipmaps && ct.generateMipmap(3553), j.unbindTexture()
		}, this.initTexture = function(t) {
			$.setTexture2D(t, 0), j.unbindTexture()
		}, this.resetState = function() {
			j.reset(), at.reset()
		}, "undefined" != typeof __THREE_DEVTOOLS__ && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", {
			detail: this
		}))
	}

	function oo(t) {
		so.call(this, t)
	}
	to.prototype = Object.assign(Object.create(Vi.prototype), {
		constructor: to,
		isArrayCamera: !0
	}), eo.prototype = Object.assign(Object.create(wn.prototype), {
		constructor: eo,
		isGroup: !0
	}), Object.assign(no.prototype, {
		constructor: no,
		getHandSpace: function() {
			return null === this._hand && (this._hand = new eo, this._hand.matrixAutoUpdate = !1, this._hand.visible = !1, this._hand.joints = {}, this._hand.inputState = {
				pinching: !1
			}), this._hand
		},
		getTargetRaySpace: function() {
			return null === this._targetRay && (this._targetRay = new eo, this._targetRay.matrixAutoUpdate = !1, this._targetRay.visible = !1), this._targetRay
		},
		getGripSpace: function() {
			return null === this._grip && (this._grip = new eo, this._grip.matrixAutoUpdate = !1, this._grip.visible = !1), this._grip
		},
		dispatchEvent: function(t) {
			return null !== this._targetRay && this._targetRay.dispatchEvent(t), null !== this._grip && this._grip.dispatchEvent(t), null !== this._hand && this._hand.dispatchEvent(t), this
		},
		disconnect: function(t) {
			return this.dispatchEvent({
				type: "disconnected",
				data: t
			}), null !== this._targetRay && (this._targetRay.visible = !1), null !== this._grip && (this._grip.visible = !1), null !== this._hand && (this._hand.visible = !1), this
		},
		update: function(t, e, n) {
			let i = null,
				r = null,
				s = null;
			const o = this._targetRay,
				a = this._grip,
				c = this._hand;
			if (t && "visible-blurred" !== e.session.visibilityState)
				if (c && t.hand) {
					s = !0;
					for (const i of t.hand.values()) {
						const t = e.getJointPose(i, n);
						if (void 0 === c.joints[i.jointName]) {
							const t = new eo;
							t.matrixAutoUpdate = !1, t.visible = !1, c.joints[i.jointName] = t, c.add(t)
						}
						const r = c.joints[i.jointName];
						null !== t && (r.matrix.fromArray(t.transform.matrix), r.matrix.decompose(r.position, r.rotation, r.scale), r.jointRadius = t.radius), r.visible = null !== t
					}
					const i = c.joints["index-finger-tip"],
						r = c.joints["thumb-tip"],
						o = i.position.distanceTo(r.position),
						a = .02,
						l = .005;
					c.inputState.pinching && o > a + l ? (c.inputState.pinching = !1, this.dispatchEvent({
						type: "pinchend",
						handedness: t.handedness,
						target: this
					})) : !c.inputState.pinching && o <= a - l && (c.inputState.pinching = !0, this.dispatchEvent({
						type: "pinchstart",
						handedness: t.handedness,
						target: this
					}))
				} else null !== o && (i = e.getPose(t.targetRaySpace, n), null !== i && (o.matrix.fromArray(i.transform.matrix), o.matrix.decompose(o.position, o.rotation, o.scale))), null !== a && t.gripSpace && (r = e.getPose(t.gripSpace, n), null !== r && (a.matrix.fromArray(r.transform.matrix), a.matrix.decompose(a.position, a.rotation, a.scale)));
			return null !== o && (o.visible = null !== i), null !== a && (a.visible = null !== r), null !== c && (c.visible = null !== s), this
		}
	}), Object.assign(io.prototype, ce.prototype), oo.prototype = Object.assign(Object.create(so.prototype), {
		constructor: oo,
		isWebGL1Renderer: !0
	});
	class ao extends wn {
		constructor() {
			super(), Object.defineProperty(this, "isScene", {
				value: !0
			}), this.type = "Scene", this.background = null, this.environment = null, this.fog = null, this.overrideMaterial = null, this.autoUpdate = !0, "undefined" != typeof __THREE_DEVTOOLS__ && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", {
				detail: this
			}))
		}
		copy(t, e) {
			return super.copy(t, e), null !== t.background && (this.background = t.background.clone()), null !== t.environment && (this.environment = t.environment.clone()), null !== t.fog && (this.fog = t.fog.clone()), null !== t.overrideMaterial && (this.overrideMaterial = t.overrideMaterial.clone()), this.autoUpdate = t.autoUpdate, this.matrixAutoUpdate = t.matrixAutoUpdate, this
		}
		toJSON(t) {
			const e = super.toJSON(t);
			return null !== this.background && (e.object.background = this.background.toJSON(t)), null !== this.environment && (e.object.environment = this.environment.toJSON(t)), null !== this.fog && (e.object.fog = this.fog.toJSON()), e
		}
	}

	function co(t, e) {
		this.array = t, this.stride = e, this.count = void 0 !== t ? t.length / e : 0, this.usage = se, this.updateRange = {
			offset: 0,
			count: -1
		}, this.version = 0, this.uuid = ue.generateUUID()
	}
	Object.defineProperty(co.prototype, "needsUpdate", {
		set: function(t) {
			!0 === t && this.version++
		}
	}), Object.assign(co.prototype, {
		isInterleavedBuffer: !0,
		onUploadCallback: function() {},
		setUsage: function(t) {
			return this.usage = t, this
		},
		copy: function(t) {
			return this.array = new t.array.constructor(t.array), this.count = t.count, this.stride = t.stride, this.usage = t.usage, this
		},
		copyAt: function(t, e, n) {
			t *= this.stride, n *= e.stride;
			for (let i = 0, r = this.stride; i < r; i++) this.array[t + i] = e.array[n + i];
			return this
		},
		set: function(t, e = 0) {
			return this.array.set(t, e), this
		},
		clone: function(t) {
			void 0 === t.arrayBuffers && (t.arrayBuffers = {}), void 0 === this.array.buffer._uuid && (this.array.buffer._uuid = ue.generateUUID()), void 0 === t.arrayBuffers[this.array.buffer._uuid] && (t.arrayBuffers[this.array.buffer._uuid] = this.array.slice(0).buffer);
			const e = new co(new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]), this.stride);
			return e.setUsage(this.usage), e
		},
		onUpload: function(t) {
			return this.onUploadCallback = t, this
		},
		toJSON: function(t) {
			return void 0 === t.arrayBuffers && (t.arrayBuffers = {}), void 0 === this.array.buffer._uuid && (this.array.buffer._uuid = ue.generateUUID()), void 0 === t.arrayBuffers[this.array.buffer._uuid] && (t.arrayBuffers[this.array.buffer._uuid] = Array.prototype.slice.call(new Uint32Array(this.array.buffer))), {
				uuid: this.uuid,
				buffer: this.array.buffer._uuid,
				type: this.array.constructor.name,
				stride: this.stride
			}
		}
	});
	const lo = new we;

	function ho(t, e, n, i) {
		this.name = "", this.data = t, this.itemSize = e, this.offset = n, this.normalized = !0 === i
	}

	function uo(t) {
		qn.call(this), this.type = "SpriteMaterial", this.color = new Vn(16777215), this.map = null, this.alphaMap = null, this.rotation = 0, this.sizeAttenuation = !0, this.transparent = !0, this.setValues(t)
	}
	let po;
	Object.defineProperties(ho.prototype, {
		count: {
			get: function() {
				return this.data.count
			}
		},
		array: {
			get: function() {
				return this.data.array
			}
		},
		needsUpdate: {
			set: function(t) {
				this.data.needsUpdate = t
			}
		}
	}), Object.assign(ho.prototype, {
		isInterleavedBufferAttribute: !0,
		applyMatrix4: function(t) {
			for (let e = 0, n = this.data.count; e < n; e++) lo.x = this.getX(e), lo.y = this.getY(e), lo.z = this.getZ(e), lo.applyMatrix4(t), this.setXYZ(e, lo.x, lo.y, lo.z);
			return this
		},
		setX: function(t, e) {
			return this.data.array[t * this.data.stride + this.offset] = e, this
		},
		setY: function(t, e) {
			return this.data.array[t * this.data.stride + this.offset + 1] = e, this
		},
		setZ: function(t, e) {
			return this.data.array[t * this.data.stride + this.offset + 2] = e, this
		},
		setW: function(t, e) {
			return this.data.array[t * this.data.stride + this.offset + 3] = e, this
		},
		getX: function(t) {
			return this.data.array[t * this.data.stride + this.offset]
		},
		getY: function(t) {
			return this.data.array[t * this.data.stride + this.offset + 1]
		},
		getZ: function(t) {
			return this.data.array[t * this.data.stride + this.offset + 2]
		},
		getW: function(t) {
			return this.data.array[t * this.data.stride + this.offset + 3]
		},
		setXY: function(t, e, n) {
			return t = t * this.data.stride + this.offset, this.data.array[t + 0] = e, this.data.array[t + 1] = n, this
		},
		setXYZ: function(t, e, n, i) {
			return t = t * this.data.stride + this.offset, this.data.array[t + 0] = e, this.data.array[t + 1] = n, this.data.array[t + 2] = i, this
		},
		setXYZW: function(t, e, n, i, r) {
			return t = t * this.data.stride + this.offset, this.data.array[t + 0] = e, this.data.array[t + 1] = n, this.data.array[t + 2] = i, this.data.array[t + 3] = r, this
		},
		clone: function(t) {
			if (void 0 === t) {
				console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interlaved buffer attribute will deinterleave buffer data.");
				const t = [];
				for (let e = 0; e < this.count; e++) {
					const n = e * this.data.stride + this.offset;
					for (let e = 0; e < this.itemSize; e++) t.push(this.data.array[n + e])
				}
				return new Jn(new this.array.constructor(t), this.itemSize, this.normalized)
			}
			return void 0 === t.interleavedBuffers && (t.interleavedBuffers = {}), void 0 === t.interleavedBuffers[this.data.uuid] && (t.interleavedBuffers[this.data.uuid] = this.data.clone(t)), new ho(t.interleavedBuffers[this.data.uuid], this.itemSize, this.offset, this.normalized)
		},
		toJSON: function(t) {
			if (void 0 === t) {
				console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interlaved buffer attribute will deinterleave buffer data.");
				const t = [];
				for (let e = 0; e < this.count; e++) {
					const n = e * this.data.stride + this.offset;
					for (let e = 0; e < this.itemSize; e++) t.push(this.data.array[n + e])
				}
				return {
					itemSize: this.itemSize,
					type: this.array.constructor.name,
					array: t,
					normalized: this.normalized
				}
			}
			return void 0 === t.interleavedBuffers && (t.interleavedBuffers = {}), void 0 === t.interleavedBuffers[this.data.uuid] && (t.interleavedBuffers[this.data.uuid] = this.data.toJSON(t)), {
				isInterleavedBufferAttribute: !0,
				itemSize: this.itemSize,
				data: this.data.uuid,
				offset: this.offset,
				normalized: this.normalized
			}
		}
	}), uo.prototype = Object.create(qn.prototype), uo.prototype.constructor = uo, uo.prototype.isSpriteMaterial = !0, uo.prototype.copy = function(t) {
		return qn.prototype.copy.call(this, t), this.color.copy(t.color), this.map = t.map, this.alphaMap = t.alphaMap, this.rotation = t.rotation, this.sizeAttenuation = t.sizeAttenuation, this
	};
	const fo = new we,
		mo = new we,
		go = new we,
		vo = new de,
		yo = new de,
		xo = new Ze,
		bo = new we,
		_o = new we,
		wo = new we,
		Mo = new de,
		So = new de,
		To = new de;

	function Eo(t) {
		if (wn.call(this), this.type = "Sprite", void 0 === po) {
			po = new yi;
			const t = new co(new Float32Array([-.5, -.5, 0, 0, 0, .5, -.5, 0, 1, 0, .5, .5, 0, 1, 1, -.5, .5, 0, 0, 1]), 5);
			po.setIndex([0, 1, 2, 0, 2, 3]), po.setAttribute("position", new ho(t, 3, 0, !1)), po.setAttribute("uv", new ho(t, 2, 3, !1))
		}
		this.geometry = po, this.material = void 0 !== t ? t : new uo, this.center = new de(.5, .5)
	}

	function Ao(t, e, n, i, r, s) {
		vo.subVectors(t, n).addScalar(.5).multiply(i), void 0 !== r ? (yo.x = s * vo.x - r * vo.y, yo.y = r * vo.x + s * vo.y) : yo.copy(vo), t.copy(e), t.x += yo.x, t.y += yo.y, t.applyMatrix4(xo)
	}
	Eo.prototype = Object.assign(Object.create(wn.prototype), {
		constructor: Eo,
		isSprite: !0,
		raycast: function(t, e) {
			null === t.camera && console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'), mo.setFromMatrixScale(this.matrixWorld), xo.copy(t.camera.matrixWorld), this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse, this.matrixWorld), go.setFromMatrixPosition(this.modelViewMatrix), t.camera.isPerspectiveCamera && !1 === this.material.sizeAttenuation && mo.multiplyScalar(-go.z);
			const n = this.material.rotation;
			let i, r;
			0 !== n && (r = Math.cos(n), i = Math.sin(n));
			const s = this.center;
			Ao(bo.set(-.5, -.5, 0), go, s, mo, i, r), Ao(_o.set(.5, -.5, 0), go, s, mo, i, r), Ao(wo.set(.5, .5, 0), go, s, mo, i, r), Mo.set(0, 0), So.set(1, 0), To.set(1, 1);
			let o = t.ray.intersectTriangle(bo, _o, wo, !1, fo);
			if (null === o && (Ao(_o.set(-.5, .5, 0), go, s, mo, i, r), So.set(0, 1), o = t.ray.intersectTriangle(bo, wo, _o, !1, fo), null === o)) return;
			const a = t.ray.origin.distanceTo(fo);
			a < t.near || a > t.far || e.push({
				distance: a,
				point: fo.clone(),
				uv: Bn.getUV(fo, bo, _o, wo, Mo, So, To, new de),
				face: null,
				object: this
			})
		},
		copy: function(t) {
			return wn.prototype.copy.call(this, t), void 0 !== t.center && this.center.copy(t.center), this.material = t.material, this
		}
	});
	const Lo = new we,
		Co = new we;

	function Ro() {
		wn.call(this), this._currentLevel = 0, this.type = "LOD", Object.defineProperties(this, {
			levels: {
				enumerable: !0,
				value: []
			}
		}), this.autoUpdate = !0
	}
	Ro.prototype = Object.assign(Object.create(wn.prototype), {
		constructor: Ro,
		isLOD: !0,
		copy: function(t) {
			wn.prototype.copy.call(this, t, !1);
			const e = t.levels;
			for (let t = 0, n = e.length; t < n; t++) {
				const n = e[t];
				this.addLevel(n.object.clone(), n.distance)
			}
			return this.autoUpdate = t.autoUpdate, this
		},
		addLevel: function(t, e = 0) {
			e = Math.abs(e);
			const n = this.levels;
			let i;
			for (i = 0; i < n.length && !(e < n[i].distance); i++);
			return n.splice(i, 0, {
				distance: e,
				object: t
			}), this.add(t), this
		},
		getCurrentLevel: function() {
			return this._currentLevel
		},
		getObjectForDistance: function(t) {
			const e = this.levels;
			if (e.length > 0) {
				let n, i;
				for (n = 1, i = e.length; n < i && !(t < e[n].distance); n++);
				return e[n - 1].object
			}
			return null
		},
		raycast: function(t, e) {
			if (this.levels.length > 0) {
				Lo.setFromMatrixPosition(this.matrixWorld);
				const n = t.ray.origin.distanceTo(Lo);
				this.getObjectForDistance(n).raycast(t, e)
			}
		},
		update: function(t) {
			const e = this.levels;
			if (e.length > 1) {
				Lo.setFromMatrixPosition(t.matrixWorld), Co.setFromMatrixPosition(this.matrixWorld);
				const n = Lo.distanceTo(Co) / t.zoom;
				let i, r;
				for (e[0].object.visible = !0, i = 1, r = e.length; i < r && n >= e[i].distance; i++) e[i - 1].object.visible = !1, e[i].object.visible = !0;
				for (this._currentLevel = i - 1; i < r; i++) e[i].object.visible = !1
			}
		},
		toJSON: function(t) {
			const e = wn.prototype.toJSON.call(this, t);
			!1 === this.autoUpdate && (e.object.autoUpdate = !1), e.object.levels = [];
			const n = this.levels;
			for (let t = 0, i = n.length; t < i; t++) {
				const i = n[t];
				e.object.levels.push({
					object: i.object.uuid,
					distance: i.distance
				})
			}
			return e
		}
	});
	const Po = new we,
		Do = new xe,
		Oo = new xe,
		Io = new we,
		No = new Ze;

	function zo(t, e) {
		t && t.isGeometry && console.error("THREE.SkinnedMesh no longer supports THREE.Geometry. Use THREE.BufferGeometry instead."), zi.call(this, t, e), this.type = "SkinnedMesh", this.bindMode = "attached", this.bindMatrix = new Ze, this.bindMatrixInverse = new Ze
	}

	function Bo() {
		wn.call(this), this.type = "Bone"
	}
	zo.prototype = Object.assign(Object.create(zi.prototype), {
		constructor: zo,
		isSkinnedMesh: !0,
		copy: function(t) {
			return zi.prototype.copy.call(this, t), this.bindMode = t.bindMode, this.bindMatrix.copy(t.bindMatrix), this.bindMatrixInverse.copy(t.bindMatrixInverse), this.skeleton = t.skeleton, this
		},
		bind: function(t, e) {
			this.skeleton = t, void 0 === e && (this.updateMatrixWorld(!0), this.skeleton.calculateInverses(), e = this.matrixWorld), this.bindMatrix.copy(e), this.bindMatrixInverse.copy(e).invert()
		},
		pose: function() {
			this.skeleton.pose()
		},
		normalizeSkinWeights: function() {
			const t = new xe,
				e = this.geometry.attributes.skinWeight;
			for (let n = 0, i = e.count; n < i; n++) {
				t.x = e.getX(n), t.y = e.getY(n), t.z = e.getZ(n), t.w = e.getW(n);
				const i = 1 / t.manhattanLength();
				i !== 1 / 0 ? t.multiplyScalar(i) : t.set(1, 0, 0, 0), e.setXYZW(n, t.x, t.y, t.z, t.w)
			}
		},
		updateMatrixWorld: function(t) {
			zi.prototype.updateMatrixWorld.call(this, t), "attached" === this.bindMode ? this.bindMatrixInverse.copy(this.matrixWorld).invert() : "detached" === this.bindMode ? this.bindMatrixInverse.copy(this.bindMatrix).invert() : console.warn("THREE.SkinnedMesh: Unrecognized bindMode: " + this.bindMode)
		},
		boneTransform: function(t, e) {
			const n = this.skeleton,
				i = this.geometry;
			Do.fromBufferAttribute(i.attributes.skinIndex, t), Oo.fromBufferAttribute(i.attributes.skinWeight, t), Po.fromBufferAttribute(i.attributes.position, t).applyMatrix4(this.bindMatrix), e.set(0, 0, 0);
			for (let t = 0; t < 4; t++) {
				const i = Oo.getComponent(t);
				if (0 !== i) {
					const r = Do.getComponent(t);
					No.multiplyMatrices(n.bones[r].matrixWorld, n.boneInverses[r]), e.addScaledVector(Io.copy(Po).applyMatrix4(No), i)
				}
			}
			return e.applyMatrix4(this.bindMatrixInverse)
		}
	}), Bo.prototype = Object.assign(Object.create(wn.prototype), {
		constructor: Bo,
		isBone: !0
	});
	const Uo = new Ze,
		Fo = new Ze;

	function Ho(t = [], e = []) {
		this.uuid = ue.generateUUID(), this.bones = t.slice(0), this.boneInverses = e, this.boneMatrices = null, this.boneTexture = null, this.boneTextureSize = 0, this.frame = -1, this.init()
	}
	Object.assign(Ho.prototype, {
		init: function() {
			const t = this.bones,
				e = this.boneInverses;
			if (this.boneMatrices = new Float32Array(16 * t.length), 0 === e.length) this.calculateInverses();
			else if (t.length !== e.length) {
				console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."), this.boneInverses = [];
				for (let t = 0, e = this.bones.length; t < e; t++) this.boneInverses.push(new Ze)
			}
		},
		calculateInverses: function() {
			this.boneInverses.length = 0;
			for (let t = 0, e = this.bones.length; t < e; t++) {
				const e = new Ze;
				this.bones[t] && e.copy(this.bones[t].matrixWorld).invert(), this.boneInverses.push(e)
			}
		},
		pose: function() {
			for (let t = 0, e = this.bones.length; t < e; t++) {
				const e = this.bones[t];
				e && e.matrixWorld.copy(this.boneInverses[t]).invert()
			}
			for (let t = 0, e = this.bones.length; t < e; t++) {
				const e = this.bones[t];
				e && (e.parent && e.parent.isBone ? (e.matrix.copy(e.parent.matrixWorld).invert(), e.matrix.multiply(e.matrixWorld)) : e.matrix.copy(e.matrixWorld), e.matrix.decompose(e.position, e.quaternion, e.scale))
			}
		},
		update: function() {
			const t = this.bones,
				e = this.boneInverses,
				n = this.boneMatrices,
				i = this.boneTexture;
			for (let i = 0, r = t.length; i < r; i++) {
				const r = t[i] ? t[i].matrixWorld : Fo;
				Uo.multiplyMatrices(r, e[i]), Uo.toArray(n, 16 * i)
			}
			null !== i && (i.needsUpdate = !0)
		},
		clone: function() {
			return new Ho(this.bones, this.boneInverses)
		},
		getBoneByName: function(t) {
			for (let e = 0, n = this.bones.length; e < n; e++) {
				const n = this.bones[e];
				if (n.name === t) return n
			}
		},
		dispose: function() {
			null !== this.boneTexture && (this.boneTexture.dispose(), this.boneTexture = null)
		},
		fromJSON: function(t, e) {
			this.uuid = t.uuid;
			for (let n = 0, i = t.bones.length; n < i; n++) {
				const i = t.bones[n];
				let r = e[i];
				void 0 === r && (console.warn("THREE.Skeleton: No bone found with UUID:", i), r = new Bo), this.bones.push(r), this.boneInverses.push((new Ze).fromArray(t.boneInverses[n]))
			}
			return this.init(), this
		},
		toJSON: function() {
			const t = {
				metadata: {
					version: 4.5,
					type: "Skeleton",
					generator: "Skeleton.toJSON"
				},
				bones: [],
				boneInverses: []
			};
			t.uuid = this.uuid;
			const e = this.bones,
				n = this.boneInverses;
			for (let i = 0, r = e.length; i < r; i++) {
				const r = e[i];
				t.bones.push(r.uuid);
				const s = n[i];
				t.boneInverses.push(s.toArray())
			}
			return t
		}
	});
	const ko = new Ze,
		Go = new Ze,
		jo = [],
		Vo = new zi;

	function Wo(t, e, n) {
		zi.call(this, t, e), this.instanceMatrix = new Jn(new Float32Array(16 * n), 16), this.instanceColor = null, this.count = n, this.frustumCulled = !1
	}

	function $o(t) {
		qn.call(this), this.type = "LineBasicMaterial", this.color = new Vn(16777215), this.linewidth = 1, this.linecap = "round", this.linejoin = "round", this.morphTargets = !1, this.setValues(t)
	}
	Wo.prototype = Object.assign(Object.create(zi.prototype), {
		constructor: Wo,
		isInstancedMesh: !0,
		copy: function(t) {
			return zi.prototype.copy.call(this, t), this.instanceMatrix.copy(t.instanceMatrix), null !== t.instanceColor && (this.instanceColor = t.instanceColor.clone()), this.count = t.count, this
		},
		getColorAt: function(t, e) {
			e.fromArray(this.instanceColor.array, 3 * t)
		},
		getMatrixAt: function(t, e) {
			e.fromArray(this.instanceMatrix.array, 16 * t)
		},
		raycast: function(t, e) {
			const n = this.matrixWorld,
				i = this.count;
			if (Vo.geometry = this.geometry, Vo.material = this.material, void 0 !== Vo.material)
				for (let r = 0; r < i; r++) {
					this.getMatrixAt(r, ko), Go.multiplyMatrices(n, ko), Vo.matrixWorld = Go, Vo.raycast(t, jo);
					for (let t = 0, n = jo.length; t < n; t++) {
						const n = jo[t];
						n.instanceId = r, n.object = this, e.push(n)
					}
					jo.length = 0
				}
		},
		setColorAt: function(t, e) {
			null === this.instanceColor && (this.instanceColor = new Jn(new Float32Array(3 * this.count), 3)), e.toArray(this.instanceColor.array, 3 * t)
		},
		setMatrixAt: function(t, e) {
			e.toArray(this.instanceMatrix.array, 16 * t)
		},
		updateMorphTargets: function() {},
		dispose: function() {
			this.dispatchEvent({
				type: "dispose"
			})
		}
	}), $o.prototype = Object.create(qn.prototype), $o.prototype.constructor = $o, $o.prototype.isLineBasicMaterial = !0, $o.prototype.copy = function(t) {
		return qn.prototype.copy.call(this, t), this.color.copy(t.color), this.linewidth = t.linewidth, this.linecap = t.linecap, this.linejoin = t.linejoin, this.morphTargets = t.morphTargets, this
	};
	const qo = new we,
		Xo = new we,
		Yo = new Ze,
		Zo = new Ye,
		Jo = new ke;

	function Qo(t = new yi, e = new $o) {
		wn.call(this), this.type = "Line", this.geometry = t, this.material = e, this.updateMorphTargets()
	}
	Qo.prototype = Object.assign(Object.create(wn.prototype), {
		constructor: Qo,
		isLine: !0,
		copy: function(t) {
			return wn.prototype.copy.call(this, t), this.material = t.material, this.geometry = t.geometry, this
		},
		computeLineDistances: function() {
			const t = this.geometry;
			if (t.isBufferGeometry)
				if (null === t.index) {
					const e = t.attributes.position,
						n = [0];
					for (let t = 1, i = e.count; t < i; t++) qo.fromBufferAttribute(e, t - 1), Xo.fromBufferAttribute(e, t), n[t] = n[t - 1], n[t] += qo.distanceTo(Xo);
					t.setAttribute("lineDistance", new oi(n, 1))
				} else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");
			else t.isGeometry && console.error("THREE.Line.computeLineDistances() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.");
			return this
		},
		raycast: function(t, e) {
			const n = this.geometry,
				i = this.matrixWorld,
				r = t.params.Line.threshold;
			if (null === n.boundingSphere && n.computeBoundingSphere(), Jo.copy(n.boundingSphere), Jo.applyMatrix4(i), Jo.radius += r, !1 === t.ray.intersectsSphere(Jo)) return;
			Yo.copy(i).invert(), Zo.copy(t.ray).applyMatrix4(Yo);
			const s = r / ((this.scale.x + this.scale.y + this.scale.z) / 3),
				o = s * s,
				a = new we,
				c = new we,
				l = new we,
				h = new we,
				u = this.isLineSegments ? 2 : 1;
			if (n.isBufferGeometry) {
				const i = n.index,
					r = n.attributes.position;
				if (null !== i) {
					const n = i.array;
					for (let i = 0, s = n.length - 1; i < s; i += u) {
						const s = n[i],
							u = n[i + 1];
						a.fromBufferAttribute(r, s), c.fromBufferAttribute(r, u);
						if (Zo.distanceSqToSegment(a, c, h, l) > o) continue;
						h.applyMatrix4(this.matrixWorld);
						const d = t.ray.origin.distanceTo(h);
						d < t.near || d > t.far || e.push({
							distance: d,
							point: l.clone().applyMatrix4(this.matrixWorld),
							index: i,
							face: null,
							faceIndex: null,
							object: this
						})
					}
				} else
					for (let n = 0, i = r.count - 1; n < i; n += u) {
						a.fromBufferAttribute(r, n), c.fromBufferAttribute(r, n + 1);
						if (Zo.distanceSqToSegment(a, c, h, l) > o) continue;
						h.applyMatrix4(this.matrixWorld);
						const i = t.ray.origin.distanceTo(h);
						i < t.near || i > t.far || e.push({
							distance: i,
							point: l.clone().applyMatrix4(this.matrixWorld),
							index: n,
							face: null,
							faceIndex: null,
							object: this
						})
					}
			} else n.isGeometry && console.error("THREE.Line.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")
		},
		updateMorphTargets: function() {
			const t = this.geometry;
			if (t.isBufferGeometry) {
				const e = t.morphAttributes,
					n = Object.keys(e);
				if (n.length > 0) {
					const t = e[n[0]];
					if (void 0 !== t) {
						this.morphTargetInfluences = [], this.morphTargetDictionary = {};
						for (let e = 0, n = t.length; e < n; e++) {
							const n = t[e].name || String(e);
							this.morphTargetInfluences.push(0), this.morphTargetDictionary[n] = e
						}
					}
				}
			} else {
				const e = t.morphTargets;
				void 0 !== e && e.length > 0 && console.error("THREE.Line.updateMorphTargets() does not support THREE.Geometry. Use THREE.BufferGeometry instead.")
			}
		}
	});
	const Ko = new we,
		ta = new we;

	function ea(t, e) {
		Qo.call(this, t, e), this.type = "LineSegments"
	}

	function na(t, e) {
		Qo.call(this, t, e), this.type = "LineLoop"
	}

	function ia(t) {
		qn.call(this), this.type = "PointsMaterial", this.color = new Vn(16777215), this.map = null, this.alphaMap = null, this.size = 1, this.sizeAttenuation = !0, this.morphTargets = !1, this.setValues(t)
	}
	ea.prototype = Object.assign(Object.create(Qo.prototype), {
		constructor: ea,
		isLineSegments: !0,
		computeLineDistances: function() {
			const t = this.geometry;
			if (t.isBufferGeometry)
				if (null === t.index) {
					const e = t.attributes.position,
						n = [];
					for (let t = 0, i = e.count; t < i; t += 2) Ko.fromBufferAttribute(e, t), ta.fromBufferAttribute(e, t + 1), n[t] = 0 === t ? 0 : n[t - 1], n[t + 1] = n[t] + Ko.distanceTo(ta);
					t.setAttribute("lineDistance", new oi(n, 1))
				} else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");
			else t.isGeometry && console.error("THREE.LineSegments.computeLineDistances() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.");
			return this
		}
	}), na.prototype = Object.assign(Object.create(Qo.prototype), {
		constructor: na,
		isLineLoop: !0
	}), ia.prototype = Object.create(qn.prototype), ia.prototype.constructor = ia, ia.prototype.isPointsMaterial = !0, ia.prototype.copy = function(t) {
		return qn.prototype.copy.call(this, t), this.color.copy(t.color), this.map = t.map, this.alphaMap = t.alphaMap, this.size = t.size, this.sizeAttenuation = t.sizeAttenuation, this.morphTargets = t.morphTargets, this
	};
	const ra = new Ze,
		sa = new Ye,
		oa = new ke,
		aa = new we;

	function ca(t = new yi, e = new ia) {
		wn.call(this), this.type = "Points", this.geometry = t, this.material = e, this.updateMorphTargets()
	}

	function la(t, e, n, i, r, s, o) {
		const a = sa.distanceSqToPoint(t);
		if (a < n) {
			const n = new we;
			sa.closestPointToPoint(t, n), n.applyMatrix4(i);
			const c = r.ray.origin.distanceTo(n);
			if (c < r.near || c > r.far) return;
			s.push({
				distance: c,
				distanceToRay: Math.sqrt(a),
				point: n,
				index: e,
				face: null,
				object: o
			})
		}
	}

	function ha(t, e, n, i, r, s, o, a, c) {
		ve.call(this, t, e, n, i, r, s, o, a, c), this.format = void 0 !== o ? o : $t, this.minFilter = void 0 !== s ? s : Ut, this.magFilter = void 0 !== r ? r : Ut, this.generateMipmaps = !1;
		const l = this;
		"requestVideoFrameCallback" in t && t.requestVideoFrameCallback((function e() {
			l.needsUpdate = !0, t.requestVideoFrameCallback(e)
		}))
	}

	function ua(t, e, n, i, r, s, o, a, c, l, h, u) {
		ve.call(this, null, s, o, a, c, l, i, r, h, u), this.image = {
			width: e,
			height: n
		}, this.mipmaps = t, this.flipY = !1, this.generateMipmaps = !1
	}

	function da(t, e, n, i, r, s, o, a, c) {
		ve.call(this, t, e, n, i, r, s, o, a, c), this.needsUpdate = !0
	}

	function pa(t, e, n, i, r, s, o, a, c, l) {
		if ((l = void 0 !== l ? l : Xt) !== Xt && l !== Yt) throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");
		void 0 === n && l === Xt && (n = kt), void 0 === n && l === Yt && (n = Wt), ve.call(this, null, i, r, s, o, a, l, n, c), this.image = {
			width: t,
			height: e
		}, this.magFilter = void 0 !== o ? o : Bt, this.minFilter = void 0 !== a ? a : Bt, this.flipY = !1, this.generateMipmaps = !1
	}
	ca.prototype = Object.assign(Object.create(wn.prototype), {
		constructor: ca,
		isPoints: !0,
		copy: function(t) {
			return wn.prototype.copy.call(this, t), this.material = t.material, this.geometry = t.geometry, this
		},
		raycast: function(t, e) {
			const n = this.geometry,
				i = this.matrixWorld,
				r = t.params.Points.threshold;
			if (null === n.boundingSphere && n.computeBoundingSphere(), oa.copy(n.boundingSphere), oa.applyMatrix4(i), oa.radius += r, !1 === t.ray.intersectsSphere(oa)) return;
			ra.copy(i).invert(), sa.copy(t.ray).applyMatrix4(ra);
			const s = r / ((this.scale.x + this.scale.y + this.scale.z) / 3),
				o = s * s;
			if (n.isBufferGeometry) {
				const r = n.index,
					s = n.attributes.position;
				if (null !== r) {
					const n = r.array;
					for (let r = 0, a = n.length; r < a; r++) {
						const a = n[r];
						aa.fromBufferAttribute(s, a), la(aa, a, o, i, t, e, this)
					}
				} else
					for (let n = 0, r = s.count; n < r; n++) aa.fromBufferAttribute(s, n), la(aa, n, o, i, t, e, this)
			} else console.error("THREE.Points.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")
		},
		updateMorphTargets: function() {
			const t = this.geometry;
			if (t.isBufferGeometry) {
				const e = t.morphAttributes,
					n = Object.keys(e);
				if (n.length > 0) {
					const t = e[n[0]];
					if (void 0 !== t) {
						this.morphTargetInfluences = [], this.morphTargetDictionary = {};
						for (let e = 0, n = t.length; e < n; e++) {
							const n = t[e].name || String(e);
							this.morphTargetInfluences.push(0), this.morphTargetDictionary[n] = e
						}
					}
				}
			} else {
				const e = t.morphTargets;
				void 0 !== e && e.length > 0 && console.error("THREE.Points.updateMorphTargets() does not support THREE.Geometry. Use THREE.BufferGeometry instead.")
			}
		}
	}), ha.prototype = Object.assign(Object.create(ve.prototype), {
		constructor: ha,
		clone: function() {
			return new this.constructor(this.image).copy(this)
		},
		isVideoTexture: !0,
		update: function() {
			const t = this.image;
			!1 === "requestVideoFrameCallback" in t && t.readyState >= t.HAVE_CURRENT_DATA && (this.needsUpdate = !0)
		}
	}), ua.prototype = Object.create(ve.prototype), ua.prototype.constructor = ua, ua.prototype.isCompressedTexture = !0, da.prototype = Object.create(ve.prototype), da.prototype.constructor = da, da.prototype.isCanvasTexture = !0, pa.prototype = Object.create(ve.prototype), pa.prototype.constructor = pa, pa.prototype.isDepthTexture = !0;
	class fa extends yi {
		constructor(t = 1, e = 1, n = 1, i = 8, r = 1, s = !1, o = 0, a = 2 * Math.PI) {
			super(), this.type = "CylinderGeometry", this.parameters = {
				radiusTop: t,
				radiusBottom: e,
				height: n,
				radialSegments: i,
				heightSegments: r,
				openEnded: s,
				thetaStart: o,
				thetaLength: a
			};
			const c = this;
			i = Math.floor(i), r = Math.floor(r);
			const l = [],
				h = [],
				u = [],
				d = [];
			let p = 0;
			const f = [],
				m = n / 2;
			let g = 0;

			function v(n) {
				const r = p,
					s = new de,
					f = new we;
				let v = 0;
				const y = !0 === n ? t : e,
					x = !0 === n ? 1 : -1;
				for (let t = 1; t <= i; t++) h.push(0, m * x, 0), u.push(0, x, 0), d.push(.5, .5), p++;
				const b = p;
				for (let t = 0; t <= i; t++) {
					const e = t / i * a + o,
						n = Math.cos(e),
						r = Math.sin(e);
					f.x = y * r, f.y = m * x, f.z = y * n, h.push(f.x, f.y, f.z), u.push(0, x, 0), s.x = .5 * n + .5, s.y = .5 * r * x + .5, d.push(s.x, s.y), p++
				}
				for (let t = 0; t < i; t++) {
					const e = r + t,
						i = b + t;
					!0 === n ? l.push(i, i + 1, e) : l.push(i + 1, i, e), v += 3
				}
				c.addGroup(g, v, !0 === n ? 1 : 2), g += v
			}! function() {
				const s = new we,
					v = new we;
				let y = 0;
				const x = (e - t) / n;
				for (let c = 0; c <= r; c++) {
					const l = [],
						g = c / r,
						y = g * (e - t) + t;
					for (let t = 0; t <= i; t++) {
						const e = t / i,
							r = e * a + o,
							c = Math.sin(r),
							f = Math.cos(r);
						v.x = y * c, v.y = -g * n + m, v.z = y * f, h.push(v.x, v.y, v.z), s.set(c, x, f).normalize(), u.push(s.x, s.y, s.z), d.push(e, 1 - g), l.push(p++)
					}
					f.push(l)
				}
				for (let t = 0; t < i; t++)
					for (let e = 0; e < r; e++) {
						const n = f[e][t],
							i = f[e + 1][t],
							r = f[e + 1][t + 1],
							s = f[e][t + 1];
						l.push(n, i, s), l.push(i, r, s), y += 6
					}
				c.addGroup(g, y, 0), g += y
			}(), !1 === s && (t > 0 && v(!0), e > 0 && v(!1)), this.setIndex(l), this.setAttribute("position", new oi(h, 3)), this.setAttribute("normal", new oi(u, 3)), this.setAttribute("uv", new oi(d, 2))
		}
	}
	class ma extends fa {
		constructor(t = 1, e = 1, n = 8, i = 1, r = !1, s = 0, o = 2 * Math.PI) {
			super(0, t, e, n, i, r, s, o), this.type = "ConeGeometry", this.parameters = {
				radius: t,
				height: e,
				radialSegments: n,
				heightSegments: i,
				openEnded: r,
				thetaStart: s,
				thetaLength: o
			}
		}
	}
	new we, new we, new we, new Bn;
	const ga = function(t, e, n) {
		n = n || 2;
		const i = e && e.length,
			r = i ? e[0] * n : t.length;
		let s = va(t, 0, r, n, !0);
		const o = [];
		if (!s || s.next === s.prev) return o;
		let a, c, l, h, u, d, p;
		if (i && (s = function(t, e, n, i) {
				const r = [];
				let s, o, a, c, l;
				for (s = 0, o = e.length; s < o; s++) a = e[s] * i, c = s < o - 1 ? e[s + 1] * i : t.length, l = va(t, a, c, i, !1), l === l.next && (l.steiner = !0), r.push(La(l));
				for (r.sort(Sa), s = 0; s < r.length; s++) Ta(r[s], n), n = ya(n, n.next);
				return n
			}(t, e, s, n)), t.length > 80 * n) {
			a = l = t[0], c = h = t[1];
			for (let e = n; e < r; e += n) u = t[e], d = t[e + 1], u < a && (a = u), d < c && (c = d), u > l && (l = u), d > h && (h = d);
			p = Math.max(l - a, h - c), p = 0 !== p ? 1 / p : 0
		}
		return xa(s, o, n, a, c, p), o
	};

	function va(t, e, n, i, r) {
		let s, o;
		if (r === function(t, e, n, i) {
				let r = 0;
				for (let s = e, o = n - i; s < n; s += i) r += (t[o] - t[s]) * (t[s + 1] + t[o + 1]), o = s;
				return r
			}(t, e, n, i) > 0)
			for (s = e; s < n; s += i) o = Ua(s, t[s], t[s + 1], o);
		else
			for (s = n - i; s >= e; s -= i) o = Ua(s, t[s], t[s + 1], o);
		return o && Da(o, o.next) && (Fa(o), o = o.next), o
	}

	function ya(t, e) {
		if (!t) return t;
		e || (e = t);
		let n, i = t;
		do {
			if (n = !1, i.steiner || !Da(i, i.next) && 0 !== Pa(i.prev, i, i.next)) i = i.next;
			else {
				if (Fa(i), i = e = i.prev, i === i.next) break;
				n = !0
			}
		} while (n || i !== e);
		return e
	}

	function xa(t, e, n, i, r, s, o) {
		if (!t) return;
		!o && s && function(t, e, n, i) {
			let r = t;
			do {
				null === r.z && (r.z = Aa(r.x, r.y, e, n, i)), r.prevZ = r.prev, r.nextZ = r.next, r = r.next
			} while (r !== t);
			r.prevZ.nextZ = null, r.prevZ = null,
				function(t) {
					let e, n, i, r, s, o, a, c, l = 1;
					do {
						for (n = t, t = null, s = null, o = 0; n;) {
							for (o++, i = n, a = 0, e = 0; e < l && (a++, i = i.nextZ, i); e++);
							for (c = l; a > 0 || c > 0 && i;) 0 !== a && (0 === c || !i || n.z <= i.z) ? (r = n, n = n.nextZ, a--) : (r = i, i = i.nextZ, c--), s ? s.nextZ = r : t = r, r.prevZ = s, s = r;
							n = i
						}
						s.nextZ = null, l *= 2
					} while (o > 1)
				}(r)
		}(t, i, r, s);
		let a, c, l = t;
		for (; t.prev !== t.next;)
			if (a = t.prev, c = t.next, s ? _a(t, i, r, s) : ba(t)) e.push(a.i / n), e.push(t.i / n), e.push(c.i / n), Fa(t), t = c.next, l = c.next;
			else if ((t = c) === l) {
			o ? 1 === o ? xa(t = wa(ya(t), e, n), e, n, i, r, s, 2) : 2 === o && Ma(t, e, n, i, r, s) : xa(ya(t), e, n, i, r, s, 1);
			break
		}
	}

	function ba(t) {
		const e = t.prev,
			n = t,
			i = t.next;
		if (Pa(e, n, i) >= 0) return !1;
		let r = t.next.next;
		for (; r !== t.prev;) {
			if (Ca(e.x, e.y, n.x, n.y, i.x, i.y, r.x, r.y) && Pa(r.prev, r, r.next) >= 0) return !1;
			r = r.next
		}
		return !0
	}

	function _a(t, e, n, i) {
		const r = t.prev,
			s = t,
			o = t.next;
		if (Pa(r, s, o) >= 0) return !1;
		const a = r.x < s.x ? r.x < o.x ? r.x : o.x : s.x < o.x ? s.x : o.x,
			c = r.y < s.y ? r.y < o.y ? r.y : o.y : s.y < o.y ? s.y : o.y,
			l = r.x > s.x ? r.x > o.x ? r.x : o.x : s.x > o.x ? s.x : o.x,
			h = r.y > s.y ? r.y > o.y ? r.y : o.y : s.y > o.y ? s.y : o.y,
			u = Aa(a, c, e, n, i),
			d = Aa(l, h, e, n, i);
		let p = t.prevZ,
			f = t.nextZ;
		for (; p && p.z >= u && f && f.z <= d;) {
			if (p !== t.prev && p !== t.next && Ca(r.x, r.y, s.x, s.y, o.x, o.y, p.x, p.y) && Pa(p.prev, p, p.next) >= 0) return !1;
			if (p = p.prevZ, f !== t.prev && f !== t.next && Ca(r.x, r.y, s.x, s.y, o.x, o.y, f.x, f.y) && Pa(f.prev, f, f.next) >= 0) return !1;
			f = f.nextZ
		}
		for (; p && p.z >= u;) {
			if (p !== t.prev && p !== t.next && Ca(r.x, r.y, s.x, s.y, o.x, o.y, p.x, p.y) && Pa(p.prev, p, p.next) >= 0) return !1;
			p = p.prevZ
		}
		for (; f && f.z <= d;) {
			if (f !== t.prev && f !== t.next && Ca(r.x, r.y, s.x, s.y, o.x, o.y, f.x, f.y) && Pa(f.prev, f, f.next) >= 0) return !1;
			f = f.nextZ
		}
		return !0
	}

	function wa(t, e, n) {
		let i = t;
		do {
			const r = i.prev,
				s = i.next.next;
			!Da(r, s) && Oa(r, i, i.next, s) && za(r, s) && za(s, r) && (e.push(r.i / n), e.push(i.i / n), e.push(s.i / n), Fa(i), Fa(i.next), i = t = s), i = i.next
		} while (i !== t);
		return ya(i)
	}

	function Ma(t, e, n, i, r, s) {
		let o = t;
		do {
			let t = o.next.next;
			for (; t !== o.prev;) {
				if (o.i !== t.i && Ra(o, t)) {
					let a = Ba(o, t);
					return o = ya(o, o.next), a = ya(a, a.next), xa(o, e, n, i, r, s), void xa(a, e, n, i, r, s)
				}
				t = t.next
			}
			o = o.next
		} while (o !== t)
	}

	function Sa(t, e) {
		return t.x - e.x
	}

	function Ta(t, e) {
		if (e = function(t, e) {
				let n = e;
				const i = t.x,
					r = t.y;
				let s, o = -1 / 0;
				do {
					if (r <= n.y && r >= n.next.y && n.next.y !== n.y) {
						const t = n.x + (r - n.y) * (n.next.x - n.x) / (n.next.y - n.y);
						if (t <= i && t > o) {
							if (o = t, t === i) {
								if (r === n.y) return n;
								if (r === n.next.y) return n.next
							}
							s = n.x < n.next.x ? n : n.next
						}
					}
					n = n.next
				} while (n !== e);
				if (!s) return null;
				if (i === o) return s;
				const a = s,
					c = s.x,
					l = s.y;
				let h, u = 1 / 0;
				n = s;
				do {
					i >= n.x && n.x >= c && i !== n.x && Ca(r < l ? i : o, r, c, l, r < l ? o : i, r, n.x, n.y) && (h = Math.abs(r - n.y) / (i - n.x), za(n, t) && (h < u || h === u && (n.x > s.x || n.x === s.x && Ea(s, n))) && (s = n, u = h)), n = n.next
				} while (n !== a);
				return s
			}(t, e)) {
			const n = Ba(e, t);
			ya(e, e.next), ya(n, n.next)
		}
	}

	function Ea(t, e) {
		return Pa(t.prev, t, e.prev) < 0 && Pa(e.next, t, t.next) < 0
	}

	function Aa(t, e, n, i, r) {
		return (t = 1431655765 & ((t = 858993459 & ((t = 252645135 & ((t = 16711935 & ((t = 32767 * (t - n) * r) | t << 8)) | t << 4)) | t << 2)) | t << 1)) | (e = 1431655765 & ((e = 858993459 & ((e = 252645135 & ((e = 16711935 & ((e = 32767 * (e - i) * r) | e << 8)) | e << 4)) | e << 2)) | e << 1)) << 1
	}

	function La(t) {
		let e = t,
			n = t;
		do {
			(e.x < n.x || e.x === n.x && e.y < n.y) && (n = e), e = e.next
		} while (e !== t);
		return n
	}

	function Ca(t, e, n, i, r, s, o, a) {
		return (r - o) * (e - a) - (t - o) * (s - a) >= 0 && (t - o) * (i - a) - (n - o) * (e - a) >= 0 && (n - o) * (s - a) - (r - o) * (i - a) >= 0
	}

	function Ra(t, e) {
		return t.next.i !== e.i && t.prev.i !== e.i && ! function(t, e) {
			let n = t;
			do {
				if (n.i !== t.i && n.next.i !== t.i && n.i !== e.i && n.next.i !== e.i && Oa(n, n.next, t, e)) return !0;
				n = n.next
			} while (n !== t);
			return !1
		}(t, e) && (za(t, e) && za(e, t) && function(t, e) {
			let n = t,
				i = !1;
			const r = (t.x + e.x) / 2,
				s = (t.y + e.y) / 2;
			do {
				n.y > s != n.next.y > s && n.next.y !== n.y && r < (n.next.x - n.x) * (s - n.y) / (n.next.y - n.y) + n.x && (i = !i), n = n.next
			} while (n !== t);
			return i
		}(t, e) && (Pa(t.prev, t, e.prev) || Pa(t, e.prev, e)) || Da(t, e) && Pa(t.prev, t, t.next) > 0 && Pa(e.prev, e, e.next) > 0)
	}

	function Pa(t, e, n) {
		return (e.y - t.y) * (n.x - e.x) - (e.x - t.x) * (n.y - e.y)
	}

	function Da(t, e) {
		return t.x === e.x && t.y === e.y
	}

	function Oa(t, e, n, i) {
		const r = Na(Pa(t, e, n)),
			s = Na(Pa(t, e, i)),
			o = Na(Pa(n, i, t)),
			a = Na(Pa(n, i, e));
		return r !== s && o !== a || (!(0 !== r || !Ia(t, n, e)) || (!(0 !== s || !Ia(t, i, e)) || (!(0 !== o || !Ia(n, t, i)) || !(0 !== a || !Ia(n, e, i)))))
	}

	function Ia(t, e, n) {
		return e.x <= Math.max(t.x, n.x) && e.x >= Math.min(t.x, n.x) && e.y <= Math.max(t.y, n.y) && e.y >= Math.min(t.y, n.y)
	}

	function Na(t) {
		return t > 0 ? 1 : t < 0 ? -1 : 0
	}

	function za(t, e) {
		return Pa(t.prev, t, t.next) < 0 ? Pa(t, e, t.next) >= 0 && Pa(t, t.prev, e) >= 0 : Pa(t, e, t.prev) < 0 || Pa(t, t.next, e) < 0
	}

	function Ba(t, e) {
		const n = new Ha(t.i, t.x, t.y),
			i = new Ha(e.i, e.x, e.y),
			r = t.next,
			s = e.prev;
		return t.next = e, e.prev = t, n.next = r, r.prev = n, i.next = n, n.prev = i, s.next = i, i.prev = s, i
	}

	function Ua(t, e, n, i) {
		const r = new Ha(t, e, n);
		return i ? (r.next = i.next, r.prev = i, i.next.prev = r, i.next = r) : (r.prev = r, r.next = r), r
	}

	function Fa(t) {
		t.next.prev = t.prev, t.prev.next = t.next, t.prevZ && (t.prevZ.nextZ = t.nextZ), t.nextZ && (t.nextZ.prevZ = t.prevZ)
	}

	function Ha(t, e, n) {
		this.i = t, this.x = e, this.y = n, this.prev = null, this.next = null, this.z = null, this.prevZ = null, this.nextZ = null, this.steiner = !1
	}
	const ka = {
		area: function(t) {
			const e = t.length;
			let n = 0;
			for (let i = e - 1, r = 0; r < e; i = r++) n += t[i].x * t[r].y - t[r].x * t[i].y;
			return .5 * n
		},
		isClockWise: function(t) {
			return ka.area(t) < 0
		},
		triangulateShape: function(t, e) {
			const n = [],
				i = [],
				r = [];
			Ga(t), ja(n, t);
			let s = t.length;
			e.forEach(Ga);
			for (let t = 0; t < e.length; t++) i.push(s), s += e[t].length, ja(n, e[t]);
			const o = ga(n, i);
			for (let t = 0; t < o.length; t += 3) r.push(o.slice(t, t + 3));
			return r
		}
	};

	function Ga(t) {
		const e = t.length;
		e > 2 && t[e - 1].equals(t[0]) && t.pop()
	}

	function ja(t, e) {
		for (let n = 0; n < e.length; n++) t.push(e[n].x), t.push(e[n].y)
	}
	class Va extends yi {
		constructor(t, e) {
			super(), this.type = "ExtrudeGeometry", this.parameters = {
				shapes: t,
				options: e
			}, t = Array.isArray(t) ? t : [t];
			const n = this,
				i = [],
				r = [];
			for (let e = 0, n = t.length; e < n; e++) {
				s(t[e])
			}

			function s(t) {
				const s = [],
					o = void 0 !== e.curveSegments ? e.curveSegments : 12,
					a = void 0 !== e.steps ? e.steps : 1;
				let c = void 0 !== e.depth ? e.depth : 100,
					l = void 0 === e.bevelEnabled || e.bevelEnabled,
					h = void 0 !== e.bevelThickness ? e.bevelThickness : 6,
					u = void 0 !== e.bevelSize ? e.bevelSize : h - 2,
					d = void 0 !== e.bevelOffset ? e.bevelOffset : 0,
					p = void 0 !== e.bevelSegments ? e.bevelSegments : 3;
				const f = e.extrudePath,
					m = void 0 !== e.UVGenerator ? e.UVGenerator : Wa;
				void 0 !== e.amount && (console.warn("THREE.ExtrudeBufferGeometry: amount has been renamed to depth."), c = e.amount);
				let g, v, y, x, b, _ = !1;
				f && (g = f.getSpacedPoints(a), _ = !0, l = !1, v = f.computeFrenetFrames(a, !1), y = new we, x = new we, b = new we), l || (p = 0, h = 0, u = 0, d = 0);
				const w = t.extractPoints(o);
				let M = w.shape;
				const S = w.holes;
				if (!ka.isClockWise(M)) {
					M = M.reverse();
					for (let t = 0, e = S.length; t < e; t++) {
						const e = S[t];
						ka.isClockWise(e) && (S[t] = e.reverse())
					}
				}
				const T = ka.triangulateShape(M, S),
					E = M;
				for (let t = 0, e = S.length; t < e; t++) {
					const e = S[t];
					M = M.concat(e)
				}

				function A(t, e, n) {
					return e || console.error("THREE.ExtrudeGeometry: vec does not exist"), e.clone().multiplyScalar(n).add(t)
				}
				const L = M.length,
					C = T.length;

				function R(t, e, n) {
					let i, r, s;
					const o = t.x - e.x,
						a = t.y - e.y,
						c = n.x - t.x,
						l = n.y - t.y,
						h = o * o + a * a,
						u = o * l - a * c;
					if (Math.abs(u) > Number.EPSILON) {
						const u = Math.sqrt(h),
							d = Math.sqrt(c * c + l * l),
							p = e.x - a / u,
							f = e.y + o / u,
							m = ((n.x - l / d - p) * l - (n.y + c / d - f) * c) / (o * l - a * c);
						i = p + o * m - t.x, r = f + a * m - t.y;
						const g = i * i + r * r;
						if (g <= 2) return new de(i, r);
						s = Math.sqrt(g / 2)
					} else {
						let t = !1;
						o > Number.EPSILON ? c > Number.EPSILON && (t = !0) : o < -Number.EPSILON ? c < -Number.EPSILON && (t = !0) : Math.sign(a) === Math.sign(l) && (t = !0), t ? (i = -a, r = o, s = Math.sqrt(h)) : (i = o, r = a, s = Math.sqrt(h / 2))
					}
					return new de(i / s, r / s)
				}
				const P = [];
				for (let t = 0, e = E.length, n = e - 1, i = t + 1; t < e; t++, n++, i++) n === e && (n = 0), i === e && (i = 0), P[t] = R(E[t], E[n], E[i]);
				const D = [];
				let O, I = P.concat();
				for (let t = 0, e = S.length; t < e; t++) {
					const e = S[t];
					O = [];
					for (let t = 0, n = e.length, i = n - 1, r = t + 1; t < n; t++, i++, r++) i === n && (i = 0), r === n && (r = 0), O[t] = R(e[t], e[i], e[r]);
					D.push(O), I = I.concat(O)
				}
				for (let t = 0; t < p; t++) {
					const e = t / p,
						n = h * Math.cos(e * Math.PI / 2),
						i = u * Math.sin(e * Math.PI / 2) + d;
					for (let t = 0, e = E.length; t < e; t++) {
						const e = A(E[t], P[t], i);
						B(e.x, e.y, -n)
					}
					for (let t = 0, e = S.length; t < e; t++) {
						const e = S[t];
						O = D[t];
						for (let t = 0, r = e.length; t < r; t++) {
							const r = A(e[t], O[t], i);
							B(r.x, r.y, -n)
						}
					}
				}
				const N = u + d;
				for (let t = 0; t < L; t++) {
					const e = l ? A(M[t], I[t], N) : M[t];
					_ ? (x.copy(v.normals[0]).multiplyScalar(e.x), y.copy(v.binormals[0]).multiplyScalar(e.y), b.copy(g[0]).add(x).add(y), B(b.x, b.y, b.z)) : B(e.x, e.y, 0)
				}
				for (let t = 1; t <= a; t++)
					for (let e = 0; e < L; e++) {
						const n = l ? A(M[e], I[e], N) : M[e];
						_ ? (x.copy(v.normals[t]).multiplyScalar(n.x), y.copy(v.binormals[t]).multiplyScalar(n.y), b.copy(g[t]).add(x).add(y), B(b.x, b.y, b.z)) : B(n.x, n.y, c / a * t)
					}
				for (let t = p - 1; t >= 0; t--) {
					const e = t / p,
						n = h * Math.cos(e * Math.PI / 2),
						i = u * Math.sin(e * Math.PI / 2) + d;
					for (let t = 0, e = E.length; t < e; t++) {
						const e = A(E[t], P[t], i);
						B(e.x, e.y, c + n)
					}
					for (let t = 0, e = S.length; t < e; t++) {
						const e = S[t];
						O = D[t];
						for (let t = 0, r = e.length; t < r; t++) {
							const r = A(e[t], O[t], i);
							_ ? B(r.x, r.y + g[a - 1].y, g[a - 1].x + n) : B(r.x, r.y, c + n)
						}
					}
				}

				function z(t, e) {
					let n = t.length;
					for (; --n >= 0;) {
						const i = n;
						let r = n - 1;
						r < 0 && (r = t.length - 1);
						for (let t = 0, n = a + 2 * p; t < n; t++) {
							const n = L * t,
								s = L * (t + 1);
							F(e + i + n, e + r + n, e + r + s, e + i + s)
						}
					}
				}

				function B(t, e, n) {
					s.push(t), s.push(e), s.push(n)
				}

				function U(t, e, r) {
					H(t), H(e), H(r);
					const s = i.length / 3,
						o = m.generateTopUV(n, i, s - 3, s - 2, s - 1);
					k(o[0]), k(o[1]), k(o[2])
				}

				function F(t, e, r, s) {
					H(t), H(e), H(s), H(e), H(r), H(s);
					const o = i.length / 3,
						a = m.generateSideWallUV(n, i, o - 6, o - 3, o - 2, o - 1);
					k(a[0]), k(a[1]), k(a[3]), k(a[1]), k(a[2]), k(a[3])
				}

				function H(t) {
					i.push(s[3 * t + 0]), i.push(s[3 * t + 1]), i.push(s[3 * t + 2])
				}

				function k(t) {
					r.push(t.x), r.push(t.y)
				}! function() {
					const t = i.length / 3;
					if (l) {
						let t = 0,
							e = L * t;
						for (let t = 0; t < C; t++) {
							const n = T[t];
							U(n[2] + e, n[1] + e, n[0] + e)
						}
						t = a + 2 * p, e = L * t;
						for (let t = 0; t < C; t++) {
							const n = T[t];
							U(n[0] + e, n[1] + e, n[2] + e)
						}
					} else {
						for (let t = 0; t < C; t++) {
							const e = T[t];
							U(e[2], e[1], e[0])
						}
						for (let t = 0; t < C; t++) {
							const e = T[t];
							U(e[0] + L * a, e[1] + L * a, e[2] + L * a)
						}
					}
					n.addGroup(t, i.length / 3 - t, 0)
				}(),
				function() {
					const t = i.length / 3;
					let e = 0;
					z(E, e), e += E.length;
					for (let t = 0, n = S.length; t < n; t++) {
						const n = S[t];
						z(n, e), e += n.length
					}
					n.addGroup(t, i.length / 3 - t, 1)
				}()
			}
			this.setAttribute("position", new oi(i, 3)), this.setAttribute("uv", new oi(r, 2)), this.computeVertexNormals()
		}
		toJSON() {
			const t = yi.prototype.toJSON.call(this);
			return function(t, e, n) {
				if (n.shapes = [], Array.isArray(t))
					for (let e = 0, i = t.length; e < i; e++) {
						const i = t[e];
						n.shapes.push(i.uuid)
					} else n.shapes.push(t.uuid);
				void 0 !== e.extrudePath && (n.options.extrudePath = e.extrudePath.toJSON());
				return n
			}(this.parameters.shapes, this.parameters.options, t)
		}
	}
	const Wa = {
		generateTopUV: function(t, e, n, i, r) {
			const s = e[3 * n],
				o = e[3 * n + 1],
				a = e[3 * i],
				c = e[3 * i + 1],
				l = e[3 * r],
				h = e[3 * r + 1];
			return [new de(s, o), new de(a, c), new de(l, h)]
		},
		generateSideWallUV: function(t, e, n, i, r, s) {
			const o = e[3 * n],
				a = e[3 * n + 1],
				c = e[3 * n + 2],
				l = e[3 * i],
				h = e[3 * i + 1],
				u = e[3 * i + 2],
				d = e[3 * r],
				p = e[3 * r + 1],
				f = e[3 * r + 2],
				m = e[3 * s],
				g = e[3 * s + 1],
				v = e[3 * s + 2];
			return Math.abs(a - h) < .01 ? [new de(o, 1 - c), new de(l, 1 - u), new de(d, 1 - f), new de(m, 1 - v)] : [new de(a, 1 - c), new de(h, 1 - u), new de(p, 1 - f), new de(g, 1 - v)]
		}
	};

	function $a(t, e, n) {
		yi.call(this), this.type = "ParametricGeometry", this.parameters = {
			func: t,
			slices: e,
			stacks: n
		};
		const i = [],
			r = [],
			s = [],
			o = [],
			a = 1e-5,
			c = new we,
			l = new we,
			h = new we,
			u = new we,
			d = new we;
		t.length < 3 && console.error("THREE.ParametricGeometry: Function must now modify a Vector3 as third parameter.");
		const p = e + 1;
		for (let i = 0; i <= n; i++) {
			const p = i / n;
			for (let n = 0; n <= e; n++) {
				const i = n / e;
				t(i, p, l), r.push(l.x, l.y, l.z), i - a >= 0 ? (t(i - a, p, h), u.subVectors(l, h)) : (t(i + a, p, h), u.subVectors(h, l)), p - a >= 0 ? (t(i, p - a, h), d.subVectors(l, h)) : (t(i, p + a, h), d.subVectors(h, l)), c.crossVectors(u, d).normalize(), s.push(c.x, c.y, c.z), o.push(i, p)
			}
		}
		for (let t = 0; t < n; t++)
			for (let n = 0; n < e; n++) {
				const e = t * p + n,
					r = t * p + n + 1,
					s = (t + 1) * p + n + 1,
					o = (t + 1) * p + n;
				i.push(e, r, o), i.push(r, s, o)
			}
		this.setIndex(i), this.setAttribute("position", new oi(r, 3)), this.setAttribute("normal", new oi(s, 3)), this.setAttribute("uv", new oi(o, 2))
	}
	$a.prototype = Object.create(yi.prototype), $a.prototype.constructor = $a;
	class qa extends yi {
		constructor(t, e = 12) {
			super(), this.type = "ShapeGeometry", this.parameters = {
				shapes: t,
				curveSegments: e
			};
			const n = [],
				i = [],
				r = [],
				s = [];
			let o = 0,
				a = 0;
			if (!1 === Array.isArray(t)) c(t);
			else
				for (let e = 0; e < t.length; e++) c(t[e]), this.addGroup(o, a, e), o += a, a = 0;

			function c(t) {
				const o = i.length / 3,
					c = t.extractPoints(e);
				let l = c.shape;
				const h = c.holes;
				!1 === ka.isClockWise(l) && (l = l.reverse());
				for (let t = 0, e = h.length; t < e; t++) {
					const e = h[t];
					!0 === ka.isClockWise(e) && (h[t] = e.reverse())
				}
				const u = ka.triangulateShape(l, h);
				for (let t = 0, e = h.length; t < e; t++) {
					const e = h[t];
					l = l.concat(e)
				}
				for (let t = 0, e = l.length; t < e; t++) {
					const e = l[t];
					i.push(e.x, e.y, 0), r.push(0, 0, 1), s.push(e.x, e.y)
				}
				for (let t = 0, e = u.length; t < e; t++) {
					const e = u[t],
						i = e[0] + o,
						r = e[1] + o,
						s = e[2] + o;
					n.push(i, r, s), a += 3
				}
			}
			this.setIndex(n), this.setAttribute("position", new oi(i, 3)), this.setAttribute("normal", new oi(r, 3)), this.setAttribute("uv", new oi(s, 2))
		}
		toJSON() {
			const t = yi.prototype.toJSON.call(this);
			return function(t, e) {
				if (e.shapes = [], Array.isArray(t))
					for (let n = 0, i = t.length; n < i; n++) {
						const i = t[n];
						e.shapes.push(i.uuid)
					} else e.shapes.push(t.uuid);
				return e
			}(this.parameters.shapes, t)
		}
	}
	class Xa extends yi {
		constructor(t = 1, e = 8, n = 6, i = 0, r = 2 * Math.PI, s = 0, o = Math.PI) {
			super(), this.type = "SphereGeometry", this.parameters = {
				radius: t,
				widthSegments: e,
				heightSegments: n,
				phiStart: i,
				phiLength: r,
				thetaStart: s,
				thetaLength: o
			}, e = Math.max(3, Math.floor(e)), n = Math.max(2, Math.floor(n));
			const a = Math.min(s + o, Math.PI);
			let c = 0;
			const l = [],
				h = new we,
				u = new we,
				d = [],
				p = [],
				f = [],
				m = [];
			for (let d = 0; d <= n; d++) {
				const g = [],
					v = d / n;
				let y = 0;
				0 == d && 0 == s ? y = .5 / e : d == n && a == Math.PI && (y = -.5 / e);
				for (let n = 0; n <= e; n++) {
					const a = n / e;
					h.x = -t * Math.cos(i + a * r) * Math.sin(s + v * o), h.y = t * Math.cos(s + v * o), h.z = t * Math.sin(i + a * r) * Math.sin(s + v * o), p.push(h.x, h.y, h.z), u.copy(h).normalize(), f.push(u.x, u.y, u.z), m.push(a + y, 1 - v), g.push(c++)
				}
				l.push(g)
			}
			for (let t = 0; t < n; t++)
				for (let i = 0; i < e; i++) {
					const e = l[t][i + 1],
						r = l[t][i],
						o = l[t + 1][i],
						c = l[t + 1][i + 1];
					(0 !== t || s > 0) && d.push(e, r, c), (t !== n - 1 || a < Math.PI) && d.push(r, o, c)
				}
			this.setIndex(d), this.setAttribute("position", new oi(p, 3)), this.setAttribute("normal", new oi(f, 3)), this.setAttribute("uv", new oi(m, 2))
		}
	}

	function Ya(t) {
		qn.call(this), this.type = "ShadowMaterial", this.color = new Vn(0), this.transparent = !0, this.setValues(t)
	}

	function Za(t) {
		Gi.call(this, t), this.type = "RawShaderMaterial"
	}

	function Ja(t) {
		qn.call(this), this.defines = {
			STANDARD: ""
		}, this.type = "MeshStandardMaterial", this.color = new Vn(16777215), this.roughness = 1, this.metalness = 0, this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new Vn(0), this.emissiveIntensity = 1, this.emissiveMap = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = 0, this.normalScale = new de(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.roughnessMap = null, this.metalnessMap = null, this.alphaMap = null, this.envMap = null, this.envMapIntensity = 1, this.refractionRatio = .98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.skinning = !1, this.morphTargets = !1, this.morphNormals = !1, this.vertexTangents = !1, this.setValues(t)
	}

	function Qa(t) {
		Ja.call(this), this.defines = {
			STANDARD: "",
			PHYSICAL: ""
		}, this.type = "MeshPhysicalMaterial", this.clearcoat = 0, this.clearcoatMap = null, this.clearcoatRoughness = 0, this.clearcoatRoughnessMap = null, this.clearcoatNormalScale = new de(1, 1), this.clearcoatNormalMap = null, this.reflectivity = .5, Object.defineProperty(this, "ior", {
			get: function() {
				return (1 + .4 * this.reflectivity) / (1 - .4 * this.reflectivity)
			},
			set: function(t) {
				this.reflectivity = ue.clamp(2.5 * (t - 1) / (t + 1), 0, 1)
			}
		}), this.sheen = null, this.transmission = 0, this.transmissionMap = null, this.setValues(t)
	}

	function Ka(t) {
		qn.call(this), this.type = "MeshPhongMaterial", this.color = new Vn(16777215), this.specular = new Vn(1118481), this.shininess = 30, this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new Vn(0), this.emissiveIntensity = 1, this.emissiveMap = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = 0, this.normalScale = new de(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.combine = 0, this.reflectivity = 1, this.refractionRatio = .98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.skinning = !1, this.morphTargets = !1, this.morphNormals = !1, this.setValues(t)
	}

	function tc(t) {
		qn.call(this), this.defines = {
			TOON: ""
		}, this.type = "MeshToonMaterial", this.color = new Vn(16777215), this.map = null, this.gradientMap = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new Vn(0), this.emissiveIntensity = 1, this.emissiveMap = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = 0, this.normalScale = new de(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.alphaMap = null, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.skinning = !1, this.morphTargets = !1, this.morphNormals = !1, this.setValues(t)
	}

	function ec(t) {
		qn.call(this), this.type = "MeshNormalMaterial", this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = 0, this.normalScale = new de(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.wireframe = !1, this.wireframeLinewidth = 1, this.fog = !1, this.skinning = !1, this.morphTargets = !1, this.morphNormals = !1, this.setValues(t)
	}

	function nc(t) {
		qn.call(this), this.type = "MeshLambertMaterial", this.color = new Vn(16777215), this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new Vn(0), this.emissiveIntensity = 1, this.emissiveMap = null, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.combine = 0, this.reflectivity = 1, this.refractionRatio = .98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.skinning = !1, this.morphTargets = !1, this.morphNormals = !1, this.setValues(t)
	}

	function ic(t) {
		qn.call(this), this.defines = {
			MATCAP: ""
		}, this.type = "MeshMatcapMaterial", this.color = new Vn(16777215), this.matcap = null, this.map = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = 0, this.normalScale = new de(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.alphaMap = null, this.skinning = !1, this.morphTargets = !1, this.morphNormals = !1, this.setValues(t)
	}

	function rc(t) {
		$o.call(this), this.type = "LineDashedMaterial", this.scale = 1, this.dashSize = 3, this.gapSize = 1, this.setValues(t)
	}
	Ya.prototype = Object.create(qn.prototype), Ya.prototype.constructor = Ya, Ya.prototype.isShadowMaterial = !0, Ya.prototype.copy = function(t) {
		return qn.prototype.copy.call(this, t), this.color.copy(t.color), this
	}, Za.prototype = Object.create(Gi.prototype), Za.prototype.constructor = Za, Za.prototype.isRawShaderMaterial = !0, Ja.prototype = Object.create(qn.prototype), Ja.prototype.constructor = Ja, Ja.prototype.isMeshStandardMaterial = !0, Ja.prototype.copy = function(t) {
		return qn.prototype.copy.call(this, t), this.defines = {
			STANDARD: ""
		}, this.color.copy(t.color), this.roughness = t.roughness, this.metalness = t.metalness, this.map = t.map, this.lightMap = t.lightMap, this.lightMapIntensity = t.lightMapIntensity, this.aoMap = t.aoMap, this.aoMapIntensity = t.aoMapIntensity, this.emissive.copy(t.emissive), this.emissiveMap = t.emissiveMap, this.emissiveIntensity = t.emissiveIntensity, this.bumpMap = t.bumpMap, this.bumpScale = t.bumpScale, this.normalMap = t.normalMap, this.normalMapType = t.normalMapType, this.normalScale.copy(t.normalScale), this.displacementMap = t.displacementMap, this.displacementScale = t.displacementScale, this.displacementBias = t.displacementBias, this.roughnessMap = t.roughnessMap, this.metalnessMap = t.metalnessMap, this.alphaMap = t.alphaMap, this.envMap = t.envMap, this.envMapIntensity = t.envMapIntensity, this.refractionRatio = t.refractionRatio, this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this.wireframeLinecap = t.wireframeLinecap, this.wireframeLinejoin = t.wireframeLinejoin, this.skinning = t.skinning, this.morphTargets = t.morphTargets, this.morphNormals = t.morphNormals, this.vertexTangents = t.vertexTangents, this
	}, Qa.prototype = Object.create(Ja.prototype), Qa.prototype.constructor = Qa, Qa.prototype.isMeshPhysicalMaterial = !0, Qa.prototype.copy = function(t) {
		return Ja.prototype.copy.call(this, t), this.defines = {
			STANDARD: "",
			PHYSICAL: ""
		}, this.clearcoat = t.clearcoat, this.clearcoatMap = t.clearcoatMap, this.clearcoatRoughness = t.clearcoatRoughness, this.clearcoatRoughnessMap = t.clearcoatRoughnessMap, this.clearcoatNormalMap = t.clearcoatNormalMap, this.clearcoatNormalScale.copy(t.clearcoatNormalScale), this.reflectivity = t.reflectivity, t.sheen ? this.sheen = (this.sheen || new Vn).copy(t.sheen) : this.sheen = null, this.transmission = t.transmission, this.transmissionMap = t.transmissionMap, this
	}, Ka.prototype = Object.create(qn.prototype), Ka.prototype.constructor = Ka, Ka.prototype.isMeshPhongMaterial = !0, Ka.prototype.copy = function(t) {
		return qn.prototype.copy.call(this, t), this.color.copy(t.color), this.specular.copy(t.specular), this.shininess = t.shininess, this.map = t.map, this.lightMap = t.lightMap, this.lightMapIntensity = t.lightMapIntensity, this.aoMap = t.aoMap, this.aoMapIntensity = t.aoMapIntensity, this.emissive.copy(t.emissive), this.emissiveMap = t.emissiveMap, this.emissiveIntensity = t.emissiveIntensity, this.bumpMap = t.bumpMap, this.bumpScale = t.bumpScale, this.normalMap = t.normalMap, this.normalMapType = t.normalMapType, this.normalScale.copy(t.normalScale), this.displacementMap = t.displacementMap, this.displacementScale = t.displacementScale, this.displacementBias = t.displacementBias, this.specularMap = t.specularMap, this.alphaMap = t.alphaMap, this.envMap = t.envMap, this.combine = t.combine, this.reflectivity = t.reflectivity, this.refractionRatio = t.refractionRatio, this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this.wireframeLinecap = t.wireframeLinecap, this.wireframeLinejoin = t.wireframeLinejoin, this.skinning = t.skinning, this.morphTargets = t.morphTargets, this.morphNormals = t.morphNormals, this
	}, tc.prototype = Object.create(qn.prototype), tc.prototype.constructor = tc, tc.prototype.isMeshToonMaterial = !0, tc.prototype.copy = function(t) {
		return qn.prototype.copy.call(this, t), this.color.copy(t.color), this.map = t.map, this.gradientMap = t.gradientMap, this.lightMap = t.lightMap, this.lightMapIntensity = t.lightMapIntensity, this.aoMap = t.aoMap, this.aoMapIntensity = t.aoMapIntensity, this.emissive.copy(t.emissive), this.emissiveMap = t.emissiveMap, this.emissiveIntensity = t.emissiveIntensity, this.bumpMap = t.bumpMap, this.bumpScale = t.bumpScale, this.normalMap = t.normalMap, this.normalMapType = t.normalMapType, this.normalScale.copy(t.normalScale), this.displacementMap = t.displacementMap, this.displacementScale = t.displacementScale, this.displacementBias = t.displacementBias, this.alphaMap = t.alphaMap, this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this.wireframeLinecap = t.wireframeLinecap, this.wireframeLinejoin = t.wireframeLinejoin, this.skinning = t.skinning, this.morphTargets = t.morphTargets, this.morphNormals = t.morphNormals, this
	}, ec.prototype = Object.create(qn.prototype), ec.prototype.constructor = ec, ec.prototype.isMeshNormalMaterial = !0, ec.prototype.copy = function(t) {
		return qn.prototype.copy.call(this, t), this.bumpMap = t.bumpMap, this.bumpScale = t.bumpScale, this.normalMap = t.normalMap, this.normalMapType = t.normalMapType, this.normalScale.copy(t.normalScale), this.displacementMap = t.displacementMap, this.displacementScale = t.displacementScale, this.displacementBias = t.displacementBias, this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this.skinning = t.skinning, this.morphTargets = t.morphTargets, this.morphNormals = t.morphNormals, this
	}, nc.prototype = Object.create(qn.prototype), nc.prototype.constructor = nc, nc.prototype.isMeshLambertMaterial = !0, nc.prototype.copy = function(t) {
		return qn.prototype.copy.call(this, t), this.color.copy(t.color), this.map = t.map, this.lightMap = t.lightMap, this.lightMapIntensity = t.lightMapIntensity, this.aoMap = t.aoMap, this.aoMapIntensity = t.aoMapIntensity, this.emissive.copy(t.emissive), this.emissiveMap = t.emissiveMap, this.emissiveIntensity = t.emissiveIntensity, this.specularMap = t.specularMap, this.alphaMap = t.alphaMap, this.envMap = t.envMap, this.combine = t.combine, this.reflectivity = t.reflectivity, this.refractionRatio = t.refractionRatio, this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this.wireframeLinecap = t.wireframeLinecap, this.wireframeLinejoin = t.wireframeLinejoin, this.skinning = t.skinning, this.morphTargets = t.morphTargets, this.morphNormals = t.morphNormals, this
	}, ic.prototype = Object.create(qn.prototype), ic.prototype.constructor = ic, ic.prototype.isMeshMatcapMaterial = !0, ic.prototype.copy = function(t) {
		return qn.prototype.copy.call(this, t), this.defines = {
			MATCAP: ""
		}, this.color.copy(t.color), this.matcap = t.matcap, this.map = t.map, this.bumpMap = t.bumpMap, this.bumpScale = t.bumpScale, this.normalMap = t.normalMap, this.normalMapType = t.normalMapType, this.normalScale.copy(t.normalScale), this.displacementMap = t.displacementMap, this.displacementScale = t.displacementScale, this.displacementBias = t.displacementBias, this.alphaMap = t.alphaMap, this.skinning = t.skinning, this.morphTargets = t.morphTargets, this.morphNormals = t.morphNormals, this
	}, rc.prototype = Object.create($o.prototype), rc.prototype.constructor = rc, rc.prototype.isLineDashedMaterial = !0, rc.prototype.copy = function(t) {
		return $o.prototype.copy.call(this, t), this.scale = t.scale, this.dashSize = t.dashSize, this.gapSize = t.gapSize, this
	};
	var sc = Object.freeze({
		__proto__: null,
		ShadowMaterial: Ya,
		SpriteMaterial: uo,
		RawShaderMaterial: Za,
		ShaderMaterial: Gi,
		PointsMaterial: ia,
		MeshPhysicalMaterial: Qa,
		MeshStandardMaterial: Ja,
		MeshPhongMaterial: Ka,
		MeshToonMaterial: tc,
		MeshNormalMaterial: ec,
		MeshLambertMaterial: nc,
		MeshDepthMaterial: Xs,
		MeshDistanceMaterial: Ys,
		MeshBasicMaterial: Xn,
		MeshMatcapMaterial: ic,
		LineDashedMaterial: rc,
		LineBasicMaterial: $o,
		Material: qn
	});
	const oc = {
		arraySlice: function(t, e, n) {
			return oc.isTypedArray(t) ? new t.constructor(t.subarray(e, void 0 !== n ? n : t.length)) : t.slice(e, n)
		},
		convertArray: function(t, e, n) {
			return !t || !n && t.constructor === e ? t : "number" == typeof e.BYTES_PER_ELEMENT ? new e(t) : Array.prototype.slice.call(t)
		},
		isTypedArray: function(t) {
			return ArrayBuffer.isView(t) && !(t instanceof DataView)
		},
		getKeyframeOrder: function(t) {
			const e = t.length,
				n = new Array(e);
			for (let t = 0; t !== e; ++t) n[t] = t;
			return n.sort((function(e, n) {
				return t[e] - t[n]
			})), n
		},
		sortedArray: function(t, e, n) {
			const i = t.length,
				r = new t.constructor(i);
			for (let s = 0, o = 0; o !== i; ++s) {
				const i = n[s] * e;
				for (let n = 0; n !== e; ++n) r[o++] = t[i + n]
			}
			return r
		},
		flattenJSON: function(t, e, n, i) {
			let r = 1,
				s = t[0];
			for (; void 0 !== s && void 0 === s[i];) s = t[r++];
			if (void 0 === s) return;
			let o = s[i];
			if (void 0 !== o)
				if (Array.isArray(o))
					do {
						o = s[i], void 0 !== o && (e.push(s.time), n.push.apply(n, o)), s = t[r++]
					} while (void 0 !== s);
				else if (void 0 !== o.toArray)
				do {
					o = s[i], void 0 !== o && (e.push(s.time), o.toArray(n, n.length)), s = t[r++]
				} while (void 0 !== s);
			else
				do {
					o = s[i], void 0 !== o && (e.push(s.time), n.push(o)), s = t[r++]
				} while (void 0 !== s)
		},
		subclip: function(t, e, n, i, r = 30) {
			const s = t.clone();
			s.name = e;
			const o = [];
			for (let t = 0; t < s.tracks.length; ++t) {
				const e = s.tracks[t],
					a = e.getValueSize(),
					c = [],
					l = [];
				for (let t = 0; t < e.times.length; ++t) {
					const s = e.times[t] * r;
					if (!(s < n || s >= i)) {
						c.push(e.times[t]);
						for (let n = 0; n < a; ++n) l.push(e.values[t * a + n])
					}
				}
				0 !== c.length && (e.times = oc.convertArray(c, e.times.constructor), e.values = oc.convertArray(l, e.values.constructor), o.push(e))
			}
			s.tracks = o;
			let a = 1 / 0;
			for (let t = 0; t < s.tracks.length; ++t) a > s.tracks[t].times[0] && (a = s.tracks[t].times[0]);
			for (let t = 0; t < s.tracks.length; ++t) s.tracks[t].shift(-1 * a);
			return s.resetDuration(), s
		},
		makeClipAdditive: function(t, e = 0, n = t, i = 30) {
			i <= 0 && (i = 30);
			const r = n.tracks.length,
				s = e / i;
			for (let e = 0; e < r; ++e) {
				const i = n.tracks[e],
					r = i.ValueTypeName;
				if ("bool" === r || "string" === r) continue;
				const o = t.tracks.find((function(t) {
					return t.name === i.name && t.ValueTypeName === r
				}));
				if (void 0 === o) continue;
				let a = 0;
				const c = i.getValueSize();
				i.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline && (a = c / 3);
				let l = 0;
				const h = o.getValueSize();
				o.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline && (l = h / 3);
				const u = i.times.length - 1;
				let d;
				if (s <= i.times[0]) {
					const t = a,
						e = c - a;
					d = oc.arraySlice(i.values, t, e)
				} else if (s >= i.times[u]) {
					const t = u * c + a,
						e = t + c - a;
					d = oc.arraySlice(i.values, t, e)
				} else {
					const t = i.createInterpolant(),
						e = a,
						n = c - a;
					t.evaluate(s), d = oc.arraySlice(t.resultBuffer, e, n)
				}
				if ("quaternion" === r) {
					(new _e).fromArray(d).normalize().conjugate().toArray(d)
				}
				const p = o.times.length;
				for (let t = 0; t < p; ++t) {
					const e = t * h + l;
					if ("quaternion" === r) _e.multiplyQuaternionsFlat(o.values, e, d, 0, o.values, e);
					else {
						const t = h - 2 * l;
						for (let n = 0; n < t; ++n) o.values[e + n] -= d[n]
					}
				}
			}
			return t.blendMode = 2501, t
		}
	};

	function ac(t, e, n, i) {
		this.parameterPositions = t, this._cachedIndex = 0, this.resultBuffer = void 0 !== i ? i : new e.constructor(n), this.sampleValues = e, this.valueSize = n
	}

	function cc(t, e, n, i) {
		ac.call(this, t, e, n, i), this._weightPrev = -0, this._offsetPrev = -0, this._weightNext = -0, this._offsetNext = -0
	}

	function lc(t, e, n, i) {
		ac.call(this, t, e, n, i)
	}

	function hc(t, e, n, i) {
		ac.call(this, t, e, n, i)
	}

	function uc(t, e, n, i) {
		if (void 0 === t) throw new Error("THREE.KeyframeTrack: track name is undefined");
		if (void 0 === e || 0 === e.length) throw new Error("THREE.KeyframeTrack: no keyframes in track named " + t);
		this.name = t, this.times = oc.convertArray(e, this.TimeBufferType), this.values = oc.convertArray(n, this.ValueBufferType), this.setInterpolation(i || this.DefaultInterpolation)
	}

	function dc(t, e, n) {
		uc.call(this, t, e, n)
	}

	function pc(t, e, n, i) {
		uc.call(this, t, e, n, i)
	}

	function fc(t, e, n, i) {
		uc.call(this, t, e, n, i)
	}

	function mc(t, e, n, i) {
		ac.call(this, t, e, n, i)
	}

	function gc(t, e, n, i) {
		uc.call(this, t, e, n, i)
	}

	function vc(t, e, n, i) {
		uc.call(this, t, e, n, i)
	}

	function yc(t, e, n, i) {
		uc.call(this, t, e, n, i)
	}

	function xc(t, e = -1, n, i = 2500) {
		this.name = t, this.tracks = n, this.duration = e, this.blendMode = i, this.uuid = ue.generateUUID(), this.duration < 0 && this.resetDuration()
	}

	function bc(t) {
		if (void 0 === t.type) throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");
		const e = function(t) {
			switch (t.toLowerCase()) {
				case "scalar":
				case "double":
				case "float":
				case "number":
				case "integer":
					return fc;
				case "vector":
				case "vector2":
				case "vector3":
				case "vector4":
					return yc;
				case "color":
					return pc;
				case "quaternion":
					return gc;
				case "bool":
				case "boolean":
					return dc;
				case "string":
					return vc
			}
			throw new Error("THREE.KeyframeTrack: Unsupported typeName: " + t)
		}(t.type);
		if (void 0 === t.times) {
			const e = [],
				n = [];
			oc.flattenJSON(t.keys, e, n, "value"), t.times = e, t.values = n
		}
		return void 0 !== e.parse ? e.parse(t) : new e(t.name, t.times, t.values, t.interpolation)
	}
	Object.assign(ac.prototype, {
		evaluate: function(t) {
			const e = this.parameterPositions;
			let n = this._cachedIndex,
				i = e[n],
				r = e[n - 1];
			t: {
				e: {
					let s;n: {
						i: if (!(t < i)) {
							for (let s = n + 2;;) {
								if (void 0 === i) {
									if (t < r) break i;
									return n = e.length, this._cachedIndex = n, this.afterEnd_(n - 1, t, r)
								}
								if (n === s) break;
								if (r = i, i = e[++n], t < i) break e
							}
							s = e.length;
							break n
						}if (t >= r) break t; {
							const o = e[1];
							t < o && (n = 2, r = o);
							for (let s = n - 2;;) {
								if (void 0 === r) return this._cachedIndex = 0, this.beforeStart_(0, t, i);
								if (n === s) break;
								if (i = r, r = e[--n - 1], t >= r) break e
							}
							s = n, n = 0
						}
					}
					for (; n < s;) {
						const i = n + s >>> 1;
						t < e[i] ? s = i : n = i + 1
					}
					if (i = e[n], r = e[n - 1], void 0 === r) return this._cachedIndex = 0,
					this.beforeStart_(0, t, i);
					if (void 0 === i) return n = e.length,
					this._cachedIndex = n,
					this.afterEnd_(n - 1, r, t)
				}
				this._cachedIndex = n,
				this.intervalChanged_(n, r, i)
			}
			return this.interpolate_(n, r, t, i)
		},
		settings: null,
		DefaultSettings_: {},
		getSettings_: function() {
			return this.settings || this.DefaultSettings_
		},
		copySampleValue_: function(t) {
			const e = this.resultBuffer,
				n = this.sampleValues,
				i = this.valueSize,
				r = t * i;
			for (let t = 0; t !== i; ++t) e[t] = n[r + t];
			return e
		},
		interpolate_: function() {
			throw new Error("call to abstract method")
		},
		intervalChanged_: function() {}
	}), Object.assign(ac.prototype, {
		beforeStart_: ac.prototype.copySampleValue_,
		afterEnd_: ac.prototype.copySampleValue_
	}), cc.prototype = Object.assign(Object.create(ac.prototype), {
		constructor: cc,
		DefaultSettings_: {
			endingStart: Kt,
			endingEnd: Kt
		},
		intervalChanged_: function(t, e, n) {
			const i = this.parameterPositions;
			let r = t - 2,
				s = t + 1,
				o = i[r],
				a = i[s];
			if (void 0 === o) switch (this.getSettings_().endingStart) {
				case te:
					r = t, o = 2 * e - n;
					break;
				case ee:
					r = i.length - 2, o = e + i[r] - i[r + 1];
					break;
				default:
					r = t, o = n
			}
			if (void 0 === a) switch (this.getSettings_().endingEnd) {
				case te:
					s = t, a = 2 * n - e;
					break;
				case ee:
					s = 1, a = n + i[1] - i[0];
					break;
				default:
					s = t - 1, a = e
			}
			const c = .5 * (n - e),
				l = this.valueSize;
			this._weightPrev = c / (e - o), this._weightNext = c / (a - n), this._offsetPrev = r * l, this._offsetNext = s * l
		},
		interpolate_: function(t, e, n, i) {
			const r = this.resultBuffer,
				s = this.sampleValues,
				o = this.valueSize,
				a = t * o,
				c = a - o,
				l = this._offsetPrev,
				h = this._offsetNext,
				u = this._weightPrev,
				d = this._weightNext,
				p = (n - e) / (i - e),
				f = p * p,
				m = f * p,
				g = -u * m + 2 * u * f - u * p,
				v = (1 + u) * m + (-1.5 - 2 * u) * f + (-.5 + u) * p + 1,
				y = (-1 - d) * m + (1.5 + d) * f + .5 * p,
				x = d * m - d * f;
			for (let t = 0; t !== o; ++t) r[t] = g * s[l + t] + v * s[c + t] + y * s[a + t] + x * s[h + t];
			return r
		}
	}), lc.prototype = Object.assign(Object.create(ac.prototype), {
		constructor: lc,
		interpolate_: function(t, e, n, i) {
			const r = this.resultBuffer,
				s = this.sampleValues,
				o = this.valueSize,
				a = t * o,
				c = a - o,
				l = (n - e) / (i - e),
				h = 1 - l;
			for (let t = 0; t !== o; ++t) r[t] = s[c + t] * h + s[a + t] * l;
			return r
		}
	}), hc.prototype = Object.assign(Object.create(ac.prototype), {
		constructor: hc,
		interpolate_: function(t) {
			return this.copySampleValue_(t - 1)
		}
	}), Object.assign(uc, {
		toJSON: function(t) {
			const e = t.constructor;
			let n;
			if (void 0 !== e.toJSON) n = e.toJSON(t);
			else {
				n = {
					name: t.name,
					times: oc.convertArray(t.times, Array),
					values: oc.convertArray(t.values, Array)
				};
				const e = t.getInterpolation();
				e !== t.DefaultInterpolation && (n.interpolation = e)
			}
			return n.type = t.ValueTypeName, n
		}
	}), Object.assign(uc.prototype, {
		constructor: uc,
		TimeBufferType: Float32Array,
		ValueBufferType: Float32Array,
		DefaultInterpolation: Jt,
		InterpolantFactoryMethodDiscrete: function(t) {
			return new hc(this.times, this.values, this.getValueSize(), t)
		},
		InterpolantFactoryMethodLinear: function(t) {
			return new lc(this.times, this.values, this.getValueSize(), t)
		},
		InterpolantFactoryMethodSmooth: function(t) {
			return new cc(this.times, this.values, this.getValueSize(), t)
		},
		setInterpolation: function(t) {
			let e;
			switch (t) {
				case Zt:
					e = this.InterpolantFactoryMethodDiscrete;
					break;
				case Jt:
					e = this.InterpolantFactoryMethodLinear;
					break;
				case Qt:
					e = this.InterpolantFactoryMethodSmooth
			}
			if (void 0 === e) {
				const e = "unsupported interpolation for " + this.ValueTypeName + " keyframe track named " + this.name;
				if (void 0 === this.createInterpolant) {
					if (t === this.DefaultInterpolation) throw new Error(e);
					this.setInterpolation(this.DefaultInterpolation)
				}
				return console.warn("THREE.KeyframeTrack:", e), this
			}
			return this.createInterpolant = e, this
		},
		getInterpolation: function() {
			switch (this.createInterpolant) {
				case this.InterpolantFactoryMethodDiscrete:
					return Zt;
				case this.InterpolantFactoryMethodLinear:
					return Jt;
				case this.InterpolantFactoryMethodSmooth:
					return Qt
			}
		},
		getValueSize: function() {
			return this.values.length / this.times.length
		},
		shift: function(t) {
			if (0 !== t) {
				const e = this.times;
				for (let n = 0, i = e.length; n !== i; ++n) e[n] += t
			}
			return this
		},
		scale: function(t) {
			if (1 !== t) {
				const e = this.times;
				for (let n = 0, i = e.length; n !== i; ++n) e[n] *= t
			}
			return this
		},
		trim: function(t, e) {
			const n = this.times,
				i = n.length;
			let r = 0,
				s = i - 1;
			for (; r !== i && n[r] < t;) ++r;
			for (; - 1 !== s && n[s] > e;) --s;
			if (++s, 0 !== r || s !== i) {
				r >= s && (s = Math.max(s, 1), r = s - 1);
				const t = this.getValueSize();
				this.times = oc.arraySlice(n, r, s), this.values = oc.arraySlice(this.values, r * t, s * t)
			}
			return this
		},
		validate: function() {
			let t = !0;
			const e = this.getValueSize();
			e - Math.floor(e) != 0 && (console.error("THREE.KeyframeTrack: Invalid value size in track.", this), t = !1);
			const n = this.times,
				i = this.values,
				r = n.length;
			0 === r && (console.error("THREE.KeyframeTrack: Track is empty.", this), t = !1);
			let s = null;
			for (let e = 0; e !== r; e++) {
				const i = n[e];
				if ("number" == typeof i && isNaN(i)) {
					console.error("THREE.KeyframeTrack: Time is not a valid number.", this, e, i), t = !1;
					break
				}
				if (null !== s && s > i) {
					console.error("THREE.KeyframeTrack: Out of order keys.", this, e, i, s), t = !1;
					break
				}
				s = i
			}
			if (void 0 !== i && oc.isTypedArray(i))
				for (let e = 0, n = i.length; e !== n; ++e) {
					const n = i[e];
					if (isNaN(n)) {
						console.error("THREE.KeyframeTrack: Value is not a valid number.", this, e, n), t = !1;
						break
					}
				}
			return t
		},
		optimize: function() {
			const t = oc.arraySlice(this.times),
				e = oc.arraySlice(this.values),
				n = this.getValueSize(),
				i = this.getInterpolation() === Qt,
				r = t.length - 1;
			let s = 1;
			for (let o = 1; o < r; ++o) {
				let r = !1;
				const a = t[o];
				if (a !== t[o + 1] && (1 !== o || a !== t[0]))
					if (i) r = !0;
					else {
						const t = o * n,
							i = t - n,
							s = t + n;
						for (let o = 0; o !== n; ++o) {
							const n = e[t + o];
							if (n !== e[i + o] || n !== e[s + o]) {
								r = !0;
								break
							}
						}
					} if (r) {
					if (o !== s) {
						t[s] = t[o];
						const i = o * n,
							r = s * n;
						for (let t = 0; t !== n; ++t) e[r + t] = e[i + t]
					}++s
				}
			}
			if (r > 0) {
				t[s] = t[r];
				for (let t = r * n, i = s * n, o = 0; o !== n; ++o) e[i + o] = e[t + o];
				++s
			}
			return s !== t.length ? (this.times = oc.arraySlice(t, 0, s), this.values = oc.arraySlice(e, 0, s * n)) : (this.times = t, this.values = e), this
		},
		clone: function() {
			const t = oc.arraySlice(this.times, 0),
				e = oc.arraySlice(this.values, 0),
				n = new(0, this.constructor)(this.name, t, e);
			return n.createInterpolant = this.createInterpolant, n
		}
	}), dc.prototype = Object.assign(Object.create(uc.prototype), {
		constructor: dc,
		ValueTypeName: "bool",
		ValueBufferType: Array,
		DefaultInterpolation: Zt,
		InterpolantFactoryMethodLinear: void 0,
		InterpolantFactoryMethodSmooth: void 0
	}), pc.prototype = Object.assign(Object.create(uc.prototype), {
		constructor: pc,
		ValueTypeName: "color"
	}), fc.prototype = Object.assign(Object.create(uc.prototype), {
		constructor: fc,
		ValueTypeName: "number"
	}), mc.prototype = Object.assign(Object.create(ac.prototype), {
		constructor: mc,
		interpolate_: function(t, e, n, i) {
			const r = this.resultBuffer,
				s = this.sampleValues,
				o = this.valueSize,
				a = (n - e) / (i - e);
			let c = t * o;
			for (let t = c + o; c !== t; c += 4) _e.slerpFlat(r, 0, s, c - o, s, c, a);
			return r
		}
	}), gc.prototype = Object.assign(Object.create(uc.prototype), {
		constructor: gc,
		ValueTypeName: "quaternion",
		DefaultInterpolation: Jt,
		InterpolantFactoryMethodLinear: function(t) {
			return new mc(this.times, this.values, this.getValueSize(), t)
		},
		InterpolantFactoryMethodSmooth: void 0
	}), vc.prototype = Object.assign(Object.create(uc.prototype), {
		constructor: vc,
		ValueTypeName: "string",
		ValueBufferType: Array,
		DefaultInterpolation: Zt,
		InterpolantFactoryMethodLinear: void 0,
		InterpolantFactoryMethodSmooth: void 0
	}), yc.prototype = Object.assign(Object.create(uc.prototype), {
		constructor: yc,
		ValueTypeName: "vector"
	}), Object.assign(xc, {
		parse: function(t) {
			const e = [],
				n = t.tracks,
				i = 1 / (t.fps || 1);
			for (let t = 0, r = n.length; t !== r; ++t) e.push(bc(n[t]).scale(i));
			const r = new xc(t.name, t.duration, e, t.blendMode);
			return r.uuid = t.uuid, r
		},
		toJSON: function(t) {
			const e = [],
				n = t.tracks,
				i = {
					name: t.name,
					duration: t.duration,
					tracks: e,
					uuid: t.uuid,
					blendMode: t.blendMode
				};
			for (let t = 0, i = n.length; t !== i; ++t) e.push(uc.toJSON(n[t]));
			return i
		},
		CreateFromMorphTargetSequence: function(t, e, n, i) {
			const r = e.length,
				s = [];
			for (let t = 0; t < r; t++) {
				let o = [],
					a = [];
				o.push((t + r - 1) % r, t, (t + 1) % r), a.push(0, 1, 0);
				const c = oc.getKeyframeOrder(o);
				o = oc.sortedArray(o, 1, c), a = oc.sortedArray(a, 1, c), i || 0 !== o[0] || (o.push(r), a.push(a[0])), s.push(new fc(".morphTargetInfluences[" + e[t].name + "]", o, a).scale(1 / n))
			}
			return new xc(t, -1, s)
		},
		findByName: function(t, e) {
			let n = t;
			if (!Array.isArray(t)) {
				const e = t;
				n = e.geometry && e.geometry.animations || e.animations
			}
			for (let t = 0; t < n.length; t++)
				if (n[t].name === e) return n[t];
			return null
		},
		CreateClipsFromMorphTargetSequences: function(t, e, n) {
			const i = {},
				r = /^([\w-]*?)([\d]+)$/;
			for (let e = 0, n = t.length; e < n; e++) {
				const n = t[e],
					s = n.name.match(r);
				if (s && s.length > 1) {
					const t = s[1];
					let e = i[t];
					e || (i[t] = e = []), e.push(n)
				}
			}
			const s = [];
			for (const t in i) s.push(xc.CreateFromMorphTargetSequence(t, i[t], e, n));
			return s
		},
		parseAnimation: function(t, e) {
			if (!t) return console.error("THREE.AnimationClip: No animation in JSONLoader data."), null;
			const n = function(t, e, n, i, r) {
					if (0 !== n.length) {
						const s = [],
							o = [];
						oc.flattenJSON(n, s, o, i), 0 !== s.length && r.push(new t(e, s, o))
					}
				},
				i = [],
				r = t.name || "default",
				s = t.fps || 30,
				o = t.blendMode;
			let a = t.length || -1;
			const c = t.hierarchy || [];
			for (let t = 0; t < c.length; t++) {
				const r = c[t].keys;
				if (r && 0 !== r.length)
					if (r[0].morphTargets) {
						const t = {};
						let e;
						for (e = 0; e < r.length; e++)
							if (r[e].morphTargets)
								for (let n = 0; n < r[e].morphTargets.length; n++) t[r[e].morphTargets[n]] = -1;
						for (const n in t) {
							const t = [],
								s = [];
							for (let i = 0; i !== r[e].morphTargets.length; ++i) {
								const i = r[e];
								t.push(i.time), s.push(i.morphTarget === n ? 1 : 0)
							}
							i.push(new fc(".morphTargetInfluence[" + n + "]", t, s))
						}
						a = t.length * (s || 1)
					} else {
						const s = ".bones[" + e[t].name + "]";
						n(yc, s + ".position", r, "pos", i), n(gc, s + ".quaternion", r, "rot", i), n(yc, s + ".scale", r, "scl", i)
					}
			}
			if (0 === i.length) return null;
			return new xc(r, a, i, o)
		}
	}), Object.assign(xc.prototype, {
		resetDuration: function() {
			let t = 0;
			for (let e = 0, n = this.tracks.length; e !== n; ++e) {
				const n = this.tracks[e];
				t = Math.max(t, n.times[n.times.length - 1])
			}
			return this.duration = t, this
		},
		trim: function() {
			for (let t = 0; t < this.tracks.length; t++) this.tracks[t].trim(0, this.duration);
			return this
		},
		validate: function() {
			let t = !0;
			for (let e = 0; e < this.tracks.length; e++) t = t && this.tracks[e].validate();
			return t
		},
		optimize: function() {
			for (let t = 0; t < this.tracks.length; t++) this.tracks[t].optimize();
			return this
		},
		clone: function() {
			const t = [];
			for (let e = 0; e < this.tracks.length; e++) t.push(this.tracks[e].clone());
			return new xc(this.name, this.duration, t, this.blendMode)
		},
		toJSON: function() {
			return xc.toJSON(this)
		}
	});
	const _c = {
		enabled: !1,
		files: {},
		add: function(t, e) {
			!1 !== this.enabled && (this.files[t] = e)
		},
		get: function(t) {
			if (!1 !== this.enabled) return this.files[t]
		},
		remove: function(t) {
			delete this.files[t]
		},
		clear: function() {
			this.files = {}
		}
	};
	const wc = new function(t, e, n) {
		const i = this;
		let r, s = !1,
			o = 0,
			a = 0;
		const c = [];
		this.onStart = void 0, this.onLoad = t, this.onProgress = e, this.onError = n, this.itemStart = function(t) {
			a++, !1 === s && void 0 !== i.onStart && i.onStart(t, o, a), s = !0
		}, this.itemEnd = function(t) {
			o++, void 0 !== i.onProgress && i.onProgress(t, o, a), o === a && (s = !1, void 0 !== i.onLoad && i.onLoad())
		}, this.itemError = function(t) {
			void 0 !== i.onError && i.onError(t)
		}, this.resolveURL = function(t) {
			return r ? r(t) : t
		}, this.setURLModifier = function(t) {
			return r = t, this
		}, this.addHandler = function(t, e) {
			return c.push(t, e), this
		}, this.removeHandler = function(t) {
			const e = c.indexOf(t);
			return -1 !== e && c.splice(e, 2), this
		}, this.getHandler = function(t) {
			for (let e = 0, n = c.length; e < n; e += 2) {
				const n = c[e],
					i = c[e + 1];
				if (n.global && (n.lastIndex = 0), n.test(t)) return i
			}
			return null
		}
	};

	function Mc(t) {
		this.manager = void 0 !== t ? t : wc, this.crossOrigin = "anonymous", this.withCredentials = !1, this.path = "", this.resourcePath = "", this.requestHeader = {}
	}
	Object.assign(Mc.prototype, {
		load: function() {},
		loadAsync: function(t, e) {
			const n = this;
			return new Promise((function(i, r) {
				n.load(t, i, e, r)
			}))
		},
		parse: function() {},
		setCrossOrigin: function(t) {
			return this.crossOrigin = t, this
		},
		setWithCredentials: function(t) {
			return this.withCredentials = t, this
		},
		setPath: function(t) {
			return this.path = t, this
		},
		setResourcePath: function(t) {
			return this.resourcePath = t, this
		},
		setRequestHeader: function(t) {
			return this.requestHeader = t, this
		}
	});
	const Sc = {};

	function Tc(t) {
		Mc.call(this, t)
	}

	function Ec(t) {
		Mc.call(this, t)
	}

	function Ac(t) {
		Mc.call(this, t)
	}

	function Lc(t) {
		Mc.call(this, t)
	}

	function Cc(t) {
		Mc.call(this, t)
	}

	function Rc(t) {
		Mc.call(this, t)
	}

	function Pc(t) {
		Mc.call(this, t)
	}

	function Dc() {
		this.type = "Curve", this.arcLengthDivisions = 200
	}

	function Oc(t, e, n, i, r, s, o, a) {
		Dc.call(this), this.type = "EllipseCurve", this.aX = t || 0, this.aY = e || 0, this.xRadius = n || 1, this.yRadius = i || 1, this.aStartAngle = r || 0, this.aEndAngle = s || 2 * Math.PI, this.aClockwise = o || !1, this.aRotation = a || 0
	}

	function Ic(t, e, n, i, r, s) {
		Oc.call(this, t, e, n, n, i, r, s), this.type = "ArcCurve"
	}

	function Nc() {
		let t = 0,
			e = 0,
			n = 0,
			i = 0;

		function r(r, s, o, a) {
			t = r, e = o, n = -3 * r + 3 * s - 2 * o - a, i = 2 * r - 2 * s + o + a
		}
		return {
			initCatmullRom: function(t, e, n, i, s) {
				r(e, n, s * (n - t), s * (i - e))
			},
			initNonuniformCatmullRom: function(t, e, n, i, s, o, a) {
				let c = (e - t) / s - (n - t) / (s + o) + (n - e) / o,
					l = (n - e) / o - (i - e) / (o + a) + (i - n) / a;
				c *= o, l *= o, r(e, n, c, l)
			},
			calc: function(r) {
				const s = r * r;
				return t + e * r + n * s + i * (s * r)
			}
		}
	}
	Tc.prototype = Object.assign(Object.create(Mc.prototype), {
		constructor: Tc,
		load: function(t, e, n, i) {
			void 0 === t && (t = ""), void 0 !== this.path && (t = this.path + t), t = this.manager.resolveURL(t);
			const r = this,
				s = _c.get(t);
			if (void 0 !== s) return r.manager.itemStart(t), setTimeout((function() {
				e && e(s), r.manager.itemEnd(t)
			}), 0), s;
			if (void 0 !== Sc[t]) return void Sc[t].push({
				onLoad: e,
				onProgress: n,
				onError: i
			});
			const o = t.match(/^data:(.*?)(;base64)?,(.*)$/);
			let a;
			if (o) {
				const n = o[1],
					s = !!o[2];
				let a = o[3];
				a = decodeURIComponent(a), s && (a = atob(a));
				try {
					let i;
					const s = (this.responseType || "").toLowerCase();
					switch (s) {
						case "arraybuffer":
						case "blob":
							const t = new Uint8Array(a.length);
							for (let e = 0; e < a.length; e++) t[e] = a.charCodeAt(e);
							i = "blob" === s ? new Blob([t.buffer], {
								type: n
							}) : t.buffer;
							break;
						case "document":
							const e = new DOMParser;
							i = e.parseFromString(a, n);
							break;
						case "json":
							i = JSON.parse(a);
							break;
						default:
							i = a
					}
					setTimeout((function() {
						e && e(i), r.manager.itemEnd(t)
					}), 0)
				} catch (e) {
					setTimeout((function() {
						i && i(e), r.manager.itemError(t), r.manager.itemEnd(t)
					}), 0)
				}
			} else {
				Sc[t] = [], Sc[t].push({
					onLoad: e,
					onProgress: n,
					onError: i
				}), a = new XMLHttpRequest, a.open("GET", t, !0), a.addEventListener("load", (function(e) {
					const n = this.response,
						i = Sc[t];
					if (delete Sc[t], 200 === this.status || 0 === this.status) {
						0 === this.status && console.warn("THREE.FileLoader: HTTP Status 0 received."), _c.add(t, n);
						for (let t = 0, e = i.length; t < e; t++) {
							const e = i[t];
							e.onLoad && e.onLoad(n)
						}
						r.manager.itemEnd(t)
					} else {
						for (let t = 0, n = i.length; t < n; t++) {
							const n = i[t];
							n.onError && n.onError(e)
						}
						r.manager.itemError(t), r.manager.itemEnd(t)
					}
				}), !1), a.addEventListener("progress", (function(e) {
					const n = Sc[t];
					for (let t = 0, i = n.length; t < i; t++) {
						const i = n[t];
						i.onProgress && i.onProgress(e)
					}
				}), !1), a.addEventListener("error", (function(e) {
					const n = Sc[t];
					delete Sc[t];
					for (let t = 0, i = n.length; t < i; t++) {
						const i = n[t];
						i.onError && i.onError(e)
					}
					r.manager.itemError(t), r.manager.itemEnd(t)
				}), !1), a.addEventListener("abort", (function(e) {
					const n = Sc[t];
					delete Sc[t];
					for (let t = 0, i = n.length; t < i; t++) {
						const i = n[t];
						i.onError && i.onError(e)
					}
					r.manager.itemError(t), r.manager.itemEnd(t)
				}), !1), void 0 !== this.responseType && (a.responseType = this.responseType), void 0 !== this.withCredentials && (a.withCredentials = this.withCredentials), a.overrideMimeType && a.overrideMimeType(void 0 !== this.mimeType ? this.mimeType : "text/plain");
				for (const t in this.requestHeader) a.setRequestHeader(t, this.requestHeader[t]);
				a.send(null)
			}
			return r.manager.itemStart(t), a
		},
		setResponseType: function(t) {
			return this.responseType = t, this
		},
		setMimeType: function(t) {
			return this.mimeType = t, this
		}
	}), Ec.prototype = Object.assign(Object.create(Mc.prototype), {
		constructor: Ec,
		load: function(t, e, n, i) {
			const r = this,
				s = new Tc(r.manager);
			s.setPath(r.path), s.setRequestHeader(r.requestHeader), s.setWithCredentials(r.withCredentials), s.load(t, (function(n) {
				try {
					e(r.parse(JSON.parse(n)))
				} catch (e) {
					i ? i(e) : console.error(e), r.manager.itemError(t)
				}
			}), n, i)
		},
		parse: function(t) {
			const e = [];
			for (let n = 0; n < t.length; n++) {
				const i = xc.parse(t[n]);
				e.push(i)
			}
			return e
		}
	}), Ac.prototype = Object.assign(Object.create(Mc.prototype), {
		constructor: Ac,
		load: function(t, e, n, i) {
			const r = this,
				s = [],
				o = new ua,
				a = new Tc(this.manager);
			a.setPath(this.path), a.setResponseType("arraybuffer"), a.setRequestHeader(this.requestHeader), a.setWithCredentials(r.withCredentials);
			let c = 0;

			function l(l) {
				a.load(t[l], (function(t) {
					const n = r.parse(t, !0);
					s[l] = {
						width: n.width,
						height: n.height,
						format: n.format,
						mipmaps: n.mipmaps
					}, c += 1, 6 === c && (1 === n.mipmapCount && (o.minFilter = Ut), o.image = s, o.format = n.format, o.needsUpdate = !0, e && e(o))
				}), n, i)
			}
			if (Array.isArray(t))
				for (let e = 0, n = t.length; e < n; ++e) l(e);
			else a.load(t, (function(t) {
				const n = r.parse(t, !0);
				if (n.isCubemap) {
					const t = n.mipmaps.length / n.mipmapCount;
					for (let e = 0; e < t; e++) {
						s[e] = {
							mipmaps: []
						};
						for (let t = 0; t < n.mipmapCount; t++) s[e].mipmaps.push(n.mipmaps[e * n.mipmapCount + t]), s[e].format = n.format, s[e].width = n.width, s[e].height = n.height
					}
					o.image = s
				} else o.image.width = n.width, o.image.height = n.height, o.mipmaps = n.mipmaps;
				1 === n.mipmapCount && (o.minFilter = Ut), o.format = n.format, o.needsUpdate = !0, e && e(o)
			}), n, i);
			return o
		}
	}), Lc.prototype = Object.assign(Object.create(Mc.prototype), {
		constructor: Lc,
		load: function(t, e, n, i) {
			void 0 !== this.path && (t = this.path + t), t = this.manager.resolveURL(t);
			const r = this,
				s = _c.get(t);
			if (void 0 !== s) return r.manager.itemStart(t), setTimeout((function() {
				e && e(s), r.manager.itemEnd(t)
			}), 0), s;
			const o = document.createElementNS("http://www.w3.org/1999/xhtml", "img");

			function a() {
				o.removeEventListener("load", a, !1), o.removeEventListener("error", c, !1), _c.add(t, this), e && e(this), r.manager.itemEnd(t)
			}

			function c(e) {
				o.removeEventListener("load", a, !1), o.removeEventListener("error", c, !1), i && i(e), r.manager.itemError(t), r.manager.itemEnd(t)
			}
			return o.addEventListener("load", a, !1), o.addEventListener("error", c, !1), "data:" !== t.substr(0, 5) && void 0 !== this.crossOrigin && (o.crossOrigin = this.crossOrigin), r.manager.itemStart(t), o.src = t, o
		}
	}), Cc.prototype = Object.assign(Object.create(Mc.prototype), {
		constructor: Cc,
		load: function(t, e, n, i) {
			const r = new qi,
				s = new Lc(this.manager);
			s.setCrossOrigin(this.crossOrigin), s.setPath(this.path);
			let o = 0;

			function a(n) {
				s.load(t[n], (function(t) {
					r.images[n] = t, o++, 6 === o && (r.needsUpdate = !0, e && e(r))
				}), void 0, i)
			}
			for (let e = 0; e < t.length; ++e) a(e);
			return r
		}
	}), Rc.prototype = Object.assign(Object.create(Mc.prototype), {
		constructor: Rc,
		load: function(t, e, n, i) {
			const r = this,
				s = new Yi,
				o = new Tc(this.manager);
			return o.setResponseType("arraybuffer"), o.setRequestHeader(this.requestHeader), o.setPath(this.path), o.setWithCredentials(r.withCredentials), o.load(t, (function(t) {
				const n = r.parse(t);
				n && (void 0 !== n.image ? s.image = n.image : void 0 !== n.data && (s.image.width = n.width, s.image.height = n.height, s.image.data = n.data), s.wrapS = void 0 !== n.wrapS ? n.wrapS : Nt, s.wrapT = void 0 !== n.wrapT ? n.wrapT : Nt, s.magFilter = void 0 !== n.magFilter ? n.magFilter : Ut, s.minFilter = void 0 !== n.minFilter ? n.minFilter : Ut, s.anisotropy = void 0 !== n.anisotropy ? n.anisotropy : 1, void 0 !== n.encoding && (s.encoding = n.encoding), void 0 !== n.flipY && (s.flipY = n.flipY), void 0 !== n.format && (s.format = n.format), void 0 !== n.type && (s.type = n.type), void 0 !== n.mipmaps && (s.mipmaps = n.mipmaps, s.minFilter = Ft), 1 === n.mipmapCount && (s.minFilter = Ut), s.needsUpdate = !0, e && e(s, n))
			}), n, i), s
		}
	}), Pc.prototype = Object.assign(Object.create(Mc.prototype), {
		constructor: Pc,
		load: function(t, e, n, i) {
			const r = new ve,
				s = new Lc(this.manager);
			return s.setCrossOrigin(this.crossOrigin), s.setPath(this.path), s.load(t, (function(n) {
				r.image = n;
				const i = t.search(/\.jpe?g($|\?)/i) > 0 || 0 === t.search(/^data\:image\/jpeg/);
				r.format = i ? $t : qt, r.needsUpdate = !0, void 0 !== e && e(r)
			}), n, i), r
		}
	}), Object.assign(Dc.prototype, {
		getPoint: function() {
			return console.warn("THREE.Curve: .getPoint() not implemented."), null
		},
		getPointAt: function(t, e) {
			const n = this.getUtoTmapping(t);
			return this.getPoint(n, e)
		},
		getPoints: function(t = 5) {
			const e = [];
			for (let n = 0; n <= t; n++) e.push(this.getPoint(n / t));
			return e
		},
		getSpacedPoints: function(t = 5) {
			const e = [];
			for (let n = 0; n <= t; n++) e.push(this.getPointAt(n / t));
			return e
		},
		getLength: function() {
			const t = this.getLengths();
			return t[t.length - 1]
		},
		getLengths: function(t) {
			if (void 0 === t && (t = this.arcLengthDivisions), this.cacheArcLengths && this.cacheArcLengths.length === t + 1 && !this.needsUpdate) return this.cacheArcLengths;
			this.needsUpdate = !1;
			const e = [];
			let n, i = this.getPoint(0),
				r = 0;
			e.push(0);
			for (let s = 1; s <= t; s++) n = this.getPoint(s / t), r += n.distanceTo(i), e.push(r), i = n;
			return this.cacheArcLengths = e, e
		},
		updateArcLengths: function() {
			this.needsUpdate = !0, this.getLengths()
		},
		getUtoTmapping: function(t, e) {
			const n = this.getLengths();
			let i = 0;
			const r = n.length;
			let s;
			s = e || t * n[r - 1];
			let o, a = 0,
				c = r - 1;
			for (; a <= c;)
				if (i = Math.floor(a + (c - a) / 2), o = n[i] - s, o < 0) a = i + 1;
				else {
					if (!(o > 0)) {
						c = i;
						break
					}
					c = i - 1
				} if (i = c, n[i] === s) return i / (r - 1);
			const l = n[i];
			return (i + (s - l) / (n[i + 1] - l)) / (r - 1)
		},
		getTangent: function(t, e) {
			const n = 1e-4;
			let i = t - n,
				r = t + n;
			i < 0 && (i = 0), r > 1 && (r = 1);
			const s = this.getPoint(i),
				o = this.getPoint(r),
				a = e || (s.isVector2 ? new de : new we);
			return a.copy(o).sub(s).normalize(), a
		},
		getTangentAt: function(t, e) {
			const n = this.getUtoTmapping(t);
			return this.getTangent(n, e)
		},
		computeFrenetFrames: function(t, e) {
			const n = new we,
				i = [],
				r = [],
				s = [],
				o = new we,
				a = new Ze;
			for (let e = 0; e <= t; e++) {
				const n = e / t;
				i[e] = this.getTangentAt(n, new we), i[e].normalize()
			}
			r[0] = new we, s[0] = new we;
			let c = Number.MAX_VALUE;
			const l = Math.abs(i[0].x),
				h = Math.abs(i[0].y),
				u = Math.abs(i[0].z);
			l <= c && (c = l, n.set(1, 0, 0)), h <= c && (c = h, n.set(0, 1, 0)), u <= c && n.set(0, 0, 1), o.crossVectors(i[0], n).normalize(), r[0].crossVectors(i[0], o), s[0].crossVectors(i[0], r[0]);
			for (let e = 1; e <= t; e++) {
				if (r[e] = r[e - 1].clone(), s[e] = s[e - 1].clone(), o.crossVectors(i[e - 1], i[e]), o.length() > Number.EPSILON) {
					o.normalize();
					const t = Math.acos(ue.clamp(i[e - 1].dot(i[e]), -1, 1));
					r[e].applyMatrix4(a.makeRotationAxis(o, t))
				}
				s[e].crossVectors(i[e], r[e])
			}
			if (!0 === e) {
				let e = Math.acos(ue.clamp(r[0].dot(r[t]), -1, 1));
				e /= t, i[0].dot(o.crossVectors(r[0], r[t])) > 0 && (e = -e);
				for (let n = 1; n <= t; n++) r[n].applyMatrix4(a.makeRotationAxis(i[n], e * n)), s[n].crossVectors(i[n], r[n])
			}
			return {
				tangents: i,
				normals: r,
				binormals: s
			}
		},
		clone: function() {
			return (new this.constructor).copy(this)
		},
		copy: function(t) {
			return this.arcLengthDivisions = t.arcLengthDivisions, this
		},
		toJSON: function() {
			const t = {
				metadata: {
					version: 4.5,
					type: "Curve",
					generator: "Curve.toJSON"
				}
			};
			return t.arcLengthDivisions = this.arcLengthDivisions, t.type = this.type, t
		},
		fromJSON: function(t) {
			return this.arcLengthDivisions = t.arcLengthDivisions, this
		}
	}), Oc.prototype = Object.create(Dc.prototype), Oc.prototype.constructor = Oc, Oc.prototype.isEllipseCurve = !0, Oc.prototype.getPoint = function(t, e) {
		const n = e || new de,
			i = 2 * Math.PI;
		let r = this.aEndAngle - this.aStartAngle;
		const s = Math.abs(r) < Number.EPSILON;
		for (; r < 0;) r += i;
		for (; r > i;) r -= i;
		r < Number.EPSILON && (r = s ? 0 : i), !0 !== this.aClockwise || s || (r === i ? r = -i : r -= i);
		const o = this.aStartAngle + t * r;
		let a = this.aX + this.xRadius * Math.cos(o),
			c = this.aY + this.yRadius * Math.sin(o);
		if (0 !== this.aRotation) {
			const t = Math.cos(this.aRotation),
				e = Math.sin(this.aRotation),
				n = a - this.aX,
				i = c - this.aY;
			a = n * t - i * e + this.aX, c = n * e + i * t + this.aY
		}
		return n.set(a, c)
	}, Oc.prototype.copy = function(t) {
		return Dc.prototype.copy.call(this, t), this.aX = t.aX, this.aY = t.aY, this.xRadius = t.xRadius, this.yRadius = t.yRadius, this.aStartAngle = t.aStartAngle, this.aEndAngle = t.aEndAngle, this.aClockwise = t.aClockwise, this.aRotation = t.aRotation, this
	}, Oc.prototype.toJSON = function() {
		const t = Dc.prototype.toJSON.call(this);
		return t.aX = this.aX, t.aY = this.aY, t.xRadius = this.xRadius, t.yRadius = this.yRadius, t.aStartAngle = this.aStartAngle, t.aEndAngle = this.aEndAngle, t.aClockwise = this.aClockwise, t.aRotation = this.aRotation, t
	}, Oc.prototype.fromJSON = function(t) {
		return Dc.prototype.fromJSON.call(this, t), this.aX = t.aX, this.aY = t.aY, this.xRadius = t.xRadius, this.yRadius = t.yRadius, this.aStartAngle = t.aStartAngle, this.aEndAngle = t.aEndAngle, this.aClockwise = t.aClockwise, this.aRotation = t.aRotation, this
	}, Ic.prototype = Object.create(Oc.prototype), Ic.prototype.constructor = Ic, Ic.prototype.isArcCurve = !0;
	const zc = new we,
		Bc = new Nc,
		Uc = new Nc,
		Fc = new Nc;

	function Hc(t = [], e = !1, n = "centripetal", i = .5) {
		Dc.call(this), this.type = "CatmullRomCurve3", this.points = t, this.closed = e, this.curveType = n, this.tension = i
	}

	function kc(t, e, n, i, r) {
		const s = .5 * (i - e),
			o = .5 * (r - n),
			a = t * t;
		return (2 * n - 2 * i + s + o) * (t * a) + (-3 * n + 3 * i - 2 * s - o) * a + s * t + n
	}

	function Gc(t, e, n, i) {
		return function(t, e) {
			const n = 1 - t;
			return n * n * e
		}(t, e) + function(t, e) {
			return 2 * (1 - t) * t * e
		}(t, n) + function(t, e) {
			return t * t * e
		}(t, i)
	}

	function jc(t, e, n, i, r) {
		return function(t, e) {
			const n = 1 - t;
			return n * n * n * e
		}(t, e) + function(t, e) {
			const n = 1 - t;
			return 3 * n * n * t * e
		}(t, n) + function(t, e) {
			return 3 * (1 - t) * t * t * e
		}(t, i) + function(t, e) {
			return t * t * t * e
		}(t, r)
	}

	function Vc(t = new de, e = new de, n = new de, i = new de) {
		Dc.call(this), this.type = "CubicBezierCurve", this.v0 = t, this.v1 = e, this.v2 = n, this.v3 = i
	}

	function Wc(t = new we, e = new we, n = new we, i = new we) {
		Dc.call(this), this.type = "CubicBezierCurve3", this.v0 = t, this.v1 = e, this.v2 = n, this.v3 = i
	}

	function $c(t = new de, e = new de) {
		Dc.call(this), this.type = "LineCurve", this.v1 = t, this.v2 = e
	}

	function qc(t = new we, e = new we) {
		Dc.call(this), this.type = "LineCurve3", this.v1 = t, this.v2 = e
	}

	function Xc(t = new de, e = new de, n = new de) {
		Dc.call(this), this.type = "QuadraticBezierCurve", this.v0 = t, this.v1 = e, this.v2 = n
	}

	function Yc(t = new we, e = new we, n = new we) {
		Dc.call(this), this.type = "QuadraticBezierCurve3", this.v0 = t, this.v1 = e, this.v2 = n
	}

	function Zc(t = []) {
		Dc.call(this), this.type = "SplineCurve", this.points = t
	}
	Hc.prototype = Object.create(Dc.prototype), Hc.prototype.constructor = Hc, Hc.prototype.isCatmullRomCurve3 = !0, Hc.prototype.getPoint = function(t, e = new we) {
		const n = e,
			i = this.points,
			r = i.length,
			s = (r - (this.closed ? 0 : 1)) * t;
		let o, a, c = Math.floor(s),
			l = s - c;
		this.closed ? c += c > 0 ? 0 : (Math.floor(Math.abs(c) / r) + 1) * r : 0 === l && c === r - 1 && (c = r - 2, l = 1), this.closed || c > 0 ? o = i[(c - 1) % r] : (zc.subVectors(i[0], i[1]).add(i[0]), o = zc);
		const h = i[c % r],
			u = i[(c + 1) % r];
		if (this.closed || c + 2 < r ? a = i[(c + 2) % r] : (zc.subVectors(i[r - 1], i[r - 2]).add(i[r - 1]), a = zc), "centripetal" === this.curveType || "chordal" === this.curveType) {
			const t = "chordal" === this.curveType ? .5 : .25;
			let e = Math.pow(o.distanceToSquared(h), t),
				n = Math.pow(h.distanceToSquared(u), t),
				i = Math.pow(u.distanceToSquared(a), t);
			n < 1e-4 && (n = 1), e < 1e-4 && (e = n), i < 1e-4 && (i = n), Bc.initNonuniformCatmullRom(o.x, h.x, u.x, a.x, e, n, i), Uc.initNonuniformCatmullRom(o.y, h.y, u.y, a.y, e, n, i), Fc.initNonuniformCatmullRom(o.z, h.z, u.z, a.z, e, n, i)
		} else "catmullrom" === this.curveType && (Bc.initCatmullRom(o.x, h.x, u.x, a.x, this.tension), Uc.initCatmullRom(o.y, h.y, u.y, a.y, this.tension), Fc.initCatmullRom(o.z, h.z, u.z, a.z, this.tension));
		return n.set(Bc.calc(l), Uc.calc(l), Fc.calc(l)), n
	}, Hc.prototype.copy = function(t) {
		Dc.prototype.copy.call(this, t), this.points = [];
		for (let e = 0, n = t.points.length; e < n; e++) {
			const n = t.points[e];
			this.points.push(n.clone())
		}
		return this.closed = t.closed, this.curveType = t.curveType, this.tension = t.tension, this
	}, Hc.prototype.toJSON = function() {
		const t = Dc.prototype.toJSON.call(this);
		t.points = [];
		for (let e = 0, n = this.points.length; e < n; e++) {
			const n = this.points[e];
			t.points.push(n.toArray())
		}
		return t.closed = this.closed, t.curveType = this.curveType, t.tension = this.tension, t
	}, Hc.prototype.fromJSON = function(t) {
		Dc.prototype.fromJSON.call(this, t), this.points = [];
		for (let e = 0, n = t.points.length; e < n; e++) {
			const n = t.points[e];
			this.points.push((new we).fromArray(n))
		}
		return this.closed = t.closed, this.curveType = t.curveType, this.tension = t.tension, this
	}, Vc.prototype = Object.create(Dc.prototype), Vc.prototype.constructor = Vc, Vc.prototype.isCubicBezierCurve = !0, Vc.prototype.getPoint = function(t, e = new de) {
		const n = e,
			i = this.v0,
			r = this.v1,
			s = this.v2,
			o = this.v3;
		return n.set(jc(t, i.x, r.x, s.x, o.x), jc(t, i.y, r.y, s.y, o.y)), n
	}, Vc.prototype.copy = function(t) {
		return Dc.prototype.copy.call(this, t), this.v0.copy(t.v0), this.v1.copy(t.v1), this.v2.copy(t.v2), this.v3.copy(t.v3), this
	}, Vc.prototype.toJSON = function() {
		const t = Dc.prototype.toJSON.call(this);
		return t.v0 = this.v0.toArray(), t.v1 = this.v1.toArray(), t.v2 = this.v2.toArray(), t.v3 = this.v3.toArray(), t
	}, Vc.prototype.fromJSON = function(t) {
		return Dc.prototype.fromJSON.call(this, t), this.v0.fromArray(t.v0), this.v1.fromArray(t.v1), this.v2.fromArray(t.v2), this.v3.fromArray(t.v3), this
	}, Wc.prototype = Object.create(Dc.prototype), Wc.prototype.constructor = Wc, Wc.prototype.isCubicBezierCurve3 = !0, Wc.prototype.getPoint = function(t, e = new we) {
		const n = e,
			i = this.v0,
			r = this.v1,
			s = this.v2,
			o = this.v3;
		return n.set(jc(t, i.x, r.x, s.x, o.x), jc(t, i.y, r.y, s.y, o.y), jc(t, i.z, r.z, s.z, o.z)), n
	}, Wc.prototype.copy = function(t) {
		return Dc.prototype.copy.call(this, t), this.v0.copy(t.v0), this.v1.copy(t.v1), this.v2.copy(t.v2), this.v3.copy(t.v3), this
	}, Wc.prototype.toJSON = function() {
		const t = Dc.prototype.toJSON.call(this);
		return t.v0 = this.v0.toArray(), t.v1 = this.v1.toArray(), t.v2 = this.v2.toArray(), t.v3 = this.v3.toArray(), t
	}, Wc.prototype.fromJSON = function(t) {
		return Dc.prototype.fromJSON.call(this, t), this.v0.fromArray(t.v0), this.v1.fromArray(t.v1), this.v2.fromArray(t.v2), this.v3.fromArray(t.v3), this
	}, $c.prototype = Object.create(Dc.prototype), $c.prototype.constructor = $c, $c.prototype.isLineCurve = !0, $c.prototype.getPoint = function(t, e = new de) {
		const n = e;
		return 1 === t ? n.copy(this.v2) : (n.copy(this.v2).sub(this.v1), n.multiplyScalar(t).add(this.v1)), n
	}, $c.prototype.getPointAt = function(t, e) {
		return this.getPoint(t, e)
	}, $c.prototype.getTangent = function(t, e) {
		const n = e || new de;
		return n.copy(this.v2).sub(this.v1).normalize(), n
	}, $c.prototype.copy = function(t) {
		return Dc.prototype.copy.call(this, t), this.v1.copy(t.v1), this.v2.copy(t.v2), this
	}, $c.prototype.toJSON = function() {
		const t = Dc.prototype.toJSON.call(this);
		return t.v1 = this.v1.toArray(), t.v2 = this.v2.toArray(), t
	}, $c.prototype.fromJSON = function(t) {
		return Dc.prototype.fromJSON.call(this, t), this.v1.fromArray(t.v1), this.v2.fromArray(t.v2), this
	}, qc.prototype = Object.create(Dc.prototype), qc.prototype.constructor = qc, qc.prototype.isLineCurve3 = !0, qc.prototype.getPoint = function(t, e = new we) {
		const n = e;
		return 1 === t ? n.copy(this.v2) : (n.copy(this.v2).sub(this.v1), n.multiplyScalar(t).add(this.v1)), n
	}, qc.prototype.getPointAt = function(t, e) {
		return this.getPoint(t, e)
	}, qc.prototype.copy = function(t) {
		return Dc.prototype.copy.call(this, t), this.v1.copy(t.v1), this.v2.copy(t.v2), this
	}, qc.prototype.toJSON = function() {
		const t = Dc.prototype.toJSON.call(this);
		return t.v1 = this.v1.toArray(), t.v2 = this.v2.toArray(), t
	}, qc.prototype.fromJSON = function(t) {
		return Dc.prototype.fromJSON.call(this, t), this.v1.fromArray(t.v1), this.v2.fromArray(t.v2), this
	}, Xc.prototype = Object.create(Dc.prototype), Xc.prototype.constructor = Xc, Xc.prototype.isQuadraticBezierCurve = !0, Xc.prototype.getPoint = function(t, e = new de) {
		const n = e,
			i = this.v0,
			r = this.v1,
			s = this.v2;
		return n.set(Gc(t, i.x, r.x, s.x), Gc(t, i.y, r.y, s.y)), n
	}, Xc.prototype.copy = function(t) {
		return Dc.prototype.copy.call(this, t), this.v0.copy(t.v0), this.v1.copy(t.v1), this.v2.copy(t.v2), this
	}, Xc.prototype.toJSON = function() {
		const t = Dc.prototype.toJSON.call(this);
		return t.v0 = this.v0.toArray(), t.v1 = this.v1.toArray(), t.v2 = this.v2.toArray(), t
	}, Xc.prototype.fromJSON = function(t) {
		return Dc.prototype.fromJSON.call(this, t), this.v0.fromArray(t.v0), this.v1.fromArray(t.v1), this.v2.fromArray(t.v2), this
	}, Yc.prototype = Object.create(Dc.prototype), Yc.prototype.constructor = Yc, Yc.prototype.isQuadraticBezierCurve3 = !0, Yc.prototype.getPoint = function(t, e = new we) {
		const n = e,
			i = this.v0,
			r = this.v1,
			s = this.v2;
		return n.set(Gc(t, i.x, r.x, s.x), Gc(t, i.y, r.y, s.y), Gc(t, i.z, r.z, s.z)), n
	}, Yc.prototype.copy = function(t) {
		return Dc.prototype.copy.call(this, t), this.v0.copy(t.v0), this.v1.copy(t.v1), this.v2.copy(t.v2), this
	}, Yc.prototype.toJSON = function() {
		const t = Dc.prototype.toJSON.call(this);
		return t.v0 = this.v0.toArray(), t.v1 = this.v1.toArray(), t.v2 = this.v2.toArray(), t
	}, Yc.prototype.fromJSON = function(t) {
		return Dc.prototype.fromJSON.call(this, t), this.v0.fromArray(t.v0), this.v1.fromArray(t.v1), this.v2.fromArray(t.v2), this
	}, Zc.prototype = Object.create(Dc.prototype), Zc.prototype.constructor = Zc, Zc.prototype.isSplineCurve = !0, Zc.prototype.getPoint = function(t, e = new de) {
		const n = e,
			i = this.points,
			r = (i.length - 1) * t,
			s = Math.floor(r),
			o = r - s,
			a = i[0 === s ? s : s - 1],
			c = i[s],
			l = i[s > i.length - 2 ? i.length - 1 : s + 1],
			h = i[s > i.length - 3 ? i.length - 1 : s + 2];
		return n.set(kc(o, a.x, c.x, l.x, h.x), kc(o, a.y, c.y, l.y, h.y)), n
	}, Zc.prototype.copy = function(t) {
		Dc.prototype.copy.call(this, t), this.points = [];
		for (let e = 0, n = t.points.length; e < n; e++) {
			const n = t.points[e];
			this.points.push(n.clone())
		}
		return this
	}, Zc.prototype.toJSON = function() {
		const t = Dc.prototype.toJSON.call(this);
		t.points = [];
		for (let e = 0, n = this.points.length; e < n; e++) {
			const n = this.points[e];
			t.points.push(n.toArray())
		}
		return t
	}, Zc.prototype.fromJSON = function(t) {
		Dc.prototype.fromJSON.call(this, t), this.points = [];
		for (let e = 0, n = t.points.length; e < n; e++) {
			const n = t.points[e];
			this.points.push((new de).fromArray(n))
		}
		return this
	};
	var Jc = Object.freeze({
		__proto__: null,
		ArcCurve: Ic,
		CatmullRomCurve3: Hc,
		CubicBezierCurve: Vc,
		CubicBezierCurve3: Wc,
		EllipseCurve: Oc,
		LineCurve: $c,
		LineCurve3: qc,
		QuadraticBezierCurve: Xc,
		QuadraticBezierCurve3: Yc,
		SplineCurve: Zc
	});

	function Qc() {
		Dc.call(this), this.type = "CurvePath", this.curves = [], this.autoClose = !1
	}

	function Kc(t) {
		Qc.call(this), this.type = "Path", this.currentPoint = new de, t && this.setFromPoints(t)
	}

	function tl(t) {
		Kc.call(this, t), this.uuid = ue.generateUUID(), this.type = "Shape", this.holes = []
	}

	function el(t, e = 1) {
		wn.call(this), this.type = "Light", this.color = new Vn(t), this.intensity = e
	}

	function nl(t, e, n) {
		el.call(this, t, n), this.type = "HemisphereLight", this.position.copy(wn.DefaultUp), this.updateMatrix(), this.groundColor = new Vn(e)
	}

	function il(t) {
		this.camera = t, this.bias = 0, this.normalBias = 0, this.radius = 1, this.mapSize = new de(512, 512), this.map = null, this.mapPass = null, this.matrix = new Ze, this.autoUpdate = !0, this.needsUpdate = !1, this._frustum = new Qi, this._frameExtents = new de(1, 1), this._viewportCount = 1, this._viewports = [new xe(0, 0, 1, 1)]
	}

	function rl() {
		il.call(this, new Vi(50, 1, .5, 500)), this.focus = 1
	}

	function sl(t, e, n, i, r, s) {
		el.call(this, t, e), this.type = "SpotLight", this.position.copy(wn.DefaultUp), this.updateMatrix(), this.target = new wn, Object.defineProperty(this, "power", {
			get: function() {
				return this.intensity * Math.PI
			},
			set: function(t) {
				this.intensity = t / Math.PI
			}
		}), this.distance = void 0 !== n ? n : 0, this.angle = void 0 !== i ? i : Math.PI / 3, this.penumbra = void 0 !== r ? r : 0, this.decay = void 0 !== s ? s : 1, this.shadow = new rl
	}

	function ol() {
		il.call(this, new Vi(90, 1, .5, 500)), this._frameExtents = new de(4, 2), this._viewportCount = 6, this._viewports = [new xe(2, 1, 1, 1), new xe(0, 1, 1, 1), new xe(3, 1, 1, 1), new xe(1, 1, 1, 1), new xe(3, 0, 1, 1), new xe(1, 0, 1, 1)], this._cubeDirections = [new we(1, 0, 0), new we(-1, 0, 0), new we(0, 0, 1), new we(0, 0, -1), new we(0, 1, 0), new we(0, -1, 0)], this._cubeUps = [new we(0, 1, 0), new we(0, 1, 0), new we(0, 1, 0), new we(0, 1, 0), new we(0, 0, 1), new we(0, 0, -1)]
	}

	function al(t, e, n, i) {
		el.call(this, t, e), this.type = "PointLight", Object.defineProperty(this, "power", {
			get: function() {
				return 4 * this.intensity * Math.PI
			},
			set: function(t) {
				this.intensity = t / (4 * Math.PI)
			}
		}), this.distance = void 0 !== n ? n : 0, this.decay = void 0 !== i ? i : 1, this.shadow = new ol
	}

	function cl(t = -1, e = 1, n = 1, i = -1, r = .1, s = 2e3) {
		ji.call(this), this.type = "OrthographicCamera", this.zoom = 1, this.view = null, this.left = t, this.right = e, this.top = n, this.bottom = i, this.near = r, this.far = s, this.updateProjectionMatrix()
	}

	function ll() {
		il.call(this, new cl(-5, 5, 5, -5, .5, 500))
	}

	function hl(t, e) {
		el.call(this, t, e), this.type = "DirectionalLight", this.position.copy(wn.DefaultUp), this.updateMatrix(), this.target = new wn, this.shadow = new ll
	}

	function ul(t, e) {
		el.call(this, t, e), this.type = "AmbientLight"
	}

	function dl(t, e, n, i) {
		el.call(this, t, e), this.type = "RectAreaLight", this.width = void 0 !== n ? n : 10, this.height = void 0 !== i ? i : 10
	}
	Qc.prototype = Object.assign(Object.create(Dc.prototype), {
		constructor: Qc,
		add: function(t) {
			this.curves.push(t)
		},
		closePath: function() {
			const t = this.curves[0].getPoint(0),
				e = this.curves[this.curves.length - 1].getPoint(1);
			t.equals(e) || this.curves.push(new $c(e, t))
		},
		getPoint: function(t) {
			const e = t * this.getLength(),
				n = this.getCurveLengths();
			let i = 0;
			for (; i < n.length;) {
				if (n[i] >= e) {
					const t = n[i] - e,
						r = this.curves[i],
						s = r.getLength(),
						o = 0 === s ? 0 : 1 - t / s;
					return r.getPointAt(o)
				}
				i++
			}
			return null
		},
		getLength: function() {
			const t = this.getCurveLengths();
			return t[t.length - 1]
		},
		updateArcLengths: function() {
			this.needsUpdate = !0, this.cacheLengths = null, this.getCurveLengths()
		},
		getCurveLengths: function() {
			if (this.cacheLengths && this.cacheLengths.length === this.curves.length) return this.cacheLengths;
			const t = [];
			let e = 0;
			for (let n = 0, i = this.curves.length; n < i; n++) e += this.curves[n].getLength(), t.push(e);
			return this.cacheLengths = t, t
		},
		getSpacedPoints: function(t = 40) {
			const e = [];
			for (let n = 0; n <= t; n++) e.push(this.getPoint(n / t));
			return this.autoClose && e.push(e[0]), e
		},
		getPoints: function(t = 12) {
			const e = [];
			let n;
			for (let i = 0, r = this.curves; i < r.length; i++) {
				const s = r[i],
					o = s && s.isEllipseCurve ? 2 * t : s && (s.isLineCurve || s.isLineCurve3) ? 1 : s && s.isSplineCurve ? t * s.points.length : t,
					a = s.getPoints(o);
				for (let t = 0; t < a.length; t++) {
					const i = a[t];
					n && n.equals(i) || (e.push(i), n = i)
				}
			}
			return this.autoClose && e.length > 1 && !e[e.length - 1].equals(e[0]) && e.push(e[0]), e
		},
		copy: function(t) {
			Dc.prototype.copy.call(this, t), this.curves = [];
			for (let e = 0, n = t.curves.length; e < n; e++) {
				const n = t.curves[e];
				this.curves.push(n.clone())
			}
			return this.autoClose = t.autoClose, this
		},
		toJSON: function() {
			const t = Dc.prototype.toJSON.call(this);
			t.autoClose = this.autoClose, t.curves = [];
			for (let e = 0, n = this.curves.length; e < n; e++) {
				const n = this.curves[e];
				t.curves.push(n.toJSON())
			}
			return t
		},
		fromJSON: function(t) {
			Dc.prototype.fromJSON.call(this, t), this.autoClose = t.autoClose, this.curves = [];
			for (let e = 0, n = t.curves.length; e < n; e++) {
				const n = t.curves[e];
				this.curves.push((new Jc[n.type]).fromJSON(n))
			}
			return this
		}
	}), Kc.prototype = Object.assign(Object.create(Qc.prototype), {
		constructor: Kc,
		setFromPoints: function(t) {
			this.moveTo(t[0].x, t[0].y);
			for (let e = 1, n = t.length; e < n; e++) this.lineTo(t[e].x, t[e].y);
			return this
		},
		moveTo: function(t, e) {
			return this.currentPoint.set(t, e), this
		},
		lineTo: function(t, e) {
			const n = new $c(this.currentPoint.clone(), new de(t, e));
			return this.curves.push(n), this.currentPoint.set(t, e), this
		},
		quadraticCurveTo: function(t, e, n, i) {
			const r = new Xc(this.currentPoint.clone(), new de(t, e), new de(n, i));
			return this.curves.push(r), this.currentPoint.set(n, i), this
		},
		bezierCurveTo: function(t, e, n, i, r, s) {
			const o = new Vc(this.currentPoint.clone(), new de(t, e), new de(n, i), new de(r, s));
			return this.curves.push(o), this.currentPoint.set(r, s), this
		},
		splineThru: function(t) {
			const e = new Zc([this.currentPoint.clone()].concat(t));
			return this.curves.push(e), this.currentPoint.copy(t[t.length - 1]), this
		},
		arc: function(t, e, n, i, r, s) {
			const o = this.currentPoint.x,
				a = this.currentPoint.y;
			return this.absarc(t + o, e + a, n, i, r, s), this
		},
		absarc: function(t, e, n, i, r, s) {
			return this.absellipse(t, e, n, n, i, r, s), this
		},
		ellipse: function(t, e, n, i, r, s, o, a) {
			const c = this.currentPoint.x,
				l = this.currentPoint.y;
			return this.absellipse(t + c, e + l, n, i, r, s, o, a), this
		},
		absellipse: function(t, e, n, i, r, s, o, a) {
			const c = new Oc(t, e, n, i, r, s, o, a);
			if (this.curves.length > 0) {
				const t = c.getPoint(0);
				t.equals(this.currentPoint) || this.lineTo(t.x, t.y)
			}
			this.curves.push(c);
			const l = c.getPoint(1);
			return this.currentPoint.copy(l), this
		},
		copy: function(t) {
			return Qc.prototype.copy.call(this, t), this.currentPoint.copy(t.currentPoint), this
		},
		toJSON: function() {
			const t = Qc.prototype.toJSON.call(this);
			return t.currentPoint = this.currentPoint.toArray(), t
		},
		fromJSON: function(t) {
			return Qc.prototype.fromJSON.call(this, t), this.currentPoint.fromArray(t.currentPoint), this
		}
	}), tl.prototype = Object.assign(Object.create(Kc.prototype), {
		constructor: tl,
		getPointsHoles: function(t) {
			const e = [];
			for (let n = 0, i = this.holes.length; n < i; n++) e[n] = this.holes[n].getPoints(t);
			return e
		},
		extractPoints: function(t) {
			return {
				shape: this.getPoints(t),
				holes: this.getPointsHoles(t)
			}
		},
		copy: function(t) {
			Kc.prototype.copy.call(this, t), this.holes = [];
			for (let e = 0, n = t.holes.length; e < n; e++) {
				const n = t.holes[e];
				this.holes.push(n.clone())
			}
			return this
		},
		toJSON: function() {
			const t = Kc.prototype.toJSON.call(this);
			t.uuid = this.uuid, t.holes = [];
			for (let e = 0, n = this.holes.length; e < n; e++) {
				const n = this.holes[e];
				t.holes.push(n.toJSON())
			}
			return t
		},
		fromJSON: function(t) {
			Kc.prototype.fromJSON.call(this, t), this.uuid = t.uuid, this.holes = [];
			for (let e = 0, n = t.holes.length; e < n; e++) {
				const n = t.holes[e];
				this.holes.push((new Kc).fromJSON(n))
			}
			return this
		}
	}), el.prototype = Object.assign(Object.create(wn.prototype), {
		constructor: el,
		isLight: !0,
		copy: function(t) {
			return wn.prototype.copy.call(this, t), this.color.copy(t.color), this.intensity = t.intensity, this
		},
		toJSON: function(t) {
			const e = wn.prototype.toJSON.call(this, t);
			return e.object.color = this.color.getHex(), e.object.intensity = this.intensity, void 0 !== this.groundColor && (e.object.groundColor = this.groundColor.getHex()), void 0 !== this.distance && (e.object.distance = this.distance), void 0 !== this.angle && (e.object.angle = this.angle), void 0 !== this.decay && (e.object.decay = this.decay), void 0 !== this.penumbra && (e.object.penumbra = this.penumbra), void 0 !== this.shadow && (e.object.shadow = this.shadow.toJSON()), e
		}
	}), nl.prototype = Object.assign(Object.create(el.prototype), {
		constructor: nl,
		isHemisphereLight: !0,
		copy: function(t) {
			return el.prototype.copy.call(this, t), this.groundColor.copy(t.groundColor), this
		}
	}), Object.assign(il.prototype, {
		_projScreenMatrix: new Ze,
		_lightPositionWorld: new we,
		_lookTarget: new we,
		getViewportCount: function() {
			return this._viewportCount
		},
		getFrustum: function() {
			return this._frustum
		},
		updateMatrices: function(t) {
			const e = this.camera,
				n = this.matrix,
				i = this._projScreenMatrix,
				r = this._lookTarget,
				s = this._lightPositionWorld;
			s.setFromMatrixPosition(t.matrixWorld), e.position.copy(s), r.setFromMatrixPosition(t.target.matrixWorld), e.lookAt(r), e.updateMatrixWorld(), i.multiplyMatrices(e.projectionMatrix, e.matrixWorldInverse), this._frustum.setFromProjectionMatrix(i), n.set(.5, 0, 0, .5, 0, .5, 0, .5, 0, 0, .5, .5, 0, 0, 0, 1), n.multiply(e.projectionMatrix), n.multiply(e.matrixWorldInverse)
		},
		getViewport: function(t) {
			return this._viewports[t]
		},
		getFrameExtents: function() {
			return this._frameExtents
		},
		copy: function(t) {
			return this.camera = t.camera.clone(), this.bias = t.bias, this.radius = t.radius, this.mapSize.copy(t.mapSize), this
		},
		clone: function() {
			return (new this.constructor).copy(this)
		},
		toJSON: function() {
			const t = {};
			return 0 !== this.bias && (t.bias = this.bias), 0 !== this.normalBias && (t.normalBias = this.normalBias), 1 !== this.radius && (t.radius = this.radius), 512 === this.mapSize.x && 512 === this.mapSize.y || (t.mapSize = this.mapSize.toArray()), t.camera = this.camera.toJSON(!1).object, delete t.camera.matrix, t
		}
	}), rl.prototype = Object.assign(Object.create(il.prototype), {
		constructor: rl,
		isSpotLightShadow: !0,
		updateMatrices: function(t) {
			const e = this.camera,
				n = 2 * ue.RAD2DEG * t.angle * this.focus,
				i = this.mapSize.width / this.mapSize.height,
				r = t.distance || e.far;
			n === e.fov && i === e.aspect && r === e.far || (e.fov = n, e.aspect = i, e.far = r, e.updateProjectionMatrix()), il.prototype.updateMatrices.call(this, t)
		}
	}), sl.prototype = Object.assign(Object.create(el.prototype), {
		constructor: sl,
		isSpotLight: !0,
		copy: function(t) {
			return el.prototype.copy.call(this, t), this.distance = t.distance, this.angle = t.angle, this.penumbra = t.penumbra, this.decay = t.decay, this.target = t.target.clone(), this.shadow = t.shadow.clone(), this
		}
	}), ol.prototype = Object.assign(Object.create(il.prototype), {
		constructor: ol,
		isPointLightShadow: !0,
		updateMatrices: function(t, e = 0) {
			const n = this.camera,
				i = this.matrix,
				r = this._lightPositionWorld,
				s = this._lookTarget,
				o = this._projScreenMatrix;
			r.setFromMatrixPosition(t.matrixWorld), n.position.copy(r), s.copy(n.position), s.add(this._cubeDirections[e]), n.up.copy(this._cubeUps[e]), n.lookAt(s), n.updateMatrixWorld(), i.makeTranslation(-r.x, -r.y, -r.z), o.multiplyMatrices(n.projectionMatrix, n.matrixWorldInverse), this._frustum.setFromProjectionMatrix(o)
		}
	}), al.prototype = Object.assign(Object.create(el.prototype), {
		constructor: al,
		isPointLight: !0,
		copy: function(t) {
			return el.prototype.copy.call(this, t), this.distance = t.distance, this.decay = t.decay, this.shadow = t.shadow.clone(), this
		}
	}), cl.prototype = Object.assign(Object.create(ji.prototype), {
		constructor: cl,
		isOrthographicCamera: !0,
		copy: function(t, e) {
			return ji.prototype.copy.call(this, t, e), this.left = t.left, this.right = t.right, this.top = t.top, this.bottom = t.bottom, this.near = t.near, this.far = t.far, this.zoom = t.zoom, this.view = null === t.view ? null : Object.assign({}, t.view), this
		},
		setViewOffset: function(t, e, n, i, r, s) {
			null === this.view && (this.view = {
				enabled: !0,
				fullWidth: 1,
				fullHeight: 1,
				offsetX: 0,
				offsetY: 0,
				width: 1,
				height: 1
			}), this.view.enabled = !0, this.view.fullWidth = t, this.view.fullHeight = e, this.view.offsetX = n, this.view.offsetY = i, this.view.width = r, this.view.height = s, this.updateProjectionMatrix()
		},
		clearViewOffset: function() {
			null !== this.view && (this.view.enabled = !1), this.updateProjectionMatrix()
		},
		updateProjectionMatrix: function() {
			const t = (this.right - this.left) / (2 * this.zoom),
				e = (this.top - this.bottom) / (2 * this.zoom),
				n = (this.right + this.left) / 2,
				i = (this.top + this.bottom) / 2;
			let r = n - t,
				s = n + t,
				o = i + e,
				a = i - e;
			if (null !== this.view && this.view.enabled) {
				const t = (this.right - this.left) / this.view.fullWidth / this.zoom,
					e = (this.top - this.bottom) / this.view.fullHeight / this.zoom;
				r += t * this.view.offsetX, s = r + t * this.view.width, o -= e * this.view.offsetY, a = o - e * this.view.height
			}
			this.projectionMatrix.makeOrthographic(r, s, o, a, this.near, this.far), this.projectionMatrixInverse.copy(this.projectionMatrix).invert()
		},
		toJSON: function(t) {
			const e = wn.prototype.toJSON.call(this, t);
			return e.object.zoom = this.zoom, e.object.left = this.left, e.object.right = this.right, e.object.top = this.top, e.object.bottom = this.bottom, e.object.near = this.near, e.object.far = this.far, null !== this.view && (e.object.view = Object.assign({}, this.view)), e
		}
	}), ll.prototype = Object.assign(Object.create(il.prototype), {
		constructor: ll,
		isDirectionalLightShadow: !0,
		updateMatrices: function(t) {
			il.prototype.updateMatrices.call(this, t)
		}
	}), hl.prototype = Object.assign(Object.create(el.prototype), {
		constructor: hl,
		isDirectionalLight: !0,
		copy: function(t) {
			return el.prototype.copy.call(this, t), this.target = t.target.clone(), this.shadow = t.shadow.clone(), this
		}
	}), ul.prototype = Object.assign(Object.create(el.prototype), {
		constructor: ul,
		isAmbientLight: !0
	}), dl.prototype = Object.assign(Object.create(el.prototype), {
		constructor: dl,
		isRectAreaLight: !0,
		copy: function(t) {
			return el.prototype.copy.call(this, t), this.width = t.width, this.height = t.height, this
		},
		toJSON: function(t) {
			const e = el.prototype.toJSON.call(this, t);
			return e.object.width = this.width, e.object.height = this.height, e
		}
	});
	class pl {
		constructor() {
			Object.defineProperty(this, "isSphericalHarmonics3", {
				value: !0
			}), this.coefficients = [];
			for (let t = 0; t < 9; t++) this.coefficients.push(new we)
		}
		set(t) {
			for (let e = 0; e < 9; e++) this.coefficients[e].copy(t[e]);
			return this
		}
		zero() {
			for (let t = 0; t < 9; t++) this.coefficients[t].set(0, 0, 0);
			return this
		}
		getAt(t, e) {
			const n = t.x,
				i = t.y,
				r = t.z,
				s = this.coefficients;
			return e.copy(s[0]).multiplyScalar(.282095), e.addScaledVector(s[1], .488603 * i), e.addScaledVector(s[2], .488603 * r), e.addScaledVector(s[3], .488603 * n), e.addScaledVector(s[4], n * i * 1.092548), e.addScaledVector(s[5], i * r * 1.092548), e.addScaledVector(s[6], .315392 * (3 * r * r - 1)), e.addScaledVector(s[7], n * r * 1.092548), e.addScaledVector(s[8], .546274 * (n * n - i * i)), e
		}
		getIrradianceAt(t, e) {
			const n = t.x,
				i = t.y,
				r = t.z,
				s = this.coefficients;
			return e.copy(s[0]).multiplyScalar(.886227), e.addScaledVector(s[1], 1.023328 * i), e.addScaledVector(s[2], 1.023328 * r), e.addScaledVector(s[3], 1.023328 * n), e.addScaledVector(s[4], .858086 * n * i), e.addScaledVector(s[5], .858086 * i * r), e.addScaledVector(s[6], .743125 * r * r - .247708), e.addScaledVector(s[7], .858086 * n * r), e.addScaledVector(s[8], .429043 * (n * n - i * i)), e
		}
		add(t) {
			for (let e = 0; e < 9; e++) this.coefficients[e].add(t.coefficients[e]);
			return this
		}
		addScaledSH(t, e) {
			for (let n = 0; n < 9; n++) this.coefficients[n].addScaledVector(t.coefficients[n], e);
			return this
		}
		scale(t) {
			for (let e = 0; e < 9; e++) this.coefficients[e].multiplyScalar(t);
			return this
		}
		lerp(t, e) {
			for (let n = 0; n < 9; n++) this.coefficients[n].lerp(t.coefficients[n], e);
			return this
		}
		equals(t) {
			for (let e = 0; e < 9; e++)
				if (!this.coefficients[e].equals(t.coefficients[e])) return !1;
			return !0
		}
		copy(t) {
			return this.set(t.coefficients)
		}
		clone() {
			return (new this.constructor).copy(this)
		}
		fromArray(t, e = 0) {
			const n = this.coefficients;
			for (let i = 0; i < 9; i++) n[i].fromArray(t, e + 3 * i);
			return this
		}
		toArray(t = [], e = 0) {
			const n = this.coefficients;
			for (let i = 0; i < 9; i++) n[i].toArray(t, e + 3 * i);
			return t
		}
		static getBasisAt(t, e) {
			const n = t.x,
				i = t.y,
				r = t.z;
			e[0] = .282095, e[1] = .488603 * i, e[2] = .488603 * r, e[3] = .488603 * n, e[4] = 1.092548 * n * i, e[5] = 1.092548 * i * r, e[6] = .315392 * (3 * r * r - 1), e[7] = 1.092548 * n * r, e[8] = .546274 * (n * n - i * i)
		}
	}

	function fl(t, e) {
		el.call(this, void 0, e), this.type = "LightProbe", this.sh = void 0 !== t ? t : new pl
	}

	function ml(t) {
		Mc.call(this, t), this.textures = {}
	}
	fl.prototype = Object.assign(Object.create(el.prototype), {
		constructor: fl,
		isLightProbe: !0,
		copy: function(t) {
			return el.prototype.copy.call(this, t), this.sh.copy(t.sh), this
		},
		fromJSON: function(t) {
			return this.intensity = t.intensity, this.sh.fromArray(t.sh), this
		},
		toJSON: function(t) {
			const e = el.prototype.toJSON.call(this, t);
			return e.object.sh = this.sh.toArray(), e
		}
	}), ml.prototype = Object.assign(Object.create(Mc.prototype), {
		constructor: ml,
		load: function(t, e, n, i) {
			const r = this,
				s = new Tc(r.manager);
			s.setPath(r.path), s.setRequestHeader(r.requestHeader), s.setWithCredentials(r.withCredentials), s.load(t, (function(n) {
				try {
					e(r.parse(JSON.parse(n)))
				} catch (e) {
					i ? i(e) : console.error(e), r.manager.itemError(t)
				}
			}), n, i)
		},
		parse: function(t) {
			const e = this.textures;

			function n(t) {
				return void 0 === e[t] && console.warn("THREE.MaterialLoader: Undefined texture", t), e[t]
			}
			const i = new sc[t.type];
			if (void 0 !== t.uuid && (i.uuid = t.uuid), void 0 !== t.name && (i.name = t.name), void 0 !== t.color && void 0 !== i.color && i.color.setHex(t.color), void 0 !== t.roughness && (i.roughness = t.roughness), void 0 !== t.metalness && (i.metalness = t.metalness), void 0 !== t.sheen && (i.sheen = (new Vn).setHex(t.sheen)), void 0 !== t.emissive && void 0 !== i.emissive && i.emissive.setHex(t.emissive), void 0 !== t.specular && void 0 !== i.specular && i.specular.setHex(t.specular), void 0 !== t.shininess && (i.shininess = t.shininess), void 0 !== t.clearcoat && (i.clearcoat = t.clearcoat), void 0 !== t.clearcoatRoughness && (i.clearcoatRoughness = t.clearcoatRoughness), void 0 !== t.fog && (i.fog = t.fog), void 0 !== t.flatShading && (i.flatShading = t.flatShading), void 0 !== t.blending && (i.blending = t.blending), void 0 !== t.combine && (i.combine = t.combine), void 0 !== t.side && (i.side = t.side), void 0 !== t.opacity && (i.opacity = t.opacity), void 0 !== t.transparent && (i.transparent = t.transparent), void 0 !== t.alphaTest && (i.alphaTest = t.alphaTest), void 0 !== t.depthTest && (i.depthTest = t.depthTest), void 0 !== t.depthWrite && (i.depthWrite = t.depthWrite), void 0 !== t.colorWrite && (i.colorWrite = t.colorWrite), void 0 !== t.stencilWrite && (i.stencilWrite = t.stencilWrite), void 0 !== t.stencilWriteMask && (i.stencilWriteMask = t.stencilWriteMask), void 0 !== t.stencilFunc && (i.stencilFunc = t.stencilFunc), void 0 !== t.stencilRef && (i.stencilRef = t.stencilRef), void 0 !== t.stencilFuncMask && (i.stencilFuncMask = t.stencilFuncMask), void 0 !== t.stencilFail && (i.stencilFail = t.stencilFail), void 0 !== t.stencilZFail && (i.stencilZFail = t.stencilZFail), void 0 !== t.stencilZPass && (i.stencilZPass = t.stencilZPass), void 0 !== t.wireframe && (i.wireframe = t.wireframe), void 0 !== t.wireframeLinewidth && (i.wireframeLinewidth = t.wireframeLinewidth), void 0 !== t.wireframeLinecap && (i.wireframeLinecap = t.wireframeLinecap), void 0 !== t.wireframeLinejoin && (i.wireframeLinejoin = t.wireframeLinejoin), void 0 !== t.rotation && (i.rotation = t.rotation), 1 !== t.linewidth && (i.linewidth = t.linewidth), void 0 !== t.dashSize && (i.dashSize = t.dashSize), void 0 !== t.gapSize && (i.gapSize = t.gapSize), void 0 !== t.scale && (i.scale = t.scale), void 0 !== t.polygonOffset && (i.polygonOffset = t.polygonOffset), void 0 !== t.polygonOffsetFactor && (i.polygonOffsetFactor = t.polygonOffsetFactor), void 0 !== t.polygonOffsetUnits && (i.polygonOffsetUnits = t.polygonOffsetUnits), void 0 !== t.skinning && (i.skinning = t.skinning), void 0 !== t.morphTargets && (i.morphTargets = t.morphTargets), void 0 !== t.morphNormals && (i.morphNormals = t.morphNormals), void 0 !== t.dithering && (i.dithering = t.dithering), void 0 !== t.vertexTangents && (i.vertexTangents = t.vertexTangents), void 0 !== t.visible && (i.visible = t.visible), void 0 !== t.toneMapped && (i.toneMapped = t.toneMapped), void 0 !== t.userData && (i.userData = t.userData), void 0 !== t.vertexColors && ("number" == typeof t.vertexColors ? i.vertexColors = t.vertexColors > 0 : i.vertexColors = t.vertexColors), void 0 !== t.uniforms)
				for (const e in t.uniforms) {
					const r = t.uniforms[e];
					switch (i.uniforms[e] = {}, r.type) {
						case "t":
							i.uniforms[e].value = n(r.value);
							break;
						case "c":
							i.uniforms[e].value = (new Vn).setHex(r.value);
							break;
						case "v2":
							i.uniforms[e].value = (new de).fromArray(r.value);
							break;
						case "v3":
							i.uniforms[e].value = (new we).fromArray(r.value);
							break;
						case "v4":
							i.uniforms[e].value = (new xe).fromArray(r.value);
							break;
						case "m3":
							i.uniforms[e].value = (new pe).fromArray(r.value);
							break;
						case "m4":
							i.uniforms[e].value = (new Ze).fromArray(r.value);
							break;
						default:
							i.uniforms[e].value = r.value
					}
				}
			if (void 0 !== t.defines && (i.defines = t.defines), void 0 !== t.vertexShader && (i.vertexShader = t.vertexShader), void 0 !== t.fragmentShader && (i.fragmentShader = t.fragmentShader), void 0 !== t.extensions)
				for (const e in t.extensions) i.extensions[e] = t.extensions[e];
			if (void 0 !== t.shading && (i.flatShading = 1 === t.shading), void 0 !== t.size && (i.size = t.size), void 0 !== t.sizeAttenuation && (i.sizeAttenuation = t.sizeAttenuation), void 0 !== t.map && (i.map = n(t.map)), void 0 !== t.matcap && (i.matcap = n(t.matcap)), void 0 !== t.alphaMap && (i.alphaMap = n(t.alphaMap)), void 0 !== t.bumpMap && (i.bumpMap = n(t.bumpMap)), void 0 !== t.bumpScale && (i.bumpScale = t.bumpScale), void 0 !== t.normalMap && (i.normalMap = n(t.normalMap)), void 0 !== t.normalMapType && (i.normalMapType = t.normalMapType), void 0 !== t.normalScale) {
				let e = t.normalScale;
				!1 === Array.isArray(e) && (e = [e, e]), i.normalScale = (new de).fromArray(e)
			}
			return void 0 !== t.displacementMap && (i.displacementMap = n(t.displacementMap)), void 0 !== t.displacementScale && (i.displacementScale = t.displacementScale), void 0 !== t.displacementBias && (i.displacementBias = t.displacementBias), void 0 !== t.roughnessMap && (i.roughnessMap = n(t.roughnessMap)), void 0 !== t.metalnessMap && (i.metalnessMap = n(t.metalnessMap)), void 0 !== t.emissiveMap && (i.emissiveMap = n(t.emissiveMap)), void 0 !== t.emissiveIntensity && (i.emissiveIntensity = t.emissiveIntensity), void 0 !== t.specularMap && (i.specularMap = n(t.specularMap)), void 0 !== t.envMap && (i.envMap = n(t.envMap)), void 0 !== t.envMapIntensity && (i.envMapIntensity = t.envMapIntensity), void 0 !== t.reflectivity && (i.reflectivity = t.reflectivity), void 0 !== t.refractionRatio && (i.refractionRatio = t.refractionRatio), void 0 !== t.lightMap && (i.lightMap = n(t.lightMap)), void 0 !== t.lightMapIntensity && (i.lightMapIntensity = t.lightMapIntensity), void 0 !== t.aoMap && (i.aoMap = n(t.aoMap)), void 0 !== t.aoMapIntensity && (i.aoMapIntensity = t.aoMapIntensity), void 0 !== t.gradientMap && (i.gradientMap = n(t.gradientMap)), void 0 !== t.clearcoatMap && (i.clearcoatMap = n(t.clearcoatMap)), void 0 !== t.clearcoatRoughnessMap && (i.clearcoatRoughnessMap = n(t.clearcoatRoughnessMap)), void 0 !== t.clearcoatNormalMap && (i.clearcoatNormalMap = n(t.clearcoatNormalMap)), void 0 !== t.clearcoatNormalScale && (i.clearcoatNormalScale = (new de).fromArray(t.clearcoatNormalScale)), void 0 !== t.transmission && (i.transmission = t.transmission), void 0 !== t.transmissionMap && (i.transmissionMap = n(t.transmissionMap)), i
		},
		setTextures: function(t) {
			return this.textures = t, this
		}
	});
	const gl = function(t) {
		const e = t.lastIndexOf("/");
		return -1 === e ? "./" : t.substr(0, e + 1)
	};

	function vl() {
		yi.call(this), this.type = "InstancedBufferGeometry", this.instanceCount = 1 / 0
	}

	function yl(t, e, n, i) {
		"number" == typeof n && (i = n, n = !1, console.error("THREE.InstancedBufferAttribute: The constructor now expects normalized as the third argument.")), Jn.call(this, t, e, n), this.meshPerAttribute = i || 1
	}

	function xl(t) {
		Mc.call(this, t)
	}

	function bl(t) {
		"undefined" == typeof createImageBitmap && console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."), "undefined" == typeof fetch && console.warn("THREE.ImageBitmapLoader: fetch() not supported."), Mc.call(this, t), this.options = {
			premultiplyAlpha: "none"
		}
	}

	function _l() {
		this.type = "ShapePath", this.color = new Vn, this.subPaths = [], this.currentPath = null
	}
	vl.prototype = Object.assign(Object.create(yi.prototype), {
		constructor: vl,
		isInstancedBufferGeometry: !0,
		copy: function(t) {
			return yi.prototype.copy.call(this, t), this.instanceCount = t.instanceCount, this
		},
		clone: function() {
			return (new this.constructor).copy(this)
		},
		toJSON: function() {
			const t = yi.prototype.toJSON.call(this);
			return t.instanceCount = this.instanceCount, t.isInstancedBufferGeometry = !0, t
		}
	}), yl.prototype = Object.assign(Object.create(Jn.prototype), {
		constructor: yl,
		isInstancedBufferAttribute: !0,
		copy: function(t) {
			return Jn.prototype.copy.call(this, t), this.meshPerAttribute = t.meshPerAttribute, this
		},
		toJSON: function() {
			const t = Jn.prototype.toJSON.call(this);
			return t.meshPerAttribute = this.meshPerAttribute, t.isInstancedBufferAttribute = !0, t
		}
	}), xl.prototype = Object.assign(Object.create(Mc.prototype), {
		constructor: xl,
		load: function(t, e, n, i) {
			const r = this,
				s = new Tc(r.manager);
			s.setPath(r.path), s.setRequestHeader(r.requestHeader), s.setWithCredentials(r.withCredentials), s.load(t, (function(n) {
				try {
					e(r.parse(JSON.parse(n)))
				} catch (e) {
					i ? i(e) : console.error(e), r.manager.itemError(t)
				}
			}), n, i)
		},
		parse: function(t) {
			const e = {},
				n = {};

			function i(t, i) {
				if (void 0 !== e[i]) return e[i];
				const r = t.interleavedBuffers[i],
					s = function(t, e) {
						if (void 0 !== n[e]) return n[e];
						const i = t.arrayBuffers[e],
							r = new Uint32Array(i).buffer;
						return n[e] = r, r
					}(t, r.buffer),
					o = new co(hi(r.type, s), r.stride);
				return o.uuid = r.uuid, e[i] = o, o
			}
			const r = t.isInstancedBufferGeometry ? new vl : new yi,
				s = t.data.index;
			if (void 0 !== s) {
				const t = hi(s.type, s.array);
				r.setIndex(new Jn(t, 1))
			}
			const o = t.data.attributes;
			for (const e in o) {
				const n = o[e];
				let s;
				if (n.isInterleavedBufferAttribute) {
					s = new ho(i(t.data, n.data), n.itemSize, n.offset, n.normalized)
				} else {
					const t = hi(n.type, n.array);
					s = new(n.isInstancedBufferAttribute ? yl : Jn)(t, n.itemSize, n.normalized)
				}
				void 0 !== n.name && (s.name = n.name), r.setAttribute(e, s)
			}
			const a = t.data.morphAttributes;
			if (a)
				for (const e in a) {
					const n = a[e],
						s = [];
					for (let e = 0, r = n.length; e < r; e++) {
						const r = n[e];
						let o;
						if (r.isInterleavedBufferAttribute) {
							o = new ho(i(t.data, r.data), r.itemSize, r.offset, r.normalized)
						} else {
							o = new Jn(hi(r.type, r.array), r.itemSize, r.normalized)
						}
						void 0 !== r.name && (o.name = r.name), s.push(o)
					}
					r.morphAttributes[e] = s
				}
			t.data.morphTargetsRelative && (r.morphTargetsRelative = !0);
			const c = t.data.groups || t.data.drawcalls || t.data.offsets;
			if (void 0 !== c)
				for (let t = 0, e = c.length; t !== e; ++t) {
					const e = c[t];
					r.addGroup(e.start, e.count, e.materialIndex)
				}
			const l = t.data.boundingSphere;
			if (void 0 !== l) {
				const t = new we;
				void 0 !== l.center && t.fromArray(l.center), r.boundingSphere = new ke(t, l.radius)
			}
			return t.name && (r.name = t.name), t.userData && (r.userData = t.userData), r
		}
	}), bl.prototype = Object.assign(Object.create(Mc.prototype), {
		constructor: bl,
		isImageBitmapLoader: !0,
		setOptions: function(t) {
			return this.options = t, this
		},
		load: function(t, e, n, i) {
			void 0 === t && (t = ""), void 0 !== this.path && (t = this.path + t), t = this.manager.resolveURL(t);
			const r = this,
				s = _c.get(t);
			if (void 0 !== s) return r.manager.itemStart(t), setTimeout((function() {
				e && e(s), r.manager.itemEnd(t)
			}), 0), s;
			const o = {};
			o.credentials = "anonymous" === this.crossOrigin ? "same-origin" : "include", fetch(t, o).then((function(t) {
				return t.blob()
			})).then((function(t) {
				return createImageBitmap(t, r.options)
			})).then((function(n) {
				_c.add(t, n), e && e(n), r.manager.itemEnd(t)
			})).catch((function(e) {
				i && i(e), r.manager.itemError(t), r.manager.itemEnd(t)
			})), r.manager.itemStart(t)
		}
	}), Object.assign(_l.prototype, {
		moveTo: function(t, e) {
			return this.currentPath = new Kc, this.subPaths.push(this.currentPath), this.currentPath.moveTo(t, e), this
		},
		lineTo: function(t, e) {
			return this.currentPath.lineTo(t, e), this
		},
		quadraticCurveTo: function(t, e, n, i) {
			return this.currentPath.quadraticCurveTo(t, e, n, i), this
		},
		bezierCurveTo: function(t, e, n, i, r, s) {
			return this.currentPath.bezierCurveTo(t, e, n, i, r, s), this
		},
		splineThru: function(t) {
			return this.currentPath.splineThru(t), this
		},
		toShapes: function(t, e) {
			function n(t) {
				const e = [];
				for (let n = 0, i = t.length; n < i; n++) {
					const i = t[n],
						r = new tl;
					r.curves = i.curves, e.push(r)
				}
				return e
			}

			function i(t, e) {
				const n = e.length;
				let i = !1;
				for (let r = n - 1, s = 0; s < n; r = s++) {
					let n = e[r],
						o = e[s],
						a = o.x - n.x,
						c = o.y - n.y;
					if (Math.abs(c) > Number.EPSILON) {
						if (c < 0 && (n = e[s], a = -a, o = e[r], c = -c), t.y < n.y || t.y > o.y) continue;
						if (t.y === n.y) {
							if (t.x === n.x) return !0
						} else {
							const e = c * (t.x - n.x) - a * (t.y - n.y);
							if (0 === e) return !0;
							if (e < 0) continue;
							i = !i
						}
					} else {
						if (t.y !== n.y) continue;
						if (o.x <= t.x && t.x <= n.x || n.x <= t.x && t.x <= o.x) return !0
					}
				}
				return i
			}
			const r = ka.isClockWise,
				s = this.subPaths;
			if (0 === s.length) return [];
			if (!0 === e) return n(s);
			let o, a, c;
			const l = [];
			if (1 === s.length) return a = s[0], c = new tl, c.curves = a.curves, l.push(c), l;
			let h = !r(s[0].getPoints());
			h = t ? !h : h;
			const u = [],
				d = [];
			let p, f, m = [],
				g = 0;
			d[g] = void 0, m[g] = [];
			for (let e = 0, n = s.length; e < n; e++) a = s[e], p = a.getPoints(), o = r(p), o = t ? !o : o, o ? (!h && d[g] && g++, d[g] = {
				s: new tl,
				p: p
			}, d[g].s.curves = a.curves, h && g++, m[g] = []) : m[g].push({
				h: a,
				p: p[0]
			});
			if (!d[0]) return n(s);
			if (d.length > 1) {
				let t = !1;
				const e = [];
				for (let t = 0, e = d.length; t < e; t++) u[t] = [];
				for (let n = 0, r = d.length; n < r; n++) {
					const r = m[n];
					for (let s = 0; s < r.length; s++) {
						const o = r[s];
						let a = !0;
						for (let r = 0; r < d.length; r++) i(o.p, d[r].p) && (n !== r && e.push({
							froms: n,
							tos: r,
							hole: s
						}), a ? (a = !1, u[r].push(o)) : t = !0);
						a && u[n].push(o)
					}
				}
				e.length > 0 && (t || (m = u))
			}
			for (let t = 0, e = d.length; t < e; t++) {
				c = d[t].s, l.push(c), f = m[t];
				for (let t = 0, e = f.length; t < e; t++) c.holes.push(f[t].h)
			}
			return l
		}
	});
	class wl {
		constructor(t) {
			Object.defineProperty(this, "isFont", {
				value: !0
			}), this.type = "Font", this.data = t
		}
		generateShapes(t, e = 100) {
			const n = [],
				i = function(t, e, n) {
					const i = Array.from ? Array.from(t) : String(t).split(""),
						r = e / n.resolution,
						s = (n.boundingBox.yMax - n.boundingBox.yMin + n.underlineThickness) * r,
						o = [];
					let a = 0,
						c = 0;
					for (let t = 0; t < i.length; t++) {
						const e = i[t];
						if ("\n" === e) a = 0, c -= s;
						else {
							const t = Ml(e, r, a, c, n);
							a += t.offsetX, o.push(t.path)
						}
					}
					return o
				}(t, e, this.data);
			for (let t = 0, e = i.length; t < e; t++) Array.prototype.push.apply(n, i[t].toShapes());
			return n
		}
	}

	function Ml(t, e, n, i, r) {
		const s = r.glyphs[t] || r.glyphs["?"];
		if (!s) return void console.error('THREE.Font: character "' + t + '" does not exists in font family ' + r.familyName + ".");
		const o = new _l;
		let a, c, l, h, u, d, p, f;
		if (s.o) {
			const t = s._cachedOutline || (s._cachedOutline = s.o.split(" "));
			for (let r = 0, s = t.length; r < s;) {
				switch (t[r++]) {
					case "m":
						a = t[r++] * e + n, c = t[r++] * e + i, o.moveTo(a, c);
						break;
					case "l":
						a = t[r++] * e + n, c = t[r++] * e + i, o.lineTo(a, c);
						break;
					case "q":
						l = t[r++] * e + n, h = t[r++] * e + i, u = t[r++] * e + n, d = t[r++] * e + i, o.quadraticCurveTo(u, d, l, h);
						break;
					case "b":
						l = t[r++] * e + n, h = t[r++] * e + i, u = t[r++] * e + n, d = t[r++] * e + i, p = t[r++] * e + n, f = t[r++] * e + i, o.bezierCurveTo(u, d, p, f, l, h)
				}
			}
		}
		return {
			offsetX: s.ha * e,
			path: o
		}
	}

	function Sl(t) {
		Mc.call(this, t)
	}
	let Tl;
	Sl.prototype = Object.assign(Object.create(Mc.prototype), {
		constructor: Sl,
		load: function(t, e, n, i) {
			const r = this,
				s = new Tc(this.manager);
			s.setPath(this.path), s.setRequestHeader(this.requestHeader), s.setWithCredentials(r.withCredentials), s.load(t, (function(t) {
				let n;
				try {
					n = JSON.parse(t)
				} catch (e) {
					console.warn("THREE.FontLoader: typeface.js support is being deprecated. Use typeface.json instead."), n = JSON.parse(t.substring(65, t.length - 2))
				}
				const i = r.parse(n);
				e && e(i)
			}), n, i)
		},
		parse: function(t) {
			return new wl(t)
		}
	});
	const El = function() {
		return void 0 === Tl && (Tl = new(window.AudioContext || window.webkitAudioContext)), Tl
	};

	function Al(t) {
		Mc.call(this, t)
	}

	function Ll(t, e, n) {
		fl.call(this, void 0, n);
		const i = (new Vn).set(t),
			r = (new Vn).set(e),
			s = new we(i.r, i.g, i.b),
			o = new we(r.r, r.g, r.b),
			a = Math.sqrt(Math.PI),
			c = a * Math.sqrt(.75);
		this.sh.coefficients[0].copy(s).add(o).multiplyScalar(a), this.sh.coefficients[1].copy(s).sub(o).multiplyScalar(c)
	}

	function Cl(t, e) {
		fl.call(this, void 0, e);
		const n = (new Vn).set(t);
		this.sh.coefficients[0].set(n.r, n.g, n.b).multiplyScalar(2 * Math.sqrt(Math.PI))
	}
	Al.prototype = Object.assign(Object.create(Mc.prototype), {
		constructor: Al,
		load: function(t, e, n, i) {
			const r = this,
				s = new Tc(r.manager);
			s.setResponseType("arraybuffer"), s.setPath(r.path), s.setRequestHeader(r.requestHeader), s.setWithCredentials(r.withCredentials), s.load(t, (function(n) {
				try {
					const t = n.slice(0);
					El().decodeAudioData(t, (function(t) {
						e(t)
					}))
				} catch (e) {
					i ? i(e) : console.error(e), r.manager.itemError(t)
				}
			}), n, i)
		}
	}), Ll.prototype = Object.assign(Object.create(fl.prototype), {
		constructor: Ll,
		isHemisphereLightProbe: !0,
		copy: function(t) {
			return fl.prototype.copy.call(this, t), this
		},
		toJSON: function(t) {
			return fl.prototype.toJSON.call(this, t)
		}
	}), Cl.prototype = Object.assign(Object.create(fl.prototype), {
		constructor: Cl,
		isAmbientLightProbe: !0,
		copy: function(t) {
			return fl.prototype.copy.call(this, t), this
		},
		toJSON: function(t) {
			return fl.prototype.toJSON.call(this, t)
		}
	});
	const Rl = new Ze,
		Pl = new Ze;
	Object.assign(function() {
		this.type = "StereoCamera", this.aspect = 1, this.eyeSep = .064, this.cameraL = new Vi, this.cameraL.layers.enable(1), this.cameraL.matrixAutoUpdate = !1, this.cameraR = new Vi, this.cameraR.layers.enable(2), this.cameraR.matrixAutoUpdate = !1, this._cache = {
			focus: null,
			fov: null,
			aspect: null,
			near: null,
			far: null,
			zoom: null,
			eyeSep: null
		}
	}.prototype, {
		update: function(t) {
			const e = this._cache;
			if (e.focus !== t.focus || e.fov !== t.fov || e.aspect !== t.aspect * this.aspect || e.near !== t.near || e.far !== t.far || e.zoom !== t.zoom || e.eyeSep !== this.eyeSep) {
				e.focus = t.focus, e.fov = t.fov, e.aspect = t.aspect * this.aspect, e.near = t.near, e.far = t.far, e.zoom = t.zoom, e.eyeSep = this.eyeSep;
				const n = t.projectionMatrix.clone(),
					i = e.eyeSep / 2,
					r = i * e.near / e.focus,
					s = e.near * Math.tan(ue.DEG2RAD * e.fov * .5) / e.zoom;
				let o, a;
				Pl.elements[12] = -i, Rl.elements[12] = i, o = -s * e.aspect + r, a = s * e.aspect + r, n.elements[0] = 2 * e.near / (a - o), n.elements[8] = (a + o) / (a - o), this.cameraL.projectionMatrix.copy(n), o = -s * e.aspect - r, a = s * e.aspect - r, n.elements[0] = 2 * e.near / (a - o), n.elements[8] = (a + o) / (a - o), this.cameraR.projectionMatrix.copy(n)
			}
			this.cameraL.matrixWorld.copy(t.matrixWorld).multiply(Pl), this.cameraR.matrixWorld.copy(t.matrixWorld).multiply(Rl)
		}
	});
	class Dl {
		constructor(t) {
			this.autoStart = void 0 === t || t, this.startTime = 0, this.oldTime = 0, this.elapsedTime = 0, this.running = !1
		}
		start() {
			this.startTime = Ol(), this.oldTime = this.startTime, this.elapsedTime = 0, this.running = !0
		}
		stop() {
			this.getElapsedTime(), this.running = !1, this.autoStart = !1
		}
		getElapsedTime() {
			return this.getDelta(), this.elapsedTime
		}
		getDelta() {
			let t = 0;
			if (this.autoStart && !this.running) return this.start(), 0;
			if (this.running) {
				const e = Ol();
				t = (e - this.oldTime) / 1e3, this.oldTime = e, this.elapsedTime += t
			}
			return t
		}
	}

	function Ol() {
		return ("undefined" == typeof performance ? Date : performance).now()
	}

	function Il(t, e, n) {
		let i, r, s;
		switch (this.binding = t, this.valueSize = n, e) {
			case "quaternion":
				i = this._slerp, r = this._slerpAdditive, s = this._setAdditiveIdentityQuaternion, this.buffer = new Float64Array(6 * n), this._workIndex = 5;
				break;
			case "string":
			case "bool":
				i = this._select, r = this._select, s = this._setAdditiveIdentityOther, this.buffer = new Array(5 * n);
				break;
			default:
				i = this._lerp, r = this._lerpAdditive, s = this._setAdditiveIdentityNumeric, this.buffer = new Float64Array(5 * n)
		}
		this._mixBufferRegion = i, this._mixBufferRegionAdditive = r, this._setIdentity = s, this._origIndex = 3, this._addIndex = 4, this.cumulativeWeight = 0, this.cumulativeWeightAdditive = 0, this.useCount = 0, this.referenceCount = 0
	}
	Object.assign(Il.prototype, {
		accumulate: function(t, e) {
			const n = this.buffer,
				i = this.valueSize,
				r = t * i + i;
			let s = this.cumulativeWeight;
			if (0 === s) {
				for (let t = 0; t !== i; ++t) n[r + t] = n[t];
				s = e
			} else {
				s += e;
				const t = e / s;
				this._mixBufferRegion(n, r, 0, t, i)
			}
			this.cumulativeWeight = s
		},
		accumulateAdditive: function(t) {
			const e = this.buffer,
				n = this.valueSize,
				i = n * this._addIndex;
			0 === this.cumulativeWeightAdditive && this._setIdentity(), this._mixBufferRegionAdditive(e, i, 0, t, n), this.cumulativeWeightAdditive += t
		},
		apply: function(t) {
			const e = this.valueSize,
				n = this.buffer,
				i = t * e + e,
				r = this.cumulativeWeight,
				s = this.cumulativeWeightAdditive,
				o = this.binding;
			if (this.cumulativeWeight = 0, this.cumulativeWeightAdditive = 0, r < 1) {
				const t = e * this._origIndex;
				this._mixBufferRegion(n, i, t, 1 - r, e)
			}
			s > 0 && this._mixBufferRegionAdditive(n, i, this._addIndex * e, 1, e);
			for (let t = e, r = e + e; t !== r; ++t)
				if (n[t] !== n[t + e]) {
					o.setValue(n, i);
					break
				}
		},
		saveOriginalState: function() {
			const t = this.binding,
				e = this.buffer,
				n = this.valueSize,
				i = n * this._origIndex;
			t.getValue(e, i);
			for (let t = n, r = i; t !== r; ++t) e[t] = e[i + t % n];
			this._setIdentity(), this.cumulativeWeight = 0, this.cumulativeWeightAdditive = 0
		},
		restoreOriginalState: function() {
			const t = 3 * this.valueSize;
			this.binding.setValue(this.buffer, t)
		},
		_setAdditiveIdentityNumeric: function() {
			const t = this._addIndex * this.valueSize,
				e = t + this.valueSize;
			for (let n = t; n < e; n++) this.buffer[n] = 0
		},
		_setAdditiveIdentityQuaternion: function() {
			this._setAdditiveIdentityNumeric(), this.buffer[this._addIndex * this.valueSize + 3] = 1
		},
		_setAdditiveIdentityOther: function() {
			const t = this._origIndex * this.valueSize,
				e = this._addIndex * this.valueSize;
			for (let n = 0; n < this.valueSize; n++) this.buffer[e + n] = this.buffer[t + n]
		},
		_select: function(t, e, n, i, r) {
			if (i >= .5)
				for (let i = 0; i !== r; ++i) t[e + i] = t[n + i]
		},
		_slerp: function(t, e, n, i) {
			_e.slerpFlat(t, e, t, e, t, n, i)
		},
		_slerpAdditive: function(t, e, n, i, r) {
			const s = this._workIndex * r;
			_e.multiplyQuaternionsFlat(t, s, t, e, t, n), _e.slerpFlat(t, e, t, e, t, s, i)
		},
		_lerp: function(t, e, n, i, r) {
			const s = 1 - i;
			for (let o = 0; o !== r; ++o) {
				const r = e + o;
				t[r] = t[r] * s + t[n + o] * i
			}
		},
		_lerpAdditive: function(t, e, n, i, r) {
			for (let s = 0; s !== r; ++s) {
				const r = e + s;
				t[r] = t[r] + t[n + s] * i
			}
		}
	});
	const Nl = "\\[\\]\\.:\\/",
		zl = new RegExp("[\\[\\]\\.:\\/]", "g"),
		Bl = "[^\\[\\]\\.:\\/]",
		Ul = "[^" + Nl.replace("\\.", "") + "]",
		Fl = /((?:WC+[\/:])*)/.source.replace("WC", Bl),
		Hl = /(WCOD+)?/.source.replace("WCOD", Ul),
		kl = /(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC", Bl),
		Gl = /\.(WC+)(?:\[(.+)\])?/.source.replace("WC", Bl),
		jl = new RegExp("^" + Fl + Hl + kl + Gl + "$"),
		Vl = ["material", "materials", "bones"];

	function Wl(t, e, n) {
		const i = n || $l.parseTrackName(e);
		this._targetGroup = t, this._bindings = t.subscribe_(e, i)
	}

	function $l(t, e, n) {
		this.path = e, this.parsedPath = n || $l.parseTrackName(e), this.node = $l.findNode(t, this.parsedPath.nodeName) || t, this.rootNode = t
	}
	Object.assign(Wl.prototype, {
		getValue: function(t, e) {
			this.bind();
			const n = this._targetGroup.nCachedObjects_,
				i = this._bindings[n];
			void 0 !== i && i.getValue(t, e)
		},
		setValue: function(t, e) {
			const n = this._bindings;
			for (let i = this._targetGroup.nCachedObjects_, r = n.length; i !== r; ++i) n[i].setValue(t, e)
		},
		bind: function() {
			const t = this._bindings;
			for (let e = this._targetGroup.nCachedObjects_, n = t.length; e !== n; ++e) t[e].bind()
		},
		unbind: function() {
			const t = this._bindings;
			for (let e = this._targetGroup.nCachedObjects_, n = t.length; e !== n; ++e) t[e].unbind()
		}
	}), Object.assign($l, {
		Composite: Wl,
		create: function(t, e, n) {
			return t && t.isAnimationObjectGroup ? new $l.Composite(t, e, n) : new $l(t, e, n)
		},
		sanitizeNodeName: function(t) {
			return t.replace(/\s/g, "_").replace(zl, "")
		},
		parseTrackName: function(t) {
			const e = jl.exec(t);
			if (!e) throw new Error("PropertyBinding: Cannot parse trackName: " + t);
			const n = {
					nodeName: e[2],
					objectName: e[3],
					objectIndex: e[4],
					propertyName: e[5],
					propertyIndex: e[6]
				},
				i = n.nodeName && n.nodeName.lastIndexOf(".");
			if (void 0 !== i && -1 !== i) {
				const t = n.nodeName.substring(i + 1); - 1 !== Vl.indexOf(t) && (n.nodeName = n.nodeName.substring(0, i), n.objectName = t)
			}
			if (null === n.propertyName || 0 === n.propertyName.length) throw new Error("PropertyBinding: can not parse propertyName from trackName: " + t);
			return n
		},
		findNode: function(t, e) {
			if (!e || "" === e || "." === e || -1 === e || e === t.name || e === t.uuid) return t;
			if (t.skeleton) {
				const n = t.skeleton.getBoneByName(e);
				if (void 0 !== n) return n
			}
			if (t.children) {
				const n = function(t) {
						for (let i = 0; i < t.length; i++) {
							const r = t[i];
							if (r.name === e || r.uuid === e) return r;
							const s = n(r.children);
							if (s) return s
						}
						return null
					},
					i = n(t.children);
				if (i) return i
			}
			return null
		}
	}), Object.assign($l.prototype, {
		_getValue_unavailable: function() {},
		_setValue_unavailable: function() {},
		BindingType: {
			Direct: 0,
			EntireArray: 1,
			ArrayElement: 2,
			HasFromToArray: 3
		},
		Versioning: {
			None: 0,
			NeedsUpdate: 1,
			MatrixWorldNeedsUpdate: 2
		},
		GetterByBindingType: [function(t, e) {
			t[e] = this.node[this.propertyName]
		}, function(t, e) {
			const n = this.resolvedProperty;
			for (let i = 0, r = n.length; i !== r; ++i) t[e++] = n[i]
		}, function(t, e) {
			t[e] = this.resolvedProperty[this.propertyIndex]
		}, function(t, e) {
			this.resolvedProperty.toArray(t, e)
		}],
		SetterByBindingTypeAndVersioning: [
			[function(t, e) {
				this.targetObject[this.propertyName] = t[e]
			}, function(t, e) {
				this.targetObject[this.propertyName] = t[e], this.targetObject.needsUpdate = !0
			}, function(t, e) {
				this.targetObject[this.propertyName] = t[e], this.targetObject.matrixWorldNeedsUpdate = !0
			}],
			[function(t, e) {
				const n = this.resolvedProperty;
				for (let i = 0, r = n.length; i !== r; ++i) n[i] = t[e++]
			}, function(t, e) {
				const n = this.resolvedProperty;
				for (let i = 0, r = n.length; i !== r; ++i) n[i] = t[e++];
				this.targetObject.needsUpdate = !0
			}, function(t, e) {
				const n = this.resolvedProperty;
				for (let i = 0, r = n.length; i !== r; ++i) n[i] = t[e++];
				this.targetObject.matrixWorldNeedsUpdate = !0
			}],
			[function(t, e) {
				this.resolvedProperty[this.propertyIndex] = t[e]
			}, function(t, e) {
				this.resolvedProperty[this.propertyIndex] = t[e], this.targetObject.needsUpdate = !0
			}, function(t, e) {
				this.resolvedProperty[this.propertyIndex] = t[e], this.targetObject.matrixWorldNeedsUpdate = !0
			}],
			[function(t, e) {
				this.resolvedProperty.fromArray(t, e)
			}, function(t, e) {
				this.resolvedProperty.fromArray(t, e), this.targetObject.needsUpdate = !0
			}, function(t, e) {
				this.resolvedProperty.fromArray(t, e), this.targetObject.matrixWorldNeedsUpdate = !0
			}]
		],
		getValue: function(t, e) {
			this.bind(), this.getValue(t, e)
		},
		setValue: function(t, e) {
			this.bind(), this.setValue(t, e)
		},
		bind: function() {
			let t = this.node;
			const e = this.parsedPath,
				n = e.objectName,
				i = e.propertyName;
			let r = e.propertyIndex;
			if (t || (t = $l.findNode(this.rootNode, e.nodeName) || this.rootNode, this.node = t), this.getValue = this._getValue_unavailable, this.setValue = this._setValue_unavailable, !t) return void console.error("THREE.PropertyBinding: Trying to update node for track: " + this.path + " but it wasn't found.");
			if (n) {
				let i = e.objectIndex;
				switch (n) {
					case "materials":
						if (!t.material) return void console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.", this);
						if (!t.material.materials) return void console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.", this);
						t = t.material.materials;
						break;
					case "bones":
						if (!t.skeleton) return void console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.", this);
						t = t.skeleton.bones;
						for (let e = 0; e < t.length; e++)
							if (t[e].name === i) {
								i = e;
								break
							} break;
					default:
						if (void 0 === t[n]) return void console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.", this);
						t = t[n]
				}
				if (void 0 !== i) {
					if (void 0 === t[i]) return void console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.", this, t);
					t = t[i]
				}
			}
			const s = t[i];
			if (void 0 === s) {
				const n = e.nodeName;
				return void console.error("THREE.PropertyBinding: Trying to update property for track: " + n + "." + i + " but it wasn't found.", t)
			}
			let o = this.Versioning.None;
			this.targetObject = t, void 0 !== t.needsUpdate ? o = this.Versioning.NeedsUpdate : void 0 !== t.matrixWorldNeedsUpdate && (o = this.Versioning.MatrixWorldNeedsUpdate);
			let a = this.BindingType.Direct;
			if (void 0 !== r) {
				if ("morphTargetInfluences" === i) {
					if (!t.geometry) return void console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.", this);
					if (!t.geometry.isBufferGeometry) return void console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences on THREE.Geometry. Use THREE.BufferGeometry instead.", this);
					if (!t.geometry.morphAttributes) return void console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.", this);
					void 0 !== t.morphTargetDictionary[r] && (r = t.morphTargetDictionary[r])
				}
				a = this.BindingType.ArrayElement, this.resolvedProperty = s, this.propertyIndex = r
			} else void 0 !== s.fromArray && void 0 !== s.toArray ? (a = this.BindingType.HasFromToArray, this.resolvedProperty = s) : Array.isArray(s) ? (a = this.BindingType.EntireArray, this.resolvedProperty = s) : this.propertyName = i;
			this.getValue = this.GetterByBindingType[a], this.setValue = this.SetterByBindingTypeAndVersioning[a][o]
		},
		unbind: function() {
			this.node = null, this.getValue = this._getValue_unbound, this.setValue = this._setValue_unbound
		}
	}), Object.assign($l.prototype, {
		_getValue_unbound: $l.prototype.getValue,
		_setValue_unbound: $l.prototype.setValue
	}), Object.assign(function() {
		this.uuid = ue.generateUUID(), this._objects = Array.prototype.slice.call(arguments), this.nCachedObjects_ = 0;
		const t = {};
		this._indicesByUUID = t;
		for (let e = 0, n = arguments.length; e !== n; ++e) t[arguments[e].uuid] = e;
		this._paths = [], this._parsedPaths = [], this._bindings = [], this._bindingsIndicesByPath = {};
		const e = this;
		this.stats = {
			objects: {
				get total() {
					return e._objects.length
				},
				get inUse() {
					return this.total - e.nCachedObjects_
				}
			},
			get bindingsPerObject() {
				return e._bindings.length
			}
		}
	}.prototype, {
		isAnimationObjectGroup: !0,
		add: function() {
			const t = this._objects,
				e = this._indicesByUUID,
				n = this._paths,
				i = this._parsedPaths,
				r = this._bindings,
				s = r.length;
			let o, a = t.length,
				c = this.nCachedObjects_;
			for (let l = 0, h = arguments.length; l !== h; ++l) {
				const h = arguments[l],
					u = h.uuid;
				let d = e[u];
				if (void 0 === d) {
					d = a++, e[u] = d, t.push(h);
					for (let t = 0, e = s; t !== e; ++t) r[t].push(new $l(h, n[t], i[t]))
				} else if (d < c) {
					o = t[d];
					const a = --c,
						l = t[a];
					e[l.uuid] = d, t[d] = l, e[u] = a, t[a] = h;
					for (let t = 0, e = s; t !== e; ++t) {
						const e = r[t],
							s = e[a];
						let o = e[d];
						e[d] = s, void 0 === o && (o = new $l(h, n[t], i[t])), e[a] = o
					}
				} else t[d] !== o && console.error("THREE.AnimationObjectGroup: Different objects with the same UUID detected. Clean the caches or recreate your infrastructure when reloading scenes.")
			}
			this.nCachedObjects_ = c
		},
		remove: function() {
			const t = this._objects,
				e = this._indicesByUUID,
				n = this._bindings,
				i = n.length;
			let r = this.nCachedObjects_;
			for (let s = 0, o = arguments.length; s !== o; ++s) {
				const o = arguments[s],
					a = o.uuid,
					c = e[a];
				if (void 0 !== c && c >= r) {
					const s = r++,
						l = t[s];
					e[l.uuid] = c, t[c] = l, e[a] = s, t[s] = o;
					for (let t = 0, e = i; t !== e; ++t) {
						const e = n[t],
							i = e[s],
							r = e[c];
						e[c] = i, e[s] = r
					}
				}
			}
			this.nCachedObjects_ = r
		},
		uncache: function() {
			const t = this._objects,
				e = this._indicesByUUID,
				n = this._bindings,
				i = n.length;
			let r = this.nCachedObjects_,
				s = t.length;
			for (let o = 0, a = arguments.length; o !== a; ++o) {
				const a = arguments[o].uuid,
					c = e[a];
				if (void 0 !== c)
					if (delete e[a], c < r) {
						const o = --r,
							a = t[o],
							l = --s,
							h = t[l];
						e[a.uuid] = c, t[c] = a, e[h.uuid] = o, t[o] = h, t.pop();
						for (let t = 0, e = i; t !== e; ++t) {
							const e = n[t],
								i = e[o],
								r = e[l];
							e[c] = i, e[o] = r, e.pop()
						}
					} else {
						const r = --s,
							o = t[r];
						r > 0 && (e[o.uuid] = c), t[c] = o, t.pop();
						for (let t = 0, e = i; t !== e; ++t) {
							const e = n[t];
							e[c] = e[r], e.pop()
						}
					}
			}
			this.nCachedObjects_ = r
		},
		subscribe_: function(t, e) {
			const n = this._bindingsIndicesByPath;
			let i = n[t];
			const r = this._bindings;
			if (void 0 !== i) return r[i];
			const s = this._paths,
				o = this._parsedPaths,
				a = this._objects,
				c = a.length,
				l = this.nCachedObjects_,
				h = new Array(c);
			i = r.length, n[t] = i, s.push(t), o.push(e), r.push(h);
			for (let n = l, i = a.length; n !== i; ++n) {
				const i = a[n];
				h[n] = new $l(i, t, e)
			}
			return h
		},
		unsubscribe_: function(t) {
			const e = this._bindingsIndicesByPath,
				n = e[t];
			if (void 0 !== n) {
				const i = this._paths,
					r = this._parsedPaths,
					s = this._bindings,
					o = s.length - 1,
					a = s[o];
				e[t[o]] = n, s[n] = a, s.pop(), r[n] = r[o], r.pop(), i[n] = i[o], i.pop()
			}
		}
	});
	class ql {
		constructor(t, e, n = null, i = e.blendMode) {
			this._mixer = t, this._clip = e, this._localRoot = n, this.blendMode = i;
			const r = e.tracks,
				s = r.length,
				o = new Array(s),
				a = {
					endingStart: Kt,
					endingEnd: Kt
				};
			for (let t = 0; t !== s; ++t) {
				const e = r[t].createInterpolant(null);
				o[t] = e, e.settings = a
			}
			this._interpolantSettings = a, this._interpolants = o, this._propertyBindings = new Array(s), this._cacheIndex = null, this._byClipCacheIndex = null, this._timeScaleInterpolant = null, this._weightInterpolant = null, this.loop = 2201, this._loopCount = -1, this._startTime = null, this.time = 0, this.timeScale = 1, this._effectiveTimeScale = 1, this.weight = 1, this._effectiveWeight = 1, this.repetitions = 1 / 0, this.paused = !1, this.enabled = !0, this.clampWhenFinished = !1, this.zeroSlopeAtStart = !0, this.zeroSlopeAtEnd = !0
		}
		play() {
			return this._mixer._activateAction(this), this
		}
		stop() {
			return this._mixer._deactivateAction(this), this.reset()
		}
		reset() {
			return this.paused = !1, this.enabled = !0, this.time = 0, this._loopCount = -1, this._startTime = null, this.stopFading().stopWarping()
		}
		isRunning() {
			return this.enabled && !this.paused && 0 !== this.timeScale && null === this._startTime && this._mixer._isActiveAction(this)
		}
		isScheduled() {
			return this._mixer._isActiveAction(this)
		}
		startAt(t) {
			return this._startTime = t, this
		}
		setLoop(t, e) {
			return this.loop = t, this.repetitions = e, this
		}
		setEffectiveWeight(t) {
			return this.weight = t, this._effectiveWeight = this.enabled ? t : 0, this.stopFading()
		}
		getEffectiveWeight() {
			return this._effectiveWeight
		}
		fadeIn(t) {
			return this._scheduleFading(t, 0, 1)
		}
		fadeOut(t) {
			return this._scheduleFading(t, 1, 0)
		}
		crossFadeFrom(t, e, n) {
			if (t.fadeOut(e), this.fadeIn(e), n) {
				const n = this._clip.duration,
					i = t._clip.duration,
					r = i / n,
					s = n / i;
				t.warp(1, r, e), this.warp(s, 1, e)
			}
			return this
		}
		crossFadeTo(t, e, n) {
			return t.crossFadeFrom(this, e, n)
		}
		stopFading() {
			const t = this._weightInterpolant;
			return null !== t && (this._weightInterpolant = null, this._mixer._takeBackControlInterpolant(t)), this
		}
		setEffectiveTimeScale(t) {
			return this.timeScale = t, this._effectiveTimeScale = this.paused ? 0 : t, this.stopWarping()
		}
		getEffectiveTimeScale() {
			return this._effectiveTimeScale
		}
		setDuration(t) {
			return this.timeScale = this._clip.duration / t, this.stopWarping()
		}
		syncWith(t) {
			return this.time = t.time, this.timeScale = t.timeScale, this.stopWarping()
		}
		halt(t) {
			return this.warp(this._effectiveTimeScale, 0, t)
		}
		warp(t, e, n) {
			const i = this._mixer,
				r = i.time,
				s = this.timeScale;
			let o = this._timeScaleInterpolant;
			null === o && (o = i._lendControlInterpolant(), this._timeScaleInterpolant = o);
			const a = o.parameterPositions,
				c = o.sampleValues;
			return a[0] = r, a[1] = r + n, c[0] = t / s, c[1] = e / s, this
		}
		stopWarping() {
			const t = this._timeScaleInterpolant;
			return null !== t && (this._timeScaleInterpolant = null, this._mixer._takeBackControlInterpolant(t)), this
		}
		getMixer() {
			return this._mixer
		}
		getClip() {
			return this._clip
		}
		getRoot() {
			return this._localRoot || this._mixer._root
		}
		_update(t, e, n, i) {
			if (!this.enabled) return void this._updateWeight(t);
			const r = this._startTime;
			if (null !== r) {
				const i = (t - r) * n;
				if (i < 0 || 0 === n) return;
				this._startTime = null, e = n * i
			}
			e *= this._updateTimeScale(t);
			const s = this._updateTime(e),
				o = this._updateWeight(t);
			if (o > 0) {
				const t = this._interpolants,
					e = this._propertyBindings;
				switch (this.blendMode) {
					case 2501:
						for (let n = 0, i = t.length; n !== i; ++n) t[n].evaluate(s), e[n].accumulateAdditive(o);
						break;
					case ne:
					default:
						for (let n = 0, r = t.length; n !== r; ++n) t[n].evaluate(s), e[n].accumulate(i, o)
				}
			}
		}
		_updateWeight(t) {
			let e = 0;
			if (this.enabled) {
				e = this.weight;
				const n = this._weightInterpolant;
				if (null !== n) {
					const i = n.evaluate(t)[0];
					e *= i, t > n.parameterPositions[1] && (this.stopFading(), 0 === i && (this.enabled = !1))
				}
			}
			return this._effectiveWeight = e, e
		}
		_updateTimeScale(t) {
			let e = 0;
			if (!this.paused) {
				e = this.timeScale;
				const n = this._timeScaleInterpolant;
				if (null !== n) {
					e *= n.evaluate(t)[0], t > n.parameterPositions[1] && (this.stopWarping(), 0 === e ? this.paused = !0 : this.timeScale = e)
				}
			}
			return this._effectiveTimeScale = e, e
		}
		_updateTime(t) {
			const e = this._clip.duration,
				n = this.loop;
			let i = this.time + t,
				r = this._loopCount;
			const s = 2202 === n;
			if (0 === t) return -1 === r ? i : s && 1 == (1 & r) ? e - i : i;
			if (2200 === n) {
				-1 === r && (this._loopCount = 0, this._setEndings(!0, !0, !1));
				t: {
					if (i >= e) i = e;
					else {
						if (!(i < 0)) {
							this.time = i;
							break t
						}
						i = 0
					}
					this.clampWhenFinished ? this.paused = !0 : this.enabled = !1,
					this.time = i,
					this._mixer.dispatchEvent({
						type: "finished",
						action: this,
						direction: t < 0 ? -1 : 1
					})
				}
			} else {
				if (-1 === r && (t >= 0 ? (r = 0, this._setEndings(!0, 0 === this.repetitions, s)) : this._setEndings(0 === this.repetitions, !0, s)), i >= e || i < 0) {
					const n = Math.floor(i / e);
					i -= e * n, r += Math.abs(n);
					const o = this.repetitions - r;
					if (o <= 0) this.clampWhenFinished ? this.paused = !0 : this.enabled = !1, i = t > 0 ? e : 0, this.time = i, this._mixer.dispatchEvent({
						type: "finished",
						action: this,
						direction: t > 0 ? 1 : -1
					});
					else {
						if (1 === o) {
							const e = t < 0;
							this._setEndings(e, !e, s)
						} else this._setEndings(!1, !1, s);
						this._loopCount = r, this.time = i, this._mixer.dispatchEvent({
							type: "loop",
							action: this,
							loopDelta: n
						})
					}
				} else this.time = i;
				if (s && 1 == (1 & r)) return e - i
			}
			return i
		}
		_setEndings(t, e, n) {
			const i = this._interpolantSettings;
			n ? (i.endingStart = te, i.endingEnd = te) : (i.endingStart = t ? this.zeroSlopeAtStart ? te : Kt : ee, i.endingEnd = e ? this.zeroSlopeAtEnd ? te : Kt : ee)
		}
		_scheduleFading(t, e, n) {
			const i = this._mixer,
				r = i.time;
			let s = this._weightInterpolant;
			null === s && (s = i._lendControlInterpolant(), this._weightInterpolant = s);
			const o = s.parameterPositions,
				a = s.sampleValues;
			return o[0] = r, a[0] = e, o[1] = r + t, a[1] = n, this
		}
	}

	function Xl(t) {
		this._root = t, this._initMemoryManager(), this._accuIndex = 0, this.time = 0, this.timeScale = 1
	}
	Xl.prototype = Object.assign(Object.create(ce.prototype), {
		constructor: Xl,
		_bindAction: function(t, e) {
			const n = t._localRoot || this._root,
				i = t._clip.tracks,
				r = i.length,
				s = t._propertyBindings,
				o = t._interpolants,
				a = n.uuid,
				c = this._bindingsByRootAndName;
			let l = c[a];
			void 0 === l && (l = {}, c[a] = l);
			for (let t = 0; t !== r; ++t) {
				const r = i[t],
					c = r.name;
				let h = l[c];
				if (void 0 !== h) s[t] = h;
				else {
					if (h = s[t], void 0 !== h) {
						null === h._cacheIndex && (++h.referenceCount, this._addInactiveBinding(h, a, c));
						continue
					}
					const i = e && e._propertyBindings[t].binding.parsedPath;
					h = new Il($l.create(n, c, i), r.ValueTypeName, r.getValueSize()), ++h.referenceCount, this._addInactiveBinding(h, a, c), s[t] = h
				}
				o[t].resultBuffer = h.buffer
			}
		},
		_activateAction: function(t) {
			if (!this._isActiveAction(t)) {
				if (null === t._cacheIndex) {
					const e = (t._localRoot || this._root).uuid,
						n = t._clip.uuid,
						i = this._actionsByClip[n];
					this._bindAction(t, i && i.knownActions[0]), this._addInactiveAction(t, n, e)
				}
				const e = t._propertyBindings;
				for (let t = 0, n = e.length; t !== n; ++t) {
					const n = e[t];
					0 == n.useCount++ && (this._lendBinding(n), n.saveOriginalState())
				}
				this._lendAction(t)
			}
		},
		_deactivateAction: function(t) {
			if (this._isActiveAction(t)) {
				const e = t._propertyBindings;
				for (let t = 0, n = e.length; t !== n; ++t) {
					const n = e[t];
					0 == --n.useCount && (n.restoreOriginalState(), this._takeBackBinding(n))
				}
				this._takeBackAction(t)
			}
		},
		_initMemoryManager: function() {
			this._actions = [], this._nActiveActions = 0, this._actionsByClip = {}, this._bindings = [], this._nActiveBindings = 0, this._bindingsByRootAndName = {}, this._controlInterpolants = [], this._nActiveControlInterpolants = 0;
			const t = this;
			this.stats = {
				actions: {
					get total() {
						return t._actions.length
					},
					get inUse() {
						return t._nActiveActions
					}
				},
				bindings: {
					get total() {
						return t._bindings.length
					},
					get inUse() {
						return t._nActiveBindings
					}
				},
				controlInterpolants: {
					get total() {
						return t._controlInterpolants.length
					},
					get inUse() {
						return t._nActiveControlInterpolants
					}
				}
			}
		},
		_isActiveAction: function(t) {
			const e = t._cacheIndex;
			return null !== e && e < this._nActiveActions
		},
		_addInactiveAction: function(t, e, n) {
			const i = this._actions,
				r = this._actionsByClip;
			let s = r[e];
			if (void 0 === s) s = {
				knownActions: [t],
				actionByRoot: {}
			}, t._byClipCacheIndex = 0, r[e] = s;
			else {
				const e = s.knownActions;
				t._byClipCacheIndex = e.length, e.push(t)
			}
			t._cacheIndex = i.length, i.push(t), s.actionByRoot[n] = t
		},
		_removeInactiveAction: function(t) {
			const e = this._actions,
				n = e[e.length - 1],
				i = t._cacheIndex;
			n._cacheIndex = i, e[i] = n, e.pop(), t._cacheIndex = null;
			const r = t._clip.uuid,
				s = this._actionsByClip,
				o = s[r],
				a = o.knownActions,
				c = a[a.length - 1],
				l = t._byClipCacheIndex;
			c._byClipCacheIndex = l, a[l] = c, a.pop(), t._byClipCacheIndex = null;
			delete o.actionByRoot[(t._localRoot || this._root).uuid], 0 === a.length && delete s[r], this._removeInactiveBindingsForAction(t)
		},
		_removeInactiveBindingsForAction: function(t) {
			const e = t._propertyBindings;
			for (let t = 0, n = e.length; t !== n; ++t) {
				const n = e[t];
				0 == --n.referenceCount && this._removeInactiveBinding(n)
			}
		},
		_lendAction: function(t) {
			const e = this._actions,
				n = t._cacheIndex,
				i = this._nActiveActions++,
				r = e[i];
			t._cacheIndex = i, e[i] = t, r._cacheIndex = n, e[n] = r
		},
		_takeBackAction: function(t) {
			const e = this._actions,
				n = t._cacheIndex,
				i = --this._nActiveActions,
				r = e[i];
			t._cacheIndex = i, e[i] = t, r._cacheIndex = n, e[n] = r
		},
		_addInactiveBinding: function(t, e, n) {
			const i = this._bindingsByRootAndName,
				r = this._bindings;
			let s = i[e];
			void 0 === s && (s = {}, i[e] = s), s[n] = t, t._cacheIndex = r.length, r.push(t)
		},
		_removeInactiveBinding: function(t) {
			const e = this._bindings,
				n = t.binding,
				i = n.rootNode.uuid,
				r = n.path,
				s = this._bindingsByRootAndName,
				o = s[i],
				a = e[e.length - 1],
				c = t._cacheIndex;
			a._cacheIndex = c, e[c] = a, e.pop(), delete o[r], 0 === Object.keys(o).length && delete s[i]
		},
		_lendBinding: function(t) {
			const e = this._bindings,
				n = t._cacheIndex,
				i = this._nActiveBindings++,
				r = e[i];
			t._cacheIndex = i, e[i] = t, r._cacheIndex = n, e[n] = r
		},
		_takeBackBinding: function(t) {
			const e = this._bindings,
				n = t._cacheIndex,
				i = --this._nActiveBindings,
				r = e[i];
			t._cacheIndex = i, e[i] = t, r._cacheIndex = n, e[n] = r
		},
		_lendControlInterpolant: function() {
			const t = this._controlInterpolants,
				e = this._nActiveControlInterpolants++;
			let n = t[e];
			return void 0 === n && (n = new lc(new Float32Array(2), new Float32Array(2), 1, this._controlInterpolantsResultBuffer), n.__cacheIndex = e, t[e] = n), n
		},
		_takeBackControlInterpolant: function(t) {
			const e = this._controlInterpolants,
				n = t.__cacheIndex,
				i = --this._nActiveControlInterpolants,
				r = e[i];
			t.__cacheIndex = i, e[i] = t, r.__cacheIndex = n, e[n] = r
		},
		_controlInterpolantsResultBuffer: new Float32Array(1),
		clipAction: function(t, e, n) {
			const i = e || this._root,
				r = i.uuid;
			let s = "string" == typeof t ? xc.findByName(i, t) : t;
			const o = null !== s ? s.uuid : t,
				a = this._actionsByClip[o];
			let c = null;
			if (void 0 === n && (n = null !== s ? s.blendMode : ne), void 0 !== a) {
				const t = a.actionByRoot[r];
				if (void 0 !== t && t.blendMode === n) return t;
				c = a.knownActions[0], null === s && (s = c._clip)
			}
			if (null === s) return null;
			const l = new ql(this, s, e, n);
			return this._bindAction(l, c), this._addInactiveAction(l, o, r), l
		},
		existingAction: function(t, e) {
			const n = e || this._root,
				i = n.uuid,
				r = "string" == typeof t ? xc.findByName(n, t) : t,
				s = r ? r.uuid : t,
				o = this._actionsByClip[s];
			return void 0 !== o && o.actionByRoot[i] || null
		},
		stopAllAction: function() {
			const t = this._actions;
			for (let e = this._nActiveActions - 1; e >= 0; --e) t[e].stop();
			return this
		},
		update: function(t) {
			t *= this.timeScale;
			const e = this._actions,
				n = this._nActiveActions,
				i = this.time += t,
				r = Math.sign(t),
				s = this._accuIndex ^= 1;
			for (let o = 0; o !== n; ++o) {
				e[o]._update(i, t, r, s)
			}
			const o = this._bindings,
				a = this._nActiveBindings;
			for (let t = 0; t !== a; ++t) o[t].apply(s);
			return this
		},
		setTime: function(t) {
			this.time = 0;
			for (let t = 0; t < this._actions.length; t++) this._actions[t].time = 0;
			return this.update(t)
		},
		getRoot: function() {
			return this._root
		},
		uncacheClip: function(t) {
			const e = this._actions,
				n = t.uuid,
				i = this._actionsByClip,
				r = i[n];
			if (void 0 !== r) {
				const t = r.knownActions;
				for (let n = 0, i = t.length; n !== i; ++n) {
					const i = t[n];
					this._deactivateAction(i);
					const r = i._cacheIndex,
						s = e[e.length - 1];
					i._cacheIndex = null, i._byClipCacheIndex = null, s._cacheIndex = r, e[r] = s, e.pop(), this._removeInactiveBindingsForAction(i)
				}
				delete i[n]
			}
		},
		uncacheRoot: function(t) {
			const e = t.uuid,
				n = this._actionsByClip;
			for (const t in n) {
				const i = n[t].actionByRoot[e];
				void 0 !== i && (this._deactivateAction(i), this._removeInactiveAction(i))
			}
			const i = this._bindingsByRootAndName[e];
			if (void 0 !== i)
				for (const t in i) {
					const e = i[t];
					e.restoreOriginalState(), this._removeInactiveBinding(e)
				}
		},
		uncacheAction: function(t, e) {
			const n = this.existingAction(t, e);
			null !== n && (this._deactivateAction(n), this._removeInactiveAction(n))
		}
	});
	class Yl {
		constructor(t) {
			"string" == typeof t && (console.warn("THREE.Uniform: Type parameter is no longer needed."), t = arguments[1]), this.value = t
		}
		clone() {
			return new Yl(void 0 === this.value.clone ? this.value : this.value.clone())
		}
	}

	function Zl(t, e, n) {
		co.call(this, t, e), this.meshPerAttribute = n || 1
	}

	function Jl(t, e, n, i, r) {
		this.buffer = t, this.type = e, this.itemSize = n, this.elementSize = i, this.count = r, this.version = 0
	}

	function Ql(t, e, n, i) {
		this.ray = new Ye(t, e), this.near = n || 0, this.far = i || 1 / 0, this.camera = null, this.layers = new cn, this.params = {
			Mesh: {},
			Line: {
				threshold: 1
			},
			LOD: {},
			Points: {
				threshold: 1
			},
			Sprite: {}
		}, Object.defineProperties(this.params, {
			PointCloud: {
				get: function() {
					return console.warn("THREE.Raycaster: params.PointCloud has been renamed to params.Points."), this.Points
				}
			}
		})
	}

	function Kl(t, e) {
		return t.distance - e.distance
	}

	function th(t, e, n, i) {
		if (t.layers.test(e.layers) && t.raycast(e, n), !0 === i) {
			const i = t.children;
			for (let t = 0, r = i.length; t < r; t++) th(i[t], e, n, !0)
		}
	}
	Zl.prototype = Object.assign(Object.create(co.prototype), {
		constructor: Zl,
		isInstancedInterleavedBuffer: !0,
		copy: function(t) {
			return co.prototype.copy.call(this, t), this.meshPerAttribute = t.meshPerAttribute, this
		},
		clone: function(t) {
			const e = co.prototype.clone.call(this, t);
			return e.meshPerAttribute = this.meshPerAttribute, e
		},
		toJSON: function(t) {
			const e = co.prototype.toJSON.call(this, t);
			return e.isInstancedInterleavedBuffer = !0, e.meshPerAttribute = this.meshPerAttribute, e
		}
	}), Object.defineProperty(Jl.prototype, "needsUpdate", {
		set: function(t) {
			!0 === t && this.version++
		}
	}), Object.assign(Jl.prototype, {
		isGLBufferAttribute: !0,
		setBuffer: function(t) {
			return this.buffer = t, this
		},
		setType: function(t, e) {
			return this.type = t, this.elementSize = e, this
		},
		setItemSize: function(t) {
			return this.itemSize = t, this
		},
		setCount: function(t) {
			return this.count = t, this
		}
	}), Object.assign(Ql.prototype, {
		set: function(t, e) {
			this.ray.set(t, e)
		},
		setFromCamera: function(t, e) {
			e && e.isPerspectiveCamera ? (this.ray.origin.setFromMatrixPosition(e.matrixWorld), this.ray.direction.set(t.x, t.y, .5).unproject(e).sub(this.ray.origin).normalize(), this.camera = e) : e && e.isOrthographicCamera ? (this.ray.origin.set(t.x, t.y, (e.near + e.far) / (e.near - e.far)).unproject(e), this.ray.direction.set(0, 0, -1).transformDirection(e.matrixWorld), this.camera = e) : console.error("THREE.Raycaster: Unsupported camera type: " + e.type)
		},
		intersectObject: function(t, e, n) {
			const i = n || [];
			return th(t, this, i, e), i.sort(Kl), i
		},
		intersectObjects: function(t, e, n) {
			const i = n || [];
			if (!1 === Array.isArray(t)) return console.warn("THREE.Raycaster.intersectObjects: objects is not an Array."), i;
			for (let n = 0, r = t.length; n < r; n++) th(t[n], this, i, e);
			return i.sort(Kl), i
		}
	});
	class eh {
		constructor(t = 1, e = 0, n = 0) {
			return this.radius = t, this.phi = e, this.theta = n, this
		}
		set(t, e, n) {
			return this.radius = t, this.phi = e, this.theta = n, this
		}
		clone() {
			return (new this.constructor).copy(this)
		}
		copy(t) {
			return this.radius = t.radius, this.phi = t.phi, this.theta = t.theta, this
		}
		makeSafe() {
			const t = 1e-6;
			return this.phi = Math.max(t, Math.min(Math.PI - t, this.phi)), this
		}
		setFromVector3(t) {
			return this.setFromCartesianCoords(t.x, t.y, t.z)
		}
		setFromCartesianCoords(t, e, n) {
			return this.radius = Math.sqrt(t * t + e * e + n * n), 0 === this.radius ? (this.theta = 0, this.phi = 0) : (this.theta = Math.atan2(t, n), this.phi = Math.acos(ue.clamp(e / this.radius, -1, 1))), this
		}
	}
	const nh = new de;

	function ih(t) {
		wn.call(this), this.material = t, this.render = function() {}, this.hasPositions = !1, this.hasNormals = !1, this.hasColors = !1, this.hasUvs = !1, this.positionArray = null, this.normalArray = null, this.colorArray = null, this.uvArray = null, this.count = 0
	}
	ih.prototype = Object.create(wn.prototype), ih.prototype.constructor = ih, ih.prototype.isImmediateRenderObject = !0;
	const rh = new Xn({
		side: 1,
		depthWrite: !1,
		depthTest: !1
	});
	new zi(new Ui, rh);

	function sh(t) {
		console.warn("THREE.Spline has been removed. Use THREE.CatmullRomCurve3 instead."), Hc.call(this, t), this.type = "catmullrom"
	}
	Dc.create = function(t, e) {
		return console.log("THREE.Curve.create() has been deprecated"), t.prototype = Object.create(Dc.prototype), t.prototype.constructor = t, t.prototype.getPoint = e, t
	}, Object.assign(Kc.prototype, {
		fromPoints: function(t) {
			return console.warn("THREE.Path: .fromPoints() has been renamed to .setFromPoints()."), this.setFromPoints(t)
		}
	}), sh.prototype = Object.create(Hc.prototype), Object.assign(sh.prototype, {
		initFromArray: function() {
			console.error("THREE.Spline: .initFromArray() has been removed.")
		},
		getControlPointsArray: function() {
			console.error("THREE.Spline: .getControlPointsArray() has been removed.")
		},
		reparametrizeByArcLength: function() {
			console.error("THREE.Spline: .reparametrizeByArcLength() has been removed.")
		}
	}), Object.assign(Mc.prototype, {
		extractUrlBase: function(t) {
			return console.warn("THREE.Loader: .extractUrlBase() has been deprecated. Use THREE.LoaderUtils.extractUrlBase() instead."), gl(t)
		}
	}), Mc.Handlers = {
		add: function() {
			console.error("THREE.Loader: Handlers.add() has been removed. Use LoadingManager.addHandler() instead.")
		},
		get: function() {
			console.error("THREE.Loader: Handlers.get() has been removed. Use LoadingManager.getHandler() instead.")
		}
	}, Object.assign(class {
		constructor(t, e) {
			Object.defineProperty(this, "isBox2", {
				value: !0
			}), this.min = void 0 !== t ? t : new de(1 / 0, 1 / 0), this.max = void 0 !== e ? e : new de(-1 / 0, -1 / 0)
		}
		set(t, e) {
			return this.min.copy(t), this.max.copy(e), this
		}
		setFromPoints(t) {
			this.makeEmpty();
			for (let e = 0, n = t.length; e < n; e++) this.expandByPoint(t[e]);
			return this
		}
		setFromCenterAndSize(t, e) {
			const n = nh.copy(e).multiplyScalar(.5);
			return this.min.copy(t).sub(n), this.max.copy(t).add(n), this
		}
		clone() {
			return (new this.constructor).copy(this)
		}
		copy(t) {
			return this.min.copy(t.min), this.max.copy(t.max), this
		}
		makeEmpty() {
			return this.min.x = this.min.y = 1 / 0, this.max.x = this.max.y = -1 / 0, this
		}
		isEmpty() {
			return this.max.x < this.min.x || this.max.y < this.min.y
		}
		getCenter(t) {
			return void 0 === t && (console.warn("THREE.Box2: .getCenter() target is now required"), t = new de), this.isEmpty() ? t.set(0, 0) : t.addVectors(this.min, this.max).multiplyScalar(.5)
		}
		getSize(t) {
			return void 0 === t && (console.warn("THREE.Box2: .getSize() target is now required"), t = new de), this.isEmpty() ? t.set(0, 0) : t.subVectors(this.max, this.min)
		}
		expandByPoint(t) {
			return this.min.min(t), this.max.max(t), this
		}
		expandByVector(t) {
			return this.min.sub(t), this.max.add(t), this
		}
		expandByScalar(t) {
			return this.min.addScalar(-t), this.max.addScalar(t), this
		}
		containsPoint(t) {
			return !(t.x < this.min.x || t.x > this.max.x || t.y < this.min.y || t.y > this.max.y)
		}
		containsBox(t) {
			return this.min.x <= t.min.x && t.max.x <= this.max.x && this.min.y <= t.min.y && t.max.y <= this.max.y
		}
		getParameter(t, e) {
			return void 0 === e && (console.warn("THREE.Box2: .getParameter() target is now required"), e = new de), e.set((t.x - this.min.x) / (this.max.x - this.min.x), (t.y - this.min.y) / (this.max.y - this.min.y))
		}
		intersectsBox(t) {
			return !(t.max.x < this.min.x || t.min.x > this.max.x || t.max.y < this.min.y || t.min.y > this.max.y)
		}
		clampPoint(t, e) {
			return void 0 === e && (console.warn("THREE.Box2: .clampPoint() target is now required"), e = new de), e.copy(t).clamp(this.min, this.max)
		}
		distanceToPoint(t) {
			return nh.copy(t).clamp(this.min, this.max).sub(t).length()
		}
		intersect(t) {
			return this.min.max(t.min), this.max.min(t.max), this
		}
		union(t) {
			return this.min.min(t.min), this.max.max(t.max), this
		}
		translate(t) {
			return this.min.add(t), this.max.add(t), this
		}
		equals(t) {
			return t.min.equals(this.min) && t.max.equals(this.max)
		}
	}.prototype, {
		center: function(t) {
			return console.warn("THREE.Box2: .center() has been renamed to .getCenter()."), this.getCenter(t)
		},
		empty: function() {
			return console.warn("THREE.Box2: .empty() has been renamed to .isEmpty()."), this.isEmpty()
		},
		isIntersectionBox: function(t) {
			return console.warn("THREE.Box2: .isIntersectionBox() has been renamed to .intersectsBox()."), this.intersectsBox(t)
		},
		size: function(t) {
			return console.warn("THREE.Box2: .size() has been renamed to .getSize()."), this.getSize(t)
		}
	}), Object.assign(Te.prototype, {
		center: function(t) {
			return console.warn("THREE.Box3: .center() has been renamed to .getCenter()."), this.getCenter(t)
		},
		empty: function() {
			return console.warn("THREE.Box3: .empty() has been renamed to .isEmpty()."), this.isEmpty()
		},
		isIntersectionBox: function(t) {
			return console.warn("THREE.Box3: .isIntersectionBox() has been renamed to .intersectsBox()."), this.intersectsBox(t)
		},
		isIntersectionSphere: function(t) {
			return console.warn("THREE.Box3: .isIntersectionSphere() has been renamed to .intersectsSphere()."), this.intersectsSphere(t)
		},
		size: function(t) {
			return console.warn("THREE.Box3: .size() has been renamed to .getSize()."), this.getSize(t)
		}
	}), Object.assign(ke.prototype, {
		empty: function() {
			return console.warn("THREE.Sphere: .empty() has been renamed to .isEmpty()."), this.isEmpty()
		}
	}), Qi.prototype.setFromMatrix = function(t) {
		return console.warn("THREE.Frustum: .setFromMatrix() has been renamed to .setFromProjectionMatrix()."), this.setFromProjectionMatrix(t)
	}, Object.assign(ue, {
		random16: function() {
			return console.warn("THREE.Math: .random16() has been deprecated. Use Math.random() instead."), Math.random()
		},
		nearestPowerOfTwo: function(t) {
			return console.warn("THREE.Math: .nearestPowerOfTwo() has been renamed to .floorPowerOfTwo()."), ue.floorPowerOfTwo(t)
		},
		nextPowerOfTwo: function(t) {
			return console.warn("THREE.Math: .nextPowerOfTwo() has been renamed to .ceilPowerOfTwo()."), ue.ceilPowerOfTwo(t)
		}
	}), Object.assign(pe.prototype, {
		flattenToArrayOffset: function(t, e) {
			return console.warn("THREE.Matrix3: .flattenToArrayOffset() has been deprecated. Use .toArray() instead."), this.toArray(t, e)
		},
		multiplyVector3: function(t) {
			return console.warn("THREE.Matrix3: .multiplyVector3() has been removed. Use vector.applyMatrix3( matrix ) instead."), t.applyMatrix3(this)
		},
		multiplyVector3Array: function() {
			console.error("THREE.Matrix3: .multiplyVector3Array() has been removed.")
		},
		applyToBufferAttribute: function(t) {
			return console.warn("THREE.Matrix3: .applyToBufferAttribute() has been removed. Use attribute.applyMatrix3( matrix ) instead."), t.applyMatrix3(this)
		},
		applyToVector3Array: function() {
			console.error("THREE.Matrix3: .applyToVector3Array() has been removed.")
		},
		getInverse: function(t) {
			return console.warn("THREE.Matrix3: .getInverse() has been removed. Use matrixInv.copy( matrix ).invert(); instead."), this.copy(t).invert()
		}
	}), Object.assign(Ze.prototype, {
		extractPosition: function(t) {
			return console.warn("THREE.Matrix4: .extractPosition() has been renamed to .copyPosition()."), this.copyPosition(t)
		},
		flattenToArrayOffset: function(t, e) {
			return console.warn("THREE.Matrix4: .flattenToArrayOffset() has been deprecated. Use .toArray() instead."), this.toArray(t, e)
		},
		getPosition: function() {
			return console.warn("THREE.Matrix4: .getPosition() has been removed. Use Vector3.setFromMatrixPosition( matrix ) instead."), (new we).setFromMatrixColumn(this, 3)
		},
		setRotationFromQuaternion: function(t) {
			return console.warn("THREE.Matrix4: .setRotationFromQuaternion() has been renamed to .makeRotationFromQuaternion()."), this.makeRotationFromQuaternion(t)
		},
		multiplyToArray: function() {
			console.warn("THREE.Matrix4: .multiplyToArray() has been removed.")
		},
		multiplyVector3: function(t) {
			return console.warn("THREE.Matrix4: .multiplyVector3() has been removed. Use vector.applyMatrix4( matrix ) instead."), t.applyMatrix4(this)
		},
		multiplyVector4: function(t) {
			return console.warn("THREE.Matrix4: .multiplyVector4() has been removed. Use vector.applyMatrix4( matrix ) instead."), t.applyMatrix4(this)
		},
		multiplyVector3Array: function() {
			console.error("THREE.Matrix4: .multiplyVector3Array() has been removed.")
		},
		rotateAxis: function(t) {
			console.warn("THREE.Matrix4: .rotateAxis() has been removed. Use Vector3.transformDirection( matrix ) instead."), t.transformDirection(this)
		},
		crossVector: function(t) {
			return console.warn("THREE.Matrix4: .crossVector() has been removed. Use vector.applyMatrix4( matrix ) instead."), t.applyMatrix4(this)
		},
		translate: function() {
			console.error("THREE.Matrix4: .translate() has been removed.")
		},
		rotateX: function() {
			console.error("THREE.Matrix4: .rotateX() has been removed.")
		},
		rotateY: function() {
			console.error("THREE.Matrix4: .rotateY() has been removed.")
		},
		rotateZ: function() {
			console.error("THREE.Matrix4: .rotateZ() has been removed.")
		},
		rotateByAxis: function() {
			console.error("THREE.Matrix4: .rotateByAxis() has been removed.")
		},
		applyToBufferAttribute: function(t) {
			return console.warn("THREE.Matrix4: .applyToBufferAttribute() has been removed. Use attribute.applyMatrix4( matrix ) instead."), t.applyMatrix4(this)
		},
		applyToVector3Array: function() {
			console.error("THREE.Matrix4: .applyToVector3Array() has been removed.")
		},
		makeFrustum: function(t, e, n, i, r, s) {
			return console.warn("THREE.Matrix4: .makeFrustum() has been removed. Use .makePerspective( left, right, top, bottom, near, far ) instead."), this.makePerspective(t, e, i, n, r, s)
		},
		getInverse: function(t) {
			return console.warn("THREE.Matrix4: .getInverse() has been removed. Use matrixInv.copy( matrix ).invert(); instead."), this.copy(t).invert()
		}
	}), En.prototype.isIntersectionLine = function(t) {
		return console.warn("THREE.Plane: .isIntersectionLine() has been renamed to .intersectsLine()."), this.intersectsLine(t)
	}, Object.assign(_e.prototype, {
		multiplyVector3: function(t) {
			return console.warn("THREE.Quaternion: .multiplyVector3() has been removed. Use is now vector.applyQuaternion( quaternion ) instead."), t.applyQuaternion(this)
		},
		inverse: function() {
			return console.warn("THREE.Quaternion: .inverse() has been renamed to invert()."), this.invert()
		}
	}), Object.assign(Ye.prototype, {
		isIntersectionBox: function(t) {
			return console.warn("THREE.Ray: .isIntersectionBox() has been renamed to .intersectsBox()."), this.intersectsBox(t)
		},
		isIntersectionPlane: function(t) {
			return console.warn("THREE.Ray: .isIntersectionPlane() has been renamed to .intersectsPlane()."), this.intersectsPlane(t)
		},
		isIntersectionSphere: function(t) {
			return console.warn("THREE.Ray: .isIntersectionSphere() has been renamed to .intersectsSphere()."), this.intersectsSphere(t)
		}
	}), Object.assign(Bn.prototype, {
		area: function() {
			return console.warn("THREE.Triangle: .area() has been renamed to .getArea()."), this.getArea()
		},
		barycoordFromPoint: function(t, e) {
			return console.warn("THREE.Triangle: .barycoordFromPoint() has been renamed to .getBarycoord()."), this.getBarycoord(t, e)
		},
		midpoint: function(t) {
			return console.warn("THREE.Triangle: .midpoint() has been renamed to .getMidpoint()."), this.getMidpoint(t)
		},
		normal: function(t) {
			return console.warn("THREE.Triangle: .normal() has been renamed to .getNormal()."), this.getNormal(t)
		},
		plane: function(t) {
			return console.warn("THREE.Triangle: .plane() has been renamed to .getPlane()."), this.getPlane(t)
		}
	}), Object.assign(Bn, {
		barycoordFromPoint: function(t, e, n, i, r) {
			return console.warn("THREE.Triangle: .barycoordFromPoint() has been renamed to .getBarycoord()."), Bn.getBarycoord(t, e, n, i, r)
		},
		normal: function(t, e, n, i) {
			return console.warn("THREE.Triangle: .normal() has been renamed to .getNormal()."), Bn.getNormal(t, e, n, i)
		}
	}), Object.assign(tl.prototype, {
		extractAllPoints: function(t) {
			return console.warn("THREE.Shape: .extractAllPoints() has been removed. Use .extractPoints() instead."), this.extractPoints(t)
		},
		extrude: function(t) {
			return console.warn("THREE.Shape: .extrude() has been removed. Use ExtrudeGeometry() instead."), new Va(this, t)
		},
		makeGeometry: function(t) {
			return console.warn("THREE.Shape: .makeGeometry() has been removed. Use ShapeGeometry() instead."), new qa(this, t)
		}
	}), Object.assign(de.prototype, {
		fromAttribute: function(t, e, n) {
			return console.warn("THREE.Vector2: .fromAttribute() has been renamed to .fromBufferAttribute()."), this.fromBufferAttribute(t, e, n)
		},
		distanceToManhattan: function(t) {
			return console.warn("THREE.Vector2: .distanceToManhattan() has been renamed to .manhattanDistanceTo()."), this.manhattanDistanceTo(t)
		},
		lengthManhattan: function() {
			return console.warn("THREE.Vector2: .lengthManhattan() has been renamed to .manhattanLength()."), this.manhattanLength()
		}
	}), Object.assign(we.prototype, {
		setEulerFromRotationMatrix: function() {
			console.error("THREE.Vector3: .setEulerFromRotationMatrix() has been removed. Use Euler.setFromRotationMatrix() instead.")
		},
		setEulerFromQuaternion: function() {
			console.error("THREE.Vector3: .setEulerFromQuaternion() has been removed. Use Euler.setFromQuaternion() instead.")
		},
		getPositionFromMatrix: function(t) {
			return console.warn("THREE.Vector3: .getPositionFromMatrix() has been renamed to .setFromMatrixPosition()."), this.setFromMatrixPosition(t)
		},
		getScaleFromMatrix: function(t) {
			return console.warn("THREE.Vector3: .getScaleFromMatrix() has been renamed to .setFromMatrixScale()."), this.setFromMatrixScale(t)
		},
		getColumnFromMatrix: function(t, e) {
			return console.warn("THREE.Vector3: .getColumnFromMatrix() has been renamed to .setFromMatrixColumn()."), this.setFromMatrixColumn(e, t)
		},
		applyProjection: function(t) {
			return console.warn("THREE.Vector3: .applyProjection() has been removed. Use .applyMatrix4( m ) instead."), this.applyMatrix4(t)
		},
		fromAttribute: function(t, e, n) {
			return console.warn("THREE.Vector3: .fromAttribute() has been renamed to .fromBufferAttribute()."), this.fromBufferAttribute(t, e, n)
		},
		distanceToManhattan: function(t) {
			return console.warn("THREE.Vector3: .distanceToManhattan() has been renamed to .manhattanDistanceTo()."), this.manhattanDistanceTo(t)
		},
		lengthManhattan: function() {
			return console.warn("THREE.Vector3: .lengthManhattan() has been renamed to .manhattanLength()."), this.manhattanLength()
		}
	}), Object.assign(xe.prototype, {
		fromAttribute: function(t, e, n) {
			return console.warn("THREE.Vector4: .fromAttribute() has been renamed to .fromBufferAttribute()."), this.fromBufferAttribute(t, e, n)
		},
		lengthManhattan: function() {
			return console.warn("THREE.Vector4: .lengthManhattan() has been renamed to .manhattanLength()."), this.manhattanLength()
		}
	}), Object.assign(wn.prototype, {
		getChildByName: function(t) {
			return console.warn("THREE.Object3D: .getChildByName() has been renamed to .getObjectByName()."), this.getObjectByName(t)
		},
		renderDepth: function() {
			console.warn("THREE.Object3D: .renderDepth has been removed. Use .renderOrder, instead.")
		},
		translate: function(t, e) {
			return console.warn("THREE.Object3D: .translate() has been removed. Use .translateOnAxis( axis, distance ) instead."), this.translateOnAxis(e, t)
		},
		getWorldRotation: function() {
			console.error("THREE.Object3D: .getWorldRotation() has been removed. Use THREE.Object3D.getWorldQuaternion( target ) instead.")
		},
		applyMatrix: function(t) {
			return console.warn("THREE.Object3D: .applyMatrix() has been renamed to .applyMatrix4()."), this.applyMatrix4(t)
		}
	}), Object.defineProperties(wn.prototype, {
		eulerOrder: {
			get: function() {
				return console.warn("THREE.Object3D: .eulerOrder is now .rotation.order."), this.rotation.order
			},
			set: function(t) {
				console.warn("THREE.Object3D: .eulerOrder is now .rotation.order."), this.rotation.order = t
			}
		},
		useQuaternion: {
			get: function() {
				console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.")
			},
			set: function() {
				console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.")
			}
		}
	}), Object.assign(zi.prototype, {
		setDrawMode: function() {
			console.error("THREE.Mesh: .setDrawMode() has been removed. The renderer now always assumes THREE.TrianglesDrawMode. Transform your geometry via BufferGeometryUtils.toTrianglesDrawMode() if necessary.")
		}
	}), Object.defineProperties(zi.prototype, {
		drawMode: {
			get: function() {
				return console.error("THREE.Mesh: .drawMode has been removed. The renderer now always assumes THREE.TrianglesDrawMode."), 0
			},
			set: function() {
				console.error("THREE.Mesh: .drawMode has been removed. The renderer now always assumes THREE.TrianglesDrawMode. Transform your geometry via BufferGeometryUtils.toTrianglesDrawMode() if necessary.")
			}
		}
	}), Object.defineProperties(Ro.prototype, {
		objects: {
			get: function() {
				return console.warn("THREE.LOD: .objects has been renamed to .levels."), this.levels
			}
		}
	}), Object.defineProperty(Ho.prototype, "useVertexTexture", {
		get: function() {
			console.warn("THREE.Skeleton: useVertexTexture has been removed.")
		},
		set: function() {
			console.warn("THREE.Skeleton: useVertexTexture has been removed.")
		}
	}), zo.prototype.initBones = function() {
		console.error("THREE.SkinnedMesh: initBones() has been removed.")
	}, Object.defineProperty(Dc.prototype, "__arcLengthDivisions", {
		get: function() {
			return console.warn("THREE.Curve: .__arcLengthDivisions is now .arcLengthDivisions."), this.arcLengthDivisions
		},
		set: function(t) {
			console.warn("THREE.Curve: .__arcLengthDivisions is now .arcLengthDivisions."), this.arcLengthDivisions = t
		}
	}), Vi.prototype.setLens = function(t, e) {
		console.warn("THREE.PerspectiveCamera.setLens is deprecated. Use .setFocalLength and .filmGauge for a photographic setup."), void 0 !== e && (this.filmGauge = e), this.setFocalLength(t)
	}, Object.defineProperties(el.prototype, {
		onlyShadow: {
			set: function() {
				console.warn("THREE.Light: .onlyShadow has been removed.")
			}
		},
		shadowCameraFov: {
			set: function(t) {
				console.warn("THREE.Light: .shadowCameraFov is now .shadow.camera.fov."), this.shadow.camera.fov = t
			}
		},
		shadowCameraLeft: {
			set: function(t) {
				console.warn("THREE.Light: .shadowCameraLeft is now .shadow.camera.left."), this.shadow.camera.left = t
			}
		},
		shadowCameraRight: {
			set: function(t) {
				console.warn("THREE.Light: .shadowCameraRight is now .shadow.camera.right."), this.shadow.camera.right = t
			}
		},
		shadowCameraTop: {
			set: function(t) {
				console.warn("THREE.Light: .shadowCameraTop is now .shadow.camera.top."), this.shadow.camera.top = t
			}
		},
		shadowCameraBottom: {
			set: function(t) {
				console.warn("THREE.Light: .shadowCameraBottom is now .shadow.camera.bottom."), this.shadow.camera.bottom = t
			}
		},
		shadowCameraNear: {
			set: function(t) {
				console.warn("THREE.Light: .shadowCameraNear is now .shadow.camera.near."), this.shadow.camera.near = t
			}
		},
		shadowCameraFar: {
			set: function(t) {
				console.warn("THREE.Light: .shadowCameraFar is now .shadow.camera.far."), this.shadow.camera.far = t
			}
		},
		shadowCameraVisible: {
			set: function() {
				console.warn("THREE.Light: .shadowCameraVisible has been removed. Use new THREE.CameraHelper( light.shadow.camera ) instead.")
			}
		},
		shadowBias: {
			set: function(t) {
				console.warn("THREE.Light: .shadowBias is now .shadow.bias."), this.shadow.bias = t
			}
		},
		shadowDarkness: {
			set: function() {
				console.warn("THREE.Light: .shadowDarkness has been removed.")
			}
		},
		shadowMapWidth: {
			set: function(t) {
				console.warn("THREE.Light: .shadowMapWidth is now .shadow.mapSize.width."), this.shadow.mapSize.width = t
			}
		},
		shadowMapHeight: {
			set: function(t) {
				console.warn("THREE.Light: .shadowMapHeight is now .shadow.mapSize.height."), this.shadow.mapSize.height = t
			}
		}
	}), Object.defineProperties(Jn.prototype, {
		length: {
			get: function() {
				return console.warn("THREE.BufferAttribute: .length has been deprecated. Use .count instead."), this.array.length
			}
		},
		dynamic: {
			get: function() {
				return console.warn("THREE.BufferAttribute: .dynamic has been deprecated. Use .usage instead."), this.usage === oe
			},
			set: function() {
				console.warn("THREE.BufferAttribute: .dynamic has been deprecated. Use .usage instead."), this.setUsage(oe)
			}
		}
	}), Object.assign(Jn.prototype, {
		setDynamic: function(t) {
			return console.warn("THREE.BufferAttribute: .setDynamic() has been deprecated. Use .setUsage() instead."), this.setUsage(!0 === t ? oe : se), this
		},
		copyIndicesArray: function() {
			console.error("THREE.BufferAttribute: .copyIndicesArray() has been removed.")
		},
		setArray: function() {
			console.error("THREE.BufferAttribute: .setArray has been removed. Use BufferGeometry .setAttribute to replace/resize attribute buffers")
		}
	}), Object.assign(yi.prototype, {
		addIndex: function(t) {
			console.warn("THREE.BufferGeometry: .addIndex() has been renamed to .setIndex()."), this.setIndex(t)
		},
		addAttribute: function(t, e) {
			return console.warn("THREE.BufferGeometry: .addAttribute() has been renamed to .setAttribute()."), e && e.isBufferAttribute || e && e.isInterleavedBufferAttribute ? "index" === t ? (console.warn("THREE.BufferGeometry.addAttribute: Use .setIndex() for index attribute."), this.setIndex(e), this) : this.setAttribute(t, e) : (console.warn("THREE.BufferGeometry: .addAttribute() now expects ( name, attribute )."), this.setAttribute(t, new Jn(arguments[1], arguments[2])))
		},
		addDrawCall: function(t, e, n) {
			void 0 !== n && console.warn("THREE.BufferGeometry: .addDrawCall() no longer supports indexOffset."), console.warn("THREE.BufferGeometry: .addDrawCall() is now .addGroup()."), this.addGroup(t, e)
		},
		clearDrawCalls: function() {
			console.warn("THREE.BufferGeometry: .clearDrawCalls() is now .clearGroups()."), this.clearGroups()
		},
		computeOffsets: function() {
			console.warn("THREE.BufferGeometry: .computeOffsets() has been removed.")
		},
		removeAttribute: function(t) {
			return console.warn("THREE.BufferGeometry: .removeAttribute() has been renamed to .deleteAttribute()."), this.deleteAttribute(t)
		},
		applyMatrix: function(t) {
			return console.warn("THREE.BufferGeometry: .applyMatrix() has been renamed to .applyMatrix4()."), this.applyMatrix4(t)
		}
	}), Object.defineProperties(yi.prototype, {
		drawcalls: {
			get: function() {
				return console.error("THREE.BufferGeometry: .drawcalls has been renamed to .groups."), this.groups
			}
		},
		offsets: {
			get: function() {
				return console.warn("THREE.BufferGeometry: .offsets has been renamed to .groups."), this.groups
			}
		}
	}), Object.defineProperties(vl.prototype, {
		maxInstancedCount: {
			get: function() {
				return console.warn("THREE.InstancedBufferGeometry: .maxInstancedCount has been renamed to .instanceCount."), this.instanceCount
			},
			set: function(t) {
				console.warn("THREE.InstancedBufferGeometry: .maxInstancedCount has been renamed to .instanceCount."), this.instanceCount = t
			}
		}
	}), Object.defineProperties(Ql.prototype, {
		linePrecision: {
			get: function() {
				return console.warn("THREE.Raycaster: .linePrecision has been deprecated. Use .params.Line.threshold instead."), this.params.Line.threshold
			},
			set: function(t) {
				console.warn("THREE.Raycaster: .linePrecision has been deprecated. Use .params.Line.threshold instead."), this.params.Line.threshold = t
			}
		}
	}), Object.defineProperties(co.prototype, {
		dynamic: {
			get: function() {
				return console.warn("THREE.InterleavedBuffer: .length has been deprecated. Use .usage instead."), this.usage === oe
			},
			set: function(t) {
				console.warn("THREE.InterleavedBuffer: .length has been deprecated. Use .usage instead."), this.setUsage(t)
			}
		}
	}), Object.assign(co.prototype, {
		setDynamic: function(t) {
			return console.warn("THREE.InterleavedBuffer: .setDynamic() has been deprecated. Use .setUsage() instead."), this.setUsage(!0 === t ? oe : se), this
		},
		setArray: function() {
			console.error("THREE.InterleavedBuffer: .setArray has been removed. Use BufferGeometry .setAttribute to replace/resize attribute buffers")
		}
	}), Object.assign(Va.prototype, {
		getArrays: function() {
			console.error("THREE.ExtrudeGeometry: .getArrays() has been removed.")
		},
		addShapeList: function() {
			console.error("THREE.ExtrudeGeometry: .addShapeList() has been removed.")
		},
		addShape: function() {
			console.error("THREE.ExtrudeGeometry: .addShape() has been removed.")
		}
	}), Object.assign(ao.prototype, {
		dispose: function() {
			console.error("THREE.Scene: .dispose() has been removed.")
		}
	}), Object.defineProperties(Yl.prototype, {
		dynamic: {
			set: function() {
				console.warn("THREE.Uniform: .dynamic has been removed. Use object.onBeforeRender() instead.")
			}
		},
		onUpdate: {
			value: function() {
				return console.warn("THREE.Uniform: .onUpdate() has been removed. Use object.onBeforeRender() instead."), this
			}
		}
	}), Object.defineProperties(qn.prototype, {
		wrapAround: {
			get: function() {
				console.warn("THREE.Material: .wrapAround has been removed.")
			},
			set: function() {
				console.warn("THREE.Material: .wrapAround has been removed.")
			}
		},
		overdraw: {
			get: function() {
				console.warn("THREE.Material: .overdraw has been removed.")
			},
			set: function() {
				console.warn("THREE.Material: .overdraw has been removed.")
			}
		},
		wrapRGB: {
			get: function() {
				return console.warn("THREE.Material: .wrapRGB has been removed."), new Vn
			}
		},
		shading: {
			get: function() {
				console.error("THREE." + this.type + ": .shading has been removed. Use the boolean .flatShading instead.")
			},
			set: function(t) {
				console.warn("THREE." + this.type + ": .shading has been removed. Use the boolean .flatShading instead."), this.flatShading = 1 === t
			}
		},
		stencilMask: {
			get: function() {
				return console.warn("THREE." + this.type + ": .stencilMask has been removed. Use .stencilFuncMask instead."), this.stencilFuncMask
			},
			set: function(t) {
				console.warn("THREE." + this.type + ": .stencilMask has been removed. Use .stencilFuncMask instead."), this.stencilFuncMask = t
			}
		}
	}), Object.defineProperties(Ka.prototype, {
		metal: {
			get: function() {
				return console.warn("THREE.MeshPhongMaterial: .metal has been removed. Use THREE.MeshStandardMaterial instead."), !1
			},
			set: function() {
				console.warn("THREE.MeshPhongMaterial: .metal has been removed. Use THREE.MeshStandardMaterial instead")
			}
		}
	}), Object.defineProperties(Qa.prototype, {
		transparency: {
			get: function() {
				return console.warn("THREE.MeshPhysicalMaterial: .transparency has been renamed to .transmission."), this.transmission
			},
			set: function(t) {
				console.warn("THREE.MeshPhysicalMaterial: .transparency has been renamed to .transmission."), this.transmission = t
			}
		}
	}), Object.defineProperties(Gi.prototype, {
		derivatives: {
			get: function() {
				return console.warn("THREE.ShaderMaterial: .derivatives has been moved to .extensions.derivatives."), this.extensions.derivatives
			},
			set: function(t) {
				console.warn("THREE. ShaderMaterial: .derivatives has been moved to .extensions.derivatives."), this.extensions.derivatives = t
			}
		}
	}), Object.assign(so.prototype, {
		clearTarget: function(t, e, n, i) {
			console.warn("THREE.WebGLRenderer: .clearTarget() has been deprecated. Use .setRenderTarget() and .clear() instead."), this.setRenderTarget(t), this.clear(e, n, i)
		},
		animate: function(t) {
			console.warn("THREE.WebGLRenderer: .animate() is now .setAnimationLoop()."), this.setAnimationLoop(t)
		},
		getCurrentRenderTarget: function() {
			return console.warn("THREE.WebGLRenderer: .getCurrentRenderTarget() is now .getRenderTarget()."), this.getRenderTarget()
		},
		getMaxAnisotropy: function() {
			return console.warn("THREE.WebGLRenderer: .getMaxAnisotropy() is now .capabilities.getMaxAnisotropy()."), this.capabilities.getMaxAnisotropy()
		},
		getPrecision: function() {
			return console.warn("THREE.WebGLRenderer: .getPrecision() is now .capabilities.precision."), this.capabilities.precision
		},
		resetGLState: function() {
			return console.warn("THREE.WebGLRenderer: .resetGLState() is now .state.reset()."), this.state.reset()
		},
		supportsFloatTextures: function() {
			return console.warn("THREE.WebGLRenderer: .supportsFloatTextures() is now .extensions.get( 'OES_texture_float' )."), this.extensions.get("OES_texture_float")
		},
		supportsHalfFloatTextures: function() {
			return console.warn("THREE.WebGLRenderer: .supportsHalfFloatTextures() is now .extensions.get( 'OES_texture_half_float' )."), this.extensions.get("OES_texture_half_float")
		},
		supportsStandardDerivatives: function() {
			return console.warn("THREE.WebGLRenderer: .supportsStandardDerivatives() is now .extensions.get( 'OES_standard_derivatives' )."), this.extensions.get("OES_standard_derivatives")
		},
		supportsCompressedTextureS3TC: function() {
			return console.warn("THREE.WebGLRenderer: .supportsCompressedTextureS3TC() is now .extensions.get( 'WEBGL_compressed_texture_s3tc' )."), this.extensions.get("WEBGL_compressed_texture_s3tc")
		},
		supportsCompressedTexturePVRTC: function() {
			return console.warn("THREE.WebGLRenderer: .supportsCompressedTexturePVRTC() is now .extensions.get( 'WEBGL_compressed_texture_pvrtc' )."), this.extensions.get("WEBGL_compressed_texture_pvrtc")
		},
		supportsBlendMinMax: function() {
			return console.warn("THREE.WebGLRenderer: .supportsBlendMinMax() is now .extensions.get( 'EXT_blend_minmax' )."), this.extensions.get("EXT_blend_minmax")
		},
		supportsVertexTextures: function() {
			return console.warn("THREE.WebGLRenderer: .supportsVertexTextures() is now .capabilities.vertexTextures."), this.capabilities.vertexTextures
		},
		supportsInstancedArrays: function() {
			return console.warn("THREE.WebGLRenderer: .supportsInstancedArrays() is now .extensions.get( 'ANGLE_instanced_arrays' )."), this.extensions.get("ANGLE_instanced_arrays")
		},
		enableScissorTest: function(t) {
			console.warn("THREE.WebGLRenderer: .enableScissorTest() is now .setScissorTest()."), this.setScissorTest(t)
		},
		initMaterial: function() {
			console.warn("THREE.WebGLRenderer: .initMaterial() has been removed.")
		},
		addPrePlugin: function() {
			console.warn("THREE.WebGLRenderer: .addPrePlugin() has been removed.")
		},
		addPostPlugin: function() {
			console.warn("THREE.WebGLRenderer: .addPostPlugin() has been removed.")
		},
		updateShadowMap: function() {
			console.warn("THREE.WebGLRenderer: .updateShadowMap() has been removed.")
		},
		setFaceCulling: function() {
			console.warn("THREE.WebGLRenderer: .setFaceCulling() has been removed.")
		},
		allocTextureUnit: function() {
			console.warn("THREE.WebGLRenderer: .allocTextureUnit() has been removed.")
		},
		setTexture: function() {
			console.warn("THREE.WebGLRenderer: .setTexture() has been removed.")
		},
		setTexture2D: function() {
			console.warn("THREE.WebGLRenderer: .setTexture2D() has been removed.")
		},
		setTextureCube: function() {
			console.warn("THREE.WebGLRenderer: .setTextureCube() has been removed.")
		},
		getActiveMipMapLevel: function() {
			return console.warn("THREE.WebGLRenderer: .getActiveMipMapLevel() is now .getActiveMipmapLevel()."), this.getActiveMipmapLevel()
		}
	}), Object.defineProperties(so.prototype, {
		shadowMapEnabled: {
			get: function() {
				return this.shadowMap.enabled
			},
			set: function(t) {
				console.warn("THREE.WebGLRenderer: .shadowMapEnabled is now .shadowMap.enabled."), this.shadowMap.enabled = t
			}
		},
		shadowMapType: {
			get: function() {
				return this.shadowMap.type
			},
			set: function(t) {
				console.warn("THREE.WebGLRenderer: .shadowMapType is now .shadowMap.type."), this.shadowMap.type = t
			}
		},
		shadowMapCullFace: {
			get: function() {
				console.warn("THREE.WebGLRenderer: .shadowMapCullFace has been removed. Set Material.shadowSide instead.")
			},
			set: function() {
				console.warn("THREE.WebGLRenderer: .shadowMapCullFace has been removed. Set Material.shadowSide instead.")
			}
		},
		context: {
			get: function() {
				return console.warn("THREE.WebGLRenderer: .context has been removed. Use .getContext() instead."), this.getContext()
			}
		},
		vr: {
			get: function() {
				return console.warn("THREE.WebGLRenderer: .vr has been renamed to .xr"), this.xr
			}
		},
		gammaInput: {
			get: function() {
				return console.warn("THREE.WebGLRenderer: .gammaInput has been removed. Set the encoding for textures via Texture.encoding instead."), !1
			},
			set: function() {
				console.warn("THREE.WebGLRenderer: .gammaInput has been removed. Set the encoding for textures via Texture.encoding instead.")
			}
		},
		gammaOutput: {
			get: function() {
				return console.warn("THREE.WebGLRenderer: .gammaOutput has been removed. Set WebGLRenderer.outputEncoding instead."), !1
			},
			set: function(t) {
				console.warn("THREE.WebGLRenderer: .gammaOutput has been removed. Set WebGLRenderer.outputEncoding instead."), this.outputEncoding = !0 === t ? 3001 : ie
			}
		},
		toneMappingWhitePoint: {
			get: function() {
				return console.warn("THREE.WebGLRenderer: .toneMappingWhitePoint has been removed."), 1
			},
			set: function() {
				console.warn("THREE.WebGLRenderer: .toneMappingWhitePoint has been removed.")
			}
		}
	}), Object.defineProperties(Zs.prototype, {
		cullFace: {
			get: function() {
				console.warn("THREE.WebGLRenderer: .shadowMap.cullFace has been removed. Set Material.shadowSide instead.")
			},
			set: function() {
				console.warn("THREE.WebGLRenderer: .shadowMap.cullFace has been removed. Set Material.shadowSide instead.")
			}
		},
		renderReverseSided: {
			get: function() {
				console.warn("THREE.WebGLRenderer: .shadowMap.renderReverseSided has been removed. Set Material.shadowSide instead.")
			},
			set: function() {
				console.warn("THREE.WebGLRenderer: .shadowMap.renderReverseSided has been removed. Set Material.shadowSide instead.")
			}
		},
		renderSingleSided: {
			get: function() {
				console.warn("THREE.WebGLRenderer: .shadowMap.renderSingleSided has been removed. Set Material.shadowSide instead.")
			},
			set: function() {
				console.warn("THREE.WebGLRenderer: .shadowMap.renderSingleSided has been removed. Set Material.shadowSide instead.")
			}
		}
	}), Object.defineProperties(be.prototype, {
		wrapS: {
			get: function() {
				return console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS."), this.texture.wrapS
			},
			set: function(t) {
				console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS."), this.texture.wrapS = t
			}
		},
		wrapT: {
			get: function() {
				return console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT."), this.texture.wrapT
			},
			set: function(t) {
				console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT."), this.texture.wrapT = t
			}
		},
		magFilter: {
			get: function() {
				return console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter."), this.texture.magFilter
			},
			set: function(t) {
				console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter."), this.texture.magFilter = t
			}
		},
		minFilter: {
			get: function() {
				return console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter."), this.texture.minFilter
			},
			set: function(t) {
				console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter."), this.texture.minFilter = t
			}
		},
		anisotropy: {
			get: function() {
				return console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy."), this.texture.anisotropy
			},
			set: function(t) {
				console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy."), this.texture.anisotropy = t
			}
		},
		offset: {
			get: function() {
				return console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset."), this.texture.offset
			},
			set: function(t) {
				console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset."), this.texture.offset = t
			}
		},
		repeat: {
			get: function() {
				return console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat."), this.texture.repeat
			},
			set: function(t) {
				console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat."), this.texture.repeat = t
			}
		},
		format: {
			get: function() {
				return console.warn("THREE.WebGLRenderTarget: .format is now .texture.format."), this.texture.format
			},
			set: function(t) {
				console.warn("THREE.WebGLRenderTarget: .format is now .texture.format."), this.texture.format = t
			}
		},
		type: {
			get: function() {
				return console.warn("THREE.WebGLRenderTarget: .type is now .texture.type."), this.texture.type
			},
			set: function(t) {
				console.warn("THREE.WebGLRenderTarget: .type is now .texture.type."), this.texture.type = t
			}
		},
		generateMipmaps: {
			get: function() {
				return console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps."), this.texture.generateMipmaps
			},
			set: function(t) {
				console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps."), this.texture.generateMipmaps = t
			}
		}
	}), Object.defineProperties(class extends wn {
		constructor(t) {
			super(), this.type = "Audio", this.listener = t, this.context = t.context, this.gain = this.context.createGain(), this.gain.connect(t.getInput()), this.autoplay = !1, this.buffer = null, this.detune = 0, this.loop = !1, this.loopStart = 0, this.loopEnd = 0, this.offset = 0, this.duration = void 0, this.playbackRate = 1, this.isPlaying = !1, this.hasPlaybackControl = !0, this.source = null, this.sourceType = "empty", this._startedAt = 0, this._progress = 0, this._connected = !1, this.filters = []
		}
		getOutput() {
			return this.gain
		}
		setNodeSource(t) {
			return this.hasPlaybackControl = !1, this.sourceType = "audioNode", this.source = t, this.connect(), this
		}
		setMediaElementSource(t) {
			return this.hasPlaybackControl = !1, this.sourceType = "mediaNode", this.source = this.context.createMediaElementSource(t), this.connect(), this
		}
		setMediaStreamSource(t) {
			return this.hasPlaybackControl = !1, this.sourceType = "mediaStreamNode", this.source = this.context.createMediaStreamSource(t), this.connect(), this
		}
		setBuffer(t) {
			return this.buffer = t, this.sourceType = "buffer", this.autoplay && this.play(), this
		}
		play(t = 0) {
			if (!0 === this.isPlaying) return void console.warn("THREE.Audio: Audio is already playing.");
			if (!1 === this.hasPlaybackControl) return void console.warn("THREE.Audio: this Audio has no playback control.");
			this._startedAt = this.context.currentTime + t;
			const e = this.context.createBufferSource();
			return e.buffer = this.buffer, e.loop = this.loop, e.loopStart = this.loopStart, e.loopEnd = this.loopEnd, e.onended = this.onEnded.bind(this), e.start(this._startedAt, this._progress + this.offset, this.duration), this.isPlaying = !0, this.source = e, this.setDetune(this.detune), this.setPlaybackRate(this.playbackRate), this.connect()
		}
		pause() {
			if (!1 !== this.hasPlaybackControl) return !0 === this.isPlaying && (this._progress += Math.max(this.context.currentTime - this._startedAt, 0) * this.playbackRate, !0 === this.loop && (this._progress = this._progress % (this.duration || this.buffer.duration)), this.source.stop(), this.source.onended = null, this.isPlaying = !1), this;
			console.warn("THREE.Audio: this Audio has no playback control.")
		}
		stop() {
			if (!1 !== this.hasPlaybackControl) return this._progress = 0, this.source.stop(), this.source.onended = null, this.isPlaying = !1, this;
			console.warn("THREE.Audio: this Audio has no playback control.")
		}
		connect() {
			if (this.filters.length > 0) {
				this.source.connect(this.filters[0]);
				for (let t = 1, e = this.filters.length; t < e; t++) this.filters[t - 1].connect(this.filters[t]);
				this.filters[this.filters.length - 1].connect(this.getOutput())
			} else this.source.connect(this.getOutput());
			return this._connected = !0, this
		}
		disconnect() {
			if (this.filters.length > 0) {
				this.source.disconnect(this.filters[0]);
				for (let t = 1, e = this.filters.length; t < e; t++) this.filters[t - 1].disconnect(this.filters[t]);
				this.filters[this.filters.length - 1].disconnect(this.getOutput())
			} else this.source.disconnect(this.getOutput());
			return this._connected = !1, this
		}
		getFilters() {
			return this.filters
		}
		setFilters(t) {
			return t || (t = []), !0 === this._connected ? (this.disconnect(), this.filters = t.slice(), this.connect()) : this.filters = t.slice(), this
		}
		setDetune(t) {
			if (this.detune = t, void 0 !== this.source.detune) return !0 === this.isPlaying && this.source.detune.setTargetAtTime(this.detune, this.context.currentTime, .01), this
		}
		getDetune() {
			return this.detune
		}
		getFilter() {
			return this.getFilters()[0]
		}
		setFilter(t) {
			return this.setFilters(t ? [t] : [])
		}
		setPlaybackRate(t) {
			if (!1 !== this.hasPlaybackControl) return this.playbackRate = t, !0 === this.isPlaying && this.source.playbackRate.setTargetAtTime(this.playbackRate, this.context.currentTime, .01), this;
			console.warn("THREE.Audio: this Audio has no playback control.")
		}
		getPlaybackRate() {
			return this.playbackRate
		}
		onEnded() {
			this.isPlaying = !1
		}
		getLoop() {
			return !1 === this.hasPlaybackControl ? (console.warn("THREE.Audio: this Audio has no playback control."), !1) : this.loop
		}
		setLoop(t) {
			if (!1 !== this.hasPlaybackControl) return this.loop = t, !0 === this.isPlaying && (this.source.loop = this.loop), this;
			console.warn("THREE.Audio: this Audio has no playback control.")
		}
		setLoopStart(t) {
			return this.loopStart = t, this
		}
		setLoopEnd(t) {
			return this.loopEnd = t, this
		}
		getVolume() {
			return this.gain.gain.value
		}
		setVolume(t) {
			return this.gain.gain.setTargetAtTime(t, this.context.currentTime, .01), this
		}
	}.prototype, {
		load: {
			value: function(t) {
				console.warn("THREE.Audio: .load has been deprecated. Use THREE.AudioLoader instead.");
				const e = this;
				return (new Al).load(t, (function(t) {
					e.setBuffer(t)
				})), this
			}
		},
		startTime: {
			set: function() {
				console.warn("THREE.Audio: .startTime is now .play( delay ).")
			}
		}
	}), $i.prototype.updateCubeMap = function(t, e) {
		return console.warn("THREE.CubeCamera: .updateCubeMap() is now .update()."), this.update(t, e)
	}, $i.prototype.clear = function(t, e, n, i) {
		return console.warn("THREE.CubeCamera: .clear() is now .renderTarget.clear()."), this.renderTarget.clear(t, e, n, i)
	}, me.crossOrigin = void 0, me.loadTexture = function(t, e, n, i) {
		console.warn("THREE.ImageUtils.loadTexture has been deprecated. Use THREE.TextureLoader() instead.");
		const r = new Pc;
		r.setCrossOrigin(this.crossOrigin);
		const s = r.load(t, n, void 0, i);
		return e && (s.mapping = e), s
	}, me.loadTextureCube = function(t, e, n, i) {
		console.warn("THREE.ImageUtils.loadTextureCube has been deprecated. Use THREE.CubeTextureLoader() instead.");
		const r = new Cc;
		r.setCrossOrigin(this.crossOrigin);
		const s = r.load(t, n, void 0, i);
		return e && (s.mapping = e), s
	}, me.loadCompressedTexture = function() {
		console.error("THREE.ImageUtils.loadCompressedTexture has been removed. Use THREE.DDSLoader instead.")
	}, me.loadCompressedTextureCube = function() {
		console.error("THREE.ImageUtils.loadCompressedTextureCube has been removed. Use THREE.DDSLoader instead.")
	}, "undefined" != typeof __THREE_DEVTOOLS__ && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register", {
		detail: {
			revision: "125"
		}
	})), "undefined" != typeof window && (window.__THREE__ ? console.warn("WARNING: Multiple instances of Three.js being imported.") : window.__THREE__ = "125");
	const oh = new class {
		constructor() {
			this.speaking = !1, this.queue = []
		}
		speak(t) {
			if (this.speaking) return void this.queue.push(t);
			const e = new SpeechSynthesisUtterance;
			e.text = t, e.volume = 1, this.voice && (e.voice = this.voice), e.onend = () => {
				this.queue.length > 0 && this.speak(this.queue.pop())
			}, window.speechSynthesis.speak(e)
		}
		voices() {
			return window.speechSynthesis ? window.speechSynthesis.getVoices() : []
		}
		setVoice(t) {
			this.voices()[t] && (this.voice = this.voices()[t])
		}
	};

	function ah() {
		return oh
	}
	oh.voices();
	var ch = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};

	function lh(t, e, n) {
		return t(n = {
			path: e,
			exports: {},
			require: function(t, e) {
				return function() {
					throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")
				}(null == e && n.path)
			}
		}, n.exports), n.exports
	}

	function hh(t) {
		if (t.__esModule) return t;
		var e = Object.defineProperty({}, "__esModule", {
			value: !0
		});
		return Object.keys(t).forEach((function(n) {
			var i = Object.getOwnPropertyDescriptor(t, n);
			Object.defineProperty(e, n, i.get ? i : {
				enumerable: !0,
				get: function() {
					return t[n]
				}
			})
		})), e
	}
	var uh, dh = lh((function(t) {
		var e = function() {
			var t = String.fromCharCode,
				e = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
				n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-$",
				i = {};

			function r(t, e) {
				if (!i[t]) {
					i[t] = {};
					for (var n = 0; n < t.length; n++) i[t][t.charAt(n)] = n
				}
				return i[t][e]
			}
			var s = {
				compressToBase64: function(t) {
					if (null == t) return "";
					var n = s._compress(t, 6, (function(t) {
						return e.charAt(t)
					}));
					switch (n.length % 4) {
						default:
						case 0:
							return n;
						case 1:
							return n + "===";
						case 2:
							return n + "==";
						case 3:
							return n + "="
					}
				},
				decompressFromBase64: function(t) {
					return null == t ? "" : "" == t ? null : s._decompress(t.length, 32, (function(n) {
						return r(e, t.charAt(n))
					}))
				},
				compressToUTF16: function(e) {
					return null == e ? "" : s._compress(e, 15, (function(e) {
						return t(e + 32)
					})) + " "
				},
				decompressFromUTF16: function(t) {
					return null == t ? "" : "" == t ? null : s._decompress(t.length, 16384, (function(e) {
						return t.charCodeAt(e) - 32
					}))
				},
				compressToUint8Array: function(t) {
					for (var e = s.compress(t), n = new Uint8Array(2 * e.length), i = 0, r = e.length; i < r; i++) {
						var o = e.charCodeAt(i);
						n[2 * i] = o >>> 8, n[2 * i + 1] = o % 256
					}
					return n
				},
				decompressFromUint8Array: function(e) {
					if (null == e) return s.decompress(e);
					for (var n = new Array(e.length / 2), i = 0, r = n.length; i < r; i++) n[i] = 256 * e[2 * i] + e[2 * i + 1];
					var o = [];
					return n.forEach((function(e) {
						o.push(t(e))
					})), s.decompress(o.join(""))
				},
				compressToEncodedURIComponent: function(t) {
					return null == t ? "" : s._compress(t, 6, (function(t) {
						return n.charAt(t)
					}))
				},
				decompressFromEncodedURIComponent: function(t) {
					return null == t ? "" : "" == t ? null : (t = t.replace(/ /g, "+"), s._decompress(t.length, 32, (function(e) {
						return r(n, t.charAt(e))
					})))
				},
				compress: function(e) {
					return s._compress(e, 16, (function(e) {
						return t(e)
					}))
				},
				_compress: function(t, e, n) {
					if (null == t) return "";
					var i, r, s, o = {},
						a = {},
						c = "",
						l = "",
						h = "",
						u = 2,
						d = 3,
						p = 2,
						f = [],
						m = 0,
						g = 0;
					for (s = 0; s < t.length; s += 1)
						if (c = t.charAt(s), Object.prototype.hasOwnProperty.call(o, c) || (o[c] = d++, a[c] = !0), l = h + c, Object.prototype.hasOwnProperty.call(o, l)) h = l;
						else {
							if (Object.prototype.hasOwnProperty.call(a, h)) {
								if (h.charCodeAt(0) < 256) {
									for (i = 0; i < p; i++) m <<= 1, g == e - 1 ? (g = 0, f.push(n(m)), m = 0) : g++;
									for (r = h.charCodeAt(0), i = 0; i < 8; i++) m = m << 1 | 1 & r, g == e - 1 ? (g = 0, f.push(n(m)), m = 0) : g++, r >>= 1
								} else {
									for (r = 1, i = 0; i < p; i++) m = m << 1 | r, g == e - 1 ? (g = 0, f.push(n(m)), m = 0) : g++, r = 0;
									for (r = h.charCodeAt(0), i = 0; i < 16; i++) m = m << 1 | 1 & r, g == e - 1 ? (g = 0, f.push(n(m)), m = 0) : g++, r >>= 1
								}
								0 == --u && (u = Math.pow(2, p), p++), delete a[h]
							} else
								for (r = o[h], i = 0; i < p; i++) m = m << 1 | 1 & r, g == e - 1 ? (g = 0, f.push(n(m)), m = 0) : g++, r >>= 1;
							0 == --u && (u = Math.pow(2, p), p++), o[l] = d++, h = String(c)
						} if ("" !== h) {
						if (Object.prototype.hasOwnProperty.call(a, h)) {
							if (h.charCodeAt(0) < 256) {
								for (i = 0; i < p; i++) m <<= 1, g == e - 1 ? (g = 0, f.push(n(m)), m = 0) : g++;
								for (r = h.charCodeAt(0), i = 0; i < 8; i++) m = m << 1 | 1 & r, g == e - 1 ? (g = 0, f.push(n(m)), m = 0) : g++, r >>= 1
							} else {
								for (r = 1, i = 0; i < p; i++) m = m << 1 | r, g == e - 1 ? (g = 0, f.push(n(m)), m = 0) : g++, r = 0;
								for (r = h.charCodeAt(0), i = 0; i < 16; i++) m = m << 1 | 1 & r, g == e - 1 ? (g = 0, f.push(n(m)), m = 0) : g++, r >>= 1
							}
							0 == --u && (u = Math.pow(2, p), p++), delete a[h]
						} else
							for (r = o[h], i = 0; i < p; i++) m = m << 1 | 1 & r, g == e - 1 ? (g = 0, f.push(n(m)), m = 0) : g++, r >>= 1;
						0 == --u && (u = Math.pow(2, p), p++)
					}
					for (r = 2, i = 0; i < p; i++) m = m << 1 | 1 & r, g == e - 1 ? (g = 0, f.push(n(m)), m = 0) : g++, r >>= 1;
					for (;;) {
						if (m <<= 1, g == e - 1) {
							f.push(n(m));
							break
						}
						g++
					}
					return f.join("")
				},
				decompress: function(t) {
					return null == t ? "" : "" == t ? null : s._decompress(t.length, 32768, (function(e) {
						return t.charCodeAt(e)
					}))
				},
				_decompress: function(e, n, i) {
					var r, s, o, a, c, l, h, u = [],
						d = 4,
						p = 4,
						f = 3,
						m = "",
						g = [],
						v = {
							val: i(0),
							position: n,
							index: 1
						};
					for (r = 0; r < 3; r += 1) u[r] = r;
					for (o = 0, c = Math.pow(2, 2), l = 1; l != c;) a = v.val & v.position, v.position >>= 1, 0 == v.position && (v.position = n, v.val = i(v.index++)), o |= (a > 0 ? 1 : 0) * l, l <<= 1;
					switch (o) {
						case 0:
							for (o = 0, c = Math.pow(2, 8), l = 1; l != c;) a = v.val & v.position, v.position >>= 1, 0 == v.position && (v.position = n, v.val = i(v.index++)), o |= (a > 0 ? 1 : 0) * l, l <<= 1;
							h = t(o);
							break;
						case 1:
							for (o = 0, c = Math.pow(2, 16), l = 1; l != c;) a = v.val & v.position, v.position >>= 1, 0 == v.position && (v.position = n, v.val = i(v.index++)), o |= (a > 0 ? 1 : 0) * l, l <<= 1;
							h = t(o);
							break;
						case 2:
							return ""
					}
					for (u[3] = h, s = h, g.push(h);;) {
						if (v.index > e) return "";
						for (o = 0, c = Math.pow(2, f), l = 1; l != c;) a = v.val & v.position, v.position >>= 1, 0 == v.position && (v.position = n, v.val = i(v.index++)), o |= (a > 0 ? 1 : 0) * l, l <<= 1;
						switch (h = o) {
							case 0:
								for (o = 0, c = Math.pow(2, 8), l = 1; l != c;) a = v.val & v.position, v.position >>= 1, 0 == v.position && (v.position = n, v.val = i(v.index++)), o |= (a > 0 ? 1 : 0) * l, l <<= 1;
								u[p++] = t(o), h = p - 1, d--;
								break;
							case 1:
								for (o = 0, c = Math.pow(2, 16), l = 1; l != c;) a = v.val & v.position, v.position >>= 1, 0 == v.position && (v.position = n, v.val = i(v.index++)), o |= (a > 0 ? 1 : 0) * l, l <<= 1;
								u[p++] = t(o), h = p - 1, d--;
								break;
							case 2:
								return g.join("")
						}
						if (0 == d && (d = Math.pow(2, f), f++), u[h]) m = u[h];
						else {
							if (h !== p) return null;
							m = s + s.charAt(0)
						}
						g.push(m), u[p++] = s + m.charAt(0), s = m, 0 == --d && (d = Math.pow(2, f), f++)
					}
				}
			};
			return s
		}();
		null != t && (t.exports = e)
	}));
	! function(t) {
		t[t.GAS = 0] = "GAS", t[t.LIQUID = 1] = "LIQUID", t[t.SOLID = 2] = "SOLID"
	}(uh || (uh = {}));
	const ph = "chaingun.svg",
		fh = "circuitry.svg",
		mh = "cpu.svg",
		gh = "furnace.svg",
		vh = "gold-bar.svg",
		yh = "heavy-bullets.svg",
		xh = "melting-metal.svg",
		bh = "missile-swarm.svg",
		_h = "straight-pipe.svg",
		wh = "pipes.svg",
		Mh = "rocket-flight.svg",
		Sh = "spider-bot.svg",
		Th = "spoutnik.svg",
		Eh = "valve.svg";
	class Ah {
		constructor(t, e, n, i) {
			this.id = t, this.name = e, this.value = n, this.type = i
		}
	}
	class Lh extends Ah {
		constructor(t, e, n, i, r, s) {
			super(t, e, n, i), this.producedBy = r, this.icon = s
		}
	}
	const Ch = [new Ah(1, "Hydrogen", 1, uh.GAS), new Ah(2, "Helium", 2, uh.GAS), new Ah(3, "Oxygen", 5, uh.GAS), new Ah(4, "Nitrogen", 3, uh.GAS), new Ah(5, "Methane", 8, uh.GAS), new Ah(6, "Argon", 35, uh.GAS), new Ah(7, "Xenon", 50, uh.GAS), new Lh(8, "Ammonia", 25, uh.GAS, [{
			id: 1,
			cost: 2
		}, {
			id: 4,
			cost: 1
		}], wh)],
		Rh = [new Lh(20, "Water", 15, uh.LIQUID, [{
			id: 1,
			cost: 2
		}, {
			id: 3,
			cost: 1
		}], Eh), new Ah(21, "Sulpuric Acid", 30, uh.LIQUID), new Ah(22, "Petroleum", 40, uh.LIQUID)],
		Ph = [new Ah(40, "Iron", 6, uh.SOLID), new Ah(41, "Silicon", 12, uh.SOLID), new Ah(42, "Carbon", 16, uh.SOLID), new Ah(43, "Phosphorus", 27, uh.SOLID), new Ah(44, "Silver", 35, uh.SOLID), new Ah(45, "Gold", 40, uh.SOLID), new Ah(46, "Platinum", 45, uh.SOLID), new Ah(47, "Uranium", 50, uh.SOLID), new Ah(48, "Copper", 25, uh.SOLID), new Ah(49, "Aluminium", 30, uh.SOLID)],
		Dh = [new Lh(60, "Basic Fuel", 100, uh.LIQUID, [{
			id: 22,
			cost: 1
		}], Eh), new Lh(62, "Tritium", 130, uh.LIQUID, [{
			id: 1,
			cost: 2
		}, {
			id: 20,
			cost: 1
		}], ph), new Lh(64, "Electronics", 125, uh.SOLID, [{
			id: 41,
			cost: 2
		}, {
			id: 48,
			cost: 1
		}], fh), new Lh(66, "Munitions", 95, uh.SOLID, [{
			id: 43,
			cost: 1
		}, {
			id: 40,
			cost: 1
		}], yh), new Lh(67, "Ship Parts", 150, uh.SOLID, [{
			id: 40,
			cost: 1
		}, {
			id: 49,
			cost: 1
		}], gh), new Lh(69, "Nanobots", 120, uh.SOLID, [{
			id: 42,
			cost: 2
		}, {
			id: 44,
			cost: 1
		}], Sh), new Lh(70, "Enriched Uranium", 120, uh.SOLID, [{
			id: 47,
			cost: 1
		}], vh), new Lh(72, "Explosives", 115, uh.SOLID, [{
			id: 8,
			cost: 1
		}, {
			id: 3,
			cost: 1
		}], ph), new Lh(73, "Welding Units", 110, uh.SOLID, [{
			id: 2,
			cost: 1
		}, {
			id: 6,
			cost: 1
		}, {
			id: 48,
			cost: 1
		}], gh), new Lh(74, "Fertilizer", 110, uh.SOLID, [{
			id: 5,
			cost: 1
		}, {
			id: 6,
			cost: 1
		}], xh), new Lh(75, "Battery Cells", 140, uh.SOLID, [{
			id: 21,
			cost: 1
		}, {
			id: 48,
			cost: 1
		}], xh), new Lh(76, "Lazer Units", 150, uh.SOLID, [{
			id: 7,
			cost: 1
		}, {
			id: 49,
			cost: 1
		}, {
			id: 42,
			cost: 1
		}], ph), new Lh(61, "Rocket Fuel", 210, uh.LIQUID, [{
			id: 60,
			cost: 1
		}, {
			id: 3,
			cost: 1
		}], Mh), new Lh(63, "Fuel Rods", 225, uh.SOLID, [{
			id: 70,
			cost: 1
		}, {
			id: 40,
			cost: 1
		}], _h), new Lh(65, "Computer Parts", 280, uh.SOLID, [{
			id: 64,
			cost: 2
		}, {
			id: 45,
			cost: 1
		}], mh), new Lh(68, "Premium Ship Parts", 320, uh.SOLID, [{
			id: 67,
			cost: 2
		}, {
			id: 46,
			cost: 1
		}], xh), new Lh(71, "Torpedo Warheads", 380, uh.SOLID, [{
			id: 70,
			cost: 1
		}, {
			id: 66,
			cost: 1
		}], bh), new Lh(77, "Repair Drones", 350, uh.SOLID, [{
			id: 73,
			cost: 1
		}, {
			id: 69,
			cost: 1
		}], bh), new Lh(78, "Escape Pods", 540, uh.SOLID, [{
			id: 61,
			cost: 1
		}, {
			id: 68,
			cost: 2
		}], bh), new Lh(79, "Space Probe", 515, uh.SOLID, [{
			id: 76,
			cost: 1
		}, {
			id: 67,
			cost: 2
		}, {
			id: 62,
			cost: 1
		}], Th)],
		Oh = [...Ch, ...Rh, ...Ph, ...Dh],
		Ih = new Map;
	Oh.forEach((t => Ih.set(t.id, t))), (() => {
		const t = [];
		Oh.forEach((e => {
			t[e.id] && alert(`Resource id ${e.id} has been used more than once!`), t[e.id] = !0
		}))
	})();
	const Nh = "spacegamedata2";

	function zh() {
		try {
			if (localStorage.getItem(Nh)) {
				const t = JSON.parse(dh.decompress(localStorage.getItem(Nh)));
				return function(t) {
					const e = new Fh;
					Object.getOwnPropertyNames(e).forEach((n => {
						void 0 === t[n] && (console.log(`${n} was undefined, adding it to saveData`), t[n] = e[n])
					})), t.shipData.forEach((t => {
						t.cargo = t.cargo.filter((t => Ih.has(t.id))), t.navRoute.forEach((t => {
							t.instructions = t.instructions.filter((t => Ih.has(t.resource)))
						}));
						const e = new jh;
						Object.getOwnPropertyNames(e).forEach((n => {
							void 0 === t[n] && (t[n] = e[n])
						}))
					}))
				}(t), t
			}
			return new Fh
		} catch (t) {
			console.error(t)
		}
	}

	function Bh(t, e) {
		if (t) {
			t.lastSaved = Date.now() - e;
			try {
				localStorage.setItem(Nh, dh.compress(JSON.stringify(t)))
			} catch (t) {
				console.error(t)
			}
		}
	}

	function Uh(t) {
		const e = t.level + 5;
		if (!t.factorySlots || t.factorySlots.length != e)
			for (let n = 0; n < e; n++) t.factorySlots.length < n + 1 && t.factorySlots.push({
				id: -1,
				level: -1,
				type: Gh.empty,
				produced: 0
			})
	}
	class Fh {
		constructor() {
			this.money = 0, this.lastSaved = 0, this.dateOfSaveCreated = Date.now(), this.shipData = [new jh], this.currentShip = 0, this.playerName = "Player"
		}
	}
	class Hh {
		constructor() {
			this.distanceToTarget = 0, this.timeToTarget = "", this.fps = 0, this.drawCalls = 0, this.speed = 0, this.position = new we, this.cruising = !0, this.gatherTime = ""
		}
	}
	var kh, Gh;
	! function(t) {
		t[t.cruising = 0] = "cruising", t[t.stopped = 1] = "stopped", t[t.orbiting = 2] = "orbiting"
	}(kh || (kh = {}));
	class jh {
		constructor() {
			this.navRoute = [], this.navStage = 0, this.starSystem = [1, 1], this.shipSeed = 0, this.level = 1, this.shipName = "Ship", this.cargoCapacity = 100, this.cargo = [], this.position = [], this.stageProgress = 0, this.state = kh.stopped, this.factorySlots = [], this.solidSpeed = 1, this.liquidSpeed = 1, this.gasSpeed = 1, this.accelBoost = 0, this.speedBoost = 1
		}
	}! function(t) {
		t[t.machine = 0] = "machine", t[t.upgrade = 1] = "upgrade", t[t.empty = 2] = "empty"
	}(Gh || (Gh = {}));
	var Vh = function(t) {
		wn.call(this), this.element = t || document.createElement("div"), this.element.style.position = "absolute", this.addEventListener("removed", (function() {
			this.traverse((function(t) {
				t.element instanceof Element && null !== t.element.parentNode && t.element.parentNode.removeChild(t.element)
			}))
		}))
	};
	Vh.prototype = Object.assign(Object.create(wn.prototype), {
		constructor: Vh,
		copy: function(t, e) {
			return wn.prototype.copy.call(this, t, e), this.element = t.element.cloneNode(!0), this
		}
	});
	var Wh = function() {
			var t, e, n, i, r = this,
				s = new we,
				o = new Ze,
				a = new Ze,
				c = {
					objects: new WeakMap
				},
				l = document.createElement("div");
			l.style.overflow = "hidden", this.domElement = l, this.getSize = function() {
				return {
					width: t,
					height: e
				}
			}, this.setSize = function(r, s) {
				n = (t = r) / 2, i = (e = s) / 2, l.style.width = r + "px", l.style.height = s + "px"
			};
			var h = function(t, e, o) {
					if (t instanceof Vh) {
						t.onBeforeRender(r, e, o), s.setFromMatrixPosition(t.matrixWorld), s.applyMatrix4(a);
						var d = t.element,
							p = "translate(-50%,-50%) translate(" + (s.x * n + n) + "px," + (-s.y * i + i) + "px)";
						d.style.WebkitTransform = p, d.style.MozTransform = p, d.style.oTransform = p, d.style.transform = p, d.style.display = t.visible && s.z >= -1 && s.z <= 1 ? "" : "none";
						var f = {
							distanceToCameraSquared: u(o, t)
						};
						c.objects.set(t, f), d.parentNode !== l && l.appendChild(d), t.onAfterRender(r, e, o)
					}
					for (var m = 0, g = t.children.length; m < g; m++) h(t.children[m], e, o)
				},
				u = function() {
					var t = new we,
						e = new we;
					return function(n, i) {
						return t.setFromMatrixPosition(n.matrixWorld), e.setFromMatrixPosition(i.matrixWorld), t.distanceToSquared(e)
					}
				}(),
				d = function(t) {
					for (var e = function(t) {
							var e = [];
							return t.traverse((function(t) {
								t instanceof Vh && e.push(t)
							})), e
						}(t).sort((function(t, e) {
							return c.objects.get(t).distanceToCameraSquared - c.objects.get(e).distanceToCameraSquared
						})), n = e.length, i = 0, r = e.length; i < r; i++) e[i].element.style.zIndex = n - i
				};
			this.render = function(t, e) {
				!0 === t.autoUpdate && t.updateMatrixWorld(), null === e.parent && e.updateMatrixWorld(), o.copy(e.matrixWorldInverse), a.multiplyMatrices(e.projectionMatrix, o), h(t, t, e), d(t)
			}
		},
		$h = {
			computeTangents: function(t) {
				t.computeTangents(), console.warn("THREE.BufferGeometryUtils: .computeTangents() has been removed. Use BufferGeometry.computeTangents() instead.")
			},
			mergeBufferGeometries: function(t, e) {
				for (var n = null !== t[0].index, i = new Set(Object.keys(t[0].attributes)), r = new Set(Object.keys(t[0].morphAttributes)), s = {}, o = {}, a = t[0].morphTargetsRelative, c = new yi, l = 0, h = 0; h < t.length; ++h) {
					var u = t[h],
						d = 0;
					if (n !== (null !== u.index)) return console.error("THREE.BufferGeometryUtils: .mergeBufferGeometries() failed with geometry at index " + h + ". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."), null;
					for (var p in u.attributes) {
						if (!i.has(p)) return console.error("THREE.BufferGeometryUtils: .mergeBufferGeometries() failed with geometry at index " + h + '. All geometries must have compatible attributes; make sure "' + p + '" attribute exists among all geometries, or in none of them.'), null;
						void 0 === s[p] && (s[p] = []), s[p].push(u.attributes[p]), d++
					}
					if (d !== i.size) return console.error("THREE.BufferGeometryUtils: .mergeBufferGeometries() failed with geometry at index " + h + ". Make sure all geometries have the same number of attributes."), null;
					if (a !== u.morphTargetsRelative) return console.error("THREE.BufferGeometryUtils: .mergeBufferGeometries() failed with geometry at index " + h + ". .morphTargetsRelative must be consistent throughout all geometries."), null;
					for (var p in u.morphAttributes) {
						if (!r.has(p)) return console.error("THREE.BufferGeometryUtils: .mergeBufferGeometries() failed with geometry at index " + h + ".  .morphAttributes must be consistent throughout all geometries."), null;
						void 0 === o[p] && (o[p] = []), o[p].push(u.morphAttributes[p])
					}
					if (c.userData.mergedUserData = c.userData.mergedUserData || [], c.userData.mergedUserData.push(u.userData), e) {
						var f;
						if (n) f = u.index.count;
						else {
							if (void 0 === u.attributes.position) return console.error("THREE.BufferGeometryUtils: .mergeBufferGeometries() failed with geometry at index " + h + ". The geometry must have either an index or a position attribute"), null;
							f = u.attributes.position.count
						}
						c.addGroup(l, f, h), l += f
					}
				}
				if (n) {
					var m = 0,
						g = [];
					for (h = 0; h < t.length; ++h) {
						for (var v = t[h].index, y = 0; y < v.count; ++y) g.push(v.getX(y) + m);
						m += t[h].attributes.position.count
					}
					c.setIndex(g)
				}
				for (var p in s) {
					var x = this.mergeBufferAttributes(s[p]);
					if (!x) return console.error("THREE.BufferGeometryUtils: .mergeBufferGeometries() failed while trying to merge the " + p + " attribute."), null;
					c.setAttribute(p, x)
				}
				for (var p in o) {
					var b = o[p][0].length;
					if (0 === b) break;
					c.morphAttributes = c.morphAttributes || {}, c.morphAttributes[p] = [];
					for (h = 0; h < b; ++h) {
						var _ = [];
						for (y = 0; y < o[p].length; ++y) _.push(o[p][y][h]);
						var w = this.mergeBufferAttributes(_);
						if (!w) return console.error("THREE.BufferGeometryUtils: .mergeBufferGeometries() failed while trying to merge the " + p + " morphAttribute."), null;
						c.morphAttributes[p].push(w)
					}
				}
				return c
			},
			mergeBufferAttributes: function(t) {
				for (var e, n, i, r = 0, s = 0; s < t.length; ++s) {
					var o = t[s];
					if (o.isInterleavedBufferAttribute) return console.error("THREE.BufferGeometryUtils: .mergeBufferAttributes() failed. InterleavedBufferAttributes are not supported."), null;
					if (void 0 === e && (e = o.array.constructor), e !== o.array.constructor) return console.error("THREE.BufferGeometryUtils: .mergeBufferAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."), null;
					if (void 0 === n && (n = o.itemSize), n !== o.itemSize) return console.error("THREE.BufferGeometryUtils: .mergeBufferAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."), null;
					if (void 0 === i && (i = o.normalized), i !== o.normalized) return console.error("THREE.BufferGeometryUtils: .mergeBufferAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."), null;
					r += o.array.length
				}
				var a = new e(r),
					c = 0;
				for (s = 0; s < t.length; ++s) a.set(t[s].array, c), c += t[s].array.length;
				return new Jn(a, n, i)
			},
			interleaveAttributes: function(t) {
				for (var e, n = 0, i = 0, r = 0, s = t.length; r < s; ++r) {
					var o = t[r];
					if (void 0 === e && (e = o.array.constructor), e !== o.array.constructor) return console.error("AttributeBuffers of different types cannot be interleaved"), null;
					n += o.array.length, i += o.itemSize
				}
				var a = new co(new e(n), i),
					c = 0,
					l = [],
					h = ["getX", "getY", "getZ", "getW"],
					u = ["setX", "setY", "setZ", "setW"],
					d = 0;
				for (s = t.length; d < s; d++) {
					var p = (o = t[d]).itemSize,
						f = o.count,
						m = new ho(a, p, c, o.normalized);
					l.push(m), c += p;
					for (var g = 0; g < f; g++)
						for (var v = 0; v < p; v++) m[u[v]](g, o[h[v]](g))
				}
				return l
			},
			estimateBytesUsed: function(t) {
				var e = 0;
				for (var n in t.attributes) {
					var i = t.getAttribute(n);
					e += i.count * i.itemSize * i.array.BYTES_PER_ELEMENT
				}
				var r = t.getIndex();
				return e += r ? r.count * r.itemSize * r.array.BYTES_PER_ELEMENT : 0
			},
			mergeVertices: function(t, e = 1e-4) {
				e = Math.max(e, Number.EPSILON);
				for (var n = {}, i = t.getIndex(), r = t.getAttribute("position"), s = i ? i.count : r.count, o = 0, a = Object.keys(t.attributes), c = {}, l = {}, h = [], u = ["getX", "getY", "getZ", "getW"], d = 0, p = a.length; d < p; d++) {
					c[x = a[d]] = [], (M = t.morphAttributes[x]) && (l[x] = new Array(M.length).fill().map((() => [])))
				}
				var f = Math.log10(1 / e),
					m = Math.pow(10, f);
				for (d = 0; d < s; d++) {
					var g = i ? i.getX(d) : d,
						v = "",
						y = 0;
					for (p = a.length; y < p; y++)
						for (var x = a[y], b = (w = t.getAttribute(x)).itemSize, _ = 0; _ < b; _++) v += ~~(w[u[_]](g) * m) + ",";
					if (v in n) h.push(n[v]);
					else {
						for (y = 0, p = a.length; y < p; y++) {
							x = a[y];
							var w = t.getAttribute(x),
								M = t.morphAttributes[x],
								S = (b = w.itemSize, c[x]),
								T = l[x];
							for (_ = 0; _ < b; _++) {
								var E = u[_];
								if (S.push(w[E](g)), M)
									for (var A = 0, L = M.length; A < L; A++) T[A].push(M[A][E](g))
							}
						}
						n[v] = o, h.push(o), o++
					}
				}
				const C = t.clone();
				for (d = 0, p = a.length; d < p; d++) {
					x = a[d];
					var R = t.getAttribute(x);
					w = new Jn(new R.array.constructor(c[x]), R.itemSize, R.normalized);
					if (C.setAttribute(x, w), x in l)
						for (y = 0; y < l[x].length; y++) {
							var P = t.morphAttributes[x][y],
								D = new Jn(new P.array.constructor(l[x][y]), P.itemSize, P.normalized);
							C.morphAttributes[x][y] = D
						}
				}
				return C.setIndex(h), C
			},
			toTrianglesDrawMode: function(t, e) {
				if (0 === e) return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."), t;
				if (2 === e || 1 === e) {
					var n = t.getIndex();
					if (null === n) {
						var i = [],
							r = t.getAttribute("position");
						if (void 0 === r) return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."), t;
						for (var s = 0; s < r.count; s++) i.push(s);
						t.setIndex(i), n = t.getIndex()
					}
					var o = n.count - 2,
						a = [];
					if (2 === e)
						for (s = 1; s <= o; s++) a.push(n.getX(0)), a.push(n.getX(s)), a.push(n.getX(s + 1));
					else
						for (s = 0; s < o; s++) s % 2 == 0 ? (a.push(n.getX(s)), a.push(n.getX(s + 1)), a.push(n.getX(s + 2))) : (a.push(n.getX(s + 2)), a.push(n.getX(s + 1)), a.push(n.getX(s)));
					a.length / 3 !== o && console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");
					var c = t.clone();
					return c.setIndex(a), c.clearGroups(), c
				}
				return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:", e), t
			},
			computeMorphedAttributes: function(t) {
				if (!0 !== t.geometry.isBufferGeometry) return console.error("THREE.BufferGeometryUtils: Geometry is not of type BufferGeometry."), null;
				var e = new we,
					n = new we,
					i = new we,
					r = new we,
					s = new we,
					o = new we,
					a = new we,
					c = new we,
					l = new we;

				function h(t, h, u, d, p, f, m, g, v) {
					e.fromBufferAttribute(u, f), n.fromBufferAttribute(u, m), i.fromBufferAttribute(u, g);
					var y = t.morphTargetInfluences;
					if (h.morphTargets && d && y) {
						a.set(0, 0, 0), c.set(0, 0, 0), l.set(0, 0, 0);
						for (var x = 0, b = d.length; x < b; x++) {
							var _ = y[x];
							d = d[x];
							0 !== _ && (r.fromBufferAttribute(d, f), s.fromBufferAttribute(d, m), o.fromBufferAttribute(d, g), p ? (a.addScaledVector(r, _), c.addScaledVector(s, _), l.addScaledVector(o, _)) : (a.addScaledVector(r.sub(e), _), c.addScaledVector(s.sub(n), _), l.addScaledVector(o.sub(i), _)))
						}
						e.add(a), n.add(c), i.add(l)
					}
					t.isSkinnedMesh && (t.boneTransform(f, e), t.boneTransform(m, n), t.boneTransform(g, i)), v[3 * f + 0] = e.x, v[3 * f + 1] = e.y, v[3 * f + 2] = e.z, v[3 * m + 0] = n.x, v[3 * m + 1] = n.y, v[3 * m + 2] = n.z, v[3 * g + 0] = i.x, v[3 * g + 1] = i.y, v[3 * g + 2] = i.z
				}
				var u, d, p, f, m, g, v, y, x, b = t.geometry,
					_ = t.material,
					w = b.index,
					M = b.attributes.position,
					S = b.morphAttributes.position,
					T = b.morphTargetsRelative,
					E = b.attributes.normal,
					A = b.morphAttributes.position,
					L = b.groups,
					C = b.drawRange,
					R = new Float32Array(M.count * M.itemSize),
					P = new Float32Array(E.count * E.itemSize);
				if (null !== w)
					if (Array.isArray(_))
						for (f = 0, g = L.length; f < g; f++)
							for (x = _[(y = L[f]).materialIndex], m = Math.max(y.start, C.start), v = Math.min(y.start + y.count, C.start + C.count); m < v; m += 3) h(t, x, M, S, T, u = w.getX(m), d = w.getX(m + 1), p = w.getX(m + 2), R), h(t, x, E, A, T, u, d, p, P);
					else
						for (f = Math.max(0, C.start), g = Math.min(w.count, C.start + C.count); f < g; f += 3) h(t, _, M, S, T, u = w.getX(f), d = w.getX(f + 1), p = w.getX(f + 2), R), h(t, _, E, A, T, u, d, p, P);
				else if (void 0 !== M)
					if (Array.isArray(_))
						for (f = 0, g = L.length; f < g; f++)
							for (x = _[(y = L[f]).materialIndex], m = Math.max(y.start, C.start), v = Math.min(y.start + y.count, C.start + C.count); m < v; m += 3) h(t, x, M, S, T, u = m, d = m + 1, p = m + 2, R), h(t, x, E, A, T, u, d, p, P);
					else
						for (f = Math.max(0, C.start), g = Math.min(M.count, C.start + C.count); f < g; f += 3) h(t, _, M, S, T, u = f, d = f + 1, p = f + 2, R), h(t, _, E, A, T, u, d, p, P);
				return {
					positionAttribute: M,
					normalAttribute: E,
					morphedPositionAttribute: new oi(R, 3),
					morphedNormalAttribute: new oi(P, 3)
				}
			}
		};
	class qh {
		constructor(t, e, n, i, r) {
			this.currentSpeed = 0, this.startPoi = t, this.endPoi = e, this.acceleration = n, this.topSpeed = i, this.accelerationTime = i / n;
			const s = r ? e.getPosition().clone().sub(r).normalize() : e.getPosition().clone().sub(t.getPosition()).normalize();
			this.startPosition = r || t.getPosition().clone().add(s.clone().multiplyScalar(t.stoppingDistance)), this.endPosition = e.getPosition().clone().sub(s.clone().multiplyScalar(e.stoppingDistance)), this.totalVector = this.endPosition.clone().sub(this.startPosition), this.accelerationDistance = Xh(n, this.accelerationTime), this.totalDistance = this.endPosition.clone().sub(this.startPosition).length(), 2 * this.accelerationDistance < this.totalDistance ? this.totalTime = (this.totalDistance - 2 * this.accelerationDistance) / i + 2 * this.accelerationTime : (this.accelerationTime = function(t, e) {
				return Math.sqrt(e / (.5 * t))
			}(n, this.totalDistance / 2), this.accelerationDistance = Xh(n, this.accelerationTime), this.totalTime = 2 * this.accelerationTime)
		}
		getPostionInRoute(t) {
			if (t < this.accelerationTime || this.totalTime - t < this.accelerationTime) {
				if (t < this.accelerationTime) {
					const e = Xh(this.acceleration, t);
					return this.currentSpeed = this.acceleration * t, this.startPosition.clone().add(this.totalVector.clone().setLength(e))
				} {
					const e = Xh(this.acceleration, this.totalTime - t);
					return this.currentSpeed = this.acceleration * (this.totalTime - t), this.endPosition.clone().sub(this.totalVector.clone().setLength(e))
				}
			}
			this.currentSpeed = this.topSpeed;
			const e = this.accelerationDistance + (t - this.accelerationTime) * this.topSpeed;
			return this.startPosition.clone().add(this.totalVector.clone().setLength(e))
		}
	}

	function Xh(t, e) {
		return .5 * t * Math.pow(e, 2)
	}
	class Yh {
		constructor(t) {
			this.particleCount = 100, this.distance = 50, this.maxSpeed = 60, this.geometry = new yi;
			const e = (new Pc).load("img/gravel.png"),
				n = new we;
			this.vertices = [];
			for (let t = 0; t < this.particleCount; t++) n.x = 2 * this.distance * Math.random() - this.distance, n.y = 2 * this.distance * Math.random() - this.distance, n.z = 2 * this.distance * Math.random() - this.distance, this.vertices.push(n.x, n.y, n.z);
			this.geometry.setAttribute("position", new oi(this.vertices, 3)), this.material = new ia({
				size: .2,
				sizeAttenuation: !0,
				map: e,
				alphaTest: .1,
				transparent: !0
			}), this.material.color.setScalar(.8), this.particles = new ca(this.geometry, this.material), t.add(this.particles)
		}
		update(t, e) {
			const n = new we;
			if (!t.currentNavigation) return;
			this.material.opacity = Math.min(t.currentNavigation.currentSpeed / (t.getMaxSpeed() / 4), 1);
			const i = t.currentNavigation.totalVector.clone().normalize().multiplyScalar(t.currentNavigation.currentSpeed / t.getMaxSpeed() * -1 * e * this.maxSpeed);
			this.particles.position.copy(t.shipModel.position);
			for (let t = 0; t < this.particleCount; t++) n.x = this.vertices[3 * t], n.y = this.vertices[3 * t + 1], n.z = this.vertices[3 * t + 2], n.add(i), n.x < -this.distance && (n.x = this.distance, n.y = 2 * this.distance * Math.random() - this.distance, n.z = 2 * this.distance * Math.random() - this.distance), n.x > this.distance && (n.x = -this.distance, n.y = 2 * this.distance * Math.random() - this.distance, n.z = 2 * this.distance * Math.random() - this.distance), n.y < -this.distance && (n.y = this.distance, n.x = 2 * this.distance * Math.random() - this.distance, n.z = 2 * this.distance * Math.random() - this.distance), n.y > this.distance && (n.y = -this.distance, n.x = 2 * this.distance * Math.random() - this.distance, n.z = 2 * this.distance * Math.random() - this.distance), n.z < -this.distance && (n.z = this.distance, n.x = 2 * this.distance * Math.random() - this.distance, n.y = 2 * this.distance * Math.random() - this.distance), n.z > this.distance && (n.z = -this.distance, n.x = 2 * this.distance * Math.random() - this.distance, n.y = 2 * this.distance * Math.random() - this.distance), this.vertices[3 * t] = n.x, this.vertices[3 * t + 1] = n.y, this.vertices[3 * t + 2] = n.z;
			this.geometry.setAttribute("position", new oi(this.vertices, 3)), this.geometry.attributes.position.needsUpdate = !0, this.geometry.computeBoundingSphere()
		}
	}
	const Zh = [];

	function Jh(e, n = t) {
		let i;
		const r = [];

		function s(t) {
			if (o(e, t) && (e = t, i)) {
				const t = !Zh.length;
				for (let t = 0; t < r.length; t += 1) {
					const n = r[t];
					n[1](), Zh.push(n, e)
				}
				if (t) {
					for (let t = 0; t < Zh.length; t += 2) Zh[t][0](Zh[t + 1]);
					Zh.length = 0
				}
			}
		}
		return {
			set: s,
			update: function(t) {
				s(t(e))
			},
			subscribe: function(o, a = t) {
				const c = [o, a];
				return r.push(c), 1 === r.length && (i = n(s) || t), o(e), () => {
					const t = r.indexOf(c); - 1 !== t && r.splice(t, 1), 0 === r.length && (i(), i = null)
				}
			}
		}
	}
	const Qh = Jh(new class {
		constructor() {
			this.stats = new Hh, this.messages = [], this.showNavPath = !1, this.useNavCamera = !1, this.warp = !1, this.settings = {
				fontSize: "16px",
				rendererSettings: {
					settingsChanged: !1,
					resolution: 1,
					bloomOn: !1,
					change() {
						this.settingsChanged = !0
					}
				},
				musicOn: !1,
				voicesOn: !1,
				selectedVoice: 0,
				shipColor: "#C0C0C0"
			}, this.options = {
				rendererOptions: {
					antialiasOptions: [{
						name: "On",
						value: !0
					}, {
						name: "Off",
						value: !1
					}],
					resolutionOptions: [{
						name: "200%",
						value: 2
					}, {
						name: "150%",
						value: 1.5
					}, {
						name: "100%",
						value: 1
					}, {
						name: "75%",
						value: .75
					}, {
						name: "50%",
						value: .5
					}, {
						name: "25%",
						value: .25
					}]
				},
				fontSizeOptions: ["8px", "10px", "12px", "14px", "16px", "18px", "20px"]
			}, this.persistent = zh(), this.persistent.shipData.forEach((t => Uh(t)))
		}
		sendMessage(t) {
			this.messages.push(t), this.messages.length > 10 && (this.messages = this.messages.splice(0, this.messages.length - 10)), this.settings.voicesOn && ah().speak(t)
		}
		getCurrentShip() {
			return this.persistent.shipData[this.persistent.currentShip]
		}
		getShipUpgradePrice() {
			return 1e5 * Math.pow(1.5, this.getCurrentShip().level)
		}
		upgradeShip() {
			return !!this.spendMoney(this.getShipUpgradePrice()) && (this.getCurrentShip().level++, Uh(this.getCurrentShip()), !0)
		}
		addMoney(t) {
			isNaN(t) || (this.persistent.money += t)
		}
		spendMoney(t) {
			return !isNaN(t) && this.persistent.money >= t && (this.persistent.money -= t, !0)
		}
		toggleCamera() {
			this.useNavCamera = !this.useNavCamera, this.starSystem.updatePoiLabels()
		}
		getCargoQty(t) {
			return t.cargo.map((t => t.qty)).reduce(((t, e) => t + e), 0)
		}
		getCargoQtyToSell(t) {
			return t.cargo.filter((t => t.sell)).map((t => t.qty)).reduce(((t, e) => t + e), 0)
		}
		getResourceQty(t, e) {
			return t.cargo.filter((t => t.id == e)).length > 0 ? t.cargo.filter((t => t.id == e))[0].qty : 0
		}
		getCargoPerSecond(t) {
			return 10
		}
		addCargo(t, e, n) {
			t.cargoCapacity - this.getCargoQty(t) >= n && (t.cargo.filter((t => t.id == e)).length > 0 ? t.cargo.filter((t => t.id == e))[0].qty += n : t.cargo.push({
				id: e,
				qty: n,
				sell: !0
			}))
		}
		sellCargo(t, e, n) {
			t.cargo.filter((t => t.id == e)).length > 0 && t.cargo.filter((t => t.id == e))[0].qty >= n && (t.cargo.filter((t => t.id == e))[0].qty -= n, this.addMoney(Ih.get(e).value * n))
		}
		consumeCargo(t, e, n) {
			t.cargo.filter((t => t.id == e)).length > 0 && t.cargo.filter((t => t.id == e))[0].qty >= n && (t.cargo.filter((t => t.id == e))[0].qty -= n)
		}
		resolutionChanged() {
			this.settings.rendererSettings.settingsChanged = !0
		}
		voiceChanged() {
			ah().setVoice(this.settings.selectedVoice), ah().speak(ah().voices()[this.settings.selectedVoice].name)
		}
	});

	function Kh() {
		Qh.update((t => t))
	}
	const tu = Jh(!1),
		eu = Jh(0),
		nu = Jh(!1),
		iu = Jh(!1),
		ru = Jh(!1),
		su = Jh(!1),
		ou = Jh(0),
		au = Jh(0),
		cu = Jh(!1),
		lu = Jh(!1),
		hu = Jh(0),
		uu = Jh(!1),
		du = Jh(0),
		pu = Jh(!1);
	let fu = [];
	const mu = Jh(fu);
	mu.subscribe((t => fu = t));
	const gu = Jh(0);

	function vu(t) {
		fu.includes(t) ? fu = fu.filter((e => e != t)) : fu.push(t), mu.update((t => fu))
	}
	const yu = [],
		xu = new Map;

	function bu(t) {
		return t.type == uh.SOLID ? "Processor" : t.type == uh.LIQUID ? "Distillery" : t.type == uh.GAS ? "Refinery" : void 0
	}
	const _u = {
		x: -1e6,
		y: -1e6,
		machines: []
	};

	function wu(t, e) {
		let n = !1;
		if (e.pois.forEach((e => {
				e.resources.filter((e => e.resource.id == t)).length > 0 && (n = !0)
			})), !n && Ih.get(t).producedBy && Ih.get(t).producedBy.length > 0) {
			let i = !0;
			Ih.get(t).producedBy.forEach((t => {
				wu(t.id, e) || (i = !1)
			})), i && (n = !0)
		}
		return n
	}

	function Mu(t, e) {
		const n = Ih.get(t.produces);
		let i = !0;
		return n.producedBy.forEach((t => {
			wu(t.id, e) || (i = !1)
		})), i
	}

	function Su(t, e) {
		return function(t) {
			return _u.x == t.x && _u.y == t.y || (_u.x = t.x, _u.y = t.y, _u.machines = yu.filter((e => Mu(e, t))), _u.machines.sort(((t, e) => t.cost - e.cost))), _u.machines
		}(t).filter((t => 0 == t.requires.length || 0 == t.requires.filter((t => 0 == e.factorySlots.filter((e => e.id == t && e.type == Gh.machine)).length)).length))
	}

	function Tu(t, e, n) {
		if (!t || t.type != Gh.machine) return !1;
		let i = !0;
		return Ih.get(t.id).producedBy.forEach((t => {
			n.getResourceQty(e, t.id) < t.cost && (i = !1)
		})), i
	}

	function Eu(t, e, n) {
		e.factorySlots.forEach((i => {
			if (i.type == Gh.machine)
				if (Tu(i, e, n)) {
					const r = xu.get(i.id);
					if (i.produced += t / r.time, i.produced > 1) {
						const t = Ih.get(i.id);
						for (; i.produced > 1 && Tu(i, e, n);) t.producedBy.forEach((t => {
							n.consumeCargo(e, t.id, t.cost)
						})), n.addCargo(e, t.id, r.qty), i.produced--
					}
				} else i.produced = 0
		}))
	}
	let Au;

	function Lu(t, e, n, i) {
		let r = !1,
			s = 0;
		const o = [],
			a = [];
		for (t.forEach((t => {
				if (o[t.resource] = 0, e.resourceMap.has(t.resource)) switch (a[t.resource] = e.resourceMap.get(t.resource).percentage * Au.getCargoPerSecond(n), Ih.get(t.resource).type) {
					case uh.GAS:
						a[t.resource] *= n.gasSpeed;
						break;
					case uh.LIQUID:
						a[t.resource] *= n.liquidSpeed;
						break;
					case uh.SOLID:
						a[t.resource] *= n.solidSpeed
				}
			})); !r;) s += .5, t.forEach((t => {
			o[t.resource] < t.amount || -1 == t.amount ? o[t.resource] += .5 * a[t.resource] : o[t.resource] = t.amount
		})), 0 == t.filter((t => -1 == t.amount)).length && 0 == t.filter((t => t.amount > o[t.resource])).length && (r = !0), o.reduce(((t, e) => t + e), 0) > n.cargoCapacity - i && (r = !0);
		return s
	}
	Oh.forEach((t => {
		t.producedBy && t.producedBy.length > 0 && yu.push({
			produces: t.id,
			cost: Math.round(t.value * Math.max(200, 2 * t.value)),
			multiplier: 7.5,
			suffix: bu(t),
			qty: Ih.get(t.id).producedBy.map((t => t.cost)).reduce(((t, e) => t + e), 0),
			time: 3 * Ih.get(t.id).producedBy.map((t => t.cost)).reduce(((t, e) => t + e), 0),
			requires: t.producedBy.map((t => t.id)).filter((t => Dh.filter((e => e.id == t)).length > 0))
		})
	})), yu.forEach((t => {
		xu.set(t.produces, t)
	})), Qh.subscribe((t => Au = t));
	class Cu {
		constructor(t, e, n, i, r, s) {
			if (this.cargoToAdd = [], this.cargoAdded = 0, this.resourceAdded = [], this.totalCargoToAdd = 0, this.cargoSelling = 0, this.speed = 0, this.startPosition = t, this.endPosition = e, this.poi = n, this.instructions = i, this.shipData = r, this.poi.buyer) this.time = Au.getCargoQtyToSell(r) / Au.getCargoPerSecond(this.shipData), this.totalCargoToAdd = Au.getCargoQtyToSell(r);
			else {
				if (this.totalCargoToAdd = r.cargoCapacity - s, 0 == i.filter((t => -1 == t.amount)).length) {
					const t = i.filter((t => -1 != t.amount)).map((t => t.amount)).reduce(((t, e) => t + e), 0);
					t < this.totalCargoToAdd && (this.totalCargoToAdd = t)
				}
				i.forEach((t => {
					this.cargoToAdd[t.resource] = 0, this.resourceAdded[t.resource] = 0
				})), this.time = Lu(i, n, r, s)
			}
			this.time < 5 && (this.time = 5), this.speed = this.startPosition.clone().sub(this.endPosition).length() / this.time
		}
		sellCargo(t) {
			this.cargoSelling += Au.getCargoPerSecond(this.shipData) * t, this.cargoSelling > 1 && this.shipData.cargo.forEach((t => {
				if (t.sell)
					for (; t.qty >= 1 && this.cargoSelling > 1;) Au.sellCargo(this.shipData, t.id, 1), this.cargoSelling--, this.cargoAdded++
			}))
		}
		updateCargo(t) {
			if (this.poi.buyer) this.sellCargo(t);
			else {
				const e = Au.getCargoPerSecond(this.shipData);
				this.instructions.forEach((n => {
					if (!this.poi.resourceMap.has(n.resource)) return;
					let i = 1;
					switch (Ih.get(n.resource).type) {
						case uh.GAS:
							i = this.shipData.gasSpeed;
							break;
						case uh.LIQUID:
							i = this.shipData.liquidSpeed;
							break;
						case uh.SOLID:
							i = this.shipData.solidSpeed
					}
					this.cargoToAdd[n.resource] += this.poi.resourceMap.get(n.resource).percentage * e * i * t, -1 !== n.amount && this.cargoToAdd[n.resource] > n.amount - this.resourceAdded[n.resource] && (this.cargoToAdd[n.resource] = n.amount - this.resourceAdded[n.resource]), this.cargoToAdd[n.resource] >= 1 && (Au.addCargo(this.shipData, n.resource, Math.min(Math.floor(this.cargoToAdd[n.resource]), this.shipData.cargoCapacity - Au.getCargoQty(this.shipData))), this.cargoAdded += Math.floor(this.cargoToAdd[n.resource]), this.resourceAdded[n.resource] += Math.floor(this.cargoToAdd[n.resource]), this.cargoToAdd[n.resource] -= Math.floor(this.cargoToAdd[n.resource]))
				}))
			}
		}
		isComplete(t) {
			return t > this.time && this.cargoAdded >= this.totalCargoToAdd
		}
		getPlanetVector(t) {
			return t.clone().sub(this.poi.getPosition())
		}
		getPostionInOrbit(t) {
			if (0 == this.time) return this.endPosition;
			const e = t / this.time,
				n = this.getPlanetVector(this.startPosition),
				i = this.getPlanetVector(this.endPosition),
				r = n.angleTo(i);
			return n.applyAxisAngle(n.clone().cross(i).normalize(), r * e).add(this.poi.getPosition())
		}
	}
	let Ru;
	Qh.subscribe((t => Ru = t));
	class Pu {
		constructor(t, e) {
			this.speedDecay = .6, this.shipData = e;
			const n = function() {
				const t = new Ui(2, 1, 3);
				t.translate(0, 0, 1.5);
				const e = new Ui(2.4, 1.2, 3),
					n = e.getAttribute("position").array,
					i = n.length / 3,
					r = [];
				for (let t = 0; t < i; t++) {
					let [e, i, s] = [n[3 * t], n[3 * t + 1], n[3 * t + 2]];
					e > 1 && i > .5 && 1.5 == s && (e = 1, i = .4), e > 1 && i < -.5 && 1.5 == s && (e = 1), e < -1 && i > .5 && 1.5 == s && (e = -1, i = .4), e < -1 && i < -.5 && 1.5 == s && (e = -1), r.push(e, i, s)
				}
				e.setAttribute("position", new Jn(new Float32Array(r), 3, !1)), e.translate(0, .1, -1.5);
				const s = new Xa(.5, 16, 12);
				s.scale(1, .75, 1), s.translate(0, .4, 2);
				const o = new ma(Math.sqrt(2), 1, 4);
				o.rotateX(Math.PI / 2), o.rotateZ(Math.PI / 4), o.scale(1, .5, 1), o.translate(0, 0, 3.5);
				const a = new ma(2, 6, 4);
				a.rotateX(Math.PI / 2), a.scale(1, .5, 1), a.translate(0, .05, -.25);
				const c = $h.mergeBufferGeometries([t, e, s, o, a]);
				return c.computeVertexNormals(), c.computeBoundingBox(), c
			}();
			this.material = new Ja({
				color: 12632256,
				roughness: .5
			}), this.shipModel = new zi(n, this.material), this.shipModel.geometry.computeVertexNormals(), t.add(this.shipModel), this.engineLight = new al(16748544, 1, 150), this.shipModel.add(this.engineLight), this.engineLight.position.z = -20, this.particles = new Yh(t), this.htmlDiv = document.createElement("div"), this.nameLabel = document.createElement("p"), this.nameLabel.innerText = "You", this.htmlDiv.classList.add("poi-label", "ship"), this.htmlDiv.appendChild(this.nameLabel), this.css2dLabel = new Vh(this.htmlDiv), this.css2dLabel.position.set(0, 0, 0)
		}
		getMaxSpeed() {
			return 2e4 + this.shipData.speedBoost
		}
		getAcceleration() {
			return 500 + this.shipData.accelBoost
		}
		update(t, e) {
			const n = this.shipModel.position.clone();
			this.navigate(t, e), Eu(t, this.shipData, Ru), this.positionChange = this.shipModel.position.clone(), this.positionChange.sub(n), this.particles.update(this, t), this.shipData.position = [this.shipModel.position.x, this.shipModel.position.y, this.shipModel.position.z]
		}
		longUpdate(t, e, n, i) {
			let r = t;
			const s = this.shipModel.position.clone();
			if (!this.currentNavigation && this.shipData.state == kh.cruising) {
				const t = this.shipData.navRoute[this.shipData.navStage];
				if (t) {
					const n = e.pois[t.id];
					n && (this.currentNavigation = new qh(n, n, this.getAcceleration(), this.getMaxSpeed(), this.shipModel.position.clone()))
				}
			}
			if (!this.currentOrbit && this.shipData.state == kh.orbiting) {
				const t = this.shipData.navRoute[this.shipData.navStage];
				if (t) {
					const n = e.pois[t.id];
					if (n) {
						const t = this.getNextPoi(e),
							i = new qh(n, t, this.getAcceleration(), this.getMaxSpeed(), null);
						this.currentOrbit = new Cu(this.shipModel.position.clone(), i.startPosition, n, this.shipData.navRoute[this.shipData.navStage].instructions, this.shipData, Ru.getCargoQty(this.shipData))
					}
				}
			}
			let o = 0;
			for (; r > 0 && o < i;) {
				if (o++, (this.shipData.state == kh.stopped || !this.currentNavigation && this.shipData.state == kh.cruising || !this.currentOrbit && this.shipData.state == kh.orbiting) && (this.shipData.state = kh.stopped, this.navigate(1, e), Eu(1, this.shipData, Ru), r--), this.currentNavigation && this.shipData.state == kh.cruising) {
					if (this.currentNavigation.totalTime > this.shipData.stageProgress + r) {
						this.navigate(r, e), Eu(r, this.shipData, Ru), r = 0;
						break
					}
					r -= this.currentNavigation.totalTime - this.shipData.stageProgress, this.navigate(this.currentNavigation.totalTime + 1, e), Eu(this.currentNavigation.totalTime, this.shipData, Ru)
				}
				if (this.currentOrbit && this.shipData.state == kh.orbiting) {
					if (this.currentOrbit.time > this.shipData.stageProgress + r) {
						this.navigate(r, e), Eu(r, this.shipData, Ru), r = 0;
						break
					}
					r -= this.currentOrbit.time - this.shipData.stageProgress, this.navigate(this.currentOrbit.time + 1, e), Eu(this.currentOrbit.time, this.shipData, Ru)
				}
			}
			return this.positionChange = this.shipModel.position.clone(), this.positionChange.sub(s), n.update(t), r
		}
		setPositionFrom(t, e) {
			const n = this.shipModel.position.clone();
			this.shipModel.position.copy(t), this.positionChange = this.shipModel.position.clone(), this.positionChange.sub(n), e.mirrorShipPositionChange()
		}
		getNextPoi(t) {
			let e = this.shipData.navStage + 1;
			return e > this.shipData.navRoute.length - 1 && (e = 0), t.pois[this.shipData.navRoute[e].id]
		}
		moveToNextStage(t) {
			const e = this.shipData.navRoute[this.shipData.navStage];
			if (!e) return;
			const n = t.pois[e.id];
			if (!n) return void(this.shipData.navStage = 0);
			this.shipData.navStage++, this.shipData.navStage > this.shipData.navRoute.length - 1 && (this.shipData.navStage = 0);
			const i = t.pois[this.shipData.navRoute[this.shipData.navStage].id];
			return this.currentNavigation = n == i ? new qh(n, n, this.getAcceleration(), this.getMaxSpeed(), this.shipModel.position.clone()) : new qh(n, i, this.getAcceleration(), this.getMaxSpeed(), null), i
		}
		navigate(t, e) {
			const n = this.shipData.navRoute[this.shipData.navStage];
			if (!n) return this.currentNavigation = null, void(this.shipData.state = kh.stopped);
			const i = e.pois[n.id];
			if (i) {
				if (this.currentNavigation && i.name != this.currentNavigation.endPoi.name) return this.shipData.state = kh.cruising, this.shipData.stageProgress = 0, void(this.currentNavigation = new qh(this.currentNavigation.endPoi, i, this.getAcceleration(), this.getMaxSpeed(), this.shipModel.position.clone()));
				switch (this.shipData.state) {
					case kh.stopped: {
						if (this.shipData.stageProgress = 0, !this.currentNavigation) return this.moveToNextStage(e), void(this.currentNavigation && (this.shipData.state = kh.cruising));
						const t = this.getNextPoi(e),
							n = new qh(i, t, this.getAcceleration(), this.getMaxSpeed(), null);
						this.currentOrbit = new Cu(this.currentNavigation.endPosition, t.index == i.index ? this.currentNavigation.endPosition : n.startPosition, i, this.shipData.navRoute[this.shipData.navStage].instructions, this.shipData, Ru.getCargoQty(this.shipData)), this.shipData.state = kh.orbiting;
						break
					}
					case kh.orbiting:
						if (!this.currentOrbit) return void(this.shipData.state = kh.stopped);
						if (this.engineLight.intensity -= t, this.engineLight.intensity < 0 && (this.engineLight.intensity = 0), this.shipData.stageProgress += t, this.shipModel.position.copy(this.currentOrbit.getPostionInOrbit(this.shipData.stageProgress)), this.currentOrbit.updateCargo(t), this.currentOrbit.isComplete(this.shipData.stageProgress)) {
							const t = this.moveToNextStage(e);
							this.shipData.stageProgress = 0, i.buyer ? Ru.sendMessage("Cargo Unloaded") : Ru.sendMessage("Cargo Full"), Ru.sendMessage("Navigating to " + t.name), this.shipData.state = kh.cruising
						}
						this.matchRotationToVector(t, this.positionChange);
						break;
					case kh.cruising:
						if (this.shipData.stageProgress += t, !this.currentNavigation || this.shipData.stageProgress > this.currentNavigation.totalTime) return void(this.shipData.state = kh.stopped);
						this.shipModel.position.copy(this.currentNavigation.getPostionInRoute(this.shipData.stageProgress)), this.engineLight.intensity += t, this.engineLight.intensity > 3 && (this.engineLight.intensity = 2.9), this.matchRotationToVector(t, this.currentNavigation.totalVector)
				}
			} else this.shipData.navStage = 0
		}
		matchRotationToVector(t, e) {
			const n = (new Ze).lookAt(e, new we(0, 0, 0), new we(0, 1, 0)),
				i = (new _e).setFromRotationMatrix(n);
			this.shipModel.quaternion.slerp(i, t)
		}
		updateTargetDiv(t, e) {
			const n = this.shipData.navRoute[this.shipData.navStage];
			if (!n) return void t.element.classList.add("hidden");
			const i = e.pois[n.id];
			i && !i.getObject3D().children.includes(t) && (e.pois.forEach((e => {
				e.getObject3D().children.includes(t) && e.getObject3D().remove(t)
			})), i && (i.getObject3D().add(t), e.light.position.copy(i.getPosition().clone().add(new we(0, 1e4, 0))), e.light.lookAt(this.shipModel.position), Ru.targetPoi = i, e.updatePoiLabels())), Ru.useNavCamera ? (t.element.classList.add("hidden"), this.shipModel.children.includes(this.css2dLabel) || this.shipModel.add(this.css2dLabel)) : (t.element.classList.remove("hidden"), this.shipModel.children.includes(this.css2dLabel) && this.shipModel.remove(this.css2dLabel))
		}
		updateColor(t) {
			this.material.color = new Vn(t)
		}
	}
	const Du = 1e3,
		Ou = 1e6,
		Iu = 1e9,
		Nu = 1e12;

	function zu(t, e) {
		return t ? t < 0 ? "-" + zu(-1 * t, e) : t >= 1e15 ? t.toExponential(e).replace("+", "") : t >= Nu ? (t / Nu).toFixed(e) + "T" : t >= Iu ? (t / Iu).toFixed(e) + "B" : t >= Ou ? (t / Ou).toFixed(e) + "M" : t >= Du ? (t / Du).toFixed(e) + "K" : t.toFixed(e) : "0"
	}

	function Bu(t) {
		return t ? t < 0 ? "-" + Bu(-1 * t) : zu(t, t < Du ? 0 : 2) : "0"
	}

	function Uu(t) {
		const e = Math.floor(t / 1e3 % 60),
			n = Math.floor(t / 6e4 % 60),
			i = Math.floor(t / 36e5 % 24),
			r = Math.floor(t / 864e5);
		return (r > 0 ? r + "d " : "") + (i > 0 ? (i < 10 ? "0" + i : i) + "h " : "") + (n > 0 ? (n < 10 ? "0" + n : n) + "m " : "") + (e < 10 ? "0" + e : e) + "s"
	}
	let Fu;

	function Hu(t) {
		ou.update((e => t)), iu.update((t => !0))
	}
	Qh.subscribe((t => Fu = t));
	class ku {
		constructor(t) {
			this.name = "Unset", this.buyer = !1, this.resources = [], this.resourceMap = new Map, this.index = t, this.htmlDiv = document.createElement("div"), this.nameLabel = document.createElement("p");
			const e = e => {
				e.preventDefault(), Hu(t)
			};
			this.nameLabel.addEventListener("click", e), this.nameLabel.addEventListener("touchstart", e), this.nameLabel.innerText = "10 KM", this.distanceLabel = document.createElement("span"), this.distanceLabel.innerText = "10 KM", this.htmlDiv.classList.add("poi-label"), this.htmlDiv.appendChild(this.nameLabel), this.htmlDiv.appendChild(this.distanceLabel), this.css2dLabel = new Vh(this.htmlDiv), this.css2dLabel.position.set(0, 0, 0)
		}
		getDistance(t) {
			return t.clone().sub(this.getPosition()).length()
		}
		showLabel() {
			Fu.useNavCamera ? this.distanceLabel.classList.add("hidden") : this.distanceLabel.classList.remove("hidden"), this.getObject3D().children.includes(this.css2dLabel) || this.getObject3D().add(this.css2dLabel)
		}
		hideLabel() {
			this.getObject3D().children.includes(this.css2dLabel) && this.getObject3D().remove(this.css2dLabel)
		}
		updateLabel() {
			Fu.showNavPath ? (this.nameLabel.innerText = this.name, !Fu.targetPoi || Fu.targetPoi.name != this.name || Fu.useNavCamera ? this.showLabel() : this.hideLabel()) : this.hideLabel()
		}
		updateDistanceLabel(t) {
			this.distanceLabel.innerText = zu(this.getDistance(t.shipModel.position), 2) + " km"
		}
		destroyLabel() {
			const t = this.index;
			this.nameLabel.removeEventListener("click", (function() {
				Hu(t)
			})), this.htmlDiv.remove()
		}
		addRandomResource(t, e) {
			this.addResource(t, Math.floor(e * t.length))
		}
		addResource(t, e) {
			if (this.resourceMap.has(t[e].id)) ++e > t.length - 1 && (e = 0), this.addResource(t, e);
			else {
				const n = {
					resource: t[e],
					percentage: 0
				};
				this.resources.push(n), this.resourceMap.set(n.resource.id, n), this.calculateResourceTotals()
			}
		}
		calculateResourceTotals() {
			const t = this.resources.map((t => 1 / t.resource.value)).reduce(((t, e) => t + e), 0);
			this.resources.forEach((e => {
				e.percentage = 1 / e.resource.value / t, this.resourceMap.set(e.resource.id, e)
			}))
		}
		setResources(...t) {
			const e = [];
			t.forEach((t => {
				e.includes(t) || e.push(t)
			}));
			const n = e.map((t => 1 / t.value)).reduce(((t, e) => t + e), 0);
			e.forEach((t => {
				const e = {
					resource: t,
					percentage: 1 / t.value / n
				};
				this.resources.push(e), this.resourceMap.set(t.id, e)
			}))
		}
		updateUniforms(t, e) {}
	}
	var Gu;
	! function(t) {
		t[t.Star = 0] = "Star", t[t.Station = 1] = "Station", t[t.Planet = 2] = "Planet", t[t.Moon = 3] = "Moon", t[t.Asteroids = 4] = "Asteroids"
	}(Gu || (Gu = {}));
	const ju = ["a", "e", "i", "o", "u", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
		Vu = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "y", "z", "br", "cr", "dr", "gr", "kr", "pr", "sr", "tr", "str", "vr", "zr", "bl", "cl", "fl", "gl", "kl", "pl", "sl", "vl", "zl", "ch", "sh", "ph", "th"],
		Wu = ["a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "ae", "ai", "ao", "au", "aa", "ea", "ei", "eo", "eu", "ee", "ia", "io", "iu", "oa", "oi", "oo", "ua", "ue"],
		$u = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "y", "z", "br", "cr", "dr", "gr", "kr", "pr", "sr", "tr", "str", "vr", "zr", "bl", "cl", "fl", "hl", "gl", "kl", "ml", "nl", "pl", "sl", "tl", "vl", "zl", "ch", "sh", "ph", "th", "bd", "cd", "gd", "kd", "ld", "md", "nd", "pd", "rd", "sd", "zd", "bs", "cs", "ds", "gs", "ks", "ls", "ms", "ns", "ps", "rs", "ts", "ct", "gt", "lt", "nt", "st", "rt", "zt", "bb", "cc", "dd", "gg", "kk", "ll", "mm", "nn", "pp", "rr", "ss", "tt", "zz"],
		qu = ["", "", "", "", "", "", "", "", "", "", "", "", "", "b", "c", "d", "f", "g", "h", "k", "l", "m", "n", "p", "r", "s", "t", "x", "y", "b", "c", "d", "f", "g", "h", "k", "l", "m", "n", "p", "r", "s", "t", "x", "y", "cs", "ks", "ls", "ms", "ns", "ps", "rs", "ts", "ys", "ct", "ft", "kt", "lt", "nt", "ph", "sh", "th"];
	let Xu, Yu, Zu, Ju, Qu, Ku, td;
	var ed = lh((function(t) {
			! function(t, e, n) {
				function i(t) {
					var e = this,
						n = function() {
							var t = 4022871197;
							return function(e) {
								e = String(e);
								for (var n = 0; n < e.length; n++) {
									var i = .02519603282416938 * (t += e.charCodeAt(n));
									i -= t = i >>> 0, t = (i *= t) >>> 0, t += 4294967296 * (i -= t)
								}
								return 2.3283064365386963e-10 * (t >>> 0)
							}
						}();
					e.next = function() {
						var t = 2091639 * e.s0 + 2.3283064365386963e-10 * e.c;
						return e.s0 = e.s1, e.s1 = e.s2, e.s2 = t - (e.c = 0 | t)
					}, e.c = 1, e.s0 = n(" "), e.s1 = n(" "), e.s2 = n(" "), e.s0 -= n(t), e.s0 < 0 && (e.s0 += 1), e.s1 -= n(t), e.s1 < 0 && (e.s1 += 1), e.s2 -= n(t), e.s2 < 0 && (e.s2 += 1), n = null
				}

				function r(t, e) {
					return e.c = t.c, e.s0 = t.s0, e.s1 = t.s1, e.s2 = t.s2, e
				}

				function s(t, e) {
					var n = new i(t),
						s = e && e.state,
						o = n.next;
					return o.int32 = function() {
						return 4294967296 * n.next() | 0
					}, o.double = function() {
						return o() + 11102230246251565e-32 * (2097152 * o() | 0)
					}, o.quick = o, s && ("object" == typeof s && r(s, n), o.state = function() {
						return r(n, {})
					}), o
				}
				e && e.exports ? e.exports = s : n && n.amd ? n((function() {
					return s
				})) : this.alea = s
			}(0, t, !1)
		})),
		nd = lh((function(t) {
			! function(t, e, n) {
				function i(t) {
					var e = this,
						n = "";
					e.x = 0, e.y = 0, e.z = 0, e.w = 0, e.next = function() {
						var t = e.x ^ e.x << 11;
						return e.x = e.y, e.y = e.z, e.z = e.w, e.w ^= e.w >>> 19 ^ t ^ t >>> 8
					}, t === (0 | t) ? e.x = t : n += t;
					for (var i = 0; i < n.length + 64; i++) e.x ^= 0 | n.charCodeAt(i), e.next()
				}

				function r(t, e) {
					return e.x = t.x, e.y = t.y, e.z = t.z, e.w = t.w, e
				}

				function s(t, e) {
					var n = new i(t),
						s = e && e.state,
						o = function() {
							return (n.next() >>> 0) / 4294967296
						};
					return o.double = function() {
						do {
							var t = ((n.next() >>> 11) + (n.next() >>> 0) / 4294967296) / (1 << 21)
						} while (0 === t);
						return t
					}, o.int32 = n.next, o.quick = o, s && ("object" == typeof s && r(s, n), o.state = function() {
						return r(n, {})
					}), o
				}
				e && e.exports ? e.exports = s : n && n.amd ? n((function() {
					return s
				})) : this.xor128 = s
			}(0, t, !1)
		})),
		id = lh((function(t) {
			! function(t, e, n) {
				function i(t) {
					var e = this,
						n = "";
					e.next = function() {
						var t = e.x ^ e.x >>> 2;
						return e.x = e.y, e.y = e.z, e.z = e.w, e.w = e.v, (e.d = e.d + 362437 | 0) + (e.v = e.v ^ e.v << 4 ^ t ^ t << 1) | 0
					}, e.x = 0, e.y = 0, e.z = 0, e.w = 0, e.v = 0, t === (0 | t) ? e.x = t : n += t;
					for (var i = 0; i < n.length + 64; i++) e.x ^= 0 | n.charCodeAt(i), i == n.length && (e.d = e.x << 10 ^ e.x >>> 4), e.next()
				}

				function r(t, e) {
					return e.x = t.x, e.y = t.y, e.z = t.z, e.w = t.w, e.v = t.v, e.d = t.d, e
				}

				function s(t, e) {
					var n = new i(t),
						s = e && e.state,
						o = function() {
							return (n.next() >>> 0) / 4294967296
						};
					return o.double = function() {
						do {
							var t = ((n.next() >>> 11) + (n.next() >>> 0) / 4294967296) / (1 << 21)
						} while (0 === t);
						return t
					}, o.int32 = n.next, o.quick = o, s && ("object" == typeof s && r(s, n), o.state = function() {
						return r(n, {})
					}), o
				}
				e && e.exports ? e.exports = s : n && n.amd ? n((function() {
					return s
				})) : this.xorwow = s
			}(0, t, !1)
		})),
		rd = lh((function(t) {
			! function(t, e, n) {
				function i(t) {
					var e = this;
					e.next = function() {
							var t, n, i = e.x,
								r = e.i;
							return t = i[r], n = (t ^= t >>> 7) ^ t << 24, n ^= (t = i[r + 1 & 7]) ^ t >>> 10, n ^= (t = i[r + 3 & 7]) ^ t >>> 3, n ^= (t = i[r + 4 & 7]) ^ t << 7, t = i[r + 7 & 7], n ^= (t ^= t << 13) ^ t << 9, i[r] = n, e.i = r + 1 & 7, n
						},
						function(t, e) {
							var n, i = [];
							if (e === (0 | e)) i[0] = e;
							else
								for (e = "" + e, n = 0; n < e.length; ++n) i[7 & n] = i[7 & n] << 15 ^ e.charCodeAt(n) + i[n + 1 & 7] << 13;
							for (; i.length < 8;) i.push(0);
							for (n = 0; n < 8 && 0 === i[n]; ++n);
							for (8 == n ? i[7] = -1 : i[n], t.x = i, t.i = 0, n = 256; n > 0; --n) t.next()
						}(e, t)
				}

				function r(t, e) {
					return e.x = t.x.slice(), e.i = t.i, e
				}

				function s(t, e) {
					null == t && (t = +new Date);
					var n = new i(t),
						s = e && e.state,
						o = function() {
							return (n.next() >>> 0) / 4294967296
						};
					return o.double = function() {
						do {
							var t = ((n.next() >>> 11) + (n.next() >>> 0) / 4294967296) / (1 << 21)
						} while (0 === t);
						return t
					}, o.int32 = n.next, o.quick = o, s && (s.x && r(s, n), o.state = function() {
						return r(n, {})
					}), o
				}
				e && e.exports ? e.exports = s : n && n.amd ? n((function() {
					return s
				})) : this.xorshift7 = s
			}(0, t, !1)
		})),
		sd = lh((function(t) {
			! function(t, e, n) {
				function i(t) {
					var e = this;
					e.next = function() {
							var t, n, i = e.w,
								r = e.X,
								s = e.i;
							return e.w = i = i + 1640531527 | 0, n = r[s + 34 & 127], t = r[s = s + 1 & 127], n ^= n << 13, t ^= t << 17, n ^= n >>> 15, t ^= t >>> 12, n = r[s] = n ^ t, e.i = s, n + (i ^ i >>> 16) | 0
						},
						function(t, e) {
							var n, i, r, s, o, a = [],
								c = 128;
							for (e === (0 | e) ? (i = e, e = null) : (e += "\0", i = 0, c = Math.max(c, e.length)), r = 0, s = -32; s < c; ++s) e && (i ^= e.charCodeAt((s + 32) % e.length)), 0 === s && (o = i), i ^= i << 10, i ^= i >>> 15, i ^= i << 4, i ^= i >>> 13, s >= 0 && (o = o + 1640531527 | 0, r = 0 == (n = a[127 & s] ^= i + o) ? r + 1 : 0);
							for (r >= 128 && (a[127 & (e && e.length || 0)] = -1), r = 127, s = 512; s > 0; --s) i = a[r + 34 & 127], n = a[r = r + 1 & 127], i ^= i << 13, n ^= n << 17, i ^= i >>> 15, n ^= n >>> 12, a[r] = i ^ n;
							t.w = o, t.X = a, t.i = r
						}(e, t)
				}

				function r(t, e) {
					return e.i = t.i, e.w = t.w, e.X = t.X.slice(), e
				}

				function s(t, e) {
					null == t && (t = +new Date);
					var n = new i(t),
						s = e && e.state,
						o = function() {
							return (n.next() >>> 0) / 4294967296
						};
					return o.double = function() {
						do {
							var t = ((n.next() >>> 11) + (n.next() >>> 0) / 4294967296) / (1 << 21)
						} while (0 === t);
						return t
					}, o.int32 = n.next, o.quick = o, s && (s.X && r(s, n), o.state = function() {
						return r(n, {})
					}), o
				}
				e && e.exports ? e.exports = s : n && n.amd ? n((function() {
					return s
				})) : this.xor4096 = s
			}(0, t, !1)
		})),
		od = lh((function(t) {
			! function(t, e, n) {
				function i(t) {
					var e = this,
						n = "";
					e.next = function() {
						var t = e.b,
							n = e.c,
							i = e.d,
							r = e.a;
						return t = t << 25 ^ t >>> 7 ^ n, n = n - i | 0, i = i << 24 ^ i >>> 8 ^ r, r = r - t | 0, e.b = t = t << 20 ^ t >>> 12 ^ n, e.c = n = n - i | 0, e.d = i << 16 ^ n >>> 16 ^ r, e.a = r - t | 0
					}, e.a = 0, e.b = 0, e.c = -1640531527, e.d = 1367130551, t === Math.floor(t) ? (e.a = t / 4294967296 | 0, e.b = 0 | t) : n += t;
					for (var i = 0; i < n.length + 20; i++) e.b ^= 0 | n.charCodeAt(i), e.next()
				}

				function r(t, e) {
					return e.a = t.a, e.b = t.b, e.c = t.c, e.d = t.d, e
				}

				function s(t, e) {
					var n = new i(t),
						s = e && e.state,
						o = function() {
							return (n.next() >>> 0) / 4294967296
						};
					return o.double = function() {
						do {
							var t = ((n.next() >>> 11) + (n.next() >>> 0) / 4294967296) / (1 << 21)
						} while (0 === t);
						return t
					}, o.int32 = n.next, o.quick = o, s && ("object" == typeof s && r(s, n), o.state = function() {
						return r(n, {})
					}), o
				}
				e && e.exports ? e.exports = s : n && n.amd ? n((function() {
					return s
				})) : this.tychei = s
			}(0, t, !1)
		})),
		ad = hh(Object.freeze({
			__proto__: null,
			default: {}
		})),
		cd = lh((function(t) {
			! function(e, n, i) {
				var r, s = 256,
					o = i.pow(s, 6),
					a = i.pow(2, 52),
					c = 2 * a,
					l = 255;

				function h(t, l, h) {
					var g = [],
						v = f(p((l = 1 == l ? {
							entropy: !0
						} : l || {}).entropy ? [t, m(n)] : null == t ? function() {
							try {
								var t;
								return r && (t = r.randomBytes) ? t = t(s) : (t = new Uint8Array(s), (e.crypto || e.msCrypto).getRandomValues(t)), m(t)
							} catch (t) {
								var i = e.navigator,
									o = i && i.plugins;
								return [+new Date, e, o, e.screen, m(n)]
							}
						}() : t, 3), g),
						y = new u(g),
						x = function() {
							for (var t = y.g(6), e = o, n = 0; t < a;) t = (t + n) * s, e *= s, n = y.g(1);
							for (; t >= c;) t /= 2, e /= 2, n >>>= 1;
							return (t + n) / e
						};
					return x.int32 = function() {
						return 0 | y.g(4)
					}, x.quick = function() {
						return y.g(4) / 4294967296
					}, x.double = x, f(m(y.S), n), (l.pass || h || function(t, e, n, r) {
						return r && (r.S && d(r, y), t.state = function() {
							return d(y, {})
						}), n ? (i.random = t, e) : t
					})(x, v, "global" in l ? l.global : this == i, l.state)
				}

				function u(t) {
					var e, n = t.length,
						i = this,
						r = 0,
						o = i.i = i.j = 0,
						a = i.S = [];
					for (n || (t = [n++]); r < s;) a[r] = r++;
					for (r = 0; r < s; r++) a[r] = a[o = l & o + t[r % n] + (e = a[r])], a[o] = e;
					(i.g = function(t) {
						for (var e, n = 0, r = i.i, o = i.j, a = i.S; t--;) e = a[r = l & r + 1], n = n * s + a[l & (a[r] = a[o = l & o + e]) + (a[o] = e)];
						return i.i = r, i.j = o, n
					})(s)
				}

				function d(t, e) {
					return e.i = t.i, e.j = t.j, e.S = t.S.slice(), e
				}

				function p(t, e) {
					var n, i = [],
						r = typeof t;
					if (e && "object" == r)
						for (n in t) try {
							i.push(p(t[n], e - 1))
						} catch (t) {}
					return i.length ? i : "string" == r ? t : t + "\0"
				}

				function f(t, e) {
					for (var n, i = t + "", r = 0; r < i.length;) e[l & r] = l & (n ^= 19 * e[l & r]) + i.charCodeAt(r++);
					return m(e)
				}

				function m(t) {
					return String.fromCharCode.apply(0, t)
				}
				if (f(i.random(), n), t.exports) {
					t.exports = h;
					try {
						r = ad
					} catch (t) {}
				} else i.seedrandom = h
			}("undefined" != typeof self ? self : ch, [], Math)
		}));
	cd.alea = ed, cd.xor128 = nd, cd.xorwow = id, cd.xorshift7 = rd, cd.xor4096 = sd, cd.tychei = od;
	var ld = cd;
	const hd = new Vn(16777215),
		ud = (new Pc).load("img/sun.png"),
		dd = 696340;
	class pd extends ku {
		constructor(t, e, n, i) {
			super(t), this.scene = e, this.stoppingDistance = 175085, this.name = function(t) {
				if (10 * t() < 5) Xu = Math.floor(t() * ju.length), Yu = Math.floor(t() * Vu.length), Zu = Math.floor(t() * Wu.length), Ku = Math.floor(t() * qu.length), td = ju[Xu] + Vu[Yu] + Wu[Zu] + qu[Ku];
				else {
					if (Xu = Math.floor(t() * ju.length), Yu = Math.floor(t() * Vu.length), Zu = Math.floor(t() * Wu.length), Ju = Math.floor(t() * $u.length), Qu = Math.floor(t() * Wu.length), Zu > 14)
						for (; Qu > 14;) Qu = Math.floor(t() * Wu.length);
					Ku = Math.floor(t() * qu.length), td = ju[Xu] + Vu[Yu] + Wu[Zu] + $u[Ju] + Wu[Qu] + qu[Ku]
				}
				return td.charAt(0).toUpperCase() + td.slice(1)
			}(ld(i.toString())) + " (Star)", this.setResources(Ih.get(1), Ih.get(2)), this.type = Gu.Star, this.sunGroup = new eo, this.scene.add(this.sunGroup);
			const r = new hl(hd, .3);
			r.target = n.shipModel, this.sunGroup.add(r);
			const s = new al(hd, .4);
			this.sunGroup.add(s), this.sunMaterial = new uo({
				map: ud
			}), this.sunSprite = new Eo(this.sunMaterial), this.sunSprite.scale.multiplyScalar(dd), this.sunGroup.add(this.sunSprite), this.sunSprite.position.copy(s.position)
		}
		destroy() {
			this.destroyLabel(), this.scene.remove(this.sunGroup), this.sunSprite.geometry.dispose(), this.sunMaterial.dispose()
		}
		getPosition() {
			return this.sunSprite.position
		}
		getObject3D() {
			return this.sunGroup
		}
	}
	class fd extends ku {
		constructor(t, e) {
			super(t), this.scene = e, this.stoppingDistance = 160, this.type = Gu.Station, this.name = "Space Station Alpha", this.buyer = !0;
			const n = function() {
					const t = new Ui(64, 4, 64);
					t.translate(-48, 0, 0);
					const e = new Ui(64, 4, 64);
					e.translate(48, 0, 0);
					const n = new fa(2, 2, 32, 12, 1, !0);
					n.rotateZ(Math.PI / 2);
					const i = new fa(2, 2, 32, 12, 1, !1);
					i.translate(0, -16, 0);
					const r = new Xa(24, 12, 12);
					r.translate(0, -42, 0);
					const s = $h.mergeBufferGeometries([t, e, n, i, r]);
					return s.rotateX(.2), s.rotateZ(.2), s.computeVertexNormals(), s.computeBoundingBox(), s
				}(),
				i = new Ja({
					color: 12632256,
					roughness: .6
				});
			this.planetModel = new zi(n, i), this.planetModel.position.setX(35e4), this.planetModel.position.setY(500), this.planetModel.position.setZ(35e3), e.add(this.planetModel)
		}
		destroy() {
			this.destroyLabel(), this.scene.remove(this.planetModel), this.planetModel.geometry.dispose(), this.planetModel.material.dispose()
		}
		getPosition() {
			return this.planetModel.position
		}
		getObject3D() {
			return this.planetModel
		}
	}
	const md = ["b", "c", "ch", "d", "g", "h", "k", "l", "m", "n", "p", "r", "s", "t", "th", "v", "x", "y", "z", "", "", "", "", ""],
		gd = ["a", "e", "i", "o", "u"],
		vd = ["b", "bb", "br", "c", "cc", "ch", "cr", "d", "dr", "g", "gn", "gr", "l", "ll", "lr", "lm", "ln", "lv", "m", "n", "nd", "ng", "nk", "nn", "nr", "nv", "nz", "ph", "s", "str", "th", "tr", "v", "z"],
		yd = ["b", "br", "c", "ch", "cr", "d", "dr", "g", "gn", "gr", "l", "ll", "m", "n", "ph", "s", "str", "th", "tr", "v", "z"],
		xd = ["a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "ae", "ai", "ao", "au", "a", "ea", "ei", "eo", "eu", "e", "ua", "ue", "ui", "u", "ia", "ie", "iu", "io", "oa", "ou", "oi", "o"],
		bd = ["turn", "ter", "nus", "rus", "tania", "hiri", "hines", "gawa", "nides", "carro", "rilia", "stea", "lia", "lea", "ria", "nov", "phus", "mia", "nerth", "wei", "ruta", "tov", "zuno", "vis", "lara", "nia", "liv", "tera", "gantu", "yama", "tune", "ter", "nus", "cury", "bos", "pra", "thea", "nope", "tis", "clite"],
		_d = ["una", "ion", "iea", "iri", "illes", "ides", "agua", "olla", "inda", "eshan", "oria", "ilia", "erth", "arth", "orth", "oth", "illon", "ichi", "ov", "arvis", "ara", "ars", "yke", "yria", "onoe", "ippe", "osie", "one", "ore", "ade", "adus", "urn", "ypso", "ora", "iuq", "orix", "apus", "ion", "eon", "eron", "ao", "omia"],
		wd = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "", "", "", "", "", "", "", "", "", "", "", "", "", ""];
	let Md, Sd, Td, Ed, Ad, Ld, Cd;
	const Rd = {
		PlanetVertexShader: "\n          #define MYLAND\n          varying vec3 vLightFront;\n          varying vec3 vIndirectFront;\n          #ifdef DOUBLE_SIDED\n              varying vec3 vLightBack;\n              varying vec3 vIndirectBack;\n          #endif\n          #include <common>\n          #include <uv_pars_vertex>\n          #include <uv2_pars_vertex>\n          #include <envmap_pars_vertex>\n          #include <bsdfs>\n          #include <lights_pars_begin>\n          #include <color_pars_vertex>\n          #include <fog_pars_vertex>\n          #include <morphtarget_pars_vertex>\n          #include <skinning_pars_vertex>\n          #include <shadowmap_pars_vertex>\n          #include <logdepthbuf_pars_vertex>\n          #include <clipping_planes_pars_vertex>\n          varying vec3 vUv;\n          void main() {\n              #include <uv_vertex>\n              #include <uv2_vertex>\n              #include <color_vertex>\n              #include <beginnormal_vertex>\n              #include <morphnormal_vertex>\n              #include <skinbase_vertex>\n              #include <skinnormal_vertex>\n              #include <defaultnormal_vertex>\n              #include <begin_vertex>\n              #include <morphtarget_vertex>\n              #include <skinning_vertex>\n              #include <project_vertex>\n              #include <logdepthbuf_vertex>\n              #include <clipping_planes_vertex>\n              #include <worldpos_vertex>\n              #include <envmap_vertex>\n              #include <lights_lambert_vertex>\n              #include <shadowmap_vertex>\n              #include <fog_vertex>\n  \n              vUv = position;\n          }\n      ",
		PlanetFragmentShader: "\n          uniform vec3 diffuse;\n          uniform vec3 emissive;\n          uniform float opacity;\n          varying vec3 vLightFront;\n          varying vec3 vIndirectFront;\n          #ifdef DOUBLE_SIDED\n              varying vec3 vLightBack;\n              varying vec3 vIndirectBack;\n          #endif\n          #include <common>\n          #include <packing>\n          #include <dithering_pars_fragment>\n          #include <color_pars_fragment>\n          #include <uv_pars_fragment>\n          #include <uv2_pars_fragment>\n          #include <map_pars_fragment>\n          #include <alphamap_pars_fragment>\n          #include <aomap_pars_fragment>\n          #include <lightmap_pars_fragment>\n          #include <emissivemap_pars_fragment>\n          #include <envmap_common_pars_fragment>\n          #include <envmap_pars_fragment>\n          #include <cube_uv_reflection_fragment>\n          #include <bsdfs>\n          #include <lights_pars_begin>\n          #include <fog_pars_fragment>\n          #include <shadowmap_pars_fragment>\n          #include <shadowmask_pars_fragment>\n          #include <specularmap_pars_fragment>\n          #include <logdepthbuf_pars_fragment>\n          #include <clipping_planes_pars_fragment>\n\n          varying vec3 vUv;\n          uniform float fade1;\n          uniform float fade2;\n          uniform vec3 color1;\n          uniform vec3 color2;\n          uniform float noiseScale;\n\n        float mod289(float x){return x - floor(x * (1.0 / 289.0)) * 289.0;}\n        vec4 mod289(vec4 x){return x - floor(x * (1.0 / 289.0)) * 289.0;}\n        vec4 perm(vec4 x){return mod289(((x * 34.0) + 1.0) * x);}\n\n        float noise(vec3 p){\n            vec3 a = floor(p);\n            vec3 d = p - a;\n            d = d * d * (3.0 - 2.0 * d);\n\n            vec4 b = a.xxyy + vec4(0.0, 1.0, 0.0, 1.0);\n            vec4 k1 = perm(b.xyxy);\n            vec4 k2 = perm(k1.xyxy + b.zzww);\n\n            vec4 c = k2 + a.zzzz;\n            vec4 k3 = perm(c);\n            vec4 k4 = perm(c + 1.0);\n\n            vec4 o1 = fract(k3 * (1.0 / 41.0));\n            vec4 o2 = fract(k4 * (1.0 / 41.0));\n\n            vec4 o3 = o2 * d.z + o1 * (1.0 - d.z);\n            vec2 o4 = o3.yw * d.x + o3.xz * (1.0 - d.x);\n\n            return o4.y * d.y + o4.x * (1.0 - d.y);\n        }\n  \n          void main() {\n              #include <clipping_planes_fragment>\n\n              vec3 color = mix(color1, color2, noise(vUv / noiseScale));\n              if (fade1 > 0.0) {\n                color = mix(color, color * 0.1, noise(vUv / 80.0) * noise(vUv / 200.0) * fade1);\n              }\n              if (fade2 > 0.0) {\n                color = mix(color, vec3(0.0,0.0,0.0), noise(vUv / 5.0) * noise(vUv / 2.0) * fade2);\n              }\n  \n              ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n              vec3 totalEmissiveRadiance = emissive;\n              #include <logdepthbuf_fragment>\n              #include <map_fragment>\n              #include <color_fragment>\n              #include <alphamap_fragment>\n              #include <alphatest_fragment>\n              #include <specularmap_fragment>\n              #include <emissivemap_fragment>\n              #ifdef DOUBLE_SIDED\n                  reflectedLight.indirectDiffuse += ( gl_FrontFacing ) ? vIndirectFront : vIndirectBack;\n              #else\n                  reflectedLight.indirectDiffuse += vIndirectFront;\n              #endif\n              #include <lightmap_fragment>\n              reflectedLight.indirectDiffuse *= BRDF_Diffuse_Lambert( color.rgb );\n              #ifdef DOUBLE_SIDED\n                  reflectedLight.directDiffuse = ( gl_FrontFacing ) ? vLightFront : vLightBack;\n              #else\n                  reflectedLight.directDiffuse = vLightFront;\n              #endif\n              reflectedLight.directDiffuse *= BRDF_Diffuse_Lambert( color.rgb ) * getShadowMask();\n              #include <aomap_fragment>\n              vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;\n              #include <envmap_fragment>\n              gl_FragColor = vec4( outgoingLight, 1.0 );\n              #include <tonemapping_fragment>\n              #include <encodings_fragment>\n              #include <fog_fragment>\n              #include <premultiplied_alpha_fragment>\n              #include <dithering_fragment>\n          }\n      ",
		AsteroidVertexShader: "\n          #define MYGRASS\n          varying vec3 vLightFront;\n          varying vec3 vIndirectFront;\n          #ifdef DOUBLE_SIDED\n              varying vec3 vLightBack;\n              varying vec3 vIndirectBack;\n          #endif\n          #include <common>\n          #include <uv_pars_vertex>\n          #include <uv2_pars_vertex>\n          #include <envmap_pars_vertex>\n          #include <bsdfs>\n          #include <lights_pars_begin>\n          #include <color_pars_vertex>\n          #include <fog_pars_vertex>\n          #include <morphtarget_pars_vertex>\n          #include <skinning_pars_vertex>\n          #include <shadowmap_pars_vertex>\n          #include <logdepthbuf_pars_vertex>\n          #include <clipping_planes_pars_vertex>\n\n          void main() {\n      \n              #include <uv_vertex>\n              #include <uv2_vertex>\n              #include <color_vertex>\n              #include <beginnormal_vertex>\n              #include <morphnormal_vertex>\n              #include <skinbase_vertex>\n              #include <skinnormal_vertex>\n              #include <defaultnormal_vertex>\n              #include <begin_vertex>\n              #include <morphtarget_vertex>\n              #include <skinning_vertex>\n              \n              vec4 mvPosition = vec4( transformed, 1.0 );\n\n              #ifdef USE_INSTANCING\n                mvPosition = instanceMatrix * mvPosition;\n              #endif\n\n              mvPosition = modelViewMatrix * mvPosition;              \n              gl_Position = projectionMatrix * mvPosition;\n              #include <logdepthbuf_vertex>\n              #include <clipping_planes_vertex>\n              #include <worldpos_vertex>\n              #include <envmap_vertex>\n              #include <lights_lambert_vertex>\n              #include <shadowmap_vertex>\n              #include <fog_vertex>\n\n              // vec4 modelViewPosition = modelViewMatrix * vec4(position, 1.0);\n\t            // gl_Position = projectionMatrix * modelViewPosition;\n          }\n      ",
		AsteroidFragmentShader: "\n      uniform vec3 diffuse;\n      uniform vec3 emissive;\n      uniform float opacity;\n      varying vec3 vLightFront;\n      varying vec3 vIndirectFront;\n      #ifdef DOUBLE_SIDED\n          varying vec3 vLightBack;\n          varying vec3 vIndirectBack;\n      #endif\n      #include <common>\n      #include <packing>\n      #include <dithering_pars_fragment>\n      #include <color_pars_fragment>\n      #include <uv_pars_fragment>\n      #include <uv2_pars_fragment>\n      #include <map_pars_fragment>\n      #include <alphamap_pars_fragment>\n      #include <aomap_pars_fragment>\n      #include <lightmap_pars_fragment>\n      #include <emissivemap_pars_fragment>\n      #include <envmap_common_pars_fragment>\n      #include <envmap_pars_fragment>\n      #include <cube_uv_reflection_fragment>\n      #include <bsdfs>\n      #include <lights_pars_begin>\n      #include <fog_pars_fragment>\n      #include <shadowmap_pars_fragment>\n      #include <shadowmask_pars_fragment>\n      #include <specularmap_pars_fragment>\n      #include <logdepthbuf_pars_fragment>\n      #include <clipping_planes_pars_fragment>\n      \n      void main() {\n          #include <clipping_planes_fragment>\n\n          vec4 diffuseColor = vec4( diffuse, opacity );\n          ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n          vec3 totalEmissiveRadiance = emissive;\n          #include <logdepthbuf_fragment>\n          #include <map_fragment>\n          #include <color_fragment>\n          #include <alphamap_fragment>\n          #include <alphatest_fragment>\n          #include <specularmap_fragment>\n          #include <emissivemap_fragment>\n          reflectedLight.indirectDiffuse = getAmbientLightIrradiance( ambientLightColor );\n          #ifdef DOUBLE_SIDED\n              reflectedLight.indirectDiffuse += ( gl_FrontFacing ) ? vIndirectFront : vIndirectBack;\n          #else\n              reflectedLight.indirectDiffuse += vIndirectFront;\n          #endif\n          #include <lightmap_fragment>\n          reflectedLight.indirectDiffuse *= BRDF_Diffuse_Lambert( diffuseColor.rgb );\n          #ifdef DOUBLE_SIDED\n              reflectedLight.directDiffuse = ( gl_FrontFacing ) ? vLightFront : vLightBack;\n          #else\n              reflectedLight.directDiffuse = vLightFront;\n          #endif\n          reflectedLight.directDiffuse *= BRDF_Diffuse_Lambert( diffuseColor.rgb ) * getShadowMask();\n          #include <aomap_fragment>\n          vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;\n          #include <envmap_fragment>\n          gl_FragColor = vec4( outgoingLight, diffuseColor.a );\n          #include <tonemapping_fragment>\n          #include <encodings_fragment>\n          #include <fog_fragment>\n          #include <premultiplied_alpha_fragment>\n          #include <dithering_fragment>\n      }\n    "
	};
	let Pd;
	Qh.subscribe((t => Pd = t));
	class Dd {
		constructor(t, e, n, i, r, s, o, a) {
			this.yDistance = 25e4, this.id = t, this.name = e, this.minDistance = n, this.maxDistance = i, this.minRadius = r, this.maxRadius = s, this.fadeMax = o, this.mapScale = a
		}
		getRandomDistance(t, e, n) {
			const i = t + n() * (e - t);
			return n() > .5 ? -1 * i : i
		}
		getPosition(t) {
			const e = new we;
			return e.setX(this.getRandomDistance(this.minDistance, this.maxDistance, t)), e.setY(this.getRandomDistance(0, this.yDistance, t)), e.setZ(this.getRandomDistance(this.minDistance, this.maxDistance, t)), e
		}
	}
	const Od = new Dd(1, "Gas Giant", 241e4, 441e4, 3e4, 69911, .25, 4),
		Id = new Dd(2, "Rocky Planet", 441e3, 441e4, 2439, 8519, .6, 20),
		Nd = new Dd(3, "Moon", 12e4, 21e4, 1439, 4519, .6, 20);
	class zd extends ku {
		constructor(t, e, n, i) {
			super(t), this.scene = e;
			const r = ld(n.toString());
			this.planetType = r() > .6 ? Od : Id, i && (this.planetType = Nd), this.planetType == Od ? (this.addRandomResource(Ch, r()), this.addRandomResource(Ch, r()), this.addRandomResource(Ch, r())) : this.planetType == Id ? (this.addRandomResource(Ph, r()), this.addRandomResource(Ph, r()), this.addRandomResource(Rh, r())) : (this.addRandomResource(Ph, r()), this.addRandomResource(Rh, r()), this.addRandomResource(Rh, r()));
			const s = this.planetType.minRadius + r() * (this.planetType.maxRadius - this.planetType.minRadius);
			this.stoppingDistance = s + (this.planetType == Od ? 1e3 : 200), this.type = Gu.Planet, this.name = function(t) {
				const e = 10 * t();
				if (e < 2) {
					for (Md = t() * md.length | 0, Sd = t() * gd.length | 0, Td = t() * vd.length | 0; md[Md] === vd[Td];) Td = t() * vd.length | 0;
					Ed = t() * xd.length | 0, Ad = t() * bd.length | 0, Cd = md[Md] + gd[Sd] + vd[Td] + xd[Ed] + bd[Ad]
				} else if (e < 4) {
					for (Md = t() * md.length | 0, Sd = t() * gd.length | 0, Td = t() * vd.length | 0; md[Md] === vd[Td];) Td = t() * vd.length | 0;
					Ed = t() * _d.length | 0, Cd = md[Md] + gd[Sd] + vd[Td] + _d[Ed]
				} else if (e < 6) Md = t() * md.length | 0, Ed = t() * xd.length | 0, Ad = t() * bd.length | 0, Cd = md[Md] + xd[Ed] + bd[Ad];
				else if (e < 8) {
					for (Md = t() * md.length | 0, Sd = t() * gd.length | 0, Td = t() * yd.length | 0; md[Md] === yd[Td];) Td = t() * yd.length | 0;
					Ed = t() * gd.length | 0, Ad = t() * bd.length | 0, Cd = yd[Td] + gd[Sd] + md[Md] + gd[Ed] + bd[Ad]
				} else Md = t() * yd.length | 0, Sd = t() * _d.length | 0, Td = t() * wd.length | 0, Ed = t() * wd.length | 0, Ad = t() * wd.length | 0, Ld = t() * wd.length | 0, Cd = yd[Md] + _d[Sd] + " " + wd[Td] + wd[Ed] + wd[Ad] + wd[Ld];
				return Cd.charAt(0).toUpperCase() + Cd.slice(1)
			}(ld(n.toString())) + " (" + this.planetType.name + ")";
			const o = new Xa(s, 64, 48);
			o.computeVertexNormals(), o.computeBoundingBox();
			const a = this.getMaterial(s, r);
			this.planetModel = new zi(o, a), this.planetModel.position.copy(this.planetType.getPosition(ld(n.toString()))), i && this.planetModel.position.add(i.getPosition()), e.add(this.planetModel)
		}
		getMaterial(t, e) {
			const n = ki.merge([rr.standard.uniforms]);
			return n.color1 = {
				type: "c",
				value: new Vn("#" + ("000000" + e().toString(16).slice(2, 8).toUpperCase()).slice(-6))
			}, n.color2 = {
				type: "c",
				value: new Vn("#" + ("000000" + e().toString(16).slice(2, 8).toUpperCase()).slice(-6))
			}, n.noiseScale = {
				type: "f",
				value: .3 * t
			}, n.fade1 = {
				type: "f",
				value: 0
			}, n.fade2 = {
				type: "f",
				value: 0
			}, new Gi({
				uniforms: n,
				vertexShader: Rd.PlanetVertexShader,
				fragmentShader: Rd.PlanetFragmentShader,
				lights: !0,
				side: 0
			})
		}
		updateUniforms(t, e) {
			const n = e.clone().sub(this.planetModel.position).length() - this.stoppingDistance,
				i = 25e4,
				r = 15e3;
			let s = 0,
				o = 0;
			n < i && (s = (i - n) / i), n < r && (o = (r - n) / r, s -= o / 2, o = Math.min(o, this.planetType.fadeMax), s = Math.max(s, .1)), s = Math.min(s, this.planetType.fadeMax), this.planetModel.material.uniforms.fade1.value = s, this.planetModel.material.uniforms.fade2.value = o, Pd.useNavCamera ? this.planetModel.scale.set(this.planetType.mapScale, this.planetType.mapScale, this.planetType.mapScale) : this.planetModel.scale.set(1, 1, 1)
		}
		destroy() {
			this.destroyLabel(), this.scene.remove(this.planetModel), this.planetModel.geometry.dispose(), this.planetModel.material.dispose()
		}
		getPosition() {
			return this.planetModel.position
		}
		getObject3D() {
			return this.planetModel
		}
	}
	var Bd = lh((function(t, e) {
			Object.defineProperty(e, "__esModule", {
				value: !0
			}), e.p4D = e.p3D = e.p2D = e.lookupPairs4D = e.lookupPairs3D = e.lookupPairs2D = e.gradients4D = e.gradients3D = e.gradients2D = e.base4D = e.base3D = e.base2D = e.STRETCH_4D = e.STRETCH_3D = e.STRETCH_2D = e.SQUISH_4D = e.SQUISH_3D = e.SQUISH_2D = e.NORM_4D = e.NORM_3D = e.NORM_2D = void 0, e.NORM_2D = 1 / 47, e.NORM_3D = 1 / 103, e.NORM_4D = 1 / 30, e.SQUISH_2D = (Math.sqrt(3) - 1) / 2, e.SQUISH_3D = (Math.sqrt(4) - 1) / 3, e.SQUISH_4D = (Math.sqrt(5) - 1) / 4, e.STRETCH_2D = (1 / Math.sqrt(3) - 1) / 2, e.STRETCH_3D = (1 / Math.sqrt(4) - 1) / 3, e.STRETCH_4D = (1 / Math.sqrt(5) - 1) / 4, e.base2D = [
				[1, 1, 0, 1, 0, 1, 0, 0, 0],
				[1, 1, 0, 1, 0, 1, 2, 1, 1]
			], e.base3D = [
				[0, 0, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 1, 0, 0, 1],
				[2, 1, 1, 0, 2, 1, 0, 1, 2, 0, 1, 1, 3, 1, 1, 1],
				[1, 1, 0, 0, 1, 0, 1, 0, 1, 0, 0, 1, 2, 1, 1, 0, 2, 1, 0, 1, 2, 0, 1, 1]
			], e.base4D = [
				[0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 0, 1, 0, 0, 1, 0, 0, 1, 0, 1, 0, 0, 0, 1],
				[3, 1, 1, 1, 0, 3, 1, 1, 0, 1, 3, 1, 0, 1, 1, 3, 0, 1, 1, 1, 4, 1, 1, 1, 1],
				[1, 1, 0, 0, 0, 1, 0, 1, 0, 0, 1, 0, 0, 1, 0, 1, 0, 0, 0, 1, 2, 1, 1, 0, 0, 2, 1, 0, 1, 0, 2, 1, 0, 0, 1, 2, 0, 1, 1, 0, 2, 0, 1, 0, 1, 2, 0, 0, 1, 1],
				[3, 1, 1, 1, 0, 3, 1, 1, 0, 1, 3, 1, 0, 1, 1, 3, 0, 1, 1, 1, 2, 1, 1, 0, 0, 2, 1, 0, 1, 0, 2, 1, 0, 0, 1, 2, 0, 1, 1, 0, 2, 0, 1, 0, 1, 2, 0, 0, 1, 1]
			], e.gradients2D = [5, 2, 2, 5, -5, 2, -2, 5, 5, -2, 2, -5, -5, -2, -2, -5], e.gradients3D = [-11, 4, 4, -4, 11, 4, -4, 4, 11, 11, 4, 4, 4, 11, 4, 4, 4, 11, -11, -4, 4, -4, -11, 4, -4, -4, 11, 11, -4, 4, 4, -11, 4, 4, -4, 11, -11, 4, -4, -4, 11, -4, -4, 4, -11, 11, 4, -4, 4, 11, -4, 4, 4, -11, -11, -4, -4, -4, -11, -4, -4, -4, -11, 11, -4, -4, 4, -11, -4, 4, -4, -11], e.gradients4D = [3, 1, 1, 1, 1, 3, 1, 1, 1, 1, 3, 1, 1, 1, 1, 3, -3, 1, 1, 1, -1, 3, 1, 1, -1, 1, 3, 1, -1, 1, 1, 3, 3, -1, 1, 1, 1, -3, 1, 1, 1, -1, 3, 1, 1, -1, 1, 3, -3, -1, 1, 1, -1, -3, 1, 1, -1, -1, 3, 1, -1, -1, 1, 3, 3, 1, -1, 1, 1, 3, -1, 1, 1, 1, -3, 1, 1, 1, -1, 3, -3, 1, -1, 1, -1, 3, -1, 1, -1, 1, -3, 1, -1, 1, -1, 3, 3, -1, -1, 1, 1, -3, -1, 1, 1, -1, -3, 1, 1, -1, -1, 3, -3, -1, -1, 1, -1, -3, -1, 1, -1, -1, -3, 1, -1, -1, -1, 3, 3, 1, 1, -1, 1, 3, 1, -1, 1, 1, 3, -1, 1, 1, 1, -3, -3, 1, 1, -1, -1, 3, 1, -1, -1, 1, 3, -1, -1, 1, 1, -3, 3, -1, 1, -1, 1, -3, 1, -1, 1, -1, 3, -1, 1, -1, 1, -3, -3, -1, 1, -1, -1, -3, 1, -1, -1, -1, 3, -1, -1, -1, 1, -3, 3, 1, -1, -1, 1, 3, -1, -1, 1, 1, -3, -1, 1, 1, -1, -3, -3, 1, -1, -1, -1, 3, -1, -1, -1, 1, -3, -1, -1, 1, -1, -3, 3, -1, -1, -1, 1, -3, -1, -1, 1, -1, -3, -1, 1, -1, -1, -3, -3, -1, -1, -1, -1, -3, -1, -1, -1, -1, -3, -1, -1, -1, -1, -3], e.lookupPairs2D = [0, 1, 1, 0, 4, 1, 17, 0, 20, 2, 21, 2, 22, 5, 23, 5, 26, 4, 39, 3, 42, 4, 43, 3], e.lookupPairs3D = [0, 2, 1, 1, 2, 2, 5, 1, 6, 0, 7, 0, 32, 2, 34, 2, 129, 1, 133, 1, 160, 5, 161, 5, 518, 0, 519, 0, 546, 4, 550, 4, 645, 3, 647, 3, 672, 5, 673, 5, 674, 4, 677, 3, 678, 4, 679, 3, 680, 13, 681, 13, 682, 12, 685, 14, 686, 12, 687, 14, 712, 20, 714, 18, 809, 21, 813, 23, 840, 20, 841, 21, 1198, 19, 1199, 22, 1226, 18, 1230, 19, 1325, 23, 1327, 22, 1352, 15, 1353, 17, 1354, 15, 1357, 17, 1358, 16, 1359, 16, 1360, 11, 1361, 10, 1362, 11, 1365, 10, 1366, 9, 1367, 9, 1392, 11, 1394, 11, 1489, 10, 1493, 10, 1520, 8, 1521, 8, 1878, 9, 1879, 9, 1906, 7, 1910, 7, 2005, 6, 2007, 6, 2032, 8, 2033, 8, 2034, 7, 2037, 6, 2038, 7, 2039, 6], e.lookupPairs4D = [0, 3, 1, 2, 2, 3, 5, 2, 6, 1, 7, 1, 8, 3, 9, 2, 10, 3, 13, 2, 16, 3, 18, 3, 22, 1, 23, 1, 24, 3, 26, 3, 33, 2, 37, 2, 38, 1, 39, 1, 41, 2, 45, 2, 54, 1, 55, 1, 56, 0, 57, 0, 58, 0, 59, 0, 60, 0, 61, 0, 62, 0, 63, 0, 256, 3, 258, 3, 264, 3, 266, 3, 272, 3, 274, 3, 280, 3, 282, 3, 2049, 2, 2053, 2, 2057, 2, 2061, 2, 2081, 2, 2085, 2, 2089, 2, 2093, 2, 2304, 9, 2305, 9, 2312, 9, 2313, 9, 16390, 1, 16391, 1, 16406, 1, 16407, 1, 16422, 1, 16423, 1, 16438, 1, 16439, 1, 16642, 8, 16646, 8, 16658, 8, 16662, 8, 18437, 6, 18439, 6, 18469, 6, 18471, 6, 18688, 9, 18689, 9, 18690, 8, 18693, 6, 18694, 8, 18695, 6, 18696, 9, 18697, 9, 18706, 8, 18710, 8, 18725, 6, 18727, 6, 131128, 0, 131129, 0, 131130, 0, 131131, 0, 131132, 0, 131133, 0, 131134, 0, 131135, 0, 131352, 7, 131354, 7, 131384, 7, 131386, 7, 133161, 5, 133165, 5, 133177, 5, 133181, 5, 133376, 9, 133377, 9, 133384, 9, 133385, 9, 133400, 7, 133402, 7, 133417, 5, 133421, 5, 133432, 7, 133433, 5, 133434, 7, 133437, 5, 147510, 4, 147511, 4, 147518, 4, 147519, 4, 147714, 8, 147718, 8, 147730, 8, 147734, 8, 147736, 7, 147738, 7, 147766, 4, 147767, 4, 147768, 7, 147770, 7, 147774, 4, 147775, 4, 149509, 6, 149511, 6, 149541, 6, 149543, 6, 149545, 5, 149549, 5, 149558, 4, 149559, 4, 149561, 5, 149565, 5, 149566, 4, 149567, 4, 149760, 9, 149761, 9, 149762, 8, 149765, 6, 149766, 8, 149767, 6, 149768, 9, 149769, 9, 149778, 8, 149782, 8, 149784, 7, 149786, 7, 149797, 6, 149799, 6, 149801, 5, 149805, 5, 149814, 4, 149815, 4, 149816, 7, 149817, 5, 149818, 7, 149821, 5, 149822, 4, 149823, 4, 149824, 37, 149825, 37, 149826, 36, 149829, 34, 149830, 36, 149831, 34, 149832, 37, 149833, 37, 149842, 36, 149846, 36, 149848, 35, 149850, 35, 149861, 34, 149863, 34, 149865, 33, 149869, 33, 149878, 32, 149879, 32, 149880, 35, 149881, 33, 149882, 35, 149885, 33, 149886, 32, 149887, 32, 150080, 49, 150082, 48, 150088, 49, 150098, 48, 150104, 47, 150106, 47, 151873, 46, 151877, 45, 151881, 46, 151909, 45, 151913, 44, 151917, 44, 152128, 49, 152129, 46, 152136, 49, 152137, 46, 166214, 43, 166215, 42, 166230, 43, 166247, 42, 166262, 41, 166263, 41, 166466, 48, 166470, 43, 166482, 48, 166486, 43, 168261, 45, 168263, 42, 168293, 45, 168295, 42, 168512, 31, 168513, 28, 168514, 31, 168517, 28, 168518, 25, 168519, 25, 280952, 40, 280953, 39, 280954, 40, 280957, 39, 280958, 38, 280959, 38, 281176, 47, 281178, 47, 281208, 40, 281210, 40, 282985, 44, 282989, 44, 283001, 39, 283005, 39, 283208, 30, 283209, 27, 283224, 30, 283241, 27, 283256, 22, 283257, 22, 297334, 41, 297335, 41, 297342, 38, 297343, 38, 297554, 29, 297558, 24, 297562, 29, 297590, 24, 297594, 21, 297598, 21, 299365, 26, 299367, 23, 299373, 26, 299383, 23, 299389, 20, 299391, 20, 299584, 31, 299585, 28, 299586, 31, 299589, 28, 299590, 25, 299591, 25, 299592, 30, 299593, 27, 299602, 29, 299606, 24, 299608, 30, 299610, 29, 299621, 26, 299623, 23, 299625, 27, 299629, 26, 299638, 24, 299639, 23, 299640, 22, 299641, 22, 299642, 21, 299645, 20, 299646, 21, 299647, 20, 299648, 61, 299649, 60, 299650, 61, 299653, 60, 299654, 59, 299655, 59, 299656, 58, 299657, 57, 299666, 55, 299670, 54, 299672, 58, 299674, 55, 299685, 52, 299687, 51, 299689, 57, 299693, 52, 299702, 54, 299703, 51, 299704, 56, 299705, 56, 299706, 53, 299709, 50, 299710, 53, 299711, 50, 299904, 61, 299906, 61, 299912, 58, 299922, 55, 299928, 58, 299930, 55, 301697, 60, 301701, 60, 301705, 57, 301733, 52, 301737, 57, 301741, 52, 301952, 79, 301953, 79, 301960, 76, 301961, 76, 316038, 59, 316039, 59, 316054, 54, 316071, 51, 316086, 54, 316087, 51, 316290, 78, 316294, 78, 316306, 73, 316310, 73, 318085, 77, 318087, 77, 318117, 70, 318119, 70, 318336, 79, 318337, 79, 318338, 78, 318341, 77, 318342, 78, 318343, 77, 430776, 56, 430777, 56, 430778, 53, 430781, 50, 430782, 53, 430783, 50, 431e3, 75, 431002, 72, 431032, 75, 431034, 72, 432809, 74, 432813, 69, 432825, 74, 432829, 69, 433032, 76, 433033, 76, 433048, 75, 433065, 74, 433080, 75, 433081, 74, 447158, 71, 447159, 68, 447166, 71, 447167, 68, 447378, 73, 447382, 73, 447386, 72, 447414, 71, 447418, 72, 447422, 71, 449189, 70, 449191, 70, 449197, 69, 449207, 68, 449213, 69, 449215, 68, 449408, 67, 449409, 67, 449410, 66, 449413, 64, 449414, 66, 449415, 64, 449416, 67, 449417, 67, 449426, 66, 449430, 66, 449432, 65, 449434, 65, 449445, 64, 449447, 64, 449449, 63, 449453, 63, 449462, 62, 449463, 62, 449464, 65, 449465, 63, 449466, 65, 449469, 63, 449470, 62, 449471, 62, 449472, 19, 449473, 19, 449474, 18, 449477, 16, 449478, 18, 449479, 16, 449480, 19, 449481, 19, 449490, 18, 449494, 18, 449496, 17, 449498, 17, 449509, 16, 449511, 16, 449513, 15, 449517, 15, 449526, 14, 449527, 14, 449528, 17, 449529, 15, 449530, 17, 449533, 15, 449534, 14, 449535, 14, 449728, 19, 449729, 19, 449730, 18, 449734, 18, 449736, 19, 449737, 19, 449746, 18, 449750, 18, 449752, 17, 449754, 17, 449784, 17, 449786, 17, 451520, 19, 451521, 19, 451525, 16, 451527, 16, 451528, 19, 451529, 19, 451557, 16, 451559, 16, 451561, 15, 451565, 15, 451577, 15, 451581, 15, 451776, 19, 451777, 19, 451784, 19, 451785, 19, 465858, 18, 465861, 16, 465862, 18, 465863, 16, 465874, 18, 465878, 18, 465893, 16, 465895, 16, 465910, 14, 465911, 14, 465918, 14, 465919, 14, 466114, 18, 466118, 18, 466130, 18, 466134, 18, 467909, 16, 467911, 16, 467941, 16, 467943, 16, 468160, 13, 468161, 13, 468162, 13, 468163, 13, 468164, 13, 468165, 13, 468166, 13, 468167, 13, 580568, 17, 580570, 17, 580585, 15, 580589, 15, 580598, 14, 580599, 14, 580600, 17, 580601, 15, 580602, 17, 580605, 15, 580606, 14, 580607, 14, 580824, 17, 580826, 17, 580856, 17, 580858, 17, 582633, 15, 582637, 15, 582649, 15, 582653, 15, 582856, 12, 582857, 12, 582872, 12, 582873, 12, 582888, 12, 582889, 12, 582904, 12, 582905, 12, 596982, 14, 596983, 14, 596990, 14, 596991, 14, 597202, 11, 597206, 11, 597210, 11, 597214, 11, 597234, 11, 597238, 11, 597242, 11, 597246, 11, 599013, 10, 599015, 10, 599021, 10, 599023, 10, 599029, 10, 599031, 10, 599037, 10, 599039, 10, 599232, 13, 599233, 13, 599234, 13, 599235, 13, 599236, 13, 599237, 13, 599238, 13, 599239, 13, 599240, 12, 599241, 12, 599250, 11, 599254, 11, 599256, 12, 599257, 12, 599258, 11, 599262, 11, 599269, 10, 599271, 10, 599272, 12, 599273, 12, 599277, 10, 599279, 10, 599282, 11, 599285, 10, 599286, 11, 599287, 10, 599288, 12, 599289, 12, 599290, 11, 599293, 10, 599294, 11, 599295, 10], e.p2D = [0, 0, 1, -1, 0, 0, -1, 1, 0, 2, 1, 1, 1, 2, 2, 0, 1, 2, 0, 2, 1, 0, 0, 0], e.p3D = [0, 0, 1, -1, 0, 0, 1, 0, -1, 0, 0, -1, 1, 0, 0, 0, 1, -1, 0, 0, -1, 0, 1, 0, 0, -1, 1, 0, 2, 1, 1, 0, 1, 1, 1, -1, 0, 2, 1, 0, 1, 1, 1, -1, 1, 0, 2, 0, 1, 1, 1, -1, 1, 1, 1, 3, 2, 1, 0, 3, 1, 2, 0, 1, 3, 2, 0, 1, 3, 1, 0, 2, 1, 3, 0, 2, 1, 3, 0, 1, 2, 1, 1, 1, 0, 0, 2, 2, 0, 0, 1, 1, 0, 1, 0, 2, 0, 2, 0, 1, 1, 0, 0, 1, 2, 0, 0, 2, 2, 0, 0, 0, 0, 1, 1, -1, 1, 2, 0, 0, 0, 0, 1, -1, 1, 1, 2, 0, 0, 0, 0, 1, 1, 1, -1, 2, 3, 1, 1, 1, 2, 0, 0, 2, 2, 3, 1, 1, 1, 2, 2, 0, 0, 2, 3, 1, 1, 1, 2, 0, 2, 0, 2, 1, 1, -1, 1, 2, 0, 0, 2, 2, 1, 1, -1, 1, 2, 2, 0, 0, 2, 1, -1, 1, 1, 2, 0, 0, 2, 2, 1, -1, 1, 1, 2, 0, 2, 0, 2, 1, 1, 1, -1, 2, 2, 0, 0, 2, 1, 1, 1, -1, 2, 0, 2, 0], e.p4D = [0, 0, 1, -1, 0, 0, 0, 1, 0, -1, 0, 0, 1, 0, 0, -1, 0, 0, -1, 1, 0, 0, 0, 0, 1, -1, 0, 0, 0, 1, 0, -1, 0, 0, -1, 0, 1, 0, 0, 0, -1, 1, 0, 0, 0, 0, 1, -1, 0, 0, -1, 0, 0, 1, 0, 0, -1, 0, 1, 0, 0, 0, -1, 1, 0, 2, 1, 1, 0, 0, 1, 1, 1, -1, 0, 1, 1, 1, 0, -1, 0, 2, 1, 0, 1, 0, 1, 1, -1, 1, 0, 1, 1, 0, 1, -1, 0, 2, 0, 1, 1, 0, 1, -1, 1, 1, 0, 1, 0, 1, 1, -1, 0, 2, 1, 0, 0, 1, 1, 1, -1, 0, 1, 1, 1, 0, -1, 1, 0, 2, 0, 1, 0, 1, 1, -1, 1, 0, 1, 1, 0, 1, -1, 1, 0, 2, 0, 0, 1, 1, 1, -1, 0, 1, 1, 1, 0, -1, 1, 1, 1, 4, 2, 1, 1, 0, 4, 1, 2, 1, 0, 4, 1, 1, 2, 0, 1, 4, 2, 1, 0, 1, 4, 1, 2, 0, 1, 4, 1, 1, 0, 2, 1, 4, 2, 0, 1, 1, 4, 1, 0, 2, 1, 4, 1, 0, 1, 2, 1, 4, 0, 2, 1, 1, 4, 0, 1, 2, 1, 4, 0, 1, 1, 2, 1, 2, 1, 1, 0, 0, 3, 2, 1, 0, 0, 3, 1, 2, 0, 0, 1, 2, 1, 0, 1, 0, 3, 2, 0, 1, 0, 3, 1, 0, 2, 0, 1, 2, 0, 1, 1, 0, 3, 0, 2, 1, 0, 3, 0, 1, 2, 0, 1, 2, 1, 0, 0, 1, 3, 2, 0, 0, 1, 3, 1, 0, 0, 2, 1, 2, 0, 1, 0, 1, 3, 0, 2, 0, 1, 3, 0, 1, 0, 2, 1, 2, 0, 0, 1, 1, 3, 0, 0, 2, 1, 3, 0, 0, 1, 2, 2, 3, 1, 1, 1, 0, 2, 1, 1, 1, -1, 2, 2, 0, 0, 0, 2, 3, 1, 1, 0, 1, 2, 1, 1, -1, 1, 2, 2, 0, 0, 0, 2, 3, 1, 0, 1, 1, 2, 1, -1, 1, 1, 2, 2, 0, 0, 0, 2, 3, 1, 1, 1, 0, 2, 1, 1, 1, -1, 2, 0, 2, 0, 0, 2, 3, 1, 1, 0, 1, 2, 1, 1, -1, 1, 2, 0, 2, 0, 0, 2, 3, 0, 1, 1, 1, 2, -1, 1, 1, 1, 2, 0, 2, 0, 0, 2, 3, 1, 1, 1, 0, 2, 1, 1, 1, -1, 2, 0, 0, 2, 0, 2, 3, 1, 0, 1, 1, 2, 1, -1, 1, 1, 2, 0, 0, 2, 0, 2, 3, 0, 1, 1, 1, 2, -1, 1, 1, 1, 2, 0, 0, 2, 0, 2, 3, 1, 1, 0, 1, 2, 1, 1, -1, 1, 2, 0, 0, 0, 2, 2, 3, 1, 0, 1, 1, 2, 1, -1, 1, 1, 2, 0, 0, 0, 2, 2, 3, 0, 1, 1, 1, 2, -1, 1, 1, 1, 2, 0, 0, 0, 2, 2, 1, 1, 1, -1, 0, 1, 1, 1, 0, -1, 0, 0, 0, 0, 0, 2, 1, 1, -1, 1, 0, 1, 1, 0, 1, -1, 0, 0, 0, 0, 0, 2, 1, -1, 1, 1, 0, 1, 0, 1, 1, -1, 0, 0, 0, 0, 0, 2, 1, 1, -1, 0, 1, 1, 1, 0, -1, 1, 0, 0, 0, 0, 0, 2, 1, -1, 1, 0, 1, 1, 0, 1, -1, 1, 0, 0, 0, 0, 0, 2, 1, -1, 0, 1, 1, 1, 0, -1, 1, 1, 0, 0, 0, 0, 0, 2, 1, 1, 1, -1, 0, 1, 1, 1, 0, -1, 2, 2, 0, 0, 0, 2, 1, 1, -1, 1, 0, 1, 1, 0, 1, -1, 2, 2, 0, 0, 0, 2, 1, 1, -1, 0, 1, 1, 1, 0, -1, 1, 2, 2, 0, 0, 0, 2, 1, 1, 1, -1, 0, 1, 1, 1, 0, -1, 2, 0, 2, 0, 0, 2, 1, -1, 1, 1, 0, 1, 0, 1, 1, -1, 2, 0, 2, 0, 0, 2, 1, -1, 1, 0, 1, 1, 0, 1, -1, 1, 2, 0, 2, 0, 0, 2, 1, 1, -1, 1, 0, 1, 1, 0, 1, -1, 2, 0, 0, 2, 0, 2, 1, -1, 1, 1, 0, 1, 0, 1, 1, -1, 2, 0, 0, 2, 0, 2, 1, -1, 0, 1, 1, 1, 0, -1, 1, 1, 2, 0, 0, 2, 0, 2, 1, 1, -1, 0, 1, 1, 1, 0, -1, 1, 2, 0, 0, 0, 2, 2, 1, -1, 1, 0, 1, 1, 0, 1, -1, 1, 2, 0, 0, 0, 2, 2, 1, -1, 0, 1, 1, 1, 0, -1, 1, 1, 2, 0, 0, 0, 2, 3, 1, 1, 0, 0, 0, 2, 2, 0, 0, 0, 2, 1, 1, 1, -1, 3, 1, 0, 1, 0, 0, 2, 0, 2, 0, 0, 2, 1, 1, 1, -1, 3, 1, 0, 0, 1, 0, 2, 0, 0, 2, 0, 2, 1, 1, 1, -1, 3, 1, 1, 0, 0, 0, 2, 2, 0, 0, 0, 2, 1, 1, -1, 1, 3, 1, 0, 1, 0, 0, 2, 0, 2, 0, 0, 2, 1, 1, -1, 1, 3, 1, 0, 0, 0, 1, 2, 0, 0, 0, 2, 2, 1, 1, -1, 1, 3, 1, 1, 0, 0, 0, 2, 2, 0, 0, 0, 2, 1, -1, 1, 1, 3, 1, 0, 0, 1, 0, 2, 0, 0, 2, 0, 2, 1, -1, 1, 1, 3, 1, 0, 0, 0, 1, 2, 0, 0, 0, 2, 2, 1, -1, 1, 1, 3, 1, 0, 1, 0, 0, 2, 0, 2, 0, 0, 2, -1, 1, 1, 1, 3, 1, 0, 0, 1, 0, 2, 0, 0, 2, 0, 2, -1, 1, 1, 1, 3, 1, 0, 0, 0, 1, 2, 0, 0, 0, 2, 2, -1, 1, 1, 1, 3, 3, 2, 1, 0, 0, 3, 1, 2, 0, 0, 4, 1, 1, 1, 1, 3, 3, 2, 0, 1, 0, 3, 1, 0, 2, 0, 4, 1, 1, 1, 1, 3, 3, 0, 2, 1, 0, 3, 0, 1, 2, 0, 4, 1, 1, 1, 1, 3, 3, 2, 0, 0, 1, 3, 1, 0, 0, 2, 4, 1, 1, 1, 1, 3, 3, 0, 2, 0, 1, 3, 0, 1, 0, 2, 4, 1, 1, 1, 1, 3, 3, 0, 0, 2, 1, 3, 0, 0, 1, 2, 4, 1, 1, 1, 1, 3, 3, 2, 1, 0, 0, 3, 1, 2, 0, 0, 2, 1, 1, 1, -1, 3, 3, 2, 0, 1, 0, 3, 1, 0, 2, 0, 2, 1, 1, 1, -1, 3, 3, 0, 2, 1, 0, 3, 0, 1, 2, 0, 2, 1, 1, 1, -1, 3, 3, 2, 1, 0, 0, 3, 1, 2, 0, 0, 2, 1, 1, -1, 1, 3, 3, 2, 0, 0, 1, 3, 1, 0, 0, 2, 2, 1, 1, -1, 1, 3, 3, 0, 2, 0, 1, 3, 0, 1, 0, 2, 2, 1, 1, -1, 1, 3, 3, 2, 0, 1, 0, 3, 1, 0, 2, 0, 2, 1, -1, 1, 1, 3, 3, 2, 0, 0, 1, 3, 1, 0, 0, 2, 2, 1, -1, 1, 1, 3, 3, 0, 0, 2, 1, 3, 0, 0, 1, 2, 2, 1, -1, 1, 1, 3, 3, 0, 2, 1, 0, 3, 0, 1, 2, 0, 2, -1, 1, 1, 1, 3, 3, 0, 2, 0, 1, 3, 0, 1, 0, 2, 2, -1, 1, 1, 1, 3, 3, 0, 0, 2, 1, 3, 0, 0, 1, 2, 2, -1, 1, 1, 1]
		})),
		Ud = lh((function(t, e) {
			function n(t, e, n) {
				return {
					dx: -e - t * Bd.SQUISH_2D,
					dy: -n - t * Bd.SQUISH_2D,
					xsb: e,
					ysb: n
				}
			}

			function i(t, e, n, i) {
				return {
					dx: -e - t * Bd.SQUISH_3D,
					dy: -n - t * Bd.SQUISH_3D,
					dz: -i - t * Bd.SQUISH_3D,
					xsb: e,
					ysb: n,
					zsb: i
				}
			}

			function r(t, e, n, i, r) {
				return {
					dx: -e - t * Bd.SQUISH_4D,
					dy: -n - t * Bd.SQUISH_4D,
					dz: -i - t * Bd.SQUISH_4D,
					dw: -r - t * Bd.SQUISH_4D,
					xsb: e,
					ysb: n,
					zsb: i,
					wsb: r
				}
			}

			function s(t) {
				var e = new Uint32Array(1);
				return e[0] = 1664525 * t[0] + 1013904223, e
			}
			Object.defineProperty(e, "__esModule", {
				value: !0
			}), e.makeNoise4D = e.makeNoise3D = e.makeNoise2D = void 0, e.makeNoise2D = function(t) {
				for (var e = [], i = 0; i < Bd.p2D.length; i += 4) {
					for (var r = Bd.base2D[Bd.p2D[i]], o = null, a = null, c = 0; c < r.length; c += 3) a = n(r[c], r[c + 1], r[c + 2]), null === o ? e[i / 4] = a : o.next = a, o = a;
					a.next = n(Bd.p2D[i + 1], Bd.p2D[i + 2], Bd.p2D[i + 3])
				}
				var l = [];
				for (i = 0; i < Bd.lookupPairs2D.length; i += 2) l[Bd.lookupPairs2D[i]] = e[Bd.lookupPairs2D[i + 1]];
				var h = new Uint8Array(256),
					u = new Uint8Array(256),
					d = new Uint8Array(256);
				for (i = 0; i < 256; i++) d[i] = i;
				var p = new Uint32Array(1);
				for (p[0] = t, p = s(s(s(p))), i = 255; i >= 0; i--) {
					p = s(p);
					var f = new Uint32Array(1);
					f[0] = (p[0] + 31) % (i + 1), f[0] < 0 && (f[0] += i + 1), h[i] = d[f[0]], u[i] = 14 & h[i], d[f[0]] = d[i]
				}
				return function(t, e) {
					for (var n = (t + e) * Bd.STRETCH_2D, i = t + n, r = e + n, s = Math.floor(i), o = Math.floor(r), a = (s + o) * Bd.SQUISH_2D, c = t - (s + a), d = e - (o + a), p = i - s, f = r - o, m = p + f, g = 0, v = l[p - f + 1 | m << 1 | m + f << 2 | m + p << 4]; void 0 !== v; v = v.next) {
						var y = c + v.dx,
							x = d + v.dy,
							b = 2 - y * y - x * x;
						if (b > 0) {
							var _ = s + v.xsb,
								w = o + v.ysb,
								M = h[255 & _],
								S = u[M + w & 255];
							g += b * b * b * b * (Bd.gradients2D[S] * y + Bd.gradients2D[S + 1] * x)
						}
					}
					return g * Bd.NORM_2D
				}
			}, e.makeNoise3D = function(t) {
				for (var e = [], n = 0; n < Bd.p3D.length; n += 9) {
					for (var r = Bd.base3D[Bd.p3D[n]], o = null, a = null, c = 0; c < r.length; c += 4) a = i(r[c], r[c + 1], r[c + 2], r[c + 3]), null === o ? e[n / 9] = a : o.next = a, o = a;
					a.next = i(Bd.p3D[n + 1], Bd.p3D[n + 2], Bd.p3D[n + 3], Bd.p3D[n + 4]), a.next.next = i(Bd.p3D[n + 5], Bd.p3D[n + 6], Bd.p3D[n + 7], Bd.p3D[n + 8])
				}
				var l = [];
				for (n = 0; n < Bd.lookupPairs3D.length; n += 2) l[Bd.lookupPairs3D[n]] = e[Bd.lookupPairs3D[n + 1]];
				var h = new Uint8Array(256),
					u = new Uint8Array(256),
					d = new Uint8Array(256);
				for (n = 0; n < 256; n++) d[n] = n;
				var p = new Uint32Array(1);
				for (p[0] = t, p = s(s(s(p))), n = 255; n >= 0; n--) {
					p = s(p);
					var f = new Uint32Array(1);
					f[0] = (p[0] + 31) % (n + 1), f[0] < 0 && (f[0] += n + 1), h[n] = d[f[0]], u[n] = h[n] % 24 * 3, d[f[0]] = d[n]
				}
				return function(t, e, n) {
					for (var i = (t + e + n) * Bd.STRETCH_3D, r = t + i, s = e + i, o = n + i, a = Math.floor(r), c = Math.floor(s), d = Math.floor(o), p = (a + c + d) * Bd.SQUISH_3D, f = t - (a + p), m = e - (c + p), g = n - (d + p), v = r - a, y = s - c, x = o - d, b = v + y + x, _ = 0, w = l[y - x + 1 | v - y + 1 << 1 | v - x + 1 << 2 | b << 3 | b + x << 5 | b + y << 7 | b + v << 9]; void 0 !== w; w = w.next) {
						var M = f + w.dx,
							S = m + w.dy,
							T = g + w.dz,
							E = 2 - M * M - S * S - T * T;
						if (E > 0) {
							var A = a + w.xsb,
								L = c + w.ysb,
								C = d + w.zsb,
								R = h[255 & A],
								P = h[R + L & 255],
								D = u[P + C & 255];
							_ += E * E * E * E * (Bd.gradients3D[D] * M + Bd.gradients3D[D + 1] * S + Bd.gradients3D[D + 2] * T)
						}
					}
					return _ * Bd.NORM_3D
				}
			}, e.makeNoise4D = function(t) {
				for (var e = [], n = 0; n < Bd.p4D.length; n += 16) {
					for (var i = Bd.base4D[Bd.p4D[n]], o = null, a = null, c = 0; c < i.length; c += 5) a = r(i[c], i[c + 1], i[c + 2], i[c + 3], i[c + 4]), null === o ? e[n / 16] = a : o.next = a, o = a;
					a.next = r(Bd.p4D[n + 1], Bd.p4D[n + 2], Bd.p4D[n + 3], Bd.p4D[n + 4], Bd.p4D[n + 5]), a.next.next = r(Bd.p4D[n + 6], Bd.p4D[n + 7], Bd.p4D[n + 8], Bd.p4D[n + 9], Bd.p4D[n + 10]), a.next.next.next = r(Bd.p4D[n + 11], Bd.p4D[n + 12], Bd.p4D[n + 13], Bd.p4D[n + 14], Bd.p4D[n + 15])
				}
				var l = [];
				for (n = 0; n < Bd.lookupPairs4D.length; n += 2) l[Bd.lookupPairs4D[n]] = e[Bd.lookupPairs4D[n + 1]];
				var h = new Uint8Array(256),
					u = new Uint8Array(256),
					d = new Uint8Array(256);
				for (n = 0; n < 256; n++) d[n] = n;
				var p = new Uint32Array(1);
				for (p[0] = t, p = s(s(s(p))), n = 255; n >= 0; n--) {
					p = s(p);
					var f = new Uint32Array(1);
					f[0] = (p[0] + 31) % (n + 1), f[0] < 0 && (f[0] += n + 1), h[n] = d[f[0]], u[n] = 252 & h[n], d[f[0]] = d[n]
				}
				return function(t, e, n, i) {
					for (var r = (t + e + n + i) * Bd.STRETCH_4D, s = t + r, o = e + r, a = n + r, c = i + r, d = Math.floor(s), p = Math.floor(o), f = Math.floor(a), m = Math.floor(c), g = (d + p + f + m) * Bd.SQUISH_4D, v = t - (d + g), y = e - (p + g), x = n - (f + g), b = i - (m + g), _ = s - d, w = o - p, M = a - f, S = c - m, T = _ + w + M + S, E = 0, A = l[M - S + 1 | w - M + 1 << 1 | w - S + 1 << 2 | _ - w + 1 << 3 | _ - M + 1 << 4 | _ - S + 1 << 5 | T << 6 | T + S << 8 | T + M << 11 | T + w << 14 | T + _ << 17]; void 0 !== A; A = A.next) {
						var L = v + A.dx,
							C = y + A.dy,
							R = x + A.dz,
							P = b + A.dw,
							D = 2 - L * L - C * C - R * R - P * P;
						if (D > 0) {
							var O = d + A.xsb,
								I = p + A.ysb,
								N = f + A.zsb,
								z = m + A.wsb,
								B = h[255 & O],
								U = h[B + I & 255],
								F = h[U + N & 255],
								H = u[F + z & 255];
							E += D * D * D * D * (Bd.gradients4D[H] * L + Bd.gradients4D[H + 1] * C + Bd.gradients4D[H + 2] * R + Bd.gradients4D[H + 3] * P)
						}
					}
					return E * Bd.NORM_4D
				}
			}
		}));
	class Fd {
		constructor(t, e) {
			this.planetSeeds = [], this.seed = 29 * t + 73 * e, this.noise2D = Ud.makeNoise2D(this.seed);
			const n = Math.round(7 * (this.noise2D(0, 1) + 1)) + 3;
			for (let t = 0; t < n; t++) this.planetSeeds.push(this.seed + 1337 * t)
		}
	}
	const Hd = 5e4,
		kd = 200,
		Gd = 441e3,
		jd = 441e4;

	function Vd(t, e, n, i) {
		const r = t + Math.abs(n(2, 4 + i)) * (e - t);
		return n(6, 29 - i) > 0 ? -1 * r : r
	}
	const Wd = ki.merge([rr.lambert.uniforms]);

	function $d() {
		return new Wo(function() {
			const t = new Xa(10, 12, 8),
				e = t.getAttribute("position").array,
				n = e.length / 3,
				i = [],
				r = new Vn(7033917),
				s = [];
			for (let t = 0; t < n; t++) {
				let [n, o, a] = [e[3 * t], e[3 * t + 1], e[3 * t + 2]];
				0 != n && 0 != a && o < 6 && o > -6 && (n += 5 * (Math.random() - .5), o += 5 * (Math.random() - .5), a += 5 * (Math.random() - .5)), i.push(n, o, a), s.push(r.r, r.g, r.b)
			}
			return t.setAttribute("position", new Jn(new Float32Array(i), 3, !1)), t.setAttribute("color", new Jn(new Float32Array(s), 3)), t
		}(), new Gi({
			uniforms: Wd,
			vertexColors: !0,
			side: 2,
			vertexShader: Rd.AsteroidVertexShader,
			fragmentShader: Rd.AsteroidFragmentShader,
			lights: !0
		}), kd)
	}
	Wd.time = {
		type: "f",
		value: 0
	}, Wd.amp = {
		type: "f",
		value: .05
	}, Wd.maxDistance = {
		type: "f",
		value: 30
	};
	class qd {
		constructor() {
			this.position = new we, this.rotation = new sn, this.quaternion = new _e, this.scale = new we(1, 1, 1), this.rotationSpeed = new we(Math.random() - 1, Math.random() - 1, Math.random() - 1), this.rotationSpeed.multiplyScalar(.3)
		}
	}
	class Xd extends ku {
		constructor(t, e, n, i) {
			super(t), this.asteroids = [];
			const r = Ud.makeNoise2D(i);
			this.scene = e, this.stoppingDistance = 12700, this.name = "Asteroid Field", this.addRandomResource(Ph, Math.abs(r(-150, 250 + i))), this.addRandomResource(Ph, Math.abs(r(-37, 64 + i))), this.addRandomResource(Ph, Math.abs(r(75, 125 + i))), this.type = Gu.Asteroids, this.mesh = $d(), this.scene.add(this.mesh),
				function(t, e, n) {
					const i = new Float32Array(3200),
						r = new Ze;
					let s = 0;
					for (let t = 0; t < kd; t++) {
						const o = new qd;
						n.push(o), o.scale.set(2 * Math.random() + 1, 2 * Math.random() + 1, 2 * Math.random() + 1), o.scale.multiplyScalar(30), o.position.x = e(15, t) * Hd, o.position.z = e(t, 35) * Hd, o.position.y = e(26 * t, 34) * Hd * .5, o.rotation.y = e(26 * t, 34) * Math.PI * 2, o.rotation.z = e(21 * t, 30) * Math.PI * 2, o.quaternion.setFromEuler(o.rotation), r.compose(o.position, o.quaternion, o.scale), r.toArray().forEach((t => {
							i[s++] = t
						}))
					}
					t.instanceMatrix.copyArray(i), t.instanceMatrix.needsUpdate = !0
				}(this.mesh, r, this.asteroids);
			let s = 25;
			this.mesh.position.setX(Vd(Gd, jd, r, s += 137)), this.mesh.position.setY(Vd(0, 25e4, r, s += 95)), this.mesh.position.setZ(Vd(Gd, jd, r, s += 247))
		}
		destroy() {
			this.destroyLabel(), this.scene.remove(this.mesh), this.mesh.dispose()
		}
		getPosition() {
			return this.mesh.position
		}
		getObject3D() {
			return this.mesh
		}
		updateUniforms(t, e) {
			! function(t, e, n) {
				const i = new Float32Array(3200),
					r = new Ze;
				let s = 0;
				for (let e = 0; e < kd; e++) {
					const o = n[e];
					o.rotation.x += t * o.rotationSpeed.x, o.rotation.y += t * o.rotationSpeed.y, o.rotation.z += t * o.rotationSpeed.z, o.quaternion.setFromEuler(o.rotation), r.compose(o.position, o.quaternion, o.scale), r.toArray().forEach((t => {
						i[s++] = t
					}))
				}
				e.instanceMatrix.copyArray(i), e.instanceMatrix.needsUpdate = !0
			}(t, this.mesh, this.asteroids)
		}
	}
	const Yd = "left",
		Zd = "right",
		Jd = "top",
		Qd = "bottom",
		Kd = "front",
		tp = "back",
		ep = [];
	let np;
	const ip = new Worker("./build/worker.js"),
		rp = new Worker("./build/worker.js"),
		sp = new Worker("./build/worker.js"),
		op = 768;

	function ap(t) {
		if (0 == ep.length) {
			for (let t = 0; t < 6; t++) {
				const t = document.createElement("canvas");
				t.width = op, t.height = op, ep.push(t)
			}
			np = new qi(ep), np.minFilter = Ut
		}
		return sp.onmessage = rp.onmessage = ip.onmessage = function(t) {
			! function(t, e) {
				let n;
				switch (e) {
					case Zd:
						n = ep[0].getContext("2d");
						break;
					case Yd:
						n = ep[1].getContext("2d");
						break;
					case Jd:
						n = ep[2].getContext("2d");
						break;
					case Qd:
						n = ep[3].getContext("2d");
						break;
					case Kd:
						n = ep[4].getContext("2d");
						break;
					case tp:
						n = ep[5].getContext("2d")
				}
				n.clearRect(0, 0, op, op), n.putImageData(new ImageData(new Uint8ClampedArray(t), op, op), 0, 0)
			}(t.data.data, t.data.side), np.needsUpdate = !0
		}, ip.postMessage([Yd, t, op]), ip.postMessage([Zd, t, op]), rp.postMessage([Jd, t, op]), rp.postMessage([Qd, t, op]), sp.postMessage([Kd, t, op]), sp.postMessage([tp, t, op]), np
	}
	class cp {
		constructor(t) {
			this.maxDistance = 2e4, this.pois = [], this.poiMap = new Map, this.scene = t, this.light = new hl(16777215, .2), this.scene.add(this.light)
		}
		setup(t, e, n) {
			if (this.x = t, this.y = e, this.playerShip = n, this.stats = new Fd(t, e), this.scene.background = ap(this.stats.seed), this.pois)
				for (let t = 0; t < this.pois.length; t++) this.pois[t].destroy();
			this.pois = [];
			let i = 0;
			this.pois.push(new pd(i++, this.scene, n, this.stats.seed)), this.pois.push(new fd(i++, this.scene)), this.stats.planetSeeds.forEach((t => {
				const e = new zd(i++, this.scene, t, null);
				if (this.pois.push(e), 1 == e.planetType.id) {
					const n = Ud.makeNoise2D(t);
					n(0, 10) > 0 && this.pois.push(new zd(i++, this.scene, t + 1, e)), n(-10, 20) > 0 && this.pois.push(new zd(i++, this.scene, t + 2, e))
				}
			})), this.pois.push(new Xd(i++, this.scene, n, this.stats.seed)), this.pois.forEach((t => this.poiMap.set(t.index, t)))
		}
		update(t, e) {
			this.pois.forEach((n => n.updateUniforms(t, e.shipModel.position))), this.light.lookAt(e.shipModel.position)
		}
		getStartingPosition() {
			for (let t = 0; t < this.pois.length; t++)
				if (this.pois[t].type == Gu.Station) return this.pois[t].getPosition().clone().add(new we(100, 0, 100));
			return new we
		}
		updatePoiLabels() {
			this.pois.forEach((t => {
				t.updateLabel()
			}))
		}
		updatePoiDistanceLabels() {
			this.pois.forEach((t => {
				t.updateDistanceLabel(this.playerShip)
			}))
		}
	}
	var lp = {
		uniforms: {
			tDiffuse: {
				value: null
			},
			opacity: {
				value: 1
			}
		},
		vertexShader: ["varying vec2 vUv;", "void main() {", "\tvUv = uv;", "\tgl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );", "}"].join("\n"),
		fragmentShader: ["uniform float opacity;", "uniform sampler2D tDiffuse;", "varying vec2 vUv;", "void main() {", "\tvec4 texel = texture2D( tDiffuse, vUv );", "\tgl_FragColor = opacity * texel;", "}"].join("\n")
	};

	function hp() {
		this.enabled = !0, this.needsSwap = !0, this.clear = !1, this.renderToScreen = !1
	}
	Object.assign(hp.prototype, {
		setSize: function() {},
		render: function() {
			console.error("THREE.Pass: .render() must be implemented in derived pass.")
		}
	}), hp.FullScreenQuad = function() {
		var t = new cl(-1, 1, 1, -1, 0, 1),
			e = new er(2, 2),
			n = function(t) {
				this._mesh = new zi(e, t)
			};
		return Object.defineProperty(n.prototype, "material", {
			get: function() {
				return this._mesh.material
			},
			set: function(t) {
				this._mesh.material = t
			}
		}), Object.assign(n.prototype, {
			dispose: function() {
				this._mesh.geometry.dispose()
			},
			render: function(e) {
				e.render(this._mesh, t)
			}
		}), n
	}();
	var up = function(t, e) {
		hp.call(this), this.textureID = void 0 !== e ? e : "tDiffuse", t instanceof Gi ? (this.uniforms = t.uniforms, this.material = t) : t && (this.uniforms = ki.clone(t.uniforms), this.material = new Gi({
			defines: Object.assign({}, t.defines),
			uniforms: this.uniforms,
			vertexShader: t.vertexShader,
			fragmentShader: t.fragmentShader
		})), this.fsQuad = new hp.FullScreenQuad(this.material)
	};
	up.prototype = Object.assign(Object.create(hp.prototype), {
		constructor: up,
		render: function(t, e, n) {
			this.uniforms[this.textureID] && (this.uniforms[this.textureID].value = n.texture), this.fsQuad.material = this.material, this.renderToScreen ? (t.setRenderTarget(null), this.fsQuad.render(t)) : (t.setRenderTarget(e), this.clear && t.clear(t.autoClearColor, t.autoClearDepth, t.autoClearStencil), this.fsQuad.render(t))
		}
	});
	var dp = function(t, e) {
		hp.call(this), this.scene = t, this.camera = e, this.clear = !0, this.needsSwap = !1, this.inverse = !1
	};
	dp.prototype = Object.assign(Object.create(hp.prototype), {
		constructor: dp,
		render: function(t, e, n) {
			var i, r, s = t.getContext(),
				o = t.state;
			o.buffers.color.setMask(!1), o.buffers.depth.setMask(!1), o.buffers.color.setLocked(!0), o.buffers.depth.setLocked(!0), this.inverse ? (i = 0, r = 1) : (i = 1, r = 0), o.buffers.stencil.setTest(!0), o.buffers.stencil.setOp(s.REPLACE, s.REPLACE, s.REPLACE), o.buffers.stencil.setFunc(s.ALWAYS, i, 4294967295), o.buffers.stencil.setClear(r), o.buffers.stencil.setLocked(!0), t.setRenderTarget(n), this.clear && t.clear(), t.render(this.scene, this.camera), t.setRenderTarget(e), this.clear && t.clear(), t.render(this.scene, this.camera), o.buffers.color.setLocked(!1), o.buffers.depth.setLocked(!1), o.buffers.stencil.setLocked(!1), o.buffers.stencil.setFunc(s.EQUAL, 1, 4294967295), o.buffers.stencil.setOp(s.KEEP, s.KEEP, s.KEEP), o.buffers.stencil.setLocked(!0)
		}
	});
	var pp = function() {
		hp.call(this), this.needsSwap = !1
	};
	pp.prototype = Object.create(hp.prototype), Object.assign(pp.prototype, {
		render: function(t) {
			t.state.buffers.stencil.setLocked(!1), t.state.buffers.stencil.setTest(!1)
		}
	});
	var fp = function(t, e) {
		if (this.renderer = t, void 0 === e) {
			var n = {
					minFilter: Ut,
					magFilter: Ut,
					format: qt
				},
				i = t.getSize(new de);
			this._pixelRatio = t.getPixelRatio(), this._width = i.width, this._height = i.height, (e = new be(this._width * this._pixelRatio, this._height * this._pixelRatio, n)).texture.name = "EffectComposer.rt1"
		} else this._pixelRatio = 1, this._width = e.width, this._height = e.height;
		this.renderTarget1 = e, this.renderTarget2 = e.clone(), this.renderTarget2.texture.name = "EffectComposer.rt2", this.writeBuffer = this.renderTarget1, this.readBuffer = this.renderTarget2, this.renderToScreen = !0, this.passes = [], void 0 === lp && console.error("THREE.EffectComposer relies on CopyShader"), void 0 === up && console.error("THREE.EffectComposer relies on ShaderPass"), this.copyPass = new up(lp), this.clock = new Dl
	};
	Object.assign(fp.prototype, {
		swapBuffers: function() {
			var t = this.readBuffer;
			this.readBuffer = this.writeBuffer, this.writeBuffer = t
		},
		addPass: function(t) {
			this.passes.push(t), t.setSize(this._width * this._pixelRatio, this._height * this._pixelRatio)
		},
		insertPass: function(t, e) {
			this.passes.splice(e, 0, t), t.setSize(this._width * this._pixelRatio, this._height * this._pixelRatio)
		},
		removePass: function(t) {
			const e = this.passes.indexOf(t); - 1 !== e && this.passes.splice(e, 1)
		},
		isLastEnabledPass: function(t) {
			for (var e = t + 1; e < this.passes.length; e++)
				if (this.passes[e].enabled) return !1;
			return !0
		},
		render: function(t) {
			void 0 === t && (t = this.clock.getDelta());
			var e, n, i = this.renderer.getRenderTarget(),
				r = !1,
				s = this.passes.length;
			for (n = 0; n < s; n++)
				if (!1 !== (e = this.passes[n]).enabled) {
					if (e.renderToScreen = this.renderToScreen && this.isLastEnabledPass(n), e.render(this.renderer, this.writeBuffer, this.readBuffer, t, r), e.needsSwap) {
						if (r) {
							var o = this.renderer.getContext(),
								a = this.renderer.state.buffers.stencil;
							a.setFunc(o.NOTEQUAL, 1, 4294967295), this.copyPass.render(this.renderer, this.writeBuffer, this.readBuffer, t), a.setFunc(o.EQUAL, 1, 4294967295)
						}
						this.swapBuffers()
					}
					void 0 !== dp && (e instanceof dp ? r = !0 : e instanceof pp && (r = !1))
				} this.renderer.setRenderTarget(i)
		},
		reset: function(t) {
			if (void 0 === t) {
				var e = this.renderer.getSize(new de);
				this._pixelRatio = this.renderer.getPixelRatio(), this._width = e.width, this._height = e.height, (t = this.renderTarget1.clone()).setSize(this._width * this._pixelRatio, this._height * this._pixelRatio)
			}
			this.renderTarget1.dispose(), this.renderTarget2.dispose(), this.renderTarget1 = t, this.renderTarget2 = t.clone(), this.writeBuffer = this.renderTarget1, this.readBuffer = this.renderTarget2
		},
		setSize: function(t, e) {
			this._width = t, this._height = e;
			var n = this._width * this._pixelRatio,
				i = this._height * this._pixelRatio;
			this.renderTarget1.setSize(n, i), this.renderTarget2.setSize(n, i);
			for (var r = 0; r < this.passes.length; r++) this.passes[r].setSize(n, i)
		},
		setPixelRatio: function(t) {
			this._pixelRatio = t, this.setSize(this._width, this._height)
		}
	});
	var mp = function() {
		this.enabled = !0, this.needsSwap = !0, this.clear = !1, this.renderToScreen = !1
	};
	Object.assign(mp.prototype, {
		setSize: function() {},
		render: function() {
			console.error("THREE.Pass: .render() must be implemented in derived pass.")
		}
	}), mp.FullScreenQuad = function() {
		var t = new cl(-1, 1, 1, -1, 0, 1),
			e = new er(2, 2),
			n = function(t) {
				this._mesh = new zi(e, t)
			};
		return Object.defineProperty(n.prototype, "material", {
			get: function() {
				return this._mesh.material
			},
			set: function(t) {
				this._mesh.material = t
			}
		}), Object.assign(n.prototype, {
			dispose: function() {
				this._mesh.geometry.dispose()
			},
			render: function(e) {
				e.render(this._mesh, t)
			}
		}), n
	}();
	var gp = function(t, e, n, i, r) {
		hp.call(this), this.scene = t, this.camera = e, this.overrideMaterial = n, this.clearColor = i, this.clearAlpha = void 0 !== r ? r : 0, this.clear = !0, this.clearDepth = !1, this.needsSwap = !1, this._oldClearColor = new Vn
	};
	gp.prototype = Object.assign(Object.create(hp.prototype), {
		constructor: gp,
		render: function(t, e, n) {
			var i, r, s = t.autoClear;
			t.autoClear = !1, void 0 !== this.overrideMaterial && (r = this.scene.overrideMaterial, this.scene.overrideMaterial = this.overrideMaterial), this.clearColor && (t.getClearColor(this._oldClearColor), i = t.getClearAlpha(), t.setClearColor(this.clearColor, this.clearAlpha)), this.clearDepth && t.clearDepth(), t.setRenderTarget(this.renderToScreen ? null : n), this.clear && t.clear(t.autoClearColor, t.autoClearDepth, t.autoClearStencil), t.render(this.scene, this.camera), this.clearColor && t.setClearColor(this._oldClearColor, i), void 0 !== this.overrideMaterial && (this.scene.overrideMaterial = r), t.autoClear = s
		}
	});
	var vp = {
			shaderID: "luminosityHighPass",
			uniforms: {
				tDiffuse: {
					value: null
				},
				luminosityThreshold: {
					value: 1
				},
				smoothWidth: {
					value: 1
				},
				defaultColor: {
					value: new Vn(0)
				},
				defaultOpacity: {
					value: 0
				}
			},
			vertexShader: ["varying vec2 vUv;", "void main() {", "\tvUv = uv;", "\tgl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );", "}"].join("\n"),
			fragmentShader: ["uniform sampler2D tDiffuse;", "uniform vec3 defaultColor;", "uniform float defaultOpacity;", "uniform float luminosityThreshold;", "uniform float smoothWidth;", "varying vec2 vUv;", "void main() {", "\tvec4 texel = texture2D( tDiffuse, vUv );", "\tvec3 luma = vec3( 0.299, 0.587, 0.114 );", "\tfloat v = dot( texel.xyz, luma );", "\tvec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );", "\tfloat alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );", "\tgl_FragColor = mix( outputColor, texel, alpha );", "}"].join("\n")
		},
		yp = function(t, e, n, i) {
			hp.call(this), this.strength = void 0 !== e ? e : 1, this.radius = n, this.threshold = i, this.resolution = void 0 !== t ? new de(t.x, t.y) : new de(256, 256), this.clearColor = new Vn(0, 0, 0);
			var r = {
				minFilter: Ut,
				magFilter: Ut,
				format: qt
			};
			this.renderTargetsHorizontal = [], this.renderTargetsVertical = [], this.nMips = 5;
			var s = Math.round(this.resolution.x / 2),
				o = Math.round(this.resolution.y / 2);
			this.renderTargetBright = new be(s, o, r), this.renderTargetBright.texture.name = "UnrealBloomPass.bright", this.renderTargetBright.texture.generateMipmaps = !1;
			for (var a = 0; a < this.nMips; a++) {
				var c = new be(s, o, r);
				c.texture.name = "UnrealBloomPass.h" + a, c.texture.generateMipmaps = !1, this.renderTargetsHorizontal.push(c);
				var l = new be(s, o, r);
				l.texture.name = "UnrealBloomPass.v" + a, l.texture.generateMipmaps = !1, this.renderTargetsVertical.push(l), s = Math.round(s / 2), o = Math.round(o / 2)
			}
			void 0 === vp && console.error("THREE.UnrealBloomPass relies on LuminosityHighPassShader");
			var h = vp;
			this.highPassUniforms = ki.clone(h.uniforms), this.highPassUniforms.luminosityThreshold.value = i, this.highPassUniforms.smoothWidth.value = .01, this.materialHighPassFilter = new Gi({
				uniforms: this.highPassUniforms,
				vertexShader: h.vertexShader,
				fragmentShader: h.fragmentShader,
				defines: {}
			}), this.separableBlurMaterials = [];
			var u = [3, 5, 7, 9, 11];
			for (s = Math.round(this.resolution.x / 2), o = Math.round(this.resolution.y / 2), a = 0; a < this.nMips; a++) this.separableBlurMaterials.push(this.getSeperableBlurMaterial(u[a])), this.separableBlurMaterials[a].uniforms.texSize.value = new de(s, o), s = Math.round(s / 2), o = Math.round(o / 2);
			this.compositeMaterial = this.getCompositeMaterial(this.nMips), this.compositeMaterial.uniforms.blurTexture1.value = this.renderTargetsVertical[0].texture, this.compositeMaterial.uniforms.blurTexture2.value = this.renderTargetsVertical[1].texture, this.compositeMaterial.uniforms.blurTexture3.value = this.renderTargetsVertical[2].texture, this.compositeMaterial.uniforms.blurTexture4.value = this.renderTargetsVertical[3].texture, this.compositeMaterial.uniforms.blurTexture5.value = this.renderTargetsVertical[4].texture, this.compositeMaterial.uniforms.bloomStrength.value = e, this.compositeMaterial.uniforms.bloomRadius.value = .1, this.compositeMaterial.needsUpdate = !0;
			this.compositeMaterial.uniforms.bloomFactors.value = [1, .8, .6, .4, .2], this.bloomTintColors = [new we(1, 1, 1), new we(1, 1, 1), new we(1, 1, 1), new we(1, 1, 1), new we(1, 1, 1)], this.compositeMaterial.uniforms.bloomTintColors.value = this.bloomTintColors, void 0 === lp && console.error("THREE.UnrealBloomPass relies on CopyShader");
			var d = lp;
			this.copyUniforms = ki.clone(d.uniforms), this.copyUniforms.opacity.value = 1, this.materialCopy = new Gi({
				uniforms: this.copyUniforms,
				vertexShader: d.vertexShader,
				fragmentShader: d.fragmentShader,
				blending: 2,
				depthTest: !1,
				depthWrite: !1,
				transparent: !0
			}), this.enabled = !0, this.needsSwap = !1, this._oldClearColor = new Vn, this.oldClearAlpha = 1, this.basic = new Xn, this.fsQuad = new hp.FullScreenQuad(null)
		};
	yp.prototype = Object.assign(Object.create(hp.prototype), {
		constructor: yp,
		dispose: function() {
			for (var t = 0; t < this.renderTargetsHorizontal.length; t++) this.renderTargetsHorizontal[t].dispose();
			for (t = 0; t < this.renderTargetsVertical.length; t++) this.renderTargetsVertical[t].dispose();
			this.renderTargetBright.dispose()
		},
		setSize: function(t, e) {
			var n = Math.round(t / 2),
				i = Math.round(e / 2);
			this.renderTargetBright.setSize(n, i);
			for (var r = 0; r < this.nMips; r++) this.renderTargetsHorizontal[r].setSize(n, i), this.renderTargetsVertical[r].setSize(n, i), this.separableBlurMaterials[r].uniforms.texSize.value = new de(n, i), n = Math.round(n / 2), i = Math.round(i / 2)
		},
		render: function(t, e, n, i, r) {
			t.getClearColor(this._oldClearColor), this.oldClearAlpha = t.getClearAlpha();
			var s = t.autoClear;
			t.autoClear = !1, t.setClearColor(this.clearColor, 0), r && t.state.buffers.stencil.setTest(!1), this.renderToScreen && (this.fsQuad.material = this.basic, this.basic.map = n.texture, t.setRenderTarget(null), t.clear(), this.fsQuad.render(t)), this.highPassUniforms.tDiffuse.value = n.texture, this.highPassUniforms.luminosityThreshold.value = this.threshold, this.fsQuad.material = this.materialHighPassFilter, t.setRenderTarget(this.renderTargetBright), t.clear(), this.fsQuad.render(t);
			for (var o = this.renderTargetBright, a = 0; a < this.nMips; a++) this.fsQuad.material = this.separableBlurMaterials[a], this.separableBlurMaterials[a].uniforms.colorTexture.value = o.texture, this.separableBlurMaterials[a].uniforms.direction.value = yp.BlurDirectionX, t.setRenderTarget(this.renderTargetsHorizontal[a]), t.clear(), this.fsQuad.render(t), this.separableBlurMaterials[a].uniforms.colorTexture.value = this.renderTargetsHorizontal[a].texture, this.separableBlurMaterials[a].uniforms.direction.value = yp.BlurDirectionY, t.setRenderTarget(this.renderTargetsVertical[a]), t.clear(), this.fsQuad.render(t), o = this.renderTargetsVertical[a];
			this.fsQuad.material = this.compositeMaterial, this.compositeMaterial.uniforms.bloomStrength.value = this.strength, this.compositeMaterial.uniforms.bloomRadius.value = this.radius, this.compositeMaterial.uniforms.bloomTintColors.value = this.bloomTintColors, t.setRenderTarget(this.renderTargetsHorizontal[0]), t.clear(), this.fsQuad.render(t), this.fsQuad.material = this.materialCopy, this.copyUniforms.tDiffuse.value = this.renderTargetsHorizontal[0].texture, r && t.state.buffers.stencil.setTest(!0), this.renderToScreen ? (t.setRenderTarget(null), this.fsQuad.render(t)) : (t.setRenderTarget(n), this.fsQuad.render(t)), t.setClearColor(this._oldClearColor, this.oldClearAlpha), t.autoClear = s
		},
		getSeperableBlurMaterial: function(t) {
			return new Gi({
				defines: {
					KERNEL_RADIUS: t,
					SIGMA: t
				},
				uniforms: {
					colorTexture: {
						value: null
					},
					texSize: {
						value: new de(.5, .5)
					},
					direction: {
						value: new de(.5, .5)
					}
				},
				vertexShader: "varying vec2 vUv;\n\t\t\t\tvoid main() {\n\t\t\t\t\tvUv = uv;\n\t\t\t\t\tgl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n\t\t\t\t}",
				fragmentShader: "#include <common>\t\t\t\tvarying vec2 vUv;\n\t\t\t\tuniform sampler2D colorTexture;\n\t\t\t\tuniform vec2 texSize;\t\t\t\tuniform vec2 direction;\t\t\t\t\t\t\t\tfloat gaussianPdf(in float x, in float sigma) {\t\t\t\t\treturn 0.39894 * exp( -0.5 * x * x/( sigma * sigma))/sigma;\t\t\t\t}\t\t\t\tvoid main() {\n\t\t\t\t\tvec2 invSize = 1.0 / texSize;\t\t\t\t\tfloat fSigma = float(SIGMA);\t\t\t\t\tfloat weightSum = gaussianPdf(0.0, fSigma);\t\t\t\t\tvec3 diffuseSum = texture2D( colorTexture, vUv).rgb * weightSum;\t\t\t\t\tfor( int i = 1; i < KERNEL_RADIUS; i ++ ) {\t\t\t\t\t\tfloat x = float(i);\t\t\t\t\t\tfloat w = gaussianPdf(x, fSigma);\t\t\t\t\t\tvec2 uvOffset = direction * invSize * x;\t\t\t\t\t\tvec3 sample1 = texture2D( colorTexture, vUv + uvOffset).rgb;\t\t\t\t\t\tvec3 sample2 = texture2D( colorTexture, vUv - uvOffset).rgb;\t\t\t\t\t\tdiffuseSum += (sample1 + sample2) * w;\t\t\t\t\t\tweightSum += 2.0 * w;\t\t\t\t\t}\t\t\t\t\tgl_FragColor = vec4(diffuseSum/weightSum, 1.0);\n\t\t\t\t}"
			})
		},
		getCompositeMaterial: function(t) {
			return new Gi({
				defines: {
					NUM_MIPS: t
				},
				uniforms: {
					blurTexture1: {
						value: null
					},
					blurTexture2: {
						value: null
					},
					blurTexture3: {
						value: null
					},
					blurTexture4: {
						value: null
					},
					blurTexture5: {
						value: null
					},
					dirtTexture: {
						value: null
					},
					bloomStrength: {
						value: 1
					},
					bloomFactors: {
						value: null
					},
					bloomTintColors: {
						value: null
					},
					bloomRadius: {
						value: 0
					}
				},
				vertexShader: "varying vec2 vUv;\n\t\t\t\tvoid main() {\n\t\t\t\t\tvUv = uv;\n\t\t\t\t\tgl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n\t\t\t\t}",
				fragmentShader: "varying vec2 vUv;\t\t\t\tuniform sampler2D blurTexture1;\t\t\t\tuniform sampler2D blurTexture2;\t\t\t\tuniform sampler2D blurTexture3;\t\t\t\tuniform sampler2D blurTexture4;\t\t\t\tuniform sampler2D blurTexture5;\t\t\t\tuniform sampler2D dirtTexture;\t\t\t\tuniform float bloomStrength;\t\t\t\tuniform float bloomRadius;\t\t\t\tuniform float bloomFactors[NUM_MIPS];\t\t\t\tuniform vec3 bloomTintColors[NUM_MIPS];\t\t\t\t\t\t\t\tfloat lerpBloomFactor(const in float factor) { \t\t\t\t\tfloat mirrorFactor = 1.2 - factor;\t\t\t\t\treturn mix(factor, mirrorFactor, bloomRadius);\t\t\t\t}\t\t\t\t\t\t\t\tvoid main() {\t\t\t\t\tgl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) + \t\t\t\t\t\t\t\t\t\t\t\t\t lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) + \t\t\t\t\t\t\t\t\t\t\t\t\t lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) + \t\t\t\t\t\t\t\t\t\t\t\t\t lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) + \t\t\t\t\t\t\t\t\t\t\t\t\t lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );\t\t\t\t}"
			})
		}
	}), yp.BlurDirectionX = new de(1, 0), yp.BlurDirectionY = new de(0, 1);
	var xp = function(t, e) {
		var n, i, r, s, o, a;
		void 0 === e && console.warn('THREE.OrbitControls: The second parameter "domElement" is now mandatory.'), e === document && console.error('THREE.OrbitControls: "document" should not be used as the target "domElement". Please use "renderer.domElement" instead.'), this.object = t, this.domElement = e, this.enabled = !0, this.target = new we, this.minDistance = 0, this.maxDistance = 1 / 0, this.minZoom = 0, this.maxZoom = 1 / 0, this.minPolarAngle = 0, this.maxPolarAngle = Math.PI, this.minAzimuthAngle = -1 / 0, this.maxAzimuthAngle = 1 / 0, this.enableDamping = !1, this.dampingFactor = .05, this.enableZoom = !0, this.zoomSpeed = 1, this.enableRotate = !0, this.rotateSpeed = 1, this.enablePan = !0, this.panSpeed = 1, this.screenSpacePanning = !0, this.keyPanSpeed = 7, this.autoRotate = !1, this.autoRotateSpeed = 2, this.keys = {
			LEFT: 37,
			UP: 38,
			RIGHT: 39,
			BOTTOM: 40
		}, this.mouseButtons = {
			LEFT: Et,
			MIDDLE: At,
			RIGHT: Lt
		}, this.touches = {
			ONE: Ct,
			TWO: Pt
		}, this.target0 = this.target.clone(), this.position0 = this.object.position.clone(), this.zoom0 = this.object.zoom, this._domElementKeyEvents = null, this.getPolarAngle = function() {
			return m.phi
		}, this.getAzimuthalAngle = function() {
			return m.theta
		}, this.listenToKeyEvents = function(t) {
			t.addEventListener("keydown", Y), this._domElementKeyEvents = t
		}, this.saveState = function() {
			c.target0.copy(c.target), c.position0.copy(c.object.position), c.zoom0 = c.object.zoom
		}, this.reset = function() {
			c.target.copy(c.target0), c.object.position.copy(c.position0), c.object.zoom = c.zoom0, c.object.updateProjectionMatrix(), c.dispatchEvent(l), c.update(), p = d.NONE
		}, this.update = (n = new we, i = (new _e).setFromUnitVectors(t.up, new we(0, 1, 0)), r = i.clone().invert(), s = new we, o = new _e, a = 2 * Math.PI, function() {
			var t = c.object.position;
			n.copy(t).sub(c.target), n.applyQuaternion(i), m.setFromVector3(n), c.autoRotate && p === d.NONE && R(2 * Math.PI / 60 / 60 * c.autoRotateSpeed), c.enableDamping ? (m.theta += g.theta * c.dampingFactor, m.phi += g.phi * c.dampingFactor) : (m.theta += g.theta, m.phi += g.phi);
			var e = c.minAzimuthAngle,
				h = c.maxAzimuthAngle;
			return isFinite(e) && isFinite(h) && (e < -Math.PI ? e += a : e > Math.PI && (e -= a), h < -Math.PI ? h += a : h > Math.PI && (h -= a), m.theta = e <= h ? Math.max(e, Math.min(h, m.theta)) : m.theta > (e + h) / 2 ? Math.max(e, m.theta) : Math.min(h, m.theta)), m.phi = Math.max(c.minPolarAngle, Math.min(c.maxPolarAngle, m.phi)), m.makeSafe(), m.radius *= v, m.radius = Math.max(c.minDistance, Math.min(c.maxDistance, m.radius)), !0 === c.enableDamping ? c.target.addScaledVector(y, c.dampingFactor) : c.target.add(y), n.setFromSpherical(m), n.applyQuaternion(r), t.copy(c.target).add(n), c.object.lookAt(c.target), !0 === c.enableDamping ? (g.theta *= 1 - c.dampingFactor, g.phi *= 1 - c.dampingFactor, y.multiplyScalar(1 - c.dampingFactor)) : (g.set(0, 0, 0), y.set(0, 0, 0)), v = 1, !!(x || s.distanceToSquared(c.object.position) > f || 8 * (1 - o.dot(c.object.quaternion)) > f) && (c.dispatchEvent(l), s.copy(c.object.position), o.copy(c.object.quaternion), x = !1, !0)
		}), this.dispose = function() {
			c.domElement.removeEventListener("contextmenu", K), c.domElement.removeEventListener("pointerdown", W), c.domElement.removeEventListener("wheel", X), c.domElement.removeEventListener("touchstart", Z), c.domElement.removeEventListener("touchend", Q), c.domElement.removeEventListener("touchmove", J), c.domElement.ownerDocument.removeEventListener("pointermove", $), c.domElement.ownerDocument.removeEventListener("pointerup", q), null !== c._domElementKeyEvents && c._domElementKeyEvents.removeEventListener("keydown", Y)
		};
		var c = this,
			l = {
				type: "change"
			},
			h = {
				type: "start"
			},
			u = {
				type: "end"
			},
			d = {
				NONE: -1,
				ROTATE: 0,
				DOLLY: 1,
				PAN: 2,
				TOUCH_ROTATE: 3,
				TOUCH_PAN: 4,
				TOUCH_DOLLY_PAN: 5,
				TOUCH_DOLLY_ROTATE: 6
			},
			p = d.NONE,
			f = 1e-6,
			m = new eh,
			g = new eh,
			v = 1,
			y = new we,
			x = !1,
			b = new de,
			_ = new de,
			w = new de,
			M = new de,
			S = new de,
			T = new de,
			E = new de,
			A = new de,
			L = new de;

		function C() {
			return Math.pow(.95, c.zoomSpeed)
		}

		function R(t) {
			g.theta -= t
		}

		function P(t) {
			g.phi -= t
		}
		var D = function() {
				var t = new we;
				return function(e, n) {
					t.setFromMatrixColumn(n, 0), t.multiplyScalar(-e), y.add(t)
				}
			}(),
			O = function() {
				var t = new we;
				return function(e, n) {
					!0 === c.screenSpacePanning ? t.setFromMatrixColumn(n, 1) : (t.setFromMatrixColumn(n, 0), t.crossVectors(c.object.up, t)), t.multiplyScalar(e), y.add(t)
				}
			}(),
			I = function() {
				var t = new we;
				return function(e, n) {
					var i = c.domElement;
					if (c.object.isPerspectiveCamera) {
						var r = c.object.position;
						t.copy(r).sub(c.target);
						var s = t.length();
						s *= Math.tan(c.object.fov / 2 * Math.PI / 180), D(2 * e * s / i.clientHeight, c.object.matrix), O(2 * n * s / i.clientHeight, c.object.matrix)
					} else c.object.isOrthographicCamera ? (D(e * (c.object.right - c.object.left) / c.object.zoom / i.clientWidth, c.object.matrix), O(n * (c.object.top - c.object.bottom) / c.object.zoom / i.clientHeight, c.object.matrix)) : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."), c.enablePan = !1)
				}
			}();

		function N(t) {
			c.object.isPerspectiveCamera ? v /= t : c.object.isOrthographicCamera ? (c.object.zoom = Math.max(c.minZoom, Math.min(c.maxZoom, c.object.zoom * t)), c.object.updateProjectionMatrix(), x = !0) : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."), c.enableZoom = !1)
		}

		function z(t) {
			c.object.isPerspectiveCamera ? v *= t : c.object.isOrthographicCamera ? (c.object.zoom = Math.max(c.minZoom, Math.min(c.maxZoom, c.object.zoom / t)), c.object.updateProjectionMatrix(), x = !0) : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."), c.enableZoom = !1)
		}

		function B(t) {
			b.set(t.clientX, t.clientY)
		}

		function U(t) {
			M.set(t.clientX, t.clientY)
		}

		function F(t) {
			if (1 == t.touches.length) b.set(t.touches[0].pageX, t.touches[0].pageY);
			else {
				var e = .5 * (t.touches[0].pageX + t.touches[1].pageX),
					n = .5 * (t.touches[0].pageY + t.touches[1].pageY);
				b.set(e, n)
			}
		}

		function H(t) {
			if (1 == t.touches.length) M.set(t.touches[0].pageX, t.touches[0].pageY);
			else {
				var e = .5 * (t.touches[0].pageX + t.touches[1].pageX),
					n = .5 * (t.touches[0].pageY + t.touches[1].pageY);
				M.set(e, n)
			}
		}

		function k(t) {
			var e = t.touches[0].pageX - t.touches[1].pageX,
				n = t.touches[0].pageY - t.touches[1].pageY,
				i = Math.sqrt(e * e + n * n);
			E.set(0, i)
		}

		function G(t) {
			if (1 == t.touches.length) _.set(t.touches[0].pageX, t.touches[0].pageY);
			else {
				var e = .5 * (t.touches[0].pageX + t.touches[1].pageX),
					n = .5 * (t.touches[0].pageY + t.touches[1].pageY);
				_.set(e, n)
			}
			w.subVectors(_, b).multiplyScalar(c.rotateSpeed);
			var i = c.domElement;
			R(2 * Math.PI * w.x / i.clientHeight), P(2 * Math.PI * w.y / i.clientHeight), b.copy(_)
		}

		function j(t) {
			if (1 == t.touches.length) S.set(t.touches[0].pageX, t.touches[0].pageY);
			else {
				var e = .5 * (t.touches[0].pageX + t.touches[1].pageX),
					n = .5 * (t.touches[0].pageY + t.touches[1].pageY);
				S.set(e, n)
			}
			T.subVectors(S, M).multiplyScalar(c.panSpeed), I(T.x, T.y), M.copy(S)
		}

		function V(t) {
			var e = t.touches[0].pageX - t.touches[1].pageX,
				n = t.touches[0].pageY - t.touches[1].pageY,
				i = Math.sqrt(e * e + n * n);
			A.set(0, i), L.set(0, Math.pow(A.y / E.y, c.zoomSpeed)), N(L.y), E.copy(A)
		}

		function W(t) {
			if (!1 !== c.enabled) switch (t.pointerType) {
				case "mouse":
				case "pen":
					! function(t) {
						var e;
						switch (t.preventDefault(), c.domElement.focus ? c.domElement.focus() : window.focus(), t.button) {
							case 0:
								e = c.mouseButtons.LEFT;
								break;
							case 1:
								e = c.mouseButtons.MIDDLE;
								break;
							case 2:
								e = c.mouseButtons.RIGHT;
								break;
							default:
								e = -1
						}
						switch (e) {
							case At:
								if (!1 === c.enableZoom) return;
								! function(t) {
									E.set(t.clientX, t.clientY)
								}(t), p = d.DOLLY;
								break;
							case Et:
								if (t.ctrlKey || t.metaKey || t.shiftKey) {
									if (!1 === c.enablePan) return;
									U(t), p = d.PAN
								} else {
									if (!1 === c.enableRotate) return;
									B(t), p = d.ROTATE
								}
								break;
							case Lt:
								if (t.ctrlKey || t.metaKey || t.shiftKey) {
									if (!1 === c.enableRotate) return;
									B(t), p = d.ROTATE
								} else {
									if (!1 === c.enablePan) return;
									U(t), p = d.PAN
								}
								break;
							default:
								p = d.NONE
						}
						p !== d.NONE && (c.domElement.ownerDocument.addEventListener("pointermove", $), c.domElement.ownerDocument.addEventListener("pointerup", q), c.dispatchEvent(h))
					}(t)
			}
		}

		function $(t) {
			if (!1 !== c.enabled) switch (t.pointerType) {
				case "mouse":
				case "pen":
					! function(t) {
						if (!1 === c.enabled) return;
						switch (t.preventDefault(), p) {
							case d.ROTATE:
								if (!1 === c.enableRotate) return;
								! function(t) {
									_.set(t.clientX, t.clientY), w.subVectors(_, b).multiplyScalar(c.rotateSpeed);
									var e = c.domElement;
									R(2 * Math.PI * w.x / e.clientHeight), P(2 * Math.PI * w.y / e.clientHeight), b.copy(_), c.update()
								}(t);
								break;
							case d.DOLLY:
								if (!1 === c.enableZoom) return;
								! function(t) {
									A.set(t.clientX, t.clientY), L.subVectors(A, E), L.y > 0 ? N(C()) : L.y < 0 && z(C()), E.copy(A), c.update()
								}(t);
								break;
							case d.PAN:
								if (!1 === c.enablePan) return;
								! function(t) {
									S.set(t.clientX, t.clientY), T.subVectors(S, M).multiplyScalar(c.panSpeed), I(T.x, T.y), M.copy(S), c.update()
								}(t)
						}
					}(t)
			}
		}

		function q(t) {
			switch (t.pointerType) {
				case "mouse":
				case "pen":
					! function(t) {
						if (c.domElement.ownerDocument.removeEventListener("pointermove", $), c.domElement.ownerDocument.removeEventListener("pointerup", q), !1 === c.enabled) return;
						c.dispatchEvent(u), p = d.NONE
					}()
			}
		}

		function X(t) {
			!1 === c.enabled || !1 === c.enableZoom || p !== d.NONE && p !== d.ROTATE || (t.preventDefault(), t.stopPropagation(), c.dispatchEvent(h), function(t) {
				t.deltaY < 0 ? z(C()) : t.deltaY > 0 && N(C()), c.update()
			}(t), c.dispatchEvent(u))
		}

		function Y(t) {
			!1 !== c.enabled && !1 !== c.enablePan && function(t) {
				var e = !1;
				switch (t.keyCode) {
					case c.keys.UP:
						I(0, c.keyPanSpeed), e = !0;
						break;
					case c.keys.BOTTOM:
						I(0, -c.keyPanSpeed), e = !0;
						break;
					case c.keys.LEFT:
						I(c.keyPanSpeed, 0), e = !0;
						break;
					case c.keys.RIGHT:
						I(-c.keyPanSpeed, 0), e = !0
				}
				e && (t.preventDefault(), c.update())
			}(t)
		}

		function Z(t) {
			if (!1 !== c.enabled) {
				switch (t.preventDefault(), t.touches.length) {
					case 1:
						switch (c.touches.ONE) {
							case Ct:
								if (!1 === c.enableRotate) return;
								F(t), p = d.TOUCH_ROTATE;
								break;
							case Rt:
								if (!1 === c.enablePan) return;
								H(t), p = d.TOUCH_PAN;
								break;
							default:
								p = d.NONE
						}
						break;
					case 2:
						switch (c.touches.TWO) {
							case Pt:
								if (!1 === c.enableZoom && !1 === c.enablePan) return;
								! function(t) {
									c.enableZoom && k(t), c.enablePan && H(t)
								}(t), p = d.TOUCH_DOLLY_PAN;
								break;
							case Dt:
								if (!1 === c.enableZoom && !1 === c.enableRotate) return;
								! function(t) {
									c.enableZoom && k(t), c.enableRotate && F(t)
								}(t), p = d.TOUCH_DOLLY_ROTATE;
								break;
							default:
								p = d.NONE
						}
						break;
					default:
						p = d.NONE
				}
				p !== d.NONE && c.dispatchEvent(h)
			}
		}

		function J(t) {
			if (!1 !== c.enabled) switch (t.preventDefault(), t.stopPropagation(), p) {
				case d.TOUCH_ROTATE:
					if (!1 === c.enableRotate) return;
					G(t), c.update();
					break;
				case d.TOUCH_PAN:
					if (!1 === c.enablePan) return;
					j(t), c.update();
					break;
				case d.TOUCH_DOLLY_PAN:
					if (!1 === c.enableZoom && !1 === c.enablePan) return;
					! function(t) {
						c.enableZoom && V(t), c.enablePan && j(t)
					}(t), c.update();
					break;
				case d.TOUCH_DOLLY_ROTATE:
					if (!1 === c.enableZoom && !1 === c.enableRotate) return;
					! function(t) {
						c.enableZoom && V(t), c.enableRotate && G(t)
					}(t), c.update();
					break;
				default:
					p = d.NONE
			}
		}

		function Q(t) {
			!1 !== c.enabled && (c.dispatchEvent(u), p = d.NONE)
		}

		function K(t) {
			!1 !== c.enabled && t.preventDefault()
		}
		c.domElement.addEventListener("contextmenu", K), c.domElement.addEventListener("pointerdown", W), c.domElement.addEventListener("wheel", X), c.domElement.addEventListener("touchstart", Z), c.domElement.addEventListener("touchend", Q), c.domElement.addEventListener("touchmove", J), this.update()
	};
	(xp.prototype = Object.create(ce.prototype)).constructor = xp;
	var bp = function(t, e) {
		xp.call(this, t, e), this.screenSpacePanning = !1, this.mouseButtons.LEFT = Lt, this.mouseButtons.RIGHT = Et, this.touches.ONE = Rt, this.touches.TWO = Dt
	};
	(bp.prototype = Object.create(ce.prototype)).constructor = bp;
	class _p {
		constructor(t, e) {
			this.lastChange = 0, this.playerShip = t, this.camera = new Vi(75, window.innerWidth / window.innerHeight, 2, 3e7), this.camera.position.z = -10, this.controls = new xp(this.camera, e.domElement), this.controls.enableDamping = !0, this.controls.dampingFactor = .25, this.controls.enableZoom = !0, this.controls.enablePan = !1, this.controls.minDistance = 7, this.controls.maxDistance = 75, this.controls.addEventListener("end", (() => {
				this.lastChange = Date.now()
			}))
		}
		mirrorShipPositionChange() {
			this.playerShip.positionChange && this.camera.position.add(this.playerShip.positionChange), this.controls.target = this.playerShip.shipModel.position
		}
		update(t) {
			this.mirrorShipPositionChange(), Date.now(), this.lastChange, this.controls.update()
		}
	}
	class wp {
		constructor(t) {
			this.camera = new Vi(75, window.innerWidth / window.innerHeight, 100, 3e7), this.camera.position.z = -7e6, this.camera.position.y = 5e6, this.controls = new xp(this.camera, t.domElement), this.controls.enableDamping = !0, this.controls.dampingFactor = .25, this.controls.enableZoom = !0, this.controls.enablePan = !1, this.controls.minDistance = 1e6, this.controls.maxDistance = 15e6
		}
	}
	let Mp, Sp;

	function Tp(t) {
		Sp = t
	}
	Qh.subscribe((t => Mp = t));
	const Ep = new $o({
			color: 32768,
			side: 2
		}),
		Ap = new yi,
		Lp = new Qo(Ap, Ep);

	function Cp() {
		if (Mp.showNavPath) {
			const t = Mp.getCurrentShip(),
				e = Mp.starSystem.pois,
				n = [];
			t.navRoute.forEach((t => {
				n.push(e[t.id].getPosition().clone())
			})), t.navRoute.length > 2 && n.push(e[t.navRoute[0].id].getPosition().clone()), n.forEach((t => t.y -= 5)), Ap.setFromPoints(n), Ap.computeBoundingBox(), Ap.computeBoundingSphere(), Sp.add(Lp)
		} else Sp.remove(Lp)
	}
	let Rp;

	function Pp() {
		return Rp || (Rp = new Wh, Rp.setSize(window.innerWidth, window.innerHeight), Rp.domElement.style.position = "absolute", Rp.domElement.style.top = "0px", Rp.domElement.style.zIndex = "-25", document.body.appendChild(Rp.domElement)), Rp
	}
	const Dp = "energy-tank.svg",
		Op = "laser-turret.svg",
		Ip = "power-generator.svg",
		Np = "rocket-thruster.svg",
		zp = "round-silo.svg",
		Bp = "spring.svg";
	class Up {
		constructor(t, e, n, i, r, s, o, a) {
			this.id = t, this.name = e, this.description = n, this.icon = i, this.basePrice = r, this.multi = s, this.apply = o, this.totalEffect = a
		}
		getPrice(t) {
			return t.type == Gh.upgrade && t.id == this.id ? this.basePrice * Math.pow(this.multi, t.level) : this.basePrice
		}
	}
	const Fp = [];

	function Hp(t) {
		Fp.forEach((e => {
			e.apply(t)
		}))
	}
	Fp.push(new Up(1, "Mining Laser", "Increases the speed of gathering solid materials by 10%", Op, 1500, 1.4, (function(t) {
		t.solidSpeed = 1, t.factorySlots.forEach((e => {
			e.type == Gh.upgrade && e.id == this.id && (t.solidSpeed += .1 * e.level)
		}))
	}), (function(t) {
		return "mining speed: " + (100 * t.solidSpeed).toFixed(2) + "%"
	}))), Fp.push(new Up(2, "Pressure Hose", "Increases the speed of gathering liquids by 10%", Bp, 1e3, 1.4, (function(t) {
		t.liquidSpeed = 1, t.factorySlots.forEach((e => {
			e.type == Gh.upgrade && e.id == this.id && (t.liquidSpeed += .1 * e.level)
		}))
	}), (function(t) {
		return "liquid extraction speed: " + (100 * t.liquidSpeed).toFixed(2) + "%"
	}))), Fp.push(new Up(3, "Gas Extractor", "Increases the speed of gathering gas by 10%", Dp, 850, 1.4, (function(t) {
		t.gasSpeed = 1, t.factorySlots.forEach((e => {
			e.type == Gh.upgrade && e.id == this.id && (t.gasSpeed += .1 * e.level)
		}))
	}), (function(t) {
		return "gas extraction speed: " + (100 * t.gasSpeed).toFixed(2) + "%"
	}))), Fp.push(new Up(4, "Afterburner", "Increases ship acceleration by 100km/s", Np, 900, 1.4, (function(t) {
		t.accelBoost = 0, t.factorySlots.forEach((e => {
			e.type == Gh.upgrade && e.id == this.id && (t.accelBoost += 100 * e.level)
		}))
	}), (function(t) {
		return "acceleration: " + Bu(500 + t.accelBoost) + " Km/s2"
	}))), Fp.push(new Up(5, "Efficiency Drive", "Increases ship max speed by 2000 Km/s", Ip, 1200, 1.4, (function(t) {
		t.speedBoost = 1, t.factorySlots.forEach((e => {
			e.type == Gh.upgrade && e.id == this.id && (t.speedBoost += 2e3 * e.level)
		}))
	}), (function(t) {
		return "max speed: " + Bu(2e4 + t.speedBoost) + " Km/s"
	}))), Fp.push(new Up(6, "Freight Rack", "Increases ship cargo capacity by 10", zp, 500, 1.4, (function(t) {
		t.cargoCapacity = 100, t.factorySlots.forEach((e => {
			e.type == Gh.upgrade && e.id == this.id && (t.cargoCapacity += 10 * e.level)
		}))
	}), (function(t) {
		return "cargo capacity: " + Bu(t.cargoCapacity) + " units"
	}))), Fp.sort(((t, e) => t.basePrice - e.basePrice));
	const kp = new Map;
	(() => {
		const t = [];
		Fp.forEach((e => {
			kp.set(e.id, e), t[e.id] && alert(`Resource id ${e.id} has been used more than once!`), t[e.id] = !0
		}))
	})();
	const Gp = 1,
		jp = .6,
		Vp = 0;

	function Wp() {
		let t;
		Qh.subscribe((e => t = e));
		let e;
		gu.subscribe((t => e = t)), t.persistent.shipData.forEach((t => Hp(t)));
		const n = new ao,
			i = new so({
				antialias: !1
			});
		i.setSize(window.innerWidth, window.innerHeight);
		const r = Pp(),
			s = new Pu(n, t.getCurrentShip()),
			o = new _p(s, r),
			a = new wp(r),
			c = new cp(n);
		c.setup(t.getCurrentShip().starSystem[0], t.getCurrentShip().starSystem[1], s), s.setPositionFrom(c.getStartingPosition(), o), t.starSystem = c, Tp(n);
		const l = new yp(new de(window.innerWidth, window.innerHeight), 1.5, .4, .85);
		l.threshold = jp, l.strength = Gp, l.radius = Vp;
		const h = new gp(n, o.camera),
			u = new fp(i);
		u.addPass(h), u.addPass(l);
		const d = new Vh(document.getElementById("target"));
		d.position.set(0, 0, 0), document.body.appendChild(i.domElement);
		let p = 0;
		let f = 0,
			m = 0;
		let g = 0;

		function v() {
			g = requestAnimationFrame(v),
				function() {
					y = Date.now();
					const l = Math.max((y - x) / 1e3, 0);
					x = y, l > 1 && (b += l);
					e && (b += e, gu.set(0));
					t.settings.rendererSettings.settingsChanged && (s.updateColor(t.settings.shipColor), i.setPixelRatio(t.settings.rendererSettings.resolution), u.setPixelRatio(t.settings.rendererSettings.resolution), t.settings.rendererSettings.settingsChanged = !1);
					t.warp && (t.warp = !1, t.getCurrentShip().navRoute = [], t.getCurrentShip().navStage = 0, c.setup(t.getCurrentShip().starSystem[0], t.getCurrentShip().starSystem[1], s));
					(function() {
						if (f++, 20 == f) {
							const e = (y - m) / 20;
							t.stats.fps = 1e3 / e, m = y, f = 0, Kh()
						}
					})(),
					function() {
						if (Date.now() - p > 200) {
							if (p = Date.now(), t.stats.position = s.shipModel.position.clone(), t.stats.cruising = s.shipData.state == kh.cruising, t.stats.cruising) {
								if (s.currentNavigation && t.targetPoi) {
									t.stats.speed = s.currentNavigation.currentSpeed;
									const e = t.targetPoi.getDistance(s.shipModel.position) - t.targetPoi.stoppingDistance,
										n = 1e3 * (s.currentNavigation.totalTime - s.shipData.stageProgress);
									t.stats.distanceToTarget = e, t.stats.timeToTarget = Uu(n)
								} else t.stats.speed -= 500, t.stats.speed < 0 && (t.stats.speed = 0);
								d.element.classList.remove("gathering")
							} else t.stats.speed = 0, s.currentOrbit && (t.stats.gatherTime = Uu(1e3 * (s.currentOrbit.time - s.shipData.stageProgress)), t.stats.speed = s.currentOrbit.speed, d.element.classList.add("gathering"));
							t.stats.drawCalls = i.info.render.calls, t.showNavPath && c.updatePoiDistanceLabels(), Kh()
						}
					}(), b > 0 ? b = s.longUpdate(b, c, o, w) : (s.update(l, c), o.update(l), t.getCurrentShip().state != kh.stopped && y - t.persistent.lastSaved > 3e4 && Bh(t.persistent, 0));
					s.updateTargetDiv(d, c), c.update(l, s), t.useNavCamera ? (a.controls.enabled = !0, o.controls.enabled = !1, r.render(n, a.camera), i.render(n, a.camera)) : (a.controls.enabled = !1, o.controls.enabled = !0, r.render(n, o.camera), t.settings.rendererSettings.bloomOn ? u.render() : i.render(n, o.camera))
				}()
		}
		let y = 0,
			x = Date.now(),
			b = 0,
			_ = 0;
		const w = 2e3;

		function M() {
			b = s.longUpdate(b, c, o, w), eu.set(Math.round((_ - b) / _ * 100)), b > 0 ? setTimeout(M) : (tu.set(!1), v())
		}
		0 != t.persistent.lastSaved ? (b = Math.max((Date.now() - t.persistent.lastSaved) / 1e3, 0), console.log(`offline for ${b} seconds`), _ = b, 3 == t.getCurrentShip().position.length && s.setPositionFrom(new we(t.getCurrentShip().position[0], t.getCurrentShip().position[1], t.getCurrentShip().position[2]), o), tu.set(!0), eu.set(0), M()) : v(), window.onresize = function() {
			a.camera.aspect = o.camera.aspect = window.innerWidth / window.innerHeight, o.camera.updateProjectionMatrix(), a.camera.updateProjectionMatrix(), i.setSize(window.innerWidth, window.innerHeight), u.setSize(window.innerWidth, window.innerHeight), l.setSize(window.innerWidth, window.innerHeight), r.setSize(window.innerWidth, window.innerHeight)
		}
	}

	function $p(t) {
		let e = 0,
			n = 0,
			i = 0,
			r = 0;

		function s(s) {
			(s = s || window.event).preventDefault(), e = i - s.clientX, n = r - s.clientY, i = s.clientX, r = s.clientY, t.style.top = t.offsetTop - n + "px", t.style.left = t.offsetLeft - e + "px"
		}

		function o() {
			document.onmouseup = null, document.onmousemove = null
		}
		t.getElementsByTagName("h1").length > 0 && (t.getElementsByTagName("h1")[0].onmousedown = function(t) {
			(t = t || window.event).preventDefault(), i = t.clientX, r = t.clientY, document.onmouseup = o, document.onmousemove = s
		})
	}

	function qp(t) {
		const e = t - 1;
		return e * e * e + 1
	}

	function Xp(t, {
		delay: e = 0,
		duration: n = 400,
		easing: i = qp,
		x: r = 0,
		y: s = 0,
		opacity: o = 0
	}) {
		const a = getComputedStyle(t),
			c = +a.opacity,
			l = "none" === a.transform ? "" : a.transform,
			h = c * (1 - o);
		return {
			delay: e,
			duration: n,
			easing: i,
			css: (t, e) => `\n\t\t\ttransform: ${l} translate(${(1-t)*r}px, ${(1-t)*s}px);\n\t\t\topacity: ${c-h*e}`
		}
	}

	function Yp(t) {
		let e, n, i, r, o, a, h, u, d, p, f, m, g;
		const b = t[7].default,
			S = function(t, e, n, i) {
				if (t) {
					const r = c(t, e, n, i);
					return t[0](r)
				}
			}(b, t, t[6], null);
		return {
			c() {
				e = _("div"), n = _("h1"), i = w(t[1]), r = M(), o = _("a"), h = M(), u = _("div"), S && S.c(), E(n, "class", "title"), E(o, "class", "close svelte-ow1c42"), E(o, "href", a = "javascript:void(0);"), E(u, "class", "menu-panel"), E(e, "class", d = "menu " + t[0]), C(e, "top", t[3].top), C(e, "left", t[3].left), C(e, "height", t[3].height), C(e, "width", t[3].width)
			},
			m(a, c) {
				y(a, e, c), v(e, n), v(n, i), v(e, r), v(e, o), v(e, h), v(e, u), S && S.m(u, null), t[8](e), f = !0, m || (g = T(o, "click", (function() {
					s(t[2]) && t[2].apply(this, arguments)
				})), m = !0)
			},
			p(n, [r]) {
				t = n, (!f || 2 & r) && A(i, t[1]), S && S.p && 64 & r && l(S, b, t, t[6], r, null, null), (!f || 1 & r && d !== (d = "menu " + t[0])) && E(e, "class", d), (!f || 8 & r) && C(e, "top", t[3].top), (!f || 8 & r) && C(e, "left", t[3].left), (!f || 8 & r) && C(e, "height", t[3].height), (!f || 8 & r) && C(e, "width", t[3].width)
			},
			i(t) {
				f || (ht(S, t), t && J((() => {
					p || (p = pt(e, Xp, {
						y: -10,
						duration: 200
					}, !0)), p.run(1)
				})), f = !0)
			},
			o(t) {
				ut(S, t), t && (p || (p = pt(e, Xp, {
					y: -10,
					duration: 200
				}, !1)), p.run(0)), f = !1
			},
			d(n) {
				n && x(e), S && S.d(n), t[8](null), n && p && p.end(), m = !1, g()
			}
		}
	}
	class Zp {
		constructor() {
			this.top = "", this.left = "", this.height = "", this.width = ""
		}
	}
	const Jp = new Map;

	function Qp(t, e, n) {
		let {
			$$slots: i = {},
			$$scope: r
		} = e;
		var s;
		let o, {
				menu: a
			} = e,
			{
				title: c = "You forgot to set a title"
			} = e,
			{
				closeFunction: l
			} = e,
			{
				resetVars: h = !1
			} = e,
			u = null !== (s = Jp.get(a)) && void 0 !== s ? s : new Zp;
		h && (u = new Zp);
		const d = new MutationObserver((() => {
			p()
		}));

		function p() {
			n(3, u.top = o.style.top, u), n(3, u.left = o.style.left, u), n(3, u.height = o.style.height, u), n(3, u.width = o.style.width, u), Jp.set(a, u)
		}
		return j((() => {
			if (function() {
					const t = Array.from(document.getElementsByClassName("menu"));
					for (let n = 0; n < t.length; n++) $p(t[n]), t[n].onmousedown = e;

					function e() {
						t.sort(((t, e) => parseFloat(t.style.zIndex) - parseFloat(e.style.zIndex)));
						for (let e = 0; e < t.length; e++) t[e].style.zIndex = String(e);
						this.style.zIndex = String(t.length)
					}
				}(), d.observe(o, {
					attributes: !0
				}), o.dispatchEvent(new Event("mousedown")), p(), "" == u.left && !window.matchMedia("(pointer: coarse)").matches) {
				const t = function(t) {
					const e = Array.from(document.getElementsByClassName("menu"));
					let n;
					if (e.forEach((e => {
							e.classList.contains(t) && (n = e)
						})), !n) return {
						left: "auto",
						top: "auto"
					};
					if (!n.style.top) {
						let n;
						if (e.forEach((e => {
								e.classList.contains(t) || n && !(e.style.zIndex > n.style.zIndex) || (n = e)
							})), n) {
							const t = n.getBoundingClientRect(),
								e = t.x + t.width + 20;
							if (e < window.innerWidth - 200) return {
								left: e + "px",
								top: n.style.top
							}
						}
					}
					return {
						left: n.style.left,
						top: n.style.top
					}
				}(a);
				n(3, u.left = t.left, u), n(3, u.top = t.top, u)
			}
		})), V((() => {
			p(), d.disconnect()
		})), t.$$set = t => {
			"menu" in t && n(0, a = t.menu), "title" in t && n(1, c = t.title), "closeFunction" in t && n(2, l = t.closeFunction), "resetVars" in t && n(5, h = t.resetVars), "$$scope" in t && n(6, r = t.$$scope)
		}, [a, c, l, u, o, h, r, i, function(t) {
			$[t ? "unshift" : "push"]((() => {
				o = t, n(4, o)
			}))
		}]
	}
	class Kp extends Tt {
		constructor(t) {
			super(), St(this, t, Qp, Yp, o, {
				menu: 0,
				title: 1,
				closeFunction: 2,
				resetVars: 5
			})
		}
	}

	function tf() {}

	function ef(t, e) {
		for (const n in e) t[n] = e[n];
		return t
	}

	function nf(t) {
		return t()
	}

	function rf() {
		return Object.create(null)
	}

	function sf(t) {
		t.forEach(nf)
	}

	function of (t) {
		return "function" == typeof t
	}

	function af(t, e) {
		return t != t ? e == e : t !== e || t && "object" == typeof t || "function" == typeof t
	}

	function cf(t) {
		const e = {};
		for (const n in t) "$" !== n[0] && (e[n] = t[n]);
		return e
	}

	function lf(t) {
		t.parentNode.removeChild(t)
	}

	function hf(t, e, n) {
		null == n ? t.removeAttribute(e) : t.getAttribute(e) !== n && t.setAttribute(e, n)
	}

	function uf(t, e) {
		for (const n in e) hf(t, n, e[n])
	}
	let df;

	function pf(t) {
		df = t
	}

	function ff() {
		if (!df) throw new Error("Function called outside component initialization");
		return df
	}
	const mf = [],
		gf = [],
		vf = [],
		yf = [],
		xf = Promise.resolve();
	let bf = !1;

	function _f() {
		bf || (bf = !0, xf.then(Tf))
	}

	function wf(t) {
		vf.push(t)
	}
	let Mf = !1;
	const Sf = new Set;

	function Tf() {
		if (!Mf) {
			Mf = !0;
			do {
				for (let t = 0; t < mf.length; t += 1) {
					const e = mf[t];
					pf(e), Ef(e.$$)
				}
				for (pf(null), mf.length = 0; gf.length;) gf.pop()();
				for (let t = 0; t < vf.length; t += 1) {
					const e = vf[t];
					Sf.has(e) || (Sf.add(e), e())
				}
				vf.length = 0
			} while (mf.length);
			for (; yf.length;) yf.pop()();
			bf = !1, Mf = !1, Sf.clear()
		}
	}

	function Ef(t) {
		if (null !== t.fragment) {
			t.update(), sf(t.before_update);
			const e = t.dirty;
			t.dirty = [-1], t.fragment && t.fragment.p(t.ctx, e), t.after_update.forEach(wf)
		}
	}
	const Af = new Set;

	function Lf(t, e, n, i, r, s, o = [-1]) {
		const a = df;
		pf(t);
		const c = e.props || {},
			l = t.$$ = {
				fragment: null,
				ctx: null,
				props: s,
				update: tf,
				not_equal: r,
				bound: rf(),
				on_mount: [],
				on_destroy: [],
				before_update: [],
				after_update: [],
				context: new Map(a ? a.$$.context : []),
				callbacks: rf(),
				dirty: o,
				skip_bound: !1
			};
		let h = !1;
		if (l.ctx = n ? n(t, c, ((e, n, ...i) => {
				const s = i.length ? i[0] : n;
				return l.ctx && r(l.ctx[e], l.ctx[e] = s) && (!l.skip_bound && l.bound[e] && l.bound[e](s), h && function(t, e) {
					-1 === t.$$.dirty[0] && (mf.push(t), _f(), t.$$.dirty.fill(0)), t.$$.dirty[e / 31 | 0] |= 1 << e % 31
				}(t, e)), n
			})) : [], l.update(), h = !0, sf(l.before_update), l.fragment = !!i && i(l.ctx), e.target) {
			if (e.hydrate) {
				const t = (d = e.target, Array.from(d.childNodes));
				l.fragment && l.fragment.l(t), t.forEach(lf)
			} else l.fragment && l.fragment.c();
			e.intro && (u = t.$$.fragment) && u.i && (Af.delete(u), u.i(undefined)),
				function(t, e, n) {
					const {
						fragment: i,
						on_mount: r,
						on_destroy: s,
						after_update: o
					} = t.$$;
					i && i.m(e, n), wf((() => {
						const e = r.map(nf).filter( of );
						s ? s.push(...e) : sf(e), t.$$.on_mount = []
					})), o.forEach(wf)
				}(t, e.target, e.anchor), Tf()
		}
		var u, d;
		pf(a)
	}

	function Cf(t) {
		let e, n, i, r = [{
				xmlmns: "http://www.w3.org/2000/svg"
			}, t[0], Rf(t[2], ["src", "transformSrc"]), {
				contenteditable: "true"
			}],
			s = {};
		for (let t = 0; t < r.length; t += 1) s = ef(s, r[t]);
		return {
			c() {
				e = document.createElementNS("http://www.w3.org/2000/svg", "svg"), uf(e, s), void 0 === t[1] && wf((() => t[5].call(e)))
			},
			m(r, s) {
				var o, a, c, l;
				! function(t, e, n) {
					t.insertBefore(e, n || null)
				}(r, e, s), void 0 !== t[1] && (e.innerHTML = t[1]), n || (o = e, a = "input", c = t[5], o.addEventListener(a, c, l), i = () => o.removeEventListener(a, c, l), n = !0)
			},
			p(t, [n]) {
				uf(e, s = function(t, e) {
					const n = {},
						i = {},
						r = {
							$$scope: 1
						};
					let s = t.length;
					for (; s--;) {
						const o = t[s],
							a = e[s];
						if (a) {
							for (const t in o) t in a || (i[t] = 1);
							for (const t in a) r[t] || (n[t] = a[t], r[t] = 1);
							t[s] = a
						} else
							for (const t in o) r[t] = 1
					}
					for (const t in i) t in n || (n[t] = void 0);
					return n
				}(r, [{
					xmlmns: "http://www.w3.org/2000/svg"
				}, 1 & n && t[0], 4 & n && Rf(t[2], ["src", "transformSrc"]), {
					contenteditable: "true"
				}])), 2 & n && t[1] !== e.innerHTML && (e.innerHTML = t[1])
			},
			i: tf,
			o: tf,
			d(t) {
				t && lf(e), n = !1, i()
			}
		}
	}

	function Rf(t, e) {
		return Object.keys(t).filter((t => e.includes(t))).forEach((e => delete t[e])), t
	}

	function Pf(t, e, n) {
		const i = function() {
			const t = ff();
			return (e, n) => {
				const i = t.$$.callbacks[e];
				if (i) {
					const r = function(t, e) {
						const n = document.createEvent("CustomEvent");
						return n.initCustomEvent(t, !1, !1, e), n
					}(e, n);
					i.slice().forEach((e => {
						e.call(t, r)
					}))
				}
			}
		}();
		let {
			src: r
		} = e, {
			transformSrc: s = (t => t)
		} = e;
		var o;
		o = () => {
			! function(t) {
				var e;
				c[t] || (l && (l = !1, i("unloaded")), c[t] = (e = t, new Promise(((t, n) => {
					const i = new XMLHttpRequest;
					i.open("GET", e, !0), i.onload = () => {
						if (i.status >= 200 && i.status < 400) try {
							let e = (new DOMParser).parseFromString(i.responseText, "text/xml").querySelector("svg");
							e ? (e = s(e), t(e)) : n(new Error('Loaded file is not valid SVG"'))
						} catch (t) {
							n(t)
						} else n(new Error("Error loading SVG"))
					}, i.onerror = n, i.send()
				})))), c[t].then((async t => {
					const e = t.attributes;
					for (let t = e.length - 1; t >= 0; t--) n(0, h[e[t].name] = e[t].value, h);
					n(1, a = t.innerHTML), await (_f(), xf), l = !0, i("loaded")
				})).catch((e => {
					delete c[t], console.error(e)
				}))
			}(r)
		}, ff().$$.on_mount.push(o);
		let a, c = {},
			l = !1,
			h = {};
		return t.$$set = t => {
			n(2, e = ef(ef({}, e), cf(t))), "src" in t && n(3, r = t.src), "transformSrc" in t && n(4, s = t.transformSrc)
		}, e = cf(e), [h, a, e, r, s, function() {
			a = this.innerHTML, n(1, a)
		}]
	}
	class Df extends class {
		$destroy() {
			! function(t, e) {
				const n = t.$$;
				null !== n.fragment && (sf(n.on_destroy), n.fragment && n.fragment.d(1), n.on_destroy = n.fragment = null, n.ctx = [])
			}(this), this.$destroy = tf
		}
		$on(t, e) {
			const n = this.$$.callbacks[t] || (this.$$.callbacks[t] = []);
			return n.push(e), () => {
				const t = n.indexOf(e); - 1 !== t && n.splice(t, 1)
			}
		}
		$set(t) {
			var e;
			this.$$set && (e = t, 0 !== Object.keys(e).length) && (this.$$.skip_bound = !0, this.$$set(t), this.$$.skip_bound = !1)
		}
	} {
		constructor(t) {
			super(), Lf(this, t, Pf, Cf, af, {
				src: 3,
				transformSrc: 4
			})
		}
	}

	function Of(t) {
		let e, n, i, r, s, o, a, c;
		return n = new Df({
			props: {
				src: "svg/" + t[2]
			}
		}), {
			c() {
				e = _("span"), bt(n.$$.fragment), i = M(), r = _("span"), s = w(t[1]), E(e, "class", "btn")
			},
			m(l, h) {
				y(l, e, h), _t(n, e, null), v(e, i), v(e, r), v(r, s), o = !0, a || (c = T(e, "click", t[3]), a = !0)
			},
			p(t, [e]) {
				const i = {};
				4 & e && (i.src = "svg/" + t[2]), n.$set(i), (!o || 2 & e) && A(s, t[1])
			},
			i(t) {
				o || (ht(n.$$.fragment, t), o = !0)
			},
			o(t) {
				ut(n.$$.fragment, t), o = !1
			},
			d(t) {
				t && x(e), wt(n), a = !1, c()
			}
		}
	}

	function If(t, e, n) {
		let {
			buttonText: i
		} = e, {
			buttonActive: r
		} = e, {
			icon: s
		} = e;
		return t.$$set = t => {
			"buttonText" in t && n(1, i = t.buttonText), "buttonActive" in t && n(0, r = t.buttonActive), "icon" in t && n(2, s = t.icon)
		}, [r, i, s, () => n(0, r = !r)]
	}
	class Nf extends Tt {
		constructor(t) {
			super(), St(this, t, If, Of, o, {
				buttonText: 1,
				buttonActive: 0,
				icon: 2
			})
		}
	}

	function zf(t, e, n) {
		const i = t.slice();
		return i[27] = e[n], i[29] = n, i
	}

	function Bf(t, e, n) {
		const i = t.slice();
		return i[30] = e[n], i
	}

	function Uf(t, e, n) {
		const i = t.slice();
		return i[30] = e[n], i
	}

	function Ff(t) {
		let e, n, i, r = t[30] + "";
		return {
			c() {
				e = _("option"), n = w(r), e.__value = i = t[30], e.value = e.__value
			},
			m(t, i) {
				y(t, e, i), v(e, n)
			},
			p(t, s) {
				2 & s[0] && r !== (r = t[30] + "") && A(n, r), 2 & s[0] && i !== (i = t[30]) && (e.__value = i, e.value = e.__value)
			},
			d(t) {
				t && x(e)
			}
		}
	}

	function Hf(t) {
		let e, n, i, r, s, o, a, c, l = t[30].name + "",
			h = Math.floor(t[5] * t[30].value) + "",
			u = Math.floor(t[6] * t[30].value) + "";
		return {
			c() {
				e = _("option"), n = w(l), i = w(" ("), r = w(h), s = w(" x "), o = w(u), a = w(")"), e.__value = c = t[30].value, e.value = e.__value
			},
			m(t, c) {
				y(t, e, c), v(e, n), v(e, i), v(e, r), v(e, s), v(e, o), v(e, a)
			},
			p(t, i) {
				2 & i[0] && l !== (l = t[30].name + "") && A(n, l), 2 & i[0] && h !== (h = Math.floor(t[5] * t[30].value) + "") && A(r, h), 2 & i[0] && u !== (u = Math.floor(t[6] * t[30].value) + "") && A(o, u), 2 & i[0] && c !== (c = t[30].value) && (e.__value = c, e.value = e.__value)
			},
			d(t) {
				t && x(e)
			}
		}
	}

	function kf(e) {
		let n, i, r, s = e[27].name + "";
		return {
			c() {
				n = _("option"), i = w(s), n.__value = r = e[29], n.value = n.__value
			},
			m(t, e) {
				y(t, n, e), v(n, i)
			},
			p: t,
			d(t) {
				t && x(n)
			}
		}
	}

	function Gf(e) {
		let n, i, s, o, a, c, l, h, u, d, p, f, m, g, S, C, P, D, O, I, N, z, B, U, F, H, k, G, j, V, W, $, q, X, Y, Z, Q, K, tt, et, nt, it, rt, st, ot, at, ct, lt, ht, ut, dt, pt, ft = e[1].settings.rendererSettings.bloomOn ? "On" : "Off",
			mt = e[1].settings.voicesOn ? "On" : "Off",
			gt = e[1].options.fontSizeOptions,
			vt = [];
		for (let t = 0; t < gt.length; t += 1) vt[t] = Ff(Uf(e, gt, t));
		let yt = e[1].options.rendererOptions.resolutionOptions,
			xt = [];
		for (let t = 0; t < yt.length; t += 1) xt[t] = Hf(Bf(e, yt, t));
		let bt = e[4],
			_t = [];
		for (let t = 0; t < bt.length; t += 1) _t[t] = kf(zf(e, bt, t));
		return {
			c() {
				n = _("div"), i = _("label"), i.textContent = "Show resource list", s = M(), o = _("button"), o.textContent = "Show", a = M(), c = _("label"), c.textContent = "Warp to new System", l = M(), h = _("button"), h.textContent = "Warp", u = M(), d = _("label"), d.textContent = "Test offline progess", p = M(), f = _("button"), f.textContent = "Create 1 year old save", m = M(), g = _("label"), g.textContent = `Add ${jf} secs`, S = M(), C = _("button"), C.textContent = `Add ${jf} secs`, P = M(), D = _("label"), D.textContent = "Reset save game", O = M(), I = _("button"), I.textContent = "Reset", N = M(), z = _("label"), z.textContent = "Font size", B = M(), U = _("select");
				for (let t = 0; t < vt.length; t += 1) vt[t].c();
				F = M(), H = _("label"), H.textContent = "Render resolution", k = M(), G = _("select");
				for (let t = 0; t < xt.length; t += 1) xt[t].c();
				j = M(), V = _("label"), V.textContent = "Bloom", W = M(), $ = _("button"), q = w(ft), X = M(), Y = _("label"), Y.textContent = "Voice messages", Z = M(), Q = _("button"), K = w(mt), tt = M(), et = _("label"), et.textContent = "Select voice", nt = M(), it = _("select");
				for (let t = 0; t < _t.length; t += 1) _t[t].c();
				rt = M(), st = _("label"), st.textContent = "Ship color", ot = M(), at = _("input"), ct = M(), lt = _("label"), lt.textContent = "Display render stats", ht = M(), ut = _("button"), ut.textContent = "Show stats", E(i, "for", "warp"), E(i, "class", "svelte-1lhgdi9"), E(o, "name", "warp"), E(o, "class", "svelte-1lhgdi9"), E(c, "for", "warp"), E(c, "class", "svelte-1lhgdi9"), E(h, "name", "warp"), E(h, "class", "svelte-1lhgdi9"), E(d, "for", "reset"), E(d, "class", "svelte-1lhgdi9"), E(f, "class", "svelte-1lhgdi9"), E(g, "for", "reset"), E(g, "class", "svelte-1lhgdi9"), E(C, "class", "svelte-1lhgdi9"), E(D, "for", "reset"), E(D, "class", "svelte-1lhgdi9"), E(I, "name", "reset"), E(I, "class", "svelte-1lhgdi9"), E(z, "for", "font"), E(z, "class", "svelte-1lhgdi9"), E(U, "name", "font"), E(U, "class", "svelte-1lhgdi9"), void 0 === e[0] && J((() => e[16].call(U))), E(H, "for", "resolution"), E(H, "class", "svelte-1lhgdi9"), E(G, "name", "resolution"), E(G, "class", "svelte-1lhgdi9"), void 0 === e[1].settings.rendererSettings.resolution && J((() => e[18].call(G))), E(V, "for", "bloom"), E(V, "class", "svelte-1lhgdi9"), E($, "name", "bloom"), E($, "class", "svelte-1lhgdi9"), E(Y, "for", "messages"), E(Y, "class", "svelte-1lhgdi9"), E(Q, "name", "messages"), E(Q, "class", "svelte-1lhgdi9"), E(et, "for", "voice"), E(et, "class", "svelte-1lhgdi9"), E(it, "name", "voice"), E(it, "class", "svelte-1lhgdi9"), void 0 === e[1].settings.selectedVoice && J((() => e[21].call(it))), E(st, "for", "color"), E(st, "class", "svelte-1lhgdi9"), E(at, "type", "color"), E(lt, "for", "stats"), E(lt, "class", "svelte-1lhgdi9"), E(ut, "name", "stats"), E(ut, "class", "svelte-1lhgdi9"), E(n, "class", "svelte-1lhgdi9")
			},
			m(t, r) {
				y(t, n, r), v(n, i), v(n, s), v(n, o), v(n, a), v(n, c), v(n, l), v(n, h), v(n, u), v(n, d), v(n, p), v(n, f), v(n, m), v(n, g), v(n, S), v(n, C), v(n, P), v(n, D), v(n, O), v(n, I), v(n, N), v(n, z), v(n, B), v(n, U);
				for (let t = 0; t < vt.length; t += 1) vt[t].m(U, null);
				R(U, e[0]), v(n, F), v(n, H), v(n, k), v(n, G);
				for (let t = 0; t < xt.length; t += 1) xt[t].m(G, null);
				R(G, e[1].settings.rendererSettings.resolution), v(n, j), v(n, V), v(n, W), v(n, $), v($, q), v(n, X), v(n, Y), v(n, Z), v(n, Q), v(Q, K), v(n, tt), v(n, et), v(n, nt), v(n, it);
				for (let t = 0; t < _t.length; t += 1) _t[t].m(it, null);
				R(it, e[1].settings.selectedVoice), v(n, rt), v(n, st), v(n, ot), v(n, at), L(at, e[1].settings.shipColor), v(n, ct), v(n, lt), v(n, ht), v(n, ut), dt || (pt = [T(o, "click", e[11]), T(h, "click", e[12]), T(f, "click", e[13]), T(C, "click", e[14]), T(I, "click", e[15]), T(U, "change", e[16]), T(G, "change", e[17]), T(G, "change", e[18]), T($, "click", e[19]), T(Q, "click", e[20]), T(it, "change", e[21]), T(it, "change", e[22]), T(at, "input", e[23]), T(at, "change", e[24]), T(ut, "click", e[25])], dt = !0)
			},
			p(t, e) {
				if (2 & e[0]) {
					let n;
					for (gt = t[1].options.fontSizeOptions, n = 0; n < gt.length; n += 1) {
						const i = Uf(t, gt, n);
						vt[n] ? vt[n].p(i, e) : (vt[n] = Ff(i), vt[n].c(), vt[n].m(U, null))
					}
					for (; n < vt.length; n += 1) vt[n].d(1);
					vt.length = gt.length
				}
				if (3 & e[0] && R(U, t[0]), 98 & e[0]) {
					let n;
					for (yt = t[1].options.rendererOptions.resolutionOptions, n = 0; n < yt.length; n += 1) {
						const i = Bf(t, yt, n);
						xt[n] ? xt[n].p(i, e) : (xt[n] = Hf(i), xt[n].c(), xt[n].m(G, null))
					}
					for (; n < xt.length; n += 1) xt[n].d(1);
					xt.length = yt.length
				}
				if (2 & e[0] && R(G, t[1].settings.rendererSettings.resolution), 2 & e[0] && ft !== (ft = t[1].settings.rendererSettings.bloomOn ? "On" : "Off") && A(q, ft), 2 & e[0] && mt !== (mt = t[1].settings.voicesOn ? "On" : "Off") && A(K, mt), 16 & e[0]) {
					let n;
					for (bt = t[4], n = 0; n < bt.length; n += 1) {
						const i = zf(t, bt, n);
						_t[n] ? _t[n].p(i, e) : (_t[n] = kf(i), _t[n].c(), _t[n].m(it, null))
					}
					for (; n < _t.length; n += 1) _t[n].d(1);
					_t.length = bt.length
				}
				2 & e[0] && R(it, t[1].settings.selectedVoice), 2 & e[0] && L(at, t[1].settings.shipColor)
			},
			i: t,
			o: t,
			d(t) {
				t && x(n), b(vt, t), b(xt, t), b(_t, t), dt = !1, r(pt)
			}
		}
	}
	const jf = 100;

	function Vf(t, e, n) {
		let i, r, s, o;
		a(t, Qh, (t => n(1, i = t))), a(t, gu, (t => n(26, r = t))), a(t, pu, (t => n(2, s = t))), a(t, ru, (t => n(3, o = t)));
		let c = ah().voices(),
			l = window.innerWidth,
			u = window.innerHeight,
			d = i.settings.fontSize;

		function p() {
			confirm("Warning! This will reset all progress") && (localStorage.removeItem(Nh), window.location.reload())
		}

		function f() {
			h(gu, r = jf, r)
		}

		function m() {
			Bh(i.persistent, 3154e7), window.location.reload()
		}

		function g() {
			h(Qh, i.warp = !0, i), i.getCurrentShip().starSystem[0]++, Kh()
		}
		return t.$$.update = () => {
			1 & t.$$.dirty[0] && (h(Qh, i.settings.fontSize = d, i), document.documentElement.style.setProperty("font-size", d))
		}, [d, i, s, o, c, l, u, p, f, m, g, t => h(pu, s = !0, s), t => g(), t => m(), t => f(), t => p(), function() {
			d = P(this), n(0, d)
		}, t => i.settings.rendererSettings.change(), function() {
			i.settings.rendererSettings.resolution = P(this), Qh.set(i)
		}, t => h(Qh, i.settings.rendererSettings.bloomOn = !i.settings.rendererSettings.bloomOn, i), t => h(Qh, i.settings.voicesOn = !i.settings.voicesOn, i), function() {
			i.settings.selectedVoice = P(this), Qh.set(i)
		}, t => i.voiceChanged(), function() {
			i.settings.shipColor = this.value, Qh.set(i)
		}, t => i.settings.rendererSettings.change(), t => h(ru, o = !o, o)]
	}
	class Wf extends Tt {
		constructor(t) {
			super(), St(this, t, Vf, Gf, o, {}, [-1, -1])
		}
	}

	function $f(e) {
		let n, i, r, s, o, a, c, l, h, u, d, p, f, m, g, b, S, T, L, C, R, P, D, O, I = Bu(e[0].fps) + "",
			N = zu(e[0].speed, 2) + "",
			z = e[0].drawCalls + "",
			B = zu(e[0].position.x, 2) + "",
			U = zu(e[0].position.y, 2) + "",
			F = zu(e[0].position.x, 2) + "";
		return {
			c() {
				n = _("p"), i = w(I), r = w(" fps"), s = M(), o = _("p"), a = w("Speed "), c = w(N), l = w(" km/s"), h = M(), u = _("p"), d = w(z), p = w(" draw calls"), f = M(), m = _("p"), g = w("x: "), b = w(B), S = M(), T = _("p"), L = w("y: "), C = w(U), R = M(), P = _("p"), D = w("z: "), O = w(F), E(n, "class", "svelte-1mx2ho3"), E(o, "class", "svelte-1mx2ho3"), E(u, "class", "svelte-1mx2ho3"), E(m, "class", "svelte-1mx2ho3"), E(T, "class", "svelte-1mx2ho3"), E(P, "class", "svelte-1mx2ho3")
			},
			m(t, e) {
				y(t, n, e), v(n, i), v(n, r), y(t, s, e), y(t, o, e), v(o, a), v(o, c), v(o, l), y(t, h, e), y(t, u, e), v(u, d), v(u, p), y(t, f, e), y(t, m, e), v(m, g), v(m, b), y(t, S, e), y(t, T, e), v(T, L), v(T, C), y(t, R, e), y(t, P, e), v(P, D), v(P, O)
			},
			p(t, [e]) {
				1 & e && I !== (I = Bu(t[0].fps) + "") && A(i, I), 1 & e && N !== (N = zu(t[0].speed, 2) + "") && A(c, N), 1 & e && z !== (z = t[0].drawCalls + "") && A(d, z), 1 & e && B !== (B = zu(t[0].position.x, 2) + "") && A(b, B), 1 & e && U !== (U = zu(t[0].position.y, 2) + "") && A(C, U), 1 & e && F !== (F = zu(t[0].position.x, 2) + "") && A(O, F)
			},
			i: t,
			o: t,
			d(t) {
				t && x(n), t && x(s), t && x(o), t && x(h), t && x(u), t && x(f), t && x(m), t && x(S), t && x(T), t && x(R), t && x(P)
			}
		}
	}

	function qf(t, e, n) {
		let i, r;
		return a(t, Qh, (t => n(1, i = t))), t.$$.update = () => {
			2 & t.$$.dirty && n(0, r = i.stats)
		}, [r, i]
	}
	class Xf extends Tt {
		constructor(t) {
			super(), St(this, t, qf, $f, o, {})
		}
	}
	class Yf {
		constructor(t, e) {
			this.name = t, this.path = e
		}
	}
	const Zf = [new Yf("1. First Night in Space", "music/02 -Ambient - Calm- First Night In Space.mp3"), new Yf("2. Calm Wake Up", "music/01 -Ambient - Calm- Wake Up.mp3"), new Yf("3. Pause Menu Theme", "music/12 -Ambient - Dramatic- Pause Menu Theme.mp3"), new Yf("4. Sleeping Giant", "music/05 -Ambient - Calm- Sleeping Giant.mp3"), new Yf("5. Menu Theme", "music/13 -Ambient - Dramatic- Menu Theme.mp3")],
		Jf = Jh((Qf = Zf, Kf = Math.random(), Qf[Math.floor(Kf * Qf.length)]));
	var Qf, Kf;
	let tm;

	function em() {
		let t = Zf.indexOf(tm) + 1;
		t > Zf.length - 1 && (t = 0), Jf.update((e => Zf[t]))
	}

	function nm(e) {
		let n, i, r;
		return {
			c() {
				n = _("button"), n.textContent = "Pause", E(n, "class", "svelte-1aufduz")
			},
			m(t, s) {
				y(t, n, s), i || (r = T(n, "click", e[2]), i = !0)
			},
			p: t,
			d(t) {
				t && x(n), i = !1, r()
			}
		}
	}

	function im(e) {
		let n, i, r;
		return {
			c() {
				n = _("button"), n.textContent = "Play", E(n, "class", "svelte-1aufduz")
			},
			m(t, s) {
				y(t, n, s), i || (r = T(n, "click", e[3]), i = !0)
			},
			p: t,
			d(t) {
				t && x(n), i = !1, r()
			}
		}
	}

	function rm(e) {
		let n, i, r, s, o, a, c, l, h, u, d, p, f, m, g, b = e[0].paused ? "Paused" : "Playing",
			S = e[1].name + "",
			L = Uu(1e3 * e[0].currentTime) + "",
			C = Uu(1e3 * e[0].duration) + "";

		function R(t, e) {
			return t[0].paused ? im : nm
		}
		let P = R(e),
			D = P(e);
		return {
			c() {
				n = _("p"), i = w(b), r = w(" - "), s = _("strong"), o = w(S), a = M(), c = _("p"), l = w(L), h = w(" / "), u = w(C), d = M(), D.c(), p = M(), f = _("button"), f.textContent = "Skip", E(n, "class", "svelte-1aufduz"), E(c, "class", "svelte-1aufduz"), E(f, "class", "svelte-1aufduz")
			},
			m(t, x) {
				y(t, n, x), v(n, i), v(n, r), v(n, s), v(s, o), y(t, a, x), y(t, c, x), v(c, l), v(c, h), v(c, u), y(t, d, x), D.m(t, x), y(t, p, x), y(t, f, x), m || (g = T(f, "click", e[4]), m = !0)
			},
			p(t, [e]) {
				1 & e && b !== (b = t[0].paused ? "Paused" : "Playing") && A(i, b), 2 & e && S !== (S = t[1].name + "") && A(o, S), 1 & e && L !== (L = Uu(1e3 * t[0].currentTime) + "") && A(l, L), 1 & e && C !== (C = Uu(1e3 * t[0].duration) + "") && A(u, C), P === (P = R(t)) && D ? D.p(t, e) : (D.d(1), D = P(t), D && (D.c(), D.m(p.parentNode, p)))
			},
			i: t,
			o: t,
			d(t) {
				t && x(n), t && x(a), t && x(c), t && x(d), D.d(t), t && x(p), t && x(f), m = !1, g()
			}
		}
	}

	function sm(t, e, n) {
		let i, r;
		a(t, Qh, (t => n(6, i = t))), a(t, Jf, (t => n(1, r = t)));
		let s, {
			audio: o
		} = e;
		return j((() => {
			s = setInterval((() => {
				n(0, o)
			}), 500)
		})), V((() => {
			clearInterval(s)
		})), t.$$set = t => {
			"audio" in t && n(0, o = t.audio)
		}, [o, r, function() {
			h(Qh, i.settings.musicOn = !1, i), o.pause(), n(0, o)
		}, function() {
			h(Qh, i.settings.musicOn = !0, i), o.play(), n(0, o)
		}, function() {
			em()
		}]
	}
	Jf.subscribe((t => tm = t));
	class om extends Tt {
		constructor(t) {
			super(), St(this, t, sm, rm, o, {
				audio: 0
			})
		}
	}

	function am(t, e, n) {
		const i = getComputedStyle(t),
			r = "none" === i.transform ? "" : i.transform,
			o = e.from.width / t.clientWidth,
			a = e.from.height / t.clientHeight,
			c = (e.from.left - e.to.left) / o,
			l = (e.from.top - e.to.top) / a,
			h = Math.sqrt(c * c + l * l),
			{
				delay: u = 0,
				duration: d = (t => 120 * Math.sqrt(t)),
				easing: p = qp
			} = n;
		return {
			delay: u,
			duration: s(d) ? d(h) : d,
			easing: p,
			css: (t, e) => `transform: ${r} translate(${e*c}px, ${e*l}px);`
		}
	}

	function cm(t, e, n) {
		const i = t.slice();
		return i[15] = e[n], i[17] = n, i
	}

	function lm(n, i) {
		let o, a, c, l, h, u, p, f, m, b, S, L, C, R, P, O, I, N, k, G, j, V = i[17] + 1 + "",
			W = i[3].get(i[15].id).name + "",
			$ = t;

		function q(...t) {
			return i[9](i[15], ...t)
		}

		function X(...t) {
			return i[10](i[17], ...t)
		}

		function Y(...t) {
			return i[11](i[17], ...t)
		}

		function Z(...t) {
			return i[12](i[17], ...t)
		}
		return {
			key: n,
			first: null,
			c() {
				o = _("div"), a = _("span"), c = w(V), l = M(), h = _("a"), u = w(W), f = M(), m = _("a"), m.textContent = "???", S = M(), L = _("a"), L.textContent = "???", R = M(), P = _("a"), P.textContent = "???", E(a, "class", "svelte-hbqsvu"), E(h, "href", p = "javascript:void(0);"), E(h, "class", "name svelte-hbqsvu"), E(m, "href", b = "javascript:void(0);"), E(m, "class", "move svelte-hbqsvu"), D(m, "disabled", 0 == i[17]), E(L, "href", C = "javascript:void(0);"), E(L, "class", "move svelte-hbqsvu"), D(L, "disabled", i[17] == i[1].navRoute.length - 1), E(P, "href", O = "javascript:void(0);"), E(P, "class", "close svelte-hbqsvu"), E(o, "class", "svelte-hbqsvu"), D(o, "target", i[1].navStage == i[17]), this.first = o
			},
			m(t, e) {
				y(t, o, e), v(o, a), v(a, c), v(o, l), v(o, h), v(h, u), v(o, f), v(o, m), v(o, S), v(o, L), v(o, R), v(o, P), k = !0, G || (j = [T(h, "click", q), T(m, "click", X), T(L, "click", Y), T(P, "click", Z)], G = !0)
			},
			p(t, e) {
				i = t, (!k || 2 & e) && V !== (V = i[17] + 1 + "") && A(c, V), (!k || 2 & e) && W !== (W = i[3].get(i[15].id).name + "") && A(u, W), 2 & e && D(m, "disabled", 0 == i[17]), 2 & e && D(L, "disabled", i[17] == i[1].navRoute.length - 1), 2 & e && D(o, "target", i[1].navStage == i[17])
			},
			r() {
				N = o.getBoundingClientRect()
			},
			f() {
				F(o), $(), H(o, N)
			},
			a() {
				$(), $ = U(o, N, am, {})
			},
			i(t) {
				k || (I && I.end(1), k = !0)
			},
			o(n) {
				I = function(n, i, o) {
					let a, c = i(n, o),
						l = !0;
					const h = at;

					function u() {
						const {
							delay: i = 0,
							duration: s = 300,
							easing: o = e,
							tick: u = t,
							css: p
						} = c || dt;
						p && (a = z(n, 1, 0, s, i, o, p));
						const f = d() + i,
							m = f + s;
						J((() => st(n, !1, "start"))), g((t => {
							if (l) {
								if (t >= m) return u(0, 1), st(n, !1, "end"), --h.r || r(h.c), !1;
								if (t >= f) {
									const e = o((t - f) / s);
									u(1 - e, e)
								}
							}
							return l
						}))
					}
					return h.r += 1, s(c) ? rt().then((() => {
						c = c(), u()
					})) : u(), {
						end(t) {
							t && c.tick && c.tick(1, 0), l && (a && B(n, a), l = !1)
						}
					}
				}(o, Xp, {}), k = !1
			},
			d(t) {
				t && x(o), t && I && I.end(), G = !1, r(j)
			}
		}
	}

	function hm(t) {
		let e, n, i, s, o, a, c, l, h, u, d, p, f, m, g = [],
			b = new Map,
			S = t[2] ? "&#8722;" : "&#43;",
			L = t[0].useNavCamera ? "Ship" : "System",
			C = t[1].navRoute;
		const R = t => t[15].id;
		for (let e = 0; e < C.length; e += 1) {
			let n = cm(t, C, e),
				i = R(n);
			b.set(i, g[e] = lm(i, n))
		}
		return {
			c() {
				for (let t = 0; t < g.length; t += 1) g[t].c();
				e = M(), n = _("div"), i = _("a"), o = M(), a = _("span"), a.textContent = "Add Waypoint", c = M(), l = _("a"), h = w(L), u = w(" camera"), E(i, "href", s = "javascript:void(0);"), E(i, "class", "move add svelte-hbqsvu"), E(a, "class", "svelte-hbqsvu"), E(l, "href", d = "javascript:void(0);"), E(l, "class", "name svelte-hbqsvu"), E(n, "class", "svelte-hbqsvu")
			},
			m(r, s) {
				for (let t = 0; t < g.length; t += 1) g[t].m(r, s);
				y(r, e, s), y(r, n, s), v(n, i), i.innerHTML = S, v(n, o), v(n, a), v(n, c), v(n, l), v(l, h), v(l, u), p = !0, f || (m = [T(i, "click", t[6]), T(l, "click", t[8])], f = !0)
			},
			p(t, [n]) {
				if (186 & n) {
					const i = t[1].navRoute;
					ct();
					for (let t = 0; t < g.length; t += 1) g[t].r();
					g = yt(g, n, R, 1, t, i, b, e.parentNode, vt, lm, e, cm);
					for (let t = 0; t < g.length; t += 1) g[t].a();
					lt()
				}(!p || 4 & n) && S !== (S = t[2] ? "&#8722;" : "&#43;") && (i.innerHTML = S), (!p || 1 & n) && L !== (L = t[0].useNavCamera ? "Ship" : "System") && A(h, L)
			},
			i(t) {
				if (!p) {
					for (let t = 0; t < C.length; t += 1) ht(g[t]);
					p = !0
				}
			},
			o(t) {
				for (let t = 0; t < g.length; t += 1) ut(g[t]);
				p = !1
			},
			d(t) {
				for (let e = 0; e < g.length; e += 1) g[e].d(t);
				t && x(e), t && x(n), f = !1, r(m)
			}
		}
	}

	function um(t, e, n) {
		let i, r, s, o;
		a(t, Qh, (t => n(0, i = t))), a(t, nu, (t => n(2, r = t))), a(t, iu, (t => n(13, s = t))), a(t, ou, (t => n(14, o = t)));
		let c = i.starSystem.poiMap;

		function l(t, e) {
			let r = e ? t + 1 : t - 1;
			if (r >= 0 && r < p.navRoute.length) {
				let e = p.navRoute[p.navStage];
				p.navRoute.splice(r, 0, p.navRoute.splice(t, 1)[0]), p.navRoute.forEach(((t, i) => {
					t == e && n(1, p.navStage = i, p)
				})), n(1, p), n(0, i), Kh(), Cp()
			}
		}

		function u(t) {
			if (t >= 0 && t < p.navRoute.length) {
				let e = p.navRoute[p.navStage];
				p.navRoute.splice(t, 1), p.navRoute.forEach(((t, i) => {
					t == e && n(1, p.navStage = i, p)
				})), n(1, p), n(0, i), Kh(), Cp()
			}
		}

		function d(t) {
			h(iu, s = !0, s), h(ou, o = t, o)
		}
		j((() => {
			document.querySelector("div.menu.navigation").style.height = "auto", h(Qh, i.showNavPath = !0, i), Cp(), i.starSystem.updatePoiLabels()
		})), V((() => {
			h(Qh, i.showNavPath = !1, i), i.useNavCamera && i.toggleCamera(), Cp(), i.starSystem.updatePoiLabels(), h(nu, r = !1, r), h(iu, s = !1, s)
		}));
		let p;
		return t.$$.update = () => {
			1 & t.$$.dirty && n(1, p = i.getCurrentShip())
		}, [i, p, r, c, l, u, function() {
			h(nu, r = !r, r)
		}, d, function() {
			i.toggleCamera(), Kh()
		}, (t, e) => d(t.id), (t, e) => l(t, !1), (t, e) => l(t, !0), (t, e) => u(t)]
	}
	class dm extends Tt {
		constructor(t) {
			super(), St(this, t, um, hm, o, {})
		}
	}

	function pm(t, e, n) {
		const i = t.slice();
		return i[6] = e[n], i
	}

	function fm(e, n) {
		let i, r, s, o, a, c, l = n[6].name + "",
			h = t;

		function u(...t) {
			return n[3](n[6], ...t)
		}
		return {
			key: e,
			first: null,
			c() {
				i = _("a"), r = w(l), E(i, "href", s = "javascript:void(0);"), E(i, "class", "move add svelte-1h1pbl"), this.first = i
			},
			m(t, e) {
				y(t, i, e), v(i, r), a || (c = T(i, "click", u), a = !0)
			},
			p(t, e) {
				n = t, 1 & e && l !== (l = n[6].name + "") && A(r, l)
			},
			r() {
				o = i.getBoundingClientRect()
			},
			f() {
				F(i), h()
			},
			a() {
				h(), h = U(i, o, am, {})
			},
			d(t) {
				t && x(i), a = !1, c()
			}
		}
	}

	function mm(e) {
		let n, i = [],
			r = new Map,
			s = e[0];
		const o = t => t[6].index;
		for (let t = 0; t < s.length; t += 1) {
			let n = pm(e, s, t),
				a = o(n);
			r.set(a, i[t] = fm(a, n))
		}
		return {
			c() {
				n = _("div");
				for (let t = 0; t < i.length; t += 1) i[t].c();
				E(n, "class", "svelte-1h1pbl")
			},
			m(t, e) {
				y(t, n, e);
				for (let t = 0; t < i.length; t += 1) i[t].m(n, null)
			},
			p(t, [e]) {
				if (3 & e) {
					const s = t[0];
					for (let t = 0; t < i.length; t += 1) i[t].r();
					i = yt(i, e, o, 1, t, s, r, n, gt, fm, null, pm);
					for (let t = 0; t < i.length; t += 1) i[t].a()
				}
			},
			i: t,
			o: t,
			d(t) {
				t && x(n);
				for (let t = 0; t < i.length; t += 1) i[t].d()
			}
		}
	}

	function gm(t, e, n) {
		let i, r, s;

		function o(t) {
			h(iu, r = !0, r), h(ou, s = t, s)
		}
		a(t, Qh, (t => n(2, i = t))), a(t, iu, (t => n(4, r = t))), a(t, ou, (t => n(5, s = t)));
		let c;
		return t.$$.update = () => {
			4 & t.$$.dirty && n(0, c = i.starSystem.pois.filter((t => 0 == i.getCurrentShip().navRoute.filter((e => e.id == t.index)).length)))
		}, [c, o, i, (t, e) => o(t.index)]
	}
	class vm extends Tt {
		constructor(t) {
			super(), St(this, t, gm, mm, o, {})
		}
	}

	function ym(t, e, n) {
		const i = t.slice();
		return i[6] = e[n], i[7] = e, i[8] = n, i
	}

	function xm(t) {
		let e, n, i, s, o, a, c, l, h, u, d, p, f, m, g = Ih.get(t[6].id).name + "",
			b = t[6].qty + "",
			S = zu(t[6].qty * Ih.get(t[6].id).value, 2) + "";

		function L(...e) {
			return t[4](t[6], ...e)
		}

		function C(t, e) {
			return t[6].sell ? _m : bm
		}
		let R = C(t),
			P = R(t);

		function O(...e) {
			return t[5](t[6], t[7], t[8], ...e)
		}
		return {
			c() {
				e = _("span"), n = w(g), i = M(), s = _("span"), o = w(b), a = M(), c = _("span"), l = w(S), h = w(" C"), u = M(), d = _("a"), P.c(), E(e, "class", "clickable svelte-10mo384"), E(s, "class", "text-right svelte-10mo384"), E(c, "class", "text-right svelte-10mo384"), E(d, "href", p = "javascript:void(0);"), E(d, "class", "svelte-10mo384"), D(d, "checked", t[6].sell)
			},
			m(t, r) {
				y(t, e, r), v(e, n), y(t, i, r), y(t, s, r), v(s, o), y(t, a, r), y(t, c, r), v(c, l), v(c, h), y(t, u, r), y(t, d, r), P.m(d, null), f || (m = [T(e, "click", L), T(d, "click", O)], f = !0)
			},
			p(e, i) {
				t = e, 1 & i && g !== (g = Ih.get(t[6].id).name + "") && A(n, g), 1 & i && b !== (b = t[6].qty + "") && A(o, b), 1 & i && S !== (S = zu(t[6].qty * Ih.get(t[6].id).value, 2) + "") && A(l, S), R !== (R = C(t)) && (P.d(1), P = R(t), P && (P.c(), P.m(d, null))), 1 & i && D(d, "checked", t[6].sell)
			},
			d(t) {
				t && x(e), t && x(i), t && x(s), t && x(a), t && x(c), t && x(u), t && x(d), P.d(), f = !1, r(m)
			}
		}
	}

	function bm(t) {
		let e;
		return {
			c() {
				e = w("???")
			},
			m(t, n) {
				y(t, e, n)
			},
			d(t) {
				t && x(e)
			}
		}
	}

	function _m(t) {
		let e;
		return {
			c() {
				e = w("???")
			},
			m(t, n) {
				y(t, e, n)
			},
			d(t) {
				t && x(e)
			}
		}
	}

	function wm(t) {
		let e, n = t[3](t[6]),
			i = n && xm(t);
		return {
			c() {
				i && i.c(), e = S()
			},
			m(t, n) {
				i && i.m(t, n), y(t, e, n)
			},
			p(t, r) {
				1 & r && (n = t[3](t[6])), n ? i ? i.p(t, r) : (i = xm(t), i.c(), i.m(e.parentNode, e)) : i && (i.d(1), i = null)
			},
			d(t) {
				i && i.d(t), t && x(e)
			}
		}
	}

	function Mm(e) {
		let n, i, r, s, o, a, c, l, h, u, d, p, f, m, g, S, T, L, C, R, P = e[1].getCargoQty(e[1].getCurrentShip()) + "",
			D = e[1].getCurrentShip().cargoCapacity + "",
			O = zu(e[2], 2) + "",
			I = e[0],
			N = [];
		for (let t = 0; t < I.length; t += 1) N[t] = wm(ym(e, I, t));
		return {
			c() {
				n = _("div"), i = _("span"), i.textContent = "Resource", r = M(), s = _("span"), s.textContent = "Qty", o = M(), a = _("span"), a.textContent = "Value", c = M(), l = _("span"), l.textContent = "Sell", h = M();
				for (let t = 0; t < N.length; t += 1) N[t].c();
				u = M(), d = _("span"), d.textContent = "Total", p = M(), f = _("span"), m = w(P), g = w(" / "), S = w(D), T = M(), L = _("span"), C = w(O), R = w(" C"), E(i, "class", "head svelte-10mo384"), E(s, "class", "head text-right svelte-10mo384"), E(a, "class", "head text-right svelte-10mo384"), E(l, "class", "head text-center svelte-10mo384"), E(d, "class", "svelte-10mo384"), E(f, "class", "text-right svelte-10mo384"), E(L, "class", "text-right svelte-10mo384"), E(n, "class", "svelte-10mo384")
			},
			m(t, e) {
				y(t, n, e), v(n, i), v(n, r), v(n, s), v(n, o), v(n, a), v(n, c), v(n, l), v(n, h);
				for (let t = 0; t < N.length; t += 1) N[t].m(n, null);
				v(n, u), v(n, d), v(n, p), v(n, f), v(f, m), v(f, g), v(f, S), v(n, T), v(n, L), v(L, C), v(L, R)
			},
			p(t, [e]) {
				if (9 & e) {
					let i;
					for (I = t[0], i = 0; i < I.length; i += 1) {
						const r = ym(t, I, i);
						N[i] ? N[i].p(r, e) : (N[i] = wm(r), N[i].c(), N[i].m(n, u))
					}
					for (; i < N.length; i += 1) N[i].d(1);
					N.length = I.length
				}
				2 & e && P !== (P = t[1].getCargoQty(t[1].getCurrentShip()) + "") && A(m, P), 2 & e && D !== (D = t[1].getCurrentShip().cargoCapacity + "") && A(S, D), 4 & e && O !== (O = zu(t[2], 2) + "") && A(C, O)
			},
			i: t,
			o: t,
			d(t) {
				t && x(n), b(N, t)
			}
		}
	}

	function Sm(t, e, n) {
		let i;
		a(t, Qh, (t => n(1, i = t)));
		let r = 0;
		let s;
		return t.$$.update = () => {
			2 & t.$$.dirty && n(0, s = i.getCurrentShip().cargo), 5 & t.$$.dirty && (n(2, r = 0), s.forEach((t => {
				n(2, r += t.qty * Ih.get(t.id).value)
			})))
		}, [s, i, r, function(t) {
			return t.qty > 0 || (i.getCurrentShip().navRoute.filter((e => e.instructions.filter((e => e.resource == t.id)).length > 0)).length > 0 || i.getCurrentShip().factorySlots.filter((e => e.type == Gh.machine && e.id == t.id)).length > 0)
		}, (t, e) => vu(t.id), (t, e, i, r) => n(0, e[i].sell = !t.sell, s)]
	}
	class Tm extends Tt {
		constructor(t) {
			super(), St(this, t, Sm, Mm, o, {})
		}
	}

	function Em(e) {
		let n, i, o, a, c, l, h;
		return {
			c() {
				n = _("div"), i = _("span"), o = M(), a = _("button"), c = w(e[1]), E(i, "class", "svelte-10l8lx1"), D(i, "clicked", e[2]), E(a, "class", "danger svelte-10l8lx1"), E(n, "class", "svelte-10l8lx1")
			},
			m(t, r) {
				y(t, n, r), v(n, i), v(n, o), v(n, a), v(a, c), l || (h = [T(i, "click", e[3]), T(a, "click", (function() {
					s(e[0]) && e[0].apply(this, arguments)
				}))], l = !0)
			},
			p(t, [n]) {
				e = t, 4 & n && D(i, "clicked", e[2]), 2 & n && A(c, e[1])
			},
			i: t,
			o: t,
			d(t) {
				t && x(n), l = !1, r(h)
			}
		}
	}

	function Am(t, e, n) {
		let {
			confirm: i
		} = e, {
			text: r
		} = e, s = !1;
		return t.$$set = t => {
			"confirm" in t && n(0, i = t.confirm), "text" in t && n(1, r = t.text)
		}, [i, r, s, function() {
			n(2, s = !s), setTimeout((() => {
				n(2, s = !1)
			}), 2e3)
		}]
	}
	class Lm extends Tt {
		constructor(t) {
			super(), St(this, t, Am, Em, o, {
				confirm: 0,
				text: 1
			})
		}
	}

	function Cm(t, e, n) {
		const i = t.slice();
		return i[26] = e[n], i
	}

	function Rm(e) {
		let n;
		return {
			c() {
				n = _("p"), n.textContent = "Cargo marked for sale will be sold at this waypoint.", E(n, "class", "sub svelte-zmnbjz")
			},
			m(t, e) {
				y(t, n, e)
			},
			p: t,
			d(t) {
				t && x(n)
			}
		}
	}

	function Pm(t) {
		let e, n, i, r, s, o, a, c, l, h, u, d, p, f, m, g = Uu(t[3]) + "",
			S = t[0].resources,
			T = [];
		for (let e = 0; e < S.length; e += 1) T[e] = Nm(Cm(t, S, e));
		return {
			c() {
				e = _("p"), e.textContent = "Resources available:", n = M(), i = _("div"), r = _("span"), r.textContent = "Resource", s = M(), o = _("span"), o.textContent = "Value", a = M(), c = _("span"), c.textContent = "Percentage", l = M(), h = _("span"), h.textContent = "Gather", u = M();
				for (let t = 0; t < T.length; t += 1) T[t].c();
				d = M(), p = _("p"), f = w("Time to fill cargo: "), m = w(g), E(e, "class", "sub svelte-zmnbjz"), E(r, "class", "head svelte-zmnbjz"), E(o, "class", "head text-right svelte-zmnbjz"), E(c, "class", "head text-right svelte-zmnbjz"), E(h, "class", "head text-center svelte-zmnbjz"), E(i, "class", "resources svelte-zmnbjz"), E(p, "class", "svelte-zmnbjz")
			},
			m(t, g) {
				y(t, e, g), y(t, n, g), y(t, i, g), v(i, r), v(i, s), v(i, o), v(i, a), v(i, c), v(i, l), v(i, h), v(i, u);
				for (let t = 0; t < T.length; t += 1) T[t].m(i, null);
				y(t, d, g), y(t, p, g), v(p, f), v(p, m)
			},
			p(t, e) {
				if (117 & e) {
					let n;
					for (S = t[0].resources, n = 0; n < S.length; n += 1) {
						const r = Cm(t, S, n);
						T[n] ? T[n].p(r, e) : (T[n] = Nm(r), T[n].c(), T[n].m(i, null))
					}
					for (; n < T.length; n += 1) T[n].d(1);
					T.length = S.length
				}
				8 & e && g !== (g = Uu(t[3]) + "") && A(m, g)
			},
			d(t) {
				t && x(e), t && x(n), t && x(i), b(T, t), t && x(d), t && x(p)
			}
		}
	}

	function Dm(t) {
		let e;
		return {
			c() {
				e = w("???")
			},
			m(t, n) {
				y(t, e, n)
			},
			d(t) {
				t && x(e)
			}
		}
	}

	function Om(t) {
		let e;
		return {
			c() {
				e = w("???")
			},
			m(t, n) {
				y(t, e, n)
			},
			d(t) {
				t && x(e)
			}
		}
	}

	function Im(t) {
		let e, n, i, r, s, o, a, c, l, h = (t[2].instructions.filter(p)[0].amount == t[4].getCurrentShip().cargoCapacity ? "Max" : t[2].instructions.filter(f)[0].amount) + "";

		function u(...e) {
			return t[18](t[26], ...e)
		}

		function d(...e) {
			return t[19](t[26], ...e)
		}

		function p(...e) {
			return t[20](t[26], ...e)
		}

		function f(...e) {
			return t[21](t[26], ...e)
		}
		return {
			c() {
				e = _("input"), r = M(), s = _("span"), o = w(h), a = w(" units"), E(e, "type", "range"), E(e, "min", "1"), E(e, "max", n = t[4].getCurrentShip().cargoCapacity), e.value = i = t[2].instructions.filter(u)[0].amount, E(e, "class", "svelte-zmnbjz"), E(s, "class", "svelte-zmnbjz")
			},
			m(t, n) {
				y(t, e, n), y(t, r, n), y(t, s, n), v(s, o), v(s, a), c || (l = T(e, "input", d), c = !0)
			},
			p(r, s) {
				t = r, 16 & s && n !== (n = t[4].getCurrentShip().cargoCapacity) && E(e, "max", n), 5 & s && i !== (i = t[2].instructions.filter(u)[0].amount) && (e.value = i), 21 & s && h !== (h = (t[2].instructions.filter(p)[0].amount == t[4].getCurrentShip().cargoCapacity ? "Max" : t[2].instructions.filter(f)[0].amount) + "") && A(o, h)
			},
			d(t) {
				t && x(e), t && x(r), t && x(s), c = !1, l()
			}
		}
	}

	function Nm(t) {
		let e, n, i, s, o, a, c, l, h, u, d, p, f, m, g, b, L, C, R = t[26].resource.name + "",
			P = t[26].resource.value + "",
			O = zu(100 * t[26].percentage, 1) + "",
			I = t[2].instructions.filter(N).length > 0;

		function N(...e) {
			return t[10](t[26], ...e)
		}

		function z(...e) {
			return t[11](t[26], ...e)
		}

		function B(...e) {
			return t[12](t[26], ...e)
		}

		function U(...e) {
			return t[13](t[26], ...e)
		}

		function F(...e) {
			return t[14](t[26], ...e)
		}

		function H(...e) {
			return t[15](t[26], ...e)
		}

		function k(t, e) {
			return (null == f || 5 & e) && (f = !!(t[2].instructions.filter(z).length > 0)), f ? Om : Dm
		}
		let G = k(t, -1),
			j = G(t);

		function V(...e) {
			return t[16](t[26], ...e)
		}

		function W(...e) {
			return t[17](t[26], ...e)
		}
		let $ = I && Im(t);
		return {
			c() {
				e = _("span"), n = w(R), i = M(), s = _("span"), o = w(P), a = w(" C"), c = M(), l = _("span"), h = w(O), u = w("%"), d = M(), p = _("a"), j.c(), g = M(), $ && $.c(), b = S(), E(e, "class", "clickable svelte-zmnbjz"), D(e, "disabled", 0 == t[2].instructions.filter(U).length), E(s, "class", "text-right svelte-zmnbjz"), D(s, "disabled", 0 == t[2].instructions.filter(F).length), E(l, "class", "text-right svelte-zmnbjz"), D(l, "disabled", 0 == t[2].instructions.filter(H).length), E(p, "href", m = "javascript:void(0);"), E(p, "class", "svelte-zmnbjz"), D(p, "checked", t[2].instructions.filter(W).length > 0)
			},
			m(t, r) {
				y(t, e, r), v(e, n), y(t, i, r), y(t, s, r), v(s, o), v(s, a), y(t, c, r), y(t, l, r), v(l, h), v(l, u), y(t, d, r), y(t, p, r), j.m(p, null), y(t, g, r), $ && $.m(t, r), y(t, b, r), L || (C = [T(e, "click", B), T(p, "click", V)], L = !0)
			},
			p(i, r) {
				t = i, 1 & r && R !== (R = t[26].resource.name + "") && A(n, R), 5 & r && D(e, "disabled", 0 == t[2].instructions.filter(U).length), 1 & r && P !== (P = t[26].resource.value + "") && A(o, P), 5 & r && D(s, "disabled", 0 == t[2].instructions.filter(F).length), 1 & r && O !== (O = zu(100 * t[26].percentage, 1) + "") && A(h, O), 5 & r && D(l, "disabled", 0 == t[2].instructions.filter(H).length), G !== (G = k(t, r)) && (j.d(1), j = G(t), j && (j.c(), j.m(p, null))), 5 & r && D(p, "checked", t[2].instructions.filter(W).length > 0), 5 & r && (I = t[2].instructions.filter(N).length > 0), I ? $ ? $.p(t, r) : ($ = Im(t), $.c(), $.m(b.parentNode, b)) : $ && ($.d(1), $ = null)
			},
			d(t) {
				t && x(e), t && x(i), t && x(s), t && x(c), t && x(l), t && x(d), t && x(p), j.d(), t && x(g), $ && $.d(t), t && x(b), L = !1, r(C)
			}
		}
	}

	function zm(e) {
		let n, i, r;
		return {
			c() {
				n = _("button"), n.textContent = "Add to nav plan", E(n, "class", "svelte-zmnbjz")
			},
			m(t, s) {
				y(t, n, s), i || (r = T(n, "click", e[7]), i = !0)
			},
			p: t,
			i: t,
			o: t,
			d(t) {
				t && x(n), i = !1, r()
			}
		}
	}

	function Bm(e) {
		let n, i, r, s, o, a;
		return n = new Lm({
			props: {
				text: "Remove from plan",
				confirm: e[8]
			}
		}), {
			c() {
				bt(n.$$.fragment), i = M(), r = _("button"), r.textContent = "Skip to this waypoint", E(r, "class", "svelte-zmnbjz")
			},
			m(t, c) {
				_t(n, t, c), y(t, i, c), y(t, r, c), s = !0, o || (a = T(r, "click", e[9]), o = !0)
			},
			p: t,
			i(t) {
				s || (ht(n.$$.fragment, t), s = !0)
			},
			o(t) {
				ut(n.$$.fragment, t), s = !1
			},
			d(t) {
				wt(n, t), t && x(i), t && x(r), o = !1, a()
			}
		}
	}

	function Um(t) {
		let e, n, i, r, s, o, a, c, l = t[0].name + "";

		function h(t, e) {
			return t[0].resources.length > 0 ? Pm : Rm
		}
		let u = h(t),
			d = u(t);
		const p = [Bm, zm],
			f = [];

		function m(t, e) {
			return t[1] ? 0 : 1
		}
		return s = m(t), o = f[s] = p[s](t), {
			c() {
				e = _("p"), n = w(l), i = M(), d.c(), r = M(), o.c(), a = S(), E(e, "class", "name svelte-zmnbjz")
			},
			m(t, o) {
				y(t, e, o), v(e, n), y(t, i, o), d.m(t, o), y(t, r, o), f[s].m(t, o), y(t, a, o), c = !0
			},
			p(t, [e]) {
				(!c || 1 & e) && l !== (l = t[0].name + "") && A(n, l), u === (u = h(t)) && d ? d.p(t, e) : (d.d(1), d = u(t), d && (d.c(), d.m(r.parentNode, r)));
				let i = s;
				s = m(t), s === i ? f[s].p(t, e) : (ct(), ut(f[i], 1, 1, (() => {
					f[i] = null
				})), lt(), o = f[s], o ? o.p(t, e) : (o = f[s] = p[s](t), o.c()), ht(o, 1), o.m(a.parentNode, a))
			},
			i(t) {
				c || (ht(o), c = !0)
			},
			o(t) {
				ut(o), c = !1
			},
			d(t) {
				t && x(e), t && x(i), d.d(t), t && x(r), f[s].d(t), t && x(a)
			}
		}
	}

	function Fm(t, e, n) {
		let i, r, s, o;
		a(t, Qh, (t => n(4, i = t))), a(t, iu, (t => n(22, r = t))), a(t, ou, (t => n(23, s = t)));
		let c, l = !1,
			u = 0;

		function d(t) {
			c.instructions.filter((e => e.resource == t)).length > 0 ? n(2, c.instructions = c.instructions.filter((e => e.resource != t)), c) : c.instructions.push({
				sell: !1,
				resource: t,
				amount: i.getCurrentShip().cargoCapacity
			}), f(), n(2, c)
		}

		function p(t, e) {
			isNaN(t.target.value) || (c.instructions.filter((t => t.resource == e))[0].amount = parseInt(t.target.value), f(), n(2, c))
		}

		function f() {
			n(3, u = 1e3 * Lu(c.instructions, o, i.getCurrentShip(), 0))
		}
		V(ou.subscribe((t => {
			n(0, o = i.starSystem.poiMap.get(t)), n(1, l = i.getCurrentShip().navRoute.filter((e => e.id == t)).length > 0), l ? (n(2, c = i.getCurrentShip().navRoute.filter((e => e.id == t))[0]), o.buyer || c.instructions.forEach((t => {
				-1 == t.amount && (t.amount = i.getCurrentShip().cargoCapacity)
			}))) : (n(2, c = {
				id: t,
				instructions: []
			}), o.buyer || o.resources.forEach((t => {
				c.instructions.push({
					sell: !1,
					resource: t.resource.id,
					amount: i.getCurrentShip().cargoCapacity
				})
			}))), f()
		})));
		return [o, l, c, u, i, d, p, function() {
			c.instructions.forEach((t => {
				t.amount == i.getCurrentShip().cargoCapacity && (t.amount = -1), 0 == i.getCurrentShip().cargo.filter((e => e.id == t.resource)).length && i.getCurrentShip().cargo.push({
					id: t.resource,
					qty: 0,
					sell: !0
				})
			})), i.getCurrentShip().navRoute.push(c), Kh(), Cp(), h(iu, r = !1, r)
		}, function() {
			let t = i.getCurrentShip().navRoute[i.getCurrentShip().navStage];
			for (let t = 0; t < i.getCurrentShip().navRoute.length; t++) i.getCurrentShip().navRoute[t].id == s && i.getCurrentShip().navRoute.splice(t, 1);
			i.getCurrentShip().navRoute.forEach(((e, n) => {
				e == t && (i.getCurrentShip().navStage = n)
			})), Kh(), Cp(), h(iu, r = !1, r)
		}, function() {
			for (let t = 0; t < i.getCurrentShip().navRoute.length; t++) i.getCurrentShip().navRoute[t].id == s && (i.getCurrentShip().navStage = t);
			Kh()
		}, (t, e) => e.resource == t.resource.id, (t, e) => e.resource == t.resource.id, (t, e) => vu(t.resource.id), (t, e) => e.resource == t.resource.id, (t, e) => e.resource == t.resource.id, (t, e) => e.resource == t.resource.id, (t, e) => d(t.resource.id), (t, e) => e.resource == t.resource.id, (t, e) => e.resource == t.resource.id, (t, e) => p(e, t.resource.id), (t, e) => e.resource == t.resource.id, (t, e) => e.resource == t.resource.id]
	}
	class Hm extends Tt {
		constructor(t) {
			super(), St(this, t, Fm, Um, o, {})
		}
	}

	function km(t, e, n) {
		const i = t.slice();
		return i[1] = e[n], i
	}

	function Gm(t, e, n) {
		const i = t.slice();
		return i[4] = e[n], i
	}

	function jm(e) {
		let n, i, r = e[4].name + "";
		return {
			c() {
				n = w(r), i = w(",")
			},
			m(t, e) {
				y(t, n, e), y(t, i, e)
			},
			p: t,
			d(t) {
				t && x(n), t && x(i)
			}
		}
	}

	function Vm(t) {
		let e, n, i, r, s, o, a, c, l = t[1].name + "",
			h = t[1].val + "",
			u = t[1].usedFor,
			d = [];
		for (let e = 0; e < u.length; e += 1) d[e] = jm(Gm(t, u, e));
		return {
			c() {
				e = _("span"), n = w(l), i = M(), r = _("span"), s = w(h), o = M(), a = _("span");
				for (let t = 0; t < d.length; t += 1) d[t].c();
				c = M(), E(e, "class", "svelte-1dl3ot1"), E(r, "class", "text-right svelte-1dl3ot1"), E(a, "class", "svelte-1dl3ot1")
			},
			m(t, l) {
				y(t, e, l), v(e, n), y(t, i, l), y(t, r, l), v(r, s), y(t, o, l), y(t, a, l);
				for (let t = 0; t < d.length; t += 1) d[t].m(a, null);
				v(a, c)
			},
			p(t, e) {
				if (1 & e) {
					let n;
					for (u = t[1].usedFor, n = 0; n < u.length; n += 1) {
						const i = Gm(t, u, n);
						d[n] ? d[n].p(i, e) : (d[n] = jm(i), d[n].c(), d[n].m(a, c))
					}
					for (; n < d.length; n += 1) d[n].d(1);
					d.length = u.length
				}
			},
			d(t) {
				t && x(e), t && x(i), t && x(r), t && x(o), t && x(a), b(d, t)
			}
		}
	}

	function Wm(e) {
		let n, i, r, s, o, a, c, l = e[0],
			h = [];
		for (let t = 0; t < l.length; t += 1) h[t] = Vm(km(e, l, t));
		return {
			c() {
				n = _("div"), i = _("span"), i.textContent = "Name", r = M(), s = _("span"), s.textContent = "Value", o = M(), a = _("span"), a.textContent = "Used for", c = M();
				for (let t = 0; t < h.length; t += 1) h[t].c();
				E(i, "class", "head svelte-1dl3ot1"), E(s, "class", "head text-right svelte-1dl3ot1"), E(a, "class", "head svelte-1dl3ot1"), E(n, "class", "svelte-1dl3ot1")
			},
			m(t, e) {
				y(t, n, e), v(n, i), v(n, r), v(n, s), v(n, o), v(n, a), v(n, c);
				for (let t = 0; t < h.length; t += 1) h[t].m(n, null)
			},
			p(t, [e]) {
				if (1 & e) {
					let i;
					for (l = t[0], i = 0; i < l.length; i += 1) {
						const r = km(t, l, i);
						h[i] ? h[i].p(r, e) : (h[i] = Vm(r), h[i].c(), h[i].m(n, null))
					}
					for (; i < h.length; i += 1) h[i].d(1);
					h.length = l.length
				}
			},
			i: t,
			o: t,
			d(t) {
				t && x(n), b(h, t)
			}
		}
	}

	function $m(t) {
		const e = [];
		return Oh.forEach((t => {
			e.push({
				name: t.name,
				val: t.value,
				usedFor: Oh.filter((e => e.producedBy && e.producedBy.filter((e => e.id == t.id)).length > 0))
			})
		})), e.sort(((t, e) => t.val - e.val)), [e]
	}
	class qm extends Tt {
		constructor(t) {
			super(), St(this, t, $m, Wm, o, {})
		}
	}

	function Xm(t, e, n) {
		const i = t.slice();
		return i[12] = e[n], i
	}

	function Ym(t, e, n) {
		const i = t.slice();
		return i[15] = e[n], i
	}

	function Zm(t, e, n) {
		const i = t.slice();
		return i[18] = e[n], i
	}

	function Jm(t) {
		let e, n, i, r = [],
			s = new Map,
			o = t[0].producedBy;
		const a = t => t[18].id;
		for (let e = 0; e < o.length; e += 1) {
			let n = Zm(t, o, e),
				i = a(n);
			s.set(i, r[e] = Qm(i, n))
		}
		return {
			c() {
				e = _("p"), e.textContent = "Components:", n = M(), i = _("ul");
				for (let t = 0; t < r.length; t += 1) r[t].c();
				E(e, "class", "svelte-14te46u"), E(i, "class", "svelte-14te46u")
			},
			m(t, s) {
				y(t, e, s), y(t, n, s), y(t, i, s);
				for (let t = 0; t < r.length; t += 1) r[t].m(i, null)
			},
			p(t, e) {
				if (1 & e) {
					const n = t[0].producedBy;
					r = yt(r, e, a, 1, t, n, s, i, ft, Qm, null, Zm)
				}
			},
			d(t) {
				t && x(e), t && x(n), t && x(i);
				for (let t = 0; t < r.length; t += 1) r[t].d()
			}
		}
	}

	function Qm(t, e) {
		let n, i, r, s, o, a, c, l, h = Ih.get(e[18].id).name + "",
			u = e[18].cost + "";

		function d(...t) {
			return e[7](e[18], ...t)
		}
		return {
			key: t,
			first: null,
			c() {
				n = _("li"), i = _("span"), r = w(h), s = w(" x "), o = w(u), a = M(), E(i, "class", "clickable svelte-14te46u"), E(n, "class", "svelte-14te46u"), this.first = n
			},
			m(t, e) {
				y(t, n, e), v(n, i), v(i, r), v(i, s), v(i, o), v(n, a), c || (l = T(i, "click", d), c = !0)
			},
			p(t, n) {
				e = t, 1 & n && h !== (h = Ih.get(e[18].id).name + "") && A(r, h), 1 & n && u !== (u = e[18].cost + "") && A(o, u)
			},
			d(t) {
				t && x(n), c = !1, l()
			}
		}
	}

	function Km(t) {
		let e, n, i, r = t[3],
			s = [];
		for (let e = 0; e < r.length; e += 1) s[e] = tg(Ym(t, r, e));
		return {
			c() {
				e = _("p"), e.textContent = "Component of:", n = M(), i = _("ul");
				for (let t = 0; t < s.length; t += 1) s[t].c();
				E(e, "class", "svelte-14te46u"), E(i, "class", "svelte-14te46u")
			},
			m(t, r) {
				y(t, e, r), y(t, n, r), y(t, i, r);
				for (let t = 0; t < s.length; t += 1) s[t].m(i, null)
			},
			p(t, e) {
				if (8 & e) {
					let n;
					for (r = t[3], n = 0; n < r.length; n += 1) {
						const o = Ym(t, r, n);
						s[n] ? s[n].p(o, e) : (s[n] = tg(o), s[n].c(), s[n].m(i, null))
					}
					for (; n < s.length; n += 1) s[n].d(1);
					s.length = r.length
				}
			},
			d(t) {
				t && x(e), t && x(n), t && x(i), b(s, t)
			}
		}
	}

	function tg(t) {
		let e, n, i, r, s, o, a = t[15].name + "";

		function c(...e) {
			return t[8](t[15], ...e)
		}
		return {
			c() {
				e = _("li"), n = _("span"), i = w(a), r = M(), E(n, "class", "clickable svelte-14te46u"), E(e, "class", "svelte-14te46u")
			},
			m(t, a) {
				y(t, e, a), v(e, n), v(n, i), v(e, r), s || (o = T(n, "click", c), s = !0)
			},
			p(e, n) {
				t = e, 8 & n && a !== (a = t[15].name + "") && A(i, a)
			},
			d(t) {
				t && x(e), s = !1, o()
			}
		}
	}

	function eg(t) {
		let e, n, i, r = t[2],
			s = [];
		for (let e = 0; e < r.length; e += 1) s[e] = ng(Xm(t, r, e));
		return {
			c() {
				e = _("p"), e.textContent = "Available from:", n = M(), i = _("ul");
				for (let t = 0; t < s.length; t += 1) s[t].c();
				E(e, "class", "svelte-14te46u"), E(i, "class", "svelte-14te46u")
			},
			m(t, r) {
				y(t, e, r), y(t, n, r), y(t, i, r);
				for (let t = 0; t < s.length; t += 1) s[t].m(i, null)
			},
			p(t, e) {
				if (20 & e) {
					let n;
					for (r = t[2], n = 0; n < r.length; n += 1) {
						const o = Xm(t, r, n);
						s[n] ? s[n].p(o, e) : (s[n] = ng(o), s[n].c(), s[n].m(i, null))
					}
					for (; n < s.length; n += 1) s[n].d(1);
					s.length = r.length
				}
			},
			d(t) {
				t && x(e), t && x(n), t && x(i), b(s, t)
			}
		}
	}

	function ng(t) {
		let e, n, i, r, s, o, a = t[12].name + "";

		function c(...e) {
			return t[9](t[12], ...e)
		}
		return {
			c() {
				e = _("li"), n = _("span"), i = w(a), r = M(), E(n, "class", "clickable svelte-14te46u"), E(e, "class", "svelte-14te46u")
			},
			m(t, a) {
				y(t, e, a), v(e, n), v(n, i), v(e, r), s || (o = T(n, "click", c), s = !0)
			},
			p(e, n) {
				t = e, 4 & n && a !== (a = t[12].name + "") && A(i, a)
			},
			d(t) {
				t && x(e), s = !1, o()
			}
		}
	}

	function ig(e) {
		let n, i, r, s, o, a, c, l, h, u, d, p, f, m, g, b, S, T = e[0].name + "",
			L = e[0].value + "",
			C = e[0].producedBy && e[0].producedBy.length > 0 && Jm(e),
			R = e[3] && e[3].length > 0 && Km(e),
			P = e[2] && e[2].length > 0 && eg(e);
		return {
			c() {
				n = _("div"), i = _("p"), r = w("Resource: "), s = _("strong"), o = w(T), a = w(" ("), c = w(e[1]), l = w(")"), h = M(), u = _("p"), d = w("Value per unit: "), p = _("strong"), f = w(L), m = w(" credits"), g = M(), C && C.c(), b = M(), R && R.c(), S = M(), P && P.c(), E(i, "class", "svelte-14te46u"), E(u, "class", "svelte-14te46u"), E(n, "class", "svelte-14te46u")
			},
			m(t, e) {
				y(t, n, e), v(n, i), v(i, r), v(i, s), v(s, o), v(i, a), v(i, c), v(i, l), v(n, h), v(n, u), v(u, d), v(u, p), v(p, f), v(u, m), v(n, g), C && C.m(n, null), v(n, b), R && R.m(n, null), v(n, S), P && P.m(n, null)
			},
			p(t, [e]) {
				1 & e && T !== (T = t[0].name + "") && A(o, T), 2 & e && A(c, t[1]), 1 & e && L !== (L = t[0].value + "") && A(f, L), t[0].producedBy && t[0].producedBy.length > 0 ? C ? C.p(t, e) : (C = Jm(t), C.c(), C.m(n, b)) : C && (C.d(1), C = null), t[3] && t[3].length > 0 ? R ? R.p(t, e) : (R = Km(t), R.c(), R.m(n, S)) : R && (R.d(1), R = null), t[2] && t[2].length > 0 ? P ? P.p(t, e) : (P = eg(t), P.c(), P.m(n, null)) : P && (P.d(1), P = null)
			},
			i: t,
			o: t,
			d(t) {
				t && x(n), C && C.d(), R && R.d(), P && P.d()
			}
		}
	}

	function rg(t, e, n) {
		let i, r, s;
		a(t, Qh, (t => n(6, i = t))), a(t, iu, (t => n(10, r = t))), a(t, ou, (t => n(11, s = t)));
		let {
			resourceId: o
		} = e, c = "Liquid";

		function l(t) {
			h(iu, r = !0, r), h(ou, s = t, s)
		}
		let u, d, p;
		return t.$$set = t => {
			"resourceId" in t && n(5, o = t.resourceId)
		}, t.$$.update = () => {
			if (32 & t.$$.dirty && n(0, u = Ih.get(o)), 96 & t.$$.dirty && n(2, d = i.starSystem.pois.filter((t => t.resourceMap.has(o)))), 1 & t.$$.dirty) switch (u.type) {
				case uh.GAS:
					n(1, c = "Gas");
					break;
				case uh.SOLID:
					n(1, c = "Solid")
			}
			32 & t.$$.dirty && n(3, p = Oh.filter((t => t.producedBy && t.producedBy.filter((t => t.id == o)).length > 0)))
		}, [u, c, d, p, l, o, i, (t, e) => vu(t.id), (t, e) => vu(t.id), (t, e) => l(t.index)]
	}
	class sg extends Tt {
		constructor(t) {
			super(), St(this, t, rg, ig, o, {
				resourceId: 5
			})
		}
	}

	function og(t, e, n) {
		const i = t.slice();
		return i[4] = e[n], i
	}

	function ag(t) {
		let e, n;
		return e = new sg({
			props: {
				resourceId: t[4]
			}
		}), {
			c() {
				bt(e.$$.fragment)
			},
			m(t, i) {
				_t(e, t, i), n = !0
			},
			p(t, n) {
				const i = {};
				1 & n && (i.resourceId = t[4]), e.$set(i)
			},
			i(t) {
				n || (ht(e.$$.fragment, t), n = !0)
			},
			o(t) {
				ut(e.$$.fragment, t), n = !1
			},
			d(t) {
				wt(e, t)
			}
		}
	}

	function cg(t, e) {
		let n, i, r;

		function s() {
			return e[2](e[4])
		}
		return i = new Kp({
			props: {
				title: Ih.get(e[4]).name,
				menu: "resource-" + e[4],
				closeFunction: s,
				$$slots: {
					default: [ag]
				},
				$$scope: {
					ctx: e
				}
			}
		}), {
			key: t,
			first: null,
			c() {
				n = S(), bt(i.$$.fragment), this.first = n
			},
			m(t, e) {
				y(t, n, e), _t(i, t, e), r = !0
			},
			p(t, n) {
				e = t;
				const r = {};
				1 & n && (r.title = Ih.get(e[4]).name), 1 & n && (r.menu = "resource-" + e[4]), 1 & n && (r.closeFunction = s), 129 & n && (r.$$scope = {
					dirty: n,
					ctx: e
				}), i.$set(r)
			},
			i(t) {
				r || (ht(i.$$.fragment, t), r = !0)
			},
			o(t) {
				ut(i.$$.fragment, t), r = !1
			},
			d(t) {
				t && x(n), wt(i, t)
			}
		}
	}

	function lg(t) {
		let e, n;
		return e = new Kp({
			props: {
				title: "Resource Guide",
				menu: "resource-guide",
				closeFunction: t[3],
				$$slots: {
					default: [hg]
				},
				$$scope: {
					ctx: t
				}
			}
		}), {
			c() {
				bt(e.$$.fragment)
			},
			m(t, i) {
				_t(e, t, i), n = !0
			},
			p(t, n) {
				const i = {};
				2 & n && (i.closeFunction = t[3]), 128 & n && (i.$$scope = {
					dirty: n,
					ctx: t
				}), e.$set(i)
			},
			i(t) {
				n || (ht(e.$$.fragment, t), n = !0)
			},
			o(t) {
				ut(e.$$.fragment, t), n = !1
			},
			d(t) {
				wt(e, t)
			}
		}
	}

	function hg(t) {
		let e, n;
		return e = new qm({}), {
			c() {
				bt(e.$$.fragment)
			},
			m(t, i) {
				_t(e, t, i), n = !0
			},
			i(t) {
				n || (ht(e.$$.fragment, t), n = !0)
			},
			o(t) {
				ut(e.$$.fragment, t), n = !1
			},
			d(t) {
				wt(e, t)
			}
		}
	}

	function ug(t) {
		let e, n, i, r = [],
			s = new Map,
			o = t[0];
		const a = t => t[4];
		for (let e = 0; e < o.length; e += 1) {
			let n = og(t, o, e),
				i = a(n);
			s.set(i, r[e] = cg(i, n))
		}
		let c = t[1] && lg(t);
		return {
			c() {
				for (let t = 0; t < r.length; t += 1) r[t].c();
				e = M(), c && c.c(), n = S()
			},
			m(t, s) {
				for (let e = 0; e < r.length; e += 1) r[e].m(t, s);
				y(t, e, s), c && c.m(t, s), y(t, n, s), i = !0
			},
			p(t, [i]) {
				if (1 & i) {
					const n = t[0];
					ct(), r = yt(r, i, a, 1, t, n, s, e.parentNode, mt, cg, e, og), lt()
				}
				t[1] ? c ? (c.p(t, i), 2 & i && ht(c, 1)) : (c = lg(t), c.c(), ht(c, 1), c.m(n.parentNode, n)) : c && (ct(), ut(c, 1, 1, (() => {
					c = null
				})), lt())
			},
			i(t) {
				if (!i) {
					for (let t = 0; t < o.length; t += 1) ht(r[t]);
					ht(c), i = !0
				}
			},
			o(t) {
				for (let t = 0; t < r.length; t += 1) ut(r[t]);
				ut(c), i = !1
			},
			d(t) {
				for (let e = 0; e < r.length; e += 1) r[e].d(t);
				t && x(e), c && c.d(t), t && x(n)
			}
		}
	}

	function dg(t, e, n) {
		let i, r;
		a(t, mu, (t => n(0, i = t))), a(t, pu, (t => n(1, r = t)));
		return [i, r, t => vu(t), () => h(pu, r = !1, r)]
	}
	class pg extends Tt {
		constructor(t) {
			super(), St(this, t, dg, ug, o, {})
		}
	}

	function fg(t) {
		let e;
		return {
			c() {
				e = _("span"), e.textContent = "Empty", E(e, "class", "text svelte-h0ikq8")
			},
			m(t, n) {
				y(t, e, n)
			},
			d(t) {
				t && x(e)
			}
		}
	}

	function mg(t) {
		let e, n, i, r;
		return e = new Df({
			props: {
				src: "svg/" + Ih.get(t[0].id).icon
			}
		}), {
			c() {
				bt(e.$$.fragment), n = M(), i = _("span"), E(i, "class", "progress svelte-h0ikq8"), C(i, "width", 100 * Math.min(1, t[0].produced) + "%")
			},
			m(t, s) {
				_t(e, t, s), y(t, n, s), y(t, i, s), r = !0
			},
			p(t, n) {
				const s = {};
				1 & n && (s.src = "svg/" + Ih.get(t[0].id).icon), e.$set(s), (!r || 1 & n) && C(i, "width", 100 * Math.min(1, t[0].produced) + "%")
			},
			i(t) {
				r || (ht(e.$$.fragment, t), r = !0)
			},
			o(t) {
				ut(e.$$.fragment, t), r = !1
			},
			d(t) {
				wt(e, t), t && x(n), t && x(i)
			}
		}
	}

	function gg(t) {
		let e, n, i, r, s, o = t[0].level + "";
		return r = new Df({
			props: {
				src: "svg/" + kp.get(t[0].id).icon
			}
		}), {
			c() {
				e = _("span"), n = w(o), i = M(), bt(r.$$.fragment), E(e, "class", "number svelte-h0ikq8")
			},
			m(t, o) {
				y(t, e, o), v(e, n), y(t, i, o), _t(r, t, o), s = !0
			},
			p(t, e) {
				(!s || 1 & e) && o !== (o = t[0].level + "") && A(n, o);
				const i = {};
				1 & e && (i.src = "svg/" + kp.get(t[0].id).icon), r.$set(i)
			},
			i(t) {
				s || (ht(r.$$.fragment, t), s = !0)
			},
			o(t) {
				ut(r.$$.fragment, t), s = !1
			},
			d(t) {
				t && x(e), t && x(i), wt(r, t)
			}
		}
	}

	function vg(t) {
		let e, n, i, r, s, o, a, c = t[0].type == Gh.empty && fg(),
			l = t[0].type == Gh.machine && mg(t),
			h = t[0].type == Gh.upgrade && gg(t);
		return {
			c() {
				e = _("div"), n = _("span"), c && c.c(), i = M(), l && l.c(), r = M(), h && h.c(), E(n, "class", "svelte-h0ikq8"), E(e, "class", "slot svelte-h0ikq8"), D(e, "active", t[2] == t[1] && t[3]), D(e, "processing", 0 != t[0].produced), D(e, "upgrade", t[0].type == Gh.upgrade)
			},
			m(u, d) {
				y(u, e, d), v(e, n), c && c.m(n, null), v(n, i), l && l.m(n, null), v(n, r), h && h.m(n, null), s = !0, o || (a = T(e, "click", t[5]), o = !0)
			},
			p(t, [s]) {
				t[0].type == Gh.empty ? c || (c = fg(), c.c(), c.m(n, i)) : c && (c.d(1), c = null), t[0].type == Gh.machine ? l ? (l.p(t, s), 1 & s && ht(l, 1)) : (l = mg(t), l.c(), ht(l, 1), l.m(n, r)) : l && (ct(), ut(l, 1, 1, (() => {
					l = null
				})), lt()), t[0].type == Gh.upgrade ? h ? (h.p(t, s), 1 & s && ht(h, 1)) : (h = gg(t), h.c(), ht(h, 1), h.m(n, null)) : h && (ct(), ut(h, 1, 1, (() => {
					h = null
				})), lt()), 14 & s && D(e, "active", t[2] == t[1] && t[3]), 1 & s && D(e, "processing", 0 != t[0].produced), 1 & s && D(e, "upgrade", t[0].type == Gh.upgrade)
			},
			i(t) {
				s || (ht(l), ht(h), s = !0)
			},
			o(t) {
				ut(l), ut(h), s = !1
			},
			d(t) {
				t && x(e), c && c.d(), l && l.d(), h && h.d(), o = !1, a()
			}
		}
	}

	function yg(t, e, n) {
		let i, r;
		a(t, au, (t => n(2, i = t))), a(t, cu, (t => n(3, r = t)));
		let {
			fSlot: s
		} = e, {
			index: o
		} = e;

		function c() {
			h(au, i = o, i), h(cu, r = !0, r)
		}
		return t.$$set = t => {
			"fSlot" in t && n(0, s = t.fSlot), "index" in t && n(1, o = t.index)
		}, [s, o, i, r, c, t => c()]
	}
	class xg extends Tt {
		constructor(t) {
			super(), St(this, t, yg, vg, o, {
				fSlot: 0,
				index: 1
			})
		}
	}

	function bg(t, e, n) {
		const i = t.slice();
		return i[6] = e[n], i[8] = n, i
	}

	function _g(t, e) {
		let n, i, r;
		return i = new xg({
			props: {
				fSlot: e[6],
				index: e[8]
			}
		}), {
			key: t,
			first: null,
			c() {
				n = S(), bt(i.$$.fragment), this.first = n
			},
			m(t, e) {
				y(t, n, e), _t(i, t, e), r = !0
			},
			p(t, e) {
				const n = {};
				1 & e && (n.fSlot = t[6]), 1 & e && (n.index = t[8]), i.$set(n)
			},
			i(t) {
				r || (ht(i.$$.fragment, t), r = !0)
			},
			o(t) {
				ut(i.$$.fragment, t), r = !1
			},
			d(t) {
				t && x(n), wt(i, t)
			}
		}
	}

	function wg(t) {
		let e, n, i, r, s, o, a, c, l, h = t[0].level + "",
			u = [],
			d = new Map,
			p = t[0].factorySlots;
		const f = t => t[8];
		for (let e = 0; e < p.length; e += 1) {
			let n = bg(t, p, e),
				i = f(n);
			d.set(i, u[e] = _g(i, n))
		}
		return {
			c() {
				e = _("p"), n = w("Ship level: "), i = w(h), r = _("button"), r.textContent = "Upgrade", s = M(), o = _("div");
				for (let t = 0; t < u.length; t += 1) u[t].c();
				E(r, "class", "svelte-16w94mr"), E(e, "class", "svelte-16w94mr"), C(o, "grid-template-columns", t[1]), E(o, "class", "grid svelte-16w94mr")
			},
			m(h, d) {
				y(h, e, d), v(e, n), v(e, i), v(e, r), y(h, s, d), y(h, o, d);
				for (let t = 0; t < u.length; t += 1) u[t].m(o, null);
				a = !0, c || (l = T(r, "click", t[4]), c = !0)
			},
			p(t, [e]) {
				if ((!a || 1 & e) && h !== (h = t[0].level + "") && A(i, h), 1 & e) {
					const n = t[0].factorySlots;
					ct(), u = yt(u, e, f, 1, t, n, d, o, mt, _g, null, bg), lt()
				}(!a || 2 & e) && C(o, "grid-template-columns", t[1])
			},
			i(t) {
				if (!a) {
					for (let t = 0; t < p.length; t += 1) ht(u[t]);
					a = !0
				}
			},
			o(t) {
				for (let t = 0; t < u.length; t += 1) ut(u[t]);
				a = !1
			},
			d(t) {
				t && x(e), t && x(s), t && x(o);
				for (let t = 0; t < u.length; t += 1) u[t].d();
				c = !1, l()
			}
		}
	}

	function Mg(t, e, n) {
		let i, r;
		a(t, Qh, (t => n(3, i = t))), a(t, su, (t => n(2, r = t)));
		let s, o = i.getCurrentShip();
		j((() => {
			s = setInterval((() => {
				n(0, o = i.getCurrentShip())
			}), 500)
		})), V((() => {
			clearInterval(s)
		}));
		let c = "1fr 1fr 1fr";
		return t.$$.update = () => {
			10 & t.$$.dirty && (n(1, c = "1fr 1fr 1fr"), i.getCurrentShip().factorySlots.length > 12 && n(1, c += " 1fr"), i.getCurrentShip().factorySlots.length > 20 && n(1, c += " 1fr"))
		}, [o, c, r, i, t => h(su, r = !0, r)]
	}
	class Sg extends Tt {
		constructor(t) {
			super(), St(this, t, Mg, wg, o, {})
		}
	}

	function Tg(t, e, n) {
		const i = t.slice();
		return i[12] = e[n], i
	}

	function Eg(t) {
		let e, n, i, r, s, o, a = t[12].cost + "",
			c = Ih.get(t[12].id).name + "";

		function l(...e) {
			return t[9](t[12], ...e)
		}
		return {
			c() {
				e = _("p"), n = w(a), i = w("x "), r = w(c), E(e, "class", "res svelte-cvxy06")
			},
			m(t, a) {
				y(t, e, a), v(e, n), v(e, i), v(e, r), s || (o = T(e, "click", l), s = !0)
			},
			p(e, i) {
				t = e, 1 & i && a !== (a = t[12].cost + "") && A(n, a), 1 & i && c !== (c = Ih.get(t[12].id).name + "") && A(r, c)
			},
			d(t) {
				t && x(e), s = !1, o()
			}
		}
	}

	function Ag(e) {
		let n, i;
		return n = new Lm({
			props: {
				text: "Destroy Machine",
				confirm: e[5]
			}
		}), {
			c() {
				bt(n.$$.fragment)
			},
			m(t, e) {
				_t(n, t, e), i = !0
			},
			p: t,
			i(t) {
				i || (ht(n.$$.fragment, t), i = !0)
			},
			o(t) {
				ut(n.$$.fragment, t), i = !1
			},
			d(t) {
				wt(n, t)
			}
		}
	}

	function Lg(e) {
		let n, i, r, s, o, a, c = Bu(e[0].cost) + "";
		return {
			c() {
				n = _("button"), i = w("Buy "), r = w(c), s = w(" Credits"), E(n, "class", "svelte-cvxy06"), D(n, "disabled", e[1].persistent.money < e[0].cost)
			},
			m(t, c) {
				y(t, n, c), v(n, i), v(n, r), v(n, s), o || (a = T(n, "click", e[10]), o = !0)
			},
			p(t, e) {
				1 & e && c !== (c = Bu(t[0].cost) + "") && A(r, c), 3 & e && D(n, "disabled", t[1].persistent.money < t[0].cost)
			},
			i: t,
			o: t,
			d(t) {
				t && x(n), o = !1, a()
			}
		}
	}

	function Cg(t) {
		let e, n, i, r, s, o, a, c, l, h, u, d, p, f, m, g, L, C, R, P, D, O, I, N, z, B, U, F = Ih.get(t[0].produces).name + "",
			H = t[0].suffix + "",
			k = t[0].qty + "",
			G = Ih.get(t[0].produces).name + "",
			j = t[0].time + "",
			V = Ih.get(t[0].produces).producedBy,
			W = [];
		for (let e = 0; e < V.length; e += 1) W[e] = Eg(Tg(t, V, e));
		const $ = [Lg, Ag],
			q = [];

		function X(t, e) {
			return t[3].type == Gh.empty ? 0 : 1
		}
		return O = X(t), I = q[O] = $[O](t), {
			c() {
				e = _("p"), n = w(F), i = M(), r = w(H), s = M(), o = _("p"), o.textContent = "Produces", a = M(), c = _("p"), l = w(k), h = w("x "), u = w(G), d = M(), p = _("p"), p.textContent = "Consumes", f = M();
				for (let t = 0; t < W.length; t += 1) W[t].c();
				m = M(), g = _("p"), L = w("Every "), C = w(j), R = M(), P = w(t[2]), D = M(), I.c(), N = S(), E(e, "class", "svelte-cvxy06"), E(o, "class", "svelte-cvxy06"), E(c, "class", "res svelte-cvxy06"), E(p, "class", "svelte-cvxy06"), E(g, "class", "svelte-cvxy06")
			},
			m(x, b) {
				y(x, e, b), v(e, n), v(e, i), v(e, r), y(x, s, b), y(x, o, b), y(x, a, b), y(x, c, b), v(c, l), v(c, h), v(c, u), y(x, d, b), y(x, p, b), y(x, f, b);
				for (let t = 0; t < W.length; t += 1) W[t].m(x, b);
				y(x, m, b), y(x, g, b), v(g, L), v(g, C), v(g, R), v(g, P), y(x, D, b), q[O].m(x, b), y(x, N, b), z = !0, B || (U = T(c, "click", t[8]), B = !0)
			},
			p(t, [e]) {
				if ((!z || 1 & e) && F !== (F = Ih.get(t[0].produces).name + "") && A(n, F), (!z || 1 & e) && H !== (H = t[0].suffix + "") && A(r, H), (!z || 1 & e) && k !== (k = t[0].qty + "") && A(l, k), (!z || 1 & e) && G !== (G = Ih.get(t[0].produces).name + "") && A(u, G), 1 & e) {
					let n;
					for (V = Ih.get(t[0].produces).producedBy, n = 0; n < V.length; n += 1) {
						const i = Tg(t, V, n);
						W[n] ? W[n].p(i, e) : (W[n] = Eg(i), W[n].c(), W[n].m(m.parentNode, m))
					}
					for (; n < W.length; n += 1) W[n].d(1);
					W.length = V.length
				}(!z || 1 & e) && j !== (j = t[0].time + "") && A(C, j), (!z || 4 & e) && A(P, t[2]);
				let i = O;
				O = X(t), O === i ? q[O].p(t, e) : (ct(), ut(q[i], 1, 1, (() => {
					q[i] = null
				})), lt(), I = q[O], I ? I.p(t, e) : (I = q[O] = $[O](t), I.c()), ht(I, 1), I.m(N.parentNode, N))
			},
			i(t) {
				z || (ht(I), z = !0)
			},
			o(t) {
				ut(I), z = !1
			},
			d(t) {
				t && x(e), t && x(s), t && x(o), t && x(a), t && x(c), t && x(d), t && x(p), t && x(f), b(W, t), t && x(m), t && x(g), t && x(D), q[O].d(t), t && x(N), B = !1, U()
			}
		}
	}

	function Rg(t, e, n) {
		let i, r, s, o;

		function c() {
			r.spendMoney(l.cost) && (r.getCurrentShip().factorySlots[s] = {
				id: l.produces,
				level: 1,
				type: Gh.machine,
				produced: 0
			}, h(lu, o = !1, o))
		}
		a(t, hu, (t => n(6, i = t))), a(t, Qh, (t => n(1, r = t))), a(t, au, (t => n(7, s = t))), a(t, lu, (t => n(11, o = t)));
		let l, u, d;
		return t.$$.update = () => {
			64 & t.$$.dirty && n(0, l = xu.get(i)), 1 & t.$$.dirty && n(2, u = l.time > 1 ? "seconds" : "second"), 130 & t.$$.dirty && n(3, d = r.getCurrentShip().factorySlots[s])
		}, [l, r, u, d, c, function() {
			r.getCurrentShip().factorySlots[s] = {
				id: 0,
				level: 0,
				type: Gh.empty,
				produced: 0
			}
		}, i, s, t => vu(l.produces), (t, e) => vu(t.id), t => c()]
	}
	class Pg extends Tt {
		constructor(t) {
			super(), St(this, t, Rg, Cg, o, {})
		}
	}

	function Dg(t) {
		let e, n, i, r, s, o, a = t[1].level + "";
		return s = new Lm({
			props: {
				text: "Destroy Upgrade",
				confirm: t[4]
			}
		}), {
			c() {
				e = _("p"), n = w("Current Rank: "), i = w(a), r = M(), bt(s.$$.fragment), E(e, "class", "svelte-1veofcn")
			},
			m(t, a) {
				y(t, e, a), v(e, n), v(e, i), y(t, r, a), _t(s, t, a), o = !0
			},
			p(t, e) {
				(!o || 2 & e) && a !== (a = t[1].level + "") && A(i, a)
			},
			i(t) {
				o || (ht(s.$$.fragment, t), o = !0)
			},
			o(t) {
				ut(s.$$.fragment, t), o = !1
			},
			d(t) {
				t && x(e), t && x(r), wt(s, t)
			}
		}
	}

	function Og(t) {
		let e, n, i, r, s, o, a, c, l, h, u, d, p, f, m, g, b, S, L = t[2].name + "",
			C = t[2].description + "",
			R = t[2].totalEffect(t[0].getCurrentShip()) + "",
			P = Bu(t[2].getPrice(t[1])) + "",
			O = t[1].type != Gh.empty && Dg(t);
		return {
			c() {
				e = _("p"), n = w(L), i = M(), r = _("p"), s = w(C), o = M(), a = _("p"), c = w("Current "), l = w(R), h = M(), O && O.c(), u = M(), d = _("button"), p = w("Buy "), f = w(P), m = w(" Credits"), E(e, "class", "svelte-1veofcn"), E(r, "class", "svelte-1veofcn"), E(a, "class", "svelte-1veofcn"), E(d, "class", "svelte-1veofcn"), D(d, "disabled", t[0].persistent.money < t[2].getPrice(t[1]))
			},
			m(x, _) {
				y(x, e, _), v(e, n), y(x, i, _), y(x, r, _), v(r, s), y(x, o, _), y(x, a, _), v(a, c), v(a, l), y(x, h, _), O && O.m(x, _), y(x, u, _), y(x, d, _), v(d, p), v(d, f), v(d, m), g = !0, b || (S = T(d, "click", t[7]), b = !0)
			},
			p(t, [e]) {
				(!g || 4 & e) && L !== (L = t[2].name + "") && A(n, L), (!g || 4 & e) && C !== (C = t[2].description + "") && A(s, C), (!g || 5 & e) && R !== (R = t[2].totalEffect(t[0].getCurrentShip()) + "") && A(l, R), t[1].type != Gh.empty ? O ? (O.p(t, e), 2 & e && ht(O, 1)) : (O = Dg(t), O.c(), ht(O, 1), O.m(u.parentNode, u)) : O && (ct(), ut(O, 1, 1, (() => {
					O = null
				})), lt()), (!g || 6 & e) && P !== (P = Bu(t[2].getPrice(t[1])) + "") && A(f, P), 7 & e && D(d, "disabled", t[0].persistent.money < t[2].getPrice(t[1]))
			},
			i(t) {
				g || (ht(O), g = !0)
			},
			o(t) {
				ut(O), g = !1
			},
			d(t) {
				t && x(e), t && x(i), t && x(r), t && x(o), t && x(a), t && x(h), O && O.d(t), t && x(u), t && x(d), b = !1, S()
			}
		}
	}

	function Ig(t, e, n) {
		let i, r, s, o;

		function c() {
			if (i.spendMoney(u.getPrice(l))) {
				const t = l.type == Gh.upgrade && l.id == u.id ? l.level : 0;
				i.getCurrentShip().factorySlots[r] = {
					id: u.id,
					level: t + 1,
					type: Gh.upgrade,
					produced: 0
				}, h(uu, o = !1, o), Hp(i.getCurrentShip())
			}
		}
		a(t, Qh, (t => n(0, i = t))), a(t, au, (t => n(5, r = t))), a(t, du, (t => n(6, s = t))), a(t, uu, (t => n(8, o = t)));
		let l, u;
		return t.$$.update = () => {
			33 & t.$$.dirty && n(1, l = i.getCurrentShip().factorySlots[r]), 64 & t.$$.dirty && n(2, u = kp.get(s))
		}, [i, l, u, c, function() {
			i.getCurrentShip().factorySlots[r] = {
				id: 0,
				level: 0,
				type: Gh.empty,
				produced: 0
			}, Hp(i.getCurrentShip())
		}, r, s, t => c()]
	}
	class Ng extends Tt {
		constructor(t) {
			super(), St(this, t, Ig, Og, o, {})
		}
	}

	function zg(t, e, n) {
		const i = t.slice();
		return i[15] = e[n], i
	}

	function Bg(t, e, n) {
		const i = t.slice();
		return i[18] = e[n], i[20] = n, i
	}

	function Ug(t) {
		let e, n, i, s, o, a, c, l, h, u = "machines" == t[1] && Fg(t),
			d = "upgrades" == t[1] && kg(t);
		return {
			c() {
				e = _("div"), n = _("span"), n.textContent = "Machines", i = M(), s = _("span"), s.textContent = "Upgrades", o = M(), u && u.c(), a = M(), d && d.c(), c = S(), E(n, "class", "svelte-1efy0gi"), D(n, "active", "machines" == t[1]), E(s, "class", "svelte-1efy0gi"), D(s, "active", "upgrades" == t[1]), E(e, "class", "tabs svelte-1efy0gi")
			},
			m(r, p) {
				y(r, e, p), v(e, n), v(e, i), v(e, s), y(r, o, p), u && u.m(r, p), y(r, a, p), d && d.m(r, p), y(r, c, p), l || (h = [T(n, "click", t[7]), T(s, "click", t[8])], l = !0)
			},
			p(t, e) {
				2 & e && D(n, "active", "machines" == t[1]), 2 & e && D(s, "active", "upgrades" == t[1]), "machines" == t[1] ? u ? u.p(t, e) : (u = Fg(t), u.c(), u.m(a.parentNode, a)) : u && (u.d(1), u = null), "upgrades" == t[1] ? d ? d.p(t, e) : (d = kg(t), d.c(), d.m(c.parentNode, c)) : d && (d.d(1), d = null)
			},
			d(t) {
				t && x(e), t && x(o), u && u.d(t), t && x(a), d && d.d(t), t && x(c), l = !1, r(h)
			}
		}
	}

	function Fg(t) {
		let e, n = [],
			i = new Map,
			r = t[2];
		const s = t => t[20];
		for (let e = 0; e < r.length; e += 1) {
			let o = Bg(t, r, e),
				a = s(o);
			i.set(a, n[e] = Hg(a, o))
		}
		return {
			c() {
				e = _("div");
				for (let t = 0; t < n.length; t += 1) n[t].c();
				E(e, "class", "machines svelte-1efy0gi")
			},
			m(t, i) {
				y(t, e, i);
				for (let t = 0; t < n.length; t += 1) n[t].m(e, null)
			},
			p(t, r) {
				if (12 & r) {
					const o = t[2];
					n = yt(n, r, s, 1, t, o, i, e, ft, Hg, null, Bg)
				}
			},
			d(t) {
				t && x(e);
				for (let t = 0; t < n.length; t += 1) n[t].d()
			}
		}
	}

	function Hg(t, e) {
		let n, i, r, s, o, a, c, l = Ih.get(e[18].produces).name + "",
			h = Bu(e[18].cost) + "";

		function u(...t) {
			return e[9](e[18], ...t)
		}
		return {
			key: t,
			first: null,
			c() {
				n = _("button"), i = w(l), r = w(" : "), s = w(h), o = w(" C"), E(n, "class", "svelte-1efy0gi"), this.first = n
			},
			m(t, e) {
				y(t, n, e), v(n, i), v(n, r), v(n, s), v(n, o), a || (c = T(n, "click", u), a = !0)
			},
			p(t, n) {
				e = t, 4 & n && l !== (l = Ih.get(e[18].produces).name + "") && A(i, l), 4 & n && h !== (h = Bu(e[18].cost) + "") && A(s, h)
			},
			d(t) {
				t && x(n), a = !1, c()
			}
		}
	}

	function kg(t) {
		let e, n = [],
			i = new Map,
			r = Fp;
		const s = t => t[15].id;
		for (let e = 0; e < r.length; e += 1) {
			let o = zg(t, r, e),
				a = s(o);
			i.set(a, n[e] = Gg(a, o))
		}
		return {
			c() {
				e = _("div");
				for (let t = 0; t < n.length; t += 1) n[t].c();
				E(e, "class", "upgrades svelte-1efy0gi")
			},
			m(t, i) {
				y(t, e, i);
				for (let t = 0; t < n.length; t += 1) n[t].m(e, null)
			},
			p(t, r) {
				if (16 & r) {
					n = yt(n, r, s, 1, t, Fp, i, e, ft, Gg, null, zg)
				}
			},
			d(t) {
				t && x(e);
				for (let t = 0; t < n.length; t += 1) n[t].d()
			}
		}
	}

	function Gg(t, e) {
		let n, i, r, s, o, a, c, l = e[15].name + "",
			h = Bu(e[15].basePrice) + "";

		function u(...t) {
			return e[10](e[15], ...t)
		}
		return {
			key: t,
			first: null,
			c() {
				n = _("button"), i = w(l), r = w(": "), s = w(h), o = w(" C"), E(n, "class", "svelte-1efy0gi"), this.first = n
			},
			m(t, e) {
				y(t, n, e), v(n, i), v(n, r), v(n, s), v(n, o), a || (c = T(n, "click", u), a = !0)
			},
			p(t, n) {
				e = t
			},
			d(t) {
				t && x(n), a = !1, c()
			}
		}
	}

	function jg(t) {
		let e, n;
		return e = new Pg({}), {
			c() {
				bt(e.$$.fragment)
			},
			m(t, i) {
				_t(e, t, i), n = !0
			},
			i(t) {
				n || (ht(e.$$.fragment, t), n = !0)
			},
			o(t) {
				ut(e.$$.fragment, t), n = !1
			},
			d(t) {
				wt(e, t)
			}
		}
	}

	function Vg(t) {
		let e, n;
		return e = new Ng({}), {
			c() {
				bt(e.$$.fragment)
			},
			m(t, i) {
				_t(e, t, i), n = !0
			},
			i(t) {
				n || (ht(e.$$.fragment, t), n = !0)
			},
			o(t) {
				ut(e.$$.fragment, t), n = !1
			},
			d(t) {
				wt(e, t)
			}
		}
	}

	function Wg(t) {
		let e, n, i, r, s = t[0].type == Gh.empty && Ug(t),
			o = t[0].type == Gh.machine && jg(),
			a = t[0].type == Gh.upgrade && Vg();
		return {
			c() {
				s && s.c(), e = M(), o && o.c(), n = M(), a && a.c(), i = S()
			},
			m(t, c) {
				s && s.m(t, c), y(t, e, c), o && o.m(t, c), y(t, n, c), a && a.m(t, c), y(t, i, c), r = !0
			},
			p(t, [r]) {
				t[0].type == Gh.empty ? s ? s.p(t, r) : (s = Ug(t), s.c(), s.m(e.parentNode, e)) : s && (s.d(1), s = null), t[0].type == Gh.machine ? o ? 1 & r && ht(o, 1) : (o = jg(), o.c(), ht(o, 1), o.m(n.parentNode, n)) : o && (ct(), ut(o, 1, 1, (() => {
					o = null
				})), lt()), t[0].type == Gh.upgrade ? a ? 1 & r && ht(a, 1) : (a = Vg(), a.c(), ht(a, 1), a.m(i.parentNode, i)) : a && (ct(), ut(a, 1, 1, (() => {
					a = null
				})), lt())
			},
			i(t) {
				r || (ht(o), ht(a), r = !0)
			},
			o(t) {
				ut(o), ut(a), r = !1
			},
			d(t) {
				s && s.d(t), t && x(e), o && o.d(t), t && x(n), a && a.d(t), t && x(i)
			}
		}
	}

	function $g(t, e, n) {
		let i, r, s, o, c, l;
		a(t, Qh, (t => n(5, i = t))), a(t, au, (t => n(6, r = t))), a(t, hu, (t => n(11, s = t))), a(t, du, (t => n(12, o = t))), a(t, lu, (t => n(13, c = t))), a(t, uu, (t => n(14, l = t)));
		let u = "machines";

		function d(t) {
			h(lu, c = !0, c), h(hu, s = t, s)
		}

		function p(t) {
			h(du, o = t.id, o), h(uu, l = !0, l)
		}
		let f, m;
		return t.$$.update = () => {
			96 & t.$$.dirty && n(0, f = i.getCurrentShip().factorySlots[r]), 32 & t.$$.dirty && n(2, m = Su(i.starSystem, i.getCurrentShip())), 1 & t.$$.dirty && (f.type == Gh.machine && h(hu, s = f.id, s), f.type == Gh.upgrade && h(du, o = f.id, o))
		}, [f, u, m, d, p, i, r, t => n(1, u = "machines"), t => n(1, u = "upgrades"), (t, e) => d(t.produces), (t, e) => p(t)]
	}
	class qg extends Tt {
		constructor(t) {
			super(), St(this, t, $g, Wg, o, {})
		}
	}

	function Xg(t) {
		let e, n, i, r, s, o, a, c, l, h = zu(t[0], 2) + "";
		return c = new Lm({
			props: {
				text: "Buy Upgrade",
				confirm: t[1]
			}
		}), {
			c() {
				e = _("p"), n = w("Upgrade ship level for "), i = w(h), r = w(" credits"), s = M(), o = _("p"), o.textContent = "This unlocks a new factory slot", a = M(), bt(c.$$.fragment), E(e, "class", "svelte-9e5vsp"), E(o, "class", "svelte-9e5vsp")
			},
			m(t, h) {
				y(t, e, h), v(e, n), v(e, i), v(e, r), y(t, s, h), y(t, o, h), y(t, a, h), _t(c, t, h), l = !0
			},
			p(t, [e]) {
				(!l || 1 & e) && h !== (h = zu(t[0], 2) + "") && A(i, h)
			},
			i(t) {
				l || (ht(c.$$.fragment, t), l = !0)
			},
			o(t) {
				ut(c.$$.fragment, t), l = !1
			},
			d(t) {
				t && x(e), t && x(s), t && x(o), t && x(a), wt(c, t)
			}
		}
	}

	function Yg(t, e, n) {
		let i, r;
		return a(t, Qh, (t => n(2, i = t))), t.$$.update = () => {
			4 & t.$$.dirty && n(0, r = i.getShipUpgradePrice())
		}, [r, function() {
			i.upgradeShip() && Kh()
		}, i]
	}
	class Zg extends Tt {
		constructor(t) {
			super(), St(this, t, Yg, Xg, o, {})
		}
	}

	function Jg(t) {
		let e, n;
		return e = new Kp({
			props: {
				title: "Navigation Plan",
				menu: "navigation",
				closeFunction: t[16],
				$$slots: {
					default: [Qg]
				},
				$$scope: {
					ctx: t
				}
			}
		}), {
			c() {
				bt(e.$$.fragment)
			},
			m(t, i) {
				_t(e, t, i), n = !0
			},
			p(t, n) {
				const i = {};
				1 & n && (i.closeFunction = t[16]), 1073741824 & n && (i.$$scope = {
					dirty: n,
					ctx: t
				}), e.$set(i)
			},
			i(t) {
				n || (ht(e.$$.fragment, t), n = !0)
			},
			o(t) {
				ut(e.$$.fragment, t), n = !1
			},
			d(t) {
				wt(e, t)
			}
		}
	}

	function Qg(t) {
		let e, n;
		return e = new dm({}), {
			c() {
				bt(e.$$.fragment)
			},
			m(t, i) {
				_t(e, t, i), n = !0
			},
			i(t) {
				n || (ht(e.$$.fragment, t), n = !0)
			},
			o(t) {
				ut(e.$$.fragment, t), n = !1
			},
			d(t) {
				wt(e, t)
			}
		}
	}

	function Kg(t) {
		let e, n;
		return e = new Kp({
			props: {
				title: "Select Waypoint",
				menu: "waypoint",
				resetVars: !0,
				closeFunction: t[17],
				$$slots: {
					default: [tv]
				},
				$$scope: {
					ctx: t
				}
			}
		}), {
			c() {
				bt(e.$$.fragment)
			},
			m(t, i) {
				_t(e, t, i), n = !0
			},
			p(t, n) {
				const i = {};
				4 & n && (i.closeFunction = t[17]), 1073741824 & n && (i.$$scope = {
					dirty: n,
					ctx: t
				}), e.$set(i)
			},
			i(t) {
				n || (ht(e.$$.fragment, t), n = !0)
			},
			o(t) {
				ut(e.$$.fragment, t), n = !1
			},
			d(t) {
				wt(e, t)
			}
		}
	}

	function tv(t) {
		let e, n;
		return e = new vm({}), {
			c() {
				bt(e.$$.fragment)
			},
			m(t, i) {
				_t(e, t, i), n = !0
			},
			i(t) {
				n || (ht(e.$$.fragment, t), n = !0)
			},
			o(t) {
				ut(e.$$.fragment, t), n = !1
			},
			d(t) {
				wt(e, t)
			}
		}
	}

	function ev(t) {
		let e, n;
		return e = new Kp({
			props: {
				title: "Waypoint",
				menu: "addpoi",
				closeFunction: t[18],
				$$slots: {
					default: [nv]
				},
				$$scope: {
					ctx: t
				}
			}
		}), {
			c() {
				bt(e.$$.fragment)
			},
			m(t, i) {
				_t(e, t, i), n = !0
			},
			p(t, n) {
				const i = {};
				8 & n && (i.closeFunction = t[18]), 1073741824 & n && (i.$$scope = {
					dirty: n,
					ctx: t
				}), e.$set(i)
			},
			i(t) {
				n || (ht(e.$$.fragment, t), n = !0)
			},
			o(t) {
				ut(e.$$.fragment, t), n = !1
			},
			d(t) {
				wt(e, t)
			}
		}
	}

	function nv(t) {
		let e, n;
		return e = new Hm({}), {
			c() {
				bt(e.$$.fragment)
			},
			m(t, i) {
				_t(e, t, i), n = !0
			},
			i(t) {
				n || (ht(e.$$.fragment, t), n = !0)
			},
			o(t) {
				ut(e.$$.fragment, t), n = !1
			},
			d(t) {
				wt(e, t)
			}
		}
	}

	function iv(t) {
		let e, n;
		return e = new Kp({
			props: {
				title: "Ship Level",
				menu: "shiplevel",
				closeFunction: t[19],
				$$slots: {
					default: [rv]
				},
				$$scope: {
					ctx: t
				}
			}
		}), {
			c() {
				bt(e.$$.fragment)
			},
			m(t, i) {
				_t(e, t, i), n = !0
			},
			p(t, n) {
				const i = {};
				16 & n && (i.closeFunction = t[19]), 1073741824 & n && (i.$$scope = {
					dirty: n,
					ctx: t
				}), e.$set(i)
			},
			i(t) {
				n || (ht(e.$$.fragment, t), n = !0)
			},
			o(t) {
				ut(e.$$.fragment, t), n = !1
			},
			d(t) {
				wt(e, t)
			}
		}
	}

	function rv(t) {
		let e, n;
		return e = new Zg({}), {
			c() {
				bt(e.$$.fragment)
			},
			m(t, i) {
				_t(e, t, i), n = !0
			},
			i(t) {
				n || (ht(e.$$.fragment, t), n = !0)
			},
			o(t) {
				ut(e.$$.fragment, t), n = !1
			},
			d(t) {
				wt(e, t)
			}
		}
	}

	function sv(t) {
		let e, n;
		return e = new Kp({
			props: {
				title: "Cargo",
				menu: "cargo",
				closeFunction: t[20],
				$$slots: {
					default: [ov]
				},
				$$scope: {
					ctx: t
				}
			}
		}), {
			c() {
				bt(e.$$.fragment)
			},
			m(t, i) {
				_t(e, t, i), n = !0
			},
			p(t, n) {
				const i = {};
				1 & n && (i.closeFunction = t[20]), 1073741824 & n && (i.$$scope = {
					dirty: n,
					ctx: t
				}), e.$set(i)
			},
			i(t) {
				n || (ht(e.$$.fragment, t), n = !0)
			},
			o(t) {
				ut(e.$$.fragment, t), n = !1
			},
			d(t) {
				wt(e, t)
			}
		}
	}

	function ov(t) {
		let e, n;
		return e = new Tm({}), {
			c() {
				bt(e.$$.fragment)
			},
			m(t, i) {
				_t(e, t, i), n = !0
			},
			i(t) {
				n || (ht(e.$$.fragment, t), n = !0)
			},
			o(t) {
				ut(e.$$.fragment, t), n = !1
			},
			d(t) {
				wt(e, t)
			}
		}
	}

	function av(t) {
		let e, n;
		return e = new Kp({
			props: {
				title: "Factory",
				menu: "factory",
				closeFunction: t[21],
				$$slots: {
					default: [cv]
				},
				$$scope: {
					ctx: t
				}
			}
		}), {
			c() {
				bt(e.$$.fragment)
			},
			m(t, i) {
				_t(e, t, i), n = !0
			},
			p(t, n) {
				const i = {};
				1 & n && (i.closeFunction = t[21]), 1073741824 & n && (i.$$scope = {
					dirty: n,
					ctx: t
				}), e.$set(i)
			},
			i(t) {
				n || (ht(e.$$.fragment, t), n = !0)
			},
			o(t) {
				ut(e.$$.fragment, t), n = !1
			},
			d(t) {
				wt(e, t)
			}
		}
	}

	function cv(t) {
		let e, n;
		return e = new Sg({}), {
			c() {
				bt(e.$$.fragment)
			},
			m(t, i) {
				_t(e, t, i), n = !0
			},
			i(t) {
				n || (ht(e.$$.fragment, t), n = !0)
			},
			o(t) {
				ut(e.$$.fragment, t), n = !1
			},
			d(t) {
				wt(e, t)
			}
		}
	}

	function lv(t) {
		let e, n;
		return e = new Kp({
			props: {
				title: "Settings",
				menu: "settings",
				closeFunction: t[22],
				$$slots: {
					default: [hv]
				},
				$$scope: {
					ctx: t
				}
			}
		}), {
			c() {
				bt(e.$$.fragment)
			},
			m(t, i) {
				_t(e, t, i), n = !0
			},
			p(t, n) {
				const i = {};
				1 & n && (i.closeFunction = t[22]), 1073741824 & n && (i.$$scope = {
					dirty: n,
					ctx: t
				}), e.$set(i)
			},
			i(t) {
				n || (ht(e.$$.fragment, t), n = !0)
			},
			o(t) {
				ut(e.$$.fragment, t), n = !1
			},
			d(t) {
				wt(e, t)
			}
		}
	}

	function hv(t) {
		let e, n;
		return e = new Wf({}), {
			c() {
				bt(e.$$.fragment)
			},
			m(t, i) {
				_t(e, t, i), n = !0
			},
			i(t) {
				n || (ht(e.$$.fragment, t), n = !0)
			},
			o(t) {
				ut(e.$$.fragment, t), n = !1
			},
			d(t) {
				wt(e, t)
			}
		}
	}

	function uv(t) {
		let e, n;
		return e = new Kp({
			props: {
				title: "Stats",
				menu: "stats",
				closeFunction: t[23],
				$$slots: {
					default: [dv]
				},
				$$scope: {
					ctx: t
				}
			}
		}), {
			c() {
				bt(e.$$.fragment)
			},
			m(t, i) {
				_t(e, t, i), n = !0
			},
			p(t, n) {
				const i = {};
				32 & n && (i.closeFunction = t[23]), 1073741824 & n && (i.$$scope = {
					dirty: n,
					ctx: t
				}), e.$set(i)
			},
			i(t) {
				n || (ht(e.$$.fragment, t), n = !0)
			},
			o(t) {
				ut(e.$$.fragment, t), n = !1
			},
			d(t) {
				wt(e, t)
			}
		}
	}

	function dv(t) {
		let e, n;
		return e = new Xf({}), {
			c() {
				bt(e.$$.fragment)
			},
			m(t, i) {
				_t(e, t, i), n = !0
			},
			i(t) {
				n || (ht(e.$$.fragment, t), n = !0)
			},
			o(t) {
				ut(e.$$.fragment, t), n = !1
			},
			d(t) {
				wt(e, t)
			}
		}
	}

	function pv(t) {
		let e, n, i, r, s;
		e = new Kp({
			props: {
				title: "Slot " + (t[7] + 1),
				menu: "edit-slot",
				closeFunction: t[24],
				$$slots: {
					default: [fv]
				},
				$$scope: {
					ctx: t
				}
			}
		});
		let o = t[8] && mv(t),
			a = t[9] && vv(t);
		return {
			c() {
				bt(e.$$.fragment), n = M(), o && o.c(), i = M(), a && a.c(), r = S()
			},
			m(t, c) {
				_t(e, t, c), y(t, n, c), o && o.m(t, c), y(t, i, c), a && a.m(t, c), y(t, r, c), s = !0
			},
			p(t, n) {
				const s = {};
				128 & n && (s.title = "Slot " + (t[7] + 1)), 64 & n && (s.closeFunction = t[24]), 1073741824 & n && (s.$$scope = {
					dirty: n,
					ctx: t
				}), e.$set(s), t[8] ? o ? (o.p(t, n), 256 & n && ht(o, 1)) : (o = mv(t), o.c(), ht(o, 1), o.m(i.parentNode, i)) : o && (ct(), ut(o, 1, 1, (() => {
					o = null
				})), lt()), t[9] ? a ? (a.p(t, n), 512 & n && ht(a, 1)) : (a = vv(t), a.c(), ht(a, 1), a.m(r.parentNode, r)) : a && (ct(), ut(a, 1, 1, (() => {
					a = null
				})), lt())
			},
			i(t) {
				s || (ht(e.$$.fragment, t), ht(o), ht(a), s = !0)
			},
			o(t) {
				ut(e.$$.fragment, t), ut(o), ut(a), s = !1
			},
			d(t) {
				wt(e, t), t && x(n), o && o.d(t), t && x(i), a && a.d(t), t && x(r)
			}
		}
	}

	function fv(t) {
		let e, n;
		return e = new qg({}), {
			c() {
				bt(e.$$.fragment)
			},
			m(t, i) {
				_t(e, t, i), n = !0
			},
			i(t) {
				n || (ht(e.$$.fragment, t), n = !0)
			},
			o(t) {
				ut(e.$$.fragment, t), n = !1
			},
			d(t) {
				wt(e, t)
			}
		}
	}

	function mv(t) {
		let e, n;
		return e = new Kp({
			props: {
				title: "Machine",
				menu: "buy-machine",
				closeFunction: t[25],
				$$slots: {
					default: [gv]
				},
				$$scope: {
					ctx: t
				}
			}
		}), {
			c() {
				bt(e.$$.fragment)
			},
			m(t, i) {
				_t(e, t, i), n = !0
			},
			p(t, n) {
				const i = {};
				256 & n && (i.closeFunction = t[25]), 1073741824 & n && (i.$$scope = {
					dirty: n,
					ctx: t
				}), e.$set(i)
			},
			i(t) {
				n || (ht(e.$$.fragment, t), n = !0)
			},
			o(t) {
				ut(e.$$.fragment, t), n = !1
			},
			d(t) {
				wt(e, t)
			}
		}
	}

	function gv(t) {
		let e, n;
		return e = new Pg({}), {
			c() {
				bt(e.$$.fragment)
			},
			m(t, i) {
				_t(e, t, i), n = !0
			},
			i(t) {
				n || (ht(e.$$.fragment, t), n = !0)
			},
			o(t) {
				ut(e.$$.fragment, t), n = !1
			},
			d(t) {
				wt(e, t)
			}
		}
	}

	function vv(t) {
		let e, n;
		return e = new Kp({
			props: {
				title: "Upgrade",
				menu: "buy-upgrade",
				closeFunction: t[26],
				$$slots: {
					default: [yv]
				},
				$$scope: {
					ctx: t
				}
			}
		}), {
			c() {
				bt(e.$$.fragment)
			},
			m(t, i) {
				_t(e, t, i), n = !0
			},
			p(t, n) {
				const i = {};
				512 & n && (i.closeFunction = t[26]), 1073741824 & n && (i.$$scope = {
					dirty: n,
					ctx: t
				}), e.$set(i)
			},
			i(t) {
				n || (ht(e.$$.fragment, t), n = !0)
			},
			o(t) {
				ut(e.$$.fragment, t), n = !1
			},
			d(t) {
				wt(e, t)
			}
		}
	}

	function yv(t) {
		let e, n;
		return e = new Ng({}), {
			c() {
				bt(e.$$.fragment)
			},
			m(t, i) {
				_t(e, t, i), n = !0
			},
			i(t) {
				n || (ht(e.$$.fragment, t), n = !0)
			},
			o(t) {
				ut(e.$$.fragment, t), n = !1
			},
			d(t) {
				wt(e, t)
			}
		}
	}

	function xv(t) {
		let e, n;
		return e = new Kp({
			props: {
				title: "Music",
				menu: "music",
				closeFunction: t[27],
				$$slots: {
					default: [bv]
				},
				$$scope: {
					ctx: t
				}
			}
		}), {
			c() {
				bt(e.$$.fragment)
			},
			m(t, i) {
				_t(e, t, i), n = !0
			},
			p(t, n) {
				const i = {};
				1 & n && (i.closeFunction = t[27]), 1073741826 & n && (i.$$scope = {
					dirty: n,
					ctx: t
				}), e.$set(i)
			},
			i(t) {
				n || (ht(e.$$.fragment, t), n = !0)
			},
			o(t) {
				ut(e.$$.fragment, t), n = !1
			},
			d(t) {
				wt(e, t)
			}
		}
	}

	function bv(t) {
		let e, n;
		return e = new om({
			props: {
				audio: t[1]
			}
		}), {
			c() {
				bt(e.$$.fragment)
			},
			m(t, i) {
				_t(e, t, i), n = !0
			},
			p(t, n) {
				const i = {};
				2 & n && (i.audio = t[1]), e.$set(i)
			},
			i(t) {
				n || (ht(e.$$.fragment, t), n = !0)
			},
			o(t) {
				ut(e.$$.fragment, t), n = !1
			},
			d(t) {
				wt(e, t)
			}
		}
	}

	function _v(t) {
		let e, n, i, r, s, o, a, c, l, h, u, d, p, f, m, g, b, w, S, T, A, L, C, R, P, D, O, I, N, z, B, U;

		function F(e) {
			t[11].call(null, e)
		}
		let H = {
			buttonText: "navigation",
			icon: "compass.svg"
		};

		function k(e) {
			t[12].call(null, e)
		}
		void 0 !== t[0].navigation && (H.buttonActive = t[0].navigation), n = new Nf({
			props: H
		}), $.push((() => xt(n, "buttonActive", F)));
		let G = {
			buttonText: "cargo",
			icon: "box.svg"
		};

		function j(e) {
			t[13].call(null, e)
		}
		void 0 !== t[0].cargo && (G.buttonActive = t[0].cargo), s = new Nf({
			props: G
		}), $.push((() => xt(s, "buttonActive", k)));
		let V = {
			buttonText: "factory",
			icon: "machine.svg"
		};

		function W(e) {
			t[14].call(null, e)
		}
		void 0 !== t[0].factory && (V.buttonActive = t[0].factory), c = new Nf({
			props: V
		}), $.push((() => xt(c, "buttonActive", j)));
		let q = {
			buttonText: "settings",
			icon: "cog.svg"
		};

		function X(e) {
			t[15].call(null, e)
		}
		void 0 !== t[0].settings && (q.buttonActive = t[0].settings), u = new Nf({
			props: q
		}), $.push((() => xt(u, "buttonActive", W)));
		let Y = {
			buttonText: "music",
			icon: "music.svg"
		};
		void 0 !== t[0].music && (Y.buttonActive = t[0].music), f = new Nf({
			props: Y
		}), $.push((() => xt(f, "buttonActive", X)));
		let Z = t[0].navigation && Jg(t),
			J = t[2] && Kg(t),
			K = t[3] && ev(t),
			tt = t[4] && iv(t),
			et = t[0].cargo && sv(t),
			nt = t[0].factory && av(t),
			it = t[0].settings && lv(t),
			rt = t[5] && uv(t),
			st = t[6] && pv(t);
		D = new pg({});
		let ot = t[0].music && xv(t);
		return {
			c() {
				e = _("div"), bt(n.$$.fragment), r = M(), bt(s.$$.fragment), a = M(), bt(c.$$.fragment), h = M(), bt(u.$$.fragment), p = M(), bt(f.$$.fragment), g = M(), Z && Z.c(), b = M(), J && J.c(), w = M(), K && K.c(), S = M(), tt && tt.c(), T = M(), et && et.c(), A = M(), nt && nt.c(), L = M(), it && it.c(), C = M(), rt && rt.c(), R = M(), st && st.c(), P = M(), bt(D.$$.fragment), O = M(), ot && ot.c(), I = M(), N = _("audio"), z = _("track"), E(e, "class", "buttons"), E(z, "kind", "captions"), N.src !== (B = t[10].path) && E(N, "src", B)
			},
			m(i, o) {
				y(i, e, o), _t(n, e, null), v(e, r), _t(s, e, null), v(e, a), _t(c, e, null), v(e, h), _t(u, e, null), v(e, p), _t(f, e, null), y(i, g, o), Z && Z.m(i, o), y(i, b, o), J && J.m(i, o), y(i, w, o), K && K.m(i, o), y(i, S, o), tt && tt.m(i, o), y(i, T, o), et && et.m(i, o), y(i, A, o), nt && nt.m(i, o), y(i, L, o), it && it.m(i, o), y(i, C, o), rt && rt.m(i, o), y(i, R, o), st && st.m(i, o), y(i, P, o), _t(D, i, o), y(i, O, o), ot && ot.m(i, o), y(i, I, o), y(i, N, o), v(N, z), t[28](N), U = !0
			},
			p(t, [e]) {
				const r = {};
				!i && 1 & e && (i = !0, r.buttonActive = t[0].navigation, Q((() => i = !1))), n.$set(r);
				const a = {};
				!o && 1 & e && (o = !0, a.buttonActive = t[0].cargo, Q((() => o = !1))), s.$set(a);
				const h = {};
				!l && 1 & e && (l = !0, h.buttonActive = t[0].factory, Q((() => l = !1))), c.$set(h);
				const p = {};
				!d && 1 & e && (d = !0, p.buttonActive = t[0].settings, Q((() => d = !1))), u.$set(p);
				const g = {};
				!m && 1 & e && (m = !0, g.buttonActive = t[0].music, Q((() => m = !1))), f.$set(g), t[0].navigation ? Z ? (Z.p(t, e), 1 & e && ht(Z, 1)) : (Z = Jg(t), Z.c(), ht(Z, 1), Z.m(b.parentNode, b)) : Z && (ct(), ut(Z, 1, 1, (() => {
					Z = null
				})), lt()), t[2] ? J ? (J.p(t, e), 4 & e && ht(J, 1)) : (J = Kg(t), J.c(), ht(J, 1), J.m(w.parentNode, w)) : J && (ct(), ut(J, 1, 1, (() => {
					J = null
				})), lt()), t[3] ? K ? (K.p(t, e), 8 & e && ht(K, 1)) : (K = ev(t), K.c(), ht(K, 1), K.m(S.parentNode, S)) : K && (ct(), ut(K, 1, 1, (() => {
					K = null
				})), lt()), t[4] ? tt ? (tt.p(t, e), 16 & e && ht(tt, 1)) : (tt = iv(t), tt.c(), ht(tt, 1), tt.m(T.parentNode, T)) : tt && (ct(), ut(tt, 1, 1, (() => {
					tt = null
				})), lt()), t[0].cargo ? et ? (et.p(t, e), 1 & e && ht(et, 1)) : (et = sv(t), et.c(), ht(et, 1), et.m(A.parentNode, A)) : et && (ct(), ut(et, 1, 1, (() => {
					et = null
				})), lt()), t[0].factory ? nt ? (nt.p(t, e), 1 & e && ht(nt, 1)) : (nt = av(t), nt.c(), ht(nt, 1), nt.m(L.parentNode, L)) : nt && (ct(), ut(nt, 1, 1, (() => {
					nt = null
				})), lt()), t[0].settings ? it ? (it.p(t, e), 1 & e && ht(it, 1)) : (it = lv(t), it.c(), ht(it, 1), it.m(C.parentNode, C)) : it && (ct(), ut(it, 1, 1, (() => {
					it = null
				})), lt()), t[5] ? rt ? (rt.p(t, e), 32 & e && ht(rt, 1)) : (rt = uv(t), rt.c(), ht(rt, 1), rt.m(R.parentNode, R)) : rt && (ct(), ut(rt, 1, 1, (() => {
					rt = null
				})), lt()), t[6] ? st ? (st.p(t, e), 64 & e && ht(st, 1)) : (st = pv(t), st.c(), ht(st, 1), st.m(P.parentNode, P)) : st && (ct(), ut(st, 1, 1, (() => {
					st = null
				})), lt()), t[0].music ? ot ? (ot.p(t, e), 1 & e && ht(ot, 1)) : (ot = xv(t), ot.c(), ht(ot, 1), ot.m(I.parentNode, I)) : ot && (ct(), ut(ot, 1, 1, (() => {
					ot = null
				})), lt()), (!U || 1024 & e && N.src !== (B = t[10].path)) && E(N, "src", B)
			},
			i(t) {
				U || (ht(n.$$.fragment, t), ht(s.$$.fragment, t), ht(c.$$.fragment, t), ht(u.$$.fragment, t), ht(f.$$.fragment, t), ht(Z), ht(J), ht(K), ht(tt), ht(et), ht(nt), ht(it), ht(rt), ht(st), ht(D.$$.fragment, t), ht(ot), U = !0)
			},
			o(t) {
				ut(n.$$.fragment, t), ut(s.$$.fragment, t), ut(c.$$.fragment, t), ut(u.$$.fragment, t), ut(f.$$.fragment, t), ut(Z), ut(J), ut(K), ut(tt), ut(et), ut(nt), ut(it), ut(rt), ut(st), ut(D.$$.fragment, t), ut(ot), U = !1
			},
			d(i) {
				i && x(e), wt(n), wt(s), wt(c), wt(u), wt(f), i && x(g), Z && Z.d(i), i && x(b), J && J.d(i), i && x(w), K && K.d(i), i && x(S), tt && tt.d(i), i && x(T), et && et.d(i), i && x(A), nt && nt.d(i), i && x(L), it && it.d(i), i && x(C), rt && rt.d(i), i && x(R), st && st.d(i), i && x(P), wt(D, i), i && x(O), ot && ot.d(i), i && x(I), i && x(N), t[28](null)
			}
		}
	}

	function wv(t, e, n) {
		let i, r, s, o, c, l, u, d, p, f;
		a(t, Qh, (t => n(29, i = t))), a(t, nu, (t => n(2, r = t))), a(t, iu, (t => n(3, s = t))), a(t, su, (t => n(4, o = t))), a(t, ru, (t => n(5, c = t))), a(t, cu, (t => n(6, l = t))), a(t, au, (t => n(7, u = t))), a(t, lu, (t => n(8, d = t))), a(t, uu, (t => n(9, p = t))), a(t, Jf, (t => n(10, f = t)));
		const m = {
			navigation: !1,
			settings: !1,
			stats: !1,
			music: !1,
			cargo: !1,
			factory: !1
		};
		let g;
		j((() => {
			g.addEventListener("ended", (() => {
				em()
			})), g.addEventListener("loadeddata", (() => {
				i.settings.musicOn && g.play()
			}))
		}));
		return [m, g, r, s, o, c, l, u, d, p, f, function(t) {
			m.navigation = t, n(0, m)
		}, function(t) {
			m.cargo = t, n(0, m)
		}, function(t) {
			m.factory = t, n(0, m)
		}, function(t) {
			m.settings = t, n(0, m)
		}, function(t) {
			m.music = t, n(0, m)
		}, () => n(0, m.navigation = !1, m), () => h(nu, r = !1, r), () => h(iu, s = !1, s), () => h(su, o = !1, o), () => n(0, m.cargo = !1, m), () => n(0, m.factory = !1, m), () => n(0, m.settings = !1, m), () => h(ru, c = !1, c), () => h(cu, l = !1, l), () => h(lu, d = !1, d), () => h(uu, p = !1, p), () => n(0, m.music = !1, m), function(t) {
			$[t ? "unshift" : "push"]((() => {
				g = t, n(1, g)
			}))
		}]
	}
	class Mv extends Tt {
		constructor(t) {
			super(), St(this, t, wv, _v, o, {})
		}
	}

	function Sv(e) {
		let n, i, r, s, o, a, c, l, h, u, d, p, f, m, g, b = zu(e[0].persistent.money, 2) + "",
			S = e[0].getCargoQty(e[0].getCurrentShip()) + "",
			T = e[0].getCurrentShip().cargoCapacity + "",
			L = zu(e[1].speed, 2) + "";
		return {
			c() {
				n = _("div"), i = _("p"), r = w("Credits "), s = w(b), o = M(), a = _("p"), c = w("Cargo "), l = w(S), h = w(" / "), u = w(T), d = M(), p = _("p"), f = w("Speed "), m = w(L), g = w(" km/s"), E(i, "class", "svelte-a9n83q"), E(a, "class", "svelte-a9n83q"), E(p, "class", "svelte-a9n83q"), E(n, "class", "svelte-a9n83q")
			},
			m(t, e) {
				y(t, n, e), v(n, i), v(i, r), v(i, s), v(n, o), v(n, a), v(a, c), v(a, l), v(a, h), v(a, u), v(n, d), v(n, p), v(p, f), v(p, m), v(p, g)
			},
			p(t, [e]) {
				1 & e && b !== (b = zu(t[0].persistent.money, 2) + "") && A(s, b), 1 & e && S !== (S = t[0].getCargoQty(t[0].getCurrentShip()) + "") && A(l, S), 1 & e && T !== (T = t[0].getCurrentShip().cargoCapacity + "") && A(u, T), 2 & e && L !== (L = zu(t[1].speed, 2) + "") && A(m, L)
			},
			i: t,
			o: t,
			d(t) {
				t && x(n)
			}
		}
	}

	function Tv(t, e, n) {
		let i, r;
		return a(t, Qh, (t => n(0, i = t))), t.$$.update = () => {
			1 & t.$$.dirty && n(1, r = i.stats)
		}, [i, r]
	}
	class Ev extends Tt {
		constructor(t) {
			super(), St(this, t, Tv, Sv, o, {})
		}
	}

	function Av(t) {
		let e, n, i, r, s = t[0].targetPoi.name + "";

		function o(t, e) {
			return t[0].stats.cruising ? Cv : Lv
		}
		let a = o(t),
			c = a(t);
		return {
			c() {
				e = _("p"), n = w(s), i = M(), c.c(), r = S()
			},
			m(t, s) {
				y(t, e, s), v(e, n), y(t, i, s), c.m(t, s), y(t, r, s)
			},
			p(t, e) {
				1 & e && s !== (s = t[0].targetPoi.name + "") && A(n, s), a === (a = o(t)) && c ? c.p(t, e) : (c.d(1), c = a(t), c && (c.c(), c.m(r.parentNode, r)))
			},
			d(t) {
				t && x(e), t && x(i), c.d(t), t && x(r)
			}
		}
	}

	function Lv(t) {
		let e, n, i, r, s = t[0].targetPoi.buyer ? "Selling cargo" : "Gathering resources",
			o = t[0].stats.gatherTime + "";
		return {
			c() {
				e = _("span"), n = w(s), i = w(" | "), r = w(o)
			},
			m(t, s) {
				y(t, e, s), v(e, n), v(e, i), v(e, r)
			},
			p(t, e) {
				1 & e && s !== (s = t[0].targetPoi.buyer ? "Selling cargo" : "Gathering resources") && A(n, s), 1 & e && o !== (o = t[0].stats.gatherTime + "") && A(r, o)
			},
			d(t) {
				t && x(e)
			}
		}
	}

	function Cv(t) {
		let e, n, i, r, s = zu(t[0].stats.distanceToTarget, 2) + "",
			o = t[0].stats.timeToTarget + "";
		return {
			c() {
				e = _("span"), n = w(s), i = w(" km | "), r = w(o)
			},
			m(t, s) {
				y(t, e, s), v(e, n), v(e, i), v(e, r)
			},
			p(t, e) {
				1 & e && s !== (s = zu(t[0].stats.distanceToTarget, 2) + "") && A(n, s), 1 & e && o !== (o = t[0].stats.timeToTarget + "") && A(r, o)
			},
			d(t) {
				t && x(e)
			}
		}
	}

	function Rv(e) {
		let n, i = e[0].targetPoi && Av(e);
		return {
			c() {
				i && i.c(), n = S()
			},
			m(t, e) {
				i && i.m(t, e), y(t, n, e)
			},
			p(t, [e]) {
				t[0].targetPoi ? i ? i.p(t, e) : (i = Av(t), i.c(), i.m(n.parentNode, n)) : i && (i.d(1), i = null)
			},
			i: t,
			o: t,
			d(t) {
				i && i.d(t), t && x(n)
			}
		}
	}

	function Pv(t, e, n) {
		let i;
		return a(t, Qh, (t => n(0, i = t))), [i]
	}
	class Dv extends Tt {
		constructor(t) {
			super(), St(this, t, Pv, Rv, o, {})
		}
	}

	function Ov(e) {
		let n, i, r, s, o;
		return {
			c() {
				n = _("div"), i = _("p"), i.textContent = "Calculating Offline Progess...", r = M(), s = _("div"), o = _("span"), C(o, "width", e[0] + "%"), E(o, "class", "svelte-1izn5uq"), E(s, "class", "progress svelte-1izn5uq"), E(n, "class", "fixed svelte-1izn5uq")
			},
			m(t, e) {
				y(t, n, e), v(n, i), v(n, r), v(n, s), v(s, o)
			},
			p(t, [e]) {
				1 & e && C(o, "width", t[0] + "%")
			},
			i: t,
			o: t,
			d(t) {
				t && x(n)
			}
		}
	}

	function Iv(t, e, n) {
		let i;
		return a(t, eu, (t => n(0, i = t))), [i]
	}
	class Nv extends Tt {
		constructor(t) {
			super(), St(this, t, Iv, Ov, o, {})
		}
	}

	function zv(t) {
		let e, n;
		return e = new Nv({}), {
			c() {
				bt(e.$$.fragment)
			},
			m(t, i) {
				_t(e, t, i), n = !0
			},
			i(t) {
				n || (ht(e.$$.fragment, t), n = !0)
			},
			o(t) {
				ut(e.$$.fragment, t), n = !1
			},
			d(t) {
				wt(e, t)
			}
		}
	}

	function Bv(t) {
		let e, n, i, r, s, o, a, c, l;
		n = new Dv({}), r = new Ev({}), o = new Mv({});
		let h = t[1] && zv();
		return {
			c() {
				e = _("div"), bt(n.$$.fragment), i = M(), bt(r.$$.fragment), s = M(), bt(o.$$.fragment), a = M(), h && h.c(), c = S(), E(e, "id", "target"), C(e, "min-width", t[0] + "px"), C(e, "min-height", t[0] + "px")
			},
			m(t, u) {
				y(t, e, u), _t(n, e, null), y(t, i, u), _t(r, t, u), y(t, s, u), _t(o, t, u), y(t, a, u), h && h.m(t, u), y(t, c, u), l = !0
			},
			p(t, [n]) {
				(!l || 1 & n) && C(e, "min-width", t[0] + "px"), (!l || 1 & n) && C(e, "min-height", t[0] + "px"), t[1] ? h ? 2 & n && ht(h, 1) : (h = zv(), h.c(), ht(h, 1), h.m(c.parentNode, c)) : h && (ct(), ut(h, 1, 1, (() => {
					h = null
				})), lt())
			},
			i(t) {
				l || (ht(n.$$.fragment, t), ht(r.$$.fragment, t), ht(o.$$.fragment, t), ht(h), l = !0)
			},
			o(t) {
				ut(n.$$.fragment, t), ut(r.$$.fragment, t), ut(o.$$.fragment, t), ut(h), l = !1
			},
			d(t) {
				t && x(e), wt(n), t && x(i), wt(r, t), t && x(s), wt(o, t), t && x(a), h && h.d(t), t && x(c)
			}
		}
	}

	function Uv(t, e, n) {
		let i, r, s;
		return a(t, Qh, (t => n(2, i = t))), a(t, tu, (t => n(1, r = t))), j((() => Wp())), t.$$.update = () => {
			4 & t.$$.dirty && n(0, s = i.stats.distanceToTarget > 1e5 ? 100 : 200)
		}, [s, r, i]
	}
	new class extends Tt {
		constructor(t) {
			super(), St(this, t, Uv, Bv, o, {})
		}
	}({
		target: document.body,
		props: {}
	})
}();
