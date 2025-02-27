from django.urls import path
from . import views

app_name = 'webbuilder'

urlpatterns = [
    path('', views.index, name='index'),
    path('pages/', views.list_pages, name='list_pages'),
    path('page/create/', views.create_page, name='create_page'),
    path('page/edit/<int:id>/', views.edit_page, name='edit_page'),
    path('page/save/<int:id>/', views.save_page, name='save_page'),
    path('page/delete/<int:id>/', views.delete_page, name='delete_page'),  # New URL for delete
    path('page/preview/<int:id>/', views.preview_page, name='preview_page'),
]
