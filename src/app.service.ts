import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  Users = [
    {
        "id" : 1 ,
        "name" : "Billy Lai",
        "email" : "abc@billy.com"
    },
    {
        "id" : 2 ,
        "name" : "Pio Lai",
        "email" : "cde@billy.com"
    }
  ]
  Courses = [
    {
    "id": 1,
    "name": "Nestjs 101"
    },
    {
    "id": 2,
    "name": "成為 Nestjs 大師的路上"
    },
    {
    "id": 3,
    "name": "從零開始的 nestjs 之旅"
    },
    {
    "id": 4,
    "name": "You Don't Know Js"
    },
    {
    "id": 5,
    "name": "I Don't Know Js yet"
    }
]

  getUsers() {
    return this.Users;
  }

  getCourses() {
    return this.Courses;
  }
}
