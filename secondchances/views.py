from django.shortcuts import render, redirect
from rest_framework import viewsets
from .models import *
from django.contrib.auth.models import User
from .serializers import *
from django.http import HttpResponse


class User_ProfileViewSet(viewsets.ModelViewSet):
    queryset = User_Profile.objects.all()
    serializer_class = User_ProfileSerializer


class JobViewSet(viewsets.ModelViewSet):
    queryset = Job.objects.all()
    serializer_class = JobSerializer


class SkillsViewSet(viewsets.ModelViewSet):
    queryset = Skills.objects.all()
    serializer_class = SkillsSerializer


class Provided_SkillViewSet(viewsets.ModelViewSet):
    queryset = Provided_Skill.objects.all()
    serializer_class = Provided_SkillSerializer


class Required_SkillViewSet(viewsets.ModelViewSet):
    queryset = Required_Skill.objects.all()
    serializer_class = Required_SkillSerializer


class ConnectionViewSet(viewsets.ModelViewSet):
    queryset = Connection.objects.all()
    serializer_class = ConnectionSerializer


class ConversationViewSet(viewsets.ModelViewSet):
    queryset = Conversation.objects.all()
    serializer_class = ConversationSerializer


class MessageViewSet(viewsets.ModelViewSet):
    queryset = Message.objects.all()
    serializer_class = MessageSerializer


def profile(request, user_id):
    return HttpResponse('Profile')


def login():
    return HttpResponse('login')


def postings(request):
    return HttpResponse("postings")


def posting_detail(request, posting_id):
    return HttpResponse('posting detail')


def messages(request):
    return HttpResponse('inbox')


def message_detail(request, conversation_id):
    return HttpResponse('message detail')


def myskills(request, user_id):
    return HttpResponse('skill tag editor')


def posting_search(request, user_id):
    return HttpResponse('seach posting by tags')
