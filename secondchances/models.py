from django.db import models
from django.contrib.auth.models import User


class User_Profile(models.Model):
    user = models.ForeignKey(User)
    bio = models.TextField(blank=True)
    created = models.DateTimeField(auto_now=True)
    last_login = models.DateTimeField(auto_now_add=True)


class Job(models.Model):
    owner = models.ForeignKey(User_Profile)
    title = models.CharField(max_length=100)
    description = models.TextField()
    created = models.DateTimeField(auto_now=True)


class Skills(models.Model):
    skill = models.CharField(max_length=30)


class Provided_Skill(models.Model):
    owner = models.ForeignKey(User_Profile)
    skill = models.ForeignKey(Skills)


class Required_Skill(models.Model):
    owner = models.ForeignKey(Job)
    skill = models.ForeignKey(Skills)


class Connection(models.Model):
    user_1 = models.ForeignKey(User_Profile, related_name='Connection_user_1')
    user_2 = models.ForeignKey(User_Profile, related_name='Connection_user_2')
    created = models.DateTimeField(auto_now=True)


class Conversation(models.Model):
    from_user = models.ForeignKey(User_Profile, related_name='Conversation_from_user')
    to_user = models.ForeignKey(User_Profile, related_name='Conversation_to_user')
    created = models.DateTimeField(auto_now=True)


class Message(models.Model):
    conversation = models.ForeignKey(Conversation)
    text_body = models.TextField()
    created = models.DateTimeField(auto_now=True)
