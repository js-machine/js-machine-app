import { Controller, Get, Post, Route, Delete, Body, Path, Put } from 'tsoa';
import { Digest } from '@js-machine-app/models';
import { Inject } from '@js-machine-app/api/ioc';
import { DigestsService } from '@js-machine-app/api/services/digests';

@Route('digests')
export class DigestsController extends Controller {
  @Inject() private digestsService!: DigestsService;

  @Get()
  public async getDigests(): Promise<Digest[]> {
    return this.digestsService.getDigests();
  }

  @Get('{id}')
  public async getDigestById(@Path() id: string): Promise<Digest> {
    return this.digestsService.getDigestById(id);
  }

  @Post()
  public async createDigest(@Body() digest: Digest): Promise<string> {
    return this.digestsService.createDigest(digest);
  }

  @Put('{id}')
  public async updateDigest(
    @Path() id: string,
    @Body() digest: Digest,
  ): Promise<void> {
    return this.digestsService.updateDigest(id, digest);
  }

  @Delete('{id}')
  public async deleteDigest(@Path() id: string): Promise<void> {
    return this.digestsService.deleteDigest(id);
  }
}
