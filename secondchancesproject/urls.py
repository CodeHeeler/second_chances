"""secondchancesproject URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/1.11/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  url(r'^$', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  url(r'^$', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.conf.urls import url, include
    2. Add a URL to urlpatterns:  url(r'^blog/', include('blog.urls'))
"""
from django.conf.urls import url, include
from django.contrib import admin
from secondchances import views

urlpatterns = [
    url(r'^secondchances/', views.login),
    url(r'^secondchances/profile/(?P<user_id>[0-9]+)', views.profile),
    url(r'^secondchances/postings', views.postings),
    url(r'^secondchances/postings/(?P<user_id>[0-9]+)/search', views.posting_search),
    url(r'^secondchances/postings/(?P<posting_id>[0-9]+)', views.posting_detail),
    url(r'^secondchances/messages', views.messages),
    url(r'^secondchances/messages/(?P<conversation_id>[0-9]+)', views.message_detail),
    url(r'^secondchances/myskills/(?P<user_id>[0-9]+)', views.myskills),
    url(r'^admin/', admin.site.urls),
]
