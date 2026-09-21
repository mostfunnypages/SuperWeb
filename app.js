const tools=[
{id:"porcentaje",name:"Calculadora de porcentaje",desc:"Calcula porcentajes, aumentos y reducciones.",icon:"%",cat:"calculadoras"},
{id:"iva",name:"Calculadora de IVA",desc:"Añade o quita IVA de un precio.",icon:"🧾",cat:"calculadoras"},
{id:"edad",name:"Calculadora de edad",desc:"Descubre tu edad exacta.",icon:"🎂",cat:"calculadoras"},
{id:"descuento",name:"Calculadora de descuento",desc:"Calcula el precio final de una oferta.",icon:"🏷️",cat:"calculadoras"},
{id:"regla",name:"Regla de tres",desc:"Resuelve reglas de tres fácilmente.",icon:"📐",cat:"calculadoras"},
{id:"media",name:"Calculadora de media",desc:"Calcula la media de varias notas.",icon:"📊",cat:"calculadoras"},
{id:"tiempo",name:"Calculadora de tiempo",desc:"Suma y resta horas y minutos.",icon:"⏰",cat:"calculadoras"},
{id:"conversor",name:"Conversor de unidades",desc:"Convierte longitud, peso y temperatura.",icon:"🔄",cat:"calculadoras"},

{id:"numero",name:"Números aleatorios",desc:"Genera un número entre dos valores.",icon:"🎲",cat:"generadores"},
{id:"nombres",name:"Generador de nombres",desc:"Genera nombres aleatorios.",icon:"👤",cat:"generadores"},
{id:"password",name:"Generador de contraseñas",desc:"Crea contraseñas aleatorias.",icon:"🔐",cat:"generadores"},
{id:"ruleta",name:"Ruleta aleatoria",desc:"Escribe opciones y deja que la ruleta decida.",icon:"🎡",cat:"generadores"},
{id:"equipos",name:"Generador de equipos",desc:"Divide una lista de personas en equipos.",icon:"👥",cat:"generadores"},
{id:"decision",name:"¿Qué elijo?",desc:"Deja una decisión al azar.",icon:"🤔",cat:"generadores"},

{id:"notas",name:"Calculadora de notas",desc:"Calcula tu nota final.",icon:"🎓",cat:"estudiantes"},
{id:"ponderada",name:"Media ponderada",desc:"Calcula medias con pesos diferentes.",icon:"⚖️",cat:"estudiantes"},
{id:"pomodoro",name:"Temporizador Pomodoro",desc:"Estudia por bloques con descansos.",icon:"⏱️",cat:"estudiantes"},
{id:"palabras",name:"Contador de palabras",desc:"Cuenta palabras y caracteres.",icon:"📝",cat:"estudiantes"},
{id:"caracteres",name:"Contador de caracteres",desc:"Cuenta caracteres con y sin espacios.",icon:"🔤",cat:"estudiantes"},

{id:"sueldo",name:"Calculadora de sueldo",desc:"Calcula sueldo mensual a partir del anual.",icon:"💶",cat:"dinero"},
{id:"beneficio",name:"Calculadora de beneficio",desc:"Calcula beneficio de una venta.",icon:"💰",cat:"dinero"},
{id:"margen",name:"Calculadora de margen",desc:"Calcula el margen de beneficio.",icon:"📈",cat:"dinero"},
{id:"interes",name:"Interés compuesto",desc:"Calcula el crecimiento de una inversión.",icon:"🏦",cat:"dinero"},

{id:"imc",name:"Calculadora de IMC",desc:"Calcula el índice de masa corporal.",icon:"🏃",cat:"fitness"},
{id:"calorias",name:"Calculadora de calorías",desc:"Estimación orientativa de calorías diarias.",icon:"🔥",cat:"fitness"},
{id:"ritmo",name:"Calculadora de ritmo",desc:"Calcula tu ritmo por kilómetro.",icon:"🏃‍♂️",cat:"fitness"},
{id:"distancia",name:"Distancia / tiempo",desc:"Calcula distancia, tiempo o velocidad.",icon:"📍",cat:"fitness"},

{id:"gaming-generador",name:"Generadores gaming",desc:"Genera ideas aleatorias para partidas.",icon:"🎮",cat:"gaming"},
{id:"gaming-ruleta",name:"Ruletas gaming",desc:"Crea una ruleta para elegir.",icon:"🎰",cat:"gaming"},
{id:"gaming-test",name:"Tests gaming",desc:"Tests divertidos sobre videojuegos.",icon:"🕹️",cat:"gaming"},

{id:"stranger",name:"¿Qué personaje de Stranger Things eres?",desc:"Haz el test y descubre tu personaje.",icon:"👾",cat:"tests"},
{id:"marvel",name:"¿Qué personaje de Marvel eres?",desc:"Descubre qué personaje encaja contigo.",icon:"🦸",cat:"tests"},
{id:"dc",name:"¿Qué personaje de DC eres?",desc:"Descubre tu personaje de DC.",icon:"🦇",cat:"tests"},
{id:"pokemon",name:"¿Qué Pokémon eres?",desc:"Descubre qué Pokémon te representa.",icon:"⚡",cat:"tests"},
{id:"mas-tests",name:"Más tests",desc:"Colección de tests que iremos ampliando.",icon:"🎯",cat:"tests"}
];

function card(t){return `<a class="tool" href="herramienta.html?id=${t.id}"><div class="icon">${t.icon}</div><h3>${t.name}</h3><p>${t.desc}</p></a>`}
function render(list=tools){const g=document.getElementById("toolgrid");if(g)g.innerHTML=list.map(card).join("")}
function filterTools(){const q=(document.getElementById("search")?.value||"").toLowerCase();render(tools.filter(t=>(t.name+" "+t.desc+" "+t.cat).toLowerCase().includes(q)))}
function toggleMenu(){document.getElementById("navlinks")?.classList.toggle("show")}
render();