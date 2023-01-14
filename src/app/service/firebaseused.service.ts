import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FirebaseusedService {
url='https://topperscssdatabase-default-rtdb.firebaseio.com/coursesdata.json';
private headers = new HttpHeaders({'Content-Type': 'application/json'});
  constructor(private http:HttpClient) { }

  topc=[
    // {id:1, title:"Angular - The Complete Guide (2021 Edition)",price:5120,ratings:4.6,studentsno:3423568,author:"Ahuja Rav",desc:"Angular (commonly referred to as Angular 2+ or Angular v2 and above) is a TypeScript-based free and open-source web application framework led by the Angular Team at Google",imageUrl:"https://www.mindinventory.com/blog/wp-content/uploads/2020/07/angular-10.png"},
    // {id:2, title:"Python for Data Science and ML Bootcamp",price:4125,ratings:4.2,studentsno:2347956,author:"Jose San",desc:"Python is an interpreted high-level general-purpose programming language. Its design philosophy emphasizes code readability with its use of significant indentation. ",imageUrl:"https://1.bp.blogspot.com/-dZ1uWZaXk5s/YID6xdT2fZI/AAAAAAAAR7o/Vu3_X-Vv3FQsbNH785AD4A3VzgBaKbAMACLcBGAsYHQ/s1195/Coursepic.PNG"},
    // {id:3, title:"Data Science Fundamentals with Python and SQL",price:7130,ratings:4.8,studentsno:45321567,author:"Polon Lin",desc:"Data science is an interdisciplinary field that uses scientific methods, processes, algorithms and systems to extract knowledge and insights from noisy, structured and unstructured data, and apply knowledge and actionable insights from data across a broad range of application domains. ",imageUrl:"https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://d15cw65ipctsrr.cloudfront.net/5c/4855219e884cc89ae6b6ffa5ae9f83/IBM-Data-Engineering-Foundations-Specialization.jpg?auto=format%2Ccompress&dpr=3&w=175&h=175&fit=fill&bg=FFF"},
    // {id:4, title:"Introduction to Data Science Specialization",price:8130,ratings:4.3,studentsno:56423785,author:"Yan Luose",desc:"Data Science Project concentrates on how the climate impact will highly affect global food production worldwide and how much quantification will impact climate change",imageUrl:"https://th.bing.com/th/id/OIP.CbJY2AuiaxS27dZ7bCYphAHaD8?w=313&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7"},
    // {id:5, title:"Introduction to the Machine Learning",price:2140,ratings:4.1,studentsno:45209854,author:"Aje Syphu",imageUrl:"https://www.vertica.com/wp-content/uploads/2019/04/Machine_learning_199085055.jpeg"},
    // {id:6, title:"HTML, CSS, and Javascript for Web Developers",price:6720,ratings:4.7,studentsno:7865478,author:"Polon Lin",imageUrl:"https://www.1training.org/wp-content/uploads/2017/10/6.png"},
    // {id:7, title:"Web Design for Everybody: Web Development",price:1990,ratings:4.4,studentsno:6754364,author:"Ahuja Rav",imageUrl:"https://th.bing.com/th/id/OIP.u07pZDqALRAf5bEke9bt7AHaD6?pid=ImgDet&rs=1"},
    // {id:8,title:"Front-End Web UI Frameworks: Bootstrap 4",price:5150,ratings:4.2,studentsno:5645678,author:"Yan Luose",imageUrl:"https://th.bing.com/th/id/OIP.3lCj1VtSlgR6s6EyWvD04wHaHa?pid=ImgDet&rs=1"},
    // {id:8, title:"Cloud Network Engineer Professional",price:6120,ratings:4.7,studentsno:987663,author:"Jose San",imageUrl:"https://images.techhive.com/images/article/2017/03/google_cloud-100712668-large.jpg"}
  ]

  gettopc(){
    return this.topc;
  }

  savecourse(topcdata:any[]){
    // return this.http.post(this.url,topcdata)
     return this.http.put(this.url,topcdata,{headers : this.headers})
  }

  fetchCourses(){
    return this.http.get(this.url);
  }

  // deleteCourse(){
  //   return this.http.delete(this.url);
  // }

  
}
