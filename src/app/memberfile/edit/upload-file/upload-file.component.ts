import { Component, ViewChild, ElementRef, Input, OnDestroy } from '@angular/core';
import { UploadFileService } from '@core/services/upload-file/upload-file.service';
import { HttpEventType } from '@angular/common/http';
import { NotificationService } from '@core/services/notification/notification.service';
import { Subject, Subscription } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.scss']
})
export class UploadFileComponent implements OnDestroy {

  constructor(private uploadFileService: UploadFileService, private notificationService: NotificationService) {}

  @Input() appearance: 'outline' | 'standard' | 'fill' = "fill";
  @Input() imageUrl: string;
  @Input() showImage:boolean = true;
  @Input() memberId: string;

  @ViewChild('UploadFileInput') uploadFileInput: ElementRef;
  filename = 'Select File';
  imageError: string;
  imgLoaded:boolean;
  uploading:boolean;
  uploadProgress: number;
  uploadSuccess: 'success' | 'fail';
  private selectedFile: File;
  private uploadFile$: Subscription;

  // 2st way -- Unsubscribing Declaratively with takeUntil
  cancelUpload$: Subject<boolean> = new Subject<boolean>();

  /* file size and type check */
  public onfileChangeEvent(fileInput: any): void {
    // reset errors
    this.imageError = null;
    this.uploadSuccess = null;
    this.uploadProgress = null;
    if (fileInput.target.files && fileInput.target.files[0]) {
        // Size Filter Bytes (10 MB)
        const max_size = 10485760;
        const allowed_types = ['image/png', 'image/jpeg'];
        const max_height = 15200;
        const max_width = 25600;

        if (fileInput.target.files[0].size > max_size) {
            this.imageError = `Maximum size allowed is ${max_size / 1000} Mb`;
            return;
        }

        if ( !allowed_types.includes(fileInput.target.files[0].type) ) {
            this.imageError = 'Only Images are allowed ( JPG | PNG )';
            return;
        }
        const reader = new FileReader();
        reader.onload = (e: any) => {
            const image = new Image();
            image.src = e.target.result;
            image.onload = rs => {
                const img_height = rs.currentTarget['height'];
                const img_width = rs.currentTarget['width'];

                if (img_height > max_height && img_width > max_width) {
                  this.imageError =  `Maximum dimentions allowed ${max_height} * ${max_width} px`;
                  return;
                } else {
                  this.imageUrl = e.target.result;
                  this.imgLoaded = true;
                }
            };
        };
        reader.readAsDataURL(fileInput.target.files[0]);
        this.filename = fileInput.target.files[0].name;
        this.selectedFile = <File>fileInput.target.files[0];
        // Reset File Input to Selct Same file again
        this.uploadFileInput.nativeElement.value = "";
    } else {
      this.filename = 'Select File';
    }
  }

  public cancel(): void{
    // 1st way -- Unsubscribing Manually
    // if (this.uploadFile$) {
    //   this.uploadFile$.unsubscribe();
    // }

    // 2st way -- Unsubscribing Declaratively with takeUntil
    this.cancelUpload$.next(true);

    this.uploading = false;
    this.imgLoaded = false;
    this.filename = 'Select File';
    this.imageUrl = null;
    this.selectedFile = null;
    this.uploadProgress = null;
    this.uploadSuccess = null;
  }

  public onFileUpload(){
     if (this.selectedFile && this.memberId) {
        this.uploading = true;
        this.uploadSuccess = null;
        this.uploadFile$ = this.uploadFileService.imageUpload(this.memberId, this.selectedFile)
          .pipe(
            // 2st way -- Unsubscribing Declaratively with takeUntil
             takeUntil(this.cancelUpload$)
          )
          .subscribe(
             (event) => {
               if (event.type === HttpEventType.UploadProgress){
                console.log('Upload Progress: ' + Math.round(event.loaded / event.total * 100) + '%');
                 this.uploadProgress = Math.round(event.loaded / event.total * 100);
               } else if (event.type === HttpEventType.Response){
                 console.log(event.message);
                 this.uploading = false;
                 this.imgLoaded = false;
                 this.uploadSuccess = 'success';
                 this.notificationService.showSuccess(event.message);
               }
             },
             (error) => {
              console.log(error);
              this.uploading = false;
              this.uploadSuccess = 'fail';
              this.notificationService.showError(error);
             }
          )
     }
  }

  ngOnDestroy(){
    if (this.uploadFile$) {
      this.uploadFile$.unsubscribe();
    }

    // 2st way -- Unsubscribing Declaratively with takeUntil
    this.cancelUpload$.next(true);
    this.cancelUpload$.unsubscribe();
  }

}
