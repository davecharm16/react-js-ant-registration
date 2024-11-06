import { Form, Input, Row, Col, Select } from "antd";
import Title from "antd/es/typography/Title";
import { Formik, Form as FormikForm, Field } from "formik";
import { Step2Schema } from "../../../utils/validation";

const { Option } = Select;

// eslint-disable-next-line react/prop-types
const Step2 = ({ formikRef, initialValues, setValues, current }) => {
  return (
    <>
      <Title level={5} className="py-4">
        Contact Info
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
        validationSchema={Step2Schema}
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
              <Col span={24}>
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

              <Col span={24}>
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
          </Form>
        )}
      </Formik>
    </>
  );
};

export default Step2;
