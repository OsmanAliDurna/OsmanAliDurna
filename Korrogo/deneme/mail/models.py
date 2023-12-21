from django.db import models
    
class Mail(models.Model):
    name = models.CharField(max_length = 100)
    eMail = models.CharField(max_length = 100)
    date = models.DateField()