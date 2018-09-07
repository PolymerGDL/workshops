/* global customElements, CustomEvent */
import { PolymerElement, html } from '@polymer/polymer'
import '@polymer/polymer/lib/elements/dom-repeat.js'

class PokedexList extends PolymerElement {
  static get is () {
    return 'pokedex-list'
  }

  static get properties () {
    return {
      pokemons: {
        type: Array
      }
    }
  }

  static get template () {
    return html`
      <style>
        :host {
          display: block;
        }

        .pokedex-panel {
          display: flex;
        }

        pokedex-card {
          margin: 0.5rem;
        }
      </style>
      <section class="pokedex-panel">
        <template is="dom-repeat"
          items="{{pokemons}}"
          as="pokemon">
          <pokedex-card pokemon="[[pokemon]]" on-click="_pokemonClick"></pokedex-card>
        </template>
      </section>
    `
  }

  _pokemonClick (event) {
    const pokemonClick = new CustomEvent('pokemon-click', {
      detail: event.model.pokemon
    })
    this.dispatchEvent(pokemonClick)
  }
}

customElements.define(PokedexList.is, PokedexList)
