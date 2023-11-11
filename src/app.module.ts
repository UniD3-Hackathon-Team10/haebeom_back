import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { PostModule } from './post/post.module';
import { PrismaModule } from './prisma/prisma.module';
import { ClaimModule } from './claim/claim.module';

@Module({
  imports: [UserModule, PostModule, PrismaModule, ClaimModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
