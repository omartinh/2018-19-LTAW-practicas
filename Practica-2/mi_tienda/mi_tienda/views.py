from django.http import HttpResponse
 #Mi_funcion() crea un mensaje respuesta Http que contiene una cadena
def mi_funcion(request):
    html = "Hola! Mi primera URL!!"

    return HttpResponse(html)
