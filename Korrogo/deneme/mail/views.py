from django.shortcuts import render
from django.core.mail import send_mail
from django.conf import settings
from django.http import HttpResponse
from .models import Mail

infos = ["name", "eMail", "date"]

def index(request):
    if request.method == "POST":
        title = "Cv nizin 1-2 profesyonel dokunaşa ihtiyacı var"
        name = request.POST['name']
        message = " tarihinde sistemimize kayıt yaptırmış ancak teklifimizi hala değerlendirmemiş olduğunuzu görüyoruz."
        email = request.POST["email"]
        date = request.POST['date']
        send_mail(title, "Merhabalar " + name + "Bey,\n" + date + message, "settings.EMAIL_HOST_USER", [email], fail_silently=False)
        
    data = {
        "mailInfo" : Mail.objects.all(),
    }
    return render(request, "index.html", data)