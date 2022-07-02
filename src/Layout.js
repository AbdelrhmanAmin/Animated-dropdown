import { Button, DropdownMenu } from "./components";

const Layout = () => {
  return (
    <div className="flex items-center justify-center bg-gray-900 h-screen">
      <div className="flex flex-col items-center ">
        <Button>OPEN ME</Button>
        <DropdownMenu data={
          [
            {
              icon: "http://cdn.onlinewebfonts.com/svg/img_537102.png",
              label: "Settings",
              onClick: () => {},
            },
            {
              icon: "http://cdn.onlinewebfonts.com/svg/img_537102.png",
              label: "Settings",
              onClick: () => {},
            },
            {
              icon: "http://cdn.onlinewebfonts.com/svg/img_537102.png",
              label: "Settings",
              onClick: () => {},
            },
          ]
        } />
      </div>
    </div>
  );
};

export default Layout;
