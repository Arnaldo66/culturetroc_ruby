/* plugin selecteur pour recharger selecteur des sous-categorie 
 * a partir d'un categorie
 * Les categorie doivent utiliser la classe 'recharge-ajax-categorie'
 * et les sous categorie la classe 'recharge-ajax-sous-categorie'
 */

$(document).ready(function(){
	
	//gestion du change sur formulaire categorie
	$(document).on('change','select.recharge-ajax-categorie',function(e){
    	gestionSelectionCategorie();
    });
	
	//appel ajax pour modifier sous categorie en function du categorie
	function gestionSelectionCategorie() {
		var categorie = $('select.recharge-ajax-categorie');
		var id = $('option:selected', categorie).val();
		var selectSousCategorie = $('select.recharge-ajax-sous-categorie');
		selectSousCategorie.empty();
		if (id !== '') {
			$.post(
				Routing.generate('culture_troc_front_office_parametre_ajax_sous_categorie'),
				{ id: id },
				function(data) {
					gestionActualisationSousCategorie(selectSousCategorie, data);
				}
			);
		}
	}
	
	//Modifiaction du selecteur des sous categorie
	function gestionActualisationSousCategorie(selectSousCategorie, sousCategorie) {
    	if (Object.keys(sousCategorie).length > 0) {
    		if(selectSousCategorie.hasClass('sous-categorie-message')){
    			option = $('<option value=""></option>');
    			option.html('Sélectionner un sous-categorie');
    			selectSousCategorie.append(option);
			}
			$(sousCategorie).each(function(k,v){
				option = $('<option></option>');
				option.val(v.id).html(v.lib);
				selectSousCategorie.append(option);
			});
		}
    }
	
});