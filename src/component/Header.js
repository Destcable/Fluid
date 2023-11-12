import $ from 'jquery';

export default function Header() { 
    return $( "p" ).clone().add( "<span>Again</span>" ).appendTo( document.body );
}