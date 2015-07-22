$(document).ready(function(){
	
	/* sert barre de recherche en haut du site*/
	$(document).on('click','a.change-drop-down',function(e){
		e.preventDefault();
		e.stopImmediatePropagation();
		var label = $(e.currentTarget).html();
		$('#search-button-change').html(label+' <span class="caret"></span>');
		$('#front-accueil-search-id').val(label);
	});
});