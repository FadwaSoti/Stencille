import { Prop, Component, State  } from '@stencil/core';
import { RouterHistory } from '@stencil/router';

@Component({
  tag: 'app-add',
  styleUrl: 'app-add.css',
  shadow: true
})

export class AppAdd {
  @State()  apiRootUrl: string = 'https://polymer-101-workshop.cleverapps.io/api/blogpost/';
            autor : HTMLInputElement = null;
            title : HTMLInputElement = null;
            article : HTMLInputElement = null;

  @Prop() history: RouterHistory;

  handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.target);

    data.append( "json", JSON.stringify( data ) );

    fetch(`${this.apiRootUrl}`,{
      method: 'POST',
      body: JSON.stringify({  
        title:  this.title.value,
        autor: this.autor.value,
        article: this.article.value
      }),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }).then(() =>{ alert('Les données sont bien enregistrées!'); this.goback();} );
      }

      componentWillLoad () {
        this.handleSubmit = this.handleSubmit.bind(this);
     }  
     goback() {
    
      this.history.goBack();
     }   

  render() {
      return (
    <div class="app-add" id="stage" >
      
  <form onSubmit={this.handleSubmit} >

    <div class="row">
      <div class="col-25">
        <b>Titre:</b>
      </div>
      <div class="col-75">
        <input type="text" id="fname" name="titre" placeholder="Le titre..." ref={(title: HTMLInputElement) => this.title = title }  required />
      </div>
    </div>

    <div class="row">
      <div class="col-25">
        <b>Author:</b>
      </div>
      <div class="col-75">
        <input type="text" id="lname" name="author" placeholder="The author..." ref={(autor: HTMLInputElement) => this.autor = autor }  required />
      </div>
    </div>

    <div class="row">
      <div class="col-25">
        <b>Contenu:</b>
      </div>
      <div class="col-75">
      <input type="text" id="lname" name="article" placeholder="Ecrivez le contenu... " ref={(article: HTMLInputElement) => this.article = article }  required />
      </div>
    </div>
        <br/>
        
    <div class="row">
      <input type="submit" value="Ajouter"/>
    </div>
  </form>
</div>
 




      );
    
  }
  

}
