from rest_framework import viewsets
from .serializers import EventSerializer
from .models import Event
from .pagination import EventResultSetPagination


class EventViewSet(viewsets.ModelViewSet):
    queryset = Event.objects.all()
    serializer_class = EventSerializer
    pagination_class = EventResultSetPagination