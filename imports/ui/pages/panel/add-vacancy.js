import {
  Template
} from 'meteor/templating';
import '/client/html/pages/panel/add-vacancy.html';
import '/imports/api/collections/vacancies.js';

var json = require('/imports/ui/components/skills.json');

Template.newVacancy.onCreated(function() {
  this.skills = new ReactiveVar(json);
});

Template.newVacancy.onRendered(function() { 
  $("#tags").chosen({
    no_results_text: "Sem resultados para",
    placeholder_text_single: "Selecione uma opção",
    placeholder_text_multiple: "Selecione tags para identificação"
  });
});

Template.newVacancy.events({
  "submit form": function(event) {
    event.preventDefault();
    //REMOVE ERRORS
    $('.warning').removeClass('warning');

    let target = event.target;

    vacancy = {
      categoria: targetValue(target["categoria"]),
      tipo_vaga: targetValue(target["tipo_vaga"]),
      nome: targetValue(target["nome"]),
      descricao: targetValue(target["descricao"]),
      especial: $('#especial').is(':checked'),
      tags: $('#tags').val()
    }

    Meteor.call('saveVacancy', vacancy, function(error) {
      if (error) {
        Meteor.call('displayErrors', error);
      }
<<<<<<< 9c9f4d32276565e680d33770c5ee004fbaf662e8
<<<<<<< 218cf80d1e823c4a06954ce9929bf89a47f8399d
      else {
        toastr.success('Nova oportunidade cadastrada com sucesso', 'Vaga Registrada!');
        resetForm();
      }
=======
>>>>>>> Add functionality to create vacancies
=======
      else {
        toastr.success('Nova oportunidade cadastrada com sucesso', 'Vaga Registrada!');
        resetForm();
      }
>>>>>>> Add simple vacancies listing to student profile
    });
  }
});

function targetValue(target) {
  return target.value != "" ? target.value : undefined;
}

<<<<<<< 9c9f4d32276565e680d33770c5ee004fbaf662e8
<<<<<<< 218cf80d1e823c4a06954ce9929bf89a47f8399d
=======
>>>>>>> Add simple vacancies listing to student profile
function resetForm() {
  $("form")[0].reset();
  $('select option:selected').removeAttr('selected');
  $('select').trigger('chosen:updated');
}

<<<<<<< 9c9f4d32276565e680d33770c5ee004fbaf662e8
=======
>>>>>>> Add functionality to create vacancies
=======
>>>>>>> Add simple vacancies listing to student profile
Template.newVacancy.helpers({
  skills: function() {
    return Template.instance().skills.get();
  }
});