import { Controller, Get, Param } from '@nestjs/common';

@Controller('coffees')
export class CoffeesController {

    @Get('hello/hi')
    testing(){
        return 'nested'
    }

    @Get()
    getResults(){
        return 'Testing basic get request';
    }

    @Get('/h')
    getAllResults(){
        return 'Testing basic get request 2';
    }

    @Get(':id')
    dynamicRouteTesting(@Param('id') id : string){
        return `Dynamic id = ${id}`
    }
}
