import { NgModule } from "@angular/core";
import { MatToolbarModule} from "@angular/material/toolbar";
import { MatTableModule } from '@angular/material/table';  
import { MatCardModule } from '@angular/material/card' ; 
import { MatButtonModule } from '@angular/material/button';  

@NgModule({
    exports:[
        MatToolbarModule,
        MatTableModule,
        MatCardModule,
        MatButtonModule
    ]
})

export class MaterialModule{}