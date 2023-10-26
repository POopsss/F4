from django.urls import path, include
from rest_framework import routers
from rest_framework.schemas import get_schema_view
from . import views


router = routers.DefaultRouter()
router.register(r'recipe', views.RecipeViewset)
router.register(r'category', views.CategoryViewset)
router.register(r'recipecategory', views.RecipeCategoryViewest)


urlpatterns = [
   path('', include(router.urls)),
   path('api-auth/', include('rest_framework.urls', namespace='rest_framework')),
   path('openapi', get_schema_view(title="Your Project", description="API for all things …"), name='openapi-schema'),
]
