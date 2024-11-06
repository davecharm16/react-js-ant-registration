import { Form, Input, Row, Col } from "antd";
import Title from "antd/es/typography/Title";
import { Formik, Form as FormikForm, Field } from "formik";
import { Step3Schema } from "../../../utils/validation";

// eslint-disable-next-line react/prop-types
const Step3 = ({ formikRef, initialValues, setValues, current }) => {
  return (
    <>
      <Title level={5} className="py-4">
        Account Info
      </Title>
      <Formik
        innerRef={formikRef}
        initialValues={initialValues}
        onSubmit={(values) => {
          setValues((prev) => ({
            ...prev,
            [current]: values,
          }));
        }}
        validationSchema={Step3Schema}
      >
        {({ errors, touched, handleSubmit }) => (
          <Form
            layout="vertical"
            onFinish={handleSubmit}
            component={FormikForm}
          >
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
    </>
  );
};

export default Step3;
