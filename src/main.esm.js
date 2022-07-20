import dialogPolyfill from 'dialog-polyfill';
import { LitElement, html } from 'lit';

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

class MyProject extends LitElement {
  get preview() {
    const root = this.renderRoot;
    return root?.querySelector('slot[name="project-preview"]') ?? null;
  }

  get descModal() {
    const root = this.renderRoot;
    const slot = root?.querySelector('slot[name="desc-modal"]') ?? null;
    const modal = slot?.assignedElements()[0]; // either a node or undefined
    return modal ?? null;
  }

  render() {
    return html`
      <slot name="project-preview">
        <section></section>
      </slot>
      <slot name="desc-modal"></slot>
    `;
  }

  showModal = () => this.descModal.showModal();
  closeModal = () => this.descModal.close();

  async firstUpdated() {
    await new Promise((r) => setTimeout(r, 0));
    this.preview.addEventListener('click', this.showModal);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this.preview.removeEventListener('click', this.showModal);
  }
}

customElements.define('my-project', MyProject);
