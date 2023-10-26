from django.db import models


class Recipe(models.Model):
    name = models.CharField(max_length=64, unique=True)
    content = models.TextField()
    category = models.ManyToManyField('Category', through='RecipeCategory')


class Category(models.Model):
    name = models.CharField(max_length=64, unique=True)
    nameRU = models.CharField(max_length=64, unique=True)


class RecipeCategory(models.Model):
    recipe = models.ForeignKey(Recipe, on_delete=models.CASCADE, unique=False)
    category = models.ForeignKey(Category, on_delete=models.CASCADE, unique=False)

    class Meta:
        unique_together = ('recipe', 'category',)
