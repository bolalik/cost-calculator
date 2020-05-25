import { _ as _inherits, a as _getPrototypeOf, b as _possibleConstructorReturn, c as _classCallCheck, i as init, s as safe_not_equal, d as _assertThisInitialized, S as SvelteComponent, e as space, f as element, t as text, q as query_selector_all, g as detach, h as claim_space, j as claim_element, k as children, l as claim_text, m as attr, n as insert, o as append, p as noop } from './client.45bb1098.js';

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function create_fragment(ctx) {
  var t0;
  var main;
  var div;
  var h1;
  var t1;
  var t2;
  var a;
  var t3;
  return {
    c: function c() {
      t0 = space();
      main = element("main");
      div = element("div");
      h1 = element("h1");
      t1 = text("Great success!");
      t2 = space();
      a = element("a");
      t3 = text("Go");
      this.h();
    },
    l: function l(nodes) {
      var head_nodes = query_selector_all("[data-svelte=\"svelte-oofwcx\"]", document.head);
      head_nodes.forEach(detach);
      t0 = claim_space(nodes);
      main = claim_element(nodes, "MAIN", {
        class: true
      });
      var main_nodes = children(main);
      div = claim_element(main_nodes, "DIV", {});
      var div_nodes = children(div);
      h1 = claim_element(div_nodes, "H1", {
        class: true
      });
      var h1_nodes = children(h1);
      t1 = claim_text(h1_nodes, "Great success!");
      h1_nodes.forEach(detach);
      t2 = claim_space(div_nodes);
      a = claim_element(div_nodes, "A", {
        rel: true,
        href: true
      });
      var a_nodes = children(a);
      t3 = claim_text(a_nodes, "Go");
      a_nodes.forEach(detach);
      div_nodes.forEach(detach);
      main_nodes.forEach(detach);
      this.h();
    },
    h: function h() {
      document.title = "Sapper project template";
      attr(h1, "class", "svelte-3xkk1u");
      attr(a, "rel", "prefetch");
      attr(a, "href", "calculate/");
      attr(main, "class", "svelte-3xkk1u");
    },
    m: function m(target, anchor) {
      insert(target, t0, anchor);
      insert(target, main, anchor);
      append(main, div);
      append(div, h1);
      append(h1, t1);
      append(div, t2);
      append(div, a);
      append(a, t3);
    },
    p: noop,
    i: noop,
    o: noop,
    d: function d(detaching) {
      if (detaching) detach(t0);
      if (detaching) detach(main);
    }
  };
}

var Routes = /*#__PURE__*/function (_SvelteComponent) {
  _inherits(Routes, _SvelteComponent);

  var _super = _createSuper(Routes);

  function Routes(options) {
    var _this;

    _classCallCheck(this, Routes);

    _this = _super.call(this);
    init(_assertThisInitialized(_this), options, null, create_fragment, safe_not_equal, {});
    return _this;
  }

  return Routes;
}(SvelteComponent);

export default Routes;
