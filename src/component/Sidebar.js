import $ from 'jquery';

export default function Sidebar({ items }) {

    const sidebar = $('<div>')
        .addClass('d-flex flex-column flex-shrink-0 bg-body-tertiary')
        .css('height', '100vh')
        .css('width', '4.5rem');

    sidebar.append(
        $('<a>')
            .attr('href', '/')
            .attr('class', 'd-flex justify-content-center p-3 link-body-emphasis text-decoration-none')
            .text('{TG}')
    );

    const navList = $('<ul>')
        .addClass('nav nav-pills nav-flush flex-column mb-auto text-center');
    
    if (Array.isArray(items)) { 
        items.forEach(item => {
            const listItem = $('<li>')
                .addClass('nav-item')
                .append(
                    $('<a>')
                        .attr('href', '#')
                        .attr('class', 'nav-link py-3 border-bottom rounded-0')
                        .text(item.title)
            );
    
            navList.append(listItem);
        });
    }

    sidebar.append(navList);

    $( 'body' ).append(sidebar);
};
