import { Routes } from '@angular/router';
import {StartComponent} from "./start/start.component";
import {JocComponent} from "./joc/joc.component";
import {EndGuillemMartinezComponent} from "./endGuillemMartinez/end-guillem-martinez/end-guillem-martinez.component";

export const routes: Routes = [
  { path: '', component: StartComponent },
  { path: 'joc', component: JocComponent },
  { path: 'end', component: EndGuillemMartinezComponent }
];
