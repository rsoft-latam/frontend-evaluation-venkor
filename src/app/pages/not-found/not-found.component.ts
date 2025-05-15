import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-not-found',
  template: `
    <div
      class="h-[calc(100vh-100px)] mt-[60px] flex flex-col items-center justify-center px-4 text-center"
    >
      <img
        src="assets/images/404.png"
        alt="404 Not Found"
        class="w-[50%] sm:w-[50%] md:w-[40%] lg:w-[40%] max-w-[40%]"
      />
    </div>
  `,
})
export class NotFoundComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
