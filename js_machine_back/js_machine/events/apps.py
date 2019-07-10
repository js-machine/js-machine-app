from django.apps import AppConfig
from django.utils.translation import gettext_lazy as _


class EventConfig(AppConfig):
    name = "js_machine.events"
    verbose_name = _("Events")
