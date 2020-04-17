import React from "react";
import { Formik, Form, Field } from "formik";
import axios from "axios";

const MainForm = ({ getValue }) => {
  return (
    <div className="form">
      <Formik
        initialValues={{ name: "", age: "", height: "" }}
        onSubmit={(values, { resetForm }) => {
          const { name, age, height } = values;
          const obj = {
            name,
            age,
            height,
            id: new Date().toLocaleTimeString(),
          };
          axios.post("http://localhost:3333/smurfs", obj).then((res) => {
            console.log(res);
          });
          getValue(obj);
          resetForm();
        }}
      >
        {() => (
          <Form>
            <label htmlFor="name">
              <Field type="text" name="name" id="name" placeholder="name" />
            </label>
            <label htmlFor="age">
              <Field type="text" name="age" id="age" placeholder="age" />
            </label>
            <label htmlFor="height">
              <Field
                type="text"
                name="height"
                id="height"
                placeholder="height"
              />
            </label>
            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default MainForm;
