"use strict";

var _babelPolyfill = require("babel-polyfill");

var _babelPolyfill2 = _interopRequireDefault(_babelPolyfill);

var _isomorphicFetch = require("isomorphic-fetch");

var _isomorphicFetch2 = _interopRequireDefault(_isomorphicFetch);

var _reactDom = require("react-dom");

var _reactDom2 = _interopRequireDefault(_reactDom);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// universal utils: cache, fetch, store, resource, fetcher, router, vdom, etc
// import * as u from 'universal-utils'

// the following line, if uncommented, will enable browserify to push
// a changed fn to you, with source maps (reverse map from compiled
// code line # to source code line #), in realtime via websockets
// -- browserify-hmr having install issues right now
// if (module.hot) {
//     module.hot.accept()
//     module.hot.dispose(() => {
//         app()
//     })
// }

// es5, 6, and 7 polyfills, powered by babel


function app() {
    // start app
    // new Router()
    var AppView = _react2.default.createClass({
        displayName: "AppView",

        render: function render() {
            return _react2.default.createElement(
                "div",
                { className: "pageContainer" },
                _react2.default.createElement("img", { className: "cityScape", src: "http://magentanova.github.io/html-intro-1/images/houston.jpg" }),
                _react2.default.createElement("img", { className: "logoImage", src: "http://magentanova.github.io/html-intro-1/images/ironyardlogo.png" }),
                _react2.default.createElement(DescriptionColumn, null),
                _react2.default.createElement(BlogColumn, null)
            );
        }
    });

    var DescriptionColumn = _react2.default.createClass({
        displayName: "DescriptionColumn",

        render: function render() {
            return _react2.default.createElement(
                "div",
                { className: "descCol" },
                _react2.default.createElement(
                    "h3",
                    null,
                    " THE IRON YARD | HOUSTON "
                ),
                _react2.default.createElement(
                    "p",
                    { className: "searchDesc" },
                    " Happenings and updates from The Iron Yard in Houston, TX"
                ),
                _react2.default.createElement(
                    "p",
                    { className: "searchSub" },
                    "SEARCH"
                ),
                _react2.default.createElement("input", { className: "searchBar", value: "Search Keyword" })
            );
        }
    });

    var BlogColumn = _react2.default.createClass({
        displayName: "BlogColumn",

        render: function render() {
            return _react2.default.createElement(
                "div",
                { className: "blogCol" },
                _react2.default.createElement(
                    "h1",
                    null,
                    "September 22 Starts a New Class of The Iron Yard Houston Students"
                ),
                _react2.default.createElement(
                    "p",
                    null,
                    _react2.default.createElement(
                        "i",
                        null,
                        "By Brian Dorton, Campus Director at ",
                        _react2.default.createElement(
                            "a",
                            { href: "https://www.theironyard.com" },
                            " The Iron Yard"
                        ),
                        " Houston"
                    )
                ),
                _react2.default.createElement("img", { src: "http://magentanova.github.io/html-intro-1/images/classroom.jpg" }),
                _react2.default.createElement(
                    "p",
                    null,
                    "Sockeye salmon. Saber-toothed blenny flagfish banded killifish dragonfish goldeye boga fathead sculpin sargassum fish. Unicorn fish sandperch zebra bullhead shark Atlantic saury. Panga goby, “darter tripletail,” barreleye walleye rockweed gunnel southern flounder. Sockeye salmon. Saber-toothed blenny flagfish banded killifish dragonfish goldeye boga fathead sculpin sargassum fish. Unicorn fish sandperch zebra bullhead shark Atlantic saury. Panga goby, “darter tripletail,” barreleye walleye rockweed."
                )
            );
        }
    });

    _reactDom2.default.render(_react2.default.createElement(AppView, null), document.querySelector('.container'));
}

//
// fetch method, returns es6 promises
// if you uncomment 'universal-utils' below, you can comment out this line


app();