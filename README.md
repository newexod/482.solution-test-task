# ВНИМАНИЕ!!

После запуска проекта командой ng serve у меня постоянно всплывала ошибка: 
ERROR in Error encountered resolving symbol values statically. Function calls are not supported. Consider replacing the function or lambda with a reference to an exported function (position 7:17 in the original .ts file), resolving symbol fakeBackendProvider in D:/482.solution/test-task/src/app/_helpers/fake-backend.ts, resolving symbol fakeBackendProvider in D:/482.solution/test-task/src/app/_helpers/index.ts, resolving symbol AppModule in D:/482.solution/test-task/src/app/app.module.ts, resolving symbol AppModule in D:/482.solution/test-task/src/app/app.module.ts

# ЛЕЧЕНИЕ:
<ul>
	<li>Открыть проект в текстовом редакторе либо IDE </li>
	<li>Открыть файл, к примеру index.html, либо какой-нибудь другой файл в папке src</li>
	<li>Комбинацией клавиш Ctrl + S просто сохранить и всё будет работать</li>
</ul>

# 482.solution

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.2.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
