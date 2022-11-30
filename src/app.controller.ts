import { Body, Controller, Get, Post, Render } from '@nestjs/common';
import { AppService } from './app.service';
import { TelefonDto } from './telefon.dto';
import { TextColorDto } from './text-color.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Render('form')
  getHello(): object {
    return {};
  }
  @Post()
  @Render('telefon')
  handleColor(@Body() body: TelefonDto): object {
    return body;
  }
}
