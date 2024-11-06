import Step1 from "./Step1";
import { Button, Steps } from "antd";
import {
  CheckCircleOutlined,
  ProfileOutlined,
  SolutionOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { useRef, useState } from "react";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";

const Forms = () => {
  const [current, setCurrent] = useState(0);
  const [status, setStatus] = useState("process");
  const formikRef = useRef();

  const [initialValuesObject, setInitialValuesObject] = useState({
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

  const displayStepForm = (currentIndex) => {
    switch (currentIndex) {
      case 0:
        return (
          <Step1
            formikRef={formikRef}
            initialValues={initialValuesObject[current]}
            setValues={setInitialValuesObject}
            current={current}
          />
        );
      case 1:
        return (
          <Step2
            formikRef={formikRef}
            initialValues={initialValuesObject[current]}
            setValues={setInitialValuesObject}
            current={current}
          />
        );
      case 2:
        return (
          <Step3
            formikRef={formikRef}
            initialValues={initialValuesObject[current]}
            setValues={setInitialValuesObject}
            current={current}
          />
        );
      case 3:
        return (
          <Step4
            formikRef={formikRef}
            initialValues={initialValuesObject}
            setValues={setInitialValuesObject}
          />
        );
      default:
        return;
    }
  };

  const items = [
    {
      title: "Personal",
      icon: <UserOutlined />,
    },
    {
      title: "Contact",
      icon: <SolutionOutlined />,
    },
    {
      title: "Account",
      icon: <ProfileOutlined />,
    },
    {
      title: "Confirm",
      icon: <CheckCircleOutlined />,
    },
  ];

  return (
    <div className="rounded-md shadow-lg max-w-2xl min-w-[90vw] md:min-w-[70vw] xl:min-w-[50vw] py-6 px-4">
      <Steps current={current} status={status} items={items} />
      {displayStepForm(current)}
      <div className="flex justify-center gap-3">
        {current > 0 && (
          <Button onClick={() => setCurrent((prev) => prev - 1)}> Back </Button>
        )}
        {current < items.length - 1 ? (
          <Button
            onClick={async () => {
              await formikRef.current.submitForm();
              if (formikRef.current.isValid) {
                setCurrent((prev) => prev + 1);
                setStatus("process");
              } else {
                setStatus("error");
              }
            }}
            type="primary"
          >
            Next
          </Button>
        ) : (
          <Button
            onClick={async () => {
              await formikRef.current.submitForm();
              if (formikRef.current.isValid) {
                setStatus("process");
              } else {
                setStatus("error");
              }
            }}
            type="primary"
          >
            Submit
          </Button>
        )}
      </div>
    </div>
  );
};

export default Forms;
