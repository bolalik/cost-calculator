import { _ as _inherits, a as _getPrototypeOf, b as _possibleConstructorReturn, c as _classCallCheck, i as init, s as safe_not_equal, d as _assertThisInitialized, S as SvelteComponent, e as space, f as element, t as text, q as query_selector_all, g as detach, h as claim_space, j as claim_element, k as children, l as claim_text, n as insert, o as append, p as noop } from './client.0aef462d.js';

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function create_fragment(ctx) {
  var t0;
  var h1;
  var t1;
  var t2;
  var p;
  var t3;
  return {
    c: function c() {
      t0 = space();
      h1 = element("h1");
      t1 = text("Result this site");
      t2 = space();
      p = element("p");
      t3 = text("This is the 'about' page. There's not much here.");
      this.h();
    },
    l: function l(nodes) {
      var head_nodes = query_selector_all("[data-svelte=\"svelte-1ine71f\"]", document.head);
      head_nodes.forEach(detach);
      t0 = claim_space(nodes);
      h1 = claim_element(nodes, "H1", {});
      var h1_nodes = children(h1);
      t1 = claim_text(h1_nodes, "Result this site");
      h1_nodes.forEach(detach);
      t2 = claim_space(nodes);
      p = claim_element(nodes, "P", {});
      var p_nodes = children(p);
      t3 = claim_text(p_nodes, "This is the 'about' page. There's not much here.");
      p_nodes.forEach(detach);
      this.h();
    },
    h: function h() {
      document.title = "About";
    },
    m: function m(target, anchor) {
      insert(target, t0, anchor);
      insert(target, h1, anchor);
      append(h1, t1);
      insert(target, t2, anchor);
      insert(target, p, anchor);
      append(p, t3);
    },
    p: noop,
    i: noop,
    o: noop,
    d: function d(detaching) {
      if (detaching) detach(t0);
      if (detaching) detach(h1);
      if (detaching) detach(t2);
      if (detaching) detach(p);
    }
  };
}

var Result = /*#__PURE__*/function (_SvelteComponent) {
  _inherits(Result, _SvelteComponent);

  var _super = _createSuper(Result);

  function Result(options) {
    var _this;

    _classCallCheck(this, Result);

    _this = _super.call(this);
    init(_assertThisInitialized(_this), options, null, create_fragment, safe_not_equal, {});
    return _this;
  }

  return Result;
}(SvelteComponent);

export default Result;
