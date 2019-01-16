import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';

const MODULES = [
FlexLayoutModule, MatToolbarModule, MatButtonModule, MatInputModule,
MatIconModule, MatFormFieldModule, MatCardModule
]

@NgModule ({
    imports: MODULES,
    exports: MODULES
})

export class MaterialModule {}