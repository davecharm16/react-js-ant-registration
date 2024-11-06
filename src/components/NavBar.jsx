import { Button } from "antd";

const NavBar = () => {
  return (
    <div className="flex justify-between px-4 py-4">
      <div className="text-xl font-bold text-blue-500">Sample Logo</div>
      <div className="flex align-middle justify-end gap-5">
        <Button color="primary" variant="outlined">
          Sign Up
        </Button>
        <Button color="primary" variant="solid">
          Login
        </Button>
      </div>
    </div>
  );
};

export default NavBar;
