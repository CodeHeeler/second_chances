from django.contrib import admin
from .models import User_Profile, Job, Skills, Provided_Skill, Required_Skill
from .models import Connection, Conversation, Message

admin.site.register(User_Profile)
admin.site.register(Job)
admin.site.register(Skills)
admin.site.register(Provided_Skill)
admin.site.register(Required_Skill)
admin.site.register(Connection)
admin.site.register(Conversation)
admin.site.register(Message)
