(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[6],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/dashboard/residents/residents.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/dashboard/residents/residents.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  data: function data() {\n    return {\n      residents: []\n    };\n  },\n  mounted: function mounted() {},\n  methods: {\n    myProvider: function myProvider(ctx, callback) {\n      this.$store.dispatch('User/Resident').then(function (response) {\n        console.log(response.data);\n        var data = response.data;\n        var items = [];\n        data.forEach(function (element) {\n          items.push({\n            name: element.first_name + ' ' + element.middle_name + ' ' + element.last_name,\n            email: element.email,\n            date_of_birth: element.dob,\n            action: ''\n          });\n        });\n        callback(items); // return (items);\n      }).catch(function (err) {\n        console.log(err);\n      });\n    }\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/IS4vcmVzb3VyY2VzL2pzL3BhZ2VzL2Rhc2hib2FyZC9yZXNpZGVudHMvcmVzaWRlbnRzLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyYuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvcGFnZXMvZGFzaGJvYXJkL3Jlc2lkZW50cy9yZXNpZGVudHMudnVlPzEwNWMiXSwic291cmNlc0NvbnRlbnQiOlsiLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuZXhwb3J0IGRlZmF1bHQge1xuICBkYXRhOiBmdW5jdGlvbiBkYXRhKCkge1xuICAgIHJldHVybiB7XG4gICAgICByZXNpZGVudHM6IFtdXG4gICAgfTtcbiAgfSxcbiAgbW91bnRlZDogZnVuY3Rpb24gbW91bnRlZCgpIHt9LFxuICBtZXRob2RzOiB7XG4gICAgbXlQcm92aWRlcjogZnVuY3Rpb24gbXlQcm92aWRlcihjdHgsIGNhbGxiYWNrKSB7XG4gICAgICB0aGlzLiRzdG9yZS5kaXNwYXRjaCgnVXNlci9SZXNpZGVudCcpLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlLmRhdGEpO1xuICAgICAgICB2YXIgZGF0YSA9IHJlc3BvbnNlLmRhdGE7XG4gICAgICAgIHZhciBpdGVtcyA9IFtdO1xuICAgICAgICBkYXRhLmZvckVhY2goZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICAgICAgICBpdGVtcy5wdXNoKHtcbiAgICAgICAgICAgIG5hbWU6IGVsZW1lbnQuZmlyc3RfbmFtZSArICcgJyArIGVsZW1lbnQubWlkZGxlX25hbWUgKyAnICcgKyBlbGVtZW50Lmxhc3RfbmFtZSxcbiAgICAgICAgICAgIGVtYWlsOiBlbGVtZW50LmVtYWlsLFxuICAgICAgICAgICAgZGF0ZV9vZl9iaXJ0aDogZWxlbWVudC5kb2IsXG4gICAgICAgICAgICBhY3Rpb246ICcnXG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgICBjYWxsYmFjayhpdGVtcyk7IC8vIHJldHVybiAoaXRlbXMpO1xuICAgICAgfSkuY2F0Y2goZnVuY3Rpb24gKGVycikge1xuICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG59OyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/dashboard/residents/residents.vue?vue&type=script&lang=js&\n");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/dashboard/residents/residents.vue?vue&type=template&id=2c0e5eba&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/dashboard/residents/residents.vue?vue&type=template&id=2c0e5eba& ***!
  \***************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function () {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\n    \"div\",\n    {},\n    [\n      _c(\"b-modal\", { attrs: { id: \"EditResident\", title: \"BootstrapVue\" } }, [\n        _c(\"p\", { staticClass: \"my-4\" }, [_vm._v(\"Hello from modal!\")]),\n      ]),\n      _vm._v(\" \"),\n      _c(\"div\", { staticClass: \"row\" }, [\n        _c(\"div\", { staticClass: \"col-lg-12 grid-margin stretch-card\" }, [\n          _c(\"div\", { staticClass: \"card\" }, [\n            _c(\n              \"div\",\n              { staticClass: \"card-body\" },\n              [\n                _c(\"b-table\", {\n                  attrs: {\n                    striped: \"\",\n                    responsive: \"\",\n                    hover: \"\",\n                    items: _vm.myProvider,\n                  },\n                  scopedSlots: _vm._u([\n                    {\n                      key: \"cell(action)\",\n                      fn: function () {\n                        return [\n                          _c(\n                            \"b-dropdown\",\n                            {\n                              attrs: {\n                                size: \"lg\",\n                                variant: \"link\",\n                                dropright: \"\",\n                                \"toggle-class\":\n                                  \" focus:bg-gray-200 hover:bg-gray-200 btn btn-sm btn-rounded btn-icon\",\n                                \"no-caret\": \"\",\n                              },\n                              scopedSlots: _vm._u([\n                                {\n                                  key: \"button-content\",\n                                  fn: function () {\n                                    return [\n                                      _c(\"i\", {\n                                        staticClass: \"mdi mdi-dots-vertical\",\n                                      }),\n                                    ]\n                                  },\n                                  proxy: true,\n                                },\n                              ]),\n                            },\n                            [\n                              _vm._v(\" \"),\n                              _c(\"b-dropdown-item\", { attrs: { href: \"#\" } }, [\n                                _vm._v(\"Add Contacts\"),\n                              ]),\n                              _vm._v(\" \"),\n                              _c(\"b-dropdown-item\", { attrs: { href: \"#\" } }, [\n                                _vm._v(\"Edit Details\"),\n                              ]),\n                              _vm._v(\" \"),\n                              _c(\n                                \"b-dropdown-item\",\n                                {\n                                  directives: [\n                                    {\n                                      name: \"b-modal\",\n                                      rawName: \"v-b-modal.EditResident\",\n                                      modifiers: { EditResident: true },\n                                    },\n                                  ],\n                                  attrs: { href: \"#\" },\n                                },\n                                [_vm._v(\"More Details\")]\n                              ),\n                            ],\n                            1\n                          ),\n                        ]\n                      },\n                      proxy: true,\n                    },\n                  ]),\n                }),\n              ],\n              1\n            ),\n          ]),\n        ]),\n      ]),\n    ],\n    1\n  )\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/IS4vcmVzb3VyY2VzL2pzL3BhZ2VzL2Rhc2hib2FyZC9yZXNpZGVudHMvcmVzaWRlbnRzLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0yYzBlNWViYSYuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvcGFnZXMvZGFzaGJvYXJkL3Jlc2lkZW50cy9yZXNpZGVudHMudnVlPzcwNGQiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIHJlbmRlciA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJkaXZcIixcbiAgICB7fSxcbiAgICBbXG4gICAgICBfYyhcImItbW9kYWxcIiwgeyBhdHRyczogeyBpZDogXCJFZGl0UmVzaWRlbnRcIiwgdGl0bGU6IFwiQm9vdHN0cmFwVnVlXCIgfSB9LCBbXG4gICAgICAgIF9jKFwicFwiLCB7IHN0YXRpY0NsYXNzOiBcIm15LTRcIiB9LCBbX3ZtLl92KFwiSGVsbG8gZnJvbSBtb2RhbCFcIildKSxcbiAgICAgIF0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicm93XCIgfSwgW1xuICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbC1sZy0xMiBncmlkLW1hcmdpbiBzdHJldGNoLWNhcmRcIiB9LCBbXG4gICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjYXJkXCIgfSwgW1xuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiY2FyZC1ib2R5XCIgfSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIF9jKFwiYi10YWJsZVwiLCB7XG4gICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICBzdHJpcGVkOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICByZXNwb25zaXZlOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICBob3ZlcjogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgaXRlbXM6IF92bS5teVByb3ZpZGVyLFxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHNjb3BlZFNsb3RzOiBfdm0uX3UoW1xuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAga2V5OiBcImNlbGwoYWN0aW9uKVwiLFxuICAgICAgICAgICAgICAgICAgICAgIGZuOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImItZHJvcGRvd25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplOiBcImxnXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ6IFwibGlua1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkcm9wcmlnaHQ6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidG9nZ2xlLWNsYXNzXCI6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgZm9jdXM6YmctZ3JheS0yMDAgaG92ZXI6YmctZ3JheS0yMDAgYnRuIGJ0bi1zbSBidG4tcm91bmRlZCBidG4taWNvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm5vLWNhcmV0XCI6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2NvcGVkU2xvdHM6IF92bS5fdShbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6IFwiYnV0dG9uLWNvbnRlbnRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbjogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJpXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJtZGkgbWRpLWRvdHMtdmVydGljYWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm94eTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiYi1kcm9wZG93bi1pdGVtXCIsIHsgYXR0cnM6IHsgaHJlZjogXCIjXCIgfSB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIkFkZCBDb250YWN0c1wiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiYi1kcm9wZG93bi1pdGVtXCIsIHsgYXR0cnM6IHsgaHJlZjogXCIjXCIgfSB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIkVkaXQgRGV0YWlsc1wiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImItZHJvcGRvd24taXRlbVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcImItbW9kYWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LWItbW9kYWwuRWRpdFJlc2lkZW50XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGlmaWVyczogeyBFZGl0UmVzaWRlbnQ6IHRydWUgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBocmVmOiBcIiNcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiTW9yZSBEZXRhaWxzXCIpXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIHByb3h5OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICksXG4gICAgICAgICAgXSksXG4gICAgICAgIF0pLFxuICAgICAgXSksXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/dashboard/residents/residents.vue?vue&type=template&id=2c0e5eba&\n");

/***/ }),

/***/ "./resources/js/pages/dashboard/residents/residents.vue":
/*!**************************************************************!*\
  !*** ./resources/js/pages/dashboard/residents/residents.vue ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _residents_vue_vue_type_template_id_2c0e5eba___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./residents.vue?vue&type=template&id=2c0e5eba& */ \"./resources/js/pages/dashboard/residents/residents.vue?vue&type=template&id=2c0e5eba&\");\n/* harmony import */ var _residents_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./residents.vue?vue&type=script&lang=js& */ \"./resources/js/pages/dashboard/residents/residents.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _residents_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _residents_vue_vue_type_template_id_2c0e5eba___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _residents_vue_vue_type_template_id_2c0e5eba___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"resources/js/pages/dashboard/residents/residents.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXNvdXJjZXMvanMvcGFnZXMvZGFzaGJvYXJkL3Jlc2lkZW50cy9yZXNpZGVudHMudnVlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL3BhZ2VzL2Rhc2hib2FyZC9yZXNpZGVudHMvcmVzaWRlbnRzLnZ1ZT85OWMyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vcmVzaWRlbnRzLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0yYzBlNWViYSZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9yZXNpZGVudHMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9yZXNpZGVudHMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJDOlxcXFxVc2Vyc1xcXFxqeWRlMlxcXFxEZXNrdG9wXFxcXEVMT09QXFxcXGVscFxcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCcyYzBlNWViYScpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCcyYzBlNWViYScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCcyYzBlNWViYScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vcmVzaWRlbnRzLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0yYzBlNWViYSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCcyYzBlNWViYScsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicmVzb3VyY2VzL2pzL3BhZ2VzL2Rhc2hib2FyZC9yZXNpZGVudHMvcmVzaWRlbnRzLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQWlCQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./resources/js/pages/dashboard/residents/residents.vue\n");

/***/ }),

/***/ "./resources/js/pages/dashboard/residents/residents.vue?vue&type=script&lang=js&":
/*!***************************************************************************************!*\
  !*** ./resources/js/pages/dashboard/residents/residents.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_residents_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./residents.vue?vue&type=script&lang=js& */ \"./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/dashboard/residents/residents.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_residents_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXNvdXJjZXMvanMvcGFnZXMvZGFzaGJvYXJkL3Jlc2lkZW50cy9yZXNpZGVudHMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9wYWdlcy9kYXNoYm9hcmQvcmVzaWRlbnRzL3Jlc2lkZW50cy52dWU/Y2E1NCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3Jlc2lkZW50cy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vcmVzaWRlbnRzLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./resources/js/pages/dashboard/residents/residents.vue?vue&type=script&lang=js&\n");

/***/ }),

/***/ "./resources/js/pages/dashboard/residents/residents.vue?vue&type=template&id=2c0e5eba&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/pages/dashboard/residents/residents.vue?vue&type=template&id=2c0e5eba& ***!
  \*********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_residents_vue_vue_type_template_id_2c0e5eba___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./residents.vue?vue&type=template&id=2c0e5eba& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/dashboard/residents/residents.vue?vue&type=template&id=2c0e5eba&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_residents_vue_vue_type_template_id_2c0e5eba___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_residents_vue_vue_type_template_id_2c0e5eba___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXNvdXJjZXMvanMvcGFnZXMvZGFzaGJvYXJkL3Jlc2lkZW50cy9yZXNpZGVudHMudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTJjMGU1ZWJhJi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9wYWdlcy9kYXNoYm9hcmQvcmVzaWRlbnRzL3Jlc2lkZW50cy52dWU/Yjk4MyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vcmVzaWRlbnRzLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0yYzBlNWViYSZcIiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./resources/js/pages/dashboard/residents/residents.vue?vue&type=template&id=2c0e5eba&\n");

/***/ })

}]);