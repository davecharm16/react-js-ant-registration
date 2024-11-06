import { combineSchemas, flattenFormData } from "../../../utils/utils";
import {
  Step1Schema,
  Step2Schema,
  Step3Schema,
} from "../../../utils/validation";
import { Form, Input, Row, Col, Select, DatePicker } from "antd";
import Title from "antd/es/typography/Title";
import { Formik, Form as FormikForm, Field } from "formik";
import dayjs from "dayjs";
import { useNavigate } from "react-router-dom";

const { Option } = Select;

// eslint-disable-next-line react/prop-types
const Step4 = ({ formikRef, initialValues, setValues }) => {
  const navigate = useNavigate();
  const CombinedSchema = combineSchemas(Step1Schema, Step2Schema, Step3Schema);
  const flattenData = flattenFormData(initialValues);
  return (
    <div>
      <Title level={5} className="py-4">
        Personal Info
      </Title>
      <Formik
        innerRef={formikRef}
        initialValues={flattenData}
        onSubmit={(values) => {
          console.log(values);
          setValues({
            0: {
              firstName: "",
              lastName: "",
              dob: "",
              gender: "",
            },
            1: {
              email: "",
              phone: "",
              city: "",
              address: "",
            },
            2: {
              username: "",
              password: "",
              confirmPassword: "",
            },
          });
          navigate("/register/success", {
            replace: true,
          });
        }}
        validationSchema={CombinedSchema}
      >
        {({ values, errors, touched, setFieldValue, handleSubmit }) => (
          <Form
            layout="vertical"
            onFinish={handleSubmit}
            component={FormikForm}
          >
            <Row gutter={16}>
              <Col xs={24} sm={24} md={12}>
                <Form.Item
                  label="First Name"
                  validateStatus={
                    errors.firstName && touched.firstName ? "error" : ""
                  }
                  help={
                    touched.firstName && errors.firstName
                      ? errors.firstName
                      : null
                  }
                >
                  <Field as={Input} name="firstName" placeholder="e.g. Juan" />
                </Form.Item>
              </Col>

              <Col xs={24} sm={24} md={12}>
                <Form.Item
                  label="Last Name"
                  validateStatus={
                    errors.lastName && touched.lastName ? "error" : ""
                  }
                  help={
                    touched.lastName && errors.lastName ? errors.lastName : null
                  }
                >
                  <Field
                    as={Input}
                    name="lastName"
                    placeholder="e.g. Dela Cruz"
                  />
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={16}>
              <Col span={12}>
                <Form.Item
                  label="Gender"
                  validateStatus={
                    errors.gender && touched.gender ? "error" : ""
                  }
                  help={touched.gender && errors.gender ? errors.gender : null}
                >
                  <Select
                    name="gender"
                    placeholder="Select gender"
                    onChange={(val) => {
                      setFieldValue("gender", val, true);
                    }}
                    value={values.gender}
                  >
                    <Option value="male">Male</Option>
                    <Option value="female">Female</Option>
                  </Select>
                </Form.Item>
              </Col>

              <Col span={12}>
                <Form.Item
                  label="Date of Birth"
                  validateStatus={errors.dob && touched.dob ? "error" : ""}
                  help={touched.dob && errors.dob ? errors.dob : null}
                >
                  <DatePicker
                    name="dob"
                    style={{ width: "100%" }}
                    placeholder="Select date of birth"
                    format="YYYY-MM-DD"
                    onChange={(date) =>
                      setFieldValue(
                        "dob",
                        date ? dayjs(date).toISOString() : null
                      )
                    }
                    value={values.dob ? dayjs(values.dob) : null}
                  />
                </Form.Item>
              </Col>
            </Row>
            <Title level={5} className="py-4">
              Contact Info
            </Title>
            <Row gutter={16}>
              <Col xs={24} sm={24} md={12}>
                <Form.Item
                  label="Email"
                  validateStatus={errors.email && touched.email ? "error" : ""}
                  help={touched.email && errors.email ? errors.email : null}
                >
                  <Field
                    as={Input}
                    name="email"
                    placeholder="e.g. juandelacruz@email.com"
                  />
                </Form.Item>
              </Col>

              <Col xs={24} sm={24} md={12}>
                <Form.Item
                  label="Phone"
                  validateStatus={errors.phone && touched.phone ? "error" : ""}
                  help={touched.phone && errors.phone ? errors.phone : null}
                >
                  <Field
                    as={Input}
                    name="phone"
                    placeholder="e.g. 09661443368"
                  />
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={16}>
              <Col span={12}>
                <Form.Item
                  label="City"
                  validateStatus={errors.city && touched.city ? "error" : ""}
                  help={touched.city && errors.city ? errors.city : null}
                >
                  <Select
                    name="city"
                    placeholder="Select city"
                    onChange={(val) => {
                      setFieldValue("city", val, true);
                    }}
                    value={values.city}
                  >
                    <Option value="Mandaluyong">Mandaluyong</Option>
                    <Option value="Makati">Makati</Option>
                  </Select>
                </Form.Item>
              </Col>

              <Col span={12}>
                <Form.Item
                  label="Address"
                  validateStatus={
                    errors.address && touched.address ? "error" : ""
                  }
                  help={
                    touched.address && errors.address ? errors.address : null
                  }
                >
                  <Field
                    as={Input}
                    name="address"
                    placeholder="e.g. 452 Talospatang"
                  />
                </Form.Item>
              </Col>
            </Row>
            <Title level={5} className="py-4">
              Account Info
            </Title>
            <Row gutter={16}>
              <Col span={24}>
                <Form.Item
                  label="Username"
                  validateStatus={
                    errors.username && touched.username ? "error" : ""
                  }
                  help={
                    touched.username && errors.username ? errors.username : null
                  }
                >
                  <Field
                    as={Input}
                    name="username"
                    placeholder="e.g. juandelacruz"
                  />
                </Form.Item>
              </Col>

              <Col xs={24} sm={24} md={12}>
                <Form.Item
                  label="Password"
                  validateStatus={
                    errors.password && touched.password ? "error" : ""
                  }
                  help={
                    touched.password && errors.password ? errors.password : null
                  }
                >
                  <Field
                    as={Input}
                    name="password"
                    placeholder="*********"
                    type="password"
                  />
                </Form.Item>
              </Col>
              <Col xs={24} sm={24} md={12}>
                <Form.Item
                  label="Confirm Password"
                  validateStatus={
                    errors.confirmPassword && touched.confirmPassword
                      ? "error"
                      : ""
                  }
                  help={
                    touched.confirmPassword && errors.confirmPassword
                      ? errors.confirmPassword
                      : null
                  }
                >
                  <Field
                    as={Input}
                    name="confirmPassword"
                    placeholder="*********"
                    type="password"
                  />
                </Form.Item>
              </Col>
            </Row>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Step4;
