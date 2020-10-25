import { Injectable } from '@angular/core';
import { environment } from '@environments/environment';
import { HttpClient, HttpEventType } from '@angular/common/http';
import { from, Observable, of, throwError } from 'rxjs';
import { concatMap, delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UploadFileService {

  constructor(private http: HttpClient) { }

  public imageUpload(id: string, uploadFile: File): Observable<any> {

    const fileData = new FormData();
    fileData.append('image', uploadFile, uploadFile.name)

    // if API accepts binary Data, we can directly post the 'uploadFile'
    // below we post Form Data
    // return this.http.post(`${environment.apiUrl}/memberfoto/${id}`, fileData, {
    //   reportProgress: true,
    //   observe: 'events'
    // });

    // return throwError("server error");

    const response = [];
    for (let i=0.1; i<=1; i+=0.1){
      response.push({type: HttpEventType.UploadProgress, loaded: i, total: 1 })
    }
    response.push({type: HttpEventType.Response, message:'Image Uploaded successfully!'})

    return from(response).pipe(
      concatMap( item => of(item).pipe ( delay( 500 ) ))
     )

  }

}
