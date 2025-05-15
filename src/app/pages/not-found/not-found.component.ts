import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-not-found',
  template: `
    <div
      class="h-full flex flex-col items-center justify-center text-center"
    >
      <img
        src="assets/images/404.png"
        alt="404 Not Found"
      />
    </div>
  `,
})
export class NotFoundComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
