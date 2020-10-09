from rest_framework import serializers

from blogs.models import Blog

class BlogSerializer(serializers.ModelSerializer):
    class Meta:
        model = Blog
        fields = ('title', 'description', 'photo_main', 'content', 'photo_1', 'content_1', 'photo_2', 'content_2', 'photo_3', 'content_3', 'photo_4', 'content_4', 'photo_5', 'content_5', 'photo_6', 'content_6', 'submit_date')