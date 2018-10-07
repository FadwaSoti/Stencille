
import { Component, Prop, State } from '@stencil/core';
import { MatchResults } from '@stencil/router';
import { RouterHistory } from '@stencil/router';

@Component({
  tag: 'app-fetch-id',
  styleUrl: 'tab.css',
  shadow: true
})
export class AppFetchId {
  @Prop() match: MatchResults;
  @State() data :any[] = [] ;
  @Prop() history: RouterHistory;

  @State() apiRootUrl: string = 'https://polymer-101-workshop.cleverapps.io/api/blogpost/';
  
  load() {

        
      fetch(`${this.apiRootUrl}${this.match.params.name}`)
        .then((response: any) => {
          return response.json()
        }).then((data) => {
          this.data = data;
        });

    }
  
    componentWillLoad() { 
  
     if (this.match.params.name) {
        
        this.load();
      }
  
      console.log('Component is being rendered');  
    }

    close() {
      this.history.goBack();
    }
    
  render() {
      return (
        <div >
               <table>                                  
                    <tr>
                        <th>Title : </th>
                        <th>Date : </th>
                    </tr>

                    <tr>
                        <td> {this.data['title']}</td>
                        <td> {this.data['creationDate'] }</td>
                    </tr>
                    <tr>
                        <th>Author: </th>
                        <th>Article : </th>
                    </tr>

                    <tr>
                        <td> {this.data['autor']}</td>
                        <td > {this.data['article']}</td>
                    </tr>

                </table>

                <stencil-route-link>
                <button  onClick={() => this.close()} >
                    Retourner
                  </button>
                </stencil-route-link>

           
            </div>
      );
  }
}