import { Component } from '@angular/core';

@Component({
  selector: 'app-lecture3',
  templateUrl: './lecture3.component.html',
  styleUrl: './lecture3.component.css'
})
export class Lecture3Component {

  name = "Mohamamd Fawareh"
  age = 26;

  imageURL = 'https://th.bing.com/th/id/R.e35ee12fbd7ad0533f485e1d03274dd5?rik=LB3gAJUchVHYsw&riu=http%3a%2f%2fwallpapercave.com%2fwp%2ffFXBCPi.jpg&ehk=iiGoQMd7vTFbSQ8SZLryJiuPsNNkJd%2fVviSkrGotX0I%3d&risl=&pid=ImgRaw&r=0'

 fruits = ["Appels", "Bananes", "Potatoes"]

  display: boolean = true;
  rating: number = 4; // Example rating
  stars: number[] = [1, 2, 3, 4, 5]; // Array to represent 5 stars


  color = "ccc"

  numberValue: number = 2;




  userObj = {
    name: "Rama",
    age: 22,
    color: "Yellow"
  }






  usersArray = [{
    name: "Rama",
    age: 22,
    grade: 15,
  },
    {
      name: "Nancy",
      age: 22,
      grade: 20,
    },

    {
      name: "Mo",
      age: 22,
      grade: 26,
    },




  ]


}
