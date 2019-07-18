import datetime
from django.core import validators
from django.core.exceptions import ValidationError
from django.utils.deconstruct import deconstructible
from django.utils.translation import gettext_lazy as _


def validate_birthday(birthday):
    if birthday > datetime.date.today():
        raise ValidationError("The birthday can't be in future")


@deconstructible
class UsernameValidator(validators.RegexValidator):
    regex = r"^\w+$"
    message = _(
        "Enter a valid username. This value may contain only letters, "
        "numbers and underscores."
    )