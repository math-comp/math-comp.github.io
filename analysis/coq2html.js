
function renderMarkdowns()
{
    const md = markdownit({html:true})
          .use(texmath, { engine: katex,
                          delimiters: 'dollars'} );
    const elements = document.querySelectorAll('.markdown,.md');
    for (let elem of elements) {
	elem.innerHTML = md.render(elem.textContent);
    }
}

function showDarkmodeWidget()
{
    new Darkmode({
	time: '0.1s',
	label: '🌓',
    }).showWidget();
}

function setUpSavingDetails() {
    $('details').on('toggle', function(event) {
	var id = $(this).attr('id')
	var isOpen = $(this).attr('open')
	console.log(id, isOpen)
	window.localStorage.setItem('details-'+id, isOpen)
    })

    function setDetailOpenStatus(item) {
	if (item.includes('details-')) {
	    var id = item.split('details-')[1];
	    var status = window.localStorage.getItem(item)
	    if (status == 'open'){
		$("#"+CSS.escape(id)).attr('open',true)
	    }
	}
    }

    $( document ).ready(function() {
	console.log("document ready: "+localStorage.length);
	for (var i = 0; i < localStorage.length; i++) {
	    console.log("setDetail: "+localStorage.key(i));
	    setDetailOpenStatus(localStorage.key(i));
	}
    });
}

function init()
{
    renderMarkdowns();
    showDarkmodeWidget();
    setUpSavingDetails();
}

function renderMarkdowns()
{
    const md = markdownit({html:true})
          .use(texmath, { engine: katex,
                          delimiters: 'dollars'} );
    const elements = document.querySelectorAll('.markdown,.md');
    for (let elem of elements) {
	elem.innerHTML = md.render(elem.textContent);
    }
}

function showDarkmodeWidget()
{
    new Darkmode({
	time: '0.1s',
	label: '🌓',
    }).showWidget();
}

function setUpSavingDetails() {
    $('details').on('toggle', function(event) {
	var id = $(this).attr('id')
	var isOpen = $(this).attr('open')
	console.log(id, isOpen)
	window.localStorage.setItem('details-'+id, isOpen)
    })

    function setDetailOpenStatus(item) {
	if (item.includes('details-')) {
	    var id = item.split('details-')[1];
	    var status = window.localStorage.getItem(item)
	    if (status == 'open'){
		$("#"+CSS.escape(id)).attr('open',true)
	    }
	}
    }

    $( document ).ready(function() {
	console.log("document ready: "+localStorage.length);
	for (var i = 0; i < localStorage.length; i++) {
	    console.log("setDetail: "+localStorage.key(i));
	    setDetailOpenStatus(localStorage.key(i));
	}
    });
}

function init()
{
    renderMarkdowns();
    showDarkmodeWidget();
    setUpSavingDetails();
}
