/* global customElements */
import { PolymerElement, html } from '@polymer/polymer'

class PokedexCard extends PolymerElement {
  static get is () {
    return 'pokedex-card'
  }

  static get template () {
    return html`
      <style>
        :host {
          display: block;
        }
        .container {
          background-color: bisque;
          min-width: 160px;
          min-height: 160px;
          position: relative;
        }
        .label {
          background-color: rgba(0, 0, 0, 0.7);
          color: white;
          display: block;
          padding: 0.5rem 0;
          text-align: center;
        }
        .poke-container {
          border: none;
          display: block;
          width: 100%;
          height: 100%;
          padding: 0.5rem;
        }
        .poke-avatar {
          height: auto;
          max-width: 90%;
        }
      </style>
      <div class="container">
        <button class="poke-container">
          <img class="poke-avatar" src="[[pokemon.icon]]" alt="[[pokemon.name]]">
        </button>
        <span class="label">[[pokemon.name]]</span>
      </div>
    `
  }

  static get properties () {
    return {
      pokemon: {
        type: Object
      }
    }
  }
}

customElements.define(PokedexCard.is, PokedexCard)
