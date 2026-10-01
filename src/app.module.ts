// import { Module } from '@nestjs/common';
// import { createObserveModule } from '@nestjs/observe';
// import { AppController } from './app.controller.js';
// import { AppService } from './app.service.js';
// import { CursosModule } from './cursos/cursos.module.js';

// export const { ObserveModule, ObserveInstrument } = createObserveModule();

// @Module({
//   imports: [
//     // Distributed tracing, auto-correlated logs, request/job metrics, error
//     // telemetry, alarms, and more — out of the box. Sign up at https://observe.nestjs.com
//     ObserveModule.forRoot({
//       appKey: 'YOUR_APP_KEY',
//       appSecret: 'YOUR_APP_SECRET',
//       serviceId: 'escola-senai',
//     }),
//     CursosModule,
//   ],
//   controllers: [AppController],
//   providers: [AppService],
// })
// export class AppModule {}


import { Module } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { CursosModule } from './cursos/cursos.module.js';

@Module({
  imports: [
    CursosModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}