!(function(e, t) {
  "object" == typeof exports && "object" == typeof module
    ? (module.exports = t())
    : "function" == typeof define && define.amd
    ? define([], t)
    : "object" == typeof exports
    ? (exports.VideoContext = t())
    : (e.VideoContext = t());
})(window, function() {
  return (function(e) {
    var t = {};
    function r(o) {
      if (t[o]) return t[o].exports;
      var n = (t[o] = { i: o, l: !1, exports: {} });
      return e[o].call(n.exports, n, n.exports, r), (n.l = !0), n.exports;
    }
    return (
      (r.m = e),
      (r.c = t),
      (r.d = function(e, t, o) {
        r.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: o });
      }),
      (r.r = function(e) {
        "undefined" != typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
          Object.defineProperty(e, "__esModule", { value: !0 });
      }),
      (r.t = function(e, t) {
        if ((1 & t && (e = r(e)), 8 & t)) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var o = Object.create(null);
        if (
          (r.r(o),
          Object.defineProperty(o, "default", { enumerable: !0, value: e }),
          2 & t && "string" != typeof e)
        )
          for (var n in e)
            r.d(
              o,
              n,
              function(t) {
                return e[t];
              }.bind(null, n)
            );
        return o;
      }),
      (r.n = function(e) {
        var t =
          e && e.__esModule
            ? function() {
                return e.default;
              }
            : function() {
                return e;
              };
        return r.d(t, "a", t), t;
      }),
      (r.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t);
      }),
      (r.p = ""),
      r((r.s = 14))
    );
  })([
    function(e, t, r) {
      var o, n, i;
      (n = [t, r(3), r(1), r(5), r(7), r(8), r(9), r(11), r(13)]),
        void 0 ===
          (i =
            "function" ==
            typeof (o = function(e, t, r, o, n, i, a, u, s) {
              "use strict";
              Object.defineProperty(e, "__esModule", { value: !0 }),
                (e.UpdateablesManager = void 0),
                (e.compileShader = function(e, t, r) {
                  var o = e.createShader(r);
                  if (
                    (e.shaderSource(o, t),
                    e.compileShader(o),
                    !e.getShaderParameter(o, e.COMPILE_STATUS))
                  )
                    throw "could not compile shader:" + e.getShaderInfoLog(o);
                  return o;
                }),
                (e.createShaderProgram = function(e, t, r) {
                  var o = e.createProgram();
                  if (
                    (e.attachShader(o, t),
                    e.attachShader(o, r),
                    e.linkProgram(o),
                    !e.getProgramParameter(o, e.LINK_STATUS))
                  )
                    throw {
                      error: 4,
                      msg: "Can't link shader program for track",
                      toString: function() {
                        return this.msg;
                      }
                    };
                  return o;
                }),
                (e.createElementTexture = function(e) {
                  var t = e.createTexture();
                  return (
                    e.bindTexture(e.TEXTURE_2D, t),
                    e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL, !0),
                    e.texParameteri(
                      e.TEXTURE_2D,
                      e.TEXTURE_WRAP_S,
                      e.CLAMP_TO_EDGE
                    ),
                    e.texParameteri(
                      e.TEXTURE_2D,
                      e.TEXTURE_WRAP_T,
                      e.CLAMP_TO_EDGE
                    ),
                    e.texParameteri(
                      e.TEXTURE_2D,
                      e.TEXTURE_MIN_FILTER,
                      e.NEAREST
                    ),
                    e.texParameteri(
                      e.TEXTURE_2D,
                      e.TEXTURE_MAG_FILTER,
                      e.NEAREST
                    ),
                    t
                  );
                }),
                (e.updateTexture = function(e, t, r) {
                  (void 0 !== r.readyState && 0 === r.readyState) ||
                    (e.bindTexture(e.TEXTURE_2D, t),
                    e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL, !0),
                    e.texImage2D(
                      e.TEXTURE_2D,
                      0,
                      e.RGBA,
                      e.RGBA,
                      e.UNSIGNED_BYTE,
                      r
                    ));
                }),
                (e.clearTexture = function(e, t) {
                  e.bindTexture(e.TEXTURE_2D, t),
                    e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL, !0),
                    e.texImage2D(
                      e.TEXTURE_2D,
                      0,
                      e.RGBA,
                      1,
                      1,
                      0,
                      e.RGBA,
                      e.UNSIGNED_BYTE,
                      new Uint8Array([0, 0, 0, 0])
                    );
                }),
                (e.generateRandomId = function() {
                  function e(e) {
                    return e[Math.floor(Math.random() * e.length)];
                  }
                  var t,
                    r =
                      e([
                        "adorable",
                        "alert",
                        "average",
                        "beautiful",
                        "blonde",
                        "bloody",
                        "blushing",
                        "bright",
                        "clean",
                        "clear",
                        "cloudy",
                        "colourful",
                        "concerned",
                        "crowded",
                        "curious",
                        "cute",
                        "dark",
                        "dirty",
                        "drab",
                        "distinct",
                        "dull",
                        "elegant",
                        "fancy",
                        "filthy",
                        "glamorous",
                        "gleaming",
                        "graceful",
                        "grotesque",
                        "homely",
                        "light",
                        "misty",
                        "motionless",
                        "muddy",
                        "plain",
                        "poised",
                        "quaint",
                        "scary",
                        "shiny",
                        "smoggy",
                        "sparkling",
                        "spotless",
                        "stormy",
                        "strange",
                        "ugly",
                        "unsightly",
                        "unusual"
                      ]) +
                      " " +
                      e([
                        "alive",
                        "brainy",
                        "broken",
                        "busy",
                        "careful",
                        "cautious",
                        "clever",
                        "crazy",
                        "damaged",
                        "dead",
                        "difficult",
                        "easy",
                        "fake",
                        "false",
                        "famous",
                        "forward",
                        "fragile",
                        "guilty",
                        "helpful",
                        "helpless",
                        "important",
                        "impossible",
                        "infamous",
                        "innocent",
                        "inquisitive",
                        "mad",
                        "modern",
                        "open",
                        "outgoing",
                        "outstanding",
                        "poor",
                        "powerful",
                        "puzzled",
                        "real",
                        "rich",
                        "right",
                        "robust",
                        "sane",
                        "scary",
                        "shy",
                        "sleepy",
                        "stupid",
                        "super",
                        "tame",
                        "thick",
                        "tired",
                        "wild",
                        "wrong"
                      ]) +
                      " " +
                      e([
                        "manatee",
                        "gila monster",
                        "nematode",
                        "seahorse",
                        "slug",
                        "koala bear",
                        "giant tortoise",
                        "garden snail",
                        "starfish",
                        "sloth",
                        "american woodcock",
                        "coral",
                        "swallowtail butterfly",
                        "house sparrow",
                        "sea anemone"
                      ]);
                  return (r = ((t = r),
                  (r = t = t.replace(/\b\w/g, function(e) {
                    return e.toUpperCase();
                  }))).replace(/ /g, "-"));
                }),
                (e.exportToJSON = function(e) {
                  return (
                    console.warn(
                      "VideoContext.exportToJSON has been deprecated. Please use VideoContext.snapshot instead."
                    ),
                    JSON.stringify(f(e))
                  );
                }),
                (e.snapshot = function(e) {
                  return { nodes: f(e), videoContext: d(e) };
                }),
                (e.createControlFormForNode = function(e, t) {
                  var r = document.createElement("div");
                  if (void 0 !== t) {
                    var o = document.createElement("h2");
                    (o.innerHTML = t), r.appendChild(o);
                  }
                  var n = function(t) {
                    var o = document.createElement("p"),
                      n = document.createElement("h3");
                    (n.innerHTML = t), o.appendChild(n);
                    var i = e._properties[t].value;
                    if ("number" == typeof i) {
                      var u = document.createElement("input");
                      u.setAttribute("type", "range"),
                        u.setAttribute("min", "0"),
                        u.setAttribute("max", "1"),
                        u.setAttribute("step", "0.01"),
                        u.setAttribute("value", i, toString());
                      var s = document.createElement("input");
                      s.setAttribute("type", "number"),
                        s.setAttribute("min", "0"),
                        s.setAttribute("max", "1"),
                        s.setAttribute("step", "0.01"),
                        s.setAttribute("value", i, toString());
                      var l = !1;
                      (u.onmousedown = function() {
                        l = !0;
                      }),
                        (u.onmouseup = function() {
                          l = !1;
                        }),
                        (u.onmousemove = function() {
                          l &&
                            ((e[t] = parseFloat(u.value)), (s.value = u.value));
                        }),
                        (u.onchange = function() {
                          (e[t] = parseFloat(u.value)), (s.value = u.value);
                        }),
                        (s.onchange = function() {
                          (e[t] = parseFloat(s.value)), (u.value = s.value);
                        }),
                        o.appendChild(u),
                        o.appendChild(s);
                    } else if (
                      "[object Array]" === Object.prototype.toString.call(i)
                    ) {
                      var c = function() {
                        var r = document.createElement("input");
                        r.setAttribute("type", "range"),
                          r.setAttribute("min", "0"),
                          r.setAttribute("max", "1"),
                          r.setAttribute("step", "0.01"),
                          r.setAttribute("value", i[a], toString());
                        var n = document.createElement("input");
                        n.setAttribute("type", "number"),
                          n.setAttribute("min", "0"),
                          n.setAttribute("max", "1"),
                          n.setAttribute("step", "0.01"),
                          n.setAttribute("value", i, toString());
                        var u = a,
                          s = !1;
                        (r.onmousedown = function() {
                          s = !0;
                        }),
                          (r.onmouseup = function() {
                            s = !1;
                          }),
                          (r.onmousemove = function() {
                            s &&
                              ((e[t][u] = parseFloat(r.value)),
                              (n.value = r.value));
                          }),
                          (r.onchange = function() {
                            (e[t][u] = parseFloat(r.value)),
                              (n.value = r.value);
                          }),
                          (n.onchange = function() {
                            (e[t][u] = parseFloat(n.value)),
                              (r.value = n.value);
                          }),
                          o.appendChild(r),
                          o.appendChild(n);
                      };
                      for (a = 0; a < i.length; a++) c();
                    }
                    r.appendChild(o);
                  };
                  for (var i in e._properties) {
                    var a;
                    n(i);
                  }
                  return r;
                }),
                (e.visualiseVideoContextGraph = function(e, t) {
                  var r = t.getContext("2d"),
                    u = t.width,
                    l = t.height;
                  r.clearRect(0, 0, u, l);
                  var c = (function(e) {
                      var t = e.destination,
                        r = new Map();
                      return (
                        r.set(t, 0),
                        (function e(t) {
                          var o =
                              arguments.length > 1 && void 0 !== arguments[1]
                                ? arguments[1]
                                : 0,
                            n = !0,
                            i = !1,
                            a = void 0;
                          try {
                            for (
                              var u, s = t.inputs[Symbol.iterator]();
                              !(n = (u = s.next()).done);
                              n = !0
                            ) {
                              var l = u.value,
                                c = o + 1;
                              r.has(l)
                                ? c > r.get(l) && r.set(l, c)
                                : r.set(l, c),
                                e(l, r.get(l));
                            }
                          } catch (e) {
                            (i = !0), (a = e);
                          } finally {
                            try {
                              !n && s.return && s.return();
                            } finally {
                              if (i) throw a;
                            }
                          }
                        })(t),
                        r
                      );
                    })(e),
                    _ = c.values(),
                    d = (_ = Array.from(_).sort(function(e, t) {
                      return t - e;
                    }))[0],
                    p = u / (d + 1),
                    f = l / e._sourceNodes.length / 3,
                    v = 1.618 * f;
                  function h(e, t, r, o) {
                    var n = t.get(e);
                    t.values();
                    var i = 0,
                      a = !0,
                      u = !1,
                      s = void 0;
                    try {
                      for (
                        var l, c = t[Symbol.iterator]();
                        !(a = (l = c.next()).done);
                        a = !0
                      ) {
                        var _ = l.value;
                        if (_[0] === e) break;
                        _[1] === n && (i += 1);
                      }
                    } catch (e) {
                      (u = !0), (s = e);
                    } finally {
                      try {
                        !a && c.return && c.return();
                      } finally {
                        if (u) throw s;
                      }
                    }
                    return { x: r * t.get(e), y: 1.5 * o * i + 50 };
                  }
                  for (var m = 0; m < e._renderGraph.connections.length; m++) {
                    var y = e._renderGraph.connections[m],
                      g = h(y.source, c, p, f),
                      b = h(y.destination, c, p, f);
                    if (void 0 !== g && void 0 !== b) {
                      r.beginPath();
                      var x = g.x + v / 2,
                        T = g.y + f / 2,
                        C = b.x + v / 2,
                        E = b.y + f / 2,
                        O = C - x,
                        S = E - T,
                        A = Math.PI / 2 - Math.atan2(O, S),
                        P = Math.sqrt(Math.pow(x - C, 2) + Math.pow(T - E, 2)),
                        w =
                          Math.min(x, C) +
                          (Math.max(x, C) - Math.min(x, C)) / 2,
                        k =
                          Math.min(T, E) +
                          (Math.max(T, E) - Math.min(T, E)) / 2,
                        N = (Math.cos(A + Math.PI / 2) * P) / 1.5 + w,
                        R = (Math.sin(A + Math.PI / 2) * P) / 1.5 + k;
                      r.arc(N, R, P / 1.2, A - Math.PI + 0.95, A - 0.95),
                        r.stroke();
                    }
                  }
                  var D = !0,
                    F = !1,
                    U = void 0;
                  try {
                    for (
                      var j, M = c.keys()[Symbol.iterator]();
                      !(D = (j = M.next()).done);
                      D = !0
                    ) {
                      var I = j.value,
                        L = h(I, c, p, f),
                        G = "#AA9639",
                        V = "";
                      I.displayName === s.COMPOSITINGTYPE && (G = "#000000"),
                        I.displayName === a.DESTINATIONTYPE &&
                          ((G = "#7D9F35"), (V = "Output")),
                        I.displayName === o.VIDEOTYPE &&
                          ((G = "#572A72"), (V = "Video")),
                        I.displayName === n.CANVASTYPE &&
                          ((G = "#572A72"), (V = "Canvas")),
                        I.displayName === i.IMAGETYPE &&
                          ((G = "#572A72"), (V = "Image")),
                        r.beginPath(),
                        (r.fillStyle = G),
                        r.fillRect(L.x, L.y, v, f),
                        r.fill(),
                        (r.fillStyle = "#000"),
                        (r.textAlign = "center"),
                        (r.font = "10px Arial"),
                        r.fillText(V, L.x + v / 2, L.y + f / 2 + 2.5),
                        r.fill();
                    }
                  } catch (e) {
                    (F = !0), (U = e);
                  } finally {
                    try {
                      !D && M.return && M.return();
                    } finally {
                      if (F) throw U;
                    }
                  }
                }),
                (e.createSigmaGraphDataFromRenderGraph = function(e) {
                  function t(t) {
                    return -1 !== e._sourceNodes.indexOf(t)
                      ? "source " +
                          t.displayName +
                          " " +
                          e._sourceNodes.indexOf(t)
                      : "processor " +
                          t.displayName +
                          " " +
                          e._processingNodes.indexOf(t);
                  }
                  for (
                    var r = {
                        nodes: [
                          {
                            id: t(e.destination),
                            label: "Destination Node",
                            x: 2.5,
                            y: 0.5,
                            size: 2,
                            node: e.destination
                          }
                        ],
                        edges: []
                      },
                      o = 0;
                    o < e._sourceNodes.length;
                    o++
                  ) {
                    var n = e._sourceNodes[o],
                      i = o * (1 / e._sourceNodes.length);
                    r.nodes.push({
                      id: t(n),
                      label: "Source " + o.toString(),
                      x: 0,
                      y: i,
                      size: 2,
                      color: "#572A72",
                      node: n
                    });
                  }
                  for (var a = 0; a < e._processingNodes.length; a++) {
                    var u = e._processingNodes[a];
                    r.nodes.push({
                      id: t(u),
                      x: 2.5 * Math.random(),
                      y: Math.random(),
                      size: 2,
                      node: u
                    });
                  }
                  for (var s = 0; s < e._renderGraph.connections.length; s++) {
                    var l = e._renderGraph.connections[s];
                    r.edges.push({
                      id: "e" + s.toString(),
                      source: t(l.source),
                      target: t(l.destination)
                    });
                  }
                  return r;
                }),
                (e.importSimpleEDL = function(e, t) {
                  var r = e.compositor(c.default.COMBINE),
                    o = !0,
                    n = !1,
                    i = void 0;
                  try {
                    for (
                      var a, u = t[Symbol.iterator]();
                      !(o = (a = u.next()).done);
                      o = !0
                    ) {
                      var s = a.value,
                        l = void 0;
                      if ("video" === s.type) l = e.video(s.src, s.sourceStart);
                      else {
                        if ("image" !== s.type) {
                          console.debug(
                            "Clip type " + s.type + " not recognised, skipping."
                          );
                          continue;
                        }
                        l = e.image(s.src, s.sourceStart);
                      }
                      l.startAt(s.start),
                        l.stopAt(s.start + s.duration),
                        l.connect(r);
                    }
                  } catch (e) {
                    (n = !0), (i = e);
                  } finally {
                    try {
                      !o && u.return && u.return();
                    } finally {
                      if (n) throw i;
                    }
                  }
                  return r;
                }),
                (e.visualiseVideoContextTimeline = function(e, t, r) {
                  var o = t.getContext("2d"),
                    n = t.width,
                    i = t.height,
                    a = i / e._sourceNodes.length,
                    s = e.duration;
                  if (
                    (r > s && !e.endOnLastSourceEnd && (s = r),
                    e.duration === 1 / 0)
                  ) {
                    for (var l = 0, c = 0; c < e._sourceNodes.length; c++) {
                      var _ = e._sourceNodes[c];
                      _._stopTime !== 1 / 0 && (l += _._stopTime);
                    }
                    s = l > e.currentTime ? l + 5 : e.currentTime + 5;
                  }
                  var d = n / s,
                    p = {
                      video: ["#572A72", "#3C1255"],
                      image: ["#7D9F35", "#577714"],
                      canvas: ["#AA9639", "#806D15"]
                    };
                  o.clearRect(0, 0, n, i), (o.fillStyle = "#999");
                  var f = !0,
                    v = !1,
                    h = void 0;
                  try {
                    for (
                      var m, y = e._processingNodes[Symbol.iterator]();
                      !(f = (m = y.next()).done);
                      f = !0
                    ) {
                      var g = m.value;
                      if (g.displayName === u.TRANSITIONTYPE)
                        for (var b in g._transitions) {
                          var x = !0,
                            T = !1,
                            C = void 0;
                          try {
                            for (
                              var E, O = g._transitions[b][Symbol.iterator]();
                              !(x = (E = O.next()).done);
                              x = !0
                            ) {
                              var S = E.value,
                                A = (S.end - S.start) * d,
                                P = i,
                                w = S.start * d;
                              (o.fillStyle = "rgba(0,0,0, 0.3)"),
                                o.fillRect(w, 0, A, P),
                                o.fill();
                            }
                          } catch (e) {
                            (T = !0), (C = e);
                          } finally {
                            try {
                              !x && O.return && O.return();
                            } finally {
                              if (T) throw C;
                            }
                          }
                        }
                    }
                  } catch (e) {
                    (v = !0), (h = e);
                  } finally {
                    try {
                      !f && y.return && y.return();
                    } finally {
                      if (v) throw h;
                    }
                  }
                  for (var k = 0; k < e._sourceNodes.length; k++) {
                    var N = e._sourceNodes[k],
                      R = N._stopTime - N._startTime;
                    R === 1 / 0 && (R = e.currentTime);
                    var D = N._startTime,
                      F = R * d,
                      U = a,
                      j = D * d,
                      M = a * k;
                    (o.fillStyle = p.video[k % p.video.length]),
                      o.fillRect(j, M, F, U),
                      o.fill();
                  }
                  void 0 !== r &&
                    ((o.fillStyle = "#000"), o.fillRect(r * d, 0, 1, i));
                }),
                (e.mediaElementHasSource = function(e) {
                  var t = e.src,
                    r = e.srcObject;
                  return !(("" === t || void 0 === t) && null == r);
                });
              var l,
                c = (l = t) && l.__esModule ? l : { default: l },
                _ = (function() {
                  function e(e, t) {
                    for (var r = 0; r < t.length; r++) {
                      var o = t[r];
                      (o.enumerable = o.enumerable || !1),
                        (o.configurable = !0),
                        "value" in o && (o.writable = !0),
                        Object.defineProperty(e, o.key, o);
                    }
                  }
                  return function(t, r, o) {
                    return r && e(t.prototype, r), o && e(t, o), t;
                  };
                })();
              function d(e) {
                return {
                  currentTime: e.currentTime,
                  duration: e.duration,
                  state: e.state,
                  playbackRate: e.playbackRate
                };
              }
              var p = !1;
              function f(e) {
                function t(e, t) {
                  var r = [],
                    o = !0,
                    n = !1,
                    i = void 0;
                  try {
                    for (
                      var a, u = e.inputs[Symbol.iterator]();
                      !(o = (a = u.next()).done);
                      o = !0
                    ) {
                      var s = a.value;
                      if (void 0 !== s) {
                        var l = void 0,
                          c = e.inputs.indexOf(s),
                          _ = t._processingNodes.indexOf(s);
                        if (_ > -1) l = "processor" + _;
                        else {
                          var d = t._sourceNodes.indexOf(s);
                          d > -1
                            ? (l = "source" + d)
                            : console.log("Warning, can't find input", s);
                        }
                        r.push({ id: l, index: c });
                      }
                    }
                  } catch (e) {
                    (n = !0), (i = e);
                  } finally {
                    try {
                      !o && u.return && u.return();
                    } finally {
                      if (n) throw i;
                    }
                  }
                  return r;
                }
                var n,
                  i,
                  a = {},
                  s = [];
                for (var l in r.SOURCENODESTATE) s[r.SOURCENODESTATE[l]] = l;
                for (var c in e._sourceNodes) {
                  var _ = e._sourceNodes[c],
                    d = "source" + c,
                    f = "";
                  _._isResponsibleForElementLifeCycle
                    ? ((n = _._elementURL),
                      (i = void 0),
                      ((i = document.createElement("a")).href = n),
                      (f = i.href))
                    : (p ||
                        (console.debug(
                          "Warning - Trying to export source created from an element not a URL. URL of export will be set to the elements src attribute and may be incorrect",
                          _
                        ),
                        (p = !0)),
                      (f = _.element.src));
                  var v = {
                    type: _.displayName,
                    url: f,
                    start: _.startTime,
                    stop: _.stopTime,
                    state: s[_.state]
                  };
                  v.type === o.VIDEOTYPE &&
                    ((v.currentTime = null),
                    _.element &&
                      _.element.currentTime &&
                      (v.currentTime = _.element.currentTime)),
                    _._sourceOffset && (v.sourceOffset = _._sourceOffset),
                    (a[d] = v);
                }
                for (var h in e._processingNodes) {
                  var m = e._processingNodes[h],
                    y = "processor" + h,
                    g = {
                      type: m.displayName,
                      definition: m._definition,
                      inputs: t(m, e),
                      properties: {}
                    };
                  for (var b in g.definition.properties) g.properties[b] = m[b];
                  g.type === u.TRANSITIONTYPE &&
                    (g.transitions = m._transitions),
                    (a[y] = g);
                }
                return (
                  (a.destination = {
                    type: "Destination",
                    inputs: t(e.destination, e)
                  }),
                  a
                );
              }
              e.UpdateablesManager = (function() {
                function e() {
                  !(function(e, t) {
                    if (!(e instanceof t))
                      throw new TypeError("Cannot call a class as a function");
                  })(this, e),
                    (this._updateables = []),
                    (this._useWebworker = !1),
                    (this._active = !1),
                    (this._previousRAFTime = void 0),
                    (this._previousWorkerTime = void 0),
                    (this._webWorkerString =
                      "            var running = false;            function tick(){                postMessage(Date.now());                if (running){                    setTimeout(tick, 1000/20);                }            }            self.addEventListener('message',function(msg){                var data = msg.data;                if (data === 'start'){                    running = true;                    tick();                }                if (data === 'stop') running = false;            });"),
                    (this._webWorker = void 0);
                }
                return (
                  _(e, [
                    {
                      key: "_initWebWorker",
                      value: function() {
                        var e = this;
                        window.URL = window.URL || window.webkitURL;
                        var t = new Blob([this._webWorkerString], {
                          type: "application/javascript"
                        });
                        (this._webWorker = new Worker(URL.createObjectURL(t))),
                          (this._webWorker.onmessage = function(t) {
                            var r = t.data;
                            e._updateWorkerTime(r);
                          });
                      }
                    },
                    {
                      key: "_lostVisibility",
                      value: function() {
                        (this._previousWorkerTime = Date.now()),
                          (this._useWebworker = !0),
                          this._webWorker || this._initWebWorker(),
                          this._webWorker.postMessage("start");
                      }
                    },
                    {
                      key: "_gainedVisibility",
                      value: function() {
                        (this._useWebworker = !1),
                          (this._previousRAFTime = void 0),
                          this._webWorker &&
                            this._webWorker.postMessage("stop"),
                          requestAnimationFrame(this._updateRAFTime.bind(this));
                      }
                    },
                    {
                      key: "_init",
                      value: function() {
                        var e = this;
                        if (window.Worker) {
                          if (void 0 === document.hidden)
                            return (
                              window.addEventListener(
                                "focus",
                                this._gainedVisibility.bind(this)
                              ),
                              void window.addEventListener(
                                "blur",
                                this._lostVisibility.bind(this)
                              )
                            );
                          document.addEventListener(
                            "visibilitychange",
                            function() {
                              !0 === document.hidden
                                ? e._lostVisibility()
                                : e._gainedVisibility();
                            },
                            !1
                          ),
                            requestAnimationFrame(
                              this._updateRAFTime.bind(this)
                            );
                        }
                      }
                    },
                    {
                      key: "_updateWorkerTime",
                      value: function(e) {
                        var t = (e - this._previousWorkerTime) / 1e3;
                        0 !== t && this._update(t),
                          (this._previousWorkerTime = e);
                      }
                    },
                    {
                      key: "_updateRAFTime",
                      value: function(e) {
                        void 0 === this._previousRAFTime &&
                          (this._previousRAFTime = e);
                        var t = (e - this._previousRAFTime) / 1e3;
                        0 !== t && this._update(t),
                          (this._previousRAFTime = e),
                          this._useWebworker ||
                            requestAnimationFrame(
                              this._updateRAFTime.bind(this)
                            );
                      }
                    },
                    {
                      key: "_update",
                      value: function(e) {
                        for (var t = 0; t < this._updateables.length; t++)
                          this._updateables[t]._update(parseFloat(e));
                      }
                    },
                    {
                      key: "register",
                      value: function(e) {
                        this._updateables.push(e),
                          !1 === this._active &&
                            ((this._active = !0), this._init());
                      }
                    }
                  ]),
                  e
                );
              })();
            })
              ? o.apply(t, n)
              : o) || (e.exports = i);
    },
    function(e, t, r) {
      var o, n, i;
      (n = [t, r(0), r(4)]),
        void 0 ===
          (i =
            "function" ==
            typeof (o = function(e, t, r) {
              "use strict";
              Object.defineProperty(e, "__esModule", { value: !0 }),
                (e.SOURCETYPE = e.SOURCENODESTATE = void 0);
              var o,
                n = (o = r) && o.__esModule ? o : { default: o },
                i = (function() {
                  function e(e, t) {
                    for (var r = 0; r < t.length; r++) {
                      var o = t[r];
                      (o.enumerable = o.enumerable || !1),
                        (o.configurable = !0),
                        "value" in o && (o.writable = !0),
                        Object.defineProperty(e, o.key, o);
                    }
                  }
                  return function(t, r, o) {
                    return r && e(t.prototype, r), o && e(t, o), t;
                  };
                })(),
                a = {
                  waiting: 0,
                  sequenced: 1,
                  playing: 2,
                  paused: 3,
                  ended: 4,
                  error: 5
                },
                u = "SourceNode",
                s = (function(e) {
                  function r(e, o, n, i) {
                    !(function(e, t) {
                      if (!(e instanceof t))
                        throw new TypeError(
                          "Cannot call a class as a function"
                        );
                    })(this, r);
                    var s = (function(e, t) {
                      if (!e)
                        throw new ReferenceError(
                          "this hasn't been initialised - super() hasn't been called"
                        );
                      return !t ||
                        ("object" != typeof t && "function" != typeof t)
                        ? e
                        : t;
                    })(
                      this,
                      (r.__proto__ || Object.getPrototypeOf(r)).call(
                        this,
                        o,
                        n,
                        [],
                        !0
                      )
                    );
                    return (
                      (s._element = void 0),
                      (s._elementURL = void 0),
                      (s._isResponsibleForElementLifeCycle = !0),
                      "string" == typeof e ||
                      (void 0 !== window.MediaStream &&
                        e instanceof MediaStream)
                        ? (s._elementURL = e)
                        : ((s._element = e),
                          (s._isResponsibleForElementLifeCycle = !1)),
                      (s._state = a.waiting),
                      (s._currentTime = i),
                      (s._startTime = NaN),
                      (s._stopTime = 1 / 0),
                      (s._ready = !1),
                      (s._loadCalled = !1),
                      (s._stretchPaused = !1),
                      (s._texture = (0, t.createElementTexture)(o)),
                      o.texImage2D(
                        o.TEXTURE_2D,
                        0,
                        o.RGBA,
                        1,
                        1,
                        0,
                        o.RGBA,
                        o.UNSIGNED_BYTE,
                        new Uint8Array([0, 0, 0, 0])
                      ),
                      (s._callbacks = []),
                      (s._renderPaused = !1),
                      (s._displayName = u),
                      s
                    );
                  }
                  return (
                    (function(e, t) {
                      if ("function" != typeof t && null !== t)
                        throw new TypeError(
                          "Super expression must either be null or a function, not " +
                            typeof t
                        );
                      (e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                          value: e,
                          enumerable: !1,
                          writable: !0,
                          configurable: !0
                        }
                      })),
                        t &&
                          (Object.setPrototypeOf
                            ? Object.setPrototypeOf(e, t)
                            : (e.__proto__ = t));
                    })(r, e),
                    i(r, [
                      {
                        key: "_load",
                        value: function() {
                          this._loadCalled ||
                            (this._triggerCallbacks("load"),
                            (this._loadCalled = !0));
                        }
                      },
                      {
                        key: "_unload",
                        value: function() {
                          this._triggerCallbacks("destroy"),
                            (this._loadCalled = !1);
                        }
                      },
                      {
                        key: "registerCallback",
                        value: function(e, t) {
                          this._callbacks.push({ type: e, func: t });
                        }
                      },
                      {
                        key: "unregisterCallback",
                        value: function(e) {
                          var t = [],
                            r = !0,
                            o = !1,
                            n = void 0;
                          try {
                            for (
                              var i, a = this._callbacks[Symbol.iterator]();
                              !(r = (i = a.next()).done);
                              r = !0
                            ) {
                              var u = i.value;
                              void 0 === e
                                ? t.push(u)
                                : u.func === e && t.push(u);
                            }
                          } catch (e) {
                            (o = !0), (n = e);
                          } finally {
                            try {
                              !r && a.return && a.return();
                            } finally {
                              if (o) throw n;
                            }
                          }
                          var s = !0,
                            l = !1,
                            c = void 0;
                          try {
                            for (
                              var _, d = t[Symbol.iterator]();
                              !(s = (_ = d.next()).done);
                              s = !0
                            ) {
                              var p = _.value,
                                f = this._callbacks.indexOf(p);
                              this._callbacks.splice(f, 1);
                            }
                          } catch (e) {
                            (l = !0), (c = e);
                          } finally {
                            try {
                              !s && d.return && d.return();
                            } finally {
                              if (l) throw c;
                            }
                          }
                        }
                      },
                      {
                        key: "_triggerCallbacks",
                        value: function(e, t) {
                          var r = !0,
                            o = !1,
                            n = void 0;
                          try {
                            for (
                              var i, a = this._callbacks[Symbol.iterator]();
                              !(r = (i = a.next()).done);
                              r = !0
                            ) {
                              var u = i.value;
                              u.type === e &&
                                (void 0 !== t ? u.func(this, t) : u.func(this));
                            }
                          } catch (e) {
                            (o = !0), (n = e);
                          } finally {
                            try {
                              !r && a.return && a.return();
                            } finally {
                              if (o) throw n;
                            }
                          }
                        }
                      },
                      {
                        key: "start",
                        value: function(e) {
                          return this._state !== a.waiting
                            ? (console.debug(
                                "SourceNode is has already been sequenced. Can't sequence twice."
                              ),
                              !1)
                            : ((this._startTime = this._currentTime + e),
                              (this._state = a.sequenced),
                              !0);
                        }
                      },
                      {
                        key: "startAt",
                        value: function(e) {
                          return this._state !== a.waiting
                            ? (console.debug(
                                "SourceNode is has already been sequenced. Can't sequence twice."
                              ),
                              !1)
                            : ((this._startTime = e),
                              (this._state = a.sequenced),
                              !0);
                        }
                      },
                      {
                        key: "stop",
                        value: function(e) {
                          return this._state === a.ended
                            ? (console.debug(
                                "SourceNode has already ended. Cannot call stop."
                              ),
                              !1)
                            : this._state === a.waiting
                            ? (console.debug(
                                "SourceNode must have start called before stop is called"
                              ),
                              !1)
                            : this._currentTime + e <= this._startTime
                            ? (console.debug(
                                "SourceNode must have a stop time after it's start time, not before."
                              ),
                              !1)
                            : ((this._stopTime = this._currentTime + e),
                              (this._stretchPaused = !1),
                              this._triggerCallbacks(
                                "durationchange",
                                this.duration
                              ),
                              !0);
                        }
                      },
                      {
                        key: "stopAt",
                        value: function(e) {
                          return this._state === a.ended
                            ? (console.debug(
                                "SourceNode has already ended. Cannot call stop."
                              ),
                              !1)
                            : this._state === a.waiting
                            ? (console.debug(
                                "SourceNode must have start called before stop is called"
                              ),
                              !1)
                            : e <= this._startTime
                            ? (console.debug(
                                "SourceNode must have a stop time after it's start time, not before."
                              ),
                              !1)
                            : ((this._stopTime = e),
                              (this._stretchPaused = !1),
                              this._triggerCallbacks(
                                "durationchange",
                                this.duration
                              ),
                              !0);
                        }
                      },
                      {
                        key: "_seek",
                        value: function(e) {
                          (this._renderPaused = !1),
                            this._triggerCallbacks("seek", e),
                            this._state !== a.waiting &&
                              (e < this._startTime &&
                                ((0, t.clearTexture)(this._gl, this._texture),
                                (this._state = a.sequenced)),
                              e >= this._startTime &&
                                this._state !== a.paused &&
                                (this._state = a.playing),
                              e >= this._stopTime &&
                                ((0, t.clearTexture)(this._gl, this._texture),
                                this._triggerCallbacks("ended"),
                                (this._state = a.ended)),
                              (this._currentTime = e));
                        }
                      },
                      {
                        key: "_pause",
                        value: function() {
                          (this._state === a.playing ||
                            (0 === this._currentTime &&
                              0 === this._startTime)) &&
                            (this._triggerCallbacks("pause"),
                            (this._state = a.paused),
                            (this._renderPaused = !1));
                        }
                      },
                      {
                        key: "_play",
                        value: function() {
                          this._state === a.paused &&
                            (this._triggerCallbacks("play"),
                            (this._state = a.playing));
                        }
                      },
                      {
                        key: "_isReady",
                        value: function() {
                          return (
                            !this._buffering &&
                            ((this._state !== a.playing &&
                              this._state !== a.paused &&
                              this._state !== a.error) ||
                              this._ready)
                          );
                        }
                      },
                      {
                        key: "_update",
                        value: function(e) {
                          var r =
                            !(
                              arguments.length > 1 && void 0 !== arguments[1]
                            ) || arguments[1];
                          this._rendered = !0;
                          var o = e - this._currentTime;
                          return (
                            (this._currentTime = e),
                            this._state !== a.waiting &&
                              this._state !== a.ended &&
                              this._state !== a.error &&
                              (this._triggerCallbacks("render", e),
                              e < this._startTime &&
                                ((0, t.clearTexture)(this._gl, this._texture),
                                (this._state = a.sequenced)),
                              e >= this._startTime &&
                                this._state !== a.paused &&
                                this._state !== a.error &&
                                (this._state !== a.playing &&
                                  this._triggerCallbacks("play"),
                                (this._state = a.playing)),
                              e >= this._stopTime &&
                                ((0, t.clearTexture)(this._gl, this._texture),
                                this._triggerCallbacks("ended"),
                                (this._state = a.ended)),
                              void 0 === this._element ||
                                !1 === this._ready ||
                                (this._renderPaused ||
                                  this._state !== a.paused ||
                                  (r &&
                                    (0, t.updateTexture)(
                                      this._gl,
                                      this._texture,
                                      this._element
                                    ),
                                  (this._renderPaused = !0)),
                                this._state === a.playing &&
                                  (r &&
                                    (0, t.updateTexture)(
                                      this._gl,
                                      this._texture,
                                      this._element
                                    ),
                                  this._stretchPaused && (this._stopTime += o)),
                                !0))
                          );
                        }
                      },
                      {
                        key: "clearTimelineState",
                        value: function() {
                          (this._startTime = NaN),
                            (this._stopTime = 1 / 0),
                            (this._state = a.waiting);
                        }
                      },
                      {
                        key: "destroy",
                        value: function() {
                          this._unload(),
                            (function e(t, r, o) {
                              null === t && (t = Function.prototype);
                              var n = Object.getOwnPropertyDescriptor(t, r);
                              if (void 0 === n) {
                                var i = Object.getPrototypeOf(t);
                                return null === i ? void 0 : e(i, r, o);
                              }
                              if ("value" in n) return n.value;
                              var a = n.get;
                              return void 0 !== a ? a.call(o) : void 0;
                            })(
                              r.prototype.__proto__ ||
                                Object.getPrototypeOf(r.prototype),
                              "destroy",
                              this
                            ).call(this),
                            this.unregisterCallback(),
                            delete this._element,
                            (this._elementURL = void 0),
                            (this._state = a.waiting),
                            (this._currentTime = 0),
                            (this._startTime = NaN),
                            (this._stopTime = 1 / 0),
                            (this._ready = !1),
                            (this._loadCalled = !1),
                            this._gl.deleteTexture(this._texture),
                            (this._texture = void 0);
                        }
                      },
                      {
                        key: "state",
                        get: function() {
                          return this._state;
                        }
                      },
                      {
                        key: "element",
                        get: function() {
                          return this._element;
                        }
                      },
                      {
                        key: "duration",
                        get: function() {
                          if (!isNaN(this._startTime))
                            return this._stopTime === 1 / 0
                              ? 1 / 0
                              : this._stopTime - this._startTime;
                        }
                      },
                      {
                        key: "stretchPaused",
                        set: function(e) {
                          this._stretchPaused = e;
                        },
                        get: function() {
                          return this._stretchPaused;
                        }
                      },
                      {
                        key: "startTime",
                        get: function() {
                          return this._startTime;
                        }
                      },
                      {
                        key: "stopTime",
                        get: function() {
                          return this._stopTime;
                        }
                      }
                    ]),
                    r
                  );
                })(n.default);
              (e.SOURCENODESTATE = a), (e.SOURCETYPE = u), (e.default = s);
            })
              ? o.apply(t, n)
              : o) || (e.exports = i);
    },
    function(e, t, r) {
      var o, n, i;
      (n = [t, r(4), r(0), r(10)]),
        void 0 ===
          (i =
            "function" ==
            typeof (o = function(e, t, r, o) {
              "use strict";
              Object.defineProperty(e, "__esModule", { value: !0 }),
                (e.PROCESSINGTYPE = void 0);
              var n,
                i = (n = t) && n.__esModule ? n : { default: n },
                a = (function() {
                  function e(e, t) {
                    for (var r = 0; r < t.length; r++) {
                      var o = t[r];
                      (o.enumerable = o.enumerable || !1),
                        (o.configurable = !0),
                        "value" in o && (o.writable = !0),
                        Object.defineProperty(e, o.key, o);
                    }
                  }
                  return function(t, r, o) {
                    return r && e(t.prototype, r), o && e(t, o), t;
                  };
                })(),
                u = "ProcessingNode",
                s = (function(e) {
                  function t(e, n, i, a, s) {
                    !(function(e, t) {
                      if (!(e instanceof t))
                        throw new TypeError(
                          "Cannot call a class as a function"
                        );
                    })(this, t);
                    var l = (function(e, t) {
                      if (!e)
                        throw new ReferenceError(
                          "this hasn't been initialised - super() hasn't been called"
                        );
                      return !t ||
                        ("object" != typeof t && "function" != typeof t)
                        ? e
                        : t;
                    })(
                      this,
                      (t.__proto__ || Object.getPrototypeOf(t)).call(
                        this,
                        e,
                        n,
                        a,
                        s
                      )
                    );
                    for (var c in ((l._vertexShader = (0, r.compileShader)(
                      e,
                      i.vertexShader,
                      e.VERTEX_SHADER
                    )),
                    (l._fragmentShader = (0, r.compileShader)(
                      e,
                      i.fragmentShader,
                      e.FRAGMENT_SHADER
                    )),
                    (l._definition = i),
                    (l._properties = {}),
                    i.properties)) {
                      var _ = i.properties[c].value;
                      "[object Array]" === Object.prototype.toString.call(_) &&
                        (_ = i.properties[c].value.slice());
                      var d = i.properties[c].type;
                      l._properties[c] = { type: d, value: _ };
                    }
                    (l._inputTextureUnitMapping = []),
                      (l._maxTextureUnits = e.getParameter(
                        e.MAX_TEXTURE_IMAGE_UNITS
                      )),
                      (l._boundTextureUnits = 0),
                      (l._parameterTextureCount = 0),
                      (l._inputTextureCount = 0),
                      (l._texture = (0, r.createElementTexture)(e)),
                      e.texImage2D(
                        e.TEXTURE_2D,
                        0,
                        e.RGBA,
                        e.canvas.width,
                        e.canvas.height,
                        0,
                        e.RGBA,
                        e.UNSIGNED_BYTE,
                        null
                      ),
                      (l._program = (0, r.createShaderProgram)(
                        e,
                        l._vertexShader,
                        l._fragmentShader
                      )),
                      (l._framebuffer = e.createFramebuffer()),
                      e.bindFramebuffer(e.FRAMEBUFFER, l._framebuffer),
                      e.framebufferTexture2D(
                        e.FRAMEBUFFER,
                        e.COLOR_ATTACHMENT0,
                        e.TEXTURE_2D,
                        l._texture,
                        0
                      ),
                      e.bindFramebuffer(e.FRAMEBUFFER, null);
                    var p = function(e) {
                      Object.defineProperty(l, e, {
                        get: function() {
                          return this._properties[e].value;
                        },
                        set: function(t) {
                          this._properties[e].value = t;
                        }
                      });
                    };
                    for (var f in l._properties) p(f);
                    for (var v in l._properties)
                      if (
                        l._properties[v].value instanceof Image &&
                        ((l._properties[v].texture = (0,
                        r.createElementTexture)(e)),
                        (l._properties[v].texutreUnit =
                          e.TEXTURE0 + l._boundTextureUnits),
                        (l._boundTextureUnits += 1),
                        (l._parameterTextureCount += 1),
                        l._boundTextureUnits > l._maxTextureUnits)
                      )
                        throw new o.RenderException(
                          "Trying to bind more than available textures units to shader"
                        );
                    var h = !0,
                      m = !1,
                      y = void 0;
                    try {
                      for (
                        var g, b = i.inputs[Symbol.iterator]();
                        !(h = (g = b.next()).done);
                        h = !0
                      ) {
                        var x = g.value;
                        if (
                          (l._inputTextureUnitMapping.push({
                            name: x,
                            textureUnit: e.TEXTURE0 + l._boundTextureUnits
                          }),
                          (l._boundTextureUnits += 1),
                          (l._inputTextureCount += 1),
                          l._boundTextureUnits > l._maxTextureUnits)
                        )
                          throw new o.RenderException(
                            "Trying to bind more than available textures units to shader"
                          );
                      }
                    } catch (e) {
                      (m = !0), (y = e);
                    } finally {
                      try {
                        !h && b.return && b.return();
                      } finally {
                        if (m) throw y;
                      }
                    }
                    for (var T in l._properties)
                      "uniform" === l._properties[T].type &&
                        (l._properties[T].location = l._gl.getUniformLocation(
                          l._program,
                          T
                        ));
                    (l._currentTimeLocation = l._gl.getUniformLocation(
                      l._program,
                      "currentTime"
                    )),
                      (l._currentTime = 0);
                    var C = e.getAttribLocation(l._program, "a_position"),
                      E = e.createBuffer();
                    e.bindBuffer(e.ARRAY_BUFFER, E),
                      e.enableVertexAttribArray(C),
                      e.vertexAttribPointer(C, 2, e.FLOAT, !1, 0, 0),
                      e.bufferData(
                        e.ARRAY_BUFFER,
                        new Float32Array([1, 1, 0, 1, 1, 0, 1, 0, 0, 1, 0, 0]),
                        e.STATIC_DRAW
                      );
                    var O = e.getAttribLocation(l._program, "a_texCoord");
                    return (
                      e.enableVertexAttribArray(O),
                      e.vertexAttribPointer(O, 2, e.FLOAT, !1, 0, 0),
                      (l._displayName = u),
                      l
                    );
                  }
                  return (
                    (function(e, t) {
                      if ("function" != typeof t && null !== t)
                        throw new TypeError(
                          "Super expression must either be null or a function, not " +
                            typeof t
                        );
                      (e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                          value: e,
                          enumerable: !1,
                          writable: !0,
                          configurable: !0
                        }
                      })),
                        t &&
                          (Object.setPrototypeOf
                            ? Object.setPrototypeOf(e, t)
                            : (e.__proto__ = t));
                    })(t, e),
                    a(t, [
                      {
                        key: "setProperty",
                        value: function(e, t) {
                          this._properties[e].value = t;
                        }
                      },
                      {
                        key: "getProperty",
                        value: function(e) {
                          return this._properties[e].value;
                        }
                      },
                      {
                        key: "destroy",
                        value: function() {
                          for (var e in ((function e(t, r, o) {
                            null === t && (t = Function.prototype);
                            var n = Object.getOwnPropertyDescriptor(t, r);
                            if (void 0 === n) {
                              var i = Object.getPrototypeOf(t);
                              return null === i ? void 0 : e(i, r, o);
                            }
                            if ("value" in n) return n.value;
                            var a = n.get;
                            return void 0 !== a ? a.call(o) : void 0;
                          })(
                            t.prototype.__proto__ ||
                              Object.getPrototypeOf(t.prototype),
                            "destroy",
                            this
                          ).call(this),
                          this._properties))
                            this._properties[e].value instanceof Image &&
                              (this._gl.deleteTexture(
                                this._properties[e].texture
                              ),
                              (this._texture = void 0));
                          this._gl.deleteTexture(this._texture),
                            (this._texture = void 0),
                            this._gl.detachShader(
                              this._program,
                              this._vertexShader
                            ),
                            this._gl.detachShader(
                              this._program,
                              this._fragmentShader
                            ),
                            this._gl.deleteShader(this._vertexShader),
                            this._gl.deleteShader(this._fragmentShader),
                            this._gl.deleteProgram(this._program),
                            this._gl.deleteFramebuffer(this._framebuffer);
                        }
                      },
                      {
                        key: "_update",
                        value: function(e) {
                          this._currentTime = e;
                        }
                      },
                      {
                        key: "_seek",
                        value: function(e) {
                          this._currentTime = e;
                        }
                      },
                      {
                        key: "_render",
                        value: function() {
                          this._rendered = !0;
                          var e = this._gl;
                          e.viewport(0, 0, e.canvas.width, e.canvas.height),
                            e.useProgram(this._program),
                            e.uniform1f(
                              this._currentTimeLocation,
                              parseFloat(this._currentTime)
                            );
                          var t = 0;
                          for (var o in this._properties) {
                            var n = this._properties[o].value,
                              i = this._properties[o].type,
                              a = this._properties[o].location;
                            if ("uniform" === i)
                              if ("number" == typeof n) e.uniform1f(a, n);
                              else if (
                                "[object Array]" ===
                                Object.prototype.toString.call(n)
                              )
                                1 === n.length
                                  ? e.uniform1fv(a, n)
                                  : 2 === n.length
                                  ? e.uniform2fv(a, n)
                                  : 3 === n.length
                                  ? e.uniform3fv(a, n)
                                  : 4 === n.length
                                  ? e.uniform4fv(a, n)
                                  : console.debug(
                                      "Shader parameter",
                                      o,
                                      "is too long an array:",
                                      n
                                    );
                              else if (n instanceof Image) {
                                var u = this._properties[o].texture,
                                  s = this._properties[o].texutreUnit;
                                (0, r.updateTexture)(e, u, n),
                                  e.activeTexture(s),
                                  e.uniform1i(a, t),
                                  (t += 1),
                                  e.bindTexture(e.TEXTURE_2D, u);
                              }
                          }
                        }
                      }
                    ]),
                    t
                  );
                })(i.default);
              (e.PROCESSINGTYPE = u), (e.default = s);
            })
              ? o.apply(t, n)
              : o) || (e.exports = i);
    },
    function(e, t, r) {
      var o, n, i;
      (n = [
        t,
        r(15),
        r(18),
        r(21),
        r(24),
        r(27),
        r(30),
        r(33),
        r(36),
        r(39),
        r(42),
        r(45),
        r(48),
        r(51),
        r(54),
        r(57),
        r(60),
        r(63),
        r(66),
        r(69),
        r(72),
        r(75)
      ]),
        void 0 ===
          (i =
            "function" ==
            typeof (o = function(
              t,
              r,
              o,
              n,
              i,
              a,
              u,
              s,
              l,
              c,
              _,
              d,
              p,
              f,
              v,
              h,
              m,
              y,
              g,
              b,
              x,
              T
            ) {
              "use strict";
              Object.defineProperty(t, "__esModule", { value: !0 });
              var C = W(r),
                E = W(o),
                O = W(n),
                S = W(i),
                A = W(a),
                P = W(u),
                w = W(s),
                k = W(l),
                N = W(c),
                R = W(_),
                D = W(d),
                F = W(p),
                U = W(f),
                j = W(v),
                M = W(h),
                I = W(m),
                L = W(y),
                G = W(g),
                V = W(b),
                B = W(x),
                Y = W(T);
              function W(e) {
                return e && e.__esModule ? e : { default: e };
              }
              var X = {
                AAF_VIDEO_SCALE: C.default,
                CROSSFADE: E.default,
                DREAMFADE: V.default,
                HORIZONTAL_WIPE: O.default,
                VERTICAL_WIPE: S.default,
                RANDOM_DISSOLVE: A.default,
                STATIC_DISSOLVE: L.default,
                STATIC_EFFECT: G.default,
                TO_COLOR_AND_BACK: P.default,
                STAR_WIPE: w.default,
                COMBINE: k.default,
                COLORTHRESHOLD: N.default,
                MONOCHROME: R.default,
                HORIZONTAL_BLUR: D.default,
                VERTICAL_BLUR: F.default,
                AAF_VIDEO_CROP: I.default,
                AAF_VIDEO_POSITION: M.default,
                AAF_VIDEO_FLIP: j.default,
                AAF_VIDEO_FLOP: U.default,
                OPACITY: B.default,
                CROP: Y.default
              };
              (t.default = X), (e.exports = t.default);
            })
              ? o.apply(t, n)
              : o) || (e.exports = i);
    },
    function(e, t, r) {
      var o, n, i;
      (n = [t]),
        void 0 ===
          (i =
            "function" ==
            typeof (o = function(e) {
              "use strict";
              Object.defineProperty(e, "__esModule", { value: !0 });
              var t = (function() {
                  function e(e, t) {
                    for (var r = 0; r < t.length; r++) {
                      var o = t[r];
                      (o.enumerable = o.enumerable || !1),
                        (o.configurable = !0),
                        "value" in o && (o.writable = !0),
                        Object.defineProperty(e, o.key, o);
                    }
                  }
                  return function(t, r, o) {
                    return r && e(t.prototype, r), o && e(t, o), t;
                  };
                })(),
                r = "GraphNode",
                o = (function() {
                  function e(t, o, n) {
                    var i =
                      arguments.length > 3 &&
                      void 0 !== arguments[3] &&
                      arguments[3];
                    !(function(e, t) {
                      if (!(e instanceof t))
                        throw new TypeError(
                          "Cannot call a class as a function"
                        );
                    })(this, e),
                      (this._renderGraph = o),
                      (this._limitConnections = i),
                      (this._inputNames = n),
                      (this._destroyed = !1),
                      (this._gl = t),
                      (this._renderGraph = o),
                      (this._rendered = !1),
                      (this._displayName = r);
                  }
                  return (
                    t(e, [
                      {
                        key: "connect",
                        value: function(e, t) {
                          return this._renderGraph.registerConnection(
                            this,
                            e,
                            t
                          );
                        }
                      },
                      {
                        key: "disconnect",
                        value: function(e) {
                          var t = this;
                          if (void 0 === e) {
                            var r = this._renderGraph.getOutputsForNode(this);
                            return (
                              r.forEach(function(e) {
                                return t._renderGraph.unregisterConnection(
                                  t,
                                  e
                                );
                              }),
                              r.length > 0
                            );
                          }
                          return this._renderGraph.unregisterConnection(
                            this,
                            e
                          );
                        }
                      },
                      {
                        key: "destroy",
                        value: function() {
                          this.disconnect();
                          var e = !0,
                            t = !1,
                            r = void 0;
                          try {
                            for (
                              var o, n = this.inputs[Symbol.iterator]();
                              !(e = (o = n.next()).done);
                              e = !0
                            )
                              o.value.disconnect(this);
                          } catch (e) {
                            (t = !0), (r = e);
                          } finally {
                            try {
                              !e && n.return && n.return();
                            } finally {
                              if (t) throw r;
                            }
                          }
                          this._destroyed = !0;
                        }
                      },
                      {
                        key: "displayName",
                        get: function() {
                          return this._displayName;
                        }
                      },
                      {
                        key: "inputNames",
                        get: function() {
                          return this._inputNames.slice();
                        }
                      },
                      {
                        key: "maximumConnections",
                        get: function() {
                          return !1 === this._limitConnections
                            ? 1 / 0
                            : this._inputNames.length;
                        }
                      },
                      {
                        key: "inputs",
                        get: function() {
                          var e = this._renderGraph.getInputsForNode(this);
                          return (e = e.filter(function(e) {
                            return void 0 !== e;
                          }));
                        }
                      },
                      {
                        key: "outputs",
                        get: function() {
                          return this._renderGraph.getOutputsForNode(this);
                        }
                      },
                      {
                        key: "destroyed",
                        get: function() {
                          return this._destroyed;
                        }
                      }
                    ]),
                    e
                  );
                })();
              (e.GRAPHTYPE = r), (e.default = o);
            })
              ? o.apply(t, n)
              : o) || (e.exports = i);
    },
    function(e, t, r) {
      var o, n, i;
      (n = [t, r(6)]),
        void 0 ===
          (i =
            "function" ==
            typeof (o = function(e, t) {
              "use strict";
              Object.defineProperty(e, "__esModule", { value: !0 }),
                (e.VIDEOTYPE = void 0);
              var r,
                o = (r = t) && r.__esModule ? r : { default: r },
                n = "VideoNode",
                i = (function(e) {
                  function t() {
                    !(function(e, t) {
                      if (!(e instanceof t))
                        throw new TypeError(
                          "Cannot call a class as a function"
                        );
                    })(this, t);
                    var e = (function(e, t) {
                      if (!e)
                        throw new ReferenceError(
                          "this hasn't been initialised - super() hasn't been called"
                        );
                      return !t ||
                        ("object" != typeof t && "function" != typeof t)
                        ? e
                        : t;
                    })(
                      this,
                      (t.__proto__ || Object.getPrototypeOf(t)).apply(
                        this,
                        arguments
                      )
                    );
                    return (e._displayName = n), (e._elementType = "video"), e;
                  }
                  return (
                    (function(e, t) {
                      if ("function" != typeof t && null !== t)
                        throw new TypeError(
                          "Super expression must either be null or a function, not " +
                            typeof t
                        );
                      (e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                          value: e,
                          enumerable: !1,
                          writable: !0,
                          configurable: !0
                        }
                      })),
                        t &&
                          (Object.setPrototypeOf
                            ? Object.setPrototypeOf(e, t)
                            : (e.__proto__ = t));
                    })(t, e),
                    t
                  );
                })(o.default);
              (e.VIDEOTYPE = n), (e.default = i);
            })
              ? o.apply(t, n)
              : o) || (e.exports = i);
    },
    function(e, t, r) {
      var o, n, i;
      (n = [t, r(1)]),
        void 0 ===
          (i =
            "function" ==
            typeof (o = function(t, r) {
              "use strict";
              Object.defineProperty(t, "__esModule", { value: !0 });
              var o,
                n = (o = r) && o.__esModule ? o : { default: o },
                i = (function() {
                  function e(e, t) {
                    for (var r = 0; r < t.length; r++) {
                      var o = t[r];
                      (o.enumerable = o.enumerable || !1),
                        (o.configurable = !0),
                        "value" in o && (o.writable = !0),
                        Object.defineProperty(e, o.key, o);
                    }
                  }
                  return function(t, r, o) {
                    return r && e(t.prototype, r), o && e(t, o), t;
                  };
                })(),
                a = function e(t, r, o) {
                  null === t && (t = Function.prototype);
                  var n = Object.getOwnPropertyDescriptor(t, r);
                  if (void 0 === n) {
                    var i = Object.getPrototypeOf(t);
                    return null === i ? void 0 : e(i, r, o);
                  }
                  if ("value" in n) return n.value;
                  var a = n.get;
                  return void 0 !== a ? a.call(o) : void 0;
                },
                u = (function(e) {
                  function t(e, r, o, n) {
                    var i =
                        arguments.length > 4 && void 0 !== arguments[4]
                          ? arguments[4]
                          : 1,
                      a =
                        arguments.length > 5 && void 0 !== arguments[5]
                          ? arguments[5]
                          : 0,
                      u =
                        arguments.length > 6 && void 0 !== arguments[6]
                          ? arguments[6]
                          : 4,
                      s =
                        arguments.length > 7 && void 0 !== arguments[7]
                          ? arguments[7]
                          : void 0,
                      l =
                        arguments.length > 8 && void 0 !== arguments[8]
                          ? arguments[8]
                          : {};
                    !(function(e, t) {
                      if (!(e instanceof t))
                        throw new TypeError(
                          "Cannot call a class as a function"
                        );
                    })(this, t);
                    var c = (function(e, t) {
                      if (!e)
                        throw new ReferenceError(
                          "this hasn't been initialised - super() hasn't been called"
                        );
                      return !t ||
                        ("object" != typeof t && "function" != typeof t)
                        ? e
                        : t;
                    })(
                      this,
                      (t.__proto__ || Object.getPrototypeOf(t)).call(
                        this,
                        e,
                        r,
                        o,
                        n
                      )
                    );
                    return (
                      (c._preloadTime = u),
                      (c._sourceOffset = a),
                      (c._globalPlaybackRate = i),
                      (c._mediaElementCache = s),
                      (c._playbackRate = 1),
                      (c._playbackRateUpdated = !0),
                      (c._attributes = Object.assign({ volume: 1 }, l)),
                      (c._loopElement = !1),
                      (c._isElementPlaying = !1),
                      c._attributes.loop &&
                        (c._loopElement = c._attributes.loop),
                      c
                    );
                  }
                  return (
                    (function(e, t) {
                      if ("function" != typeof t && null !== t)
                        throw new TypeError(
                          "Super expression must either be null or a function, not " +
                            typeof t
                        );
                      (e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                          value: e,
                          enumerable: !1,
                          writable: !0,
                          configurable: !0
                        }
                      })),
                        t &&
                          (Object.setPrototypeOf
                            ? Object.setPrototypeOf(e, t)
                            : (e.__proto__ = t));
                    })(t, e),
                    i(t, [
                      {
                        key: "_triggerLoad",
                        value: function() {
                          var e = this;
                          if (
                            (this._isResponsibleForElementLifeCycle &&
                              (this._mediaElementCache
                                ? (this._element = this._mediaElementCache.get())
                                : ((this._element = document.createElement(
                                    this._elementType
                                  )),
                                  this._element.setAttribute(
                                    "crossorigin",
                                    "anonymous"
                                  ),
                                  this._element.setAttribute(
                                    "webkit-playsinline",
                                    ""
                                  ),
                                  this._element.setAttribute("playsinline", ""),
                                  (this._playbackRateUpdated = !0)),
                              (this._element.volume = this._attributes.volume),
                              void 0 !== window.MediaStream &&
                              this._elementURL instanceof MediaStream
                                ? (this._element.srcObject = this._elementURL)
                                : (this._element.src = this._elementURL)),
                            this._element)
                          ) {
                            for (var t in this._attributes)
                              this._element[t] = this._attributes[t];
                            var o = 0;
                            this._currentTime > this._startTime &&
                              (o = this._currentTime - this._startTime),
                              (this._element.currentTime =
                                this._sourceOffset + o),
                              (this._element.onerror = function() {
                                void 0 !== e._element &&
                                  (console.debug(
                                    "Error with element",
                                    e._element
                                  ),
                                  (e._state = r.SOURCENODESTATE.error),
                                  (e._ready = !0),
                                  e._triggerCallbacks("error"));
                              });
                          } else
                            (this._state = r.SOURCENODESTATE.error),
                              (this._ready = !0),
                              this._triggerCallbacks("error");
                          this._loadTriggered = !0;
                        }
                      },
                      {
                        key: "_load",
                        value: function() {
                          a(
                            t.prototype.__proto__ ||
                              Object.getPrototypeOf(t.prototype),
                            "_load",
                            this
                          ).call(this),
                            this._loadTriggered || this._triggerLoad(),
                            void 0 !== this._element &&
                              (this._element.readyState > 3 &&
                              !this._element.seeking
                                ? (!1 === this._loopElement &&
                                    ((this._stopTime !== 1 / 0 &&
                                      null != this._stopTime) ||
                                      ((this._stopTime =
                                        this._startTime +
                                        this._element.duration),
                                      this._triggerCallbacks(
                                        "durationchange",
                                        this.duration
                                      ))),
                                  !0 !== this._ready &&
                                    (this._triggerCallbacks("loaded"),
                                    (this._playbackRateUpdated = !0)),
                                  (this._ready = !0))
                                : this._state !== r.SOURCENODESTATE.error &&
                                  (this._ready = !1));
                        }
                      },
                      {
                        key: "_unload",
                        value: function() {
                          if (
                            (a(
                              t.prototype.__proto__ ||
                                Object.getPrototypeOf(t.prototype),
                              "_unload",
                              this
                            ).call(this),
                            this._isResponsibleForElementLifeCycle &&
                              void 0 !== this._element)
                          ) {
                            for (var e in (this._element.removeAttribute("src"),
                            (this._element.srcObject = void 0),
                            this._element.load(),
                            this._attributes))
                              this._element.removeAttribute(e);
                            (this._element = void 0),
                              this._mediaElementCache || delete this._element;
                          }
                          (this._ready = !1),
                            (this._isElementPlaying = !1),
                            (this._loadTriggered = !1);
                        }
                      },
                      {
                        key: "_seek",
                        value: function(e) {
                          if (
                            (a(
                              t.prototype.__proto__ ||
                                Object.getPrototypeOf(t.prototype),
                              "_seek",
                              this
                            ).call(this, e),
                            this.state === r.SOURCENODESTATE.playing ||
                              this.state === r.SOURCENODESTATE.paused)
                          ) {
                            void 0 === this._element && this._load();
                            var o =
                              this._currentTime -
                              this._startTime +
                              this._sourceOffset;
                            (this._element.currentTime = o), (this._ready = !1);
                          }
                          (this._state !== r.SOURCENODESTATE.sequenced &&
                            this._state !== r.SOURCENODESTATE.ended) ||
                            void 0 === this._element ||
                            this._unload();
                        }
                      },
                      {
                        key: "_update",
                        value: function(e) {
                          var o =
                            !(
                              arguments.length > 1 && void 0 !== arguments[1]
                            ) || arguments[1];
                          return (
                            a(
                              t.prototype.__proto__ ||
                                Object.getPrototypeOf(t.prototype),
                              "_update",
                              this
                            ).call(this, e, o),
                            void 0 !== this._element &&
                              this._element.ended &&
                              ((this._state = r.SOURCENODESTATE.ended),
                              this._triggerCallbacks("ended")),
                            this._startTime - this._currentTime <=
                              this._preloadTime &&
                              this._state !== r.SOURCENODESTATE.waiting &&
                              this._state !== r.SOURCENODESTATE.ended &&
                              this._load(),
                            this._state === r.SOURCENODESTATE.playing
                              ? (this._playbackRateUpdated &&
                                  ((this._element.playbackRate =
                                    this._globalPlaybackRate *
                                    this._playbackRate),
                                  (this._playbackRateUpdated = !1)),
                                this._isElementPlaying ||
                                  (this._element.play(),
                                  this._stretchPaused && this._element.pause(),
                                  (this._isElementPlaying = !0)),
                                !0)
                              : this._state === r.SOURCENODESTATE.paused
                              ? (this._element.pause(),
                                (this._isElementPlaying = !1),
                                !0)
                              : this._state === r.SOURCENODESTATE.ended &&
                                void 0 !== this._element
                              ? (this._element.pause(),
                                this._isElementPlaying && this._unload(),
                                !1)
                              : void 0
                          );
                        }
                      },
                      {
                        key: "clearTimelineState",
                        value: function() {
                          a(
                            t.prototype.__proto__ ||
                              Object.getPrototypeOf(t.prototype),
                            "clearTimelineState",
                            this
                          ).call(this),
                            void 0 !== this._element &&
                              (this._element.pause(),
                              (this._isElementPlaying = !1)),
                            this._unload();
                        }
                      },
                      {
                        key: "destroy",
                        value: function() {
                          this._element && this._element.pause(),
                            a(
                              t.prototype.__proto__ ||
                                Object.getPrototypeOf(t.prototype),
                              "destroy",
                              this
                            ).call(this);
                        }
                      },
                      {
                        key: "playbackRate",
                        set: function(e) {
                          (this._playbackRate = e),
                            (this._playbackRateUpdated = !0);
                        },
                        get: function() {
                          return this._playbackRate;
                        }
                      },
                      {
                        key: "stretchPaused",
                        set: function(e) {
                          !(function e(t, r, o, n) {
                            var i = Object.getOwnPropertyDescriptor(t, r);
                            if (void 0 === i) {
                              var a = Object.getPrototypeOf(t);
                              null !== a && e(a, r, o, n);
                            } else if ("value" in i && i.writable) i.value = o;
                            else {
                              var u = i.set;
                              void 0 !== u && u.call(n, o);
                            }
                            return o;
                          })(
                            t.prototype.__proto__ ||
                              Object.getPrototypeOf(t.prototype),
                            "stretchPaused",
                            e,
                            this
                          ),
                            this._element &&
                              (this._stretchPaused
                                ? this._element.pause()
                                : this._state === r.SOURCENODESTATE.playing &&
                                  this._element.play());
                        },
                        get: function() {
                          return this._stretchPaused;
                        }
                      },
                      {
                        key: "elementURL",
                        get: function() {
                          return this._elementURL;
                        }
                      },
                      {
                        key: "_buffering",
                        get: function() {
                          return (
                            !!this._element &&
                            this._element.readyState <
                              HTMLMediaElement.HAVE_FUTURE_DATA
                          );
                        }
                      },
                      {
                        key: "volume",
                        set: function(e) {
                          (this._attributes.volume = e),
                            void 0 !== this._element &&
                              (this._element.volume = this._attributes.volume);
                        }
                      }
                    ]),
                    t
                  );
                })(n.default);
              (t.default = u), (e.exports = t.default);
            })
              ? o.apply(t, n)
              : o) || (e.exports = i);
    },
    function(e, t, r) {
      var o, n, i;
      (n = [t, r(1)]),
        void 0 ===
          (i =
            "function" ==
            typeof (o = function(e, t) {
              "use strict";
              Object.defineProperty(e, "__esModule", { value: !0 }),
                (e.CANVASTYPE = void 0);
              var r,
                o = (r = t) && r.__esModule ? r : { default: r },
                n = (function() {
                  function e(e, t) {
                    for (var r = 0; r < t.length; r++) {
                      var o = t[r];
                      (o.enumerable = o.enumerable || !1),
                        (o.configurable = !0),
                        "value" in o && (o.writable = !0),
                        Object.defineProperty(e, o.key, o);
                    }
                  }
                  return function(t, r, o) {
                    return r && e(t.prototype, r), o && e(t, o), t;
                  };
                })(),
                i = function e(t, r, o) {
                  null === t && (t = Function.prototype);
                  var n = Object.getOwnPropertyDescriptor(t, r);
                  if (void 0 === n) {
                    var i = Object.getPrototypeOf(t);
                    return null === i ? void 0 : e(i, r, o);
                  }
                  if ("value" in n) return n.value;
                  var a = n.get;
                  return void 0 !== a ? a.call(o) : void 0;
                },
                a = "CanvasNode",
                u = (function(e) {
                  function r(e, t, o, n) {
                    var i =
                      arguments.length > 4 && void 0 !== arguments[4]
                        ? arguments[4]
                        : 4;
                    !(function(e, t) {
                      if (!(e instanceof t))
                        throw new TypeError(
                          "Cannot call a class as a function"
                        );
                    })(this, r);
                    var u = (function(e, t) {
                      if (!e)
                        throw new ReferenceError(
                          "this hasn't been initialised - super() hasn't been called"
                        );
                      return !t ||
                        ("object" != typeof t && "function" != typeof t)
                        ? e
                        : t;
                    })(
                      this,
                      (r.__proto__ || Object.getPrototypeOf(r)).call(
                        this,
                        e,
                        t,
                        o,
                        n
                      )
                    );
                    return (u._preloadTime = i), (u._displayName = a), u;
                  }
                  return (
                    (function(e, t) {
                      if ("function" != typeof t && null !== t)
                        throw new TypeError(
                          "Super expression must either be null or a function, not " +
                            typeof t
                        );
                      (e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                          value: e,
                          enumerable: !1,
                          writable: !0,
                          configurable: !0
                        }
                      })),
                        t &&
                          (Object.setPrototypeOf
                            ? Object.setPrototypeOf(e, t)
                            : (e.__proto__ = t));
                    })(r, e),
                    n(r, [
                      {
                        key: "_load",
                        value: function() {
                          i(
                            r.prototype.__proto__ ||
                              Object.getPrototypeOf(r.prototype),
                            "_load",
                            this
                          ).call(this),
                            (this._ready = !0),
                            this._triggerCallbacks("loaded");
                        }
                      },
                      {
                        key: "_unload",
                        value: function() {
                          i(
                            r.prototype.__proto__ ||
                              Object.getPrototypeOf(r.prototype),
                            "_unload",
                            this
                          ).call(this),
                            (this._ready = !1);
                        }
                      },
                      {
                        key: "_seek",
                        value: function(e) {
                          i(
                            r.prototype.__proto__ ||
                              Object.getPrototypeOf(r.prototype),
                            "_seek",
                            this
                          ).call(this, e),
                            (this.state !== t.SOURCENODESTATE.playing &&
                              this.state !== t.SOURCENODESTATE.paused) ||
                              (void 0 === this._element && this._load(),
                              (this._ready = !1)),
                            (this._state !== t.SOURCENODESTATE.sequenced &&
                              this._state !== t.SOURCENODESTATE.ended) ||
                              void 0 === this._element ||
                              this._unload();
                        }
                      },
                      {
                        key: "_update",
                        value: function(e) {
                          return (
                            i(
                              r.prototype.__proto__ ||
                                Object.getPrototypeOf(r.prototype),
                              "_update",
                              this
                            ).call(this, e),
                            this._startTime - this._currentTime <=
                              this._preloadTime &&
                              this._state !== t.SOURCENODESTATE.waiting &&
                              this._state !== t.SOURCENODESTATE.ended &&
                              this._load(),
                            this._state === t.SOURCENODESTATE.playing ||
                              this._state === t.SOURCENODESTATE.paused ||
                              (this._state === t.SOURCENODESTATE.ended &&
                              void 0 !== this._element
                                ? (this._unload(), !1)
                                : void 0)
                          );
                        }
                      }
                    ]),
                    r
                  );
                })(o.default);
              (e.CANVASTYPE = a), (e.default = u);
            })
              ? o.apply(t, n)
              : o) || (e.exports = i);
    },
    function(e, t, r) {
      var o, n, i;
      (n = [t, r(1)]),
        void 0 ===
          (i =
            "function" ==
            typeof (o = function(e, t) {
              "use strict";
              Object.defineProperty(e, "__esModule", { value: !0 }),
                (e.IMAGETYPE = void 0);
              var r,
                o = (r = t) && r.__esModule ? r : { default: r },
                n = (function() {
                  function e(e, t) {
                    for (var r = 0; r < t.length; r++) {
                      var o = t[r];
                      (o.enumerable = o.enumerable || !1),
                        (o.configurable = !0),
                        "value" in o && (o.writable = !0),
                        Object.defineProperty(e, o.key, o);
                    }
                  }
                  return function(t, r, o) {
                    return r && e(t.prototype, r), o && e(t, o), t;
                  };
                })(),
                i = function e(t, r, o) {
                  null === t && (t = Function.prototype);
                  var n = Object.getOwnPropertyDescriptor(t, r);
                  if (void 0 === n) {
                    var i = Object.getPrototypeOf(t);
                    return null === i ? void 0 : e(i, r, o);
                  }
                  if ("value" in n) return n.value;
                  var a = n.get;
                  return void 0 !== a ? a.call(o) : void 0;
                },
                a = "CanvasNode",
                u = (function(e) {
                  function r(e, t, o, n) {
                    var i =
                        arguments.length > 4 && void 0 !== arguments[4]
                          ? arguments[4]
                          : 4,
                      u =
                        arguments.length > 5 && void 0 !== arguments[5]
                          ? arguments[5]
                          : {};
                    !(function(e, t) {
                      if (!(e instanceof t))
                        throw new TypeError(
                          "Cannot call a class as a function"
                        );
                    })(this, r);
                    var s = (function(e, t) {
                      if (!e)
                        throw new ReferenceError(
                          "this hasn't been initialised - super() hasn't been called"
                        );
                      return !t ||
                        ("object" != typeof t && "function" != typeof t)
                        ? e
                        : t;
                    })(
                      this,
                      (r.__proto__ || Object.getPrototypeOf(r)).call(
                        this,
                        e,
                        t,
                        o,
                        n
                      )
                    );
                    return (
                      (s._preloadTime = i),
                      (s._attributes = u),
                      (s._textureUploaded = !1),
                      (s._displayName = a),
                      s
                    );
                  }
                  return (
                    (function(e, t) {
                      if ("function" != typeof t && null !== t)
                        throw new TypeError(
                          "Super expression must either be null or a function, not " +
                            typeof t
                        );
                      (e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                          value: e,
                          enumerable: !1,
                          writable: !0,
                          configurable: !0
                        }
                      })),
                        t &&
                          (Object.setPrototypeOf
                            ? Object.setPrototypeOf(e, t)
                            : (e.__proto__ = t));
                    })(r, e),
                    n(r, [
                      {
                        key: "_load",
                        value: function() {
                          var e = this;
                          if (void 0 === this._image) {
                            if (this._isResponsibleForElementLifeCycle)
                              for (var o in (i(
                                r.prototype.__proto__ ||
                                  Object.getPrototypeOf(r.prototype),
                                "_load",
                                this
                              ).call(this),
                              (this._image = new Image()),
                              this._image.setAttribute(
                                "crossorigin",
                                "anonymous"
                              ),
                              (this._image.onload = function() {
                                (e._ready = !0),
                                  window.createImageBitmap
                                    ? window
                                        .createImageBitmap(e._image, {
                                          imageOrientation: "flipY"
                                        })
                                        .then(function(t) {
                                          (e._element = t),
                                            e._triggerCallbacks("loaded");
                                        })
                                    : ((e._element = e._image),
                                      e._triggerCallbacks("loaded"));
                              }),
                              (this._image.src = this._elementURL),
                              (this._image.onerror = function() {
                                console.error(
                                  "ImageNode failed to load. url:",
                                  e._elementURL
                                );
                              }),
                              this._attributes))
                                this._image[o] = this._attributes[o];
                            this._image.onerror = function() {
                              console.debug("Error with element", e._image),
                                (e._state = t.SOURCENODESTATE.error),
                                (e._ready = !0),
                                e._triggerCallbacks("error");
                            };
                          } else
                            for (var n in this._attributes)
                              this._image[n] = this._attributes[n];
                        }
                      },
                      {
                        key: "_unload",
                        value: function() {
                          i(
                            r.prototype.__proto__ ||
                              Object.getPrototypeOf(r.prototype),
                            "_unload",
                            this
                          ).call(this),
                            this._isResponsibleForElementLifeCycle &&
                              (void 0 !== this._image &&
                                ((this._image.src = ""),
                                (this._image.onerror = void 0),
                                (this._image = void 0),
                                delete this._image),
                              this._element instanceof window.ImageBitmap &&
                                this._element.close()),
                            (this._ready = !1);
                        }
                      },
                      {
                        key: "_seek",
                        value: function(e) {
                          i(
                            r.prototype.__proto__ ||
                              Object.getPrototypeOf(r.prototype),
                            "_seek",
                            this
                          ).call(this, e),
                            (this.state !== t.SOURCENODESTATE.playing &&
                              this.state !== t.SOURCENODESTATE.paused) ||
                              (void 0 === this._image && this._load()),
                            (this._state !== t.SOURCENODESTATE.sequenced &&
                              this._state !== t.SOURCENODESTATE.ended) ||
                              void 0 === this._element ||
                              this._unload();
                        }
                      },
                      {
                        key: "_update",
                        value: function(e) {
                          return (
                            this._textureUploaded
                              ? i(
                                  r.prototype.__proto__ ||
                                    Object.getPrototypeOf(r.prototype),
                                  "_update",
                                  this
                                ).call(this, e, !1)
                              : i(
                                  r.prototype.__proto__ ||
                                    Object.getPrototypeOf(r.prototype),
                                  "_update",
                                  this
                                ).call(this, e),
                            this._startTime - this._currentTime <=
                              this._preloadTime &&
                              this._state !== t.SOURCENODESTATE.waiting &&
                              this._state !== t.SOURCENODESTATE.ended &&
                              this._load(),
                            this._state === t.SOURCENODESTATE.playing ||
                              this._state === t.SOURCENODESTATE.paused ||
                              (this._state === t.SOURCENODESTATE.ended &&
                              void 0 !== this._image
                                ? (this._unload(), !1)
                                : void 0)
                          );
                        }
                      },
                      {
                        key: "elementURL",
                        get: function() {
                          return this._elementURL;
                        }
                      }
                    ]),
                    r
                  );
                })(o.default);
              (e.IMAGETYPE = a), (e.default = u);
            })
              ? o.apply(t, n)
              : o) || (e.exports = i);
    },
    function(e, t, r) {
      var o, n, i;
      (n = [t, r(2), r(78), r(79)]),
        void 0 ===
          (i =
            "function" ==
            typeof (o = function(e, t, r, o) {
              "use strict";
              Object.defineProperty(e, "__esModule", { value: !0 }),
                (e.DESTINATIONTYPE = void 0);
              var n = u(t),
                i = u(r),
                a = u(o);
              function u(e) {
                return e && e.__esModule ? e : { default: e };
              }
              var s = (function() {
                  function e(e, t) {
                    for (var r = 0; r < t.length; r++) {
                      var o = t[r];
                      (o.enumerable = o.enumerable || !1),
                        (o.configurable = !0),
                        "value" in o && (o.writable = !0),
                        Object.defineProperty(e, o.key, o);
                    }
                  }
                  return function(t, r, o) {
                    return r && e(t.prototype, r), o && e(t, o), t;
                  };
                })(),
                l = "DestinationNode",
                c = (function(e) {
                  function t(e, r) {
                    !(function(e, t) {
                      if (!(e instanceof t))
                        throw new TypeError(
                          "Cannot call a class as a function"
                        );
                    })(this, t);
                    var o = {
                        fragmentShader: i.default,
                        vertexShader: a.default,
                        properties: {},
                        inputs: ["u_image"]
                      },
                      n = (function(e, t) {
                        if (!e)
                          throw new ReferenceError(
                            "this hasn't been initialised - super() hasn't been called"
                          );
                        return !t ||
                          ("object" != typeof t && "function" != typeof t)
                          ? e
                          : t;
                      })(
                        this,
                        (t.__proto__ || Object.getPrototypeOf(t)).call(
                          this,
                          e,
                          r,
                          o,
                          o.inputs,
                          !1
                        )
                      );
                    return (n._displayName = l), n;
                  }
                  return (
                    (function(e, t) {
                      if ("function" != typeof t && null !== t)
                        throw new TypeError(
                          "Super expression must either be null or a function, not " +
                            typeof t
                        );
                      (e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                          value: e,
                          enumerable: !1,
                          writable: !0,
                          configurable: !0
                        }
                      })),
                        t &&
                          (Object.setPrototypeOf
                            ? Object.setPrototypeOf(e, t)
                            : (e.__proto__ = t));
                    })(t, e),
                    s(t, [
                      {
                        key: "_render",
                        value: function() {
                          var e = this,
                            r = this._gl;
                          r.bindFramebuffer(r.FRAMEBUFFER, null),
                            r.blendFunc(r.SRC_ALPHA, r.ONE_MINUS_SRC_ALPHA),
                            r.enable(r.BLEND),
                            r.clearColor(0, 0, 0, 0),
                            r.clear(r.COLOR_BUFFER_BIT),
                            this.inputs.forEach(function(o) {
                              (function e(t, r, o) {
                                null === t && (t = Function.prototype);
                                var n = Object.getOwnPropertyDescriptor(t, r);
                                if (void 0 === n) {
                                  var i = Object.getPrototypeOf(t);
                                  return null === i ? void 0 : e(i, r, o);
                                }
                                if ("value" in n) return n.value;
                                var a = n.get;
                                return void 0 !== a ? a.call(o) : void 0;
                              })(
                                t.prototype.__proto__ ||
                                  Object.getPrototypeOf(t.prototype),
                                "_render",
                                e
                              ).call(e);
                              var n = o._texture,
                                i = 0,
                                a = !0,
                                u = !1,
                                s = void 0;
                              try {
                                for (
                                  var l,
                                    c = e._inputTextureUnitMapping[
                                      Symbol.iterator
                                    ]();
                                  !(a = (l = c.next()).done);
                                  a = !0
                                ) {
                                  var _ = l.value;
                                  r.activeTexture(_.textureUnit);
                                  var d = r.getUniformLocation(
                                    e._program,
                                    _.name
                                  );
                                  r.uniform1i(d, e._parameterTextureCount + i),
                                    (i += 1),
                                    r.bindTexture(r.TEXTURE_2D, n);
                                }
                              } catch (e) {
                                (u = !0), (s = e);
                              } finally {
                                try {
                                  !a && c.return && c.return();
                                } finally {
                                  if (u) throw s;
                                }
                              }
                              r.drawArrays(r.TRIANGLES, 0, 6);
                            });
                        }
                      }
                    ]),
                    t
                  );
                })(n.default);
              (e.DESTINATIONTYPE = l), (e.default = c);
            })
              ? o.apply(t, n)
              : o) || (e.exports = i);
    },
    function(e, t, r) {
      var o, n, i;
      (n = [t]),
        void 0 ===
          (i =
            "function" ==
            typeof (o = function(e) {
              "use strict";
              Object.defineProperty(e, "__esModule", { value: !0 }),
                (e.ConnectException = function(e) {
                  (this.message = e), (this.name = "ConnectionException");
                }),
                (e.RenderException = function(e) {
                  (this.message = e), (this.name = "RenderException");
                });
            })
              ? o.apply(t, n)
              : o) || (e.exports = i);
    },
    function(e, t, r) {
      var o, n, i;
      (n = [t, r(12)]),
        void 0 ===
          (i =
            "function" ==
            typeof (o = function(e, t) {
              "use strict";
              Object.defineProperty(e, "__esModule", { value: !0 }),
                (e.TRANSITIONTYPE = void 0);
              var r,
                o = (r = t) && r.__esModule ? r : { default: r },
                n = (function() {
                  function e(e, t) {
                    for (var r = 0; r < t.length; r++) {
                      var o = t[r];
                      (o.enumerable = o.enumerable || !1),
                        (o.configurable = !0),
                        "value" in o && (o.writable = !0),
                        Object.defineProperty(e, o.key, o);
                    }
                  }
                  return function(t, r, o) {
                    return r && e(t.prototype, r), o && e(t, o), t;
                  };
                })(),
                i = "TransitionNode",
                a = (function(e) {
                  function t(e, r, o) {
                    !(function(e, t) {
                      if (!(e instanceof t))
                        throw new TypeError(
                          "Cannot call a class as a function"
                        );
                    })(this, t);
                    var n = (function(e, t) {
                      if (!e)
                        throw new ReferenceError(
                          "this hasn't been initialised - super() hasn't been called"
                        );
                      return !t ||
                        ("object" != typeof t && "function" != typeof t)
                        ? e
                        : t;
                    })(
                      this,
                      (t.__proto__ || Object.getPrototypeOf(t)).call(
                        this,
                        e,
                        r,
                        o
                      )
                    );
                    for (var a in ((n._transitions = {}),
                    (n._initialPropertyValues = {}),
                    n._properties))
                      n._initialPropertyValues[a] = n._properties[a].value;
                    return (n._displayName = i), n;
                  }
                  return (
                    (function(e, t) {
                      if ("function" != typeof t && null !== t)
                        throw new TypeError(
                          "Super expression must either be null or a function, not " +
                            typeof t
                        );
                      (e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                          value: e,
                          enumerable: !1,
                          writable: !0,
                          configurable: !0
                        }
                      })),
                        t &&
                          (Object.setPrototypeOf
                            ? Object.setPrototypeOf(e, t)
                            : (e.__proto__ = t));
                    })(t, e),
                    n(t, [
                      {
                        key: "_doesTransitionFitOnTimeline",
                        value: function(e) {
                          if (void 0 === this._transitions[e.property])
                            return !0;
                          var t = !0,
                            r = !1,
                            o = void 0;
                          try {
                            for (
                              var n,
                                i = this._transitions[e.property][
                                  Symbol.iterator
                                ]();
                              !(t = (n = i.next()).done);
                              t = !0
                            ) {
                              var a = n.value;
                              if (e.start > a.start && e.start < a.end)
                                return !1;
                              if (e.end > a.start && e.end < a.end) return !1;
                              if (a.start > e.start && a.start < e.end)
                                return !1;
                              if (a.end > e.start && a.end < e.end) return !1;
                            }
                          } catch (e) {
                            (r = !0), (o = e);
                          } finally {
                            try {
                              !t && i.return && i.return();
                            } finally {
                              if (r) throw o;
                            }
                          }
                          return !0;
                        }
                      },
                      {
                        key: "_insertTransitionInTimeline",
                        value: function(e) {
                          void 0 === this._transitions[e.property] &&
                            (this._transitions[e.property] = []),
                            this._transitions[e.property].push(e),
                            this._transitions[e.property].sort(function(e, t) {
                              return e.start - t.start;
                            });
                        }
                      },
                      {
                        key: "transition",
                        value: function(e, t, r, o) {
                          var n =
                              arguments.length > 4 && void 0 !== arguments[4]
                                ? arguments[4]
                                : "mix",
                            i = {
                              start: e + this._currentTime,
                              end: t + this._currentTime,
                              current: r,
                              target: o,
                              property: n
                            };
                          return (
                            !!this._doesTransitionFitOnTimeline(i) &&
                            (this._insertTransitionInTimeline(i), !0)
                          );
                        }
                      },
                      {
                        key: "transitionAt",
                        value: function(e, t, r, o) {
                          var n =
                              arguments.length > 4 && void 0 !== arguments[4]
                                ? arguments[4]
                                : "mix",
                            i = {
                              start: e,
                              end: t,
                              current: r,
                              target: o,
                              property: n
                            };
                          return (
                            !!this._doesTransitionFitOnTimeline(i) &&
                            (this._insertTransitionInTimeline(i), !0)
                          );
                        }
                      },
                      {
                        key: "clearTransitions",
                        value: function(e) {
                          void 0 === e
                            ? (this._transitions = {})
                            : (this._transitions[e] = []);
                        }
                      },
                      {
                        key: "clearTransition",
                        value: function(e, t) {
                          for (
                            var r = void 0, o = 0;
                            o < this._transitions[e].length;
                            o++
                          ) {
                            var n = this._transitions[e][o];
                            t > n.start && t < n.end && (r = o);
                          }
                          return (
                            void 0 !== r &&
                            (this._transitions[e].splice(r, 1), !0)
                          );
                        }
                      },
                      {
                        key: "_update",
                        value: function(e) {
                          for (var r in ((function e(t, r, o) {
                            null === t && (t = Function.prototype);
                            var n = Object.getOwnPropertyDescriptor(t, r);
                            if (void 0 === n) {
                              var i = Object.getPrototypeOf(t);
                              return null === i ? void 0 : e(i, r, o);
                            }
                            if ("value" in n) return n.value;
                            var a = n.get;
                            return void 0 !== a ? a.call(o) : void 0;
                          })(
                            t.prototype.__proto__ ||
                              Object.getPrototypeOf(t.prototype),
                            "_update",
                            this
                          ).call(this, e),
                          this._transitions)) {
                            var o = this[r];
                            this._transitions[r].length > 0 &&
                              (o = this._transitions[r][0].current);
                            for (
                              var n = !1, i = 0;
                              i < this._transitions[r].length;
                              i++
                            ) {
                              var a = this._transitions[r][i];
                              if (e > a.end) o = a.target;
                              else if (e > a.start && e < a.end) {
                                var u = a.target - a.current,
                                  s =
                                    (this._currentTime - a.start) /
                                    (a.end - a.start);
                                (n = !0), (this[r] = a.current + u * s);
                                break;
                              }
                            }
                            n || (this[r] = o);
                          }
                        }
                      }
                    ]),
                    t
                  );
                })(o.default);
              (e.TRANSITIONTYPE = i), (e.default = a);
            })
              ? o.apply(t, n)
              : o) || (e.exports = i);
    },
    function(e, t, r) {
      var o, n, i;
      (n = [t, r(2), r(0)]),
        void 0 ===
          (i =
            "function" ==
            typeof (o = function(e, t, r) {
              "use strict";
              Object.defineProperty(e, "__esModule", { value: !0 }),
                (e.EFFECTYPE = void 0);
              var o,
                n = (o = t) && o.__esModule ? o : { default: o },
                i = (function() {
                  function e(e, t) {
                    for (var r = 0; r < t.length; r++) {
                      var o = t[r];
                      (o.enumerable = o.enumerable || !1),
                        (o.configurable = !0),
                        "value" in o && (o.writable = !0),
                        Object.defineProperty(e, o.key, o);
                    }
                  }
                  return function(t, r, o) {
                    return r && e(t.prototype, r), o && e(t, o), t;
                  };
                })(),
                a = "EffectNode",
                u = (function(e) {
                  function t(e, o, n) {
                    !(function(e, t) {
                      if (!(e instanceof t))
                        throw new TypeError(
                          "Cannot call a class as a function"
                        );
                    })(this, t);
                    var i = (0, r.createElementTexture)(e);
                    e.texImage2D(
                      e.TEXTURE_2D,
                      0,
                      e.RGBA,
                      1,
                      1,
                      0,
                      e.RGBA,
                      e.UNSIGNED_BYTE,
                      new Uint8Array([0, 0, 0, 0])
                    );
                    var u = (function(e, t) {
                      if (!e)
                        throw new ReferenceError(
                          "this hasn't been initialised - super() hasn't been called"
                        );
                      return !t ||
                        ("object" != typeof t && "function" != typeof t)
                        ? e
                        : t;
                    })(
                      this,
                      (t.__proto__ || Object.getPrototypeOf(t)).call(
                        this,
                        e,
                        o,
                        n,
                        n.inputs,
                        !0
                      )
                    );
                    return (u._placeholderTexture = i), (u._displayName = a), u;
                  }
                  return (
                    (function(e, t) {
                      if ("function" != typeof t && null !== t)
                        throw new TypeError(
                          "Super expression must either be null or a function, not " +
                            typeof t
                        );
                      (e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                          value: e,
                          enumerable: !1,
                          writable: !0,
                          configurable: !0
                        }
                      })),
                        t &&
                          (Object.setPrototypeOf
                            ? Object.setPrototypeOf(e, t)
                            : (e.__proto__ = t));
                    })(t, e),
                    i(t, [
                      {
                        key: "_render",
                        value: function() {
                          var e = this._gl;
                          e.bindFramebuffer(e.FRAMEBUFFER, this._framebuffer),
                            e.framebufferTexture2D(
                              e.FRAMEBUFFER,
                              e.COLOR_ATTACHMENT0,
                              e.TEXTURE_2D,
                              this._texture,
                              0
                            ),
                            e.clearColor(0, 0, 0, 0),
                            e.clear(e.COLOR_BUFFER_BIT),
                            e.blendFunc(e.ONE, e.ZERO),
                            (function e(t, r, o) {
                              null === t && (t = Function.prototype);
                              var n = Object.getOwnPropertyDescriptor(t, r);
                              if (void 0 === n) {
                                var i = Object.getPrototypeOf(t);
                                return null === i ? void 0 : e(i, r, o);
                              }
                              if ("value" in n) return n.value;
                              var a = n.get;
                              return void 0 !== a ? a.call(o) : void 0;
                            })(
                              t.prototype.__proto__ ||
                                Object.getPrototypeOf(t.prototype),
                              "_render",
                              this
                            ).call(this);
                          for (
                            var r = this._renderGraph.getInputsForNode(this),
                              o = 0,
                              n = 0;
                            n < this._inputTextureUnitMapping.length;
                            n++
                          ) {
                            var i = this._placeholderTexture,
                              a = this._inputTextureUnitMapping[n].textureUnit,
                              u = this._inputTextureUnitMapping[n].name;
                            n < r.length &&
                              void 0 !== r[n] &&
                              (i = r[n]._texture),
                              e.activeTexture(a);
                            var s = e.getUniformLocation(this._program, u);
                            e.uniform1i(s, this._parameterTextureCount + o),
                              (o += 1),
                              e.bindTexture(e.TEXTURE_2D, i);
                          }
                          e.drawArrays(e.TRIANGLES, 0, 6),
                            e.bindFramebuffer(e.FRAMEBUFFER, null);
                        }
                      }
                    ]),
                    t
                  );
                })(n.default);
              (e.EFFECTYPE = a), (e.default = u);
            })
              ? o.apply(t, n)
              : o) || (e.exports = i);
    },
    function(e, t, r) {
      var o, n, i;
      (n = [t, r(2), r(0)]),
        void 0 ===
          (i =
            "function" ==
            typeof (o = function(e, t, r) {
              "use strict";
              Object.defineProperty(e, "__esModule", { value: !0 }),
                (e.COMPOSITINGTYPE = void 0);
              var o,
                n = (o = t) && o.__esModule ? o : { default: o },
                i = (function() {
                  function e(e, t) {
                    for (var r = 0; r < t.length; r++) {
                      var o = t[r];
                      (o.enumerable = o.enumerable || !1),
                        (o.configurable = !0),
                        "value" in o && (o.writable = !0),
                        Object.defineProperty(e, o.key, o);
                    }
                  }
                  return function(t, r, o) {
                    return r && e(t.prototype, r), o && e(t, o), t;
                  };
                })(),
                a = "CompositingNode",
                u = (function(e) {
                  function t(e, o, n) {
                    !(function(e, t) {
                      if (!(e instanceof t))
                        throw new TypeError(
                          "Cannot call a class as a function"
                        );
                    })(this, t);
                    var i = (0, r.createElementTexture)(e);
                    e.texImage2D(
                      e.TEXTURE_2D,
                      0,
                      e.RGBA,
                      1,
                      1,
                      0,
                      e.RGBA,
                      e.UNSIGNED_BYTE,
                      new Uint8Array([0, 0, 0, 0])
                    );
                    var u = (function(e, t) {
                      if (!e)
                        throw new ReferenceError(
                          "this hasn't been initialised - super() hasn't been called"
                        );
                      return !t ||
                        ("object" != typeof t && "function" != typeof t)
                        ? e
                        : t;
                    })(
                      this,
                      (t.__proto__ || Object.getPrototypeOf(t)).call(
                        this,
                        e,
                        o,
                        n,
                        n.inputs,
                        !1
                      )
                    );
                    return (u._placeholderTexture = i), (u._displayName = a), u;
                  }
                  return (
                    (function(e, t) {
                      if ("function" != typeof t && null !== t)
                        throw new TypeError(
                          "Super expression must either be null or a function, not " +
                            typeof t
                        );
                      (e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                          value: e,
                          enumerable: !1,
                          writable: !0,
                          configurable: !0
                        }
                      })),
                        t &&
                          (Object.setPrototypeOf
                            ? Object.setPrototypeOf(e, t)
                            : (e.__proto__ = t));
                    })(t, e),
                    i(t, [
                      {
                        key: "_render",
                        value: function() {
                          var e = this,
                            r = this._gl;
                          r.bindFramebuffer(r.FRAMEBUFFER, this._framebuffer),
                            r.framebufferTexture2D(
                              r.FRAMEBUFFER,
                              r.COLOR_ATTACHMENT0,
                              r.TEXTURE_2D,
                              this._texture,
                              0
                            ),
                            r.clearColor(0, 0, 0, 0),
                            r.clear(r.COLOR_BUFFER_BIT),
                            r.blendFuncSeparate(
                              r.SRC_ALPHA,
                              r.ONE_MINUS_SRC_ALPHA,
                              r.ONE,
                              r.ONE_MINUS_SRC_ALPHA
                            ),
                            this.inputs.forEach(function(o) {
                              if (void 0 !== o) {
                                (function e(t, r, o) {
                                  null === t && (t = Function.prototype);
                                  var n = Object.getOwnPropertyDescriptor(t, r);
                                  if (void 0 === n) {
                                    var i = Object.getPrototypeOf(t);
                                    return null === i ? void 0 : e(i, r, o);
                                  }
                                  if ("value" in n) return n.value;
                                  var a = n.get;
                                  return void 0 !== a ? a.call(o) : void 0;
                                })(
                                  t.prototype.__proto__ ||
                                    Object.getPrototypeOf(t.prototype),
                                  "_render",
                                  e
                                ).call(e);
                                var n = o._texture,
                                  i = 0,
                                  a = !0,
                                  u = !1,
                                  s = void 0;
                                try {
                                  for (
                                    var l,
                                      c = e._inputTextureUnitMapping[
                                        Symbol.iterator
                                      ]();
                                    !(a = (l = c.next()).done);
                                    a = !0
                                  ) {
                                    var _ = l.value;
                                    r.activeTexture(_.textureUnit);
                                    var d = r.getUniformLocation(
                                      e._program,
                                      _.name
                                    );
                                    r.uniform1i(
                                      d,
                                      e._parameterTextureCount + i
                                    ),
                                      (i += 1),
                                      r.bindTexture(r.TEXTURE_2D, n);
                                  }
                                } catch (e) {
                                  (u = !0), (s = e);
                                } finally {
                                  try {
                                    !a && c.return && c.return();
                                  } finally {
                                    if (u) throw s;
                                  }
                                }
                                r.drawArrays(r.TRIANGLES, 0, 6);
                              }
                            }),
                            r.bindFramebuffer(r.FRAMEBUFFER, null);
                        }
                      }
                    ]),
                    t
                  );
                })(n.default);
              (e.COMPOSITINGTYPE = a), (e.default = u);
            })
              ? o.apply(t, n)
              : o) || (e.exports = i);
    },
    function(e, t, r) {
      var o, n, i;
      (n = [
        t,
        r(0),
        r(5),
        r(80),
        r(8),
        r(7),
        r(1),
        r(13),
        r(9),
        r(12),
        r(11),
        r(81),
        r(82),
        r(3)
      ]),
        void 0 ===
          (i =
            "function" ==
            typeof (o = function(t, r, o, n, i, a, u, s, l, c, _, d, p, f) {
              "use strict";
              Object.defineProperty(t, "__esModule", { value: !0 });
              var v = S(o),
                h = S(n),
                m = S(i),
                y = S(a),
                g = S(s),
                b = S(l),
                x = S(c),
                T = S(_),
                C = S(d),
                E = S(p),
                O = S(f);
              function S(e) {
                return e && e.__esModule ? e : { default: e };
              }
              var A = (function() {
                  function e(e, t) {
                    for (var r = 0; r < t.length; r++) {
                      var o = t[r];
                      (o.enumerable = o.enumerable || !1),
                        (o.configurable = !0),
                        "value" in o && (o.writable = !0),
                        Object.defineProperty(e, o.key, o);
                    }
                  }
                  return function(t, r, o) {
                    return r && e(t.prototype, r), o && e(t, o), t;
                  };
                })(),
                P = new r.UpdateablesManager(),
                w = (function() {
                  function e(t, o) {
                    var n =
                      arguments.length > 2 && void 0 !== arguments[2]
                        ? arguments[2]
                        : {
                            preserveDrawingBuffer: !0,
                            manualUpdate: !1,
                            endOnLastSourceEnd: !0,
                            useVideoElementCache: !0,
                            videoElementCacheSize: 6,
                            webglContextAttributes: {
                              preserveDrawingBuffer: !0,
                              alpha: !1
                            }
                          };
                    !(function(e, t) {
                      if (!(e instanceof t))
                        throw new TypeError(
                          "Cannot call a class as a function"
                        );
                    })(this, e),
                      (this._canvas = t);
                    var i = !1;
                    this.endOnLastSourceEnd = !0;
                    var a = { preserveDrawingBuffer: !0, alpha: !1 };
                    if (
                      ("manualUpdate" in n && (i = n.manualUpdate),
                      "endOnLastSourceEnd" in n &&
                        (this._endOnLastSourceEnd = n.endOnLastSourceEnd),
                      "webglContextAttributes" in n &&
                        (a = n.webglContextAttributes),
                      void 0 === a.alpha && (a.alpha = !1),
                      !0 === a.alpha &&
                        console.error(
                          "webglContextAttributes.alpha must be false for correct opeation"
                        ),
                      (this._gl = t.getContext("experimental-webgl", a)),
                      null === this._gl)
                    )
                      return (
                        console.error("Failed to intialise WebGL."),
                        void (o && o())
                      );
                    void 0 === n.useVideoElementCache &&
                      (n.useVideoElementCache = !0),
                      (this._useVideoElementCache = n.useVideoElementCache),
                      this._useVideoElementCache &&
                        (n.videoElementCacheSize ||
                          (n.videoElementCacheSize = 5),
                        (this._videoElementCache = new E.default(
                          n.videoElementCacheSize
                        ))),
                      this._canvas.id &&
                        ("string" == typeof this._canvas.id ||
                          this._canvas.id instanceof String) &&
                        (this._id = t.id),
                      void 0 === this._id &&
                        (this._id = (0, r.generateRandomId)()),
                      void 0 === window.__VIDEOCONTEXT_REFS__ &&
                        (window.__VIDEOCONTEXT_REFS__ = {}),
                      (window.__VIDEOCONTEXT_REFS__[this._id] = this),
                      (this._renderGraph = new C.default()),
                      (this._sourceNodes = []),
                      (this._processingNodes = []),
                      (this._timeline = []),
                      (this._currentTime = 0),
                      (this._state = e.STATE.PAUSED),
                      (this._playbackRate = 1),
                      (this._volume = 1),
                      (this._sourcesPlaying = void 0),
                      (this._destinationNode = new b.default(
                        this._gl,
                        this._renderGraph
                      )),
                      (this._callbacks = new Map()),
                      this._callbacks.set("stalled", []),
                      this._callbacks.set("update", []),
                      this._callbacks.set("ended", []),
                      this._callbacks.set("content", []),
                      this._callbacks.set("nocontent", []),
                      (this._timelineCallbacks = []),
                      i || P.register(this);
                  }
                  return (
                    A(
                      e,
                      [
                        {
                          key: "registerTimelineCallback",
                          value: function(e, t) {
                            var r =
                              arguments.length > 2 && void 0 !== arguments[2]
                                ? arguments[2]
                                : 0;
                            this._timelineCallbacks.push({
                              time: e,
                              func: t,
                              ordering: r
                            });
                          }
                        },
                        {
                          key: "unregisterTimelineCallback",
                          value: function(e) {
                            var t = [],
                              r = !0,
                              o = !1,
                              n = void 0;
                            try {
                              for (
                                var i,
                                  a = this._timelineCallbacks[
                                    Symbol.iterator
                                  ]();
                                !(r = (i = a.next()).done);
                                r = !0
                              ) {
                                var u = i.value;
                                u.func === e && t.push(u);
                              }
                            } catch (e) {
                              (o = !0), (n = e);
                            } finally {
                              try {
                                !r && a.return && a.return();
                              } finally {
                                if (o) throw n;
                              }
                            }
                            var s = !0,
                              l = !1,
                              c = void 0;
                            try {
                              for (
                                var _, d = t[Symbol.iterator]();
                                !(s = (_ = d.next()).done);
                                s = !0
                              ) {
                                var p = _.value,
                                  f = this._timelineCallbacks.indexOf(p);
                                this._timelineCallbacks.splice(f, 1);
                              }
                            } catch (e) {
                              (l = !0), (c = e);
                            } finally {
                              try {
                                !s && d.return && d.return();
                              } finally {
                                if (l) throw c;
                              }
                            }
                          }
                        },
                        {
                          key: "registerCallback",
                          value: function(e, t) {
                            if (!this._callbacks.has(e)) return !1;
                            this._callbacks.get(e).push(t);
                          }
                        },
                        {
                          key: "unregisterCallback",
                          value: function(e) {
                            var t = !0,
                              r = !1,
                              o = void 0;
                            try {
                              for (
                                var n,
                                  i = this._callbacks
                                    .values()
                                    [Symbol.iterator]();
                                !(t = (n = i.next()).done);
                                t = !0
                              ) {
                                var a = n.value,
                                  u = a.indexOf(e);
                                if (-1 !== u) return a.splice(u, 1), !0;
                              }
                            } catch (e) {
                              (r = !0), (o = e);
                            } finally {
                              try {
                                !t && i.return && i.return();
                              } finally {
                                if (r) throw o;
                              }
                            }
                            return !1;
                          }
                        },
                        {
                          key: "_callCallbacks",
                          value: function(e) {
                            var t = this._callbacks.get(e),
                              r = !0,
                              o = !1,
                              n = void 0;
                            try {
                              for (
                                var i, a = t[Symbol.iterator]();
                                !(r = (i = a.next()).done);
                                r = !0
                              )
                                (0, i.value)(this._currentTime);
                            } catch (e) {
                              (o = !0), (n = e);
                            } finally {
                              try {
                                !r && a.return && a.return();
                              } finally {
                                if (o) throw n;
                              }
                            }
                          }
                        },
                        {
                          key: "play",
                          value: function() {
                            return (
                              console.debug("VideoContext - playing"),
                              this._videoElementCache &&
                                this._videoElementCache.init(),
                              (this._state = e.STATE.PLAYING),
                              !0
                            );
                          }
                        },
                        {
                          key: "pause",
                          value: function() {
                            return (
                              console.debug("VideoContext - pausing"),
                              (this._state = e.STATE.PAUSED),
                              !0
                            );
                          }
                        },
                        {
                          key: "video",
                          value: function(e) {
                            var t =
                                arguments.length > 1 && void 0 !== arguments[1]
                                  ? arguments[1]
                                  : 0,
                              r =
                                arguments.length > 2 && void 0 !== arguments[2]
                                  ? arguments[2]
                                  : 4,
                              o =
                                arguments.length > 3 && void 0 !== arguments[3]
                                  ? arguments[3]
                                  : {},
                              n = new v.default(
                                e,
                                this._gl,
                                this._renderGraph,
                                this._currentTime,
                                this._playbackRate,
                                t,
                                r,
                                this._videoElementCache,
                                o
                              );
                            return this._sourceNodes.push(n), n;
                          }
                        },
                        {
                          key: "audio",
                          value: function(e) {
                            var t =
                                arguments.length > 1 && void 0 !== arguments[1]
                                  ? arguments[1]
                                  : 0,
                              r =
                                arguments.length > 2 && void 0 !== arguments[2]
                                  ? arguments[2]
                                  : 4,
                              o =
                                arguments.length > 3 && void 0 !== arguments[3]
                                  ? arguments[3]
                                  : {},
                              n = new h.default(
                                e,
                                this._gl,
                                this._renderGraph,
                                this._currentTime,
                                this._playbackRate,
                                t,
                                r,
                                this._audioElementCache,
                                o
                              );
                            return this._sourceNodes.push(n), n;
                          }
                        },
                        {
                          key: "createVideoSourceNode",
                          value: function(e) {
                            var t =
                                arguments.length > 1 && void 0 !== arguments[1]
                                  ? arguments[1]
                                  : 0,
                              r =
                                arguments.length > 2 && void 0 !== arguments[2]
                                  ? arguments[2]
                                  : 4,
                              o =
                                arguments.length > 3 && void 0 !== arguments[3]
                                  ? arguments[3]
                                  : {};
                            return (
                              this._depricate(
                                "Warning: createVideoSourceNode will be depricated in v1.0, please switch to using VideoContext.video()"
                              ),
                              this.video(e, t, r, o)
                            );
                          }
                        },
                        {
                          key: "image",
                          value: function(e) {
                            var t =
                                arguments.length > 1 && void 0 !== arguments[1]
                                  ? arguments[1]
                                  : 4,
                              r =
                                arguments.length > 2 && void 0 !== arguments[2]
                                  ? arguments[2]
                                  : {},
                              o = new m.default(
                                e,
                                this._gl,
                                this._renderGraph,
                                this._currentTime,
                                t,
                                r
                              );
                            return this._sourceNodes.push(o), o;
                          }
                        },
                        {
                          key: "createImageSourceNode",
                          value: function(e) {
                            var t =
                                arguments.length > 1 && void 0 !== arguments[1]
                                  ? arguments[1]
                                  : 0,
                              r =
                                arguments.length > 2 && void 0 !== arguments[2]
                                  ? arguments[2]
                                  : 4,
                              o =
                                arguments.length > 3 && void 0 !== arguments[3]
                                  ? arguments[3]
                                  : {};
                            return (
                              this._depricate(
                                "Warning: createImageSourceNode will be depricated in v1.0, please switch to using VideoContext.image()"
                              ),
                              this.image(e, t, r, o)
                            );
                          }
                        },
                        {
                          key: "canvas",
                          value: function(e) {
                            var t = new y.default(
                              e,
                              this._gl,
                              this._renderGraph,
                              this._currentTime
                            );
                            return this._sourceNodes.push(t), t;
                          }
                        },
                        {
                          key: "createCanvasSourceNode",
                          value: function(e) {
                            var t =
                                arguments.length > 1 && void 0 !== arguments[1]
                                  ? arguments[1]
                                  : 0,
                              r =
                                arguments.length > 2 && void 0 !== arguments[2]
                                  ? arguments[2]
                                  : 4;
                            return (
                              this._depricate(
                                "Warning: createCanvasSourceNode will be depricated in v1.0, please switch to using VideoContext.canvas()"
                              ),
                              this.canvas(e, t, r)
                            );
                          }
                        },
                        {
                          key: "effect",
                          value: function(e) {
                            var t = new x.default(
                              this._gl,
                              this._renderGraph,
                              e
                            );
                            return this._processingNodes.push(t), t;
                          }
                        },
                        {
                          key: "createEffectNode",
                          value: function(e) {
                            return (
                              this._depricate(
                                "Warning: createEffectNode will be depricated in v1.0, please switch to using VideoContext.effect()"
                              ),
                              this.effect(e)
                            );
                          }
                        },
                        {
                          key: "compositor",
                          value: function(e) {
                            var t = new g.default(
                              this._gl,
                              this._renderGraph,
                              e
                            );
                            return this._processingNodes.push(t), t;
                          }
                        },
                        {
                          key: "createCompositingNode",
                          value: function(e) {
                            return (
                              this._depricate(
                                "Warning: createCompositingNode will be depricated in v1.0, please switch to using VideoContext.compositor()"
                              ),
                              this.compositor(e)
                            );
                          }
                        },
                        {
                          key: "transition",
                          value: function(e) {
                            var t = new T.default(
                              this._gl,
                              this._renderGraph,
                              e
                            );
                            return this._processingNodes.push(t), t;
                          }
                        },
                        {
                          key: "createTransitionNode",
                          value: function(e) {
                            return (
                              this._depricate(
                                "Warning: createTransitionNode will be depricated in v1.0, please switch to using VideoContext.transition()"
                              ),
                              this.transition(e)
                            );
                          }
                        },
                        {
                          key: "_isStalled",
                          value: function() {
                            for (var e = 0; e < this._sourceNodes.length; e++)
                              if (!this._sourceNodes[e]._isReady()) return !0;
                            return !1;
                          }
                        },
                        {
                          key: "update",
                          value: function(e) {
                            this._update(e);
                          }
                        },
                        {
                          key: "_update",
                          value: function(t) {
                            if (
                              ((this._sourceNodes = this._sourceNodes.filter(
                                function(e) {
                                  if (!e.destroyed) return e;
                                }
                              )),
                              (this._processingNodes = this._processingNodes.filter(
                                function(e) {
                                  if (!e.destroyed) return e;
                                }
                              )),
                              this._state === e.STATE.PLAYING ||
                                this._state === e.STATE.STALLED ||
                                this._state === e.STATE.PAUSED)
                            ) {
                              if (
                                (this._callCallbacks("update"),
                                this._state !== e.STATE.PAUSED &&
                                  (this._isStalled()
                                    ? (this._callCallbacks("stalled"),
                                      (this._state = e.STATE.STALLED))
                                    : (this._state = e.STATE.PLAYING)),
                                this._state === e.STATE.PLAYING)
                              ) {
                                var r = new Map(),
                                  o = !0,
                                  n = !1,
                                  i = void 0;
                                try {
                                  for (
                                    var a,
                                      s = this._timelineCallbacks[
                                        Symbol.iterator
                                      ]();
                                    !(o = (a = s.next()).done);
                                    o = !0
                                  ) {
                                    var l = a.value;
                                    l.time >= this.currentTime &&
                                      l.time <
                                        this._currentTime +
                                          t * this._playbackRate &&
                                      (r.has(l.time) || r.set(l.time, []),
                                      r.get(l.time).push(l));
                                  }
                                } catch (e) {
                                  (n = !0), (i = e);
                                } finally {
                                  try {
                                    !o && s.return && s.return();
                                  } finally {
                                    if (n) throw i;
                                  }
                                }
                                var c = Array.from(r.keys());
                                c.sort(function(e, t) {
                                  return e - t;
                                });
                                var _ = !0,
                                  d = !1,
                                  p = void 0;
                                try {
                                  for (
                                    var f, v = c[Symbol.iterator]();
                                    !(_ = (f = v.next()).done);
                                    _ = !0
                                  ) {
                                    var h = f.value,
                                      m = r.get(h);
                                    m.sort(function(e, t) {
                                      return e.ordering - t.ordering;
                                    });
                                    var y = !0,
                                      g = !1,
                                      b = void 0;
                                    try {
                                      for (
                                        var x, T = m[Symbol.iterator]();
                                        !(y = (x = T.next()).done);
                                        y = !0
                                      )
                                        x.value.func();
                                    } catch (e) {
                                      (g = !0), (b = e);
                                    } finally {
                                      try {
                                        !y && T.return && T.return();
                                      } finally {
                                        if (g) throw b;
                                      }
                                    }
                                  }
                                } catch (e) {
                                  (d = !0), (p = e);
                                } finally {
                                  try {
                                    !_ && v.return && v.return();
                                  } finally {
                                    if (d) throw p;
                                  }
                                }
                                if (
                                  ((this._currentTime +=
                                    t * this._playbackRate),
                                  this._currentTime > this.duration &&
                                    this._endOnLastSourceEnd)
                                ) {
                                  for (
                                    var E = 0;
                                    E < this._sourceNodes.length;
                                    E++
                                  )
                                    this._sourceNodes[E]._update(
                                      this._currentTime
                                    );
                                  (this._state = e.STATE.ENDED),
                                    this._callCallbacks("ended");
                                }
                              }
                              for (
                                var O = !1, S = 0;
                                S < this._sourceNodes.length;
                                S++
                              ) {
                                var A = this._sourceNodes[S];
                                this._state === e.STATE.STALLED &&
                                  A._isReady() &&
                                  A._state === u.SOURCENODESTATE.playing &&
                                  A._pause(),
                                  this._state === e.STATE.PAUSED && A._pause(),
                                  this._state === e.STATE.PLAYING && A._play(),
                                  A._update(this._currentTime),
                                  (A._state !== u.SOURCENODESTATE.paused &&
                                    A._state !== u.SOURCENODESTATE.playing) ||
                                    (O = !0);
                              }
                              O !== this._sourcesPlaying &&
                                this._state === e.STATE.PLAYING &&
                                (!0 === O
                                  ? this._callCallbacks("content")
                                  : this._callCallbacks("nocontent"),
                                (this._sourcesPlaying = O));
                              for (
                                var P = [],
                                  w = this._renderGraph.connections.slice(),
                                  k = C.default.getInputlessNodes(w);
                                k.length > 0;

                              ) {
                                var N = k.pop();
                                P.push(N);
                                var R = !0,
                                  D = !1,
                                  F = void 0;
                                try {
                                  for (
                                    var U,
                                      j = C.default
                                        .outputEdgesFor(N, w)
                                        [Symbol.iterator]();
                                    !(R = (U = j.next()).done);
                                    R = !0
                                  ) {
                                    var M = U.value,
                                      I = w.indexOf(M);
                                    I > -1 && w.splice(I, 1),
                                      0 ===
                                        C.default.inputEdgesFor(
                                          M.destination,
                                          w
                                        ).length && k.push(M.destination);
                                  }
                                } catch (e) {
                                  (D = !0), (F = e);
                                } finally {
                                  try {
                                    !R && j.return && j.return();
                                  } finally {
                                    if (D) throw F;
                                  }
                                }
                              }
                              var L = !0,
                                G = !1,
                                V = void 0;
                              try {
                                for (
                                  var B, Y = P[Symbol.iterator]();
                                  !(L = (B = Y.next()).done);
                                  L = !0
                                ) {
                                  var W = B.value;
                                  -1 === this._sourceNodes.indexOf(W) &&
                                    (W._update(this._currentTime), W._render());
                                }
                              } catch (e) {
                                (G = !0), (V = e);
                              } finally {
                                try {
                                  !L && Y.return && Y.return();
                                } finally {
                                  if (G) throw V;
                                }
                              }
                            }
                          }
                        },
                        {
                          key: "reset",
                          value: function() {
                            var t = !0,
                              r = !1,
                              o = void 0;
                            try {
                              for (
                                var n, i = this._callbacks[Symbol.iterator]();
                                !(t = (n = i.next()).done);
                                t = !0
                              ) {
                                var a = n.value;
                                this.unregisterCallback(a);
                              }
                            } catch (e) {
                              (r = !0), (o = e);
                            } finally {
                              try {
                                !t && i.return && i.return();
                              } finally {
                                if (r) throw o;
                              }
                            }
                            var u = !0,
                              s = !1,
                              l = void 0;
                            try {
                              for (
                                var c, _ = this._sourceNodes[Symbol.iterator]();
                                !(u = (c = _.next()).done);
                                u = !0
                              )
                                c.value.destroy();
                            } catch (e) {
                              (s = !0), (l = e);
                            } finally {
                              try {
                                !u && _.return && _.return();
                              } finally {
                                if (s) throw l;
                              }
                            }
                            var d = !0,
                              p = !1,
                              f = void 0;
                            try {
                              for (
                                var v,
                                  h = this._processingNodes[Symbol.iterator]();
                                !(d = (v = h.next()).done);
                                d = !0
                              )
                                v.value.destroy();
                            } catch (e) {
                              (p = !0), (f = e);
                            } finally {
                              try {
                                !d && h.return && h.return();
                              } finally {
                                if (p) throw f;
                              }
                            }
                            this._update(0),
                              (this._sourceNodes = []),
                              (this._processingNodes = []),
                              (this._timeline = []),
                              (this._currentTime = 0),
                              (this._state = e.STATE.PAUSED),
                              (this._playbackRate = 1),
                              (this._sourcesPlaying = void 0),
                              this._callbacks.set("stalled", []),
                              this._callbacks.set("update", []),
                              this._callbacks.set("ended", []),
                              this._callbacks.set("content", []),
                              this._callbacks.set("nocontent", []),
                              (this._timelineCallbacks = []);
                          }
                        },
                        {
                          key: "_depricate",
                          value: function(e) {
                            console.log(e);
                          }
                        },
                        {
                          key: "snapshot",
                          value: function() {
                            return (0, r.snapshot)(this);
                          }
                        },
                        {
                          key: "id",
                          get: function() {
                            return this._id;
                          },
                          set: function(e) {
                            delete window.__VIDEOCONTEXT_REFS__[this._id],
                              void 0 !== window.__VIDEOCONTEXT_REFS__[e] &&
                                console.warn(
                                  "Warning; setting id to that of an existing VideoContext instance."
                                ),
                              (window.__VIDEOCONTEXT_REFS__[e] = this),
                              (this._id = e);
                          }
                        },
                        {
                          key: "element",
                          get: function() {
                            return this._canvas;
                          }
                        },
                        {
                          key: "state",
                          get: function() {
                            return this._state;
                          }
                        },
                        {
                          key: "currentTime",
                          set: function(t) {
                            t < this.duration &&
                              this._state === e.STATE.ENDED &&
                              (this._state = e.STATE.PAUSED),
                              ("string" == typeof t || t instanceof String) &&
                                (t = parseFloat(t));
                            for (var r = 0; r < this._sourceNodes.length; r++)
                              this._sourceNodes[r]._seek(t);
                            for (
                              var o = 0;
                              o < this._processingNodes.length;
                              o++
                            )
                              this._processingNodes[o]._seek(t);
                            this._currentTime = t;
                          },
                          get: function() {
                            return this._currentTime;
                          }
                        },
                        {
                          key: "duration",
                          get: function() {
                            for (
                              var e = 0, t = 0;
                              t < this._sourceNodes.length;
                              t++
                            )
                              this._sourceNodes[t].state !==
                                u.SOURCENODESTATE.waiting &&
                                this._sourceNodes[t]._stopTime > e &&
                                (e = this._sourceNodes[t]._stopTime);
                            return e;
                          }
                        },
                        {
                          key: "destination",
                          get: function() {
                            return this._destinationNode;
                          }
                        },
                        {
                          key: "playbackRate",
                          set: function(e) {
                            if (e <= 0)
                              throw new RangeError(
                                "playbackRate must be greater than 0"
                              );
                            var t = !0,
                              r = !1,
                              n = void 0;
                            try {
                              for (
                                var i, a = this._sourceNodes[Symbol.iterator]();
                                !(t = (i = a.next()).done);
                                t = !0
                              ) {
                                var u = i.value;
                                u.constructor.name === o.VIDEOTYPE &&
                                  ((u._globalPlaybackRate = e),
                                  (u._playbackRateUpdated = !0));
                              }
                            } catch (e) {
                              (r = !0), (n = e);
                            } finally {
                              try {
                                !t && a.return && a.return();
                              } finally {
                                if (r) throw n;
                              }
                            }
                            this._playbackRate = e;
                          },
                          get: function() {
                            return this._playbackRate;
                          }
                        },
                        {
                          key: "volume",
                          set: function(e) {
                            var t = !0,
                              r = !1,
                              o = void 0;
                            try {
                              for (
                                var n, i = this._sourceNodes[Symbol.iterator]();
                                !(t = (n = i.next()).done);
                                t = !0
                              ) {
                                var a = n.value;
                                (a instanceof v.default ||
                                  a instanceof h.default) &&
                                  (a.volume = e);
                              }
                            } catch (e) {
                              (r = !0), (o = e);
                            } finally {
                              try {
                                !t && i.return && i.return();
                              } finally {
                                if (r) throw o;
                              }
                            }
                            this._volume = e;
                          },
                          get: function() {
                            return this._volume;
                          }
                        }
                      ],
                      [
                        {
                          key: "DEFINITIONS",
                          get: function() {
                            return O.default;
                          }
                        }
                      ]
                    ),
                    e
                  );
                })();
              (t.default = w),
                (w.STATE = {}),
                (w.STATE.PLAYING = 0),
                (w.STATE.PAUSED = 1),
                (w.STATE.STALLED = 2),
                (w.STATE.ENDED = 3),
                (w.STATE.BROKEN = 4),
                (w.visualiseVideoContextTimeline =
                  r.visualiseVideoContextTimeline),
                (w.visualiseVideoContextGraph = r.visualiseVideoContextGraph),
                (w.createControlFormForNode = r.createControlFormForNode),
                (w.createSigmaGraphDataFromRenderGraph =
                  r.createSigmaGraphDataFromRenderGraph),
                (w.exportToJSON = r.exportToJSON),
                (w.updateablesManager = P),
                (w.importSimpleEDL = r.importSimpleEDL),
                (e.exports = t.default);
            })
              ? o.apply(t, n)
              : o) || (e.exports = i);
    },
    function(e, t, r) {
      var o, n, i;
      (n = [t, r(16), r(17)]),
        void 0 ===
          (i =
            "function" ==
            typeof (o = function(t, r, o) {
              "use strict";
              Object.defineProperty(t, "__esModule", { value: !0 });
              var n = a(r),
                i = a(o);
              function a(e) {
                return e && e.__esModule ? e : { default: e };
              }
              var u = {
                title: "AAF Video Scale Effect",
                description: "A scale effect based on the AAF spec.",
                vertexShader: n.default,
                fragmentShader: i.default,
                properties: {
                  scaleX: { type: "uniform", value: 1 },
                  scaleY: { type: "uniform", value: 1 }
                },
                inputs: ["u_image"]
              };
              (t.default = u), (e.exports = t.default);
            })
              ? o.apply(t, n)
              : o) || (e.exports = i);
    },
    function(e, t) {
      e.exports =
        "attribute vec2 a_position;\nattribute vec2 a_texCoord;\nvarying vec2 v_texCoord;\nvoid main() {\n    gl_Position = vec4(vec2(2.0,2.0)*a_position-vec2(1.0, 1.0), 0.0, 1.0);\n    v_texCoord = a_texCoord;\n}\n";
    },
    function(e, t) {
      e.exports =
        "precision mediump float;\nuniform sampler2D u_image;\nuniform float scaleX;\nuniform float scaleY;\nvarying vec2 v_texCoord;\nvarying float v_progress;\nvoid main(){\n    vec2 pos = vec2(v_texCoord[0]*1.0/scaleX - (1.0/scaleX/2.0 -0.5), v_texCoord[1]*1.0/scaleY - (1.0/scaleY/2.0 -0.5));\n    vec4 color = texture2D(u_image, pos);\n    if (pos[0] < 0.0 || pos[0] > 1.0 || pos[1] < 0.0 || pos[1] > 1.0){\n        color = vec4(0.0,0.0,0.0,0.0);\n    }\n    gl_FragColor = color;\n}\n";
    },
    function(e, t, r) {
      var o, n, i;
      (n = [t, r(19), r(20)]),
        void 0 ===
          (i =
            "function" ==
            typeof (o = function(t, r, o) {
              "use strict";
              Object.defineProperty(t, "__esModule", { value: !0 });
              var n = a(r),
                i = a(o);
              function a(e) {
                return e && e.__esModule ? e : { default: e };
              }
              var u = {
                title: "Cross-Fade",
                description:
                  "A cross-fade effect. Typically used as a transistion.",
                vertexShader: n.default,
                fragmentShader: i.default,
                properties: { mix: { type: "uniform", value: 0 } },
                inputs: ["u_image_a", "u_image_b"]
              };
              (t.default = u), (e.exports = t.default);
            })
              ? o.apply(t, n)
              : o) || (e.exports = i);
    },
    function(e, t) {
      e.exports =
        "attribute vec2 a_position;\nattribute vec2 a_texCoord;\nvarying vec2 v_texCoord;\nvoid main() {\n    gl_Position = vec4(vec2(2.0,2.0)*a_position-vec2(1.0, 1.0), 0.0, 1.0);\n    v_texCoord = a_texCoord;\n}\n";
    },
    function(e, t) {
      e.exports =
        "precision mediump float;\nuniform sampler2D u_image_a;\nuniform sampler2D u_image_b;\nuniform float mix;\nvarying vec2 v_texCoord;\nvarying float v_mix;\nvoid main(){\n    vec4 color_a = texture2D(u_image_a, v_texCoord);\n    vec4 color_b = texture2D(u_image_b, v_texCoord);\n    color_a[0] *= (1.0 - mix);\n    color_a[1] *= (1.0 - mix);\n    color_a[2] *= (1.0 - mix);\n    color_a[3] *= (1.0 - mix);\n    color_b[0] *= mix;\n    color_b[1] *= mix;\n    color_b[2] *= mix;\n    color_b[3] *= mix;\n    gl_FragColor = color_a + color_b;\n}\n";
    },
    function(e, t, r) {
      var o, n, i;
      (n = [t, r(22), r(23)]),
        void 0 ===
          (i =
            "function" ==
            typeof (o = function(t, r, o) {
              "use strict";
              Object.defineProperty(t, "__esModule", { value: !0 });
              var n = a(r),
                i = a(o);
              function a(e) {
                return e && e.__esModule ? e : { default: e };
              }
              var u = {
                title: "Horizontal Wipe",
                description:
                  "A horizontal wipe effect. Typically used as a transistion.",
                vertexShader: n.default,
                fragmentShader: i.default,
                properties: { mix: { type: "uniform", value: 0 } },
                inputs: ["u_image_a", "u_image_b"]
              };
              (t.default = u), (e.exports = t.default);
            })
              ? o.apply(t, n)
              : o) || (e.exports = i);
    },
    function(e, t) {
      e.exports =
        "attribute vec2 a_position;\nattribute vec2 a_texCoord;\nvarying vec2 v_texCoord;\nvoid main() {\n    gl_Position = vec4(vec2(2.0,2.0)*a_position-vec2(1.0, 1.0), 0.0, 1.0);\n    v_texCoord = a_texCoord;\n}\n";
    },
    function(e, t) {
      e.exports =
        "precision mediump float;\nuniform sampler2D u_image_a;\nuniform sampler2D u_image_b;\nuniform float mix;\nvarying vec2 v_texCoord;\nvarying float v_mix;\nvoid main(){\n    vec4 color_a = texture2D(u_image_a, v_texCoord);\n    vec4 color_b = texture2D(u_image_b, v_texCoord);\n    if (v_texCoord[0] > mix){\n        gl_FragColor = color_a;\n    } else {\n        gl_FragColor = color_b;\n    }\n}\n";
    },
    function(e, t, r) {
      var o, n, i;
      (n = [t, r(25), r(26)]),
        void 0 ===
          (i =
            "function" ==
            typeof (o = function(t, r, o) {
              "use strict";
              Object.defineProperty(t, "__esModule", { value: !0 });
              var n = a(r),
                i = a(o);
              function a(e) {
                return e && e.__esModule ? e : { default: e };
              }
              var u = {
                title: "vertical Wipe",
                description:
                  "A vertical wipe effect. Typically used as a transistion.",
                vertexShader: n.default,
                fragmentShader: i.default,
                properties: { mix: { type: "uniform", value: 0 } },
                inputs: ["u_image_a", "u_image_b"]
              };
              (t.default = u), (e.exports = t.default);
            })
              ? o.apply(t, n)
              : o) || (e.exports = i);
    },
    function(e, t) {
      e.exports =
        "attribute vec2 a_position;\nattribute vec2 a_texCoord;\nvarying vec2 v_texCoord;\nvoid main() {\n    gl_Position = vec4(vec2(2.0,2.0)*a_position-vec2(1.0, 1.0), 0.0, 1.0);\n    v_texCoord = a_texCoord;\n}\n";
    },
    function(e, t) {
      e.exports =
        "precision mediump float;\nuniform sampler2D u_image_a;\nuniform sampler2D u_image_b;\nuniform float mix;\nvarying vec2 v_texCoord;\nvarying float v_mix;\nvoid main(){\n    vec4 color_a = texture2D(u_image_a, v_texCoord);\n    vec4 color_b = texture2D(u_image_b, v_texCoord);\n    if (v_texCoord[1] > mix){\n        gl_FragColor = color_a;\n    } else {\n        gl_FragColor = color_b;\n    }\n}\n";
    },
    function(e, t, r) {
      var o, n, i;
      (n = [t, r(28), r(29)]),
        void 0 ===
          (i =
            "function" ==
            typeof (o = function(t, r, o) {
              "use strict";
              Object.defineProperty(t, "__esModule", { value: !0 });
              var n = a(r),
                i = a(o);
              function a(e) {
                return e && e.__esModule ? e : { default: e };
              }
              var u = {
                title: "Random Dissolve",
                description:
                  "A random dissolve effect. Typically used as a transistion.",
                vertexShader: n.default,
                fragmentShader: i.default,
                properties: { mix: { type: "uniform", value: 0 } },
                inputs: ["u_image_a", "u_image_b"]
              };
              (t.default = u), (e.exports = t.default);
            })
              ? o.apply(t, n)
              : o) || (e.exports = i);
    },
    function(e, t) {
      e.exports =
        "attribute vec2 a_position;\nattribute vec2 a_texCoord;\nvarying vec2 v_texCoord;\nvoid main() {\n    gl_Position = vec4(vec2(2.0,2.0)*a_position-vec2(1.0, 1.0), 0.0, 1.0);\n    v_texCoord = a_texCoord;\n}\n";
    },
    function(e, t) {
      e.exports =
        "precision mediump float;\nuniform sampler2D u_image_a;\nuniform sampler2D u_image_b;\nuniform float mix;\nvarying vec2 v_texCoord;\nvarying float v_mix;\nfloat rand(vec2 co){\n    return fract(sin(dot(co.xy ,vec2(12.9898,78.233))) * 43758.5453);\n}\nvoid main(){\n    vec4 color_a = texture2D(u_image_a, v_texCoord);\n    vec4 color_b = texture2D(u_image_b, v_texCoord);\n    if (clamp(rand(v_texCoord),  0.01, 1.001) > mix){\n        gl_FragColor = color_a;\n    } else {\n        gl_FragColor = color_b;\n    }\n}\n";
    },
    function(e, t, r) {
      var o, n, i;
      (n = [t, r(31), r(32)]),
        void 0 ===
          (i =
            "function" ==
            typeof (o = function(t, r, o) {
              "use strict";
              Object.defineProperty(t, "__esModule", { value: !0 });
              var n = a(r),
                i = a(o);
              function a(e) {
                return e && e.__esModule ? e : { default: e };
              }
              var u = {
                title: "To Color And Back Fade",
                description:
                  "A fade to black and back effect. Setting mix to 0.5 is a fully solid color frame. Typically used as a transistion.",
                vertexShader: n.default,
                fragmentShader: i.default,
                properties: {
                  mix: { type: "uniform", value: 0 },
                  color: { type: "uniform", value: [0, 0, 0, 0] }
                },
                inputs: ["u_image_a", "u_image_b"]
              };
              (t.default = u), (e.exports = t.default);
            })
              ? o.apply(t, n)
              : o) || (e.exports = i);
    },
    function(e, t) {
      e.exports =
        "attribute vec2 a_position;\nattribute vec2 a_texCoord;\nvarying vec2 v_texCoord;\nvoid main() {\n    gl_Position = vec4(vec2(2.0,2.0)*a_position-vec2(1.0, 1.0), 0.0, 1.0);\n    v_texCoord = a_texCoord;\n}\n";
    },
    function(e, t) {
      e.exports =
        "precision mediump float;\nuniform sampler2D u_image_a;\nuniform sampler2D u_image_b;\nuniform float mix;\nuniform vec4 color;\nvarying vec2 v_texCoord;\nvarying float v_mix;\nvoid main(){\n    vec4 color_a = texture2D(u_image_a, v_texCoord);\n    vec4 color_b = texture2D(u_image_b, v_texCoord);\n    float mix_amount = (mix *2.0) - 1.0;\n    if(mix_amount < 0.0){\n        gl_FragColor = abs(mix_amount) * color_a + (1.0 - abs(mix_amount)) * color;\n    } else {\n        gl_FragColor = mix_amount * color_b + (1.0 - mix_amount) * color;\n    }\n}\n";
    },
    function(e, t, r) {
      var o, n, i;
      (n = [t, r(34), r(35)]),
        void 0 ===
          (i =
            "function" ==
            typeof (o = function(t, r, o) {
              "use strict";
              Object.defineProperty(t, "__esModule", { value: !0 });
              var n = a(r),
                i = a(o);
              function a(e) {
                return e && e.__esModule ? e : { default: e };
              }
              var u = {
                title: "Star Wipe Fade",
                description:
                  "A classic star wipe transistion. Typically used as a transistion.",
                vertexShader: n.default,
                fragmentShader: i.default,
                properties: { mix: { type: "uniform", value: 1 } },
                inputs: ["u_image_a", "u_image_b"]
              };
              (t.default = u), (e.exports = t.default);
            })
              ? o.apply(t, n)
              : o) || (e.exports = i);
    },
    function(e, t) {
      e.exports =
        "attribute vec2 a_position;\nattribute vec2 a_texCoord;\nvarying vec2 v_texCoord;\nvoid main() {\n    gl_Position = vec4(vec2(2.0,2.0)*a_position-vec2(1.0, 1.0), 0.0, 1.0);\n    v_texCoord = a_texCoord;\n}\n";
    },
    function(e, t) {
      e.exports =
        "precision mediump float;\nuniform sampler2D u_image_a;\nuniform sampler2D u_image_b;\nuniform float mix;\nvarying vec2 v_texCoord;\nvarying float v_mix;\nfloat sign (vec2 p1, vec2 p2, vec2 p3){\n    return (p1[0] - p3[0]) * (p2[1] - p3[1]) - (p2[0] - p3[0]) * (p1[1] - p3[1]);\n}\nbool pointInTriangle(vec2 pt, vec2 v1, vec2 v2, vec2 v3){\n    bool b1, b2, b3;\n    b1 = sign(pt, v1, v2) < 0.0;\n    b2 = sign(pt, v2, v3) < 0.0;\n    b3 = sign(pt, v3, v1) < 0.0;\n    return ((b1 == b2) && (b2 == b3));\n}\nvec2 rotatePointAboutPoint(vec2 point, vec2 pivot, float angle){\n    float s = sin(angle);\n    float c = cos(angle);\n    float x = point[0] - pivot[0];\n    float y = point[1] - pivot[1];\n    float new_x = x * c - y * s;\n    float new_y = x * s + y * c;\n    return vec2(new_x + pivot[0], new_y+pivot[1]);\n}\n\nvoid main(){\n    vec4 color_a = texture2D(u_image_b, v_texCoord);\n    vec4 color_b = texture2D(u_image_a, v_texCoord);\n    vec2 t0_p0,t0_p1,t0_p2,t1_p0,t1_p1,t1_p2,t2_p0,t2_p1,t2_p2,t3_p0,t3_p1,t3_p2;\n    vec2 t4_p0,t4_p1,t4_p2,t5_p0,t5_p1,t5_p2,t6_p0,t6_p1,t6_p2,t7_p0,t7_p1,t7_p2;\n\n\n    t0_p0 = vec2(0.0, 0.25) * clamp(mix,0.0,1.0) * 2.0 + vec2(0.5,0.5);\n    t0_p1 = vec2(0.0, -0.25) * clamp(mix,0.0,1.0) * 2.0 + vec2(0.5,0.5);\n    t0_p2 = vec2(1.0, 0.0) * clamp(mix,0.0,1.0) * 2.0 + vec2(0.5,0.5);\n\n    t1_p0 = rotatePointAboutPoint(t0_p0, vec2(0.5,0.5), 0.7854);\n    t1_p1 = rotatePointAboutPoint(t0_p1, vec2(0.5,0.5), 0.7854);\n    t1_p2 = rotatePointAboutPoint(t0_p2, vec2(0.5,0.5), 0.7854);\n\n    t2_p0 = rotatePointAboutPoint(t0_p0, vec2(0.5,0.5), 0.7854 * 2.0);\n    t2_p1 = rotatePointAboutPoint(t0_p1, vec2(0.5,0.5), 0.7854 * 2.0);\n    t2_p2 = rotatePointAboutPoint(t0_p2, vec2(0.5,0.5), 0.7854 * 2.0);\n\n    t3_p0 = rotatePointAboutPoint(t0_p0, vec2(0.5,0.5), 0.7854 * 3.0);\n    t3_p1 = rotatePointAboutPoint(t0_p1, vec2(0.5,0.5), 0.7854 * 3.0);\n    t3_p2 = rotatePointAboutPoint(t0_p2, vec2(0.5,0.5), 0.7854 * 3.0);\n\n    t4_p0 = rotatePointAboutPoint(t0_p0, vec2(0.5,0.5), 0.7854 * 4.0);\n    t4_p1 = rotatePointAboutPoint(t0_p1, vec2(0.5,0.5), 0.7854 * 4.0);\n    t4_p2 = rotatePointAboutPoint(t0_p2, vec2(0.5,0.5), 0.7854 * 4.0);\n\n    t5_p0 = rotatePointAboutPoint(t0_p0, vec2(0.5,0.5), 0.7854 * 5.0);\n    t5_p1 = rotatePointAboutPoint(t0_p1, vec2(0.5,0.5), 0.7854 * 5.0);\n    t5_p2 = rotatePointAboutPoint(t0_p2, vec2(0.5,0.5), 0.7854 * 5.0);\n\n    t6_p0 = rotatePointAboutPoint(t0_p0, vec2(0.5,0.5), 0.7854 * 6.0);\n    t6_p1 = rotatePointAboutPoint(t0_p1, vec2(0.5,0.5), 0.7854 * 6.0);\n    t6_p2 = rotatePointAboutPoint(t0_p2, vec2(0.5,0.5), 0.7854 * 6.0);\n\n    t7_p0 = rotatePointAboutPoint(t0_p0, vec2(0.5,0.5), 0.7854 * 7.0);\n    t7_p1 = rotatePointAboutPoint(t0_p1, vec2(0.5,0.5), 0.7854 * 7.0);\n    t7_p2 = rotatePointAboutPoint(t0_p2, vec2(0.5,0.5), 0.7854 * 7.0);\n\n    if(mix > 0.99){\n        gl_FragColor = color_a;\n        return;\n    }\n    if(mix < 0.01){\n        gl_FragColor = color_b;\n        return;\n    }\n    if(pointInTriangle(v_texCoord, t0_p0, t0_p1, t0_p2) || pointInTriangle(v_texCoord, t1_p0, t1_p1, t1_p2) || pointInTriangle(v_texCoord, t2_p0, t2_p1, t2_p2) || pointInTriangle(v_texCoord, t3_p0, t3_p1, t3_p2) || pointInTriangle(v_texCoord, t4_p0, t4_p1, t4_p2) || pointInTriangle(v_texCoord, t5_p0, t5_p1, t5_p2) || pointInTriangle(v_texCoord, t6_p0, t6_p1, t6_p2) || pointInTriangle(v_texCoord, t7_p0, t7_p1, t7_p2)){\n        gl_FragColor = color_a;\n    } else {\n        gl_FragColor = color_b;\n    }\n}\n";
    },
    function(e, t, r) {
      var o, n, i;
      (n = [t, r(37), r(38)]),
        void 0 ===
          (i =
            "function" ==
            typeof (o = function(t, r, o) {
              "use strict";
              Object.defineProperty(t, "__esModule", { value: !0 });
              var n = a(r),
                i = a(o);
              function a(e) {
                return e && e.__esModule ? e : { default: e };
              }
              var u = {
                title: "Combine",
                description:
                  "A basic effect which renders the input to the output, Typically used as a combine node for layering up media with alpha transparency.",
                vertexShader: n.default,
                fragmentShader: i.default,
                properties: { a: { type: "uniform", value: 0 } },
                inputs: ["u_image"]
              };
              (t.default = u), (e.exports = t.default);
            })
              ? o.apply(t, n)
              : o) || (e.exports = i);
    },
    function(e, t) {
      e.exports =
        "attribute vec2 a_position;\nattribute vec2 a_texCoord;\nvarying vec2 v_texCoord;\nvoid main() {\n    gl_Position = vec4(vec2(2.0,2.0)*a_position-vec2(1.0, 1.0), 0.0, 1.0);\n    v_texCoord = a_texCoord;\n}\n";
    },
    function(e, t) {
      e.exports =
        "precision mediump float;\nuniform sampler2D u_image;\nuniform float a;\nvarying vec2 v_texCoord;\nvarying float v_mix;\nvoid main(){\n    vec4 color = texture2D(u_image, v_texCoord);\n    gl_FragColor = color;\n}\n";
    },
    function(e, t, r) {
      var o, n, i;
      (n = [t, r(40), r(41)]),
        void 0 ===
          (i =
            "function" ==
            typeof (o = function(t, r, o) {
              "use strict";
              Object.defineProperty(t, "__esModule", { value: !0 });
              var n = a(r),
                i = a(o);
              function a(e) {
                return e && e.__esModule ? e : { default: e };
              }
              var u = {
                title: "Color Threshold",
                description:
                  "Turns all pixels with a greater value than the specified threshold transparent.",
                vertexShader: n.default,
                fragmentShader: i.default,
                properties: {
                  a: { type: "uniform", value: 0 },
                  colorAlphaThreshold: { type: "uniform", value: [0, 0.55, 0] }
                },
                inputs: ["u_image"]
              };
              (t.default = u), (e.exports = t.default);
            })
              ? o.apply(t, n)
              : o) || (e.exports = i);
    },
    function(e, t) {
      e.exports =
        "attribute vec2 a_position;\nattribute vec2 a_texCoord;\nvarying vec2 v_texCoord;\nvoid main() {\n    gl_Position = vec4(vec2(2.0,2.0)*a_position-vec2(1.0, 1.0), 0.0, 1.0);\n    v_texCoord = a_texCoord;\n}\n";
    },
    function(e, t) {
      e.exports =
        "precision mediump float;\nuniform sampler2D u_image;\nuniform float a;\nuniform vec3 colorAlphaThreshold;\nvarying vec2 v_texCoord;\nvarying float v_mix;\nvoid main(){\n    vec4 color = texture2D(u_image, v_texCoord);\n    if (color[0] > colorAlphaThreshold[0] && color[1]> colorAlphaThreshold[1] && color[2]> colorAlphaThreshold[2]){\n        color = vec4(0.0,0.0,0.0,0.0);\n    }\n    gl_FragColor = color;\n}\n";
    },
    function(e, t, r) {
      var o, n, i;
      (n = [t, r(43), r(44)]),
        void 0 ===
          (i =
            "function" ==
            typeof (o = function(t, r, o) {
              "use strict";
              Object.defineProperty(t, "__esModule", { value: !0 });
              var n = a(r),
                i = a(o);
              function a(e) {
                return e && e.__esModule ? e : { default: e };
              }
              var u = {
                title: "Monochrome",
                description:
                  "Change images to a single chroma (e.g can be used to make a black & white filter). Input color mix and output color mix can be adjusted.",
                vertexShader: n.default,
                fragmentShader: i.default,
                properties: {
                  inputMix: { type: "uniform", value: [0.4, 0.6, 0.2] },
                  outputMix: { type: "uniform", value: [1, 1, 1] }
                },
                inputs: ["u_image"]
              };
              (t.default = u), (e.exports = t.default);
            })
              ? o.apply(t, n)
              : o) || (e.exports = i);
    },
    function(e, t) {
      e.exports =
        "attribute vec2 a_position;\nattribute vec2 a_texCoord;\nvarying vec2 v_texCoord;\nvoid main() {\n    gl_Position = vec4(vec2(2.0,2.0)*a_position-vec2(1.0, 1.0), 0.0, 1.0);\n    v_texCoord = a_texCoord;\n}\n";
    },
    function(e, t) {
      e.exports =
        "precision mediump float;\nuniform sampler2D u_image;\nuniform vec3 inputMix;\nuniform vec3 outputMix;\nvarying vec2 v_texCoord;\nvarying float v_mix;\nvoid main(){\n    vec4 color = texture2D(u_image, v_texCoord);\n    float mono = color[0]*inputMix[0] + color[1]*inputMix[1] + color[2]*inputMix[2];\n    color[0] = mono * outputMix[0];\n    color[1] = mono * outputMix[1];\n    color[2] = mono * outputMix[2];\n    gl_FragColor = color;\n}\n";
    },
    function(e, t, r) {
      var o, n, i;
      (n = [t, r(46), r(47)]),
        void 0 ===
          (i =
            "function" ==
            typeof (o = function(t, r, o) {
              "use strict";
              Object.defineProperty(t, "__esModule", { value: !0 });
              var n = a(r),
                i = a(o);
              function a(e) {
                return e && e.__esModule ? e : { default: e };
              }
              var u = {
                title: "Horizontal Blur",
                description:
                  "A horizontal blur effect. Adpated from http://xissburg.com/faster-gaussian-blur-in-glsl/",
                vertexShader: n.default,
                fragmentShader: i.default,
                properties: { blurAmount: { type: "uniform", value: 1 } },
                inputs: ["u_image"]
              };
              (t.default = u), (e.exports = t.default);
            })
              ? o.apply(t, n)
              : o) || (e.exports = i);
    },
    function(e, t) {
      e.exports =
        "attribute vec2 a_position;\nattribute vec2 a_texCoord;\nuniform float blurAmount;\nvarying vec2 v_texCoord;\nvarying vec2 v_blurTexCoords[14];\nvoid main() {\n    gl_Position = vec4(vec2(2.0,2.0)*a_position-vec2(1.0, 1.0), 0.0, 1.0);\n    v_texCoord = a_texCoord;\n    v_blurTexCoords[ 0] = v_texCoord + vec2(-0.028 * blurAmount, 0.0);\n    v_blurTexCoords[ 1] = v_texCoord + vec2(-0.024 * blurAmount, 0.0);\n    v_blurTexCoords[ 2] = v_texCoord + vec2(-0.020 * blurAmount, 0.0);\n    v_blurTexCoords[ 3] = v_texCoord + vec2(-0.016 * blurAmount, 0.0);\n    v_blurTexCoords[ 4] = v_texCoord + vec2(-0.012 * blurAmount, 0.0);\n    v_blurTexCoords[ 5] = v_texCoord + vec2(-0.008 * blurAmount, 0.0);\n    v_blurTexCoords[ 6] = v_texCoord + vec2(-0.004 * blurAmount, 0.0);\n    v_blurTexCoords[ 7] = v_texCoord + vec2( 0.004 * blurAmount, 0.0);\n    v_blurTexCoords[ 8] = v_texCoord + vec2( 0.008 * blurAmount, 0.0);\n    v_blurTexCoords[ 9] = v_texCoord + vec2( 0.012 * blurAmount, 0.0);\n    v_blurTexCoords[10] = v_texCoord + vec2( 0.016 * blurAmount, 0.0);\n    v_blurTexCoords[11] = v_texCoord + vec2( 0.020 * blurAmount, 0.0);\n    v_blurTexCoords[12] = v_texCoord + vec2( 0.024 * blurAmount, 0.0);\n    v_blurTexCoords[13] = v_texCoord + vec2( 0.028 * blurAmount, 0.0);\n}\n";
    },
    function(e, t) {
      e.exports =
        "precision mediump float;\nuniform sampler2D u_image;\nvarying vec2 v_texCoord;\nvarying vec2 v_blurTexCoords[14];\nvoid main(){\n    gl_FragColor = vec4(0.0);\n    gl_FragColor += texture2D(u_image, v_blurTexCoords[ 0])*0.0044299121055113265;\n    gl_FragColor += texture2D(u_image, v_blurTexCoords[ 1])*0.00895781211794;\n    gl_FragColor += texture2D(u_image, v_blurTexCoords[ 2])*0.0215963866053;\n    gl_FragColor += texture2D(u_image, v_blurTexCoords[ 3])*0.0443683338718;\n    gl_FragColor += texture2D(u_image, v_blurTexCoords[ 4])*0.0776744219933;\n    gl_FragColor += texture2D(u_image, v_blurTexCoords[ 5])*0.115876621105;\n    gl_FragColor += texture2D(u_image, v_blurTexCoords[ 6])*0.147308056121;\n    gl_FragColor += texture2D(u_image, v_texCoord         )*0.159576912161;\n    gl_FragColor += texture2D(u_image, v_blurTexCoords[ 7])*0.147308056121;\n    gl_FragColor += texture2D(u_image, v_blurTexCoords[ 8])*0.115876621105;\n    gl_FragColor += texture2D(u_image, v_blurTexCoords[ 9])*0.0776744219933;\n    gl_FragColor += texture2D(u_image, v_blurTexCoords[10])*0.0443683338718;\n    gl_FragColor += texture2D(u_image, v_blurTexCoords[11])*0.0215963866053;\n    gl_FragColor += texture2D(u_image, v_blurTexCoords[12])*0.00895781211794;\n    gl_FragColor += texture2D(u_image, v_blurTexCoords[13])*0.0044299121055113265;\n}\n";
    },
    function(e, t, r) {
      var o, n, i;
      (n = [t, r(49), r(50)]),
        void 0 ===
          (i =
            "function" ==
            typeof (o = function(t, r, o) {
              "use strict";
              Object.defineProperty(t, "__esModule", { value: !0 });
              var n = a(r),
                i = a(o);
              function a(e) {
                return e && e.__esModule ? e : { default: e };
              }
              var u = {
                title: "Vertical Blur",
                description:
                  "A vertical blur effect. Adpated from http://xissburg.com/faster-gaussian-blur-in-glsl/",
                vertexShader: n.default,
                fragmentShader: i.default,
                properties: { blurAmount: { type: "uniform", value: 1 } },
                inputs: ["u_image"]
              };
              (t.default = u), (e.exports = t.default);
            })
              ? o.apply(t, n)
              : o) || (e.exports = i);
    },
    function(e, t) {
      e.exports =
        "attribute vec2 a_position;\nattribute vec2 a_texCoord;\nvarying vec2 v_texCoord;\nuniform float blurAmount;\nvarying vec2 v_blurTexCoords[14];\nvoid main() {\n    gl_Position = vec4(vec2(2.0,2.0)*a_position-vec2(1.0, 1.0), 0.0, 1.0);\n    v_texCoord = a_texCoord;\n    v_blurTexCoords[ 0] = v_texCoord + vec2(0.0,-0.028 * blurAmount);\n    v_blurTexCoords[ 1] = v_texCoord + vec2(0.0,-0.024 * blurAmount);\n    v_blurTexCoords[ 2] = v_texCoord + vec2(0.0,-0.020 * blurAmount);\n    v_blurTexCoords[ 3] = v_texCoord + vec2(0.0,-0.016 * blurAmount);\n    v_blurTexCoords[ 4] = v_texCoord + vec2(0.0,-0.012 * blurAmount);\n    v_blurTexCoords[ 5] = v_texCoord + vec2(0.0,-0.008 * blurAmount);\n    v_blurTexCoords[ 6] = v_texCoord + vec2(0.0,-0.004 * blurAmount);\n    v_blurTexCoords[ 7] = v_texCoord + vec2(0.0, 0.004 * blurAmount);\n    v_blurTexCoords[ 8] = v_texCoord + vec2(0.0, 0.008 * blurAmount);\n    v_blurTexCoords[ 9] = v_texCoord + vec2(0.0, 0.012 * blurAmount);\n    v_blurTexCoords[10] = v_texCoord + vec2(0.0, 0.016 * blurAmount);\n    v_blurTexCoords[11] = v_texCoord + vec2(0.0, 0.020 * blurAmount);\n    v_blurTexCoords[12] = v_texCoord + vec2(0.0, 0.024 * blurAmount);\n    v_blurTexCoords[13] = v_texCoord + vec2(0.0, 0.028 * blurAmount);\n}\n";
    },
    function(e, t) {
      e.exports =
        "precision mediump float;\nuniform sampler2D u_image;\nvarying vec2 v_texCoord;\nvarying vec2 v_blurTexCoords[14];\nvoid main(){\n    gl_FragColor = vec4(0.0);\n    gl_FragColor += texture2D(u_image, v_blurTexCoords[ 0])*0.0044299121055113265;\n    gl_FragColor += texture2D(u_image, v_blurTexCoords[ 1])*0.00895781211794;\n    gl_FragColor += texture2D(u_image, v_blurTexCoords[ 2])*0.0215963866053;\n    gl_FragColor += texture2D(u_image, v_blurTexCoords[ 3])*0.0443683338718;\n    gl_FragColor += texture2D(u_image, v_blurTexCoords[ 4])*0.0776744219933;\n    gl_FragColor += texture2D(u_image, v_blurTexCoords[ 5])*0.115876621105;\n    gl_FragColor += texture2D(u_image, v_blurTexCoords[ 6])*0.147308056121;\n    gl_FragColor += texture2D(u_image, v_texCoord         )*0.159576912161;\n    gl_FragColor += texture2D(u_image, v_blurTexCoords[ 7])*0.147308056121;\n    gl_FragColor += texture2D(u_image, v_blurTexCoords[ 8])*0.115876621105;\n    gl_FragColor += texture2D(u_image, v_blurTexCoords[ 9])*0.0776744219933;\n    gl_FragColor += texture2D(u_image, v_blurTexCoords[10])*0.0443683338718;\n    gl_FragColor += texture2D(u_image, v_blurTexCoords[11])*0.0215963866053;\n    gl_FragColor += texture2D(u_image, v_blurTexCoords[12])*0.00895781211794;\n    gl_FragColor += texture2D(u_image, v_blurTexCoords[13])*0.0044299121055113265;\n}\n";
    },
    function(e, t, r) {
      var o, n, i;
      (n = [t, r(52), r(53)]),
        void 0 ===
          (i =
            "function" ==
            typeof (o = function(t, r, o) {
              "use strict";
              Object.defineProperty(t, "__esModule", { value: !0 });
              var n = a(r),
                i = a(o);
              function a(e) {
                return e && e.__esModule ? e : { default: e };
              }
              var u = {
                title: "AAF Video Flop Effect",
                description:
                  "A flop effect based on the AAF spec. Mirrors the image in the y-axis",
                vertexShader: n.default,
                fragmentShader: i.default,
                properties: {},
                inputs: ["u_image"]
              };
              (t.default = u), (e.exports = t.default);
            })
              ? o.apply(t, n)
              : o) || (e.exports = i);
    },
    function(e, t) {
      e.exports =
        "attribute vec2 a_position;\nattribute vec2 a_texCoord;\nvarying vec2 v_texCoord;\nvoid main() {\n    gl_Position = vec4(vec2(2.0,2.0)*a_position-vec2(1.0, 1.0), 0.0, 1.0);\n    v_texCoord = a_texCoord;\n}\n";
    },
    function(e, t) {
      e.exports =
        "precision mediump float;\nuniform sampler2D u_image;\nvarying vec2 v_texCoord;\nvoid main(){\n    vec2 coord = vec2(1.0 - v_texCoord[0] ,v_texCoord[1]);\n    vec4 color = texture2D(u_image, coord);\n    gl_FragColor = color;\n}\n";
    },
    function(e, t, r) {
      var o, n, i;
      (n = [t, r(55), r(56)]),
        void 0 ===
          (i =
            "function" ==
            typeof (o = function(t, r, o) {
              "use strict";
              Object.defineProperty(t, "__esModule", { value: !0 });
              var n = a(r),
                i = a(o);
              function a(e) {
                return e && e.__esModule ? e : { default: e };
              }
              var u = {
                title: "AAF Video Flip Effect",
                description:
                  "A flip effect based on the AAF spec. Mirrors the image in the x-axis",
                vertexShader: n.default,
                fragmentShader: i.default,
                properties: {},
                inputs: ["u_image"]
              };
              (t.default = u), (e.exports = t.default);
            })
              ? o.apply(t, n)
              : o) || (e.exports = i);
    },
    function(e, t) {
      e.exports =
        "attribute vec2 a_position;\nattribute vec2 a_texCoord;\nvarying vec2 v_texCoord;\nvoid main() {\n    gl_Position = vec4(vec2(2.0,2.0)*a_position-vec2(1.0, 1.0), 0.0, 1.0);\n    v_texCoord = a_texCoord;\n}\n";
    },
    function(e, t) {
      e.exports =
        "precision mediump float;\nuniform sampler2D u_image;\nvarying vec2 v_texCoord;\nvoid main(){\n    vec2 coord = vec2(v_texCoord[0] ,1.0 - v_texCoord[1]);\n    vec4 color = texture2D(u_image, coord);\n    gl_FragColor = color;\n}\n";
    },
    function(e, t, r) {
      var o, n, i;
      (n = [t, r(58), r(59)]),
        void 0 ===
          (i =
            "function" ==
            typeof (o = function(t, r, o) {
              "use strict";
              Object.defineProperty(t, "__esModule", { value: !0 });
              var n = a(r),
                i = a(o);
              function a(e) {
                return e && e.__esModule ? e : { default: e };
              }
              var u = {
                title: "AAF Video Position Effect",
                description: "A position effect based on the AAF spec.",
                vertexShader: n.default,
                fragmentShader: i.default,
                properties: {
                  positionOffsetX: { type: "uniform", value: 0 },
                  positionOffsetY: { type: "uniform", value: 0 }
                },
                inputs: ["u_image"]
              };
              (t.default = u), (e.exports = t.default);
            })
              ? o.apply(t, n)
              : o) || (e.exports = i);
    },
    function(e, t) {
      e.exports =
        "attribute vec2 a_position;\nattribute vec2 a_texCoord;\nvarying vec2 v_texCoord;\nvoid main() {\n    gl_Position = vec4(vec2(2.0,2.0)*a_position-vec2(1.0, 1.0), 0.0, 1.0);\n    v_texCoord = a_texCoord;\n}\n";
    },
    function(e, t) {
      e.exports =
        "precision mediump float;\nuniform sampler2D u_image;\nuniform float positionOffsetX;\nuniform float positionOffsetY;\nvarying vec2 v_texCoord;\nvarying float v_progress;\nvoid main(){\n    vec2 pos = vec2(v_texCoord[0] - positionOffsetX/2.0, v_texCoord[1] -  positionOffsetY/2.0);\n    vec4 color = texture2D(u_image, pos);\n    if (pos[0] < 0.0 || pos[0] > 1.0 || pos[1] < 0.0 || pos[1] > 1.0){\n        color = vec4(0.0,0.0,0.0,0.0);\n    }\n    gl_FragColor = color;\n}\n";
    },
    function(e, t, r) {
      var o, n, i;
      (n = [t, r(61), r(62)]),
        void 0 ===
          (i =
            "function" ==
            typeof (o = function(t, r, o) {
              "use strict";
              Object.defineProperty(t, "__esModule", { value: !0 });
              var n = a(r),
                i = a(o);
              function a(e) {
                return e && e.__esModule ? e : { default: e };
              }
              var u = {
                title: "AAF Video Crop Effect",
                description: "A crop effect based on the AAF spec.",
                vertexShader: n.default,
                fragmentShader: i.default,
                properties: {
                  cropLeft: { type: "uniform", value: -1 },
                  cropRight: { type: "uniform", value: 1 },
                  cropTop: { type: "uniform", value: -1 },
                  cropBottom: { type: "uniform", value: 1 }
                },
                inputs: ["u_image"]
              };
              (t.default = u), (e.exports = t.default);
            })
              ? o.apply(t, n)
              : o) || (e.exports = i);
    },
    function(e, t) {
      e.exports =
        "attribute vec2 a_position;\nattribute vec2 a_texCoord;\nvarying vec2 v_texCoord;\nvoid main() {\n    gl_Position = vec4(vec2(2.0,2.0)*a_position-vec2(1.0, 1.0), 0.0, 1.0);\n    v_texCoord = a_texCoord;\n}\n";
    },
    function(e, t) {
      e.exports =
        "precision mediump float;\nuniform sampler2D u_image;\nuniform float cropLeft;\nuniform float cropRight;\nuniform float cropTop;\nuniform float cropBottom;\nvarying vec2 v_texCoord;\nvoid main(){\n    vec4 color = texture2D(u_image, v_texCoord);\n    if (v_texCoord[0] < (cropLeft+1.0)/2.0) color = vec4(0.0,0.0,0.0,0.0);\n    if (v_texCoord[0] > (cropRight+1.0)/2.0) color = vec4(0.0,0.0,0.0,0.0);\n    if (v_texCoord[1] < (-cropBottom+1.0)/2.0) color = vec4(0.0,0.0,0.0,0.0);\n    if (v_texCoord[1] > (-cropTop+1.0)/2.0) color = vec4(0.0,0.0,0.0,0.0);\n    gl_FragColor = color;\n}\n";
    },
    function(e, t, r) {
      var o, n, i;
      (n = [t, r(64), r(65)]),
        void 0 ===
          (i =
            "function" ==
            typeof (o = function(t, r, o) {
              "use strict";
              Object.defineProperty(t, "__esModule", { value: !0 });
              var n = a(r),
                i = a(o);
              function a(e) {
                return e && e.__esModule ? e : { default: e };
              }
              var u = {
                title: "Static Dissolve",
                description:
                  "A static dissolve effect. Typically used as a transistion.",
                vertexShader: n.default,
                fragmentShader: i.default,
                properties: { mix: { type: "uniform", value: 0 } },
                inputs: ["u_image_a", "u_image_b"]
              };
              (t.default = u), (e.exports = t.default);
            })
              ? o.apply(t, n)
              : o) || (e.exports = i);
    },
    function(e, t) {
      e.exports =
        "attribute vec2 a_position;\nattribute vec2 a_texCoord;\nvarying vec2 v_texCoord;\nvoid main() {\n    gl_Position = vec4(vec2(2.0,2.0)*a_position-vec2(1.0, 1.0), 0.0, 1.0);\n    v_texCoord = a_texCoord;\n}\n";
    },
    function(e, t) {
      e.exports =
        "precision mediump float;\nuniform sampler2D u_image_a;\nuniform sampler2D u_image_b;\nuniform float mix;\nuniform float currentTime;\nvarying vec2 v_texCoord;\nvarying float v_mix;\nfloat rand(vec2 co, float currentTime){\n    return fract(sin(dot(co.xy,vec2(12.9898,78.233))+currentTime) * 43758.5453);\n}\nvoid main(){\n    vec4 color_a = texture2D(u_image_a, v_texCoord);\n    vec4 color_b = texture2D(u_image_b, v_texCoord);\n    if (clamp(rand(v_texCoord, currentTime),  0.01, 1.001) > mix){\n        gl_FragColor = color_a;\n    } else {\n        gl_FragColor = color_b;\n    }\n}\n";
    },
    function(e, t, r) {
      var o, n, i;
      (n = [t, r(67), r(68)]),
        void 0 ===
          (i =
            "function" ==
            typeof (o = function(t, r, o) {
              "use strict";
              Object.defineProperty(t, "__esModule", { value: !0 });
              var n = a(r),
                i = a(o);
              function a(e) {
                return e && e.__esModule ? e : { default: e };
              }
              var u = {
                title: "Static",
                description:
                  "A static effect to add pseudo random noise to a video",
                vertexShader: n.default,
                fragmentShader: i.default,
                properties: {
                  weight: { type: "uniform", value: [1, 1, 1] },
                  amount: { type: "uniform", value: 1 }
                },
                inputs: ["u_image"]
              };
              (t.default = u), (e.exports = t.default);
            })
              ? o.apply(t, n)
              : o) || (e.exports = i);
    },
    function(e, t) {
      e.exports =
        "attribute vec2 a_position;\nattribute vec2 a_texCoord;\nvarying vec2 v_texCoord;\nvoid main() {\n    gl_Position = vec4(vec2(2.0,2.0)*a_position-vec2(1.0, 1.0), 0.0, 1.0);\n    v_texCoord = a_texCoord;\n}\n";
    },
    function(e, t) {
      e.exports =
        "precision mediump float;\nuniform sampler2D u_image;\nuniform float currentTime;\nuniform float amount;\nvarying vec2 v_texCoord;\nuniform vec3 weight;\nfloat rand(vec2 co, float currentTime){\n    return fract(sin(dot(co.xy,vec2(12.9898,78.233))+currentTime) * 43758.5453);\n}\nvoid main(){\n    vec4 color = texture2D(u_image, v_texCoord);\n    color[0] = color[0] + (2.0*(clamp(rand(v_texCoord, currentTime),  0.01, 1.001)-0.5)) * weight[0] * amount;\n    color[1] = color[1] + (2.0*(clamp(rand(v_texCoord, currentTime),  0.01, 1.001)-0.5)) * weight[1] * amount;\n    color[2] = color[2] + (2.0*(clamp(rand(v_texCoord, currentTime),  0.01, 1.001)-0.5)) * weight[2] *amount;\n    gl_FragColor = color;\n}\n";
    },
    function(e, t, r) {
      var o, n, i;
      (n = [t, r(70), r(71)]),
        void 0 ===
          (i =
            "function" ==
            typeof (o = function(t, r, o) {
              "use strict";
              Object.defineProperty(t, "__esModule", { value: !0 });
              var n = a(r),
                i = a(o);
              function a(e) {
                return e && e.__esModule ? e : { default: e };
              }
              var u = {
                title: "Dream-Fade",
                description:
                  "A wobbly dream effect. Typically used as a transistion.",
                vertexShader: n.default,
                fragmentShader: i.default,
                properties: { mix: { type: "uniform", value: 0 } },
                inputs: ["u_image_a", "u_image_b"]
              };
              (t.default = u), (e.exports = t.default);
            })
              ? o.apply(t, n)
              : o) || (e.exports = i);
    },
    function(e, t) {
      e.exports =
        "attribute vec2 a_position;\nattribute vec2 a_texCoord;\nvarying vec2 v_texCoord;\nvoid main() {\n    gl_Position = vec4(vec2(2.0,2.0)*a_position-vec2(1.0, 1.0), 0.0, 1.0);\n    v_texCoord = a_texCoord;\n}\n";
    },
    function(e, t) {
      e.exports =
        "precision mediump float;\nuniform sampler2D u_image_a;\nuniform sampler2D u_image_b;\nuniform float mix;\nvarying vec2 v_texCoord;\nvarying float v_mix;\nvoid main(){\n    float wobble = 1.0 - abs((mix*2.0)-1.0);\n    vec2 pos = vec2(v_texCoord[0] + ((sin(v_texCoord[1]*(10.0*wobble*3.14) + wobble*10.0)/13.0)), v_texCoord[1]);\n    vec4 color_a = texture2D(u_image_a, pos);\n    vec4 color_b = texture2D(u_image_b, pos);\n    color_a[0] *= (1.0 - mix);\n    color_a[1] *= (1.0 - mix);\n    color_a[2] *= (1.0 - mix);\n    color_a[3] *= (1.0 - mix);\n    color_b[0] *= mix;\n    color_b[1] *= mix;\n    color_b[2] *= mix;\n    color_b[3] *= mix;\n    gl_FragColor = color_a + color_b;\n}\n";
    },
    function(e, t, r) {
      var o, n, i;
      (n = [t, r(73), r(74)]),
        void 0 ===
          (i =
            "function" ==
            typeof (o = function(t, r, o) {
              "use strict";
              Object.defineProperty(t, "__esModule", { value: !0 });
              var n = a(r),
                i = a(o);
              function a(e) {
                return e && e.__esModule ? e : { default: e };
              }
              var u = {
                title: "Opacity",
                description: "Sets the opacity of an input.",
                vertexShader: n.default,
                fragmentShader: i.default,
                properties: { opacity: { type: "uniform", value: 0.7 } },
                inputs: ["u_image"]
              };
              (t.default = u), (e.exports = t.default);
            })
              ? o.apply(t, n)
              : o) || (e.exports = i);
    },
    function(e, t) {
      e.exports =
        "attribute vec2 a_position;\nattribute vec2 a_texCoord;\nvarying vec2 v_texCoord;\nvoid main() {\n    gl_Position = vec4(vec2(2.0,2.0)*a_position-vec2(1.0, 1.0), 0.0, 1.0);\n    v_texCoord = a_texCoord;\n}\n";
    },
    function(e, t) {
      e.exports =
        "precision mediump float;\nuniform sampler2D u_image;\nuniform float opacity;\nvarying vec2 v_texCoord;\nvarying float v_opacity;\nvoid main(){\n    vec4 color = texture2D(u_image, v_texCoord);\n    color[3] *= opacity;\n    gl_FragColor = color;\n}\n";
    },
    function(e, t, r) {
      var o, n, i;
      (n = [t, r(76), r(77)]),
        void 0 ===
          (i =
            "function" ==
            typeof (o = function(t, r, o) {
              "use strict";
              Object.defineProperty(t, "__esModule", { value: !0 });
              var n = a(r),
                i = a(o);
              function a(e) {
                return e && e.__esModule ? e : { default: e };
              }
              var u = {
                title: "Primer Simple Crop",
                description: "A simple crop processors for primer",
                vertexShader: n.default,
                fragmentShader: i.default,
                properties: {
                  x: { type: "uniform", value: 0 },
                  y: { type: "uniform", value: 0 },
                  width: { type: "uniform", value: 1 },
                  height: { type: "uniform", value: 1 }
                },
                inputs: ["u_image"]
              };
              (t.default = u), (e.exports = t.default);
            })
              ? o.apply(t, n)
              : o) || (e.exports = i);
    },
    function(e, t) {
      e.exports =
        "attribute vec2 a_position;\nattribute vec2 a_texCoord;\nvarying vec2 v_texCoord;\nvoid main() {\n    gl_Position = vec4(vec2(2.0,2.0)*a_position-vec2(1.0, 1.0), 0.0, 1.0);\n    v_texCoord = a_texCoord;\n}\n";
    },
    function(e, t) {
      e.exports =
        "precision mediump float;\nuniform sampler2D u_image;\nuniform float x;\nuniform float y;\nuniform float width;\nuniform float height;\nvarying vec2 v_texCoord;\nvarying float v_progress;\nvoid main(){\n    vec2 pos = (((v_texCoord)*vec2(width, height)) + vec2(0, 1.0-height)) +vec2(x,-y);\n    vec4 color = texture2D(u_image, pos);\n    if (pos[0] < 0.0 || pos[0] > 1.0 || pos[1] < 0.0 || pos[1] > 1.0){\n        color = vec4(0.0,0.0,0.0,0.0);\n    }\n    gl_FragColor = color;\n}\n";
    },
    function(e, t) {
      e.exports =
        "precision mediump float;\nuniform sampler2D u_image;\nvarying vec2 v_texCoord;\nvarying float v_progress;\nvoid main(){\n    gl_FragColor = texture2D(u_image, v_texCoord);\n}\n";
    },
    function(e, t) {
      e.exports =
        "attribute vec2 a_position;\nattribute vec2 a_texCoord;\nvarying vec2 v_texCoord;\nvoid main() {\n    gl_Position = vec4(vec2(2.0,2.0)*a_position-vec2(1.0, 1.0), 0.0, 1.0);\n    v_texCoord = a_texCoord;\n}\n";
    },
    function(e, t, r) {
      var o, n, i;
      (n = [t, r(6)]),
        void 0 ===
          (i =
            "function" ==
            typeof (o = function(e, t) {
              "use strict";
              Object.defineProperty(e, "__esModule", { value: !0 }),
                (e.AUDIOTYPE = void 0);
              var r,
                o = (r = t) && r.__esModule ? r : { default: r },
                n = (function() {
                  function e(e, t) {
                    for (var r = 0; r < t.length; r++) {
                      var o = t[r];
                      (o.enumerable = o.enumerable || !1),
                        (o.configurable = !0),
                        "value" in o && (o.writable = !0),
                        Object.defineProperty(e, o.key, o);
                    }
                  }
                  return function(t, r, o) {
                    return r && e(t.prototype, r), o && e(t, o), t;
                  };
                })(),
                i = "AudioNode",
                a = (function(e) {
                  function t() {
                    !(function(e, t) {
                      if (!(e instanceof t))
                        throw new TypeError(
                          "Cannot call a class as a function"
                        );
                    })(this, t);
                    var e = (function(e, t) {
                      if (!e)
                        throw new ReferenceError(
                          "this hasn't been initialised - super() hasn't been called"
                        );
                      return !t ||
                        ("object" != typeof t && "function" != typeof t)
                        ? e
                        : t;
                    })(
                      this,
                      (t.__proto__ || Object.getPrototypeOf(t)).apply(
                        this,
                        arguments
                      )
                    );
                    return (e._displayName = i), (e._elementType = "audio"), e;
                  }
                  return (
                    (function(e, t) {
                      if ("function" != typeof t && null !== t)
                        throw new TypeError(
                          "Super expression must either be null or a function, not " +
                            typeof t
                        );
                      (e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                          value: e,
                          enumerable: !1,
                          writable: !0,
                          configurable: !0
                        }
                      })),
                        t &&
                          (Object.setPrototypeOf
                            ? Object.setPrototypeOf(e, t)
                            : (e.__proto__ = t));
                    })(t, e),
                    n(t, [
                      {
                        key: "_update",
                        value: function(e) {
                          (function e(t, r, o) {
                            null === t && (t = Function.prototype);
                            var n = Object.getOwnPropertyDescriptor(t, r);
                            if (void 0 === n) {
                              var i = Object.getPrototypeOf(t);
                              return null === i ? void 0 : e(i, r, o);
                            }
                            if ("value" in n) return n.value;
                            var a = n.get;
                            return void 0 !== a ? a.call(o) : void 0;
                          })(
                            t.prototype.__proto__ ||
                              Object.getPrototypeOf(t.prototype),
                            "_update",
                            this
                          ).call(this, e, !1);
                        }
                      }
                    ]),
                    t
                  );
                })(o.default);
              (e.AUDIOTYPE = i), (e.default = a);
            })
              ? o.apply(t, n)
              : o) || (e.exports = i);
    },
    function(e, t, r) {
      var o, n, i;
      (n = [t, r(10)]),
        void 0 ===
          (i =
            "function" ==
            typeof (o = function(t, r) {
              "use strict";
              Object.defineProperty(t, "__esModule", { value: !0 });
              var o = (function() {
                  function e(e, t) {
                    for (var r = 0; r < t.length; r++) {
                      var o = t[r];
                      (o.enumerable = o.enumerable || !1),
                        (o.configurable = !0),
                        "value" in o && (o.writable = !0),
                        Object.defineProperty(e, o.key, o);
                    }
                  }
                  return function(t, r, o) {
                    return r && e(t.prototype, r), o && e(t, o), t;
                  };
                })(),
                n = (function() {
                  function e() {
                    !(function(e, t) {
                      if (!(e instanceof t))
                        throw new TypeError(
                          "Cannot call a class as a function"
                        );
                    })(this, e),
                      (this.connections = []);
                  }
                  return (
                    o(
                      e,
                      [
                        {
                          key: "getOutputsForNode",
                          value: function(e) {
                            var t = [];
                            return (
                              this.connections.forEach(function(r) {
                                r.source === e && t.push(r.destination);
                              }),
                              t
                            );
                          }
                        },
                        {
                          key: "getNamedInputsForNode",
                          value: function(e) {
                            var t = [];
                            return (
                              this.connections.forEach(function(r) {
                                r.destination === e &&
                                  "name" === r.type &&
                                  t.push(r);
                              }),
                              t
                            );
                          }
                        },
                        {
                          key: "getZIndexInputsForNode",
                          value: function(e) {
                            var t = [];
                            return (
                              this.connections.forEach(function(r) {
                                r.destination === e &&
                                  "zIndex" === r.type &&
                                  t.push(r);
                              }),
                              t.sort(function(e, t) {
                                return e.zIndex - t.zIndex;
                              }),
                              t
                            );
                          }
                        },
                        {
                          key: "getInputsForNode",
                          value: function(e) {
                            var t = e.inputNames,
                              r = [],
                              o = this.getNamedInputsForNode(e),
                              n = this.getZIndexInputsForNode(e);
                            if (!0 === e._limitConnections) {
                              for (var i = 0; i < t.length; i++) r[i] = void 0;
                              var a = !0,
                                u = !1,
                                s = void 0;
                              try {
                                for (
                                  var l, c = o[Symbol.iterator]();
                                  !(a = (l = c.next()).done);
                                  a = !0
                                ) {
                                  var _ = l.value;
                                  r[t.indexOf(_.name)] = _.source;
                                }
                              } catch (e) {
                                (u = !0), (s = e);
                              } finally {
                                try {
                                  !a && c.return && c.return();
                                } finally {
                                  if (u) throw s;
                                }
                              }
                              for (var d = 0, p = 0; p < r.length; p++)
                                void 0 === r[p] &&
                                  void 0 !== n[d] &&
                                  ((r[p] = n[d].source), (d += 1));
                            } else {
                              var f = !0,
                                v = !1,
                                h = void 0;
                              try {
                                for (
                                  var m, y = o[Symbol.iterator]();
                                  !(f = (m = y.next()).done);
                                  f = !0
                                ) {
                                  var g = m.value;
                                  r.push(g.source);
                                }
                              } catch (e) {
                                (v = !0), (h = e);
                              } finally {
                                try {
                                  !f && y.return && y.return();
                                } finally {
                                  if (v) throw h;
                                }
                              }
                              var b = !0,
                                x = !1,
                                T = void 0;
                              try {
                                for (
                                  var C, E = n[Symbol.iterator]();
                                  !(b = (C = E.next()).done);
                                  b = !0
                                ) {
                                  var O = C.value;
                                  r.push(O.source);
                                }
                              } catch (e) {
                                (x = !0), (T = e);
                              } finally {
                                try {
                                  !b && E.return && E.return();
                                } finally {
                                  if (x) throw T;
                                }
                              }
                            }
                            return r;
                          }
                        },
                        {
                          key: "isInputAvailable",
                          value: function(e, t) {
                            if (-1 === e._inputNames.indexOf(t)) return !1;
                            var r = !0,
                              o = !1,
                              n = void 0;
                            try {
                              for (
                                var i, a = this.connections[Symbol.iterator]();
                                !(r = (i = a.next()).done);
                                r = !0
                              ) {
                                var u = i.value;
                                if (
                                  "name" === u.type &&
                                  u.destination === e &&
                                  u.name === t
                                )
                                  return !1;
                              }
                            } catch (e) {
                              (o = !0), (n = e);
                            } finally {
                              try {
                                !r && a.return && a.return();
                              } finally {
                                if (o) throw n;
                              }
                            }
                            return !0;
                          }
                        },
                        {
                          key: "registerConnection",
                          value: function(e, t, o) {
                            if (
                              t.inputs.length >= t.inputNames.length &&
                              !0 === t._limitConnections
                            )
                              throw new r.ConnectException(
                                "Node has reached max number of inputs, can't connect"
                              );
                            if (
                              (!1 === t._limitConnections &&
                                this.getInputsForNode(t).includes(e) &&
                                (console.debug(
                                  "WARNING - node connected mutliple times, removing previous connection"
                                ),
                                this.unregisterConnection(e, t)),
                              "number" == typeof o)
                            )
                              this.connections.push({
                                source: e,
                                type: "zIndex",
                                zIndex: o,
                                destination: t
                              });
                            else if (
                              "string" == typeof o &&
                              t._limitConnections
                            ) {
                              if (!this.isInputAvailable(t, o))
                                throw new r.ConnectException(
                                  "Port " + o + " is already connected to"
                                );
                              this.connections.push({
                                source: e,
                                type: "name",
                                name: o,
                                destination: t
                              });
                            } else {
                              var n = this.getZIndexInputsForNode(t),
                                i = 0;
                              n.length > 0 && (i = n[n.length - 1].zIndex + 1),
                                this.connections.push({
                                  source: e,
                                  type: "zIndex",
                                  zIndex: i,
                                  destination: t
                                });
                            }
                            return !0;
                          }
                        },
                        {
                          key: "unregisterConnection",
                          value: function(e, t) {
                            var r = this,
                              o = [];
                            return (
                              this.connections.forEach(function(r) {
                                r.source === e &&
                                  r.destination === t &&
                                  o.push(r);
                              }),
                              0 !== o.length &&
                                (o.forEach(function(e) {
                                  var t = r.connections.indexOf(e);
                                  r.connections.splice(t, 1);
                                }),
                                !0)
                            );
                          }
                        }
                      ],
                      [
                        {
                          key: "outputEdgesFor",
                          value: function(e, t) {
                            var r = [],
                              o = !0,
                              n = !1,
                              i = void 0;
                            try {
                              for (
                                var a, u = t[Symbol.iterator]();
                                !(o = (a = u.next()).done);
                                o = !0
                              ) {
                                var s = a.value;
                                s.source === e && r.push(s);
                              }
                            } catch (e) {
                              (n = !0), (i = e);
                            } finally {
                              try {
                                !o && u.return && u.return();
                              } finally {
                                if (n) throw i;
                              }
                            }
                            return r;
                          }
                        },
                        {
                          key: "inputEdgesFor",
                          value: function(e, t) {
                            var r = [],
                              o = !0,
                              n = !1,
                              i = void 0;
                            try {
                              for (
                                var a, u = t[Symbol.iterator]();
                                !(o = (a = u.next()).done);
                                o = !0
                              ) {
                                var s = a.value;
                                s.destination === e && r.push(s);
                              }
                            } catch (e) {
                              (n = !0), (i = e);
                            } finally {
                              try {
                                !o && u.return && u.return();
                              } finally {
                                if (n) throw i;
                              }
                            }
                            return r;
                          }
                        },
                        {
                          key: "getInputlessNodes",
                          value: function(e) {
                            var t = [],
                              r = !0,
                              o = !1,
                              n = void 0;
                            try {
                              for (
                                var i, a = e[Symbol.iterator]();
                                !(r = (i = a.next()).done);
                                r = !0
                              ) {
                                var u = i.value;
                                t.push(u.source);
                              }
                            } catch (e) {
                              (o = !0), (n = e);
                            } finally {
                              try {
                                !r && a.return && a.return();
                              } finally {
                                if (o) throw n;
                              }
                            }
                            var s = !0,
                              l = !1,
                              c = void 0;
                            try {
                              for (
                                var _, d = e[Symbol.iterator]();
                                !(s = (_ = d.next()).done);
                                s = !0
                              ) {
                                var p = _.value,
                                  f = t.indexOf(p.destination);
                                -1 !== f && t.splice(f, 1);
                              }
                            } catch (e) {
                              (l = !0), (c = e);
                            } finally {
                              try {
                                !s && d.return && d.return();
                              } finally {
                                if (l) throw c;
                              }
                            }
                            return t;
                          }
                        }
                      ]
                    ),
                    e
                  );
                })();
              (t.default = n), (e.exports = t.default);
            })
              ? o.apply(t, n)
              : o) || (e.exports = i);
    },
    function(e, t, r) {
      var o, n, i;
      (n = [t, r(0)]),
        void 0 ===
          (i =
            "function" ==
            typeof (o = function(t, r) {
              "use strict";
              Object.defineProperty(t, "__esModule", { value: !0 });
              var o = (function() {
                  function e(e, t) {
                    for (var r = 0; r < t.length; r++) {
                      var o = t[r];
                      (o.enumerable = o.enumerable || !1),
                        (o.configurable = !0),
                        "value" in o && (o.writable = !0),
                        Object.defineProperty(e, o.key, o);
                    }
                  }
                  return function(t, r, o) {
                    return r && e(t.prototype, r), o && e(t, o), t;
                  };
                })(),
                n = (function() {
                  function e() {
                    var t =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : 3;
                    !(function(e, t) {
                      if (!(e instanceof t))
                        throw new TypeError(
                          "Cannot call a class as a function"
                        );
                    })(this, e),
                      (this._elements = []),
                      (this._elementsInitialised = !1);
                    for (var r = 0; r < t; r++) {
                      var o = this._createElement();
                      this._elements.push(o);
                    }
                  }
                  return (
                    o(e, [
                      {
                        key: "_createElement",
                        value: function() {
                          var e = document.createElement("video");
                          return (
                            e.setAttribute("crossorigin", "anonymous"),
                            e.setAttribute("webkit-playsinline", ""),
                            e.setAttribute("playsinline", ""),
                            e
                          );
                        }
                      },
                      {
                        key: "init",
                        value: function() {
                          if (!this._elementsInitialised) {
                            var e = !0,
                              t = !1,
                              r = void 0;
                            try {
                              for (
                                var o, n = this._elements[Symbol.iterator]();
                                !(e = (o = n.next()).done);
                                e = !0
                              ) {
                                var i = o.value;
                                try {
                                  i.play().then(
                                    function() {},
                                    function(e) {
                                      if ("NotSupportedError" !== e.name)
                                        throw e;
                                    }
                                  );
                                } catch (e) {}
                              }
                            } catch (e) {
                              (t = !0), (r = e);
                            } finally {
                              try {
                                !e && n.return && n.return();
                              } finally {
                                if (t) throw r;
                              }
                            }
                          }
                          this._elementsInitialised = !0;
                        }
                      },
                      {
                        key: "get",
                        value: function() {
                          var e = !0,
                            t = !1,
                            o = void 0;
                          try {
                            for (
                              var n, i = this._elements[Symbol.iterator]();
                              !(e = (n = i.next()).done);
                              e = !0
                            ) {
                              var a = n.value;
                              if (!(0, r.mediaElementHasSource)(a)) return a;
                            }
                          } catch (e) {
                            (t = !0), (o = e);
                          } finally {
                            try {
                              !e && i.return && i.return();
                            } finally {
                              if (t) throw o;
                            }
                          }
                          console.debug(
                            "No available video element in the cache, creating a new one. This may break mobile, make your initial cache larger."
                          );
                          var u = this._createElement();
                          return (
                            this._elements.push(u),
                            (this._elementsInitialised = !1),
                            u
                          );
                        }
                      },
                      {
                        key: "length",
                        get: function() {
                          return this._elements.length;
                        }
                      },
                      {
                        key: "unused",
                        get: function() {
                          var e = 0,
                            t = !0,
                            o = !1,
                            n = void 0;
                          try {
                            for (
                              var i, a = this._elements[Symbol.iterator]();
                              !(t = (i = a.next()).done);
                              t = !0
                            ) {
                              var u = i.value;
                              (0, r.mediaElementHasSource)(u) || (e += 1);
                            }
                          } catch (e) {
                            (o = !0), (n = e);
                          } finally {
                            try {
                              !t && a.return && a.return();
                            } finally {
                              if (o) throw n;
                            }
                          }
                          return e;
                        }
                      }
                    ]),
                    e
                  );
                })();
              (t.default = n), (e.exports = t.default);
            })
              ? o.apply(t, n)
              : o) || (e.exports = i);
    }
  ]);
});
//# sourceMappingURL=videocontext.js.map
