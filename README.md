# pelvic-chair-app

Pelvic Chair project voor Stichting Inkluso

# Wanneer je dit project download!
- De node_modules staan in de .gitignore, dit betekent dat deze niet zijn verwerkt in deze repository waardoor je de dependencies niet hebt.
- Om alles te laten werken moet je in VSCode Ctrl + Shift + ` om de terminal te openen.
- In de terminal voer je npm i in om de dependencies te installeren.
- Nu werkt het project en kun je ermee aan de slag!

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
