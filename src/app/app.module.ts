import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TreeGridModule } from '@syncfusion/ej2-angular-treegrid';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageService,  FilterService,EditService, ColumnChooserService,ToolbarService } from '@syncfusion/ej2-angular-treegrid';
import { SortService, ResizeService, ExcelExportService, PdfExportService, ContextMenuService } from '@syncfusion/ej2-angular-treegrid';
import {ButtonModule} from '@syncfusion/ej2-angular-buttons';
import { DropDownListAllModule } from '@syncfusion/ej2-angular-dropdowns';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TreeGridModule,
    ButtonModule,
    DropDownListAllModule
  ],
  providers: [
    PageService,
    SortService,
    FilterService,
    EditService,
    ToolbarService,
    ResizeService,
    ExcelExportService,
    PdfExportService,
    ContextMenuService,
    ColumnChooserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
