import qrcode
img = qrcode.make("https://reeves9.github.io")
img.save("Website.jpg")
