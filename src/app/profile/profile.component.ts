import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginServiceService } from '../Service/login-service.service';
import { user } from '../models/user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  user!: user;
  userId!: any;

  constructor(
    private userService: LoginServiceService,
    private acti: ActivatedRoute,
    public router: Router,
    private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    const userId = this.acti.snapshot.params['id'];
    this.userService.getUserById(userId).subscribe(
      (userI) => {
        this.user = userI
      }
    )}



  deleteUser(user: user) {
    this.userService.deleteUser(parseFloat(localStorage.getItem('idUser')!)).subscribe(
      () => console.log('User deleted successfully'),
      (error) => console.error('Error deleting user:', error)
    );
  }
}




