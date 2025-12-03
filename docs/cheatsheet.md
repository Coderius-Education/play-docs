---
sidebar_position: 99
displayed_sidebar: null
hide_pagination: true
---

# Cheatsheet

## Vormen

<details>
  <summary>Cirkel (play.new_circle)</summary>

```py
import play 

play.new_circle()

play.start_program()
```

Wat kan ik aanpassen aan een cirkel?
Hierbij de lijst van attributen voor een cirkel:
- **color**: Kleur, staat standaard op 'black'. [Op deze pagina](https://www.pygame.org/docs/ref/color_list.html) zie je welke kleuropties er zijn. Je kunt ook direct een [RGB-waarde opgeven](https://www.w3schools.com/colors/colors_picker.asp) zoals **color=(100,100,100)**.
- **x**: x-positie, staat standaard op 0 (het midden). Kleiner dan 0 is naar links, groter dan 0 is naar rechts.
- **y**: y-positie, staat standaard op 0 (het midden). Kleiner dan 0 is naar beneden, groter dan 0 is naar boven.
- **radius**: straal, staat standaard op 100. Hoe groter de waarde, hoe groter de cirkel.
- **border_color**: kleur van de rand, staat standaard op  'light blue'. Let op, als de **border_width** 0 is, zie je de rand niet.
- **border_width**: de breedte van de rand. Staat standaard op 0 (geen rand zichtbaar)
- **transparency**: doorzichtigheid, 0 is onzichtbaar. 100 is volledig zichtbaar.

Voorbeeld van een kleine blauwe cirkel die een beetje naar rechts staat:

```python
import play

cirkel = play.new_circle(color='blue', radius=20, x=100)

play.start_program()
```
</details>

<details>
  <summary>Vierkant of rechthoek (play.new_box)</summary>

```py
import play 

play.new_box()

play.start_program()
```

Net zoals bij **play.new_circle** heeft het programma voor ons nu ook al de kleur en grootte bepaald. Je kunt dit zelf natuurlijk aanpassen!
Dit zijn de attributen voor **play.new_box**:
- **color**: Kleur, staat standaard op 'black'. [Op deze pagina](https://www.pygame.org/docs/ref/color_list.html) zie je welke kleuropties er zijn. Je kunt ook direct een [RGB-waarde opgeven](https://www.w3schools.com/colors/colors_picker.asp) zoals **color=(100,100,100)**.
- **x**: x-positie, staat standaard op 0 (het midden). Kleiner dan 0 is naar links, groter dan 0 is naar rechts.
- **y**: y-positie, staat standaard op 0 (het midden). Kleiner dan 0 is naar beneden, groter dan 0 is naar boven.
- **width**: de breedte van de rechthoek.
- **height**: de hoogte van de rechthoek.
- **border_color**: kleur van de rand, staat standaard op  'light blue'. Let op, als de **border_width** 0 is, zie je de rand niet.
- **border_radius**: de breedte van de rand. Staat standaard op 0 (geen rand zichtbaar)
- **transparency**: doorzichtigheid, 0 is onzichtbaar. 100 is volledig zichtbaar.

Voorbeeld van een rode rechthoek die een beetje boven het midden staat:
```python
import play

box = play.new_box(color='red', y=100)

play.start_program()
```
</details>

<details>
  <summary>Tekst (play.new_text)</summary>

```py
import play 

play.new_text()

play.start_program()
```

Je kunt voor **play.new_text** kiezen uit:
- **words**: Woorden op het scherm, de woorden die op het scherm komen te staan
- **x**: x-positie, staat standaard op 0 (het midden). Kleiner dan 0 is naar links, groter dan 0 is naar rechts.
- **y**: y-positie, staat standaard op 0 (het midden). Kleiner dan 0 is naar beneden, groter dan 0 is naar boven.
- **font**: de font van de tekst. Kun je bijvoorbeeld aanpassen naar 'arial'.
- **font_size**: de grootte van de font.
- **color**: Kleur, staat standaard op 'black'. [Op deze pagina](https://www.pygame.org/docs/ref/color_list.html) zie je welke kleuropties er zijn. Je kunt ook direct een [RGB-waarde opgeven](https://www.w3schools.com/colors/colors_picker.asp) zoals **color=(100,100,100)**.

Voorbeeld van een blauwe tekst midden bovenaan het scherm met een net iets grote font size:
```python
import play

tekst = play.new_text(words="Hello world", y=200, font_size=50)

play.start_program()
```
</details>

<details>
  <summary>Afbeelding (play.new_image)</summary>

```python
import play 

play.new_image('VERVANG_DIT_DOOR_NAAM_VAN_AFBEELDING')

play.start_program()
```
Je **moet** voor **play.new_image** kiezen uit:
- **image**: dit is de naam van het bestand op jouw computer, bijvoorbeeld **cat.jpg** (als je je afbeelding zo genoemd hebt)

Je **kunt** voor **play.new_image** kiezen uit:
- **x**: x-positie, staat standaard op 0 (het midden). Kleiner dan 0 is naar links, groter dan 0 is naar rechts.
- **y**: y-positie, staat standaard op 0 (het midden). Kleiner dan 0 is naar beneden, groter dan 0 is naar boven.
- **size**: de grootte van de afbeelding. De grootte staat standaard op 100. Een hoger getal dan 100 maakt de afbeelding groter en een lager getal maakt de afbeelding kleiner.
- **transparency**: doorzichtigheid, 0 is onzichtbaar. 100 is volledig zichtbaar.


Alleen gebruiken als je physics NIET gebruikt:
- **angle**: de hoek. Je kunt je afbeelding draaien door de **angle** te veranderen. Als je **angle** naar 180 verandert, staat de afbeelding op z'n kop.

</details>

<details>
  <summary>Hoe weet ik precies de locatie van de rechterkant (right), linkerkant (left), bovenkant (top) en onderkant (bottom) van een vorm?</summary>

Dat gaat via:
- rechterkant (right)
- linkerkant (left)
- bovenkant (top)
- onderkant (bottom)

Als ik bijvoorbeeld wil weten wat de meest rechter pixel is van een cirkel, kan ik het volgende doen:

```python
import play 

cirkel = play.new_circle()

print(cirkel.right)

play.start_program()
```

Als het goed is, zie je het volgende in je **shell** of **console**
```
pygame-ce 2.5.3 (SDL 2.30.12, Python 3.10.11)
100.0
```

Nu weet je dus dat de meest rechter pixel van de bal op x=100 staat.
</details>

## Fysica

<details>
  <summary>Hoe voeg ik fysica toe aan een vorm? (start_physics)</summary>

```py
import play 

cirkel = play.new_circle()
cirkel.start_physics()

play.start_program()
```
</details>

<details>
  <summary>Hoe verander ik de fysica-eigenschappen van een vorm? (start_physics)</summary>

```py
import play 

cirkel = play.new_circle()
cirkel.start_physics(obeys_gravity=False)

play.start_program()
```

OF (nuttig als je iets wil veranderen tijdens het spel)

```py
import play 

cirkel = play.new_circle()
cirkel.start_physics()

cirkel.physics.obeys_gravity = False

play.start_program()
```

</details>


<details>
  <summary>Wat kan ik allemaal aanpassen aan de fysica? (start_physics)</summary>

| Attribuut | Uitleg | 
|:---:|:---:|
| obeys_gravity | True --> zwaartekracht wordt nagedaan, False --> geen zwaartekracht | 
| x_speed | hoe hard wil je dat de bal beweegt op de horizontale as? | 
| y_speed | hoe hard wil je dat de bal beweegt op de verticale as? | 
| can_move | True --> de vorm mag bewegen, False, de vorm staat altijd stil | 
| stable | True --> als iets botst tegen vorm, zal deze niet bewegen, False, de vorm zal bewegen bij een botsing.
| bounciness | 1.0 vorm kaatst net zo hard terug als dat deze aankwam. 0 --> vorm kaatst niet terug bij botsing | 
| mass | hoe 'zwaar' is je vorm?  Dit kan snel ingewikkeld worden. Maar je kan je voorstellen dat een botsing anders is tussen twee vormen die even zwaar zijn in plaats van als vormen verschillend gewicht hebben. | 
| friction | 0 --> geen frictie (energie blijft behouden). | 
</details>


<details>
  <summary>Hoe zet ik de fysica op pauze en weer aan? (.phyiscs.pause() & .physics.unpause())</summary>

Met **.physics.pause** zet je de fysica op pauze en met **.physics.unpause** zet je de fysica weer aan.

Een voorbeeld met **pause**:
```python
import play 

cirkel = play.new_circle()
cirkel.start_physics()
cirkel.physics.pause()

play.start_program()
```

Een voorbeeld met ook **unpause**:

```python
import play 

cirkel = play.new_circle()
cirkel.start_physics()
cirkel.physics.pause()
cirkel.physics.unpause()

play.start_program()
```


</details>

<details>
  <summary>Hoe zet ik de fysica uit? (stop_physics())</summary>

Met **stop_physics()** zet je de physics uit.

```python
import play 

cirkel = play.new_circle()
cirkel.start_physics()
cirkel.stop_physics()
play.start_program()
```
</details>

## Acties

<details>
  <summary>Hoe maak  ik een vorm onzichtbaar (hide)?</summary>

Hiermee teken je een cirkel en maak je hem onmiddelijk onzichtbaar.

Let op: .hide() verandert het volgende:
- **cirkel.is_hidden** krijgt de waarde **True**
- **cirkel.is_shown** krijgt de waarde **False**
- Als je fysica gebruikt, gaat die op pauze :)

```py
import play 

cirkel = play.new_circle()
cirkel.hide()

play.start_program()
```
</details>

<details>
  <summary>Hoe maak een ik vorm weer zichtbaar (show)?</summary>

Hiermee teken je een cirkel en maak je hem onmiddelijk onzichtbaar en weer zichtbaar

Let op: .show() verandert het volgende:
- **cirkel.is_hidden** krijgt de waarde **False**
- **cirkel.is_shown** krijgt de waarde **True**
- Als je fysica gebruikte, gaat deze weer aan en weer werken

```py
import play 

cirkel = play.new_circle()
cirkel.hide()
cirkel.show()

play.start_program()
```
</details>


<details>
  <summary>Hoe verwijder ik een vorm? (remove)?</summary>

Allereerst een vraag: heb je dit echt nodig of is **.hide()** misschien ook al genoeg?
Met **.remove()**:
- verwijder je de vorm
- je kunt opvragen of de vorm 'leeft' via **cirkel.is_alive()**. Deze is **False** als de vorm verwijderd is.

```py
import play 

cirkel = play.new_circle()
cirkel.remove()

play.start_program()
```

</details>

## Gebeurtenissen
<details>
  <summary>Bij de start van het programma (@play.when_program_starts)</summary>

  ```py
  import play

  @play.when_program_starts
  def setup_game():
      play.new_text(words="Welkom!")      

  play.start_program()
  ```
</details>

<details>
  <summary>Bij het indrukken van één specifieke toets (@play.when_key_pressed)</summary>

Je gebruikt **@play.when_key_pressed** om te checken of een toets ingedrukt wordt. Wat je tussen de haakjes zet (in dit geval 'space') is welke toets gedetecteerd wordt.

  ```python
  import play

  box = play.new_box()

  @play.when_key_pressed("space")
  def spatie_ingedrukt():
    box.x = box.x + 10
      
  play.start_program()
  ```
</details>

<details>
  <summary>Bij het indrukken van twee of meerdere toetsen (@play.when_key_pressed)</summary>

Als je met meerdere toetsen te maken hebt, heb je in ieder geval twee opties. 
- twee losse **@play.when_key_pressed** gebeurtenissen
- één **play.when_key_pressed** gebeurtenis

**twee @play.when_key_pressed gebeurtenissen**

```python
import play

box = play.new_box()

@play.when_key_pressed("up")
def omhoog():
  box.y = box.y + 10

@play.when_key_pressed('down')
def omlaag():
  box.y = box.y - 10
    
play.start_program()
```

OF

**één @play.when_key_pressed gebeurtenis**
Let op, nu heb je **key** nodig.

```python
import play

box = play.new_box()

@play.when_key_pressed("down", "up")
def omhoog_of_omlaag(key):
  if key == 'up':
    box.y = box.y + 10
  if key == 'down':
    box.y = box.y - 10
    
play.start_program()
```


</details>

<details>
  <summary>Bij het loslaten van één specifieke toets (@play.when_key_released)</summary>

Je gebruikt **@play.when_key_released** om te checken of een toets losgelaten wordt. 

```python
import play

box = play.new_box()

@play.when_key_released("up")
def omhoog():
  box.y = box.y + 10
    
play.start_program()
```
</details>


<details>
  <summary>Bij het loslaten van twee of meerdere toetsen (@play.when_key_released)</summary>

Als je met meerdere toetsen te maken hebt, heb je in ieder geval twee opties. 
- twee losse **@play.when_key_released** gebeurtenissen
- één **play.when_key_released** gebeurtenis

**twee @play.when_key_released gebeurtenissen**

```python
import play

box = play.new_box()

@play.when_key_released("up")
def omhoog():
  box.y = box.y + 10

@play.when_key_released('down')
def omlaag():
  box.y = box.y - 10
    
play.start_program()
```

OF

**één @play.when_key_released gebeurtenis**
Let op, nu heb je **key** nodig.

```python
import play

box = play.new_box()

@play.when_key_released("down", "up")
def omhoog_of_omlaag(key):
  if key == 'up':
    box.y = box.y + 10
  if key == 'down':
    box.y = box.y - 10
    
play.start_program()
```


</details>

<details>
  <summary>Bij het indrukken van een willekeurige toets (@play.when_any_key_pressed)</summary>

  Met **@play.when_any_key_pressed** kun je een functie uitvoeren zodra een willekeurige toets op het toetsenbord wordt ingedrukt. Met de `key` parameter weet je welke toets is ingedrukt.

  ```python
  import play

  instructie_tekst = play.new_text("Druk op een toets", y=50)
  feedback_tekst = play.new_text(words="", y=0)

  @play.when_any_key_pressed
  def handel_toets_af(key):
    feedback_tekst.words = f"Je drukte op: {key}"
      
  play.start_program()
```
</details>


<details>
  <summary>Bij het loslaten van een willekeurige toets (@play.when_any_key_released)</summary>

  Met **@play.when_any_key_released** kun je een functie uitvoeren zodra een willekeurige toets op het toetsenbord wordt losgelaten. Met de `key` parameter weet je welke toets is losgelaten.

```python
import play

instructie_tekst = play.new_text("Laat een toets los", y=50)
feedback_tekst = play.new_text(words="", y=0)

@play.when_any_key_released
def toets_wordt_losgelaten(key):
  feedback_tekst.words = f"Je liet los: {key}"
    
play.start_program()
```
</details>

<details>
  <summary>Welke toetsen kun je gebruiken bij @play.when_key_pressed?</summary>

  Op [deze site](https://www.pygame.org/docs/ref/key.html) kun je een lijst vinden van alle toetsen. Scrol naar beneden tot je bij de lijst bent. Het gaat om de kolom "Description".
</details>

<details>
  <summary>Bij het indrukken van de muis (@play.when_mouse_clicked)</summary>

**when_mouse_clicked** gebruik je om een muisklik te detecteren.

```python
import play

# Maak een cirkel
circle = play.new_circle(color="blue")

# Deze functie wordt uitgevoerd als je op de muis klikt
@play.when_mouse_clicked
def muis_geklikt():
  if circle.color == "blue":
    circle.color = "red"
  else:
    circle.color = "blue"
  print("Muis geklikt! De cirkel is nu " + str(circle.color))

# Start het programma
play.start_program()
```
</details>

<details>
  <summary>Bij het loslaten van de muis (@play.when_click_released)</summary>

Let op, deze gebeurtenis gebeurt pas als je de muis loslaat.

```python
import play

# Maak een cirkel
circle = play.new_circle(color="blue")

# Deze functie wordt uitgevoerd als je op de muis klikt
@play.when_click_released
def muis_geklikt():
  if circle.color == "blue":
    circle.color = "red"
  else:
    circle.color = "blue"
  print("Muis geklikt! De cirkel is nu " + str(circle.color))

# Start het programma
play.start_program()
```
</details>

<details>
<summary>Bij elk frame (@play.repeat_forever)</summary>

```python
import play

frames=0
play.new_text('Aantal frames sinds start:', y=100)
tekst = play.new_text(words=str(frames))

@play.repeat_forever
def altijd():
  global frames
  frames = frames + 1
  tekst.words = str(frames)

play.start_program()
```

</details>


## Gebeurtenis bij een vorm

<details>
  <summary>Wanneer een vorm stopt met het aanraken van een andere vorm (@VARIABLE.when_stopped_touching)</summary>

:::caution
**Belangrijk:** Alleen gebruiken als bij allebei de vormen physics aan staat (**start_physics**).
:::

```python
import play

bal = play.new_circle(color="blue", radius=50)
bal.start_physics(obeys_gravity=False, x_speed=60)

batje = play.new_box(x=300)
batje.start_physics(can_move=False, obeys_gravity=False)

text = play.new_text(words="batje is niet aangeraakt", y=200)

@bal.when_stopped_touching(batje)
def aangeraakt():
    text.words = 'batje is aangeraakt'
    
play.start_program()
```
</details>

<details>
  <summary>Wanneer een vorm stopt met het aanraken van de muur (@VARIABLE.when_stopped_touching_wall)</summary>

```python
import play

bal = play.new_circle(color="blue", radius=50)
bal.start_physics(obeys_gravity=False, x_speed=60)

text = play.new_text(words="muur is niet aangeraakt", y=200)

@bal.when_stopped_touching_wall
def aangeraakt():
    text.words = 'muur is aangeraakt'

play.start_program()
```
</details>

<details>
  <summary>Zodra twee vormen elkaar raken (@VARIABLE.when_touching)</summary>

Je gebruikt @VARIABLE.when_touching als je wilt weten of twee vormen elkaar raken.

```python
import play

bal = play.new_circle(radius=50)
bal.start_physics(obeys_gravity=False, x_speed=20)

batje = play.new_box(x=200)

tekst = play.new_text("batje nog niet aangeraakt", y=200)

@bal.when_touching(batje)
def batje_aangeraakt():
    tekst.words = 'batje wel aangeraakt'

play.start_program()
```

Je kunt overigens ook **VARIABLE.is_touching(VARIABLE)** gebruiken:
Elke keer als je pijltje omhoog klikt, zie je of de bal het batje aanraakt:
```python
import play

bal = play.new_circle(radius=50)
bal.start_physics(obeys_gravity=False, x_speed=50)

batje = play.new_box(x=200)

tekst = play.new_text("bal raakt batje niet", y=200)

@play.when_key_pressed('up')
def pijltje_omhoog():
    if bal.is_touching(batje):
        tekst.words = 'bal raakt batje'
    else:   
        tekst.words = 'bal raakt batje niet'

play.start_program()
```

</details>

<details>
  <summary>Wanneer een vorm de muur aanraakt (@VARIABLE.when_touching_wall)</summary>

```python
import play

bal = play.new_circle(radius=50)
bal.start_physics(obeys_gravity=False, x_speed=50)

@bal.when_touching_wall
def teleport():
    bal.x=0

play.start_program()
```

</details>

<details>
  <summary>Wanneer er op een vorm geklikt wordt (@VARIABLE.when_clicked)</summary>

```python
import play

bal = play.new_circle(radius=50)
bal.start_physics(obeys_gravity=False, x_speed=50)

@bal.when_clicked
def geklikt():
    bal.x=0

play.start_program()
```
</details>

## Tijd


<details>
  <summary>Ik wil tijdelijk iets veranderen aan een vorm, bijvoorbeeld de snelheid (async await)</summary>

```python
import play

bal = play.new_circle(color='black')
bal.start_physics(obeys_gravity=False, x_speed=10)

@play.when_mouse_clicked
async def tijdelijk_sneller():
    bal.physics.x_speed = 30
    await play.timer(seconds=1)
    bal.physics.x_speed = 10

play.start_program()
```

</details>

<details>
  <summary>Hoe maak ik een timer?</summary>

```python
import play
 
time = 10
text = play.new_text(str(time))
print(time)
 
@play.repeat_forever
async def timer():
    global time
    if time > 0:
        time -= 1
        await play.timer(seconds=1)
        text.words = str(time)
play.start_program()
```
</details>

## Global

<details>
  <summary>Hoe houd ik de score van mijn spel bij? (global)</summary>

 ```python
 import play

score = 0
score_tekst = play.new_text(str(score), y=100, font_size=40)

@play.when_key_released("space")
def spatie_ingedrukt():
    global score
    score = score + 1
    score_tekst.words = str(score)
    
play.start_program()
```

</details>

## Screen

<details>
  <summary>Hoe weet ik hoeveel pixels breed het scherm is? (play.screen.width)?</summary>

  Met **play.screen.width** kun je weten hoeveel pixels breed het scherm is.

  ```python
  import play 

  print(play.screen.width)

  play.start_program()
  ```
</details>

<details>
  <summary>Hoe weet ik hoeveel pixels hoog het scherm is? (play.screen.height)?</summary>

  Met **play.screen.height** kun je weten hoeveel pixels hoog het scherm is.

  ```python
  import play 

  print(play.screen.height)

  play.start_program()
  ```
</details>

<details>
  <summary>Hoe weet ik wat de x-positie is van de linkerkant van het scherm (play.screen.left)?</summary>

  Met **play.screen.left** kun je weten wat de x-positie is van de linkerkant van het scherm.
  Standaard staat dit op **-400**. Het midden van het scherm heeft een x-positie van 0. Naar links wordt de x-positie dus negatief

  ```python
  import play 

  print(play.screen.left)

  play.start_program()
 ```
</details>

<details>
  <summary>Hoe weet ik wat de x-positie is van de rechterkant van het scherm (play.screen.right)?</summary>

  Met **play.screen.right** kun je weten wat de x-positie is van de rechterkant van het scherm.
  Standaard staat dit op **400**. Het midden van het scherm heeft een x-positie van 0. Naar rechts wordt de x-positie dus hoger.

  ```python
  import play 

  print(play.screen.right)

  play.start_program()
 ```
</details>

<details>
  <summary>Hoe weet ik wat de y-positie is van de bovenkant van het scherm (play.screen.top)?</summary>

  Met **play.screen.top** kun je weten wat de y-positie is van de bovenkant van het scherm.
  Standaard staat dit op **300**. Het midden van het scherm heeft een y-positie van 0. Naar boven wordt de y-positie dus hoger.

  ```python
  import play 

  print(play.screen.top)

  play.start_program()
 ```
</details>

<details>
  <summary>Hoe weet ik wat de y-positie is van de onderkant van het scherm (play.screen.bottom)?</summary>

  Met **play.screen.bottom** kun je weten wat de y-positie is van de onderkant van het scherm.
  Standaard staat dit op **-300**. Het midden van het scherm heeft een y-positie van 0. Naar onder wordt de y-positie dus lager.

  ```python
  import play 

  print(play.screen.bottom)

  play.start_program()
 ```
</details>



## Database (JSON)

<details>
  <summary>Hoe sla ik een high-score op en hoe vraag ik deze op?</summary>

Met **play.new_database** maak je een nieuwe database.
Je gebruikt de methode **set_data** voor het opslaan van data en **get_data** voor het opvragen van data.
```python
import play

database = play.new_database()

database.set_data('punten', 0)

huidige_highscore = database.get_data('punten')

play.new_text(words="high score is " + str(huidige_highscore))

play.start_program()

```
</details>

## SNES-controller

<details>
  <summary>Wat is een SNES-controller?</summary>

Een SNES-controller is een controller, die zo populair was dat deze zelfs [een eigen Wikipedia pagina](https://en.wikipedia.org/wiki/Super_Nintendo_Entertainment_System) heeft.
Als je via een zoekmachine zoekt op `SNES controller`, dan zul je zien dat deze op verschillende webshops nog te koop is.

</details>

<details>
  <summary>Hoe weet ik of mijn computer de SNES-controller herkent?</summary>
  
Je kunt onderstaande codefragment draaien om te kijken of je computer de controller herkent

```python
import play 

for controller in play.controllers.get_all_controllers():
    print(controller.get_instance_id(), controller.get_name())
```
In de console zie je vervolgens voor elke controller een `index` en een `naam`, bijvoorbeeld als er één SNES-controller verbonden is:

```
pygame-ce 2.5.5 (SDL 2.32.6, Python 3.12.10)
0 usb gamepad
```

De `0` geeft de ax (axis) van de controller aan en `usb gamepad` geeft de naam van de controller aan. 
</details>

<details>
  <summary>Bij het indrukken van een knop op de controller (play.controllers.when_button_pressed)</summary>


Je gebruikt **play.controllers.when_button_pressed** om te checken of een knop op de controller ingedrukt wordt. Verder geef je twee argumenten mee:
- `index` dit is de index van de controller, vaak is dit 0 als je maar één controller gebruikt
- `button_id` het nummer dat bij een knop hoort

Bijvoorbeeld:
```python 
import play 

play.new_text('Welke kleur is knop 0?', y=200, font_size=40)
play.new_text('Probeer de knoppen uit', y=100, font_size=40)

@play.controllers.when_button_pressed(0, 0)
def controller_0_knop_0():
    play.new_text('Die knop dus')

play.start_program()
```

Wanneer je dit codefragment draait, zou je de tekst `Die knop dus` moeten zien als je de knop indrukt die hoort bij knop 0.

</details>

<details>
  <summary>Bij het loslaten van een knop op de controller (play.controllers.when_button_released)</summary>

Je gebruikt **play.controllers.when_button_released** om te checken of een knop op de controller losgelaten wordt. Verder geef je twee argumenten mee:
- `index` dit is de index van de controller, vaak is dit 0 als je maar één controller gebruikt
- `button_id` het nummer dat bij een knop hoort

```python 
import play 

play.new_text('Welke kleur is knop 0?', y=200, font_size=40)
play.new_text('Probeer de knoppen uit', y=100, font_size=40)

@play.controllers.when_button_released(0, 0)
def controller_0_knop_0():
    play.new_text('Die knop dus')

play.start_program()
```

Wanneer je dit codefragment draait, zou je de tekst `Die knop dus` moeten zien als je de knop loslaat die hoort bij knop 0.

</details>

<details>
  <summary>Bij het indrukken van een willekeurige knop op een controller (play.controllers.when_any_button_pressed)</summary>

Je gebruikt **play.controllers.when_any_button_pressed** wanneer je een actie uit wilt voeren bij welke knop dan ook. Dit is ook een fijne manier om te weten welk nummer bij welke knop hoort.
Je geeft alleen maar op welke controller je gebruikt (de `index`).

Bijvoorbeeld:

```python
import play 

play.new_text('Welk nummer hoort bij welke knop?', y=200, font_size=40)
play.new_text('Probeer de knoppen uit', y=100, font_size=40)

tekst = play.new_text("Nog geen knop ingedrukt")

@play.controllers.when_any_button_pressed(0)
def een_knop_ingedrukt(button_id):
    tekst.words = f'De ingedrukte knop is: {button_id}'

play.start_program()
```

</details>

<details>
  <summary>Bij het loslaten van een willekeurige knop op een controller (play.controllers.when_any_button_released)</summary>

Je gebruikt **play.controllers.when_any_button_released** wanneer je een actie uit wilt voeren bij het loslaten van welke knop dan ook. Dit is ook een fijne manier om te weten welk nummer bij welke knop hoort.
Je geeft alleen maar op welke controller je gebruikt (de `index`).

Bijvoorbeeld:

```python
import play 

play.new_text('Welk nummer hoort bij welke knop?', y=200, font_size=40)
play.new_text('Probeer de knoppen uit', y=100, font_size=40)

tekst = play.new_text("Nog geen knop losgetalen")

@play.controllers.when_any_button_released(0)
def een_knop_ingedrukt(button_id):
    tekst.words = f'De losgelaten knop is: {button_id}'

play.start_program()
```

</details>

<details>
  <summary>Bij het indrukken van een pijltje op een controller (play.controllers.when_axis_moved)</summary>

Je gebruikt **play.controllers.when_axis_moved** om te detecteren of een pijltje is ingedrukt.

Je geeft twee argumenten mee: `index` en `richting`

`index` is het nummer dat bij de controller hoort (waarschijnlijk 0 als je er één gebruikt)

`richting`:
- 0: voor `horizontaal`, -1 is links en 1 is rechts
- 1 voor `verticaal`, -1 is boven en 1 is beneden

Bijvoorbeeld
```python
import play 

play.new_text('Druk een pijltje in?', y=200, font_size=40)

tekst = play.new_text("Nog geen pijltje ingedrukt")

@play.controllers.when_axis_moved(0, 0)
def links_rechts(index, value):
    if value == 1:
        tekst.words = "rechts ingedrukt"
    if value == -1:
        tekst.words = "links ingedrukt"

@play.controllers.when_axis_moved(0, 1)
def boven_beneden(index, value):
    if value == 1:
        tekst.words = "naar onder ingedrukt"
    if value == -1:
        tekst.words = "naar boven ingedrukt"

play.start_program()
```

</details>
