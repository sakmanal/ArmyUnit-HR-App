import { Component, ViewChild, ElementRef, Input } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-select-file-form',
  templateUrl: './select-file.component.html',
  styleUrls: ['./select-file.component.scss']
})
export class SelectFileComponent {

  @Input() appearance: 'outline' | 'standard' | 'fill' = "fill";
  @Input() imageUrl: string;
  @Input() showImage:boolean = true;

  @ViewChild('UploadFileInput') uploadFileInput: ElementRef;
  filename = 'Select File';
  imageError: string;
  imgLoaded:boolean;
  uploading = true;

  /* without file size and type check */
  // onfileChangeEvent(fileInput: any) {

  //   if (fileInput.target.files && fileInput.target.files[0]) {


  //     this.filename = fileInput.target.files[0].name;


  //     const reader = new FileReader();
  //     reader.onload = (e: any) => {
  //       const image = new Image();
  //       image.src = e.target.result;
  //       image.onload = rs => {

  //         // Return Base64 Data URL
  //         this.imageUrl = e.target.result;
  //       };
  //     };
  //     reader.readAsDataURL(fileInput.target.files[0]);

  //     // Reset File Input to Selct Same file again
  //     this.uploadFileInput.nativeElement.value = "";
  //   } else {
  //     this.filename = 'Select File';
  //   }
  // }

  /* with file size and type check */
  onfileChangeEvent(fileInput: any) {
    // reset errors
    this.imageError = null;
    if (fileInput.target.files && fileInput.target.files[0]) {
        // Size Filter Bytes (10 MB)
        const max_size = 10485760;
        const allowed_types = ['image/png', 'image/jpeg'];
        const max_height = 15200;
        const max_width = 25600;

        if (fileInput.target.files[0].size > max_size) {
            this.imageError = `Maximum size allowed is ${max_size / 1000} Mb`;
            return false;
        }

        if ( !allowed_types.includes(fileInput.target.files[0].type) ) {
            this.imageError = 'Only Images are allowed ( JPG | PNG )';
            return false;
        }
        const reader = new FileReader();
        reader.onload = (e: any) => {
            const image = new Image();
            image.src = e.target.result;
            image.onload = rs => {
                const img_height = rs.currentTarget['height'];
                const img_width = rs.currentTarget['width'];

                // console.log(img_height, img_width);

                if (img_height > max_height && img_width > max_width) {
                  this.imageError =  `Maximum dimentions allowed ${max_height} * ${max_width} px`;
                  return false;
                } else {
                  this.imageUrl = e.target.result;
                  this.imgLoaded = true;
                }
            };
        };
        reader.readAsDataURL(fileInput.target.files[0]);
        this.filename = fileInput.target.files[0].name;
        // Reset File Input to Selct Same file again
        this.uploadFileInput.nativeElement.value = "";
    } else {
      this.filename = 'Select File';
    }
  }

  cancel(){
    this.imgLoaded = false;
    this.filename = 'Select File';
    this.imageUrl = null;
  }

}
