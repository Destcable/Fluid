import $ from 'jquery';
import Header from "../component/Header";
import Sidebar from "../component/Sidebar";

function welcomeView() {

    const sidebarItems = [
        { title: 'ART' },
        { title: 'PAV' }
    ];

    $('body').addClass('d-flex');

    Sidebar({ 
        elements: sidebarItems 
    });
    Header({ 
        title: "Информация"
    });
};

export default welcomeView;