import { AfterViewInit, ChangeDetectorRef, Component, TemplateRef, ViewChild } from '@angular/core';
import { ModalRef, ModalService } from './shared/components/modal/services/modal.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  @ViewChild('modal') modalTemplateRef: TemplateRef<any>;
  @ViewChild('template1') template1: TemplateRef<any>;
  @ViewChild('template2') template2: TemplateRef<any>;
  selectedTemplate: TemplateRef<any>;

  title = 'a11y-p2';
  firstName = 'Luiz';
  modalRef: ModalRef;

  constructor(
    private modalService: ModalService,
    private cdRef: ChangeDetectorRef,
    ) {}

  ngAfterViewInit(): void {
    this.selectedTemplate = this.template1;
    this.cdRef.detectChanges();
  }

  showModal(){
    this.selectedTemplate = this.template2;
    this.modalRef = this.modalService.open({
      templateRef: this.modalTemplateRef,
      title: 'User Details',
    });
  }
}
