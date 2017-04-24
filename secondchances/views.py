from django.shortcuts import render
from django.http import HttpResponse


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
