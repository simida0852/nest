import { Injectable } from '@nestjs/common';

@Injectable()
export class NewsService {
    myNews() {
        return [
            {
                name: 'news-1111',
            },
            {
                name: 'news-2222',
            },
            {
                name: 'news-333',
            },
        ]
    }
}
