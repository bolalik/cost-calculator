import { _ as _inherits, a as _getPrototypeOf, b as _possibleConstructorReturn, c as _classCallCheck, i as init, s as safe_not_equal, d as _assertThisInitialized, S as SvelteComponent, f as element, t as text, e as space, D as empty, j as claim_element, k as children, l as claim_text, g as detach, h as claim_space, n as insert, o as append, E as set_data, m as attr, F as null_to_empty, G as run_all, H as listen, I as is_function, r as _slicedToArray, p as noop, J as _typeof, K as _asyncToGenerator, L as regenerator, v as create_component, w as claim_component, x as mount_component, A as transition_in, B as transition_out, C as destroy_component, q as query_selector_all, M as check_outros, N as destroy_each, O as binding_callbacks, P as bind$1, Q as add_flush_callback, R as group_outros } from './client.45bb1098.js';

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function create_if_block(ctx) {
  var h3;
  var t0_value =
  /*section*/
  ctx[0].base + "";
  var t0;
  var t1;
  var if_block_anchor;
  var if_block =
  /*section*/
  ctx[0].extra && create_if_block_1(ctx);
  return {
    c: function c() {
      h3 = element("h3");
      t0 = text(t0_value);
      t1 = space();
      if (if_block) if_block.c();
      if_block_anchor = empty();
    },
    l: function l(nodes) {
      h3 = claim_element(nodes, "H3", {});
      var h3_nodes = children(h3);
      t0 = claim_text(h3_nodes, t0_value);
      h3_nodes.forEach(detach);
      t1 = claim_space(nodes);
      if (if_block) if_block.l(nodes);
      if_block_anchor = empty();
    },
    m: function m(target, anchor) {
      insert(target, h3, anchor);
      append(h3, t0);
      insert(target, t1, anchor);
      if (if_block) if_block.m(target, anchor);
      insert(target, if_block_anchor, anchor);
    },
    p: function p(ctx, dirty) {
      if (dirty &
      /*section*/
      1 && t0_value !== (t0_value =
      /*section*/
      ctx[0].base + "")) set_data(t0, t0_value);

      if (
      /*section*/
      ctx[0].extra) {
        if (if_block) {
          if_block.p(ctx, dirty);
        } else {
          if_block = create_if_block_1(ctx);
          if_block.c();
          if_block.m(if_block_anchor.parentNode, if_block_anchor);
        }
      } else if (if_block) {
        if_block.d(1);
        if_block = null;
      }
    },
    d: function d(detaching) {
      if (detaching) detach(h3);
      if (detaching) detach(t1);
      if (if_block) if_block.d(detaching);
      if (detaching) detach(if_block_anchor);
    }
  };
} // (140:2) {#if section.extra}


function create_if_block_1(ctx) {
  var h4;
  var t_value =
  /*section*/
  ctx[0].extra + "";
  var t;
  return {
    c: function c() {
      h4 = element("h4");
      t = text(t_value);
    },
    l: function l(nodes) {
      h4 = claim_element(nodes, "H4", {});
      var h4_nodes = children(h4);
      t = claim_text(h4_nodes, t_value);
      h4_nodes.forEach(detach);
    },
    m: function m(target, anchor) {
      insert(target, h4, anchor);
      append(h4, t);
    },
    p: function p(ctx, dirty) {
      if (dirty &
      /*section*/
      1 && t_value !== (t_value =
      /*section*/
      ctx[0].extra + "")) set_data(t, t_value);
    },
    d: function d(detaching) {
      if (detaching) detach(h4);
    }
  };
}

function create_fragment(ctx) {
  var h2;
  var t0_value =
  /*section*/
  ctx[0].name + "";
  var t0;
  var t1;
  var label0;
  var input0;
  var input0_value_value;
  var t2;
  var img0;
  var img0_src_value;
  var label0_class_value;
  var t3;
  var label1;
  var input1;
  var input1_value_value;
  var t4;
  var img1;
  var img1_src_value;
  var label1_class_value;
  var t5;
  var label2;
  var input2;
  var input2_value_value;
  var t6;
  var img2;
  var img2_src_value;
  var label2_class_value;
  var t7;
  var t8;
  var t9_value =
  /*selected*/
  ctx[1].toString() + "";
  var t9;
  var dispose;
  var if_block =
  /*activeYes*/
  ctx[2] && create_if_block(ctx);
  return {
    c: function c() {
      h2 = element("h2");
      t0 = text(t0_value);
      t1 = space();
      label0 = element("label");
      input0 = element("input");
      t2 = space();
      img0 = element("img");
      t3 = space();
      label1 = element("label");
      input1 = element("input");
      t4 = space();
      img1 = element("img");
      t5 = space();
      label2 = element("label");
      input2 = element("input");
      t6 = space();
      img2 = element("img");
      t7 = space();
      if (if_block) if_block.c();
      t8 = space();
      t9 = text(t9_value);
      this.h();
    },
    l: function l(nodes) {
      h2 = claim_element(nodes, "H2", {});
      var h2_nodes = children(h2);
      t0 = claim_text(h2_nodes, t0_value);
      h2_nodes.forEach(detach);
      t1 = claim_space(nodes);
      label0 = claim_element(nodes, "LABEL", {
        class: true
      });
      var label0_nodes = children(label0);
      input0 = claim_element(label0_nodes, "INPUT", {
        type: true,
        value: true,
        class: true
      });
      t2 = claim_space(label0_nodes);
      img0 = claim_element(label0_nodes, "IMG", {
        src: true,
        alt: true,
        class: true
      });
      label0_nodes.forEach(detach);
      t3 = claim_space(nodes);
      label1 = claim_element(nodes, "LABEL", {
        class: true
      });
      var label1_nodes = children(label1);
      input1 = claim_element(label1_nodes, "INPUT", {
        type: true,
        value: true,
        class: true
      });
      t4 = claim_space(label1_nodes);
      img1 = claim_element(label1_nodes, "IMG", {
        src: true,
        alt: true,
        class: true
      });
      label1_nodes.forEach(detach);
      t5 = claim_space(nodes);
      label2 = claim_element(nodes, "LABEL", {
        class: true
      });
      var label2_nodes = children(label2);
      input2 = claim_element(label2_nodes, "INPUT", {
        type: true,
        value: true,
        class: true
      });
      t6 = claim_space(label2_nodes);
      img2 = claim_element(label2_nodes, "IMG", {
        src: true,
        alt: true,
        class: true
      });
      label2_nodes.forEach(detach);
      t7 = claim_space(nodes);
      if (if_block) if_block.l(nodes);
      t8 = claim_space(nodes);
      t9 = claim_text(nodes, t9_value);
      this.h();
    },
    h: function h() {
      attr(input0, "type", "radio");
      input0.__value = input0_value_value = 1;
      input0.value = input0.__value;
      attr(input0, "class", "svelte-1vosqp5");
      /*$$binding_groups*/

      ctx[10][0].push(input0);
      if (img0.src !== (img0_src_value = yes)) attr(img0, "src", img0_src_value);
      attr(img0, "alt", " img ");
      attr(img0, "class", "svelte-1vosqp5");
      attr(label0, "class", label0_class_value = "" + (null_to_empty(
      /*activeYes*/
      ctx[2] ? "active" : "") + " svelte-1vosqp5"));
      attr(input1, "type", "radio");
      input1.__value = input1_value_value = 2;
      input1.value = input1.__value;
      attr(input1, "class", "svelte-1vosqp5");
      /*$$binding_groups*/

      ctx[10][0].push(input1);
      if (img1.src !== (img1_src_value = no)) attr(img1, "src", img1_src_value);
      attr(img1, "alt", " img ");
      attr(img1, "class", "svelte-1vosqp5");
      attr(label1, "class", label1_class_value = "" + (null_to_empty(
      /*activeNo*/
      ctx[3] ? "active" : "") + " svelte-1vosqp5"));
      attr(input2, "type", "radio");
      input2.__value = input2_value_value = 3;
      input2.value = input2.__value;
      attr(input2, "class", "svelte-1vosqp5");
      /*$$binding_groups*/

      ctx[10][0].push(input2);
      if (img2.src !== (img2_src_value = maybe)) attr(img2, "src", img2_src_value);
      attr(img2, "alt", " img ");
      attr(img2, "class", "svelte-1vosqp5");
      attr(label2, "class", label2_class_value = "" + (null_to_empty(
      /*activeMaybe*/
      ctx[4] ? "active" : "") + " svelte-1vosqp5"));
    },
    m: function m(target, anchor, remount) {
      insert(target, h2, anchor);
      append(h2, t0);
      insert(target, t1, anchor);
      insert(target, label0, anchor);
      append(label0, input0);
      input0.checked = input0.__value ===
      /*section*/
      ctx[0].id;
      append(label0, t2);
      append(label0, img0);
      insert(target, t3, anchor);
      insert(target, label1, anchor);
      append(label1, input1);
      input1.checked = input1.__value ===
      /*section*/
      ctx[0].id;
      append(label1, t4);
      append(label1, img1);
      insert(target, t5, anchor);
      insert(target, label2, anchor);
      append(label2, input2);
      input2.checked = input2.__value ===
      /*section*/
      ctx[0].id;
      append(label2, t6);
      append(label2, img2);
      insert(target, t7, anchor);
      if (if_block) if_block.m(target, anchor);
      insert(target, t8, anchor);
      insert(target, t9, anchor);
      if (remount) run_all(dispose);
      dispose = [listen(input0, "change",
      /*input0_change_handler*/
      ctx[9]), listen(input0, "click", function () {
        if (is_function(
        /*choice*/
        ctx[5](
        /*section*/
        ctx[0], "yes")))
          /*choice*/
          ctx[5](
          /*section*/
          ctx[0], "yes").apply(this, arguments);
      }), listen(input1, "change",
      /*input1_change_handler*/
      ctx[11]), listen(input1, "click", function () {
        if (is_function(
        /*choice*/
        ctx[5](
        /*section*/
        ctx[0], "no")))
          /*choice*/
          ctx[5](
          /*section*/
          ctx[0], "no").apply(this, arguments);
      }), listen(input2, "change",
      /*input2_change_handler*/
      ctx[12]), listen(input2, "click", function () {
        if (is_function(
        /*choice*/
        ctx[5](
        /*section*/
        ctx[0], "maybe")))
          /*choice*/
          ctx[5](
          /*section*/
          ctx[0], "maybe").apply(this, arguments);
      })];
    },
    p: function p(new_ctx, _ref) {
      var _ref2 = _slicedToArray(_ref, 1),
          dirty = _ref2[0];

      ctx = new_ctx;
      if (dirty &
      /*section*/
      1 && t0_value !== (t0_value =
      /*section*/
      ctx[0].name + "")) set_data(t0, t0_value);

      if (dirty &
      /*section*/
      1) {
        input0.checked = input0.__value ===
        /*section*/
        ctx[0].id;
      }

      if (dirty &
      /*activeYes*/
      4 && label0_class_value !== (label0_class_value = "" + (null_to_empty(
      /*activeYes*/
      ctx[2] ? "active" : "") + " svelte-1vosqp5"))) {
        attr(label0, "class", label0_class_value);
      }

      if (dirty &
      /*section*/
      1) {
        input1.checked = input1.__value ===
        /*section*/
        ctx[0].id;
      }

      if (dirty &
      /*activeNo*/
      8 && label1_class_value !== (label1_class_value = "" + (null_to_empty(
      /*activeNo*/
      ctx[3] ? "active" : "") + " svelte-1vosqp5"))) {
        attr(label1, "class", label1_class_value);
      }

      if (dirty &
      /*section*/
      1) {
        input2.checked = input2.__value ===
        /*section*/
        ctx[0].id;
      }

      if (dirty &
      /*activeMaybe*/
      16 && label2_class_value !== (label2_class_value = "" + (null_to_empty(
      /*activeMaybe*/
      ctx[4] ? "active" : "") + " svelte-1vosqp5"))) {
        attr(label2, "class", label2_class_value);
      }

      if (
      /*activeYes*/
      ctx[2]) {
        if (if_block) {
          if_block.p(ctx, dirty);
        } else {
          if_block = create_if_block(ctx);
          if_block.c();
          if_block.m(t8.parentNode, t8);
        }
      } else if (if_block) {
        if_block.d(1);
        if_block = null;
      }

      if (dirty &
      /*selected*/
      2 && t9_value !== (t9_value =
      /*selected*/
      ctx[1].toString() + "")) set_data(t9, t9_value);
    },
    i: noop,
    o: noop,
    d: function d(detaching) {
      if (detaching) detach(h2);
      if (detaching) detach(t1);
      if (detaching) detach(label0);
      /*$$binding_groups*/

      ctx[10][0].splice(
      /*$$binding_groups*/
      ctx[10][0].indexOf(input0), 1);
      if (detaching) detach(t3);
      if (detaching) detach(label1);
      /*$$binding_groups*/

      ctx[10][0].splice(
      /*$$binding_groups*/
      ctx[10][0].indexOf(input1), 1);
      if (detaching) detach(t5);
      if (detaching) detach(label2);
      /*$$binding_groups*/

      ctx[10][0].splice(
      /*$$binding_groups*/
      ctx[10][0].indexOf(input2), 1);
      if (detaching) detach(t7);
      if (if_block) if_block.d(detaching);
      if (detaching) detach(t8);
      if (detaching) detach(t9);
      run_all(dispose);
    }
  };
}

var yes = "positive-vote.svg";
var no = "negative-vote.svg";
var maybe = "anonymous.svg";

function instance($$self, $$props, $$invalidate) {
  var section = $$props.section;
  var total = $$props.total;
  var totalExtra = $$props.totalExtra;
  var selected = $$props.selected;
  var selectedExtra = $$props.selectedExtra;
  var activeYes = false;
  var activeNo = false;
  var activeMaybe = false;

  function choice(section, choice) {
    var baseUnit = +section.base.replace(/^\D+/g, "");

    var addTotal = function addTotal() {
      $$invalidate(6, total += baseUnit);
      selected.push(section.base);
      console.log(selected);
    };

    var rmTotal = function rmTotal() {
      $$invalidate(6, total -= baseUnit);
      selected.pop(section.base);
      console.log(selected);
    };

    var addTotalExtra = function addTotalExtra() {
      $$invalidate(7, totalExtra += baseUnit);
      selectedExtra.push(section.base);
      console.log("extra", selectedExtra);
    };

    var rmTotalExtra = function rmTotalExtra() {
      $$invalidate(7, totalExtra -= baseUnit);
      selectedExtra.pop(section.base);
      console.log("extra", selectedExtra);
    };

    if (choice === "yes") {
      $$invalidate(2, activeYes = !activeYes);

      if (activeYes && activeMaybe) {
        addTotal();
        rmTotalExtra();
      } else if (activeYes) {
        addTotal();
      } else {
        rmTotal();
      }

      $$invalidate(3, activeNo = false);
      $$invalidate(4, activeMaybe = false);
    } else if (choice === "no") {
      $$invalidate(3, activeNo = !activeNo);

      if (activeNo && activeYes) {
        rmTotal();
      } else if (activeNo && activeMaybe) {
        rmTotalExtra();
      }

      $$invalidate(2, activeYes = false);
      $$invalidate(4, activeMaybe = false);
    } else if (choice === "maybe") {
      $$invalidate(4, activeMaybe = !activeMaybe);

      if (activeMaybe && activeYes) {
        rmTotal();
        addTotalExtra();
      } else if (activeMaybe) {
        addTotalExtra();
      } else {
        rmTotalExtra();
      }

      $$invalidate(2, activeYes = false);
      $$invalidate(3, activeNo = false);
    }
  }

  var $$binding_groups = [[]];

  function input0_change_handler() {
    section.id = this.__value;
    $$invalidate(0, section);
  }

  function input1_change_handler() {
    section.id = this.__value;
    $$invalidate(0, section);
  }

  function input2_change_handler() {
    section.id = this.__value;
    $$invalidate(0, section);
  }

  $$self.$set = function ($$props) {
    if ("section" in $$props) $$invalidate(0, section = $$props.section);
    if ("total" in $$props) $$invalidate(6, total = $$props.total);
    if ("totalExtra" in $$props) $$invalidate(7, totalExtra = $$props.totalExtra);
    if ("selected" in $$props) $$invalidate(1, selected = $$props.selected);
    if ("selectedExtra" in $$props) $$invalidate(8, selectedExtra = $$props.selectedExtra);
  };

  return [section, selected, activeYes, activeNo, activeMaybe, choice, total, totalExtra, selectedExtra, input0_change_handler, $$binding_groups, input1_change_handler, input2_change_handler];
}

var ChoiceCard = /*#__PURE__*/function (_SvelteComponent) {
  _inherits(ChoiceCard, _SvelteComponent);

  var _super = _createSuper(ChoiceCard);

  function ChoiceCard(options) {
    var _this;

    _classCallCheck(this, ChoiceCard);

    _this = _super.call(this);
    init(_assertThisInitialized(_this), options, instance, create_fragment, safe_not_equal, {
      section: 0,
      total: 6,
      totalExtra: 7,
      selected: 1,
      selectedExtra: 8
    });
    return _this;
  }

  return ChoiceCard;
}(SvelteComponent);

var bind = function bind(fn, thisArg) {
  return function wrap() {
    var args = new Array(arguments.length);

    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }

    return fn.apply(thisArg, args);
  };
};

/*global toString:true*/
// utils is a library of generic helper functions non-specific to axios


var toString = Object.prototype.toString;
/**
 * Determine if a value is an Array
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Array, otherwise false
 */

function isArray(val) {
  return toString.call(val) === '[object Array]';
}
/**
 * Determine if a value is undefined
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if the value is undefined, otherwise false
 */


function isUndefined(val) {
  return typeof val === 'undefined';
}
/**
 * Determine if a value is a Buffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Buffer, otherwise false
 */


function isBuffer(val) {
  return val !== null && !isUndefined(val) && val.constructor !== null && !isUndefined(val.constructor) && typeof val.constructor.isBuffer === 'function' && val.constructor.isBuffer(val);
}
/**
 * Determine if a value is an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
 */


function isArrayBuffer(val) {
  return toString.call(val) === '[object ArrayBuffer]';
}
/**
 * Determine if a value is a FormData
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an FormData, otherwise false
 */


function isFormData(val) {
  return typeof FormData !== 'undefined' && val instanceof FormData;
}
/**
 * Determine if a value is a view on an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
 */


function isArrayBufferView(val) {
  var result;

  if (typeof ArrayBuffer !== 'undefined' && ArrayBuffer.isView) {
    result = ArrayBuffer.isView(val);
  } else {
    result = val && val.buffer && val.buffer instanceof ArrayBuffer;
  }

  return result;
}
/**
 * Determine if a value is a String
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a String, otherwise false
 */


function isString(val) {
  return typeof val === 'string';
}
/**
 * Determine if a value is a Number
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Number, otherwise false
 */


function isNumber(val) {
  return typeof val === 'number';
}
/**
 * Determine if a value is an Object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Object, otherwise false
 */


function isObject(val) {
  return val !== null && _typeof(val) === 'object';
}
/**
 * Determine if a value is a Date
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Date, otherwise false
 */


function isDate(val) {
  return toString.call(val) === '[object Date]';
}
/**
 * Determine if a value is a File
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a File, otherwise false
 */


function isFile(val) {
  return toString.call(val) === '[object File]';
}
/**
 * Determine if a value is a Blob
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Blob, otherwise false
 */


function isBlob(val) {
  return toString.call(val) === '[object Blob]';
}
/**
 * Determine if a value is a Function
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Function, otherwise false
 */


function isFunction(val) {
  return toString.call(val) === '[object Function]';
}
/**
 * Determine if a value is a Stream
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Stream, otherwise false
 */


function isStream(val) {
  return isObject(val) && isFunction(val.pipe);
}
/**
 * Determine if a value is a URLSearchParams object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
 */


function isURLSearchParams(val) {
  return typeof URLSearchParams !== 'undefined' && val instanceof URLSearchParams;
}
/**
 * Trim excess whitespace off the beginning and end of a string
 *
 * @param {String} str The String to trim
 * @returns {String} The String freed of excess whitespace
 */


function trim(str) {
  return str.replace(/^\s*/, '').replace(/\s*$/, '');
}
/**
 * Determine if we're running in a standard browser environment
 *
 * This allows axios to run in a web worker, and react-native.
 * Both environments support XMLHttpRequest, but not fully standard globals.
 *
 * web workers:
 *  typeof window -> undefined
 *  typeof document -> undefined
 *
 * react-native:
 *  navigator.product -> 'ReactNative'
 * nativescript
 *  navigator.product -> 'NativeScript' or 'NS'
 */


function isStandardBrowserEnv() {
  if (typeof navigator !== 'undefined' && (navigator.product === 'ReactNative' || navigator.product === 'NativeScript' || navigator.product === 'NS')) {
    return false;
  }

  return typeof window !== 'undefined' && typeof document !== 'undefined';
}
/**
 * Iterate over an Array or an Object invoking a function for each item.
 *
 * If `obj` is an Array callback will be called passing
 * the value, index, and complete array for each item.
 *
 * If 'obj' is an Object callback will be called passing
 * the value, key, and complete object for each property.
 *
 * @param {Object|Array} obj The object to iterate
 * @param {Function} fn The callback to invoke for each item
 */


function forEach(obj, fn) {
  // Don't bother if no value provided
  if (obj === null || typeof obj === 'undefined') {
    return;
  } // Force an array if not already something iterable


  if (_typeof(obj) !== 'object') {
    /*eslint no-param-reassign:0*/
    obj = [obj];
  }

  if (isArray(obj)) {
    // Iterate over array values
    for (var i = 0, l = obj.length; i < l; i++) {
      fn.call(null, obj[i], i, obj);
    }
  } else {
    // Iterate over object keys
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        fn.call(null, obj[key], key, obj);
      }
    }
  }
}
/**
 * Accepts varargs expecting each argument to be an object, then
 * immutably merges the properties of each object and returns result.
 *
 * When multiple objects contain the same key the later object in
 * the arguments list will take precedence.
 *
 * Example:
 *
 * ```js
 * var result = merge({foo: 123}, {foo: 456});
 * console.log(result.foo); // outputs 456
 * ```
 *
 * @param {Object} obj1 Object to merge
 * @returns {Object} Result of all merge properties
 */


function merge()
/* obj1, obj2, obj3, ... */
{
  var result = {};

  function assignValue(val, key) {
    if (_typeof(result[key]) === 'object' && _typeof(val) === 'object') {
      result[key] = merge(result[key], val);
    } else {
      result[key] = val;
    }
  }

  for (var i = 0, l = arguments.length; i < l; i++) {
    forEach(arguments[i], assignValue);
  }

  return result;
}
/**
 * Function equal to merge with the difference being that no reference
 * to original objects is kept.
 *
 * @see merge
 * @param {Object} obj1 Object to merge
 * @returns {Object} Result of all merge properties
 */


function deepMerge()
/* obj1, obj2, obj3, ... */
{
  var result = {};

  function assignValue(val, key) {
    if (_typeof(result[key]) === 'object' && _typeof(val) === 'object') {
      result[key] = deepMerge(result[key], val);
    } else if (_typeof(val) === 'object') {
      result[key] = deepMerge({}, val);
    } else {
      result[key] = val;
    }
  }

  for (var i = 0, l = arguments.length; i < l; i++) {
    forEach(arguments[i], assignValue);
  }

  return result;
}
/**
 * Extends object a by mutably adding to it the properties of object b.
 *
 * @param {Object} a The object to be extended
 * @param {Object} b The object to copy properties from
 * @param {Object} thisArg The object to bind function to
 * @return {Object} The resulting value of object a
 */


function extend(a, b, thisArg) {
  forEach(b, function assignValue(val, key) {
    if (thisArg && typeof val === 'function') {
      a[key] = bind(val, thisArg);
    } else {
      a[key] = val;
    }
  });
  return a;
}

var utils = {
  isArray: isArray,
  isArrayBuffer: isArrayBuffer,
  isBuffer: isBuffer,
  isFormData: isFormData,
  isArrayBufferView: isArrayBufferView,
  isString: isString,
  isNumber: isNumber,
  isObject: isObject,
  isUndefined: isUndefined,
  isDate: isDate,
  isFile: isFile,
  isBlob: isBlob,
  isFunction: isFunction,
  isStream: isStream,
  isURLSearchParams: isURLSearchParams,
  isStandardBrowserEnv: isStandardBrowserEnv,
  forEach: forEach,
  merge: merge,
  deepMerge: deepMerge,
  extend: extend,
  trim: trim
};

function encode(val) {
  return encodeURIComponent(val).replace(/%40/gi, '@').replace(/%3A/gi, ':').replace(/%24/g, '$').replace(/%2C/gi, ',').replace(/%20/g, '+').replace(/%5B/gi, '[').replace(/%5D/gi, ']');
}
/**
 * Build a URL by appending params to the end
 *
 * @param {string} url The base of the url (e.g., http://www.google.com)
 * @param {object} [params] The params to be appended
 * @returns {string} The formatted url
 */


var buildURL = function buildURL(url, params, paramsSerializer) {
  /*eslint no-param-reassign:0*/
  if (!params) {
    return url;
  }

  var serializedParams;

  if (paramsSerializer) {
    serializedParams = paramsSerializer(params);
  } else if (utils.isURLSearchParams(params)) {
    serializedParams = params.toString();
  } else {
    var parts = [];
    utils.forEach(params, function serialize(val, key) {
      if (val === null || typeof val === 'undefined') {
        return;
      }

      if (utils.isArray(val)) {
        key = key + '[]';
      } else {
        val = [val];
      }

      utils.forEach(val, function parseValue(v) {
        if (utils.isDate(v)) {
          v = v.toISOString();
        } else if (utils.isObject(v)) {
          v = JSON.stringify(v);
        }

        parts.push(encode(key) + '=' + encode(v));
      });
    });
    serializedParams = parts.join('&');
  }

  if (serializedParams) {
    var hashmarkIndex = url.indexOf('#');

    if (hashmarkIndex !== -1) {
      url = url.slice(0, hashmarkIndex);
    }

    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
  }

  return url;
};

function InterceptorManager() {
  this.handlers = [];
}
/**
 * Add a new interceptor to the stack
 *
 * @param {Function} fulfilled The function to handle `then` for a `Promise`
 * @param {Function} rejected The function to handle `reject` for a `Promise`
 *
 * @return {Number} An ID used to remove interceptor later
 */


InterceptorManager.prototype.use = function use(fulfilled, rejected) {
  this.handlers.push({
    fulfilled: fulfilled,
    rejected: rejected
  });
  return this.handlers.length - 1;
};
/**
 * Remove an interceptor from the stack
 *
 * @param {Number} id The ID that was returned by `use`
 */


InterceptorManager.prototype.eject = function eject(id) {
  if (this.handlers[id]) {
    this.handlers[id] = null;
  }
};
/**
 * Iterate over all the registered interceptors
 *
 * This method is particularly useful for skipping over any
 * interceptors that may have become `null` calling `eject`.
 *
 * @param {Function} fn The function to call for each interceptor
 */


InterceptorManager.prototype.forEach = function forEach(fn) {
  utils.forEach(this.handlers, function forEachHandler(h) {
    if (h !== null) {
      fn(h);
    }
  });
};

var InterceptorManager_1 = InterceptorManager;

/**
 * Transform the data for a request or a response
 *
 * @param {Object|String} data The data to be transformed
 * @param {Array} headers The headers for the request or response
 * @param {Array|Function} fns A single function or Array of functions
 * @returns {*} The resulting transformed data
 */


var transformData = function transformData(data, headers, fns) {
  /*eslint no-param-reassign:0*/
  utils.forEach(fns, function transform(fn) {
    data = fn(data, headers);
  });
  return data;
};

var isCancel = function isCancel(value) {
  return !!(value && value.__CANCEL__);
};

var normalizeHeaderName = function normalizeHeaderName(headers, normalizedName) {
  utils.forEach(headers, function processHeader(value, name) {
    if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
      headers[normalizedName] = value;
      delete headers[name];
    }
  });
};

/**
 * Update an Error with the specified config, error code, and response.
 *
 * @param {Error} error The error to update.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The error.
 */

var enhanceError = function enhanceError(error, config, code, request, response) {
  error.config = config;

  if (code) {
    error.code = code;
  }

  error.request = request;
  error.response = response;
  error.isAxiosError = true;

  error.toJSON = function () {
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: this.config,
      code: this.code
    };
  };

  return error;
};

/**
 * Create an Error with the specified message, config, error code, request and response.
 *
 * @param {string} message The error message.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The created error.
 */


var createError = function createError(message, config, code, request, response) {
  var error = new Error(message);
  return enhanceError(error, config, code, request, response);
};

/**
 * Resolve or reject a Promise based on response status.
 *
 * @param {Function} resolve A function that resolves the promise.
 * @param {Function} reject A function that rejects the promise.
 * @param {object} response The response.
 */


var settle = function settle(resolve, reject, response) {
  var validateStatus = response.config.validateStatus;

  if (!validateStatus || validateStatus(response.status)) {
    resolve(response);
  } else {
    reject(createError('Request failed with status code ' + response.status, response.config, null, response.request, response));
  }
};

/**
 * Determines whether the specified URL is absolute
 *
 * @param {string} url The URL to test
 * @returns {boolean} True if the specified URL is absolute, otherwise false
 */

var isAbsoluteURL = function isAbsoluteURL(url) {
  // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
  // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
  // by any combination of letters, digits, plus, period, or hyphen.
  return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url);
};

/**
 * Creates a new URL by combining the specified URLs
 *
 * @param {string} baseURL The base URL
 * @param {string} relativeURL The relative URL
 * @returns {string} The combined URL
 */

var combineURLs = function combineURLs(baseURL, relativeURL) {
  return relativeURL ? baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '') : baseURL;
};

/**
 * Creates a new URL by combining the baseURL with the requestedURL,
 * only when the requestedURL is not already an absolute URL.
 * If the requestURL is absolute, this function returns the requestedURL untouched.
 *
 * @param {string} baseURL The base URL
 * @param {string} requestedURL Absolute or relative URL to combine
 * @returns {string} The combined full path
 */


var buildFullPath = function buildFullPath(baseURL, requestedURL) {
  if (baseURL && !isAbsoluteURL(requestedURL)) {
    return combineURLs(baseURL, requestedURL);
  }

  return requestedURL;
};

// c.f. https://nodejs.org/api/http.html#http_message_headers


var ignoreDuplicateOf = ['age', 'authorization', 'content-length', 'content-type', 'etag', 'expires', 'from', 'host', 'if-modified-since', 'if-unmodified-since', 'last-modified', 'location', 'max-forwards', 'proxy-authorization', 'referer', 'retry-after', 'user-agent'];
/**
 * Parse headers into an object
 *
 * ```
 * Date: Wed, 27 Aug 2014 08:58:49 GMT
 * Content-Type: application/json
 * Connection: keep-alive
 * Transfer-Encoding: chunked
 * ```
 *
 * @param {String} headers Headers needing to be parsed
 * @returns {Object} Headers parsed into an object
 */

var parseHeaders = function parseHeaders(headers) {
  var parsed = {};
  var key;
  var val;
  var i;

  if (!headers) {
    return parsed;
  }

  utils.forEach(headers.split('\n'), function parser(line) {
    i = line.indexOf(':');
    key = utils.trim(line.substr(0, i)).toLowerCase();
    val = utils.trim(line.substr(i + 1));

    if (key) {
      if (parsed[key] && ignoreDuplicateOf.indexOf(key) >= 0) {
        return;
      }

      if (key === 'set-cookie') {
        parsed[key] = (parsed[key] ? parsed[key] : []).concat([val]);
      } else {
        parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
      }
    }
  });
  return parsed;
};

var isURLSameOrigin = utils.isStandardBrowserEnv() ? // Standard browser envs have full support of the APIs needed to test
// whether the request URL is of the same origin as current location.
function standardBrowserEnv() {
  var msie = /(msie|trident)/i.test(navigator.userAgent);
  var urlParsingNode = document.createElement('a');
  var originURL;
  /**
  * Parse a URL to discover it's components
  *
  * @param {String} url The URL to be parsed
  * @returns {Object}
  */

  function resolveURL(url) {
    var href = url;

    if (msie) {
      // IE needs attribute set twice to normalize properties
      urlParsingNode.setAttribute('href', href);
      href = urlParsingNode.href;
    }

    urlParsingNode.setAttribute('href', href); // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils

    return {
      href: urlParsingNode.href,
      protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
      host: urlParsingNode.host,
      search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
      hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
      hostname: urlParsingNode.hostname,
      port: urlParsingNode.port,
      pathname: urlParsingNode.pathname.charAt(0) === '/' ? urlParsingNode.pathname : '/' + urlParsingNode.pathname
    };
  }

  originURL = resolveURL(window.location.href);
  /**
  * Determine if a URL shares the same origin as the current location
  *
  * @param {String} requestURL The URL to test
  * @returns {boolean} True if URL shares the same origin, otherwise false
  */

  return function isURLSameOrigin(requestURL) {
    var parsed = utils.isString(requestURL) ? resolveURL(requestURL) : requestURL;
    return parsed.protocol === originURL.protocol && parsed.host === originURL.host;
  };
}() : // Non standard browser envs (web workers, react-native) lack needed support.
function nonStandardBrowserEnv() {
  return function isURLSameOrigin() {
    return true;
  };
}();

var cookies = utils.isStandardBrowserEnv() ? // Standard browser envs support document.cookie
function standardBrowserEnv() {
  return {
    write: function write(name, value, expires, path, domain, secure) {
      var cookie = [];
      cookie.push(name + '=' + encodeURIComponent(value));

      if (utils.isNumber(expires)) {
        cookie.push('expires=' + new Date(expires).toGMTString());
      }

      if (utils.isString(path)) {
        cookie.push('path=' + path);
      }

      if (utils.isString(domain)) {
        cookie.push('domain=' + domain);
      }

      if (secure === true) {
        cookie.push('secure');
      }

      document.cookie = cookie.join('; ');
    },
    read: function read(name) {
      var match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
      return match ? decodeURIComponent(match[3]) : null;
    },
    remove: function remove(name) {
      this.write(name, '', Date.now() - 86400000);
    }
  };
}() : // Non standard browser env (web workers, react-native) lack needed support.
function nonStandardBrowserEnv() {
  return {
    write: function write() {},
    read: function read() {
      return null;
    },
    remove: function remove() {}
  };
}();

var xhr = function xhrAdapter(config) {
  return new Promise(function dispatchXhrRequest(resolve, reject) {
    var requestData = config.data;
    var requestHeaders = config.headers;

    if (utils.isFormData(requestData)) {
      delete requestHeaders['Content-Type']; // Let the browser set it
    }

    var request = new XMLHttpRequest(); // HTTP basic authentication

    if (config.auth) {
      var username = config.auth.username || '';
      var password = config.auth.password || '';
      requestHeaders.Authorization = 'Basic ' + btoa(username + ':' + password);
    }

    var fullPath = buildFullPath(config.baseURL, config.url);
    request.open(config.method.toUpperCase(), buildURL(fullPath, config.params, config.paramsSerializer), true); // Set the request timeout in MS

    request.timeout = config.timeout; // Listen for ready state

    request.onreadystatechange = function handleLoad() {
      if (!request || request.readyState !== 4) {
        return;
      } // The request errored out and we didn't get a response, this will be
      // handled by onerror instead
      // With one exception: request that using file: protocol, most browsers
      // will return status as 0 even though it's a successful request


      if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
        return;
      } // Prepare the response


      var responseHeaders = 'getAllResponseHeaders' in request ? parseHeaders(request.getAllResponseHeaders()) : null;
      var responseData = !config.responseType || config.responseType === 'text' ? request.responseText : request.response;
      var response = {
        data: responseData,
        status: request.status,
        statusText: request.statusText,
        headers: responseHeaders,
        config: config,
        request: request
      };
      settle(resolve, reject, response); // Clean up request

      request = null;
    }; // Handle browser request cancellation (as opposed to a manual cancellation)


    request.onabort = function handleAbort() {
      if (!request) {
        return;
      }

      reject(createError('Request aborted', config, 'ECONNABORTED', request)); // Clean up request

      request = null;
    }; // Handle low level network errors


    request.onerror = function handleError() {
      // Real errors are hidden from us by the browser
      // onerror should only fire if it's a network error
      reject(createError('Network Error', config, null, request)); // Clean up request

      request = null;
    }; // Handle timeout


    request.ontimeout = function handleTimeout() {
      var timeoutErrorMessage = 'timeout of ' + config.timeout + 'ms exceeded';

      if (config.timeoutErrorMessage) {
        timeoutErrorMessage = config.timeoutErrorMessage;
      }

      reject(createError(timeoutErrorMessage, config, 'ECONNABORTED', request)); // Clean up request

      request = null;
    }; // Add xsrf header
    // This is only done if running in a standard browser environment.
    // Specifically not if we're in a web worker, or react-native.


    if (utils.isStandardBrowserEnv()) {
      var cookies$1 = cookies; // Add xsrf header

      var xsrfValue = (config.withCredentials || isURLSameOrigin(fullPath)) && config.xsrfCookieName ? cookies$1.read(config.xsrfCookieName) : undefined;

      if (xsrfValue) {
        requestHeaders[config.xsrfHeaderName] = xsrfValue;
      }
    } // Add headers to the request


    if ('setRequestHeader' in request) {
      utils.forEach(requestHeaders, function setRequestHeader(val, key) {
        if (typeof requestData === 'undefined' && key.toLowerCase() === 'content-type') {
          // Remove Content-Type if data is undefined
          delete requestHeaders[key];
        } else {
          // Otherwise add header to the request
          request.setRequestHeader(key, val);
        }
      });
    } // Add withCredentials to request if needed


    if (!utils.isUndefined(config.withCredentials)) {
      request.withCredentials = !!config.withCredentials;
    } // Add responseType to request if needed


    if (config.responseType) {
      try {
        request.responseType = config.responseType;
      } catch (e) {
        // Expected DOMException thrown by browsers not compatible XMLHttpRequest Level 2.
        // But, this can be suppressed for 'json' type as it can be parsed by default 'transformResponse' function.
        if (config.responseType !== 'json') {
          throw e;
        }
      }
    } // Handle progress if needed


    if (typeof config.onDownloadProgress === 'function') {
      request.addEventListener('progress', config.onDownloadProgress);
    } // Not all browsers support upload events


    if (typeof config.onUploadProgress === 'function' && request.upload) {
      request.upload.addEventListener('progress', config.onUploadProgress);
    }

    if (config.cancelToken) {
      // Handle cancellation
      config.cancelToken.promise.then(function onCanceled(cancel) {
        if (!request) {
          return;
        }

        request.abort();
        reject(cancel); // Clean up request

        request = null;
      });
    }

    if (requestData === undefined) {
      requestData = null;
    } // Send the request


    request.send(requestData);
  });
};

var DEFAULT_CONTENT_TYPE = {
  'Content-Type': 'application/x-www-form-urlencoded'
};

function setContentTypeIfUnset(headers, value) {
  if (!utils.isUndefined(headers) && utils.isUndefined(headers['Content-Type'])) {
    headers['Content-Type'] = value;
  }
}

function getDefaultAdapter() {
  var adapter;

  if (typeof XMLHttpRequest !== 'undefined') {
    // For browsers use XHR adapter
    adapter = xhr;
  } else if (typeof process !== 'undefined' && Object.prototype.toString.call(process) === '[object process]') {
    // For node use HTTP adapter
    adapter = xhr;
  }

  return adapter;
}

var defaults = {
  adapter: getDefaultAdapter(),
  transformRequest: [function transformRequest(data, headers) {
    normalizeHeaderName(headers, 'Accept');
    normalizeHeaderName(headers, 'Content-Type');

    if (utils.isFormData(data) || utils.isArrayBuffer(data) || utils.isBuffer(data) || utils.isStream(data) || utils.isFile(data) || utils.isBlob(data)) {
      return data;
    }

    if (utils.isArrayBufferView(data)) {
      return data.buffer;
    }

    if (utils.isURLSearchParams(data)) {
      setContentTypeIfUnset(headers, 'application/x-www-form-urlencoded;charset=utf-8');
      return data.toString();
    }

    if (utils.isObject(data)) {
      setContentTypeIfUnset(headers, 'application/json;charset=utf-8');
      return JSON.stringify(data);
    }

    return data;
  }],
  transformResponse: [function transformResponse(data) {
    /*eslint no-param-reassign:0*/
    if (typeof data === 'string') {
      try {
        data = JSON.parse(data);
      } catch (e) {
        /* Ignore */
      }
    }

    return data;
  }],

  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,
  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',
  maxContentLength: -1,
  validateStatus: function validateStatus(status) {
    return status >= 200 && status < 300;
  }
};
defaults.headers = {
  common: {
    'Accept': 'application/json, text/plain, */*'
  }
};
utils.forEach(['delete', 'get', 'head'], function forEachMethodNoData(method) {
  defaults.headers[method] = {};
});
utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);
});
var defaults_1 = defaults;

/**
 * Throws a `Cancel` if cancellation has been requested.
 */


function throwIfCancellationRequested(config) {
  if (config.cancelToken) {
    config.cancelToken.throwIfRequested();
  }
}
/**
 * Dispatch a request to the server using the configured adapter.
 *
 * @param {object} config The config that is to be used for the request
 * @returns {Promise} The Promise to be fulfilled
 */


var dispatchRequest = function dispatchRequest(config) {
  throwIfCancellationRequested(config); // Ensure headers exist

  config.headers = config.headers || {}; // Transform request data

  config.data = transformData(config.data, config.headers, config.transformRequest); // Flatten headers

  config.headers = utils.merge(config.headers.common || {}, config.headers[config.method] || {}, config.headers);
  utils.forEach(['delete', 'get', 'head', 'post', 'put', 'patch', 'common'], function cleanHeaderConfig(method) {
    delete config.headers[method];
  });
  var adapter = config.adapter || defaults_1.adapter;
  return adapter(config).then(function onAdapterResolution(response) {
    throwIfCancellationRequested(config); // Transform response data

    response.data = transformData(response.data, response.headers, config.transformResponse);
    return response;
  }, function onAdapterRejection(reason) {
    if (!isCancel(reason)) {
      throwIfCancellationRequested(config); // Transform response data

      if (reason && reason.response) {
        reason.response.data = transformData(reason.response.data, reason.response.headers, config.transformResponse);
      }
    }

    return Promise.reject(reason);
  });
};

/**
 * Config-specific merge-function which creates a new config-object
 * by merging two configuration objects together.
 *
 * @param {Object} config1
 * @param {Object} config2
 * @returns {Object} New object resulting from merging config2 to config1
 */


var mergeConfig = function mergeConfig(config1, config2) {
  // eslint-disable-next-line no-param-reassign
  config2 = config2 || {};
  var config = {};
  var valueFromConfig2Keys = ['url', 'method', 'params', 'data'];
  var mergeDeepPropertiesKeys = ['headers', 'auth', 'proxy'];
  var defaultToConfig2Keys = ['baseURL', 'url', 'transformRequest', 'transformResponse', 'paramsSerializer', 'timeout', 'withCredentials', 'adapter', 'responseType', 'xsrfCookieName', 'xsrfHeaderName', 'onUploadProgress', 'onDownloadProgress', 'maxContentLength', 'validateStatus', 'maxRedirects', 'httpAgent', 'httpsAgent', 'cancelToken', 'socketPath'];
  utils.forEach(valueFromConfig2Keys, function valueFromConfig2(prop) {
    if (typeof config2[prop] !== 'undefined') {
      config[prop] = config2[prop];
    }
  });
  utils.forEach(mergeDeepPropertiesKeys, function mergeDeepProperties(prop) {
    if (utils.isObject(config2[prop])) {
      config[prop] = utils.deepMerge(config1[prop], config2[prop]);
    } else if (typeof config2[prop] !== 'undefined') {
      config[prop] = config2[prop];
    } else if (utils.isObject(config1[prop])) {
      config[prop] = utils.deepMerge(config1[prop]);
    } else if (typeof config1[prop] !== 'undefined') {
      config[prop] = config1[prop];
    }
  });
  utils.forEach(defaultToConfig2Keys, function defaultToConfig2(prop) {
    if (typeof config2[prop] !== 'undefined') {
      config[prop] = config2[prop];
    } else if (typeof config1[prop] !== 'undefined') {
      config[prop] = config1[prop];
    }
  });
  var axiosKeys = valueFromConfig2Keys.concat(mergeDeepPropertiesKeys).concat(defaultToConfig2Keys);
  var otherKeys = Object.keys(config2).filter(function filterAxiosKeys(key) {
    return axiosKeys.indexOf(key) === -1;
  });
  utils.forEach(otherKeys, function otherKeysDefaultToConfig2(prop) {
    if (typeof config2[prop] !== 'undefined') {
      config[prop] = config2[prop];
    } else if (typeof config1[prop] !== 'undefined') {
      config[prop] = config1[prop];
    }
  });
  return config;
};

/**
 * Create a new instance of Axios
 *
 * @param {Object} instanceConfig The default config for the instance
 */


function Axios(instanceConfig) {
  this.defaults = instanceConfig;
  this.interceptors = {
    request: new InterceptorManager_1(),
    response: new InterceptorManager_1()
  };
}
/**
 * Dispatch a request
 *
 * @param {Object} config The config specific for this request (merged with this.defaults)
 */


Axios.prototype.request = function request(config) {
  /*eslint no-param-reassign:0*/
  // Allow for axios('example/url'[, config]) a la fetch API
  if (typeof config === 'string') {
    config = arguments[1] || {};
    config.url = arguments[0];
  } else {
    config = config || {};
  }

  config = mergeConfig(this.defaults, config); // Set config.method

  if (config.method) {
    config.method = config.method.toLowerCase();
  } else if (this.defaults.method) {
    config.method = this.defaults.method.toLowerCase();
  } else {
    config.method = 'get';
  } // Hook up interceptors middleware


  var chain = [dispatchRequest, undefined];
  var promise = Promise.resolve(config);
  this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
    chain.unshift(interceptor.fulfilled, interceptor.rejected);
  });
  this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
    chain.push(interceptor.fulfilled, interceptor.rejected);
  });

  while (chain.length) {
    promise = promise.then(chain.shift(), chain.shift());
  }

  return promise;
};

Axios.prototype.getUri = function getUri(config) {
  config = mergeConfig(this.defaults, config);
  return buildURL(config.url, config.params, config.paramsSerializer).replace(/^\?/, '');
}; // Provide aliases for supported request methods


utils.forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function (url, config) {
    return this.request(utils.merge(config || {}, {
      method: method,
      url: url
    }));
  };
});
utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function (url, data, config) {
    return this.request(utils.merge(config || {}, {
      method: method,
      url: url,
      data: data
    }));
  };
});
var Axios_1 = Axios;

/**
 * A `Cancel` is an object that is thrown when an operation is canceled.
 *
 * @class
 * @param {string=} message The message.
 */

function Cancel(message) {
  this.message = message;
}

Cancel.prototype.toString = function toString() {
  return 'Cancel' + (this.message ? ': ' + this.message : '');
};

Cancel.prototype.__CANCEL__ = true;
var Cancel_1 = Cancel;

/**
 * A `CancelToken` is an object that can be used to request cancellation of an operation.
 *
 * @class
 * @param {Function} executor The executor function.
 */


function CancelToken(executor) {
  if (typeof executor !== 'function') {
    throw new TypeError('executor must be a function.');
  }

  var resolvePromise;
  this.promise = new Promise(function promiseExecutor(resolve) {
    resolvePromise = resolve;
  });
  var token = this;
  executor(function cancel(message) {
    if (token.reason) {
      // Cancellation has already been requested
      return;
    }

    token.reason = new Cancel_1(message);
    resolvePromise(token.reason);
  });
}
/**
 * Throws a `Cancel` if cancellation has been requested.
 */


CancelToken.prototype.throwIfRequested = function throwIfRequested() {
  if (this.reason) {
    throw this.reason;
  }
};
/**
 * Returns an object that contains a new `CancelToken` and a function that, when called,
 * cancels the `CancelToken`.
 */


CancelToken.source = function source() {
  var cancel;
  var token = new CancelToken(function executor(c) {
    cancel = c;
  });
  return {
    token: token,
    cancel: cancel
  };
};

var CancelToken_1 = CancelToken;

/**
 * Syntactic sugar for invoking a function and expanding an array for arguments.
 *
 * Common use case would be to use `Function.prototype.apply`.
 *
 *  ```js
 *  function f(x, y, z) {}
 *  var args = [1, 2, 3];
 *  f.apply(null, args);
 *  ```
 *
 * With `spread` this example can be re-written.
 *
 *  ```js
 *  spread(function(x, y, z) {})([1, 2, 3]);
 *  ```
 *
 * @param {Function} callback
 * @returns {Function}
 */

var spread = function spread(callback) {
  return function wrap(arr) {
    return callback.apply(null, arr);
  };
};

/**
 * Create an instance of Axios
 *
 * @param {Object} defaultConfig The default config for the instance
 * @return {Axios} A new instance of Axios
 */


function createInstance(defaultConfig) {
  var context = new Axios_1(defaultConfig);
  var instance = bind(Axios_1.prototype.request, context); // Copy axios.prototype to instance

  utils.extend(instance, Axios_1.prototype, context); // Copy context to instance

  utils.extend(instance, context);
  return instance;
} // Create the default instance to be exported


var axios = createInstance(defaults_1); // Expose Axios class to allow class inheritance

axios.Axios = Axios_1; // Factory for creating new instances

axios.create = function create(instanceConfig) {
  return createInstance(mergeConfig(axios.defaults, instanceConfig));
}; // Expose Cancel & CancelToken


axios.Cancel = Cancel_1;
axios.CancelToken = CancelToken_1;
axios.isCancel = isCancel; // Expose all/spread

axios.all = function all(promises) {
  return Promise.all(promises);
};

axios.spread = spread;
var axios_1 = axios; // Allow use of default import syntax in TypeScript

var _default = axios;
axios_1.default = _default;

var axios$1 = axios_1;

function sections(data) {
  var postsRaw = data.records;
  var sections = postsRaw.map(function (obj) {
    var rObj = {};
    rObj['id'] = obj.id;
    rObj['name'] = obj.fields.Name;
    rObj['base'] = obj.fields.base;
    rObj['extra'] = obj.fields.Extra;
    return rObj;
  });
  return sections;
}

var parsers = {
  sections: sections
};

var API_KEY = 'key2VypkexLEwn6Mj';

function sections$1() {
  return _sections.apply(this, arguments);
}

function _sections() {
  _sections = _asyncToGenerator( /*#__PURE__*/regenerator.mark(function _callee() {
    var response;
    return regenerator.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return axios$1.get("https://api.airtable.com/v0/app45mD8poMgU9xCJ/Table%201?api_key=".concat(API_KEY));

          case 2:
            response = _context.sent;
            return _context.abrupt("return", parsers.sections(response.data));

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _sections.apply(this, arguments);
}

var requests = {
  sections: sections$1
};

function _createSuper$1(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$1(); return function () { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct$1() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function get_each_context(ctx, list, i) {
  var child_ctx = ctx.slice();
  child_ctx[10] = list[i];
  return child_ctx;
} // (38:0) {#each sections as section}


function create_each_block(ctx) {
  var updating_total;
  var updating_totalExtra;
  var updating_selected;
  var updating_selectedExtra;
  var current;

  function choicecard_total_binding(value) {
    /*choicecard_total_binding*/
    ctx[6].call(null, value);
  }

  function choicecard_totalExtra_binding(value) {
    /*choicecard_totalExtra_binding*/
    ctx[7].call(null, value);
  }

  function choicecard_selected_binding(value) {
    /*choicecard_selected_binding*/
    ctx[8].call(null, value);
  }

  function choicecard_selectedExtra_binding(value) {
    /*choicecard_selectedExtra_binding*/
    ctx[9].call(null, value);
  }

  var choicecard_props = {
    section:
    /*section*/
    ctx[10]
  };

  if (
  /*total*/
  ctx[1] !== void 0) {
    choicecard_props.total =
    /*total*/
    ctx[1];
  }

  if (
  /*totalExtra*/
  ctx[2] !== void 0) {
    choicecard_props.totalExtra =
    /*totalExtra*/
    ctx[2];
  }

  if (
  /*selected*/
  ctx[3] !== void 0) {
    choicecard_props.selected =
    /*selected*/
    ctx[3];
  }

  if (
  /*selectedExtra*/
  ctx[4] !== void 0) {
    choicecard_props.selectedExtra =
    /*selectedExtra*/
    ctx[4];
  }

  var choicecard = new ChoiceCard({
    props: choicecard_props
  });
  binding_callbacks.push(function () {
    return bind$1(choicecard, "total", choicecard_total_binding);
  });
  binding_callbacks.push(function () {
    return bind$1(choicecard, "totalExtra", choicecard_totalExtra_binding);
  });
  binding_callbacks.push(function () {
    return bind$1(choicecard, "selected", choicecard_selected_binding);
  });
  binding_callbacks.push(function () {
    return bind$1(choicecard, "selectedExtra", choicecard_selectedExtra_binding);
  });
  return {
    c: function c() {
      create_component(choicecard.$$.fragment);
    },
    l: function l(nodes) {
      claim_component(choicecard.$$.fragment, nodes);
    },
    m: function m(target, anchor) {
      mount_component(choicecard, target, anchor);
      current = true;
    },
    p: function p(ctx, dirty) {
      var choicecard_changes = {};
      if (dirty &
      /*sections*/
      1) choicecard_changes.section =
      /*section*/
      ctx[10];

      if (!updating_total && dirty &
      /*total*/
      2) {
        updating_total = true;
        choicecard_changes.total =
        /*total*/
        ctx[1];
        add_flush_callback(function () {
          return updating_total = false;
        });
      }

      if (!updating_totalExtra && dirty &
      /*totalExtra*/
      4) {
        updating_totalExtra = true;
        choicecard_changes.totalExtra =
        /*totalExtra*/
        ctx[2];
        add_flush_callback(function () {
          return updating_totalExtra = false;
        });
      }

      if (!updating_selected && dirty &
      /*selected*/
      8) {
        updating_selected = true;
        choicecard_changes.selected =
        /*selected*/
        ctx[3];
        add_flush_callback(function () {
          return updating_selected = false;
        });
      }

      if (!updating_selectedExtra && dirty &
      /*selectedExtra*/
      16) {
        updating_selectedExtra = true;
        choicecard_changes.selectedExtra =
        /*selectedExtra*/
        ctx[4];
        add_flush_callback(function () {
          return updating_selectedExtra = false;
        });
      }

      choicecard.$set(choicecard_changes);
    },
    i: function i(local) {
      if (current) return;
      transition_in(choicecard.$$.fragment, local);
      current = true;
    },
    o: function o(local) {
      transition_out(choicecard.$$.fragment, local);
      current = false;
    },
    d: function d(detaching) {
      destroy_component(choicecard, detaching);
    }
  };
} // (43:0) {#if totalExtra}


function create_if_block$1(ctx) {
  var h1;
  var t0;
  var t1_value =
  /*totalExtra*/
  ctx[2] +
  /*total*/
  ctx[1] + "";
  var t1;
  return {
    c: function c() {
      h1 = element("h1");
      t0 = text("Max Total: ");
      t1 = text(t1_value);
    },
    l: function l(nodes) {
      h1 = claim_element(nodes, "H1", {});
      var h1_nodes = children(h1);
      t0 = claim_text(h1_nodes, "Max Total: ");
      t1 = claim_text(h1_nodes, t1_value);
      h1_nodes.forEach(detach);
    },
    m: function m(target, anchor) {
      insert(target, h1, anchor);
      append(h1, t0);
      append(h1, t1);
    },
    p: function p(ctx, dirty) {
      if (dirty &
      /*totalExtra, total*/
      6 && t1_value !== (t1_value =
      /*totalExtra*/
      ctx[2] +
      /*total*/
      ctx[1] + "")) set_data(t1, t1_value);
    },
    d: function d(detaching) {
      if (detaching) detach(h1);
    }
  };
}

function create_fragment$1(ctx) {
  var t0;
  var t1;
  var h10;
  var t2;
  var t3;
  var t4;
  var t5;
  var h11;
  var t6;
  var t7;
  var p;
  var t8;
  var a0;
  var t9;
  var t10;
  var a1;
  var t11;
  var current;
  var each_value =
  /*sections*/
  ctx[0];
  var each_blocks = [];

  for (var i = 0; i < each_value.length; i += 1) {
    each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
  }

  var out = function out(i) {
    return transition_out(each_blocks[i], 1, 1, function () {
      each_blocks[i] = null;
    });
  };

  var if_block =
  /*totalExtra*/
  ctx[2] && create_if_block$1(ctx);
  return {
    c: function c() {
      t0 = space();

      for (var _i = 0; _i < each_blocks.length; _i += 1) {
        each_blocks[_i].c();
      }

      t1 = space();
      h10 = element("h1");
      t2 = text("Total: ");
      t3 = text(
      /*total*/
      ctx[1]);
      t4 = space();
      if (if_block) if_block.c();
      t5 = space();
      h11 = element("h1");
      t6 = text(
      /*sel*/
      ctx[5]);
      t7 = space();
      p = element("p");
      t8 = text("Icons made by\n");
      a0 = element("a");
      t9 = text("Freepik");
      t10 = text("\nfrom\n");
      a1 = element("a");
      t11 = text("www.flaticon.com");
      this.h();
    },
    l: function l(nodes) {
      var head_nodes = query_selector_all("[data-svelte=\"svelte-oofwcx\"]", document.head);
      head_nodes.forEach(detach);
      t0 = claim_space(nodes);

      for (var _i2 = 0; _i2 < each_blocks.length; _i2 += 1) {
        each_blocks[_i2].l(nodes);
      }

      t1 = claim_space(nodes);
      h10 = claim_element(nodes, "H1", {});
      var h10_nodes = children(h10);
      t2 = claim_text(h10_nodes, "Total: ");
      t3 = claim_text(h10_nodes,
      /*total*/
      ctx[1]);
      h10_nodes.forEach(detach);
      t4 = claim_space(nodes);
      if (if_block) if_block.l(nodes);
      t5 = claim_space(nodes);
      h11 = claim_element(nodes, "H1", {});
      var h11_nodes = children(h11);
      t6 = claim_text(h11_nodes,
      /*sel*/
      ctx[5]);
      h11_nodes.forEach(detach);
      t7 = claim_space(nodes);
      p = claim_element(nodes, "P", {});
      var p_nodes = children(p);
      t8 = claim_text(p_nodes, "Icons made by\n");
      a0 = claim_element(p_nodes, "A", {
        href: true,
        title: true
      });
      var a0_nodes = children(a0);
      t9 = claim_text(a0_nodes, "Freepik");
      a0_nodes.forEach(detach);
      t10 = claim_text(p_nodes, "\nfrom\n");
      a1 = claim_element(p_nodes, "A", {
        href: true,
        title: true
      });
      var a1_nodes = children(a1);
      t11 = claim_text(a1_nodes, "www.flaticon.com");
      a1_nodes.forEach(detach);
      p_nodes.forEach(detach);
      this.h();
    },
    h: function h() {
      document.title = "Sapper project template";
      attr(a0, "href", "https://www.flaticon.com/authors/freepik");
      attr(a0, "title", "Freepik");
      attr(a1, "href", "https://www.flaticon.com/");
      attr(a1, "title", "Flaticon");
    },
    m: function m(target, anchor) {
      insert(target, t0, anchor);

      for (var _i3 = 0; _i3 < each_blocks.length; _i3 += 1) {
        each_blocks[_i3].m(target, anchor);
      }

      insert(target, t1, anchor);
      insert(target, h10, anchor);
      append(h10, t2);
      append(h10, t3);
      insert(target, t4, anchor);
      if (if_block) if_block.m(target, anchor);
      insert(target, t5, anchor);
      insert(target, h11, anchor);
      append(h11, t6);
      insert(target, t7, anchor);
      insert(target, p, anchor);
      append(p, t8);
      append(p, a0);
      append(a0, t9);
      append(p, t10);
      append(p, a1);
      append(a1, t11);
      current = true;
    },
    p: function p(ctx, _ref) {
      var _ref2 = _slicedToArray(_ref, 1),
          dirty = _ref2[0];

      if (dirty &
      /*sections, total, totalExtra, selected, selectedExtra*/
      31) {
        each_value =
        /*sections*/
        ctx[0];

        var _i4;

        for (_i4 = 0; _i4 < each_value.length; _i4 += 1) {
          var child_ctx = get_each_context(ctx, each_value, _i4);

          if (each_blocks[_i4]) {
            each_blocks[_i4].p(child_ctx, dirty);

            transition_in(each_blocks[_i4], 1);
          } else {
            each_blocks[_i4] = create_each_block(child_ctx);

            each_blocks[_i4].c();

            transition_in(each_blocks[_i4], 1);

            each_blocks[_i4].m(t1.parentNode, t1);
          }
        }

        group_outros();

        for (_i4 = each_value.length; _i4 < each_blocks.length; _i4 += 1) {
          out(_i4);
        }

        check_outros();
      }

      if (!current || dirty &
      /*total*/
      2) set_data(t3,
      /*total*/
      ctx[1]);

      if (
      /*totalExtra*/
      ctx[2]) {
        if (if_block) {
          if_block.p(ctx, dirty);
        } else {
          if_block = create_if_block$1(ctx);
          if_block.c();
          if_block.m(t5.parentNode, t5);
        }
      } else if (if_block) {
        if_block.d(1);
        if_block = null;
      }

      if (!current || dirty &
      /*sel*/
      32) set_data(t6,
      /*sel*/
      ctx[5]);
    },
    i: function i(local) {
      if (current) return;

      for (var _i5 = 0; _i5 < each_value.length; _i5 += 1) {
        transition_in(each_blocks[_i5]);
      }

      current = true;
    },
    o: function o(local) {
      each_blocks = each_blocks.filter(Boolean);

      for (var _i6 = 0; _i6 < each_blocks.length; _i6 += 1) {
        transition_out(each_blocks[_i6]);
      }

      current = false;
    },
    d: function d(detaching) {
      if (detaching) detach(t0);
      destroy_each(each_blocks, detaching);
      if (detaching) detach(t1);
      if (detaching) detach(h10);
      if (detaching) detach(t4);
      if (if_block) if_block.d(detaching);
      if (detaching) detach(t5);
      if (detaching) detach(h11);
      if (detaching) detach(t7);
      if (detaching) detach(p);
    }
  };
}

function preload() {
  return _preload.apply(this, arguments);
}

function _preload() {
  _preload = _asyncToGenerator( /*#__PURE__*/regenerator.mark(function _callee() {
    var sections;
    return regenerator.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return requests.sections();

          case 3:
            sections = _context.sent;
            return _context.abrupt("return", {
              sections: sections
            });

          case 7:
            _context.prev = 7;
            _context.t0 = _context["catch"](0);
            console.log("calc index.svelte", _context.t0);

          case 10:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 7]]);
  }));
  return _preload.apply(this, arguments);
}

function instance$1($$self, $$props, $$invalidate) {
  var sections = $$props.sections;
  var total = 0;
  var totalExtra = 0;
  var selected = [];
  var selectedExtra = [];

  function choicecard_total_binding(value) {
    total = value;
    $$invalidate(1, total);
  }

  function choicecard_totalExtra_binding(value) {
    totalExtra = value;
    $$invalidate(2, totalExtra);
  }

  function choicecard_selected_binding(value) {
    selected = value;
    $$invalidate(3, selected);
  }

  function choicecard_selectedExtra_binding(value) {
    selectedExtra = value;
    $$invalidate(4, selectedExtra);
  }

  $$self.$set = function ($$props) {
    if ("sections" in $$props) $$invalidate(0, sections = $$props.sections);
  };

  var sel;

  $$self.$$.update = function () {
    if ($$self.$$.dirty &
    /*selected*/
    8) {
       $$invalidate(5, sel = selected.toString());
    }
  };

  return [sections, total, totalExtra, selected, selectedExtra, sel, choicecard_total_binding, choicecard_totalExtra_binding, choicecard_selected_binding, choicecard_selectedExtra_binding];
}

var Calculate = /*#__PURE__*/function (_SvelteComponent) {
  _inherits(Calculate, _SvelteComponent);

  var _super = _createSuper$1(Calculate);

  function Calculate(options) {
    var _this;

    _classCallCheck(this, Calculate);

    _this = _super.call(this);
    init(_assertThisInitialized(_this), options, instance$1, create_fragment$1, safe_not_equal, {
      sections: 0
    });
    return _this;
  }

  return Calculate;
}(SvelteComponent);

export default Calculate;
export { preload };
