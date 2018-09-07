/* global customElements */
import { PolymerElement, html } from '@polymer/polymer'
import '@polymer/iron-ajax/iron-ajax'
import '@polymer/app-route/app-route'
class PokedexPokemon extends PolymerElement {
  static get is () {
    return 'pokedex-pokemon'
  }

  static get properties () {
    return {
      pokemon: {
        type: Array,
        value: function () {
          return {}
        },
        readOnly: true
      },
      route: Object
    }
  }

  static get template () {
    return html`
      <style>
        :host {
          display: block;
        }
      </style>
      <span>Pokemon {{data.id}}</span>
    `
  }
}

customElements.define(PokedexPokemon.is, PokedexPokemon)
