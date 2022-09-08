from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth import get_user_model # 유저 직접참조 안하려고 사용

class CustomUserCreationForm(UserCreationForm):

	class Meta(UserCreationForm.Meta):
		model = get_user_model()
		fields = UserCreationForm.Meta.fields + ('email', )