from django.http import HttpResponse
from django.template.loader import get_template
from django.template import Template, Context
from django.shortcuts import render

def mi_funcion(request):
	html = "Hola! Mi primera UrL!!"
	return HttpResponse(html)

def mi_producto(request, param):
	numero = int(param)
	html = "Acceso a producto: %i" % numero;
	return HttpResponse(html)

def index(request):
    return render(request, 'main.html', {'user':'OJKKKR'})


PLANTILLA = """
<!DOCTYPE html>
<html lang="es" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title>Saludo</title>
  </head>
  <body>
    <p>Bienvenido a mi tienda, {{user}}</p>
  </body>
</html>
"""

def saludo(request):
    # --Procesar la plantilla
    t = Template(PLANTILLA)

    # -- Crear el contexto: Nombre de usuario real
    c = Context({'user':'A Goonie Wit da Hoodie'})

    # -- Obtener la pagina html final
    html = t.render(c)
    return HttpResponse(html)
