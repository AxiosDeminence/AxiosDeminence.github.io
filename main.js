const dialogs = document.querySelectorAll('dialog');

Array.prototype.forEach.call(dialogs, function (dialog) {
  // Will not upgrade twice
  if (typeof dialogPolyfill !== 'undefined') {
    dialogPolyfill.registerDialog(dialog);
  }
  dialog.addEventListener('click', function (ev) {
    if (ev.target === dialog.querySelector('.close-modal-btn')) {
      dialog.close();
    }
    ev.stopPropagation();
  });
})

const projects = document.getElementsByClassName('my-project');

Array.prototype.forEach.call(projects, function (project) {
  project.addEventListener('click', function (ev) {
    var elem = ev.currentTarget;
    elem.querySelector('.desc-modal').showModal();
  });
});
