import { Component, OnInit } from '@angular/core';
import { UserService } from '../../shared/user.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor(public service: UserService) { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.service.register().subscribe(
      (res: any) => {
        if (res.succeded){
          this.service.formModel.reset();
        }
        else{
          res.errors.forEach(function (element:any) {
              switch (element.code) {
                case 'DuplicateUserName':
                  break;
                default:
                  break;
              }
            });
        }
      },
      err => {
        console.log(err);

      }
    );
  }
}
