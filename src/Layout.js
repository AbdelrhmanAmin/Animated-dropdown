import { DropdownMenu } from "./components";

const Layout = () => {
  return (
    <div className="flex flex-col p-10 items-center bg-gray-900 text-white min-h-screen">
      <h1 className="text-4xl font-medium">Animated Dropdown Multi-Menus</h1>
      <div className="flex flex-col items-center mt-4 ">
        <DropdownMenu
          listOne={[
            {
              icon: "",
              label: "Click me",
            },
          ]}
          listTwo={[
            {
              icon: "👩‍🏫",
              label: "Go back",
            },
            {
              icon: "👩‍🚒",
              label: "One",
            },
            {
              icon: "🦸‍♀️",
              label: "Two",
            },
            {
              icon: "👩‍🎨",
              label: "Three",
            },
            {
              icon: "👨‍⚖️",
              label: "Four",
            },
          ]}
        />
      </div>
    </div>
  );
};

export default Layout;
