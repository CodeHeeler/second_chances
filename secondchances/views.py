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
from os import sys

class User_ProfileViewSet(viewsets.ModelViewSet):
    queryset = User_Profile.objects.all()
    serializer_class = User_ProfileSerializer
    permission_classes = [AllowAny]

    # def update(self, request, pk):
    #     profile = User_Profile.objects.get(user_id=20)
    #     profile.firstname="anything"
    #     return response
    #
    # def perform_update(self, request):
    #     pass

class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [AllowAny]

    def get_queryset(self):
        return self.queryset.all()

    def create(self, request):
        response = super(UserViewSet, self).create(request)
        # login user via session
        login(request, self.user)
        # user_profile = User_Profile(user=self.user.id)
        user_profile = User_Profile(user=self.request.user)
        user_profile.save()
        # return Response({'id': self.request.user.id})
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

    def get_queryset(self):
        try:
            jobs = []
            user_id = self.kwargs['user_id']
            user_profile = User_Profile.objects.get(user=user_id)
            provided_skills = Provided_Skill.objects.filter(owner=user_profile)
            required_skills = Required_Skill.objects.all()
            user_locations = User_Location.objects.filter(owner=user_profile)
            for owned_skill in provided_skills:
                for job_skill in required_skills:
                    if (owned_skill.skill == job_skill.skill):
                        if len(user_locations) == 0:
                            jobs.append(job_skill.owner)
                        else:
                            for spot in user_locations:
                                if str(job_skill.owner.location) == str(spot):
                                    jobs.append(job_skill.owner)
            return jobs
        except:
            return Job.objects.all().sort(key=created, reverse=True)



class SkillsViewSet(viewsets.ModelViewSet):
    queryset = Skills.objects.all()
    serializer_class = SkillsSerializer


class Provided_SkillViewSet(viewsets.ModelViewSet):
    queryset = Provided_Skill.objects.all()
    # queryset = Provided_Skill.objects.filter(owner=user_id)
    serializer_class = Provided_SkillSerializer

    def get_queryset(self):
        try:
            user_id = self.kwargs['user_id']
            user_profile = User_Profile.objects.get(user=user_id)
            # provided_skill = user_profile.provided_skill_set.all()
            provided_skills = Provided_Skill.objects.filter(owner=user_profile)
            for owned_skill in provided_skills:
                owned_skill.skill_string = owned_skill.skill.skill
                owned_skill.save()
            return provided_skills
        except:
            return Provided_Skill.objects.all()


class Required_SkillViewSet(viewsets.ModelViewSet):
    queryset = Required_Skill.objects.all()
    serializer_class = Required_SkillSerializer

    def get_queryset(self):
        try:
            job_id = self.kwargs['job_id']
            job = Job.objects.get(id=job_id)
            required_skills = Required_Skill.objects.filter(owner=job)
            for owned_skill in required_skills:
                owned_skill.skill_string = owned_skill.skill.skill
                owned_skill.save()
            return required_skills
        except:
            return Required_Skill.objects.all()


class LocationViewSet(viewsets.ModelViewSet):
    queryset = Location.objects.all()
    serializer_class = LocationSerializer


class User_LocationViewSet(viewsets.ModelViewSet):
    queryset = User_Location.objects.all()
    # queryset = Provided_Skill.objects.filter(owner=user_id)
    serializer_class = User_LocationSerializer

    def get_queryset(self):
        try:
            user_id = self.kwargs['user_id']
            user_profile = User_Profile.objects.get(user=user_id)
            user_locations = User_Location.objects.filter(owner=user_profile)
            for owned_location in user_locations:
                owned_location.location_string = str(owned_location.location)
                owned_location.save()
            return user_locations
        except:
            return User_Location.objects.all()


# class Job_LocationViewSet(viewsets.ModelViewSet):
#     queryset = Job_Location.objects.all()
#     serializer_class = JobLocationSerializer
#
#     def get_queryset(self):
#         try:
#             job_id = self.kwargs['job_id']
#             job = Job.objects.get(id=job_id)
#             job_locations = Job_Location.objects.filter(owner=job)
#             for owned_location in job_locations:
#                 owned_location.location_string = str(owned_location.location)
#                 owned_location.save()
#             return job_locations
#         except:
#             return Job_Location.objects.all()


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


def index(request):
    return render(request, 'secondchances/index.html')

def messages(request):
    return HttpResponse('inbox')


def message_detail(request, conversation_id):
    return HttpResponse('message detail')


def myskills(request, user_id):
    return HttpResponse('skill tag editor')


def posting_search(request, user_id):
    return HttpResponse('seach posting by tags')
