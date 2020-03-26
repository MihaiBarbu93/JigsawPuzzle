from PIL import Image
import os
import random
import shutil

image_info = {}
# working_path='/home/alex/Documents/WEB MODULE 2/JIGSAW/JigsawPuzzle/static'
# working_path = "D:\Codecool\JigsawPuzzle\static"
working_path = "/Users/Silviu/Documents/Codecool/web_module/TW4_web/JigsawPuzzle/static"
# working_path = "/home/www/Desktop/webModule/TWW4/JigsawPuzzle/static"


def cropImage(image_path, puzzle_dimensions):
    # Create folder for the pieces
    folder_path = create_folder(image_path)
    # Open image
    image = Image.open(image_path)
    # Get image dimensions
    width, height = [600,600]
    PDX = puzzle_dimensions[0]
    PDY = puzzle_dimensions[1]
    # Set piece of puzzle dimensions (-5px for safety)
    piece_width = round(width / PDX)
    piece_height = round(height / PDY)
    # Define start and end Y
    startY = 0
    endY = startY + piece_height
    # Iterate through rows and columns and crop image
    piece_id = 0
    pieces_ids = []
    for row in range(PDY):
        startX = 0
        endX = startX + piece_width
        for col in range(PDX):
            cropped_piece = image.crop((startX, startY, endX, endY))
            save_pieces(cropped_piece, piece_id, folder_path)
            startX = startX + piece_width
            endX = endX + piece_width
            pieces_ids.append(piece_id)
            piece_id += 1
        startY = startY + piece_height
        endY = endY + piece_height
    random.shuffle(pieces_ids)
    image_info.update({'pieces_ids': pieces_ids})
    return image_info


def save_pieces(cropped_piece, piece_id, folder_path):
    cropped_piece.save(f'{folder_path}/{piece_id}.jpeg', 'jpeg')


def create_folder(image_path):
    IMG_PATH = 0
    IMG_NAME = -1
    folder_name = image_path.split('.')[IMG_PATH].split('/')[IMG_NAME].replace('\\', '')
    x = folder_name + "_pieces"
    pieces_folder_path = f'{working_path}/{folder_name}_pieces'

    try:
        os.mkdir(pieces_folder_path)
    except OSError:
        shutil.rmtree(pieces_folder_path, ignore_errors=True)
        os.mkdir(pieces_folder_path)
        image_info.update({'image_name': folder_name, 'folder_path': pieces_folder_path, 'folder_name': x})
        return pieces_folder_path
    else:
        image_info.update({'image_name': folder_name, 'folder_path': pieces_folder_path, 'folder_name': x})
        return pieces_folder_path


