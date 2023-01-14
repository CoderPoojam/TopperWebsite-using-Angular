import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor() { }
  courses=['Development','Business','IT and Software','Design']
  topc=[
    {id:1, title:"Angular - The Complete Guide (2021 Edition)",price:5120,ratings:4.6,studentsno:3423568,author:"Ahuja Rav",desc:"Angular (commonly referred to as Angular 2+ or Angular v2 and above) is a TypeScript-based free and open-source web application framework led by the Angular Team at Google",imageUrl:"https://www.mindinventory.com/blog/wp-content/uploads/2020/07/angular-10.png"},
    {id:2, title:"Python for Data Science and ML Bootcamp",price:4125,ratings:4.2,studentsno:2347956,author:"Jose San",desc:"Python is an interpreted high-level general-purpose programming language. Its design philosophy emphasizes code readability with its use of significant indentation. ",imageUrl:"https://1.bp.blogspot.com/-dZ1uWZaXk5s/YID6xdT2fZI/AAAAAAAAR7o/Vu3_X-Vv3FQsbNH785AD4A3VzgBaKbAMACLcBGAsYHQ/s1195/Coursepic.PNG"},
    {id:3, title:"Data Science Fundamentals with Python and SQL",price:7130,ratings:4.8,studentsno:45321567,author:"Polon Lin",desc:"Data science is an interdisciplinary field that uses scientific methods, processes, algorithms and systems to extract knowledge and insights from noisy, structured and unstructured data, and apply knowledge and actionable insights from data across a broad range of application domains. ",imageUrl:"https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://d15cw65ipctsrr.cloudfront.net/5c/4855219e884cc89ae6b6ffa5ae9f83/IBM-Data-Engineering-Foundations-Specialization.jpg?auto=format%2Ccompress&dpr=3&w=175&h=175&fit=fill&bg=FFF"},
    {id:4, title:"Introduction to Data Science Specialization",price:8130,ratings:4.3,studentsno:56423785,author:"Yan Luose",desc:"Data Science Project concentrates on how the climate impact will highly affect global food production worldwide and how much quantification will impact climate change",imageUrl:"https://th.bing.com/th/id/OIP.CbJY2AuiaxS27dZ7bCYphAHaD8?w=313&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7"},
    {id:5, title:"Introduction to the Machine Learning",price:2140,ratings:4.1,studentsno:45209854,author:"Aje Syphu",desc:"Machine learning is the study of computer algorithms that can improve automatically through experience and by the use of data. It is seen as a part of artificial intelligence.",imageUrl:"https://www.vertica.com/wp-content/uploads/2019/04/Machine_learning_199085055.jpeg"},
    {id:6, title:"HTML, CSS, and Javascript for Web Developers",price:6720,ratings:4.7,studentsno:7865478,author:"Polon Lin",desc:"HTML provides the basic structure of sites, which is enhanced and modified by other technologies like CSS and JavaScript. CSS is used to control presentation, formatting, and layout. JavaScript is used to control the behavior of different elements.",imageUrl:"https://www.1training.org/wp-content/uploads/2017/10/6.png"},
    {id:7, title:"Web Design for Everybody: Web Development",price:1990,ratings:4.4,studentsno:6754364,author:"Ahuja Rav",desc:"Web design refers to the design of websites that are displayed on the internet. It usually refers to the user experience aspects of website development rather than software development.",imageUrl:"https://th.bing.com/th/id/OIP.u07pZDqALRAf5bEke9bt7AHaD6?pid=ImgDet&rs=1"},
    {id:8,title:"Front-End Web UI Frameworks: Bootstrap 4",price:5150,ratings:4.2,studentsno:5645678,author:"Yan Luose",desc:"Bootstrap is a free and open-source CSS framework directed at responsive, mobile-first front-end web development. It contains CSS and JavaScript-based design templates for typography, forms, buttons, navigation, and other interface components.",imageUrl:"https://th.bing.com/th/id/OIP.3lCj1VtSlgR6s6EyWvD04wHaHa?pid=ImgDet&rs=1"},
    {id:8, title:"Cloud Network Engineer Professional",price:6120,ratings:4.7,studentsno:987663,author:"Jose San",desc:"Cloud computing is the on-demand availability of computer system resources, especially data storage and computing power, without direct active management by the user. Large clouds often have functions distributed over multiple locations, each location being a data center.",imageUrl:"https://images.techhive.com/images/article/2017/03/google_cloud-100712668-large.jpg"}
  ]

  development=[
    {id:1,name:'python',student:30968392},
    {id:2,name:'Web Development',student:9894441},
    {id:3,name:'Machine Learning',student:6207772},
    
  ]

  musiccourses=[
    {id:1,title:"Pianoforall - Incredible New Way To Learn Piano & Keyboard",price:3432,hours:7,ratings:4.5,ratingscount:4567,students:45323,author:"Dinesh M",lectures:129,level:"Beginner", desc:"The piano is an acoustic, stringed musical instrument invented in Italy by Bartolomeo Cristofori around the year 1700, in which the strings are struck by wooden hammers.",imageUrl:"https://img.thrfun.com/img/084/864/piano_keys_l1.jpg"},
    {id:2,title:"Complete Guitar Lessons System",price:7432,hours:10,ratings:4.8,ratingscount:8765,students:21323,author:"Yasuf P", lectures:89,level:"Intermediate",desc:"The guitar is a fretted musical instrument that typically has six strings. It is held flat against the player's body and played by strumming or plucking the strings with the dominant hand.",imageUrl:"https://th.bing.com/th/id/OIP.5bMxhlzAhckofYRK1CCXgAHaLP?pid=ImgDet&rs=1"},
    {id:3,title:"Learn to play HARMONICA, the easiest instrument to pick up!",price:4567,hours:12,ratings:4.2,ratingscount:5667,students:98765,author:"Alina T",lectures:198,level:"All",desc:"The harmonica, also known as a French harp or mouth organ, is a free reed wind instrument used worldwide in many musical genres, notably in blues, American folk music, classical music, jazz, country, and rock.",imageUrl:"https://reverb-res.cloudinary.com/image/upload/s--xlLZLbLJ--/a_exif,c_limit,f_auto,fl_progressive,g_south,q_auto:eco,w_1280/v1462897549/cx05eeteettzwrsfzgce.jpg"}
  ]

  getmusiccourses(){
    return this.musiccourses;
  }


  getCourses(){
    return this.courses;
  }

  gettopc(){
    return this.topc;
  }

  getdevelopmentcourse(){
    return this.development;
  }

  getId(ID:number)
  {
    return this.topc.find(x => x.id == ID);
  }
}
