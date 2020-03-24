from PIL import Image
import os

def cropImage(image_path, puzzle_dimensions):
    # Create folder for the pieces
    folder_path = create_folder(image_path)
    # Open image
    image = Image.open(image_path)
    # Get image dimensions
    width, height = image.size
    PDX = puzzle_dimensions[0]
    PDY = puzzle_dimensions[1]
    # Set piece of puzzle dimensions (-5px for safety)
    piece_width = round(width / PDX) - 5 
    piece_height = round(height / PDY) - 5
    # Define start and end Y
    startY = 0
    endY = startY + piece_height
    # Iterate through rows and columns and crop image
    piece_id = 0
    for row in range(PDX):
        startX = 0
        endX = startX + piece_width
        for col in range(PDY):
            cropped_piece = image.crop((startX, startY, endX, endY))
            save_pieces(cropped_piece, piece_id, folder_path)
            startX = startX + piece_width
            endX = endX + piece_width
            piece_id += 1
        startY = startY + piece_height
        endY = endY + piece_height


def save_pieces(cropped_piece, piece_id, folder_path):
    cropped_piece.save(f'{folder_path}\{piece_id}.jpeg', 'jpeg')


def create_folder(image_path):
    IMG_PATH = 0
    IMG_NAME = -1
    folder_name = image_path.split('.')[IMG_PATH].split('/')[IMG_NAME].replace('\\', '')
    pieces_folder_path = f'{folder_name}_pieces'
    try:
        os.mkdir(pieces_folder_path)
    except OSError:
        print(f"Creation of the directory {pieces_folder_path} failed")
    else:
        return pieces_folder_path


