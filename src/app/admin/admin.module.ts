import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { Router, RouterModule } from "@angular/router";
import { AdminLayoutComponent } from './shared/admin-layout/admin-layout.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { AddPageComponent } from './add-page/add-page.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EditPageComponent } from './edit-page/edit-page.component';
import { OrdersPageComponent } from './orders-page/orders-page.component';


@NgModule({
    declarations:[
        AdminLayoutComponent,
        LoginPageComponent,
        AddPageComponent,
        EditPageComponent,
        OrdersPageComponent,
        DashboardComponent
    ],
    imports:[
        CommonModule,
        RouterModule.forChild([
            {path:'',component:AdminLayoutComponent,children:[
                {path:'',redirectTo:'/admin/login',pathMatch:'full'},
                {path:'dashboard',component:DashboardComponent},
                {path:'login',component:LoginPageComponent},
                {path:'product/:id/edit',component:EditPageComponent},
                {path:'add',component:AddPageComponent},
                {path:'orders',component:OrdersPageComponent}
            ]}
        ])
    ],
    exports:[RouterModule]

})
export class AdminModule {

}