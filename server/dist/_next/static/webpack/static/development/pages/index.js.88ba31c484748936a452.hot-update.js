webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var normalize_css_normalize_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! normalize.css/normalize.css */ "./node_modules/normalize.css/normalize.css");
/* harmony import */ var normalize_css_normalize_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(normalize_css_normalize_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _style_style_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../style/style.scss */ "./style/style.scss");
/* harmony import */ var _style_style_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_style_style_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-toastify */ "./node_modules/react-toastify/lib/index.js");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_toastify__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-toastify/dist/ReactToastify.css */ "./node_modules/react-toastify/dist/ReactToastify.css");
/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! nprogress */ "./node_modules/nprogress/nprogress.js");
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(nprogress__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _assets_ill_meet_a_mailbot_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../assets/ill-meet-a-mailbot.png */ "./assets/ill-meet-a-mailbot.png");
/* harmony import */ var _assets_ill_meet_a_mailbot_png__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_assets_ill_meet_a_mailbot_png__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _assets_mailbots_logo_svg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../assets/mailbots-logo.svg */ "./assets/mailbots-logo.svg");
/* harmony import */ var _assets_mailbots_logo_svg__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_assets_mailbots_logo_svg__WEBPACK_IMPORTED_MODULE_9__);
var _jsxFileName = "/Users/reilly/Projects/marketing-site-nextjs/pages/index.js";











function handleRequestAccess(e) {
  e.preventDefault();
  var email = document.getElementById("persons-email").value;
  debugger;
  nprogress__WEBPACK_IMPORTED_MODULE_7___default.a.start();
  axios__WEBPACK_IMPORTED_MODULE_6___default()({
    method: "POST",
    url: "/subscribe",
    data: {
      email: email
    }
  }).then(function (success) {
    nprogress__WEBPACK_IMPORTED_MODULE_7___default.a.done();
    debugger;
    react_toastify__WEBPACK_IMPORTED_MODULE_4__["toast"].success("We added ".concat(email, " to the list!"), {
      position: react_toastify__WEBPACK_IMPORTED_MODULE_4__["toast"].POSITION.TOP_CENTER
    });
  }).catch(function (error) {
    nprogress__WEBPACK_IMPORTED_MODULE_7___default.a.done();
    debugger;
    console.log(error);
    react_toastify__WEBPACK_IMPORTED_MODULE_4__["toast"].error("\"Sorry, we couldn't add you from here! Can you send an email to help+mailbots@humans.fut.io instead?\"", {
      position: react_toastify__WEBPACK_IMPORTED_MODULE_4__["toast"].POSITION.TOP_CENTER
    });
  });
}

/* harmony default export */ __webpack_exports__["default"] = (function () {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "App",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, "MailBots")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_toastify__WEBPACK_IMPORTED_MODULE_4__["ToastContainer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "Nav",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _assets_mailbots_logo_svg__WEBPACK_IMPORTED_MODULE_9___default.a,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "Hero",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, "The Email Bot Platform"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }, "Create, discover and manage bots, AIs and assistants that help people get more done from their inbox."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }, "Sign up for the preview"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      marginTop: 10,
      display: "flex",
      alignItems: "center"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    placeholder: "human@email.com",
    type: "email",
    id: "persons-email",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "btn-primary",
    onClick: handleRequestAccess,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }, "Request access")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "press-release",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "https://cdn-images-1.medium.com/fit/c/100/100/1*6_fgYnisCa9V21mymySIvA.png",
    width: "20",
    align: "middle",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  }), " ", "Read more:", " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "https://medium.com/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: this
  }, "Introducing MailBots: Bots for Email"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "hero-image",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _assets_ill_meet_a_mailbot_png__WEBPACK_IMPORTED_MODULE_8___default.a,
    style: {
      width: 650
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: this
  }))));
});
    (function (Component, route) {
      if(!Component) return
      if (false) {}
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=index.js.88ba31c484748936a452.hot-update.js.map