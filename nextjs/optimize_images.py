import os
from PIL import Image

def optimize_directory(directory):
    total_saved = 0
    for root, dirs, files in os.walk(directory):
        for file in files:
            if file.lower().endswith(('.png', '.jpg', '.jpeg')):
                filepath = os.path.join(root, file)
                
                # Exclude if it's already a webp or a special file
                if filepath.endswith('.webp'):
                    continue
                
                # Calculate original size
                orig_size = os.path.getsize(filepath)
                
                try:
                    img = Image.open(filepath)
                    # Convert to RGB if saving to webp might have issues with RGBA, 
                    # but webp supports RGBA. We just save directly.
                    webp_filepath = os.path.splitext(filepath)[0] + '.webp'
                    
                    # Save as WebP
                    img.save(webp_filepath, 'webp', quality=75, method=4)
                    
                    new_size = os.path.getsize(webp_filepath)
                    total_saved += (orig_size - new_size)
                    
                    # Delete the original file
                    os.remove(filepath)
                    print(f"Optimized: {file} -> {os.path.basename(webp_filepath)} (Saved { (orig_size-new_size)/1024:.1f} KB)")
                except Exception as e:
                    print(f"Failed to optimize {file}: {e}")
                    
    print(f"\nTotal space saved: {total_saved / (1024*1024):.2f} MB")

optimize_directory('public/images')
