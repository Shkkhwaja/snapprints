import React, { useState } from "react";
import { Button, Checkbox, Form, Input } from "antd";
import { AtSign, Lock, MapPin, User2 } from "lucide-react";
import {Link} from "react-router-dom"

export default function SignUp() {
  const [submitting, setSubmitting] = useState(false);

  // Dummy function for form submission
  const onFinish = (values) => {
    setSubmitting(true);
    console.log("Form Submitted: ", values);
    setSubmitting(false);
  };

  return (
    <div className="flex flex-col items-center justify-center h-full my-[8em]">
      <div className="w-[350px] space-y-2 py-3 lg:py-5">
        <h2 className="text-3xl font-semibold">Sign up</h2>
        <h3 className="text-gray-700 font-medium">
          Already have an account?{" "}
            <Link to={"/forms/signin"}><span className="text-blue-500">Sign in</span></Link>
        </h3>
      </div>
      <Form
        name="signup_form"
        className="signup-form w-[350px]"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        size="large"
      >
        <div className="flex gap-2">
          <Form.Item
            name="first_name"
            rules={[{ required: true, message: "Please input your first name!" }]}
          >
            <Input
              prefix={<User2 size={15} strokeWidth={1.5} />}
              placeholder="First Name"
              className="border-gray-500 py-2 text-base"
            />
          </Form.Item>

          <Form.Item
            name="last_name"
            rules={[{ required: true, message: "Please input your last name!" }]}
          >
            <Input
              prefix={<User2 size={15} strokeWidth={1.5} />}
              placeholder="Last Name"
              className="border-gray-500 py-2 text-base"
            />
          </Form.Item>
        </div>

        <Form.Item
          name="email"
          rules={[{ required: true, message: "Please input your email!", type: "email" }]}
        >
          <Input
            prefix={<AtSign size={15} strokeWidth={1.5} />}
            placeholder="Email"
            className="border-gray-500 py-2 text-base"
          />
        </Form.Item>

        <Form.Item
          name="password"
          rules={[{ required: true, message: "Please input your Password!" }]}
        >
          <Input.Password
            prefix={<Lock size={15} strokeWidth={1.5} />}
            type="password"
            className="border-gray-500 py-2  text-base"
            placeholder="Password"
          />
        </Form.Item>


        <Form.Item
          name="terms-and-condition"
          valuePropName="checked"
          rules={[
            {
              validator: (_, value) =>
                value ? Promise.resolve() : Promise.reject(new Error("Please accept terms and conditions")),
            },
          ]}
        >
          <Checkbox className="font-medium">
            I have read the{" "}
            <a target="_blank" href="/terms-and-conditions" className="text-blue-500">
              Terms & Conditions
            </a>
          </Checkbox>
        </Form.Item>

        <Form.Item>
          <Button
            type="default"
            htmlType="submit"
            loading={submitting}
            className="login-form-button w-full bg-gray-800 text-white h-12 text-lg"
          >
            {submitting ? <span>Signing up...</span> : <span>Sign up</span>}
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

