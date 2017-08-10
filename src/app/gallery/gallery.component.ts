import {Component, Input} from '@angular/core';
 
@Component({
  selector: 'gallery',
  template: `
	<div class="modal fade" id="selectedImageModal" >
	  <div class="modal-dialog" role="document">
	    <div class="modal-content">
	      <div class="modal-body">
	         <div class="selectedImage" *ngIf="selectedImage">
              <img src="{{selectedImage.url}}" >
              <div class="btn-back" (click)=navigate(false)>
                &lt;
             </div>
             <div class="btn-forward" (click)=navigate(true)>
                &gt;
             </div>
              <div class="caption">
                 <p><strong>{{selectedImage.title}}</strong></p>
                 <p>{{selectedImage.date}}</p>
              </div>
           </div>
	      </div>
	    </div>
	  </div>
	</div>
	<ul id="thumbnailsList">
	   <li *ngFor="let image of datasource" >
	      <img src="{{image.url}}" 
                  class="tn"
		              width="191" 
                  height="146"  
		              data-toggle="modal" 
                  data-target="#selectedImageModal"
                  (click)=setSelectedImage(image)>
	   </li>
	</ul>
  `,
  styles: [`
  	ul { 
      padding:0; 
      width:780px; 
      margin:20px auto
    }
  	li { 
      display:inline;
    }
    .tn { 
	    margin:2px 0px;
	    box-shadow:#999 1px 1px 3px 1px; 
	    cursor: pointer 
    }
  	.modal-content {
	    width: 670px !important;
	  }
    .selectedImage { 
      width:640px;
      position:relative 
    }
    .caption {
      position:absolute;
      height:70px;
      width:100%;
      top:430px;
      left:0;
      opacity:0.9;
      background-color:black;
      color:white;
      padding:5px;
      font-family:verdana;
      font-size:12px;
    }
    p {
       -webkit-margin-before: 5px !important;
       -webkit-margin-after: 5px !important;
    }
    .btn-back, .btn-forward {
      position:absolute;
      opacity:0.9;
      background-color:black;
      padding:10px;
      top:190px;
      color:white;
      text-weight:bold;
      cursor:pointer;
    }
     
    .btn-forward{
      left:612px;
    }
    .selectedImage img {
      width: 640px;
      height: 500px;
    }
  `]
})
export class GalleryComponent { 
 
   @Input() datasource;
   selectedImage;
 
   setSelectedImage(image){
      this.selectedImage= image;	
   }

   navigate(forward){
      var index = this.datasource.indexOf(this.selectedImage)+(forward ? 1: -1);
      if(index >= 0 && index < this.datasource.length){
         this.selectedImage = this.datasource[index];  
      }
   }

   
}