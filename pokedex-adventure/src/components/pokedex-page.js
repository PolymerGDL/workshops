/* global customElements */
import { PolymerElement, html } from '@polymer/polymer'
import '@polymer/app-route/app-route'
import '@polymer/iron-ajax/iron-ajax'
import '@polymer/iron-pages/iron-pages'

class PokedexPage extends PolymerElement {
  static get is () {
    return 'pokedex-page'
  }

  static get template () {
    return html`
      <style>
        :host {
          display: block;
        }
      </style>
      <app-route
        route="{{route}}"
        pattern="/:id"
        data="{{pokeData}}"
      >
      </app-route>
      <iron-pages selected="[[_getNameRoute(pokeData.id)]]" attr-for-selected="name">
        <pokedex-pokemons name="root" route="{{route}}"></pokedex-pokemons>
        <pokedex-pokemon name="detail" route="{{route}}" data={{pokeData}} ></pokedex-pokemon>
      </iron-pages>
    `
  }

  _getNameRoute (id) {
    if (!id) {
      return 'root'
    }
    return 'detail'
  }
}

customElements.define(PokedexPage.is, PokedexPage)
