import { Directive, TemplateRef } from '@angular/core';

@Directive({ selector: '[ng-typehead-input-option-tmp]' })
export class NgTypeheadInputOptionTemplateDirective {
    constructor(public template: TemplateRef<any>) {}
}

@Directive({ selector: '[ng-typehead-input-label-tmp]' })
export class NgTypeheadInputLabelTemplateDirective {
    constructor(public template: TemplateRef<any>) {}
}

@Directive({ selector: '[ng-select-input-option-tmp]' })
export class NgSelectInputOptionTemplateDirective {
    constructor(public template: TemplateRef<any>) {}
}

@Directive({ selector: '[ng-select-input-label-tmp]' })
export class NgSelectInputLabelTemplateDirective {
    constructor(public template: TemplateRef<any>) {}
}
