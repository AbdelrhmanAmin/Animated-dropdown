import { Button, DropdownMenu } from "./components";

const Layout = () => {
  return (
    <div className="flex p-10 justify-center bg-gray-900 h-screen">
      <div className="relative flex flex-col items-center ">
        <Button>OPEN ME</Button>
        <DropdownMenu list={
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
