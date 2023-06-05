import { NgModule } from "@angular/core";
import { LoginComponent } from "./auth/login/login.component";
import { CommonModule } from "@angular/common";
import { IonicModule } from "@ionic/angular";

@NgModule({
    declarations: [
        LoginComponent
    ],
    imports: [
        CommonModule,
        IonicModule
    ],
    exports: [
        LoginComponent
    ]
}) 

export class ComponentsModule {}