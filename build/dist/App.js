import {h} from "../_snowpack/pkg/preact.js";
import {useState, useEffect} from "../_snowpack/pkg/preact/hooks.js";
import logo from "./logo.png.proxy.js";
import "./App.css.proxy.js";
function App() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const timer = setTimeout(() => setCount(count + 1), 1e3);
    return () => clearTimeout(timer);
  }, [count, setCount]);
  return /* @__PURE__ */ h("div", {
    className: "App"
  }, /* @__PURE__ */ h("header", {
    className: "App-header"
  }, /* @__PURE__ */ h("img", {
    src: logo,
    className: "App-logo",
    alt: "logo"
  }), /* @__PURE__ */ h("p", null, "Edit ", /* @__PURE__ */ h("code", null, "src/App.jsx"), " and save to reload."), /* @__PURE__ */ h("p", null, "Page has been open for ", /* @__PURE__ */ h("code", null, count), " seconds."), /* @__PURE__ */ h("p", null, /* @__PURE__ */ h("a", {
    className: "App-link",
    href: "https://preactjs.com",
    target: "_blank",
    rel: "noopener noreferrer"
  }, "Learn Preact"))));
}
export default App;
