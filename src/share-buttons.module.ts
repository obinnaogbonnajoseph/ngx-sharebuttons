import { NgModule } from '@angular/core';
import { JsonpModule } from '@angular/http';
import { CommonModule } from '@angular/common';

import { ShareButtonsComponent } from './components/share-buttons/share-buttons.component';
import { ShareButtonComponent } from './components/share-button/share-button.component';
import { ShareButtonDirective } from './directives/share-button/share-button.directive';
import { ShareButtonsService } from './services/share-buttons.service';
import { WindowService } from './services/window.service';
import { NFormatterPipe } from './helpers/n-formatter.pipe';
import { ShareButton, ShareArgs, ShareProvider } from './helpers';

@NgModule({
    declarations: [
        ShareButtonsComponent,
        ShareButtonComponent,
        ShareButtonDirective,
        NFormatterPipe
    ],
    imports: [
        CommonModule,
        JsonpModule
    ],
    providers: [
        ShareButtonsService,
        WindowService
    ],
    exports: [
        ShareButtonsComponent,
        ShareButtonComponent,
        ShareButtonDirective,
        NFormatterPipe
    ]
})
export class ShareButtonsModule {

}

export {
    ShareButtonsComponent,
    ShareButtonDirective,
    ShareButton,
    NFormatterPipe,
    ShareButtonsService,
    ShareArgs,
    ShareProvider
}
