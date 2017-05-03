from django.contrib import admin
from .models import *

admin.site.register(User_Profile)
admin.site.register(Job)
admin.site.register(Location)
admin.site.register(User_Location)
admin.site.register(Skills)
admin.site.register(Provided_Skill)
admin.site.register(Required_Skill)
admin.site.register(Needs)
admin.site.register(User_Needs)
admin.site.register(Provided_Needs)
admin.site.register(Service)
admin.site.register(Connection)
admin.site.register(Conversation)
admin.site.register(Message)
