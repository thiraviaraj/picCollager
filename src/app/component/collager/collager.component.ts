import {
  Component,
  OnInit,
  Inject,
  ViewChild,
  Output,
  EventEmitter
} from "@angular/core";
import { Store, select } from "@ngrx/store";
import { loadConfigs, unLoadConfigs } from "src/app/actions/config.actions";
import { Observable } from "rxjs";
@Component({
  selector: "app-collager",
  templateUrl: "./collager.component.html",
  styleUrls: ["./collager.component.scss"]
})
export class CollagerComponent implements OnInit {
  fileToUpload = [];
  imageList = [];
  imageSrc: any;
  config$: Observable<any>;
  @Output("onChange") onChange = new EventEmitter();
  @ViewChild("attachments") attachment: any;
  constructor(private store: Store<any>) {
    this.config$ = store.pipe(select("config"));
  }

  ngOnInit(): void {}
  handleFileInput(event: any) {
    for (var i = 0; i < event.target.files.length; i++) {
      let file = event.target.files[i];
      this.fileToUpload.push(event.target.files[i]);
      let reader = new FileReader();
      reader.onload = e => this.imageList.push(reader.result);
      reader.readAsDataURL(file);
    }
    this.store.dispatch(loadConfigs({ data: this.fileToUpload }));
    this.onChange.emit(this.fileToUpload);
    this.attachment.nativeElement.value = "";
  }
  removeSelectedFile(index) {
    // Delete the item from fileNames list
    this.store.dispatch(unLoadConfigs({ data: index}));
    // this.fileToUpload.splice(index, 1);
    this.imageList.splice(index, 1);
    this.onChange.emit(this.fileToUpload);
    // delete file from FileList
    // this.fileList.splice(index, 1);
  }
}
