import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Photo } from "src/app/_models/photo";
import { FileUploader } from "ng2-file-upload";
import { environment } from "src/environments/environment";
import { AuthService } from "src/app/_services/auth.service";
import { UserService } from "src/app/_services/user.service";
import { AlertifyService } from "src/app/_services/alertify.service";

@Component({
  selector: "app-photo-editor",
  templateUrl: "./photo-editor.component.html",
  styleUrls: ["./photo-editor.component.css"]
})
export class PhotoEditorComponent implements OnInit {
  @Input() photos: Photo[];
  @Output() getMemberPhotoChange = new EventEmitter<string>();
  baseUrl = environment.apiUrl;
  uploader: FileUploader;
  hasBaseDropZoneOver: boolean;
  currentMain: Photo;

  constructor(
    private authSerivce: AuthService,
    private userService: UserService,
    private pepe: AlertifyService
  ) {}

  ngOnInit() {
    this.initializeUploader;
  }

  public fileOverBase(e: any): void {
    this.hasBaseDropZoneOver = e;
  }

  initializeUploader() {
    this.uploader = new FileUploader({
      url:
        this.baseUrl +
        "users/" +
        this.authSerivce.decodedToken.nameid +
        "/photos",
      authToken: "Bearer " + localStorage.getItem("token"),
      isHTML5: true,
      allowedFileType: ["image"],
      removeAfterUpload: true,
      autoUpload: false,
      maxFileSize: 10 * 1024 * 1024
    });

    this.uploader.onAfterAddingAll = file => {
      file.withCredentials = false;
    };

    this.uploader.onSuccessItem = (item, response, status, headers) => {
      if (response) {
        const res: Photo = JSON.parse(response);
        const photo = {
          id: res.id,
          url: res.url,
          dateAdded: res.dateAdded,
          description: res.description,
          isMain: res.isMain
        };
        this.photos.push(photo);
      }
    };
  }
  setMainPhoto(photo: Photo) {
    this.userService
      .setMainPhoto(this.authSerivce.decodedToken.nameid, photo.id)
      .subscribe(
        () => {
          this.currentMain = this.photos.filter(p => p.isMain === true)[0];
          this.currentMain.isMain = false;
          photo.isMain = true;
          this.authSerivce.changeMemberPhoto(photo.url);
          this.authSerivce.currentUser.photoUrl = photo.url;
          localStorage.setItem(
            "user",
            JSON.stringify(this.authSerivce.currentUser)
          );
          this.pepe.success("Se cambio bien la foto de perfl");
        },
        error => {
          this.pepe.error(error);
        }
      );
  }
}
