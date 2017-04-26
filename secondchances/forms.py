from django.contrib.auth.models import User
from django import forms


class UserForm(forms.ModelForms):
    password = forms.Charfield(widget=forms.PasswordInput)

    class Meta:
        model = User
        fields = ['username', 'firstname', 'lastname', 'email', 'password']
