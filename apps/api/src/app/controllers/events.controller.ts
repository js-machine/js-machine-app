import { 
  Controller,
  Get,
  Post,
  Put,
  Route,
  Body,
  Delete,
  Path
} from 'tsoa';
import { Event } from '@js-machine-app/models';
import { Inject } from '@js-machine-app/api/ioc';
import { EventsService } from '@js-machine-app/api/services/events';

@Route('events')
export class EventsController extends Controller {
  @Inject() private eventsService!: EventsService;

  @Get()
  public async getEvents(): Promise<Event[]> {
    return this.eventsService.getEvents();
  }

  @Get('{id}')
  public async getDigestById(@Path() id: string): Promise<Event> {
    return this.eventsService.getEventById(id);
  }

  @Post()
  public async postEvent(@Body() event: Event): Promise<string> {
    return this.eventsService.createEvent(event);
  }

  @Put('{id}')
  public async updateEvent(
    @Path() id: string,
    @Body() event: Event,
  ): Promise<void> {
    return this.eventsService.updateEvent(id, event);
  }

  @Delete('{id}')
  public async deleteEvent(@Path() id: string): Promise<void> {
    return this.eventsService.deleteEvent(id);
  }
}
