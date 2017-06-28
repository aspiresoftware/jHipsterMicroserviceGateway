import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { DatePipe } from '@angular/common';
import { RouterModule } from '@angular/router';

import { CookieService } from 'angular2-cookie/services/cookies.service';
import {
    JHipsterMicroserviceGatewaySharedLibsModule,
    JHipsterMicroserviceGatewaySharedCommonModule,
    CSRFService,
    AuthServerProvider,
    AccountService,
    UserService,
    StateStorageService,
    LoginService,
    LoginModalService,
    Principal,
    JhiTrackerService,
    HasAnyAuthorityDirective,
    JhiLoginModalComponent,
    LOGIN_ROUTE
} from './';

@NgModule({
    imports: [
        JHipsterMicroserviceGatewaySharedLibsModule,
        JHipsterMicroserviceGatewaySharedCommonModule,
        RouterModule.forRoot([ LOGIN_ROUTE ], { useHash: true })
    ],
    declarations: [
        JhiLoginModalComponent,
        HasAnyAuthorityDirective
    ],
    providers: [
        CookieService,
        LoginService,
        LoginModalService,
        AccountService,
        StateStorageService,
        Principal,
        CSRFService,
        JhiTrackerService,
        AuthServerProvider,
        UserService,
        DatePipe
    ],
    entryComponents: [JhiLoginModalComponent],
    exports: [
        JHipsterMicroserviceGatewaySharedCommonModule,
        JhiLoginModalComponent,
        HasAnyAuthorityDirective,
        DatePipe
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]

})
export class JHipsterMicroserviceGatewaySharedModule {}
