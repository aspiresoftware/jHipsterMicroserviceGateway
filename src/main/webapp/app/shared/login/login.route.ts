import { Route } from '@angular/router';

import { JhiLoginModalComponent } from './login.component';

export const LOGIN_ROUTE: Route = {
    path: '',
    component: JhiLoginModalComponent,
    data: {
        authorities: [],
        pageTitle: 'home.title'
    }
};
