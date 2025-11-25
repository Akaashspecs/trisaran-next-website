"use client";

import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";

const ContactSchema = Yup.object().shape({
  name: Yup.string().min(2, "Name is too short").required("Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  phone: Yup.string()
    .matches(/^[0-9]{10}$/, "Phone must be 10 digits")
    .required("Phone number is required"),
  message: Yup.string()
    .min(10, "Message must be at least 10 characters")
    .required("Message is required"),
});

const ContactForm = () => {
  return (
    <div className="flex flex-col justify-center items-center py-5 mt-10">
      <Formik
        initialValues={{ name: "", email: "", phone: "", message: "" }}
        validationSchema={ContactSchema}
        onSubmit={(values, { resetForm }) => {
          console.log("Form Submitted:", values);
          resetForm();
        }}
      >
        {() => (
          <Form className="bg-white bg-opacity-70 p-5 sm:p-10 rounded-2xl shadow-xl flex flex-col gap-5 w-[calc(100vw-30px)] border border-gray-300 sm:w-[500px] mx-0 sm:mx-11">
            <div className="text-4xl font-bold text-amber-800 mb-10 w-full text-center">
              Contact Us
            </div>

            {/* Name */}
            <div className="flex flex-col gap-1">
              <Field
                name="name"
                type="text"
                placeholder="Name"
                className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-400"
              />
              <ErrorMessage
                name="name"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>

            {/* Email */}
            <div className="flex flex-col gap-1">
              <Field
                name="email"
                type="email"
                placeholder="Email"
                className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-400"
              />
              <ErrorMessage
                name="email"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>

            {/* Phone */}
            <div className="flex flex-col gap-1">
              <Field
                name="phone"
                type="tel"
                placeholder="Phone Number"
                className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-400"
              />
              <ErrorMessage
                name="phone"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>

            {/* Message */}
            <div className="flex flex-col gap-1">
              <Field
                as="textarea"
                name="message"
                placeholder="Message"
                className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-400 h-32 resize-none"
              />
              <ErrorMessage
                name="message"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>

            <button
              type="submit"
              className="bg-[#0f63ac] text-white p-3 rounded-lg hover:bg-amber-600 transition duration-300"
            >
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ContactForm;
