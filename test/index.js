import $ from '../dist/jquery-jquery-ui-touch-punch-bundle.es.js';

window.$ = window.jQuery = $;

$('#app').html(`<h1>Yay!!</h1>`);

$('#app').append('<h2><strong>jquery-jquery-ui-touch-punch-bundle</strong></h2>was built successfully!');
$('body').append("<p><strong>And this is what's included:</strong></p>");
$('body').append('<ul></ul>');
$('ul').append('<li><a href="https://github.com/jquery/jquery" target="_blank">jQuery v' + $.fn.jquery + '</a></li>');
$('ul').append(
	'<li><a href="https://github.com/jquery/jquery-ui" target="_blank">jQuery UI v' + $.ui.version + '</a></li>'
);
$('ul').append(
	'<li><a href="https://github.com/furf/jquery-ui-touch-punch" target="_blank">jQuery UI Touch Punch v' +
		$.tp.version +
		'</a><br />(incl. <a href="https://github.com/andxor/jquery-ui-touch-punch" target="_blank">detection update</a>)</li>'
);

$('#app').draggable();

// https://github.com/jquery/jquery-ui
// https://github.com/furf/jquery-ui-touch-punch
