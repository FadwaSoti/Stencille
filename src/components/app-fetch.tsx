import { Component, Prop ,State, Method} from '@stencil/core';

@Component({
  tag: 'app-fetch',
  styleUrl: 'tab.css'

})
export class AppFetch {

  // Indicate that name should be a public property on the component
  @State() data :any[] ;
  @Prop()
   name: string='/fetch/';
   
  apiRootUrl: string = 'https://polymer-101-workshop.cleverapps.io/api/blogpost/';

  @Method()
  load () {
  
    fetch(`${this.apiRootUrl}`).then(rsp => {
      return   rsp.json();
  
    }).then(data => {
      this.data = data;
  
    }).catch((err) => {
      console.error('Could not load data', err);
    }); 
  }


  componentWillLoad() { 
    console.log('Component is being rendered');

    this.load();
  }
  componentDidLoad() {
    this.load();

    console.log('Component has been rendered');
  }

 
  componentDidUpdate() {
    this.load();

    console.log('Component did update');
  }


  render() {
    if(this.data && this.data.length>0) {

      return (
        
        <div>
          
              { 
                  this.data.map((data) =>
                                        <div>






    <table>                                  
   <tr>
       <th>Title : </th>
       <th>Date : </th>
    </tr>

    <tr>
      <td> {data.title}</td>
      <td> {data.creationDate}</td>
      </tr>
    <tr>
       <th>Author: </th>
       <th>Article : </th>
    </tr>

<tr>
      <td> {data.autor}</td>
      <td id="article"> {data.article}</td>
    </tr>

</table>

 <stencil-route-link url={this.name+data._id}>
 <button>Details
 </button>
</stencil-route-link> 

                                     </div> )
              } 
              
        </div>
              )

    }
    else {
   
   return (" Nothing to render ");
   
    } 
   

    
  }
}