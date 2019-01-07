import React, { Component, createRef } from "react";
import $ from "jquery";
import Display from "./display";
import "./App.css";

window.jQuery = $;
window.$ = $;

require("jquery-ui-sortable");
require("formBuilder");
require("formBuilder/dist/form-render.min");

const formData = [];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      datatype: ""
    };
  }
  form = createRef();
  formRenderer = createRef();
  componentDidMount() {
    console.log(this.formRenderer);
    console.log($(this.formRenderer.current));
    this.formInstance = $(this.form.current).formBuilder({
      formData,
      onSave: (evt, data) => {
        console.log(data);
        $(this.formRenderer.current).formRender({ formData: data });
      }
    });
  }
  render() {
    return (
      <div id="form-editor" ref={this.form}>
        <form id="form-render" ref={this.formRenderer} />
      </div>
    );
  }
}

export default App;
