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
        type: Object,
        value: function () {
          return {}
        },
        readOnly: true
      },
      x: String
    }
  }

  static get template () {
    return html`
      <style>
        :host {
          display: block;
        }
      </style>
      <iron-ajax
        auto
        url="http://localhost:3000/pokemons/[[data.id]]"
        handle-as="json"
        on-response="_loadPokemon"
      >
      </iron-ajax>
      <button on-click="_goBack">Go back</button>
      <pokedex-card pokemon="[[pokemon]]"></pokedex-card>
    `
  }

  _loadPokemon (event) {
    this._setPokemon(event.detail.response)
  }

  _goBack (event) {
    this.set('route.path', '/')
  }
}

customElements.define(PokedexPokemon.is, PokedexPokemon)
