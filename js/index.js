var _createClass = function () {function defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}return function (Constructor, protoProps, staticProps) {if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;};}();function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}function _toConsumableArray(arr) {if (Array.isArray(arr)) {for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {arr2[i] = arr[i];}return arr2;} else {return Array.from(arr);}}function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self, call) {if (!self) {throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call && (typeof call === "object" || typeof call === "function") ? call : self;}function _inherits(subClass, superClass) {if (typeof superClass !== "function" && superClass !== null) {throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;}var App = function (_React$Component) {_inherits(App, _React$Component);function App() {_classCallCheck(this, App);return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));}_createClass(App, [{ key: "render", value: function render()
    {
      return (
        React.createElement("div", null,
          React.createElement(HeadingLine, null),
          React.createElement("form", { id: "submitData", onSubmit: this.props.handleFormSubmit },
            React.createElement("div", { "class": "inputdata1" },
              React.createElement("label", null, "Name : "),


              React.createElement("label", null, "Job : "),
              React.createElement("label", null, "Phone : "),
              React.createElement("label", null, "Email : ")),

            React.createElement("div", { "class": "inputdata2" },
              React.createElement("input", { id: "name", value: this.props.newName, type: "text", name: "name", onChange: this.props.handleInputChange }),
              React.createElement("input", { id: "job", value: this.props.newJob, type: "text", name: "job", onChange: this.props.handleInputChange }),
              React.createElement("input", { id: "phone", value: this.props.newPhone, type: "number", name: "phone", onChange: this.props.handleInputChange }),
              React.createElement("input", { id: "email", value: this.props.newEmail, type: "email", name: "email", onChange: this.props.handleInputChange })),

            React.createElement("div", { id: "btn" },
              React.createElement("button", { type: "submit", value: "Submit" }, "Submit")))));





    } }]);return App;}(React.Component);var

Table = function (_React$Component2) {_inherits(Table, _React$Component2);function Table() {_classCallCheck(this, Table);return _possibleConstructorReturn(this, (Table.__proto__ || Object.getPrototypeOf(Table)).apply(this, arguments));}_createClass(Table, [{ key: "render", value: function render()
    {
      var items = this.props.items;
      return (
        React.createElement("div", { id: "table1" },
          React.createElement("table", null,
            React.createElement("tbody", null,
              React.createElement("tr", null,
                React.createElement("th", null, "Name"),
                React.createElement("th", null, "Job"),
                React.createElement("th", null, "Phone"),
                React.createElement("th", null, "Email")),

              items.map(function (item) {
                return (
                  React.createElement("tr", null,
                    React.createElement("td", null, item.name),
                    React.createElement("td", null, item.job),
                    React.createElement("td", null, item.phone),
                    React.createElement("td", null, item.email)));


              })))));




    } }]);return Table;}(React.Component);var

HeadingLine = function (_React$Component3) {_inherits(HeadingLine, _React$Component3);function HeadingLine() {_classCallCheck(this, HeadingLine);return _possibleConstructorReturn(this, (HeadingLine.__proto__ || Object.getPrototypeOf(HeadingLine)).apply(this, arguments));}_createClass(HeadingLine, [{ key: "render", value: function render()
    {
      return (
        React.createElement("div", { id: "navbar" },
          React.createElement("h1", null, "Company Name")));



    } }]);return HeadingLine;}(React.Component);var


Main = function (_React$Component4) {_inherits(Main, _React$Component4);
  function Main() {_classCallCheck(this, Main);var _this4 = _possibleConstructorReturn(this, (Main.__proto__ || Object.getPrototypeOf(Main)).call(this));_this4.











    handleFormSubmit = function (e) {
      e.preventDefault();

      var items = [].concat(_toConsumableArray(_this4.state.items));

      items.push({ name: _this4.state.name, job: _this4.state.job, phone: _this4.state.phone, email: _this4.state.email });

      _this4.setState({
        items: items,
        name: '',
        job: '',
        phone: '',
        email: '' });

    };_this4.

    handleInputChange = function (e) {
      var input = e.target;
      var name = e.target.name;
      var value = input.value;

      _this4.setState(_defineProperty({},
      name, value));

    };_this4.state = { name: '', job: '', phone: '', email: '', items: [] };return _this4;}_createClass(Main, [{ key: "render", value: function render()

    {
      return (
        React.createElement("div", { className: "Main" },
          React.createElement(App, { handleFormSubmit: this.handleFormSubmit, handleInputChange: this.handleInputChange, newName: this.state.name, newJob: this.state.job, newPhone: this.state.phone, newEmail: this.state.email }),
          React.createElement(Table, { items: this.state.items })));


    } }]);return Main;}(React.Component);

ReactDOM.render(React.createElement(Main, null), document.getElementById('root'));