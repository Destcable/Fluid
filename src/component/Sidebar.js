import { useState } from '../Fluid';
import $ from 'jquery';

export default function Sidebar({ elements }) {

    const [getItems, setItems] = useState(elements);

    const sidebar = $('<div>')
        .addClass('d-flex flex-column flex-shrink-0')
        .css('background-color', '#1B3446')
        .css('height', '100vh')
        .css('width', '4.5rem');

    sidebar.append(
        $('<a>')
            .attr('href', '/')
            .attr('class', 'd-flex justify-content-center p-3 link-body-emphasis text-decoration-none text-light')
            .text('{TG}')
    );

    const navList = $('<ul>')
        .addClass('nav nav-pills nav-flush flex-column mb-auto text-center');
    
    if (Array.isArray(getItems())) { 
        getItems().forEach(item => {
            const listItem = $('<li>')
                .addClass('nav-item')
                .append(
                    $('<a>')
                        .attr('href', '#')
                        .attr('class', 'nav-link py-3 rounded-0 text-light')
                        .text(item.title)
            );
    
            navList.append(listItem);
        });
    }

    sidebar.append(navList);

    $('body').append(sidebar);
};
