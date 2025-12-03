---
sidebar_position: 99
hide_pagination: true
title: Er gaat iets mis
---

## Op zoek naar het probleem

<details>
  <summary>Er gaat iets mis, maar ik weet niet waar ik moet beginnen met oplossen.</summary>

Als er iets misgaat, ga je op zoek naar twee zaken:
- wat voor `soort` fout het is
- op welke `regel` code deze fout wordt veroorzaakt

De `console` geeft ons deze informatie. Je vindt de console onderin je code-editor. 
Als alles goed gaat met je programma, zie je alleen deze tekst (of een kleine variant hierop):

![console](@site/static/img/console.png)

Zodra er een fout is, zie je meer tekst in je `console`.
Bijvoorbeeld met het onderstaande codefragment:

```
import play 

  cirkel = play.new_circle()

play.start_program()
```

zie je het volgende in je `console`:

![indentation_error](@site/static/img/indentation_error.png)

We zien nu dat er een probleem is:
- op `line 3`
- en dat het soort fout `IndentationError` is

Deze informatie heb je nodig om de fout op te lossen.
Zoek nu je fout op in een van de andere tips op deze pagina.
</details>

<details>
  <summary>Ben je misschien play.start_program() vergeten of heb je er code onder gezet?</summary>

**play** heeft nodig dat je onderaan het programma **play.start_program** zet.
Onderstaande codefragment gaat dus helaas niet werken:
```python
import play 

play.new_circle()
```

Ook krijg je bij onderstaande codefragment maar één cirkel te zien:
```python
import play 

play.new_circle()

play.start_program()

play.new_circle(x=100)
```

</details>

## Het soort probleem begrijpen
<details>
  <summary>Een `IndentationError`</summary>

Je hebt een `IndentationError` gevonden. Goed gedaan!

Ergens is er een regel code waar je `te veel` of `te weinig` spaties hebt gebruikt.

Laten we naar een paar voorbeelden kijken.

```python
import play 
  cirkel = play.new_circle()
play.start_program()
```
De `console` vertelt ons:
![indenterror one](@site/static/img/indent_error_1.png)

Op de tweede regel staat een `indent` (inspringing van vier spaties) die Python niet verwacht.
De oplossing is dus om deze spaties te verwijderen.

```python
import play 
cirkel = play.new_circle()
play.start_program()
```

Een ander veelvoorkomend voorbeeld:

```python
import play

box = play.new_box()

@play.when_key_pressed("space")
def spatie_ingedrukt():
box.x = box.x + 10

play.start_program()
```
De `console` toont het volgende:
![indenterror two](@site/static/img/indent_error_2.png)

Python verwacht hier een `indent` (inspringing), maar die is er niet. 

De oplossing is om de juiste inspringing toe te voegen:

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
  <summary>Een `NameError`</summary>

Je hebt een `NameError` gevonden. Goed gedaan!
Je gebruikt ergens een `variabele` die nog niet is aangemaakt.

Hier is een voorbeeld:

```python
import play

box = play.new_box()
cirkel.start_physics()

play.start_program()
```
De `console` toont het volgende:
![nameerror](@site/static/img/name_error.png)

Je vraagt Python om de `variabele` `cirkel`, maar die is nergens aangemaakt.
De oplossing is in dit geval:

```python
import play

box = play.new_box()
box.start_physics()

play.start_program()
```
</details>