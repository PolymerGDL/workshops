/* global customElements */
import { PolymerElement, html } from '@polymer/polymer'

class PokedexLanding extends PolymerElement {
  static get is () {
    return 'pokedex-landing'
  }

  static get template () {
    return html`
      <style>
        :host {
          display: block;
        }
      </style>
      <app-location route="{{route}}"></app-location>
      <button on-click="_goPokedex"> Go Pokemon </button>
    `
  }

  _goPokedex () {
    this.set('route.path', '/pokemons')
  }
}

customElements.define(PokedexLanding.is, PokedexLanding)
