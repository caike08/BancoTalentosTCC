import {
  Template
} from 'meteor/templating';

Template.PanelLayout.onRendered(function() {
  setMasks();
  setCalendar();
});

Template.HomeLayout.onRendered(function() {
  setMasks();
  setCalendar();
});

function setMasks() {
  $('.phone-number').inputmask("(99) 99999999[9]", {
    "placeholder": " "
  });
  $('.cpf').inputmask({
    mask: "999.999.999-99",
    autoUnmask: true
  });
  $('.cnpj').inputmask({
    mask: "99.999.999/9999-99",
    autoUnmask: true
  });
  $('.cep').inputmask({
    mask: "99999-999"
  });
}

function setCalendar() {
  $('#nascimento').datepicker({
    format: 'yyyy-mm-dd',
    language: 'pt-BR'
  });
}