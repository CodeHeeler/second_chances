from django.shortcuts import render, redirect
from rest_framework import viewsets
# consider changing to clear up namespace
from .models import *
from django.contrib.auth.models import User
# consider changing to clear up namespace
from .serializers import *
from django.http import HttpResponse
from django.views.generic import View  #
from django.contrib.auth import authenticate, login  #
from .forms import UserForm  #
from django.views.decorators.csrf import csrf_exempt
from rest_framework.decorators import list_route
from rest_framework.response import Response
from rest_framework.permissions import AllowAny

class User_ProfileViewSet(viewsets.ModelViewSet):
    queryset = User_Profile.objects.all()
    serializer_class = User_ProfileSerializer


class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [AllowAny]

    def get_queryset(self):
        return self.queryset.filter(pk=self.request.user.id)

    def create(self, request):
        response = super(UserViewSet, self).create(request)
        # login user via session
        login(request, self.user)
        return response

    def perform_create(self, serializer):
        # calls save on the serializer
        self.user = serializer.save()

    @list_route(methods=['post'])
    def login(self, request):
        user = authenticate(username=request.data['username'], password=request.data['password'])

        if user:
            if user.is_active:
                login(request, user)
                return Response({'id': user.id})
        return Response({}, status=401)


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


class UserFormView(View):
    form_class = UserForm
    template_name = 'secondchances/registration_form.html'  # html template where registration form is
    # template_name = 'build/index.html'  # html template where registration form is


    # display blank form
    def get(self, request):
        form = self.form_class(None)
        return render(request, self.template_name, {'form': form})

    # process form data
    def post(self, request):
        form = self.form_class(request.POST)

        if form.is_valid():
            user = form.save(commit=False)  # creates object from form but does not save to db

            #  cleaned, normalized data
            username = form.cleaned_data['username']
            password = form.cleaned_data['password']
            user.set_password(password)
            user.save()

            #  return user object if credentials are correct

            user = authenticate(username=username, password=password)

            if user:
                if user.is_active:
                    print("here I am")
                    login(request, user)
                    userprofile = User_Profile(user_id=user.id, bio="Your Bio Goes Here")
                    userprofile.save()
                    return redirect('/secondchances/profile/' + str(user.id) + '/')  # or redirect to any page

        # if not here is a blank form
        return render(request, self.template_name, {'form': form})


def profile(request, user_id):
    userprofile = User_Profile.objects.get(user=request.user)
    context = {'userprofile': userprofile}
    return render(request, 'secondchances/profile.html', context)

#
# def loginx(request):
#     return HttpResponse('login')
#

def postings(request):
    return render(request, '/Users/rebelmerf/class/final/second_chances/build/index.html', {})


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
