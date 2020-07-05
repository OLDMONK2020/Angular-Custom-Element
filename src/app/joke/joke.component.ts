import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { JokeService } from './services/joke.service';

@Component({
    selector: 'joke',
    templateUrl: './joke.component.html',
    styleUrls: ['./joke.component.scss'],
    providers: [JokeService]
})

export class JokeComponent implements OnInit {
    jokeCount: any = 0;
    currentStatus: Array<object>;
    @Input() label = 'Joke';
    @Output() jokeCountOutput = new EventEmitter();
    constructor(private jokeService: JokeService) { }

    ngOnInit() {
        this.getJoke();
    }

    getJoke() {
        this.jokeService.getRandomJoke()
            .subscribe(res => {
                if (res) {
                    this.currentStatus = res["content"];
                    this.jokeCount++;
                    this.jokeCountOutput.emit(this.jokeCount);
                }
            }, error => {
                this.currentStatus = error;
            });
    }
}