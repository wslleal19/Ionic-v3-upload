import { Injectable } from '@angular/core';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
import { LoadingController } from 'ionic-angular';

@Injectable()
export class UploadProvider {

  public API_URL:string = "Your upload link";
  public loader:any;
  public progress:any = '0%';

  constructor(private transfer: FileTransfer, private loading: LoadingController) {}

  public upload(arquivo, params = {}, loader = true){
    return new Promise (function (resolve, reject) {
        const fileTransfer: FileTransferObject = this.transfer.create();

        var options: FileUploadOptions = {  
          fileKey: "file",
          fileName: arquivo.substr(arquivo.lastIndexOf('/')+1),
          chunkedMode: true,
          params : params
        }

        if(loader == true){
          this.presentLoading();

          fileTransfer.onProgress((progressEvent: ProgressEvent) => {
            this.progress = Math.round((progressEvent.loaded / progressEvent.total) * 100);

            if(this.progress == 100){
              this.loader.dismiss();
            }
          });
        }

        fileTransfer.upload(arquivo, this.API_URL, options).then((data) => {
          resolve(data);
        }, (err) => {
          reject(err);
        })
     });
  }

  public multipleUpload(){

  }

  public presentLoading(){
      this.loader = this.loading.create({
        content: 'Enviando arquivo... ' + this.progress
      });
      this.loader.present();
  }

  public dismissLoading(){
    this.loader.dismiss();
  }


}
