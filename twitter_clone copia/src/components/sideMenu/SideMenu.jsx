import MenuItems from "../menuItems";
import "./index.css";

const SideMenu = () => {
    return(
        <div className="SideMenu">
            <MenuItems />
            <button>Tweet</button>
        </div>
    );
};

export default SideMenu;