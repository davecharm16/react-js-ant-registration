import { Button, Typography } from "antd";
import { useNavigate } from "react-router-dom";

const { Title, Paragraph } = Typography;

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="h-screen flex items-center justify-center text-center">
      <div className="max-w-lg  mx-auto p-8">
        <Title
          level={1}
          className="text-blue-500 text-5xl font-extrabold leading-tight"
        >
          Discover New Horizons with Our Platform
        </Title>
        <Paragraph className="text-blue-600 text-md md:text-lg font-light">
          Ready to take the next step? Register today to start your journey with
          us. Learn new skills, connect with like-minded individuals, and unlock
          opportunities that could change your life.
        </Paragraph>
        <Button
          type="default"
          className="bg-white text-blue-600 font-medium px-6 py-3 rounded-md"
          size="large"
          variant="outlined"
          onClick={() => navigate("/register")}
        >
          Start Registration
        </Button>
      </div>
    </div>
  );
};

export default Home;
