var ide = {};

ide.new_assembly_block = function(){
	let html = '';
	html += '<header>';
	html += '<input type="text" value="New Assembly Block">';
	html += '</header>';
	html += '<section>';
	html += '<textarea rows="20" cols="80"></textarea>';
	html += '</section>';

	let div = document.createElement('div');
	div.classList.add('block');
	div.innerHTML = html;

	let canvas = document.getElementById('canvas');
	canvas.appendChild(div);
};
