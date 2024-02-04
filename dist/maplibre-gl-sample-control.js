var c = Object.defineProperty;
var d = (n, t, e) => t in n ? c(n, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : n[t] = e;
var l = (n, t, e) => (d(n, typeof t != "symbol" ? t + "" : t, e), e);
const s = {
  text: "Hello, world!"
};
class h {
  constructor(t) {
    l(this, "text");
    l(this, "container");
    l(this, "map");
    this.text = (t == null ? void 0 : t.text) || s.text, this.map = null;
  }
  // Add a paragraph
  paragraphAdd(t) {
    const e = document.createElement("p");
    e.innerText = t, this.container.appendChild(e);
  }
  // Add a fly button
  flyButtonAdd({ text: t, lnglat: e, zoom: o = 10, speed: i = 0.8 }) {
    const a = document.createElement("input");
    a.type = "button", a.value = t, a.addEventListener("click", () => {
      var r;
      (r = this.map) == null || r.flyTo({
        center: e,
        zoom: o,
        speed: i
      });
    }), this.container.appendChild(a);
  }
  // Add a container
  sampleControlAdd() {
    this.container.className = "maplibregl-ctrl maplibregl-ctrl-group", this.container.id = "sample-control", this.paragraphAdd(this.text), this.flyButtonAdd({ text: "Fly to Sapporo", lnglat: [141.34, 43.07] });
  }
  onAdd(t) {
    return this.container = document.createElement("div"), this.map = t, this.sampleControlAdd(), this.container;
  }
  onRemove() {
    var t;
    (t = this.container.parentNode) == null || t.removeChild(this.container), this.map = null;
  }
}
export {
  h as SampleControl
};
//# sourceMappingURL=maplibre-gl-sample-control.js.map
