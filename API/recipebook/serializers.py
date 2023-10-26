from .models import *
from rest_framework import serializers


class RecipeSerializer(serializers.HyperlinkedModelSerializer):
   class Meta:
       model = Recipe
       fields = ['id', 'name', 'content', 'category', ]


class CategorySerializer(serializers.HyperlinkedModelSerializer):
   class Meta:
       model = Category
       fields = ['id', 'name', 'nameRU']


class RecipeCategorySerializer(serializers.HyperlinkedModelSerializer):
   class Meta:
       model = RecipeCategory
       fields = ['id', 'recipe', 'category', ]
