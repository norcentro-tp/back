import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { Res } from '@nestjs/common';
import { ApiExcludeController } from '@nestjs/swagger';
@ApiExcludeController()
@Controller('')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  redirect(@Res() res) {
    return res.redirect('/api');
  }
}
