# forms.py
from django.contrib.auth.forms import UserCreationForm, UserChangeForm
from django.contrib.auth import get_user_model # 유저 직접참조 안하려고 사용

class CustomUserCreationForm(UserCreationForm):

    class Meta(UserCreationForm.Meta):
        model = get_user_model()
        # fields를 이용해 추가로 받을 정보를 요구 가능
        # 단, 장고에서 제공하는 값만 가능하다.
        # fields = UserCreationForm.Meta.fields + ('email', )

class CustomUserChangeForm(UserChangeForm):

    class Meta(UserChangeForm.Meta):
        model = get_user_model()