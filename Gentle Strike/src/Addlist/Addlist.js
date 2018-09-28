import React from "react";
import axios from 'axios';
// import "./PersonList.css";
import Dropzone from 'react-dropzone'

import { Form, Input, Button, Radio } from "antd";
const FormItem = Form.Item;


class FormLayoutDemo extends React.Component {
  constructor() {
    super();
    this.state = {
      formLayout: "horizontal",
      files: [],
      designation: '',
      username : ''

    };
  }

  onDrop(files) {
    this.setState({
      files
    });
  }

  handleFormLayoutChange = e => {
    this.setState({ formLayout: e.target.value });
  };

    handleChange = event => {
    this.setState({ designation: event.target.value,
     username: event.target.value });

  }
    handleSubmit = event => {
    event.preventDefault();

    const user = {
      "username": this.state.username,
      "designation" : this.state.designation
    };
    let formdata
    axios.post(`https://stormy-river-10023.herokuapp.com/employeelist`,  JSON.stringify(user))
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
  }



  render() {
    const { formLayout } = this.state;
    const formItemLayout =
      formLayout === "horizontal"
        ? {
            labelCol: { span: 4 },
            wrapperCol: { span: 14 }
          }
        : null;
    const buttonItemLayout =
      formLayout === "horizontal"
        ? {
            wrapperCol: { span: 14, offset: 4 }
          }
        : null;
    return (
      <div className = "Addlistcss">
        <h2>Employee Form</h2>
        <Form layout={formLayout}onSubmit={this.handleSubmit}>
          <FormItem label="Username" {...formItemLayout}>
            <Input placeholder="input placeholder" onChange={this.handleChange}/>
          </FormItem>
          <FormItem label="Designation" {...formItemLayout}>
            <Input placeholder="input placeholder" onChange={this.handleChange}/>
          </FormItem>

          <section>
        <div className="dropzone">
          <Dropzone onDrop={this.onDrop.bind(this)}>
            <p>Try dropping some files here, or click to select files to upload.</p>
          </Dropzone>
        </div>
      </section>
          <FormItem {...buttonItemLayout}>
            <Button type="primary">Submit</Button>
          </FormItem>
        </Form>
      </div>
    );
  }
}

export default FormLayoutDemo;