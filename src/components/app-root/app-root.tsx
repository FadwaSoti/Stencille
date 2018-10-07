import { Component } from '@stencil/core';


@Component({
  tag: 'app-root',
  styleUrl: 'app-root.css',
  shadow: true
})
export class AppRoot {

  render() {
    return (
      <div>
        <header>
          <h1>Blog!</h1>
        </header>

        <main>

          <stencil-router>
    <ul id="menu-demo">
    <li><a href="/home/stencil">Accueil</a></li>
    <li><a href="/add/stencil">Nouveau article</a></li>
    
    </ul>

            
            <stencil-route-switch scrollTopOffset={0}>
              <stencil-route url='/' component='app-home' exact={true} />
              <stencil-route url='/home/stencil' component='app-home'/>
              <stencil-route url='/add/stencil' component='app-add'/>
              <stencil-route url='/detail/stencil' component='app-detail'/>
              <stencil-route url='/fetch/:name' component='app-fetch-id' exact={true} />
            </stencil-route-switch>

          </stencil-router>
        </main>
      </div>
    );
  }
}
