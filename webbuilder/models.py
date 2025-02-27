from django.db import models
from django.contrib.auth.models import User

class WebPage(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name="web_pages")
    title = models.CharField(max_length=255, default="Untitled Page")
    description = models.TextField(blank=True, null=True)
    html = models.TextField(blank=True, null=True)
    css = models.TextField(blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.title
