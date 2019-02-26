from django.http import HttpResponse
from django.template import Template, Context
 #Mi_funcion() crea un mensaje respuesta Http que contiene una cadena
def mi_funcion(request):
    html = "Hola! Mi primera URL!!"
    return HttpResponse(html)

def mi_producto(request, param):
    numero = int(param)
    html = "Acceso a producto: %i" % numero;
    return HttpResponse(html)
#param --> tipo cadena en este caso solo enviamos en el mensaje de request

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
    c = Context({'user':'A Boogie Wit da Hoodie'})

    # -- Obtener la pagina html final
    html = t.render(c)
    return HttpResponse(html)
