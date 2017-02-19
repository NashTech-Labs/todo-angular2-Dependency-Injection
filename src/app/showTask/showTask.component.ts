import {Component, OnInit} from "@angular/core";
import {AppService} from "../app.service";
import {Task} from "../task";
import {Router} from "@angular/router";


@Component({
  selector: 'show',
  templateUrl: './app/showTask/showTask.component.html',
  styleUrls: ['']
})

export class ShowComponent implements OnInit {
  constructor(private router: Router,
              private service: AppService) {
  }

  myTask: Task[];

  ngOnInit() {
    this.myTask = this.service.taskArray;
  }

  deleteByIndex(index: number) {
    this.service.delete(index)
    alert('Task Removed')
  }


  editTask(index: number) {
    this.router.navigate(['create',index])
  }
}
