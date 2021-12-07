# pelvic-chair-app

Pelvic Chair project voor Stichting Inkluso

# Error: connect ECONNREFUSED 127.0.0.1:1883

- Maak je geen zorgen over deze error dit komt omdat je de sensoren van Henri niet bij de hand hebt.
- Je kunt dus gewoon rustig doorgaan met het ontwikkelen van de applicatie.

Error: connect ECONNREFUSED 127.0.0.1:1883
at TCPConnectWrap.afterConnect [as oncomplete] (net.js:1148:16) {
errno: -4078,
code: 'ECONNREFUSED',
syscall: 'connect',
address: '127.0.0.1',
port: 1883
}

mqtt client disconnected

# Waarschijnlijk krijg je een error als je nodemon wilt runnen. Dit is niet erg, want dit betekent dat je geen database connectie heb.

Stap 1: Zorg dat je npm i doet. Als dat niet werkt doe dan even npm i dotenv

Stap 2: Maak een .env file aan en zet deze code erin:

<i> code is te vinden op Discord -> Pelvichub -> Notities en Bronnen </i>


Stap 3: Zet in je gitignore "env" zodat dit niet meegenomen word naar Github 



