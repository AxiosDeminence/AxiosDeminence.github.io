const dialogs = document.querySelectorAll('dialog');

Array.prototype.forEach.call(dialogs, function (dialog) {
  dialogPolyfill.registerDialog(dialog);
  dialog.addEventListener('click', function (ev) {
    if (ev.target === dialog.querySelector('.close-modal-btn')) {
      dialog.close();
    }
    ev.stopPropagation();
  });
});