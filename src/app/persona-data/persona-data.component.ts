import { Component, OnInit, Input } from '@angular/core';
import { User } from '../profile/user';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertService } from '../services/alert.service';
import { ProfileService } from '../services/profile.service';

@Component({
  selector: 'app-persona-data',
  templateUrl: './persona-data.component.html',
  styleUrls: ['./persona-data.component.css']
})
export class PersonaDataComponent implements OnInit {

  @Input()user: User;

  profileForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private alertService: AlertService,
    private profileService: ProfileService
  ) {
    this.createForm();
  }

  ngOnInit(): void {
    this.profileForm.setValue(
      {
        userName: this.user.username,
        firstName: this.user.name,
        lastName: this.user.name,
      }
    );
  }

  createForm(): void {
    this.profileForm = this.formBuilder.group({
      userName: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
    });
  }

  onSubmit() {

    const user: User = {
      username: this.profileForm.get('userName').value,
      firstName: this.profileForm.get('firstName').value,
      lastName: this.profileForm.get('lastName').value
    };

    this.profileService.updateProfile(user)
      .subscribe(
        data => {
          console.log(data);
          this.alertService.success('Se ha actualizado los datos del perfil');
        }
      );
  }
}
