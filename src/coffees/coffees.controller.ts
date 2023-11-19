import { Body, Controller, Get, Param, Post, Res } from '@nestjs/common';

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

    // @Get(':id')
    // dynamicRouteTesting(@Param('id') id : string){
    //     return `Dynamic id = ${id}`
    // }

    @Post()
    postData(@Body() body){
        return body; 
    }

    @Post('/test')
    specificPostData(@Body('anuj') anujKey : string){
        return `the body key is = ${anujKey}`; 
    }

    @Get('status')
    explicitStatusCode(@Res() response){
        return response.status(400).json({
            success : true,
            msg : 'Hello World !'
        })
    }
}
