import { Controller, Get } from '@nestjs/common';

@Controller('coffees')
export class CoffeesController {


    @Get()
    getResults(){
        return 'Testing basic get request';
    }

    @Get('/h')
    getAllResults(){
        return 'Testing basic get request 2';
    }
}
