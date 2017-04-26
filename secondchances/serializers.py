from rest_framework import serializers
from .models import *


class User_ProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = User_Profile
        fields = ('user', 'bio', 'created', 'last_login')


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('password', 'e-mail', 'username')


class JobSerializer(serializers.ModelSerializer):
    class Meta:
        model = Job
        fields = ('owner', 'title', 'description', 'created')


class SkillsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Skills
        fields = ('skill',)


class Provided_SkillSerializer(serializers.ModelSerializer):
    class Meta:
        model = Provided_Skill
        fields = ('owner', 'skill')


class Required_SkillSerializer(serializers.ModelSerializer):
    class Meta:
        model = Required_Skill
        fields = ('owner', 'skill')


class ConnectionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Connection
        fields = ('user_1', 'user_2', 'created')


class ConversationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Conversation
        fields = ('from_user', 'to_user', 'created')


class MessageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Conversation
        fields = ('conversation', 'text_body', 'created')
