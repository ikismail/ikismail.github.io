/**
 * Created by MOAB on 06-May-17.
 */
function dropdownEffectData(t) {
    var e = null, n = null, i = $(t), o = $(".dropdown-menu", t), r = i.parents("ul.nav");
    return r.height > 0 && (e = r.data("dropdown-in") || null, n = r.data("dropdown-out") || null), {
        target: t,
        dropdown: i,
        dropdownMenu: o,
        effectIn: o.data("dropdown-in") || e,
        effectOut: o.data("dropdown-out") || n
    }
}
function dropdownEffectStart(t, e) {
    e && (t.dropdown.addClass("dropdown-animating"), t.dropdownMenu.addClass("animated"), t.dropdownMenu.addClass(e))
}
function dropdownEffectEnd(t, e) {
    t.dropdown.one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", function () {
        t.dropdown.removeClass("dropdown-animating"), t.dropdownMenu.removeClass("animated"), t.dropdownMenu.removeClass(t.effectIn), t.dropdownMenu.removeClass(t.effectOut), "function" == typeof e && e()
    })
}
function get_social_counts() {
    var t = window.location.protocol + "//" + window.location.host + window.location.pathname;
    $.ajax({
        type: "GET",
        url: "https://mdbootstrap.com/wp-content/themes/mdbootstrap4/inc/get_social_counts.php?thisurl=" + t,
        dataType: "json",
        success: function (t) {
            var e = document.getElementById("dom-target-fb"), n = e.textContent, e = document.getElementById("dom-target-tw"), i = e.textContent, e = document.getElementById("dom-target-gp"), o = e.textContent, r = 1 * n.valueOf() + t.facebook, a = 1 * i.valueOf() + t.twitter, s = 1 * o.valueOf() + t.gplus;
            r > 0 ? $("#facebook-span").text(r) : $("#facebook-span").hide(), $("#twitter-span").html(a), $("#gplus-span").html(s)
        }
    })
}
function loadTemplatesBy(t, e) {
    $.post(ajax_object.ajaxurl, {action: "ajax_action", category: t}, function (e) {
        console.log(t), $("#products").html(e)
    })
}
if (function (t, e) {
        "use strict";
        "object" == typeof module && "object" == typeof module.exports ? module.exports = t.document ? e(t, !0) : function (t) {
            if (!t.document)throw new Error("jQuery requires a window with a document");
            return e(t)
        } : e(t)
    }("undefined" != typeof window ? window : this, function (t, e) {
        "use strict";
        function n(t, e) {
            e = e || et;
            var n = e.createElement("script");
            n.text = t, e.head.appendChild(n).parentNode.removeChild(n)
        }

        function i(t) {
            var e = !!t && "length" in t && t.length, n = ft.type(t);
            return "function" !== n && !ft.isWindow(t) && ("array" === n || 0 === e || "number" == typeof e && e > 0 && e - 1 in t)
        }

        function o(t, e, n) {
            return ft.isFunction(e) ? ft.grep(t, function (t, i) {
                return !!e.call(t, i, t) !== n
            }) : e.nodeType ? ft.grep(t, function (t) {
                return t === e !== n
            }) : "string" != typeof e ? ft.grep(t, function (t) {
                return at.call(e, t) > -1 !== n
            }) : wt.test(e) ? ft.filter(e, t, n) : (e = ft.filter(e, t), ft.grep(t, function (t) {
                return at.call(e, t) > -1 !== n && 1 === t.nodeType
            }))
        }

        function r(t, e) {
            for (; (t = t[e]) && 1 !== t.nodeType;);
            return t
        }

        function a(t) {
            var e = {};
            return ft.each(t.match(Et) || [], function (t, n) {
                e[n] = !0
            }), e
        }

        function s(t) {
            return t
        }

        function l(t) {
            throw t
        }

        function c(t, e, n) {
            var i;
            try {
                t && ft.isFunction(i = t.promise) ? i.call(t).done(e).fail(n) : t && ft.isFunction(i = t.then) ? i.call(t, e, n) : e.call(void 0, t)
            } catch (t) {
                n.call(void 0, t)
            }
        }

        function u() {
            et.removeEventListener("DOMContentLoaded", u), t.removeEventListener("load", u), ft.ready()
        }

        function h() {
            this.expando = ft.expando + h.uid++
        }

        function d(t) {
            return "true" === t || "false" !== t && ("null" === t ? null : t === +t + "" ? +t : Ot.test(t) ? JSON.parse(t) : t)
        }

        function f(t, e, n) {
            var i;
            if (void 0 === n && 1 === t.nodeType)if (i = "data-" + e.replace(Lt, "-$&").toLowerCase(), "string" == typeof(n = t.getAttribute(i))) {
                try {
                    n = d(n)
                } catch (t) {
                }
                Dt.set(t, e, n)
            } else n = void 0;
            return n
        }

        function p(t, e, n, i) {
            var o, r = 1, a = 20, s = i ? function () {
                return i.cur()
            } : function () {
                return ft.css(t, e, "")
            }, l = s(), c = n && n[3] || (ft.cssNumber[e] ? "" : "px"), u = (ft.cssNumber[e] || "px" !== c && +l) && Nt.exec(ft.css(t, e));
            if (u && u[3] !== c) {
                c = c || u[3], n = n || [], u = +l || 1;
                do {
                    r = r || ".5", u /= r, ft.style(t, e, u + c)
                } while (r !== (r = s() / l) && 1 !== r && --a)
            }
            return n && (u = +u || +l || 0, o = n[1] ? u + (n[1] + 1) * n[2] : +n[2], i && (i.unit = c, i.start = u, i.end = o)), o
        }

        function g(t) {
            var e, n = t.ownerDocument, i = t.nodeName, o = Ht[i];
            return o ? o : (e = n.body.appendChild(n.createElement(i)), o = ft.css(e, "display"), e.parentNode.removeChild(e), "none" === o && (o = "block"), Ht[i] = o, o)
        }

        function m(t, e) {
            for (var n, i, o = [], r = 0, a = t.length; r < a; r++)i = t[r], i.style && (n = i.style.display, e ? ("none" === n && (o[r] = It.get(i, "display") || null, o[r] || (i.style.display = "")), "" === i.style.display && Rt(i) && (o[r] = g(i))) : "none" !== n && (o[r] = "none", It.set(i, "display", n)));
            for (r = 0; r < a; r++)null != o[r] && (t[r].style.display = o[r]);
            return t
        }

        function v(t, e) {
            var n;
            return n = void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e || "*") : void 0 !== t.querySelectorAll ? t.querySelectorAll(e || "*") : [], void 0 === e || e && ft.nodeName(t, e) ? ft.merge([t], n) : n
        }

        function y(t, e) {
            for (var n = 0, i = t.length; n < i; n++)It.set(t[n], "globalEval", !e || It.get(e[n], "globalEval"))
        }

        function b(t, e, n, i, o) {
            for (var r, a, s, l, c, u, h = e.createDocumentFragment(), d = [], f = 0, p = t.length; f < p; f++)if ((r = t[f]) || 0 === r)if ("object" === ft.type(r))ft.merge(d, r.nodeType ? [r] : r); else if (qt.test(r)) {
                for (a = a || h.appendChild(e.createElement("div")), s = (zt.exec(r) || ["", ""])[1].toLowerCase(), l = Bt[s] || Bt._default, a.innerHTML = l[1] + ft.htmlPrefilter(r) + l[2], u = l[0]; u--;)a = a.lastChild;
                ft.merge(d, a.childNodes), a = h.firstChild, a.textContent = ""
            } else d.push(e.createTextNode(r));
            for (h.textContent = "", f = 0; r = d[f++];)if (i && ft.inArray(r, i) > -1)o && o.push(r); else if (c = ft.contains(r.ownerDocument, r), a = v(h.appendChild(r), "script"), c && y(a), n)for (u = 0; r = a[u++];)Vt.test(r.type || "") && n.push(r);
            return h
        }

        function w() {
            return !0
        }

        function x() {
            return !1
        }

        function C() {
            try {
                return et.activeElement
            } catch (t) {
            }
        }

        function T(t, e, n, i, o, r) {
            var a, s;
            if ("object" == typeof e) {
                "string" != typeof n && (i = i || n, n = void 0);
                for (s in e)T(t, s, n, i, e[s], r);
                return t
            }
            if (null == i && null == o ? (o = n, i = n = void 0) : null == o && ("string" == typeof n ? (o = i, i = void 0) : (o = i, i = n, n = void 0)), o === !1)o = x; else if (!o)return t;
            return 1 === r && (a = o, o = function (t) {
                return ft().off(t), a.apply(this, arguments)
            }, o.guid = a.guid || (a.guid = ft.guid++)), t.each(function () {
                ft.event.add(this, e, o, i, n)
            })
        }

        function S(t, e) {
            return ft.nodeName(t, "table") && ft.nodeName(11 !== e.nodeType ? e : e.firstChild, "tr") ? t.getElementsByTagName("tbody")[0] || t : t
        }

        function E(t) {
            return t.type = (null !== t.getAttribute("type")) + "/" + t.type, t
        }

        function k(t) {
            var e = Zt.exec(t.type);
            return e ? t.type = e[1] : t.removeAttribute("type"), t
        }

        function A(t, e) {
            var n, i, o, r, a, s, l, c;
            if (1 === e.nodeType) {
                if (It.hasData(t) && (r = It.access(t), a = It.set(e, r), c = r.events)) {
                    delete a.handle, a.events = {};
                    for (o in c)for (n = 0, i = c[o].length; n < i; n++)ft.event.add(e, o, c[o][n])
                }
                Dt.hasData(t) && (s = Dt.access(t), l = ft.extend({}, s), Dt.set(e, l))
            }
        }

        function _(t, e) {
            var n = e.nodeName.toLowerCase();
            "input" === n && jt.test(t.type) ? e.checked = t.checked : "input" !== n && "textarea" !== n || (e.defaultValue = t.defaultValue)
        }

        function P(t, e, i, o) {
            e = ot.apply([], e);
            var r, a, s, l, c, u, h = 0, d = t.length, f = d - 1, p = e[0], g = ft.isFunction(p);
            if (g || d > 1 && "string" == typeof p && !dt.checkClone && Gt.test(p))return t.each(function (n) {
                var r = t.eq(n);
                g && (e[0] = p.call(this, n, r.html())), P(r, e, i, o)
            });
            if (d && (r = b(e, t[0].ownerDocument, !1, t, o), a = r.firstChild, 1 === r.childNodes.length && (r = a), a || o)) {
                for (s = ft.map(v(r, "script"), E), l = s.length; h < d; h++)c = r, h !== f && (c = ft.clone(c, !0, !0), l && ft.merge(s, v(c, "script"))), i.call(t[h], c, h);
                if (l)for (u = s[s.length - 1].ownerDocument, ft.map(s, k), h = 0; h < l; h++)c = s[h], Vt.test(c.type || "") && !It.access(c, "globalEval") && ft.contains(u, c) && (c.src ? ft._evalUrl && ft._evalUrl(c.src) : n(c.textContent.replace(Kt, ""), u))
            }
            return t
        }

        function I(t, e, n) {
            for (var i, o = e ? ft.filter(e, t) : t, r = 0; null != (i = o[r]); r++)n || 1 !== i.nodeType || ft.cleanData(v(i)), i.parentNode && (n && ft.contains(i.ownerDocument, i) && y(v(i, "script")), i.parentNode.removeChild(i));
            return t
        }

        function D(t, e, n) {
            var i, o, r, a, s = t.style;
            return n = n || ee(t), n && (a = n.getPropertyValue(e) || n[e], "" !== a || ft.contains(t.ownerDocument, t) || (a = ft.style(t, e)), !dt.pixelMarginRight() && te.test(a) && Jt.test(e) && (i = s.width, o = s.minWidth, r = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = i, s.minWidth = o, s.maxWidth = r)), void 0 !== a ? a + "" : a
        }

        function O(t, e) {
            return {
                get: function () {
                    return t() ? void delete this.get : (this.get = e).apply(this, arguments)
                }
            }
        }

        function L(t) {
            if (t in ae)return t;
            for (var e = t[0].toUpperCase() + t.slice(1), n = re.length; n--;)if ((t = re[n] + e) in ae)return t
        }

        function F(t, e, n) {
            var i = Nt.exec(e);
            return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : e
        }

        function N(t, e, n, i, o) {
            var r, a = 0;
            for (r = n === (i ? "border" : "content") ? 4 : "width" === e ? 1 : 0; r < 4; r += 2)"margin" === n && (a += ft.css(t, n + Mt[r], !0, o)), i ? ("content" === n && (a -= ft.css(t, "padding" + Mt[r], !0, o)), "margin" !== n && (a -= ft.css(t, "border" + Mt[r] + "Width", !0, o))) : (a += ft.css(t, "padding" + Mt[r], !0, o), "padding" !== n && (a += ft.css(t, "border" + Mt[r] + "Width", !0, o)));
            return a
        }

        function M(t, e, n) {
            var i, o = !0, r = ee(t), a = "border-box" === ft.css(t, "boxSizing", !1, r);
            if (t.getClientRects().length && (i = t.getBoundingClientRect()[e]), i <= 0 || null == i) {
                if (i = D(t, e, r), (i < 0 || null == i) && (i = t.style[e]), te.test(i))return i;
                o = a && (dt.boxSizingReliable() || i === t.style[e]), i = parseFloat(i) || 0
            }
            return i + N(t, e, n || (a ? "border" : "content"), o, r) + "px"
        }

        function R(t, e, n, i, o) {
            return new R.prototype.init(t, e, n, i, o)
        }

        function W() {
            le && (t.requestAnimationFrame(W), ft.fx.tick())
        }

        function H() {
            return t.setTimeout(function () {
                se = void 0
            }), se = ft.now()
        }

        function j(t, e) {
            var n, i = 0, o = {height: t};
            for (e = e ? 1 : 0; i < 4; i += 2 - e)n = Mt[i], o["margin" + n] = o["padding" + n] = t;
            return e && (o.opacity = o.width = t), o
        }

        function z(t, e, n) {
            for (var i, o = (q.tweeners[e] || []).concat(q.tweeners["*"]), r = 0, a = o.length; r < a; r++)if (i = o[r].call(n, e, t))return i
        }

        function V(t, e, n) {
            var i, o, r, a, s, l, c, u, h = "width" in e || "height" in e, d = this, f = {}, p = t.style, g = t.nodeType && Rt(t), v = It.get(t, "fxshow");
            n.queue || (a = ft._queueHooks(t, "fx"), null == a.unqueued && (a.unqueued = 0, s = a.empty.fire, a.empty.fire = function () {
                a.unqueued || s()
            }), a.unqueued++, d.always(function () {
                d.always(function () {
                    a.unqueued--, ft.queue(t, "fx").length || a.empty.fire()
                })
            }));
            for (i in e)if (o = e[i], ce.test(o)) {
                if (delete e[i], r = r || "toggle" === o, o === (g ? "hide" : "show")) {
                    if ("show" !== o || !v || void 0 === v[i])continue;
                    g = !0
                }
                f[i] = v && v[i] || ft.style(t, i)
            }
            if ((l = !ft.isEmptyObject(e)) || !ft.isEmptyObject(f)) {
                h && 1 === t.nodeType && (n.overflow = [p.overflow, p.overflowX, p.overflowY], c = v && v.display, null == c && (c = It.get(t, "display")), u = ft.css(t, "display"), "none" === u && (c ? u = c : (m([t], !0), c = t.style.display || c, u = ft.css(t, "display"), m([t]))), ("inline" === u || "inline-block" === u && null != c) && "none" === ft.css(t, "float") && (l || (d.done(function () {
                    p.display = c
                }), null == c && (u = p.display, c = "none" === u ? "" : u)), p.display = "inline-block")), n.overflow && (p.overflow = "hidden", d.always(function () {
                    p.overflow = n.overflow[0], p.overflowX = n.overflow[1], p.overflowY = n.overflow[2]
                })), l = !1;
                for (i in f)l || (v ? "hidden" in v && (g = v.hidden) : v = It.access(t, "fxshow", {display: c}), r && (v.hidden = !g), g && m([t], !0), d.done(function () {
                    g || m([t]), It.remove(t, "fxshow");
                    for (i in f)ft.style(t, i, f[i])
                })), l = z(g ? v[i] : 0, i, d), i in v || (v[i] = l.start, g && (l.end = l.start, l.start = 0))
            }
        }

        function B(t, e) {
            var n, i, o, r, a;
            for (n in t)if (i = ft.camelCase(n), o = e[i], r = t[n], ft.isArray(r) && (o = r[1], r = t[n] = r[0]), n !== i && (t[i] = r, delete t[n]), (a = ft.cssHooks[i]) && "expand" in a) {
                r = a.expand(r), delete t[i];
                for (n in r)n in t || (t[n] = r[n], e[n] = o)
            } else e[i] = o
        }

        function q(t, e, n) {
            var i, o, r = 0, a = q.prefilters.length, s = ft.Deferred().always(function () {
                delete l.elem
            }), l = function () {
                if (o)return !1;
                for (var e = se || H(), n = Math.max(0, c.startTime + c.duration - e), i = n / c.duration || 0, r = 1 - i, a = 0, l = c.tweens.length; a < l; a++)c.tweens[a].run(r);
                return s.notifyWith(t, [c, r, n]), r < 1 && l ? n : (s.resolveWith(t, [c]), !1)
            }, c = s.promise({
                elem: t,
                props: ft.extend({}, e),
                opts: ft.extend(!0, {specialEasing: {}, easing: ft.easing._default}, n),
                originalProperties: e,
                originalOptions: n,
                startTime: se || H(),
                duration: n.duration,
                tweens: [],
                createTween: function (e, n) {
                    var i = ft.Tween(t, c.opts, e, n, c.opts.specialEasing[e] || c.opts.easing);
                    return c.tweens.push(i), i
                },
                stop: function (e) {
                    var n = 0, i = e ? c.tweens.length : 0;
                    if (o)return this;
                    for (o = !0; n < i; n++)c.tweens[n].run(1);
                    return e ? (s.notifyWith(t, [c, 1, 0]), s.resolveWith(t, [c, e])) : s.rejectWith(t, [c, e]), this
                }
            }), u = c.props;
            for (B(u, c.opts.specialEasing); r < a; r++)if (i = q.prefilters[r].call(c, t, u, c.opts))return ft.isFunction(i.stop) && (ft._queueHooks(c.elem, c.opts.queue).stop = ft.proxy(i.stop, i)), i;
            return ft.map(u, z, c), ft.isFunction(c.opts.start) && c.opts.start.call(t, c), ft.fx.timer(ft.extend(l, {
                elem: t,
                anim: c,
                queue: c.opts.queue
            })), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always)
        }

        function Y(t) {
            return (t.match(Et) || []).join(" ")
        }

        function X(t) {
            return t.getAttribute && t.getAttribute("class") || ""
        }

        function $(t, e, n, i) {
            var o;
            if (ft.isArray(e))ft.each(e, function (e, o) {
                n || be.test(t) ? i(t, o) : $(t + "[" + ("object" == typeof o && null != o ? e : "") + "]", o, n, i)
            }); else if (n || "object" !== ft.type(e))i(t, e); else for (o in e)$(t + "[" + o + "]", e[o], n, i)
        }

        function U(t) {
            return function (e, n) {
                "string" != typeof e && (n = e, e = "*");
                var i, o = 0, r = e.toLowerCase().match(Et) || [];
                if (ft.isFunction(n))for (; i = r[o++];)"+" === i[0] ? (i = i.slice(1) || "*", (t[i] = t[i] || []).unshift(n)) : (t[i] = t[i] || []).push(n)
            }
        }

        function Q(t, e, n, i) {
            function o(s) {
                var l;
                return r[s] = !0, ft.each(t[s] || [], function (t, s) {
                    var c = s(e, n, i);
                    return "string" != typeof c || a || r[c] ? a ? !(l = c) : void 0 : (e.dataTypes.unshift(c), o(c), !1)
                }), l
            }

            var r = {}, a = t === ke;
            return o(e.dataTypes[0]) || !r["*"] && o("*")
        }

        function G(t, e) {
            var n, i, o = ft.ajaxSettings.flatOptions || {};
            for (n in e)void 0 !== e[n] && ((o[n] ? t : i || (i = {}))[n] = e[n]);
            return i && ft.extend(!0, t, i), t
        }

        function Z(t, e, n) {
            for (var i, o, r, a, s = t.contents, l = t.dataTypes; "*" === l[0];)l.shift(), void 0 === i && (i = t.mimeType || e.getResponseHeader("Content-Type"));
            if (i)for (o in s)if (s[o] && s[o].test(i)) {
                l.unshift(o);
                break
            }
            if (l[0] in n)r = l[0]; else {
                for (o in n) {
                    if (!l[0] || t.converters[o + " " + l[0]]) {
                        r = o;
                        break
                    }
                    a || (a = o)
                }
                r = r || a
            }
            if (r)return r !== l[0] && l.unshift(r), n[r]
        }

        function K(t, e, n, i) {
            var o, r, a, s, l, c = {}, u = t.dataTypes.slice();
            if (u[1])for (a in t.converters)c[a.toLowerCase()] = t.converters[a];
            for (r = u.shift(); r;)if (t.responseFields[r] && (n[t.responseFields[r]] = e), !l && i && t.dataFilter && (e = t.dataFilter(e, t.dataType)), l = r, r = u.shift())if ("*" === r)r = l; else if ("*" !== l && l !== r) {
                if (!(a = c[l + " " + r] || c["* " + r]))for (o in c)if (s = o.split(" "), s[1] === r && (a = c[l + " " + s[0]] || c["* " + s[0]])) {
                    a === !0 ? a = c[o] : c[o] !== !0 && (r = s[0], u.unshift(s[1]));
                    break
                }
                if (a !== !0)if (a && t.throws)e = a(e); else try {
                    e = a(e)
                } catch (t) {
                    return {state: "parsererror", error: a ? t : "No conversion from " + l + " to " + r}
                }
            }
            return {state: "success", data: e}
        }

        function J(t) {
            return ft.isWindow(t) ? t : 9 === t.nodeType && t.defaultView
        }

        var tt = [], et = t.document, nt = Object.getPrototypeOf, it = tt.slice, ot = tt.concat, rt = tt.push, at = tt.indexOf, st = {}, lt = st.toString, ct = st.hasOwnProperty, ut = ct.toString, ht = ut.call(Object), dt = {}, ft = function (t, e) {
            return new ft.fn.init(t, e)
        }, pt = function (t, e) {
            return e.toUpperCase()
        };
        ft.fn = ft.prototype = {
            jquery: "3.1.1", constructor: ft, length: 0, toArray: function () {
                return it.call(this)
            }, get: function (t) {
                return null == t ? it.call(this) : t < 0 ? this[t + this.length] : this[t]
            }, pushStack: function (t) {
                var e = ft.merge(this.constructor(), t);
                return e.prevObject = this, e
            }, each: function (t) {
                return ft.each(this, t)
            }, map: function (t) {
                return this.pushStack(ft.map(this, function (e, n) {
                    return t.call(e, n, e)
                }))
            }, slice: function () {
                return this.pushStack(it.apply(this, arguments))
            }, first: function () {
                return this.eq(0)
            }, last: function () {
                return this.eq(-1)
            }, eq: function (t) {
                var e = this.length, n = +t + (t < 0 ? e : 0);
                return this.pushStack(n >= 0 && n < e ? [this[n]] : [])
            }, end: function () {
                return this.prevObject || this.constructor()
            }, push: rt, sort: tt.sort, splice: tt.splice
        }, ft.extend = ft.fn.extend = function () {
            var t, e, n, i, o, r, a = arguments[0] || {}, s = 1, l = arguments.length, c = !1;
            for ("boolean" == typeof a && (c = a, a = arguments[s] || {}, s++), "object" == typeof a || ft.isFunction(a) || (a = {}), s === l && (a = this, s--); s < l; s++)if (null != (t = arguments[s]))for (e in t)n = a[e], i = t[e], a !== i && (c && i && (ft.isPlainObject(i) || (o = ft.isArray(i))) ? (o ? (o = !1, r = n && ft.isArray(n) ? n : []) : r = n && ft.isPlainObject(n) ? n : {}, a[e] = ft.extend(c, r, i)) : void 0 !== i && (a[e] = i));
            return a
        }, ft.extend({
            expando: "jQuery" + ("3.1.1" + Math.random()).replace(/\D/g, ""),
            isReady: !0,
            error: function (t) {
                throw new Error(t)
            },
            noop: function () {
            },
            isFunction: function (t) {
                return "function" === ft.type(t)
            },
            isArray: Array.isArray,
            isWindow: function (t) {
                return null != t && t === t.window
            },
            isNumeric: function (t) {
                var e = ft.type(t);
                return ("number" === e || "string" === e) && !isNaN(t - parseFloat(t))
            },
            isPlainObject: function (t) {
                var e, n;
                return !(!t || "[object Object]" !== lt.call(t)) && (!(e = nt(t)) || "function" == typeof(n = ct.call(e, "constructor") && e.constructor) && ut.call(n) === ht)
            },
            isEmptyObject: function (t) {
                var e;
                for (e in t)return !1;
                return !0
            },
            type: function (t) {
                return null == t ? t + "" : "object" == typeof t || "function" == typeof t ? st[lt.call(t)] || "object" : typeof t
            },
            globalEval: function (t) {
                n(t)
            },
            camelCase: function (t) {
                return t.replace(/^-ms-/, "ms-").replace(/-([a-z])/g, pt)
            },
            nodeName: function (t, e) {
                return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase()
            },
            each: function (t, e) {
                var n, o = 0;
                if (i(t))for (n = t.length; o < n && e.call(t[o], o, t[o]) !== !1; o++); else for (o in t)if (e.call(t[o], o, t[o]) === !1)break;
                return t
            },
            trim: function (t) {
                return null == t ? "" : (t + "").replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "")
            },
            makeArray: function (t, e) {
                var n = e || [];
                return null != t && (i(Object(t)) ? ft.merge(n, "string" == typeof t ? [t] : t) : rt.call(n, t)), n
            },
            inArray: function (t, e, n) {
                return null == e ? -1 : at.call(e, t, n)
            },
            merge: function (t, e) {
                for (var n = +e.length, i = 0, o = t.length; i < n; i++)t[o++] = e[i];
                return t.length = o, t
            },
            grep: function (t, e, n) {
                for (var i = [], o = 0, r = t.length, a = !n; o < r; o++)!e(t[o], o) !== a && i.push(t[o]);
                return i
            },
            map: function (t, e, n) {
                var o, r, a = 0, s = [];
                if (i(t))for (o = t.length; a < o; a++)null != (r = e(t[a], a, n)) && s.push(r); else for (a in t)null != (r = e(t[a], a, n)) && s.push(r);
                return ot.apply([], s)
            },
            guid: 1,
            proxy: function (t, e) {
                var n, i, o;
                if ("string" == typeof e && (n = t[e], e = t, t = n), ft.isFunction(t))return i = it.call(arguments, 2), o = function () {
                    return t.apply(e || this, i.concat(it.call(arguments)))
                }, o.guid = t.guid = t.guid || ft.guid++, o
            },
            now: Date.now,
            support: dt
        }), "function" == typeof Symbol && (ft.fn[Symbol.iterator] = tt[Symbol.iterator]), ft.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (t, e) {
            st["[object " + e + "]"] = e.toLowerCase()
        });
        var gt = function (t) {
            function e(t, e, n, i) {
                var o, r, a, s, l, u, d, f = e && e.ownerDocument, p = e ? e.nodeType : 9;
                if (n = n || [], "string" != typeof t || !t || 1 !== p && 9 !== p && 11 !== p)return n;
                if (!i && ((e ? e.ownerDocument || e : H) !== D && I(e), e = e || D, L)) {
                    if (11 !== p && (l = gt.exec(t)))if (o = l[1]) {
                        if (9 === p) {
                            if (!(a = e.getElementById(o)))return n;
                            if (a.id === o)return n.push(a), n
                        } else if (f && (a = f.getElementById(o)) && R(e, a) && a.id === o)return n.push(a), n
                    } else {
                        if (l[2])return G.apply(n, e.getElementsByTagName(t)), n;
                        if ((o = l[3]) && w.getElementsByClassName && e.getElementsByClassName)return G.apply(n, e.getElementsByClassName(o)), n
                    }
                    if (w.qsa && !q[t + " "] && (!F || !F.test(t))) {
                        if (1 !== p)f = e, d = t; else if ("object" !== e.nodeName.toLowerCase()) {
                            for ((s = e.getAttribute("id")) ? s = s.replace(bt, wt) : e.setAttribute("id", s = W), u = S(t), r = u.length; r--;)u[r] = "#" + s + " " + h(u[r]);
                            d = u.join(","), f = mt.test(t) && c(e.parentNode) || e
                        }
                        if (d)try {
                            return G.apply(n, f.querySelectorAll(d)), n
                        } catch (t) {
                        } finally {
                            s === W && e.removeAttribute("id")
                        }
                    }
                }
                return k(t.replace(rt, "$1"), e, n, i)
            }

            function n() {
                function t(n, i) {
                    return e.push(n + " ") > x.cacheLength && delete t[e.shift()], t[n + " "] = i
                }

                var e = [];
                return t
            }

            function i(t) {
                return t[W] = !0, t
            }

            function o(t) {
                var e = D.createElement("fieldset");
                try {
                    return !!t(e)
                } catch (t) {
                    return !1
                } finally {
                    e.parentNode && e.parentNode.removeChild(e), e = null
                }
            }

            function r(t, e) {
                for (var n = t.split("|"), i = n.length; i--;)x.attrHandle[n[i]] = e
            }

            function a(t, e) {
                var n = e && t, i = n && 1 === t.nodeType && 1 === e.nodeType && t.sourceIndex - e.sourceIndex;
                if (i)return i;
                if (n)for (; n = n.nextSibling;)if (n === e)return -1;
                return t ? 1 : -1
            }

            function s(t) {
                return function (e) {
                    return "form" in e ? e.parentNode && e.disabled === !1 ? "label" in e ? "label" in e.parentNode ? e.parentNode.disabled === t : e.disabled === t : e.isDisabled === t || e.isDisabled !== !t && Ct(e) === t : e.disabled === t : "label" in e && e.disabled === t
                }
            }

            function l(t) {
                return i(function (e) {
                    return e = +e, i(function (n, i) {
                        for (var o, r = t([], n.length, e), a = r.length; a--;)n[o = r[a]] && (n[o] = !(i[o] = n[o]))
                    })
                })
            }

            function c(t) {
                return t && void 0 !== t.getElementsByTagName && t
            }

            function u() {
            }

            function h(t) {
                for (var e = 0, n = t.length, i = ""; e < n; e++)i += t[e].value;
                return i
            }

            function d(t, e, n) {
                var i = e.dir, o = e.next, r = o || i, a = n && "parentNode" === r, s = z++;
                return e.first ? function (e, n, o) {
                    for (; e = e[i];)if (1 === e.nodeType || a)return t(e, n, o);
                    return !1
                } : function (e, n, l) {
                    var c, u, h, d = [j, s];
                    if (l) {
                        for (; e = e[i];)if ((1 === e.nodeType || a) && t(e, n, l))return !0
                    } else for (; e = e[i];)if (1 === e.nodeType || a)if (h = e[W] || (e[W] = {}), u = h[e.uniqueID] || (h[e.uniqueID] = {}), o && o === e.nodeName.toLowerCase())e = e[i] || e; else {
                        if ((c = u[r]) && c[0] === j && c[1] === s)return d[2] = c[2];
                        if (u[r] = d, d[2] = t(e, n, l))return !0
                    }
                    return !1
                }
            }

            function f(t) {
                return t.length > 1 ? function (e, n, i) {
                    for (var o = t.length; o--;)if (!t[o](e, n, i))return !1;
                    return !0
                } : t[0]
            }

            function p(t, n, i) {
                for (var o = 0, r = n.length; o < r; o++)e(t, n[o], i);
                return i
            }

            function g(t, e, n, i, o) {
                for (var r, a = [], s = 0, l = t.length, c = null != e; s < l; s++)(r = t[s]) && (n && !n(r, i, o) || (a.push(r), c && e.push(s)));
                return a
            }

            function m(t, e, n, o, r, a) {
                return o && !o[W] && (o = m(o)), r && !r[W] && (r = m(r, a)), i(function (i, a, s, l) {
                    var c, u, h, d = [], f = [], m = a.length, v = i || p(e || "*", s.nodeType ? [s] : s, []), y = !t || !i && e ? v : g(v, d, t, s, l), b = n ? r || (i ? t : m || o) ? [] : a : y;
                    if (n && n(y, b, s, l), o)for (c = g(b, f), o(c, [], s, l), u = c.length; u--;)(h = c[u]) && (b[f[u]] = !(y[f[u]] = h));
                    if (i) {
                        if (r || t) {
                            if (r) {
                                for (c = [], u = b.length; u--;)(h = b[u]) && c.push(y[u] = h);
                                r(null, b = [], c, l)
                            }
                            for (u = b.length; u--;)(h = b[u]) && (c = r ? K(i, h) : d[u]) > -1 && (i[c] = !(a[c] = h))
                        }
                    } else b = g(b === a ? b.splice(m, b.length) : b), r ? r(null, a, b, l) : G.apply(a, b)
                })
            }

            function v(t) {
                for (var e, n, i, o = t.length, r = x.relative[t[0].type], a = r || x.relative[" "], s = r ? 1 : 0, l = d(function (t) {
                    return t === e
                }, a, !0), c = d(function (t) {
                    return K(e, t) > -1
                }, a, !0), u = [function (t, n, i) {
                    var o = !r && (i || n !== A) || ((e = n).nodeType ? l(t, n, i) : c(t, n, i));
                    return e = null, o
                }]; s < o; s++)if (n = x.relative[t[s].type])u = [d(f(u), n)]; else {
                    if (n = x.filter[t[s].type].apply(null, t[s].matches), n[W]) {
                        for (i = ++s; i < o && !x.relative[t[i].type]; i++);
                        return m(s > 1 && f(u), s > 1 && h(t.slice(0, s - 1).concat({value: " " === t[s - 2].type ? "*" : ""})).replace(rt, "$1"), n, s < i && v(t.slice(s, i)), i < o && v(t = t.slice(i)), i < o && h(t))
                    }
                    u.push(n)
                }
                return f(u)
            }

            function y(t, n) {
                var o = n.length > 0, r = t.length > 0, a = function (i, a, s, l, c) {
                    var u, h, d, f = 0, p = "0", m = i && [], v = [], y = A, b = i || r && x.find.TAG("*", c), w = j += null == y ? 1 : Math.random() || .1, C = b.length;
                    for (c && (A = a === D || a || c); p !== C && null != (u = b[p]); p++) {
                        if (r && u) {
                            for (h = 0, a || u.ownerDocument === D || (I(u), s = !L); d = t[h++];)if (d(u, a || D, s)) {
                                l.push(u);
                                break
                            }
                            c && (j = w)
                        }
                        o && ((u = !d && u) && f--, i && m.push(u))
                    }
                    if (f += p, o && p !== f) {
                        for (h = 0; d = n[h++];)d(m, v, a, s);
                        if (i) {
                            if (f > 0)for (; p--;)m[p] || v[p] || (v[p] = U.call(l));
                            v = g(v)
                        }
                        G.apply(l, v), c && !i && v.length > 0 && f + n.length > 1 && e.uniqueSort(l)
                    }
                    return c && (j = w, A = y), m
                };
                return o ? i(a) : a
            }

            var b, w, x, C, T, S, E, k, A, _, P, I, D, O, L, F, N, M, R, W = "sizzle" + 1 * new Date, H = t.document, j = 0, z = 0, V = n(), B = n(), q = n(), Y = function (t, e) {
                return t === e && (P = !0), 0
            }, X = {}.hasOwnProperty, $ = [], U = $.pop, Q = $.push, G = $.push, Z = $.slice, K = function (t, e) {
                for (var n = 0, i = t.length; n < i; n++)if (t[n] === e)return n;
                return -1
            }, J = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", tt = "[\\x20\\t\\r\\n\\f]", et = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+", nt = "\\[" + tt + "*(" + et + ")(?:" + tt + "*([*^$|!~]?=)" + tt + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + et + "))|)" + tt + "*\\]", it = ":(" + et + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + nt + ")*)|.*)\\)|)", ot = new RegExp(tt + "+", "g"), rt = new RegExp("^" + tt + "+|((?:^|[^\\\\])(?:\\\\.)*)" + tt + "+$", "g"), at = new RegExp("^" + tt + "*," + tt + "*"), st = new RegExp("^" + tt + "*([>+~]|" + tt + ")" + tt + "*"), lt = new RegExp("=" + tt + "*([^\\]'\"]*?)" + tt + "*\\]", "g"), ct = new RegExp(it), ut = new RegExp("^" + et + "$"), ht = {
                ID: new RegExp("^#(" + et + ")"),
                CLASS: new RegExp("^\\.(" + et + ")"),
                TAG: new RegExp("^(" + et + "|[*])"),
                ATTR: new RegExp("^" + nt),
                PSEUDO: new RegExp("^" + it),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + tt + "*(even|odd|(([+-]|)(\\d*)n|)" + tt + "*(?:([+-]|)" + tt + "*(\\d+)|))" + tt + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + J + ")$", "i"),
                needsContext: new RegExp("^" + tt + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + tt + "*((?:-\\d)?\\d*)" + tt + "*\\)|)(?=[^-]|$)", "i")
            }, dt = /^(?:input|select|textarea|button)$/i, ft = /^h\d$/i, pt = /^[^{]+\{\s*\[native \w/, gt = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, mt = /[+~]/, vt = new RegExp("\\\\([\\da-f]{1,6}" + tt + "?|(" + tt + ")|.)", "ig"), yt = function (t, e, n) {
                var i = "0x" + e - 65536;
                return i !== i || n ? e : i < 0 ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320)
            }, bt = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g, wt = function (t, e) {
                return e ? "\0" === t ? "ï¿½" : t.slice(0, -1) + "\\" + t.charCodeAt(t.length - 1).toString(16) + " " : "\\" + t
            }, xt = function () {
                I()
            }, Ct = d(function (t) {
                return t.disabled === !0 && ("form" in t || "label" in t)
            }, {dir: "parentNode", next: "legend"});
            try {
                G.apply($ = Z.call(H.childNodes), H.childNodes), $[H.childNodes.length].nodeType
            } catch (t) {
                G = {
                    apply: $.length ? function (t, e) {
                        Q.apply(t, Z.call(e))
                    } : function (t, e) {
                        for (var n = t.length, i = 0; t[n++] = e[i++];);
                        t.length = n - 1
                    }
                }
            }
            w = e.support = {}, T = e.isXML = function (t) {
                var e = t && (t.ownerDocument || t).documentElement;
                return !!e && "HTML" !== e.nodeName
            }, I = e.setDocument = function (t) {
                var e, n, i = t ? t.ownerDocument || t : H;
                return i !== D && 9 === i.nodeType && i.documentElement ? (D = i, O = D.documentElement, L = !T(D), H !== D && (n = D.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", xt, !1) : n.attachEvent && n.attachEvent("onunload", xt)), w.attributes = o(function (t) {
                    return t.className = "i", !t.getAttribute("className")
                }), w.getElementsByTagName = o(function (t) {
                    return t.appendChild(D.createComment("")), !t.getElementsByTagName("*").length
                }), w.getElementsByClassName = pt.test(D.getElementsByClassName), w.getById = o(function (t) {
                    return O.appendChild(t).id = W, !D.getElementsByName || !D.getElementsByName(W).length
                }), w.getById ? (x.filter.ID = function (t) {
                    var e = t.replace(vt, yt);
                    return function (t) {
                        return t.getAttribute("id") === e
                    }
                }, x.find.ID = function (t, e) {
                    if (void 0 !== e.getElementById && L) {
                        var n = e.getElementById(t);
                        return n ? [n] : []
                    }
                }) : (x.filter.ID = function (t) {
                    var e = t.replace(vt, yt);
                    return function (t) {
                        var n = void 0 !== t.getAttributeNode && t.getAttributeNode("id");
                        return n && n.value === e
                    }
                }, x.find.ID = function (t, e) {
                    if (void 0 !== e.getElementById && L) {
                        var n, i, o, r = e.getElementById(t);
                        if (r) {
                            if ((n = r.getAttributeNode("id")) && n.value === t)return [r];
                            for (o = e.getElementsByName(t), i = 0; r = o[i++];)if ((n = r.getAttributeNode("id")) && n.value === t)return [r]
                        }
                        return []
                    }
                }), x.find.TAG = w.getElementsByTagName ? function (t, e) {
                    return void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t) : w.qsa ? e.querySelectorAll(t) : void 0
                } : function (t, e) {
                    var n, i = [], o = 0, r = e.getElementsByTagName(t);
                    if ("*" === t) {
                        for (; n = r[o++];)1 === n.nodeType && i.push(n);
                        return i
                    }
                    return r
                }, x.find.CLASS = w.getElementsByClassName && function (t, e) {
                        if (void 0 !== e.getElementsByClassName && L)return e.getElementsByClassName(t)
                    }, N = [], F = [], (w.qsa = pt.test(D.querySelectorAll)) && (o(function (t) {
                    O.appendChild(t).innerHTML = "<a id='" + W + "'></a><select id='" + W + "-\r\\' msallowcapture=''><option selected=''></option></select>", t.querySelectorAll("[msallowcapture^='']").length && F.push("[*^$]=" + tt + "*(?:''|\"\")"), t.querySelectorAll("[selected]").length || F.push("\\[" + tt + "*(?:value|" + J + ")"), t.querySelectorAll("[id~=" + W + "-]").length || F.push("~="), t.querySelectorAll(":checked").length || F.push(":checked"), t.querySelectorAll("a#" + W + "+*").length || F.push(".#.+[+~]")
                }), o(function (t) {
                    t.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                    var e = D.createElement("input");
                    e.setAttribute("type", "hidden"), t.appendChild(e).setAttribute("name", "D"), t.querySelectorAll("[name=d]").length && F.push("name" + tt + "*[*^$|!~]?="), 2 !== t.querySelectorAll(":enabled").length && F.push(":enabled", ":disabled"), O.appendChild(t).disabled = !0, 2 !== t.querySelectorAll(":disabled").length && F.push(":enabled", ":disabled"), t.querySelectorAll("*,:x"), F.push(",.*:")
                })), (w.matchesSelector = pt.test(M = O.matches || O.webkitMatchesSelector || O.mozMatchesSelector || O.oMatchesSelector || O.msMatchesSelector)) && o(function (t) {
                    w.disconnectedMatch = M.call(t, "*"), M.call(t, "[s!='']:x"), N.push("!=", it)
                }), F = F.length && new RegExp(F.join("|")), N = N.length && new RegExp(N.join("|")), e = pt.test(O.compareDocumentPosition), R = e || pt.test(O.contains) ? function (t, e) {
                    var n = 9 === t.nodeType ? t.documentElement : t, i = e && e.parentNode;
                    return t === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(i)))
                } : function (t, e) {
                    if (e)for (; e = e.parentNode;)if (e === t)return !0;
                    return !1
                }, Y = e ? function (t, e) {
                    if (t === e)return P = !0, 0;
                    var n = !t.compareDocumentPosition - !e.compareDocumentPosition;
                    return n ? n : (n = (t.ownerDocument || t) === (e.ownerDocument || e) ? t.compareDocumentPosition(e) : 1, 1 & n || !w.sortDetached && e.compareDocumentPosition(t) === n ? t === D || t.ownerDocument === H && R(H, t) ? -1 : e === D || e.ownerDocument === H && R(H, e) ? 1 : _ ? K(_, t) - K(_, e) : 0 : 4 & n ? -1 : 1)
                } : function (t, e) {
                    if (t === e)return P = !0, 0;
                    var n, i = 0, o = t.parentNode, r = e.parentNode, s = [t], l = [e];
                    if (!o || !r)return t === D ? -1 : e === D ? 1 : o ? -1 : r ? 1 : _ ? K(_, t) - K(_, e) : 0;
                    if (o === r)return a(t, e);
                    for (n = t; n = n.parentNode;)s.unshift(n);
                    for (n = e; n = n.parentNode;)l.unshift(n);
                    for (; s[i] === l[i];)i++;
                    return i ? a(s[i], l[i]) : s[i] === H ? -1 : l[i] === H ? 1 : 0
                }, D) : D
            }, e.matches = function (t, n) {
                return e(t, null, null, n)
            }, e.matchesSelector = function (t, n) {
                if ((t.ownerDocument || t) !== D && I(t), n = n.replace(lt, "='$1']"), w.matchesSelector && L && !q[n + " "] && (!N || !N.test(n)) && (!F || !F.test(n)))try {
                    var i = M.call(t, n);
                    if (i || w.disconnectedMatch || t.document && 11 !== t.document.nodeType)return i
                } catch (t) {
                }
                return e(n, D, null, [t]).length > 0
            }, e.contains = function (t, e) {
                return (t.ownerDocument || t) !== D && I(t), R(t, e)
            }, e.attr = function (t, e) {
                (t.ownerDocument || t) !== D && I(t);
                var n = x.attrHandle[e.toLowerCase()], i = n && X.call(x.attrHandle, e.toLowerCase()) ? n(t, e, !L) : void 0;
                return void 0 !== i ? i : w.attributes || !L ? t.getAttribute(e) : (i = t.getAttributeNode(e)) && i.specified ? i.value : null
            }, e.escape = function (t) {
                return (t + "").replace(bt, wt)
            }, e.error = function (t) {
                throw new Error("Syntax error, unrecognized expression: " + t)
            }, e.uniqueSort = function (t) {
                var e, n = [], i = 0, o = 0;
                if (P = !w.detectDuplicates, _ = !w.sortStable && t.slice(0), t.sort(Y), P) {
                    for (; e = t[o++];)e === t[o] && (i = n.push(o));
                    for (; i--;)t.splice(n[i], 1)
                }
                return _ = null, t
            }, C = e.getText = function (t) {
                var e, n = "", i = 0, o = t.nodeType;
                if (o) {
                    if (1 === o || 9 === o || 11 === o) {
                        if ("string" == typeof t.textContent)return t.textContent;
                        for (t = t.firstChild; t; t = t.nextSibling)n += C(t)
                    } else if (3 === o || 4 === o)return t.nodeValue
                } else for (; e = t[i++];)n += C(e);
                return n
            }, x = e.selectors = {
                cacheLength: 50,
                createPseudo: i,
                match: ht,
                attrHandle: {},
                find: {},
                relative: {
                    ">": {dir: "parentNode", first: !0},
                    " ": {dir: "parentNode"},
                    "+": {dir: "previousSibling", first: !0},
                    "~": {dir: "previousSibling"}
                },
                preFilter: {
                    ATTR: function (t) {
                        return t[1] = t[1].replace(vt, yt), t[3] = (t[3] || t[4] || t[5] || "").replace(vt, yt), "~=" === t[2] && (t[3] = " " + t[3] + " "), t.slice(0, 4)
                    }, CHILD: function (t) {
                        return t[1] = t[1].toLowerCase(), "nth" === t[1].slice(0, 3) ? (t[3] || e.error(t[0]), t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3])), t[5] = +(t[7] + t[8] || "odd" === t[3])) : t[3] && e.error(t[0]), t
                    }, PSEUDO: function (t) {
                        var e, n = !t[6] && t[2];
                        return ht.CHILD.test(t[0]) ? null : (t[3] ? t[2] = t[4] || t[5] || "" : n && ct.test(n) && (e = S(n, !0)) && (e = n.indexOf(")", n.length - e) - n.length) && (t[0] = t[0].slice(0, e), t[2] = n.slice(0, e)), t.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function (t) {
                        var e = t.replace(vt, yt).toLowerCase();
                        return "*" === t ? function () {
                            return !0
                        } : function (t) {
                            return t.nodeName && t.nodeName.toLowerCase() === e
                        }
                    }, CLASS: function (t) {
                        var e = V[t + " "];
                        return e || (e = new RegExp("(^|" + tt + ")" + t + "(" + tt + "|$)")) && V(t, function (t) {
                                return e.test("string" == typeof t.className && t.className || void 0 !== t.getAttribute && t.getAttribute("class") || "")
                            })
                    }, ATTR: function (t, n, i) {
                        return function (o) {
                            var r = e.attr(o, t);
                            return null == r ? "!=" === n : !n || (r += "", "=" === n ? r === i : "!=" === n ? r !== i : "^=" === n ? i && 0 === r.indexOf(i) : "*=" === n ? i && r.indexOf(i) > -1 : "$=" === n ? i && r.slice(-i.length) === i : "~=" === n ? (" " + r.replace(ot, " ") + " ").indexOf(i) > -1 : "|=" === n && (r === i || r.slice(0, i.length + 1) === i + "-"))
                        }
                    }, CHILD: function (t, e, n, i, o) {
                        var r = "nth" !== t.slice(0, 3), a = "last" !== t.slice(-4), s = "of-type" === e;
                        return 1 === i && 0 === o ? function (t) {
                            return !!t.parentNode
                        } : function (e, n, l) {
                            var c, u, h, d, f, p, g = r !== a ? "nextSibling" : "previousSibling", m = e.parentNode, v = s && e.nodeName.toLowerCase(), y = !l && !s, b = !1;
                            if (m) {
                                if (r) {
                                    for (; g;) {
                                        for (d = e; d = d[g];)if (s ? d.nodeName.toLowerCase() === v : 1 === d.nodeType)return !1;
                                        p = g = "only" === t && !p && "nextSibling"
                                    }
                                    return !0
                                }
                                if (p = [a ? m.firstChild : m.lastChild], a && y) {
                                    for (d = m, h = d[W] || (d[W] = {}), u = h[d.uniqueID] || (h[d.uniqueID] = {}), c = u[t] || [], f = c[0] === j && c[1], b = f && c[2], d = f && m.childNodes[f]; d = ++f && d && d[g] || (b = f = 0) || p.pop();)if (1 === d.nodeType && ++b && d === e) {
                                        u[t] = [j, f, b];
                                        break
                                    }
                                } else if (y && (d = e, h = d[W] || (d[W] = {}), u = h[d.uniqueID] || (h[d.uniqueID] = {}), c = u[t] || [], f = c[0] === j && c[1], b = f),
                                    b === !1)for (; (d = ++f && d && d[g] || (b = f = 0) || p.pop()) && ((s ? d.nodeName.toLowerCase() !== v : 1 !== d.nodeType) || !++b || (y && (h = d[W] || (d[W] = {}), u = h[d.uniqueID] || (h[d.uniqueID] = {}), u[t] = [j, b]), d !== e)););
                                return (b -= o) === i || b % i == 0 && b / i >= 0
                            }
                        }
                    }, PSEUDO: function (t, n) {
                        var o, r = x.pseudos[t] || x.setFilters[t.toLowerCase()] || e.error("unsupported pseudo: " + t);
                        return r[W] ? r(n) : r.length > 1 ? (o = [t, t, "", n], x.setFilters.hasOwnProperty(t.toLowerCase()) ? i(function (t, e) {
                            for (var i, o = r(t, n), a = o.length; a--;)i = K(t, o[a]), t[i] = !(e[i] = o[a])
                        }) : function (t) {
                            return r(t, 0, o)
                        }) : r
                    }
                },
                pseudos: {
                    not: i(function (t) {
                        var e = [], n = [], o = E(t.replace(rt, "$1"));
                        return o[W] ? i(function (t, e, n, i) {
                            for (var r, a = o(t, null, i, []), s = t.length; s--;)(r = a[s]) && (t[s] = !(e[s] = r))
                        }) : function (t, i, r) {
                            return e[0] = t, o(e, null, r, n), e[0] = null, !n.pop()
                        }
                    }), has: i(function (t) {
                        return function (n) {
                            return e(t, n).length > 0
                        }
                    }), contains: i(function (t) {
                        return t = t.replace(vt, yt), function (e) {
                            return (e.textContent || e.innerText || C(e)).indexOf(t) > -1
                        }
                    }), lang: i(function (t) {
                        return ut.test(t || "") || e.error("unsupported lang: " + t), t = t.replace(vt, yt).toLowerCase(), function (e) {
                            var n;
                            do {
                                if (n = L ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang"))return (n = n.toLowerCase()) === t || 0 === n.indexOf(t + "-")
                            } while ((e = e.parentNode) && 1 === e.nodeType);
                            return !1
                        }
                    }), target: function (e) {
                        var n = t.location && t.location.hash;
                        return n && n.slice(1) === e.id
                    }, root: function (t) {
                        return t === O
                    }, focus: function (t) {
                        return t === D.activeElement && (!D.hasFocus || D.hasFocus()) && !!(t.type || t.href || ~t.tabIndex)
                    }, enabled: s(!1), disabled: s(!0), checked: function (t) {
                        var e = t.nodeName.toLowerCase();
                        return "input" === e && !!t.checked || "option" === e && !!t.selected
                    }, selected: function (t) {
                        return t.parentNode && t.parentNode.selectedIndex, t.selected === !0
                    }, empty: function (t) {
                        for (t = t.firstChild; t; t = t.nextSibling)if (t.nodeType < 6)return !1;
                        return !0
                    }, parent: function (t) {
                        return !x.pseudos.empty(t)
                    }, header: function (t) {
                        return ft.test(t.nodeName)
                    }, input: function (t) {
                        return dt.test(t.nodeName)
                    }, button: function (t) {
                        var e = t.nodeName.toLowerCase();
                        return "input" === e && "button" === t.type || "button" === e
                    }, text: function (t) {
                        var e;
                        return "input" === t.nodeName.toLowerCase() && "text" === t.type && (null == (e = t.getAttribute("type")) || "text" === e.toLowerCase())
                    }, first: l(function () {
                        return [0]
                    }), last: l(function (t, e) {
                        return [e - 1]
                    }), eq: l(function (t, e, n) {
                        return [n < 0 ? n + e : n]
                    }), even: l(function (t, e) {
                        for (var n = 0; n < e; n += 2)t.push(n);
                        return t
                    }), odd: l(function (t, e) {
                        for (var n = 1; n < e; n += 2)t.push(n);
                        return t
                    }), lt: l(function (t, e, n) {
                        for (var i = n < 0 ? n + e : n; --i >= 0;)t.push(i);
                        return t
                    }), gt: l(function (t, e, n) {
                        for (var i = n < 0 ? n + e : n; ++i < e;)t.push(i);
                        return t
                    })
                }
            }, x.pseudos.nth = x.pseudos.eq;
            for (b in{radio: !0, checkbox: !0, file: !0, password: !0, image: !0})x.pseudos[b] = function (t) {
                return function (e) {
                    return "input" === e.nodeName.toLowerCase() && e.type === t
                }
            }(b);
            for (b in{submit: !0, reset: !0})x.pseudos[b] = function (t) {
                return function (e) {
                    var n = e.nodeName.toLowerCase();
                    return ("input" === n || "button" === n) && e.type === t
                }
            }(b);
            return u.prototype = x.filters = x.pseudos, x.setFilters = new u, S = e.tokenize = function (t, n) {
                var i, o, r, a, s, l, c, u = B[t + " "];
                if (u)return n ? 0 : u.slice(0);
                for (s = t, l = [], c = x.preFilter; s;) {
                    i && !(o = at.exec(s)) || (o && (s = s.slice(o[0].length) || s), l.push(r = [])), i = !1, (o = st.exec(s)) && (i = o.shift(), r.push({
                        value: i,
                        type: o[0].replace(rt, " ")
                    }), s = s.slice(i.length));
                    for (a in x.filter)!(o = ht[a].exec(s)) || c[a] && !(o = c[a](o)) || (i = o.shift(), r.push({
                        value: i,
                        type: a,
                        matches: o
                    }), s = s.slice(i.length));
                    if (!i)break
                }
                return n ? s.length : s ? e.error(t) : B(t, l).slice(0)
            }, E = e.compile = function (t, e) {
                var n, i = [], o = [], r = q[t + " "];
                if (!r) {
                    for (e || (e = S(t)), n = e.length; n--;)r = v(e[n]), r[W] ? i.push(r) : o.push(r);
                    r = q(t, y(o, i)), r.selector = t
                }
                return r
            }, k = e.select = function (t, e, n, i) {
                var o, r, a, s, l, u = "function" == typeof t && t, d = !i && S(t = u.selector || t);
                if (n = n || [], 1 === d.length) {
                    if (r = d[0] = d[0].slice(0), r.length > 2 && "ID" === (a = r[0]).type && 9 === e.nodeType && L && x.relative[r[1].type]) {
                        if (!(e = (x.find.ID(a.matches[0].replace(vt, yt), e) || [])[0]))return n;
                        u && (e = e.parentNode), t = t.slice(r.shift().value.length)
                    }
                    for (o = ht.needsContext.test(t) ? 0 : r.length; o-- && (a = r[o], !x.relative[s = a.type]);)if ((l = x.find[s]) && (i = l(a.matches[0].replace(vt, yt), mt.test(r[0].type) && c(e.parentNode) || e))) {
                        if (r.splice(o, 1), !(t = i.length && h(r)))return G.apply(n, i), n;
                        break
                    }
                }
                return (u || E(t, d))(i, e, !L, n, !e || mt.test(t) && c(e.parentNode) || e), n
            }, w.sortStable = W.split("").sort(Y).join("") === W, w.detectDuplicates = !!P, I(), w.sortDetached = o(function (t) {
                return 1 & t.compareDocumentPosition(D.createElement("fieldset"))
            }), o(function (t) {
                return t.innerHTML = "<a href='#'></a>", "#" === t.firstChild.getAttribute("href")
            }) || r("type|href|height|width", function (t, e, n) {
                if (!n)return t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2)
            }), w.attributes && o(function (t) {
                return t.innerHTML = "<input/>", t.firstChild.setAttribute("value", ""), "" === t.firstChild.getAttribute("value")
            }) || r("value", function (t, e, n) {
                if (!n && "input" === t.nodeName.toLowerCase())return t.defaultValue
            }), o(function (t) {
                return null == t.getAttribute("disabled")
            }) || r(J, function (t, e, n) {
                var i;
                if (!n)return t[e] === !0 ? e.toLowerCase() : (i = t.getAttributeNode(e)) && i.specified ? i.value : null
            }), e
        }(t);
        ft.find = gt, ft.expr = gt.selectors, ft.expr[":"] = ft.expr.pseudos, ft.uniqueSort = ft.unique = gt.uniqueSort, ft.text = gt.getText, ft.isXMLDoc = gt.isXML, ft.contains = gt.contains, ft.escapeSelector = gt.escape;
        var mt = function (t, e, n) {
            for (var i = [], o = void 0 !== n; (t = t[e]) && 9 !== t.nodeType;)if (1 === t.nodeType) {
                if (o && ft(t).is(n))break;
                i.push(t)
            }
            return i
        }, vt = function (t, e) {
            for (var n = []; t; t = t.nextSibling)1 === t.nodeType && t !== e && n.push(t);
            return n
        }, yt = ft.expr.match.needsContext, bt = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i, wt = /^.[^:#\[\.,]*$/;
        ft.filter = function (t, e, n) {
            var i = e[0];
            return n && (t = ":not(" + t + ")"), 1 === e.length && 1 === i.nodeType ? ft.find.matchesSelector(i, t) ? [i] : [] : ft.find.matches(t, ft.grep(e, function (t) {
                return 1 === t.nodeType
            }))
        }, ft.fn.extend({
            find: function (t) {
                var e, n, i = this.length, o = this;
                if ("string" != typeof t)return this.pushStack(ft(t).filter(function () {
                    for (e = 0; e < i; e++)if (ft.contains(o[e], this))return !0
                }));
                for (n = this.pushStack([]), e = 0; e < i; e++)ft.find(t, o[e], n);
                return i > 1 ? ft.uniqueSort(n) : n
            }, filter: function (t) {
                return this.pushStack(o(this, t || [], !1))
            }, not: function (t) {
                return this.pushStack(o(this, t || [], !0))
            }, is: function (t) {
                return !!o(this, "string" == typeof t && yt.test(t) ? ft(t) : t || [], !1).length
            }
        });
        var xt, Ct = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
        (ft.fn.init = function (t, e, n) {
            var i, o;
            if (!t)return this;
            if (n = n || xt, "string" == typeof t) {
                if (!(i = "<" === t[0] && ">" === t[t.length - 1] && t.length >= 3 ? [null, t, null] : Ct.exec(t)) || !i[1] && e)return !e || e.jquery ? (e || n).find(t) : this.constructor(e).find(t);
                if (i[1]) {
                    if (e = e instanceof ft ? e[0] : e, ft.merge(this, ft.parseHTML(i[1], e && e.nodeType ? e.ownerDocument || e : et, !0)), bt.test(i[1]) && ft.isPlainObject(e))for (i in e)ft.isFunction(this[i]) ? this[i](e[i]) : this.attr(i, e[i]);
                    return this
                }
                return o = et.getElementById(i[2]), o && (this[0] = o, this.length = 1), this
            }
            return t.nodeType ? (this[0] = t, this.length = 1, this) : ft.isFunction(t) ? void 0 !== n.ready ? n.ready(t) : t(ft) : ft.makeArray(t, this)
        }).prototype = ft.fn, xt = ft(et);
        var Tt = /^(?:parents|prev(?:Until|All))/, St = {children: !0, contents: !0, next: !0, prev: !0};
        ft.fn.extend({
            has: function (t) {
                var e = ft(t, this), n = e.length;
                return this.filter(function () {
                    for (var t = 0; t < n; t++)if (ft.contains(this, e[t]))return !0
                })
            }, closest: function (t, e) {
                var n, i = 0, o = this.length, r = [], a = "string" != typeof t && ft(t);
                if (!yt.test(t))for (; i < o; i++)for (n = this[i]; n && n !== e; n = n.parentNode)if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && ft.find.matchesSelector(n, t))) {
                    r.push(n);
                    break
                }
                return this.pushStack(r.length > 1 ? ft.uniqueSort(r) : r)
            }, index: function (t) {
                return t ? "string" == typeof t ? at.call(ft(t), this[0]) : at.call(this, t.jquery ? t[0] : t) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
            }, add: function (t, e) {
                return this.pushStack(ft.uniqueSort(ft.merge(this.get(), ft(t, e))))
            }, addBack: function (t) {
                return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
            }
        }), ft.each({
            parent: function (t) {
                var e = t.parentNode;
                return e && 11 !== e.nodeType ? e : null
            }, parents: function (t) {
                return mt(t, "parentNode")
            }, parentsUntil: function (t, e, n) {
                return mt(t, "parentNode", n)
            }, next: function (t) {
                return r(t, "nextSibling")
            }, prev: function (t) {
                return r(t, "previousSibling")
            }, nextAll: function (t) {
                return mt(t, "nextSibling")
            }, prevAll: function (t) {
                return mt(t, "previousSibling")
            }, nextUntil: function (t, e, n) {
                return mt(t, "nextSibling", n)
            }, prevUntil: function (t, e, n) {
                return mt(t, "previousSibling", n)
            }, siblings: function (t) {
                return vt((t.parentNode || {}).firstChild, t)
            }, children: function (t) {
                return vt(t.firstChild)
            }, contents: function (t) {
                return t.contentDocument || ft.merge([], t.childNodes)
            }
        }, function (t, e) {
            ft.fn[t] = function (n, i) {
                var o = ft.map(this, e, n);
                return "Until" !== t.slice(-5) && (i = n), i && "string" == typeof i && (o = ft.filter(i, o)), this.length > 1 && (St[t] || ft.uniqueSort(o), Tt.test(t) && o.reverse()), this.pushStack(o)
            }
        });
        var Et = /[^\x20\t\r\n\f]+/g;
        ft.Callbacks = function (t) {
            t = "string" == typeof t ? a(t) : ft.extend({}, t);
            var e, n, i, o, r = [], s = [], l = -1, c = function () {
                for (o = t.once, i = e = !0; s.length; l = -1)for (n = s.shift(); ++l < r.length;)r[l].apply(n[0], n[1]) === !1 && t.stopOnFalse && (l = r.length, n = !1);
                t.memory || (n = !1), e = !1, o && (r = n ? [] : "")
            }, u = {
                add: function () {
                    return r && (n && !e && (l = r.length - 1, s.push(n)), function e(n) {
                        ft.each(n, function (n, i) {
                            ft.isFunction(i) ? t.unique && u.has(i) || r.push(i) : i && i.length && "string" !== ft.type(i) && e(i)
                        })
                    }(arguments), n && !e && c()), this
                }, remove: function () {
                    return ft.each(arguments, function (t, e) {
                        for (var n; (n = ft.inArray(e, r, n)) > -1;)r.splice(n, 1), n <= l && l--
                    }), this
                }, has: function (t) {
                    return t ? ft.inArray(t, r) > -1 : r.length > 0
                }, empty: function () {
                    return r && (r = []), this
                }, disable: function () {
                    return o = s = [], r = n = "", this
                }, disabled: function () {
                    return !r
                }, lock: function () {
                    return o = s = [], n || e || (r = n = ""), this
                }, locked: function () {
                    return !!o
                }, fireWith: function (t, n) {
                    return o || (n = n || [], n = [t, n.slice ? n.slice() : n], s.push(n), e || c()), this
                }, fire: function () {
                    return u.fireWith(this, arguments), this
                }, fired: function () {
                    return !!i
                }
            };
            return u
        }, ft.extend({
            Deferred: function (e) {
                var n = [["notify", "progress", ft.Callbacks("memory"), ft.Callbacks("memory"), 2], ["resolve", "done", ft.Callbacks("once memory"), ft.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", ft.Callbacks("once memory"), ft.Callbacks("once memory"), 1, "rejected"]], i = "pending", o = {
                    state: function () {
                        return i
                    }, always: function () {
                        return r.done(arguments).fail(arguments), this
                    }, catch: function (t) {
                        return o.then(null, t)
                    }, pipe: function () {
                        var t = arguments;
                        return ft.Deferred(function (e) {
                            ft.each(n, function (n, i) {
                                var o = ft.isFunction(t[i[4]]) && t[i[4]];
                                r[i[1]](function () {
                                    var t = o && o.apply(this, arguments);
                                    t && ft.isFunction(t.promise) ? t.promise().progress(e.notify).done(e.resolve).fail(e.reject) : e[i[0] + "With"](this, o ? [t] : arguments)
                                })
                            }), t = null
                        }).promise()
                    }, then: function (e, i, o) {
                        function r(e, n, i, o) {
                            return function () {
                                var c = this, u = arguments, h = function () {
                                    var t, h;
                                    if (!(e < a)) {
                                        if ((t = i.apply(c, u)) === n.promise())throw new TypeError("Thenable self-resolution");
                                        h = t && ("object" == typeof t || "function" == typeof t) && t.then, ft.isFunction(h) ? o ? h.call(t, r(a, n, s, o), r(a, n, l, o)) : (a++, h.call(t, r(a, n, s, o), r(a, n, l, o), r(a, n, s, n.notifyWith))) : (i !== s && (c = void 0, u = [t]), (o || n.resolveWith)(c, u))
                                    }
                                }, d = o ? h : function () {
                                    try {
                                        h()
                                    } catch (t) {
                                        ft.Deferred.exceptionHook && ft.Deferred.exceptionHook(t, d.stackTrace), e + 1 >= a && (i !== l && (c = void 0, u = [t]), n.rejectWith(c, u))
                                    }
                                };
                                e ? d() : (ft.Deferred.getStackHook && (d.stackTrace = ft.Deferred.getStackHook()), t.setTimeout(d))
                            }
                        }

                        var a = 0;
                        return ft.Deferred(function (t) {
                            n[0][3].add(r(0, t, ft.isFunction(o) ? o : s, t.notifyWith)), n[1][3].add(r(0, t, ft.isFunction(e) ? e : s)), n[2][3].add(r(0, t, ft.isFunction(i) ? i : l))
                        }).promise()
                    }, promise: function (t) {
                        return null != t ? ft.extend(t, o) : o
                    }
                }, r = {};
                return ft.each(n, function (t, e) {
                    var a = e[2], s = e[5];
                    o[e[1]] = a.add, s && a.add(function () {
                        i = s
                    }, n[3 - t][2].disable, n[0][2].lock), a.add(e[3].fire), r[e[0]] = function () {
                        return r[e[0] + "With"](this === r ? void 0 : this, arguments), this
                    }, r[e[0] + "With"] = a.fireWith
                }), o.promise(r), e && e.call(r, r), r
            }, when: function (t) {
                var e = arguments.length, n = e, i = Array(n), o = it.call(arguments), r = ft.Deferred(), a = function (t) {
                    return function (n) {
                        i[t] = this, o[t] = arguments.length > 1 ? it.call(arguments) : n, --e || r.resolveWith(i, o)
                    }
                };
                if (e <= 1 && (c(t, r.done(a(n)).resolve, r.reject), "pending" === r.state() || ft.isFunction(o[n] && o[n].then)))return r.then();
                for (; n--;)c(o[n], a(n), r.reject);
                return r.promise()
            }
        });
        var kt = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
        ft.Deferred.exceptionHook = function (e, n) {
            t.console && t.console.warn && e && kt.test(e.name) && t.console.warn("jQuery.Deferred exception: " + e.message, e.stack, n)
        }, ft.readyException = function (e) {
            t.setTimeout(function () {
                throw e
            })
        };
        var At = ft.Deferred();
        ft.fn.ready = function (t) {
            return At.then(t).catch(function (t) {
                ft.readyException(t)
            }), this
        }, ft.extend({
            isReady: !1, readyWait: 1, holdReady: function (t) {
                t ? ft.readyWait++ : ft.ready(!0)
            }, ready: function (t) {
                (t === !0 ? --ft.readyWait : ft.isReady) || (ft.isReady = !0, t !== !0 && --ft.readyWait > 0 || At.resolveWith(et, [ft]))
            }
        }), ft.ready.then = At.then, "complete" === et.readyState || "loading" !== et.readyState && !et.documentElement.doScroll ? t.setTimeout(ft.ready) : (et.addEventListener("DOMContentLoaded", u), t.addEventListener("load", u));
        var _t = function (t, e, n, i, o, r, a) {
            var s = 0, l = t.length, c = null == n;
            if ("object" === ft.type(n)) {
                o = !0;
                for (s in n)_t(t, e, s, n[s], !0, r, a)
            } else if (void 0 !== i && (o = !0, ft.isFunction(i) || (a = !0), c && (a ? (e.call(t, i), e = null) : (c = e, e = function (t, e, n) {
                    return c.call(ft(t), n)
                })), e))for (; s < l; s++)e(t[s], n, a ? i : i.call(t[s], s, e(t[s], n)));
            return o ? t : c ? e.call(t) : l ? e(t[0], n) : r
        }, Pt = function (t) {
            return 1 === t.nodeType || 9 === t.nodeType || !+t.nodeType
        };
        h.uid = 1, h.prototype = {
            cache: function (t) {
                var e = t[this.expando];
                return e || (e = {}, Pt(t) && (t.nodeType ? t[this.expando] = e : Object.defineProperty(t, this.expando, {
                    value: e,
                    configurable: !0
                }))), e
            }, set: function (t, e, n) {
                var i, o = this.cache(t);
                if ("string" == typeof e)o[ft.camelCase(e)] = n; else for (i in e)o[ft.camelCase(i)] = e[i];
                return o
            }, get: function (t, e) {
                return void 0 === e ? this.cache(t) : t[this.expando] && t[this.expando][ft.camelCase(e)]
            }, access: function (t, e, n) {
                return void 0 === e || e && "string" == typeof e && void 0 === n ? this.get(t, e) : (this.set(t, e, n), void 0 !== n ? n : e)
            }, remove: function (t, e) {
                var n, i = t[this.expando];
                if (void 0 !== i) {
                    if (void 0 !== e) {
                        ft.isArray(e) ? e = e.map(ft.camelCase) : (e = ft.camelCase(e), e = e in i ? [e] : e.match(Et) || []), n = e.length;
                        for (; n--;)delete i[e[n]]
                    }
                    (void 0 === e || ft.isEmptyObject(i)) && (t.nodeType ? t[this.expando] = void 0 : delete t[this.expando])
                }
            }, hasData: function (t) {
                var e = t[this.expando];
                return void 0 !== e && !ft.isEmptyObject(e)
            }
        };
        var It = new h, Dt = new h, Ot = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, Lt = /[A-Z]/g;
        ft.extend({
            hasData: function (t) {
                return Dt.hasData(t) || It.hasData(t)
            }, data: function (t, e, n) {
                return Dt.access(t, e, n)
            }, removeData: function (t, e) {
                Dt.remove(t, e)
            }, _data: function (t, e, n) {
                return It.access(t, e, n)
            }, _removeData: function (t, e) {
                It.remove(t, e)
            }
        }), ft.fn.extend({
            data: function (t, e) {
                var n, i, o, r = this[0], a = r && r.attributes;
                if (void 0 === t) {
                    if (this.length && (o = Dt.get(r), 1 === r.nodeType && !It.get(r, "hasDataAttrs"))) {
                        for (n = a.length; n--;)a[n] && (i = a[n].name, 0 === i.indexOf("data-") && (i = ft.camelCase(i.slice(5)), f(r, i, o[i])));
                        It.set(r, "hasDataAttrs", !0)
                    }
                    return o
                }
                return "object" == typeof t ? this.each(function () {
                    Dt.set(this, t)
                }) : _t(this, function (e) {
                    var n;
                    if (r && void 0 === e) {
                        if (void 0 !== (n = Dt.get(r, t)))return n;
                        if (void 0 !== (n = f(r, t)))return n
                    } else this.each(function () {
                        Dt.set(this, t, e)
                    })
                }, null, e, arguments.length > 1, null, !0)
            }, removeData: function (t) {
                return this.each(function () {
                    Dt.remove(this, t)
                })
            }
        }), ft.extend({
            queue: function (t, e, n) {
                var i;
                if (t)return e = (e || "fx") + "queue", i = It.get(t, e), n && (!i || ft.isArray(n) ? i = It.access(t, e, ft.makeArray(n)) : i.push(n)), i || []
            }, dequeue: function (t, e) {
                e = e || "fx";
                var n = ft.queue(t, e), i = n.length, o = n.shift(), r = ft._queueHooks(t, e), a = function () {
                    ft.dequeue(t, e)
                };
                "inprogress" === o && (o = n.shift(), i--), o && ("fx" === e && n.unshift("inprogress"), delete r.stop, o.call(t, a, r)), !i && r && r.empty.fire()
            }, _queueHooks: function (t, e) {
                var n = e + "queueHooks";
                return It.get(t, n) || It.access(t, n, {
                        empty: ft.Callbacks("once memory").add(function () {
                            It.remove(t, [e + "queue", n])
                        })
                    })
            }
        }), ft.fn.extend({
            queue: function (t, e) {
                var n = 2;
                return "string" != typeof t && (e = t, t = "fx", n--), arguments.length < n ? ft.queue(this[0], t) : void 0 === e ? this : this.each(function () {
                    var n = ft.queue(this, t, e);
                    ft._queueHooks(this, t), "fx" === t && "inprogress" !== n[0] && ft.dequeue(this, t)
                })
            }, dequeue: function (t) {
                return this.each(function () {
                    ft.dequeue(this, t)
                })
            }, clearQueue: function (t) {
                return this.queue(t || "fx", [])
            }, promise: function (t, e) {
                var n, i = 1, o = ft.Deferred(), r = this, a = this.length, s = function () {
                    --i || o.resolveWith(r, [r])
                };
                for ("string" != typeof t && (e = t, t = void 0), t = t || "fx"; a--;)(n = It.get(r[a], t + "queueHooks")) && n.empty && (i++, n.empty.add(s));
                return s(), o.promise(e)
            }
        });
        var Ft = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, Nt = new RegExp("^(?:([+-])=|)(" + Ft + ")([a-z%]*)$", "i"), Mt = ["Top", "Right", "Bottom", "Left"], Rt = function (t, e) {
            return t = e || t, "none" === t.style.display || "" === t.style.display && ft.contains(t.ownerDocument, t) && "none" === ft.css(t, "display")
        }, Wt = function (t, e, n, i) {
            var o, r, a = {};
            for (r in e)a[r] = t.style[r], t.style[r] = e[r];
            o = n.apply(t, i || []);
            for (r in e)t.style[r] = a[r];
            return o
        }, Ht = {};
        ft.fn.extend({
            show: function () {
                return m(this, !0)
            }, hide: function () {
                return m(this)
            }, toggle: function (t) {
                return "boolean" == typeof t ? t ? this.show() : this.hide() : this.each(function () {
                    Rt(this) ? ft(this).show() : ft(this).hide()
                })
            }
        });
        var jt = /^(?:checkbox|radio)$/i, zt = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i, Vt = /^$|\/(?:java|ecma)script/i, Bt = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };
        Bt.optgroup = Bt.option, Bt.tbody = Bt.tfoot = Bt.colgroup = Bt.caption = Bt.thead, Bt.th = Bt.td;
        var qt = /<|&#?\w+;/;
        !function () {
            var t = et.createDocumentFragment(), e = t.appendChild(et.createElement("div")), n = et.createElement("input");
            n.setAttribute("type", "radio"), n.setAttribute("checked", "checked"), n.setAttribute("name", "t"), e.appendChild(n), dt.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked, e.innerHTML = "<textarea>x</textarea>", dt.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue
        }();
        var Yt = et.documentElement, Xt = /^key/, $t = /^(?:mouse|pointer|contextmenu|drag|drop)|click/, Ut = /^([^.]*)(?:\.(.+)|)/;
        ft.event = {
            global: {}, add: function (t, e, n, i, o) {
                var r, a, s, l, c, u, h, d, f, p, g, m = It.get(t);
                if (m)for (n.handler && (r = n, n = r.handler, o = r.selector), o && ft.find.matchesSelector(Yt, o), n.guid || (n.guid = ft.guid++), (l = m.events) || (l = m.events = {}), (a = m.handle) || (a = m.handle = function (e) {
                    return void 0 !== ft && ft.event.triggered !== e.type ? ft.event.dispatch.apply(t, arguments) : void 0
                }), e = (e || "").match(Et) || [""], c = e.length; c--;)s = Ut.exec(e[c]) || [], f = g = s[1], p = (s[2] || "").split(".").sort(), f && (h = ft.event.special[f] || {}, f = (o ? h.delegateType : h.bindType) || f, h = ft.event.special[f] || {}, u = ft.extend({
                    type: f,
                    origType: g,
                    data: i,
                    handler: n,
                    guid: n.guid,
                    selector: o,
                    needsContext: o && ft.expr.match.needsContext.test(o),
                    namespace: p.join(".")
                }, r), (d = l[f]) || (d = l[f] = [], d.delegateCount = 0, h.setup && h.setup.call(t, i, p, a) !== !1 || t.addEventListener && t.addEventListener(f, a)), h.add && (h.add.call(t, u), u.handler.guid || (u.handler.guid = n.guid)), o ? d.splice(d.delegateCount++, 0, u) : d.push(u), ft.event.global[f] = !0)
            }, remove: function (t, e, n, i, o) {
                var r, a, s, l, c, u, h, d, f, p, g, m = It.hasData(t) && It.get(t);
                if (m && (l = m.events)) {
                    for (e = (e || "").match(Et) || [""], c = e.length; c--;)if (s = Ut.exec(e[c]) || [], f = g = s[1], p = (s[2] || "").split(".").sort(), f) {
                        for (h = ft.event.special[f] || {}, f = (i ? h.delegateType : h.bindType) || f, d = l[f] || [], s = s[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = r = d.length; r--;)u = d[r], !o && g !== u.origType || n && n.guid !== u.guid || s && !s.test(u.namespace) || i && i !== u.selector && ("**" !== i || !u.selector) || (d.splice(r, 1), u.selector && d.delegateCount--, h.remove && h.remove.call(t, u));
                        a && !d.length && (h.teardown && h.teardown.call(t, p, m.handle) !== !1 || ft.removeEvent(t, f, m.handle), delete l[f])
                    } else for (f in l)ft.event.remove(t, f + e[c], n, i, !0);
                    ft.isEmptyObject(l) && It.remove(t, "handle events")
                }
            }, dispatch: function (t) {
                var e, n, i, o, r, a, s = ft.event.fix(t), l = new Array(arguments.length), c = (It.get(this, "events") || {})[s.type] || [], u = ft.event.special[s.type] || {};
                for (l[0] = s, e = 1; e < arguments.length; e++)l[e] = arguments[e];
                if (s.delegateTarget = this, !u.preDispatch || u.preDispatch.call(this, s) !== !1) {
                    for (a = ft.event.handlers.call(this, s, c), e = 0; (o = a[e++]) && !s.isPropagationStopped();)for (s.currentTarget = o.elem, n = 0; (r = o.handlers[n++]) && !s.isImmediatePropagationStopped();)s.rnamespace && !s.rnamespace.test(r.namespace) || (s.handleObj = r, s.data = r.data, void 0 !== (i = ((ft.event.special[r.origType] || {}).handle || r.handler).apply(o.elem, l)) && (s.result = i) === !1 && (s.preventDefault(), s.stopPropagation()));
                    return u.postDispatch && u.postDispatch.call(this, s), s.result
                }
            }, handlers: function (t, e) {
                var n, i, o, r, a, s = [], l = e.delegateCount, c = t.target;
                if (l && c.nodeType && !("click" === t.type && t.button >= 1))for (; c !== this; c = c.parentNode || this)if (1 === c.nodeType && ("click" !== t.type || c.disabled !== !0)) {
                    for (r = [], a = {}, n = 0; n < l; n++)i = e[n], o = i.selector + " ", void 0 === a[o] && (a[o] = i.needsContext ? ft(o, this).index(c) > -1 : ft.find(o, this, null, [c]).length), a[o] && r.push(i);
                    r.length && s.push({elem: c, handlers: r})
                }
                return c = this, l < e.length && s.push({elem: c, handlers: e.slice(l)}), s
            }, addProp: function (t, e) {
                Object.defineProperty(ft.Event.prototype, t, {
                    enumerable: !0,
                    configurable: !0,
                    get: ft.isFunction(e) ? function () {
                        if (this.originalEvent)return e(this.originalEvent)
                    } : function () {
                        if (this.originalEvent)return this.originalEvent[t]
                    },
                    set: function (e) {
                        Object.defineProperty(this, t, {enumerable: !0, configurable: !0, writable: !0, value: e})
                    }
                })
            }, fix: function (t) {
                return t[ft.expando] ? t : new ft.Event(t)
            }, special: {
                load: {noBubble: !0}, focus: {
                    trigger: function () {
                        if (this !== C() && this.focus)return this.focus(), !1
                    }, delegateType: "focusin"
                }, blur: {
                    trigger: function () {
                        if (this === C() && this.blur)return this.blur(), !1
                    }, delegateType: "focusout"
                }, click: {
                    trigger: function () {
                        if ("checkbox" === this.type && this.click && ft.nodeName(this, "input"))return this.click(), !1
                    }, _default: function (t) {
                        return ft.nodeName(t.target, "a")
                    }
                }, beforeunload: {
                    postDispatch: function (t) {
                        void 0 !== t.result && t.originalEvent && (t.originalEvent.returnValue = t.result)
                    }
                }
            }
        }, ft.removeEvent = function (t, e, n) {
            t.removeEventListener && t.removeEventListener(e, n)
        }, ft.Event = function (t, e) {
            if (!(this instanceof ft.Event))return new ft.Event(t, e);
            t && t.type ? (this.originalEvent = t, this.type = t.type, this.isDefaultPrevented = t.defaultPrevented || void 0 === t.defaultPrevented && t.returnValue === !1 ? w : x, this.target = t.target && 3 === t.target.nodeType ? t.target.parentNode : t.target, this.currentTarget = t.currentTarget, this.relatedTarget = t.relatedTarget) : this.type = t, e && ft.extend(this, e), this.timeStamp = t && t.timeStamp || ft.now(), this[ft.expando] = !0
        }, ft.Event.prototype = {
            constructor: ft.Event,
            isDefaultPrevented: x,
            isPropagationStopped: x,
            isImmediatePropagationStopped: x,
            isSimulated: !1,
            preventDefault: function () {
                var t = this.originalEvent;
                this.isDefaultPrevented = w, t && !this.isSimulated && t.preventDefault()
            },
            stopPropagation: function () {
                var t = this.originalEvent;
                this.isPropagationStopped = w, t && !this.isSimulated && t.stopPropagation()
            },
            stopImmediatePropagation: function () {
                var t = this.originalEvent;
                this.isImmediatePropagationStopped = w, t && !this.isSimulated && t.stopImmediatePropagation(), this.stopPropagation()
            }
        }, ft.each({
            altKey: !0,
            bubbles: !0,
            cancelable: !0,
            changedTouches: !0,
            ctrlKey: !0,
            detail: !0,
            eventPhase: !0,
            metaKey: !0,
            pageX: !0,
            pageY: !0,
            shiftKey: !0,
            view: !0,
            char: !0,
            charCode: !0,
            key: !0,
            keyCode: !0,
            button: !0,
            buttons: !0,
            clientX: !0,
            clientY: !0,
            offsetX: !0,
            offsetY: !0,
            pointerId: !0,
            pointerType: !0,
            screenX: !0,
            screenY: !0,
            targetTouches: !0,
            toElement: !0,
            touches: !0,
            which: function (t) {
                var e = t.button;
                return null == t.which && Xt.test(t.type) ? null != t.charCode ? t.charCode : t.keyCode : !t.which && void 0 !== e && $t.test(t.type) ? 1 & e ? 1 : 2 & e ? 3 : 4 & e ? 2 : 0 : t.which
            }
        }, ft.event.addProp), ft.each({
            mouseenter: "mouseover",
            mouseleave: "mouseout",
            pointerenter: "pointerover",
            pointerleave: "pointerout"
        }, function (t, e) {
            ft.event.special[t] = {
                delegateType: e, bindType: e, handle: function (t) {
                    var n, i = this, o = t.relatedTarget, r = t.handleObj;
                    return o && (o === i || ft.contains(i, o)) || (t.type = r.origType, n = r.handler.apply(this, arguments), t.type = e), n
                }
            }
        }), ft.fn.extend({
            on: function (t, e, n, i) {
                return T(this, t, e, n, i)
            }, one: function (t, e, n, i) {
                return T(this, t, e, n, i, 1)
            }, off: function (t, e, n) {
                var i, o;
                if (t && t.preventDefault && t.handleObj)return i = t.handleObj, ft(t.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
                if ("object" == typeof t) {
                    for (o in t)this.off(o, e, t[o]);
                    return this
                }
                return e !== !1 && "function" != typeof e || (n = e, e = void 0), n === !1 && (n = x), this.each(function () {
                    ft.event.remove(this, t, n, e)
                })
            }
        });
        var Qt = /<script|<style|<link/i, Gt = /checked\s*(?:[^=]|=\s*.checked.)/i, Zt = /^true\/(.*)/, Kt = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
        ft.extend({
            htmlPrefilter: function (t) {
                return t.replace(/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi, "<$1></$2>")
            }, clone: function (t, e, n) {
                var i, o, r, a, s = t.cloneNode(!0), l = ft.contains(t.ownerDocument, t);
                if (!(dt.noCloneChecked || 1 !== t.nodeType && 11 !== t.nodeType || ft.isXMLDoc(t)))for (a = v(s), r = v(t), i = 0, o = r.length; i < o; i++)_(r[i], a[i]);
                if (e)if (n)for (r = r || v(t), a = a || v(s), i = 0, o = r.length; i < o; i++)A(r[i], a[i]); else A(t, s);
                return a = v(s, "script"), a.length > 0 && y(a, !l && v(t, "script")), s
            }, cleanData: function (t) {
                for (var e, n, i, o = ft.event.special, r = 0; void 0 !== (n = t[r]); r++)if (Pt(n)) {
                    if (e = n[It.expando]) {
                        if (e.events)for (i in e.events)o[i] ? ft.event.remove(n, i) : ft.removeEvent(n, i, e.handle);
                        n[It.expando] = void 0
                    }
                    n[Dt.expando] && (n[Dt.expando] = void 0)
                }
            }
        }), ft.fn.extend({
            detach: function (t) {
                return I(this, t, !0)
            }, remove: function (t) {
                return I(this, t)
            }, text: function (t) {
                return _t(this, function (t) {
                    return void 0 === t ? ft.text(this) : this.empty().each(function () {
                        1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = t)
                    })
                }, null, t, arguments.length)
            }, append: function () {
                return P(this, arguments, function (t) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        S(this, t).appendChild(t)
                    }
                })
            }, prepend: function () {
                return P(this, arguments, function (t) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var e = S(this, t);
                        e.insertBefore(t, e.firstChild)
                    }
                })
            }, before: function () {
                return P(this, arguments, function (t) {
                    this.parentNode && this.parentNode.insertBefore(t, this)
                })
            }, after: function () {
                return P(this, arguments, function (t) {
                    this.parentNode && this.parentNode.insertBefore(t, this.nextSibling)
                })
            }, empty: function () {
                for (var t, e = 0; null != (t = this[e]); e++)1 === t.nodeType && (ft.cleanData(v(t, !1)), t.textContent = "");
                return this
            }, clone: function (t, e) {
                return t = null != t && t, e = null == e ? t : e, this.map(function () {
                    return ft.clone(this, t, e)
                })
            }, html: function (t) {
                return _t(this, function (t) {
                    var e = this[0] || {}, n = 0, i = this.length;
                    if (void 0 === t && 1 === e.nodeType)return e.innerHTML;
                    if ("string" == typeof t && !Qt.test(t) && !Bt[(zt.exec(t) || ["", ""])[1].toLowerCase()]) {
                        t = ft.htmlPrefilter(t);
                        try {
                            for (; n < i; n++)e = this[n] || {}, 1 === e.nodeType && (ft.cleanData(v(e, !1)), e.innerHTML = t);
                            e = 0
                        } catch (t) {
                        }
                    }
                    e && this.empty().append(t)
                }, null, t, arguments.length)
            }, replaceWith: function () {
                var t = [];
                return P(this, arguments, function (e) {
                    var n = this.parentNode;
                    ft.inArray(this, t) < 0 && (ft.cleanData(v(this)), n && n.replaceChild(e, this))
                }, t)
            }
        }), ft.each({
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith"
        }, function (t, e) {
            ft.fn[t] = function (t) {
                for (var n, i = [], o = ft(t), r = o.length - 1, a = 0; a <= r; a++)n = a === r ? this : this.clone(!0), ft(o[a])[e](n), rt.apply(i, n.get());
                return this.pushStack(i)
            }
        });
        var Jt = /^margin/, te = new RegExp("^(" + Ft + ")(?!px)[a-z%]+$", "i"), ee = function (e) {
            var n = e.ownerDocument.defaultView;
            return n && n.opener || (n = t), n.getComputedStyle(e)
        };
        !function () {
            function e() {
                if (s) {
                    s.style.cssText = "box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", s.innerHTML = "", Yt.appendChild(a);
                    var e = t.getComputedStyle(s);
                    n = "1%" !== e.top, r = "2px" === e.marginLeft, i = "4px" === e.width, s.style.marginRight = "50%", o = "4px" === e.marginRight, Yt.removeChild(a), s = null
                }
            }

            var n, i, o, r, a = et.createElement("div"), s = et.createElement("div");
            s.style && (s.style.backgroundClip = "content-box", s.cloneNode(!0).style.backgroundClip = "", dt.clearCloneStyle = "content-box" === s.style.backgroundClip, a.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", a.appendChild(s), ft.extend(dt, {
                pixelPosition: function () {
                    return e(), n
                }, boxSizingReliable: function () {
                    return e(), i
                }, pixelMarginRight: function () {
                    return e(), o
                }, reliableMarginLeft: function () {
                    return e(), r
                }
            }))
        }();
        var ne = /^(none|table(?!-c[ea]).+)/, ie = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        }, oe = {
            letterSpacing: "0",
            fontWeight: "400"
        }, re = ["Webkit", "Moz", "ms"], ae = et.createElement("div").style;
        ft.extend({
            cssHooks: {
                opacity: {
                    get: function (t, e) {
                        if (e) {
                            var n = D(t, "opacity");
                            return "" === n ? "1" : n
                        }
                    }
                }
            },
            cssNumber: {
                animationIterationCount: !0,
                columnCount: !0,
                fillOpacity: !0,
                flexGrow: !0,
                flexShrink: !0,
                fontWeight: !0,
                lineHeight: !0,
                opacity: !0,
                order: !0,
                orphans: !0,
                widows: !0,
                zIndex: !0,
                zoom: !0
            },
            cssProps: {float: "cssFloat"},
            style: function (t, e, n, i) {
                if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
                    var o, r, a, s = ft.camelCase(e), l = t.style;
                    if (e = ft.cssProps[s] || (ft.cssProps[s] = L(s) || s), a = ft.cssHooks[e] || ft.cssHooks[s], void 0 === n)return a && "get" in a && void 0 !== (o = a.get(t, !1, i)) ? o : l[e];
                    r = typeof n, "string" === r && (o = Nt.exec(n)) && o[1] && (n = p(t, e, o), r = "number"), null != n && n === n && ("number" === r && (n += o && o[3] || (ft.cssNumber[s] ? "" : "px")), dt.clearCloneStyle || "" !== n || 0 !== e.indexOf("background") || (l[e] = "inherit"), a && "set" in a && void 0 === (n = a.set(t, n, i)) || (l[e] = n))
                }
            },
            css: function (t, e, n, i) {
                var o, r, a, s = ft.camelCase(e);
                return e = ft.cssProps[s] || (ft.cssProps[s] = L(s) || s), a = ft.cssHooks[e] || ft.cssHooks[s], a && "get" in a && (o = a.get(t, !0, n)), void 0 === o && (o = D(t, e, i)), "normal" === o && e in oe && (o = oe[e]), "" === n || n ? (r = parseFloat(o), n === !0 || isFinite(r) ? r || 0 : o) : o
            }
        }), ft.each(["height", "width"], function (t, e) {
            ft.cssHooks[e] = {
                get: function (t, n, i) {
                    if (n)return !ne.test(ft.css(t, "display")) || t.getClientRects().length && t.getBoundingClientRect().width ? M(t, e, i) : Wt(t, ie, function () {
                        return M(t, e, i)
                    })
                }, set: function (t, n, i) {
                    var o, r = i && ee(t), a = i && N(t, e, i, "border-box" === ft.css(t, "boxSizing", !1, r), r);
                    return a && (o = Nt.exec(n)) && "px" !== (o[3] || "px") && (t.style[e] = n, n = ft.css(t, e)), F(t, n, a)
                }
            }
        }), ft.cssHooks.marginLeft = O(dt.reliableMarginLeft, function (t, e) {
            if (e)return (parseFloat(D(t, "marginLeft")) || t.getBoundingClientRect().left - Wt(t, {marginLeft: 0}, function () {
                    return t.getBoundingClientRect().left
                })) + "px"
        }), ft.each({margin: "", padding: "", border: "Width"}, function (t, e) {
            ft.cssHooks[t + e] = {
                expand: function (n) {
                    for (var i = 0, o = {}, r = "string" == typeof n ? n.split(" ") : [n]; i < 4; i++)o[t + Mt[i] + e] = r[i] || r[i - 2] || r[0];
                    return o
                }
            }, Jt.test(t) || (ft.cssHooks[t + e].set = F)
        }), ft.fn.extend({
            css: function (t, e) {
                return _t(this, function (t, e, n) {
                    var i, o, r = {}, a = 0;
                    if (ft.isArray(e)) {
                        for (i = ee(t), o = e.length; a < o; a++)r[e[a]] = ft.css(t, e[a], !1, i);
                        return r
                    }
                    return void 0 !== n ? ft.style(t, e, n) : ft.css(t, e)
                }, t, e, arguments.length > 1)
            }
        }), ft.Tween = R, R.prototype = {
            constructor: R, init: function (t, e, n, i, o, r) {
                this.elem = t, this.prop = n, this.easing = o || ft.easing._default, this.options = e, this.start = this.now = this.cur(), this.end = i, this.unit = r || (ft.cssNumber[n] ? "" : "px")
            }, cur: function () {
                var t = R.propHooks[this.prop];
                return t && t.get ? t.get(this) : R.propHooks._default.get(this)
            }, run: function (t) {
                var e, n = R.propHooks[this.prop];
                return this.options.duration ? this.pos = e = ft.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration) : this.pos = e = t, this.now = (this.end - this.start) * e + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : R.propHooks._default.set(this), this
            }
        }, R.prototype.init.prototype = R.prototype, R.propHooks = {
            _default: {
                get: function (t) {
                    var e;
                    return 1 !== t.elem.nodeType || null != t.elem[t.prop] && null == t.elem.style[t.prop] ? t.elem[t.prop] : (e = ft.css(t.elem, t.prop, ""), e && "auto" !== e ? e : 0)
                }, set: function (t) {
                    ft.fx.step[t.prop] ? ft.fx.step[t.prop](t) : 1 !== t.elem.nodeType || null == t.elem.style[ft.cssProps[t.prop]] && !ft.cssHooks[t.prop] ? t.elem[t.prop] = t.now : ft.style(t.elem, t.prop, t.now + t.unit)
                }
            }
        }, R.propHooks.scrollTop = R.propHooks.scrollLeft = {
            set: function (t) {
                t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now)
            }
        }, ft.easing = {
            linear: function (t) {
                return t
            }, swing: function (t) {
                return .5 - Math.cos(t * Math.PI) / 2
            }, _default: "swing"
        }, ft.fx = R.prototype.init, ft.fx.step = {};
        var se, le, ce = /^(?:toggle|show|hide)$/, ue = /queueHooks$/
            ;
        ft.Animation = ft.extend(q, {
            tweeners: {
                "*": [function (t, e) {
                    var n = this.createTween(t, e);
                    return p(n.elem, t, Nt.exec(e), n), n
                }]
            }, tweener: function (t, e) {
                ft.isFunction(t) ? (e = t, t = ["*"]) : t = t.match(Et);
                for (var n, i = 0, o = t.length; i < o; i++)n = t[i], q.tweeners[n] = q.tweeners[n] || [], q.tweeners[n].unshift(e)
            }, prefilters: [V], prefilter: function (t, e) {
                e ? q.prefilters.unshift(t) : q.prefilters.push(t)
            }
        }), ft.speed = function (t, e, n) {
            var i = t && "object" == typeof t ? ft.extend({}, t) : {
                complete: n || !n && e || ft.isFunction(t) && t,
                duration: t,
                easing: n && e || e && !ft.isFunction(e) && e
            };
            return ft.fx.off || et.hidden ? i.duration = 0 : "number" != typeof i.duration && (i.duration in ft.fx.speeds ? i.duration = ft.fx.speeds[i.duration] : i.duration = ft.fx.speeds._default), null != i.queue && i.queue !== !0 || (i.queue = "fx"), i.old = i.complete, i.complete = function () {
                ft.isFunction(i.old) && i.old.call(this), i.queue && ft.dequeue(this, i.queue)
            }, i
        }, ft.fn.extend({
            fadeTo: function (t, e, n, i) {
                return this.filter(Rt).css("opacity", 0).show().end().animate({opacity: e}, t, n, i)
            }, animate: function (t, e, n, i) {
                var o = ft.isEmptyObject(t), r = ft.speed(e, n, i), a = function () {
                    var e = q(this, ft.extend({}, t), r);
                    (o || It.get(this, "finish")) && e.stop(!0)
                };
                return a.finish = a, o || r.queue === !1 ? this.each(a) : this.queue(r.queue, a)
            }, stop: function (t, e, n) {
                var i = function (t) {
                    var e = t.stop;
                    delete t.stop, e(n)
                };
                return "string" != typeof t && (n = e, e = t, t = void 0), e && t !== !1 && this.queue(t || "fx", []), this.each(function () {
                    var e = !0, o = null != t && t + "queueHooks", r = ft.timers, a = It.get(this);
                    if (o)a[o] && a[o].stop && i(a[o]); else for (o in a)a[o] && a[o].stop && ue.test(o) && i(a[o]);
                    for (o = r.length; o--;)r[o].elem !== this || null != t && r[o].queue !== t || (r[o].anim.stop(n), e = !1, r.splice(o, 1));
                    !e && n || ft.dequeue(this, t)
                })
            }, finish: function (t) {
                return t !== !1 && (t = t || "fx"), this.each(function () {
                    var e, n = It.get(this), i = n[t + "queue"], o = n[t + "queueHooks"], r = ft.timers, a = i ? i.length : 0;
                    for (n.finish = !0, ft.queue(this, t, []), o && o.stop && o.stop.call(this, !0), e = r.length; e--;)r[e].elem === this && r[e].queue === t && (r[e].anim.stop(!0), r.splice(e, 1));
                    for (e = 0; e < a; e++)i[e] && i[e].finish && i[e].finish.call(this);
                    delete n.finish
                })
            }
        }), ft.each(["toggle", "show", "hide"], function (t, e) {
            var n = ft.fn[e];
            ft.fn[e] = function (t, i, o) {
                return null == t || "boolean" == typeof t ? n.apply(this, arguments) : this.animate(j(e, !0), t, i, o)
            }
        }), ft.each({
            slideDown: j("show"),
            slideUp: j("hide"),
            slideToggle: j("toggle"),
            fadeIn: {opacity: "show"},
            fadeOut: {opacity: "hide"},
            fadeToggle: {opacity: "toggle"}
        }, function (t, e) {
            ft.fn[t] = function (t, n, i) {
                return this.animate(e, t, n, i)
            }
        }), ft.timers = [], ft.fx.tick = function () {
            var t, e = 0, n = ft.timers;
            for (se = ft.now(); e < n.length; e++)(t = n[e])() || n[e] !== t || n.splice(e--, 1);
            n.length || ft.fx.stop(), se = void 0
        }, ft.fx.timer = function (t) {
            ft.timers.push(t), t() ? ft.fx.start() : ft.timers.pop()
        }, ft.fx.interval = 13, ft.fx.start = function () {
            le || (le = t.requestAnimationFrame ? t.requestAnimationFrame(W) : t.setInterval(ft.fx.tick, ft.fx.interval))
        }, ft.fx.stop = function () {
            t.cancelAnimationFrame ? t.cancelAnimationFrame(le) : t.clearInterval(le), le = null
        }, ft.fx.speeds = {slow: 600, fast: 200, _default: 400}, ft.fn.delay = function (e, n) {
            return e = ft.fx ? ft.fx.speeds[e] || e : e, n = n || "fx", this.queue(n, function (n, i) {
                var o = t.setTimeout(n, e);
                i.stop = function () {
                    t.clearTimeout(o)
                }
            })
        }, function () {
            var t = et.createElement("input"), e = et.createElement("select"), n = e.appendChild(et.createElement("option"));
            t.type = "checkbox", dt.checkOn = "" !== t.value, dt.optSelected = n.selected, t = et.createElement("input"), t.value = "t", t.type = "radio", dt.radioValue = "t" === t.value
        }();
        var he, de = ft.expr.attrHandle;
        ft.fn.extend({
            attr: function (t, e) {
                return _t(this, ft.attr, t, e, arguments.length > 1)
            }, removeAttr: function (t) {
                return this.each(function () {
                    ft.removeAttr(this, t)
                })
            }
        }), ft.extend({
            attr: function (t, e, n) {
                var i, o, r = t.nodeType;
                if (3 !== r && 8 !== r && 2 !== r)return void 0 === t.getAttribute ? ft.prop(t, e, n) : (1 === r && ft.isXMLDoc(t) || (o = ft.attrHooks[e.toLowerCase()] || (ft.expr.match.bool.test(e) ? he : void 0)), void 0 !== n ? null === n ? void ft.removeAttr(t, e) : o && "set" in o && void 0 !== (i = o.set(t, n, e)) ? i : (t.setAttribute(e, n + ""), n) : o && "get" in o && null !== (i = o.get(t, e)) ? i : (i = ft.find.attr(t, e), null == i ? void 0 : i))
            }, attrHooks: {
                type: {
                    set: function (t, e) {
                        if (!dt.radioValue && "radio" === e && ft.nodeName(t, "input")) {
                            var n = t.value;
                            return t.setAttribute("type", e), n && (t.value = n), e
                        }
                    }
                }
            }, removeAttr: function (t, e) {
                var n, i = 0, o = e && e.match(Et);
                if (o && 1 === t.nodeType)for (; n = o[i++];)t.removeAttribute(n)
            }
        }), he = {
            set: function (t, e, n) {
                return e === !1 ? ft.removeAttr(t, n) : t.setAttribute(n, n), n
            }
        }, ft.each(ft.expr.match.bool.source.match(/\w+/g), function (t, e) {
            var n = de[e] || ft.find.attr;
            de[e] = function (t, e, i) {
                var o, r, a = e.toLowerCase();
                return i || (r = de[a], de[a] = o, o = null != n(t, e, i) ? a : null, de[a] = r), o
            }
        });
        var fe = /^(?:input|select|textarea|button)$/i, pe = /^(?:a|area)$/i;
        ft.fn.extend({
            prop: function (t, e) {
                return _t(this, ft.prop, t, e, arguments.length > 1)
            }, removeProp: function (t) {
                return this.each(function () {
                    delete this[ft.propFix[t] || t]
                })
            }
        }), ft.extend({
            prop: function (t, e, n) {
                var i, o, r = t.nodeType;
                if (3 !== r && 8 !== r && 2 !== r)return 1 === r && ft.isXMLDoc(t) || (e = ft.propFix[e] || e, o = ft.propHooks[e]), void 0 !== n ? o && "set" in o && void 0 !== (i = o.set(t, n, e)) ? i : t[e] = n : o && "get" in o && null !== (i = o.get(t, e)) ? i : t[e]
            }, propHooks: {
                tabIndex: {
                    get: function (t) {
                        var e = ft.find.attr(t, "tabindex");
                        return e ? parseInt(e, 10) : fe.test(t.nodeName) || pe.test(t.nodeName) && t.href ? 0 : -1
                    }
                }
            }, propFix: {for: "htmlFor", class: "className"}
        }), dt.optSelected || (ft.propHooks.selected = {
            get: function (t) {
                var e = t.parentNode;
                return e && e.parentNode && e.parentNode.selectedIndex, null
            }, set: function (t) {
                var e = t.parentNode;
                e && (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex)
            }
        }), ft.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
            ft.propFix[this.toLowerCase()] = this
        }), ft.fn.extend({
            addClass: function (t) {
                var e, n, i, o, r, a, s, l = 0;
                if (ft.isFunction(t))return this.each(function (e) {
                    ft(this).addClass(t.call(this, e, X(this)))
                });
                if ("string" == typeof t && t)for (e = t.match(Et) || []; n = this[l++];)if (o = X(n), i = 1 === n.nodeType && " " + Y(o) + " ") {
                    for (a = 0; r = e[a++];)i.indexOf(" " + r + " ") < 0 && (i += r + " ");
                    s = Y(i), o !== s && n.setAttribute("class", s)
                }
                return this
            }, removeClass: function (t) {
                var e, n, i, o, r, a, s, l = 0;
                if (ft.isFunction(t))return this.each(function (e) {
                    ft(this).removeClass(t.call(this, e, X(this)))
                });
                if (!arguments.length)return this.attr("class", "");
                if ("string" == typeof t && t)for (e = t.match(Et) || []; n = this[l++];)if (o = X(n), i = 1 === n.nodeType && " " + Y(o) + " ") {
                    for (a = 0; r = e[a++];)for (; i.indexOf(" " + r + " ") > -1;)i = i.replace(" " + r + " ", " ");
                    s = Y(i), o !== s && n.setAttribute("class", s)
                }
                return this
            }, toggleClass: function (t, e) {
                var n = typeof t;
                return "boolean" == typeof e && "string" === n ? e ? this.addClass(t) : this.removeClass(t) : ft.isFunction(t) ? this.each(function (n) {
                    ft(this).toggleClass(t.call(this, n, X(this), e), e)
                }) : this.each(function () {
                    var e, i, o, r;
                    if ("string" === n)for (i = 0, o = ft(this), r = t.match(Et) || []; e = r[i++];)o.hasClass(e) ? o.removeClass(e) : o.addClass(e); else void 0 !== t && "boolean" !== n || (e = X(this), e && It.set(this, "__className__", e), this.setAttribute && this.setAttribute("class", e || t === !1 ? "" : It.get(this, "__className__") || ""))
                })
            }, hasClass: function (t) {
                var e, n, i = 0;
                for (e = " " + t + " "; n = this[i++];)if (1 === n.nodeType && (" " + Y(X(n)) + " ").indexOf(e) > -1)return !0;
                return !1
            }
        });
        ft.fn.extend({
            val: function (t) {
                var e, n, i, o = this[0];
                {
                    if (arguments.length)return i = ft.isFunction(t), this.each(function (n) {
                        var o;
                        1 === this.nodeType && (o = i ? t.call(this, n, ft(this).val()) : t, null == o ? o = "" : "number" == typeof o ? o += "" : ft.isArray(o) && (o = ft.map(o, function (t) {
                            return null == t ? "" : t + ""
                        })), (e = ft.valHooks[this.type] || ft.valHooks[this.nodeName.toLowerCase()]) && "set" in e && void 0 !== e.set(this, o, "value") || (this.value = o))
                    });
                    if (o)return (e = ft.valHooks[o.type] || ft.valHooks[o.nodeName.toLowerCase()]) && "get" in e && void 0 !== (n = e.get(o, "value")) ? n : (n = o.value, "string" == typeof n ? n.replace(/\r/g, "") : null == n ? "" : n)
                }
            }
        }), ft.extend({
            valHooks: {
                option: {
                    get: function (t) {
                        var e = ft.find.attr(t, "value");
                        return null != e ? e : Y(ft.text(t))
                    }
                }, select: {
                    get: function (t) {
                        var e, n, i, o = t.options, r = t.selectedIndex, a = "select-one" === t.type, s = a ? null : [], l = a ? r + 1 : o.length;
                        for (i = r < 0 ? l : a ? r : 0; i < l; i++)if (n = o[i], (n.selected || i === r) && !n.disabled && (!n.parentNode.disabled || !ft.nodeName(n.parentNode, "optgroup"))) {
                            if (e = ft(n).val(), a)return e;
                            s.push(e)
                        }
                        return s
                    }, set: function (t, e) {
                        for (var n, i, o = t.options, r = ft.makeArray(e), a = o.length; a--;)i = o[a], (i.selected = ft.inArray(ft.valHooks.option.get(i), r) > -1) && (n = !0);
                        return n || (t.selectedIndex = -1), r
                    }
                }
            }
        }), ft.each(["radio", "checkbox"], function () {
            ft.valHooks[this] = {
                set: function (t, e) {
                    if (ft.isArray(e))return t.checked = ft.inArray(ft(t).val(), e) > -1
                }
            }, dt.checkOn || (ft.valHooks[this].get = function (t) {
                return null === t.getAttribute("value") ? "on" : t.value
            })
        });
        var ge = /^(?:focusinfocus|focusoutblur)$/;
        ft.extend(ft.event, {
            trigger: function (e, n, i, o) {
                var r, a, s, l, c, u, h, d = [i || et], f = ct.call(e, "type") ? e.type : e, p = ct.call(e, "namespace") ? e.namespace.split(".") : [];
                if (a = s = i = i || et, 3 !== i.nodeType && 8 !== i.nodeType && !ge.test(f + ft.event.triggered) && (f.indexOf(".") > -1 && (p = f.split("."), f = p.shift(), p.sort()), c = f.indexOf(":") < 0 && "on" + f, e = e[ft.expando] ? e : new ft.Event(f, "object" == typeof e && e), e.isTrigger = o ? 2 : 3, e.namespace = p.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = i), n = null == n ? [e] : ft.makeArray(n, [e]), h = ft.event.special[f] || {}, o || !h.trigger || h.trigger.apply(i, n) !== !1)) {
                    if (!o && !h.noBubble && !ft.isWindow(i)) {
                        for (l = h.delegateType || f, ge.test(l + f) || (a = a.parentNode); a; a = a.parentNode)d.push(a), s = a;
                        s === (i.ownerDocument || et) && d.push(s.defaultView || s.parentWindow || t)
                    }
                    for (r = 0; (a = d[r++]) && !e.isPropagationStopped();)e.type = r > 1 ? l : h.bindType || f, u = (It.get(a, "events") || {})[e.type] && It.get(a, "handle"), u && u.apply(a, n), (u = c && a[c]) && u.apply && Pt(a) && (e.result = u.apply(a, n), e.result === !1 && e.preventDefault());
                    return e.type = f, o || e.isDefaultPrevented() || h._default && h._default.apply(d.pop(), n) !== !1 || !Pt(i) || c && ft.isFunction(i[f]) && !ft.isWindow(i) && (s = i[c], s && (i[c] = null), ft.event.triggered = f, i[f](), ft.event.triggered = void 0, s && (i[c] = s)), e.result
                }
            }, simulate: function (t, e, n) {
                var i = ft.extend(new ft.Event, n, {type: t, isSimulated: !0});
                ft.event.trigger(i, null, e)
            }
        }), ft.fn.extend({
            trigger: function (t, e) {
                return this.each(function () {
                    ft.event.trigger(t, e, this)
                })
            }, triggerHandler: function (t, e) {
                var n = this[0];
                if (n)return ft.event.trigger(t, e, n, !0)
            }
        }), ft.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (t, e) {
            ft.fn[e] = function (t, n) {
                return arguments.length > 0 ? this.on(e, null, t, n) : this.trigger(e)
            }
        }), ft.fn.extend({
            hover: function (t, e) {
                return this.mouseenter(t).mouseleave(e || t)
            }
        }), dt.focusin = "onfocusin" in t, dt.focusin || ft.each({focus: "focusin", blur: "focusout"}, function (t, e) {
            var n = function (t) {
                ft.event.simulate(e, t.target, ft.event.fix(t))
            };
            ft.event.special[e] = {
                setup: function () {
                    var i = this.ownerDocument || this, o = It.access(i, e);
                    o || i.addEventListener(t, n, !0), It.access(i, e, (o || 0) + 1)
                }, teardown: function () {
                    var i = this.ownerDocument || this, o = It.access(i, e) - 1;
                    o ? It.access(i, e, o) : (i.removeEventListener(t, n, !0), It.remove(i, e))
                }
            }
        });
        var me = t.location, ve = ft.now(), ye = /\?/;
        ft.parseXML = function (e) {
            var n;
            if (!e || "string" != typeof e)return null;
            try {
                n = (new t.DOMParser).parseFromString(e, "text/xml")
            } catch (t) {
                n = void 0
            }
            return n && !n.getElementsByTagName("parsererror").length || ft.error("Invalid XML: " + e), n
        };
        var be = /\[\]$/, we = /^(?:submit|button|image|reset|file)$/i, xe = /^(?:input|select|textarea|keygen)/i;
        ft.param = function (t, e) {
            var n, i = [], o = function (t, e) {
                var n = ft.isFunction(e) ? e() : e;
                i[i.length] = encodeURIComponent(t) + "=" + encodeURIComponent(null == n ? "" : n)
            };
            if (ft.isArray(t) || t.jquery && !ft.isPlainObject(t))ft.each(t, function () {
                o(this.name, this.value)
            }); else for (n in t)$(n, t[n], e, o);
            return i.join("&")
        }, ft.fn.extend({
            serialize: function () {
                return ft.param(this.serializeArray())
            }, serializeArray: function () {
                return this.map(function () {
                    var t = ft.prop(this, "elements");
                    return t ? ft.makeArray(t) : this
                }).filter(function () {
                    var t = this.type;
                    return this.name && !ft(this).is(":disabled") && xe.test(this.nodeName) && !we.test(t) && (this.checked || !jt.test(t))
                }).map(function (t, e) {
                    var n = ft(this).val();
                    return null == n ? null : ft.isArray(n) ? ft.map(n, function (t) {
                        return {name: e.name, value: t.replace(/\r?\n/g, "\r\n")}
                    }) : {name: e.name, value: n.replace(/\r?\n/g, "\r\n")}
                }).get()
            }
        });
        var Ce = /^(.*?):[ \t]*([^\r\n]*)$/gm, Te = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, Se = /^(?:GET|HEAD)$/, Ee = {}, ke = {}, Ae = "*/".concat("*"), _e = et.createElement("a");
        _e.href = me.href, ft.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
                url: me.href,
                type: "GET",
                isLocal: Te.test(me.protocol),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: {
                    "*": Ae,
                    text: "text/plain",
                    html: "text/html",
                    xml: "application/xml, text/xml",
                    json: "application/json, text/javascript"
                },
                contents: {xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/},
                responseFields: {xml: "responseXML", text: "responseText", json: "responseJSON"},
                converters: {"* text": String, "text html": !0, "text json": JSON.parse, "text xml": ft.parseXML},
                flatOptions: {url: !0, context: !0}
            },
            ajaxSetup: function (t, e) {
                return e ? G(G(t, ft.ajaxSettings), e) : G(ft.ajaxSettings, t)
            },
            ajaxPrefilter: U(Ee),
            ajaxTransport: U(ke),
            ajax: function (e, n) {
                function i(e, n, i, s) {
                    var c, d, f, w, x, C = n;
                    u || (u = !0, l && t.clearTimeout(l), o = void 0, a = s || "", T.readyState = e > 0 ? 4 : 0, c = e >= 200 && e < 300 || 304 === e, i && (w = Z(p, T, i)), w = K(p, w, T, c), c ? (p.ifModified && (x = T.getResponseHeader("Last-Modified"), x && (ft.lastModified[r] = x), (x = T.getResponseHeader("etag")) && (ft.etag[r] = x)), 204 === e || "HEAD" === p.type ? C = "nocontent" : 304 === e ? C = "notmodified" : (C = w.state, d = w.data, f = w.error, c = !f)) : (f = C, !e && C || (C = "error", e < 0 && (e = 0))), T.status = e, T.statusText = (n || C) + "", c ? v.resolveWith(g, [d, C, T]) : v.rejectWith(g, [T, C, f]), T.statusCode(b), b = void 0, h && m.trigger(c ? "ajaxSuccess" : "ajaxError", [T, p, c ? d : f]), y.fireWith(g, [T, C]), h && (m.trigger("ajaxComplete", [T, p]), --ft.active || ft.event.trigger("ajaxStop")))
                }

                "object" == typeof e && (n = e, e = void 0), n = n || {};
                var o, r, a, s, l, c, u, h, d, f, p = ft.ajaxSetup({}, n), g = p.context || p, m = p.context && (g.nodeType || g.jquery) ? ft(g) : ft.event, v = ft.Deferred(), y = ft.Callbacks("once memory"), b = p.statusCode || {}, w = {}, x = {}, C = "canceled", T = {
                    readyState: 0,
                    getResponseHeader: function (t) {
                        var e;
                        if (u) {
                            if (!s)for (s = {}; e = Ce.exec(a);)s[e[1].toLowerCase()] = e[2];
                            e = s[t.toLowerCase()]
                        }
                        return null == e ? null : e
                    },
                    getAllResponseHeaders: function () {
                        return u ? a : null
                    },
                    setRequestHeader: function (t, e) {
                        return null == u && (t = x[t.toLowerCase()] = x[t.toLowerCase()] || t, w[t] = e), this
                    },
                    overrideMimeType: function (t) {
                        return null == u && (p.mimeType = t), this
                    },
                    statusCode: function (t) {
                        var e;
                        if (t)if (u)T.always(t[T.status]); else for (e in t)b[e] = [b[e], t[e]];
                        return this
                    },
                    abort: function (t) {
                        var e = t || C;
                        return o && o.abort(e), i(0, e), this
                    }
                };
                if (v.promise(T), p.url = ((e || p.url || me.href) + "").replace(/^\/\//, me.protocol + "//"), p.type = n.method || n.type || p.method || p.type, p.dataTypes = (p.dataType || "*").toLowerCase().match(Et) || [""], null == p.crossDomain) {
                    c = et.createElement("a");
                    try {
                        c.href = p.url, c.href = c.href, p.crossDomain = _e.protocol + "//" + _e.host != c.protocol + "//" + c.host
                    } catch (t) {
                        p.crossDomain = !0
                    }
                }
                if (p.data && p.processData && "string" != typeof p.data && (p.data = ft.param(p.data, p.traditional)), Q(Ee, p, n, T), u)return T;
                h = ft.event && p.global, h && 0 == ft.active++ && ft.event.trigger("ajaxStart"), p.type = p.type.toUpperCase(), p.hasContent = !Se.test(p.type), r = p.url.replace(/#.*$/, ""), p.hasContent ? p.data && p.processData && 0 === (p.contentType || "").indexOf("application/x-www-form-urlencoded") && (p.data = p.data.replace(/%20/g, "+")) : (f = p.url.slice(r.length), p.data && (r += (ye.test(r) ? "&" : "?") + p.data, delete p.data), p.cache === !1 && (r = r.replace(/([?&])_=[^&]*/, "$1"), f = (ye.test(r) ? "&" : "?") + "_=" + ve++ + f), p.url = r + f), p.ifModified && (ft.lastModified[r] && T.setRequestHeader("If-Modified-Since", ft.lastModified[r]), ft.etag[r] && T.setRequestHeader("If-None-Match", ft.etag[r])), (p.data && p.hasContent && p.contentType !== !1 || n.contentType) && T.setRequestHeader("Content-Type", p.contentType), T.setRequestHeader("Accept", p.dataTypes[0] && p.accepts[p.dataTypes[0]] ? p.accepts[p.dataTypes[0]] + ("*" !== p.dataTypes[0] ? ", " + Ae + "; q=0.01" : "") : p.accepts["*"]);
                for (d in p.headers)T.setRequestHeader(d, p.headers[d]);
                if (p.beforeSend && (p.beforeSend.call(g, T, p) === !1 || u))return T.abort();
                if (C = "abort", y.add(p.complete), T.done(p.success), T.fail(p.error), o = Q(ke, p, n, T)) {
                    if (T.readyState = 1, h && m.trigger("ajaxSend", [T, p]), u)return T;
                    p.async && p.timeout > 0 && (l = t.setTimeout(function () {
                        T.abort("timeout")
                    }, p.timeout));
                    try {
                        u = !1, o.send(w, i)
                    } catch (t) {
                        if (u)throw t;
                        i(-1, t)
                    }
                } else i(-1, "No Transport");
                return T
            },
            getJSON: function (t, e, n) {
                return ft.get(t, e, n, "json")
            },
            getScript: function (t, e) {
                return ft.get(t, void 0, e, "script")
            }
        }), ft.each(["get", "post"], function (t, e) {
            ft[e] = function (t, n, i, o) {
                return ft.isFunction(n) && (o = o || i, i = n, n = void 0), ft.ajax(ft.extend({
                    url: t,
                    type: e,
                    dataType: o,
                    data: n,
                    success: i
                }, ft.isPlainObject(t) && t))
            }
        }), ft._evalUrl = function (t) {
            return ft.ajax({url: t, type: "GET", dataType: "script", cache: !0, async: !1, global: !1, throws: !0})
        }, ft.fn.extend({
            wrapAll: function (t) {
                var e;
                return this[0] && (ft.isFunction(t) && (t = t.call(this[0])), e = ft(t, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && e.insertBefore(this[0]), e.map(function () {
                    for (var t = this; t.firstElementChild;)t = t.firstElementChild;
                    return t
                }).append(this)), this
            }, wrapInner: function (t) {
                return ft.isFunction(t) ? this.each(function (e) {
                    ft(this).wrapInner(t.call(this, e))
                }) : this.each(function () {
                    var e = ft(this), n = e.contents();
                    n.length ? n.wrapAll(t) : e.append(t)
                })
            }, wrap: function (t) {
                var e = ft.isFunction(t);
                return this.each(function (n) {
                    ft(this).wrapAll(e ? t.call(this, n) : t)
                })
            }, unwrap: function (t) {
                return this.parent(t).not("body").each(function () {
                    ft(this).replaceWith(this.childNodes)
                }), this
            }
        }), ft.expr.pseudos.hidden = function (t) {
            return !ft.expr.pseudos.visible(t)
        }, ft.expr.pseudos.visible = function (t) {
            return !!(t.offsetWidth || t.offsetHeight || t.getClientRects().length)
        }, ft.ajaxSettings.xhr = function () {
            try {
                return new t.XMLHttpRequest
            } catch (t) {
            }
        };
        var Pe = {0: 200, 1223: 204}, Ie = ft.ajaxSettings.xhr();
        dt.cors = !!Ie && "withCredentials" in Ie, dt.ajax = Ie = !!Ie, ft.ajaxTransport(function (e) {
            var n, i;
            if (dt.cors || Ie && !e.crossDomain)return {
                send: function (o, r) {
                    var a, s = e.xhr();
                    if (s.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields)for (a in e.xhrFields)s[a] = e.xhrFields[a];
                    e.mimeType && s.overrideMimeType && s.overrideMimeType(e.mimeType), e.crossDomain || o["X-Requested-With"] || (o["X-Requested-With"] = "XMLHttpRequest");
                    for (a in o)s.setRequestHeader(a, o[a]);
                    n = function (t) {
                        return function () {
                            n && (n = i = s.onload = s.onerror = s.onabort = s.onreadystatechange = null, "abort" === t ? s.abort() : "error" === t ? "number" != typeof s.status ? r(0, "error") : r(s.status, s.statusText) : r(Pe[s.status] || s.status, s.statusText, "text" !== (s.responseType || "text") || "string" != typeof s.responseText ? {binary: s.response} : {text: s.responseText}, s.getAllResponseHeaders()))
                        }
                    }, s.onload = n(), i = s.onerror = n("error"), void 0 !== s.onabort ? s.onabort = i : s.onreadystatechange = function () {
                        4 === s.readyState && t.setTimeout(function () {
                            n && i()
                        })
                    }, n = n("abort");
                    try {
                        s.send(e.hasContent && e.data || null)
                    } catch (t) {
                        if (n)throw t
                    }
                }, abort: function () {
                    n && n()
                }
            }
        }), ft.ajaxPrefilter(function (t) {
            t.crossDomain && (t.contents.script = !1)
        }), ft.ajaxSetup({
            accepts: {script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},
            contents: {script: /\b(?:java|ecma)script\b/},
            converters: {
                "text script": function (t) {
                    return ft.globalEval(t), t
                }
            }
        }), ft.ajaxPrefilter("script", function (t) {
            void 0 === t.cache && (t.cache = !1), t.crossDomain && (t.type = "GET")
        }), ft.ajaxTransport("script", function (t) {
            if (t.crossDomain) {
                var e, n;
                return {
                    send: function (i, o) {
                        e = ft("<script>").prop({
                            charset: t.scriptCharset,
                            src: t.url
                        }).on("load error", n = function (t) {
                            e.remove(), n = null, t && o("error" === t.type ? 404 : 200, t.type)
                        }), et.head.appendChild(e[0])
                    }, abort: function () {
                        n && n()
                    }
                }
            }
        });
        var De = [], Oe = /(=)\?(?=&|$)|\?\?/;
        ft.ajaxSetup({
            jsonp: "callback", jsonpCallback: function () {
                var t = De.pop() || ft.expando + "_" + ve++;
                return this[t] = !0, t
            }
        }), ft.ajaxPrefilter("json jsonp", function (e, n, i) {
            var o, r, a, s = e.jsonp !== !1 && (Oe.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Oe.test(e.data) && "data");
            if (s || "jsonp" === e.dataTypes[0])return o = e.jsonpCallback = ft.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, s ? e[s] = e[s].replace(Oe, "$1" + o) : e.jsonp !== !1 && (e.url += (ye.test(e.url) ? "&" : "?") + e.jsonp + "=" + o), e.converters["script json"] = function () {
                return a || ft.error(o + " was not called"), a[0]
            }, e.dataTypes[0] = "json", r = t[o], t[o] = function () {
                a = arguments
            }, i.always(function () {
                void 0 === r ? ft(t).removeProp(o) : t[o] = r, e[o] && (e.jsonpCallback = n.jsonpCallback, De.push(o)), a && ft.isFunction(r) && r(a[0]), a = r = void 0
            }), "script"
        }), dt.createHTMLDocument = function () {
            var t = et.implementation.createHTMLDocument("").body;
            return t.innerHTML = "<form></form><form></form>", 2 === t.childNodes.length
        }(), ft.parseHTML = function (t, e, n) {
            if ("string" != typeof t)return [];
            "boolean" == typeof e && (n = e, e = !1);
            var i, o, r;
            return e || (dt.createHTMLDocument ? (e = et.implementation.createHTMLDocument(""), i = e.createElement("base"), i.href = et.location.href, e.head.appendChild(i)) : e = et), o = bt.exec(t), r = !n && [], o ? [e.createElement(o[1])] : (o = b([t], e, r), r && r.length && ft(r).remove(), ft.merge([], o.childNodes))
        }, ft.fn.load = function (t, e, n) {
            var i, o, r, a = this, s = t.indexOf(" ");
            return s > -1 && (i = Y(t.slice(s)), t = t.slice(0, s)), ft.isFunction(e) ? (n = e, e = void 0) : e && "object" == typeof e && (o = "POST"), a.length > 0 && ft.ajax({
                url: t,
                type: o || "GET",
                dataType: "html",
                data: e
            }).done(function (t) {
                r = arguments, a.html(i ? ft("<div>").append(ft.parseHTML(t)).find(i) : t)
            }).always(n && function (t, e) {
                    a.each(function () {
                        n.apply(this, r || [t.responseText, e, t])
                    })
                }), this
        }, ft.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (t, e) {
            ft.fn[e] = function (t) {
                return this.on(e, t)
            }
        }), ft.expr.pseudos.animated = function (t) {
            return ft.grep(ft.timers, function (e) {
                return t === e.elem
            }).length
        }, ft.offset = {
            setOffset: function (t, e, n) {
                var i, o, r, a, s, l, c, u = ft.css(t, "position"), h = ft(t), d = {};
                "static" === u && (t.style.position = "relative"), s = h.offset(), r = ft.css(t, "top"), l = ft.css(t, "left"), c = ("absolute" === u || "fixed" === u) && (r + l).indexOf("auto") > -1, c ? (i = h.position(), a = i.top, o = i.left) : (a = parseFloat(r) || 0, o = parseFloat(l) || 0), ft.isFunction(e) && (e = e.call(t, n, ft.extend({}, s))), null != e.top && (d.top = e.top - s.top + a), null != e.left && (d.left = e.left - s.left + o), "using" in e ? e.using.call(t, d) : h.css(d)
            }
        }, ft.fn.extend({
            offset: function (t) {
                if (arguments.length)return void 0 === t ? this : this.each(function (e) {
                    ft.offset.setOffset(this, t, e)
                });
                var e, n, i, o, r = this[0];
                if (r)return r.getClientRects().length ? (i = r.getBoundingClientRect(), i.width || i.height ? (o = r.ownerDocument, n = J(o), e = o.documentElement, {
                    top: i.top + n.pageYOffset - e.clientTop,
                    left: i.left + n.pageXOffset - e.clientLeft
                }) : i) : {top: 0, left: 0}
            }, position: function () {
                if (this[0]) {
                    var t, e, n = this[0], i = {top: 0, left: 0};
                    return "fixed" === ft.css(n, "position") ? e = n.getBoundingClientRect() : (t = this.offsetParent(), e = this.offset(), ft.nodeName(t[0], "html") || (i = t.offset()), i = {
                        top: i.top + ft.css(t[0], "borderTopWidth", !0),
                        left: i.left + ft.css(t[0], "borderLeftWidth", !0)
                    }), {
                        top: e.top - i.top - ft.css(n, "marginTop", !0),
                        left: e.left - i.left - ft.css(n, "marginLeft", !0)
                    }
                }
            }, offsetParent: function () {
                return this.map(function () {
                    for (var t = this.offsetParent; t && "static" === ft.css(t, "position");)t = t.offsetParent;
                    return t || Yt
                })
            }
        }), ft.each({scrollLeft: "pageXOffset", scrollTop: "pageYOffset"}, function (t, e) {
            var n = "pageYOffset" === e;
            ft.fn[t] = function (i) {
                return _t(this, function (t, i, o) {
                    var r = J(t);
                    if (void 0 === o)return r ? r[e] : t[i];
                    r ? r.scrollTo(n ? r.pageXOffset : o, n ? o : r.pageYOffset) : t[i] = o
                }, t, i, arguments.length)
            }
        }), ft.each(["top", "left"], function (t, e) {
            ft.cssHooks[e] = O(dt.pixelPosition, function (t, n) {
                if (n)return n = D(t, e), te.test(n) ? ft(t).position()[e] + "px" : n
            })
        }), ft.each({Height: "height", Width: "width"}, function (t, e) {
            ft.each({padding: "inner" + t, content: e, "": "outer" + t}, function (n, i) {
                ft.fn[i] = function (o, r) {
                    var a = arguments.length && (n || "boolean" != typeof o), s = n || (o === !0 || r === !0 ? "margin" : "border");
                    return _t(this, function (e, n, o) {
                        var r;
                        return ft.isWindow(e) ? 0 === i.indexOf("outer") ? e["inner" + t] : e.document.documentElement["client" + t] : 9 === e.nodeType ? (r = e.documentElement, Math.max(e.body["scroll" + t], r["scroll" + t], e.body["offset" + t], r["offset" + t], r["client" + t])) : void 0 === o ? ft.css(e, n, s) : ft.style(e, n, o, s)
                    }, e, a ? o : void 0, a)
                }
            })
        }), ft.fn.extend({
            bind: function (t, e, n) {
                return this.on(t, null, e, n)
            }, unbind: function (t, e) {
                return this.off(t, null, e)
            }, delegate: function (t, e, n, i) {
                return this.on(e, t, n, i)
            }, undelegate: function (t, e, n) {
                return 1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", n)
            }
        }), ft.parseJSON = JSON.parse, "function" == typeof define && define.amd && define("jquery", [], function () {
            return ft
        });
        var Le = t.jQuery, Fe = t.$;
        return ft.noConflict = function (e) {
            return t.$ === ft && (t.$ = Fe), e && t.jQuery === ft && (t.jQuery = Le), ft
        }, e || (t.jQuery = t.$ = ft), ft
    }), function (t, e) {
        "function" == typeof define && define.amd ? define(e) : "object" == typeof exports ? module.exports = e(require, exports, module) : t.Tether = e()
    }(this, function (t, e, n) {
        "use strict";
        function i(t, e) {
            if (!(t instanceof e))throw new TypeError("Cannot call a class as a function")
        }

        function o(t) {
            var e = getComputedStyle(t) || {}, n = e.position;
            if ("fixed" === n)return t;
            for (var i = t; i = i.parentNode;) {
                var o = void 0;
                try {
                    o = getComputedStyle(i)
                } catch (t) {
                }
                if (void 0 === o || null === o)return i;
                var r = o, a = r.overflow, s = r.overflowX, l = r.overflowY;
                if (/(auto|scroll)/.test(a + l + s) && ("absolute" !== n || ["relative", "absolute", "fixed"].indexOf(o.position) >= 0))return i
            }
            return document.body
        }

        function r(t) {
            var e = void 0;
            t === document ? (e = document, t = document.documentElement) : e = t.ownerDocument;
            var n = e.documentElement, i = {}, o = t.getBoundingClientRect();
            for (var r in o)i[r] = o[r];
            var a = S(e);
            return i.top -= a.top, i.left -= a.left, void 0 === i.width && (i.width = document.body.scrollWidth - i.left - i.right), void 0 === i.height && (i.height = document.body.scrollHeight - i.top - i.bottom), i.top = i.top - n.clientTop, i.left = i.left - n.clientLeft, i.right = e.body.clientWidth - i.width - i.left, i.bottom = e.body.clientHeight - i.height - i.top, i
        }

        function a(t) {
            return t.offsetParent || document.documentElement
        }

        function s() {
            var t = document.createElement("div");
            t.style.width = "100%", t.style.height = "200px";
            var e = document.createElement("div");
            l(e.style, {
                position: "absolute",
                top: 0,
                left: 0,
                pointerEvents: "none",
                visibility: "hidden",
                width: "200px",
                height: "150px",
                overflow: "hidden"
            }), e.appendChild(t), document.body.appendChild(e);
            var n = t.offsetWidth;
            e.style.overflow = "scroll";
            var i = t.offsetWidth;
            n === i && (i = e.clientWidth), document.body.removeChild(e);
            var o = n - i;
            return {width: o, height: o}
        }

        function l() {
            var t = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0], e = [];
            return Array.prototype.push.apply(e, arguments), e.slice(1).forEach(function (e) {
                if (e)for (var n in e)({}).hasOwnProperty.call(e, n) && (t[n] = e[n])
            }), t
        }

        function c(t, e) {
            if (void 0 !== t.classList)e.split(" ").forEach(function (e) {
                e.trim() && t.classList.remove(e)
            }); else {
                var n = new RegExp("(^| )" + e.split(" ").join("|") + "( |$)", "gi");
                f(t, d(t).replace(n, " "))
            }
        }

        function u(t, e) {
            if (void 0 !== t.classList)e.split(" ").forEach(function (e) {
                e.trim() && t.classList.add(e)
            }); else {
                c(t, e);
                f(t, d(t) + " " + e)
            }
        }

        function h(t, e) {
            if (void 0 !== t.classList)return t.classList.contains(e);
            var n = d(t);
            return new RegExp("(^| )" + e + "( |$)", "gi").test(n)
        }

        function d(t) {
            return t.className instanceof SVGAnimatedString ? t.className.baseVal : t.className
        }

        function f(t, e) {
            t.setAttribute("class", e)
        }

        function p(t, e, n) {
            n.forEach(function (n) {
                e.indexOf(n) === -1 && h(t, n) && c(t, n)
            }), e.forEach(function (e) {
                h(t, e) || u(t, e)
            })
        }

        function i(t, e) {
            if (!(t instanceof e))throw new TypeError("Cannot call a class as a function")
        }

        function g(t, e) {
            var n = arguments.length <= 2 || void 0 === arguments[2] ? 1 : arguments[2];
            return t + n >= e && e >= t - n
        }

        function m() {
            return "undefined" != typeof performance && void 0 !== performance.now ? performance.now() : +new Date
        }

        function v() {
            for (var t = {top: 0, left: 0}, e = arguments.length, n = Array(e), i = 0; i < e; i++)n[i] = arguments[i];
            return n.forEach(function (e) {
                var n = e.top, i = e.left;
                "string" == typeof n && (n = parseFloat(n, 10)), "string" == typeof i && (i = parseFloat(i, 10)), t.top += n, t.left += i
            }), t
        }

        function y(t, e) {
            return "string" == typeof t.left && t.left.indexOf("%") !== -1 && (t.left = parseFloat(t.left, 10) / 100 * e.width), "string" == typeof t.top && t.top.indexOf("%") !== -1 && (t.top = parseFloat(t.top, 10) / 100 * e.height), t
        }

        function b(t, e) {
            return "scrollParent" === e ? e = t.scrollParent : "window" === e && (e = [pageXOffset, pageYOffset, innerWidth + pageXOffset, innerHeight + pageYOffset]), e === document && (e = e.documentElement), void 0 !== e.nodeType && function () {
                var t = r(e), n = t, i = getComputedStyle(e);
                e = [n.left, n.top, t.width + n.left, t.height + n.top], B.forEach(function (t, n) {
                    t = t[0].toUpperCase() + t.substr(1), "Top" === t || "Left" === t ? e[n] += parseFloat(i["border" + t + "Width"]) : e[n] -= parseFloat(i["border" + t + "Width"])
                })
            }(), e
        }

        var w = function () {
            function t(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var i = e[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
                }
            }

            return function (e, n, i) {
                return n && t(e.prototype, n), i && t(e, i), e
            }
        }(), x = void 0;
        void 0 === x && (x = {modules: []});
        var C = function () {
            var t = 0;
            return function () {
                return ++t
            }
        }(), T = {}, S = function (t) {
            var e = t._tetherZeroElement;
            void 0 === e && (e = t.createElement("div"), e.setAttribute("data-tether-id", C()), l(e.style, {
                top: 0,
                left: 0,
                position: "absolute"
            }), t.body.appendChild(e), t._tetherZeroElement = e);
            var n = e.getAttribute("data-tether-id");
            if (void 0 === T[n]) {
                T[n] = {};
                var i = e.getBoundingClientRect();
                for (var o in i)T[n][o] = i[o];
                k(function () {
                    delete T[n]
                })
            }
            return T[n]
        }, E = [], k = function (t) {
            E.push(t)
        }, A = function () {
            for (var t = void 0; t = E.pop();)t()
        }, _ = function () {
            function t() {
                i(this, t)
            }

            return w(t, [{
                key: "on", value: function (t, e, n) {
                    var i = !(arguments.length <= 3 || void 0 === arguments[3]) && arguments[3];
                    void 0 === this.bindings && (this.bindings = {}), void 0 === this.bindings[t] && (this.bindings[t] = []), this.bindings[t].push({
                        handler: e,
                        ctx: n,
                        once: i
                    })
                }
            }, {
                key: "once", value: function (t, e, n) {
                    this.on(t, e, n, !0)
                }
            }, {
                key: "off", value: function (t, e) {
                    if (void 0 === this.bindings || void 0 === this.bindings[t])if (void 0 === e)delete this.bindings[t]; else for (var n = 0; n < this.bindings[t].length;)this.bindings[t][n].handler === e ? this.bindings[t].splice(n, 1) : ++n
                }
            }, {
                key: "trigger", value: function (t) {
                    if (void 0 !== this.bindings && this.bindings[t]) {
                        for (var e = 0, n = arguments.length, i = Array(n > 1 ? n - 1 : 0), o = 1; o < n; o++)i[o - 1] = arguments[o];
                        for (; e < this.bindings[t].length;) {
                            var r = this.bindings[t][e], a = r.handler, s = r.ctx, l = r.once, c = s;
                            void 0 === c && (c = this), a.apply(c, i), l ? this.bindings[t].splice(e, 1) : ++e
                        }
                    }
                }
            }]), t
        }();
        x.Utils = {
            getScrollParent: o,
            getBounds: r,
            getOffsetParent: a,
            extend: l,
            addClass: u,
            removeClass: c,
            hasClass: h,
            updateClasses: p,
            defer: k,
            flush: A,
            uniqueId: C,
            Evented: _,
            getScrollBarSize: s
        };
        var P = function () {
            function t(t, e) {
                var n = [], i = !0, o = !1, r = void 0;
                try {
                    for (var a, s = t[Symbol.iterator](); !(i = (a = s.next()).done) && (n.push(a.value), !e || n.length !== e); i = !0);
                } catch (t) {
                    o = !0, r = t
                } finally {
                    try {
                        !i && s.return && s.return()
                    } finally {
                        if (o)throw r
                    }
                }
                return n
            }

            return function (e, n) {
                if (Array.isArray(e))return e;
                if (Symbol.iterator in Object(e))return t(e, n);
                throw new TypeError("Invalid attempt to destructure non-iterable instance")
            }
        }(), w = function () {
            function t(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var i = e[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
                }
            }

            return function (e, n, i) {
                return n && t(e.prototype, n), i && t(e, i), e
            }
        }();
        if (void 0 === x)throw new Error("You must include the utils.js file before tether.js");
        var I = x.Utils, o = I.getScrollParent, r = I.getBounds, a = I.getOffsetParent, l = I.extend, u = I.addClass, c = I.removeClass, p = I.updateClasses, k = I.defer, A = I.flush, s = I.getScrollBarSize, D = function () {
            if ("undefined" == typeof document)return "";
            for (var t = document.createElement("div"), e = ["transform", "webkitTransform", "OTransform", "MozTransform", "msTransform"], n = 0; n < e.length; ++n) {
                var i = e[n];
                if (void 0 !== t.style[i])return i
            }
        }(), O = [], L = function () {
            O.forEach(function (t) {
                t.position(!1)
            }), A()
        };
        !function () {
            var t = null, e = null, n = null, i = function i() {
                if (void 0 !== e && e > 16)return e = Math.min(e - 16, 250), void(n = setTimeout(i, 250));
                void 0 !== t && m() - t < 10 || (void 0 !== n && (clearTimeout(n), n = null), t = m(), L(), e = m() - t)
            };
            "undefined" != typeof window && ["resize", "scroll", "touchmove"].forEach(function (t) {
                window.addEventListener(t, i)
            })
        }();
        var F = {center: "center", left: "right", right: "left"}, N = {
            middle: "middle",
            top: "bottom",
            bottom: "top"
        }, M = {
            top: 0, left: 0, middle: "50%", center: "50%", bottom: "100%", right: "100%"
        }, R = function (t, e) {
            var n = t.left, i = t.top;
            return "auto" === n && (n = F[e.left]), "auto" === i && (i = N[e.top]), {left: n, top: i}
        }, W = function (t) {
            var e = t.left, n = t.top;
            return void 0 !== M[t.left] && (e = M[t.left]), void 0 !== M[t.top] && (n = M[t.top]), {left: e, top: n}
        }, H = function (t) {
            var e = t.split(" "), n = P(e, 2);
            return {top: n[0], left: n[1]}
        }, j = H, z = function () {
            function t(e) {
                var n = this;
                i(this, t), this.position = this.position.bind(this), O.push(this), this.history = [], this.setOptions(e, !1), x.modules.forEach(function (t) {
                    void 0 !== t.initialize && t.initialize.call(n)
                }), this.position()
            }

            return w(t, [{
                key: "getClass", value: function () {
                    var t = arguments.length <= 0 || void 0 === arguments[0] ? "" : arguments[0], e = this.options.classes;
                    return void 0 !== e && e[t] ? this.options.classes[t] : this.options.classPrefix ? this.options.classPrefix + "-" + t : t
                }
            }, {
                key: "setOptions", value: function (t) {
                    var e = this, n = arguments.length <= 1 || void 0 === arguments[1] || arguments[1], i = {
                        offset: "0 0",
                        targetOffset: "0 0",
                        targetAttachment: "auto auto",
                        classPrefix: "tether"
                    };
                    this.options = l(i, t);
                    var r = this.options, a = r.element, s = r.target, c = r.targetModifier;
                    if (this.element = a, this.target = s, this.targetModifier = c, "viewport" === this.target ? (this.target = document.body, this.targetModifier = "visible") : "scroll-handle" === this.target && (this.target = document.body, this.targetModifier = "scroll-handle"), ["element", "target"].forEach(function (t) {
                            if (void 0 === e[t])throw new Error("Tether Error: Both element and target must be defined");
                            void 0 !== e[t].jquery ? e[t] = e[t][0] : "string" == typeof e[t] && (e[t] = document.querySelector(e[t]))
                        }), u(this.element, this.getClass("element")), this.options.addTargetClasses !== !1 && u(this.target, this.getClass("target")), !this.options.attachment)throw new Error("Tether Error: You must provide an attachment");
                    this.targetAttachment = j(this.options.targetAttachment), this.attachment = j(this.options.attachment), this.offset = H(this.options.offset), this.targetOffset = H(this.options.targetOffset), void 0 !== this.scrollParent && this.disable(), "scroll-handle" === this.targetModifier ? this.scrollParent = this.target : this.scrollParent = o(this.target), this.options.enabled !== !1 && this.enable(n)
                }
            }, {
                key: "getTargetBounds", value: function () {
                    if (void 0 === this.targetModifier)return r(this.target);
                    if ("visible" === this.targetModifier) {
                        if (this.target === document.body)return {
                            top: pageYOffset,
                            left: pageXOffset,
                            height: innerHeight,
                            width: innerWidth
                        };
                        var t = r(this.target), e = {height: t.height, width: t.width, top: t.top, left: t.left};
                        return e.height = Math.min(e.height, t.height - (pageYOffset - t.top)), e.height = Math.min(e.height, t.height - (t.top + t.height - (pageYOffset + innerHeight))), e.height = Math.min(innerHeight, e.height), e.height -= 2, e.width = Math.min(e.width, t.width - (pageXOffset - t.left)), e.width = Math.min(e.width, t.width - (t.left + t.width - (pageXOffset + innerWidth))), e.width = Math.min(innerWidth, e.width), e.width -= 2, e.top < pageYOffset && (e.top = pageYOffset), e.left < pageXOffset && (e.left = pageXOffset), e
                    }
                    if ("scroll-handle" === this.targetModifier) {
                        var t = void 0, n = this.target;
                        n === document.body ? (n = document.documentElement, t = {
                            left: pageXOffset,
                            top: pageYOffset,
                            height: innerHeight,
                            width: innerWidth
                        }) : t = r(n);
                        var i = getComputedStyle(n), o = n.scrollWidth > n.clientWidth || [i.overflow, i.overflowX].indexOf("scroll") >= 0 || this.target !== document.body, a = 0;
                        o && (a = 15);
                        var s = t.height - parseFloat(i.borderTopWidth) - parseFloat(i.borderBottomWidth) - a, e = {
                            width: 15,
                            height: .975 * s * (s / n.scrollHeight),
                            left: t.left + t.width - parseFloat(i.borderLeftWidth) - 15
                        }, l = 0;
                        s < 408 && this.target === document.body && (l = -11e-5 * Math.pow(s, 2) - .00727 * s + 22.58), this.target !== document.body && (e.height = Math.max(e.height, 24));
                        var c = this.target.scrollTop / (n.scrollHeight - s);
                        return e.top = c * (s - e.height - l) + t.top + parseFloat(i.borderTopWidth), this.target === document.body && (e.height = Math.max(e.height, 24)), e
                    }
                }
            }, {
                key: "clearCache", value: function () {
                    this._cache = {}
                }
            }, {
                key: "cache", value: function (t, e) {
                    return void 0 === this._cache && (this._cache = {}), void 0 === this._cache[t] && (this._cache[t] = e.call(this)), this._cache[t]
                }
            }, {
                key: "enable", value: function () {
                    var t = arguments.length <= 0 || void 0 === arguments[0] || arguments[0];
                    this.options.addTargetClasses !== !1 && u(this.target, this.getClass("enabled")), u(this.element, this.getClass("enabled")), this.enabled = !0, this.scrollParent !== document && this.scrollParent.addEventListener("scroll", this.position), t && this.position()
                }
            }, {
                key: "disable", value: function () {
                    c(this.target, this.getClass("enabled")), c(this.element, this.getClass("enabled")), this.enabled = !1, void 0 !== this.scrollParent && this.scrollParent.removeEventListener("scroll", this.position)
                }
            }, {
                key: "destroy", value: function () {
                    var t = this;
                    this.disable(), O.forEach(function (e, n) {
                        if (e === t)return void O.splice(n, 1)
                    })
                }
            }, {
                key: "updateAttachClasses", value: function (t, e) {
                    var n = this;
                    t = t || this.attachment, e = e || this.targetAttachment;
                    var i = ["left", "top", "bottom", "right", "middle", "center"];
                    void 0 !== this._addAttachClasses && this._addAttachClasses.length && this._addAttachClasses.splice(0, this._addAttachClasses.length), void 0 === this._addAttachClasses && (this._addAttachClasses = []);
                    var o = this._addAttachClasses;
                    t.top && o.push(this.getClass("element-attached") + "-" + t.top), t.left && o.push(this.getClass("element-attached") + "-" + t.left), e.top && o.push(this.getClass("target-attached") + "-" + e.top), e.left && o.push(this.getClass("target-attached") + "-" + e.left);
                    var r = [];
                    i.forEach(function (t) {
                        r.push(n.getClass("element-attached") + "-" + t), r.push(n.getClass("target-attached") + "-" + t)
                    }), k(function () {
                        void 0 !== n._addAttachClasses && (p(n.element, n._addAttachClasses, r), n.options.addTargetClasses !== !1 && p(n.target, n._addAttachClasses, r), delete n._addAttachClasses)
                    })
                }
            }, {
                key: "position", value: function () {
                    var t = this, e = arguments.length <= 0 || void 0 === arguments[0] || arguments[0];
                    if (this.enabled) {
                        this.clearCache();
                        var n = R(this.targetAttachment, this.attachment);
                        this.updateAttachClasses(this.attachment, n);
                        var i = this.cache("element-bounds", function () {
                            return r(t.element)
                        }), o = i.width, l = i.height;
                        if (0 === o && 0 === l && void 0 !== this.lastSize) {
                            var c = this.lastSize;
                            o = c.width, l = c.height
                        } else this.lastSize = {width: o, height: l};
                        var u = this.cache("target-bounds", function () {
                            return t.getTargetBounds()
                        }), h = u, d = y(W(this.attachment), {
                            width: o,
                            height: l
                        }), f = y(W(n), h), p = y(this.offset, {width: o, height: l}), g = y(this.targetOffset, h);
                        d = v(d, p), f = v(f, g);
                        for (var m = u.left + f.left - d.left, b = u.top + f.top - d.top, w = 0; w < x.modules.length; ++w) {
                            var C = x.modules[w], T = C.position.call(this, {
                                left: m,
                                top: b,
                                targetAttachment: n,
                                targetPos: u,
                                elementPos: i,
                                offset: d,
                                targetOffset: f,
                                manualOffset: p,
                                manualTargetOffset: g,
                                scrollbarSize: E,
                                attachment: this.attachment
                            });
                            if (T === !1)return !1;
                            void 0 !== T && "object" == typeof T && (b = T.top, m = T.left)
                        }
                        var S = {
                            page: {top: b, left: m},
                            viewport: {
                                top: b - pageYOffset,
                                bottom: pageYOffset - b - l + innerHeight,
                                left: m - pageXOffset,
                                right: pageXOffset - m - o + innerWidth
                            }
                        }, E = void 0;
                        return document.body.scrollWidth > window.innerWidth && (E = this.cache("scrollbar-size", s), S.viewport.bottom -= E.height), document.body.scrollHeight > window.innerHeight && (E = this.cache("scrollbar-size", s), S.viewport.right -= E.width), ["", "static"].indexOf(document.body.style.position) !== -1 && ["", "static"].indexOf(document.body.parentElement.style.position) !== -1 || (S.page.bottom = document.body.scrollHeight - b - l, S.page.right = document.body.scrollWidth - m - o), void 0 !== this.options.optimizations && this.options.optimizations.moveElement !== !1 && void 0 === this.targetModifier && function () {
                            var e = t.cache("target-offsetparent", function () {
                                return a(t.target)
                            }), n = t.cache("target-offsetparent-bounds", function () {
                                return r(e)
                            }), i = getComputedStyle(e), o = n, s = {};
                            if (["Top", "Left", "Bottom", "Right"].forEach(function (t) {
                                    s[t.toLowerCase()] = parseFloat(i["border" + t + "Width"])
                                }), n.right = document.body.scrollWidth - n.left - o.width + s.right, n.bottom = document.body.scrollHeight - n.top - o.height + s.bottom, S.page.top >= n.top + s.top && S.page.bottom >= n.bottom && S.page.left >= n.left + s.left && S.page.right >= n.right) {
                                var l = e.scrollTop, c = e.scrollLeft;
                                S.offset = {
                                    top: S.page.top - n.top + l - s.top,
                                    left: S.page.left - n.left + c - s.left
                                }
                            }
                        }(), this.move(S), this.history.unshift(S), this.history.length > 3 && this.history.pop(), e && A(), !0
                    }
                }
            }, {
                key: "move", value: function (t) {
                    var e = this;
                    if (void 0 !== this.element.parentNode) {
                        var n = {};
                        for (var i in t) {
                            n[i] = {};
                            for (var o in t[i]) {
                                for (var r = !1, s = 0; s < this.history.length; ++s) {
                                    var c = this.history[s];
                                    if (void 0 !== c[i] && !g(c[i][o], t[i][o])) {
                                        r = !0;
                                        break
                                    }
                                }
                                r || (n[i][o] = !0)
                            }
                        }
                        var u = {top: "", left: "", right: "", bottom: ""}, h = function (t, n) {
                            if ((void 0 !== e.options.optimizations ? e.options.optimizations.gpu : null) !== !1) {
                                var i = void 0, o = void 0;
                                t.top ? (u.top = 0, i = n.top) : (u.bottom = 0, i = -n.bottom), t.left ? (u.left = 0, o = n.left) : (u.right = 0, o = -n.right), u[D] = "translateX(" + Math.round(o) + "px) translateY(" + Math.round(i) + "px)", "msTransform" !== D && (u[D] += " translateZ(0)")
                            } else t.top ? u.top = n.top + "px" : u.bottom = n.bottom + "px", t.left ? u.left = n.left + "px" : u.right = n.right + "px"
                        }, d = !1;
                        if ((n.page.top || n.page.bottom) && (n.page.left || n.page.right) ? (u.position = "absolute", h(n.page, t.page)) : (n.viewport.top || n.viewport.bottom) && (n.viewport.left || n.viewport.right) ? (u.position = "fixed", h(n.viewport, t.viewport)) : void 0 !== n.offset && n.offset.top && n.offset.left ? function () {
                                u.position = "absolute";
                                var i = e.cache("target-offsetparent", function () {
                                    return a(e.target)
                                });
                                a(e.element) !== i && k(function () {
                                    e.element.parentNode.removeChild(e.element), i.appendChild(e.element)
                                }), h(n.offset, t.offset), d = !0
                            }() : (u.position = "absolute", h({top: !0, left: !0}, t.page)), !d) {
                            for (var f = !0, p = this.element.parentNode; p && "BODY" !== p.tagName;) {
                                if ("static" !== getComputedStyle(p).position) {
                                    f = !1;
                                    break
                                }
                                p = p.parentNode
                            }
                            f || (this.element.parentNode.removeChild(this.element), document.body.appendChild(this.element))
                        }
                        var m = {}, v = !1;
                        for (var o in u) {
                            var y = u[o], b = this.element.style[o];
                            "" !== b && "" !== y && ["top", "left", "bottom", "right"].indexOf(o) >= 0 && (b = parseFloat(b), y = parseFloat(y)), b !== y && (v = !0, m[o] = y)
                        }
                        v && k(function () {
                            l(e.element.style, m)
                        })
                    }
                }
            }]), t
        }();
        z.modules = [], x.position = L;
        var V = l(z, x), P = function () {
            function t(t, e) {
                var n = [], i = !0, o = !1, r = void 0;
                try {
                    for (var a, s = t[Symbol.iterator](); !(i = (a = s.next()).done) && (n.push(a.value), !e || n.length !== e); i = !0);
                } catch (t) {
                    o = !0, r = t
                } finally {
                    try {
                        !i && s.return && s.return()
                    } finally {
                        if (o)throw r
                    }
                }
                return n
            }

            return function (e, n) {
                if (Array.isArray(e))return e;
                if (Symbol.iterator in Object(e))return t(e, n);
                throw new TypeError("Invalid attempt to destructure non-iterable instance")
            }
        }(), I = x.Utils, r = I.getBounds, l = I.extend, p = I.updateClasses, k = I.defer, B = ["left", "top", "right", "bottom"];
        x.modules.push({
            position: function (t) {
                var e = this, n = t.top, i = t.left, o = t.targetAttachment;
                if (!this.options.constraints)return !0;
                var a = this.cache("element-bounds", function () {
                    return r(e.element)
                }), s = a.height, c = a.width;
                if (0 === c && 0 === s && void 0 !== this.lastSize) {
                    var u = this.lastSize;
                    c = u.width, s = u.height
                }
                var h = this.cache("target-bounds", function () {
                    return e.getTargetBounds()
                }), d = h.height, f = h.width, g = [this.getClass("pinned"), this.getClass("out-of-bounds")];
                this.options.constraints.forEach(function (t) {
                    var e = t.outOfBoundsClass, n = t.pinnedClass;
                    e && g.push(e), n && g.push(n)
                }), g.forEach(function (t) {
                    ["left", "top", "right", "bottom"].forEach(function (e) {
                        g.push(t + "-" + e)
                    })
                });
                var m = [], v = l({}, o), y = l({}, this.attachment);
                return this.options.constraints.forEach(function (t) {
                    var r = t.to, a = t.attachment, l = t.pin;
                    void 0 === a && (a = "");
                    var u = void 0, h = void 0;
                    if (a.indexOf(" ") >= 0) {
                        var p = a.split(" "), g = P(p, 2);
                        h = g[0], u = g[1]
                    } else u = h = a;
                    var w = b(e, r);
                    "target" !== h && "both" !== h || (n < w[1] && "top" === v.top && (n += d, v.top = "bottom"), n + s > w[3] && "bottom" === v.top && (n -= d, v.top = "top")), "together" === h && (n < w[1] && "top" === v.top && ("bottom" === y.top ? (n += d, v.top = "bottom", n += s, y.top = "top") : "top" === y.top && (n += d, v.top = "bottom", n -= s, y.top = "bottom")), n + s > w[3] && "bottom" === v.top && ("top" === y.top ? (n -= d, v.top = "top", n -= s, y.top = "bottom") : "bottom" === y.top && (n -= d, v.top = "top", n += s, y.top = "top")), "middle" === v.top && (n + s > w[3] && "top" === y.top ? (n -= s, y.top = "bottom") : n < w[1] && "bottom" === y.top && (n += s, y.top = "top"))), "target" !== u && "both" !== u || (i < w[0] && "left" === v.left && (i += f, v.left = "right"), i + c > w[2] && "right" === v.left && (i -= f, v.left = "left")), "together" === u && (i < w[0] && "left" === v.left ? "right" === y.left ? (i += f, v.left = "right", i += c, y.left = "left") : "left" === y.left && (i += f, v.left = "right", i -= c, y.left = "right") : i + c > w[2] && "right" === v.left ? "left" === y.left ? (i -= f, v.left = "left", i -= c, y.left = "right") : "right" === y.left && (i -= f, v.left = "left", i += c, y.left = "left") : "center" === v.left && (i + c > w[2] && "left" === y.left ? (i -= c, y.left = "right") : i < w[0] && "right" === y.left && (i += c, y.left = "left"))), "element" !== h && "both" !== h || (n < w[1] && "bottom" === y.top && (n += s, y.top = "top"), n + s > w[3] && "top" === y.top && (n -= s, y.top = "bottom")), "element" !== u && "both" !== u || (i < w[0] && ("right" === y.left ? (i += c, y.left = "left") : "center" === y.left && (i += c / 2, y.left = "left")), i + c > w[2] && ("left" === y.left ? (i -= c, y.left = "right") : "center" === y.left && (i -= c / 2, y.left = "right"))), "string" == typeof l ? l = l.split(",").map(function (t) {
                        return t.trim()
                    }) : l === !0 && (l = ["top", "left", "right", "bottom"]), l = l || [];
                    var x = [], C = [];
                    n < w[1] && (l.indexOf("top") >= 0 ? (n = w[1], x.push("top")) : C.push("top")), n + s > w[3] && (l.indexOf("bottom") >= 0 ? (n = w[3] - s, x.push("bottom")) : C.push("bottom")), i < w[0] && (l.indexOf("left") >= 0 ? (i = w[0], x.push("left")) : C.push("left")), i + c > w[2] && (l.indexOf("right") >= 0 ? (i = w[2] - c, x.push("right")) : C.push("right")), x.length && function () {
                        var t = void 0;
                        t = void 0 !== e.options.pinnedClass ? e.options.pinnedClass : e.getClass("pinned"), m.push(t), x.forEach(function (e) {
                            m.push(t + "-" + e)
                        })
                    }(), C.length && function () {
                        var t = void 0;
                        t = void 0 !== e.options.outOfBoundsClass ? e.options.outOfBoundsClass : e.getClass("out-of-bounds"), m.push(t), C.forEach(function (e) {
                            m.push(t + "-" + e)
                        })
                    }(), (x.indexOf("left") >= 0 || x.indexOf("right") >= 0) && (y.left = v.left = !1), (x.indexOf("top") >= 0 || x.indexOf("bottom") >= 0) && (y.top = v.top = !1), v.top === o.top && v.left === o.left && y.top === e.attachment.top && y.left === e.attachment.left || e.updateAttachClasses(y, v)
                }), k(function () {
                    e.options.addTargetClasses !== !1 && p(e.target, m, g), p(e.element, m, g)
                }), {top: n, left: i}
            }
        });
        var I = x.Utils, r = I.getBounds, p = I.updateClasses, k = I.defer;
        x.modules.push({
            position: function (t) {
                var e = this, n = t.top, i = t.left, o = this.cache("element-bounds", function () {
                    return r(e.element)
                }), a = o.height, s = o.width, l = this.getTargetBounds(), c = n + a, u = i + s, h = [];
                n <= l.bottom && c >= l.top && ["left", "right"].forEach(function (t) {
                    var e = l[t];
                    e !== i && e !== u || h.push(t)
                }), i <= l.right && u >= l.left && ["top", "bottom"].forEach(function (t) {
                    var e = l[t];
                    e !== n && e !== c || h.push(t)
                });
                var d = [], f = [], g = ["left", "top", "right", "bottom"];
                return d.push(this.getClass("abutted")), g.forEach(function (t) {
                    d.push(e.getClass("abutted") + "-" + t)
                }), h.length && f.push(this.getClass("abutted")), h.forEach(function (t) {
                    f.push(e.getClass("abutted") + "-" + t)
                }), k(function () {
                    e.options.addTargetClasses !== !1 && p(e.target, f, d), p(e.element, f, d)
                }), !0
            }
        });
        var P = function () {
            function t(t, e) {
                var n = [], i = !0, o = !1, r = void 0;
                try {
                    for (var a, s = t[Symbol.iterator](); !(i = (a = s.next()).done) && (n.push(a.value), !e || n.length !== e); i = !0);
                } catch (t) {
                    o = !0, r = t
                } finally {
                    try {
                        !i && s.return && s.return()
                    } finally {
                        if (o)throw r
                    }
                }
                return n
            }

            return function (e, n) {
                if (Array.isArray(e))return e;
                if (Symbol.iterator in Object(e))return t(e, n);
                throw new TypeError("Invalid attempt to destructure non-iterable instance")
            }
        }();
        return x.modules.push({
            position: function (t) {
                var e = t.top, n = t.left;
                if (this.options.shift) {
                    var i = this.options.shift;
                    "function" == typeof this.options.shift && (i = this.options.shift.call(this, {top: e, left: n}));
                    var o = void 0, r = void 0;
                    if ("string" == typeof i) {
                        i = i.split(" "), i[1] = i[1] || i[0];
                        var a = i, s = P(a, 2);
                        o = s[0], r = s[1], o = parseFloat(o, 10), r = parseFloat(r, 10)
                    } else o = i.top, r = i.left;
                    return e += o, n += r, {top: e, left: n}
                }
            }
        }), V
    }), "undefined" == typeof jQuery)throw new Error("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");
+function (t) {
    var e = t.fn.jquery.split(" ")[0].split(".");
    if (e[0] < 2 && e[1] < 9 || 1 == e[0] && 9 == e[1] && e[2] < 1 || e[0] >= 4)throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0")
}(jQuery), function () {
    function t(t, e) {
        if (!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !e || "object" != typeof e && "function" != typeof e ? t : e
    }

    function e(t, e) {
        if ("function" != typeof e && null !== e)throw new TypeError("Super expression must either be null or a function, not " + typeof e);
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
    }

    function n(t, e) {
        if (!(t instanceof e))throw new TypeError("Cannot call a class as a function")
    }

    var i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
        return typeof t
    } : function (t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    }, o = function () {
        function t(t, e) {
            for (var n = 0; n < e.length; n++) {
                var i = e[n];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
            }
        }

        return function (e, n, i) {
            return n && t(e.prototype, n), i && t(e, i), e
        }
    }(), r = function (t) {
        function e(t) {
            return {}.toString.call(t).match(/\s([a-zA-Z]+)/)[1].toLowerCase()
        }

        function n(t) {
            return (t[0] || t).nodeType
        }

        function i() {
            return {
                bindType: a.end, delegateType: a.end, handle: function (e) {
                    if (t(e.target).is(this))return e.handleObj.handler.apply(this, arguments)
                }
            }
        }

        function o() {
            if (window.QUnit)return !1;
            var t = document.createElement("bootstrap");
            for (var e in s)if (void 0 !== t.style[e])return {end: s[e]};
            return !1
        }

        function r(e) {
            var n = this, i = !1;
            return t(this).one(l.TRANSITION_END, function () {
                i = !0
            }), setTimeout(function () {
                i || l.triggerTransitionEnd(n)
            }, e), this
        }

        var a = !1, s = {
            WebkitTransition: "webkitTransitionEnd",
            MozTransition: "transitionend",
            OTransition: "oTransitionEnd otransitionend",
            transition: "transitionend"
        }, l = {
            TRANSITION_END: "bsTransitionEnd", getUID: function (t) {
                do {
                    t += ~~(1e6 * Math.random())
                } while (document.getElementById(t));
                return t
            }, getSelectorFromElement: function (t) {
                var e = t.getAttribute("data-target");
                return e || (e = t.getAttribute("href") || "", e = /^#[a-z]/i.test(e) ? e : null), e
            }, reflow: function (t) {
                return t.offsetHeight
            }, triggerTransitionEnd: function (e) {
                t(e).trigger(a.end)
            }, supportsTransitionEnd: function () {
                return Boolean(a)
            }, typeCheckConfig: function (t, i, o) {
                for (var r in o)if (o.hasOwnProperty(r)) {
                    var a = o[r], s = i[r], l = s && n(s) ? "element" : e(s);
                    if (!new RegExp(a).test(l))throw new Error(t.toUpperCase() + ': Option "' + r + '" provided type "' + l + '" but expected type "' + a + '".')
                }
            }
        };
        return function () {
            a = o(), t.fn.emulateTransitionEnd = r, l.supportsTransitionEnd() && (t.event.special[l.TRANSITION_END] = i())
        }(), l
    }(jQuery), a = (function (t) {
        var e = "alert", i = t.fn[e], a = {DISMISS: '[data-dismiss="alert"]'}, s = {
            CLOSE: "close.bs.alert",
            CLOSED: "closed.bs.alert",
            CLICK_DATA_API: "click.bs.alert.data-api"
        }, l = {ALERT: "alert", FADE: "fade", SHOW: "show"}, c = function () {
            function e(t) {
                n(this, e), this._element = t
            }

            return e.prototype.close = function (t) {
                t = t || this._element;
                var e = this._getRootElement(t);
                this._triggerCloseEvent(e).isDefaultPrevented() || this._removeElement(e)
            }, e.prototype.dispose = function () {
                t.removeData(this._element, "bs.alert"), this._element = null
            }, e.prototype._getRootElement = function (e) {
                var n = r.getSelectorFromElement(e), i = !1;
                return n && (i = t(n)[0]), i || (i = t(e).closest("." + l.ALERT)[0]), i
            }, e.prototype._triggerCloseEvent = function (e) {
                var n = t.Event(s.CLOSE);
                return t(e).trigger(n), n
            }, e.prototype._removeElement = function (e) {
                var n = this;
                if (t(e).removeClass(l.SHOW), !r.supportsTransitionEnd() || !t(e).hasClass(l.FADE))return void this._destroyElement(e);
                t(e).one(r.TRANSITION_END, function (t) {
                    return n._destroyElement(e, t)
                }).emulateTransitionEnd(150)
            }, e.prototype._destroyElement = function (e) {
                t(e).detach().trigger(s.CLOSED).remove()
            }, e._jQueryInterface = function (n) {
                return this.each(function () {
                    var i = t(this), o = i.data("bs.alert");
                    o || (o = new e(this), i.data("bs.alert", o)), "close" === n && o[n](this)
                })
            }, e._handleDismiss = function (t) {
                return function (e) {
                    e && e.preventDefault(), t.close(this)
                }
            }, o(e, null, [{
                key: "VERSION", get: function () {
                    return "4.0.0-alpha.6"
                }
            }]), e
        }();
        t(document).on(s.CLICK_DATA_API, a.DISMISS, c._handleDismiss(new c)), t.fn[e] = c._jQueryInterface, t.fn[e].Constructor = c, t.fn[e].noConflict = function () {
            return t.fn[e] = i, c._jQueryInterface
        }, c
    }(jQuery), function (t) {
        var e = "button", i = t.fn[e], r = {
            ACTIVE: "active",
            BUTTON: "btn",
            FOCUS: "focus"
        }, a = {
            DATA_TOGGLE_CARROT: '[data-toggle^="button"]',
            DATA_TOGGLE: '[data-toggle="buttons"]',
            INPUT: "input",
            ACTIVE: ".active",
            BUTTON: ".btn"
        }, s = {
            CLICK_DATA_API: "click.bs.button.data-api",
            FOCUS_BLUR_DATA_API: "focus.bs.button.data-api blur.bs.button.data-api"
        }, l = function () {
            function e(t) {
                n(this, e), this._element = t
            }

            return e.prototype.toggle = function () {
                var e = !0, n = t(this._element).closest(a.DATA_TOGGLE)[0];
                if (n) {
                    var i = t(this._element).find(a.INPUT)[0];
                    if (i) {
                        if ("radio" === i.type)if (i.checked && t(this._element).hasClass(r.ACTIVE))e = !1; else {
                            var o = t(n).find(a.ACTIVE)[0];
                            o && t(o).removeClass(r.ACTIVE)
                        }
                        e && (i.checked = !t(this._element).hasClass(r.ACTIVE), t(i).trigger("change")), i.focus()
                    }
                }
                this._element.setAttribute("aria-pressed", !t(this._element).hasClass(r.ACTIVE)), e && t(this._element).toggleClass(r.ACTIVE)
            }, e.prototype.dispose = function () {
                t.removeData(this._element, "bs.button"), this._element = null
            }, e._jQueryInterface = function (n) {
                return this.each(function () {
                    var i = t(this).data("bs.button");
                    i || (i = new e(this), t(this).data("bs.button", i)), "toggle" === n && i[n]()
                })
            }, o(e, null, [{
                key: "VERSION", get: function () {
                    return "4.0.0-alpha.6"
                }
            }]), e
        }();
        t(document).on(s.CLICK_DATA_API, a.DATA_TOGGLE_CARROT, function (e) {
            e.preventDefault();
            var n = e.target;
            t(n).hasClass(r.BUTTON) || (n = t(n).closest(a.BUTTON)), l._jQueryInterface.call(t(n), "toggle")
        }).on(s.FOCUS_BLUR_DATA_API, a.DATA_TOGGLE_CARROT, function (e) {
            t(t(e.target).closest(a.BUTTON)[0]).toggleClass(r.FOCUS, /^focus(in)?$/.test(e.type))
        }), t.fn[e] = l._jQueryInterface, t.fn[e].Constructor = l, t.fn[e].noConflict = function () {
            return t.fn[e] = i, l._jQueryInterface
        }, l
    }(jQuery), function (t) {
        var e = "carousel", a = "bs.carousel", s = "." + a, l = t.fn[e], c = {
            interval: 5e3,
            keyboard: !0,
            slide: !1,
            pause: "hover",
            wrap: !0
        }, u = {
            interval: "(number|boolean)",
            keyboard: "boolean",
            slide: "(boolean|string)",
            pause: "(string|boolean)",
            wrap: "boolean"
        }, h = {NEXT: "next", PREV: "prev", LEFT: "left", RIGHT: "right"}, d = {
            SLIDE: "slide" + s,
            SLID: "slid" + s,
            KEYDOWN: "keydown" + s,
            MOUSEENTER: "mouseenter" + s,
            MOUSELEAVE: "mouseleave" + s,
            LOAD_DATA_API: "load.bs.carousel.data-api",
            CLICK_DATA_API: "click.bs.carousel.data-api"
        }, f = {
            CAROUSEL: "carousel",
            ACTIVE: "active",
            SLIDE: "slide",
            RIGHT: "carousel-item-right",
            LEFT: "carousel-item-left",
            NEXT: "carousel-item-next",
            PREV: "carousel-item-prev",
            ITEM: "carousel-item"
        }, p = {
            ACTIVE: ".active",
            ACTIVE_ITEM: ".active.carousel-item",
            ITEM: ".carousel-item",
            NEXT_PREV: ".carousel-item-next, .carousel-item-prev",
            INDICATORS: ".carousel-indicators",
            DATA_SLIDE: "[data-slide], [data-slide-to]",
            DATA_RIDE: '[data-ride="carousel"]'
        }, g = function () {
            function l(e, i) {
                n(this, l), this._items = null, this._interval = null, this._activeElement = null, this._isPaused = !1, this._isSliding = !1, this._config = this._getConfig(i), this._element = t(e)[0], this._indicatorsElement = t(this._element).find(p.INDICATORS)[0], this._addEventListeners()
            }

            return l.prototype.next = function () {
                if (this._isSliding)throw new Error("Carousel is sliding");
                this._slide(h.NEXT)
            }, l.prototype.nextWhenVisible = function () {
                document.hidden || this.next()
            }, l.prototype.prev = function () {
                if (this._isSliding)throw new Error("Carousel is sliding");
                this._slide(h.PREVIOUS)
            }, l.prototype.pause = function (e) {
                e || (this._isPaused = !0), t(this._element).find(p.NEXT_PREV)[0] && r.supportsTransitionEnd() && (r.triggerTransitionEnd(this._element), this.cycle(!0)), clearInterval(this._interval), this._interval = null
            }, l.prototype.cycle = function (t) {
                t || (this._isPaused = !1), this._interval && (clearInterval(this._interval), this._interval = null), this._config.interval && !this._isPaused && (this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval))
            }, l.prototype.to = function (e) {
                var n = this;
                this._activeElement = t(this._element).find(p.ACTIVE_ITEM)[0];
                var i = this._getItemIndex(this._activeElement);
                if (!(e > this._items.length - 1 || e < 0)) {
                    if (this._isSliding)return void t(this._element).one(d.SLID, function () {
                        return n.to(e)
                    });
                    if (i === e)return this.pause(), void this.cycle();
                    var o = e > i ? h.NEXT : h.PREVIOUS;
                    this._slide(o, this._items[e])
                }
            }, l.prototype.dispose = function () {
                t(this._element).off(s), t.removeData(this._element, a), this._items = null, this._config = null, this._element = null, this._interval = null, this._isPaused = null, this._isSliding = null, this._activeElement = null, this._indicatorsElement = null
            }, l.prototype._getConfig = function (n) {
                return n = t.extend({}, c, n), r.typeCheckConfig(e, n, u), n
            }, l.prototype._addEventListeners = function () {
                var e = this;
                this._config.keyboard && t(this._element).on(d.KEYDOWN, function (t) {
                    return e._keydown(t)
                }), "hover" !== this._config.pause || "ontouchstart" in document.documentElement || t(this._element).on(d.MOUSEENTER, function (t) {
                    return e.pause(t)
                }).on(d.MOUSELEAVE, function (t) {
                    return e.cycle(t)
                })
            }, l.prototype._keydown = function (t) {
                if (!/input|textarea/i.test(t.target.tagName))switch (t.which) {
                    case 37:
                        t.preventDefault(), this.prev();
                        break;
                    case 39:
                        t.preventDefault(), this.next();
                        break;
                    default:
                        return
                }
            }, l.prototype._getItemIndex = function (e) {
                return this._items = t.makeArray(t(e).parent().find(p.ITEM)), this._items.indexOf(e)
            }, l.prototype._getItemByDirection = function (t, e) {
                var n = t === h.NEXT, i = t === h.PREVIOUS, o = this._getItemIndex(e), r = this._items.length - 1;
                if ((i && 0 === o || n && o === r) && !this._config.wrap)return e;
                var a = t === h.PREVIOUS ? -1 : 1, s = (o + a) % this._items.length;
                return s === -1 ? this._items[this._items.length - 1] : this._items[s]
            }, l.prototype._triggerSlideEvent = function (e, n) {
                var i = t.Event(d.SLIDE, {relatedTarget: e, direction: n});
                return t(this._element).trigger(i), i
            }, l.prototype._setActiveIndicatorElement = function (e) {
                if (this._indicatorsElement) {
                    t(this._indicatorsElement).find(p.ACTIVE).removeClass(f.ACTIVE);
                    var n = this._indicatorsElement.children[this._getItemIndex(e)];
                    n && t(n).addClass(f.ACTIVE)
                }
            }, l.prototype._slide = function (e, n) {
                var i = this, o = t(this._element).find(p.ACTIVE_ITEM)[0], a = n || o && this._getItemByDirection(e, o), s = Boolean(this._interval), l = void 0, c = void 0, u = void 0;
                if (e === h.NEXT ? (l = f.LEFT, c = f.NEXT, u = h.LEFT) : (l = f.RIGHT, c = f.PREV, u = h.RIGHT), a && t(a).hasClass(f.ACTIVE))return void(this._isSliding = !1);
                if (!this._triggerSlideEvent(a, u).isDefaultPrevented() && o && a) {
                    this._isSliding = !0, s && this.pause(), this._setActiveIndicatorElement(a);
                    var g = t.Event(d.SLID, {relatedTarget: a, direction: u});
                    r.supportsTransitionEnd() && t(this._element).hasClass(f.SLIDE) ? (t(a).addClass(c), r.reflow(a), t(o).addClass(l), t(a).addClass(l), t(o).one(r.TRANSITION_END, function () {
                        t(a).removeClass(l + " " + c).addClass(f.ACTIVE), t(o).removeClass(f.ACTIVE + " " + c + " " + l), i._isSliding = !1, setTimeout(function () {
                            return t(i._element).trigger(g)
                        }, 0)
                    }).emulateTransitionEnd(600)) : (t(o).removeClass(f.ACTIVE), t(a).addClass(f.ACTIVE), this._isSliding = !1, t(this._element).trigger(g)), s && this.cycle()
                }
            }, l._jQueryInterface = function (e) {
                return this.each(function () {
                    var n = t(this).data(a), o = t.extend({}, c, t(this).data());
                    "object" === (void 0 === e ? "undefined" : i(e)) && t.extend(o, e);
                    var r = "string" == typeof e ? e : o.slide;
                    if (n || (n = new l(this, o), t(this).data(a, n)), "number" == typeof e)n.to(e); else if ("string" == typeof r) {
                        if (void 0 === n[r])throw new Error('No method named "' + r + '"');
                        n[r]()
                    } else o.interval && (n.pause(), n.cycle())
                })
            }, l._dataApiClickHandler = function (e) {
                var n = r.getSelectorFromElement(this);
                if (n) {
                    var i = t(n)[0];
                    if (i && t(i).hasClass(f.CAROUSEL)) {
                        var o = t.extend({}, t(i).data(), t(this).data()), s = this.getAttribute("data-slide-to");
                        s && (o.interval = !1), l._jQueryInterface.call(t(i), o), s && t(i).data(a).to(s), e.preventDefault()
                    }
                }
            }, o(l, null, [{
                key: "VERSION", get: function () {
                    return "4.0.0-alpha.6"
                }
            }, {
                key: "Default", get: function () {
                    return c
                }
            }]), l
        }();
        t(document).on(d.CLICK_DATA_API, p.DATA_SLIDE, g._dataApiClickHandler), t(window).on(d.LOAD_DATA_API, function () {
            t(p.DATA_RIDE).each(function () {
                var e = t(this);
                g._jQueryInterface.call(e, e.data())
            })
        }), t.fn[e] = g._jQueryInterface, t.fn[e].Constructor = g, t.fn[e].noConflict = function () {
            return t.fn[e] = l, g._jQueryInterface
        }, g
    }(jQuery), function (t) {
        var e = "collapse", a = "bs.collapse", s = t.fn[e], l = {toggle: !0, parent: ""}, c = {
            toggle: "boolean",
            parent: "string"
        }, u = {
            SHOW: "show." + a,
            SHOWN: "shown." + a,
            HIDE: "hide." + a,
            HIDDEN: "hidden." + a,
            CLICK_DATA_API: "click.bs.collapse.data-api"
        }, h = {
            SHOW: "show",
            COLLAPSE: "collapse",
            COLLAPSING: "collapsing",
            COLLAPSED: "collapsed"
        }, d = {WIDTH: "width", HEIGHT: "height"}, f = {
            ACTIVES: ".card > .show, .card > .collapsing",
            DATA_TOGGLE: '[data-toggle="collapse"]'
        }, p = function () {
            function s(e, i) {
                n(this, s), this._isTransitioning = !1, this._element = e, this._config = this._getConfig(i), this._triggerArray = t.makeArray(t('[data-toggle="collapse"][href="#' + e.id + '"],[data-toggle="collapse"][data-target="#' + e.id + '"]')), this._parent = this._config.parent ? this._getParent() : null, this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray), this._config.toggle && this.toggle()
            }

            return s.prototype.toggle = function () {
                t(this._element).hasClass(h.SHOW) ? this.hide() : this.show()
            }, s.prototype.show = function () {
                var e = this;
                if (this._isTransitioning)throw new Error("Collapse is transitioning");
                if (!t(this._element).hasClass(h.SHOW)) {
                    var n = void 0, i = void 0;
                    if (this._parent && (n = t.makeArray(t(this._parent).find(f.ACTIVES)), n.length || (n = null)), !(n && (i = t(n).data(a)) && i._isTransitioning)) {
                        var o = t.Event(u.SHOW);
                        if (t(this._element).trigger(o), !o.isDefaultPrevented()) {
                            n && (s._jQueryInterface.call(t(n), "hide"), i || t(n).data(a, null));
                            var l = this._getDimension();
                            t(this._element).removeClass(h.COLLAPSE).addClass(h.COLLAPSING), this._element.style[l] = 0, this._element.setAttribute("aria-expanded", !0), this._triggerArray.length && t(this._triggerArray).removeClass(h.COLLAPSED).attr("aria-expanded", !0), this.setTransitioning(!0);
                            var c = function () {
                                t(e._element).removeClass(h.COLLAPSING).addClass(h.COLLAPSE).addClass(h.SHOW), e._element.style[l] = "", e.setTransitioning(!1), t(e._element).trigger(u.SHOWN)
                            };
                            if (!r.supportsTransitionEnd())return void c();
                            var d = l[0].toUpperCase() + l.slice(1), p = "scroll" + d;
                            t(this._element).one(r.TRANSITION_END, c).emulateTransitionEnd(600), this._element.style[l] = this._element[p] + "px"
                        }
                    }
                }
            }, s.prototype.hide = function () {
                var e = this;
                if (this._isTransitioning)throw new Error("Collapse is transitioning");
                if (t(this._element).hasClass(h.SHOW)) {
                    var n = t.Event(u.HIDE);
                    if (t(this._element).trigger(n), !n.isDefaultPrevented()) {
                        var i = this._getDimension(), o = i === d.WIDTH ? "offsetWidth" : "offsetHeight";
                        this._element.style[i] = this._element[o] + "px", r.reflow(this._element), t(this._element).addClass(h.COLLAPSING).removeClass(h.COLLAPSE).removeClass(h.SHOW), this._element.setAttribute("aria-expanded", !1), this._triggerArray.length && t(this._triggerArray).addClass(h.COLLAPSED).attr("aria-expanded", !1), this.setTransitioning(!0);
                        var a = function () {
                            e.setTransitioning(!1), t(e._element).removeClass(h.COLLAPSING).addClass(h.COLLAPSE).trigger(u.HIDDEN)
                        };
                        if (this._element.style[i] = "", !r.supportsTransitionEnd())return void a();
                        t(this._element).one(r.TRANSITION_END, a).emulateTransitionEnd(600)
                    }
                }
            }, s.prototype.setTransitioning = function (t) {
                this._isTransitioning = t
            }, s.prototype.dispose = function () {
                t.removeData(this._element, a), this._config = null, this._parent = null, this._element = null, this._triggerArray = null, this._isTransitioning = null
            }, s.prototype._getConfig = function (n) {
                return n = t.extend({}, l, n), n.toggle = Boolean(n.toggle), r.typeCheckConfig(e, n, c), n
            }, s.prototype._getDimension = function () {
                return t(this._element).hasClass(d.WIDTH) ? d.WIDTH : d.HEIGHT
            }, s.prototype._getParent = function () {
                var e = this, n = t(this._config.parent)[0], i = '[data-toggle="collapse"][data-parent="' + this._config.parent + '"]';
                return t(n).find(i).each(function (t, n) {
                    e._addAriaAndCollapsedClass(s._getTargetFromElement(n), [n])
                }), n
            }, s.prototype._addAriaAndCollapsedClass = function (e, n) {
                if (e) {
                    var i = t(e).hasClass(h.SHOW);
                    e.setAttribute("aria-expanded", i), n.length && t(n).toggleClass(h.COLLAPSED, !i).attr("aria-expanded", i)
                }
            }, s._getTargetFromElement = function (e) {
                var n = r.getSelectorFromElement(e);
                return n ? t(n)[0] : null
            }, s._jQueryInterface = function (e) {
                return this.each(function () {
                    var n = t(this), o = n.data(a), r = t.extend({}, l, n.data(), "object" === (void 0 === e ? "undefined" : i(e)) && e);
                    if (!o && r.toggle && /show|hide/.test(e) && (r.toggle = !1), o || (o = new s(this, r), n.data(a, o)), "string" == typeof e) {
                        if (void 0 === o[e])throw new Error('No method named "' + e + '"');
                        o[e]()
                    }
                })
            }, o(s, null, [{
                key: "VERSION", get: function () {
                    return "4.0.0-alpha.6"
                }
            }, {
                key: "Default", get: function () {
                    return l
                }
            }]), s
        }();
        t(document).on(u.CLICK_DATA_API, f.DATA_TOGGLE, function (e) {
            e.preventDefault()
            ;
            var n = p._getTargetFromElement(this), i = t(n).data(a), o = i ? "toggle" : t(this).data();
            p._jQueryInterface.call(t(n), o)
        }), t.fn[e] = p._jQueryInterface, t.fn[e].Constructor = p, t.fn[e].noConflict = function () {
            return t.fn[e] = s, p._jQueryInterface
        }, p
    }(jQuery), function (t) {
        var e = "dropdown", i = ".bs.dropdown", a = t.fn[e], s = {
            HIDE: "hide" + i,
            HIDDEN: "hidden" + i,
            SHOW: "show" + i,
            SHOWN: "shown" + i,
            CLICK: "click" + i,
            CLICK_DATA_API: "click.bs.dropdown.data-api",
            FOCUSIN_DATA_API: "focusin.bs.dropdown.data-api",
            KEYDOWN_DATA_API: "keydown.bs.dropdown.data-api"
        }, l = {BACKDROP: "dropdown-backdrop", DISABLED: "disabled", SHOW: "show"}, c = {
            BACKDROP: ".dropdown-backdrop",
            DATA_TOGGLE: '[data-toggle="dropdown"]',
            FORM_CHILD: ".dropdown form",
            ROLE_MENU: '[role="menu"]',
            ROLE_LISTBOX: '[role="listbox"]',
            NAVBAR_NAV: ".navbar-nav",
            VISIBLE_ITEMS: '[role="menu"] li:not(.disabled) a, [role="listbox"] li:not(.disabled) a'
        }, u = function () {
            function e(t) {
                n(this, e), this._element = t, this._addEventListeners()
            }

            return e.prototype.toggle = function () {
                if (this.disabled || t(this).hasClass(l.DISABLED))return !1;
                var n = e._getParentFromElement(this), i = t(n).hasClass(l.SHOW);
                if (e._clearMenus(), i)return !1;
                if ("ontouchstart" in document.documentElement && !t(n).closest(c.NAVBAR_NAV).length) {
                    var o = document.createElement("div");
                    o.className = l.BACKDROP, t(o).insertBefore(this), t(o).on("click", e._clearMenus)
                }
                var r = {relatedTarget: this}, a = t.Event(s.SHOW, r);
                return t(n).trigger(a), !a.isDefaultPrevented() && (this.focus(), this.setAttribute("aria-expanded", !0), t(n).toggleClass(l.SHOW), t(n).trigger(t.Event(s.SHOWN, r)), !1)
            }, e.prototype.dispose = function () {
                t.removeData(this._element, "bs.dropdown"), t(this._element).off(i), this._element = null
            }, e.prototype._addEventListeners = function () {
                t(this._element).on(s.CLICK, this.toggle)
            }, e._jQueryInterface = function (n) {
                return this.each(function () {
                    var i = t(this).data("bs.dropdown");
                    if (i || (i = new e(this), t(this).data("bs.dropdown", i)), "string" == typeof n) {
                        if (void 0 === i[n])throw new Error('No method named "' + n + '"');
                        i[n].call(this)
                    }
                })
            }, e._clearMenus = function (n) {
                if (!n || 3 !== n.which) {
                    var i = t(c.BACKDROP)[0];
                    i && i.parentNode.removeChild(i);
                    for (var o = t.makeArray(t(c.DATA_TOGGLE)), r = 0; r < o.length; r++) {
                        var a = e._getParentFromElement(o[r]), u = {relatedTarget: o[r]};
                        if (t(a).hasClass(l.SHOW) && !(n && ("click" === n.type && /input|textarea/i.test(n.target.tagName) || "focusin" === n.type) && t.contains(a, n.target))) {
                            var h = t.Event(s.HIDE, u);
                            t(a).trigger(h), h.isDefaultPrevented() || (o[r].setAttribute("aria-expanded", "false"), t(a).removeClass(l.SHOW).trigger(t.Event(s.HIDDEN, u)))
                        }
                    }
                }
            }, e._getParentFromElement = function (e) {
                var n = void 0, i = r.getSelectorFromElement(e);
                return i && (n = t(i)[0]), n || e.parentNode
            }, e._dataApiKeydownHandler = function (n) {
                if (/(38|40|27|32)/.test(n.which) && !/input|textarea/i.test(n.target.tagName) && (n.preventDefault(), n.stopPropagation(), !this.disabled && !t(this).hasClass(l.DISABLED))) {
                    var i = e._getParentFromElement(this), o = t(i).hasClass(l.SHOW);
                    if (!o && 27 !== n.which || o && 27 === n.which) {
                        if (27 === n.which) {
                            t(t(i).find(c.DATA_TOGGLE)[0]).trigger("focus")
                        }
                        return void t(this).trigger("click")
                    }
                    var r = t(i).find(c.VISIBLE_ITEMS).get();
                    if (r.length) {
                        var a = r.indexOf(n.target);
                        38 === n.which && a > 0 && a--, 40 === n.which && a < r.length - 1 && a++, a < 0 && (a = 0), r[a].focus()
                    }
                }
            }, o(e, null, [{
                key: "VERSION", get: function () {
                    return "4.0.0-alpha.6"
                }
            }]), e
        }();
        t(document).on(s.KEYDOWN_DATA_API, c.DATA_TOGGLE, u._dataApiKeydownHandler).on(s.KEYDOWN_DATA_API, c.ROLE_MENU, u._dataApiKeydownHandler).on(s.KEYDOWN_DATA_API, c.ROLE_LISTBOX, u._dataApiKeydownHandler).on(s.CLICK_DATA_API + " " + s.FOCUSIN_DATA_API, u._clearMenus).on(s.CLICK_DATA_API, c.DATA_TOGGLE, u.prototype.toggle).on(s.CLICK_DATA_API, c.FORM_CHILD, function (t) {
            t.stopPropagation()
        }), t.fn[e] = u._jQueryInterface, t.fn[e].Constructor = u, t.fn[e].noConflict = function () {
            return t.fn[e] = a, u._jQueryInterface
        }, u
    }(jQuery), function (t) {
        var e = "modal", a = ".bs.modal", s = t.fn[e], l = {
            backdrop: !0,
            keyboard: !0,
            focus: !0,
            show: !0
        }, c = {
            backdrop: "(boolean|string)",
            keyboard: "boolean",
            focus: "boolean",
            show: "boolean"
        }, u = {
            HIDE: "hide.bs.modal",
            HIDDEN: "hidden.bs.modal",
            SHOW: "show.bs.modal",
            SHOWN: "shown.bs.modal",
            FOCUSIN: "focusin.bs.modal",
            RESIZE: "resize.bs.modal",
            CLICK_DISMISS: "click.dismiss.bs.modal",
            KEYDOWN_DISMISS: "keydown.dismiss.bs.modal",
            MOUSEUP_DISMISS: "mouseup.dismiss.bs.modal",
            MOUSEDOWN_DISMISS: "mousedown.dismiss.bs.modal",
            CLICK_DATA_API: "click.bs.modal.data-api"
        }, h = {
            SCROLLBAR_MEASURER: "modal-scrollbar-measure",
            BACKDROP: "modal-backdrop",
            OPEN: "modal-open",
            FADE: "fade",
            SHOW: "show"
        }, d = {
            DIALOG: ".modal-dialog",
            DATA_TOGGLE: '[data-toggle="modal"]',
            DATA_DISMISS: '[data-dismiss="modal"]',
            FIXED_CONTENT: ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top"
        }, f = function () {
            function s(e, i) {
                n(this, s), this._config = this._getConfig(i), this._element = e, this._dialog = t(e).find(d.DIALOG)[0], this._backdrop = null, this._isShown = !1, this._isBodyOverflowing = !1, this._ignoreBackdropClick = !1, this._isTransitioning = !1, this._originalBodyPadding = 0, this._scrollbarWidth = 0
            }

            return s.prototype.toggle = function (t) {
                return this._isShown ? this.hide() : this.show(t)
            }, s.prototype.show = function (e) {
                var n = this;
                if (this._isTransitioning)throw new Error("Modal is transitioning");
                r.supportsTransitionEnd() && t(this._element).hasClass(h.FADE) && (this._isTransitioning = !0);
                var i = t.Event(u.SHOW, {relatedTarget: e});
                t(this._element).trigger(i), this._isShown || i.isDefaultPrevented() || (this._isShown = !0, this._checkScrollbar(), this._setScrollbar(), t(document.body).addClass(h.OPEN), this._setEscapeEvent(), this._setResizeEvent(), t(this._element).on(u.CLICK_DISMISS, d.DATA_DISMISS, function (t) {
                    return n.hide(t)
                }), t(this._dialog).on(u.MOUSEDOWN_DISMISS, function () {
                    t(n._element).one(u.MOUSEUP_DISMISS, function (e) {
                        t(e.target).is(n._element) && (n._ignoreBackdropClick = !0)
                    })
                }), this._showBackdrop(function () {
                    return n._showElement(e)
                }))
            }, s.prototype.hide = function (e) {
                var n = this;
                if (e && e.preventDefault(), this._isTransitioning)throw new Error("Modal is transitioning");
                var i = r.supportsTransitionEnd() && t(this._element).hasClass(h.FADE);
                i && (this._isTransitioning = !0);
                var o = t.Event(u.HIDE);
                t(this._element).trigger(o), this._isShown && !o.isDefaultPrevented() && (this._isShown = !1, this._setEscapeEvent(), this._setResizeEvent(), t(document).off(u.FOCUSIN), t(this._element).removeClass(h.SHOW), t(this._element).off(u.CLICK_DISMISS), t(this._dialog).off(u.MOUSEDOWN_DISMISS), i ? t(this._element).one(r.TRANSITION_END, function (t) {
                    return n._hideModal(t)
                }).emulateTransitionEnd(300) : this._hideModal())
            }, s.prototype.dispose = function () {
                t.removeData(this._element, "bs.modal"), t(window, document, this._element, this._backdrop).off(a), this._config = null, this._element = null, this._dialog = null, this._backdrop = null, this._isShown = null, this._isBodyOverflowing = null, this._ignoreBackdropClick = null, this._originalBodyPadding = null, this._scrollbarWidth = null
            }, s.prototype._getConfig = function (n) {
                return n = t.extend({}, l, n), r.typeCheckConfig(e, n, c), n
            }, s.prototype._showElement = function (e) {
                var n = this, i = r.supportsTransitionEnd() && t(this._element).hasClass(h.FADE);
                this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.appendChild(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.scrollTop = 0, i && r.reflow(this._element), t(this._element).addClass(h.SHOW), this._config.focus && this._enforceFocus();
                var o = t.Event(u.SHOWN, {relatedTarget: e}), a = function () {
                    n._config.focus && n._element.focus(), n._isTransitioning = !1, t(n._element).trigger(o)
                };
                i ? t(this._dialog).one(r.TRANSITION_END, a).emulateTransitionEnd(300) : a()
            }, s.prototype._enforceFocus = function () {
                var e = this;
                t(document).off(u.FOCUSIN).on(u.FOCUSIN, function (n) {
                    document === n.target || e._element === n.target || t(e._element).has(n.target).length || e._element.focus()
                })
            }, s.prototype._setEscapeEvent = function () {
                var e = this;
                this._isShown && this._config.keyboard ? t(this._element).on(u.KEYDOWN_DISMISS, function (t) {
                    27 === t.which && e.hide()
                }) : this._isShown || t(this._element).off(u.KEYDOWN_DISMISS)
            }, s.prototype._setResizeEvent = function () {
                var e = this;
                this._isShown ? t(window).on(u.RESIZE, function (t) {
                    return e._handleUpdate(t)
                }) : t(window).off(u.RESIZE)
            }, s.prototype._hideModal = function () {
                var e = this;
                this._element.style.display = "none", this._element.setAttribute("aria-hidden", "true"), this._isTransitioning = !1, this._showBackdrop(function () {
                    t(document.body).removeClass(h.OPEN), e._resetAdjustments(), e._resetScrollbar(), t(e._element).trigger(u.HIDDEN)
                })
            }, s.prototype._removeBackdrop = function () {
                this._backdrop && (t(this._backdrop).remove(), this._backdrop = null)
            }, s.prototype._showBackdrop = function (e) {
                var n = this, i = t(this._element).hasClass(h.FADE) ? h.FADE : "";
                if (this._isShown && this._config.backdrop) {
                    var o = r.supportsTransitionEnd() && i;
                    if (this._backdrop = document.createElement("div"), this._backdrop.className = h.BACKDROP, i && t(this._backdrop).addClass(i), t(this._backdrop).appendTo(document.body), t(this._element).on(u.CLICK_DISMISS, function (t) {
                            if (n._ignoreBackdropClick)return void(n._ignoreBackdropClick = !1);
                            t.target === t.currentTarget && ("static" === n._config.backdrop ? n._element.focus() : n.hide())
                        }), o && r.reflow(this._backdrop), t(this._backdrop).addClass(h.SHOW), !e)return;
                    if (!o)return void e();
                    t(this._backdrop).one(r.TRANSITION_END, e).emulateTransitionEnd(150)
                } else if (!this._isShown && this._backdrop) {
                    t(this._backdrop).removeClass(h.SHOW);
                    var a = function () {
                        n._removeBackdrop(), e && e()
                    };
                    r.supportsTransitionEnd() && t(this._element).hasClass(h.FADE) ? t(this._backdrop).one(r.TRANSITION_END, a).emulateTransitionEnd(150) : a()
                } else e && e()
            }, s.prototype._handleUpdate = function () {
                this._adjustDialog()
            }, s.prototype._adjustDialog = function () {
                var t = this._element.scrollHeight > document.documentElement.clientHeight;
                !this._isBodyOverflowing && t && (this._element.style.paddingLeft = this._scrollbarWidth + "px"), this._isBodyOverflowing && !t && (this._element.style.paddingRight = this._scrollbarWidth + "px")
            }, s.prototype._resetAdjustments = function () {
                this._element.style.paddingLeft = "", this._element.style.paddingRight = ""
            }, s.prototype._checkScrollbar = function () {
                this._isBodyOverflowing = document.body.clientWidth < window.innerWidth, this._scrollbarWidth = this._getScrollbarWidth()
            }, s.prototype._setScrollbar = function () {
                var e = parseInt(t(d.FIXED_CONTENT).css("padding-right") || 0, 10);
                this._originalBodyPadding = document.body.style.paddingRight || "", this._isBodyOverflowing && (document.body.style.paddingRight = e + this._scrollbarWidth + "px")
            }, s.prototype._resetScrollbar = function () {
                document.body.style.paddingRight = this._originalBodyPadding
            }, s.prototype._getScrollbarWidth = function () {
                var t = document.createElement("div");
                t.className = h.SCROLLBAR_MEASURER, document.body.appendChild(t);
                var e = t.offsetWidth - t.clientWidth;
                return document.body.removeChild(t), e
            }, s._jQueryInterface = function (e, n) {
                return this.each(function () {
                    var o = t(this).data("bs.modal"), r = t.extend({}, s.Default, t(this).data(), "object" === (void 0 === e ? "undefined" : i(e)) && e);
                    if (o || (o = new s(this, r), t(this).data("bs.modal", o)), "string" == typeof e) {
                        if (void 0 === o[e])throw new Error('No method named "' + e + '"');
                        o[e](n)
                    } else r.show && o.show(n)
                })
            }, o(s, null, [{
                key: "VERSION", get: function () {
                    return "4.0.0-alpha.6"
                }
            }, {
                key: "Default", get: function () {
                    return l
                }
            }]), s
        }();
        t(document).on(u.CLICK_DATA_API, d.DATA_TOGGLE, function (e) {
            var n = this, i = void 0, o = r.getSelectorFromElement(this);
            o && (i = t(o)[0]);
            var a = t(i).data("bs.modal") ? "toggle" : t.extend({}, t(i).data(), t(this).data());
            "A" !== this.tagName && "AREA" !== this.tagName || e.preventDefault();
            var s = t(i).one(u.SHOW, function (e) {
                e.isDefaultPrevented() || s.one(u.HIDDEN, function () {
                    t(n).is(":visible") && n.focus()
                })
            });
            f._jQueryInterface.call(t(i), a, this)
        }), t.fn[e] = f._jQueryInterface, t.fn[e].Constructor = f, t.fn[e].noConflict = function () {
            return t.fn[e] = s, f._jQueryInterface
        }, f
    }(jQuery), function (t) {
        var e = "scrollspy", a = t.fn[e], s = {offset: 10, method: "auto", target: ""}, l = {
            offset: "number",
            method: "string",
            target: "(string|element)"
        }, c = {
            ACTIVATE: "activate.bs.scrollspy",
            SCROLL: "scroll.bs.scrollspy",
            LOAD_DATA_API: "load.bs.scrollspy.data-api"
        }, u = {
            DROPDOWN_ITEM: "dropdown-item",
            DROPDOWN_MENU: "dropdown-menu",
            NAV_LINK: "nav-link",
            NAV: "nav",
            ACTIVE: "active"
        }, h = {
            DATA_SPY: '[data-spy="scroll"]',
            ACTIVE: ".active",
            LIST_ITEM: ".list-item",
            LI: "li",
            LI_DROPDOWN: "li.dropdown",
            NAV_LINKS: ".nav-link",
            DROPDOWN: ".dropdown",
            DROPDOWN_ITEMS: ".dropdown-item",
            DROPDOWN_TOGGLE: ".dropdown-toggle"
        }, d = {OFFSET: "offset", POSITION: "position"}, f = function () {
            function a(e, i) {
                var o = this;
                n(this, a), this._element = e, this._scrollElement = "BODY" === e.tagName ? window : e, this._config = this._getConfig(i), this._selector = this._config.target + " " + h.NAV_LINKS + "," + this._config.target + " " + h.DROPDOWN_ITEMS, this._offsets = [], this._targets = [], this._activeTarget = null, this._scrollHeight = 0, t(this._scrollElement).on(c.SCROLL, function (t) {
                    return o._process(t)
                }), this.refresh(), this._process()
            }

            return a.prototype.refresh = function () {
                var e = this, n = this._scrollElement !== this._scrollElement.window ? d.POSITION : d.OFFSET, i = "auto" === this._config.method ? n : this._config.method, o = i === d.POSITION ? this._getScrollTop() : 0;
                this._offsets = [], this._targets = [], this._scrollHeight = this._getScrollHeight(), t.makeArray(t(this._selector)).map(function (e) {
                    var n = void 0, a = r.getSelectorFromElement(e);
                    return a && (n = t(a)[0]), n && (n.offsetWidth || n.offsetHeight) ? [t(n)[i]().top + o, a] : null
                }).filter(function (t) {
                    return t
                }).sort(function (t, e) {
                    return t[0] - e[0]
                }).forEach(function (t) {
                    e._offsets.push(t[0]), e._targets.push(t[1])
                })
            }, a.prototype.dispose = function () {
                t.removeData(this._element, "bs.scrollspy"), t(this._scrollElement).off(".bs.scrollspy"), this._element = null, this._scrollElement = null, this._config = null, this._selector = null, this._offsets = null, this._targets = null, this._activeTarget = null, this._scrollHeight = null
            }, a.prototype._getConfig = function (n) {
                if (n = t.extend({}, s, n), "string" != typeof n.target) {
                    var i = t(n.target).attr("id");
                    i || (i = r.getUID(e), t(n.target).attr("id", i)), n.target = "#" + i
                }
                return r.typeCheckConfig(e, n, l), n
            }, a.prototype._getScrollTop = function () {
                return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop
            }, a.prototype._getScrollHeight = function () {
                return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)
            }, a.prototype._getOffsetHeight = function () {
                return this._scrollElement === window ? window.innerHeight : this._scrollElement.offsetHeight
            }, a.prototype._process = function () {
                var t = this._getScrollTop() + this._config.offset, e = this._getScrollHeight(), n = this._config.offset + e - this._getOffsetHeight();
                if (this._scrollHeight !== e && this.refresh(), t >= n) {
                    var i = this._targets[this._targets.length - 1];
                    return void(this._activeTarget !== i && this._activate(i))
                }
                if (this._activeTarget && t < this._offsets[0] && this._offsets[0] > 0)return this._activeTarget = null, void this._clear();
                for (var o = this._offsets.length; o--;) {
                    this._activeTarget !== this._targets[o] && t >= this._offsets[o] && (void 0 === this._offsets[o + 1] || t < this._offsets[o + 1]) && this._activate(this._targets[o])
                }
            }, a.prototype._activate = function (e) {
                this._activeTarget = e, this._clear();
                var n = this._selector.split(",");
                n = n.map(function (t) {
                    return t + '[data-target="' + e + '"],' + t + '[href="' + e + '"]'
                });
                var i = t(n.join(","));
                i.hasClass(u.DROPDOWN_ITEM) ? (i.closest(h.DROPDOWN).find(h.DROPDOWN_TOGGLE).addClass(u.ACTIVE), i.addClass(u.ACTIVE)) : i.parents(h.LI).find("> " + h.NAV_LINKS).addClass(u.ACTIVE), t(this._scrollElement).trigger(c.ACTIVATE, {relatedTarget: e})
            }, a.prototype._clear = function () {
                t(this._selector).filter(h.ACTIVE).removeClass(u.ACTIVE)
            }, a._jQueryInterface = function (e) {
                return this.each(function () {
                    var n = t(this).data("bs.scrollspy"), o = "object" === (void 0 === e ? "undefined" : i(e)) && e;
                    if (n || (n = new a(this, o), t(this).data("bs.scrollspy", n)), "string" == typeof e) {
                        if (void 0 === n[e])throw new Error('No method named "' + e + '"');
                        n[e]()
                    }
                })
            }, o(a, null, [{
                key: "VERSION", get: function () {
                    return "4.0.0-alpha.6"
                }
            }, {
                key: "Default", get: function () {
                    return s
                }
            }]), a
        }();
        t(window).on(c.LOAD_DATA_API, function () {
            for (var e = t.makeArray(t(h.DATA_SPY)), n = e.length; n--;) {
                var i = t(e[n]);
                f._jQueryInterface.call(i, i.data())
            }
        }), t.fn[e] = f._jQueryInterface, t.fn[e].Constructor = f, t.fn[e].noConflict = function () {
            return t.fn[e] = a, f._jQueryInterface
        }, f
    }(jQuery), function (t) {
        var e = t.fn.tab, i = {
            HIDE: "hide.bs.tab",
            HIDDEN: "hidden.bs.tab",
            SHOW: "show.bs.tab",
            SHOWN: "shown.bs.tab",
            CLICK_DATA_API: "click.bs.tab.data-api"
        }, a = {
            DROPDOWN_MENU: "dropdown-menu",
            ACTIVE: "active",
            DISABLED: "disabled",
            FADE: "fade",
            SHOW: "show"
        }, s = {
            A: "a",
            LI: "li",
            DROPDOWN: ".dropdown",
            LIST: "ul:not(.dropdown-menu), ol:not(.dropdown-menu), nav:not(.dropdown-menu)",
            FADE_CHILD: "> .nav-item .fade, > .fade",
            ACTIVE: ".active",
            ACTIVE_CHILD: "> .nav-item > .active, > .active",
            DATA_TOGGLE: '[data-toggle="tab"], [data-toggle="pill"]',
            DROPDOWN_TOGGLE: ".dropdown-toggle",
            DROPDOWN_ACTIVE_CHILD: "> .dropdown-menu .active"
        }, l = function () {
            function e(t) {
                n(this, e), this._element = t
            }

            return e.prototype.show = function () {
                var e = this;
                if (!(this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && t(this._element).hasClass(a.ACTIVE) || t(this._element).hasClass(a.DISABLED))) {
                    var n = void 0, o = void 0, l = t(this._element).closest(s.LIST)[0], c = r.getSelectorFromElement(this._element);
                    l && (o = t.makeArray(t(l).find(s.ACTIVE)), o = o[o.length - 1]);
                    var u = t.Event(i.HIDE, {relatedTarget: this._element}), h = t.Event(i.SHOW, {relatedTarget: o});
                    if (o && t(o).trigger(u), t(this._element).trigger(h), !h.isDefaultPrevented() && !u.isDefaultPrevented()) {
                        c && (n = t(c)[0]), this._activate(this._element, l);
                        var d = function () {
                            var n = t.Event(i.HIDDEN, {relatedTarget: e._element}), r = t.Event(i.SHOWN, {relatedTarget: o});
                            t(o).trigger(n), t(e._element).trigger(r)
                        };
                        n ? this._activate(n, n.parentNode, d) : d()
                    }
                }
            }, e.prototype.dispose = function () {
                t.removeClass(this._element, "bs.tab"), this._element = null
            }, e.prototype._activate = function (e, n, i) {
                var o = this, l = t(n).find(s.ACTIVE_CHILD)[0], c = i && r.supportsTransitionEnd() && (l && t(l).hasClass(a.FADE) || Boolean(t(n).find(s.FADE_CHILD)[0])), u = function () {
                    return o._transitionComplete(e, l, c, i)
                };
                l && c ? t(l).one(r.TRANSITION_END, u).emulateTransitionEnd(150) : u(), l && t(l).removeClass(a.SHOW)
            }, e.prototype._transitionComplete = function (e, n, i, o) {
                if (n) {
                    t(n).removeClass(a.ACTIVE);
                    var l = t(n.parentNode).find(s.DROPDOWN_ACTIVE_CHILD)[0];
                    l && t(l).removeClass(a.ACTIVE), n.setAttribute("aria-expanded", !1)
                }
                if (t(e).addClass(a.ACTIVE), e.setAttribute("aria-expanded", !0), i ? (r.reflow(e), t(e).addClass(a.SHOW)) : t(e).removeClass(a.FADE), e.parentNode && t(e.parentNode).hasClass(a.DROPDOWN_MENU)) {
                    var c = t(e).closest(s.DROPDOWN)[0];
                    c && t(c).find(s.DROPDOWN_TOGGLE).addClass(a.ACTIVE), e.setAttribute("aria-expanded", !0)
                }
                o && o()
            }, e._jQueryInterface = function (n) {
                return this.each(function () {
                    var i = t(this), o = i.data("bs.tab");
                    if (o || (o = new e(this), i.data("bs.tab", o)), "string" == typeof n) {
                        if (void 0 === o[n])throw new Error('No method named "' + n + '"');
                        o[n]()
                    }
                })
            }, o(e, null, [{
                key: "VERSION", get: function () {
                    return "4.0.0-alpha.6"
                }
            }]), e
        }();
        t(document).on(i.CLICK_DATA_API, s.DATA_TOGGLE, function (e) {
            e.preventDefault(), l._jQueryInterface.call(t(this), "show")
        }), t.fn.tab = l._jQueryInterface, t.fn.tab.Constructor = l, t.fn.tab.noConflict = function () {
            return t.fn.tab = e, l._jQueryInterface
        }, l
    }(jQuery), function (t) {
        if ("undefined" == typeof Tether)throw new Error("Bootstrap tooltips require Tether (http://tether.io/)");
        var e = "tooltip", a = ".bs.tooltip", s = t.fn[e], l = {
            animation: !0,
            template: '<div class="tooltip" role="tooltip"><div class="tooltip-inner"></div></div>',
            trigger: "hover focus",
            title: "",
            delay: 0,
            html: !1,
            selector: !1,
            placement: "top",
            offset: "0 0",
            constraints: [],
            container: !1
        }, c = {
            animation: "boolean",
            template: "string",
            title: "(string|element|function)",
            trigger: "string",
            delay: "(number|object)",
            html: "boolean",
            selector: "(string|boolean)",
            placement: "(string|function)",
            offset: "string",
            constraints: "array",
            container: "(string|element|boolean)"
        }, u = {
            TOP: "bottom center",
            RIGHT: "middle left",
            BOTTOM: "top center",
            LEFT: "middle right"
        }, h = {SHOW: "show", OUT: "out"}, d = {
            HIDE: "hide" + a,
            HIDDEN: "hidden" + a,
            SHOW: "show" + a,
            SHOWN: "shown" + a,
            INSERTED: "inserted" + a,
            CLICK: "click" + a,
            FOCUSIN: "focusin" + a,
            FOCUSOUT: "focusout" + a,
            MOUSEENTER: "mouseenter" + a,
            MOUSELEAVE: "mouseleave" + a
        }, f = {FADE: "fade", SHOW: "show"}, p = {
            TOOLTIP: ".tooltip",
            TOOLTIP_INNER: ".tooltip-inner"
        }, g = {element: !1, enabled: !1}, m = {
            HOVER: "hover",
            FOCUS: "focus",
            CLICK: "click",
            MANUAL: "manual"
        }, v = function () {
            function s(t, e) {
                n(this, s), this._isEnabled = !0, this._timeout = 0, this._hoverState = "", this._activeTrigger = {}, this._isTransitioning = !1, this._tether = null, this.element = t, this.config = this._getConfig(e), this.tip = null, this._setListeners()
            }

            return s.prototype.enable = function () {
                this._isEnabled = !0
            }, s.prototype.disable = function () {
                this._isEnabled = !1
            }, s.prototype.toggleEnabled = function () {
                this._isEnabled = !this._isEnabled
            }, s.prototype.toggle = function (e) {
                if (e) {
                    var n = this.constructor.DATA_KEY, i = t(e.currentTarget).data(n);
                    i || (i = new this.constructor(e.currentTarget, this._getDelegateConfig()), t(e.currentTarget).data(n, i)), i._activeTrigger.click = !i._activeTrigger.click, i._isWithActiveTrigger() ? i._enter(null, i) : i._leave(null, i)
                } else {
                    if (t(this.getTipElement()).hasClass(f.SHOW))return void this._leave(null, this);
                    this._enter(null, this)
                }
            }, s.prototype.dispose = function () {
                clearTimeout(this._timeout), this.cleanupTether(), t.removeData(this.element, this.constructor.DATA_KEY), t(this.element).off(this.constructor.EVENT_KEY), t(this.element).closest(".modal").off("hide.bs.modal"), this.tip && t(this.tip).remove(), this._isEnabled = null, this._timeout = null, this._hoverState = null, this._activeTrigger = null, this._tether = null, this.element = null, this.config = null, this.tip = null
            }, s.prototype.show = function () {
                var e = this;
                if ("none" === t(this.element).css("display"))throw new Error("Please use show on visible elements");
                var n = t.Event(this.constructor.Event.SHOW);
                if (this.isWithContent() && this._isEnabled) {
                    if (this._isTransitioning)throw new Error("Tooltip is transitioning");
                    t(this.element).trigger(n);
                    var i = t.contains(this.element.ownerDocument.documentElement, this.element);
                    if (n.isDefaultPrevented() || !i)return;
                    var o = this.getTipElement(), a = r.getUID(this.constructor.NAME);
                    o.setAttribute("id", a), this.element.setAttribute("aria-describedby", a), this.setContent(), this.config.animation && t(o).addClass(f.FADE);
                    var l = "function" == typeof this.config.placement ? this.config.placement.call(this, o, this.element) : this.config.placement, c = this._getAttachment(l), u = this.config.container === !1 ? document.body : t(this.config.container);
                    t(o).data(this.constructor.DATA_KEY, this).appendTo(u), t(this.element).trigger(this.constructor.Event.INSERTED), this._tether = new Tether({
                        attachment: c,
                        element: o,
                        target: this.element,
                        classes: g,
                        classPrefix: "bs-tether",
                        offset: this.config.offset,
                        constraints: this.config.constraints,
                        addTargetClasses: !1
                    }), r.reflow(o), this._tether.position(), t(o).addClass(f.SHOW);
                    var d = function () {
                        var n = e._hoverState;
                        e._hoverState = null, e._isTransitioning = !1, t(e.element).trigger(e.constructor.Event.SHOWN), n === h.OUT && e._leave(null, e)
                    };
                    if (r.supportsTransitionEnd() && t(this.tip).hasClass(f.FADE))return this._isTransitioning = !0, void t(this.tip).one(r.TRANSITION_END, d).emulateTransitionEnd(s._TRANSITION_DURATION);
                    d()
                }
            }, s.prototype.hide = function (e) {
                var n = this, i = this.getTipElement(), o = t.Event(this.constructor.Event.HIDE);
                if (this._isTransitioning)throw new Error("Tooltip is transitioning");
                var a = function () {
                    n._hoverState !== h.SHOW && i.parentNode && i.parentNode.removeChild(i), n.element.removeAttribute("aria-describedby"), t(n.element).trigger(n.constructor.Event.HIDDEN), n._isTransitioning = !1, n.cleanupTether(), e && e()
                };
                t(this.element).trigger(o), o.isDefaultPrevented() || (t(i).removeClass(f.SHOW), this._activeTrigger[m.CLICK] = !1, this._activeTrigger[m.FOCUS] = !1, this._activeTrigger[m.HOVER] = !1, r.supportsTransitionEnd() && t(this.tip).hasClass(f.FADE) ? (this._isTransitioning = !0, t(i).one(r.TRANSITION_END, a).emulateTransitionEnd(150)) : a(), this._hoverState = "")
            }, s.prototype.isWithContent = function () {
                return Boolean(this.getTitle())
            }, s.prototype.getTipElement = function () {
                return this.tip = this.tip || t(this.config.template)[0]
            }, s.prototype.setContent = function () {
                var e = t(this.getTipElement());
                this.setElementContent(e.find(p.TOOLTIP_INNER), this.getTitle()), e.removeClass(f.FADE + " " + f.SHOW), this.cleanupTether()
            }, s.prototype.setElementContent = function (e, n) {
                var o = this.config.html;
                "object" === (void 0 === n ? "undefined" : i(n)) && (n.nodeType || n.jquery) ? o ? t(n).parent().is(e) || e.empty().append(n) : e.text(t(n).text()) : e[o ? "html" : "text"](n)
            }, s.prototype.getTitle = function () {
                var t = this.element.getAttribute("data-original-title");
                return t || (t = "function" == typeof this.config.title ? this.config.title.call(this.element) : this.config.title), t
            }, s.prototype.cleanupTether = function () {
                this._tether && this._tether.destroy()
            }, s.prototype._getAttachment = function (t) {
                return u[t.toUpperCase()]
            }, s.prototype._setListeners = function () {
                var e = this;
                this.config.trigger.split(" ").forEach(function (n) {
                    if ("click" === n)t(e.element).on(e.constructor.Event.CLICK, e.config.selector, function (t) {
                        return e.toggle(t)
                    }); else if (n !== m.MANUAL) {
                        var i = n === m.HOVER ? e.constructor.Event.MOUSEENTER : e.constructor.Event.FOCUSIN, o = n === m.HOVER ? e.constructor.Event.MOUSELEAVE : e.constructor.Event.FOCUSOUT;
                        t(e.element).on(i, e.config.selector, function (t) {
                            return e._enter(t)
                        }).on(o, e.config.selector, function (t) {
                            return e._leave(t)
                        })
                    }
                    t(e.element).closest(".modal").on("hide.bs.modal", function () {
                        return e.hide()
                    })
                }), this.config.selector ? this.config = t.extend({}, this.config, {
                    trigger: "manual",
                    selector: ""
                }) : this._fixTitle()
            }, s.prototype._fixTitle = function () {
                var t = i(this.element.getAttribute("data-original-title"));
                (this.element.getAttribute("title") || "string" !== t) && (this.element.setAttribute("data-original-title", this.element.getAttribute("title") || ""), this.element.setAttribute("title", ""))
            }, s.prototype._enter = function (e, n) {
                var i = this.constructor.DATA_KEY;
                return n = n || t(e.currentTarget).data(i), n || (n = new this.constructor(e.currentTarget, this._getDelegateConfig()), t(e.currentTarget).data(i, n)), e && (n._activeTrigger["focusin" === e.type ? m.FOCUS : m.HOVER] = !0), t(n.getTipElement()).hasClass(f.SHOW) || n._hoverState === h.SHOW ? void(n._hoverState = h.SHOW) : (clearTimeout(n._timeout), n._hoverState = h.SHOW, n.config.delay && n.config.delay.show ? void(n._timeout = setTimeout(function () {
                    n._hoverState === h.SHOW && n.show()
                }, n.config.delay.show)) : void n.show())
            }, s.prototype._leave = function (e, n) {
                var i = this.constructor.DATA_KEY;
                if (n = n || t(e.currentTarget).data(i), n || (n = new this.constructor(e.currentTarget, this._getDelegateConfig()), t(e.currentTarget).data(i, n)), e && (n._activeTrigger["focusout" === e.type ? m.FOCUS : m.HOVER] = !1), !n._isWithActiveTrigger()) {
                    if (clearTimeout(n._timeout), n._hoverState = h.OUT, !n.config.delay || !n.config.delay.hide)return void n.hide();
                    n._timeout = setTimeout(function () {
                        n._hoverState === h.OUT && n.hide()
                    }, n.config.delay.hide)
                }
            }, s.prototype._isWithActiveTrigger = function () {
                for (var t in this._activeTrigger)if (this._activeTrigger[t])return !0;
                return !1
            }, s.prototype._getConfig = function (n) {
                return n = t.extend({}, this.constructor.Default, t(this.element).data(), n), n.delay && "number" == typeof n.delay && (n.delay = {
                    show: n.delay,
                    hide: n.delay
                }), r.typeCheckConfig(e, n, this.constructor.DefaultType), n
            }, s.prototype._getDelegateConfig = function () {
                var t = {};
                if (this.config)for (var e in this.config)this.constructor.Default[e] !== this.config[e] && (t[e] = this.config[e]);
                return t
            }, s._jQueryInterface = function (e) {
                return this.each(function () {
                    var n = t(this).data("bs.tooltip"), o = "object" === (void 0 === e ? "undefined" : i(e)) && e;
                    if ((n || !/dispose|hide/.test(e)) && (n || (n = new s(this, o), t(this).data("bs.tooltip", n)), "string" == typeof e)) {
                        if (void 0 === n[e])throw new Error('No method named "' + e + '"');
                        n[e]()
                    }
                })
            }, o(s, null, [{
                key: "VERSION", get: function () {
                    return "4.0.0-alpha.6"
                }
            }, {
                key: "Default", get: function () {
                    return l
                }
            }, {
                key: "NAME", get: function () {
                    return e
                }
            }, {
                key: "DATA_KEY", get: function () {
                    return "bs.tooltip"
                }
            }, {
                key: "Event", get: function () {
                    return d
                }
            }, {
                key: "EVENT_KEY", get: function () {
                    return a
                }
            }, {
                key: "DefaultType", get: function () {
                    return c
                }
            }]), s
        }();
        return t.fn[e] = v._jQueryInterface, t.fn[e].Constructor = v, t.fn[e].noConflict = function () {
            return t.fn[e] = s, v._jQueryInterface
        }, v
    }(jQuery));
    !function (r) {
        var s = "popover", l = ".bs.popover", c = r.fn[s], u = r.extend({}, a.Default, {
            placement: "right",
            trigger: "click",
            content: "",
            template: '<div class="popover" role="tooltip"><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
        }), h = r.extend({}, a.DefaultType, {content: "(string|element|function)"}), d = {
            FADE: "fade",
            SHOW: "show"
        }, f = {TITLE: ".popover-title", CONTENT: ".popover-content"}, p = {
            HIDE: "hide" + l,
            HIDDEN: "hidden" + l,
            SHOW: "show" + l,
            SHOWN: "shown" + l,
            INSERTED: "inserted" + l,
            CLICK: "click" + l,
            FOCUSIN: "focusin" + l,
            FOCUSOUT: "focusout" + l,
            MOUSEENTER: "mouseenter" + l,
            MOUSELEAVE: "mouseleave" + l
        }, g = function (a) {
            function c() {
                return n(this, c), t(this, a.apply(this, arguments))
            }

            return e(c, a), c.prototype.isWithContent = function () {
                return this.getTitle() || this._getContent()
            }, c.prototype.getTipElement = function () {
                return this.tip = this.tip || r(this.config.template)[0]
            }, c.prototype.setContent = function () {
                var t = r(this.getTipElement());
                this.setElementContent(t.find(f.TITLE), this.getTitle()), this.setElementContent(t.find(f.CONTENT), this._getContent()), t.removeClass(d.FADE + " " + d.SHOW), this.cleanupTether()
            }, c.prototype._getContent = function () {
                return this.element.getAttribute("data-content") || ("function" == typeof this.config.content ? this.config.content.call(this.element) : this.config.content)
            }, c._jQueryInterface = function (t) {
                return this.each(function () {
                    var e = r(this).data("bs.popover"), n = "object" === (void 0 === t ? "undefined" : i(t)) ? t : null;
                    if ((e || !/destroy|hide/.test(t)) && (e || (e = new c(this, n), r(this).data("bs.popover", e)), "string" == typeof t)) {
                        if (void 0 === e[t])throw new Error('No method named "' + t + '"');
                        e[t]()
                    }
                })
            }, o(c, null, [{
                key: "VERSION", get: function () {
                    return "4.0.0-alpha.6"
                }
            }, {
                key: "Default", get: function () {
                    return u
                }
            }, {
                key: "NAME", get: function () {
                    return s
                }
            }, {
                key: "DATA_KEY", get: function () {
                    return "bs.popover"
                }
            }, {
                key: "Event", get: function () {
                    return p
                }
            }, {
                key: "EVENT_KEY", get: function () {
                    return l
                }
            }, {
                key: "DefaultType", get: function () {
                    return h
                }
            }]), c
        }(a);
        r.fn[s] = g._jQueryInterface, r.fn[s].Constructor = g, r.fn[s].noConflict = function () {
            return r.fn[s] = c, g._jQueryInterface
        }, g
    }(jQuery)
}(), jQuery.easing.jswing = jQuery.easing.swing, jQuery.extend(jQuery.easing, {
    def: "easeOutQuad", swing: function (t, e, n, i, o) {
        return jQuery.easing[jQuery.easing.def](t, e, n, i, o)
    }, easeInQuad: function (t, e, n, i, o) {
        return i * (e /= o) * e + n
    }, easeOutQuad: function (t, e, n, i, o) {
        return -i * (e /= o) * (e - 2) + n
    }, easeInOutQuad: function (t, e, n, i, o) {
        return (e /= o / 2) < 1 ? i / 2 * e * e + n : -i / 2 * (--e * (e - 2) - 1) + n
    }, easeInCubic: function (t, e, n, i, o) {
        return i * (e /= o) * e * e + n
    }, easeOutCubic: function (t, e, n, i, o) {
        return i * ((e = e / o - 1) * e * e + 1) + n
    }, easeInOutCubic: function (t, e, n, i, o) {
        return (e /= o / 2) < 1 ? i / 2 * e * e * e + n : i / 2 * ((e -= 2) * e * e + 2) + n
    }, easeInQuart: function (t, e, n, i, o) {
        return i * (e /= o) * e * e * e + n
    }, easeOutQuart: function (t, e, n, i, o) {
        return -i * ((e = e / o - 1) * e * e * e - 1) + n
    }, easeInOutQuart: function (t, e, n, i, o) {
        return (e /= o / 2) < 1 ? i / 2 * e * e * e * e + n : -i / 2 * ((e -= 2) * e * e * e - 2) + n
    }, easeInQuint: function (t, e, n, i, o) {
        return i * (e /= o) * e * e * e * e + n
    }, easeOutQuint: function (t, e, n, i, o) {
        return i * ((e = e / o - 1) * e * e * e * e + 1) + n
    }, easeInOutQuint: function (t, e, n, i, o) {
        return (e /= o / 2) < 1 ? i / 2 * e * e * e * e * e + n : i / 2 * ((e -= 2) * e * e * e * e + 2) + n
    }, easeInSine: function (t, e, n, i, o) {
        return -i * Math.cos(e / o * (Math.PI / 2)) + i + n
    }, easeOutSine: function (t, e, n, i, o) {
        return i * Math.sin(e / o * (Math.PI / 2)) + n
    }, easeInOutSine: function (t, e, n, i, o) {
        return -i / 2 * (Math.cos(Math.PI * e / o) - 1) + n
    }, easeInExpo: function (t, e, n, i, o) {
        return 0 == e ? n : i * Math.pow(2, 10 * (e / o - 1)) + n
    }, easeOutExpo: function (t, e, n, i, o) {
        return e == o ? n + i : i * (1 - Math.pow(2, -10 * e / o)) + n
    }, easeInOutExpo: function (t, e, n, i, o) {
        return 0 == e ? n : e == o ? n + i : (e /= o / 2) < 1 ? i / 2 * Math.pow(2, 10 * (e - 1)) + n : i / 2 * (2 - Math.pow(2, -10 * --e)) + n
    }, easeInCirc: function (t, e, n, i, o) {
        return -i * (Math.sqrt(1 - (e /= o) * e) - 1) + n
    }, easeOutCirc: function (t, e, n, i, o) {
        return i * Math.sqrt(1 - (e = e / o - 1) * e) + n
    }, easeInOutCirc: function (t, e, n, i, o) {
        return (e /= o / 2) < 1 ? -i / 2 * (Math.sqrt(1 - e * e) - 1) + n : i / 2 * (Math.sqrt(1 - (e -= 2) * e) + 1) + n
    }, easeInElastic: function (t, e, n, i, o) {
        var r = 1.70158, a = 0, s = i;
        if (0 == e)return n;
        if (1 == (e /= o))return n + i;
        if (a || (a = .3 * o), s < Math.abs(i)) {
            s = i;
            var r = a / 4
        } else var r = a / (2 * Math.PI) * Math.asin(i / s);
        return -(s * Math.pow(2, 10 * (e -= 1)) * Math.sin((e * o - r) * (2 * Math.PI) / a)) + n
    }, easeOutElastic: function (t, e, n, i, o) {
        var r = 1.70158, a = 0, s = i;
        if (0 == e)return n;
        if (1 == (e /= o))return n + i;
        if (a || (a = .3 * o), s < Math.abs(i)) {
            s = i;
            var r = a / 4
        } else var r = a / (2 * Math.PI) * Math.asin(i / s);
        return s * Math.pow(2, -10 * e) * Math.sin((e * o - r) * (2 * Math.PI) / a) + i + n
    }, easeInOutElastic: function (t, e, n, i, o) {
        var r = 1.70158, a = 0, s = i;
        if (0 == e)return n
            ;
        if (2 == (e /= o / 2))return n + i;
        if (a || (a = o * (.3 * 1.5)), s < Math.abs(i)) {
            s = i;
            var r = a / 4
        } else var r = a / (2 * Math.PI) * Math.asin(i / s);
        return e < 1 ? -.5 * (s * Math.pow(2, 10 * (e -= 1)) * Math.sin((e * o - r) * (2 * Math.PI) / a)) + n : s * Math.pow(2, -10 * (e -= 1)) * Math.sin((e * o - r) * (2 * Math.PI) / a) * .5 + i + n
    }, easeInBack: function (t, e, n, i, o, r) {
        return void 0 == r && (r = 1.70158), i * (e /= o) * e * ((r + 1) * e - r) + n
    }, easeOutBack: function (t, e, n, i, o, r) {
        return void 0 == r && (r = 1.70158), i * ((e = e / o - 1) * e * ((r + 1) * e + r) + 1) + n
    }, easeInOutBack: function (t, e, n, i, o, r) {
        return void 0 == r && (r = 1.70158), (e /= o / 2) < 1 ? i / 2 * (e * e * ((1 + (r *= 1.525)) * e - r)) + n : i / 2 * ((e -= 2) * e * ((1 + (r *= 1.525)) * e + r) + 2) + n
    }, easeInBounce: function (t, e, n, i, o) {
        return i - jQuery.easing.easeOutBounce(t, o - e, 0, i, o) + n
    }, easeOutBounce: function (t, e, n, i, o) {
        return (e /= o) < 1 / 2.75 ? i * (7.5625 * e * e) + n : e < 2 / 2.75 ? i * (7.5625 * (e -= 1.5 / 2.75) * e + .75) + n : e < 2.5 / 2.75 ? i * (7.5625 * (e -= 2.25 / 2.75) * e + .9375) + n : i * (7.5625 * (e -= 2.625 / 2.75) * e + .984375) + n
    }, easeInOutBounce: function (t, e, n, i, o) {
        return e < o / 2 ? .5 * jQuery.easing.easeInBounce(t, 2 * e, 0, i, o) + n : .5 * jQuery.easing.easeOutBounce(t, 2 * e - o, 0, i, o) + .5 * i + n
    }
}), function (t) {
    t.Package ? Materialize = {} : t.Materialize = {}
}(window), Materialize.guid = function () {
    function t() {
        return Math.floor(65536 * (1 + Math.random())).toString(16).substring(1)
    }

    return function () {
        return t() + t() + "-" + t() + "-" + t() + "-" + t() + "-" + t() + t() + t()
    }
}(), Materialize.elementOrParentIsFixed = function (t) {
    var e = $(t), n = e.add(e.parents()), i = !1;
    return n.each(function () {
        if ("fixed" === $(this).css("position"))return i = !0, !1
    }), i
};
var Vel;
Vel = $ ? $.Velocity : jQuery ? jQuery.Velocity : Velocity, jQuery.Velocity ? console.log("Velocity is already loaded. You may be needlessly importing Velocity again; note that Materialize includes Velocity.") : (function (t) {
    function e(t) {
        var e = t.length, i = n.type(t);
        return "function" !== i && !n.isWindow(t) && (!(1 !== t.nodeType || !e) || ("array" === i || 0 === e || "number" == typeof e && e > 0 && e - 1 in t))
    }

    if (!t.jQuery) {
        var n = function (t, e) {
            return new n.fn.init(t, e)
        };
        n.isWindow = function (t) {
            return null != t && t == t.window
        }, n.type = function (t) {
            return null == t ? t + "" : "object" == typeof t || "function" == typeof t ? o[a.call(t)] || "object" : typeof t
        }, n.isArray = Array.isArray || function (t) {
                return "array" === n.type(t)
            }, n.isPlainObject = function (t) {
            var e;
            if (!t || "object" !== n.type(t) || t.nodeType || n.isWindow(t))return !1;
            try {
                if (t.constructor && !r.call(t, "constructor") && !r.call(t.constructor.prototype, "isPrototypeOf"))return !1
            } catch (t) {
                return !1
            }
            for (e in t);
            return void 0 === e || r.call(t, e)
        }, n.each = function (t, n, i) {
            var o = 0, r = t.length, a = e(t);
            if (i) {
                if (a)for (; r > o && n.apply(t[o], i) !== !1; o++); else for (o in t)if (n.apply(t[o], i) === !1)break
            } else if (a)for (; r > o && n.call(t[o], o, t[o]) !== !1; o++); else for (o in t)if (n.call(t[o], o, t[o]) === !1)break;
            return t
        }, n.data = function (t, e, o) {
            if (void 0 === o) {
                var r = t[n.expando], a = r && i[r];
                if (void 0 === e)return a;
                if (a && e in a)return a[e]
            } else if (void 0 !== e) {
                var r = t[n.expando] || (t[n.expando] = ++n.uuid);
                return i[r] = i[r] || {}, i[r][e] = o, o
            }
        }, n.removeData = function (t, e) {
            var o = t[n.expando], r = o && i[o];
            r && n.each(e, function (t, e) {
                delete r[e]
            })
        }, n.extend = function () {
            var t, e, i, o, r, a, s = arguments[0] || {}, l = 1, c = arguments.length, u = !1;
            for ("boolean" == typeof s && (u = s, s = arguments[l] || {}, l++), "object" != typeof s && "function" !== n.type(s) && (s = {}), l === c && (s = this, l--); c > l; l++)if (null != (r = arguments[l]))for (o in r)t = s[o], i = r[o], s !== i && (u && i && (n.isPlainObject(i) || (e = n.isArray(i))) ? (e ? (e = !1, a = t && n.isArray(t) ? t : []) : a = t && n.isPlainObject(t) ? t : {}, s[o] = n.extend(u, a, i)) : void 0 !== i && (s[o] = i));
            return s
        }, n.queue = function (t, i, o) {
            if (t) {
                i = (i || "fx") + "queue";
                var r = n.data(t, i);
                return o ? (!r || n.isArray(o) ? r = n.data(t, i, function (t, n) {
                    var i = n || [];
                    return null != t && (e(Object(t)) ? function (t, e) {
                        for (var n = +e.length, i = 0, o = t.length; n > i;)t[o++] = e[i++];
                        if (n !== n)for (; void 0 !== e[i];)t[o++] = e[i++];
                        t.length = o, t
                    }(i, "string" == typeof t ? [t] : t) : [].push.call(i, t)), i
                }(o)) : r.push(o), r) : r || []
            }
        }, n.dequeue = function (t, e) {
            n.each(t.nodeType ? [t] : t, function (t, i) {
                e = e || "fx";
                var o = n.queue(i, e), r = o.shift();
                "inprogress" === r && (r = o.shift()), r && ("fx" === e && o.unshift("inprogress"), r.call(i, function () {
                    n.dequeue(i, e)
                }))
            })
        }, n.fn = n.prototype = {
            init: function (t) {
                if (t.nodeType)return this[0] = t, this;
                throw new Error("Not a DOM node.")
            }, offset: function () {
                var e = this[0].getBoundingClientRect ? this[0].getBoundingClientRect() : {top: 0, left: 0};
                return {
                    top: e.top + (t.pageYOffset || document.scrollTop || 0) - (document.clientTop || 0),
                    left: e.left + (t.pageXOffset || document.scrollLeft || 0) - (document.clientLeft || 0)
                }
            }, position: function () {
                function t() {
                    for (var t = this.offsetParent || document; t && "html" === !t.nodeType.toLowerCase && "static" === t.style.position;)t = t.offsetParent;
                    return t || document
                }

                var e = this[0], t = t.apply(e), i = this.offset(), o = /^(?:body|html)$/i.test(t.nodeName) ? {
                    top: 0,
                    left: 0
                } : n(t).offset();
                return i.top -= parseFloat(e.style.marginTop) || 0, i.left -= parseFloat(e.style.marginLeft) || 0, t.style && (o.top += parseFloat(t.style.borderTopWidth) || 0, o.left += parseFloat(t.style.borderLeftWidth) || 0), {
                    top: i.top - o.top,
                    left: i.left - o.left
                }
            }
        };
        var i = {};
        n.expando = "velocity" + (new Date).getTime(), n.uuid = 0;
        for (var o = {}, r = o.hasOwnProperty, a = o.toString, s = "Boolean Number String Function Array Date RegExp Object Error".split(" "), l = 0; l < s.length; l++)o["[object " + s[l] + "]"] = s[l].toLowerCase();
        n.fn.init.prototype = n.fn, t.Velocity = {Utilities: n}
    }
}(window), function (t) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : t()
}(function () {
    return function (t, e, n, i) {
        function o(t) {
            for (var e = -1, n = t ? t.length : 0, i = []; ++e < n;) {
                var o = t[e];
                o && i.push(o)
            }
            return i
        }

        function r(t) {
            return g.isWrapped(t) ? t = [].slice.call(t) : g.isNode(t) && (t = [t]), t
        }

        function a(t) {
            var e = d.data(t, "velocity");
            return null === e ? i : e
        }

        function s(t) {
            return function (e) {
                return Math.round(e * t) * (1 / t)
            }
        }

        function l(t, n, i, o) {
            function r(t, e) {
                return 1 - 3 * e + 3 * t
            }

            function a(t, e) {
                return 3 * e - 6 * t
            }

            function s(t) {
                return 3 * t
            }

            function l(t, e, n) {
                return ((r(e, n) * t + a(e, n)) * t + s(e)) * t
            }

            function c(t, e, n) {
                return 3 * r(e, n) * t * t + 2 * a(e, n) * t + s(e)
            }

            function u(e, n) {
                for (var o = 0; g > o; ++o) {
                    var r = c(n, t, i);
                    if (0 === r)return n;
                    n -= (l(n, t, i) - e) / r
                }
                return n
            }

            function h() {
                for (var e = 0; b > e; ++e)T[e] = l(e * w, t, i)
            }

            function d(e, n, o) {
                var r, a, s = 0;
                do {
                    a = n + (o - n) / 2, r = l(a, t, i) - e, r > 0 ? o = a : n = a
                } while (Math.abs(r) > v && ++s < y);
                return a
            }

            function f(e) {
                for (var n = 0, o = 1, r = b - 1; o != r && T[o] <= e; ++o)n += w;
                --o;
                var a = (e - T[o]) / (T[o + 1] - T[o]), s = n + a * w, l = c(s, t, i);
                return l >= m ? u(e, s) : 0 == l ? s : d(e, n, n + w)
            }

            function p() {
                S = !0, (t != n || i != o) && h()
            }

            var g = 4, m = .001, v = 1e-7, y = 10, b = 11, w = 1 / (b - 1), x = "Float32Array" in e;
            if (4 !== arguments.length)return !1;
            for (var C = 0; 4 > C; ++C)if ("number" != typeof arguments[C] || isNaN(arguments[C]) || !isFinite(arguments[C]))return !1;
            t = Math.min(t, 1), i = Math.min(i, 1), t = Math.max(t, 0), i = Math.max(i, 0);
            var T = x ? new Float32Array(b) : new Array(b), S = !1, E = function (e) {
                return S || p(), t === n && i === o ? e : 0 === e ? 0 : 1 === e ? 1 : l(f(e), n, o)
            };
            E.getControlPoints = function () {
                return [{x: t, y: n}, {x: i, y: o}]
            };
            var k = "generateBezier(" + [t, n, i, o] + ")";
            return E.toString = function () {
                return k
            }, E
        }

        function c(t, e) {
            var n = t;
            return g.isString(t) ? b.Easings[t] || (n = !1) : n = g.isArray(t) && 1 === t.length ? s.apply(null, t) : g.isArray(t) && 2 === t.length ? w.apply(null, t.concat([e])) : !(!g.isArray(t) || 4 !== t.length) && l.apply(null, t), n === !1 && (n = b.Easings[b.defaults.easing] ? b.defaults.easing : y), n
        }

        function u(t) {
            if (t) {
                var e = (new Date).getTime(), n = b.State.calls.length;
                n > 1e4 && (b.State.calls = o(b.State.calls));
                for (var r = 0; n > r; r++)if (b.State.calls[r]) {
                    var s = b.State.calls[r], l = s[0], c = s[2], f = s[3], p = !!f, m = null;
                    f || (f = b.State.calls[r][3] = e - 16);
                    for (var v = Math.min((e - f) / c.duration, 1), y = 0, w = l.length; w > y; y++) {
                        var C = l[y], S = C.element;
                        if (a(S)) {
                            var E = !1;
                            if (c.display !== i && null !== c.display && "none" !== c.display) {
                                if ("flex" === c.display) {
                                    var k = ["-webkit-box", "-moz-box", "-ms-flexbox", "-webkit-flex"];
                                    d.each(k, function (t, e) {
                                        x.setPropertyValue(S, "display", e)
                                    })
                                }
                                x.setPropertyValue(S, "display", c.display)
                            }
                            c.visibility !== i && "hidden" !== c.visibility && x.setPropertyValue(S, "visibility", c.visibility);
                            for (var A in C)if ("element" !== A) {
                                var _, P = C[A], I = g.isString(P.easing) ? b.Easings[P.easing] : P.easing;
                                if (1 === v)_ = P.endValue; else {
                                    var D = P.endValue - P.startValue;
                                    if (_ = P.startValue + D * I(v, c, D), !p && _ === P.currentValue)continue
                                }
                                if (P.currentValue = _, "tween" === A)m = _; else {
                                    if (x.Hooks.registered[A]) {
                                        var O = x.Hooks.getRoot(A), L = a(S).rootPropertyValueCache[O];
                                        L && (P.rootPropertyValue = L)
                                    }
                                    var F = x.setPropertyValue(S, A, P.currentValue + (0 === parseFloat(_) ? "" : P.unitType), P.rootPropertyValue, P.scrollData);
                                    x.Hooks.registered[A] && (a(S).rootPropertyValueCache[O] = x.Normalizations.registered[O] ? x.Normalizations.registered[O]("extract", null, F[1]) : F[1]), "transform" === F[0] && (E = !0)
                                }
                            }
                            c.mobileHA && a(S).transformCache.translate3d === i && (a(S).transformCache.translate3d = "(0px, 0px, 0px)", E = !0), E && x.flushTransformCache(S)
                        }
                    }
                    c.display !== i && "none" !== c.display && (b.State.calls[r][2].display = !1), c.visibility !== i && "hidden" !== c.visibility && (b.State.calls[r][2].visibility = !1), c.progress && c.progress.call(s[1], s[1], v, Math.max(0, f + c.duration - e), f, m), 1 === v && h(r)
                }
            }
            b.State.isTicking && T(u)
        }

        function h(t, e) {
            if (!b.State.calls[t])return !1;
            for (var n = b.State.calls[t][0], o = b.State.calls[t][1], r = b.State.calls[t][2], s = b.State.calls[t][4], l = !1, c = 0, u = n.length; u > c; c++) {
                var h = n[c].element;
                if (e || r.loop || ("none" === r.display && x.setPropertyValue(h, "display", r.display), "hidden" === r.visibility && x.setPropertyValue(h, "visibility", r.visibility)), r.loop !== !0 && (d.queue(h)[1] === i || !/\.velocityQueueEntryFlag/i.test(d.queue(h)[1])) && a(h)) {
                    a(h).isAnimating = !1, a(h).rootPropertyValueCache = {};
                    var f = !1;
                    d.each(x.Lists.transforms3D, function (t, e) {
                        var n = /^scale/.test(e) ? 1 : 0, o = a(h).transformCache[e];
                        a(h).transformCache[e] !== i && new RegExp("^\\(" + n + "[^.]").test(o) && (f = !0, delete a(h).transformCache[e])
                    }), r.mobileHA && (f = !0, delete a(h).transformCache.translate3d), f && x.flushTransformCache(h), x.Values.removeClass(h, "velocity-animating")
                }
                if (!e && r.complete && !r.loop && c === u - 1)try {
                    r.complete.call(o, o)
                } catch (t) {
                    setTimeout(function () {
                        throw t
                    }, 1)
                }
                s && r.loop !== !0 && s(o), a(h) && r.loop === !0 && !e && (d.each(a(h).tweensContainer, function (t, e) {
                    /^rotate/.test(t) && 360 === parseFloat(e.endValue) && (e.endValue = 0, e.startValue = 360), /^backgroundPosition/.test(t) && 100 === parseFloat(e.endValue) && "%" === e.unitType && (e.endValue = 0, e.startValue = 100)
                }), b(h, "reverse", {loop: !0, delay: r.delay})), r.queue !== !1 && d.dequeue(h, r.queue)
            }
            b.State.calls[t] = !1;
            for (var p = 0, g = b.State.calls.length; g > p; p++)if (b.State.calls[p] !== !1) {
                l = !0;
                break
            }
            l === !1 && (b.State.isTicking = !1, delete b.State.calls, b.State.calls = [])
        }

        var d, f = function () {
            if (n.documentMode)return n.documentMode;
            for (var t = 7; t > 4; t--) {
                var e = n.createElement("div");
                if (e.innerHTML = "<!--[if IE " + t + "]><span></span><![endif]-->", e.getElementsByTagName("span").length)return e = null, t
            }
            return i
        }(), p = function () {
            var t = 0;
            return e.webkitRequestAnimationFrame || e.mozRequestAnimationFrame || function (e) {
                    var n, i = (new Date).getTime();
                    return n = Math.max(0, 16 - (i - t)), t = i + n, setTimeout(function () {
                        e(i + n)
                    }, n)
                }
        }(), g = {
            isString: function (t) {
                return "string" == typeof t
            }, isArray: Array.isArray || function (t) {
                return "[object Array]" === Object.prototype.toString.call(t)
            }, isFunction: function (t) {
                return "[object Function]" === Object.prototype.toString.call(t)
            }, isNode: function (t) {
                return t && t.nodeType
            }, isNodeList: function (t) {
                return "object" == typeof t && /^\[object (HTMLCollection|NodeList|Object)\]$/.test(Object.prototype.toString.call(t)) && t.length !== i && (0 === t.length || "object" == typeof t[0] && t[0].nodeType > 0)
            }, isWrapped: function (t) {
                return t && (t.jquery || e.Zepto && e.Zepto.zepto.isZ(t))
            }, isSVG: function (t) {
                return e.SVGElement && t instanceof e.SVGElement
            }, isEmptyObject: function (t) {
                for (var e in t)return !1;
                return !0
            }
        }, m = !1;
        if (t.fn && t.fn.jquery ? (d = t, m = !0) : d = e.Velocity.Utilities, 8 >= f && !m)throw new Error("Velocity: IE8 and below require jQuery to be loaded before Velocity.");
        if (7 >= f)return void(jQuery.fn.velocity = jQuery.fn.animate);
        var v = 400, y = "swing", b = {
            State: {
                isMobile: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
                isAndroid: /Android/i.test(navigator.userAgent),
                isGingerbread: /Android 2\.3\.[3-7]/i.test(navigator.userAgent),
                isChrome: e.chrome,
                isFirefox: /Firefox/i.test(navigator.userAgent),
                prefixElement: n.createElement("div"),
                prefixMatches: {},
                scrollAnchor: null,
                scrollPropertyLeft: null,
                scrollPropertyTop: null,
                isTicking: !1,
                calls: []
            },
            CSS: {},
            Utilities: d,
            Redirects: {},
            Easings: {},
            Promise: e.Promise,
            defaults: {
                queue: "",
                duration: v,
                easing: y,
                begin: i,
                complete: i,
                progress: i,
                display: i,
                visibility: i,
                loop: !1,
                delay: !1,
                mobileHA: !0,
                _cacheValues: !0
            },
            init: function (t) {
                d.data(t, "velocity", {
                    isSVG: g.isSVG(t),
                    isAnimating: !1,
                    computedStyle: null,
                    tweensContainer: null,
                    rootPropertyValueCache: {},
                    transformCache: {}
                })
            },
            hook: null,
            mock: !1,
            version: {major: 1, minor: 2, patch: 2},
            debug: !1
        };
        e.pageYOffset !== i ? (b.State.scrollAnchor = e, b.State.scrollPropertyLeft = "pageXOffset", b.State.scrollPropertyTop = "pageYOffset") : (b.State.scrollAnchor = n.documentElement || n.body.parentNode || n.body, b.State.scrollPropertyLeft = "scrollLeft", b.State.scrollPropertyTop = "scrollTop");
        var w = function () {
            function t(t) {
                return -t.tension * t.x - t.friction * t.v
            }

            function e(e, n, i) {
                var o = {x: e.x + i.dx * n, v: e.v + i.dv * n, tension: e.tension, friction: e.friction};
                return {dx: o.v, dv: t(o)}
            }

            function n(n, i) {
                var o = {
                    dx: n.v,
                    dv: t(n)
                }, r = e(n, .5 * i, o), a = e(n, .5 * i, r), s = e(n, i, a), l = 1 / 6 * (o.dx + 2 * (r.dx + a.dx) + s.dx), c = 1 / 6 * (o.dv + 2 * (r.dv + a.dv) + s.dv);
                return n.x = n.x + l * i, n.v = n.v + c * i, n
            }

            return function t(e, i, o) {
                var r, a, s, l = {x: -1, v: 0, tension: null, friction: null}, c = [0], u = 0;
                for (e = parseFloat(e) || 500, i = parseFloat(i) || 20, o = o || null, l.tension = e, l.friction = i, r = null !== o, r ? (u = t(e, i), a = u / o * .016) : a = .016; s = n(s || l, a), c.push(1 + s.x), u += 16, Math.abs(s.x) > 1e-4 && Math.abs(s.v) > 1e-4;);
                return r ? function (t) {
                    return c[t * (c.length - 1) | 0]
                } : u
            }
        }();
        b.Easings = {
            linear: function (t) {
                return t
            }, swing: function (t) {
                return .5 - Math.cos(t * Math.PI) / 2
            }, spring: function (t) {
                return 1 - Math.cos(4.5 * t * Math.PI) * Math.exp(6 * -t)
            }
        }, d.each([["ease", [.25, .1, .25, 1]], ["ease-in", [.42, 0, 1, 1]], ["ease-out", [0, 0, .58, 1]], ["ease-in-out", [.42, 0, .58, 1]], ["easeInSine", [.47, 0, .745, .715]], ["easeOutSine", [.39, .575, .565, 1]], ["easeInOutSine", [.445, .05, .55, .95]], ["easeInQuad", [.55, .085, .68, .53]], ["easeOutQuad", [.25, .46, .45, .94]], ["easeInOutQuad", [.455, .03, .515, .955]], ["easeInCubic", [.55, .055, .675, .19]], ["easeOutCubic", [.215, .61, .355, 1]], ["easeInOutCubic", [.645, .045, .355, 1]], ["easeInQuart", [.895, .03, .685, .22]], ["easeOutQuart", [.165, .84, .44, 1]], ["easeInOutQuart", [.77, 0, .175, 1]], ["easeInQuint", [.755, .05, .855, .06]], ["easeOutQuint", [.23, 1, .32, 1]], ["easeInOutQuint", [.86, 0, .07, 1]], ["easeInExpo", [.95, .05, .795, .035]], ["easeOutExpo", [.19, 1, .22, 1]], ["easeInOutExpo", [1, 0, 0, 1]], ["easeInCirc", [.6, .04, .98, .335]], ["easeOutCirc", [.075, .82, .165, 1]], ["easeInOutCirc", [.785, .135, .15, .86]]], function (t, e) {
            b.Easings[e[0]] = l.apply(null, e[1])
        });
        var x = b.CSS = {
            RegEx: {
                isHex: /^#([A-f\d]{3}){1,2}$/i,
                valueUnwrap: /^[A-z]+\((.*)\)$/i,
                wrappedValueAlreadyExtracted: /[0-9.]+ [0-9.]+ [0-9.]+( [0-9.]+)?/,
                valueSplit: /([A-z]+\(.+\))|(([A-z0-9#-.]+?)(?=\s|$))/gi
            },
            Lists: {
                colors: ["fill", "stroke", "stopColor", "color", "backgroundColor", "borderColor", "borderTopColor", "borderRightColor", "borderBottomColor", "borderLeftColor", "outlineColor"],
                transformsBase: ["translateX", "translateY", "scale", "scaleX", "scaleY", "skewX", "skewY", "rotateZ"],
                transforms3D: ["transformPerspective", "translateZ", "scaleZ", "rotateX", "rotateY"]
            },
            Hooks: {
                templates: {
                    textShadow: ["Color X Y Blur", "black 0px 0px 0px"],
                    boxShadow: ["Color X Y Blur Spread", "black 0px 0px 0px 0px"],
                    clip: ["Top Right Bottom Left", "0px 0px 0px 0px"],
                    backgroundPosition: ["X Y", "0% 0%"],
                    transformOrigin: ["X Y Z", "50% 50% 0px"],
                    perspectiveOrigin: ["X Y", "50% 50%"]
                }, registered: {}, register: function () {
                    for (var t = 0; t < x.Lists.colors.length; t++) {
                        var e = "color" === x.Lists.colors[t] ? "0 0 0 1" : "255 255 255 1";
                        x.Hooks.templates[x.Lists.colors[t]] = ["Red Green Blue Alpha", e]
                    }
                    var n, i, o;
                    if (f)for (n in x.Hooks.templates) {
                        i = x.Hooks.templates[n], o = i[0].split(" ");
                        var r = i[1].match(x.RegEx.valueSplit);
                        "Color" === o[0] && (o.push(o.shift()), r.push(r.shift()), x.Hooks.templates[n] = [o.join(" "), r.join(" ")])
                    }
                    for (n in x.Hooks.templates) {
                        i = x.Hooks.templates[n], o = i[0].split(" ");
                        for (var t in o) {
                            var a = n + o[t], s = t;
                            x.Hooks.registered[a] = [n, s]
                        }
                    }
                }, getRoot: function (t) {
                    var e = x.Hooks.registered[t];
                    return e ? e[0] : t
                }, cleanRootPropertyValue: function (t, e) {
                    return x.RegEx.valueUnwrap.test(e) && (e = e.match(x.RegEx.valueUnwrap)[1]), x.Values.isCSSNullValue(e) && (e = x.Hooks.templates[t][1]), e
                }, extractValue: function (t, e) {
                    var n = x.Hooks.registered[t];
                    if (n) {
                        var i = n[0], o = n[1];
                        return e = x.Hooks.cleanRootPropertyValue(i, e), e.toString().match(x.RegEx.valueSplit)[o]
                    }
                    return e
                }, injectValue: function (t, e, n) {
                    var i = x.Hooks.registered[t];
                    if (i) {
                        var o, r = i[0], a = i[1];
                        return n = x.Hooks.cleanRootPropertyValue(r, n), o = n.toString().match(x.RegEx.valueSplit), o[a] = e, o.join(" ")
                    }
                    return n
                }
            },
            Normalizations: {
                registered: {
                    clip: function (t, e, n) {
                        switch (t) {
                            case"name":
                                return "clip";
                            case"extract":
                                var i;
                                return x.RegEx.wrappedValueAlreadyExtracted.test(n) ? i = n : (i = n.toString().match(x.RegEx.valueUnwrap), i = i ? i[1].replace(/,(\s+)?/g, " ") : n), i;
                            case"inject":
                                return "rect(" + n + ")"
                        }
                    }, blur: function (t, e, n) {
                        switch (t) {
                            case"name":
                                return b.State.isFirefox ? "filter" : "-webkit-filter";
                            case"extract":
                                var i = parseFloat(n);
                                if (!i && 0 !== i) {
                                    var o = n.toString().match(/blur\(([0-9]+[A-z]+)\)/i);
                                    i = o ? o[1] : 0
                                }
                                return i;
                            case"inject":
                                return parseFloat(n) ? "blur(" + n + ")" : "none"
                        }
                    }, opacity: function (t, e, n) {
                        if (8 >= f)switch (t) {
                            case"name":
                                return "filter";
                            case"extract":
                                var i = n.toString().match(/alpha\(opacity=(.*)\)/i);
                                return n = i ? i[1] / 100 : 1;
                            case"inject":
                                return e.style.zoom = 1, parseFloat(n) >= 1 ? "" : "alpha(opacity=" + parseInt(100 * parseFloat(n), 10) + ")"
                        } else switch (t) {
                            case"name":
                                return "opacity";
                            case"extract":
                                return n;
                            case"inject":
                                return n
                        }
                    }
                }, register: function () {
                    9 >= f || b.State.isGingerbread || (x.Lists.transformsBase = x.Lists.transformsBase.concat(x.Lists.transforms3D));
                    for (var t = 0; t < x.Lists.transformsBase.length; t++)!function () {
                        var e = x.Lists.transformsBase[t];
                        x.Normalizations.registered[e] = function (t, n, o) {
                            switch (t) {
                                case"name":
                                    return "transform";
                                case"extract":
                                    return a(n) === i || a(n).transformCache[e] === i ? /^scale/i.test(e) ? 1 : 0 : a(n).transformCache[e].replace(/[()]/g, "");
                                case"inject":
                                    var r = !1;
                                    switch (e.substr(0, e.length - 1)) {
                                        case"translate":
                                            r = !/(%|px|em|rem|vw|vh|\d)$/i.test(o);
                                            break;
                                        case"scal":
                                        case"scale":
                                            b.State.isAndroid && a(n).transformCache[e] === i && 1 > o && (o = 1), r = !/(\d)$/i.test(o);
                                            break;
                                        case"skew":
                                            r = !/(deg|\d)$/i.test(o);
                                            break;
                                        case"rotate":
                                            r = !/(deg|\d)$/i.test(o)
                                    }
                                    return r || (a(n).transformCache[e] = "(" + o + ")"), a(n).transformCache[e]
                            }
                        }
                    }();
                    for (var t = 0; t < x.Lists.colors.length; t++)!function () {
                        var e = x.Lists.colors[t];
                        x.Normalizations.registered[e] = function (t, n, o) {
                            switch (t) {
                                case"name":
                                    return e;
                                case"extract":
                                    var r;
                                    if (x.RegEx.wrappedValueAlreadyExtracted.test(o))r = o; else {
                                        var a, s = {
                                            black: "rgb(0, 0, 0)",
                                            blue: "rgb(0, 0, 255)",
                                            gray: "rgb(128, 128, 128)",
                                            green: "rgb(0, 128, 0)",
                                            red: "rgb(255, 0, 0)",
                                            white: "rgb(255, 255, 255)"
                                        };
                                        /^[A-z]+$/i.test(o) ? a = s[o] !== i ? s[o] : s.black : x.RegEx.isHex.test(o) ? a = "rgb(" + x.Values.hexToRgb(o).join(" ") + ")" : /^rgba?\(/i.test(o) || (a = s.black), r = (a || o).toString().match(x.RegEx.valueUnwrap)[1].replace(/,(\s+)?/g, " ")
                                    }
                                    return 8 >= f || 3 !== r.split(" ").length || (r += " 1"), r;
                                case"inject":
                                    return 8 >= f ? 4 === o.split(" ").length && (o = o.split(/\s+/).slice(0, 3).join(" ")) : 3 === o.split(" ").length && (o += " 1"), (8 >= f ? "rgb" : "rgba") + "(" + o.replace(/\s+/g, ",").replace(/\.(\d)+(?=,)/g, "") + ")"
                            }
                        }
                    }()
                }
            },
            Names: {
                camelCase: function (t) {
                    return t.replace(/-(\w)/g, function (t, e) {
                        return e.toUpperCase()
                    })
                }, SVGAttribute: function (t) {
                    var e = "width|height|x|y|cx|cy|r|rx|ry|x1|x2|y1|y2";
                    return (f || b.State.isAndroid && !b.State.isChrome) && (e += "|transform"), new RegExp("^(" + e + ")$", "i").test(t)
                }, prefixCheck: function (t) {
                    if (b.State.prefixMatches[t])return [b.State.prefixMatches[t], !0];
                    for (var e = ["", "Webkit", "Moz", "ms", "O"], n = 0, i = e.length; i > n; n++) {
                        var o;
                        if (o = 0 === n ? t : e[n] + t.replace(/^\w/, function (t) {
                                return t.toUpperCase()
                            }), g.isString(b.State.prefixElement.style[o]))return b.State.prefixMatches[t] = o, [o, !0]
                    }
                    return [t, !1]
                }
            },
            Values: {
                hexToRgb: function (t) {
                    var e, n = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i;
                    return t = t.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, function (t, e, n, i) {
                        return e + e + n + n + i + i
                    }), e = n.exec(t), e ? [parseInt(e[1], 16), parseInt(e[2], 16), parseInt(e[3], 16)] : [0, 0, 0]
                }, isCSSNullValue: function (t) {
                    return 0 == t || /^(none|auto|transparent|(rgba\(0, ?0, ?0, ?0\)))$/i.test(t)
                }, getUnitType: function (t) {
                    return /^(rotate|skew)/i.test(t) ? "deg" : /(^(scale|scaleX|scaleY|scaleZ|alpha|flexGrow|flexHeight|zIndex|fontWeight)$)|((opacity|red|green|blue|alpha)$)/i.test(t) ? "" : "px"
                }, getDisplayType: function (t) {
                    var e = t && t.tagName.toString().toLowerCase();
                    return /^(b|big|i|small|tt|abbr|acronym|cite|code|dfn|em|kbd|strong|samp|var|a|bdo|br|img|map|object|q|script|span|sub|sup|button|input|label|select|textarea)$/i.test(e) ? "inline" : /^(li)$/i.test(e) ? "list-item" : /^(tr)$/i.test(e) ? "table-row" : /^(table)$/i.test(e) ? "table" : /^(tbody)$/i.test(e) ? "table-row-group" : "block"
                }, addClass: function (t, e) {
                    t.classList ? t.classList.add(e) : t.className += (t.className.length ? " " : "") + e
                }, removeClass: function (t, e) {
                    t.classList ? t.classList.remove(e) : t.className = t.className.toString().replace(new RegExp("(^|\\s)" + e.split(" ").join("|") + "(\\s|$)", "gi"), " ")
                }
            },
            getPropertyValue: function (t, n, o, r) {
                function s(t, n) {
                    function o() {
                        c && x.setPropertyValue(t, "display", "none")
                    }

                    var l = 0;
                    if (8 >= f)l = d.css(t, n); else {
                        var c = !1;
                        if (/^(width|height)$/.test(n) && 0 === x.getPropertyValue(t, "display") && (c = !0, x.setPropertyValue(t, "display", x.Values.getDisplayType(t))), !r) {
                            if ("height" === n && "border-box" !== x.getPropertyValue(t, "boxSizing").toString().toLowerCase()) {
                                var u = t.offsetHeight - (parseFloat(x.getPropertyValue(t, "borderTopWidth")) || 0) - (parseFloat(x.getPropertyValue(t, "borderBottomWidth")) || 0) - (parseFloat(x.getPropertyValue(t, "paddingTop")) || 0) - (parseFloat(x.getPropertyValue(t, "paddingBottom")) || 0);
                                return o(), u
                            }
                            if ("width" === n && "border-box" !== x.getPropertyValue(t, "boxSizing").toString().toLowerCase()) {
                                var h = t.offsetWidth - (parseFloat(x.getPropertyValue(t, "borderLeftWidth")) || 0) - (parseFloat(x.getPropertyValue(t, "borderRightWidth")) || 0) - (parseFloat(x.getPropertyValue(t, "paddingLeft")) || 0) - (parseFloat(x.getPropertyValue(t, "paddingRight")) || 0);
                                return o(), h
                            }
                        }
                        var p;
                        p = a(t) === i ? e.getComputedStyle(t, null) : a(t).computedStyle ? a(t).computedStyle : a(t).computedStyle = e.getComputedStyle(t, null), "borderColor" === n && (n = "borderTopColor"), l = 9 === f && "filter" === n ? p.getPropertyValue(n) : p[n], ("" === l || null === l) && (l = t.style[n]), o()
                    }
                    if ("auto" === l && /^(top|right|bottom|left)$/i.test(n)) {
                        var g = s(t, "position");
                        ("fixed" === g || "absolute" === g && /top|left/i.test(n)) && (l = d(t).position()[n] + "px")
                    }
                    return l
                }

                var l;
                if (x.Hooks.registered[n]) {
                    var c = n, u = x.Hooks.getRoot(c);
                    o === i && (o = x.getPropertyValue(t, x.Names.prefixCheck(u)[0])), x.Normalizations.registered[u] && (o = x.Normalizations.registered[u]("extract", t, o)), l = x.Hooks.extractValue(c, o)
                } else if (x.Normalizations.registered[n]) {
                    var h, p;
                    h = x.Normalizations.registered[n]("name", t), "transform" !== h && (p = s(t, x.Names.prefixCheck(h)[0]), x.Values.isCSSNullValue(p) && x.Hooks.templates[n] && (p = x.Hooks.templates[n][1])), l = x.Normalizations.registered[n]("extract", t, p)
                }
                if (!/^[\d-]/.test(l))if (a(t) && a(t).isSVG && x.Names.SVGAttribute(n))if (/^(height|width)$/i.test(n))try {
                    l = t.getBBox()[n]
                } catch (t) {
                    l = 0
                } else l = t.getAttribute(n); else l = s(t, x.Names.prefixCheck(n)[0]);
                return x.Values.isCSSNullValue(l) && (l = 0), b.debug >= 2 && console.log("Get " + n + ": " + l), l
            },
            setPropertyValue: function (t, n, i, o, r) {
                var s = n;
                if ("scroll" === n)r.container ? r.container["scroll" + r.direction] = i : "Left" === r.direction ? e.scrollTo(i, r.alternateValue) : e.scrollTo(r.alternateValue, i); else if (x.Normalizations.registered[n] && "transform" === x.Normalizations.registered[n]("name", t))x.Normalizations.registered[n]("inject", t, i), s = "transform", i = a(t).transformCache[n]; else {
                    if (x.Hooks.registered[n]) {
                        var l = n, c = x.Hooks.getRoot(n);
                        o = o || x.getPropertyValue(t, c), i = x.Hooks.injectValue(l, i, o), n = c
                    }
                    if (x.Normalizations.registered[n] && (i = x.Normalizations.registered[n]("inject", t, i), n = x.Normalizations.registered[n]("name", t)), s = x.Names.prefixCheck(n)[0], 8 >= f)try {
                        t.style[s] = i
                    } catch (t) {
                        b.debug && console.log("Browser does not support [" + i + "] for [" + s + "]")
                    } else a(t) && a(t).isSVG && x.Names.SVGAttribute(n) ? t.setAttribute(n, i) : t.style[s] = i;
                    b.debug >= 2 && console.log("Set " + n + " (" + s + "): " + i)
                }
                return [s, i]
            },
            flushTransformCache: function (t) {
                function e(e) {
                    return parseFloat(x.getPropertyValue(t, e))
                }

                var n = "";
                if ((f || b.State.isAndroid && !b.State.isChrome) && a(t).isSVG) {
                    var i = {
                        translate: [e("translateX"), e("translateY")],
                        skewX: [e("skewX")],
                        skewY: [e("skewY")],
                        scale: 1 !== e("scale") ? [e("scale"), e("scale")] : [e("scaleX"), e("scaleY")],
                        rotate: [e("rotateZ"), 0, 0]
                    };
                    d.each(a(t).transformCache, function (t) {
                        /^translate/i.test(t) ? t = "translate" : /^scale/i.test(t) ? t = "scale" : /^rotate/i.test(t) && (t = "rotate"), i[t] && (n += t + "(" + i[t].join(" ") + ") ", delete i[t])
                    })
                } else {
                    var o, r;
                    d.each(a(t).transformCache, function (e) {
                        return o = a(t).transformCache[e], "transformPerspective" === e ? (r = o, !0) : (9 === f && "rotateZ" === e && (e = "rotate"), void(n += e + o + " "))
                    }), r && (n = "perspective" + r + " " + n)
                }
                x.setPropertyValue(t, "transform", n)
            }
        };
        x.Hooks.register(), x.Normalizations.register(), b.hook = function (t, e, n) {
            var o = i;
            return t = r(t), d.each(t, function (t, r) {
                if (a(r) === i && b.init(r), n === i)o === i && (o = b.CSS.getPropertyValue(r, e)); else {
                    var s = b.CSS.setPropertyValue(r, e, n);
                    "transform" === s[0] && b.CSS.flushTransformCache(r), o = s
                }
            }), o
        };
        var C = function () {
            function t() {
                return s ? A.promise || null : l
            }

            function o() {
                function t(t) {
                    function h(t, e) {
                        var n = i, o = i, a = i;
                        return g.isArray(t) ? (n = t[0], !g.isArray(t[1]) && /^[\d-]/.test(t[1]) || g.isFunction(t[1]) || x.RegEx.isHex.test(t[1]) ? a = t[1] : (g.isString(t[1]) && !x.RegEx.isHex.test(t[1]) || g.isArray(t[1])) && (o = e ? t[1] : c(t[1], s.duration), t[2] !== i && (a = t[2]))) : n = t, e || (o = o || s.easing), g.isFunction(n) && (n = n.call(r, S, T)), g.isFunction(a) && (a = a.call(r, S, T)), [n || 0, o, a]
                    }

                    function f(t, e) {
                        var n, i;
                        return i = (e || "0").toString().toLowerCase().replace(/[%A-z]+$/, function (t) {
                            return n = t, ""
                        }), n || (n = x.Values.getUnitType(t)), [i, n]
                    }

                    if (s.begin && 0 === S)try {
                        s.begin.call(p, p)
                    } catch (t) {
                        setTimeout(function () {
                            throw t
                        }, 1)
                    }
                    if ("scroll" === _) {
                        var v, w, C, E = /^x$/i.test(s.axis) ? "Left" : "Top", k = parseFloat(s.offset) || 0;
                        s.container ? g.isWrapped(s.container) || g.isNode(s.container) ? (s.container = s.container[0] || s.container, v = s.container["scroll" + E], C = v + d(r).position()[E.toLowerCase()] + k) : s.container = null : (v = b.State.scrollAnchor[b.State["scrollProperty" + E]], w = b.State.scrollAnchor[b.State["scrollProperty" + ("Left" === E ? "Top" : "Left")]], C = d(r).offset()[E.toLowerCase()] + k), l = {
                            scroll: {
                                rootPropertyValue: !1,
                                startValue: v,
                                currentValue: v,
                                endValue: C,
                                unitType: "",
                                easing: s.easing,
                                scrollData: {container: s.container, direction: E, alternateValue: w}
                            }, element: r
                        }, b.debug && console.log("tweensContainer (scroll): ", l.scroll, r)
                    } else if ("reverse" === _) {
                        if (!a(r).tweensContainer)return void d.dequeue(r, s.queue);
                        "none" === a(r).opts.display && (a(r).opts.display = "auto"), "hidden" === a(r).opts.visibility && (a(r).opts.visibility = "visible"), a(r).opts.loop = !1, a(r).opts.begin = null, a(r).opts.complete = null, y.easing || delete s.easing, y.duration || delete s.duration, s = d.extend({}, a(r).opts, s);
                        var P = d.extend(!0, {}, a(r).tweensContainer);
                        for (var I in P)if ("element" !== I) {
                            var D = P[I].startValue;
                            P[I].startValue = P[I].currentValue = P[I].endValue, P[I].endValue = D, g.isEmptyObject(y) || (P[I].easing = s.easing), b.debug && console.log("reverse tweensContainer (" + I + "): " + JSON.stringify(P[I]), r)
                        }
                        l = P
                    } else if ("start" === _) {
                        var P;
                        a(r).tweensContainer && a(r).isAnimating === !0 && (P = a(r).tweensContainer), d.each(m, function (t, e) {
                            if (RegExp("^" + x.Lists.colors.join("$|^") + "$").test(t)) {
                                var n = h(e, !0), o = n[0], r = n[1], a = n[2];
                                if (x.RegEx.isHex.test(o)) {
                                    for (var s = ["Red", "Green", "Blue"], l = x.Values.hexToRgb(o), c = a ? x.Values.hexToRgb(a) : i, u = 0; u < s.length; u++) {
                                        var d = [l[u]];
                                        r && d.push(r), c !== i && d.push(c[u]), m[t + s[u]] = d
                                    }
                                    delete m[t]
                                }
                            }
                        });
                        for (var O in m) {
                            var L = h(m[O]), M = L[0], R = L[1], W = L[2];
                            O = x.Names.camelCase(O);
                            var H = x.Hooks.getRoot(O), j = !1;
                            if (a(r).isSVG || "tween" === H || x.Names.prefixCheck(H)[1] !== !1 || x.Normalizations.registered[H] !== i) {
                                (s.display !== i && null !== s.display && "none" !== s.display || s.visibility !== i && "hidden" !== s.visibility) && /opacity|filter/.test(O) && !W && 0 !== M && (W = 0), s._cacheValues && P && P[O] ? (W === i && (W = P[O].endValue + P[O].unitType), j = a(r).rootPropertyValueCache[H]) : x.Hooks.registered[O] ? W === i ? (j = x.getPropertyValue(r, H), W = x.getPropertyValue(r, O, j)) : j = x.Hooks.templates[H][1] : W === i && (W = x.getPropertyValue(r, O));
                                var z, V, B, q = !1;
                                if (z = f(O, W), W = z[0], B = z[1], z = f(O, M), M = z[0].replace(/^([+-\/*])=/, function (t, e) {
                                        return q = e, ""
                                    }), V = z[1], W = parseFloat(W) || 0, M = parseFloat(M) || 0, "%" === V && (/^(fontSize|lineHeight)$/.test(O) ? (M /= 100, V = "em") : /^scale/.test(O) ? (M /= 100, V = "") : /(Red|Green|Blue)$/i.test(O) && (M = M / 100 * 255, V = "")), /[\/*]/.test(q))V = B; else if (B !== V && 0 !== W)if (0 === M)V = B; else {
                                    o = o || function () {
                                            var t = {
                                                myParent: r.parentNode || n.body,
                                                position: x.getPropertyValue(r, "position"),
                                                fontSize: x.getPropertyValue(r, "fontSize")
                                            }, i = t.position === F.lastPosition && t.myParent === F.lastParent, o = t.fontSize === F.lastFontSize;
                                            F.lastParent = t.myParent, F.lastPosition = t.position, F.lastFontSize = t.fontSize;
                                            var s = 100, l = {};
                                            if (o && i)l.emToPx = F.lastEmToPx, l.percentToPxWidth = F.lastPercentToPxWidth, l.percentToPxHeight = F.lastPercentToPxHeight; else {
                                                var c = a(r).isSVG ? n.createElementNS("http://www.w3.org/2000/svg", "rect") : n.createElement("div");
                                                b.init(c), t.myParent.appendChild(c), d.each(["overflow", "overflowX", "overflowY"], function (t, e) {
                                                    b.CSS.setPropertyValue(c, e, "hidden")
                                                }), b.CSS.setPropertyValue(c, "position", t.position), b.CSS.setPropertyValue(c, "fontSize", t.fontSize), b.CSS.setPropertyValue(c, "boxSizing", "content-box"), d.each(["minWidth", "maxWidth", "width", "minHeight", "maxHeight", "height"], function (t, e) {
                                                    b.CSS.setPropertyValue(c, e, s + "%")
                                                }), b.CSS.setPropertyValue(c, "paddingLeft", s + "em"), l.percentToPxWidth = F.lastPercentToPxWidth = (parseFloat(x.getPropertyValue(c, "width", null, !0)) || 1) / s, l.percentToPxHeight = F.lastPercentToPxHeight = (parseFloat(x.getPropertyValue(c, "height", null, !0)) || 1) / s, l.emToPx = F.lastEmToPx = (parseFloat(x.getPropertyValue(c, "paddingLeft")) || 1) / s, t.myParent.removeChild(c)
                                            }
                                            return null === F.remToPx && (F.remToPx = parseFloat(x.getPropertyValue(n.body, "fontSize")) || 16), null === F.vwToPx && (F.vwToPx = parseFloat(e.innerWidth) / 100, F.vhToPx = parseFloat(e.innerHeight) / 100), l.remToPx = F.remToPx, l.vwToPx = F.vwToPx, l.vhToPx = F.vhToPx, b.debug >= 1 && console.log("Unit ratios: " + JSON.stringify(l), r), l
                                        }();
                                    var Y = /margin|padding|left|right|width|text|word|letter/i.test(O) || /X$/.test(O) || "x" === O ? "x" : "y";
                                    switch (B) {
                                        case"%":
                                            W *= "x" === Y ? o.percentToPxWidth : o.percentToPxHeight;
                                            break;
                                        case"px":
                                            break;
                                        default:
                                            W *= o[B + "ToPx"]
                                    }
                                    switch (V) {
                                        case"%":
                                            W *= 1 / ("x" === Y ? o.percentToPxWidth : o.percentToPxHeight);
                                            break;
                                        case"px":
                                            break;
                                        default:
                                            W *= 1 / o[V + "ToPx"]
                                    }
                                }
                                switch (q) {
                                    case"+":
                                        M = W + M;
                                        break;
                                    case"-":
                                        M = W - M;
                                        break;
                                    case"*":
                                        M *= W;
                                        break;
                                    case"/":
                                        M = W / M
                                }
                                l[O] = {
                                    rootPropertyValue: j,
                                    startValue: W,
                                    currentValue: W,
                                    endValue: M,
                                    unitType: V,
                                    easing: R
                                }, b.debug && console.log("tweensContainer (" + O + "): " + JSON.stringify(l[O]), r)
                            } else b.debug && console.log("Skipping [" + H + "] due to a lack of browser support.")
                        }
                        l.element = r
                    }
                    l.element && (x.Values.addClass(r, "velocity-animating"), N.push(l), "" === s.queue && (a(r).tweensContainer = l, a(r).opts = s), a(r).isAnimating = !0, S === T - 1 ? (b.State.calls.push([N, p, s, null, A.resolver]), b.State.isTicking === !1 && (b.State.isTicking = !0, u())) : S++)
                }

                var o, r = this, s = d.extend({}, b.defaults, y), l = {};
                switch (a(r) === i && b.init(r), parseFloat(s.delay) && s.queue !== !1 && d.queue(r, s.queue, function (t) {
                    b.velocityQueueEntryFlag = !0, a(r).delayTimer = {
                        setTimeout: setTimeout(t, parseFloat(s.delay)),
                        next: t
                    }
                }), s.duration.toString().toLowerCase()) {
                    case"fast":
                        s.duration = 200;
                        break;
                    case"normal":
                        s.duration = v;
                        break;
                    case"slow":
                        s.duration = 600;
                        break;
                    default:
                        s.duration = parseFloat(s.duration) || 1
                }
                b.mock !== !1 && (b.mock === !0 ? s.duration = s.delay = 1 : (s.duration *= parseFloat(b.mock) || 1, s.delay *= parseFloat(b.mock) || 1)), s.easing = c(s.easing, s.duration), s.begin && !g.isFunction(s.begin) && (s.begin = null), s.progress && !g.isFunction(s.progress) && (s.progress = null), s.complete && !g.isFunction(s.complete) && (s.complete = null), s.display !== i && null !== s.display && (s.display = s.display.toString().toLowerCase(), "auto" === s.display && (s.display = b.CSS.Values.getDisplayType(r))), s.visibility !== i && null !== s.visibility && (s.visibility = s.visibility.toString().toLowerCase()), s.mobileHA = s.mobileHA && b.State.isMobile && !b.State.isGingerbread, s.queue === !1 ? s.delay ? setTimeout(t, s.delay) : t() : d.queue(r, s.queue, function (e, n) {
                    return n === !0 ? (A.promise && A.resolver(p), !0) : (b.velocityQueueEntryFlag = !0, void t(e))
                }),
                "" !== s.queue && "fx" !== s.queue || "inprogress" === d.queue(r)[0] || d.dequeue(r)
            }

            var s, l, f, p, m, y, w = arguments[0] && (arguments[0].p || d.isPlainObject(arguments[0].properties) && !arguments[0].properties.names || g.isString(arguments[0].properties));
            if (g.isWrapped(this) ? (s = !1, f = 0, p = this, l = this) : (s = !0, f = 1, p = w ? arguments[0].elements || arguments[0].e : arguments[0]), p = r(p)) {
                w ? (m = arguments[0].properties || arguments[0].p, y = arguments[0].options || arguments[0].o) : (m = arguments[f], y = arguments[f + 1]);
                var T = p.length, S = 0;
                if (!/^(stop|finish)$/i.test(m) && !d.isPlainObject(y)) {
                    var E = f + 1;
                    y = {};
                    for (var k = E; k < arguments.length; k++)g.isArray(arguments[k]) || !/^(fast|normal|slow)$/i.test(arguments[k]) && !/^\d/.test(arguments[k]) ? g.isString(arguments[k]) || g.isArray(arguments[k]) ? y.easing = arguments[k] : g.isFunction(arguments[k]) && (y.complete = arguments[k]) : y.duration = arguments[k]
                }
                var A = {promise: null, resolver: null, rejecter: null};
                s && b.Promise && (A.promise = new b.Promise(function (t, e) {
                    A.resolver = t, A.rejecter = e
                }));
                var _;
                switch (m) {
                    case"scroll":
                        _ = "scroll";
                        break;
                    case"reverse":
                        _ = "reverse";
                        break;
                    case"finish":
                    case"stop":
                        d.each(p, function (t, e) {
                            a(e) && a(e).delayTimer && (clearTimeout(a(e).delayTimer.setTimeout), a(e).delayTimer.next && a(e).delayTimer.next(), delete a(e).delayTimer)
                        });
                        var P = [];
                        return d.each(b.State.calls, function (t, e) {
                            e && d.each(e[1], function (n, o) {
                                var r = y === i ? "" : y;
                                return r !== !0 && e[2].queue !== r && (y !== i || e[2].queue !== !1) || void d.each(p, function (n, i) {
                                        i === o && ((y === !0 || g.isString(y)) && (d.each(d.queue(i, g.isString(y) ? y : ""), function (t, e) {
                                            g.isFunction(e) && e(null, !0)
                                        }), d.queue(i, g.isString(y) ? y : "", [])), "stop" === m ? (a(i) && a(i).tweensContainer && r !== !1 && d.each(a(i).tweensContainer, function (t, e) {
                                            e.endValue = e.currentValue
                                        }), P.push(t)) : "finish" === m && (e[2].duration = 1))
                                    })
                            })
                        }), "stop" === m && (d.each(P, function (t, e) {
                            h(e, !0)
                        }), A.promise && A.resolver(p)), t();
                    default:
                        if (!d.isPlainObject(m) || g.isEmptyObject(m)) {
                            if (g.isString(m) && b.Redirects[m]) {
                                var I = d.extend({}, y), D = I.duration, O = I.delay || 0;
                                return I.backwards === !0 && (p = d.extend(!0, [], p).reverse()), d.each(p, function (t, e) {
                                    parseFloat(I.stagger) ? I.delay = O + parseFloat(I.stagger) * t : g.isFunction(I.stagger) && (I.delay = O + I.stagger.call(e, t, T)), I.drag && (I.duration = parseFloat(D) || (/^(callout|transition)/.test(m) ? 1e3 : v), I.duration = Math.max(I.duration * (I.backwards ? 1 - t / T : (t + 1) / T), .75 * I.duration, 200)), b.Redirects[m].call(e, e, I || {}, t, T, p, A.promise ? A : i)
                                }), t()
                            }
                            var L = "Velocity: First argument (" + m + ") was not a property map, a known action, or a registered redirect. Aborting.";
                            return A.promise ? A.rejecter(new Error(L)) : console.log(L), t()
                        }
                        _ = "start"
                }
                var F = {
                    lastParent: null,
                    lastPosition: null,
                    lastFontSize: null,
                    lastPercentToPxWidth: null,
                    lastPercentToPxHeight: null,
                    lastEmToPx: null,
                    remToPx: null,
                    vwToPx: null,
                    vhToPx: null
                }, N = [];
                d.each(p, function (t, e) {
                    g.isNode(e) && o.call(e)
                });
                var M, I = d.extend({}, b.defaults, y);
                if (I.loop = parseInt(I.loop), M = 2 * I.loop - 1, I.loop)for (var R = 0; M > R; R++) {
                    var W = {delay: I.delay, progress: I.progress};
                    R === M - 1 && (W.display = I.display, W.visibility = I.visibility, W.complete = I.complete), C(p, "reverse", W)
                }
                return t()
            }
        };
        b = d.extend(C, b), b.animate = C;
        var T = e.requestAnimationFrame || p;
        return b.State.isMobile || n.hidden === i || n.addEventListener("visibilitychange", function () {
            n.hidden ? (T = function (t) {
                return setTimeout(function () {
                    t(!0)
                }, 16)
            }, u()) : T = e.requestAnimationFrame || p
        }), t.Velocity = b, t !== e && (t.fn.velocity = C, t.fn.velocity.defaults = b.defaults), d.each(["Down", "Up"], function (t, e) {
            b.Redirects["slide" + e] = function (t, n, o, r, a, s) {
                var l = d.extend({}, n), c = l.begin, u = l.complete, h = {
                    height: "",
                    marginTop: "",
                    marginBottom: "",
                    paddingTop: "",
                    paddingBottom: ""
                }, f = {};
                l.display === i && (l.display = "Down" === e ? "inline" === b.CSS.Values.getDisplayType(t) ? "inline-block" : "block" : "none"), l.begin = function () {
                    c && c.call(a, a);
                    for (var n in h) {
                        f[n] = t.style[n];
                        var i = b.CSS.getPropertyValue(t, n);
                        h[n] = "Down" === e ? [i, 0] : [0, i]
                    }
                    f.overflow = t.style.overflow, t.style.overflow = "hidden"
                }, l.complete = function () {
                    for (var e in f)t.style[e] = f[e];
                    u && u.call(a, a), s && s.resolver(a)
                }, b(t, h, l)
            }
        }), d.each(["In", "Out"], function (t, e) {
            b.Redirects["fade" + e] = function (t, n, o, r, a, s) {
                var l = d.extend({}, n), c = {opacity: "In" === e ? 1 : 0}, u = l.complete;
                l.complete = o !== r - 1 ? l.begin = null : function () {
                    u && u.call(a, a), s && s.resolver(a)
                }, l.display === i && (l.display = "In" === e ? "auto" : "none"), b(this, c, l)
            }
        }), b
    }(window.jQuery || window.Zepto || window, window, document)
})), function () {
    "use strict";
    var t = this, e = t.Chart, n = function (t) {
        this.canvas = t.canvas, this.ctx = t;
        var e = function (t, e) {
            return t["offset" + e] ? t["offset" + e] : document.defaultView.getComputedStyle(t).getPropertyValue(e)
        };
        this.width = e(t.canvas, "Width") || t.canvas.width, this.height = e(t.canvas, "Height") || t.canvas.height;
        return this.width = t.canvas.width, this.height = t.canvas.height, this.aspectRatio = this.width / this.height, i.retinaScale(this), this
    };
    n.defaults = {
        global: {
            animation: !0,
            animationSteps: 60,
            animationEasing: "easeOutQuart",
            showScale: !0,
            scaleOverride: !1,
            scaleSteps: null,
            scaleStepWidth: null,
            scaleStartValue: null,
            scaleLineColor: "rgba(0,0,0,.1)",
            scaleLineWidth: 1,
            scaleShowLabels: !0,
            scaleLabel: "<%=value%>",
            scaleIntegersOnly: !0,
            scaleBeginAtZero: !1,
            scaleFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
            scaleFontSize: 12,
            scaleFontStyle: "normal",
            scaleFontColor: "#666",
            responsive: !1,
            maintainAspectRatio: !0,
            showTooltips: !0,
            customTooltips: !1,
            tooltipEvents: ["mousemove", "touchstart", "touchmove", "mouseout"],
            tooltipFillColor: "rgba(0,0,0,0.8)",
            tooltipFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
            tooltipFontSize: 14,
            tooltipFontStyle: "normal",
            tooltipFontColor: "#fff",
            tooltipTitleFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
            tooltipTitleFontSize: 14,
            tooltipTitleFontStyle: "bold",
            tooltipTitleFontColor: "#fff",
            tooltipTitleTemplate: "<%= label%>",
            tooltipYPadding: 6,
            tooltipXPadding: 6,
            tooltipCaretSize: 8,
            tooltipCornerRadius: 6,
            tooltipXOffset: 10,
            tooltipTemplate: "<%if (label){%><%=label%>: <%}%><%= value %>",
            multiTooltipTemplate: "<%= value %>",
            multiTooltipKeyBackground: "#fff",
            segmentColorDefault: ["#A6CEE3", "#1F78B4", "#B2DF8A", "#33A02C", "#FB9A99", "#E31A1C", "#FDBF6F", "#FF7F00", "#CAB2D6", "#6A3D9A", "#B4B482", "#B15928"],
            segmentHighlightColorDefaults: ["#CEF6FF", "#47A0DC", "#DAFFB2", "#5BC854", "#FFC2C1", "#FF4244", "#FFE797", "#FFA728", "#F2DAFE", "#9265C2", "#DCDCAA", "#D98150"],
            onAnimationProgress: function () {
            },
            onAnimationComplete: function () {
            }
        }
    }, n.types = {};
    var i = n.helpers = {}, o = i.each = function (t, e, n) {
        var i = Array.prototype.slice.call(arguments, 3);
        if (t)if (t.length === +t.length) {
            var o;
            for (o = 0; o < t.length; o++)e.apply(n, [t[o], o].concat(i))
        } else for (var r in t)e.apply(n, [t[r], r].concat(i))
    }, r = i.clone = function (t) {
        var e = {};
        return o(t, function (n, i) {
            t.hasOwnProperty(i) && (e[i] = n)
        }), e
    }, a = i.extend = function (t) {
        return o(Array.prototype.slice.call(arguments, 1), function (e) {
            o(e, function (n, i) {
                e.hasOwnProperty(i) && (t[i] = n)
            })
        }), t
    }, s = i.merge = function (t, e) {
        var n = Array.prototype.slice.call(arguments, 0);
        return n.unshift({}), a.apply(null, n)
    }, l = i.indexOf = function (t, e) {
        if (Array.prototype.indexOf)return t.indexOf(e);
        for (var n = 0; n < t.length; n++)if (t[n] === e)return n;
        return -1
    }, c = (i.where = function (t, e) {
        var n = [];
        return i.each(t, function (t) {
            e(t) && n.push(t)
        }), n
    }, i.findNextWhere = function (t, e, n) {
        n || (n = -1);
        for (var i = n + 1; i < t.length; i++) {
            var o = t[i];
            if (e(o))return o
        }
    }, i.findPreviousWhere = function (t, e, n) {
        n || (n = t.length);
        for (var i = n - 1; i >= 0; i--) {
            var o = t[i];
            if (e(o))return o
        }
    }, i.inherits = function (t) {
        var e = this, n = t && t.hasOwnProperty("constructor") ? t.constructor : function () {
            return e.apply(this, arguments)
        }, i = function () {
            this.constructor = n
        };
        return i.prototype = e.prototype, n.prototype = new i, n.extend = c, t && a(n.prototype, t), n.__super__ = e.prototype, n
    }), u = i.noop = function () {
    }, h = i.uid = function () {
        var t = 0;
        return function () {
            return "chart-" + t++
        }
    }(), d = i.warn = function (t) {
        window.console && "function" == typeof window.console.warn && console.warn(t)
    }, f = i.amd = "function" == typeof define && define.amd, p = i.isNumber = function (t) {
        return !isNaN(parseFloat(t)) && isFinite(t)
    }, g = i.max = function (t) {
        return Math.max.apply(Math, t)
    }, m = i.min = function (t) {
        return Math.min.apply(Math, t)
    }, v = (i.cap = function (t, e, n) {
        if (p(e)) {
            if (t > e)return e
        } else if (p(n) && t < n)return n;
        return t
    }, i.getDecimalPlaces = function (t) {
        if (t % 1 != 0 && p(t)) {
            var e = t.toString();
            if (e.indexOf("e-") < 0)return e.split(".")[1].length;
            if (e.indexOf(".") < 0)return parseInt(e.split("e-")[1]);
            var n = e.split(".")[1].split("e-");
            return n[0].length + parseInt(n[1])
        }
        return 0
    }), y = i.radians = function (t) {
        return t * (Math.PI / 180)
    }, b = (i.getAngleFromPoint = function (t, e) {
        var n = e.x - t.x, i = e.y - t.y, o = Math.sqrt(n * n + i * i), r = 2 * Math.PI + Math.atan2(i, n);
        return n < 0 && i < 0 && (r += 2 * Math.PI), {angle: r, distance: o}
    }, i.aliasPixel = function (t) {
        return t % 2 == 0 ? 0 : .5
    }), w = (i.splineCurve = function (t, e, n, i) {
        var o = Math.sqrt(Math.pow(e.x - t.x, 2) + Math.pow(e.y - t.y, 2)), r = Math.sqrt(Math.pow(n.x - e.x, 2) + Math.pow(n.y - e.y, 2)), a = i * o / (o + r), s = i * r / (o + r);
        return {
            inner: {x: e.x - a * (n.x - t.x), y: e.y - a * (n.y - t.y)},
            outer: {x: e.x + s * (n.x - t.x), y: e.y + s * (n.y - t.y)}
        }
    }, i.calculateOrderOfMagnitude = function (t) {
        return Math.floor(Math.log(t) / Math.LN10)
    }), x = (i.calculateScaleRange = function (t, e, n, i, r) {
        var a = Math.floor(e / (1.5 * n)), s = 2 >= a, l = [];
        o(t, function (t) {
            null == t || l.push(t)
        });
        var c = m(l), u = g(l);
        u === c && (u += .5, c >= .5 && !i ? c -= .5 : u += .5);
        for (var h = Math.abs(u - c), d = w(h), f = Math.ceil(u / (1 * Math.pow(10, d))) * Math.pow(10, d), p = i ? 0 : Math.floor(c / (1 * Math.pow(10, d))) * Math.pow(10, d), v = f - p, y = Math.pow(10, d), b = Math.round(v / y); (b > a || 2 * b < a) && !s;)if (b > a)y *= 2, (b = Math.round(v / y)) % 1 != 0 && (s = !0); else if (r && d >= 0) {
            if (y / 2 % 1 != 0)break;
            y /= 2, b = Math.round(v / y)
        } else y /= 2, b = Math.round(v / y);
        return s && (b = 2, y = v / b), {steps: b, stepValue: y, min: p, max: p + b * y}
    }, i.template = function (t, e) {
        if (t instanceof Function)return t(e);
        var n = {};
        return function (t, e) {
            var i = /\W/.test(t) ? new Function("obj", "var p=[],print=function(){p.push.apply(p,arguments);};with(obj){p.push('" + t.replace(/[\r\t\n]/g, " ").split("<%").join("\t").replace(/((^|%>)[^\t]*)'/g, "$1\r").replace(/\t=(.*?)%>/g, "',$1,'").split("\t").join("');").split("%>").join("p.push('").split("\r").join("\\'") + "');}return p.join('');") : n[t] = n[t];
            return e ? i(e) : i
        }(t, e)
    }), C = (i.generateLabels = function (t, e, n, i) {
        var r = new Array(e);
        return t && o(r, function (e, o) {
            r[o] = x(t, {value: n + i * (o + 1)})
        }), r
    }, i.easingEffects = {
        linear: function (t) {
            return t
        }, easeInQuad: function (t) {
            return t * t
        }, easeOutQuad: function (t) {
            return -1 * t * (t - 2)
        }, easeInOutQuad: function (t) {
            return (t /= .5) < 1 ? .5 * t * t : -.5 * (--t * (t - 2) - 1)
        }, easeInCubic: function (t) {
            return t * t * t
        }, easeOutCubic: function (t) {
            return 1 * ((t = t / 1 - 1) * t * t + 1)
        }, easeInOutCubic: function (t) {
            return (t /= .5) < 1 ? .5 * t * t * t : .5 * ((t -= 2) * t * t + 2)
        }, easeInQuart: function (t) {
            return t * t * t * t
        }, easeOutQuart: function (t) {
            return -1 * ((t = t / 1 - 1) * t * t * t - 1)
        }, easeInOutQuart: function (t) {
            return (t /= .5) < 1 ? .5 * t * t * t * t : -.5 * ((t -= 2) * t * t * t - 2)
        }, easeInQuint: function (t) {
            return 1 * (t /= 1) * t * t * t * t
        }, easeOutQuint: function (t) {
            return 1 * ((t = t / 1 - 1) * t * t * t * t + 1)
        }, easeInOutQuint: function (t) {
            return (t /= .5) < 1 ? .5 * t * t * t * t * t : .5 * ((t -= 2) * t * t * t * t + 2)
        }, easeInSine: function (t) {
            return -1 * Math.cos(t / 1 * (Math.PI / 2)) + 1
        }, easeOutSine: function (t) {
            return 1 * Math.sin(t / 1 * (Math.PI / 2))
        }, easeInOutSine: function (t) {
            return -.5 * (Math.cos(Math.PI * t / 1) - 1)
        }, easeInExpo: function (t) {
            return 0 === t ? 1 : 1 * Math.pow(2, 10 * (t / 1 - 1))
        }, easeOutExpo: function (t) {
            return 1 === t ? 1 : 1 * (1 - Math.pow(2, -10 * t / 1))
        }, easeInOutExpo: function (t) {
            return 0 === t ? 0 : 1 === t ? 1 : (t /= .5) < 1 ? .5 * Math.pow(2, 10 * (t - 1)) : .5 * (2 - Math.pow(2, -10 * --t))
        }, easeInCirc: function (t) {
            return t >= 1 ? t : -1 * (Math.sqrt(1 - (t /= 1) * t) - 1)
        }, easeOutCirc: function (t) {
            return 1 * Math.sqrt(1 - (t = t / 1 - 1) * t)
        }, easeInOutCirc: function (t) {
            return (t /= .5) < 1 ? -.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1)
        }, easeInElastic: function (t) {
            var e = 1.70158, n = 0, i = 1;
            return 0 === t ? 0 : 1 == (t /= 1) ? 1 : (n || (n = .3), i < Math.abs(1) ? (i = 1, e = n / 4) : e = n / (2 * Math.PI) * Math.asin(1 / i), -(i * Math.pow(2, 10 * (t -= 1)) * Math.sin((1 * t - e) * (2 * Math.PI) / n)))
        }, easeOutElastic: function (t) {
            var e = 1.70158, n = 0, i = 1;
            return 0 === t ? 0 : 1 == (t /= 1) ? 1 : (n || (n = .3), i < Math.abs(1) ? (i = 1, e = n / 4) : e = n / (2 * Math.PI) * Math.asin(1 / i), i * Math.pow(2, -10 * t) * Math.sin((1 * t - e) * (2 * Math.PI) / n) + 1)
        }, easeInOutElastic: function (t) {
            var e = 1.70158, n = 0, i = 1;
            return 0 === t ? 0 : 2 == (t /= .5) ? 1 : (n || (n = .3 * 1.5 * 1), i < Math.abs(1) ? (i = 1, e = n / 4) : e = n / (2 * Math.PI) * Math.asin(1 / i), t < 1 ? -.5 * (i * Math.pow(2, 10 * (t -= 1)) * Math.sin((1 * t - e) * (2 * Math.PI) / n)) : i * Math.pow(2, -10 * (t -= 1)) * Math.sin((1 * t - e) * (2 * Math.PI) / n) * .5 + 1)
        }, easeInBack: function (t) {
            var e = 1.70158;
            return 1 * (t /= 1) * t * ((e + 1) * t - e)
        }, easeOutBack: function (t) {
            var e = 1.70158;
            return 1 * ((t = t / 1 - 1) * t * ((e + 1) * t + e) + 1)
        }, easeInOutBack: function (t) {
            var e = 1.70158;
            return (t /= .5) < 1 ? t * t * ((1 + (e *= 1.525)) * t - e) * .5 : .5 * ((t -= 2) * t * ((1 + (e *= 1.525)) * t + e) + 2)
        }, easeInBounce: function (t) {
            return 1 - C.easeOutBounce(1 - t)
        }, easeOutBounce: function (t) {
            return (t /= 1) < 1 / 2.75 ? 7.5625 * t * t * 1 : t < 2 / 2.75 ? 1 * (7.5625 * (t -= 1.5 / 2.75) * t + .75) : t < 2.5 / 2.75 ? 1 * (7.5625 * (t -= 2.25 / 2.75) * t + .9375) : 1 * (7.5625 * (t -= 2.625 / 2.75) * t + .984375)
        }, easeInOutBounce: function (t) {
            return t < .5 ? .5 * C.easeInBounce(2 * t) : .5 * C.easeOutBounce(2 * t - 1) + .5
        }
    }), T = i.requestAnimFrame = function () {
        return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (t) {
                return window.setTimeout(t, 1e3 / 60)
            }
    }(), S = (i.cancelAnimFrame = function () {
        return window.cancelAnimationFrame || window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame || window.oCancelAnimationFrame || window.msCancelAnimationFrame || function (t) {
                return window.clearTimeout(t, 1e3 / 60)
            }
    }(), i.animationLoop = function (t, e, n, i, o, r) {
        var a = 0, s = C[n] || C.linear, l = function () {
            a++;
            var n = a / e, c = s(n);
            t.call(r, c, n, a), i.call(r, c, n), a < e ? r.animationFrame = T(l) : o.apply(r)
        };
        T(l)
    }, i.getRelativePosition = function (t) {
        var e, n, i = t.originalEvent || t, o = t.currentTarget || t.srcElement, r = o.getBoundingClientRect();
        return i.touches ? (e = i.touches[0].clientX - r.left, n = i.touches[0].clientY - r.top) : (e = i.clientX - r.left, n = i.clientY - r.top), {
            x: e,
            y: n
        }
    }, i.addEvent = function (t, e, n) {
        t.addEventListener ? t.addEventListener(e, n) : t.attachEvent ? t.attachEvent("on" + e, n) : t["on" + e] = n
    }), E = i.removeEvent = function (t, e, n) {
        t.removeEventListener ? t.removeEventListener(e, n, !1) : t.detachEvent ? t.detachEvent("on" + e, n) : t["on" + e] = u
    }, k = (i.bindEvents = function (t, e, n) {
        t.events || (t.events = {}), o(e, function (e) {
            t.events[e] = function () {
                n.apply(t, arguments)
            }, S(t.chart.canvas, e, t.events[e])
        })
    }, i.unbindEvents = function (t, e) {
        o(e, function (e, n) {
            E(t.chart.canvas, n, e)
        })
    }), A = i.getMaximumWidth = function (t) {
        var e = t.parentNode, n = parseInt(P(e, "padding-left")) + parseInt(P(e, "padding-right"));
        return e.clientWidth - n
    }, _ = i.getMaximumHeight = function (t) {
        var e = t.parentNode, n = parseInt(P(e, "padding-bottom")) + parseInt(P(e, "padding-top"));
        return e.clientHeight - n
    }, P = i.getStyle = function (t, e) {
        return t.currentStyle ? t.currentStyle[e] : document.defaultView.getComputedStyle(t, null).getPropertyValue(e)
    }, I = (i.getMaximumSize = i.getMaximumWidth, i.retinaScale = function (t) {
        var e = t.ctx, n = t.canvas.width, i = t.canvas.height;
        window.devicePixelRatio && (e.canvas.style.width = n + "px", e.canvas.style.height = i + "px", e.canvas.height = i * window.devicePixelRatio, e.canvas.width = n * window.devicePixelRatio, e.scale(window.devicePixelRatio, window.devicePixelRatio))
    }), D = i.clear = function (t) {
        t.ctx.clearRect(0, 0, t.width, t.height)
    }, O = i.fontString = function (t, e, n) {
        return e + " " + t + "px " + n
    }, L = i.longestText = function (t, e, n) {
        t.font = e;
        var i = 0;
        return o(n, function (e) {
            var n = t.measureText(e).width;
            i = n > i ? n : i
        }), i
    }, F = i.drawRoundedRectangle = function (t, e, n, i, o, r) {
        t.beginPath(), t.moveTo(e + r, n), t.lineTo(e + i - r, n), t.quadraticCurveTo(e + i, n, e + i, n + r), t.lineTo(e + i, n + o - r), t.quadraticCurveTo(e + i, n + o, e + i - r, n + o), t.lineTo(e + r, n + o), t.quadraticCurveTo(e, n + o, e, n + o - r), t.lineTo(e, n + r), t.quadraticCurveTo(e, n, e + r, n), t.closePath()
    };
    n.instances = {}, n.Type = function (t, e, i) {
        this.options = e, this.chart = i, this.id = h(), n.instances[this.id] = this, e.responsive && this.resize(), this.initialize.call(this, t)
    }, a(n.Type.prototype, {
        initialize: function () {
            return this
        }, clear: function () {
            return D(this.chart), this
        }, stop: function () {
            return n.animationService.cancelAnimation(this), this
        }, resize: function (t) {
            this.stop();
            var e = this.chart.canvas, n = A(this.chart.canvas), i = this.options.maintainAspectRatio ? n / this.chart.aspectRatio : _(this.chart.canvas);
            return e.width = this.chart.width = n, e.height = this.chart.height = i, I(this.chart), "function" == typeof t && t.apply(this, Array.prototype.slice.call(arguments, 1)), this
        }, reflow: u, render: function (t) {
            if (t && this.reflow(), this.options.animation && !t) {
                var e = new n.Animation;
                e.numSteps = this.options.animationSteps, e.easing = this.options.animationEasing, e.render = function (t, e) {
                    var n = i.easingEffects[e.easing], o = e.currentStep / e.numSteps, r = n(o);
                    t.draw(r, o, e.currentStep)
                }, e.onAnimationProgress = this.options.onAnimationProgress, e.onAnimationComplete = this.options.onAnimationComplete, n.animationService.addAnimation(this, e)
            } else this.draw(), this.options.onAnimationComplete.call(this);
            return this
        }, generateLegend: function () {
            return x(this.options.legendTemplate, this)
        }, destroy: function () {
            this.clear(), k(this, this.events);
            var t = this.chart.canvas;
            t.width = this.chart.width, t.height = this.chart.height, t.style.removeProperty ? (t.style.removeProperty("width"), t.style.removeProperty("height")) : (t.style.removeAttribute("width"), t.style.removeAttribute("height")), delete n.instances[this.id]
        }, showTooltip: function (t, e) {
            if (void 0 === this.activeElements && (this.activeElements = []), function (t) {
                    var e = !1;
                    return t.length !== this.activeElements.length ? e = !0 : (o(t, function (t, n) {
                        t !== this.activeElements[n] && (e = !0)
                    }, this), e)
                }.call(this, t) || e) {
                if (this.activeElements = t, this.draw(), this.options.customTooltips && this.options.customTooltips(!1), t.length > 0)if (this.datasets && this.datasets.length > 1) {
                    for (var r, a, s = this.datasets.length - 1; s >= 0 && (r = this.datasets[s].points || this.datasets[s].bars || this.datasets[s].segments, (a = l(r, t[0])) === -1); s--);
                    var c = [], u = [], h = function (t) {
                        var e, n, o, r, s, l = [], h = [], d = [];
                        return i.each(this.datasets, function (t) {
                            e = t.points || t.bars || t.segments, e[a] && e[a].hasValue() && l.push(e[a])
                        }), i.each(l, function (t) {
                            h.push(t.x), d.push(t.y), c.push(i.template(this.options.multiTooltipTemplate, t)), u.push({
                                fill: t._saved.fillColor || t.fillColor,
                                stroke: t._saved.strokeColor || t.strokeColor
                            })
                        }, this), s = m(d), o = g(d), r = m(h), n = g(h), {
                            x: r > this.chart.width / 2 ? r : n,
                            y: (s + o) / 2
                        }
                    }.call(this, a);
                    new n.MultiTooltip({
                        x: h.x,
                        y: h.y,
                        xPadding: this.options.tooltipXPadding,
                        yPadding: this.options.tooltipYPadding,
                        xOffset: this.options.tooltipXOffset,
                        fillColor: this.options.tooltipFillColor,
                        textColor: this.options.tooltipFontColor,
                        fontFamily: this.options.tooltipFontFamily,
                        fontStyle: this.options.tooltipFontStyle,
                        fontSize: this.options.tooltipFontSize,
                        titleTextColor: this.options.tooltipTitleFontColor,
                        titleFontFamily: this.options.tooltipTitleFontFamily,
                        titleFontStyle: this.options.tooltipTitleFontStyle,
                        titleFontSize: this.options.tooltipTitleFontSize,
                        cornerRadius: this.options.tooltipCornerRadius,
                        labels: c,
                        legendColors: u,
                        legendColorBackground: this.options.multiTooltipKeyBackground,
                        title: x(this.options.tooltipTitleTemplate, t[0]),
                        chart: this.chart,
                        ctx: this.chart.ctx,
                        custom: this.options.customTooltips
                    }).draw()
                } else o(t, function (t) {
                    var e = t.tooltipPosition();
                    new n.Tooltip({
                        x: Math.round(e.x),
                        y: Math.round(e.y),
                        xPadding: this.options.tooltipXPadding,
                        yPadding: this.options.tooltipYPadding,
                        fillColor: this.options.tooltipFillColor,
                        textColor: this.options.tooltipFontColor,
                        fontFamily: this.options.tooltipFontFamily,
                        fontStyle: this.options.tooltipFontStyle,
                        fontSize: this.options.tooltipFontSize,
                        caretHeight: this.options.tooltipCaretSize,
                        cornerRadius: this.options.tooltipCornerRadius,
                        text: x(this.options.tooltipTemplate, t),
                        chart: this.chart,
                        custom: this.options.customTooltips
                    }).draw()
                }, this);
                return this
            }
        }, toBase64Image: function () {
            return this.chart.canvas.toDataURL.apply(this.chart.canvas, arguments)
        }
    }), n.Type.extend = function (t) {
        var e = this, i = function () {
            return e.apply(this, arguments)
        };
        if (i.prototype = r(e.prototype), a(i.prototype, t), i.extend = n.Type.extend, t.name || e.prototype.name) {
            var o = t.name || e.prototype.name, l = n.defaults[e.prototype.name] ? r(n.defaults[e.prototype.name]) : {};
            n.defaults[o] = a(l, t.defaults), n.types[o] = i, n.prototype[o] = function (t, e) {
                return new i(t, s(n.defaults.global, n.defaults[o], e || {}), this)
            }
        } else d("Name not provided for this chart, so it hasn't been registered");
        return e
    }, n.Element = function (t) {
        a(this, t), this.initialize.apply(this, arguments), this.save()
    }, a(n.Element.prototype, {
        initialize: function () {
        }, restore: function (t) {
            return t ? o(t, function (t) {
                this[t] = this._saved[t]
            }, this) : a(this, this._saved), this
        }, save: function () {
            return this._saved = r(this), delete this._saved._saved, this
        }, update: function (t) {
            return o(t, function (t, e) {
                this._saved[e] = this[e], this[e] = t
            }, this), this
        }, transition: function (t, e) {
            return o(t, function (t, n) {
                this[n] = (t - this._saved[n]) * e + this._saved[n]
            }, this), this
        }, tooltipPosition: function () {
            return {x: this.x, y: this.y}
        }, hasValue: function () {
            return p(this.value)
        }
    }), n.Element.extend = c, n.Point = n.Element.extend({
        display: !0, inRange: function (t, e) {
            var n = this.hitDetectionRadius + this.radius;
            return Math.pow(t - this.x, 2) + Math.pow(e - this.y, 2) < Math.pow(n, 2)
        }, draw: function () {
            if (this.display) {
                var t = this.ctx;
                t.beginPath(), t.arc(this.x, this.y, this.radius, 0, 2 * Math.PI), t.closePath(), t.strokeStyle = this.strokeColor, t.lineWidth = this.strokeWidth, t.fillStyle = this.fillColor, t.fill(), t.stroke()
            }
        }
    }), n.Arc = n.Element.extend({
        inRange: function (t, e) {
            var n = i.getAngleFromPoint(this, {
                x: t,
                y: e
            }), o = n.angle % (2 * Math.PI), r = (2 * Math.PI + this.startAngle) % (2 * Math.PI), a = (2 * Math.PI + this.endAngle) % (2 * Math.PI) || 360, s = a < r ? o <= a || o >= r : o >= r && o <= a, l = n.distance >= this.innerRadius && n.distance <= this.outerRadius;
            return s && l
        }, tooltipPosition: function () {
            var t = this.startAngle + (this.endAngle - this.startAngle) / 2, e = (this.outerRadius - this.innerRadius) / 2 + this.innerRadius;
            return {x: this.x + Math.cos(t) * e, y: this.y + Math.sin(t) * e}
        }, draw: function (t) {
            var e = this.ctx;
            e.beginPath(), e.arc(this.x, this.y, this.outerRadius < 0 ? 0 : this.outerRadius, this.startAngle, this.endAngle), e.arc(this.x, this.y, this.innerRadius < 0 ? 0 : this.innerRadius, this.endAngle, this.startAngle, !0), e.closePath(), e.strokeStyle = this.strokeColor, e.lineWidth = this.strokeWidth, e.fillStyle = this.fillColor, e.fill(), e.lineJoin = "bevel", this.showStroke && e.stroke()
        }
    }), n.Rectangle = n.Element.extend({
        draw: function () {
            var t = this.ctx, e = this.width / 2, n = this.x - e, i = this.x + e, o = this.base - (this.base - this.y), r = this.strokeWidth / 2;
            this.showStroke && (n += r, i -= r, o += r), t.beginPath(), t.fillStyle = this.fillColor, t.strokeStyle = this.strokeColor, t.lineWidth = this.strokeWidth, t.moveTo(n, this.base), t.lineTo(n, o), t.lineTo(i, o), t.lineTo(i, this.base), t.fill(), this.showStroke && t.stroke()
        }, height: function () {
            return this.base - this.y
        }, inRange: function (t, e) {
            return t >= this.x - this.width / 2 && t <= this.x + this.width / 2 && e >= this.y && e <= this.base
        }
    }), n.Animation = n.Element.extend({
        currentStep: null,
        numSteps: 60,
        easing: "",
        render: null,
        onAnimationProgress: null,
        onAnimationComplete: null
    }), n.Tooltip = n.Element.extend({
        draw: function () {
            var t = this.chart.ctx;
            t.font = O(this.fontSize, this.fontStyle, this.fontFamily), this.xAlign = "center", this.yAlign = "above";
            var e = this.caretPadding = 2, n = t.measureText(this.text).width + 2 * this.xPadding, i = this.fontSize + 2 * this.yPadding, o = i + this.caretHeight + e;
            this.x + n / 2 > this.chart.width ? this.xAlign = "left" : this.x - n / 2 < 0 && (this.xAlign = "right"), this.y - o < 0 && (this.yAlign = "below");
            var r = this.x - n / 2, a = this.y - o;
            if (t.fillStyle = this.fillColor, this.custom)this.custom(this); else {
                switch (this.yAlign) {
                    case"above":
                        t.beginPath(), t.moveTo(this.x, this.y - e), t.lineTo(this.x + this.caretHeight, this.y - (e + this.caretHeight)), t.lineTo(this.x - this.caretHeight, this.y - (e + this.caretHeight)), t.closePath(), t.fill();
                        break;
                    case"below":
                        a = this.y + e + this.caretHeight, t.beginPath(), t.moveTo(this.x, this.y + e), t.lineTo(this.x + this.caretHeight, this.y + e + this.caretHeight), t.lineTo(this.x - this.caretHeight, this.y + e + this.caretHeight), t.closePath(), t.fill()
                }
                switch (this.xAlign) {
                    case"left":
                        r = this.x - n + (this.cornerRadius + this.caretHeight);
                        break;
                    case"right":
                        r = this.x - (this.cornerRadius + this.caretHeight)
                }
                F(t, r, a, n, i, this.cornerRadius), t.fill(), t.fillStyle = this.textColor, t.textAlign = "center", t.textBaseline = "middle", t.fillText(this.text, r + n / 2, a + i / 2)
            }
        }
    }), n.MultiTooltip = n.Element.extend({
        initialize: function () {
            this.font = O(this.fontSize, this.fontStyle, this.fontFamily), this.titleFont = O(this.titleFontSize, this.titleFontStyle, this.titleFontFamily), this.titleHeight = this.title ? 1.5 * this.titleFontSize : 0, this.height = this.labels.length * this.fontSize + (this.labels.length - 1) * (this.fontSize / 2) + 2 * this.yPadding + this.titleHeight, this.ctx.font = this.titleFont;
            var t = this.ctx.measureText(this.title).width, e = L(this.ctx, this.font, this.labels) + this.fontSize + 3, n = g([e, t]);
            this.width = n + 2 * this.xPadding;
            var i = this.height / 2;
            this.y - i < 0 ? this.y = i : this.y + i > this.chart.height && (this.y = this.chart.height - i), this.x > this.chart.width / 2 ? this.x -= this.xOffset + this.width : this.x += this.xOffset
        }, getLineHeight: function (t) {
            var e = this.y - this.height / 2 + this.yPadding, n = t - 1;
            return 0 === t ? e + this.titleHeight / 3 : e + (1.5 * this.fontSize * n + this.fontSize / 2) + this.titleHeight
        }, draw: function () {
            if (this.custom)this.custom(this); else {
                F(this.ctx, this.x, this.y - this.height / 2, this.width, this.height, this.cornerRadius);
                var t = this.ctx;
                t.fillStyle = this.fillColor, t.fill(), t.closePath(), t.textAlign = "left", t.textBaseline = "middle", t.fillStyle = this.titleTextColor, t.font = this.titleFont, t.fillText(this.title, this.x + this.xPadding, this.getLineHeight(0)), t.font = this.font, i.each(this.labels, function (e, n) {
                    t.fillStyle = this.textColor, t.fillText(e, this.x + this.xPadding + this.fontSize + 3, this.getLineHeight(n + 1)), t.fillStyle = this.legendColorBackground, t.fillRect(this.x + this.xPadding, this.getLineHeight(n + 1) - this.fontSize / 2, this.fontSize, this.fontSize), t.fillStyle = this.legendColors[n].fill, t.fillRect(this.x + this.xPadding, this.getLineHeight(n + 1) - this.fontSize / 2, this.fontSize, this.fontSize)
                }, this)
            }
        }
    }), n.Scale = n.Element.extend({
        initialize: function () {
            this.fit()
        }, buildYLabels: function () {
            this.yLabels = [];
            for (var t = v(this.stepValue), e = 0; e <= this.steps; e++)this.yLabels.push(x(this.templateString, {value: (this.min + e * this.stepValue).toFixed(t)}));
            this.yLabelWidth = this.display && this.showLabels ? L(this.ctx, this.font, this.yLabels) + 10 : 0
        }, addXLabel: function (t) {
            this.xLabels.push(t), this.valuesCount++, this.fit()
        }, removeXLabel: function () {
            this.xLabels.shift(), this.valuesCount--, this.fit()
        }, fit: function () {
            this.startPoint = this.display ? this.fontSize : 0, this.endPoint = this.display ? this.height - 1.5 * this.fontSize - 5 : this.height, this.startPoint += this.padding, this.endPoint -= this.padding;
            var t, e = this.endPoint, n = this.endPoint - this.startPoint;
            for (this.calculateYRange(n), this.buildYLabels(), this.calculateXLabelRotation(); n > this.endPoint - this.startPoint;)n = this.endPoint - this.startPoint, t = this.yLabelWidth, this.calculateYRange(n), this.buildYLabels(), t < this.yLabelWidth && (this.endPoint = e, this.calculateXLabelRotation())
        }, calculateXLabelRotation: function () {
            this.ctx.font = this.font;
            var t, e = this.ctx.measureText(this.xLabels[0]).width, n = this.ctx.measureText(this.xLabels[this.xLabels.length - 1]).width;
            if (this.xScalePaddingRight = n / 2 + 3, this.xScalePaddingLeft = e / 2 > this.yLabelWidth ? e / 2 : this.yLabelWidth, this.xLabelRotation = 0, this.display) {
                var i, o = L(this.ctx, this.font, this.xLabels);
                this.xLabelWidth = o;
                for (var r = Math.floor(this.calculateX(1) - this.calculateX(0)) - 6; this.xLabelWidth > r && 0 === this.xLabelRotation || this.xLabelWidth > r && this.xLabelRotation <= 90 && this.xLabelRotation > 0;)i = Math.cos(y(this.xLabelRotation)), t = i * e, i * n, t + this.fontSize / 2 > this.yLabelWidth && (this.xScalePaddingLeft = t + this.fontSize / 2), this.xScalePaddingRight = this.fontSize / 2, this.xLabelRotation++, this.xLabelWidth = i * o;
                this.xLabelRotation > 0 && (this.endPoint -= Math.sin(y(this.xLabelRotation)) * o + 3)
            } else this.xLabelWidth = 0, this.xScalePaddingRight = this.padding, this.xScalePaddingLeft = this.padding
        }, calculateYRange: u, drawingArea: function () {
            return this.startPoint - this.endPoint
        }, calculateY: function (t) {
            var e = this.drawingArea() / (this.min - this.max);
            return this.endPoint - e * (t - this.min)
        }, calculateX: function (t) {
            var e = (this.xLabelRotation, this.width - (this.xScalePaddingLeft + this.xScalePaddingRight)), n = e / Math.max(this.valuesCount - (this.offsetGridLines ? 0 : 1), 1), i = n * t + this.xScalePaddingLeft;
            return this.offsetGridLines && (i += n / 2), Math.round(i)
        }, update: function (t) {
            i.extend(this, t), this.fit()
        }, draw: function () {
            var t = this.ctx, e = (this.endPoint - this.startPoint) / this.steps, n = Math.round(this.xScalePaddingLeft);
            this.display && (t.fillStyle = this.textColor, t.font = this.font, o(this.yLabels, function (o, r) {
                var a = this.endPoint - e * r, s = Math.round(a), l = this.showHorizontalLines;
                t.textAlign = "right", t.textBaseline = "middle", this.showLabels && t.fillText(o, n - 10, a), 0 !== r || l || (l = !0), l && t.beginPath(), r > 0 ? (t.lineWidth = this.gridLineWidth, t.strokeStyle = this.gridLineColor) : (t.lineWidth = this.lineWidth, t.strokeStyle = this.lineColor), s += i.aliasPixel(t.lineWidth), l && (t.moveTo(n, s), t.lineTo(this.width, s), t.stroke(), t.closePath()), t.lineWidth = this.lineWidth, t.strokeStyle = this.lineColor, t.beginPath(), t.moveTo(n - 5, s), t.lineTo(n, s), t.stroke(), t.closePath()
            }, this), o(this.xLabels, function (e, n) {
                var i = this.calculateX(n) + b(this.lineWidth), o = this.calculateX(n - (this.offsetGridLines ? .5 : 0)) + b(this.lineWidth), r = this.xLabelRotation > 0, a = this.showVerticalLines;
                0 !== n || a || (a = !0), a && t.beginPath(), n > 0 ? (t.lineWidth = this.gridLineWidth, t.strokeStyle = this.gridLineColor) : (t.lineWidth = this.lineWidth, t.strokeStyle = this.lineColor), a && (t.moveTo(o, this.endPoint), t.lineTo(o, this.startPoint - 3), t.stroke(), t.closePath()), t.lineWidth = this.lineWidth, t.strokeStyle = this.lineColor, t.beginPath(), t.moveTo(o, this.endPoint), t.lineTo(o, this.endPoint + 5), t.stroke(), t.closePath(), t.save(), t.translate(i, r ? this.endPoint + 12 : this.endPoint + 8), t.rotate(y(this.xLabelRotation) * -1), t.font = this.font, t.textAlign = r ? "right" : "center", t.textBaseline = r ? "middle" : "top", t.fillText(e, 0, 0), t.restore()
            }, this))
        }
    }), n.RadialScale = n.Element.extend({
        initialize: function () {
            this.size = m([this.height, this.width]), this.drawingArea = this.display ? this.size / 2 - (this.fontSize / 2 + this.backdropPaddingY) : this.size / 2
        }, calculateCenterOffset: function (t) {
            var e = this.drawingArea / (this.max - this.min);
            return (t - this.min) * e
        }, update: function () {
            this.lineArc ? this.drawingArea = this.display ? this.size / 2 - (this.fontSize / 2 + this.backdropPaddingY) : this.size / 2 : this.setScaleSize(), this.buildYLabels()
        }, buildYLabels: function () {
            this.yLabels = [];
            for (var t = v(this.stepValue), e = 0; e <= this.steps; e++)this.yLabels.push(x(this.templateString, {value: (this.min + e * this.stepValue).toFixed(t)}))
        }, getCircumference: function () {
            return 2 * Math.PI / this.valuesCount
        }, setScaleSize: function () {
            var t, e, n, i, o, r, a, s, l, c, u, h, d = m([this.height / 2 - this.pointLabelFontSize - 5, this.width / 2]), f = this.width, g = 0;
            for (this.ctx.font = O(this.pointLabelFontSize, this.pointLabelFontStyle, this.pointLabelFontFamily), e = 0; e < this.valuesCount; e++)t = this.getPointPosition(e, d), n = this.ctx.measureText(x(this.templateString, {value: this.labels[e]})).width + 5, 0 === e || e === this.valuesCount / 2 ? (i = n / 2, t.x + i > f && (f = t.x + i, o = e), t.x - i < g && (g = t.x - i, a = e)) : e < this.valuesCount / 2 ? t.x + n > f && (f = t.x + n, o = e) : e > this.valuesCount / 2 && t.x - n < g && (g = t.x - n, a = e);
            l = g, c = Math.ceil(f - this.width), r = this.getIndexAngle(o), s = this.getIndexAngle(a), u = c / Math.sin(r + Math.PI / 2), h = l / Math.sin(s + Math.PI / 2), u = p(u) ? u : 0, h = p(h) ? h : 0, this.drawingArea = d - (h + u) / 2, this.setCenterPoint(h, u)
        }, setCenterPoint: function (t, e) {
            var n = this.width - e - this.drawingArea, i = t + this.drawingArea;
            this.xCenter = (i + n) / 2, this.yCenter = this.height / 2
        }, getIndexAngle: function (t) {
            return t * (2 * Math.PI / this.valuesCount) - Math.PI / 2
        }, getPointPosition: function (t, e) {
            var n = this.getIndexAngle(t);
            return {x: Math.cos(n) * e + this.xCenter, y: Math.sin(n) * e + this.yCenter}
        }, draw: function () {
            if (this.display) {
                var t = this.ctx;
                if (o(this.yLabels, function (e, n) {
                        if (n > 0) {
                            var i, o = n * (this.drawingArea / this.steps), r = this.yCenter - o;
                            if (this.lineWidth > 0)if (t.strokeStyle = this.lineColor, t.lineWidth = this.lineWidth, this.lineArc)t.beginPath(), t.arc(this.xCenter, this.yCenter, o, 0, 2 * Math.PI), t.closePath(), t.stroke(); else {
                                t.beginPath();
                                for (var a = 0; a < this.valuesCount; a++)i = this.getPointPosition(a, this.calculateCenterOffset(this.min + n * this.stepValue)), 0 === a ? t.moveTo(i.x, i.y) : t.lineTo(i.x, i.y);
                                t.closePath(), t.stroke()
                            }
                            if (this.showLabels) {
                                if (t.font = O(this.fontSize, this.fontStyle, this.fontFamily), this.showLabelBackdrop) {
                                    var s = t.measureText(e).width;
                                    t.fillStyle = this.backdropColor, t.fillRect(this.xCenter - s / 2 - this.backdropPaddingX, r - this.fontSize / 2 - this.backdropPaddingY, s + 2 * this.backdropPaddingX, this.fontSize + 2 * this.backdropPaddingY)
                                }
                                t.textAlign = "center", t.textBaseline = "middle", t.fillStyle = this.fontColor, t.fillText(e, this.xCenter, r)
                            }
                        }
                    }, this), !this.lineArc) {
                    t.lineWidth = this.angleLineWidth, t.strokeStyle = this.angleLineColor;
                    for (var e = this.valuesCount - 1; e >= 0; e--) {
                        var n = null, i = null;
                        if (this.angleLineWidth > 0 && (n = this.calculateCenterOffset(this.max), i = this.getPointPosition(e, n), t.beginPath(), t.moveTo(this.xCenter, this.yCenter), t.lineTo(i.x, i.y), t.stroke(), t.closePath()), this.backgroundColors && this.backgroundColors.length == this.valuesCount) {
                            null == n && (n = this.calculateCenterOffset(this.max)), null == i && (i = this.getPointPosition(e, n));
                            var r = this.getPointPosition(0 === e ? this.valuesCount - 1 : e - 1, n), a = this.getPointPosition(e === this.valuesCount - 1 ? 0 : e + 1, n), s = {
                                x: (r.x + i.x) / 2,
                                y: (r.y + i.y) / 2
                            }, l = {x: (i.x + a.x) / 2, y: (i.y + a.y) / 2};
                            t.beginPath(), t.moveTo(this.xCenter, this.yCenter), t.lineTo(s.x, s.y), t.lineTo(i.x, i.y), t.lineTo(l.x, l.y), t.fillStyle = this.backgroundColors[e], t.fill(), t.closePath()
                        }
                        var c = this.getPointPosition(e, this.calculateCenterOffset(this.max) + 5);
                        t.font = O(this.pointLabelFontSize, this.pointLabelFontStyle, this.pointLabelFontFamily), t.fillStyle = this.pointLabelFontColor;
                        var u = this.labels.length, h = this.labels.length / 2, d = h / 2, f = e < d || e > u - d, p = e === d || e === u - d;
                        t.textAlign = 0 === e ? "center" : e === h ? "center" : e < h ? "left" : "right", t.textBaseline = p ? "middle" : f ? "bottom" : "top", t.fillText(this.labels[e], c.x, c.y)
                    }
                }
            }
        }
    }), n.animationService = {
        frameDuration: 17, animations: [], dropFrames: 0, addAnimation: function (t, e) {
            for (var n = 0; n < this.animations.length; ++n)if (this.animations[n].chartInstance === t)return void(this.animations[n].animationObject = e);
            this.animations.push({
                chartInstance: t,
                animationObject: e
            }), 1 == this.animations.length && i.requestAnimFrame.call(window, this.digestWrapper)
        }, cancelAnimation: function (t) {
            var e = i.findNextWhere(this.animations, function (e) {
                return e.chartInstance === t
            });
            e && this.animations.splice(e, 1)
        }, digestWrapper: function () {
            n.animationService.startDigest.call(n.animationService)
        }, startDigest: function () {
            var t = Date.now(), e = 0;
            this.dropFrames > 1 && (e = Math.floor(this.dropFrames), this.dropFrames -= e);
            for (var n = 0; n < this.animations.length; n++)null === this.animations[n].animationObject.currentStep && (this.animations[n].animationObject.currentStep = 0), this.animations[n].animationObject.currentStep += 1 + e, this.animations[n].animationObject.currentStep > this.animations[n].animationObject.numSteps && (this.animations[n].animationObject.currentStep = this.animations[n].animationObject.numSteps), this.animations[n].animationObject.render(this.animations[n].chartInstance, this.animations[n].animationObject), this.animations[n].animationObject.currentStep == this.animations[n].animationObject.numSteps && (this.animations[n].animationObject.onAnimationComplete.call(this.animations[n].chartInstance), this.animations.splice(n, 1), n--);
            var o = Date.now(), r = o - t - this.frameDuration, a = r / this.frameDuration;
            a > 1 && (this.dropFrames += a), this.animations.length > 0 && i.requestAnimFrame.call(window, this.digestWrapper)
        }
    }, i.addEvent(window, "resize", function () {
        var t;
        return function () {
            clearTimeout(t), t = setTimeout(function () {
                o(n.instances, function (t) {
                    t.options.responsive && t.resize(t.render, !0)
                })
            }, 50)
        }
    }()), f ? define(function () {
        return n
    }) : "object" == typeof module && module.exports && (module.exports = n), t.Chart = n, n.noConflict = function () {
        return t.Chart = e, n
    }
}.call(this), function () {
    "use strict";
    var t = this, e = t.Chart, n = e.helpers, i = {
        scaleBeginAtZero: !0,
        scaleShowGridLines: !0,
        scaleGridLineColor: "rgba(0,0,0,.05)",
        scaleGridLineWidth: 1,
        scaleShowHorizontalLines: !0,
        scaleShowVerticalLines: !0,
        barShowStroke: !0,
        barStrokeWidth: 2,
        barValueSpacing: 5,
        barDatasetSpacing: 1,
        legendTemplate: '<ul class="<%=name.toLowerCase()%>-legend"><% for (var i=0; i<datasets.length; i++){%><li><span style="background-color:<%=datasets[i].fillColor%>"><%if(datasets[i].label){%><%=datasets[i].label%><%}%></span></li><%}%></ul>'
    };
    e.Type.extend({
        name: "Bar", defaults: i, initialize: function (t) {
            var i = this.options;
            this.ScaleClass = e.Scale.extend({
                offsetGridLines: !0, calculateBarX: function (t, e, n) {
                    var o = this.calculateBaseWidth(), r = this.calculateX(n) - o / 2, a = this.calculateBarWidth(t);
                    return r + a * e + e * i.barDatasetSpacing + a / 2
                }, calculateBaseWidth: function () {
                    return this.calculateX(1) - this.calculateX(0) - 2 * i.barValueSpacing
                }, calculateBarWidth: function (t) {
                    return (this.calculateBaseWidth() - (t - 1) * i.barDatasetSpacing) / t
                }
            }), this.datasets = [], this.options.showTooltips && n.bindEvents(this, this.options.tooltipEvents, function (t) {
                var e = "mouseout" !== t.type ? this.getBarsAtEvent(t) : [];
                this.eachBars(function (t) {
                    t.restore(["fillColor", "strokeColor"])
                }), n.each(e, function (t) {
                    t.fillColor = t.highlightFill, t.strokeColor = t.highlightStroke
                }), this.showTooltip(e)
            }), this.BarClass = e.Rectangle.extend({
                strokeWidth: this.options.barStrokeWidth,
                showStroke: this.options.barShowStroke,
                ctx: this.chart.ctx
            }), n.each(t.datasets, function (e, i) {
                var o = {label: e.label || null, fillColor: e.fillColor, strokeColor: e.strokeColor, bars: []};
                this.datasets.push(o), n.each(e.data, function (n, i) {
                    o.bars.push(new this.BarClass({
                        value: n,
                        label: t.labels[i],
                        datasetLabel: e.label,
                        strokeColor: e.strokeColor,
                        fillColor: e.fillColor,
                        highlightFill: e.highlightFill || e.fillColor,
                        highlightStroke: e.highlightStroke || e.strokeColor
                    }))
                }, this)
            }, this), this.buildScale(t.labels), this.BarClass.prototype.base = this.scale.endPoint, this.eachBars(function (t, e, i) {
                n.extend(t, {
                    width: this.scale.calculateBarWidth(this.datasets.length),
                    x: this.scale.calculateBarX(this.datasets.length, i, e),
                    y: this.scale.endPoint
                }), t.save()
            }, this), this.render()
        }, update: function () {
            this.scale.update(), n.each(this.activeElements, function (t) {
                t.restore(["fillColor", "strokeColor"])
            }), this.eachBars(function (t) {
                t.save()
            }), this.render()
        }, eachBars: function (t) {
            n.each(this.datasets, function (e, i) {
                n.each(e.bars, t, this, i)
            }, this)
        }, getBarsAtEvent: function (t) {
            for (var e, i = [], o = n.getRelativePosition(t), r = function (t) {
                i.push(t.bars[e])
            }, a = 0; a < this.datasets.length; a++)for (e = 0; e < this.datasets[a].bars.length; e++)if (this.datasets[a].bars[e].inRange(o.x, o.y))return n.each(this.datasets, r), i;
            return i
        }, buildScale: function (t) {
            var e = this, i = function () {
                var t = [];
                return e.eachBars(function (e) {
                    t.push(e.value)
                }), t
            }, o = {
                templateString: this.options.scaleLabel,
                height: this.chart.height,
                width: this.chart.width,
                ctx: this.chart.ctx,
                textColor: this.options.scaleFontColor,
                fontSize: this.options.scaleFontSize,
                fontStyle: this.options.scaleFontStyle,
                fontFamily: this.options.scaleFontFamily,
                valuesCount: t.length,
                beginAtZero: this.options.scaleBeginAtZero,
                integersOnly: this.options.scaleIntegersOnly,
                calculateYRange: function (t) {
                    var e = n.calculateScaleRange(i(), t, this.fontSize, this.beginAtZero, this.integersOnly);
                    n.extend(this, e)
                },
                xLabels: t,
                font: n.fontString(this.options.scaleFontSize, this.options.scaleFontStyle, this.options.scaleFontFamily),
                lineWidth: this.options.scaleLineWidth,
                lineColor: this.options.scaleLineColor,
                showHorizontalLines: this.options.scaleShowHorizontalLines,
                showVerticalLines: this.options.scaleShowVerticalLines,
                gridLineWidth: this.options.scaleShowGridLines ? this.options.scaleGridLineWidth : 0,
                gridLineColor: this.options.scaleShowGridLines ? this.options.scaleGridLineColor : "rgba(0,0,0,0)",
                padding: this.options.showScale ? 0 : this.options.barShowStroke ? this.options.barStrokeWidth : 0,
                showLabels: this.options.scaleShowLabels,
                display: this.options.showScale
            };
            this.options.scaleOverride && n.extend(o, {
                calculateYRange: n.noop,
                steps: this.options.scaleSteps,
                stepValue: this.options.scaleStepWidth,
                min: this.options.scaleStartValue,
                max: this.options.scaleStartValue + this.options.scaleSteps * this.options.scaleStepWidth
            }), this.scale = new this.ScaleClass(o)
        }, addData: function (t, e) {
            n.each(t, function (t, n) {
                this.datasets[n].bars.push(new this.BarClass({
                    value: t,
                    label: e,
                    datasetLabel: this.datasets[n].label,
                    x: this.scale.calculateBarX(this.datasets.length, n, this.scale.valuesCount + 1),
                    y: this.scale.endPoint,
                    width: this.scale.calculateBarWidth(this.datasets.length),
                    base: this.scale.endPoint,
                    strokeColor: this.datasets[n].strokeColor,
                    fillColor: this.datasets[n].fillColor
                }))
            }, this), this.scale.addXLabel(e), this.update()
        }, removeData: function () {
            this.scale.removeXLabel(), n.each(this.datasets, function (t) {
                t.bars.shift()
            }, this), this.update()
        }, reflow: function () {
            n.extend(this.BarClass.prototype, {y: this.scale.endPoint, base: this.scale.endPoint});
            var t = n.extend({height: this.chart.height, width: this.chart.width});
            this.scale.update(t)
        }, draw: function (t) {
            var e = t || 1;
            this.clear();
            this.chart.ctx;
            this.scale.draw(e), n.each(this.datasets, function (t, i) {
                n.each(t.bars, function (t, n) {
                    t.hasValue() && (t.base = this.scale.endPoint, t.transition({
                        x: this.scale.calculateBarX(this.datasets.length, i, n),
                        y: this.scale.calculateY(t.value),
                        width: this.scale.calculateBarWidth(this.datasets.length)
                    }, e).draw())
                }, this)
            }, this)
        }
    })
}.call(this), function () {
    "use strict";
    var t = this, e = t.Chart, n = e.helpers, i = {
        segmentShowStroke: !0,
        segmentStrokeColor: "#fff",
        segmentStrokeWidth: 2,
        percentageInnerCutout: 50,
        animationSteps: 100,
        animationEasing: "easeOutBounce",
        animateRotate: !0,
        animateScale: !1,
        legendTemplate: '<ul class="<%=name.toLowerCase()%>-legend"><% for (var i=0; i<segments.length; i++){%><li><span style="background-color:<%=segments[i].fillColor%>"><%if(segments[i].label){%><%=segments[i].label%><%}%></span></li><%}%></ul>'
    };
    e.Type.extend({
        name: "Doughnut", defaults: i, initialize: function (t) {
            this.segments = [], this.outerRadius = (n.min([this.chart.width, this.chart.height]) - this.options.segmentStrokeWidth / 2) / 2, this.SegmentArc = e.Arc.extend({
                ctx: this.chart.ctx,
                x: this.chart.width / 2,
                y: this.chart.height / 2
            }), this.options.showTooltips && n.bindEvents(this, this.options.tooltipEvents, function (t) {
                var e = "mouseout" !== t.type ? this.getSegmentsAtEvent(t) : [];
                n.each(this.segments, function (t) {
                    t.restore(["fillColor"])
                }), n.each(e, function (t) {
                    t.fillColor = t.highlightColor
                }), this.showTooltip(e)
            }), this.calculateTotal(t), n.each(t, function (e, n) {
                e.color || (e.color = "hsl(" + 360 * n / t.length + ", 100%, 50%)"), this.addData(e, n, !0)
            }, this), this.render()
        }, getSegmentsAtEvent: function (t) {
            var e = [], i = n.getRelativePosition(t);
            return n.each(this.segments, function (t) {
                t.inRange(i.x, i.y) && e.push(t)
            }, this), e
        }, addData: function (t, n, i) {
            var o = void 0 !== n ? n : this.segments.length;
            void 0 === t.color && (t.color = e.defaults.global.segmentColorDefault[o % e.defaults.global.segmentColorDefault.length], t.highlight = e.defaults.global.segmentHighlightColorDefaults[o % e.defaults.global.segmentHighlightColorDefaults.length]), this.segments.splice(o, 0, new this.SegmentArc({
                value: t.value,
                outerRadius: this.options.animateScale ? 0 : this.outerRadius,
                innerRadius: this.options.animateScale ? 0 : this.outerRadius / 100 * this.options.percentageInnerCutout,
                fillColor: t.color,
                highlightColor: t.highlight || t.color,
                showStroke: this.options.segmentShowStroke,
                strokeWidth: this.options.segmentStrokeWidth,
                strokeColor: this.options.segmentStrokeColor,
                startAngle: 1.5 * Math.PI,
                circumference: this.options.animateRotate ? 0 : this.calculateCircumference(t.value),
                label: t.label
            })), i || (this.reflow(), this.update())
        }, calculateCircumference: function (t) {
            return this.total > 0 ? 2 * Math.PI * (t / this.total) : 0
        }, calculateTotal: function (t) {
            this.total = 0, n.each(t, function (t) {
                this.total += Math.abs(t.value)
            }, this)
        }, update: function () {
            this.calculateTotal(this.segments), n.each(this.activeElements, function (t) {
                t.restore(["fillColor"])
            }), n.each(this.segments, function (t) {
                t.save()
            }), this.render()
        }, removeData: function (t) {
            var e = n.isNumber(t) ? t : this.segments.length - 1;
            this.segments.splice(e, 1), this.reflow(), this.update()
        }, reflow: function () {
            n.extend(this.SegmentArc.prototype, {
                x: this.chart.width / 2,
                y: this.chart.height / 2
            }), this.outerRadius = (n.min([this.chart.width, this.chart.height]) - this.options.segmentStrokeWidth / 2) / 2, n.each(this.segments, function (t) {
                t.update({
                    outerRadius: this.outerRadius,
                    innerRadius: this.outerRadius / 100 * this.options.percentageInnerCutout
                })
            }, this)
        }, draw: function (t) {
            var e = t ? t : 1;
            this.clear(), n.each(this.segments, function (t, n) {
                t.transition({
                    circumference: this.calculateCircumference(t.value),
                    outerRadius: this.outerRadius,
                    innerRadius: this.outerRadius / 100 * this.options.percentageInnerCutout
                }, e), t.endAngle = t.startAngle + t.circumference, t.draw(), 0 === n && (t.startAngle = 1.5 * Math.PI), n < this.segments.length - 1 && (this.segments[n + 1].startAngle = t.endAngle)
            }, this)
        }
    }), e.types.Doughnut.extend({name: "Pie", defaults: n.merge(i, {percentageInnerCutout: 0})})
}.call(this), function () {
    "use strict";
    var t = this, e = t.Chart, n = e.helpers, i = {
        scaleShowGridLines: !0,
        scaleGridLineColor: "rgba(0,0,0,.05)",
        scaleGridLineWidth: 1,
        scaleShowHorizontalLines: !0,
        scaleShowVerticalLines: !0,
        bezierCurve: !0,
        bezierCurveTension: .4,
        pointDot: !0,
        pointDotRadius: 4,
        pointDotStrokeWidth: 1,
        pointHitDetectionRadius: 20,
        datasetStroke: !0,
        datasetStrokeWidth: 2,
        datasetFill: !0,
        legendTemplate: '<ul class="<%=name.toLowerCase()%>-legend"><% for (var i=0; i<datasets.length; i++){%><li><span style="background-color:<%=datasets[i].strokeColor%>"><%if(datasets[i].label){%><%=datasets[i].label%><%}%></span></li><%}%></ul>',
        offsetGridLines: !1
    };
    e.Type.extend({
        name: "Line", defaults: i, initialize: function (t) {
            this.PointClass = e.Point.extend({
                offsetGridLines: this.options.offsetGridLines,
                strokeWidth: this.options.pointDotStrokeWidth,
                radius: this.options.pointDotRadius,
                display: this.options.pointDot,
                hitDetectionRadius: this.options.pointHitDetectionRadius,
                ctx: this.chart.ctx,
                inRange: function (t) {
                    return Math.pow(t - this.x, 2) < Math.pow(this.radius + this.hitDetectionRadius, 2)
                }
            }), this.datasets = [], this.options.showTooltips && n.bindEvents(this, this.options.tooltipEvents, function (t) {
                var e = "mouseout" !== t.type ? this.getPointsAtEvent(t) : [];
                this.eachPoints(function (t) {
                    t.restore(["fillColor", "strokeColor"])
                }), n.each(e, function (t) {
                    t.fillColor = t.highlightFill, t.strokeColor = t.highlightStroke
                }), this.showTooltip(e)
            }), n.each(t.datasets, function (e) {
                var i = {
                    label: e.label || null,
                    fillColor: e.fillColor,
                    strokeColor: e.strokeColor,
                    pointColor: e.pointColor,
                    pointStrokeColor: e.pointStrokeColor,
                    points: []
                };
                this.datasets.push(i), n.each(e.data, function (n, o) {
                    i.points.push(new this.PointClass({
                        value: n,
                        label: t.labels[o],
                        datasetLabel: e.label,
                        strokeColor: e.pointStrokeColor,
                        fillColor: e.pointColor,
                        highlightFill: e.pointHighlightFill || e.pointColor,
                        highlightStroke: e.pointHighlightStroke || e.pointStrokeColor
                    }))
                }, this), this.buildScale(t.labels), this.eachPoints(function (t, e) {
                    n.extend(t, {x: this.scale.calculateX(e), y: this.scale.endPoint}), t.save()
                }, this)
            }, this), this.render()
        }, update: function () {
            this.scale.update(), n.each(this.activeElements, function (t) {
                t.restore(["fillColor", "strokeColor"])
            }), this.eachPoints(function (t) {
                t.save()
            }), this.render()
        }, eachPoints: function (t) {
            n.each(this.datasets, function (e) {
                n.each(e.points, t, this)
            }, this)
        }, getPointsAtEvent: function (t) {
            var e = [], i = n.getRelativePosition(t);
            return n.each(this.datasets, function (t) {
                n.each(t.points, function (t) {
                    t.inRange(i.x, i.y) && e.push(t)
                })
            }, this), e
        }, buildScale: function (t) {
            var i = this, o = function () {
                var t = [];
                return i.eachPoints(function (e) {
                    t.push(e.value)
                }), t
            }, r = {
                templateString: this.options.scaleLabel,
                height: this.chart.height,
                width: this.chart.width,
                ctx: this.chart.ctx,
                textColor: this.options.scaleFontColor,
                offsetGridLines: this.options.offsetGridLines,
                fontSize: this.options.scaleFontSize,
                fontStyle: this.options.scaleFontStyle,
                fontFamily: this.options.scaleFontFamily,
                valuesCount: t.length,
                beginAtZero: this.options.scaleBeginAtZero,
                integersOnly: this.options.scaleIntegersOnly,
                calculateYRange: function (t) {
                    var e = n.calculateScaleRange(o(), t, this.fontSize, this.beginAtZero, this.integersOnly);
                    n.extend(this, e)
                },
                xLabels: t,
                font: n.fontString(this.options.scaleFontSize, this.options.scaleFontStyle, this.options.scaleFontFamily),
                lineWidth: this.options.scaleLineWidth,
                lineColor: this.options.scaleLineColor,
                showHorizontalLines: this.options.scaleShowHorizontalLines,
                showVerticalLines: this.options.scaleShowVerticalLines,
                gridLineWidth: this.options.scaleShowGridLines ? this.options.scaleGridLineWidth : 0,
                gridLineColor: this.options.scaleShowGridLines ? this.options.scaleGridLineColor : "rgba(0,0,0,0)",
                padding: this.options.showScale ? 0 : this.options.pointDotRadius + this.options.pointDotStrokeWidth,
                showLabels: this.options.scaleShowLabels,
                display: this.options.showScale
            };
            this.options.scaleOverride && n.extend(r, {
                calculateYRange: n.noop,
                steps: this.options.scaleSteps,
                stepValue: this.options.scaleStepWidth,
                min: this.options.scaleStartValue,
                max: this.options.scaleStartValue + this.options.scaleSteps * this.options.scaleStepWidth
            }), this.scale = new e.Scale(r)
        }, addData: function (t, e) {
            n.each(t, function (t, n) {
                this.datasets[n].points.push(new this.PointClass({
                    value: t,
                    label: e,
                    datasetLabel: this.datasets[n].label,
                    x: this.scale.calculateX(this.scale.valuesCount + 1),
                    y: this.scale.endPoint,
                    strokeColor: this.datasets[n].pointStrokeColor,
                    fillColor: this.datasets[n].pointColor
                }))
            }, this), this.scale.addXLabel(e), this.update()
        }, removeData: function () {
            this.scale.removeXLabel(), n.each(this.datasets, function (t) {
                t.points.shift()
            }, this), this.update()
        }, reflow: function () {
            var t = n.extend({height: this.chart.height, width: this.chart.width});
            this.scale.update(t)
        }, draw: function (t) {
            var e = t || 1;
            this.clear();
            var i = this.chart.ctx, o = function (t) {
                return null !== t.value
            }, r = function (t, e, i) {
                return n.findNextWhere(e, o, i) || t
            }, a = function (t, e, i) {
                return n.findPreviousWhere(e, o, i) || t
            };
            this.scale && (this.scale.draw(e), n.each(this.datasets, function (t) {
                var s = n.where(t.points, o);
                n.each(t.points, function (t, n) {
                    t.hasValue() && t.transition({y: this.scale.calculateY(t.value), x: this.scale.calculateX(n)}, e)
                }, this), this.options.bezierCurve && n.each(s, function (t, e) {
                    var i = e > 0 && e < s.length - 1 ? this.options.bezierCurveTension : 0;
                    t.controlPoints = n.splineCurve(a(t, s, e), t, r(t, s, e), i), t.controlPoints.outer.y > this.scale.endPoint ? t.controlPoints.outer.y = this.scale.endPoint : t.controlPoints.outer.y < this.scale.startPoint && (t.controlPoints.outer.y = this.scale.startPoint), t.controlPoints.inner.y > this.scale.endPoint ? t.controlPoints.inner.y = this.scale.endPoint : t.controlPoints.inner.y < this.scale.startPoint && (t.controlPoints.inner.y = this.scale.startPoint)
                }, this), i.lineWidth = this.options.datasetStrokeWidth, i.strokeStyle = t.strokeColor, i.beginPath(), n.each(s, function (t, e) {
                    if (0 === e)i.moveTo(t.x, t.y); else if (this.options.bezierCurve) {
                        var n = a(t, s, e);
                        i.bezierCurveTo(n.controlPoints.outer.x, n.controlPoints.outer.y, t.controlPoints.inner.x, t.controlPoints.inner.y, t.x, t.y)
                    } else i.lineTo(t.x, t.y)
                }, this), this.options.datasetStroke && i.stroke(), this.options.datasetFill && s.length > 0 && (i.lineTo(s[s.length - 1].x, this.scale.endPoint), i.lineTo(s[0].x, this.scale.endPoint), i.fillStyle = t.fillColor, i.closePath(), i.fill()), n.each(s, function (t) {
                    t.draw()
                })
            }, this))
        }
    })
}.call(this), function () {
    "use strict";
    var t = this, e = t.Chart, n = e.helpers, i = {
        scaleShowLabelBackdrop: !0,
        scaleBackdropColor: "rgba(255,255,255,0.75)",
        scaleBeginAtZero: !0,
        scaleBackdropPaddingY: 2,
        scaleBackdropPaddingX: 2,
        scaleShowLine: !0,
        segmentShowStroke: !0,
        segmentStrokeColor: "#fff",
        segmentStrokeWidth: 2,
        animationSteps: 100,
        animationEasing: "easeOutBounce",
        animateRotate: !0,
        animateScale: !1,
        legendTemplate: '<ul class="<%=name.toLowerCase()%>-legend"><% for (var i=0; i<segments.length; i++){%><li><span style="background-color:<%=segments[i].fillColor%>"><%if(segments[i].label){%><%=segments[i].label%><%}%></span></li><%}%></ul>'
    };
    e.Type.extend({
        name: "PolarArea", defaults: i, initialize: function (t) {
            this.segments = [], this.SegmentArc = e.Arc.extend({
                showStroke: this.options.segmentShowStroke,
                strokeWidth: this.options.segmentStrokeWidth,
                strokeColor: this.options.segmentStrokeColor,
                ctx: this.chart.ctx,
                innerRadius: 0,
                x: this.chart.width / 2,
                y: this.chart.height / 2
            }), this.scale = new e.RadialScale({
                display: this.options.showScale,
                fontStyle: this.options.scaleFontStyle,
                fontSize: this.options.scaleFontSize,
                fontFamily: this.options.scaleFontFamily,
                fontColor: this.options.scaleFontColor,
                showLabels: this.options.scaleShowLabels,
                showLabelBackdrop: this.options.scaleShowLabelBackdrop,
                backdropColor: this.options.scaleBackdropColor,
                backdropPaddingY: this.options.scaleBackdropPaddingY,
                backdropPaddingX: this.options.scaleBackdropPaddingX,
                lineWidth: this.options.scaleShowLine ? this.options.scaleLineWidth : 0,
                lineColor: this.options.scaleLineColor,
                lineArc: !0,
                width: this.chart.width,
                height: this.chart.height,
                xCenter: this.chart.width / 2,
                yCenter: this.chart.height / 2,
                ctx: this.chart.ctx,
                templateString: this.options.scaleLabel,
                valuesCount: t.length
            }), this.updateScaleRange(t), this.scale.update(), n.each(t, function (t, e) {
                this.addData(t, e, !0)
            }, this), this.options.showTooltips && n.bindEvents(this, this.options.tooltipEvents, function (t) {
                var e = "mouseout" !== t.type ? this.getSegmentsAtEvent(t) : [];
                n.each(this.segments, function (t) {
                    t.restore(["fillColor"])
                }), n.each(e, function (t) {
                    t.fillColor = t.highlightColor
                }), this.showTooltip(e)
            }), this.render()
        }, getSegmentsAtEvent: function (t) {
            var e = [], i = n.getRelativePosition(t);
            return n.each(this.segments, function (t) {
                t.inRange(i.x, i.y) && e.push(t)
            }, this), e
        }, addData: function (t, e, n) {
            var i = e || this.segments.length;
            this.segments.splice(i, 0, new this.SegmentArc({
                fillColor: t.color,
                highlightColor: t.highlight || t.color,
                label: t.label,
                value: t.value,
                outerRadius: this.options.animateScale ? 0 : this.scale.calculateCenterOffset(t.value),
                circumference: this.options.animateRotate ? 0 : this.scale.getCircumference(),
                startAngle: 1.5 * Math.PI
            })), n || (this.reflow(), this.update())
        }, removeData: function (t) {
            var e = n.isNumber(t) ? t : this.segments.length - 1;
            this.segments.splice(e, 1), this.reflow(), this.update()
        }, calculateTotal: function (t) {
            this.total = 0, n.each(t, function (t) {
                this.total += t.value
            }, this), this.scale.valuesCount = this.segments.length
        }, updateScaleRange: function (t) {
            var e = [];
            n.each(t, function (t) {
                e.push(t.value)
            });
            var i = this.options.scaleOverride ? {
                steps: this.options.scaleSteps,
                stepValue: this.options.scaleStepWidth,
                min: this.options.scaleStartValue,
                max: this.options.scaleStartValue + this.options.scaleSteps * this.options.scaleStepWidth
            } : n.calculateScaleRange(e, n.min([this.chart.width, this.chart.height]) / 2, this.options.scaleFontSize, this.options.scaleBeginAtZero, this.options.scaleIntegersOnly);
            n.extend(this.scale, i, {
                size: n.min([this.chart.width, this.chart.height]),
                xCenter: this.chart.width / 2,
                yCenter: this.chart.height / 2
            })
        }, update: function () {
            this.calculateTotal(this.segments), n.each(this.segments, function (t) {
                t.save()
            }), this.reflow(), this.render()
        }, reflow: function () {
            n.extend(this.SegmentArc.prototype, {
                x: this.chart.width / 2,
                y: this.chart.height / 2
            }), this.updateScaleRange(this.segments), this.scale.update(), n.extend(this.scale, {
                xCenter: this.chart.width / 2,
                yCenter: this.chart.height / 2
            }), n.each(this.segments, function (t) {
                t.update({outerRadius: this.scale.calculateCenterOffset(t.value)})
            }, this)
        }, draw: function (t) {
            var e = t || 1;
            this.clear(), n.each(this.segments, function (t, n) {
                t.transition({
                    circumference: this.scale.getCircumference(),
                    outerRadius: this.scale.calculateCenterOffset(t.value)
                }, e), t.endAngle = t.startAngle + t.circumference, 0 === n && (t.startAngle = 1.5 * Math.PI), n < this.segments.length - 1 && (this.segments[n + 1].startAngle = t.endAngle), t.draw()
            }, this), this.scale.draw()
        }
    })
}.call(this), function () {
    "use strict";
    var t = this, e = t.Chart, n = e.helpers;
    e.Type.extend({
        name: "Radar",
        defaults: {
            scaleShowLine: !0,
            angleShowLineOut: !0,
            scaleShowLabels: !1,
            scaleBeginAtZero: !0,
            angleLineColor: "rgba(0,0,0,.1)",
            angleLineWidth: 1,
            pointLabelFontFamily: "'Arial'",
            pointLabelFontStyle: "normal",
            pointLabelFontSize: 10,
            pointLabelFontColor: "#666",
            pointDot: !0,
            pointDotRadius: 3,
            pointDotStrokeWidth: 1,
            pointHitDetectionRadius: 20,
            datasetStroke: !0,
            datasetStrokeWidth: 2,
            datasetFill: !0,
            legendTemplate: '<ul class="<%=name.toLowerCase()%>-legend"><% for (var i=0; i<datasets.length; i++){%><li><span style="background-color:<%=datasets[i].strokeColor%>"><%if(datasets[i].label){%><%=datasets[i].label%><%}%></span></li><%}%></ul>'
        },
        initialize: function (t) {
            this.PointClass = e.Point.extend({
                strokeWidth: this.options.pointDotStrokeWidth,
                radius: this.options.pointDotRadius,
                display: this.options.pointDot,
                hitDetectionRadius: this.options.pointHitDetectionRadius,
                ctx: this.chart.ctx
            }), this.datasets = [], this.buildScale(t), this.options.showTooltips && n.bindEvents(this, this.options.tooltipEvents, function (t) {
                var e = "mouseout" !== t.type ? this.getPointsAtEvent(t) : [];
                this.eachPoints(function (t) {
                    t.restore(["fillColor", "strokeColor"])
                }), n.each(e, function (t) {
                    t.fillColor = t.highlightFill, t.strokeColor = t.highlightStroke
                }), this.showTooltip(e)
            }), n.each(t.datasets, function (e) {
                var i = {
                    label: e.label || null,
                    fillColor: e.fillColor,
                    strokeColor: e.strokeColor,
                    pointColor: e.pointColor,
                    pointStrokeColor: e.pointStrokeColor,
                    points: []
                };
                this.datasets.push(i), n.each(e.data, function (n, o) {
                    var r;
                    this.scale.animation || (r = this.scale.getPointPosition(o, this.scale.calculateCenterOffset(n))), i.points.push(new this.PointClass({
                        value: n,
                        label: t.labels[o],
                        datasetLabel: e.label,
                        x: this.options.animation ? this.scale.xCenter : r.x,
                        y: this.options.animation ? this.scale.yCenter : r.y,
                        strokeColor: e.pointStrokeColor,
                        fillColor: e.pointColor,
                        highlightFill: e.pointHighlightFill || e.pointColor,
                        highlightStroke: e.pointHighlightStroke || e.pointStrokeColor
                    }))
                }, this)
            }, this), this.render()
        },
        eachPoints: function (t) {
            n.each(this.datasets, function (e) {
                n.each(e.points, t, this)
            }, this)
        },
        getPointsAtEvent: function (t) {
            var e = n.getRelativePosition(t), i = n.getAngleFromPoint({
                x: this.scale.xCenter,
                y: this.scale.yCenter
            }, e), o = 2 * Math.PI / this.scale.valuesCount, r = Math.round((i.angle - 1.5 * Math.PI) / o), a = [];
            return (r >= this.scale.valuesCount || r < 0) && (r = 0), i.distance <= this.scale.drawingArea && n.each(this.datasets, function (t) {
                a.push(t.points[r])
            }), a
        },
        buildScale: function (t) {
            this.scale = new e.RadialScale({
                display: this.options.showScale,
                fontStyle: this.options.scaleFontStyle,
                fontSize: this.options.scaleFontSize,
                fontFamily: this.options.scaleFontFamily,
                fontColor: this.options.scaleFontColor,
                showLabels: this.options.scaleShowLabels,
                showLabelBackdrop: this.options.scaleShowLabelBackdrop,
                backdropColor: this.options.scaleBackdropColor,
                backgroundColors: this.options.scaleBackgroundColors,
                backdropPaddingY: this.options.scaleBackdropPaddingY,
                backdropPaddingX: this.options.scaleBackdropPaddingX,
                lineWidth: this.options.scaleShowLine ? this.options.scaleLineWidth : 0,
                lineColor: this.options.scaleLineColor,
                angleLineColor: this.options.angleLineColor,
                angleLineWidth: this.options.angleShowLineOut ? this.options.angleLineWidth : 0,
                pointLabelFontColor: this.options.pointLabelFontColor,
                pointLabelFontSize: this.options.pointLabelFontSize,
                pointLabelFontFamily: this.options.pointLabelFontFamily,
                pointLabelFontStyle: this.options.pointLabelFontStyle,
                height: this.chart.height,
                width: this.chart.width,
                xCenter: this.chart.width / 2,
                yCenter: this.chart.height / 2,
                ctx: this.chart.ctx,
                templateString: this.options.scaleLabel,
                labels: t.labels,
                valuesCount: t.datasets[0].data.length
            }), this.scale.setScaleSize(), this.updateScaleRange(t.datasets), this.scale.buildYLabels()
        },
        updateScaleRange: function (t) {
            var e = function () {
                var e = [];
                return n.each(t, function (t) {
                    t.data ? e = e.concat(t.data) : n.each(t.points, function (t) {
                        e.push(t.value)
                    })
                }), e
            }(), i = this.options.scaleOverride ? {
                steps: this.options.scaleSteps,
                stepValue: this.options.scaleStepWidth,
                min: this.options.scaleStartValue,
                max: this.options.scaleStartValue + this.options.scaleSteps * this.options.scaleStepWidth
            } : n.calculateScaleRange(e, n.min([this.chart.width, this.chart.height]) / 2, this.options.scaleFontSize, this.options.scaleBeginAtZero, this.options.scaleIntegersOnly);
            n.extend(this.scale, i)
        },
        addData: function (t, e) {
            this.scale.valuesCount++, n.each(t, function (t, n) {
                var i = this.scale.getPointPosition(this.scale.valuesCount, this.scale.calculateCenterOffset(t));
                this.datasets[n].points.push(new this.PointClass({
                    value: t,
                    label: e,
                    datasetLabel: this.datasets[n].label,
                    x: i.x,
                    y: i.y,
                    strokeColor: this.datasets[n].pointStrokeColor,
                    fillColor: this.datasets[n].pointColor
                }))
            }, this), this.scale.labels.push(e), this.reflow(), this.update()
        },
        removeData: function () {
            this.scale.valuesCount--, this.scale.labels.shift(), n.each(this.datasets, function (t) {
                t.points.shift()
            }, this), this.reflow(), this.update()
        },
        update: function () {
            this.eachPoints(function (t) {
                t.save()
            }), this.reflow(), this.render()
        },
        reflow: function () {
            n.extend(this.scale, {
                width: this.chart.width,
                height: this.chart.height,
                size: n.min([this.chart.width, this.chart.height]),
                xCenter: this.chart.width / 2,
                yCenter: this.chart.height / 2
            }), this.updateScaleRange(this.datasets), this.scale.setScaleSize(), this.scale.buildYLabels()
        },
        draw: function (t) {
            var e = t || 1, i = this.chart.ctx;
            this.clear(), this.scale.draw(), n.each(this.datasets, function (t) {
                n.each(t.points, function (t, n) {
                    t.hasValue() && t.transition(this.scale.getPointPosition(n, this.scale.calculateCenterOffset(t.value)), e)
                }, this), i.lineWidth = this.options.datasetStrokeWidth, i.strokeStyle = t.strokeColor, i.beginPath(), n.each(t.points, function (t, e) {
                    0 === e ? i.moveTo(t.x, t.y) : i.lineTo(t.x, t.y)
                }, this), i.closePath(), i.stroke(), i.fillStyle = t.fillColor, this.options.datasetFill && i.fill(), n.each(t.points, function (t) {
                    t.hasValue() && t.draw()
                })
            }, this)
        }
    })
}.call(this);
var WOW;
!function (t) {
    WOW = function () {
        return {
            init: function () {
                function e() {
                    var e = window.innerHeight, n = window.scrollY;
                    t(".wow").each(function () {
                        if ("visible" != t(this).css("visibility") && (e + n - 100 > i(this) && n < i(this) || e + n - 100 > i(this) + t(this).height() && n < i(this) + t(this).height() || e + n == t(document).height() && i(this) + 100 > t(document).height())) {
                            var r = t(this).index(".wow"), a = t(this).attr("data-wow-delay");
                            if (a) {
                                a = t(this).attr("data-wow-delay").slice(0, -1), console.log(a);
                                var s = this, l = 1e3 * parseFloat(a);
                                console.log(l), t(s).addClass("animated"), t(s).css({visibility: "visible"}), t(s).css({"animation-delay": a}), t(s).css({"animation-name": o[r]});
                                var c = 1e3 * t(this).css("animation-duration").slice(0, -1);
                                t(this).attr("data-wow-delay") && (c += 1e3 * t(this).attr("data-wow-delay").slice(0, -1));
                                var s = this;
                                setTimeout(function () {
                                    t(s).removeClass("animated")
                                }, c)
                            } else {
                                t(this).addClass("animated"), t(this).css({visibility: "visible"}), t(this).css({"animation-name": o[r]});
                                var c = 1e3 * t(this).css("animation-duration").slice(0, -1), s = this;
                                setTimeout(function () {
                                    t(s).removeClass("animated")
                                }, c)
                            }
                        }
                    })
                }

                function n() {
                    var n = window.innerHeight, o = window.scrollY;
                    t(".wow.animated").each(function () {
                        if (n + o - 100 > i(this) && o > i(this) + 100 || n + o - 100 < i(this) && o < i(this) + 100 || i(this) + t(this).height > t(document).height() - 100)t(this).removeClass("animated"), t(this).css({"animation-name": "none"}), t(this).css({visibility: "hidden"}); else {
                            var e = 1e3 * t(this).css("animation-duration").slice(0, -1);
                            t(this).attr("data-wow-delay") && (e += 1e3 * t(this).attr("data-wow-delay").slice(0, -1));
                            var r = this;
                            setTimeout(function () {
                                t(r).removeClass("animated")
                            }, e)
                        }
                    }), e(), r--
                }

                function i(t) {
                    var e = t.getBoundingClientRect(), n = document.body, i = document.documentElement, o = window.pageYOffset || i.scrollTop || n.scrollTop, r = i.clientTop || n.clientTop || 0, a = e.top + o - r;
                    return Math.round(a)
                }

                var o = [], r = 1;
                t(".wow").each(function () {
                    t(this).css({visibility: "hidden"}), o[t(this).index(".wow")] = t(this).css("animation-name"), t(this).css({"animation-name": "none"})
                }), t(window).scroll(function () {
                    r ? n() : e()
                }), function () {
                    t(".wow").each(function () {
                        var e = t(this).index(".wow"), n = t(this).attr("data-wow-delay");
                        n ? (n = t(this).attr("data-wow-delay").slice(0, -1), parseFloat(n), t(this).addClass("animated"), t(this).css({visibility: "visible"}), t(this).css({"animation-delay": n + "s"}), t(this).css({"animation-name": o[e]})) : (t(this).addClass("animated"), t(this).css({visibility: "visible"}), t(this).css({"animation-name": o[e]}))
                    })
                }()
            }
        }
    }
}(jQuery), $(window).scroll(function () {
    $(".navbar").offset() && ($(".navbar").offset().top > 50 ? $(".scrolling-navbar").addClass("top-nav-collapse") : $(".scrolling-navbar").removeClass("top-nav-collapse"))
}), $(function () {
    $("a.page-scroll").bind("click", function (t) {
        var e = $(this);
        $("html, body").stop().animate({scrollTop: $(e.attr("href")).offset().top}, 1500, "easeInOutExpo"), t.preventDefault()
    })
}), function (t, e) {
    "use strict";
    "function" == typeof define && define.amd ? define([], function () {
        return e.apply(t)
    }) : "object" == typeof exports ? module.exports = e.call(t) : t.Waves = e.call(t)
}("object" == typeof global ? global : this, function () {
    "use strict";
    function t(t) {
        return null !== t && t === t.window
    }

    function e(e) {
        return t(e) ? e : 9 === e.nodeType && e.defaultView
    }

    function n(t) {
        var e = typeof t;
        return "function" === e || "object" === e && !!t
    }

    function i(t) {
        return n(t) && t.nodeType > 0
    }

    function o(t) {
        var e = d.call(t);
        return "[object String]" === e ? h(t) : n(t) && /^\[object (Array|HTMLCollection|NodeList|Object)\]$/.test(e) && t.hasOwnProperty("length") ? t : i(t) ? [t] : []
    }

    function r(t) {
        var n, i, o = {top: 0, left: 0}, r = t && t.ownerDocument;
        return n = r.documentElement, void 0 !== t.getBoundingClientRect && (o = t.getBoundingClientRect()), i = e(r), {
            top: o.top + i.pageYOffset - n.clientTop,
            left: o.left + i.pageXOffset - n.clientLeft
        }
    }

    function a(t) {
        var e = "";
        for (var n in t)t.hasOwnProperty(n) && (e += n + ":" + t[n] + ";");
        return e
    }

    function s(t, e, n) {
        if (n) {
            n.classList.remove("waves-rippling");
            var i = n.getAttribute("data-x"), o = n.getAttribute("data-y"), r = n.getAttribute("data-scale"), s = n.getAttribute("data-translate"), l = Date.now() - Number(n.getAttribute("data-hold")), c = 350 - l;
            c < 0 && (c = 0), "mousemove" === t.type && (c = 150);
            var u = "mousemove" === t.type ? 2500 : p.duration;
            setTimeout(function () {
                var t = {
                    top: o + "px",
                    left: i + "px",
                    opacity: "0",
                    "-webkit-transition-duration": u + "ms",
                    "-moz-transition-duration": u + "ms",
                    "-o-transition-duration": u + "ms",
                    "transition-duration": u + "ms",
                    "-webkit-transform": r + " " + s,
                    "-moz-transform": r + " " + s,
                    "-ms-transform": r + " " + s,
                    "-o-transform": r + " " + s,
                    transform: r + " " + s
                };
                n.setAttribute("style", a(t)), setTimeout(function () {
                    try {
                        e.removeChild(n)
                    } catch (t) {
                        return !1
                    }
                }, u)
            }, c)
        }
    }

    function l(t) {
        if (m.allowEvent(t) === !1)return null;
        for (var e = null, n = t.target || t.srcElement; null !== n.parentElement;) {
            if (n.classList.contains("waves-effect") && !(n instanceof SVGElement)) {
                e = n;
                break
            }
            n = n.parentElement
        }
        return e
    }

    function c(t) {
        var e = l(t);
        if (null !== e) {
            if (e.disabled || e.getAttribute("disabled") || e.classList.contains("disabled"))return;
            if (m.registerEvent(t), "touchstart" === t.type && p.delay) {
                var n = !1, i = setTimeout(function () {
                    i = null, p.show(t, e)
                }, p.delay), o = function (o) {
                    i && (clearTimeout(i), i = null, p.show(t, e)), n || (n = !0, p.hide(o, e))
                }, r = function (t) {
                    i && (clearTimeout(i), i = null), o(t)
                };
                e.addEventListener("touchmove", r, !1), e.addEventListener("touchend", o, !1), e.addEventListener("touchcancel", o, !1)
            } else p.show(t, e), f && (e.addEventListener("touchend", p.hide, !1), e.addEventListener("touchcancel", p.hide, !1)), e.addEventListener("mouseup", p.hide, !1), e.addEventListener("mouseleave", p.hide, !1)
        }
    }

    var u = u || {}, h = document.querySelectorAll.bind(document), d = Object.prototype.toString, f = "ontouchstart" in window, p = {
        duration: 750,
        delay: 200,
        show: function (t, e, n) {
            if (2 === t.button)return !1;
            e = e || this;
            var i = document.createElement("div");
            i.className = "waves-ripple waves-rippling", e.appendChild(i);
            var o = r(e), s = 0, l = 0;
            "touches" in t && t.touches.length ? (s = t.touches[0].pageY - o.top, l = t.touches[0].pageX - o.left) : (s = t.pageY - o.top, l = t.pageX - o.left), l = l >= 0 ? l : 0, s = s >= 0 ? s : 0;
            var c = "scale(" + e.clientWidth / 100 * 3 + ")", u = "translate(0,0)";
            n && (u = "translate(" + n.x + "px, " + n.y + "px)"), i.setAttribute("data-hold", Date.now()), i.setAttribute("data-x", l), i.setAttribute("data-y", s), i.setAttribute("data-scale", c), i.setAttribute("data-translate", u);
            var h = {top: s + "px", left: l + "px"};
            i.classList.add("waves-notransition"), i.setAttribute("style", a(h)), i.classList.remove("waves-notransition"), h["-webkit-transform"] = c + " " + u, h["-moz-transform"] = c + " " + u, h["-ms-transform"] = c + " " + u, h["-o-transform"] = c + " " + u, h.transform = c + " " + u, h.opacity = "1";
            var d = "mousemove" === t.type ? 2500 : p.duration;
            h["-webkit-transition-duration"] = d + "ms", h["-moz-transition-duration"] = d + "ms", h["-o-transition-duration"] = d + "ms", h["transition-duration"] = d + "ms", i.setAttribute("style", a(h))
        },
        hide: function (t, e) {
            e = e || this;
            for (var n = e.getElementsByClassName("waves-rippling"), i = 0, o = n.length; i < o; i++)s(t, e, n[i])
        }
    }, g = {
        input: function (t) {
            var e = t.parentNode;
            if ("i" !== e.tagName.toLowerCase() || !e.classList.contains("waves-effect")) {
                var n = document.createElement("i");
                n.className = t.className + " waves-input-wrapper", t.className = "waves-button-input", e.replaceChild(n, t), n.appendChild(t);
                var i = window.getComputedStyle(t, null), o = i.color, r = i.backgroundColor;
                n.setAttribute("style", "color:" + o + ";background:" + r), t.setAttribute("style", "background-color:rgba(0,0,0,0);")
            }
        }, img: function (t) {
            var e = t.parentNode;
            if ("i" !== e.tagName.toLowerCase() || !e.classList.contains("waves-effect")) {
                var n = document.createElement("i");
                e.replaceChild(n, t), n.appendChild(t)
            }
        }
    }, m = {
        touches: 0, allowEvent: function (t) {
            var e = !0;
            return /^(mousedown|mousemove)$/.test(t.type) && m.touches && (e = !1), e
        }, registerEvent: function (t) {
            var e = t.type;
            "touchstart" === e ? m.touches += 1 : /^(touchend|touchcancel)$/.test(e) && setTimeout(function () {
                m.touches && (m.touches -= 1)
            }, 500)
        }
    };
    return u.init = function (t) {
        var e = document.body;
        t = t || {}, "duration" in t && (p.duration = t.duration), "delay" in t && (p.delay = t.delay), f && (e.addEventListener("touchstart", c, !1), e.addEventListener("touchcancel", m.registerEvent, !1), e.addEventListener("touchend", m.registerEvent, !1)), e.addEventListener("mousedown", c, !1)
    }, u.attach = function (t, e) {
        t = o(t), "[object Array]" === d.call(e) && (e = e.join(" ")), e = e ? " " + e : "";
        for (var n, i, r = 0, a = t.length; r < a; r++)n = t[r], i = n.tagName.toLowerCase(), ["input", "img"].indexOf(i) !== -1 && (g[i](n), n = n.parentElement), n.className.indexOf("waves-effect") === -1 && (n.className += " waves-effect" + e)
    }, u.ripple = function (t, e) {
        t = o(t);
        var n = t.length;
        if (e = e || {}, e.wait = e.wait || 0, e.position = e.position || null, n)for (var i, a, s, l = {}, c = 0, u = {
            type: "mousedown",
            button: 1
        }; c < n; c++)if (i = t[c], a = e.position || {
                    x: i.clientWidth / 2,
                    y: i.clientHeight / 2
                }, s = r(i), l.x = s.left + a.x, l.y = s.top + a.y, u.pageX = l.x, u.pageY = l.y, p.show(u, i), e.wait >= 0 && null !== e.wait) {
            var h = {type: "mouseup", button: 1};
            setTimeout(function (t, e) {
                return function () {
                    p.hide(t, e)
                }
            }(h, i), e.wait)
        }
    }, u.calm = function (t) {
        t = o(t);
        for (var e = {type: "mouseup", button: 1}, n = 0, i = t.length; n < i; n++)p.hide(e, t[n])
    }, u.displayEffect = function (t) {
        console.error("Waves.displayEffect() has been deprecated and will be removed in future version. Please use Waves.init() to initialize Waves effect"), u.init(t)
    }, u
}), Waves.attach(".btn, .btn-floating", ["waves-light"]), Waves.attach(".waves-light", ["waves-light"]), Waves.attach(".navbar-nav a:not(.navbar-brand), .nav-icons li a, .navbar form, .nav-tabs .nav-item", ["waves-light"]), Waves.attach(".pager li a", ["waves-light"]), Waves.attach(".pagination .page-item .page-link", ["waves-effect"]), Waves.init(), $(document).ready(function () {
    $("#preloader-markup").load("mdb-addons/preloader.html", function () {
        $("#preloader-markup").fadeOut("slow")
    })
}), function (t) {
    t(document).ready(function () {
        t(document).on("click.card", ".card", function (e) {
            t(this).find(".card-reveal").length && (t(e.target).is(t(".card-reveal .card-title")) || t(e.target).is(t(".card-reveal .card-title i")) ? t(this).find(".card-reveal").velocity({translateY: 0}, {
                duration: 225,
                queue: !1,
                easing: "easeInOutQuad",
                complete: function () {
                    t(this).css({display: "none"})
                }
            }) : (t(e.target).is(t(".card .activator")) || t(e.target).is(t(".card .activator i"))) && t(this).find(".card-reveal").css({display: "block"}).velocity("stop", !1).velocity({translateY: "-100%"}, {
                duration: 300,
                queue: !1,
                easing: "easeInOutQuad"
            }))
        })
    })
}(jQuery), $(document).ready(function (t) {
    t(".card-share > a").on("click", function (e) {
        e.preventDefault(), t(this).parent().find("div").toggleClass("social-reveal-active"), t(this).toggleClass("share-expanded")
    })
}), function (t) {
    function e() {
        var e = +t(this).attr("length"), n = +t(this).val().length, i = n <= e;
        t(this).parent().find('span[class="character-counter"]').html(n + "/" + e), o(i, t(this))
    }

    function n(e) {
        var n = t("<span/>").addClass("character-counter").css("float", "right").css("font-size", "12px").css("height", 1);
        e.parent().append(n)
    }

    function i() {
        t(this).parent().find('span[class="character-counter"]').html("")
    }

    function o(t, e) {
        var n = e.hasClass("invalid");
        t && n ? e.removeClass("invalid") : t || n || (e.removeClass("valid"), e.addClass("invalid"))
    }

    t.fn.characterCounter = function () {
        return this.each(function () {
            void 0 !== t(this).attr("length") && (t(this).on("input", e), t(this).on("focus", e), t(this).on("blur", i), n(t(this)))
        })
    }, t(document).ready(function () {
        t("input, textarea").characterCounter()
    })
}(jQuery), function (t) {
    t(["jquery"], function (t) {
        return function () {
            function e(t, e, n) {
                return p({type: x.error, iconClass: g().iconClasses.error, message: t, optionsOverride: n, title: e})
            }

            function n(e, n) {
                return e || (e = g()), v = t("#" + e.containerId), v.length ? v : (n && (v = h(e)), v)
            }

            function i(t, e, n) {
                return p({type: x.info, iconClass: g().iconClasses.info, message: t, optionsOverride: n, title: e})
            }

            function o(t) {
                y = t
            }

            function r(t, e, n) {
                return p({
                    type: x.success,
                    iconClass: g().iconClasses.success,
                    message: t,
                    optionsOverride: n,
                    title: e
                })
            }

            function a(t, e, n) {
                return p({
                    type: x.warning,
                    iconClass: g().iconClasses.warning,
                    message: t,
                    optionsOverride: n,
                    title: e
                })
            }

            function s(t, e) {
                var i = g();
                v || n(i), u(t, i, e) || c(i)
            }

            function l(e) {
                var i = g();
                if (v || n(i), e && 0 === t(":focus", e).length)return void m(e);
                v.children().length && v.remove()
            }

            function c(e) {
                for (var n = v.children(), i = n.length - 1; i >= 0; i--)u(t(n[i]), e)
            }

            function u(e, n, i) {
                var o = !(!i || !i.force) && i.force;
                return !(!e || !o && 0 !== t(":focus", e).length) && (e[n.hideMethod]({
                        duration: n.hideDuration,
                        easing: n.hideEasing,
                        complete: function () {
                            m(e)
                        }
                    }), !0)
            }

            function h(e) {
                return v = t("<div/>").attr("id", e.containerId).addClass(e.positionClass).attr("aria-live", "polite").attr("role", "alert"), v.appendTo(t(e.target)), v
            }

            function d() {
                return {
                    tapToDismiss: !0,
                    toastClass: "toast",
                    containerId: "toast-container",
                    debug: !1,
                    showMethod: "fadeIn",
                    showDuration: 300,
                    showEasing: "swing",
                    onShown: void 0,
                    hideMethod: "fadeOut",
                    hideDuration: 1e3,
                    hideEasing: "swing",
                    onHidden: void 0,
                    closeMethod: !1,
                    closeDuration: !1,
                    closeEasing: !1,
                    extendedTimeOut: 1e3,
                    iconClasses: {
                        error: "toast-error",
                        info: "toast-info",
                        success: "toast-success",
                        warning: "toast-warning"
                    },
                    iconClass: "toast-info",
                    positionClass: "toast-top-right",
                    timeOut: 5e3,
                    titleClass: "toast-title",
                    messageClass: "toast-message",
                    escapeHtml: !1,
                    target: "body",
                    closeHtml: '<button type="button">&times;</button>',
                    newestOnTop: !0,
                    preventDuplicates: !1,
                    progressBar: !1
                }
            }

            function f(t) {
                y && y(t)
            }

            function p(e) {
                function i(t) {
                    return null == t && (t = ""), new String(t).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
                }

                function o() {
                    e.iconClass && T.addClass(y.toastClass).addClass(x)
                }

                function r() {
                    y.newestOnTop ? v.prepend(T) : v.append(T)
                }

                function a() {
                    e.title && (S.append(y.escapeHtml ? i(e.title) : e.title).addClass(y.titleClass), T.append(S))
                }

                function s() {
                    e.message && (E.append(y.escapeHtml ? i(e.message) : e.message).addClass(y.messageClass), T.append(E))
                }

                function l() {
                    y.closeButton && (A.addClass("toast-close-button").attr("role", "button"), T.prepend(A))
                }

                function c() {
                    y.progressBar && (k.addClass("toast-progress"), T.prepend(k))
                }

                function u(e) {
                    var n = e && y.closeMethod !== !1 ? y.closeMethod : y.hideMethod, i = e && y.closeDuration !== !1 ? y.closeDuration : y.hideDuration, o = e && y.closeEasing !== !1 ? y.closeEasing : y.hideEasing;
                    if (!t(":focus", T).length || e)return clearTimeout(_.intervalId), T[n]({
                        duration: i,
                        easing: o,
                        complete: function () {
                            m(T), y.onHidden && "hidden" !== P.state && y.onHidden(), P.state = "hidden", P.endTime = new Date, f(P)
                        }
                    })
                }

                function h() {
                    (y.timeOut > 0 || y.extendedTimeOut > 0) && (C = setTimeout(u, y.extendedTimeOut), _.maxHideTime = parseFloat(y.extendedTimeOut), _.hideEta = (new Date).getTime() + _.maxHideTime)
                }

                function d() {
                    clearTimeout(C), _.hideEta = 0, T.stop(!0, !0)[y.showMethod]({
                        duration: y.showDuration,
                        easing: y.showEasing
                    })
                }

                function p() {
                    var t = (_.hideEta - (new Date).getTime()) / _.maxHideTime * 100;
                    k.width(t + "%")
                }

                var y = g(), x = e.iconClass || y.iconClass;
                if (void 0 !== e.optionsOverride && (y = t.extend(y, e.optionsOverride), x = e.optionsOverride.iconClass || x), !function (t, e) {
                        if (t.preventDuplicates) {
                            if (e.message === b)return !0;
                            b = e.message
                        }
                        return !1
                    }(y, e)) {
                    w++, v = n(y, !0);
                    var C = null, T = t("<div/>"), S = t("<div/>"), E = t("<div/>"), k = t("<div/>"), A = t(y.closeHtml), _ = {
                        intervalId: null,
                        hideEta: null,
                        maxHideTime: null
                    }, P = {toastId: w, state: "visible", startTime: new Date, options: y, map: e};
                    return function () {
                        o(), a(), s(), l(), c(), r()
                    }(), function () {
                        T.hide(), T[y.showMethod]({
                            duration: y.showDuration,
                            easing: y.showEasing,
                            complete: y.onShown
                        }), y.timeOut > 0 && (C = setTimeout(u, y.timeOut), _.maxHideTime = parseFloat(y.timeOut), _.hideEta = (new Date).getTime() + _.maxHideTime, y.progressBar && (_.intervalId = setInterval(p, 10)))
                    }(), function () {
                        T.hover(d, h), !y.onclick && y.tapToDismiss && T.click(u), y.closeButton && A && A.click(function (t) {
                            t.stopPropagation ? t.stopPropagation() : void 0 !== t.cancelBubble && t.cancelBubble !== !0 && (t.cancelBubble = !0), u(!0)
                        }), y.onclick && T.click(function (t) {
                            y.onclick(t), u()
                        })
                    }(), f(P), y.debug && console && console.log(P), T
                }
            }

            function g() {
                return t.extend({}, d(), C.options)
            }

            function m(t) {
                v || (v = n()), t.is(":visible") || (t.remove(), t = null, 0 === v.children().length && (v.remove(), b = void 0))
            }

            var v, y, b, w = 0, x = {
                error: "error",
                info: "info",
                success: "success",
                warning: "warning"
            }, C = {
                clear: s,
                remove: l,
                error: e,
                getContainer: n,
                info: i,
                options: {},
                subscribe: o,
                success: r,
                version: "2.1.2",
                warning: a
            };
            return C
        }()
    })
}("function" == typeof define && define.amd ? define : function (t, e) {
    "undefined" != typeof module && module.exports ? module.exports = e(require("jquery")) : window.toastr = e(window.jQuery)
}), $(".smooth-scroll").on("click", "a", function (t) {
    t.preventDefault();
    var e = $(this).attr("href"), n = $(this).attr("data-offset") ? $(this).attr("data-offset") : 0;
    $("body,html").animate({scrollTop: $(e).offset().top - n}, 700)
}), function (t) {
    t.fn.scrollTo = function (e) {
        return t(this).scrollTop(t(this).scrollTop() - t(this).offset().top + t(e).offset().top), this
    }, t.fn.dropdown = function (e) {
        var n = {
            inDuration: 300,
            outDuration: 225,
            constrain_width: !0,
            hover: !1,
            gutter: 0,
            belowOrigin: !1,
            alignment: "left"
        };
        this.each(function () {
            function i() {
                void 0 !== a.data("induration") && (s.inDuration = a.data("inDuration")), void 0 !== a.data("outduration") && (s.outDuration = a.data("outDuration")), void 0 !== a.data("constrainwidth") && (s.constrain_width = a.data("constrainwidth")), void 0 !== a.data("hover") && (s.hover = a.data("hover")), void 0 !== a.data("gutter") && (s.gutter = a.data("gutter")), void 0 !== a.data("beloworigin") && (s.belowOrigin = a.data("beloworigin")), void 0 !== a.data("alignment") && (s.alignment = a.data("alignment"))
            }

            function o(e) {
                "focus" === e && (l = !0), i(), c.addClass("active"), a.addClass("active"), s.constrain_width === !0 ? c.css("width", a.outerWidth()) : c.css("white-space", "nowrap");
                var n = window.innerHeight, o = a.innerHeight(), r = a.offset().left, u = a.offset().top - t(window).scrollTop(), h = s.alignment, d = 0, f = 0, p = 0;
                s.belowOrigin === !0 && (p = o);
                var g = 0, m = a.parent();
                if (!m.is("body") && m[0].scrollHeight > m[0].clientHeight && (g = m[0].scrollTop), r + c.innerWidth() > t(window).width() ? h = "right" : r - c.innerWidth() + a.innerWidth() < 0 && (h = "left"), u + c.innerHeight() > n)if (u + o - c.innerHeight() < 0) {
                    var v = n - u - p;
                    c.css("max-height", v)
                } else p || (p += o), p -= c.innerHeight();
                if ("left" === h)d = s.gutter, f = a.position().left + d; else if ("right" === h) {
                    var y = a.position().left + a.outerWidth() - c.outerWidth();
                    d = -s.gutter, f = y + d
                }
                c.css({
                    position: "absolute",
                    top: a.position().top + p + g,
                    left: f
                }), c.stop(!0, !0).css("opacity", 0).slideDown({
                    queue: !1,
                    duration: s.inDuration,
                    easing: "easeOutCubic",
                    complete: function () {
                        t(this).css("height", "")
                    }
                }).animate({opacity: 1}, {queue: !1, duration: s.inDuration, easing: "easeOutSine"})
            }

            function r() {
                l = !1, c.fadeOut(s.outDuration), c.removeClass("active"), a.removeClass("active"), setTimeout(function () {
                    c.css("max-height", "")
                }, s.outDuration)
            }

            var a = t(this), s = t.extend({}, n, e), l = !1, c = t("#" + a.attr("data-activates"));
            if (i(), a.after(c), s.hover) {
                var u = !1;
                a.unbind("click." + a.attr("id")), a.on("mouseenter", function (t) {
                    u === !1 && (o(), u = !0)
                }), a.on("mouseleave", function (e) {
                    t(e.toElement || e.relatedTarget).closest(".dropdown-content").is(c) || (c.stop(!0, !0), r(), u = !1)
                }), c.on("mouseleave", function (e) {
                    t(e.toElement || e.relatedTarget).closest(".dropdown-button").is(a) || (c.stop(!0, !0), r(), u = !1)
                })
            } else a.unbind("click." + a.attr("id")), a.bind("click." + a.attr("id"), function (e) {
                l || (a[0] != e.currentTarget || a.hasClass("active") || 0 !== t(e.target).closest(".dropdown-content").length ? a.hasClass("active") && (r(), t(document).unbind("click." + c.attr("id") + " touchstart." + c.attr("id"))) : (e.preventDefault(), o("click")), c.hasClass("active") && t(document).bind("click." + c.attr("id") + " touchstart." + c.attr("id"), function (e) {
                    c.is(e.target) || a.is(e.target) || a.find(e.target).length || (r(), t(document).unbind("click." + c.attr("id") + " touchstart." + c.attr("id")))
                }))
            });
            a.on("open", function (t, e) {
                o(e)
            }), a.on("close", r)
        })
    }, t(document).ready(function () {
        t(".dropdown-button").dropdown()
    })
}(jQuery);
var dropdownSelectors = $(".dropdown, .dropup");
dropdownSelectors.on({
    "show.bs.dropdown": function () {
        var t = dropdownEffectData(this);
        dropdownEffectStart(t, t.effectIn)
    }, "shown.bs.dropdown": function () {
        var t = dropdownEffectData(this);
        t.effectIn && t.effectOut && dropdownEffectEnd(t, function () {
        })
    }, "hide.bs.dropdown": function (t) {
        var e = dropdownEffectData(this);
        e.effectOut && (t.preventDefault(), dropdownEffectStart(e, e.effectOut), dropdownEffectEnd(e, function () {
            e.dropdown.removeClass("open"), e.dropdown.removeClass("show")
        }))
    }
}), $(".rotate-btn").on("click", function () {
    var t = $(this).attr("data-card");
    $("#" + t).toggleClass("flipped")
}), function (t) {
    function e(e) {
        if ($this = e, $this.hasClass("active") === !1) {
            $this.addClass("active"), $this.find("ul .btn-floating").velocity({
                scaleY: ".4",
                scaleX: ".4",
                translateY: "40px"
            }, {duration: 0});
            var n = 0;
            $this.find("ul .btn-floating").reverse().each(function () {
                t(this).velocity({opacity: "1", scaleX: "1", scaleY: "1", translateY: "0"}, {
                    duration: 80,
                    delay: n
                }), n += 40
            })
        } else {
            $this.removeClass("active");
            var n = 0;
            $this.find("ul .btn-floating").velocity("stop", !0), $this.find("ul .btn-floating").velocity({
                opacity: "0",
                scaleX: ".4",
                scaleY: ".4",
                translateY: "40px"
            }, {duration: 80})
        }
    }

    t(document).ready(function () {
        t.fn.reverse = [].reverse, t(document).on("mouseenter.fixedActionBtn", ".fixed-action-btn:not(.click-to-toggle)", function (e) {
            n(t(this))
        }), t(document).on("mouseleave.fixedActionBtn", ".fixed-action-btn:not(.click-to-toggle)", function (e) {
            i(t(this))
        }), t(document).on("click.fixedActionBtn", ".fixed-action-btn.click-to-toggle > a", function (e) {
            var o = t(this), r = o.parent();
            r.hasClass("active") ? i(r) : n(r)
        })
    }), t.fn.extend({
        openFAB: function () {
            n(t(this))
        }, closeFAB: function () {
            i(t(this))
        }
    });
    var n = function (e) {
        if ($this = e, $this.hasClass("active") === !1) {
            var n, i, o = $this.hasClass("horizontal");
            o === !0 ? i = 40 : n = 40, $this.addClass("active"), $this.find("ul .btn-floating").velocity({
                scaleY: ".4",
                scaleX: ".4",
                translateY: n + "px",
                translateX: i + "px"
            }, {duration: 0});
            var r = 0;
            $this.find("ul .btn-floating").reverse().each(function () {
                t(this).velocity({
                    opacity: "1",
                    scaleX: "1",
                    scaleY: "1",
                    translateY: "0",
                    translateX: "0"
                }, {duration: 80, delay: r}), r += 40
            })
        }
    }, i = function (t) {
        $this = t;
        var e, n, i = $this.hasClass("horizontal");
        i === !0 ? n = 40 : e = 40, $this.removeClass("active");
        $this.find("ul .btn-floating").velocity("stop", !0), $this.find("ul .btn-floating").velocity({
            opacity: "0",
            scaleX: ".4",
            scaleY: ".4",
            translateY: e + "px",
            translateX: n + "px"
        }, {duration: 80})
    };
    t(".fixed-action-btn").on({
        click: function (n) {
            return n.preventDefault(), e(t(".fixed-action-btn")), !1
        }
    })
}(jQuery), function (t, e, n, i) {
    "use strict";
    function o(t, e, n) {
        return setTimeout(c(t, n), e)
    }

    function r(t, e, n) {
        return !!Array.isArray(t) && (a(t, n[e], n), !0)
    }

    function a(t, e, n) {
        var o;
        if (t)if (t.forEach)t.forEach(e, n); else if (t.length !== i)for (o = 0; o < t.length;)e.call(n, t[o], o, t), o++; else for (o in t)t.hasOwnProperty(o) && e.call(n, t[o], o, t)
    }

    function s(e, n, i) {
        var o = "DEPRECATED METHOD: " + n + "\n" + i + " AT \n";
        return function () {
            var n = new Error("get-stack-trace"), i = n && n.stack ? n.stack.replace(/^[^\(]+?[\n$]/gm, "").replace(/^\s+at\s+/gm, "").replace(/^Object.<anonymous>\s*\(/gm, "{anonymous}()@") : "Unknown Stack Trace", r = t.console && (t.console.warn || t.console.log);
            return r && r.call(t.console, o, i), e.apply(this, arguments)
        }
    }

    function l(t, e, n) {
        var i, o = e.prototype;
        i = t.prototype = Object.create(o), i.constructor = t, i._super = o, n && ut(i, n)
    }

    function c(t, e) {
        return function () {
            return t.apply(e, arguments)
        }
    }

    function u(t, e) {
        return typeof t == ft ? t.apply(e ? e[0] || i : i, e) : t
    }

    function h(t, e) {
        return t === i ? e : t
    }

    function d(t, e, n) {
        a(m(e), function (e) {
            t.addEventListener(e, n, !1)
        })
    }

    function f(t, e, n) {
        a(m(e), function (e) {
            t.removeEventListener(e, n, !1)
        })
    }

    function p(t, e) {
        for (; t;) {
            if (t == e)return !0;
            t = t.parentNode
        }
        return !1
    }

    function g(t, e) {
        return t.indexOf(e) > -1
    }

    function m(t) {
        return t.trim().split(/\s+/g)
    }

    function v(t, e, n) {
        if (t.indexOf && !n)return t.indexOf(e);
        for (var i = 0; i < t.length;) {
            if (n && t[i][n] == e || !n && t[i] === e)return i;
            i++
        }
        return -1
    }

    function y(t) {
        return Array.prototype.slice.call(t, 0)
    }

    function b(t, e, n) {
        for (var i = [], o = [], r = 0; r < t.length;) {
            var a = e ? t[r][e] : t[r];
            v(o, a) < 0 && i.push(t[r]), o[r] = a, r++
        }
        return n && (i = e ? i.sort(function (t, n) {
            return t[e] > n[e]
        }) : i.sort()), i
    }

    function w(t, e) {
        for (var n, o, r = e[0].toUpperCase() + e.slice(1), a = 0; a < ht.length;) {
            if (n = ht[a], (o = n ? n + r : e) in t)return o;
            a++
        }
        return i
    }

    function x() {
        return bt++
    }

    function C(e) {
        var n = e.ownerDocument || e;
        return n.defaultView || n.parentWindow || t
    }

    function T(t, e) {
        var n = this;
        this.manager = t, this.callback = e, this.element = t.element, this.target = t.options.inputTarget, this.domHandler = function (e) {
            u(t.options.enable, [t]) && n.handler(e)
        }, this.init()
    }

    function S(t) {
        var e = t.options.inputClass;
        return new (e ? e : Ct ? W : Tt ? z : xt ? B : R)(t, E)
    }

    function E(t, e, n) {
        var i = n.pointers.length, o = n.changedPointers.length, r = e & Et && i - o == 0, a = e & (At | _t) && i - o == 0;
        n.isFirst = !!r, n.isFinal = !!a, r && (t.session = {}), n.eventType = e, k(t, n), t.emit("hammer.input", n), t.recognize(n), t.session.prevInput = n
    }

    function k(t, e) {
        var n = t.session, i = e.pointers, o = i.length;
        n.firstInput || (n.firstInput = P(e)), o > 1 && !n.firstMultiple ? n.firstMultiple = P(e) : 1 === o && (n.firstMultiple = !1);
        var r = n.firstInput, a = n.firstMultiple, s = a ? a.center : r.center, l = e.center = I(i);
        e.timeStamp = mt(), e.deltaTime = e.timeStamp - r.timeStamp, e.angle = F(s, l), e.distance = L(s, l), A(n, e), e.offsetDirection = O(e.deltaX, e.deltaY);
        var c = D(e.deltaTime, e.deltaX, e.deltaY);
        e.overallVelocityX = c.x, e.overallVelocityY = c.y, e.overallVelocity = gt(c.x) > gt(c.y) ? c.x : c.y, e.scale = a ? M(a.pointers, i) : 1, e.rotation = a ? N(a.pointers, i) : 0, e.maxPointers = n.prevInput ? e.pointers.length > n.prevInput.maxPointers ? e.pointers.length : n.prevInput.maxPointers : e.pointers.length, _(n, e);
        var u = t.element;
        p(e.srcEvent.target, u) && (u = e.srcEvent.target), e.target = u
    }

    function A(t, e) {
        var n = e.center, i = t.offsetDelta || {}, o = t.prevDelta || {}, r = t.prevInput || {};
        e.eventType !== Et && r.eventType !== At || (o = t.prevDelta = {
            x: r.deltaX || 0,
            y: r.deltaY || 0
        }, i = t.offsetDelta = {x: n.x, y: n.y}), e.deltaX = o.x + (n.x - i.x), e.deltaY = o.y + (n.y - i.y)
    }

    function _(t, e) {
        var n, o, r, a, s = t.lastInterval || e, l = e.timeStamp - s.timeStamp;
        if (e.eventType != _t && (l > St || s.velocity === i)) {
            var c = e.deltaX - s.deltaX, u = e.deltaY - s.deltaY, h = D(l, c, u);
            o = h.x, r = h.y, n = gt(h.x) > gt(h.y) ? h.x : h.y, a = O(c, u), t.lastInterval = e
        } else n = s.velocity, o = s.velocityX, r = s.velocityY, a = s.direction;
        e.velocity = n, e.velocityX = o, e.velocityY = r, e.direction = a
    }

    function P(t) {
        for (var e = [], n = 0; n < t.pointers.length;)e[n] = {
            clientX: pt(t.pointers[n].clientX),
            clientY: pt(t.pointers[n].clientY)
        }, n++;
        return {timeStamp: mt(), pointers: e, center: I(e), deltaX: t.deltaX, deltaY: t.deltaY}
    }

    function I(t) {
        var e = t.length;
        if (1 === e)return {x: pt(t[0].clientX), y: pt(t[0].clientY)};
        for (var n = 0, i = 0, o = 0; o < e;)n += t[o].clientX, i += t[o].clientY, o++;
        return {x: pt(n / e), y: pt(i / e)}
    }

    function D(t, e, n) {
        return {x: e / t || 0, y: n / t || 0}
    }

    function O(t, e) {
        return t === e ? Pt : gt(t) >= gt(e) ? t < 0 ? It : Dt : e < 0 ? Ot : Lt
    }

    function L(t, e, n) {
        n || (n = Rt);
        var i = e[n[0]] - t[n[0]], o = e[n[1]] - t[n[1]];
        return Math.sqrt(i * i + o * o)
    }

    function F(t, e, n) {
        n || (n = Rt);
        var i = e[n[0]] - t[n[0]], o = e[n[1]] - t[n[1]];
        return 180 * Math.atan2(o, i) / Math.PI
    }

    function N(t, e) {
        return F(e[1], e[0], Wt) + F(t[1], t[0], Wt)
    }

    function M(t, e) {
        return L(e[0], e[1], Wt) / L(t[0], t[1], Wt)
    }

    function R() {
        this.evEl = jt, this.evWin = zt, this.pressed = !1, T.apply(this, arguments)
    }

    function W() {
        this.evEl = qt, this.evWin = Yt, T.apply(this, arguments), this.store = this.manager.session.pointerEvents = []
    }

    function H() {
        this.evTarget = $t, this.evWin = Ut, this.started = !1, T.apply(this, arguments)
    }

    function j(t, e) {
        var n = y(t.touches), i = y(t.changedTouches);
        return e & (At | _t) && (n = b(n.concat(i), "identifier", !0)), [n, i]
    }

    function z() {
        this.evTarget = Gt, this.targetIds = {}, T.apply(this, arguments)
    }

    function V(t, e) {
        var n = y(t.touches), i = this.targetIds;
        if (e & (Et | kt) && 1 === n.length)return i[n[0].identifier] = !0, [n, n];
        var o, r, a = y(t.changedTouches), s = [], l = this.target;
        if (r = n.filter(function (t) {
                return p(t.target, l)
            }), e === Et)for (o = 0; o < r.length;)i[r[o].identifier] = !0, o++;
        for (o = 0; o < a.length;)i[a[o].identifier] && s.push(a[o]), e & (At | _t) && delete i[a[o].identifier], o++;
        return s.length ? [b(r.concat(s), "identifier", !0), s] : void 0
    }

    function B() {
        T.apply(this, arguments);
        var t = c(this.handler, this);
        this.touch = new z(this.manager, t), this.mouse = new R(this.manager, t), this.primaryTouch = null, this.lastTouches = []
    }

    function q(t, e) {
        t & Et ? (this.primaryTouch = e.changedPointers[0].identifier, Y.call(this, e)) : t & (At | _t) && Y.call(this, e)
    }

    function Y(t) {
        var e = t.changedPointers[0];
        if (e.identifier === this.primaryTouch) {
            var n = {x: e.clientX, y: e.clientY};
            this.lastTouches.push(n);
            var i = this.lastTouches, o = function () {
                var t = i.indexOf(n);
                t > -1 && i.splice(t, 1)
            };
            setTimeout(o, Zt)
        }
    }

    function X(t) {
        for (var e = t.srcEvent.clientX, n = t.srcEvent.clientY, i = 0; i < this.lastTouches.length; i++) {
            var o = this.lastTouches[i], r = Math.abs(e - o.x), a = Math.abs(n - o.y);
            if (r <= Kt && a <= Kt)return !0
        }
        return !1
    }

    function $(t, e) {
        this.manager = t, this.set(e)
    }

    function U(t) {
        if (g(t, ie))return ie;
        var e = g(t, oe), n = g(t, re);
        return e && n ? ie : e || n ? e ? oe : re : g(t, ne) ? ne : ee
    }

    function Q(t) {
        this.options = ut({}, this.defaults, t || {}), this.id = x(), this.manager = null, this.options.enable = h(this.options.enable, !0), this.state = se, this.simultaneous = {}, this.requireFail = []
    }

    function G(t) {
        return t & de ? "cancel" : t & ue ? "end" : t & ce ? "move" : t & le ? "start" : ""
    }

    function Z(t) {
        return t == Lt ? "down" : t == Ot ? "up" : t == It ? "left" : t == Dt ? "right" : ""
    }

    function K(t, e) {
        var n = e.manager;
        return n ? n.get(t) : t
    }

    function J() {
        Q.apply(this, arguments)
    }

    function tt() {
        J.apply(this, arguments), this.pX = null, this.pY = null
    }

    function et() {
        J.apply(this, arguments)
    }

    function nt() {
        Q.apply(this, arguments), this._timer = null, this._input = null
    }

    function it() {
        J.apply(this, arguments)
    }

    function ot() {
        J.apply(this, arguments)
    }

    function rt() {
        Q.apply(this, arguments), this.pTime = !1, this.pCenter = !1, this._timer = null, this._input = null, this.count = 0
    }

    function at(t, e) {
        return e = e || {}, e.recognizers = h(e.recognizers, at.defaults.preset), new st(t, e)
    }

    function st(t, e) {
        this.options = ut({}, at.defaults, e || {}), this.options.inputTarget = this.options.inputTarget || t, this.handlers = {}, this.session = {}, this.recognizers = [], this.oldCssProps = {}, this.element = t, this.input = S(this), this.touchAction = new $(this, this.options.touchAction), lt(this, !0), a(this.options.recognizers, function (t) {
            var e = this.add(new t[0](t[1]));
            t[2] && e.recognizeWith(t[2]), t[3] && e.requireFailure(t[3])
        }, this)
    }

    function lt(t, e) {
        var n = t.element;
        if (n.style) {
            var i;
            a(t.options.cssProps, function (o, r) {
                i = w(n.style, r), e ? (t.oldCssProps[i] = n.style[i], n.style[i] = o) : n.style[i] = t.oldCssProps[i] || ""
            }), e || (t.oldCssProps = {})
        }
    }

    function ct(t, n) {
        var i = e.createEvent("Event");
        i.initEvent(t, !0, !0), i.gesture = n, n.target.dispatchEvent(i)
    }

    var ut, ht = ["", "webkit", "Moz", "MS", "ms", "o"], dt = e.createElement("div"), ft = "function", pt = Math.round, gt = Math.abs, mt = Date.now;
    ut = "function" != typeof Object.assign ? function (t) {
        if (t === i || null === t)throw new TypeError("Cannot convert undefined or null to object");
        for (var e = Object(t), n = 1; n < arguments.length; n++) {
            var o = arguments[n];
            if (o !== i && null !== o)for (var r in o)o.hasOwnProperty(r) && (e[r] = o[r])
        }
        return e
    } : Object.assign;
    var vt = s(function (t, e, n) {
        for (var o = Object.keys(e), r = 0; r < o.length;)(!n || n && t[o[r]] === i) && (t[o[r]] = e[o[r]]), r++;
        return t
    }, "extend", "Use `assign`."), yt = s(function (t, e) {
        return vt(t, e, !0)
    }, "merge", "Use `assign`."), bt = 1, wt = /mobile|tablet|ip(ad|hone|od)|android/i, xt = "ontouchstart" in t, Ct = w(t, "PointerEvent") !== i, Tt = xt && wt.test(navigator.userAgent), St = 25, Et = 1, kt = 2, At = 4, _t = 8, Pt = 1, It = 2, Dt = 4, Ot = 8, Lt = 16, Ft = It | Dt, Nt = Ot | Lt, Mt = Ft | Nt, Rt = ["x", "y"], Wt = ["clientX", "clientY"];
    T.prototype = {
        handler: function () {
        }, init: function () {
            this.evEl && d(this.element, this.evEl, this.domHandler), this.evTarget && d(this.target, this.evTarget, this.domHandler), this.evWin && d(C(this.element), this.evWin, this.domHandler)
        }, destroy: function () {
            this.evEl && f(this.element, this.evEl, this.domHandler), this.evTarget && f(this.target, this.evTarget, this.domHandler), this.evWin && f(C(this.element), this.evWin, this.domHandler)
        }
    };
    var Ht = {mousedown: Et, mousemove: kt, mouseup: At}, jt = "mousedown", zt = "mousemove mouseup";
    l(R, T, {
        handler: function (t) {
            var e = Ht[t.type];
            e & Et && 0 === t.button && (this.pressed = !0), e & kt && 1 !== t.which && (e = At), this.pressed && (e & At && (this.pressed = !1), this.callback(this.manager, e, {
                pointers: [t],
                changedPointers: [t],
                pointerType: "mouse",
                srcEvent: t
            }))
        }
    });
    var Vt = {pointerdown: Et, pointermove: kt, pointerup: At, pointercancel: _t, pointerout: _t}, Bt = {
        2: "touch",
        3: "pen",
        4: "mouse",
        5: "kinect"
    }, qt = "pointerdown", Yt = "pointermove pointerup pointercancel";
    t.MSPointerEvent && !t.PointerEvent && (qt = "MSPointerDown", Yt = "MSPointerMove MSPointerUp MSPointerCancel"), l(W, T, {
        handler: function (t) {
            var e = this.store, n = !1, i = t.type.toLowerCase().replace("ms", ""), o = Vt[i], r = Bt[t.pointerType] || t.pointerType, a = "touch" == r, s = v(e, t.pointerId, "pointerId");
            o & Et && (0 === t.button || a) ? s < 0 && (e.push(t), s = e.length - 1) : o & (At | _t) && (n = !0), s < 0 || (e[s] = t, this.callback(this.manager, o, {
                pointers: e,
                changedPointers: [t],
                pointerType: r,
                srcEvent: t
            }), n && e.splice(s, 1))
        }
    });
    var Xt = {
        touchstart: Et,
        touchmove: kt,
        touchend: At,
        touchcancel: _t
    }, $t = "touchstart", Ut = "touchstart touchmove touchend touchcancel";
    l(H, T, {
        handler: function (t) {
            var e = Xt[t.type];
            if (e === Et && (this.started = !0), this.started) {
                var n = j.call(this, t, e);
                e & (At | _t) && n[0].length - n[1].length == 0 && (this.started = !1), this.callback(this.manager, e, {
                    pointers: n[0],
                    changedPointers: n[1],
                    pointerType: "touch",
                    srcEvent: t
                })
            }
        }
    });
    var Qt = {
        touchstart: Et,
        touchmove: kt,
        touchend: At,
        touchcancel: _t
    }, Gt = "touchstart touchmove touchend touchcancel";
    l(z, T, {
        handler: function (t) {
            var e = Qt[t.type], n = V.call(this, t, e);
            n && this.callback(this.manager, e, {
                pointers: n[0],
                changedPointers: n[1],
                pointerType: "touch",
                srcEvent: t
            })
        }
    });
    var Zt = 2500, Kt = 25;
    l(B, T, {
        handler: function (t, e, n) {
            var i = "touch" == n.pointerType, o = "mouse" == n.pointerType;
            if (!(o && n.sourceCapabilities && n.sourceCapabilities.firesTouchEvents)) {
                if (i)q.call(this, e, n); else if (o && X.call(this, n))return;
                this.callback(t, e, n)
            }
        }, destroy: function () {
            this.touch.destroy(), this.mouse.destroy()
        }
    });
    var Jt = w(dt.style, "touchAction"), te = Jt !== i, ee = "auto", ne = "manipulation", ie = "none", oe = "pan-x", re = "pan-y", ae = function () {
        if (!te)return !1;
        var e = {}, n = t.CSS && t.CSS.supports;
        return ["auto", "manipulation", "pan-y", "pan-x", "pan-x pan-y", "none"].forEach(function (i) {
            e[i] = !n || t.CSS.supports("touch-action", i)
        }), e
    }();
    $.prototype = {
        set: function (t) {
            "compute" == t && (t = this.compute()), te && this.manager.element.style && ae[t] && (this.manager.element.style[Jt] = t), this.actions = t.toLowerCase().trim()
        }, update: function () {
            this.set(this.manager.options.touchAction)
        }, compute: function () {
            var t = [];
            return a(this.manager.recognizers, function (e) {
                u(e.options.enable, [e]) && (t = t.concat(e.getTouchAction()))
            }), U(t.join(" "))
        }, preventDefaults: function (t) {
            var e = t.srcEvent, n = t.offsetDirection;
            if (this.manager.session.prevented)return void e.preventDefault();
            var i = this.actions, o = g(i, ie) && !ae[ie], r = g(i, re) && !ae[re], a = g(i, oe) && !ae[oe];
            if (o) {
                var s = 1 === t.pointers.length, l = t.distance < 2, c = t.deltaTime < 250;
                if (s && l && c)return
            }
            return a && r ? void 0 : o || r && n & Ft || a && n & Nt ? this.preventSrc(e) : void 0
        }, preventSrc: function (t) {
            this.manager.session.prevented = !0, t.preventDefault()
        }
    };
    var se = 1, le = 2, ce = 4, ue = 8, he = ue, de = 16;
    Q.prototype = {
        defaults: {}, set: function (t) {
            return ut(this.options, t), this.manager && this.manager.touchAction.update(), this
        }, recognizeWith: function (t) {
            if (r(t, "recognizeWith", this))return this;
            var e = this.simultaneous;
            return t = K(t, this), e[t.id] || (e[t.id] = t, t.recognizeWith(this)), this
        }, dropRecognizeWith: function (t) {
            return r(t, "dropRecognizeWith", this) ? this : (t = K(t, this), delete this.simultaneous[t.id], this)
        }, requireFailure: function (t) {
            if (r(t, "requireFailure", this))return this;
            var e = this.requireFail;
            return t = K(t, this), v(e, t) === -1 && (e.push(t), t.requireFailure(this)), this
        }, dropRequireFailure: function (t) {
            if (r(t, "dropRequireFailure", this))return this;
            t = K(t, this);
            var e = v(this.requireFail, t);
            return e > -1 && this.requireFail.splice(e, 1), this
        }, hasRequireFailures: function () {
            return this.requireFail.length > 0
        }, canRecognizeWith: function (t) {
            return !!this.simultaneous[t.id]
        }, emit: function (t) {
            function e(e) {
                n.manager.emit(e, t)
            }

            var n = this, i = this.state;
            i < ue && e(n.options.event + G(i)), e(n.options.event), t.additionalEvent && e(t.additionalEvent), i >= ue && e(n.options.event + G(i))
        }, tryEmit: function (t) {
            if (this.canEmit())return this.emit(t);
            this.state = 32
        }, canEmit: function () {
            for (var t = 0; t < this.requireFail.length;) {
                if (!(this.requireFail[t].state & (32 | se)))return !1;
                t++
            }
            return !0
        }, recognize: function (t) {
            var e = ut({}, t);
            if (!u(this.options.enable, [this, e]))return this.reset(), void(this.state = 32);
            this.state & (he | de | 32) && (this.state = se), this.state = this.process(e), this.state & (le | ce | ue | de) && this.tryEmit(e)
        }, process: function (t) {
        }, getTouchAction: function () {
        }, reset: function () {
        }
    }, l(J, Q, {
        defaults: {pointers: 1}, attrTest: function (t) {
            var e = this.options.pointers;
            return 0 === e || t.pointers.length === e
        }, process: function (t) {
            var e = this.state, n = t.eventType, i = e & (le | ce), o = this.attrTest(t);
            return i && (n & _t || !o) ? e | de : i || o ? n & At ? e | ue : e & le ? e | ce : le : 32
        }
    }), l(tt, J, {
        defaults: {event: "pan", threshold: 10, pointers: 1, direction: Mt}, getTouchAction: function () {
            var t = this.options.direction, e = [];
            return t & Ft && e.push(re), t & Nt && e.push(oe), e
        }, directionTest: function (t) {
            var e = this.options, n = !0, i = t.distance, o = t.direction, r = t.deltaX, a = t.deltaY;
            return o & e.direction || (e.direction & Ft ? (o = 0 === r ? Pt : r < 0 ? It : Dt, n = r != this.pX, i = Math.abs(t.deltaX)) : (o = 0 === a ? Pt : a < 0 ? Ot : Lt, n = a != this.pY, i = Math.abs(t.deltaY))), t.direction = o, n && i > e.threshold && o & e.direction
        }, attrTest: function (t) {
            return J.prototype.attrTest.call(this, t) && (this.state & le || !(this.state & le) && this.directionTest(t))
        }, emit: function (t) {
            this.pX = t.deltaX, this.pY = t.deltaY;
            var e = Z(t.direction);
            e && (t.additionalEvent = this.options.event + e), this._super.emit.call(this, t)
        }
    }), l(et, J, {
        defaults: {event: "pinch", threshold: 0, pointers: 2}, getTouchAction: function () {
            return [ie]
        }, attrTest: function (t) {
            return this._super.attrTest.call(this, t) && (Math.abs(t.scale - 1) > this.options.threshold || this.state & le)
        }, emit: function (t) {
            if (1 !== t.scale) {
                var e = t.scale < 1 ? "in" : "out";
                t.additionalEvent = this.options.event + e
            }
            this._super.emit.call(this, t)
        }
    }), l(nt, Q, {
        defaults: {event: "press", pointers: 1, time: 251, threshold: 9}, getTouchAction: function () {
            return [ee]
        }, process: function (t) {
            var e = this.options, n = t.pointers.length === e.pointers, i = t.distance < e.threshold, r = t.deltaTime > e.time;
            if (this._input = t, !i || !n || t.eventType & (At | _t) && !r)this.reset(); else if (t.eventType & Et)this.reset(), this._timer = o(function () {
                this.state = he, this.tryEmit()
            }, e.time, this); else if (t.eventType & At)return he;
            return 32
        }, reset: function () {
            clearTimeout(this._timer)
        }, emit: function (t) {
            this.state === he && (t && t.eventType & At ? this.manager.emit(this.options.event + "up", t) : (this._input.timeStamp = mt(), this.manager.emit(this.options.event, this._input)))
        }
    }), l(it, J, {
        defaults: {event: "rotate", threshold: 0, pointers: 2}, getTouchAction: function () {
            return [ie]
        }, attrTest: function (t) {
            return this._super.attrTest.call(this, t) && (Math.abs(t.rotation) > this.options.threshold || this.state & le)
        }
    }), l(ot, J, {
        defaults: {event: "swipe", threshold: 10, velocity: .3, direction: Ft | Nt, pointers: 1},
        getTouchAction: function () {
            return tt.prototype.getTouchAction.call(this)
        },
        attrTest: function (t) {
            var e, n = this.options.direction;
            return n & (Ft | Nt) ? e = t.overallVelocity : n & Ft ? e = t.overallVelocityX : n & Nt && (e = t.overallVelocityY), this._super.attrTest.call(this, t) && n & t.offsetDirection && t.distance > this.options.threshold && t.maxPointers == this.options.pointers && gt(e) > this.options.velocity && t.eventType & At
        },
        emit: function (t) {
            var e = Z(t.offsetDirection);
            e && this.manager.emit(this.options.event + e, t), this.manager.emit(this.options.event, t)
        }
    }), l(rt, Q, {
        defaults: {
            event: "tap",
            pointers: 1,
            taps: 1,
            interval: 300,
            time: 250,
            threshold: 9,
            posThreshold: 10
        }, getTouchAction: function () {
            return [ne]
        }, process: function (t) {
            var e = this.options, n = t.pointers.length === e.pointers, i = t.distance < e.threshold, r = t.deltaTime < e.time;
            if (this.reset(), t.eventType & Et && 0 === this.count)return this.failTimeout();
            if (i && r && n) {
                if (t.eventType != At)return this.failTimeout();
                var a = !this.pTime || t.timeStamp - this.pTime < e.interval, s = !this.pCenter || L(this.pCenter, t.center) < e.posThreshold;
                this.pTime = t.timeStamp, this.pCenter = t.center, s && a ? this.count += 1 : this.count = 1, this._input = t;
                if (0 === this.count % e.taps)return this.hasRequireFailures() ? (this._timer = o(function () {
                    this.state = he, this.tryEmit()
                }, e.interval, this), le) : he
            }
            return 32
        }, failTimeout: function () {
            return this._timer = o(function () {
                this.state = 32
            }, this.options.interval, this), 32
        }, reset: function () {
            clearTimeout(this._timer)
        }, emit: function () {
            this.state == he && (this._input.tapCount = this.count, this.manager.emit(this.options.event, this._input))
        }
    }), at.VERSION = "2.0.7", at.defaults = {
        domEvents: !1,
        touchAction: "compute",
        enable: !0,
        inputTarget: null,
        inputClass: null,
        preset: [[it, {enable: !1}], [et, {enable: !1}, ["rotate"]], [ot, {direction: Ft}], [tt, {direction: Ft}, ["swipe"]], [rt], [rt, {
            event: "doubletap",
            taps: 2
        }, ["tap"]], [nt]],
        cssProps: {
            userSelect: "none",
            touchSelect: "none",
            touchCallout: "none",
            contentZooming: "none",
            userDrag: "none",
            tapHighlightColor: "rgba(0,0,0,0)"
        }
    };
    st.prototype = {
        set: function (t) {
            return ut(this.options, t), t.touchAction && this.touchAction.update(), t.inputTarget && (this.input.destroy(), this.input.target = t.inputTarget, this.input.init()), this
        }, stop: function (t) {
            this.session.stopped = t ? 2 : 1
        }, recognize: function (t) {
            var e = this.session;
            if (!e.stopped) {
                this.touchAction.preventDefaults(t);
                var n, i = this.recognizers, o = e.curRecognizer;
                (!o || o && o.state & he) && (o = e.curRecognizer = null);
                for (var r = 0; r < i.length;)n = i[r], 2 === e.stopped || o && n != o && !n.canRecognizeWith(o) ? n.reset() : n.recognize(t), !o && n.state & (le | ce | ue) && (o = e.curRecognizer = n), r++
            }
        }, get: function (t) {
            if (t instanceof Q)return t;
            for (var e = this.recognizers, n = 0; n < e.length; n++)if (e[n].options.event == t)return e[n];
            return null
        }, add: function (t) {
            if (r(t, "add", this))return this;
            var e = this.get(t.options.event);
            return e && this.remove(e), this.recognizers.push(t), t.manager = this, this.touchAction.update(), t
        }, remove: function (t) {
            if (r(t, "remove", this))return this;
            if (t = this.get(t)) {
                var e = this.recognizers, n = v(e, t);
                n !== -1 && (e.splice(n, 1), this.touchAction.update())
            }
            return this
        }, on: function (t, e) {
            if (t !== i && e !== i) {
                var n = this.handlers;
                return a(m(t), function (t) {
                    n[t] = n[t] || [], n[t].push(e)
                }), this
            }
        }, off: function (t, e) {
            if (t !== i) {
                var n = this.handlers;
                return a(m(t), function (t) {
                    e ? n[t] && n[t].splice(v(n[t], e), 1) : delete n[t]
                }), this
            }
        }, emit: function (t, e) {
            this.options.domEvents && ct(t, e);
            var n = this.handlers[t] && this.handlers[t].slice();
            if (n && n.length) {
                e.type = t, e.preventDefault = function () {
                    e.srcEvent.preventDefault()
                };
                for (var i = 0; i < n.length;)n[i](e), i++
            }
        }, destroy: function () {
            this.element && lt(this, !1), this.handlers = {}, this.session = {}, this.input.destroy(), this.element = null
        }
    }, ut(at, {
        INPUT_START: Et,
        INPUT_MOVE: kt,
        INPUT_END: At,
        INPUT_CANCEL: _t,
        STATE_POSSIBLE: se,
        STATE_BEGAN: le,
        STATE_CHANGED: ce,
        STATE_ENDED: ue,
        STATE_RECOGNIZED: he,
        STATE_CANCELLED: de,
        STATE_FAILED: 32,
        DIRECTION_NONE: Pt,
        DIRECTION_LEFT: It,
        DIRECTION_RIGHT: Dt,
        DIRECTION_UP: Ot,
        DIRECTION_DOWN: Lt,
        DIRECTION_HORIZONTAL: Ft,
        DIRECTION_VERTICAL: Nt,
        DIRECTION_ALL: Mt,
        Manager: st,
        Input: T,
        TouchAction: $,
        TouchInput: z,
        MouseInput: R,
        PointerEventInput: W,
        TouchMouseInput: B,
        SingleTouchInput: H,
        Recognizer: Q,
        AttrRecognizer: J,
        Tap: rt,
        Pan: tt,
        Swipe: ot,
        Pinch: et,
        Rotate: it,
        Press: nt,
        on: d,
        off: f,
        each: a,
        merge: yt,
        extend: vt,
        assign: ut,
        inherit: l,
        bindFn: c,
        prefixed: w
    }), (void 0 !== t ? t : "undefined" != typeof self ? self : {}).Hammer = at, "function" == typeof define && define.amd ? define(function () {
        return at
    }) : "undefined" != typeof module && module.exports ? module.exports = at : t.Hammer = at
}(window, document), function (t) {
    "function" == typeof define && define.amd ? define(["jquery", "hammerjs"], t) : "object" == typeof exports ? t(require("jquery"), require("hammerjs")) : t(jQuery, Hammer)
}(function (t, e) {
    function n(n, i) {
        var o = t(n);
        o.data("hammer") || o.data("hammer", new e(o[0], i))
    }

    t.fn.hammer = function (t) {
        return this.each(function () {
            n(this, t)
        })
    }, e.Manager.prototype.emit = function (e) {
        return function (n, i) {
            e.call(this, n, i), t(this.element).trigger({type: n, gesture: i})
        }
    }(e.Manager.prototype.emit)
}), function (t) {
    var e = {
        init: function (e) {
            var n = {menuWidth: 240, edge: "left", closeOnClick: !1};
            e = t.extend(n, e), t(this).each(function () {
                function n(n) {
                    a = !1, s = !1, t("body").css({
                        overflow: "",
                        width: ""
                    }), t("#sidenav-overlay").velocity({opacity: 0}, {
                        duration: 200,
                        queue: !1,
                        easing: "easeOutQuad",
                        complete: function () {
                            t(this).remove()
                        }
                    }), "left" === e.edge ? (r.css({
                        width: "",
                        right: "",
                        left: "0"
                    }), o.velocity({translateX: "-100%"}, {
                        duration: 200,
                        queue: !1,
                        easing: "easeOutCubic",
                        complete: function () {
                            n === !0 && (o.removeAttr("style"), o.css("width", e.menuWidth))
                        }
                    })) : (r.css({width: "", right: "0", left: ""}), o.velocity({translateX: "100%"}, {
                        duration: 200,
                        queue: !1,
                        easing: "easeOutCubic",
                        complete: function () {
                            n === !0 && (o.removeAttr("style"), o.css("width", e.menuWidth))
                        }
                    }))
                }

                var i = t(this), o = t("#" + i.attr("data-activates"));
                240 != e.menuWidth && o.css("width", e.menuWidth);
                var r = t('<div class="drag-target"></div>');
                t("body").append(r), "left" == e.edge ? (o.css("transform", "translateX(-100%)"), r.css({left: 0})) : (o.addClass("right-aligned").css("transform", "translateX(100%)"), r.css({right: 0})), o.hasClass("fixed") && window.innerWidth > 1440 && o.css("transform", "translateX(0)"), o.hasClass("fixed") && t(window).resize(function () {
                    window.innerWidth > 1440 ? 0 != t("#sidenav-overlay").length && s ? n(!0) : o.css("transform", "translateX(0%)") : s === !1 && ("left" === e.edge ? o.css("transform", "translateX(-100%)") : o.css("transform", "translateX(100%)"))
                }), e.closeOnClick === !0 && o.on("click.itemclick", "a:not(.collapsible-header)", function () {
                    n()
                });
                var a = !1, s = !1;
                r.on("click", function () {
                    n()
                }), r.hammer({prevent_default: !1}).bind("pan", function (i) {
                    if ("touch" == i.gesture.pointerType) {
                        var r = (i.gesture.direction, i.gesture.center.x), a = (i.gesture.center.y, i.gesture.velocityX, t("body")), l = a.innerWidth();
                        if (a.css("overflow", "hidden"), a.width(l), 0 === t("#sidenav-overlay").length) {
                            var c = t('<div id="sidenav-overlay"></div>');
                            c.css("opacity", 0).click(function () {
                                n()
                            }), t("body").append(c)
                        }
                        if ("left" === e.edge && (r > e.menuWidth ? r = e.menuWidth : r < 0 && (r = 0)), "left" === e.edge)r < e.menuWidth / 2 ? s = !1 : r >= e.menuWidth / 2 && (s = !0), o.css("transform", "translateX(" + (r - e.menuWidth) + "px)"); else {
                            r < window.innerWidth - e.menuWidth / 2 ? s = !0 : r >= window.innerWidth - e.menuWidth / 2 && (s = !1);
                            var u = r - e.menuWidth / 2;
                            u < 0 && (u = 0), o.css("transform", "translateX(" + u + "px)")
                        }
                        var h;
                        "left" === e.edge ? (h = r / e.menuWidth, t("#sidenav-overlay").velocity({opacity: h}, {
                            duration: 10,
                            queue: !1,
                            easing: "easeOutQuad"
                        })) : (h = Math.abs((r - window.innerWidth) / e.menuWidth), t("#sidenav-overlay").velocity({opacity: h}, {
                            duration: 10,
                            queue: !1,
                            easing: "easeOutQuad"
                        }))
                    }
                }).bind("panend", function (n) {
                    if ("touch" == n.gesture.pointerType) {
                        var i = n.gesture.velocityX, l = n.gesture.center.x, c = l - e.menuWidth, u = l - e.menuWidth / 2;
                        c > 0 && (c = 0), u < 0 && (u = 0), a = !1, "left" === e.edge ? s && i <= .3 || i < -.5 ? (0 != c && o.velocity({translateX: [0, c]}, {
                            duration: 300,
                            queue: !1,
                            easing: "easeOutQuad"
                        }), t("#sidenav-overlay").velocity({opacity: 1}, {
                            duration: 50,
                            queue: !1,
                            easing: "easeOutQuad"
                        }), r.css({width: "50%", right: 0, left: ""})) : (!s || i > .3) && (t("body").css({
                            overflow: "",
                            width: ""
                        }), o.velocity({translateX: [-1 * e.menuWidth - 10, c]}, {
                            duration: 200,
                            queue: !1,
                            easing: "easeOutQuad"
                        }), t("#sidenav-overlay").velocity({opacity: 0}, {
                            duration: 200,
                            queue: !1,
                            easing: "easeOutQuad",
                            complete: function () {
                                t(this).remove()
                            }
                        }), r.css({
                            width: "10px",
                            right: "",
                            left: 0
                        })) : s && i >= -.3 || i > .5 ? (o.velocity({translateX: [0, u]}, {
                            duration: 300,
                            queue: !1,
                            easing: "easeOutQuad"
                        }), t("#sidenav-overlay").velocity({opacity: 1}, {
                            duration: 50,
                            queue: !1,
                            easing: "easeOutQuad"
                        }), r.css({width: "50%", right: "", left: 0})) : (!s || i < -.3) && (t("body").css({
                            overflow: "",
                            width: ""
                        }), o.velocity({translateX: [e.menuWidth + 10, u]}, {
                            duration: 200,
                            queue: !1,
                            easing: "easeOutQuad"
                        }), t("#sidenav-overlay").velocity({opacity: 0}, {
                            duration: 200,
                            queue: !1,
                            easing: "easeOutQuad",
                            complete: function () {
                                t(this).remove()
                            }
                        }), r.css({width: "10px", right: 0, left: ""}))
                    }
                }), i.click(function () {
                    if (s === !0)s = !1, a = !1, n(); else {
                        var i = t("body"), l = i.innerWidth();
                        i.css("overflow", "hidden"), i.width(l), t("body").append(r), "left" === e.edge ? (r.css({
                            width: "50%",
                            right: 0,
                            left: ""
                        }), o.velocity({translateX: [0, -1 * e.menuWidth]}, {
                            duration: 300,
                            queue: !1,
                            easing: "easeOutQuad"
                        })) : (r.css({
                            width: "50%",
                            right: "",
                            left: 0
                        }), o.velocity({translateX: [0, e.menuWidth]}, {
                            duration: 300,
                            queue: !1,
                            easing: "easeOutQuad"
                        }));
                        var c = t('<div id="sidenav-overlay"></div>');
                        c.css("opacity", 0).click(function () {
                            s = !1, a = !1, n(), c.velocity({opacity: 0}, {
                                duration: 300,
                                queue: !1,
                                easing: "easeOutQuad",
                                complete: function () {
                                    t(this).remove()
                                }
                            })
                        }), t("body").append(c), c.velocity({opacity: 1}, {
                            duration: 300,
                            queue: !1,
                            easing: "easeOutQuad",
                            complete: function () {
                                s = !0, a = !1
                            }
                        })
                    }
                    return !1
                })
            })
        }, show: function () {
            this.trigger("click")
        }, hide: function () {
            t("#sidenav-overlay").trigger("click")
        }
    };
    t.fn.sideNav = function (n) {
        return e[n] ? e[n].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof n && n ? void t.error("Method " + n + " does not exist on jQuery.sideNav") : e.init.apply(this, arguments)
    }
}(jQuery), function (t) {
    t.fn.collapsible = function (e) {
        var n = {accordion: void 0};
        return e = t.extend(n, e), this.each(function () {
            function n(e) {
                s = a.find("> li > .collapsible-header"), e.hasClass("active") ? e.parent().addClass("active") : e.parent().removeClass("active"), e.parent().hasClass("active") ? e.siblings(".collapsible-body").stop(!0, !1).slideDown({
                    duration: 350,
                    easing: "easeOutQuart",
                    queue: !1,
                    complete: function () {
                        t(this).css("height", "")
                    }
                }) : e.siblings(".collapsible-body").stop(!0, !1).slideUp({
                    duration: 350,
                    easing: "easeOutQuart",
                    queue: !1,
                    complete: function () {
                        t(this).css("height", "")
                    }
                }), s.not(e).removeClass("active").parent().removeClass("active"), s.not(e).parent().children(".collapsible-body").stop(!0, !1).slideUp({
                    duration: 350,
                    easing: "easeOutQuart",
                    queue: !1,
                    complete: function () {
                        t(this).css("height", "")
                    }
                })
            }

            function i(e) {
                e.hasClass("active") ? e.parent().addClass("active") : e.parent().removeClass("active"), e.parent().hasClass("active") ? e.siblings(".collapsible-body").stop(!0, !1).slideDown({
                    duration: 350,
                    easing: "easeOutQuart",
                    queue: !1,
                    complete: function () {
                        t(this).css("height", "")
                    }
                }) : e.siblings(".collapsible-body").stop(!0, !1).slideUp({
                    duration: 350,
                    easing: "easeOutQuart",
                    queue: !1,
                    complete: function () {
                        t(this).css("height", "")
                    }
                })
            }

            function o(t) {
                return r(t).length > 0
            }

            function r(t) {
                return t.closest("li > .collapsible-header")
            }

            var a = t(this), s = t(this).find("> li > .collapsible-header"), l = a.data("collapsible");
            a.off("click.collapse", ".collapsible-header"), s.off("click.collapse"), e.accordion || "accordion" === l || void 0 === l ? (s = a.find("> li > .collapsible-header"), s.on("click.collapse", function (e) {
                var i = t(e.target);
                o(i) && (i = r(i)), i.toggleClass("active"), n(i)
            }), n(s.filter(".active").first())) : s.each(function () {
                t(this).on("click.collapse", function (e) {
                    var n = t(e.target);
                    o(n) && (n = r(n)), n.toggleClass("active"), i(n)
                }), t(this).hasClass("active") && i(t(this))
            })
        })
    }, t(document).ready(function () {
        t(".collapsible").collapsible()
    })
}(jQuery), function (t, e) {
    "function" == typeof define && define.amd ? define(["jquery"], function (t) {
        return e(t)
    }) : "object" == typeof exports ? module.exports = e(require("jquery")) : e(jQuery)
}(0, function (t) {
    var e = function (t, e) {
        var n, i = document.createElement("canvas");
        t.appendChild(i), "object" == typeof G_vmlCanvasManager && G_vmlCanvasManager.initElement(i);
        var o = i.getContext("2d");
        i.width = i.height = e.size;
        var r = 1;
        window.devicePixelRatio > 1 && (r = window.devicePixelRatio, i.style.width = i.style.height = [e.size, "px"].join(""), i.width = i.height = e.size * r, o.scale(r, r)), o.translate(e.size / 2, e.size / 2), o.rotate((-.5 + e.rotate / 180) * Math.PI);
        var a = (e.size - e.lineWidth) / 2;
        e.scaleColor && e.scaleLength && (a -= e.scaleLength + 2), Date.now = Date.now || function () {
                return +new Date
            };
        var s = function (t, e, n) {
            n = Math.min(Math.max(-1, n || 0), 1);
            var i = n <= 0;
            o.beginPath(), o.arc(0, 0, a, 0, 2 * Math.PI * n, i), o.strokeStyle = t, o.lineWidth = e, o.stroke()
        }, l = function () {
            var t, n;
            o.lineWidth = 1, o.fillStyle = e.scaleColor, o.save();
            for (var i = 24; i > 0; --i)i % 6 == 0 ? (n = e.scaleLength, t = 0) : (n = .6 * e.scaleLength, t = e.scaleLength - n), o.fillRect(-e.size / 2 + t, 0, n, 1), o.rotate(Math.PI / 12);
            o.restore()
        }, c = function () {
            return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function (t) {
                    window.setTimeout(t, 1e3 / 60)
                }
        }(), u = function () {
            e.scaleColor && l(), e.trackColor && s(e.trackColor, e.trackWidth || e.lineWidth, 1)
        };
        this.getCanvas = function () {
            return i
        }, this.getCtx = function () {
            return o
        }, this.clear = function () {
            o.clearRect(e.size / -2, e.size / -2, e.size, e.size)
        }, this.draw = function (t) {
            e.scaleColor || e.trackColor ? o.getImageData && o.putImageData ? n ? o.putImageData(n, 0, 0) : (u(), n = o.getImageData(0, 0, e.size * r, e.size * r)) : (this.clear(), u()) : this.clear(), o.lineCap = e.lineCap;
            var i;
            i = "function" == typeof e.barColor ? e.barColor(t) : e.barColor, s(i, e.lineWidth, t / 100)
        }.bind(this), this.animate = function (t, n) {
            var i = Date.now();
            e.onStart(t, n);
            var o = function () {
                var r = Math.min(Date.now() - i, e.animate.duration), a = e.easing(this, r, t, n - t, e.animate.duration);
                this.draw(a), e.onStep(t, n, a), r >= e.animate.duration ? e.onStop(t, n) : c(o)
            }.bind(this);
            c(o)
        }.bind(this)
    }, n = function (t, n) {
        var i = {
            barColor: "#ef1e25",
            trackColor: "#f9f9f9",
            scaleColor: "#dfe0e0",
            scaleLength: 5,
            lineCap: "round",
            lineWidth: 3,
            trackWidth: void 0,
            size: 110,
            rotate: 0,
            animate: {duration: 1e3, enabled: !0},
            easing: function (t, e, n, i, o) {
                return e /= o / 2, e < 1 ? i / 2 * e * e + n : -i / 2 * (--e * (e - 2) - 1) + n
            },
            onStart: function (t, e) {
            },
            onStep: function (t, e, n) {
            },
            onStop: function (t, e) {
            }
        };
        if (void 0 !== e)i.renderer = e; else {
            if ("undefined" == typeof SVGRenderer)throw new Error("Please load either the SVG- or the CanvasRenderer");
            i.renderer = SVGRenderer
        }
        var o = {}, r = 0, a = function () {
            this.el = t, this.options = o;
            for (var e in i)i.hasOwnProperty(e) && (o[e] = n && void 0 !== n[e] ? n[e] : i[e], "function" == typeof o[e] && (o[e] = o[e].bind(this)));
            "string" == typeof o.easing && "undefined" != typeof jQuery && jQuery.isFunction(jQuery.easing[o.easing]) ? o.easing = jQuery.easing[o.easing] : o.easing = i.easing, "number" == typeof o.animate && (o.animate = {
                duration: o.animate,
                enabled: !0
            }), "boolean" != typeof o.animate || o.animate || (o.animate = {
                duration: 1e3,
                enabled: o.animate
            }), this.renderer = new o.renderer(t, o), this.renderer.draw(r), t.dataset && t.dataset.percent ? this.update(parseFloat(t.dataset.percent)) : t.getAttribute && t.getAttribute("data-percent") && this.update(parseFloat(t.getAttribute("data-percent")))
        }.bind(this);
        this.update = function (t) {
            return t = parseFloat(t), o.animate.enabled ? this.renderer.animate(r, t) : this.renderer.draw(t), r = t, this
        }.bind(this), this.disableAnimation = function () {
            return o.animate.enabled = !1, this
        }, this.enableAnimation = function () {
            return o.animate.enabled = !0, this
        }, a()
    };
    t.fn.easyPieChart = function (e) {
        return this.each(function () {
            var i;
            t.data(this, "easyPieChart") || (i = t.extend({}, e, t(this).data()), t.data(this, "easyPieChart", new n(this, i)))
        })
    }
}), $(function () {
    $("#accordion").on("show.bs.collapse", function () {
        $("#accordion .in").collapse("hide")
    })
}), function (t) {
    t(document).ready(function () {
        function e(e) {
            var n = e.css("font-family"), o = e.css("font-size");
            o && i.css("font-size", o), n && i.css("font-family", n), "off" === e.attr("wrap") && i.css("overflow-wrap", "normal").css("white-space", "pre"), i.text(e.val() + "\n");
            var r = i.html().replace(/\n/g, "<br>");
            i.html(r), e.is(":visible") ? i.css("width", e.width()) : i.css("width", t(window).width() / 2), e.css("height", i.height())
        }

        Materialize.updateTextFields = function () {
            t("input[type=text], input[type=password], input[type=email], input[type=url], input[type=tel], input[type=number], input[type=search], textarea").each(function (e, n) {
                t(n).val().length > 0 || n.autofocus || void 0 !== t(this).attr("placeholder") || t(n)[0].validity.badInput === !0 ? t(this).siblings("label, i").addClass("active") : t(this).siblings("label, i").removeClass("active")
            })
        };
        var n = "input[type=text], input[type=password], input[type=email], input[type=url], input[type=tel], input[type=number], input[type=search], textarea";
        t(document).on("change", n, function () {
            0 === t(this).val().length && void 0 === t(this).attr("placeholder") || t(this).siblings("label").addClass("active"), validate_field(t(this))
        }), t(document).ready(function () {
            Materialize.updateTextFields()
        }), t(document).on("reset", function (e) {
            var i = t(e.target);
            i.is("form") && (i.find(n).removeClass("valid").removeClass("invalid"), i.find(n).each(function () {
                "" === t(this).attr("value") && t(this).siblings("label, i").removeClass("active")
            }), i.find("select.initialized").each(function () {
                var t = i.find("option[selected]").text();
                i.siblings("input.select-dropdown").val(t)
            }))
        }), t(document).on("focus", n, function () {
            t(this).siblings("label, i").addClass("active")
        }), t(document).on("blur", n, function () {
            var e = t(this);
            0 === e.val().length && e[0].validity.badInput !== !0 && void 0 === e.attr("placeholder") && e.siblings("label, i").removeClass("active"), 0 === e.val().length && e[0].validity.badInput !== !0 && void 0 !== e.attr("placeholder") && e.siblings("i").removeClass("active"), validate_field(e)
        }), window.validate_field = function (t) {
            var e = void 0 !== t.attr("length"), n = parseInt(t.attr("length")), i = t.val().length;
            0 === t.val().length && t[0].validity.badInput === !1 ? t.hasClass("validate") && (t.removeClass("valid"), t.removeClass("invalid")) : t.hasClass("validate") && (t.is(":valid") && e && i <= n || t.is(":valid") && !e ? (t.removeClass("invalid"), t.addClass("valid")) : (t.removeClass("valid"), t.addClass("invalid")))
        };
        var i = t(".hiddendiv").first();
        i.length || (i = t('<div class="hiddendiv common"></div>'), t("body").append(i));
        t(".materialize-textarea").each(function () {
            var n = t(this);
            n.val().length && e(n)
        }), t("body").on("keyup keydown autoresize", ".materialize-textarea", function () {
            e(t(this))
        }), t(document).on("change", '.file-field input[type="file"]', function () {
            for (var e = t(this).closest(".file-field"), n = e.find("input.file-path"), i = t(this)[0].files, o = [], r = 0; r < i.length; r++)o.push(i[r].name);
            n.val(o.join(", ")), n.trigger("change")
        });
        var o, r = "input[type=range]", a = !1;
        t(r).each(function () {
            var e = t('<span class="thumb"><span class="value"></span></span>');
            t(this).after(e)
        });
        t(document).on("change", r, function (e) {
            t(this).siblings(".thumb").find(".value").html(t(this).val())
        }), t(document).on("input mousedown touchstart", r, function (e) {
            var n = t(this).siblings(".thumb"), i = t(this).outerWidth();
            n.length <= 0 && (n = t('<span class="thumb"><span class="value"></span></span>'), t(this).after(n)), n.find(".value").html(t(this).val()), a = !0, t(this).addClass("active"), n.hasClass("active") || n.velocity({
                height: "30px",
                width: "30px",
                top: "-20px",
                marginLeft: "-15px"
            }, {
                duration: 300,
                easing: "easeOutExpo"
            }), "input" !== e.type && (o = void 0 === e.pageX || null === e.pageX ? e.originalEvent.touches[0].pageX - t(this).offset().left : e.pageX - t(this).offset().left, o < 0 ? o = 0 : o > i && (o = i), n.addClass("active").css("left", o)), n.find(".value").html(t(this).val())
        }), t(document).on("mouseup touchend", ".range-field", function () {
            a = !1, t(this).removeClass("active")
        }), t(document).on("mousemove touchmove", ".range-field", function (e) {
            var n, i = t(this).children(".thumb");
            if (a) {
                i.hasClass("active") || i.velocity({
                    height: "30px",
                    width: "30px",
                    top: "-20px",
                    marginLeft: "-15px"
                }, {
                    duration: 300,
                    easing: "easeOutExpo"
                }), n = void 0 === e.pageX || null === e.pageX ? e.originalEvent.touches[0].pageX - t(this).offset().left : e.pageX - t(this).offset().left;
                var o = t(this).outerWidth();
                n < 0 ? n = 0 : n > o && (n = o), i.addClass("active").css("left", n), i.find(".value").html(i.siblings(r).val())
            }
        }), t(document).on("mouseout touchleave", ".range-field", function () {
            if (!a) {
                var e = t(this).children(".thumb");
                e.hasClass("active") && e.velocity({
                    height: "0",
                    width: "0",
                    top: "10px",
                    marginLeft: "-6px"
                }, {duration: 100}), e.removeClass("active")
            }
        })
    }), t.fn.material_select = function (e) {
        function n(t, e, n) {
            var o = t.indexOf(e), r = o === -1;
            return r ? t.push(e) : t.splice(o, 1), n.siblings("ul.dropdown-content").find("li").eq(e).toggleClass("active"), n.find("option").eq(e).prop("selected", r), i(t, n), r
        }

        function i(t, e) {
            for (var n = "", i = 0, o = t.length; i < o; i++) {
                var r = e.find("option").eq(t[i]).text();
                n += 0 === i ? r : ", " + r
            }
            "" === n && (n = e.find("option:disabled").eq(0).text()), e.siblings("input.select-dropdown").val(n)
        }

        t(this).each(function () {
            var i = t(this);
            if (!i.hasClass("browser-default")) {
                var o = !!i.attr("multiple"), r = i.data("select-id");
                if (r && (i.parent().find("span.caret").remove(), i.parent().find("input").remove(), i.unwrap(), t("ul#select-options-" + r).remove()), "destroy" === e)return void i.data("select-id", null).removeClass("initialized");
                var a = Materialize.guid();
                i.data("select-id", a);
                var s = t('<div class="select-wrapper"></div>');
                s.addClass(i.attr("class"));
                var l = t('<ul id="select-options-' + a + '" class="dropdown-content select-dropdown ' + (o ? "multiple-select-dropdown" : "") + '"></ul>'), c = i.children("option, optgroup"), u = [], h = !1, d = i.find("option:selected").html() || i.find("option:first").html() || "", f = function () {
                    var e = t(this).closest("ul"), n = t(this).val();
                    e.find("li").find("span.filtrable").each(function () {
                        "string" == typeof this.outerText && (this.outerText.toLowerCase().indexOf(n.toLowerCase()) === -1 ? (t(this).hide(), t(this).parent().hide()) : (t(this).show(), t(this).parent().show()))
                    })
                }, p = !!i.attr("searchable");
                p && function () {
                    var e = i.attr("searchable"), n = t('<span><input type="text" class="search" style="margin: 5px 0px 16px 15px; width: 96%;" placeholder="' + e + '"></span>');
                    l.append(n), n.find(".search").keyup(f)
                }();
                var g = function (e, n, i) {
                    var o = n.is(":disabled") ? "disabled " : "", r = "optgroup-option" === i ? "optgroup-option " : "", a = n.data("icon"), s = n.attr("class");
                    if (a) {
                        var c = "";
                        return s && (c = ' class="' + s + '"'), "multiple" === i ? l.append(t('<li class="' + o + '"><img alt="" src="' + a + '"' + c + '><span class="filtrable"><input type="checkbox"' + o + "/><label></label>" + n.html() + "</span></li>")) : l.append(t('<li class="' + o + r + '"><img alt="" src="' + a + '"' + c + '><span class="filtrable">' + n.html() + "</span></li>")), !0
                    }
                    "multiple" === i ? l.append(t('<li class="' + o + '"><span class="filtrable"><input type="checkbox"' + o + "/><label></label>" + n.html() + "</span></li>")) : l.append(t('<li class="' + o + r + '"><span class="filtrable">' + n.html() + "</span></li>"))
                };
                c.length && c.each(function () {
                    if (t(this).is("option"))o ? g(0, t(this), "multiple") : g(0, t(this)); else if (t(this).is("optgroup")) {
                        var e = t(this).children("option");
                        l.append(t('<li class="optgroup"><span>' + t(this).attr("label") + "</span></li>")), e.each(function () {
                            g(0, t(this), "optgroup-option")
                        })
                    }
                }), l.find("li:not(.optgroup)").each(function (r) {
                    t(this).click(function (a) {
                        if (!t(this).hasClass("disabled") && !t(this).hasClass("optgroup")) {
                            var s = !0;
                            o ? (t('input[type="checkbox"]', this).prop("checked", function (t, e) {
                                return !e
                            }), s = n(u, t(this).index() - 1, i), y.trigger("focus")) : (l.find("li").removeClass("active"), t(this).toggleClass("active"), y.val(t(this).text())), b(l, t(this)), i.find("option").eq(r).prop("selected", s), i.trigger("change"), void 0 !== e && e()
                        }
                        a.stopPropagation()
                    })
                }), i.wrap(s);
                var m = t('<span class="caret">&#9660;</span>');
                i.is(":disabled") && m.addClass("disabled");
                var v = d.replace(/"/g, "&quot;"), y = t('<input type="text" class="select-dropdown" readonly="true" ' + (i.is(":disabled") ? "disabled" : "") + ' data-activates="select-options-' + a + '" value="' + v + '"/>');
                i.before(y), y.before(m), y.after(l), i.is(":disabled") || y.dropdown({
                    hover: !1,
                    closeOnClick: !1
                }), i.attr("tabindex") && t(y[0]).attr("tabindex", i.attr("tabindex")), i.addClass("initialized"), y.on({
                    focus: function () {
                        if (t("ul.select-dropdown").not(l[0]).is(":visible") && t("input.select-dropdown").trigger("close"), !l.is(":visible")) {
                            t(this).trigger("open", ["focus"]);
                            var e = t(this).val();
                            b(l, l.find("li").filter(function () {
                                return t(this).text().toLowerCase() === e.toLowerCase()
                            })[0])
                        }
                    }, click: function (t) {
                        t.stopPropagation()
                    }
                }), y.on("blur", function () {
                    o || p || t(this).trigger("close"), l.find("li.selected").removeClass("selected")
                }), !o && p && l.find("li").on("click", function () {
                    y.trigger("close")
                }), l.hover(function () {
                    h = !0
                }, function () {
                    h = !1
                }), t(window).on({
                    click: function () {
                        (o || p) && (h || y.trigger("close"))
                    }
                }), o && i.find("option:selected:not(:disabled)").each(function () {
                    var e = t(this).index();
                    n(u, e, i), l.find("li").eq(e).find(":checkbox").prop("checked", !0)
                });
                var b = function (e, n) {
                    if (n) {
                        e.find("li.selected").removeClass("selected");
                        var i = t(n);
                        i.addClass("selected"), l.scrollTo(i)
                    }
                }, w = [], x = function (e) {
                    if (9 == e.which)return void y.trigger("close");
                    if (40 == e.which && !l.is(":visible"))return void y.trigger("open");
                    if (13 != e.which || l.is(":visible")) {
                        e.preventDefault();
                        var n = String.fromCharCode(e.which).toLowerCase(), i = [9, 13, 27, 38, 40];
                        if (n && i.indexOf(e.which) === -1) {
                            w.push(n);
                            var r = w.join(""), a = l.find("li").filter(function () {
                                return 0 === t(this).text().toLowerCase().indexOf(r)
                            })[0];
                            a && b(l, a)
                        }
                        if (13 == e.which) {
                            var s = l.find("li.selected:not(.disabled)")[0];
                            s && (t(s).trigger("click"), o || y.trigger("close"))
                        }
                        40 == e.which && (a = l.find("li.selected").length ? l.find("li.selected").next("li:not(.disabled)")[0] : l.find("li:not(.disabled)")[0], b(l, a)), 27 == e.which && y.trigger("close"), 38 == e.which && (a = l.find("li.selected").prev("li:not(.disabled)")[0]) && b(l, a), setTimeout(function () {
                            w = []
                        }, 1e3)
                    }
                };
                y.on("keydown", x)
            }
        })
    }
}(jQuery), jQuery("select").siblings("input.select-dropdown").on("mousedown", function (t) {
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) && (t.clientX >= t.target.clientWidth || t.clientY >= t.target.clientHeight) && t.preventDefault()
}), function (t) {
    "function" == typeof define && define.amd ? define("picker", ["jquery"], t) : "object" == typeof exports ? module.exports = t(require("jquery")) : this.Picker = t(jQuery)
}(function (t) {
    function e(r, a, l, d) {
        function f() {
            return e._.node("div", e._.node("div", e._.node("div", e._.node("div", A.component.nodes(C.open), S.box), S.wrap), S.frame), S.holder, 'tabindex="-1"')
        }

        function p() {
            E.data(a, A).addClass(S.input).val(E.data("value") ? A.get("select", T.format) : r.value), T.editable || E.on("focus." + C.id + " click." + C.id, function (t) {
                t.preventDefault(), A.open()
            }).on("keydown." + C.id, w), o(r, {haspopup: !0, expanded: !1, readonly: !1, owns: r.id + "_root"})
        }

        function g() {
            o(A.$root[0], "hidden", !0)
        }

        function m() {
            A.$holder.on({
                keydown: w, "focus.toOpen": b, blur: function () {
                    E.removeClass(S.target)
                }, focusin: function (t) {
                    A.$root.removeClass(S.focused), t.stopPropagation()
                }, "mousedown click": function (e) {
                    var n = e.target;
                    n != A.$holder[0] && (e.stopPropagation(), "mousedown" != e.type || t(n).is("input, select, textarea, button, option") || (e.preventDefault(), A.$holder[0].focus()))
                }
            }).on("click", "[data-pick], [data-nav], [data-clear], [data-close]", function () {
                var e = t(this), n = e.data(), i = e.hasClass(S.navDisabled) || e.hasClass(S.disabled), o = s();
                o = o && (o.type || o.href), (i || o && !t.contains(A.$root[0], o)) && A.$holder[0].focus(), !i && n.nav ? A.set("highlight", A.component.item.highlight, {nav: n.nav}) : !i && "pick" in n ? (A.set("select", n.pick), T.closeOnSelect && A.close(!0)) : n.clear ? (A.clear(), T.closeOnClear && A.close(!0)) : n.close && A.close(!0)
            })
        }

        function v() {
            var e;
            T.hiddenName === !0 ? (e = r.name, r.name = "") : (e = ["string" == typeof T.hiddenPrefix ? T.hiddenPrefix : "", "string" == typeof T.hiddenSuffix ? T.hiddenSuffix : "_submit"], e = e[0] + r.name + e[1]), A._hidden = t('<input type=hidden name="' + e + '"' + (E.data("value") || r.value ? ' value="' + A.get("select", T.formatSubmit) + '"' : "") + ">")[0], E.on("change." + C.id, function () {
                A._hidden.value = r.value ? A.get("select", T.formatSubmit) : ""
            })
        }

        function y() {
            x && h ? A.$holder.find("." + S.frame).one("transitionend", function () {
                A.$holder[0].focus()
            }) : A.$holder[0].focus()
        }

        function b(t) {
            t.stopPropagation(), E.addClass(S.target), A.$root.addClass(S.focused), A.open()
        }

        function w(t) {
            var e = t.keyCode, n = /^(8|46)$/.test(e);
            if (27 == e)return A.close(!0), !1;
            (32 == e || n || !C.open && A.component.key[e]) && (t.preventDefault(), t.stopPropagation(), n ? A.clear().close() : A.open())
        }

        if (!r)return e;
        var x = !1, C = {id: r.id || "P" + Math.abs(~~(Math.random() * new Date))}, T = l ? t.extend(!0, {}, l.defaults, d) : d || {}, S = t.extend({}, e.klasses(), T.klass), E = t(r), k = function () {
            return this.start()
        }, A = k.prototype = {
            constructor: k, $node: E, start: function () {
                return C && C.start ? A : (C.methods = {}, C.start = !0, C.open = !1, C.type = r.type, r.autofocus = r == s(), r.readOnly = !T.editable, r.id = r.id || C.id, "text" != r.type && (r.type = "text"), A.component = new l(A, T), A.$root = t('<div class="' + S.picker + '" id="' + r.id + '_root" />'), g(), A.$holder = t(f()).appendTo(A.$root), m(), T.formatSubmit && v(), p(), T.containerHidden ? t(T.containerHidden).append(A._hidden) : E.after(A._hidden), T.container ? t(T.container).append(A.$root) : E.after(A.$root), A.on({
                    start: A.component.onStart,
                    render: A.component.onRender,
                    stop: A.component.onStop,
                    open: A.component.onOpen,
                    close: A.component.onClose,
                    set: A.component.onSet
                }).on({
                    start: T.onStart,
                    render: T.onRender,
                    stop: T.onStop,
                    open: T.onOpen,
                    close: T.onClose,
                    set: T.onSet
                }), x = n(A.$holder[0]), r.autofocus && A.open(), A.trigger("start").trigger("render"))
            }, render: function (e) {
                return e ? (A.$holder = t(f()), m(), A.$root.html(A.$holder)) : A.$root.find("." + S.box).html(A.component.nodes(C.open)), A.trigger("render")
            }, stop: function () {
                return C.start ? (A.close(), A._hidden && A._hidden.parentNode.removeChild(A._hidden), A.$root.remove(), E.removeClass(S.input).removeData(a), setTimeout(function () {
                    E.off("." + C.id)
                }, 0), r.type = C.type, r.readOnly = !1, A.trigger("stop"), C.methods = {}, C.start = !1, A) : A
            }, open: function (n) {
                return C.open ? A : (E.addClass(S.active), o(r, "expanded", !0), setTimeout(function () {
                    A.$root.addClass(S.opened), o(A.$root[0], "hidden", !1)
                }, 0), n !== !1 && (C.open = !0, x && u.css("overflow", "hidden").css("padding-right", "+=" + i()), y(), c.on("click." + C.id + " focusin." + C.id, function (t) {
                    var e = t.target;
                    e != r && e != document && 3 != t.which && A.close(e === A.$holder[0])
                }).on("keydown." + C.id, function (n) {
                    var i = n.keyCode, o = A.component.key[i], r = n.target;
                    27 == i ? A.close(!0) : r != A.$holder[0] || !o && 13 != i ? t.contains(A.$root[0], r) && 13 == i && (n.preventDefault(), r.click()) : (n.preventDefault(),
                        o ? e._.trigger(A.component.key.go, A, [e._.trigger(o)]) : A.$root.find("." + S.highlighted).hasClass(S.disabled) || (A.set("select", A.component.item.highlight), T.closeOnSelect && A.close(!0)))
                })), A.trigger("open"))
            }, close: function (t) {
                return t && (T.editable ? r.focus() : (A.$holder.off("focus.toOpen").focus(), setTimeout(function () {
                    A.$holder.on("focus.toOpen", b)
                }, 0))), E.removeClass(S.active), o(r, "expanded", !1), setTimeout(function () {
                    A.$root.removeClass(S.opened + " " + S.focused), o(A.$root[0], "hidden", !0)
                }, 0), C.open ? (C.open = !1, x && u.css("overflow", "").css("padding-right", "-=" + i()), c.off("." + C.id), A.trigger("close")) : A
            }, clear: function (t) {
                return A.set("clear", null, t)
            }, set: function (e, n, i) {
                var o, r, a = t.isPlainObject(e), s = a ? e : {};
                if (i = a && t.isPlainObject(n) ? n : i || {}, e) {
                    a || (s[e] = n);
                    for (o in s)r = s[o], o in A.component.item && (void 0 === r && (r = null), A.component.set(o, r, i)), "select" != o && "clear" != o || E.val("clear" == o ? "" : A.get(o, T.format)).trigger("change");
                    A.render()
                }
                return i.muted ? A : A.trigger("set", s)
            }, get: function (t, n) {
                if (t = t || "value", null != C[t])return C[t];
                if ("valueSubmit" == t) {
                    if (A._hidden)return A._hidden.value;
                    t = "value"
                }
                if ("value" == t)return r.value;
                if (t in A.component.item) {
                    if ("string" == typeof n) {
                        var i = A.component.get(t);
                        return i ? e._.trigger(A.component.formats.toString, A.component, [n, i]) : ""
                    }
                    return A.component.get(t)
                }
            }, on: function (e, n, i) {
                var o, r, a = t.isPlainObject(e), s = a ? e : {};
                if (e) {
                    a || (s[e] = n);
                    for (o in s)r = s[o], i && (o = "_" + o), C.methods[o] = C.methods[o] || [], C.methods[o].push(r)
                }
                return A
            }, off: function () {
                var t, e, n = arguments;
                for (t = 0, namesCount = n.length; t < namesCount; t += 1)(e = n[t]) in C.methods && delete C.methods[e];
                return A
            }, trigger: function (t, n) {
                var i = function (t) {
                    var i = C.methods[t];
                    i && i.map(function (t) {
                        e._.trigger(t, A, [n])
                    })
                };
                return i("_" + t), i(t), A
            }
        };
        return new k
    }

    function n(t) {
        var e;
        return t.currentStyle ? e = t.currentStyle.position : window.getComputedStyle && (e = getComputedStyle(t).position), "fixed" == e
    }

    function i() {
        if (u.height() <= l.height())return 0;
        var e = t('<div style="visibility:hidden;width:100px" />').appendTo("body"), n = e[0].offsetWidth;
        e.css("overflow", "scroll");
        var i = t('<div style="width:100%" />').appendTo(e), o = i[0].offsetWidth;
        return e.remove(), n - o
    }

    function o(e, n, i) {
        if (t.isPlainObject(n))for (var o in n)r(e, o, n[o]); else r(e, n, i)
    }

    function r(t, e, n) {
        t.setAttribute(("role" == e ? "" : "aria-") + e, n)
    }

    function a(e, n) {
        t.isPlainObject(e) || (e = {attribute: n}), n = "";
        for (var i in e) {
            var o = ("role" == i ? "" : "aria-") + i;
            n += null == e[i] ? "" : o + '="' + e[i] + '"'
        }
        return n
    }

    function s() {
        try {
            return document.activeElement
        } catch (t) {
        }
    }

    var l = t(window), c = t(document), u = t(document.documentElement), h = null != document.documentElement.style.transition;
    return e.klasses = function (t) {
        return t = t || "picker", {
            picker: t,
            opened: t + "--opened",
            focused: t + "--focused",
            input: t + "__input",
            active: t + "__input--active",
            target: t + "__input--target",
            holder: t + "__holder",
            frame: t + "__frame",
            wrap: t + "__wrap",
            box: t + "__box"
        }
    }, e._ = {
        group: function (t) {
            for (var n, i = "", o = e._.trigger(t.min, t); o <= e._.trigger(t.max, t, [o]); o += t.i)n = e._.trigger(t.item, t, [o]), i += e._.node(t.node, n[0], n[1], n[2]);
            return i
        }, node: function (e, n, i, o) {
            return n ? (n = t.isArray(n) ? n.join("") : n, i = i ? ' class="' + i + '"' : "", o = o ? " " + o : "", "<" + e + i + o + ">" + n + "</" + e + ">") : ""
        }, lead: function (t) {
            return (t < 10 ? "0" : "") + t
        }, trigger: function (t, e, n) {
            return "function" == typeof t ? t.apply(e, n || []) : t
        }, digits: function (t) {
            return /\d/.test(t[1]) ? 2 : 1
        }, isDate: function (t) {
            return {}.toString.call(t).indexOf("Date") > -1 && this.isInteger(t.getDate())
        }, isInteger: function (t) {
            return {}.toString.call(t).indexOf("Number") > -1 && t % 1 == 0
        }, ariaAttr: a
    }, e.extend = function (n, i) {
        t.fn[n] = function (o, r) {
            var a = this.data(n);
            return "picker" == o ? a : a && "string" == typeof o ? e._.trigger(a[o], a, [r]) : this.each(function () {
                t(this).data(n) || new e(this, n, i, o)
            })
        }, t.fn[n].defaults = i.defaults
    }, e
}), function (t) {
    "function" == typeof define && define.amd ? define(["picker", "jquery"], t) : "object" == typeof exports ? module.exports = t(require("./picker.js"), require("jquery")) : t(Picker, jQuery)
}(function (t, e) {
    function n(t, e) {
        var n = this, i = t.$node[0], o = i.value, r = t.$node.data("value"), a = r || o, s = r ? e.formatSubmit : e.format, l = function () {
            return i.currentStyle ? "rtl" == i.currentStyle.direction : "rtl" == getComputedStyle(t.$root[0]).direction
        };
        n.settings = e, n.$node = t.$node, n.queue = {
            min: "measure create",
            max: "measure create",
            now: "now create",
            select: "parse create validate",
            highlight: "parse navigate create validate",
            view: "parse create validate viewset",
            disable: "deactivate",
            enable: "activate"
        }, n.item = {}, n.item.clear = null, n.item.disable = (e.disable || []).slice(0), n.item.enable = -function (t) {
            return t[0] === !0 ? t.shift() : -1
        }(n.item.disable), n.set("min", e.min).set("max", e.max).set("now"), a ? n.set("select", a, {
            format: s,
            defaultValue: !0
        }) : n.set("select", null).set("highlight", n.item.now), n.key = {
            40: 7, 38: -7, 39: function () {
                return l() ? -1 : 1
            }, 37: function () {
                return l() ? 1 : -1
            }, go: function (t) {
                var e = n.item.highlight, i = new Date(e.year, e.month, e.date + t);
                n.set("highlight", i, {interval: t}), this.render()
            }
        }, t.on("render", function () {
            t.$root.find("." + e.klass.selectMonth).on("change", function () {
                var n = this.value;
                n && (t.set("highlight", [t.get("view").year, n, t.get("highlight").date]), t.$root.find("." + e.klass.selectMonth).trigger("focus"))
            }), t.$root.find("." + e.klass.selectYear).on("change", function () {
                var n = this.value;
                n && (t.set("highlight", [n, t.get("view").month, t.get("highlight").date]), t.$root.find("." + e.klass.selectYear).trigger("focus"))
            })
        }, 1).on("open", function () {
            var i = "";
            n.disabled(n.get("now")) && (i = ":not(." + e.klass.buttonToday + ")"), t.$root.find("button" + i + ", select").attr("disabled", !1)
        }, 1).on("close", function () {
            t.$root.find("button, select").attr("disabled", !0)
        }, 1)
    }

    var i = t._;
    n.prototype.set = function (t, e, n) {
        var i = this, o = i.item;
        return null === e ? ("clear" == t && (t = "select"), o[t] = e, i) : (o["enable" == t ? "disable" : "flip" == t ? "enable" : t] = i.queue[t].split(" ").map(function (o) {
            return e = i[o](t, e, n)
        }).pop(), "select" == t ? i.set("highlight", o.select, n) : "highlight" == t ? i.set("view", o.highlight, n) : t.match(/^(flip|min|max|disable|enable)$/) && (o.select && i.disabled(o.select) && i.set("select", o.select, n), o.highlight && i.disabled(o.highlight) && i.set("highlight", o.highlight, n)), i)
    }, n.prototype.get = function (t) {
        return this.item[t]
    }, n.prototype.create = function (t, n, o) {
        var r, a = this;
        return n = void 0 === n ? t : n, n == -(1 / 0) || n == 1 / 0 ? r = n : e.isPlainObject(n) && i.isInteger(n.pick) ? n = n.obj : e.isArray(n) ? (n = new Date(n[0], n[1], n[2]), n = i.isDate(n) ? n : a.create().obj) : n = i.isInteger(n) || i.isDate(n) ? a.normalize(new Date(n), o) : a.now(t, n, o), {
            year: r || n.getFullYear(),
            month: r || n.getMonth(),
            date: r || n.getDate(),
            day: r || n.getDay(),
            obj: r || n,
            pick: r || n.getTime()
        }
    }, n.prototype.createRange = function (t, n) {
        var o = this, r = function (t) {
            return t === !0 || e.isArray(t) || i.isDate(t) ? o.create(t) : t
        };
        return i.isInteger(t) || (t = r(t)), i.isInteger(n) || (n = r(n)), i.isInteger(t) && e.isPlainObject(n) ? t = [n.year, n.month, n.date + t] : i.isInteger(n) && e.isPlainObject(t) && (n = [t.year, t.month, t.date + n]), {
            from: r(t),
            to: r(n)
        }
    }, n.prototype.withinRange = function (t, e) {
        return t = this.createRange(t.from, t.to), e.pick >= t.from.pick && e.pick <= t.to.pick
    }, n.prototype.overlapRanges = function (t, e) {
        var n = this;
        return t = n.createRange(t.from, t.to), e = n.createRange(e.from, e.to), n.withinRange(t, e.from) || n.withinRange(t, e.to) || n.withinRange(e, t.from) || n.withinRange(e, t.to)
    }, n.prototype.now = function (t, e, n) {
        return e = new Date, n && n.rel && e.setDate(e.getDate() + n.rel), this.normalize(e, n)
    }, n.prototype.navigate = function (t, n, i) {
        var o, r, a, s, l = e.isArray(n), c = e.isPlainObject(n), u = this.item.view;
        if (l || c) {
            for (c ? (r = n.year, a = n.month, s = n.date) : (r = +n[0], a = +n[1], s = +n[2]), i && i.nav && u && u.month !== a && (r = u.year, a = u.month), o = new Date(r, a + (i && i.nav ? i.nav : 0), 1), r = o.getFullYear(), a = o.getMonth(); new Date(r, a, s).getMonth() !== a;)s -= 1;
            n = [r, a, s]
        }
        return n
    }, n.prototype.normalize = function (t) {
        return t.setHours(0, 0, 0, 0), t
    }, n.prototype.measure = function (t, e) {
        var n = this;
        return e ? "string" == typeof e ? e = n.parse(t, e) : i.isInteger(e) && (e = n.now(t, e, {rel: e})) : e = "min" == t ? -(1 / 0) : 1 / 0, e
    }, n.prototype.viewset = function (t, e) {
        return this.create([e.year, e.month, 1])
    }, n.prototype.validate = function (t, n, o) {
        var r, a, s, l, c = this, u = n, h = o && o.interval ? o.interval : 1, d = c.item.enable === -1, f = c.item.min, p = c.item.max, g = d && c.item.disable.filter(function (t) {
                if (e.isArray(t)) {
                    var o = c.create(t).pick;
                    o < n.pick ? r = !0 : o > n.pick && (a = !0)
                }
                return i.isInteger(t)
            }).length;
        if ((!o || !o.nav && !o.defaultValue) && (!d && c.disabled(n) || d && c.disabled(n) && (g || r || a) || !d && (n.pick <= f.pick || n.pick >= p.pick)))for (d && !g && (!a && h > 0 || !r && h < 0) && (h *= -1); c.disabled(n) && (Math.abs(h) > 1 && (n.month < u.month || n.month > u.month) && (n = u, h = h > 0 ? 1 : -1), n.pick <= f.pick ? (s = !0, h = 1, n = c.create([f.year, f.month, f.date + (n.pick === f.pick ? 0 : -1)])) : n.pick >= p.pick && (l = !0, h = -1, n = c.create([p.year, p.month, p.date + (n.pick === p.pick ? 0 : 1)])), !s || !l);)n = c.create([n.year, n.month, n.date + h]);
        return n
    }, n.prototype.disabled = function (t) {
        var n = this, o = n.item.disable.filter(function (o) {
            return i.isInteger(o) ? t.day === (n.settings.firstDay ? o : o - 1) % 7 : e.isArray(o) || i.isDate(o) ? t.pick === n.create(o).pick : e.isPlainObject(o) ? n.withinRange(o, t) : void 0
        });
        return o = o.length && !o.filter(function (t) {
                return e.isArray(t) && "inverted" == t[3] || e.isPlainObject(t) && t.inverted
            }).length, n.item.enable === -1 ? !o : o || t.pick < n.item.min.pick || t.pick > n.item.max.pick
    }, n.prototype.parse = function (t, e, n) {
        var o = this, r = {};
        return e && "string" == typeof e ? (n && n.format || (n = n || {}, n.format = o.settings.format), o.formats.toArray(n.format).map(function (t) {
            var n = o.formats[t], a = n ? i.trigger(n, o, [e, r]) : t.replace(/^!/, "").length;
            n && (r[t] = e.substr(0, a)), e = e.substr(a)
        }), [r.yyyy || r.yy, +(r.mm || r.m) - 1, r.dd || r.d]) : e
    }, n.prototype.formats = function () {
        function t(t, e, n) {
            var i = t.match(/[^\x00-\x7F]+|\w+/)[0];
            return n.mm || n.m || (n.m = e.indexOf(i) + 1), i.length
        }

        function e(t) {
            return t.match(/\w+/)[0].length
        }

        return {
            d: function (t, e) {
                return t ? i.digits(t) : e.date
            }, dd: function (t, e) {
                return t ? 2 : i.lead(e.date)
            }, ddd: function (t, n) {
                return t ? e(t) : this.settings.weekdaysShort[n.day]
            }, dddd: function (t, n) {
                return t ? e(t) : this.settings.weekdaysFull[n.day]
            }, m: function (t, e) {
                return t ? i.digits(t) : e.month + 1
            }, mm: function (t, e) {
                return t ? 2 : i.lead(e.month + 1)
            }, mmm: function (e, n) {
                var i = this.settings.monthsShort;
                return e ? t(e, i, n) : i[n.month]
            }, mmmm: function (e, n) {
                var i = this.settings.monthsFull;
                return e ? t(e, i, n) : i[n.month]
            }, yy: function (t, e) {
                return t ? 2 : ("" + e.year).slice(2)
            }, yyyy: function (t, e) {
                return t ? 4 : e.year
            }, toArray: function (t) {
                return t.split(/(d{1,4}|m{1,4}|y{4}|yy|!.)/g)
            }, toString: function (t, e) {
                var n = this;
                return n.formats.toArray(t).map(function (t) {
                    return i.trigger(n.formats[t], n, [0, e]) || t.replace(/^!/, "")
                }).join("")
            }
        }
    }(), n.prototype.isDateExact = function (t, n) {
        var o = this;
        return i.isInteger(t) && i.isInteger(n) || "boolean" == typeof t && "boolean" == typeof n ? t === n : (i.isDate(t) || e.isArray(t)) && (i.isDate(n) || e.isArray(n)) ? o.create(t).pick === o.create(n).pick : !(!e.isPlainObject(t) || !e.isPlainObject(n)) && (o.isDateExact(t.from, n.from) && o.isDateExact(t.to, n.to))
    }, n.prototype.isDateOverlap = function (t, n) {
        var o = this, r = o.settings.firstDay ? 1 : 0;
        return i.isInteger(t) && (i.isDate(n) || e.isArray(n)) ? (t = t % 7 + r) === o.create(n).day + 1 : i.isInteger(n) && (i.isDate(t) || e.isArray(t)) ? (n = n % 7 + r) === o.create(t).day + 1 : !(!e.isPlainObject(t) || !e.isPlainObject(n)) && o.overlapRanges(t, n)
    }, n.prototype.flipEnable = function (t) {
        var e = this.item;
        e.enable = t || (e.enable == -1 ? 1 : -1)
    }, n.prototype.deactivate = function (t, n) {
        var o = this, r = o.item.disable.slice(0);
        return "flip" == n ? o.flipEnable() : n === !1 ? (o.flipEnable(1), r = []) : n === !0 ? (o.flipEnable(-1), r = []) : n.map(function (t) {
            for (var n, a = 0; a < r.length; a += 1)if (o.isDateExact(t, r[a])) {
                n = !0;
                break
            }
            n || (i.isInteger(t) || i.isDate(t) || e.isArray(t) || e.isPlainObject(t) && t.from && t.to) && r.push(t)
        }), r
    }, n.prototype.activate = function (t, n) {
        var o = this, r = o.item.disable, a = r.length;
        return "flip" == n ? o.flipEnable() : n === !0 ? (o.flipEnable(1), r = []) : n === !1 ? (o.flipEnable(-1), r = []) : n.map(function (t) {
            var n, s, l, c;
            for (l = 0; l < a; l += 1) {
                if (s = r[l], o.isDateExact(s, t)) {
                    n = r[l] = null, c = !0;
                    break
                }
                if (o.isDateOverlap(s, t)) {
                    e.isPlainObject(t) ? (t.inverted = !0, n = t) : e.isArray(t) ? (n = t, n[3] || n.push("inverted")) : i.isDate(t) && (n = [t.getFullYear(), t.getMonth(), t.getDate(), "inverted"]);
                    break
                }
            }
            if (n)for (l = 0; l < a; l += 1)if (o.isDateExact(r[l], t)) {
                r[l] = null;
                break
            }
            if (c)for (l = 0; l < a; l += 1)if (o.isDateOverlap(r[l], t)) {
                r[l] = null;
                break
            }
            n && r.push(n)
        }), r.filter(function (t) {
            return null != t
        })
    }, n.prototype.nodes = function (t) {
        var e = this, n = e.settings, o = e.item, r = o.now, a = o.select, s = o.highlight, l = o.view, c = o.disable, u = o.min, h = o.max, d = function (t, e) {
            return n.firstDay && (t.push(t.shift()), e.push(e.shift())), i.node("thead", i.node("tr", i.group({
                min: 0,
                max: 6,
                i: 1,
                node: "th",
                item: function (i) {
                    return [t[i], n.klass.weekdays, 'scope=col title="' + e[i] + '"']
                }
            })))
        }((n.showWeekdaysFull ? n.weekdaysFull : n.weekdaysShort).slice(0), n.weekdaysFull.slice(0)), f = function (t) {
            return i.node("div", " ", n.klass["nav" + (t ? "Next" : "Prev")] + (t && l.year >= h.year && l.month >= h.month || !t && l.year <= u.year && l.month <= u.month ? " " + n.klass.navDisabled : ""), "data-nav=" + (t || -1) + " " + i.ariaAttr({
                    role: "button",
                    controls: e.$node[0].id + "_table"
                }) + ' title="' + (t ? n.labelMonthNext : n.labelMonthPrev) + '"')
        }, p = function () {
            var o = n.showMonthsShort ? n.monthsShort : n.monthsFull;
            return n.selectMonths ? i.node("select", i.group({
                min: 0,
                max: 11,
                i: 1,
                node: "option",
                item: function (t) {
                    return [o[t], 0, "value=" + t + (l.month == t ? " selected" : "") + (l.year == u.year && t < u.month || l.year == h.year && t > h.month ? " disabled" : "")]
                }
            }), n.klass.selectMonth, (t ? "" : "disabled") + " " + i.ariaAttr({controls: e.$node[0].id + "_table"}) + ' title="' + n.labelMonthSelect + '"') : i.node("div", o[l.month], n.klass.month)
        }, g = function () {
            var o = l.year, r = n.selectYears === !0 ? 5 : ~~(n.selectYears / 2);
            if (r) {
                var a = u.year, s = h.year, c = o - r, d = o + r;
                if (a > c && (d += a - c, c = a), s < d) {
                    var f = c - a, p = d - s;
                    c -= f > p ? p : f, d = s
                }
                return i.node("select", i.group({
                    min: c, max: d, i: 1, node: "option", item: function (t) {
                        return [t, 0, "value=" + t + (o == t ? " selected" : "")]
                    }
                }), n.klass.selectYear, (t ? "" : "disabled") + " " + i.ariaAttr({controls: e.$node[0].id + "_table"}) + ' title="' + n.labelYearSelect + '"')
            }
            return i.node("div", o, n.klass.year)
        };
        return i.node("div", (n.selectYears ? g() + p() : p() + g()) + f() + f(1), n.klass.header) + i.node("table", d + i.node("tbody", i.group({
                    min: 0,
                    max: 5,
                    i: 1,
                    node: "tr",
                    item: function (t) {
                        var o = n.firstDay && 0 === e.create([l.year, l.month, 1]).day ? -7 : 0;
                        return [i.group({
                            min: 7 * t - l.day + o + 1, max: function () {
                                return this.min + 7 - 1
                            }, i: 1, node: "td", item: function (t) {
                                t = e.create([l.year, l.month, t + (n.firstDay ? 1 : 0)]);
                                var o = a && a.pick == t.pick, d = s && s.pick == t.pick, f = c && e.disabled(t) || t.pick < u.pick || t.pick > h.pick, p = i.trigger(e.formats.toString, e, [n.format, t]);
                                return [i.node("div", t.date, function (e) {
                                    return e.push(l.month == t.month ? n.klass.infocus : n.klass.outfocus), r.pick == t.pick && e.push(n.klass.now), o && e.push(n.klass.selected), d && e.push(n.klass.highlighted), f && e.push(n.klass.disabled), e.join(" ")
                                }([n.klass.day]), "data-pick=" + t.pick + " " + i.ariaAttr({
                                        role: "gridcell",
                                        label: p,
                                        selected: !(!o || e.$node.val() !== p) || null,
                                        activedescendant: !!d || null,
                                        disabled: !!f || null
                                    })), "", i.ariaAttr({role: "presentation"})]
                            }
                        })]
                    }
                })), n.klass.table, 'id="' + e.$node[0].id + '_table" ' + i.ariaAttr({
                    role: "grid",
                    controls: e.$node[0].id,
                    readonly: !0
                })) + i.node("div", i.node("button", n.today, n.klass.buttonToday, "type=button data-pick=" + r.pick + (t && !e.disabled(r) ? "" : " disabled") + " " + i.ariaAttr({controls: e.$node[0].id})) + i.node("button", n.clear, n.klass.buttonClear, "type=button data-clear=1" + (t ? "" : " disabled") + " " + i.ariaAttr({controls: e.$node[0].id})) + i.node("button", n.close, n.klass.buttonClose, "type=button data-close=true " + (t ? "" : " disabled") + " " + i.ariaAttr({controls: e.$node[0].id})), n.klass.footer)
    }, n.defaults = function (t) {
        return {
            labelMonthNext: "Next month",
            labelMonthPrev: "Previous month",
            labelMonthSelect: "Select a month",
            labelYearSelect: "Select a year",
            monthsFull: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
            monthsShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            weekdaysFull: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            weekdaysShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
            today: "Today",
            clear: "Clear",
            close: "Close",
            closeOnSelect: !0,
            closeOnClear: !0,
            format: "d mmmm, yyyy",
            klass: {
                table: t + "table",
                header: t + "header",
                navPrev: t + "nav--prev",
                navNext: t + "nav--next",
                navDisabled: t + "nav--disabled",
                month: t + "month",
                year: t + "year",
                selectMonth: t + "select--month",
                selectYear: t + "select--year",
                weekdays: t + "weekday",
                day: t + "day",
                disabled: t + "day--disabled",
                selected: t + "day--selected",
                highlighted: t + "day--highlighted",
                now: t + "day--today",
                infocus: t + "day--infocus",
                outfocus: t + "day--outfocus",
                footer: t + "footer",
                buttonClear: t + "button--clear",
                buttonToday: t + "button--today",
                buttonClose: t + "button--close"
            }
        }
    }(t.klasses().picker + "__"), t.extend("pickadate", n)
}), $.extend($.fn.pickadate.defaults, {
    selectMonths: !0, selectYears: 15, onRender: function () {
        var t = this.$root, e = this.get("highlight", "yyyy"), n = this.get("highlight", "dd"), i = this.get("highlight", "mmm"), o = this.get("highlight", "dddd");
        t.find(".picker__header").prepend('<div class="picker__date-display"><div class="picker__weekday-display">' + o + '</div><div class="picker__month-display"><div>' + i + '</div></div><div class="picker__day-display"><div>' + n + '</div></div><div    class="picker__year-display"><div>' + e + "</div></div></div>")
    }
}), function () {
    function t(t) {
        return document.createElementNS(l, t)
    }

    function e(t) {
        return (t < 10 ? "0" : "") + t
    }

    function n(t) {
        var e = ++m + "";
        return t ? t + e : e
    }

    function i(i, a) {
        function l(t, e) {
            var n = h.offset(), i = /^touch/.test(t.type), o = n.left + v, r = n.top + v, l = (i ? t.originalEvent.touches[0] : t).pageX - o, u = (i ? t.originalEvent.touches[0] : t).pageY - r, d = Math.sqrt(l * l + u * u), g = !1;
            if (!e || !(d < y - w || d > y + w)) {
                t.preventDefault();
                var m = setTimeout(function () {
                    P.popover.addClass("clockpicker-moving")
                }, 200);
                c && h.append(P.canvas), P.setHand(l, u, !e, !0), s.off(f).on(f, function (t) {
                    t.preventDefault();
                    var e = /^touch/.test(t.type), n = (e ? t.originalEvent.touches[0] : t).pageX - o, i = (e ? t.originalEvent.touches[0] : t).pageY - r;
                    (g || n !== l || i !== u) && (g = !0, P.setHand(n, i, !1, !0))
                }), s.off(p).on(p, function (t) {
                    s.off(p), t.preventDefault();
                    var n = /^touch/.test(t.type), i = (n ? t.originalEvent.changedTouches[0] : t).pageX - o, c = (n ? t.originalEvent.changedTouches[0] : t).pageY - r;
                    (e || g) && i === l && c === u && P.setHand(i, c), "hours" === P.currentView ? P.toggleView("minutes", C / 2) : a.autoclose && (P.minutesView.addClass("clockpicker-dial-out"), setTimeout(function () {
                        P.done()
                    }, C / 2)), h.prepend(R), clearTimeout(m), P.popover.removeClass("clockpicker-moving"), s.off(f)
                })
            }
        }

        var u = r(T), h = u.find(".clockpicker-plate"), g = u.find(".picker__holder"), m = u.find(".clockpicker-hours"), S = u.find(".clockpicker-minutes"), E = u.find(".clockpicker-am-pm-block"), k = "INPUT" === i.prop("tagName"), A = k ? i : i.find("input"), _ = r("label[for=" + A.attr("id") + "]"), P = this;
        if (this.id = n("cp"), this.element = i, this.holder = g, this.options = a, this.isAppended = !1, this.isShown = !1, this.currentView = "hours", this.isInput = k, this.input = A, this.label = _, this.popover = u, this.plate = h, this.hoursView = m, this.minutesView = S, this.amPmBlock = E, this.spanHours = u.find(".clockpicker-span-hours"), this.spanMinutes = u.find(".clockpicker-span-minutes"), this.spanAmPm = u.find(".clockpicker-span-am-pm"), this.footer = u.find(".picker__footer"), this.amOrPm = "PM", a.twelvehour) {
            var I = ['<div class="clockpicker-am-pm-block">', '<button type="button" class="btn-floating btn-flat clockpicker-button clockpicker-am-button">', "AM", "</button>", '<button type="button" class="btn-floating btn-flat clockpicker-button clockpicker-pm-button">', "PM", "</button>", "</div>"].join("");
            r(I);
            a.ampmclickable ? (this.spanAmPm.empty(), r('<div id="click-am">AM</div>').on("click", function () {
                P.spanAmPm.children("#click-am").addClass("text-primary"), P.spanAmPm.children("#click-pm").removeClass("text-primary"), P.amOrPm = "AM"
            }).appendTo(this.spanAmPm), r('<div id="click-pm">PM</div>').on("click", function () {
                P.spanAmPm.children("#click-pm").addClass("text-primary"), P.spanAmPm.children("#click-am").removeClass("text-primary"), P.amOrPm = "PM"
            }).appendTo(this.spanAmPm)) : (r('<button type="button" class="btn-floating btn-flat clockpicker-button am-button" tabindex="1">AM</button>').on("click", function () {
                P.amOrPm = "AM", P.amPmBlock.children(".pm-button").removeClass("active"), P.amPmBlock.children(".am-button").addClass("active"), P.spanAmPm.empty().append("AM")
            }).appendTo(this.amPmBlock), r('<button type="button" class="btn-floating btn-flat clockpicker-button pm-button" tabindex="2">PM</button>').on("click", function () {
                P.amOrPm = "PM", P.amPmBlock.children(".am-button").removeClass("active"), P.amPmBlock.children(".pm-button").addClass("active"), P.spanAmPm.empty().append("PM")
            }).appendTo(this.amPmBlock))
        }
        a.darktheme && u.addClass("darktheme"), r('<button type="button" class="btn-flat clockpicker-button" tabindex="' + (a.twelvehour ? "3" : "1") + '">' + a.donetext + "</button>").click(r.proxy(this.done, this)).appendTo(this.footer), this.spanHours.click(r.proxy(this.toggleView, this, "hours")), this.spanMinutes.click(r.proxy(this.toggleView, this, "minutes")), A.on("focus.clockpicker click.clockpicker", r.proxy(this.show, this));
        var D, O, L, F, N = r('<div class="clockpicker-tick"></div>');
        if (a.twelvehour)for (D = 1; D < 13; D += 1)O = N.clone(), L = D / 6 * Math.PI, F = y, O.css("font-size", "140%"), O.css({
            left: v + Math.sin(L) * F - w,
            top: v - Math.cos(L) * F - w
        }), O.html(0 === D ? "00" : D), m.append(O), O.on(d, l); else for (D = 0; D < 24; D += 1) {
            O = N.clone(), L = D / 6 * Math.PI;
            var M = D > 0 && D < 13;
            F = M ? b : y, O.css({
                left: v + Math.sin(L) * F - w,
                top: v - Math.cos(L) * F - w
            }), M && O.css("font-size", "120%"), O.html(0 === D ? "00" : D), m.append(O), O.on(d, l)
        }
        for (D = 0; D < 60; D += 5)O = N.clone(), L = D / 30 * Math.PI, O.css({
            left: v + Math.sin(L) * y - w,
            top: v - Math.cos(L) * y - w
        }), O.css("font-size", "140%"), O.html(e(D)), S.append(O), O.on(d, l);
        if (h.on(d, function (t) {
                0 === r(t.target).closest(".clockpicker-tick").length && l(t, !0)
            }), c) {
            var R = u.find(".clockpicker-canvas"), W = t("svg");
            W.setAttribute("class", "clockpicker-svg"), W.setAttribute("width", x), W.setAttribute("height", x);
            var H = t("g");
            H.setAttribute("transform", "translate(" + v + "," + v + ")");
            var j = t("circle");
            j.setAttribute("class", "clockpicker-canvas-bearing"), j.setAttribute("cx", 0), j.setAttribute("cy", 0), j.setAttribute("r", 2);
            var z = t("line");
            z.setAttribute("x1", 0), z.setAttribute("y1", 0);
            var V = t("circle");
            V.setAttribute("class", "clockpicker-canvas-bg"), V.setAttribute("r", w);
            var B = t("circle");
            B.setAttribute("class", "clockpicker-canvas-fg"), B.setAttribute("r", 5), H.appendChild(z), H.appendChild(V), H.appendChild(B), H.appendChild(j), W.appendChild(H), R.append(W), this.hand = z, this.bg = V, this.fg = B, this.bearing = j, this.g = H, this.canvas = R
        }
        o(this.options.init)
    }

    function o(t) {
        t && "function" == typeof t && t()
    }

    var r = window.jQuery, a = r(window), s = r(document), l = "http://www.w3.org/2000/svg", c = "SVGAngle" in window && function () {
            var t, e = document.createElement("div");
            return e.innerHTML = "<svg/>", t = (e.firstChild && e.firstChild.namespaceURI) == l, e.innerHTML = "", t
        }(), u = function () {
        var t = document.createElement("div").style;
        return "transition" in t || "WebkitTransition" in t || "MozTransition" in t || "msTransition" in t || "OTransition" in t
    }(), h = "ontouchstart" in window, d = "mousedown" + (h ? " touchstart" : ""), f = "mousemove.clockpicker" + (h ? " touchmove.clockpicker" : ""), p = "mouseup.clockpicker" + (h ? " touchend.clockpicker" : ""), g = navigator.vibrate ? "vibrate" : navigator.webkitVibrate ? "webkitVibrate" : null, m = 0, v = 135, y = 110, b = 80, w = 20, x = 2 * v, C = u ? 350 : 1, T = ['<div class="clockpicker picker">', '<div class="picker__holder">', '<div class="picker__frame">', '<div class="picker__wrap">', '<div class="picker__box">', '<div class="picker__date-display">', '<div class="clockpicker-display">', '<div class="clockpicker-display-column">', '<span class="clockpicker-span-hours text-primary"></span>', ":", '<span class="clockpicker-span-minutes"></span>', "</div>", '<div class="clockpicker-display-column clockpicker-display-am-pm">', '<div class="clockpicker-span-am-pm"></div>', "</div>", "</div>", "</div>", '<div class="picker__calendar-container">', '<div class="clockpicker-plate">', '<div class="clockpicker-canvas"></div>', '<div class="clockpicker-dial clockpicker-hours"></div>', '<div class="clockpicker-dial clockpicker-minutes clockpicker-dial-out"></div>', "</div>", '<div class="clockpicker-am-pm-block">', "</div>", "</div>", '<div class="picker__footer">', "</div>", "</div>", "</div>", "</div>", "</div>", "</div>"].join("");
    i.DEFAULTS = {
        default: "",
        fromnow: 0,
        donetext: "Done",
        autoclose: !1,
        ampmclickable: !1,
        darktheme: !1,
        twelvehour: !0,
        vibrate: !0
    }, i.prototype.toggle = function () {
        this[this.isShown ? "hide" : "show"]()
    }, i.prototype.locate = function () {
        var t = this.element, e = this.popover;
        t.offset(), t.outerWidth(), t.outerHeight(), this.options.align;
        e.show()
    }, i.prototype.show = function (t) {
        if (!this.isShown) {
            o(this.options.beforeShow), r(":input").each(function () {
                r(this).attr("tabindex", -1)
            });
            var n = this;
            this.input.blur(), this.popover.addClass("picker--opened"), this.input.addClass("picker__input picker__input--active"), r(document.body).css("overflow", "hidden"), this.isAppended || (this.popover.insertAfter(this.input), this.options.twelvehour && (this.amOrPm = "PM", this.options.ampmclickable ? (this.spanAmPm.children("#click-pm").addClass("text-primary"), this.spanAmPm.children("#click-am").removeClass("text-primary")) : (this.amPmBlock.children(".am-button").removeClass("active"), this.amPmBlock.children(".pm-button").addClass("active"), this.spanAmPm.empty().append("PM"))), a.on("resize.clockpicker" + this.id, function () {
                n.isShown && n.locate()
            }), this.isAppended = !0);
            var i = ((this.input.prop("value") || this.options.default || "") + "").split(":");
            if (this.options.twelvehour && void 0 !== i[1] && (i[1] = i[1].replace("AM", "").replace("PM", "")), "now" === i[0]) {
                var l = new Date(+new Date + this.options.fromnow);
                i = [l.getHours(), l.getMinutes()]
            }
            this.hours = +i[0] || 0, this.minutes = +i[1] || 0, this.spanHours.html(e(this.hours)), this.spanMinutes.html(e(this.minutes)), this.toggleView("hours"), this.locate(), this.isShown = !0, s.on("click.clockpicker." + this.id + " focusin.clockpicker." + this.id, function (t) {
                var e = r(t.target);
                0 === e.closest(n.popover.find(".picker__wrap")).length && 0 === e.closest(n.input).length && n.hide()
            }), s.on("keyup.clockpicker." + this.id, function (t) {
                27 === t.keyCode && n.hide()
            }), o(this.options.afterShow)
        }
    }, i.prototype.hide = function () {
        o(this.options.beforeHide), this.input.removeClass("picker__input picker__input--active"), this.popover.removeClass("picker--opened"), r(document.body).css("overflow", "visible"), this.isShown = !1, r(":input").each(function (t) {
            r(this).attr("tabindex", t + 1)
        }), s.off("click.clockpicker." + this.id + " focusin.clockpicker." + this.id), s.off("keyup.clockpicker." + this.id), this.popover.hide(), o(this.options.afterHide)
    }, i.prototype.toggleView = function (t, e) {
        var n = !1;
        "minutes" === t && "visible" === r(this.hoursView).css("visibility") && (o(this.options.beforeHourSelect), n = !0);
        var i = "hours" === t, a = i ? this.hoursView : this.minutesView, s = i ? this.minutesView : this.hoursView;
        this.currentView = t, this.spanHours.toggleClass("text-primary", i), this.spanMinutes.toggleClass("text-primary", !i), s.addClass("clockpicker-dial-out"), a.css("visibility", "visible").removeClass("clockpicker-dial-out"), this.resetClock(e), clearTimeout(this.toggleViewTimer), this.toggleViewTimer = setTimeout(function () {
            s.css("visibility", "hidden")
        }, C), n && o(this.options.afterHourSelect)
    }, i.prototype.resetClock = function (t) {
        var e = this.currentView, n = this[e], i = "hours" === e, o = Math.PI / (i ? 6 : 30), r = n * o, a = i && n > 0 && n < 13 ? b : y, s = Math.sin(r) * a, l = -Math.cos(r) * a, u = this;
        c && t ? (u.canvas.addClass("clockpicker-canvas-out"), setTimeout(function () {
            u.canvas.removeClass("clockpicker-canvas-out"), u.setHand(s, l)
        }, t)) : this.setHand(s, l)
    }, i.prototype.setHand = function (t, n, i, o) {
        var a, s = Math.atan2(t, -n), l = "hours" === this.currentView, u = Math.PI / (l || i ? 6 : 30), h = Math.sqrt(t * t + n * n), d = this.options, f = l && h < (y + b) / 2, p = f ? b : y;
        if (d.twelvehour && (p = y), s < 0 && (s = 2 * Math.PI + s), a = Math.round(s / u), s = a * u, d.twelvehour ? l ? 0 === a && (a = 12) : (i && (a *= 5), 60 === a && (a = 0)) : l ? (12 === a && (a = 0), a = f ? 0 === a ? 12 : a : 0 === a ? 0 : a + 12) : (i && (a *= 5), 60 === a && (a = 0)), l ? this.fg.setAttribute("class", "clockpicker-canvas-fg") : a % 5 == 0 ? this.fg.setAttribute("class", "clockpicker-canvas-fg") : this.fg.setAttribute("class", "clockpicker-canvas-fg active"), this[this.currentView] !== a && g && this.options.vibrate && (this.vibrateTimer || (navigator[g](10), this.vibrateTimer = setTimeout(r.proxy(function () {
                this.vibrateTimer = null
            }, this), 100))), this[this.currentView] = a, this[l ? "spanHours" : "spanMinutes"].html(e(a)), !c)return void this[l ? "hoursView" : "minutesView"].find(".clockpicker-tick").each(function () {
            var t = r(this);
            t.toggleClass("active", a === +t.html())
        });
        o || !l && a % 5 ? (this.g.insertBefore(this.hand, this.bearing), this.g.insertBefore(this.bg, this.fg), this.bg.setAttribute("class", "clockpicker-canvas-bg clockpicker-canvas-bg-trans")) : (this.g.insertBefore(this.hand, this.bg), this.g.insertBefore(this.fg, this.bg), this.bg.setAttribute("class", "clockpicker-canvas-bg"));
        var m = Math.sin(s) * (p - w), v = -Math.cos(s) * (p - w), x = Math.sin(s) * p, C = -Math.cos(s) * p;
        this.hand.setAttribute("x2", m), this.hand.setAttribute("y2", v), this.bg.setAttribute("cx", x), this.bg.setAttribute("cy", C), this.fg.setAttribute("cx", x), this.fg.setAttribute("cy", C)
    }, i.prototype.done = function () {
        o(this.options.beforeDone), this.hide(), this.label.addClass("active");
        var t = this.input.prop("value"), n = e(this.hours) + ":" + e(this.minutes);
        this.options.twelvehour && (n += this.amOrPm), this.input.prop("value", n), n !== t && (this.input.triggerHandler("change"), this.isInput || this.element.trigger("change")), this.options.autoclose && this.input.trigger("blur"), o(this.options.afterDone)
    }, i.prototype.remove = function () {
        this.element.removeData("clockpicker"), this.input.off("focus.clockpicker click.clockpicker"), this.isShown && this.hide(), this.isAppended && (a.off("resize.clockpicker" + this.id), this.popover.remove())
    }, r.fn.pickatime = function (t) {
        var e = Array.prototype.slice.call(arguments, 1);
        return this.each(function () {
            var n = r(this), o = n.data("clockpicker");
            if (o)"function" == typeof o[t] && o[t].apply(o, e); else {
                var a = r.extend({}, i.DEFAULTS, n.data(), "object" == typeof t && t);
                n.data("clockpicker", new i(n, a))
            }
        })
    }
}(), function (t, e) {
    "function" == typeof define && define.amd ? define(e) : "object" == typeof exports ? module.exports = e() : t.PhotoSwipe = e()
}(this, function () {
    "use strict";
    return function (t, e, n, i) {
        var o = {
            features: null, bind: function (t, e, n, i) {
                var o = (i ? "remove" : "add") + "EventListener";
                e = e.split(" ");
                for (var r = 0; r < e.length; r++)e[r] && t[o](e[r], n, !1)
            }, isArray: function (t) {
                return t instanceof Array
            }, createEl: function (t, e) {
                var n = document.createElement(e || "div");
                return t && (n.className = t), n
            }, getScrollY: function () {
                var t = window.pageYOffset;
                return void 0 !== t ? t : document.documentElement.scrollTop
            }, unbind: function (t, e, n) {
                o.bind(t, e, n, !0)
            }, removeClass: function (t, e) {
                var n = new RegExp("(\\s|^)" + e + "(\\s|$)");
                t.className = t.className.replace(n, " ").replace(/^\s\s*/, "").replace(/\s\s*$/, "")
            }, addClass: function (t, e) {
                o.hasClass(t, e) || (t.className += (t.className ? " " : "") + e)
            }, hasClass: function (t, e) {
                return t.className && new RegExp("(^|\\s)" + e + "(\\s|$)").test(t.className)
            }, getChildByClass: function (t, e) {
                for (var n = t.firstChild; n;) {
                    if (o.hasClass(n, e))return n;
                    n = n.nextSibling
                }
            }, arraySearch: function (t, e, n) {
                for (var i = t.length; i--;)if (t[i][n] === e)return i;
                return -1
            }, extend: function (t, e, n) {
                for (var i in e)if (e.hasOwnProperty(i)) {
                    if (n && t.hasOwnProperty(i))continue;
                    t[i] = e[i]
                }
            }, easing: {
                sine: {
                    out: function (t) {
                        return Math.sin(t * (Math.PI / 2))
                    }, inOut: function (t) {
                        return -(Math.cos(Math.PI * t) - 1) / 2
                    }
                }, cubic: {
                    out: function (t) {
                        return --t * t * t + 1
                    }
                }
            }, detectFeatures: function () {
                if (o.features)return o.features;
                var t = o.createEl(), e = t.style, n = "", i = {};
                if (i.oldIE = document.all && !document.addEventListener, i.touch = "ontouchstart" in window, window.requestAnimationFrame && (i.raf = window.requestAnimationFrame, i.caf = window.cancelAnimationFrame), i.pointerEvent = navigator.pointerEnabled || navigator.msPointerEnabled, !i.pointerEvent) {
                    var r = navigator.userAgent;
                    if (/iP(hone|od)/.test(navigator.platform)) {
                        var a = navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/);
                        a && a.length > 0 && (a = parseInt(a[1], 10)) >= 1 && 8 > a && (i.isOldIOSPhone = !0)
                    }
                    var s = r.match(/Android\s([0-9\.]*)/), l = s ? s[1] : 0;
                    l = parseFloat(l), l >= 1 && (4.4 > l && (i.isOldAndroid = !0), i.androidVersion = l), i.isMobileOpera = /opera mini|opera mobi/i.test(r)
                }
                for (var c, u, h = ["transform", "perspective", "animationName"], d = ["", "webkit", "Moz", "ms", "O"], f = 0; 4 > f; f++) {
                    n = d[f];
                    for (var p = 0; 3 > p; p++)c = h[p], u = n + (n ? c.charAt(0).toUpperCase() + c.slice(1) : c), !i[c] && u in e && (i[c] = u);
                    n && !i.raf && (n = n.toLowerCase(), i.raf = window[n + "RequestAnimationFrame"], i.raf && (i.caf = window[n + "CancelAnimationFrame"] || window[n + "CancelRequestAnimationFrame"]))
                }
                if (!i.raf) {
                    var g = 0;
                    i.raf = function (t) {
                        var e = (new Date).getTime(), n = Math.max(0, 16 - (e - g)), i = window.setTimeout(function () {
                            t(e + n)
                        }, n);
                        return g = e + n, i
                    }, i.caf = function (t) {
                        clearTimeout(t)
                    }
                }
                return i.svg = !!document.createElementNS && !!document.createElementNS("http://www.w3.org/2000/svg", "svg").createSVGRect, o.features = i, i
            }
        };
        o.detectFeatures(), o.features.oldIE && (o.bind = function (t, e, n, i) {
            e = e.split(" ");
            for (var o, r = (i ? "detach" : "attach") + "Event", a = function () {
                n.handleEvent.call(n)
            }, s = 0; s < e.length; s++)if (o = e[s])if ("object" == typeof n && n.handleEvent) {
                if (i) {
                    if (!n["oldIE" + o])return !1
                } else n["oldIE" + o] = a;
                t[r]("on" + o, n["oldIE" + o])
            } else t[r]("on" + o, n)
        });
        var r = this, a = {
            allowPanToNext: !0,
            spacing: .12,
            bgOpacity: 1,
            mouseUsed: !1,
            loop: !0,
            pinchToClose: !0,
            closeOnScroll: !0,
            closeOnVerticalDrag: !0,
            verticalDragRange: .75,
            hideAnimationDuration: 333,
            showAnimationDuration: 333,
            showHideOpacity: !1,
            focus: !0,
            escKey: !0,
            arrowKeys: !0,
            mainScrollEndFriction: .35,
            panEndFriction: .35,
            isClickableElement: function (t) {
                return "A" === t.tagName
            },
            getDoubleTapZoom: function (t, e) {
                return t ? 1 : e.initialZoomLevel < .7 ? 1 : 1.33
            },
            maxSpreadZoom: 1.33,
            modal: !0,
            scaleMode: "fit"
        };
        o.extend(a, i);
        var s, l, c, u, h, d, f, p, g, m, v, y, b, w, x, C, T, S, E, k, A, _, P, I, D, O, L, F, N, M, R, W, H, j, z, V, B, q, Y, X, $, U, Q, G, Z, K, J, tt, et, nt, it, ot, rt, at, st, lt, ct = function () {
            return {x: 0, y: 0}
        }, ut = ct(), ht = ct(), dt = ct(), ft = {}, pt = 0, gt = {}, mt = ct(), vt = 0, yt = !0, bt = [], wt = {}, xt = !1, Ct = function (t, e) {
            o.extend(r, e.publicMethods), bt.push(t)
        }, Tt = function (t) {
            var e = Qe();
            return t > e - 1 ? t - e : 0 > t ? e + t : t
        }, St = {}, Et = function (t, e) {
            return St[t] || (St[t] = []), St[t].push(e)
        }, kt = function (t) {
            var e = St[t];
            if (e) {
                var n = Array.prototype.slice.call(arguments);
                n.shift();
                for (var i = 0; i < e.length; i++)e[i].apply(r, n)
            }
        }, At = function () {
            return (new Date).getTime()
        }, _t = function (t) {
            at = t, r.bg.style.opacity = t * a.bgOpacity
        }, Pt = function (t, e, n, i, o) {
            (!xt || o && o !== r.currItem) && (i /= o ? o.fitRatio : r.currItem.fitRatio), t[_] = y + e + "px, " + n + "px" + b + " scale(" + i + ")"
        }, It = function (t) {
            et && (t && (m > r.currItem.fitRatio ? xt || (ln(r.currItem, !1, !0), xt = !0) : xt && (ln(r.currItem), xt = !1)), Pt(et, dt.x, dt.y, m))
        }, Dt = function (t) {
            t.container && Pt(t.container.style, t.initialPosition.x, t.initialPosition.y, t.initialZoomLevel, t)
        }, Ot = function (t, e) {
            e[_] = y + t + "px, 0px" + b
        }, Lt = function (t, e) {
            if (!a.loop && e) {
                var n = u + (mt.x * pt - t) / mt.x, i = Math.round(t - pe.x);
                (0 > n && i > 0 || n >= Qe() - 1 && 0 > i) && (t = pe.x + i * a.mainScrollEndFriction)
            }
            pe.x = t, Ot(t, h)
        }, Ft = function (t, e) {
            var n = ge[t] - gt[t];
            return ht[t] + ut[t] + n - n * (e / v)
        }, Nt = function (t, e) {
            t.x = e.x, t.y = e.y, e.id && (t.id = e.id)
        }, Mt = function (t) {
            t.x = Math.round(t.x), t.y = Math.round(t.y)
        }, Rt = null, Wt = function () {
            Rt && (o.unbind(document, "mousemove", Wt), o.addClass(t, "pswp--has_mouse"), a.mouseUsed = !0, kt("mouseUsed")), Rt = setTimeout(function () {
                Rt = null
            }, 100)
        }, Ht = function () {
            o.bind(document, "keydown", r), R.transform && o.bind(r.scrollWrap, "click", r), a.mouseUsed || o.bind(document, "mousemove", Wt), o.bind(window, "resize scroll", r), kt("bindEvents")
        }, jt = function () {
            o.unbind(window, "resize", r), o.unbind(window, "scroll", g.scroll), o.unbind(document, "keydown", r), o.unbind(document, "mousemove", Wt), R.transform && o.unbind(r.scrollWrap, "click", r), q && o.unbind(window, f, r), kt("unbindEvents")
        }, zt = function (t, e) {
            var n = on(r.currItem, ft, t);
            return e && (tt = n), n
        }, Vt = function (t) {
            return t || (t = r.currItem), t.initialZoomLevel
        }, Bt = function (t) {
            return t || (t = r.currItem), t.w > 0 ? a.maxSpreadZoom : 1
        }, qt = function (t, e, n, i) {
            return i === r.currItem.initialZoomLevel ? (n[t] = r.currItem.initialPosition[t], !0) : (n[t] = Ft(t, i), n[t] > e.min[t] ? (n[t] = e.min[t], !0) : n[t] < e.max[t] && (n[t] = e.max[t], !0))
        }, Yt = function () {
            if (_) {
                return y = "translate" + (R.perspective && !I ? "3d(" : "("), void(b = R.perspective ? ", 0px)" : ")")
            }
            _ = "left", o.addClass(t, "pswp--ie"), Ot = function (t, e) {
                e.left = t + "px"
            }, Dt = function (t) {
                var e = t.fitRatio > 1 ? 1 : t.fitRatio, n = t.container.style, i = e * t.w, o = e * t.h;
                n.width = i + "px", n.height = o + "px", n.left = t.initialPosition.x + "px", n.top = t.initialPosition.y + "px"
            }, It = function () {
                if (et) {
                    var t = et, e = r.currItem, n = e.fitRatio > 1 ? 1 : e.fitRatio, i = n * e.w, o = n * e.h;
                    t.width = i + "px", t.height = o + "px", t.left = dt.x + "px", t.top = dt.y + "px"
                }
            }
        }, Xt = function (t) {
            var e = "";
            a.escKey && 27 === t.keyCode ? e = "close" : a.arrowKeys && (37 === t.keyCode ? e = "prev" : 39 === t.keyCode && (e = "next")), e && (t.ctrlKey || t.altKey || t.shiftKey || t.metaKey || (t.preventDefault ? t.preventDefault() : t.returnValue = !1, r[e]()))
        }, $t = function (t) {
            t && ($ || X || nt || V) && (t.preventDefault(), t.stopPropagation())
        }, Ut = function () {
            r.setScrollOffset(0, o.getScrollY())
        }, Qt = {}, Gt = 0, Zt = function (t) {
            Qt[t] && (Qt[t].raf && O(Qt[t].raf), Gt--, delete Qt[t])
        }, Kt = function (t) {
            Qt[t] && Zt(t), Qt[t] || (Gt++, Qt[t] = {})
        }, Jt = function () {
            for (var t in Qt)Qt.hasOwnProperty(t) && Zt(t)
        }, te = function (t, e, n, i, o, r, a) {
            var s, l = At();
            Kt(t);
            var c = function () {
                if (Qt[t]) {
                    if ((s = At() - l) >= i)return Zt(t), r(n), void(a && a());
                    r((n - e) * o(s / i) + e), Qt[t].raf = D(c)
                }
            };
            c()
        }, ee = {
            shout: kt, listen: Et, viewportSize: ft, options: a, isMainScrollAnimating: function () {
                return nt
            }, getZoomLevel: function () {
                return m
            }, getCurrentIndex: function () {
                return u
            }, isDragging: function () {
                return q
            }, isZooming: function () {
                return Z
            }, setScrollOffset: function (t, e) {
                gt.x = t, M = gt.y = e, kt("updateScrollOffset", gt)
            }, applyZoomPan: function (t, e, n, i) {
                dt.x = e, dt.y = n, m = t, It(i)
            }, init: function () {
                if (!s && !l) {
                    var n;
                    r.framework = o, r.template = t, r.bg = o.getChildByClass(t, "pswp__bg"), L = t.className, s = !0, R = o.detectFeatures(), D = R.raf, O = R.caf, _ = R.transform, N = R.oldIE, r.scrollWrap = o.getChildByClass(t, "pswp__scroll-wrap"), r.container = o.getChildByClass(r.scrollWrap, "pswp__container"), h = r.container.style, r.itemHolders = C = [{
                        el: r.container.children[0],
                        wrap: 0,
                        index: -1
                    }, {el: r.container.children[1], wrap: 0, index: -1}, {
                        el: r.container.children[2],
                        wrap: 0,
                        index: -1
                    }], C[0].el.style.display = C[2].el.style.display = "none", Yt(), g = {
                        resize: r.updateSize,
                        scroll: Ut,
                        keydown: Xt,
                        click: $t
                    };
                    var i = R.isOldIOSPhone || R.isOldAndroid || R.isMobileOpera;
                    for (R.animationName && R.transform && !i || (a.showAnimationDuration = a.hideAnimationDuration = 0), n = 0; n < bt.length; n++)r["init" + bt[n]]();
                    if (e) {
                        (r.ui = new e(r, o)).init()
                    }
                    kt("firstUpdate"), u = u || a.index || 0, (isNaN(u) || 0 > u || u >= Qe()) && (u = 0), r.currItem = Ue(u), (R.isOldIOSPhone || R.isOldAndroid) && (yt = !1), t.setAttribute("aria-hidden", "false"), a.modal && (yt ? t.style.position = "fixed" : (t.style.position = "absolute", t.style.top = o.getScrollY() + "px")), void 0 === M && (kt("initialLayout"), M = F = o.getScrollY());
                    var c = "pswp--open ";
                    for (a.mainClass && (c += a.mainClass + " "), a.showHideOpacity && (c += "pswp--animate_opacity "), c += I ? "pswp--touch" : "pswp--notouch", c += R.animationName ? " pswp--css_animation" : "", c += R.svg ? " pswp--svg" : "", o.addClass(t, c), r.updateSize(), d = -1, vt = null, n = 0; 3 > n; n++)Ot((n + d) * mt.x, C[n].el.style);
                    N || o.bind(r.scrollWrap, p, r), Et("initialZoomInEnd", function () {
                        r.setContent(C[0], u - 1), r.setContent(C[2], u + 1), C[0].el.style.display = C[2].el.style.display = "block", a.focus && t.focus(), Ht()
                    }), r.setContent(C[1], u), r.updateCurrItem(), kt("afterInit"), yt || (w = setInterval(function () {
                        Gt || q || Z || m !== r.currItem.initialZoomLevel || r.updateSize()
                    }, 1e3)), o.addClass(t, "pswp--visible")
                }
            }, close: function () {
                s && (s = !1, l = !0, kt("close"), jt(), Ze(r.currItem, null, !0, r.destroy))
            }, destroy: function () {
                kt("destroy"), qe && clearTimeout(qe), t.setAttribute("aria-hidden", "true"), t.className = L, w && clearInterval(w), o.unbind(r.scrollWrap, p, r), o.unbind(window, "scroll", r), we(), Jt(), St = null
            }, panTo: function (t, e, n) {
                n || (t > tt.min.x ? t = tt.min.x : t < tt.max.x && (t = tt.max.x), e > tt.min.y ? e = tt.min.y : e < tt.max.y && (e = tt.max.y)), dt.x = t, dt.y = e, It()
            }, handleEvent: function (t) {
                t = t || window.event, g[t.type] && g[t.type](t)
            }, goTo: function (t) {
                t = Tt(t);
                var e = t - u;
                vt = e, u = t, r.currItem = Ue(u), pt -= e, Lt(mt.x * pt), Jt(), nt = !1, r.updateCurrItem()
            }, next: function () {
                r.goTo(u + 1)
            }, prev: function () {
                r.goTo(u - 1)
            }, updateCurrZoomItem: function (t) {
                if (t && kt("beforeChange", 0), C[1].el.children.length) {
                    var e = C[1].el.children[0];
                    et = o.hasClass(e, "pswp__zoom-wrap") ? e.style : null
                } else et = null;
                tt = r.currItem.bounds, v = m = r.currItem.initialZoomLevel, dt.x = tt.center.x, dt.y = tt.center.y, t && kt("afterChange")
            }, invalidateCurrItems: function () {
                x = !0;
                for (var t = 0; 3 > t; t++)C[t].item && (C[t].item.needsUpdate = !0)
            }, updateCurrItem: function (t) {
                if (0 !== vt) {
                    var e, n = Math.abs(vt);
                    if (!(t && 2 > n)) {
                        r.currItem = Ue(u), xt = !1, kt("beforeChange", vt), n >= 3 && (d += vt + (vt > 0 ? -3 : 3), n = 3);
                        for (var i = 0; n > i; i++)vt > 0 ? (e = C.shift(), C[2] = e, d++, Ot((d + 2) * mt.x, e.el.style), r.setContent(e, u - n + i + 1 + 1)) : (e = C.pop(), C.unshift(e), d--, Ot(d * mt.x, e.el.style), r.setContent(e, u + n - i - 1 - 1));
                        if (et && 1 === Math.abs(vt)) {
                            var o = Ue(T);
                            o.initialZoomLevel !== m && (on(o, ft), ln(o), Dt(o))
                        }
                        vt = 0, r.updateCurrZoomItem(), T = u, kt("afterChange")
                    }
                }
            }, updateSize: function (e) {
                if (!yt && a.modal) {
                    var n = o.getScrollY();
                    if (M !== n && (t.style.top = n + "px", M = n), !e && wt.x === window.innerWidth && wt.y === window.innerHeight)return;
                    wt.x = window.innerWidth, wt.y = window.innerHeight, t.style.height = wt.y + "px"
                }
                if (ft.x = r.scrollWrap.clientWidth, ft.y = r.scrollWrap.clientHeight, Ut(), mt.x = ft.x + Math.round(ft.x * a.spacing), mt.y = ft.y, Lt(mt.x * pt), kt("beforeResize"), void 0 !== d) {
                    for (var i, s, l, c = 0; 3 > c; c++)i = C[c], Ot((c + d) * mt.x, i.el.style), l = u + c - 1, a.loop && Qe() > 2 && (l = Tt(l)), s = Ue(l), s && (x || s.needsUpdate || !s.bounds) ? (r.cleanSlide(s), r.setContent(i, l), 1 === c && (r.currItem = s, r.updateCurrZoomItem(!0)), s.needsUpdate = !1) : -1 === i.index && l >= 0 && r.setContent(i, l), s && s.container && (on(s, ft), ln(s), Dt(s));
                    x = !1
                }
                v = m = r.currItem.initialZoomLevel, tt = r.currItem.bounds, tt && (dt.x = tt.center.x, dt.y = tt.center.y, It(!0)), kt("resize")
            }, zoomTo: function (t, e, n, i, r) {
                e && (v = m, ge.x = Math.abs(e.x) - dt.x, ge.y = Math.abs(e.y) - dt.y, Nt(ht, dt));
                var a = zt(t, !1), s = {};
                qt("x", a, s, t), qt("y", a, s, t);
                var l = m, c = {x: dt.x, y: dt.y};
                Mt(s);
                var u = function (e) {
                    1 === e ? (m = t, dt.x = s.x, dt.y = s.y) : (m = (t - l) * e + l, dt.x = (s.x - c.x) * e + c.x, dt.y = (s.y - c.y) * e + c.y), r && r(e), It(1 === e)
                };
                n ? te("customZoomTo", 0, 1, n, i || o.easing.sine.inOut, u) : u(1)
            }
        }, ne = {}, ie = {}, oe = {}, re = {}, ae = {}, se = [], le = {}, ce = [], ue = {}, he = 0, de = ct(), fe = 0, pe = ct(), ge = ct(), me = ct(), ve = function (t, e) {
            return t.x === e.x && t.y === e.y
        }, ye = function (t, e) {
            return Math.abs(t.x - e.x) < 25 && Math.abs(t.y - e.y) < 25
        }, be = function (t, e) {
            return ue.x = Math.abs(t.x - e.x), ue.y = Math.abs(t.y - e.y), Math.sqrt(ue.x * ue.x + ue.y * ue.y)
        }, we = function () {
            U && (O(U), U = null)
        }, xe = function () {
            q && (U = D(xe), Re())
        }, Ce = function () {
            return !("fit" === a.scaleMode && m === r.currItem.initialZoomLevel)
        }, Te = function (t, e) {
            return !(!t || t === document) && (!(t.getAttribute("class") && t.getAttribute("class").indexOf("pswp__scroll-wrap") > -1) && (e(t) ? t : Te(t.parentNode, e)))
        }, Se = {}, Ee = function (t, e) {
            return Se.prevent = !Te(t.target, a.isClickableElement), kt("preventDragEvent", t, e, Se), Se.prevent
        }, ke = function (t, e) {
            return e.x = t.pageX, e.y = t.pageY, e.id = t.identifier, e
        }, Ae = function (t, e, n) {
            n.x = .5 * (t.x + e.x), n.y = .5 * (t.y + e.y)
        }, _e = function (t, e, n) {
            if (t - H > 50) {
                var i = ce.length > 2 ? ce.shift() : {};
                i.x = e, i.y = n, ce.push(i), H = t
            }
        }, Pe = function () {
            var t = dt.y - r.currItem.initialPosition.y;
            return 1 - Math.abs(t / (ft.y / 2))
        }, Ie = {}, De = {}, Oe = [], Le = function (t) {
            for (; Oe.length > 0;)Oe.pop();
            return P ? (lt = 0, se.forEach(function (t) {
                0 === lt ? Oe[0] = t : 1 === lt && (Oe[1] = t), lt++
            })) : t.type.indexOf("touch") > -1 ? t.touches && t.touches.length > 0 && (Oe[0] = ke(t.touches[0], Ie), t.touches.length > 1 && (Oe[1] = ke(t.touches[1], De))) : (Ie.x = t.pageX, Ie.y = t.pageY, Ie.id = "", Oe[0] = Ie), Oe
        }, Fe = function (t, e) {
            var n, i, o, s, l = dt[t] + e[t], c = e[t] > 0, u = pe.x + e.x, h = pe.x - le.x;
            return n = l > tt.min[t] || l < tt.max[t] ? a.panEndFriction : 1, l = dt[t] + e[t] * n, !a.allowPanToNext && m !== r.currItem.initialZoomLevel || (et ? "h" !== it || "x" !== t || X || (c ? (l > tt.min[t] && (n = a.panEndFriction, tt.min[t] - l, i = tt.min[t] - ht[t]), (0 >= i || 0 > h) && Qe() > 1 ? (s = u, 0 > h && u > le.x && (s = le.x)) : tt.min.x !== tt.max.x && (o = l)) : (l < tt.max[t] && (n = a.panEndFriction, l - tt.max[t], i = ht[t] - tt.max[t]), (0 >= i || h > 0) && Qe() > 1 ? (s = u, h > 0 && u < le.x && (s = le.x)) : tt.min.x !== tt.max.x && (o = l))) : s = u, "x" !== t) ? void(nt || Q || m > r.currItem.fitRatio && (dt[t] += e[t] * n)) : (void 0 !== s && (Lt(s, !0), Q = s !== le.x), tt.min.x !== tt.max.x && (void 0 !== o ? dt.x = o : Q || (dt.x += e.x * n)), void 0 !== s)
        }, Ne = function (t) {
            if (!("mousedown" === t.type && t.button > 0)) {
                if ($e)return void t.preventDefault();
                if (!B || "mousedown" !== t.type) {
                    if (Ee(t, !0) && t.preventDefault(), kt("pointerDown"), P) {
                        var e = o.arraySearch(se, t.pointerId, "id");
                        0 > e && (e = se.length), se[e] = {x: t.pageX, y: t.pageY, id: t.pointerId}
                    }
                    var n = Le(t), i = n.length;
                    G = null, Jt(), q && 1 !== i || (q = ot = !0, o.bind(window, f, r), z = st = rt = V = Q = $ = Y = X = !1, it = null, kt("firstTouchStart", n), Nt(ht, dt), ut.x = ut.y = 0, Nt(re, n[0]), Nt(ae, re), le.x = mt.x * pt, ce = [{
                        x: re.x,
                        y: re.y
                    }], H = W = At(), zt(m, !0), we(), xe()), !Z && i > 1 && !nt && !Q && (v = m, X = !1, Z = Y = !0, ut.y = ut.x = 0, Nt(ht, dt), Nt(ne, n[0]), Nt(ie, n[1]), Ae(ne, ie, me), ge.x = Math.abs(me.x) - dt.x, ge.y = Math.abs(me.y) - dt.y, K = J = be(ne, ie))
                }
            }
        }, Me = function (t) {
            if (t.preventDefault(), P) {
                var e = o.arraySearch(se, t.pointerId, "id");
                if (e > -1) {
                    var n = se[e];
                    n.x = t.pageX, n.y = t.pageY
                }
            }
            if (q) {
                var i = Le(t);
                if (it || $ || Z)G = i; else if (pe.x !== mt.x * pt)it = "h"; else {
                    var r = Math.abs(i[0].x - re.x) - Math.abs(i[0].y - re.y);
                    Math.abs(r) >= 10 && (it = r > 0 ? "h" : "v", G = i)
                }
            }
        }, Re = function () {
            if (G) {
                var t = G.length;
                if (0 !== t)if (Nt(ne, G[0]), oe.x = ne.x - re.x, oe.y = ne.y - re.y, Z && t > 1) {
                    if (re.x = ne.x, re.y = ne.y, !oe.x && !oe.y && ve(G[1], ie))return;
                    Nt(ie, G[1]), X || (X = !0, kt("zoomGestureStarted"));
                    var e = be(ne, ie), n = Ve(e);
                    n > r.currItem.initialZoomLevel + r.currItem.initialZoomLevel / 15 && (st = !0);
                    var i = 1, o = Vt(), s = Bt();
                    if (o > n)if (a.pinchToClose && !st && v <= r.currItem.initialZoomLevel) {
                        var l = o - n, c = 1 - l / (o / 1.2);
                        _t(c), kt("onPinchClose", c), rt = !0
                    } else i = (o - n) / o, i > 1 && (i = 1), n = o - i * (o / 3); else n > s && (i = (n - s) / (6 * o), i > 1 && (i = 1), n = s + i * o);
                    0 > i && (i = 0), K = e, Ae(ne, ie, de), ut.x += de.x - me.x, ut.y += de.y - me.y, Nt(me, de), dt.x = Ft("x", n), dt.y = Ft("y", n), z = n > m, m = n, It()
                } else {
                    if (!it)return;
                    if (ot && (ot = !1, Math.abs(oe.x) >= 10 && (oe.x -= G[0].x - ae.x), Math.abs(oe.y) >= 10 && (oe.y -= G[0].y - ae.y)), re.x = ne.x, re.y = ne.y, 0 === oe.x && 0 === oe.y)return;
                    if ("v" === it && a.closeOnVerticalDrag && !Ce()) {
                        ut.y += oe.y, dt.y += oe.y;
                        var u = Pe();
                        return V = !0, kt("onVerticalDrag", u), _t(u), void It()
                    }
                    _e(At(), ne.x, ne.y), $ = !0, tt = r.currItem.bounds;
                    var h = Fe("x", oe);
                    h || (Fe("y", oe), Mt(dt), It())
                }
            }
        }, We = function (t) {
            if (R.isOldAndroid) {
                if (B && "mouseup" === t.type)return;
                t.type.indexOf("touch") > -1 && (clearTimeout(B), B = setTimeout(function () {
                    B = 0
                }, 600))
            }
            kt("pointerUp"), Ee(t, !1) && t.preventDefault();
            var e;
            if (P) {
                var n = o.arraySearch(se, t.pointerId, "id");
                if (n > -1)if (e = se.splice(n, 1)[0], navigator.pointerEnabled)e.type = t.pointerType || "mouse"; else {
                    var i = {4: "mouse", 2: "touch", 3: "pen"};
                    e.type = i[t.pointerType], e.type || (e.type = t.pointerType || "mouse")
                }
            }
            var s, l = Le(t), c = l.length;
            if ("mouseup" === t.type && (c = 0), 2 === c)return G = null, !0;
            1 === c && Nt(ae, l[0]), 0 !== c || it || nt || (e || ("mouseup" === t.type ? e = {
                x: t.pageX,
                y: t.pageY,
                type: "mouse"
            } : t.changedTouches && t.changedTouches[0] && (e = {
                x: t.changedTouches[0].pageX,
                y: t.changedTouches[0].pageY,
                type: "touch"
            })), kt("touchRelease", t, e));
            var u = -1;
            if (0 === c && (q = !1, o.unbind(window, f, r), we(), Z ? u = 0 : -1 !== fe && (u = At() - fe)), fe = 1 === c ? At() : -1, s = -1 !== u && 150 > u ? "zoom" : "swipe", Z && 2 > c && (Z = !1, 1 === c && (s = "zoomPointerUp"), kt("zoomGestureEnded")), G = null, $ || X || nt || V)if (Jt(), j || (j = He()), j.calculateSwipeSpeed("x"), V) {
                var h = Pe();
                if (h < a.verticalDragRange)r.close(); else {
                    var d = dt.y, p = at;
                    te("verticalDrag", 0, 1, 300, o.easing.cubic.out, function (t) {
                        dt.y = (r.currItem.initialPosition.y - d) * t + d, _t((1 - p) * t + p), It()
                    }), kt("onVerticalDrag", 1)
                }
            } else {
                if ((Q || nt) && 0 === c) {
                    var g = ze(s, j);
                    if (g)return;
                    s = "zoomPointerUp"
                }
                if (!nt)return "swipe" !== s ? void Be() : void(!Q && m > r.currItem.fitRatio && je(j))
            }
        }, He = function () {
            var t, e, n = {
                lastFlickOffset: {},
                lastFlickDist: {},
                lastFlickSpeed: {},
                slowDownRatio: {},
                slowDownRatioReverse: {},
                speedDecelerationRatio: {},
                speedDecelerationRatioAbs: {},
                distanceOffset: {},
                backAnimDestination: {},
                backAnimStarted: {},
                calculateSwipeSpeed: function (i) {
                    ce.length > 1 ? (t = At() - H + 50, e = ce[ce.length - 2][i]) : (t = At() - W, e = ae[i]), n.lastFlickOffset[i] = re[i] - e, n.lastFlickDist[i] = Math.abs(n.lastFlickOffset[i]), n.lastFlickDist[i] > 20 ? n.lastFlickSpeed[i] = n.lastFlickOffset[i] / t : n.lastFlickSpeed[i] = 0, Math.abs(n.lastFlickSpeed[i]) < .1 && (n.lastFlickSpeed[i] = 0), n.slowDownRatio[i] = .95, n.slowDownRatioReverse[i] = 1 - n.slowDownRatio[i], n.speedDecelerationRatio[i] = 1
                },
                calculateOverBoundsAnimOffset: function (t, e) {
                    n.backAnimStarted[t] || (dt[t] > tt.min[t] ? n.backAnimDestination[t] = tt.min[t] : dt[t] < tt.max[t] && (n.backAnimDestination[t] = tt.max[t]), void 0 !== n.backAnimDestination[t] && (n.slowDownRatio[t] = .7, n.slowDownRatioReverse[t] = 1 - n.slowDownRatio[t], n.speedDecelerationRatioAbs[t] < .05 && (n.lastFlickSpeed[t] = 0, n.backAnimStarted[t] = !0, te("bounceZoomPan" + t, dt[t], n.backAnimDestination[t], e || 300, o.easing.sine.out, function (e) {
                        dt[t] = e, It()
                    }))))
                },
                calculateAnimOffset: function (t) {
                    n.backAnimStarted[t] || (n.speedDecelerationRatio[t] = n.speedDecelerationRatio[t] * (n.slowDownRatio[t] + n.slowDownRatioReverse[t] - n.slowDownRatioReverse[t] * n.timeDiff / 10), n.speedDecelerationRatioAbs[t] = Math.abs(n.lastFlickSpeed[t] * n.speedDecelerationRatio[t]), n.distanceOffset[t] = n.lastFlickSpeed[t] * n.speedDecelerationRatio[t] * n.timeDiff, dt[t] += n.distanceOffset[t])
                },
                panAnimLoop: function () {
                    return Qt.zoomPan && (Qt.zoomPan.raf = D(n.panAnimLoop), n.now = At(), n.timeDiff = n.now - n.lastNow, n.lastNow = n.now, n.calculateAnimOffset("x"), n.calculateAnimOffset("y"), It(), n.calculateOverBoundsAnimOffset("x"), n.calculateOverBoundsAnimOffset("y"), n.speedDecelerationRatioAbs.x < .05 && n.speedDecelerationRatioAbs.y < .05) ? (dt.x = Math.round(dt.x), dt.y = Math.round(dt.y), It(), void Zt("zoomPan")) : void 0
                }
            };
            return n
        }, je = function (t) {
            return t.calculateSwipeSpeed("y"), tt = r.currItem.bounds, t.backAnimDestination = {}, t.backAnimStarted = {}, Math.abs(t.lastFlickSpeed.x) <= .05 && Math.abs(t.lastFlickSpeed.y) <= .05 ? (t.speedDecelerationRatioAbs.x = t.speedDecelerationRatioAbs.y = 0, t.calculateOverBoundsAnimOffset("x"), t.calculateOverBoundsAnimOffset("y"), !0) : (Kt("zoomPan"), t.lastNow = At(), void t.panAnimLoop())
        }, ze = function (t, e) {
            var n;
            nt || (he = u);
            var i;
            if ("swipe" === t) {
                var s = re.x - ae.x, l = e.lastFlickDist.x < 10;
                s > 30 && (l || e.lastFlickOffset.x > 20) ? i = -1 : -30 > s && (l || e.lastFlickOffset.x < -20) && (i = 1)
            }
            var c;
            i && (u += i, 0 > u ? (u = a.loop ? Qe() - 1 : 0, c = !0) : u >= Qe() && (u = a.loop ? 0 : Qe() - 1, c = !0), (!c || a.loop) && (vt += i, pt -= i, n = !0));
            var h, d = mt.x * pt, f = Math.abs(d - pe.x);
            return n || d > pe.x == e.lastFlickSpeed.x > 0 ? (h = Math.abs(e.lastFlickSpeed.x) > 0 ? f / Math.abs(e.lastFlickSpeed.x) : 333, h = Math.min(h, 400), h = Math.max(h, 250)) : h = 333, he === u && (n = !1), nt = !0, kt("mainScrollAnimStart"), te("mainScroll", pe.x, d, h, o.easing.cubic.out, Lt, function () {
                Jt(), nt = !1, he = -1, (n || he !== u) && r.updateCurrItem(), kt("mainScrollAnimComplete")
            }), n && r.updateCurrItem(!0), n
        }, Ve = function (t) {
            return 1 / J * t * v
        }, Be = function () {
            var t = m, e = Vt(), n = Bt();
            e > m ? t = e : m > n && (t = n);
            var i, a = at;
            return rt && !z && !st && e > m ? (r.close(), !0) : (rt && (i = function (t) {
                _t((1 - a) * t + a)
            }), r.zoomTo(t, 0, 200, o.easing.cubic.out, i), !0)
        };
        Ct("Gestures", {
            publicMethods: {
                initGestures: function () {
                    var t = function (t, e, n, i, o) {
                        S = t + e, E = t + n, k = t + i, A = o ? t + o : ""
                    };
                    P = R.pointerEvent, P && R.touch && (R.touch = !1), P ? navigator.pointerEnabled ? t("pointer", "down", "move", "up", "cancel") : t("MSPointer", "Down", "Move", "Up", "Cancel") : R.touch ? (t("touch", "start", "move", "end", "cancel"), I = !0) : t("mouse", "down", "move", "up"), f = E + " " + k + " " + A, p = S, P && !I && (I = navigator.maxTouchPoints > 1 || navigator.msMaxTouchPoints > 1), r.likelyTouchDevice = I, g[S] = Ne, g[E] = Me, g[k] = We, A && (g[A] = g[k]), R.touch && (p += " mousedown", f += " mousemove mouseup", g.mousedown = g[S], g.mousemove = g[E], g.mouseup = g[k]), I || (a.allowPanToNext = !1)
                }
            }
        });
        var qe, Ye, Xe, $e, Ue, Qe, Ge, Ze = function (e, n, i, s) {
            qe && clearTimeout(qe), $e = !0, Xe = !0;
            var l;
            e.initialLayout ? (l = e.initialLayout, e.initialLayout = null) : l = a.getThumbBoundsFn && a.getThumbBoundsFn(u);
            var h = i ? a.hideAnimationDuration : a.showAnimationDuration, d = function () {
                Zt("initialZoom"), i ? (r.template.removeAttribute("style"), r.bg.removeAttribute("style")) : (_t(1), n && (n.style.display = "block"), o.addClass(t, "pswp--animated-in"), kt("initialZoom" + (i ? "OutEnd" : "InEnd"))), s && s(), $e = !1
            };
            if (!h || !l || void 0 === l.x)return kt("initialZoom" + (i ? "Out" : "In")), m = e.initialZoomLevel, Nt(dt, e.initialPosition), It(), t.style.opacity = i ? 0 : 1, _t(1), void(h ? setTimeout(function () {
                d()
            }, h) : d());
            !function () {
                var n = c, s = !r.currItem.src || r.currItem.loadError || a.showHideOpacity;
                e.miniImg && (e.miniImg.style.webkitBackfaceVisibility = "hidden"), i || (m = l.w / e.w, dt.x = l.x, dt.y = l.y - F, r[s ? "template" : "bg"].style.opacity = .001, It()), Kt("initialZoom"), i && !n && o.removeClass(t, "pswp--animated-in"), s && (i ? o[(n ? "remove" : "add") + "Class"](t, "pswp--animate_opacity") : setTimeout(function () {
                    o.addClass(t, "pswp--animate_opacity")
                }, 30)), qe = setTimeout(function () {
                    if (kt("initialZoom" + (i ? "Out" : "In")), i) {
                        var r = l.w / e.w, a = {x: dt.x, y: dt.y}, c = m, u = at, f = function (e) {
                            1 === e ? (m = r, dt.x = l.x, dt.y = l.y - M) : (m = (r - c) * e + c, dt.x = (l.x - a.x) * e + a.x, dt.y = (l.y - M - a.y) * e + a.y), It(), s ? t.style.opacity = 1 - e : _t(u - e * u)
                        };
                        n ? te("initialZoom", 0, 1, h, o.easing.cubic.out, f, d) : (f(1), qe = setTimeout(d, h + 20))
                    } else m = e.initialZoomLevel, Nt(dt, e.initialPosition), It(), _t(1), s ? t.style.opacity = 1 : _t(1), qe = setTimeout(d, h + 20)
                }, i ? 25 : 90)
            }()
        }, Ke = {}, Je = [], tn = {
            index: 0,
            errorMsg: '<div class="pswp__error-msg"><a href="%url%" target="_blank">The image</a> could not be loaded.</div>',
            forceProgressiveLoading: !1,
            preload: [1, 1],
            getNumItemsFn: function () {
                return Ye.length
            }
        }, en = function () {
            return {center: {x: 0, y: 0}, max: {x: 0, y: 0}, min: {x: 0, y: 0}}
        }, nn = function (t, e, n) {
            var i = t.bounds;
            i.center.x = Math.round((Ke.x - e) / 2), i.center.y = Math.round((Ke.y - n) / 2) + t.vGap.top, i.max.x = e > Ke.x ? Math.round(Ke.x - e) : i.center.x, i.max.y = n > Ke.y ? Math.round(Ke.y - n) + t.vGap.top : i.center.y, i.min.x = e > Ke.x ? 0 : i.center.x, i.min.y = n > Ke.y ? t.vGap.top : i.center.y
        }, on = function (t, e, n) {
            if (t.src && !t.loadError) {
                var i = !n;
                if (i && (t.vGap || (t.vGap = {
                        top: 0,
                        bottom: 0
                    }), kt("parseVerticalMargin", t)), Ke.x = e.x, Ke.y = e.y - t.vGap.top - t.vGap.bottom, i) {
                    var o = Ke.x / t.w, r = Ke.y / t.h;
                    t.fitRatio = r > o ? o : r;
                    var s = a.scaleMode;
                    "orig" === s ? n = 1 : "fit" === s && (n = t.fitRatio), n > 1 && (n = 1), t.initialZoomLevel = n, t.bounds || (t.bounds = en())
                }
                if (!n)return;
                return nn(t, t.w * n, t.h * n), i && n === t.initialZoomLevel && (t.initialPosition = t.bounds.center), t.bounds
            }
            return t.w = t.h = 0, t.initialZoomLevel = t.fitRatio = 1, t.bounds = en(), t.initialPosition = t.bounds.center, t.bounds
        }, rn = function (t, e, n, i, o, a) {
            e.loadError || i && (e.imageAppended = !0, ln(e, i, e === r.currItem && xt), n.appendChild(i), a && setTimeout(function () {
                e && e.loaded && e.placeholder && (e.placeholder.style.display = "none", e.placeholder = null)
            }, 500))
        }, an = function (t) {
            t.loading = !0, t.loaded = !1;
            var e = t.img = o.createEl("pswp__img", "img"), n = function () {
                t.loading = !1, t.loaded = !0, t.loadComplete ? t.loadComplete(t) : t.img = null, e.onload = e.onerror = null, e = null
            };
            return e.onload = n, e.onerror = function () {
                t.loadError = !0, n()
            }, e.src = t.src, e
        }, sn = function (t, e) {
            return t.src && t.loadError && t.container ? (e && (t.container.innerHTML = ""), t.container.innerHTML = a.errorMsg.replace("%url%", t.src), !0) : void 0
        }, ln = function (t, e, n) {
            if (t.src) {
                e || (e = t.container.lastChild);
                var i = n ? t.w : Math.round(t.w * t.fitRatio), o = n ? t.h : Math.round(t.h * t.fitRatio);
                t.placeholder && !t.loaded && (t.placeholder.style.width = i + "px", t.placeholder.style.height = o + "px"), e.style.width = i + "px", e.style.height = o + "px"
            }
        }, cn = function () {
            if (Je.length) {
                for (var t, e = 0; e < Je.length; e++)t = Je[e], t.holder.index === t.index && rn(t.index, t.item, t.baseDiv, t.img, 0, t.clearPlaceholder);
                Je = []
            }
        };
        Ct("Controller", {
            publicMethods: {
                lazyLoadItem: function (t) {
                    t = Tt(t);
                    var e = Ue(t);
                    e && (!e.loaded && !e.loading || x) && (kt("gettingData", t, e), e.src && an(e))
                }, initController: function () {
                    o.extend(a, tn, !0), r.items = Ye = n, Ue = r.getItemAt, Qe = a.getNumItemsFn, Ge = a.loop, Qe() < 3 && (a.loop = !1), Et("beforeChange", function (t) {
                        var e, n = a.preload, i = null === t || t >= 0, o = Math.min(n[0], Qe()), s = Math.min(n[1], Qe());
                        for (e = 1; (i ? s : o) >= e; e++)r.lazyLoadItem(u + e);
                        for (e = 1; (i ? o : s) >= e; e++)r.lazyLoadItem(u - e)
                    }), Et("initialLayout", function () {
                        r.currItem.initialLayout = a.getThumbBoundsFn && a.getThumbBoundsFn(u)
                    }), Et("mainScrollAnimComplete", cn), Et("initialZoomInEnd", cn), Et("destroy", function () {
                        for (var t, e = 0; e < Ye.length; e++)t = Ye[e], t.container && (t.container = null), t.placeholder && (t.placeholder = null), t.img && (t.img = null), t.preloader && (t.preloader = null), t.loadError && (t.loaded = t.loadError = !1);
                        Je = null
                    })
                }, getItemAt: function (t) {
                    return t >= 0 && void 0 !== Ye[t] && Ye[t]
                }, allowProgressiveImg: function () {
                    return a.forceProgressiveLoading || !I || a.mouseUsed || screen.width > 1200
                }, setContent: function (t, e) {
                    a.loop && (e = Tt(e));
                    var n = r.getItemAt(t.index);
                    n && (n.container = null);
                    var i, l = r.getItemAt(e);
                    if (!l)return void(t.el.innerHTML = "");
                    kt("gettingData", e, l), t.index = e, t.item = l;
                    var c = l.container = o.createEl("pswp__zoom-wrap");
                    if (!l.src && l.html && (l.html.tagName ? c.appendChild(l.html) : c.innerHTML = l.html), sn(l), on(l, ft), !l.src || l.loadError || l.loaded)l.src && !l.loadError && (i = o.createEl("pswp__img", "img"), i.style.opacity = 1, i.src = l.src, ln(l, i), rn(0, l, c, i)); else {
                        if (l.loadComplete = function (n) {
                                if (s) {
                                    if (t && t.index === e) {
                                        if (sn(n, !0))return n.loadComplete = n.img = null, on(n, ft), Dt(n), void(t.index === u && r.updateCurrZoomItem());
                                        n.imageAppended ? !$e && n.placeholder && (n.placeholder.style.display = "none", n.placeholder = null) : R.transform && (nt || $e) ? Je.push({
                                            item: n,
                                            baseDiv: c,
                                            img: n.img,
                                            index: e,
                                            holder: t,
                                            clearPlaceholder: !0
                                        }) : rn(0, n, c, n.img, 0, !0)
                                    }
                                    n.loadComplete = null, n.img = null, kt("imageLoadComplete", e, n)
                                }
                            }, o.features.transform) {
                            var h = "pswp__img pswp__img--placeholder";
                            h += l.msrc ? "" : " pswp__img--placeholder--blank";
                            var d = o.createEl(h, l.msrc ? "img" : "");
                            l.msrc && (d.src = l.msrc), ln(l, d), c.appendChild(d), l.placeholder = d
                        }
                        l.loading || an(l), r.allowProgressiveImg() && (!Xe && R.transform ? Je.push({
                            item: l,
                            baseDiv: c,
                            img: l.img,
                            index: e,
                            holder: t
                        }) : rn(0, l, c, l.img, 0, !0))
                    }
                    Xe || e !== u ? Dt(l) : (et = c.style, Ze(l, i || l.img)), t.el.innerHTML = "", t.el.appendChild(c)
                }, cleanSlide: function (t) {
                    t.img && (t.img.onload = t.img.onerror = null), t.loaded = t.loading = t.img = t.imageAppended = !1
                }
            }
        });
        var un, hn = {}, dn = function (t, e, n) {
            var i = document.createEvent("CustomEvent"), o = {
                origEvent: t,
                target: t.target,
                releasePoint: e,
                pointerType: n || "touch"
            };
            i.initCustomEvent("pswpTap", !0, !0, o), t.target.dispatchEvent(i)
        };
        Ct("Tap", {
            publicMethods: {
                initTap: function () {
                    Et("firstTouchStart", r.onTapStart), Et("touchRelease", r.onTapRelease), Et("destroy", function () {
                        hn = {}, un = null
                    })
                }, onTapStart: function (t) {
                    t.length > 1 && (clearTimeout(un), un = null)
                }, onTapRelease: function (t, e) {
                    if (e && !$ && !Y && !Gt) {
                        var n = e;
                        if (un && (clearTimeout(un), un = null, ye(n, hn)))return void kt("doubleTap", n);
                        if ("mouse" === e.type)return void dn(t, e, "mouse");
                        if ("BUTTON" === t.target.tagName.toUpperCase() || o.hasClass(t.target, "pswp__single-tap"))return void dn(t, e);
                        Nt(hn, n), un = setTimeout(function () {
                            dn(t, e), un = null
                        }, 300)
                    }
                }
            }
        });
        var fn;
        Ct("DesktopZoom", {
            publicMethods: {
                initDesktopZoom: function () {
                    N || (I ? Et("mouseUsed", function () {
                        r.setupDesktopZoom()
                    }) : r.setupDesktopZoom(!0))
                }, setupDesktopZoom: function (e) {
                    fn = {};
                    var n = "wheel mousewheel DOMMouseScroll";
                    Et("bindEvents", function () {
                        o.bind(t, n, r.handleMouseWheel)
                    }), Et("unbindEvents", function () {
                        fn && o.unbind(t, n, r.handleMouseWheel)
                    }), r.mouseZoomedIn = !1;
                    var i, a = function () {
                        r.mouseZoomedIn && (o.removeClass(t, "pswp--zoomed-in"), r.mouseZoomedIn = !1), 1 > m ? o.addClass(t, "pswp--zoom-allowed") : o.removeClass(t, "pswp--zoom-allowed"), s()
                    }, s = function () {
                        i && (o.removeClass(t, "pswp--dragging"), i = !1)
                    };
                    Et("resize", a), Et("afterChange", a), Et("pointerDown", function () {
                        r.mouseZoomedIn && (i = !0, o.addClass(t, "pswp--dragging"))
                    }), Et("pointerUp", s), e || a()
                }, handleMouseWheel: function (t) {
                    if (m <= r.currItem.fitRatio)return a.modal && (!a.closeOnScroll || Gt || q ? t.preventDefault() : _ && Math.abs(t.deltaY) > 2 && (c = !0, r.close())), !0;
                    if (t.stopPropagation(), fn.x = 0, "deltaX" in t)1 === t.deltaMode ? (fn.x = 18 * t.deltaX, fn.y = 18 * t.deltaY) : (fn.x = t.deltaX, fn.y = t.deltaY); else if ("wheelDelta" in t)t.wheelDeltaX && (fn.x = -.16 * t.wheelDeltaX), t.wheelDeltaY ? fn.y = -.16 * t.wheelDeltaY : fn.y = -.16 * t.wheelDelta; else {
                        if (!("detail" in t))return;
                        fn.y = t.detail
                    }
                    zt(m, !0);
                    var e = dt.x - fn.x, n = dt.y - fn.y;
                    (a.modal || e <= tt.min.x && e >= tt.max.x && n <= tt.min.y && n >= tt.max.y) && t.preventDefault(), r.panTo(e, n)
                }, toggleDesktopZoom: function (e) {
                    e = e || {x: ft.x / 2 + gt.x, y: ft.y / 2 + gt.y};
                    var n = a.getDoubleTapZoom(!0, r.currItem), i = m === n;
                    r.mouseZoomedIn = !i, r.zoomTo(i ? r.currItem.initialZoomLevel : n, e, 333), o[(i ? "remove" : "add") + "Class"](t, "pswp--zoomed-in")
                }
            }
        });
        var pn, gn, mn, vn, yn, bn, wn, xn, Cn, Tn, Sn, En, kn = {history: !0, galleryUID: 1}, An = function () {
            return Sn.hash.substring(1)
        }, _n = function () {
            pn && clearTimeout(pn), mn && clearTimeout(mn)
        }, Pn = function () {
            var t = An(), e = {};
            if (t.length < 5)return e;
            var n, i = t.split("&");
            for (n = 0; n < i.length; n++)if (i[n]) {
                var o = i[n].split("=");
                o.length < 2 || (e[o[0]] = o[1])
            }
            if (a.galleryPIDs) {
                var r = e.pid;
                for (e.pid = 0, n = 0; n < Ye.length; n++)if (Ye[n].pid === r) {
                    e.pid = n;
                    break
                }
            } else e.pid = parseInt(e.pid, 10) - 1;
            return e.pid < 0 && (e.pid = 0), e
        }, In = function () {
            if (mn && clearTimeout(mn), Gt || q)return void(mn = setTimeout(In, 500));
            vn ? clearTimeout(gn) : vn = !0;
            var t = u + 1, e = Ue(u);
            e.hasOwnProperty("pid") && (t = e.pid);
            var n = wn + "&gid=" + a.galleryUID + "&pid=" + t;
            xn || -1 === Sn.hash.indexOf(n) && (Tn = !0);
            var i = Sn.href.split("#")[0] + "#" + n;
            En ? "#" + n !== window.location.hash && history[xn ? "replaceState" : "pushState"]("", document.title, i) : xn ? Sn.replace(i) : Sn.hash = n, xn = !0, gn = setTimeout(function () {
                vn = !1
            }, 60)
        };
        Ct("History", {
            publicMethods: {
                initHistory: function () {
                    if (o.extend(a, kn, !0), a.history) {
                        Sn = window.location, Tn = !1, Cn = !1, xn = !1, wn = An(), En = "pushState" in history, wn.indexOf("gid=") > -1 && (wn = wn.split("&gid=")[0], wn = wn.split("?gid=")[0]), Et("afterChange", r.updateURL), Et("unbindEvents", function () {
                            o.unbind(window, "hashchange", r.onHashChange)
                        });
                        var t = function () {
                            bn = !0, Cn || (Tn ? history.back() : wn ? Sn.hash = wn : En ? history.pushState("", document.title, Sn.pathname + Sn.search) : Sn.hash = ""), _n()
                        };
                        Et("unbindEvents", function () {
                            c && t()
                        }), Et("destroy", function () {
                            bn || t()
                        }), Et("firstUpdate", function () {
                            u = Pn().pid
                        });
                        var e = wn.indexOf("pid=");
                        e > -1 && (wn = wn.substring(0, e), "&" === wn.slice(-1) && (wn = wn.slice(0, -1))), setTimeout(function () {
                            s && o.bind(window, "hashchange", r.onHashChange)
                        }, 40)
                    }
                }, onHashChange: function () {
                    return An() === wn ? (Cn = !0, void r.close()) : void(vn || (yn = !0, r.goTo(Pn().pid), yn = !1))
                }, updateURL: function () {
                    _n(), yn || (xn ? pn = setTimeout(In, 800) : In())
                }
            }
        }), o.extend(r, ee)
    }
}), function (t, e) {
    "function" == typeof define && define.amd ? define(e) : "object" == typeof exports ? module.exports = e() : t.PhotoSwipeUI_Default = e()
}(this, function () {
    "use strict";
    return function (t, e) {
        var n, i, o, r, a, s, l, c, u, h, d, f, p, g, m, v, y, b, w, x = this, C = !1, T = !0, S = !0, E = {
            barsSize: {
                top: 44,
                bottom: "auto"
            },
            closeElClasses: ["item", "caption", "zoom-wrap", "ui", "top-bar"],
            timeToIdle: 4e3,
            timeToIdleOutside: 1e3,
            loadingIndicatorDelay: 1e3,
            addCaptionHTMLFn: function (t, e) {
                return t.title ? (e.children[0].innerHTML = t.title, !0) : (e.children[0].innerHTML = "", !1)
            },
            closeEl: !0,
            captionEl: !0,
            fullscreenEl: !0,
            zoomEl: !0,
            shareEl: !0,
            counterEl: !0,
            arrowEl: !0,
            preloaderEl: !0,
            tapToClose: !1,
            tapToToggleControls: !0,
            clickToCloseNonZoomable: !0,
            shareButtons: [{
                id: "facebook",
                label: "Share on Facebook",
                url: "https://www.facebook.com/sharer/sharer.php?u={{url}}"
            }, {
                id: "twitter",
                label: "Tweet",
                url: "https://twitter.com/intent/tweet?text={{text}}&url={{url}}"
            }, {
                id: "pinterest",
                label: "Pin it",
                url: "http://www.pinterest.com/pin/create/button/?url={{url}}&media={{image_url}}&description={{text}}"
            }, {id: "download", label: "Download image", url: "{{raw_image_url}}", download: !0}],
            getImageURLForShare: function () {
                return t.currItem.src || ""
            },
            getPageURLForShare: function () {
                return window.location.href
            },
            getTextForShare: function () {
                return t.currItem.title || ""
            },
            indexIndicatorSep: " / ",
            fitControlsWidth: 1200
        }, k = function (t) {
            if (v)return !0;
            t = t || window.event, m.timeToIdle && m.mouseUsed && !u && M();
            for (var n, i, o = t.target || t.srcElement, r = o.getAttribute("class") || "", a = 0; a < q.length; a++)n = q[a], n.onTap && r.indexOf("pswp__" + n.name) > -1 && (n.onTap(), i = !0);
            if (i) {
                t.stopPropagation && t.stopPropagation(), v = !0;
                var s = e.features.isOldAndroid ? 600 : 30;
                y = setTimeout(function () {
                    v = !1
                }, s)
            }
        }, A = function () {
            return !t.likelyTouchDevice || m.mouseUsed || screen.width > m.fitControlsWidth
        }, _ = function (t, n, i) {
            e[(i ? "add" : "remove") + "Class"](t, "pswp__" + n)
        }, P = function () {
            var t = 1 === m.getNumItemsFn();
            t !== g && (_(i, "ui--one-slide", t), g = t)
        }, I = function () {
            _(l, "share-modal--hidden", S)
        }, D = function () {
            return S = !S, S ? (e.removeClass(l, "pswp__share-modal--fade-in"), setTimeout(function () {
                S && I()
            }, 300)) : (I(), setTimeout(function () {
                S || e.addClass(l, "pswp__share-modal--fade-in")
            }, 30)), S || L(), !1
        }, O = function (e) {
            e = e || window.event;
            var n = e.target || e.srcElement;
            return t.shout("shareLinkClick", e, n), !!n.href && (!!n.hasAttribute("download") || (window.open(n.href, "pswp_share", "scrollbars=yes,resizable=yes,toolbar=no,location=yes,width=550,height=420,top=100,left=" + (window.screen ? Math.round(screen.width / 2 - 275) : 100)), S || D(), !1))
        }, L = function () {
            for (var t, e, n, i, o, r = "", a = 0; a < m.shareButtons.length; a++)t = m.shareButtons[a], n = m.getImageURLForShare(t), i = m.getPageURLForShare(t), o = m.getTextForShare(t), e = t.url.replace("{{url}}", encodeURIComponent(i)).replace("{{image_url}}", encodeURIComponent(n)).replace("{{raw_image_url}}", n).replace("{{text}}", encodeURIComponent(o)), r += '<a href="' + e + '" target="_blank" class="pswp__share--' + t.id + '"' + (t.download ? "download" : "") + ">" + t.label + "</a>", m.parseShareButtonOut && (r = m.parseShareButtonOut(t, r))
            ;
            l.children[0].innerHTML = r, l.children[0].onclick = O
        }, F = function (t) {
            for (var n = 0; n < m.closeElClasses.length; n++)if (e.hasClass(t, "pswp__" + m.closeElClasses[n]))return !0
        }, N = 0, M = function () {
            clearTimeout(w), N = 0, u && x.setIdle(!1)
        }, R = function (t) {
            t = t ? t : window.event;
            var e = t.relatedTarget || t.toElement;
            e && "HTML" !== e.nodeName || (clearTimeout(w), w = setTimeout(function () {
                x.setIdle(!0)
            }, m.timeToIdleOutside))
        }, W = function () {
            m.fullscreenEl && !e.features.isOldAndroid && (n || (n = x.getFullscreenAPI()), n ? (e.bind(document, n.eventK, x.updateFullscreen), x.updateFullscreen(), e.addClass(t.template, "pswp--supports-fs")) : e.removeClass(t.template, "pswp--supports-fs"))
        }, H = function () {
            m.preloaderEl && (j(!0), h("beforeChange", function () {
                clearTimeout(p), p = setTimeout(function () {
                    t.currItem && t.currItem.loading ? (!t.allowProgressiveImg() || t.currItem.img && !t.currItem.img.naturalWidth) && j(!1) : j(!0)
                }, m.loadingIndicatorDelay)
            }), h("imageLoadComplete", function (e, n) {
                t.currItem === n && j(!0)
            }))
        }, j = function (t) {
            f !== t && (_(d, "preloader--active", !t), f = t)
        }, z = function (t) {
            var n = t.vGap;
            if (A()) {
                var a = m.barsSize;
                if (m.captionEl && "auto" === a.bottom)if (r || (r = e.createEl("pswp__caption pswp__caption--fake"), r.appendChild(e.createEl("pswp__caption__center")), i.insertBefore(r, o), e.addClass(i, "pswp__ui--fit")), m.addCaptionHTMLFn(t, r, !0)) {
                    var s = r.clientHeight;
                    n.bottom = parseInt(s, 10) || 44
                } else n.bottom = a.top; else n.bottom = "auto" === a.bottom ? 0 : a.bottom;
                n.top = a.top
            } else n.top = n.bottom = 0
        }, V = function () {
            m.timeToIdle && h("mouseUsed", function () {
                e.bind(document, "mousemove", M), e.bind(document, "mouseout", R), b = setInterval(function () {
                    2 === ++N && x.setIdle(!0)
                }, m.timeToIdle / 2)
            })
        }, B = function () {
            h("onVerticalDrag", function (t) {
                T && .95 > t ? x.hideControls() : !T && t >= .95 && x.showControls()
            });
            var t;
            h("onPinchClose", function (e) {
                T && .9 > e ? (x.hideControls(), t = !0) : t && !T && e > .9 && x.showControls()
            }), h("zoomGestureEnded", function () {
                (t = !1) && !T && x.showControls()
            })
        }, q = [{
            name: "caption", option: "captionEl", onInit: function (t) {
                o = t
            }
        }, {
            name: "share-modal", option: "shareEl", onInit: function (t) {
                l = t
            }, onTap: function () {
                D()
            }
        }, {
            name: "button--share", option: "shareEl", onInit: function (t) {
                s = t
            }, onTap: function () {
                D()
            }
        }, {name: "button--zoom", option: "zoomEl", onTap: t.toggleDesktopZoom}, {
            name: "counter",
            option: "counterEl",
            onInit: function (t) {
                a = t
            }
        }, {name: "button--close", option: "closeEl", onTap: t.close}, {
            name: "button--arrow--left",
            option: "arrowEl",
            onTap: t.prev
        }, {name: "button--arrow--right", option: "arrowEl", onTap: t.next}, {
            name: "button--fs",
            option: "fullscreenEl",
            onTap: function () {
                n.isFullscreen() ? n.exit() : n.enter()
            }
        }, {
            name: "preloader", option: "preloaderEl", onInit: function (t) {
                d = t
            }
        }], Y = function () {
            var t, n, o, r = function (i) {
                if (i)for (var r = i.length, a = 0; r > a; a++) {
                    t = i[a], n = t.className;
                    for (var s = 0; s < q.length; s++)o = q[s], n.indexOf("pswp__" + o.name) > -1 && (m[o.option] ? (e.removeClass(t, "pswp__element--disabled"), o.onInit && o.onInit(t)) : e.addClass(t, "pswp__element--disabled"))
                }
            };
            r(i.children);
            var a = e.getChildByClass(i, "pswp__top-bar");
            a && r(a.children)
        };
        x.init = function () {
            e.extend(t.options, E, !0), m = t.options, i = e.getChildByClass(t.scrollWrap, "pswp__ui"), h = t.listen, B(), h("beforeChange", x.update), h("doubleTap", function (e) {
                var n = t.currItem.initialZoomLevel;
                t.getZoomLevel() !== n ? t.zoomTo(n, e, 333) : t.zoomTo(m.getDoubleTapZoom(!1, t.currItem), e, 333)
            }), h("preventDragEvent", function (t, e, n) {
                var i = t.target || t.srcElement;
                i && i.getAttribute("class") && t.type.indexOf("mouse") > -1 && (i.getAttribute("class").indexOf("__caption") > 0 || /(SMALL|STRONG|EM)/i.test(i.tagName)) && (n.prevent = !1)
            }), h("bindEvents", function () {
                e.bind(i, "pswpTap click", k), e.bind(t.scrollWrap, "pswpTap", x.onGlobalTap), t.likelyTouchDevice || e.bind(t.scrollWrap, "mouseover", x.onMouseOver)
            }), h("unbindEvents", function () {
                S || D(), b && clearInterval(b), e.unbind(document, "mouseout", R), e.unbind(document, "mousemove", M), e.unbind(i, "pswpTap click", k), e.unbind(t.scrollWrap, "pswpTap", x.onGlobalTap), e.unbind(t.scrollWrap, "mouseover", x.onMouseOver), n && (e.unbind(document, n.eventK, x.updateFullscreen), n.isFullscreen() && (m.hideAnimationDuration = 0, n.exit()), n = null)
            }), h("destroy", function () {
                m.captionEl && (r && i.removeChild(r), e.removeClass(o, "pswp__caption--empty")), l && (l.children[0].onclick = null), e.removeClass(i, "pswp__ui--over-close"), e.addClass(i, "pswp__ui--hidden"), x.setIdle(!1)
            }), m.showAnimationDuration || e.removeClass(i, "pswp__ui--hidden"), h("initialZoomIn", function () {
                m.showAnimationDuration && e.removeClass(i, "pswp__ui--hidden")
            }), h("initialZoomOut", function () {
                e.addClass(i, "pswp__ui--hidden")
            }), h("parseVerticalMargin", z), Y(), m.shareEl && s && l && (S = !0), P(), V(), W(), H()
        }, x.setIdle = function (t) {
            u = t, _(i, "ui--idle", t)
        }, x.update = function () {
            T && t.currItem ? (x.updateIndexIndicator(), m.captionEl && (m.addCaptionHTMLFn(t.currItem, o), _(o, "caption--empty", !t.currItem.title)), C = !0) : C = !1, S || D(), P()
        }, x.updateFullscreen = function (i) {
            i && setTimeout(function () {
                t.setScrollOffset(0, e.getScrollY())
            }, 50), e[(n.isFullscreen() ? "add" : "remove") + "Class"](t.template, "pswp--fs")
        }, x.updateIndexIndicator = function () {
            m.counterEl && (a.innerHTML = t.getCurrentIndex() + 1 + m.indexIndicatorSep + m.getNumItemsFn())
        }, x.onGlobalTap = function (n) {
            n = n || window.event;
            var i = n.target || n.srcElement;
            if (!v)if (n.detail && "mouse" === n.detail.pointerType) {
                if (F(i))return void t.close();
                e.hasClass(i, "pswp__img") && (1 === t.getZoomLevel() && t.getZoomLevel() <= t.currItem.fitRatio ? m.clickToCloseNonZoomable && t.close() : t.toggleDesktopZoom(n.detail.releasePoint))
            } else if (m.tapToToggleControls && (T ? x.hideControls() : x.showControls()), m.tapToClose && (e.hasClass(i, "pswp__img") || F(i)))return void t.close()
        }, x.onMouseOver = function (t) {
            t = t || window.event, _(i, "ui--over-close", F(t.target || t.srcElement))
        }, x.hideControls = function () {
            e.addClass(i, "pswp__ui--hidden"), T = !1
        }, x.showControls = function () {
            T = !0, C || x.update(), e.removeClass(i, "pswp__ui--hidden")
        }, x.supportsFullscreen = function () {
            var t = document;
            return !!(t.exitFullscreen || t.mozCancelFullScreen || t.webkitExitFullscreen || t.msExitFullscreen)
        }, x.getFullscreenAPI = function () {
            var e, n = document.documentElement, i = "fullscreenchange";
            return n.requestFullscreen ? e = {
                enterK: "requestFullscreen",
                exitK: "exitFullscreen",
                elementK: "fullscreenElement",
                eventK: i
            } : n.mozRequestFullScreen ? e = {
                enterK: "mozRequestFullScreen",
                exitK: "mozCancelFullScreen",
                elementK: "mozFullScreenElement",
                eventK: "moz" + i
            } : n.webkitRequestFullscreen ? e = {
                enterK: "webkitRequestFullscreen",
                exitK: "webkitExitFullscreen",
                elementK: "webkitFullscreenElement",
                eventK: "webkit" + i
            } : n.msRequestFullscreen && (e = {
                enterK: "msRequestFullscreen",
                exitK: "msExitFullscreen",
                elementK: "msFullscreenElement",
                eventK: "MSFullscreenChange"
            }), e && (e.enter = function () {
                return c = m.closeOnScroll, m.closeOnScroll = !1, "webkitRequestFullscreen" !== this.enterK ? t.template[this.enterK]() : void t.template[this.enterK](Element.ALLOW_KEYBOARD_INPUT)
            }, e.exit = function () {
                return m.closeOnScroll = c, document[this.exitK]()
            }, e.isFullscreen = function () {
                return document[this.elementK]
            }), e
        }
    }
});
var initPhotoSwipeFromDOM = function (t) {
    for (var e = function (t) {
        for (var e, n, i, o, r = t.childNodes, a = r.length, s = [], l = 0; l < a; l++)e = r[l], 1 === e.nodeType && (n = e.children[0], i = n.getAttribute("data-size").split("x"), o = {
            src: n.getAttribute("href"),
            w: parseInt(i[0], 10),
            h: parseInt(i[1], 10)
        }, e.children.length > 1 && (o.title = e.children[1].innerHTML), n.children.length > 0 && (o.msrc = n.children[0].getAttribute("src")), o.el = e, s.push(o));
        return s
    }, n = function t(e, n) {
        return e && (n(e) ? e : t(e.parentNode, n))
    }, i = function (t) {
        t = t || window.event, t.preventDefault ? t.preventDefault() : t.returnValue = !1;
        var e = t.target || t.srcElement, i = n(e, function (t) {
            return t.tagName && "FIGURE" === t.tagName.toUpperCase()
        });
        if (i) {
            for (var r, a = i.parentNode, s = i.parentNode.childNodes, l = s.length, c = 0, u = 0; u < l; u++)if (1 === s[u].nodeType) {
                if (s[u] === i) {
                    r = c;
                    break
                }
                c++
            }
            return r >= 0 && o(r, a), !1
        }
    }, o = function (t, n, i, o) {
        var r, a, s, l = document.querySelectorAll(".pswp")[0];
        if (s = e(n), a = {
                galleryUID: n.getAttribute("data-pswp-uid"), getThumbBoundsFn: function (t) {
                    var e = s[t].el.getElementsByTagName("img")[0], n = window.pageYOffset || document.documentElement.scrollTop, i = e.getBoundingClientRect();
                    return {x: i.left, y: i.top + n, w: i.width}
                }
            }, o)if (a.galleryPIDs) {
            for (var c = 0; c < s.length; c++)if (s[c].pid == t) {
                a.index = c;
                break
            }
        } else a.index = parseInt(t, 10) - 1; else a.index = parseInt(t, 10);
        isNaN(a.index) || (i && (a.showAnimationDuration = 0), r = new PhotoSwipe(l, PhotoSwipeUI_Default, s, a), r.init())
    }, r = document.querySelectorAll(t), a = 0, s = r.length; a < s; a++)r[a].setAttribute("data-pswp-uid", a + 1), r[a].onclick = i;
    var l = function () {
        var t = window.location.hash.substring(1), e = {};
        if (t.length < 5)return e;
        for (var n = t.split("&"), i = 0; i < n.length; i++)if (n[i]) {
            var o = n[i].split("=");
            o.length < 2 || (e[o[0]] = o[1])
        }
        return e.gid && (e.gid = parseInt(e.gid, 10)), e
    }();
    l.pid && l.gid && o(l.pid, r[l.gid - 1], !0, !0)
};
initPhotoSwipeFromDOM(".mdb-lightbox"), function (t) {
    t.fn.sticky = function (e) {
        var n = {topSpacing: 0, zIndex: "", stopper: ".sticky-stopper"}, i = t.extend({}, n, e), o = function () {
            return "number" == typeof i.zIndex
        }(), r = function () {
            return 0 < t(i.stopper).length || "number" == typeof i.stopper
        }();
        return this.each(function () {
            function e() {
                var e = f.scrollTop();
                if (r && "string" == typeof d)var i = t(d).offset().top, s = i - a - l; else if (r && "number" == typeof d)var s = d;
                if (u < e) {
                    if (n.after(h).css({position: "fixed", top: l}), o && n.css({zIndex: c}), r && s < e) {
                        var p = s - e + l;
                        n.css({top: p})
                    }
                } else n.css({position: "static", top: null, left: null}), h.remove()
            }

            var n = t(this), a = n.outerHeight(), s = n.outerWidth(), l = i.topSpacing, c = i.zIndex, u = n.offset().top - l, h = t("<div></div>").width(s).height(a).addClass("sticky-placeholder"), d = i.stopper, f = t(window);
            f.bind("scroll", e)
        })
    }
}(jQuery), function t(e, n, i) {
    function o(a, s) {
        if (!n[a]) {
            if (!e[a]) {
                var l = "function" == typeof require && require;
                if (!s && l)return l(a, !0);
                if (r)return r(a, !0);
                var c = new Error("Cannot find module '" + a + "'");
                throw c.code = "MODULE_NOT_FOUND", c
            }
            var u = n[a] = {exports: {}};
            e[a][0].call(u.exports, function (t) {
                var n = e[a][1][t];
                return o(n ? n : t)
            }, u, u.exports, t, e, n, i)
        }
        return n[a].exports
    }

    for (var r = "function" == typeof require && require, a = 0; a < i.length; a++)o(i[a]);
    return o
}({
    1: [function (t, e, n) {
        "use strict";
        var i = t("../main");
        "function" == typeof define && define.amd ? define(i) : (window.PerfectScrollbar = i, void 0 === window.Ps && (window.Ps = i))
    }, {"../main": 7}],
    2: [function (t, e, n) {
        "use strict";
        function i(t, e) {
            var n = t.className.split(" ");
            n.indexOf(e) < 0 && n.push(e), t.className = n.join(" ")
        }

        function o(t, e) {
            var n = t.className.split(" "), i = n.indexOf(e);
            i >= 0 && n.splice(i, 1), t.className = n.join(" ")
        }

        n.add = function (t, e) {
            t.classList ? t.classList.add(e) : i(t, e)
        }, n.remove = function (t, e) {
            t.classList ? t.classList.remove(e) : o(t, e)
        }, n.list = function (t) {
            return t.classList ? Array.prototype.slice.apply(t.classList) : t.className.split(" ")
        }
    }, {}],
    3: [function (t, e, n) {
        "use strict";
        function i(t, e) {
            return window.getComputedStyle(t)[e]
        }

        function o(t, e, n) {
            return "number" == typeof n && (n = n.toString() + "px"), t.style[e] = n, t
        }

        function r(t, e) {
            for (var n in e) {
                var i = e[n];
                "number" == typeof i && (i = i.toString() + "px"), t.style[n] = i
            }
            return t
        }

        var a = {};
        a.e = function (t, e) {
            var n = document.createElement(t);
            return n.className = e, n
        }, a.appendTo = function (t, e) {
            return e.appendChild(t), t
        }, a.css = function (t, e, n) {
            return "object" == typeof e ? r(t, e) : void 0 === n ? i(t, e) : o(t, e, n)
        }, a.matches = function (t, e) {
            return void 0 !== t.matches ? t.matches(e) : void 0 !== t.matchesSelector ? t.matchesSelector(e) : void 0 !== t.webkitMatchesSelector ? t.webkitMatchesSelector(e) : void 0 !== t.mozMatchesSelector ? t.mozMatchesSelector(e) : void 0 !== t.msMatchesSelector ? t.msMatchesSelector(e) : void 0
        }, a.remove = function (t) {
            void 0 !== t.remove ? t.remove() : t.parentNode && t.parentNode.removeChild(t)
        }, a.queryChildren = function (t, e) {
            return Array.prototype.filter.call(t.childNodes, function (t) {
                return a.matches(t, e)
            })
        }, e.exports = a
    }, {}],
    4: [function (t, e, n) {
        "use strict";
        var i = function (t) {
            this.element = t, this.events = {}
        };
        i.prototype.bind = function (t, e) {
            void 0 === this.events[t] && (this.events[t] = []), this.events[t].push(e), this.element.addEventListener(t, e, !1)
        }, i.prototype.unbind = function (t, e) {
            var n = void 0 !== e;
            this.events[t] = this.events[t].filter(function (i) {
                return !(!n || i === e) || (this.element.removeEventListener(t, i, !1), !1)
            }, this)
        }, i.prototype.unbindAll = function () {
            for (var t in this.events)this.unbind(t)
        };
        var o = function () {
            this.eventElements = []
        };
        o.prototype.eventElement = function (t) {
            var e = this.eventElements.filter(function (e) {
                return e.element === t
            })[0];
            return void 0 === e && (e = new i(t), this.eventElements.push(e)), e
        }, o.prototype.bind = function (t, e, n) {
            this.eventElement(t).bind(e, n)
        }, o.prototype.unbind = function (t, e, n) {
            this.eventElement(t).unbind(e, n)
        }, o.prototype.unbindAll = function () {
            for (var t = 0; t < this.eventElements.length; t++)this.eventElements[t].unbindAll()
        }, o.prototype.once = function (t, e, n) {
            var i = this.eventElement(t), o = function (t) {
                i.unbind(e, o), n(t)
            };
            i.bind(e, o)
        }, e.exports = o
    }, {}],
    5: [function (t, e, n) {
        "use strict";
        e.exports = function () {
            function t() {
                return Math.floor(65536 * (1 + Math.random())).toString(16).substring(1)
            }

            return function () {
                return t() + t() + "-" + t() + "-" + t() + "-" + t() + "-" + t() + t() + t()
            }
        }()
    }, {}],
    6: [function (t, e, n) {
        "use strict";
        var i = t("./class"), o = t("./dom"), r = n.toInt = function (t) {
            return parseInt(t, 10) || 0
        }, a = n.clone = function (t) {
            if (t) {
                if (t.constructor === Array)return t.map(a);
                if ("object" == typeof t) {
                    var e = {};
                    for (var n in t)e[n] = a(t[n]);
                    return e
                }
                return t
            }
            return null
        };
        n.extend = function (t, e) {
            var n = a(t);
            for (var i in e)n[i] = a(e[i]);
            return n
        }, n.isEditable = function (t) {
            return o.matches(t, "input,[contenteditable]") || o.matches(t, "select,[contenteditable]") || o.matches(t, "textarea,[contenteditable]") || o.matches(t, "button,[contenteditable]")
        }, n.removePsClasses = function (t) {
            for (var e = i.list(t), n = 0; n < e.length; n++) {
                var o = e[n];
                0 === o.indexOf("ps-") && i.remove(t, o)
            }
        }, n.outerWidth = function (t) {
            return r(o.css(t, "width")) + r(o.css(t, "paddingLeft")) + r(o.css(t, "paddingRight")) + r(o.css(t, "borderLeftWidth")) + r(o.css(t, "borderRightWidth"))
        }, n.startScrolling = function (t, e) {
            i.add(t, "ps-in-scrolling"), void 0 !== e ? i.add(t, "ps-" + e) : (i.add(t, "ps-x"), i.add(t, "ps-y"))
        }, n.stopScrolling = function (t, e) {
            i.remove(t, "ps-in-scrolling"), void 0 !== e ? i.remove(t, "ps-" + e) : (i.remove(t, "ps-x"), i.remove(t, "ps-y"))
        }, n.env = {
            isWebKit: "WebkitAppearance" in document.documentElement.style,
            supportsTouch: "ontouchstart" in window || window.DocumentTouch && document instanceof window.DocumentTouch,
            supportsIePointer: null !== window.navigator.msMaxTouchPoints
        }
    }, {"./class": 2, "./dom": 3}],
    7: [function (t, e, n) {
        "use strict";
        var i = t("./plugin/destroy"), o = t("./plugin/initialize"), r = t("./plugin/update");
        e.exports = {initialize: o, update: r, destroy: i}
    }, {"./plugin/destroy": 9, "./plugin/initialize": 17, "./plugin/update": 21}],
    8: [function (t, e, n) {
        "use strict";
        e.exports = {
            handlers: ["click-rail", "drag-scrollbar", "keyboard", "wheel", "touch"],
            maxScrollbarLength: null,
            minScrollbarLength: null,
            scrollXMarginOffset: 0,
            scrollYMarginOffset: 0,
            suppressScrollX: !1,
            suppressScrollY: !1,
            swipePropagation: !0,
            useBothWheelAxes: !1,
            wheelPropagation: !1,
            wheelSpeed: 1,
            theme: "default"
        }
    }, {}],
    9: [function (t, e, n) {
        "use strict";
        var i = t("../lib/helper"), o = t("../lib/dom"), r = t("./instances");
        e.exports = function (t) {
            var e = r.get(t);
            e && (e.event.unbindAll(), o.remove(e.scrollbarX), o.remove(e.scrollbarY), o.remove(e.scrollbarXRail), o.remove(e.scrollbarYRail), i.removePsClasses(t), r.remove(t))
        }
    }, {"../lib/dom": 3, "../lib/helper": 6, "./instances": 18}],
    10: [function (t, e, n) {
        "use strict";
        function i(t, e) {
            function n(t) {
                return t.getBoundingClientRect()
            }

            var i = function (t) {
                t.stopPropagation()
            };
            e.event.bind(e.scrollbarY, "click", i), e.event.bind(e.scrollbarYRail, "click", function (i) {
                var o = i.pageY - window.pageYOffset - n(e.scrollbarYRail).top, s = o > e.scrollbarYTop ? 1 : -1;
                a(t, "top", t.scrollTop + s * e.containerHeight), r(t), i.stopPropagation()
            }), e.event.bind(e.scrollbarX, "click", i), e.event.bind(e.scrollbarXRail, "click", function (i) {
                var o = i.pageX - window.pageXOffset - n(e.scrollbarXRail).left, s = o > e.scrollbarXLeft ? 1 : -1;
                a(t, "left", t.scrollLeft + s * e.containerWidth), r(t), i.stopPropagation()
            })
        }

        var o = t("../instances"), r = t("../update-geometry"), a = t("../update-scroll");
        e.exports = function (t) {
            i(t, o.get(t))
        }
    }, {"../instances": 18, "../update-geometry": 19, "../update-scroll": 20}],
    11: [function (t, e, n) {
        "use strict";
        function i(t, e) {
            function n(n) {
                var o = i + n * e.railXRatio, a = Math.max(0, e.scrollbarXRail.getBoundingClientRect().left) + e.railXRatio * (e.railXWidth - e.scrollbarXWidth);
                e.scrollbarXLeft = o < 0 ? 0 : o > a ? a : o, c(t, "left", r.toInt(e.scrollbarXLeft * (e.contentWidth - e.containerWidth) / (e.containerWidth - e.railXRatio * e.scrollbarXWidth)) - e.negativeScrollAdjustment)
            }

            var i = null, o = null, s = function (e) {
                n(e.pageX - o), l(t), e.stopPropagation(), e.preventDefault()
            }, u = function () {
                r.stopScrolling(t, "x"), e.event.unbind(e.ownerDocument, "mousemove", s)
            };
            e.event.bind(e.scrollbarX, "mousedown", function (n) {
                o = n.pageX, i = r.toInt(a.css(e.scrollbarX, "left")) * e.railXRatio, r.startScrolling(t, "x"), e.event.bind(e.ownerDocument, "mousemove", s), e.event.once(e.ownerDocument, "mouseup", u), n.stopPropagation(), n.preventDefault()
            })
        }

        function o(t, e) {
            function n(n) {
                var o = i + n * e.railYRatio, a = Math.max(0, e.scrollbarYRail.getBoundingClientRect().top) + e.railYRatio * (e.railYHeight - e.scrollbarYHeight);
                e.scrollbarYTop = o < 0 ? 0 : o > a ? a : o, c(t, "top", r.toInt(e.scrollbarYTop * (e.contentHeight - e.containerHeight) / (e.containerHeight - e.railYRatio * e.scrollbarYHeight)))
            }

            var i = null, o = null, s = function (e) {
                n(e.pageY - o), l(t), e.stopPropagation(), e.preventDefault()
            }, u = function () {
                r.stopScrolling(t, "y"), e.event.unbind(e.ownerDocument, "mousemove", s)
            };
            e.event.bind(e.scrollbarY, "mousedown", function (n) {
                o = n.pageY, i = r.toInt(a.css(e.scrollbarY, "top")) * e.railYRatio, r.startScrolling(t, "y"), e.event.bind(e.ownerDocument, "mousemove", s), e.event.once(e.ownerDocument, "mouseup", u), n.stopPropagation(), n.preventDefault()
            })
        }

        var r = t("../../lib/helper"), a = t("../../lib/dom"), s = t("../instances"), l = t("../update-geometry"), c = t("../update-scroll");
        e.exports = function (t) {
            var e = s.get(t);
            i(t, e), o(t, e)
        }
    }, {
        "../../lib/dom": 3,
        "../../lib/helper": 6,
        "../instances": 18,
        "../update-geometry": 19,
        "../update-scroll": 20
    }],
    12: [function (t, e, n) {
        "use strict";
        function i(t, e) {
            function n(n, i) {
                var o = t.scrollTop;
                if (0 === n) {
                    if (!e.scrollbarYActive)return !1;
                    if (0 === o && i > 0 || o >= e.contentHeight - e.containerHeight && i < 0)return !e.settings.wheelPropagation
                }
                var r = t.scrollLeft;
                if (0 === i) {
                    if (!e.scrollbarXActive)return !1;
                    if (0 === r && n < 0 || r >= e.contentWidth - e.containerWidth && n > 0)return !e.settings.wheelPropagation
                }
                return !0
            }

            var i = !1;
            e.event.bind(t, "mouseenter", function () {
                i = !0
            }), e.event.bind(t, "mouseleave", function () {
                i = !1
            });
            var a = !1;
            e.event.bind(e.ownerDocument, "keydown", function (c) {
                if (!(c.isDefaultPrevented && c.isDefaultPrevented() || c.defaultPrevented)) {
                    var u = r.matches(e.scrollbarX, ":focus") || r.matches(e.scrollbarY, ":focus");
                    if (i || u) {
                        var h = document.activeElement ? document.activeElement : e.ownerDocument.activeElement;
                        if (h) {
                            if ("IFRAME" === h.tagName)h = h.contentDocument.activeElement; else for (; h.shadowRoot;)h = h.shadowRoot.activeElement;
                            if (o.isEditable(h))return
                        }
                        var d = 0, f = 0;
                        switch (c.which) {
                            case 37:
                                d = c.metaKey ? -e.contentWidth : c.altKey ? -e.containerWidth : -30;
                                break;
                            case 38:
                                f = c.metaKey ? e.contentHeight : c.altKey ? e.containerHeight : 30;
                                break;
                            case 39:
                                d = c.metaKey ? e.contentWidth : c.altKey ? e.containerWidth : 30;
                                break;
                            case 40:
                                f = c.metaKey ? -e.contentHeight : c.altKey ? -e.containerHeight : -30;
                                break;
                            case 33:
                                f = 90;
                                break;
                            case 32:
                                f = c.shiftKey ? 90 : -90;
                                break;
                            case 34:
                                f = -90;
                                break;
                            case 35:
                                f = c.ctrlKey ? -e.contentHeight : -e.containerHeight;
                                break;
                            case 36:
                                f = c.ctrlKey ? t.scrollTop : e.containerHeight;
                                break;
                            default:
                                return
                        }
                        l(t, "top", t.scrollTop - f), l(t, "left", t.scrollLeft + d), s(t), a = n(d, f), a && c.preventDefault()
                    }
                }
            })
        }

        var o = t("../../lib/helper"), r = t("../../lib/dom"), a = t("../instances"), s = t("../update-geometry"), l = t("../update-scroll");
        e.exports = function (t) {
            i(t, a.get(t))
        }
    }, {
        "../../lib/dom": 3,
        "../../lib/helper": 6,
        "../instances": 18,
        "../update-geometry": 19,
        "../update-scroll": 20
    }],
    13: [function (t, e, n) {
        "use strict";
        function i(t, e) {
            function n(n, i) {
                var o = t.scrollTop;
                if (0 === n) {
                    if (!e.scrollbarYActive)return !1;
                    if (0 === o && i > 0 || o >= e.contentHeight - e.containerHeight && i < 0)return !e.settings.wheelPropagation
                }
                var r = t.scrollLeft;
                if (0 === i) {
                    if (!e.scrollbarXActive)return !1;
                    if (0 === r && n < 0 || r >= e.contentWidth - e.containerWidth && n > 0)return !e.settings.wheelPropagation
                }
                return !0
            }

            function i(t) {
                var e = t.deltaX, n = -1 * t.deltaY;
                return void 0 !== e && void 0 !== n || (e = -1 * t.wheelDeltaX / 6, n = t.wheelDeltaY / 6), t.deltaMode && 1 === t.deltaMode && (e *= 10, n *= 10), e !== e && n !== n && (e = 0, n = t.wheelDelta), t.shiftKey ? [-n, -e] : [e, n]
            }

            function o(e, n) {
                var i = t.querySelector("textarea:hover, select[multiple]:hover, .ps-child:hover");
                if (i) {
                    if (!window.getComputedStyle(i).overflow.match(/(scroll|auto)/))return !1;
                    var o = i.scrollHeight - i.clientHeight;
                    if (o > 0 && !(0 === i.scrollTop && n > 0 || i.scrollTop === o && n < 0))return !0;
                    var r = i.scrollLeft - i.clientWidth;
                    if (r > 0 && !(0 === i.scrollLeft && e < 0 || i.scrollLeft === r && e > 0))return !0
                }
                return !1
            }

            function s(s) {
                var c = i(s), u = c[0], h = c[1];
                o(u, h) || (l = !1, e.settings.useBothWheelAxes ? e.scrollbarYActive && !e.scrollbarXActive ? (h ? a(t, "top", t.scrollTop - h * e.settings.wheelSpeed) : a(t, "top", t.scrollTop + u * e.settings.wheelSpeed), l = !0) : e.scrollbarXActive && !e.scrollbarYActive && (u ? a(t, "left", t.scrollLeft + u * e.settings.wheelSpeed) : a(t, "left", t.scrollLeft - h * e.settings.wheelSpeed), l = !0) : (a(t, "top", t.scrollTop - h * e.settings.wheelSpeed), a(t, "left", t.scrollLeft + u * e.settings.wheelSpeed)), r(t), (l = l || n(u, h)) && (s.stopPropagation(), s.preventDefault()))
            }

            var l = !1;
            void 0 !== window.onwheel ? e.event.bind(t, "wheel", s) : void 0 !== window.onmousewheel && e.event.bind(t, "mousewheel", s)
        }

        var o = t("../instances"), r = t("../update-geometry"), a = t("../update-scroll");
        e.exports = function (t) {
            i(t, o.get(t))
        }
    }, {"../instances": 18, "../update-geometry": 19, "../update-scroll": 20}],
    14: [function (t, e, n) {
        "use strict";
        function i(t, e) {
            e.event.bind(t, "scroll", function () {
                r(t)
            })
        }

        var o = t("../instances"), r = t("../update-geometry");
        e.exports = function (t) {
            i(t, o.get(t))
        }
    }, {"../instances": 18, "../update-geometry": 19}],
    15: [function (t, e, n) {
        "use strict";
        function i(t, e) {
            function n() {
                var t = window.getSelection ? window.getSelection() : document.getSelection ? document.getSelection() : "";
                return 0 === t.toString().length ? null : t.getRangeAt(0).commonAncestorContainer
            }

            function i() {
                c || (c = setInterval(function () {
                    if (!r.get(t))return void clearInterval(c);
                    s(t, "top", t.scrollTop + u.top), s(t, "left", t.scrollLeft + u.left), a(t)
                }, 50))
            }

            function l() {
                c && (clearInterval(c), c = null), o.stopScrolling(t)
            }

            var c = null, u = {top: 0, left: 0}, h = !1;
            e.event.bind(e.ownerDocument, "selectionchange", function () {
                t.contains(n()) ? h = !0 : (h = !1, l())
            }), e.event.bind(window, "mouseup", function () {
                h && (h = !1, l())
            }), e.event.bind(window, "keyup", function () {
                h && (h = !1, l())
            }), e.event.bind(window, "mousemove", function (e) {
                if (h) {
                    var n = {x: e.pageX, y: e.pageY}, r = {
                        left: t.offsetLeft,
                        right: t.offsetLeft + t.offsetWidth,
                        top: t.offsetTop,
                        bottom: t.offsetTop + t.offsetHeight
                    };
                    n.x < r.left + 3 ? (u.left = -5, o.startScrolling(t, "x")) : n.x > r.right - 3 ? (u.left = 5, o.startScrolling(t, "x")) : u.left = 0, n.y < r.top + 3 ? (r.top + 3 - n.y < 5 ? u.top = -5 : u.top = -20, o.startScrolling(t, "y")) : n.y > r.bottom - 3 ? (n.y - r.bottom + 3 < 5 ? u.top = 5 : u.top = 20, o.startScrolling(t, "y")) : u.top = 0, 0 === u.top && 0 === u.left ? l() : i()
                }
            })
        }

        var o = t("../../lib/helper"), r = t("../instances"), a = t("../update-geometry"), s = t("../update-scroll");
        e.exports = function (t) {
            i(t, r.get(t))
        }
    }, {"../../lib/helper": 6, "../instances": 18, "../update-geometry": 19, "../update-scroll": 20}],
    16: [function (t, e, n) {
        "use strict";
        function i(t, e, n, i) {
            function o(n, i) {
                var o = t.scrollTop, r = t.scrollLeft, a = Math.abs(n), s = Math.abs(i);
                if (s > a) {
                    if (i < 0 && o === e.contentHeight - e.containerHeight || i > 0 && 0 === o)return !e.settings.swipePropagation
                } else if (a > s && (n < 0 && r === e.contentWidth - e.containerWidth || n > 0 && 0 === r))return !e.settings.swipePropagation;
                return !0
            }

            function l(e, n) {
                s(t, "top", t.scrollTop - n), s(t, "left", t.scrollLeft - e), a(t)
            }

            function c() {
                w = !0
            }

            function u() {
                w = !1
            }

            function h(t) {
                return t.targetTouches ? t.targetTouches[0] : t
            }

            function d(t) {
                return !(!t.targetTouches || 1 !== t.targetTouches.length) || !(!t.pointerType || "mouse" === t.pointerType || t.pointerType === t.MSPOINTER_TYPE_MOUSE)
            }

            function f(t) {
                if (d(t)) {
                    x = !0;
                    var e = h(t);
                    m.pageX = e.pageX, m.pageY = e.pageY, v = (new Date).getTime(), null !== b && clearInterval(b), t.stopPropagation()
                }
            }

            function p(t) {
                if (!x && e.settings.swipePropagation && f(t), !w && x && d(t)) {
                    var n = h(t), i = {pageX: n.pageX, pageY: n.pageY}, r = i.pageX - m.pageX, a = i.pageY - m.pageY;
                    l(r, a), m = i;
                    var s = (new Date).getTime(), c = s - v;
                    c > 0 && (y.x = r / c, y.y = a / c, v = s), o(r, a) && (t.stopPropagation(), t.preventDefault())
                }
            }

            function g() {
                !w && x && (x = !1, clearInterval(b), b = setInterval(function () {
                    return r.get(t) && (y.x || y.y) ? Math.abs(y.x) < .01 && Math.abs(y.y) < .01 ? void clearInterval(b) : (l(30 * y.x, 30 * y.y), y.x *= .8, void(y.y *= .8)) : void clearInterval(b)
                }, 10))
            }

            var m = {}, v = 0, y = {}, b = null, w = !1, x = !1;
            n ? (e.event.bind(window, "touchstart", c), e.event.bind(window, "touchend", u), e.event.bind(t, "touchstart", f), e.event.bind(t, "touchmove", p), e.event.bind(t, "touchend", g)) : i && (window.PointerEvent ? (e.event.bind(window, "pointerdown", c), e.event.bind(window, "pointerup", u), e.event.bind(t, "pointerdown", f), e.event.bind(t, "pointermove", p), e.event.bind(t, "pointerup", g)) : window.MSPointerEvent && (e.event.bind(window, "MSPointerDown", c), e.event.bind(window, "MSPointerUp", u), e.event.bind(t, "MSPointerDown", f), e.event.bind(t, "MSPointerMove", p), e.event.bind(t, "MSPointerUp", g)))
        }

        var o = t("../../lib/helper"), r = t("../instances"), a = t("../update-geometry"), s = t("../update-scroll");
        e.exports = function (t) {
            if (o.env.supportsTouch || o.env.supportsIePointer) {
                i(t, r.get(t), o.env.supportsTouch, o.env.supportsIePointer)
            }
        }
    }, {"../../lib/helper": 6, "../instances": 18, "../update-geometry": 19, "../update-scroll": 20}],
    17: [function (t, e, n) {
        "use strict";
        var i = t("../lib/helper"), o = t("../lib/class"), r = t("./instances"), a = t("./update-geometry"), s = {
            "click-rail": t("./handler/click-rail"),
            "drag-scrollbar": t("./handler/drag-scrollbar"),
            keyboard: t("./handler/keyboard"),
            wheel: t("./handler/mouse-wheel"),
            touch: t("./handler/touch"),
            selection: t("./handler/selection")
        }, l = t("./handler/native-scroll");
        e.exports = function (t, e) {
            e = "object" == typeof e ? e : {}, o.add(t, "ps-container");
            var n = r.add(t);
            n.settings = i.extend(n.settings, e), o.add(t, "ps-theme-" + n.settings.theme), n.settings.handlers.forEach(function (e) {
                s[e](t)
            }), l(t), a(t)
        }
    }, {
        "../lib/class": 2,
        "../lib/helper": 6,
        "./handler/click-rail": 10,
        "./handler/drag-scrollbar": 11,
        "./handler/keyboard": 12,
        "./handler/mouse-wheel": 13,
        "./handler/native-scroll": 14,
        "./handler/selection": 15,
        "./handler/touch": 16,
        "./instances": 18,
        "./update-geometry": 19
    }],
    18: [function (t, e, n) {
        "use strict";
        function i(t) {
            function e() {
                l.add(t, "ps-focus")
            }

            function n() {
                l.remove(t, "ps-focus")
            }

            var i = this;
            i.settings = s.clone(c), i.containerWidth = null, i.containerHeight = null, i.contentWidth = null, i.contentHeight = null, i.isRtl = "rtl" === u.css(t, "direction"), i.isNegativeScroll = function () {
                var e = t.scrollLeft, n = null;
                return t.scrollLeft = -1, n = t.scrollLeft < 0, t.scrollLeft = e, n
            }(), i.negativeScrollAdjustment = i.isNegativeScroll ? t.scrollWidth - t.clientWidth : 0, i.event = new h, i.ownerDocument = t.ownerDocument || document, i.scrollbarXRail = u.appendTo(u.e("div", "ps-scrollbar-x-rail"), t), i.scrollbarX = u.appendTo(u.e("div", "ps-scrollbar-x"), i.scrollbarXRail), i.scrollbarX.setAttribute("tabindex", 0), i.event.bind(i.scrollbarX, "focus", e), i.event.bind(i.scrollbarX, "blur", n), i.scrollbarXActive = null, i.scrollbarXWidth = null, i.scrollbarXLeft = null, i.scrollbarXBottom = s.toInt(u.css(i.scrollbarXRail, "bottom")), i.isScrollbarXUsingBottom = i.scrollbarXBottom === i.scrollbarXBottom, i.scrollbarXTop = i.isScrollbarXUsingBottom ? null : s.toInt(u.css(i.scrollbarXRail, "top")), i.railBorderXWidth = s.toInt(u.css(i.scrollbarXRail, "borderLeftWidth")) + s.toInt(u.css(i.scrollbarXRail, "borderRightWidth")), u.css(i.scrollbarXRail, "display", "block"), i.railXMarginWidth = s.toInt(u.css(i.scrollbarXRail, "marginLeft")) + s.toInt(u.css(i.scrollbarXRail, "marginRight")), u.css(i.scrollbarXRail, "display", ""), i.railXWidth = null, i.railXRatio = null, i.scrollbarYRail = u.appendTo(u.e("div", "ps-scrollbar-y-rail"), t), i.scrollbarY = u.appendTo(u.e("div", "ps-scrollbar-y"), i.scrollbarYRail), i.scrollbarY.setAttribute("tabindex", 0), i.event.bind(i.scrollbarY, "focus", e), i.event.bind(i.scrollbarY, "blur", n), i.scrollbarYActive = null, i.scrollbarYHeight = null, i.scrollbarYTop = null, i.scrollbarYRight = s.toInt(u.css(i.scrollbarYRail, "right")), i.isScrollbarYUsingRight = i.scrollbarYRight === i.scrollbarYRight, i.scrollbarYLeft = i.isScrollbarYUsingRight ? null : s.toInt(u.css(i.scrollbarYRail, "left")), i.scrollbarYOuterWidth = i.isRtl ? s.outerWidth(i.scrollbarY) : null, i.railBorderYWidth = s.toInt(u.css(i.scrollbarYRail, "borderTopWidth")) + s.toInt(u.css(i.scrollbarYRail, "borderBottomWidth")), u.css(i.scrollbarYRail, "display", "block"), i.railYMarginHeight = s.toInt(u.css(i.scrollbarYRail, "marginTop")) + s.toInt(u.css(i.scrollbarYRail, "marginBottom")), u.css(i.scrollbarYRail, "display", ""), i.railYHeight = null, i.railYRatio = null
        }

        function o(t) {
            return t.getAttribute("data-ps-id")
        }

        function r(t, e) {
            t.setAttribute("data-ps-id", e)
        }

        function a(t) {
            t.removeAttribute("data-ps-id")
        }

        var s = t("../lib/helper"), l = t("../lib/class"), c = t("./default-setting"), u = t("../lib/dom"), h = t("../lib/event-manager"), d = t("../lib/guid"), f = {};
        n.add = function (t) {
            var e = d();
            return r(t, e), f[e] = new i(t), f[e]
        }, n.remove = function (t) {
            delete f[o(t)], a(t)
        }, n.get = function (t) {
            return f[o(t)]
        }
    }, {
        "../lib/class": 2,
        "../lib/dom": 3,
        "../lib/event-manager": 4,
        "../lib/guid": 5,
        "../lib/helper": 6,
        "./default-setting": 8
    }],
    19: [function (t, e, n) {
        "use strict";
        function i(t, e) {
            return t.settings.minScrollbarLength && (e = Math.max(e, t.settings.minScrollbarLength)), t.settings.maxScrollbarLength && (e = Math.min(e, t.settings.maxScrollbarLength)), e
        }

        function o(t, e) {
            var n = {width: e.railXWidth};
            e.isRtl ? n.left = e.negativeScrollAdjustment + t.scrollLeft + e.containerWidth - e.contentWidth : n.left = t.scrollLeft, e.isScrollbarXUsingBottom ? n.bottom = e.scrollbarXBottom - t.scrollTop : n.top = e.scrollbarXTop + t.scrollTop, s.css(e.scrollbarXRail, n);
            var i = {top: t.scrollTop, height: e.railYHeight};
            e.isScrollbarYUsingRight ? e.isRtl ? i.right = e.contentWidth - (e.negativeScrollAdjustment + t.scrollLeft) - e.scrollbarYRight - e.scrollbarYOuterWidth : i.right = e.scrollbarYRight - t.scrollLeft : e.isRtl ? i.left = e.negativeScrollAdjustment + t.scrollLeft + 2 * e.containerWidth - e.contentWidth - e.scrollbarYLeft - e.scrollbarYOuterWidth : i.left = e.scrollbarYLeft + t.scrollLeft, s.css(e.scrollbarYRail, i), s.css(e.scrollbarX, {
                left: e.scrollbarXLeft,
                width: e.scrollbarXWidth - e.railBorderXWidth
            }), s.css(e.scrollbarY, {top: e.scrollbarYTop, height: e.scrollbarYHeight - e.railBorderYWidth})
        }

        var r = t("../lib/helper"), a = t("../lib/class"), s = t("../lib/dom"), l = t("./instances"), c = t("./update-scroll");
        e.exports = function (t) {
            var e = l.get(t);
            e.containerWidth = t.clientWidth, e.containerHeight = t.clientHeight, e.contentWidth = t.scrollWidth, e.contentHeight = t.scrollHeight;
            var n;
            t.contains(e.scrollbarXRail) || (n = s.queryChildren(t, ".ps-scrollbar-x-rail"), n.length > 0 && n.forEach(function (t) {
                s.remove(t)
            }), s.appendTo(e.scrollbarXRail, t)), t.contains(e.scrollbarYRail) || (n = s.queryChildren(t, ".ps-scrollbar-y-rail"), n.length > 0 && n.forEach(function (t) {
                s.remove(t)
            }), s.appendTo(e.scrollbarYRail, t)), !e.settings.suppressScrollX && e.containerWidth + e.settings.scrollXMarginOffset < e.contentWidth ? (e.scrollbarXActive = !0, e.railXWidth = e.containerWidth - e.railXMarginWidth, e.railXRatio = e.containerWidth / e.railXWidth, e.scrollbarXWidth = i(e, r.toInt(e.railXWidth * e.containerWidth / e.contentWidth)), e.scrollbarXLeft = r.toInt((e.negativeScrollAdjustment + t.scrollLeft) * (e.railXWidth - e.scrollbarXWidth) / (e.contentWidth - e.containerWidth))) : e.scrollbarXActive = !1, !e.settings.suppressScrollY && e.containerHeight + e.settings.scrollYMarginOffset < e.contentHeight ? (e.scrollbarYActive = !0, e.railYHeight = e.containerHeight - e.railYMarginHeight, e.railYRatio = e.containerHeight / e.railYHeight, e.scrollbarYHeight = i(e, r.toInt(e.railYHeight * e.containerHeight / e.contentHeight)), e.scrollbarYTop = r.toInt(t.scrollTop * (e.railYHeight - e.scrollbarYHeight) / (e.contentHeight - e.containerHeight))) : e.scrollbarYActive = !1, e.scrollbarXLeft >= e.railXWidth - e.scrollbarXWidth && (e.scrollbarXLeft = e.railXWidth - e.scrollbarXWidth), e.scrollbarYTop >= e.railYHeight - e.scrollbarYHeight && (e.scrollbarYTop = e.railYHeight - e.scrollbarYHeight), o(t, e), e.scrollbarXActive ? a.add(t, "ps-active-x") : (a.remove(t, "ps-active-x"), e.scrollbarXWidth = 0, e.scrollbarXLeft = 0, c(t, "left", 0)), e.scrollbarYActive ? a.add(t, "ps-active-y") : (a.remove(t, "ps-active-y"), e.scrollbarYHeight = 0, e.scrollbarYTop = 0, c(t, "top", 0))
        }
    }, {"../lib/class": 2, "../lib/dom": 3, "../lib/helper": 6, "./instances": 18, "./update-scroll": 20}],
    20: [function (t, e, n) {
        "use strict";
        var i, o, r = t("./instances"), a = function (t) {
            var e = document.createEvent("Event");
            return e.initEvent(t, !0, !0), e
        };
        e.exports = function (t, e, n) {
            if (void 0 === t)throw"You must provide an element to the update-scroll function";
            if (void 0 === e)throw"You must provide an axis to the update-scroll function";
            if (void 0 === n)throw"You must provide a value to the update-scroll function";
            "top" === e && n <= 0 && (t.scrollTop = n = 0, t.dispatchEvent(a("ps-y-reach-start"))), "left" === e && n <= 0 && (t.scrollLeft = n = 0, t.dispatchEvent(a("ps-x-reach-start")));
            var s = r.get(t);
            "top" === e && n >= s.contentHeight - s.containerHeight && (n = s.contentHeight - s.containerHeight, n - t.scrollTop <= 1 ? n = t.scrollTop : t.scrollTop = n, t.dispatchEvent(a("ps-y-reach-end"))), "left" === e && n >= s.contentWidth - s.containerWidth && (n = s.contentWidth - s.containerWidth, n - t.scrollLeft <= 1 ? n = t.scrollLeft : t.scrollLeft = n, t.dispatchEvent(a("ps-x-reach-end"))), i || (i = t.scrollTop), o || (o = t.scrollLeft), "top" === e && n < i && t.dispatchEvent(a("ps-scroll-up")), "top" === e && n > i && t.dispatchEvent(a("ps-scroll-down")), "left" === e && n < o && t.dispatchEvent(a("ps-scroll-left")), "left" === e && n > o && t.dispatchEvent(a("ps-scroll-right")), "top" === e && (t.scrollTop = i = n, t.dispatchEvent(a("ps-scroll-y"))), "left" === e && (t.scrollLeft = o = n, t.dispatchEvent(a("ps-scroll-x")))
        }
    }, {"./instances": 18}],
    21: [function (t, e, n) {
        "use strict";
        var i = t("../lib/helper"), o = t("../lib/dom"), r = t("./instances"), a = t("./update-geometry"), s = t("./update-scroll");
        e.exports = function (t) {
            var e = r.get(t);
            e && (e.negativeScrollAdjustment = e.isNegativeScroll ? t.scrollWidth - t.clientWidth : 0, o.css(e.scrollbarXRail, "display", "block"), o.css(e.scrollbarYRail, "display", "block"), e.railXMarginWidth = i.toInt(o.css(e.scrollbarXRail, "marginLeft")) + i.toInt(o.css(e.scrollbarXRail, "marginRight")), e.railYMarginHeight = i.toInt(o.css(e.scrollbarYRail, "marginTop")) + i.toInt(o.css(e.scrollbarYRail, "marginBottom")), o.css(e.scrollbarXRail, "display", "none"), o.css(e.scrollbarYRail, "display", "none"), a(t), s(t, "top", t.scrollTop), s(t, "left", t.scrollLeft), o.css(e.scrollbarXRail, "display", ""), o.css(e.scrollbarYRail, "display", ""))
        }
    }, {"../lib/dom": 3, "../lib/helper": 6, "./instances": 18, "./update-geometry": 19, "./update-scroll": 20}]
}, {}, [1]), $(function () {
    $(".arrow-r").on("click", function () {
        $(".arrow-r").not(this).find(".fa-angle-down").removeClass("rotate-element"), $(this).find(".fa-angle-down").toggleClass("rotate-element")
    })
}), function (t) {
    var e = !1, n = {data: [], placeholder: "", secondaryPlaceholder: ""};
    t(document).ready(function () {
        t(document).on("click", ".chip .close", function (e) {
            t(this).closest(".chips").data("initialized") || t(this).closest(".chip").remove()
        })
    }), t.fn.material_chip = function (i) {
        var o = this;
        return this.$el = t(this), this.$document = t(document), this.SELS = {
            CHIPS: ".chips",
            CHIP: ".chip",
            INPUT: "input",
            DELETE: ".fa",
            SELECTED_CHIP: ".selected"
        }, "data" === i ? this.$el.data("chips") : "options" === i ? this.$el.data("options") : (this.$el.data("options", t.extend({}, n, i)), this.init = function () {
            var e = 0;
            o.$el.each(function () {
                var n = t(this);
                if (!n.data("initialized")) {
                    var i = n.data("options");
                    (!i.data || !i.data instanceof Array) && (i.data = []), n.data("chips", i.data), n.data("index", e), n.data("initialized", !0), n.hasClass(o.SELS.CHIPS) || n.addClass("chips"), o.chips(n), e++
                }
            })
        }, this.handleEvents = function () {
            var e = o.SELS;
            o.$document.on("click", e.CHIPS, function (n) {
                t(n.target).find(e.INPUT).focus()
            }), o.$document.on("click", e.CHIP, function (n) {
                t(e.CHIP).removeClass("selected"), t(this).toggleClass("selected")
            }), o.$document.on("keydown", function (n) {
                if (!t(n.target).is("input, textarea")) {
                    var i, r = o.$document.find(e.CHIP + e.SELECTED_CHIP), a = r.closest(e.CHIPS), s = r.siblings(e.CHIP).length;
                    if (r.length)if (8 === n.which || 46 === n.which) {
                        n.preventDefault();
                        var l = a.data("index");
                        i = r.index(), o.deleteChip(l, i, a);
                        var c = null;
                        i + 1 < s ? c = i : i !== s && i + 1 !== s || (c = s - 1), c < 0 && (c = null), null !== c && o.selectChip(l, c, a), s || a.find("input").focus()
                    } else if (37 === n.which) {
                        if ((i = r.index() - 1) < 0)return;
                        t(e.CHIP).removeClass("selected"), o.selectChip(a.data("index"), i, a)
                    } else if (39 === n.which) {
                        if (i = r.index() + 1, t(e.CHIP).removeClass("selected"), i > s)return void a.find("input").focus();
                        o.selectChip(a.data("index"), i, a)
                    }
                }
            }), o.$document.on("focusin", e.CHIPS + " " + e.INPUT, function (n) {
                t(n.target).closest(e.CHIPS).addClass("focus"), t(e.CHIP).removeClass("selected")
            }), o.$document.on("focusout", e.CHIPS + " " + e.INPUT, function (n) {
                t(n.target).closest(e.CHIPS).removeClass("focus")
            }), o.$document.on("keydown", e.CHIPS + " " + e.INPUT, function (n) {
                var i = t(n.target), r = i.closest(e.CHIPS), a = r.data("index"), s = r.children(e.CHIP).length;
                return 13 === n.which ? (n.preventDefault(), o.addChip(a, {tag: i.val()}, r), void i.val("")) : 8 !== n.keyCode && 37 !== n.keyCode || "" !== i.val() || !s ? void 0 : (o.selectChip(a, s - 1, r), void i.blur())
            }), o.$document.on("click", e.CHIPS + " " + e.DELETE, function (n) {
                var i = t(n.target), r = i.closest(e.CHIPS), a = i.closest(e.CHIP);
                n.stopPropagation(), o.deleteChip(r.data("index"), a.index(), r), r.find("input").focus()
            })
        }, this.chips = function (t) {
            var e = "";
            t.data("options");
            t.data("chips").forEach(function (t) {
                e += o.renderChip(t)
            }), e += '<input class="input" placeholder="">', t.html(e), o.setPlaceholder(t)
        }, this.renderChip = function (t) {
            if (t.tag) {
                var e = '<div class="chip">' + t.tag;
                return t.image && (e += ' <img src="' + t.image + '"> '), e += '<i class="close fa fa-times"></i>', e += "</div>"
            }
        }, this.setPlaceholder = function (t) {
            var e = t.data("options");
            t.data("chips").length && e.placeholder ? t.find("input").prop("placeholder", e.placeholder) : !t.data("chips").length && e.secondaryPlaceholder && t.find("input").prop("placeholder", e.secondaryPlaceholder)
        }, this.isValid = function (t, e) {
            for (var n = t.data("chips"), i = !1, o = 0; o < n.length; o++)if (n[o].tag === e.tag)return void(i = !0);
            return "" !== e.tag && !i
        }, this.addChip = function (e, n, i) {
            if (o.isValid(i, n)) {
                var r = (i.data("options"), o.renderChip(n));
                i.data("chips").push(n), t(r).insertBefore(i.find("input")), i.trigger("chip.add", n), o.setPlaceholder(i)
            }
        }, this.deleteChip = function (t, e, n) {
            var i = n.data("chips")[e];
            n.find(".chip").eq(e).remove(), n.data("chips").splice(e, 1), n.trigger("chip.delete", i), o.setPlaceholder(n)
        }, this.selectChip = function (t, e, n) {
            var i = n.find(".chip").eq(e);
            i && !1 === i.hasClass("selected") && (i.addClass("selected"), n.trigger("chip.select", n.data("chips")[e]))
        }, this.getChipsElement = function (t, e) {
            return e.eq(t)
        }, this.init(), void(e || (this.handleEvents(), e = !0)))
    }
}(jQuery), $.fn.mdb_autocomplete = function (t) {
    var e = {data: {}};
    return t = $.extend(e, t), this.each(function () {
        var e = $(this), n = t.data;
        if (Object.keys(n).length) {
            var i = $('<ul class="mdb-autocomplete-wrap"></ul>');
            i.insertAfter($(this))
        }
        e.on("keyup", function (t) {
            var o = e.val();
            if (i.empty(), o.length)for (var r in n)if (n[r].toLowerCase().indexOf(o.toLowerCase()) !== -1) {
                var a = $("<li>" + n[r] + "</li>");
                i.append(a)
            }
            13 == t.which && (i.children(":first").trigger("click"), i.empty()), 0 == o.length ? $(".mdb-autocomplete-clear").css("visibility", "hidden") : $(".mdb-autocomplete-clear").css("visibility", "visible")
        }), i.on("click", "li", function () {
            e.val($(this).text()), i.empty()
        }), $(".mdb-autocomplete-clear").on("click", function (t) {
            t.preventDefault(), e.val(""), $(this).css("visibility", "hidden"), i.empty(), $(this).parent().find("label").removeClass("active")
        })
    })
}, $("body").on("shown.bs.modal", ".modal", function () {
    $(".modal-backdrop").length || ($modal_dialog = $(this).children(".modal-dialog"), $modal_dialog.hasClass("modal-side") && ($(this).addClass("modal-scrolling"), $("body").addClass("scrollable")), $modal_dialog.hasClass("modal-frame") && ($(this).addClass("modal-content-clickable"), $("body").addClass("scrollable")))
}), $("body").on("hidden.bs.modal", ".modal", function () {
    $("body").removeClass("scrollable")
});
var _self = "undefined" != typeof window ? window : "undefined" != typeof WorkerGlobalScope && self instanceof WorkerGlobalScope ? self : {}, Prism = function () {
    var t = /\blang(?:uage)?-(\w+)\b/i, e = 0, n = _self.Prism = {
        util: {
            encode: function (t) {
                return t instanceof i ? new i(t.type, n.util.encode(t.content), t.alias) : "Array" === n.util.type(t) ? t.map(n.util.encode) : t.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/\u00a0/g, " ")
            }, type: function (t) {
                return Object.prototype.toString.call(t).match(/\[object (\w+)\]/)[1]
            }, objId: function (t) {
                return t.__id || Object.defineProperty(t, "__id", {value: ++e}), t.__id
            }, clone: function (t) {
                switch (n.util.type(t)) {
                    case"Object":
                        var e = {};
                        for (var i in t)t.hasOwnProperty(i) && (e[i] = n.util.clone(t[i]));
                        return e;
                    case"Array":
                        return t.map && t.map(function (t) {
                                return n.util.clone(t)
                            })
                }
                return t
            }
        }, languages: {
            extend: function (t, e) {
                var i = n.util.clone(n.languages[t]);
                for (var o in e)i[o] = e[o];
                return i
            }, insertBefore: function (t, e, i, o) {
                o = o || n.languages;
                var r = o[t];
                if (2 == arguments.length) {
                    i = arguments[1];
                    for (var a in i)i.hasOwnProperty(a) && (r[a] = i[a]);
                    return r
                }
                var s = {};
                for (var l in r)if (r.hasOwnProperty(l)) {
                    if (l == e)for (var a in i)i.hasOwnProperty(a) && (s[a] = i[a]);
                    s[l] = r[l]
                }
                return n.languages.DFS(n.languages, function (e, n) {
                    n === o[t] && e != t && (this[e] = s)
                }), o[t] = s
            }, DFS: function (t, e, i, o) {
                o = o || {};
                for (var r in t)t.hasOwnProperty(r) && (e.call(t, r, t[r], i || r), "Object" !== n.util.type(t[r]) || o[n.util.objId(t[r])] ? "Array" !== n.util.type(t[r]) || o[n.util.objId(t[r])] || (o[n.util.objId(t[r])] = !0, n.languages.DFS(t[r], e, r, o)) : (o[n.util.objId(t[r])] = !0, n.languages.DFS(t[r], e, null, o)))
            }
        }, plugins: {}, highlightAll: function (t, e) {
            var i = {
                callback: e,
                selector: 'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'
            };
            n.hooks.run("before-highlightall", i);
            for (var o, r = i.elements || document.querySelectorAll(i.selector), a = 0; o = r[a++];)n.highlightElement(o, t === !0, i.callback)
        }, highlightElement: function (e, i, o) {
            for (var r, a, s = e; s && !t.test(s.className);)s = s.parentNode;
            s && (r = (s.className.match(t) || [, ""])[1], a = n.languages[r]), e.className = e.className.replace(t, "").replace(/\s+/g, " ") + " language-" + r, s = e.parentNode, /pre/i.test(s.nodeName) && (s.className = s.className.replace(t, "").replace(/\s+/g, " ") + " language-" + r);
            var l = e.textContent, c = {element: e, language: r, grammar: a, code: l};
            if (!l || !a)return void n.hooks.run("complete", c);
            if (n.hooks.run("before-highlight", c), i && _self.Worker) {
                var u = new Worker(n.filename);
                u.onmessage = function (t) {
                    c.highlightedCode = t.data, n.hooks.run("before-insert", c), c.element.innerHTML = c.highlightedCode, o && o.call(c.element), n.hooks.run("after-highlight", c), n.hooks.run("complete", c)
                }, u.postMessage(JSON.stringify({language: c.language, code: c.code, immediateClose: !0}))
            } else c.highlightedCode = n.highlight(c.code, c.grammar, c.language), n.hooks.run("before-insert", c), c.element.innerHTML = c.highlightedCode, o && o.call(e), n.hooks.run("after-highlight", c), n.hooks.run("complete", c)
        }, highlight: function (t, e, o) {
            var r = n.tokenize(t, e);
            return i.stringify(n.util.encode(r), o)
        }, tokenize: function (t, e) {
            var i = n.Token, o = [t], r = e.rest;
            if (r) {
                for (var a in r)e[a] = r[a];
                delete e.rest
            }
            t:for (var a in e)if (e.hasOwnProperty(a) && e[a]) {
                var s = e[a];
                s = "Array" === n.util.type(s) ? s : [s];
                for (var l = 0; l < s.length; ++l) {
                    var c = s[l], u = c.inside, h = !!c.lookbehind, d = !!c.greedy, f = 0, p = c.alias;
                    c = c.pattern || c;
                    for (var g = 0; g < o.length; g++) {
                        var m = o[g];
                        if (o.length > t.length)break t;
                        if (!(m instanceof i)) {
                            c.lastIndex = 0;
                            var v = c.exec(m), y = 1;
                            if (!v && d && g != o.length - 1) {
                                var b = o[g + 1].matchedStr || o[g + 1], w = m + b;
                                if (g < o.length - 2 && (w += o[g + 2].matchedStr || o[g + 2]), c.lastIndex = 0, !(v = c.exec(w)))continue;
                                var x = v.index + (h ? v[1].length : 0);
                                if (x >= m.length)continue;
                                var C = v.index + v[0].length, T = m.length + b.length;
                                if (y = 3, T >= C) {
                                    if (o[g + 1].greedy)continue;
                                    y = 2, w = w.slice(0, T)
                                }
                                m = w
                            }
                            if (v) {
                                h && (f = v[1].length);
                                var x = v.index + f, v = v[0].slice(f), C = x + v.length, S = m.slice(0, x), E = m.slice(C), k = [g, y];
                                S && k.push(S);
                                var A = new i(a, u ? n.tokenize(v, u) : v, p, v, d);
                                k.push(A), E && k.push(E), Array.prototype.splice.apply(o, k)
                            }
                        }
                    }
                }
            }
            return o
        }, hooks: {
            all: {}, add: function (t, e) {
                var i = n.hooks.all;
                i[t] = i[t] || [], i[t].push(e)
            }, run: function (t, e) {
                var i = n.hooks.all[t];
                if (i && i.length)for (var o, r = 0; o = i[r++];)o(e)
            }
        }
    }, i = n.Token = function (t, e, n, i, o) {
        this.type = t, this.content = e, this.alias = n, this.matchedStr = i || null, this.greedy = !!o
    };
    if (i.stringify = function (t, e, o) {
            if ("string" == typeof t)return t;
            if ("Array" === n.util.type(t))return t.map(function (n) {
                return i.stringify(n, e, t)
            }).join("");
            var r = {
                type: t.type,
                content: i.stringify(t.content, e, o),
                tag: "span",
                classes: ["token", t.type],
                attributes: {},
                language: e,
                parent: o
            };
            if ("comment" == r.type && (r.attributes.spellcheck = "true"), t.alias) {
                var a = "Array" === n.util.type(t.alias) ? t.alias : [t.alias];
                Array.prototype.push.apply(r.classes, a)
            }
            n.hooks.run("wrap", r);
            var s = "";
            for (var l in r.attributes)s += (s ? " " : "") + l + '="' + (r.attributes[l] || "") + '"';
            return "<" + r.tag + ' class="' + r.classes.join(" ") + '" ' + s + ">" + r.content + "</" + r.tag + ">"
        }, !_self.document)return _self.addEventListener ? (_self.addEventListener("message", function (t) {
        var e = JSON.parse(t.data), i = e.language, o = e.code, r = e.immediateClose;
        _self.postMessage(n.highlight(o, n.languages[i], i)), r && _self.close()
    }, !1), _self.Prism) : _self.Prism;
    var o = document.currentScript || [].slice.call(document.getElementsByTagName("script")).pop();
    return o && (n.filename = o.src, document.addEventListener && !o.hasAttribute("data-manual") && document.addEventListener("DOMContentLoaded", n.highlightAll)), _self.Prism
}();
"undefined" != typeof module && module.exports && (module.exports = Prism), "undefined" != typeof global && (global.Prism = Prism), Prism.languages.markup = {
    comment: /<!--[\w\W]*?-->/,
    prolog: /<\?[\w\W]+?\?>/,
    doctype: /<!DOCTYPE[\w\W]+?>/,
    cdata: /<!\[CDATA\[[\w\W]*?]]>/i,
    tag: {
        pattern: /<\/?(?!\d)[^\s>\/=.$<]+(?:\s+[^\s>\/=]+(?:=(?:("|')(?:\\\1|\\?(?!\1)[\w\W])*\1|[^\s'">=]+))?)*\s*\/?>/i,
        inside: {
            tag: {pattern: /^<\/?[^\s>\/]+/i, inside: {punctuation: /^<\/?/, namespace: /^[^\s>\/:]+:/}},
            "attr-value": {pattern: /=(?:('|")[\w\W]*?(\1)|[^\s>]+)/i, inside: {punctuation: /[=>"']/}},
            punctuation: /\/?>/,
            "attr-name": {pattern: /[^\s>\/]+/, inside: {namespace: /^[^\s>\/:]+:/}}
        }
    },
    entity: /&#?[\da-z]{1,8};/i
}, Prism.hooks.add("wrap", function (t) {
    "entity" === t.type && (t.attributes.title = t.content.replace(/&amp;/, "&"))
}), Prism.languages.xml = Prism.languages.markup, Prism.languages.html = Prism.languages.markup, Prism.languages.mathml = Prism.languages.markup, Prism.languages.svg = Prism.languages.markup, Prism.languages.css = {
    comment: /\/\*[\w\W]*?\*\//,
    atrule: {pattern: /@[\w-]+?.*?(;|(?=\s*\{))/i, inside: {rule: /@[\w-]+/}},
    url: /url\((?:(["'])(\\(?:\r\n|[\w\W])|(?!\1)[^\\\r\n])*\1|.*?)\)/i,
    selector: /[^\{\}\s][^\{\};]*?(?=\s*\{)/,
    string: /("|')(\\(?:\r\n|[\w\W])|(?!\1)[^\\\r\n])*\1/,
    property: /(\b|\B)[\w-]+(?=\s*:)/i,
    important: /\B!important\b/i,
    function: /[-a-z0-9]+(?=\()/i,
    punctuation: /[(){};:]/
}, Prism.languages.css.atrule.inside.rest = Prism.util.clone(Prism.languages.css), Prism.languages.markup && (Prism.languages.insertBefore("markup", "tag", {
    style: {
        pattern: /(<style[\w\W]*?>)[\w\W]*?(?=<\/style>)/i,
        lookbehind: !0,
        inside: Prism.languages.css,
        alias: "language-css"
    }
}), Prism.languages.insertBefore("inside", "attr-value", {
    "style-attr": {
        pattern: /\s*style=("|').*?\1/i,
        inside: {
            "attr-name": {pattern: /^\s*style/i, inside: Prism.languages.markup.tag.inside},
            punctuation: /^\s*=\s*['"]|['"]\s*$/,
            "attr-value": {pattern: /.+/i, inside: Prism.languages.css}
        },
        alias: "language-css"
    }
}, Prism.languages.markup.tag)), Prism.languages.clike = {
    comment: [{
        pattern: /(^|[^\\])\/\*[\w\W]*?\*\//,
        lookbehind: !0
    }, {pattern: /(^|[^\\:])\/\/.*/, lookbehind: !0}],
    string: {pattern: /(["'])(\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/, greedy: !0},
    "class-name": {
        pattern: /((?:\b(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[a-z0-9_\.\\]+/i,
        lookbehind: !0,
        inside: {punctuation: /(\.|\\)/}
    },
    keyword: /\b(if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,
    boolean: /\b(true|false)\b/,
    function: /[a-z0-9_]+(?=\()/i,
    number: /\b-?(?:0x[\da-f]+|\d*\.?\d+(?:e[+-]?\d+)?)\b/i,
    operator: /--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*|\/|~|\^|%/,
    punctuation: /[{}[\];(),.:]/
}, Prism.languages.javascript = Prism.languages.extend("clike", {
    keyword: /\b(as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|var|void|while|with|yield)\b/,
    number: /\b-?(0x[\dA-Fa-f]+|0b[01]+|0o[0-7]+|\d*\.?\d+([Ee][+-]?\d+)?|NaN|Infinity)\b/,
    function: /[_$a-zA-Z\xA0-\uFFFF][_$a-zA-Z0-9\xA0-\uFFFF]*(?=\()/i
}), Prism.languages.insertBefore("javascript", "keyword", {
    regex: {
        pattern: /(^|[^\/])\/(?!\/)(\[.+?]|\\.|[^\/\\\r\n])+\/[gimyu]{0,5}(?=\s*($|[\r\n,.;})]))/,
        lookbehind: !0,
        greedy: !0
    }
}), Prism.languages.insertBefore("javascript", "class-name", {
    "template-string": {
        pattern: /`(?:\\\\|\\?[^\\])*?`/,
        greedy: !0,
        inside: {
            interpolation: {
                pattern: /\$\{[^}]+\}/,
                inside: {
                    "interpolation-punctuation": {pattern: /^\$\{|\}$/, alias: "punctuation"},
                    rest: Prism.languages.javascript
                }
            }, string: /[\s\S]+/
        }
    }
}), Prism.languages.markup && Prism.languages.insertBefore("markup", "tag", {
    script: {
        pattern: /(<script[\w\W]*?>)[\w\W]*?(?=<\/script>)/i,
        lookbehind: !0,
        inside: Prism.languages.javascript,
        alias: "language-javascript"
    }
}), Prism.languages.js = Prism.languages.javascript, function () {
    self.Prism && Prism.hooks.add("after-highlight", function (t) {
        var e = t.element.parentNode;
        if (e && /pre/i.test(e.nodeName) && -1 !== e.className.indexOf("code-toolbar")) {
            var n = document.createElement("div");
            if (n.setAttribute("class", "toolbar"), window.ZeroClipboard) {
                var i = document.createElement("a");
                i.innerHTML = "Copy";
                var o = new ZeroClipboard(i);
                o.on("ready", function (t) {
                    o.on("copy", function (t) {
                        var e = t.target.parentNode.parentNode.getElementsByTagName("code")[0];
                        t.clipboardData.setData("text/plain", e.textContent || e.innerText)
                    }), o.on("aftercopy", function (t) {
                        t.target.parentNode.parentNode.getElementsByTagName("code")[0].focus()
                    })
                }), n.appendChild(i)
            }
            e.appendChild(n)
        }
    })
}(), function (t, e) {
    "use strict";
    var n, i, o, r = t, a = r.document, s = r.navigator, l = r.setTimeout, c = r.clearTimeout, u = r.setInterval, h = r.clearInterval, d = r.getComputedStyle, f = r.encodeURIComponent, p = r.ActiveXObject, g = r.Error, m = r.Number.parseInt || r.parseInt, v = r.Number.parseFloat || r.parseFloat, y = r.Number.isNaN || r.isNaN, b = r.Date.now, w = r.Object.keys, x = r.Object.defineProperty, C = r.Object.prototype.hasOwnProperty, T = r.Array.prototype.slice, S = function () {
        var t = function (t) {
            return t
        };
        if ("function" == typeof r.wrap && "function" == typeof r.unwrap)try {
            var e = a.createElement("div"), n = r.unwrap(e);
            1 === e.nodeType && n && 1 === n.nodeType && (t = r.unwrap)
        } catch (t) {
        }
        return t
    }(), E = function (t) {
        return T.call(t, 0)
    }, k = function () {
        var t, n, i, o, r, a = E(arguments), s = a[0] || {};
        for (t = 1, n = a.length; n > t; t++)if (null != (i = a[t]))for (o in i)C.call(i, o) && (s[o], r = i[o], s !== r && r !== e && (s[o] = r));
        return s
    }, A = function (t) {
        var e, n, i, o;
        if ("object" != typeof t || null == t || "number" == typeof t.nodeType)e = t; else if ("number" == typeof t.length)for (e = [], n = 0, i = t.length; i > n; n++)C.call(t, n) && (e[n] = A(t[n])); else {
            e = {};
            for (o in t)C.call(t, o) && (e[o] = A(t[o]))
        }
        return e
    }, _ = function (t, e) {
        for (var n = {}, i = 0, o = e.length; o > i; i++)e[i] in t && (n[e[i]] = t[e[i]]);
        return n
    }, P = function (t, e) {
        var n = {};
        for (var i in t)-1 === e.indexOf(i) && (n[i] = t[i]);
        return n
    }, I = function (t) {
        if (t)for (var e in t)C.call(t, e) && delete t[e];
        return t
    }, D = function (t, e) {
        if (t && 1 === t.nodeType && t.ownerDocument && e && (1 === e.nodeType && e.ownerDocument && e.ownerDocument === t.ownerDocument || 9 === e.nodeType && !e.ownerDocument && e === t.ownerDocument))do {
            if (t === e)return !0;
            t = t.parentNode
        } while (t);
        return !1
    }, O = function (t) {
        var e;
        return "string" == typeof t && t && (e = t.split("#")[0].split("?")[0], e = t.slice(0, t.lastIndexOf("/") + 1)), e
    }, L = function (t) {
        var e, n;
        return "string" == typeof t && t && (n = t.match(/^(?:|[^:@]*@|.+\)@(?=http[s]?|file)|.+?\s+(?: at |@)(?:[^:\(]+ )*[\(]?)((?:http[s]?|file):\/\/[\/]?.+?\/[^:\)]*?)(?::\d+)(?::\d+)?/), n && n[1] ? e = n[1] : (n = t.match(/\)@((?:http[s]?|file):\/\/[\/]?.+?\/[^:\)]*?)(?::\d+)(?::\d+)?/)) && n[1] && (e = n[1])), e
    }, F = function () {
        var t, e;
        try {
            throw new g
        } catch (t) {
            e = t
        }
        return e && (t = e.sourceURL || e.fileName || L(e.stack)), t
    }, N = function () {
        var t, n, i;
        if (a.currentScript && (t = a.currentScript.src))return t;
        if (n = a.getElementsByTagName("script"), 1 === n.length)return n[0].src || e;
        if ("readyState" in n[0])for (i = n.length; i--;)if ("interactive" === n[i].readyState && (t = n[i].src))return t;
        return "loading" === a.readyState && (t = n[n.length - 1].src) ? t : (t = F()) ? t : e
    }, M = function () {
        var t, n, i, o = a.getElementsByTagName("script");
        for (t = o.length; t--;) {
            if (!(i = o[t].src)) {
                n = null;
                break
            }
            if (i = O(i), null == n)n = i; else if (n !== i) {
                n = null;
                break
            }
        }
        return n || e
    }, R = function () {
        var t = /win(dows|[\s]?(nt|me|ce|xp|vista|[\d]+))/i;
        return !!s && (t.test(s.appVersion || "") || t.test(s.platform || "") || -1 !== (s.userAgent || "").indexOf("Windows"))
    }, W = function () {
        return null == t.opener && (!!t.top && t != t.top || !!t.parent && t != t.parent)
    }(), H = {
        bridge: null,
        version: "0.0.0",
        pluginType: "unknown",
        disabled: null,
        outdated: null,
        sandboxed: null,
        unavailable: null,
        degraded: null,
        deactivated: null,
        overdue: null,
        ready: null
    }, j = "11.0.0", z = {}, V = {}, B = null, q = 0, Y = 0, X = {
        ready: "Flash communication is established",
        error: {
            "flash-disabled": "Flash is disabled or not installed. May also be attempting to run Flash in a sandboxed iframe, which is impossible.",
            "flash-outdated": "Flash is too outdated to support ZeroClipboard",
            "flash-sandboxed": "Attempting to run Flash in a sandboxed iframe, which is impossible",
            "flash-unavailable": "Flash is unable to communicate bidirectionally with JavaScript",
            "flash-degraded": "Flash is unable to preserve data fidelity when communicating with JavaScript",
            "flash-deactivated": "Flash is too outdated for your browser and/or is configured as click-to-activate.\nThis may also mean that the ZeroClipboard SWF object could not be loaded, so please check your `swfPath` configuration and/or network connectivity.\nMay also be attempting to run Flash in a sandboxed iframe, which is impossible.",
            "flash-overdue": "Flash communication was established but NOT within the acceptable time limit",
            "version-mismatch": "ZeroClipboard JS version number does not match ZeroClipboard SWF version number",
            "clipboard-error": "At least one error was thrown while ZeroClipboard was attempting to inject your data into the clipboard",
            "config-mismatch": "ZeroClipboard configuration does not match Flash's reality",
            "swf-not-found": "The ZeroClipboard SWF object could not be loaded, so please check your `swfPath` configuration and/or network connectivity"
        }
    }, $ = ["flash-unavailable", "flash-degraded", "flash-overdue", "version-mismatch", "config-mismatch", "clipboard-error"], U = ["flash-disabled", "flash-outdated", "flash-sandboxed", "flash-unavailable", "flash-degraded", "flash-deactivated", "flash-overdue"], Q = new RegExp("^flash-(" + U.map(function (t) {
            return t.replace(/^flash-/, "")
        }).join("|") + ")$"), G = new RegExp("^flash-(" + U.slice(1).map(function (t) {
            return t.replace(/^flash-/, "")
        }).join("|") + ")$"), Z = {
        swfPath: function () {
            return (O(N()) || M() || "") + "ZeroClipboard.swf"
        }(),
        trustedDomains: t.location.host ? [t.location.host] : [],
        cacheBust: !0,
        forceEnhancedClipboard: !1,
        flashLoadTimeout: 3e4,
        autoActivate: !0,
        bubbleEvents: !0,
        fixLineEndings: !0,
        containerId: "global-zeroclipboard-html-bridge",
        containerClass: "global-zeroclipboard-container",
        swfObjectId: "global-zeroclipboard-flash-bridge",
        hoverClass: "zeroclipboard-is-hover",
        activeClass: "zeroclipboard-is-active",
        forceHandCursor: !1,
        title: null,
        zIndex: 999999999
    }, K = function (t) {
        if ("object" == typeof t && null !== t)for (var e in t)if (C.call(t, e))if (/^(?:forceHandCursor|title|zIndex|bubbleEvents|fixLineEndings)$/.test(e))Z[e] = t[e]; else if (null == H.bridge)if ("containerId" === e || "swfObjectId" === e) {
            if (!ft(t[e]))throw new Error("The specified `" + e + "` value is not valid as an HTML4 Element ID");
            Z[e] = t[e]
        } else Z[e] = t[e];
        return "string" == typeof t && t ? C.call(Z, t) ? Z[t] : void 0 : A(Z)
    }, J = function () {
        return Xt(), {
            browser: _(s, ["userAgent", "platform", "appName", "appVersion"]),
            flash: P(H, ["bridge"]),
            zeroclipboard: {version: Ut.version, config: Ut.config()}
        }
    }, tt = function () {
        return !!(H.disabled || H.outdated || H.sandboxed || H.unavailable || H.degraded || H.deactivated)
    }, et = function (t, i) {
        var o, r, a, s = {};
        if ("string" == typeof t && t)a = t.toLowerCase().split(/\s+/); else if ("object" == typeof t && t && void 0 === i)for (o in t)C.call(t, o) && "string" == typeof o && o && "function" == typeof t[o] && Ut.on(o, t[o]);
        if (a && a.length) {
            for (o = 0, r = a.length; r > o; o++)t = a[o].replace(/^on/, ""), s[t] = !0, z[t] || (z[t] = []), z[t].push(i);
            if (s.ready && H.ready && Ut.emit({type: "ready"}), s.error) {
                for (o = 0, r = U.length; r > o; o++)if (H[U[o].replace(/^flash-/, "")] === !0) {
                    Ut.emit({type: "error", name: U[o]});
                    break
                }
                n !== e && Ut.version !== n && Ut.emit({
                    type: "error",
                    name: "version-mismatch",
                    jsVersion: Ut.version,
                    swfVersion: n
                })
            }
        }
        return Ut
    }, nt = function (t, e) {
        var n, i, o, r, a;
        if (0 === arguments.length)r = w(z); else if ("string" == typeof t && t)r = t.split(/\s+/); else if ("object" == typeof t && t && void 0 === e)for (n in t)C.call(t, n) && "string" == typeof n && n && "function" == typeof t[n] && Ut.off(n, t[n]);
        if (r && r.length)for (n = 0, i = r.length; i > n; n++)if (t = r[n].toLowerCase().replace(/^on/, ""), (a = z[t]) && a.length)if (e)for (o = a.indexOf(e); -1 !== o;)a.splice(o, 1), o = a.indexOf(e, o); else a.length = 0;
        return Ut
    }, it = function (t) {
        return "string" == typeof t && t ? A(z[t]) || null : A(z)
    }, ot = function (t) {
        var e, n, i;
        return t = pt(t), t && !xt(t) ? "ready" === t.type && H.overdue === !0 ? Ut.emit({
            type: "error",
            name: "flash-overdue"
        }) : (e = k({}, t), bt.call(this, e), "copy" === t.type && (i = Pt(V), n = i.data, B = i.formatMap), n) : void 0
    }, rt = function () {
        var t = H.sandboxed;
        if (Xt(), "boolean" != typeof H.ready && (H.ready = !1), H.sandboxed !== t && H.sandboxed === !0)H.ready = !1, Ut.emit({
            type: "error",
            name: "flash-sandboxed"
        }); else if (!Ut.isFlashUnusable() && null === H.bridge) {
            var e = Z.flashLoadTimeout;
            "number" == typeof e && e >= 0 && (q = l(function () {
                "boolean" != typeof H.deactivated && (H.deactivated = !0), H.deactivated === !0 && Ut.emit({
                    type: "error",
                    name: "flash-deactivated"
                })
            }, e)), H.overdue = !1, At()
        }
    }, at = function () {
        Ut.clearData(), Ut.blur(), Ut.emit("destroy"), _t(), Ut.off()
    }, st = function (t, e) {
        var n;
        if ("object" == typeof t && t && void 0 === e)n = t, Ut.clearData(); else {
            if ("string" != typeof t || !t)return;
            n = {}, n[t] = e
        }
        for (var i in n)"string" == typeof i && i && C.call(n, i) && "string" == typeof n[i] && n[i] && (V[i] = Yt(n[i]))
    }, lt = function (t) {
        void 0 === t ? (I(V), B = null) : "string" == typeof t && C.call(V, t) && delete V[t]
    }, ct = function (t) {
        return void 0 === t ? A(V) : "string" == typeof t && C.call(V, t) ? V[t] : void 0
    }, ut = function (t) {
        if (t && 1 === t.nodeType) {
            i && (Rt(i, Z.activeClass), i !== t && Rt(i, Z.hoverClass)), i = t, Mt(t, Z.hoverClass);
            var e = t.getAttribute("title") || Z.title;
            if ("string" == typeof e && e) {
                var n = kt(H.bridge);
                n && n.setAttribute("title", e)
            }
            Bt(Z.forceHandCursor === !0 || "pointer" === Wt(t, "cursor")), Vt()
        }
    }, ht = function () {
        var t = kt(H.bridge);
        t && (t.removeAttribute("title"), t.style.left = "0px", t.style.top = "-9999px", t.style.width = "1px", t.style.height = "1px"), i && (Rt(i, Z.hoverClass), Rt(i, Z.activeClass), i = null)
    }, dt = function () {
        return i || null
    }, ft = function (t) {
        return "string" == typeof t && t && /^[A-Za-z][A-Za-z0-9_:\-\.]*$/.test(t)
    }, pt = function (t) {
        var e;
        if ("string" == typeof t && t ? (e = t, t = {}) : "object" == typeof t && t && "string" == typeof t.type && t.type && (e = t.type), e) {
            e = e.toLowerCase(), !t.target && (/^(copy|aftercopy|_click)$/.test(e) || "error" === e && "clipboard-error" === t.name) && (t.target = o), k(t, {
                type: e,
                target: t.target || i || null,
                relatedTarget: t.relatedTarget || null,
                currentTarget: H && H.bridge || null,
                timeStamp: t.timeStamp || b() || null
            });
            var n = X[t.type];
            return "error" === t.type && t.name && n && (n = n[t.name]), n && (t.message = n), "ready" === t.type && k(t, {
                target: null,
                version: H.version
            }), "error" === t.type && (Q.test(t.name) && k(t, {
                target: null,
                minimumVersion: j
            }), G.test(t.name) && k(t, {version: H.version})), "copy" === t.type && (t.clipboardData = {
                setData: Ut.setData,
                clearData: Ut.clearData
            }), "aftercopy" === t.type && (t = It(t, B)), t.target && !t.relatedTarget && (t.relatedTarget = gt(t.target)), mt(t)
        }
    }, gt = function (t) {
        var e = t && t.getAttribute && t.getAttribute("data-clipboard-target");
        return e ? a.getElementById(e) : null
    }, mt = function (t) {
        if (t && /^_(?:click|mouse(?:over|out|down|up|move))$/.test(t.type)) {
            var n = t.target, i = "_mouseover" === t.type && t.relatedTarget ? t.relatedTarget : e, o = "_mouseout" === t.type && t.relatedTarget ? t.relatedTarget : e, s = Ht(n), l = r.screenLeft || r.screenX || 0, c = r.screenTop || r.screenY || 0, u = a.body.scrollLeft + a.documentElement.scrollLeft, h = a.body.scrollTop + a.documentElement.scrollTop, d = s.left + ("number" == typeof t._stageX ? t._stageX : 0), f = s.top + ("number" == typeof t._stageY ? t._stageY : 0), p = d - u, g = f - h, m = l + p, v = c + g, y = "number" == typeof t.movementX ? t.movementX : 0, b = "number" == typeof t.movementY ? t.movementY : 0;
            delete t._stageX, delete t._stageY, k(t, {
                srcElement: n,
                fromElement: i,
                toElement: o,
                screenX: m,
                screenY: v,
                pageX: d,
                pageY: f,
                clientX: p,
                clientY: g,
                x: p,
                y: g,
                movementX: y,
                movementY: b,
                offsetX: 0,
                offsetY: 0,
                layerX: 0,
                layerY: 0
            })
        }
        return t
    }, vt = function (t) {
        var e = t && "string" == typeof t.type && t.type || "";
        return !/^(?:(?:before)?copy|destroy)$/.test(e)
    }, yt = function (t, e, n, i) {
        i ? l(function () {
            t.apply(e, n)
        }, 0) : t.apply(e, n)
    }, bt = function (t) {
        if ("object" == typeof t && t && t.type) {
            var e = vt(t), n = z["*"] || [], i = z[t.type] || [], o = n.concat(i);
            if (o && o.length) {
                var a, s, l, c, u, h = this;
                for (a = 0, s = o.length; s > a; a++)l = o[a], c = h, "string" == typeof l && "function" == typeof r[l] && (l = r[l]), "object" == typeof l && l && "function" == typeof l.handleEvent && (c = l, l = l.handleEvent), "function" == typeof l && (u = k({}, t), yt(l, c, [u], e))
            }
            return this
        }
    }, wt = function (t) {
        var e = null;
        return (W === !1 || t && "error" === t.type && t.name && -1 !== $.indexOf(t.name)) && (e = !1), e
    }, xt = function (t) {
        var e = t.target || i || null, r = "swf" === t._source;
        switch (delete t._source, t.type) {
            case"error":
                var a = "flash-sandboxed" === t.name || wt(t);
                "boolean" == typeof a && (H.sandboxed = a), -1 !== U.indexOf(t.name) ? k(H, {
                    disabled: "flash-disabled" === t.name,
                    outdated: "flash-outdated" === t.name,
                    unavailable: "flash-unavailable" === t.name,
                    degraded: "flash-degraded" === t.name,
                    deactivated: "flash-deactivated" === t.name,
                    overdue: "flash-overdue" === t.name,
                    ready: !1
                }) : "version-mismatch" === t.name && (n = t.swfVersion, k(H, {
                    disabled: !1,
                    outdated: !1,
                    unavailable: !1,
                    degraded: !1,
                    deactivated: !1,
                    overdue: !1,
                    ready: !1
                })), zt();
                break;
            case"ready":
                n = t.swfVersion;
                var s = H.deactivated === !0;
                k(H, {
                    disabled: !1,
                    outdated: !1,
                    sandboxed: !1,
                    unavailable: !1,
                    degraded: !1,
                    deactivated: !1,
                    overdue: s,
                    ready: !s
                }), zt();
                break;
            case"beforecopy":
                o = e;
                break;
            case"copy":
                var l, c, u = t.relatedTarget;
                !V["text/html"] && !V["text/plain"] && u && (c = u.value || u.outerHTML || u.innerHTML) && (l = u.value || u.textContent || u.innerText) ? (t.clipboardData.clearData(), t.clipboardData.setData("text/plain", l), c !== l && t.clipboardData.setData("text/html", c)) : !V["text/plain"] && t.target && (l = t.target.getAttribute("data-clipboard-text")) && (t.clipboardData.clearData(), t.clipboardData.setData("text/plain", l));
                break;
            case"aftercopy":
                Ct(t), Ut.clearData(), e && e !== Nt() && e.focus && e.focus();
                break;
            case"_mouseover":
                Ut.focus(e), Z.bubbleEvents === !0 && r && (e && e !== t.relatedTarget && !D(t.relatedTarget, e) && Tt(k({}, t, {
                    type: "mouseenter",
                    bubbles: !1,
                    cancelable: !1
                })), Tt(k({}, t, {type: "mouseover"})));
                break;
            case"_mouseout":
                Ut.blur(), Z.bubbleEvents === !0 && r && (e && e !== t.relatedTarget && !D(t.relatedTarget, e) && Tt(k({}, t, {
                    type: "mouseleave",
                    bubbles: !1,
                    cancelable: !1
                })), Tt(k({}, t, {type: "mouseout"})));
                break;
            case"_mousedown":
                Mt(e, Z.activeClass), Z.bubbleEvents === !0 && r && Tt(k({}, t, {type: t.type.slice(1)}));
                break;
            case"_mouseup":
                Rt(e, Z.activeClass), Z.bubbleEvents === !0 && r && Tt(k({}, t, {type: t.type.slice(1)}));
                break;
            case"_click":
                o = null, Z.bubbleEvents === !0 && r && Tt(k({}, t, {type: t.type.slice(1)}));
                break;
            case"_mousemove":
                Z.bubbleEvents === !0 && r && Tt(k({}, t, {type: t.type.slice(1)}))
        }
        return !!/^_(?:click|mouse(?:over|out|down|up|move))$/.test(t.type) || void 0
    }, Ct = function (t) {
        if (t.errors && t.errors.length > 0) {
            var e = A(t);
            k(e, {type: "error", name: "clipboard-error"}), delete e.success, l(function () {
                Ut.emit(e)
            }, 0)
        }
    }, Tt = function (t) {
        if (t && "string" == typeof t.type && t) {
            var e, n = t.target || null, i = n && n.ownerDocument || a, o = {
                view: i.defaultView || r,
                canBubble: !0,
                cancelable: !0,
                detail: "click" === t.type ? 1 : 0,
                button: "number" == typeof t.which ? t.which - 1 : "number" == typeof t.button ? t.button : i.createEvent ? 0 : 1
            }, s = k(o, t);
            n && i.createEvent && n.dispatchEvent && (s = [s.type, s.canBubble, s.cancelable, s.view, s.detail, s.screenX, s.screenY, s.clientX, s.clientY, s.ctrlKey, s.altKey, s.shiftKey, s.metaKey, s.button, s.relatedTarget], e = i.createEvent("MouseEvents"), e.initMouseEvent && (e.initMouseEvent.apply(e, s), e._source = "js", n.dispatchEvent(e)))
        }
    }, St = function () {
        var t = Z.flashLoadTimeout;
        if ("number" == typeof t && t >= 0) {
            var e = Math.min(1e3, t / 10), n = Z.swfObjectId + "_fallbackContent";
            Y = u(function () {
                jt(a.getElementById(n)) && (zt(), H.deactivated = null, Ut.emit({type: "error", name: "swf-not-found"}))
            }, e)
        }
    }, Et = function () {
        var t = a.createElement("div");
        return t.id = Z.containerId, t.className = Z.containerClass, t.style.position = "absolute", t.style.left = "0px", t.style.top = "-9999px", t.style.width = "1px", t.style.height = "1px", t.style.zIndex = "" + qt(Z.zIndex), t
    }, kt = function (t) {
        for (var e = t && t.parentNode; e && "OBJECT" === e.nodeName && e.parentNode;)e = e.parentNode;
        return e || null
    }, At = function () {
        var t, e = H.bridge, n = kt(e);
        if (!e) {
            var i = Ft(r.location.host, Z), o = "never" === i ? "none" : "all", s = Ot(k({jsVersion: Ut.version}, Z)), l = Z.swfPath + Dt(Z.swfPath, Z);
            n = Et();
            var c = a.createElement("div");
            n.appendChild(c), a.body.appendChild(n);
            var u = a.createElement("div"), h = "activex" === H.pluginType;
            u.innerHTML = '<object id="' + Z.swfObjectId + '" name="' + Z.swfObjectId + '" width="100%" height="100%" ' + (h ? 'classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000"' : 'type="application/x-shockwave-flash" data="' + l + '"') + ">" + (h ? '<param name="movie" value="' + l + '"/>' : "") + '<param name="allowScriptAccess" value="' + i + '"/><param name="allowNetworking" value="' + o + '"/><param name="menu" value="false"/><param name="wmode" value="transparent"/><param name="flashvars" value="' + s + '"/><div id="' + Z.swfObjectId + '_fallbackContent">&nbsp;</div></object>', e = u.firstChild, u = null, S(e).ZeroClipboard = Ut, n.replaceChild(e, c), St()
        }
        return e || (e = a[Z.swfObjectId], e && (t = e.length) && (e = e[t - 1]), !e && n && (e = n.firstChild)), H.bridge = e || null, e
    }, _t = function () {
        var t = H.bridge;
        if (t) {
            var i = kt(t);
            i && ("activex" === H.pluginType && "readyState" in t ? (t.style.display = "none", function e() {
                if (4 === t.readyState) {
                    for (var n in t)"function" == typeof t[n] && (t[n] = null);
                    t.parentNode && t.parentNode.removeChild(t), i.parentNode && i.parentNode.removeChild(i)
                } else l(e, 10)
            }()) : (t.parentNode && t.parentNode.removeChild(t), i.parentNode && i.parentNode.removeChild(i))), zt(), H.ready = null, H.bridge = null, H.deactivated = null, n = e
        }
    }, Pt = function (t) {
        var e = {}, n = {};
        if ("object" == typeof t && t) {
            for (var i in t)if (i && C.call(t, i) && "string" == typeof t[i] && t[i])switch (i.toLowerCase()) {
                case"text/plain":
                case"text":
                case"air:text":
                case"flash:text":
                    e.text = t[i], n.text = i;
                    break;
                case"text/html":
                case"html":
                case"air:html":
                case"flash:html":
                    e.html = t[i], n.html = i;
                    break;
                case"application/rtf":
                case"text/rtf":
                case"rtf":
                case"richtext":
                case"air:rtf":
                case"flash:rtf":
                    e.rtf = t[i], n.rtf = i
            }
            return {data: e, formatMap: n}
        }
    }, It = function (t, e) {
        if ("object" != typeof t || !t || "object" != typeof e || !e)return t;
        var n = {};
        for (var i in t)if (C.call(t, i))if ("errors" === i) {
            n[i] = t[i] ? t[i].slice() : [];
            for (var o = 0, r = n[i].length; r > o; o++)n[i][o].format = e[n[i][o].format]
        } else if ("success" !== i && "data" !== i)n[i] = t[i]; else {
            n[i] = {};
            var a = t[i];
            for (var s in a)s && C.call(a, s) && C.call(e, s) && (n[i][e[s]] = a[s])
        }
        return n
    }, Dt = function (t, e) {
        return null == e || e && e.cacheBust === !0 ? (-1 === t.indexOf("?") ? "?" : "&") + "noCache=" + b() : ""
    }, Ot = function (t) {
        var e, n, i, o, a = "", s = [];
        if (t.trustedDomains && ("string" == typeof t.trustedDomains ? o = [t.trustedDomains] : "object" == typeof t.trustedDomains && "length" in t.trustedDomains && (o = t.trustedDomains)), o && o.length)for (e = 0, n = o.length; n > e; e++)if (C.call(o, e) && o[e] && "string" == typeof o[e]) {
            if (!(i = Lt(o[e])))continue;
            if ("*" === i) {
                s.length = 0, s.push(i);
                break
            }
            s.push.apply(s, [i, "//" + i, r.location.protocol + "//" + i])
        }
        return s.length && (a += "trustedOrigins=" + f(s.join(","))), t.forceEnhancedClipboard === !0 && (a += (a ? "&" : "") + "forceEnhancedClipboard=true"), "string" == typeof t.swfObjectId && t.swfObjectId && (a += (a ? "&" : "") + "swfObjectId=" + f(t.swfObjectId)), "string" == typeof t.jsVersion && t.jsVersion && (a += (a ? "&" : "") + "jsVersion=" + f(t.jsVersion)), a
    }, Lt = function (t) {
        if (null == t || "" === t)return null;
        if ("" === (t = t.replace(/^\s+|\s+$/g, "")))return null;
        var e = t.indexOf("//");
        t = -1 === e ? t : t.slice(e + 2);
        var n = t.indexOf("/");
        return t = -1 === n ? t : -1 === e || 0 === n ? null : t.slice(0, n), t && ".swf" === t.slice(-4).toLowerCase() ? null : t || null
    }, Ft = function () {
        var t = function (t) {
            var e, n, i, o = [];
            if ("string" == typeof t && (t = [t]), "object" != typeof t || !t || "number" != typeof t.length)return o;
            for (e = 0, n = t.length; n > e; e++)if (C.call(t, e) && (i = Lt(t[e]))) {
                if ("*" === i) {
                    o.length = 0, o.push("*");
                    break
                }
                -1 === o.indexOf(i) && o.push(i)
            }
            return o
        };
        return function (e, n) {
            var i = Lt(n.swfPath);
            null === i && (i = e);
            var o = t(n.trustedDomains), r = o.length;
            if (r > 0) {
                if (1 === r && "*" === o[0])return "always";
                if (-1 !== o.indexOf(e))return 1 === r && e === i ? "sameDomain" : "always"
            }
            return "never"
        }
    }(), Nt = function () {
        try {
            return a.activeElement
        } catch (t) {
            return null
        }
    }, Mt = function (t, e) {
        var n, i, o, r = [];
        if ("string" == typeof e && e && (r = e.split(/\s+/)), t && 1 === t.nodeType && r.length > 0) {
            for (o = (" " + (t.className || "") + " ").replace(/[\t\r\n\f]/g, " "), n = 0, i = r.length; i > n; n++)-1 === o.indexOf(" " + r[n] + " ") && (o += r[n] + " ");
            (o = o.replace(/^\s+|\s+$/g, "")) !== t.className && (t.className = o)
        }
        return t
    }, Rt = function (t, e) {
        var n, i, o, r = [];
        if ("string" == typeof e && e && (r = e.split(/\s+/)), t && 1 === t.nodeType && r.length > 0 && t.className) {
            for (o = (" " + t.className + " ").replace(/[\t\r\n\f]/g, " "), n = 0, i = r.length; i > n; n++)o = o.replace(" " + r[n] + " ", " ");
            (o = o.replace(/^\s+|\s+$/g, "")) !== t.className && (t.className = o)
        }
        return t
    }, Wt = function (t, e) {
        var n = d(t, null).getPropertyValue(e);
        return "cursor" !== e || n && "auto" !== n || "A" !== t.nodeName ? n : "pointer"
    }, Ht = function (t) {
        var e = {left: 0, top: 0, width: 0, height: 0};
        if (t.getBoundingClientRect) {
            var n = t.getBoundingClientRect(), i = r.pageXOffset, o = r.pageYOffset, s = a.documentElement.clientLeft || 0, l = a.documentElement.clientTop || 0, c = 0, u = 0;
            if ("relative" === Wt(a.body, "position")) {
                var h = a.body.getBoundingClientRect(), d = a.documentElement.getBoundingClientRect();
                c = h.left - d.left || 0, u = h.top - d.top || 0
            }
            e.left = n.left + i - s - c, e.top = n.top + o - l - u, e.width = "width" in n ? n.width : n.right - n.left, e.height = "height" in n ? n.height : n.bottom - n.top
        }
        return e
    }, jt = function (t) {
        if (!t)return !1;
        var e = d(t, null);
        if (!e)return !1;
        var n = v(e.height) > 0, i = v(e.width) > 0, o = v(e.top) >= 0, r = v(e.left) >= 0, a = n && i && o && r, s = a ? null : Ht(t);
        return "none" !== e.display && "collapse" !== e.visibility && (a || !!s && (n || s.height > 0) && (i || s.width > 0) && (o || s.top >= 0) && (r || s.left >= 0))
    }, zt = function () {
        c(q), q = 0, h(Y), Y = 0
    }, Vt = function () {
        var t;
        if (i && (t = kt(H.bridge))) {
            var e = Ht(i);
            k(t.style, {
                width: e.width + "px",
                height: e.height + "px",
                top: e.top + "px",
                left: e.left + "px",
                zIndex: "" + qt(Z.zIndex)
            })
        }
    }, Bt = function (t) {
        H.ready === !0 && (H.bridge && "function" == typeof H.bridge.setHandCursor ? H.bridge.setHandCursor(t) : H.ready = !1)
    }, qt = function (t) {
        if (/^(?:auto|inherit)$/.test(t))return t;
        var e;
        return "number" != typeof t || y(t) ? "string" == typeof t && (e = qt(m(t, 10))) : e = t, "number" == typeof e ? e : "auto"
    }, Yt = function (t) {
        var e = /(\r\n|\r|\n)/g;
        return "string" == typeof t && Z.fixLineEndings === !0 && (R() ? /((^|[^\r])\n|\r([^\n]|$))/.test(t) && (t = t.replace(e, "\r\n")) : /\r/.test(t) && (t = t.replace(e, "\n"))), t
    }, Xt = function (e) {
        var n, i, o, r = H.sandboxed, a = null;
        if (e = e === !0, W === !1)a = !1; else {
            try {
                i = t.frameElement || null
            } catch (t) {
                o = {name: t.name, message: t.message}
            }
            if (i && 1 === i.nodeType && "IFRAME" === i.nodeName)try {
                a = i.hasAttribute("sandbox")
            } catch (t) {
                a = null
            } else {
                try {
                    n = document.domain || null
                } catch (t) {
                    n = null
                }
                (null === n || o && "SecurityError" === o.name && /(^|[\s\(\[@])sandbox(es|ed|ing|[\s\.,!\)\]@]|$)/.test(o.message.toLowerCase())) && (a = !0)
            }
        }
        return H.sandboxed = a, r === a || e || $t(p), a
    }, $t = function (t) {
        function e(t) {
            var e = t.match(/[\d]+/g);
            return e.length = 3, e.join(".")
        }

        function n(t) {
            return !!t && (t = t.toLowerCase()) && (/^(pepflashplayer\.dll|libpepflashplayer\.so|pepperflashplayer\.plugin)$/.test(t) || "chrome.plugin" === t.slice(-13))
        }

        function i(t) {
            t && (l = !0, t.version && (h = e(t.version)), !h && t.description && (h = e(t.description)), t.filename && (u = n(t.filename)))
        }

        var o, r, a, l = !1, c = !1, u = !1, h = "";
        if (s.plugins && s.plugins.length)o = s.plugins["Shockwave Flash"], i(o), s.plugins["Shockwave Flash 2.0"] && (l = !0, h = "2.0.0.11"); else if (s.mimeTypes && s.mimeTypes.length)a = s.mimeTypes["application/x-shockwave-flash"], o = a && a.enabledPlugin, i(o); else if (void 0 !== t) {
            c = !0;
            try {
                r = new t("ShockwaveFlash.ShockwaveFlash.7"), l = !0, h = e(r.GetVariable("$version"))
            } catch (n) {
                try {
                    r = new t("ShockwaveFlash.ShockwaveFlash.6"), l = !0, h = "6.0.21"
                } catch (n) {
                    try {
                        r = new t("ShockwaveFlash.ShockwaveFlash"), l = !0, h = e(r.GetVariable("$version"))
                    } catch (t) {
                        c = !1
                    }
                }
            }
        }
        H.disabled = l !== !0, H.outdated = h && v(h) < v(j), H.version = h || "0.0.0", H.pluginType = u ? "pepper" : c ? "activex" : l ? "netscape" : "unknown"
    };
    $t(p), Xt(!0);
    var Ut = function () {
        return this instanceof Ut ? void("function" == typeof Ut._createClient && Ut._createClient.apply(this, E(arguments))) : new Ut
    };
    x(Ut, "version", {value: "2.3.0-beta.1", writable: !1, configurable: !0, enumerable: !0}), Ut.config = function () {
        return K.apply(this, E(arguments))
    }, Ut.state = function () {
        return J.apply(this, E(arguments))
    }, Ut.isFlashUnusable = function () {
        return tt.apply(this, E(arguments))
    }, Ut.on = function () {
        return et.apply(this, E(arguments))
    }, Ut.off = function () {
        return nt.apply(this, E(arguments))
    }, Ut.handlers = function () {
        return it.apply(this, E(arguments))
    }, Ut.emit = function () {
        return ot.apply(this, E(arguments))
    }, Ut.create = function () {
        return rt.apply(this, E(arguments))
    }, Ut.destroy = function () {
        return at.apply(this, E(arguments))
    }, Ut.setData = function () {
        return st.apply(this, E(arguments))
    }, Ut.clearData = function () {
        return lt.apply(this, E(arguments))
    }, Ut.getData = function () {
        return ct.apply(this, E(arguments))
    }, Ut.focus = Ut.activate = function () {
        return ut.apply(this, E(arguments))
    }, Ut.blur = Ut.deactivate = function () {
        return ht.apply(this, E(arguments))
    }, Ut.activeElement = function () {
        return dt.apply(this, E(arguments))
    };
    var Qt = 0, Gt = {}, Zt = 0, Kt = {}, Jt = {};
    k(Z, {autoActivate: !0});
    var te = function (t) {
        var e = this;
        e.id = "" + Qt++, Gt[e.id] = {
            instance: e,
            elements: [],
            handlers: {}
        }, t && e.clip(t), Ut.on("*", function (t) {
            return e.emit(t)
        }), Ut.on("destroy", function () {
            e.destroy()
        }), Ut.create()
    }, ee = function (t, i) {
        var o, r, a, s = {}, l = Gt[this.id], c = l && l.handlers;
        if (!l)throw new Error("Attempted to add new listener(s) to a destroyed ZeroClipboard client instance");
        if ("string" == typeof t && t)a = t.toLowerCase().split(/\s+/); else if ("object" == typeof t && t && void 0 === i)for (o in t)C.call(t, o) && "string" == typeof o && o && "function" == typeof t[o] && this.on(o, t[o]);
        if (a && a.length) {
            for (o = 0, r = a.length; r > o; o++)t = a[o].replace(/^on/, ""), s[t] = !0, c[t] || (c[t] = []), c[t].push(i);
            if (s.ready && H.ready && this.emit({type: "ready", client: this}), s.error) {
                for (o = 0, r = U.length; r > o; o++)if (H[U[o].replace(/^flash-/, "")]) {
                    this.emit({type: "error", name: U[o], client: this});
                    break
                }
                n !== e && Ut.version !== n && this.emit({
                    type: "error",
                    name: "version-mismatch",
                    jsVersion: Ut.version,
                    swfVersion: n
                })
            }
        }
        return this
    }, ne = function (t, e) {
        var n, i, o, r, a, s = Gt[this.id], l = s && s.handlers;
        if (!l)return this;
        if (0 === arguments.length)r = w(l); else if ("string" == typeof t && t)r = t.split(/\s+/); else if ("object" == typeof t && t && void 0 === e)for (n in t)C.call(t, n) && "string" == typeof n && n && "function" == typeof t[n] && this.off(n, t[n]);
        if (r && r.length)for (n = 0, i = r.length; i > n; n++)if (t = r[n].toLowerCase().replace(/^on/, ""), (a = l[t]) && a.length)if (e)for (o = a.indexOf(e); -1 !== o;)a.splice(o, 1), o = a.indexOf(e, o); else a.length = 0;
        return this
    }, ie = function (t) {
        var e = null, n = Gt[this.id] && Gt[this.id].handlers;
        return n && (e = "string" == typeof t && t ? n[t] ? n[t].slice(0) : [] : A(n)), e
    }, oe = function (t) {
        if (ce.call(this, t)) {
            "object" == typeof t && t && "string" == typeof t.type && t.type && (t = k({}, t));
            var e = k({}, pt(t), {client: this});
            ue.call(this, e)
        }
        return this
    }, re = function (t) {
        if (!Gt[this.id])throw new Error("Attempted to clip element(s) to a destroyed ZeroClipboard client instance");
        t = he(t);
        for (var e = 0; e < t.length; e++)if (C.call(t, e) && t[e] && 1 === t[e].nodeType) {
            t[e].zcClippingId ? -1 === Kt[t[e].zcClippingId].indexOf(this.id) && Kt[t[e].zcClippingId].push(this.id) : (t[e].zcClippingId = "zcClippingId_" + Zt++, Kt[t[e].zcClippingId] = [this.id], Z.autoActivate === !0 && de(t[e]));
            var n = Gt[this.id] && Gt[this.id].elements;
            -1 === n.indexOf(t[e]) && n.push(t[e])
        }
        return this
    }, ae = function (t) {
        var e = Gt[this.id];
        if (!e)return this;
        var n, i = e.elements;
        t = void 0 === t ? i.slice(0) : he(t);
        for (var o = t.length; o--;)if (C.call(t, o) && t[o] && 1 === t[o].nodeType) {
            for (n = 0; -1 !== (n = i.indexOf(t[o], n));)i.splice(n, 1);
            var r = Kt[t[o].zcClippingId];
            if (r) {
                for (n = 0; -1 !== (n = r.indexOf(this.id, n));)r.splice(n, 1);
                0 === r.length && (Z.autoActivate === !0 && fe(t[o]), delete t[o].zcClippingId)
            }
        }
        return this
    }, se = function () {
        var t = Gt[this.id];
        return t && t.elements ? t.elements.slice(0) : []
    }, le = function () {
        Gt[this.id] && (this.unclip(), this.off(), delete Gt[this.id])
    }, ce = function (t) {
        if (!t || !t.type)return !1;
        if (t.client && t.client !== this)return !1;
        var e = Gt[this.id], n = e && e.elements, i = !!n && n.length > 0, o = !t.target || i && -1 !== n.indexOf(t.target), r = t.relatedTarget && i && -1 !== n.indexOf(t.relatedTarget), a = t.client && t.client === this;
        return !(!e || !(o || r || a))
    }, ue = function (t) {
        var e = Gt[this.id];
        if ("object" == typeof t && t && t.type && e) {
            var n = vt(t), i = e && e.handlers["*"] || [], o = e && e.handlers[t.type] || [], a = i.concat(o);
            if (a && a.length) {
                var s, l, c, u, h, d = this;
                for (s = 0, l = a.length; l > s; s++)c = a[s], u = d, "string" == typeof c && "function" == typeof r[c] && (c = r[c]), "object" == typeof c && c && "function" == typeof c.handleEvent && (u = c, c = c.handleEvent), "function" == typeof c && (h = k({}, t), yt(c, u, [h], n))
            }
        }
    }, he = function (t) {
        return "string" == typeof t && (t = []), "number" != typeof t.length ? [t] : t
    }, de = function (t) {
        if (t && 1 === t.nodeType) {
            var e = function (t) {
                (t || (t = r.event)) && ("js" !== t._source && (t.stopImmediatePropagation(), t.preventDefault()), delete t._source)
            }, n = function (n) {
                (n || (n = r.event)) && (e(n), Ut.focus(t))
            };
            t.addEventListener("mouseover", n, !1), t.addEventListener("mouseout", e, !1), t.addEventListener("mouseenter", e, !1), t.addEventListener("mouseleave", e, !1), t.addEventListener("mousemove", e, !1), Jt[t.zcClippingId] = {
                mouseover: n,
                mouseout: e,
                mouseenter: e,
                mouseleave: e,
                mousemove: e
            }
        }
    }, fe = function (t) {
        if (t && 1 === t.nodeType) {
            var e = Jt[t.zcClippingId];
            if ("object" == typeof e && e) {
                for (var n, i, o = ["move", "leave", "enter", "out", "over"], r = 0, a = o.length; a > r; r++)n = "mouse" + o[r], "function" == typeof(i = e[n]) && t.removeEventListener(n, i, !1);
                delete Jt[t.zcClippingId]
            }
        }
    };
    Ut._createClient = function () {
        te.apply(this, E(arguments))
    }, Ut.prototype.on = function () {
        return ee.apply(this, E(arguments))
    }, Ut.prototype.off = function () {
        return ne.apply(this, E(arguments))
    }, Ut.prototype.handlers = function () {
        return ie.apply(this, E(arguments))
    }, Ut.prototype.emit = function () {
        return oe.apply(this, E(arguments))
    }, Ut.prototype.clip = function () {
        return re.apply(this, E(arguments))
    }, Ut.prototype.unclip = function () {
        return ae.apply(this, E(arguments))
    }, Ut.prototype.elements = function () {
        return se.apply(this, E(arguments))
    }, Ut.prototype.destroy = function () {
        return le.apply(this, E(arguments))
    }, Ut.prototype.setText = function (t) {
        if (!Gt[this.id])throw new Error("Attempted to set pending clipboard data from a destroyed ZeroClipboard client instance");
        return Ut.setData("text/plain", t), this
    }, Ut.prototype.setHtml = function (t) {
        if (!Gt[this.id])throw new Error("Attempted to set pending clipboard data from a destroyed ZeroClipboard client instance");
        return Ut.setData("text/html", t), this
    }, Ut.prototype.setRichText = function (t) {
        if (!Gt[this.id])throw new Error("Attempted to set pending clipboard data from a destroyed ZeroClipboard client instance");
        return Ut.setData("application/rtf", t), this
    }, Ut.prototype.setData = function () {
        if (!Gt[this.id])throw new Error("Attempted to set pending clipboard data from a destroyed ZeroClipboard client instance");
        return Ut.setData.apply(this, E(arguments)), this
    }, Ut.prototype.clearData = function () {
        if (!Gt[this.id])throw new Error("Attempted to clear pending clipboard data from a destroyed ZeroClipboard client instance");
        return Ut.clearData.apply(this, E(arguments)), this
    }, Ut.prototype.getData = function () {
        if (!Gt[this.id])throw new Error("Attempted to get pending clipboard data from a destroyed ZeroClipboard client instance");
        return Ut.getData.apply(this, E(arguments))
    }, "function" == typeof define && define.amd ? define(function () {
        return Ut
    }) : "object" == typeof module && module && "object" == typeof module.exports && module.exports ? module.exports = Ut : t.ZeroClipboard = Ut
}(function () {
    return this || window
}()), function (t) {
    t.extend(t.fn, {
        validate: function (e) {
            if (!this.length)return void(e && e.debug && window.console && console.warn("Nothing selected, can't validate, returning nothing."));
            var n = t.data(this[0], "validator");
            return n ? n : (this.attr("novalidate", "novalidate"), n = new t.validator(e, this[0]), t.data(this[0], "validator", n), n.settings.onsubmit && (this.validateDelegate(":submit", "click", function (e) {
                n.settings.submitHandler && (n.submitButton = e.target), t(e.target).hasClass("cancel") && (n.cancelSubmit = !0), void 0 !== t(e.target).attr("formnovalidate") && (n.cancelSubmit = !0)
            }), this.submit(function (e) {
                function i() {
                    var i;
                    return !n.settings.submitHandler || (n.submitButton && (i = t("<input type='hidden'/>").attr("name", n.submitButton.name).val(t(n.submitButton).val()).appendTo(n.currentForm)), n.settings.submitHandler.call(n, n.currentForm, e), n.submitButton && i.remove(), !1)
                }

                return n.settings.debug && e.preventDefault(), n.cancelSubmit ? (n.cancelSubmit = !1, i()) : n.form() ? n.pendingRequest ? (n.formSubmitted = !0, !1) : i() : (n.focusInvalid(), !1)
            })), n)
        }, valid: function () {
            var e, n;
            return t(this[0]).is("form") ? e = this.validate().form() : (e = !0, n = t(this[0].form).validate(), this.each(function () {
                e = n.element(this) && e
            })), e
        }, removeAttrs: function (e) {
            var n = {}, i = this;
            return t.each(e.split(/\s/), function (t, e) {
                n[e] = i.attr(e), i.removeAttr(e)
            }), n
        }, rules: function (e, n) {
            var i, o, r, a, s, l, c = this[0];
            if (e)switch (i = t.data(c.form, "validator").settings, o = i.rules, r = t.validator.staticRules(c), e) {
                case"add":
                    t.extend(r, t.validator.normalizeRule(n)), delete r.messages, o[c.name] = r, n.messages && (i.messages[c.name] = t.extend(i.messages[c.name], n.messages));
                    break;
                case"remove":
                    return n ? (l = {}, t.each(n.split(/\s/), function (e, n) {
                        l[n] = r[n], delete r[n], "required" === n && t(c).removeAttr("aria-required")
                    }), l) : (delete o[c.name], r)
            }
            return a = t.validator.normalizeRules(t.extend({}, t.validator.classRules(c), t.validator.attributeRules(c), t.validator.dataRules(c), t.validator.staticRules(c)), c), a.required && (s = a.required, delete a.required, a = t.extend({required: s}, a), t(c).attr("aria-required", "true")), a.remote && (s = a.remote, delete a.remote, a = t.extend(a, {remote: s})), a
        }
    }), t.extend(t.expr[":"], {
        blank: function (e) {
            return !t.trim("" + t(e).val())
        }, filled: function (e) {
            return !!t.trim("" + t(e).val())
        }, unchecked: function (e) {
            return !t(e).prop("checked")
        }
    }), t.validator = function (e, n) {
        this.settings = t.extend(!0, {}, t.validator.defaults, e), this.currentForm = n, this.init()
    }, t.validator.format = function (e, n) {
        return 1 === arguments.length ? function () {
            var n = t.makeArray(arguments);
            return n.unshift(e), t.validator.format.apply(this, n)
        } : (arguments.length > 2 && n.constructor !== Array && (n = t.makeArray(arguments).slice(1)), n.constructor !== Array && (n = [n]), t.each(n, function (t, n) {
            e = e.replace(new RegExp("\\{" + t + "\\}", "g"), function () {
                return n
            })
        }), e)
    }, t.extend(t.validator, {
        defaults: {
            messages: {},
            groups: {},
            rules: {},
            errorClass: "error",
            validClass: "valid",
            errorElement: "label",
            focusInvalid: !0,
            errorContainer: t([]),
            errorLabelContainer: t([]),
            onsubmit: !0,
            ignore: ":hidden",
            ignoreTitle: !1,
            onfocusin: function (t) {
                this.lastActive = t, this.settings.focusCleanup && !this.blockFocusCleanup && (this.settings.unhighlight && this.settings.unhighlight.call(this, t, this.settings.errorClass, this.settings.validClass), this.addWrapper(this.errorsFor(t)).hide())
            },
            onfocusout: function (t) {
                this.checkable(t) || !(t.name in this.submitted) && this.optional(t) || this.element(t)
            },
            onkeyup: function (t, e) {
                9 === e.which && "" === this.elementValue(t) || (t.name in this.submitted || t === this.lastElement) && this.element(t)
            },
            onclick: function (t) {
                t.name in this.submitted ? this.element(t) : t.parentNode.name in this.submitted && this.element(t.parentNode)
            },
            highlight: function (e, n, i) {
                "radio" === e.type ? this.findByName(e.name).addClass(n).removeClass(i) : t(e).addClass(n).removeClass(i)
            },
            unhighlight: function (e, n, i) {
                "radio" === e.type ? this.findByName(e.name).removeClass(n).addClass(i) : t(e).removeClass(n).addClass(i)
            }
        },
        setDefaults: function (e) {
            t.extend(t.validator.defaults, e)
        },
        messages: {
            required: "This field is required.",
            remote: "Please fix this field.",
            email: "Please enter a valid email address.",
            url: "Please enter a valid URL.",
            date: "Please enter a valid date.",
            dateISO: "Please enter a valid date (ISO).",
            number: "Please enter a valid number.",
            digits: "Please enter only digits.",
            creditcard: "Please enter a valid credit card number.",
            equalTo: "Please enter the same value again.",
            maxlength: t.validator.format("Please enter no more than {0} characters."),
            minlength: t.validator.format("Please enter at least {0} characters."),
            rangelength: t.validator.format("Please enter a value between {0} and {1} characters long."),
            range: t.validator.format("Please enter a value between {0} and {1}."),
            max: t.validator.format("Please enter a value less than or equal to {0}."),
            min: t.validator.format("Please enter a value greater than or equal to {0}.")
        },
        autoCreateRanges: !1,
        prototype: {
            init: function () {
                function e(e) {
                    var n = t.data(this[0].form, "validator"), i = "on" + e.type.replace(/^validate/, ""), o = n.settings;
                    o[i] && !this.is(o.ignore) && o[i].call(n, this[0], e)
                }

                this.labelContainer = t(this.settings.errorLabelContainer), this.errorContext = this.labelContainer.length && this.labelContainer || t(this.currentForm), this.containers = t(this.settings.errorContainer).add(this.settings.errorLabelContainer), this.submitted = {}, this.valueCache = {}, this.pendingRequest = 0, this.pending = {}, this.invalid = {}, this.reset();
                var n, i = this.groups = {};
                t.each(this.settings.groups, function (e, n) {
                    "string" == typeof n && (n = n.split(/\s/)), t.each(n, function (t, n) {
                        i[n] = e
                    })
                }), n = this.settings.rules, t.each(n, function (e, i) {
                    n[e] = t.validator.normalizeRule(i)
                }), t(this.currentForm).validateDelegate(":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'] ,[type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'] ", "focusin focusout keyup", e).validateDelegate("[type='radio'], [type='checkbox'], select, option", "click", e), this.settings.invalidHandler && t(this.currentForm).bind("invalid-form.validate", this.settings.invalidHandler), t(this.currentForm).find("[required], [data-rule-required], .required").attr("aria-required", "true")
            }, form: function () {
                return this.checkForm(), t.extend(this.submitted, this.errorMap), this.invalid = t.extend({}, this.errorMap), this.valid() || t(this.currentForm).triggerHandler("invalid-form", [this]), this.showErrors(), this.valid()
            }, checkForm: function () {
                this.prepareForm();
                for (var t = 0, e = this.currentElements = this.elements(); e[t]; t++)this.check(e[t]);
                return this.valid()
            }, element: function (e) {
                var n = this.clean(e), i = this.validationTargetFor(n), o = !0;
                return this.lastElement = i, void 0 === i ? delete this.invalid[n.name] : (this.prepareElement(i), this.currentElements = t(i), o = this.check(i) !== !1, o ? delete this.invalid[i.name] : this.invalid[i.name] = !0), t(e).attr("aria-invalid", !o), this.numberOfInvalids() || (this.toHide = this.toHide.add(this.containers)), this.showErrors(), o
            }, showErrors: function (e) {
                if (e) {
                    t.extend(this.errorMap, e), this.errorList = [];
                    for (var n in e)this.errorList.push({message: e[n], element: this.findByName(n)[0]});
                    this.successList = t.grep(this.successList, function (t) {
                        return !(t.name in e)
                    })
                }
                this.settings.showErrors ? this.settings.showErrors.call(this, this.errorMap, this.errorList) : this.defaultShowErrors()
            }, resetForm: function () {
                t.fn.resetForm && t(this.currentForm).resetForm(), this.submitted = {}, this.lastElement = null, this.prepareForm(), this.hideErrors(), this.elements().removeClass(this.settings.errorClass).removeData("previousValue").removeAttr("aria-invalid")
            }, numberOfInvalids: function () {
                return this.objectLength(this.invalid)
            }, objectLength: function (t) {
                var e, n = 0;
                for (e in t)n++;
                return n
            }, hideErrors: function () {
                this.addWrapper(this.toHide).hide()
            }, valid: function () {
                return 0 === this.size()
            }, size: function () {
                return this.errorList.length
            }, focusInvalid: function () {
                if (this.settings.focusInvalid)try {
                    t(this.findLastActive() || this.errorList.length && this.errorList[0].element || []).filter(":visible").focus().trigger("focusin")
                } catch (t) {
                }
            }, findLastActive: function () {
                var e = this.lastActive;
                return e && 1 === t.grep(this.errorList, function (t) {
                        return t.element.name === e.name
                    }).length && e
            }, elements: function () {
                var e = this, n = {};
                return t(this.currentForm).find("input, select, textarea").not(":submit, :reset, :image, [disabled]").not(this.settings.ignore).filter(function () {
                    return !this.name && e.settings.debug && window.console && console.error("%o has no name assigned", this), !(this.name in n || !e.objectLength(t(this).rules())) && (n[this.name] = !0, !0)
                })
            }, clean: function (e) {
                return t(e)[0]
            }, errors: function () {
                var e = this.settings.errorClass.split(" ").join(".");
                return t(this.settings.errorElement + "." + e, this.errorContext)
            }, reset: function () {
                this.successList = [], this.errorList = [], this.errorMap = {}, this.toShow = t([]), this.toHide = t([]), this.currentElements = t([])
            }, prepareForm: function () {
                this.reset(), this.toHide = this.errors().add(this.containers)
            }, prepareElement: function (t) {
                this.reset(), this.toHide = this.errorsFor(t)
            }, elementValue: function (e) {
                var n, i = t(e), o = i.attr("type");
                return "radio" === o || "checkbox" === o ? t("input[name='" + i.attr("name") + "']:checked").val() : (n = i.val(), "string" == typeof n ? n.replace(/\r/g, "") : n)
            }, check: function (e) {
                e = this.validationTargetFor(this.clean(e));
                var n, i, o, r = t(e).rules(), a = t.map(r, function (t, e) {
                    return e
                }).length, s = !1, l = this.elementValue(e);
                for (i in r) {
                    o = {method: i, parameters: r[i]};
                    try {
                        if ("dependency-mismatch" === (n = t.validator.methods[i].call(this, l, e, o.parameters)) && 1 === a) {
                            s = !0;
                            continue
                        }
                        if (s = !1, "pending" === n)return void(this.toHide = this.toHide.not(this.errorsFor(e)));
                        if (!n)return this.formatAndAdd(e, o), !1
                    } catch (t) {
                        throw this.settings.debug && window.console && console.log("Exception occurred when checking element " + e.id + ", check the '" + o.method + "' method.", t), t
                    }
                }
                if (!s)return this.objectLength(r) && this.successList.push(e), !0
            }, customDataMessage: function (e, n) {
                return t(e).data("msg" + n[0].toUpperCase() + n.substring(1).toLowerCase()) || t(e).data("msg")
            }, customMessage: function (t, e) {
                var n = this.settings.messages[t];
                return n && (n.constructor === String ? n : n[e])
            }, findDefined: function () {
                for (var t = 0; t < arguments.length; t++)if (void 0 !== arguments[t])return arguments[t]
            }, defaultMessage: function (e, n) {
                return this.findDefined(this.customMessage(e.name, n), this.customDataMessage(e, n), !this.settings.ignoreTitle && e.title || void 0, t.validator.messages[n], "<strong>Warning: No message defined for " + e.name + "</strong>")
            }, formatAndAdd: function (e, n) {
                var i = this.defaultMessage(e, n.method), o = /\$?\{(\d+)\}/g;
                "function" == typeof i ? i = i.call(this, n.parameters, e) : o.test(i) && (i = t.validator.format(i.replace(o, "{$1}"), n.parameters)), this.errorList.push({
                    message: i,
                    element: e,
                    method: n.method
                }), this.errorMap[e.name] = i, this.submitted[e.name] = i
            }, addWrapper: function (t) {
                return this.settings.wrapper && (t = t.add(t.parent(this.settings.wrapper))), t
            }, defaultShowErrors: function () {
                var t, e, n;
                for (t = 0; this.errorList[t]; t++)n = this.errorList[t], this.settings.highlight && this.settings.highlight.call(this, n.element, this.settings.errorClass, this.settings.validClass), this.showLabel(n.element, n.message);
                if (this.errorList.length && (this.toShow = this.toShow.add(this.containers)), this.settings.success)for (t = 0; this.successList[t]; t++)this.showLabel(this.successList[t]);
                if (this.settings.unhighlight)for (t = 0, e = this.validElements(); e[t]; t++)this.settings.unhighlight.call(this, e[t], this.settings.errorClass, this.settings.validClass);
                this.toHide = this.toHide.not(this.toShow), this.hideErrors(), this.addWrapper(this.toShow).show()
            }, validElements: function () {
                return this.currentElements.not(this.invalidElements())
            }, invalidElements: function () {
                return t(this.errorList).map(function () {
                    return this.element
                })
            }, showLabel: function (e, n) {
                var i = this.errorsFor(e);
                i.length ? (i.removeClass(this.settings.validClass).addClass(this.settings.errorClass), i.html(n)) : (i = t("<" + this.settings.errorElement + ">").attr("for", this.idOrName(e)).addClass(this.settings.errorClass).html(n || ""), this.settings.wrapper && (i = i.hide().show().wrap("<" + this.settings.wrapper + "/>").parent()), this.labelContainer.append(i).length || (this.settings.errorPlacement ? this.settings.errorPlacement(i, t(e)) : i.insertAfter(e))), !n && this.settings.success && (i.text(""), "string" == typeof this.settings.success ? i.addClass(this.settings.success) : this.settings.success(i, e)), this.toShow = this.toShow.add(i)
            }, errorsFor: function (e) {
                var n = this.idOrName(e);
                return this.errors().filter(function () {
                    return t(this).attr("for") === n
                })
            }, idOrName: function (t) {
                return this.groups[t.name] || (this.checkable(t) ? t.name : t.id || t.name)
            }, validationTargetFor: function (t) {
                return this.checkable(t) && (t = this.findByName(t.name).not(this.settings.ignore)[0]), t
            }, checkable: function (t) {
                return /radio|checkbox/i.test(t.type)
            }, findByName: function (e) {
                return t(this.currentForm).find("[name='" + e + "']")
            }, getLength: function (e, n) {
                switch (n.nodeName.toLowerCase()) {
                    case"select":
                        return t("option:selected", n).length;
                    case"input":
                        if (this.checkable(n))return this.findByName(n.name).filter(":checked").length
                }
                return e.length
            }, depend: function (t, e) {
                return !this.dependTypes[typeof t] || this.dependTypes[typeof t](t, e)
            }, dependTypes: {
                boolean: function (t) {
                    return t
                }, string: function (e, n) {
                    return !!t(e, n.form).length
                }, function: function (t, e) {
                    return t(e)
                }
            }, optional: function (e) {
                var n = this.elementValue(e);
                return !t.validator.methods.required.call(this, n, e) && "dependency-mismatch"
            }, startRequest: function (t) {
                this.pending[t.name] || (this.pendingRequest++, this.pending[t.name] = !0)
            }, stopRequest: function (e, n) {
                this.pendingRequest--, this.pendingRequest < 0 && (this.pendingRequest = 0), delete this.pending[e.name], n && 0 === this.pendingRequest && this.formSubmitted && this.form() ? (t(this.currentForm).submit(), this.formSubmitted = !1) : !n && 0 === this.pendingRequest && this.formSubmitted && (t(this.currentForm).triggerHandler("invalid-form", [this]), this.formSubmitted = !1)
            }, previousValue: function (e) {
                return t.data(e, "previousValue") || t.data(e, "previousValue", {
                        old: null,
                        valid: !0,
                        message: this.defaultMessage(e, "remote")
                    })
            }
        },
        classRuleSettings: {
            required: {required: !0},
            email: {email: !0},
            url: {url: !0},
            date: {date: !0},
            dateISO: {dateISO: !0},
            number: {number: !0},
            digits: {digits: !0},
            creditcard: {creditcard: !0}
        },
        addClassRules: function (e, n) {
            e.constructor === String ? this.classRuleSettings[e] = n : t.extend(this.classRuleSettings, e)
        },
        classRules: function (e) {
            var n = {}, i = t(e).attr("class");
            return i && t.each(i.split(" "), function () {
                this in t.validator.classRuleSettings && t.extend(n, t.validator.classRuleSettings[this])
            }), n
        },
        attributeRules: function (e) {
            var n, i, o = {}, r = t(e), a = e.getAttribute("type");
            for (n in t.validator.methods)"required" === n ? (i = e.getAttribute(n), "" === i && (i = !0), i = !!i) : i = r.attr(n), /min|max/.test(n) && (null === a || /number|range|text/.test(a)) && (i = Number(i)), i || 0 === i ? o[n] = i : a === n && "range" !== a && (o[n] = !0);
            return o.maxlength && /-1|2147483647|524288/.test(o.maxlength) && delete o.maxlength, o
        },
        dataRules: function (e) {
            var n, i, o = {}, r = t(e);
            for (n in t.validator.methods)void 0 !== (i = r.data("rule" + n[0].toUpperCase() + n.substring(1).toLowerCase())) && (o[n] = i);
            return o
        },
        staticRules: function (e) {
            var n = {}, i = t.data(e.form, "validator");
            return i.settings.rules && (n = t.validator.normalizeRule(i.settings.rules[e.name]) || {}), n
        },
        normalizeRules: function (e, n) {
            return t.each(e, function (i, o) {
                if (o === !1)return void delete e[i];
                if (o.param || o.depends) {
                    var r = !0;
                    switch (typeof o.depends) {
                        case"string":
                            r = !!t(o.depends, n.form).length;
                            break;
                        case"function":
                            r = o.depends.call(n, n)
                    }
                    r ? e[i] = void 0 === o.param || o.param : delete e[i]
                }
            }), t.each(e, function (i, o) {
                e[i] = t.isFunction(o) ? o(n) : o
            }), t.each(["minlength", "maxlength"], function () {
                e[this] && (e[this] = Number(e[this]))
            }), t.each(["rangelength", "range"], function () {
                var n;
                e[this] && (t.isArray(e[this]) ? e[this] = [Number(e[this][0]), Number(e[this][1])] : "string" == typeof e[this] && (n = e[this].split(/[\s,]+/), e[this] = [Number(n[0]), Number(n[1])]))
            }), t.validator.autoCreateRanges && (e.min && e.max && (e.range = [e.min, e.max], delete e.min, delete e.max), e.minlength && e.maxlength && (e.rangelength = [e.minlength, e.maxlength], delete e.minlength, delete e.maxlength)), e
        },
        normalizeRule: function (e) {
            if ("string" == typeof e) {
                var n = {};
                t.each(e.split(/\s/), function () {
                    n[this] = !0
                }), e = n
            }
            return e
        },
        addMethod: function (e, n, i) {
            t.validator.methods[e] = n, t.validator.messages[e] = void 0 !== i ? i : t.validator.messages[e], n.length < 3 && t.validator.addClassRules(e, t.validator.normalizeRule(e))
        },
        methods: {
            required: function (e, n, i) {
                if (!this.depend(i, n))return "dependency-mismatch";
                if ("select" === n.nodeName.toLowerCase()) {
                    var o = t(n).val();
                    return o && o.length > 0
                }
                return this.checkable(n) ? this.getLength(e, n) > 0 : t.trim(e).length > 0
            }, email: function (t, e) {
                return this.optional(e) || /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(t)
            }, url: function (t, e) {
                return this.optional(e) || /^(https?|s?ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(t)
            }, date: function (t, e) {
                return this.optional(e) || !/Invalid|NaN/.test(new Date(t).toString())
            }, dateISO: function (t, e) {
                return this.optional(e) || /^\d{4}[\/\-]\d{1,2}[\/\-]\d{1,2}$/.test(t)
            }, number: function (t, e) {
                return this.optional(e) || /^-?(?:\d+|\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(t)
            }, digits: function (t, e) {
                return this.optional(e) || /^\d+$/.test(t)
            }, creditcard: function (t, e) {
                if (this.optional(e))return "dependency-mismatch";
                if (/[^0-9 \-]+/.test(t))return !1;
                var n, i, o = 0, r = 0, a = !1;
                if (t = t.replace(/\D/g, ""), t.length < 13 || t.length > 19)return !1;
                for (n = t.length - 1; n >= 0; n--)i = t.charAt(n), r = parseInt(i, 10), a && (r *= 2) > 9 && (r -= 9), o += r, a = !a;
                return o % 10 == 0
            }, minlength: function (e, n, i) {
                var o = t.isArray(e) ? e.length : this.getLength(t.trim(e), n);
                return this.optional(n) || o >= i
            }, maxlength: function (e, n, i) {
                var o = t.isArray(e) ? e.length : this.getLength(t.trim(e), n);
                return this.optional(n) || o <= i
            }, rangelength: function (e, n, i) {
                var o = t.isArray(e) ? e.length : this.getLength(t.trim(e), n);
                return this.optional(n) || o >= i[0] && o <= i[1]
            }, min: function (t, e, n) {
                return this.optional(e) || t >= n
            }, max: function (t, e, n) {
                return this.optional(e) || t <= n
            }, range: function (t, e, n) {
                return this.optional(e) || t >= n[0] && t <= n[1]
            }, equalTo: function (e, n, i) {
                var o = t(i);
                return this.settings.onfocusout && o.unbind(".validate-equalTo").bind("blur.validate-equalTo", function () {
                    t(n).valid()
                }), e === o.val()
            }, remote: function (e, n, i) {
                if (this.optional(n))return "dependency-mismatch";
                var o, r, a = this.previousValue(n);
                return this.settings.messages[n.name] || (this.settings.messages[n.name] = {}), a.originalMessage = this.settings.messages[n.name].remote, this.settings.messages[n.name].remote = a.message, i = "string" == typeof i && {url: i} || i, a.old === e ? a.valid : (a.old = e, o = this, this.startRequest(n), r = {}, r[n.name] = e, t.ajax(t.extend(!0, {
                    url: i,
                    mode: "abort",
                    port: "validate" + n.name,
                    dataType: "json",
                    data: r,
                    context: o.currentForm,
                    success: function (i) {
                        var r, s, l, c = i === !0 || "true" === i;
                        o.settings.messages[n.name].remote = a.originalMessage, c ? (l = o.formSubmitted, o.prepareElement(n), o.formSubmitted = l, o.successList.push(n), delete o.invalid[n.name], o.showErrors()) : (r = {}, s = i || o.defaultMessage(n, "remote"), r[n.name] = a.message = t.isFunction(s) ? s(e) : s, o.invalid[n.name] = !0, o.showErrors(r)), a.valid = c, o.stopRequest(n, c)
                    }
                }, i)), "pending")
            }
        }
    }), t.format = function () {
        throw"$.format has been deprecated. Please use $.validator.format instead."
    }
}(jQuery), function (t) {
    var e, n = {};
    t.ajaxPrefilter ? t.ajaxPrefilter(function (t, e, i) {
        var o = t.port;
        "abort" === t.mode && (n[o] && n[o].abort(), n[o] = i)
    }) : (e = t.ajax, t.ajax = function (i) {
        var o = ("mode" in i ? i : t.ajaxSettings).mode, r = ("port" in i ? i : t.ajaxSettings).port;
        return "abort" === o ? (n[r] && n[r].abort(), n[r] = e.apply(this, arguments), n[r]) : e.apply(this, arguments)
    })
}(jQuery), function (t) {
    t.extend(t.fn, {
        validateDelegate: function (e, n, i) {
            return this.bind(n, function (n) {
                var o = t(n.target);
                if (o.is(e))return i.apply(o, arguments)
            })
        }
    })
}(jQuery);