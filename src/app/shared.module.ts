import { NgModule, ModuleWithProviders } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [NgbModal]
    };
  }
}
