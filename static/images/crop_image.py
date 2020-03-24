from PIL import Image

# Open image
image = Image.open('D:/Codecool/tic-tac-toe-javascript-BogdanGheboianu/static/images/neonimage1.jpg')
# Get image dimensions
width, height = image.size
# Set puzzle dimensions
puzzle_dimension = [4, 4]
PDX = puzzle_dimension[0]
PDY = puzzle_dimension[1]
# Set piece of puzzle dimensions (-5px for safety)
piece_width = round(width / PDX) - 5 
piece_height = round(height / PDY) - 5

startY = 0
endY = startY + piece_height

for row in range(PDX):
    startX = 0
    endX = startX + piece_width
    for col in range(PDY):
        cropped_piece = image.crop((startX, startY, endX, endY))
        startX = startX + piece_width
        endX = endX + piece_width
        cropped_piece.show()
    startY = startY + piece_height
    endY = endY + piece_height

# cropped_image.save('C:/users/bogda/Desktop/crop.jpeg', 'jpeg')