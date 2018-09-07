/* global customElements */
import { PolymerElement, html } from '@polymer/polymer'
import '@polymer/app-route/app-location'
import '@polymer/app-route/app-route'
import '@polymer/iron-pages/iron-pages'

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
        .title {
          text-align: center;
        }
      </style>
      <h1 class="title">Bienvenido al mundo pokemon</h1>
      <app-location route="{{route}}"></app-location>
      <app-route
        route="{{route}}"
        pattern="/:page"
        data="{{routeData}}"
        tail="{{subroute}}"
      >
      </app-route>
      <iron-pages selected="[[routeData.page]]" attr-for-selected="name">
        <pokedex-landing name=""></pokedex-landing>
        <pokedex-page name="pokemons" route={{subroute}}></pokedex-page>
      </iron-pages>
    `
  }
}

customElements.define(PokedexApp.is, PokedexApp)
