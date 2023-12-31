import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-health-check',
  templateUrl: './health-check.component.html',
  styleUrls: ['./health-check.component.css']
})
export class HealthCheckComponent implements OnInit {
  public result?: Result;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<Result>(environment.baseUrl + 'api/health')
    .subscribe(data => {
      this.result = data;

      //console.log(JSON.stringify(this.result));
    }, (error) => {
      console.log(error);
    })

    
  }  
  

}


interface Result {
  checks: Check[];
  totalStatus: string;
  totalResponseTime: number;
}

interface Check {
  name: string;
  responseTime: number;
  status: string;
  description: string;
}
