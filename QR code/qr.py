import qrcode

lien = "https://example.com"

qr = qrcode.make(lien)

qr.save("qrcode.png")

print("QR code créé !")