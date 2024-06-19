import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  lastUrlSegment?: string;
  route? = Inject(ActivatedRoute)

  ngOnInit(): void {
    this.route.paramMap.pipe(
      switchMap((params: any) => {
        // Obtener el parámetro 'id' de la URL
        this.lastUrlSegment = params.get('id');
        return params;
      })
    ).subscribe();
  }
}
