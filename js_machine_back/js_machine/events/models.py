from django.db import models



class Event(models.Model):
    title = models.CharField(max_length=150, verbose_name="title")
    description = models.TextField(verbose_name="description")
    date = models.DateField()

    def __str__(self):
        return self.title