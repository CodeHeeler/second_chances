from django.db import models
from django.contrib.auth.models import User


class User_Profile(models.Model):
    user = models.ForeignKey(User)
    bio = models.TextField(blank=True)
    created = models.DateTimeField(auto_now=True)
    last_login = models.DateTimeField(auto_now_add=True)


class Job(models.Model):
    owner = models.ForeignKey(User_Profile)
    title = models.CharField(mox_length=100)
    description = models.TextField()
    created = models.DateTimeField(auto_now=True)


class Skills(models.Model):
    skill = models.charField(max_length=30)


class Provided_Skill(models.Model):
    owner = models.ForeignKey(User_Profile)
    skill = models.ForeignKey(Skills)


class Required_Skill(models.Model):
    owner = models.ForeignKey(Job)
    skill = models.ForeignKey(Skills)


class Connection(models.Model):
    user_1 = models.ForeignKey(User_Profile)
    user_2 = models.ForeignKey(User_Profile)
    created = models.DateTimeField(auto_now=True)


class Conversation(models.Model):
    from_user = models.ForeignKey(User_Profile)
    to_user = models.ForeignKey(User_Profile)
    created = models.DateTimeField(auto_now=True)


class Message(models.Model):
    conversation = models.ForeignKey(Conversation)
    text_body = models.TextField()
    created = models.DateTimeField(auto_now=True)
