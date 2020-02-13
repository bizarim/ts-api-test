import { Post, JsonController as Controller, Body, Get } from 'routing-controllers';
import { MbService } from '../service/MbService';
import { VerifyDto } from '../dto/VerifyDto';

@Controller('/mb')
export class MbController {
    constructor(private readonly mbService: MbService) { }

    @Get('/test')
    public async test(): Promise<string> {
        await this.mbService.test();
        return 'test';
    }

    @Post('/verify')
    public async verify(@Body() dto: any): Promise<string> {
        console.log('verify:' + JSON.stringify(dto));
        await this.mbService.verify(dto);
        return '<script>window.close();</script>';
    }
}