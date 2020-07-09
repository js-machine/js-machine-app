import { 
  Controller,
  Get,
  Post,
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

  @Post()
  public async postEvent(@Body() event: Event): Promise<string> {
    return this.eventsService.createEvent(event);
  }

  @Delete('{id}')
  public async deleteEvent(@Path() id: string): Promise<void> {
    return this.eventsService.deleteEvent(id);
  }
}
