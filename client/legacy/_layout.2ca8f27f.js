import { _ as _inherits, a as _getPrototypeOf, b as _possibleConstructorReturn, c as _classCallCheck, i as init, s as safe_not_equal, d as _assertThisInitialized, S as SvelteComponent, f as element, t as text, e as space, j as claim_element, k as children, l as claim_text, g as detach, h as claim_space, m as attr, n as insert, o as append, r as _slicedToArray, p as noop, u as create_slot, v as create_component, w as claim_component, x as mount_component, y as get_slot_context, z as get_slot_changes, A as transition_in, B as transition_out, C as destroy_component } from './client.0aef462d.js';

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function create_fragment(ctx) {
  var nav;
  var ul;
  var li0;
  var a0;
  var t0;
  var a0_aria_current_value;
  var t1;
  var li1;
  var a1;
  var t2;
  var a1_aria_current_value;
  return {
    c: function c() {
      nav = element("nav");
      ul = element("ul");
      li0 = element("li");
      a0 = element("a");
      t0 = text("back");
      t1 = space();
      li1 = element("li");
      a1 = element("a");
      t2 = text("result");
      this.h();
    },
    l: function l(nodes) {
      nav = claim_element(nodes, "NAV", {
        class: true
      });
      var nav_nodes = children(nav);
      ul = claim_element(nav_nodes, "UL", {
        class: true
      });
      var ul_nodes = children(ul);
      li0 = claim_element(ul_nodes, "LI", {
        class: true
      });
      var li0_nodes = children(li0);
      a0 = claim_element(li0_nodes, "A", {
        rel: true,
        "aria-current": true,
        href: true,
        class: true
      });
      var a0_nodes = children(a0);
      t0 = claim_text(a0_nodes, "back");
      a0_nodes.forEach(detach);
      li0_nodes.forEach(detach);
      t1 = claim_space(ul_nodes);
      li1 = claim_element(ul_nodes, "LI", {
        class: true
      });
      var li1_nodes = children(li1);
      a1 = claim_element(li1_nodes, "A", {
        "aria-current": true,
        href: true,
        class: true
      });
      var a1_nodes = children(a1);
      t2 = claim_text(a1_nodes, "result");
      a1_nodes.forEach(detach);
      li1_nodes.forEach(detach);
      ul_nodes.forEach(detach);
      nav_nodes.forEach(detach);
      this.h();
    },
    h: function h() {
      attr(a0, "rel", "prefetch");
      attr(a0, "aria-current", a0_aria_current_value =
      /*segment*/
      ctx[0] === undefined ? "page" : undefined);
      attr(a0, "href", ".");
      attr(a0, "class", "svelte-1dbd5up");
      attr(li0, "class", "svelte-1dbd5up");
      attr(a1, "aria-current", a1_aria_current_value =
      /*segment*/
      ctx[0] === "calculate/result" ? "page" : undefined);
      attr(a1, "href", "calculate/result");
      attr(a1, "class", "svelte-1dbd5up");
      attr(li1, "class", "svelte-1dbd5up");
      attr(ul, "class", "svelte-1dbd5up");
      attr(nav, "class", "svelte-1dbd5up");
    },
    m: function m(target, anchor) {
      insert(target, nav, anchor);
      append(nav, ul);
      append(ul, li0);
      append(li0, a0);
      append(a0, t0);
      append(ul, t1);
      append(ul, li1);
      append(li1, a1);
      append(a1, t2);
    },
    p: function p(ctx, _ref) {
      var _ref2 = _slicedToArray(_ref, 1),
          dirty = _ref2[0];

      if (dirty &
      /*segment*/
      1 && a0_aria_current_value !== (a0_aria_current_value =
      /*segment*/
      ctx[0] === undefined ? "page" : undefined)) {
        attr(a0, "aria-current", a0_aria_current_value);
      }

      if (dirty &
      /*segment*/
      1 && a1_aria_current_value !== (a1_aria_current_value =
      /*segment*/
      ctx[0] === "calculate/result" ? "page" : undefined)) {
        attr(a1, "aria-current", a1_aria_current_value);
      }
    },
    i: noop,
    o: noop,
    d: function d(detaching) {
      if (detaching) detach(nav);
    }
  };
}

function instance($$self, $$props, $$invalidate) {
  var segment = $$props.segment;

  $$self.$set = function ($$props) {
    if ("segment" in $$props) $$invalidate(0, segment = $$props.segment);
  };

  return [segment];
}

var Nav = /*#__PURE__*/function (_SvelteComponent) {
  _inherits(Nav, _SvelteComponent);

  var _super = _createSuper(Nav);

  function Nav(options) {
    var _this;

    _classCallCheck(this, Nav);

    _this = _super.call(this);
    init(_assertThisInitialized(_this), options, instance, create_fragment, safe_not_equal, {
      segment: 0
    });
    return _this;
  }

  return Nav;
}(SvelteComponent);

function _createSuper$1(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$1(); return function () { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct$1() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function create_fragment$1(ctx) {
  var t;
  var main;
  var current;
  var nav = new Nav({
    props: {
      segment:
      /*segment*/
      ctx[0]
    }
  });
  var default_slot_template =
  /*$$slots*/
  ctx[2].default;
  var default_slot = create_slot(default_slot_template, ctx,
  /*$$scope*/
  ctx[1], null);
  return {
    c: function c() {
      create_component(nav.$$.fragment);
      t = space();
      main = element("main");
      if (default_slot) default_slot.c();
      this.h();
    },
    l: function l(nodes) {
      claim_component(nav.$$.fragment, nodes);
      t = claim_space(nodes);
      main = claim_element(nodes, "MAIN", {
        class: true
      });
      var main_nodes = children(main);
      if (default_slot) default_slot.l(main_nodes);
      main_nodes.forEach(detach);
      this.h();
    },
    h: function h() {
      attr(main, "class", "svelte-1uhnsl8");
    },
    m: function m(target, anchor) {
      mount_component(nav, target, anchor);
      insert(target, t, anchor);
      insert(target, main, anchor);

      if (default_slot) {
        default_slot.m(main, null);
      }

      current = true;
    },
    p: function p(ctx, _ref) {
      var _ref2 = _slicedToArray(_ref, 1),
          dirty = _ref2[0];

      var nav_changes = {};
      if (dirty &
      /*segment*/
      1) nav_changes.segment =
      /*segment*/
      ctx[0];
      nav.$set(nav_changes);

      if (default_slot) {
        if (default_slot.p && dirty &
        /*$$scope*/
        2) {
          default_slot.p(get_slot_context(default_slot_template, ctx,
          /*$$scope*/
          ctx[1], null), get_slot_changes(default_slot_template,
          /*$$scope*/
          ctx[1], dirty, null));
        }
      }
    },
    i: function i(local) {
      if (current) return;
      transition_in(nav.$$.fragment, local);
      transition_in(default_slot, local);
      current = true;
    },
    o: function o(local) {
      transition_out(nav.$$.fragment, local);
      transition_out(default_slot, local);
      current = false;
    },
    d: function d(detaching) {
      destroy_component(nav, detaching);
      if (detaching) detach(t);
      if (detaching) detach(main);
      if (default_slot) default_slot.d(detaching);
    }
  };
}

function instance$1($$self, $$props, $$invalidate) {
  var segment = $$props.segment;
  var _$$props$$$slots = $$props.$$slots,
      $$slots = _$$props$$$slots === void 0 ? {} : _$$props$$$slots,
      $$scope = $$props.$$scope;

  $$self.$set = function ($$props) {
    if ("segment" in $$props) $$invalidate(0, segment = $$props.segment);
    if ("$$scope" in $$props) $$invalidate(1, $$scope = $$props.$$scope);
  };

  return [segment, $$scope, $$slots];
}

var Layout = /*#__PURE__*/function (_SvelteComponent) {
  _inherits(Layout, _SvelteComponent);

  var _super = _createSuper$1(Layout);

  function Layout(options) {
    var _this;

    _classCallCheck(this, Layout);

    _this = _super.call(this);
    init(_assertThisInitialized(_this), options, instance$1, create_fragment$1, safe_not_equal, {
      segment: 0
    });
    return _this;
  }

  return Layout;
}(SvelteComponent);

export default Layout;
