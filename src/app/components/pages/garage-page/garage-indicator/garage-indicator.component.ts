import { Component, OnInit } from '@angular/core';
import { GarageDoorStatusEnum } from 'src/app/models/GarageDoorStatusEnum';
import { IGarageDoorModel } from 'src/app/models/IGarageDoorModel';
import { GarageDoorService } from 'src/app/services/garage-door.service';

@Component({
  selector: 'app-garage-indicator',
  templateUrl: './garage-indicator.component.html',
  styleUrls: ['./garage-indicator.component.scss']
})
export class GarageIndicatorComponent implements OnInit {
  status!: GarageDoorStatusEnum;
  garageDoorStatuses = GarageDoorStatusEnum;
  loading = true;

  constructor(
    private readonly garageDoorService: GarageDoorService
  ) { }

  ngOnInit(): void {
    this.getStatus();
  }

  private getStatus() {
    this.garageDoorService.getStatus().subscribe((response: IGarageDoorModel) => {
      this.loading = false
      this.status = response.state;
    }
    );
  }

  getActionButtonText() {
    switch(this.status) {
      case GarageDoorStatusEnum.Open:
        return 'Close';
      case GarageDoorStatusEnum.Closed:
        return 'Open';
      case GarageDoorStatusEnum.Stuck: 
        return 'Close'
    }
  }

  toggleGarageDoorState() {
    const action = this.getActionButtonText().toLowerCase();
    this.garageDoorService.toggleGarageDoorState(action).subscribe(() => {
      this.loading = true;
      setTimeout(() => {
        this.getStatus()
      }, 12000);
    });
  }

}
