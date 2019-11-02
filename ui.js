
$( document ).ready(function() {
	//sidebar
	$('.ui.sidebar')
	  .sidebar('attach events', '#submit')
	  .sidebar('setting', 'overlay','dimPage', false).sidebar('setting', 'closable', false);
	

	//shapes
	$('.shape').shape();

	//dropdown menu
	$('.ui.dropdown').dropdown();

	//réglage btn
	$('#reglage').on("click",function(e){
		$('.shape').shape('set next side', '.reglage.side').shape('flip right');
	});

		//dessin btn
	$('#dessin').on("click",function(e){
		$('.shape').shape('set next side', '.dessin.side').shape('flip right');
	});

	//accordion
	$('.ui.accordion').accordion({trigger   : '.title.icon'});

	//add text btn
	const add_test_acc = '<div class="title">'+
    '<i class="dropdown icon"></i>' +
   	'What is a dog?'+
   	'<i class="red close icon "></i>' +
  	'</div>'+
  	'<div class="content">'+
    '<p class="transition hidden">A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.</p>'+
  	'</div>';

	$('.add_text').on("click",function(e){
		console.log("add text accordion");
		add_accordion(accordion_arg);
	});

	//colorpicker
	$('#colorpicker-popup').colorpicker({
    parts:      'full',
    alpha:      true,
    showOn:     'both',
    buttonColorize: true,
    showNoneButton: true
  });

});


//A créer dans un fichier séparé
var accordion_arg = {
	title:'default title',
	detail:'default detail'
};

function create_accordion(arg){
	var add_test_acc = '<div class="title">'+
    '<i class="dropdown icon"></i>' +
 	arg.title+
 	'<i class="red close icon "></i>' +
  	'</div>'+
  	'<div class="content">'+
    '<p class="transition hidden">'+arg.detail+'</p>'+
  	'</div>';
  	return add_test_acc;
}

function add_accordion(arg){
	var html = create_accordion(arg);
	$('.ui.accordion').append(html);
}