import { Controller, Get, Route } from 'tsoa';
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

  @Get('recent')
  public async getRecentEvents(): Promise<Event[]> {
    return this.eventsService.getRecentEvents();
  }
}
