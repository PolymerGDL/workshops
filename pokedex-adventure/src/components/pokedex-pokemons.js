/* global customElements */
import { PolymerElement, html } from '@polymer/polymer'
import '@polymer/iron-ajax/iron-ajax'

class PokedexPokemons extends PolymerElement {
  static get is () {
    return 'pokedex-pokemons'
  }

  static get properties () {
    return {
      pokemons: {
        type: Array,
        value: function () {
          return []
        },
        readOnly: true
      }
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
        url="http://localhost:3000/pokemons"
        handle-as="json"
        on-response="_loadPokemons"
      >
      </iron-ajax>
      <pokedex-list pokemons=[[pokemons]] on-pokemon-click="_onPokemonClick"></pokedex-list>
    `
  }

  _loadPokemons (event) {
    this._setPokemons(event.detail.response)
  }

  _onPokemonClick (event) {
    const id = event.detail.id
    this.set('route.path', '/' + id)
  }
}

customElements.define(PokedexPokemons.is, PokedexPokemons)
