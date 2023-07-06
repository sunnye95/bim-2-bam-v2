import {
  require_react_dom,
  require_scheduler
} from "./chunk-ZNYCC2V3.js";
import {
  require_react
} from "./chunk-FLAVOKRJ.js";
import {
  __commonJS,
  __toESM
} from "./chunk-AC2VUBZ6.js";

// node_modules/classnames/index.js
var require_classnames = __commonJS({
  "node_modules/classnames/index.js"(exports, module) {
    (function() {
      "use strict";
      var hasOwn = {}.hasOwnProperty;
      var nativeCodeString = "[native code]";
      function classNames2() {
        var classes = [];
        for (var i3 = 0; i3 < arguments.length; i3++) {
          var arg = arguments[i3];
          if (!arg)
            continue;
          var argType = typeof arg;
          if (argType === "string" || argType === "number") {
            classes.push(arg);
          } else if (Array.isArray(arg)) {
            if (arg.length) {
              var inner = classNames2.apply(null, arg);
              if (inner) {
                classes.push(inner);
              }
            }
          } else if (argType === "object") {
            if (arg.toString !== Object.prototype.toString && !arg.toString.toString().includes("[native code]")) {
              classes.push(arg.toString());
              continue;
            }
            for (var key in arg) {
              if (hasOwn.call(arg, key) && arg[key]) {
                classes.push(key);
              }
            }
          }
        }
        return classes.join(" ");
      }
      if (typeof module !== "undefined" && module.exports) {
        classNames2.default = classNames2;
        module.exports = classNames2;
      } else if (typeof define === "function" && typeof define.amd === "object" && define.amd) {
        define("classnames", [], function() {
          return classNames2;
        });
      } else {
        window.classNames = classNames2;
      }
    })();
  }
});

// node_modules/tiny-emitter/index.js
var require_tiny_emitter = __commonJS({
  "node_modules/tiny-emitter/index.js"(exports, module) {
    function E3() {
    }
    E3.prototype = {
      on: function(name, callback, ctx) {
        var e3 = this.e || (this.e = {});
        (e3[name] || (e3[name] = [])).push({
          fn: callback,
          ctx
        });
        return this;
      },
      once: function(name, callback, ctx) {
        var self = this;
        function listener2() {
          self.off(name, listener2);
          callback.apply(ctx, arguments);
        }
        ;
        listener2._ = callback;
        return this.on(name, listener2, ctx);
      },
      emit: function(name) {
        var data = [].slice.call(arguments, 1);
        var evtArr = ((this.e || (this.e = {}))[name] || []).slice();
        var i3 = 0;
        var len = evtArr.length;
        for (i3; i3 < len; i3++) {
          evtArr[i3].fn.apply(evtArr[i3].ctx, data);
        }
        return this;
      },
      off: function(name, callback) {
        var e3 = this.e || (this.e = {});
        var evts = e3[name];
        var liveEvents = [];
        if (evts && callback) {
          for (var i3 = 0, len = evts.length; i3 < len; i3++) {
            if (evts[i3].fn !== callback && evts[i3].fn._ !== callback)
              liveEvents.push(evts[i3]);
          }
        }
        liveEvents.length ? e3[name] = liveEvents : delete e3[name];
        return this;
      }
    };
    module.exports = E3;
    module.exports.TinyEmitter = E3;
  }
});

// node_modules/@handsontable/formulajs/lib/utils/error.js
var require_error = __commonJS({
  "node_modules/@handsontable/formulajs/lib/utils/error.js"(exports) {
    exports.nil = new Error("#NULL!");
    exports.div0 = new Error("#DIV/0!");
    exports.value = new Error("#VALUE!");
    exports.ref = new Error("#REF!");
    exports.name = new Error("#NAME?");
    exports.num = new Error("#NUM!");
    exports.na = new Error("#N/A");
    exports.error = new Error("#ERROR!");
    exports.data = new Error("#GETTING_DATA");
  }
});

// node_modules/@handsontable/formulajs/lib/utils/common.js
var require_common = __commonJS({
  "node_modules/@handsontable/formulajs/lib/utils/common.js"(exports) {
    var error2 = require_error();
    exports.flattenShallow = function(array) {
      if (!array || !array.reduce) {
        return array;
      }
      return array.reduce(function(a3, b2) {
        var aIsArray = Array.isArray(a3);
        var bIsArray = Array.isArray(b2);
        if (aIsArray && bIsArray) {
          return a3.concat(b2);
        }
        if (aIsArray) {
          a3.push(b2);
          return a3;
        }
        if (bIsArray) {
          return [a3].concat(b2);
        }
        return [a3, b2];
      });
    };
    exports.isFlat = function(array) {
      if (!array) {
        return false;
      }
      for (var i3 = 0; i3 < array.length; ++i3) {
        if (Array.isArray(array[i3])) {
          return false;
        }
      }
      return true;
    };
    exports.flatten = function() {
      var result = exports.argsToArray.apply(null, arguments);
      while (!exports.isFlat(result)) {
        result = exports.flattenShallow(result);
      }
      return result;
    };
    exports.argsToArray = function(args) {
      var result = [];
      exports.arrayEach(args, function(value) {
        result.push(value);
      });
      return result;
    };
    exports.numbers = function() {
      var possibleNumbers = this.flatten.apply(null, arguments);
      return possibleNumbers.filter(function(el) {
        return typeof el === "number";
      });
    };
    exports.cleanFloat = function(number) {
      var power = 1e14;
      return Math.round(number * power) / power;
    };
    exports.parseBool = function(bool) {
      if (typeof bool === "boolean") {
        return bool;
      }
      if (bool instanceof Error) {
        return bool;
      }
      if (typeof bool === "number") {
        return bool !== 0;
      }
      if (typeof bool === "string") {
        var up = bool.toUpperCase();
        if (up === "TRUE") {
          return true;
        }
        if (up === "FALSE") {
          return false;
        }
      }
      if (bool instanceof Date && !isNaN(bool)) {
        return true;
      }
      return error2.value;
    };
    exports.parseNumber = function(string) {
      if (string === void 0 || string === "") {
        return error2.value;
      }
      if (!isNaN(string)) {
        return parseFloat(string);
      }
      return error2.value;
    };
    exports.parseNumberArray = function(arr) {
      var len;
      if (!arr || (len = arr.length) === 0) {
        return error2.value;
      }
      var parsed;
      while (len--) {
        parsed = exports.parseNumber(arr[len]);
        if (parsed === error2.value) {
          return parsed;
        }
        arr[len] = parsed;
      }
      return arr;
    };
    exports.parseMatrix = function(matrix) {
      var n3;
      if (!matrix || (n3 = matrix.length) === 0) {
        return error2.value;
      }
      var pnarr;
      for (var i3 = 0; i3 < matrix.length; i3++) {
        pnarr = exports.parseNumberArray(matrix[i3]);
        matrix[i3] = pnarr;
        if (pnarr instanceof Error) {
          return pnarr;
        }
      }
      return matrix;
    };
    var d1900 = new Date(Date.UTC(1900, 0, 1));
    exports.parseDate = function(date) {
      if (!isNaN(date)) {
        if (date instanceof Date) {
          return new Date(date);
        }
        var d3 = parseInt(date, 10);
        if (d3 < 0) {
          return error2.num;
        }
        if (d3 <= 60) {
          return new Date(d1900.getTime() + (d3 - 1) * 864e5);
        }
        return new Date(d1900.getTime() + (d3 - 2) * 864e5);
      }
      if (typeof date === "string") {
        date = new Date(date);
        if (!isNaN(date)) {
          return date;
        }
      }
      return error2.value;
    };
    exports.parseDateArray = function(arr) {
      var len = arr.length;
      var parsed;
      while (len--) {
        parsed = this.parseDate(arr[len]);
        if (parsed === error2.value) {
          return parsed;
        }
        arr[len] = parsed;
      }
      return arr;
    };
    exports.anyIsError = function() {
      var n3 = arguments.length;
      while (n3--) {
        if (arguments[n3] instanceof Error) {
          return true;
        }
      }
      return false;
    };
    exports.arrayValuesToNumbers = function(arr) {
      var n3 = arr.length;
      var el;
      while (n3--) {
        el = arr[n3];
        if (typeof el === "number") {
          continue;
        }
        if (el === true) {
          arr[n3] = 1;
          continue;
        }
        if (el === false) {
          arr[n3] = 0;
          continue;
        }
        if (typeof el === "string") {
          var number = this.parseNumber(el);
          if (number instanceof Error) {
            arr[n3] = 0;
          } else {
            arr[n3] = number;
          }
        }
      }
      return arr;
    };
    exports.rest = function(array, idx) {
      idx = idx || 1;
      if (!array || typeof array.slice !== "function") {
        return array;
      }
      return array.slice(idx);
    };
    exports.initial = function(array, idx) {
      idx = idx || 1;
      if (!array || typeof array.slice !== "function") {
        return array;
      }
      return array.slice(0, array.length - idx);
    };
    exports.arrayEach = function(array, iteratee) {
      var index = -1, length = array.length;
      while (++index < length) {
        if (iteratee(array[index], index, array) === false) {
          break;
        }
      }
      return array;
    };
    exports.transpose = function(matrix) {
      if (!matrix) {
        return error2.value;
      }
      return matrix[0].map(function(col, i3) {
        return matrix.map(function(row) {
          return row[i3];
        });
      });
    };
  }
});

// node_modules/@handsontable/formulajs/lib/text.js
var require_text = __commonJS({
  "node_modules/@handsontable/formulajs/lib/text.js"(exports) {
    var utils = require_common();
    var error2 = require_error();
    exports.ASC = function() {
      throw new Error("ASC is not implemented");
    };
    exports.BAHTTEXT = function() {
      throw new Error("BAHTTEXT is not implemented");
    };
    exports.CHAR = function(number) {
      number = utils.parseNumber(number);
      if (number instanceof Error) {
        return number;
      }
      return String.fromCharCode(number);
    };
    exports.CLEAN = function(text) {
      text = text || "";
      var re = /[\0-\x1F]/g;
      return text.replace(re, "");
    };
    exports.CODE = function(text) {
      text = text || "";
      var result = text.charCodeAt(0);
      if (isNaN(result)) {
        result = error2.na;
      }
      return result;
    };
    exports.CONCATENATE = function() {
      var args = utils.flatten(arguments);
      var trueFound = 0;
      while ((trueFound = args.indexOf(true)) > -1) {
        args[trueFound] = "TRUE";
      }
      var falseFound = 0;
      while ((falseFound = args.indexOf(false)) > -1) {
        args[falseFound] = "FALSE";
      }
      return args.join("");
    };
    exports.DBCS = function() {
      throw new Error("DBCS is not implemented");
    };
    exports.DOLLAR = function() {
      throw new Error("DOLLAR is not implemented");
    };
    exports.EXACT = function(text1, text2) {
      if (arguments.length !== 2) {
        return error2.na;
      }
      return text1 === text2;
    };
    exports.FIND = function(find_text, within_text, position) {
      if (arguments.length < 2) {
        return error2.na;
      }
      position = position === void 0 ? 0 : position;
      return within_text ? within_text.indexOf(find_text, position - 1) + 1 : null;
    };
    exports.FIXED = function() {
      throw new Error("FIXED is not implemented");
    };
    exports.HTML2TEXT = function(value) {
      var result = "";
      if (value) {
        if (value instanceof Array) {
          value.forEach(function(line) {
            if (result !== "") {
              result += "\n";
            }
            result += line.replace(/<(?:.|\n)*?>/gm, "");
          });
        } else {
          result = value.replace(/<(?:.|\n)*?>/gm, "");
        }
      }
      return result;
    };
    exports.LEFT = function(text, number) {
      number = number === void 0 ? 1 : number;
      number = utils.parseNumber(number);
      if (number instanceof Error || typeof text !== "string") {
        return error2.value;
      }
      return text ? text.substring(0, number) : null;
    };
    exports.LEN = function(text) {
      if (arguments.length === 0) {
        return error2.error;
      }
      if (typeof text === "string") {
        return text ? text.length : 0;
      }
      if (text.length) {
        return text.length;
      }
      return error2.value;
    };
    exports.LOWER = function(text) {
      if (typeof text !== "string") {
        return error2.value;
      }
      return text ? text.toLowerCase() : text;
    };
    exports.MID = function(text, start, number) {
      start = utils.parseNumber(start);
      number = utils.parseNumber(number);
      if (utils.anyIsError(start, number) || typeof text !== "string") {
        return number;
      }
      var begin = start - 1;
      var end = begin + number;
      return text.substring(begin, end);
    };
    exports.NUMBERVALUE = function(text, decimal_separator, group_separator) {
      decimal_separator = typeof decimal_separator === "undefined" ? "." : decimal_separator;
      group_separator = typeof group_separator === "undefined" ? "," : group_separator;
      return Number(text.replace(decimal_separator, ".").replace(group_separator, ""));
    };
    exports.PRONETIC = function() {
      throw new Error("PRONETIC is not implemented");
    };
    exports.PROPER = function(text) {
      if (text === void 0 || text.length === 0) {
        return error2.value;
      }
      if (text === true) {
        text = "TRUE";
      }
      if (text === false) {
        text = "FALSE";
      }
      if (isNaN(text) && typeof text === "number") {
        return error2.value;
      }
      if (typeof text === "number") {
        text = "" + text;
      }
      return text.replace(/\w\S*/g, function(txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
      });
    };
    exports.REGEXEXTRACT = function(text, regular_expression) {
      if (arguments.length < 2) {
        return error2.na;
      }
      var match = text.match(new RegExp(regular_expression));
      return match ? match[match.length > 1 ? match.length - 1 : 0] : null;
    };
    exports.REGEXMATCH = function(text, regular_expression, full) {
      if (arguments.length < 2) {
        return error2.na;
      }
      var match = text.match(new RegExp(regular_expression));
      return full ? match : !!match;
    };
    exports.REGEXREPLACE = function(text, regular_expression, replacement) {
      if (arguments.length < 3) {
        return error2.na;
      }
      return text.replace(new RegExp(regular_expression), replacement);
    };
    exports.REPLACE = function(text, position, length, new_text) {
      position = utils.parseNumber(position);
      length = utils.parseNumber(length);
      if (utils.anyIsError(position, length) || typeof text !== "string" || typeof new_text !== "string") {
        return error2.value;
      }
      return text.substr(0, position - 1) + new_text + text.substr(position - 1 + length);
    };
    exports.REPT = function(text, number) {
      number = utils.parseNumber(number);
      if (number instanceof Error) {
        return number;
      }
      return new Array(number + 1).join(text);
    };
    exports.RIGHT = function(text, number) {
      number = number === void 0 ? 1 : number;
      number = utils.parseNumber(number);
      if (number instanceof Error) {
        return number;
      }
      return text ? text.substring(text.length - number) : error2.na;
    };
    exports.SEARCH = function(find_text, within_text, position) {
      var foundAt;
      if (typeof find_text !== "string" || typeof within_text !== "string") {
        return error2.value;
      }
      position = position === void 0 ? 0 : position;
      foundAt = within_text.toLowerCase().indexOf(find_text.toLowerCase(), position - 1) + 1;
      return foundAt === 0 ? error2.value : foundAt;
    };
    exports.SPLIT = function(text, separator) {
      return text.split(separator);
    };
    exports.SUBSTITUTE = function(text, old_text, new_text, occurrence) {
      if (arguments.length < 2) {
        return error2.na;
      }
      if (!text || !old_text || !new_text) {
        return text;
      } else if (occurrence === void 0) {
        return text.replace(new RegExp(old_text, "g"), new_text);
      } else {
        var index = 0;
        var i3 = 0;
        while (text.indexOf(old_text, index) > 0) {
          index = text.indexOf(old_text, index + 1);
          i3++;
          if (i3 === occurrence) {
            return text.substring(0, index) + new_text + text.substring(index + old_text.length);
          }
        }
      }
    };
    exports.T = function(value) {
      return typeof value === "string" ? value : "";
    };
    exports.TEXT = function() {
      throw new Error("TEXT is not implemented");
    };
    exports.TRIM = function(text) {
      if (typeof text !== "string") {
        return error2.value;
      }
      return text.replace(/ +/g, " ").trim();
    };
    exports.UNICHAR = exports.CHAR;
    exports.UNICODE = exports.CODE;
    exports.UPPER = function(text) {
      if (typeof text !== "string") {
        return error2.value;
      }
      return text.toUpperCase();
    };
    exports.VALUE = function() {
      throw new Error("VALUE is not implemented");
    };
  }
});

// node_modules/jstat/dist/jstat.js
var require_jstat = __commonJS({
  "node_modules/jstat/dist/jstat.js"(exports, module) {
    (function(window2, factory) {
      if (typeof exports === "object") {
        module.exports = factory();
      } else if (typeof define === "function" && define.amd) {
        define(factory);
      } else {
        window2.jStat = factory();
      }
    })(exports, function() {
      var jStat = function(Math2, undefined2) {
        var concat = Array.prototype.concat;
        var slice2 = Array.prototype.slice;
        var toString = Object.prototype.toString;
        function calcRdx(n3, m2) {
          var val = n3 > m2 ? n3 : m2;
          return Math2.pow(
            10,
            17 - ~~(Math2.log(val > 0 ? val : -val) * Math2.LOG10E)
          );
        }
        var isArray = Array.isArray || function isArray2(arg) {
          return toString.call(arg) === "[object Array]";
        };
        function isFunction(arg) {
          return toString.call(arg) === "[object Function]";
        }
        function isNumber(num) {
          return typeof num === "number" ? num - num === 0 : false;
        }
        function toVector(arr) {
          return concat.apply([], arr);
        }
        function jStat2() {
          return new jStat2._init(arguments);
        }
        jStat2.fn = jStat2.prototype;
        jStat2._init = function _init(args) {
          if (isArray(args[0])) {
            if (isArray(args[0][0])) {
              if (isFunction(args[1]))
                args[0] = jStat2.map(args[0], args[1]);
              for (var i3 = 0; i3 < args[0].length; i3++)
                this[i3] = args[0][i3];
              this.length = args[0].length;
            } else {
              this[0] = isFunction(args[1]) ? jStat2.map(args[0], args[1]) : args[0];
              this.length = 1;
            }
          } else if (isNumber(args[0])) {
            this[0] = jStat2.seq.apply(null, args);
            this.length = 1;
          } else if (args[0] instanceof jStat2) {
            return jStat2(args[0].toArray());
          } else {
            this[0] = [];
            this.length = 1;
          }
          return this;
        };
        jStat2._init.prototype = jStat2.prototype;
        jStat2._init.constructor = jStat2;
        jStat2.utils = {
          calcRdx,
          isArray,
          isFunction,
          isNumber,
          toVector
        };
        jStat2._random_fn = Math2.random;
        jStat2.setRandom = function setRandom(fn2) {
          if (typeof fn2 !== "function")
            throw new TypeError("fn is not a function");
          jStat2._random_fn = fn2;
        };
        jStat2.extend = function extend(obj) {
          var i3, j2;
          if (arguments.length === 1) {
            for (j2 in obj)
              jStat2[j2] = obj[j2];
            return this;
          }
          for (i3 = 1; i3 < arguments.length; i3++) {
            for (j2 in arguments[i3])
              obj[j2] = arguments[i3][j2];
          }
          return obj;
        };
        jStat2.rows = function rows(arr) {
          return arr.length || 1;
        };
        jStat2.cols = function cols(arr) {
          return arr[0].length || 1;
        };
        jStat2.dimensions = function dimensions(arr) {
          return {
            rows: jStat2.rows(arr),
            cols: jStat2.cols(arr)
          };
        };
        jStat2.row = function row(arr, index) {
          if (isArray(index)) {
            return index.map(function(i3) {
              return jStat2.row(arr, i3);
            });
          }
          return arr[index];
        };
        jStat2.rowa = function rowa(arr, i3) {
          return jStat2.row(arr, i3);
        };
        jStat2.col = function col(arr, index) {
          if (isArray(index)) {
            var submat = jStat2.arange(arr.length).map(function() {
              return new Array(index.length);
            });
            index.forEach(function(ind, i4) {
              jStat2.arange(arr.length).forEach(function(j2) {
                submat[j2][i4] = arr[j2][ind];
              });
            });
            return submat;
          }
          var column = new Array(arr.length);
          for (var i3 = 0; i3 < arr.length; i3++)
            column[i3] = [arr[i3][index]];
          return column;
        };
        jStat2.cola = function cola(arr, i3) {
          return jStat2.col(arr, i3).map(function(a3) {
            return a3[0];
          });
        };
        jStat2.diag = function diag(arr) {
          var nrow = jStat2.rows(arr);
          var res = new Array(nrow);
          for (var row = 0; row < nrow; row++)
            res[row] = [arr[row][row]];
          return res;
        };
        jStat2.antidiag = function antidiag(arr) {
          var nrow = jStat2.rows(arr) - 1;
          var res = new Array(nrow);
          for (var i3 = 0; nrow >= 0; nrow--, i3++)
            res[i3] = [arr[i3][nrow]];
          return res;
        };
        jStat2.transpose = function transpose(arr) {
          var obj = [];
          var objArr, rows, cols, j2, i3;
          if (!isArray(arr[0]))
            arr = [arr];
          rows = arr.length;
          cols = arr[0].length;
          for (i3 = 0; i3 < cols; i3++) {
            objArr = new Array(rows);
            for (j2 = 0; j2 < rows; j2++)
              objArr[j2] = arr[j2][i3];
            obj.push(objArr);
          }
          return obj.length === 1 ? obj[0] : obj;
        };
        jStat2.map = function map2(arr, func14, toAlter) {
          var row, nrow, ncol, res, col;
          if (!isArray(arr[0]))
            arr = [arr];
          nrow = arr.length;
          ncol = arr[0].length;
          res = toAlter ? arr : new Array(nrow);
          for (row = 0; row < nrow; row++) {
            if (!res[row])
              res[row] = new Array(ncol);
            for (col = 0; col < ncol; col++)
              res[row][col] = func14(arr[row][col], row, col);
          }
          return res.length === 1 ? res[0] : res;
        };
        jStat2.cumreduce = function cumreduce(arr, func14, toAlter) {
          var row, nrow, ncol, res, col;
          if (!isArray(arr[0]))
            arr = [arr];
          nrow = arr.length;
          ncol = arr[0].length;
          res = toAlter ? arr : new Array(nrow);
          for (row = 0; row < nrow; row++) {
            if (!res[row])
              res[row] = new Array(ncol);
            if (ncol > 0)
              res[row][0] = arr[row][0];
            for (col = 1; col < ncol; col++)
              res[row][col] = func14(res[row][col - 1], arr[row][col]);
          }
          return res.length === 1 ? res[0] : res;
        };
        jStat2.alter = function alter(arr, func14) {
          return jStat2.map(arr, func14, true);
        };
        jStat2.create = function create2(rows, cols, func14) {
          var res = new Array(rows);
          var i3, j2;
          if (isFunction(cols)) {
            func14 = cols;
            cols = rows;
          }
          for (i3 = 0; i3 < rows; i3++) {
            res[i3] = new Array(cols);
            for (j2 = 0; j2 < cols; j2++)
              res[i3][j2] = func14(i3, j2);
          }
          return res;
        };
        function retZero() {
          return 0;
        }
        jStat2.zeros = function zeros(rows, cols) {
          if (!isNumber(cols))
            cols = rows;
          return jStat2.create(rows, cols, retZero);
        };
        function retOne() {
          return 1;
        }
        jStat2.ones = function ones(rows, cols) {
          if (!isNumber(cols))
            cols = rows;
          return jStat2.create(rows, cols, retOne);
        };
        jStat2.rand = function rand(rows, cols) {
          if (!isNumber(cols))
            cols = rows;
          return jStat2.create(rows, cols, jStat2._random_fn);
        };
        function retIdent(i3, j2) {
          return i3 === j2 ? 1 : 0;
        }
        jStat2.identity = function identity(rows, cols) {
          if (!isNumber(cols))
            cols = rows;
          return jStat2.create(rows, cols, retIdent);
        };
        jStat2.symmetric = function symmetric(arr) {
          var size2 = arr.length;
          var row, col;
          if (arr.length !== arr[0].length)
            return false;
          for (row = 0; row < size2; row++) {
            for (col = 0; col < size2; col++)
              if (arr[col][row] !== arr[row][col])
                return false;
          }
          return true;
        };
        jStat2.clear = function clear2(arr) {
          return jStat2.alter(arr, retZero);
        };
        jStat2.seq = function seq(min2, max2, length, func14) {
          if (!isFunction(func14))
            func14 = false;
          var arr = [];
          var hival = calcRdx(min2, max2);
          var step = (max2 * hival - min2 * hival) / ((length - 1) * hival);
          var current = min2;
          var cnt;
          for (cnt = 0; current <= max2 && cnt < length; cnt++, current = (min2 * hival + step * hival * cnt) / hival) {
            arr.push(func14 ? func14(current, cnt) : current);
          }
          return arr;
        };
        jStat2.arange = function arange(start, end, step) {
          var rl = [];
          var i3;
          step = step || 1;
          if (end === undefined2) {
            end = start;
            start = 0;
          }
          if (start === end || step === 0) {
            return [];
          }
          if (start < end && step < 0) {
            return [];
          }
          if (start > end && step > 0) {
            return [];
          }
          if (step > 0) {
            for (i3 = start; i3 < end; i3 += step) {
              rl.push(i3);
            }
          } else {
            for (i3 = start; i3 > end; i3 += step) {
              rl.push(i3);
            }
          }
          return rl;
        };
        jStat2.slice = function() {
          function _slice(list, start, end, step) {
            var i3;
            var rl = [];
            var length = list.length;
            if (start === undefined2 && end === undefined2 && step === undefined2) {
              return jStat2.copy(list);
            }
            start = start || 0;
            end = end || list.length;
            start = start >= 0 ? start : length + start;
            end = end >= 0 ? end : length + end;
            step = step || 1;
            if (start === end || step === 0) {
              return [];
            }
            if (start < end && step < 0) {
              return [];
            }
            if (start > end && step > 0) {
              return [];
            }
            if (step > 0) {
              for (i3 = start; i3 < end; i3 += step) {
                rl.push(list[i3]);
              }
            } else {
              for (i3 = start; i3 > end; i3 += step) {
                rl.push(list[i3]);
              }
            }
            return rl;
          }
          function slice3(list, rcSlice) {
            var colSlice, rowSlice;
            rcSlice = rcSlice || {};
            if (isNumber(rcSlice.row)) {
              if (isNumber(rcSlice.col))
                return list[rcSlice.row][rcSlice.col];
              var row = jStat2.rowa(list, rcSlice.row);
              colSlice = rcSlice.col || {};
              return _slice(row, colSlice.start, colSlice.end, colSlice.step);
            }
            if (isNumber(rcSlice.col)) {
              var col = jStat2.cola(list, rcSlice.col);
              rowSlice = rcSlice.row || {};
              return _slice(col, rowSlice.start, rowSlice.end, rowSlice.step);
            }
            rowSlice = rcSlice.row || {};
            colSlice = rcSlice.col || {};
            var rows = _slice(list, rowSlice.start, rowSlice.end, rowSlice.step);
            return rows.map(function(row2) {
              return _slice(row2, colSlice.start, colSlice.end, colSlice.step);
            });
          }
          return slice3;
        }();
        jStat2.sliceAssign = function sliceAssign(A2, rcSlice, B2) {
          var nl, ml;
          if (isNumber(rcSlice.row)) {
            if (isNumber(rcSlice.col))
              return A2[rcSlice.row][rcSlice.col] = B2;
            rcSlice.col = rcSlice.col || {};
            rcSlice.col.start = rcSlice.col.start || 0;
            rcSlice.col.end = rcSlice.col.end || A2[0].length;
            rcSlice.col.step = rcSlice.col.step || 1;
            nl = jStat2.arange(
              rcSlice.col.start,
              Math2.min(A2.length, rcSlice.col.end),
              rcSlice.col.step
            );
            var m2 = rcSlice.row;
            nl.forEach(function(n4, i3) {
              A2[m2][n4] = B2[i3];
            });
            return A2;
          }
          if (isNumber(rcSlice.col)) {
            rcSlice.row = rcSlice.row || {};
            rcSlice.row.start = rcSlice.row.start || 0;
            rcSlice.row.end = rcSlice.row.end || A2.length;
            rcSlice.row.step = rcSlice.row.step || 1;
            ml = jStat2.arange(
              rcSlice.row.start,
              Math2.min(A2[0].length, rcSlice.row.end),
              rcSlice.row.step
            );
            var n3 = rcSlice.col;
            ml.forEach(function(m3, j2) {
              A2[m3][n3] = B2[j2];
            });
            return A2;
          }
          if (B2[0].length === undefined2) {
            B2 = [B2];
          }
          rcSlice.row.start = rcSlice.row.start || 0;
          rcSlice.row.end = rcSlice.row.end || A2.length;
          rcSlice.row.step = rcSlice.row.step || 1;
          rcSlice.col.start = rcSlice.col.start || 0;
          rcSlice.col.end = rcSlice.col.end || A2[0].length;
          rcSlice.col.step = rcSlice.col.step || 1;
          ml = jStat2.arange(
            rcSlice.row.start,
            Math2.min(A2.length, rcSlice.row.end),
            rcSlice.row.step
          );
          nl = jStat2.arange(
            rcSlice.col.start,
            Math2.min(A2[0].length, rcSlice.col.end),
            rcSlice.col.step
          );
          ml.forEach(function(m3, i3) {
            nl.forEach(function(n4, j2) {
              A2[m3][n4] = B2[i3][j2];
            });
          });
          return A2;
        };
        jStat2.diagonal = function diagonal(diagArray) {
          var mat = jStat2.zeros(diagArray.length, diagArray.length);
          diagArray.forEach(function(t3, i3) {
            mat[i3][i3] = t3;
          });
          return mat;
        };
        jStat2.copy = function copy2(A2) {
          return A2.map(function(row) {
            if (isNumber(row))
              return row;
            return row.map(function(t3) {
              return t3;
            });
          });
        };
        var jProto = jStat2.prototype;
        jProto.length = 0;
        jProto.push = Array.prototype.push;
        jProto.sort = Array.prototype.sort;
        jProto.splice = Array.prototype.splice;
        jProto.slice = Array.prototype.slice;
        jProto.toArray = function toArray2() {
          return this.length > 1 ? slice2.call(this) : slice2.call(this)[0];
        };
        jProto.map = function map2(func14, toAlter) {
          return jStat2(jStat2.map(this, func14, toAlter));
        };
        jProto.cumreduce = function cumreduce(func14, toAlter) {
          return jStat2(jStat2.cumreduce(this, func14, toAlter));
        };
        jProto.alter = function alter(func14) {
          jStat2.alter(this, func14);
          return this;
        };
        (function(funcs) {
          for (var i3 = 0; i3 < funcs.length; i3++)
            (function(passfunc) {
              jProto[passfunc] = function(func14) {
                var self = this, results;
                if (func14) {
                  setTimeout(function() {
                    func14.call(self, jProto[passfunc].call(self));
                  });
                  return this;
                }
                results = jStat2[passfunc](this);
                return isArray(results) ? jStat2(results) : results;
              };
            })(funcs[i3]);
        })("transpose clear symmetric rows cols dimensions diag antidiag".split(" "));
        (function(funcs) {
          for (var i3 = 0; i3 < funcs.length; i3++)
            (function(passfunc) {
              jProto[passfunc] = function(index, func14) {
                var self = this;
                if (func14) {
                  setTimeout(function() {
                    func14.call(self, jProto[passfunc].call(self, index));
                  });
                  return this;
                }
                return jStat2(jStat2[passfunc](this, index));
              };
            })(funcs[i3]);
        })("row col".split(" "));
        (function(funcs) {
          for (var i3 = 0; i3 < funcs.length; i3++)
            (function(passfunc) {
              jProto[passfunc] = function() {
                return jStat2(jStat2[passfunc].apply(null, arguments));
              };
            })(funcs[i3]);
        })("create zeros ones rand identity".split(" "));
        return jStat2;
      }(Math);
      (function(jStat2, Math2) {
        var isFunction = jStat2.utils.isFunction;
        function ascNum(a3, b2) {
          return a3 - b2;
        }
        function clip(arg, min2, max2) {
          return Math2.max(min2, Math2.min(arg, max2));
        }
        jStat2.sum = function sum(arr) {
          var sum2 = 0;
          var i3 = arr.length;
          while (--i3 >= 0)
            sum2 += arr[i3];
          return sum2;
        };
        jStat2.sumsqrd = function sumsqrd(arr) {
          var sum = 0;
          var i3 = arr.length;
          while (--i3 >= 0)
            sum += arr[i3] * arr[i3];
          return sum;
        };
        jStat2.sumsqerr = function sumsqerr(arr) {
          var mean = jStat2.mean(arr);
          var sum = 0;
          var i3 = arr.length;
          var tmp;
          while (--i3 >= 0) {
            tmp = arr[i3] - mean;
            sum += tmp * tmp;
          }
          return sum;
        };
        jStat2.sumrow = function sumrow(arr) {
          var sum = 0;
          var i3 = arr.length;
          while (--i3 >= 0)
            sum += arr[i3];
          return sum;
        };
        jStat2.product = function product(arr) {
          var prod = 1;
          var i3 = arr.length;
          while (--i3 >= 0)
            prod *= arr[i3];
          return prod;
        };
        jStat2.min = function min2(arr) {
          var low = arr[0];
          var i3 = 0;
          while (++i3 < arr.length)
            if (arr[i3] < low)
              low = arr[i3];
          return low;
        };
        jStat2.max = function max2(arr) {
          var high = arr[0];
          var i3 = 0;
          while (++i3 < arr.length)
            if (arr[i3] > high)
              high = arr[i3];
          return high;
        };
        jStat2.unique = function unique(arr) {
          var hash = {}, _arr = [];
          for (var i3 = 0; i3 < arr.length; i3++) {
            if (!hash[arr[i3]]) {
              hash[arr[i3]] = true;
              _arr.push(arr[i3]);
            }
          }
          return _arr;
        };
        jStat2.mean = function mean(arr) {
          return jStat2.sum(arr) / arr.length;
        };
        jStat2.meansqerr = function meansqerr(arr) {
          return jStat2.sumsqerr(arr) / arr.length;
        };
        jStat2.geomean = function geomean(arr) {
          var logs = arr.map(Math2.log);
          var meanOfLogs = jStat2.mean(logs);
          return Math2.exp(meanOfLogs);
        };
        jStat2.median = function median(arr) {
          var arrlen = arr.length;
          var _arr = arr.slice().sort(ascNum);
          return !(arrlen & 1) ? (_arr[arrlen / 2 - 1] + _arr[arrlen / 2]) / 2 : _arr[arrlen / 2 | 0];
        };
        jStat2.cumsum = function cumsum(arr) {
          return jStat2.cumreduce(arr, function(a3, b2) {
            return a3 + b2;
          });
        };
        jStat2.cumprod = function cumprod(arr) {
          return jStat2.cumreduce(arr, function(a3, b2) {
            return a3 * b2;
          });
        };
        jStat2.diff = function diff(arr) {
          var diffs = [];
          var arrLen = arr.length;
          var i3;
          for (i3 = 1; i3 < arrLen; i3++)
            diffs.push(arr[i3] - arr[i3 - 1]);
          return diffs;
        };
        jStat2.rank = function(arr) {
          var i3;
          var distinctNumbers = [];
          var numberCounts = {};
          for (i3 = 0; i3 < arr.length; i3++) {
            var number = arr[i3];
            if (numberCounts[number]) {
              numberCounts[number]++;
            } else {
              numberCounts[number] = 1;
              distinctNumbers.push(number);
            }
          }
          var sortedDistinctNumbers = distinctNumbers.sort(ascNum);
          var numberRanks = {};
          var currentRank = 1;
          for (i3 = 0; i3 < sortedDistinctNumbers.length; i3++) {
            var number = sortedDistinctNumbers[i3];
            var count = numberCounts[number];
            var first = currentRank;
            var last = currentRank + count - 1;
            var rank = (first + last) / 2;
            numberRanks[number] = rank;
            currentRank += count;
          }
          return arr.map(function(number2) {
            return numberRanks[number2];
          });
        };
        jStat2.mode = function mode(arr) {
          var arrLen = arr.length;
          var _arr = arr.slice().sort(ascNum);
          var count = 1;
          var maxCount = 0;
          var numMaxCount = 0;
          var mode_arr = [];
          var i3;
          for (i3 = 0; i3 < arrLen; i3++) {
            if (_arr[i3] === _arr[i3 + 1]) {
              count++;
            } else {
              if (count > maxCount) {
                mode_arr = [_arr[i3]];
                maxCount = count;
                numMaxCount = 0;
              } else if (count === maxCount) {
                mode_arr.push(_arr[i3]);
                numMaxCount++;
              }
              count = 1;
            }
          }
          return numMaxCount === 0 ? mode_arr[0] : mode_arr;
        };
        jStat2.range = function range2(arr) {
          return jStat2.max(arr) - jStat2.min(arr);
        };
        jStat2.variance = function variance(arr, flag) {
          return jStat2.sumsqerr(arr) / (arr.length - (flag ? 1 : 0));
        };
        jStat2.pooledvariance = function pooledvariance(arr) {
          var sumsqerr = arr.reduce(function(a3, samples) {
            return a3 + jStat2.sumsqerr(samples);
          }, 0);
          var count = arr.reduce(function(a3, samples) {
            return a3 + samples.length;
          }, 0);
          return sumsqerr / (count - arr.length);
        };
        jStat2.deviation = function(arr) {
          var mean = jStat2.mean(arr);
          var arrlen = arr.length;
          var dev = new Array(arrlen);
          for (var i3 = 0; i3 < arrlen; i3++) {
            dev[i3] = arr[i3] - mean;
          }
          return dev;
        };
        jStat2.stdev = function stdev(arr, flag) {
          return Math2.sqrt(jStat2.variance(arr, flag));
        };
        jStat2.pooledstdev = function pooledstdev(arr) {
          return Math2.sqrt(jStat2.pooledvariance(arr));
        };
        jStat2.meandev = function meandev(arr) {
          var mean = jStat2.mean(arr);
          var a3 = [];
          for (var i3 = arr.length - 1; i3 >= 0; i3--) {
            a3.push(Math2.abs(arr[i3] - mean));
          }
          return jStat2.mean(a3);
        };
        jStat2.meddev = function meddev(arr) {
          var median = jStat2.median(arr);
          var a3 = [];
          for (var i3 = arr.length - 1; i3 >= 0; i3--) {
            a3.push(Math2.abs(arr[i3] - median));
          }
          return jStat2.median(a3);
        };
        jStat2.coeffvar = function coeffvar(arr) {
          return jStat2.stdev(arr) / jStat2.mean(arr);
        };
        jStat2.quartiles = function quartiles(arr) {
          var arrlen = arr.length;
          var _arr = arr.slice().sort(ascNum);
          return [
            _arr[Math2.round(arrlen / 4) - 1],
            _arr[Math2.round(arrlen / 2) - 1],
            _arr[Math2.round(arrlen * 3 / 4) - 1]
          ];
        };
        jStat2.quantiles = function quantiles(arr, quantilesArray, alphap, betap) {
          var sortedArray = arr.slice().sort(ascNum);
          var quantileVals = [quantilesArray.length];
          var n3 = arr.length;
          var i3, p3, m2, aleph, k2, gamma;
          if (typeof alphap === "undefined")
            alphap = 3 / 8;
          if (typeof betap === "undefined")
            betap = 3 / 8;
          for (i3 = 0; i3 < quantilesArray.length; i3++) {
            p3 = quantilesArray[i3];
            m2 = alphap + p3 * (1 - alphap - betap);
            aleph = n3 * p3 + m2;
            k2 = Math2.floor(clip(aleph, 1, n3 - 1));
            gamma = clip(aleph - k2, 0, 1);
            quantileVals[i3] = (1 - gamma) * sortedArray[k2 - 1] + gamma * sortedArray[k2];
          }
          return quantileVals;
        };
        jStat2.percentile = function percentile(arr, k2, exclusive) {
          var _arr = arr.slice().sort(ascNum);
          var realIndex = k2 * (_arr.length + (exclusive ? 1 : -1)) + (exclusive ? 0 : 1);
          var index = parseInt(realIndex);
          var frac = realIndex - index;
          if (index + 1 < _arr.length) {
            return _arr[index - 1] + frac * (_arr[index] - _arr[index - 1]);
          } else {
            return _arr[index - 1];
          }
        };
        jStat2.percentileOfScore = function percentileOfScore(arr, score, kind) {
          var counter = 0;
          var len = arr.length;
          var strict = false;
          var value, i3;
          if (kind === "strict")
            strict = true;
          for (i3 = 0; i3 < len; i3++) {
            value = arr[i3];
            if (strict && value < score || !strict && value <= score) {
              counter++;
            }
          }
          return counter / len;
        };
        jStat2.histogram = function histogram(arr, binCnt) {
          binCnt = binCnt || 4;
          var first = jStat2.min(arr);
          var binWidth = (jStat2.max(arr) - first) / binCnt;
          var len = arr.length;
          var bins = [];
          var i3;
          for (i3 = 0; i3 < binCnt; i3++)
            bins[i3] = 0;
          for (i3 = 0; i3 < len; i3++)
            bins[Math2.min(Math2.floor((arr[i3] - first) / binWidth), binCnt - 1)] += 1;
          return bins;
        };
        jStat2.covariance = function covariance(arr1, arr2) {
          var u3 = jStat2.mean(arr1);
          var v3 = jStat2.mean(arr2);
          var arr1Len = arr1.length;
          var sq_dev = new Array(arr1Len);
          var i3;
          for (i3 = 0; i3 < arr1Len; i3++)
            sq_dev[i3] = (arr1[i3] - u3) * (arr2[i3] - v3);
          return jStat2.sum(sq_dev) / (arr1Len - 1);
        };
        jStat2.corrcoeff = function corrcoeff(arr1, arr2) {
          return jStat2.covariance(arr1, arr2) / jStat2.stdev(arr1, 1) / jStat2.stdev(arr2, 1);
        };
        jStat2.spearmancoeff = function(arr1, arr2) {
          arr1 = jStat2.rank(arr1);
          arr2 = jStat2.rank(arr2);
          return jStat2.corrcoeff(arr1, arr2);
        };
        jStat2.stanMoment = function stanMoment(arr, n3) {
          var mu = jStat2.mean(arr);
          var sigma = jStat2.stdev(arr);
          var len = arr.length;
          var skewSum = 0;
          for (var i3 = 0; i3 < len; i3++)
            skewSum += Math2.pow((arr[i3] - mu) / sigma, n3);
          return skewSum / arr.length;
        };
        jStat2.skewness = function skewness(arr) {
          return jStat2.stanMoment(arr, 3);
        };
        jStat2.kurtosis = function kurtosis(arr) {
          return jStat2.stanMoment(arr, 4) - 3;
        };
        var jProto = jStat2.prototype;
        (function(funcs) {
          for (var i3 = 0; i3 < funcs.length; i3++)
            (function(passfunc) {
              jProto[passfunc] = function(fullbool, func14) {
                var arr = [];
                var i4 = 0;
                var tmpthis = this;
                if (isFunction(fullbool)) {
                  func14 = fullbool;
                  fullbool = false;
                }
                if (func14) {
                  setTimeout(function() {
                    func14.call(tmpthis, jProto[passfunc].call(tmpthis, fullbool));
                  });
                  return this;
                }
                if (this.length > 1) {
                  tmpthis = fullbool === true ? this : this.transpose();
                  for (; i4 < tmpthis.length; i4++)
                    arr[i4] = jStat2[passfunc](tmpthis[i4]);
                  return arr;
                }
                return jStat2[passfunc](this[0], fullbool);
              };
            })(funcs[i3]);
        })("cumsum cumprod".split(" "));
        (function(funcs) {
          for (var i3 = 0; i3 < funcs.length; i3++)
            (function(passfunc) {
              jProto[passfunc] = function(fullbool, func14) {
                var arr = [];
                var i4 = 0;
                var tmpthis = this;
                if (isFunction(fullbool)) {
                  func14 = fullbool;
                  fullbool = false;
                }
                if (func14) {
                  setTimeout(function() {
                    func14.call(tmpthis, jProto[passfunc].call(tmpthis, fullbool));
                  });
                  return this;
                }
                if (this.length > 1) {
                  if (passfunc !== "sumrow")
                    tmpthis = fullbool === true ? this : this.transpose();
                  for (; i4 < tmpthis.length; i4++)
                    arr[i4] = jStat2[passfunc](tmpthis[i4]);
                  return fullbool === true ? jStat2[passfunc](jStat2.utils.toVector(arr)) : arr;
                }
                return jStat2[passfunc](this[0], fullbool);
              };
            })(funcs[i3]);
        })("sum sumsqrd sumsqerr sumrow product min max unique mean meansqerr geomean median diff rank mode range variance deviation stdev meandev meddev coeffvar quartiles histogram skewness kurtosis".split(" "));
        (function(funcs) {
          for (var i3 = 0; i3 < funcs.length; i3++)
            (function(passfunc) {
              jProto[passfunc] = function() {
                var arr = [];
                var i4 = 0;
                var tmpthis = this;
                var args = Array.prototype.slice.call(arguments);
                var callbackFunction;
                if (isFunction(args[args.length - 1])) {
                  callbackFunction = args[args.length - 1];
                  var argsToPass = args.slice(0, args.length - 1);
                  setTimeout(function() {
                    callbackFunction.call(
                      tmpthis,
                      jProto[passfunc].apply(tmpthis, argsToPass)
                    );
                  });
                  return this;
                } else {
                  callbackFunction = void 0;
                  var curriedFunction = function curriedFunction2(vector) {
                    return jStat2[passfunc].apply(tmpthis, [vector].concat(args));
                  };
                }
                if (this.length > 1) {
                  tmpthis = tmpthis.transpose();
                  for (; i4 < tmpthis.length; i4++)
                    arr[i4] = curriedFunction(tmpthis[i4]);
                  return arr;
                }
                return curriedFunction(this[0]);
              };
            })(funcs[i3]);
        })("quantiles percentileOfScore".split(" "));
      })(jStat, Math);
      (function(jStat2, Math2) {
        jStat2.gammaln = function gammaln(x2) {
          var j2 = 0;
          var cof = [
            76.18009172947146,
            -86.50532032941678,
            24.01409824083091,
            -1.231739572450155,
            0.001208650973866179,
            -5395239384953e-18
          ];
          var ser = 1.000000000190015;
          var xx, y2, tmp;
          tmp = (y2 = xx = x2) + 5.5;
          tmp -= (xx + 0.5) * Math2.log(tmp);
          for (; j2 < 6; j2++)
            ser += cof[j2] / ++y2;
          return Math2.log(2.5066282746310007 * ser / xx) - tmp;
        };
        jStat2.loggam = function loggam(x2) {
          var x0, x22, xp, gl, gl0;
          var k2, n3;
          var a3 = [
            0.08333333333333333,
            -0.002777777777777778,
            7936507936507937e-19,
            -5952380952380952e-19,
            8417508417508418e-19,
            -0.001917526917526918,
            0.00641025641025641,
            -0.02955065359477124,
            0.1796443723688307,
            -1.3924322169059
          ];
          x0 = x2;
          n3 = 0;
          if (x2 == 1 || x2 == 2) {
            return 0;
          }
          if (x2 <= 7) {
            n3 = Math2.floor(7 - x2);
            x0 = x2 + n3;
          }
          x22 = 1 / (x0 * x0);
          xp = 2 * Math2.PI;
          gl0 = a3[9];
          for (k2 = 8; k2 >= 0; k2--) {
            gl0 *= x22;
            gl0 += a3[k2];
          }
          gl = gl0 / x0 + 0.5 * Math2.log(xp) + (x0 - 0.5) * Math2.log(x0) - x0;
          if (x2 <= 7) {
            for (k2 = 1; k2 <= n3; k2++) {
              gl -= Math2.log(x0 - 1);
              x0 -= 1;
            }
          }
          return gl;
        };
        jStat2.gammafn = function gammafn(x2) {
          var p3 = [
            -1.716185138865495,
            24.76565080557592,
            -379.80425647094563,
            629.3311553128184,
            866.9662027904133,
            -31451.272968848367,
            -36144.413418691176,
            66456.14382024054
          ];
          var q2 = [
            -30.8402300119739,
            315.35062697960416,
            -1015.1563674902192,
            -3107.771671572311,
            22538.11842098015,
            4755.846277527881,
            -134659.9598649693,
            -115132.2596755535
          ];
          var fact = false;
          var n3 = 0;
          var xden = 0;
          var xnum = 0;
          var y2 = x2;
          var i3, z2, yi, res;
          if (x2 > 171.6243769536076) {
            return Infinity;
          }
          if (y2 <= 0) {
            res = y2 % 1 + 36e-17;
            if (res) {
              fact = (!(y2 & 1) ? 1 : -1) * Math2.PI / Math2.sin(Math2.PI * res);
              y2 = 1 - y2;
            } else {
              return Infinity;
            }
          }
          yi = y2;
          if (y2 < 1) {
            z2 = y2++;
          } else {
            z2 = (y2 -= n3 = (y2 | 0) - 1) - 1;
          }
          for (i3 = 0; i3 < 8; ++i3) {
            xnum = (xnum + p3[i3]) * z2;
            xden = xden * z2 + q2[i3];
          }
          res = xnum / xden + 1;
          if (yi < y2) {
            res /= yi;
          } else if (yi > y2) {
            for (i3 = 0; i3 < n3; ++i3) {
              res *= y2;
              y2++;
            }
          }
          if (fact) {
            res = fact / res;
          }
          return res;
        };
        jStat2.gammap = function gammap(a3, x2) {
          return jStat2.lowRegGamma(a3, x2) * jStat2.gammafn(a3);
        };
        jStat2.lowRegGamma = function lowRegGamma(a3, x2) {
          var aln = jStat2.gammaln(a3);
          var ap = a3;
          var sum = 1 / a3;
          var del = sum;
          var b2 = x2 + 1 - a3;
          var c3 = 1 / 1e-30;
          var d3 = 1 / b2;
          var h3 = d3;
          var i3 = 1;
          var ITMAX = -~(Math2.log(a3 >= 1 ? a3 : 1 / a3) * 8.5 + a3 * 0.4 + 17);
          var an2;
          if (x2 < 0 || a3 <= 0) {
            return NaN;
          } else if (x2 < a3 + 1) {
            for (; i3 <= ITMAX; i3++) {
              sum += del *= x2 / ++ap;
            }
            return sum * Math2.exp(-x2 + a3 * Math2.log(x2) - aln);
          }
          for (; i3 <= ITMAX; i3++) {
            an2 = -i3 * (i3 - a3);
            b2 += 2;
            d3 = an2 * d3 + b2;
            c3 = b2 + an2 / c3;
            d3 = 1 / d3;
            h3 *= d3 * c3;
          }
          return 1 - h3 * Math2.exp(-x2 + a3 * Math2.log(x2) - aln);
        };
        jStat2.factorialln = function factorialln(n3) {
          return n3 < 0 ? NaN : jStat2.gammaln(n3 + 1);
        };
        jStat2.factorial = function factorial(n3) {
          return n3 < 0 ? NaN : jStat2.gammafn(n3 + 1);
        };
        jStat2.combination = function combination(n3, m2) {
          return n3 > 170 || m2 > 170 ? Math2.exp(jStat2.combinationln(n3, m2)) : jStat2.factorial(n3) / jStat2.factorial(m2) / jStat2.factorial(n3 - m2);
        };
        jStat2.combinationln = function combinationln(n3, m2) {
          return jStat2.factorialln(n3) - jStat2.factorialln(m2) - jStat2.factorialln(n3 - m2);
        };
        jStat2.permutation = function permutation(n3, m2) {
          return jStat2.factorial(n3) / jStat2.factorial(n3 - m2);
        };
        jStat2.betafn = function betafn(x2, y2) {
          if (x2 <= 0 || y2 <= 0)
            return void 0;
          return x2 + y2 > 170 ? Math2.exp(jStat2.betaln(x2, y2)) : jStat2.gammafn(x2) * jStat2.gammafn(y2) / jStat2.gammafn(x2 + y2);
        };
        jStat2.betaln = function betaln(x2, y2) {
          return jStat2.gammaln(x2) + jStat2.gammaln(y2) - jStat2.gammaln(x2 + y2);
        };
        jStat2.betacf = function betacf(x2, a3, b2) {
          var fpmin = 1e-30;
          var m2 = 1;
          var qab = a3 + b2;
          var qap = a3 + 1;
          var qam = a3 - 1;
          var c3 = 1;
          var d3 = 1 - qab * x2 / qap;
          var m22, aa, del, h3;
          if (Math2.abs(d3) < fpmin)
            d3 = fpmin;
          d3 = 1 / d3;
          h3 = d3;
          for (; m2 <= 100; m2++) {
            m22 = 2 * m2;
            aa = m2 * (b2 - m2) * x2 / ((qam + m22) * (a3 + m22));
            d3 = 1 + aa * d3;
            if (Math2.abs(d3) < fpmin)
              d3 = fpmin;
            c3 = 1 + aa / c3;
            if (Math2.abs(c3) < fpmin)
              c3 = fpmin;
            d3 = 1 / d3;
            h3 *= d3 * c3;
            aa = -(a3 + m2) * (qab + m2) * x2 / ((a3 + m22) * (qap + m22));
            d3 = 1 + aa * d3;
            if (Math2.abs(d3) < fpmin)
              d3 = fpmin;
            c3 = 1 + aa / c3;
            if (Math2.abs(c3) < fpmin)
              c3 = fpmin;
            d3 = 1 / d3;
            del = d3 * c3;
            h3 *= del;
            if (Math2.abs(del - 1) < 3e-7)
              break;
          }
          return h3;
        };
        jStat2.gammapinv = function gammapinv(p3, a3) {
          var j2 = 0;
          var a1 = a3 - 1;
          var EPS = 1e-8;
          var gln = jStat2.gammaln(a3);
          var x2, err, t3, u3, pp, lna1, afac;
          if (p3 >= 1)
            return Math2.max(100, a3 + 100 * Math2.sqrt(a3));
          if (p3 <= 0)
            return 0;
          if (a3 > 1) {
            lna1 = Math2.log(a1);
            afac = Math2.exp(a1 * (lna1 - 1) - gln);
            pp = p3 < 0.5 ? p3 : 1 - p3;
            t3 = Math2.sqrt(-2 * Math2.log(pp));
            x2 = (2.30753 + t3 * 0.27061) / (1 + t3 * (0.99229 + t3 * 0.04481)) - t3;
            if (p3 < 0.5)
              x2 = -x2;
            x2 = Math2.max(
              1e-3,
              a3 * Math2.pow(1 - 1 / (9 * a3) - x2 / (3 * Math2.sqrt(a3)), 3)
            );
          } else {
            t3 = 1 - a3 * (0.253 + a3 * 0.12);
            if (p3 < t3)
              x2 = Math2.pow(p3 / t3, 1 / a3);
            else
              x2 = 1 - Math2.log(1 - (p3 - t3) / (1 - t3));
          }
          for (; j2 < 12; j2++) {
            if (x2 <= 0)
              return 0;
            err = jStat2.lowRegGamma(a3, x2) - p3;
            if (a3 > 1)
              t3 = afac * Math2.exp(-(x2 - a1) + a1 * (Math2.log(x2) - lna1));
            else
              t3 = Math2.exp(-x2 + a1 * Math2.log(x2) - gln);
            u3 = err / t3;
            x2 -= t3 = u3 / (1 - 0.5 * Math2.min(1, u3 * ((a3 - 1) / x2 - 1)));
            if (x2 <= 0)
              x2 = 0.5 * (x2 + t3);
            if (Math2.abs(t3) < EPS * x2)
              break;
          }
          return x2;
        };
        jStat2.erf = function erf(x2) {
          var cof = [
            -1.3026537197817094,
            0.6419697923564902,
            0.019476473204185836,
            -0.00956151478680863,
            -946595344482036e-18,
            366839497852761e-18,
            42523324806907e-18,
            -20278578112534e-18,
            -1624290004647e-18,
            130365583558e-17,
            15626441722e-18,
            -85238095915e-18,
            6529054439e-18,
            5059343495e-18,
            -991364156e-18,
            -227365122e-18,
            96467911e-18,
            2394038e-18,
            -6886027e-18,
            894487e-18,
            313092e-18,
            -112708e-18,
            381e-18,
            7106e-18,
            -1523e-18,
            -94e-18,
            121e-18,
            -28e-18
          ];
          var j2 = cof.length - 1;
          var isneg = false;
          var d3 = 0;
          var dd = 0;
          var t3, ty, tmp, res;
          if (x2 < 0) {
            x2 = -x2;
            isneg = true;
          }
          t3 = 2 / (2 + x2);
          ty = 4 * t3 - 2;
          for (; j2 > 0; j2--) {
            tmp = d3;
            d3 = ty * d3 - dd + cof[j2];
            dd = tmp;
          }
          res = t3 * Math2.exp(-x2 * x2 + 0.5 * (cof[0] + ty * d3) - dd);
          return isneg ? res - 1 : 1 - res;
        };
        jStat2.erfc = function erfc(x2) {
          return 1 - jStat2.erf(x2);
        };
        jStat2.erfcinv = function erfcinv(p3) {
          var j2 = 0;
          var x2, err, t3, pp;
          if (p3 >= 2)
            return -100;
          if (p3 <= 0)
            return 100;
          pp = p3 < 1 ? p3 : 2 - p3;
          t3 = Math2.sqrt(-2 * Math2.log(pp / 2));
          x2 = -0.70711 * ((2.30753 + t3 * 0.27061) / (1 + t3 * (0.99229 + t3 * 0.04481)) - t3);
          for (; j2 < 2; j2++) {
            err = jStat2.erfc(x2) - pp;
            x2 += err / (1.1283791670955126 * Math2.exp(-x2 * x2) - x2 * err);
          }
          return p3 < 1 ? x2 : -x2;
        };
        jStat2.ibetainv = function ibetainv(p3, a3, b2) {
          var EPS = 1e-8;
          var a1 = a3 - 1;
          var b1 = b2 - 1;
          var j2 = 0;
          var lna, lnb, pp, t3, u3, err, x2, al, h3, w2, afac;
          if (p3 <= 0)
            return 0;
          if (p3 >= 1)
            return 1;
          if (a3 >= 1 && b2 >= 1) {
            pp = p3 < 0.5 ? p3 : 1 - p3;
            t3 = Math2.sqrt(-2 * Math2.log(pp));
            x2 = (2.30753 + t3 * 0.27061) / (1 + t3 * (0.99229 + t3 * 0.04481)) - t3;
            if (p3 < 0.5)
              x2 = -x2;
            al = (x2 * x2 - 3) / 6;
            h3 = 2 / (1 / (2 * a3 - 1) + 1 / (2 * b2 - 1));
            w2 = x2 * Math2.sqrt(al + h3) / h3 - (1 / (2 * b2 - 1) - 1 / (2 * a3 - 1)) * (al + 5 / 6 - 2 / (3 * h3));
            x2 = a3 / (a3 + b2 * Math2.exp(2 * w2));
          } else {
            lna = Math2.log(a3 / (a3 + b2));
            lnb = Math2.log(b2 / (a3 + b2));
            t3 = Math2.exp(a3 * lna) / a3;
            u3 = Math2.exp(b2 * lnb) / b2;
            w2 = t3 + u3;
            if (p3 < t3 / w2)
              x2 = Math2.pow(a3 * w2 * p3, 1 / a3);
            else
              x2 = 1 - Math2.pow(b2 * w2 * (1 - p3), 1 / b2);
          }
          afac = -jStat2.gammaln(a3) - jStat2.gammaln(b2) + jStat2.gammaln(a3 + b2);
          for (; j2 < 10; j2++) {
            if (x2 === 0 || x2 === 1)
              return x2;
            err = jStat2.ibeta(x2, a3, b2) - p3;
            t3 = Math2.exp(a1 * Math2.log(x2) + b1 * Math2.log(1 - x2) + afac);
            u3 = err / t3;
            x2 -= t3 = u3 / (1 - 0.5 * Math2.min(1, u3 * (a1 / x2 - b1 / (1 - x2))));
            if (x2 <= 0)
              x2 = 0.5 * (x2 + t3);
            if (x2 >= 1)
              x2 = 0.5 * (x2 + t3 + 1);
            if (Math2.abs(t3) < EPS * x2 && j2 > 0)
              break;
          }
          return x2;
        };
        jStat2.ibeta = function ibeta(x2, a3, b2) {
          var bt = x2 === 0 || x2 === 1 ? 0 : Math2.exp(jStat2.gammaln(a3 + b2) - jStat2.gammaln(a3) - jStat2.gammaln(b2) + a3 * Math2.log(x2) + b2 * Math2.log(1 - x2));
          if (x2 < 0 || x2 > 1)
            return false;
          if (x2 < (a3 + 1) / (a3 + b2 + 2))
            return bt * jStat2.betacf(x2, a3, b2) / a3;
          return 1 - bt * jStat2.betacf(1 - x2, b2, a3) / b2;
        };
        jStat2.randn = function randn(n3, m2) {
          var u3, v3, x2, y2, q2;
          if (!m2)
            m2 = n3;
          if (n3)
            return jStat2.create(n3, m2, function() {
              return jStat2.randn();
            });
          do {
            u3 = jStat2._random_fn();
            v3 = 1.7156 * (jStat2._random_fn() - 0.5);
            x2 = u3 - 0.449871;
            y2 = Math2.abs(v3) + 0.386595;
            q2 = x2 * x2 + y2 * (0.196 * y2 - 0.25472 * x2);
          } while (q2 > 0.27597 && (q2 > 0.27846 || v3 * v3 > -4 * Math2.log(u3) * u3 * u3));
          return v3 / u3;
        };
        jStat2.randg = function randg(shape, n3, m2) {
          var oalph = shape;
          var a1, a22, u3, v3, x2, mat;
          if (!m2)
            m2 = n3;
          if (!shape)
            shape = 1;
          if (n3) {
            mat = jStat2.zeros(n3, m2);
            mat.alter(function() {
              return jStat2.randg(shape);
            });
            return mat;
          }
          if (shape < 1)
            shape += 1;
          a1 = shape - 1 / 3;
          a22 = 1 / Math2.sqrt(9 * a1);
          do {
            do {
              x2 = jStat2.randn();
              v3 = 1 + a22 * x2;
            } while (v3 <= 0);
            v3 = v3 * v3 * v3;
            u3 = jStat2._random_fn();
          } while (u3 > 1 - 0.331 * Math2.pow(x2, 4) && Math2.log(u3) > 0.5 * x2 * x2 + a1 * (1 - v3 + Math2.log(v3)));
          if (shape == oalph)
            return a1 * v3;
          do {
            u3 = jStat2._random_fn();
          } while (u3 === 0);
          return Math2.pow(u3, 1 / oalph) * a1 * v3;
        };
        (function(funcs) {
          for (var i3 = 0; i3 < funcs.length; i3++)
            (function(passfunc) {
              jStat2.fn[passfunc] = function() {
                return jStat2(
                  jStat2.map(this, function(value) {
                    return jStat2[passfunc](value);
                  })
                );
              };
            })(funcs[i3]);
        })("gammaln gammafn factorial factorialln".split(" "));
        (function(funcs) {
          for (var i3 = 0; i3 < funcs.length; i3++)
            (function(passfunc) {
              jStat2.fn[passfunc] = function() {
                return jStat2(jStat2[passfunc].apply(null, arguments));
              };
            })(funcs[i3]);
        })("randn".split(" "));
      })(jStat, Math);
      (function(jStat2, Math2) {
        (function(list) {
          for (var i3 = 0; i3 < list.length; i3++)
            (function(func14) {
              jStat2[func14] = function f3(a3, b2, c3) {
                if (!(this instanceof f3))
                  return new f3(a3, b2, c3);
                this._a = a3;
                this._b = b2;
                this._c = c3;
                return this;
              };
              jStat2.fn[func14] = function(a3, b2, c3) {
                var newthis = jStat2[func14](a3, b2, c3);
                newthis.data = this;
                return newthis;
              };
              jStat2[func14].prototype.sample = function(arr) {
                var a3 = this._a;
                var b2 = this._b;
                var c3 = this._c;
                if (arr)
                  return jStat2.alter(arr, function() {
                    return jStat2[func14].sample(a3, b2, c3);
                  });
                else
                  return jStat2[func14].sample(a3, b2, c3);
              };
              (function(vals) {
                for (var i4 = 0; i4 < vals.length; i4++)
                  (function(fnfunc) {
                    jStat2[func14].prototype[fnfunc] = function(x2) {
                      var a3 = this._a;
                      var b2 = this._b;
                      var c3 = this._c;
                      if (!x2 && x2 !== 0)
                        x2 = this.data;
                      if (typeof x2 !== "number") {
                        return jStat2.fn.map.call(x2, function(x3) {
                          return jStat2[func14][fnfunc](x3, a3, b2, c3);
                        });
                      }
                      return jStat2[func14][fnfunc](x2, a3, b2, c3);
                    };
                  })(vals[i4]);
              })("pdf cdf inv".split(" "));
              (function(vals) {
                for (var i4 = 0; i4 < vals.length; i4++)
                  (function(fnfunc) {
                    jStat2[func14].prototype[fnfunc] = function() {
                      return jStat2[func14][fnfunc](this._a, this._b, this._c);
                    };
                  })(vals[i4]);
              })("mean median mode variance".split(" "));
            })(list[i3]);
        })("beta centralF cauchy chisquare exponential gamma invgamma kumaraswamy laplace lognormal noncentralt normal pareto studentt weibull uniform binomial negbin hypgeom poisson triangular tukey arcsine".split(" "));
        jStat2.extend(jStat2.beta, {
          pdf: function pdf(x2, alpha, beta) {
            if (x2 > 1 || x2 < 0)
              return 0;
            if (alpha == 1 && beta == 1)
              return 1;
            if (alpha < 512 && beta < 512) {
              return Math2.pow(x2, alpha - 1) * Math2.pow(1 - x2, beta - 1) / jStat2.betafn(alpha, beta);
            } else {
              return Math2.exp((alpha - 1) * Math2.log(x2) + (beta - 1) * Math2.log(1 - x2) - jStat2.betaln(alpha, beta));
            }
          },
          cdf: function cdf(x2, alpha, beta) {
            return x2 > 1 || x2 < 0 ? (x2 > 1) * 1 : jStat2.ibeta(x2, alpha, beta);
          },
          inv: function inv(x2, alpha, beta) {
            return jStat2.ibetainv(x2, alpha, beta);
          },
          mean: function mean(alpha, beta) {
            return alpha / (alpha + beta);
          },
          median: function median(alpha, beta) {
            return jStat2.ibetainv(0.5, alpha, beta);
          },
          mode: function mode(alpha, beta) {
            return (alpha - 1) / (alpha + beta - 2);
          },
          // return a random sample
          sample: function sample(alpha, beta) {
            var u3 = jStat2.randg(alpha);
            return u3 / (u3 + jStat2.randg(beta));
          },
          variance: function variance(alpha, beta) {
            return alpha * beta / (Math2.pow(alpha + beta, 2) * (alpha + beta + 1));
          }
        });
        jStat2.extend(jStat2.centralF, {
          // This implementation of the pdf function avoids float overflow
          // See the way that R calculates this value:
          // https://svn.r-project.org/R/trunk/src/nmath/df.c
          pdf: function pdf(x2, df1, df2) {
            var p3, q2, f3;
            if (x2 < 0)
              return 0;
            if (df1 <= 2) {
              if (x2 === 0 && df1 < 2) {
                return Infinity;
              }
              if (x2 === 0 && df1 === 2) {
                return 1;
              }
              return 1 / jStat2.betafn(df1 / 2, df2 / 2) * Math2.pow(df1 / df2, df1 / 2) * Math2.pow(x2, df1 / 2 - 1) * Math2.pow(1 + df1 / df2 * x2, -(df1 + df2) / 2);
            }
            p3 = df1 * x2 / (df2 + x2 * df1);
            q2 = df2 / (df2 + x2 * df1);
            f3 = df1 * q2 / 2;
            return f3 * jStat2.binomial.pdf((df1 - 2) / 2, (df1 + df2 - 2) / 2, p3);
          },
          cdf: function cdf(x2, df1, df2) {
            if (x2 < 0)
              return 0;
            return jStat2.ibeta(df1 * x2 / (df1 * x2 + df2), df1 / 2, df2 / 2);
          },
          inv: function inv(x2, df1, df2) {
            return df2 / (df1 * (1 / jStat2.ibetainv(x2, df1 / 2, df2 / 2) - 1));
          },
          mean: function mean(df1, df2) {
            return df2 > 2 ? df2 / (df2 - 2) : void 0;
          },
          mode: function mode(df1, df2) {
            return df1 > 2 ? df2 * (df1 - 2) / (df1 * (df2 + 2)) : void 0;
          },
          // return a random sample
          sample: function sample(df1, df2) {
            var x1 = jStat2.randg(df1 / 2) * 2;
            var x2 = jStat2.randg(df2 / 2) * 2;
            return x1 / df1 / (x2 / df2);
          },
          variance: function variance(df1, df2) {
            if (df2 <= 4)
              return void 0;
            return 2 * df2 * df2 * (df1 + df2 - 2) / (df1 * (df2 - 2) * (df2 - 2) * (df2 - 4));
          }
        });
        jStat2.extend(jStat2.cauchy, {
          pdf: function pdf(x2, local, scale) {
            if (scale < 0) {
              return 0;
            }
            return scale / (Math2.pow(x2 - local, 2) + Math2.pow(scale, 2)) / Math2.PI;
          },
          cdf: function cdf(x2, local, scale) {
            return Math2.atan((x2 - local) / scale) / Math2.PI + 0.5;
          },
          inv: function(p3, local, scale) {
            return local + scale * Math2.tan(Math2.PI * (p3 - 0.5));
          },
          median: function median(local) {
            return local;
          },
          mode: function mode(local) {
            return local;
          },
          sample: function sample(local, scale) {
            return jStat2.randn() * Math2.sqrt(1 / (2 * jStat2.randg(0.5))) * scale + local;
          }
        });
        jStat2.extend(jStat2.chisquare, {
          pdf: function pdf(x2, dof) {
            if (x2 < 0)
              return 0;
            return x2 === 0 && dof === 2 ? 0.5 : Math2.exp((dof / 2 - 1) * Math2.log(x2) - x2 / 2 - dof / 2 * Math2.log(2) - jStat2.gammaln(dof / 2));
          },
          cdf: function cdf(x2, dof) {
            if (x2 < 0)
              return 0;
            return jStat2.lowRegGamma(dof / 2, x2 / 2);
          },
          inv: function(p3, dof) {
            return 2 * jStat2.gammapinv(p3, 0.5 * dof);
          },
          mean: function(dof) {
            return dof;
          },
          // TODO: this is an approximation (is there a better way?)
          median: function median(dof) {
            return dof * Math2.pow(1 - 2 / (9 * dof), 3);
          },
          mode: function mode(dof) {
            return dof - 2 > 0 ? dof - 2 : 0;
          },
          sample: function sample(dof) {
            return jStat2.randg(dof / 2) * 2;
          },
          variance: function variance(dof) {
            return 2 * dof;
          }
        });
        jStat2.extend(jStat2.exponential, {
          pdf: function pdf(x2, rate) {
            return x2 < 0 ? 0 : rate * Math2.exp(-rate * x2);
          },
          cdf: function cdf(x2, rate) {
            return x2 < 0 ? 0 : 1 - Math2.exp(-rate * x2);
          },
          inv: function(p3, rate) {
            return -Math2.log(1 - p3) / rate;
          },
          mean: function(rate) {
            return 1 / rate;
          },
          median: function(rate) {
            return 1 / rate * Math2.log(2);
          },
          mode: function mode() {
            return 0;
          },
          sample: function sample(rate) {
            return -1 / rate * Math2.log(jStat2._random_fn());
          },
          variance: function(rate) {
            return Math2.pow(rate, -2);
          }
        });
        jStat2.extend(jStat2.gamma, {
          pdf: function pdf(x2, shape, scale) {
            if (x2 < 0)
              return 0;
            return x2 === 0 && shape === 1 ? 1 / scale : Math2.exp((shape - 1) * Math2.log(x2) - x2 / scale - jStat2.gammaln(shape) - shape * Math2.log(scale));
          },
          cdf: function cdf(x2, shape, scale) {
            if (x2 < 0)
              return 0;
            return jStat2.lowRegGamma(shape, x2 / scale);
          },
          inv: function(p3, shape, scale) {
            return jStat2.gammapinv(p3, shape) * scale;
          },
          mean: function(shape, scale) {
            return shape * scale;
          },
          mode: function mode(shape, scale) {
            if (shape > 1)
              return (shape - 1) * scale;
            return void 0;
          },
          sample: function sample(shape, scale) {
            return jStat2.randg(shape) * scale;
          },
          variance: function variance(shape, scale) {
            return shape * scale * scale;
          }
        });
        jStat2.extend(jStat2.invgamma, {
          pdf: function pdf(x2, shape, scale) {
            if (x2 <= 0)
              return 0;
            return Math2.exp(-(shape + 1) * Math2.log(x2) - scale / x2 - jStat2.gammaln(shape) + shape * Math2.log(scale));
          },
          cdf: function cdf(x2, shape, scale) {
            if (x2 <= 0)
              return 0;
            return 1 - jStat2.lowRegGamma(shape, scale / x2);
          },
          inv: function(p3, shape, scale) {
            return scale / jStat2.gammapinv(1 - p3, shape);
          },
          mean: function(shape, scale) {
            return shape > 1 ? scale / (shape - 1) : void 0;
          },
          mode: function mode(shape, scale) {
            return scale / (shape + 1);
          },
          sample: function sample(shape, scale) {
            return scale / jStat2.randg(shape);
          },
          variance: function variance(shape, scale) {
            if (shape <= 2)
              return void 0;
            return scale * scale / ((shape - 1) * (shape - 1) * (shape - 2));
          }
        });
        jStat2.extend(jStat2.kumaraswamy, {
          pdf: function pdf(x2, alpha, beta) {
            if (x2 === 0 && alpha === 1)
              return beta;
            else if (x2 === 1 && beta === 1)
              return alpha;
            return Math2.exp(Math2.log(alpha) + Math2.log(beta) + (alpha - 1) * Math2.log(x2) + (beta - 1) * Math2.log(1 - Math2.pow(x2, alpha)));
          },
          cdf: function cdf(x2, alpha, beta) {
            if (x2 < 0)
              return 0;
            else if (x2 > 1)
              return 1;
            return 1 - Math2.pow(1 - Math2.pow(x2, alpha), beta);
          },
          inv: function inv(p3, alpha, beta) {
            return Math2.pow(1 - Math2.pow(1 - p3, 1 / beta), 1 / alpha);
          },
          mean: function(alpha, beta) {
            return beta * jStat2.gammafn(1 + 1 / alpha) * jStat2.gammafn(beta) / jStat2.gammafn(1 + 1 / alpha + beta);
          },
          median: function median(alpha, beta) {
            return Math2.pow(1 - Math2.pow(2, -1 / beta), 1 / alpha);
          },
          mode: function mode(alpha, beta) {
            if (!(alpha >= 1 && beta >= 1 && (alpha !== 1 && beta !== 1)))
              return void 0;
            return Math2.pow((alpha - 1) / (alpha * beta - 1), 1 / alpha);
          },
          variance: function variance() {
            throw new Error("variance not yet implemented");
          }
        });
        jStat2.extend(jStat2.lognormal, {
          pdf: function pdf(x2, mu, sigma) {
            if (x2 <= 0)
              return 0;
            return Math2.exp(-Math2.log(x2) - 0.5 * Math2.log(2 * Math2.PI) - Math2.log(sigma) - Math2.pow(Math2.log(x2) - mu, 2) / (2 * sigma * sigma));
          },
          cdf: function cdf(x2, mu, sigma) {
            if (x2 < 0)
              return 0;
            return 0.5 + 0.5 * jStat2.erf((Math2.log(x2) - mu) / Math2.sqrt(2 * sigma * sigma));
          },
          inv: function(p3, mu, sigma) {
            return Math2.exp(-1.4142135623730951 * sigma * jStat2.erfcinv(2 * p3) + mu);
          },
          mean: function mean(mu, sigma) {
            return Math2.exp(mu + sigma * sigma / 2);
          },
          median: function median(mu) {
            return Math2.exp(mu);
          },
          mode: function mode(mu, sigma) {
            return Math2.exp(mu - sigma * sigma);
          },
          sample: function sample(mu, sigma) {
            return Math2.exp(jStat2.randn() * sigma + mu);
          },
          variance: function variance(mu, sigma) {
            return (Math2.exp(sigma * sigma) - 1) * Math2.exp(2 * mu + sigma * sigma);
          }
        });
        jStat2.extend(jStat2.noncentralt, {
          pdf: function pdf(x2, dof, ncp) {
            var tol = 1e-14;
            if (Math2.abs(ncp) < tol)
              return jStat2.studentt.pdf(x2, dof);
            if (Math2.abs(x2) < tol) {
              return Math2.exp(jStat2.gammaln((dof + 1) / 2) - ncp * ncp / 2 - 0.5 * Math2.log(Math2.PI * dof) - jStat2.gammaln(dof / 2));
            }
            return dof / x2 * (jStat2.noncentralt.cdf(x2 * Math2.sqrt(1 + 2 / dof), dof + 2, ncp) - jStat2.noncentralt.cdf(x2, dof, ncp));
          },
          cdf: function cdf(x2, dof, ncp) {
            var tol = 1e-14;
            var min_iterations = 200;
            if (Math2.abs(ncp) < tol)
              return jStat2.studentt.cdf(x2, dof);
            var flip = false;
            if (x2 < 0) {
              flip = true;
              ncp = -ncp;
            }
            var prob = jStat2.normal.cdf(-ncp, 0, 1);
            var value = tol + 1;
            var lastvalue = value;
            var y2 = x2 * x2 / (x2 * x2 + dof);
            var j2 = 0;
            var p3 = Math2.exp(-ncp * ncp / 2);
            var q2 = Math2.exp(-ncp * ncp / 2 - 0.5 * Math2.log(2) - jStat2.gammaln(3 / 2)) * ncp;
            while (j2 < min_iterations || lastvalue > tol || value > tol) {
              lastvalue = value;
              if (j2 > 0) {
                p3 *= ncp * ncp / (2 * j2);
                q2 *= ncp * ncp / (2 * (j2 + 1 / 2));
              }
              value = p3 * jStat2.beta.cdf(y2, j2 + 0.5, dof / 2) + q2 * jStat2.beta.cdf(y2, j2 + 1, dof / 2);
              prob += 0.5 * value;
              j2++;
            }
            return flip ? 1 - prob : prob;
          }
        });
        jStat2.extend(jStat2.normal, {
          pdf: function pdf(x2, mean, std) {
            return Math2.exp(-0.5 * Math2.log(2 * Math2.PI) - Math2.log(std) - Math2.pow(x2 - mean, 2) / (2 * std * std));
          },
          cdf: function cdf(x2, mean, std) {
            return 0.5 * (1 + jStat2.erf((x2 - mean) / Math2.sqrt(2 * std * std)));
          },
          inv: function(p3, mean, std) {
            return -1.4142135623730951 * std * jStat2.erfcinv(2 * p3) + mean;
          },
          mean: function(mean) {
            return mean;
          },
          median: function median(mean) {
            return mean;
          },
          mode: function(mean) {
            return mean;
          },
          sample: function sample(mean, std) {
            return jStat2.randn() * std + mean;
          },
          variance: function(mean, std) {
            return std * std;
          }
        });
        jStat2.extend(jStat2.pareto, {
          pdf: function pdf(x2, scale, shape) {
            if (x2 < scale)
              return 0;
            return shape * Math2.pow(scale, shape) / Math2.pow(x2, shape + 1);
          },
          cdf: function cdf(x2, scale, shape) {
            if (x2 < scale)
              return 0;
            return 1 - Math2.pow(scale / x2, shape);
          },
          inv: function inv(p3, scale, shape) {
            return scale / Math2.pow(1 - p3, 1 / shape);
          },
          mean: function mean(scale, shape) {
            if (shape <= 1)
              return void 0;
            return shape * Math2.pow(scale, shape) / (shape - 1);
          },
          median: function median(scale, shape) {
            return scale * (shape * Math2.SQRT2);
          },
          mode: function mode(scale) {
            return scale;
          },
          variance: function(scale, shape) {
            if (shape <= 2)
              return void 0;
            return scale * scale * shape / (Math2.pow(shape - 1, 2) * (shape - 2));
          }
        });
        jStat2.extend(jStat2.studentt, {
          pdf: function pdf(x2, dof) {
            dof = dof > 1e100 ? 1e100 : dof;
            return 1 / (Math2.sqrt(dof) * jStat2.betafn(0.5, dof / 2)) * Math2.pow(1 + x2 * x2 / dof, -((dof + 1) / 2));
          },
          cdf: function cdf(x2, dof) {
            var dof2 = dof / 2;
            return jStat2.ibeta((x2 + Math2.sqrt(x2 * x2 + dof)) / (2 * Math2.sqrt(x2 * x2 + dof)), dof2, dof2);
          },
          inv: function(p3, dof) {
            var x2 = jStat2.ibetainv(2 * Math2.min(p3, 1 - p3), 0.5 * dof, 0.5);
            x2 = Math2.sqrt(dof * (1 - x2) / x2);
            return p3 > 0.5 ? x2 : -x2;
          },
          mean: function mean(dof) {
            return dof > 1 ? 0 : void 0;
          },
          median: function median() {
            return 0;
          },
          mode: function mode() {
            return 0;
          },
          sample: function sample(dof) {
            return jStat2.randn() * Math2.sqrt(dof / (2 * jStat2.randg(dof / 2)));
          },
          variance: function variance(dof) {
            return dof > 2 ? dof / (dof - 2) : dof > 1 ? Infinity : void 0;
          }
        });
        jStat2.extend(jStat2.weibull, {
          pdf: function pdf(x2, scale, shape) {
            if (x2 < 0 || scale < 0 || shape < 0)
              return 0;
            return shape / scale * Math2.pow(x2 / scale, shape - 1) * Math2.exp(-Math2.pow(x2 / scale, shape));
          },
          cdf: function cdf(x2, scale, shape) {
            return x2 < 0 ? 0 : 1 - Math2.exp(-Math2.pow(x2 / scale, shape));
          },
          inv: function(p3, scale, shape) {
            return scale * Math2.pow(-Math2.log(1 - p3), 1 / shape);
          },
          mean: function(scale, shape) {
            return scale * jStat2.gammafn(1 + 1 / shape);
          },
          median: function median(scale, shape) {
            return scale * Math2.pow(Math2.log(2), 1 / shape);
          },
          mode: function mode(scale, shape) {
            if (shape <= 1)
              return 0;
            return scale * Math2.pow((shape - 1) / shape, 1 / shape);
          },
          sample: function sample(scale, shape) {
            return scale * Math2.pow(-Math2.log(jStat2._random_fn()), 1 / shape);
          },
          variance: function variance(scale, shape) {
            return scale * scale * jStat2.gammafn(1 + 2 / shape) - Math2.pow(jStat2.weibull.mean(scale, shape), 2);
          }
        });
        jStat2.extend(jStat2.uniform, {
          pdf: function pdf(x2, a3, b2) {
            return x2 < a3 || x2 > b2 ? 0 : 1 / (b2 - a3);
          },
          cdf: function cdf(x2, a3, b2) {
            if (x2 < a3)
              return 0;
            else if (x2 < b2)
              return (x2 - a3) / (b2 - a3);
            return 1;
          },
          inv: function(p3, a3, b2) {
            return a3 + p3 * (b2 - a3);
          },
          mean: function mean(a3, b2) {
            return 0.5 * (a3 + b2);
          },
          median: function median(a3, b2) {
            return jStat2.mean(a3, b2);
          },
          mode: function mode() {
            throw new Error("mode is not yet implemented");
          },
          sample: function sample(a3, b2) {
            return a3 / 2 + b2 / 2 + (b2 / 2 - a3 / 2) * (2 * jStat2._random_fn() - 1);
          },
          variance: function variance(a3, b2) {
            return Math2.pow(b2 - a3, 2) / 12;
          }
        });
        function betinc(x2, a3, b2, eps) {
          var a0 = 0;
          var b0 = 1;
          var a1 = 1;
          var b1 = 1;
          var m9 = 0;
          var a22 = 0;
          var c9;
          while (Math2.abs((a1 - a22) / a1) > eps) {
            a22 = a1;
            c9 = -(a3 + m9) * (a3 + b2 + m9) * x2 / (a3 + 2 * m9) / (a3 + 2 * m9 + 1);
            a0 = a1 + c9 * a0;
            b0 = b1 + c9 * b0;
            m9 = m9 + 1;
            c9 = m9 * (b2 - m9) * x2 / (a3 + 2 * m9 - 1) / (a3 + 2 * m9);
            a1 = a0 + c9 * a1;
            b1 = b0 + c9 * b1;
            a0 = a0 / b1;
            b0 = b0 / b1;
            a1 = a1 / b1;
            b1 = 1;
          }
          return a1 / a3;
        }
        jStat2.extend(jStat2.binomial, {
          pdf: function pdf(k2, n3, p3) {
            return p3 === 0 || p3 === 1 ? n3 * p3 === k2 ? 1 : 0 : jStat2.combination(n3, k2) * Math2.pow(p3, k2) * Math2.pow(1 - p3, n3 - k2);
          },
          cdf: function cdf(x2, n3, p3) {
            var betacdf;
            var eps = 1e-10;
            if (x2 < 0)
              return 0;
            if (x2 >= n3)
              return 1;
            if (p3 < 0 || p3 > 1 || n3 <= 0)
              return NaN;
            x2 = Math2.floor(x2);
            var z2 = p3;
            var a3 = x2 + 1;
            var b2 = n3 - x2;
            var s3 = a3 + b2;
            var bt = Math2.exp(jStat2.gammaln(s3) - jStat2.gammaln(b2) - jStat2.gammaln(a3) + a3 * Math2.log(z2) + b2 * Math2.log(1 - z2));
            if (z2 < (a3 + 1) / (s3 + 2))
              betacdf = bt * betinc(z2, a3, b2, eps);
            else
              betacdf = 1 - bt * betinc(1 - z2, b2, a3, eps);
            return Math2.round((1 - betacdf) * (1 / eps)) / (1 / eps);
          }
        });
        jStat2.extend(jStat2.negbin, {
          pdf: function pdf(k2, r3, p3) {
            if (k2 !== k2 >>> 0)
              return false;
            if (k2 < 0)
              return 0;
            return jStat2.combination(k2 + r3 - 1, r3 - 1) * Math2.pow(1 - p3, k2) * Math2.pow(p3, r3);
          },
          cdf: function cdf(x2, r3, p3) {
            var sum = 0, k2 = 0;
            if (x2 < 0)
              return 0;
            for (; k2 <= x2; k2++) {
              sum += jStat2.negbin.pdf(k2, r3, p3);
            }
            return sum;
          }
        });
        jStat2.extend(jStat2.hypgeom, {
          pdf: function pdf(k2, N2, m2, n3) {
            if (k2 !== k2 | 0) {
              return false;
            } else if (k2 < 0 || k2 < m2 - (N2 - n3)) {
              return 0;
            } else if (k2 > n3 || k2 > m2) {
              return 0;
            } else if (m2 * 2 > N2) {
              if (n3 * 2 > N2) {
                return jStat2.hypgeom.pdf(N2 - m2 - n3 + k2, N2, N2 - m2, N2 - n3);
              } else {
                return jStat2.hypgeom.pdf(n3 - k2, N2, N2 - m2, n3);
              }
            } else if (n3 * 2 > N2) {
              return jStat2.hypgeom.pdf(m2 - k2, N2, m2, N2 - n3);
            } else if (m2 < n3) {
              return jStat2.hypgeom.pdf(k2, N2, n3, m2);
            } else {
              var scaledPDF = 1;
              var samplesDone = 0;
              for (var i3 = 0; i3 < k2; i3++) {
                while (scaledPDF > 1 && samplesDone < n3) {
                  scaledPDF *= 1 - m2 / (N2 - samplesDone);
                  samplesDone++;
                }
                scaledPDF *= (n3 - i3) * (m2 - i3) / ((i3 + 1) * (N2 - m2 - n3 + i3 + 1));
              }
              for (; samplesDone < n3; samplesDone++) {
                scaledPDF *= 1 - m2 / (N2 - samplesDone);
              }
              return Math2.min(1, Math2.max(0, scaledPDF));
            }
          },
          cdf: function cdf(x2, N2, m2, n3) {
            if (x2 < 0 || x2 < m2 - (N2 - n3)) {
              return 0;
            } else if (x2 >= n3 || x2 >= m2) {
              return 1;
            } else if (m2 * 2 > N2) {
              if (n3 * 2 > N2) {
                return jStat2.hypgeom.cdf(N2 - m2 - n3 + x2, N2, N2 - m2, N2 - n3);
              } else {
                return 1 - jStat2.hypgeom.cdf(n3 - x2 - 1, N2, N2 - m2, n3);
              }
            } else if (n3 * 2 > N2) {
              return 1 - jStat2.hypgeom.cdf(m2 - x2 - 1, N2, m2, N2 - n3);
            } else if (m2 < n3) {
              return jStat2.hypgeom.cdf(x2, N2, n3, m2);
            } else {
              var scaledCDF = 1;
              var scaledPDF = 1;
              var samplesDone = 0;
              for (var i3 = 0; i3 < x2; i3++) {
                while (scaledCDF > 1 && samplesDone < n3) {
                  var factor = 1 - m2 / (N2 - samplesDone);
                  scaledPDF *= factor;
                  scaledCDF *= factor;
                  samplesDone++;
                }
                scaledPDF *= (n3 - i3) * (m2 - i3) / ((i3 + 1) * (N2 - m2 - n3 + i3 + 1));
                scaledCDF += scaledPDF;
              }
              for (; samplesDone < n3; samplesDone++) {
                scaledCDF *= 1 - m2 / (N2 - samplesDone);
              }
              return Math2.min(1, Math2.max(0, scaledCDF));
            }
          }
        });
        jStat2.extend(jStat2.poisson, {
          pdf: function pdf(k2, l3) {
            if (l3 < 0 || k2 % 1 !== 0 || k2 < 0) {
              return 0;
            }
            return Math2.pow(l3, k2) * Math2.exp(-l3) / jStat2.factorial(k2);
          },
          cdf: function cdf(x2, l3) {
            var sumarr = [], k2 = 0;
            if (x2 < 0)
              return 0;
            for (; k2 <= x2; k2++) {
              sumarr.push(jStat2.poisson.pdf(k2, l3));
            }
            return jStat2.sum(sumarr);
          },
          mean: function(l3) {
            return l3;
          },
          variance: function(l3) {
            return l3;
          },
          sampleSmall: function sampleSmall(l3) {
            var p3 = 1, k2 = 0, L2 = Math2.exp(-l3);
            do {
              k2++;
              p3 *= jStat2._random_fn();
            } while (p3 > L2);
            return k2 - 1;
          },
          sampleLarge: function sampleLarge(l3) {
            var lam = l3;
            var k2;
            var U2, V, slam, loglam, a3, b2, invalpha, vr, us;
            slam = Math2.sqrt(lam);
            loglam = Math2.log(lam);
            b2 = 0.931 + 2.53 * slam;
            a3 = -0.059 + 0.02483 * b2;
            invalpha = 1.1239 + 1.1328 / (b2 - 3.4);
            vr = 0.9277 - 3.6224 / (b2 - 2);
            while (1) {
              U2 = Math2.random() - 0.5;
              V = Math2.random();
              us = 0.5 - Math2.abs(U2);
              k2 = Math2.floor((2 * a3 / us + b2) * U2 + lam + 0.43);
              if (us >= 0.07 && V <= vr) {
                return k2;
              }
              if (k2 < 0 || us < 0.013 && V > us) {
                continue;
              }
              if (Math2.log(V) + Math2.log(invalpha) - Math2.log(a3 / (us * us) + b2) <= -lam + k2 * loglam - jStat2.loggam(k2 + 1)) {
                return k2;
              }
            }
          },
          sample: function sample(l3) {
            if (l3 < 10)
              return this.sampleSmall(l3);
            else
              return this.sampleLarge(l3);
          }
        });
        jStat2.extend(jStat2.triangular, {
          pdf: function pdf(x2, a3, b2, c3) {
            if (b2 <= a3 || c3 < a3 || c3 > b2) {
              return NaN;
            } else {
              if (x2 < a3 || x2 > b2) {
                return 0;
              } else if (x2 < c3) {
                return 2 * (x2 - a3) / ((b2 - a3) * (c3 - a3));
              } else if (x2 === c3) {
                return 2 / (b2 - a3);
              } else {
                return 2 * (b2 - x2) / ((b2 - a3) * (b2 - c3));
              }
            }
          },
          cdf: function cdf(x2, a3, b2, c3) {
            if (b2 <= a3 || c3 < a3 || c3 > b2)
              return NaN;
            if (x2 <= a3)
              return 0;
            else if (x2 >= b2)
              return 1;
            if (x2 <= c3)
              return Math2.pow(x2 - a3, 2) / ((b2 - a3) * (c3 - a3));
            else
              return 1 - Math2.pow(b2 - x2, 2) / ((b2 - a3) * (b2 - c3));
          },
          inv: function inv(p3, a3, b2, c3) {
            if (b2 <= a3 || c3 < a3 || c3 > b2) {
              return NaN;
            } else {
              if (p3 <= (c3 - a3) / (b2 - a3)) {
                return a3 + (b2 - a3) * Math2.sqrt(p3 * ((c3 - a3) / (b2 - a3)));
              } else {
                return a3 + (b2 - a3) * (1 - Math2.sqrt((1 - p3) * (1 - (c3 - a3) / (b2 - a3))));
              }
            }
          },
          mean: function mean(a3, b2, c3) {
            return (a3 + b2 + c3) / 3;
          },
          median: function median(a3, b2, c3) {
            if (c3 <= (a3 + b2) / 2) {
              return b2 - Math2.sqrt((b2 - a3) * (b2 - c3)) / Math2.sqrt(2);
            } else if (c3 > (a3 + b2) / 2) {
              return a3 + Math2.sqrt((b2 - a3) * (c3 - a3)) / Math2.sqrt(2);
            }
          },
          mode: function mode(a3, b2, c3) {
            return c3;
          },
          sample: function sample(a3, b2, c3) {
            var u3 = jStat2._random_fn();
            if (u3 < (c3 - a3) / (b2 - a3))
              return a3 + Math2.sqrt(u3 * (b2 - a3) * (c3 - a3));
            return b2 - Math2.sqrt((1 - u3) * (b2 - a3) * (b2 - c3));
          },
          variance: function variance(a3, b2, c3) {
            return (a3 * a3 + b2 * b2 + c3 * c3 - a3 * b2 - a3 * c3 - b2 * c3) / 18;
          }
        });
        jStat2.extend(jStat2.arcsine, {
          pdf: function pdf(x2, a3, b2) {
            if (b2 <= a3)
              return NaN;
            return x2 <= a3 || x2 >= b2 ? 0 : 2 / Math2.PI * Math2.pow(Math2.pow(b2 - a3, 2) - Math2.pow(2 * x2 - a3 - b2, 2), -0.5);
          },
          cdf: function cdf(x2, a3, b2) {
            if (x2 < a3)
              return 0;
            else if (x2 < b2)
              return 2 / Math2.PI * Math2.asin(Math2.sqrt((x2 - a3) / (b2 - a3)));
            return 1;
          },
          inv: function(p3, a3, b2) {
            return a3 + (0.5 - 0.5 * Math2.cos(Math2.PI * p3)) * (b2 - a3);
          },
          mean: function mean(a3, b2) {
            if (b2 <= a3)
              return NaN;
            return (a3 + b2) / 2;
          },
          median: function median(a3, b2) {
            if (b2 <= a3)
              return NaN;
            return (a3 + b2) / 2;
          },
          mode: function mode() {
            throw new Error("mode is not yet implemented");
          },
          sample: function sample(a3, b2) {
            return (a3 + b2) / 2 + (b2 - a3) / 2 * Math2.sin(2 * Math2.PI * jStat2.uniform.sample(0, 1));
          },
          variance: function variance(a3, b2) {
            if (b2 <= a3)
              return NaN;
            return Math2.pow(b2 - a3, 2) / 8;
          }
        });
        function laplaceSign(x2) {
          return x2 / Math2.abs(x2);
        }
        jStat2.extend(jStat2.laplace, {
          pdf: function pdf(x2, mu, b2) {
            return b2 <= 0 ? 0 : Math2.exp(-Math2.abs(x2 - mu) / b2) / (2 * b2);
          },
          cdf: function cdf(x2, mu, b2) {
            if (b2 <= 0) {
              return 0;
            }
            if (x2 < mu) {
              return 0.5 * Math2.exp((x2 - mu) / b2);
            } else {
              return 1 - 0.5 * Math2.exp(-(x2 - mu) / b2);
            }
          },
          mean: function(mu) {
            return mu;
          },
          median: function(mu) {
            return mu;
          },
          mode: function(mu) {
            return mu;
          },
          variance: function(mu, b2) {
            return 2 * b2 * b2;
          },
          sample: function sample(mu, b2) {
            var u3 = jStat2._random_fn() - 0.5;
            return mu - b2 * laplaceSign(u3) * Math2.log(1 - 2 * Math2.abs(u3));
          }
        });
        function tukeyWprob(w2, rr, cc) {
          var nleg = 12;
          var ihalf = 6;
          var C1 = -30;
          var C2 = -50;
          var C3 = 60;
          var bb = 8;
          var wlar = 3;
          var wincr1 = 2;
          var wincr2 = 3;
          var xleg = [
            0.9815606342467192,
            0.9041172563704749,
            0.7699026741943047,
            0.5873179542866175,
            0.3678314989981802,
            0.1252334085114689
          ];
          var aleg = [
            0.04717533638651183,
            0.10693932599531843,
            0.16007832854334622,
            0.20316742672306592,
            0.2334925365383548,
            0.24914704581340277
          ];
          var qsqz = w2 * 0.5;
          if (qsqz >= bb)
            return 1;
          var pr_w = 2 * jStat2.normal.cdf(qsqz, 0, 1, 1, 0) - 1;
          if (pr_w >= Math2.exp(C2 / cc))
            pr_w = Math2.pow(pr_w, cc);
          else
            pr_w = 0;
          var wincr;
          if (w2 > wlar)
            wincr = wincr1;
          else
            wincr = wincr2;
          var blb = qsqz;
          var binc = (bb - qsqz) / wincr;
          var bub = blb + binc;
          var einsum = 0;
          var cc1 = cc - 1;
          for (var wi = 1; wi <= wincr; wi++) {
            var elsum = 0;
            var a3 = 0.5 * (bub + blb);
            var b2 = 0.5 * (bub - blb);
            for (var jj = 1; jj <= nleg; jj++) {
              var j2, xx;
              if (ihalf < jj) {
                j2 = nleg - jj + 1;
                xx = xleg[j2 - 1];
              } else {
                j2 = jj;
                xx = -xleg[j2 - 1];
              }
              var c3 = b2 * xx;
              var ac = a3 + c3;
              var qexpo = ac * ac;
              if (qexpo > C3)
                break;
              var pplus = 2 * jStat2.normal.cdf(ac, 0, 1, 1, 0);
              var pminus = 2 * jStat2.normal.cdf(ac, w2, 1, 1, 0);
              var rinsum = pplus * 0.5 - pminus * 0.5;
              if (rinsum >= Math2.exp(C1 / cc1)) {
                rinsum = aleg[j2 - 1] * Math2.exp(-(0.5 * qexpo)) * Math2.pow(rinsum, cc1);
                elsum += rinsum;
              }
            }
            elsum *= 2 * b2 * cc / Math2.sqrt(2 * Math2.PI);
            einsum += elsum;
            blb = bub;
            bub += binc;
          }
          pr_w += einsum;
          if (pr_w <= Math2.exp(C1 / rr))
            return 0;
          pr_w = Math2.pow(pr_w, rr);
          if (pr_w >= 1)
            return 1;
          return pr_w;
        }
        function tukeyQinv(p3, c3, v3) {
          var p0 = 0.322232421088;
          var q0 = 0.099348462606;
          var p1 = -1;
          var q1 = 0.588581570495;
          var p22 = -0.342242088547;
          var q2 = 0.531103462366;
          var p32 = -0.204231210125;
          var q3 = 0.10353775285;
          var p4 = -453642210148e-16;
          var q4 = 0.0038560700634;
          var c1 = 0.8832;
          var c22 = 0.2368;
          var c32 = 1.214;
          var c4 = 1.208;
          var c5 = 1.4142;
          var vmax = 120;
          var ps = 0.5 - 0.5 * p3;
          var yi = Math2.sqrt(Math2.log(1 / (ps * ps)));
          var t3 = yi + ((((yi * p4 + p32) * yi + p22) * yi + p1) * yi + p0) / ((((yi * q4 + q3) * yi + q2) * yi + q1) * yi + q0);
          if (v3 < vmax)
            t3 += (t3 * t3 * t3 + t3) / v3 / 4;
          var q5 = c1 - c22 * t3;
          if (v3 < vmax)
            q5 += -c32 / v3 + c4 * t3 / v3;
          return t3 * (q5 * Math2.log(c3 - 1) + c5);
        }
        jStat2.extend(jStat2.tukey, {
          cdf: function cdf(q2, nmeans, df) {
            var rr = 1;
            var cc = nmeans;
            var nlegq = 16;
            var ihalfq = 8;
            var eps1 = -30;
            var eps2 = 1e-14;
            var dhaf = 100;
            var dquar = 800;
            var deigh = 5e3;
            var dlarg = 25e3;
            var ulen1 = 1;
            var ulen2 = 0.5;
            var ulen3 = 0.25;
            var ulen4 = 0.125;
            var xlegq = [
              0.9894009349916499,
              0.9445750230732326,
              0.8656312023878318,
              0.755404408355003,
              0.6178762444026438,
              0.45801677765722737,
              0.2816035507792589,
              0.09501250983763744
            ];
            var alegq = [
              0.027152459411754096,
              0.062253523938647894,
              0.09515851168249279,
              0.12462897125553388,
              0.14959598881657674,
              0.16915651939500254,
              0.18260341504492358,
              0.1894506104550685
            ];
            if (q2 <= 0)
              return 0;
            if (df < 2 || rr < 1 || cc < 2)
              return NaN;
            if (!Number.isFinite(q2))
              return 1;
            if (df > dlarg)
              return tukeyWprob(q2, rr, cc);
            var f22 = df * 0.5;
            var f2lf = f22 * Math2.log(df) - df * Math2.log(2) - jStat2.gammaln(f22);
            var f21 = f22 - 1;
            var ff4 = df * 0.25;
            var ulen;
            if (df <= dhaf)
              ulen = ulen1;
            else if (df <= dquar)
              ulen = ulen2;
            else if (df <= deigh)
              ulen = ulen3;
            else
              ulen = ulen4;
            f2lf += Math2.log(ulen);
            var ans = 0;
            for (var i3 = 1; i3 <= 50; i3++) {
              var otsum = 0;
              var twa1 = (2 * i3 - 1) * ulen;
              for (var jj = 1; jj <= nlegq; jj++) {
                var j2, t1;
                if (ihalfq < jj) {
                  j2 = jj - ihalfq - 1;
                  t1 = f2lf + f21 * Math2.log(twa1 + xlegq[j2] * ulen) - (xlegq[j2] * ulen + twa1) * ff4;
                } else {
                  j2 = jj - 1;
                  t1 = f2lf + f21 * Math2.log(twa1 - xlegq[j2] * ulen) + (xlegq[j2] * ulen - twa1) * ff4;
                }
                var qsqz;
                if (t1 >= eps1) {
                  if (ihalfq < jj) {
                    qsqz = q2 * Math2.sqrt((xlegq[j2] * ulen + twa1) * 0.5);
                  } else {
                    qsqz = q2 * Math2.sqrt((-(xlegq[j2] * ulen) + twa1) * 0.5);
                  }
                  var wprb = tukeyWprob(qsqz, rr, cc);
                  var rotsum = wprb * alegq[j2] * Math2.exp(t1);
                  otsum += rotsum;
                }
              }
              if (i3 * ulen >= 1 && otsum <= eps2)
                break;
              ans += otsum;
            }
            if (otsum > eps2) {
              throw new Error("tukey.cdf failed to converge");
            }
            if (ans > 1)
              ans = 1;
            return ans;
          },
          inv: function(p3, nmeans, df) {
            var rr = 1;
            var cc = nmeans;
            var eps = 1e-4;
            var maxiter = 50;
            if (df < 2 || rr < 1 || cc < 2)
              return NaN;
            if (p3 < 0 || p3 > 1)
              return NaN;
            if (p3 === 0)
              return 0;
            if (p3 === 1)
              return Infinity;
            var x0 = tukeyQinv(p3, cc, df);
            var valx0 = jStat2.tukey.cdf(x0, nmeans, df) - p3;
            var x1;
            if (valx0 > 0)
              x1 = Math2.max(0, x0 - 1);
            else
              x1 = x0 + 1;
            var valx1 = jStat2.tukey.cdf(x1, nmeans, df) - p3;
            var ans;
            for (var iter = 1; iter < maxiter; iter++) {
              ans = x1 - valx1 * (x1 - x0) / (valx1 - valx0);
              valx0 = valx1;
              x0 = x1;
              if (ans < 0) {
                ans = 0;
                valx1 = -p3;
              }
              valx1 = jStat2.tukey.cdf(ans, nmeans, df) - p3;
              x1 = ans;
              var xabs = Math2.abs(x1 - x0);
              if (xabs < eps)
                return ans;
            }
            throw new Error("tukey.inv failed to converge");
          }
        });
      })(jStat, Math);
      (function(jStat2, Math2) {
        var push = Array.prototype.push;
        var isArray = jStat2.utils.isArray;
        function isUsable(arg) {
          return isArray(arg) || arg instanceof jStat2;
        }
        jStat2.extend({
          // add a vector/matrix to a vector/matrix or scalar
          add: function add(arr, arg) {
            if (isUsable(arg)) {
              if (!isUsable(arg[0]))
                arg = [arg];
              return jStat2.map(arr, function(value, row, col) {
                return value + arg[row][col];
              });
            }
            return jStat2.map(arr, function(value) {
              return value + arg;
            });
          },
          // subtract a vector or scalar from the vector
          subtract: function subtract(arr, arg) {
            if (isUsable(arg)) {
              if (!isUsable(arg[0]))
                arg = [arg];
              return jStat2.map(arr, function(value, row, col) {
                return value - arg[row][col] || 0;
              });
            }
            return jStat2.map(arr, function(value) {
              return value - arg;
            });
          },
          // matrix division
          divide: function divide(arr, arg) {
            if (isUsable(arg)) {
              if (!isUsable(arg[0]))
                arg = [arg];
              return jStat2.multiply(arr, jStat2.inv(arg));
            }
            return jStat2.map(arr, function(value) {
              return value / arg;
            });
          },
          // matrix multiplication
          multiply: function multiply(arr, arg) {
            var row, col, nrescols, sum, nrow, ncol, res, rescols;
            if (arr.length === void 0 && arg.length === void 0) {
              return arr * arg;
            }
            nrow = arr.length, ncol = arr[0].length, res = jStat2.zeros(nrow, nrescols = isUsable(arg) ? arg[0].length : ncol), rescols = 0;
            if (isUsable(arg)) {
              for (; rescols < nrescols; rescols++) {
                for (row = 0; row < nrow; row++) {
                  sum = 0;
                  for (col = 0; col < ncol; col++)
                    sum += arr[row][col] * arg[col][rescols];
                  res[row][rescols] = sum;
                }
              }
              return nrow === 1 && rescols === 1 ? res[0][0] : res;
            }
            return jStat2.map(arr, function(value) {
              return value * arg;
            });
          },
          // outer([1,2,3],[4,5,6])
          // ===
          // [[1],[2],[3]] times [[4,5,6]]
          // ->
          // [[4,5,6],[8,10,12],[12,15,18]]
          outer: function outer(A2, B2) {
            return jStat2.multiply(A2.map(function(t3) {
              return [t3];
            }), [B2]);
          },
          // Returns the dot product of two matricies
          dot: function dot(arr, arg) {
            if (!isUsable(arr[0]))
              arr = [arr];
            if (!isUsable(arg[0]))
              arg = [arg];
            var left = arr[0].length === 1 && arr.length !== 1 ? jStat2.transpose(arr) : arr, right = arg[0].length === 1 && arg.length !== 1 ? jStat2.transpose(arg) : arg, res = [], row = 0, nrow = left.length, ncol = left[0].length, sum, col;
            for (; row < nrow; row++) {
              res[row] = [];
              sum = 0;
              for (col = 0; col < ncol; col++)
                sum += left[row][col] * right[row][col];
              res[row] = sum;
            }
            return res.length === 1 ? res[0] : res;
          },
          // raise every element by a scalar
          pow: function pow(arr, arg) {
            return jStat2.map(arr, function(value) {
              return Math2.pow(value, arg);
            });
          },
          // exponentiate every element
          exp: function exp(arr) {
            return jStat2.map(arr, function(value) {
              return Math2.exp(value);
            });
          },
          // generate the natural log of every element
          log: function exp(arr) {
            return jStat2.map(arr, function(value) {
              return Math2.log(value);
            });
          },
          // generate the absolute values of the vector
          abs: function abs(arr) {
            return jStat2.map(arr, function(value) {
              return Math2.abs(value);
            });
          },
          // computes the p-norm of the vector
          // In the case that a matrix is passed, uses the first row as the vector
          norm: function norm(arr, p3) {
            var nnorm = 0, i3 = 0;
            if (isNaN(p3))
              p3 = 2;
            if (isUsable(arr[0]))
              arr = arr[0];
            for (; i3 < arr.length; i3++) {
              nnorm += Math2.pow(Math2.abs(arr[i3]), p3);
            }
            return Math2.pow(nnorm, 1 / p3);
          },
          // computes the angle between two vectors in rads
          // In case a matrix is passed, this uses the first row as the vector
          angle: function angle(arr, arg) {
            return Math2.acos(jStat2.dot(arr, arg) / (jStat2.norm(arr) * jStat2.norm(arg)));
          },
          // augment one matrix by another
          // Note: this function returns a matrix, not a jStat object
          aug: function aug(a3, b2) {
            var newarr = [];
            var i3;
            for (i3 = 0; i3 < a3.length; i3++) {
              newarr.push(a3[i3].slice());
            }
            for (i3 = 0; i3 < newarr.length; i3++) {
              push.apply(newarr[i3], b2[i3]);
            }
            return newarr;
          },
          // The inv() function calculates the inverse of a matrix
          // Create the inverse by augmenting the matrix by the identity matrix of the
          // appropriate size, and then use G-J elimination on the augmented matrix.
          inv: function inv(a3) {
            var rows = a3.length;
            var cols = a3[0].length;
            var b2 = jStat2.identity(rows, cols);
            var c3 = jStat2.gauss_jordan(a3, b2);
            var result = [];
            var i3 = 0;
            var j2;
            for (; i3 < rows; i3++) {
              result[i3] = [];
              for (j2 = cols; j2 < c3[0].length; j2++)
                result[i3][j2 - cols] = c3[i3][j2];
            }
            return result;
          },
          // calculate the determinant of a matrix
          det: function det(a3) {
            if (a3.length === 2) {
              return a3[0][0] * a3[1][1] - a3[0][1] * a3[1][0];
            }
            var determinant = 0;
            for (var i3 = 0; i3 < a3.length; i3++) {
              var submatrix = [];
              for (var row = 1; row < a3.length; row++) {
                submatrix[row - 1] = [];
                for (var col = 0; col < a3.length; col++) {
                  if (col < i3) {
                    submatrix[row - 1][col] = a3[row][col];
                  } else if (col > i3) {
                    submatrix[row - 1][col - 1] = a3[row][col];
                  }
                }
              }
              var sign = i3 % 2 ? -1 : 1;
              determinant += det(submatrix) * a3[0][i3] * sign;
            }
            return determinant;
          },
          gauss_elimination: function gauss_elimination(a3, b2) {
            var i3 = 0, j2 = 0, n3 = a3.length, m2 = a3[0].length, factor = 1, sum = 0, x2 = [], maug, pivot, temp, k2;
            a3 = jStat2.aug(a3, b2);
            maug = a3[0].length;
            for (i3 = 0; i3 < n3; i3++) {
              pivot = a3[i3][i3];
              j2 = i3;
              for (k2 = i3 + 1; k2 < m2; k2++) {
                if (pivot < Math2.abs(a3[k2][i3])) {
                  pivot = a3[k2][i3];
                  j2 = k2;
                }
              }
              if (j2 != i3) {
                for (k2 = 0; k2 < maug; k2++) {
                  temp = a3[i3][k2];
                  a3[i3][k2] = a3[j2][k2];
                  a3[j2][k2] = temp;
                }
              }
              for (j2 = i3 + 1; j2 < n3; j2++) {
                factor = a3[j2][i3] / a3[i3][i3];
                for (k2 = i3; k2 < maug; k2++) {
                  a3[j2][k2] = a3[j2][k2] - factor * a3[i3][k2];
                }
              }
            }
            for (i3 = n3 - 1; i3 >= 0; i3--) {
              sum = 0;
              for (j2 = i3 + 1; j2 <= n3 - 1; j2++) {
                sum = sum + x2[j2] * a3[i3][j2];
              }
              x2[i3] = (a3[i3][maug - 1] - sum) / a3[i3][i3];
            }
            return x2;
          },
          gauss_jordan: function gauss_jordan(a3, b2) {
            var m2 = jStat2.aug(a3, b2);
            var h3 = m2.length;
            var w2 = m2[0].length;
            var c3 = 0;
            var x2, y2, y22;
            for (y2 = 0; y2 < h3; y2++) {
              var maxrow = y2;
              for (y22 = y2 + 1; y22 < h3; y22++) {
                if (Math2.abs(m2[y22][y2]) > Math2.abs(m2[maxrow][y2]))
                  maxrow = y22;
              }
              var tmp = m2[y2];
              m2[y2] = m2[maxrow];
              m2[maxrow] = tmp;
              for (y22 = y2 + 1; y22 < h3; y22++) {
                c3 = m2[y22][y2] / m2[y2][y2];
                for (x2 = y2; x2 < w2; x2++) {
                  m2[y22][x2] -= m2[y2][x2] * c3;
                }
              }
            }
            for (y2 = h3 - 1; y2 >= 0; y2--) {
              c3 = m2[y2][y2];
              for (y22 = 0; y22 < y2; y22++) {
                for (x2 = w2 - 1; x2 > y2 - 1; x2--) {
                  m2[y22][x2] -= m2[y2][x2] * m2[y22][y2] / c3;
                }
              }
              m2[y2][y2] /= c3;
              for (x2 = h3; x2 < w2; x2++) {
                m2[y2][x2] /= c3;
              }
            }
            return m2;
          },
          // solve equation
          // Ax=b
          // A is upper triangular matrix
          // A=[[1,2,3],[0,4,5],[0,6,7]]
          // b=[1,2,3]
          // triaUpSolve(A,b) // -> [2.666,0.1666,1.666]
          // if you use matrix style
          // A=[[1,2,3],[0,4,5],[0,6,7]]
          // b=[[1],[2],[3]]
          // will return [[2.666],[0.1666],[1.666]]
          triaUpSolve: function triaUpSolve(A2, b2) {
            var size2 = A2[0].length;
            var x2 = jStat2.zeros(1, size2)[0];
            var parts;
            var matrix_mode = false;
            if (b2[0].length != void 0) {
              b2 = b2.map(function(i3) {
                return i3[0];
              });
              matrix_mode = true;
            }
            jStat2.arange(size2 - 1, -1, -1).forEach(function(i3) {
              parts = jStat2.arange(i3 + 1, size2).map(function(j2) {
                return x2[j2] * A2[i3][j2];
              });
              x2[i3] = (b2[i3] - jStat2.sum(parts)) / A2[i3][i3];
            });
            if (matrix_mode)
              return x2.map(function(i3) {
                return [i3];
              });
            return x2;
          },
          triaLowSolve: function triaLowSolve(A2, b2) {
            var size2 = A2[0].length;
            var x2 = jStat2.zeros(1, size2)[0];
            var parts;
            var matrix_mode = false;
            if (b2[0].length != void 0) {
              b2 = b2.map(function(i3) {
                return i3[0];
              });
              matrix_mode = true;
            }
            jStat2.arange(size2).forEach(function(i3) {
              parts = jStat2.arange(i3).map(function(j2) {
                return A2[i3][j2] * x2[j2];
              });
              x2[i3] = (b2[i3] - jStat2.sum(parts)) / A2[i3][i3];
            });
            if (matrix_mode)
              return x2.map(function(i3) {
                return [i3];
              });
            return x2;
          },
          // A -> [L,U]
          // A=LU
          // L is lower triangular matrix
          // U is upper triangular matrix
          lu: function lu(A2) {
            var size2 = A2.length;
            var L2 = jStat2.identity(size2);
            var R2 = jStat2.zeros(A2.length, A2[0].length);
            var parts;
            jStat2.arange(size2).forEach(function(t3) {
              R2[0][t3] = A2[0][t3];
            });
            jStat2.arange(1, size2).forEach(function(l3) {
              jStat2.arange(l3).forEach(function(i3) {
                parts = jStat2.arange(i3).map(function(jj) {
                  return L2[l3][jj] * R2[jj][i3];
                });
                L2[l3][i3] = (A2[l3][i3] - jStat2.sum(parts)) / R2[i3][i3];
              });
              jStat2.arange(l3, size2).forEach(function(j2) {
                parts = jStat2.arange(l3).map(function(jj) {
                  return L2[l3][jj] * R2[jj][j2];
                });
                R2[l3][j2] = A2[parts.length][j2] - jStat2.sum(parts);
              });
            });
            return [L2, R2];
          },
          // A -> T
          // A=TT'
          // T is lower triangular matrix
          cholesky: function cholesky(A2) {
            var size2 = A2.length;
            var T = jStat2.zeros(A2.length, A2[0].length);
            var parts;
            jStat2.arange(size2).forEach(function(i3) {
              parts = jStat2.arange(i3).map(function(t3) {
                return Math2.pow(T[i3][t3], 2);
              });
              T[i3][i3] = Math2.sqrt(A2[i3][i3] - jStat2.sum(parts));
              jStat2.arange(i3 + 1, size2).forEach(function(j2) {
                parts = jStat2.arange(i3).map(function(t3) {
                  return T[i3][t3] * T[j2][t3];
                });
                T[j2][i3] = (A2[i3][j2] - jStat2.sum(parts)) / T[i3][i3];
              });
            });
            return T;
          },
          gauss_jacobi: function gauss_jacobi(a3, b2, x2, r3) {
            var i3 = 0;
            var j2 = 0;
            var n3 = a3.length;
            var l3 = [];
            var u3 = [];
            var d3 = [];
            var xv, c3, h3, xk;
            for (; i3 < n3; i3++) {
              l3[i3] = [];
              u3[i3] = [];
              d3[i3] = [];
              for (j2 = 0; j2 < n3; j2++) {
                if (i3 > j2) {
                  l3[i3][j2] = a3[i3][j2];
                  u3[i3][j2] = d3[i3][j2] = 0;
                } else if (i3 < j2) {
                  u3[i3][j2] = a3[i3][j2];
                  l3[i3][j2] = d3[i3][j2] = 0;
                } else {
                  d3[i3][j2] = a3[i3][j2];
                  l3[i3][j2] = u3[i3][j2] = 0;
                }
              }
            }
            h3 = jStat2.multiply(jStat2.multiply(jStat2.inv(d3), jStat2.add(l3, u3)), -1);
            c3 = jStat2.multiply(jStat2.inv(d3), b2);
            xv = x2;
            xk = jStat2.add(jStat2.multiply(h3, x2), c3);
            i3 = 2;
            while (Math2.abs(jStat2.norm(jStat2.subtract(xk, xv))) > r3) {
              xv = xk;
              xk = jStat2.add(jStat2.multiply(h3, xv), c3);
              i3++;
            }
            return xk;
          },
          gauss_seidel: function gauss_seidel(a3, b2, x2, r3) {
            var i3 = 0;
            var n3 = a3.length;
            var l3 = [];
            var u3 = [];
            var d3 = [];
            var j2, xv, c3, h3, xk;
            for (; i3 < n3; i3++) {
              l3[i3] = [];
              u3[i3] = [];
              d3[i3] = [];
              for (j2 = 0; j2 < n3; j2++) {
                if (i3 > j2) {
                  l3[i3][j2] = a3[i3][j2];
                  u3[i3][j2] = d3[i3][j2] = 0;
                } else if (i3 < j2) {
                  u3[i3][j2] = a3[i3][j2];
                  l3[i3][j2] = d3[i3][j2] = 0;
                } else {
                  d3[i3][j2] = a3[i3][j2];
                  l3[i3][j2] = u3[i3][j2] = 0;
                }
              }
            }
            h3 = jStat2.multiply(jStat2.multiply(jStat2.inv(jStat2.add(d3, l3)), u3), -1);
            c3 = jStat2.multiply(jStat2.inv(jStat2.add(d3, l3)), b2);
            xv = x2;
            xk = jStat2.add(jStat2.multiply(h3, x2), c3);
            i3 = 2;
            while (Math2.abs(jStat2.norm(jStat2.subtract(xk, xv))) > r3) {
              xv = xk;
              xk = jStat2.add(jStat2.multiply(h3, xv), c3);
              i3 = i3 + 1;
            }
            return xk;
          },
          SOR: function SOR(a3, b2, x2, r3, w2) {
            var i3 = 0;
            var n3 = a3.length;
            var l3 = [];
            var u3 = [];
            var d3 = [];
            var j2, xv, c3, h3, xk;
            for (; i3 < n3; i3++) {
              l3[i3] = [];
              u3[i3] = [];
              d3[i3] = [];
              for (j2 = 0; j2 < n3; j2++) {
                if (i3 > j2) {
                  l3[i3][j2] = a3[i3][j2];
                  u3[i3][j2] = d3[i3][j2] = 0;
                } else if (i3 < j2) {
                  u3[i3][j2] = a3[i3][j2];
                  l3[i3][j2] = d3[i3][j2] = 0;
                } else {
                  d3[i3][j2] = a3[i3][j2];
                  l3[i3][j2] = u3[i3][j2] = 0;
                }
              }
            }
            h3 = jStat2.multiply(
              jStat2.inv(jStat2.add(d3, jStat2.multiply(l3, w2))),
              jStat2.subtract(
                jStat2.multiply(d3, 1 - w2),
                jStat2.multiply(u3, w2)
              )
            );
            c3 = jStat2.multiply(jStat2.multiply(jStat2.inv(jStat2.add(
              d3,
              jStat2.multiply(l3, w2)
            )), b2), w2);
            xv = x2;
            xk = jStat2.add(jStat2.multiply(h3, x2), c3);
            i3 = 2;
            while (Math2.abs(jStat2.norm(jStat2.subtract(xk, xv))) > r3) {
              xv = xk;
              xk = jStat2.add(jStat2.multiply(h3, xv), c3);
              i3++;
            }
            return xk;
          },
          householder: function householder(a3) {
            var m2 = a3.length;
            var n3 = a3[0].length;
            var i3 = 0;
            var w2 = [];
            var p3 = [];
            var alpha, r3, k2, j2, factor;
            for (; i3 < m2 - 1; i3++) {
              alpha = 0;
              for (j2 = i3 + 1; j2 < n3; j2++)
                alpha += a3[j2][i3] * a3[j2][i3];
              factor = a3[i3 + 1][i3] > 0 ? -1 : 1;
              alpha = factor * Math2.sqrt(alpha);
              r3 = Math2.sqrt((alpha * alpha - a3[i3 + 1][i3] * alpha) / 2);
              w2 = jStat2.zeros(m2, 1);
              w2[i3 + 1][0] = (a3[i3 + 1][i3] - alpha) / (2 * r3);
              for (k2 = i3 + 2; k2 < m2; k2++)
                w2[k2][0] = a3[k2][i3] / (2 * r3);
              p3 = jStat2.subtract(
                jStat2.identity(m2, n3),
                jStat2.multiply(jStat2.multiply(w2, jStat2.transpose(w2)), 2)
              );
              a3 = jStat2.multiply(p3, jStat2.multiply(a3, p3));
            }
            return a3;
          },
          // A -> [Q,R]
          // Q is orthogonal matrix
          // R is upper triangular
          QR: function() {
            var sum = jStat2.sum;
            var range2 = jStat2.arange;
            function qr2(x2) {
              var n3 = x2.length;
              var p3 = x2[0].length;
              var r3 = jStat2.zeros(p3, p3);
              x2 = jStat2.copy(x2);
              var i3, j2, k2;
              for (j2 = 0; j2 < p3; j2++) {
                r3[j2][j2] = Math2.sqrt(sum(range2(n3).map(function(i4) {
                  return x2[i4][j2] * x2[i4][j2];
                })));
                for (i3 = 0; i3 < n3; i3++) {
                  x2[i3][j2] = x2[i3][j2] / r3[j2][j2];
                }
                for (k2 = j2 + 1; k2 < p3; k2++) {
                  r3[j2][k2] = sum(range2(n3).map(function(i4) {
                    return x2[i4][j2] * x2[i4][k2];
                  }));
                  for (i3 = 0; i3 < n3; i3++) {
                    x2[i3][k2] = x2[i3][k2] - x2[i3][j2] * r3[j2][k2];
                  }
                }
              }
              return [x2, r3];
            }
            return qr2;
          }(),
          lstsq: function() {
            function R_I(A2) {
              A2 = jStat2.copy(A2);
              var size2 = A2.length;
              var I2 = jStat2.identity(size2);
              jStat2.arange(size2 - 1, -1, -1).forEach(function(i3) {
                jStat2.sliceAssign(
                  I2,
                  { row: i3 },
                  jStat2.divide(jStat2.slice(I2, { row: i3 }), A2[i3][i3])
                );
                jStat2.sliceAssign(
                  A2,
                  { row: i3 },
                  jStat2.divide(jStat2.slice(A2, { row: i3 }), A2[i3][i3])
                );
                jStat2.arange(i3).forEach(function(j2) {
                  var c3 = jStat2.multiply(A2[j2][i3], -1);
                  var Aj = jStat2.slice(A2, { row: j2 });
                  var cAi = jStat2.multiply(jStat2.slice(A2, { row: i3 }), c3);
                  jStat2.sliceAssign(A2, { row: j2 }, jStat2.add(Aj, cAi));
                  var Ij = jStat2.slice(I2, { row: j2 });
                  var cIi = jStat2.multiply(jStat2.slice(I2, { row: i3 }), c3);
                  jStat2.sliceAssign(I2, { row: j2 }, jStat2.add(Ij, cIi));
                });
              });
              return I2;
            }
            function qr_solve(A2, b2) {
              var array_mode = false;
              if (b2[0].length === void 0) {
                b2 = b2.map(function(x3) {
                  return [x3];
                });
                array_mode = true;
              }
              var QR = jStat2.QR(A2);
              var Q2 = QR[0];
              var R2 = QR[1];
              var attrs = A2[0].length;
              var Q1 = jStat2.slice(Q2, { col: { end: attrs } });
              var R1 = jStat2.slice(R2, { row: { end: attrs } });
              var RI = R_I(R1);
              var Q22 = jStat2.transpose(Q1);
              if (Q22[0].length === void 0) {
                Q22 = [Q22];
              }
              var x2 = jStat2.multiply(jStat2.multiply(RI, Q22), b2);
              if (x2.length === void 0) {
                x2 = [[x2]];
              }
              if (array_mode)
                return x2.map(function(i3) {
                  return i3[0];
                });
              return x2;
            }
            return qr_solve;
          }(),
          jacobi: function jacobi(a3) {
            var condition = 1;
            var n3 = a3.length;
            var e3 = jStat2.identity(n3, n3);
            var ev = [];
            var b2, i3, j2, p3, q2, maxim, theta, s3;
            while (condition === 1) {
              maxim = a3[0][1];
              p3 = 0;
              q2 = 1;
              for (i3 = 0; i3 < n3; i3++) {
                for (j2 = 0; j2 < n3; j2++) {
                  if (i3 != j2) {
                    if (maxim < Math2.abs(a3[i3][j2])) {
                      maxim = Math2.abs(a3[i3][j2]);
                      p3 = i3;
                      q2 = j2;
                    }
                  }
                }
              }
              if (a3[p3][p3] === a3[q2][q2])
                theta = a3[p3][q2] > 0 ? Math2.PI / 4 : -Math2.PI / 4;
              else
                theta = Math2.atan(2 * a3[p3][q2] / (a3[p3][p3] - a3[q2][q2])) / 2;
              s3 = jStat2.identity(n3, n3);
              s3[p3][p3] = Math2.cos(theta);
              s3[p3][q2] = -Math2.sin(theta);
              s3[q2][p3] = Math2.sin(theta);
              s3[q2][q2] = Math2.cos(theta);
              e3 = jStat2.multiply(e3, s3);
              b2 = jStat2.multiply(jStat2.multiply(jStat2.inv(s3), a3), s3);
              a3 = b2;
              condition = 0;
              for (i3 = 1; i3 < n3; i3++) {
                for (j2 = 1; j2 < n3; j2++) {
                  if (i3 != j2 && Math2.abs(a3[i3][j2]) > 1e-3) {
                    condition = 1;
                  }
                }
              }
            }
            for (i3 = 0; i3 < n3; i3++)
              ev.push(a3[i3][i3]);
            return [e3, ev];
          },
          rungekutta: function rungekutta(f3, h3, p3, t_j, u_j, order) {
            var k1, k2, u_j1, k3, k4;
            if (order === 2) {
              while (t_j <= p3) {
                k1 = h3 * f3(t_j, u_j);
                k2 = h3 * f3(t_j + h3, u_j + k1);
                u_j1 = u_j + (k1 + k2) / 2;
                u_j = u_j1;
                t_j = t_j + h3;
              }
            }
            if (order === 4) {
              while (t_j <= p3) {
                k1 = h3 * f3(t_j, u_j);
                k2 = h3 * f3(t_j + h3 / 2, u_j + k1 / 2);
                k3 = h3 * f3(t_j + h3 / 2, u_j + k2 / 2);
                k4 = h3 * f3(t_j + h3, u_j + k3);
                u_j1 = u_j + (k1 + 2 * k2 + 2 * k3 + k4) / 6;
                u_j = u_j1;
                t_j = t_j + h3;
              }
            }
            return u_j;
          },
          romberg: function romberg(f3, a3, b2, order) {
            var i3 = 0;
            var h3 = (b2 - a3) / 2;
            var x2 = [];
            var h1 = [];
            var g2 = [];
            var m2, a1, j2, k2, I2;
            while (i3 < order / 2) {
              I2 = f3(a3);
              for (j2 = a3, k2 = 0; j2 <= b2; j2 = j2 + h3, k2++)
                x2[k2] = j2;
              m2 = x2.length;
              for (j2 = 1; j2 < m2 - 1; j2++) {
                I2 += (j2 % 2 !== 0 ? 4 : 2) * f3(x2[j2]);
              }
              I2 = h3 / 3 * (I2 + f3(b2));
              g2[i3] = I2;
              h3 /= 2;
              i3++;
            }
            a1 = g2.length;
            m2 = 1;
            while (a1 !== 1) {
              for (j2 = 0; j2 < a1 - 1; j2++)
                h1[j2] = (Math2.pow(4, m2) * g2[j2 + 1] - g2[j2]) / (Math2.pow(4, m2) - 1);
              a1 = h1.length;
              g2 = h1;
              h1 = [];
              m2++;
            }
            return g2;
          },
          richardson: function richardson(X2, f3, x2, h3) {
            function pos(X3, x3) {
              var i4 = 0;
              var n3 = X3.length;
              var p3;
              for (; i4 < n3; i4++)
                if (X3[i4] === x3)
                  p3 = i4;
              return p3;
            }
            var h_min = Math2.abs(x2 - X2[pos(X2, x2) + 1]);
            var i3 = 0;
            var g2 = [];
            var h1 = [];
            var y1, y2, m2, a3, j2;
            while (h3 >= h_min) {
              y1 = pos(X2, x2 + h3);
              y2 = pos(X2, x2);
              g2[i3] = (f3[y1] - 2 * f3[y2] + f3[2 * y2 - y1]) / (h3 * h3);
              h3 /= 2;
              i3++;
            }
            a3 = g2.length;
            m2 = 1;
            while (a3 != 1) {
              for (j2 = 0; j2 < a3 - 1; j2++)
                h1[j2] = (Math2.pow(4, m2) * g2[j2 + 1] - g2[j2]) / (Math2.pow(4, m2) - 1);
              a3 = h1.length;
              g2 = h1;
              h1 = [];
              m2++;
            }
            return g2;
          },
          simpson: function simpson(f3, a3, b2, n3) {
            var h3 = (b2 - a3) / n3;
            var I2 = f3(a3);
            var x2 = [];
            var j2 = a3;
            var k2 = 0;
            var i3 = 1;
            var m2;
            for (; j2 <= b2; j2 = j2 + h3, k2++)
              x2[k2] = j2;
            m2 = x2.length;
            for (; i3 < m2 - 1; i3++) {
              I2 += (i3 % 2 !== 0 ? 4 : 2) * f3(x2[i3]);
            }
            return h3 / 3 * (I2 + f3(b2));
          },
          hermite: function hermite(X2, F2, dF, value) {
            var n3 = X2.length;
            var p3 = 0;
            var i3 = 0;
            var l3 = [];
            var dl = [];
            var A2 = [];
            var B2 = [];
            var j2;
            for (; i3 < n3; i3++) {
              l3[i3] = 1;
              for (j2 = 0; j2 < n3; j2++) {
                if (i3 != j2)
                  l3[i3] *= (value - X2[j2]) / (X2[i3] - X2[j2]);
              }
              dl[i3] = 0;
              for (j2 = 0; j2 < n3; j2++) {
                if (i3 != j2)
                  dl[i3] += 1 / (X2[i3] - X2[j2]);
              }
              A2[i3] = (1 - 2 * (value - X2[i3]) * dl[i3]) * (l3[i3] * l3[i3]);
              B2[i3] = (value - X2[i3]) * (l3[i3] * l3[i3]);
              p3 += A2[i3] * F2[i3] + B2[i3] * dF[i3];
            }
            return p3;
          },
          lagrange: function lagrange(X2, F2, value) {
            var p3 = 0;
            var i3 = 0;
            var j2, l3;
            var n3 = X2.length;
            for (; i3 < n3; i3++) {
              l3 = F2[i3];
              for (j2 = 0; j2 < n3; j2++) {
                if (i3 != j2)
                  l3 *= (value - X2[j2]) / (X2[i3] - X2[j2]);
              }
              p3 += l3;
            }
            return p3;
          },
          cubic_spline: function cubic_spline(X2, F2, value) {
            var n3 = X2.length;
            var i3 = 0, j2;
            var A2 = [];
            var B2 = [];
            var alpha = [];
            var c3 = [];
            var h3 = [];
            var b2 = [];
            var d3 = [];
            for (; i3 < n3 - 1; i3++)
              h3[i3] = X2[i3 + 1] - X2[i3];
            alpha[0] = 0;
            for (i3 = 1; i3 < n3 - 1; i3++) {
              alpha[i3] = 3 / h3[i3] * (F2[i3 + 1] - F2[i3]) - 3 / h3[i3 - 1] * (F2[i3] - F2[i3 - 1]);
            }
            for (i3 = 1; i3 < n3 - 1; i3++) {
              A2[i3] = [];
              B2[i3] = [];
              A2[i3][i3 - 1] = h3[i3 - 1];
              A2[i3][i3] = 2 * (h3[i3 - 1] + h3[i3]);
              A2[i3][i3 + 1] = h3[i3];
              B2[i3][0] = alpha[i3];
            }
            c3 = jStat2.multiply(jStat2.inv(A2), B2);
            for (j2 = 0; j2 < n3 - 1; j2++) {
              b2[j2] = (F2[j2 + 1] - F2[j2]) / h3[j2] - h3[j2] * (c3[j2 + 1][0] + 2 * c3[j2][0]) / 3;
              d3[j2] = (c3[j2 + 1][0] - c3[j2][0]) / (3 * h3[j2]);
            }
            for (j2 = 0; j2 < n3; j2++) {
              if (X2[j2] > value)
                break;
            }
            j2 -= 1;
            return F2[j2] + (value - X2[j2]) * b2[j2] + jStat2.sq(value - X2[j2]) * c3[j2] + (value - X2[j2]) * jStat2.sq(value - X2[j2]) * d3[j2];
          },
          gauss_quadrature: function gauss_quadrature() {
            throw new Error("gauss_quadrature not yet implemented");
          },
          PCA: function PCA(X2) {
            var m2 = X2.length;
            var n3 = X2[0].length;
            var i3 = 0;
            var j2, temp1;
            var u3 = [];
            var D2 = [];
            var result = [];
            var temp2 = [];
            var Y2 = [];
            var Bt = [];
            var B2 = [];
            var C = [];
            var V = [];
            var Vt = [];
            for (i3 = 0; i3 < m2; i3++) {
              u3[i3] = jStat2.sum(X2[i3]) / n3;
            }
            for (i3 = 0; i3 < n3; i3++) {
              B2[i3] = [];
              for (j2 = 0; j2 < m2; j2++) {
                B2[i3][j2] = X2[j2][i3] - u3[j2];
              }
            }
            B2 = jStat2.transpose(B2);
            for (i3 = 0; i3 < m2; i3++) {
              C[i3] = [];
              for (j2 = 0; j2 < m2; j2++) {
                C[i3][j2] = jStat2.dot([B2[i3]], [B2[j2]]) / (n3 - 1);
              }
            }
            result = jStat2.jacobi(C);
            V = result[0];
            D2 = result[1];
            Vt = jStat2.transpose(V);
            for (i3 = 0; i3 < D2.length; i3++) {
              for (j2 = i3; j2 < D2.length; j2++) {
                if (D2[i3] < D2[j2]) {
                  temp1 = D2[i3];
                  D2[i3] = D2[j2];
                  D2[j2] = temp1;
                  temp2 = Vt[i3];
                  Vt[i3] = Vt[j2];
                  Vt[j2] = temp2;
                }
              }
            }
            Bt = jStat2.transpose(B2);
            for (i3 = 0; i3 < m2; i3++) {
              Y2[i3] = [];
              for (j2 = 0; j2 < Bt.length; j2++) {
                Y2[i3][j2] = jStat2.dot([Vt[i3]], [Bt[j2]]);
              }
            }
            return [X2, D2, Vt, Y2];
          }
        });
        (function(funcs) {
          for (var i3 = 0; i3 < funcs.length; i3++)
            (function(passfunc) {
              jStat2.fn[passfunc] = function(arg, func14) {
                var tmpthis = this;
                if (func14) {
                  setTimeout(function() {
                    func14.call(tmpthis, jStat2.fn[passfunc].call(tmpthis, arg));
                  }, 15);
                  return this;
                }
                if (typeof jStat2[passfunc](this, arg) === "number")
                  return jStat2[passfunc](this, arg);
                else
                  return jStat2(jStat2[passfunc](this, arg));
              };
            })(funcs[i3]);
        })("add divide multiply subtract dot pow exp log abs norm angle".split(" "));
      })(jStat, Math);
      (function(jStat2, Math2) {
        var slice2 = [].slice;
        var isNumber = jStat2.utils.isNumber;
        var isArray = jStat2.utils.isArray;
        jStat2.extend({
          // 2 different parameter lists:
          // (value, mean, sd)
          // (value, array, flag)
          zscore: function zscore() {
            var args = slice2.call(arguments);
            if (isNumber(args[1])) {
              return (args[0] - args[1]) / args[2];
            }
            return (args[0] - jStat2.mean(args[1])) / jStat2.stdev(args[1], args[2]);
          },
          // 3 different paramter lists:
          // (value, mean, sd, sides)
          // (zscore, sides)
          // (value, array, sides, flag)
          ztest: function ztest() {
            var args = slice2.call(arguments);
            var z2;
            if (isArray(args[1])) {
              z2 = jStat2.zscore(args[0], args[1], args[3]);
              return args[2] === 1 ? jStat2.normal.cdf(-Math2.abs(z2), 0, 1) : jStat2.normal.cdf(-Math2.abs(z2), 0, 1) * 2;
            } else {
              if (args.length > 2) {
                z2 = jStat2.zscore(args[0], args[1], args[2]);
                return args[3] === 1 ? jStat2.normal.cdf(-Math2.abs(z2), 0, 1) : jStat2.normal.cdf(-Math2.abs(z2), 0, 1) * 2;
              } else {
                z2 = args[0];
                return args[1] === 1 ? jStat2.normal.cdf(-Math2.abs(z2), 0, 1) : jStat2.normal.cdf(-Math2.abs(z2), 0, 1) * 2;
              }
            }
          }
        });
        jStat2.extend(jStat2.fn, {
          zscore: function zscore(value, flag) {
            return (value - this.mean()) / this.stdev(flag);
          },
          ztest: function ztest(value, sides, flag) {
            var zscore = Math2.abs(this.zscore(value, flag));
            return sides === 1 ? jStat2.normal.cdf(-zscore, 0, 1) : jStat2.normal.cdf(-zscore, 0, 1) * 2;
          }
        });
        jStat2.extend({
          // 2 parameter lists
          // (value, mean, sd, n)
          // (value, array)
          tscore: function tscore() {
            var args = slice2.call(arguments);
            return args.length === 4 ? (args[0] - args[1]) / (args[2] / Math2.sqrt(args[3])) : (args[0] - jStat2.mean(args[1])) / (jStat2.stdev(args[1], true) / Math2.sqrt(args[1].length));
          },
          // 3 different paramter lists:
          // (value, mean, sd, n, sides)
          // (tscore, n, sides)
          // (value, array, sides)
          ttest: function ttest() {
            var args = slice2.call(arguments);
            var tscore;
            if (args.length === 5) {
              tscore = Math2.abs(jStat2.tscore(args[0], args[1], args[2], args[3]));
              return args[4] === 1 ? jStat2.studentt.cdf(-tscore, args[3] - 1) : jStat2.studentt.cdf(-tscore, args[3] - 1) * 2;
            }
            if (isNumber(args[1])) {
              tscore = Math2.abs(args[0]);
              return args[2] == 1 ? jStat2.studentt.cdf(-tscore, args[1] - 1) : jStat2.studentt.cdf(-tscore, args[1] - 1) * 2;
            }
            tscore = Math2.abs(jStat2.tscore(args[0], args[1]));
            return args[2] == 1 ? jStat2.studentt.cdf(-tscore, args[1].length - 1) : jStat2.studentt.cdf(-tscore, args[1].length - 1) * 2;
          }
        });
        jStat2.extend(jStat2.fn, {
          tscore: function tscore(value) {
            return (value - this.mean()) / (this.stdev(true) / Math2.sqrt(this.cols()));
          },
          ttest: function ttest(value, sides) {
            return sides === 1 ? 1 - jStat2.studentt.cdf(Math2.abs(this.tscore(value)), this.cols() - 1) : jStat2.studentt.cdf(-Math2.abs(this.tscore(value)), this.cols() - 1) * 2;
          }
        });
        jStat2.extend({
          // Paramter list is as follows:
          // (array1, array2, array3, ...)
          // or it is an array of arrays
          // array of arrays conversion
          anovafscore: function anovafscore() {
            var args = slice2.call(arguments), expVar, sample, sampMean, sampSampMean, tmpargs, unexpVar, i3, j2;
            if (args.length === 1) {
              tmpargs = new Array(args[0].length);
              for (i3 = 0; i3 < args[0].length; i3++) {
                tmpargs[i3] = args[0][i3];
              }
              args = tmpargs;
            }
            sample = new Array();
            for (i3 = 0; i3 < args.length; i3++) {
              sample = sample.concat(args[i3]);
            }
            sampMean = jStat2.mean(sample);
            expVar = 0;
            for (i3 = 0; i3 < args.length; i3++) {
              expVar = expVar + args[i3].length * Math2.pow(jStat2.mean(args[i3]) - sampMean, 2);
            }
            expVar /= args.length - 1;
            unexpVar = 0;
            for (i3 = 0; i3 < args.length; i3++) {
              sampSampMean = jStat2.mean(args[i3]);
              for (j2 = 0; j2 < args[i3].length; j2++) {
                unexpVar += Math2.pow(args[i3][j2] - sampSampMean, 2);
              }
            }
            unexpVar /= sample.length - args.length;
            return expVar / unexpVar;
          },
          // 2 different paramter setups
          // (array1, array2, array3, ...)
          // (anovafscore, df1, df2)
          anovaftest: function anovaftest() {
            var args = slice2.call(arguments), df1, df2, n3, i3;
            if (isNumber(args[0])) {
              return 1 - jStat2.centralF.cdf(args[0], args[1], args[2]);
            }
            var anovafscore = jStat2.anovafscore(args);
            df1 = args.length - 1;
            n3 = 0;
            for (i3 = 0; i3 < args.length; i3++) {
              n3 = n3 + args[i3].length;
            }
            df2 = n3 - df1 - 1;
            return 1 - jStat2.centralF.cdf(anovafscore, df1, df2);
          },
          ftest: function ftest(fscore, df1, df2) {
            return 1 - jStat2.centralF.cdf(fscore, df1, df2);
          }
        });
        jStat2.extend(jStat2.fn, {
          anovafscore: function anovafscore() {
            return jStat2.anovafscore(this.toArray());
          },
          anovaftes: function anovaftes() {
            var n3 = 0;
            var i3;
            for (i3 = 0; i3 < this.length; i3++) {
              n3 = n3 + this[i3].length;
            }
            return jStat2.ftest(this.anovafscore(), this.length - 1, n3 - this.length);
          }
        });
        jStat2.extend({
          // 2 parameter lists
          // (mean1, mean2, n1, n2, sd)
          // (array1, array2, sd)
          qscore: function qscore() {
            var args = slice2.call(arguments);
            var mean1, mean2, n1, n22, sd;
            if (isNumber(args[0])) {
              mean1 = args[0];
              mean2 = args[1];
              n1 = args[2];
              n22 = args[3];
              sd = args[4];
            } else {
              mean1 = jStat2.mean(args[0]);
              mean2 = jStat2.mean(args[1]);
              n1 = args[0].length;
              n22 = args[1].length;
              sd = args[2];
            }
            return Math2.abs(mean1 - mean2) / (sd * Math2.sqrt((1 / n1 + 1 / n22) / 2));
          },
          // 3 different parameter lists:
          // (qscore, n, k)
          // (mean1, mean2, n1, n2, sd, n, k)
          // (array1, array2, sd, n, k)
          qtest: function qtest() {
            var args = slice2.call(arguments);
            var qscore;
            if (args.length === 3) {
              qscore = args[0];
              args = args.slice(1);
            } else if (args.length === 7) {
              qscore = jStat2.qscore(args[0], args[1], args[2], args[3], args[4]);
              args = args.slice(5);
            } else {
              qscore = jStat2.qscore(args[0], args[1], args[2]);
              args = args.slice(3);
            }
            var n3 = args[0];
            var k2 = args[1];
            return 1 - jStat2.tukey.cdf(qscore, k2, n3 - k2);
          },
          tukeyhsd: function tukeyhsd(arrays) {
            var sd = jStat2.pooledstdev(arrays);
            var means = arrays.map(function(arr) {
              return jStat2.mean(arr);
            });
            var n3 = arrays.reduce(function(n4, arr) {
              return n4 + arr.length;
            }, 0);
            var results = [];
            for (var i3 = 0; i3 < arrays.length; ++i3) {
              for (var j2 = i3 + 1; j2 < arrays.length; ++j2) {
                var p3 = jStat2.qtest(means[i3], means[j2], arrays[i3].length, arrays[j2].length, sd, n3, arrays.length);
                results.push([[i3, j2], p3]);
              }
            }
            return results;
          }
        });
        jStat2.extend({
          // 2 different parameter setups
          // (value, alpha, sd, n)
          // (value, alpha, array)
          normalci: function normalci() {
            var args = slice2.call(arguments), ans = new Array(2), change;
            if (args.length === 4) {
              change = Math2.abs(jStat2.normal.inv(args[1] / 2, 0, 1) * args[2] / Math2.sqrt(args[3]));
            } else {
              change = Math2.abs(jStat2.normal.inv(args[1] / 2, 0, 1) * jStat2.stdev(args[2]) / Math2.sqrt(args[2].length));
            }
            ans[0] = args[0] - change;
            ans[1] = args[0] + change;
            return ans;
          },
          // 2 different parameter setups
          // (value, alpha, sd, n)
          // (value, alpha, array)
          tci: function tci() {
            var args = slice2.call(arguments), ans = new Array(2), change;
            if (args.length === 4) {
              change = Math2.abs(jStat2.studentt.inv(args[1] / 2, args[3] - 1) * args[2] / Math2.sqrt(args[3]));
            } else {
              change = Math2.abs(jStat2.studentt.inv(args[1] / 2, args[2].length - 1) * jStat2.stdev(args[2], true) / Math2.sqrt(args[2].length));
            }
            ans[0] = args[0] - change;
            ans[1] = args[0] + change;
            return ans;
          },
          significant: function significant(pvalue, alpha) {
            return pvalue < alpha;
          }
        });
        jStat2.extend(jStat2.fn, {
          normalci: function normalci(value, alpha) {
            return jStat2.normalci(value, alpha, this.toArray());
          },
          tci: function tci(value, alpha) {
            return jStat2.tci(value, alpha, this.toArray());
          }
        });
        function differenceOfProportions(p1, n1, p22, n22) {
          if (p1 > 1 || p22 > 1 || p1 <= 0 || p22 <= 0) {
            throw new Error("Proportions should be greater than 0 and less than 1");
          }
          var pooled = (p1 * n1 + p22 * n22) / (n1 + n22);
          var se = Math2.sqrt(pooled * (1 - pooled) * (1 / n1 + 1 / n22));
          return (p1 - p22) / se;
        }
        jStat2.extend(jStat2.fn, {
          oneSidedDifferenceOfProportions: function oneSidedDifferenceOfProportions(p1, n1, p22, n22) {
            var z2 = differenceOfProportions(p1, n1, p22, n22);
            return jStat2.ztest(z2, 1);
          },
          twoSidedDifferenceOfProportions: function twoSidedDifferenceOfProportions(p1, n1, p22, n22) {
            var z2 = differenceOfProportions(p1, n1, p22, n22);
            return jStat2.ztest(z2, 2);
          }
        });
      })(jStat, Math);
      jStat.models = function() {
        function sub_regress(exog) {
          var var_count = exog[0].length;
          var modelList = jStat.arange(var_count).map(function(endog_index) {
            var exog_index = jStat.arange(var_count).filter(function(i3) {
              return i3 !== endog_index;
            });
            return ols(
              jStat.col(exog, endog_index).map(function(x2) {
                return x2[0];
              }),
              jStat.col(exog, exog_index)
            );
          });
          return modelList;
        }
        function ols(endog, exog) {
          var nobs = endog.length;
          var df_model = exog[0].length - 1;
          var df_resid = nobs - df_model - 1;
          var coef = jStat.lstsq(exog, endog);
          var predict = jStat.multiply(exog, coef.map(function(x2) {
            return [x2];
          })).map(function(p3) {
            return p3[0];
          });
          var resid = jStat.subtract(endog, predict);
          var ybar = jStat.mean(endog);
          var SSE = jStat.sum(predict.map(function(f3) {
            return Math.pow(f3 - ybar, 2);
          }));
          var SSR = jStat.sum(endog.map(function(y2, i3) {
            return Math.pow(y2 - predict[i3], 2);
          }));
          var SST = SSE + SSR;
          var R2 = SSE / SST;
          return {
            exog,
            endog,
            nobs,
            df_model,
            df_resid,
            coef,
            predict,
            resid,
            ybar,
            SST,
            SSE,
            SSR,
            R2
          };
        }
        function t_test(model) {
          var subModelList = sub_regress(model.exog);
          var sigmaHat = Math.sqrt(model.SSR / model.df_resid);
          var seBetaHat = subModelList.map(function(mod) {
            var SST = mod.SST;
            var R2 = mod.R2;
            return sigmaHat / Math.sqrt(SST * (1 - R2));
          });
          var tStatistic = model.coef.map(function(coef, i3) {
            return (coef - 0) / seBetaHat[i3];
          });
          var pValue = tStatistic.map(function(t3) {
            var leftppf = jStat.studentt.cdf(t3, model.df_resid);
            return (leftppf > 0.5 ? 1 - leftppf : leftppf) * 2;
          });
          var c3 = jStat.studentt.inv(0.975, model.df_resid);
          var interval95 = model.coef.map(function(coef, i3) {
            var d3 = c3 * seBetaHat[i3];
            return [coef - d3, coef + d3];
          });
          return {
            se: seBetaHat,
            t: tStatistic,
            p: pValue,
            sigmaHat,
            interval95
          };
        }
        function F_test(model) {
          var F_statistic = model.R2 / model.df_model / ((1 - model.R2) / model.df_resid);
          var fcdf = function(x2, n1, n22) {
            return jStat.beta.cdf(x2 / (n22 / n1 + x2), n1 / 2, n22 / 2);
          };
          var pvalue = 1 - fcdf(F_statistic, model.df_model, model.df_resid);
          return { F_statistic, pvalue };
        }
        function ols_wrap(endog, exog) {
          var model = ols(endog, exog);
          var ttest = t_test(model);
          var ftest = F_test(model);
          var adjust_R2 = 1 - (1 - model.R2) * ((model.nobs - 1) / model.df_resid);
          model.t = ttest;
          model.f = ftest;
          model.adjust_R2 = adjust_R2;
          return model;
        }
        return { ols: ols_wrap };
      }();
      jStat.extend({
        buildxmatrix: function buildxmatrix() {
          var matrixRows = new Array(arguments.length);
          for (var i3 = 0; i3 < arguments.length; i3++) {
            var array = [1];
            matrixRows[i3] = array.concat(arguments[i3]);
          }
          return jStat(matrixRows);
        },
        builddxmatrix: function builddxmatrix() {
          var matrixRows = new Array(arguments[0].length);
          for (var i3 = 0; i3 < arguments[0].length; i3++) {
            var array = [1];
            matrixRows[i3] = array.concat(arguments[0][i3]);
          }
          return jStat(matrixRows);
        },
        buildjxmatrix: function buildjxmatrix(jMat) {
          var pass = new Array(jMat.length);
          for (var i3 = 0; i3 < jMat.length; i3++) {
            pass[i3] = jMat[i3];
          }
          return jStat.builddxmatrix(pass);
        },
        buildymatrix: function buildymatrix(array) {
          return jStat(array).transpose();
        },
        buildjymatrix: function buildjymatrix(jMat) {
          return jMat.transpose();
        },
        matrixmult: function matrixmult(A2, B2) {
          var i3, j2, k2, result, sum;
          if (A2.cols() == B2.rows()) {
            if (B2.rows() > 1) {
              result = [];
              for (i3 = 0; i3 < A2.rows(); i3++) {
                result[i3] = [];
                for (j2 = 0; j2 < B2.cols(); j2++) {
                  sum = 0;
                  for (k2 = 0; k2 < A2.cols(); k2++) {
                    sum += A2.toArray()[i3][k2] * B2.toArray()[k2][j2];
                  }
                  result[i3][j2] = sum;
                }
              }
              return jStat(result);
            }
            result = [];
            for (i3 = 0; i3 < A2.rows(); i3++) {
              result[i3] = [];
              for (j2 = 0; j2 < B2.cols(); j2++) {
                sum = 0;
                for (k2 = 0; k2 < A2.cols(); k2++) {
                  sum += A2.toArray()[i3][k2] * B2.toArray()[j2];
                }
                result[i3][j2] = sum;
              }
            }
            return jStat(result);
          }
        },
        //regress and regresst to be fixed
        regress: function regress(jMatX, jMatY) {
          var innerinv = jStat.xtranspxinv(jMatX);
          var xtransp = jMatX.transpose();
          var next = jStat.matrixmult(jStat(innerinv), xtransp);
          return jStat.matrixmult(next, jMatY);
        },
        regresst: function regresst(jMatX, jMatY, sides) {
          var beta = jStat.regress(jMatX, jMatY);
          var compile = {};
          compile.anova = {};
          var jMatYBar = jStat.jMatYBar(jMatX, beta);
          compile.yBar = jMatYBar;
          var yAverage = jMatY.mean();
          compile.anova.residuals = jStat.residuals(jMatY, jMatYBar);
          compile.anova.ssr = jStat.ssr(jMatYBar, yAverage);
          compile.anova.msr = compile.anova.ssr / (jMatX[0].length - 1);
          compile.anova.sse = jStat.sse(jMatY, jMatYBar);
          compile.anova.mse = compile.anova.sse / (jMatY.length - (jMatX[0].length - 1) - 1);
          compile.anova.sst = jStat.sst(jMatY, yAverage);
          compile.anova.mst = compile.anova.sst / (jMatY.length - 1);
          compile.anova.r2 = 1 - compile.anova.sse / compile.anova.sst;
          if (compile.anova.r2 < 0)
            compile.anova.r2 = 0;
          compile.anova.fratio = compile.anova.msr / compile.anova.mse;
          compile.anova.pvalue = jStat.anovaftest(
            compile.anova.fratio,
            jMatX[0].length - 1,
            jMatY.length - (jMatX[0].length - 1) - 1
          );
          compile.anova.rmse = Math.sqrt(compile.anova.mse);
          compile.anova.r2adj = 1 - compile.anova.mse / compile.anova.mst;
          if (compile.anova.r2adj < 0)
            compile.anova.r2adj = 0;
          compile.stats = new Array(jMatX[0].length);
          var covar = jStat.xtranspxinv(jMatX);
          var sds, ts, ps;
          for (var i3 = 0; i3 < beta.length; i3++) {
            sds = Math.sqrt(compile.anova.mse * Math.abs(covar[i3][i3]));
            ts = Math.abs(beta[i3] / sds);
            ps = jStat.ttest(ts, jMatY.length - jMatX[0].length - 1, sides);
            compile.stats[i3] = [beta[i3], sds, ts, ps];
          }
          compile.regress = beta;
          return compile;
        },
        xtranspx: function xtranspx(jMatX) {
          return jStat.matrixmult(jMatX.transpose(), jMatX);
        },
        xtranspxinv: function xtranspxinv(jMatX) {
          var inner = jStat.matrixmult(jMatX.transpose(), jMatX);
          var innerinv = jStat.inv(inner);
          return innerinv;
        },
        jMatYBar: function jMatYBar(jMatX, beta) {
          var yBar = jStat.matrixmult(jMatX, beta);
          return new jStat(yBar);
        },
        residuals: function residuals(jMatY, jMatYBar) {
          return jStat.matrixsubtract(jMatY, jMatYBar);
        },
        ssr: function ssr(jMatYBar, yAverage) {
          var ssr2 = 0;
          for (var i3 = 0; i3 < jMatYBar.length; i3++) {
            ssr2 += Math.pow(jMatYBar[i3] - yAverage, 2);
          }
          return ssr2;
        },
        sse: function sse(jMatY, jMatYBar) {
          var sse2 = 0;
          for (var i3 = 0; i3 < jMatY.length; i3++) {
            sse2 += Math.pow(jMatY[i3] - jMatYBar[i3], 2);
          }
          return sse2;
        },
        sst: function sst(jMatY, yAverage) {
          var sst2 = 0;
          for (var i3 = 0; i3 < jMatY.length; i3++) {
            sst2 += Math.pow(jMatY[i3] - yAverage, 2);
          }
          return sst2;
        },
        matrixsubtract: function matrixsubtract(A2, B2) {
          var ans = new Array(A2.length);
          for (var i3 = 0; i3 < A2.length; i3++) {
            ans[i3] = new Array(A2[i3].length);
            for (var j2 = 0; j2 < A2[i3].length; j2++) {
              ans[i3][j2] = A2[i3][j2] - B2[i3][j2];
            }
          }
          return jStat(ans);
        }
      });
      jStat.jStat = jStat;
      return jStat;
    });
  }
});

// node_modules/@handsontable/formulajs/lib/utils/criteria-eval.js
var require_criteria_eval = __commonJS({
  "node_modules/@handsontable/formulajs/lib/utils/criteria-eval.js"(exports) {
    var defaultOperator = "=";
    var validSymbols = [">", ">=", "<", "<=", "=", "<>"];
    var TOKEN_TYPE_OPERATOR = "operator";
    var TOKEN_TYPE_LITERAL = "literal";
    var SUPPORTED_TOKENS = [TOKEN_TYPE_OPERATOR, TOKEN_TYPE_LITERAL];
    exports.TOKEN_TYPE_OPERATOR = TOKEN_TYPE_OPERATOR;
    exports.TOKEN_TYPE_LITERAL = TOKEN_TYPE_LITERAL;
    function createToken(value, type) {
      if (SUPPORTED_TOKENS.indexOf(type) === -1) {
        throw new Error("Unsupported token type: " + type);
      }
      return {
        value,
        type
      };
    }
    function castValueToCorrectType(value) {
      if (typeof value !== "string") {
        return value;
      }
      if (/^\d+(\.\d+)?$/.test(value)) {
        value = value.indexOf(".") === -1 ? parseInt(value, 10) : parseFloat(value);
      }
      return value;
    }
    function tokenizeExpression(expression) {
      var expressionLength = expression.length;
      var tokens = [];
      var cursorIndex = 0;
      var processedValue = "";
      var processedSymbol = "";
      while (cursorIndex < expressionLength) {
        var char = expression.charAt(cursorIndex);
        switch (char) {
          case ">":
          case "<":
          case "=":
            processedSymbol = processedSymbol + char;
            if (processedValue.length > 0) {
              tokens.push(processedValue);
              processedValue = "";
            }
            break;
          default:
            if (processedSymbol.length > 0) {
              tokens.push(processedSymbol);
              processedSymbol = "";
            }
            processedValue = processedValue + char;
            break;
        }
        cursorIndex++;
      }
      if (processedValue.length > 0) {
        tokens.push(processedValue);
      }
      if (processedSymbol.length > 0) {
        tokens.push(processedSymbol);
      }
      return tokens;
    }
    function analyzeTokens(tokens) {
      var literalValue = "";
      var analyzedTokens = [];
      for (var i3 = 0; i3 < tokens.length; i3++) {
        var token = tokens[i3];
        if (i3 === 0 && validSymbols.indexOf(token) >= 0) {
          analyzedTokens.push(createToken(token, TOKEN_TYPE_OPERATOR));
        } else {
          literalValue += token;
        }
      }
      if (literalValue.length > 0) {
        analyzedTokens.push(createToken(castValueToCorrectType(literalValue), TOKEN_TYPE_LITERAL));
      }
      if (analyzedTokens.length > 0 && analyzedTokens[0].type !== TOKEN_TYPE_OPERATOR) {
        analyzedTokens.unshift(createToken(defaultOperator, TOKEN_TYPE_OPERATOR));
      }
      return analyzedTokens;
    }
    function computeExpression(tokens) {
      var values = [];
      var operator;
      for (var i3 = 0; i3 < tokens.length; i3++) {
        var token = tokens[i3];
        switch (token.type) {
          case TOKEN_TYPE_OPERATOR:
            operator = token.value;
            break;
          case TOKEN_TYPE_LITERAL:
            values.push(token.value);
            break;
        }
      }
      return evaluate(values, operator);
    }
    function evaluate(values, operator) {
      var result = false;
      switch (operator) {
        case ">":
          result = values[0] > values[1];
          break;
        case ">=":
          result = values[0] >= values[1];
          break;
        case "<":
          result = values[0] < values[1];
          break;
        case "<=":
          result = values[0] <= values[1];
          break;
        case "=":
          result = values[0] == values[1];
          break;
        case "<>":
          result = values[0] != values[1];
          break;
      }
      return result;
    }
    exports.parse = function(expression) {
      return analyzeTokens(tokenizeExpression(expression));
    };
    exports.createToken = createToken;
    exports.compute = computeExpression;
  }
});

// node_modules/@handsontable/formulajs/lib/miscellaneous.js
var require_miscellaneous = __commonJS({
  "node_modules/@handsontable/formulajs/lib/miscellaneous.js"(exports) {
    var utils = require_common();
    var error2 = require_error();
    exports.UNIQUE = function() {
      var result = [];
      for (var i3 = 0; i3 < arguments.length; ++i3) {
        var hasElement = false;
        var element = arguments[i3];
        for (var j2 = 0; j2 < result.length; ++j2) {
          hasElement = result[j2] === element;
          if (hasElement) {
            break;
          }
        }
        if (!hasElement) {
          result.push(element);
        }
      }
      return result;
    };
    exports.FLATTEN = utils.flatten;
    exports.ARGS2ARRAY = function() {
      return Array.prototype.slice.call(arguments, 0);
    };
    exports.REFERENCE = function(context2, reference) {
      if (!arguments.length) {
        return error2.error;
      }
      try {
        var path = reference.split(".");
        var result = context2;
        for (var i3 = 0; i3 < path.length; ++i3) {
          var step = path[i3];
          if (step[step.length - 1] === "]") {
            var opening = step.indexOf("[");
            var index = step.substring(opening + 1, step.length - 1);
            result = result[step.substring(0, opening)][index];
          } else {
            result = result[step];
          }
        }
        return result;
      } catch (error3) {
      }
    };
    exports.JOIN = function(array, separator) {
      return array.join(separator);
    };
    exports.NUMBERS = function() {
      var possibleNumbers = utils.flatten(arguments);
      return possibleNumbers.filter(function(el) {
        return typeof el === "number";
      });
    };
  }
});

// node_modules/@handsontable/formulajs/lib/statistical.js
var require_statistical = __commonJS({
  "node_modules/@handsontable/formulajs/lib/statistical.js"(exports) {
    var mathTrig = require_math_trig();
    var text = require_text();
    var jStat = require_jstat();
    var utils = require_common();
    var evalExpression = require_criteria_eval();
    var error2 = require_error();
    var misc = require_miscellaneous();
    var SQRT2PI = 2.5066282746310002;
    exports.AVEDEV = function() {
      var range2 = utils.parseNumberArray(utils.flatten(arguments));
      if (range2 instanceof Error) {
        return range2;
      }
      return jStat.sum(jStat(range2).subtract(jStat.mean(range2)).abs()[0]) / range2.length;
    };
    exports.AVERAGE = function() {
      var range2 = utils.numbers(utils.flatten(arguments));
      var n3 = range2.length;
      var sum = 0;
      var count = 0;
      var result;
      for (var i3 = 0; i3 < n3; i3++) {
        sum += range2[i3];
        count += 1;
      }
      result = sum / count;
      if (isNaN(result)) {
        result = error2.num;
      }
      return result;
    };
    exports.AVERAGEA = function() {
      var range2 = utils.flatten(arguments);
      var n3 = range2.length;
      var sum = 0;
      var count = 0;
      var result;
      for (var i3 = 0; i3 < n3; i3++) {
        var el = range2[i3];
        if (typeof el === "number") {
          sum += el;
        }
        if (el === true) {
          sum++;
        }
        if (el !== null) {
          count++;
        }
      }
      result = sum / count;
      if (isNaN(result)) {
        result = error2.num;
      }
      return result;
    };
    exports.AVERAGEIF = function(range2, criteria, average_range) {
      if (arguments.length <= 1) {
        return error2.na;
      }
      average_range = average_range || range2;
      range2 = utils.flatten(range2);
      average_range = utils.parseNumberArray(utils.flatten(average_range));
      if (average_range instanceof Error) {
        return average_range;
      }
      var average_count = 0;
      var result = 0;
      var isWildcard = criteria === void 0 || criteria === "*";
      var tokenizedCriteria = isWildcard ? null : evalExpression.parse(criteria + "");
      for (var i3 = 0; i3 < range2.length; i3++) {
        var value = range2[i3];
        if (isWildcard) {
          result += average_range[i3];
          average_count++;
        } else {
          var tokens = [evalExpression.createToken(value, evalExpression.TOKEN_TYPE_LITERAL)].concat(tokenizedCriteria);
          if (evalExpression.compute(tokens)) {
            result += average_range[i3];
            average_count++;
          }
        }
      }
      return result / average_count;
    };
    exports.AVERAGEIFS = function() {
      var args = utils.argsToArray(arguments);
      var criteriaLength = (args.length - 1) / 2;
      var range2 = utils.flatten(args[0]);
      var count = 0;
      var result = 0;
      for (var i3 = 0; i3 < range2.length; i3++) {
        var isMeetCondition = false;
        for (var j2 = 0; j2 < criteriaLength; j2++) {
          var value = args[2 * j2 + 1][i3];
          var criteria = args[2 * j2 + 2];
          var isWildcard = criteria === void 0 || criteria === "*";
          var computedResult = false;
          if (isWildcard) {
            computedResult = true;
          } else {
            var tokenizedCriteria = evalExpression.parse(criteria + "");
            var tokens = [evalExpression.createToken(value, evalExpression.TOKEN_TYPE_LITERAL)].concat(tokenizedCriteria);
            computedResult = evalExpression.compute(tokens);
          }
          if (!computedResult) {
            isMeetCondition = false;
            break;
          }
          isMeetCondition = true;
        }
        if (isMeetCondition) {
          result += range2[i3];
          count++;
        }
      }
      var average = result / count;
      if (isNaN(average)) {
        return 0;
      } else {
        return average;
      }
    };
    exports.BETA = {};
    exports.BETA.DIST = function(x2, alpha, beta, cumulative, A2, B2) {
      if (arguments.length < 4) {
        return error2.value;
      }
      A2 = A2 === void 0 ? 0 : A2;
      B2 = B2 === void 0 ? 1 : B2;
      x2 = utils.parseNumber(x2);
      alpha = utils.parseNumber(alpha);
      beta = utils.parseNumber(beta);
      A2 = utils.parseNumber(A2);
      B2 = utils.parseNumber(B2);
      if (utils.anyIsError(x2, alpha, beta, A2, B2)) {
        return error2.value;
      }
      x2 = (x2 - A2) / (B2 - A2);
      return cumulative ? jStat.beta.cdf(x2, alpha, beta) : jStat.beta.pdf(x2, alpha, beta);
    };
    exports.BETA.INV = function(probability, alpha, beta, A2, B2) {
      A2 = A2 === void 0 ? 0 : A2;
      B2 = B2 === void 0 ? 1 : B2;
      probability = utils.parseNumber(probability);
      alpha = utils.parseNumber(alpha);
      beta = utils.parseNumber(beta);
      A2 = utils.parseNumber(A2);
      B2 = utils.parseNumber(B2);
      if (utils.anyIsError(probability, alpha, beta, A2, B2)) {
        return error2.value;
      }
      return jStat.beta.inv(probability, alpha, beta) * (B2 - A2) + A2;
    };
    exports.BINOM = {};
    exports.BINOM.DIST = function(successes, trials, probability, cumulative) {
      successes = utils.parseNumber(successes);
      trials = utils.parseNumber(trials);
      probability = utils.parseNumber(probability);
      cumulative = utils.parseNumber(cumulative);
      if (utils.anyIsError(successes, trials, probability, cumulative)) {
        return error2.value;
      }
      return cumulative ? jStat.binomial.cdf(successes, trials, probability) : jStat.binomial.pdf(successes, trials, probability);
    };
    exports.BINOM.DIST.RANGE = function(trials, probability, successes, successes2) {
      successes2 = successes2 === void 0 ? successes : successes2;
      trials = utils.parseNumber(trials);
      probability = utils.parseNumber(probability);
      successes = utils.parseNumber(successes);
      successes2 = utils.parseNumber(successes2);
      if (utils.anyIsError(trials, probability, successes, successes2)) {
        return error2.value;
      }
      var result = 0;
      for (var i3 = successes; i3 <= successes2; i3++) {
        result += mathTrig.COMBIN(trials, i3) * Math.pow(probability, i3) * Math.pow(1 - probability, trials - i3);
      }
      return result;
    };
    exports.BINOM.INV = function(trials, probability, alpha) {
      trials = utils.parseNumber(trials);
      probability = utils.parseNumber(probability);
      alpha = utils.parseNumber(alpha);
      if (utils.anyIsError(trials, probability, alpha)) {
        return error2.value;
      }
      var x2 = 0;
      while (x2 <= trials) {
        if (jStat.binomial.cdf(x2, trials, probability) >= alpha) {
          return x2;
        }
        x2++;
      }
    };
    exports.CHISQ = {};
    exports.CHISQ.DIST = function(x2, k2, cumulative) {
      x2 = utils.parseNumber(x2);
      k2 = utils.parseNumber(k2);
      if (utils.anyIsError(x2, k2)) {
        return error2.value;
      }
      return cumulative ? jStat.chisquare.cdf(x2, k2) : jStat.chisquare.pdf(x2, k2);
    };
    exports.CHISQ.DIST.RT = function(x2, k2) {
      if (!x2 | !k2) {
        return error2.na;
      }
      if (x2 < 1 || k2 > Math.pow(10, 10)) {
        return error2.num;
      }
      if (typeof x2 !== "number" || typeof k2 !== "number") {
        return error2.value;
      }
      return 1 - jStat.chisquare.cdf(x2, k2);
    };
    exports.CHISQ.INV = function(probability, k2) {
      probability = utils.parseNumber(probability);
      k2 = utils.parseNumber(k2);
      if (utils.anyIsError(probability, k2)) {
        return error2.value;
      }
      return jStat.chisquare.inv(probability, k2);
    };
    exports.CHISQ.INV.RT = function(p3, k2) {
      if (!p3 | !k2) {
        return error2.na;
      }
      if (p3 < 0 || p3 > 1 || k2 < 1 || k2 > Math.pow(10, 10)) {
        return error2.num;
      }
      if (typeof p3 !== "number" || typeof k2 !== "number") {
        return error2.value;
      }
      return jStat.chisquare.inv(1 - p3, k2);
    };
    exports.CHISQ.TEST = function(observed, expected) {
      if (arguments.length !== 2) {
        return error2.na;
      }
      if (!(observed instanceof Array) || !(expected instanceof Array)) {
        return error2.value;
      }
      if (observed.length !== expected.length) {
        return error2.value;
      }
      if (observed[0] && expected[0] && observed[0].length !== expected[0].length) {
        return error2.value;
      }
      var row = observed.length;
      var tmp, i3, j2;
      for (i3 = 0; i3 < row; i3++) {
        if (!(observed[i3] instanceof Array)) {
          tmp = observed[i3];
          observed[i3] = [];
          observed[i3].push(tmp);
        }
        if (!(expected[i3] instanceof Array)) {
          tmp = expected[i3];
          expected[i3] = [];
          expected[i3].push(tmp);
        }
      }
      var col = observed[0].length;
      var dof = col === 1 ? row - 1 : (row - 1) * (col - 1);
      var xsqr = 0;
      var Pi = Math.PI;
      for (i3 = 0; i3 < row; i3++) {
        for (j2 = 0; j2 < col; j2++) {
          xsqr += Math.pow(observed[i3][j2] - expected[i3][j2], 2) / expected[i3][j2];
        }
      }
      function ChiSq(xsqr2, dof2) {
        var p3 = Math.exp(-0.5 * xsqr2);
        if (dof2 % 2 === 1) {
          p3 = p3 * Math.sqrt(2 * xsqr2 / Pi);
        }
        var k2 = dof2;
        while (k2 >= 2) {
          p3 = p3 * xsqr2 / k2;
          k2 = k2 - 2;
        }
        var t3 = p3;
        var a3 = dof2;
        while (t3 > 1e-10 * p3) {
          a3 = a3 + 2;
          t3 = t3 * xsqr2 / a3;
          p3 = p3 + t3;
        }
        return 1 - p3;
      }
      return Math.round(ChiSq(xsqr, dof) * 1e6) / 1e6;
    };
    exports.COLUMN = function(matrix, index) {
      if (arguments.length !== 2) {
        return error2.na;
      }
      if (index < 0) {
        return error2.num;
      }
      if (!(matrix instanceof Array) || typeof index !== "number") {
        return error2.value;
      }
      if (matrix.length === 0) {
        return void 0;
      }
      return jStat.col(matrix, index);
    };
    exports.COLUMNS = function(matrix) {
      if (arguments.length !== 1) {
        return error2.na;
      }
      if (!(matrix instanceof Array)) {
        return error2.value;
      }
      if (matrix.length === 0) {
        return 0;
      }
      return jStat.cols(matrix);
    };
    exports.CONFIDENCE = {};
    exports.CONFIDENCE.NORM = function(alpha, sd, n3) {
      alpha = utils.parseNumber(alpha);
      sd = utils.parseNumber(sd);
      n3 = utils.parseNumber(n3);
      if (utils.anyIsError(alpha, sd, n3)) {
        return error2.value;
      }
      return jStat.normalci(1, alpha, sd, n3)[1] - 1;
    };
    exports.CONFIDENCE.T = function(alpha, sd, n3) {
      alpha = utils.parseNumber(alpha);
      sd = utils.parseNumber(sd);
      n3 = utils.parseNumber(n3);
      if (utils.anyIsError(alpha, sd, n3)) {
        return error2.value;
      }
      return jStat.tci(1, alpha, sd, n3)[1] - 1;
    };
    exports.CORREL = function(array1, array2) {
      array1 = utils.parseNumberArray(utils.flatten(array1));
      array2 = utils.parseNumberArray(utils.flatten(array2));
      if (utils.anyIsError(array1, array2)) {
        return error2.value;
      }
      return jStat.corrcoeff(array1, array2);
    };
    exports.COUNT = function() {
      return utils.numbers(utils.flatten(arguments)).length;
    };
    exports.COUNTA = function() {
      var range2 = utils.flatten(arguments);
      return range2.length - exports.COUNTBLANK(range2);
    };
    exports.COUNTIN = function(range2, value) {
      var result = 0;
      range2 = utils.flatten(range2);
      for (var i3 = 0; i3 < range2.length; i3++) {
        if (range2[i3] === value) {
          result++;
        }
      }
      return result;
    };
    exports.COUNTBLANK = function() {
      var range2 = utils.flatten(arguments);
      var blanks = 0;
      var element;
      for (var i3 = 0; i3 < range2.length; i3++) {
        element = range2[i3];
        if (element === null || element === "") {
          blanks++;
        }
      }
      return blanks;
    };
    exports.COUNTIF = function(range2, criteria) {
      range2 = utils.flatten(range2);
      var isWildcard = criteria === void 0 || criteria === "*";
      if (isWildcard) {
        return range2.length;
      }
      var matches = 0;
      var tokenizedCriteria = evalExpression.parse(criteria + "");
      for (var i3 = 0; i3 < range2.length; i3++) {
        var value = range2[i3];
        var tokens = [evalExpression.createToken(value, evalExpression.TOKEN_TYPE_LITERAL)].concat(tokenizedCriteria);
        if (evalExpression.compute(tokens)) {
          matches++;
        }
      }
      return matches;
    };
    exports.COUNTIFS = function() {
      var args = utils.argsToArray(arguments);
      var results = new Array(utils.flatten(args[0]).length);
      for (var i3 = 0; i3 < results.length; i3++) {
        results[i3] = true;
      }
      for (i3 = 0; i3 < args.length; i3 += 2) {
        var range2 = utils.flatten(args[i3]);
        var criteria = args[i3 + 1];
        var isWildcard = criteria === void 0 || criteria === "*";
        if (!isWildcard) {
          var tokenizedCriteria = evalExpression.parse(criteria + "");
          for (var j2 = 0; j2 < range2.length; j2++) {
            var value = range2[j2];
            var tokens = [evalExpression.createToken(value, evalExpression.TOKEN_TYPE_LITERAL)].concat(tokenizedCriteria);
            results[j2] = results[j2] && evalExpression.compute(tokens);
          }
        }
      }
      var result = 0;
      for (i3 = 0; i3 < results.length; i3++) {
        if (results[i3]) {
          result++;
        }
      }
      return result;
    };
    exports.COUNTUNIQUE = function() {
      return misc.UNIQUE.apply(null, utils.flatten(arguments)).length;
    };
    exports.COVARIANCE = {};
    exports.COVARIANCE.P = function(array1, array2) {
      array1 = utils.parseNumberArray(utils.flatten(array1));
      array2 = utils.parseNumberArray(utils.flatten(array2));
      if (utils.anyIsError(array1, array2)) {
        return error2.value;
      }
      var mean1 = jStat.mean(array1);
      var mean2 = jStat.mean(array2);
      var result = 0;
      var n3 = array1.length;
      for (var i3 = 0; i3 < n3; i3++) {
        result += (array1[i3] - mean1) * (array2[i3] - mean2);
      }
      return result / n3;
    };
    exports.COVARIANCE.S = function(array1, array2) {
      array1 = utils.parseNumberArray(utils.flatten(array1));
      array2 = utils.parseNumberArray(utils.flatten(array2));
      if (utils.anyIsError(array1, array2)) {
        return error2.value;
      }
      return jStat.covariance(array1, array2);
    };
    exports.DEVSQ = function() {
      var range2 = utils.parseNumberArray(utils.flatten(arguments));
      if (range2 instanceof Error) {
        return range2;
      }
      var mean = jStat.mean(range2);
      var result = 0;
      for (var i3 = 0; i3 < range2.length; i3++) {
        result += Math.pow(range2[i3] - mean, 2);
      }
      return result;
    };
    exports.EXPON = {};
    exports.EXPON.DIST = function(x2, lambda, cumulative) {
      x2 = utils.parseNumber(x2);
      lambda = utils.parseNumber(lambda);
      if (utils.anyIsError(x2, lambda)) {
        return error2.value;
      }
      return cumulative ? jStat.exponential.cdf(x2, lambda) : jStat.exponential.pdf(x2, lambda);
    };
    exports.F = {};
    exports.F.DIST = function(x2, d1, d22, cumulative) {
      x2 = utils.parseNumber(x2);
      d1 = utils.parseNumber(d1);
      d22 = utils.parseNumber(d22);
      if (utils.anyIsError(x2, d1, d22)) {
        return error2.value;
      }
      return cumulative ? jStat.centralF.cdf(x2, d1, d22) : jStat.centralF.pdf(x2, d1, d22);
    };
    exports.F.DIST.RT = function(x2, d1, d22) {
      if (arguments.length !== 3) {
        return error2.na;
      }
      if (x2 < 0 || d1 < 1 || d22 < 1) {
        return error2.num;
      }
      if (typeof x2 !== "number" || typeof d1 !== "number" || typeof d22 !== "number") {
        return error2.value;
      }
      return 1 - jStat.centralF.cdf(x2, d1, d22);
    };
    exports.F.INV = function(probability, d1, d22) {
      probability = utils.parseNumber(probability);
      d1 = utils.parseNumber(d1);
      d22 = utils.parseNumber(d22);
      if (utils.anyIsError(probability, d1, d22)) {
        return error2.value;
      }
      if (probability <= 0 || probability > 1) {
        return error2.num;
      }
      return jStat.centralF.inv(probability, d1, d22);
    };
    exports.F.INV.RT = function(p3, d1, d22) {
      if (arguments.length !== 3) {
        return error2.na;
      }
      if (p3 < 0 || p3 > 1 || d1 < 1 || d1 > Math.pow(10, 10) || d22 < 1 || d22 > Math.pow(10, 10)) {
        return error2.num;
      }
      if (typeof p3 !== "number" || typeof d1 !== "number" || typeof d22 !== "number") {
        return error2.value;
      }
      return jStat.centralF.inv(1 - p3, d1, d22);
    };
    exports.F.TEST = function(array1, array2) {
      if (!array1 || !array2) {
        return error2.na;
      }
      if (!(array1 instanceof Array) || !(array2 instanceof Array)) {
        return error2.na;
      }
      if (array1.length < 2 || array2.length < 2) {
        return error2.div0;
      }
      var sumOfSquares = function(values, x12) {
        var sum = 0;
        for (var i3 = 0; i3 < values.length; i3++) {
          sum += Math.pow(values[i3] - x12, 2);
        }
        return sum;
      };
      var x1 = mathTrig.SUM(array1) / array1.length;
      var x2 = mathTrig.SUM(array2) / array2.length;
      var sum1 = sumOfSquares(array1, x1) / (array1.length - 1);
      var sum2 = sumOfSquares(array2, x2) / (array2.length - 1);
      return sum1 / sum2;
    };
    exports.FISHER = function(x2) {
      x2 = utils.parseNumber(x2);
      if (x2 instanceof Error) {
        return x2;
      }
      return Math.log((1 + x2) / (1 - x2)) / 2;
    };
    exports.FISHERINV = function(y2) {
      y2 = utils.parseNumber(y2);
      if (y2 instanceof Error) {
        return y2;
      }
      var e2y = Math.exp(2 * y2);
      return (e2y - 1) / (e2y + 1);
    };
    exports.FORECAST = function(x2, data_y, data_x) {
      x2 = utils.parseNumber(x2);
      data_y = utils.parseNumberArray(utils.flatten(data_y));
      data_x = utils.parseNumberArray(utils.flatten(data_x));
      if (utils.anyIsError(x2, data_y, data_x)) {
        return error2.value;
      }
      var xmean = jStat.mean(data_x);
      var ymean = jStat.mean(data_y);
      var n3 = data_x.length;
      var num = 0;
      var den = 0;
      for (var i3 = 0; i3 < n3; i3++) {
        num += (data_x[i3] - xmean) * (data_y[i3] - ymean);
        den += Math.pow(data_x[i3] - xmean, 2);
      }
      var b2 = num / den;
      var a3 = ymean - b2 * xmean;
      return a3 + b2 * x2;
    };
    exports.FREQUENCY = function(data, bins) {
      data = utils.parseNumberArray(utils.flatten(data));
      bins = utils.parseNumberArray(utils.flatten(bins));
      if (utils.anyIsError(data, bins)) {
        return error2.value;
      }
      var n3 = data.length;
      var b2 = bins.length;
      var r3 = [];
      for (var i3 = 0; i3 <= b2; i3++) {
        r3[i3] = 0;
        for (var j2 = 0; j2 < n3; j2++) {
          if (i3 === 0) {
            if (data[j2] <= bins[0]) {
              r3[0] += 1;
            }
          } else if (i3 < b2) {
            if (data[j2] > bins[i3 - 1] && data[j2] <= bins[i3]) {
              r3[i3] += 1;
            }
          } else if (i3 === b2) {
            if (data[j2] > bins[b2 - 1]) {
              r3[b2] += 1;
            }
          }
        }
      }
      return r3;
    };
    exports.GAMMA = function(number) {
      number = utils.parseNumber(number);
      if (number instanceof Error) {
        return number;
      }
      if (number === 0) {
        return error2.num;
      }
      if (parseInt(number, 10) === number && number < 0) {
        return error2.num;
      }
      return jStat.gammafn(number);
    };
    exports.GAMMA.DIST = function(value, alpha, beta, cumulative) {
      if (arguments.length !== 4) {
        return error2.na;
      }
      if (value < 0 || alpha <= 0 || beta <= 0) {
        return error2.value;
      }
      if (typeof value !== "number" || typeof alpha !== "number" || typeof beta !== "number") {
        return error2.value;
      }
      return cumulative ? jStat.gamma.cdf(value, alpha, beta, true) : jStat.gamma.pdf(value, alpha, beta, false);
    };
    exports.GAMMA.INV = function(probability, alpha, beta) {
      if (arguments.length !== 3) {
        return error2.na;
      }
      if (probability < 0 || probability > 1 || alpha <= 0 || beta <= 0) {
        return error2.num;
      }
      if (typeof probability !== "number" || typeof alpha !== "number" || typeof beta !== "number") {
        return error2.value;
      }
      return jStat.gamma.inv(probability, alpha, beta);
    };
    exports.GAMMALN = function(number) {
      number = utils.parseNumber(number);
      if (number instanceof Error) {
        return number;
      }
      return jStat.gammaln(number);
    };
    exports.GAMMALN.PRECISE = function(x2) {
      if (arguments.length !== 1) {
        return error2.na;
      }
      if (x2 <= 0) {
        return error2.num;
      }
      if (typeof x2 !== "number") {
        return error2.value;
      }
      return jStat.gammaln(x2);
    };
    exports.GAUSS = function(z2) {
      z2 = utils.parseNumber(z2);
      if (z2 instanceof Error) {
        return z2;
      }
      return jStat.normal.cdf(z2, 0, 1) - 0.5;
    };
    exports.GEOMEAN = function() {
      var args = utils.parseNumberArray(utils.flatten(arguments));
      if (args instanceof Error) {
        return args;
      }
      return jStat.geomean(args);
    };
    exports.GROWTH = function(known_y, known_x, new_x, use_const) {
      known_y = utils.parseNumberArray(known_y);
      if (known_y instanceof Error) {
        return known_y;
      }
      var i3;
      if (known_x === void 0) {
        known_x = [];
        for (i3 = 1; i3 <= known_y.length; i3++) {
          known_x.push(i3);
        }
      }
      if (new_x === void 0) {
        new_x = [];
        for (i3 = 1; i3 <= known_y.length; i3++) {
          new_x.push(i3);
        }
      }
      known_x = utils.parseNumberArray(known_x);
      new_x = utils.parseNumberArray(new_x);
      if (utils.anyIsError(known_x, new_x)) {
        return error2.value;
      }
      if (use_const === void 0) {
        use_const = true;
      }
      var n3 = known_y.length;
      var avg_x = 0;
      var avg_y = 0;
      var avg_xy = 0;
      var avg_xx = 0;
      for (i3 = 0; i3 < n3; i3++) {
        var x2 = known_x[i3];
        var y2 = Math.log(known_y[i3]);
        avg_x += x2;
        avg_y += y2;
        avg_xy += x2 * y2;
        avg_xx += x2 * x2;
      }
      avg_x /= n3;
      avg_y /= n3;
      avg_xy /= n3;
      avg_xx /= n3;
      var beta;
      var alpha;
      if (use_const) {
        beta = (avg_xy - avg_x * avg_y) / (avg_xx - avg_x * avg_x);
        alpha = avg_y - beta * avg_x;
      } else {
        beta = avg_xy / avg_xx;
        alpha = 0;
      }
      var new_y = [];
      for (i3 = 0; i3 < new_x.length; i3++) {
        new_y.push(Math.exp(alpha + beta * new_x[i3]));
      }
      return new_y;
    };
    exports.HARMEAN = function() {
      var range2 = utils.parseNumberArray(utils.flatten(arguments));
      if (range2 instanceof Error) {
        return range2;
      }
      var n3 = range2.length;
      var den = 0;
      for (var i3 = 0; i3 < n3; i3++) {
        den += 1 / range2[i3];
      }
      return n3 / den;
    };
    exports.HYPGEOM = {};
    exports.HYPGEOM.DIST = function(x2, n3, M2, N2, cumulative) {
      x2 = utils.parseNumber(x2);
      n3 = utils.parseNumber(n3);
      M2 = utils.parseNumber(M2);
      N2 = utils.parseNumber(N2);
      if (utils.anyIsError(x2, n3, M2, N2)) {
        return error2.value;
      }
      function pdf(x3, n4, M3, N3) {
        return mathTrig.COMBIN(M3, x3) * mathTrig.COMBIN(N3 - M3, n4 - x3) / mathTrig.COMBIN(N3, n4);
      }
      function cdf(x3, n4, M3, N3) {
        var result = 0;
        for (var i3 = 0; i3 <= x3; i3++) {
          result += pdf(i3, n4, M3, N3);
        }
        return result;
      }
      return cumulative ? cdf(x2, n3, M2, N2) : pdf(x2, n3, M2, N2);
    };
    exports.INTERCEPT = function(known_y, known_x) {
      known_y = utils.parseNumberArray(known_y);
      known_x = utils.parseNumberArray(known_x);
      if (utils.anyIsError(known_y, known_x)) {
        return error2.value;
      }
      if (known_y.length !== known_x.length) {
        return error2.na;
      }
      return exports.FORECAST(0, known_y, known_x);
    };
    exports.KURT = function() {
      var range2 = utils.parseNumberArray(utils.flatten(arguments));
      if (range2 instanceof Error) {
        return range2;
      }
      var mean = jStat.mean(range2);
      var n3 = range2.length;
      var sigma = 0;
      for (var i3 = 0; i3 < n3; i3++) {
        sigma += Math.pow(range2[i3] - mean, 4);
      }
      sigma = sigma / Math.pow(jStat.stdev(range2, true), 4);
      return n3 * (n3 + 1) / ((n3 - 1) * (n3 - 2) * (n3 - 3)) * sigma - 3 * (n3 - 1) * (n3 - 1) / ((n3 - 2) * (n3 - 3));
    };
    exports.LARGE = function(range2, k2) {
      range2 = utils.parseNumberArray(utils.flatten(range2));
      k2 = utils.parseNumber(k2);
      if (utils.anyIsError(range2, k2)) {
        return range2;
      }
      return range2.sort(function(a3, b2) {
        return b2 - a3;
      })[k2 - 1];
    };
    exports.LINEST = function(data_y, data_x) {
      data_y = utils.parseNumberArray(utils.flatten(data_y));
      data_x = utils.parseNumberArray(utils.flatten(data_x));
      if (utils.anyIsError(data_y, data_x)) {
        return error2.value;
      }
      var ymean = jStat.mean(data_y);
      var xmean = jStat.mean(data_x);
      var n3 = data_x.length;
      var num = 0;
      var den = 0;
      for (var i3 = 0; i3 < n3; i3++) {
        num += (data_x[i3] - xmean) * (data_y[i3] - ymean);
        den += Math.pow(data_x[i3] - xmean, 2);
      }
      var m2 = num / den;
      var b2 = ymean - m2 * xmean;
      return [m2, b2];
    };
    exports.LOGEST = function(data_y, data_x) {
      data_y = utils.parseNumberArray(utils.flatten(data_y));
      data_x = utils.parseNumberArray(utils.flatten(data_x));
      if (utils.anyIsError(data_y, data_x)) {
        return error2.value;
      }
      for (var i3 = 0; i3 < data_y.length; i3++) {
        data_y[i3] = Math.log(data_y[i3]);
      }
      var result = exports.LINEST(data_y, data_x);
      result[0] = Math.round(Math.exp(result[0]) * 1e6) / 1e6;
      result[1] = Math.round(Math.exp(result[1]) * 1e6) / 1e6;
      return result;
    };
    exports.LOGNORM = {};
    exports.LOGNORM.DIST = function(x2, mean, sd, cumulative) {
      x2 = utils.parseNumber(x2);
      mean = utils.parseNumber(mean);
      sd = utils.parseNumber(sd);
      if (utils.anyIsError(x2, mean, sd)) {
        return error2.value;
      }
      return cumulative ? jStat.lognormal.cdf(x2, mean, sd) : jStat.lognormal.pdf(x2, mean, sd);
    };
    exports.LOGNORM.INV = function(probability, mean, sd) {
      probability = utils.parseNumber(probability);
      mean = utils.parseNumber(mean);
      sd = utils.parseNumber(sd);
      if (utils.anyIsError(probability, mean, sd)) {
        return error2.value;
      }
      return jStat.lognormal.inv(probability, mean, sd);
    };
    exports.MAX = function() {
      var range2 = utils.numbers(utils.flatten(arguments));
      return range2.length === 0 ? 0 : Math.max.apply(Math, range2);
    };
    exports.MAXA = function() {
      var range2 = utils.arrayValuesToNumbers(utils.flatten(arguments));
      return range2.length === 0 ? 0 : Math.max.apply(Math, range2);
    };
    exports.MEDIAN = function() {
      var range2 = utils.arrayValuesToNumbers(utils.flatten(arguments));
      var result = jStat.median(range2);
      if (isNaN(result)) {
        result = error2.num;
      }
      return result;
    };
    exports.MIN = function() {
      var range2 = utils.numbers(utils.flatten(arguments));
      return range2.length === 0 ? 0 : Math.min.apply(Math, range2);
    };
    exports.MINA = function() {
      var range2 = utils.arrayValuesToNumbers(utils.flatten(arguments));
      return range2.length === 0 ? 0 : Math.min.apply(Math, range2);
    };
    exports.MODE = {};
    exports.MODE.MULT = function() {
      var range2 = utils.parseNumberArray(utils.flatten(arguments));
      if (range2 instanceof Error) {
        return range2;
      }
      var n3 = range2.length;
      var count = {};
      var maxItems = [];
      var max2 = 0;
      var currentItem;
      for (var i3 = 0; i3 < n3; i3++) {
        currentItem = range2[i3];
        count[currentItem] = count[currentItem] ? count[currentItem] + 1 : 1;
        if (count[currentItem] > max2) {
          max2 = count[currentItem];
          maxItems = [];
        }
        if (count[currentItem] === max2) {
          maxItems[maxItems.length] = currentItem;
        }
      }
      return maxItems;
    };
    exports.MODE.SNGL = function() {
      var range2 = utils.parseNumberArray(utils.flatten(arguments));
      if (range2 instanceof Error) {
        return range2;
      }
      return exports.MODE.MULT(range2).sort(function(a3, b2) {
        return a3 - b2;
      })[0];
    };
    exports.NEGBINOM = {};
    exports.NEGBINOM.DIST = function(k2, r3, p3, cumulative) {
      k2 = utils.parseNumber(k2);
      r3 = utils.parseNumber(r3);
      p3 = utils.parseNumber(p3);
      if (utils.anyIsError(k2, r3, p3)) {
        return error2.value;
      }
      return cumulative ? jStat.negbin.cdf(k2, r3, p3) : jStat.negbin.pdf(k2, r3, p3);
    };
    exports.NORM = {};
    exports.NORM.DIST = function(x2, mean, sd, cumulative) {
      x2 = utils.parseNumber(x2);
      mean = utils.parseNumber(mean);
      sd = utils.parseNumber(sd);
      if (utils.anyIsError(x2, mean, sd)) {
        return error2.value;
      }
      if (sd <= 0) {
        return error2.num;
      }
      return cumulative ? jStat.normal.cdf(x2, mean, sd) : jStat.normal.pdf(x2, mean, sd);
    };
    exports.NORM.INV = function(probability, mean, sd) {
      probability = utils.parseNumber(probability);
      mean = utils.parseNumber(mean);
      sd = utils.parseNumber(sd);
      if (utils.anyIsError(probability, mean, sd)) {
        return error2.value;
      }
      return jStat.normal.inv(probability, mean, sd);
    };
    exports.NORM.S = {};
    exports.NORM.S.DIST = function(z2, cumulative) {
      z2 = utils.parseNumber(z2);
      if (z2 instanceof Error) {
        return error2.value;
      }
      return cumulative ? jStat.normal.cdf(z2, 0, 1) : jStat.normal.pdf(z2, 0, 1);
    };
    exports.NORM.S.INV = function(probability) {
      probability = utils.parseNumber(probability);
      if (probability instanceof Error) {
        return error2.value;
      }
      return jStat.normal.inv(probability, 0, 1);
    };
    exports.PEARSON = function(data_x, data_y) {
      data_y = utils.parseNumberArray(utils.flatten(data_y));
      data_x = utils.parseNumberArray(utils.flatten(data_x));
      if (utils.anyIsError(data_y, data_x)) {
        return error2.value;
      }
      var xmean = jStat.mean(data_x);
      var ymean = jStat.mean(data_y);
      var n3 = data_x.length;
      var num = 0;
      var den1 = 0;
      var den2 = 0;
      for (var i3 = 0; i3 < n3; i3++) {
        num += (data_x[i3] - xmean) * (data_y[i3] - ymean);
        den1 += Math.pow(data_x[i3] - xmean, 2);
        den2 += Math.pow(data_y[i3] - ymean, 2);
      }
      return num / Math.sqrt(den1 * den2);
    };
    exports.PERCENTILE = {};
    exports.PERCENTILE.EXC = function(array, k2) {
      array = utils.parseNumberArray(utils.flatten(array));
      k2 = utils.parseNumber(k2);
      if (utils.anyIsError(array, k2)) {
        return error2.value;
      }
      array = array.sort(function(a3, b2) {
        {
          return a3 - b2;
        }
      });
      var n3 = array.length;
      if (k2 < 1 / (n3 + 1) || k2 > 1 - 1 / (n3 + 1)) {
        return error2.num;
      }
      var l3 = k2 * (n3 + 1) - 1;
      var fl = Math.floor(l3);
      return utils.cleanFloat(l3 === fl ? array[l3] : array[fl] + (l3 - fl) * (array[fl + 1] - array[fl]));
    };
    exports.PERCENTILE.INC = function(array, k2) {
      array = utils.parseNumberArray(utils.flatten(array));
      k2 = utils.parseNumber(k2);
      if (utils.anyIsError(array, k2)) {
        return error2.value;
      }
      array = array.sort(function(a3, b2) {
        return a3 - b2;
      });
      var n3 = array.length;
      var l3 = k2 * (n3 - 1);
      var fl = Math.floor(l3);
      return utils.cleanFloat(l3 === fl ? array[l3] : array[fl] + (l3 - fl) * (array[fl + 1] - array[fl]));
    };
    exports.PERCENTRANK = {};
    exports.PERCENTRANK.EXC = function(array, x2, significance) {
      significance = significance === void 0 ? 3 : significance;
      array = utils.parseNumberArray(utils.flatten(array));
      x2 = utils.parseNumber(x2);
      significance = utils.parseNumber(significance);
      if (utils.anyIsError(array, x2, significance)) {
        return error2.value;
      }
      array = array.sort(function(a3, b2) {
        return a3 - b2;
      });
      var uniques = misc.UNIQUE.apply(null, array);
      var n3 = array.length;
      var m2 = uniques.length;
      var power = Math.pow(10, significance);
      var result = 0;
      var match = false;
      var i3 = 0;
      while (!match && i3 < m2) {
        if (x2 === uniques[i3]) {
          result = (array.indexOf(uniques[i3]) + 1) / (n3 + 1);
          match = true;
        } else if (x2 >= uniques[i3] && (x2 < uniques[i3 + 1] || i3 === m2 - 1)) {
          result = (array.indexOf(uniques[i3]) + 1 + (x2 - uniques[i3]) / (uniques[i3 + 1] - uniques[i3])) / (n3 + 1);
          match = true;
        }
        i3++;
      }
      return Math.floor(result * power) / power;
    };
    exports.PERCENTRANK.INC = function(array, x2, significance) {
      significance = significance === void 0 ? 3 : significance;
      array = utils.parseNumberArray(utils.flatten(array));
      x2 = utils.parseNumber(x2);
      significance = utils.parseNumber(significance);
      if (utils.anyIsError(array, x2, significance)) {
        return error2.value;
      }
      array = array.sort(function(a3, b2) {
        return a3 - b2;
      });
      var uniques = misc.UNIQUE.apply(null, array);
      var n3 = array.length;
      var m2 = uniques.length;
      var power = Math.pow(10, significance);
      var result = 0;
      var match = false;
      var i3 = 0;
      while (!match && i3 < m2) {
        if (x2 === uniques[i3]) {
          result = array.indexOf(uniques[i3]) / (n3 - 1);
          match = true;
        } else if (x2 >= uniques[i3] && (x2 < uniques[i3 + 1] || i3 === m2 - 1)) {
          result = (array.indexOf(uniques[i3]) + (x2 - uniques[i3]) / (uniques[i3 + 1] - uniques[i3])) / (n3 - 1);
          match = true;
        }
        i3++;
      }
      return Math.floor(result * power) / power;
    };
    exports.PERMUT = function(number, number_chosen) {
      number = utils.parseNumber(number);
      number_chosen = utils.parseNumber(number_chosen);
      if (utils.anyIsError(number, number_chosen)) {
        return error2.value;
      }
      return mathTrig.FACT(number) / mathTrig.FACT(number - number_chosen);
    };
    exports.PERMUTATIONA = function(number, number_chosen) {
      number = utils.parseNumber(number);
      number_chosen = utils.parseNumber(number_chosen);
      if (utils.anyIsError(number, number_chosen)) {
        return error2.value;
      }
      return Math.pow(number, number_chosen);
    };
    exports.PHI = function(x2) {
      x2 = utils.parseNumber(x2);
      if (x2 instanceof Error) {
        return error2.value;
      }
      return Math.exp(-0.5 * x2 * x2) / SQRT2PI;
    };
    exports.POISSON = {};
    exports.POISSON.DIST = function(x2, mean, cumulative) {
      x2 = utils.parseNumber(x2);
      mean = utils.parseNumber(mean);
      if (utils.anyIsError(x2, mean)) {
        return error2.value;
      }
      return cumulative ? jStat.poisson.cdf(x2, mean) : jStat.poisson.pdf(x2, mean);
    };
    exports.PROB = function(range2, probability, lower, upper) {
      if (lower === void 0) {
        return 0;
      }
      upper = upper === void 0 ? lower : upper;
      range2 = utils.parseNumberArray(utils.flatten(range2));
      probability = utils.parseNumberArray(utils.flatten(probability));
      lower = utils.parseNumber(lower);
      upper = utils.parseNumber(upper);
      if (utils.anyIsError(range2, probability, lower, upper)) {
        return error2.value;
      }
      if (lower === upper) {
        return range2.indexOf(lower) >= 0 ? probability[range2.indexOf(lower)] : 0;
      }
      var sorted = range2.sort(function(a3, b2) {
        return a3 - b2;
      });
      var n3 = sorted.length;
      var result = 0;
      for (var i3 = 0; i3 < n3; i3++) {
        if (sorted[i3] >= lower && sorted[i3] <= upper) {
          result += probability[range2.indexOf(sorted[i3])];
        }
      }
      return result;
    };
    exports.QUARTILE = {};
    exports.QUARTILE.EXC = function(range2, quart) {
      range2 = utils.parseNumberArray(utils.flatten(range2));
      quart = utils.parseNumber(quart);
      if (utils.anyIsError(range2, quart)) {
        return error2.value;
      }
      switch (quart) {
        case 1:
          return exports.PERCENTILE.EXC(range2, 0.25);
        case 2:
          return exports.PERCENTILE.EXC(range2, 0.5);
        case 3:
          return exports.PERCENTILE.EXC(range2, 0.75);
        default:
          return error2.num;
      }
    };
    exports.QUARTILE.INC = function(range2, quart) {
      range2 = utils.parseNumberArray(utils.flatten(range2));
      quart = utils.parseNumber(quart);
      if (utils.anyIsError(range2, quart)) {
        return error2.value;
      }
      switch (quart) {
        case 1:
          return exports.PERCENTILE.INC(range2, 0.25);
        case 2:
          return exports.PERCENTILE.INC(range2, 0.5);
        case 3:
          return exports.PERCENTILE.INC(range2, 0.75);
        default:
          return error2.num;
      }
    };
    exports.RANK = {};
    exports.RANK.AVG = function(number, range2, order) {
      number = utils.parseNumber(number);
      range2 = utils.parseNumberArray(utils.flatten(range2));
      if (utils.anyIsError(number, range2)) {
        return error2.value;
      }
      range2 = utils.flatten(range2);
      order = order || false;
      var sort = order ? function(a3, b2) {
        return a3 - b2;
      } : function(a3, b2) {
        return b2 - a3;
      };
      range2 = range2.sort(sort);
      var length = range2.length;
      var count = 0;
      for (var i3 = 0; i3 < length; i3++) {
        if (range2[i3] === number) {
          count++;
        }
      }
      return count > 1 ? (2 * range2.indexOf(number) + count + 1) / 2 : range2.indexOf(number) + 1;
    };
    exports.RANK.EQ = function(number, range2, order) {
      number = utils.parseNumber(number);
      range2 = utils.parseNumberArray(utils.flatten(range2));
      if (utils.anyIsError(number, range2)) {
        return error2.value;
      }
      order = order || false;
      var sort = order ? function(a3, b2) {
        return a3 - b2;
      } : function(a3, b2) {
        return b2 - a3;
      };
      range2 = range2.sort(sort);
      return range2.indexOf(number) + 1;
    };
    exports.ROW = function(matrix, index) {
      if (arguments.length !== 2) {
        return error2.na;
      }
      if (index < 0) {
        return error2.num;
      }
      if (!(matrix instanceof Array) || typeof index !== "number") {
        return error2.value;
      }
      if (matrix.length === 0) {
        return void 0;
      }
      return jStat.row(matrix, index);
    };
    exports.ROWS = function(matrix) {
      if (arguments.length !== 1) {
        return error2.na;
      }
      if (!(matrix instanceof Array)) {
        return error2.value;
      }
      if (matrix.length === 0) {
        return 0;
      }
      return jStat.rows(matrix);
    };
    exports.RSQ = function(data_x, data_y) {
      data_x = utils.parseNumberArray(utils.flatten(data_x));
      data_y = utils.parseNumberArray(utils.flatten(data_y));
      if (utils.anyIsError(data_x, data_y)) {
        return error2.value;
      }
      return Math.pow(exports.PEARSON(data_x, data_y), 2);
    };
    exports.SKEW = function() {
      var range2 = utils.parseNumberArray(utils.flatten(arguments));
      if (range2 instanceof Error) {
        return range2;
      }
      var mean = jStat.mean(range2);
      var n3 = range2.length;
      var sigma = 0;
      for (var i3 = 0; i3 < n3; i3++) {
        sigma += Math.pow(range2[i3] - mean, 3);
      }
      return n3 * sigma / ((n3 - 1) * (n3 - 2) * Math.pow(jStat.stdev(range2, true), 3));
    };
    exports.SKEW.P = function() {
      var range2 = utils.parseNumberArray(utils.flatten(arguments));
      if (range2 instanceof Error) {
        return range2;
      }
      var mean = jStat.mean(range2);
      var n3 = range2.length;
      var m2 = 0;
      var m3 = 0;
      for (var i3 = 0; i3 < n3; i3++) {
        m3 += Math.pow(range2[i3] - mean, 3);
        m2 += Math.pow(range2[i3] - mean, 2);
      }
      m3 = m3 / n3;
      m2 = m2 / n3;
      return m3 / Math.pow(m2, 3 / 2);
    };
    exports.SLOPE = function(data_y, data_x) {
      data_y = utils.parseNumberArray(utils.flatten(data_y));
      data_x = utils.parseNumberArray(utils.flatten(data_x));
      if (utils.anyIsError(data_y, data_x)) {
        return error2.value;
      }
      var xmean = jStat.mean(data_x);
      var ymean = jStat.mean(data_y);
      var n3 = data_x.length;
      var num = 0;
      var den = 0;
      for (var i3 = 0; i3 < n3; i3++) {
        num += (data_x[i3] - xmean) * (data_y[i3] - ymean);
        den += Math.pow(data_x[i3] - xmean, 2);
      }
      return num / den;
    };
    exports.SMALL = function(range2, k2) {
      range2 = utils.parseNumberArray(utils.flatten(range2));
      k2 = utils.parseNumber(k2);
      if (utils.anyIsError(range2, k2)) {
        return range2;
      }
      return range2.sort(function(a3, b2) {
        return a3 - b2;
      })[k2 - 1];
    };
    exports.STANDARDIZE = function(x2, mean, sd) {
      x2 = utils.parseNumber(x2);
      mean = utils.parseNumber(mean);
      sd = utils.parseNumber(sd);
      if (utils.anyIsError(x2, mean, sd)) {
        return error2.value;
      }
      return (x2 - mean) / sd;
    };
    exports.STDEV = {};
    exports.STDEV.P = function() {
      var v3 = exports.VAR.P.apply(this, arguments);
      var result = Math.sqrt(v3);
      if (isNaN(result)) {
        result = error2.num;
      }
      return result;
    };
    exports.STDEV.S = function() {
      var v3 = exports.VAR.S.apply(this, arguments);
      var result = Math.sqrt(v3);
      return result;
    };
    exports.STDEVA = function() {
      var v3 = exports.VARA.apply(this, arguments);
      var result = Math.sqrt(v3);
      return result;
    };
    exports.STDEVPA = function() {
      var v3 = exports.VARPA.apply(this, arguments);
      var result = Math.sqrt(v3);
      if (isNaN(result)) {
        result = error2.num;
      }
      return result;
    };
    exports.STEYX = function(data_y, data_x) {
      data_y = utils.parseNumberArray(utils.flatten(data_y));
      data_x = utils.parseNumberArray(utils.flatten(data_x));
      if (utils.anyIsError(data_y, data_x)) {
        return error2.value;
      }
      var xmean = jStat.mean(data_x);
      var ymean = jStat.mean(data_y);
      var n3 = data_x.length;
      var lft = 0;
      var num = 0;
      var den = 0;
      for (var i3 = 0; i3 < n3; i3++) {
        lft += Math.pow(data_y[i3] - ymean, 2);
        num += (data_x[i3] - xmean) * (data_y[i3] - ymean);
        den += Math.pow(data_x[i3] - xmean, 2);
      }
      return Math.sqrt((lft - num * num / den) / (n3 - 2));
    };
    exports.TRANSPOSE = function(matrix) {
      if (!matrix) {
        return error2.na;
      }
      return jStat.transpose(matrix);
    };
    exports.T = text.T;
    exports.T.DIST = function(x2, df, cumulative) {
      x2 = utils.parseNumber(x2);
      df = utils.parseNumber(df);
      if (utils.anyIsError(x2, df)) {
        return error2.value;
      }
      return cumulative ? jStat.studentt.cdf(x2, df) : jStat.studentt.pdf(x2, df);
    };
    exports.T.DIST["2T"] = function(x2, df) {
      if (arguments.length !== 2) {
        return error2.na;
      }
      if (x2 < 0 || df < 1) {
        return error2.num;
      }
      if (typeof x2 !== "number" || typeof df !== "number") {
        return error2.value;
      }
      return (1 - jStat.studentt.cdf(x2, df)) * 2;
    };
    exports.T.DIST.RT = function(x2, df) {
      if (arguments.length !== 2) {
        return error2.na;
      }
      if (x2 < 0 || df < 1) {
        return error2.num;
      }
      if (typeof x2 !== "number" || typeof df !== "number") {
        return error2.value;
      }
      return 1 - jStat.studentt.cdf(x2, df);
    };
    exports.T.INV = function(probability, df) {
      probability = utils.parseNumber(probability);
      df = utils.parseNumber(df);
      if (utils.anyIsError(probability, df)) {
        return error2.value;
      }
      return jStat.studentt.inv(probability, df);
    };
    exports.T.INV["2T"] = function(probability, df) {
      probability = utils.parseNumber(probability);
      df = utils.parseNumber(df);
      if (probability <= 0 || probability > 1 || df < 1) {
        return error2.num;
      }
      if (utils.anyIsError(probability, df)) {
        return error2.value;
      }
      return Math.abs(jStat.studentt.inv(probability / 2, df));
    };
    exports.T.TEST = function(data_x, data_y) {
      data_x = utils.parseNumberArray(utils.flatten(data_x));
      data_y = utils.parseNumberArray(utils.flatten(data_y));
      if (utils.anyIsError(data_x, data_y)) {
        return error2.value;
      }
      var mean_x = jStat.mean(data_x);
      var mean_y = jStat.mean(data_y);
      var s_x = 0;
      var s_y = 0;
      var i3;
      for (i3 = 0; i3 < data_x.length; i3++) {
        s_x += Math.pow(data_x[i3] - mean_x, 2);
      }
      for (i3 = 0; i3 < data_y.length; i3++) {
        s_y += Math.pow(data_y[i3] - mean_y, 2);
      }
      s_x = s_x / (data_x.length - 1);
      s_y = s_y / (data_y.length - 1);
      var t3 = Math.abs(mean_x - mean_y) / Math.sqrt(s_x / data_x.length + s_y / data_y.length);
      return exports.T.DIST["2T"](t3, data_x.length + data_y.length - 2);
    };
    exports.TREND = function(data_y, data_x, new_data_x) {
      data_y = utils.parseNumberArray(utils.flatten(data_y));
      data_x = utils.parseNumberArray(utils.flatten(data_x));
      new_data_x = utils.parseNumberArray(utils.flatten(new_data_x));
      if (utils.anyIsError(data_y, data_x, new_data_x)) {
        return error2.value;
      }
      var linest = exports.LINEST(data_y, data_x);
      var m2 = linest[0];
      var b2 = linest[1];
      var result = [];
      new_data_x.forEach(function(x2) {
        result.push(m2 * x2 + b2);
      });
      return result;
    };
    exports.TRIMMEAN = function(range2, percent) {
      range2 = utils.parseNumberArray(utils.flatten(range2));
      percent = utils.parseNumber(percent);
      if (utils.anyIsError(range2, percent)) {
        return error2.value;
      }
      var trim = mathTrig.FLOOR(range2.length * percent, 2) / 2;
      return jStat.mean(utils.initial(utils.rest(range2.sort(function(a3, b2) {
        return a3 - b2;
      }), trim), trim));
    };
    exports.VAR = {};
    exports.VAR.P = function() {
      var range2 = utils.numbers(utils.flatten(arguments));
      var n3 = range2.length;
      var sigma = 0;
      var mean = exports.AVERAGE(range2);
      var result;
      for (var i3 = 0; i3 < n3; i3++) {
        sigma += Math.pow(range2[i3] - mean, 2);
      }
      result = sigma / n3;
      if (isNaN(result)) {
        result = error2.num;
      }
      return result;
    };
    exports.VAR.S = function() {
      var range2 = utils.numbers(utils.flatten(arguments));
      var n3 = range2.length;
      var sigma = 0;
      var mean = exports.AVERAGE(range2);
      for (var i3 = 0; i3 < n3; i3++) {
        sigma += Math.pow(range2[i3] - mean, 2);
      }
      return sigma / (n3 - 1);
    };
    exports.VARA = function() {
      var range2 = utils.flatten(arguments);
      var n3 = range2.length;
      var sigma = 0;
      var count = 0;
      var mean = exports.AVERAGEA(range2);
      for (var i3 = 0; i3 < n3; i3++) {
        var el = range2[i3];
        if (typeof el === "number") {
          sigma += Math.pow(el - mean, 2);
        } else if (el === true) {
          sigma += Math.pow(1 - mean, 2);
        } else {
          sigma += Math.pow(0 - mean, 2);
        }
        if (el !== null) {
          count++;
        }
      }
      return sigma / (count - 1);
    };
    exports.VARPA = function() {
      var range2 = utils.flatten(arguments);
      var n3 = range2.length;
      var sigma = 0;
      var count = 0;
      var mean = exports.AVERAGEA(range2);
      var result;
      for (var i3 = 0; i3 < n3; i3++) {
        var el = range2[i3];
        if (typeof el === "number") {
          sigma += Math.pow(el - mean, 2);
        } else if (el === true) {
          sigma += Math.pow(1 - mean, 2);
        } else {
          sigma += Math.pow(0 - mean, 2);
        }
        if (el !== null) {
          count++;
        }
      }
      result = sigma / count;
      if (isNaN(result)) {
        result = error2.num;
      }
      return result;
    };
    exports.WEIBULL = {};
    exports.WEIBULL.DIST = function(x2, alpha, beta, cumulative) {
      x2 = utils.parseNumber(x2);
      alpha = utils.parseNumber(alpha);
      beta = utils.parseNumber(beta);
      if (utils.anyIsError(x2, alpha, beta)) {
        return error2.value;
      }
      return cumulative ? 1 - Math.exp(-Math.pow(x2 / beta, alpha)) : Math.pow(x2, alpha - 1) * Math.exp(-Math.pow(x2 / beta, alpha)) * alpha / Math.pow(beta, alpha);
    };
    exports.Z = {};
    exports.Z.TEST = function(range2, x2, sd) {
      range2 = utils.parseNumberArray(utils.flatten(range2));
      x2 = utils.parseNumber(x2);
      if (utils.anyIsError(range2, x2)) {
        return error2.value;
      }
      sd = sd || exports.STDEV.S(range2);
      var n3 = range2.length;
      return 1 - exports.NORM.S.DIST((exports.AVERAGE(range2) - x2) / (sd / Math.sqrt(n3)), true);
    };
  }
});

// node_modules/@handsontable/formulajs/lib/information.js
var require_information = __commonJS({
  "node_modules/@handsontable/formulajs/lib/information.js"(exports) {
    var error2 = require_error();
    exports.CELL = function() {
      throw new Error("CELL is not implemented");
    };
    exports.ERROR = {};
    exports.ERROR.TYPE = function(error_val) {
      switch (error_val) {
        case error2.nil:
          return 1;
        case error2.div0:
          return 2;
        case error2.value:
          return 3;
        case error2.ref:
          return 4;
        case error2.name:
          return 5;
        case error2.num:
          return 6;
        case error2.na:
          return 7;
        case error2.data:
          return 8;
      }
      return error2.na;
    };
    exports.INFO = function() {
      throw new Error("INFO is not implemented");
    };
    exports.ISBLANK = function(value) {
      return value === null;
    };
    exports.ISBINARY = function(number) {
      return /^[01]{1,10}$/.test(number);
    };
    exports.ISERR = function(value) {
      return [error2.value, error2.ref, error2.div0, error2.num, error2.name, error2.nil].indexOf(value) >= 0 || typeof value === "number" && (isNaN(value) || !isFinite(value));
    };
    exports.ISERROR = function(value) {
      return exports.ISERR(value) || value === error2.na;
    };
    exports.ISEVEN = function(number) {
      return Math.floor(Math.abs(number)) & 1 ? false : true;
    };
    exports.ISFORMULA = function() {
      throw new Error("ISFORMULA is not implemented");
    };
    exports.ISLOGICAL = function(value) {
      return value === true || value === false;
    };
    exports.ISNA = function(value) {
      return value === error2.na;
    };
    exports.ISNONTEXT = function(value) {
      return typeof value !== "string";
    };
    exports.ISNUMBER = function(value) {
      return typeof value === "number" && !isNaN(value) && isFinite(value);
    };
    exports.ISODD = function(number) {
      return Math.floor(Math.abs(number)) & 1 ? true : false;
    };
    exports.ISREF = function() {
      throw new Error("ISREF is not implemented");
    };
    exports.ISTEXT = function(value) {
      return typeof value === "string";
    };
    exports.N = function(value) {
      if (this.ISNUMBER(value)) {
        return value;
      }
      if (value instanceof Date) {
        return value.getTime();
      }
      if (value === true) {
        return 1;
      }
      if (value === false) {
        return 0;
      }
      if (this.ISERROR(value)) {
        return value;
      }
      return 0;
    };
    exports.NA = function() {
      return error2.na;
    };
    exports.SHEET = function() {
      throw new Error("SHEET is not implemented");
    };
    exports.SHEETS = function() {
      throw new Error("SHEETS is not implemented");
    };
    exports.TYPE = function(value) {
      if (this.ISNUMBER(value)) {
        return 1;
      }
      if (this.ISTEXT(value)) {
        return 2;
      }
      if (this.ISLOGICAL(value)) {
        return 4;
      }
      if (this.ISERROR(value)) {
        return 16;
      }
      if (Array.isArray(value)) {
        return 64;
      }
    };
  }
});

// node_modules/@handsontable/formulajs/lib/math-trig.js
var require_math_trig = __commonJS({
  "node_modules/@handsontable/formulajs/lib/math-trig.js"(exports) {
    var utils = require_common();
    var error2 = require_error();
    var statistical = require_statistical();
    var information = require_information();
    var evalExpression = require_criteria_eval();
    exports.ABS = function(number) {
      number = utils.parseNumber(number);
      if (number instanceof Error) {
        return number;
      }
      var result = Math.abs(number);
      return result;
    };
    exports.ACOS = function(number) {
      number = utils.parseNumber(number);
      if (number instanceof Error) {
        return number;
      }
      var result = Math.acos(number);
      if (isNaN(result)) {
        result = error2.num;
      }
      return result;
    };
    exports.ACOSH = function(number) {
      number = utils.parseNumber(number);
      if (number instanceof Error) {
        return number;
      }
      var result = Math.log(number + Math.sqrt(number * number - 1));
      if (isNaN(result)) {
        result = error2.num;
      }
      return result;
    };
    exports.ACOT = function(number) {
      number = utils.parseNumber(number);
      if (number instanceof Error) {
        return number;
      }
      var result = Math.atan(1 / number);
      return result;
    };
    exports.ACOTH = function(number) {
      number = utils.parseNumber(number);
      if (number instanceof Error) {
        return number;
      }
      var result = 0.5 * Math.log((number + 1) / (number - 1));
      if (isNaN(result)) {
        result = error2.num;
      }
      return result;
    };
    exports.AGGREGATE = function(function_num, options, ref1, ref2) {
      function_num = utils.parseNumber(function_num);
      options = utils.parseNumber(function_num);
      if (utils.anyIsError(function_num, options)) {
        return error2.value;
      }
      switch (function_num) {
        case 1:
          return statistical.AVERAGE(ref1);
        case 2:
          return statistical.COUNT(ref1);
        case 3:
          return statistical.COUNTA(ref1);
        case 4:
          return statistical.MAX(ref1);
        case 5:
          return statistical.MIN(ref1);
        case 6:
          return exports.PRODUCT(ref1);
        case 7:
          return statistical.STDEV.S(ref1);
        case 8:
          return statistical.STDEV.P(ref1);
        case 9:
          return exports.SUM(ref1);
        case 10:
          return statistical.VAR.S(ref1);
        case 11:
          return statistical.VAR.P(ref1);
        case 12:
          return statistical.MEDIAN(ref1);
        case 13:
          return statistical.MODE.SNGL(ref1);
        case 14:
          return statistical.LARGE(ref1, ref2);
        case 15:
          return statistical.SMALL(ref1, ref2);
        case 16:
          return statistical.PERCENTILE.INC(ref1, ref2);
        case 17:
          return statistical.QUARTILE.INC(ref1, ref2);
        case 18:
          return statistical.PERCENTILE.EXC(ref1, ref2);
        case 19:
          return statistical.QUARTILE.EXC(ref1, ref2);
      }
    };
    exports.ARABIC = function(text) {
      if (!/^M*(?:D?C{0,3}|C[MD])(?:L?X{0,3}|X[CL])(?:V?I{0,3}|I[XV])$/.test(text)) {
        return error2.value;
      }
      var r3 = 0;
      text.replace(/[MDLV]|C[MD]?|X[CL]?|I[XV]?/g, function(i3) {
        r3 += {
          M: 1e3,
          CM: 900,
          D: 500,
          CD: 400,
          C: 100,
          XC: 90,
          L: 50,
          XL: 40,
          X: 10,
          IX: 9,
          V: 5,
          IV: 4,
          I: 1
        }[i3];
      });
      return r3;
    };
    exports.ASIN = function(number) {
      number = utils.parseNumber(number);
      if (number instanceof Error) {
        return number;
      }
      var result = Math.asin(number);
      if (isNaN(result)) {
        result = error2.num;
      }
      return result;
    };
    exports.ASINH = function(number) {
      number = utils.parseNumber(number);
      if (number instanceof Error) {
        return number;
      }
      return Math.log(number + Math.sqrt(number * number + 1));
    };
    exports.ATAN = function(number) {
      number = utils.parseNumber(number);
      if (number instanceof Error) {
        return number;
      }
      return Math.atan(number);
    };
    exports.ATAN2 = function(number_x, number_y) {
      number_x = utils.parseNumber(number_x);
      number_y = utils.parseNumber(number_y);
      if (utils.anyIsError(number_x, number_y)) {
        return error2.value;
      }
      return Math.atan2(number_x, number_y);
    };
    exports.ATANH = function(number) {
      number = utils.parseNumber(number);
      if (number instanceof Error) {
        return number;
      }
      var result = Math.log((1 + number) / (1 - number)) / 2;
      if (isNaN(result)) {
        result = error2.num;
      }
      return result;
    };
    exports.BASE = function(number, radix, min_length) {
      min_length = min_length || 0;
      number = utils.parseNumber(number);
      radix = utils.parseNumber(radix);
      min_length = utils.parseNumber(min_length);
      if (utils.anyIsError(number, radix, min_length)) {
        return error2.value;
      }
      min_length = min_length === void 0 ? 0 : min_length;
      var result = number.toString(radix);
      return new Array(Math.max(min_length + 1 - result.length, 0)).join("0") + result;
    };
    exports.CEILING = function(number, significance, mode) {
      significance = significance === void 0 ? 1 : Math.abs(significance);
      mode = mode || 0;
      number = utils.parseNumber(number);
      significance = utils.parseNumber(significance);
      mode = utils.parseNumber(mode);
      if (utils.anyIsError(number, significance, mode)) {
        return error2.value;
      }
      if (significance === 0) {
        return 0;
      }
      var precision = -Math.floor(Math.log(significance) / Math.log(10));
      if (number >= 0) {
        return exports.ROUND(Math.ceil(number / significance) * significance, precision);
      } else {
        if (mode === 0) {
          return -exports.ROUND(Math.floor(Math.abs(number) / significance) * significance, precision);
        } else {
          return -exports.ROUND(Math.ceil(Math.abs(number) / significance) * significance, precision);
        }
      }
    };
    exports.CEILING.MATH = exports.CEILING;
    exports.CEILING.PRECISE = exports.CEILING;
    exports.COMBIN = function(number, number_chosen) {
      number = utils.parseNumber(number);
      number_chosen = utils.parseNumber(number_chosen);
      if (utils.anyIsError(number, number_chosen)) {
        return error2.value;
      }
      return exports.FACT(number) / (exports.FACT(number_chosen) * exports.FACT(number - number_chosen));
    };
    exports.COMBINA = function(number, number_chosen) {
      number = utils.parseNumber(number);
      number_chosen = utils.parseNumber(number_chosen);
      if (utils.anyIsError(number, number_chosen)) {
        return error2.value;
      }
      return number === 0 && number_chosen === 0 ? 1 : exports.COMBIN(number + number_chosen - 1, number - 1);
    };
    exports.COS = function(number) {
      number = utils.parseNumber(number);
      if (number instanceof Error) {
        return number;
      }
      return Math.cos(number);
    };
    exports.COSH = function(number) {
      number = utils.parseNumber(number);
      if (number instanceof Error) {
        return number;
      }
      return (Math.exp(number) + Math.exp(-number)) / 2;
    };
    exports.COT = function(number) {
      number = utils.parseNumber(number);
      if (number instanceof Error) {
        return number;
      }
      return 1 / Math.tan(number);
    };
    exports.COTH = function(number) {
      number = utils.parseNumber(number);
      if (number instanceof Error) {
        return number;
      }
      var e22 = Math.exp(2 * number);
      return (e22 + 1) / (e22 - 1);
    };
    exports.CSC = function(number) {
      number = utils.parseNumber(number);
      if (number instanceof Error) {
        return number;
      }
      return 1 / Math.sin(number);
    };
    exports.CSCH = function(number) {
      number = utils.parseNumber(number);
      if (number instanceof Error) {
        return number;
      }
      return 2 / (Math.exp(number) - Math.exp(-number));
    };
    exports.DECIMAL = function(number, radix) {
      if (arguments.length < 1) {
        return error2.value;
      }
      return parseInt(number, radix);
    };
    exports.DEGREES = function(number) {
      number = utils.parseNumber(number);
      if (number instanceof Error) {
        return number;
      }
      return number * 180 / Math.PI;
    };
    exports.EVEN = function(number) {
      number = utils.parseNumber(number);
      if (number instanceof Error) {
        return number;
      }
      return exports.CEILING(number, -2, -1);
    };
    exports.EXP = function(number) {
      if (arguments.length < 1) {
        return error2.na;
      }
      if (typeof number !== "number" || arguments.length > 1) {
        return error2.error;
      }
      number = Math.exp(number);
      return number;
    };
    var MEMOIZED_FACT = [];
    exports.FACT = function(number) {
      number = utils.parseNumber(number);
      if (number instanceof Error) {
        return number;
      }
      var n3 = Math.floor(number);
      if (n3 === 0 || n3 === 1) {
        return 1;
      } else if (MEMOIZED_FACT[n3] > 0) {
        return MEMOIZED_FACT[n3];
      } else {
        MEMOIZED_FACT[n3] = exports.FACT(n3 - 1) * n3;
        return MEMOIZED_FACT[n3];
      }
    };
    exports.FACTDOUBLE = function(number) {
      number = utils.parseNumber(number);
      if (number instanceof Error) {
        return number;
      }
      var n3 = Math.floor(number);
      if (n3 <= 0) {
        return 1;
      } else {
        return n3 * exports.FACTDOUBLE(n3 - 2);
      }
    };
    exports.FLOOR = function(number, significance) {
      number = utils.parseNumber(number);
      significance = utils.parseNumber(significance);
      if (utils.anyIsError(number, significance)) {
        return error2.value;
      }
      if (significance === 0) {
        return 0;
      }
      if (!(number > 0 && significance > 0) && !(number < 0 && significance < 0)) {
        return error2.num;
      }
      significance = Math.abs(significance);
      var precision = -Math.floor(Math.log(significance) / Math.log(10));
      if (number >= 0) {
        return exports.ROUND(Math.floor(number / significance) * significance, precision);
      } else {
        return -exports.ROUND(Math.ceil(Math.abs(number) / significance), precision);
      }
    };
    exports.FLOOR.MATH = function(number, significance, mode) {
      significance = significance === void 0 ? 1 : significance;
      mode = mode === void 0 ? 0 : mode;
      number = utils.parseNumber(number);
      significance = utils.parseNumber(significance);
      mode = utils.parseNumber(mode);
      if (utils.anyIsError(number, significance, mode)) {
        return error2.value;
      }
      if (significance === 0) {
        return 0;
      }
      significance = significance ? Math.abs(significance) : 1;
      var precision = -Math.floor(Math.log(significance) / Math.log(10));
      if (number >= 0) {
        return exports.ROUND(Math.floor(number / significance) * significance, precision);
      } else if (mode === 0 || mode === void 0) {
        return -exports.ROUND(Math.ceil(Math.abs(number) / significance) * significance, precision);
      }
      return -exports.ROUND(Math.floor(Math.abs(number) / significance) * significance, precision);
    };
    exports.FLOOR.PRECISE = exports.FLOOR.MATH;
    exports.GCD = function() {
      var range2 = utils.parseNumberArray(utils.flatten(arguments));
      if (range2 instanceof Error) {
        return range2;
      }
      var n3 = range2.length;
      var r0 = range2[0];
      var x2 = r0 < 0 ? -r0 : r0;
      for (var i3 = 1; i3 < n3; i3++) {
        var ri = range2[i3];
        var y2 = ri < 0 ? -ri : ri;
        while (x2 && y2) {
          if (x2 > y2) {
            x2 %= y2;
          } else {
            y2 %= x2;
          }
        }
        x2 += y2;
      }
      return x2;
    };
    exports.INT = function(number) {
      number = utils.parseNumber(number);
      if (number instanceof Error) {
        return number;
      }
      return Math.floor(number);
    };
    exports.ISO = {
      CEILING: exports.CEILING
    };
    exports.LCM = function() {
      var o5 = utils.parseNumberArray(utils.flatten(arguments));
      if (o5 instanceof Error) {
        return o5;
      }
      for (var i3, j2, n3, d3, r3 = 1; (n3 = o5.pop()) !== void 0; ) {
        while (n3 > 1) {
          if (n3 % 2) {
            for (i3 = 3, j2 = Math.floor(Math.sqrt(n3)); i3 <= j2 && n3 % i3; i3 += 2) {
            }
            d3 = i3 <= j2 ? i3 : n3;
          } else {
            d3 = 2;
          }
          for (n3 /= d3, r3 *= d3, i3 = o5.length; i3; o5[--i3] % d3 === 0 && (o5[i3] /= d3) === 1 && o5.splice(i3, 1)) {
          }
        }
      }
      return r3;
    };
    exports.LN = function(number) {
      number = utils.parseNumber(number);
      if (number instanceof Error) {
        return number;
      }
      return Math.log(number);
    };
    exports.LN10 = function() {
      return Math.log(10);
    };
    exports.LN2 = function() {
      return Math.log(2);
    };
    exports.LOG10E = function() {
      return Math.LOG10E;
    };
    exports.LOG2E = function() {
      return Math.LOG2E;
    };
    exports.LOG = function(number, base) {
      number = utils.parseNumber(number);
      base = utils.parseNumber(base);
      if (utils.anyIsError(number, base)) {
        return error2.value;
      }
      base = base === void 0 ? 10 : base;
      return Math.log(number) / Math.log(base);
    };
    exports.LOG10 = function(number) {
      number = utils.parseNumber(number);
      if (number instanceof Error) {
        return number;
      }
      return Math.log(number) / Math.log(10);
    };
    exports.MOD = function(dividend, divisor) {
      dividend = utils.parseNumber(dividend);
      divisor = utils.parseNumber(divisor);
      if (utils.anyIsError(dividend, divisor)) {
        return error2.value;
      }
      if (divisor === 0) {
        return error2.div0;
      }
      var modulus = Math.abs(dividend % divisor);
      return divisor > 0 ? modulus : -modulus;
    };
    exports.MROUND = function(number, multiple) {
      number = utils.parseNumber(number);
      multiple = utils.parseNumber(multiple);
      if (utils.anyIsError(number, multiple)) {
        return error2.value;
      }
      if (number * multiple < 0) {
        return error2.num;
      }
      return Math.round(number / multiple) * multiple;
    };
    exports.MULTINOMIAL = function() {
      var args = utils.parseNumberArray(utils.flatten(arguments));
      if (args instanceof Error) {
        return args;
      }
      var sum = 0;
      var divisor = 1;
      for (var i3 = 0; i3 < args.length; i3++) {
        sum += args[i3];
        divisor *= exports.FACT(args[i3]);
      }
      return exports.FACT(sum) / divisor;
    };
    exports.ODD = function(number) {
      number = utils.parseNumber(number);
      if (number instanceof Error) {
        return number;
      }
      var temp = Math.ceil(Math.abs(number));
      temp = temp & 1 ? temp : temp + 1;
      return number > 0 ? temp : -temp;
    };
    exports.PI = function() {
      return Math.PI;
    };
    exports.E = function() {
      return Math.E;
    };
    exports.POWER = function(number, power) {
      number = utils.parseNumber(number);
      power = utils.parseNumber(power);
      if (utils.anyIsError(number, power)) {
        return error2.value;
      }
      var result = Math.pow(number, power);
      if (isNaN(result)) {
        return error2.num;
      }
      return result;
    };
    exports.PRODUCT = function() {
      var args = utils.parseNumberArray(utils.flatten(arguments));
      if (args instanceof Error) {
        return args;
      }
      var result = 1;
      for (var i3 = 0; i3 < args.length; i3++) {
        result *= args[i3];
      }
      return result;
    };
    exports.QUOTIENT = function(numerator, denominator) {
      numerator = utils.parseNumber(numerator);
      denominator = utils.parseNumber(denominator);
      if (utils.anyIsError(numerator, denominator)) {
        return error2.value;
      }
      return parseInt(numerator / denominator, 10);
    };
    exports.RADIANS = function(number) {
      number = utils.parseNumber(number);
      if (number instanceof Error) {
        return number;
      }
      return number * Math.PI / 180;
    };
    exports.RAND = function() {
      return Math.random();
    };
    exports.RANDBETWEEN = function(bottom, top) {
      bottom = utils.parseNumber(bottom);
      top = utils.parseNumber(top);
      if (utils.anyIsError(bottom, top)) {
        return error2.value;
      }
      return bottom + Math.ceil((top - bottom + 1) * Math.random()) - 1;
    };
    exports.ROMAN = function(number) {
      number = utils.parseNumber(number);
      if (number instanceof Error) {
        return number;
      }
      var digits = String(number).split("");
      var key = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM", "", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC", "", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];
      var roman = "";
      var i3 = 3;
      while (i3--) {
        roman = (key[+digits.pop() + i3 * 10] || "") + roman;
      }
      return new Array(+digits.join("") + 1).join("M") + roman;
    };
    exports.ROUND = function(number, digits) {
      number = utils.parseNumber(number);
      digits = utils.parseNumber(digits);
      if (utils.anyIsError(number, digits)) {
        return error2.value;
      }
      return Math.round(number * Math.pow(10, digits)) / Math.pow(10, digits);
    };
    exports.ROUNDDOWN = function(number, digits) {
      number = utils.parseNumber(number);
      digits = utils.parseNumber(digits);
      if (utils.anyIsError(number, digits)) {
        return error2.value;
      }
      var sign = number > 0 ? 1 : -1;
      return sign * Math.floor(Math.abs(number) * Math.pow(10, digits)) / Math.pow(10, digits);
    };
    exports.ROUNDUP = function(number, digits) {
      number = utils.parseNumber(number);
      digits = utils.parseNumber(digits);
      if (utils.anyIsError(number, digits)) {
        return error2.value;
      }
      var sign = number > 0 ? 1 : -1;
      return sign * Math.ceil(Math.abs(number) * Math.pow(10, digits)) / Math.pow(10, digits);
    };
    exports.SEC = function(number) {
      number = utils.parseNumber(number);
      if (number instanceof Error) {
        return number;
      }
      return 1 / Math.cos(number);
    };
    exports.SECH = function(number) {
      number = utils.parseNumber(number);
      if (number instanceof Error) {
        return number;
      }
      return 2 / (Math.exp(number) + Math.exp(-number));
    };
    exports.SERIESSUM = function(x2, n3, m2, coefficients) {
      x2 = utils.parseNumber(x2);
      n3 = utils.parseNumber(n3);
      m2 = utils.parseNumber(m2);
      coefficients = utils.parseNumberArray(coefficients);
      if (utils.anyIsError(x2, n3, m2, coefficients)) {
        return error2.value;
      }
      var result = coefficients[0] * Math.pow(x2, n3);
      for (var i3 = 1; i3 < coefficients.length; i3++) {
        result += coefficients[i3] * Math.pow(x2, n3 + i3 * m2);
      }
      return result;
    };
    exports.SIGN = function(number) {
      number = utils.parseNumber(number);
      if (number instanceof Error) {
        return number;
      }
      if (number < 0) {
        return -1;
      } else if (number === 0) {
        return 0;
      } else {
        return 1;
      }
    };
    exports.SIN = function(number) {
      number = utils.parseNumber(number);
      if (number instanceof Error) {
        return number;
      }
      return Math.sin(number);
    };
    exports.SINH = function(number) {
      number = utils.parseNumber(number);
      if (number instanceof Error) {
        return number;
      }
      return (Math.exp(number) - Math.exp(-number)) / 2;
    };
    exports.SQRT = function(number) {
      number = utils.parseNumber(number);
      if (number instanceof Error) {
        return number;
      }
      if (number < 0) {
        return error2.num;
      }
      return Math.sqrt(number);
    };
    exports.SQRTPI = function(number) {
      number = utils.parseNumber(number);
      if (number instanceof Error) {
        return number;
      }
      return Math.sqrt(number * Math.PI);
    };
    exports.SQRT1_2 = function() {
      return 1 / Math.sqrt(2);
    };
    exports.SQRT2 = function() {
      return Math.sqrt(2);
    };
    exports.SUBTOTAL = function(function_code, ref1) {
      function_code = utils.parseNumber(function_code);
      if (function_code instanceof Error) {
        return function_code;
      }
      switch (function_code) {
        case 1:
          return statistical.AVERAGE(ref1);
        case 2:
          return statistical.COUNT(ref1);
        case 3:
          return statistical.COUNTA(ref1);
        case 4:
          return statistical.MAX(ref1);
        case 5:
          return statistical.MIN(ref1);
        case 6:
          return exports.PRODUCT(ref1);
        case 7:
          return statistical.STDEV.S(ref1);
        case 8:
          return statistical.STDEV.P(ref1);
        case 9:
          return exports.SUM(ref1);
        case 10:
          return statistical.VAR.S(ref1);
        case 11:
          return statistical.VAR.P(ref1);
        case 101:
          return statistical.AVERAGE(ref1);
        case 102:
          return statistical.COUNT(ref1);
        case 103:
          return statistical.COUNTA(ref1);
        case 104:
          return statistical.MAX(ref1);
        case 105:
          return statistical.MIN(ref1);
        case 106:
          return exports.PRODUCT(ref1);
        case 107:
          return statistical.STDEV.S(ref1);
        case 108:
          return statistical.STDEV.P(ref1);
        case 109:
          return exports.SUM(ref1);
        case 110:
          return statistical.VAR.S(ref1);
        case 111:
          return statistical.VAR.P(ref1);
      }
    };
    exports.ADD = function(num1, num2) {
      if (arguments.length !== 2) {
        return error2.na;
      }
      num1 = utils.parseNumber(num1);
      num2 = utils.parseNumber(num2);
      if (utils.anyIsError(num1, num2)) {
        return error2.value;
      }
      return num1 + num2;
    };
    exports.MINUS = function(num1, num2) {
      if (arguments.length !== 2) {
        return error2.na;
      }
      num1 = utils.parseNumber(num1);
      num2 = utils.parseNumber(num2);
      if (utils.anyIsError(num1, num2)) {
        return error2.value;
      }
      return num1 - num2;
    };
    exports.DIVIDE = function(dividend, divisor) {
      if (arguments.length !== 2) {
        return error2.na;
      }
      dividend = utils.parseNumber(dividend);
      divisor = utils.parseNumber(divisor);
      if (utils.anyIsError(dividend, divisor)) {
        return error2.value;
      }
      if (divisor === 0) {
        return error2.div0;
      }
      return dividend / divisor;
    };
    exports.MULTIPLY = function(factor1, factor2) {
      if (arguments.length !== 2) {
        return error2.na;
      }
      factor1 = utils.parseNumber(factor1);
      factor2 = utils.parseNumber(factor2);
      if (utils.anyIsError(factor1, factor2)) {
        return error2.value;
      }
      return factor1 * factor2;
    };
    exports.GTE = function(num1, num2) {
      if (arguments.length !== 2) {
        return error2.na;
      }
      num1 = utils.parseNumber(num1);
      num2 = utils.parseNumber(num2);
      if (utils.anyIsError(num1, num2)) {
        return error2.error;
      }
      return num1 >= num2;
    };
    exports.LT = function(num1, num2) {
      if (arguments.length !== 2) {
        return error2.na;
      }
      num1 = utils.parseNumber(num1);
      num2 = utils.parseNumber(num2);
      if (utils.anyIsError(num1, num2)) {
        return error2.error;
      }
      return num1 < num2;
    };
    exports.LTE = function(num1, num2) {
      if (arguments.length !== 2) {
        return error2.na;
      }
      num1 = utils.parseNumber(num1);
      num2 = utils.parseNumber(num2);
      if (utils.anyIsError(num1, num2)) {
        return error2.error;
      }
      return num1 <= num2;
    };
    exports.EQ = function(value1, value2) {
      if (arguments.length !== 2) {
        return error2.na;
      }
      return value1 === value2;
    };
    exports.NE = function(value1, value2) {
      if (arguments.length !== 2) {
        return error2.na;
      }
      return value1 !== value2;
    };
    exports.POW = function(base, exponent) {
      if (arguments.length !== 2) {
        return error2.na;
      }
      base = utils.parseNumber(base);
      exponent = utils.parseNumber(exponent);
      if (utils.anyIsError(base, exponent)) {
        return error2.error;
      }
      return exports.POWER(base, exponent);
    };
    exports.SUM = function() {
      var result = 0;
      utils.arrayEach(utils.argsToArray(arguments), function(value) {
        if (typeof value === "number") {
          result += value;
        } else if (typeof value === "string") {
          var parsed = parseFloat(value);
          !isNaN(parsed) && (result += parsed);
        } else if (Array.isArray(value)) {
          result += exports.SUM.apply(null, value);
        }
      });
      return result;
    };
    exports.SUMIF = function(range2, criteria) {
      range2 = utils.parseNumberArray(utils.flatten(range2));
      if (range2 instanceof Error) {
        return range2;
      }
      var result = 0;
      var isWildcard = criteria === void 0 || criteria === "*";
      var tokenizedCriteria = isWildcard ? null : evalExpression.parse(criteria + "");
      for (var i3 = 0; i3 < range2.length; i3++) {
        var value = range2[i3];
        if (isWildcard) {
          result += value;
        } else {
          var tokens = [evalExpression.createToken(value, evalExpression.TOKEN_TYPE_LITERAL)].concat(tokenizedCriteria);
          result += evalExpression.compute(tokens) ? value : 0;
        }
      }
      return result;
    };
    exports.SUMIFS = function() {
      var args = utils.argsToArray(arguments);
      var range2 = utils.parseNumberArray(utils.flatten(args.shift()));
      if (range2 instanceof Error) {
        return range2;
      }
      var criterias = args;
      var n_range_elements = range2.length;
      var criteriaLength = criterias.length;
      var result = 0;
      for (var i3 = 0; i3 < n_range_elements; i3++) {
        var value = range2[i3];
        var isMeetCondition = false;
        for (var j2 = 0; j2 < criteriaLength; j2++) {
          var criteria = criterias[j2];
          var isWildcard = criteria === void 0 || criteria === "*";
          var computedResult = false;
          if (isWildcard) {
            computedResult = true;
          } else {
            var tokenizedCriteria = evalExpression.parse(criteria + "");
            var tokens = [evalExpression.createToken(value, evalExpression.TOKEN_TYPE_LITERAL)].concat(tokenizedCriteria);
            computedResult = evalExpression.compute(tokens);
          }
          if (!computedResult) {
            isMeetCondition = false;
            break;
          }
          isMeetCondition = true;
        }
        if (isMeetCondition) {
          result += value;
        }
      }
      return result;
    };
    exports.SUMPRODUCT = function() {
      if (!arguments || arguments.length === 0) {
        return error2.value;
      }
      var arrays = arguments.length + 1;
      var result = 0;
      var product;
      var k2;
      var _i;
      var _ij;
      for (var i3 = 0; i3 < arguments[0].length; i3++) {
        if (!(arguments[0][i3] instanceof Array)) {
          product = 1;
          for (k2 = 1; k2 < arrays; k2++) {
            _i = utils.parseNumber(arguments[k2 - 1][i3]);
            if (_i instanceof Error) {
              return _i;
            }
            product *= _i;
          }
          result += product;
        } else {
          for (var j2 = 0; j2 < arguments[0][i3].length; j2++) {
            product = 1;
            for (k2 = 1; k2 < arrays; k2++) {
              _ij = utils.parseNumber(arguments[k2 - 1][i3][j2]);
              if (_ij instanceof Error) {
                return _ij;
              }
              product *= _ij;
            }
            result += product;
          }
        }
      }
      return result;
    };
    exports.SUMSQ = function() {
      var numbers = utils.parseNumberArray(utils.flatten(arguments));
      if (numbers instanceof Error) {
        return numbers;
      }
      var result = 0;
      var length = numbers.length;
      for (var i3 = 0; i3 < length; i3++) {
        result += information.ISNUMBER(numbers[i3]) ? numbers[i3] * numbers[i3] : 0;
      }
      return result;
    };
    exports.SUMX2MY2 = function(array_x, array_y) {
      array_x = utils.parseNumberArray(utils.flatten(array_x));
      array_y = utils.parseNumberArray(utils.flatten(array_y));
      if (utils.anyIsError(array_x, array_y)) {
        return error2.value;
      }
      var result = 0;
      for (var i3 = 0; i3 < array_x.length; i3++) {
        result += array_x[i3] * array_x[i3] - array_y[i3] * array_y[i3];
      }
      return result;
    };
    exports.SUMX2PY2 = function(array_x, array_y) {
      array_x = utils.parseNumberArray(utils.flatten(array_x));
      array_y = utils.parseNumberArray(utils.flatten(array_y));
      if (utils.anyIsError(array_x, array_y)) {
        return error2.value;
      }
      var result = 0;
      array_x = utils.parseNumberArray(utils.flatten(array_x));
      array_y = utils.parseNumberArray(utils.flatten(array_y));
      for (var i3 = 0; i3 < array_x.length; i3++) {
        result += array_x[i3] * array_x[i3] + array_y[i3] * array_y[i3];
      }
      return result;
    };
    exports.SUMXMY2 = function(array_x, array_y) {
      array_x = utils.parseNumberArray(utils.flatten(array_x));
      array_y = utils.parseNumberArray(utils.flatten(array_y));
      if (utils.anyIsError(array_x, array_y)) {
        return error2.value;
      }
      var result = 0;
      array_x = utils.flatten(array_x);
      array_y = utils.flatten(array_y);
      for (var i3 = 0; i3 < array_x.length; i3++) {
        result += Math.pow(array_x[i3] - array_y[i3], 2);
      }
      return result;
    };
    exports.TAN = function(number) {
      number = utils.parseNumber(number);
      if (number instanceof Error) {
        return number;
      }
      return Math.tan(number);
    };
    exports.TANH = function(number) {
      number = utils.parseNumber(number);
      if (number instanceof Error) {
        return number;
      }
      var e22 = Math.exp(2 * number);
      return (e22 - 1) / (e22 + 1);
    };
    exports.TRUNC = function(number, digits) {
      digits = digits === void 0 ? 0 : digits;
      number = utils.parseNumber(number);
      digits = utils.parseNumber(digits);
      if (utils.anyIsError(number, digits)) {
        return error2.value;
      }
      var sign = number > 0 ? 1 : -1;
      return sign * Math.floor(Math.abs(number) * Math.pow(10, digits)) / Math.pow(10, digits);
    };
  }
});

// node_modules/bessel/bessel.js
var require_bessel = __commonJS({
  "node_modules/bessel/bessel.js"(exports) {
    var BESSEL;
    (function(factory) {
      if (typeof DO_NOT_EXPORT_BESSEL === "undefined") {
        if ("object" === typeof exports) {
          factory(exports);
        } else if ("function" === typeof define && define.amd) {
          define(function() {
            var module2 = {};
            factory(module2);
            return module2;
          });
        } else {
          factory(BESSEL = {});
        }
      } else {
        factory(BESSEL = {});
      }
    })(function(BESSEL2) {
      BESSEL2.version = "1.0.2";
      var M2 = Math;
      function _horner(arr, v3) {
        for (var i3 = 0, z2 = 0; i3 < arr.length; ++i3)
          z2 = v3 * z2 + arr[i3];
        return z2;
      }
      function _bessel_iter(x2, n3, f0, f1, sign) {
        if (n3 === 0)
          return f0;
        if (n3 === 1)
          return f1;
        var tdx = 2 / x2, f22 = f1;
        for (var o5 = 1; o5 < n3; ++o5) {
          f22 = f1 * o5 * tdx + sign * f0;
          f0 = f1;
          f1 = f22;
        }
        return f22;
      }
      function _bessel_wrap(bessel0, bessel1, name, nonzero, sign) {
        return function bessel(x2, n3) {
          if (nonzero) {
            if (x2 === 0)
              return nonzero == 1 ? -Infinity : Infinity;
            else if (x2 < 0)
              return NaN;
          }
          if (n3 === 0)
            return bessel0(x2);
          if (n3 === 1)
            return bessel1(x2);
          if (n3 < 0)
            return NaN;
          n3 |= 0;
          var b0 = bessel0(x2), b1 = bessel1(x2);
          return _bessel_iter(x2, n3, b0, b1, sign);
        };
      }
      var besselj = function() {
        var W2 = 0.636619772;
        var b0_a1a = [57568490574, -13362590354, 6516196407e-1, -1121442418e-2, 77392.33017, -184.9052456].reverse();
        var b0_a2a = [57568490411, 1029532985, 9494680718e-3, 59272.64853, 267.8532712, 1].reverse();
        var b0_a1b = [1, -0.001098628627, 2734510407e-14, -2073370639e-15, 2093887211e-16].reverse();
        var b0_a2b = [-0.01562499995, 1430488765e-13, -6911147651e-15, 7621095161e-16, -934935152e-16].reverse();
        function bessel0(x2) {
          var a3 = 0, a1 = 0, a22 = 0, y2 = x2 * x2;
          if (x2 < 8) {
            a1 = _horner(b0_a1a, y2);
            a22 = _horner(b0_a2a, y2);
            a3 = a1 / a22;
          } else {
            var xx = x2 - 0.785398164;
            y2 = 64 / y2;
            a1 = _horner(b0_a1b, y2);
            a22 = _horner(b0_a2b, y2);
            a3 = M2.sqrt(W2 / x2) * (M2.cos(xx) * a1 - M2.sin(xx) * a22 * 8 / x2);
          }
          return a3;
        }
        var b1_a1a = [72362614232, -7895059235, 2423968531e-1, -2972611439e-3, 15704.4826, -30.16036606].reverse();
        var b1_a2a = [144725228442, 2300535178, 1858330474e-2, 99447.43394, 376.9991397, 1].reverse();
        var b1_a1b = [1, 183105e-8, -3516396496e-14, 2457520174e-15, -240337019e-15].reverse();
        var b1_a2b = [0.04687499995, -2002690873e-13, 8449199096e-15, -88228987e-14, 105787412e-15].reverse();
        function bessel1(x2) {
          var a3 = 0, a1 = 0, a22 = 0, y2 = x2 * x2, xx = M2.abs(x2) - 2.356194491;
          if (Math.abs(x2) < 8) {
            a1 = x2 * _horner(b1_a1a, y2);
            a22 = _horner(b1_a2a, y2);
            a3 = a1 / a22;
          } else {
            y2 = 64 / y2;
            a1 = _horner(b1_a1b, y2);
            a22 = _horner(b1_a2b, y2);
            a3 = M2.sqrt(W2 / M2.abs(x2)) * (M2.cos(xx) * a1 - M2.sin(xx) * a22 * 8 / M2.abs(x2));
            if (x2 < 0)
              a3 = -a3;
          }
          return a3;
        }
        return function besselj2(x2, n3) {
          n3 = Math.round(n3);
          if (!isFinite(x2))
            return isNaN(x2) ? x2 : 0;
          if (n3 < 0)
            return (n3 % 2 ? -1 : 1) * besselj2(x2, -n3);
          if (x2 < 0)
            return (n3 % 2 ? -1 : 1) * besselj2(-x2, n3);
          if (n3 === 0)
            return bessel0(x2);
          if (n3 === 1)
            return bessel1(x2);
          if (x2 === 0)
            return 0;
          var ret = 0;
          if (x2 > n3) {
            ret = _bessel_iter(x2, n3, bessel0(x2), bessel1(x2), -1);
          } else {
            var m2 = 2 * M2.floor((n3 + M2.floor(M2.sqrt(40 * n3))) / 2);
            var jsum = false;
            var bjp = 0, sum = 0;
            var bj = 1, bjm = 0;
            var tox = 2 / x2;
            for (var j2 = m2; j2 > 0; j2--) {
              bjm = j2 * tox * bj - bjp;
              bjp = bj;
              bj = bjm;
              if (M2.abs(bj) > 1e10) {
                bj *= 1e-10;
                bjp *= 1e-10;
                ret *= 1e-10;
                sum *= 1e-10;
              }
              if (jsum)
                sum += bj;
              jsum = !jsum;
              if (j2 == n3)
                ret = bjp;
            }
            sum = 2 * sum - bj;
            ret /= sum;
          }
          return ret;
        };
      }();
      var bessely = function() {
        var W2 = 0.636619772;
        var b0_a1a = [-2957821389, 7062834065, -5123598036e-1, 1087988129e-2, -86327.92757, 228.4622733].reverse();
        var b0_a2a = [40076544269, 7452499648e-1, 7189466438e-3, 47447.2647, 226.1030244, 1].reverse();
        var b0_a1b = [1, -0.001098628627, 2734510407e-14, -2073370639e-15, 2093887211e-16].reverse();
        var b0_a2b = [-0.01562499995, 1430488765e-13, -6911147651e-15, 7621095161e-16, -934945152e-16].reverse();
        function bessel0(x2) {
          var a3 = 0, a1 = 0, a22 = 0, y2 = x2 * x2, xx = x2 - 0.785398164;
          if (x2 < 8) {
            a1 = _horner(b0_a1a, y2);
            a22 = _horner(b0_a2a, y2);
            a3 = a1 / a22 + W2 * besselj(x2, 0) * M2.log(x2);
          } else {
            y2 = 64 / y2;
            a1 = _horner(b0_a1b, y2);
            a22 = _horner(b0_a2b, y2);
            a3 = M2.sqrt(W2 / x2) * (M2.sin(xx) * a1 + M2.cos(xx) * a22 * 8 / x2);
          }
          return a3;
        }
        var b1_a1a = [-4900604943e3, 127527439e4, -51534381390, 7349264551e-1, -4237922726e-3, 8511.937935].reverse();
        var b1_a2a = [249958057e5, 424441966400, 3733650367, 2245904002e-2, 102042.605, 354.9632885, 1].reverse();
        var b1_a1b = [1, 183105e-8, -3516396496e-14, 2457520174e-15, -240337019e-15].reverse();
        var b1_a2b = [0.04687499995, -2002690873e-13, 8449199096e-15, -88228987e-14, 105787412e-15].reverse();
        function bessel1(x2) {
          var a3 = 0, a1 = 0, a22 = 0, y2 = x2 * x2, xx = x2 - 2.356194491;
          if (x2 < 8) {
            a1 = x2 * _horner(b1_a1a, y2);
            a22 = _horner(b1_a2a, y2);
            a3 = a1 / a22 + W2 * (besselj(x2, 1) * M2.log(x2) - 1 / x2);
          } else {
            y2 = 64 / y2;
            a1 = _horner(b1_a1b, y2);
            a22 = _horner(b1_a2b, y2);
            a3 = M2.sqrt(W2 / x2) * (M2.sin(xx) * a1 + M2.cos(xx) * a22 * 8 / x2);
          }
          return a3;
        }
        return _bessel_wrap(bessel0, bessel1, "BESSELY", 1, -1);
      }();
      var besseli = function() {
        var b0_a = [1, 3.5156229, 3.0899424, 1.2067492, 0.2659732, 0.0360768, 45813e-7].reverse();
        var b0_b = [0.39894228, 0.01328592, 225319e-8, -157565e-8, 916281e-8, -0.02057706, 0.02635537, -0.01647633, 392377e-8].reverse();
        function bessel0(x2) {
          if (x2 <= 3.75)
            return _horner(b0_a, x2 * x2 / (3.75 * 3.75));
          return M2.exp(M2.abs(x2)) / M2.sqrt(M2.abs(x2)) * _horner(b0_b, 3.75 / M2.abs(x2));
        }
        var b1_a = [0.5, 0.87890594, 0.51498869, 0.15084934, 0.02658733, 301532e-8, 32411e-8].reverse();
        var b1_b = [0.39894228, -0.03988024, -362018e-8, 163801e-8, -0.01031555, 0.02282967, -0.02895312, 0.01787654, -420059e-8].reverse();
        function bessel1(x2) {
          if (x2 < 3.75)
            return x2 * _horner(b1_a, x2 * x2 / (3.75 * 3.75));
          return (x2 < 0 ? -1 : 1) * M2.exp(M2.abs(x2)) / M2.sqrt(M2.abs(x2)) * _horner(b1_b, 3.75 / M2.abs(x2));
        }
        return function besseli2(x2, n3) {
          n3 = Math.round(n3);
          if (n3 === 0)
            return bessel0(x2);
          if (n3 === 1)
            return bessel1(x2);
          if (n3 < 0)
            return NaN;
          if (M2.abs(x2) === 0)
            return 0;
          if (x2 == Infinity)
            return Infinity;
          var ret = 0, j2, tox = 2 / M2.abs(x2), bip = 0, bi = 1, bim = 0;
          var m2 = 2 * M2.round((n3 + M2.round(M2.sqrt(40 * n3))) / 2);
          for (j2 = m2; j2 > 0; j2--) {
            bim = j2 * tox * bi + bip;
            bip = bi;
            bi = bim;
            if (M2.abs(bi) > 1e10) {
              bi *= 1e-10;
              bip *= 1e-10;
              ret *= 1e-10;
            }
            if (j2 == n3)
              ret = bip;
          }
          ret *= besseli2(x2, 0) / bi;
          return x2 < 0 && n3 % 2 ? -ret : ret;
        };
      }();
      var besselk = function() {
        var b0_a = [-0.57721566, 0.4227842, 0.23069756, 0.0348859, 262698e-8, 1075e-7, 74e-7].reverse();
        var b0_b = [1.25331414, -0.07832358, 0.02189568, -0.01062446, 587872e-8, -25154e-7, 53208e-8].reverse();
        function bessel0(x2) {
          if (x2 <= 2)
            return -M2.log(x2 / 2) * besseli(x2, 0) + _horner(b0_a, x2 * x2 / 4);
          return M2.exp(-x2) / M2.sqrt(x2) * _horner(b0_b, 2 / x2);
        }
        var b1_a = [1, 0.15443144, -0.67278579, -0.18156897, -0.01919402, -110404e-8, -4686e-8].reverse();
        var b1_b = [1.25331414, 0.23498619, -0.0365562, 0.01504268, -780353e-8, 325614e-8, -68245e-8].reverse();
        function bessel1(x2) {
          if (x2 <= 2)
            return M2.log(x2 / 2) * besseli(x2, 1) + 1 / x2 * _horner(b1_a, x2 * x2 / 4);
          return M2.exp(-x2) / M2.sqrt(x2) * _horner(b1_b, 2 / x2);
        }
        return _bessel_wrap(bessel0, bessel1, "BESSELK", 2, 1);
      }();
      BESSEL2.besselj = besselj;
      BESSEL2.bessely = bessely;
      BESSEL2.besseli = besseli;
      BESSEL2.besselk = besselk;
    });
  }
});

// node_modules/@handsontable/formulajs/lib/engineering.js
var require_engineering = __commonJS({
  "node_modules/@handsontable/formulajs/lib/engineering.js"(exports) {
    var error2 = require_error();
    var jStat = require_jstat();
    var text = require_text();
    var utils = require_common();
    var bessel = require_bessel();
    function isValidBinaryNumber(number) {
      return /^[01]{1,10}$/.test(number);
    }
    exports.BESSELI = function(x2, n3) {
      x2 = utils.parseNumber(x2);
      n3 = utils.parseNumber(n3);
      if (utils.anyIsError(x2, n3)) {
        return error2.value;
      }
      return bessel.besseli(x2, n3);
    };
    exports.BESSELJ = function(x2, n3) {
      x2 = utils.parseNumber(x2);
      n3 = utils.parseNumber(n3);
      if (utils.anyIsError(x2, n3)) {
        return error2.value;
      }
      return bessel.besselj(x2, n3);
    };
    exports.BESSELK = function(x2, n3) {
      x2 = utils.parseNumber(x2);
      n3 = utils.parseNumber(n3);
      if (utils.anyIsError(x2, n3)) {
        return error2.value;
      }
      return bessel.besselk(x2, n3);
    };
    exports.BESSELY = function(x2, n3) {
      x2 = utils.parseNumber(x2);
      n3 = utils.parseNumber(n3);
      if (utils.anyIsError(x2, n3)) {
        return error2.value;
      }
      return bessel.bessely(x2, n3);
    };
    exports.BIN2DEC = function(number) {
      if (!isValidBinaryNumber(number)) {
        return error2.num;
      }
      var result = parseInt(number, 2);
      var stringified = number.toString();
      if (stringified.length === 10 && stringified.substring(0, 1) === "1") {
        return parseInt(stringified.substring(1), 2) - 512;
      } else {
        return result;
      }
    };
    exports.BIN2HEX = function(number, places) {
      if (!isValidBinaryNumber(number)) {
        return error2.num;
      }
      var stringified = number.toString();
      if (stringified.length === 10 && stringified.substring(0, 1) === "1") {
        return (1099511627264 + parseInt(stringified.substring(1), 2)).toString(16);
      }
      var result = parseInt(number, 2).toString(16);
      if (places === void 0) {
        return result;
      } else {
        if (isNaN(places)) {
          return error2.value;
        }
        if (places < 0) {
          return error2.num;
        }
        places = Math.floor(places);
        return places >= result.length ? text.REPT("0", places - result.length) + result : error2.num;
      }
    };
    exports.BIN2OCT = function(number, places) {
      if (!isValidBinaryNumber(number)) {
        return error2.num;
      }
      var stringified = number.toString();
      if (stringified.length === 10 && stringified.substring(0, 1) === "1") {
        return (1073741312 + parseInt(stringified.substring(1), 2)).toString(8);
      }
      var result = parseInt(number, 2).toString(8);
      if (places === void 0) {
        return result;
      } else {
        if (isNaN(places)) {
          return error2.value;
        }
        if (places < 0) {
          return error2.num;
        }
        places = Math.floor(places);
        return places >= result.length ? text.REPT("0", places - result.length) + result : error2.num;
      }
    };
    exports.BITAND = function(number1, number2) {
      number1 = utils.parseNumber(number1);
      number2 = utils.parseNumber(number2);
      if (utils.anyIsError(number1, number2)) {
        return error2.value;
      }
      if (number1 < 0 || number2 < 0) {
        return error2.num;
      }
      if (Math.floor(number1) !== number1 || Math.floor(number2) !== number2) {
        return error2.num;
      }
      if (number1 > 281474976710655 || number2 > 281474976710655) {
        return error2.num;
      }
      return number1 & number2;
    };
    exports.BITLSHIFT = function(number, shift) {
      number = utils.parseNumber(number);
      shift = utils.parseNumber(shift);
      if (utils.anyIsError(number, shift)) {
        return error2.value;
      }
      if (number < 0) {
        return error2.num;
      }
      if (Math.floor(number) !== number) {
        return error2.num;
      }
      if (number > 281474976710655) {
        return error2.num;
      }
      if (Math.abs(shift) > 53) {
        return error2.num;
      }
      return shift >= 0 ? number << shift : number >> -shift;
    };
    exports.BITOR = function(number1, number2) {
      number1 = utils.parseNumber(number1);
      number2 = utils.parseNumber(number2);
      if (utils.anyIsError(number1, number2)) {
        return error2.value;
      }
      if (number1 < 0 || number2 < 0) {
        return error2.num;
      }
      if (Math.floor(number1) !== number1 || Math.floor(number2) !== number2) {
        return error2.num;
      }
      if (number1 > 281474976710655 || number2 > 281474976710655) {
        return error2.num;
      }
      return number1 | number2;
    };
    exports.BITRSHIFT = function(number, shift) {
      number = utils.parseNumber(number);
      shift = utils.parseNumber(shift);
      if (utils.anyIsError(number, shift)) {
        return error2.value;
      }
      if (number < 0) {
        return error2.num;
      }
      if (Math.floor(number) !== number) {
        return error2.num;
      }
      if (number > 281474976710655) {
        return error2.num;
      }
      if (Math.abs(shift) > 53) {
        return error2.num;
      }
      return shift >= 0 ? number >> shift : number << -shift;
    };
    exports.BITXOR = function(number1, number2) {
      number1 = utils.parseNumber(number1);
      number2 = utils.parseNumber(number2);
      if (utils.anyIsError(number1, number2)) {
        return error2.value;
      }
      if (number1 < 0 || number2 < 0) {
        return error2.num;
      }
      if (Math.floor(number1) !== number1 || Math.floor(number2) !== number2) {
        return error2.num;
      }
      if (number1 > 281474976710655 || number2 > 281474976710655) {
        return error2.num;
      }
      return number1 ^ number2;
    };
    exports.COMPLEX = function(real, imaginary, suffix) {
      real = utils.parseNumber(real);
      imaginary = utils.parseNumber(imaginary);
      if (utils.anyIsError(real, imaginary)) {
        return real;
      }
      suffix = suffix === void 0 ? "i" : suffix;
      if (suffix !== "i" && suffix !== "j") {
        return error2.value;
      }
      if (real === 0 && imaginary === 0) {
        return 0;
      } else if (real === 0) {
        return imaginary === 1 ? suffix : imaginary.toString() + suffix;
      } else if (imaginary === 0) {
        return real.toString();
      } else {
        var sign = imaginary > 0 ? "+" : "";
        return real.toString() + sign + (imaginary === 1 ? suffix : imaginary.toString() + suffix);
      }
    };
    exports.CONVERT = function(number, from_unit, to_unit) {
      number = utils.parseNumber(number);
      if (number instanceof Error) {
        return number;
      }
      var units = [
        ["a.u. of action", "?", null, "action", false, false, 105457168181818e-48],
        ["a.u. of charge", "e", null, "electric_charge", false, false, 160217653141414e-33],
        ["a.u. of energy", "Eh", null, "energy", false, false, 435974417757576e-32],
        ["a.u. of length", "a?", null, "length", false, false, 529177210818182e-25],
        ["a.u. of mass", "m?", null, "mass", false, false, 910938261616162e-45],
        ["a.u. of time", "?/Eh", null, "time", false, false, 241888432650516e-31],
        ["admiralty knot", "admkn", null, "speed", false, true, 0.514773333],
        ["ampere", "A", null, "electric_current", true, false, 1],
        ["ampere per meter", "A/m", null, "magnetic_field_intensity", true, false, 1],
        ["ångström", "Å", ["ang"], "length", false, true, 1e-10],
        ["are", "ar", null, "area", false, true, 100],
        ["astronomical unit", "ua", null, "length", false, false, 149597870691667e-25],
        ["bar", "bar", null, "pressure", false, false, 1e5],
        ["barn", "b", null, "area", false, false, 1e-28],
        ["becquerel", "Bq", null, "radioactivity", true, false, 1],
        ["bit", "bit", ["b"], "information", false, true, 1],
        ["btu", "BTU", ["btu"], "energy", false, true, 1055.05585262],
        ["byte", "byte", null, "information", false, true, 8],
        ["candela", "cd", null, "luminous_intensity", true, false, 1],
        ["candela per square metre", "cd/m?", null, "luminance", true, false, 1],
        ["coulomb", "C", null, "electric_charge", true, false, 1],
        ["cubic ångström", "ang3", ["ang^3"], "volume", false, true, 1e-30],
        ["cubic foot", "ft3", ["ft^3"], "volume", false, true, 0.028316846592],
        ["cubic inch", "in3", ["in^3"], "volume", false, true, 16387064e-12],
        ["cubic light-year", "ly3", ["ly^3"], "volume", false, true, 846786664623715e-61],
        ["cubic metre", "m?", null, "volume", true, true, 1],
        ["cubic mile", "mi3", ["mi^3"], "volume", false, true, 416818182544058e-5],
        ["cubic nautical mile", "Nmi3", ["Nmi^3"], "volume", false, true, 6352182208],
        ["cubic Pica", "Pica3", ["Picapt3", "Pica^3", "Picapt^3"], "volume", false, true, 758660370370369e-22],
        ["cubic yard", "yd3", ["yd^3"], "volume", false, true, 0.764554857984],
        ["cup", "cup", null, "volume", false, true, 2365882365e-13],
        ["dalton", "Da", ["u"], "mass", false, false, 166053886282828e-41],
        ["day", "d", ["day"], "time", false, true, 86400],
        ["degree", "°", null, "angle", false, false, 0.0174532925199433],
        ["degrees Rankine", "Rank", null, "temperature", false, true, 0.555555555555556],
        ["dyne", "dyn", ["dy"], "force", false, true, 1e-5],
        ["electronvolt", "eV", ["ev"], "energy", false, true, 1.60217656514141],
        ["ell", "ell", null, "length", false, true, 1.143],
        ["erg", "erg", ["e"], "energy", false, true, 1e-7],
        ["farad", "F", null, "electric_capacitance", true, false, 1],
        ["fluid ounce", "oz", null, "volume", false, true, 295735295625e-16],
        ["foot", "ft", null, "length", false, true, 0.3048],
        ["foot-pound", "flb", null, "energy", false, true, 1.3558179483314],
        ["gal", "Gal", null, "acceleration", false, false, 0.01],
        ["gallon", "gal", null, "volume", false, true, 0.003785411784],
        ["gauss", "G", ["ga"], "magnetic_flux_density", false, true, 1],
        ["grain", "grain", null, "mass", false, true, 647989e-10],
        ["gram", "g", null, "mass", false, true, 1e-3],
        ["gray", "Gy", null, "absorbed_dose", true, false, 1],
        ["gross registered ton", "GRT", ["regton"], "volume", false, true, 2.8316846592],
        ["hectare", "ha", null, "area", false, true, 1e4],
        ["henry", "H", null, "inductance", true, false, 1],
        ["hertz", "Hz", null, "frequency", true, false, 1],
        ["horsepower", "HP", ["h"], "power", false, true, 745.69987158227],
        ["horsepower-hour", "HPh", ["hh", "hph"], "energy", false, true, 2684519538e-3],
        ["hour", "h", ["hr"], "time", false, true, 3600],
        ["imperial gallon (U.K.)", "uk_gal", null, "volume", false, true, 454609e-8],
        ["imperial hundredweight", "lcwt", ["uk_cwt", "hweight"], "mass", false, true, 50.802345],
        ["imperial quart (U.K)", "uk_qt", null, "volume", false, true, 0.0011365225],
        ["imperial ton", "brton", ["uk_ton", "LTON"], "mass", false, true, 1016.046909],
        ["inch", "in", null, "length", false, true, 0.0254],
        ["international acre", "uk_acre", null, "area", false, true, 4046.8564224],
        ["IT calorie", "cal", null, "energy", false, true, 4.1868],
        ["joule", "J", null, "energy", true, true, 1],
        ["katal", "kat", null, "catalytic_activity", true, false, 1],
        ["kelvin", "K", ["kel"], "temperature", true, true, 1],
        ["kilogram", "kg", null, "mass", true, true, 1],
        ["knot", "kn", null, "speed", false, true, 0.514444444444444],
        ["light-year", "ly", null, "length", false, true, 9460730472580800],
        ["litre", "L", ["l", "lt"], "volume", false, true, 1e-3],
        ["lumen", "lm", null, "luminous_flux", true, false, 1],
        ["lux", "lx", null, "illuminance", true, false, 1],
        ["maxwell", "Mx", null, "magnetic_flux", false, false, 1e-18],
        ["measurement ton", "MTON", null, "volume", false, true, 1.13267386368],
        ["meter per hour", "m/h", ["m/hr"], "speed", false, true, 27777777777778e-17],
        ["meter per second", "m/s", ["m/sec"], "speed", true, true, 1],
        ["meter per second squared", "m?s??", null, "acceleration", true, false, 1],
        ["parsec", "pc", ["parsec"], "length", false, true, 30856775814671900],
        ["meter squared per second", "m?/s", null, "kinematic_viscosity", true, false, 1],
        ["metre", "m", null, "length", true, true, 1],
        ["miles per hour", "mph", null, "speed", false, true, 0.44704],
        ["millimetre of mercury", "mmHg", null, "pressure", false, false, 133.322],
        ["minute", "?", null, "angle", false, false, 290888208665722e-18],
        ["minute", "min", ["mn"], "time", false, true, 60],
        ["modern teaspoon", "tspm", null, "volume", false, true, 5e-6],
        ["mole", "mol", null, "amount_of_substance", true, false, 1],
        ["morgen", "Morgen", null, "area", false, true, 2500],
        ["n.u. of action", "?", null, "action", false, false, 105457168181818e-48],
        ["n.u. of mass", "m?", null, "mass", false, false, 910938261616162e-45],
        ["n.u. of speed", "c?", null, "speed", false, false, 299792458],
        ["n.u. of time", "?/(me?c??)", null, "time", false, false, 128808866778687e-35],
        ["nautical mile", "M", ["Nmi"], "length", false, true, 1852],
        ["newton", "N", null, "force", true, true, 1],
        ["œrsted", "Oe ", null, "magnetic_field_intensity", false, false, 79.5774715459477],
        ["ohm", "Ω", null, "electric_resistance", true, false, 1],
        ["ounce mass", "ozm", null, "mass", false, true, 0.028349523125],
        ["pascal", "Pa", null, "pressure", true, false, 1],
        ["pascal second", "Pa?s", null, "dynamic_viscosity", true, false, 1],
        ["pferdestärke", "PS", null, "power", false, true, 735.49875],
        ["phot", "ph", null, "illuminance", false, false, 1e-4],
        ["pica (1/6 inch)", "pica", null, "length", false, true, 35277777777778e-17],
        ["pica (1/72 inch)", "Pica", ["Picapt"], "length", false, true, 0.00423333333333333],
        ["poise", "P", null, "dynamic_viscosity", false, false, 0.1],
        ["pond", "pond", null, "force", false, true, 980665e-8],
        ["pound force", "lbf", null, "force", false, true, 4.4482216152605],
        ["pound mass", "lbm", null, "mass", false, true, 0.45359237],
        ["quart", "qt", null, "volume", false, true, 946352946e-12],
        ["radian", "rad", null, "angle", true, false, 1],
        ["second", "?", null, "angle", false, false, 484813681109536e-20],
        ["second", "s", ["sec"], "time", true, true, 1],
        ["short hundredweight", "cwt", ["shweight"], "mass", false, true, 45.359237],
        ["siemens", "S", null, "electrical_conductance", true, false, 1],
        ["sievert", "Sv", null, "equivalent_dose", true, false, 1],
        ["slug", "sg", null, "mass", false, true, 14.59390294],
        ["square ångström", "ang2", ["ang^2"], "area", false, true, 1e-20],
        ["square foot", "ft2", ["ft^2"], "area", false, true, 0.09290304],
        ["square inch", "in2", ["in^2"], "area", false, true, 64516e-8],
        ["square light-year", "ly2", ["ly^2"], "area", false, true, 895054210748189e17],
        ["square meter", "m?", null, "area", true, true, 1],
        ["square mile", "mi2", ["mi^2"], "area", false, true, 2589988110336e-6],
        ["square nautical mile", "Nmi2", ["Nmi^2"], "area", false, true, 3429904],
        ["square Pica", "Pica2", ["Picapt2", "Pica^2", "Picapt^2"], "area", false, true, 1792111111111e-17],
        ["square yard", "yd2", ["yd^2"], "area", false, true, 0.83612736],
        ["statute mile", "mi", null, "length", false, true, 1609.344],
        ["steradian", "sr", null, "solid_angle", true, false, 1],
        ["stilb", "sb", null, "luminance", false, false, 1e-4],
        ["stokes", "St", null, "kinematic_viscosity", false, false, 1e-4],
        ["stone", "stone", null, "mass", false, true, 6.35029318],
        ["tablespoon", "tbs", null, "volume", false, true, 147868e-10],
        ["teaspoon", "tsp", null, "volume", false, true, 492892e-11],
        ["tesla", "T", null, "magnetic_flux_density", true, true, 1],
        ["thermodynamic calorie", "c", null, "energy", false, true, 4.184],
        ["ton", "ton", null, "mass", false, true, 907.18474],
        ["tonne", "t", null, "mass", false, false, 1e3],
        ["U.K. pint", "uk_pt", null, "volume", false, true, 56826125e-11],
        ["U.S. bushel", "bushel", null, "volume", false, true, 0.03523907],
        ["U.S. oil barrel", "barrel", null, "volume", false, true, 0.158987295],
        ["U.S. pint", "pt", ["us_pt"], "volume", false, true, 473176473e-12],
        ["U.S. survey mile", "survey_mi", null, "length", false, true, 1609.347219],
        ["U.S. survey/statute acre", "us_acre", null, "area", false, true, 4046.87261],
        ["volt", "V", null, "voltage", true, false, 1],
        ["watt", "W", null, "power", true, true, 1],
        ["watt-hour", "Wh", ["wh"], "energy", false, true, 3600],
        ["weber", "Wb", null, "magnetic_flux", true, false, 1],
        ["yard", "yd", null, "length", false, true, 0.9144],
        ["year", "yr", null, "time", false, true, 31557600]
      ];
      var binary_prefixes = {
        Yi: ["yobi", 80, 12089258196146292e8, "Yi", "yotta"],
        Zi: ["zebi", 70, 11805916207174113e5, "Zi", "zetta"],
        Ei: ["exbi", 60, 1152921504606847e3, "Ei", "exa"],
        Pi: ["pebi", 50, 1125899906842624, "Pi", "peta"],
        Ti: ["tebi", 40, 1099511627776, "Ti", "tera"],
        Gi: ["gibi", 30, 1073741824, "Gi", "giga"],
        Mi: ["mebi", 20, 1048576, "Mi", "mega"],
        ki: ["kibi", 10, 1024, "ki", "kilo"]
      };
      var unit_prefixes = {
        Y: ["yotta", 1e24, "Y"],
        Z: ["zetta", 1e21, "Z"],
        E: ["exa", 1e18, "E"],
        P: ["peta", 1e15, "P"],
        T: ["tera", 1e12, "T"],
        G: ["giga", 1e9, "G"],
        M: ["mega", 1e6, "M"],
        k: ["kilo", 1e3, "k"],
        h: ["hecto", 100, "h"],
        e: ["dekao", 10, "e"],
        d: ["deci", 0.1, "d"],
        c: ["centi", 0.01, "c"],
        m: ["milli", 1e-3, "m"],
        u: ["micro", 1e-6, "u"],
        n: ["nano", 1e-9, "n"],
        p: ["pico", 1e-12, "p"],
        f: ["femto", 1e-15, "f"],
        a: ["atto", 1e-18, "a"],
        z: ["zepto", 1e-21, "z"],
        y: ["yocto", 1e-24, "y"]
      };
      var from2 = null;
      var to = null;
      var base_from_unit = from_unit;
      var base_to_unit = to_unit;
      var from_multiplier = 1;
      var to_multiplier = 1;
      var alt;
      for (var i3 = 0; i3 < units.length; i3++) {
        alt = units[i3][2] === null ? [] : units[i3][2];
        if (units[i3][1] === base_from_unit || alt.indexOf(base_from_unit) >= 0) {
          from2 = units[i3];
        }
        if (units[i3][1] === base_to_unit || alt.indexOf(base_to_unit) >= 0) {
          to = units[i3];
        }
      }
      if (from2 === null) {
        var from_binary_prefix = binary_prefixes[from_unit.substring(0, 2)];
        var from_unit_prefix = unit_prefixes[from_unit.substring(0, 1)];
        if (from_unit.substring(0, 2) === "da") {
          from_unit_prefix = ["dekao", 10, "da"];
        }
        if (from_binary_prefix) {
          from_multiplier = from_binary_prefix[2];
          base_from_unit = from_unit.substring(2);
        } else if (from_unit_prefix) {
          from_multiplier = from_unit_prefix[1];
          base_from_unit = from_unit.substring(from_unit_prefix[2].length);
        }
        for (var j2 = 0; j2 < units.length; j2++) {
          alt = units[j2][2] === null ? [] : units[j2][2];
          if (units[j2][1] === base_from_unit || alt.indexOf(base_from_unit) >= 0) {
            from2 = units[j2];
          }
        }
      }
      if (to === null) {
        var to_binary_prefix = binary_prefixes[to_unit.substring(0, 2)];
        var to_unit_prefix = unit_prefixes[to_unit.substring(0, 1)];
        if (to_unit.substring(0, 2) === "da") {
          to_unit_prefix = ["dekao", 10, "da"];
        }
        if (to_binary_prefix) {
          to_multiplier = to_binary_prefix[2];
          base_to_unit = to_unit.substring(2);
        } else if (to_unit_prefix) {
          to_multiplier = to_unit_prefix[1];
          base_to_unit = to_unit.substring(to_unit_prefix[2].length);
        }
        for (var k2 = 0; k2 < units.length; k2++) {
          alt = units[k2][2] === null ? [] : units[k2][2];
          if (units[k2][1] === base_to_unit || alt.indexOf(base_to_unit) >= 0) {
            to = units[k2];
          }
        }
      }
      if (from2 === null || to === null) {
        return error2.na;
      }
      if (from2[3] !== to[3]) {
        return error2.na;
      }
      return number * from2[6] * from_multiplier / (to[6] * to_multiplier);
    };
    exports.DEC2BIN = function(number, places) {
      number = utils.parseNumber(number);
      if (number instanceof Error) {
        return number;
      }
      if (!/^-?[0-9]{1,3}$/.test(number) || number < -512 || number > 511) {
        return error2.num;
      }
      if (number < 0) {
        return "1" + text.REPT("0", 9 - (512 + number).toString(2).length) + (512 + number).toString(2);
      }
      var result = parseInt(number, 10).toString(2);
      if (typeof places === "undefined") {
        return result;
      } else {
        if (isNaN(places)) {
          return error2.value;
        }
        if (places < 0) {
          return error2.num;
        }
        places = Math.floor(places);
        return places >= result.length ? text.REPT("0", places - result.length) + result : error2.num;
      }
    };
    exports.DEC2HEX = function(number, places) {
      number = utils.parseNumber(number);
      if (number instanceof Error) {
        return number;
      }
      if (!/^-?[0-9]{1,12}$/.test(number) || number < -549755813888 || number > 549755813887) {
        return error2.num;
      }
      if (number < 0) {
        return (1099511627776 + number).toString(16);
      }
      var result = parseInt(number, 10).toString(16);
      if (typeof places === "undefined") {
        return result;
      } else {
        if (isNaN(places)) {
          return error2.value;
        }
        if (places < 0) {
          return error2.num;
        }
        places = Math.floor(places);
        return places >= result.length ? text.REPT("0", places - result.length) + result : error2.num;
      }
    };
    exports.DEC2OCT = function(number, places) {
      number = utils.parseNumber(number);
      if (number instanceof Error) {
        return number;
      }
      if (!/^-?[0-9]{1,9}$/.test(number) || number < -536870912 || number > 536870911) {
        return error2.num;
      }
      if (number < 0) {
        return (1073741824 + number).toString(8);
      }
      var result = parseInt(number, 10).toString(8);
      if (typeof places === "undefined") {
        return result;
      } else {
        if (isNaN(places)) {
          return error2.value;
        }
        if (places < 0) {
          return error2.num;
        }
        places = Math.floor(places);
        return places >= result.length ? text.REPT("0", places - result.length) + result : error2.num;
      }
    };
    exports.DELTA = function(number1, number2) {
      number2 = number2 === void 0 ? 0 : number2;
      number1 = utils.parseNumber(number1);
      number2 = utils.parseNumber(number2);
      if (utils.anyIsError(number1, number2)) {
        return error2.value;
      }
      return number1 === number2 ? 1 : 0;
    };
    exports.ERF = function(lower_bound, upper_bound) {
      upper_bound = upper_bound === void 0 ? 0 : upper_bound;
      lower_bound = utils.parseNumber(lower_bound);
      upper_bound = utils.parseNumber(upper_bound);
      if (utils.anyIsError(lower_bound, upper_bound)) {
        return error2.value;
      }
      return jStat.erf(lower_bound);
    };
    exports.ERF.PRECISE = function() {
      throw new Error("ERF.PRECISE is not implemented");
    };
    exports.ERFC = function(x2) {
      if (isNaN(x2)) {
        return error2.value;
      }
      return jStat.erfc(x2);
    };
    exports.ERFC.PRECISE = function() {
      throw new Error("ERFC.PRECISE is not implemented");
    };
    exports.GESTEP = function(number, step) {
      step = step || 0;
      number = utils.parseNumber(number);
      if (utils.anyIsError(step, number)) {
        return number;
      }
      return number >= step ? 1 : 0;
    };
    exports.HEX2BIN = function(number, places) {
      if (!/^[0-9A-Fa-f]{1,10}$/.test(number)) {
        return error2.num;
      }
      var negative = number.length === 10 && number.substring(0, 1).toLowerCase() === "f" ? true : false;
      var decimal = negative ? parseInt(number, 16) - 1099511627776 : parseInt(number, 16);
      if (decimal < -512 || decimal > 511) {
        return error2.num;
      }
      if (negative) {
        return "1" + text.REPT("0", 9 - (512 + decimal).toString(2).length) + (512 + decimal).toString(2);
      }
      var result = decimal.toString(2);
      if (places === void 0) {
        return result;
      } else {
        if (isNaN(places)) {
          return error2.value;
        }
        if (places < 0) {
          return error2.num;
        }
        places = Math.floor(places);
        return places >= result.length ? text.REPT("0", places - result.length) + result : error2.num;
      }
    };
    exports.HEX2DEC = function(number) {
      if (!/^[0-9A-Fa-f]{1,10}$/.test(number)) {
        return error2.num;
      }
      var decimal = parseInt(number, 16);
      return decimal >= 549755813888 ? decimal - 1099511627776 : decimal;
    };
    exports.HEX2OCT = function(number, places) {
      if (!/^[0-9A-Fa-f]{1,10}$/.test(number)) {
        return error2.num;
      }
      var decimal = parseInt(number, 16);
      if (decimal > 536870911 && decimal < 1098974756864) {
        return error2.num;
      }
      if (decimal >= 1098974756864) {
        return (decimal - 1098437885952).toString(8);
      }
      var result = decimal.toString(8);
      if (places === void 0) {
        return result;
      } else {
        if (isNaN(places)) {
          return error2.value;
        }
        if (places < 0) {
          return error2.num;
        }
        places = Math.floor(places);
        return places >= result.length ? text.REPT("0", places - result.length) + result : error2.num;
      }
    };
    exports.IMABS = function(inumber) {
      var x2 = exports.IMREAL(inumber);
      var y2 = exports.IMAGINARY(inumber);
      if (utils.anyIsError(x2, y2)) {
        return error2.value;
      }
      return Math.sqrt(Math.pow(x2, 2) + Math.pow(y2, 2));
    };
    exports.IMAGINARY = function(inumber) {
      if (inumber === void 0 || inumber === true || inumber === false) {
        return error2.value;
      }
      if (inumber === 0 || inumber === "0") {
        return 0;
      }
      if (["i", "j"].indexOf(inumber) >= 0) {
        return 1;
      }
      inumber = inumber.replace("+i", "+1i").replace("-i", "-1i").replace("+j", "+1j").replace("-j", "-1j");
      var plus = inumber.indexOf("+");
      var minus = inumber.indexOf("-");
      if (plus === 0) {
        plus = inumber.indexOf("+", 1);
      }
      if (minus === 0) {
        minus = inumber.indexOf("-", 1);
      }
      var last = inumber.substring(inumber.length - 1, inumber.length);
      var unit = last === "i" || last === "j";
      if (plus >= 0 || minus >= 0) {
        if (!unit) {
          return error2.num;
        }
        if (plus >= 0) {
          return isNaN(inumber.substring(0, plus)) || isNaN(inumber.substring(plus + 1, inumber.length - 1)) ? error2.num : Number(inumber.substring(plus + 1, inumber.length - 1));
        } else {
          return isNaN(inumber.substring(0, minus)) || isNaN(inumber.substring(minus + 1, inumber.length - 1)) ? error2.num : -Number(inumber.substring(minus + 1, inumber.length - 1));
        }
      } else {
        if (unit) {
          return isNaN(inumber.substring(0, inumber.length - 1)) ? error2.num : inumber.substring(0, inumber.length - 1);
        } else {
          return isNaN(inumber) ? error2.num : 0;
        }
      }
    };
    exports.IMARGUMENT = function(inumber) {
      var x2 = exports.IMREAL(inumber);
      var y2 = exports.IMAGINARY(inumber);
      if (utils.anyIsError(x2, y2)) {
        return error2.value;
      }
      if (x2 === 0 && y2 === 0) {
        return error2.div0;
      }
      if (x2 === 0 && y2 > 0) {
        return Math.PI / 2;
      }
      if (x2 === 0 && y2 < 0) {
        return -Math.PI / 2;
      }
      if (y2 === 0 && x2 > 0) {
        return 0;
      }
      if (y2 === 0 && x2 < 0) {
        return -Math.PI;
      }
      if (x2 > 0) {
        return Math.atan(y2 / x2);
      } else if (x2 < 0 && y2 >= 0) {
        return Math.atan(y2 / x2) + Math.PI;
      } else {
        return Math.atan(y2 / x2) - Math.PI;
      }
    };
    exports.IMCONJUGATE = function(inumber) {
      var x2 = exports.IMREAL(inumber);
      var y2 = exports.IMAGINARY(inumber);
      if (utils.anyIsError(x2, y2)) {
        return error2.value;
      }
      var unit = inumber.substring(inumber.length - 1);
      unit = unit === "i" || unit === "j" ? unit : "i";
      return y2 !== 0 ? exports.COMPLEX(x2, -y2, unit) : inumber;
    };
    exports.IMCOS = function(inumber) {
      var x2 = exports.IMREAL(inumber);
      var y2 = exports.IMAGINARY(inumber);
      if (utils.anyIsError(x2, y2)) {
        return error2.value;
      }
      var unit = inumber.substring(inumber.length - 1);
      unit = unit === "i" || unit === "j" ? unit : "i";
      return exports.COMPLEX(Math.cos(x2) * (Math.exp(y2) + Math.exp(-y2)) / 2, -Math.sin(x2) * (Math.exp(y2) - Math.exp(-y2)) / 2, unit);
    };
    exports.IMCOSH = function(inumber) {
      var x2 = exports.IMREAL(inumber);
      var y2 = exports.IMAGINARY(inumber);
      if (utils.anyIsError(x2, y2)) {
        return error2.value;
      }
      var unit = inumber.substring(inumber.length - 1);
      unit = unit === "i" || unit === "j" ? unit : "i";
      return exports.COMPLEX(Math.cos(y2) * (Math.exp(x2) + Math.exp(-x2)) / 2, Math.sin(y2) * (Math.exp(x2) - Math.exp(-x2)) / 2, unit);
    };
    exports.IMCOT = function(inumber) {
      var x2 = exports.IMREAL(inumber);
      var y2 = exports.IMAGINARY(inumber);
      if (utils.anyIsError(x2, y2)) {
        return error2.value;
      }
      return exports.IMDIV(exports.IMCOS(inumber), exports.IMSIN(inumber));
    };
    exports.IMDIV = function(inumber1, inumber2) {
      var a3 = exports.IMREAL(inumber1);
      var b2 = exports.IMAGINARY(inumber1);
      var c3 = exports.IMREAL(inumber2);
      var d3 = exports.IMAGINARY(inumber2);
      if (utils.anyIsError(a3, b2, c3, d3)) {
        return error2.value;
      }
      var unit1 = inumber1.substring(inumber1.length - 1);
      var unit2 = inumber2.substring(inumber2.length - 1);
      var unit = "i";
      if (unit1 === "j") {
        unit = "j";
      } else if (unit2 === "j") {
        unit = "j";
      }
      if (c3 === 0 && d3 === 0) {
        return error2.num;
      }
      var den = c3 * c3 + d3 * d3;
      return exports.COMPLEX((a3 * c3 + b2 * d3) / den, (b2 * c3 - a3 * d3) / den, unit);
    };
    exports.IMEXP = function(inumber) {
      var x2 = exports.IMREAL(inumber);
      var y2 = exports.IMAGINARY(inumber);
      if (utils.anyIsError(x2, y2)) {
        return error2.value;
      }
      var unit = inumber.substring(inumber.length - 1);
      unit = unit === "i" || unit === "j" ? unit : "i";
      var e3 = Math.exp(x2);
      return exports.COMPLEX(e3 * Math.cos(y2), e3 * Math.sin(y2), unit);
    };
    exports.IMLN = function(inumber) {
      var x2 = exports.IMREAL(inumber);
      var y2 = exports.IMAGINARY(inumber);
      if (utils.anyIsError(x2, y2)) {
        return error2.value;
      }
      var unit = inumber.substring(inumber.length - 1);
      unit = unit === "i" || unit === "j" ? unit : "i";
      return exports.COMPLEX(Math.log(Math.sqrt(x2 * x2 + y2 * y2)), Math.atan(y2 / x2), unit);
    };
    exports.IMLOG10 = function(inumber) {
      var x2 = exports.IMREAL(inumber);
      var y2 = exports.IMAGINARY(inumber);
      if (utils.anyIsError(x2, y2)) {
        return error2.value;
      }
      var unit = inumber.substring(inumber.length - 1);
      unit = unit === "i" || unit === "j" ? unit : "i";
      return exports.COMPLEX(Math.log(Math.sqrt(x2 * x2 + y2 * y2)) / Math.log(10), Math.atan(y2 / x2) / Math.log(10), unit);
    };
    exports.IMLOG2 = function(inumber) {
      var x2 = exports.IMREAL(inumber);
      var y2 = exports.IMAGINARY(inumber);
      if (utils.anyIsError(x2, y2)) {
        return error2.value;
      }
      var unit = inumber.substring(inumber.length - 1);
      unit = unit === "i" || unit === "j" ? unit : "i";
      return exports.COMPLEX(Math.log(Math.sqrt(x2 * x2 + y2 * y2)) / Math.log(2), Math.atan(y2 / x2) / Math.log(2), unit);
    };
    exports.IMPOWER = function(inumber, number) {
      number = utils.parseNumber(number);
      var x2 = exports.IMREAL(inumber);
      var y2 = exports.IMAGINARY(inumber);
      if (utils.anyIsError(number, x2, y2)) {
        return error2.value;
      }
      var unit = inumber.substring(inumber.length - 1);
      unit = unit === "i" || unit === "j" ? unit : "i";
      var p3 = Math.pow(exports.IMABS(inumber), number);
      var t3 = exports.IMARGUMENT(inumber);
      return exports.COMPLEX(p3 * Math.cos(number * t3), p3 * Math.sin(number * t3), unit);
    };
    exports.IMPRODUCT = function() {
      var result = arguments[0];
      if (!arguments.length) {
        return error2.value;
      }
      for (var i3 = 1; i3 < arguments.length; i3++) {
        var a3 = exports.IMREAL(result);
        var b2 = exports.IMAGINARY(result);
        var c3 = exports.IMREAL(arguments[i3]);
        var d3 = exports.IMAGINARY(arguments[i3]);
        if (utils.anyIsError(a3, b2, c3, d3)) {
          return error2.value;
        }
        result = exports.COMPLEX(a3 * c3 - b2 * d3, a3 * d3 + b2 * c3);
      }
      return result;
    };
    exports.IMREAL = function(inumber) {
      if (inumber === void 0 || inumber === true || inumber === false) {
        return error2.value;
      }
      if (inumber === 0 || inumber === "0") {
        return 0;
      }
      if (["i", "+i", "1i", "+1i", "-i", "-1i", "j", "+j", "1j", "+1j", "-j", "-1j"].indexOf(inumber) >= 0) {
        return 0;
      }
      var plus = inumber.indexOf("+");
      var minus = inumber.indexOf("-");
      if (plus === 0) {
        plus = inumber.indexOf("+", 1);
      }
      if (minus === 0) {
        minus = inumber.indexOf("-", 1);
      }
      var last = inumber.substring(inumber.length - 1, inumber.length);
      var unit = last === "i" || last === "j";
      if (plus >= 0 || minus >= 0) {
        if (!unit) {
          return error2.num;
        }
        if (plus >= 0) {
          return isNaN(inumber.substring(0, plus)) || isNaN(inumber.substring(plus + 1, inumber.length - 1)) ? error2.num : Number(inumber.substring(0, plus));
        } else {
          return isNaN(inumber.substring(0, minus)) || isNaN(inumber.substring(minus + 1, inumber.length - 1)) ? error2.num : Number(inumber.substring(0, minus));
        }
      } else {
        if (unit) {
          return isNaN(inumber.substring(0, inumber.length - 1)) ? error2.num : 0;
        } else {
          return isNaN(inumber) ? error2.num : inumber;
        }
      }
    };
    exports.IMSEC = function(inumber) {
      if (inumber === true || inumber === false) {
        return error2.value;
      }
      var x2 = exports.IMREAL(inumber);
      var y2 = exports.IMAGINARY(inumber);
      if (utils.anyIsError(x2, y2)) {
        return error2.value;
      }
      return exports.IMDIV("1", exports.IMCOS(inumber));
    };
    exports.IMSECH = function(inumber) {
      var x2 = exports.IMREAL(inumber);
      var y2 = exports.IMAGINARY(inumber);
      if (utils.anyIsError(x2, y2)) {
        return error2.value;
      }
      return exports.IMDIV("1", exports.IMCOSH(inumber));
    };
    exports.IMSIN = function(inumber) {
      var x2 = exports.IMREAL(inumber);
      var y2 = exports.IMAGINARY(inumber);
      if (utils.anyIsError(x2, y2)) {
        return error2.value;
      }
      var unit = inumber.substring(inumber.length - 1);
      unit = unit === "i" || unit === "j" ? unit : "i";
      return exports.COMPLEX(Math.sin(x2) * (Math.exp(y2) + Math.exp(-y2)) / 2, Math.cos(x2) * (Math.exp(y2) - Math.exp(-y2)) / 2, unit);
    };
    exports.IMSINH = function(inumber) {
      var x2 = exports.IMREAL(inumber);
      var y2 = exports.IMAGINARY(inumber);
      if (utils.anyIsError(x2, y2)) {
        return error2.value;
      }
      var unit = inumber.substring(inumber.length - 1);
      unit = unit === "i" || unit === "j" ? unit : "i";
      return exports.COMPLEX(Math.cos(y2) * (Math.exp(x2) - Math.exp(-x2)) / 2, Math.sin(y2) * (Math.exp(x2) + Math.exp(-x2)) / 2, unit);
    };
    exports.IMSQRT = function(inumber) {
      var x2 = exports.IMREAL(inumber);
      var y2 = exports.IMAGINARY(inumber);
      if (utils.anyIsError(x2, y2)) {
        return error2.value;
      }
      var unit = inumber.substring(inumber.length - 1);
      unit = unit === "i" || unit === "j" ? unit : "i";
      var s3 = Math.sqrt(exports.IMABS(inumber));
      var t3 = exports.IMARGUMENT(inumber);
      return exports.COMPLEX(s3 * Math.cos(t3 / 2), s3 * Math.sin(t3 / 2), unit);
    };
    exports.IMCSC = function(inumber) {
      if (inumber === true || inumber === false) {
        return error2.value;
      }
      var x2 = exports.IMREAL(inumber);
      var y2 = exports.IMAGINARY(inumber);
      if (utils.anyIsError(x2, y2)) {
        return error2.num;
      }
      return exports.IMDIV("1", exports.IMSIN(inumber));
    };
    exports.IMCSCH = function(inumber) {
      if (inumber === true || inumber === false) {
        return error2.value;
      }
      var x2 = exports.IMREAL(inumber);
      var y2 = exports.IMAGINARY(inumber);
      if (utils.anyIsError(x2, y2)) {
        return error2.num;
      }
      return exports.IMDIV("1", exports.IMSINH(inumber));
    };
    exports.IMSUB = function(inumber1, inumber2) {
      var a3 = this.IMREAL(inumber1);
      var b2 = this.IMAGINARY(inumber1);
      var c3 = this.IMREAL(inumber2);
      var d3 = this.IMAGINARY(inumber2);
      if (utils.anyIsError(a3, b2, c3, d3)) {
        return error2.value;
      }
      var unit1 = inumber1.substring(inumber1.length - 1);
      var unit2 = inumber2.substring(inumber2.length - 1);
      var unit = "i";
      if (unit1 === "j") {
        unit = "j";
      } else if (unit2 === "j") {
        unit = "j";
      }
      return this.COMPLEX(a3 - c3, b2 - d3, unit);
    };
    exports.IMSUM = function() {
      if (!arguments.length) {
        return error2.value;
      }
      var args = utils.flatten(arguments);
      var result = args[0];
      for (var i3 = 1; i3 < args.length; i3++) {
        var a3 = this.IMREAL(result);
        var b2 = this.IMAGINARY(result);
        var c3 = this.IMREAL(args[i3]);
        var d3 = this.IMAGINARY(args[i3]);
        if (utils.anyIsError(a3, b2, c3, d3)) {
          return error2.value;
        }
        result = this.COMPLEX(a3 + c3, b2 + d3);
      }
      return result;
    };
    exports.IMTAN = function(inumber) {
      if (inumber === true || inumber === false) {
        return error2.value;
      }
      var x2 = exports.IMREAL(inumber);
      var y2 = exports.IMAGINARY(inumber);
      if (utils.anyIsError(x2, y2)) {
        return error2.value;
      }
      return this.IMDIV(this.IMSIN(inumber), this.IMCOS(inumber));
    };
    exports.OCT2BIN = function(number, places) {
      if (!/^[0-7]{1,10}$/.test(number)) {
        return error2.num;
      }
      var negative = number.length === 10 && number.substring(0, 1) === "7" ? true : false;
      var decimal = negative ? parseInt(number, 8) - 1073741824 : parseInt(number, 8);
      if (decimal < -512 || decimal > 511) {
        return error2.num;
      }
      if (negative) {
        return "1" + text.REPT("0", 9 - (512 + decimal).toString(2).length) + (512 + decimal).toString(2);
      }
      var result = decimal.toString(2);
      if (typeof places === "undefined") {
        return result;
      } else {
        if (isNaN(places)) {
          return error2.value;
        }
        if (places < 0) {
          return error2.num;
        }
        places = Math.floor(places);
        return places >= result.length ? text.REPT("0", places - result.length) + result : error2.num;
      }
    };
    exports.OCT2DEC = function(number) {
      if (!/^[0-7]{1,10}$/.test(number)) {
        return error2.num;
      }
      var decimal = parseInt(number, 8);
      return decimal >= 536870912 ? decimal - 1073741824 : decimal;
    };
    exports.OCT2HEX = function(number, places) {
      if (!/^[0-7]{1,10}$/.test(number)) {
        return error2.num;
      }
      var decimal = parseInt(number, 8);
      if (decimal >= 536870912) {
        return "ff" + (decimal + 3221225472).toString(16);
      }
      var result = decimal.toString(16);
      if (places === void 0) {
        return result;
      } else {
        if (isNaN(places)) {
          return error2.value;
        }
        if (places < 0) {
          return error2.num;
        }
        places = Math.floor(places);
        return places >= result.length ? text.REPT("0", places - result.length) + result : error2.num;
      }
    };
  }
});

// node_modules/@handsontable/formulajs/lib/date-time.js
var require_date_time = __commonJS({
  "node_modules/@handsontable/formulajs/lib/date-time.js"(exports) {
    var error2 = require_error();
    var utils = require_common();
    var d1900 = new Date(Date.UTC(1900, 0, 1));
    var WEEK_STARTS = [
      void 0,
      0,
      1,
      void 0,
      void 0,
      void 0,
      void 0,
      void 0,
      void 0,
      void 0,
      void 0,
      void 0,
      1,
      2,
      3,
      4,
      5,
      6,
      0
    ];
    var WEEK_TYPES = [
      [],
      [1, 2, 3, 4, 5, 6, 7],
      [7, 1, 2, 3, 4, 5, 6],
      [6, 0, 1, 2, 3, 4, 5],
      [],
      [],
      [],
      [],
      [],
      [],
      [],
      [7, 1, 2, 3, 4, 5, 6],
      [6, 7, 1, 2, 3, 4, 5],
      [5, 6, 7, 1, 2, 3, 4],
      [4, 5, 6, 7, 1, 2, 3],
      [3, 4, 5, 6, 7, 1, 2],
      [2, 3, 4, 5, 6, 7, 1],
      [1, 2, 3, 4, 5, 6, 7]
    ];
    var WEEKEND_TYPES = [
      [],
      [6, 0],
      [0, 1],
      [1, 2],
      [2, 3],
      [3, 4],
      [4, 5],
      [5, 6],
      void 0,
      void 0,
      void 0,
      [0, 0],
      [1, 1],
      [2, 2],
      [3, 3],
      [4, 4],
      [5, 5],
      [6, 6]
    ];
    exports.DATE = function(year, month, day) {
      var result;
      year = utils.parseNumber(year);
      month = utils.parseNumber(month);
      day = utils.parseNumber(day);
      if (utils.anyIsError(year, month, day)) {
        result = error2.value;
      } else if (year < 0 || month < 0 || day < 0) {
        result = error2.num;
      } else {
        result = new Date(year, month - 1, day);
      }
      return result;
    };
    exports.DATEVALUE = function(date_text) {
      var modifier = 2;
      var date;
      if (typeof date_text !== "string") {
        return error2.value;
      }
      date = Date.parse(date_text);
      if (isNaN(date)) {
        return error2.value;
      }
      if (date <= -22038912e5) {
        modifier = 1;
      }
      return Math.ceil((date - d1900) / 864e5) + modifier;
    };
    exports.DAY = function(serial_number) {
      var date = utils.parseDate(serial_number);
      if (date instanceof Error) {
        return date;
      }
      return date.getDate();
    };
    exports.DAYS = function(end_date, start_date) {
      end_date = utils.parseDate(end_date);
      start_date = utils.parseDate(start_date);
      if (end_date instanceof Error) {
        return end_date;
      }
      if (start_date instanceof Error) {
        return start_date;
      }
      return serial(end_date) - serial(start_date);
    };
    exports.DAYS360 = function(start_date, end_date, method) {
      method = utils.parseBool(method);
      start_date = utils.parseDate(start_date);
      end_date = utils.parseDate(end_date);
      if (start_date instanceof Error) {
        return start_date;
      }
      if (end_date instanceof Error) {
        return end_date;
      }
      if (method instanceof Error) {
        return method;
      }
      var sm = start_date.getMonth();
      var em = end_date.getMonth();
      var sd, ed;
      if (method) {
        sd = start_date.getDate() === 31 ? 30 : start_date.getDate();
        ed = end_date.getDate() === 31 ? 30 : end_date.getDate();
      } else {
        var smd = new Date(start_date.getFullYear(), sm + 1, 0).getDate();
        var emd = new Date(end_date.getFullYear(), em + 1, 0).getDate();
        sd = start_date.getDate() === smd ? 30 : start_date.getDate();
        if (end_date.getDate() === emd) {
          if (sd < 30) {
            em++;
            ed = 1;
          } else {
            ed = 30;
          }
        } else {
          ed = end_date.getDate();
        }
      }
      return 360 * (end_date.getFullYear() - start_date.getFullYear()) + 30 * (em - sm) + (ed - sd);
    };
    exports.EDATE = function(start_date, months) {
      start_date = utils.parseDate(start_date);
      if (start_date instanceof Error) {
        return start_date;
      }
      if (isNaN(months)) {
        return error2.value;
      }
      months = parseInt(months, 10);
      start_date.setMonth(start_date.getMonth() + months);
      return serial(start_date);
    };
    exports.EOMONTH = function(start_date, months) {
      start_date = utils.parseDate(start_date);
      if (start_date instanceof Error) {
        return start_date;
      }
      if (isNaN(months)) {
        return error2.value;
      }
      months = parseInt(months, 10);
      return serial(new Date(start_date.getFullYear(), start_date.getMonth() + months + 1, 0));
    };
    exports.HOUR = function(serial_number) {
      serial_number = utils.parseDate(serial_number);
      if (serial_number instanceof Error) {
        return serial_number;
      }
      return serial_number.getHours();
    };
    exports.INTERVAL = function(second) {
      if (typeof second !== "number" && typeof second !== "string") {
        return error2.value;
      } else {
        second = parseInt(second, 10);
      }
      var year = Math.floor(second / 94608e4);
      second = second % 94608e4;
      var month = Math.floor(second / 2592e3);
      second = second % 2592e3;
      var day = Math.floor(second / 86400);
      second = second % 86400;
      var hour = Math.floor(second / 3600);
      second = second % 3600;
      var min2 = Math.floor(second / 60);
      second = second % 60;
      var sec = second;
      year = year > 0 ? year + "Y" : "";
      month = month > 0 ? month + "M" : "";
      day = day > 0 ? day + "D" : "";
      hour = hour > 0 ? hour + "H" : "";
      min2 = min2 > 0 ? min2 + "M" : "";
      sec = sec > 0 ? sec + "S" : "";
      return "P" + year + month + day + "T" + hour + min2 + sec;
    };
    exports.ISOWEEKNUM = function(date) {
      date = utils.parseDate(date);
      if (date instanceof Error) {
        return date;
      }
      date.setHours(0, 0, 0);
      date.setDate(date.getDate() + 4 - (date.getDay() || 7));
      var yearStart = new Date(date.getFullYear(), 0, 1);
      return Math.ceil(((date - yearStart) / 864e5 + 1) / 7);
    };
    exports.MINUTE = function(serial_number) {
      serial_number = utils.parseDate(serial_number);
      if (serial_number instanceof Error) {
        return serial_number;
      }
      return serial_number.getMinutes();
    };
    exports.MONTH = function(serial_number) {
      serial_number = utils.parseDate(serial_number);
      if (serial_number instanceof Error) {
        return serial_number;
      }
      return serial_number.getMonth() + 1;
    };
    exports.NETWORKDAYS = function(start_date, end_date, holidays) {
      return this.NETWORKDAYS.INTL(start_date, end_date, 1, holidays);
    };
    exports.NETWORKDAYS.INTL = function(start_date, end_date, weekend, holidays) {
      start_date = utils.parseDate(start_date);
      if (start_date instanceof Error) {
        return start_date;
      }
      end_date = utils.parseDate(end_date);
      if (end_date instanceof Error) {
        return end_date;
      }
      if (weekend === void 0) {
        weekend = WEEKEND_TYPES[1];
      } else {
        weekend = WEEKEND_TYPES[weekend];
      }
      if (!(weekend instanceof Array)) {
        return error2.value;
      }
      if (holidays === void 0) {
        holidays = [];
      } else if (!(holidays instanceof Array)) {
        holidays = [holidays];
      }
      for (var i3 = 0; i3 < holidays.length; i3++) {
        var h3 = utils.parseDate(holidays[i3]);
        if (h3 instanceof Error) {
          return h3;
        }
        holidays[i3] = h3;
      }
      var days = (end_date - start_date) / (1e3 * 60 * 60 * 24) + 1;
      var total = days;
      var day = start_date;
      for (i3 = 0; i3 < days; i3++) {
        var d3 = (/* @__PURE__ */ new Date()).getTimezoneOffset() > 0 ? day.getUTCDay() : day.getDay();
        var dec = false;
        if (d3 === weekend[0] || d3 === weekend[1]) {
          dec = true;
        }
        for (var j2 = 0; j2 < holidays.length; j2++) {
          var holiday = holidays[j2];
          if (holiday.getDate() === day.getDate() && holiday.getMonth() === day.getMonth() && holiday.getFullYear() === day.getFullYear()) {
            dec = true;
            break;
          }
        }
        if (dec) {
          total--;
        }
        day.setDate(day.getDate() + 1);
      }
      return total;
    };
    exports.NOW = function() {
      return /* @__PURE__ */ new Date();
    };
    exports.SECOND = function(serial_number) {
      serial_number = utils.parseDate(serial_number);
      if (serial_number instanceof Error) {
        return serial_number;
      }
      return serial_number.getSeconds();
    };
    exports.TIME = function(hour, minute, second) {
      hour = utils.parseNumber(hour);
      minute = utils.parseNumber(minute);
      second = utils.parseNumber(second);
      if (utils.anyIsError(hour, minute, second)) {
        return error2.value;
      }
      if (hour < 0 || minute < 0 || second < 0) {
        return error2.num;
      }
      return (3600 * hour + 60 * minute + second) / 86400;
    };
    exports.TIMEVALUE = function(time_text) {
      time_text = utils.parseDate(time_text);
      if (time_text instanceof Error) {
        return time_text;
      }
      return (3600 * time_text.getHours() + 60 * time_text.getMinutes() + time_text.getSeconds()) / 86400;
    };
    exports.TODAY = function() {
      return /* @__PURE__ */ new Date();
    };
    exports.WEEKDAY = function(serial_number, return_type) {
      serial_number = utils.parseDate(serial_number);
      if (serial_number instanceof Error) {
        return serial_number;
      }
      if (return_type === void 0) {
        return_type = 1;
      }
      var day = serial_number.getDay();
      return WEEK_TYPES[return_type][day];
    };
    exports.WEEKNUM = function(serial_number, return_type) {
      serial_number = utils.parseDate(serial_number);
      if (serial_number instanceof Error) {
        return serial_number;
      }
      if (return_type === void 0) {
        return_type = 1;
      }
      if (return_type === 21) {
        return this.ISOWEEKNUM(serial_number);
      }
      var week_start = WEEK_STARTS[return_type];
      var jan = new Date(serial_number.getFullYear(), 0, 1);
      var inc = jan.getDay() < week_start ? 1 : 0;
      jan -= Math.abs(jan.getDay() - week_start) * 24 * 60 * 60 * 1e3;
      return Math.floor((serial_number - jan) / (1e3 * 60 * 60 * 24) / 7 + 1) + inc;
    };
    exports.WORKDAY = function(start_date, days, holidays) {
      return this.WORKDAY.INTL(start_date, days, 1, holidays);
    };
    exports.WORKDAY.INTL = function(start_date, days, weekend, holidays) {
      start_date = utils.parseDate(start_date);
      if (start_date instanceof Error) {
        return start_date;
      }
      days = utils.parseNumber(days);
      if (days instanceof Error) {
        return days;
      }
      if (days < 0) {
        return error2.num;
      }
      if (weekend === void 0) {
        weekend = WEEKEND_TYPES[1];
      } else {
        weekend = WEEKEND_TYPES[weekend];
      }
      if (!(weekend instanceof Array)) {
        return error2.value;
      }
      if (holidays === void 0) {
        holidays = [];
      } else if (!(holidays instanceof Array)) {
        holidays = [holidays];
      }
      for (var i3 = 0; i3 < holidays.length; i3++) {
        var h3 = utils.parseDate(holidays[i3]);
        if (h3 instanceof Error) {
          return h3;
        }
        holidays[i3] = h3;
      }
      var d3 = 0;
      while (d3 < days) {
        start_date.setDate(start_date.getDate() + 1);
        var day = start_date.getDay();
        if (day === weekend[0] || day === weekend[1]) {
          continue;
        }
        for (var j2 = 0; j2 < holidays.length; j2++) {
          var holiday = holidays[j2];
          if (holiday.getDate() === start_date.getDate() && holiday.getMonth() === start_date.getMonth() && holiday.getFullYear() === start_date.getFullYear()) {
            d3--;
            break;
          }
        }
        d3++;
      }
      return start_date;
    };
    exports.YEAR = function(serial_number) {
      serial_number = utils.parseDate(serial_number);
      if (serial_number instanceof Error) {
        return serial_number;
      }
      return serial_number.getFullYear();
    };
    function isLeapYear(year) {
      return new Date(year, 1, 29).getMonth() === 1;
    }
    function daysBetween(start_date, end_date) {
      return Math.ceil((end_date - start_date) / 1e3 / 60 / 60 / 24);
    }
    exports.YEARFRAC = function(start_date, end_date, basis) {
      start_date = utils.parseDate(start_date);
      if (start_date instanceof Error) {
        return start_date;
      }
      end_date = utils.parseDate(end_date);
      if (end_date instanceof Error) {
        return end_date;
      }
      basis = basis || 0;
      var sd = start_date.getDate();
      var sm = start_date.getMonth() + 1;
      var sy = start_date.getFullYear();
      var ed = end_date.getDate();
      var em = end_date.getMonth() + 1;
      var ey = end_date.getFullYear();
      switch (basis) {
        case 0:
          if (sd === 31 && ed === 31) {
            sd = 30;
            ed = 30;
          } else if (sd === 31) {
            sd = 30;
          } else if (sd === 30 && ed === 31) {
            ed = 30;
          }
          return (ed + em * 30 + ey * 360 - (sd + sm * 30 + sy * 360)) / 360;
        case 1:
          var feb29Between = function(date1, date2) {
            var year1 = date1.getFullYear();
            var mar1year1 = new Date(year1, 2, 1);
            if (isLeapYear(year1) && date1 < mar1year1 && date2 >= mar1year1) {
              return true;
            }
            var year2 = date2.getFullYear();
            var mar1year2 = new Date(year2, 2, 1);
            return isLeapYear(year2) && date2 >= mar1year2 && date1 < mar1year2;
          };
          var ylength = 365;
          if (sy === ey || sy + 1 === ey && (sm > em || sm === em && sd >= ed)) {
            if (sy === ey && isLeapYear(sy) || feb29Between(start_date, end_date) || em === 1 && ed === 29) {
              ylength = 366;
            }
            return daysBetween(start_date, end_date) / ylength;
          }
          var years = ey - sy + 1;
          var days = (new Date(ey + 1, 0, 1) - new Date(sy, 0, 1)) / 1e3 / 60 / 60 / 24;
          var average = days / years;
          return daysBetween(start_date, end_date) / average;
        case 2:
          return daysBetween(start_date, end_date) / 360;
        case 3:
          return daysBetween(start_date, end_date) / 365;
        case 4:
          return (ed + em * 30 + ey * 360 - (sd + sm * 30 + sy * 360)) / 360;
      }
    };
    function serial(date) {
      var addOn = date > -22038912e5 ? 2 : 1;
      return Math.ceil((date - d1900) / 864e5) + addOn;
    }
  }
});

// node_modules/@handsontable/formulajs/lib/compatibility.js
var require_compatibility = __commonJS({
  "node_modules/@handsontable/formulajs/lib/compatibility.js"(exports) {
    var mathTrig = require_math_trig();
    var statistical = require_statistical();
    var engineering = require_engineering();
    var dateTime = require_date_time();
    function set2(fn2, root) {
      if (root) {
        for (var i3 in root) {
          fn2[i3] = root[i3];
        }
      }
      return fn2;
    }
    exports.BETADIST = statistical.BETA.DIST;
    exports.BETAINV = statistical.BETA.INV;
    exports.BINOMDIST = statistical.BINOM.DIST;
    exports.CEILING = exports.ISOCEILING = set2(mathTrig.CEILING.MATH, mathTrig.CEILING);
    exports.CEILINGMATH = mathTrig.CEILING.MATH;
    exports.CEILINGPRECISE = mathTrig.CEILING.PRECISE;
    exports.CHIDIST = statistical.CHISQ.DIST;
    exports.CHIDISTRT = statistical.CHISQ.DIST.RT;
    exports.CHIINV = statistical.CHISQ.INV;
    exports.CHIINVRT = statistical.CHISQ.INV.RT;
    exports.CHITEST = statistical.CHISQ.TEST;
    exports.CONFIDENCE = set2(statistical.CONFIDENCE.NORM, statistical.CONFIDENCE);
    exports.COVAR = statistical.COVARIANCE.P;
    exports.COVARIANCEP = statistical.COVARIANCE.P;
    exports.COVARIANCES = statistical.COVARIANCE.S;
    exports.CRITBINOM = statistical.BINOM.INV;
    exports.EXPONDIST = statistical.EXPON.DIST;
    exports.ERFCPRECISE = engineering.ERFC.PRECISE;
    exports.ERFPRECISE = engineering.ERF.PRECISE;
    exports.FDIST = statistical.F.DIST;
    exports.FDISTRT = statistical.F.DIST.RT;
    exports.FINVRT = statistical.F.INV.RT;
    exports.FINV = statistical.F.INV;
    exports.FLOOR = set2(mathTrig.FLOOR.MATH, mathTrig.FLOOR);
    exports.FLOORMATH = mathTrig.FLOOR.MATH;
    exports.FLOORPRECISE = mathTrig.FLOOR.PRECISE;
    exports.FTEST = statistical.F.TEST;
    exports.GAMMADIST = statistical.GAMMA.DIST;
    exports.GAMMAINV = statistical.GAMMA.INV;
    exports.GAMMALNPRECISE = statistical.GAMMALN.PRECISE;
    exports.HYPGEOMDIST = statistical.HYPGEOM.DIST;
    exports.LOGINV = statistical.LOGNORM.INV;
    exports.LOGNORMINV = statistical.LOGNORM.INV;
    exports.LOGNORMDIST = statistical.LOGNORM.DIST;
    exports.MODE = set2(statistical.MODE.SNGL, statistical.MODE);
    exports.MODEMULT = statistical.MODE.MULT;
    exports.MODESNGL = statistical.MODE.SNGL;
    exports.NEGBINOMDIST = statistical.NEGBINOM.DIST;
    exports.NETWORKDAYSINTL = dateTime.NETWORKDAYS.INTL;
    exports.NORMDIST = statistical.NORM.DIST;
    exports.NORMINV = statistical.NORM.INV;
    exports.NORMSDIST = statistical.NORM.S.DIST;
    exports.NORMSINV = statistical.NORM.S.INV;
    exports.PERCENTILE = set2(statistical.PERCENTILE.EXC, statistical.PERCENTILE);
    exports.PERCENTILEEXC = statistical.PERCENTILE.EXC;
    exports.PERCENTILEINC = statistical.PERCENTILE.INC;
    exports.PERCENTRANK = set2(statistical.PERCENTRANK.INC, statistical.PERCENTRANK);
    exports.PERCENTRANKEXC = statistical.PERCENTRANK.EXC;
    exports.PERCENTRANKINC = statistical.PERCENTRANK.INC;
    exports.POISSON = set2(statistical.POISSON.DIST, statistical.POISSON);
    exports.POISSONDIST = statistical.POISSON.DIST;
    exports.QUARTILE = set2(statistical.QUARTILE.INC, statistical.QUARTILE);
    exports.QUARTILEEXC = statistical.QUARTILE.EXC;
    exports.QUARTILEINC = statistical.QUARTILE.INC;
    exports.RANK = set2(statistical.RANK.EQ, statistical.RANK);
    exports.RANKAVG = statistical.RANK.AVG;
    exports.RANKEQ = statistical.RANK.EQ;
    exports.SKEWP = statistical.SKEW.P;
    exports.STDEV = set2(statistical.STDEV.S, statistical.STDEV);
    exports.STDEVP = statistical.STDEV.P;
    exports.STDEVS = statistical.STDEV.S;
    exports.TDIST = statistical.T.DIST;
    exports.TDISTRT = statistical.T.DIST.RT;
    exports.TINV = statistical.T.INV;
    exports.TTEST = statistical.T.TEST;
    exports.VAR = set2(statistical.VAR.S, statistical.VAR);
    exports.VARP = statistical.VAR.P;
    exports.VARS = statistical.VAR.S;
    exports.WEIBULL = set2(statistical.WEIBULL.DIST, statistical.WEIBULL);
    exports.WEIBULLDIST = statistical.WEIBULL.DIST;
    exports.WORKDAYINTL = dateTime.WORKDAY.INTL;
    exports.ZTEST = statistical.Z.TEST;
  }
});

// node_modules/@handsontable/formulajs/lib/database.js
var require_database = __commonJS({
  "node_modules/@handsontable/formulajs/lib/database.js"(exports) {
    var error2 = require_error();
    var stats = require_statistical();
    var maths = require_math_trig();
    var utils = require_common();
    var evalExpression = require_criteria_eval();
    function compact(array) {
      var result = [];
      utils.arrayEach(array, function(value) {
        if (value) {
          result.push(value);
        }
      });
      return result;
    }
    exports.FINDFIELD = function(database, title) {
      var index = null;
      utils.arrayEach(database, function(value, i3) {
        if (value[0] === title) {
          index = i3;
          return false;
        }
      });
      if (index == null) {
        return error2.value;
      }
      return index;
    };
    function findResultIndex(database, criterias) {
      var matches = {};
      for (var i3 = 1; i3 < database[0].length; ++i3) {
        matches[i3] = true;
      }
      var maxCriteriaLength = criterias[0].length;
      for (i3 = 1; i3 < criterias.length; ++i3) {
        if (criterias[i3].length > maxCriteriaLength) {
          maxCriteriaLength = criterias[i3].length;
        }
      }
      for (var k2 = 1; k2 < database.length; ++k2) {
        for (var l3 = 1; l3 < database[k2].length; ++l3) {
          var currentCriteriaResult = false;
          var hasMatchingCriteria = false;
          for (var j2 = 0; j2 < criterias.length; ++j2) {
            var criteria = criterias[j2];
            if (criteria.length < maxCriteriaLength) {
              continue;
            }
            var criteriaField = criteria[0];
            if (database[k2][0] !== criteriaField) {
              continue;
            }
            hasMatchingCriteria = true;
            for (var p3 = 1; p3 < criteria.length; ++p3) {
              if (!currentCriteriaResult) {
                var isWildcard = criteria[p3] === void 0 || criteria[p3] === "*";
                if (isWildcard) {
                  currentCriteriaResult = true;
                } else {
                  var tokenizedCriteria = evalExpression.parse(criteria[p3] + "");
                  var tokens = [evalExpression.createToken(database[k2][l3], evalExpression.TOKEN_TYPE_LITERAL)].concat(tokenizedCriteria);
                  currentCriteriaResult = evalExpression.compute(tokens);
                }
              }
            }
          }
          if (hasMatchingCriteria) {
            matches[l3] = matches[l3] && currentCriteriaResult;
          }
        }
      }
      var result = [];
      for (var n3 = 0; n3 < database[0].length; ++n3) {
        if (matches[n3]) {
          result.push(n3 - 1);
        }
      }
      return result;
    }
    exports.DAVERAGE = function(database, field, criteria) {
      if (isNaN(field) && typeof field !== "string") {
        return error2.value;
      }
      var resultIndexes = findResultIndex(database, criteria);
      var targetFields = [];
      if (typeof field === "string") {
        var index = exports.FINDFIELD(database, field);
        targetFields = utils.rest(database[index]);
      } else {
        targetFields = utils.rest(database[field]);
      }
      var sum = 0;
      utils.arrayEach(resultIndexes, function(value) {
        sum += targetFields[value];
      });
      return resultIndexes.length === 0 ? error2.div0 : sum / resultIndexes.length;
    };
    exports.DCOUNT = function(database, field, criteria) {
      if (isNaN(field) && typeof field !== "string") {
        return error2.value;
      }
      var resultIndexes = findResultIndex(database, criteria);
      var targetFields = [];
      if (typeof field === "string") {
        var index = exports.FINDFIELD(database, field);
        targetFields = utils.rest(database[index]);
      } else {
        targetFields = utils.rest(database[field]);
      }
      var targetValues = [];
      utils.arrayEach(resultIndexes, function(value) {
        targetValues.push(targetFields[value]);
      });
      return stats.COUNT(targetValues);
    };
    exports.DCOUNTA = function(database, field, criteria) {
      if (isNaN(field) && typeof field !== "string") {
        return error2.value;
      }
      var resultIndexes = findResultIndex(database, criteria);
      var targetFields = [];
      if (typeof field === "string") {
        var index = exports.FINDFIELD(database, field);
        targetFields = utils.rest(database[index]);
      } else {
        targetFields = utils.rest(database[field]);
      }
      var targetValues = [];
      utils.arrayEach(resultIndexes, function(value) {
        targetValues.push(targetFields[value]);
      });
      return stats.COUNTA(targetValues);
    };
    exports.DGET = function(database, field, criteria) {
      if (isNaN(field) && typeof field !== "string") {
        return error2.value;
      }
      var resultIndexes = findResultIndex(database, criteria);
      var targetFields = [];
      if (typeof field === "string") {
        var index = exports.FINDFIELD(database, field);
        targetFields = utils.rest(database[index]);
      } else {
        targetFields = utils.rest(database[field]);
      }
      if (resultIndexes.length === 0) {
        return error2.value;
      }
      if (resultIndexes.length > 1) {
        return error2.num;
      }
      return targetFields[resultIndexes[0]];
    };
    exports.DMAX = function(database, field, criteria) {
      if (isNaN(field) && typeof field !== "string") {
        return error2.value;
      }
      var resultIndexes = findResultIndex(database, criteria);
      var targetFields = [];
      if (typeof field === "string") {
        var index = exports.FINDFIELD(database, field);
        targetFields = utils.rest(database[index]);
      } else {
        targetFields = utils.rest(database[field]);
      }
      var maxValue = targetFields[resultIndexes[0]];
      utils.arrayEach(resultIndexes, function(value) {
        if (maxValue < targetFields[value]) {
          maxValue = targetFields[value];
        }
      });
      return maxValue;
    };
    exports.DMIN = function(database, field, criteria) {
      if (isNaN(field) && typeof field !== "string") {
        return error2.value;
      }
      var resultIndexes = findResultIndex(database, criteria);
      var targetFields = [];
      if (typeof field === "string") {
        var index = exports.FINDFIELD(database, field);
        targetFields = utils.rest(database[index]);
      } else {
        targetFields = utils.rest(database[field]);
      }
      var minValue = targetFields[resultIndexes[0]];
      utils.arrayEach(resultIndexes, function(value) {
        if (minValue > targetFields[value]) {
          minValue = targetFields[value];
        }
      });
      return minValue;
    };
    exports.DPRODUCT = function(database, field, criteria) {
      if (isNaN(field) && typeof field !== "string") {
        return error2.value;
      }
      var resultIndexes = findResultIndex(database, criteria);
      var targetFields = [];
      if (typeof field === "string") {
        var index = exports.FINDFIELD(database, field);
        targetFields = utils.rest(database[index]);
      } else {
        targetFields = utils.rest(database[field]);
      }
      var targetValues = [];
      utils.arrayEach(resultIndexes, function(value) {
        targetValues.push(targetFields[value]);
      });
      targetValues = compact(targetValues);
      var result = 1;
      utils.arrayEach(targetValues, function(value) {
        result *= value;
      });
      return result;
    };
    exports.DSTDEV = function(database, field, criteria) {
      if (isNaN(field) && typeof field !== "string") {
        return error2.value;
      }
      var resultIndexes = findResultIndex(database, criteria);
      var targetFields = [];
      if (typeof field === "string") {
        var index = exports.FINDFIELD(database, field);
        targetFields = utils.rest(database[index]);
      } else {
        targetFields = utils.rest(database[field]);
      }
      var targetValues = [];
      utils.arrayEach(resultIndexes, function(value) {
        targetValues.push(targetFields[value]);
      });
      targetValues = compact(targetValues);
      return stats.STDEV.S(targetValues);
    };
    exports.DSTDEVP = function(database, field, criteria) {
      if (isNaN(field) && typeof field !== "string") {
        return error2.value;
      }
      var resultIndexes = findResultIndex(database, criteria);
      var targetFields = [];
      if (typeof field === "string") {
        var index = exports.FINDFIELD(database, field);
        targetFields = utils.rest(database[index]);
      } else {
        targetFields = utils.rest(database[field]);
      }
      var targetValues = [];
      utils.arrayEach(resultIndexes, function(value) {
        targetValues.push(targetFields[value]);
      });
      targetValues = compact(targetValues);
      return stats.STDEV.P(targetValues);
    };
    exports.DSUM = function(database, field, criteria) {
      if (isNaN(field) && typeof field !== "string") {
        return error2.value;
      }
      var resultIndexes = findResultIndex(database, criteria);
      var targetFields = [];
      if (typeof field === "string") {
        var index = exports.FINDFIELD(database, field);
        targetFields = utils.rest(database[index]);
      } else {
        targetFields = utils.rest(database[field]);
      }
      var targetValues = [];
      utils.arrayEach(resultIndexes, function(value) {
        targetValues.push(targetFields[value]);
      });
      return maths.SUM(targetValues);
    };
    exports.DVAR = function(database, field, criteria) {
      if (isNaN(field) && typeof field !== "string") {
        return error2.value;
      }
      var resultIndexes = findResultIndex(database, criteria);
      var targetFields = [];
      if (typeof field === "string") {
        var index = exports.FINDFIELD(database, field);
        targetFields = utils.rest(database[index]);
      } else {
        targetFields = utils.rest(database[field]);
      }
      var targetValues = [];
      utils.arrayEach(resultIndexes, function(value) {
        targetValues.push(targetFields[value]);
      });
      return stats.VAR.S(targetValues);
    };
    exports.DVARP = function(database, field, criteria) {
      if (isNaN(field) && typeof field !== "string") {
        return error2.value;
      }
      var resultIndexes = findResultIndex(database, criteria);
      var targetFields = [];
      if (typeof field === "string") {
        var index = exports.FINDFIELD(database, field);
        targetFields = utils.rest(database[index]);
      } else {
        targetFields = utils.rest(database[field]);
      }
      var targetValues = [];
      utils.arrayEach(resultIndexes, function(value) {
        targetValues.push(targetFields[value]);
      });
      return stats.VAR.P(targetValues);
    };
  }
});

// node_modules/@handsontable/formulajs/lib/logical.js
var require_logical = __commonJS({
  "node_modules/@handsontable/formulajs/lib/logical.js"(exports) {
    var error2 = require_error();
    var utils = require_common();
    var information = require_information();
    exports.AND = function() {
      var args = utils.flatten(arguments);
      var result = true;
      for (var i3 = 0; i3 < args.length; i3++) {
        if (!args[i3]) {
          result = false;
        }
      }
      return result;
    };
    exports.CHOOSE = function() {
      if (arguments.length < 2) {
        return error2.na;
      }
      var index = arguments[0];
      if (index < 1 || index > 254) {
        return error2.value;
      }
      if (arguments.length < index + 1) {
        return error2.value;
      }
      return arguments[index];
    };
    exports.FALSE = function() {
      return false;
    };
    exports.IF = function(test, then_value, otherwise_value) {
      return test ? then_value : otherwise_value;
    };
    exports.IFERROR = function(value, valueIfError) {
      if (information.ISERROR(value)) {
        return valueIfError;
      }
      return value;
    };
    exports.IFNA = function(value, value_if_na) {
      return value === error2.na ? value_if_na : value;
    };
    exports.NOT = function(logical) {
      return !logical;
    };
    exports.OR = function() {
      var args = utils.flatten(arguments);
      var result = false;
      for (var i3 = 0; i3 < args.length; i3++) {
        if (args[i3]) {
          result = true;
        }
      }
      return result;
    };
    exports.TRUE = function() {
      return true;
    };
    exports.XOR = function() {
      var args = utils.flatten(arguments);
      var result = 0;
      for (var i3 = 0; i3 < args.length; i3++) {
        if (args[i3]) {
          result++;
        }
      }
      return Math.floor(Math.abs(result)) & 1 ? true : false;
    };
    exports.SWITCH = function() {
      var result;
      if (arguments.length > 0) {
        var targetValue = arguments[0];
        var argc = arguments.length - 1;
        var switchCount = Math.floor(argc / 2);
        var switchSatisfied = false;
        var hasDefaultClause = argc % 2 !== 0;
        var defaultClause = argc % 2 === 0 ? null : arguments[arguments.length - 1];
        if (switchCount) {
          for (var index = 0; index < switchCount; index++) {
            if (targetValue === arguments[index * 2 + 1]) {
              result = arguments[index * 2 + 2];
              switchSatisfied = true;
              break;
            }
          }
        }
        if (!switchSatisfied) {
          result = hasDefaultClause ? defaultClause : error2.na;
        }
      } else {
        result = error2.value;
      }
      return result;
    };
  }
});

// node_modules/@handsontable/formulajs/lib/financial.js
var require_financial = __commonJS({
  "node_modules/@handsontable/formulajs/lib/financial.js"(exports) {
    var error2 = require_error();
    var dateTime = require_date_time();
    var utils = require_common();
    function validDate(d3) {
      return d3 && d3.getTime && !isNaN(d3.getTime());
    }
    function ensureDate(d3) {
      return d3 instanceof Date ? d3 : new Date(d3);
    }
    exports.ACCRINT = function(issue, first, settlement, rate, par, frequency, basis) {
      issue = ensureDate(issue);
      first = ensureDate(first);
      settlement = ensureDate(settlement);
      if (!validDate(issue) || !validDate(first) || !validDate(settlement)) {
        return error2.value;
      }
      if (rate <= 0 || par <= 0) {
        return error2.num;
      }
      if ([1, 2, 4].indexOf(frequency) === -1) {
        return error2.num;
      }
      if ([0, 1, 2, 3, 4].indexOf(basis) === -1) {
        return error2.num;
      }
      if (settlement <= issue) {
        return error2.num;
      }
      par = par || 0;
      basis = basis || 0;
      return par * rate * dateTime.YEARFRAC(issue, settlement, basis);
    };
    exports.ACCRINTM = function() {
      throw new Error("ACCRINTM is not implemented");
    };
    exports.AMORDEGRC = function() {
      throw new Error("AMORDEGRC is not implemented");
    };
    exports.AMORLINC = function() {
      throw new Error("AMORLINC is not implemented");
    };
    exports.COUPDAYBS = function() {
      throw new Error("COUPDAYBS is not implemented");
    };
    exports.COUPDAYS = function() {
      throw new Error("COUPDAYS is not implemented");
    };
    exports.COUPDAYSNC = function() {
      throw new Error("COUPDAYSNC is not implemented");
    };
    exports.COUPNCD = function() {
      throw new Error("COUPNCD is not implemented");
    };
    exports.COUPNUM = function() {
      throw new Error("COUPNUM is not implemented");
    };
    exports.COUPPCD = function() {
      throw new Error("COUPPCD is not implemented");
    };
    exports.CUMIPMT = function(rate, periods, value, start, end, type) {
      rate = utils.parseNumber(rate);
      periods = utils.parseNumber(periods);
      value = utils.parseNumber(value);
      if (utils.anyIsError(rate, periods, value)) {
        return error2.value;
      }
      if (rate <= 0 || periods <= 0 || value <= 0) {
        return error2.num;
      }
      if (start < 1 || end < 1 || start > end) {
        return error2.num;
      }
      if (type !== 0 && type !== 1) {
        return error2.num;
      }
      var payment = exports.PMT(rate, periods, value, 0, type);
      var interest = 0;
      if (start === 1) {
        if (type === 0) {
          interest = -value;
          start++;
        }
      }
      for (var i3 = start; i3 <= end; i3++) {
        if (type === 1) {
          interest += exports.FV(rate, i3 - 2, payment, value, 1) - payment;
        } else {
          interest += exports.FV(rate, i3 - 1, payment, value, 0);
        }
      }
      interest *= rate;
      return interest;
    };
    exports.CUMPRINC = function(rate, periods, value, start, end, type) {
      rate = utils.parseNumber(rate);
      periods = utils.parseNumber(periods);
      value = utils.parseNumber(value);
      if (utils.anyIsError(rate, periods, value)) {
        return error2.value;
      }
      if (rate <= 0 || periods <= 0 || value <= 0) {
        return error2.num;
      }
      if (start < 1 || end < 1 || start > end) {
        return error2.num;
      }
      if (type !== 0 && type !== 1) {
        return error2.num;
      }
      var payment = exports.PMT(rate, periods, value, 0, type);
      var principal = 0;
      if (start === 1) {
        if (type === 0) {
          principal = payment + value * rate;
        } else {
          principal = payment;
        }
        start++;
      }
      for (var i3 = start; i3 <= end; i3++) {
        if (type > 0) {
          principal += payment - (exports.FV(rate, i3 - 2, payment, value, 1) - payment) * rate;
        } else {
          principal += payment - exports.FV(rate, i3 - 1, payment, value, 0) * rate;
        }
      }
      return principal;
    };
    exports.DB = function(cost, salvage, life, period, month) {
      month = month === void 0 ? 12 : month;
      cost = utils.parseNumber(cost);
      salvage = utils.parseNumber(salvage);
      life = utils.parseNumber(life);
      period = utils.parseNumber(period);
      month = utils.parseNumber(month);
      if (utils.anyIsError(cost, salvage, life, period, month)) {
        return error2.value;
      }
      if (cost < 0 || salvage < 0 || life < 0 || period < 0) {
        return error2.num;
      }
      if ([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].indexOf(month) === -1) {
        return error2.num;
      }
      if (period > life) {
        return error2.num;
      }
      if (salvage >= cost) {
        return 0;
      }
      var rate = (1 - Math.pow(salvage / cost, 1 / life)).toFixed(3);
      var initial = cost * rate * month / 12;
      var total = initial;
      var current = 0;
      var ceiling = period === life ? life - 1 : period;
      for (var i3 = 2; i3 <= ceiling; i3++) {
        current = (cost - total) * rate;
        total += current;
      }
      if (period === 1) {
        return initial;
      } else if (period === life) {
        return (cost - total) * rate;
      } else {
        return current;
      }
    };
    exports.DDB = function(cost, salvage, life, period, factor) {
      factor = factor === void 0 ? 2 : factor;
      cost = utils.parseNumber(cost);
      salvage = utils.parseNumber(salvage);
      life = utils.parseNumber(life);
      period = utils.parseNumber(period);
      factor = utils.parseNumber(factor);
      if (utils.anyIsError(cost, salvage, life, period, factor)) {
        return error2.value;
      }
      if (cost < 0 || salvage < 0 || life < 0 || period < 0 || factor <= 0) {
        return error2.num;
      }
      if (period > life) {
        return error2.num;
      }
      if (salvage >= cost) {
        return 0;
      }
      var total = 0;
      var current = 0;
      for (var i3 = 1; i3 <= period; i3++) {
        current = Math.min((cost - total) * (factor / life), cost - salvage - total);
        total += current;
      }
      return current;
    };
    exports.DISC = function() {
      throw new Error("DISC is not implemented");
    };
    exports.DOLLARDE = function(dollar, fraction) {
      dollar = utils.parseNumber(dollar);
      fraction = utils.parseNumber(fraction);
      if (utils.anyIsError(dollar, fraction)) {
        return error2.value;
      }
      if (fraction < 0) {
        return error2.num;
      }
      if (fraction >= 0 && fraction < 1) {
        return error2.div0;
      }
      fraction = parseInt(fraction, 10);
      var result = parseInt(dollar, 10);
      result += dollar % 1 * Math.pow(10, Math.ceil(Math.log(fraction) / Math.LN10)) / fraction;
      var power = Math.pow(10, Math.ceil(Math.log(fraction) / Math.LN2) + 1);
      result = Math.round(result * power) / power;
      return result;
    };
    exports.DOLLARFR = function(dollar, fraction) {
      dollar = utils.parseNumber(dollar);
      fraction = utils.parseNumber(fraction);
      if (utils.anyIsError(dollar, fraction)) {
        return error2.value;
      }
      if (fraction < 0) {
        return error2.num;
      }
      if (fraction >= 0 && fraction < 1) {
        return error2.div0;
      }
      fraction = parseInt(fraction, 10);
      var result = parseInt(dollar, 10);
      result += dollar % 1 * Math.pow(10, -Math.ceil(Math.log(fraction) / Math.LN10)) * fraction;
      return result;
    };
    exports.DURATION = function() {
      throw new Error("DURATION is not implemented");
    };
    exports.EFFECT = function(rate, periods) {
      rate = utils.parseNumber(rate);
      periods = utils.parseNumber(periods);
      if (utils.anyIsError(rate, periods)) {
        return error2.value;
      }
      if (rate <= 0 || periods < 1) {
        return error2.num;
      }
      periods = parseInt(periods, 10);
      return Math.pow(1 + rate / periods, periods) - 1;
    };
    exports.FV = function(rate, periods, payment, value, type) {
      value = value || 0;
      type = type || 0;
      rate = utils.parseNumber(rate);
      periods = utils.parseNumber(periods);
      payment = utils.parseNumber(payment);
      value = utils.parseNumber(value);
      type = utils.parseNumber(type);
      if (utils.anyIsError(rate, periods, payment, value, type)) {
        return error2.value;
      }
      var result;
      if (rate === 0) {
        result = value + payment * periods;
      } else {
        var term = Math.pow(1 + rate, periods);
        if (type === 1) {
          result = value * term + payment * (1 + rate) * (term - 1) / rate;
        } else {
          result = value * term + payment * (term - 1) / rate;
        }
      }
      return -result;
    };
    exports.FVSCHEDULE = function(principal, schedule) {
      principal = utils.parseNumber(principal);
      schedule = utils.parseNumberArray(utils.flatten(schedule));
      if (utils.anyIsError(principal, schedule)) {
        return error2.value;
      }
      var n3 = schedule.length;
      var future = principal;
      for (var i3 = 0; i3 < n3; i3++) {
        future *= 1 + schedule[i3];
      }
      return future;
    };
    exports.INTRATE = function() {
      throw new Error("INTRATE is not implemented");
    };
    exports.IPMT = function(rate, period, periods, present, future, type) {
      future = future || 0;
      type = type || 0;
      rate = utils.parseNumber(rate);
      period = utils.parseNumber(period);
      periods = utils.parseNumber(periods);
      present = utils.parseNumber(present);
      future = utils.parseNumber(future);
      type = utils.parseNumber(type);
      if (utils.anyIsError(rate, period, periods, present, future, type)) {
        return error2.value;
      }
      var payment = exports.PMT(rate, periods, present, future, type);
      var interest;
      if (period === 1) {
        if (type === 1) {
          interest = 0;
        } else {
          interest = -present;
        }
      } else {
        if (type === 1) {
          interest = exports.FV(rate, period - 2, payment, present, 1) - payment;
        } else {
          interest = exports.FV(rate, period - 1, payment, present, 0);
        }
      }
      return interest * rate;
    };
    exports.IRR = function(values, guess) {
      guess = guess || 0;
      values = utils.parseNumberArray(utils.flatten(values));
      guess = utils.parseNumber(guess);
      if (utils.anyIsError(values, guess)) {
        return error2.value;
      }
      var irrResult = function(values2, dates2, rate) {
        var r3 = rate + 1;
        var result = values2[0];
        for (var i4 = 1; i4 < values2.length; i4++) {
          result += values2[i4] / Math.pow(r3, (dates2[i4] - dates2[0]) / 365);
        }
        return result;
      };
      var irrResultDeriv = function(values2, dates2, rate) {
        var r3 = rate + 1;
        var result = 0;
        for (var i4 = 1; i4 < values2.length; i4++) {
          var frac = (dates2[i4] - dates2[0]) / 365;
          result -= frac * values2[i4] / Math.pow(r3, frac + 1);
        }
        return result;
      };
      var dates = [];
      var positive = false;
      var negative = false;
      for (var i3 = 0; i3 < values.length; i3++) {
        dates[i3] = i3 === 0 ? 0 : dates[i3 - 1] + 365;
        if (values[i3] > 0) {
          positive = true;
        }
        if (values[i3] < 0) {
          negative = true;
        }
      }
      if (!positive || !negative) {
        return error2.num;
      }
      guess = guess === void 0 ? 0.1 : guess;
      var resultRate = guess;
      var epsMax = 1e-10;
      var newRate, epsRate, resultValue;
      var contLoop = true;
      do {
        resultValue = irrResult(values, dates, resultRate);
        newRate = resultRate - resultValue / irrResultDeriv(values, dates, resultRate);
        epsRate = Math.abs(newRate - resultRate);
        resultRate = newRate;
        contLoop = epsRate > epsMax && Math.abs(resultValue) > epsMax;
      } while (contLoop);
      return resultRate;
    };
    exports.ISPMT = function(rate, period, periods, value) {
      rate = utils.parseNumber(rate);
      period = utils.parseNumber(period);
      periods = utils.parseNumber(periods);
      value = utils.parseNumber(value);
      if (utils.anyIsError(rate, period, periods, value)) {
        return error2.value;
      }
      return value * rate * (period / periods - 1);
    };
    exports.MDURATION = function() {
      throw new Error("MDURATION is not implemented");
    };
    exports.MIRR = function(values, finance_rate, reinvest_rate) {
      values = utils.parseNumberArray(utils.flatten(values));
      finance_rate = utils.parseNumber(finance_rate);
      reinvest_rate = utils.parseNumber(reinvest_rate);
      if (utils.anyIsError(values, finance_rate, reinvest_rate)) {
        return error2.value;
      }
      var n3 = values.length;
      var payments = [];
      var incomes = [];
      for (var i3 = 0; i3 < n3; i3++) {
        if (values[i3] < 0) {
          payments.push(values[i3]);
        } else {
          incomes.push(values[i3]);
        }
      }
      var num = -exports.NPV(reinvest_rate, incomes) * Math.pow(1 + reinvest_rate, n3 - 1);
      var den = exports.NPV(finance_rate, payments) * (1 + finance_rate);
      return Math.pow(num / den, 1 / (n3 - 1)) - 1;
    };
    exports.NOMINAL = function(rate, periods) {
      rate = utils.parseNumber(rate);
      periods = utils.parseNumber(periods);
      if (utils.anyIsError(rate, periods)) {
        return error2.value;
      }
      if (rate <= 0 || periods < 1) {
        return error2.num;
      }
      periods = parseInt(periods, 10);
      return (Math.pow(rate + 1, 1 / periods) - 1) * periods;
    };
    exports.NPER = function(rate, payment, present, future, type) {
      type = type === void 0 ? 0 : type;
      future = future === void 0 ? 0 : future;
      rate = utils.parseNumber(rate);
      payment = utils.parseNumber(payment);
      present = utils.parseNumber(present);
      future = utils.parseNumber(future);
      type = utils.parseNumber(type);
      if (utils.anyIsError(rate, payment, present, future, type)) {
        return error2.value;
      }
      var num = payment * (1 + rate * type) - future * rate;
      var den = present * rate + payment * (1 + rate * type);
      return Math.log(num / den) / Math.log(1 + rate);
    };
    exports.NPV = function() {
      var args = utils.parseNumberArray(utils.flatten(arguments));
      if (args instanceof Error) {
        return args;
      }
      var rate = args[0];
      var value = 0;
      for (var j2 = 1; j2 < args.length; j2++) {
        value += args[j2] / Math.pow(1 + rate, j2);
      }
      return value;
    };
    exports.ODDFPRICE = function() {
      throw new Error("ODDFPRICE is not implemented");
    };
    exports.ODDFYIELD = function() {
      throw new Error("ODDFYIELD is not implemented");
    };
    exports.ODDLPRICE = function() {
      throw new Error("ODDLPRICE is not implemented");
    };
    exports.ODDLYIELD = function() {
      throw new Error("ODDLYIELD is not implemented");
    };
    exports.PDURATION = function(rate, present, future) {
      rate = utils.parseNumber(rate);
      present = utils.parseNumber(present);
      future = utils.parseNumber(future);
      if (utils.anyIsError(rate, present, future)) {
        return error2.value;
      }
      if (rate <= 0) {
        return error2.num;
      }
      return (Math.log(future) - Math.log(present)) / Math.log(1 + rate);
    };
    exports.PMT = function(rate, periods, present, future, type) {
      future = future || 0;
      type = type || 0;
      rate = utils.parseNumber(rate);
      periods = utils.parseNumber(periods);
      present = utils.parseNumber(present);
      future = utils.parseNumber(future);
      type = utils.parseNumber(type);
      if (utils.anyIsError(rate, periods, present, future, type)) {
        return error2.value;
      }
      var result;
      if (rate === 0) {
        result = (present + future) / periods;
      } else {
        var term = Math.pow(1 + rate, periods);
        if (type === 1) {
          result = (future * rate / (term - 1) + present * rate / (1 - 1 / term)) / (1 + rate);
        } else {
          result = future * rate / (term - 1) + present * rate / (1 - 1 / term);
        }
      }
      return -result;
    };
    exports.PPMT = function(rate, period, periods, present, future, type) {
      future = future || 0;
      type = type || 0;
      rate = utils.parseNumber(rate);
      periods = utils.parseNumber(periods);
      present = utils.parseNumber(present);
      future = utils.parseNumber(future);
      type = utils.parseNumber(type);
      if (utils.anyIsError(rate, periods, present, future, type)) {
        return error2.value;
      }
      return exports.PMT(rate, periods, present, future, type) - exports.IPMT(rate, period, periods, present, future, type);
    };
    exports.PRICE = function() {
      throw new Error("PRICE is not implemented");
    };
    exports.PRICEDISC = function() {
      throw new Error("PRICEDISC is not implemented");
    };
    exports.PRICEMAT = function() {
      throw new Error("PRICEMAT is not implemented");
    };
    exports.PV = function(rate, periods, payment, future, type) {
      future = future || 0;
      type = type || 0;
      rate = utils.parseNumber(rate);
      periods = utils.parseNumber(periods);
      payment = utils.parseNumber(payment);
      future = utils.parseNumber(future);
      type = utils.parseNumber(type);
      if (utils.anyIsError(rate, periods, payment, future, type)) {
        return error2.value;
      }
      if (rate === 0) {
        return -payment * periods - future;
      } else {
        return ((1 - Math.pow(1 + rate, periods)) / rate * payment * (1 + rate * type) - future) / Math.pow(1 + rate, periods);
      }
    };
    exports.RATE = function(periods, payment, present, future, type, guess) {
      guess = guess === void 0 ? 0.01 : guess;
      future = future === void 0 ? 0 : future;
      type = type === void 0 ? 0 : type;
      periods = utils.parseNumber(periods);
      payment = utils.parseNumber(payment);
      present = utils.parseNumber(present);
      future = utils.parseNumber(future);
      type = utils.parseNumber(type);
      guess = utils.parseNumber(guess);
      if (utils.anyIsError(periods, payment, present, future, type, guess)) {
        return error2.value;
      }
      var epsMax = 1e-10;
      var iterMax = 50;
      var y2, y0, y1, x0, x1 = 0, f3 = 0, i3 = 0;
      var rate = guess;
      if (Math.abs(rate) < epsMax) {
        y2 = present * (1 + periods * rate) + payment * (1 + rate * type) * periods + future;
      } else {
        f3 = Math.exp(periods * Math.log(1 + rate));
        y2 = present * f3 + payment * (1 / rate + type) * (f3 - 1) + future;
      }
      y0 = present + payment * periods + future;
      y1 = present * f3 + payment * (1 / rate + type) * (f3 - 1) + future;
      i3 = x0 = 0;
      x1 = rate;
      while (Math.abs(y0 - y1) > epsMax && i3 < iterMax) {
        rate = (y1 * x0 - y0 * x1) / (y1 - y0);
        x0 = x1;
        x1 = rate;
        if (Math.abs(rate) < epsMax) {
          y2 = present * (1 + periods * rate) + payment * (1 + rate * type) * periods + future;
        } else {
          f3 = Math.exp(periods * Math.log(1 + rate));
          y2 = present * f3 + payment * (1 / rate + type) * (f3 - 1) + future;
        }
        y0 = y1;
        y1 = y2;
        ++i3;
      }
      return rate;
    };
    exports.RECEIVED = function() {
      throw new Error("RECEIVED is not implemented");
    };
    exports.RRI = function(periods, present, future) {
      periods = utils.parseNumber(periods);
      present = utils.parseNumber(present);
      future = utils.parseNumber(future);
      if (utils.anyIsError(periods, present, future)) {
        return error2.value;
      }
      if (periods === 0 || present === 0) {
        return error2.num;
      }
      return Math.pow(future / present, 1 / periods) - 1;
    };
    exports.SLN = function(cost, salvage, life) {
      cost = utils.parseNumber(cost);
      salvage = utils.parseNumber(salvage);
      life = utils.parseNumber(life);
      if (utils.anyIsError(cost, salvage, life)) {
        return error2.value;
      }
      if (life === 0) {
        return error2.num;
      }
      return (cost - salvage) / life;
    };
    exports.SYD = function(cost, salvage, life, period) {
      cost = utils.parseNumber(cost);
      salvage = utils.parseNumber(salvage);
      life = utils.parseNumber(life);
      period = utils.parseNumber(period);
      if (utils.anyIsError(cost, salvage, life, period)) {
        return error2.value;
      }
      if (life === 0) {
        return error2.num;
      }
      if (period < 1 || period > life) {
        return error2.num;
      }
      period = parseInt(period, 10);
      return (cost - salvage) * (life - period + 1) * 2 / (life * (life + 1));
    };
    exports.TBILLEQ = function(settlement, maturity, discount) {
      settlement = utils.parseDate(settlement);
      maturity = utils.parseDate(maturity);
      discount = utils.parseNumber(discount);
      if (utils.anyIsError(settlement, maturity, discount)) {
        return error2.value;
      }
      if (discount <= 0) {
        return error2.num;
      }
      if (settlement > maturity) {
        return error2.num;
      }
      if (maturity - settlement > 365 * 24 * 60 * 60 * 1e3) {
        return error2.num;
      }
      return 365 * discount / (360 - discount * dateTime.DAYS360(settlement, maturity, false));
    };
    exports.TBILLPRICE = function(settlement, maturity, discount) {
      settlement = utils.parseDate(settlement);
      maturity = utils.parseDate(maturity);
      discount = utils.parseNumber(discount);
      if (utils.anyIsError(settlement, maturity, discount)) {
        return error2.value;
      }
      if (discount <= 0) {
        return error2.num;
      }
      if (settlement > maturity) {
        return error2.num;
      }
      if (maturity - settlement > 365 * 24 * 60 * 60 * 1e3) {
        return error2.num;
      }
      return 100 * (1 - discount * dateTime.DAYS360(settlement, maturity, false) / 360);
    };
    exports.TBILLYIELD = function(settlement, maturity, price) {
      settlement = utils.parseDate(settlement);
      maturity = utils.parseDate(maturity);
      price = utils.parseNumber(price);
      if (utils.anyIsError(settlement, maturity, price)) {
        return error2.value;
      }
      if (price <= 0) {
        return error2.num;
      }
      if (settlement > maturity) {
        return error2.num;
      }
      if (maturity - settlement > 365 * 24 * 60 * 60 * 1e3) {
        return error2.num;
      }
      return (100 - price) * 360 / (price * dateTime.DAYS360(settlement, maturity, false));
    };
    exports.VDB = function() {
      throw new Error("VDB is not implemented");
    };
    exports.XNPV = function(rate, values, dates) {
      rate = utils.parseNumber(rate);
      values = utils.parseNumberArray(utils.flatten(values));
      dates = utils.parseDateArray(utils.flatten(dates));
      if (utils.anyIsError(rate, values, dates)) {
        return error2.value;
      }
      var result = 0;
      for (var i3 = 0; i3 < values.length; i3++) {
        result += values[i3] / Math.pow(1 + rate, dateTime.DAYS(dates[i3], dates[0]) / 365);
      }
      return result;
    };
    exports.YIELD = function() {
      throw new Error("YIELD is not implemented");
    };
    exports.YIELDDISC = function() {
      throw new Error("YIELDDISC is not implemented");
    };
    exports.YIELDMAT = function() {
      throw new Error("YIELDMAT is not implemented");
    };
  }
});

// node_modules/@handsontable/formulajs/lib/lookup-reference.js
var require_lookup_reference = __commonJS({
  "node_modules/@handsontable/formulajs/lib/lookup-reference.js"(exports) {
    var error2 = require_error();
    var utils = require_common();
    exports.MATCH = function(lookupValue, lookupArray, matchType) {
      if (!lookupValue && !lookupArray) {
        return error2.na;
      }
      if (arguments.length === 2) {
        matchType = 1;
      }
      if (!(lookupArray instanceof Array)) {
        return error2.na;
      }
      if (matchType !== -1 && matchType !== 0 && matchType !== 1) {
        return error2.na;
      }
      var index;
      var indexValue;
      for (var idx = 0; idx < lookupArray.length; idx++) {
        if (matchType === 1) {
          if (lookupArray[idx] === lookupValue) {
            return idx + 1;
          } else if (lookupArray[idx] < lookupValue) {
            if (!indexValue) {
              index = idx + 1;
              indexValue = lookupArray[idx];
            } else if (lookupArray[idx] > indexValue) {
              index = idx + 1;
              indexValue = lookupArray[idx];
            }
          }
        } else if (matchType === 0) {
          if (typeof lookupValue === "string") {
            lookupValue = lookupValue.replace(/\?/g, ".");
            if (lookupArray[idx].toLowerCase().match(lookupValue.toLowerCase())) {
              return idx + 1;
            }
          } else {
            if (lookupArray[idx] === lookupValue) {
              return idx + 1;
            }
          }
        } else if (matchType === -1) {
          if (lookupArray[idx] === lookupValue) {
            return idx + 1;
          } else if (lookupArray[idx] > lookupValue) {
            if (!indexValue) {
              index = idx + 1;
              indexValue = lookupArray[idx];
            } else if (lookupArray[idx] < indexValue) {
              index = idx + 1;
              indexValue = lookupArray[idx];
            }
          }
        }
      }
      return index ? index : error2.na;
    };
    exports.VLOOKUP = function(needle, table, index, rangeLookup) {
      if (!needle || !table || !index) {
        return error2.na;
      }
      rangeLookup = rangeLookup || false;
      for (var i3 = 0; i3 < table.length; i3++) {
        var row = table[i3];
        if (!rangeLookup && row[0] === needle || (row[0] === needle || rangeLookup && typeof row[0] === "string" && row[0].toLowerCase().indexOf(needle.toLowerCase()) !== -1)) {
          return index < row.length + 1 ? row[index - 1] : error2.ref;
        }
      }
      return error2.na;
    };
    exports.HLOOKUP = function(needle, table, index, rangeLookup) {
      if (!needle || !table || !index) {
        return error2.na;
      }
      rangeLookup = rangeLookup || false;
      var transposedTable = utils.transpose(table);
      for (var i3 = 0; i3 < transposedTable.length; i3++) {
        var row = transposedTable[i3];
        if (!rangeLookup && row[0] === needle || (row[0] === needle || rangeLookup && typeof row[0] === "string" && row[0].toLowerCase().indexOf(needle.toLowerCase()) !== -1)) {
          return index < row.length + 1 ? row[index - 1] : error2.ref;
        }
      }
      return error2.na;
    };
  }
});

// node_modules/@handsontable/formulajs/index.js
var require_formulajs = __commonJS({
  "node_modules/@handsontable/formulajs/index.js"(exports) {
    var categories = [
      require_compatibility(),
      require_database(),
      require_engineering(),
      require_logical(),
      require_math_trig(),
      require_text(),
      require_date_time(),
      require_financial(),
      require_information(),
      require_lookup_reference(),
      require_statistical(),
      require_miscellaneous()
    ];
    for (c3 in categories) {
      category = categories[c3];
      for (f3 in category) {
        exports[f3] = exports[f3] || category[f3];
      }
    }
    var category;
    var f3;
    var c3;
  }
});

// node_modules/object-keys/isArguments.js
var require_isArguments = __commonJS({
  "node_modules/object-keys/isArguments.js"(exports, module) {
    "use strict";
    var toStr = Object.prototype.toString;
    module.exports = function isArguments(value) {
      var str = toStr.call(value);
      var isArgs = str === "[object Arguments]";
      if (!isArgs) {
        isArgs = str !== "[object Array]" && value !== null && typeof value === "object" && typeof value.length === "number" && value.length >= 0 && toStr.call(value.callee) === "[object Function]";
      }
      return isArgs;
    };
  }
});

// node_modules/object-keys/implementation.js
var require_implementation = __commonJS({
  "node_modules/object-keys/implementation.js"(exports, module) {
    "use strict";
    var keysShim;
    if (!Object.keys) {
      has2 = Object.prototype.hasOwnProperty;
      toStr = Object.prototype.toString;
      isArgs = require_isArguments();
      isEnumerable = Object.prototype.propertyIsEnumerable;
      hasDontEnumBug = !isEnumerable.call({ toString: null }, "toString");
      hasProtoEnumBug = isEnumerable.call(function() {
      }, "prototype");
      dontEnums = [
        "toString",
        "toLocaleString",
        "valueOf",
        "hasOwnProperty",
        "isPrototypeOf",
        "propertyIsEnumerable",
        "constructor"
      ];
      equalsConstructorPrototype = function(o5) {
        var ctor = o5.constructor;
        return ctor && ctor.prototype === o5;
      };
      excludedKeys = {
        $applicationCache: true,
        $console: true,
        $external: true,
        $frame: true,
        $frameElement: true,
        $frames: true,
        $innerHeight: true,
        $innerWidth: true,
        $onmozfullscreenchange: true,
        $onmozfullscreenerror: true,
        $outerHeight: true,
        $outerWidth: true,
        $pageXOffset: true,
        $pageYOffset: true,
        $parent: true,
        $scrollLeft: true,
        $scrollTop: true,
        $scrollX: true,
        $scrollY: true,
        $self: true,
        $webkitIndexedDB: true,
        $webkitStorageInfo: true,
        $window: true
      };
      hasAutomationEqualityBug = function() {
        if (typeof window === "undefined") {
          return false;
        }
        for (var k2 in window) {
          try {
            if (!excludedKeys["$" + k2] && has2.call(window, k2) && window[k2] !== null && typeof window[k2] === "object") {
              try {
                equalsConstructorPrototype(window[k2]);
              } catch (e3) {
                return true;
              }
            }
          } catch (e3) {
            return true;
          }
        }
        return false;
      }();
      equalsConstructorPrototypeIfNotBuggy = function(o5) {
        if (typeof window === "undefined" || !hasAutomationEqualityBug) {
          return equalsConstructorPrototype(o5);
        }
        try {
          return equalsConstructorPrototype(o5);
        } catch (e3) {
          return false;
        }
      };
      keysShim = function keys(object) {
        var isObject = object !== null && typeof object === "object";
        var isFunction = toStr.call(object) === "[object Function]";
        var isArguments = isArgs(object);
        var isString = isObject && toStr.call(object) === "[object String]";
        var theKeys = [];
        if (!isObject && !isFunction && !isArguments) {
          throw new TypeError("Object.keys called on a non-object");
        }
        var skipProto = hasProtoEnumBug && isFunction;
        if (isString && object.length > 0 && !has2.call(object, 0)) {
          for (var i3 = 0; i3 < object.length; ++i3) {
            theKeys.push(String(i3));
          }
        }
        if (isArguments && object.length > 0) {
          for (var j2 = 0; j2 < object.length; ++j2) {
            theKeys.push(String(j2));
          }
        } else {
          for (var name in object) {
            if (!(skipProto && name === "prototype") && has2.call(object, name)) {
              theKeys.push(String(name));
            }
          }
        }
        if (hasDontEnumBug) {
          var skipConstructor = equalsConstructorPrototypeIfNotBuggy(object);
          for (var k2 = 0; k2 < dontEnums.length; ++k2) {
            if (!(skipConstructor && dontEnums[k2] === "constructor") && has2.call(object, dontEnums[k2])) {
              theKeys.push(dontEnums[k2]);
            }
          }
        }
        return theKeys;
      };
    }
    var has2;
    var toStr;
    var isArgs;
    var isEnumerable;
    var hasDontEnumBug;
    var hasProtoEnumBug;
    var dontEnums;
    var equalsConstructorPrototype;
    var excludedKeys;
    var hasAutomationEqualityBug;
    var equalsConstructorPrototypeIfNotBuggy;
    module.exports = keysShim;
  }
});

// node_modules/object-keys/index.js
var require_object_keys = __commonJS({
  "node_modules/object-keys/index.js"(exports, module) {
    "use strict";
    var slice2 = Array.prototype.slice;
    var isArgs = require_isArguments();
    var origKeys = Object.keys;
    var keysShim = origKeys ? function keys(o5) {
      return origKeys(o5);
    } : require_implementation();
    var originalKeys = Object.keys;
    keysShim.shim = function shimObjectKeys() {
      if (Object.keys) {
        var keysWorksWithArguments = function() {
          var args = Object.keys(arguments);
          return args && args.length === arguments.length;
        }(1, 2);
        if (!keysWorksWithArguments) {
          Object.keys = function keys(object) {
            if (isArgs(object)) {
              return originalKeys(slice2.call(object));
            }
            return originalKeys(object);
          };
        }
      } else {
        Object.keys = keysShim;
      }
      return Object.keys || keysShim;
    };
    module.exports = keysShim;
  }
});

// node_modules/has-symbols/shams.js
var require_shams = __commonJS({
  "node_modules/has-symbols/shams.js"(exports, module) {
    "use strict";
    module.exports = function hasSymbols() {
      if (typeof Symbol !== "function" || typeof Object.getOwnPropertySymbols !== "function") {
        return false;
      }
      if (typeof Symbol.iterator === "symbol") {
        return true;
      }
      var obj = {};
      var sym = Symbol("test");
      var symObj = Object(sym);
      if (typeof sym === "string") {
        return false;
      }
      if (Object.prototype.toString.call(sym) !== "[object Symbol]") {
        return false;
      }
      if (Object.prototype.toString.call(symObj) !== "[object Symbol]") {
        return false;
      }
      var symVal = 42;
      obj[sym] = symVal;
      for (sym in obj) {
        return false;
      }
      if (typeof Object.keys === "function" && Object.keys(obj).length !== 0) {
        return false;
      }
      if (typeof Object.getOwnPropertyNames === "function" && Object.getOwnPropertyNames(obj).length !== 0) {
        return false;
      }
      var syms = Object.getOwnPropertySymbols(obj);
      if (syms.length !== 1 || syms[0] !== sym) {
        return false;
      }
      if (!Object.prototype.propertyIsEnumerable.call(obj, sym)) {
        return false;
      }
      if (typeof Object.getOwnPropertyDescriptor === "function") {
        var descriptor = Object.getOwnPropertyDescriptor(obj, sym);
        if (descriptor.value !== symVal || descriptor.enumerable !== true) {
          return false;
        }
      }
      return true;
    };
  }
});

// node_modules/has-symbols/index.js
var require_has_symbols = __commonJS({
  "node_modules/has-symbols/index.js"(exports, module) {
    "use strict";
    var origSymbol = typeof Symbol !== "undefined" && Symbol;
    var hasSymbolSham = require_shams();
    module.exports = function hasNativeSymbols() {
      if (typeof origSymbol !== "function") {
        return false;
      }
      if (typeof Symbol !== "function") {
        return false;
      }
      if (typeof origSymbol("foo") !== "symbol") {
        return false;
      }
      if (typeof Symbol("bar") !== "symbol") {
        return false;
      }
      return hasSymbolSham();
    };
  }
});

// node_modules/function-bind/implementation.js
var require_implementation2 = __commonJS({
  "node_modules/function-bind/implementation.js"(exports, module) {
    "use strict";
    var ERROR_MESSAGE = "Function.prototype.bind called on incompatible ";
    var slice2 = Array.prototype.slice;
    var toStr = Object.prototype.toString;
    var funcType = "[object Function]";
    module.exports = function bind(that) {
      var target = this;
      if (typeof target !== "function" || toStr.call(target) !== funcType) {
        throw new TypeError(ERROR_MESSAGE + target);
      }
      var args = slice2.call(arguments, 1);
      var bound;
      var binder = function() {
        if (this instanceof bound) {
          var result = target.apply(
            this,
            args.concat(slice2.call(arguments))
          );
          if (Object(result) === result) {
            return result;
          }
          return this;
        } else {
          return target.apply(
            that,
            args.concat(slice2.call(arguments))
          );
        }
      };
      var boundLength = Math.max(0, target.length - args.length);
      var boundArgs = [];
      for (var i3 = 0; i3 < boundLength; i3++) {
        boundArgs.push("$" + i3);
      }
      bound = Function("binder", "return function (" + boundArgs.join(",") + "){ return binder.apply(this,arguments); }")(binder);
      if (target.prototype) {
        var Empty = function Empty2() {
        };
        Empty.prototype = target.prototype;
        bound.prototype = new Empty();
        Empty.prototype = null;
      }
      return bound;
    };
  }
});

// node_modules/function-bind/index.js
var require_function_bind = __commonJS({
  "node_modules/function-bind/index.js"(exports, module) {
    "use strict";
    var implementation = require_implementation2();
    module.exports = Function.prototype.bind || implementation;
  }
});

// node_modules/has/src/index.js
var require_src = __commonJS({
  "node_modules/has/src/index.js"(exports, module) {
    "use strict";
    var bind = require_function_bind();
    module.exports = bind.call(Function.call, Object.prototype.hasOwnProperty);
  }
});

// node_modules/get-intrinsic/index.js
var require_get_intrinsic = __commonJS({
  "node_modules/get-intrinsic/index.js"(exports, module) {
    "use strict";
    var undefined2;
    var $SyntaxError = SyntaxError;
    var $Function = Function;
    var $TypeError = TypeError;
    var getEvalledConstructor = function(expressionSyntax) {
      try {
        return $Function('"use strict"; return (' + expressionSyntax + ").constructor;")();
      } catch (e3) {
      }
    };
    var $gOPD = Object.getOwnPropertyDescriptor;
    if ($gOPD) {
      try {
        $gOPD({}, "");
      } catch (e3) {
        $gOPD = null;
      }
    }
    var throwTypeError = function() {
      throw new $TypeError();
    };
    var ThrowTypeError = $gOPD ? function() {
      try {
        arguments.callee;
        return throwTypeError;
      } catch (calleeThrows) {
        try {
          return $gOPD(arguments, "callee").get;
        } catch (gOPDthrows) {
          return throwTypeError;
        }
      }
    }() : throwTypeError;
    var hasSymbols = require_has_symbols()();
    var getProto = Object.getPrototypeOf || function(x2) {
      return x2.__proto__;
    };
    var needsEval = {};
    var TypedArray = typeof Uint8Array === "undefined" ? undefined2 : getProto(Uint8Array);
    var INTRINSICS = {
      "%AggregateError%": typeof AggregateError === "undefined" ? undefined2 : AggregateError,
      "%Array%": Array,
      "%ArrayBuffer%": typeof ArrayBuffer === "undefined" ? undefined2 : ArrayBuffer,
      "%ArrayIteratorPrototype%": hasSymbols ? getProto([][Symbol.iterator]()) : undefined2,
      "%AsyncFromSyncIteratorPrototype%": undefined2,
      "%AsyncFunction%": needsEval,
      "%AsyncGenerator%": needsEval,
      "%AsyncGeneratorFunction%": needsEval,
      "%AsyncIteratorPrototype%": needsEval,
      "%Atomics%": typeof Atomics === "undefined" ? undefined2 : Atomics,
      "%BigInt%": typeof BigInt === "undefined" ? undefined2 : BigInt,
      "%BigInt64Array%": typeof BigInt64Array === "undefined" ? undefined2 : BigInt64Array,
      "%BigUint64Array%": typeof BigUint64Array === "undefined" ? undefined2 : BigUint64Array,
      "%Boolean%": Boolean,
      "%DataView%": typeof DataView === "undefined" ? undefined2 : DataView,
      "%Date%": Date,
      "%decodeURI%": decodeURI,
      "%decodeURIComponent%": decodeURIComponent,
      "%encodeURI%": encodeURI,
      "%encodeURIComponent%": encodeURIComponent,
      "%Error%": Error,
      "%eval%": eval,
      // eslint-disable-line no-eval
      "%EvalError%": EvalError,
      "%Float32Array%": typeof Float32Array === "undefined" ? undefined2 : Float32Array,
      "%Float64Array%": typeof Float64Array === "undefined" ? undefined2 : Float64Array,
      "%FinalizationRegistry%": typeof FinalizationRegistry === "undefined" ? undefined2 : FinalizationRegistry,
      "%Function%": $Function,
      "%GeneratorFunction%": needsEval,
      "%Int8Array%": typeof Int8Array === "undefined" ? undefined2 : Int8Array,
      "%Int16Array%": typeof Int16Array === "undefined" ? undefined2 : Int16Array,
      "%Int32Array%": typeof Int32Array === "undefined" ? undefined2 : Int32Array,
      "%isFinite%": isFinite,
      "%isNaN%": isNaN,
      "%IteratorPrototype%": hasSymbols ? getProto(getProto([][Symbol.iterator]())) : undefined2,
      "%JSON%": typeof JSON === "object" ? JSON : undefined2,
      "%Map%": typeof Map === "undefined" ? undefined2 : Map,
      "%MapIteratorPrototype%": typeof Map === "undefined" || !hasSymbols ? undefined2 : getProto((/* @__PURE__ */ new Map())[Symbol.iterator]()),
      "%Math%": Math,
      "%Number%": Number,
      "%Object%": Object,
      "%parseFloat%": parseFloat,
      "%parseInt%": parseInt,
      "%Promise%": typeof Promise === "undefined" ? undefined2 : Promise,
      "%Proxy%": typeof Proxy === "undefined" ? undefined2 : Proxy,
      "%RangeError%": RangeError,
      "%ReferenceError%": ReferenceError,
      "%Reflect%": typeof Reflect === "undefined" ? undefined2 : Reflect,
      "%RegExp%": RegExp,
      "%Set%": typeof Set === "undefined" ? undefined2 : Set,
      "%SetIteratorPrototype%": typeof Set === "undefined" || !hasSymbols ? undefined2 : getProto((/* @__PURE__ */ new Set())[Symbol.iterator]()),
      "%SharedArrayBuffer%": typeof SharedArrayBuffer === "undefined" ? undefined2 : SharedArrayBuffer,
      "%String%": String,
      "%StringIteratorPrototype%": hasSymbols ? getProto(""[Symbol.iterator]()) : undefined2,
      "%Symbol%": hasSymbols ? Symbol : undefined2,
      "%SyntaxError%": $SyntaxError,
      "%ThrowTypeError%": ThrowTypeError,
      "%TypedArray%": TypedArray,
      "%TypeError%": $TypeError,
      "%Uint8Array%": typeof Uint8Array === "undefined" ? undefined2 : Uint8Array,
      "%Uint8ClampedArray%": typeof Uint8ClampedArray === "undefined" ? undefined2 : Uint8ClampedArray,
      "%Uint16Array%": typeof Uint16Array === "undefined" ? undefined2 : Uint16Array,
      "%Uint32Array%": typeof Uint32Array === "undefined" ? undefined2 : Uint32Array,
      "%URIError%": URIError,
      "%WeakMap%": typeof WeakMap === "undefined" ? undefined2 : WeakMap,
      "%WeakRef%": typeof WeakRef === "undefined" ? undefined2 : WeakRef,
      "%WeakSet%": typeof WeakSet === "undefined" ? undefined2 : WeakSet
    };
    try {
      null.error;
    } catch (e3) {
      errorProto = getProto(getProto(e3));
      INTRINSICS["%Error.prototype%"] = errorProto;
    }
    var errorProto;
    var doEval = function doEval2(name) {
      var value;
      if (name === "%AsyncFunction%") {
        value = getEvalledConstructor("async function () {}");
      } else if (name === "%GeneratorFunction%") {
        value = getEvalledConstructor("function* () {}");
      } else if (name === "%AsyncGeneratorFunction%") {
        value = getEvalledConstructor("async function* () {}");
      } else if (name === "%AsyncGenerator%") {
        var fn2 = doEval2("%AsyncGeneratorFunction%");
        if (fn2) {
          value = fn2.prototype;
        }
      } else if (name === "%AsyncIteratorPrototype%") {
        var gen = doEval2("%AsyncGenerator%");
        if (gen) {
          value = getProto(gen.prototype);
        }
      }
      INTRINSICS[name] = value;
      return value;
    };
    var LEGACY_ALIASES = {
      "%ArrayBufferPrototype%": ["ArrayBuffer", "prototype"],
      "%ArrayPrototype%": ["Array", "prototype"],
      "%ArrayProto_entries%": ["Array", "prototype", "entries"],
      "%ArrayProto_forEach%": ["Array", "prototype", "forEach"],
      "%ArrayProto_keys%": ["Array", "prototype", "keys"],
      "%ArrayProto_values%": ["Array", "prototype", "values"],
      "%AsyncFunctionPrototype%": ["AsyncFunction", "prototype"],
      "%AsyncGenerator%": ["AsyncGeneratorFunction", "prototype"],
      "%AsyncGeneratorPrototype%": ["AsyncGeneratorFunction", "prototype", "prototype"],
      "%BooleanPrototype%": ["Boolean", "prototype"],
      "%DataViewPrototype%": ["DataView", "prototype"],
      "%DatePrototype%": ["Date", "prototype"],
      "%ErrorPrototype%": ["Error", "prototype"],
      "%EvalErrorPrototype%": ["EvalError", "prototype"],
      "%Float32ArrayPrototype%": ["Float32Array", "prototype"],
      "%Float64ArrayPrototype%": ["Float64Array", "prototype"],
      "%FunctionPrototype%": ["Function", "prototype"],
      "%Generator%": ["GeneratorFunction", "prototype"],
      "%GeneratorPrototype%": ["GeneratorFunction", "prototype", "prototype"],
      "%Int8ArrayPrototype%": ["Int8Array", "prototype"],
      "%Int16ArrayPrototype%": ["Int16Array", "prototype"],
      "%Int32ArrayPrototype%": ["Int32Array", "prototype"],
      "%JSONParse%": ["JSON", "parse"],
      "%JSONStringify%": ["JSON", "stringify"],
      "%MapPrototype%": ["Map", "prototype"],
      "%NumberPrototype%": ["Number", "prototype"],
      "%ObjectPrototype%": ["Object", "prototype"],
      "%ObjProto_toString%": ["Object", "prototype", "toString"],
      "%ObjProto_valueOf%": ["Object", "prototype", "valueOf"],
      "%PromisePrototype%": ["Promise", "prototype"],
      "%PromiseProto_then%": ["Promise", "prototype", "then"],
      "%Promise_all%": ["Promise", "all"],
      "%Promise_reject%": ["Promise", "reject"],
      "%Promise_resolve%": ["Promise", "resolve"],
      "%RangeErrorPrototype%": ["RangeError", "prototype"],
      "%ReferenceErrorPrototype%": ["ReferenceError", "prototype"],
      "%RegExpPrototype%": ["RegExp", "prototype"],
      "%SetPrototype%": ["Set", "prototype"],
      "%SharedArrayBufferPrototype%": ["SharedArrayBuffer", "prototype"],
      "%StringPrototype%": ["String", "prototype"],
      "%SymbolPrototype%": ["Symbol", "prototype"],
      "%SyntaxErrorPrototype%": ["SyntaxError", "prototype"],
      "%TypedArrayPrototype%": ["TypedArray", "prototype"],
      "%TypeErrorPrototype%": ["TypeError", "prototype"],
      "%Uint8ArrayPrototype%": ["Uint8Array", "prototype"],
      "%Uint8ClampedArrayPrototype%": ["Uint8ClampedArray", "prototype"],
      "%Uint16ArrayPrototype%": ["Uint16Array", "prototype"],
      "%Uint32ArrayPrototype%": ["Uint32Array", "prototype"],
      "%URIErrorPrototype%": ["URIError", "prototype"],
      "%WeakMapPrototype%": ["WeakMap", "prototype"],
      "%WeakSetPrototype%": ["WeakSet", "prototype"]
    };
    var bind = require_function_bind();
    var hasOwn = require_src();
    var $concat = bind.call(Function.call, Array.prototype.concat);
    var $spliceApply = bind.call(Function.apply, Array.prototype.splice);
    var $replace = bind.call(Function.call, String.prototype.replace);
    var $strSlice = bind.call(Function.call, String.prototype.slice);
    var $exec = bind.call(Function.call, RegExp.prototype.exec);
    var rePropName = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g;
    var reEscapeChar = /\\(\\)?/g;
    var stringToPath = function stringToPath2(string) {
      var first = $strSlice(string, 0, 1);
      var last = $strSlice(string, -1);
      if (first === "%" && last !== "%") {
        throw new $SyntaxError("invalid intrinsic syntax, expected closing `%`");
      } else if (last === "%" && first !== "%") {
        throw new $SyntaxError("invalid intrinsic syntax, expected opening `%`");
      }
      var result = [];
      $replace(string, rePropName, function(match, number, quote, subString) {
        result[result.length] = quote ? $replace(subString, reEscapeChar, "$1") : number || match;
      });
      return result;
    };
    var getBaseIntrinsic = function getBaseIntrinsic2(name, allowMissing) {
      var intrinsicName = name;
      var alias;
      if (hasOwn(LEGACY_ALIASES, intrinsicName)) {
        alias = LEGACY_ALIASES[intrinsicName];
        intrinsicName = "%" + alias[0] + "%";
      }
      if (hasOwn(INTRINSICS, intrinsicName)) {
        var value = INTRINSICS[intrinsicName];
        if (value === needsEval) {
          value = doEval(intrinsicName);
        }
        if (typeof value === "undefined" && !allowMissing) {
          throw new $TypeError("intrinsic " + name + " exists, but is not available. Please file an issue!");
        }
        return {
          alias,
          name: intrinsicName,
          value
        };
      }
      throw new $SyntaxError("intrinsic " + name + " does not exist!");
    };
    module.exports = function GetIntrinsic(name, allowMissing) {
      if (typeof name !== "string" || name.length === 0) {
        throw new $TypeError("intrinsic name must be a non-empty string");
      }
      if (arguments.length > 1 && typeof allowMissing !== "boolean") {
        throw new $TypeError('"allowMissing" argument must be a boolean');
      }
      if ($exec(/^%?[^%]*%?$/, name) === null) {
        throw new $SyntaxError("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
      }
      var parts = stringToPath(name);
      var intrinsicBaseName = parts.length > 0 ? parts[0] : "";
      var intrinsic = getBaseIntrinsic("%" + intrinsicBaseName + "%", allowMissing);
      var intrinsicRealName = intrinsic.name;
      var value = intrinsic.value;
      var skipFurtherCaching = false;
      var alias = intrinsic.alias;
      if (alias) {
        intrinsicBaseName = alias[0];
        $spliceApply(parts, $concat([0, 1], alias));
      }
      for (var i3 = 1, isOwn = true; i3 < parts.length; i3 += 1) {
        var part = parts[i3];
        var first = $strSlice(part, 0, 1);
        var last = $strSlice(part, -1);
        if ((first === '"' || first === "'" || first === "`" || (last === '"' || last === "'" || last === "`")) && first !== last) {
          throw new $SyntaxError("property names with quotes must have matching quotes");
        }
        if (part === "constructor" || !isOwn) {
          skipFurtherCaching = true;
        }
        intrinsicBaseName += "." + part;
        intrinsicRealName = "%" + intrinsicBaseName + "%";
        if (hasOwn(INTRINSICS, intrinsicRealName)) {
          value = INTRINSICS[intrinsicRealName];
        } else if (value != null) {
          if (!(part in value)) {
            if (!allowMissing) {
              throw new $TypeError("base intrinsic for " + name + " exists, but the property is not available.");
            }
            return void 0;
          }
          if ($gOPD && i3 + 1 >= parts.length) {
            var desc = $gOPD(value, part);
            isOwn = !!desc;
            if (isOwn && "get" in desc && !("originalValue" in desc.get)) {
              value = desc.get;
            } else {
              value = value[part];
            }
          } else {
            isOwn = hasOwn(value, part);
            value = value[part];
          }
          if (isOwn && !skipFurtherCaching) {
            INTRINSICS[intrinsicRealName] = value;
          }
        }
      }
      return value;
    };
  }
});

// node_modules/has-property-descriptors/index.js
var require_has_property_descriptors = __commonJS({
  "node_modules/has-property-descriptors/index.js"(exports, module) {
    "use strict";
    var GetIntrinsic = require_get_intrinsic();
    var $defineProperty = GetIntrinsic("%Object.defineProperty%", true);
    var hasPropertyDescriptors = function hasPropertyDescriptors2() {
      if ($defineProperty) {
        try {
          $defineProperty({}, "a", { value: 1 });
          return true;
        } catch (e3) {
          return false;
        }
      }
      return false;
    };
    hasPropertyDescriptors.hasArrayLengthDefineBug = function hasArrayLengthDefineBug() {
      if (!hasPropertyDescriptors()) {
        return null;
      }
      try {
        return $defineProperty([], "length", { value: 1 }).length !== 1;
      } catch (e3) {
        return true;
      }
    };
    module.exports = hasPropertyDescriptors;
  }
});

// node_modules/define-properties/index.js
var require_define_properties = __commonJS({
  "node_modules/define-properties/index.js"(exports, module) {
    "use strict";
    var keys = require_object_keys();
    var hasSymbols = typeof Symbol === "function" && typeof Symbol("foo") === "symbol";
    var toStr = Object.prototype.toString;
    var concat = Array.prototype.concat;
    var origDefineProperty = Object.defineProperty;
    var isFunction = function(fn2) {
      return typeof fn2 === "function" && toStr.call(fn2) === "[object Function]";
    };
    var hasPropertyDescriptors = require_has_property_descriptors()();
    var supportsDescriptors = origDefineProperty && hasPropertyDescriptors;
    var defineProperty = function(object, name, value, predicate) {
      if (name in object) {
        if (predicate === true) {
          if (object[name] === value) {
            return;
          }
        } else if (!isFunction(predicate) || !predicate()) {
          return;
        }
      }
      if (supportsDescriptors) {
        origDefineProperty(object, name, {
          configurable: true,
          enumerable: false,
          value,
          writable: true
        });
      } else {
        object[name] = value;
      }
    };
    var defineProperties = function(object, map2) {
      var predicates = arguments.length > 2 ? arguments[2] : {};
      var props = keys(map2);
      if (hasSymbols) {
        props = concat.call(props, Object.getOwnPropertySymbols(map2));
      }
      for (var i3 = 0; i3 < props.length; i3 += 1) {
        defineProperty(object, props[i3], map2[props[i3]], predicates[props[i3]]);
      }
    };
    defineProperties.supportsDescriptors = !!supportsDescriptors;
    module.exports = defineProperties;
  }
});

// node_modules/call-bind/index.js
var require_call_bind = __commonJS({
  "node_modules/call-bind/index.js"(exports, module) {
    "use strict";
    var bind = require_function_bind();
    var GetIntrinsic = require_get_intrinsic();
    var $apply = GetIntrinsic("%Function.prototype.apply%");
    var $call = GetIntrinsic("%Function.prototype.call%");
    var $reflectApply = GetIntrinsic("%Reflect.apply%", true) || bind.call($call, $apply);
    var $gOPD = GetIntrinsic("%Object.getOwnPropertyDescriptor%", true);
    var $defineProperty = GetIntrinsic("%Object.defineProperty%", true);
    var $max = GetIntrinsic("%Math.max%");
    if ($defineProperty) {
      try {
        $defineProperty({}, "a", { value: 1 });
      } catch (e3) {
        $defineProperty = null;
      }
    }
    module.exports = function callBind(originalFunction) {
      var func14 = $reflectApply(bind, $call, arguments);
      if ($gOPD && $defineProperty) {
        var desc = $gOPD(func14, "length");
        if (desc.configurable) {
          $defineProperty(
            func14,
            "length",
            { value: 1 + $max(0, originalFunction.length - (arguments.length - 1)) }
          );
        }
      }
      return func14;
    };
    var applyBind = function applyBind2() {
      return $reflectApply(bind, $apply, arguments);
    };
    if ($defineProperty) {
      $defineProperty(module.exports, "apply", { value: applyBind });
    } else {
      module.exports.apply = applyBind;
    }
  }
});

// node_modules/es-abstract/2022/abs.js
var require_abs = __commonJS({
  "node_modules/es-abstract/2022/abs.js"(exports, module) {
    "use strict";
    var GetIntrinsic = require_get_intrinsic();
    var $abs = GetIntrinsic("%Math.abs%");
    module.exports = function abs(x2) {
      return $abs(x2);
    };
  }
});

// node_modules/es-abstract/5/Type.js
var require_Type = __commonJS({
  "node_modules/es-abstract/5/Type.js"(exports, module) {
    "use strict";
    module.exports = function Type(x2) {
      if (x2 === null) {
        return "Null";
      }
      if (typeof x2 === "undefined") {
        return "Undefined";
      }
      if (typeof x2 === "function" || typeof x2 === "object") {
        return "Object";
      }
      if (typeof x2 === "number") {
        return "Number";
      }
      if (typeof x2 === "boolean") {
        return "Boolean";
      }
      if (typeof x2 === "string") {
        return "String";
      }
    };
  }
});

// node_modules/es-abstract/2022/Type.js
var require_Type2 = __commonJS({
  "node_modules/es-abstract/2022/Type.js"(exports, module) {
    "use strict";
    var ES5Type = require_Type();
    module.exports = function Type(x2) {
      if (typeof x2 === "symbol") {
        return "Symbol";
      }
      if (typeof x2 === "bigint") {
        return "BigInt";
      }
      return ES5Type(x2);
    };
  }
});

// node_modules/es-abstract/2022/floor.js
var require_floor = __commonJS({
  "node_modules/es-abstract/2022/floor.js"(exports, module) {
    "use strict";
    var Type = require_Type2();
    var $floor = Math.floor;
    module.exports = function floor(x2) {
      if (Type(x2) === "BigInt") {
        return x2;
      }
      return $floor(x2);
    };
  }
});

// node_modules/es-abstract/helpers/isNaN.js
var require_isNaN = __commonJS({
  "node_modules/es-abstract/helpers/isNaN.js"(exports, module) {
    "use strict";
    module.exports = Number.isNaN || function isNaN2(a3) {
      return a3 !== a3;
    };
  }
});

// node_modules/es-abstract/helpers/isFinite.js
var require_isFinite = __commonJS({
  "node_modules/es-abstract/helpers/isFinite.js"(exports, module) {
    "use strict";
    var $isNaN = require_isNaN();
    module.exports = function(x2) {
      return (typeof x2 === "number" || typeof x2 === "bigint") && !$isNaN(x2) && x2 !== Infinity && x2 !== -Infinity;
    };
  }
});

// node_modules/es-abstract/2022/IsIntegralNumber.js
var require_IsIntegralNumber = __commonJS({
  "node_modules/es-abstract/2022/IsIntegralNumber.js"(exports, module) {
    "use strict";
    var abs = require_abs();
    var floor = require_floor();
    var Type = require_Type2();
    var $isNaN = require_isNaN();
    var $isFinite = require_isFinite();
    module.exports = function IsIntegralNumber(argument) {
      if (Type(argument) !== "Number" || $isNaN(argument) || !$isFinite(argument)) {
        return false;
      }
      var absValue = abs(argument);
      return floor(absValue) === absValue;
    };
  }
});

// node_modules/has-proto/index.js
var require_has_proto = __commonJS({
  "node_modules/has-proto/index.js"(exports, module) {
    "use strict";
    var test = {
      foo: {}
    };
    var $Object = Object;
    module.exports = function hasProto() {
      return { __proto__: test }.foo === test.foo && !({ __proto__: null } instanceof $Object);
    };
  }
});

// node_modules/es-abstract/2022/ArrayCreate.js
var require_ArrayCreate = __commonJS({
  "node_modules/es-abstract/2022/ArrayCreate.js"(exports, module) {
    "use strict";
    var GetIntrinsic = require_get_intrinsic();
    var $ArrayPrototype = GetIntrinsic("%Array.prototype%");
    var $RangeError = GetIntrinsic("%RangeError%");
    var $SyntaxError = GetIntrinsic("%SyntaxError%");
    var $TypeError = GetIntrinsic("%TypeError%");
    var IsIntegralNumber = require_IsIntegralNumber();
    var MAX_ARRAY_LENGTH = Math.pow(2, 32) - 1;
    var hasProto = require_has_proto()();
    var $setProto = GetIntrinsic("%Object.setPrototypeOf%", true) || (hasProto ? function(O2, proto) {
      O2.__proto__ = proto;
      return O2;
    } : null);
    module.exports = function ArrayCreate(length) {
      if (!IsIntegralNumber(length) || length < 0) {
        throw new $TypeError("Assertion failed: `length` must be an integer Number >= 0");
      }
      if (length > MAX_ARRAY_LENGTH) {
        throw new $RangeError("length is greater than (2**32 - 1)");
      }
      var proto = arguments.length > 1 ? arguments[1] : $ArrayPrototype;
      var A2 = [];
      if (proto !== $ArrayPrototype) {
        if (!$setProto) {
          throw new $SyntaxError("ArrayCreate: a `proto` argument that is not `Array.prototype` is not supported in an environment that does not support setting the [[Prototype]]");
        }
        $setProto(A2, proto);
      }
      if (length !== 0) {
        A2.length = length;
      }
      return A2;
    };
  }
});

// (disabled):node_modules/object-inspect/util.inspect
var require_util = __commonJS({
  "(disabled):node_modules/object-inspect/util.inspect"() {
  }
});

// node_modules/object-inspect/index.js
var require_object_inspect = __commonJS({
  "node_modules/object-inspect/index.js"(exports, module) {
    var hasMap = typeof Map === "function" && Map.prototype;
    var mapSizeDescriptor = Object.getOwnPropertyDescriptor && hasMap ? Object.getOwnPropertyDescriptor(Map.prototype, "size") : null;
    var mapSize = hasMap && mapSizeDescriptor && typeof mapSizeDescriptor.get === "function" ? mapSizeDescriptor.get : null;
    var mapForEach = hasMap && Map.prototype.forEach;
    var hasSet = typeof Set === "function" && Set.prototype;
    var setSizeDescriptor = Object.getOwnPropertyDescriptor && hasSet ? Object.getOwnPropertyDescriptor(Set.prototype, "size") : null;
    var setSize = hasSet && setSizeDescriptor && typeof setSizeDescriptor.get === "function" ? setSizeDescriptor.get : null;
    var setForEach = hasSet && Set.prototype.forEach;
    var hasWeakMap = typeof WeakMap === "function" && WeakMap.prototype;
    var weakMapHas = hasWeakMap ? WeakMap.prototype.has : null;
    var hasWeakSet = typeof WeakSet === "function" && WeakSet.prototype;
    var weakSetHas = hasWeakSet ? WeakSet.prototype.has : null;
    var hasWeakRef = typeof WeakRef === "function" && WeakRef.prototype;
    var weakRefDeref = hasWeakRef ? WeakRef.prototype.deref : null;
    var booleanValueOf = Boolean.prototype.valueOf;
    var objectToString = Object.prototype.toString;
    var functionToString = Function.prototype.toString;
    var $match = String.prototype.match;
    var $slice = String.prototype.slice;
    var $replace = String.prototype.replace;
    var $toUpperCase = String.prototype.toUpperCase;
    var $toLowerCase = String.prototype.toLowerCase;
    var $test = RegExp.prototype.test;
    var $concat = Array.prototype.concat;
    var $join = Array.prototype.join;
    var $arrSlice = Array.prototype.slice;
    var $floor = Math.floor;
    var bigIntValueOf = typeof BigInt === "function" ? BigInt.prototype.valueOf : null;
    var gOPS = Object.getOwnPropertySymbols;
    var symToString = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? Symbol.prototype.toString : null;
    var hasShammedSymbols = typeof Symbol === "function" && typeof Symbol.iterator === "object";
    var toStringTag = typeof Symbol === "function" && Symbol.toStringTag && (typeof Symbol.toStringTag === hasShammedSymbols ? "object" : "symbol") ? Symbol.toStringTag : null;
    var isEnumerable = Object.prototype.propertyIsEnumerable;
    var gPO = (typeof Reflect === "function" ? Reflect.getPrototypeOf : Object.getPrototypeOf) || ([].__proto__ === Array.prototype ? function(O2) {
      return O2.__proto__;
    } : null);
    function addNumericSeparator(num, str) {
      if (num === Infinity || num === -Infinity || num !== num || num && num > -1e3 && num < 1e3 || $test.call(/e/, str)) {
        return str;
      }
      var sepRegex = /[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;
      if (typeof num === "number") {
        var int = num < 0 ? -$floor(-num) : $floor(num);
        if (int !== num) {
          var intStr = String(int);
          var dec = $slice.call(str, intStr.length + 1);
          return $replace.call(intStr, sepRegex, "$&_") + "." + $replace.call($replace.call(dec, /([0-9]{3})/g, "$&_"), /_$/, "");
        }
      }
      return $replace.call(str, sepRegex, "$&_");
    }
    var utilInspect = require_util();
    var inspectCustom = utilInspect.custom;
    var inspectSymbol = isSymbol(inspectCustom) ? inspectCustom : null;
    module.exports = function inspect_(obj, options, depth, seen) {
      var opts = options || {};
      if (has2(opts, "quoteStyle") && (opts.quoteStyle !== "single" && opts.quoteStyle !== "double")) {
        throw new TypeError('option "quoteStyle" must be "single" or "double"');
      }
      if (has2(opts, "maxStringLength") && (typeof opts.maxStringLength === "number" ? opts.maxStringLength < 0 && opts.maxStringLength !== Infinity : opts.maxStringLength !== null)) {
        throw new TypeError('option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`');
      }
      var customInspect = has2(opts, "customInspect") ? opts.customInspect : true;
      if (typeof customInspect !== "boolean" && customInspect !== "symbol") {
        throw new TypeError("option \"customInspect\", if provided, must be `true`, `false`, or `'symbol'`");
      }
      if (has2(opts, "indent") && opts.indent !== null && opts.indent !== "	" && !(parseInt(opts.indent, 10) === opts.indent && opts.indent > 0)) {
        throw new TypeError('option "indent" must be "\\t", an integer > 0, or `null`');
      }
      if (has2(opts, "numericSeparator") && typeof opts.numericSeparator !== "boolean") {
        throw new TypeError('option "numericSeparator", if provided, must be `true` or `false`');
      }
      var numericSeparator = opts.numericSeparator;
      if (typeof obj === "undefined") {
        return "undefined";
      }
      if (obj === null) {
        return "null";
      }
      if (typeof obj === "boolean") {
        return obj ? "true" : "false";
      }
      if (typeof obj === "string") {
        return inspectString(obj, opts);
      }
      if (typeof obj === "number") {
        if (obj === 0) {
          return Infinity / obj > 0 ? "0" : "-0";
        }
        var str = String(obj);
        return numericSeparator ? addNumericSeparator(obj, str) : str;
      }
      if (typeof obj === "bigint") {
        var bigIntStr = String(obj) + "n";
        return numericSeparator ? addNumericSeparator(obj, bigIntStr) : bigIntStr;
      }
      var maxDepth = typeof opts.depth === "undefined" ? 5 : opts.depth;
      if (typeof depth === "undefined") {
        depth = 0;
      }
      if (depth >= maxDepth && maxDepth > 0 && typeof obj === "object") {
        return isArray(obj) ? "[Array]" : "[Object]";
      }
      var indent = getIndent(opts, depth);
      if (typeof seen === "undefined") {
        seen = [];
      } else if (indexOf(seen, obj) >= 0) {
        return "[Circular]";
      }
      function inspect(value, from2, noIndent) {
        if (from2) {
          seen = $arrSlice.call(seen);
          seen.push(from2);
        }
        if (noIndent) {
          var newOpts = {
            depth: opts.depth
          };
          if (has2(opts, "quoteStyle")) {
            newOpts.quoteStyle = opts.quoteStyle;
          }
          return inspect_(value, newOpts, depth + 1, seen);
        }
        return inspect_(value, opts, depth + 1, seen);
      }
      if (typeof obj === "function" && !isRegExp(obj)) {
        var name = nameOf(obj);
        var keys = arrObjKeys(obj, inspect);
        return "[Function" + (name ? ": " + name : " (anonymous)") + "]" + (keys.length > 0 ? " { " + $join.call(keys, ", ") + " }" : "");
      }
      if (isSymbol(obj)) {
        var symString = hasShammedSymbols ? $replace.call(String(obj), /^(Symbol\(.*\))_[^)]*$/, "$1") : symToString.call(obj);
        return typeof obj === "object" && !hasShammedSymbols ? markBoxed(symString) : symString;
      }
      if (isElement(obj)) {
        var s3 = "<" + $toLowerCase.call(String(obj.nodeName));
        var attrs = obj.attributes || [];
        for (var i3 = 0; i3 < attrs.length; i3++) {
          s3 += " " + attrs[i3].name + "=" + wrapQuotes(quote(attrs[i3].value), "double", opts);
        }
        s3 += ">";
        if (obj.childNodes && obj.childNodes.length) {
          s3 += "...";
        }
        s3 += "</" + $toLowerCase.call(String(obj.nodeName)) + ">";
        return s3;
      }
      if (isArray(obj)) {
        if (obj.length === 0) {
          return "[]";
        }
        var xs = arrObjKeys(obj, inspect);
        if (indent && !singleLineValues(xs)) {
          return "[" + indentedJoin(xs, indent) + "]";
        }
        return "[ " + $join.call(xs, ", ") + " ]";
      }
      if (isError(obj)) {
        var parts = arrObjKeys(obj, inspect);
        if (!("cause" in Error.prototype) && "cause" in obj && !isEnumerable.call(obj, "cause")) {
          return "{ [" + String(obj) + "] " + $join.call($concat.call("[cause]: " + inspect(obj.cause), parts), ", ") + " }";
        }
        if (parts.length === 0) {
          return "[" + String(obj) + "]";
        }
        return "{ [" + String(obj) + "] " + $join.call(parts, ", ") + " }";
      }
      if (typeof obj === "object" && customInspect) {
        if (inspectSymbol && typeof obj[inspectSymbol] === "function" && utilInspect) {
          return utilInspect(obj, { depth: maxDepth - depth });
        } else if (customInspect !== "symbol" && typeof obj.inspect === "function") {
          return obj.inspect();
        }
      }
      if (isMap(obj)) {
        var mapParts = [];
        if (mapForEach) {
          mapForEach.call(obj, function(value, key) {
            mapParts.push(inspect(key, obj, true) + " => " + inspect(value, obj));
          });
        }
        return collectionOf("Map", mapSize.call(obj), mapParts, indent);
      }
      if (isSet(obj)) {
        var setParts = [];
        if (setForEach) {
          setForEach.call(obj, function(value) {
            setParts.push(inspect(value, obj));
          });
        }
        return collectionOf("Set", setSize.call(obj), setParts, indent);
      }
      if (isWeakMap(obj)) {
        return weakCollectionOf("WeakMap");
      }
      if (isWeakSet(obj)) {
        return weakCollectionOf("WeakSet");
      }
      if (isWeakRef(obj)) {
        return weakCollectionOf("WeakRef");
      }
      if (isNumber(obj)) {
        return markBoxed(inspect(Number(obj)));
      }
      if (isBigInt(obj)) {
        return markBoxed(inspect(bigIntValueOf.call(obj)));
      }
      if (isBoolean(obj)) {
        return markBoxed(booleanValueOf.call(obj));
      }
      if (isString(obj)) {
        return markBoxed(inspect(String(obj)));
      }
      if (!isDate(obj) && !isRegExp(obj)) {
        var ys = arrObjKeys(obj, inspect);
        var isPlainObject = gPO ? gPO(obj) === Object.prototype : obj instanceof Object || obj.constructor === Object;
        var protoTag = obj instanceof Object ? "" : "null prototype";
        var stringTag = !isPlainObject && toStringTag && Object(obj) === obj && toStringTag in obj ? $slice.call(toStr(obj), 8, -1) : protoTag ? "Object" : "";
        var constructorTag = isPlainObject || typeof obj.constructor !== "function" ? "" : obj.constructor.name ? obj.constructor.name + " " : "";
        var tag = constructorTag + (stringTag || protoTag ? "[" + $join.call($concat.call([], stringTag || [], protoTag || []), ": ") + "] " : "");
        if (ys.length === 0) {
          return tag + "{}";
        }
        if (indent) {
          return tag + "{" + indentedJoin(ys, indent) + "}";
        }
        return tag + "{ " + $join.call(ys, ", ") + " }";
      }
      return String(obj);
    };
    function wrapQuotes(s3, defaultStyle, opts) {
      var quoteChar = (opts.quoteStyle || defaultStyle) === "double" ? '"' : "'";
      return quoteChar + s3 + quoteChar;
    }
    function quote(s3) {
      return $replace.call(String(s3), /"/g, "&quot;");
    }
    function isArray(obj) {
      return toStr(obj) === "[object Array]" && (!toStringTag || !(typeof obj === "object" && toStringTag in obj));
    }
    function isDate(obj) {
      return toStr(obj) === "[object Date]" && (!toStringTag || !(typeof obj === "object" && toStringTag in obj));
    }
    function isRegExp(obj) {
      return toStr(obj) === "[object RegExp]" && (!toStringTag || !(typeof obj === "object" && toStringTag in obj));
    }
    function isError(obj) {
      return toStr(obj) === "[object Error]" && (!toStringTag || !(typeof obj === "object" && toStringTag in obj));
    }
    function isString(obj) {
      return toStr(obj) === "[object String]" && (!toStringTag || !(typeof obj === "object" && toStringTag in obj));
    }
    function isNumber(obj) {
      return toStr(obj) === "[object Number]" && (!toStringTag || !(typeof obj === "object" && toStringTag in obj));
    }
    function isBoolean(obj) {
      return toStr(obj) === "[object Boolean]" && (!toStringTag || !(typeof obj === "object" && toStringTag in obj));
    }
    function isSymbol(obj) {
      if (hasShammedSymbols) {
        return obj && typeof obj === "object" && obj instanceof Symbol;
      }
      if (typeof obj === "symbol") {
        return true;
      }
      if (!obj || typeof obj !== "object" || !symToString) {
        return false;
      }
      try {
        symToString.call(obj);
        return true;
      } catch (e3) {
      }
      return false;
    }
    function isBigInt(obj) {
      if (!obj || typeof obj !== "object" || !bigIntValueOf) {
        return false;
      }
      try {
        bigIntValueOf.call(obj);
        return true;
      } catch (e3) {
      }
      return false;
    }
    var hasOwn = Object.prototype.hasOwnProperty || function(key) {
      return key in this;
    };
    function has2(obj, key) {
      return hasOwn.call(obj, key);
    }
    function toStr(obj) {
      return objectToString.call(obj);
    }
    function nameOf(f3) {
      if (f3.name) {
        return f3.name;
      }
      var m2 = $match.call(functionToString.call(f3), /^function\s*([\w$]+)/);
      if (m2) {
        return m2[1];
      }
      return null;
    }
    function indexOf(xs, x2) {
      if (xs.indexOf) {
        return xs.indexOf(x2);
      }
      for (var i3 = 0, l3 = xs.length; i3 < l3; i3++) {
        if (xs[i3] === x2) {
          return i3;
        }
      }
      return -1;
    }
    function isMap(x2) {
      if (!mapSize || !x2 || typeof x2 !== "object") {
        return false;
      }
      try {
        mapSize.call(x2);
        try {
          setSize.call(x2);
        } catch (s3) {
          return true;
        }
        return x2 instanceof Map;
      } catch (e3) {
      }
      return false;
    }
    function isWeakMap(x2) {
      if (!weakMapHas || !x2 || typeof x2 !== "object") {
        return false;
      }
      try {
        weakMapHas.call(x2, weakMapHas);
        try {
          weakSetHas.call(x2, weakSetHas);
        } catch (s3) {
          return true;
        }
        return x2 instanceof WeakMap;
      } catch (e3) {
      }
      return false;
    }
    function isWeakRef(x2) {
      if (!weakRefDeref || !x2 || typeof x2 !== "object") {
        return false;
      }
      try {
        weakRefDeref.call(x2);
        return true;
      } catch (e3) {
      }
      return false;
    }
    function isSet(x2) {
      if (!setSize || !x2 || typeof x2 !== "object") {
        return false;
      }
      try {
        setSize.call(x2);
        try {
          mapSize.call(x2);
        } catch (m2) {
          return true;
        }
        return x2 instanceof Set;
      } catch (e3) {
      }
      return false;
    }
    function isWeakSet(x2) {
      if (!weakSetHas || !x2 || typeof x2 !== "object") {
        return false;
      }
      try {
        weakSetHas.call(x2, weakSetHas);
        try {
          weakMapHas.call(x2, weakMapHas);
        } catch (s3) {
          return true;
        }
        return x2 instanceof WeakSet;
      } catch (e3) {
      }
      return false;
    }
    function isElement(x2) {
      if (!x2 || typeof x2 !== "object") {
        return false;
      }
      if (typeof HTMLElement !== "undefined" && x2 instanceof HTMLElement) {
        return true;
      }
      return typeof x2.nodeName === "string" && typeof x2.getAttribute === "function";
    }
    function inspectString(str, opts) {
      if (str.length > opts.maxStringLength) {
        var remaining = str.length - opts.maxStringLength;
        var trailer = "... " + remaining + " more character" + (remaining > 1 ? "s" : "");
        return inspectString($slice.call(str, 0, opts.maxStringLength), opts) + trailer;
      }
      var s3 = $replace.call($replace.call(str, /(['\\])/g, "\\$1"), /[\x00-\x1f]/g, lowbyte);
      return wrapQuotes(s3, "single", opts);
    }
    function lowbyte(c3) {
      var n3 = c3.charCodeAt(0);
      var x2 = {
        8: "b",
        9: "t",
        10: "n",
        12: "f",
        13: "r"
      }[n3];
      if (x2) {
        return "\\" + x2;
      }
      return "\\x" + (n3 < 16 ? "0" : "") + $toUpperCase.call(n3.toString(16));
    }
    function markBoxed(str) {
      return "Object(" + str + ")";
    }
    function weakCollectionOf(type) {
      return type + " { ? }";
    }
    function collectionOf(type, size2, entries, indent) {
      var joinedEntries = indent ? indentedJoin(entries, indent) : $join.call(entries, ", ");
      return type + " (" + size2 + ") {" + joinedEntries + "}";
    }
    function singleLineValues(xs) {
      for (var i3 = 0; i3 < xs.length; i3++) {
        if (indexOf(xs[i3], "\n") >= 0) {
          return false;
        }
      }
      return true;
    }
    function getIndent(opts, depth) {
      var baseIndent;
      if (opts.indent === "	") {
        baseIndent = "	";
      } else if (typeof opts.indent === "number" && opts.indent > 0) {
        baseIndent = $join.call(Array(opts.indent + 1), " ");
      } else {
        return null;
      }
      return {
        base: baseIndent,
        prev: $join.call(Array(depth + 1), baseIndent)
      };
    }
    function indentedJoin(xs, indent) {
      if (xs.length === 0) {
        return "";
      }
      var lineJoiner = "\n" + indent.prev + indent.base;
      return lineJoiner + $join.call(xs, "," + lineJoiner) + "\n" + indent.prev;
    }
    function arrObjKeys(obj, inspect) {
      var isArr = isArray(obj);
      var xs = [];
      if (isArr) {
        xs.length = obj.length;
        for (var i3 = 0; i3 < obj.length; i3++) {
          xs[i3] = has2(obj, i3) ? inspect(obj[i3], obj) : "";
        }
      }
      var syms = typeof gOPS === "function" ? gOPS(obj) : [];
      var symMap;
      if (hasShammedSymbols) {
        symMap = {};
        for (var k2 = 0; k2 < syms.length; k2++) {
          symMap["$" + syms[k2]] = syms[k2];
        }
      }
      for (var key in obj) {
        if (!has2(obj, key)) {
          continue;
        }
        if (isArr && String(Number(key)) === key && key < obj.length) {
          continue;
        }
        if (hasShammedSymbols && symMap["$" + key] instanceof Symbol) {
          continue;
        } else if ($test.call(/[^\w$]/, key)) {
          xs.push(inspect(key, obj) + ": " + inspect(obj[key], obj));
        } else {
          xs.push(key + ": " + inspect(obj[key], obj));
        }
      }
      if (typeof gOPS === "function") {
        for (var j2 = 0; j2 < syms.length; j2++) {
          if (isEnumerable.call(obj, syms[j2])) {
            xs.push("[" + inspect(syms[j2]) + "]: " + inspect(obj[syms[j2]], obj));
          }
        }
      }
      return xs;
    }
  }
});

// node_modules/es-abstract/2022/IsPropertyKey.js
var require_IsPropertyKey = __commonJS({
  "node_modules/es-abstract/2022/IsPropertyKey.js"(exports, module) {
    "use strict";
    module.exports = function IsPropertyKey(argument) {
      return typeof argument === "string" || typeof argument === "symbol";
    };
  }
});

// node_modules/es-abstract/2022/Get.js
var require_Get = __commonJS({
  "node_modules/es-abstract/2022/Get.js"(exports, module) {
    "use strict";
    var GetIntrinsic = require_get_intrinsic();
    var $TypeError = GetIntrinsic("%TypeError%");
    var inspect = require_object_inspect();
    var IsPropertyKey = require_IsPropertyKey();
    var Type = require_Type2();
    module.exports = function Get(O2, P2) {
      if (Type(O2) !== "Object") {
        throw new $TypeError("Assertion failed: Type(O) is not Object");
      }
      if (!IsPropertyKey(P2)) {
        throw new $TypeError("Assertion failed: IsPropertyKey(P) is not true, got " + inspect(P2));
      }
      return O2[P2];
    };
  }
});

// node_modules/call-bind/callBound.js
var require_callBound = __commonJS({
  "node_modules/call-bind/callBound.js"(exports, module) {
    "use strict";
    var GetIntrinsic = require_get_intrinsic();
    var callBind = require_call_bind();
    var $indexOf = callBind(GetIntrinsic("String.prototype.indexOf"));
    module.exports = function callBoundIntrinsic(name, allowMissing) {
      var intrinsic = GetIntrinsic(name, !!allowMissing);
      if (typeof intrinsic === "function" && $indexOf(name, ".prototype.") > -1) {
        return callBind(intrinsic);
      }
      return intrinsic;
    };
  }
});

// node_modules/es-abstract/helpers/IsArray.js
var require_IsArray = __commonJS({
  "node_modules/es-abstract/helpers/IsArray.js"(exports, module) {
    "use strict";
    var GetIntrinsic = require_get_intrinsic();
    var $Array = GetIntrinsic("%Array%");
    var toStr = !$Array.isArray && require_callBound()("Object.prototype.toString");
    module.exports = $Array.isArray || function IsArray(argument) {
      return toStr(argument) === "[object Array]";
    };
  }
});

// node_modules/es-abstract/2022/IsArray.js
var require_IsArray2 = __commonJS({
  "node_modules/es-abstract/2022/IsArray.js"(exports, module) {
    "use strict";
    module.exports = require_IsArray();
  }
});

// node_modules/es-abstract/GetIntrinsic.js
var require_GetIntrinsic = __commonJS({
  "node_modules/es-abstract/GetIntrinsic.js"(exports, module) {
    "use strict";
    module.exports = require_get_intrinsic();
  }
});

// node_modules/es-abstract/helpers/isPropertyDescriptor.js
var require_isPropertyDescriptor = __commonJS({
  "node_modules/es-abstract/helpers/isPropertyDescriptor.js"(exports, module) {
    "use strict";
    var GetIntrinsic = require_get_intrinsic();
    var has2 = require_src();
    var $TypeError = GetIntrinsic("%TypeError%");
    module.exports = function IsPropertyDescriptor(ES, Desc) {
      if (ES.Type(Desc) !== "Object") {
        return false;
      }
      var allowed = {
        "[[Configurable]]": true,
        "[[Enumerable]]": true,
        "[[Get]]": true,
        "[[Set]]": true,
        "[[Value]]": true,
        "[[Writable]]": true
      };
      for (var key in Desc) {
        if (has2(Desc, key) && !allowed[key]) {
          return false;
        }
      }
      if (ES.IsDataDescriptor(Desc) && ES.IsAccessorDescriptor(Desc)) {
        throw new $TypeError("Property Descriptors may not be both accessor and data descriptors");
      }
      return true;
    };
  }
});

// node_modules/es-abstract/helpers/DefineOwnProperty.js
var require_DefineOwnProperty = __commonJS({
  "node_modules/es-abstract/helpers/DefineOwnProperty.js"(exports, module) {
    "use strict";
    var hasPropertyDescriptors = require_has_property_descriptors();
    var GetIntrinsic = require_get_intrinsic();
    var $defineProperty = hasPropertyDescriptors() && GetIntrinsic("%Object.defineProperty%", true);
    var hasArrayLengthDefineBug = hasPropertyDescriptors.hasArrayLengthDefineBug();
    var isArray = hasArrayLengthDefineBug && require_IsArray();
    var callBound = require_callBound();
    var $isEnumerable = callBound("Object.prototype.propertyIsEnumerable");
    module.exports = function DefineOwnProperty(IsDataDescriptor, SameValue, FromPropertyDescriptor, O2, P2, desc) {
      if (!$defineProperty) {
        if (!IsDataDescriptor(desc)) {
          return false;
        }
        if (!desc["[[Configurable]]"] || !desc["[[Writable]]"]) {
          return false;
        }
        if (P2 in O2 && $isEnumerable(O2, P2) !== !!desc["[[Enumerable]]"]) {
          return false;
        }
        var V = desc["[[Value]]"];
        O2[P2] = V;
        return SameValue(O2[P2], V);
      }
      if (hasArrayLengthDefineBug && P2 === "length" && "[[Value]]" in desc && isArray(O2) && O2.length !== desc["[[Value]]"]) {
        O2.length = desc["[[Value]]"];
        return O2.length === desc["[[Value]]"];
      }
      $defineProperty(O2, P2, FromPropertyDescriptor(desc));
      return true;
    };
  }
});

// node_modules/es-abstract/helpers/isMatchRecord.js
var require_isMatchRecord = __commonJS({
  "node_modules/es-abstract/helpers/isMatchRecord.js"(exports, module) {
    "use strict";
    var has2 = require_src();
    module.exports = function isMatchRecord(record) {
      return has2(record, "[[StartIndex]]") && has2(record, "[[EndIndex]]") && record["[[StartIndex]]"] >= 0 && record["[[EndIndex]]"] >= record["[[StartIndex]]"] && String(parseInt(record["[[StartIndex]]"], 10)) === String(record["[[StartIndex]]"]) && String(parseInt(record["[[EndIndex]]"], 10)) === String(record["[[EndIndex]]"]);
    };
  }
});

// node_modules/es-abstract/helpers/assertRecord.js
var require_assertRecord = __commonJS({
  "node_modules/es-abstract/helpers/assertRecord.js"(exports, module) {
    "use strict";
    var GetIntrinsic = require_get_intrinsic();
    var $TypeError = GetIntrinsic("%TypeError%");
    var $SyntaxError = GetIntrinsic("%SyntaxError%");
    var has2 = require_src();
    var isMatchRecord = require_isMatchRecord();
    var predicates = {
      // https://262.ecma-international.org/6.0/#sec-property-descriptor-specification-type
      "Property Descriptor": function isPropertyDescriptor(Desc) {
        var allowed = {
          "[[Configurable]]": true,
          "[[Enumerable]]": true,
          "[[Get]]": true,
          "[[Set]]": true,
          "[[Value]]": true,
          "[[Writable]]": true
        };
        if (!Desc) {
          return false;
        }
        for (var key in Desc) {
          if (has2(Desc, key) && !allowed[key]) {
            return false;
          }
        }
        var isData = has2(Desc, "[[Value]]");
        var IsAccessor = has2(Desc, "[[Get]]") || has2(Desc, "[[Set]]");
        if (isData && IsAccessor) {
          throw new $TypeError("Property Descriptors may not be both accessor and data descriptors");
        }
        return true;
      },
      // https://262.ecma-international.org/13.0/#sec-match-records
      "Match Record": isMatchRecord,
      "Iterator Record": function isIteratorRecord(value) {
        return has2(value, "[[Iterator]]") && has2(value, "[[NextMethod]]") && has2(value, "[[Done]]");
      },
      "PromiseCapability Record": function isPromiseCapabilityRecord(value) {
        return !!value && has2(value, "[[Resolve]]") && typeof value["[[Resolve]]"] === "function" && has2(value, "[[Reject]]") && typeof value["[[Reject]]"] === "function" && has2(value, "[[Promise]]") && value["[[Promise]]"] && typeof value["[[Promise]]"].then === "function";
      },
      "AsyncGeneratorRequest Record": function isAsyncGeneratorRequestRecord(value) {
        return !!value && has2(value, "[[Completion]]") && has2(value, "[[Capability]]") && predicates["PromiseCapability Record"](value["[[Capability]]"]);
      }
    };
    module.exports = function assertRecord(Type, recordType, argumentName, value) {
      var predicate = predicates[recordType];
      if (typeof predicate !== "function") {
        throw new $SyntaxError("unknown record type: " + recordType);
      }
      if (Type(value) !== "Object" || !predicate(value)) {
        throw new $TypeError(argumentName + " must be a " + recordType);
      }
    };
  }
});

// node_modules/es-abstract/helpers/fromPropertyDescriptor.js
var require_fromPropertyDescriptor = __commonJS({
  "node_modules/es-abstract/helpers/fromPropertyDescriptor.js"(exports, module) {
    "use strict";
    module.exports = function fromPropertyDescriptor(Desc) {
      if (typeof Desc === "undefined") {
        return Desc;
      }
      var obj = {};
      if ("[[Value]]" in Desc) {
        obj.value = Desc["[[Value]]"];
      }
      if ("[[Writable]]" in Desc) {
        obj.writable = !!Desc["[[Writable]]"];
      }
      if ("[[Get]]" in Desc) {
        obj.get = Desc["[[Get]]"];
      }
      if ("[[Set]]" in Desc) {
        obj.set = Desc["[[Set]]"];
      }
      if ("[[Enumerable]]" in Desc) {
        obj.enumerable = !!Desc["[[Enumerable]]"];
      }
      if ("[[Configurable]]" in Desc) {
        obj.configurable = !!Desc["[[Configurable]]"];
      }
      return obj;
    };
  }
});

// node_modules/es-abstract/2022/FromPropertyDescriptor.js
var require_FromPropertyDescriptor = __commonJS({
  "node_modules/es-abstract/2022/FromPropertyDescriptor.js"(exports, module) {
    "use strict";
    var assertRecord = require_assertRecord();
    var fromPropertyDescriptor = require_fromPropertyDescriptor();
    var Type = require_Type2();
    module.exports = function FromPropertyDescriptor(Desc) {
      if (typeof Desc !== "undefined") {
        assertRecord(Type, "Property Descriptor", "Desc", Desc);
      }
      return fromPropertyDescriptor(Desc);
    };
  }
});

// node_modules/es-abstract/2022/IsAccessorDescriptor.js
var require_IsAccessorDescriptor = __commonJS({
  "node_modules/es-abstract/2022/IsAccessorDescriptor.js"(exports, module) {
    "use strict";
    var has2 = require_src();
    var Type = require_Type2();
    var assertRecord = require_assertRecord();
    module.exports = function IsAccessorDescriptor(Desc) {
      if (typeof Desc === "undefined") {
        return false;
      }
      assertRecord(Type, "Property Descriptor", "Desc", Desc);
      if (!has2(Desc, "[[Get]]") && !has2(Desc, "[[Set]]")) {
        return false;
      }
      return true;
    };
  }
});

// node_modules/es-abstract/2022/IsDataDescriptor.js
var require_IsDataDescriptor = __commonJS({
  "node_modules/es-abstract/2022/IsDataDescriptor.js"(exports, module) {
    "use strict";
    var has2 = require_src();
    var Type = require_Type2();
    var assertRecord = require_assertRecord();
    module.exports = function IsDataDescriptor(Desc) {
      if (typeof Desc === "undefined") {
        return false;
      }
      assertRecord(Type, "Property Descriptor", "Desc", Desc);
      if (!has2(Desc, "[[Value]]") && !has2(Desc, "[[Writable]]")) {
        return false;
      }
      return true;
    };
  }
});

// node_modules/es-abstract/2022/SameValue.js
var require_SameValue = __commonJS({
  "node_modules/es-abstract/2022/SameValue.js"(exports, module) {
    "use strict";
    var $isNaN = require_isNaN();
    module.exports = function SameValue(x2, y2) {
      if (x2 === y2) {
        if (x2 === 0) {
          return 1 / x2 === 1 / y2;
        }
        return true;
      }
      return $isNaN(x2) && $isNaN(y2);
    };
  }
});

// node_modules/es-abstract/2022/ToBoolean.js
var require_ToBoolean = __commonJS({
  "node_modules/es-abstract/2022/ToBoolean.js"(exports, module) {
    "use strict";
    module.exports = function ToBoolean(value) {
      return !!value;
    };
  }
});

// node_modules/is-callable/index.js
var require_is_callable = __commonJS({
  "node_modules/is-callable/index.js"(exports, module) {
    "use strict";
    var fnToStr = Function.prototype.toString;
    var reflectApply = typeof Reflect === "object" && Reflect !== null && Reflect.apply;
    var badArrayLike;
    var isCallableMarker;
    if (typeof reflectApply === "function" && typeof Object.defineProperty === "function") {
      try {
        badArrayLike = Object.defineProperty({}, "length", {
          get: function() {
            throw isCallableMarker;
          }
        });
        isCallableMarker = {};
        reflectApply(function() {
          throw 42;
        }, null, badArrayLike);
      } catch (_2) {
        if (_2 !== isCallableMarker) {
          reflectApply = null;
        }
      }
    } else {
      reflectApply = null;
    }
    var constructorRegex = /^\s*class\b/;
    var isES6ClassFn = function isES6ClassFunction(value) {
      try {
        var fnStr = fnToStr.call(value);
        return constructorRegex.test(fnStr);
      } catch (e3) {
        return false;
      }
    };
    var tryFunctionObject = function tryFunctionToStr(value) {
      try {
        if (isES6ClassFn(value)) {
          return false;
        }
        fnToStr.call(value);
        return true;
      } catch (e3) {
        return false;
      }
    };
    var toStr = Object.prototype.toString;
    var objectClass = "[object Object]";
    var fnClass = "[object Function]";
    var genClass = "[object GeneratorFunction]";
    var ddaClass = "[object HTMLAllCollection]";
    var ddaClass2 = "[object HTML document.all class]";
    var ddaClass3 = "[object HTMLCollection]";
    var hasToStringTag = typeof Symbol === "function" && !!Symbol.toStringTag;
    var isIE68 = !(0 in [,]);
    var isDDA = function isDocumentDotAll() {
      return false;
    };
    if (typeof document === "object") {
      all = document.all;
      if (toStr.call(all) === toStr.call(document.all)) {
        isDDA = function isDocumentDotAll(value) {
          if ((isIE68 || !value) && (typeof value === "undefined" || typeof value === "object")) {
            try {
              var str = toStr.call(value);
              return (str === ddaClass || str === ddaClass2 || str === ddaClass3 || str === objectClass) && value("") == null;
            } catch (e3) {
            }
          }
          return false;
        };
      }
    }
    var all;
    module.exports = reflectApply ? function isCallable(value) {
      if (isDDA(value)) {
        return true;
      }
      if (!value) {
        return false;
      }
      if (typeof value !== "function" && typeof value !== "object") {
        return false;
      }
      try {
        reflectApply(value, null, badArrayLike);
      } catch (e3) {
        if (e3 !== isCallableMarker) {
          return false;
        }
      }
      return !isES6ClassFn(value) && tryFunctionObject(value);
    } : function isCallable(value) {
      if (isDDA(value)) {
        return true;
      }
      if (!value) {
        return false;
      }
      if (typeof value !== "function" && typeof value !== "object") {
        return false;
      }
      if (hasToStringTag) {
        return tryFunctionObject(value);
      }
      if (isES6ClassFn(value)) {
        return false;
      }
      var strClass = toStr.call(value);
      if (strClass !== fnClass && strClass !== genClass && !/^\[object HTML/.test(strClass)) {
        return false;
      }
      return tryFunctionObject(value);
    };
  }
});

// node_modules/es-abstract/2022/IsCallable.js
var require_IsCallable = __commonJS({
  "node_modules/es-abstract/2022/IsCallable.js"(exports, module) {
    "use strict";
    module.exports = require_is_callable();
  }
});

// node_modules/es-abstract/2022/ToPropertyDescriptor.js
var require_ToPropertyDescriptor = __commonJS({
  "node_modules/es-abstract/2022/ToPropertyDescriptor.js"(exports, module) {
    "use strict";
    var has2 = require_src();
    var GetIntrinsic = require_get_intrinsic();
    var $TypeError = GetIntrinsic("%TypeError%");
    var Type = require_Type2();
    var ToBoolean = require_ToBoolean();
    var IsCallable = require_IsCallable();
    module.exports = function ToPropertyDescriptor(Obj) {
      if (Type(Obj) !== "Object") {
        throw new $TypeError("ToPropertyDescriptor requires an object");
      }
      var desc = {};
      if (has2(Obj, "enumerable")) {
        desc["[[Enumerable]]"] = ToBoolean(Obj.enumerable);
      }
      if (has2(Obj, "configurable")) {
        desc["[[Configurable]]"] = ToBoolean(Obj.configurable);
      }
      if (has2(Obj, "value")) {
        desc["[[Value]]"] = Obj.value;
      }
      if (has2(Obj, "writable")) {
        desc["[[Writable]]"] = ToBoolean(Obj.writable);
      }
      if (has2(Obj, "get")) {
        var getter = Obj.get;
        if (typeof getter !== "undefined" && !IsCallable(getter)) {
          throw new $TypeError("getter must be a function");
        }
        desc["[[Get]]"] = getter;
      }
      if (has2(Obj, "set")) {
        var setter = Obj.set;
        if (typeof setter !== "undefined" && !IsCallable(setter)) {
          throw new $TypeError("setter must be a function");
        }
        desc["[[Set]]"] = setter;
      }
      if ((has2(desc, "[[Get]]") || has2(desc, "[[Set]]")) && (has2(desc, "[[Value]]") || has2(desc, "[[Writable]]"))) {
        throw new $TypeError("Invalid property descriptor. Cannot both specify accessors and a value or writable attribute");
      }
      return desc;
    };
  }
});

// node_modules/es-abstract/2022/DefinePropertyOrThrow.js
var require_DefinePropertyOrThrow = __commonJS({
  "node_modules/es-abstract/2022/DefinePropertyOrThrow.js"(exports, module) {
    "use strict";
    var GetIntrinsic = require_get_intrinsic();
    var $TypeError = GetIntrinsic("%TypeError%");
    var isPropertyDescriptor = require_isPropertyDescriptor();
    var DefineOwnProperty = require_DefineOwnProperty();
    var FromPropertyDescriptor = require_FromPropertyDescriptor();
    var IsAccessorDescriptor = require_IsAccessorDescriptor();
    var IsDataDescriptor = require_IsDataDescriptor();
    var IsPropertyKey = require_IsPropertyKey();
    var SameValue = require_SameValue();
    var ToPropertyDescriptor = require_ToPropertyDescriptor();
    var Type = require_Type2();
    module.exports = function DefinePropertyOrThrow(O2, P2, desc) {
      if (Type(O2) !== "Object") {
        throw new $TypeError("Assertion failed: Type(O) is not Object");
      }
      if (!IsPropertyKey(P2)) {
        throw new $TypeError("Assertion failed: IsPropertyKey(P) is not true");
      }
      var Desc = isPropertyDescriptor({
        Type,
        IsDataDescriptor,
        IsAccessorDescriptor
      }, desc) ? desc : ToPropertyDescriptor(desc);
      if (!isPropertyDescriptor({
        Type,
        IsDataDescriptor,
        IsAccessorDescriptor
      }, Desc)) {
        throw new $TypeError("Assertion failed: Desc is not a valid Property Descriptor");
      }
      return DefineOwnProperty(
        IsDataDescriptor,
        SameValue,
        FromPropertyDescriptor,
        O2,
        P2,
        Desc
      );
    };
  }
});

// node_modules/es-abstract/2022/IsConstructor.js
var require_IsConstructor = __commonJS({
  "node_modules/es-abstract/2022/IsConstructor.js"(exports, module) {
    "use strict";
    var GetIntrinsic = require_GetIntrinsic();
    var $construct = GetIntrinsic("%Reflect.construct%", true);
    var DefinePropertyOrThrow = require_DefinePropertyOrThrow();
    try {
      DefinePropertyOrThrow({}, "", { "[[Get]]": function() {
      } });
    } catch (e3) {
      DefinePropertyOrThrow = null;
    }
    if (DefinePropertyOrThrow && $construct) {
      isConstructorMarker = {};
      badArrayLike = {};
      DefinePropertyOrThrow(badArrayLike, "length", {
        "[[Get]]": function() {
          throw isConstructorMarker;
        },
        "[[Enumerable]]": true
      });
      module.exports = function IsConstructor(argument) {
        try {
          $construct(argument, badArrayLike);
        } catch (err) {
          return err === isConstructorMarker;
        }
      };
    } else {
      module.exports = function IsConstructor(argument) {
        return typeof argument === "function" && !!argument.prototype;
      };
    }
    var isConstructorMarker;
    var badArrayLike;
  }
});

// node_modules/es-abstract/2022/ArraySpeciesCreate.js
var require_ArraySpeciesCreate = __commonJS({
  "node_modules/es-abstract/2022/ArraySpeciesCreate.js"(exports, module) {
    "use strict";
    var GetIntrinsic = require_get_intrinsic();
    var $species = GetIntrinsic("%Symbol.species%", true);
    var $TypeError = GetIntrinsic("%TypeError%");
    var ArrayCreate = require_ArrayCreate();
    var Get = require_Get();
    var IsArray = require_IsArray2();
    var IsConstructor = require_IsConstructor();
    var IsIntegralNumber = require_IsIntegralNumber();
    var Type = require_Type2();
    module.exports = function ArraySpeciesCreate(originalArray, length) {
      if (!IsIntegralNumber(length) || length < 0) {
        throw new $TypeError("Assertion failed: length must be an integer >= 0");
      }
      var isArray = IsArray(originalArray);
      if (!isArray) {
        return ArrayCreate(length);
      }
      var C = Get(originalArray, "constructor");
      if ($species && Type(C) === "Object") {
        C = Get(C, $species);
        if (C === null) {
          C = void 0;
        }
      }
      if (typeof C === "undefined") {
        return ArrayCreate(length);
      }
      if (!IsConstructor(C)) {
        throw new $TypeError("C must be a constructor");
      }
      return new C(length);
    };
  }
});

// node_modules/es-abstract/helpers/maxSafeInteger.js
var require_maxSafeInteger = __commonJS({
  "node_modules/es-abstract/helpers/maxSafeInteger.js"(exports, module) {
    "use strict";
    var GetIntrinsic = require_get_intrinsic();
    var $Math = GetIntrinsic("%Math%");
    var $Number = GetIntrinsic("%Number%");
    module.exports = $Number.MAX_SAFE_INTEGER || $Math.pow(2, 53) - 1;
  }
});

// node_modules/es-abstract/2022/Call.js
var require_Call = __commonJS({
  "node_modules/es-abstract/2022/Call.js"(exports, module) {
    "use strict";
    var GetIntrinsic = require_get_intrinsic();
    var callBound = require_callBound();
    var $TypeError = GetIntrinsic("%TypeError%");
    var IsArray = require_IsArray2();
    var $apply = GetIntrinsic("%Reflect.apply%", true) || callBound("Function.prototype.apply");
    module.exports = function Call(F2, V) {
      var argumentsList = arguments.length > 2 ? arguments[2] : [];
      if (!IsArray(argumentsList)) {
        throw new $TypeError("Assertion failed: optional `argumentsList`, if provided, must be a List");
      }
      return $apply(F2, V, argumentsList);
    };
  }
});

// node_modules/gopd/index.js
var require_gopd = __commonJS({
  "node_modules/gopd/index.js"(exports, module) {
    "use strict";
    var GetIntrinsic = require_get_intrinsic();
    var $gOPD = GetIntrinsic("%Object.getOwnPropertyDescriptor%", true);
    if ($gOPD) {
      try {
        $gOPD([], "length");
      } catch (e3) {
        $gOPD = null;
      }
    }
    module.exports = $gOPD;
  }
});

// node_modules/es-abstract/helpers/isPrimitive.js
var require_isPrimitive = __commonJS({
  "node_modules/es-abstract/helpers/isPrimitive.js"(exports, module) {
    "use strict";
    module.exports = function isPrimitive(value) {
      return value === null || typeof value !== "function" && typeof value !== "object";
    };
  }
});

// node_modules/es-abstract/2022/IsExtensible.js
var require_IsExtensible = __commonJS({
  "node_modules/es-abstract/2022/IsExtensible.js"(exports, module) {
    "use strict";
    var GetIntrinsic = require_get_intrinsic();
    var $preventExtensions = GetIntrinsic("%Object.preventExtensions%", true);
    var $isExtensible = GetIntrinsic("%Object.isExtensible%", true);
    var isPrimitive = require_isPrimitive();
    module.exports = $preventExtensions ? function IsExtensible(obj) {
      return !isPrimitive(obj) && $isExtensible(obj);
    } : function IsExtensible(obj) {
      return !isPrimitive(obj);
    };
  }
});

// node_modules/es-abstract/helpers/isFullyPopulatedPropertyDescriptor.js
var require_isFullyPopulatedPropertyDescriptor = __commonJS({
  "node_modules/es-abstract/helpers/isFullyPopulatedPropertyDescriptor.js"(exports, module) {
    "use strict";
    module.exports = function isFullyPopulatedPropertyDescriptor(ES, Desc) {
      return !!Desc && typeof Desc === "object" && "[[Enumerable]]" in Desc && "[[Configurable]]" in Desc && (ES.IsAccessorDescriptor(Desc) || ES.IsDataDescriptor(Desc));
    };
  }
});

// node_modules/es-abstract/2022/IsGenericDescriptor.js
var require_IsGenericDescriptor = __commonJS({
  "node_modules/es-abstract/2022/IsGenericDescriptor.js"(exports, module) {
    "use strict";
    var assertRecord = require_assertRecord();
    var IsAccessorDescriptor = require_IsAccessorDescriptor();
    var IsDataDescriptor = require_IsDataDescriptor();
    var Type = require_Type2();
    module.exports = function IsGenericDescriptor(Desc) {
      if (typeof Desc === "undefined") {
        return false;
      }
      assertRecord(Type, "Property Descriptor", "Desc", Desc);
      if (!IsAccessorDescriptor(Desc) && !IsDataDescriptor(Desc)) {
        return true;
      }
      return false;
    };
  }
});

// node_modules/es-abstract/2022/ValidateAndApplyPropertyDescriptor.js
var require_ValidateAndApplyPropertyDescriptor = __commonJS({
  "node_modules/es-abstract/2022/ValidateAndApplyPropertyDescriptor.js"(exports, module) {
    "use strict";
    var GetIntrinsic = require_get_intrinsic();
    var $TypeError = GetIntrinsic("%TypeError%");
    var DefineOwnProperty = require_DefineOwnProperty();
    var isFullyPopulatedPropertyDescriptor = require_isFullyPopulatedPropertyDescriptor();
    var isPropertyDescriptor = require_isPropertyDescriptor();
    var FromPropertyDescriptor = require_FromPropertyDescriptor();
    var IsAccessorDescriptor = require_IsAccessorDescriptor();
    var IsDataDescriptor = require_IsDataDescriptor();
    var IsGenericDescriptor = require_IsGenericDescriptor();
    var IsPropertyKey = require_IsPropertyKey();
    var SameValue = require_SameValue();
    var Type = require_Type2();
    module.exports = function ValidateAndApplyPropertyDescriptor(O2, P2, extensible, Desc, current) {
      var oType = Type(O2);
      if (oType !== "Undefined" && oType !== "Object") {
        throw new $TypeError("Assertion failed: O must be undefined or an Object");
      }
      if (!IsPropertyKey(P2)) {
        throw new $TypeError("Assertion failed: P must be a Property Key");
      }
      if (Type(extensible) !== "Boolean") {
        throw new $TypeError("Assertion failed: extensible must be a Boolean");
      }
      if (!isPropertyDescriptor({
        Type,
        IsDataDescriptor,
        IsAccessorDescriptor
      }, Desc)) {
        throw new $TypeError("Assertion failed: Desc must be a Property Descriptor");
      }
      if (Type(current) !== "Undefined" && !isPropertyDescriptor({
        Type,
        IsDataDescriptor,
        IsAccessorDescriptor
      }, current)) {
        throw new $TypeError("Assertion failed: current must be a Property Descriptor, or undefined");
      }
      if (Type(current) === "Undefined") {
        if (!extensible) {
          return false;
        }
        if (oType === "Undefined") {
          return true;
        }
        if (IsAccessorDescriptor(Desc)) {
          return DefineOwnProperty(
            IsDataDescriptor,
            SameValue,
            FromPropertyDescriptor,
            O2,
            P2,
            Desc
          );
        }
        return DefineOwnProperty(
          IsDataDescriptor,
          SameValue,
          FromPropertyDescriptor,
          O2,
          P2,
          {
            "[[Configurable]]": !!Desc["[[Configurable]]"],
            "[[Enumerable]]": !!Desc["[[Enumerable]]"],
            "[[Value]]": Desc["[[Value]]"],
            "[[Writable]]": !!Desc["[[Writable]]"]
          }
        );
      }
      if (!isFullyPopulatedPropertyDescriptor({
        IsAccessorDescriptor,
        IsDataDescriptor
      }, current)) {
        throw new $TypeError("`current`, when present, must be a fully populated and valid Property Descriptor");
      }
      if (!current["[[Configurable]]"]) {
        if ("[[Configurable]]" in Desc && Desc["[[Configurable]]"]) {
          return false;
        }
        if ("[[Enumerable]]" in Desc && !SameValue(Desc["[[Enumerable]]"], current["[[Enumerable]]"])) {
          return false;
        }
        if (!IsGenericDescriptor(Desc) && !SameValue(IsAccessorDescriptor(Desc), IsAccessorDescriptor(current))) {
          return false;
        }
        if (IsAccessorDescriptor(current)) {
          if ("[[Get]]" in Desc && !SameValue(Desc["[[Get]]"], current["[[Get]]"])) {
            return false;
          }
          if ("[[Set]]" in Desc && !SameValue(Desc["[[Set]]"], current["[[Set]]"])) {
            return false;
          }
        } else if (!current["[[Writable]]"]) {
          if ("[[Writable]]" in Desc && Desc["[[Writable]]"]) {
            return false;
          }
          if ("[[Value]]" in Desc && !SameValue(Desc["[[Value]]"], current["[[Value]]"])) {
            return false;
          }
        }
      }
      if (oType !== "Undefined") {
        var configurable;
        var enumerable;
        if (IsDataDescriptor(current) && IsAccessorDescriptor(Desc)) {
          configurable = ("[[Configurable]]" in Desc ? Desc : current)["[[Configurable]]"];
          enumerable = ("[[Enumerable]]" in Desc ? Desc : current)["[[Enumerable]]"];
          return DefineOwnProperty(
            IsDataDescriptor,
            SameValue,
            FromPropertyDescriptor,
            O2,
            P2,
            {
              "[[Configurable]]": !!configurable,
              "[[Enumerable]]": !!enumerable,
              "[[Get]]": ("[[Get]]" in Desc ? Desc : current)["[[Get]]"],
              "[[Set]]": ("[[Set]]" in Desc ? Desc : current)["[[Set]]"]
            }
          );
        } else if (IsAccessorDescriptor(current) && IsDataDescriptor(Desc)) {
          configurable = ("[[Configurable]]" in Desc ? Desc : current)["[[Configurable]]"];
          enumerable = ("[[Enumerable]]" in Desc ? Desc : current)["[[Enumerable]]"];
          return DefineOwnProperty(
            IsDataDescriptor,
            SameValue,
            FromPropertyDescriptor,
            O2,
            P2,
            {
              "[[Configurable]]": !!configurable,
              "[[Enumerable]]": !!enumerable,
              "[[Value]]": ("[[Value]]" in Desc ? Desc : current)["[[Value]]"],
              "[[Writable]]": !!("[[Writable]]" in Desc ? Desc : current)["[[Writable]]"]
            }
          );
        }
        return DefineOwnProperty(
          IsDataDescriptor,
          SameValue,
          FromPropertyDescriptor,
          O2,
          P2,
          Desc
        );
      }
      return true;
    };
  }
});

// node_modules/es-abstract/2022/OrdinaryDefineOwnProperty.js
var require_OrdinaryDefineOwnProperty = __commonJS({
  "node_modules/es-abstract/2022/OrdinaryDefineOwnProperty.js"(exports, module) {
    "use strict";
    var GetIntrinsic = require_get_intrinsic();
    var $gOPD = require_gopd();
    var $SyntaxError = GetIntrinsic("%SyntaxError%");
    var $TypeError = GetIntrinsic("%TypeError%");
    var isPropertyDescriptor = require_isPropertyDescriptor();
    var IsAccessorDescriptor = require_IsAccessorDescriptor();
    var IsDataDescriptor = require_IsDataDescriptor();
    var IsExtensible = require_IsExtensible();
    var IsPropertyKey = require_IsPropertyKey();
    var ToPropertyDescriptor = require_ToPropertyDescriptor();
    var SameValue = require_SameValue();
    var Type = require_Type2();
    var ValidateAndApplyPropertyDescriptor = require_ValidateAndApplyPropertyDescriptor();
    module.exports = function OrdinaryDefineOwnProperty(O2, P2, Desc) {
      if (Type(O2) !== "Object") {
        throw new $TypeError("Assertion failed: O must be an Object");
      }
      if (!IsPropertyKey(P2)) {
        throw new $TypeError("Assertion failed: P must be a Property Key");
      }
      if (!isPropertyDescriptor({
        Type,
        IsDataDescriptor,
        IsAccessorDescriptor
      }, Desc)) {
        throw new $TypeError("Assertion failed: Desc must be a Property Descriptor");
      }
      if (!$gOPD) {
        if (IsAccessorDescriptor(Desc)) {
          throw new $SyntaxError("This environment does not support accessor property descriptors.");
        }
        var creatingNormalDataProperty = !(P2 in O2) && Desc["[[Writable]]"] && Desc["[[Enumerable]]"] && Desc["[[Configurable]]"] && "[[Value]]" in Desc;
        var settingExistingDataProperty = P2 in O2 && (!("[[Configurable]]" in Desc) || Desc["[[Configurable]]"]) && (!("[[Enumerable]]" in Desc) || Desc["[[Enumerable]]"]) && (!("[[Writable]]" in Desc) || Desc["[[Writable]]"]) && "[[Value]]" in Desc;
        if (creatingNormalDataProperty || settingExistingDataProperty) {
          O2[P2] = Desc["[[Value]]"];
          return SameValue(O2[P2], Desc["[[Value]]"]);
        }
        throw new $SyntaxError("This environment does not support defining non-writable, non-enumerable, or non-configurable properties");
      }
      var desc = $gOPD(O2, P2);
      var current = desc && ToPropertyDescriptor(desc);
      var extensible = IsExtensible(O2);
      return ValidateAndApplyPropertyDescriptor(O2, P2, extensible, Desc, current);
    };
  }
});

// node_modules/es-abstract/2022/CreateDataProperty.js
var require_CreateDataProperty = __commonJS({
  "node_modules/es-abstract/2022/CreateDataProperty.js"(exports, module) {
    "use strict";
    var GetIntrinsic = require_get_intrinsic();
    var $TypeError = GetIntrinsic("%TypeError%");
    var IsPropertyKey = require_IsPropertyKey();
    var OrdinaryDefineOwnProperty = require_OrdinaryDefineOwnProperty();
    var Type = require_Type2();
    module.exports = function CreateDataProperty(O2, P2, V) {
      if (Type(O2) !== "Object") {
        throw new $TypeError("Assertion failed: Type(O) is not Object");
      }
      if (!IsPropertyKey(P2)) {
        throw new $TypeError("Assertion failed: IsPropertyKey(P) is not true");
      }
      var newDesc = {
        "[[Configurable]]": true,
        "[[Enumerable]]": true,
        "[[Value]]": V,
        "[[Writable]]": true
      };
      return OrdinaryDefineOwnProperty(O2, P2, newDesc);
    };
  }
});

// node_modules/es-abstract/2022/CreateDataPropertyOrThrow.js
var require_CreateDataPropertyOrThrow = __commonJS({
  "node_modules/es-abstract/2022/CreateDataPropertyOrThrow.js"(exports, module) {
    "use strict";
    var GetIntrinsic = require_get_intrinsic();
    var $TypeError = GetIntrinsic("%TypeError%");
    var CreateDataProperty = require_CreateDataProperty();
    var IsPropertyKey = require_IsPropertyKey();
    var Type = require_Type2();
    module.exports = function CreateDataPropertyOrThrow(O2, P2, V) {
      if (Type(O2) !== "Object") {
        throw new $TypeError("Assertion failed: Type(O) is not Object");
      }
      if (!IsPropertyKey(P2)) {
        throw new $TypeError("Assertion failed: IsPropertyKey(P) is not true");
      }
      var success = CreateDataProperty(O2, P2, V);
      if (!success) {
        throw new $TypeError("unable to create data property");
      }
      return success;
    };
  }
});

// node_modules/es-abstract/2022/HasProperty.js
var require_HasProperty = __commonJS({
  "node_modules/es-abstract/2022/HasProperty.js"(exports, module) {
    "use strict";
    var GetIntrinsic = require_get_intrinsic();
    var $TypeError = GetIntrinsic("%TypeError%");
    var IsPropertyKey = require_IsPropertyKey();
    var Type = require_Type2();
    module.exports = function HasProperty(O2, P2) {
      if (Type(O2) !== "Object") {
        throw new $TypeError("Assertion failed: `O` must be an Object");
      }
      if (!IsPropertyKey(P2)) {
        throw new $TypeError("Assertion failed: `P` must be a Property Key");
      }
      return P2 in O2;
    };
  }
});

// node_modules/es-to-primitive/helpers/isPrimitive.js
var require_isPrimitive2 = __commonJS({
  "node_modules/es-to-primitive/helpers/isPrimitive.js"(exports, module) {
    "use strict";
    module.exports = function isPrimitive(value) {
      return value === null || typeof value !== "function" && typeof value !== "object";
    };
  }
});

// node_modules/has-tostringtag/shams.js
var require_shams2 = __commonJS({
  "node_modules/has-tostringtag/shams.js"(exports, module) {
    "use strict";
    var hasSymbols = require_shams();
    module.exports = function hasToStringTagShams() {
      return hasSymbols() && !!Symbol.toStringTag;
    };
  }
});

// node_modules/is-date-object/index.js
var require_is_date_object = __commonJS({
  "node_modules/is-date-object/index.js"(exports, module) {
    "use strict";
    var getDay = Date.prototype.getDay;
    var tryDateObject = function tryDateGetDayCall(value) {
      try {
        getDay.call(value);
        return true;
      } catch (e3) {
        return false;
      }
    };
    var toStr = Object.prototype.toString;
    var dateClass = "[object Date]";
    var hasToStringTag = require_shams2()();
    module.exports = function isDateObject(value) {
      if (typeof value !== "object" || value === null) {
        return false;
      }
      return hasToStringTag ? tryDateObject(value) : toStr.call(value) === dateClass;
    };
  }
});

// node_modules/is-symbol/index.js
var require_is_symbol = __commonJS({
  "node_modules/is-symbol/index.js"(exports, module) {
    "use strict";
    var toStr = Object.prototype.toString;
    var hasSymbols = require_has_symbols()();
    if (hasSymbols) {
      symToStr = Symbol.prototype.toString;
      symStringRegex = /^Symbol\(.*\)$/;
      isSymbolObject = function isRealSymbolObject(value) {
        if (typeof value.valueOf() !== "symbol") {
          return false;
        }
        return symStringRegex.test(symToStr.call(value));
      };
      module.exports = function isSymbol(value) {
        if (typeof value === "symbol") {
          return true;
        }
        if (toStr.call(value) !== "[object Symbol]") {
          return false;
        }
        try {
          return isSymbolObject(value);
        } catch (e3) {
          return false;
        }
      };
    } else {
      module.exports = function isSymbol(value) {
        return false;
      };
    }
    var symToStr;
    var symStringRegex;
    var isSymbolObject;
  }
});

// node_modules/es-to-primitive/es2015.js
var require_es2015 = __commonJS({
  "node_modules/es-to-primitive/es2015.js"(exports, module) {
    "use strict";
    var hasSymbols = typeof Symbol === "function" && typeof Symbol.iterator === "symbol";
    var isPrimitive = require_isPrimitive2();
    var isCallable = require_is_callable();
    var isDate = require_is_date_object();
    var isSymbol = require_is_symbol();
    var ordinaryToPrimitive = function OrdinaryToPrimitive(O2, hint) {
      if (typeof O2 === "undefined" || O2 === null) {
        throw new TypeError("Cannot call method on " + O2);
      }
      if (typeof hint !== "string" || hint !== "number" && hint !== "string") {
        throw new TypeError('hint must be "string" or "number"');
      }
      var methodNames = hint === "string" ? ["toString", "valueOf"] : ["valueOf", "toString"];
      var method, result, i3;
      for (i3 = 0; i3 < methodNames.length; ++i3) {
        method = O2[methodNames[i3]];
        if (isCallable(method)) {
          result = method.call(O2);
          if (isPrimitive(result)) {
            return result;
          }
        }
      }
      throw new TypeError("No default value");
    };
    var GetMethod = function GetMethod2(O2, P2) {
      var func14 = O2[P2];
      if (func14 !== null && typeof func14 !== "undefined") {
        if (!isCallable(func14)) {
          throw new TypeError(func14 + " returned for property " + P2 + " of object " + O2 + " is not a function");
        }
        return func14;
      }
      return void 0;
    };
    module.exports = function ToPrimitive(input) {
      if (isPrimitive(input)) {
        return input;
      }
      var hint = "default";
      if (arguments.length > 1) {
        if (arguments[1] === String) {
          hint = "string";
        } else if (arguments[1] === Number) {
          hint = "number";
        }
      }
      var exoticToPrim;
      if (hasSymbols) {
        if (Symbol.toPrimitive) {
          exoticToPrim = GetMethod(input, Symbol.toPrimitive);
        } else if (isSymbol(input)) {
          exoticToPrim = Symbol.prototype.valueOf;
        }
      }
      if (typeof exoticToPrim !== "undefined") {
        var result = exoticToPrim.call(input, hint);
        if (isPrimitive(result)) {
          return result;
        }
        throw new TypeError("unable to convert exotic object to primitive");
      }
      if (hint === "default" && (isDate(input) || isSymbol(input))) {
        hint = "string";
      }
      return ordinaryToPrimitive(input, hint === "default" ? "number" : hint);
    };
  }
});

// node_modules/es-abstract/2022/ToPrimitive.js
var require_ToPrimitive = __commonJS({
  "node_modules/es-abstract/2022/ToPrimitive.js"(exports, module) {
    "use strict";
    var toPrimitive = require_es2015();
    module.exports = function ToPrimitive(input) {
      if (arguments.length > 1) {
        return toPrimitive(input, arguments[1]);
      }
      return toPrimitive(input);
    };
  }
});

// node_modules/is-regex/index.js
var require_is_regex = __commonJS({
  "node_modules/is-regex/index.js"(exports, module) {
    "use strict";
    var callBound = require_callBound();
    var hasToStringTag = require_shams2()();
    var has2;
    var $exec;
    var isRegexMarker;
    var badStringifier;
    if (hasToStringTag) {
      has2 = callBound("Object.prototype.hasOwnProperty");
      $exec = callBound("RegExp.prototype.exec");
      isRegexMarker = {};
      throwRegexMarker = function() {
        throw isRegexMarker;
      };
      badStringifier = {
        toString: throwRegexMarker,
        valueOf: throwRegexMarker
      };
      if (typeof Symbol.toPrimitive === "symbol") {
        badStringifier[Symbol.toPrimitive] = throwRegexMarker;
      }
    }
    var throwRegexMarker;
    var $toString = callBound("Object.prototype.toString");
    var gOPD = Object.getOwnPropertyDescriptor;
    var regexClass = "[object RegExp]";
    module.exports = hasToStringTag ? function isRegex(value) {
      if (!value || typeof value !== "object") {
        return false;
      }
      var descriptor = gOPD(value, "lastIndex");
      var hasLastIndexDataProperty = descriptor && has2(descriptor, "value");
      if (!hasLastIndexDataProperty) {
        return false;
      }
      try {
        $exec(value, badStringifier);
      } catch (e3) {
        return e3 === isRegexMarker;
      }
    } : function isRegex(value) {
      if (!value || typeof value !== "object" && typeof value !== "function") {
        return false;
      }
      return $toString(value) === regexClass;
    };
  }
});

// node_modules/safe-regex-test/index.js
var require_safe_regex_test = __commonJS({
  "node_modules/safe-regex-test/index.js"(exports, module) {
    "use strict";
    var callBound = require_callBound();
    var GetIntrinsic = require_get_intrinsic();
    var isRegex = require_is_regex();
    var $exec = callBound("RegExp.prototype.exec");
    var $TypeError = GetIntrinsic("%TypeError%");
    module.exports = function regexTester(regex) {
      if (!isRegex(regex)) {
        throw new $TypeError("`regex` must be a RegExp");
      }
      return function test(s3) {
        return $exec(regex, s3) !== null;
      };
    };
  }
});

// node_modules/es-abstract/5/CheckObjectCoercible.js
var require_CheckObjectCoercible = __commonJS({
  "node_modules/es-abstract/5/CheckObjectCoercible.js"(exports, module) {
    "use strict";
    var GetIntrinsic = require_get_intrinsic();
    var $TypeError = GetIntrinsic("%TypeError%");
    module.exports = function CheckObjectCoercible(value, optMessage) {
      if (value == null) {
        throw new $TypeError(optMessage || "Cannot call method on " + value);
      }
      return value;
    };
  }
});

// node_modules/es-abstract/2022/RequireObjectCoercible.js
var require_RequireObjectCoercible = __commonJS({
  "node_modules/es-abstract/2022/RequireObjectCoercible.js"(exports, module) {
    "use strict";
    module.exports = require_CheckObjectCoercible();
  }
});

// node_modules/es-abstract/2022/ToString.js
var require_ToString = __commonJS({
  "node_modules/es-abstract/2022/ToString.js"(exports, module) {
    "use strict";
    var GetIntrinsic = require_get_intrinsic();
    var $String = GetIntrinsic("%String%");
    var $TypeError = GetIntrinsic("%TypeError%");
    module.exports = function ToString(argument) {
      if (typeof argument === "symbol") {
        throw new $TypeError("Cannot convert a Symbol value to a string");
      }
      return $String(argument);
    };
  }
});

// node_modules/string.prototype.trim/implementation.js
var require_implementation3 = __commonJS({
  "node_modules/string.prototype.trim/implementation.js"(exports, module) {
    "use strict";
    var RequireObjectCoercible = require_RequireObjectCoercible();
    var ToString = require_ToString();
    var callBound = require_callBound();
    var $replace = callBound("String.prototype.replace");
    var mvsIsWS = /^\s$/.test("᠎");
    var leftWhitespace = mvsIsWS ? /^[\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF]+/ : /^[\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF]+/;
    var rightWhitespace = mvsIsWS ? /[\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF]+$/ : /[\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF]+$/;
    module.exports = function trim() {
      var S2 = ToString(RequireObjectCoercible(this));
      return $replace($replace(S2, leftWhitespace, ""), rightWhitespace, "");
    };
  }
});

// node_modules/string.prototype.trim/polyfill.js
var require_polyfill = __commonJS({
  "node_modules/string.prototype.trim/polyfill.js"(exports, module) {
    "use strict";
    var implementation = require_implementation3();
    var zeroWidthSpace = "​";
    var mongolianVowelSeparator = "᠎";
    module.exports = function getPolyfill() {
      if (String.prototype.trim && zeroWidthSpace.trim() === zeroWidthSpace && mongolianVowelSeparator.trim() === mongolianVowelSeparator && ("_" + mongolianVowelSeparator).trim() === "_" + mongolianVowelSeparator && (mongolianVowelSeparator + "_").trim() === mongolianVowelSeparator + "_") {
        return String.prototype.trim;
      }
      return implementation;
    };
  }
});

// node_modules/string.prototype.trim/shim.js
var require_shim = __commonJS({
  "node_modules/string.prototype.trim/shim.js"(exports, module) {
    "use strict";
    var define2 = require_define_properties();
    var getPolyfill = require_polyfill();
    module.exports = function shimStringTrim() {
      var polyfill = getPolyfill();
      define2(String.prototype, { trim: polyfill }, {
        trim: function testTrim() {
          return String.prototype.trim !== polyfill;
        }
      });
      return polyfill;
    };
  }
});

// node_modules/string.prototype.trim/index.js
var require_string_prototype = __commonJS({
  "node_modules/string.prototype.trim/index.js"(exports, module) {
    "use strict";
    var callBind = require_call_bind();
    var define2 = require_define_properties();
    var RequireObjectCoercible = require_RequireObjectCoercible();
    var implementation = require_implementation3();
    var getPolyfill = require_polyfill();
    var shim = require_shim();
    var bound = callBind(getPolyfill());
    var boundMethod = function trim(receiver) {
      RequireObjectCoercible(receiver);
      return bound(receiver);
    };
    define2(boundMethod, {
      getPolyfill,
      implementation,
      shim
    });
    module.exports = boundMethod;
  }
});

// node_modules/es-abstract/2022/StringToNumber.js
var require_StringToNumber = __commonJS({
  "node_modules/es-abstract/2022/StringToNumber.js"(exports, module) {
    "use strict";
    var GetIntrinsic = require_get_intrinsic();
    var $Number = GetIntrinsic("%Number%");
    var $RegExp = GetIntrinsic("%RegExp%");
    var $TypeError = GetIntrinsic("%TypeError%");
    var $parseInteger = GetIntrinsic("%parseInt%");
    var callBound = require_callBound();
    var regexTester = require_safe_regex_test();
    var $strSlice = callBound("String.prototype.slice");
    var isBinary = regexTester(/^0b[01]+$/i);
    var isOctal = regexTester(/^0o[0-7]+$/i);
    var isInvalidHexLiteral = regexTester(/^[-+]0x[0-9a-f]+$/i);
    var nonWS = ["", "​", "￾"].join("");
    var nonWSregex = new $RegExp("[" + nonWS + "]", "g");
    var hasNonWS = regexTester(nonWSregex);
    var $trim = require_string_prototype();
    var Type = require_Type2();
    module.exports = function StringToNumber(argument) {
      if (Type(argument) !== "String") {
        throw new $TypeError("Assertion failed: `argument` is not a String");
      }
      if (isBinary(argument)) {
        return $Number($parseInteger($strSlice(argument, 2), 2));
      }
      if (isOctal(argument)) {
        return $Number($parseInteger($strSlice(argument, 2), 8));
      }
      if (hasNonWS(argument) || isInvalidHexLiteral(argument)) {
        return NaN;
      }
      var trimmed = $trim(argument);
      if (trimmed !== argument) {
        return StringToNumber(trimmed);
      }
      return $Number(argument);
    };
  }
});

// node_modules/es-abstract/2022/ToNumber.js
var require_ToNumber = __commonJS({
  "node_modules/es-abstract/2022/ToNumber.js"(exports, module) {
    "use strict";
    var GetIntrinsic = require_get_intrinsic();
    var $TypeError = GetIntrinsic("%TypeError%");
    var $Number = GetIntrinsic("%Number%");
    var isPrimitive = require_isPrimitive();
    var ToPrimitive = require_ToPrimitive();
    var StringToNumber = require_StringToNumber();
    module.exports = function ToNumber(argument) {
      var value = isPrimitive(argument) ? argument : ToPrimitive(argument, $Number);
      if (typeof value === "symbol") {
        throw new $TypeError("Cannot convert a Symbol value to a number");
      }
      if (typeof value === "bigint") {
        throw new $TypeError("Conversion from 'BigInt' to 'number' is not allowed.");
      }
      if (typeof value === "string") {
        return StringToNumber(value);
      }
      return $Number(value);
    };
  }
});

// node_modules/es-abstract/helpers/sign.js
var require_sign = __commonJS({
  "node_modules/es-abstract/helpers/sign.js"(exports, module) {
    "use strict";
    module.exports = function sign(number) {
      return number >= 0 ? 1 : -1;
    };
  }
});

// node_modules/es-abstract/2022/ToIntegerOrInfinity.js
var require_ToIntegerOrInfinity = __commonJS({
  "node_modules/es-abstract/2022/ToIntegerOrInfinity.js"(exports, module) {
    "use strict";
    var abs = require_abs();
    var floor = require_floor();
    var ToNumber = require_ToNumber();
    var $isNaN = require_isNaN();
    var $isFinite = require_isFinite();
    var $sign = require_sign();
    module.exports = function ToIntegerOrInfinity(value) {
      var number = ToNumber(value);
      if ($isNaN(number) || number === 0) {
        return 0;
      }
      if (!$isFinite(number)) {
        return number;
      }
      var integer = floor(abs(number));
      if (integer === 0) {
        return 0;
      }
      return $sign(number) * integer;
    };
  }
});

// node_modules/es-abstract/2022/ToLength.js
var require_ToLength = __commonJS({
  "node_modules/es-abstract/2022/ToLength.js"(exports, module) {
    "use strict";
    var MAX_SAFE_INTEGER = require_maxSafeInteger();
    var ToIntegerOrInfinity = require_ToIntegerOrInfinity();
    module.exports = function ToLength(argument) {
      var len = ToIntegerOrInfinity(argument);
      if (len <= 0) {
        return 0;
      }
      if (len > MAX_SAFE_INTEGER) {
        return MAX_SAFE_INTEGER;
      }
      return len;
    };
  }
});

// node_modules/es-abstract/2022/LengthOfArrayLike.js
var require_LengthOfArrayLike = __commonJS({
  "node_modules/es-abstract/2022/LengthOfArrayLike.js"(exports, module) {
    "use strict";
    var GetIntrinsic = require_get_intrinsic();
    var $TypeError = GetIntrinsic("%TypeError%");
    var Get = require_Get();
    var ToLength = require_ToLength();
    var Type = require_Type2();
    module.exports = function LengthOfArrayLike(obj) {
      if (Type(obj) !== "Object") {
        throw new $TypeError("Assertion failed: `obj` must be an Object");
      }
      return ToLength(Get(obj, "length"));
    };
  }
});

// node_modules/es-abstract/2022/FlattenIntoArray.js
var require_FlattenIntoArray = __commonJS({
  "node_modules/es-abstract/2022/FlattenIntoArray.js"(exports, module) {
    "use strict";
    var GetIntrinsic = require_get_intrinsic();
    var $TypeError = GetIntrinsic("%TypeError%");
    var MAX_SAFE_INTEGER = require_maxSafeInteger();
    var Call = require_Call();
    var CreateDataPropertyOrThrow = require_CreateDataPropertyOrThrow();
    var Get = require_Get();
    var HasProperty = require_HasProperty();
    var IsArray = require_IsArray2();
    var LengthOfArrayLike = require_LengthOfArrayLike();
    var ToString = require_ToString();
    module.exports = function FlattenIntoArray(target, source, sourceLen, start, depth) {
      var mapperFunction;
      if (arguments.length > 5) {
        mapperFunction = arguments[5];
      }
      var targetIndex = start;
      var sourceIndex = 0;
      while (sourceIndex < sourceLen) {
        var P2 = ToString(sourceIndex);
        var exists = HasProperty(source, P2);
        if (exists === true) {
          var element = Get(source, P2);
          if (typeof mapperFunction !== "undefined") {
            if (arguments.length <= 6) {
              throw new $TypeError("Assertion failed: thisArg is required when mapperFunction is provided");
            }
            element = Call(mapperFunction, arguments[6], [element, sourceIndex, source]);
          }
          var shouldFlatten = false;
          if (depth > 0) {
            shouldFlatten = IsArray(element);
          }
          if (shouldFlatten) {
            var elementLen = LengthOfArrayLike(element);
            targetIndex = FlattenIntoArray(target, element, elementLen, targetIndex, depth - 1);
          } else {
            if (targetIndex >= MAX_SAFE_INTEGER) {
              throw new $TypeError("index too large");
            }
            CreateDataPropertyOrThrow(target, ToString(targetIndex), element);
            targetIndex += 1;
          }
        }
        sourceIndex += 1;
      }
      return targetIndex;
    };
  }
});

// node_modules/es-abstract/2022/ToObject.js
var require_ToObject = __commonJS({
  "node_modules/es-abstract/2022/ToObject.js"(exports, module) {
    "use strict";
    var GetIntrinsic = require_get_intrinsic();
    var $Object = GetIntrinsic("%Object%");
    var RequireObjectCoercible = require_RequireObjectCoercible();
    module.exports = function ToObject(value) {
      RequireObjectCoercible(value);
      return $Object(value);
    };
  }
});

// node_modules/array.prototype.flatmap/implementation.js
var require_implementation4 = __commonJS({
  "node_modules/array.prototype.flatmap/implementation.js"(exports, module) {
    "use strict";
    var ArraySpeciesCreate = require_ArraySpeciesCreate();
    var FlattenIntoArray = require_FlattenIntoArray();
    var Get = require_Get();
    var IsCallable = require_IsCallable();
    var ToLength = require_ToLength();
    var ToObject = require_ToObject();
    module.exports = function flatMap2(mapperFunction) {
      var O2 = ToObject(this);
      var sourceLen = ToLength(Get(O2, "length"));
      if (!IsCallable(mapperFunction)) {
        throw new TypeError("mapperFunction must be a function");
      }
      var T;
      if (arguments.length > 1) {
        T = arguments[1];
      }
      var A2 = ArraySpeciesCreate(O2, 0);
      FlattenIntoArray(A2, O2, sourceLen, 0, 1, mapperFunction, T);
      return A2;
    };
  }
});

// node_modules/array.prototype.flatmap/polyfill.js
var require_polyfill2 = __commonJS({
  "node_modules/array.prototype.flatmap/polyfill.js"(exports, module) {
    "use strict";
    var implementation = require_implementation4();
    module.exports = function getPolyfill() {
      return Array.prototype.flatMap || implementation;
    };
  }
});

// node_modules/es-shim-unscopables/index.js
var require_es_shim_unscopables = __commonJS({
  "node_modules/es-shim-unscopables/index.js"(exports, module) {
    "use strict";
    var has2 = require_src();
    var hasUnscopables = typeof Symbol === "function" && typeof Symbol.unscopables === "symbol";
    var map2 = hasUnscopables && Array.prototype[Symbol.unscopables];
    var $TypeError = TypeError;
    module.exports = function shimUnscopables(method) {
      if (typeof method !== "string" || !method) {
        throw new $TypeError("method must be a non-empty string");
      }
      if (!has2(Array.prototype, method)) {
        throw new $TypeError("method must be on Array.prototype");
      }
      if (hasUnscopables) {
        map2[method] = true;
      }
    };
  }
});

// node_modules/array.prototype.flatmap/shim.js
var require_shim2 = __commonJS({
  "node_modules/array.prototype.flatmap/shim.js"(exports, module) {
    "use strict";
    var define2 = require_define_properties();
    var shimUnscopables = require_es_shim_unscopables();
    var getPolyfill = require_polyfill2();
    module.exports = function shimFlatMap() {
      var polyfill = getPolyfill();
      define2(
        Array.prototype,
        { flatMap: polyfill },
        { flatMap: function() {
          return Array.prototype.flatMap !== polyfill;
        } }
      );
      shimUnscopables("flatMap");
      return polyfill;
    };
  }
});

// node_modules/array.prototype.flatmap/index.js
var require_array_prototype = __commonJS({
  "node_modules/array.prototype.flatmap/index.js"(exports, module) {
    "use strict";
    var define2 = require_define_properties();
    var callBind = require_call_bind();
    var implementation = require_implementation4();
    var getPolyfill = require_polyfill2();
    var polyfill = getPolyfill();
    var shim = require_shim2();
    var boundFlatMap = callBind(polyfill);
    define2(boundFlatMap, {
      getPolyfill,
      implementation,
      shim
    });
    module.exports = boundFlatMap;
  }
});

// node_modules/react-spreadsheet/dist/es/index.js
var React = __toESM(require_react());
var import_classnames = __toESM(require_classnames());

// node_modules/immer/dist/immer.esm.mjs
function n(n3) {
  for (var r3 = arguments.length, t3 = Array(r3 > 1 ? r3 - 1 : 0), e3 = 1; e3 < r3; e3++)
    t3[e3 - 1] = arguments[e3];
  if (true) {
    var i3 = Y[n3], o5 = i3 ? "function" == typeof i3 ? i3.apply(null, t3) : i3 : "unknown error nr: " + n3;
    throw Error("[Immer] " + o5);
  }
  throw Error("[Immer] minified error nr: " + n3 + (t3.length ? " " + t3.map(function(n4) {
    return "'" + n4 + "'";
  }).join(",") : "") + ". Find the full error at: https://bit.ly/3cXEKWf");
}
function r(n3) {
  return !!n3 && !!n3[Q];
}
function t(n3) {
  var r3;
  return !!n3 && (function(n4) {
    if (!n4 || "object" != typeof n4)
      return false;
    var r4 = Object.getPrototypeOf(n4);
    if (null === r4)
      return true;
    var t3 = Object.hasOwnProperty.call(r4, "constructor") && r4.constructor;
    return t3 === Object || "function" == typeof t3 && Function.toString.call(t3) === Z;
  }(n3) || Array.isArray(n3) || !!n3[L] || !!(null === (r3 = n3.constructor) || void 0 === r3 ? void 0 : r3[L]) || s(n3) || v(n3));
}
function i(n3, r3, t3) {
  void 0 === t3 && (t3 = false), 0 === o(n3) ? (t3 ? Object.keys : nn)(n3).forEach(function(e3) {
    t3 && "symbol" == typeof e3 || r3(e3, n3[e3], n3);
  }) : n3.forEach(function(t4, e3) {
    return r3(e3, t4, n3);
  });
}
function o(n3) {
  var r3 = n3[Q];
  return r3 ? r3.i > 3 ? r3.i - 4 : r3.i : Array.isArray(n3) ? 1 : s(n3) ? 2 : v(n3) ? 3 : 0;
}
function u(n3, r3) {
  return 2 === o(n3) ? n3.has(r3) : Object.prototype.hasOwnProperty.call(n3, r3);
}
function a(n3, r3) {
  return 2 === o(n3) ? n3.get(r3) : n3[r3];
}
function f(n3, r3, t3) {
  var e3 = o(n3);
  2 === e3 ? n3.set(r3, t3) : 3 === e3 ? n3.add(t3) : n3[r3] = t3;
}
function c(n3, r3) {
  return n3 === r3 ? 0 !== n3 || 1 / n3 == 1 / r3 : n3 != n3 && r3 != r3;
}
function s(n3) {
  return X && n3 instanceof Map;
}
function v(n3) {
  return q && n3 instanceof Set;
}
function p(n3) {
  return n3.o || n3.t;
}
function l(n3) {
  if (Array.isArray(n3))
    return Array.prototype.slice.call(n3);
  var r3 = rn(n3);
  delete r3[Q];
  for (var t3 = nn(r3), e3 = 0; e3 < t3.length; e3++) {
    var i3 = t3[e3], o5 = r3[i3];
    false === o5.writable && (o5.writable = true, o5.configurable = true), (o5.get || o5.set) && (r3[i3] = { configurable: true, writable: true, enumerable: o5.enumerable, value: n3[i3] });
  }
  return Object.create(Object.getPrototypeOf(n3), r3);
}
function d(n3, e3) {
  return void 0 === e3 && (e3 = false), y(n3) || r(n3) || !t(n3) || (o(n3) > 1 && (n3.set = n3.add = n3.clear = n3.delete = h), Object.freeze(n3), e3 && i(n3, function(n4, r3) {
    return d(r3, true);
  }, true)), n3;
}
function h() {
  n(2);
}
function y(n3) {
  return null == n3 || "object" != typeof n3 || Object.isFrozen(n3);
}
function b(r3) {
  var t3 = tn[r3];
  return t3 || n(18, r3), t3;
}
function m(n3, r3) {
  tn[n3] || (tn[n3] = r3);
}
function _() {
  return U || n(0), U;
}
function j(n3, r3) {
  r3 && (b("Patches"), n3.u = [], n3.s = [], n3.v = r3);
}
function g(n3) {
  O(n3), n3.p.forEach(S), n3.p = null;
}
function O(n3) {
  n3 === U && (U = n3.l);
}
function w(n3) {
  return U = { p: [], l: U, h: n3, m: true, _: 0 };
}
function S(n3) {
  var r3 = n3[Q];
  0 === r3.i || 1 === r3.i ? r3.j() : r3.g = true;
}
function P(r3, e3) {
  e3._ = e3.p.length;
  var i3 = e3.p[0], o5 = void 0 !== r3 && r3 !== i3;
  return e3.h.O || b("ES5").S(e3, r3, o5), o5 ? (i3[Q].P && (g(e3), n(4)), t(r3) && (r3 = M(e3, r3), e3.l || x(e3, r3)), e3.u && b("Patches").M(i3[Q].t, r3, e3.u, e3.s)) : r3 = M(e3, i3, []), g(e3), e3.u && e3.v(e3.u, e3.s), r3 !== H ? r3 : void 0;
}
function M(n3, r3, t3) {
  if (y(r3))
    return r3;
  var e3 = r3[Q];
  if (!e3)
    return i(r3, function(i3, o6) {
      return A(n3, e3, r3, i3, o6, t3);
    }, true), r3;
  if (e3.A !== n3)
    return r3;
  if (!e3.P)
    return x(n3, e3.t, true), e3.t;
  if (!e3.I) {
    e3.I = true, e3.A._--;
    var o5 = 4 === e3.i || 5 === e3.i ? e3.o = l(e3.k) : e3.o, u3 = o5, a3 = false;
    3 === e3.i && (u3 = new Set(o5), o5.clear(), a3 = true), i(u3, function(r4, i3) {
      return A(n3, e3, o5, r4, i3, t3, a3);
    }), x(n3, o5, false), t3 && n3.u && b("Patches").N(e3, t3, n3.u, n3.s);
  }
  return e3.o;
}
function A(e3, i3, o5, a3, c3, s3, v3) {
  if (c3 === o5 && n(5), r(c3)) {
    var p3 = M(e3, c3, s3 && i3 && 3 !== i3.i && !u(i3.R, a3) ? s3.concat(a3) : void 0);
    if (f(o5, a3, p3), !r(p3))
      return;
    e3.m = false;
  } else
    v3 && o5.add(c3);
  if (t(c3) && !y(c3)) {
    if (!e3.h.D && e3._ < 1)
      return;
    M(e3, c3), i3 && i3.A.l || x(e3, c3);
  }
}
function x(n3, r3, t3) {
  void 0 === t3 && (t3 = false), !n3.l && n3.h.D && n3.m && d(r3, t3);
}
function z(n3, r3) {
  var t3 = n3[Q];
  return (t3 ? p(t3) : n3)[r3];
}
function I(n3, r3) {
  if (r3 in n3)
    for (var t3 = Object.getPrototypeOf(n3); t3; ) {
      var e3 = Object.getOwnPropertyDescriptor(t3, r3);
      if (e3)
        return e3;
      t3 = Object.getPrototypeOf(t3);
    }
}
function k(n3) {
  n3.P || (n3.P = true, n3.l && k(n3.l));
}
function E(n3) {
  n3.o || (n3.o = l(n3.t));
}
function N(n3, r3, t3) {
  var e3 = s(r3) ? b("MapSet").F(r3, t3) : v(r3) ? b("MapSet").T(r3, t3) : n3.O ? function(n4, r4) {
    var t4 = Array.isArray(n4), e4 = { i: t4 ? 1 : 0, A: r4 ? r4.A : _(), P: false, I: false, R: {}, l: r4, t: n4, k: null, o: null, j: null, C: false }, i3 = e4, o5 = en;
    t4 && (i3 = [e4], o5 = on);
    var u3 = Proxy.revocable(i3, o5), a3 = u3.revoke, f3 = u3.proxy;
    return e4.k = f3, e4.j = a3, f3;
  }(r3, t3) : b("ES5").J(r3, t3);
  return (t3 ? t3.A : _()).p.push(e3), e3;
}
function R(e3) {
  return r(e3) || n(22, e3), function n3(r3) {
    if (!t(r3))
      return r3;
    var e4, u3 = r3[Q], c3 = o(r3);
    if (u3) {
      if (!u3.P && (u3.i < 4 || !b("ES5").K(u3)))
        return u3.t;
      u3.I = true, e4 = D(r3, c3), u3.I = false;
    } else
      e4 = D(r3, c3);
    return i(e4, function(r4, t3) {
      u3 && a(u3.t, r4) === t3 || f(e4, r4, n3(t3));
    }), 3 === c3 ? new Set(e4) : e4;
  }(e3);
}
function D(n3, r3) {
  switch (r3) {
    case 2:
      return new Map(n3);
    case 3:
      return Array.from(n3);
  }
  return l(n3);
}
function F() {
  function t3(n3, r3) {
    var t4 = s3[n3];
    return t4 ? t4.enumerable = r3 : s3[n3] = t4 = { configurable: true, enumerable: r3, get: function() {
      var r4 = this[Q];
      return f3(r4), en.get(r4, n3);
    }, set: function(r4) {
      var t5 = this[Q];
      f3(t5), en.set(t5, n3, r4);
    } }, t4;
  }
  function e3(n3) {
    for (var r3 = n3.length - 1; r3 >= 0; r3--) {
      var t4 = n3[r3][Q];
      if (!t4.P)
        switch (t4.i) {
          case 5:
            a3(t4) && k(t4);
            break;
          case 4:
            o5(t4) && k(t4);
        }
    }
  }
  function o5(n3) {
    for (var r3 = n3.t, t4 = n3.k, e4 = nn(t4), i3 = e4.length - 1; i3 >= 0; i3--) {
      var o6 = e4[i3];
      if (o6 !== Q) {
        var a4 = r3[o6];
        if (void 0 === a4 && !u(r3, o6))
          return true;
        var f4 = t4[o6], s4 = f4 && f4[Q];
        if (s4 ? s4.t !== a4 : !c(f4, a4))
          return true;
      }
    }
    var v3 = !!r3[Q];
    return e4.length !== nn(r3).length + (v3 ? 0 : 1);
  }
  function a3(n3) {
    var r3 = n3.k;
    if (r3.length !== n3.t.length)
      return true;
    var t4 = Object.getOwnPropertyDescriptor(r3, r3.length - 1);
    if (t4 && !t4.get)
      return true;
    for (var e4 = 0; e4 < r3.length; e4++)
      if (!r3.hasOwnProperty(e4))
        return true;
    return false;
  }
  function f3(r3) {
    r3.g && n(3, JSON.stringify(p(r3)));
  }
  var s3 = {};
  m("ES5", { J: function(n3, r3) {
    var e4 = Array.isArray(n3), i3 = function(n4, r4) {
      if (n4) {
        for (var e5 = Array(r4.length), i4 = 0; i4 < r4.length; i4++)
          Object.defineProperty(e5, "" + i4, t3(i4, true));
        return e5;
      }
      var o7 = rn(r4);
      delete o7[Q];
      for (var u3 = nn(o7), a4 = 0; a4 < u3.length; a4++) {
        var f4 = u3[a4];
        o7[f4] = t3(f4, n4 || !!o7[f4].enumerable);
      }
      return Object.create(Object.getPrototypeOf(r4), o7);
    }(e4, n3), o6 = { i: e4 ? 5 : 4, A: r3 ? r3.A : _(), P: false, I: false, R: {}, l: r3, t: n3, k: i3, o: null, g: false, C: false };
    return Object.defineProperty(i3, Q, { value: o6, writable: true }), i3;
  }, S: function(n3, t4, o6) {
    o6 ? r(t4) && t4[Q].A === n3 && e3(n3.p) : (n3.u && function n4(r3) {
      if (r3 && "object" == typeof r3) {
        var t5 = r3[Q];
        if (t5) {
          var e4 = t5.t, o7 = t5.k, f4 = t5.R, c3 = t5.i;
          if (4 === c3)
            i(o7, function(r4) {
              r4 !== Q && (void 0 !== e4[r4] || u(e4, r4) ? f4[r4] || n4(o7[r4]) : (f4[r4] = true, k(t5)));
            }), i(e4, function(n5) {
              void 0 !== o7[n5] || u(o7, n5) || (f4[n5] = false, k(t5));
            });
          else if (5 === c3) {
            if (a3(t5) && (k(t5), f4.length = true), o7.length < e4.length)
              for (var s4 = o7.length; s4 < e4.length; s4++)
                f4[s4] = false;
            else
              for (var v3 = e4.length; v3 < o7.length; v3++)
                f4[v3] = true;
            for (var p3 = Math.min(o7.length, e4.length), l3 = 0; l3 < p3; l3++)
              o7.hasOwnProperty(l3) || (f4[l3] = true), void 0 === f4[l3] && n4(o7[l3]);
          }
        }
      }
    }(n3.p[0]), e3(n3.p));
  }, K: function(n3) {
    return 4 === n3.i ? o5(n3) : a3(n3);
  } });
}
var G;
var U;
var W = "undefined" != typeof Symbol && "symbol" == typeof Symbol("x");
var X = "undefined" != typeof Map;
var q = "undefined" != typeof Set;
var B = "undefined" != typeof Proxy && void 0 !== Proxy.revocable && "undefined" != typeof Reflect;
var H = W ? Symbol.for("immer-nothing") : ((G = {})["immer-nothing"] = true, G);
var L = W ? Symbol.for("immer-draftable") : "__$immer_draftable";
var Q = W ? Symbol.for("immer-state") : "__$immer_state";
var Y = { 0: "Illegal state", 1: "Immer drafts cannot have computed properties", 2: "This object has been frozen and should not be mutated", 3: function(n3) {
  return "Cannot use a proxy that has been revoked. Did you pass an object from inside an immer function to an async process? " + n3;
}, 4: "An immer producer returned a new value *and* modified its draft. Either return a new value *or* modify the draft.", 5: "Immer forbids circular references", 6: "The first or second argument to `produce` must be a function", 7: "The third argument to `produce` must be a function or undefined", 8: "First argument to `createDraft` must be a plain object, an array, or an immerable object", 9: "First argument to `finishDraft` must be a draft returned by `createDraft`", 10: "The given draft is already finalized", 11: "Object.defineProperty() cannot be used on an Immer draft", 12: "Object.setPrototypeOf() cannot be used on an Immer draft", 13: "Immer only supports deleting array indices", 14: "Immer only supports setting array indices and the 'length' property", 15: function(n3) {
  return "Cannot apply patch, path doesn't resolve: " + n3;
}, 16: 'Sets cannot have "replace" patches.', 17: function(n3) {
  return "Unsupported patch operation: " + n3;
}, 18: function(n3) {
  return "The plugin for '" + n3 + "' has not been loaded into Immer. To enable the plugin, import and call `enable" + n3 + "()` when initializing your application.";
}, 20: "Cannot use proxies if Proxy, Proxy.revocable or Reflect are not available", 21: function(n3) {
  return "produce can only be called on things that are draftable: plain objects, arrays, Map, Set or classes that are marked with '[immerable]: true'. Got '" + n3 + "'";
}, 22: function(n3) {
  return "'current' expects a draft, got: " + n3;
}, 23: function(n3) {
  return "'original' expects a draft, got: " + n3;
}, 24: "Patching reserved attributes like __proto__, prototype and constructor is not allowed" };
var Z = "" + Object.prototype.constructor;
var nn = "undefined" != typeof Reflect && Reflect.ownKeys ? Reflect.ownKeys : void 0 !== Object.getOwnPropertySymbols ? function(n3) {
  return Object.getOwnPropertyNames(n3).concat(Object.getOwnPropertySymbols(n3));
} : Object.getOwnPropertyNames;
var rn = Object.getOwnPropertyDescriptors || function(n3) {
  var r3 = {};
  return nn(n3).forEach(function(t3) {
    r3[t3] = Object.getOwnPropertyDescriptor(n3, t3);
  }), r3;
};
var tn = {};
var en = { get: function(n3, r3) {
  if (r3 === Q)
    return n3;
  var e3 = p(n3);
  if (!u(e3, r3))
    return function(n4, r4, t3) {
      var e4, i4 = I(r4, t3);
      return i4 ? "value" in i4 ? i4.value : null === (e4 = i4.get) || void 0 === e4 ? void 0 : e4.call(n4.k) : void 0;
    }(n3, e3, r3);
  var i3 = e3[r3];
  return n3.I || !t(i3) ? i3 : i3 === z(n3.t, r3) ? (E(n3), n3.o[r3] = N(n3.A.h, i3, n3)) : i3;
}, has: function(n3, r3) {
  return r3 in p(n3);
}, ownKeys: function(n3) {
  return Reflect.ownKeys(p(n3));
}, set: function(n3, r3, t3) {
  var e3 = I(p(n3), r3);
  if (null == e3 ? void 0 : e3.set)
    return e3.set.call(n3.k, t3), true;
  if (!n3.P) {
    var i3 = z(p(n3), r3), o5 = null == i3 ? void 0 : i3[Q];
    if (o5 && o5.t === t3)
      return n3.o[r3] = t3, n3.R[r3] = false, true;
    if (c(t3, i3) && (void 0 !== t3 || u(n3.t, r3)))
      return true;
    E(n3), k(n3);
  }
  return n3.o[r3] === t3 && (void 0 !== t3 || r3 in n3.o) || Number.isNaN(t3) && Number.isNaN(n3.o[r3]) || (n3.o[r3] = t3, n3.R[r3] = true), true;
}, deleteProperty: function(n3, r3) {
  return void 0 !== z(n3.t, r3) || r3 in n3.t ? (n3.R[r3] = false, E(n3), k(n3)) : delete n3.R[r3], n3.o && delete n3.o[r3], true;
}, getOwnPropertyDescriptor: function(n3, r3) {
  var t3 = p(n3), e3 = Reflect.getOwnPropertyDescriptor(t3, r3);
  return e3 ? { writable: true, configurable: 1 !== n3.i || "length" !== r3, enumerable: e3.enumerable, value: t3[r3] } : e3;
}, defineProperty: function() {
  n(11);
}, getPrototypeOf: function(n3) {
  return Object.getPrototypeOf(n3.t);
}, setPrototypeOf: function() {
  n(12);
} };
var on = {};
i(en, function(n3, r3) {
  on[n3] = function() {
    return arguments[0] = arguments[0][0], r3.apply(this, arguments);
  };
}), on.deleteProperty = function(r3, t3) {
  return isNaN(parseInt(t3)) && n(13), on.set.call(this, r3, t3, void 0);
}, on.set = function(r3, t3, e3) {
  return "length" !== t3 && isNaN(parseInt(t3)) && n(14), en.set.call(this, r3[0], t3, e3, r3[0]);
};
var un = function() {
  function e3(r3) {
    var e4 = this;
    this.O = B, this.D = true, this.produce = function(r4, i4, o5) {
      if ("function" == typeof r4 && "function" != typeof i4) {
        var u3 = i4;
        i4 = r4;
        var a3 = e4;
        return function(n3) {
          var r5 = this;
          void 0 === n3 && (n3 = u3);
          for (var t3 = arguments.length, e5 = Array(t3 > 1 ? t3 - 1 : 0), o6 = 1; o6 < t3; o6++)
            e5[o6 - 1] = arguments[o6];
          return a3.produce(n3, function(n4) {
            var t4;
            return (t4 = i4).call.apply(t4, [r5, n4].concat(e5));
          });
        };
      }
      var f3;
      if ("function" != typeof i4 && n(6), void 0 !== o5 && "function" != typeof o5 && n(7), t(r4)) {
        var c3 = w(e4), s3 = N(e4, r4, void 0), v3 = true;
        try {
          f3 = i4(s3), v3 = false;
        } finally {
          v3 ? g(c3) : O(c3);
        }
        return "undefined" != typeof Promise && f3 instanceof Promise ? f3.then(function(n3) {
          return j(c3, o5), P(n3, c3);
        }, function(n3) {
          throw g(c3), n3;
        }) : (j(c3, o5), P(f3, c3));
      }
      if (!r4 || "object" != typeof r4) {
        if (void 0 === (f3 = i4(r4)) && (f3 = r4), f3 === H && (f3 = void 0), e4.D && d(f3, true), o5) {
          var p3 = [], l3 = [];
          b("Patches").M(r4, f3, p3, l3), o5(p3, l3);
        }
        return f3;
      }
      n(21, r4);
    }, this.produceWithPatches = function(n3, r4) {
      if ("function" == typeof n3)
        return function(r5) {
          for (var t4 = arguments.length, i5 = Array(t4 > 1 ? t4 - 1 : 0), o6 = 1; o6 < t4; o6++)
            i5[o6 - 1] = arguments[o6];
          return e4.produceWithPatches(r5, function(r6) {
            return n3.apply(void 0, [r6].concat(i5));
          });
        };
      var t3, i4, o5 = e4.produce(n3, r4, function(n4, r5) {
        t3 = n4, i4 = r5;
      });
      return "undefined" != typeof Promise && o5 instanceof Promise ? o5.then(function(n4) {
        return [n4, t3, i4];
      }) : [o5, t3, i4];
    }, "boolean" == typeof (null == r3 ? void 0 : r3.useProxies) && this.setUseProxies(r3.useProxies), "boolean" == typeof (null == r3 ? void 0 : r3.autoFreeze) && this.setAutoFreeze(r3.autoFreeze);
  }
  var i3 = e3.prototype;
  return i3.createDraft = function(e4) {
    t(e4) || n(8), r(e4) && (e4 = R(e4));
    var i4 = w(this), o5 = N(this, e4, void 0);
    return o5[Q].C = true, O(i4), o5;
  }, i3.finishDraft = function(r3, t3) {
    var e4 = r3 && r3[Q];
    e4 && e4.C || n(9), e4.I && n(10);
    var i4 = e4.A;
    return j(i4, t3), P(void 0, i4);
  }, i3.setAutoFreeze = function(n3) {
    this.D = n3;
  }, i3.setUseProxies = function(r3) {
    r3 && !B && n(20), this.O = r3;
  }, i3.applyPatches = function(n3, t3) {
    var e4;
    for (e4 = t3.length - 1; e4 >= 0; e4--) {
      var i4 = t3[e4];
      if (0 === i4.path.length && "replace" === i4.op) {
        n3 = i4.value;
        break;
      }
    }
    e4 > -1 && (t3 = t3.slice(e4 + 1));
    var o5 = b("Patches").$;
    return r(n3) ? o5(n3, t3) : this.produce(n3, function(n4) {
      return o5(n4, t3);
    });
  }, e3;
}();
var an = new un();
var fn = an.produce;
var cn = an.produceWithPatches.bind(an);
var sn = an.setAutoFreeze.bind(an);
var vn = an.setUseProxies.bind(an);
var pn = an.applyPatches.bind(an);
var ln = an.createDraft.bind(an);
var dn = an.finishDraft.bind(an);
var immer_esm_default = fn;

// node_modules/redux/es/redux.js
var $$observable = function() {
  return typeof Symbol === "function" && Symbol.observable || "@@observable";
}();
var randomString = function randomString2() {
  return Math.random().toString(36).substring(7).split("").join(".");
};
var ActionTypes = {
  INIT: "@@redux/INIT" + randomString(),
  REPLACE: "@@redux/REPLACE" + randomString(),
  PROBE_UNKNOWN_ACTION: function PROBE_UNKNOWN_ACTION() {
    return "@@redux/PROBE_UNKNOWN_ACTION" + randomString();
  }
};
function compose() {
  for (var _len = arguments.length, funcs = new Array(_len), _key = 0; _key < _len; _key++) {
    funcs[_key] = arguments[_key];
  }
  if (funcs.length === 0) {
    return function(arg) {
      return arg;
    };
  }
  if (funcs.length === 1) {
    return funcs[0];
  }
  return funcs.reduce(function(a3, b2) {
    return function() {
      return a3(b2.apply(void 0, arguments));
    };
  });
}

// node_modules/reselect/es/defaultMemoize.js
var NOT_FOUND = "NOT_FOUND";
function createSingletonCache(equals) {
  var entry;
  return {
    get: function get2(key) {
      if (entry && equals(entry.key, key)) {
        return entry.value;
      }
      return NOT_FOUND;
    },
    put: function put(key, value) {
      entry = {
        key,
        value
      };
    },
    getEntries: function getEntries() {
      return entry ? [entry] : [];
    },
    clear: function clear2() {
      entry = void 0;
    }
  };
}
function createLruCache(maxSize, equals) {
  var entries = [];
  function get2(key) {
    var cacheIndex = entries.findIndex(function(entry2) {
      return equals(key, entry2.key);
    });
    if (cacheIndex > -1) {
      var entry = entries[cacheIndex];
      if (cacheIndex > 0) {
        entries.splice(cacheIndex, 1);
        entries.unshift(entry);
      }
      return entry.value;
    }
    return NOT_FOUND;
  }
  function put(key, value) {
    if (get2(key) === NOT_FOUND) {
      entries.unshift({
        key,
        value
      });
      if (entries.length > maxSize) {
        entries.pop();
      }
    }
  }
  function getEntries() {
    return entries;
  }
  function clear2() {
    entries = [];
  }
  return {
    get: get2,
    put,
    getEntries,
    clear: clear2
  };
}
var defaultEqualityCheck = function defaultEqualityCheck2(a3, b2) {
  return a3 === b2;
};
function createCacheKeyComparator(equalityCheck) {
  return function areArgumentsShallowlyEqual(prev, next) {
    if (prev === null || next === null || prev.length !== next.length) {
      return false;
    }
    var length = prev.length;
    for (var i3 = 0; i3 < length; i3++) {
      if (!equalityCheck(prev[i3], next[i3])) {
        return false;
      }
    }
    return true;
  };
}
function defaultMemoize(func14, equalityCheckOrOptions) {
  var providedOptions = typeof equalityCheckOrOptions === "object" ? equalityCheckOrOptions : {
    equalityCheck: equalityCheckOrOptions
  };
  var _providedOptions$equa = providedOptions.equalityCheck, equalityCheck = _providedOptions$equa === void 0 ? defaultEqualityCheck : _providedOptions$equa, _providedOptions$maxS = providedOptions.maxSize, maxSize = _providedOptions$maxS === void 0 ? 1 : _providedOptions$maxS, resultEqualityCheck = providedOptions.resultEqualityCheck;
  var comparator = createCacheKeyComparator(equalityCheck);
  var cache = maxSize === 1 ? createSingletonCache(comparator) : createLruCache(maxSize, comparator);
  function memoized() {
    var value = cache.get(arguments);
    if (value === NOT_FOUND) {
      value = func14.apply(null, arguments);
      if (resultEqualityCheck) {
        var entries = cache.getEntries();
        var matchingEntry = entries.find(function(entry) {
          return resultEqualityCheck(entry.value, value);
        });
        if (matchingEntry) {
          value = matchingEntry.value;
        }
      }
      cache.put(arguments, value);
    }
    return value;
  }
  memoized.clearCache = function() {
    return cache.clear();
  };
  return memoized;
}

// node_modules/reselect/es/index.js
function getDependencies(funcs) {
  var dependencies = Array.isArray(funcs[0]) ? funcs[0] : funcs;
  if (!dependencies.every(function(dep) {
    return typeof dep === "function";
  })) {
    var dependencyTypes = dependencies.map(function(dep) {
      return typeof dep === "function" ? "function " + (dep.name || "unnamed") + "()" : typeof dep;
    }).join(", ");
    throw new Error("createSelector expects all input-selectors to be functions, but received the following types: [" + dependencyTypes + "]");
  }
  return dependencies;
}
function createSelectorCreator(memoize) {
  for (var _len = arguments.length, memoizeOptionsFromArgs = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    memoizeOptionsFromArgs[_key - 1] = arguments[_key];
  }
  var createSelector2 = function createSelector3() {
    for (var _len2 = arguments.length, funcs = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      funcs[_key2] = arguments[_key2];
    }
    var _recomputations = 0;
    var _lastResult;
    var directlyPassedOptions = {
      memoizeOptions: void 0
    };
    var resultFunc = funcs.pop();
    if (typeof resultFunc === "object") {
      directlyPassedOptions = resultFunc;
      resultFunc = funcs.pop();
    }
    if (typeof resultFunc !== "function") {
      throw new Error("createSelector expects an output function after the inputs, but received: [" + typeof resultFunc + "]");
    }
    var _directlyPassedOption = directlyPassedOptions, _directlyPassedOption2 = _directlyPassedOption.memoizeOptions, memoizeOptions = _directlyPassedOption2 === void 0 ? memoizeOptionsFromArgs : _directlyPassedOption2;
    var finalMemoizeOptions = Array.isArray(memoizeOptions) ? memoizeOptions : [memoizeOptions];
    var dependencies = getDependencies(funcs);
    var memoizedResultFunc = memoize.apply(void 0, [function recomputationWrapper() {
      _recomputations++;
      return resultFunc.apply(null, arguments);
    }].concat(finalMemoizeOptions));
    var selector = memoize(function dependenciesChecker() {
      var params = [];
      var length = dependencies.length;
      for (var i3 = 0; i3 < length; i3++) {
        params.push(dependencies[i3].apply(null, arguments));
      }
      _lastResult = memoizedResultFunc.apply(null, params);
      return _lastResult;
    });
    Object.assign(selector, {
      resultFunc,
      memoizedResultFunc,
      dependencies,
      lastResult: function lastResult() {
        return _lastResult;
      },
      recomputations: function recomputations() {
        return _recomputations;
      },
      resetRecomputations: function resetRecomputations() {
        return _recomputations = 0;
      }
    });
    return selector;
  };
  return createSelector2;
}
var createSelector = createSelectorCreator(defaultMemoize);

// node_modules/redux-thunk/es/index.js
function createThunkMiddleware(extraArgument) {
  var middleware = function middleware2(_ref) {
    var dispatch = _ref.dispatch, getState = _ref.getState;
    return function(next) {
      return function(action) {
        if (typeof action === "function") {
          return action(dispatch, getState, extraArgument);
        }
        return next(action);
      };
    };
  };
  return middleware;
}
var thunk = createThunkMiddleware();
thunk.withExtraArgument = createThunkMiddleware;

// node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js
var __extends = function() {
  var extendStatics2 = function(d3, b2) {
    extendStatics2 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d4, b3) {
      d4.__proto__ = b3;
    } || function(d4, b3) {
      for (var p3 in b3)
        if (Object.prototype.hasOwnProperty.call(b3, p3))
          d4[p3] = b3[p3];
    };
    return extendStatics2(d3, b2);
  };
  return function(d3, b2) {
    if (typeof b2 !== "function" && b2 !== null)
      throw new TypeError("Class extends value " + String(b2) + " is not a constructor or null");
    extendStatics2(d3, b2);
    function __() {
      this.constructor = d3;
    }
    d3.prototype = b2 === null ? Object.create(b2) : (__.prototype = b2.prototype, new __());
  };
}();
var __generator = function(thisArg, body) {
  var _2 = { label: 0, sent: function() {
    if (t3[0] & 1)
      throw t3[1];
    return t3[1];
  }, trys: [], ops: [] }, f3, y2, t3, g2;
  return g2 = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g2[Symbol.iterator] = function() {
    return this;
  }), g2;
  function verb(n3) {
    return function(v3) {
      return step([n3, v3]);
    };
  }
  function step(op) {
    if (f3)
      throw new TypeError("Generator is already executing.");
    while (_2)
      try {
        if (f3 = 1, y2 && (t3 = op[0] & 2 ? y2["return"] : op[0] ? y2["throw"] || ((t3 = y2["return"]) && t3.call(y2), 0) : y2.next) && !(t3 = t3.call(y2, op[1])).done)
          return t3;
        if (y2 = 0, t3)
          op = [op[0] & 2, t3.value];
        switch (op[0]) {
          case 0:
          case 1:
            t3 = op;
            break;
          case 4:
            _2.label++;
            return { value: op[1], done: false };
          case 5:
            _2.label++;
            y2 = op[1];
            op = [0];
            continue;
          case 7:
            op = _2.ops.pop();
            _2.trys.pop();
            continue;
          default:
            if (!(t3 = _2.trys, t3 = t3.length > 0 && t3[t3.length - 1]) && (op[0] === 6 || op[0] === 2)) {
              _2 = 0;
              continue;
            }
            if (op[0] === 3 && (!t3 || op[1] > t3[0] && op[1] < t3[3])) {
              _2.label = op[1];
              break;
            }
            if (op[0] === 6 && _2.label < t3[1]) {
              _2.label = t3[1];
              t3 = op;
              break;
            }
            if (t3 && _2.label < t3[2]) {
              _2.label = t3[2];
              _2.ops.push(op);
              break;
            }
            if (t3[2])
              _2.ops.pop();
            _2.trys.pop();
            continue;
        }
        op = body.call(thisArg, _2);
      } catch (e3) {
        op = [6, e3];
        y2 = 0;
      } finally {
        f3 = t3 = 0;
      }
    if (op[0] & 5)
      throw op[1];
    return { value: op[0] ? op[1] : void 0, done: true };
  }
};
var __spreadArray = function(to, from2) {
  for (var i3 = 0, il = from2.length, j2 = to.length; i3 < il; i3++, j2++)
    to[j2] = from2[i3];
  return to;
};
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = function(obj, key, value) {
  return key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
};
var __spreadValues = function(a3, b2) {
  for (var prop in b2 || (b2 = {}))
    if (__hasOwnProp.call(b2, prop))
      __defNormalProp(a3, prop, b2[prop]);
  if (__getOwnPropSymbols)
    for (var _i = 0, _c = __getOwnPropSymbols(b2); _i < _c.length; _i++) {
      var prop = _c[_i];
      if (__propIsEnum.call(b2, prop))
        __defNormalProp(a3, prop, b2[prop]);
    }
  return a3;
};
var __spreadProps = function(a3, b2) {
  return __defProps(a3, __getOwnPropDescs(b2));
};
var __async = function(__this, __arguments, generator) {
  return new Promise(function(resolve, reject) {
    var fulfilled = function(value) {
      try {
        step(generator.next(value));
      } catch (e3) {
        reject(e3);
      }
    };
    var rejected = function(value) {
      try {
        step(generator.throw(value));
      } catch (e3) {
        reject(e3);
      }
    };
    var step = function(x2) {
      return x2.done ? resolve(x2.value) : Promise.resolve(x2.value).then(fulfilled, rejected);
    };
    step((generator = generator.apply(__this, __arguments)).next());
  });
};
var composeWithDevTools = typeof window !== "undefined" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : function() {
  if (arguments.length === 0)
    return void 0;
  if (typeof arguments[0] === "object")
    return compose;
  return compose.apply(null, arguments);
};
var devToolsEnhancer = typeof window !== "undefined" && window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__ : function() {
  return function(noop2) {
    return noop2;
  };
};
var MiddlewareArray = (
  /** @class */
  function(_super) {
    __extends(MiddlewareArray2, _super);
    function MiddlewareArray2() {
      var args = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
      }
      var _this = _super.apply(this, args) || this;
      Object.setPrototypeOf(_this, MiddlewareArray2.prototype);
      return _this;
    }
    Object.defineProperty(MiddlewareArray2, Symbol.species, {
      get: function() {
        return MiddlewareArray2;
      },
      enumerable: false,
      configurable: true
    });
    MiddlewareArray2.prototype.concat = function() {
      var arr = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        arr[_i] = arguments[_i];
      }
      return _super.prototype.concat.apply(this, arr);
    };
    MiddlewareArray2.prototype.prepend = function() {
      var arr = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        arr[_i] = arguments[_i];
      }
      if (arr.length === 1 && Array.isArray(arr[0])) {
        return new (MiddlewareArray2.bind.apply(MiddlewareArray2, __spreadArray([void 0], arr[0].concat(this))))();
      }
      return new (MiddlewareArray2.bind.apply(MiddlewareArray2, __spreadArray([void 0], arr.concat(this))))();
    };
    return MiddlewareArray2;
  }(Array)
);
var EnhancerArray = (
  /** @class */
  function(_super) {
    __extends(EnhancerArray2, _super);
    function EnhancerArray2() {
      var args = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
      }
      var _this = _super.apply(this, args) || this;
      Object.setPrototypeOf(_this, EnhancerArray2.prototype);
      return _this;
    }
    Object.defineProperty(EnhancerArray2, Symbol.species, {
      get: function() {
        return EnhancerArray2;
      },
      enumerable: false,
      configurable: true
    });
    EnhancerArray2.prototype.concat = function() {
      var arr = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        arr[_i] = arguments[_i];
      }
      return _super.prototype.concat.apply(this, arr);
    };
    EnhancerArray2.prototype.prepend = function() {
      var arr = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        arr[_i] = arguments[_i];
      }
      if (arr.length === 1 && Array.isArray(arr[0])) {
        return new (EnhancerArray2.bind.apply(EnhancerArray2, __spreadArray([void 0], arr[0].concat(this))))();
      }
      return new (EnhancerArray2.bind.apply(EnhancerArray2, __spreadArray([void 0], arr.concat(this))))();
    };
    return EnhancerArray2;
  }(Array)
);
function freezeDraftable(val) {
  return t(val) ? immer_esm_default(val, function() {
  }) : val;
}
function createAction(type, prepareAction) {
  function actionCreator() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      args[_i] = arguments[_i];
    }
    if (prepareAction) {
      var prepared = prepareAction.apply(void 0, args);
      if (!prepared) {
        throw new Error("prepareAction did not return an object");
      }
      return __spreadValues(__spreadValues({
        type,
        payload: prepared.payload
      }, "meta" in prepared && { meta: prepared.meta }), "error" in prepared && { error: prepared.error });
    }
    return { type, payload: args[0] };
  }
  actionCreator.toString = function() {
    return "" + type;
  };
  actionCreator.type = type;
  actionCreator.match = function(action) {
    return action.type === type;
  };
  return actionCreator;
}
function executeReducerBuilderCallback(builderCallback) {
  var actionsMap = {};
  var actionMatchers = [];
  var defaultCaseReducer;
  var builder = {
    addCase: function(typeOrActionCreator, reducer2) {
      if (true) {
        if (actionMatchers.length > 0) {
          throw new Error("`builder.addCase` should only be called before calling `builder.addMatcher`");
        }
        if (defaultCaseReducer) {
          throw new Error("`builder.addCase` should only be called before calling `builder.addDefaultCase`");
        }
      }
      var type = typeof typeOrActionCreator === "string" ? typeOrActionCreator : typeOrActionCreator.type;
      if (type in actionsMap) {
        throw new Error("addCase cannot be called with two reducers for the same action type");
      }
      actionsMap[type] = reducer2;
      return builder;
    },
    addMatcher: function(matcher, reducer2) {
      if (true) {
        if (defaultCaseReducer) {
          throw new Error("`builder.addMatcher` should only be called before calling `builder.addDefaultCase`");
        }
      }
      actionMatchers.push({ matcher, reducer: reducer2 });
      return builder;
    },
    addDefaultCase: function(reducer2) {
      if (true) {
        if (defaultCaseReducer) {
          throw new Error("`builder.addDefaultCase` can only be called once");
        }
      }
      defaultCaseReducer = reducer2;
      return builder;
    }
  };
  builderCallback(builder);
  return [actionsMap, actionMatchers, defaultCaseReducer];
}
function isStateFunction(x2) {
  return typeof x2 === "function";
}
var hasWarnedAboutObjectNotation = false;
function createReducer(initialState, mapOrBuilderCallback, actionMatchers, defaultCaseReducer) {
  if (actionMatchers === void 0) {
    actionMatchers = [];
  }
  if (true) {
    if (typeof mapOrBuilderCallback === "object") {
      if (!hasWarnedAboutObjectNotation) {
        hasWarnedAboutObjectNotation = true;
        console.warn("The object notation for `createReducer` is deprecated, and will be removed in RTK 2.0. Please use the 'builder callback' notation instead: https://redux-toolkit.js.org/api/createReducer");
      }
    }
  }
  var _c = typeof mapOrBuilderCallback === "function" ? executeReducerBuilderCallback(mapOrBuilderCallback) : [mapOrBuilderCallback, actionMatchers, defaultCaseReducer], actionsMap = _c[0], finalActionMatchers = _c[1], finalDefaultCaseReducer = _c[2];
  var getInitialState;
  if (isStateFunction(initialState)) {
    getInitialState = function() {
      return freezeDraftable(initialState());
    };
  } else {
    var frozenInitialState_1 = freezeDraftable(initialState);
    getInitialState = function() {
      return frozenInitialState_1;
    };
  }
  function reducer2(state, action) {
    if (state === void 0) {
      state = getInitialState();
    }
    var caseReducers = __spreadArray([
      actionsMap[action.type]
    ], finalActionMatchers.filter(function(_c2) {
      var matcher = _c2.matcher;
      return matcher(action);
    }).map(function(_c2) {
      var reducer22 = _c2.reducer;
      return reducer22;
    }));
    if (caseReducers.filter(function(cr) {
      return !!cr;
    }).length === 0) {
      caseReducers = [finalDefaultCaseReducer];
    }
    return caseReducers.reduce(function(previousState, caseReducer) {
      if (caseReducer) {
        if (r(previousState)) {
          var draft = previousState;
          var result = caseReducer(draft, action);
          if (result === void 0) {
            return previousState;
          }
          return result;
        } else if (!t(previousState)) {
          var result = caseReducer(previousState, action);
          if (result === void 0) {
            if (previousState === null) {
              return previousState;
            }
            throw Error("A case reducer on a non-draftable value must not return undefined");
          }
          return result;
        } else {
          return immer_esm_default(previousState, function(draft2) {
            return caseReducer(draft2, action);
          });
        }
      }
      return previousState;
    }, state);
  }
  reducer2.getInitialState = getInitialState;
  return reducer2;
}
var urlAlphabet = "ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW";
var nanoid = function(size2) {
  if (size2 === void 0) {
    size2 = 21;
  }
  var id = "";
  var i3 = size2;
  while (i3--) {
    id += urlAlphabet[Math.random() * 64 | 0];
  }
  return id;
};
var commonProperties = [
  "name",
  "message",
  "stack",
  "code"
];
var RejectWithValue = (
  /** @class */
  function() {
    function RejectWithValue2(payload, meta) {
      this.payload = payload;
      this.meta = meta;
    }
    return RejectWithValue2;
  }()
);
var FulfillWithMeta = (
  /** @class */
  function() {
    function FulfillWithMeta2(payload, meta) {
      this.payload = payload;
      this.meta = meta;
    }
    return FulfillWithMeta2;
  }()
);
var miniSerializeError = function(value) {
  if (typeof value === "object" && value !== null) {
    var simpleError = {};
    for (var _i = 0, commonProperties_1 = commonProperties; _i < commonProperties_1.length; _i++) {
      var property = commonProperties_1[_i];
      if (typeof value[property] === "string") {
        simpleError[property] = value[property];
      }
    }
    return simpleError;
  }
  return { message: String(value) };
};
var createAsyncThunk = function() {
  function createAsyncThunk2(typePrefix, payloadCreator, options) {
    var fulfilled = createAction(typePrefix + "/fulfilled", function(payload, requestId, arg, meta) {
      return {
        payload,
        meta: __spreadProps(__spreadValues({}, meta || {}), {
          arg,
          requestId,
          requestStatus: "fulfilled"
        })
      };
    });
    var pending = createAction(typePrefix + "/pending", function(requestId, arg, meta) {
      return {
        payload: void 0,
        meta: __spreadProps(__spreadValues({}, meta || {}), {
          arg,
          requestId,
          requestStatus: "pending"
        })
      };
    });
    var rejected = createAction(typePrefix + "/rejected", function(error2, requestId, arg, payload, meta) {
      return {
        payload,
        error: (options && options.serializeError || miniSerializeError)(error2 || "Rejected"),
        meta: __spreadProps(__spreadValues({}, meta || {}), {
          arg,
          requestId,
          rejectedWithValue: !!payload,
          requestStatus: "rejected",
          aborted: (error2 == null ? void 0 : error2.name) === "AbortError",
          condition: (error2 == null ? void 0 : error2.name) === "ConditionError"
        })
      };
    });
    var displayedWarning = false;
    var AC = typeof AbortController !== "undefined" ? AbortController : (
      /** @class */
      function() {
        function class_1() {
          this.signal = {
            aborted: false,
            addEventListener: function() {
            },
            dispatchEvent: function() {
              return false;
            },
            onabort: function() {
            },
            removeEventListener: function() {
            },
            reason: void 0,
            throwIfAborted: function() {
            }
          };
        }
        class_1.prototype.abort = function() {
          if (true) {
            if (!displayedWarning) {
              displayedWarning = true;
              console.info("This platform does not implement AbortController. \nIf you want to use the AbortController to react to `abort` events, please consider importing a polyfill like 'abortcontroller-polyfill/dist/abortcontroller-polyfill-only'.");
            }
          }
        };
        return class_1;
      }()
    );
    function actionCreator(arg) {
      return function(dispatch, getState, extra) {
        var requestId = (options == null ? void 0 : options.idGenerator) ? options.idGenerator(arg) : nanoid();
        var abortController = new AC();
        var abortReason;
        var started = false;
        function abort(reason) {
          abortReason = reason;
          abortController.abort();
        }
        var promise2 = function() {
          return __async(this, null, function() {
            var _a, _b, finalAction, conditionResult, abortedPromise, err_1, skipDispatch;
            return __generator(this, function(_c) {
              switch (_c.label) {
                case 0:
                  _c.trys.push([0, 4, , 5]);
                  conditionResult = (_a = options == null ? void 0 : options.condition) == null ? void 0 : _a.call(options, arg, { getState, extra });
                  if (!isThenable(conditionResult))
                    return [3, 2];
                  return [4, conditionResult];
                case 1:
                  conditionResult = _c.sent();
                  _c.label = 2;
                case 2:
                  if (conditionResult === false || abortController.signal.aborted) {
                    throw {
                      name: "ConditionError",
                      message: "Aborted due to condition callback returning false."
                    };
                  }
                  started = true;
                  abortedPromise = new Promise(function(_2, reject) {
                    return abortController.signal.addEventListener("abort", function() {
                      return reject({
                        name: "AbortError",
                        message: abortReason || "Aborted"
                      });
                    });
                  });
                  dispatch(pending(requestId, arg, (_b = options == null ? void 0 : options.getPendingMeta) == null ? void 0 : _b.call(options, { requestId, arg }, { getState, extra })));
                  return [4, Promise.race([
                    abortedPromise,
                    Promise.resolve(payloadCreator(arg, {
                      dispatch,
                      getState,
                      extra,
                      requestId,
                      signal: abortController.signal,
                      abort,
                      rejectWithValue: function(value, meta) {
                        return new RejectWithValue(value, meta);
                      },
                      fulfillWithValue: function(value, meta) {
                        return new FulfillWithMeta(value, meta);
                      }
                    })).then(function(result) {
                      if (result instanceof RejectWithValue) {
                        throw result;
                      }
                      if (result instanceof FulfillWithMeta) {
                        return fulfilled(result.payload, requestId, arg, result.meta);
                      }
                      return fulfilled(result, requestId, arg);
                    })
                  ])];
                case 3:
                  finalAction = _c.sent();
                  return [3, 5];
                case 4:
                  err_1 = _c.sent();
                  finalAction = err_1 instanceof RejectWithValue ? rejected(null, requestId, arg, err_1.payload, err_1.meta) : rejected(err_1, requestId, arg);
                  return [3, 5];
                case 5:
                  skipDispatch = options && !options.dispatchConditionRejection && rejected.match(finalAction) && finalAction.meta.condition;
                  if (!skipDispatch) {
                    dispatch(finalAction);
                  }
                  return [2, finalAction];
              }
            });
          });
        }();
        return Object.assign(promise2, {
          abort,
          requestId,
          arg,
          unwrap: function() {
            return promise2.then(unwrapResult);
          }
        });
      };
    }
    return Object.assign(actionCreator, {
      pending,
      rejected,
      fulfilled,
      typePrefix
    });
  }
  createAsyncThunk2.withTypes = function() {
    return createAsyncThunk2;
  };
  return createAsyncThunk2;
}();
function unwrapResult(action) {
  if (action.meta && action.meta.rejectedWithValue) {
    throw action.payload;
  }
  if (action.error) {
    throw action.error;
  }
  return action.payload;
}
function isThenable(value) {
  return value !== null && typeof value === "object" && typeof value.then === "function";
}
var task = "task";
var listener = "listener";
var completed = "completed";
var cancelled = "cancelled";
var taskCancelled = "task-" + cancelled;
var taskCompleted = "task-" + completed;
var listenerCancelled = listener + "-" + cancelled;
var listenerCompleted = listener + "-" + completed;
var TaskAbortError = (
  /** @class */
  function() {
    function TaskAbortError2(code) {
      this.code = code;
      this.name = "TaskAbortError";
      this.message = task + " " + cancelled + " (reason: " + code + ")";
    }
    return TaskAbortError2;
  }()
);
var alm = "listenerMiddleware";
var addListener = createAction(alm + "/add");
var clearAllListeners = createAction(alm + "/removeAll");
var removeListener = createAction(alm + "/remove");
var promise;
var queueMicrotaskShim = typeof queueMicrotask === "function" ? queueMicrotask.bind(typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : globalThis) : function(cb) {
  return (promise || (promise = Promise.resolve())).then(cb).catch(function(err) {
    return setTimeout(function() {
      throw err;
    }, 0);
  });
};
var createQueueWithTimer = function(timeout) {
  return function(notify) {
    setTimeout(notify, timeout);
  };
};
var rAF = typeof window !== "undefined" && window.requestAnimationFrame ? window.requestAnimationFrame : createQueueWithTimer(10);
F();

// node_modules/hot-formula-parser/parser.mjs
var import_tiny_emitter = __toESM(require_tiny_emitter(), 1);

// node_modules/hot-formula-parser/helper/number.mjs
function toNumber(number) {
  var result;
  if (typeof number === "number") {
    result = number;
  } else if (typeof number === "string") {
    result = number.indexOf(".") > -1 ? parseFloat(number) : parseInt(number, 10);
  }
  return result;
}
function invertNumber(number) {
  return -1 * toNumber(number);
}

// node_modules/hot-formula-parser/error.mjs
var _errors;
function _defineProperty2(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
var ERROR = "ERROR";
var ERROR_DIV_ZERO = "DIV/0";
var ERROR_NAME = "NAME";
var ERROR_NOT_AVAILABLE = "N/A";
var ERROR_NULL = "NULL";
var ERROR_NUM = "NUM";
var ERROR_REF = "REF";
var ERROR_VALUE = "VALUE";
var errors = (_errors = {}, _defineProperty2(_errors, ERROR, "#ERROR!"), _defineProperty2(_errors, ERROR_DIV_ZERO, "#DIV/0!"), _defineProperty2(_errors, ERROR_NAME, "#NAME?"), _defineProperty2(_errors, ERROR_NOT_AVAILABLE, "#N/A"), _defineProperty2(_errors, ERROR_NULL, "#NULL!"), _defineProperty2(_errors, ERROR_NUM, "#NUM!"), _defineProperty2(_errors, ERROR_REF, "#REF!"), _defineProperty2(_errors, ERROR_VALUE, "#VALUE!"), _errors);
function error(type) {
  var result;
  type = (type + "").replace(/#|!|\?/g, "");
  if (errors[type]) {
    result = errors[type];
  }
  return result ? result : null;
}
function isValidStrict(type) {
  var valid = false;
  for (var i3 in errors) {
    if (Object.prototype.hasOwnProperty.call(errors, i3) && errors[i3] === type) {
      valid = true;
      break;
    }
  }
  return valid;
}

// node_modules/hot-formula-parser/evaluate-by-operator/operator/add.mjs
var SYMBOL = "+";
function func(first) {
  for (var _len = arguments.length, rest = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    rest[_key - 1] = arguments[_key];
  }
  var result = rest.reduce(function(acc, value) {
    return acc + toNumber(value);
  }, toNumber(first));
  if (isNaN(result)) {
    throw Error(ERROR_VALUE);
  }
  return result;
}
func.SYMBOL = SYMBOL;

// node_modules/hot-formula-parser/evaluate-by-operator/operator/ampersand.mjs
var SYMBOL2 = "&";
function func2() {
  for (var _len = arguments.length, params = new Array(_len), _key = 0; _key < _len; _key++) {
    params[_key] = arguments[_key];
  }
  return params.reduce(function(acc, value) {
    return acc + value.toString();
  }, "");
}
func2.SYMBOL = SYMBOL2;

// node_modules/hot-formula-parser/evaluate-by-operator/operator/divide.mjs
var SYMBOL3 = "/";
function func3(first) {
  for (var _len = arguments.length, rest = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    rest[_key - 1] = arguments[_key];
  }
  var result = rest.reduce(function(acc, value) {
    return acc / toNumber(value);
  }, toNumber(first));
  if (result === Infinity) {
    throw Error(ERROR_DIV_ZERO);
  }
  if (isNaN(result)) {
    throw Error(ERROR_VALUE);
  }
  return result;
}
func3.SYMBOL = SYMBOL3;

// node_modules/hot-formula-parser/evaluate-by-operator/operator/equal.mjs
var SYMBOL4 = "=";
function func4(exp1, exp2) {
  return exp1 === exp2;
}
func4.SYMBOL = SYMBOL4;

// node_modules/hot-formula-parser/evaluate-by-operator/operator/formula-function.mjs
var import_formulajs = __toESM(require_formulajs(), 1);

// node_modules/hot-formula-parser/supported-formulas.mjs
var SUPPORTED_FORMULAS = ["ABS", "ACCRINT", "ACOS", "ACOSH", "ACOT", "ACOTH", "ADD", "AGGREGATE", "AND", "ARABIC", "ARGS2ARRAY", "ASIN", "ASINH", "ATAN", "ATAN2", "ATANH", "AVEDEV", "AVERAGE", "AVERAGEA", "AVERAGEIF", "AVERAGEIFS", "BASE", "BESSELI", "BESSELJ", "BESSELK", "BESSELY", "BETA.DIST", "BETA.INV", "BETADIST", "BETAINV", "BIN2DEC", "BIN2HEX", "BIN2OCT", "BINOM.DIST", "BINOM.DIST.RANGE", "BINOM.INV", "BINOMDIST", "BITAND", "BITLSHIFT", "BITOR", "BITRSHIFT", "BITXOR", "CEILING", "CEILINGMATH", "CEILINGPRECISE", "CHAR", "CHISQ.DIST", "CHISQ.DIST.RT", "CHISQ.INV", "CHISQ.INV.RT", "CHOOSE", "CHOOSE", "CLEAN", "CODE", "COLUMN", "COLUMNS", "COMBIN", "COMBINA", "COMPLEX", "CONCATENATE", "CONFIDENCE", "CONFIDENCE.NORM", "CONFIDENCE.T", "CONVERT", "CORREL", "COS", "COSH", "COT", "COTH", "COUNT", "COUNTA", "COUNTBLANK", "COUNTIF", "COUNTIFS", "COUNTIN", "COUNTUNIQUE", "COVARIANCE.P", "COVARIANCE.S", "CSC", "CSCH", "CUMIPMT", "CUMPRINC", "DATE", "DATEVALUE", "DAY", "DAYS", "DAYS360", "DB", "DDB", "DEC2BIN", "DEC2HEX", "DEC2OCT", "DECIMAL", "DEGREES", "DELTA", "DEVSQ", "DIVIDE", "DOLLARDE", "DOLLARFR", "E", "EDATE", "EFFECT", "EOMONTH", "EQ", "ERF", "ERFC", "EVEN", "EXACT", "EXP", "EXPON.DIST", "EXPONDIST", "F.DIST", "F.DIST.RT", "F.INV", "F.INV.RT", "FACT", "FACTDOUBLE", "FALSE", "FDIST", "FDISTRT", "FIND", "FINV", "FINVRT", "FISHER", "FISHERINV", "FLATTEN", "FLOOR", "FORECAST", "FREQUENCY", "FV", "FVSCHEDULE", "GAMMA", "GAMMA.DIST", "GAMMA.INV", "GAMMADIST", "GAMMAINV", "GAMMALN", "GAMMALN.PRECISE", "GAUSS", "GCD", "GEOMEAN", "GESTEP", "GROWTH", "GTE", "HARMEAN", "HEX2BIN", "HEX2DEC", "HEX2OCT", "HOUR", "HTML2TEXT", "HYPGEOM.DIST", "HYPGEOMDIST", "IF", "IMABS", "IMAGINARY", "IMARGUMENT", "IMCONJUGATE", "IMCOS", "IMCOSH", "IMCOT", "IMCSC", "IMCSCH", "IMDIV", "IMEXP", "IMLN", "IMLOG10", "IMLOG2", "IMPOWER", "IMPRODUCT", "IMREAL", "IMSEC", "IMSECH", "IMSIN", "IMSINH", "IMSQRT", "IMSUB", "IMSUM", "IMTAN", "INT", "INTERCEPT", "INTERVAL", "IPMT", "IRR", "ISBINARY", "ISBLANK", "ISEVEN", "ISLOGICAL", "ISNONTEXT", "ISNUMBER", "ISODD", "ISODD", "ISOWEEKNUM", "ISPMT", "ISTEXT", "JOIN", "KURT", "LARGE", "LCM", "LEFT", "LEN", "LINEST", "LN", "LOG", "LOG10", "LOGEST", "LOGNORM.DIST", "LOGNORM.INV", "LOGNORMDIST", "LOGNORMINV", "LOWER", "LT", "LTE", "MATCH", "MAX", "MAXA", "MEDIAN", "MID", "MIN", "MINA", "MINUS", "MINUTE", "MIRR", "MOD", "MODE.MULT", "MODE.SNGL", "MODEMULT", "MODESNGL", "MONTH", "MROUND", "MULTINOMIAL", "MULTIPLY", "NE", "NEGBINOM.DIST", "NEGBINOMDIST", "NETWORKDAYS", "NOMINAL", "NORM.DIST", "NORM.INV", "NORM.S.DIST", "NORM.S.INV", "NORMDIST", "NORMINV", "NORMSDIST", "NORMSINV", "NOT", "NOW", "NPER", "NPV", "NUMBERS", "OCT2BIN", "OCT2DEC", "OCT2HEX", "ODD", "OR", "PDURATION", "PEARSON", "PERCENTILEEXC", "PERCENTILEINC", "PERCENTRANKEXC", "PERCENTRANKINC", "PERMUT", "PERMUTATIONA", "PHI", "PI", "PMT", "POISSON.DIST", "POISSONDIST", "POW", "POWER", "PPMT", "PROB", "PRODUCT", "PROPER", "PV", "QUARTILE.EXC", "QUARTILE.INC", "QUARTILEEXC", "QUARTILEINC", "QUOTIENT", "RADIANS", "RAND", "RANDBETWEEN", "RANK.AVG", "RANK.EQ", "RANKAVG", "RANKEQ", "RATE", "REFERENCE", "REGEXEXTRACT", "REGEXMATCH", "REGEXREPLACE", "REPLACE", "REPT", "RIGHT", "ROMAN", "ROUND", "ROUNDDOWN", "ROUNDUP", "ROW", "ROWS", "RRI", "RSQ", "SEARCH", "SEC", "SECH", "SECOND", "SERIESSUM", "SIGN", "SIN", "SINH", "SKEW", "SKEW.P", "SKEWP", "SLN", "SLOPE", "SMALL", "SPLIT", "SPLIT", "SQRT", "SQRTPI", "STANDARDIZE", "STDEV.P", "STDEV.S", "STDEVA", "STDEVP", "STDEVPA", "STDEVS", "STEYX", "SUBSTITUTE", "SUBTOTAL", "SUM", "SUMIF", "SUMIFS", "SUMPRODUCT", "SUMSQ", "SUMX2MY2", "SUMX2PY2", "SUMXMY2", "SWITCH", "SYD", "T", "T.DIST", "T.DIST.2T", "T.DIST.RT", "T.INV", "T.INV.2T", "TAN", "TANH", "TBILLEQ", "TBILLPRICE", "TBILLYIELD", "TDIST", "TDIST2T", "TDISTRT", "TIME", "TIMEVALUE", "TINV", "TINV2T", "TODAY", "TRANSPOSE", "TREND", "TRIM", "TRIMMEAN", "TRUE", "TRUNC", "UNICHAR", "UNICODE", "UNIQUE", "UPPER", "VAR.P", "VAR.S", "VARA", "VARP", "VARPA", "VARS", "WEEKDAY", "WEEKNUM", "WEIBULL.DIST", "WEIBULLDIST", "WORKDAY", "XIRR", "XNPV", "XOR", "YEAR", "YEARFRAC"];
var supported_formulas_default = SUPPORTED_FORMULAS;

// node_modules/hot-formula-parser/evaluate-by-operator/operator/formula-function.mjs
var SYMBOL5 = supported_formulas_default;
function func5(symbol) {
  return function __formulaFunction() {
    symbol = symbol.toUpperCase();
    var symbolParts = symbol.split(".");
    var foundFormula = false;
    var result;
    if (symbolParts.length === 1) {
      if (import_formulajs.default[symbolParts[0]]) {
        foundFormula = true;
        result = import_formulajs.default[symbolParts[0]].apply(import_formulajs.default, arguments);
      }
    } else {
      var length = symbolParts.length;
      var index = 0;
      var nestedFormula = import_formulajs.default;
      while (index < length) {
        nestedFormula = nestedFormula[symbolParts[index]];
        index++;
        if (!nestedFormula) {
          nestedFormula = null;
          break;
        }
      }
      if (nestedFormula) {
        foundFormula = true;
        result = nestedFormula.apply(void 0, arguments);
      }
    }
    if (!foundFormula) {
      throw Error(ERROR_NAME);
    }
    return result;
  };
}
func5.isFactory = true;
func5.SYMBOL = SYMBOL5;

// node_modules/hot-formula-parser/evaluate-by-operator/operator/greater-than.mjs
var SYMBOL6 = ">";
function func6(exp1, exp2) {
  return exp1 > exp2;
}
func6.SYMBOL = SYMBOL6;

// node_modules/hot-formula-parser/evaluate-by-operator/operator/greater-than-or-equal.mjs
var SYMBOL7 = ">=";
function func7(exp1, exp2) {
  return exp1 >= exp2;
}
func7.SYMBOL = SYMBOL7;

// node_modules/hot-formula-parser/evaluate-by-operator/operator/less-than.mjs
var SYMBOL8 = "<";
function func8(exp1, exp2) {
  return exp1 < exp2;
}
func8.SYMBOL = SYMBOL8;

// node_modules/hot-formula-parser/evaluate-by-operator/operator/less-than-or-equal.mjs
var SYMBOL9 = "<=";
function func9(exp1, exp2) {
  return exp1 <= exp2;
}
func9.SYMBOL = SYMBOL9;

// node_modules/hot-formula-parser/evaluate-by-operator/operator/minus.mjs
var SYMBOL10 = "-";
function func10(first) {
  for (var _len = arguments.length, rest = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    rest[_key - 1] = arguments[_key];
  }
  var result = rest.reduce(function(acc, value) {
    return acc - toNumber(value);
  }, toNumber(first));
  if (isNaN(result)) {
    throw Error(ERROR_VALUE);
  }
  return result;
}
func10.SYMBOL = SYMBOL10;

// node_modules/hot-formula-parser/evaluate-by-operator/operator/multiply.mjs
var SYMBOL11 = "*";
function func11(first) {
  for (var _len = arguments.length, rest = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    rest[_key - 1] = arguments[_key];
  }
  var result = rest.reduce(function(acc, value) {
    return acc * toNumber(value);
  }, toNumber(first));
  if (isNaN(result)) {
    throw Error(ERROR_VALUE);
  }
  return result;
}
func11.SYMBOL = SYMBOL11;

// node_modules/hot-formula-parser/evaluate-by-operator/operator/not-equal.mjs
var SYMBOL12 = "<>";
function func12(exp1, exp2) {
  return exp1 !== exp2;
}
func12.SYMBOL = SYMBOL12;

// node_modules/hot-formula-parser/evaluate-by-operator/operator/power.mjs
var SYMBOL13 = "^";
function func13(exp1, exp2) {
  var result = Math.pow(toNumber(exp1), toNumber(exp2));
  if (isNaN(result)) {
    throw Error(ERROR_VALUE);
  }
  return result;
}
func13.SYMBOL = SYMBOL13;

// node_modules/hot-formula-parser/evaluate-by-operator/evaluate-by-operator.mjs
function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray(o5, minLen) {
  if (!o5)
    return;
  if (typeof o5 === "string")
    return _arrayLikeToArray(o5, minLen);
  var n3 = Object.prototype.toString.call(o5).slice(8, -1);
  if (n3 === "Object" && o5.constructor)
    n3 = o5.constructor.name;
  if (n3 === "Map" || n3 === "Set")
    return Array.from(o5);
  if (n3 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n3))
    return _arrayLikeToArray(o5, minLen);
}
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter))
    return Array.from(iter);
}
function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr))
    return _arrayLikeToArray(arr);
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i3 = 0, arr2 = new Array(len); i3 < len; i3++) {
    arr2[i3] = arr[i3];
  }
  return arr2;
}
var availableOperators = /* @__PURE__ */ Object.create(null);
function evaluateByOperator(operator) {
  var params = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
  operator = operator.toUpperCase();
  if (!availableOperators[operator]) {
    throw Error(ERROR_NAME);
  }
  return availableOperators[operator].apply(availableOperators, _toConsumableArray(params));
}
function registerOperation(symbol, func14) {
  if (!Array.isArray(symbol)) {
    symbol = [symbol.toUpperCase()];
  }
  symbol.forEach(function(s3) {
    if (func14.isFactory) {
      availableOperators[s3] = func14(s3);
    } else {
      availableOperators[s3] = func14;
    }
  });
}
registerOperation(func.SYMBOL, func);
registerOperation(func2.SYMBOL, func2);
registerOperation(func3.SYMBOL, func3);
registerOperation(func4.SYMBOL, func4);
registerOperation(func13.SYMBOL, func13);
registerOperation(func5.SYMBOL, func5);
registerOperation(func6.SYMBOL, func6);
registerOperation(func7.SYMBOL, func7);
registerOperation(func8.SYMBOL, func8);
registerOperation(func9.SYMBOL, func9);
registerOperation(func11.SYMBOL, func11);
registerOperation(func12.SYMBOL, func12);
registerOperation(func10.SYMBOL, func10);

// node_modules/hot-formula-parser/grammar-parser/grammar-parser.mjs
var o2 = function o3(k2, v3, _o, l3) {
  for (_o = _o || {}, l3 = k2.length; l3--; _o[k2[l3]] = v3) {
    ;
  }
  return _o;
};
var $V0 = [1, 5];
var $V1 = [1, 8];
var $V2 = [1, 6];
var $V3 = [1, 7];
var $V4 = [1, 9];
var $V5 = [1, 14];
var $V6 = [1, 15];
var $V7 = [1, 16];
var $V8 = [1, 12];
var $V9 = [1, 13];
var $Va = [1, 17];
var $Vb = [1, 19];
var $Vc = [1, 20];
var $Vd = [1, 21];
var $Ve = [1, 22];
var $Vf = [1, 23];
var $Vg = [1, 24];
var $Vh = [1, 25];
var $Vi = [1, 26];
var $Vj = [1, 27];
var $Vk = [1, 28];
var $Vl = [5, 9, 10, 11, 13, 14, 15, 16, 17, 18, 19, 20, 29, 30];
var $Vm = [5, 9, 10, 11, 13, 14, 15, 16, 17, 18, 19, 20, 29, 30, 32];
var $Vn = [5, 9, 10, 11, 13, 14, 15, 16, 17, 18, 19, 20, 29, 30, 34];
var $Vo = [5, 10, 11, 13, 14, 15, 16, 17, 29, 30];
var $Vp = [5, 10, 13, 14, 15, 16, 29, 30];
var $Vq = [5, 10, 11, 13, 14, 15, 16, 17, 18, 19, 29, 30];
var $Vr = [13, 29, 30];
var parser = {
  trace: function trace() {
  },
  yy: {},
  symbols_: {
    "error": 2,
    "expressions": 3,
    "expression": 4,
    "EOF": 5,
    "variableSequence": 6,
    "number": 7,
    "STRING": 8,
    "&": 9,
    "=": 10,
    "+": 11,
    "(": 12,
    ")": 13,
    "<": 14,
    ">": 15,
    "NOT": 16,
    "-": 17,
    "*": 18,
    "/": 19,
    "^": 20,
    "FUNCTION": 21,
    "expseq": 22,
    "cell": 23,
    "ABSOLUTE_CELL": 24,
    "RELATIVE_CELL": 25,
    "MIXED_CELL": 26,
    ":": 27,
    "ARRAY": 28,
    ";": 29,
    ",": 30,
    "VARIABLE": 31,
    "DECIMAL": 32,
    "NUMBER": 33,
    "%": 34,
    "ERROR": 35,
    "$accept": 0,
    "$end": 1
  },
  terminals_: {
    5: "EOF",
    8: "STRING",
    9: "&",
    10: "=",
    11: "+",
    12: "(",
    13: ")",
    14: "<",
    15: ">",
    16: "NOT",
    17: "-",
    18: "*",
    19: "/",
    20: "^",
    21: "FUNCTION",
    24: "ABSOLUTE_CELL",
    25: "RELATIVE_CELL",
    26: "MIXED_CELL",
    27: ":",
    28: "ARRAY",
    29: ";",
    30: ",",
    31: "VARIABLE",
    32: "DECIMAL",
    33: "NUMBER",
    34: "%",
    35: "ERROR"
  },
  productions_: [0, [3, 2], [4, 1], [4, 1], [4, 1], [4, 3], [4, 3], [4, 3], [4, 3], [4, 4], [4, 4], [4, 4], [4, 3], [4, 3], [4, 3], [4, 3], [4, 3], [4, 3], [4, 3], [4, 2], [4, 2], [4, 3], [4, 4], [4, 1], [4, 1], [4, 2], [23, 1], [23, 1], [23, 1], [23, 3], [23, 3], [23, 3], [23, 3], [23, 3], [23, 3], [23, 3], [23, 3], [23, 3], [22, 1], [22, 1], [22, 3], [22, 3], [6, 1], [6, 3], [7, 1], [7, 3], [7, 2], [2, 1]],
  performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate, $$, _$) {
    var $0 = $$.length - 1;
    switch (yystate) {
      case 1:
        return $$[$0 - 1];
        break;
      case 2:
        this.$ = yy.callVariable($$[$0][0]);
        break;
      case 3:
        this.$ = yy.toNumber($$[$0]);
        break;
      case 4:
        this.$ = yy.trimEdges($$[$0]);
        break;
      case 5:
        this.$ = yy.evaluateByOperator("&", [$$[$0 - 2], $$[$0]]);
        break;
      case 6:
        this.$ = yy.evaluateByOperator("=", [$$[$0 - 2], $$[$0]]);
        break;
      case 7:
        this.$ = yy.evaluateByOperator("+", [$$[$0 - 2], $$[$0]]);
        break;
      case 8:
        this.$ = $$[$0 - 1];
        break;
      case 9:
        this.$ = yy.evaluateByOperator("<=", [$$[$0 - 3], $$[$0]]);
        break;
      case 10:
        this.$ = yy.evaluateByOperator(">=", [$$[$0 - 3], $$[$0]]);
        break;
      case 11:
        this.$ = yy.evaluateByOperator("<>", [$$[$0 - 3], $$[$0]]);
        break;
      case 12:
        this.$ = yy.evaluateByOperator("NOT", [$$[$0 - 2], $$[$0]]);
        break;
      case 13:
        this.$ = yy.evaluateByOperator(">", [$$[$0 - 2], $$[$0]]);
        break;
      case 14:
        this.$ = yy.evaluateByOperator("<", [$$[$0 - 2], $$[$0]]);
        break;
      case 15:
        this.$ = yy.evaluateByOperator("-", [$$[$0 - 2], $$[$0]]);
        break;
      case 16:
        this.$ = yy.evaluateByOperator("*", [$$[$0 - 2], $$[$0]]);
        break;
      case 17:
        this.$ = yy.evaluateByOperator("/", [$$[$0 - 2], $$[$0]]);
        break;
      case 18:
        this.$ = yy.evaluateByOperator("^", [$$[$0 - 2], $$[$0]]);
        break;
      case 19:
        var n1 = yy.invertNumber($$[$0]);
        this.$ = n1;
        if (isNaN(this.$)) {
          this.$ = 0;
        }
        break;
      case 20:
        var n1 = yy.toNumber($$[$0]);
        this.$ = n1;
        if (isNaN(this.$)) {
          this.$ = 0;
        }
        break;
      case 21:
        this.$ = yy.callFunction($$[$0 - 2]);
        break;
      case 22:
        this.$ = yy.callFunction($$[$0 - 3], $$[$0 - 1]);
        break;
      case 26:
      case 27:
      case 28:
        this.$ = yy.cellValue($$[$0]);
        break;
      case 29:
      case 30:
      case 31:
      case 32:
      case 33:
      case 34:
      case 35:
      case 36:
      case 37:
        this.$ = yy.rangeValue($$[$0 - 2], $$[$0]);
        break;
      case 38:
      case 42:
        this.$ = [$$[$0]];
        break;
      case 39:
        this.$ = yy.trimEdges(yytext).split(",");
        break;
      case 40:
      case 41:
        $$[$0 - 2].push($$[$0]);
        this.$ = $$[$0 - 2];
        break;
      case 43:
        this.$ = Array.isArray($$[$0 - 2]) ? $$[$0 - 2] : [$$[$0 - 2]];
        this.$.push($$[$0]);
        break;
      case 44:
        this.$ = $$[$0];
        break;
      case 45:
        this.$ = ($$[$0 - 2] + "." + $$[$0]) * 1;
        break;
      case 46:
        this.$ = $$[$0 - 1] * 0.01;
        break;
      case 47:
        this.$ = yy.throwError($$[$0]);
        break;
    }
  },
  table: [{
    2: 11,
    3: 1,
    4: 2,
    6: 3,
    7: 4,
    8: $V0,
    11: $V1,
    12: $V2,
    17: $V3,
    21: $V4,
    23: 10,
    24: $V5,
    25: $V6,
    26: $V7,
    31: $V8,
    33: $V9,
    35: $Va
  }, {
    1: [3]
  }, {
    5: [1, 18],
    9: $Vb,
    10: $Vc,
    11: $Vd,
    14: $Ve,
    15: $Vf,
    16: $Vg,
    17: $Vh,
    18: $Vi,
    19: $Vj,
    20: $Vk
  }, o2($Vl, [2, 2], {
    32: [1, 29]
  }), o2($Vl, [2, 3], {
    34: [1, 30]
  }), o2($Vl, [2, 4]), {
    2: 11,
    4: 31,
    6: 3,
    7: 4,
    8: $V0,
    11: $V1,
    12: $V2,
    17: $V3,
    21: $V4,
    23: 10,
    24: $V5,
    25: $V6,
    26: $V7,
    31: $V8,
    33: $V9,
    35: $Va
  }, {
    2: 11,
    4: 32,
    6: 3,
    7: 4,
    8: $V0,
    11: $V1,
    12: $V2,
    17: $V3,
    21: $V4,
    23: 10,
    24: $V5,
    25: $V6,
    26: $V7,
    31: $V8,
    33: $V9,
    35: $Va
  }, {
    2: 11,
    4: 33,
    6: 3,
    7: 4,
    8: $V0,
    11: $V1,
    12: $V2,
    17: $V3,
    21: $V4,
    23: 10,
    24: $V5,
    25: $V6,
    26: $V7,
    31: $V8,
    33: $V9,
    35: $Va
  }, {
    12: [1, 34]
  }, o2($Vl, [2, 23]), o2($Vl, [2, 24], {
    2: 35,
    35: $Va
  }), o2($Vm, [2, 42]), o2($Vn, [2, 44], {
    32: [1, 36]
  }), o2($Vl, [2, 26], {
    27: [1, 37]
  }), o2($Vl, [2, 27], {
    27: [1, 38]
  }), o2($Vl, [2, 28], {
    27: [1, 39]
  }), o2([5, 9, 10, 11, 13, 14, 15, 16, 17, 18, 19, 20, 29, 30, 35], [2, 47]), {
    1: [2, 1]
  }, {
    2: 11,
    4: 40,
    6: 3,
    7: 4,
    8: $V0,
    11: $V1,
    12: $V2,
    17: $V3,
    21: $V4,
    23: 10,
    24: $V5,
    25: $V6,
    26: $V7,
    31: $V8,
    33: $V9,
    35: $Va
  }, {
    2: 11,
    4: 41,
    6: 3,
    7: 4,
    8: $V0,
    11: $V1,
    12: $V2,
    17: $V3,
    21: $V4,
    23: 10,
    24: $V5,
    25: $V6,
    26: $V7,
    31: $V8,
    33: $V9,
    35: $Va
  }, {
    2: 11,
    4: 42,
    6: 3,
    7: 4,
    8: $V0,
    11: $V1,
    12: $V2,
    17: $V3,
    21: $V4,
    23: 10,
    24: $V5,
    25: $V6,
    26: $V7,
    31: $V8,
    33: $V9,
    35: $Va
  }, {
    2: 11,
    4: 45,
    6: 3,
    7: 4,
    8: $V0,
    10: [1, 43],
    11: $V1,
    12: $V2,
    15: [1, 44],
    17: $V3,
    21: $V4,
    23: 10,
    24: $V5,
    25: $V6,
    26: $V7,
    31: $V8,
    33: $V9,
    35: $Va
  }, {
    2: 11,
    4: 47,
    6: 3,
    7: 4,
    8: $V0,
    10: [1, 46],
    11: $V1,
    12: $V2,
    17: $V3,
    21: $V4,
    23: 10,
    24: $V5,
    25: $V6,
    26: $V7,
    31: $V8,
    33: $V9,
    35: $Va
  }, {
    2: 11,
    4: 48,
    6: 3,
    7: 4,
    8: $V0,
    11: $V1,
    12: $V2,
    17: $V3,
    21: $V4,
    23: 10,
    24: $V5,
    25: $V6,
    26: $V7,
    31: $V8,
    33: $V9,
    35: $Va
  }, {
    2: 11,
    4: 49,
    6: 3,
    7: 4,
    8: $V0,
    11: $V1,
    12: $V2,
    17: $V3,
    21: $V4,
    23: 10,
    24: $V5,
    25: $V6,
    26: $V7,
    31: $V8,
    33: $V9,
    35: $Va
  }, {
    2: 11,
    4: 50,
    6: 3,
    7: 4,
    8: $V0,
    11: $V1,
    12: $V2,
    17: $V3,
    21: $V4,
    23: 10,
    24: $V5,
    25: $V6,
    26: $V7,
    31: $V8,
    33: $V9,
    35: $Va
  }, {
    2: 11,
    4: 51,
    6: 3,
    7: 4,
    8: $V0,
    11: $V1,
    12: $V2,
    17: $V3,
    21: $V4,
    23: 10,
    24: $V5,
    25: $V6,
    26: $V7,
    31: $V8,
    33: $V9,
    35: $Va
  }, {
    2: 11,
    4: 52,
    6: 3,
    7: 4,
    8: $V0,
    11: $V1,
    12: $V2,
    17: $V3,
    21: $V4,
    23: 10,
    24: $V5,
    25: $V6,
    26: $V7,
    31: $V8,
    33: $V9,
    35: $Va
  }, {
    31: [1, 53]
  }, o2($Vn, [2, 46]), {
    9: $Vb,
    10: $Vc,
    11: $Vd,
    13: [1, 54],
    14: $Ve,
    15: $Vf,
    16: $Vg,
    17: $Vh,
    18: $Vi,
    19: $Vj,
    20: $Vk
  }, o2($Vo, [2, 19], {
    9: $Vb,
    18: $Vi,
    19: $Vj,
    20: $Vk
  }), o2($Vo, [2, 20], {
    9: $Vb,
    18: $Vi,
    19: $Vj,
    20: $Vk
  }), {
    2: 11,
    4: 57,
    6: 3,
    7: 4,
    8: $V0,
    11: $V1,
    12: $V2,
    13: [1, 55],
    17: $V3,
    21: $V4,
    22: 56,
    23: 10,
    24: $V5,
    25: $V6,
    26: $V7,
    28: [1, 58],
    31: $V8,
    33: $V9,
    35: $Va
  }, o2($Vl, [2, 25]), {
    33: [1, 59]
  }, {
    24: [1, 60],
    25: [1, 61],
    26: [1, 62]
  }, {
    24: [1, 63],
    25: [1, 64],
    26: [1, 65]
  }, {
    24: [1, 66],
    25: [1, 67],
    26: [1, 68]
  }, o2($Vl, [2, 5]), o2([5, 10, 13, 29, 30], [2, 6], {
    9: $Vb,
    11: $Vd,
    14: $Ve,
    15: $Vf,
    16: $Vg,
    17: $Vh,
    18: $Vi,
    19: $Vj,
    20: $Vk
  }), o2($Vo, [2, 7], {
    9: $Vb,
    18: $Vi,
    19: $Vj,
    20: $Vk
  }), {
    2: 11,
    4: 69,
    6: 3,
    7: 4,
    8: $V0,
    11: $V1,
    12: $V2,
    17: $V3,
    21: $V4,
    23: 10,
    24: $V5,
    25: $V6,
    26: $V7,
    31: $V8,
    33: $V9,
    35: $Va
  }, {
    2: 11,
    4: 70,
    6: 3,
    7: 4,
    8: $V0,
    11: $V1,
    12: $V2,
    17: $V3,
    21: $V4,
    23: 10,
    24: $V5,
    25: $V6,
    26: $V7,
    31: $V8,
    33: $V9,
    35: $Va
  }, o2($Vp, [2, 14], {
    9: $Vb,
    11: $Vd,
    17: $Vh,
    18: $Vi,
    19: $Vj,
    20: $Vk
  }), {
    2: 11,
    4: 71,
    6: 3,
    7: 4,
    8: $V0,
    11: $V1,
    12: $V2,
    17: $V3,
    21: $V4,
    23: 10,
    24: $V5,
    25: $V6,
    26: $V7,
    31: $V8,
    33: $V9,
    35: $Va
  }, o2($Vp, [2, 13], {
    9: $Vb,
    11: $Vd,
    17: $Vh,
    18: $Vi,
    19: $Vj,
    20: $Vk
  }), o2([5, 10, 13, 16, 29, 30], [2, 12], {
    9: $Vb,
    11: $Vd,
    14: $Ve,
    15: $Vf,
    17: $Vh,
    18: $Vi,
    19: $Vj,
    20: $Vk
  }), o2($Vo, [2, 15], {
    9: $Vb,
    18: $Vi,
    19: $Vj,
    20: $Vk
  }), o2($Vq, [2, 16], {
    9: $Vb,
    20: $Vk
  }), o2($Vq, [2, 17], {
    9: $Vb,
    20: $Vk
  }), o2([5, 10, 11, 13, 14, 15, 16, 17, 18, 19, 20, 29, 30], [2, 18], {
    9: $Vb
  }), o2($Vm, [2, 43]), o2($Vl, [2, 8]), o2($Vl, [2, 21]), {
    13: [1, 72],
    29: [1, 73],
    30: [1, 74]
  }, o2($Vr, [2, 38], {
    9: $Vb,
    10: $Vc,
    11: $Vd,
    14: $Ve,
    15: $Vf,
    16: $Vg,
    17: $Vh,
    18: $Vi,
    19: $Vj,
    20: $Vk
  }), o2($Vr, [2, 39]), o2($Vn, [2, 45]), o2($Vl, [2, 29]), o2($Vl, [2, 30]), o2($Vl, [2, 31]), o2($Vl, [2, 32]), o2($Vl, [2, 33]), o2($Vl, [2, 34]), o2($Vl, [2, 35]), o2($Vl, [2, 36]), o2($Vl, [2, 37]), o2($Vp, [2, 9], {
    9: $Vb,
    11: $Vd,
    17: $Vh,
    18: $Vi,
    19: $Vj,
    20: $Vk
  }), o2($Vp, [2, 11], {
    9: $Vb,
    11: $Vd,
    17: $Vh,
    18: $Vi,
    19: $Vj,
    20: $Vk
  }), o2($Vp, [2, 10], {
    9: $Vb,
    11: $Vd,
    17: $Vh,
    18: $Vi,
    19: $Vj,
    20: $Vk
  }), o2($Vl, [2, 22]), {
    2: 11,
    4: 75,
    6: 3,
    7: 4,
    8: $V0,
    11: $V1,
    12: $V2,
    17: $V3,
    21: $V4,
    23: 10,
    24: $V5,
    25: $V6,
    26: $V7,
    31: $V8,
    33: $V9,
    35: $Va
  }, {
    2: 11,
    4: 76,
    6: 3,
    7: 4,
    8: $V0,
    11: $V1,
    12: $V2,
    17: $V3,
    21: $V4,
    23: 10,
    24: $V5,
    25: $V6,
    26: $V7,
    31: $V8,
    33: $V9,
    35: $Va
  }, o2($Vr, [2, 40], {
    9: $Vb,
    10: $Vc,
    11: $Vd,
    14: $Ve,
    15: $Vf,
    16: $Vg,
    17: $Vh,
    18: $Vi,
    19: $Vj,
    20: $Vk
  }), o2($Vr, [2, 41], {
    9: $Vb,
    10: $Vc,
    11: $Vd,
    14: $Ve,
    15: $Vf,
    16: $Vg,
    17: $Vh,
    18: $Vi,
    19: $Vj,
    20: $Vk
  })],
  defaultActions: {
    18: [2, 1]
  },
  parseError: function parseError(str, hash) {
    if (hash.recoverable) {
      this.trace(str);
    } else {
      var error2 = new Error(str);
      error2.hash = hash;
      throw error2;
    }
  },
  parse: function parse(input) {
    var self = this, stack = [0], tstack = [], vstack = [null], lstack = [], table = this.table, yytext = "", yylineno = 0, yyleng = 0, recovering = 0, TERROR = 2, EOF = 1;
    var args = lstack.slice.call(arguments, 1);
    var lexer2 = Object.create(this.lexer);
    var sharedState = {
      yy: {}
    };
    for (var k2 in this.yy) {
      if (Object.prototype.hasOwnProperty.call(this.yy, k2)) {
        sharedState.yy[k2] = this.yy[k2];
      }
    }
    lexer2.setInput(input, sharedState.yy);
    sharedState.yy.lexer = lexer2;
    sharedState.yy.parser = this;
    if (typeof lexer2.yylloc == "undefined") {
      lexer2.yylloc = {};
    }
    var yyloc = lexer2.yylloc;
    lstack.push(yyloc);
    var ranges = lexer2.options && lexer2.options.ranges;
    if (typeof sharedState.yy.parseError === "function") {
      this.parseError = sharedState.yy.parseError;
    } else {
      this.parseError = Object.getPrototypeOf(this).parseError;
    }
    function popStack(n3) {
      stack.length = stack.length - 2 * n3;
      vstack.length = vstack.length - n3;
      lstack.length = lstack.length - n3;
    }
    var lex = function lex2() {
      var token;
      token = lexer2.lex() || EOF;
      if (typeof token !== "number") {
        token = self.symbols_[token] || token;
      }
      return token;
    };
    var symbol, preErrorSymbol, state, action, a3, r3, yyval = {}, p3, len, newState, expected;
    while (true) {
      state = stack[stack.length - 1];
      if (this.defaultActions[state]) {
        action = this.defaultActions[state];
      } else {
        if (symbol === null || typeof symbol == "undefined") {
          symbol = lex();
        }
        action = table[state] && table[state][symbol];
      }
      if (typeof action === "undefined" || !action.length || !action[0]) {
        var locateNearestErrorRecoveryRule = function locateNearestErrorRecoveryRule2(state2) {
          var stack_probe = stack.length - 1;
          var depth = 0;
          for (; ; ) {
            if (TERROR.toString() in table[state2]) {
              return depth;
            }
            if (state2 === 0 || stack_probe < 2) {
              return false;
            }
            stack_probe -= 2;
            state2 = stack[stack_probe];
            ++depth;
          }
        };
        var error_rule_depth;
        var errStr = "";
        if (!recovering) {
          error_rule_depth = locateNearestErrorRecoveryRule(state);
          expected = [];
          for (p3 in table[state]) {
            if (this.terminals_[p3] && p3 > TERROR) {
              expected.push("'" + this.terminals_[p3] + "'");
            }
          }
          if (lexer2.showPosition) {
            errStr = "Parse error on line " + (yylineno + 1) + ":\n" + lexer2.showPosition() + "\nExpecting " + expected.join(", ") + ", got '" + (this.terminals_[symbol] || symbol) + "'";
          } else {
            errStr = "Parse error on line " + (yylineno + 1) + ": Unexpected " + (symbol == EOF ? "end of input" : "'" + (this.terminals_[symbol] || symbol) + "'");
          }
          this.parseError(errStr, {
            text: lexer2.match,
            token: this.terminals_[symbol] || symbol,
            line: lexer2.yylineno,
            loc: yyloc,
            expected,
            recoverable: error_rule_depth !== false
          });
        } else if (preErrorSymbol !== EOF) {
          error_rule_depth = locateNearestErrorRecoveryRule(state);
        }
        if (recovering == 3) {
          if (symbol === EOF || preErrorSymbol === EOF) {
            throw new Error(errStr || "Parsing halted while starting to recover from another error.");
          }
          yyleng = lexer2.yyleng;
          yytext = lexer2.yytext;
          yylineno = lexer2.yylineno;
          yyloc = lexer2.yylloc;
          symbol = lex();
        }
        if (error_rule_depth === false) {
          throw new Error(errStr || "Parsing halted. No suitable error recovery rule available.");
        }
        popStack(error_rule_depth);
        preErrorSymbol = symbol == TERROR ? null : symbol;
        symbol = TERROR;
        state = stack[stack.length - 1];
        action = table[state] && table[state][TERROR];
        recovering = 3;
      }
      if (action[0] instanceof Array && action.length > 1) {
        throw new Error("Parse Error: multiple actions possible at state: " + state + ", token: " + symbol);
      }
      switch (action[0]) {
        case 1:
          stack.push(symbol);
          vstack.push(lexer2.yytext);
          lstack.push(lexer2.yylloc);
          stack.push(action[1]);
          symbol = null;
          if (!preErrorSymbol) {
            yyleng = lexer2.yyleng;
            yytext = lexer2.yytext;
            yylineno = lexer2.yylineno;
            yyloc = lexer2.yylloc;
            if (recovering > 0) {
              recovering--;
            }
          } else {
            symbol = preErrorSymbol;
            preErrorSymbol = null;
          }
          break;
        case 2:
          len = this.productions_[action[1]][1];
          yyval.$ = vstack[vstack.length - len];
          yyval._$ = {
            first_line: lstack[lstack.length - (len || 1)].first_line,
            last_line: lstack[lstack.length - 1].last_line,
            first_column: lstack[lstack.length - (len || 1)].first_column,
            last_column: lstack[lstack.length - 1].last_column
          };
          if (ranges) {
            yyval._$.range = [lstack[lstack.length - (len || 1)].range[0], lstack[lstack.length - 1].range[1]];
          }
          r3 = this.performAction.apply(yyval, [yytext, yyleng, yylineno, sharedState.yy, action[1], vstack, lstack].concat(args));
          if (typeof r3 !== "undefined") {
            return r3;
          }
          if (len) {
            stack = stack.slice(0, -1 * len * 2);
            vstack = vstack.slice(0, -1 * len);
            lstack = lstack.slice(0, -1 * len);
          }
          stack.push(this.productions_[action[1]][0]);
          vstack.push(yyval.$);
          lstack.push(yyval._$);
          newState = table[stack[stack.length - 2]][stack[stack.length - 1]];
          stack.push(newState);
          break;
        case 3:
          return true;
      }
    }
    return true;
  }
};
var lexer = function() {
  var lexer2 = {
    EOF: 1,
    parseError: function parseError2(str, hash) {
      if (this.yy.parser) {
        this.yy.parser.parseError(str, hash);
      } else {
        throw new Error(str);
      }
    },
    // resets the lexer, sets new input
    setInput: function setInput(input, yy) {
      this.yy = yy || this.yy || {};
      this._input = input;
      this._more = this._backtrack = this.done = false;
      this.yylineno = this.yyleng = 0;
      this.yytext = this.matched = this.match = "";
      this.conditionStack = ["INITIAL"];
      this.yylloc = {
        first_line: 1,
        first_column: 0,
        last_line: 1,
        last_column: 0
      };
      if (this.options.ranges) {
        this.yylloc.range = [0, 0];
      }
      this.offset = 0;
      return this;
    },
    // consumes and returns one char from the input
    input: function input() {
      var ch = this._input[0];
      this.yytext += ch;
      this.yyleng++;
      this.offset++;
      this.match += ch;
      this.matched += ch;
      var lines = ch.match(/(?:\r\n?|\n).*/g);
      if (lines) {
        this.yylineno++;
        this.yylloc.last_line++;
      } else {
        this.yylloc.last_column++;
      }
      if (this.options.ranges) {
        this.yylloc.range[1]++;
      }
      this._input = this._input.slice(1);
      return ch;
    },
    // unshifts one char (or a string) into the input
    unput: function unput(ch) {
      var len = ch.length;
      var lines = ch.split(/(?:\r\n?|\n)/g);
      this._input = ch + this._input;
      this.yytext = this.yytext.substr(0, this.yytext.length - len);
      this.offset -= len;
      var oldLines = this.match.split(/(?:\r\n?|\n)/g);
      this.match = this.match.substr(0, this.match.length - 1);
      this.matched = this.matched.substr(0, this.matched.length - 1);
      if (lines.length - 1) {
        this.yylineno -= lines.length - 1;
      }
      var r3 = this.yylloc.range;
      this.yylloc = {
        first_line: this.yylloc.first_line,
        last_line: this.yylineno + 1,
        first_column: this.yylloc.first_column,
        last_column: lines ? (lines.length === oldLines.length ? this.yylloc.first_column : 0) + oldLines[oldLines.length - lines.length].length - lines[0].length : this.yylloc.first_column - len
      };
      if (this.options.ranges) {
        this.yylloc.range = [r3[0], r3[0] + this.yyleng - len];
      }
      this.yyleng = this.yytext.length;
      return this;
    },
    // When called from action, caches matched text and appends it on next action
    more: function more() {
      this._more = true;
      return this;
    },
    // When called from action, signals the lexer that this rule fails to match the input, so the next matching rule (regex) should be tested instead.
    reject: function reject() {
      if (this.options.backtrack_lexer) {
        this._backtrack = true;
      } else {
        return this.parseError("Lexical error on line " + (this.yylineno + 1) + ". You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n" + this.showPosition(), {
          text: "",
          token: null,
          line: this.yylineno
        });
      }
      return this;
    },
    // retain first n characters of the match
    less: function less(n3) {
      this.unput(this.match.slice(n3));
    },
    // displays already matched input, i.e. for error messages
    pastInput: function pastInput() {
      var past = this.matched.substr(0, this.matched.length - this.match.length);
      return (past.length > 20 ? "..." : "") + past.substr(-20).replace(/\n/g, "");
    },
    // displays upcoming input, i.e. for error messages
    upcomingInput: function upcomingInput() {
      var next = this.match;
      if (next.length < 20) {
        next += this._input.substr(0, 20 - next.length);
      }
      return (next.substr(0, 20) + (next.length > 20 ? "..." : "")).replace(/\n/g, "");
    },
    // displays the character position where the lexing error occurred, i.e. for error messages
    showPosition: function showPosition() {
      var pre = this.pastInput();
      var c3 = new Array(pre.length + 1).join("-");
      return pre + this.upcomingInput() + "\n" + c3 + "^";
    },
    // test the lexed token: return FALSE when not a match, otherwise return token
    test_match: function test_match(match, indexed_rule) {
      var token, lines, backup;
      if (this.options.backtrack_lexer) {
        backup = {
          yylineno: this.yylineno,
          yylloc: {
            first_line: this.yylloc.first_line,
            last_line: this.last_line,
            first_column: this.yylloc.first_column,
            last_column: this.yylloc.last_column
          },
          yytext: this.yytext,
          match: this.match,
          matches: this.matches,
          matched: this.matched,
          yyleng: this.yyleng,
          offset: this.offset,
          _more: this._more,
          _input: this._input,
          yy: this.yy,
          conditionStack: this.conditionStack.slice(0),
          done: this.done
        };
        if (this.options.ranges) {
          backup.yylloc.range = this.yylloc.range.slice(0);
        }
      }
      lines = match[0].match(/(?:\r\n?|\n).*/g);
      if (lines) {
        this.yylineno += lines.length;
      }
      this.yylloc = {
        first_line: this.yylloc.last_line,
        last_line: this.yylineno + 1,
        first_column: this.yylloc.last_column,
        last_column: lines ? lines[lines.length - 1].length - lines[lines.length - 1].match(/\r?\n?/)[0].length : this.yylloc.last_column + match[0].length
      };
      this.yytext += match[0];
      this.match += match[0];
      this.matches = match;
      this.yyleng = this.yytext.length;
      if (this.options.ranges) {
        this.yylloc.range = [this.offset, this.offset += this.yyleng];
      }
      this._more = false;
      this._backtrack = false;
      this._input = this._input.slice(match[0].length);
      this.matched += match[0];
      token = this.performAction.call(this, this.yy, this, indexed_rule, this.conditionStack[this.conditionStack.length - 1]);
      if (this.done && this._input) {
        this.done = false;
      }
      if (token) {
        return token;
      } else if (this._backtrack) {
        for (var k2 in backup) {
          this[k2] = backup[k2];
        }
        return false;
      }
      return false;
    },
    // return next match in input
    next: function next() {
      if (this.done) {
        return this.EOF;
      }
      if (!this._input) {
        this.done = true;
      }
      var token, match, tempMatch, index;
      if (!this._more) {
        this.yytext = "";
        this.match = "";
      }
      var rules = this._currentRules();
      for (var i3 = 0; i3 < rules.length; i3++) {
        tempMatch = this._input.match(this.rules[rules[i3]]);
        if (tempMatch && (!match || tempMatch[0].length > match[0].length)) {
          match = tempMatch;
          index = i3;
          if (this.options.backtrack_lexer) {
            token = this.test_match(tempMatch, rules[i3]);
            if (token !== false) {
              return token;
            } else if (this._backtrack) {
              match = false;
              continue;
            } else {
              return false;
            }
          } else if (!this.options.flex) {
            break;
          }
        }
      }
      if (match) {
        token = this.test_match(match, rules[index]);
        if (token !== false) {
          return token;
        }
        return false;
      }
      if (this._input === "") {
        return this.EOF;
      } else {
        return this.parseError("Lexical error on line " + (this.yylineno + 1) + ". Unrecognized text.\n" + this.showPosition(), {
          text: "",
          token: null,
          line: this.yylineno
        });
      }
    },
    // return next match that has a token
    lex: function lex() {
      var r3 = this.next();
      if (r3) {
        return r3;
      } else {
        return this.lex();
      }
    },
    // activates a new lexer condition state (pushes the new lexer condition state onto the condition stack)
    begin: function begin(condition) {
      this.conditionStack.push(condition);
    },
    // pop the previously active lexer condition state off the condition stack
    popState: function popState() {
      var n3 = this.conditionStack.length - 1;
      if (n3 > 0) {
        return this.conditionStack.pop();
      } else {
        return this.conditionStack[0];
      }
    },
    // produce the lexer rule set which is active for the currently active lexer condition state
    _currentRules: function _currentRules() {
      if (this.conditionStack.length && this.conditionStack[this.conditionStack.length - 1]) {
        return this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules;
      } else {
        return this.conditions["INITIAL"].rules;
      }
    },
    // return the currently active lexer condition state; when an index argument is provided it produces the N-th previous condition state, if available
    topState: function topState(n3) {
      n3 = this.conditionStack.length - 1 - Math.abs(n3 || 0);
      if (n3 >= 0) {
        return this.conditionStack[n3];
      } else {
        return "INITIAL";
      }
    },
    // alias for begin(condition)
    pushState: function pushState(condition) {
      this.begin(condition);
    },
    // return the number of states currently on the stack
    stateStackSize: function stateStackSize() {
      return this.conditionStack.length;
    },
    options: {},
    performAction: function anonymous2(yy, yy_, $avoiding_name_collisions, YY_START) {
      var YYSTATE = YY_START;
      switch ($avoiding_name_collisions) {
        case 0:
          break;
        case 1:
          return 8;
          break;
        case 2:
          return 8;
          break;
        case 3:
          return 21;
          break;
        case 4:
          return 35;
          break;
        case 5:
          return 24;
          break;
        case 6:
          return 26;
          break;
        case 7:
          return 26;
          break;
        case 8:
          return 25;
          break;
        case 9:
          return 21;
          break;
        case 10:
          return 31;
          break;
        case 11:
          return 31;
          break;
        case 12:
          return 33;
          break;
        case 13:
          return 28;
          break;
        case 14:
          return 9;
          break;
        case 15:
          return " ";
          break;
        case 16:
          return 32;
          break;
        case 17:
          return 27;
          break;
        case 18:
          return 29;
          break;
        case 19:
          return 30;
          break;
        case 20:
          return 18;
          break;
        case 21:
          return 19;
          break;
        case 22:
          return 17;
          break;
        case 23:
          return 11;
          break;
        case 24:
          return 20;
          break;
        case 25:
          return 12;
          break;
        case 26:
          return 13;
          break;
        case 27:
          return 15;
          break;
        case 28:
          return 14;
          break;
        case 29:
          return 16;
          break;
        case 30:
          return '"';
          break;
        case 31:
          return "'";
          break;
        case 32:
          return "!";
          break;
        case 33:
          return 10;
          break;
        case 34:
          return 34;
          break;
        case 35:
          return "#";
          break;
        case 36:
          return 5;
          break;
      }
    },
    rules: [/^(?:\s+)/, /^(?:"(\\["]|[^"])*")/, /^(?:'(\\[']|[^'])*')/, /^(?:[A-Za-z]{1,}[A-Za-z_0-9\.]+(?=[(]))/, /^(?:#[A-Z0-9\/]+(!|\?)?)/, /^(?:\$[A-Za-z]+\$[0-9]+)/, /^(?:\$[A-Za-z]+[0-9]+)/, /^(?:[A-Za-z]+\$[0-9]+)/, /^(?:[A-Za-z]+[0-9]+)/, /^(?:[A-Za-z\.]+(?=[(]))/, /^(?:[A-Za-z]{1,}[A-Za-z_0-9]+)/, /^(?:[A-Za-z_]+)/, /^(?:[0-9]+)/, /^(?:\[(.*)?\])/, /^(?:&)/, /^(?: )/, /^(?:[.])/, /^(?::)/, /^(?:;)/, /^(?:,)/, /^(?:\*)/, /^(?:\/)/, /^(?:-)/, /^(?:\+)/, /^(?:\^)/, /^(?:\()/, /^(?:\))/, /^(?:>)/, /^(?:<)/, /^(?:NOT\b)/, /^(?:")/, /^(?:')/, /^(?:!)/, /^(?:=)/, /^(?:%)/, /^(?:[#])/, /^(?:$)/],
    conditions: {
      "INITIAL": {
        "rules": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36],
        "inclusive": true
      }
    }
  };
  return lexer2;
}();
parser.lexer = lexer;
function Parser() {
  this.yy = {};
}
Parser.prototype = parser;
parser.Parser = Parser;

// node_modules/hot-formula-parser/helper/string.mjs
function trimEdges(string) {
  var margin = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
  string = string.substring(margin, string.length - margin);
  return string;
}

// node_modules/hot-formula-parser/helper/cell.mjs
function _slicedToArray(arr, i3) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i3) || _unsupportedIterableToArray2(arr, i3) || _nonIterableRest();
}
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray2(o5, minLen) {
  if (!o5)
    return;
  if (typeof o5 === "string")
    return _arrayLikeToArray2(o5, minLen);
  var n3 = Object.prototype.toString.call(o5).slice(8, -1);
  if (n3 === "Object" && o5.constructor)
    n3 = o5.constructor.name;
  if (n3 === "Map" || n3 === "Set")
    return Array.from(o5);
  if (n3 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n3))
    return _arrayLikeToArray2(o5, minLen);
}
function _arrayLikeToArray2(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i3 = 0, arr2 = new Array(len); i3 < len; i3++) {
    arr2[i3] = arr[i3];
  }
  return arr2;
}
function _iterableToArrayLimit(arr, i3) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr)))
    return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = void 0;
  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);
      if (i3 && _arr.length === i3)
        break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null)
        _i["return"]();
    } finally {
      if (_d)
        throw _e;
    }
  }
  return _arr;
}
function _arrayWithHoles(arr) {
  if (Array.isArray(arr))
    return arr;
}
function rowLabelToIndex(label) {
  var result = parseInt(label, 10);
  if (isNaN(result)) {
    result = -1;
  } else {
    result = Math.max(result - 1, -1);
  }
  return result;
}
function rowIndexToLabel(row) {
  var result = "";
  if (row >= 0) {
    result = "".concat(row + 1);
  }
  return result;
}
var COLUMN_LABEL_BASE = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var COLUMN_LABEL_BASE_LENGTH = COLUMN_LABEL_BASE.length;
function columnLabelToIndex(label) {
  var result = 0;
  if (typeof label === "string") {
    label = label.toUpperCase();
    for (var i3 = 0, j2 = label.length - 1; i3 < label.length; i3 += 1, j2 -= 1) {
      result += Math.pow(COLUMN_LABEL_BASE_LENGTH, j2) * (COLUMN_LABEL_BASE.indexOf(label[i3]) + 1);
    }
  }
  --result;
  return result;
}
function columnIndexToLabel(column) {
  var result = "";
  while (column >= 0) {
    result = String.fromCharCode(column % COLUMN_LABEL_BASE_LENGTH + 97) + result;
    column = Math.floor(column / COLUMN_LABEL_BASE_LENGTH) - 1;
  }
  return result.toUpperCase();
}
var LABEL_EXTRACT_REGEXP = /^([$])?([A-Za-z]+)([$])?([0-9]+)$/;
function extractLabel(label) {
  if (typeof label !== "string" || !LABEL_EXTRACT_REGEXP.test(label)) {
    return [];
  }
  var _label$toUpperCase$ma = label.toUpperCase().match(LABEL_EXTRACT_REGEXP), _label$toUpperCase$ma2 = _slicedToArray(_label$toUpperCase$ma, 5), columnAbs = _label$toUpperCase$ma2[1], column = _label$toUpperCase$ma2[2], rowAbs = _label$toUpperCase$ma2[3], row = _label$toUpperCase$ma2[4];
  return [{
    index: rowLabelToIndex(row),
    label: row,
    isAbsolute: rowAbs === "$"
  }, {
    index: columnLabelToIndex(column),
    label: column,
    isAbsolute: columnAbs === "$"
  }];
}
function toLabel(row, column) {
  var rowLabel = (row.isAbsolute ? "$" : "") + rowIndexToLabel(row.index);
  var columnLabel = (column.isAbsolute ? "$" : "") + columnIndexToLabel(column.index);
  return columnLabel + rowLabel;
}

// node_modules/hot-formula-parser/parser.mjs
function _typeof2(obj) {
  "@babel/helpers - typeof";
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof2 = function _typeof3(obj2) {
      return typeof obj2;
    };
  } else {
    _typeof2 = function _typeof3(obj2) {
      return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
    };
  }
  return _typeof2(obj);
}
function _slicedToArray2(arr, i3) {
  return _arrayWithHoles2(arr) || _iterableToArrayLimit2(arr, i3) || _unsupportedIterableToArray3(arr, i3) || _nonIterableRest2();
}
function _nonIterableRest2() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray3(o5, minLen) {
  if (!o5)
    return;
  if (typeof o5 === "string")
    return _arrayLikeToArray3(o5, minLen);
  var n3 = Object.prototype.toString.call(o5).slice(8, -1);
  if (n3 === "Object" && o5.constructor)
    n3 = o5.constructor.name;
  if (n3 === "Map" || n3 === "Set")
    return Array.from(o5);
  if (n3 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n3))
    return _arrayLikeToArray3(o5, minLen);
}
function _arrayLikeToArray3(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i3 = 0, arr2 = new Array(len); i3 < len; i3++) {
    arr2[i3] = arr[i3];
  }
  return arr2;
}
function _iterableToArrayLimit2(arr, i3) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr)))
    return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = void 0;
  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);
      if (i3 && _arr.length === i3)
        break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null)
        _i["return"]();
    } finally {
      if (_d)
        throw _e;
    }
  }
  return _arr;
}
function _arrayWithHoles2(arr) {
  if (Array.isArray(arr))
    return arr;
}
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties(target, props) {
  for (var i3 = 0; i3 < props.length; i3++) {
    var descriptor = props[i3];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor)
      descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps)
    _defineProperties(Constructor.prototype, protoProps);
  if (staticProps)
    _defineProperties(Constructor, staticProps);
  return Constructor;
}
function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });
  if (superClass)
    _setPrototypeOf(subClass, superClass);
}
function _setPrototypeOf(o5, p3) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o6, p4) {
    o6.__proto__ = p4;
    return o6;
  };
  return _setPrototypeOf(o5, p3);
}
function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();
  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived), result;
    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return _possibleConstructorReturn(this, result);
  };
}
function _possibleConstructorReturn(self, call) {
  if (call && (_typeof2(call) === "object" || typeof call === "function")) {
    return call;
  }
  return _assertThisInitialized(self);
}
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self;
}
function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct)
    return false;
  if (Reflect.construct.sham)
    return false;
  if (typeof Proxy === "function")
    return true;
  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function() {
    }));
    return true;
  } catch (e3) {
    return false;
  }
}
function _getPrototypeOf(o5) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o6) {
    return o6.__proto__ || Object.getPrototypeOf(o6);
  };
  return _getPrototypeOf(o5);
}
var Parser2 = function(_Emitter) {
  _inherits(Parser3, _Emitter);
  var _super = _createSuper(Parser3);
  function Parser3() {
    var _this;
    _classCallCheck(this, Parser3);
    _this = _super.call(this);
    _this.parser = new Parser();
    _this.parser.yy = {
      toNumber,
      trimEdges,
      invertNumber,
      throwError: function throwError(errorName) {
        return _this._throwError(errorName);
      },
      callVariable: function callVariable(variable) {
        return _this._callVariable(variable);
      },
      evaluateByOperator,
      callFunction: function callFunction(name, params) {
        return _this._callFunction(name, params);
      },
      cellValue: function cellValue(value) {
        return _this._callCellValue(value);
      },
      rangeValue: function rangeValue(start, end) {
        return _this._callRangeValue(start, end);
      }
    };
    _this.variables = /* @__PURE__ */ Object.create(null);
    _this.functions = /* @__PURE__ */ Object.create(null);
    _this.setVariable("TRUE", true).setVariable("FALSE", false).setVariable("NULL", null);
    return _this;
  }
  _createClass(Parser3, [{
    key: "parse",
    value: function parse2(expression) {
      var result = null;
      var error2 = null;
      try {
        if (expression === "") {
          result = "";
        } else {
          result = this.parser.parse(expression);
        }
      } catch (ex) {
        var message = error(ex.message);
        if (message) {
          error2 = message;
        } else {
          error2 = error(ERROR);
        }
      }
      if (result instanceof Error) {
        error2 = error(result.message) || error(ERROR);
        result = null;
      }
      return {
        error: error2,
        result
      };
    }
    /**
     * Set predefined variable name which can be visible while parsing formula expression.
     *
     * @param {String} name Variable name.
     * @param {*} value Variable value.
     * @returns {Parser}
     */
  }, {
    key: "setVariable",
    value: function setVariable(name, value) {
      this.variables[name] = value;
      return this;
    }
    /**
     * Get variable name.
     *
     * @param {String} name Variable name.
     * @returns {*}
     */
  }, {
    key: "getVariable",
    value: function getVariable(name) {
      return this.variables[name];
    }
    /**
     * Retrieve variable value by its name.
     *
     * @param name Variable name.
     * @returns {*}
     * @private
     */
  }, {
    key: "_callVariable",
    value: function _callVariable(name) {
      var value = this.getVariable(name);
      this.emit("callVariable", name, function(newValue) {
        if (newValue !== void 0) {
          value = newValue;
        }
      });
      if (value === void 0) {
        throw Error(ERROR_NAME);
      }
      return value;
    }
    /**
     * Set custom function which can be visible while parsing formula expression.
     *
     * @param {String} name Custom function name.
     * @param {Function} fn Custom function.
     * @returns {Parser}
     */
  }, {
    key: "setFunction",
    value: function setFunction(name, fn2) {
      this.functions[name] = fn2;
      return this;
    }
    /**
     * Get custom function.
     *
     * @param {String} name Custom function name.
     * @returns {*}
     */
  }, {
    key: "getFunction",
    value: function getFunction(name) {
      return this.functions[name];
    }
    /**
     * Call function with provided params.
     *
     * @param name Function name.
     * @param params Function params.
     * @returns {*}
     * @private
     */
  }, {
    key: "_callFunction",
    value: function _callFunction(name) {
      var params = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
      var fn2 = this.getFunction(name);
      var value;
      if (fn2) {
        value = fn2(params);
      }
      this.emit("callFunction", name, params, function(newValue) {
        if (newValue !== void 0) {
          value = newValue;
        }
      });
      return value === void 0 ? evaluateByOperator(name, params) : value;
    }
    /**
     * Retrieve value by its label (`B3`, `B$3`, `B$3`, `$B$3`).
     *
     * @param {String} label Coordinates.
     * @returns {*}
     * @private
     */
  }, {
    key: "_callCellValue",
    value: function _callCellValue(label) {
      label = label.toUpperCase();
      var _extractLabel = extractLabel(label), _extractLabel2 = _slicedToArray2(_extractLabel, 2), row = _extractLabel2[0], column = _extractLabel2[1];
      var value = void 0;
      this.emit("callCellValue", {
        label,
        row,
        column
      }, function(_value) {
        value = _value;
      });
      return value;
    }
    /**
     * Retrieve value by its label (`B3:A1`, `B$3:A1`, `B$3:$A1`, `$B$3:A$1`).
     *
     * @param {String} startLabel Coordinates of the first cell.
     * @param {String} endLabel Coordinates of the last cell.
     * @returns {Array} Returns an array of mixed values.
     * @private
     */
  }, {
    key: "_callRangeValue",
    value: function _callRangeValue(startLabel, endLabel) {
      startLabel = startLabel.toUpperCase();
      endLabel = endLabel.toUpperCase();
      var _extractLabel3 = extractLabel(startLabel), _extractLabel4 = _slicedToArray2(_extractLabel3, 2), startRow = _extractLabel4[0], startColumn = _extractLabel4[1];
      var _extractLabel5 = extractLabel(endLabel), _extractLabel6 = _slicedToArray2(_extractLabel5, 2), endRow = _extractLabel6[0], endColumn = _extractLabel6[1];
      var startCell = {};
      var endCell = {};
      if (startRow.index <= endRow.index) {
        startCell.row = startRow;
        endCell.row = endRow;
      } else {
        startCell.row = endRow;
        endCell.row = startRow;
      }
      if (startColumn.index <= endColumn.index) {
        startCell.column = startColumn;
        endCell.column = endColumn;
      } else {
        startCell.column = endColumn;
        endCell.column = startColumn;
      }
      startCell.label = toLabel(startCell.row, startCell.column);
      endCell.label = toLabel(endCell.row, endCell.column);
      var value = [];
      this.emit("callRangeValue", startCell, endCell, function() {
        var _value = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
        value = _value;
      });
      return value;
    }
    /**
     * Try to throw error by its name.
     *
     * @param {String} errorName Error name.
     * @returns {String}
     * @private
     */
  }, {
    key: "_throwError",
    value: function _throwError(errorName) {
      if (isValidStrict(errorName)) {
        throw Error(errorName);
      }
      throw Error(ERROR);
    }
  }]);
  return Parser3;
}(import_tiny_emitter.default);
var parser_default = Parser2;

// node_modules/use-context-selector/dist/index.modern.js
var import_react = __toESM(require_react());
var import_scheduler = __toESM(require_scheduler());
var import_react_dom = __toESM(require_react_dom());
var d2 = Symbol();
var f2 = Symbol();
var v2 = "undefined" == typeof window || /ServerSideRendering/.test(window.navigator && window.navigator.userAgent) ? import_react.useEffect : import_react.useLayoutEffect;
var a2 = import_scheduler.unstable_runWithPriority ? (e3) => (0, import_scheduler.unstable_runWithPriority)(import_scheduler.unstable_NormalPriority, e3) : (e3) => e3();
function E2(r3) {
  const t3 = (0, import_react.createContext)({ [d2]: { v: { current: r3 }, n: { current: -1 }, l: /* @__PURE__ */ new Set(), u: (e3) => e3() } });
  var o5;
  return t3[f2] = t3.Provider, t3.Provider = (o5 = t3.Provider, ({ value: e3, children: r4 }) => {
    const t4 = (0, import_react.useRef)(e3), c3 = (0, import_react.useRef)(0), [i3, p3] = (0, import_react.useState)(null);
    i3 && (i3(e3), p3(null));
    const f3 = (0, import_react.useRef)();
    if (!f3.current) {
      const e4 = /* @__PURE__ */ new Set(), r5 = (r6, t5) => {
        (0, import_react_dom.unstable_batchedUpdates)(() => {
          c3.current += 1;
          const n3 = { n: c3.current };
          null != t5 && t5.suspense && (n3.n *= -1, n3.p = new Promise((e5) => {
            p3(() => (r7) => {
              n3.v = r7, delete n3.p, e5(r7);
            });
          })), e4.forEach((e5) => e5(n3)), r6();
        });
      };
      f3.current = { [d2]: { v: t4, n: c3, l: e4, u: r5 } };
    }
    return v2(() => {
      t4.current = e3, c3.current += 1, a2(() => {
        f3.current[d2].l.forEach((r5) => {
          r5({ n: c3.current, v: e3 });
        });
      });
    }, [e3]), (0, import_react.createElement)(o5, { value: f3.current }, r4);
  }), delete t3.Consumer, t3;
}
function h2(e3, n3) {
  const o5 = (0, import_react.useContext)(e3)[d2];
  if ("object" == typeof process && true && !o5)
    throw new Error("useContextSelector requires special context");
  const { v: { current: c3 }, n: { current: u3 }, l: s3 } = o5, i3 = n3(c3), [p3, l3] = (0, import_react.useReducer)((e4, r3) => {
    if (!r3)
      return [c3, i3];
    if ("p" in r3)
      throw r3.p;
    if (r3.n === u3)
      return Object.is(e4[1], i3) ? e4 : [c3, i3];
    try {
      if ("v" in r3) {
        if (Object.is(e4[0], r3.v))
          return e4;
        const t3 = n3(r3.v);
        return Object.is(e4[1], t3) ? e4 : [r3.v, t3];
      }
    } catch (e5) {
    }
    return [...e4];
  }, [c3, i3]);
  return Object.is(p3[1], i3) || l3(), v2(() => (s3.add(l3), () => {
    s3.delete(l3);
  }), [s3]), p3[1];
}

// node_modules/react-spreadsheet/dist/es/index.js
var import_array_prototype = __toESM(require_array_prototype());
var extendStatics = function(d3, b2) {
  extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d4, b3) {
    d4.__proto__ = b3;
  } || function(d4, b3) {
    for (var p3 in b3)
      if (Object.prototype.hasOwnProperty.call(b3, p3))
        d4[p3] = b3[p3];
  };
  return extendStatics(d3, b2);
};
function __extends2(d3, b2) {
  if (typeof b2 !== "function" && b2 !== null)
    throw new TypeError("Class extends value " + String(b2) + " is not a constructor or null");
  extendStatics(d3, b2);
  function __() {
    this.constructor = d3;
  }
  d3.prototype = b2 === null ? Object.create(b2) : (__.prototype = b2.prototype, new __());
}
var __assign = function() {
  __assign = Object.assign || function __assign2(t3) {
    for (var s3, i3 = 1, n3 = arguments.length; i3 < n3; i3++) {
      s3 = arguments[i3];
      for (var p3 in s3)
        if (Object.prototype.hasOwnProperty.call(s3, p3))
          t3[p3] = s3[p3];
    }
    return t3;
  };
  return __assign.apply(this, arguments);
};
function __generator2(thisArg, body) {
  var _2 = { label: 0, sent: function() {
    if (t3[0] & 1)
      throw t3[1];
    return t3[1];
  }, trys: [], ops: [] }, f3, y2, t3, g2;
  return g2 = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g2[Symbol.iterator] = function() {
    return this;
  }), g2;
  function verb(n3) {
    return function(v3) {
      return step([n3, v3]);
    };
  }
  function step(op) {
    if (f3)
      throw new TypeError("Generator is already executing.");
    while (_2)
      try {
        if (f3 = 1, y2 && (t3 = op[0] & 2 ? y2["return"] : op[0] ? y2["throw"] || ((t3 = y2["return"]) && t3.call(y2), 0) : y2.next) && !(t3 = t3.call(y2, op[1])).done)
          return t3;
        if (y2 = 0, t3)
          op = [op[0] & 2, t3.value];
        switch (op[0]) {
          case 0:
          case 1:
            t3 = op;
            break;
          case 4:
            _2.label++;
            return { value: op[1], done: false };
          case 5:
            _2.label++;
            y2 = op[1];
            op = [0];
            continue;
          case 7:
            op = _2.ops.pop();
            _2.trys.pop();
            continue;
          default:
            if (!(t3 = _2.trys, t3 = t3.length > 0 && t3[t3.length - 1]) && (op[0] === 6 || op[0] === 2)) {
              _2 = 0;
              continue;
            }
            if (op[0] === 3 && (!t3 || op[1] > t3[0] && op[1] < t3[3])) {
              _2.label = op[1];
              break;
            }
            if (op[0] === 6 && _2.label < t3[1]) {
              _2.label = t3[1];
              t3 = op;
              break;
            }
            if (t3 && _2.label < t3[2]) {
              _2.label = t3[2];
              _2.ops.push(op);
              break;
            }
            if (t3[2])
              _2.ops.pop();
            _2.trys.pop();
            continue;
        }
        op = body.call(thisArg, _2);
      } catch (e3) {
        op = [6, e3];
        y2 = 0;
      } finally {
        f3 = t3 = 0;
      }
    if (op[0] & 5)
      throw op[1];
    return { value: op[0] ? op[1] : void 0, done: true };
  }
}
function __values(o5) {
  var s3 = typeof Symbol === "function" && Symbol.iterator, m2 = s3 && o5[s3], i3 = 0;
  if (m2)
    return m2.call(o5);
  if (o5 && typeof o5.length === "number")
    return {
      next: function() {
        if (o5 && i3 >= o5.length)
          o5 = void 0;
        return { value: o5 && o5[i3++], done: !o5 };
      }
    };
  throw new TypeError(s3 ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function __read(o5, n3) {
  var m2 = typeof Symbol === "function" && o5[Symbol.iterator];
  if (!m2)
    return o5;
  var i3 = m2.call(o5), r3, ar = [], e3;
  try {
    while ((n3 === void 0 || n3-- > 0) && !(r3 = i3.next()).done)
      ar.push(r3.value);
  } catch (error2) {
    e3 = { error: error2 };
  } finally {
    try {
      if (r3 && !r3.done && (m2 = i3["return"]))
        m2.call(i3);
    } finally {
      if (e3)
        throw e3.error;
    }
  }
  return ar;
}
function __spreadArray2(to, from2) {
  for (var i3 = 0, il = from2.length, j2 = to.length; i3 < il; i3++, j2++)
    to[j2] = from2[i3];
  return to;
}
var setData = createAction("SET_DATA", function(data) {
  return { payload: { data } };
});
var selectEntireRow = createAction("SELECT_ENTIRE_ROW", function(row, extend) {
  return { payload: { row, extend } };
});
var selectEntireColumn = createAction("SELECT_ENTIRE_COLUMN", function(column, extend) {
  return {
    payload: { column, extend }
  };
});
var selectEntireTable = createAction("SELECT_ENTIRE_TABLE");
var select = createAction("SELECT", function(point) {
  return { payload: { point } };
});
var activate = createAction("ACTIVATE", function(point) {
  return { payload: { point } };
});
var setCellData = createAction("SET_CELL_DATA", function(active, data, getBindingsForCell2) {
  return {
    payload: { active, data, getBindingsForCell: getBindingsForCell2 }
  };
});
var setCellDimensions = createAction("SET_CELL_DIMENSIONS", function(point, dimensions) {
  return {
    payload: { point, dimensions }
  };
});
var copy = createAction("COPY");
var cut = createAction("CUT");
var paste = createAction("PASTE", function(data) {
  return { payload: { data } };
});
var edit$1 = createAction("EDIT");
var view$1 = createAction("VIEW");
var clear$1 = createAction("CLEAR");
var blur$1 = createAction("BLUR");
var keyPress = createAction("KEY_PRESS", function(event) {
  return { payload: { event } };
});
var keyDown = createAction("KEY_DOWN", function(event) {
  return { payload: { event } };
});
var dragStart = createAction("DRAG_START");
var dragEnd = createAction("DRAG_END");
var commit$1 = createAction("COMMIT", function(changes) {
  return { payload: { changes } };
});
function set$1(point, value, map2) {
  var _a, _b;
  return __assign(__assign({}, map2), (_a = {}, _a[point.row] = __assign(__assign({}, map2[point.row]), (_b = {}, _b[point.column] = value, _b)), _a));
}
function get$1(point, map2) {
  return map2[point.row] && map2[point.row][point.column];
}
function has$3(point, map2) {
  return point.row in map2 && point.column in map2[point.row];
}
var EMPTY = {};
function from$1(pairs) {
  return pairs.reduce(function(acc, _a) {
    var _b = __read(_a, 2), point = _b[0], value = _b[1];
    return set$1(point, value, acc);
  }, EMPTY);
}
function fromMatrix(matrix) {
  return matrix.reduce(function(rowAcc, data, row) {
    return data.reduce(function(colAcc, cell, column) {
      return cell ? set$1({ row, column }, cell, colAcc) : colAcc;
    }, rowAcc);
  }, EMPTY);
}
function reduce(func14, map2, initialValue) {
  var acc = initialValue;
  var _map_keys = Object.keys(map2);
  for (var i3 = 0; i3 < _map_keys.length; i3++) {
    var row = Number(_map_keys[i3]);
    var columns = map2[row];
    var _columns_keys = Object.keys(columns);
    for (var j2 = 0; j2 < _columns_keys.length; j2++) {
      var column = Number(_columns_keys[j2]);
      var value = columns[column];
      acc = func14(acc, value, { row, column });
    }
  }
  return acc;
}
function map$1(func14, map2) {
  return reduce(function(acc, value, point) {
    return set$1(point, func14(value), acc);
  }, map2, from$1([]));
}
function filter$1(predicate, map2) {
  return reduce(function(acc, value, point) {
    if (predicate(value, point)) {
      return set$1(point, value, acc);
    }
    return acc;
  }, map2, from$1([]));
}
function isEmpty(map2) {
  return Object.keys(map2).length === 0;
}
function createEmpty(rows, columns) {
  var matrix = Array(rows);
  for (var i3 = 0; i3 < rows; i3++) {
    matrix[i3] = Array(columns);
  }
  return matrix;
}
function get(point, matrix) {
  var columns = matrix[point.row];
  if (columns === void 0) {
    return void 0;
  }
  return columns[point.column];
}
function slice(startPoint, endPoint, matrix) {
  var sliced = [];
  var columns = endPoint.column - startPoint.column;
  for (var row = startPoint.row; row <= endPoint.row; row++) {
    var slicedRow = row - startPoint.row;
    sliced[slicedRow] = sliced[slicedRow] || Array(columns);
    for (var column = startPoint.column; column <= endPoint.column; column++) {
      sliced[slicedRow][column - startPoint.column] = get({ row, column }, matrix);
    }
  }
  return sliced;
}
function set(point, value, matrix) {
  var nextMatrix = __spreadArray2([], __read(matrix));
  var firstRow = matrix[0];
  var nextFirstRow = firstRow ? __spreadArray2([], __read(firstRow)) : [];
  if (nextFirstRow.length - 1 < point.column) {
    nextFirstRow[point.column] = void 0;
    nextMatrix[0] = nextFirstRow;
  }
  var nextRow = matrix[point.row] ? __spreadArray2([], __read(matrix[point.row])) : [];
  nextRow[point.column] = value;
  nextMatrix[point.row] = nextRow;
  return nextMatrix;
}
function mutableSet(point, value, matrix) {
  var firstRow = matrix[0];
  if (!firstRow) {
    firstRow = [];
    matrix[0] = firstRow;
  }
  if (!(point.row in matrix)) {
    matrix[point.row] = [];
  }
  if (!(point.column in firstRow)) {
    firstRow[point.column] = void 0;
  }
  matrix[point.row][point.column] = value;
}
function unset(point, matrix) {
  if (!has$2(point, matrix)) {
    return matrix;
  }
  var nextMatrix = __spreadArray2([], __read(matrix));
  var nextRow = __spreadArray2([], __read(matrix[point.row]));
  nextRow[point.column] = void 0;
  nextMatrix[point.row] = nextRow;
  return nextMatrix;
}
function map(func14, matrix) {
  var e_1, _a, e_2, _b;
  var newMatrix = [];
  try {
    for (var _c = __values(matrix.entries()), _d = _c.next(); !_d.done; _d = _c.next()) {
      var _e = __read(_d.value, 2), row = _e[0], values = _e[1];
      try {
        for (var _f = (e_2 = void 0, __values(values.entries())), _g = _f.next(); !_g.done; _g = _f.next()) {
          var _h = __read(_g.value, 2), column = _h[0], value = _h[1];
          var point = { row, column };
          mutableSet(point, func14(value, point), newMatrix);
        }
      } catch (e_2_1) {
        e_2 = { error: e_2_1 };
      } finally {
        try {
          if (_g && !_g.done && (_b = _f["return"]))
            _b.call(_f);
        } finally {
          if (e_2)
            throw e_2.error;
        }
      }
    }
  } catch (e_1_1) {
    e_1 = { error: e_1_1 };
  } finally {
    try {
      if (_d && !_d.done && (_a = _c["return"]))
        _a.call(_c);
    } finally {
      if (e_1)
        throw e_1.error;
    }
  }
  return newMatrix;
}
function join(matrix, horizontalSeparator, verticalSeparator) {
  if (horizontalSeparator === void 0) {
    horizontalSeparator = "	";
  }
  if (verticalSeparator === void 0) {
    verticalSeparator = "\n";
  }
  var joined = "";
  var _a = getSize(matrix), rows = _a.rows, columns = _a.columns;
  for (var row = 0; row < rows; row++) {
    if (row) {
      joined += verticalSeparator;
    }
    for (var column = 0; column < columns; column++) {
      if (column) {
        joined += horizontalSeparator;
      }
      if (matrix[row] && column in matrix[row]) {
        joined += String(matrix[row][column]);
      }
    }
  }
  return joined;
}
function split(csv, transform, horizontalSeparator, verticalSeparator) {
  if (horizontalSeparator === void 0) {
    horizontalSeparator = "	";
  }
  if (verticalSeparator === void 0) {
    verticalSeparator = /\r\n|\n|\r/;
  }
  return csv.split(verticalSeparator).map(function(row) {
    return row.split(horizontalSeparator).map(transform);
  });
}
function has$2(point, matrix) {
  var firstRow = matrix[0];
  return firstRow && // validation
  point.row >= 0 && point.column >= 0 && Number.isInteger(point.row) && Number.isInteger(point.column) && // first row length is in sync with other rows
  point.column < firstRow.length && point.row < matrix.length;
}
function getSize(matrix) {
  return {
    columns: getColumnsCount(matrix),
    rows: getRowsCount(matrix)
  };
}
function getRowsCount(matrix) {
  return matrix.length;
}
function getColumnsCount(matrix) {
  var firstRow = matrix[0];
  return firstRow ? firstRow.length : 0;
}
function pad(matrix, size2) {
  var _a = getSize(matrix), rows = _a.rows, columns = _a.columns;
  if (rows >= size2.rows && columns >= size2.columns) {
    return matrix;
  }
  var resultSize = {
    rows: size2.rows > rows ? size2.rows : rows,
    columns: size2.columns > columns ? size2.columns : columns
  };
  var padded = __spreadArray2([], __read(matrix));
  if (resultSize.columns > columns) {
    var padColumns_1 = resultSize.columns - columns;
    padded = padded.map(function(row) {
      return __spreadArray2(__spreadArray2([], __read(row), false), __read(Array(padColumns_1).fill(void 0)));
    });
  }
  if (resultSize.rows > rows) {
    var padRows_1 = resultSize.rows - rows;
    var emptyRow = Array(resultSize.columns).fill(void 0);
    padded = __spreadArray2(__spreadArray2([], __read(padded), false), __read(Array(padRows_1).fill(emptyRow)));
  }
  return padded;
}
function toArray(matrix, transform) {
  var array = [];
  for (var row = 0; row < matrix.length; row++) {
    for (var column = 0; column < matrix[row].length; column++) {
      var value = matrix[row][column];
      array.push(transform ? transform(value, { row, column }) : value);
    }
  }
  return array;
}
function maxPoint(matrix) {
  var size2 = getSize(matrix);
  return { row: size2.rows - 1, column: size2.columns - 1 };
}
function is$1(value) {
  return (
    // @ts-ignore
    typeof (value === null || value === void 0 ? void 0 : value.row) === "number" && // @ts-ignore
    typeof (value === null || value === void 0 ? void 0 : value.column) === "number"
  );
}
function isEqual(source, target) {
  return source.column === target.column && source.row === target.row;
}
var ORIGIN = { row: 0, column: 0 };
function create(source, target) {
  return {
    start: {
      row: Math.min(source.row, target.row),
      column: Math.min(source.column, target.column)
    },
    end: {
      row: Math.max(source.row, target.row),
      column: Math.max(source.column, target.column)
    }
  };
}
function iterate(range2) {
  var row, column;
  return __generator2(this, function(_a) {
    switch (_a.label) {
      case 0:
        row = range2.start.row;
        _a.label = 1;
      case 1:
        if (!(row <= range2.end.row))
          return [3, 6];
        column = range2.start.column;
        _a.label = 2;
      case 2:
        if (!(column <= range2.end.column))
          return [3, 5];
        return [4, { row, column }];
      case 3:
        _a.sent();
        _a.label = 4;
      case 4:
        column++;
        return [3, 2];
      case 5:
        row++;
        return [3, 1];
      case 6:
        return [
          2
          /*return*/
        ];
    }
  });
}
function size$1(range2) {
  var rows = range2.end.row + 1 - range2.start.row;
  var columns = range2.end.column + 1 - range2.start.column;
  return rows * columns;
}
function has$1(range2, point) {
  return point.row >= range2.start.row && point.column >= range2.start.column && point.row <= range2.end.row && point.column <= range2.end.column;
}
function mask(masked, mask2) {
  return create({
    row: mask2.start.row > masked.start.row ? mask2.start.row : masked.start.row,
    column: mask2.start.column > masked.start.column ? mask2.start.column : masked.start.column
  }, {
    row: mask2.end.row < masked.end.row ? mask2.end.row : masked.end.row,
    column: mask2.end.column < masked.end.column ? mask2.end.column : masked.end.column
  });
}
function is(value) {
  return is$1(value === null || value === void 0 ? void 0 : value.start) && is$1(value === null || value === void 0 ? void 0 : value.end);
}
var Direction;
(function(Direction2) {
  Direction2["Left"] = "Left";
  Direction2["Right"] = "Right";
  Direction2["Top"] = "Top";
  Direction2["Bottom"] = "Bottom";
})(Direction || (Direction = {}));
var EntireType;
(function(EntireType2) {
  EntireType2["Row"] = "row";
  EntireType2["Column"] = "column";
  EntireType2["Table"] = "table";
})(EntireType || (EntireType = {}));
function isEntireRows(selection) {
  return selection !== null && "type" in selection && selection.type === EntireType.Row;
}
function isEntireColumns(selection) {
  return selection !== null && "type" in selection && selection.type === EntireType.Column;
}
function isEntireTable(selection) {
  return selection !== null && "type" in selection && selection.type === EntireType.Table;
}
function createEntireRows(start, end) {
  if (!isIndex(start)) {
    throw new InvalidIndexError("start");
  }
  if (!isIndex(end)) {
    throw new InvalidIndexError("end");
  }
  return {
    type: EntireType.Row,
    start: Math.min(start, end),
    end: Math.max(start, end)
  };
}
function createEntireColumns(start, end) {
  if (!isIndex(start)) {
    throw new InvalidIndexError("start");
  }
  if (!isIndex(end)) {
    throw new InvalidIndexError("end");
  }
  return {
    type: EntireType.Column,
    start: Math.min(start, end),
    end: Math.max(start, end)
  };
}
function createEntireTable() {
  return { type: EntireType.Table };
}
function toRange$1(selection, data) {
  if (selection === null) {
    return null;
  }
  if (is(selection)) {
    return selection;
  }
  switch (selection.type) {
    case EntireType.Row: {
      var max2 = maxPoint(data);
      return create({ row: selection.start, column: 0 }, { row: selection.end, column: max2.column });
    }
    case EntireType.Column: {
      var max2 = maxPoint(data);
      return create({ row: 0, column: selection.start }, { row: max2.row, column: selection.end });
    }
    case EntireType.Table: {
      return getMatrixRange(data);
    }
  }
}
function size(selection, data) {
  var range2 = toRange$1(selection, data);
  return range2 ? size$1(range2) : 0;
}
function hasPoint(selection, data, point) {
  var range2 = toRange$1(selection, data);
  return range2 !== null && has$1(range2, point);
}
function hasEntireRow(selection, row) {
  return isEntireRows(selection) && row >= selection.start && row <= selection.end;
}
function hasEntireColumn(selection, column) {
  return isEntireColumns(selection) && column >= selection.start && column <= selection.end;
}
function normalize(selection, data) {
  if (selection) {
    if (is(selection)) {
      return normalizeRange(selection, data);
    }
    switch (selection.type) {
      case EntireType.Row: {
        return normalizeEntireRows(selection, data);
      }
      case EntireType.Column: {
        return normalizeEntireColumns(selection, data);
      }
    }
  }
  return selection;
}
function normalizeRange(range2, data) {
  var dataRange = getMatrixRange(data);
  return mask(range2, dataRange);
}
function normalizeEntireRows(selection, data) {
  var count = getRowsCount(data);
  return createEntireRows(Math.max(selection.start, 0), Math.min(selection.end, count - 1));
}
function normalizeEntireColumns(selection, data) {
  var count = getColumnsCount(data);
  return createEntireColumns(Math.max(selection.start, 0), Math.min(selection.end, count - 1));
}
function getPoints(selection, data) {
  var range2 = toRange$1(selection, data);
  return range2 ? Array.from(iterate(range2)) : [];
}
function getSelectionFromMatrix(selection, data) {
  var range2 = toRange$1(selection, data);
  return range2 ? getRangeFromMatrix(range2, data) : [];
}
function modifyEdge(selection, active, data, edge) {
  if (active && selection) {
    if (is(selection)) {
      return modifyRangeEdge(selection, active, data, edge);
    }
    switch (selection.type) {
      case EntireType.Row: {
        return modifyEntireRowsEdge(selection, active, data, edge);
      }
      case EntireType.Column: {
        return modifyEntireColumnsEdge(selection, active, data, edge);
      }
    }
  }
  return selection;
}
function modifyEntireRowsEdge(selection, active, data, edge) {
  var _a, _b;
  if (edge === Direction.Left || edge === Direction.Right) {
    return selection;
  }
  var delta = edge === Direction.Top ? -1 : 1;
  var property = edge === Direction.Top ? "start" : "end";
  var oppositeProperty = property === "start" ? "end" : "start";
  var nextSelection;
  if (edge === Direction.Top ? selection.end > active.row : selection.start < active.row) {
    nextSelection = __assign(__assign({}, selection), (_a = {}, _a[oppositeProperty] = selection[oppositeProperty] + delta, _a));
  } else {
    nextSelection = __assign(__assign({}, selection), (_b = {}, _b[property] = selection[property] + delta, _b));
  }
  return normalizeEntireRows(nextSelection, data);
}
function modifyEntireColumnsEdge(selection, active, data, edge) {
  var _a, _b;
  if (edge === Direction.Top || edge === Direction.Bottom) {
    return selection;
  }
  var delta = edge === Direction.Left ? -1 : 1;
  var property = edge === Direction.Left ? "start" : "end";
  var oppositeProperty = property === "start" ? "end" : "start";
  var nextSelection;
  if (edge === Direction.Left ? selection.end > active.column : selection.start < active.column) {
    nextSelection = __assign(__assign({}, selection), (_a = {}, _a[oppositeProperty] = selection[oppositeProperty] + delta, _a));
  } else {
    nextSelection = __assign(__assign({}, selection), (_b = {}, _b[property] = selection[property] + delta, _b));
  }
  return normalizeEntireColumns(nextSelection, data);
}
function modifyRangeEdge(range2, active, data, edge) {
  var _a, _b, _c;
  var field = edge === Direction.Left || edge === Direction.Right ? "column" : "row";
  var key = edge === Direction.Left || edge === Direction.Top ? "start" : "end";
  var delta = key === "start" ? -1 : 1;
  var edgeOffsets = has$1(range2, __assign(__assign({}, active), (_a = {}, _a[field] = active[field] + delta * -1, _a)));
  var keyToModify = edgeOffsets ? key === "start" ? "end" : "start" : key;
  var nextRange = __assign(__assign({}, range2), (_b = {}, _b[keyToModify] = __assign(__assign({}, range2[keyToModify]), (_c = {}, _c[field] = range2[keyToModify][field] + delta, _c)), _b));
  return normalizeRange(nextRange, data);
}
function getMatrixRange(data) {
  var maxPoint$1 = maxPoint(data);
  return create(ORIGIN, maxPoint$1);
}
function getRangeFromMatrix(range2, matrix) {
  return slice(range2.start, range2.end, matrix);
}
function isIndex(value) {
  return Number.isInteger(value) && value >= 0;
}
var InvalidIndexError = (
  /** @class */
  function(_super) {
    __extends2(InvalidIndexError2, _super);
    function InvalidIndexError2(name) {
      return _super.call(this, name + " is not a valid index. It must be 0 or a positive integer") || this;
    }
    return InvalidIndexError2;
  }(Error)
);
var has = function(set2, point) {
  return has$3(point, set2);
};
function filter(func14, set2) {
  return filter$1(function(_2, point) {
    return func14(point);
  }, set2);
}
var minKey = function(object) {
  return Math.min.apply(Math, __spreadArray2([], __read(Object.keys(object))));
};
function min(set2) {
  var row = minKey(set2);
  return { row, column: minKey(set2[row]) };
}
var maxKey = function(object) {
  return Math.max.apply(Math, __spreadArray2([], __read(Object.keys(object))));
};
function max(set2) {
  var row = maxKey(set2);
  return { row, column: maxKey(set2[row]) };
}
function from(points) {
  return points.reduce(function(acc, point) {
    return set$1(point, true, acc);
  }, from$1([]));
}
function toRange(set2) {
  var start = min(set2);
  var end = max(set2);
  return create(start, end);
}
var FORMULA_VALUE_PREFIX = "=";
var FORMULA_REFERENCES = /\$?[A-Z]+\$?[0-9]+/g;
function isFormulaValue(value) {
  return typeof value === "string" && value.startsWith(FORMULA_VALUE_PREFIX);
}
function extractFormula(value) {
  return value.slice(1);
}
function getReferences(formula) {
  var match = formula.match(FORMULA_REFERENCES);
  return match ? match.map(function(substr) {
    var _a = __read(extractLabel(substr), 2), row = _a[0], column = _a[1];
    return { row: row.index, column: column.index };
  }) : [];
}
var PLAIN_TEXT_MIME = "text/plain";
var FOCUS_WITHIN_SELECTOR = ":focus-within";
function moveCursorToEnd(el) {
  el.selectionStart = el.selectionEnd = el.value.length;
}
function range(end, start, step) {
  if (start === void 0) {
    start = 0;
  }
  if (step === void 0) {
    step = 1;
  }
  var array = [];
  if (Math.sign(end - start) === -1) {
    for (var element = start; element > end; element -= step) {
      array.push(element);
    }
    return array;
  }
  for (var element = start; element < end; element += step) {
    array.push(element);
  }
  return array;
}
function isActive(active, point) {
  return Boolean(active && isEqual(point, active));
}
function getOffsetRect(element) {
  return {
    width: element.offsetWidth,
    height: element.offsetHeight,
    left: element.offsetLeft,
    top: element.offsetTop
  };
}
function writeTextToClipboard(event, data) {
  var _a;
  (_a = event.clipboardData) === null || _a === void 0 ? void 0 : _a.setData(PLAIN_TEXT_MIME, data);
}
function readTextFromClipboard(event) {
  if (window.clipboardData && window.clipboardData.getData) {
    return window.clipboardData.getData("Text");
  }
  if (event.clipboardData && event.clipboardData.getData) {
    return event.clipboardData.getData(PLAIN_TEXT_MIME);
  }
  return "";
}
function getCellDimensions(point, rowDimensions, columnDimensions) {
  var cellRowDimensions = rowDimensions && rowDimensions[point.row];
  var cellColumnDimensions = columnDimensions && columnDimensions[point.column];
  return cellRowDimensions && cellColumnDimensions && __assign(__assign({}, cellRowDimensions), cellColumnDimensions);
}
function getRangeDimensions(rowDimensions, columnDimensions, range2) {
  var startDimensions = getCellDimensions(range2.start, rowDimensions, columnDimensions);
  var endDimensions = getCellDimensions(range2.end, rowDimensions, columnDimensions);
  return startDimensions && endDimensions && {
    width: endDimensions.left + endDimensions.width - startDimensions.left,
    height: endDimensions.top + endDimensions.height - startDimensions.top,
    top: startDimensions.top,
    left: startDimensions.left
  };
}
function getSelectedDimensions(rowDimensions, columnDimensions, data, selected) {
  var range2 = toRange$1(selected, data);
  return range2 ? getRangeDimensions(rowDimensions, columnDimensions, range2) : void 0;
}
function getComputedValue(_a) {
  var cell = _a.cell, formulaParser = _a.formulaParser;
  if (cell === void 0) {
    return null;
  }
  if (isFormulaCell(cell)) {
    return getFormulaComputedValue({ cell, formulaParser });
  }
  return cell.value;
}
function getFormulaComputedValue(_a) {
  var cell = _a.cell, formulaParser = _a.formulaParser;
  var formula = extractFormula(cell.value);
  var _b = formulaParser.parse(formula), result = _b.result, error2 = _b.error;
  return error2 || result;
}
function isFormulaCell(cell) {
  return isFormulaValue(cell.value);
}
function getCSV(data) {
  var valueMatrix = map(function(cell) {
    return (cell === null || cell === void 0 ? void 0 : cell.value) || "";
  }, data);
  return join(valueMatrix);
}
function calculateSpreadsheetSize(data, rowLabels, columnLabels) {
  var _a = getSize(data), columns = _a.columns, rows = _a.rows;
  return {
    rows: rowLabels ? Math.max(rows, rowLabels.length) : rows,
    columns: columnLabels ? Math.max(columns, columnLabels.length) : columns
  };
}
function convertPointMapToPointSet(map2) {
  return map$1(function() {
    return true;
  }, map2);
}
function getCopiedRange(copied, hasPasted) {
  if (hasPasted || isEmpty(copied)) {
    return null;
  }
  var set2 = convertPointMapToPointSet(copied);
  return toRange(set2);
}
function transformCoordToPoint(coord) {
  return { row: coord.row.index, column: coord.column.index };
}
function getCellValue(formulaParser, data, point) {
  return getComputedValue({
    cell: get(point, data),
    formulaParser
  });
}
function getCellRangeValue(formulaParser, data, start, end) {
  return toArray(slice(start, end, data), function(cell) {
    return getComputedValue({
      cell,
      formulaParser
    });
  });
}
function shouldHandleClipboardEvent(root, mode) {
  return root !== null && mode === "view" && isFocusedWithin(root);
}
function isFocusedWithin(element) {
  return element.matches(FOCUS_WITHIN_SELECTOR);
}
var Table = function(_a) {
  var children = _a.children, columns = _a.columns, hideColumnIndicators = _a.hideColumnIndicators;
  var columnCount = columns + (hideColumnIndicators ? 0 : 1);
  var columnNodes = range(columnCount).map(function(i3) {
    return React.createElement("col", { key: i3 });
  });
  return React.createElement(
    "table",
    { className: "Spreadsheet__table" },
    React.createElement("colgroup", null, columnNodes),
    React.createElement("tbody", null, children)
  );
};
var Row = function(props) {
  return React.createElement("tr", __assign({}, props));
};
var HeaderRow = function(props) {
  return React.createElement("tr", __assign({}, props));
};
var INITIAL_STATE = {
  active: null,
  mode: "view",
  rowDimensions: {},
  columnDimensions: {},
  lastChanged: null,
  hasPasted: false,
  cut: false,
  dragging: false,
  data: [],
  selected: null,
  copied: from$1([]),
  bindings: from$1([]),
  lastCommit: null
};
var reducer = createReducer(INITIAL_STATE, function(builder) {
  builder.addCase(setData, function(state, action) {
    var data = action.payload.data;
    var nextActive = state.active && has$2(state.active, data) ? state.active : null;
    var nextSelected = normalize(state.selected, data);
    var nextBindings = map$1(function(bindings) {
      return filter(function(point) {
        return has$2(point, data);
      }, bindings);
    }, filter$1(function(_2, point) {
      return has$2(point, data);
    }, state.bindings));
    return __assign(__assign({}, state), { data, active: nextActive, selected: nextSelected, bindings: nextBindings });
  });
  builder.addCase(select, function(state, action) {
    var point = action.payload.point;
    if (state.active && !isActive(state.active, point)) {
      return __assign(__assign({}, state), { selected: create(point, state.active), mode: "view" });
    }
  });
  builder.addCase(selectEntireTable, function(state) {
    return __assign(__assign({}, state), { selected: createEntireTable(), active: ORIGIN, mode: "view" });
  });
  builder.addCase(selectEntireColumn, function(state, action) {
    var _a = action.payload, column = _a.column, extend = _a.extend;
    var active = state.active;
    return __assign(__assign({}, state), { selected: extend && active ? createEntireColumns(active.column, column) : createEntireColumns(column, column), active: extend && active ? active : __assign(__assign({}, ORIGIN), { column }), mode: "view" });
  });
  builder.addCase(selectEntireRow, function(state, action) {
    var _a = action.payload, row = _a.row, extend = _a.extend;
    var active = state.active;
    return __assign(__assign({}, state), { selected: extend && active ? createEntireRows(active.row, row) : createEntireRows(row, row), active: extend && active ? active : __assign(__assign({}, ORIGIN), { row }), mode: "view" });
  });
  builder.addCase(activate, function(state, action) {
    var point = action.payload.point;
    return __assign(__assign({}, state), { selected: create(point, point), active: point, mode: isActive(state.active, point) ? "edit" : "view" });
  });
  builder.addCase(setCellData, function(state, action) {
    var _a = action.payload, active = _a.active, cellData = _a.data, getBindingsForCell2 = _a.getBindingsForCell;
    var bindings = getBindingsForCell2(cellData, state.data);
    if (isActiveReadOnly(state)) {
      return;
    }
    return __assign(__assign({}, state), { data: set(active, cellData, state.data), lastChanged: active, bindings: set$1(active, from(bindings), state.bindings) });
  });
  builder.addCase(setCellDimensions, function(state, action) {
    var _a, _b;
    var _c = action.payload, point = _c.point, dimensions = _c.dimensions;
    var prevRowDimensions = state.rowDimensions[point.row];
    var prevColumnDimensions = state.columnDimensions[point.column];
    if (prevRowDimensions && prevColumnDimensions && prevRowDimensions.top === dimensions.top && prevRowDimensions.height === dimensions.height && prevColumnDimensions.left === dimensions.left && prevColumnDimensions.width === dimensions.width) {
      return;
    }
    return __assign(__assign({}, state), { rowDimensions: __assign(__assign({}, state.rowDimensions), (_a = {}, _a[point.row] = { top: dimensions.top, height: dimensions.height }, _a)), columnDimensions: __assign(__assign({}, state.columnDimensions), (_b = {}, _b[point.column] = { left: dimensions.left, width: dimensions.width }, _b)) });
  });
  builder.addCase(paste, function(state, action) {
    var text = action.payload.data;
    var active = state.active;
    if (!active) {
      return;
    }
    var copiedMatrix = split(text, function(value) {
      return { value };
    });
    var copied = fromMatrix(copiedMatrix);
    var minPoint = min(copied);
    var copiedSize = getSize(copiedMatrix);
    var requiredSize = {
      rows: active.row + copiedSize.rows,
      columns: active.column + copiedSize.columns
    };
    var paddedData = pad(state.data, requiredSize);
    var _a = reduce(function(acc, value, point) {
      var commit3 = acc.commit || [];
      var nextPoint = {
        row: point.row - minPoint.row + active.row,
        column: point.column - minPoint.column + active.column
      };
      var nextData = state.cut ? unset(point, acc.data) : acc.data;
      if (state.cut) {
        commit3 = __spreadArray2(__spreadArray2([], __read(commit3), false), [{ prevCell: value, nextCell: null }]);
      }
      if (!has$2(nextPoint, paddedData)) {
        return { data: nextData, commit: commit3 };
      }
      var currentValue = get(nextPoint, nextData) || null;
      commit3 = __spreadArray2(__spreadArray2([], __read(commit3), false), [
        {
          prevCell: currentValue,
          nextCell: value
        }
      ]);
      return {
        data: set(nextPoint, __assign(__assign({}, currentValue), value), nextData),
        commit: commit3
      };
    }, copied, { data: paddedData, commit: [] }), data = _a.data, commit2 = _a.commit;
    return __assign(__assign({}, state), { data, selected: create(active, {
      row: active.row + copiedSize.rows - 1,
      column: active.column + copiedSize.columns - 1
    }), cut: false, hasPasted: true, mode: "view", lastCommit: commit2 });
  });
  builder.addCase(edit$1, edit);
  builder.addCase(view$1, view);
  builder.addCase(clear$1, clear);
  builder.addCase(blur$1, blur);
  builder.addCase(keyPress, function(state, action) {
    var event = action.payload.event;
    if (isActiveReadOnly(state) || event.metaKey) {
      return;
    }
    if (state.mode === "view" && state.active) {
      return edit(state);
    }
    return;
  });
  builder.addCase(keyDown, function(state, action) {
    var event = action.payload.event;
    var handler = getKeyDownHandler(state, event);
    if (handler) {
      return __assign(__assign({}, state), handler(state, event));
    }
    return;
  });
  builder.addCase(dragStart, function(state, action) {
    return __assign(__assign({}, state), { dragging: true });
  });
  builder.addCase(dragEnd, function(state, action) {
    return __assign(__assign({}, state), { dragging: false });
  });
  builder.addCase(commit$1, function(state, action) {
    var changes = action.payload.changes;
    return __assign(__assign({}, state), commit(changes));
  });
  builder.addMatcher(function(action) {
    return action.type === copy.type || action.type === cut.type;
  }, function(state, action) {
    var selectedPoints = getPoints(state.selected, state.data);
    return __assign(__assign({}, state), { copied: selectedPoints.reduce(function(acc, point) {
      var cell = get(point, state.data);
      return cell === void 0 ? acc : set$1(point, cell, acc);
    }, from$1([])), cut: action.type === cut.type, hasPasted: false });
  });
});
function edit(state) {
  if (isActiveReadOnly(state)) {
    return;
  }
  return __assign(__assign({}, state), { mode: "edit" });
}
function clear(state) {
  if (!state.active) {
    return;
  }
  var canClearCell = function(cell) {
    return cell && !cell.readOnly;
  };
  var clearCell = function(cell) {
    if (!canClearCell(cell)) {
      return cell;
    }
    return Object.assign({}, cell, { value: void 0 });
  };
  var selectedPoints = getPoints(state.selected, state.data);
  var changes = selectedPoints.map(function(point) {
    var cell = get(point, state.data);
    return __assign(__assign({}, state), { prevCell: cell || null, nextCell: clearCell(cell) || null });
  });
  var newData = selectedPoints.reduce(function(acc, point) {
    var cell = get(point, acc);
    return set(point, clearCell(cell), acc);
  }, state.data);
  return __assign(__assign(__assign({}, state), { data: newData }), commit(changes));
}
function blur(state) {
  return __assign(__assign({}, state), { active: null, selected: null });
}
function view(state) {
  return __assign(__assign({}, state), { mode: "view" });
}
function commit(changes) {
  return { lastCommit: changes };
}
var go = function(rowDelta, columnDelta) {
  return function(state) {
    if (!state.active) {
      return;
    }
    var nextActive = {
      row: state.active.row + rowDelta,
      column: state.active.column + columnDelta
    };
    if (!has$2(nextActive, state.data)) {
      return __assign(__assign({}, state), { mode: "view" });
    }
    return __assign(__assign({}, state), { active: nextActive, selected: create(nextActive, nextActive), mode: "view" });
  };
};
var keyDownHandlers = {
  ArrowUp: go(-1, 0),
  ArrowDown: go(1, 0),
  ArrowLeft: go(0, -1),
  ArrowRight: go(0, 1),
  Tab: go(0, 1),
  Enter: edit,
  Backspace: clear,
  Delete: clear,
  Escape: blur
};
var editKeyDownHandlers = {
  Escape: view,
  Tab: keyDownHandlers.Tab,
  Enter: keyDownHandlers.ArrowDown
};
var editShiftKeyDownHandlers = {
  Tab: go(0, -1)
};
var shiftKeyDownHandlers = {
  ArrowUp: function(state) {
    return __assign(__assign({}, state), { selected: modifyEdge(state.selected, state.active, state.data, Direction.Top) });
  },
  ArrowDown: function(state) {
    return __assign(__assign({}, state), { selected: modifyEdge(state.selected, state.active, state.data, Direction.Bottom) });
  },
  ArrowLeft: function(state) {
    return __assign(__assign({}, state), { selected: modifyEdge(state.selected, state.active, state.data, Direction.Left) });
  },
  ArrowRight: function(state) {
    return __assign(__assign({}, state), { selected: modifyEdge(state.selected, state.active, state.data, Direction.Right) });
  },
  Tab: go(0, -1)
};
var shiftMetaKeyDownHandlers = {};
var metaKeyDownHandlers = {};
function getKeyDownHandler(state, event) {
  var key = event.key;
  var handlers;
  if (state.mode === "edit") {
    if (event.shiftKey) {
      handlers = editShiftKeyDownHandlers;
    } else {
      handlers = editKeyDownHandlers;
    }
  } else if (event.shiftKey && event.metaKey) {
    handlers = shiftMetaKeyDownHandlers;
  } else if (event.shiftKey) {
    handlers = shiftKeyDownHandlers;
  } else if (event.metaKey) {
    handlers = metaKeyDownHandlers;
  } else {
    handlers = keyDownHandlers;
  }
  return handlers[key];
}
function hasKeyDownHandler(state, event) {
  return getKeyDownHandler(state, event) !== void 0;
}
function isActiveReadOnly(state) {
  var activeCell = getActive(state);
  return Boolean(activeCell === null || activeCell === void 0 ? void 0 : activeCell.readOnly);
}
function getActive(state) {
  var activeCell = state.active && get(state.active, state.data);
  return activeCell || null;
}
var context = E2([INITIAL_STATE, function() {
}]);
function useDispatch() {
  return h2(context, function(_a) {
    var _b = __read(_a, 2);
    _b[0];
    var dispatch = _b[1];
    return dispatch;
  });
}
function useSelector(selector) {
  return h2(context, function(_a) {
    var _b = __read(_a, 1), state = _b[0];
    return selector(state);
  });
}
var CornerIndicator = function(_a) {
  var selected = _a.selected, onSelect = _a.onSelect;
  var handleClick = React.useCallback(function() {
    onSelect();
  }, [onSelect]);
  return React.createElement("th", { className: (0, import_classnames.default)("Spreadsheet__header", {
    "Spreadsheet__header--selected": selected
  }), onClick: handleClick, tabIndex: 0 });
};
var enhance$3 = function(CornerIndicatorComponent) {
  return function CornerIndicatorWrapper(props) {
    var dispatch = useDispatch();
    var selectEntireTable$1 = React.useCallback(function() {
      return dispatch(selectEntireTable());
    }, [dispatch]);
    var selected = useSelector(function(state) {
      return isEntireTable(state.selected);
    });
    return React.createElement(CornerIndicatorComponent, __assign({}, props, { selected, onSelect: selectEntireTable$1 }));
  };
};
var ColumnIndicator = function(_a) {
  var column = _a.column, label = _a.label, selected = _a.selected, onSelect = _a.onSelect;
  var handleClick = React.useCallback(function(event) {
    onSelect(column, event.shiftKey);
  }, [onSelect, column]);
  return React.createElement("th", { className: (0, import_classnames.default)("Spreadsheet__header", {
    "Spreadsheet__header--selected": selected
  }), onClick: handleClick, tabIndex: 0 }, label !== void 0 ? label : columnIndexToLabel(String(column)));
};
var enhance$2 = function(ColumnIndicatorComponent) {
  return function ColumnIndicatorWrapper(props) {
    var dispatch = useDispatch();
    var selectEntireColumn$1 = React.useCallback(function(column, extend) {
      return dispatch(selectEntireColumn(column, extend));
    }, [dispatch]);
    var selected = useSelector(function(state) {
      return hasEntireColumn(state.selected, props.column) || isEntireTable(state.selected);
    });
    return React.createElement(ColumnIndicatorComponent, __assign({}, props, { selected, onSelect: selectEntireColumn$1 }));
  };
};
var RowIndicator = function(_a) {
  var row = _a.row, label = _a.label, selected = _a.selected, onSelect = _a.onSelect;
  var handleClick = React.useCallback(function(event) {
    onSelect(row, event.shiftKey);
  }, [onSelect, row]);
  return React.createElement("th", { className: (0, import_classnames.default)("Spreadsheet__header", {
    "Spreadsheet__header--selected": selected
  }), onClick: handleClick, tabIndex: 0 }, label !== void 0 ? label : row + 1);
};
var enhance$1 = function(RowIndicatorComponent) {
  return function RowIndicatorWrapper(props) {
    var dispatch = useDispatch();
    var selected = useSelector(function(state) {
      return hasEntireRow(state.selected, props.row) || isEntireTable(state.selected);
    });
    var selectEntireRow$1 = React.useCallback(function(row, extend) {
      return dispatch(selectEntireRow(row, extend));
    }, [dispatch]);
    return React.createElement(RowIndicatorComponent, __assign({}, props, { selected, onSelect: selectEntireRow$1 }));
  };
};
var Cell = function(_a) {
  var row = _a.row, column = _a.column, DataViewer2 = _a.DataViewer, formulaParser = _a.formulaParser, selected = _a.selected, active = _a.active, dragging = _a.dragging, mode = _a.mode, data = _a.data, select2 = _a.select, activate2 = _a.activate, setCellDimensions2 = _a.setCellDimensions, setCellData2 = _a.setCellData;
  var rootRef = React.useRef(null);
  var point = React.useMemo(function() {
    return {
      row,
      column
    };
  }, [row, column]);
  var handleMouseDown = React.useCallback(function(event) {
    if (mode === "view") {
      setCellDimensions2(point, getOffsetRect(event.currentTarget));
      if (event.shiftKey) {
        select2(point);
      } else {
        activate2(point);
      }
    }
  }, [mode, setCellDimensions2, point, select2, activate2]);
  var handleMouseOver = React.useCallback(function(event) {
    if (dragging) {
      setCellDimensions2(point, getOffsetRect(event.currentTarget));
      select2(point);
    }
  }, [setCellDimensions2, select2, dragging, point]);
  React.useEffect(function() {
    var root = rootRef.current;
    if (selected && root) {
      setCellDimensions2(point, getOffsetRect(root));
    }
    if (root && active && mode === "view") {
      root.focus();
    }
  }, [setCellDimensions2, selected, active, mode, point, data]);
  if (data && data.DataViewer) {
    DataViewer2 = data.DataViewer;
  }
  return React.createElement(
    "td",
    { ref: rootRef, className: (0, import_classnames.default)("Spreadsheet__cell", data === null || data === void 0 ? void 0 : data.className, {
      "Spreadsheet__cell--readonly": data === null || data === void 0 ? void 0 : data.readOnly
    }), onMouseOver: handleMouseOver, onMouseDown: handleMouseDown, tabIndex: 0 },
    React.createElement(DataViewer2, { row, column, cell: data, formulaParser, setCellData: setCellData2 })
  );
};
var enhance = function(CellComponent) {
  return function CellWrapper(props) {
    var row = props.row, column = props.column;
    var dispatch = useDispatch();
    var setCellData$1 = React.useCallback(function(data2) {
      return dispatch(setCellData({ column, row }, data2, props.getBindingsForCell));
    }, [dispatch, props.getBindingsForCell, column, row]);
    var select$1 = React.useCallback(function(point) {
      return dispatch(select(point));
    }, [dispatch]);
    var activate$1 = React.useCallback(function(point) {
      return dispatch(activate(point));
    }, [dispatch]);
    var setCellDimensions$1 = React.useCallback(function(point, dimensions) {
      return dispatch(setCellDimensions(point, dimensions));
    }, [dispatch]);
    var active = useSelector(function(state) {
      return isActive(state.active, {
        row,
        column
      });
    });
    var mode = useSelector(function(state) {
      return active ? state.mode : "view";
    });
    var data = useSelector(function(state) {
      return get({ row, column }, state.data);
    });
    var selected = useSelector(function(state) {
      return hasPoint(state.selected, state.data, { row, column });
    });
    var dragging = useSelector(function(state) {
      return state.dragging;
    });
    var copied = useSelector(function(state) {
      return has$3({ row, column }, state.copied);
    });
    useSelector(function(state) {
      var point = { row, column };
      var cellBindings = get$1(point, state.bindings);
      return cellBindings && state.lastChanged && has(cellBindings, state.lastChanged) ? {} : null;
    });
    return React.createElement(CellComponent, __assign({}, props, { selected, active, copied, dragging, mode, data, select: select$1, activate: activate$1, setCellDimensions: setCellDimensions$1, setCellData: setCellData$1 }));
  };
};
var TRUE_TEXT = "TRUE";
var FALSE_TEXT = "FALSE";
var DataViewer = function(_a) {
  var cell = _a.cell, formulaParser = _a.formulaParser;
  var value = getComputedValue({ cell, formulaParser });
  return typeof value === "boolean" ? React.createElement("span", { className: "Spreadsheet__data-viewer Spreadsheet__data-viewer--boolean" }, convertBooleanToText(value)) : React.createElement("span", { className: "Spreadsheet__data-viewer" }, value);
};
function convertBooleanToText(value) {
  return value ? TRUE_TEXT : FALSE_TEXT;
}
var DataEditor = function(_a) {
  var _b;
  var onChange = _a.onChange, cell = _a.cell;
  var inputRef = React.useRef(null);
  var handleChange = React.useCallback(function(event) {
    onChange(__assign(__assign({}, cell), { value: event.target.value }));
  }, [onChange, cell]);
  React.useEffect(function() {
    if (inputRef.current) {
      moveCursorToEnd(inputRef.current);
    }
  }, [inputRef]);
  var value = (_b = cell === null || cell === void 0 ? void 0 : cell.value) !== null && _b !== void 0 ? _b : "";
  return React.createElement(
    "div",
    { className: "Spreadsheet__data-editor" },
    React.createElement("input", { ref: inputRef, type: "text", onChange: handleChange, value, autoFocus: true })
  );
};
var ActiveCell = function(props) {
  var rootRef = React.useRef(null);
  var getBindingsForCell2 = props.getBindingsForCell;
  var dispatch = useDispatch();
  var setCellData$1 = React.useCallback(function(active2, data) {
    return dispatch(setCellData(active2, data, getBindingsForCell2));
  }, [dispatch, getBindingsForCell2]);
  var edit2 = React.useCallback(function() {
    return dispatch(edit$1());
  }, [dispatch]);
  var commit2 = React.useCallback(function(changes) {
    return dispatch(commit$1(changes));
  }, [dispatch]);
  var view2 = React.useCallback(function() {
    dispatch(view$1());
  }, [dispatch]);
  var active = useSelector(function(state) {
    return state.active;
  });
  var mode = useSelector(function(state) {
    return state.mode;
  });
  var cell = useSelector(function(state) {
    return state.active ? get(state.active, state.data) : void 0;
  });
  var dimensions = useSelector(function(state) {
    return active ? getCellDimensions(active, state.rowDimensions, state.columnDimensions) : void 0;
  });
  var hidden = React.useMemo(function() {
    return !active || !dimensions;
  }, [active, dimensions]);
  var initialCellRef = React.useRef(void 0);
  var prevActiveRef = React.useRef(null);
  var prevCellRef = React.useRef(void 0);
  var handleChange = React.useCallback(function(cell2) {
    if (!active) {
      return;
    }
    setCellData$1(active, cell2);
  }, [setCellData$1, active]);
  React.useEffect(function() {
    var root = rootRef.current;
    if (!hidden && root) {
      root.focus();
    }
  }, [rootRef, hidden]);
  React.useEffect(function() {
    var prevActive = prevActiveRef.current;
    var prevCell = prevCellRef.current;
    prevActiveRef.current = active;
    prevCellRef.current = cell;
    if (!prevActive || !prevCell) {
      return;
    }
    var coordsChanged = (active === null || active === void 0 ? void 0 : active.row) !== prevActive.row || (active === null || active === void 0 ? void 0 : active.column) !== prevActive.column;
    var exitedEditMode = mode !== "edit";
    if (coordsChanged || exitedEditMode) {
      var initialCell = initialCellRef.current;
      if (prevCell !== initialCell) {
        commit2([
          {
            prevCell: initialCell || null,
            nextCell: prevCell
          }
        ]);
      } else if (!coordsChanged && cell !== prevCell) {
        commit2([
          {
            prevCell,
            nextCell: cell || null
          }
        ]);
      }
      initialCellRef.current = cell;
    }
  });
  var DataEditor2 = cell && cell.DataEditor || props.DataEditor;
  var readOnly = cell && cell.readOnly;
  return hidden ? null : React.createElement("div", { ref: rootRef, className: (0, import_classnames.default)("Spreadsheet__active-cell", "Spreadsheet__active-cell--" + mode), style: dimensions, onClick: mode === "view" && !readOnly ? edit2 : void 0, tabIndex: 0 }, mode === "edit" && active && React.createElement(DataEditor2, {
    row: active.row,
    column: active.column,
    cell,
    // @ts-ignore
    onChange: handleChange,
    exitEditMode: view2
  }));
};
var FloatingRect = function(_a) {
  var _b;
  var dimensions = _a.dimensions, dragging = _a.dragging, hidden = _a.hidden, variant = _a.variant;
  var _c = dimensions || {}, width = _c.width, height = _c.height, top = _c.top, left = _c.left;
  return React.createElement("div", { className: (0, import_classnames.default)("Spreadsheet__floating-rect", (_b = {}, _b["Spreadsheet__floating-rect--" + variant] = variant, _b["Spreadsheet__floating-rect--dragging"] = dragging, _b["Spreadsheet__floating-rect--hidden"] = hidden, _b)), style: { width, height, top, left } });
};
var Selected = function() {
  var selected = useSelector(function(state) {
    return state.selected;
  });
  var dimensions = useSelector(function(state) {
    return selected && getSelectedDimensions(state.rowDimensions, state.columnDimensions, state.data, state.selected);
  });
  var dragging = useSelector(function(state) {
    return state.dragging;
  });
  var hidden = useSelector(function(state) {
    return size(state.selected, state.data) < 2;
  });
  return React.createElement(FloatingRect, { variant: "selected", dimensions, dragging, hidden });
};
var Copied = function() {
  var range2 = useSelector(function(state) {
    return getCopiedRange(state.copied, state.hasPasted);
  });
  var dimensions = useSelector(function(state) {
    return range2 && getRangeDimensions(state.rowDimensions, state.columnDimensions, range2);
  });
  var hidden = range2 === null;
  return React.createElement(FloatingRect, { variant: "copied", dimensions, hidden, dragging: false });
};
var getBindingsForCell = function(cell, data) {
  if (!isFormulaValue(cell.value)) {
    return [];
  }
  var formula = cell.value;
  var references = getReferences(formula);
  return (0, import_array_prototype.default)(references, function(coords) {
    var dependency = get(coords, data);
    var dependencyBindings = dependency ? getBindingsForCell(dependency, data) : [];
    return __spreadArray2([coords], __read(dependencyBindings));
  });
};
function styleInject(css, ref) {
  if (ref === void 0)
    ref = {};
  var insertAt = ref.insertAt;
  if (!css || typeof document === "undefined") {
    return;
  }
  var head = document.head || document.getElementsByTagName("head")[0];
  var style = document.createElement("style");
  style.type = "text/css";
  if (insertAt === "top") {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }
  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}
var css_248z = ".Spreadsheet {\n  --background-color: white;\n  --text-color: black;\n  --readonly-text-color: rgba(0, 0, 0, 0.4);\n  --outline-color: #4285f4;\n  --outline-background-color: rgba(160, 195, 255, 0.2);\n  --border-color: hsl(2deg, 0%, 91%);\n  --header-background-color: rgba(0, 0, 0, 0.04);\n  --elevation: 0 2px 5px rgba(0, 0, 0, 0.4);\n\n  position: relative;\n  overflow: visible;\n  background: var(--background-color);\n  color: var(--text-color);\n  display: inline-block;\n}\n\n.Spreadsheet--dark-mode {\n  --background-color: black;\n  --text-color: white;\n  --readonly-text-color: rgba(255, 255, 255, 0.4);\n  --header-background-color: rgba(255, 255, 255, 0.04);\n  --border-color: hsl(2deg, 0%, 19%);\n}\n\n.Spreadsheet__active-cell {\n  position: absolute;\n  border: 2px solid var(--outline-color);\n  box-sizing: border-box;\n}\n\n.Spreadsheet__active-cell--edit {\n  background: var(--background-color);\n  box-shadow: var(--elevation);\n}\n\n.Spreadsheet__table {\n  border-collapse: collapse;\n  table-layout: fixed;\n}\n\n.Spreadsheet__cell,\n.Spreadsheet__active-cell {\n  cursor: cell;\n}\n\n.Spreadsheet__cell {\n  outline: none;\n}\n\n.Spreadsheet__cell--readonly {\n  color: var(--readonly-text-color);\n}\n\n.Spreadsheet__cell,\n.Spreadsheet__header {\n  min-width: 6em;\n  min-height: 1.9em;\n  height: 1.9em;\n  max-height: 1.9em;\n  border: 1px solid var(--border-color);\n  overflow: hidden;\n  word-break: keep-all;\n  white-space: nowrap;\n  text-align: left;\n  box-sizing: border-box;\n  user-select: none;\n}\n\n.Spreadsheet__header {\n  background: var(--header-background-color);\n  color: var(--readonly-text-color);\n  text-align: center;\n  font: inherit;\n}\n\n.Spreadsheet__header--selected {\n  background: #5f6268;\n  color: #fff;\n}\n\n.Spreadsheet__header,\n.Spreadsheet__data-viewer,\n.Spreadsheet__data-editor input {\n  padding: 4px;\n  box-sizing: border-box;\n}\n\n.Spreadsheet__data-editor,\n.Spreadsheet__data-editor input {\n  width: 100%;\n  height: 100%;\n}\n\n.Spreadsheet__data-editor input {\n  font: inherit;\n  color: inherit;\n  background: none;\n  border: none;\n  outline: none;\n  margin: 0;\n}\n\n.Spreadsheet__data-viewer--boolean {\n  text-align: center;\n}\n\n.Spreadsheet__floating-rect {\n  position: absolute;\n  pointer-events: none;\n  box-sizing: border-box;\n}\n\n.Spreadsheet__floating-rect--hidden {\n  display: none;\n}\n\n.Spreadsheet__floating-rect--selected {\n  background: var(--outline-background-color);\n  border: 2px var(--outline-color) solid;\n}\n\n.Spreadsheet__floating-rect--dragging {\n  border: none;\n}\n\n.Spreadsheet__floating-rect--copied {\n  border: 2px var(--outline-color) dashed;\n}\n";
styleInject(css_248z);
var Spreadsheet = function(props) {
  var className = props.className, darkMode = props.darkMode, columnLabels = props.columnLabels, rowLabels = props.rowLabels, hideColumnIndicators = props.hideColumnIndicators, hideRowIndicators = props.hideRowIndicators, onKeyDown = props.onKeyDown, _a = props.Table, Table$1 = _a === void 0 ? Table : _a, _b = props.Row, Row$1 = _b === void 0 ? Row : _b, _c = props.HeaderRow, HeaderRow$1 = _c === void 0 ? HeaderRow : _c, _d = props.DataEditor, DataEditor$1 = _d === void 0 ? DataEditor : _d, _e = props.DataViewer, DataViewer$1 = _e === void 0 ? DataViewer : _e, _f = props.getBindingsForCell, getBindingsForCell$1 = _f === void 0 ? getBindingsForCell : _f, _g = props.onChange, onChange = _g === void 0 ? function() {
  } : _g, _h = props.onModeChange, onModeChange = _h === void 0 ? function() {
  } : _h, _j = props.onSelect, onSelect = _j === void 0 ? function() {
  } : _j, _k = props.onActivate, onActivate = _k === void 0 ? function() {
  } : _k, _l = props.onBlur, onBlur = _l === void 0 ? function() {
  } : _l, _m = props.onCellCommit, onCellCommit = _m === void 0 ? function() {
  } : _m;
  var initialState = React.useMemo(function() {
    return __assign(__assign({}, INITIAL_STATE), { data: props.data });
  }, [props.data]);
  var reducerElements = React.useReducer(reducer, initialState);
  var _o = __read(reducerElements, 2), state = _o[0], dispatch = _o[1];
  var size2 = React.useMemo(function() {
    return calculateSpreadsheetSize(state.data, rowLabels, columnLabels);
  }, [state.data, rowLabels, columnLabels]);
  var mode = state.mode;
  var rootRef = React.useRef(null);
  var prevStateRef = React.useRef(__assign(__assign({}, INITIAL_STATE), { data: props.data, selected: null, copied: from$1([]), bindings: from$1([]), lastCommit: null }));
  var copy$1 = React.useCallback(function() {
    return dispatch(copy());
  }, [dispatch]);
  var cut$1 = React.useCallback(function() {
    return dispatch(cut());
  }, [dispatch]);
  var paste$1 = React.useCallback(function(data) {
    return dispatch(paste(data));
  }, [dispatch]);
  var onKeyDownAction = React.useCallback(function(event) {
    return dispatch(keyDown(event));
  }, [dispatch]);
  var onKeyPress = React.useCallback(function(event) {
    return dispatch(keyPress(event));
  }, [dispatch]);
  var onDragStart = React.useCallback(function() {
    return dispatch(dragStart());
  }, [dispatch]);
  var onDragEnd = React.useCallback(function() {
    return dispatch(dragEnd());
  }, [dispatch]);
  var setData$1 = React.useCallback(function(data) {
    return dispatch(setData(data));
  }, [dispatch]);
  var blur2 = React.useCallback(function() {
    return dispatch(blur$1());
  }, [dispatch]);
  React.useEffect(function() {
    var e_1, _a2;
    var prevState = prevStateRef.current;
    if (state.lastCommit && state.lastCommit !== prevState.lastCommit) {
      try {
        for (var _b2 = __values(state.lastCommit), _c2 = _b2.next(); !_c2.done; _c2 = _b2.next()) {
          var change = _c2.value;
          onCellCommit(change.prevCell, change.nextCell, state.lastChanged);
        }
      } catch (e_1_1) {
        e_1 = { error: e_1_1 };
      } finally {
        try {
          if (_c2 && !_c2.done && (_a2 = _b2["return"]))
            _a2.call(_b2);
        } finally {
          if (e_1)
            throw e_1.error;
        }
      }
    }
    if (state.data !== prevState.data) {
      if (state.data !== props.data) {
        onChange(state.data);
      }
    }
    if (state.selected !== prevState.selected) {
      var points = getPoints(state.selected, state.data);
      onSelect(points);
    }
    if (state.mode !== prevState.mode) {
      onModeChange(state.mode);
    }
    if (state.active !== prevState.active) {
      if (state.active) {
        onActivate(state.active);
      } else {
        var root = rootRef.current;
        if (root && isFocusedWithin(root) && document.activeElement) {
          document.activeElement.blur();
        }
        onBlur();
      }
    }
    prevStateRef.current = state;
  }, [
    props.data,
    state,
    onActivate,
    onBlur,
    onCellCommit,
    onChange,
    onModeChange,
    onSelect,
    rowLabels,
    columnLabels
  ]);
  React.useEffect(function() {
    var prevState = prevStateRef.current;
    if (props.data !== prevState.data) {
      setData$1(props.data);
    }
  }, [props.data, setData$1]);
  var clip = React.useCallback(function(event) {
    var data = state.data, selected = state.selected;
    var selectedData = getSelectionFromMatrix(selected, data);
    var csv = getCSV(selectedData);
    writeTextToClipboard(event, csv);
  }, [state]);
  var handleCut = React.useCallback(function(event) {
    if (shouldHandleClipboardEvent(rootRef.current, mode)) {
      event.preventDefault();
      event.stopPropagation();
      clip(event);
      cut$1();
    }
  }, [mode, clip, cut$1]);
  var handleCopy = React.useCallback(function(event) {
    if (shouldHandleClipboardEvent(rootRef.current, mode)) {
      event.preventDefault();
      event.stopPropagation();
      clip(event);
      copy$1();
    }
  }, [mode, clip, copy$1]);
  var handlePaste = React.useCallback(function(event) {
    if (shouldHandleClipboardEvent(rootRef.current, mode)) {
      event.preventDefault();
      event.stopPropagation();
      if (event.clipboardData) {
        var text = readTextFromClipboard(event);
        paste$1(text);
      }
    }
  }, [mode, paste$1]);
  var handleKeyDown = React.useCallback(function(event) {
    event.persist();
    if (onKeyDown) {
      onKeyDown(event);
    }
    if (!event.defaultPrevented) {
      if (hasKeyDownHandler(state, event)) {
        event.nativeEvent.preventDefault();
      }
      onKeyDownAction(event);
    }
  }, [state, onKeyDown, onKeyDownAction]);
  var handleMouseUp = React.useCallback(function() {
    onDragEnd();
    document.removeEventListener("mouseup", handleMouseUp);
  }, [onDragEnd]);
  var handleMouseMove = React.useCallback(function(event) {
    if (!state.dragging && event.buttons === 1) {
      onDragStart();
      document.addEventListener("mouseup", handleMouseUp);
    }
  }, [state, onDragStart, handleMouseUp]);
  var handleBlur = React.useCallback(function(event) {
    if (!event.currentTarget.contains(event.relatedTarget)) {
      blur2();
    }
  }, [blur2]);
  var formulaParser = React.useMemo(function() {
    return props.formulaParser || new parser_default();
  }, [props.formulaParser]);
  var Cell$1 = React.useMemo(function() {
    return enhance(props.Cell || Cell);
  }, [props.Cell]);
  var CornerIndicator$1 = React.useMemo(function() {
    return enhance$3(props.CornerIndicator || CornerIndicator);
  }, [props.CornerIndicator]);
  var RowIndicator$1 = React.useMemo(function() {
    return enhance$1(props.RowIndicator || RowIndicator);
  }, [props.RowIndicator]);
  var ColumnIndicator$1 = React.useMemo(function() {
    return enhance$2(props.ColumnIndicator || ColumnIndicator);
  }, [props.ColumnIndicator]);
  React.useEffect(function() {
    document.addEventListener("cut", handleCut);
    document.addEventListener("copy", handleCopy);
    document.addEventListener("paste", handlePaste);
    return function() {
      document.removeEventListener("cut", handleCut);
      document.removeEventListener("copy", handleCopy);
      document.removeEventListener("paste", handlePaste);
    };
  }, [handleCut, handleCopy, handlePaste]);
  React.useEffect(function() {
    formulaParser.on("callCellValue", function(cellCoord, done) {
      var value;
      try {
        var point = transformCoordToPoint(cellCoord);
        var data = state.data;
        value = getCellValue(formulaParser, data, point);
      } catch (error2) {
        console.error(error2);
      } finally {
        done(value);
      }
    });
    formulaParser.on("callRangeValue", function(startCellCoord, endCellCoord, done) {
      var startPoint = transformCoordToPoint(startCellCoord);
      var endPoint = transformCoordToPoint(endCellCoord);
      var data = state.data;
      var values;
      try {
        values = getCellRangeValue(formulaParser, data, startPoint, endPoint);
      } catch (error2) {
        console.error(error2);
      } finally {
        done(values);
      }
    });
  }, [formulaParser, state, handleCut, handleCopy, handlePaste]);
  var tableNode = React.useMemo(function() {
    return React.createElement(
      Table$1,
      { columns: size2.columns, hideColumnIndicators },
      React.createElement(
        HeaderRow$1,
        null,
        !hideRowIndicators && !hideColumnIndicators && React.createElement(CornerIndicator$1, null),
        !hideColumnIndicators && range(size2.columns).map(function(columnNumber) {
          return columnLabels ? React.createElement(ColumnIndicator$1, { key: columnNumber, column: columnNumber, label: columnNumber in columnLabels ? columnLabels[columnNumber] : null }) : React.createElement(ColumnIndicator$1, { key: columnNumber, column: columnNumber });
        })
      ),
      range(size2.rows).map(function(rowNumber) {
        return React.createElement(
          Row$1,
          { key: rowNumber, row: rowNumber },
          !hideRowIndicators && (rowLabels ? React.createElement(RowIndicator$1, { key: rowNumber, row: rowNumber, label: rowNumber in rowLabels ? rowLabels[rowNumber] : null }) : React.createElement(RowIndicator$1, { key: rowNumber, row: rowNumber })),
          range(size2.columns).map(function(columnNumber) {
            return React.createElement(Cell$1, {
              key: columnNumber,
              row: rowNumber,
              column: columnNumber,
              // @ts-ignore
              DataViewer: DataViewer$1,
              formulaParser,
              // @ts-ignore
              getBindingsForCell: getBindingsForCell$1
            });
          })
        );
      })
    );
  }, [
    Table$1,
    size2.rows,
    size2.columns,
    hideColumnIndicators,
    Row$1,
    HeaderRow$1,
    hideRowIndicators,
    CornerIndicator$1,
    columnLabels,
    ColumnIndicator$1,
    rowLabels,
    RowIndicator$1,
    Cell$1,
    DataViewer$1,
    formulaParser,
    getBindingsForCell$1
  ]);
  var activeCellNode = React.useMemo(function() {
    return React.createElement(
      ActiveCell,
      {
        // @ts-ignore
        DataEditor: DataEditor$1,
        // @ts-ignore
        getBindingsForCell: getBindingsForCell$1
      }
    );
  }, [DataEditor$1, getBindingsForCell$1]);
  var rootNode = React.useMemo(function() {
    return React.createElement(
      "div",
      { ref: rootRef, className: (0, import_classnames.default)("Spreadsheet", className, {
        "Spreadsheet--dark-mode": darkMode
      }), onKeyPress, onKeyDown: handleKeyDown, onMouseMove: handleMouseMove, onBlur: handleBlur },
      tableNode,
      activeCellNode,
      React.createElement(Selected, null),
      React.createElement(Copied, null)
    );
  }, [
    className,
    darkMode,
    onKeyPress,
    handleKeyDown,
    handleMouseMove,
    handleBlur,
    tableNode,
    activeCellNode
  ]);
  return React.createElement(context.Provider, { value: reducerElements }, rootNode);
};
export {
  DataEditor,
  DataViewer,
  Spreadsheet,
  createEmpty as createEmptyMatrix,
  Spreadsheet as default,
  getComputedValue
};
/*! Bundled license information:

classnames/index.js:
  (*!
  	Copyright (c) 2018 Jed Watson.
  	Licensed under the MIT License (MIT), see
  	http://jedwatson.github.io/classnames
  *)

react-spreadsheet/dist/es/index.js:
  (*! *****************************************************************************
  Copyright (c) Microsoft Corporation.
  
  Permission to use, copy, modify, and/or distribute this software for any
  purpose with or without fee is hereby granted.
  
  THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
  REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
  AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
  INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
  LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
  OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
  PERFORMANCE OF THIS SOFTWARE.
  ***************************************************************************** *)
*/
//# sourceMappingURL=react-spreadsheet.js.map
