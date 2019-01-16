import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface Giphy{
    title?:string;
    imageUrl: string;
}

@Injectable()
export class GiphyService{

    constructor (private http: HttpClient) { }
    
    search(searchTerm: string, limit = 3, offset = 0) : Promise<Giphy[]> {
        const param = new HttpParams()
            .set('q', searchTerm)
            .set('api_key', 'TaSiJI9RonmsKUCReiyfn50Du4PXvJRf')
            .set('limit', '3')
            .set('offset', "" + offset)

        return(
            this.http.get('https://api.giphy.com/v1/gifs/search', {params: param})
                .toPromise()
                .then(result =>{
                    const giphys: Giphy[] = [];
                    for (let g of result['data']){
                            giphys.push({
                            imageUrl: g.images.fixed_width.url,
                            title: g.title
                        });
                    }
                    return (giphys);
                })
        )
    }
}