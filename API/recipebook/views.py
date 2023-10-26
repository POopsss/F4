from rest_framework import viewsets
from rest_framework import permissions

from .serializers import *
from .models import *


class RecipeViewset(viewsets.ModelViewSet):
   queryset = Recipe.objects.all()
   serializer_class = RecipeSerializer

   def get_queryset(self):
      queryset = Recipe.objects.all()
      category = self.request.query_params.get('category')
      id = self.request.query_params.get('id')
      if category:
         queryset = Recipe.objects.filter(category=Category.objects.get(name=category).id)
         return queryset
      if id:
         queryset = Recipe.objects.filter(id=id)
         return queryset
      return queryset


class CategoryViewset(viewsets.ModelViewSet):
   queryset = Category.objects.all()
   serializer_class = CategorySerializer

   def get_queryset(self):
      queryset = Category.objects.all()
      name = self.request.query_params.get('name')
      if name:
         queryset = Category.objects.filter(name=name)
         return queryset
      return queryset


class RecipeCategoryViewest(viewsets.ModelViewSet):
   queryset = RecipeCategory.objects.all()
   serializer_class = RecipeCategorySerializer