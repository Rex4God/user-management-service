import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService} from './prisma/prisma.service';
import { UsersModule } from './users/user.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
   
    UsersModule
  ],



  controllers: [AppController],
  providers: [AppService,  PrismaService],
})
export class AppModule {}
