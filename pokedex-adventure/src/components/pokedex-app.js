/* global customElements */
import { PolymerElement, html } from '@polymer/polymer'

class PokedexApp extends PolymerElement {
  static get is () {
    return 'pokedex-app'
  }

  static get template () {
    return html`
      <style>
        :host {
          display: block;
        }
      </style>
      <p>Bienvenido al mundo pokemon</p>
    `
  }
}

customElements.define(PokedexApp.is, PokedexApp)
