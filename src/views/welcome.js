import { useState } from "../Fluid";
import Sidebar from "../component/Sidebar";

function welcomeView() {
    const [getNumber, setNumber] = useState(0);
    
    console.log(getNumber());

    const sidebarItems = [
        { title: 'ART' },
        { title: 'PAV' }
    ];

    return(
        Sidebar({ elements: sidebarItems })
    );
};

export default welcomeView;