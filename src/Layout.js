import { DropdownMenu } from "./components";

const Layout = () => {
  return (
    <div className="flex p-10 justify-center bg-gray-900 h-screen">
      <div className="relative flex flex-col items-center ">
        <DropdownMenu
          listOne={[
            {
              icon: "👨‍💻",
              label: "One",
            },
            {
              icon: "👽",
              label: "Two",
            },
            {
              icon: "🤖",
              label: "Three",
            },
          ]}
          listTwo={[
            {
              icon: "👩‍🏫",
              label: "Four",
            },
            {
              icon: "👩‍🚒",
              label: "Five",
            },
            {
              icon: "🦸‍♀️",
              label: "Six",
            },
            {
              icon: "👩‍🎨",
              label: "Seven",
            },
            {
              icon: "👨‍⚖️",
              label: "Eight",
            },
          ]}
        />
      </div>
    </div>
  );
};

export default Layout;
