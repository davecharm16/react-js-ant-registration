import { Form, Input, Row, Col, Select, DatePicker } from "antd";
import Title from "antd/es/typography/Title";
import { Formik, Form as FormikForm, Field } from "formik";
import { Step1Schema } from "../../../utils/validation";
import dayjs from "dayjs";

const { Option } = Select;

// eslint-disable-next-line react/prop-types
const Step1 = ({ formikRef, initialValues, setValues, current }) => {
  return (
    <>
      <Title level={5} className="py-4">
        Personal Info
      </Title>
      <Formik
        innerRef={formikRef}
        initialValues={initialValues}
        onSubmit={(values) => {
          setValues((prev) => ({
            ...prev,
            [current]: values, // Correctly setting 'current' as the key
          }));
        }}
        validationSchema={Step1Schema}
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
              <Col span={24}>
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

              <Col span={24}>
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
          </Form>
        )}
      </Formik>
    </>
  );
};

export default Step1;
