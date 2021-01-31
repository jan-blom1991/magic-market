import { Component } from '@angular/core';
import { RegisterService } from './register.service';
import { Address } from './address';
import { User } from './user';


@Component({
  templateUrl: './register.component.html'
})

export class RegisterComponent {
    address = new Address();
    user = new User();

    constructor(private registerService: RegisterService) {}

    addUser(): void {
        this.registerService.addUser(this.user).subscribe(
            response => {
                this.user.id = response;
            });
    }

}
