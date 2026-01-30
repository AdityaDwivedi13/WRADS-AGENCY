"""
WRADS Website Packaging Script
==============================
Run this script to create WRADS_Website.zip from the WRADS_Agency_Site folder.

Usage: python create_package.py
"""

import os
import zipfile
import shutil

def create_zip_package():
    # Define paths
    script_dir = os.path.dirname(os.path.abspath(__file__))
    source_folder = os.path.join(script_dir, "WRADS_Agency_Site")
    zip_filename = os.path.join(script_dir, "WRADS_Website.zip")
    
    # Check if source folder exists
    if not os.path.exists(source_folder):
        print(f"Error: Source folder '{source_folder}' not found!")
        print("Make sure the WRADS_Agency_Site folder is in the same directory as this script.")
        return False
    
    # List files to be zipped
    files_to_zip = []
    for root, dirs, files in os.walk(source_folder):
        for file in files:
            file_path = os.path.join(root, file)
            arcname = os.path.relpath(file_path, script_dir)
            files_to_zip.append((file_path, arcname))
    
    print("=" * 50)
    print("WRADS Website Packaging Script")
    print("=" * 50)
    print(f"\nSource folder: {source_folder}")
    print(f"Output file: {zip_filename}")
    print(f"\nFiles to be packaged:")
    
    for file_path, arcname in files_to_zip:
        print(f"  - {arcname}")
    
    # Create ZIP file
    try:
        with zipfile.ZipFile(zip_filename, 'w', zipfile.ZIP_DEFLATED) as zipf:
            for file_path, arcname in files_to_zip:
                zipf.write(file_path, arcname)
        
        # Get file size
        zip_size = os.path.getsize(zip_filename)
        zip_size_kb = zip_size / 1024
        
        print(f"\n{'=' * 50}")
        print(f"SUCCESS! Package created successfully!")
        print(f"{'=' * 50}")
        print(f"\nOutput: {zip_filename}")
        print(f"Size: {zip_size_kb:.1f} KB")
        print(f"\nYou can now share or upload WRADS_Website.zip")
        print("Extract it and open index.html to view the website.")
        
        return True
        
    except Exception as e:
        print(f"\nError creating ZIP file: {e}")
        return False


if __name__ == "__main__":
    create_zip_package()
