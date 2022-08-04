class Billete
{
    constructor(v,c)
    {
        this.valor = v;
        this.cantidad = c;
        this.imagen = new Image();
        this.imagen.src = imagenes[this.valor];
    }
}

var imagenes = [];
imagenes["100"] = "100.png";
imagenes["50"] = "50.png";
imagenes["20"] = "20.png";
imagenes["10"] = "10.jpg";
var caja = [];
caja.push(new Billete(100, 3));
caja.push(new Billete(50, 3));
caja.push(new Billete(20, 2));
caja.push(new Billete(10, 2));
var entregado = [];
var dinero, papeles, total, div;
contador();

var b = document.getElementById("extraer");
var t = document.getElementById("dinero");
b.addEventListener("click", entregarDinero);
var resultado = document.getElementById("resultado");
var saldo = document.getElementById("saldo");
resultado.innerHTML = " ";
function entregarDinero()
{
    
    dinero = parseInt(t.value);
    if(total >= dinero)
    {
        for(var bi of caja)
        {
            if(dinero > 0)
            {
                div = Math.floor(dinero / bi.valor);
                if(div > bi.cantidad)
                {
                    papeles = bi.cantidad;
                }
                else
                {
                    papeles = div;
                }
                bi.cantidad -= papeles;
                for(var i = 0; i < papeles; i++)
                {
                    entregado.push(new Billete(bi.valor, 1));
                }
                dinero -= (bi.valor * papeles);
            }
        }
        if (dinero == 0)
        {
            for(var e of entregado)
            {
                resultado.innerHTML += e.cantidad + " Billetes de $" + e.valor + "<img src=" + e.imagen.src + " />"+"<br/>";
            }
            resultado.innerHTML += "<br />";
            contador();   
        }
        else
        {
            resultado.innerHTML += "Cantidad invalida";
        }
    }
    else
    {
        resultado.innerHTML += "Cantidad invalida, no me alcanza el dinero";
    }
}

function contador()
{
    total = 0;
    for (var t of caja)
    {
        total += t.valor * t.cantidad;
    }
    console.log(total);
}