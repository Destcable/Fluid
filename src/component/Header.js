import $ from 'jquery';

export default function Header({ title }) { 
    const header = $('<div>')
        .addClass('d-flex justify-content-between align-items-center bg-body-tertiary')
        .css('height', '56px')
        .css('width', '100%');

    $(header).append(`<h6>${title}</h6>`);
    
    $('body').append(header);
}