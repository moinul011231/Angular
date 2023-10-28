import { NgModule  } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav-bar/nav/nav.component';
import { FormsModule } from '@angular/forms';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { BindingComponent } from './pages/binding/binding.component';
import { ParentComponent } from './pages/binding/parent/parent.component';
import { ChildComponent } from './pages/binding/child/child.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule} from 'angular-in-memory-web-api';
import { InMemoryService } from './pages/_service/in-memory.service';
import { StudentsDetailsComponent } from './pages/dashboard/students-details/students-details.component';
import { AddBannerComponent } from './pages/dashboard/add-banner/add-banner.component';
import { AddBannerDirective } from './pages/dashboard/add-banner.directive';
import { BannerDirective } from './pages/dashboard/add-banner/banner.directive';
import { JobOfferComponent } from './pages/dashboard/add-banner/job-offer/job-offer.component';
import { CourseOfferComponent } from './pages/dashboard/add-banner/course-offer/course-offer.component';


 
@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    DashboardComponent,
    BindingComponent,
    ParentComponent,
    ChildComponent,
    StudentsDetailsComponent,
    AddBannerComponent,
    AddBannerDirective,
    BannerDirective,
    JobOfferComponent,
    CourseOfferComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryService,{dataEncapsulation: false}
     )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
