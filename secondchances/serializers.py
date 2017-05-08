from rest_framework import serializers
from .models import *


class User_ProfileSerializer(serializers.ModelSerializer):
    # user = serializers.PrimaryKeyRelatedField(many=False, read_only=False)
    class Meta:
        model = User_Profile
        fields = ('user', 'firstname', 'lastname', 'emailaddress', 'bio', 'created', 'last_login')

    # def create(self, validated_data):
    #     # return User_Profile.objects.create_user(**validated_data)
    #     new = User_Profile(**validated_data)
    #     new.save()
    #     return new


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('password', 'id', 'email', 'username')

    def create(self, validated_data):
        return User.objects.create_user(**validated_data)


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
