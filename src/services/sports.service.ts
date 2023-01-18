import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { sport } from 'src/app/Shared/Sports';
import { sample_sports } from 'src/data';
//import { sample_sports, sample_tags } from 'src/data';
//import { sportS_BY_SEARCH_URL, sportS_BY_TAG_URL, sportS_TAGS_URL, sportS_URL, sport_BY_ID_URL } from '../shared/constants/urls';
//import { sport } from '../shared/models/sport';
//import { Tag } from '../shared/models/Tag';

@Injectable({
  providedIn: 'root'
})
export class SportsService {

  constructor() { }

  getAll(): sport[] {
    return sample_sports;
    //return this.http.get<sport[]>(sports_URL);
  }

   getAllsportsBySearchTerm(searchTerm: string) {
    return this.getAll().filter(sport => sport.name.toLowerCase().includes(searchTerm.toLowerCase()))
   }

  // getAllTags(): Observable<Tag[]> {
  //   return this.http.get<Tag[]>(sportS_TAGS_URL);
  // }

  // getAllsportsByTag(tag: string): Observable<sport[]> {
  //   return tag === "All" ?
  //     this.getAll() :
  //     this.http.get<sport[]>(sportS_BY_TAG_URL + tag);
  // }

  getsportById(sportId:string):sport{
     return this.getAll().find(sport => sport.id == sportId) ?? new sport();
   }

}