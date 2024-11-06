import Title from "antd/es/typography/Title";
import Forms from "./component/Forms";

const Registration = () => {
  return (
    <div className="flex flex-col items-center justify-center px-8">
      <Title level={4} className="text-blue-500">
        Registration
      </Title>
      <div className="flex item-center justify-center">
        <Forms />
      </div>
    </div>
  );
};

export default Registration;
