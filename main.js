class Project extends HTMLElement {
    constructor () {
        super();

        const shadow = this.attachShadow({mode: 'open'});
        let template = document.getElementById('project-template');
        let templateContent = template.content;

        shadow.appendChild(templateContent.cloneNode(true));
    }

    connectedCallback () {
        // Guard clause to prevent it from being called when the element is disconnected.
        // https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_custom_elements#using_the_lifecycle_callbacks
        if (!this.isConnected) {
            return;
        }
        const preview = this.shadowRoot.querySelector('section');
        const dialog = this.shadowRoot.getElementById('desc-modal');
        const dialog_close = this.shadowRoot.getElementById('close-modal-btn');
        preview.addEventListener('click', () => {
            dialog.showModal();
        });
        dialog_close.addEventListener('click', () => {
            dialog.close();
        });

        const project_title_slot = this.shadowRoot.querySelector('h3 > slot[name="title"]');
        // I would use the :not(:first-of-type) but it isn't working because of shadowDOM stuff
        // This is more useful if for some reason the title would be referred multiple times.
        const project_title_nodes = [...this.shadowRoot.querySelectorAll('slot[name="title"]')].slice(1);
        project_title_slot.addEventListener('slotchange', () => {
            const project_title = project_title_slot.assignedNodes()[0];
            for (const element of project_title_nodes) {
                element.replaceWith(project_title.cloneNode(true));
            }
        });
    }
}

customElements.define('my-project', Project, {extends: 'article'});