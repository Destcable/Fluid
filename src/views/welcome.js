import Sidebar from "../component/Sidebar";

function welcomeView() {
    const sidebarItems = [
        { title: 'ART' },
        { title: 'PAV' }
    ];

    return(
        Sidebar({ items: sidebarItems })
    );
};

export default welcomeView;