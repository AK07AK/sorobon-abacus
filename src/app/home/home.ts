import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class HOme {
  modalTitle:string='';

  showCard(cardName:string){
    this.modalTitle=cardName;
    this.openModal()
  }

  openModal() {
      document.getElementById('backdrop')!.classList.add('active');
  }
  closeModal() {
      document.getElementById('backdrop')!.classList.remove('active');
  }
  handleBackdropClick(e:any) {
      if (e.target === document.getElementById('backdrop')) 
        this.closeModal();
    }  

}
