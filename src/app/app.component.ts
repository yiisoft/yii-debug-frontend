import {Component, OnDestroy, ViewChild} from '@angular/core';
import { ErrorService } from './services/error.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnDestroy {
  title = 'Yii Debugger';
  private ngUnsubscribe = new Subject();

  constructor(private errorService: ErrorService,
              private snackBar: MatSnackBar,
              private iconRegistry: MatIconRegistry,
              private sanitizer: DomSanitizer) {

    iconRegistry.addSvgIcon(
      'check',
      sanitizer.bypassSecurityTrustResourceUrl('assets/img/yes-icon.svg'));
    iconRegistry.addSvgIcon(
      'ban',
      sanitizer.bypassSecurityTrustResourceUrl('assets/img/no-icon.svg'));
    this.initializeErrors();
  }

  showError(errorMessage: string): void {
    this.snackBar.open(errorMessage, 'Close', { duration: 10000 });
  }

  ngOnDestroy(): void {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

  private initializeErrors(): void {
    this.errorService.getErrors().pipe(takeUntil(this.ngUnsubscribe)).subscribe((errors) => {
      this.showError(errors.join('\n'));
    });
  }
}
