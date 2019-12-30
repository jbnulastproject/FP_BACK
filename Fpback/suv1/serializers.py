from rest_framework import serializers
from . import models


class PostSerializer(serializers.ModelSerializer):
    class Meta:
        fields = ('id', 'title', 'writer', 'body',
                  'created_date', 'updated_date')
        model = models.Post
