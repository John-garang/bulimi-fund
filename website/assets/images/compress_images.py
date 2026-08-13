from PIL import Image
import os
from pathlib import Path

# Configuration
QUALITY = 80  # 80% quality - good balance between size and quality
MAX_WIDTH = 1920  # Max width for large images
BACKUP_EXTENSION = '.backup'

def compress_image(image_path):
    """Compress an image while maintaining quality"""
    try:
        # Create backup
        backup_path = image_path + BACKUP_EXTENSION
        if not os.path.exists(backup_path):
            os.rename(image_path, backup_path)
            print(f"Created backup: {backup_path}")
        else:
            # If backup exists, use it as source
            image_path = backup_path

        # Open image
        img = Image.open(image_path)
        
        # Convert RGBA to RGB if necessary (for JPEG)
        if img.mode in ('RGBA', 'P'):
            img = img.convert('RGB')
        
        # Resize if too large
        width, height = img.size
        if width > MAX_WIDTH:
            ratio = MAX_WIDTH / width
            new_height = int(height * ratio)
            img = img.resize((MAX_WIDTH, new_height), Image.Resampling.LANCZOS)
            print(f"Resized {os.path.basename(image_path)} from {width}x{height} to {MAX_WIDTH}x{new_height}")
        
        # Save with compression
        output_path = image_path.replace(BACKUP_EXTENSION, '')
        img.save(output_path, 'JPEG', quality=QUALITY, optimize=True)
        
        # Get file sizes
        original_size = os.path.getsize(backup_path)
        compressed_size = os.path.getsize(output_path)
        reduction = ((original_size - compressed_size) / original_size) * 100
        
        print(f"Compressed {os.path.basename(output_path)}: {original_size/1024:.1f}KB → {compressed_size/1024:.1f}KB ({reduction:.1f}% reduction)")
        
    except Exception as e:
        print(f"Error processing {image_path}: {e}")

def main():
    image_dir = Path(__file__).parent
    image_extensions = ['.jpg', '.jpeg', '.png']
    
    print("Starting image compression...")
    print(f"Quality: {QUALITY}%, Max width: {MAX_WIDTH}px")
    print("-" * 60)
    
    # Process all images
    for ext in image_extensions:
        for image_file in image_dir.glob(f'*{ext}'):
            if BACKUP_EXTENSION not in str(image_file):
                compress_image(str(image_file))
    
    print("-" * 60)
    print("Compression complete!")
    print(f"Backup files saved with '{BACKUP_EXTENSION}' extension")
    print("To restore originals, delete compressed files and rename backups")

if __name__ == '__main__':
    main()