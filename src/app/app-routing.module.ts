import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AttendanceListComponent } from './attendance/attendance-list/attendance-list.component';
import { CreateAttendanceComponent } from './attendance/create-attendance/create-attendance.component';
import { UpdateAttendanceComponent } from './attendance/update-attendance/update-attendance.component';
import { HomePageComponent } from './attendance/home-page/home-page.component';
const routes: Routes = [
  {path:'attendance', component:AttendanceListComponent},
  {path:'create-Attendance', component:CreateAttendanceComponent},
  {path:'update-Attendance/:attendanceId', component:UpdateAttendanceComponent},
  {path:'', redirectTo:'home-page', pathMatch:'full'},
  {path:'home-page', component:HomePageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
