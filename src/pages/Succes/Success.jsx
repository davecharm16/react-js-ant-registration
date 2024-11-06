import { Button, Result } from "antd";
import { useNavigate } from "react-router-dom";

const SuccessScreen = () => {
  const navigate = useNavigate();
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <Result
        status="success"
        title="Successfully Completed!"
        subTitle="Your operation was completed successfully."
        extra={[
          <Button
            type="primary"
            key="dashboard"
            className="bg-blue-500 hover:bg-blue-600"
            onClick={() =>
              navigate("/", {
                replace: true,
              })
            }
          >
            Go to Dashboard
          </Button>,
        ]}
      />
    </div>
  );
};

export default SuccessScreen;
